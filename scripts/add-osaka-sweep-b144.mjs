// Osaka sweep (2-mile circle around Dotonbori), batch 144 — mom / small-shop phase (all OMNI).
//   + 西心斎橋 ゆうの (kappo kaiseki course of the season, two seatings from 18:00; Nishi-Shinsaibashi)
//   + 炭屋 こばこ (small charcoal yakitori with chicken sashimi and a whole roasted onion; Nipponbashi; same building as Tenchi Jin, offset)
//   + 炭火焼 鳥清 (third-floor course-only charcoal yakitori; Higashi-Shinsaibashi)
//   + かき小屋ランドリー (14-seat oyster bar: oyster tasting set, steamed oysters, oyster bucket and risotto; Ura-Namba edge)
//   Skipped 料理店オクノ 27138293: the name reads as a surname; person-named shops are avoided.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, skip, save } = openCitySweep('osaka', TODAY, 144);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27138293', 'Name 料理店オクノ reads as a surname; person-named shops are avoided (doc rule).');

// ================================================================ 西心斎橋 ゆうの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27015761/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_nishishinsaibashi_yuno', name: '西心斎橋 ゆうの (Nishi Shinsaibashi Yuno)', category: 'OMNI',
    lat: 34.674225, lng: 135.498658, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based dashi and sauces throughout; udon and somen; tempura and fried dishes. Tell the restaurant when booking and ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish dashi; seafood, turtle, eel and beef courses.',
    hours_raw: 'Dinner from 18:00 in two seatings, last order 19:00; closed Mondays (Tabelog). End time not listed. Course ¥23,880 including tax and service; 10% service charge (Tabelog). Cards accepted; no e-money (Tabelog). Private rooms for 4, 6 or 8 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-35 — 3 min from Yotsubashi Stn; Shinsaibashi Stn nearby',
    cuisine: 'Kappo kaiseki, one seasonal course · ¥23,880 including tax and service · examples by season: sashimi with three sauces including natto soy sauce; soft-shelled turtle wonton with matsutake; sweetfish soup; grilled eel with sea urchin; Inaniwa udon in an abalone-liver sauce; clam shinjo; sea bream milt with fine udon, karasumi and firefly squid; three sea urchins (Hokkaido, Aomori, Awaji); beef; rice to finish, e.g. fried shrimp and bamboo shoot rice · antique tableware matched to the season · sake and wine · 16 seats, private rooms for 4–8',
    website: null, gmaps: gm('西心斎橋 ゆうの'), menu_url: null,
    notes: "[Kappo · a seasonal kaiseki course in Nishi-Shinsaibashi] A refined kappo restaurant near Yotsubashi serving one omakase course of Naniwa-style kaiseki, ¥23,880 with tax and service, in two seatings from 18:00. The menu follows the season closely, from a soft-shelled turtle wonton with matsutake and grilled eel with sea urchin in autumn to clam shinjo and sea bream milt with fine udon in spring, and the clear dashi is the thread through it all. Plates are set on antique tableware chosen for the month, such as a chrysanthemum-shaped dish in autumn. Sake runs to wine. Private rooms for business dinners. Reserve; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Kappo kaiseki restaurant (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Seasonal Naniwa-style kaiseki course.',
      anecdotes: [
        { text: '"At Yuno, the seasonal story is not only reflected in the food but also in the tableware and presentation. I was particularly impressed by an antique dish shaped like a chrysanthemum flower." — October 2026.', source: R + 'B524717262/' },
        { text: '"The seasonal fish and vegetables showcased the profound depth of the dashi in each dish. Rather than flashy presentations, the cuisine captivates with its essence." — February 2026.', source: R + 'B523536686/' },
      ],
      japanese_sources_summary: '食べログ: 西心斎橋 ゆうの、大阪市中央区西心斎橋1-10-35、四ツ橋駅から174m、18:00から (2部制)、L.O. 19:00、月曜休み、コース23,880円 (税・サービス料込み)、サービス料10%、カード可、電子マネー不可、16席、4・6・8名の個室あり。口コミ(2025年9月〜2026年10月): Naniwa の kaisekiのおまかせコース、季節の食材、matsutake とすっぽんのワンタン、鮎のスープ、ウニをのせた鰻の焼き物、あわびの肝のソースの Inaniwa うどん、貝の shinjo、鯛の白子と細うどんに karasumi とホタルイカ、海老と筍のご飯、北海道・青森・淡路の3種のウニ、出汁の深さ、季節に合わせた古い器 (菊の形の皿)、日本酒からワインまで、接待にも、急な予約に対応してもらえたという声。',
      confidence: 'medium', sources: [TB, R + 'B417366096/', R + 'B484648579/', R + 'B523506673/', R + 'B523536686/', R + 'B524717262/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set course; reserve (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-35',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番35号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B417366096/', R + 'B484648579/'],
    price_note: 'Course price from the Tabelog listing (2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', '¥23,880', 'Courses', 'no', 'no', 'Tax and service included (Tabelog).', 'course'),
      it('', '', 'Soft-shelled turtle wonton with matsutake', '', 'Course dishes', 'no', 'no', 'Autumn (September 2025).', 'suppon'),
      it('', '', 'Sea bream milt with fine udon, karasumi and firefly squid', '', 'Course dishes', 'no', 'no', 'Spring (May 2026).', 'shirako_udon'),
      it('', '', 'Clam shinjo', '', 'Course dishes', 'ask', 'no', 'May 2026.', 'shinjo'),
    ] }, {
    cuisine: '割烹の kaiseki、季節のコースひとつ・税・サービス料込み23,880円・季節ごとの例: 納豆醤油を含む3種のたれで食べる刺身、すっぽんと matsutake のワンタン、鮎のスープ、ウニをのせた鰻の焼き物、あわびの肝のソースの Inaniwa うどん、貝の shinjo、鯛の白子と細うどんに karasumi とホタルイカ、北海道・青森・淡路の3種のウニ、牛肉、締めのご飯 (たとえば海老と筍のご飯)・季節に合わせた古い器・日本酒とワイン・16席、4〜8名の個室',
    neighborhood: '中央区西心斎橋1-10-35。四ツ橋駅から徒歩3分、心斎橋駅も近い',
    gf_detail: 'グルテンフリーではありません。出汁やたれに醤油、うどんとそうめん、天ぷらや揚げ物。予約の際に伝えて確認を。',
    vegan_detail: 'ヴィーガンではありません。魚の出汁、魚介、すっぽん、鰻、牛肉のコース。',
    notes: '[割烹・西心斎橋、季節の kaiseki のコース] 四ツ橋近くの端正な割烹で、Naniwa の kaisekiのおまかせコースひとつ (税・サービス料込み23,880円)、18:00からの2部制。献立は季節に寄り添い、秋はすっぽんと matsutake のワンタンやウニをのせた鰻、春は貝の shinjoや鯛の白子と細うどんなど、すべてを澄んだ出汁がつなぐ。器はその月に合わせた古いもので、秋には菊の形の皿も。日本酒からワインまで。接待向きの個室あり。予約を。月曜休み。',
  });
}

// ================================================================ 炭屋 こばこ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27065696/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sumiya_kobako_nipponbashi', name: '炭屋 こばこ (Sumiya Kobako)', category: 'OMNI',
    lat: 34.664629, lng: 135.506278, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare on some skewers; kara-age and fries; soy sauce with the chicken sashimi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout; butter on the roasted onion; chicken soup.',
    hours_raw: 'Daily 17:00–24:00 (last order food 23:00, drinks 23:30); closes when sold out; closing days not fixed (Tabelog). Reserve; small (September 2026). Cards and PayPay accepted; no e-money (Tabelog). Heated tobacco only inside; cigarettes outside (Tabelog).',
    hours: ALL(day(['17:00', '23:59'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nipponbashi 2-4-10, Nipponbashi UK Bldg 1F, a little off the shopping street — 3 min from Nipponbashi Stn',
    cuisine: 'Charcoal yakitori izakaya · skewers with salt, tare or wasabi: skin, zuri, negima, furisode, tsukune, kokoro, seseri, tsunagi · chicken sashimi assortment (seared thigh, liver, heart, breast, gizzard) with soy sauce · whole roasted onion with butter, salt and pepper · kara-age · Yamaimo Yuzu-zuke · cold tofu with shiso · fries · rich chicken soup and grilled rice balls to finish · Katsuobushi TKG · Tanizake sake (about 80 ml for around ¥600); Sapporo Lager Akaboshi bottles · 18 seats: 6 at the counter, tables for 4',
    website: null, gmaps: gm('炭屋 こばこ'), menu_url: null,
    notes: "[Yakitori · a small charcoal yakitori with chicken sashimi, Nipponbashi] A cozy, hidden-feeling yakitori a little off the Nipponbashi shopping street, with a short counter and a few four-person tables, so it suits pairs and small groups rather than parties. Skewers come with salt, tare or wasabi, from seseri and kokoro to tsukune and furisode, and there's a fresh chicken sashimi assortment. Don't skip the whole roasted onion, sweet and simply seasoned with butter, salt and pepper, or the crisp kara-age. Finish with the rich, clean chicken soup and grilled rice balls. One diner found the service a bit slow. Reserve; open until midnight.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Charcoal yakitori izakaya (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Yakitori; chicken sashimi.',
      anecdotes: [
        { text: '"We also tried the whole roasted onion. Simply seasoned with butter and salt and pepper. The sweetness of the onion was brought out…" — September 2026.', source: R + 'B534964534/' },
        { text: '"I especially recommend the chicken broth. It\'s rich yet light and easy to drink, making it perfect to finish off the meal." — September 2026.', source: R + 'B534936434/' },
      ],
      japanese_sources_summary: '食べログ: 炭屋 こばこ、大阪市中央区日本橋2-4-10 日本橋ＵＫビル 1F、日本橋駅から徒歩3分、毎日17:00〜24:00 (L.O. 料理23:00・ドリンク23:30)、売り切れ次第終了、定休日不定、カード・PayPay 可、電子マネー不可、18席 (カウンター6、4名テーブル3)、店内は加熱式たばこのみ。口コミ(2025年5月〜2026年10月): 商店街から少し外れた小さな焼き鳥店、少人数向き、塩・たれ・わさびの串、砂ズリ&ネギマ、皮、furisode、tsukune、kokoro、seseri、tsunagi、鶏刺しの盛り合わせ、バターと塩こしょうの玉ねぎの丸焼き、kara-age、Yamaimo Yuzu-zuke、大葉をのせた冷ややっこ、フライドポテト、締めの濃い鶏スープと焼きおにぎり、Katsuobushi TKG、Tanizake (約80mlで約600円)、瓶の Sapporo Lager Akaboshi、予約を、提供が少し遅いという声。',
      confidence: 'medium', sources: [TB, R + 'B506671788/', R + 'B534936434/', R + 'B534964534/', R + 'B535113240/', R + 'B537727213/', R + 'B538212249/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small; reserve (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-4-10 日本橋ＵＫビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.664692, 135.506278); same building as Tenchi Jin Nipponbashi (osaka_tenchijin_nipponbashi), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市中央区日本橋二丁目4番10号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534964534/', R + 'B534936434/', R + 'B538212249/'],
    price_note: 'Only the sake price appears in the reviews; JPY 4,000–4,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Chicken sashimi assortment', '', 'Chicken', 'ask', 'no', 'September 2026.', 'torisashi'),
      it('砂ズリ&ネギマ', '', 'Gizzard and negima skewers', '', 'Skewers', 'ask', 'no', 'September 2026.', 'zuri_negima'),
      it('', '', 'Whole roasted onion with butter', '', 'Vegetables', 'ask', 'no', 'September 2026.', 'onion'),
      it('', '', 'Kara-age', '', 'Fried', 'no', 'no', 'October 2026.', 'karaage'),
      it('', '', 'Rich chicken soup', '', 'Finish', 'ask', 'no', 'September 2026.', 'soup'),
      it('', '', 'Tanizake sake (about 80 ml)', '¥600', 'Drinks', 'ask', 'ask', 'Around ¥600 (September 2026).', 'sake'),
    ] }, {
    cuisine: '炭火焼き鳥の居酒屋・塩、たれ、わさびの串: 皮、砂ズリ、ネギマ、furisode、tsukune、kokoro、seseri、tsunagi・鶏刺しの盛り合わせ (あぶったもも、レバー、ハツ、むね、砂肝) を醤油で・バターと塩こしょうの玉ねぎの丸焼き・kara-age・Yamaimo Yuzu-zuke・大葉をのせた冷ややっこ・フライドポテト・締めの濃い鶏スープと焼きおにぎり・Katsuobushi TKG・Tanizake (約80mlで約600円)、瓶の Sapporo Lager Akaboshi・18席: カウンター6席と4名のテーブル',
    neighborhood: '中央区日本橋2-4-10 日本橋ＵＫビル 1F、商店街から少し外れて。日本橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。一部の串のたれ、kara-age とポテト、鶏刺しの醤油。',
    vegan_detail: 'ヴィーガンではありません。鶏肉ばかり、玉ねぎにバター、鶏のスープ。',
    notes: '[焼き鳥・日本橋、鶏刺しもある小さな炭火焼き鳥] 日本橋の商店街から少し外れた、隠れ家のような小さな焼き鳥店で、短いカウンターと4名のテーブルがいくつか、宴会より2人や少人数向き。串は塩・たれ・わさびで、seseri や kokoro から tsukune、furisode まで、新鮮な鶏刺しの盛り合わせも。甘みの出たバターと塩こしょうの玉ねぎの丸焼き、からりとした kara-age もぜひ。締めは濃いのにすっきりした鶏スープと焼きおにぎり。提供が少し遅いという声も。予約を。深夜0時まで。',
  });
}

// ================================================================ 炭火焼 鳥清
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27118868/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']);
  put({
    id: 'osaka_sumibiyaki_torisei_higashishinsaibashi', name: '炭火焼 鳥清 (Sumibiyaki Torisei)', category: 'OMNI',
    lat: 34.674463, lng: 135.50446, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: set course with tare and soy-based dishes; ask before booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and quail courses; chicken soup.',
    hours_raw: 'Mon–Sat and public holidays 17:30–23:00 (last order food 22:00, drinks 22:30); closed Sun (Tabelog). Courses only, by reservation (September–October 2026). ¥600 charge included in the course price (Tabelog). Cards and PayPay accepted; no e-money (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-9-13, 3F of a small, easy-to-miss building — 3 min from Nagahoribashi Stn exit 5-B',
    cuisine: 'Charcoal yakitori courses only · e.g. ¥5,500 course and up: appetizers, tataki, charcoal-grilled skewers such as seseri and tsukune, seasonal vegetables, grilled quail, then a very hot chicken soup to finish · chicken sashimi as an add-on · green plum ice cream · Kirin Lager · 13 seats',
    website: null, gmaps: gm('炭火焼 鳥清'), menu_url: null,
    notes: "[Yakitori · course-only charcoal yakitori on a third floor, Higashi-Shinsaibashi] A cozy yakitori on the third floor of a small building near Nagahoribashi that is easy to walk past. Only courses are served, from ¥5,500, and they mix yakitori grilled slowly over charcoal with Japanese dishes: appetizers and tataki, then skewers, where diners single out the seseri and tsukune, vegetables and grilled quail, ending with a chicken soup served very hot. The skewers are small but many, and the courses fill you up. Add chicken sashimi, and try the green plum ice cream. One diner found it salty and one found the pace a little rushed. Reserve; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Course-only charcoal yakitori (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Yakitori courses.',
      anecdotes: [
        { text: '"The yakitori was grilled slowly over charcoal, giving it a fragrant aroma and juicy flavor. The seseri (neck meat) and tsukune (chicken meatballs) were absolutely exquisite." — September 2026.', source: R + 'B536371723/' },
        { text: '"The chicken soup to finish off was extremely hot, so be careful ⚠️, but it was irresistibly tasty." — September 2026.', source: R + 'B535417226/' },
      ],
      japanese_sources_summary: '食べログ: 炭火焼 鳥清、大阪市中央区東心斎橋1-9-13 3F、長堀橋駅5-B出口から徒歩3分、月〜土・祝 17:30〜23:00 (L.O. 料理22:00・ドリンク22:30)、日曜休み、チャージ料600円 (コース料金に含む)、カード・PayPay 可、電子マネー不可、13席。口コミ(2026年9〜10月): 小さなビルの3階で通り過ぎやすい、コースのみ、5,500円のコースなど、前菜、tataki、炭火でじっくり焼く串 (seseri、tsukune)、野菜、うずらの焼き物、締めのとても熱い鶏スープ、追加の鶏刺し、青梅のアイス、Kirin Lager、串は小ぶりだが数が多く満腹に、塩気が強いという声、少し慌ただしいという声。',
      confidence: 'medium', sources: [TB, R + 'B535417226/', R + 'B535582804/', R + 'B536371723/', R + 'B536486062/', R + 'B537398956/', R + 'B537423957/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses only; reserve (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-9-13 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目9番13号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537398956/', R + 'B535417226/', R + 'B535582804/'],
    price_note: 'Course price from an October 2026 review; higher courses exist.', last_checked: TODAY, items: [
      it('', '', 'Yakitori course', '¥5,500', 'Courses', 'no', 'no', 'October 2026; the lowest-priced course one diner chose.', 'course'),
      it('', '', 'Chicken sashimi (add-on)', '', 'Add-ons', 'ask', 'no', 'September 2026.', 'torisashi'),
      it('', '', 'Green plum ice cream', '', 'Dessert', 'ask', 'ask', 'September 2026.', 'ice'),
    ] }, {
    cuisine: '炭火焼き鳥のコースのみ・たとえば5,500円からのコース: 前菜、tataki、炭火で焼く seseri や tsukune などの串、季節の野菜、うずらの焼き物、締めにとても熱い鶏スープ・追加で鶏刺し・青梅のアイス・Kirin Lager・13席',
    neighborhood: '中央区東心斎橋1-9-13 3F、通り過ぎやすい小さなビル。長堀橋駅5-B出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。たれや醤油を使う料理のあるコース。予約前に確認を。',
    vegan_detail: 'ヴィーガンではありません。鶏とうずらのコース、鶏スープ。',
    notes: '[焼き鳥・東心斎橋、ビル3階のコースのみの炭火焼き鳥] 長堀橋近く、小さなビルの3階にある居心地のいい焼き鳥店で、つい通り過ぎてしまう。コースのみで5,500円から、炭火でじっくり焼く焼き鳥と和の料理を組み合わせる: 前菜とtataki、とくに声の多い seseri と tsukune の串、野菜とうずらの焼き物、締めはとても熱い鶏スープ。串は小ぶりだが数が多く、満腹になる。鶏刺しの追加や青梅のアイスもぜひ。塩気が強い、少し慌ただしいという声も。予約を。日曜休み。',
  });
}

// ================================================================ かき小屋ランドリー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27072353/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '23:59']); const B = day(['15:00', '23:59']);
  put({
    id: 'osaka_kaki_goya_laundry_nipponbashi', name: 'かき小屋ランドリー (Kaki Goya Laundry)', category: 'OMNI',
    lat: 34.664051, lng: 135.505446, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried oysters and cream croquettes; gratin; ajillo with baguette; soy and ponzu with the oysters.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an oyster bar; bacon in the oyster bucket.',
    hours_raw: 'Mon–Sat 17:00–24:00; Sun and public holidays 15:00–24:00; last order 23:30; closes when sold out; closing days not fixed (Tabelog). Phone reservations after 15:00 (Tabelog). Cards, e-money, PayPay and Alipay accepted (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: A, 6: B }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nipponbashi 2-7-25, on a narrow street off the main road at the edge of Ura-Namba — 5 min from Nipponbashi Stn',
    cuisine: 'Oyster bar · raw oysters by origin, e.g. a three-oyster tasting set, Hokkaido oysters from Senposhi and Konbumori, Sakoshi oysters · steamed oysters (bottomless in the Kaki Goya set) with condiments such as Lemosco and sesame oil with ponzu; shells go in a bucket at your feet · oyster bucket with onion, tomato and bacon · fried oysters · oysters with butter and soy sauce · oyster gratin · ajillo with baguette · cream croquettes · risotto from the leftover broth (carbonara, tomato or basil) · shochu · 14 seats',
    website: null, gmaps: gm('かき小屋ランドリー'), menu_url: null,
    notes: "[Oyster bar · a small oyster bar on a back street, Nipponbashi] A small, friendly oyster bar on a narrow lane at the edge of Ura-Namba with fresh oysters year round. Start with the tasting set of three oysters from different regions, or go for the Kaki Goya set, which pairs raw Sakoshi oysters with bottomless steamed oysters, fried oysters and a risotto made from the leftover broth. Steamed oysters come piled high with a lineup of condiments; toss the shells into the bucket at your feet. The oyster bucket, the ajillo and a rich gratin round out the menu. Smoking allowed. Open until midnight.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Oyster bar (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Raw and steamed oysters.',
      anecdotes: [
        { text: '"The Kaki Goya set includes all-you-can-eat steamed oysters, and I quickly devoured more than ten of them and ordered more." — October 2026.', source: R + 'B537236755/' },
        { text: '"The recommended assorted platter of three types featured oysters from different regions, and the ones from Hokkaido today were large, sweet, and absolutely fantastic!" — October 2026.', source: R + 'B537804025/' },
      ],
      japanese_sources_summary: '食べログ: かき小屋ランドリー、大阪市中央区日本橋2-7-25、日本橋駅から徒歩5分、月〜土 17:00〜24:00、日・祝 15:00〜24:00、L.O. 23:30、売り切れ次第終了、定休日不定、電話予約は15:00以降、カード・電子マネー・PayPay・Alipay 可、喫煙可、14席。口コミ(2026年6〜10月): 大通りから入った細い道、裏なんばのはずれ、一年中新鮮な生牡蠣、3種の食べ比べ、仙鳳趾産と昆布森産の生牡蠣、セットは坂越の牡蠣、食べ放題の蒸し牡蠣 (調味料はレモスコ、ごま油＆ポン酢など)、殻は足元のバケツへ、牡蠣バケツ (玉ねぎ、トマト、ベーコン)、カキフライ、バター醤油、グラタン、アヒージョとバゲット、クリームコロッケ、しめのリゾット (カルボナーラ風、トマト、バジル)、親切な店の人。',
      confidence: 'medium', sources: [TB, R + 'B529558007/', R + 'B533421070/', R + 'B536351124/', R + 'B536427943/', R + 'B537236755/', R + 'B537804025/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Kind, attentive staff (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-7-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目7番25号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529558007/', R + 'B536351124/', R + 'B537236755/'],
    price_note: 'No dish prices in the reviews; JPY 5,000–5,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Oyster tasting set (three oysters)', '', 'Raw oysters', 'ask', 'no', 'June and October 2026.', 'tasting'),
      it('', '', 'Kaki Goya set (raw, bottomless steamed and fried oysters, risotto)', '', 'Sets', 'no', 'no', 'October 2026.', 'set'),
      it('蒸し牡蠣', '', 'Steamed oysters', '', 'Oysters', 'ask', 'no', 'October 2026.', 'steamed'),
      it('牡蠣バケツ', '', 'Oyster bucket', '', 'Oysters', 'ask', 'no', 'September–October 2026.', 'bucket'),
      it('カキフライ', '', 'Fried oysters', '', 'Fried', 'no', 'no', 'October 2026.', 'fried'),
      it('アヒージョ', '', 'Ajillo with baguette', '', 'Dishes', 'no', 'no', 'October 2026.', 'ajillo'),
    ] }, {
    cuisine: '牡蠣のバー・産地ごとの生牡蠣、たとえば3種の食べ比べ、北海道の仙鳳趾産と昆布森産、坂越の牡蠣・蒸し牡蠣 (かき小屋セットでは食べ放題)、調味料はレモスコ、ごま油＆ポン酢など、殻は足元のバケツへ・玉ねぎ、トマト、ベーコンの牡蠣バケツ・カキフライ・牡蠣のバター醤油・牡蠣グラタン・アヒージョとバゲット・クリームコロッケ・残った汁で作るしめのリゾット (カルボナーラ風、トマト、バジル)・焼酎・14席',
    neighborhood: '中央区日本橋2-7-25、大通りから入った細い道、裏なんばのはずれ。日本橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。カキフライとクリームコロッケ、グラタン、アヒージョのバゲット、牡蠣に醤油とポン酢。',
    vegan_detail: 'ヴィーガンではありません。牡蠣の店で、牡蠣バケツにベーコン。',
    notes: '[牡蠣バー・日本橋、裏通りの小さな牡蠣のバー] 裏なんばのはずれ、細い路地にある小さな気さくな牡蠣のバーで、一年中新鮮な生牡蠣がある。まずは産地の違う3種の食べ比べか、坂越の生牡蠣に食べ放題の蒸し牡蠣、カキフライ、残った汁で作るリゾットがつくかき小屋セットを。蒸し牡蠣は山盛りで調味料もいろいろ、殻は足元のバケツへ。牡蠣バケツ、アヒージョ、濃厚なグラタンも。喫煙可。深夜0時まで。',
  });
}

save();
