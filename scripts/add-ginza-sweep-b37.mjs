// Ginza Station half-mile sweep (805 m), batch 37 — three more soba places from the Tabelog crawl candidates (all OMNI).
//   + 有明そば (neighbourhood soba-and-set-meal shop behind the Kabukiza; owner not named)
//   + 蕎麦割烹 橙 (soba kappō in the Wakiya building; Iron Chef Wakiya's soba-and-Chinese counter, chef Mori)
//   + 銀座 蕎麦悠 (soba kaiseki on Marronnier-dōri, 21 seats with private rooms and live piano; owner not named)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 有明そば
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13068976/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_ariake_soba_higashi_ginza', name: '有明そば (Ariake Soba)', category: 'OMNI',
    lat: 35.670634, lng: 139.769158,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. A soba-and-udon shop with tempura set meals, tendon and menchi-katsu; the soba\'s buckwheat ratio is not published. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: tempura with shrimp and whiting, menchi-katsu, yakitori, sashimi and niku-dōfu; kitsune udon comes in a broth whose stock is not described.',
    hours_raw: 'Lunch 11:30–14:00; dinner from 17:00; closed Saturdays, Sundays and holidays (Tabelog). Closing time not listed. Cash only.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme behind the Kabukiza — about 3 min from Higashi-Ginza Stn',
    cuisine: 'Old-style neighbourhood soba shop · ¥1,200 set meals with soba or udon · cheap izakaya snacks at night', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('有明そば 銀座3-12-6'), menu_url: null,
    notes: "[Soba · the neighbourhood soba shop behind the Kabukiza] A nostalgic 29-seat soba shop behind the Kabukiza, with tables and a nine-seat counter facing the kitchen. At lunch office workers come for two daily set meals, usually one of them fried. The namesake 'Ariake' tempura set has shrimp, whiting and shishitō with rice, and you choose soba, udon or miso soup (¥1,200 in 2026). There is also a menchi-katsu set, a tendon set with miso soup (¥1,050) and kitsune udon (¥650). Arrive before noon to avoid a wait. From 17:00 it turns into a cheap solo-drinker's counter: okara as the appetiser, octopus and tuna sashimi, shishamo, chive omelette, yakitori and niku-dōfu, with soba to finish if you get that far. Cash only.",
    chef_bio: {
      chef_name: null, roles: [], origin: 'Behind the Kabukiza; founding date not found in a source read',
      background: 'No source names the owner.', philosophy: null, specialty: 'Ariake tempura set; tendon; soba.',
      anecdotes: [
        { text: '"When you order a set meal, you\'ll be asked if you prefer soba or udon, or if you\'d like miso soup." — May 2026.', source: R + 'B528093316/' },
        { text: '"Although it\'s a soba restaurant, they offer a variety of delicious and affordable snacks. Ideally, you\'d want to finish off with some soba, but often you might not make it that far." — July 2026.', source: R + 'B514619884/' },
        { text: 'A six-visit regular compares it with another soba shop nearby: a bit cheaper, with a decent chance of a seat (October 2026).', source: R + 'B517098395/' },
      ],
      japanese_sources_summary: '食べログ: 有明そば、銀座3-12-6、東銀座駅から222m、29席(テーブル20・カウンター9)、11:30〜14:00・17:00〜、土日祝休、カード・電子マネー・QR不可。2026年の口コミ: 日替わり定食2種(1,200円)、天ぷら定食「有明」1,200円(海老・鱚・ししとう)、蕎麦・うどん・味噌汁から選択、メンチカツ定食、天丼1,050円、きつねうどん650円、夜はお通しの卯の花、タコ・マグロの刺身、ししゃも、ニラ玉、焼き鳥、肉どうふ。',
      confidence: 'low', sources: [TB, R + 'B528093316/', R + 'B517098395/', R + 'B514619884/', R + 'B526661931/', R + 'B527725546/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Busy office-worker lunch spot; counter seats free up fastest. Cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Tempura and menchi-katsu set meals.', source: R + 'B528093316/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-12-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目12番6号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528093316/', R + 'B517098395/'],
    price_note: 'Prices from 2026 Tabelog reviews.', last_checked: TODAY, items: [
      it('天ぷら定食「有明」', 'tenpura teishoku ariake', '"Ariake" tempura set (shrimp, whiting, shishitō) with soba, udon or miso soup', '¥1,200', 'Set meals', 'no', 'no', '2026.', 'ariake_set'),
      it('日替わり定食', 'higawari teishoku', 'Daily set meal', '¥1,200', 'Set meals', '', '', '2026.', 'daily_set'),
      it('天丼', 'tendon', 'Tendon with miso soup', '¥1,050', 'Rice bowls', 'no', 'no', '2026.', 'tendon'),
      it('きつねうどん', 'kitsune udon', 'Kitsune udon', '¥650', 'Noodles', 'no', 'ask', '2026.', 'kitsune_udon'),
      it('冷やしとろろそば', 'hiyashi tororo soba', 'Chilled soba with grated yam', '', 'Noodles', 'no', 'ask', '', 'tororo_soba'),
      it('肉どうふ', 'niku doufu', 'Niku-dōfu (simmered beef and tofu)', '', 'Small plates', 'ask', 'no', '', 'niku_dofu'),
    ] }, {
    cuisine: '昔ながらの町のそば屋・蕎麦かうどんを選べる1,200円の定食・夜は手頃なつまみ',
    neighborhood: '銀座三丁目、歌舞伎座の裏。東銀座駅から徒歩3分ほど',
    gf_detail: 'グルテンフリーではありません。蕎麦とうどんの店で、天ぷら定食、天丼、メンチカツなど。そば粉の割合は公表されていません。',
    vegan_detail: '記述上はヴィーガンではありません。海老・鱚の天ぷら、メンチカツ、焼き鳥、刺身、肉どうふ。きつねうどんも出汁は書かれていません。',
    notes: '[そば・歌舞伎座裏の町のそば屋] 歌舞伎座の裏にある懐かしい雰囲気の29席のそば屋で、テーブルと厨房前のカウンター9席。昼は会社員が日替わり定食2種(たいてい1つは揚げ物)を目当てに。店名を冠した天ぷら定食「有明」は海老・鱚・ししとうにご飯、蕎麦・うどん・味噌汁から選べて2026年は1,200円。メンチカツ定食、味噌汁付きの天丼(1,050円)、きつねうどん(650円)も。正午前なら待たずに入れることが多いそう。17時からは手頃な一人飲みのカウンターに変わり、お通しの卯の花、タコやマグロの刺身、ししゃも、ニラ玉、焼き鳥、肉どうふ、締めに蕎麦。現金のみ。',
  });
}

// ================================================================ 蕎麦割烹 橙
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13292504/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['12:00', '15:00'], ['17:00', '22:00']), we = day(['12:00', '22:00']);
  put({
    id: 'tokyo_soba_kappo_daidai', name: '蕎麦割烹 橙 (Soba Kappō Daidai)', category: 'OMNI',
    lat: 35.6698, lng: 139.765555,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free: a soba-and-Chinese course with fried soba dumplings, tempura, sukiyaki in a sauce made from soba kaeshi (soy-based) and Chinese dishes such as shark-fin omelette and tonpōrō. No gluten-free course is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: courses of shark fin, abalone, karasumi, sea urchin and caviar, turtle soup, chicken and pork.',
    hours_raw: 'Tue–Fri 12:00–15:00 (L.O. 14:30) and 17:00–22:00 (L.O. 21:00); Sat and Sun 12:00–22:00; closed Mondays (Tabelog). 10% service charge. Cards accepted. Calling ahead is advised.',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme between Chūō-dōri and Shōwa-dōri, 3F of a black building — 2 min from Higashi-Ginza Stn',
    cuisine: 'Soba kappō with Chinese cuisine from Wakiya · shark-fin soba, karasumi soba · 8-seat counter', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('蕎麦割烹 橙 銀座5-10-5'), menu_url: null,
    notes: "[Soba · soba kappō meets Wakiya's Chinese] An eight-seat counter, with a four-person private room, on the third floor of the Wakiya building in Ginza 5-chōme, easy to miss. Reviewers say the Iron Chef of Chinese cuisine, Wakiya, opened it out of a love for soba and greets guests at the start, while Chef Mori does the cooking and a manager-sommelier pours sake. Courses mix the two kitchens. A ¥15,000 soba-kappō course in 2026 ran to appetizers, fried soba dumplings, karasumi soba, shark-fin omelette, tonpōrō, tempura, seiro soba, warm soba and a Dattan-tea pudding. Other diners mention sukiyaki in a sauce built on soba kaeshi, abalone with soba grains, soba dumplings with uni and caviar, and shark-fin soba. Special events include a summer new-soba gathering and a one-day Daidai × Wakiya collaboration menu. Expect ¥15,000–40,000 a head plus 10% service.",
    chef_bio: {
      chef_name: 'Chef Mori (soba and cooking)', roles: ['chef'], origin: 'In the Wakiya building, Ginza 5-chōme',
      background: 'Reviewers describe chef Mori cooking, with a manager-sommelier, and the Chinese chef Wakiya greeting guests as the shop\'s founder.',
      philosophy: null, specialty: 'Karasumi soba; shark-fin soba; fried soba dumplings.',
      anecdotes: [
        { text: '"At the start of the course, Chef Wakiya, the Iron Chef from the TV show \'Iron Chef\' who specializes in Chinese cuisine, came to greet us. He opened this restaurant combining Japanese soba and Chinese cuisine due to his passion for soba." — August 2026.', source: R + 'B533102552/' },
        { text: 'For a September 2026 collaboration night the chef handwrote the menu using a rubber stamp the chef had carved with the names WAKIYA and Daidai.', source: R + 'B525463079/' },
        { text: '"I had no idea that soba and shark fin could pair so well together." — October 2026.', source: R + 'B537778799/' },
      ],
      japanese_sources_summary: '食べログ: 蕎麦割烹 橙、銀座5-10-5 スリーY\'S & D 3F、東銀座駅から139m、12席(カウンター8・個室4)、火〜金12:00〜15:00・17:00〜22:00、土日12:00〜22:00、月休、サービス料10%、カード可、予算2〜3万円。2026年の口コミ: Wakiya氏(料理の鉄人)が蕎麦好きから開いた蕎麦と中華の店、森料理長、ソムリエ兼店長、蕎麦割烹コース15,000円(先付、蕎麦の揚げ餃子、からすみ蕎麦、フカヒレ入り玉子、東坡肉、天ぷら、せいろ、温かい蕎麦、韃靼茶プリン)、かえしの割下のすき焼き、鮑と蕎麦の実、雲丹とキャビアの蕎麦餃子、フカヒレ蕎麦、夏の新蕎麦の会、Wakiyaとのコラボ。',
      confidence: 'low', sources: [TB, R + 'B533102552/', R + 'B525463079/', R + 'B479129396/', R + 'B533316057/', R + 'B536419661/', R + 'B537778799/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet, dim counter; drinks menu on a tablet. Book ahead — only eight counter seats.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Fried soba dumplings and tempura in the course.', source: R + 'B533102552/' }], soy_sauce_wheat: [{ text: 'Sukiyaki made with a sauce created from soba kaeshi.', source: R + 'B533316057/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-10-5 スリーY\'S & D 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目10番5号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533102552/', R + 'B537778799/'],
    price_note: 'Course price from an August 2026 review; 10% service charge (Tabelog).', last_checked: TODAY, items: [
      it('蕎麦割烹コース', 'soba kappou koosu', 'Soba-kappō course (nine dishes, soba and Chinese)', '¥15,000', 'Courses', 'no', 'no', '2026.', 'kappo_course'),
      it('フカヒレ蕎麦', 'fukahire soba', 'Shark-fin soba', '', 'Soba', 'no', 'no', '', 'shark_fin_soba'),
      it('からすみ蕎麦', 'karasumi soba', 'Soba with karasumi (mullet roe)', '', 'Soba', 'ask', 'no', '', 'karasumi_soba'),
    ] }, {
    cuisine: '脇屋の中華を合わせる蕎麦割烹・フカヒレ蕎麦、からすみ蕎麦・カウンター8席',
    neighborhood: '銀座五丁目、中央通りと昭和通りの間の黒いビル3F。東銀座駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。蕎麦と中華のコースで、蕎麦の揚げ餃子、天ぷら、かえし(醤油ベース)の割下のすき焼き、フカヒレ入り玉子や東坡肉など。グルテンフリーのコースは記載がありません。',
    vegan_detail: 'ヴィーガンではありません。フカヒレ、鮑、からすみ、雲丹、キャビア、すっぽん、鶏、豚のコース。',
    notes: '[そば・蕎麦割烹と脇屋の中華] 銀座五丁目のWakiyaのビル3階、見落としそうな入口のカウンター8席と4人の個室。口コミによれば、料理の鉄人・Wakiya氏が蕎麦好きから開いた店で、コースの始めに挨拶に来ることも。料理は森料理長、日本酒はソムリエ兼店長。コースは二つの厨房の融合で、2026年の15,000円の蕎麦割烹コースは先付、蕎麦の揚げ餃子、からすみ蕎麦、フカヒレ入り玉子、東坡肉、天ぷら、せいろ、温かい蕎麦、韃靼茶のプリン。かえしの割下のすき焼き、鮑と蕎麦の実のご飯、雲丹とキャビアの蕎麦餃子、フカヒレ蕎麦も。夏の新蕎麦の会や、橙×Wakiyaの一夜限りのコラボも開かれます。予算は1人1.5〜4万円+サービス料10%。',
  });
}

// ================================================================ 銀座 蕎麦悠
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13316283/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '15:00'], ['16:00', '23:00']);
  put({
    id: 'tokyo_ginza_soba_yu', name: '銀座 蕎麦悠 (Ginza Soba Yū)', category: 'OMNI',
    lat: 35.67209, lng: 139.768301,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free: soba kaiseki with tempura (conger eel), handmade soba of unpublished buckwheat ratio, and soy-based broths. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: courses of sashimi, caviar soba with egg, conger-eel tempura and duck nanban.',
    hours_raw: 'Daily 11:00–15:00 and 16:00–23:00; closing days vary (Tabelog). Cards, e-money and QR (incl. Alipay, WeChat Pay) accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 2-chōme on Marronnier-dōri, 8F — 3–5 min from Ginza-itchōme or Higashi-Ginza Stn',
    cuisine: 'Soba kaiseki on Marronnier-dōri · caviar soba · counter, private rooms and live piano', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('銀座 蕎麦悠 銀座2-10-11 マロニエ通り銀座館'), menu_url: null,
    notes: "[Soba · soba kaiseki above Marronnier-dōri] An eighth-floor soba-kaiseki room on Marronnier-dōri with a nine-seat counter, private rooms for 2–12 and live piano, used for business dinners with overseas guests. The kaiseki builds to the soba: elaborate appetizers with lotus root and buckwheat grains, a sashimi platter of shrimp, tuna and sea urchin, conger-eel tempura, and handmade soba at the end. A course was ¥20,000 in August 2026. The signature caviar soba also comes in a lunch course, and one diner ate squid sashimi with caviar instead of soy sauce. At a simpler lunch, sudachi soba, zaru soba and duck nanban are cooked in an open kitchen. One July 2026 diner found the tempura soggy and the prices high for the location.",
    chef_bio: {
      chef_name: null, roles: [], origin: 'Marronnier-dōri, Ginza 2-chōme; opening date not found in a source read',
      background: 'No source read names the owner or chef.', philosophy: null, specialty: 'Caviar soba; soba kaiseki.',
      anecdotes: [
        { text: '"Instead of pushing the soba to the forefront from the start, the meal allows you to savor the flow of kaiseki cuisine, leading you to the soba at the end." — August 2026.', source: R + 'B533142437/' },
        { text: '"The squid sashimi paired with caviar — \'not with soy sauce, but with caviar\' — was a remarkable combination." — October 2026.', source: R + 'B537252832/' },
        { text: '"I visited this restaurant for a business meeting with overseas guests. I was grateful for the private room accommodation." — October 2026.', source: R + 'B537978523/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 蕎麦悠、銀座2-10-11 マロニエ通り銀座館8F、21席(カウンター9・個室2〜12名)、毎日11:00〜15:00・16:00〜23:00、不定休、カード・電子マネー・QR(Alipay・WeChat Pay)可、夜8,000〜9,999円。2026年の口コミ: 蕎麦懐石、先付(蓮根・蕎麦の実)、海老・鮪・雲丹の刺盛、穴子の天ぷら、手打ち蕎麦、20,000円のコース、キャビア蕎麦のランチコース、すだち蕎麦・ざる・鴨南蛮、オープンキッチン、ピアノの生演奏、個室で接待、天ぷらが油っぽいとの不満も。',
      confidence: 'low', sources: [TB, R + 'B533142437/', R + 'B533811110/', R + 'B537252832/', R + 'B536079952/', R + 'B537978523/', R + 'B531820163/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Polished room with private rooms; suits business dinners and overseas guests. Live piano.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Conger-eel tempura in the course.', source: R + 'B537252832/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-10-11 マロニエ通り銀座館 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目10番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533811110/', R + 'B537252832/', R + 'B536079952/'],
    price_note: 'Course price from an August 2026 review.', last_checked: TODAY, items: [
      it('蕎麦懐石コース', 'soba kaiseki koosu', 'Soba kaiseki course', '¥20,000', 'Courses', 'no', 'no', '2026.', 'kaiseki_course'),
      it('キャビア蕎麦', 'kyabia soba', 'Caviar soba', '', 'Soba', 'ask', 'no', '', 'caviar_soba'),
      it('すだち蕎麦', 'sudachi soba', 'Chilled sudachi soba (lunch)', '', 'Soba', 'no', 'ask', '', 'sudachi_soba'),
      it('鴨南蛮', 'kamo nanban', 'Duck nanban soba', '', 'Soba', 'no', 'no', '', 'kamo_nanban'),
    ] }, {
    cuisine: 'マロニエ通りの蕎麦懐石・キャビア蕎麦・カウンターと個室、ピアノの生演奏',
    neighborhood: '銀座二丁目、マロニエ通り銀座館8F。銀座一丁目駅・東銀座駅から徒歩3〜5分',
    gf_detail: 'グルテンフリーではありません。穴子の天ぷら、そば粉の割合が公表されていない手打ち蕎麦、醤油ベースのつゆの蕎麦懐石。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。刺身、卵を合わせたキャビア蕎麦、穴子の天ぷら、鴨南蛮のコース。',
    notes: '[そば・マロニエ通りの蕎麦懐石] マロニエ通りのビル8階にある蕎麦懐石の店で、カウンター9席と2〜12名の個室、ピアノの生演奏があり、海外客との接待にも使われます。懐石は蕎麦へと流れを作る構成で、蓮根や蕎麦の実を使った凝った先付、海老・鮪・雲丹の刺盛、穴子の天ぷら、最後に手打ち蕎麦。2026年8月のコースは20,000円。名物のキャビア蕎麦はランチのコースにもあり、醤油の代わりにキャビアで食べるイカの刺身も。気軽な昼はすだち蕎麦、ざる、鴨南蛮をオープンキッチンで。2026年7月には天ぷらが油っぽく場所代が高いとの口コミも。',
  });
}

save();
