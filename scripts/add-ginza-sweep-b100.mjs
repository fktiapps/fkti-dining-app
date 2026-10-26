// Ginza Station half-mile sweep (805 m), batch 100 — unknown-seat tail (all OMNI).
//   + 大松屋 銀座本店 (Yamagata cuisine around an irori; itasoba)
//   + Za Kitchen (tiny weekday-lunch Napolitan counter on Ginza Renga-dōri)
//   + 歌舞伎茶屋 房の駅 (soba and café in the Kabukiza basement)
//   + 銀座サンド (takeaway katsu-sandwich shop from Kitashinchi Sand; open late)
// Skipped: 肉屋のハンバーグとガーリックライス 銀座店 (13269427; only review is from 2022) and
// い組 (13124161; introduction-only, reviews describe two different cuisines).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 大松屋 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13007774/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:40', '13:40'], ['17:00', '21:30']);
  put({
    id: 'tokyo_omatsuya_ginza_honten', name: '大松屋 銀座本店 (Omatsuya Ginza)', category: 'OMNI',
    lat: 35.671017, lng: 139.763679,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yamagata regional cooking: irori-grilled vegetables, konnyaku, taro, tsukune, hatahata and magnolia-leaf beef, sashimi, and itasoba to finish (buckwheat ratio not stated); no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include sashimi, tsukune, fish and beef; grilled vegetables appear but seasonings are not described.',
    hours_raw: 'Mon–Sat 11:40–13:40 and 17:00–21:30; closed Sundays and holidays (Tabelog; may change). Separated smoking area.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Nishi-Gobangai Bldg 7F, a back-street building (moved from the Eldor Bldg, 6-5-8) — 1 min from Ginza Stn',
    cuisine: 'Yamagata regional cuisine around an irori hearth · skewers grilled in front of you · sashimi · magnolia-leaf beef · Yamagata itasoba to finish · local sake poured from bamboo', cuisine_type: 'other',
    website: 'http://ginza.omatsuya.jp/', gmaps: gm('大松屋 銀座本店 西五番街ビル'), menu_url: null,
    notes: "[Regional · Yamagata around an irori, seven floors up a Ginza back street] Step out of the lift in an ordinary back-street building and you're in what feels like an old hot-spring inn, with an irori hearth where vegetable and fish skewers are grilled in front of you. The cooking is Yamagata's: sweet peppers, konnyaku, taro, tsukune and hatahata over the coals, beef grilled in a magnolia leaf, sashimi, and the prefecture's itasoba to finish. Local sake comes in a bamboo tube and is poured from a height. Courses start with six small appetisers; dinner runs ¥8,000–15,000. Reviewers praise the owner's and staff's warmth, and it's a favourite for business entertaining and farewells. Moved here from the Eldor Building.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza main shop; relocated from Eldor Bldg 2F, Ginza 6-5-8 (Tabelog remarks)', background: 'No source names the owner.', philosophy: null, specialty: 'Irori grilling; itasoba.',
      anecdotes: [
        { text: '"We enjoyed sweet peppers, konnyaku, taro, tsukune (chicken meatballs), hata hata (a type of fish), and finished with grilled beef wrapped in magnolia leaves. To top it all off, we had Yamagata\'s itasoba." — May 2026, with a friend from Tsuruoka.', source: R + 'B527771193/' },
        { text: '"The restaurant is situated in a seemingly ordinary building on a back street in Ginza… But once you step out of the elevator, it’s like entering a whole new world." — December 2025.', source: R + 'B511349560/' },
      ],
      japanese_sources_summary: '食べログ: 大松屋 銀座本店、銀座5-6-13 西五番街ビル7F、銀座駅から105m、月〜土11:40〜13:40・17:00〜21:30、日祝休、公式サイト ginza.omatsuya.jp、備考に「中央区銀座6-5-8 エルドールビル2Fより移転」。口コミ(2025〜2026年): 囲炉裏で目の前で焼く野菜の串、美しい刺身、温泉宿のような雰囲気、裏通りの古いビルからエレベーターを降りると別世界、コースのアテ6種、店主とスタッフの気配り、分煙の喫煙所、山形料理、竹筒の冷酒を高い位置から注ぐ、ピーマン・こんにゃく・里芋・つくね・はたはた・朴葉焼きの牛肉、山形の板蕎麦、接待向き。',
      confidence: 'medium', sources: [TB, R + 'B527771193/', R + 'B511349560/', R + 'B525070311/', R + 'B533377961/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Irori seating; separated smoking area.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-6-13 西五番街ビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated December 2025–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目6番13号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527771193/', R + 'B525070311/'],
    price_note: 'No prices captured; dinner ¥8,000–15,000 in reviews.', last_checked: TODAY, items: [
      it('囲炉裏焼き', 'irori-yaki', 'Irori-grilled skewers (vegetables, tsukune, hatahata)', '', 'Grill', 'ask', 'no', 'May 2026.', 'irori'),
      it('朴葉焼き', 'hoba-yaki', 'Beef grilled in a magnolia leaf', '', 'Grill', 'ask', 'no', 'May 2026.', 'hoba_beef'),
      it('板蕎麦', 'ita soba', 'Yamagata itasoba', '', 'Soba', 'no', 'ask', '', 'itasoba'),
    ] }, {
    cuisine: '囲炉裏を囲む山形の郷土料理・目の前で焼く串・刺身・朴葉焼きの牛肉・締めは山形の板蕎麦・竹筒から注ぐ地酒',
    neighborhood: '銀座五丁目、裏通りの西五番街ビル7F(銀座6-5-8のエルドールビルから移転)。銀座駅から徒歩1分',
    gf_detail: '要確認。囲炉裏で焼く野菜、こんにゃく、里芋、つくね、はたはた、朴葉焼きの牛肉、刺身と、締めの板蕎麦(そばの割合は書かれていません)の山形料理。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。コースには刺身、つくね、魚、牛肉。焼き野菜もありますが味付けは書かれていません。',
    notes: '[郷土料理・銀座の裏通りのビル7階で囲炉裏の山形料理] 裏通りのごく普通のビルでエレベーターを降りると、古い温泉宿のような空間に。囲炉裏で野菜や魚の串を目の前で焼いてくれます。料理は山形のもので、ピーマン、こんにゃく、里芋、つくね、はたはたを炭火で、朴葉で焼く牛肉、刺身、締めに山形の板蕎麦。地酒は竹筒から高い位置で注いでくれます。コースは6種のアテから、夜は8,000〜15,000円ほど。店主とスタッフの温かさが好評で、接待や送別会にも使われます。エルドールビルから移転してきました。',
  });
}

// ================================================================ Za Kitchen
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13254093/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '14:00']);
  put({
    id: 'tokyo_za_kitchen_ginza1', name: 'Za Kitchen (ザ キッチン)', category: 'OMNI',
    lat: 35.674978, lng: 139.767731,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a spaghetti counter (Napolitan, sauce yaki-supa, baked pasta).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sausage, fried egg, butter.',
    hours_raw: 'Weekday lunch 11:30–14:00; closed Sat, Sun, holidays and the day before holidays (Tabelog; may change). No reservations.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme back alley off Renga-dōri, almost opposite Ginza Biscuit, under a red awning — 2 min from Ginza-itchōme Stn',
    cuisine: 'Six-seat weekday-lunch spaghetti counter · "Exquisite Napolitan" ¥800 on a square teppan with sausage and komatsuna · sauce yaki-supa with a fried egg · four dishes ¥800–950', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('Za Kitchen 銀座1丁目'), menu_url: null,
    notes: "[Yōshoku · a six-seat Napolitan counter in Ginza 1-chōme] A tiny counter of about six or seven seats under a bright red awning, almost opposite Ginza Biscuit, run by two women and open for just two and a half hours on weekdays. There are four spaghetti dishes at ¥800–950, served sizzling on a square teppan: the \"Exquisite Napolitan\" with sausage and komatsuna in a buttery, tomato-tart ketchup sauce, and a street-style sauce yaki-supa with cabbage, garlic chives and a fried egg. A large serving is ¥100 extra; Tabasco and cheese are on the counter. Tabelog dates it to November 2020; the latest reviews are from late 2025, so check before going.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened November 2020 (per a reviewer citing Tabelog)', background: 'Run by two women (November 2025 review); not named.', philosophy: null, specialty: 'Napolitan; yaki-supa.',
      anecdotes: [
        { text: '"\'Exquisite Napolitan\' JPY 800, quite a great deal!… Inside, there are only 6 seats… It’s interesting to see two women running the place with such a small seating capacity and reasonable prices." — November 2025.', source: R + 'B517677529/' },
        { text: '"The dish features sautéed spaghetti served on a square teppan, topped with a beautifully presented fried egg. The ingredients include sausage, cabbage, and garlic chives." — December 2025, sauce yaki pasta.', source: R + 'B510582016/' },
      ],
      japanese_sources_summary: '食べログ: Za Kitchen、銀座1-6-17、銀座一丁目駅から95m、平日11:30〜14:00、土日祝・祝前日休、予約不可、子ども可。口コミ(2025年10〜12月): 銀座1丁目の裏路地の焼きスパの店(正式名は「Za Egg Kitchen」とも)、2020年11月開店、銀座ビスケットのほぼ向かい、赤い日除け、平日の2時間半だけの営業、「絶品ナポリタン」800円(四角い鉄板、ソーセージと小松菜、トマトの酸味とバター)、席は6〜7席のカウンター、女性二人で切り盛り、メニュー4品800〜950円、大盛り+100円、極濃ソース焼きパスタ(目玉焼き、ソーセージ、キャベツ、ニラ)。',
      confidence: 'low', sources: [TB, R + 'B517677529/', R + 'B510582016/', R + 'B516247646/', R + 'B518718852/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter; weekday lunch only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-6-17',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current; latest reviews October–December 2025 (none in 2026 seen).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目6番17号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517677529/'],
    price_note: 'Prices from late-2025 reviews; may have changed.', last_checked: TODAY, items: [
      it('絶品ナポリタン', '', '"Exquisite Napolitan" on a teppan', '¥800', 'Pasta', 'no', 'no', 'November 2025; large +¥100.', 'napolitan'),
      it('極濃ソース焼きパスタ', '', 'Rich-sauce yaki pasta with fried egg', '', 'Pasta', 'no', 'no', 'December 2025.', 'yaki_pasta'),
    ] }, {
    cuisine: '6席の平日ランチのスパゲッティのカウンター・四角い鉄板にソーセージと小松菜の「絶品ナポリタン」800円・目玉焼きのソース焼きスパ・4品800〜950円',
    neighborhood: '銀座一丁目、煉瓦通りの裏路地、銀座ビスケットのほぼ向かいの赤い日除け。銀座一丁目駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。スパゲッティのカウンター(ナポリタン、ソース焼きスパ、焼きパスタ)。',
    vegan_detail: 'ヴィーガンではありません。ソーセージ、目玉焼き、バター。',
    notes: '[洋食・銀座一丁目の6席のナポリタンのカウンター] 銀座ビスケットのほぼ向かい、赤い日除けの下の6〜7席ほどの小さなカウンターで、女性二人が切り盛りし、平日の2時間半だけ開いています。スパゲッティは4品800〜950円で、四角い鉄板で熱々に。ソーセージと小松菜を合わせ、トマトの酸味とバターが香る「絶品ナポリタン」、キャベツとニラに目玉焼きをのせた屋台風のソース焼きスパなど。大盛りは+100円、卓上にタバスコと粉チーズ。食べログによれば2020年11月開店。最新の口コミは2025年末なので、行く前に確認を。',
  });
}

// ================================================================ 歌舞伎茶屋 房の駅
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13299605/'; const R = TB + 'dtlrvwlst/';
  const d = day(['09:00', '18:00']);
  put({
    id: 'tokyo_kabuki_chaya_fusa_no_eki', name: '歌舞伎茶屋 房の駅 (Kabuki Chaya Fusa no Eki)', category: 'OMNI',
    lat: 35.670017, lng: 139.767971,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba (ratio not stated) with vegetable tempura and kakiage.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat soba; the vegetable tempura and the soba tsuyu are not described.',
    hours_raw: 'Daily 9:00–18:00 (Tabelog; may change). No reservations per the listing, though one diner booked a table.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kabukiza B2F (Kobikichō Square), directly connected to Higashi-Ginza Stn',
    cuisine: 'Soba and café in the Kabukiza basement · cold soba with five vegetable tempura (¥990) · meat soba · kakiage soba · coffee in topknot-handled cups', cuisine_type: 'udon_soba',
    website: 'https://fusanoeki.fusa.co.jp/kabukichaya/', gmaps: gm('歌舞伎茶屋 房の駅 歌舞伎座'), menu_url: null,
    notes: "[Soba · a quick bowl under the Kabukiza] Opened in 2024 in the open basement concourse of the Kabukiza, directly connected to Higashi-Ginza Station, so it's handy before a show or in the interval. Thin, springy soba comes cold with five bite-size vegetable tempura (¥990 in July 2026; onion and carrot among them), or as meat soba or kakiage soba. One diner advises cold soba with the kakiage, which soon goes soggy in the hot broth. It doubles as a café: coffee is rich and served in cups with a topknot-shaped handle, though one diner found the black tea flat. Open daily 9:00–18:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 July 2024 (Tabelog)', background: 'Run by Fusa no Eki (fusanoeki.fusa.co.jp).', philosophy: null, specialty: 'Soba with vegetable tempura.',
      anecdotes: [
        { text: '"I ordered the Oomide Soba (cold soba) served with five pieces of vegetable tempura (JPY 990, tax included). The soba was thin yet had a nice chewiness." — July 2026.', source: R + 'B532515703/' },
        { text: '"The design of the cups was interesting, featuring a unique pattern and a handle shaped like a topknot. The coffee had a rich aroma and depth." — August 2026.', source: R + 'B533896470/' },
      ],
      japanese_sources_summary: '食べログ: 歌舞伎茶屋 房の駅、銀座4-12-15 歌舞伎座B2F、東銀座駅直結、毎日9:00〜18:00、予約不可、2024年7月20日開店、公式サイト fusanoeki.fusa.co.jp。2026年の口コミ: 冷たいそばと野菜天ぷら5個990円(細めでコシ、玉ねぎや人参)、歌舞伎座地下の開放的な空間で観劇の前後に、納涼歌舞伎の初日に予約して肉そばの大盛り、髷の形の取っ手のカップのコーヒー、紅茶は香りが弱い、冷たいそばのかき揚げがおいしい、温かいそばだとかき揚げがすぐしんなり。',
      confidence: 'medium', sources: [TB, R + 'B532515703/', R + 'B533896470/', R + 'B534389256/', R + 'B532945603/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open concourse; quick meals before or between shows.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-12-15 歌舞伎座 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–August 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座四丁目12番15号 (go) is 84m off for the large Kabukiza block, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532515703/'],
    price_note: 'One price from a July 2026 review.', last_checked: TODAY, items: [
      it('冷たいそばと野菜天ぷら', '', 'Cold soba with five vegetable tempura', '¥990', 'Soba', 'no', 'ask', 'July 2026.', 'soba_yasaiten'),
      it('肉そば', 'niku soba', 'Meat soba', '', 'Soba', 'no', 'no', 'August 2026.', 'niku_soba'),
      it('かき揚げそば', '', 'Kakiage soba', '', 'Soba', 'no', 'ask', 'August 2026.', 'kakiage_soba'),
      it('コーヒー', '', 'Coffee', '', 'Drinks', 'ask', 'vegan', 'August 2026.', 'coffee'),
    ] }, {
    cuisine: '歌舞伎座地下のそばとカフェ・冷たいそばと野菜天ぷら5個(990円)・肉そば・かき揚げそば・髷の取っ手のカップのコーヒー',
    neighborhood: '歌舞伎座B2F(木挽町広場)、東銀座駅直結',
    gf_detail: 'グルテンフリーではありません。割合の書かれていないそばに野菜の天ぷらやかき揚げ。',
    vegan_detail: 'ヴィーガンではありません。肉そば。野菜天ぷらやつゆの中身は書かれていません。',
    notes: '[そば・歌舞伎座の地下でさっと一杯] 2024年に、東銀座駅直結の歌舞伎座の地下の開放的なスペースに開店。観劇の前後や幕間に便利です。細くコシのあるそばを冷たくして一口大の野菜天ぷら5個(2026年7月は990円、玉ねぎや人参など)と、または肉そばやかき揚げそばで。かき揚げは温かいそばだとすぐしんなりするので冷たいそばがおすすめという声も。カフェも兼ね、コーヒーは香り豊かで髷の形の取っ手のカップで出てきますが、紅茶は香りが弱かったという声も。毎日9:00〜18:00。',
  });
}

// ================================================================ 銀座サンド
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13231045/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['17:00', '03:00']);
  put({
    id: 'tokyo_ginza_sand_katsu', name: '銀座サンド (Ginza Sand)', category: 'OMNI',
    lat: 35.669838, lng: 139.762167,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded katsu sandwiches on bread (pork, beef, egg katsu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef and egg katsu sandwiches.',
    hours_raw: 'Mon–Fri 17:00–03:00; Sat 11:30–23:00; closed Sundays and holidays (Tabelog). Takeaway and delivery only.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: day(['11:30', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme, Fiera Ginza Bldg 1F, on club-lined Kenban-dōri — 5 min from Ginza or Shimbashi Stn',
    cuisine: 'Takeaway katsu sandwiches from Osaka’s Kitashinchi Sand · 16-layer mille-feuille pork katsu (¥1,300) · beef-tenderloin salt katsu (¥1,800) · fried-egg "egg katsu" sandwich · gift bags · to 3 am weekdays · English menu', cuisine_type: 'other',
    website: 'https://www.kitashinchisand.com', gmaps: gm('銀座サンド 銀座7丁目'), menu_url: null,
    notes: "[Takeaway · late-night katsu sandwiches on Kenban-dōri] A takeaway-and-delivery katsu-sandwich shop, open since 2019 and a sister of Osaka's Kitashinchi Sand, on club-lined Kenban-dōri, open until 3 am on weeknights. The katsu is cooked fresh and cooled quickly for takeaway, and goes out in smart black bags meant as late-night gifts. There's a pork mille-feuille katsu sandwich of 16 layers (¥1,300), a salt katsu of eight layers of domestic beef tenderloin with Sicilian rock salt and butter (¥1,800), and an \"egg katsu\" sandwich with a fried egg. Prices are steep, and one buyer found the pork katsu dry ten minutes after buying. English menu with photos.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 February 2019 (Tabelog); sister shop of Kitashinchi Sand (Osaka)', background: 'Brand of kitashinchisand.com.', philosophy: null, specialty: 'Katsu sandwiches.',
      anecdotes: [
        { text: '"Exquisite Millefeuille \'Beef Salt Katsu Sandwich\' with 8 layers of domestic beef tenderloin… Price: JPY 1,800." — October 2026.', source: R + 'B537917315/' },
        { text: '"The egg sandwich at Ginza Sand features a unique twist: the egg is fried. This creates a new texture known as \'egg katsu sandwich.\'" — October 2026.', source: R + 'B537869608/' },
      ],
      japanese_sources_summary: '食べログ: 銀座サンド、銀座7-6-4 フィーラ銀座ビル1F、平日17:00〜翌3:00、土11:30〜23:00、日祝休、テイクアウトとデリバリー専門、英語・写真付きメニュー、2019年2月4日開店、公式サイト kitashinchisand.com。店の紹介: 北新地の人気店「北新地サンド」の姉妹店、素材と製法にこだわるカツサンド、できたての熱々、持ち帰りは急速に冷まして旨みを閉じ込める、アクセサリー店のような紙袋で手土産に。2026年10月の口コミ: 16層のミルフィーユの豚カツサンド1,300円(買って10分ほどでパサついていたとの声)、玉子を揚げた「玉子カツサンド」、国産牛ヒレ8層の牛塩カツサンド1,800円(シチリアの岩塩とバター)、黒い紙袋、芸能人の手土産としても人気、クラブの並ぶ見番通りで深夜まで、値段はとても高い。',
      confidence: 'medium', sources: [TB, R + 'B537917315/', R + 'B537869608/', R + 'B537710580/', R + 'B537919772/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway counter; English menu with photos (Tabelog).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-6-4 フィーラ銀座ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目6番4号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537917315/', R + 'B537710580/'],
    price_note: 'Prices from October 2026 reviews (tax incl.).', last_checked: TODAY, items: [
      it('豚カツサンド', '', 'Pork mille-feuille katsu sandwich (16 layers)', '¥1,300', 'Sandwiches', 'no', 'no', 'October 2026.', 'pork_katsu'),
      it('牛塩カツサンド', '', 'Beef-tenderloin salt katsu sandwich (8 layers)', '¥1,800', 'Sandwiches', 'no', 'no', 'October 2026.', 'beef_salt_katsu'),
      it('玉子カツサンド', '', 'Egg katsu sandwich (fried egg)', '', 'Sandwiches', 'no', 'no', 'October 2026.', 'egg_katsu'),
    ] }, {
    cuisine: '大阪・北新地サンドの持ち帰りのカツサンド・16層のミルフィーユ豚カツ(1,300円)・国産牛ヒレの牛塩カツ(1,800円)・揚げた「玉子カツサンド」・手土産の紙袋・平日は深夜3時まで・英語メニュー',
    neighborhood: '銀座七丁目、クラブの並ぶ見番通りのフィーラ銀座ビル1F。銀座駅・新橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。パンで挟む衣付きのカツサンド(豚、牛、玉子カツ)。',
    vegan_detail: 'ヴィーガンではありません。豚、牛、玉子のカツサンド。',
    notes: '[テイクアウト・見番通りの深夜のカツサンド] 2019年開店、大阪・北新地サンドの姉妹店で、クラブの並ぶ見番通りにある持ち帰りとデリバリー専門のカツサンドの店。平日は深夜3時まで。カツはできたてを、持ち帰り用は急速に冷まし、夜の手土産向けのおしゃれな黒い袋で渡されます。16層のミルフィーユの豚カツサンド(1,300円)、シチリアの岩塩とバターで食べる国産牛ヒレ8層の牛塩カツサンド(1,800円)、玉子を揚げた「玉子カツサンド」など。値段はかなり高く、豚カツが買って10分でパサついていたという声も。写真付きの英語メニューあり。',
  });
}

save();
