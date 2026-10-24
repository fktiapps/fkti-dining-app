// Ginza Station half-mile sweep (805 m), batch 31 — last leads from the cached san-tatsu scan.
//   + 銀座 萬年堂本店 (wagashi, founded 1617 in Kyoto; 13th generation of the 樋口 family, one shop with a 10-seat café →
//     MOM_AND_POP. いいだばし萬年堂 is an independent shop opened by a son of the 11th generation, not a branch)
//   + 銀座 スケベニンゲン (1979 southern-Italian; founders retired or deceased, run by manager 越塚さん → OMNI)
//   + 月光荘サロン 月のはなれ (2013 salon of the 1917 art-supply shop 月光荘, opened by the founder's grandson 日比康造, but
//     run day to day by a hired store manager (site's 2026 manager recruitment) → OMNI)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座 萬年堂本店
{
  const ST = 'https://san-tatsu.jp/articles/501151/'; const IB = 'https://san-tatsu.jp/articles/148235/';
  const RU = 'https://rurubu.jp/andmore/article/18856';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13276849/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '18:00']);
  put({
    id: 'tokyo_ginza_mannendo_honten', name: '銀座 萬年堂本店 (Ginza Mannendō Honten)', category: 'MOM_AND_POP',
    lat: 35.668159, lng: 139.764401,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The café\'s awa-zenzai is foxtail millet under the house koshian, and the an-warabi is bean paste kneaded with bracken starch, dusted with kinako and served with brown-sugar syrup, but no source gives full ingredient lists or says how the sweets are made alongside one another.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. The café sweets described are millet, bean paste, bracken starch, kinako and brown-sugar syrup, but no source confirms the full recipes.',
    hours_raw: 'Shop daily 11:00–18:00; café 12:00–17:00; open every day (Tabelog, rurubu). Cards and QR accepted; no e-money.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, ground floor toward Shiodome — 3–4 min from Higashi-Ginza Stn',
    cuisine: 'Kyoto-born wagashi since 1617 · "Omedetō" steamed sweet · 10-seat café for made-to-order an-warabi and awa-zenzai', cuisine_type: 'sweets',
    website: null, gmaps: gm('銀座 萬年堂本店 銀座7-13-21'), menu_url: null,
    notes: "[Mom & Pop · 400 years of wagashi] Founded in 1617 at Teramachi-Sanjō in Kyoto, the shop supplied sweets to the palace, the shogun's deputy, temples and shrines, and has a record of sweets made for Emperor Go-Mizunoo. It followed the capital to Yaesu in 1872 and later opened in Ginza. War destroyed both shops and only Ginza was rebuilt. After several moves within Ginza it came to this ground-floor shop in September 2022, which added a café. It is now in its thirteenth generation of the 樋口 family. いいだばし萬年堂 in Iidabashi was opened by a son of the eleventh generation and is a separate shop. The signature is 'Omedetō', a steamed sweet that looks like red rice. Take-away is the main trade, but the ten café seats serve sets with matcha. Awa-zenzai (¥1,650) uses the new Iwate millet 'Iwate Awakogane' under the house koshian, served in a wooden box with a tea snack and hōjicha. The made-to-order an-warabi with matcha (¥2,090) is bean paste kneaded with bracken starch, dusted with kinako and served with brown-sugar syrup (January 2026). Fu-manjū and the Yoshino-tsuyu kuzu sweet were on sale in 2026.",
    chef_bio: {
      chef_name: '樋口 family (13th generation)', roles: ['owner family (13th generation)'],
      origin: 'Founded 1617 (Genna 3) at Teramachi-Sanjō, Kyoto; to Yaesu, Tokyo in 1872; Ginza 7-chōme since September 2022',
      background: 'The Iidabashi offshoot was opened in 1993 by 樋口悠治, second son of the 11th generation of Ginza\'s 萬年堂本店 (san-tatsu, 2022).',
      philosophy: null,
      specialty: 'Omedetō; seasonal jō-namagashi; an-warabi.',
      anecdotes: [
        { text: '「元和3年（1617）に、京都寺町三条にて創業。現在13代目、400年以上の歴史ある老舗和菓子店」', source: ST },
        { text: 'Both the Yaesu and Ginza shops were lost in the war; only Ginza was rebuilt.', source: ST },
        { text: '"Founded in 1617 during the Genwa era, this long-established wagashi shop has over 400 years of history." — August 2026.', source: R + 'B536229412/' },
      ],
      japanese_sources_summary: 'さんたつ(2026.1.23): 銀座 萬年堂本店、東銀座駅から徒歩3分、元和3年(1617)京都寺町三条で創業、現在13代目、御所・所司代・寺社に菓子を納め後水尾天皇への記録、明治5年に八重洲へ、銀座にも出店、戦災で両店焼失し銀座店のみ再建、2022年に現店舗、上生菓子、喫茶、粟ぜんざい1650円(いわてあわこがね、木箱、お茶請けとほうじ茶)、煉りたてあん蕨とお抹茶2090円(萬年堂特製あんと蕨粉、きな粉、黒糖蜜)、11:00〜18:00(喫茶12:00〜17:00)、無休。さんたつ(2022.2.8): いいだばし萬年堂は銀座『萬年堂本店』11代目の次男・樋口悠治さんが1993年に独立開業。るるぶ(2023): 2022年9月に銀座5丁目から7丁目へ移転、季節の上生菓子とまっ茶1650円、蒸籠蒸「御目出糖」とまっ茶1650円。食べログ: 10席、カード・QR可。',
      confidence: 'medium', sources: [ST, IB, RU, TB, R + 'B536229412/', R + 'B536536536/', R + 'B534208185/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet, roomy ten-seat café behind the shop counter; most customers buy boxed sweets to take away.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-13-21 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目13番21号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, RU],
    price_note: 'Café prices from the January 2026 san-tatsu feature and rurubu (2023).', last_checked: TODAY, items: [
      it('粟ぜんざい', 'awa zenzai', 'Foxtail-millet zenzai with house koshian, tea snack and hōjicha', '¥1,650', 'Café', 'ask', 'ask', '2026.', 'awa_zenzai'),
      it('煉りたてあん蕨とお抹茶', 'neritate anwarabi to omatcha', 'Made-to-order an-warabi with kinako and brown-sugar syrup, with matcha', '¥2,090', 'Café', 'ask', 'ask', '2026.', 'an_warabi'),
      it('季節の上生菓子とまっ茶', 'kisetsu no jounamagashi to matcha', 'Seasonal jō-namagashi with matcha', '¥1,650', 'Café', 'ask', 'ask', '2023.', 'namagashi_set'),
      it('蒸籠蒸 御目出糖とまっ茶', 'omedetou to matcha', 'Steamed "Omedetō" with matcha', '¥1,650', 'Café', 'ask', 'ask', '2023.', 'omedeto_set'),
    ] }, {
    cuisine: '1617年京都創業の和菓子・「御目出糖」・10席の喫茶で煉りたてあん蕨と粟ぜんざい',
    neighborhood: '銀座七丁目、汐留寄りのビル1階。東銀座駅から徒歩3〜4分',
    gf_detail: '要確認。喫茶の粟ぜんざいは粟に特製こしあん、あん蕨は特製あんと蕨粉を煉り上げてきな粉と黒糖蜜。ただし原材料の全体や製造の仕方を記した情報はありません。',
    vegan_detail: '要確認。紹介されている喫茶の甘味は粟・あん・蕨粉・きな粉・黒糖蜜ですが、レシピ全体を確認した情報はありません。',
    notes: '[個人店・400年の和菓子] 元和3年(1617)に京都寺町三条で創業し、御所や所司代、寺社に菓子を納め、後水尾天皇に納めた記録も残る老舗。明治5年(1872)の遷都で東京・八重洲へ移り、銀座にも出店しましたが、戦災で両店とも焼失し銀座店のみ再建。銀座で何度か移転し、2022年9月に今の1階へ移って喫茶を併設しました。現在13代目の樋口家の店です(飯田橋の「いいだばし萬年堂」は11代目の次男が独立した別の店)。看板はお赤飯そっくりの蒸し菓子「御目出糖」。手土産の持ち帰りが中心ですが、10席の喫茶では抹茶とのセットも。粟ぜんざい(1,650円)は新品種「いわてあわこがね」に特製こしあんで、木箱で出しお茶請けとほうじ茶付き。注文を受けてから煉る煉りたてあん蕨とお抹茶(2,090円)は、特製あんと蕨粉にきな粉、黒糖蜜を添えて(2026年1月)。2026年は麩まんじゅうや葛菓子「吉野つゆ」も。',
  });
}

// ================================================================ 銀座 スケベニンゲン
{
  const ST = 'https://san-tatsu.jp/articles/205383/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13014927/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:30'], ['17:30', '22:00']), sat = day(['11:30', '14:30'], ['17:30', '21:00']);
  put({
    id: 'tokyo_ginza_scheveningen', name: '銀座 スケベニンゲン (Ginza Scheveningen)', category: 'OMNI',
    lat: 35.671608, lng: 139.766812,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. A pasta house: 63 pastas on the menu, and the signature frittata is wheat pasta bound with meat sauce, egg and Parmigiano and pan-fried. No gluten-free pasta is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: the frittata has meat sauce, egg and cheese, and the menu centres on seafood pasta.',
    hours_raw: 'Tue, Wed, Fri 11:30–14:30 and 17:30–22:00 (L.O. 20:30); Thu lunch only; Sat and holidays 11:30–14:30 and 17:30–21:00 (L.O. 19:30); closed Sundays and Mondays (Tabelog). Cards, e-money and PayPay accepted.',
    hours: { 1: ld, 2: ld, 3: day(['11:30', '14:30']), 4: ld, 5: sat }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme on Matsuya-dōri, down a yellow staircase (B1F) — 2 min from Ginza Stn',
    cuisine: 'Southern-Italian home cooking since 1979 · the original pasta "frittata" · 63 pastas', cuisine_type: 'other',
    website: null, gmaps: gm('銀座 スケベニンゲン 銀座3-7-13'), menu_url: null,
    notes: "[Italian · the pasta frittata] A bright yellow staircase off Matsuya-dōri leads to a warm basement trattoria; the barber's shop further down the corridor gets its customers by mistake. In 1977 a former travel agent, 小野澤邦夫, and chef 山口櫻子 opened a travel agency and café by Shimbashi Station and toured Europe planning trips. They named the restaurant after Scheveningen, the resort outside The Hague, the moment they saw the place name. In 1979 they moved to Ginza 3-chōme as a southern-Italian home-cooking restaurant. Yamaguchi has since died and Onozawa has retired to Okinawa, and manager 越塚さん runs the room. The signature frittata, Yamaguchi's own invention, is pasta tossed with house meat sauce, whole egg and Parmigiano, then pan-fried into an omelette shape: ¥1,100 with salad and a drink at lunch in 2022, ¥1,200 in October 2026. There are 63 pastas, mostly seafood, chalked on a blackboard, and 24 seats that fill at lunch with staff from Mitsukoshi and Matsuya.",
    chef_bio: {
      chef_name: 'Manager 越塚さん (founders 小野澤邦夫 and chef 山口櫻子)', roles: ['manager', 'founders'],
      origin: 'Travel agency and café by Shimbashi Station, 1977; restaurant in Ginza 3-chōme from 1979',
      background: 'Founder Onozawa came from a travel agency; chef Yamaguchi created the frittata. Yamaguchi has died and Onozawa lives in Okinawa (san-tatsu, 2022).',
      philosophy: null,
      specialty: 'Frittata; seafood pasta.',
      anecdotes: [
        { text: '「お2人ともすごくお洒落で、こだわりをお持ちでした。そんな2人だからお店も一番上等な場所である銀座に開かれたのだと思います」 — 越塚さん.', source: ST },
        { text: '「いえ、この料理はシェフの山口櫻子さんが考えたオリジナル料理です」 — on the frittata.', source: ST },
        { text: '"Frittata JPY 1200 — the meat sauce pasta, with a refreshing acidity from the tomatoes, is mixed with eggs and shaped like an omelet." — October 2026.', source: R + 'B537531582/' },
      ],
      japanese_sources_summary: 'さんたつ(2022.10.31): 銀座 スケベニンゲン、銀座三丁目の松屋通り、黄色い階段の地下、店長・越塚さん、1977年に旅行代理店出身の初代オーナー小野澤邦夫さんとシェフ山口櫻子さんが新橋で旅行会社＆喫茶店、店名はオランダ・ハーグ郊外のSCHEVENINGENから、1979年に銀座へ移り南イタリア家庭料理の店、山口さんは逝去・小野澤さんは沖縄、名物フリッタータ1100円(自家製ミートソース・全卵・パルミジャーノ、山口さん考案)、パスタ63種、24席。食べログ: 火水金11:30〜14:30・17:30〜22:00、木は昼のみ、土祝は〜21:00、日月休、カード・電子マネー・PayPay可。2026年の口コミ: フリッタータ1,200円、手書きのランチョンマット、ホール1人。',
      confidence: 'high', sources: [ST, TB, R + 'B537531582/', R + 'B537081404/', R + 'B536966194/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small, cheerful basement room; lunch fills with nearby office and department-store staff. Book for dinner.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Frittata is pasta mixed with meat sauce, egg and Parmigiano, then pan-fried.', source: ST }],
      soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-7-13 成田屋ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目7番13号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537531582/'],
    price_note: 'Frittata price from an October 2026 review (¥1,100 with salad and drink at lunch in 2022).', last_checked: TODAY, items: [
      it('フリッタータ', 'furittaata', 'Frittata: pasta, meat sauce, egg and Parmigiano, pan-fried', '¥1,200', 'Pasta', 'no', 'no', '2026.', 'frittata'),
      it('魚介のパスタ', 'gyokai no pasuta', 'Seafood pasta (from 63 pastas)', '', 'Pasta', 'no', 'no', '', 'seafood_pasta'),
    ] }, {
    cuisine: '1979年創業の南イタリア家庭料理・オリジナルのパスタ「フリッタータ」・パスタ63種',
    neighborhood: '銀座三丁目の松屋通り、黄色い階段を下りた地下1階。銀座駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。パスタ63種の店で、名物フリッタータは小麦のパスタをミートソース・卵・パルミジャーノとからめて焼いたもの。グルテンフリーのパスタは記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。フリッタータはミートソース・卵・チーズ入りで、メニューは魚介のパスタが中心です。',
    notes: '[イタリアン・パスタのフリッタータ] 松屋通りの黄色い階段を下りた温かな地下のトラットリア。廊下の奥の理髪店と間違える人もいるそう。1977年、旅行代理店出身の初代オーナー小野澤邦夫さんとシェフ山口櫻子さんが新橋駅近くに旅行会社と喫茶店を開き、ヨーロッパ各地を回る中でオランダ・ハーグ郊外のリゾート地SCHEVENINGENの名に一目惚れ。1979年に銀座三丁目へ移り南イタリア家庭料理の店に。山口さんは亡くなり、小野澤さんは沖縄で暮らし、今は店長の越塚さんが店を切り盛りします。名物は山口さん考案のフリッタータで、自家製ミートソース・全卵・パルミジャーノにパスタをからめてオムレツ状に焼いたもの(2022年ランチはサラダとドリンク付き1,100円、2026年10月は1,200円)。黒板には魚介中心のパスタが63種、24席はランチどきに三越や松屋で働く人たちで埋まります。',
  });
}

// ================================================================ 月光荘サロン 月のはなれ
{
  const ST = 'https://san-tatsu.jp/articles/111424/'; const HP = 'https://tsuki-hanare.com/';
  const RM = HP + 'recruit-manager/'; 
  const w = day(['12:00', '23:00']), s = day(['12:00', '21:00']);
  put({
    id: 'tokyo_gekkoso_salon_tsuki_no_hanare', name: '月光荘サロン 月のはなれ (Gekkōsō Salon Tsuki no Hanare)', category: 'OMNI',
    lat: 35.668453, lng: 139.760834, loc_approx: 'single',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Creole food (gumbo, pulled-pork rice in barbecue sauce) plus a lemon cake and cocktails; no ingredient lists or gluten-free options are published.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: the signature dishes are gumbo and pulled-pork rice. No vegan dish is listed.',
    hours_raw: 'Mon–Sat 12:00–23:00 (L.O. 22:00); Sun and holidays 12:00–21:00 (L.O. 20:00) (official site; the site shows the day\'s hours, which can vary). Fifth floor, stairs only (58 steps). Live music nightly; no music charge.',
    hours: { 0: w, 1: w, 2: w, 3: w, 4: w, 5: w, 6: s }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, rooftop of the Gekkōsō Building (5F, no lift) — 3 min from Shimbashi Stn',
    cuisine: 'Rooftop salon-café-bar of a 1917 art-supply shop · Creole gumbo · free live music nightly', cuisine_type: 'cafe',
    website: HP, gmaps: gm('月光荘サロン 月のはなれ 銀座8-7-18'), menu_url: HP + 'menu/',
    notes: "[Café-bar · the art shop's rooftop salon] Fifty-eight steps up a Ginza 8-chōme building, in what was the art-supply shop's storeroom, half of it now a rooftop terrace. 月光荘, the art-supply shop founded in Taishō 6 by 橋本兵藏, with the poet Yosano Akiko closely involved in its birth, was once a salon for writers, painters and politicians. In 2013 the founder's grandson and third-generation head, 日比康造, a musician, opened 'Tsuki no Hanare' to bring that salon back. The walls change every two weeks with young artists' work, an 'oekaki set' lends you the shop's paints and a sketchbook to keep (¥1,000 in 2021), and musicians play every night for free. Tables used at Gekkōsō since the Taishō era sit among French rattan chairs. The food is Creole, which 日比 ate in New Orleans: gumbo, and pulled-pork rice in barbecue sauce (¥1,150 in 2021). There is also a whole-lemon cake (¥750) with hand-drip coffee (¥680), and the lavender 'Yosano Blue Moon' cocktail (¥1,200), after the 'pale purple sake' of Yosano's verse. A store manager runs the room day to day; in 2026 the site advertised for a successor as the current manager prepares to go independent.",
    chef_bio: {
      chef_name: '日比康造 (3rd-generation head of 月光荘, founder\'s grandson); run by a store manager', roles: ['owner family (3rd generation)', 'store manager'],
      origin: 'Salon opened 2013 by the art-supply shop 月光荘 (founded 1917)',
      background: 'A musician who worked in the family business from student days and spent time in New Orleans, the source of the Creole menu (san-tatsu, 2021). A hired store manager runs operations (official site, 2026).',
      philosophy: '「色感と音感は人生の宝物」 — 月光荘\'s founding motto, as the founder used to say.',
      specialty: 'Gumbo; pulled-pork rice; Tsuki no lemon cake.',
      anecdotes: [
        { text: '「『月のはなれ』にとって58段の階段は、頭を下げて入り、視線を上げれば別世界となるお茶室のにじり口に似た役割だと思っています」 — 日比康造.', source: ST },
        { text: 'The double-horn logo doubles 月光荘\'s horn trademark to stand for a toast to friends reunited.', source: ST },
        { text: 'October 2026: the site lists that day\'s guitar duo, 15:00–19:00, and a wall exhibition running 13–25 October.', source: HP },
      ],
      japanese_sources_summary: 'さんたつ(2021.7.1): 月のはなれ、銀座8丁目の雑居ビル5階、エレベーターなし、大正6年創業の画材店『月光荘』が2013年に開いたサロン、創業者・橋本兵藏、与謝野晶子、3代目店主で創業者の孫の日比康造さん(音楽家)、元は画材倉庫で面積の半分がルーフトップ、大正時代からのテーブル、2週間ごとの展示、毎晩の生演奏(チャージなし)、クレオール料理・ガンボ(ニューオリンズ)、プルドポークライス1150円、月のレモンケーキ750円、ハンドドリップコーヒー680円、お絵かきセット1000円、与謝野ブルームーン1200円、「色感と音感は人生の宝物」、58段の階段。公式サイト(2026): 月〜土12:00〜23:00(L.O.22:00)、日祝12:00〜21:00(L.O.20:00)、オンライン予約、2026年10月の演奏スケジュールと壁面展示、現店長の独立を見据え店長候補を募集。',
      confidence: 'high', sources: [ST, HP, RM],
    },
    cultural_comfort: { level: 'konnichiwa', note: '58 steps, no lift. Book online; live music every night with no charge; borrow paints and sketch.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: false, address_ja: '〒104-0061 東京都中央区銀座8-7-18 月光荘ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site shows the live-music schedule and wall exhibition for October 2026.' },
    pin_source: `GSI address point 東京都中央区銀座八丁目7番18号 (go); no Tabelog listing found; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [ST],
    price_note: 'Prices from the July 2021 san-tatsu feature; the official menu is published as images.', last_checked: TODAY, items: [
      it('ガンボ', 'ganbo', 'Gumbo (Creole)', '', 'Food', 'ask', 'no', '', 'gumbo'),
      it('やみつきプルドポークライス', 'yamitsuki purudo pooku raisu', 'Pulled-pork rice in barbecue sauce', '¥1,150', 'Food', 'ask', 'no', '2021.', 'pulled_pork_rice'),
      it('月のレモンケーキ', 'tsuki no remon keeki', 'Whole-lemon cake', '¥750', 'Sweets', 'ask', 'ask', '2021.', 'lemon_cake'),
      it('ハンドドリップコーヒー', 'hando dorippu koohii', 'Hand-drip coffee', '¥680', 'Drinks', 'gf', 'vegan', '2021.', 'coffee'),
      it('与謝野ブルームーン', 'yosano buruumuun', 'Yosano Blue Moon cocktail', '¥1,200', 'Drinks', 'ask', 'ask', '2021.', 'blue_moon'),
      it('お絵かきセット', 'oekaki setto', 'Drawing set: paints to borrow and a sketchbook to keep', '¥1,000', 'Other', '', '', '2021.', 'oekaki'),
    ] }, {
    cuisine: '1917年創業の画材店のルーフトップ・サロン・クレオールのガンボ・毎晩無料の生演奏',
    neighborhood: '銀座八丁目、月光荘ビル5階の屋上(エレベーターなし)。新橋駅から徒歩3分',
    gf_detail: '要確認。クレオール料理(ガンボ、バーベキューソースのプルドポークライス)とレモンケーキ、カクテル。原材料やグルテンフリーの選択肢は公開されていません。',
    vegan_detail: '記述上はヴィーガンではありません。名物はガンボとプルドポークライスで、ヴィーガン料理は記載がありません。',
    notes: '[カフェバー・画材店の屋上サロン] 銀座8丁目のビルの58段の階段を上った5階、かつての画材倉庫で、面積の半分が屋上テラス。大正6年に橋本兵藏が創業し、誕生に与謝野晶子が深く関わった画材店「月光荘」は、かつて文壇・画壇・政財界の人々が集うサロンでもありました。2013年、創業者の孫で3代目、音楽家でもある日比康造さんがそのサロンを取り戻そうと開いたのが「月のはなれ」。壁面は2週間ごとに若手作家の展示、画材とスケッチブックを借りられるお絵かきセット(2021年1,000円)、毎晩チャージなしの生演奏。大正時代から月光荘で使うテーブルにフランス製ラタンの椅子。料理は日比さんがニューオリンズで親しんだクレオールで、ガンボやバーベキューソースのプルドポークライス(2021年1,150円)。レモンを丸ごと練り込んだ月のレモンケーキ(750円)とハンドドリップコーヒー(680円)、与謝野晶子の「うすむらさきの酒」にちなむ与謝野ブルームーン(1,200円)も。日々の運営は店長が担い、2026年には現店長の独立を見据えた店長候補を募集しています。',
  });
}

save();
