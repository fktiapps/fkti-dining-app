// Osaka sweep (2-mile circle around Dotonbori), batch 138 — ramen phase (all OMNI).
//   + THE 9X OSAKA ("French-twist" salmon ramen and salmon tantanmen in a bar-like room; Tenma)
//   + 人類みな辛さが全て (graded-spice chige ramen and soupless "30", up to END; Abeno HOOP food hall)
//   + 麺処 藤山二郎 あべのHoop店 (Takaida-leaning Jiro-style ramen, shio and soupless versions; Abeno HOOP food hall)
//   + つけ麺 ひらの (thick homemade whole-wheat noodles in kombu water, tonkotsu-seafood dip with yuzu; Tamatsukuri)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 138);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ THE 9X OSAKA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27132647/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://the9x.jp/';
  const L14 = ['11:30', '14:30']; const L15 = ['11:30', '15:00'];
  put({
    id: 'osaka_the_9x_osaka_tenma', name: 'THE 9X OSAKA (THE 9X OSAKA)', category: 'OMNI',
    lat: 34.692226, lng: 135.515575, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; croutons; tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: salmon and pork; espuma; cheese in the Genovese mazesoba; egg.',
    hours_raw: 'Mon 11:30–14:30; Wed 11:30–15:00; Thu 11:30–14:30 and 18:30–21:00; Fri 11:30–15:00 and 17:00–21:00; Sat–Sun 11:30–15:00 and 16:00–18:00; closed Tue; last orders 30–60 min before close (Tabelog). Cards and PayPay accepted; no e-money (Tabelog).',
    hours: { 0: day(L14), 2: day(L15), 3: day(L14, ['18:30', '21:00']), 4: day(L15, ['17:00', '21:00']), 5: day(L15, ['16:00', '18:00']), 6: day(L15, ['16:00', '18:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tenma 3-1-2, TS Bldg 1F (Kita-ku), by the Okawa river — 8 min from Tenmabashi Stn',
    cuisine: 'Creative salmon ramen, "with a French twist" · salmon tantanmen with spice levels, colorful, like a soup pasta · white salmon ramen: creamy broth under an espuma, thin chashu, thick smoked salmon, mizuna, carrot, croutons, burdock chips, balsamic and chili powder, slightly wavy flat noodles · summer chilled salmon ramen with firm noodles · Genovese mazesoba with basil and cheese on flat noodles · salmon rice set (pour the ramen broth over it) · basil aedama side · seasoned egg · counter, terrace and tables, 33 seats',
    website: OWN, gmaps: gm('THE 9X OSAKA'), menu_url: null,
    notes: "[Ramen · \"French-twist\" salmon ramen in a bar-like room, Tenma] A stylish shop near the Okawa river that looks like a bar from outside, open since 2022, from a group with shops in Tokyo and Kyoto. The bowls look like plated pasta. The white salmon ramen floats an espuma over a creamy broth, then piles on smoked salmon, thin chashu, croutons, crisp burdock chips and balsamic, over slightly wavy flat noodles; the salmon tantanmen is the spicy signature. The Genovese mazesoba, rich with basil and cheese, is a good second dish, and the salmon rice set comes alive with broth poured over. One diner found the white salmon broth more salty than salmony. Staff explain the menu patiently. Lunch-led hours; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 December 2022 (Tabelog); the group also has shops in Tokyo and Kyoto (February 2026 review).', background: 'Creative ramen restaurant (Tabelog; 2026 reviews).', philosophy: '"Ramen with a French twist" (shop banner, July 2026 review).', specialty: 'Salmon ramen and salmon tantanmen.',
      anecdotes: [
        { text: '"On top of the broth, there was a foam (espuma) with thin slices of chashu, thick smoked salmon, mizuna, and carrots, along with unusual croutons and burdock chips, all drizzled with balsamic vinegar and chili powder…" — July 2026, white salmon and salmon rice set.', source: R + 'B531746736/' },
        { text: '"The richness and sweetness of the salmon blended beautifully into the broth, creating a unique depth that was distinct from both seafood and meat flavors, enhanced by the richness and spiciness of the Dan Dan sauce." — September 2026, salmon tantanmen.', source: R + 'B535950847/' },
      ],
      japanese_sources_summary: '食べログ: THE 9X OSAKA、大阪市北区天満3-1-2 TSビル 1F、天満橋駅から徒歩8分、月 11:30〜14:30、水 11:30〜15:00、木 11:30〜14:30・18:30〜21:00、金 11:30〜15:00・17:00〜21:00、土日 11:30〜15:00・16:00〜18:00、火休み、カード・PayPay 可、電子マネー不可、33席 (カウンター9、テラス8、テーブル16)、2022年12月15日開店、公式サイトあり。口コミ(2026年2〜10月): 東京と京都にも店がある、のぼりに「フレンチの要素を取り入れたラーメン」、サーモン担々麺 (辛さを選べる、スープパスタのよう)、白サーモンラーメン (エスプーマ、薄いチャーシュー、厚いスモークサーモン、水菜、にんじん、クルトン、ごぼうチップ、バルサミコ、唐辛子、ややウェーブした平打ち麺)、彩りが美しい白サーモンラーメン、セットのサーモン飯にスープをかける、夏の冷やしサーモンラーメン、バジルとチーズのジェノベーゼまぜそば、バジルの Aedama、味玉、バーのような外観、塩気がサーモンより強いという声、店員がていねいに説明。',
      confidence: 'medium', sources: [TB, OWN, R + 'B523254801/', R + 'B530189861/', R + 'B531746736/', R + 'B532215242/', R + 'B535950847/', R + 'B537135009/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Slightly wavy flat noodles, like flat pasta; firm in the chilled bowl (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen', 'mazesoba_aburasoba'],
      signature_bowl: 'Salmon tantanmen; white salmon ramen (2026).',
      chashu: 'Thin-sliced pork chashu with smoked salmon (July 2026).',
      notable_toppings: ['smoked salmon', 'espuma', 'croutons', 'burdock chips', 'balsamic', 'salmon rice set'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Salmon and pork.' },
      pantheon: 'Tenma\'s salmon ramen plated like French pasta.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537135009/', '"The flavor was very creamy and to my liking" (white salmon) — placed high.'],
        oiliness: [R + 'B523254801/', '"The basil side dish was a bit too rich" — mid-scale.'],
        clarity: [R + 'B532215242/', 'The "creaminess of the white salmon broth" — placed low.'],
        tare_strength: [R + 'B532215242/', '"The broth of the white salmon to be saltier than the salmon flavor itself" (one diner) — placed high.'],
        noodle_firmness: [R + 'B531746736/', '"A nice chewiness" on slightly wavy flat noodles — mid-scale.'],
        aroma_punch: [R + 'B535950847/', '"Enhanced by the richness and spiciness of the Dan Dan sauce" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B531746736/', R + 'B532215242/', R + 'B535950847/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff patiently explain the dishes and spice levels (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区天満3-1-2 TSビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区天満三丁目1番2号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523254801/', R + 'B531746736/', R + 'B532215242/'],
    price_note: 'No prices in the reviews; lunch JPY 1,000–1,999 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Salmon tantanmen', '', 'Ramen', 'no', 'no', 'September 2026.', 'salmon_tantan'),
      it('', '', 'White salmon ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'white_salmon'),
      it('', '', 'Genovese mazesoba', '', 'Mazesoba', 'no', 'no', 'July–October 2026.', 'genovese'),
      it('セットのサーモン飯', '', 'Salmon rice (set)', '', 'Rice', 'ask', 'no', 'July 2026 photo caption.', 'salmon_rice'),
      it('', '', 'Chilled salmon ramen (summer)', '', 'Limited', 'no', 'no', 'June 2026.', 'hiyashi'),
    ] }, {
    cuisine: 'フレンチの要素を取り入れたサーモンのラーメン・辛さを選べるサーモン担々麺、スープパスタのような彩り・白サーモンラーメン: クリーミーなスープにエスプーマ、薄いチャーシュー、厚いスモークサーモン、水菜、にんじん、クルトン、ごぼうチップ、バルサミコ、唐辛子、ややウェーブした平打ち麺・夏の冷やしサーモンラーメン・バジルとチーズのジェノベーゼまぜそば・サーモン飯のセット (スープをかけて)・バジルの Aedama・味玉・カウンター、テラス、テーブルの33席',
    neighborhood: '北区天満3-1-2 TSビル 1F、大川沿い。天満橋駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、クルトン、たれ。',
    vegan_detail: 'ヴィーガンではありません。サーモンと豚、エスプーマ、ジェノベーゼまぜそばのチーズ、卵。',
    notes: '[ラーメン・天満、バーのような店で食べるフレンチ風のサーモンラーメン] 大川近く、外から見るとバーのようなおしゃれな店で、2022年開店、東京と京都にも店があるグループ。一杯はパスタの皿のよう。白サーモンラーメンはクリーミーなスープにエスプーマを浮かべ、スモークサーモン、薄いチャーシュー、クルトン、パリパリのごぼうチップ、バルサミコを重ね、ややウェーブした平打ち麺。辛い看板はサーモン担々麺。バジルとチーズたっぷりのジェノベーゼまぜそばは二品目にいい。サーモン飯のセットはスープをかけて。白サーモンはサーモンより塩気が勝ったという声も。店員はていねいに説明してくれる。営業は昼中心、火曜休み。',
  });
}

// ================================================================ 人類みな辛さが全て
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27132488/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://jinrui-mina-karasa.com';
  put({
    id: 'osaka_jinrui_mina_karasa_ga_subete_abeno_hoop', name: '人類みな辛さが全て (Jinrui Mina Karasa ga Subete)', category: 'OMNI',
    lat: 34.645029, lng: 135.51369, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy base; chili pastes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat soup; minced meat; chashu; egg.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog); the shop account gave 11:00–21:30 in September 2026, so check. Food-hall seating; order, take a buzzer and collect (2026). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Abenosuji 1-2-30, HOOP B1F food hall (Abeno-ku) — 3 min from Abeno Stn',
    cuisine: 'Graded-spice ramen · Jinrui Mina Karasa ga Subete 50 ¥1,100: ramen in a flavorful chige soup with chili, plenty of chili oil and minced meat, medium-thick noodles, thick chashu · Jinrui Mina Karasa ga Subete 30 ¥1,000: soupless, soy base with added spice · yukgaejang ramen · chashu ramen 50 · spice from none and levels 1–4 to "Over" and "END" (+¥200) · toppings: chashu, soft-boiled egg · pork rice bowl ¥350 · food-hall counter and tables',
    website: OWN, gmaps: gm('人類みな辛さが全て'), menu_url: null,
    notes: "[Ramen · graded-spice chige ramen in the Abeno HOOP food hall] A spice-focused counter of the Jinrui Mina Menrui group in the basement food hall of Abeno HOOP, open since 2023. Two bowls carry the name: the 50 (¥1,100), ramen in a flavorful chige soup heavy with chili oil and minced meat on medium-thick noodles, and the soupless 30 (¥1,000). There's also a yukgaejang ramen that one diner likened to Mongolian Tanmen Nakamoto. Spice runs from none through levels 1–4 to Over and the fierce END, which staff suggest only after you've eaten Over; level 2 is already properly hot, and level 1 suits most. The thick chashu soothes the heat, as does a pork rice bowl (¥350). Order, take a buzzer, sit anywhere in the hall.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 February 2023 (Tabelog); part of the Jinrui Mina Menrui group (August 2023 review).', background: 'Spicy ramen counter in a food hall (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Graded-spice chige ramen.',
      anecdotes: [
        { text: '"The 30 is a mixed noodle dish with a soy sauce base and added spiciness, while the 50 is a ramen served in a flavorful chige soup… mixed with not only chili peppers but also a generous amount of chili oil, and the minced meat is quite substantial." — September 2026, 50 at level 2, ¥1,100.', source: R + 'B470014075/' },
        { text: '"When I asked for the \'END,\' [staff] asked, \'Have you tried the OVER? I only recommend the END to those who have eaten the OVER. It\'s quite spicy!\'" — September 2026, 50 at END.', source: R + 'B536114260/' },
      ],
      japanese_sources_summary: '食べログ: 人類みな辛さが全て、大阪市阿倍野区阿倍野筋1-2-30 HOOP B1F フードホール、阿倍野駅から徒歩3分、毎日11:00〜23:00 (店のアカウントでは2026年9月時点11:00〜21:30)、カード・電子マネー・QR可、2023年2月12日開店、公式サイトあり。口コミ(2023年8月〜2026年10月): 人類みな麺類グループの辛い店、人類みな辛さが全て 50 (チゲスープのラーメン、唐辛子、ラー油、たっぷりのひき肉、中太麺、厚いチャーシュー) 1,100円、30 (醤油ベースの辛い汁なし) 1,000円、ユッケジャンラーメン (Mongolian Tanmen Nakamoto のようという声)、チャーシューラーメン 50、辛さはなし・1〜4・Over・END (+200円)、END は Over を食べた人に勧めているという店の人の言葉、2でもかなり辛く1で十分という声、チャーシューと半熟卵のトッピング、豚丼350円、フードホールでブザーを受け取る。',
      confidence: 'medium', sources: [TB, OWN, R + 'B470014075/', R + 'B536114260/', R + 'B536576068/', R + 'B537369562/', R + 'B537693433/', R + 'B538139560/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick, slightly thicker noodles that hold the soup (2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Jinrui Mina Karasa ga Subete 50, ¥1,100 (September 2026).',
      chashu: 'Thick, tender chashu (2026).',
      notable_toppings: ['minced meat', 'chili oil', 'soft-boiled egg', 'pork rice bowl'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat soup.' },
      pantheon: 'Abeno\'s spice ladder in a bowl: chige ramen from level 1 to END.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B536576068/', '"It still had a rich flavor" despite the heat — placed high.'],
        oiliness: [R + 'B470014075/', '"A generous amount of chili oil" — placed high.'],
        clarity: [R + 'B470014075/', 'A chige soup with chili oil and minced meat — bottom of scale.'],
        tare_strength: [R + 'B538139560/', '"The broth was flavorful and enjoyable with the spice" — placed high.'],
        noodle_firmness: [R + 'B538139560/', '"The noodles were a bit thicker and had a unique texture" — mid-scale.'],
        aroma_punch: [R + 'B470014075/', '"Even level 2 spiciness is quite hot!" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B470014075/', R + 'B536576068/', R + 'B538139560/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-hall ordering with a buzzer; staff warn about top spice levels (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市阿倍野区阿倍野筋1-2-30 HOOP B1F フードホール',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市阿倍野区阿倍野筋一丁目2番30号 (go) 50m (large building; Fujiyama Jirou in the same food hall pins ~10 m away); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B470014075/', R + 'B536114260/', R + 'B537369562/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Jinrui Mina Karasa ga Subete 50 (chige ramen)', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'fifty'),
      it('', '', 'Jinrui Mina Karasa ga Subete 30 (soupless)', '¥1,000', 'Mazesoba', 'no', 'no', 'October 2026.', 'thirty'),
      it('', '', 'Spice level END', '+¥200', 'Toppings', 'ask', 'ask', 'September 2026.', 'end'),
      it('', '', 'Yukgaejang ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'yukgaejang'),
      it('', '', 'Pork rice bowl', '¥350', 'Rice', 'no', 'no', 'October 2026.', 'butadon'),
    ] }, {
    cuisine: '辛さを選ぶラーメン・人類みな辛さが全て 50 1,100円: 唐辛子とたっぷりのラー油、ひき肉の旨いチゲスープのラーメン、中太麺、厚いチャーシュー・人類みな辛さが全て 30 1,000円: 醤油ベースに辛さを加えた汁なし・ユッケジャンラーメン・チャーシューラーメン 50・辛さはなし、1〜4、Over、END (+200円)・トッピング: チャーシュー、半熟卵・豚丼350円・フードホールのカウンターとテーブル',
    neighborhood: '阿倍野区阿倍野筋1-2-30 HOOP B1F フードホール。阿倍野駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベース、唐辛子のペースト。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、ひき肉、チャーシュー、卵。',
    notes: '[ラーメン・あべのHOOPのフードホール、辛さを段階で選ぶチゲラーメン] あべのHOOP地下のフードホールにある人類みな麺類グループの辛い専門の店で、2023年開店。店名の一杯は2つ: ラー油とひき肉たっぷりのチゲスープに中太麺の 50 (1,100円) と、汁なしの 30 (1,000円)。Mongolian Tanmen Nakamoto に似ているという声のユッケジャンラーメンも。辛さはなし、1〜4、Over、そして強烈な END まで、END は Over を食べてからにと店の人がすすめる。2でもしっかり辛く、たいていは1で十分。厚いチャーシューと豚丼(350円)が辛さを和らげる。注文してブザーを受け取り、ホールの好きな席で。',
  });
}

// ================================================================ 麺処 藤山二郎 あべのHoop店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27144629/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://sensacion-smile5.co.jp/mendokoro-fujiyamajiro/';
  put({
    id: 'osaka_mendokoro_fujiyama_jirou_abeno_hoop', name: '麺処 藤山二郎 あべのHoop店 (Mendokoro Fujiyama Jirou Abeno Hoop)', category: 'OMNI',
    lat: 34.645055, lng: 135.513802, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: extra-thick wheat noodles; soy or shio tare; back fat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork soup; back fat; chashu; cheddar cheese; egg.',
    hours_raw: 'Daily 11:00–23:00; closing days follow Abeno HOOP (Tabelog). Order at the kiosk or ticket machine, customize garlic, back fat and vegetables, then collect at the buzzer; black oolong tea comes free (2026). Cards, e-money and QR accepted; menu in English, Chinese and Korean (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Abenosuji 1-2-30, HOOP B1F dining court (Abeno-ku) — 5 min from Kintetsu Osaka-Abenobashi Stn',
    cuisine: 'Jiro-style ramen with a Takaida soy edge · Fujiyama Jiro with soup, 200 g standard: strong, tangy soy, extra-thick chewy straight noodles, bean sprouts and cabbage, thick chashu, generous green onion, thick menma · shio Jiro (powerfully salty) · soupless (shiru-nashi) Jiro · lighter Takaida-style ramen on slightly thinner noodles · garlic, back fat and vegetables to taste (extra vegetables charged) · toppings: cheddar cheese, spicy garlic chives, raw egg, extra chashu · free black oolong tea · vinegar and shichimi on the counter · 6 counter seats with partitions',
    website: OWN, gmaps: gm('麺処 藤山二郎 あべのHoop店'), menu_url: null,
    notes: "[Ramen · Jiro-style ramen with a Takaida soy edge in the Abeno HOOP food court] A six-seat partitioned counter in the HOOP basement dining court, open since 2024, serving Jiro-style ramen that leans toward Osaka's Takaida style, with a tangy, stronger soy than usual. Order at the kiosk, pick your garlic, back fat and vegetables, and collect a bowl of extra-thick, chewy noodles under sprouts, cabbage, heaps of green onion and thick chashu. The shio Jiro is powerfully salty; the soupless version is heartier still. Cheddar cheese is the surprise topping that works, and black oolong tea comes free. It's milder than many Jiro shops, which suits newcomers. Under ¥1,000 for a regular. Open until 23:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 September 2024 (Tabelog)', background: 'Jiro-style ramen counter in a food court (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Takaida-leaning Jiro-style ramen.',
      anecdotes: [
        { text: '"I heard that this place offers a strong soy sauce flavor typical of the Takai-da style… I was surprised by the stronger soy sauce flavor compared to other Jiro-style ramen I\'ve had." — October 2026, 200 g with cheddar and raw egg.', source: R + 'B537885849/' },
        { text: '"The noodles were extra thick… Eating those thick noodles was a delight, and the rich broth with fat and vegetables was delicious." — August 2026.', source: R + 'B533817346/' },
      ],
      japanese_sources_summary: '食べログ: 麺処 藤山二郎 あべのHoop店、大阪市阿倍野区阿倍野筋1-2-30 B1F、近鉄大阪阿部野橋駅から徒歩5分、あべのHOOP地下のダイニングコート、毎日11:00〜23:00、休みは HOOP に準ずる、カード・電子マネー・QR可、カウンター6席、英語・中国語・韓国語のメニュー、2024年9月20日開店、公式サイトあり。口コミ(2024年12月〜2026年10月): Takaida 系に寄った二郎系、酸味のある強めの醤油、極太のもちもちしたストレート麺、もやしとキャベツ、厚いチャーシュー、たっぷりのねぎ、太いメンマ、塩の二郎は塩気が強い、汁なし、細めの麺の Takaida 風ラーメン、にんにく・背脂・野菜を選べる (野菜増しは有料)、チェダーチーズ、辛いニラ、生卵、チャーシュー増し、黒烏龍茶のサービス、卓上の酢と七味、ついたてのあるカウンター、券売機とブザー、普通盛り200g、二郎系としてはマイルドという声、チャーシューが硬かったという声 (2024年)。',
      confidence: 'medium', sources: [TB, OWN, R + 'B498001515/', R + 'B533817346/', R + 'B535328386/', R + 'B535339610/', R + 'B536467766/', R + 'B537885849/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Extra-thick, chewy straight noodles; 200 g regular (2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei', 'ramen'],
      signature_bowl: 'Fujiyama Jiro with soup, 200 g (2026).',
      chashu: 'Large, thick chashu, tender to firm (2026).',
      notable_toppings: ['bean sprouts and cabbage', 'green onion', 'garlic', 'back fat', 'cheddar cheese', 'spicy garlic chives'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork soup.' },
      pantheon: 'Abeno\'s food-court Jiro with an Osaka Takaida soy edge and a cheddar option.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 5, noodle_firmness: 5, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B533817346/', '"The rich broth with fat and vegetables was delicious" — placed high.'],
        oiliness: [R + 'B536467766/', '"A mountain of back fat" with extra fat ordered — placed high.'],
        clarity: [R + 'B533817346/', 'A Jiro-style pork soup with back fat — bottom of scale.'],
        tare_strength: [R + 'B537885849/', '"The saltiness was quite strong"; "stronger soy sauce flavor" — top of scale.'],
        noodle_firmness: [R + 'B533817346/', '"The noodles were extra thick" — top of scale.'],
        aroma_punch: [R + 'B537885849/', '"A significant amount of fried garlic on top" even with less garlic — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B533817346/', R + 'B537885849/', R + 'B536467766/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'Menu in English, Chinese and Korean; kiosk ordering (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市阿倍野区阿倍野筋1-2-30 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市阿倍野区阿倍野筋一丁目2番30号 (go) 47m (large building; Jinrui Mina Karasa ga Subete in the same food hall pins ~10 m away); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535328386/', R + 'B535339610/', R + 'B537885849/'],
    price_note: 'Regular under ¥1,000 (September 2026); no other prices in the reviews.', last_checked: TODAY, items: [
      it('', '', 'Fujiyama Jiro with soup, 200 g', '', 'Ramen', 'no', 'no', 'October 2026.', 'jiro'),
      it('', '', 'Shio Fujiyama Jiro', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'shio'),
      it('', '', 'Soupless Jiro', '', 'Mazesoba', 'no', 'no', 'September–October 2026.', 'shirunashi'),
      it('', '', 'Takaida-style ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'takaida'),
      it('', '', 'Cheddar cheese topping', '', 'Toppings', 'ask', 'no', 'September 2026.', 'cheddar'),
    ] }, {
    cuisine: 'Takaida 系の醤油が効いた二郎系・藤山二郎の汁あり、標準200g: 酸味のある強めの醤油、極太のもちもちしたストレート麺、もやしとキャベツ、厚いチャーシュー、たっぷりのねぎ、太いメンマ・塩の二郎 (塩気が強い)・汁なしの二郎・少し細い麺のあっさりした Takaida 風ラーメン・にんにく、背脂、野菜はお好みで (野菜増しは有料)・トッピング: チェダーチーズ、辛いニラ、生卵、チャーシュー増し・黒烏龍茶のサービス・卓上の酢と七味・ついたてのあるカウンター6席',
    neighborhood: '阿倍野区阿倍野筋1-2-30 あべのHOOP B1F のダイニングコート。近鉄大阪阿部野橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の極太麺、醤油か塩のたれ、背脂。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、チャーシュー、チェダーチーズ、卵。',
    notes: '[ラーメン・あべのHOOP のフードコート、Takaida 系の醤油が効いた二郎系] あべのHOOP地下のダイニングコートにある、ついたて付きのカウンター6席の店で、2024年開店、大阪の Takaida 系に寄った、酸味があって強めの醤油の二郎系。券売機で注文し、にんにく・背脂・野菜を選ぶと、もやし、キャベツ、山盛りのねぎ、厚いチャーシューの下に極太のもちもちの麺。塩の二郎は塩気が強く、汁なしはさらにがっつり。意外に合うのがチェダーチーズのトッピングで、黒烏龍茶はサービス。二郎系としてはマイルドで初めてでも食べやすい。普通盛りで1,000円以下。23時まで。',
  });
}

// ================================================================ つけ麺 ひらの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27123450/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://wa-ramen.com/';
  put({
    id: 'osaka_tsukemen_hirano_tamatsukuri', name: 'つけ麺 ひらの (Tsukemen Hirano)', category: 'OMNI',
    lat: 34.674274, lng: 135.533841, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; soy-based dip; naruto.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone, chicken and seafood dip; back fat; katsuobushi oil; chashu; egg.',
    hours_raw: 'Daily 11:00–15:30 and 17:00–22:00; hours may change (Tabelog). Mobile orders are taken too (August 2026). PayPay accepted; no cards or e-money (Tabelog).',
    hours: ALL(day(['11:00', '15:30'], ['17:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Obase 1-1-6 (Higashinari-ku) — 2 min from JR Tamatsukuri Stn north exit',
    cuisine: 'Tsukemen and mazesoba · tsukemen 200 g ¥1,000: thick (about 4.5 mm), golden homemade whole-wheat noodles soaked in kombu water; a rich tonkotsu-and-seafood soy dip (pork bones, chicken carcasses, seafood) with katsuobushi oil, back fat and a hint of yuzu; pork-belly chashu, white leek, mizuna, menma, naruto, nori · spicy tsukemen ¥1,050, levels 1–3 · shio tsukemen ¥1,050 · special +¥500 · large 350 g +¥100, 400 g +¥200 · mazesoba with rice ¥1,000, all-toppings ¥1,500 · seasoned egg +¥150, chashu +¥350, ate-menma ¥100, rice ¥250 · citrus-scented soup for diluting at the counter · yuzu shichimi, black pepper · bottled beer ¥500',
    website: OWN, gmaps: gm('つけ麺 ひらの'), menu_url: null,
    notes: "[Tsukemen · thick whole-wheat tsukemen in kombu water by Tamatsukuri] A tsukemen and mazesoba shop two minutes from Tamatsukuri's north exit, open since 2021; one diner prefers its relaxed pace to the busier JET600 nearby. The noodles are the draw: thick, golden, homemade with whole wheat and served in kombu water, chewy and bouncy, best taken two strands at a time. The house dip is a rich tonkotsu-and-seafood soy with back fat, katsuobushi oil and a whisper of yuzu; spicy (levels 1–3, level 2 is hotter than it sounds) and shio versions too. Finish by diluting the dip with the citrus-scented soup at the counter, or with rice. Tsukemen 200 g is ¥1,000, and large sizes cost a little more. PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 May 2021 (Tabelog)', background: 'Tsukemen and mazesoba shop (Tabelog; 2026 reviews).', philosophy: 'Homemade whole-wheat noodles soaked in kombu water (September 2026 review).', specialty: 'Tonkotsu-seafood tsukemen on thick noodles.',
      anecdotes: [
        { text: '"The broth is made from pork bones, chicken carcasses, and seafood, enhanced with katsuobushi oil and a generous amount of back fat, accented with a subtle yuzu flavor… The noodles are homemade with a blend of whole wheat flour, soaked in kombu water…" — September 2026, tsukemen 200 g ¥1,000.', source: R + 'B438068279/' },
        { text: '"The noodles are thick and chewy. I think two strands at a time is the right amount to pick up." — September 2026, spicy tsukemen level 2, ¥1,050.', source: R + 'B491259971/' },
      ],
      japanese_sources_summary: '食べログ: つけ麺 ひらの、大阪市東成区東小橋1-1-6、JR玉造駅北口から徒歩2分、毎日11:00〜15:30・17:00〜22:00、カード・電子マネー不可、PayPay 可、2021年5月31日開店、公式サイトあり。口コミ(2026年8〜10月): 豚骨、鶏ガラ、魚介に節油とたっぷりの背脂、柚子がほのかに香る醤油のつけ汁、全粒粉入りの自家製の太麺 (約4.5mm) を昆布水に浸す、豚バラのチャーシュー、白ねぎ、水菜、メンマ、なると、海苔、つけ麺200g 1,000円、辛つけ麺1,050円 (辛さ1〜3、2でも辛い)、塩つけ麺1,050円、特製+500円、大盛り350g +100円、特盛り400g +200円、まぜそば (追い飯付き) 1,000円、全部のせまぜそば1,500円、味玉+150円、チャーシュー+350円、Ate-menma100円、ご飯250円、瓶ビール500円、柚子七味と黒胡椒、カウンターの柑橘の香る割りスープ、モバイルオーダー、近くの人気店より落ち着いて食べられるという声、つけ汁がもう少し濃くてもという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B438068279/', R + 'B491259971/', R + 'B534244993/', R + 'B534818235/', R + 'B537138743/', R + 'B538214452/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: ['back fat', 'katsuobushi oil'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: true, notes: 'Homemade whole-wheat thick straight noodles (4.50–4.75 mm), soaked in kombu water (2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Tsukemen 200 g, ¥1,000 (September 2026).',
      chashu: 'Small, thick pork-belly chashu, tender and well-seasoned (2026).',
      notable_toppings: ['kombu water', 'yuzu', 'naruto', 'mizuna', 'soup to dilute'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork, chicken and seafood dip.' },
      pantheon: 'Tamatsukuri\'s thick whole-wheat tsukemen in kombu water, with a yuzu-scented tonkotsu-seafood dip.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 5, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534818235/', '"The dipping sauce is rich and thick, made with a tonkotsu base and about 30% seafood" — placed high.'],
        oiliness: [R + 'B438068279/', '"A generous amount of back fat" — placed high.'],
        clarity: [R + 'B534818235/', 'A "rich and thick" dip — bottom of scale.'],
        tare_strength: [R + 'B438068279/', '"A well-rounded soy sauce base that balances sweetness and acidity" — placed high.'],
        noodle_firmness: [R + 'B491259971/', '"The noodles are thick and chewy… The texture is delightful to bite into" — top of scale.'],
        aroma_punch: [R + 'B534818235/', '"A subtle hint of yuzu that adds a nice accent" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B438068279/', R + 'B491259971/', R + 'B534818235/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed pace; PayPay accepted (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東成区東小橋1-1-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東成区東小橋一丁目1番6号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B438068279/', R + 'B491259971/', R + 'B534818235/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen, 200 g', '¥1,000', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsukemen'),
      it('', '', 'Spicy tsukemen, 200 g (levels 1–3)', '¥1,050', 'Tsukemen', 'no', 'no', 'September 2026.', 'kara'),
      it('', '', 'Shio tsukemen, 200 g', '¥1,050', 'Tsukemen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Special (all toppings)', '+¥500', 'Toppings', 'no', 'no', 'August 2026.', 'tokusei'),
      it('', '', 'Mazesoba with rice', '¥1,000', 'Mazesoba', 'no', 'no', 'September 2026.', 'maze'),
      it('', '', 'Large 350 g / 400 g', '+¥100 / +¥200', 'Toppings', 'no', 'no', 'September 2026.', 'large'),
      it('', '', 'Rice', '¥250', 'Rice', 'ask', 'ask', 'August 2026.', 'rice'),
    ] }, {
    cuisine: 'つけ麺とまぜそば・つけ麺200g 1,000円: 昆布水に浸した、全粒粉入りの自家製の金色の太麺 (約4.5mm)、豚骨・鶏ガラ・魚介の濃い醤油のつけ汁に節油、背脂、ほのかな柚子、豚バラのチャーシュー、白ねぎ、水菜、メンマ、なると、海苔・辛つけ麺1,050円 (辛さ1〜3)・塩つけ麺1,050円・特製+500円・大盛り350g +100円、特盛り400g +200円・追い飯付きのまぜそば1,000円、全部のせ1,500円・味玉+150円、チャーシュー+350円、Ate-menma100円、ご飯250円・カウンターの柑橘が香る割りスープ・柚子七味、黒胡椒・瓶ビール500円',
    neighborhood: '東成区東小橋1-1-6。JR玉造駅北口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油ベースのつけ汁、なると。',
    vegan_detail: 'ヴィーガンではありません。豚骨、鶏ガラ、魚介のつけ汁、背脂、節油、チャーシュー、卵。',
    notes: '[つけ麺・玉造近く、昆布水に浸した全粒粉の太麺のつけ麺] 玉造駅北口から2分のつけ麺とまぜそばの店で、2021年開店、近くの人気店 JET600 より落ち着いて食べられるという声も。主役は麺: 全粒粉入りの自家製の金色の太麺を昆布水に浸し、もちもちで弾力があり、2本ずつがちょうどいい。つけ汁は背脂、節油、ほのかな柚子の濃厚な豚骨魚介の醤油で、辛い (1〜3、2でも思ったより辛い) と塩もある。最後はカウンターの柑橘の香る割りスープかご飯で。つけ麺200gは1,000円、大盛りは少しの追加で。PayPay 可。',
  });
}

save();
