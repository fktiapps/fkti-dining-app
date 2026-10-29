// Osaka sweep (2-mile circle around Dotonbori), batch 157 — mom / small-shop phase (all OMNI).
//   + 魚屋 UOTACHI (fishmonger with an eat-in counter: seafood bowls and sushi sets at lunch; Shinmachi; offset vs ME-CHA-KU-CHA next door)
//   + 焼き鳥 熾火 (aged Banshu Akadori yakitori at night, chicken paitan ramen at lunch; Senba Center Bldg)
//   + 天ぷら･うどん･とんかつ かえで (udon and tempura set meals with small side dishes, opened 2026; Shinmachi)
//   + SAVATOMY (creative Chinese bar: seared bonito in red sauce, small sharing plates; Azuchimachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 157);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 魚屋 UOTACHI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27123061/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '15:00'], ['16:30', '20:00']); const B = day(['11:30', '15:00'], ['16:30', '21:30']);
  put({
    id: 'osaka_sakanaya_uotachi_shinmachi', name: '魚屋 UOTACHI (Sakanaya UOTACHI)', category: 'OMNI',
    lat: 34.677768, lng: 135.489575, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy sauce with the sashimi and bowls; miso soup; side dishes vary — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fishmonger\'s seafood menu; fish soup.',
    hours_raw: 'Mon, Tue, Thu and public holidays 11:30–15:00 (last order 14:00) and 16:30–20:00 (last order 19:15); Fri–Sun 11:30–15:00 and 16:30–21:30 (last order 20:30); closed Wed and the 1st and 3rd Tue; may close early if empty after last order (Tabelog). Cards, e-money and QR accepted (Tabelog). Bento to take away; fish and side dishes for sale (2025–2026).',
    hours: { 0: A, 1: A, 3: A, 4: B, 5: B, 6: B }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 3-9-7, Tsukaguchi Bldg 1F, a fish shop with a counter at the back — 5 min from Nishi-Nagahori or Awaza Stn',
    cuisine: 'Fishmonger\'s eat-in · lunch sets with two side dishes, fish soup and dessert: daily sashimi rice bowl or Hokkaido bowl (salmon, ikura, scallop, crab) ¥1,400; seafood bowl (¥1,200 in 2024, large rice +¥200); sushi set of 8 pieces on red-vinegar rice (¥1,300 in 2024, e.g. bluefin tuna, salmon, hobou, sea bass); sashimi set meal; UOTACHI Taiyori Don · evenings: sashimi and a wide fish menu · bento, fresh fish and side dishes to take away · 15 seats: 9 at the counter',
    website: null, gmaps: gm('魚屋 UOTACHI'), menu_url: null,
    notes: "[Seafood · a fishmonger's lunch counter, Shinmachi] A fish shop in western Shinmachi with a surprisingly roomy counter at the back, where lunch is a good-value seafood meal. The daily sashimi bowl comes heaped with tuna on red-vinegar rice, and the Hokkaido bowl piles salmon, ikura, scallops and crab, each with two side dishes, a rich fish soup and dessert for about ¥1,400. There's an eight-piece sushi set too. Evenings bring a long list of fish dishes and good sashimi. Buy fish, side dishes or a bento on the way out. Closed Wednesdays and the 1st and 3rd Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Fish shop with an eat-in counter (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Seafood bowls; sashimi.',
      anecdotes: [
        { text: '"On this day, I had the daily special sashimi rice bowl, and it was incredibly delicious with plenty of tuna!… For just JPY 1400, we received a rice bowl with two side dishes, soup, and dessert…" — August 2026.', source: R + 'B496180931/' },
        { text: '"The miso soup also had fish in it, and it was very delicious." — July 2026, seafood rice bowl lunch.', source: R + 'B531837506/' },
      ],
      japanese_sources_summary: '食べログ: 魚屋 UOTACHI、大阪市西区新町3-9-7 塚口ビル 1F、西長堀駅・阿波座駅から徒歩5分、月・火・木・祝 11:30〜15:00 (L.O. 14:00)・16:30〜20:00 (L.O. 19:15)、金〜日 11:30〜15:00・16:30〜21:30 (L.O. 20:30)、水曜と第1・3火曜休み、ラストオーダー後に客がいなければ早く閉める、カード・電子マネー・QR可、15席 (カウンター9、テーブル6)。口コミ(2024年11月〜2026年8月): 魚屋の奥のカウンター、昼は小鉢2品・魚の汁・デザートつき、日替わりの刺身丼や北海道丼 (サーモン、ikura、ホタテ、カニ) 1,400円、海鮮丼 (2024年は1,200円、ご飯大盛り+200円)、赤酢のシャリのにぎり8貫 (2024年は1,300円、本マグロ、サーモン、hobou、スズキなど)、刺身定食、UOTACHI Taiyori Don、夜は魚の料理が豊富、弁当・鮮魚・惣菜の持ち帰り。',
      confidence: 'medium', sources: [TB, R + 'B496180931/', R + 'B527914903/', R + 'B528891104/', R + 'B530279928/', R + 'B530890427/', R + 'B531837506/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches; counter at the back of the shop (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町3-9-7 塚口ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB} (34.677705, 135.489575); 9 m from Noodleya ME-CHA-KU-CHA next door (osaka_noodleya_mechakucha_shinmachi), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市西区新町三丁目9番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B496180931/'],
    price_note: 'Price from an August 2026 review; older prices from 2024 noted in cuisine.', last_checked: TODAY, items: [
      it('', '', 'Daily sashimi rice bowl lunch set', '¥1,400', 'Lunch', 'ask', 'no', 'August 2026.', 'sashimi_don'),
      it('', '', 'Hokkaido bowl lunch set', '¥1,400', 'Lunch', 'ask', 'no', 'August 2026.', 'hokkaido'),
      it('', '', 'Sushi set, 8 pieces', '', 'Lunch', 'ask', 'no', '¥1,300 in December 2024.', 'sushi'),
      it('', '', 'Sashimi set meal', '', 'Lunch', 'ask', 'no', 'May 2026.', 'sashimi'),
    ] }, {
    cuisine: '魚屋のイートイン・昼のセットは小鉢2品、魚の汁、デザートつき: 日替わりの刺身丼か北海道丼 (サーモン、ikura、ホタテ、カニ) 1,400円、海鮮丼 (2024年は1,200円、ご飯大盛り+200円)、赤酢のシャリのにぎり8貫 (2024年は1,300円、本マグロ、サーモン、hobou、スズキなど)、刺身定食、UOTACHI Taiyori Don・夜は刺身と豊富な魚の料理・弁当、鮮魚、惣菜の持ち帰り・15席: カウンター9席',
    neighborhood: '西区新町3-9-7 塚口ビル 1F、魚屋の奥のカウンター。西長堀・阿波座駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。刺身や丼に醤油、味噌汁、小鉢は日によって変わるので確認を。',
    vegan_detail: 'ヴィーガンではありません。魚屋の魚介のメニュー、魚の汁。',
    notes: '[魚・新町、魚屋の昼のカウンター] 新町の西寄り、魚屋の奥に意外と広いカウンターがあり、昼はお得な海鮮の食事。日替わりの刺身丼は赤酢のシャリにマグロがたっぷり、北海道丼はサーモン、ikura、ホタテ、カニが山盛りで、どちらも小鉢2品、濃い魚の汁、デザートつきで約1,400円。にぎり8貫のセットも。夜は魚の料理が豊富で刺身がおいしい。帰りに魚や惣菜、弁当も買える。水曜と第1・3火曜休み。',
  });
}

// ================================================================ 焼き鳥 熾火
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27153747/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '22:30']);
  put({
    id: 'osaka_yakitori_okibi_senba', name: '焼き鳥 熾火 (Yakitori Okibi)', category: 'OMNI',
    lat: 34.681933, lng: 135.499792, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare on skewers; wheat noodles at lunch; soy-based side dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout; chicken-broth ramen.',
    hours_raw: 'Mon–Sat and public holidays 11:30–22:30 (last order 22:00), with lunch 11:30–15:00; closed Sun (Tabelog). Lunch is ramen (October 2026). Cards, e-money and QR accepted (Tabelog). Smoking area outside (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Senba Chuo 4-1-10, Senba Center Bldg No. 10 B1F — 92 m from Honmachi Stn',
    cuisine: 'Yakitori of Banshu Akadori chicken aged five days · skewers such as breast and negima ¥300 each, with tare or salt; tsukune · aged thigh tataki ¥780; thigh-and-breast tataki tasting · crab miso and cream cheese with shredded crab and ikura · chicken liver simmered with sansho · mapo tofu; shrimp marinated in Shaoxing wine · oyakodon to finish · lunch is ramen: chicken paitan; chicken paitan chashu ramen ¥1,450 with pork and chicken rare chashu and egg; black-sesame chicken-broth dan dan noodles; noodles made for the shop by Sugano Seimenjo · 15 counter seats',
    website: null, gmaps: gm('焼き鳥 熾火'), menu_url: null,
    notes: "[Yakitori · aged-chicken yakitori by night, chicken ramen by day, Senba] A quiet, hidden-feeling yakitori counter in the basement of the Senba Center Building, a minute from Honmachi Station. At night it grills Banshu Akadori aged for five days, one skewer at a time: start with the thigh-and-breast tataki to taste the difference, then negima, breast and well-seasoned tsukune, with side dishes like crab miso and cream cheese, liver simmered with sansho, and an oyakodon to close. At lunch the kitchen turns its chicken broth into ramen: a creamy chicken paitan with pork and chicken chashu (¥1,450) or a black-sesame dan dan noodle. Friendly, attentive staff. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Yakitori restaurant with lunch ramen (Tabelog; 2026 reviews).', philosophy: 'Aged Banshu Akadori, grilled a skewer at a time (October 2026 review).', specialty: 'Aged-chicken yakitori; chicken paitan ramen.',
      anecdotes: [
        { text: '"The highlight here is the yakitori made from Banshu Akadori, aged for 5 days. You can savor the rich flavor of the chicken, carefully grilled one skewer at a time." — October 2026.', source: R + 'B537469669/' },
        { text: '"The soup, based on the chicken broth unique to a yakitori restaurant, is delicious with the rich aroma and depth of black sesame." — October 2026, Chicken Broth Black Sesame Dan Dan Noodles.', source: R + 'B537554384/' },
      ],
      japanese_sources_summary: '食べログ: 焼き鳥 熾火、大阪市中央区船場中央4-1-10 船場センタービル10号館 B1F、本町駅から92m、月〜土・祝 11:30〜22:30 (L.O. 22:00、昼は11:30〜15:00)、日曜休み、カード・電子マネー・QR可、店の前に喫煙所、カウンター15席。口コミ(2026年9〜10月): 5日間熟成の Banshu Akadori の焼き鳥、むねと negima 各300円 (たれか塩)、tsukune、熟成もものたたき780円、ももとむねのたたきの食べ比べ、カニ味噌とクリームチーズに ほぐしたカニと ikura、鶏レバーの sansho 煮、mapo tofu、海老の紹興酒漬け、締めの oyakodon、昼はラーメン (鶏白湯、豚と鶏のレアチャーシューと味玉の鶏白湯チャーシュー麺1,450円、鶏だしの黒ごま担々麺、麺は Sugano Seimenjo の特注)、気さくでていねいな店の人。',
      confidence: 'medium', sources: [TB, R + 'B536619435/', R + 'B536812008/', R + 'B537469669/', R + 'B537554384/', R + 'B538119039/', R + 'B538237549/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; attentive staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区船場中央4-1-10 船場センタービル10号館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区船場中央四丁目1番10号 (go) 23m — Tabelog point kept (long Senba Center building, basement shop); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537469669/', R + 'B538237549/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aged Akadori breast or negima skewer', '¥300', 'Skewers', 'ask', 'no', 'October 2026; tare or salt.', 'skewer'),
      it('', '', 'Banshu aged Akadori thigh tataki', '¥780', 'Chicken', 'ask', 'no', 'October 2026.', 'tataki'),
      it('', '', 'Chicken paitan chashu ramen (lunch)', '¥1,450', 'Lunch ramen', 'no', 'no', 'October 2026.', 'paitan'),
      it('', '', 'Black-sesame chicken-broth dan dan noodles (lunch)', '', 'Lunch ramen', 'no', 'no', 'October 2026.', 'tantan'),
      it('', '', 'Oyakodon', '', 'Rice', 'no', 'no', 'October 2026.', 'oyakodon'),
    ] }, {
    cuisine: '5日間熟成の Banshu Akadori の焼き鳥・むねや negima などの串は各300円、たれか塩、tsukune・熟成もものたたき780円、もも・むねのたたきの食べ比べ・ほぐしたカニと ikura をのせたカニ味噌のクリームチーズ・鶏レバーの sansho 煮・mapo tofu、海老の紹興酒漬け・締めは oyakodon・昼はラーメン: 鶏白湯、豚と鶏のレアチャーシューと味玉の鶏白湯チャーシュー麺1,450円、鶏だしの黒ごま担々麺、麺は Sugano Seimenjo の特注・カウンター15席',
    neighborhood: '中央区船場中央4-1-10 船場センタービル10号館 B1F。本町駅から92m',
    gf_detail: 'グルテンフリーではありません。串のたれ、昼の小麦の麺、醤油の一品料理。',
    vegan_detail: 'ヴィーガンではありません。鶏ばかり、鶏だしのラーメン。',
    notes: '[焼き鳥・船場、夜は熟成鶏の焼き鳥、昼は鶏のラーメン] 本町駅から1分、船場センタービルの地下にある隠れ家のような静かな焼き鳥のカウンター。夜は5日間熟成させた Banshu Akadori を一本ずつ焼く: まずもも・むねのたたきの食べ比べで違いを味わい、negima、むね、味のいい tsukune へ。カニ味噌とクリームチーズ、レバーの sansho 煮などの一品、締めは oyakodon。昼は鶏のスープをラーメンにして、豚と鶏のチャーシューののったクリーミーな鶏白湯 (1,450円) か黒ごまの担々麺。気さくでていねいな店の人。日曜休み。',
  });
}

// ================================================================ 天ぷら･うどん･とんかつ かえで
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27156663/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:00', '15:00']); const LD = day(['11:00', '22:00']);
  put({
    id: 'osaka_kaede_udon_tempura_shinmachi', name: '天ぷら･うどん･とんかつ かえで (Tempura ・ Udon ・ Tonkatsu Kaede)', category: 'OMNI',
    lat: 34.677723, lng: 135.49152, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon; tempura batter; soy-based broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth; meat, shrimp and fish tempura.',
    hours_raw: 'Mon–Thu 11:00–15:00; Fri–Sat 11:00–22:00 (last order 21:00); closed Sun (Tabelog). Opened 18 August 2026 (October 2026 review). No cards; PayPay accepted (Tabelog). Heated tobacco only inside (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-16-2, Sakata Bldg 1F — 5 min from Nishi-Ohashi Stn',
    cuisine: 'Udon and tempura · Kaede Irodori Mamezara Gozen ¥1,500 (with kake or zaru udon) to ¥1,800 (e.g. curry udon): one of seven udon (kake, zaru, kamatama, meat, sudachi, curry, kamaage), three tempura of your choice at two pieces each (e.g. shrimp, squid, chikuwa, chicken, corn, kakiage, aji fry), small daily side dishes, chilled tofu, pickles · à la carte udon and cheap tempura (e.g. squid tentacle, maitake) and rice balls · beer · 19 seats incl. semi-private seating for 2–4',
    website: null, gmaps: gm('天ぷら･うどん･とんかつ かえで'), menu_url: null,
    notes: "[Udon · udon-and-tempura set meals, Shinmachi] A clean, modern Japanese udon shop in Shinmachi that opened in August 2026 and fills with office workers at lunch. Order the Irodori Mamezara Gozen: pick one of seven udon, from sudachi to a meaty curry udon, and three tempura made to order, two pieces each, with plump shrimp, sweet corn and a big aji fry among the choices, plus a tray of small side dishes, chilled tofu and pickles, from ¥1,500. Or keep it cheap with zaru udon, à la carte tempura and rice balls. Evening hours Friday and Saturday only. One diner was squeezed onto a small table. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 August 2026 (October 2026 review).', background: 'Udon and tempura restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Udon and tempura set meals.',
      anecdotes: [
        { text: '"You can choose from an impressive 7 types of udon (Kamatama, Meat, Sudachi, Curry, etc.)!… The freshly fried, crispy shrimp tempura, squid tempura, and kakiage were all hearty portions." — October 2026, set meal.', source: R + 'B537025025/' },
        { text: '"It comes with three side dishes, chilled tofu, pickles, and a choice of three tempura for JPY 1800. By the way, if you choose kake udon or zaru udon, you can enjoy all of this for just JPY 1500…" — October 2026.', source: R + 'B537751180/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら･うどん･とんかつ かえで、大阪市西区新町2-16-2 阪田ビル 1F、西大橋駅から徒歩5分、月〜木 11:00〜15:00、金・土 11:00〜22:00 (L.O. 21:00)、日曜休み、カード・電子マネー不可、PayPay 可、加熱式たばこのみ店内可、19席 (カウンター4、テーブル11、半個室4)。口コミ(2026年8〜10月): 2026年8月18日開店、清潔な和モダンの店、昼は会社員でにぎわう、Kaede Irodori Mamezara Gozen は1,500円 (かけ・ざる) 〜1,800円 (カレーうどんなど)、うどんは7種 (kake、zaru、kamatama、肉、sudachi、カレー、kamaage) から、天ぷらは3種を2つずつ (海老、イカ、chikuwa、鶏、コーン、kakiage、aji fry など)、日替わりの小鉢、冷奴、漬物、アラカルトのうどん、安い天ぷら (ゲソ、maitake)、おにぎり、ビール、小さなテーブルに詰めて座らされたという声。',
      confidence: 'medium', sources: [TB, R + 'B536692497/', R + 'B537025025/', R + 'B537394587/', R + 'B537690448/', R + 'B537751180/', R + 'B538051979/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick udon and tempura for the set (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町2-16-2 阪田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目16番2号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537751180/', R + 'B538051979/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Irodori Mamezara Gozen with kake or zaru udon', '¥1,500', 'Sets', 'no', 'no', 'October 2026.', 'gozen'),
      it('', '', 'Irodori Mamezara Gozen with curry udon', '¥1,800', 'Sets', 'no', 'no', 'October 2026.', 'gozen_curry'),
      it('', '', 'Meat udon', '', 'Udon', 'no', 'no', 'October 2026.', 'niku'),
      it('', '', 'Zaru udon', '', 'Udon', 'no', 'no', 'October 2026.', 'zaru'),
    ] }, {
    cuisine: 'うどんと天ぷら・Kaede Irodori Mamezara Gozen は1,500円 (kake か zaru) 〜1,800円 (カレーうどんなど): 7種のうどん (kake、zaru、kamatama、肉、sudachi、カレー、kamaage) からひとつ、好きな天ぷら3種を2つずつ (海老、イカ、chikuwa、鶏、コーン、kakiage、aji fry など)、日替わりの小鉢、冷奴、漬物・アラカルトのうどん、手ごろな天ぷら (ゲソ、maitake など)、おにぎり・ビール・半個室を含め19席',
    neighborhood: '西区新町2-16-2 阪田ビル 1F。西大橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦のうどん、天ぷらの衣、醤油のつゆ。',
    vegan_detail: 'ヴィーガンではありません。だしのつゆ、肉・海老・魚の天ぷら。',
    notes: '[うどん・新町、うどんと天ぷらの御膳] 新町の清潔な和モダンのうどん店で、2026年8月の開店、昼は会社員でにぎわう。頼むなら Irodori Mamezara Gozen: sudachi から肉たっぷりのカレーうどんまで7種のうどんからひとつ、揚げたての天ぷら3種を2つずつ (ぷりぷりの海老、甘いコーン、大きな aji fry など)、小鉢がいくつも並ぶお盆に冷奴と漬物つきで1,500円から。安くすませるなら zaru のうどんにアラカルトの天ぷらとおにぎり。夜は金・土曜のみ。小さなテーブルに詰めて座らされたという声も。日曜休み。',
  });
}

// ================================================================ SAVATOMY
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27134740/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_savatomy_azuchimachi', name: 'SAVATOMY', category: 'OMNI',
    lat: 34.684445, lng: 135.508601, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: spring rolls and dim sum; soy-based sauces; dan dan noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito, chicken, shrimp and oyster dishes.',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 17:00–22:30 (last order 22:00); Sat 17:00–22:30; closed Sun (Tabelog). Reservations recommended in the evening; walk-ins may get a time limit (October 2026). Cards and QR accepted (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: day(['17:00', '22:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Azuchimachi 1-4-11 — 3 min from Sakaisuji-Honmachi Stn exit 12',
    cuisine: 'Creative Chinese bar, small sharing plates · signature seared bonito in a smoky, spicy red sauce · drool chicken; chicken thigh · anago · corn spring rolls; seasonal oyster spring rolls · shrimp chili · dim sum · seasonal menu changes · lunch: weekly lunch, mapo tofu lunch, dan dan noodle lunch; a fuller lunch for ¥1,000 more (about ¥2,000) · 18-year Shaoxing wine, straight or with soda; Italian beer · 20 seats',
    website: null, gmaps: gm('SAVATOMY'), menu_url: null,
    notes: "[Chinese · a creative Chinese bar of small plates, Azuchimachi] A stylish, busy Chinese bar near Sakaisuji-Honmachi where colorful small plates are sized for two to share. The must-order is the seared bonito in the house red sauce, smoky and gently spicy; add the moist drool chicken, fluffy anago, dim sum and, in season, oyster spring rolls, with an 18-year Shaoxing wine, straight or with soda. Seasoning is balanced enough for friends who avoid heat. Lunch is a bargain, with dan dan noodles, mapo tofu or a fuller set for about ¥2,000; one weekday it was full soon after 11:30. Reserve for dinner. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Creative Chinese restaurant and bar (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Seared bonito with red sauce; small Chinese plates.',
      anecdotes: [
        { text: '"The first bite of the seared bonito was shocking. It was unlike any seared bonito I had ever tasted before. The smoky aroma and slightly spicy flavor were incredible." — October 2026, lunch.', source: R + 'B537800844/' },
        { text: '"Each dish was perfectly portioned for sharing between two people, allowing us to enjoy a variety of menu items in small bites." — October 2026.', source: R + 'B537667860/' },
      ],
      japanese_sources_summary: '食べログ: SAVATOMY、大阪市中央区安土町1-4-11、堺筋本町駅12番出口から徒歩3分、月〜金 11:30〜14:00 (L.O. 13:30)・17:00〜22:30 (L.O. 22:00)、土 17:00〜22:30、日曜休み、カード・QR可、20席。口コミ(2026年10月): おしゃれで人気の創作中華のバル、2人で分けられる小皿、看板のカツオのたたきの赤いソース (スモーキーでほどよく辛い)、drool chicken、鶏もも、anago、コーンの春巻き、季節の牡蠣の春巻き、エビチリ、点心、季節でメニューが変わる、昼は週替わり、mapo tofu、担々麺のランチ、+1,000円の豪華なランチ (約2,000円)、18年の紹興酒 (ストレートかソーダ割り)、イタリアのビール、夜は予約を、時間制限つきで入れることも、辛いものが苦手でも食べやすい味つけ、注文の確認への対応がそっけなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B537094319/', R + 'B537650859/', R + 'B537667860/', R + 'B537800844/', R + 'B537845189/', R + 'B537850519/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sharing plates; reserve at night (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区安土町1-4-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区安土町一丁目4番11号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537800844/', R + 'B537667860/'],
    price_note: 'Lunch price from an October 2026 review; dinner JPY 5,000–7,999 (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Seared bonito with red sauce', '', 'Signature', 'ask', 'no', 'October 2026.', 'katsuo'),
      it('', '', 'Drool chicken', '', 'Chicken', 'ask', 'no', 'October 2026.', 'drool'),
      it('', '', 'Lunch set, fuller version', '~¥2,000', 'Lunch', 'no', 'no', 'October 2026.', 'lunch'),
      it('', '', '18-year Shaoxing wine', '', 'Drinks', 'ask', 'ask', 'October 2026.', 'shaoxing'),
    ] }, {
    cuisine: '創作中華のバル、分け合う小皿・看板はスモーキーでほどよく辛い赤いソースのカツオのたたき・drool chicken、鶏もも・anago・コーンの春巻き、季節の牡蠣の春巻き・エビチリ・点心・季節で変わるメニュー・昼は週替わり、mapo tofu、担々麺のランチ、+1,000円の豪華なランチ (約2,000円)・18年の紹興酒 (ストレートかソーダ割り)、イタリアのビール・20席',
    neighborhood: '中央区安土町1-4-11。堺筋本町駅12番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。春巻きと点心、醤油のソース、担々麺。',
    vegan_detail: 'ヴィーガンではありません。カツオ、鶏、海老、牡蠣の料理。',
    notes: '[中華・安土町、小皿の創作中華のバル] 堺筋本町近くのおしゃれでにぎわう中華のバルで、色あざやかな小皿は2人で分けるのにちょうどいい量。必ず頼みたいのは店の赤いソースのカツオのたたきで、スモーキーでほどよく辛い。しっとりした drool chicken、ふわふわの anago、点心、季節なら牡蠣の春巻きも加え、18年の紹興酒をストレートかソーダ割りで。味つけはバランスがよく、辛いのが苦手な人とでも。昼はお得で、担々麺、mapo tofu、約2,000円の豪華なセットなど、平日11時半すぎに満席だったという声も。夜は予約を。日曜休み。',
  });
}

save();
