// Osaka sweep (2-mile circle around Dotonbori), batch 133 — ramen phase (all OMNI).
//   + らぁめん しゅき (chicken paitan shoyu/shio, sharp shoyu tsukemen, seasonal chilled bowls; Tsuruhashi)
//   + 世界一暇なラーメン屋 (sweet shellfish-shoyu ramen on whole-wheat noodles, to Mr. Children videos; Nakanoshima office building 2F)
//   + ラーメン・まぜそば SiO Style (creamy pork, chicken and asari clam shio ramen, lemon mazesoba; Via Abeno Walk)
//   + 麺喰い メン太ジスタ (Daniel Punch sansho shoyu soba, rich chuka soba, house kara-age; open to 23:00; Tamatsukuri)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 133);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ らぁめん しゅき
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27117861/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '00:30']); const WE = day(['11:00', '00:30']);
  put({
    id: 'osaka_raamen_shuki_tsuruhashi', name: 'らぁめん しゅき (Ramen Shuki)', category: 'OMNI',
    lat: 34.666703, lng: 135.531475, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and shio tare; tempura mushrooms in the limited bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; chicken chashu; sanma-bushi in the limited bowl; egg.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 18:00–00:30; Sat–Sun 11:00–00:30; hours may change (Tabelog). Free kimchi (August 2025). Cards, IC cards, e-money and QR (incl. Alipay, WeChat Pay) accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Obase 3-14-10 (Higashinari-ku) — 2 min from Tsuruhashi Stn',
    cuisine: 'Chicken paitan and tsukemen · chicken paitan shoyu ramen, rich but refreshing; chicken paitan shio · light shio ramen with a clean broth · special shoyu ramen · shoyu tsukemen: sharp and salty, dilute with soup at the end · seasonal limited chilled bowls, e.g. autumn sanma and mushroom chilled ramen ¥1,580 (Rausu kombu, sanma-bushi and dried shiitake broth; fried enoki, maitake tempura, simmered shimeji and shiitake, chicken chashu, white leek, mitsuba, yuzu) · seasoned egg +¥150 · raw egg, nori toppings · chicken appetizers with salt sauce, bottled beer · free kimchi · 7 counter seats and a table for four',
    website: null, gmaps: gm('らぁめん しゅき'), menu_url: null,
    notes: "[Ramen · chicken paitan and seasonal chilled bowls by Tsuruhashi] An eleven-seat shop two minutes from Tsuruhashi, open since 2020 until 00:30. The base is a chicken paitan, rich but refreshing, in shoyu or shio, plus a clean, light shio. The shoyu tsukemen is sharp and salty, and one diner ranks it among Japan's top three. The seasonal limited bowls show the most care, even chilled ones in October: an autumn sanma and mushroom chilled ramen (¥1,580) on a Rausu kombu, sanma-bushi and shiitake broth with mushrooms cooked four ways. Kimchi is free and good, and chicken plates with beer make it an evening stop too. Short lines at lunch. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 June 2020 (Tabelog)', background: 'Chicken paitan ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Chicken paitan ramen; shoyu tsukemen; seasonal chilled ramen.',
      anecdotes: [
        { text: '"The broth is made with Rausu kombu, sanma katsuobushi (dried bonito flakes), and dried shiitake mushrooms, layering the flavors of both the sea and the mountains… deep-fried enoki, tempura maitake, and simmered shimeji and shiitake." — October 2026, chilled sanma and mushroom ramen ¥1,580.', source: R + 'B537500814/' },
        { text: '"Personally, I consider this place to be one of the top three tsukemen spots in Japan… The tsukemen was as sharp and delicious as I remembered." — October 2026.', source: R + 'B530137014/' },
      ],
      japanese_sources_summary: '食べログ: らぁめん しゅき、大阪市東成区東小橋3-14-10、鶴橋駅から徒歩2分、月〜金 11:00〜15:00・18:00〜翌0:30、土日 11:00〜翌0:30、カード・電子マネー・QR (Alipay、WeChat Pay を含む) 可、11席 (カウンター7、4人掛けテーブル1)、2020年6月10日開店。口コミ(2025年8月〜2026年10月): 鶏白湯の醤油と塩、濃厚だがさっぱり、あっさりの塩ラーメンは澄んだ味、特製醤油ラーメン、醤油つけ麺は鋭く塩気が強い、日本で三本の指に入るつけ麺という声、季節限定の冷やし (秋のさんまときのこの冷やしラーメン1,580円: Rausu kombu、Sanma-bushi、干し椎茸のだし、揚げたえのき、舞茸の天ぷら、煮たしめじと椎茸、鶏チャーシュー、白髪ねぎ、三つ葉、柚子)、味玉150円、生卵、海苔、塩だれの鶏の前菜と瓶ビール、無料のキムチ、昼は短い行列。',
      confidence: 'medium', sources: [TB, R + 'B511380238/', R + 'B530137014/', R + 'B537500814/', R + 'B537656766/', R + 'B537858967/', R + 'B538060568/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Noodles not described in detail (2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen', 'tsukemen'],
      signature_bowl: 'Chicken paitan shoyu ramen; seasonal limited chilled ramen (2026).',
      chashu: 'Chicken chashu (October 2026).',
      notable_toppings: ['seasoned egg', 'raw egg', 'free kimchi', 'yuzu (limited)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Tsuruhashi\'s chicken paitan with a sharp shoyu tsukemen and careful seasonal chilled bowls.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537656766/', '"The ramen itself had a rich chicken flavor in the broth" — placed high.'],
        oiliness: [R + 'B538060568/', '"The chicken broth was rich yet refreshing" — mid-scale.'],
        clarity: [R + 'B537858967/', 'Chicken paitan; the light shio is "very clean" (B538060568) — placed low.'],
        tare_strength: [R + 'B530137014/', '"It had a strong salty flavor" (tsukemen, June 2026) — placed high.'],
        noodle_firmness: [R + 'B537656766/', '"The noodles paired perfectly"; firmness not described — mid-scale.'],
        aroma_punch: [R + 'B537500814/', 'Layered kombu, sanma and shiitake in the limited bowl — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537656766/', R + 'B530137014/', R + 'B538060568/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; cards and QR accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東成区東小橋3-14-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東成区東小橋三丁目14番10号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537500814/', R + 'B537858967/', R + 'B538060568/'],
    price_note: 'Prices from October 2026 reviews; limited bowls change by season.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'paitan_shoyu'),
      it('', '', 'Chicken paitan shio ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'paitan_shio'),
      it('', '', 'Shio ramen (light)', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Shoyu tsukemen', '', 'Tsukemen', 'no', 'no', 'June–October 2026.', 'tsukemen'),
      it('', '', 'Chilled sanma and mushroom ramen (autumn, limited)', '¥1,580', 'Limited', 'no', 'no', 'October 2026.', 'sanma'),
      it('', '', 'Seasoned egg', '+¥150', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '鶏白湯とつけ麺・鶏白湯の醤油ラーメン、濃厚だがさっぱり、鶏白湯の塩・澄んだあっさりの塩ラーメン・特製醤油ラーメン・醤油つけ麺: 鋭く塩気が強く、最後はスープで割る・季節限定の冷やし、たとえば秋のさんまときのこの冷やしラーメン1,580円 (Rausu kombu、Sanma-bushi、干し椎茸のだし、揚げたえのき、舞茸の天ぷら、煮たしめじと椎茸、鶏チャーシュー、白髪ねぎ、三つ葉、柚子)・味玉+150円・生卵、海苔のトッピング・塩だれの鶏の前菜、瓶ビール・無料のキムチ・カウンター7席と4人掛けテーブル1卓',
    neighborhood: '東成区東小橋3-14-10。鶴橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と塩のたれ、限定の一杯のきのこの天ぷら。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、鶏チャーシュー、限定の一杯のSanma-bushi、卵。',
    notes: '[ラーメン・鶴橋近く、鶏白湯と季節の冷やし] 鶴橋から2分、11席の店で、2020年開店、深夜0時半まで。軸は濃厚だがさっぱりした鶏白湯の醤油か塩、それに澄んだあっさりの塩。醤油つけ麺は鋭く塩気が強く、日本の三本の指に入るという声も。いちばん手がかかっているのは季節の限定で、10月でも冷やしがある: 秋のさんまときのこの冷やしラーメン(1,580円)は Rausu kombu、Sanma-bushi、椎茸のだしに、4通りに調理したきのこ。無料のキムチもおいしく、鶏の前菜とビールで夜にも。昼は短い行列。カード、QR可。',
  });
}

// ================================================================ 世界一暇なラーメン屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27077402/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.unchi-co.com/';
  put({
    id: 'osaka_sekaiichi_himana_ramen_ya_nakanoshima', name: '世界一暇なラーメン屋 (Sekaiichi Himana Ramen Ya)', category: 'OMNI',
    lat: 34.692987, lng: 135.493661, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles; shoyu soup; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shellfish broth; pork chashu; bonito broth; egg.',
    hours_raw: 'Daily 11:00–22:00, continuous; closed 31 December–3 January (Tabelog). Order on your phone at the table; the menu is shown in the waiting area (October 2026). Cash only (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nakanoshima 3-3-23, Nakanoshima Daibiru 2F (Kita-ku) — 3 min from Watanabebashi Stn',
    cuisine: 'Shellfish shoyu ramen · Witch\'s Red ¥957: sweet soy soup with shellfish umami, medium-thick chewy whole-wheat noodles, thin-sliced chashu that clings to the noodles · light bonito-broth ramen · seasoned egg ¥105 · extra chashu · gyoza, 5 for ¥200 · drinks with chashu and gyoza · 9 counter seats and tables, 42 in all',
    website: OWN, gmaps: gm('世界一暇なラーメン屋'), menu_url: null,
    notes: "[Ramen · sweet shellfish-shoyu ramen in a Nakanoshima office building] Despite the name (\"the world's least busy ramen shop\"), this stylish, spacious ramen bar on the second floor of a Nakanoshima office tower has a lunch line that moves fast, with Mr. Children music videos playing on the walls. It's linked to Jinrui Mina Menrui. The signature Witch's Red (¥957) is a sweet, shellfish-rich shoyu on chewy, medium-thick whole-wheat noodles with thin chashu that breaks up into each bite; there's also a light bonito-broth bowl. Gyoza are five for ¥200, though one diner found them greasy and the ramen heavy by the end. Order on your phone at the table. Open all day; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 February 2014 (Tabelog); a sister shop of Jinrui Mina Menrui (October 2026 reviews).', background: 'Ramen shop in an office building (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Sweet shellfish-shoyu ramen.',
      anecdotes: [
        { text: '"The broth is a rich soy sauce soup that highlights the umami of shellfish while also having a hint of sweetness… The chashu is thinly sliced, so as you slurp the noodles, it breaks apart and clings to them…" — October 2026, Witch\'s Red ¥957.', source: R + 'B537497656/' },
        { text: '"The noodles are medium-thick and made with chewy whole wheat flour." — October 2026.', source: R + 'B538199071/' },
      ],
      japanese_sources_summary: '食べログ: 世界一暇なラーメン屋、大阪市北区中之島3-3-23 中之島ダイビル 2F、京阪渡辺橋駅から徒歩3分、肥後橋駅から徒歩8分、毎日11:00〜22:00、年末年始休み、カード・電子マネー・QR不可、42席、2014年2月11日開店、公式サイトあり。口コミ(2026年10月): Jinrui Mina Menrui の姉妹店、オフィスビル2階のおしゃれで広い店内、Mr. Children の曲とミュージックビデオ、昼は行列だが回転が速い、各テーブルでスマホ注文 (メニューは待合のみ)、Witch\'s Red 957円 (甘めの醤油に貝の旨み、もちもちの中太の全粒粉麺、薄切りのチャーシュー)、味玉105円、かつお出汁のあっさりラーメン、餃子5個200円、最後は重く感じたという声、親切な店員、通し営業。',
      confidence: 'medium', sources: [TB, OWN, R + 'B433564486/', R + 'B537497656/', R + 'B537706411/', R + 'B537755991/', R + 'B538192482/', R + 'B538199071/'] },
    ramen: {
      broth_base: ['shellfish'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick, chewy whole-wheat noodles (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Witch\'s Red, ¥957 (October 2026).',
      chashu: 'Thin-sliced chashu that breaks into the noodles; large extra slices (October 2026).',
      notable_toppings: ['seasoned egg', 'menma', 'extra chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shellfish broth.' },
      pantheon: 'Nakanoshima\'s sweet shellfish shoyu on whole-wheat noodles, to a Mr. Children soundtrack.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537497656/', '"A rich soy sauce soup that highlights the umami of shellfish" — mid-scale.'],
        oiliness: [R + 'B537755991/', '"By the end, they felt quite heavy" (one diner) — mid-scale.'],
        clarity: [R + 'B537497656/', 'Shoyu soup with shellfish; not described as cloudy — mid-scale.'],
        tare_strength: [R + 'B538192482/', '"The rich flavor of soy sauce spread across my palate" — placed high.'],
        noodle_firmness: [R + 'B537497656/', '"The chewy medium-thick noodles… a satisfying texture" — placed high.'],
        aroma_punch: [R + 'B433564486/', '"The sweet soy sauce and shellfish-based broth" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537497656/', R + 'B538199071/', R + 'B433564486/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone ordering at the table; friendly staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区中之島3-3-23 中之島ダイビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM 世界一暇なラーメン屋 node/13304576062 1m; GSI 大阪府大阪市北区中之島三丁目3番23号 (go) 63m (large building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537497656/', R + 'B537755991/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Witch\'s Red (shellfish shoyu ramen)', '¥957', 'Ramen', 'no', 'no', 'October 2026.', 'witchs_red'),
      it('', '', 'Light bonito-broth ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'katsuo'),
      it('', '', 'Seasoned egg', '¥105', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Gyoza, 5 pieces', '¥200', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
    ] }, {
    cuisine: '貝の醤油ラーメン・Witch\'s Red 957円: 甘めの醤油に貝の旨み、もちもちの中太の全粒粉麺、麺にからむ薄切りのチャーシュー・かつお出汁のあっさりラーメン・味玉105円・チャーシュー増し・餃子5個200円・チャーシューや餃子で一杯も・カウンター9席とテーブル、計42席',
    neighborhood: '北区中之島3-3-23 中之島ダイビル 2F。渡辺橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。全粒粉の小麦の麺、醤油のスープ、餃子。',
    vegan_detail: 'ヴィーガンではありません。貝のスープ、豚のチャーシュー、かつお出汁、卵。',
    notes: '[ラーメン・中之島のオフィスビル、甘めの貝醤油ラーメン] 名前とは裏腹に、中之島のオフィスビル2階にあるおしゃれで広いラーメンバーは昼に行列ができ、回転は速く、壁には Mr. Children のミュージックビデオが流れる。Jinrui Mina Menrui の系列。看板の Witch\'s Red (957円) は甘めで貝の旨みたっぷりの醤油に、もちもちの中太の全粒粉麺、ひと口ごとにほどける薄いチャーシュー。かつお出汁のあっさりの一杯も。餃子は5個200円だが、脂っこく、ラーメンも最後は重く感じたという声も。注文は席でスマホから。通し営業、現金のみ。',
  });
}

// ================================================================ ラーメン・まぜそば SiO Style
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27122418/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_sio_style_abeno', name: 'ラーメン・まぜそば SiO Style (Ramen Maze-soba SiO Style)', category: 'OMNI',
    lat: 34.645791, lng: 135.511823, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; shio tare; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken and asari clam broth; rare and grilled chashu; egg.',
    hours_raw: 'Mon–Tue, Thu–Sun and public holidays 11:00–15:00 (last order 14:30) and 17:30–21:00 (last order 20:30); closed Wed; no reservations (Tabelog). Buy a ticket and hand it to staff (October 2026). QR (PayPay, Rakuten Pay, au PAY) accepted; no cards or e-money (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Abenosuji 1-6-1, Via Abeno Walk 1F (Abeno-ku) — 3 min from Tennoji Stn exit 12',
    cuisine: 'Shio ramen and mazesoba · Asari SiO ramen: creamy pork, chicken and asari clam broth, salt kept gentle, thin straight noodles, kaiware and chopped onion · special Asari SiO: pink rare chashu and thick grilled chashu, seasoned egg · SiO lemon mazesoba · summer chilled kama-tama noodles · kara-age set with rice · table salts from around the world, black pepper · Instagram follow: an extra slice of rare chashu · 19 seats',
    website: null, gmaps: gm('ラーメン・まぜそば SiO Style'), menu_url: null,
    notes: "[Ramen · creamy clam shio ramen in Via Abeno Walk] A busy shio ramen shop in the Via Abeno Walk mall near Tennoji, open since 2021. The Asari SiO ramen blends pork bone, chicken and asari clam into a creamy, milky soup whose salt stays gentle, on thin, straight, supple noodles with crunchy chopped onion and kaiware. The special version adds a pink rare chashu draped over the rim and a thick slice grilled just before serving. Play with the salts from around the world on the counter. One diner found it oily and the clam faint, another light and clean. Many order the SiO lemon mazesoba. Short waits at lunch. Ticket machine; QR payments only. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 April 2021 (Tabelog)', background: 'Shio ramen and mazesoba shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Asari clam shio ramen.',
      anecdotes: [
        { text: '"The broth was a creamy, milky blend of chicken, pork, and asari clam, with a rich flavor that was smooth and deep without any sharp saltiness from the clam. The noodles were thin, straight, and supple…" — September 2026, special Asari SiO ramen.', source: R + 'B536009878/' },
        { text: '"Although it\'s a shio ramen, the saltiness is not overpowering. As I enjoyed it with various flavored salts, it seemed to reach a perfect balance…" — October 2026.', source: R + 'B535047979/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン・まぜそば SiO Style、大阪市阿倍野区阿倍野筋1-6-1 ヴィアあべのウォーク 1F、JR天王寺駅南口から徒歩5分、地下鉄天王寺駅12番出口から徒歩3分、月・火・木〜日・祝 11:00〜15:00 (L.O. 14:30)・17:30〜21:00 (L.O. 20:30)、水休み、予約不可、カード・電子マネー不可、QR (PayPay、楽天ペイ、au PAY) 可、19席、2021年4月16日開店。口コミ(2026年9〜10月): Asari SiO ramen (豚骨、鶏、あさりのクリーミーなスープ、塩気は穏やか、細いストレート麺、かいわれ、刻み玉ねぎ)、特製はピンクのレアチャーシューと焼いた厚切りチャーシュー、味玉、SiO レモンまぜそばを頼む客が多い、夏の冷やしの Kama-tama、唐揚げセット、卓上の世界の塩と黒胡椒、Instagram フォローでレアチャーシュー1枚、油が多くあさりを感じにくかったという声、あっさりで優しいという声、食券を渡す、昼は10分ほど待つ、一人でも入りやすい。',
      confidence: 'medium', sources: [TB, R + 'B535047979/', R + 'B536009878/', R + 'B536779163/', R + 'B537346892/', R + 'B537431037/', R + 'B537679503/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken', 'shellfish'], broth_texture: 'paitan', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, straight, supple noodles (2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Asari SiO ramen; special version with two chashu (2026).',
      chashu: 'Pink rare chashu and thick chashu grilled just before serving (September 2026).',
      notable_toppings: ['kaiware', 'chopped onion', 'seasoned egg', 'world salts'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork, chicken and clam broth.' },
      pantheon: 'Abeno\'s creamy asari-clam shio, with salts from around the world on the counter.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 2, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536779163/', '"The broth was rich and creamy, based on pork bones" — placed high.'],
        oiliness: [R + 'B537346892/', '"A rich flavor with a lot of oil on the surface" (one diner) — mid-scale.'],
        clarity: [R + 'B536009878/', '"A creamy, milky blend of chicken, pork, and asari clam" — placed low.'],
        tare_strength: [R + 'B535047979/', '"The saltiness is not overpowering" — placed low.'],
        noodle_firmness: [R + 'B536009878/', '"Thin, straight, and supple… leaving a pleasant bite" — mid-scale.'],
        aroma_punch: [R + 'B536779163/', '"A subtle hint of clam flavor" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536009878/', R + 'B535047979/', R + 'B536779163/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; attentive staff, easy solo (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市阿倍野区阿倍野筋1-6-1 ヴィアあべのウォーク 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市阿倍野区阿倍野筋一丁目6番1号 (go) 92m (large mall); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535047979/', R + 'B536009878/', R + 'B537346892/'],
    price_note: 'No prices in the reviews; JPY 1,000–1,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Asari SiO ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'asari_sio'),
      it('', '', 'Special Asari SiO ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'tokusei'),
      it('', '', 'SiO lemon mazesoba', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'lemon_maze'),
      it('', '', 'Chilled kama-tama noodles (summer)', '', 'Limited', 'no', 'no', 'October 2026.', 'kamatama'),
      it('', '', 'Kara-age set with rice', '', 'Sets', 'no', 'no', 'September 2026.', 'karaage_set'),
    ] }, {
    cuisine: '塩ラーメンとまぜそば・Asari SiO ramen: 豚骨、鶏、あさりのクリーミーなスープ、塩気は穏やか、細いストレート麺、かいわれ、刻み玉ねぎ・特製: ピンクのレアチャーシューと焼いた厚切りチャーシュー、味玉・SiO レモンまぜそば・夏の冷やしの Kama-tama・唐揚げセットとご飯・卓上に世界の塩と黒胡椒・Instagram フォローでレアチャーシュー1枚・19席',
    neighborhood: '阿倍野区阿倍野筋1-6-1 ヴィアあべのウォーク 1F。天王寺駅12番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、塩のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚骨、鶏、あさりのスープ、レアと焼きのチャーシュー、卵。',
    notes: '[ラーメン・ヴィアあべのウォーク、クリーミーなあさりの塩ラーメン] 天王寺近くのヴィアあべのウォークにある人気の塩ラーメンの店で、2021年開店。Asari SiO ramen は豚骨、鶏、あさりを合わせたクリーミーで白いスープで、塩気は穏やか、しなやかな細いストレート麺にシャキッとした刻み玉ねぎとかいわれ。特製は器の縁にかけたピンクのレアチャーシューと、出す直前に焼く厚切りがのる。卓上の世界の塩で味を変えて。油が多くあさりが弱いという声も、あっさりで優しいという声も。SiO レモンまぜそばを頼む人も多い。昼は少し待つ。食券制、支払いはQRのみ。水曜休み。',
  });
}

// ================================================================ 麺喰い メン太ジスタ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27060541/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menkui_men_tajisuta_tamatsukuri', name: '麺喰い メン太ジスタ (Men Kui Men Tajisuta)', category: 'OMNI',
    lat: 34.673691, lng: 135.530928, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; tenkasu; kara-age; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and seafood; meat miso; chashu; wontons; egg; fish powder.',
    hours_raw: 'Daily 11:00–23:00 (Tabelog). Weekday specials until 19:00: shoyu ramen ¥800 and highball ¥200 (August 2026). Kara-age to take away (2025–2026). Cash only (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Tamatsukuri-Honmachi 3-6 (Tennoji-ku) — 2 min from Tamatsukuri Stn exit 6',
    cuisine: 'Ramen and kara-age · Daniel Punch ¥1,000: rich shoyu with sansho, flat, slightly curly medium-thick noodles, raw egg on the side, kaiware, chopped onion, meat miso, tenkasu; rice to finish · rich chuka soba: thick, creamy chicken paitan with seafood, fish powder on the nori, thin firm noodles, rare chashu, half a seasoned egg · Men-Ta soba ¥950: sweet Osaka-style shoyu, medium-thin noodles, large chashu, wontons, menma, half egg · shoyu ramen with wontons; negi soba (green onion only), shoyu or shio ¥680 · Jiro-style bowl with grated garlic · seasonal chilled bowls · house kara-age ¥600, large and crispy · gyoza set with a miso dipping sauce · 7 counter seats and 2 tables for four',
    website: null, gmaps: gm('麺喰い メン太ジスタ'), menu_url: null,
    notes: "[Ramen · Daniel Punch sansho shoyu soba and big kara-age by Tamatsukuri] A long-running fifteen-seat ramen shop two minutes from Tamatsukuri, open since 2011 until 23:00, with a menu that runs from gentle to punchy. The long-standing Daniel Punch (¥1,000) is a rich shoyu laced with sansho over flat curly noodles, meat miso, tenkasu and onion; stir in the raw egg, then finish with rice. The rich chuka soba is a thick chicken paitan with seafood and fish powder; the Men-Ta soba (¥950) a sweet Osaka shoyu with wontons. The kara-age is a specialty in its own right, often taken away. Summer brings chilled bowls. Weekday specials before 19:00 include a ¥800 shoyu ramen. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 October 2011 (Tabelog)', background: 'Ramen shop (Tabelog; 2019–2026 reviews).', philosophy: null, specialty: 'Daniel Punch; rich chuka soba; kara-age.',
      anecdotes: [
        { text: '"The dish features a rich soy sauce with a hint of sansho pepper, served with slightly curled, flat medium-thick noodles. I mixed in a raw egg from a separate plate… creating a spicy and numbing deliciousness." — October 2026, Daniel Punch ¥1,000.', source: R + 'B427549381/' },
        { text: '"A sweet soy sauce broth typical of Osaka, paired with medium-thin noodles. Large slices of chashu, wontons, tender bamboo shoots, half a seasoned egg, and chopped green onions." — October 2026, Men-Ta soba ¥950.', source: R + 'B536780837/' },
      ],
      japanese_sources_summary: '食べログ: 麺喰い メン太ジスタ、大阪市天王寺区玉造本町3-6、JR玉造駅西口から徒歩4分、地下鉄玉造駅6番出口から徒歩2分、毎日11:00〜23:00、カード・電子マネー・QR不可、15席 (カウンター7、4人掛けテーブル2)、2011年10月11日開店。口コミ(2019年〜2026年10月): Daniel Punch 1,000円 (山椒のきいた濃い醤油、ややちぢれた平打ちの中太麺、別皿の生卵、かいわれ、刻み玉ねぎ、肉味噌、天かす、締めのご飯)、濃厚中華そば (とろみのある鶏白湯に魚介、海苔の上の魚粉、細く硬めの麺、レアチャーシュー、味玉半分)、Men-Ta soba 950円 (大阪らしい甘めの醤油、中細麺、大きなチャーシュー、ワンタン、メンマ、味玉半分)、ワンタン入り醤油ラーメン、ねぎだけの Negi Soba (醤油か塩) 680円、すりおろしにんにくの二郎系、夏の冷やし、名物の唐揚げ600円 (持ち帰りも)、味噌だれの餃子セット、平日19時までハイボール200円と醤油ラーメン800円、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B412344703/', R + 'B427549381/', R + 'B518056221/', R + 'B535117026/', R + 'B536780837/', R + 'B537876533/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Flat, slightly curly medium-thick noodles in the Daniel Punch; thin firm noodles in the rich chuka soba (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Daniel Punch, ¥1,000 (October 2026).',
      chashu: 'Large chashu in the Men-Ta soba; rare chashu in the rich chuka soba (2022–2026).',
      notable_toppings: ['sansho', 'raw egg', 'meat miso', 'tenkasu', 'wontons', 'fish powder'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth.' },
      pantheon: 'Tamatsukuri\'s sansho-numbing Daniel Punch, with a kara-age worth the trip on its own.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B412344703/', '"The rich soup is delicious" (rich chuka soba) — placed high.'],
        oiliness: [R + 'B535117026/', '"The flavor wasn\'t too strong" (Jiro-style) — mid-scale.'],
        clarity: [R + 'B412344703/', '"A thick chicken broth" — placed low.'],
        tare_strength: [R + 'B427549381/', '"A rich soy sauce" in the Daniel Punch — placed high.'],
        noodle_firmness: [R + 'B412344703/', '"The noodles are firm and thin" — placed high.'],
        aroma_punch: [R + 'B427549381/', '"A wonderfully spicy and numbing bowl" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B427549381/', R + 'B412344703/', R + 'B536780837/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick service; large menu (October 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区玉造本町3-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区玉造本町3番6号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B427549381/', R + 'B518056221/', R + 'B536780837/'],
    price_note: 'Prices from November 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daniel Punch', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'daniel'),
      it('', '', 'Rich chuka soba', '', 'Ramen', 'no', 'no', 'September 2026.', 'noko'),
      it('', '', 'Men-Ta soba', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'menta'),
      it('', '', 'Shoyu ramen (weekdays before 19:00)', '¥800', 'Ramen', 'no', 'no', 'August 2026.', 'shoyu'),
      it('', '', 'Negi soba, shoyu or shio', '¥680', 'Ramen', 'no', 'no', 'November 2025.', 'negi'),
      it('', '', 'Kara-age', '¥600', 'Sides', 'no', 'no', 'November 2025.', 'karaage'),
      it('', '', 'Gyoza set', '', 'Sets', 'no', 'no', 'October 2026.', 'gyoza'),
    ] }, {
    cuisine: 'ラーメンと唐揚げ・Daniel Punch 1,000円: 山椒のきいた濃い醤油、ややちぢれた平打ちの中太麺、別皿の生卵、かいわれ、刻み玉ねぎ、肉味噌、天かす、締めのご飯・濃厚中華そば: とろみのある鶏白湯に魚介、海苔の上の魚粉、細く硬めの麺、レアチャーシュー、味玉半分・Men-Ta soba 950円: 大阪らしい甘めの醤油、中細麺、大きなチャーシュー、ワンタン、メンマ、味玉半分・ワンタン入りの醤油ラーメン、ねぎだけの Negi Soba (醤油か塩) 680円・すりおろしにんにくの二郎系・季節の冷やし・名物の唐揚げ600円、大きくカリッと・味噌だれの餃子セット・カウンター7席と4人掛けテーブル2卓',
    neighborhood: '天王寺区玉造本町3-6。玉造駅6番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、天かす、唐揚げ、餃子。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯と魚介、肉味噌、チャーシュー、ワンタン、卵、魚粉。',
    notes: '[ラーメン・玉造近く、山椒の Daniel Punch と大きな唐揚げ] 玉造から2分、15席の長く続くラーメン店で、2011年開店、23時まで、優しい一杯からパンチの効いた一杯まで揃う。昔からの Daniel Punch (1,000円) は山椒のきいた濃い醤油に平打ちのちぢれ麺、肉味噌、天かす、玉ねぎで、生卵を混ぜ、最後はご飯で締める。濃厚中華そばはとろみのある鶏白湯に魚介と魚粉、Men-Ta soba (950円) は大阪らしい甘めの醤油にワンタン。唐揚げはそれだけで名物で、持ち帰る人も。夏は冷やしも。平日19時までは醤油ラーメン800円などのサービスも。現金のみ。',
  });
}

save();
