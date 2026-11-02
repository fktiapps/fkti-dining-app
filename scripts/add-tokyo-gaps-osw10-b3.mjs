// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 3.
//   + かつれつ四谷たけだ Katsuretsu Yotsuya Takeda (13-seat yoshoku cutlet diner; Tabelog Diner/Teishoku 100 2021, 2024, 2026;
//     the old Yotsuya yoshoku Elise reopened as Takeda per TV Tokyo)
//   + スパゲティながい Spaghetti Nagai (16-seat Japanese-style spaghetti, Nakagawa Bldg 2F; one cook, cash only)
//   + 隠れ家ダイニング さーて Kakurega Dining Saate (45-seat meat bar with curtained semi-private rooms, Shinmichi-dōri)
//   + 会席応為 Kaiseki Oui (10-seat kaiseki counter since 2020; owner 宮島央一 per the official site → MOM_AND_POP)
//   Chain check. Takeda: one shop; the Elise lineage also runs 洋食エリーゼ えいすけ in Mizuho-dai (a separate shop). Nagai: one
//   shop. Saate: a web search found one listing site page titled "…さーて 四ッ谷店" (not opened) and no other branch; kept.
//   Oui: one shop (official site). Skipped おむすび権米衛 アトレ四谷店 13085870 (Gonbei onigiri chain).
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13085870', 'おむすび権米衛ファーマーズキッチン アトレ四谷店 — Omusubi Gonbei, an onigiri chain; not researched.');

// ================================================================ かつれつ四谷たけだ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13131643/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const TVT = 'https://www.tv-tokyo.co.jp/adomachi/backnumber/20201114/141215.html'; const MATOME = 'https://tabelog.com/matome/27344/';
  const W = day(['11:00', '15:30'], ['17:00', '21:00']); const S = day(['11:00', '15:30']);
  put({
    id: 'tokyo_katsuretsu_takeda_yotsuya', name: 'かつれつ四谷たけだ (Katsuretsu Yotsuya Takeda)', category: 'OMNI',
    lat: 35.686476, lng: 139.729347, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a cutlet house where nearly every main is breaded and fried (pork, chicken and tenderloin cutlets, croquettes, fries), with demi-glace and curry sauces. The butter-grilled scallops or oysters and pork ginger are not breaded, but the sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every set is built on pork, beef, chicken or seafood; rice, shredded cabbage and pickles are the only plant items.',
    hours_raw: 'Mon–Fri 11:00–15:30 (last order 15:00) and 17:00–21:00 (last order 20:30); Sat 11:00–15:30 (last order 15:00); closed Sunday, holidays, Obon and New Year (Tabelog). No reservations; expect a line: 20–40 minutes is common, a Saturday diner waited 2 hours in March 2026, and in October 2026 one diner was 12th in line at 10:50 and still got in at opening. Cash or PayPay only, PayPay since the end of 2025 (Tabelog; January 2026 review). Order by voice, pay after (October 2026). 13 seats: two counters and two tables for two; non-smoking; takeaway (Tabelog). Children welcome (Tabelog). Opened 26 September 2011 per Tabelog; TV Tokyo says the shop reopened as Takeda two days after Elise closed, giving Elise\'s run as 1970–2009.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-4-2, 峯村ビル 1F, at the Yotsuya-mitsuke intersection just outside Exit 2 of Yotsuya Stn (Namboku/Marunouchi) — 2 min from JR Yotsuya Stn',
    cuisine: 'Yoshoku set meals around cutlets (prices tax included, Tabelog menu updated May 2026; reviews October 2026) · pork katsuretsu set, aged Mochibuta loin cutlet under demi-glace and Edam cheese, ¥1,680; pork salsa cutlet with a spicy vegetable-tomato sauce ¥1,680; aged tenderloin cutlet ¥1,350; chicken salsa cutlet ¥1,380; crab cream croquettes ¥1,300 (one extra ¥480); croquette mix ¥1,500; salmon fry with house tartar ¥1,480 · pork ginger set ¥1,680; hamburg steak with fried egg and demi-glace; menchi-katsu and croquette curry; butter-grilled scallop set ¥1,800 (autumn); oyster fry from November and the winter butter-grilled oysters, a dish from the Elise days; revived Elise "beef tomato" set ¥1,500–1,580 (October 2026 reviews) · sets come with rice on a plate, hand-shredded cabbage with sesame dressing, potato salad, miso soup and pickles; add-ons such as a little curry sauce or an extra cutlet · beer and wine',
    website: null, gmaps: gm('かつれつ四谷たけだ'), menu_url: MENU,
    notes: "[Yoshoku · Yotsuya, a cutlet diner with a line at the station crossing] A 13-seat Showa-style Western diner at the Yotsuya-mitsuke crossing, on Tabelog's Diner or Teishoku 100 list in 2021, 2024 and 2026, and almost always with a line outside. TV Tokyo tells its story: from 1970 the spot was Elise, a yoshoku restaurant loved by 上智大学 students, which closed one day without warning and reopened two days later as Takeda, keeping Elise favourites such as the winter butter-grilled oyster set; a Tabelog user's roundup says Elise was opened by the second generation of a business founded in Tsukiji and that the third generation turned it into this cutlet shop. The house cutlet is a thick aged Mochibuta loin under demi-glace and grated Edam; crab cream croquettes are the add-on reviewers mention most, and autumn brings butter-grilled scallops before the oysters. In October 2026 the Elise beef tomato returned for a limited time. Three cooks behind the counter, signatures of TV crews and celebrities on the walls. Cash or PayPay; no bookings; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'TV Tokyo (アド街ック天国, 14 November 2020): the shop was the yoshoku restaurant エリーゼ from 1970 to 2009, closed without notice and reopened two days later as たけだ. Tabelog gives the opening date as 26 September 2011.',
      background: 'No source names the owner or cooks. A Tabelog user\'s roundup (matome 27344) about 洋食エリーゼ えいすけ in Mizuho-dai says the business was founded in Tsukiji, the second generation opened 洋食エリーゼ in Yotsuya, the third generation converted it into this katsuretsu shop, and a cook who trained alongside the third generation, 佐藤氏, opened えいすけ. An October 2026 diner notes that えいすけ\'s menu calls the beef tomato the most popular dish at "Yotsuya Elise". An October 2026 diner counted three staff in the kitchen and saw TV and celebrity signatures on the walls. Tabelog Diner "Tabelog 100" 2024 and 2026; Teishoku "Tabelog 100" 2021.',
      philosophy: null, specialty: 'Pork katsuretsu with demi-glace and Edam; crab cream croquette; winter butter-grilled oysters.',
      anecdotes: [
        { text: '"Once again, I had to wait 2 hours… I guess it\'s to be expected on a Saturday… it\'s a monthly treat for me, so I don\'t mind waiting." — March 2026, a 14th visit.', source: R + 'B452118827/' },
        { text: '"This time, I decided to try the Beef Tomato, a revival dish from the Elise era. - Beef Tomato Set Meal (JPY 1500)" — October 2026.', source: R + 'B193184762/' },
        { text: '"The interior has a retro Western-style diner vibe reminiscent of the Showa era… The walls are adorned with signatures from TV shows and various celebrities." — October 2026, pork ginger set.', source: R + 'B538047601/' },
      ],
      japanese_sources_summary: 'テレビ東京「出没！アド街ック天国」(2020年11月14日、四谷): かつれつ 四谷たけだ、揚げ物メニューがメイン、1970年から2009年までは「エリーゼ」という人気の洋食屋、上智大生に愛された「エリーゼ」は予告なく閉店し、2日後に「たけだ」として再オープン、冬季限定の「カキバター焼定食」などエリーゼ時代の人気メニューの一部は今も健在、四谷1-4-2 峯村ビル1F。食べログまとめ (ユーザー): えいすけはもともと築地で創業、二代目が四ツ谷に「洋食エリーゼ」を開業、三代目がカツレツ専門店「かつれつ四谷たけだ」に業態転換、三代目と修行をともにした佐藤氏が「えいすけ」を開業。食べログ (店舗会員): 食堂百名店2024・2026、定食百名店2021、月〜金11:00〜15:30・17:00〜21:00、土11:00〜15:30、日祝休み、予約不可、カード・電子マネー不可、PayPay 可、13席、禁煙、2011年9月26日オープン、ポークかつれつ定食1,680円 (デミグラスとエダムチーズ)、カニクリームコロッケ定食1,300円。口コミ(2026年1月〜10月): 行列、ビーフトマト定食、カニクリームコロッケ1個480円、ホタテバター焼定食1,800円、カキは11月から、厨房に3人、壁にサイン。',
      confidence: 'medium', sources: [TB, MENU, TVT, MATOME, R + 'B193184762/', R + 'B433360618/', R + 'B452118827/', R + 'B533122909/', R + 'B537637917/', R + 'B537808023/', R + 'B537890387/', R + 'B538047601/', R + 'B538210338/', R + 'B538340203/', R + 'B538451788/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Join the line, order by voice when seated (October 2026); cash or PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-4-2 峯村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing, menu updated May 2026, Tabelog 100 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686476, 139.729347); cross-checked: GSI 東京都新宿区四谷一丁目4番地 (lot) 72m. Taisei (tokyo_taisei_yotsuya, address_ja "東京都新宿区四谷1-4") is 12 m away on Tabelog, a separate address with no building given, so both keep their own points; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B452118827/', R + 'B533122909/', R + 'B537637917/'],
    price_note: 'Tabelog menu (tax included, updated May 2026) and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork katsuretsu set (aged loin cutlet, demi-glace, Edam cheese)', '¥1,680', 'Set meals', 'no', 'no', 'Tabelog menu; October 2026.', 'pork_katsuretsu'),
      it('', '', 'Aged tenderloin cutlet set', '¥1,350', 'Set meals', 'no', 'no', 'Tabelog menu.', 'hire_katsu'),
      it('', '', 'Crab cream croquette set (2 pieces, house tartar)', '¥1,300', 'Set meals', 'no', 'no', 'Tabelog menu; one extra croquette ¥480 (October 2026).', 'crab_croquette'),
      it('', '', 'Salmon fry set with house tartar', '¥1,480', 'Set meals', 'no', 'no', 'Tabelog menu.', 'salmon_fry'),
      it('', '', 'Pork ginger set', '¥1,680', 'Set meals', 'ask', 'no', 'October 2026 review.', 'pork_ginger'),
      it('', '', 'Butter-grilled scallop set (autumn)', '¥1,800', 'Set meals', 'ask', 'no', 'October 2026 review.', 'scallop_butter'),
      it('ビーフトマト定食', '', 'Beef tomato set (revived Elise dish, limited time)', '¥1,580', 'Set meals', 'ask', 'no', 'October 2026 reviews give ¥1,500 and ¥1,580.', 'beef_tomato'),
    ] }, {
    cuisine: 'カツレツ中心の洋食の定食 (税込み、食べログのメニュー2026年5月更新、2026年10月の口コミ)・ポークかつれつ定食 (熟成させた Mochibuta のロースにデミグラスとエダムチーズ) 1,680円、野菜たっぷりの辛いトマトソースのポークサルサかつ定食1,680円、熟成ヒレかつ定食1,350円、チキンサルサかつ定食1,380円、カニクリームコロッケ定食1,300円 (追加1個480円)、コロッケミックス1,500円、自家製タルタルのサーモンフライ定食1,480円・豚の生姜焼き定食1,680円、目玉焼きとデミグラスのハンバーグ、メンチカツとコロッケのカレー、秋のホタテバター焼定食1,800円、11月からカキフライ、エリーゼ時代からの冬のカキバター焼定食、エリーゼのビーフトマト定食の復活1,500〜1,580円 (2026年10月の口コミ)・定食は皿盛りのライス、手切りのキャベツ (ごまドレッシング)、ポテトサラダ、味噌汁、漬物。少しのカレーやカツの追加も・ビールとワイン',
    neighborhood: '四谷1-4-2 峯村ビル1F、四谷見附の交差点、地下鉄四ツ谷駅2番出口のすぐ外。JR四ツ谷駅から徒歩2分',
    gf_detail: 'グルテンフリーではない。カツレツの店で、メインのほとんどがパン粉の揚げ物 (豚、鶏、ヒレのカツ、コロッケ、フライ)、デミグラスやカレーのソース。ホタテやカキのバター焼き、生姜焼きは衣なしだが、ソースの説明はない。',
    vegan_detail: 'ヴィーガンではない。どの定食も豚、牛、鶏、魚介が主役で、植物性はライス、キャベツ、漬物くらい。',
    notes: '[洋食・四谷、駅の交差点の行列のカツレツ食堂] 四谷見附の交差点にある13席の昭和の洋食屋。食べログの食堂百名店・定食百名店に2021、2024、2026年に選ばれ、店の前にはたいてい行列。テレビ東京によれば、ここは1970年から上智大生に愛された洋食屋「エリーゼ」で、ある日予告なく閉店し、2日後に「たけだ」として再オープン。冬のカキバター焼定食などエリーゼ時代の人気メニューを残している。食べログのユーザーのまとめでは、築地で創業した店の二代目が四ツ谷にエリーゼを開き、三代目がこのカツレツ専門店に変えたという。看板は厚い熟成 Mochibuta のロースにデミグラスとエダムチーズのかつれつ。カニクリームコロッケは口コミによく出てくる追加の一品で、秋はホタテのバター焼き、そのあとカキの季節。2026年10月にはエリーゼのビーフトマトが期間限定で復活。カウンターの奥に料理人が3人、壁にはテレビや有名人のサイン。現金か PayPay、予約不可、日曜休み。',
  });
}

// ================================================================ スパゲティながい
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13012022/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '20:00']);
  put({
    id: 'tokyo_spaghetti_nagai_yotsuya', name: 'スパゲティながい (Spaghetti Nagai)', category: 'OMNI',
    lat: 35.686512, lng: 139.728711, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a spaghetti shop; every main is wheat pasta, and several sauces are soy-sauce based.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most spaghetti carries cod roe, seafood, bacon, sausage, tuna, egg or cream; a garlic sauce with basil exists, but the one reviewed came with clams. The mini salad is the plant dish named.',
    hours_raw: 'Mon–Sat and holidays 11:30–20:00, no afternoon break; may close early some days; closed Sunday, with occasional Sunday openings (Tabelog). No reservations; a line at lunch (30–40 minutes once in September 2026), quiet mid-afternoon (2025–26 reviews). Cash only (Tabelog). 16 seats: an L-shaped counter of 6 and tables (2×4, 1×2); up stairs on the 2nd floor, with no sign outside (Tabelog; October 2026 review). Non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-8, Nakagawa Bldg 2F, a few minutes down Shinmichi-dōri on the left — 2 min from Yotsuya Stn (Namboku Line), 3 min from JR and Marunouchi Line; Odenya den and ↑↑↓↓←→←→BABA are in the basement of the same building',
    cuisine: 'Japanese-style spaghetti in the Hashiya line (two 2026 reviews), regular or large · cod roe and squid with shiso ¥1,300–1,500; tarako and uni ¥1,300; egg and bacon "carbonara" in a soy-sauce style ¥1,300; seafood (shrimp, clams, scallops, squid) in tomato or soy sauce ¥1,400; meat sauce with tuna; clams and basil in garlic sauce ¥1,400; sausage, bacon, asparagus and shimeji in soy sauce ¥1,500; prosciutto cream; meat and natto; large size about ¥1,500 (2025–26 reviews) · mini salad ¥300 with a sweet mustard dressing; tuna salad ¥700 · beer ¥700 (medium bottle), white wine ¥500 a glass (October 2026)',
    website: null, gmaps: gm('スパゲティながい 四谷'), menu_url: null,
    notes: "[Pasta · Yotsuya, a one-cook spaghetti counter up the stairs] No sign outside: climb to the second floor of an old building on Shinmichi-dōri and you find an L-shaped counter, a few tables and walls of bookshelves, with Western rock playing softly. Diners place it in the Hashiya line of Japanese-style spaghetti: thick-ish noodles served piping hot, cod roe with squid and shiso, a soy-sauce egg and bacon \"carbonara\" one diner likened to tamago kake gohan, seafood in a tomato sauce that is not sweet, and meat sauce with tuna. A diner on a sixth visit in September 2026 says the cook works alone yet keeps waits short; one diner called the owner a book-loving craftsman, and an October 2026 diner came for the carbonara that, in the diner's words, Gentosha's Kenjo loves. The woman out front struck two 2026 diners as curt, and one found the pasta ordinary. Open straight through from 11:30 to 20:00, so mid-afternoon has no line; cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner (one September 2026 diner wrote "Mr. Nagai?" as a guess). "Although the chef operates solo, [the chef] works efficiently, ensuring minimal wait times" (September 2026); "The owner was a book-loving, craftsman-like gentleman" (September 2026); "The owner… seems to be in charge of the kitchen, while a woman… manages the dining area" (September 2026). Reviews place the shop in the "Hashiya" lineage of Japanese-style spaghetti (September 2026, two reviewers).',
      philosophy: null, specialty: 'Cod roe and squid; egg and bacon in soy sauce; seafood tomato.',
      anecdotes: [
        { text: '"It is well-known as a prestigious establishment that follows the famous \'Hashiya\' lineage of spaghetti… Although the chef operates solo, [the chef] works efficiently, ensuring minimal wait times." — September 2026, a sixth visit.', source: R + 'B447947604/' },
        { text: '"Today, I stopped by \'Nagai\' to enjoy the carbonara that Gentosha\'s Kenjo loves." — October 2026, egg and bacon ¥1,300.', source: R + 'B535645086/' },
        { text: '"To explain it simply, it\'s like a pasta version of TKG (Tamago Kake Gohan). You have egg, a hint of soy sauce, and the carbohydrates from the pasta." — September 2026.', source: R + 'B535598889/' },
      ],
      japanese_sources_summary: '食べログ: スパゲティながい、パスタ、四谷1-8 中川ビル2F、南北線四ツ谷駅から徒歩2分、JR・丸ノ内線3分、月〜土・祝11:30〜20:00、早く閉める日も、日曜休み (臨時営業あり)、予約不可、カード・電子マネー・QR不可、16席 (カウンター6、テーブル10)、禁煙。口コミ(2025年6月〜2026年10月): Hashiya の系譜、看板なしの2階、たらこといか (大葉)、たらことうに、エッグベーコン (醤油味)、海の幸のトマトソース、ミートソースとツナ、あさりとバジルのガーリック、1,300〜1,500円、大盛り、ミニサラダ300円、料理人はひとり、本棚、通し営業、昼は行列。',
      confidence: 'medium', sources: [TB, R + 'B447947604/', R + 'B508508367/', R + 'B518969150/', R + 'B535367998/', R + 'B535488227/', R + 'B535598889/', R + 'B535645086/', R + 'B536498263/', R + 'B536602192/', R + 'B537110243/', R + 'B537454241/', R + 'B537495546/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter or table from the menu; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '東京都新宿区四谷1-8 中川ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (911 reviews); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686512, 139.728711); cross-checked: GSI 東京都新宿区四谷一丁目8番地 (lot) 47m. Same building as Odenya den (tokyo_odenya_den_yotsuya, address_ja "東京都新宿区四谷1-8 中川ビル B1F", 5 m away) and ↑↑↓↓←→←→BABA (tokyo_uramen_baba_yotsuya, address_ja "東京都新宿区四谷1-8 中川ビル B1F", 2 m away), so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B447947604/', R + 'B535645086/', R + 'B535488227/'],
    price_note: 'Prices from 2025–26 reviews; Tabelog lists no current menu.', last_checked: TODAY, items: [
      it('', '', 'Cod roe and squid spaghetti with shiso', '¥1,500', 'Spaghetti', 'no', 'no', 'September 2026; ¥1,300 in June 2025.', 'tarako_ika'),
      it('', '', 'Egg and bacon spaghetti (soy-sauce style)', '¥1,300', 'Spaghetti', 'no', 'no', 'October 2026 review.', 'egg_bacon'),
      it('', '', 'Seafood spaghetti in tomato sauce', '¥1,400', 'Spaghetti', 'no', 'no', 'April 2026 review; large ¥1,500 (September 2026).', 'seafood_tomato'),
      it('', '', 'Tarako and uni spaghetti', '¥1,300', 'Spaghetti', 'no', 'no', 'October 2026 review.', 'tarako_uni'),
      it('', '', 'Mini salad', '¥300', 'Salads', 'ask', 'ask', 'April and October 2026 reviews.', 'mini_salad'),
    ] }, {
    cuisine: 'Hashiya の系譜の和風スパゲティ (2026年の口コミ2件)、普通盛りか大盛り・たらこといか、大葉のせ1,300〜1,500円、たらことうに1,300円、醤油味のエッグベーコンの「カルボナーラ」1,300円、海の幸 (えび、あさり、ほたて、いか) のトマトソースか醤油味1,400円、ミートソースとツナ、あさりとバジルのガーリックソース1,400円、ソーセージ、ベーコン、アスパラ、しめじの醤油味1,500円、生ハムのクリーム、肉と納豆、大盛りはおよそ1,500円 (2025〜26年の口コミ)・甘めのマスタードドレッシングのミニサラダ300円、ツナサラダ700円・ビール中瓶700円、白ワインのグラス500円 (2026年10月)',
    neighborhood: '四谷1-8 中川ビル2F、新道通りを数分入った左側。南北線四ツ谷駅から徒歩2分、JR・丸ノ内線3分。同じビルの地下におでんやdenと↑↑↓↓←→←→BABA',
    gf_detail: 'グルテンフリーではない。スパゲティの店で、メインはすべて小麦のパスタ。醤油味のソースも多い。',
    vegan_detail: '要確認。ほとんどのスパゲティにたらこ、魚介、ベーコン、ソーセージ、ツナ、卵、クリームが入る。バジルのガーリックソースもあるが、口コミのものはあさり入り。植物性で名前が出るのはミニサラダ。',
    notes: '[パスタ・四谷、階段の上のひとりで作るスパゲティ] 看板はない。新道通りの古いビルの2階に上がると、L字のカウンターとテーブルがいくつか、壁一面の本棚、小さな音で洋楽のロック。口コミでは Hashiya の系譜の和風スパゲティとされ、やや太めの麺が熱々で出る: 大葉ののったたらこといか、卵かけご飯にたとえた人もいる醤油味のエッグベーコンの「カルボナーラ」、甘くないトマトソースの海の幸、ツナ入りのミートソース。2026年9月に6回目の来店をした客によれば料理人はひとりで、それでも待ち時間は短い。本好きの職人肌の店主という声や、Gentosha の Kenjo が好きだというカルボナーラを食べに来たという2026年10月の客も。ホールの女性の対応がそっけないと感じた人が2026年に2人、パスタは普通だったという人もいる。11時半から20時まで通しで開いていて、午後の中ごろは行列なし。現金のみ、日曜休み。',
  });
}

// ================================================================ 隠れ家ダイニング さーて
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13219912/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/'; const PARTY = TB + 'party/';
  const H = day(['11:00', '23:30']);
  put({
    id: 'tokyo_kakurega_dining_saate_yotsuya', name: '隠れ家ダイニング さーて (Kakurega Dining Saate)', category: 'OMNI',
    lat: 35.686651, lng: 139.72878, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steak, churrasco and roast meats are the core, but sauces are not described; much else is wheat-based or fried (kara-age, croquettes, garlic toast, pasta, naan, croutons on the Caesar).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The listing ticks "Vegetarian options"; edamame, salads, fresh spring rolls and fries are on the menu, but nothing is marked vegan and the courses centre on meat.',
    hours_raw: 'Mon–Sat 11:00–23:30 (last order 23:00); Sunday only for booked groups of five or more, by phone by the day before (Tabelog). No cover charge (Tabelog). 45 seats, curtained semi-private rooms for 4 to 20, whole-floor hire for 35–50; smoking allowed except at lunch; children not admitted at dinner (Tabelog). Cards (VISA, Master, JCB) and QR including PayPay, Alipay and WeChat Pay; no e-money (Tabelog). Same-day bookings welcome (June 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-7-15, 山田ビル 2F, at the mouth of Shinmichi-dōri — 1 min from Yotsuya Stn (subway and JR Yotsuya exit)',
    cuisine: 'Meat bar and izakaya: steak, churrasco and roasts with plenty to drink (Tabelog) · à la carte (Tabelog menu, tax included, last updated November 2023): beef steak ¥1,580, beef churrasco ¥1,480, roast beef ¥1,280, roast pork or duck ¥1,080, kamado-grilled chicken, tandoori chicken and kebabs; Caesar salad ¥650, caprese ¥650, salmon carpaccio ¥880; kara-age ¥680, cream croquettes ¥650; pasta ¥780–880; fried rice ¥700–780 · 2026 reviews add shrimp and mushroom ajillo with bread, garlic toast, cheese fondue, dashi-maki omelette and a "Wild Plate" of churrasco, roast beef and roast pork · courses with 2 hours of drinks from ¥1,800 (cover plus two dishes) and ¥3,000–4,500; a 3-hour meat-lover\'s course with wagyu steak and all-you-can-eat kara-age and fries ¥5,000 (Tabelog, discounted prices); 70+ drinks (August 2026)',
    website: null, gmaps: gm('隠れ家ダイニング さーて 四谷'), menu_url: MENU,
    notes: "[Izakaya · Yotsuya, a meat bar with curtained booths] A second-floor dining bar at the mouth of Shinmichi-dōri, a minute from the station, whose sign in Latin letters confused one returning diner. Curtains split the 45 seats into semi-private booths, and the menu leans Western: sizzling steak on a hot plate, churrasco, house roast beef and roast pork, kara-age, ajillo with bread, garlic toast, fried rice to finish. Most 2026 visitors came for the cheap drinks courses, from about ¥3,000 for two hours with nine dishes up to a three-hour meat course with wagyu steak and all-you-can-eat fried chicken and fries; one Saturday night in August 2026 the place was nearly empty. Open from 11:00 every day but Sunday (groups by booking only); smoking allowed at night, no children at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner or cooks. Corporate-member Tabelog listing ("Enjoy plenty of alcohol and Meat Dishes"). An August 2026 review describes the "Hearty Meat Course" from ¥5,980 down to ¥4,980.',
      philosophy: null, specialty: 'Steak, churrasco and roast beef; drinks courses.',
      anecdotes: [
        { text: '"At first, I thought I had entered a different restaurant! The name was written in English or romaji, so I really couldn\'t tell!" — February 2026, a second visit.', source: R + 'B495375936/' },
        { text: '"The most impressive dish was the Wild Plate with three kinds of meat. It features beef churrasco, roast beef, and roast pork, all served together." — August 2026.', source: R + 'B534437689/' },
        { text: '"It was a Saturday night, but the restaurant was quite empty, and I was able to walk in without a reservation!" — August 2026.', source: R + 'B535210303/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 隠れ家ダイニング さーて、居酒屋・バル・ステーキ、四谷1-7-15 山田ビル2F、新道通りの入口、四ツ谷駅から徒歩1分、毎日11:00〜23:30 (L.O.23:00)、日曜は前日までの5名以上の予約のみ、チャージ料なし、45席、カーテンで仕切る半個室、喫煙可 (ランチは禁煙)、ディナーは子ども不可、カード・QR 可、牛ステーキ1,580円、牛シュラスコ1,480円、ローストビーフ1,280円、2時間飲み放題付きコース3,000〜4,500円、3時間のコース5,000円 (割引後)。口コミ(2026年2月〜8月): ステーキ、ローストビーフ、シュラスコ、唐揚げ、アヒージョ、ガーリックトースト、チャーハン、ワイルドプレート、飲み放題のコース、土曜の夜は空いていたという声。',
      confidence: 'low', sources: [TB, MENU, PARTY, R + 'B495375936/', R + 'B524020259/', R + 'B525743983/', R + 'B526262913/', R + 'B530443261/', R + 'B533675578/', R + 'B534437689/', R + 'B534506011/', R + 'B534754737/', R + 'B535210303/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the menu or book a course; set drinks plans.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-7-15 山田ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with current courses; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.686651, 139.728780); cross-checked: GSI 東京都新宿区四谷一丁目7番地 (lot) 22m; no other record gives 山田ビル; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU, PARTY],
    price_note: 'À la carte from the Tabelog menu (tax included, last updated November 2023, may have changed); courses from the Tabelog course page (discounted prices).', last_checked: TODAY, items: [
      it('', '', 'Beef steak', '¥1,580', 'Meat', 'ask', 'no', 'Tabelog menu (2023).', 'beef_steak'),
      it('', '', 'Beef churrasco', '¥1,480', 'Meat', 'ask', 'no', 'Tabelog menu (2023).', 'churrasco'),
      it('', '', 'Roast beef', '¥1,280', 'Meat', 'ask', 'no', 'Tabelog menu (2023).', 'roast_beef'),
      it('', '', 'Kara-age', '¥680', 'Fried', 'no', 'no', 'Tabelog menu (2023).', 'karaage'),
      it('', '', 'Edamame', '¥480', 'Snacks', 'ask', 'ask', 'Tabelog menu (2023).', 'edamame'),
      it('', '', 'Course with 2 hours of drinks, 10 dishes incl. churrasco and roast pork', '¥4,000', 'Course', 'no', 'no', 'Tabelog (discounted from ¥5,000).', 'course_10'),
    ] }, {
    cuisine: '肉のバル兼居酒屋。ステーキ、シュラスコ、ローストとお酒をたっぷり (食べログ)・アラカルト (食べログのメニュー、税込み、2023年11月更新): 牛ステーキ1,580円、牛シュラスコ1,480円、ローストビーフ1,280円、ローストポークや鴨1,080円、窯焼きチキン、タンドリーチキン、ケバブ。シーザーサラダ650円、カプレーゼ650円、サーモンのカルパッチョ880円。kara-age 680円、クリームコロッケ650円。パスタ780〜880円、チャーハン700〜780円・2026年の口コミでは、えびときのこのアヒージョとパン、ガーリックトースト、チーズフォンデュ、出汁巻き玉子、シュラスコ、ローストビーフ、ローストポークの「Wild Plate」も・2時間飲み放題付きのコースは1,800円 (チャージと料理2品) と3,000〜4,500円、和牛ステーキがメインで kara-age とポテトが食べ放題の3時間の肉のコース5,000円 (食べログ、割引後)・ドリンク70種類以上 (2026年8月)',
    neighborhood: '四谷1-7-15 山田ビル2F、新道通りの入口。四ツ谷駅 (地下鉄、JR四ツ谷口) から徒歩1分',
    gf_detail: '要確認。ステーキ、シュラスコ、ローストが中心だがソースの説明はない。ほかは小麦や揚げ物が多い (kara-age、コロッケ、ガーリックトースト、パスタ、ナン、シーザーサラダのクルトン)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応の印。枝豆、サラダ、生春巻き、フライドポテトはあるが、ヴィーガンの印はなく、コースは肉が中心。',
    notes: '[居酒屋・四谷、カーテンで仕切る肉のバル] 新道通りの入口、駅から1分のビルの2階のダイニングバー。看板がローマ字で、2回目に来た客も別の店かと思ったという。45席をカーテンで半個室に仕切り、料理は洋風寄り: 鉄板で音を立てるステーキ、シュラスコ、自家製のローストビーフとローストポーク、kara-age、パンを添えたアヒージョ、ガーリックトースト、締めのチャーハン。2026年の客の多くは安い飲み放題のコースで、2時間9品で3,000円ほどから、和牛ステーキと kara-age とポテト食べ放題の3時間の肉のコースまで。2026年8月の土曜の夜はほとんど空いていたという。日曜以外は毎日11時から (日曜は団体の予約のみ)。夜は喫煙可、夕食時は子ども不可。',
  });
}

// ================================================================ 会席応為
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13254862/'; const R = TB + 'dtlrvwlst/'; const PARTY = TB + 'party/';
  const SITE = 'https://kaisekioui.tokyo/';
  const D = day(['11:30', '14:00'], ['17:30', '22:00']); const SUN = day(['11:30', '14:00']);
  put({
    id: 'tokyo_kaiseki_oui_yotsuya', name: '会席応為 (Kaiseki Oui)', category: 'MOM_AND_POP',
    lat: 35.685725, lng: 139.728702, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the official site says "アレルギー等ご相談くださいませ" (consult us about allergies). Courses include sashimi with sweet soy sauce, sukiyaki, battered fried dishes, soba as a finish and chocolate cake (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-led kaiseki; the courses include fish, wagyu and chicken.',
    hours_raw: 'Tue–Sat lunch 11:30–14:00, dinner 17:30–22:00 (last seating 20:00); Sunday lunch only; closed Monday, holidays and over New Year (Tabelog; official site). Reservations advised (lunch was full twice for one January 2026 diner); same-day cancellations charged in full (Tabelog). Dinner can also be à la carte (April 2026). 10 seats: 6 at the counter facing the open kitchen and one semi-private room for up to 4; non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Children welcome; takeaway (Tabelog). Opened 8 October 2020; the site marked its 6th anniversary on 8 October 2026.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-2-6, アーバンビルサカス5 1F, down a narrow lane off Shinjuku-dōri west of Yotsuya-mitsuke Bridge — 2 min from Yotsuya Stn',
    cuisine: 'Seasonal kaiseki courses from an owner-chef trained in Japanese, sushi and Italian kitchens (official site) · lunch courses ¥3,000, ¥5,000, ¥7,000; dinner omakase 7–8 dishes ¥7,950, 10 dishes ¥9,980, top course 10 dishes ¥13,000, all tax included (official site) · a ¥3,000 lunch in August 2026: appetizers, sashimi of mackerel, bonito and grouper, salt-grilled Spanish mackerel, chikuzen-ni, takikomi gohan, chocolate cake and coffee · a June 2026 dinner: Nagoya Cochin chicken among the appetizers, bonito, sardine and kinmedai sashimi, Lake Biwa ayu, tempura of whiting and shrimp, Nagasaki black wagyu steak, corn and bacon takikomi gohan, black-tea mousse · A5 beef sukiyaki (Tabelog); à la carte sukiyaki about ¥2,000 and soba (April 2026) · clay-pot rice, leftovers wrapped as onigiri to take home · wine, craft beer and sake',
    website: SITE, gmaps: gm('会席応為 四谷'), menu_url: SITE,
    notes: "[Kaiseki · Yotsuya, a six-seat counter down a lane] Down a narrow lane off Shinjuku-dōri, a quiet Japanese room with six counter seats facing the open kitchen and one small semi-private room, opened in 2020 and run by 宮島央一, an owner-chef who, the site says, drew on time abroad to train in creative kaiseki, sushi and Italian kitchens. Courses change daily: sashimi with a sweet soy sauce, a grilled fish such as Lake Biwa ayu, a fried course, A5 wagyu as sukiyaki or steak, and rice cooked in a clay pot, whose leftovers come back as onigiri to take home; the rich chocolate cake at the end astonished one diner. Lunch from ¥3,000 is the way in and books up, and dinner runs ¥7,950–13,000, or à la carte. One diner says the name comes from Hokusai. Closed Mondays and holidays; Sunday lunch only.",
    chef_bio: { chef_name: '宮島央一', roles: ['Owner-chef (official site: "店主 宮島央一")'], origin: null,
      background: 'Per the official site: drawing on experience abroad, trained at shops of many genres, chiefly creative Japanese and kaiseki, sushi and Italian; "色々経験した分、誰にも真似できないと思って" (having experienced so much, no one else can copy it). Tabelog: "our chef, who has experience in both Japanese and Italian cuisine"; an August 2026 diner learned that the chef had worked in Italian cuisine. Opened 8 October 2020 (Tabelog; the site\'s anniversary notices). The site lists Tabelog and 一休.com bookings and an online store.',
      philosophy: 'Seasonal ingredients chosen with care and served as courses; inventive dishes from an owner unbound by convention (official site).', specialty: 'Seasonal kaiseki; A5 beef sukiyaki; clay-pot takikomi gohan.',
      anecdotes: [
        { text: '"The rice was cooked in a clay pot, and even though it was too much for two people to finish, I appreciated that they made it into onigiri for us to take home!" — July 2025, lunch.', source: R + 'B513769251/' },
        { text: '"Lunch kaiseki for JPY 3,000, tax included. A cozy restaurant with 6 counter seats and private rooms… The name is indeed derived from Hokusai." — November 2025.', source: R + 'B517568286/' },
        { text: '"The sukiyaki had a refined balance, not too sweet… and at JPY 2000, it was an incredible value." — April 2026, à la carte after a walk at Chidorigafuchi.', source: R + 'B525425502/' },
      ],
      japanese_sources_summary: '公式サイト (kaisekioui.tokyo): 大人の隠れ家 四ツ谷 会席応為、落ち着いた和空間にカウンター席と半個室、旬な食材を厳選しコース仕立て、店主の枠にとらわれない独創的な逸品、ワインや日本酒、クラフトビール、ランチコース3,000円・5,000円・7,000円、おまかせコース7〜8品7,950円、10品9,980円、最上級コース10品13,000円 (税込)、アレルギー等ご相談くださいませ、店主 宮島央一、海外経験を活かして和食メインの創作・懐石料理、寿司、イタリアンなど様々なジャンルの店で修行、ランチ11:30〜14:00、ディナー17:30〜22:00、定休日は月曜日・祝日、日曜日はランチ営業のみ、2026年10月8日に6周年、四谷1丁目2-6 アーバンビルサカス5 1B。食べログ (店舗会員): 2020年10月8日オープン、10席 (カウンター6、半個室1で4名まで)、A5の牛のすき焼き、当日キャンセルは100%。口コミ(2025年7月〜2026年10月): 細い路地、土鍋のごはんの残りはおにぎりに、チョコレートケーキ、カウンターで調理が見える、昼は予約で満席のことも、アラカルトのすき焼き2,000円、松茸の椀、名前は Hokusai にちなむという声。',
      confidence: 'medium', sources: [SITE, TB, PARTY, R + 'B511437311/', R + 'B513769251/', R + 'B515915825/', R + 'B517568286/', R + 'B519394072/', R + 'B521971024/', R + 'B525355605/', R + 'B525425502/', R + 'B525518201/', R + 'B531199863/', R + 'B534428479/', R + 'B538280595/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses booked online (Tabelog, 一休.com); counter seats face the kitchen.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-2-6 アーバンビルサカス5 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (6th-anniversary notice 8 October 2026) and shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.685725, 139.728702); cross-checked: GSI 東京都新宿区四谷一丁目2番地 (lot) 24m. The official site gives the unit as 1B, Tabelog as 1F; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, PARTY, R + 'B525425502/'],
    price_note: 'Course prices from the official site (tax included; read November 2026).', last_checked: TODAY, items: [
      it('ランチコース', '', 'Lunch course', '¥3,000', 'Course', 'ask', 'no', 'Official site; also ¥5,000 and ¥7,000.', 'lunch_3000'),
      it('おまかせコース 7～8品', '', 'Omakase course, 7–8 dishes', '¥7,950', 'Course', 'ask', 'no', 'Official site.', 'omakase_7'),
      it('おまかせコース 10品', '', 'Omakase course, 10 dishes', '¥9,980', 'Course', 'ask', 'no', 'Official site.', 'omakase_10'),
      it('最上級コース 10品', '', 'Top course, 10 dishes', '¥13,000', 'Course', 'ask', 'no', 'Official site.', 'top_course'),
      it('', '', 'Sukiyaki (à la carte)', '¥2,000', 'À la carte', 'ask', 'no', 'April 2026 review.', 'sukiyaki'),
    ] }, {
    cuisine: '和食、寿司、イタリアンの店で修行した店主の季節の会席コース (公式サイト)・ランチコース3,000円、5,000円、7,000円。ディナーはおまかせコース7〜8品7,950円、10品9,980円、最上級コース10品13,000円、すべて税込み (公式サイト)・2026年8月の3,000円のランチ: 前菜、さば・かつお・はたの刺身、さわらの塩焼き、筑前煮、炊き込みご飯、チョコレートケーキ、コーヒー・2026年6月のディナー: 前菜に Nagoya Cochin、かつお・いわし・金目鯛の刺身、Lake Biwa の鮎、きすとえびの揚げ物、Nagasaki の黒毛和牛のステーキ、とうもろこしとベーコンの炊き込みご飯、紅茶のムース・A5の牛のすき焼き (食べログ)。アラカルトのすき焼き2,000円ほど、締めのそば (2026年4月)・土鍋のごはんの残りはおにぎりにして持ち帰りに・ワイン、クラフトビール、日本酒',
    neighborhood: '四谷1-2-6 アーバンビルサカス5 1F、四谷見附橋の西、新宿通りから入った細い路地。四ツ谷駅から徒歩2分',
    gf_detail: '予約時に要確認。公式サイトに「アレルギー等ご相談くださいませ」。コースには甘い醤油の刺身、すき焼き、揚げ物、締めのそば、チョコレートケーキも (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁が基本の会席で、コースには魚、和牛、鶏。',
    notes: '[会席・四谷、路地の奥の6席のカウンター] 新宿通りから細い路地を入った静かな和の店。オープンキッチンに向かうカウンター6席と小さな半個室がひとつ。2020年オープンで、店主は宮島央一さん。サイトによれば海外での経験を活かし、和食メインの創作・懐石、寿司、イタリアンなどの店で修行した。コースは日替わりで、甘い醤油で食べる刺身、Lake Biwa の鮎などの焼き物、揚げ物、すき焼きかステーキのA5の和牛、土鍋のごはん。残りはおにぎりにして持ち帰らせてくれる。最後の濃厚なチョコレートケーキに驚いた客も。入口は3,000円からのランチで、予約で埋まる。夜は7,950〜13,000円、アラカルトも。店名は Hokusai にちなむという客の声も。月曜・祝日休み、日曜はランチのみ。',
  });
}

save();
