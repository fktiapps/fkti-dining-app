// Ginza Station half-mile sweep (805 m), batch 99 — all-genre phase, unknown-seat tail (all OMNI).
//   + 銀座 みやざわ (Ginza kissa since 1983, relocated in 2026; famous sandwiches; open to 4 am)
//   + 銀座 馬酔木 (owner-made ju-wari soba with sake on Sukiya-dōri; owner not named)
//   + 石挽 (Higashi-Ginza budget soba: mori ¥600, katsudon sets)
// Skipped: BAR MAJOR (13163785) — reservation-only with no reviews, so existence cannot be checked.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座 みやざわ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13327108/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '14:30'], ['16:00', '04:00']);
  put({
    id: 'tokyo_ginza_miyazawa_kissa', name: '銀座 みやざわ (Ginza Miyazawa)', category: 'OMNI',
    lat: 35.668087, lng: 139.760568,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a sandwich kissa (egg, mixed and shrimp-fry sandwiches) with Napolitan, omurice and ginger-pork lunch sets.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg and tuna sandwiches, pork ginger; black coffee is the plant-only item named.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 16:00–04:00; closed Sat, Sun and holidays (Tabelog; may change). No reservations. Designated smoking area; staff ask on entry.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, Ginza Zensenza Bldg 1F, toward Shimbashi — 5 min from Shimbashi Stn',
    cuisine: 'Ginza kissa since 1983, newly relocated · famous egg and tuna mixed sandwiches (¥1,300) · omurice, Napolitan · lunch sets with drink (pork ginger ¥1,500) · open to 4 am weekdays · late-night delivery', cuisine_type: 'kissaten',
    website: null, gmaps: gm('銀座 みやざわ 銀座8丁目 全線座ビル'), menu_url: null,
    notes: "[Kissa · Miyazawa, Ginza's late-night sandwich café, relocated] Founded in 1983 in Ginza 8-chōme, Miyazawa was a Showa-era kissa known for sandwiches and late-night delivery. In 2026 it moved a short walk toward Shimbashi into a bright, stylish space (Tabelog's opening date is 1 October; one reviewer says January), with 30-plus table seats, a big counter with power outlets and friendly staff. The signatures are the egg sandwich and a tuna-egg-cucumber mixed sandwich (¥1,300, takeaway too), plus omurice and Napolitan. Lunch brings limited sandwiches and sets with a drink, such as pork ginger at ¥1,500. Hot coffee is ¥800. It's open until 4 am on weeknights; staff ask about smoking when you enter.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1983 in Ginza 8-chōme; relocated in 2026 (October 2026 reviews; Tabelog lists 1 October 2026)', background: 'No source names the owner.', philosophy: null, specialty: 'Egg sandwich; mixed sandwich.',
      anecdotes: [
        { text: '"In 1983, Ginza Miyazawa opened in 8-chome, Ginza. It was a popular coffee shop, but it relocated to this new location in January 2026… Tuna & Egg Mixed Sandwich (JPY 1,300, tax included)." — October 2026.', source: R + 'B537706370/' },
        { text: '"I\'m familiar with \'Miyazawa\' for their late-night delivery service, and they have recently relocated nearby… A Pork Ginger Stir-fry JPY 1,500 (tax Included) (With drink included)." — October 2026, weekday lunch.', source: R + 'B537680832/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 みやざわ、銀座8-7-13 銀座全線座ビル1F、新橋駅から281m、平日11:30〜14:30・16:00〜翌4:00、土日祝休、予約不可、分煙(喫煙所あり)、開店日2026年10月1日。2026年10月の口コミ: 深夜の出前で知られるみやざわが近くに移転、ランチのサンドイッチは限定で入口に掲示、Aポーク生姜焼き1,500円(ドリンク付き)、1983年に銀座8丁目で開業し2026年1月に移転、昭和の喫茶からおしゃれなカフェに、ツナと玉子のミックスサンド1,300円(持ち帰り)、30席以上のテーブル、喫煙の有無を聞かれる、名物の玉子サンド、オムライス、ナポリタン、ホットコーヒー800円、電源付きの大きなカウンター、開店祝いの胡蝶蘭、ココア。',
      confidence: 'medium', sources: [TB, R + 'B537706370/', R + 'B537680832/', R + 'B537833982/', R + 'B537992947/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff ask about smoking on entry.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-7-13 銀座全線座ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Relocated shop listed on Tabelog with an opening date of 1 October 2026; reviews from October 2026 at the new address.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目7番13号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537706370/', R + 'B537680832/', R + 'B537833982/'],
    price_note: 'Prices from October 2026 reviews (tax incl.).', last_checked: TODAY, items: [
      it('ツナと玉子のミックスサンド', '', 'Tuna and egg mixed sandwich', '¥1,300', 'Sandwiches', 'no', 'no', 'October 2026.', 'mixed_sando'),
      it('玉子サンド', 'tamago sando', 'Egg sandwich', '', 'Sandwiches', 'no', 'no', 'Signature.', 'egg_sando'),
      it('Aポーク生姜焼き', '', 'Lunch set A: pork ginger with drink', '¥1,500', 'Lunch', 'ask', 'no', 'October 2026.', 'pork_ginger'),
      it('ホットコーヒー', '', 'Hot coffee', '¥800', 'Drinks', 'ask', 'vegan', 'October 2026.', 'coffee'),
    ] }, {
    cuisine: '1983年からの銀座の喫茶、2026年に移転・名物の玉子サンドとツナと玉子のミックスサンド(1,300円)・オムライス、ナポリタン・ドリンク付きのランチ(ポーク生姜焼き1,500円)・平日は朝4時まで・深夜の出前',
    neighborhood: '銀座八丁目、新橋寄りの銀座全線座ビル1F。新橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。サンドイッチの喫茶(玉子、ミックス、海老フライ)で、ナポリタン、オムライス、生姜焼きのランチセットも。',
    vegan_detail: 'ヴィーガンではありません。玉子やツナのサンドイッチ、ポーク生姜焼き。植物性だけと分かるのはブラックコーヒー。',
    notes: '[喫茶・移転した銀座の深夜のサンドイッチ喫茶みやざわ] 1983年に銀座8丁目で開業した、サンドイッチと深夜の出前で知られる昭和の喫茶店。2026年に新橋寄りへ少し移転し(食べログの開店日は10月1日、口コミには1月とも)、30席以上のテーブル、電源付きの大きなカウンターのある明るくおしゃれな店に。名物は玉子サンドと、ツナ・玉子・きゅうりのミックスサンド(1,300円、持ち帰りも)で、オムライスやナポリタンも。昼は限定のサンドイッチと、ポーク生姜焼き(1,500円)などのドリンク付きセット。ホットコーヒーは800円。平日は朝4時まで、入店時に喫煙の有無を聞かれます。',
  });
}

// ================================================================ 銀座 馬酔木
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13299730/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ginza-ashibi.com/';
  put({
    id: 'tokyo_ginza_ashibi_soba', name: '銀座 馬酔木 (Ginza Ashibi)', category: 'OMNI',
    lat: 35.671473, lng: 139.761551,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The owner makes ju-wari (100% buckwheat) soba from Hitachi Aki buckwheat, a good sign, but courses include tempura and satsuma-age, the tsuyu is not described, and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include salted fish, dried squid, karasumi, tempura of prawn and satsuma-age; the tsuyu is not described.',
    hours_raw: 'Hours not listed on Tabelog. Reviews say it opens at 16:00; the official site takes calls 15:30–21:30 and serves a weekday ten-don and ju-wari soba deal 15:30–18:00. Confirm before visiting.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Idei Bldg 2F on Sukiya-dōri — 3 min from Ginza Stn',
    cuisine: 'Ju-wari soba by the owner with sake · Hitachi Aki buckwheat stone-milled with the husk · soba-house appetisers and Japanese courses finishing with soba · white-wood counter, tables and private rooms', cuisine_type: 'udon_soba',
    website: SITE, gmaps: gm('銀座 馬酔木 そば 出井ビル'), menu_url: SITE,
    notes: "[Soba · ju-wari soba and sake on Sukiya-dōri] A soba-and-sake restaurant on the second floor along Sukiya-dōri in Ginza 6-chōme, with a white-wood counter, tables and private rooms; reviewers compare it to a fine ryōtei. The owner makes ju-wari soba from Hitachi Aki buckwheat (rooted in a native strain from the old Kanasagō village), stone-milled fine with the inner husk to keep its aroma and sweetness. Evenings run to Japanese courses and plentiful soba-house appetisers, such as nori, miso-cured cream cheese, salted fish, dried squid, karasumi, tamagoyaki and homemade satsuma-age. Finish with soba, perhaps under a jumbo prawn tempura, and soba-yu cut with Ashibi shochu. Reviewers praise the owner's hospitality. On weekdays 15:30–18:00 there's a lower-priced ten-don and ju-wari soba deal. Dinner ¥10,000–20,000.",
    chef_bio: { chef_name: null, roles: ['owner (soba maker)'], origin: 'Ginza 6-chōme (opening date not given)', background: 'Owner-made soba; the official site signs off only as 店主 (owner) and no source gives a name, so it is not marked mom-and-pop.', philosophy: '"日常の上質" (everyday quality) as hospitality; "a smile at the table is the best feast" (official site).', specialty: 'Ju-wari soba; soba-house appetisers.',
      anecdotes: [
        { text: '"The soba noodles made by the owner are 100% buckwheat, with a smooth texture and incredibly delicious. The homemade satsuma-age (fried fish cake) is well-seasoned and tasty." — September 2026.', source: R + 'B535327506/' },
        { text: '"The soba master, the owner, makes Ju-wari soba, and the appetizers at this soba restaurant are both delicious and plentiful… This place opens at 4 PM." — December 2025.', source: R + 'B519963111/' },
      ],
      japanese_sources_summary: '公式サイト(ginza-ashibi.com): 手打ち蕎麦とお酒の美味しい店 馬酔木、銀座六丁目数寄屋通り沿い、白木のカウンター席・テーブル席・個室、常陸秋蕎麦(旧金砂郷村赤土町の在来種がルーツ)を蟻巣石の石臼で甘皮まで細かく挽く、「日常の上質」のおもてなし、「食卓の笑顔は最高のごちそう」、平日15:30〜18:00に天丼と十割蕎麦をリーズナブルに、電話受付15:30〜21:30。食べログ: 銀座6-4-17 出井ビル2F、営業時間・席数の記載なし。口コミ(2025〜2026年): 高級料亭のような個室、和のコースをそばで締める、店主のもてなし、十割そば、海苔・味噌漬けクリームチーズ・塩辛・するめなどのそば前、16時開店、ジャンボ海老天そば、自家製さつま揚げ、焼き海苔、そば湯と馬酔木焼酎。',
      confidence: 'medium', sources: [SITE, TB, R + 'B535327506/', R + 'B519963111/', R + 'B515147949/', R + 'B517682983/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; call 15:30–21:30.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [{ text: 'Ju-wari (100% buckwheat) soba made by the owner (reviews; official site describes the buckwheat).', source: R + 'B535327506/' }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-17 出井ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site current (ten-don notice); Tabelog review September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番17号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B519963111/'],
    price_note: 'No prices captured; dinner ¥10,000–20,000 in reviews.', last_checked: TODAY, items: [
      it('十割蕎麦', 'jūwari soba', 'Ju-wari soba (Hitachi Aki buckwheat)', '', 'Soba', 'ask', 'ask', 'Official site; reviews.', 'juwari'),
      it('天丼と十割蕎麦', '', 'Weekday ten-don and ju-wari soba deal (15:30–18:00)', '', 'Soba', 'no', 'no', 'Official site.', 'tendon_set'),
      it('ジャンボ海老天そば', '', 'Jumbo prawn tempura soba', '', 'Soba', 'no', 'no', 'December 2025.', 'ebiten_soba'),
      it('自家製さつま揚げ', '', 'Homemade satsuma-age', '', 'Appetisers', 'no', 'no', 'September 2026.', 'satsuma_age'),
    ] }, {
    cuisine: '店主の十割そばと酒・甘皮まで石臼で挽く常陸秋蕎麦・そば前とそばで締める和のコース・白木のカウンター、テーブル、個室',
    neighborhood: '銀座六丁目、数寄屋通り沿いの出井ビル2F。銀座駅から徒歩3分',
    gf_detail: '要確認。店主が常陸秋蕎麦で打つ十割(そば粉100%)のそばは良い材料ですが、コースには天ぷらやさつま揚げがあり、つゆの中身もグルテンフリーの対応も書かれていません。',
    vegan_detail: 'ヴィーガンではありません。コースには塩辛、するめ、からすみ、海老の天ぷら、さつま揚げ。つゆの中身は書かれていません。',
    notes: '[そば・数寄屋通りで十割そばと酒] 銀座六丁目の数寄屋通り沿い、ビル2階のそばと酒の店で、白木のカウンター、テーブル、個室があり、高級料亭のようだという声も。店主が常陸秋蕎麦(旧金砂郷村の在来種がルーツ)を甘皮まで石臼で細かく挽き、香りと甘みを生かした十割そばを打ちます。夜は和のコースと、海苔、味噌漬けのクリームチーズ、塩辛、するめ、からすみ、玉子焼き、自家製さつま揚げなどのそば前がたっぷり。締めはジャンボ海老天のそばなどで、そば湯を馬酔木焼酎で割って。店主のもてなしが好評。平日15:30〜18:00は天丼と十割蕎麦をお手頃に。夜は1万〜2万円ほど。',
  });
}

// ================================================================ 石挽
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13233710/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_ishibiki_higashiginza', name: '石挽 (Ishibiki)', category: 'OMNI',
    lat: 35.670334, lng: 139.769565,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: katsudon sets and soba (including green-tea cha soba) whose buckwheat ratio is not stated; the broth is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: katsudon, egg-drop soba, quail egg on natto soba; the broth is not described.',
    hours_raw: 'Hours not listed on Tabelog; reviews describe weekday lunch service (busiest 12:00–13:00). Confirm before visiting.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, kobikissGINZa 2F (Higashi-Ginza side) — 3 min from Higashi-Ginza Stn',
    cuisine: 'Budget soba lunch in Higashi-Ginza · mori and kake ¥600 · egg-drop cha soba ¥750 · chilled natto soba ¥850 · katsudon with cha soba ¥1,000 · no soba-yu', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('石挽 そば 東銀座 コビキス銀座'), menu_url: null,
    notes: "[Soba · Higashi-Ginza's bargain soba lunch] A soba shop up on the second floor of kobikissGINZa, beloved by regulars for prices rare in Ginza (some reviewers have been dozens of times). In October 2026 mori and kake soba were ¥600, egg-drop (tamagotoji) green-tea soba ¥750, chilled natto soba with quail eggs ¥850 (large +¥100), large tororo soba ¥1,000, and a set of katsudon with thin cutlet soaked in a rich, sweet broth plus cha soba ¥1,000. There's no soba-yu. Tables may be shared at lunch, so eat and go.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Ginza (opening date not given)', background: 'No source names the owner.', philosophy: null, specialty: 'Cha soba; katsudon.',
      anecdotes: [
        { text: '"The katsudon features a rich, sweet broth with a deep flavor that is truly impressive. The pork cutlet is thinly sliced, allowing it to soak up the delicious broth… At just JPY 1,000, this is an incredible value!" — August 2026, 33rd visit.', source: R + 'B446978442/' },
        { text: '"The mori soba and kake soba are an incredible JPY 600. Although they don’t offer soba-yu… During lunchtime, you may have to share a table with others." — October 2026.', source: R + 'B528465006/' },
      ],
      japanese_sources_summary: '食べログ: 石挽、銀座3-14-17 コビキス銀座2F、東銀座駅から241m、営業時間・席数の記載なし。2026年の口コミ: 何十回も通う常連、甘く濃いつゆのカツ丼(薄いカツ)と茶そばで1,000円、玉子とじそば(大盛り850円、10月は税込750円)、もりそば・かけそば600円、そば湯はない、昼は相席、食べたらすぐ席を立つ、大盛りとろろそば1,000円、冷やし納豆そば850円(大盛り+100円、うずらの卵)。',
      confidence: 'medium', sources: [TB, R + 'B446978442/', R + 'B528465006/', R + 'B487022924/', R + 'B534888956/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shared tables at lunch; eat and go.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-14-17 コビキス銀座 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目14番17号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528465006/', R + 'B534888956/', R + 'B446978442/'],
    price_note: 'Prices from August–October 2026 reviews (tax incl.).', last_checked: TODAY, items: [
      it('もりそば', 'mori soba', 'Mori soba', '¥600', 'Soba', 'no', 'ask', 'October 2026.', 'mori'),
      it('かけそば', 'kake soba', 'Kake soba', '¥600', 'Soba', 'no', 'ask', 'October 2026.', 'kake'),
      it('玉子とじ茶そば', '', 'Egg-drop green-tea soba', '¥750', 'Soba', 'no', 'no', 'October 2026.', 'tamagotoji'),
      it('冷やし納豆そば', '', 'Chilled natto soba with quail eggs', '¥850', 'Soba', 'no', 'no', 'September 2026; large +¥100.', 'natto_soba'),
      it('カツ丼と茶そば', '', 'Katsudon with cha soba', '¥1,000', 'Sets', 'no', 'no', 'August 2026.', 'katsudon_set'),
    ] }, {
    cuisine: '東銀座の格安のそばランチ・もり・かけ600円・玉子とじ茶そば750円・冷やし納豆そば850円・カツ丼と茶そば1,000円・そば湯なし',
    neighborhood: '銀座三丁目、コビキス銀座2F(東銀座側)。東銀座駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。カツ丼のセットと、割合の書かれていないそば(茶そばも)。つゆの中身も書かれていません。',
    vegan_detail: 'ヴィーガンではありません。カツ丼、玉子とじそば、納豆そばのうずらの卵。つゆの中身は書かれていません。',
    notes: '[そば・東銀座の格安そばランチ] コビキス銀座の2階にあるそば店で、銀座では珍しい値段で常連に愛されています(何十回も通う口コミの主も)。2026年10月はもり・かけが600円、玉子とじの茶そば750円、うずらの卵をのせた冷やし納豆そば850円(大盛り+100円)、大盛りとろろそば1,000円、薄いカツが甘く濃いつゆを吸うカツ丼と茶そばのセットが1,000円。そば湯はありません。昼は相席になることもあるので、食べたら早めに席を。',
  });
}

save();
