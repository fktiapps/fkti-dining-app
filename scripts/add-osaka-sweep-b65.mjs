// Osaka sweep (2-mile circle around Dotonbori), batch 65 — mom phase (≤20 seats).
//   + 葉花 (Havana — Tabelog 100 standing bar 2025 by Hozenji, obanzai and creative snacks; filed 'other')
//   + ぎょうざ処だいきち (9-seat bite-size gyoza counter, owner working solo → mom_and_pop; filed 'gyoza')
//   + うどん処 SOU 心斎橋店 (late-night udon bar, 8 pm–5 am, free karaoke; filed 'udon_soba')
//   + 鮨朗 (7-seat creative sushi, aged fish, one chef → mom_and_pop; filed 'sushi')
// Daikichi and SOU share Nippo Royal Bldg (Shinsaibashisuji 2-7-11) with Shellfish, Shrimp & Crab (b62).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 65);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 葉花
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27133979/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.instagram.com/habana_namba/';
  const W = day(['16:00', '23:15']), SA = day(['15:00', '23:15']), SU = day(['15:00', '22:15']);
  put({
    id: 'osaka_havana_namba_standing_bar', name: '葉花 (Havana)', category: 'OMNI',
    lat: 34.667493, lng: 135.50195, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: shumai, dumplings, croquettes, pasta salad; dressings not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, seafood, cheese; vegetable obanzai ingredients not described.',
    hours_raw: 'Mon–Fri and days before holidays 16:00–23:15; Sat 15:00–23:15; Sun and holidays 15:00–22:15; closed irregularly (Tabelog). 1F standing, 2F seated with a ¥330 seat charge and mobile ordering (Tabelog; October 2026). Reservations available. Cards and PayPay accepted; no e-money.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-5-7 — in a back alley toward Hozenji, about 3 min from Namba Stn',
    cuisine: 'Standing bar, Tabelog tachinomi 100 (2025), in a renovated old house · daily obanzai on big platters · assorted sashimi ¥600 · three vegetable appetizers ¥450 · spicy coriander pork shumai ¥430 · fig, prosciutto and ricotta ¥500 · chicken neck with black shichimi ¥380 · smoked mayo with chikuwa ¥380 · squid liver in an Okinawan-style marinade ¥380 · fried corn and mitsuba dumplings ¥450 · crab-miso cream croquette · sanma confit with eggplant purée · rare wild boar · mega highballs, fruit sours, peach bellini · 1F standing for about 18, 2F 20 seats',
    website: OWN, gmaps: gm('葉花 難波 立ち飲み'), menu_url: null,
    notes: "[Standing bar · a Tabelog 100 standing bar in an old house by Hozenji] A stylish, often-packed standing bar in a renovated old house on a back alley toward Hozenji, with beams and earthen walls, named to Tabelog's 2025 standing-bar 100. Downstairs you stand around the kitchen; upstairs is seated (¥330) with mobile ordering and its own menu. Big platters of daily obanzai line the counter. Small plates are cheap and inventive, mostly ¥380–600 (October 2026): assorted sashimi, spicy coriander pork shumai, fig and prosciutto with ricotta, smoked mayonnaise with chikuwa, and a squid liver in an Okinawan-style marinade that one regular orders every time. Bigger dishes include crab-miso cream croquettes, sanma confit with eggplant purée and rare wild boar with red wine sauce. Drinks run to mega highballs, fruit sours and a grated-peach bellini, and you can grab bottled beer from the self-service fridge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 December 2022 (Tabelog)', background: 'Standing bar in a renovated old building; Tabelog tachinomi 100, 2025 (Tabelog).', philosophy: 'Daily obanzai and free-spirited snacks (Tabelog).', specialty: 'Obanzai and creative small plates.',
      anecdotes: [
        { text: '"The squid liver in Okinawan-style marinade, which I order every time, pairs perfectly with drinks! Everyone also raved about the smoked mayonnaise!" — October 2026, second floor.', source: R + 'B537826924/' },
        { text: '"The taste, presentation, speed of service, hospitality, interior design, and cost performance—all were outstanding." — October 2026, third stop of a bar crawl.', source: R + 'B537738979/' },
      ],
      japanese_sources_summary: '公式Instagram habana_namba。食べログ: 葉花、大阪市中央区難波1-5-7、なんば駅から3分、月〜金・祝前日16:00〜23:15、土15:00〜23:15、日・祝15:00〜22:15、不定休、予約可、カード・PayPay可、電子マネー不可、2階の座席は330円、20席(1階立ち飲み18、2階20席)、2022年12月23日開店、立ち飲み百名店2025、古い建物を改装した梁と土壁の空間、大皿の日替わりおばんざい。口コミ(2026年10月): メガハイボール、前菜6種盛り、カニ味噌クリームコロッケ、プレーンオムレツ、黒胡椒ハイボール、2階のポテトサラダ、秋刀魚のコンフィと茄子のピュレ、猪のレアと赤ワインソース、刺身盛り600円、野菜の前菜3種450円、パクチーの辛い豚焼売2個430円、いちじくと生ハムとリコッタ500円、紅茶とミックスベリーのサワー550円、すりおろし桃のベリーニ600円、2階はモバイルオーダー、せせりの黒七味焼き380円、カルボナーラ風パスタサラダ400円、ちくわの燻製マヨ380円、とうもろこしと三つ葉の揚げ団子450円、イカわたの沖縄風マリネ380円、法善寺へ向かう裏路地、セルフの瓶ビール冷蔵庫、常連が多い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537826924/', R + 'B537738979/', R + 'B537799734/', R + 'B527314876/', R + 'B537988245/', R + 'B538066869/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing downstairs; mobile ordering upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-5-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目5番7号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537799734/', R + 'B537826924/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '¥600', 'Small plates', 'ask', 'no', 'October 2026.', 'sashimi'),
      it('', '', 'Three vegetable appetizers', '¥450', 'Small plates', 'ask', 'ask', 'October 2026.', 'yasai3'),
      it('', '', 'Spicy coriander pork shumai (2)', '¥430', 'Small plates', 'no', 'no', 'October 2026.', 'shumai'),
      it('', '', 'Fig, prosciutto and ricotta', '¥500', 'Small plates', 'ask', 'no', 'October 2026.', 'fig'),
      it('', '', 'Squid liver in Okinawan-style marinade', '¥380', 'Small plates', 'ask', 'no', 'October 2026.', 'ikawata'),
      it('', '', 'Smoked mayo with chikuwa', '¥380', 'Small plates', 'no', 'no', 'October 2026.', 'chikuwa'),
      it('', '', 'Fried corn and mitsuba dumplings', '¥450', 'Fried', 'no', 'ask', 'October 2026.', 'corn'),
      it('', '', 'Grated-peach bellini', '¥600', 'Drinks', 'ask', 'vegan', 'October 2026.', 'bellini'),
    ] }, {
    cuisine: '古民家を改装した立ち飲み、食べログ立ち飲み百名店(2025)・大皿の日替わりおばんざい・刺身盛り600円・野菜の前菜3種450円・パクチーの辛い豚焼売430円・いちじくと生ハムとリコッタ500円・せせりの黒七味焼き380円・ちくわの燻製マヨ380円・イカわたの沖縄風マリネ380円・とうもろこしと三つ葉の揚げ団子450円・カニ味噌クリームコロッケ・秋刀魚のコンフィと茄子のピュレ・猪のレア・メガハイボール、フルーツサワー、桃のベリーニ・1階は立ち飲み約18、2階は20席',
    neighborhood: '難波1-5-7。法善寺へ向かう裏路地、なんば駅から徒歩約3分',
    gf_detail: '実際にはグルテンフリーではありません。焼売、揚げ団子、コロッケ、パスタサラダ。ドレッシングの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。豚肉、鶏肉、魚介、チーズ。野菜のおばんざいの中身も不明。',
    notes: '[立ち飲み・法善寺そばの古民家の百名店立ち飲み] 法善寺へ向かう裏路地の、梁と土壁を生かして古い建物を改装したおしゃれな立ち飲みで、いつもにぎわい、食べログ立ち飲み百名店2025。1階は厨房を囲んで立ち飲み、2階は座席(330円)でモバイルオーダー、2階だけのメニューも。カウンターには日替わりのおばんざいの大皿。小皿は安くて独創的で、ほとんど380〜600円(2026年10月)。刺身盛り、パクチーの辛い豚焼売、いちじくと生ハムのリコッタ、ちくわの燻製マヨ、毎回頼むという人もいるイカわたの沖縄風マリネ。しっかりめなら、カニ味噌クリームコロッケ、秋刀魚のコンフィと茄子のピュレ、猪のレアと赤ワインソース。飲み物はメガハイボール、フルーツサワー、すりおろし桃のベリーニなど、瓶ビールはセルフの冷蔵庫から。',
  });
}

// ================================================================ ぎょうざ処だいきち
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27095688/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://dice617kitchen.com/index.html';
  const W = day(['18:00', '02:00']), S = day(['17:00', '22:30']);
  put({
    id: 'osaka_gyoza_dokoro_daikichi', name: 'ぎょうざ処だいきち (Gyoza Dokoro Daikichi)', category: 'OMNI',
    lat: 34.670524, lng: 135.500972, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat gyoza wrappers; soy dipping sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, octopus kimchi.',
    hours_raw: 'Tue–Sat 18:00–2:00 am (L.O. 1:30); Sun and holidays 17:00–22:30 (L.O. 22:00); closed Monday; closes when sold out (Tabelog). No reservations; waits up to an hour, and gyoza can take about 30 minutes once seated (August–October 2026). Two servings per person suggested (August 2026). Cash only: no cards or e-money (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-7-11, 1F — at the Mitsudera-dori end, about 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Bite-sized pan-fried gyoza, 10 to an order for ¥550 (September 2026) · thin, crisp-bottomed wrappers with a slight chew · pork filling with a pepper-and-garlic punch · vinegar, or vinegar and soy · octopus kimchi · kimchi · cucumber · small rice · draft beer, Sapporo Lager, chuhai · 9 counter seats',
    website: OWN, gmaps: gm('ぎょうざ処だいきち 心斎橋'), menu_url: null,
    notes: "[Gyoza · a nine-seat bite-size gyoza counter at the Mitsudera end] A nine-seat gyoza counter tucked into a building just off Mitsudera-dori, open since 2016 and run by the owner alone, who wraps, fries and pours while the Tigers play on the radio. Each order is ten bite-size gyoza for ¥550 (September 2026): thin, crisp-bottomed wrappers with a little chew around a punchy pork filling heavy on pepper and garlic. Eat them with just vinegar, or vinegar and soy. Two servings per person is the suggestion, and some order four or five between two. Octopus kimchi and cucumbers fill the wait, which can be long: an hour to get in at 7 pm, and about 30 minutes for gyoza at busy times. It's great with a Sapporo Lager. Cash only; closed Mondays and when sold out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 June 2016 (Tabelog)', background: 'Run single-handed by the owner (August 2026 review); official site dice617kitchen.com.', philosophy: null, specialty: 'Bite-size pan-fried gyoza.',
      anecdotes: [
        { text: '"Each order comes with 10 small gyoza. The outside is crispy while the skin has a chewy texture. There was quite a bit of pepper, so they were delicious even with just vinegar." — August 2026.', source: R + 'B533419562/' },
        { text: '"I was informed that it\'s recommended (though not mandatory) to have 2 servings per person… After about 30 minutes of waiting while enjoying my beer, the gyoza arrived." — August 2026.', source: R + 'B535045047/' },
      ],
      japanese_sources_summary: '公式 dice617kitchen.com。食べログ: ぎょうざ処だいきち、大阪市中央区心斎橋筋2-7-11、心斎橋駅・なんば駅から徒歩5分、火〜土18:00〜翌2:00(L.O.1:30)、日・祝17:00〜22:30(L.O.22:00)、売り切れ次第終了、月曜休み、予約不可、カード・電子マネー不可、9席(カウンター)、2016年6月17日開店。口コミ(2025年11月〜2026年10月): 夜7時で1時間待ち、キムチ、4人前、2人で5人前、パリッとして胡椒とにんにくが効く、シークワーサーのチューハイ、きゅうり、1人前10個の小さな餃子、皮はパリッともちっと、酢だけでも、酢醤油も、ご飯は少なめ、タコキムチ、三津寺筋から少し入った複合ビルの1階、カウンター9席、阪神戦のラジオ、芋ソーダ、店主ひとりで営業、1人2人前がおすすめ(必須ではない)、約30分待ち、餃子550円、サッポロラガー(赤星)、店主は少しぶっきらぼうでも手際がいい。',
      confidence: 'medium', sources: [TB, OWN, R + 'B533419562/', R + 'B535045047/', R + 'B518104513/', R + 'B533326293/', R + 'B533771642/', R + 'B535929211/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Nine-seat counter; long waits; cash.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番11号 (go) 16m; same building as Udon Dokoro SOU and Shellfish, Shrimp & Crab; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535929211/', R + 'B533419562/'],
    price_note: 'Gyoza price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Gyoza (10 pieces)', '¥550', 'Gyoza', 'no', 'no', 'September 2026.', 'gyoza'),
      it('', '', 'Octopus kimchi', '', 'Sides', 'ask', 'no', 'August–September 2026.', 'tako_kimchi'),
      it('', '', 'Cucumber', '', 'Sides', 'ask', 'ask', 'August 2026.', 'kyuri'),
      it('', '', 'Rice (small)', '', 'Rice', 'ask', 'vegan', 'August 2026.', 'rice'),
    ] }, {
    cuisine: '一口サイズの焼き餃子、1人前10個で550円(2026年9月)・パリッと焼けた薄皮にほどよいもちもち感・胡椒とにんにくの効いた豚肉のあん・酢だけで、または酢醤油で・タコキムチ・キムチ・きゅうり・小さめのご飯・生ビール、サッポロラガー、チューハイ・カウンター9席',
    neighborhood: '心斎橋筋2-7-11 1F。三津寺筋の入口、心斎橋駅・なんば駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。小麦の餃子の皮、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚肉の餃子、タコキムチ。',
    notes: '[餃子・三津寺筋の入口の9席の一口餃子] 三津寺筋から少し入ったビルの1階にあるカウンター9席の餃子の店で、2016年開店。店主がひとりで包み、焼き、飲み物を出し、ラジオからは阪神戦。1人前は一口サイズが10個で550円(2026年9月)。薄い皮はパリッと焼けてほどよくもちっとし、胡椒とにんにくの効いた豚肉のあんはパンチがあります。酢だけで、または酢醤油で。1人2人前がおすすめで、2人で4〜5人前頼む人も。待つ間はタコキムチやきゅうりを。待ち時間は長く、夜7時で入店まで1時間、混む時間は餃子が出るまで30分ほど。サッポロラガーとの相性も抜群。現金のみ、月曜定休、売り切れ次第終了。',
  });
}

// ================================================================ うどん処 SOU 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131930/'; const R = TB + 'dtlrvwlst/';
  const D = day(['20:00', '05:00']);
  put({
    id: 'osaka_udon_dokoro_sou_shinsaibashi', name: 'うどん処 SOU 心斎橋店 (Udon Dokoro SOU Shinsaibashi)', category: 'OMNI',
    lat: 34.670523, lng: 135.500971, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat Sanuki udon; soy in the dashi; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kombu and sea-bream dashi, mentaiko, meat hot pot.',
    hours_raw: 'Tue–Sun 20:00–5:00 am (L.O. 4:30); closed Monday (Tabelog). Charge ¥300 (Tabelog). Reservations available. Smoking allowed throughout (July 2026). Free karaoke (July–September 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-7-11, Nippo Royal Bldg 3F — about 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Late-night udon bar · Kansai-style dashi of kombu and sea bream with chewy Sanuki udon · mentaiko cream udon ¥1,380 · chilled pork shabu-shabu udon ¥1,180 · kamatama udon · ume udon with wakame · kara-age · herbal hot-pot course with a mountain of greens, chicken, pork and beef, egg dip and udon to finish · drinking snacks · free karaoke, sports on TV · 8 counter seats and a table for four',
    website: null, gmaps: gm('うどん処 SOU 心斎橋'), menu_url: null,
    notes: "[Udon · a late-night udon bar with free karaoke, 8 pm to 5 am] A dim, bar-like udon spot on the third floor of a Shinsaibashi building, open from 8 pm to 5 am for the end of a night out. The base is a Kansai-style dashi of kombu and sea bream with chewy Sanuki udon. The most popular bowl is the creamy mentaiko cream udon (¥1,380, April 2026); a chilled pork shabu-shabu udon (¥1,180) is lighter, and one repeat visitor raves about the ume udon with wakame and that dashi. A newer herbal hot-pot course piles leafy greens into a gentle Chinese-style broth, then chicken, pork and beef with an egg dip, and udon to finish. There are kara-age and drinking snacks, free karaoke and TV for sports. Smoking is allowed throughout. ¥300 charge; cash only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashi branch (Tabelog)', background: 'Udon izakaya open until morning (Tabelog).', philosophy: 'Kansai-style kombu and sea-bream dashi with Sanuki udon (Tabelog).', specialty: 'Mentaiko cream udon.',
      anecdotes: [
        { text: '"You can enjoy a Kansai-style broth made from kombu and sea bream, paired with handmade Sanuki udon noodles… The karaoke inside is free to use." — July 2026.', source: R + 'B531210053/' },
        { text: '"Mentaiko Cream Udon JPY 1,380. This seems to be the most popular dish. It\'s creamy and incredibly delicious." — April 2026.', source: R + 'B526610640/' },
      ],
      japanese_sources_summary: '食べログ: うどん処 SOU 心斎橋店、大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル3F、心斎橋駅・なんば駅から徒歩5分、火〜日20:00〜翌5:00(L.O.4:30)、月曜休み、予約可、チャージ300円、カード・電子マネー・QR不可、12席(カウンター8、4人テーブル1)、出汁にこだわる讃岐うどん、朝5時まで。口コミ(2026年3〜9月): 薬膳鍋のコース(野菜の山、自家製の中華風スープ、鶏・豚・牛、卵のたれ、締めのうどん)、日宝ロイヤルビル3階、バーのような落ち着いた空間、明太クリームうどん1,380円、釜玉、唐揚げ、カラオケ、冷やし豚しゃぶうどん1,180円、昆布と鯛のだし、手打ちの讃岐うどん、全席喫煙可、無料のカラオケ、モニターでスポーツ、おつまみも豊富、梅うどん(大きな梅とたっぷりのわかめ)、だしがおいしい。',
      confidence: 'medium', sources: [TB, R + 'B531210053/', R + 'B526610640/', R + 'B524800445/', R + 'B523959607/', R + 'B533531718/', R + 'B536513879/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar-like room; smoking allowed; karaoke.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番11号 (go) 16m; same building as Gyoza Dokoro Daikichi and Shellfish, Shrimp & Crab; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526610640/', R + 'B523959607/', R + 'B536513879/'],
    price_note: 'Prices from an April 2026 review; ¥300 charge.', last_checked: TODAY, items: [
      it('', '', 'Mentaiko cream udon', '¥1,380', 'Udon', 'no', 'no', 'March–July 2026.', 'mentai_cream'),
      it('', '', 'Chilled pork shabu-shabu udon', '¥1,180', 'Udon', 'no', 'no', 'April 2026.', 'hiyashi_shabu'),
      it('', '', 'Kamatama udon', '', 'Udon', 'no', 'no', 'March 2026.', 'kamatama'),
      it('', '', 'Ume udon with wakame', '', 'Udon', 'no', 'no', 'September 2026.', 'ume'),
      it('', '', 'Herbal hot-pot course with udon', '', 'Courses', 'no', 'no', 'August 2026.', 'yakuzen'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'March 2026.', 'karaage'),
    ] }, {
    cuisine: '深夜のうどんバー・昆布と鯛の関西風だしにコシのある讃岐うどん・明太クリームうどん1,380円・冷やし豚しゃぶうどん1,180円・釜玉うどん・わかめたっぷりの梅うどん・唐揚げ・野菜の山と鶏・豚・牛、卵のたれ、締めのうどんの薬膳鍋コース・おつまみ・無料のカラオケ、スポーツ観戦・カウンター8席と4人テーブル1つ',
    neighborhood: '心斎橋筋2-7-11 日宝ロイヤルビル3F。心斎橋駅・なんば駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。小麦の讃岐うどん、だしに醤油、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。昆布と鯛のだし、明太子、肉の鍋。',
    notes: '[うどん・夜8時から朝5時までのカラオケ付きうどんバー] 心斎橋のビルの3階にある、薄暗くバーのような雰囲気のうどんの店で、夜8時から朝5時まで、飲んだ後の締めにぴったり。昆布と鯛の関西風だしに、コシのある讃岐うどん。いちばん人気はクリーミーな明太クリームうどん(1,380円、2026年4月)、冷やし豚しゃぶうどん(1,180円)は軽め、何度も通う人はわかめたっぷりの梅うどんとだしを絶賛。新しく始まった薬膳鍋のコースは、やさしい中華風スープに葉物野菜を山ほど、続いて鶏・豚・牛を卵のたれで、締めはうどん。唐揚げやおつまみもあり、カラオケは無料、テレビでスポーツも。全席喫煙可。チャージ300円、現金のみ、月曜定休。',
  });
}

// ================================================================ 鮨朗
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27149938/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sushi_rou_higashishinsaibashi', name: '鮨朗 (Sushi Rou)', category: 'OMNI',
    lat: 34.670428, lng: 135.502603, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-seasoned sushi; fried and creative dishes. The shop asks guests to state allergies when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish omakase.',
    hours_raw: 'Daily 17:00–24:00 (L.O. 22:30) (Tabelog). Reservations; courses start together, so be on time, and tell the shop about allergies or preferences when booking (Tabelog). Cards accepted; no e-money or QR.',
    hours: ALL(day(['17:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-7-14, 1F — in a back alley, about 7 min from Shinsaibashi or Namba Stn',
    cuisine: 'Creative sushi omakase from a young chef · seasonal omakase ¥12,500 · aged fish: 13-day tuna, aged sea bream, 4-day aged striped horse mackerel · short-term farmed tuna from the Oki Islands, Shimane, dry-aged chutoro · Spanish mackerel, red sea bream, sea bass · rare-fried pike conger, rare-fried eel sandwich · French-inspired side dishes · firm rice · drinks from ¥400 · 7 counter seats',
    website: null, gmaps: gm('鮨朗 東心斎橋'), menu_url: null,
    notes: "[Sushi · a seven-seat creative sushi counter in a Higashi-Shinsaibashi alley] A chic, black-toned seven-seat counter in a back alley of Higashi-Shinsaibashi, open since June 2025 and run by a young chef who handles everything alone; the name takes a character from the chef's own. The seasonal omakase (¥12,500, September 2026) mixes aged fish with playful creative dishes. Expect tuna aged 13 days, aged sea bream, four-day striped horse mackerel and dry-aged chutoro from the Oki Islands, alongside a rare-fried pike conger or a rare-fried eel sandwich and French-inspired sides that impressed diners. The rice is on the firm side. Drinks are reasonably priced, from ¥400. Book ahead, arrive on time since everyone starts together, and mention allergies when you reserve. Families are welcome.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 June 2025 (Tabelog)', background: 'A young chef working the counter alone; the shop name takes one character from the chef\'s name (September 2026 reviews).', philosophy: 'Creative sushi, "more cheerfully, more freely" (Tabelog).', specialty: 'Aged-fish omakase with creative dishes.',
      anecdotes: [
        { text: '"We enjoyed the Most Popular \'Seasonal Omakase Course\' for JPY 12,500 (tax included). The name \'Sushi Rou\' is derived from the chef\'s name, taking one character from it." — September 2026.', source: R + 'B535445091/' },
        { text: '"I was impressed that everything was handled by just one person! The sushi had a slightly firm rice." — September 2026; the same diner praised French-inspired side dishes.', source: R + 'B536977454/' },
      ],
      japanese_sources_summary: '食べログ: 鮨朗、大阪市中央区東心斎橋2-7-14 NIPPO心斎橋トライアンフ1F、心斎橋駅・なんば駅から徒歩7分、毎日17:00〜24:00(L.O.22:30)、予約可(アレルギーや好みは予約時に、一斉スタートなので時間厳守)、カード可、電子マネー・QR不可、7席(カウンターのみ)、禁煙、2025年6月14日開店、黒を基調にした落ち着いた店、子ども連れも安心、飲み物は手頃、若い大将の「もっと明るく、もっと自由に」の創作寿司コース。口コミ(2026年9月): 創作料理がおいしい、季節のおまかせコース12,500円、店名は大将の名前の一文字から、熟成マグロ(赤身、13日)、熟成鯛、鰆、真鯛、鱧のレア揚げ、縞鯵、島根・隠岐の短期養殖マグロ、コーラ・緑茶400円、鰻のレアフライのサンド、4日熟成の縞鯵、硬めのシャリ、ひとりで切り盛り、フレンチのような一品も、7日熟成の隠岐の中トロ。',
      confidence: 'medium', sources: [TB, R + 'B535445091/', R + 'B536977454/', R + 'B535576395/', R + 'B535917379/', R + 'B537215272/', R + 'B535199359/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seven-seat counter; reserve and arrive on time.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Staff-maintained Tabelog listing asks guests to mention allergies or food preferences when reserving. No detail on gluten.', source: TB }] },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-14 NIPPO心斎橋トライアンフ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番14号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535445091/', R + 'B535917379/'],
    price_note: 'Course price from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', '¥12,500', 'Courses', 'no', 'no', 'September 2026.', 'omakase'),
      it('', '', 'Cola or green tea', '¥400', 'Drinks', 'ask', 'vegan', 'September 2026.', 'soft'),
    ] }, {
    cuisine: '若い大将の創作寿司のおまかせ・季節のおまかせ12,500円・熟成魚(13日熟成のマグロ、熟成鯛、4日熟成の縞鯵)・島根・隠岐の短期養殖マグロ、熟成の中トロ・鰆、真鯛、すずき・鱧のレア揚げ、鰻のレアフライのサンド・フレンチ風の一品・硬めのシャリ・飲み物は400円から・カウンター7席',
    neighborhood: '東心斎橋2-7-14 NIPPO心斎橋トライアンフ1F。裏路地、心斎橋駅・なんば駅から徒歩約7分',
    gf_detail: '実際にはグルテンフリーではありません。醤油で味付けする鮨、揚げ物や創作料理。アレルギーは予約時に伝えるよう案内があります(食べログ)。',
    vegan_detail: 'ヴィーガンではありません。魚のおまかせ。',
    notes: '[鮨・東心斎橋の路地の7席の創作寿司] 東心斎橋の裏路地にある、黒を基調にしたシックなカウンター7席の店で、2025年6月開店、若い大将がひとりで切り盛り。店名は大将の名前から一文字。季節のおまかせ(12,500円、2026年9月)は熟成魚と遊び心のある創作料理の組み合わせ。13日熟成のマグロ、熟成鯛、4日熟成の縞鯵、隠岐の熟成中トロと並んで、鱧のレア揚げや鰻のレアフライのサンド、フレンチ風の一品も。一品料理の評判も上々。シャリは硬め。飲み物は400円からと手頃。予約し、全員一斉スタートなので時間厳守で、アレルギーは予約時に。子ども連れも歓迎。',
  });
}

save();
