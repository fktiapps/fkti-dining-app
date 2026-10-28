// Osaka sweep (2-mile circle around Dotonbori), batch 97 — ramen phase (all OMNI).
//   + カドヤ食堂 総本店 (Tabelog Ramen 100 every year since 2018; Nagoya Cochin shoyu and tsukesoba; Nishinagahori)
//   + 田中の中華そば (Tabelog Ramen OSAKA 100 2023–25; sharp shoyu and clam soba; Utsubo)
//   + 麺屋 はなぶさ (Tabelog Ramen 100 most years since 2017; Nagoya Cochin shoyu, chicken paitan; Honmachi)
//   + 麺ファクトリー ジョーズ (Tabelog Ramen OSAKA 100 2023–25; rich seafood tsukemen, curry option; Tanimachi 6)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 97);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ カドヤ食堂 総本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27001084/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '15:00']);
  put({
    id: 'osaka_kadoya_shokudo_sohonten_shinmachi', name: 'カドヤ食堂 総本店 (Kadoya Shokudo Sohonten)', category: 'OMNI',
    lat: 34.676104, lng: 135.48385, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy tare; wontons.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Nagoya Cochin chicken broth, chashu, wontons.',
    hours_raw: 'Mon and Thu–Sun 10:00–15:00; closed Tuesdays and Wednesdays; hours may change (Tabelog). Long lines; umbrellas provided for shade (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 4-16-13, 1F (Nishi-ku) — 3 min from Nishinagahori Stn exit 4-A',
    cuisine: 'Tabelog Ramen WEST 100 (2018–2022) and OSAKA 100 (2023–2025) · Nagoya Cochin chicken broth · chuka soba (shoyu) · tsukesoba ¥1,880 for 200 g, large 300 g +¥700, tokumori 400 g +¥800 with extra dip ingredients: intense Cochin umami with soy, a vinegar tang and chili · handmade wonton noodles, shio or shoyu · house-made medium-thick noodles, glossy and smooth · Nagoya Cochin seasoned egg ¥350 · weekend Cochin chicken rice, 10–15 a day · 6 counter seats, 2 tables for four',
    website: null, gmaps: gm('カドヤ食堂 総本店 新町'), menu_url: null,
    notes: "[Ramen · Osaka's benchmark Nagoya Cochin shoyu and tsukesoba by Nishinagahori] The main shop of Kadoya Shokudo, open since 2001 and on Tabelog's ramen 100 every year since 2018, one of Osaka's most famous bowls (the Crysta Nagahori branch is also in this guide). Everything rests on Nagoya Cochin chicken. The tsukesoba (¥1,880 for 200 g) is the order to make: a dip of intense chicken umami with soy, a tang of vinegar and a little chili, with glossy, smooth house-made medium-thick noodles; the larger sizes add more to the dip. The shoyu chuka soba and the handmade wonton noodles (shio or shoyu) are the alternatives, and the Cochin seasoned egg is ¥350. On weekends there's a limited Cochin chicken rice. Lines run 30 minutes to two hours; the shop lends umbrellas for shade. Lunch only; closed Tuesday and Wednesday; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 November 2001; reopened here 30 June 2010 (Tabelog).', background: 'Main shop of Kadoya Shokudo; Tabelog Ramen WEST 100 2018–2022, OSAKA 100 2023–2025.', philosophy: null, specialty: 'Tsukesoba and shoyu with Nagoya Cochin chicken.',
      anecdotes: [
        { text: '"The rich umami from the Nagoya Cochin chicken was prominent. Along with the soy sauce, there was a tangy acidity from vinegar and a spiciness from chili… The homemade medium-thick noodles were incredibly smooth." — October 2026, tsukesoba ¥1,880.', source: R + 'B537882018/' },
        { text: '"After patiently waiting for 2 hours, what was brought to me was a bowl of noodles that shimmered like gold." — October 2026, Sunday.', source: R + 'B538024234/' },
      ],
      japanese_sources_summary: '食べログ: カドヤ食堂 総本店、大阪市西区新町4-16-13 キャピタル西長堀 1F、西長堀駅4-A出口から徒歩3分、月木金土日10:00〜15:00、火水休み、カード・電子マネー・QR不可、14席(カウンター6、4人掛け2卓)、禁煙、2001年11月6日開店、2010年6月30日リニューアル、食べログ ラーメン WEST 百名店2018〜2022、OSAKA 百名店2023〜2025。口コミ(2026年10月): 55回目、名古屋コーチンの鶏飯が土日祝限定で1日10〜15食、ごぼうの香り、中華そば、つけ麺特盛2,680円、並200g・大300g(+700円)・特盛400g(+800円)でつけ汁の具も増える、手打ちワンタン塩、中太の手打ち麺、平日12:05に16人で12:44に着席、つけそば並1,880円、名古屋コーチン味玉350円、強いコーチンの旨味、醤油に酢の酸味と唐辛子、なめらかな自家製中太麺、日曜13:30に40人で2時間待ち、金色に輝く麺、ラーメンWalker殿堂入り、日よけの傘、30分待ち、手打ちワンタン麺、チャーシュー・ワンタン・味玉・メンマ・ねぎ・海苔・なると。',
      confidence: 'high', sources: [TB, R + 'B537882018/', R + 'B538024234/', R + 'B480928043/', R + 'B529254844/', R + 'B537609696/', R + 'B538032131/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: null, hydration: null, handmade: true, notes: 'House-made medium-thick noodles, glossy and smooth (October 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Tsukesoba, ¥1,880 for 200 g (October 2026).',
      chashu: 'Chashu with wontons, egg, menma and naruto in the wonton ramen (October 2026).',
      notable_toppings: ['Nagoya Cochin seasoned egg', 'handmade wontons', 'naruto', 'nori'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Osaka\'s ramen landmark: Nagoya Cochin tsukesoba with a vinegar-chili edge and golden house noodles.',
      profile: { richness: 4, oiliness: 2, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537882018/', '"I was amazed by its intense flavor" — placed high.'],
        oiliness: [R + 'B537882018/', 'Soy, vinegar and chili rather than fat — placed low.'],
        clarity: [R + 'B537609696/', '"The broth had a rich flavor" (wonton shio) — mid-scale.'],
        tare_strength: [R + 'B537882018/', '"A deliciously complex and sour broth" — placed high.'],
        noodle_firmness: [R + 'B537882018/', '"Incredibly smooth" medium-thick noodles — mid-scale.'],
        aroma_punch: [R + 'B537882018/', '"The rich umami from the Nagoya Cochin chicken was prominent" — placed high.'],
      },
      confidence: 'high', sources: [R + 'B537882018/', R + 'B538024234/', R + 'B537609696/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Long line outside; staff offer umbrellas for shade (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町4-16-13 キャピタル西長堀 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町四丁目16番13号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537882018/', R + 'B529254844/', R + 'B480928043/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukesoba, regular 200 g', '¥1,880', 'Tsukemen', 'no', 'no', 'Large +¥700, tokumori +¥800; October 2026.', 'tsukesoba'),
      it('', '', 'Chuka soba (shoyu)', '', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('', '', 'Handmade wonton noodles (shio or shoyu)', '', 'Ramen', 'no', 'no', 'October 2026.', 'wonton'),
      it('', '', 'Nagoya Cochin seasoned egg', '¥350', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Nagoya Cochin chicken rice (weekends, limited)', '', 'Rice', 'no', 'no', 'October 2026.', 'torimeshi'),
    ] }, {
    cuisine: '食べログ ラーメン WEST 百名店(2018〜2022)、OSAKA 百名店(2023〜2025)・名古屋コーチンのスープ・中華そば(醤油)・つけそば200g 1,880円、大300g +700円、特盛400g +800円でつけ汁の具も増える: 強いコーチンの旨味に醤油、酢の酸味、唐辛子・手打ちワンタン麺、塩か醤油・つややかでなめらかな自家製中太麺・名古屋コーチン味玉350円・土日の鶏飯は1日10〜15食・カウンター6席、4人掛けテーブル2卓',
    neighborhood: '西区新町4-16-13 1F。西長堀駅4-A出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ、ワンタン。',
    vegan_detail: 'ヴィーガンではありません。名古屋コーチンの鶏のスープ、チャーシュー、ワンタン。',
    notes: '[ラーメン・西長堀、大阪を代表する名古屋コーチンの醤油とつけそば] カドヤ食堂の総本店で、2001年開店、2018年から毎年食べログのラーメン百名店に選ばれる大阪屈指の名店(クリスタ長堀店もこのガイドに掲載)。すべては名古屋コーチンが土台。頼むべきはつけそば(200gで1,880円)で、コーチンの強い旨味に醤油、酢の酸味、少しの唐辛子のつけ汁に、つややかでなめらかな自家製中太麺。大きいサイズはつけ汁の具も増える。ほかに醤油の中華そば、手打ちワンタン麺(塩か醤油)、コーチン味玉は350円。週末は数量限定のコーチンの鶏飯も。行列は30分から2時間、日よけの傘を貸してくれる。昼のみ、火水休み、現金のみ。',
  });
}

// ================================================================ 田中の中華そば
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27102601/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['19:00', '21:00']), WE = day(['11:30', '15:00']);
  put({
    id: 'osaka_tanaka_no_chuka_soba_utsubo', name: '田中の中華そば (Tanaka no Chuka Soba)', category: 'OMNI',
    lat: 34.684214, lng: 135.495034, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam broth, chashu.',
    hours_raw: 'Tue–Fri 11:30–15:00 and 19:00–21:00; Sat–Sun 11:30–15:00; closed Mondays including holidays; temporary closures on X (Tabelog, staff-maintained). Ticket machine. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Utsubohonmachi 1-18-23, 1F (Nishi-ku) — 3 min from Honmachi Stn exit 28',
    cuisine: 'Tabelog Ramen OSAKA 100 (2023, 2024, 2025) · chuka soba ¥1,200: sharp, refined shoyu, not oily · special chuka soba ¥1,500 · kai soba (clam broth), light and clam-forward, the popular order · round, slippery noodles · rare chashu, long marinated menma · seasoned egg · chashu rice bowl · 7 counter seats',
    website: null, gmaps: gm('田中の中華そば 靱本町'), menu_url: null,
    notes: "[Ramen · a Tabelog 100 shoyu and clam soba near Utsubo Park] A stylish seven-seat counter three minutes from Honmachi exit 28, open since 2018 and on Tabelog's Ramen OSAKA 100 from 2023 to 2025, with a line most of the time; turnover is quick. The chuka soba (¥1,200) is a refined shoyu with a sharp soy edge and little oil, on round, slippery noodles with melt-soft rare chashu and long, well-seasoned menma; the special (¥1,500) adds more. On one visit every later arrival ordered the kai soba, a light clam broth where the shellfish shines. Add a chashu rice bowl. Service is attentive and the room calm. The evening session opens at 19:00 Tuesday to Friday, and seven seats fill in one round. Check X for closures; closed Mondays; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 January 2018 (Tabelog)', background: 'Ramen counter (Tabelog, staff-maintained); Tabelog Ramen OSAKA 100 2023–2025.', philosophy: null, specialty: 'Chuka soba (shoyu); kai soba (clam).',
      anecdotes: [
        { text: '"The broth was not too oily, with a sharp soy flavor that really stood out. The chashu was rare and delicious." — October 2026, chuka soba ¥1,200.', source: R + 'B393223359/' },
        { text: '"The noodles were perfectly round and slippery, the bamboo shoots were long and infused with flavor, and the chashu melted in my mouth… The clam broth was irresistible." — September 2026.', source: R + 'B536342296/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 田中の中華そば、大阪市西区靭本町1-18-23 ウルトラビル 1F、本町駅28番出口から徒歩3分、火〜金11:30〜15:00・19:00〜21:00、土日11:30〜15:00、月曜定休(祝日も)、臨時休業はX、カード・電子マネー・QR不可、カウンター7席、2018年1月11日開店、食べログ ラーメン OSAKA 百名店2023・2024・2025。口コミ(2026年9〜10月): 5年ぶり、19時開店前に並ぶ、7席なので1巡目に入れず、中華そば1,200円、脂は控えめでキレのある醤油、レアチャーシュー、おしゃれな外観と内装、接客がよい、外から店名がわからない、雨でも行列、券売機、丸くつるつるの麺、長く味の染みたメンマ、とろけるチャーシュー、貝のスープ、貝そばと味玉、上品でコクのある醤油、特製中華そば1,500円、後から来た客はみな貝そば、あっさりで旨味のある一杯、チャーシュー丼、貝だしの中華そばはあっさりで貝の旨味、2組待ちでも回転が早い、落ち着いた雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B393223359/', R + 'B536342296/', R + 'B537039200/', R + 'B537550942/', R + 'B537657667/', R + 'B538069251/'] },
    ramen: {
      broth_base: ['shellfish'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: 'straight', hydration: null, handmade: false, notes: 'Round, slippery noodles with a distinctive texture (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chuka soba, ¥1,200 (October 2026); kai soba (clam) also popular.',
      chashu: 'Rare chashu that melts in the mouth (September–October 2026).',
      notable_toppings: ['long menma', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Clam broth; chashu.' },
      pantheon: 'Utsubo\'s Tabelog 100 counter: a sharp, clean shoyu and a clam soba that regulars favor.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537039200/', '"The flavor is refined and has a nice richness" — mid-scale.'],
        oiliness: [R + 'B393223359/', '"The broth was not too oily" — placed low.'],
        clarity: [R + 'B538069251/', 'Clam soba "light and flavorful" — placed high.'],
        tare_strength: [R + 'B393223359/', '"A sharp soy flavor that really stood out" — placed high.'],
        noodle_firmness: [R + 'B536342296/', '"Perfectly round and slippery" — mid-scale.'],
        aroma_punch: [R + 'B538069251/', '"The essence of the clams… shine through" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B393223359/', R + 'B536342296/', R + 'B538069251/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; no sign in English; attentive service (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区靭本町1-18-23 ウルトラビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区靱本町一丁目18番23号 (go) 9m; OSM 田中の中華そば node/5868613096 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B393223359/', R + 'B537039200/', R + 'B537550942/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('', '', 'Special chuka soba', '¥1,500', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Kai soba (clam)', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'kai_soba'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '食べログ ラーメン OSAKA 百名店(2023、2024、2025)・中華そば1,200円: 脂控えめでキレのある上品な醤油・特製中華そば1,500円・人気の貝そば: 貝の旨味のあっさりスープ・丸くつるつるの麺・レアチャーシュー、長く味の染みたメンマ・味玉・チャーシュー丼・カウンター7席',
    neighborhood: '西区靭本町1-18-23 1F。本町駅28番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。貝のスープ、チャーシュー。',
    notes: '[ラーメン・靭公園近く、百名店の醤油と貝そば] 本町駅28番出口から3分のおしゃれなカウンター7席の店で、2018年開店、2023〜2025年に食べログのラーメン OSAKA 百名店、たいてい行列だが回転は早い。中華そば(1,200円)はキレのある醤油で脂控えめの上品な一杯、丸くつるつるの麺にとろけるレアチャーシューと味の染みた長いメンマ。特製(1,500円)はさらに豪華に。ある日は後から来た客がみな、貝の旨味が主役のあっさりした貝そばを頼んでいた。チャーシュー丼も。接客は丁寧で店内は落ち着いている。夜は火〜金の19時から、7席は1巡で埋まる。休業はXで確認を。月曜定休、現金のみ。',
  });
}

// ================================================================ 麺屋 はなぶさ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27071670/'; const R = TB + 'dtlrvwlst/';
  const FULL = day(['11:00', '14:30'], ['18:00', '21:00']), LUNCH = day(['11:00', '14:30']);
  put({
    id: 'osaka_menya_hanabusa_honmachi', name: '麺屋 はなぶさ (Menya Hanabusa)', category: 'OMNI',
    lat: 34.683865, lng: 135.509615, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Nagoya Cochin chicken broth, chicken oil, chashu.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:00–14:30 and 18:00–21:00; Wed and Sat 11:00–14:30; closed Sundays and holidays; evening service resumed (Tabelog). Ticket machine. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: FULL, 1: FULL, 2: LUNCH, 3: FULL, 4: FULL, 5: LUNCH }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Honmachi 1-1-4 — 3 min from Sakaisuji-Hommachi Stn exit 1',
    cuisine: 'Tabelog Ramen WEST 100 (2017, 2019–2022) and OSAKA 100 (2023–2025) · chuka soba ¥1,000: Nagoya Cochin broth with a rich soy aroma, firm medium-thin wavy noodles, two slices of pork chashu, menma, seasoned egg as standard · shoyu ramen with large rare chashu in a clear amber broth · chicken soba (chicken paitan) ¥1,100 with clear chicken oil, raw onion · shio soba (sells out) · premium bowl with more Cochin · chashu rice bowl · 7 counter seats',
    website: null, gmaps: gm('麺屋 はなぶさ 本町'), menu_url: null,
    notes: "[Ramen · a Tabelog 100 Nagoya Cochin shoyu by Sakaisuji-Honmachi] A seven-seat counter a few minutes from Sakaisuji-Honmachi, open since 2013 and on Tabelog's ramen 100 lists in most years since 2017, yet on two October 2026 visits there was no wait. The chuka soba (¥1,000) is built on Nagoya Cochin chicken: a clear amber broth with a rich soy aroma and long finish, firm, slightly wavy medium-thin noodles with real wheat flavor, two slices of chashu, menma and a seasoned egg included. The chicken soba (¥1,100) is a robust chicken paitan glossed with chicken oil and sharpened with raw onion; one diner found the chicken edge too strong, another the finish a bit sweet. The shio soba sells out first. Add a chashu rice bowl. Lunch only on Wednesday and Saturday; closed Sundays; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 March 2013 (Tabelog)', background: 'Ramen counter; Tabelog Ramen WEST 100 2017 and 2019–2022, OSAKA 100 2023–2025.', philosophy: null, specialty: 'Nagoya Cochin chuka soba; chicken paitan.',
      anecdotes: [
        { text: '"I took a sip of the broth, which is made from Nagoya Cochin chicken, and the rich aroma of soy sauce and the delicious aftertaste really stood out… The noodles are medium-thin with a slight wave, and they have a strong wheat flavor, cooked to a firm texture." — October 2026, chuka soba ¥1,000.', source: R + 'B537946760/' },
        { text: '"The rich chicken paitan broth had a layer of clear chicken oil floating on top… The noodles were medium-thin, straight, and had a wonderfully smooth texture." — October 2026, chicken soba.', source: R + 'B537383401/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 はなぶさ、大阪市中央区本町1-1-4、堺筋本町駅1番出口から徒歩3分、月火木金11:00〜14:30・18:00〜21:00、水土11:00〜14:30、日祝休み、夜営業再開、カード・電子マネー・QR不可、カウンター7席、禁煙、2013年3月28日開店、食べログ ラーメン WEST 百名店2017・2019〜2022、OSAKA 百名店2023〜2025。口コミ(2026年10月): 塩そばは売り切れ、鶏そば、濃厚な鶏白湯に透明な鶏油、中細ストレートのなめらかな麺、チャーシュー・メンマ・味玉、鶏の風味が強すぎるという声、黒胡椒、濃厚なスープ、何か物足りないという声、玉ねぎ、鶏の濃いスープ、生の玉ねぎ、チャーシュー丼、全体にやや甘めという声、醤油ラーメン、大きなレアチャーシュー2枚、澄んだ琥珀色のスープ、鶏白湯ラーメン1,100円、臭みのない濃厚でなめらかなスープ、空いていた、名古屋コーチンのスープ、中華そば1,000円、醤油の香りと後味、中細でやや縮れた硬めの麺、豚チャーシュー2枚、味玉が標準、コーチンを凝縮したプレミアムも。',
      confidence: 'medium', sources: [TB, R + 'B537946760/', R + 'B537383401/', R + 'B537545172/', R + 'B537731784/', R + 'B537816670/', R + 'B537871954/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: ['chicken oil'], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thin, slightly wavy, firm with strong wheat flavor in the chuka soba; straight and smooth in the chicken soba (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Chuka soba (Nagoya Cochin shoyu), ¥1,000 (October 2026).',
      chashu: 'Two slices of pork chashu; large rare chashu in the shoyu (October 2026).',
      notable_toppings: ['seasoned egg (standard)', 'menma', 'raw onion (chicken soba)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken broth and oil.' },
      pantheon: 'Sakaisuji-Honmachi\'s quiet Tabelog 100: a ¥1,000 Nagoya Cochin shoyu with firm wavy noodles.',
      profile: { richness: 3, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537946760/', '"This is a tasty broth" with a lasting aftertaste — mid-scale.'],
        oiliness: [R + 'B537383401/', 'Chicken soba with "a layer of clear chicken oil" — mid-scale.'],
        clarity: [R + 'B537816670/', '"The broth was a clear amber color" — placed high.'],
        tare_strength: [R + 'B537946760/', '"The rich aroma of soy sauce" — mid-scale.'],
        noodle_firmness: [R + 'B537946760/', '"Cooked to a firm texture."'],
        aroma_punch: [R + 'B537383401/', 'Broth "boldly proclaimed its chicken flavor" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537946760/', R + 'B537383401/', R + 'B537816670/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; small counter; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区本町1-1-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区本町一丁目1番4号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537946760/', R + 'B537871954/', R + 'B537383401/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (Nagoya Cochin shoyu)', '¥1,000', 'Ramen', 'no', 'no', 'Seasoned egg included; October 2026.', 'chuka_soba'),
      it('', '', 'Chicken soba (chicken paitan)', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'tori_soba'),
      it('', '', 'Shio soba', '', 'Ramen', 'no', 'no', 'Sells out; October 2026.', 'shio'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '食べログ ラーメン WEST 百名店(2017、2019〜2022)、OSAKA 百名店(2023〜2025)・中華そば1,000円: 名古屋コーチンのスープに醤油の豊かな香り、硬めでやや縮れた中細麺、豚チャーシュー2枚、メンマ、味玉が標準・澄んだ琥珀色のスープに大きなレアチャーシューの醤油ラーメン・透明な鶏油と生玉ねぎの鶏そば(鶏白湯)1,100円・塩そば(売り切れあり)・コーチンを凝縮したプレミアム・チャーシュー丼・カウンター7席',
    neighborhood: '中央区本町1-1-4。堺筋本町駅1番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。名古屋コーチンのスープ、鶏油、チャーシュー。',
    notes: '[ラーメン・堺筋本町、百名店の名古屋コーチン醤油] 堺筋本町から数分のカウンター7席の店で、2013年開店、2017年以降ほとんどの年で食べログのラーメン百名店に選ばれながら、2026年10月には待たずに入れたという声が2件。中華そば(1,000円)は名古屋コーチンがベースで、澄んだ琥珀色のスープに醤油の豊かな香りと長い余韻、小麦の香る硬めでやや縮れた中細麺に、チャーシュー2枚、メンマ、味玉まで付く。鶏そば(1,100円)は鶏油が光る力強い鶏白湯に生の玉ねぎ。鶏の風味が強すぎた、後半が甘めだったという声も。塩そばは先に売り切れる。チャーシュー丼も。水曜と土曜は昼のみ、日曜定休、現金のみ。',
  });
}

// ================================================================ 麺ファクトリー ジョーズ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27080284/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ameblo.jp/factory-jaws/';
  put({
    id: 'osaka_men_factory_jaws_uehonmachinishi', name: '麺ファクトリー ジョーズ (Men Factory Jaws)', category: 'OMNI',
    lat: 34.673291, lng: 135.520309, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made thick wheat noodles; soy and curry seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, sardine and niboshi dip; chashu; cheese and egg in the mazesoba.',
    hours_raw: 'Daily 11:00–15:30 and 17:30–22:30 (Tabelog, staff-maintained). Ticket machine outside. Cash only: no cards, e-money or QR (Tabelog). Large noodles free.',
    hours: ALL(day(['11:00', '15:30'], ['17:30', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uehonmachi-nishi 2-1-11, 1F — 5 min from Tanimachi 6-chome Stn exit 3',
    cuisine: 'Tabelog Ramen OSAKA 100 (2023, 2024, 2025) · rich tsukemen ¥1,200, soy or curry: thick dip of pork, chicken, sardine flakes and niboshi · spicy rich tsukemen · special rich tsukemen · mazesoba ¥1,150, soy or curry, with chashu, egg, cheese, fried onion, garlic chives and nori · ramen, shoyu or shio · house-made thick chewy noodles, large free · small rice to finish with the leftover dip and yuzu kosho · lemon, pepper, shichimi · 6 counter seats, tables',
    website: OWN, gmaps: gm('麺ファクトリー ジョーズ 上本町'), menu_url: null,
    notes: "[Ramen · rich seafood tsukemen with a curry option near Tanimachi 6-chome] A busy, stylish tsukemen shop near Tanimachi 6-chome, open since 2014 and on Tabelog's Ramen OSAKA 100 from 2023 to 2025, filling up fast at lunch. The rich tsukemen (¥1,200) pairs house-made thick, chewy, slightly sweet wheat noodles with a dip so thick it clings, built on pork, chicken, sardine flakes and niboshi; order it soy or curry, the curry adding a gentle spice. Large noodles are free, but the dip is strong and a small rice comes at the end to mix with the leftover dip and yuzu kosho, so regular may be enough. Lemon halfway brightens it. The mazesoba (¥1,150) adds cheese, fried onion and garlic chives. One regular has eaten here twenty times. Buy a ticket outside; open daily; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 July 2014 (Tabelog)', background: 'Tsukemen shop (Tabelog, staff-maintained; blog ameblo.jp/factory-jaws); Tabelog Ramen OSAKA 100 2023–2025.', philosophy: null, specialty: 'Rich tsukemen, soy or curry.',
      anecdotes: [
        { text: '"The Rich Tsukemen (Large) featured chewy, straight medium-thick noodles paired with a dipping sauce made from a blend of animal broth (pork and chicken) and seafood (sardine flakes and niboshi) with a curry flavor." — October 2026, rich tsukemen ¥1,200.', source: R + 'B408415634/' },
        { text: '"The large size is free, and as the name suggests, the broth is so thick that it clings to the noodles. Adding lemon halfway through was a nice flavor change." — October 2026.', source: R + 'B537863234/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺ファクトリー ジョーズ、大阪市中央区上本町西2-1-11 楠本ビル 1F、谷町六丁目駅3番出口から徒歩5分、毎日11:00〜15:30・17:30〜22:30、カード・電子マネー・QR不可、20席(カウンター6、4人掛け2卓、6人掛け1卓)、禁煙、おしゃれな空間、2014年7月21日開店、ブログ ameblo.jp/factory-jaws、食べログ ラーメン OSAKA 百名店2023・2024・2025。口コミ(2026年8〜10月): 20回目、濃厚つけ麺1,200円、外の券売機、大盛りカレー、すぐ満席、もちもちの中太ストレート麺、豚と鶏の動物系と鰯節・煮干しの魚介にカレー、スパイスの香りとほのかな辛さ、豚ロースと炙り豚バラのチャーシュー、スープ割りとご飯でスープカレー風、メニューは濃厚つけ麺(醤油・カレー)・辛濃厚つけ麺・まぜそば(醤油・カレー)・ラーメン(醤油・塩)、大盛り無料、卓上に胡椒と七味、スタッフ3人、まぜそば1,150円、平打ちの中太麺、チャーシュー・半熟卵・チーズ・フライドオニオン・海苔・ニラ・ねぎ、締めのだしご飯、太くもちもちの麺、柚子胡椒、魚粉、特製濃厚つけ麺、自家製麺、レモンで味変、小ライス付き。',
      confidence: 'medium', sources: [TB, OWN, R + 'B408415634/', R + 'B537863234/', R + 'B537460204/', R + 'B537471524/', R + 'B537656251/', R + 'B537723004/'] },
    ramen: {
      broth_base: ['pork', 'chicken', 'gyokai', 'niboshi'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: true, notes: 'House-made thick, chewy straight noodles with a hint of wheat sweetness; large free (October 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Rich tsukemen, soy or curry, ¥1,200 (October 2026).',
      chashu: 'Tender pork loin and grilled pork belly (October 2026).',
      notable_toppings: ['fish powder', 'lemon', 'yuzu kosho (rice finish)', 'curry option'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork, chicken and fish dip.' },
      pantheon: 'Tanimachi\'s Tabelog 100 tsukemen: a clinging pork-and-sardine dip, soy or curry, on house thick noodles.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537863234/', '"The broth is so thick that it clings to the noodles."'],
        oiliness: [R + 'B537460204/', '"While rich, was easy to eat" — mid-scale.'],
        clarity: [R + 'B537863234/', 'Thick, clinging dip — placed low.'],
        tare_strength: [R + 'B537471524/', '"Since the taste is strong" — placed high.'],
        noodle_firmness: [R + 'B537723004/', '"A firm chewiness and elasticity."'],
        aroma_punch: [R + 'B408415634/', '"The spices provided a delightful aroma" (curry) — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B408415634/', R + 'B537863234/', R + 'B537471524/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区上本町西2-1-11 楠本ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区上本町西二丁目1番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B408415634/', R + 'B537863234/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rich tsukemen (soy or curry)', '¥1,200', 'Tsukemen', 'no', 'no', 'Large free; October 2026.', 'noko_tsukemen'),
      it('', '', 'Spicy rich tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'kara_tsukemen'),
      it('', '', 'Mazesoba (soy or curry)', '¥1,150', 'Mazesoba', 'no', 'no', 'August 2026.', 'mazesoba'),
      it('', '', 'Ramen (shoyu or shio)', '', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
    ] }, {
    cuisine: '食べログ ラーメン OSAKA 百名店(2023、2024、2025)・濃厚つけ麺1,200円、醤油かカレー: 豚、鶏、鰯節、煮干しの濃いつけ汁・辛濃厚つけ麺・特製濃厚つけ麺・チャーシュー、卵、チーズ、フライドオニオン、ニラ、海苔のまぜそば1,150円、醤油かカレー・ラーメン、醤油か塩・自家製のもちもち太麺、大盛り無料・締めは小ライスに残りのつけ汁と柚子胡椒・レモン、胡椒、七味・カウンター6席とテーブル',
    neighborhood: '中央区上本町西2-1-11 1F。谷町六丁目駅3番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の太麺、醤油やカレーの味付け。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、鰯節、煮干しのつけ汁、チャーシュー、まぜそばのチーズと卵。',
    notes: '[ラーメン・谷町六丁目近く、カレーも選べる濃厚魚介つけ麺] 谷町六丁目近くのおしゃれで人気のつけ麺店で、2014年開店、2023〜2025年に食べログのラーメン OSAKA 百名店、昼はすぐ満席に。濃厚つけ麺(1,200円)は、ほんのり甘い自家製のもちもち太麺に、豚、鶏、鰯節、煮干しの麺に絡みつくほど濃いつけ汁。醤油かカレーを選べ、カレーはほのかにスパイシー。大盛りは無料だが、味が濃く最後に小ライスが付いて残ったつけ汁と柚子胡椒で締めるので、並でも十分かも。途中でレモンを搾ると爽やか。まぜそば(1,150円)はチーズ、フライドオニオン、ニラ入り。20回通う常連も。食券は外で、無休、現金のみ。',
  });
}

save();
