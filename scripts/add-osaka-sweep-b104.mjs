// Osaka sweep (2-mile circle around Dotonbori), batch 104 — mom-and-pop phase (all OMNI).
//   + 心斎橋鮨 縁 (sushi-and-tempura omakase counter, drinks included; Higashi-Shinsaibashi)
//   + 焼肉 やっちゃん 難波 (counter yakiniku, thick cuts cut to order; by Namba Stn)
//   + 旬肴 料理人 裕 (one-person counter kappo in a Dotonbori basement, river terrace) — mom_and_pop
//   + 焼庵 (grill-your-own dried fish over charcoal, kamameshi; Dotonbori 2-chome)
//   + 江上 (teppan izakaya, okonomiyaki and creative teppan, to 03:00; Higashi-Shinsaibashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 104);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 心斎橋鮨 縁
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152173/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_shinsaibashi_sushi_en', name: '心斎橋鮨 縁 (Shinsaibashi Sushi En)', category: 'OMNI',
    lat: 34.6714, lng: 135.503475, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura batter in the course; soy-based seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish and sea urchin throughout.',
    hours_raw: 'Daily 18:00–22:30; closing days vary (Tabelog, staff-maintained). Omakase ¥15,000 with free-flow soft drinks or ¥18,000 with alcohol (September–October 2026). Private hire by phone. Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['18:00', '22:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-5-21, 1F unit 8 — 10 min from Shinsaibashi Stn',
    cuisine: 'Edomae sushi and tempura omakase · ¥15,000 with soft drinks, ¥18,000 with all-you-can-drink alcohol · clear soup with hamo and kuruma shrimp · sawara sashimi · mackerel "prosciutto" · tempura of anago, abalone, nodoguro, maitake with yuzu-kosho salt · chawanmushi with Hokkaido sea urchin · red-vinegar rice, lightly pressed · fish marinated, seared, steamed or boiled · otoro, akami, uni · 7-seat L-shaped wooden counter',
    website: null, gmaps: gm('心斎橋鮨 縁 東心斎橋'), menu_url: null,
    notes: "[Sushi · sushi and tempura in one omakase, drinks included, in Higashi-Shinsaibashi] A seven-seat wooden counter in Higashi-Shinsaibashi, open since October 2025, whose omakase combines Edomae sushi with fresh tempura and makes the price easy: ¥15,000 with free-flow soft drinks, or ¥18,000 with alcohol. Expect a clear hamo soup, sawara sashimi, a striking mackerel \"prosciutto,\" then crisp tempura of abalone, anago or nodoguro and maitake with yuzu-kosho salt, and a chawanmushi topped with Hokkaido sea urchin, before nigiri on lightly pressed red-vinegar rice, each fish prepared its own way and served at the right temperature: otoro, akami, generous uni. Diners note the knife work at the counter and a calm atmosphere for special occasions. Book ahead.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 October 2025 (Tabelog)', background: 'Sushi-and-tempura omakase counter (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Sushi and tempura omakase.',
      anecdotes: [
        { text: '"The sushi is made with red vinegar rice and seasonal fish, prepared in various styles such as marinated, seared, steamed, and boiled… The abalone tempura has a light batter that gives way to a delightful crunch." — September 2026.', source: R + 'B536277413/' },
        { text: '"The standout for me was the mackerel prosciutto… As for the sushi, each piece was served at the appropriate temperature after checking the temperature of the ingredients." — September 2026, ¥15,000 course.', source: R + 'B536149204/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 心斎橋鮨 縁、大阪市中央区東心斎橋2-5-21 日宝大阪屋会館 1F 8号、心斎橋駅から徒歩10分、毎日18:00〜22:30、不定休、カード・電子マネー・QR可、カウンター7席、貸切は電話で、2025年10月31日開店。口コミ(2026年9〜10月): 江戸前寿司と天ぷら、木の温もりのカウンター7席、全国の旬の食材、おまかせコースに飲み放題を追加、15,000円のコース(ソフトドリンク飲み放題)、18,000円(アルコール飲み放題)、鱧と車海老のお椀、鰆の刺身、鯖の生ハム、穴子・鮑・舞茸の天ぷら、柚子胡椒塩、ネタの温度を見て握る、赤酢のシャリ、漬け・炙り・蒸し・煮など、ふんわり握り、L字カウンター、包丁さばき、北海道の雲丹、雲丹の茶碗蒸し、鱧しんじょうのお椀、のどぐろの天ぷら、大トロ、赤身、記念日に。',
      confidence: 'medium', sources: [TB, R + 'B536277413/', R + 'B536149204/', R + 'B535515308/', R + 'B535844416/', R + 'B536864653/', R + 'B537010010/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase with drinks included; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-21 日宝大阪屋会館 1F 8号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番21号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536149204/', R + 'B536864653/'],
    price_note: 'Course prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase with free-flow soft drinks', '¥15,000', 'Course', 'no', 'no', 'September 2026.', 'omakase_soft'),
      it('', '', 'Omakase with all-you-can-drink alcohol', '¥18,000', 'Course', 'no', 'no', 'October 2026.', 'omakase_alcohol'),
    ] }, {
    cuisine: '江戸前寿司と天ぷらのおまかせ・ソフトドリンク飲み放題で15,000円、アルコール飲み放題で18,000円・鱧と車海老のお椀・鰆の刺身・鯖の生ハム・穴子、鮑、のどぐろ、舞茸の天ぷらを柚子胡椒塩で・北海道の雲丹の茶碗蒸し・ふんわり握る赤酢のシャリ・漬け、炙り、蒸し、煮で仕立てる魚・大トロ、赤身、雲丹・木のL字カウンター7席',
    neighborhood: '中央区東心斎橋2-5-21 1F 8号。心斎橋駅から徒歩10分',
    gf_detail: 'グルテンフリーではありません。コースに天ぷらの衣、醤油ベースの味付け。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、雲丹が中心。',
    notes: '[寿司・東心斎橋、寿司と天ぷらを一度に、飲み物込みのおまかせ] 東心斎橋にある木のカウンター7席の店で、2025年10月開店、江戸前寿司と揚げたての天ぷらを組み合わせたおまかせで、値段もわかりやすい: ソフトドリンク飲み放題で15,000円、アルコールで18,000円。鱧のお椀、鰆の刺身、印象的な鯖の生ハム、続いて鮑、穴子やのどぐろ、舞茸のサクサクの天ぷらを柚子胡椒塩で、北海道の雲丹をのせた茶碗蒸し、そしてふんわり握る赤酢のシャリの握りへ。魚ごとに仕立てを変え、温度を見て出す: 大トロ、赤身、たっぷりの雲丹。カウンターの包丁さばきと落ち着いた雰囲気は記念日向きという声。予約を。',
  });
}

// ================================================================ 焼肉 やっちゃん 難波
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141501/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_yakiniku_yacchan_namba', name: '焼肉 やっちゃん 難波 (Yakiniku Yacchan Namba)', category: 'OMNI',
    lat: 34.666582, lng: 135.49971, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: seasoning sauces and wasabi soy; curry finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef throughout.',
    hours_raw: 'Daily 17:00–24:00 (Tabelog, staff-maintained). Reservations on Tabelog recommended; the counter fills (May 2026). Smoking allowed. Cards accepted; no e-money or QR (Tabelog). Free Wi-Fi.',
    hours: ALL(day(['17:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-2-16 — 1 min from Namba Stn (Midosuji, Kintetsu and Nankai)',
    cuisine: 'Counter yakiniku with meat cut and seasoned in front of you · "thick-cut" series: premium salted tongue with lemon, premium outside skirt with wasabi soy · recommended course ¥5,000 · kakuteki and cucumber kimchi · white rice · curry ochazuke or curry zosui to finish · 14 counter seats',
    website: null, gmaps: gm('焼肉 やっちゃん 難波'), menu_url: null,
    notes: "[Yakiniku · thick-cut beef sliced to order at a Namba counter] A lively 14-seat yakiniku counter a minute from Namba Station, open since 2024, where staff cut the meat to order and season it in front of you. The thick-cut series is the reason to come: premium salted tongue with lemon and a thick outside skirt with wasabi soy, juicy and generously portioned. Start with kakuteki or cucumber kimchi, order rice even if you usually don't, and finish with a soupy curry ochazuke or curry zosui. The ¥5,000 recommended course is good value. One diner found the menu a little limited. The counter fills quickly, so book on Tabelog. Smoking allowed; open nightly until midnight.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 March 2024 (Tabelog)', background: 'Counter yakiniku; reviewers mention a Kyobashi shop of the same name (March 2026; Tabelog, staff-maintained).', philosophy: null, specialty: 'Thick-cut tongue and outside skirt.',
      anecdotes: [
        { text: '"The highlight here is definitely the \'Thick Cut\' series. The thick-cut tongue and outside skirt are particularly impressive, and when grilled to perfection, they burst with juicy flavors." — June 2026.', source: R + 'B530096762/' },
        { text: '"The style here involves cutting the meat right in front of you and seasoning it on the spot before serving. The meat was fresh, and the seasoning was exquisite." — August 2026.', source: R + 'B533590172/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 焼肉 やっちゃん 難波、大阪市中央区難波4-2-16、各線なんば駅から徒歩1分、毎日17:00〜24:00、カード可、電子マネー・QR不可、カウンター14席、喫煙可、Wi-Fi、2024年3月31日開店、目の前で切る新鮮な肉。口コミ(2026年3〜8月): 食べログで当日予約のおすすめ5,000円コース、京橋の店との比較、カレー茶漬けは汁が多め、日曜18時は予約なしでぎりぎり、カウンターはすぐ埋まる、メニューが少なめという声、カウンターのにぎやかな雰囲気、厚切りシリーズ(タン、ハラミ)、ちょうどよい味付け、スタッフが手際よい、カクテキ、きゅうりキムチ、上塩タン(レモン)、上ハラミ(わさび醤油)、注文後に切る、量が多い、目の前で切って味付け、コスパがよい、ご飯も進む、締めのカレー雑炊。',
      confidence: 'medium', sources: [TB, R + 'B530096762/', R + 'B533590172/', R + 'B525138291/', R + 'B528799071/', R + 'B531915917/', R + 'B534895458/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter grilling with staff cutting and seasoning; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-2-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated March–August 2026. Same address as Kushiage Harusai.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目2番16号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525138291/', R + 'B531915917/', R + 'B530096762/'],
    price_note: 'Course price from a March 2026 review; dinners about ¥5,000–15,000.', last_checked: TODAY, items: [
      it('', '', 'Recommended course', '¥5,000', 'Course', 'no', 'no', 'March 2026.', 'course'),
      it('', '', 'Thick-cut premium salted tongue', '', 'Yakiniku', 'no', 'no', 'May–June 2026.', 'atsugiri_tan'),
      it('', '', 'Thick-cut premium outside skirt', '', 'Yakiniku', 'no', 'no', 'May–June 2026.', 'harami'),
      it('', '', 'Curry ochazuke / curry zosui', '', 'Finish', 'no', 'no', 'March, August 2026.', 'curry_zosui'),
    ] }, {
    cuisine: '目の前で切って味付けするカウンター焼肉・厚切りシリーズ: レモンの上塩タン、わさび醤油の上ハラミ・おすすめコース5,000円・カクテキ、きゅうりキムチ・白ご飯・締めはカレー茶漬けかカレー雑炊・カウンター14席',
    neighborhood: '中央区難波4-2-16。なんば駅(御堂筋線、近鉄、南海)から徒歩1分',
    gf_detail: '実際にはグルテンフリーではありません。味付けのたれやわさび醤油、カレーの締め。',
    vegan_detail: 'ヴィーガンではありません。牛肉が中心。',
    notes: '[焼肉・なんば、注文ごとに切る厚切り牛のカウンター] なんば駅から1分のにぎやかなカウンター14席の焼肉店で、2024年開店、注文を受けてから目の前で肉を切り味付けする。目当ては厚切りシリーズで、レモンで食べる上塩タンと、わさび醤油の厚いハラミはジューシーで量もたっぷり。カクテキやきゅうりキムチから始め、ふだん食べなくてもご飯を頼み、締めは汁気の多いカレー茶漬けかカレー雑炊で。おすすめの5,000円コースはお得。メニューが少なめという声も。カウンターはすぐ埋まるので食べログで予約を。喫煙可、毎晩24時まで。',
  });
}

// ================================================================ 旬肴 料理人 裕
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27073760/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ryouribitoyuu.jimdo.com/';
  const DIN = ['18:00', '23:00'], DIN_E = ['17:30', '23:00'], LUN = ['12:00', '15:00'];
  put({
    id: 'osaka_shunko_ryoribito_yuu_dotonbori', name: '旬肴 料理人 裕 (Shunko Ryoribito Yuu)', category: 'OMNI',
    lat: 34.668851, lng: 135.505227, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-based seasoning throughout; no gluten-free handling described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal fish and dashi-based dishes.',
    hours_raw: 'Tue and Thu 18:00–23:00; Wed 17:30–23:00; Fri, Sat and holidays 12:00–15:00 and 18:00–23:00; Sun 12:00–15:00 and 17:30–23:00; closed Mondays (Tabelog, staff-maintained). Lunch (Wed, Fri–Sun) is reservation only, omakase ¥5,800 for two or more, booked by the day before; à la carte at dinner. Ten counter seats, so reserve. Cards and PayPay accepted (Tabelog).',
    hours: { 1: day(DIN), 2: day(DIN_E), 3: day(DIN), 4: day(LUN, DIN), 5: day(LUN, DIN), 6: day(LUN, DIN_E) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-1-9, B1F, with a terrace to the Dotonbori River at the back — 5 min from Nippombashi Stn',
    cuisine: 'Counter kappo of seasonal, creative Japanese plates · omakase lunch ¥5,800 (reservation, two or more) · à la carte or "leave it to the chef" at dinner · chilled chawanmushi with eggplant · sashimi, e.g. bluefin tuna · sanma rice to finish in autumn · wide sake list, including a sparkling sake from Okayama · fine tableware · 10 counter seats, outdoor terrace by the river',
    website: OWN, gmaps: gm('旬肴 料理人 裕 道頓堀'), menu_url: null,
    notes: "[Japanese · a one-chef counter kappo hidden under Dotonbori] A ten-seat counter in a basement in the heart of Dotonbori, open since 2013 and run by one chef, with a back door onto a terrace over the Dotonbori River. The cooking is creative seasonal Japanese served on fine tableware: chilled chawanmushi with eggplant in summer, sashimi such as bluefin tuna, and in autumn a sanma rice one diner called amazing. One regular never looks at the menu and simply leaves it to the chef; à la carte works too. The sake list is wide, with rarities like a sparkling sake from Okayama, and the value draws praise. Despite the location it feels calm, not touristy, and the counter invites chat with the chef and neighbors. Lunch on Wednesday and Friday to Sunday is an omakase (¥5,800, two or more, book by the day before). Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Opened 29 May 2013 (Tabelog)', background: 'Counter kappo run by the owner alone (September 2025 review; Tabelog, staff-maintained).', philosophy: null, specialty: 'Seasonal creative Japanese; omakase.',
      anecdotes: [
        { text: '"The owner was managing everything alone, but the dishes were presented efficiently, one by one. The tableware was also quite exquisite. The selection of drinks was extensive, and I even got to try a rare sparkling Japanese sake from Okayama." — September 2025, lunch course.', source: R + 'B513835381/' },
        { text: '"I usually don\'t even look at the menu and just let the master prepare dishes for me. It\'s a hidden gem for creative Japanese cuisine in Minami." — December 2025.', source: R + 'B531974300/' },
      ],
      japanese_sources_summary: '公式 ryouribitoyuu.jimdo.com。食べログ(店舗会員): 旬肴 料理人 裕、大阪市中央区道頓堀1-1-9 豊栄ビル B1F、近鉄日本橋駅・日本橋駅から徒歩5分、火木18:00〜23:00、水17:30〜23:00、金土祝12:00〜15:00・18:00〜23:00、日12:00〜15:00・17:30〜23:00、月曜定休、水金土日の昼は予約制のおまかせ5,800円(2名から、前日まで)、アラカルトも、カウンター10席で予約推奨、カード・PayPay・Alipay可、2013年5月29日開店、日本橋駅から5分のカウンター割烹。口コミ(2025年4月〜2026年7月): 金曜の昼の予約、日本酒に合うコスパ、旬の素材の創作料理、同窓会に、カウンターで店主や隣の客と会話、締めの秋刀魚ご飯、道頓堀の地下の隠れ家、常連が多い、昼はコース、店主ひとり、器が素敵、岡山の珍しいスパークリング日本酒、裏から道頓堀川へ、観光地らしくない落ち着いた雰囲気、冷やし茶碗蒸しに茄子、本鮪の刺身、メニューを見ずにおまかせ、テラス席。',
      confidence: 'medium', sources: [TB, OWN, R + 'B513835381/', R + 'B531974300/', R + 'B466453980/', R + 'B513585492/', R + 'B516205598/', R + 'B524737606/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter chat with the chef; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-1-9 豊栄ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目1番9号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B524737606/', R + 'B513585492/'],
    price_note: 'Lunch course price from the Tabelog listing; dinners about ¥6,000–14,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase lunch (reservation, 2+)', '¥5,800', 'Course', 'no', 'no', 'Tabelog listing.', 'lunch_omakase'),
      it('', '', 'Chilled chawanmushi with eggplant', '', 'Seasonal', 'no', 'no', 'July 2026.', 'hiyashi_chawanmushi'),
      it('', '', 'Sanma rice', '', 'Rice', 'no', 'no', 'Autumn; September 2025.', 'sanma_gohan'),
    ] }, {
    cuisine: '旬の創作和食のカウンター割烹・昼はおまかせ5,800円(予約制、2名から)・夜はアラカルトかおまかせ・茄子の冷やし茶碗蒸し・本鮪などの刺身・秋は締めの秋刀魚ご飯・岡山のスパークリング日本酒など豊富な日本酒・素敵な器・カウンター10席、川沿いのテラス',
    neighborhood: '中央区道頓堀1-1-9 豊栄ビルB1F、裏手は道頓堀川のテラス。日本橋駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油ベースの味付けが中心、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。旬の魚とだしの料理。',
    notes: '[和食・道頓堀の地下、ひとりで営むカウンター割烹] 道頓堀のど真ん中、地下にあるカウンター10席の店で、2013年開店、店主がひとりで切り盛りし、裏の扉は道頓堀川のテラスへ。料理は旬の創作和食で、器も美しい: 夏は茄子の冷やし茶碗蒸し、本鮪などの刺身、秋は絶賛の声もある秋刀魚ご飯。メニューを見ずにおまかせにする常連も、アラカルトも。日本酒は豊富で、岡山のスパークリング日本酒のような珍しいものも、コスパのよさも好評。場所の割に観光地らしくなく落ち着き、カウンターでは店主や隣の客との会話も。水・金〜日の昼はおまかせ(5,800円、2名から、前日までに予約)。月曜定休。',
  });
}

// ================================================================ 焼庵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27009214/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:59']), WED = day(['18:00', '23:00']);
  put({
    id: 'osaka_shoan_dotonbori', name: '焼庵 (Shoan)', category: 'OMNI',
    lat: 34.668335, lng: 135.497817, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tempura, soy-seasoned kamameshi and ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dried fish, seafood and beef; grilled vegetables are available.',
    hours_raw: 'Mon, Tue, Thu, Fri 17:00–24:00; Wed 18:00–23:00; Sat 12:00–15:00 and 17:00–24:00; Sun and holidays 12:00–15:00 and 18:00–23:00; irregular holidays (Tabelog, staff-maintained). It usually opens at 18:00; a 17:00 start and weekend lunch need a reservation by the day before. Look for the green lantern. Cards and e-money accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WED, 3: WD, 4: WD, 5: day(['12:00', '15:00'], ['17:00', '23:59']), 6: day(['12:00', '15:00'], ['18:00', '23:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 2-5-15, B1F, under a green lantern — 2–3 min from Namba Stn exits 25–26',
    cuisine: 'Grill-your-own izakaya over tabletop charcoal · Shizuoka dried fish: mackerel, horse mackerel, shishamo, sardines · grilled vegetables, juicy shiitake · beef platter of thick tongue, wagyu short rib and tenderloin · hamo with grated daikon and ponzu in summer · dried squid, jako tempura · kamameshi cooked to order, e.g. salmon and ikura (30+ min, order first) · takikomi rice · mostly domestic ingredients · sake kept cool in a box, good shochu · 6 counter seats, tatami tables',
    website: null, gmaps: gm('焼庵 道頓堀 干物'), menu_url: null,
    notes: "[Japanese · grill-your-own dried fish over charcoal off Dotonbori] A basement izakaya under a green lantern in Dotonbori 2-chome, open since 2002, where you grill Shizuoka dried fish and vegetables yourself over a tabletop charcoal brazier. The assorted platter brings mackerel, horse mackerel and shishamo; shiitake come out bursting with juice, and there's a surprisingly good beef platter of thick tongue, wagyu short rib and tenderloin. Summer adds hamo with grated daikon and ponzu. Order the kamameshi when you sit down, since it's cooked to order and takes over 30 minutes; the salmon and ikura is the pick. Ingredients are mostly domestic, and the sake and shochu lists are strong. The room is calm, with a counter and tatami tables. Book a day ahead for weekend lunch or a 17:00 start.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 August 2002 (Tabelog)', background: 'Charcoal-grill izakaya (Tabelog, staff-maintained).', philosophy: 'Safe ingredients, mainly from domestic producers (Tabelog listing).', specialty: 'Grill-your-own dried fish; kamameshi.',
      anecdotes: [
        { text: '"You can grill Shizuoka-produced dried fish and vegetables on a tabletop charcoal grill. The takikomi gohan (seasoned rice) was also delicious." — April 2026.', source: R + 'B526835998/' },
        { text: '"This restaurant is known for its delicious kamameshi (rice cooked in an iron pot), with the salmon and ikura (salmon roe) version being exceptional! It takes over 30 minutes to prepare, so be sure to order it right away." — November 2025.', source: R + 'B519283899/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 焼庵、大阪市中央区道頓堀2-5-15 コンチネント・ヴィジュー B1F、なんば駅25・26番出口から徒歩2〜3分、月火木金17:00〜24:00、水18:00〜23:00、土12:00〜15:00・17:00〜24:00、日祝12:00〜15:00・18:00〜23:00、不定休、17時の予約と週末の昼は前日までに予約、通常は18時開店、国産中心の安心な食材、緑の提灯が目印、当日キャンセルは控えて、カード・電子マネー可、16席、2002年8月28日開店。口コミ(2025年11月〜2026年8月): 焼き野菜、干物、牛、メーカーズマークのハイボール、脂ののった鯖、ジューシーな椎茸、厚切りタン・特上カルビ・特上ヒレの3種盛り、地下へ階段、カウンター6席と座敷のテーブル2卓、落ち着いた雰囲気、お酒が豊富、自分で焼く、ご飯は一度に炊くので時間がかかる、炭火で干物、鰯と鯖、釜飯は鮭いくらが絶品で30分以上、卓上の炭火、鯖・鯵・ししゃもと野菜の盛り合わせ、するめ、じゃこ天、日本酒は箱で冷たく、静岡の干物、炊き込みご飯、焼酎と日本酒、肉も魚も、鱧に大根おろしとポン酢。',
      confidence: 'medium', sources: [TB, R + 'B526835998/', R + 'B519283899/', R + 'B513614428/', R + 'B516532714/', R + 'B524870027/', R + 'B532819382/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'You grill at the table; staff explain; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-5-15 コンチネント・ヴィジュー B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目5番15号 (go) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524870027/', R + 'B519283899/', R + 'B513614428/'],
    price_note: 'No prices found; dinners about ¥3,000–9,000.', last_checked: TODAY, items: [
      it('', '', 'Assorted dried fish for the grill', '', 'Charcoal grill', 'no', 'no', 'March 2026.', 'himono'),
      it('', '', 'Grilled vegetables (e.g. shiitake)', '', 'Charcoal grill', 'no', 'ask', 'August 2026.', 'yasai'),
      it('', '', 'Beef platter (tongue, short rib, tenderloin)', '', 'Charcoal grill', 'no', 'no', 'August 2026.', 'beef'),
      it('', '', 'Salmon and ikura kamameshi', '', 'Rice', 'no', 'no', '30+ minutes; November 2025.', 'kamameshi'),
    ] }, {
    cuisine: '卓上の炭火で自分で焼く居酒屋・静岡の干物: 鯖、鯵、ししゃも、鰯・焼き野菜、ジューシーな椎茸・厚切りタン、特上カルビ、特上ヒレの牛の盛り合わせ・夏は鱧の大根おろしポン酢・するめ、じゃこ天・注文ごとに炊く釜飯、鮭いくらがおすすめ(30分以上、最初に注文を)・炊き込みご飯・国産中心の食材・箱で冷やす日本酒、焼酎も充実・カウンター6席、座敷のテーブル',
    neighborhood: '中央区道頓堀2-5-15 B1F、緑の提灯が目印。なんば駅25・26番出口から徒歩2〜3分',
    gf_detail: '実際にはグルテンフリーではありません。天ぷら、醤油で味付けした釜飯、ポン酢。',
    vegan_detail: 'ヴィーガンではありません。干物、魚介、牛肉。焼き野菜はあります。',
    notes: '[和食・道頓堀すぐ、炭火で自分で焼く干物] 道頓堀2丁目、緑の提灯の下の地下にある居酒屋で、2002年開店、卓上の炭火で静岡の干物や野菜を自分で焼く。盛り合わせは鯖、鯵、ししゃも、椎茸は汁があふれるほどジューシー、厚切りタン、特上カルビ、特上ヒレの牛の盛り合わせも意外においしい。夏は鱧の大根おろしポン酢も。釜飯は注文ごとに炊き30分以上かかるので座ったらすぐ注文を、鮭いくらがおすすめ。食材は国産中心、日本酒と焼酎も充実。カウンターと座敷のテーブルの落ち着いた店内。週末の昼と17時スタートは前日までに予約を。',
  });
}

// ================================================================ 江上
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27006444/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.toxnavi.com/egami/';
  const D = day(['18:00', '03:00']);
  put({
    id: 'osaka_egami_teppan_higashishinsaibashi', name: '江上 (Egami)', category: 'OMNI',
    lat: 34.671706, lng: 135.503092, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat okonomiyaki batter and yakisoba; sauces on a shared teppan.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, abura kasu, seafood and egg on a shared teppan.',
    hours_raw: 'Mon–Sat 18:00–03:00; closed Sundays and holidays (Tabelog, staff-maintained). Reservations recommended; call if online booking is full (2025–2026). Cash only: no cards or e-money (Tabelog). Smoking allowed.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-8-3, Kasayacho Kaikan 1F, at the very back of the corridor — 5 min from Shinsaibashi Stn',
    cuisine: 'Teppan izakaya, about 27 years in Minami · okonomiyaki, e.g. pork and egg topped with a fried egg · kasu hari ¥770: abura kasu with crisp mizuna · ten cheese ¥770 · sautéed scallops · salt yakisoba with crisp pork fat, sauce yakisoba, curry yakisoba to finish · seafood and meat teppan dishes · agedashi tofu to start · 10 counter seats, tables, up to 20',
    website: OWN, gmaps: gm('江上 東心斎橋 鉄板'), menu_url: null,
    notes: "[Okonomiyaki · a hidden teppan izakaya open until 3 am in Higashi-Shinsaibashi] A teppan izakaya at the very end of a narrow corridor in a Higashi-Shinsaibashi building, running for about 27 years, whose sliding door opens onto a cozy counter and a cheerful owner. One regular has lost count of visits; the draw is drinking food from the griddle: kasu hari (abura kasu with crisp mizuna, ¥770), ten cheese, sautéed scallops, and okonomiyaki such as pork and egg crowned with a runny fried egg. Finish with salt yakisoba with crisp pork fat, or a curry yakisoba. It's often full of reservations, so book or call ahead. Open until 03:00; closed Sundays; cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'About 27 years in business (May 2026 review).', background: 'Teppan izakaya (official site on toxnavi.com; Tabelog, staff-maintained).', philosophy: null, specialty: 'Okonomiyaki and creative teppan.',
      anecdotes: [
        { text: '"This dish features oil kasu and mizuna, giving it a refreshing crunch. The crisp texture of the mizuna combined with the rich flavor of the oil kasu made it delicious." — May 2026, kasu hari ¥770.', source: R + 'B503282656/' },
        { text: '"Okonomiyaki with Pork and Egg → It came topped with a fried egg. At first, the combination of the runny egg and the soft okonomiyaki made it easy to eat." — December 2025.', source: R + 'B519897661/' },
      ],
      japanese_sources_summary: '公式 toxnavi.com/egami/。食べログ(店舗会員): 江上、大阪市中央区東心斎橋2-8-3 日宝笠屋町会館(1階の奥)、御堂筋から3つ目の信号でヨーロッパ通りを南へ、月〜土18:00〜翌3:00、日祝休み、カード・電子マネー不可、20席(カウンター10、テーブル8、補助2)、貸切20名まで、喫煙可、心斎橋駅から徒歩5分の鉄板居酒屋、定番のお好み焼きから魚介や肉まで。口コミ(2025年10月〜2026年6月): 創業27年、お通しの揚げ出し豆腐、かすハリ770円(油かすと水菜)、天チーズ770円、お気に入りの鉄板焼き、予約なしでは入りにくい、何度来たかわからない、雑居ビルの細い通路の突き当たり、明るく気さくな店主、帆立のソテー、塩焼きそば(揚げた豚の脂入り)、豚玉に目玉焼き、予約で満席、ネットで取れなくても電話で、締めのカレー焼きそば。',
      confidence: 'medium', sources: [TB, OWN, R + 'B503282656/', R + 'B519897661/', R + 'B515909920/', R + 'B516358111/', R + 'B519266800/', R + 'B530129516/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cheerful owner at the counter (2025); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-3 日宝笠屋町会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through June 2026. Same building as Niku Nabe Tei.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番3号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503282656/', R + 'B519897661/', R + 'B530129516/'],
    price_note: 'Prices from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kasu hari (abura kasu and mizuna)', '¥770', 'Teppan', 'no', 'no', 'May 2026.', 'kasu_hari'),
      it('', '', 'Ten cheese', '¥770', 'Teppan', 'no', 'no', 'May 2026.', 'ten_cheese'),
      it('', '', 'Pork and egg okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'December 2025.', 'butatama'),
      it('', '', 'Salt yakisoba', '', 'Noodles', 'no', 'no', 'December 2025.', 'shio_yakisoba'),
      it('', '', 'Curry yakisoba', '', 'Noodles', 'no', 'no', 'June 2026.', 'curry_yakisoba'),
    ] }, {
    cuisine: 'ミナミで約27年の鉄板居酒屋・お好み焼き、目玉焼きをのせた豚玉など・油かすとシャキシャキ水菜のかすハリ770円・天チーズ770円・帆立のソテー・揚げた豚の脂の塩焼きそば、ソース焼きそば、締めのカレー焼きそば・魚介や肉の鉄板料理・お通しは揚げ出し豆腐・カウンター10席、テーブル、20名まで',
    neighborhood: '中央区東心斎橋2-8-3 日宝笠屋町会館1F、通路の突き当たり。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦のお好み焼きの生地と焼きそば、共用の鉄板でソース。',
    vegan_detail: 'ヴィーガンではありません。豚肉、油かす、魚介、卵を共用の鉄板で。',
    notes: '[お好み焼・東心斎橋、深夜3時までの隠れた鉄板居酒屋] 東心斎橋のビルの細い通路の突き当たりにある鉄板居酒屋で、約27年続き、引き戸を開けると居心地のよいカウンターと明るい店主。何度来たかわからないという常連も、目当ては鉄板の酒の肴: 油かすとシャキシャキ水菜のかすハリ(770円)、天チーズ、帆立のソテー、とろりとした目玉焼きをのせた豚玉などのお好み焼き。締めは揚げた豚の脂の塩焼きそばか、カレー焼きそばで。予約で埋まっていることが多いので、予約か電話を。深夜3時まで、日曜定休、現金のみ、喫煙可。',
  });
}

save();
