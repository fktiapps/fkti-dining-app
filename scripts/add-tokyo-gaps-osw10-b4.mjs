// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 4.
//   + トラットリア ドン ジョヴァンニ Trattoria Don Giovanni (3F Shinmichi-dōri trattoria; ¥1,000 one-plate lunch)
//   + 札幌熟成味噌らーめん 匠神 Sapporo Jukusei Miso Ramen Takumi Kami (19-seat Sapporo miso ramen, open late; NO ramen
//     block: clarity has no source, see report)
//   + 直心 Washoku Dining Jikishin (basement sake izakaya since 2007: tuna collar, Tokyo X pork shabu, 60+ sakes)
//   + Grill & Bistro K (18-seat basement meat-and-wine bistro since 2024, run by one owner-chef-sommelier)
//   Chain check. Don Giovanni, Jikishin, Grill & Bistro K: one listing each, no branch found. 匠神: a web search found no
//   other shop of the name. Skipped いろり庵きらく 四ツ谷店 13190982 (station soba chain) and インド料理ムンバイ四谷店
//   13051082 (one of the Mumbai group's shops: the official site lists branches across Tokyo and Kanto under
//   有限会社イートウェル, and an October 2026 reviewer calls it a chain).
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13190982', 'いろり庵きらく 四ツ谷店 — a station soba chain (いろり庵きらく); not researched.');
skip('13051082', 'インド料理ムンバイ四谷店＋The India Tea House — one shop of the Mumbai group (有限会社イートウェル), which lists branches across Tokyo and Kanto; chain, not researched. Integrator may override: vegetarian options, South Indian floor.');

// ================================================================ トラットリア ドン ジョヴァンニ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13167719/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:30']);
  put({
    id: 'tokyo_trattoria_don_giovanni_yotsuya', name: 'トラットリア ドン ジョヴァンニ (Trattoria Don Giovanni)', category: 'OMNI',
    lat: 35.686689, lng: 139.728628, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as served: every lunch is built on wheat pasta with bread or baguette; nothing gluten-free is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The daily one-plate comes with ham, rillettes, chicken or pork and pasta sauces with meat, crab or cream; the salad and bean dishes are the only plant items named.',
    hours_raw: 'Mon–Sat lunch 11:30–14:30; closed Sunday (Tabelog, which lists no dinner hours; one December 2025 diner had used it for a party). Weekday lunch is busy, Saturdays calmer (May 2026). Up stairs on the third floor (March 2026). 20 seats at a counter, tables and sofas; whole-shop hire possible; non-smoking (Tabelog). Tabelog lists cards (JCB, AMEX, Diners), but a March 2026 diner was told lunch is cash only. Opened 1 April 2014 (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-7-27, 第43東京ビル 3F, on Shinmichi-dōri — 2 min from Yotsuya Stn',
    cuisine: 'Trattoria lunch · daily one-plate lunch ¥1,000: appetizers (e.g. baguette with rillettes), salad with beans and ham, bread, the day\'s thin pasta (tomato, eggplant and pork, or cream with minced meat and spinach) and a main such as roast chicken or pork; large pasta +¥200; coffee or tea +¥100 (one diner paid ¥1,100 with coffee), though earlier reviews say a drink was included (2025–26 reviews) · lunch course ¥1,500 (assorted appetizers, pasta from three, e.g. blue crab in tomato cream, tiramisu, drink), ¥1,700 with large pasta (January and March 2026) · wine',
    website: null, gmaps: gm('トラットリア ドン ジョヴァンニ 四谷'), menu_url: null,
    notes: "[Italian · Yotsuya, a third-floor trattoria with a ¥1,000 plate] Up the stairs on the third floor of a Shinmichi-dōri building, a white-walled trattoria with a counter, tables and sofas; the listing says the chef trained at Michelin-starred restaurants in Italy and at well-known Tokyo kitchens. Lunch is the reason 2025–26 diners come: a one-plate of appetizers, a salad with beans and ham, bread, the day's thin spaghetti and a meat main for ¥1,000, which most found more than filling, or a ¥1,500 course with antipasti, a pasta such as blue crab in tomato cream, and tiramisu. Many solo diners, men and women, sit at the counter, and service is quick. Weekdays fill up; Saturdays are calmer. Lunch only on Tabelog's hours; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2014 (Tabelog).',
      background: 'Tabelog remarks: "A restaurant run by a chef who has trained at Michelin-starred Restaurants in Italy and famous restaurants in Tokyo." No source names the chef.',
      philosophy: null, specialty: 'One-plate lunch; blue crab tomato-cream spaghetti.',
      anecdotes: [
        { text: '"I ordered the one-plate lunch (JPY 1000) that included an appetizer, salad, pasta, and a main dish… It was more filling than I expected." — August 2025, a working Saturday.', source: R + 'B512364175/' },
        { text: '"I chose the spaghetti with tomato cream sauce and blue crab from three options… plenty of crab mixed in a creamy tomato sauce." — January 2026, ¥1,700 with large pasta.', source: R + 'B521129326/' },
        { text: '"During lunch hours, there were many solo diners, both men and women." — October 2025.', source: R + 'B516455516/' },
      ],
      japanese_sources_summary: '食べログ: トラットリア ドン ジョヴァンニ、イタリアン・ヨーロッパ料理・洋食、四谷1-7-27 第43東京ビル3F、新道通り、四ツ谷駅から徒歩2分、月〜土11:30〜14:30、日曜休み、20席 (カウンター、ソファ)、貸切可、禁煙、2014年4月1日オープン、イタリアのミシュランの星付き店と東京の名店で修業したシェフの店。口コミ(2025年8月〜2026年10月): ワンプレートランチ1,000円 (前菜、サラダ、パン、日替わりの細いパスタ、メイン)、大盛り +200円、コーヒーか紅茶 +100円、ランチコース1,500円 (渡り蟹のトマトクリーム、ティラミス)、3階まで階段、ひとり客が多い、平日は混む。',
      confidence: 'medium', sources: [TB, R + 'B512364175/', R + 'B516455516/', R + 'B519840124/', R + 'B521129326/', R + 'B523366958/', R + 'B524400047/', R + 'B525087408/', R + 'B525596186/', R + 'B526857629/', R + 'B527679680/', R + 'B530088701/', R + 'B537454209/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order the one-plate or the course at the table or counter; possibly cash only at lunch (March 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-7-27 第43東京ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686689, 139.728628); cross-checked: GSI 東京都新宿区四谷一丁目7番地 (lot) 17m. Kakurega Dining Saate (tokyo_kakurega_dining_saate_yotsuya, address_ja "東京都新宿区四谷1-7-15 山田ビル 2F") is 14 m away in a different building, so both keep their own points; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525087408/', R + 'B527679680/', R + 'B524400047/', R + 'B521129326/'],
    price_note: 'Prices from 2025–26 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'One-plate lunch (appetizers, salad, bread, pasta, main)', '¥1,000', 'Lunch', 'no', 'no', '2025–26 reviews; large pasta +¥200, drink +¥100 (May 2026).', 'one_plate'),
      it('', '', 'Lunch course (appetizers, pasta, dessert, drink)', '¥1,500', 'Lunch', 'no', 'ask', 'March 2026 review; ¥1,700 with large pasta (January 2026).', 'lunch_course'),
    ] }, {
    cuisine: 'トラットリアのランチ・日替わりのワンプレートランチ1,000円: 前菜 (リエットをのせたバゲットなど)、豆と生ハムのサラダ、パン、日替わりの細いパスタ (トマト、なすと豚、ひき肉とほうれん草のクリームなど)、ローストチキンや豚などのメイン。パスタ大盛り +200円、コーヒーか紅茶 +100円 (コーヒー付きで1,100円払った人も)、以前の口コミではドリンク込み (2025〜26年の口コミ)・ランチコース1,500円 (前菜の盛り合わせ、3種から選ぶパスタ、たとえば渡り蟹のトマトクリーム、ティラミス、ドリンク)、パスタ大盛りで1,700円 (2026年1月・3月)・ワイン',
    neighborhood: '四谷1-7-27 第43東京ビル3F、新道通り。四ツ谷駅から徒歩2分',
    gf_detail: 'このままではグルテンフリーではない。どのランチも小麦のパスタにパンかバゲット。グルテンフリーの説明はない。',
    vegan_detail: '要確認。日替わりのワンプレートには生ハム、リエット、鶏や豚、肉や蟹やクリームのパスタソース。植物性で名前が出るのはサラダと豆くらい。',
    notes: '[イタリアン・四谷、3階のトラットリアの1,000円のプレート] 新道通りのビルの3階へ階段を上がると、白い壁にカウンター、テーブル、ソファのトラットリア。食べログによれば、シェフはイタリアのミシュランの星付き店と東京の名店で修業した。2025〜26年の客のお目当てはランチで、前菜、豆と生ハムのサラダ、パン、日替わりの細いスパゲティ、肉のメインがのったワンプレートが1,000円。多くの人が食べきれないほどと書いている。1,500円のコースは前菜の盛り合わせ、渡り蟹のトマトクリームなどのパスタ、ティラミス。カウンターには男女ともひとり客が多く、提供も早い。平日は混み、土曜は落ち着いている。食べログの営業時間は昼のみ、日曜休み。',
  });
}

// ================================================================ 札幌熟成味噌らーめん 匠神
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13267147/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_takumi_kami_miso_ramen_yotsuya', name: '札幌熟成味噌らーめん 匠神 (Sapporo Jukusei Miso Ramen Takumi Kami)', category: 'OMNI',
    lat: 35.686607, lng: 139.72847, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a miso broth; gyoza and kara-age on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the miso soup is topped with a layer of lard and chashu; a clam salt ramen is the other broth named.',
    hours_raw: 'Tabelog lists no hours. Reviews show lunch on weekdays and holidays (around 13:00) and late nights (open at about 22:00 on weekdays; "they stay open fairly late at night", June 2023). Order by voice, no ticket machine (April 2026). 19 seats: four tables for four and three counter seats, some booths with acrylic screens (July 2026) (Tabelog). Designated smoking area (Tabelog). Tabelog lists cards, e-money and QR; a July 2026 diner paid cash. Opened 6 December 2021 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-8-5, 小川ビル 1F, on Shinmichi-dōri — 3 min from Yotsuya Stn',
    cuisine: 'Sapporo-style aged-miso ramen with a lard-sealed, very hot soup, medium-thick curly yellow noodles and stir-fried vegetables (bean sprouts, onion, carrot, cabbage) (2026 reviews) · miso ramen about ¥850; seasoned-egg miso ¥950; miso butter corn ¥950; spicy green-onion miso ¥990; negi miso; mapo miso ramen; clam salt ramen (2026 reviews) · lunch extras: gyoza set, a small rice bowl for ¥150 (e.g. topped with kara-age) (July–August 2026) · kara-age, other side dishes and drinks such as a "mega highball" for a ramen-izakaya evening; condiments on the table',
    website: null, gmaps: gm('札幌熟成味噌らーめん 匠神 四谷'), menu_url: null,
    notes: "[Ramen · Yotsuya, Sapporo miso on Shinmichi-dōri, late] A plain 19-seat ramen shop on Shinmichi-dōri serving Sapporo-style aged-miso ramen: a rich miso soup kept scalding under a layer of lard, chewy medium-thick curly yellow noodles and a heap of stir-fried vegetables, with a slice of seared chashu. Variations run from miso butter corn and spicy green-onion miso to a mapo miso and a clam salt ramen, all around ¥850–990, and at lunch a small rice bowl costs ¥150. After 2026 drinking nights people drop in near 22:00 for a bowl and a highball; one diner from Kansai was pleased to find Hokkaido-style miso butter corn. Opinions run from rich and warming to ordinary, with one bowl gone lukewarm under its vegetables. Order by voice; tables and a short counter.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 December 2021 (Tabelog).',
      background: 'No source names the owner or cooks; no website found. A web search found no other shop of the name.',
      philosophy: null, specialty: 'Aged-miso ramen; miso butter corn.',
      anecdotes: [
        { text: '"The broth has a layer of lard that keeps it hot until the very last bite." — April 2026, miso butter corn ramen ¥950.', source: R + 'B525925994/' },
        { text: '"In Kansai, it\'s rare to find Hokkaido-style miso corn butter ramen, so I was really pleased." — April 2026, after a concert.', source: R + 'B526770406/' },
        { text: '"I ordered the Ajitama Miso Ramen for JPY 950 and a Mega Highball… The soup was piping hot!" — April 2026, just before 22:00.', source: R + 'B525761924/' },
      ],
      japanese_sources_summary: '食べログ: 札幌熟成味噌らーめん 匠神、ラーメン、四谷1-8-5 小川ビル1F、四ツ谷駅から徒歩3分、予約不可、19席 (4人がけテーブル4、カウンター3)、分煙、2021年12月6日オープン、営業時間の記載なし。口コミ(2026年4月〜9月): 札幌の熟成味噌、ラードで熱いスープ、中太の縮れ麺、炒め野菜、味噌ラーメン850円ほど、味玉味噌950円、味噌バターコーン950円、ねぎ辛味噌990円、麻婆味噌、あさりの塩、昼は小丼150円、kara-age、券売機なしで口頭注文、夜10時ごろも営業。',
      confidence: 'low', sources: [TB, R + 'B466875982/', R + 'B525761924/', R + 'B525925994/', R + 'B526770406/', R + 'B529807179/', R + 'B530331890/', R + 'B530812348/', R + 'B531376733/', R + 'B533470201/', R + 'B533649364/', R + 'B536286170/', R + 'B536864892/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No ticket machine; order by voice at the table or counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-8-5 小川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (121 reviews); reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB} (35.686607, 139.728470); cross-checked: GSI 東京都新宿区四谷一丁目8番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536286170/', R + 'B525761924/', R + 'B525925994/', R + 'B531376733/', R + 'B533649364/'],
    price_note: 'Prices from 2026 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Miso ramen', '¥850', 'Ramen', 'no', 'no', 'September 2026 ("around").', 'miso_ramen'),
      it('', '', 'Seasoned-egg miso ramen', '¥950', 'Ramen', 'no', 'no', 'April 2026.', 'ajitama_miso'),
      it('', '', 'Miso butter corn ramen', '¥950', 'Ramen', 'no', 'no', 'April 2026.', 'miso_butter_corn'),
      it('', '', 'Spicy green-onion miso ramen', '¥990', 'Ramen', 'no', 'no', 'July 2026.', 'negi_kara_miso'),
      it('', '', 'Small rice bowl (lunch)', '¥150', 'Sides', 'ask', 'ask', 'August 2026.', 'mini_don'),
    ] }, {
    cuisine: '札幌風の熟成味噌らーめん。ラードで閉じ込めた熱々のスープ、中太の黄色い縮れ麺、炒め野菜 (もやし、玉ねぎ、人参、キャベツ) (2026年の口コミ)・味噌らーめん850円ほど、味玉味噌950円、味噌バターコーン950円、ねぎ辛味噌990円、ねぎ味噌、麻婆味噌、あさりの塩らーめん (2026年の口コミ)・昼は gyoza のセット、小丼150円 (kara-age のせなど) (2026年7〜8月)・夜は kara-age などのつまみと「メガハイボール」でラーメン居酒屋に。卓上の調味料',
    neighborhood: '四谷1-8-5 小川ビル1F、新道通り。四ツ谷駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。味噌スープに小麦の麺。サイドに gyoza と kara-age。',
    vegan_detail: 'ヴィーガンではない。味噌スープの表面にラード、チャーシューも。ほかのスープはあさりの塩。',
    notes: '[ラーメン・四谷、新道通りの札幌味噌、夜遅くまで] 新道通りの飾り気のない19席のラーメン店。札幌風の熟成味噌らーめんで、ラードの層で熱々に保った濃い味噌スープ、もちもちした中太の黄色い縮れ麺、山盛りの炒め野菜に炙ったチャーシュー1枚。味噌バターコーン、ねぎ辛味噌、麻婆味噌、あさりの塩らーめんなどがだいたい850〜990円で、昼は小丼が150円。2026年には飲んだあと夜10時ごろに一杯とハイボールで寄る人も。Kansai から来た客はHokkaido 風の味噌バターコーンを喜んでいた。感想は濃厚で温まるから普通までさまざまで、野菜の下でぬるくなったという声も。注文は口頭で、テーブルと短いカウンター。',
  });
}

// ================================================================ 直心
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13103937/'; const R = TB + 'dtlrvwlst/';
  const W = day(['15:30', '23:30']); const E = day(['15:00', '22:00']);
  put({
    id: 'tokyo_washoku_dining_jikishin_yotsuya', name: '直心 (Washoku Dining Jikishin)', category: 'OMNI',
    lat: 35.686724, lng: 139.72838, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No allergy information. Sashimi and grilled tuna collar are the core, but courses finish with noodles or ramen, the hot pots use a soy or dashi broth, and a soy-marinated egg yolk is the usual starter (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The listing ticks "Vegetarian options" and "particular about vegetables", but courses centre on fish, Tokyo X pork and Hinai chicken, and no vegan dish is named.',
    hours_raw: 'Mon–Fri 15:30–23:30; Sat–Sun 15:00–22:00; closing days not fixed (Tabelog). October 2026 diners also ate lunch here (Hiroshima tsukemen; a salmon and mackerel miso set just after 13:00); lunch hours are not listed. Reservations taken; courses with all-you-can-drink sake (bottles brought to the table to pour) ¥5,500–6,500; half-price sake days, pours from 120 ml (180 ml on half-price days) (2025–26 reviews). 42 seats: counter, tables, tatami and sunken seating; private rooms for 4 to 30+; hire for 20–50; heated-tobacco-only smoking area (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR (Tabelog). BYO and takeaway possible (Tabelog). Opened 1 July 2007 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-7, 第二鹿倉ビル B1F, on Shinmichi-dōri — about 250 m from Yotsuya Stn (JR Chuo, Marunouchi, Namboku)',
    cuisine: 'Japanese dining and sake bar: fish bought direct from Toyosu, with signatures of bluefin tuna collar as sashimi and grilled, and Tokyo X pork belly shabu-shabu (Tabelog) · banquet course ¥6,000 (sake appetizers, seasonal salad, tuna-collar sashimi, Hinai chicken tataki, grilled tuna collar, Tokyo X pork shabu-shabu, custom noodles from Kumamoto Fuki Seimenjo; July 2026); ¥5,500 course with pork shabu and ramen to finish (June 2026); also mizutaki, zosui finishes · à la carte: soy-marinated egg yolk, mackerel prosciutto, white-sesame salad with Shine Muscat, dashi-maki omelette, sesame kanpachi clay-pot rice (2026 reviews) · lunch: Hiroshima tsukemen with cabbage, green onion, chashu and lemon; fish set meals (October 2026) · over 60 sakes chosen beyond the famous names (Tabelog; about 30 per one October 2026 diner), shochu and wine; brands are the staff\'s choice, not yours (June 2026)',
    website: null, gmaps: gm('直心 四谷 和食'), menu_url: null,
    notes: "[Izakaya · Yotsuya, a basement sake bar with tuna collar and Tokyo X pork] A basement izakaya on Shinmichi-dōri, open since 2007, built for sake: the shop says it keeps more than 60 bottles from across the country chosen beyond the famous names, and on the drinks courses staff set three one-sho bottles on the table and swap them when empty. The kitchen buys fish from Toyosu; the house signatures are bluefin tuna collar, raw and grilled, and Tokyo X pork shabu-shabu, finished with noodles, ramen or zosui. A soy-marinated egg yolk starter, mackerel prosciutto and a sesame salad with Shine Muscat grapes caught 2026 diners' eyes, and on half-price sake days a pour starts at 180 ml. Mostly courses for company parties of 4 to 30 in tatami and private rooms, from about ¥5,500 with drinks. One July 2026 group found the ingredients unremarkable. Lately also open for lunch, with Hiroshima-style tsukemen.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2007 (Tabelog: "Established for 19 years").',
      background: 'No source names the owner or cooks. Corporate-member Tabelog listing: high-quality seasonal ingredients such as tuna, hairy crab, kinmedai, soft roe and monkfish liver from Yoichi; specialities of grilled and sashimi tuna collar and Tokyo X pork shabu-shabu; "over 60 unique sake varieties sourced from across the country, not limited by popularity"; fish sourced directly from Toyosu.',
      philosophy: 'Courses and all-you-can-drink without compromise on ingredients or sake (Tabelog).', specialty: 'Bluefin tuna collar; Tokyo X pork shabu-shabu; sake.',
      anecdotes: [
        { text: '"They brought out three bottles of Japanese sake at a time, and after enjoying those, I could exchange them for new ones! I tried 9 different kinds over three rounds, and by the end, my hand was shaking from holding the one-sho bottle (laughs)." — October 2026.', source: R + 'B499845142/' },
        { text: '"I visited on a day when they had half-price sake. Although the minimum order is 120ml, on half-price days, it starts from 180ml." — June 2026.', source: R + 'B529534443/' },
        { text: '"During the day, they used to serve only Hiroshima Tsukemen… To my surprise, I found that Hiroshima Tsukemen is still on the menu!" — October 2026, lunch.', source: R + 'B536674575/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 直心 (Washoku Dining Jikishin)、居酒屋・魚介・日本酒バー、四谷1-7 第二鹿倉ビルB1F、月〜金15:30〜23:30、土日15:00〜22:00、不定休、42席、カウンター・テーブル・座敷・掘りごたつ、個室4〜30名以上、加熱式たばこのみの喫煙所、カード・QR 可、持ち込み・テイクアウト可、2007年7月1日オープン、本鮪、毛蟹、金目鯛、白子、Yoichi のあん肝、鮪のカマの刺身と焼き、Tokyo X の豚しゃぶ、全国の日本酒60種以上、Toyosu から直送の魚。口コミ(2025年9月〜2026年10月): 一升瓶3本をテーブルに置く日本酒の飲み放題、コース5,500〜6,500円、日本酒半額の日、卵黄の醤油漬け、鯖の生ハム、シャインマスカットの白ごま和え、土鍋ごはん、昼の Hiroshima のつけ麺と魚の定食。',
      confidence: 'medium', sources: [TB, R + 'B499845142/', R + 'B513181636/', R + 'B523111506/', R + 'B526909250/', R + 'B529344009/', R + 'B529534443/', R + 'B531697828/', R + 'B532793932/', R + 'B536674575/', R + 'B536820931/', R + 'B537158759/', R + 'B537852891/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly booked courses; the staff choose the sake for you (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-7 第二鹿倉ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686724, 139.728380); cross-checked: GSI 東京都新宿区四谷一丁目7番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531697828/', R + 'B529344009/', R + 'B499845142/'],
    price_note: 'Course prices from 2025–26 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Banquet course with all-you-can-drink (tuna collar, Tokyo X pork shabu-shabu)', '¥6,000', 'Course', 'ask', 'no', 'July 2026 review.', 'banquet_course'),
      it('', '', 'Course with all-you-can-drink, pork shabu-shabu and ramen', '¥5,500', 'Course', 'no', 'no', 'June 2026 review.', 'course_5500'),
      it('', '', 'Hiroshima tsukemen (lunch)', '', 'Lunch', 'no', 'no', 'October 2026 reviews; price not given.', 'hiroshima_tsukemen'),
    ] }, {
    cuisine: '和食のダイニング兼日本酒バー。Toyosu から直送の魚で、名物は本鮪のカマの刺身と焼き、Tokyo X の豚バラのしゃぶしゃぶ (食べログ)・宴会コース6,000円 (酒の肴の盛り合わせ、季節の野菜のサラダ、鮪のカマの刺身、Hinai 鶏のたたき、鮪のカマ焼き、Tokyo X の豚しゃぶ、Kumamoto の Fuki Seimenjo の特製麺。2026年7月)、豚しゃぶと締めのラーメンの5,500円のコース (2026年6月)、水炊き、雑炊の締めも・アラカルト: 卵黄の醤油漬け、鯖の生ハム、シャインマスカットの白ごまサラダ、出汁巻き玉子、ごまかんぱちの土鍋ごはん (2026年の口コミ)・昼: キャベツ、ねぎ、チャーシュー、レモンの Hiroshima のつけ麺、魚の定食 (2026年10月)・人気銘柄にとらわれない全国の日本酒60種以上 (食べログ。2026年10月の客は30種ほどと)、焼酎、ワイン。銘柄は店のおまかせ (2026年6月)',
    neighborhood: '四谷1-7 第二鹿倉ビルB1F、新道通り。四ツ谷駅 (JR中央線、丸ノ内線、南北線) から約250m',
    gf_detail: '要確認。アレルギーの案内はない。刺身や鮪のカマ焼きが中心だが、コースの締めは麺やラーメン、鍋は醤油や出汁のスープ、お通しはたいてい卵黄の醤油漬け (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応、野菜にこだわりの印があるが、コースは魚、Tokyo X の豚、Hinai 鶏が中心で、ヴィーガンの料理名はない。',
    notes: '[居酒屋・四谷、鮪のカマと Tokyo X の地下の日本酒の店] 新道通りの地下にある2007年からの居酒屋で、主役は日本酒。店によれば人気銘柄にとらわれず全国から選んだ60種以上をそろえ、飲み放題のコースでは一升瓶を3本テーブルに置き、空いたら替えてくれる。魚は Toyosu から。名物は本鮪のカマの刺身と焼き、Tokyo X の豚しゃぶで、締めは麺、ラーメン、雑炊。卵黄の醤油漬けのお通し、鯖の生ハム、シャインマスカットのごまサラダが2026年の客の目を引き、日本酒半額の日は180mlから。座敷や個室で4〜30名ほどの会社の宴会コースが中心で、飲み放題付きで5,500円ほどから。2026年7月のあるグループは素材にそれほど特別さを感じなかったという。最近は昼も開いていて、Hiroshima 風のつけ麺がある。',
  });
}

// ================================================================ Grill & Bistro K
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13303007/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['18:00', '22:30']); const NIGHT = day(['18:00', '22:30']);
  put({
    id: 'tokyo_grill_bistro_k_yotsuya', name: 'Grill & Bistro K', category: 'OMNI',
    lat: 35.68702, lng: 139.728558, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled chicken, duck and beef are the mains, but sauces are not described; lunches are pasta or a European-style beef curry, courses include a baguette, and a financier or madeleine follows lunch (2026 reviews; Tabelog course).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salads (Caesar with soft-boiled egg), a seasonal vegetable potage and an asparagus cheese gratin are the vegetable dishes named; the menu is built on meat.',
    hours_raw: 'Mon, Wed–Fri lunch 11:30–14:00 (last order 13:30), dinner 18:00–22:30 (last order 21:30); Sat, Sun and holidays dinner only; closed Tuesday and occasional other days (Tabelog). Lunch started in early 2026 (April 2026 review). Reservations taken; dishes take time with one person in charge (July 2026, October 2026). 18 seats: 8 at the counter, tables; hire for up to 20; non-smoking; basement can feel chilly (January 2026) (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). Tabelog\'s Japanese text gives no service charge ("なし"), though its English translation mentions 10%. Smart-casual dress asked; children welcome, no kids\' menu (Tabelog). Opened 11 October 2024 (Tabelog).',
    hours: { 0: WD, 2: WD, 3: WD, 4: WD, 5: NIGHT, 6: NIGHT }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-7-10, 第3鹿倉ビル B1F room B, on Sanei-dōri — 3–5 min from JR/Tokyo Metro Yotsuya Stn',
    cuisine: 'Meat-and-wine bistro: chicken, duck and beef steaks grilled over charcoal, with wines picked by the sommelier (Tabelog; October 2026) · prix-fixe course ¥7,000: appetizer, seasonal vegetable potage, main from three, curry or pasta, dessert, baguette (Tabelog); an ¥8,000 course (October 2026) · à la carte favourites: green asparagus cheese gratin, white liver yukhoe or terrine, chicken tartare, foie gras brûlée, grilled jidori chicken with crisp skin, sautéed duck, duck Bolognese, Caesar salad, caprese, chilled potato soup (2025–26 reviews) · lunch: European-style beef curry ¥1,800; red Bolognese of minced duck or white Bolognese of minced chicken ¥1,500; lemon cream pasta with chicken ¥1,500; large +¥300; a financier or madeleine afterwards (August and October 2026)',
    website: null, gmaps: gm('Grill & Bistro K 四谷'), menu_url: null,
    notes: "[French · Yotsuya, a one-person meat-and-wine bistro in a basement] Down in a brown-toned basement off Sanei-dōri, an 18-seat bistro opened in October 2024 where, as diners describe it, one smiling owner cooks, pours and serves, and sees guests to the door. The owner is a certified sommelier (January 2025), and the menu is meat: charcoal-grilled jidori chicken with crackling skin, duck, beef, a white-liver terrine and a foie gras brûlée, plus the green asparagus cheese gratin several diners single out. The ¥7,000 prix-fixe lets you choose the main; lunch, added in 2026, is a beef-stew-like European curry or a duck or chicken Bolognese, with a small cake to finish. Dishes take time, so come unhurried. Closed Tuesdays; weekends dinner only.",
    chef_bio: { chef_name: null, roles: ['Owner-chef and sommelier (reviews: "The chef is also a certified sommelier", January 2025; "the owner is managing everything alone", July 2026)'], origin: 'Opened 11 October 2024 (Tabelog).',
      background: 'No source names the owner. "Charming smile from the owner even while working solo… It seems like the owner is managing everything alone" (July 2026); "The chef kindly saw us off at the door despite being busy" (January 2026); "The chef is also a certified sommelier" (January 2025). Corporate-member Tabelog listing: carefully selected chicken, duck and beef steaks; the European-style beef curry is the speciality; wines suggested by the sommelier.',
      philosophy: 'Specialty meat dishes that bring out the ingredients\' natural flavour (Tabelog).', specialty: 'Charcoal-grilled jidori chicken and duck; asparagus cheese gratin; European-style beef curry.',
      anecdotes: [
        { text: '"Upon entering, I was greeted by the owner\'s wonderful smile… It seems like the owner is managing everything alone, and if that\'s the case, I truly want to support such a place." — July 2026, with a son who had just turned 20.', source: R + 'B532249077/' },
        { text: '"It seems they informed the restaurant about one of us being pregnant, as they kindly served the soft-boiled egg for the Caesar salad separately." — July 2026.', source: R + 'B531921602/' },
        { text: '"Personally, I was completely hooked on the green asparagus cheese gratin." — May 2026.', source: R + 'B528535111/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Grill & Bistro K、ビストロ、四谷1-7-10 第3鹿倉ビルB1F B室、JR・東京メトロ四ツ谷駅から徒歩3分、月・水〜金11:30〜14:00 (L.O.13:30)・18:00〜22:30 (L.O.21:30)、土日祝18:00〜22:30、火曜休み、18席 (カウンター8、テーブル10)、貸切20名まで、禁煙、カード可、サービス料なし、スマートカジュアル、子ども可、2024年10月11日オープン、厳選した鶏、鴨、牛のステーキ、名物の欧風ビーフカレー、ソムリエのおすすめワイン、プリフィックスコース7,000円。口コミ(2025年1月〜2026年10月): シェフはソムリエ、オーナーがひとりで切り盛り、アスパラのチーズグラタン、白レバー、フォアグラのブリュレ、炭火の地鶏、鴨、ボロネーゼ1,500円、欧風カレー1,800円、料理に時間がかかる。',
      confidence: 'medium', sources: [TB, R + 'B498803094/', R + 'B520653229/', R + 'B520824959/', R + 'B526090258/', R + 'B528535111/', R + 'B530439437/', R + 'B531921602/', R + 'B532249077/', R + 'B533795826/', R + 'B535327639/', R + 'B537002710/', R + 'B537041985/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small menu, one person serving; ask the owner-sommelier for a wine.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区四谷1-7-10 第3鹿倉ビル B1F B室',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687020, 139.728558); cross-checked: GSI 東京都新宿区四谷一丁目7番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533795826/', R + 'B537041985/'],
    price_note: 'Course from Tabelog (tax included); lunch prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Prix-fixe course (appetizer, potage, main from three, curry or pasta, dessert)', '¥7,000', 'Course', 'ask', 'ask', 'Tabelog.', 'prix_fixe'),
      it('', '', 'European-style beef curry (lunch)', '¥1,800', 'Lunch', 'ask', 'no', 'August and October 2026 reviews.', 'beef_curry'),
      it('', '', 'Red Bolognese of minced duck (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'August 2026 review; large +¥300.', 'duck_bolognese'),
      it('', '', 'Lemon cream pasta with minced chicken (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'August 2026 review.', 'lemon_cream_pasta'),
    ] }, {
    cuisine: '肉とワインのビストロ。炭火で焼く鶏、鴨、牛のステーキに、ソムリエが選ぶワイン (食べログ、2026年10月)・プリフィックスコース7,000円: 前菜、季節の野菜のポタージュ、3種から選ぶメイン、カレーかパスタ、デザート、バゲット (食べログ)。8,000円のコースも (2026年10月)・アラカルトの人気: グリーンアスパラのチーズグラタン、白レバーのユッケやテリーヌ、鶏のタルタル、フォアグラのブリュレ、皮がパリッとした地鶏のグリル、鴨のソテー、鴨のボロネーゼ、シーザーサラダ、カプレーゼ、冷たいじゃがいものスープ (2025〜26年の口コミ)・ランチ: 欧風ビーフカレー1,800円、鴨ひき肉の赤いボロネーゼか鶏ひき肉の白いボロネーゼ1,500円、鶏ひき肉のレモンクリームパスタ1,500円、大盛り +300円、食後にフィナンシェかマドレーヌ (2026年8月・10月)',
    neighborhood: '四谷1-7-10 第3鹿倉ビルB1F B室、Sanei 通り沿い。JR・東京メトロ四ツ谷駅から徒歩3〜5分',
    gf_detail: '要確認。メインは鶏、鴨、牛のグリルだがソースの説明はない。ランチはパスタか欧風ビーフカレー、コースにはバゲット、ランチのあとにフィナンシェかマドレーヌ (2026年の口コミ、食べログのコース)。',
    vegan_detail: '要確認。野菜の料理で名前が出るのはサラダ (半熟卵のシーザー)、季節の野菜のポタージュ、アスパラのチーズグラタンくらいで、メニューは肉が中心。',
    notes: '[フレンチ・四谷、地下でひとりで営む肉とワインのビストロ] Sanei 通りから下りる茶色を基調にした地下に、2024年10月開業の18席のビストロ。口コミによれば、笑顔のオーナーがひとりで料理もワインも接客もこなし、帰りは入口まで見送ってくれる。オーナーはソムリエの資格を持ち (2025年1月)、料理は肉が中心: 皮がパリッとした炭火の地鶏、鴨、牛、白レバーのテリーヌ、フォアグラのブリュレ、そして何人もの客が挙げるグリーンアスパラのチーズグラタン。7,000円のプリフィックスはメインを選べる。2026年に始まったランチは、ビーフシチューのような欧風カレーか、鴨や鶏のボロネーゼで、最後に小さな焼き菓子。料理には時間がかかるので、ゆっくりできる日に。火曜休み、土日は夜のみ。',
  });
}

save();
