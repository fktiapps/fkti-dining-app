// Osaka sweep (2-mile circle around Dotonbori), batch 72 — ramen phase (all OMNI).
//   + らーめん製作所 奏 (7-seat chicken-and-seafood shoyu near JR Namba)
//   + らーめん 鱗 難波店 (chicken-and-bonito shio specialist south of Nankai Namba)
//   + 麺通処 日加月 (niboshi clear-soup shop in Kozu, opened 2025; owner + one helper → mom_and_pop)
//   + ラーメン 男塾!! 日本橋店 (Jiro-style one-person shop on the Otaroad side, Fukuchan group)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 72);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ らーめん製作所 奏
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27058130/'; const R = TB + 'dtlrvwlst/';
  const F = day(['11:00', '15:00'], ['17:15', '21:00']), L = day(['11:00', '15:00']), SA = day(['10:30', '15:00']);
  put({
    id: 'osaka_ramen_seisakujo_kanade', name: 'らーめん製作所 奏 (Ramen Seisakujo Kanade)', category: 'OMNI',
    lat: 34.665734, lng: 135.492558, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and seafood broth, pork and chicken chashu.',
    hours_raw: 'Mon and Wed–Fri 11:00–15:00 (L.O. 14:45) and 17:15–21:00 (L.O. 20:30); Tue 11:00–15:00; Sat 10:30–15:00; closed Sunday; check Google or social media for changes (Tabelog). Ticket machine (October 2026). d Barai accepted (Tabelog).',
    hours: { 0: F, 1: L, 2: F, 3: F, 4: F, 5: SA }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inari 1-7-30, Naniwa — 3 min from JR Namba Stn south exit',
    cuisine: 'Chicken-and-seafood ramen · Kanade shoyu ramen ¥1,050 · Chicken Kanade ramen ¥1,000, a triple soup of chicken paitan, seafood and shoyu · two chashu, moist pork and chicken · thin to medium-thin, slightly low-hydration noodles · mazesoba and limited bowls · seared-chashu rice bowl ¥450 · garlic on the counter · 7 counter seats',
    website: null, gmaps: gm('らーめん製作所 奏 稲荷'), menu_url: null,
    notes: "[Ramen · a seven-seat chicken-and-seafood shoyu counter near JR Namba] A small seven-seat counter three minutes from JR Namba's south exit, open since 2011, with regulars who come for the limited bowls. Two ramen anchor the menu. The Kanade shoyu (¥1,050, September 2026) balances sweet chicken umami with a tightening seafood finish over thin noodles, and two chashu, moist pork and chicken. The most popular Chicken Kanade ramen (¥1,000) layers chicken paitan, seafood and shoyu into a thick but drinkable broth that one diner found a touch sweet. Add garlic to punch it up, or a seared-chashu rice bowl (¥450). There's mazesoba too. One diner found the seafood fishy. Waits are short; buy a ticket at the machine. Closed Sundays, and Tuesday and Saturday are lunch only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 June 2011 (Tabelog)', background: 'Chicken-and-seafood ramen counter near JR Namba (2026 reviews).', philosophy: null, specialty: 'Kanade shoyu; Chicken Kanade ramen.',
      anecdotes: [
        { text: '"The broth hits you with a strong umami and sweetness from the chicken, followed by a tightening flavor from the seafood… The noodles were thin and paired perfectly with the soup." — September 2026, chicken-and-seafood shoyu.', source: R + 'B535396133/' },
        { text: '"The broth is a rich triple soup made from chicken paitan, seafood, and soy sauce, which was thick yet not overwhelming." — October 2026, Chicken Kanade ramen.', source: R + 'B536731426/' },
      ],
      japanese_sources_summary: '食べログ: らーめん製作所 奏、大阪市浪速区稲荷1-7-30、JR難波駅南口から徒歩3分、月・水・木・金11:00〜15:00(L.O.14:45)・17:15〜21:00(L.O.20:30)、火11:00〜15:00、土10:30〜15:00、日曜休み、最新情報はGoogleやSNSで、2011年6月10日開店、d払い可。口コミ(2026年8〜10月): 醤油ラーメンとご飯、魚介が生臭く感じたという声、硬めの麺がおいしい、豚と鶏の2種のチャーシュー、醤油チャーシュー麺、魚介醤油や魚介鶏白湯、まぜそばも、鶏と魚介の醤油ラーメン、鶏の旨みと甘み、魚介で引き締まる、細麺、奏醤油ラーメン1,050円、炙りチャーシュー丼450円、にんにくでパンチ、一番人気の鶏奏ラーメン1,000円、鶏白湯・魚介・醤油のトリプルスープ、濃厚でもくどくない、少し甘め、加水率低めの中細麺、脂の多い大きなチャーシュー、常連は限定を、カウンター席のみ、券売機、見た目より軽い。',
      confidence: 'medium', sources: [TB, R + 'B535396133/', R + 'B536731426/', R + 'B535705140/', R + 'B537464213/', R + 'B534727917/', R + 'B534551123/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: 'low', handmade: false, notes: 'Thin to medium-thin, slightly low-hydration noodles; firm (August–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Chicken Kanade ramen, ¥1,000; Kanade shoyu, ¥1,050 (September–October 2026).',
      chashu: 'Moist pork and chicken; a large fatty pork belly on the Chicken Kanade (August–October 2026).',
      notable_toppings: ['two chashu', 'garlic (counter)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth.' },
      pantheon: 'JR Namba\'s seven-seat counter: a chicken-and-seafood shoyu, sweet up front and tightened by fish.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536731426/', '"Thick yet not overwhelming" — mid-scale.'],
        oiliness: [R + 'B537464213/', '"Lighter and easier to drink than it looked" — placed low.'],
        clarity: [R + 'B536731426/', 'Chicken paitan triple soup — placed low.'],
        tare_strength: [R + 'B535705140/', '"The balance of the seafood soy sauce is excellent" — mid-scale.'],
        noodle_firmness: [R + 'B534551123/', '"The noodles were firm and delicious!"'],
        aroma_punch: [R + 'B535396133/', '"A tightening flavor from the seafood" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535396133/', R + 'B536731426/', R + 'B537464213/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; seven-seat counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区稲荷1-7-30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区稲荷一丁目7番30号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535705140/', R + 'B537464213/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kanade shoyu ramen', '¥1,050', 'Ramen', 'no', 'no', 'September 2026.', 'kanade_shoyu'),
      it('', '', 'Chicken Kanade ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'tori_kanade'),
      it('', '', 'Shoyu chashu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'chashu_men'),
      it('', '', 'Seared-chashu rice bowl', '¥450', 'Rice', 'no', 'no', 'September 2026.', 'aburi_don'),
    ] }, {
    cuisine: '鶏と魚介のラーメン・奏醤油ラーメン1,050円・鶏白湯、魚介、醤油のトリプルスープの鶏奏ラーメン1,000円・しっとりした豚と鶏の2種のチャーシュー・加水率低めの細〜中細麺・まぜそばや限定・炙りチャーシュー丼450円・卓上ににんにく・カウンター7席',
    neighborhood: '浪速区稲荷1-7-30。JR難波駅南口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚介のスープ、豚と鶏のチャーシュー。',
    notes: '[ラーメン・JR難波近くの7席の鶏と魚介の醤油] JR難波駅南口から3分のカウンター7席の小さな店で、2011年開店、限定を目当てに通う常連も。柱は2つ。奏醤油(1,050円、2026年9月)は鶏の甘い旨みを魚介が引き締める一杯で、細麺にしっとりした豚と鶏の2種のチャーシュー。一番人気の鶏奏ラーメン(1,000円)は鶏白湯、魚介、醤油を重ねた、濃厚でも飲みやすいスープで、少し甘めに感じた人も。にんにくでパンチを足すか、炙りチャーシュー丼(450円)を。まぜそばも。魚介が生臭く感じたという声も。待ちは短め、食券は券売機で。日曜定休、火・土は昼のみ。',
  });
}

// ================================================================ らーめん 鱗 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27110154/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.ramen-uroko.com/';
  put({
    id: 'osaka_ramen_uroko_namba', name: 'らーめん 鱗 難波店 (Ramen Uroko Namba)', category: 'OMNI',
    lat: 34.66174, lng: 135.503637, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and bonito broth, chashu.',
    hours_raw: 'Daily 11:00–14:30 and 17:00–22:00 (L.O. 21:30); hours may change (Tabelog). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '14:30'], ['17:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-7-24, Daiya Mansion 1F — 2 min from Nankai Namba Stn',
    cuisine: 'Shio ramen specialist · clear chicken-and-seafood shio lifted with chicken katsuobushi and a hint of black pepper · Teigaku noodles, flat and wavy · ajitama shio · green onion and kaiware · fried rice and half fried rice · limited chilled ramen with lemon vinegar · white wood and steel interior, 24 seats',
    website: OWN, gmaps: gm('らーめん 鱗 難波店'), menu_url: null,
    notes: "[Ramen · a shio-ramen specialist south of Nankai Namba] A shio-ramen specialist two minutes from Nankai Namba, open since 2019, in a clean room of white wood and stainless steel. The clear broth of chicken and seafood is accented with chicken katsuobushi: light, but full of umami, and good enough that one diner drank every drop. A hint of black pepper gives it punch. Teigaku noodles, chewy, flat and wavy (one reviewer likened them to Kitakata), soak it up, with chashu, ajitama, green onion and kaiware. The fluffy fried rice, whole or half, is a classic partner. In summer there was a chilled ramen with lemon vinegar to finish. It's rarely crowded late in the afternoon. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 March 2019 (Tabelog)', background: 'Ramen Uroko shio ramen; official site ramen-uroko.com (Tabelog).', philosophy: null, specialty: 'Shio ramen.',
      anecdotes: [
        { text: '"The soup, based on chicken and seafood broth, is beautifully accented by the flavor of chicken katsuobushi. With the first sip, the umami of the broth gently spreads, and although it\'s light, it\'s definitely satisfying." — October 2026.', source: R + 'B537618349/' },
        { text: '"The broth was refreshing yet had a punchy flavor, and the Teigaku noodles had a wonderful chewy texture." — September 2026, shio ramen with half fried rice.', source: R + 'B535378025/' },
      ],
      japanese_sources_summary: '公式 ramen-uroko.com。食べログ: らーめん 鱗 難波店、大阪市浪速区難波中2-7-24 ダイヤマンション1F、南海なんば駅から徒歩2分、毎日11:00〜14:30・17:00〜22:00(L.O.21:30)、カード・電子マネー・QR不可、24席(カウンター8、8人のカウンターテーブル1、4人テーブル2)、禁煙、2019年3月16日開店。口コミ(2022年1月〜2026年10月): 塩ラーメン、喜多方風の平打ちちぢれ麺、鰹節の香り、澄んだスープ、白木とステンレスの店内、味玉塩と限定の冷やし、レモン酢、パラパラの炒飯、塩ラーメンと半炒飯、さっぱりでもパンチ、Teigakuの麺のもちもち感、熱々、裏なんば、塩気は軽めで黒胡椒、鶏と魚介のスープに鶏節、スープを飲み干した、鶏だしの塩、油の粒、ねぎとカイワレ、チャーシューと味玉。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537618349/', R + 'B535378025/', R + 'B444634224/', R + 'B534062140/', R + 'B536465839/', R + 'B537661762/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: 'wavy', hydration: null, handmade: false, notes: 'Teigaku noodles, chewy, flat and wavy (September 2026); "standard thickness" to another diner.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shio ramen; ajitama shio (October 2026).',
      chashu: 'Chashu with ajitama (October 2026).',
      notable_toppings: ['chicken katsuobushi', 'kaiware', 'green onion', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and bonito broth.' },
      pantheon: 'Nankai Namba\'s shio specialist: a clear chicken-and-seafood salt broth lifted by chicken katsuobushi.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537618349/', '"Although it\'s light, it\'s definitely satisfying."'],
        oiliness: [R + 'B537661762/', '"Tiny oil droplets floating on top" — placed low.'],
        clarity: [R + 'B537661762/', '"The clear broth."'],
        tare_strength: [R + 'B536465839/', '"A light saltiness with… black pepper, creating a deliciously punchy taste" — mid-scale.'],
        noodle_firmness: [R + 'B535378025/', '"A wonderful chewy texture."'],
        aroma_punch: [R + 'B444634224/', '"The umami flavor from the katsuobushi fills the air with a delightful aroma" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537618349/', R + 'B535378025/', R + 'B537661762/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-7-24 ダイヤマンション 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目7番24号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537661762/', R + 'B535378025/', R + 'B534062140/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'shio'),
      it('', '', 'Ajitama shio ramen', '', 'Ramen', 'no', 'no', 'August and October 2026.', 'ajitama'),
      it('', '', 'Fried rice (whole or half)', '', 'Rice', 'no', 'no', 'August–October 2026.', 'chahan'),
      it('', '', 'Chilled ramen (limited)', '', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi'),
    ] }, {
    cuisine: '塩ラーメン専門店・鶏節と黒胡椒がほのかに効いた澄んだ鶏と魚介の塩・Teigakuの平打ちちぢれ麺・味玉塩・ねぎとカイワレ・炒飯と半炒飯・レモン酢で味変する限定の冷やし・白木とステンレスの店内、24席',
    neighborhood: '浪速区難波中2-7-24 ダイヤマンション1F。南海なんば駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、炒飯。',
    vegan_detail: 'ヴィーガンではありません。鶏とかつおのスープ、チャーシュー。',
    notes: '[ラーメン・南海なんば南の塩ラーメン専門店] 南海なんば駅から2分の塩ラーメン専門店で、2019年開店、白木とステンレスの清潔な店内。鶏と魚介の澄んだスープに鶏節を効かせ、軽いのに旨みがしっかりで、スープを飲み干したという人も。ほのかな黒胡椒がパンチに。もちもちの平打ちちぢれのTeigakuの麺(喜多方のようという声も)がよく絡み、チャーシュー、味玉、ねぎ、カイワレ。ふわっとパラパラの炒飯は単品でも半分でも定番の相棒。夏はレモン酢で味を変える冷やしラーメンも。夕方は空いていることが多め。現金のみ。',
  });
}

// ================================================================ 麺通処 日加月
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27148361/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30']);
  put({
    id: 'osaka_mentsudokoro_hikadu_kozu', name: '麺通処 日加月 (Mentsudokoro Hikadu)', category: 'OMNI',
    lat: 34.668395, lng: 135.511193, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and shio tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi and chicken broths, chashu, back fat.',
    hours_raw: 'Tue–Sun 11:00–14:30; closed Monday; hours may change (Tabelog). Order verbally; pay after eating (September–October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kozu 2-1-25, Higashi-Dotonbori Futaba Plaza 1F — about 9 min from Nippombashi Stn',
    cuisine: 'Niboshi and chicken ramen, lunch only · six regular bowls: special, shoyu, shio, niboshi clear soup (nibo seiyu), shio niboshi clear soup ¥950, old style · niboshi shoyu ¥950 with a whole niboshi · medium-thin straight noodles · limited back-fat shoyu mazesoba (200 g, or 350 g large) to end of November · summer chilled chuka soba ¥1,000 and chilled niboshi · tamago kake gohan ¥300 · seared-chashu rice bowl ¥350 · rice ¥150 · pepper only on the counter',
    website: null, gmaps: gm('麺通処 日加月 高津'), menu_url: null,
    notes: "[Ramen · a lunch-only niboshi shop in Kozu, opened 2025] A lunch-only ramen counter in Kozu, opened in April 2025 and run by the owner with one helper, already drawing regulars who have been more than twenty times. The heart of it is niboshi: a clear sardine shoyu (¥950) with a whole niboshi on top, or the shio niboshi clear soup (¥950), sardine-forward on the first sip, then clean, with a little ume, though one fan found the niboshi subdued. There's also a special, shoyu, shio and an old-style bowl, all on chewy medium-thin noodles. Limited bowls keep coming: back-fat shoyu mazesoba until the end of November, and in summer chilled chuka soba and chilled niboshi. Pair it with tamago kake gohan (¥300) or a seared-chashu bowl (¥350). Pay after eating, in cash. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 April 2025 (Tabelog)', background: 'Run by the owner with one helper (October 2026 review).', philosophy: 'Careful ingredient choice and heavy research and development (October 2026 review).', specialty: 'Niboshi clear-soup ramen.',
      anecdotes: [
        { text: '"The Shio Nibo Seiyu features medium-thin straight noodles with a nice chew and a broth based on seafood (dried sardines) with a salt flavor… The flavor of the dried sardines is particularly strong on the first bite, followed by a refreshing aftertaste." — October 2026, ¥950 with tamago kake gohan ¥300.', source: R + 'B520269944/' },
        { text: '"The Chashu Rice Bowl is hearty with generous chunks of meat… soaking it in the soup and adding a soft-boiled egg made for a delicious bowl." — October 2026, shio niboshi clear soup ¥950 with seared-chashu bowl ¥350.', source: R + 'B520464794/' },
      ],
      japanese_sources_summary: '食べログ: 麺通処 日加月、大阪市中央区高津2-1-25 東道頓堀双葉プラザ1F、日本橋駅から489m、火〜日11:00〜14:30、月曜休み、カード・電子マネー・QR不可、禁煙、2025年4月29日開店。口コミ(2026年8〜10月): にぼし950円(煮干しの清湯に醤油、チャーシュー2枚、メンマ、煮干し1尾、玉ねぎ、ねぎ)、鶏の香り、塩にぼ清湯950円と卵かけご飯300円、中細ストレート麺、油と塩のバランス、煮干しが最初に強く後味すっきり、基本メニュー6種(特製、醤油、塩、にぼ清湯、塩にぼ清湯、昔ながら)、背脂醤油まぜそば(11月末まで、並200g・大350g)、卓上は胡椒のみ、後払い、店主と女性スタッフ1人、こだわりの食材、親切なスタッフ、研究を重ねた完成度、炙りチャーシュー丼350円、梅干しのアクセント、煮干しの個性は控えめという声、冷やしなめこ、冷やし中華そば1,000円(かつおの醤油、細麺、ごま風味のもやし、わかめ、なると)、ご飯150円で雑炊に、冷やし煮干し清湯、特製、塩にぼ。',
      confidence: 'medium', sources: [TB, R + 'B520269944/', R + 'B520464794/', R + 'B506868851/', R + 'B531305564/', R + 'B534444211/', R + 'B537236762/'] },
    ramen: {
      broth_base: ['gyokai', 'chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight, chewy noodles (October 2026).' },
      regional_style: [], sub_genre: ['niboshi', 'ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Shio niboshi clear soup (shio nibo seiyu), ¥950 (October 2026).',
      chashu: 'Two slices; seared chashu on the rice bowl (October 2026).',
      notable_toppings: ['whole niboshi', 'chopped onion', 'menma', 'ume (shio)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Niboshi broth.' },
      pantheon: 'Kozu\'s lunch-only niboshi counter: a clear sardine soup in shoyu or shio, with tamago kake gohan on the side.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537236762/', '"It was light and tasty."'],
        oiliness: [R + 'B520269944/', '"The oil content is just right" — placed low.'],
        clarity: [R + 'B506868851/', '"A niboshi (dried sardine) clear broth."'],
        tare_strength: [R + 'B520269944/', '"The saltiness is perfectly balanced" — mid-scale.'],
        noodle_firmness: [R + 'B520269944/', '"Medium-thin straight noodles with a nice chew" — mid-scale.'],
        aroma_punch: [R + 'B520269944/', '"The flavor of the dried sardines is particularly strong on the first bite."'],
      },
      confidence: 'medium', sources: [R + 'B520269944/', R + 'B506868851/', R + 'B537236762/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally; pay after eating, in cash.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区高津2-1-25 東道頓堀双葉プラザ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; opened April 2025; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高津二丁目1番25号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520269944/', R + 'B506868851/', R + 'B531305564/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shio niboshi clear soup (shio nibo seiyu)', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'shio_nibo'),
      it('', '', 'Niboshi shoyu', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'nibo'),
      it('', '', 'Back-fat shoyu mazesoba (limited)', '', 'Limited', 'no', 'no', 'October 2026; until end of November.', 'seabura_maze'),
      it('', '', 'Chilled chuka soba (summer)', '¥1,000', 'Seasonal', 'no', 'no', 'September 2026.', 'hiyashi'),
      it('', '', 'Tamago kake gohan', '¥300', 'Rice', 'ask', 'no', 'October 2026.', 'tkg'),
      it('', '', 'Seared-chashu rice bowl', '¥350', 'Rice', 'no', 'no', 'October 2026.', 'aburi_don'),
    ] }, {
    cuisine: '煮干しと鶏のラーメン、昼のみ・基本は6種(特製、醤油、塩、にぼ清湯、塩にぼ清湯950円、昔ながら)・煮干し1尾がのるにぼし醤油950円・中細ストレート麺・11月末までの限定の背脂醤油まぜそば(並200g、大350g)・夏の冷やし中華そば1,000円と冷やし煮干し・卵かけご飯300円・炙りチャーシュー丼350円・ご飯150円・卓上は胡椒のみ',
    neighborhood: '高津2-1-25 東道頓堀双葉プラザ1F。日本橋駅から徒歩約9分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油や塩のたれ。',
    vegan_detail: 'ヴィーガンではありません。煮干しと鶏のスープ、チャーシュー、背脂。',
    notes: '[ラーメン・高津の昼だけの煮干しの店、2025年開店] 高津にある昼だけのラーメンのカウンターで、2025年4月開店、店主とスタッフの2人で営み、もう20回以上通う常連も。主役は煮干しで、煮干し1尾がのる澄んだ醤油(950円)か、塩にぼ清湯(950円)。ひと口目に煮干しが強く、後味はすっきり、ほのかに梅も。煮干しが控えめに感じたという人も。特製、醤油、塩、昔ながらもあり、どれももちもちの中細麺。限定も次々で、11月末までの背脂醤油まぜそば、夏は冷やし中華そばや冷やし煮干しも。卵かけご飯(300円)や炙りチャーシュー丼(350円)と一緒に。支払いは食後に現金で。月曜定休。',
  });
}

// ================================================================ ラーメン 男塾!! 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27101604/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_otokojuku_nipponbashi', name: 'ラーメン 男塾!！ 日本橋店 (Ramen Otokojuku Nipponbashi)', category: 'OMNI',
    lat: 34.661381, lng: 135.505105, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; tare and miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, back fat, thick chashu.',
    hours_raw: 'Daily 11:00–22:30 (Tabelog). One staff member runs the shop, so waits of 20–30 minutes happen on weekends (March 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nippombashi 4-15-23, Naniwa — on the Otaroad side, about 6 min from Namba Stn',
    cuisine: 'Jiro-style ramen · Juku-cho ramen · spicy Juku-cho ramen ¥1,100 · soupless miso Juku-cho ramen ¥1,060 · dry (soupless) ramen with grated cheese · free extra vegetables, chashu fat and garlic, or ginger instead of garlic · small noodle portions available · kombu salt to sprinkle on the bean sprouts · thick chashu · counter seats',
    website: null, gmaps: gm('ラーメン男塾 日本橋'), menu_url: null,
    notes: "[Ramen · Jiro-style ramen on the Otaroad side of Nippombashi] A small Jiro-style counter toward Otaroad, open since 2017 and part of the same group as Fukuchan Ramen and Tenchijin. The Juku-cho ramen has a punchy broth and noodles fans like; customize with free extra vegetables, chashu fat and garlic, or swap garlic for ginger if you're working tomorrow. The garlic is fierce, so go easy. The soupless miso Juku-cho (¥1,060) and the dry ramen with grated cheese are hits, and the spicy Juku-cho is ¥1,100 (August 2026). The house kombu salt for the bean sprouts gets special praise, and the chashu is thick. A smaller noodle portion with extra vegetables suits lighter eaters. One person runs everything, so expect a wait at weekends and brisk seating directions. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 November 2017 (Tabelog)', background: 'Otoko Juku, a sister brand of Fukuchan Ramen and Tenchijin (April 2026 review of Tenchijin Nipponbashi).', philosophy: null, specialty: 'Jiro-style Juku-cho ramen.',
      anecdotes: [
        { text: '"The highlight here is definitely the kombu salt. Sprinkling it on the bean sprouts makes them so tasty that I could eat them endlessly! The chashu is thick and incredibly satisfying." — April 2026.', source: R + 'B530713267/' },
        { text: '"Each menu item is customized to individual preferences… If you want to avoid garlic for work reasons, you can switch it out for ginger!" — March 2026.', source: R + 'B527154715/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン 男塾!! 日本橋店、大阪市浪速区日本橋4-15-23、なんば駅から387m、毎日11:00〜22:30、カード・電子マネー・QR不可、禁煙、2017年11月7日開店。口コミ(2026年1〜9月): オタロードの二郎系、塾長ラーメン麺中盛り、パンチのあるスープ、野菜少なめにして後悔、にんにくがかなり辛い、汁なしでおろしチーズ、スタッフひとりで待ちあり、日曜は20〜30分待ち、野菜・脂・にんにくのコール、にんにくを生姜に変えられる、麺少なめ野菜多めが女性におすすめ、昆布塩をもやしにかけると絶品、厚いチャーシュー、二郎系初心者にもおすすめ、汁なし味噌塾長ラーメン1,060円、にんにくたっぷり、辛塾長ラーメン(並)1,100円、野菜増し・脂増し・にんにく増しは無料、席の案内がぶっきらぼうだったという声。',
      confidence: 'medium', sources: [TB, R + 'B530713267/', R + 'B527154715/', R + 'B522207228/', R + 'B524680839/', R + 'B531399890/', R + 'B533012712/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Jiro-style noodles; portion size adjustable (January–March 2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei', 'mazesoba_aburasoba'],
      signature_bowl: 'Juku-cho ramen (January 2026).',
      chashu: 'Thick and satisfying (April 2026).',
      notable_toppings: ['bean sprouts', 'back fat', 'garlic or ginger', 'kombu salt'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth and back fat.' },
      pantheon: 'Otaroad\'s one-person Jiro shop: punchy pork broth, free calls of vegetables, fat and fierce garlic, and kombu salt for the sprouts.',
      profile: { richness: 5, oiliness: 5, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B522207228/', '"The broth had a strong punch."'],
        oiliness: [R + 'B533012712/', 'Extra chashu fat free on request.'],
        clarity: [R + 'B522207228/', 'Jiro-style broth — opaque.'],
        tare_strength: [R + 'B522207228/', '"A strong punch" — placed high.'],
        noodle_firmness: [R + 'B522207228/', '"The noodles were just to my liking" — placed high for Jiro-style thick noodles.'],
        aroma_punch: [R + 'B522207228/', '"The garlic here was extremely spicy."'],
      },
      confidence: 'low', sources: [R + 'B522207228/', R + 'B533012712/', R + 'B530713267/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Topping calls at the counter; one staff member.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋4-15-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋四丁目15番23号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531399890/', R + 'B533012712/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Juku-cho ramen', '', 'Ramen', 'no', 'no', 'January 2026.', 'jukucho'),
      it('', '', 'Spicy Juku-cho ramen (regular)', '¥1,100', 'Ramen', 'no', 'no', 'August 2026.', 'kara'),
      it('', '', 'Soupless miso Juku-cho ramen', '¥1,060', 'Ramen', 'no', 'no', 'September 2026.', 'shirunashi_miso'),
      it('', '', 'Dry ramen with grated cheese', '', 'Ramen', 'no', 'no', 'March 2026.', 'dry_cheese'),
    ] }, {
    cuisine: '二郎系ラーメン・塾長ラーメン・辛塾長ラーメン1,100円・汁なし味噌塾長ラーメン1,060円・おろしチーズの汁なし・野菜、チャーシューの脂、にんにくの増しは無料、にんにくを生姜に変更も・麺少なめも可・もやしにかける昆布塩・厚いチャーシュー・カウンター席',
    neighborhood: '浪速区日本橋4-15-23。オタロード側、なんば駅から徒歩約6分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、たれと味噌。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、厚いチャーシュー。',
    notes: '[ラーメン・日本橋オタロード側の二郎系] オタロード側にある小さな二郎系のカウンターで、2017年開店、福ちゃんラーメンや天地人と同じグループ。塾長ラーメンはパンチのあるスープと麺が好評で、野菜、チャーシューの脂、にんにくの増しは無料、仕事の前ならにんにくを生姜に。にんにくはかなり辛いので控えめに。汁なし味噌塾長(1,060円)やおろしチーズの汁なしが人気で、辛塾長は1,100円(2026年8月)。もやしにかける昆布塩が特に好評で、チャーシューは厚切り。少食なら麺少なめで野菜多めを。ひとりで回しているので週末は待ちがあり、席の案内もきびきび。現金のみ。',
  });
}

save();
