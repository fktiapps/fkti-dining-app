// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 26.
//   + 酒と肴と旨いもん 笑緒一 Sake to Sakana to Umaimon Wasshoi (thick mackerel bo-zushi, oden and sake, Fukushima 6-chome)
//   + 隠れ肉バルほむら Kakure Niku Bar Homura (12-seat wagyu chunk-steak bar, opened May 2026, Kamiyama-cho)
//   + 大衆酒場 ホルモンの谷口 Taishu Sakaba Horumon no Taniguchi (Taiwanese-style offal hot pot, Nakatsu)
//   + カフェうえすたん Cafe Uesutan (house-roasted coffee café with Friday–Saturday night hours, Fukushima 6-chome)
//   - ラーメンまこと屋 福島店 27004829 skipped: branch of the Ramen Makotoya chain, already in data (Shibuya, Shinsaibashi).
//   - 浅野日本酒店 27082007 skipped: one of five Asano Nihonshuten shops (Umeda, Kyoto, Sannomiya, Hamamatsucho, Tenjin, the
//     last opening 2026-11-01, per the official site via web search), a multi-city chain still opening shops.
//   - 坂上さちこ 27146753 skipped: the fourth shop of the Sakagami Club group, "expanding to six branches" (April 2026 review).
//   - 串揚げ専門店 健串 梅田中崎町店 27141775 skipped: same-concept branch of 健串, already in data (osaka_kenkushi_shimanouchi).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b25): odd ids in order 27096253, 27155821,
//   27004829, 27082007, 27146753, 27141775, 27136421, 27072145. None of the four drafted is in data/osaka.json (grep by id,
//   name and address, 2026-11-02).
//   Chain check: web search found no operator group for Homura (the Akita Homura-ya is unrelated); Wasshoi, Taniguchi and
//   Uesutan show no other shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27004829', 'ラーメンまこと屋 福島店: branch of the Ramen Makotoya chain, already in data (Shibuya Center-gai Honten, Shinsaibashi).');
skip('27082007', '浅野日本酒店: one of five Asano Nihonshuten shops in five cities (Umeda, Kyoto, Sannomiya, Hamamatsucho, Tenjin opened 2026-11-01), a chain still opening shops.');
skip('27146753', '坂上さちこ: fourth shop of the Sakagami Club group, which a diner says is expanding to six branches (April 2026).');
skip('27141775', '串揚げ専門店 健串 梅田中崎町店: same-concept branch of 健串, already in data (osaka_kenkushi_shimanouchi).');

// ================================================================ 酒と肴と旨いもん 笑緒一
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27096253/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_wasshoi_fukushima', name: '酒と肴と旨いもん 笑緒一 (Sake to Sakana to Umaimon Wasshoi)', category: 'OMNI',
    lat: 34.700981, lng: 135.487487, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Oden in dashi, tempura and fried dishes, sushi with soy sauce; Neapolitan spaghetti is on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, oden in dashi, beef.',
    hours_raw: 'Mon, Tue, Thu–Sun 17:00–24:00 (last order 23:30, last entry 23:00); closed Wednesdays (Tabelog). Charge ¥300; no service charge (Tabelog). No minors, no soft-drink-only guests; private hire for 16 or more, not on Fridays and Saturdays (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 18 seats: 6 at the counter and three tables; smoking allowed (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fukushima 6-chome, 出水ビル 2F above a ramen shop — 7 min north of JR Fukushima Stn',
    cuisine: 'Market fish, Kansai oden in a rich dashi and local sake in a former bar (Tabelog) · signatures: extra-thick grilled mackerel bo-zushi and black-wagyu nigiri seared on the rice side (Tabelog) · 2-hour all-you-can-drink course with both ¥5,000 (Tabelog) · September 2026 prices: mackerel sushi, 2 pieces ¥550; wagyu nigiri, 2 pieces ¥550; sausage in sake lees ¥290; marinated tuna with kimchi ¥390; fried corn ¥490; low-temperature beef liver · obanzai trio, dashimaki, five-kind sashimi, an unagi roll (October 2026); shirako with ponzu (September 2026); nanban-zuke of soft bone, corn tempura, mentaiko-cheese dashimaki (August 2026) · a sake called "Sabadeshu" to match the mackerel (September 2026)',
    website: null, gmaps: gm('酒と肴と旨いもん 笑緒一'), menu_url: null,
    notes: "[Izakaya · Fukushima, mackerel bo-zushi and oden] An eighteen-seat izakaya in a former bar above a ramen shop north of JR Fukushima, whose star is an extra-thick grilled mackerel bo-zushi, two pieces for ¥550, with a matching wagyu nigiri seared on the rice side. Around it come market sashimi, rich-dashi oden, sake-lees sausage and a deep list of local sake; a ¥5,000 course includes two hours of drinks. Business travellers and locals alike call it great value, and the master and staff see guests off at the door. No minors; smoking allowed; open to midnight, closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Master (unnamed) and staff'], origin: null, background: 'Shop text (Tabelog): a space that was once a bar; fresh seafood from the market daily; signature oden with a rich dashi; local sake from across Japan; the extra-thick mackerel sushi and the grilled wagyu nigiri seared on the rice side. A September 2026 diner describes a tough-looking master who bows deeply when seeing guests off.', philosophy: null, specialty: 'Thick mackerel bo-zushi; wagyu nigiri.',
      anecdotes: [
        { text: '"The mackerel sushi is so good that I could eat it forever once it\'s served." — September 2026.', source: R + 'B536495857/' },
        { text: '"A serving of sashimi was under JPY 1,000, and I could try two pieces of nigiri for comparison." — August 2026, a solo visit after 10 pm.', source: R + 'B534035485/' },
        { text: '"Exploring Osaka\'s Fukushima area, I discovered a restaurant where the bōzushi is far superior to the traditional battera." — October 2026.', source: R + 'B537239855/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B477788696/', R + 'B500613688/', R + 'B531165755/', R + 'B531747552/', R + 'B531960765/', R + 'B534035485/', R + 'B534400136/', R + 'B534668773/', R + 'B536495857/', R + 'B537239855/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Welcoming to solo diners (August 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-14-9 出水ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目14番9号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B477788696/'],
    price_note: 'The course from the Tabelog listing (tax included); à la carte from a September 2026 review; ¥300 charge.', last_checked: TODAY, items: [
      it('', '', 'Thick mackerel bo-zushi, 2 pieces', '¥550', 'Sushi', 'ask', 'no', 'September 2026 review.', 'saba_bozushi'),
      it('', '', 'Black-wagyu nigiri, 2 pieces', '¥550', 'Sushi', 'ask', 'no', 'September 2026 review.', 'wagyu_nigiri'),
      it('', '', 'Course with 2-hour all-you-can-drink, incl. mackerel sushi and wagyu nigiri', '¥5,000', 'Course', 'ask', 'no', 'Tabelog listing; July 2026 reviews.', 'course_5000'),
    ] }, {
    cuisine: 'バーだった店で、市場の魚、濃いだしの関西のおでん、地酒 (食べログ)・名物: 炙った極厚のさばの棒寿司と、シャリ側だけ炙る黒毛和牛の握り (食べログ)・両方入った2時間飲み放題つきのコース5,000円 (食べログ)・2026年9月の値段: さば寿司2貫550円、和牛握り2貫550円、酒粕漬けのソーセージ290円、まぐろのキムチ漬け390円、とうもろこしのフライ490円、低温調理の牛レバー・おばんざい3種、だし巻き、刺身5種、うなぎの巻物 (2026年10月)、白子ポン酢 (2026年9月)、軟骨の南蛮漬け、とうもろこしの天ぷら、明太チーズのだし巻き (2026年8月)・さばに合わせた Sabadeshu という日本酒 (2026年9月)',
    neighborhood: '福島6丁目、ラーメン店の上の出水ビル 2階。JR福島駅から北へ徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。だしのおでん、天ぷらや揚げ物、醤油の寿司、ナポリタンもある。',
    vegan_detail: 'ヴィーガンではありません。魚介、だしのおでん、牛肉。',
    notes: '[居酒屋・福島、さばの棒寿司とおでん] JR福島駅の北、ラーメン店の上の、もとはバーだった18席の居酒屋。看板は炙った極厚のさばの棒寿司で2貫550円、シャリ側を炙る和牛の握りも同じ値段。ほかに市場の刺身、濃いだしのおでん、酒粕漬けのソーセージ、地酒が豊富で、5,000円のコースは2時間飲み放題つき。出張の人も地元の人もお得だと言い、マスターとスタッフが店の外まで見送ってくれる。未成年は入れない、喫煙可、深夜0時まで、水曜休み。',
  });
}

// ================================================================ 隠れ肉バルほむら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27155821/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'osaka_kakure_niku_bar_homura', name: '隠れ肉バルほむら (Kakure Niku Bar Homura)', category: 'OMNI',
    lat: 34.703028, lng: 135.505068, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Steak comes with salt, wasabi, a soy-based and a red-wine sauce; courses include a Caesar with croutons, pasta and fries.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef steak bar; mocktails are available.',
    hours_raw: 'Mon, Wed–Sun and holidays 17:30–23:00 (last order 22:30); closed Tuesdays (Tabelog). Opened May 4, 2026 (Tabelog); renewed its menu in August 2026 (2026 reviews). Service charge ¥330 (Tabelog). With the à la carte drinks plan, at least two dishes per person (Tabelog). Cards, IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 12 seats: 8 at the counter and a table for 4; heated tobacco only, in a designated area (Tabelog; 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kamiyama-cho, 日宝東阪急レジャービル 1F — 6 min from Nakazakicho Stn, about 10 min from Umeda',
    cuisine: 'Chunk steaks of domestic beef from farms across Japan and gyu hitsumabushi, with dishes supervised by a chef from a renowned hotel and desserts by a pastry chef (Tabelog) · courses (Tabelog, tax included): 300 g steak of top sirloin and sirloin cap, 10 dishes, with gyu hitsumabushi ¥6,000, or ¥7,500 with all-you-can-drink; à la carte all-you-can-drink 2 hours ¥1,800 · renewal course with all-you-can-drink ¥5,000 (August–October 2026): Caesar salad, three appetizers (frittata, Genovese potato salad, spiced eggplant with carrot râpé), fries seasoned with nodoguro broth, sirloin cap and top sirloin, pasta (meat-bar Bolognese or oil pasta), yuzu sorbet · steak à la carte: sirloin cap 100 g ¥2,000, top sirloin 100 g ¥1,800 (September 2026); Bolognese ¥1,210 (October 2026) · highballs, wine, cocktails and mocktails (Tabelog)',
    website: null, gmaps: gm('隠れ肉バルほむら 神山町'), menu_url: null,
    notes: "[Steak · Umeda, Kamiyama-cho, a hidden twelve-seat meat bar] A small meat bar in a leisure building in Kamiyama-cho, opened in May 2026 and reworked in August, serving thick chunk steaks of domestic beef, sirloin cap and top sirloin, with salt, wasabi or two sauces, under the eye of a hotel-trained chef. The ¥5,000 renewal course with all-you-can-drink, salad, appetizers, steak, a chunky Bolognese and sorbet, drew strong reviews, though several came from invited visits; the regular ¥6,000 course ends in beef hitsumabushi. Steaks à la carte are about ¥2,000 per 100 g. ¥330 service; heated tobacco only; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), from the Marriott group per 2026 reviews; Tabelog says a chef from a renowned hotel supervises', 'Pastry chef (unnamed)'], origin: null, background: 'Shop text (Tabelog): a meat bar for premium Japanese beef steak and gyu hitsumabushi, with downlights and wood; the best domestic beef from farms across Japan; dishes supervised by a chef from a renowned hotel; desserts supervised by a pastry chef. Opened May 4, 2026. 2026 reviews: the menu is supervised by a chef from the Marriott group; a renewal course from August; one September 2026 reviewer was invited to try the course.', philosophy: null, specialty: 'Chunk steak; gyu hitsumabushi.',
      anecdotes: [
        { text: '"It\'s quite rare to find domestic beef steaks for under JPY 2000." — September 2026.', source: R + 'B537090463/' },
        { text: '"The pasta (Niku Bar Bolognese, JPY 1,210) featured chunks of meat instead of ground meat." — October 2026.', source: R + 'B537732612/' },
        { text: '"For the main course, the steak can be enjoyed with four types of sauces: salt, wasabi, soy sauce-based, and wine-based" — September 2026.', source: R + 'B536644232/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B536267426/', R + 'B536342192/', R + 'B536575719/', R + 'B536644232/', R + 'B537090463/', R + 'B537404878/', R + 'B537469938/', R + 'B537732612/', R + 'B537766003/', R + 'B538125753/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Attentive staff; comfortable for solo diners (September–October 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区神山町8-14 日宝東阪急レジャービル 1F ロ号室',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened May 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区神山町8番14号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537090463/'],
    price_note: 'Courses from the Tabelog listing (tax included); à la carte from September–October 2026 reviews; ¥330 service charge.', last_checked: TODAY, items: [
      it('', '', '300 g steak course, 10 dishes, with gyu hitsumabushi', '¥6,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_6000'),
      it('', '', 'The same course with all-you-can-drink', '¥7,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_7500'),
      it('', '', 'Sirloin cap steak, 100 g', '¥2,000', 'Steak', 'ask', 'no', 'September 2026 review.', 'sirloin_cap'),
      it('', '', 'Top sirloin steak, 100 g', '¥1,800', 'Steak', 'ask', 'no', 'September 2026 review.', 'top_sirloin'),
      it('', '', 'Meat-bar Bolognese', '¥1,210', 'Pasta', 'no', 'no', 'October 2026 review.', 'bolognese'),
    ] }, {
    cuisine: '全国の産地から選ぶ国産牛の塊肉ステーキと牛ひつまぶし、有名ホテル出身の料理人の監修とパティシエのデザート (食べログ)・コース (食べログ、税込): ランプとイチボの300gのステーキに牛ひつまぶしの10品6,000円、飲み放題つき7,500円、アラカルトの2時間飲み放題1,800円・飲み放題つきのリニューアルのコース5,000円 (2026年8〜10月): シーザーサラダ、前菜3種 (フリッタータ、ジェノベーゼのポテトサラダ、キャロットラペとスパイスのなす)、のどぐろだしのフライドポテト、イチボとランプ、パスタ (肉バルのボロネーゼかオイルパスタ)、柚子のシャーベット・ステーキの単品: イチボ100g 2,000円、ランプ100g 1,800円 (2026年9月)、ボロネーゼ1,210円 (2026年10月)・ハイボール、ワイン、カクテル、モクテル (食べログ)',
    neighborhood: '神山町、日宝東阪急レジャービル 1階。中崎町駅から徒歩6分、梅田から10分ほど',
    gf_detail: '要確認。グルテンの情報なし。ステーキは塩、わさび、醤油ベースと赤ワインのソースで、コースにはクルトンのシーザーサラダ、パスタ、フライドポテトがある。',
    vegan_detail: 'ヴィーガンではありません。牛のステーキのバルで、モクテルはある。',
    notes: '[ステーキ・梅田神山町、12席の隠れ家の肉バル] 神山町のレジャービルにある小さな肉バルで、2026年5月オープン、8月にメニューを一新。国産牛のイチボとランプの厚い塊肉のステーキを、塩、わさび、2種のソースで、ホテル出身の料理人の監修。飲み放題つきで、サラダ、前菜、ステーキ、肉の大きいボロネーゼ、シャーベットまでのリニューアルのコース5,000円が好評 (招待での訪問の口コミも混じる)。通常の6,000円のコースは締めが牛ひつまぶし。ステーキの単品は100gで2,000円ほど。サービス料330円、加熱式たばこのみ、火曜休み。',
  });
}

// ================================================================ 大衆酒場 ホルモンの谷口
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27136421/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_horumon_no_taniguchi', name: '大衆酒場 ホルモンの谷口 (Taishu Sakaba Horumon no Taniguchi)', category: 'OMNI',
    lat: 34.71009, lng: 135.497038, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The hot pot broth is soy sauce or miso based, finished with noodles or zosui; fried tofu with sweet soy sauce, shrimp mayo.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: offal, minced pork and clam hot pot.',
    hours_raw: 'Mon–Sat and days before holidays 17:00–24:00; closed Sundays (Tabelog). Bookings cancelled 30 minutes after the time without contact (Tabelog). Seating fee ¥250 (Tabelog). Opened June 1, 2023 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay, PayPay, d Barai, Rakuten Pay, au PAY, Alipay (Tabelog). 14 seats at tables (four for 4, three for 2); private hire 10 or more; smoking allowed and no one under 20 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Toyosaki, Nakatsu — 1 min from Nakatsu Stn (Midosuji Line)',
    cuisine: 'Taiwanese-style offal hot pot by a cook with 20 years of motsunabe: domestic horumon with long-simmered Taiwanese minced pork; homemade thick fried tofu with sweet soy sauce (Tabelog) · the hot pot ¥2,880 per person, two servings minimum: fresh liver grilled first, then horumon, minced pork, clams, bean sprouts, cabbage and chives in a soy or miso broth, spice level 1–5, finished with noodles or egg-and-nori zosui; lean meat +¥800 (August–September 2026) · courses with all-you-can-drink (Tabelog, tax included): ¥4,950, ¥5,550, ¥6,550 · sides: braised beef tongue ¥780, wagyu tataki yukhoe, green-onion-salt beef-tongue yukhoe, special potato salad, shrimp mayo (2026) · Asahi Super Dry and Sapporo Akaboshi (Tabelog)',
    website: null, gmaps: gm('大衆酒場 ホルモンの谷口 中津'), menu_url: null,
    notes: "[Hot pot · Nakatsu, Taiwanese-style offal hot pot] A fourteen-seat tavern a minute from Nakatsu Station, opened in 2023 by a cook with twenty years of making motsunabe, built around one dish: a Taiwanese-style hot pot of domestic horumon, long-simmered Taiwanese minced pork and clams in a soy or miso broth, spiced from level 1 to 5, with the staff assembling it at the table after you grill some fresh liver. Finish with noodles or zosui. The hot pot is ¥2,880 a head (two minimum), or ¥4,950 up with all-you-can-drink; yukhoe and braised tongue on the side. Smoking allowed, no under-20s; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Master (unnamed), 20 years of making motsunabe (Tabelog)'], origin: null, background: 'Shop text (Tabelog): the chef has spent 20 years perfecting motsunabe, with deep knowledge of horumon; the signature Taiwanese-style braised meat of rich Taiwanese minced meat with high-quality domestic horumon; homemade thick fried tofu with a special sweet soy sauce; private hire for 10 or more. Opened June 1, 2023.', philosophy: null, specialty: 'Taiwanese-style horumon hot pot.',
      anecdotes: [
        { text: '"The liver served at the beginning was seasoned and easy to eat, without any unpleasant bitterness." — August 2026.', source: R + 'B529989271/' },
        { text: '"It felt like a combination of Taiwanese ramen and meat hot pot." — September 2026.', source: R + 'B536393650/' },
        { text: '"It\'s also incredibly convenient that the staff prepares the hot pot for you!" — October 2026.', source: R + 'B537729123/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B529989271/', R + 'B534497361/', R + 'B535010390/', R + 'B535017907/', R + 'B535844438/', R + 'B535938818/', R + 'B535979205/', R + 'B536393650/', R + 'B536612989/', R + 'B537729123/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain and assemble the hot pot (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区豊崎3-17-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区豊崎三丁目17番9号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529989271/'],
    price_note: 'Courses from the Tabelog listing (tax included); à la carte from August 2026 reviews; ¥250 seating fee.', last_checked: TODAY, items: [
      it('', '', 'Taiwanese-style horumon hot pot with fresh liver and a finish, per person (2 minimum)', '¥2,880', 'Hot pot', 'ask', 'no', 'August 2026 reviews.', 'hotpot'),
      it('', '', 'Hot pot set with all-you-can-drink', '¥4,950', 'Course', 'ask', 'no', 'Tabelog listing; October 2026 review.', 'set_4950'),
      it('', '', 'Braised beef tongue', '¥780', 'Sides', 'ask', 'no', 'August 2026 review.', 'beef_tongue'),
    ] }, {
    cuisine: 'もつ鍋を20年作ってきた料理人の台湾風のホルモン鍋: 国産ホルモンと長く煮込んだ台湾ミンチ、自家製の厚揚げの甘い醤油 (食べログ)・鍋は1人2,880円、2人前から: 最初に新鮮なレバーを焼き、ホルモン、台湾ミンチ、あさり、もやし、キャベツ、ニラを醤油か味噌のスープで、辛さは1〜5、締めは麺か海苔と卵の雑炊、赤身に替えると+800円 (2026年8〜9月)・飲み放題つきのコース (食べログ、税込): 4,950円、5,550円、6,550円・サイド: 牛タンの煮込み780円、和牛たたきのユッケ、ねぎ塩牛タンのユッケ、特製ポテトサラダ、エビマヨ (2026年)・Asahi Super Dry と Sapporo Akaboshi (食べログ)',
    neighborhood: '豊崎、中津。中津駅 (御堂筋線) から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。鍋は醤油か味噌のスープで、締めは麺か雑炊。厚揚げの甘い醤油、エビマヨもある。',
    vegan_detail: 'ヴィーガンではありません。ホルモン、豚ミンチ、あさりの鍋。',
    notes: '[鍋・中津、台湾風のホルモン鍋] 中津駅から徒歩1分の14席の大衆酒場で、もつ鍋を20年作ってきた料理人が2023年に開いた。看板は台湾風の鍋ひとつ: 国産ホルモン、長く煮込んだ台湾ミンチ、あさりを醤油か味噌のスープで、辛さは1〜5、先に新鮮なレバーを焼いたあと、店の人が鍋を組んでくれる。締めは麺か雑炊。鍋は1人2,880円 (2人前から)、飲み放題つきは4,950円から、サイドにユッケや牛タンの煮込み。喫煙可、20歳未満は入れない、日曜休み。',
  });
}

// ================================================================ カフェうえすたん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27072145/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://cafewestern.com/';
  const WD = day(['10:00', '20:00']), FR = day(['20:00', '23:30']), SA = day(['08:45', '17:30'], ['20:00', '23:30']), SU = day(['08:00', '18:00']);
  put({
    id: 'osaka_cafe_uesutan_fukushima', name: 'カフェうえすたん (Cafe Uesutan)', category: 'OMNI',
    lat: 34.7, lng: 135.487401, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sweets include cheesecake and a toasted-bread dessert.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and cold brew; milk drinks, cream-topped Einspänner and dairy desserts make up much of the menu.',
    hours_raw: 'Mon–Wed 10:00–20:00; Fri 20:00–23:30; Sat 8:45–17:30 and 20:00–23:30; Sun 8:00–18:00; closed Thursdays; hours may change (Tabelog). The Friday and Saturday night hours are a "night café" (January 2026). Opened March 21, 2013 (Tabelog). Cash only (Tabelog; March and September 2026). 18 seats: 10 at the counter and two tables for 4; non-smoking; children welcome (Tabelog). A December 2025 diner saw foreign guests and believes there is an English menu.',
    hours: { 0: WD, 1: WD, 2: WD, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Fukushima 6-chome, 神林堂ビル 1F, a quiet lane just north of JR Fukushima Stn — 5 min walk',
    cuisine: 'Coffee roasted in house and brewed through a flannel filter; the house Nishida Blend (2026 reviews) · café au lait ¥650 (January 2026); cold brew with Einspänner cream ¥1,200 (May 2024); Einspänner hot or iced with pepper on the cream (December 2025); standard Colombian; café latte (2025–2026) · cake set of chunky cheesecake and coffee ¥1,250 (March 2026); toasted bread with fresh cream, vanilla ice cream and cinnamon; an affogato-style sweet (January 2026)',
    website: WEB, gmaps: gm('カフェうえすたん 福島'), menu_url: null,
    notes: "[Café · Fukushima, house-roasted coffee by day and night] An eighteen-seat coffee café in a quiet lane north of JR Fukushima, open since 2013, where the owner roasts the beans and brews through flannel: a strong standard Colombian, the house Nishida Blend, and an Einspänner with cream and a dusting of pepper that regulars return for, hot or iced. Sweets are old-fashioned, a cheesecake with chunks of cheese, toast with cream and ice cream. Concrete walls and wood furniture; on Friday and Saturday nights it reopens as a night café until 11:30 pm, and it fills when concerts end at The Symphony Hall nearby. Cash only; closed Thursdays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), roasts the coffee (January 2026)', 'Manager (February 2026)'], origin: null, background: 'Reviews: coffee from beans roasted by the owner; the original Nishida Blend is popular; on Friday and Saturday nights it becomes a "Night Café" open until 11:30 pm (January 2026); house-roasted, flannel-drip coffee (September 2026). Opened March 21, 2013 (Tabelog). The Tabelog listing is not shop-maintained.', philosophy: null, specialty: 'Einspänner; flannel-drip coffee.',
      anecdotes: [
        { text: '"Moreover, the pepper sprinkled on top of the cream adds a delightful accent." — December 2025, the Einspänner.', source: R + 'B485721457/' },
        { text: '"As mentioned on the menu, the cheesecake is packed with chunks of cheese, making it quite satisfying." — March 2026.', source: R + 'B524310046/' },
        { text: '"For those who love strong coffee, this place is perfect!" — September 2026, after a concert at The Symphony Hall.', source: R + 'B536481936/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B460076570/', R + 'B475986479/', R + 'B485714914/', R + 'B485721457/', R + 'B515563978/', R + 'B517639704/', R + 'B521327010/', R + 'B524310046/', R + 'B532544941/', R + 'B536481936/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A December 2025 diner saw foreign guests and believes there is an English menu; unconfirmed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-9-11 神林堂ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目9番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B460076570/', R + 'B524310046/', R + 'B485714914/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Café au lait', '¥650', 'Coffee', '', 'no', 'January 2026 review.', 'cafe_au_lait'),
      it('', '', 'Cheesecake set with coffee', '¥1,250', 'Sets', 'ask', 'no', 'March 2026 review.', 'cake_set'),
      it('', '', 'Cold brew with Einspänner cream', '¥1,200', 'Coffee', '', 'no', 'May 2024 review.', 'einspanner'),
    ] }, {
    cuisine: '店で焙煎し、ネルで淹れるコーヒー、オリジナルの Nishida ブレンド (2026年の口コミ)・カフェオレ650円 (2026年1月)、水出しコーヒーのアインシュペナー1,200円 (2024年5月)、クリームにこしょうをふったホットかアイスのアインシュペナー (2025年12月)、スタンダードのコロンビア、カフェラテ (2025〜2026年)・チーズのかたまりが入ったチーズケーキとコーヒーのケーキセット1,250円 (2026年3月)、生クリームとバニラアイスとシナモンの焼いたパン、アフォガートのような甘いもの (2026年1月)',
    neighborhood: '福島6丁目、JR福島駅のすぐ北の静かな路地の神林堂ビル 1階。徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。甘いものはチーズケーキや焼いたパンのデザート。',
    vegan_detail: '要確認。ブラックコーヒーや水出しコーヒーはあるが、ミルクの飲み物、クリームのアインシュペナー、乳製品のデザートが多い。',
    notes: '[カフェ・福島、昼も夜も自家焙煎のコーヒー] JR福島駅の北の静かな路地にある18席のコーヒーの店で、2013年から。店主が豆を焙煎してネルで淹れる: 濃いめのスタンダードのコロンビア、店の Nishida ブレンド、常連が通うクリームにこしょうをふったアインシュペナー (ホットもアイスも)。甘いものは昔ながらで、チーズのかたまりが入ったチーズケーキ、クリームとアイスのトースト。コンクリートの壁と木の家具の店で、金・土の夜は23時30分までのナイトカフェに。近くの The Symphony Hall の公演のあとは満席になることも。現金のみ、木曜休み。',
  });
}

save();
