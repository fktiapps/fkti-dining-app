// Osaka sweep (2-mile circle around Dotonbori), batch 70 — ramen phase (all OMNI).
//   + 麺匠至誠 (Tabelog 100 2023–2025: kombu-water tsukemen and seasonal dashi bowls by Yotsubashi)
//   + 麺のようじ (Tabelog 100 2018–2020 and 2023–2025: 8-seat chicken-bonito shio and doro tsukemen)
//   + 濃厚中華そば よし田 (thick-noodle back-fat chuka soba and monthly specials, daytime only)
//   + IKR51 (wide menu of shoyu, clam, oyster and seafood tsukemen near Shinsaibashi)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 70);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺匠至誠
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27085783/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '14:30']), B = day(['11:00', '14:30'], ['17:30', '20:00']);
  put({
    id: 'osaka_mensho_shisei_yotsubashi', name: '麺匠至誠 (Mensho Shisei)', category: 'OMNI',
    lat: 34.675648, lng: 135.4967, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, chicken and shellfish broths; chashu.',
    hours_raw: 'Mon–Wed and Sat 11:00–14:30; Thu–Fri 11:00–14:30 and 17:30–20:00; closed Sunday, holidays and about two Mondays a month; closes when sold out or if the soup isn\'t ready (Tabelog; Instagram for updates). Ticket machine. Lunch lines. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: B, 4: B, 5: A }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-5-7, Yotsubashi Bldg B1F (Nishi) — 30 seconds from Yotsubashi Stn exit 2',
    cuisine: 'Tabelog Ramen 100 (2023–2025) · "Kamatsu" tsukemen with noodles in seasoned kombu water; Mochihime noodles +¥100 · shellfish-broth ramen · chicken shio · rotating limited bowls: creamy Tanohata duck paitan shio ¥1,300 (October 2026), chilled Rausu-kombu ramen with mushroom oil · smoked chuck-eye chashu +¥150 · ajitama ¥100 · Kujo green onion · dashi rice ball, extra rice ¥50 · 6 counter seats and 4 tables, 18 seats',
    website: null, gmaps: gm('麺匠至誠 四ツ橋'), menu_url: null,
    notes: "[Ramen · a Tabelog 100 dashi and tsukemen shop under Yotsubashi Station] An 18-seat basement shop directly above Yotsubashi Station, formerly known as Jikon, open since 2015 and named to Tabelog's ramen 100 from 2023 to 2025. Expect a short line at the 11 am opening; it's mostly a lunch shop and closes when the soup runs out. The regular favorite is the Kamatsu tsukemen, noodles soaked in kombu water seasoned well enough to eat on their own; upgrade to the smooth Mochihime noodles for ¥100. The shellfish-broth ramen is gentle and comforting, with a perfectly seasoned egg. Seasonal limited bowls are the draw: in October 2026 a creamy Tanohata duck paitan shio (¥1,300), and a chilled ramen of double Rausu kombu with mushroom oil that one diner rated above any kombu tsukemen. Finish with a dashi rice ball. Cash only; open Thursday and Friday evenings only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 June 2015 (Tabelog); formerly Jikon (October 2026 review)', background: 'Tabelog Ramen OSAKA 100, 2023–2025 (Tabelog).', philosophy: 'Seasonal limited bowls built on rich broths (October 2026 review).', specialty: 'Kombu-water tsukemen; seasonal dashi ramen.',
      anecdotes: [
        { text: '"The tsukemen is soaked in kombu water, which is already perfectly seasoned, making it delicious even without the dipping sauce. The flavor of the noodles is maximally enhanced." — October 2026, Kamatsu tsukemen with Mochihime noodles.', source: R + 'B113844014/' },
        { text: '"The soup is a creamy duck white soup made solely from Tanohata duck, combined with a salt tare that enhances the rich flavor of the duck while keeping the duck fat light." — October 2026, limited Tanohata duck paitan shio ¥1,300.', source: R + 'B419436088/' },
      ],
      japanese_sources_summary: '食べログ: 麺匠至誠、大阪市西区新町1-5-7 四ツ橋ビルディングB1F、四ツ橋駅2番出口から30秒、月・火・水・土11:00〜14:30、木・金11:00〜14:30・17:30〜20:00、日・祝休み、月曜は月2回ほど休み(Instagramで告知)、売り切れ次第終了、スープが用意できない日は臨時休業、カード・電子マネー・QR不可、18席(カウンター6、4人テーブル2、2人テーブル2)、2015年6月9日開店、ラーメン百名店2023〜2025。口コミ(2026年8〜10月): 旧店名Jikon、濃厚系の季節限定、鶏塩、Kamatsuつけ麺、Mochihimeの麺に100円で変更、特製(味玉・チャーシュー・メンマ)、九条ねぎ、昆布水に浸かった麺、限定のTanohata鴨の白湯塩1,300円、燻製の肩ロースチャーシュー150円、味玉100円、追い飯50円、柚子胡椒、冷やしのRausu昆布と香茸油、出汁のおにぎり、貝だしのラーメン、絶品の味玉、昼は行列、券売機、濃厚だが好みではなかったという声、鴨むねがやわらかい。',
      confidence: 'high', sources: [TB, R + 'B113844014/', R + 'B419436088/', R + 'B497928174/', R + 'B537816519/', R + 'B537838378/', R + 'B537986399/'] },
    ramen: {
      broth_base: ['gyokai', 'chicken', 'duck'], broth_texture: 'unknown', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick smooth noodles; Mochihime noodles available (October 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Kamatsu tsukemen (kombu water) (October 2026).',
      chashu: 'Smoked chuck-eye roll; roast duck on the duck bowl (October 2026).',
      notable_toppings: ['kombu water', 'ajitama', 'Kujo green onion', 'dashi rice ball'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Animal and shellfish broths.' },
      pantheon: 'Yotsubashi\'s Tabelog 100 basement: kombu-water tsukemen and a revolving cast of duck, shellfish and kombu bowls.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B419436088/', '"A creamy duck white soup… keeping the duck fat light" (limited) — mid-scale overall.'],
        oiliness: [R + 'B419436088/', '"Keeping the duck fat light" — placed low.'],
        clarity: [R + 'B537816519/', 'Shellfish-broth ramen; no comment on clarity — mid-scale.'],
        tare_strength: [R + 'B537838378/', '"The balance of umami and salt is perfect" — mid-scale.'],
        noodle_firmness: [R + 'B113844014/', '"The umami, texture, and smoothness are simply outstanding" — mid-scale.'],
        aroma_punch: [R + 'B497928174/', '"Incredibly rich kombu flavor… the aroma of the fragrant mushrooms."'],
      },
      confidence: 'medium', sources: [R + 'B113844014/', R + 'B419436088/', R + 'B537838378/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; lunch line.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-5-7 四ツ橋ビルディング B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目5番7号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B419436088/', R + 'B113844014/', R + 'B537838378/'],
    price_note: 'Prices from October 2026 reviews; limited bowls change often.', last_checked: TODAY, items: [
      it('', '', 'Kamatsu tsukemen (kombu water)', '', 'Tsukemen', 'no', 'no', 'October 2026; Mochihime noodles +¥100.', 'kamatsu'),
      it('', '', 'Shellfish-broth ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'kaidashi'),
      it('', '', 'Tanohata duck paitan shio (limited)', '¥1,300', 'Limited', 'no', 'no', 'October 2026.', 'kamo'),
      it('', '', 'Chilled Rausu-kombu ramen with mushroom oil (limited)', '', 'Limited', 'no', 'no', 'October 2026.', 'hiyashi_konbu'),
      it('', '', 'Smoked chuck-eye chashu', '+¥150', 'Toppings', 'ask', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Dashi rice ball', '', 'Rice', 'ask', 'no', 'October 2026.', 'onigiri'),
    ] }, {
    cuisine: '食べログラーメン百名店(2023〜2025)・味付けした昆布水に浸かった麺のKamatsuつけ麺、Mochihimeの麺は+100円・貝だしのラーメン・鶏塩・季節の限定(クリーミーなTanohata鴨の白湯塩1,300円(2026年10月)、香茸油の冷やしRausu昆布ラーメン)・燻製肩ロースチャーシュー+150円・味玉100円・九条ねぎ・出汁のおにぎり、追い飯50円・カウンター6席とテーブル4卓で18席',
    neighborhood: '西区新町1-5-7 四ツ橋ビルディングB1F。四ツ橋駅2番出口から30秒',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。鴨、鶏、貝のスープ、チャーシュー。',
    notes: '[ラーメン・四ツ橋駅直上の百名店のだしとつけ麺] 四ツ橋駅のすぐ上、ビルの地下にある18席の店で、旧店名はJikon、2015年開店、2023〜2025年のラーメン百名店。11時の開店前から少し並び、ほぼ昼だけの営業でスープがなくなり次第終了。通う人の定番はKamatsuつけ麺で、そのままでもおいしいほど味のついた昆布水に麺が浸かっています。100円でなめらかなMochihimeの麺に変更も。貝だしのラーメンはやさしくほっとする味で、味玉の味付けが絶妙。季節限定が楽しみで、2026年10月はクリーミーなTanohata鴨の白湯塩(1,300円)や、Rausu昆布を重ね香茸油を合わせた冷やしラーメン。どの昆布水つけ麺とも別格だったという人も。締めは出汁のおにぎりを。現金のみ、夜は木・金だけ。',
  });
}

// ================================================================ 麺のようじ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27072765/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://twitter.com/menno_yoji3rd';
  put({
    id: 'osaka_men_no_youji_kozu', name: '麺のようじ (Men no Youji)', category: 'OMNI',
    lat: 34.668302, lng: 135.511303, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and shio tare; stone-grilled omurice and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and bonito broths, chashu.',
    hours_raw: 'Daily 11:30–14:40 (L.O. 14:20) and 18:00–21:00 (L.O. 20:30) (Tabelog). Ticket machine outside; your number is called (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:30', '14:40'], ['18:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kozu 2-1-2, Okoshi Bldg 1F — about 6–8 min from Nippombashi Stn exit 7',
    cuisine: 'Tabelog Ramen 100 (2018–2020, 2023–2025) · chicken-bonito extreme shio ¥1,000 (with yuzu) · chicken-bonito extreme shoyu · chicken doro tsukemen ¥1,300, large +¥150 · chicken-bonito abura-soba · chicken shio · Shirakawa-style ramen and tsukemen · limited chicken paitan and "Youji ramen" ¥1,100 · noodles from Teigaku · rare-chashu rice bowl ¥350, chicken-thigh chashu bowl ¥400 · stone-grilled omurice and fried rice · 4 counter seats and 2 small tables, 8 seats',
    website: OWN, gmaps: gm('麺のようじ 高津'), menu_url: null,
    notes: "[Ramen · an 8-seat Tabelog 100 chicken ramen counter in Kozu] A tiny eight-seat shop in Kozu, six to eight minutes from Nippombashi exit 7, its walls covered in signatures, named to Tabelog's ramen 100 six times and loved by regulars with hundreds of visits. The signature is the chicken-bonito extreme shio (¥1,000, October 2026): a deep, chicken-packed salt broth brightened with plenty of yuzu, two kinds of chashu and a soft-boiled egg on Teigaku noodles. The shoyu version is just as refined, and the chicken doro tsukemen (¥1,300) brings a bubbling-hot, thick chicken-soy dip for glossy flat noodles. Limited bowls appear on social media, like a salt chicken paitan or the hearty Youji ramen. Add a rare-chashu rice bowl (¥350) or the stone-grilled cheese omurice. Buy a ticket outside and wait for your number. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 May 2013; reopened under the current name 28 January 2014 (Tabelog)', background: 'Tabelog Ramen WEST 100 2018–2020 and OSAKA 100 2023–2025 (Tabelog); run by two staff (October 2026 review).', philosophy: null, specialty: 'Chicken-bonito shio ramen; chicken doro tsukemen.',
      anecdotes: [
        { text: '"The broth has a rich chicken flavor that combines beautifully with the salt seasoning, creating a deep and delicious shio soup… This is a shio ramen packed with chicken flavor that you won\'t find anywhere else." — October 2026, chicken-bonito extreme shio ¥1,000.', source: R + 'B537855133/' },
        { text: '"The dipping sauce was a chicken-based soy sauce that was bubbling hot, thick, and slightly low in saltiness, perfectly coating the noodles." — October 2026, chicken doro tsukemen ¥1,300.', source: R + 'B424953431/' },
      ],
      japanese_sources_summary: '公式X menno_yoji3rd。食べログ: 麺のようじ、大阪市中央区高津2-1-2 大越ビル1F、日本橋駅7番出口から徒歩6〜8分、毎日11:30〜14:40(L.O.14:20)・18:00〜21:00(L.O.20:30)、カード・電子マネー・QR不可、8席(カウンター4、テーブル4)、2013年5月9日開店、2014年1月28日に店名を変えてリニューアル、ラーメン百名店(WEST 2018〜2020、OSAKA 2023〜2025)。口コミ(2026年9〜10月): 通い続ける常連(100回以上)、鶏白湯ラーメンと石焼きチーズオムライス、鶏どろつけ麺1,300円と大盛り150円、店外の券売機、極太の平打ちストレート麺、ぐつぐつの鶏醤油のつけ汁、メニュー(鶏ガツオ極み塩、鶏ガツオ極み醤油、鶏どろつけ麺、鶏ガツオ油そば、鶏塩、Shirakawa風つけ麺、Shirakawa風ラーメン、石焼オムライス、石焼炒飯)、限定のようじラーメン1,100円、中太の縮れ麺、スタッフ2人、限定の鶏白湯(塩ベース)、Teigakuの麺、鶏ガツオ極み塩1,000円とレアチャーシュー丼350円、チャーシュー2種、柚子がたっぷり、醤油ラーメンとチャーシュー丼、壁一面のサイン、低温調理チャーシューと鶏ももチャーシュー、鶏ももチャーシュー丼400円、鶏の旨みが詰まった塩。',
      confidence: 'high', sources: [TB, OWN, R + 'B537855133/', R + 'B424953431/', R + 'B537547037/', R + 'B537604196/', R + 'B50762737/', R + 'B131381311/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'unknown', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Wavy medium-thin noodles from Teigaku on the shio; thick flat straight noodles for the doro tsukemen (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Chicken-bonito extreme shio, ¥1,000 (October 2026).',
      chashu: 'Low-temperature chashu and chicken-thigh chashu (October 2026).',
      notable_toppings: ['yuzu', 'soft-boiled egg', 'kaiware', 'chopped onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and bonito broth.' },
      pantheon: 'Kozu\'s eight-seat Tabelog 100: a chicken-packed bonito shio lit up with yuzu, and a bubbling chicken doro tsukemen.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537547037/', '"The rich chicken salt broth."'],
        oiliness: [R + 'B537855133/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B537855133/', '"A deep and delicious shio soup" — placed low.'],
        tare_strength: [R + 'B424953431/', '"Slightly low in saltiness" (tsukemen) — mid-scale.'],
        noodle_firmness: [R + 'B537855133/', '"The noodles have a nice chewiness" — mid-scale.'],
        aroma_punch: [R + 'B537547037/', '"Infused with plenty of yuzu."'],
      },
      confidence: 'medium', sources: [R + 'B537547037/', R + 'B537855133/', R + 'B424953431/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; number called.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高津2-1-2 大越ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高津二丁目1番2号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537547037/', R + 'B424953431/', R + 'B537855133/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken-bonito extreme shio ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'kiwami_shio'),
      it('', '', 'Chicken-bonito extreme shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'kiwami_shoyu'),
      it('', '', 'Chicken doro tsukemen', '¥1,300', 'Tsukemen', 'no', 'no', 'October 2026; large +¥150.', 'doro'),
      it('', '', 'Chicken-bonito abura-soba', '', 'Abura-soba', 'no', 'no', 'October 2026.', 'abura'),
      it('', '', 'Rare-chashu rice bowl', '¥350', 'Rice', 'no', 'no', 'October 2026.', 'rare_don'),
      it('', '', 'Chicken-thigh chashu rice bowl', '¥400', 'Rice', 'no', 'no', 'October 2026.', 'momo_don'),
      it('', '', 'Stone-grilled cheese omurice', '', 'Rice', 'no', 'no', 'October 2026.', 'omurice'),
    ] }, {
    cuisine: '食べログラーメン百名店(2018〜2020、2023〜2025)・柚子の効いた鶏ガツオ極み塩1,000円・鶏ガツオ極み醤油・鶏どろつけ麺1,300円、大盛り+150円・鶏ガツオ油そば・鶏塩・Shirakawa風のラーメンとつけ麺・限定の鶏白湯や「ようじラーメン」1,100円・Teigakuの麺・レアチャーシュー丼350円、鶏ももチャーシュー丼400円・石焼オムライスと石焼炒飯・カウンター4席と小さなテーブル2つで8席',
    neighborhood: '高津2-1-2 大越ビル1F。日本橋駅7番出口から徒歩6〜8分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油や塩のたれ、石焼オムライスと炒飯。',
    vegan_detail: 'ヴィーガンではありません。鶏とかつおのスープ、チャーシュー。',
    notes: '[ラーメン・高津の8席の百名店の鶏ラーメン] 日本橋駅7番出口から6〜8分、高津にある8席の小さな店で、壁一面にサイン、ラーメン百名店に6回選ばれ、何百回も通う常連も。看板は鶏ガツオ極み塩(1,000円、2026年10月)で、鶏の旨みが詰まった深い塩スープにたっぷりの柚子、チャーシュー2種と半熟卵、麺はTeigaku製。醤油も同じく上品で、鶏どろつけ麺(1,300円)はぐつぐつと熱い濃厚な鶏醤油のつけ汁に艶のある平打ち麺。限定はSNSで告知され、塩ベースの鶏白湯やボリュームのあるようじラーメンなど。レアチャーシュー丼(350円)や石焼チーズオムライスも。食券は店外の券売機で買い、番号で呼ばれます。現金のみ。',
  });
}

// ================================================================ 濃厚中華そば よし田
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27110794/'; const R = TB + 'dtlrvwlst/';
  const M = day(['11:00', '15:30']), W = day(['11:00', '17:00']);
  put({
    id: 'osaka_noko_chuka_soba_yoshida', name: '濃厚中華そば よし田 (Noko Chuka Soba Yoshida)', category: 'OMNI',
    lat: 34.67657, lng: 135.501864, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; shoyu or miso; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: back fat, chashu.',
    hours_raw: 'Mon 11:00–15:30 (L.O. 15:00); Tue–Sat 11:00–17:00 (L.O. 16:30); closed Sunday and holidays; hours may change (Tabelog). Ticket machine. Free small rice at lunch until 14:00 (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: M, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 3-6-25, IBC Shinsaibashi east 1F — near Shinsaibashi Stn',
    cuisine: 'Rich chuka soba on thick curly noodles · regular chuka soba: strong soy flavor that stays gentle, fat that isn\'t greasy · extra-rich back-fat chuka soba · mazesoba · monthly limited bowls: October 2026 spicy-numbing ankake shoyu ramen ¥1,350 with egg yolk, garlic chives and chashu; September miso-butter corn ramen with back fat; summer chilled ramen · rich fried rice set +¥280 · free small rice at lunch · 12 counter seats and 4 two-seat tables',
    website: null, gmaps: gm('濃厚中華そば よし田 南船場'), menu_url: null,
    notes: "[Ramen · thick-noodle chuka soba and monthly specials near Shinsaibashi] A daytime-only chuka soba shop in Minamisenba near Shinsaibashi, open since 2019 and busy at lunch with solo diners and a quick-moving line. The core is a soy-heavy chuka soba on thick, wheaty curly noodles: one diner called the regular the best shoyu ramen ever, strong yet gentle and not greasy, and there's an extra-rich back-fat version and mazesoba. The fun is the monthly special: October 2026's ankake spicy-numbing shoyu (¥1,350) is thick like mapo with an egg yolk and garlic chives, though several found it milder than its name; September brought a miso-butter corn bowl under back fat. Don't skip the rich fried rice (+¥280), and small rice is free at lunch until 2 pm. Cash only; closes by 5 pm.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 April 2019 (Tabelog)', background: 'Rich chuka soba specialist near Shinsaibashi (October 2026 reviews).', philosophy: 'A monthly limited bowl alongside the regulars (September–October 2026 reviews).', specialty: 'Back-fat chuka soba; monthly specials.',
      anecdotes: [
        { text: '"Honestly, I think it\'s the best soy sauce-based ramen I\'ve ever had. It has a gentle flavor while still delivering a strong soy sauce taste. The fat isn\'t greasy at all." — October 2026, regular chuka soba.', source: R + 'B537652886/' },
        { text: '"The first bite surprised me with a slightly sweet flavor in the sauce, but as I continued eating, the spiciness and umami gradually intensified… The thick, curly noodles held up well under the weight of the sauce." — October 2026, limited ankake ramen.', source: R + 'B519344923/' },
      ],
      japanese_sources_summary: '食べログ: 濃厚中華そば よし田、大阪市中央区南船場3-6-25 IBC心斎橋east 1F、心斎橋駅から211m、月11:00〜15:30(L.O.15:00)、火〜土11:00〜17:00(L.O.16:30)、日・祝休み、カード・電子マネー・QR不可、20席(カウンター12、2人テーブル4)、2019年4月25日開店。口コミ(2026年8〜10月): 季節の限定、10月の甘辛の餡かけ醤油ラーメン(甘さから辛さと旨みへ、にんにく・ニラ・豆腐、ゴロゴロのチャーシューと背脂、太いちぢれ麺、白ご飯がほしい)、9月の野菜マシの背脂味噌バターコーン、夏の冷やし、人気店、餡かけシビカラ醤油ラーメン1,350円と濃厚炒飯セット280円、麻婆麺のよう、痺れと辛さは控えめ、昼14時までは小ライス無料、背脂中華そばや混ぜそばも、券売機、最高の醤油ラーメンという声、やさしくても醤油がしっかり、脂がくどくない、小麦の風味の麺、男性のひとり客が多い、回転が早い、山椒の香りは強いが辛くないという声。',
      confidence: 'medium', sources: [TB, R + 'B537652886/', R + 'B519344923/', R + 'B534777712/', R + 'B537095115/', R + 'B537576827/', R + 'B537749195/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: false, notes: 'Thick curly noodles with a wheat flavor (September–October 2026).' },
      regional_style: [], sub_genre: ['chuka soba', 'mazesoba_aburasoba'],
      signature_bowl: 'Chuka soba; extra-rich back-fat chuka soba (October 2026).',
      chashu: 'Chunky chashu; rare chashu on the miso bowl (September–October 2026).',
      notable_toppings: ['back fat', 'garlic chives', 'egg yolk (limited)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Back fat and chashu.' },
      pantheon: 'Minamisenba\'s daytime chuka soba: thick curly noodles in a soy-forward, back-fat broth, with a new special every month.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537576827/', '"The dark broth had a thick consistency, clearly indicating its richness."'],
        oiliness: [R + 'B537652886/', '"The fat isn\'t greasy at all" — mid-scale.'],
        clarity: [R + 'B537576827/', '"The dark broth" — opaque.'],
        tare_strength: [R + 'B537652886/', '"Still delivering a strong soy sauce taste."'],
        noodle_firmness: [R + 'B534777712/', '"Thick and curly, providing a satisfying bite."'],
        aroma_punch: [R + 'B537095115/', 'Strong Sichuan-pepper aroma on the limited bowl — mid-scale for the regular.'],
      },
      confidence: 'medium', sources: [R + 'B537652886/', R + 'B537576827/', R + 'B534777712/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; quick turnover.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-6-25 IBC心斎橋east 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目6番25号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537576827/', R + 'B537749195/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
      it('', '', 'Extra-rich back-fat chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'seabura'),
      it('', '', 'Ankake spicy-numbing shoyu ramen (October limited)', '¥1,350', 'Limited', 'no', 'no', 'October 2026.', 'ankake'),
      it('', '', 'Rich fried rice set', '+¥280', 'Sets', 'no', 'no', 'October 2026.', 'chahan'),
      it('', '', 'Small rice (free at lunch until 14:00)', '', 'Rice', 'ask', 'vegan', 'October 2026.', 'rice'),
    ] }, {
    cuisine: '太いちぢれ麺の濃厚中華そば・醤油がしっかりでもやさしく脂がくどくない中華そば・極濃背脂中華そば・混ぜそば・月替わりの限定(2026年10月は卵黄、ニラ、チャーシューの餡かけシビカラ醤油ラーメン1,350円、9月は背脂の味噌バターコーン、夏は冷やし)・濃厚炒飯セット+280円・昼は小ライス無料・カウンター12席と2人テーブル4つ',
    neighborhood: '南船場3-6-25 IBC心斎橋east 1F。心斎橋駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油や味噌、炒飯。',
    vegan_detail: 'ヴィーガンではありません。背脂、チャーシュー。',
    notes: '[ラーメン・心斎橋近くの太麺の中華そばと月替わり] 心斎橋近くの南船場にある昼だけの中華そばの店で、2019年開店、昼はひとり客でにぎわい行列の回転も早め。基本は小麦の香る太いちぢれ麺の醤油の効いた中華そばで、醤油はしっかりでもやさしく脂はくどくない、今までで最高の醤油ラーメンという人も。極濃の背脂中華そばや混ぜそばも。楽しみは月替わりの限定で、2026年10月の餡かけシビカラ醤油(1,350円)は麻婆のようなとろみに卵黄とニラ、名前ほど辛くないという声も。9月は背脂の味噌バターコーン。濃厚炒飯(+280円)もぜひ、昼14時までは小ライス無料。現金のみ、夕方5時まで。',
  });
}

// ================================================================ IKR51
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27062608/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:30'], ['18:00', '22:00']), E = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_ikr51_minamisenba', name: 'IKR51', category: 'OMNI',
    lat: 34.676605, lng: 135.501095, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; dark shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam, oyster, chicken and seafood broths; chashu.',
    hours_raw: 'Mon–Fri 11:30–14:30 (L.O. 14:00) and 18:00–22:00 (L.O. 21:30); Sat–Sun 11:30–15:00 and 18:00–22:00; closes when sold out; closed irregularly (Tabelog). No reservations. English menu (October 2026). Cash only: no cards or e-money (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 3-11-27, 1F — about 2 min north of Shinsaibashi Stn exit 1, off Midosuji',
    cuisine: 'A broad ramen menu · jet-black shoyu ramen with garlic umami · shellfish-forward chuka soba · clam-broth ramen · oyster shoyu ramen · creamy chicken paitan · special tsukemen with a rich seafood dip, thick noodles and rare chashu · chashu and chicken-tataki rice bowls · seafood rice bowls · English menu · 17 seats',
    website: null, gmaps: gm('IKR51 南船場'), menu_url: null,
    notes: "[Ramen · a many-bowled ramen shop off Midosuji near Shinsaibashi] A 17-seat ramen shop a couple of minutes north of Shinsaibashi Station, open since 2012 and reopened in 2020, with an English menu and plenty of overseas guests. The range is wide: a jet-black shoyu that isn't too salty, with soy richness and garlic umami; a shellfish-forward chuka soba; clam and oyster ramen; and a creamy chicken paitan that one diner rated highly. The standout for one tsukemen skeptic was the special tsukemen, a rich seafood dip with chewy thick noodles and plenty of moist rare chashu, which jumped to the top of a personal ranking. Rice bowls run from chashu to chicken tataki and seafood. Reviews are mixed on value, with one large clam ramen and mini bowl at ¥1,710, and one diner found the soup lukewarm. Cash only; closes when sold out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 January 2012; reopened 6 October 2020 (Tabelog)', background: 'Ramen shop near Shinsaibashi with a wide menu (October 2026 reviews).', philosophy: null, specialty: 'Special tsukemen; jet-black shoyu.',
      anecdotes: [
        { text: '"The harmony between the noodles and the soup is remarkable, making it enjoyable without getting boring until the very end… This Tsukemen has proudly claimed the top spot!" — October 2026.', source: R + 'B325084947/' },
        { text: '"Despite its dark color, it wasn\'t overly salty; I could taste the richness of the soy sauce and the umami of the garlic—truly delicious." — October 2026, jet-black shoyu ramen.', source: R + 'B537422857/' },
      ],
      japanese_sources_summary: '食べログ: IKR51、大阪市中央区南船場3-11-27 日宝シルバービル1F、御堂筋線心斎橋駅1番出口から北へ2分、ドトールの角を右、月〜金11:30〜14:30(L.O.14:00)・18:00〜22:00(L.O.21:30)、土・日11:30〜15:00・18:00〜22:00、売り切れ次第終了、不定休、予約不可、カード・電子マネー不可、17席、2012年1月17日開店、2020年10月6日にリニューアル。口コミ(2026年10月): つけ麺が別格、麺とスープの調和、つけ麺ランキングの1位に、牡蠣醤油ラーメン(牡蠣のエキス)、スープがぬるかった、麺はやわらかめ、提供が早い、外国人客が多い、特製つけ麺とチャーシュー丼(濃厚な魚介のつけ汁、もちもちの太麺、しっとりしたレアチャーシューたっぷり、味玉とメンマ)、深夜のラーメン、英語の表記、海鮮丼も、漆黒醤油ラーメン(色ほど塩辛くなく醤油のコクとにんにくの旨み)、貝の出汁が鶏より強い中華そば、豚の甘みのチャーシュー、硬めのメンマ、野菜も入っていそうな濃厚でクリーミーな鶏白湯、蛤だしラーメン大とミニ鶏たたき丼で1,710円、少し高いという声、訪日客向けのメニュー。',
      confidence: 'medium', sources: [TB, R + 'B325084947/', R + 'B537422857/', R + 'B537315209/', R + 'B537547450/', R + 'B536937294/', R + 'B538092541/'] },
    ramen: {
      broth_base: ['gyokai', 'chicken'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Chewy thick noodles for tsukemen; softer noodles on the ramen for one diner (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'tori_paitan'],
      signature_bowl: 'Special tsukemen; jet-black shoyu ramen (October 2026).',
      chashu: 'Moist rare chashu, plentiful (October 2026).',
      notable_toppings: ['rare chashu', 'ajitama', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shellfish and chicken broths.' },
      pantheon: 'Off Midosuji, IKR51\'s many bowls: a jet-black garlic shoyu, shellfish chuka soba and a seafood tsukemen that converts skeptics.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537315209/', '"The rich seafood dipping sauce was packed with flavor."'],
        oiliness: [R + 'B537422857/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B537422857/', '"Its dark color" — opaque.'],
        tare_strength: [R + 'B537547450/', '"The soy sauce flavor is quite strong."'],
        noodle_firmness: [R + 'B537315209/', '"Chewy thick noodles"; ramen noodles "softer than I prefer" (B536937294) — mid-scale.'],
        aroma_punch: [R + 'B537422857/', '"The umami of the garlic."'],
      },
      confidence: 'medium', sources: [R + 'B537315209/', R + 'B537422857/', R + 'B537547450/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'English menu (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-11-27 日宝シルバービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目11番27号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538092541/', R + 'B537315209/', R + 'B537422857/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Special tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tokusei_tsuke'),
      it('', '', 'Jet-black shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'shikkoku'),
      it('', '', 'Clam-broth ramen (large) with mini chicken-tataki bowl', '¥1,710', 'Sets', 'no', 'no', 'October 2026.', 'hamaguri_set'),
      it('', '', 'Oyster shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'kaki'),
      it('', '', 'Chicken paitan', '', 'Ramen', 'no', 'no', 'October 2026.', 'paitan'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: 'メニューの多いラーメン店・にんにくの旨みの漆黒醤油ラーメン・貝の効いた中華そば・蛤だしラーメン・牡蠣醤油ラーメン・クリーミーな鶏白湯・濃厚魚介のつけ汁にもちもちの太麺とレアチャーシューの特製つけ麺・チャーシュー丼や鶏たたき丼・海鮮丼・英語メニュー・17席',
    neighborhood: '南船場3-11-27 日宝シルバービル1F。心斎橋駅1番出口から北へ約2分、御堂筋から一本入る',
    gf_detail: 'グルテンフリーではありません。小麦の麺、濃い醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。蛤、牡蠣、鶏、魚介のスープ、チャーシュー。',
    notes: '[ラーメン・心斎橋近くの御堂筋裏のメニュー豊富なラーメン] 心斎橋駅から北へ2分ほどの17席のラーメン店で、2012年開店、2020年にリニューアル。英語メニューがあり、海外からの客も多い店。品数が多く、色ほど塩辛くない醤油のコクとにんにくの旨みの漆黒醤油、貝が前に出る中華そば、蛤や牡蠣のラーメン、評価の高いクリーミーな鶏白湯など。つけ麺はあまり食べないという人の1位になったのが特製つけ麺で、濃厚な魚介のつけ汁にもちもちの太麺、しっとりしたレアチャーシューがたっぷり。丼はチャーシュー、鶏たたき、海鮮まで。値段への評価は分かれ、蛤ラーメン大とミニ丼で1,710円という声や、スープがぬるかったという声も。現金のみ、売り切れ次第終了。',
  });
}

save();
