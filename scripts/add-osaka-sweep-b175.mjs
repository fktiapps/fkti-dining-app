// Osaka sweep (2-mile circle around Dotonbori), batch 175 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 大阪アメリカ村 甲賀流 本店 (Koga Ryu, Amerikamura takoyaki stand since 1974, by Triangle Park)
//   + 蕎麦しゃぶ総本家 浪花そば なんばダイニングメゾン店 (Naniwa Soba: soba-shabu and meat dipping soba; Takashimaya 7F)
//   + オラ タコス バー (Ola Tacos-bar: Mexican tacos and tequila since 2001; Higashi-Shinsaibashi)
//   Skips: department-store and station chain counters (たこ八 難波店, ファーイーストバザール, らぽっぽファーム, ペック, フォション).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 175);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27019933', 'Chain takeaway counter in Takashimaya B1F with a few aisle seats; not a sweep target.');
skip('27078588', 'Chain gelato counter in Takashimaya; not a sweep target.');
skip('27129849', 'Chain sweets kiosk in Nankai Namba Station; not a sweep target.');
skip('27004673', 'Chain bakery-café counter in Takashimaya; not a sweep target.');
skip('27015287', 'Chain bakery-café counter in Takashimaya; not a sweep target.');

// ================================================================ 大阪アメリカ村 甲賀流 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001436/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.kougaryu.jp/';
  const WD = day(['10:30', '20:30']);
  put({
    id: 'osaka_kogaryu_honten_amerikamura', name: '大阪アメリカ村 甲賀流 本店 (Osaka America Mura Koga Ryu Honten)', category: 'OMNI',
    lat: 34.672253, lng: 135.497764, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: takoyaki batter with sauce; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki in a dashi batter, topped with bonito flakes and mayonnaise.',
    hours_raw: 'Sun–Fri 10:30–20:30; Saturday and the day before a holiday 10:30–21:30; may change, so check (Tabelog). One diner found it open about 10 minutes early (October 2026). No reservations (Tabelog). No cards or e-money; PayPay accepted (Tabelog). Non-smoking. Eat-in space upstairs; takeout (Tabelog; October 2026). Founded 1974 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['10:30', '21:30']), 6: WD }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-18-4, Koga Ryu Bldg 1F, opposite Amerikamura\'s Triangle Park — 2 min from Yotsubashi Stn exit 5',
    cuisine: 'Takoyaki stand with eat-in space upstairs (20 seats) · ten small, soft takoyaki per serving with a dashi-rich batter · classic sauce and mayo ¥600 · negi sauce ¥700, heaped with green onion · negi ponzu · soy sauce and mayo · toppings of aonori and bonito flakes',
    website: OWN, gmaps: gm('甲賀流 本店 アメリカ村'), menu_url: null,
    notes: "[Takoyaki · Amerikamura's 1974 takoyaki stand by Triangle Park] The original shop of Koga Ryu, a takoyaki stand across from Amerikamura's Triangle Park since 1974, now with about nine shops. Ten small balls come per serving, soft and gooey rather than crisp, with a strong dashi flavor and big pieces of octopus. One diner calls the classic sauce-and-mayo (¥600) the most popular; another was told that Koga Ryu was the first to put mayonnaise on takoyaki. The negi versions come buried under green onion, with sauce (¥700) or ponzu. Eat upstairs or take them to the park. Two diners say Osaka locals pointed them here instead of Dotonbori. PayPay or cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1974 (Tabelog); the main shop of about nine (October 2026 review).', background: 'Takoyaki stand (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Sauce-and-mayo takoyaki.',
      anecdotes: [
        { text: '"The most popular dish, the sauce mayo takoyaki, features a fluffy and gooey batter infused with dashi! The special mayonnaise is rich yet not overwhelming…" — October 2026.', source: R + 'B538036792/' },
        { text: '"I ordered the negi sauce version for JPY 700, tax included… the takoyaki is so generously garnished with green onions that you can hardly see the balls themselves." — October 2026.', source: R + 'B536706973/' },
      ],
      japanese_sources_summary: '食べログ: 大阪アメリカ村 甲賀流 本店、大阪市中央区西心斎橋2-18-4 甲賀流ビル 1F、アメリカ村三角公園の向かい、四ツ橋駅5番出口から徒歩2分、日〜金10:30〜20:30、土・祝前日10:30〜21:30、1974年創業、予約不可、カード・電子マネー不可、PayPay可、禁煙、20席 (イートインスペース)、テイクアウト、子ども歓迎、公式サイトあり。口コミ(2026年10月): 小ぶりで10個、だしの効いたふわとろの生地、大きめのたこ、ソースマヨ600円、ネギソース700円、ねぎと ponzu、醤油マヨ、aonori とkatsuobushi 、2階で食べられる、三角公園で食べるのも楽しい、たこ焼きにマヨネーズを最初にかけた店と聞いたという声、地元の人に勧められたという声、約9店舗。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536706973/', R + 'B536960612/', R + 'B537279576/', R + 'B537630867/', R + 'B538036792/', R + 'B538118348/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the stand; eat upstairs or take away (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-18-4 甲賀流ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目18番4号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537279576/', R + 'B536706973/'],
    price_note: 'Prices from October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, sauce and mayo (10)', '¥600', 'Takoyaki', 'no', 'no', 'October 2026.', 'saucemayo'),
      it('', '', 'Takoyaki, negi sauce (10)', '¥700', 'Takoyaki', 'no', 'no', 'October 2026.', 'negi'),
      it('', '', 'Takoyaki, negi ponzu', '', 'Takoyaki', 'no', 'no', 'October 2026.', 'negiponzu'),
      it('', '', 'Takoyaki, soy sauce and mayo', '', 'Takoyaki', 'no', 'no', 'October 2026.', 'shoyumayo'),
    ] }, {
    cuisine: '2階にイートインのあるたこ焼きの店 (20席)・1人前10個、小ぶりでやわらかく、だしの効いた生地・定番のソースマヨ600円・ねぎたっぷりのネギソース700円・ねぎと ponzu・醤油マヨ・aonori とkatsuobushi ',
    neighborhood: '西心斎橋2-18-4 甲賀流ビル 1F、アメリカ村の三角公園の向かい。四ツ橋駅5番出口から徒歩2分',
    gf_detail: '実質グルテンフリーではありません。ソースのかかったたこ焼きの生地。グルテンフリーの品の記載なし。',
    vegan_detail: 'ヴィーガンではありません。だしの生地のたこ入りのたこ焼きに、katsuobushi とマヨネーズ。',
    notes: '[たこ焼き・アメリカ村、三角公園前の1974年からのたこ焼き] 1974年からアメリカ村の三角公園の向かいにある甲賀流の本店で、いまは約9店舗。1人前10個の小ぶりなたこ焼きは、カリッとより、ふわとろで、だしがしっかり効き、たこは大きめ。定番のソースマヨ (600円) がいちばん人気という声、甲賀流がたこ焼きに初めてマヨネーズをかけたと聞いたという声も。ネギはねぎに埋もれるほどで、ソース (700円) かponzu で。2階で食べるか、公園に持っていって。道頓堀よりここを、と地元の人に勧められたという声がふたり。支払いは現金かPayPay。',
  });
}

// ================================================================ 蕎麦しゃぶ総本家 浪花そば なんばダイニングメゾン店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27046862/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '21:30']); const FS = day(['11:00', '22:00']);
  put({
    id: 'osaka_naniwa_soba_namba_dining_maison', name: '蕎麦しゃぶ総本家 浪花そば なんばダイニングメゾン店 (Soba Shabu Sohonke Naniwa Soba)', category: 'OMNI',
    lat: 34.664478, lng: 135.50185, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The buckwheat ratio of the house-made soba is not stated, and the menu includes tempura, inari sushi and soy-based broths.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: dashi broths and beef, pork and chicken dishes; nothing described as vegan.',
    hours_raw: 'Sun–Thu 11:00–21:30 (last order 21:00); Friday–Saturday 11:00–22:00 (last order 21:30); hot pot orders end earlier; open year-round with Takashimaya (Tabelog). Reservations taken; full same-day cancellation charge on courses (Tabelog). Cards, e-money and QR accepted (Tabelog). Non-smoking. Children welcome; kids menu of soba and inari (Tabelog). Two hours free parking at the Takashimaya car park with ¥3,000 spent (Tabelog). Opened 2 March 2010 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: FS, 5: FS, 6: WD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-18, Namba Dining Maison 7F in Takashimaya Osaka — 1 min from Namba Stn',
    cuisine: 'House-made soba and dashi, from a local chain of four (18 seats) · soba-shabu (Wagyu beef swished in dashi, eaten with soba), course from ¥5,000, ¥6,500 with all-you-can-drink · meat dipping soba with a touch of chili oil, ¥1,300; finish the dip with soba water · chilled sudachi soba ¥1,280 · ume and grated yam soba ¥1,080 · fried eggplant and grated daikon soba ¥1,050 · chicken nanban soba · large portion +¥220; tempura set +¥500 · oyakodon and soba set · inari sushi ¥800; shrimp pressed sushi',
    website: null, gmaps: gm('浪花そば なんばダイニングメゾン店'), menu_url: TB + 'dtlmenu/',
    notes: "[Soba · soba-shabu and meat dipping soba on Takashimaya's restaurant floor, Namba] The Takashimaya branch of Naniwa Soba, a small Osaka soba chain (four shops) on the seventh-floor restaurant level, with colorful seats. The signature, trademarked, is soba-shabu: Wagyu swished through the house dashi and eaten with fresh soba, as a course from ¥5,000. For a simpler meal, one repeat visitor always picks the meat dipping soba (¥1,300), pork in a lightly spicy chili-oil dip that becomes a rich soup when you add soba water at the end. Also chilled sudachi soba, ume-and-yam soba and an oyakodon set; diners praise the delicate Kansai-style broth. Open to 21:30 or 22:00, later than many department-store restaurants.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of Naniwa Soba, a local chain of four (September 2026 review); opened 2 March 2010 (Tabelog).', background: 'Soba restaurant in Takashimaya Osaka, with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: 'House-made soba and dashi (Tabelog listing).', specialty: 'Soba-shabu; meat dipping soba.',
      anecdotes: [
        { text: '"…the spicy oil-flavored Niku Tsuke (JPY 1300). It was packed with plenty of pork and soba… When I added the leftover dipping sauce to the soba-yu (soba water) at the end, it transformed into a rich pork-based soup." — September 2026.', source: R + 'B534914104/' },
        { text: '"Each dish was generous in portion, and the broth had a delicate, light flavor that was refined in the Kansai style." — September 2026.', source: R + 'B536320204/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 蕎麦しゃぶ総本家 浪花そば なんばダイニングメゾン店、大阪市中央区難波5-1-18 なんばダイニングメゾン 7F、なんば駅から徒歩1分、日〜木11:00〜21:30 (L.O. 21:00)、金・土11:00〜22:00 (L.O. 21:30)、鍋の注文は早めに終了、年中無休、2010年3月2日開店、予約可、カード・電子マネー・QR可、禁煙、18席、子ども歓迎 (そばとinariのキッズメニュー)、自家製のそばとだし、商標登録の「蕎麦しゃぶ」、コース5,000円から、飲み放題つき6,500円から。口コミ(2026年9〜10月): 大阪の4店舗のチェーン、肉つけそば (ラー油) 1,300円、最後にsoba-yu で割るとスープに、冷やし sudachi そば1,280円、大盛り220円、tempura セット500円、ume tororo1,080円、揚げなすとおろしそば1,050円、inari800円、海老の押し寿司、oyakodon のセット、chicken nanban のそば、関西らしいやさしいだし、カラフルな椅子。',
      confidence: 'medium', sources: [TB, R + 'B449923906/', R + 'B479551456/', R + 'B534914104/', R + 'B535411161/', R + 'B536320204/', R + 'B537744749/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor; kids menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-18 なんばダイニングメゾン 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波五丁目1番18号 (go) 108m — Tabelog point kept (inside Takashimaya Osaka); 15 m from Fukutaro (8F), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B449923906/', R + 'B534914104/'],
    price_note: 'Prices from September–October 2026 reviews and the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Soba-shabu course', 'from ¥5,000', 'Courses', 'ask', 'no', 'Tabelog listing.', 'sobashabu'),
      it('', '', 'Meat dipping soba with chili oil', '¥1,300', 'Soba', 'ask', 'no', 'September 2026.', 'nikutsuke'),
      it('', '', 'Chilled sudachi soba', '¥1,280', 'Soba', 'ask', 'no', 'October 2026.', 'sudachi'),
      it('', '', 'Fried eggplant and grated daikon soba', '¥1,050', 'Soba', 'ask', 'no', 'September 2026.', 'nasu'),
      it('', '', 'Inari sushi', '¥800', 'Sides', 'ask', 'no', 'September 2026.', 'inari'),
    ] }, {
    cuisine: '自家製のそばとだし、大阪の4店舗のチェーン (18席)・蕎麦しゃぶ (和牛をだしにくぐらせ、そばと食べる)、コース5,000円から、飲み放題つき6,500円・ラー油の効いた肉つけそば1,300円、最後はsoba-yu で割って・冷やし sudachi そば1,280円・ume tororo そば1,080円・揚げなすとおろしそば1,050円・chicken nanban のそば・大盛り+220円、tempura セット+500円・oyakodon とそばのセット・inari800円、海老の押し寿司',
    neighborhood: '難波5-1-18 なんばダイニングメゾン 7F (大阪高島屋)。なんば駅から徒歩1分',
    gf_detail: '要確認。自家製そばのそば粉の割合は書かれておらず、tempura 、inari、醤油ベースのつゆも。',
    vegan_detail: '実質ヴィーガンではありません。だしのつゆと、牛・豚・鶏の料理。ヴィーガンの記載なし。',
    notes: '[そば・なんば、高島屋のレストランフロアで蕎麦しゃぶと肉つけそば] 大阪で4店舗のそばのチェーン、浪花そばの高島屋7階の店で、カラフルな椅子の店内。看板は商標登録の蕎麦しゃぶで、和牛を自家製のだしにくぐらせ、打ちたてのそばと食べる。コースは5,000円から。手軽に食べるなら肉つけそば (1,300円) を、と何度も通う人の声。豚肉にピリッとラー油の効いたつけ汁で、最後にsoba-yu を入れると濃いスープに。冷やし sudachi そば、ume tororo、oyakodon のセットも。関西らしいやさしいだしをほめる声。21時半か22時までと、デパートの食事としては遅くまで開いている。',
  });
}

// ================================================================ オラ タコス バー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27010854/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.olatacos-osaka.com/';
  const TW = day(['18:30', '01:00']); const FS = day(['18:30', '03:00']);
  put({
    id: 'osaka_ola_tacos_bar_higashishinsaibashi', name: 'オラ タコス バー (Ola Tacos-bar)', category: 'OMNI',
    lat: 34.67343, lng: 135.50322, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tortillas are handmade (Tabelog listing), but whether they are corn or wheat is not stated; quesadillas are fried.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and there is a mushroom quesadilla, but cheese is common and fillings are not described as vegan.',
    hours_raw: 'Tue–Thu 18:30–01:00; Friday–Saturday 18:30–03:00; Sunday 18:30–24:00; food last order 23:00; closed Monday (Tabelog). Book ahead, since food may run out late (June 2026). Cards accepted; no e-money (Tabelog). Smoking allowed (Tabelog). Opened 5 April 2001 (Tabelog).',
    hours: { 1: TW, 2: TW, 3: TW, 4: FS, 5: FS, 6: day(['18:30', '00:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-1, Cosmi Bldg 1F, under a neon "Tacos" sign by a FamilyMart corner — about 3 min from Shinsaibashi Stn exit 6',
    cuisine: 'Mexican tacos and tequila bar (about 20 seats, counter and terrace) · tacos on handmade tortillas: chorizo, braised pork rib (de costilla) ¥880, pulled pork with beans, chicken, cheese-filled · quesadilla with garlic mushrooms, half ¥880 · shrimp and avocado cocktail (cocktail de camarón) ¥1,320 · about 30 salsas, mild to fierce, plus habanero sauce · tequila and mezcal, straight or in cocktails · non-alcoholic Virgin Chichi and cranberry cooler ¥600',
    website: OWN, gmaps: gm('Ola Tacos-bar 東心斎橋'), menu_url: null,
    notes: "[Mexican · a late-night taco and tequila bar since 2001, Higashi-Shinsaibashi] A small Mexican bar near Shinsaibashi, open since 2001 and late into the night, with a neon 'Tacos' sign, a terrace and a Latin, clink-glasses mood. Tacos come on handmade tortillas: chorizo with tangy salsa, tender braised pork rib (¥880), pulled pork with beans, or cheese-filled. Start with the shrimp-and-avocado cocktail de camarón (¥1,320) and a crisp garlic-mushroom quesadilla. About 30 salsas sit ready for heat-seekers, and the tequila and mezcal list is deep; one diner who doesn't care for tequila found the tequila soda easy to drink. One diner found the chicken taco's mayo-like sauce unexpected. Book ahead: food can run out late. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 5 April 2001 (Tabelog).', background: 'Mexican taco and tequila bar (Tabelog; 2025–2026 reviews).', philosophy: 'Mexican food is about chili aroma and flavor more than heat (Tabelog listing).', specialty: 'Tacos on handmade tortillas; tequila and mezcal.',
      anecdotes: [
        { text: '"Cocktail de Camaron (JPY 1,320, tax included) — Shrimp and avocado marinated with tomato and lime… Tacos de Costilla (JPY 880, tax included) — Tacos made with tender braised pork rib." — June 2026.', source: R + 'B530366883/' },
        { text: '"The tacos were authentically delicious, featuring pulled pork and a bean paste, and the tortillas were especially tasty." — September 2026.', source: R + 'B534958911/' },
      ],
      japanese_sources_summary: '食べログ: オラ タコス バー、大阪市中央区東心斎橋1-17-1 コスミビル 1F、心斎橋駅6番出口から、ファミリーマートの角、ネオンの「Tacos」が目印、火〜木18:30〜翌1:00、金・土18:30〜翌3:00、日18:30〜24:00 (料理L.O. 23:00)、月曜休み、2001年4月5日開店、約20席、テラスあり、カード可、電子マネー不可、喫煙可、ベジタリアン対応ありと掲載、手作りのトルティーヤ、約30種のサルサ、メキシコから直接仕入れるテキーラとメスカル、公式サイトあり。口コミ(2025年10月〜2026年9月): チョリソーのタコス、豚スペアリブの煮込みのタコス880円、豆のペーストとプルドポークのタコス、チーズのタコス、鶏のタコス、にんにくきのこのケサディーヤ (ハーフ880円)、海老とアボカドのカクテル1,320円、ハバネロソース、テキーラソーダ、ノンアルコールのヴァージンチチとクランベリークーラー600円、遅い時間は料理がなくなることも、予約がおすすめ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B516078233/', R + 'B518872893/', R + 'B521147911/', R + 'B530366883/', R + 'B534958911/', R + 'B535964811/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively Latin bar; book ahead (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-1 コスミビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番1号 (go) 2m; OSM ROCO node/2417575394 6m; offset about 8 m west of the Tabelog point to clear Hatena Thai (3.7 m) and Monja Mugi (same building 2F, 4.9 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530366883/'],
    price_note: 'Prices from a June 2026 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'Tacos de costilla (braised pork rib)', '¥880', 'Tacos', 'ask', 'no', 'June 2026.', 'costilla'),
      it('', '', 'Chorizo tacos', '', 'Tacos', 'ask', 'no', 'December 2025.', 'chorizo'),
      it('', '', 'Quesadilla with garlic mushrooms, half', '¥880', 'Tacos', 'ask', 'ask', 'June 2026.', 'quesadilla'),
      it('', '', 'Cocktail de camarón (shrimp and avocado)', '¥1,320', 'Starters', 'ask', 'no', 'June 2026.', 'camaron'),
      it('', '', 'Virgin Chichi (non-alcoholic)', '¥600', 'Drinks', '', '', 'June 2026.', 'chichi'),
    ] }, {
    cuisine: 'メキシコのタコスとテキーラのバー (約20席、カウンターとテラス)・手作りのトルティーヤのタコス: チョリソー、豚スペアリブの煮込み880円、豆のペーストとプルドポーク、鶏、チーズ・にんにくきのこのケサディーヤ (ハーフ880円)・海老とアボカドのカクテル1,320円・マイルドから激辛まで約30種のサルサ、ハバネロソース・テキーラとメスカル、ストレートやカクテルで・ノンアルコールのヴァージンチチとクランベリークーラー600円',
    neighborhood: '東心斎橋1-17-1 コスミビル 1F、ファミリーマートの角のネオンの「Tacos」が目印。心斎橋駅6番出口から約3分',
    gf_detail: '要確認。トルティーヤは手作り (食べログ) だが、とうもろこしか小麦かは書かれていない。ケサディーヤは揚げている。',
    vegan_detail: '要確認。食べログにベジタリアン対応ありとあり、きのこのケサディーヤもあるが、チーズが多く、ヴィーガンの具の記載なし。',
    notes: '[メキシコ料理・東心斎橋、2001年からの深夜のタコスとテキーラのバー] 心斎橋近くの小さなメキシコのバーで、2001年から、夜遅くまで。ネオンの「Tacos」の看板、テラス席、乾杯が飛び交うラテンの雰囲気。タコスは手作りのトルティーヤで、酸味のあるサルサのチョリソー、やわらかい豚スペアリブの煮込み (880円)、豆とプルドポーク、チーズ入りなど。まずは海老とアボカドのカクテル (1,320円) とカリッとしたにんにくきのこのケサディーヤを。約30種のサルサが辛党を待ち、テキーラとメスカルも充実。テキーラが苦手でもテキーラソーダは飲みやすかったという声。鶏のタコスのマヨネーズのようなソースが意外だったという声も。遅い時間は料理がなくなるので予約を。月曜休み。',
  });
}

save();
