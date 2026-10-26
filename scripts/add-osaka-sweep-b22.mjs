// Osaka sweep (2-mile circle around Dotonbori), batch 22 — ramen phase, nearest first (all OMNI).
//   + なにわ 麺次郎 (Tabelog Ramen OSAKA 100 2025; inside Kintetsu Osaka-Namba ticket gates; GSI 160 m → pin single-source)
//   + 中華そば アサヒ製麺 なんばラーメン一座店 (shoyu-tonkotsu chuka soba on the EDION Namba ramen floor)
//   + KOTAN THE KITCHEN (Kotan's set-meal-and-ramen format in Namba Walk; pin chōme-level)
//   + 四川らーめん 宗右衛門町本店 (spicy Sichuan ramen with house thin noodles, late night; opened Dec 2025)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 22);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ なにわ 麺次郎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27112089/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_naniwa_menjiro_kintetsu_namba', name: 'なにわ 麺次郎 (Naniwa Menjiro)', category: 'OMNI',
    lat: 34.66711, lng: 135.498302, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: free-range chicken and clam broths, chashu.',
    hours_raw: 'Daily 11:00–22:30 (L.O. 22:00); closed the third Tuesday of each month (Tabelog). Inside the Kintetsu Osaka-Namba ticket gates: without a pass, buy a ¥180 admission ticket with a service voucher, which is refunded as a discount (Tabelog). Two-step ticket machine (QR, then pay); cash only.',
    hours: ALL(day(['11:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Inside the ticket gates of Kintetsu Osaka-Namba Stn (Namba 4-1-17)',
    cuisine: 'Tabelog Ramen OSAKA 100 (2025) · clear free-range-chicken shoyu ramen ~¥1,150 · golden clam-broth ramen · rare and pork-belly chashu · thick menma, mitsuba, yuzu, caramelised onion · ajitama ramen with grilled chashu rice set ¥1,690 · small gyoza · 12-seat counter',
    website: null, gmaps: gm('なにわ 麺次郎 近鉄大阪難波駅'), menu_url: null,
    notes: '[Ramen · a Tabelog Ramen 100 counter inside Kintetsu Namba station] A 12-seat counter inside the Kintetsu Osaka-Namba ticket gates, named to the Tabelog Ramen OSAKA "100" for 2025. Two clear, beautiful bowls: a free-range-chicken shoyu, oily but not heavy, deep with chicken and a clean finish, and a golden clam-broth ramen. Both come with rare chashu and pork-belly chashu, thick menma, mitsuba, yuzu and caramelised onion. A soft ajitama ramen with grilled chashu rice was ¥1,690 in October 2026, and the plain bowl has crept up to ¥1,150. Food arrives in three to five minutes. The ticket machine is a confusing two-step process (choose, get a QR code, scan and pay cash). If you\'re not travelling, a ¥180 station admission ticket is refunded as a discount.',
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 July 2019 (Tabelog)', background: 'Selected for Tabelog Ramen OSAKA "Tabelog 100" 2025 (Tabelog); a reviewer mentions an Umeda branch.', philosophy: null, specialty: 'Free-range chicken shoyu; clam-broth ramen.',
      anecdotes: [
        { text: '"The broth was rich in oil but not overly strong in flavor, allowing the delicious taste of the chicken to shine through. The toppings included rare chashu, pork belly chashu, a flavored egg, two thick pieces of menma, mitsuba, and yuzu." — October 2026, set ¥1,690, cash only.', source: R + 'B455271726/' },
        { text: '"The soy sauce broth is rich with the flavor of free-range chicken, providing a deep taste while leaving a refreshing aftertaste." — October 2026.', source: R + 'B537956683/' },
      ],
      japanese_sources_summary: '食べログ: なにわ 麺次郎、大阪市中央区難波4-1-17 近鉄大阪難波駅 改札内、12席(カウンター)、毎日11:00〜22:30(L.O.22:00)、第3火曜定休、カード・電子マネー・QR決済不可、禁煙、2019年7月4日開店、食べログ ラーメン OSAKA 百名店 2025、定期券などがない場合は券売機でサービス券付き入場券(180円)を購入し、提示すると同額を割引。2025〜2026年の口コミ: 値上がりして1,150円、外国人客が多い、特製の黄金貝らーめん(肉増しと味玉)、甘めで醤油ラーメンのよう、柚子とキャラメリゼした玉ねぎ、硬めのメンマ、黄金貝らーめんと炙りチャーシュー丼1,490円(2025年10月)、地鶏醤油らーめんと味玉・炙りチャーシュー丼のセット1,690円、現金のみ、油は多いが味は強すぎない、レアチャーシューと豚バラチャーシュー、三つ葉、券売機がQRを発行して精算機で払う二段階でわかりにくい、澄んだ貝出汁、梅田店も、小ぶりな餃子。',
      confidence: 'high', sources: [TB, R + 'B455271726/', R + 'B537956683/', R + 'B443935993/', R + 'B537729635/', R + 'B537958611/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Free-range chicken shoyu ramen (~¥1,150); golden clam-broth ramen (2026).',
      chashu: 'Rare chashu and pork-belly chashu (October 2026); grilled chashu rice bowl.',
      notable_toppings: ['thick menma', 'mitsuba', 'yuzu', 'caramelised onion', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and clam broths.' },
      pantheon: 'A Ramen 100 counter behind the Kintetsu gates: a clear free-range-chicken shoyu or golden clam broth, rare chashu, yuzu and caramelised onion, served in three minutes.',
      profile: { richness: 3, oiliness: 3, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537956683/', '"Providing a deep taste while leaving a refreshing aftertaste."'],
        oiliness: [R + 'B455271726/', '"The broth was rich in oil but not overly strong in flavor."'],
        clarity: [R + 'B537729635/', '"This clear broth ramen—it\'s both delicious and beautiful."'],
        tare_strength: [R + 'B443935993/', '"Overall, it had a strong sweetness, reminiscent of a shoyu ramen" (golden shellfish).'],
        noodle_firmness: [R + 'B537958611/', '"It paired well with the noodles" — firmness not described; mid-scale (inferred).'],
        aroma_punch: [R + 'B443935993/', '"The yuzu and caramelized onions added a nice touch."'],
      },
      confidence: 'medium', sources: [R + 'B537956683/', R + 'B455271726/', R + 'B537729635/', R + 'B443935993/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Two-step ticket machine (QR, then pay cash); inside the station gates.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波4-1-17 近鉄大阪難波駅 改札内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波四丁目1番17号 (go) is 160m away — the station lot is large, so the pin rests on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B455271726/', R + 'B443935993/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Free-range chicken shoyu ramen', '¥1,150', 'Ramen', 'no', 'no', 'October 2026.', 'jidori_shoyu'),
      it('', '', 'Golden clam-broth ramen', '', 'Ramen', 'no', 'no', 'August–October 2026.', 'kai'),
      it('', '', 'Ajitama shoyu ramen and grilled chashu rice set', '¥1,690', 'Sets', 'no', 'no', 'October 2026.', 'set'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
    ] }, {
    cuisine: '食べログ ラーメン百名店2025・澄んだ地鶏の醤油らーめん約1,150円・黄金の貝出汁らーめん・レアと豚バラのチャーシュー・太いメンマ、三つ葉、柚子、キャラメリゼした玉ねぎ・味玉らーめんと炙りチャーシュー丼のセット1,690円・小ぶりの餃子・カウンター12席',
    neighborhood: '近鉄大阪難波駅の改札内(難波4-1-17)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油だれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。地鶏と貝のスープ、チャーシュー。',
    notes: '[ラーメン・近鉄なんば駅の改札内の百名店] 近鉄大阪難波駅の改札内にある12席のカウンターで、食べログ ラーメン OSAKA 百名店2025に選出。透き通った美しい2つの一杯があり、地鶏の醤油は油が多いのに重くなく、鶏の深いうま味ですっきりした後味、もう一つは金色の貝出汁。どちらもレアと豚バラのチャーシュー、太いメンマ、三つ葉、柚子、キャラメリゼした玉ねぎ。半熟の味玉らーめんと炙りチャーシュー丼のセットは2026年10月で1,690円、普通の一杯は1,150円まで値上がり。3〜5分で出てきます。券売機は選んでQRを出し、精算機で現金で払う二段階でわかりにくいので注意。電車に乗らない人は180円の入場券を買えば同額が割引に。',
  });
}

// ================================================================ 中華そば アサヒ製麺 なんばラーメン一座店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27130369/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://ramen-ichiza.edion.com/';
  put({
    id: 'osaka_asahi_seimen_namba_ramen_ichiza', name: '中華そば アサヒ製麺 なんばラーメン一座店 (Chuka Soba Asahi Seimen)', category: 'OMNI',
    lat: 34.665727, lng: 135.501879, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soy-tonkotsu broth, chashu, minced meat.',
    hours_raw: 'Daily 11:00–21:30 (Tabelog). On the "Namba Ramen Ichiza" ramen floor (9F) of EDION Namba. Cash only; smoking allowed per Tabelog. High chairs available (October 2026).',
    hours: ALL(day(['11:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 3-2-18, EDION Namba 9F "Namba Ramen Ichiza"',
    cuisine: 'Chuka soba in a soy-sauce tonkotsu broth · shoyu ramen ¥980 with thin curly noodles · fried rice set +¥400 · spicy ramen with ajitama ¥1,150 · curry ramen · minced-meat ramen with small rice · garlic chives · walls signed by Yoshimoto comedians',
    website: OWN, gmaps: gm('中華そば アサヒ製麺 なんばラーメン一座'), menu_url: null,
    notes: "[Ramen · soy-tonkotsu chuka soba on EDION Namba's ramen floor] One of the shops on \"Namba Ramen Ichiza\", the 9th-floor ramen street in EDION Namba, and a regular's favourite there. The broth is a soy-sauce tonkotsu, comforting and fragrant, light yet deep for some and surprisingly rich and fatty for others. The shoyu ramen (¥980, June 2026) comes with thin curly noodles, and a fried-rice set adds ¥400. A spicy ramen with ajitama (¥1,150) has a real kick with garlic chives. There's also a curry ramen with big pieces of meat, and a minced-meat ramen with a small rice to mop up. The walls are signed by Yoshimoto comedians. Families come after toy shopping on 7F, and there are high chairs. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 June 2022 (Tabelog)', background: 'Shop on the Namba Ramen Ichiza floor of EDION Namba (ramen-ichiza.edion.com).', philosophy: null, specialty: 'Soy-tonkotsu chuka soba.',
      anecdotes: [
        { text: '"I had the Shoyu Ramen for JPY 980 and the Fried Rice Set for JPY 400. The broth was light yet flavorful, with a nice depth from the soy sauce, and the thin, curly noodles had a delightful texture." — June 2026.', source: R + 'B459755081/' },
        { text: '"The soy sauce-based tonkotsu broth is incredibly delicious and comforting… I\'m convinced that Chuka Soba Asahi Seimen is still my favorite." — September 2026.', source: R + 'B536515975/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば アサヒ製麺 なんばラーメン一座店、大阪市中央区難波3-2-18 なんばラーメン一座、毎日11:00〜21:30、カード・電子マネー・QR決済不可、喫煙可と記載、2022年6月23日開店、サイト ramen-ichiza.edion.com。2026年の口コミ(6〜10月): 辛いラーメン1,150円(味玉付き、ニラ)、醤油ラーメン980円と炒飯セット400円(あっさりで醤油の深み、細いちぢれ麺)、醤油ベースの豚骨、二日酔いに、一座で一番好き、エディオンのラーメン街、濃厚で脂っこいとの声、甘い醤油の香り、吉本芸人のサイン、7階のおもちゃ売り場の後に9階でラーメン、子ども用の椅子、ひき肉のラーメンと小ライス、カレーラーメン(大きな肉、脂が多い)。',
      confidence: 'medium', sources: [TB, OWN, R + 'B459755081/', R + 'B536515975/', R + 'B537571034/', R + 'B537686049/', R + 'B538078227/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'curly', hydration: null, handmade: false, notes: 'Thin, curly noodles in the shoyu (June 2026); chewy straight noodles in the spicy ramen (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'chuka soba'],
      signature_bowl: 'Shoyu ramen ¥980 (June 2026).',
      chashu: 'Chashu (not described in detail).',
      notable_toppings: ['seasoned egg (spicy ramen)', 'garlic chives', 'minced meat'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu.' },
      pantheon: 'EDION Namba\'s ramen-floor favourite: a fragrant soy-tonkotsu chuka soba on thin curly noodles, with a spicy chive version for a kick.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B459755081/', '"Light yet flavorful, with a nice depth"; another found it "a bit rich and fatty" (' + R + 'B536769196/).'],
        oiliness: [R + 'B536769196/', '"The flavor was a bit rich and fatty."'],
        clarity: [R + 'B536515975/', 'Soy-sauce-based tonkotsu — not clear (inferred).'],
        tare_strength: [R + 'B537571034/', '"The sweet aroma of soy sauce wafted through the air."'],
        noodle_firmness: [R + 'B459755081/', '"Chewy straight noodles" (spicy ramen); thin curly in the shoyu.'],
        aroma_punch: [R + 'B459755081/', 'Spicy version: "the rich flavor of the broth has a nice kick".'],
      },
      confidence: 'medium', sources: [R + 'B459755081/', R + 'B536515975/', R + 'B536769196/', R + 'B537571034/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Family-friendly (high chairs); cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-18 なんばラーメン一座',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番18号 (go) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B459755081/'],
    price_note: 'Prices from June and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '¥980', 'Ramen', 'no', 'no', 'June 2026.', 'shoyu'),
      it('', '', 'Fried rice set (add-on)', '¥400', 'Sets', 'no', 'no', 'June 2026.', 'chahan_set'),
      it('', '', 'Spicy ramen with seasoned egg', '¥1,150', 'Ramen', 'no', 'no', 'September 2026.', 'spicy'),
      it('', '', 'Curry ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'curry'),
    ] }, {
    cuisine: '醤油豚骨の中華そば・細いちぢれ麺の醤油ラーメン980円・炒飯セット+400円・味玉付きの辛いラーメン1,150円・カレーラーメン・小ライス付きのひき肉のラーメン・ニラ・吉本芸人のサイン',
    neighborhood: '難波3-2-18、エディオンなんば9階「なんばラーメン一座」',
    gf_detail: 'グルテンフリーではありません。小麦の麺、炒飯。',
    vegan_detail: 'ヴィーガンではありません。醤油豚骨のスープ、チャーシュー、ひき肉。',
    notes: '[ラーメン・エディオンなんばのラーメン街の醤油豚骨] エディオンなんば9階のラーメン街「なんばラーメン一座」の一軒で、一座で一番好きという常連も。スープは醤油ベースの豚骨で、香りがよくほっとする味。あっさりなのに深いという声も、意外に濃厚で脂っこいという声も。醤油ラーメン(980円、2026年6月)は細いちぢれ麺で、炒飯セットは+400円。味玉付きの辛いラーメン(1,150円)はニラ入りでしっかり辛さも。大きな肉のカレーラーメンや、小ライスで締めるひき肉のラーメンも。壁には吉本芸人のサイン。7階でおもちゃを買った家族連れも来て、子ども用の椅子もあります。現金のみ。',
  });
}

// ================================================================ KOTAN THE KITCHEN
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27137491/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kotan_the_kitchen_namba_walk', name: 'KOTAN THE KITCHEN', category: 'OMNI',
    lat: 34.667031, lng: 135.504725, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu, meat broth; set meals with meat.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30); closed when Namba Walk is closed (Tabelog). Cards and e-money accepted.',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Walk 3-bangai, by the plaza linked to Nippombashi Stn (Sennichimae 1-chōme)',
    cuisine: 'Kotan\'s set-meal format · KOTAN ramen (shoyu or miso ¥820) · mini fried rice and tenshinhan sets · gyoza set ¥500 · chashu-egg set meal · stir-fried meat and vegetables set · spicy cold noodles (summer) · counter and tables',
    website: 'http://ramen-kotan.co.jp/', gmaps: gm('KOTAN THE KITCHEN なんばウォーク'), menu_url: null,
    notes: "[Ramen · Kotan's ramen-and-set-meal kitchen under Nippombashi] A newer format from Kotan, the Osaka ramen chain going since 1968: a bright counter-and-table kitchen in Namba Walk by the Nippombashi plaza, mixing the familiar KOTAN ramen with set meals. The shoyu or miso KOTAN ramen (miso ¥820, July 2026) comes with simple, satisfying chashu. Pair it with a mini fried rice or a tenshinhan set, which is unlike the usual Chinese-restaurant version. Gyoza (set ¥500), a chashu-egg set meal with miso soup and pickles, and a stir-fried meat-and-vegetable set suit rice people. In summer there's a bright-red spicy cold ramen with kimchi and smoked egg. One regular has been more than 30 times.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 July 2023 (Tabelog)', background: 'A new format from KOTAN Ramen (ramen-kotan.co.jp), "established in 1968" per an August 2026 review.', philosophy: null, specialty: 'Kotan ramen with set meals.',
      anecdotes: [
        { text: '"I ordered the KOTAN Ramen Miso (JPY 820), along with the Gyoza Set Meal (JPY 500) and a Lemon Sour (JPY 380)… KOTAN Ramen has been the ramen I\'ve eaten the most throughout my life." — July 2026.', source: R + 'B531969784/' },
        { text: '"This is a new style of restaurant from KOTAN Ramen, established in 1968… The bright red soup in a flat bowl… pork belly chashu, smoked boiled egg, napa cabbage kimchi." — August 2026, spicy cold noodles.', source: R + 'B536527203/' },
      ],
      japanese_sources_summary: '食べログ: KOTAN THE KITCHEN、大阪市中央区千日前1丁目 なんばウォーク3番街、カウンター30席・4人テーブル7卓、毎日11:00〜22:00(L.O.21:30)、なんばウォーク休館日は休み、禁煙(なんばウォークの喫煙所)、カード・電子マネー可、2023年7月29日開店、公式 ramen-kotan.co.jp。2026年の口コミ(6〜10月): 味噌ラーメンと天津飯のセット、普通の中華とは違う天津飯、味噌ラーメンとミニ炒飯、KOTANラーメン(醤油)とミニ炒飯、チャーシューエッグ定食(漬物と味噌汁)、KOTANラーメン味噌820円、餃子定食500円、レモンサワー380円、肉野菜炒め定食、冷麺、1968年創業のKOTANラーメンの新しい形、期間限定の辛い冷麺(豚バラチャーシュー、燻製卵、白菜キムチ、もやし、ねぎ)、日本橋駅の第1広場前。',
      confidence: 'medium', sources: [TB, R + 'B531969784/', R + 'B536527203/', R + 'B530143903/', R + 'B469023257/', R + 'B531223292/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: '"The noodles perfectly absorb the flavor" (July 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'KOTAN ramen, shoyu or miso (miso ¥820, July 2026).',
      chashu: '"Simple yet delicious chashu" (July 2026).',
      notable_toppings: ['chashu', 'kimchi and smoked egg (spicy cold noodles)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu; meat broth.' },
      pantheon: 'Kotan\'s ramen-and-teishoku kitchen under Nippombashi: the lifelong KOTAN bowl in shoyu or miso, with tenshinhan and fried rice on the side.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B530143903/', '"Their broth never gets boring" — mid-scale (inferred).'],
        oiliness: [R + 'B530143903/', 'Not described — placed low-mid (inferred).'],
        clarity: [R + 'B469023257/', 'Miso and shoyu versions — not described as clear (inferred).'],
        tare_strength: [R + 'B530143903/', 'Not described — mid-scale (inferred).'],
        noodle_firmness: [R + 'B530143903/', '"The noodles perfectly absorb the flavor" — mid-scale.'],
        aroma_punch: [R + 'B530143903/', 'A familiar, everyday bowl — placed low (inferred).'],
      },
      confidence: 'low', sources: [R + 'B530143903/', R + 'B531969784/', R + 'B469023257/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy mall kitchen; counter and tables.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区千日前1丁目 なんばウォーク 3番街',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves the underground-mall address only to 大阪府大阪市中央区千日前一丁目 (chōme, 72m) and OSM has no match, so the pin rests on the Tabelog point alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531969784/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'KOTAN ramen, miso', '¥820', 'Ramen', 'no', 'no', 'July 2026.', 'kotan_miso'),
      it('', '', 'KOTAN ramen, shoyu, with mini fried rice', '', 'Sets', 'no', 'no', 'July 2026.', 'kotan_shoyu_set'),
      it('', '', 'Gyoza set meal', '¥500', 'Set meals', 'no', 'no', 'July 2026.', 'gyoza_set'),
      it('', '', 'Tenshinhan set', '', 'Sets', 'no', 'no', 'October 2026.', 'tenshinhan'),
      it('', '', 'Chashu-egg set meal', '', 'Set meals', 'no', 'no', 'July 2026.', 'chashu_egg'),
      it('', '', 'Spicy cold noodles (summer)', '', 'Seasonal', 'no', 'no', 'August 2026.', 'pirikara_reimen'),
    ] }, {
    cuisine: '古潭の定食スタイル・KOTANラーメン(醤油、味噌820円)・ミニ炒飯や天津飯のセット・餃子定食500円・チャーシューエッグ定食・肉野菜炒め定食・夏の辛い冷麺・カウンターとテーブル',
    neighborhood: 'なんばウォーク3番街、日本橋駅とつながる広場の前(千日前1丁目)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、炒飯。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、肉のスープ、肉の定食。',
    notes: '[ラーメン・日本橋側の古潭のラーメンと定食の店] 1968年から続く大阪のラーメンチェーン古潭の新しい形で、日本橋の広場前、なんばウォークにあるカウンターとテーブルの明るい店。おなじみのKOTANラーメンと定食を組み合わせています。醤油か味噌のKOTANラーメン(味噌820円、2026年7月)はシンプルで満足感のあるチャーシュー。ミニ炒飯や、普通の中華とは違う天津飯のセットと一緒に。餃子(定食500円)、味噌汁と漬物付きのチャーシューエッグ定食、肉野菜炒め定食はご飯派に。夏はキムチと燻製卵の真っ赤な辛い冷麺も。30回以上通う常連も。',
  });
}

// ================================================================ 四川らーめん 宗右衛門町本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27153632/'; const R = TB + 'dtlrvwlst/';
  const late = ['00:00', '07:00'], eve = ['21:00', '23:59'];
  put({
    id: 'osaka_shisen_ramen_soemoncho', name: '四川らーめん 宗右衛門町本店 (Sichuan Ramen Sōemonchō)', category: 'OMNI',
    lat: 34.6699, lng: 135.505456, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy-sauce broths.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth, chashu.',
    hours_raw: 'Tabelog: Mon 0:00–7:00; Tue 21:00–24:00; Wed–Fri 0:00–7:00 and 21:00–24:00; Sat–Sun 0:00–9:00 and 21:00–24:00 — in practice a 9 pm-to-morning shop, closed Monday night. A reviewer found it opening late and out of Sichuan ramen one night (October 2026). Cash only (Tabelog).',
    hours: { 0: day(late), 1: day(eve), 2: day(late, eve), 3: day(late, eve), 4: day(late, eve), 5: day(['00:00', '09:00'], eve), 6: day(['00:00', '09:00'], eve) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sōemonchō 1-21, a back alley one block off Minami Sōemon-dōri',
    cuisine: 'Spicy Sichuan ramen ¥1,000 with house-made thin, somen-like noodles and crunchy greens · black shoyu ramen · garlic and lemon to adjust · kimchi fried rice · garlic-pepper fried rice · 13 seats on two floors · 9 pm to morning',
    website: null, gmaps: gm('四川らーめん 宗右衛門町本店'), menu_url: null,
    notes: "[Ramen · late-night Sichuan ramen in a Sōemonchō alley] Opened in December 2025 in a back alley off Sōemon-dōri: a 13-seat, two-floor shop that runs from 9 pm into the morning and is made for a post-drinks bowl. The signature Sichuan ramen (¥1,000) has a pleasantly spicy, rich broth over house-made thin noodles, almost somen-like, under a big heap of crunchy greens. Season it with garlic and lemon. A black shoyu ramen and a strong soy-sauce shoyu are the alternatives, and the fried rice (kimchi, or garlic and pepper) is good. Hours can slip: one October visitor arrived to find it opening late and out of Sichuan ramen. The stiff door is a known quirk. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 December 2025 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Sichuan ramen with house-made noodles.',
      anecdotes: [
        { text: '"I ordered the signature Sichuan ramen and kimchi fried rice. The rich and spicy broth paired perfectly with the homemade thin noodles, and I quickly finished it after adding garlic and lemon juice." — October 2026.', source: R + 'B537739434/' },
        { text: '"I ordered the Sichuan Ramen for JPY 1000. It came with a generous amount of crunchy greens… the noodles were thin, similar to somen." — September 2026.', source: R + 'B535915510/' },
      ],
      japanese_sources_summary: '食べログ: 四川らーめん 宗右衛門町本店、大阪市中央区宗右衛門町1-21、13席(1階カウンター6、2階カウンター6、2階テーブル6人)、月0:00〜7:00、火21:00〜24:00、水〜金0:00〜7:00・21:00〜24:00、土日0:00〜9:00・21:00〜24:00、カード・電子マネー・QR決済不可、禁煙、2025年12月9日開店。2026年の口コミ(9〜10月): 飲んだ後の醤油ラーメン(醤油が強い、シャキシャキのもやし、チャーシュー)、路地にあり見つけにくい、扉が開け閉めしにくい、四川らーめん1,000円(シャキシャキの青菜、そうめんのような細麺)、ほどよい辛さ、懐かしい炒飯、深夜まで、味変できる、昨年末に裏路地に開店、自家製の細麺、にんにくとレモン汁、キムチ炒飯、開店準備が遅れていて四川らーめんがなかった日、黒醤油ラーメン、にんにくと胡椒の炒飯。',
      confidence: 'medium', sources: [TB, R + 'B537739434/', R + 'B535915510/', R + 'B536411840/', R + 'B535719910/', R + 'B537925871/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other', 'shoyu'], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: true, notes: 'House-made thin noodles, "similar to somen" (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Sichuan ramen ¥1,000 (September 2026).',
      chashu: 'Chashu ("delicious", September 2026).',
      notable_toppings: ['crunchy greens', 'bean sprouts', 'garlic', 'lemon'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Sōemonchō\'s after-hours alley bowl: a spicy Sichuan broth on house-made somen-thin noodles under a heap of crunchy greens, brightened with garlic and lemon.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 2, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537739434/', '"The rich and spicy broth."'],
        oiliness: [R + 'B536411840/', 'Oil not described — mid-scale (inferred).'],
        clarity: [R + 'B537739434/', 'Rich spicy broth — not clear (inferred).'],
        tare_strength: [R + 'B535719910/', 'Shoyu version: "the broth had a strong soy sauce flavor"; Sichuan broth "very delicious" (' + R + 'B535915510/).'],
        noodle_firmness: [R + 'B535915510/', '"The noodles were thin, similar to somen."'],
        aroma_punch: [R + 'B536411840/', '"The broth was pleasantly spicy"; garlic and lemon added (' + R + 'B537739434/).'],
      },
      confidence: 'medium', sources: [R + 'B537739434/', R + 'B535915510/', R + 'B536411840/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Alley shop with a stiff door; cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町1-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町1番21号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535915510/', R + 'B537739434/'],
    price_note: 'One price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sichuan ramen', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'sichuan'),
      it('', '', 'Black shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'black_shoyu'),
      it('', '', 'Kimchi fried rice', '', 'Rice', 'no', 'no', 'October 2026.', 'kimchi_chahan'),
      it('', '', 'Fried rice', '', 'Rice', 'no', 'no', 'September–October 2026.', 'chahan'),
    ] }, {
    cuisine: '自家製のそうめんのような細麺とシャキシャキの青菜の辛い四川らーめん1,000円・黒醤油ラーメン・にんにくとレモンで味変・キムチ炒飯・にんにくと胡椒の炒飯・2フロア13席・夜9時〜朝',
    neighborhood: '宗右衛門町1-21、ミナミの宗右衛門町通りから1本入った路地',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のスープ。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、チャーシュー。',
    notes: '[ラーメン・宗右衛門町の路地の深夜の四川らーめん] 2025年12月、宗右衛門町通りから入った路地に開店した、2フロア13席の店。夜9時から朝までで、飲んだ後の一杯にぴったり。看板の四川らーめん(1,000円)はほどよく辛くコクのあるスープに、そうめんのような自家製の細麺、シャキシャキの青菜がたっぷり。にんにくとレモンで味を変えて。黒醤油ラーメンや醤油の強い醤油ラーメンもあり、炒飯(キムチ、にんにくと胡椒)もおいしい。時間はずれることもあり、10月には開店が遅れて四川らーめんがなかったという客も。開けにくい扉もこの店の名物。現金のみ。',
  });
}

save();
