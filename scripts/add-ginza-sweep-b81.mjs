// Ginza Station half-mile sweep (805 m), batch 81 — all-genre phase (all OMNI).
//   + レストランYAMAGATA (yōshoku since 1924; Hot Pepper: "3代目オーナーシェフ" but UNNAMED → OMNI per the named-owner rule)
//   + 蕎麦 流石 (ju-wari soba, honten of a small group → OMNI)
//   + テンダーロイン (steakhouse open to 6 a.m. on weekdays; j-silver group)
//   + アロセリア ラ パンサ (paella specialist; V&K group)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ レストランYAMAGATA
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13002722/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://www.hotpepper.jp/strJ000104431/';
  const wk = day(['11:30', '14:30'], ['18:00', '21:00']);
  put({
    id: 'tokyo_restaurant_yamagata_ginza8', name: 'レストランYAMAGATA (restaurant YAMAGATA)', category: 'OMNI',
    lat: 35.66942, lng: 139.760671,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: demi-glace hamburg and beef stew, menchi katsu, chicken cutlet, fried fish and soft-shell crab.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg, beef stew, cutlets, scallops.',
    hours_raw: 'Tue–Fri 11:30–14:30 and 18:00–21:00; Sat 11:30–14:30; closed Sun, Mon and holidays (Tabelog); summer break 12–15 August (Hot Pepper). No service charge.',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:30', '14:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Plaza G8 2F — near Shimbashi and Ginza Stns',
    cuisine: 'Yōshoku since 1924, third-generation owner-chef · simmered hamburg, menchi katsu, beef stew ¥2,500, omurice ¥1,750 · daily lunch', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('レストランYAMAGATA 銀座8-5-1 プラザG8'), menu_url: null,
    notes: "[Yōshoku · a Ginza original since 1924] A calm 28-seat Western-style restaurant founded in 1924, now run by its third-generation owner-chef, who trained in French cooking at a hotel (per Hot Pepper). Lunch is a quiet, quick daily special: a demi-glace simmered hamburg, menchi katsu with fried white fish, or hamburg with salad, soup and rice, plus homemade potato salad. Dinner à la carte (Hot Pepper prices) includes omurice ¥1,750, scallops in grain mustard ¥1,600, fried soft-shell crab ¥1,500, pork sauté ¥2,300, beef stew with vegetables ¥2,500 and chicken cutlet ¥2,000. The B course centred on beef stew is ¥5,800. One diner found the staff curt.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Founded 1924 (大正13年) (Hot Pepper)', background: 'Third-generation owner-chef who trained in French cuisine at a hotel (Hot Pepper) — not named in any source, so not marked mom-and-pop.', philosophy: null, specialty: 'Menchi katsu; beef stew.',
      anecdotes: [
        { text: '"The daily special, a simmered Hamburg steak, paired perfectly with the authentic demi-glace sauce." — September 2026.', source: R + 'B535450188/' },
        { text: '大正13年創業… 3代目オーナーシェフ — Hot Pepper', source: HP },
      ],
      japanese_sources_summary: 'ホットペッパー: Restaurant YAMAGATA、大正13年創業・90年以上続く銀座の老舗洋食、某ホテルのフレンチで修行した3代目オーナーシェフ、銀座8-5-1 プラザG8ビル2F、26席、火〜金11:30〜21:30、土11:30〜14:30、月日祝休、8月12〜15日夏休み、Bコース(ビーフシチュー)5,800円、オムライス1,750円、帆立貝の粒マスタード和え1,600円、ソフトシェルクラブのフライ1,500円、シーフードサラダ1,200円、ポークソテー2,300円、ビーフシチュー2,500円、チキンカツ2,000円、メンチカツ。食べログ: 28席、火〜金11:30〜14:30・18:00〜21:00、土11:30〜14:30、サービス料なし。2026年の口コミ: 日替わり(メンチカツと白身魚フライ、煮込みハンバーグ)、手作りのポテトサラダ、提供が早い、落ち着いた店内、スタッフの機嫌が悪かったとの声も。',
      confidence: 'medium', sources: [TB, HP, R + 'B535450188/', R + 'B528951953/', R + 'B529717623/', R + 'B535320126/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet classic room.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-5-1 プラザG8 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目5番1号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [HP],
    price_note: 'À la carte prices from Hot Pepper (tax incl.; date not shown).', last_checked: TODAY, items: [
      it('ビーフシチュー(温野菜添え)', 'biifu shichuu', 'Beef stew with vegetables', '¥2,500', 'Mains', 'no', 'no', 'Hot Pepper.', 'beef_stew'),
      it('オムライス', 'omuraisu', 'Omurice', '¥1,750', 'Mains', 'ask', 'no', 'Hot Pepper.', 'omurice'),
      it('メンチカツ', 'menchi katsu', 'Menchi katsu', '', 'Mains', 'no', 'no', '', 'menchi'),
      it('Bコース', '', 'B course with beef stew main', '¥5,800', 'Courses', 'no', 'no', 'Hot Pepper.', 'b_course'),
    ] }, {
    cuisine: '大正13年創業の洋食、3代目オーナーシェフ・煮込みハンバーグ、メンチカツ、ビーフシチュー2,500円、オムライス1,750円・日替わりランチ',
    neighborhood: '銀座八丁目、プラザG8 2F。新橋駅・銀座駅の近く',
    gf_detail: 'グルテンフリーではありません。デミグラスのハンバーグやビーフシチュー、メンチカツ、チキンカツ、白身魚やソフトシェルクラブのフライ。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、ビーフシチュー、カツ、帆立。',
    notes: '[洋食・1924年からの銀座の老舗] 大正13年(1924年)創業、落ち着いた28席の洋食店で、ホットペッパーによれば今はホテルのフレンチで修行した3代目のオーナーシェフが営んでいます。昼は静かで提供の早い日替わりで、デミグラスの煮込みハンバーグ、メンチカツと白身魚のフライ、サラダ・スープ・ご飯付きのハンバーグなど、手作りのポテトサラダも。夜のアラカルト(ホットペッパーの価格)はオムライス1,750円、帆立貝の粒マスタード和え1,600円、ソフトシェルクラブのフライ1,500円、ポークソテー2,300円、温野菜添えのビーフシチュー2,500円、チキンカツ2,000円など。ビーフシチューがメインのBコースは5,800円。スタッフがそっけなかったという声も。',
  });
}

// ================================================================ 蕎麦 流石
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002488/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'tokyo_soba_sasuga_ginza2', name: '蕎麦 流石 (Soba Sasuga)', category: 'OMNI',
    lat: 35.671653, lng: 139.770189,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is ju-wari (100% buckwheat, no binder), a good sign, but the dipping sauce is soy-based and courses include other dishes; ask about wheat-free tsuyu and cross-contact.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based tsuyu, tamagoyaki.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:30–21:00 (last entry 19:30); closed Sat, Sun and holidays; may close early when sold out (Tabelog). Cards (VISA, Master, AMEX).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme back alley, Tōni Bldg 2F — 5 min from Higashi-Ginza or Shintomichō Stn',
    cuisine: 'Ultra-thin hand-made ju-wari soba · lunch courses ¥3,500–4,600 · soba dumplings, tororo, sobagaki with red-bean soup', cuisine_type: 'udon_soba',
    website: 'http://ginza-sasuga.jp/honten/', gmaps: gm('蕎麦 流石 銀座2-13-6'), menu_url: null,
    notes: "[Soba · ultra-thin ju-wari in a Ginza alley] The main shop of Sasuga, a calm, polished soba restaurant up a quiet Ginza 2-chōme alley. It has a 6-seat wooden counter, tables, a private room and a semi-private room. The soba is made by hand from buckwheat alone (ju-wari), cut very thin, with a smooth, springy texture; one 2026 reviewer says it has held a Michelin star. Some days lunch is course-only, such as the ¥3,500 Sasuga lunch or a ¥4,600 course, served warm and cold. Courses bring soba dumplings, buckwheat with grated yam, tamagoyaki and a sobagaki with sweet red-bean soup to finish. The owner chats about the neighbourhood. It suits a stop after the Kabuki-za.",
    chef_bio: { chef_name: null, roles: [], origin: 'Main shop (honten) of Sasuga (website); opening date not given', background: 'The owner talks with guests (2026 reviews) but is not named; the group has another shop.', philosophy: 'Hand-made soba without binder (Tabelog listing).', specialty: 'Ultra-thin ju-wari soba.',
      anecdotes: [
        { text: '"This restaurant is known for its Ju-wari soba… The exquisite handmade soba, made without any binding agents and crafted into ultra-thin noodles." — October 2026, ¥3,500 Sasuga lunch.', source: R + 'B537401235/' },
        { text: '"The highlight was the dessert: the soba dumpling served with sweet red bean soup." — October 2026.', source: R + 'B415573555/' },
      ],
      japanese_sources_summary: '食べログ: そば 流石(さすが)、銀座2-13-6 東二ビル2F、東銀座駅・新富町駅から徒歩5分、28席(カウンター6・個室4・半個室6・テーブル12)、平日11:30〜14:00・17:30〜21:00(最終入店19:30)、土日祝休、売り切れ次第早じまい、カード(VISA・MASTER・AMEX)、公式サイト ginza-sasuga.jp/honten。店の紹介: つなぎを使わない手打ちそば、静かな路地、観劇や映画の後に。2026年10月の口コミ: 十割の極細そば、ミシュランの星との記述、流石ランチ3,500円、4,600円のコース、温かいそばと冷たいそば、そばがき、とろろ、卵焼き、そばがきのぜんざい、店主の話が楽しい、コースのみの日も。',
      confidence: 'medium', sources: [TB, R + 'B537401235/', R + 'B415573555/', R + 'B537370749/', R + 'B229687992/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm; book lunch; sometimes course-only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [{ text: 'Soba is ju-wari — made without any binding agents.', source: R + 'B537401235/' }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-13-6 東二ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目13番6号 (go) 13m; 559 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537401235/', R + 'B229687992/'],
    price_note: 'Lunch course prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('流石ランチ', 'sasuga ranchi', 'Sasuga lunch course with ju-wari soba', '¥3,500', 'Lunch', 'ask', 'no', 'October 2026.', 'sasuga_lunch'),
      it('ランチコース', 'ranchi koosu', 'Lunch course', '¥4,600', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_course'),
      it('そばがきのぜんざい', '', 'Sobagaki with sweet red-bean soup', '', 'Dessert', 'ask', 'ask', 'October 2026.', 'zenzai'),
    ] }, {
    cuisine: '極細の手打ち十割そば・ランチコース3,500〜4,600円・そばがき、とろろ、そばがきのぜんざい',
    neighborhood: '銀座二丁目の路地、東二ビル2F。東銀座駅・新富町駅から徒歩5分',
    gf_detail: '要確認。そばはつなぎを使わない十割で心強いですが、つゆは醤油ベースで、コースにはほかの料理も。小麦不使用のつゆや混入について確認を。',
    vegan_detail: 'ヴィーガンではありません。だしのつゆ、卵焼き。',
    notes: '[そば・銀座の路地の極細十割] 銀座二丁目の静かな路地にある、流石の本店。落ち着いた上質なそば屋で、木のカウンター6席、テーブル、個室、半個室。そばはつなぎを使わず蕎麦粉だけで手打ちした十割の極細で、なめらかでコシがあり、2026年の口コミではミシュランの星を得たとも。昼はコースのみの日もあり、3,500円の流石ランチや4,600円のコースで、温かいそばと冷たいそばを。そばがき、とろろ、卵焼き、締めのそばがきのぜんざいも。店主の銀座の話も楽しみのひとつ。歌舞伎座の帰りにも。',
  });
}

// ================================================================ テンダーロイン
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13290546/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '16:00'], ['18:00', '06:00']), we = day(['11:30', '16:00'], ['16:00', '23:00']);
  put({
    id: 'tokyo_tenderloin_steak_ginza8', name: 'テンダーロイン (TENDERLOIN)', category: 'OMNI',
    lat: 35.667584, lng: 139.762018,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steaks come with an onion sauce by default and several toppings; sauces are not described and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak, hamburg, chicken.',
    hours_raw: 'Mon–Fri 11:30–16:00 and 18:00–06:00 (next morning); Sat, Sun and holidays 11:30–16:00 and 16:00–23:00 (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, Ginza 8-chōme 10 Bldg B1F (opposite Don Quijote) — 3 min from Shimbashi Stn',
    cuisine: 'Steakhouse open until 6 a.m. · 1-pound (450 g) steak lunch ¥2,200 · 400 g hamburg with rice ¥2,200 · Wagyu steak', cuisine_type: 'other',
    website: 'https://www.tenderloin.j-silver.co.jp', gmaps: gm('テンダーロイン 銀座8丁目10番ビル'), menu_url: null,
    notes: "[Steak · open until morning in Ginza 8-chōme] A 28-seat basement steakhouse opposite Don Quijote, open since 2023 and running from lunch until 6 a.m. on weekdays. It's known on social media for a 1-pound (450 g) steak lunch at ¥2,200, served as three medium-rare pieces with onion sauce. A 400 g hamburg with rice is also ¥2,200. Ribeye, chicken and toppings are on the lunch menu, and dinner adds tender Wagyu. Diners call it great value, though the vegetables are minimal and the large rice small. Weekend lunch service runs 11:30–16:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 November 2023 (Tabelog)', background: 'Group-run (j-silver.co.jp).', philosophy: null, specialty: '1-pound steak.',
      anecdotes: [
        { text: '"The 1 Pound Steak was not served as a single piece but rather as three mini steaks… it was cooked perfectly medium-rare." — October 2026.', source: R + 'B537326522/' },
        { text: '"The 400g Hamburg Steak comes with rice for an incredible price of JPY 2,200!!" — October 2026.', source: R + 'B537718584/' },
      ],
      japanese_sources_summary: '食べログ: テンダーロイン(TENDERLOIN)、銀座8-10-8 銀座8丁目10番ビルB1F、ドン・キホーテの向かい、新橋駅から徒歩3分、28席、平日11:30〜16:00・18:00〜翌6:00、土日祝11:30〜16:00・16:00〜23:00、2023年11月11日開店、公式サイト tenderloin.j-silver.co.jp。2026年10月の口コミ: 1ポンド(450g)ステーキ2,200円(3枚に分けて提供、ミディアムレア、オニオンソース)、400gハンバーグとご飯2,200円、リブアイ、チキン、トッピング、和牛ステーキは柔らかい、付け合わせは少なめ、大盛りご飯が少ない、朝6時まで営業。',
      confidence: 'medium', sources: [TB, R + 'B537326522/', R + 'B537718584/', R + 'B536920317/', R + 'B536361067/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night steak; counter seats.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-10-8 銀座8丁目10番ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目10番8号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537326522/', R + 'B537718584/', R + 'B536920317/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('1ポンドステーキ', 'ichi pondo suteeki', '1-pound (450 g) steak lunch with onion sauce', '¥2,200', 'Lunch', 'ask', 'no', 'October 2026.', 'one_pound'),
      it('400gハンバーグ', '', '400 g hamburg with rice', '¥2,200', 'Lunch', 'ask', 'no', 'October 2026.', 'hamburg400'),
    ] }, {
    cuisine: '朝6時まで開くステーキハウス・1ポンド(450g)ステーキのランチ2,200円・400gハンバーグとご飯2,200円・和牛ステーキ',
    neighborhood: '銀座八丁目、銀座8丁目10番ビルB1F(ドン・キホーテの向かい)。新橋駅から徒歩3分',
    gf_detail: '要確認。ステーキは基本オニオンソースで、トッピングもいろいろ。ソースの内容やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。ステーキ、ハンバーグ、チキン。',
    notes: '[ステーキ・銀座八丁目で朝まで] ドン・キホーテの向かい、2023年開店の地下の28席のステーキハウスで、平日は昼から朝6時まで営業。SNSで話題の1ポンド(450g)ステーキのランチは2,200円で、ミディアムレアの3枚にオニオンソース。400gのハンバーグとご飯も2,200円。リブアイやチキン、トッピングもあり、夜は柔らかい和牛も。とてもお得という声の一方、付け合わせは少なく大盛りご飯も少なめだそう。週末のランチは11:30〜16:00。',
  });
}

// ================================================================ アロセリア ラ パンサ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13205229/'; const R = TB + 'dtlrvwlst/';
  const D = ['17:00', '22:30'];
  put({
    id: 'tokyo_arroceria_la_panza_ginza1', name: 'アロセリア ラ パンサ (Arrocería La Panza)', category: 'OMNI',
    lat: 35.673415, lng: 139.770054,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella and caldo are rice-based and many tapas are grilled, but the cod comes as a gratin with aioli; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, duck, beef tongue, lobster paellas.',
    hours_raw: 'Tue–Thu 17:00–22:30; Fri 11:45–14:30 and 17:00–22:30; Sat, Sun and holidays 11:45–14:45 and 17:00–22:00; closed Mondays (Tabelog).',
    hours: { 1: day(D), 2: day(D), 3: day(D), 4: day(['11:45', '14:30'], D), 5: day(['11:45', '14:45'], ['17:00', '22:00']), 6: day(['11:45', '14:45'], ['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme back alley, Ginza Yō Bldg 1F — 3 min from Ginza-itchōme Stn',
    cuisine: 'Spanish paella specialist (15+ paellas) · duck and porcini paella, lobster paella, caldo with angel shrimp · 10-dish course ¥11,000', cuisine_type: 'other',
    website: 'https://www.vandk.jp/restaurant/arrocerialapanza/', gmaps: gm('アロセリア ラ パンサ 銀座1-15-8'), menu_url: null,
    notes: "[Spanish · paella house in a Ginza 1-chōme alley] A lively 27-seat Spanish restaurant ('la panza' means full belly), open since 2017 and often full with bookings. Tabelog says it has been in the Michelin Tokyo guide eight years running; a reviewer calls it a Bib Gourmand. More than 15 paellas: the duck and porcini is the house favourite, lobster is popular, and a soupy caldo comes with angel shrimp. À la carte stars include beef-tongue ajillo, grilled spear squid, goat-cheese salad and cod with aioli and vegetable gratin. A 10-dish course with tapas, duck and steak is ¥11,000. Portions can be adjusted for the group. Seats are tight; popular for birthdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 January 2017 (Tabelog)', background: 'Group-run (vandk.jp).', philosophy: 'Regional dishes, seasonal ingredients, tradition and innovation (Tabelog listing).', specialty: 'Paella.',
      anecdotes: [
        { text: '"The restaurant\'s recommended duck and porcini mushroom paella was a highlight. The duck was tender and sweet." — October 2026.', source: R + 'B537992875/' },
        { text: '"We ordered the 10-dish course for JPY 11,000… We chose two types of paella, ordering the ones with lobster and duck." — October 2026.', source: R + 'B537859706/' },
      ],
      japanese_sources_summary: '食べログ: アロセリア ラ パンサ、銀座1-15-8 銀座耀ビル1F、銀座一丁目駅から徒歩3分、27席、火〜木17:00〜22:30、金11:45〜14:30・17:00〜22:30、土日祝11:45〜14:45・17:00〜22:00、月休、2017年1月21日開店、公式サイト vandk.jp。店の紹介: ミシュランガイド東京に8年連続掲載、パエリア15種以上、店名は「満腹」の意味。2026年10月の口コミ: 鴨とポルチーニのパエリア、オマールのパエリア、天使の海老のカルド、牛タンのアヒージョ、ヤリイカのグリル、山羊のチーズのサラダ、鱈のアイオリと季節野菜のグラタン、10品のコース11,000円、人数に合わせて量を調整、席は狭め、誕生日の客が多い、ビブグルマン8年連続との記述。',
      confidence: 'medium', sources: [TB, R + 'B537992875/', R + 'B537859706/', R + 'B504196638/', R + 'B537899902/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; tight seating.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-15-8 銀座耀ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目15番8号 (go) 3m; 579 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537859706/', R + 'B537992875/'],
    price_note: 'Course price from an October 2026 review.', last_checked: TODAY, items: [
      it('10品のコース', '', '10-dish course: tapas, duck, steak, two paellas', '¥11,000', 'Courses', 'ask', 'no', 'October 2026.', 'course10'),
      it('鴨とポルチーニのパエリア', '', 'Duck and porcini paella', '', 'Paella', 'ask', 'no', 'House recommendation.', 'duck_paella'),
      it('天使の海老のカルド', '', 'Caldo (soupy rice) with angel shrimp', '', 'Paella', 'ask', 'no', '', 'caldo'),
    ] }, {
    cuisine: 'スペインのパエリア専門店(15種以上)・鴨とポルチーニ、オマールのパエリア、天使の海老のカルド・10品のコース11,000円',
    neighborhood: '銀座一丁目の路地、銀座耀ビル1F。銀座一丁目駅から徒歩3分',
    gf_detail: '要確認。パエリアやカルドは米、タパスもグリルが多いですが、鱈はアイオリのグラタン。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介、鴨、牛タン、オマールのパエリア。',
    notes: '[スペイン料理・銀座一丁目の路地のパエリアの店] 店名は「満腹」の意味、2017年開店の27席のにぎやかなスペイン料理店で、予約で満席のことが多い人気店。食べログにはミシュランガイド東京に8年連続掲載とあり、口コミではビブグルマンとも。パエリアは15種以上で、看板は鴨とポルチーニ、オマールも人気、天使の海老のスープ状のカルドも。アラカルトでは牛タンのアヒージョ、ヤリイカのグリル、山羊のチーズのサラダ、鱈のアイオリと季節野菜のグラタンが好評。タパス、鴨、ステーキの10品のコースは11,000円。人数に合わせて量も調整してくれます。席は狭め、誕生日のお祝いも多い店です。',
  });
}

save();
