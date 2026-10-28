// Osaka sweep (2-mile circle around Dotonbori), batch 108 — ramen phase (all OMNI).
//   + noodle cafe Q (cafe-style ramen with duck chashu and coffee sets, by the Choro company; My Dome Osaka 1F)
//   + 麺や 恵 (chicken-tonkotsu paitan ramen, tsukemen and abura soba; Yariya-machi by Tanimachi 4-chome)
//   + 麺屋 井の中の蛙 (herb-scented shio ramen at lunch in an Italian restaurant; Awajimachi)
//   + どろそば将 堺筋本町店 (thick chicken-and-vegetable "doro" soba, richness to order; Awajimachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 108);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ noodle cafe Q
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27151214/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://j-choro.com/';
  put({
    id: 'osaka_noodle_cafe_q_mydome', name: 'noodle cafe Q', category: 'OMNI',
    lat: 34.684916, lng: 135.511126, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and miso tare; kara-age; cheesecake.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth; duck chashu; niboshi.',
    hours_raw: 'Daily 11:00–16:00 (L.O. 15:30); closed 29 December–3 January (Tabelog). Touch-panel ticket machine; seat yourself and clear your own table (September 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay accepted (Tabelog). Free Wi-Fi and power outlets (October 2026).',
    hours: ALL(day(['11:00', '16:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Honmachibashi 2-5, My Dome Osaka 1F — 5 min from Sakaisuji-Honmachi or Tanimachi 4-chome Stn',
    cuisine: 'Cafe-style ramen with coffee · shoyu ramen: chicken-based broth, straight thin noodles, thin-sliced duck chashu, green onion · niboshi shoyu ramen ¥950 · miso ramen with duck · lunch set: shoyu ramen, yakimeshi and drip coffee ¥1,000 · sets with lu rou fan or seasoned rice · rare chashu rice bowl +¥275 · kara-age set meal ¥900 · duck topping 3 slices ¥300, 6 slices ¥580 · Basque cheesecake · kids\' menu · seasonal ramen · 100 seats incl. 18 at the counter and raised tatami seating',
    website: OWN, gmaps: gm('noodle cafe Q マイドームおおさか'), menu_url: null,
    notes: "[Ramen · cafe-style ramen with coffee on the ground floor of My Dome Osaka] A big, calm, 100-seat ramen cafe on the ground floor of the My Dome Osaka exhibition hall, opened in August 2025 by the company behind Choro. The bowls are light: a chicken-based shoyu on straight thin noodles with thin slices of duck chashu, a niboshi shoyu (¥950) and a miso, with seasonal changes. The popular lunch set pairs shoyu ramen with yakimeshi and a drip coffee for ¥1,000; others come with lu rou fan or seasoned rice, and there's a kara-age set (¥900) and Basque cheesecake. Two diners found the shoyu on the salty side. With Wi-Fi, outlets, raised tatami seating and a kids' menu, it suits families and laptop lunches. Order at the touch-panel ticket machine and clear your own table.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2025 (Tabelog)', background: 'Ramen cafe run by the company behind 貝と地鶏だしのらぁ麺 ちょろ (official site j-choro.com).', philosophy: null, specialty: 'Light shoyu ramen with duck chashu; ramen-and-coffee sets.',
      anecdotes: [
        { text: '"The ramen features straight, thin noodles, and the broth seems to be chicken-based. The chashu (braised meat) is thinly sliced duck… The broth is rich, but a bit too salty." — September 2026, shoyu ramen set ¥1,000.', source: R + 'B536476960/' },
        { text: '"With WiFi and power outlets available, it\'s also suitable for small tasks… You can add extra toppings, with 3 slices of duck for JPY 300 and 6 slices for JPY 580." — October 2026.', source: R + 'B537234576/' },
      ],
      japanese_sources_summary: '公式 j-choro.com: 貝と地鶏だしのらぁ麺ちょろ、noodle cafe Q(マイドームおおさか 1F)、お弁当 割烹いしかわ、館内への珈琲デリバリー、宴席。食べログ: noodle cafe Q、大阪市中央区本町橋2-5 マイドームおおさか 1F、堺筋本町駅・谷町四丁目駅から徒歩5分、毎日11:00〜16:00(L.O. 15:30)、12月29日〜1月3日休み、予約可、カード可(VISA、Master、JCB、AMEX、Diners)、PayPay可、100席(カウンター18)、2025年8月1日開店。口コミ(2026年5〜10月): 広く落ち着いた店内、コーヒー付きランチ、鴨チャーシューの味噌ラーメン、魯肉飯のセット、トッピングなしでも旨みのあるあっさりラーメン、タッチパネルの券売機、醤油ラーメン、焼めし、ホットコーヒーで1,000円、醤油がやや強いという声、煮干し醤油ラーメン950円、レアチャーシュー丼+275円、小上がりとテーブル、スタッフ2人、食後は自分で片付け、ストレート細麺、鶏ベースのスープ、薄切りの鴨チャーシュー、塩辛いという声、Wi-Fiと電源、唐揚げ定食900円、鴨3枚300円・6枚580円、味ご飯、バスクチーズケーキ、お子様メニュー、季節でラーメンが変わる、畳の席で子ども連れに便利。',
      confidence: 'medium', sources: [TB, OWN, R + 'B529250190/', R + 'B535196264/', R + 'B535773713/', R + 'B536476960/', R + 'B537234576/', R + 'B537613966/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Straight thin noodles (September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shoyu ramen in the ¥1,000 lunch set with yakimeshi and coffee (September 2026).',
      chashu: 'Thin-sliced duck chashu; extra 3 slices ¥300, 6 slices ¥580 (October 2026).',
      notable_toppings: ['duck chashu', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken broth; duck.' },
      pantheon: 'My Dome Osaka\'s ramen cafe from the Choro company: light duck-topped shoyu with a coffee on the side.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536476960/', '"The broth is rich" yet "a light flavor profile" (B537613966) — mid-scale.'],
        oiliness: [R + 'B537613966/', '"A light flavor profile" — placed low.'],
        clarity: [R + 'B535196264/', '"The Shoyu Ramen looked beautiful"; no remark on clarity — mid-scale.'],
        tare_strength: [R + 'B535196264/', '"The soy sauce flavor was a bit strong"; "a bit too salty" (B536476960) — placed high.'],
        noodle_firmness: [R + 'B536476960/', '"Straight, thin noodles"; no remark on firmness — mid-scale.'],
        aroma_punch: [R + 'B537234576/', 'Duck "had no strong flavor and was easy to eat" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B535196264/', R + 'B536476960/', R + 'B537613966/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ticket machine; Wi-Fi, outlets, kids\' menu (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区本町橋2-5 マイドームおおさか 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区本町橋2番5号 (go) 42m — large exhibition building, pin kept at Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535773713/', R + 'B536476960/', R + 'B537234576/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: shoyu ramen, yakimeshi, coffee', '¥1,000', 'Sets', 'no', 'no', 'September 2026.', 'lunch_set'),
      it('', '', 'Niboshi shoyu ramen', '¥950', 'Ramen', 'no', 'no', 'August 2026.', 'niboshi_shoyu'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'miso'),
      it('', '', 'Rare chashu rice bowl', '+¥275', 'Rice', 'no', 'no', 'August 2026.', 'rare_chashu_don'),
      it('', '', 'Kara-age set meal', '¥900', 'Set meals', 'no', 'no', 'October 2026.', 'karaage'),
      it('', '', 'Duck topping, 3 slices / 6 slices', '¥300 / ¥580', 'Toppings', 'no', 'no', 'October 2026.', 'duck'),
      it('', '', 'Basque cheesecake', '', 'Sweets', 'no', 'no', 'October 2026.', 'cheesecake'),
    ] }, {
    cuisine: 'コーヒー付きのカフェ風ラーメン・醤油ラーメン: 鶏ベースのスープ、ストレート細麺、薄切りの鴨チャーシュー、ねぎ・煮干し醤油ラーメン950円・鴨の味噌ラーメン・ランチセット: 醤油ラーメン、焼めし、ドリップコーヒーで1,000円・魯肉飯や味ご飯のセット・レアチャーシュー丼+275円・唐揚げ定食900円・鴨トッピング3枚300円、6枚580円・バスクチーズケーキ・お子様メニュー・季節のラーメン・100席(カウンター18、小上がりあり)',
    neighborhood: '中央区本町橋2-5 マイドームおおさか 1F。堺筋本町駅・谷町四丁目駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と味噌のたれ、唐揚げ、チーズケーキ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、鴨チャーシュー、煮干し。',
    notes: '[ラーメン・マイドームおおさか1階、コーヒー付きのカフェ風ラーメン] 展示場マイドームおおさかの1階、広く落ち着いた100席のラーメンカフェで、2025年8月にちょろの会社が開店。ラーメンは軽め: ストレート細麺に薄切りの鴨チャーシューをのせた鶏ベースの醤油、煮干し醤油(950円)、味噌、季節替わりも。人気のランチセットは醤油ラーメンに焼めしとドリップコーヒーで1,000円、魯肉飯や味ご飯のセット、唐揚げ定食(900円)、バスクチーズケーキも。醤油がしょっぱめと感じた人が2人。Wi-Fi、電源、小上がり、お子様メニューがあり、家族連れやパソコン作業のランチにも。注文はタッチパネルの券売機で、食後は自分で片付け。',
  });
}

// ================================================================ 麺や 恵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27105645/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['18:00', '22:30']); const WE = day(['11:30', '15:00']);
  put({
    id: 'osaka_menya_kei_yariyamachi', name: '麺や 恵 (Menya Kei)', category: 'OMNI',
    lat: 34.682849, lng: 135.515359, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy sauce in the abura soba; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork-bone broth; katsuobushi; shrimp oil; chashu.',
    hours_raw: 'Mon–Fri 11:30–15:00 and dinner from 17:30 or 18:00 to 22:30 (last order); Sat, Sun and public holidays 11:30–15:00, dinner depending on soup (Tabelog). AMEX and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yariya-machi 1-4-4 — 191 m from Tanimachi 4-chome Stn',
    cuisine: 'Chicken-tonkotsu ramen, tsukemen and abura soba · ramen ¥900: chicken and pork-bone paitan, short medium-thin noodles, thin pork-belly chashu · A set +¥150: two kara-age and rice · tsukemen ¥980: medium-thick chewy noodles, chicken, pork-bone and seafood dipping soup with a little acidity · abura soba ¥890, regular or Japanese-style, soy sauce and shrimp oil, thick glossy noodles, melting chashu · lunch abura soba with kara-age and rice ¥1,070 · mazesoba · 7 counter seats, tables upstairs',
    website: null, gmaps: gm('麺や 恵 鎗屋町'), menu_url: null,
    notes: "[Ramen · chicken-tonkotsu paitan, tsukemen and abura soba by Tanimachi 4-chome] A small counter of about seven seats near Tanimachi 4-chome, with tables upstairs when it fills after noon, running since 2018. The ramen (¥900) is a chicken and pork-bone paitan that one diner found hearty, with short medium-thin noodles and thin, well-seasoned pork-belly chashu; add the A set (+¥150) for two kara-age and rice. The tsukemen (¥980) pairs medium-thick chewy noodles with a chicken, pork-bone and seafood dip, light in body but oily on top, with a little acidity. The abura soba (¥890) comes regular or Japanese-style, dressed in soy and shrimp oil over thick glossy noodles; at lunch ¥1,070 adds kara-age and rice. One diner found the menma flat and the welcome cool. Dinner on weekends depends on the soup.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 June 2018 (Tabelog)', background: 'Ramen counter (Tabelog; 2022–2026 reviews).', philosophy: null, specialty: 'Chicken-tonkotsu ramen, tsukemen, abura soba.',
      anecdotes: [
        { text: '"The soup is a chicken and pork bone white broth, and after taking a sip, I could taste the richness of the chicken combined with the depth and umami of the pork bone… The noodles are short, medium-thin, with a nice chewiness." — September 2025, ramen ¥900.', source: R + 'B513050016/' },
        { text: '"The dipping sauce was made from chicken, pork bones, and seafood. It had a light consistency with a generous amount of oil on the surface… a hint of acidity." — September 2025, tsukemen ¥980.', source: R + 'B534837244/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 恵、大阪市中央区鎗屋町1-4-4、谷町四丁目から191m、月〜金 11:30〜15:00・夜は17:30か18:00〜22:30(L.O.)、土日祝 11:30〜15:00・夜はスープ次第、カードはAMEX、QR可、カウンター7席と2階席、2018年6月16日開店。口コミ(2022年12月〜2026年5月): つけ麺、魚介豚骨、油そば890円、濃厚なたれとなめらかな麺、とろけるチャーシュー、ラーメン900円とAセット150円(唐揚げ2個とご飯)、鶏豚骨の白湯、つけ麺にかつお節、短い中細麺、薄切りの豚バラチャーシュー、メンマは味が薄く匂いが気になったという声、12時過ぎに混んで2階へ案内、油そばは普通と和風、醤油と海老油で軽め、太く艶のある麺、唐揚げとご飯付きで1,070円、シンプルなつけ麺、つけ麺980円、中太のもちもち麺、鶏・豚骨・魚介のつけ汁、表面に多めの油、ほのかな酸味、自家製のつけ麺。',
      confidence: 'medium', sources: [TB, R + 'B458517914/', R + 'B512965851/', R + 'B513050016/', R + 'B524417776/', R + 'B530964656/', R + 'B534837244/'] },
    ramen: {
      broth_base: ['chicken', 'tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['shrimp oil'], richness: 'kotteri',
      noodles: { thickness: 'medium-thin', shape: null, hydration: null, handmade: false, notes: 'Short medium-thin noodles in the ramen; medium-thick chewy tsukemen noodles; thick glossy abura soba noodles (2025–2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Ramen, ¥900 (September 2025); tsukemen ¥980.',
      chashu: 'Thin, well-seasoned pork-belly chashu (September 2025).',
      notable_toppings: ['kara-age set', 'menma', 'shrimp oil (abura soba)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and pork broth.' },
      pantheon: 'Tanimachi 4-chome\'s chicken-tonkotsu counter, with a tangy seafood tsukemen and shrimp-oil abura soba.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B513050016/', '"The richness of the chicken combined with the depth and umami of the pork bone" — placed high.'],
        oiliness: [R + 'B534837244/', 'Tsukemen dip with "a generous amount of oil on the surface" — placed high.'],
        clarity: [R + 'B513050016/', '"A chicken and pork bone white broth" — bottom of scale.'],
        tare_strength: [R + 'B513050016/', '"The seasoning was just right" — mid-scale.'],
        noodle_firmness: [R + 'B534837244/', '"Medium-thick and had a delightful chewy texture"; ramen noodles with "a nice chewiness" (B513050016) — placed high.'],
        aroma_punch: [R + 'B534837244/', '"A nice depth of flavor with a hint of acidity" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B513050016/', R + 'B534837244/', R + 'B524417776/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; tables upstairs when busy (September 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区鎗屋町1-4-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区鎗屋町一丁目4番4号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512965851/', R + 'B513050016/', R + 'B524417776/', R + 'B534837244/'],
    price_note: 'Prices from September 2025–March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥900', 'Ramen', 'no', 'no', 'September 2025.', 'ramen'),
      it('', '', 'A set (2 kara-age, rice)', '+¥150', 'Sets', 'no', 'no', 'September 2025.', 'a_set'),
      it('', '', 'Tsukemen', '¥980', 'Tsukemen', 'no', 'no', 'September 2025.', 'tsukemen'),
      it('', '', 'Abura soba (regular or Japanese-style)', '¥890', 'Abura soba', 'no', 'no', 'September 2025.', 'abura_soba'),
      it('', '', 'Lunch abura soba with kara-age and rice', '¥1,070', 'Sets', 'no', 'no', 'March 2026.', 'abura_lunch'),
    ] }, {
    cuisine: '鶏豚骨のラーメン、つけ麺、油そば・ラーメン900円: 鶏と豚骨の白湯、短い中細麺、薄切りの豚バラチャーシュー・Aセット+150円: 唐揚げ2個とご飯・つけ麺980円: 中太のもちもち麺、鶏・豚骨・魚介のつけ汁にほのかな酸味・油そば890円、普通か和風、醤油と海老油、太く艶のある麺、とろけるチャーシュー・昼は唐揚げとご飯付きの油そば1,070円・まぜそば・カウンター7席、2階にテーブル',
    neighborhood: '中央区鎗屋町1-4-4。谷町四丁目駅から191m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、油そばの醤油、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚骨のスープ、かつお節、海老油、チャーシュー。',
    notes: '[ラーメン・谷町四丁目近く、鶏豚骨の白湯、つけ麺、油そば] 谷町四丁目近く、カウンター7席ほどの小さな店で、昼過ぎに混むと2階のテーブルへ、2018年から。ラーメン(900円)は鶏と豚骨の白湯で、食べ応えがあるという声、短い中細麺としっかり味の薄切り豚バラチャーシュー。Aセット(+150円)で唐揚げ2個とご飯を。つけ麺(980円)は中太のもちもち麺に鶏・豚骨・魚介のつけ汁、口当たりは軽いが表面に油が多く、ほのかな酸味。油そば(890円)は普通か和風、太く艶のある麺に醤油と海老油、昼は1,070円で唐揚げとご飯付き。メンマが物足りず、迎え方がそっけなかったという声も。週末の夜はスープ次第。',
  });
}

// ================================================================ 麺屋 井の中の蛙
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27147937/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_ino_naka_no_kawazu', name: '麺屋 井の中の蛙 (Menya Ino Naka no Kawazu)', category: 'OMNI',
    lat: 34.687009, lng: 135.501806, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu ramen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth; rare chashu.',
    hours_raw: 'Daily 11:30–14:00 (L.O. 13:30) until the soup sells out; closing days vary (Tabelog). 2026 reviews describe it as an Italian restaurant at night with ramen at lunch, one specifying weekday lunch. Line after 12:00 (April 2026). Circle your order on a sheet. Cards and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:30', '14:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Awajimachi 3-4-12, 1F — 5 min from Honmachi Stn exit 1 or Yodoyabashi exit 11',
    cuisine: 'Lunch-only shio ramen in an Italian restaurant · shio ramen ¥1,000: chicken and aromatic-vegetable broth with herbs and spices, thin Menya Teikaku noodles, rare chashu, lemon on the side · shoyu ramen · smaller noodle portion · toppings: umeboshi, yuzu-kosho, menma · chashu rice bowl, rice · 19 seats',
    website: null, gmaps: gm('麺屋 井の中の蛙 淡路町'), menu_url: null,
    notes: "[Ramen · herb-scented shio ramen at lunch in an Italian restaurant, Awajimachi] A stylish room between Honmachi and Yodoyabashi that serves Italian food at night and turns into a ramen shop at lunch, open since March 2025. The shio ramen (¥1,000) is the bowl to get: a rich chicken and aromatic-vegetable broth drawn out with herbs and spices, which one diner likened to Italian dressing, with rare chashu and thin noodles. A lemon wedge comes on the side; squeeze it in midway for a brighter, almost pho-like finish. Add umeboshi or yuzu-kosho for more changes. One diner brought a 2026 Kansai ramen guide that gave the shio a semi-grand prize. There's also a shoyu, and a chashu rice bowl that sells out. A small noodle portion is very small. Lunch only; a line formed after noon one April day.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 March 2025 (Tabelog)', background: 'Ramen at lunch in a restaurant that serves Italian at night (2026 reviews; Tabelog).', philosophy: 'Shio broth drawn with herbs and spices, per a 2026 Kansai ramen guide cited by a diner (June 2026).', specialty: 'Shio ramen.',
      anecdotes: [
        { text: '"The broth, infused with the aroma and flavor of herbs typical of Italian cuisine, was rich and savory… a lemon for flavor enhancement is provided by default, and squeezing it… gives a slightly Asian twist, reminiscent of pho broth." — May 2026, shio ramen.', source: R + 'B528584519/' },
        { text: '"I added umeboshi (pickled plum), yuzu pepper, and menma (bamboo shoots) as toppings. I really liked the thin, smooth noodles that paired well with the broth." — June 2026.', source: R + 'B530126783/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 井の中の蛙、大阪市中央区淡路町3-4-12 1F、御堂筋線本町駅1番出口・淀屋橋駅11番出口から徒歩5分、毎日11:30〜14:00(L.O. 13:30)、スープがなくなり次第終了、不定休、カード・PayPay可、19席、2025年3月4日開店。口コミ(2026年4〜10月): 塩と醤油、鶏と香味野菜の濃厚なスープ、麺少なめはかなり少ない、夜はイタリアン、12時以降は行列、昼のみ、細く軽い麺、梅のトッピング、柔らかいチャーシュー、塩ラーメンとご飯、チャーシュー丼は売り切れ、イタリアンらしいハーブの香り、レモンが最初から付き、絞るとフォーのよう、塩ラーメン1,000円、平日昼はラーメン専門店、おしゃれな店内、「究極のラーメン 関西版 2026」の塩部門で準グランプリ、ハーブとスパイスで抽出、イタリアンドレッシングのようという声、レアチャーシュー、もちもちした個性の強い麺、注文用紙に丸をつける、写真のキャプションで麺屋棣顎の麺、梅干し・柚子胡椒・メンマ、細くなめらかな麺。',
      confidence: 'medium', sources: [TB, R + 'B526954274/', R + 'B527978345/', R + 'B528584519/', R + 'B530033603/', R + 'B530126783/', R + 'B536747410/'] },
    ramen: {
      broth_base: ['chicken', 'vegetable'], broth_texture: 'unknown', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles from Menya Teikaku (June 2026 photo caption); chewy to one diner, smooth to another.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shio ramen, ¥1,000 (June 2026).',
      chashu: 'Rare chashu (June 2026).',
      notable_toppings: ['lemon', 'umeboshi', 'yuzu-kosho', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Awajimachi\'s lunchtime shio from an Italian kitchen: herbs in the broth, lemon on the side.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B526954274/', '"A rich flavor from the chicken and aromatic vegetables" — mid-scale.'],
        oiliness: [R + 'B528584519/', 'No diner remark on oil — mid-scale.'],
        clarity: [R + 'B530033603/', 'No diner remark on clarity — mid-scale.'],
        tare_strength: [R + 'B528584519/', '"Rich and savory"; no remark on salt — mid-scale.'],
        noodle_firmness: [R + 'B530033603/', '"Quite chewy instead of smooth" — placed high.'],
        aroma_punch: [R + 'B528584519/', '"Infused with the aroma and flavor of herbs" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B526954274/', R + 'B528584519/', R + 'B530033603/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Circle-your-order sheet (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区淡路町3-4-12 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区淡路町三丁目4番12号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530033603/', R + 'B530126783/'],
    price_note: 'Price from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen', '¥1,000', 'Ramen', 'no', 'no', 'June 2026; tax included.', 'shio'),
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'April 2026.', 'shoyu'),
      it('', '', 'Umeboshi topping', '', 'Toppings', 'ask', 'ask', 'June 2026.', 'ume'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'May 2026; can sell out.', 'chashu_don'),
    ] }, {
    cuisine: 'イタリアンの店の昼のみの塩ラーメン・塩ラーメン1,000円: 鶏と香味野菜にハーブとスパイスのスープ、Menya Teikakuの細麺、レアチャーシュー、レモン添え・醤油ラーメン・麺少なめ・トッピング: 梅干し、柚子胡椒、メンマ・チャーシュー丼、ご飯・19席',
    neighborhood: '中央区淡路町3-4-12 1F。本町駅1番出口・淀屋橋駅11番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ラーメン。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、レアチャーシュー。',
    notes: '[ラーメン・淡路町、イタリアンの店の昼のハーブ香る塩ラーメン] 本町と淀屋橋の間、夜はイタリアン、昼はラーメン店になるおしゃれな店で、2025年3月開店。頼むべきは塩ラーメン(1,000円): 鶏と香味野菜にハーブとスパイスで旨みを出した濃厚なスープで、イタリアンドレッシングのようという声も、レアチャーシューと細麺。添えられたレモンを途中で絞ると、フォーのような明るい後味に。梅干しや柚子胡椒でさらに味変も。2026年の関西のラーメン本で塩が準グランプリだったと持参した人も。醤油と、売り切れることのあるチャーシュー丼も。麺少なめはかなり少ない。昼のみで、4月のある日は正午を過ぎて行列に。',
  });
}

// ================================================================ どろそば将 堺筋本町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27119647/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'osaka_doro_soba_masa_sakaisuji_honmachi', name: 'どろそば将 堺筋本町店 (Doro Soba Masa Sakaisuji Honmachi)', category: 'OMNI',
    lat: 34.686886, lng: 135.507477, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried toppings; kara-age bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and vegetable "doro" soup; chashu.',
    hours_raw: 'Mon–Sat 11:00–23:00 (L.O. 22:30–22:45); Sun 11:00–15:00 and 17:00–23:00; closing days vary; closed 1 January (Tabelog). Ticket machine; staff help if unsure (August 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: day(['11:00', '15:00'], ['17:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Awajimachi 1-6-4 — 4 min from Kitahama Stn exit 5, 6 min from Sakaisuji-Honmachi exit 12',
    cuisine: 'Thick chicken-and-vegetable "doro" soba · doro soba with richness level to order: soup of chicken and vegetables simmered until they dissolve, thin flat or medium wavy noodles, chashu, fried green onion, fried eringi, green onion · lunch doro soba + mini chashu rice bowl set · spicy "extreme" doro soba ¥1,500 · "Oni Kyoku" extra-thick doro soba ¥1,600 · doro tsukemen · lunch mini kara-age rice bowl +¥100 · pink pickled ginger on the counter · 11 counter seats and a table for four',
    website: null, gmaps: gm('どろそば将 堺筋本町店'), menu_url: null,
    notes: "[Ramen · thick chicken-and-vegetable \"doro\" soba near Kitahama] A small office-district counter between Kitahama and Sakaisuji-Honmachi, open since 2020 and, one diner says, one of the chain's last two shops along with Nara, serving doro soba: a soup of chicken and vegetables simmered until they dissolve, so thick it clings to the noodles \"like a purée.\" Two diners were surprised how easy it is to drink and how clean the finish is; one found the flavor ordinary beneath the texture. Choose your richness, from the basic bowl up to the extra-thick Oni Kyoku (¥1,600), or a spicy version (¥1,500). Toppings of fried green onion and eringi add aroma, and pink pickled ginger from the counter sweetens and shifts the soup. At lunch there's a doro soba set with a mini chashu rice bowl, or add a mini kara-age bowl for ¥100. Buy a ticket first; staff help if you're unsure. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 October 2020 (Tabelog)', background: 'Branch of a small doro-soba chain; one diner counts this shop and one in Nara as the remaining branches (October 2026 review).', philosophy: null, specialty: 'Doro soba.',
      anecdotes: [
        { text: '"The soup was a thick, creamy broth, reminiscent of a purée, made by simmering chicken and vegetables until they lost their shape… despite the richness of the soup, the aftertaste was surprisingly refreshing." — August 2026, lunch doro soba, richness level 2.', source: R + 'B534406182/' },
        { text: '"Adding ginger brings a subtle sweetness to the broth, completely transforming its rich flavor." — August 2026.', source: R + 'B533976852/' },
      ],
      japanese_sources_summary: '食べログ: どろそば将 堺筋本町店、大阪市中央区淡路町1-6-4、北浜駅5番出口から徒歩4分、堺筋本町駅12番出口から6分、月〜土 11:00〜23:00、日 11:00〜15:00・17:00〜23:00、不定休、1月1日休み、カード・電子マネー・QR不可、チャージなし、15席(カウンター11、4人席1)、2020年10月15日開店。口コミ(2026年8〜10月): 濃厚で重たそうだが飲みやすい、どろっとしたスープ、なめらかでもちもちの麺、紅しょうがで甘みと味変、ランチのどろそばとミニチャーシュー丼のセット、濃さ2、鶏と野菜を形がなくなるまで煮たポタージュのようなスープ、後味はさっぱり、脂っぽくない、細い平打ち麺、揚げねぎとエリンギ、奈良にも店舗、券売機、店員が親切、土曜は満席に、辛いどろそば1,500円、橙色、麺にまとわりつく、どろつけ麺、大きなチャーシュー、ねぎと辛み、最盛期は6店舗で今は堺筋本町と奈良のみという声、Oni Kyokuどろそば1,600円、ミニ唐揚げ丼100円(ランチ)、LINEクーポン、中太の縮れ麺、薄いチャーシュー、揚げ物2種、糸唐辛子、とろみは見事だが味は普通という声。',
      confidence: 'medium', sources: [TB, R + 'B481857378/', R + 'B533976852/', R + 'B534406182/', R + 'B534774663/', R + 'B537765641/', R + 'B537835681/'] },
    ramen: {
      broth_base: ['chicken', 'vegetable'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Thin flat noodles (August 2026); medium-width wavy noodles in the Oni Kyoku (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Doro soba with richness to order; Oni Kyoku ¥1,600 (October 2026).',
      chashu: 'Large chashu (October 2026); thin chashu in the Oni Kyoku.',
      notable_toppings: ['fried green onion', 'fried eringi', 'pink pickled ginger', 'shredded chili'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken soup.' },
      pantheon: 'Kitahama\'s purée-thick chicken-and-vegetable doro soba, richness to order, with pink ginger to shift it.',
      profile: { richness: 5, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534406182/', '"A thick, creamy broth, reminiscent of a purée" — top of scale.'],
        oiliness: [R + 'B534406182/', '"It was rich without being greasy" — placed low.'],
        clarity: [R + 'B534406182/', 'Chicken and vegetables simmered "until they lost their shape" — bottom of scale.'],
        tare_strength: [R + 'B481857378/', '"A robust umami flavor without being overwhelming" — mid-scale.'],
        noodle_firmness: [R + 'B533976852/', '"The smooth and chewy noodles" — mid-scale.'],
        aroma_punch: [R + 'B534406182/', 'Fried green onion and eringi "provided a great accent" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534406182/', R + 'B481857378/', R + 'B533976852/', R + 'B537835681/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff help if unsure; check the signboard outside first (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区淡路町1-6-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区淡路町一丁目6番4号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534406182/', R + 'B534774663/', R + 'B537835681/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Doro soba', '', 'Ramen', 'no', 'no', 'October 2026; richness to order.', 'doro_soba'),
      it('', '', 'Lunch doro soba + mini chashu rice bowl set', '', 'Sets', 'no', 'no', 'August 2026.', 'lunch_set'),
      it('', '', 'Spicy doro soba', '¥1,500', 'Ramen', 'no', 'no', 'August 2026.', 'spicy'),
      it('', '', 'Oni Kyoku doro soba (extra thick)', '¥1,600', 'Ramen', 'no', 'no', 'October 2026.', 'oni_kyoku'),
      it('', '', 'Doro tsukemen', '', 'Tsukemen', 'no', 'no', 'August 2026 photo caption.', 'doro_tsukemen'),
      it('', '', 'Mini kara-age rice bowl (lunch)', '+¥100', 'Rice', 'no', 'no', 'October 2026.', 'karaage_don'),
    ] }, {
    cuisine: '鶏と野菜のどろっとしたどろそば・濃さを選べるどろそば: 鶏と野菜を形がなくなるまで煮たスープ、細い平打ち麺か中太の縮れ麺、チャーシュー、揚げねぎ、揚げエリンギ、ねぎ・ランチのどろそばとミニチャーシュー丼のセット・辛いどろそば1,500円・Oni Kyokuどろそば1,600円・どろつけ麺・ランチのミニ唐揚げ丼+100円・卓上に紅しょうが・カウンター11席と4人席1卓',
    neighborhood: '中央区淡路町1-6-4。北浜駅5番出口から徒歩4分、堺筋本町駅12番出口から6分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、揚げ物のトッピング、唐揚げ丼。',
    vegan_detail: 'ヴィーガンではありません。鶏と野菜のどろスープ、チャーシュー。',
    notes: '[ラーメン・北浜近く、鶏と野菜のどろっとしたどろそば] 北浜と堺筋本町の間、オフィス街の小さなカウンターの店で、2020年開店、奈良の店とともにチェーンに残る2店のひとつという声。名物のどろそばは鶏と野菜を形がなくなるまで煮たスープで、「ポタージュのよう」に麺にまとわりつく。意外に飲みやすく後味がさっぱりという声が2つ、とろみの割に味は普通という人も。濃さは基本から極濃のOni Kyoku(1,600円)まで、辛口(1,500円)も。揚げねぎとエリンギが香りを添え、卓上の紅しょうがを入れると甘みが出て味が変わる。昼はミニチャーシュー丼のセットか、100円でミニ唐揚げ丼を。食券を先に、迷ったらスタッフが手伝ってくれる。現金のみ。',
  });
}

save();
