// Osaka sweep (2-mile circle around Dotonbori), batch 134 — mom / small-shop phase (all OMNI).
//   + bird's nest (yakitori course counter of Hinai chicken around a central grill, 2F above its sister Bird; Ura-Namba)
//   + 山桜 (reservation-only sushi course with red and white vinegar rice, 30+ sake; basement, Ura-Namba)
//   + くいしんぼ (fluffy okonomiyaki and yakisoba at a teppan counter, takoyaki to go; Minami-Horie) — same address as Wakamizu
//   + おでん すみ吉 (refined Osaka oden with three broths, lunch tempura sets; Hotel Nikko building B2F)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 134);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ bird's nest
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131289/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://enya-food.jp/';
  put({
    id: 'osaka_birds_nest_namba', name: 'bird\'s nest (bird\'s nest)', category: 'OMNI',
    lat: 34.664458, lng: 135.503948, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare and seasonings; mini burger buns and croquette; ramen option to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and duck throughout; liver pâté; egg in the chawanmushi and oyakodon.',
    hours_raw: 'Daily 17:00–24:00 (Tabelog). Courses only until 20:00, by reservation; à la carte after 20:00 (2026). Cards, IC cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['17:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambasennichimae 9-17, Sennichimae Central No. 2 Bldg 2F — 1 min from Namba Grand Kagetsu',
    cuisine: 'Yakitori courses · courses ¥5,500, ¥8,250 and ¥9,680: a special dish (e.g. chawanmushi with turnip sauce), Hinai chicken skewers (thigh, breast, gizzard, wings with sudachi, negima, tsukune), Kawachi duck with melon, Awaodori chicken neck, grilled vegetables (a giant red eggplant, white mushroom), pickled purple cabbage, a mini burger such as an onion-gratin croquette burger, and oyakodon or ramen to finish · creative dishes: liver pâté monaka, fried green pepper with dashi · corn and chicken rice cooked in an iron pot · Basque cheesecake · counter around a central grill, 15 seats',
    website: OWN, gmaps: gm('bird\'s nest'), menu_url: null,
    notes: "[Yakitori · a calm Hinai-chicken course counter above its lively sister, Ura-Namba] Up the stairs from the busy yakitori Bird, a minute from Namba Grand Kagetsu, this quiet white-wood counter surrounds a central grill, open since 2022. Until 20:00 it serves reserved courses (¥5,500–9,680), à la carte after that. Skewers of Hinai chicken come plump and juicy, salted boldly, alongside Kawachi duck with melon, Awaodori chicken neck, a giant red eggplant grilled in front of you, and playful extras like liver pâté monaka and a mini croquette burger. Finish with oyakodon or ramen; the Basque cheesecake is worth saving room for. Good for entertaining. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 August 2022 (Tabelog); upstairs from its sister restaurant Bird (October 2026 reviews).', background: 'Yakitori course restaurant (Tabelog; 2026 reviews).', philosophy: 'Yakitori of selected local chicken (October 2026 review).', specialty: 'Hinai chicken yakitori courses.',
      anecdotes: [
        { text: '"The counter seats surround the chef grilling yakitori in the center, creating a cozy environment… The Hinai chicken thigh was firm and had the perfect grilling and seasoning." — October 2026, omakase course ¥5,500.', source: R + 'B537140235/' },
        { text: '"This dish combines the juicy Kawachi duck, a brand from Osaka, with refreshing melon… Overall, the skewers had a strong saltiness and bold flavors." — October 2026, short course ¥5,500.', source: R + 'B538118426/' },
      ],
      japanese_sources_summary: '食べログ: bird\'s nest、大阪市中央区難波千日前9-17 千日前セントラル第2ビル 2F、なんばグランド花月から徒歩1分、日本橋駅から徒歩4分、毎日17:00〜24:00、カード・電子マネー・QR可、15席、2022年8月20日開店、公式サイトあり。口コミ(2026年9〜10月): 1階は姉妹店の Bird、2階は落ち着いた白木のカウンター、中央の焼き台、20時までは予約のコースのみ、20時以降はアラカルトも、コース5,500円・8,250円・9,680円、Hinai の鶏のもも、むね、砂肝、手羽、ねぎま、つくね、Kawachi の鴨とメロン、Awaodori の首肉、大きな赤なす、ホワイトマッシュルーム、カブのあんの茶碗蒸し、紫キャベツの箸休め、オニオングラタンコロッケのミニバーガー、レバーパテの Monaka、だしの入ったピーマンの揚げ物、締めは親子丼かラーメン、とうもろこしと鶏の釜炊きご飯、バスクチーズケーキ、串は塩気がしっかり、接待にも。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536374129/', R + 'B537088863/', R + 'B537140235/', R + 'B537720772/', R + 'B538007831/', R + 'B538118426/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course pacing handled by staff; calm counter (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前9-17 千日前セントラル第2ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前9番17号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537140235/', R + 'B538118426/', R + 'B537720772/'],
    price_note: 'Course prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yakitori omakase course', '¥5,500', 'Courses', 'no', 'no', 'October 2026.', 'course_5500'),
      it('', '', 'Yakitori course', '¥8,250', 'Courses', 'no', 'no', 'October 2026.', 'course_8250'),
      it('', '', 'Yakitori course', '¥9,680', 'Courses', 'no', 'no', 'October 2026.', 'course_9680'),
      it('', '', 'Corn and chicken iron-pot rice', '', 'Rice', 'ask', 'no', 'October 2026.', 'kama_corn'),
      it('', '', 'Basque cheesecake', '', 'Dessert', 'ask', 'no', 'October 2026.', 'basque'),
    ] }, {
    cuisine: '焼き鳥のコース・コース5,500円・8,250円・9,680円: 一品 (たとえばカブのあんの茶碗蒸し)、Hinai の鶏の串 (もも、むね、砂肝、すだちの手羽、ねぎま、つくね)、Kawachi の鴨とメロン、Awaodori の首肉、焼き野菜 (腕ほどの赤なす、ホワイトマッシュルーム)、紫キャベツの箸休め、オニオングラタンコロッケなどのミニバーガー、締めは親子丼かラーメン・レバーパテの Monaka、だしの入ったピーマンの揚げ物・とうもろこしと鶏の釜炊きご飯・バスクチーズケーキ・中央の焼き台を囲むカウンター15席',
    neighborhood: '中央区難波千日前9-17 千日前セントラル第2ビル 2F。なんばグランド花月から徒歩1分',
    gf_detail: 'グルテンフリーではありません。たれや調味料、ミニバーガーのパンとコロッケ、締めのラーメン。',
    vegan_detail: 'ヴィーガンではありません。鶏と鴨ばかり、レバーパテ、茶碗蒸しと親子丼の卵。',
    notes: '[焼き鳥・裏なんば、にぎやかな姉妹店の上の Hinai の鶏のコースカウンター] なんばグランド花月から1分、にぎわう焼き鳥店 Bird の上の階にある静かな白木のカウンターで、中央の焼き台を囲む、2022年開店。20時までは予約のコース (5,500〜9,680円)、それ以降はアラカルトも。Hinai の鶏の串はふっくらジューシーで塩はしっかり、Kawachi の鴨とメロン、Awaodori の首肉、目の前で焼く大きな赤なす、レバーパテの Monakaやコロッケのミニバーガーなど遊び心のある皿も。締めは親子丼かラーメン、バスクチーズケーキの分も空けておきたい。接待にも。カード、QR可。',
  });
}

// ================================================================ 山桜
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27081347/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '22:00']);
  put({
    id: 'osaka_sushi_yamazakura_ura_namba', name: '山桜 (Yamazakura)', category: 'OMNI',
    lat: 34.664194, lng: 135.503103, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy and marinated tuna; red miso soup; sake.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and shellfish throughout; egg.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 18:00–22:00 (last course order 20:30, food 21:30); closed Wed and Sun, plus dates posted each month (Tabelog). Reservation-only courses (October 2025). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambasennichimae 13-5, a basement counter in Ura-Namba — 2 min from Namba Stn',
    cuisine: 'Sushi omakase course · seasonal tsumami then nigiri, e.g. yuba with salmon roe, lightly grilled sawara, Indian tuna (akami, chutoro, marinated), Nodoguro, Hokkaido hairy crab, kohada, squid, sea urchin, Toyama white shrimp, barracuda, golden-eye snapper, anago, tamago; red miso soup; fruit dessert · rice seasoned with red or white vinegar to suit each topping; small rice portions · kabosu as an accent · over 30 sakes, chosen to taste · 10 counter seats and 6 horigotatsu seats; private rooms for 2–6',
    website: null, gmaps: gm('山桜'), menu_url: null,
    notes: "[Sushi · a relaxed reservation-only sushi course in a Ura-Namba basement] A ten-seat counter plus a few sunken tables below street level near Namba, open since 2014, serving one long omakase course by reservation. Seasonal tsumami (lightly grilled sawara, tuna three ways, hairy crab) lead into generous, fresh nigiri on small rice balls, the rice switched between red and white vinegar to suit each topping, with kabosu as a recurring accent. Over thirty sakes are on hand, and staff pick one to your taste. The atmosphere is neither stiff nor casual, and the chef chats easily. Expect ¥15,000–30,000 with drinks. Reserve; closed Wednesdays and Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2014 (Tabelog)', background: 'Reservation-only sushi course restaurant (Tabelog; 2025–2026 reviews).', philosophy: 'Red or white vinegar rice depending on the topping (January–July 2026 reviews).', specialty: 'Sushi omakase with seasonal tsumami and sake.',
      anecdotes: [
        { text: '"The rice was beautifully crafted, using both red vinegar and regular vinegar… over 30 types of Japanese sake available, and when I shared my preferences, the chef recommended the perfect one." — January 2026.', source: R + 'B521257397/' },
        { text: '"The type of rice varies depending on the toppings, and the sushi showcases a commitment to quality, offering a light yet flavorful experience with well-prepared ingredients." — July 2026.', source: R + 'B532557125/' },
      ],
      japanese_sources_summary: '食べログ: 山桜、大阪市中央区難波千日前13-5、なんば駅から徒歩2分、月・火・木・金・土 18:00〜22:00 (コースのL.O. 20:30、料理21:30)、水・日休み (月ごとの休業日あり)、カード可、電子マネー・QR不可、16席 (カウンター10、掘りごたつ6)、個室あり (2・4・6名)、2014年7月1日開店。口コミ(2025年9月〜2026年9月): 裏なんばの地下、予約制のコース、イクラの Yuba、炙ったサワラ、インドマグロ (赤身、中トロ、漬け)、Nodoguro、北海道の毛ガニ、Kohada、イカ、ウニ、富山の白エビ、カマス、キンメダイ、Anago、玉子、赤だし、果物のデザート、ネタに合わせて赤酢と白酢のシャリ、シャリは小ぶり、Kabosuをよく使う、日本酒は30種以上で好みに合わせて、話しやすい店の人とていねいな接客、1人15,000〜30,000円ほど。',
      confidence: 'medium', sources: [TB, R + 'B491679601/', R + 'B513487835/', R + 'B516573536/', R + 'B521257397/', R + 'B532557125/', R + 'B535175485/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chatty counter; sake chosen to taste (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前13-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current with November 2026 closing dates; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前13番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B491679601/', R + 'B516573536/', R + 'B521257397/'],
    price_note: 'No course price in the reviews; about ¥15,000–30,000 per person with drinks (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Omakase course (tsumami and nigiri)', '', 'Courses', 'no', 'no', 'October 2025–July 2026.', 'omakase'),
      it('', '', 'Japanese sake (30+ kinds)', '', 'Drinks', 'ask', 'ask', 'January 2026.', 'sake'),
    ] }, {
    cuisine: '鮨のおまかせコース・季節のつまみからにぎりへ、たとえばイクラの Yuba、炙ったサワラ、インドマグロ (赤身、中トロ、漬け)、Nodoguro、北海道の毛ガニ、Kohada、イカ、ウニ、富山の白エビ、カマス、キンメダイ、Anago、玉子、赤だし、果物のデザート・ネタに合わせて赤酢か白酢のシャリ、小ぶりのシャリ・Kabosuがアクセント・日本酒は30種以上、好みに合わせて・カウンター10席と掘りごたつ6席、2〜6名の個室',
    neighborhood: '中央区難波千日前13-5、裏なんばの地下のカウンター。なんば駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。醤油と漬けのマグロ、赤だし、日本酒。',
    vegan_detail: 'ヴィーガンではありません。魚介ばかり、卵。',
    notes: '[寿司・裏なんば、地下で味わう気取らない予約制の鮨コース] なんば近くの地下にあるカウンター10席と掘りごたつ席の店で、2014年開店、予約制のおまかせコース。季節のつまみ (炙ったサワラ、3通りのマグロ、毛ガニ) から、小ぶりのシャリにたっぷりで新鮮なにぎりへ、シャリはネタに合わせて赤酢と白酢を使い分け、Kabosuがたびたびアクセントに。日本酒は30種以上、好みを伝えれば選んでくれる。堅すぎずくだけすぎない雰囲気で、話しやすい。飲み物込みで15,000〜30,000円ほど。予約を。水・日曜休み。',
  });
}

// ================================================================ くいしんぼ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27032748/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '14:00'], ['17:00', '22:00']); const WE = day(['12:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_kuishinbo_minamihorie', name: 'くいしんぼ (Kuishinbo)', category: 'OMNI',
    lat: 34.672322, lng: 135.497052, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat batter; yakisoba noodles; sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, squid, shrimp, octopus and horumon; egg.',
    hours_raw: 'Mon–Fri 12:00–14:00 (last order 13:30) and 17:00–22:00 (last order 21:00); Sat, Sun and public holidays 12:00–15:00 (last order 14:30) and 17:00–21:00 (last order 20:00); closing days not fixed, see Instagram; no reservations on weekends and holidays (Tabelog). 10% service charge (Tabelog). Cash only (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-1-20 (Nishi-ku), by Amemura — 1 min from Yotsubashi Stn',
    cuisine: 'Okonomiyaki · pork okonomiyaki ¥900: very fluffy batter · seafood okonomiyaki · modern-yaki with pork · Kuishinbo yakisoba ¥1,500: pork, squid, shrimp and octopus · omelette yakisoba with squid and pork, chewy noodles · horumon and Negiyaki · takoyaki grilled at the entrance, to go or to eat in · lunch: rice or oolong tea +¥100 · oolong tea ¥250, highballs, bottled beer · about 10 seats at the teppan counter and one table',
    website: null, gmaps: gm('くいしんぼ'), menu_url: null,
    notes: "[Okonomiyaki · fluffy okonomiyaki at a teppan counter by Amemura] A small, old-school okonomiyaki counter a minute from Yotsubashi, where everything is cooked on the teppan in front of you and baseball plays on the TV, so it's easy to come alone. The okonomiyaki (pork, ¥900) has an unusually fluffy, creamy batter; the Kuishinbo yakisoba (¥1,500) is loaded with pork, squid, shrimp and octopus, and the omelette yakisoba has chewy noodles. Horumon and Negiyaki are on the menu too, and takoyaki is grilled at the entrance to take away. At lunch, add rice or oolong tea for ¥100. Arrive at opening at busy times. Cash only, with a 10% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Okonomiyaki restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Fluffy okonomiyaki; yakisoba.',
      anecdotes: [
        { text: '"The batter was incredibly fluffy, offering a truly unique texture! The yakisoba had a nostalgic, comforting taste… and the \'Kuishinbo\' version is packed with ingredients…" — June 2026, pork okonomiyaki ¥900 and Kuishinbo yakisoba ¥1,500.', source: R + 'B530772267/' },
        { text: '"The restaurant has a bit of a vintage feel, with a counter where you can watch Koshien and Hanshin games on TV. It\'s a great atmosphere for enjoying okonomiyaki even if you\'re alone!" — August 2026.', source: R + 'B533768833/' },
      ],
      japanese_sources_summary: '食べログ: くいしんぼ、大阪市西区南堀江1-1-20、四つ橋駅から徒歩1分、心斎橋駅から徒歩8分、月〜金 12:00〜14:00 (L.O. 13:30)・17:00〜22:00 (L.O. 21:00)、土日祝 12:00〜15:00 (L.O. 14:30)・17:00〜21:00 (L.O. 20:00)、定休日不定 (Instagram で確認)、土日祝は予約不可、サービス料10%、カード・電子マネー・QR不可。口コミ(2026年6〜10月): アメ村近く、ふわふわでクリーミーな生地のお好み焼き (豚玉900円)、Kuishinbo yakisoba 1,500円 (豚、イカ、エビ、タコ)、海鮮のお好み焼き、豚のモダン焼き、イカと豚のオムレツの焼きそば (もちもちの麺)、ホルモン、Negiyaki、入口で焼くたこ焼きは持ち帰りも、昼はご飯かウーロン茶が+100円、ウーロン茶250円、ハイボール、瓶ビール、鉄板の前のカウンター10席ほどとテーブル1卓、甲子園や阪神の試合が流れるテレビ、一人でも入りやすい、開店前に並ぶ、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B530772267/', R + 'B533768833/', R + 'B534108375/', R + 'B535408138/', R + 'B535686259/', R + 'B537264741/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating, easy solo; cooked in front of you (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-1-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.672385, 135.497052); same address as Wakamizu (osaka_wakamizu_minamihorie), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市西区南堀江一丁目1番20号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530772267/', R + 'B535686259/', R + 'B537264741/'],
    price_note: 'Prices from June–October 2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Pork okonomiyaki', '¥900', 'Okonomiyaki', 'no', 'no', 'June 2026.', 'butatama'),
      it('', '', 'Seafood okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'seafood'),
      it('', '', 'Modern-yaki with pork', '', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'modern'),
      it('', '', 'Kuishinbo yakisoba (pork, squid, shrimp, octopus)', '¥1,500', 'Yakisoba', 'no', 'no', 'June 2026.', 'kuishinbo_yakisoba'),
      it('', '', 'Omelette yakisoba', '', 'Yakisoba', 'no', 'no', 'September–October 2026.', 'omu'),
      it('', '', 'Takoyaki (to go or eat in)', '', 'Takoyaki', 'no', 'no', 'August 2026.', 'takoyaki'),
      it('', '', 'Oolong tea', '¥250', 'Drinks', 'ask', 'ask', 'October 2026.', 'oolong'),
    ] }, {
    cuisine: 'お好み焼き・豚玉900円: とてもふわふわの生地・海鮮のお好み焼き・豚のモダン焼き・Kuishinbo yakisoba 1,500円: 豚、イカ、エビ、タコ・イカと豚のオムレツの焼きそば、もちもちの麺・ホルモン、Negiyaki・入口で焼くたこ焼き、持ち帰りも店内も・昼はご飯かウーロン茶が+100円・ウーロン茶250円、ハイボール、瓶ビール・鉄板のカウンター約10席とテーブル1卓',
    neighborhood: '西区南堀江1-1-20、アメ村そば。四つ橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の生地、焼きそばの麺、ソース。',
    vegan_detail: 'ヴィーガンではありません。豚、イカ、エビ、タコ、ホルモン、卵。',
    notes: '[お好み焼き・アメ村近く、鉄板カウンターのふわふわお好み焼き] 四つ橋駅から1分の小さな昔ながらのお好み焼きのカウンターで、どれも目の前の鉄板で焼き、テレビには野球が流れ、一人でも入りやすい。お好み焼き (豚玉900円) は珍しいほどふわふわでクリーミーな生地。Kuishinbo yakisoba (1,500円) は豚、イカ、エビ、タコがたっぷり、オムレツの焼きそばは麺がもちもち。ホルモンや Negiyaki も、入口で焼くたこ焼きは持ち帰りも。昼はご飯かウーロン茶を100円で追加。混む時間は開店時に。現金のみ、サービス料10%。',
  });
}

// ================================================================ おでん すみ吉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113216/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://oden-sumiyoshi.hp.peraichi.com';
  const WD = day(['12:00', '15:00'], ['17:00', '22:30']); const WE = day(['12:00', '22:30']);
  put({
    id: 'osaka_oden_sumiyoshi_nishishinsaibashi', name: 'おでん すみ吉 (Oden Sumiyoshi)', category: 'OMNI',
    lat: 34.673899, lng: 135.49971, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based oden broths; fish cakes; tempura; white miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths; octopus, whale, wagyu and pork belly; egg.',
    hours_raw: 'Mon, Tue, Thu, Fri and days around public holidays 12:00–15:00 (last order food 14:00, drinks 14:30) and 17:00–22:30 (last order 22:00); Sat, Sun and public holidays 12:00–22:30 (last order 22:00); closed Wed (Tabelog). 10% service charge at dinner, none at lunch (Tabelog). Cards, IC cards, e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-3-3, Hotel Nikko Osaka building B2F — by Shinsaibashi Stn',
    cuisine: 'Refined Osaka oden · three broths matched to the ingredients · creative oden: potato ball (vegetables wrapped in egg), jaga-butter, black wagyu oden shabu-shabu with grated daikon, the house daikon in white miso broth with pork belly · classic oden: octopus, thick fried tofu, konnyaku, pickled ginger tempura, whale koro, egg, dashimaki tamago · seasonal appetizers and sashimi · seasonal tempura with oden broth · clay-pot rice to finish · homemade Yukimi Daifuku · lunch: seasonal tempura gozen ¥2,480 with omakase oden, small dishes, clay-pot rice and miso soup · Tosa sakes, homemade ginger ale · counter, tables and private rooms, 17 seats',
    website: OWN, gmaps: gm('おでん すみ吉'), menu_url: null,
    notes: "[Oden · refined Osaka oden with three broths in the Hotel Nikko basement] A calm, polished oden restaurant two floors below the Hotel Nikko building in Shinsaibashi, open since 2019 and, per one diner, carrying on the style of the late oden house Takokichi. Three different broths are matched to the ingredients. Beyond the classics (tender octopus, thick fried tofu, whale), try the creative pieces: a potato ball wrapped in egg, jaga-butter, wagyu cooked shabu-shabu style in the broth, and the house daikon in white miso with pork belly. Finish with clay-pot rice. Lunch is the bargain: a seasonal tempura set with oden for ¥2,480. Portions are delicate. 10% service charge at dinner. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 September 2019 (Tabelog); carries on the oden of Takokichi, which closed in 2019 (July 2026 review).', background: 'Osaka oden restaurant (Tabelog; 2025–2026 reviews).', philosophy: 'Three broths used according to the ingredient (July 2026 review).', specialty: 'Kansai oden; creative oden.',
      anecdotes: [
        { text: '"With a traditional technique of using three different broths tailored to the ingredients… First up was the \'Special Creative Oden - Potato Ball\'… Seasonal vegetables like potatoes, onions, carrots, and shiitake mushrooms are expertly wrapped in egg…" — July 2026.', source: R + 'B531854745/' },
        { text: '"The thick fried tofu soaked in the Kansai-style broth was simply delightful… The seasoned rice was so delicious that I wanted a second helping!" — January 2026, seasonal tempura gozen ¥2,480.', source: R + 'B528337288/' },
      ],
      japanese_sources_summary: '食べログ: おでん すみ吉、大阪市中央区西心斎橋1-3-3 オー・エム・ホテル日航ビル B2F、心斎橋から148m、月・火・木・金・祝前後 12:00〜15:00・17:00〜22:30、土日祝 12:00〜22:30、水休み、サービス料10% (昼はなし)、カード・電子マネー・QR可、17席、2019年9月15日開店、公式サイトあり。口コミ(2025年12月〜2026年8月): 2019年に閉店した Takokichi の流れをくむという声、具材に合わせた3種のだし、特製創作おでんのポテトボール、じゃがいものバター、黒毛和牛のしゃぶしゃぶ風おでん、特製創作おでん～秘伝の大根～ (白味噌のだしと豚バラ)、タコ、厚揚げ、こんにゃく、紅しょうがの天ぷら、くじらのコロ、卵、だし巻き、季節の前菜と刺身、季節の天ぷら、締めの土鍋ご飯、自家製の Yukimi Daifuku、昼の季節の天ぷらのセット (Gozen) 2,480円、Tosa の日本酒、自家製ジンジャーエール、個室、量は控えめという声、ていねいな接客。',
      confidence: 'medium', sources: [TB, OWN, R + 'B519830908/', R + 'B528337288/', R + 'B531528983/', R + 'B531854745/', R + 'B533636747/', R + 'B535580663/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Attentive service; private rooms (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-3-3 オー・エム・ホテル日航ビル B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM すみ吉 node/13446650218 24m; GSI 大阪府大阪市中央区西心斎橋一丁目3番3号 (go) 38m (large building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528337288/', R + 'B531854745/', R + 'B533636747/'],
    price_note: 'Lunch from January 2026; dinner about JPY 8,000–14,999 (Tabelog; 2026 reviews); 10% service charge at dinner.', last_checked: TODAY, items: [
      it('', '', 'Seasonal tempura gozen with oden (lunch)', '¥2,480', 'Lunch', 'no', 'no', 'January 2026.', 'tempura_gozen'),
      it('', '', 'Creative oden: potato ball', '', 'Oden', 'no', 'no', 'July 2026.', 'potato_ball'),
      it('特製創作おでん～秘伝の大根～', '', 'House daikon in white miso broth with pork belly', '', 'Oden', 'no', 'no', 'July 2026 photo caption.', 'daikon'),
      it('', '', 'Black wagyu oden, shabu-shabu style', '', 'Oden', 'no', 'no', 'July 2026.', 'wagyu'),
      it('くじらのコロ', '', 'Whale koro', '', 'Oden', 'no', 'no', 'July 2026 photo caption.', 'koro'),
      it('', '', 'Clay-pot rice', '', 'Rice', 'ask', 'no', 'July 2026.', 'donabe'),
      it('', '', 'Homemade ginger ale', '', 'Drinks', 'ask', 'ask', 'July 2026.', 'ginger_ale'),
    ] }, {
    cuisine: '上品な大阪のおでん・具材に合わせた3種のだし・創作おでん: 卵で包んだポテトボール、じゃがいものバター、大根おろしの黒毛和牛のしゃぶしゃぶ風おでん、白味噌のだしに豚バラの特製大根・定番: タコ、厚揚げ、こんにゃく、紅しょうがの天ぷら、くじらのコロ、卵、だし巻き・季節の前菜と刺身・おでんのだしで食べる季節の天ぷら・締めの土鍋ご飯・自家製の Yukimi Daifuku・昼: 季節の天ぷらのセット (Gozen) 2,480円 (おまかせおでん、小鉢、土鍋ご飯、味噌汁)・Tosa の日本酒、自家製ジンジャーエール・カウンター、テーブル、個室、17席',
    neighborhood: '中央区西心斎橋1-3-3 オー・エム・ホテル日航ビル B2F。心斎橋駅すぐ',
    gf_detail: 'グルテンフリーではありません。醤油ベースのおでんのだし、練り物、天ぷら、白味噌。',
    vegan_detail: 'ヴィーガンではありません。だし、タコ、くじら、和牛、豚バラ、卵。',
    notes: '[おでん・ホテル日航の地下、3種のだしの上品な大阪おでん] 心斎橋のホテル日航ビルの地下2階にある落ち着いた上品なおでんの店で、2019年開店、閉店した Takokichi の流れをくむという声も。だしは具材に合わせて3種。定番 (柔らかなタコ、厚揚げ、くじら) のほか、創作おでんを: 卵で包んだポテトボール、じゃがいものバター、だしでしゃぶしゃぶにする和牛、白味噌に豚バラの特製大根。締めは土鍋ご飯。お得なのは昼で、おでん付きの季節の天ぷらのセット (Gozen) が2,480円。量は控えめ。夜はサービス料10%。水曜休み。',
  });
}

save();
