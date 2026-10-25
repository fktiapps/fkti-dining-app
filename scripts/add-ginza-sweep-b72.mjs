// Ginza Station half-mile sweep (805 m), batch 72 — first of the ALL-GENRE phase (smallest seats / old M&P leads first).
//   + レストラン早川 (yōshoku since 1936; couple-run per a 2026 review, names not found → OMNI)
//   + 泰明庵 (soba since 1955, ex-fishmonger 1950; owner not named in any source → OMNI)
//   + 吉そば 銀座本店 (standing soba, 24 h most weekdays; yoshisoba.jp chain → OMNI)
//   + 銀座 真田 (Karuizawa-style soba; also a GINZA SIX branch → OMNI)
// Skipped: 蛙たち 13167748 (last review 2025-07), みやざわ 13024142 (relocated — the new 銀座 みやざわ 13327108 is queued),
// 月光荘サロン 月のはなれ 13168850 (already in data). All added to the filter skip set.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ レストラン早川
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13007631/'; const R = TB + 'dtlrvwlst/';
  const AU = 'https://aumo.jp/articles/21772';
  const mt = day(['11:30', '15:00'], ['18:00', '20:00']);
  put({
    id: 'tokyo_restaurant_hayakawa_ginza4', name: 'レストラン早川 (Restaurant Hayakawa)', category: 'OMNI',
    lat: 35.670086, lng: 139.767187,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded pork cutlets, katsu curry and ketchup spaghetti; sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork sauté, ginger pork, pork cutlet, katsu curry.',
    hours_raw: 'Mon–Thu 11:30–15:00 and 18:00–20:00; Fri 11:30–15:00 only; closed Sat, Sun and holidays (Tabelog). Cash only (2026 reviews).',
    hours: { 0: mt, 1: mt, 2: mt, 3: mt, 4: day(['11:30', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme on Shōwa-dōri, opposite the Kabuki-za — 1 min from Higashi-Ginza Stn',
    cuisine: 'Yōshoku since 1936 · pork sauté ¥1,200, ginger pork or pork cutlet set ¥1,300, katsu curry · cash only', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('レストラン早川 銀座4-10-7'), menu_url: null,
    notes: "[Yōshoku · since 1936, opposite the Kabuki-za] A tiny, retro Western-style diner on Shōwa-dōri facing the Kabuki-za, open since 1936, with a plastic-food window and a black telephone inside. Twelve seats at four tables plus a counter, so solo diners share. A 2026 diner describes it as run by a couple: the chef behind the counter and a woman serving. Lunch is classic and simple: pork sauté ¥1,200 (large rice +¥200), ginger pork set ¥1,300 with ketchup spaghetti and fried-tofu miso soup, pork cutlet ¥1,300 and a modest katsu curry (miso soup +¥100). Cash only; come off-peak.",
    chef_bio: { chef_name: null, roles: ['chef'], origin: 'Founded 1936 (昭和11年) (2026 reviews; aumo)', background: 'Run by a couple per a September 2026 review — names not found in any source.', philosophy: null, specialty: 'Pork sauté; ginger pork.',
      anecdotes: [
        { text: '"It\'s run by a couple. I ordered the katsu curry." — September 2026.', source: R + 'B535535426/' },
        { text: '"Pork Sauté - JPY 1,200, Large Rice - JPY 200" — August 2026, at opening.', source: R + 'B533987592/' },
      ],
      japanese_sources_summary: '食べログ: レストラン早川(ハヤカワ)、銀座4-10-7、東銀座駅から徒歩1分、月〜木11:30〜15:00・18:00〜20:00、金11:30〜15:00、土日祝休、12席。aumo: 昭和11年(1936年)創業の老舗洋食店、食品サンプル、店内の黒電話。2026年の口コミ: 歌舞伎座の向かい、テーブル4卓とカウンター、相席、ポークソテー1,200円・大盛り200円、生姜焼き定食1,300円(ケチャップのスパゲッティ、油揚げの味噌汁)、とんかつ1,300円、カツカレー(小さめ)、味噌汁100円、現金のみ、夫婦で営む(厨房の主人とホールの女性)。',
      confidence: 'medium', sources: [TB, AU, R + 'B535535426/', R + 'B533987592/', R + 'B535411925/', R + 'B537327166/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; shared tables; small room.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-10-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目10番7号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533987592/', R + 'B535411925/', R + 'B535586607/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('ポークソテー', 'pooku sotee', 'Pork sauté', '¥1,200', 'Lunch', 'ask', 'no', 'August 2026; large rice +¥200.', 'pork_saute'),
      it('生姜焼き定食', 'shoogayaki teishoku', 'Ginger pork set with ketchup spaghetti and miso soup', '¥1,300', 'Lunch', 'no', 'no', 'September 2026.', 'ginger_pork'),
      it('とんかつ', 'tonkatsu', 'Pork cutlet', '¥1,300', 'Lunch', 'no', 'no', 'September 2026.', 'tonkatsu'),
      it('カツカレー', 'katsu karee', 'Katsu curry', '', 'Lunch', 'no', 'no', '', 'katsu_curry'),
    ] }, {
    cuisine: '1936年創業の洋食・ポークソテー1,200円、生姜焼きやとんかつの定食1,300円、カツカレー・現金のみ',
    neighborhood: '銀座四丁目の昭和通り沿い、歌舞伎座の向かい。東銀座駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。衣のとんかつ、カツカレー、ケチャップのスパゲッティなど。ソースの内容は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。ポークソテー、生姜焼き、とんかつ、カツカレー。',
    notes: '[洋食・1936年創業、歌舞伎座の向かい] 昭和通りを挟んで歌舞伎座の向かいにある、1936年創業のレトロで小さな洋食屋。店頭には食品サンプル、店内には黒電話。テーブル4卓とカウンターで12席、一人だと相席に。2026年の客によれば、厨房の主人とホールの女性の夫婦で営む店。昼はシンプルな定番で、ポークソテー1,200円(大盛り+200円)、ケチャップのスパゲッティと油揚げの味噌汁が付く生姜焼き定食1,300円、とんかつ1,300円、やや小ぶりのカツカレー(味噌汁+100円)。現金のみ、ピークを外して。',
  });
}

// ================================================================ 泰明庵
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002558/'; const R = TB + 'dtlrvwlst/';
  const DM = 'https://dime.jp/genre/1138914/';
  const wk = day(['11:30', '21:00']);
  put({
    id: 'tokyo_taimeian_soba_ginza6', name: '泰明庵 (Taimei-an)', category: 'OMNI',
    lat: 35.671403, lng: 139.760871,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: buckwheat noodles with a wheat binder are standard, tsuyu uses soy sauce, and many dishes are tempura; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based broths and dipping sauces, plus tempura, chicken soba and dashimaki tamago.',
    hours_raw: 'Mon–Fri 11:30–21:00 (L.O. 20:00), open all day; closed Saturdays (from September 2026), Sundays and holidays (Tabelog). No service charge.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme back street near Taimei Elementary School, 6-3-14 — near Ginza Stn and the Corridor',
    cuisine: 'Old-style soba house and day-drinking spot since 1955 · tanuki soba, seiro, winter seri curry soba · tempura and small plates', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('泰明庵 銀座6-3-14'), menu_url: null,
    notes: "[Soba · Shōwa-style back-street soba house] A 52-seat soba house on a back street by Taimei Elementary School. It began as a fishmonger's in 1950 and turned to soba in 1955, and is open straight through the afternoon on weekdays. Office workers fill it at lunch, and older regulars drink there from mid-afternoon. A long list of small plates goes with the drinks: herring or squid tempura, fried eggplant in sweet dashi, fluffy dashimaki tamago, blanched seri. Finish with seiro soba or chicken soba; a tanuki soba lunch was ¥680. Winter brings the famous seri curry soba. Generous, reasonably priced and mostly a Japanese crowd. Saturdays closed from September 2026.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded as a fishmonger in 1950; soba since 1955 (Tabelog)', background: 'No source names the current owner.', philosophy: null, specialty: 'Seri soba; tempura small plates.',
      anecdotes: [
        { text: '"I ordered tempura of herring, squid tempura, fried eggplant, dashimaki tamago (Japanese rolled omelette), and blanched seri." — October 2026.', source: R + 'B537076474/' },
        { text: '"Open for continuous service, perfect for daytime drinking… the seiro soba here is the best." — October 2026.', source: R + 'B536715533/' },
      ],
      japanese_sources_summary: '食べログ: 泰明庵(たいめいあん)、銀座6-3-14、52席、平日11:30〜21:00(通し営業)、土日祝休(2026年9月から土曜も定休)、サービス料なし、1950年に鮮魚店として創業し1955年に業態を変更。DIME: 冬季限定の「せりカレーそば」で知られる老舗。口コミ: 泰明小学校の近くの裏通り、昼は会社員でにぎわう、昼から飲める、ニシンやイカの天ぷら、揚げ茄子、だし巻き、せりのおひたし、せいろ、鶏そば、たぬきそば680円(2024年12月)、量が多く手頃、日本人客中心。',
      confidence: 'medium', sources: [TB, DM, R + 'B537076474/', R + 'B536715533/', R + 'B496682257/', R + 'B537111030/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese-only crowd and menu; day drinkers welcome.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-3-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (September 2026 closing-day notice); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目3番14号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496682257/', R + 'B537076474/'],
    price_note: 'Tanuki price from a December 2024 visit (same review, updated October 2026); others not captured.', last_checked: TODAY, items: [
      it('たぬきそば', 'tanuki soba', 'Tanuki soba (tempura crumbs)', '¥680', 'Soba', 'no', 'no', 'December 2024.', 'tanuki'),
      it('せいろ', 'seiro', 'Chilled seiro soba', '', 'Soba', 'no', 'no', '', 'seiro'),
      it('せりカレーそば', 'seri karee soba', 'Seri curry soba (winter only)', '', 'Soba', 'no', 'no', 'Seasonal (DIME).', 'seri_curry'),
      it('だし巻き玉子', 'dashimaki tamago', 'Dashimaki tamago', '', 'Small plates', 'ask', 'no', '', 'dashimaki'),
    ] }, {
    cuisine: '1955年からの昔ながらのそば屋で昼飲みも・たぬきそば、せいろ、冬のせりカレーそば・天ぷらとつまみ',
    neighborhood: '銀座六丁目、泰明小学校近くの裏通り、6-3-14。銀座駅・コリドー街の近く',
    gf_detail: 'グルテンフリーではありません。小麦のつなぎのそばが一般的で、つゆは醤油、天ぷらも多く、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。だしのつゆ、天ぷら、鶏そば、だし巻き玉子。',
    notes: '[そば・昭和の裏通りのそば屋] 泰明小学校近くの裏通りにある52席のそば屋で、1950年に鮮魚店として始まり、1955年にそば屋に。平日は昼から通しで営業。昼は会社員でいっぱい、午後は年配の常連が昼から飲んでいます。つまみが豊富で、ニシンやイカの天ぷら、甘めのだしの揚げ茄子、ふわふわのだし巻き、せりのおひたしなど。締めはせいろや鶏そば、昼のたぬきそばは680円でした。冬は名物のせりカレーそば。量が多くて手頃、日本人客がほとんど。2026年9月から土曜も定休。',
  });
}

// ================================================================ 吉そば 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13074005/'; const R = TB + 'dtlrvwlst/';
  const h24 = day(['00:00', '23:59']);
  put({
    id: 'tokyo_yoshi_soba_ginza_honten', name: '吉そば 銀座本店 (Yoshi Soba)', category: 'OMNI',
    lat: 35.671934, lng: 139.768117,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: standing soba with tempura toppings, wheat udon and soy-based broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth; shrimp tempura bowls.',
    hours_raw: 'Mon 7:00–24:00; Tue–Fri 24 hours; Sat 0:00–20:00; Sun and holidays 7:00–20:00 (Tabelog). Ticket machine; cards accepted.',
    hours: { 0: day(['07:00', '23:59']), 1: h24, 2: h24, 3: h24, 4: h24, 5: day(['00:00', '20:00']), 6: day(['07:00', '20:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 3-chōme, 3-9-2 — near Higashi-Ginza and Ginza-itchōme Stns',
    cuisine: 'Standing soba, open 24 h on weekdays · eggplant tempura soba ¥650, kakiage soba ¥600 · free large size · choose your noodle', cuisine_type: 'udon_soba',
    website: 'https://www.yoshisoba.jp/', gmaps: gm('吉そば 銀座本店'), menu_url: null,
    notes: "[Stand-up soba · open round the clock midweek] The main shop of the Yoshi Soba chain, a standing-counter soba stop with four stools at the back, open 24 hours Tuesday to Friday. Buy a ticket (cards work) and choose your noodle type: classic soba, or silky flat udon. The broth is mild with good dashi. 2026 regulars had eggplant tempura soba (¥650), kakiage soba (¥600) and a shrimp tempura bowl with soba. Large portions are free; the shungiku tempura often sells out. Early risers come at 6 a.m.",
    chef_bio: { chef_name: null, roles: [], origin: 'Main shop of the Yoshi Soba chain (opening date not given)', background: 'Chain-run (yoshisoba.jp).', philosophy: null, specialty: 'Tempura soba.',
      anecdotes: [
        { text: '"Since the shungiku tempura was unavailable, I ordered the eggplant tempura soba for JPY 650… The broth at Yoshi Soba has a gentle, mild flavor." — October 2026, 5:55 a.m.', source: R + 'B482985537/' },
        { text: '"Although it\'s a ticket system, you can also pay by card!… You can get a large size for free." — October 2026.', source: R + 'B537872390/' },
      ],
      japanese_sources_summary: '食べログ: 吉そば 銀座本店(よしそば)、銀座3-9-2、立ち食いとカウンター4席、月7:00〜24:00、火〜金24時間、土0:00〜20:00、日祝7:00〜20:00、公式サイト yoshisoba.jp。2026年の口コミ: なす天そば650円、かき揚げそば600円、海老天丼とそばのセット、春菊天は品切れが多い、そばの種類を選べる、絹ひらうどん、食券制だがカード可、奥に椅子、大盛り無料、朝6時前から客がいる。',
      confidence: 'medium', sources: [TB, R + 'B482985537/', R + 'B537872390/', R + 'B536252647/', R + 'B507014945/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; standing counter.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-9-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目9番2号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B482985537/', R + 'B536252647/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('なす天そば', 'nasuten soba', 'Eggplant tempura soba', '¥650', 'Soba', 'no', 'no', 'October 2026.', 'nasuten'),
      it('かき揚げそば', 'kakiage soba', 'Kakiage (mixed tempura) soba', '¥600', 'Soba', 'no', 'no', 'September 2026.', 'kakiage'),
      it('海老天丼とそばのセット', '', 'Shrimp tempura bowl with soba', '', 'Sets', 'no', 'no', '', 'ebiten_set'),
    ] }, {
    cuisine: '平日24時間営業の立ち食いそば・なす天そば650円、かき揚げそば600円・大盛り無料・麺を選べる',
    neighborhood: '銀座三丁目、3-9-2。東銀座駅・銀座一丁目駅の近く',
    gf_detail: 'グルテンフリーではありません。天ぷらをのせる立ち食いそばで、小麦のうどん、醤油のつゆ。',
    vegan_detail: 'ヴィーガンではありません。だしのつゆ、海老天丼。',
    notes: '[立ち食いそば・平日は24時間] 吉そばチェーンの本店で、立ち食いカウンターと奥に椅子4席、火〜金は24時間営業。食券制(カード可)で、麺は定番のそばや絹ひらうどんなどから選べます。つゆは優しい味でだしがしっかり。2026年の常連は、なす天そば(650円)、かき揚げそば(600円)、海老天丼とそばのセットなど。大盛りは無料、春菊天は品切れが多いそう。朝6時前から客が来ます。',
  });
}

// ================================================================ 銀座 真田
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13174459/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:30']);
  put({
    id: 'tokyo_ginza_sanada_soba_ginza5', name: '銀座 真田 (Ginza Sanada)', category: 'OMNI',
    lat: 35.671224, lng: 139.764088,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soba with a soy-based dipping sauce and tempura; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based dipping sauces, lamb, venison, fish and oysters.',
    hours_raw: 'Daily 11:00–22:30 (food L.O. 21:30) (Tabelog). 10% service charge at dinner.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, NOCO Bldg 3F — 1 min from Ginza Stn',
    cuisine: 'Soba and sake with a Karuizawa feel · walnut dipping-sauce soba, sudachi soba · oyster-and-mushroom kamameshi · lamb and game small plates', cuisine_type: 'udon_soba',
    website: 'http://ginza-sanada.com/', gmaps: gm('銀座 真田 NOCOビル'), menu_url: null,
    notes: "[Soba · Karuizawa-style soba and sake by Ginza Station] A soba restaurant and sake bar on a third floor a minute from Ginza Station, calmer than its sister branch in GINZA SIX. One regular says it brings back Karuizawa. The signature is soba dipped in a sweet walnut sauce, with a strong buckwheat aroma. Others are sudachi soba and a lamb shabu salad. In the evening the small plates go with sake: dashimaki, fried eggplant, lamb chops, nozawana tempura, isaki namerō and venison tataki. The oyster and mushroom kamameshi takes about 40 minutes, so order early. 10% service at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 5-chōme (opening date not given); sister branch at GINZA SIX', background: 'Multi-branch (ginza-sanada.com).', philosophy: null, specialty: 'Walnut-sauce soba.',
      anecdotes: [
        { text: '"I ordered the Kurumi Dipping Sauce Soba and the Lamb Shabu-Shabu Salad, just like always. It\'s great to enjoy the Karuizawa vibe anytime." — October 2026.', source: R + 'B490352476/' },
        { text: '"The mixed rice takes about 40 minutes to prepare, so it\'s best to order it early." — October 2026, oyster and mushroom kamameshi.', source: R + 'B537219052/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 真田(サナダ)、銀座5-6-5 NOCOビル3F、毎日11:00〜22:30、夜のみサービス料10%、公式サイト ginza-sanada.com。2026年10月の口コミ: GINZA SIXにも店がある、軽井沢の雰囲気、くるみだれのそば、ラムしゃぶのサラダ、夜はそばと日本酒、だし巻き、揚げ茄子、ラムチョップ、野沢菜の天ぷら、イサキのなめろう、鹿のたたき、すだちそば、牡蠣とキノコの釜めし(約40分、2合)、平凡だったとの声も。',
      confidence: 'medium', sources: [TB, R + 'B490352476/', R + 'B492834249/', R + 'B537219052/', R + 'B537959232/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Soba and sake; order kamameshi early.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-6-5 NOCOビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目6番5号 (go) 10m; 53 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490352476/', R + 'B537219052/'],
    price_note: 'No prices captured; reviewers spend ¥2,000–3,000 at lunch and ¥5,000–10,000 at dinner.', last_checked: TODAY, items: [
      it('くるみだれそば', 'kurumi dare soba', 'Soba with walnut dipping sauce', '', 'Soba', 'no', 'no', 'October 2026.', 'kurumi'),
      it('すだちそば', 'sudachi soba', 'Sudachi soba', '', 'Soba', 'no', 'no', 'October 2026.', 'sudachi'),
      it('牡蠣とキノコの釜めし', '', 'Oyster and mushroom kamameshi (about 40 minutes)', '', 'Rice', 'ask', 'no', 'October 2026.', 'kamameshi'),
    ] }, {
    cuisine: '軽井沢の雰囲気のそばと日本酒・くるみだれのそば、すだちそば・牡蠣とキノコの釜めし・ラムやジビエのつまみ',
    neighborhood: '銀座五丁目、NOCOビル3F。銀座駅から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。醤油のつゆのそばと天ぷらで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。だしのつゆ、ラム、鹿、魚、牡蠣。',
    notes: '[そば・銀座駅すぐで軽井沢のそばと日本酒] 銀座駅から1分のビル3階にあるそばと日本酒の店で、GINZA SIXの店より落ち着いていると常連。軽井沢を思い出すという声も。看板は香り高いそばを甘いくるみだれで食べるくるみだれそばで、すだちそばやラムしゃぶのサラダも。夜はだし巻き、揚げ茄子、ラムチョップ、野沢菜の天ぷら、イサキのなめろう、鹿のたたきなどのつまみを日本酒と。牡蠣とキノコの釜めしは40分ほどかかるので早めに注文を。夜はサービス料10%。',
  });
}

save();
