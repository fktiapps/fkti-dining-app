// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 60.
//   + 京都四条酒場 神聖 Kyoto Shijo Sakaba Shinsei (izakaya with Yamamoto Honke's Shinsei sake, in a 100-year-old house) — rest
//   + 祇園おばんざいおりべ 祇園店 Gion Obanzai Oribe (obanzai and oden up a stair behind Minami-za) — rest
//   + Japanese SAKE BAR 日本酒バー 祇園本店 (sake bar pairing Goto-beef roast beef, open from 14:00) — rest
//   + てるの屋 Teru no Ya (charcoal yakitori until 4 am, Nishikiyamachi) — rest
//   Rest tier, nearest-first from `next rest 2000`; no skips this batch.
//   queue-status.jsonl grepped for each brand (神聖, おりべ, 日本酒バー, てるの屋, Yamamoto Honke ): no earlier rulings.
//   Same-name counts first (2026-11-07): 神聖 — one (a collaboration with the Fushimi brewery Yamamoto Honke). おりべ — one
//   (the Gion shop). Japanese SAKE BAR — one, despite "本店" in the name. てるの屋 — one. None is in data/kyoto.json.
//   Service charges per Tabelog's Japanese original: 神聖 「420円（税込）」; the other three list none. No halal claims;
//   no owner deaths; no single-review remarks about other diners kept.
//   Pins re-checked against current main: nearest records 9.9–23 m; no offsets needed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-60');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京都四条酒場 神聖
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042566/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://shinseisakaba.com';
  const WD = day(['16:00', '23:30']); const WE = day(['14:00', '23:30']);
  put({
    id: 'kyoto_shijo_sakaba_shinsei', name: '京都四条酒場 神聖 (Kyoto Shijo Sakaba Shinsei)', category: 'OMNI',
    lat: 35.00257, lng: 135.764951, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled dishes, sashimi, oden and dashimaki, but also fried fish, fu tempura and chicken-skin gyoza (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, grilled tongue, chicken dishes and dashi-based oden (2026 reviews).',
    hours_raw: 'Mon–Fri and the days around holidays 16:00–23:30; Sat, Sun and holidays 14:00–23:30 (last order food 22:30, drinks 23:00) (Tabelog). Reopened after renovation on 8 July 2026 (Tabelog; July 2026). Reservations accepted (Tabelog). Charge ¥420 incl. tax (Tabelog, Japanese text: 「420円（税込）」); the appetizer is a small sake with nibbles (July–August 2026). Cards incl. UnionPay and PayPay; no e-money (Tabelog). 72 seats incl. a long counter facing the open kitchen and second-floor rooms (Tabelog; July–August 2026). Non-smoking (Tabelog). A renovated house over 100 years old on Ayanokoji at Tominokoji, 5 min from Karasuma and Kyoto-Kawaramachi (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji at Tominokoji, south of Shijo',
    cuisine: 'An izakaya run with Yamamoto Honke, a Fushimi sake brewery founded in 1677, pouring its full Shinsei range with chicken dishes and charcoal grills (Tabelog; 2026 reviews) · appetizer of manjyu-jako and tuna with kombu with a glass of the brewery\'s "Shinsei Ho-o" (July 2026) · grilled tongue, deep-fried rockfish, dashimaki with sauce, oden, fu tempura (July 2026) · five-kind sashimi platter, ¥3,278 for two (August and October 2026); chicken-skin gyoza (August 2026)',
    website: OF, gmaps: gm('京都四条酒場 神聖'), menu_url: TB,
    notes: '[Sake izakaya · Ayanokoji Tominokoji, the Shinsei brewery\'s tavern] A 72-seat izakaya in a century-old house, run with the Fushimi brewery Yamamoto Honke: the whole Shinsei sake range, a welcome glass with nibbles, charcoal-grilled tongue, oden, dashimaki and sashimi, at a long counter by the open kitchen or upstairs. Reopened in July 2026; reviews are mixed on portions and service. ¥420 charge.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya created with Yamamoto Honke, a sake brewery founded in Fushimi in 1677, in a renovated house over 100 years old; it reopened on 8 July 2026 after renovation with a new counter and charcoal grill.',
      philosophy: null, specialty: 'Shinsei sake with charcoal-grilled dishes.',
      anecdotes: [
        { text: 'A July 2026 visitor on reopening day started with "Shinsei Ho-o", the sake offered at Yasaka Shrine, alongside the appetizer.', source: R + 'B532345449/' },
        { text: 'A July 2026 family lunch after a film tried a tasting flight and were given fu tempura without ordering it.', source: R + 'B531557467/' },
        { text: 'An October 2026 diner found portions small and the ¥3,278 sashimi for two overpriced, and the service careless.', source: R + 'B537920375/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・鶏料理、下京区綾小路通富小路東入塩屋町65、阪急烏丸駅・京都河原町駅から徒歩5分、月〜金・祝前後16:00〜23:30、土日祝14:00〜23:30 (L.O. 料理22:30、ドリンク23:00)、予約可、チャージ420円 (税込)、カード・PayPay 可、72席、禁煙、伏見の酒蔵・Yamamoto Honke (1677年創業) とのコラボ、築100年超の町家を改装、2026年7月8日に改装オープン。口コミ (2026年7月〜10月、英語): 神聖の全ラインナップ、お通しはじゃこと昆布締めのまぐろに「神聖 Ho-o」、炭火焼き、タンの焼き物、rockfish の唐揚げ、だし巻き、おでん、麩の天ぷら、刺身5種盛り2人前3,278円、鶏皮餃子、量が少ない、サービスが雑との声も。',
      confidence: 'medium', sources: [TB, OF, R + 'B503462375/', R + 'B531557467/', R + 'B532236646/', R + 'B532345449/', R + 'B532555963/', R + 'B532818107/', R + 'B533865708/', R + 'B533973147/', R + 'B534076909/', R + 'B535243929/', R + 'B535845409/', R + 'B537920375/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sit at the counter by the open kitchen; ask for a Shinsei tasting; ¥420 charge. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通富小路東入塩屋町65',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002570, 135.764951); cross-checked: GSI 京都府京都市下京区塩屋町65番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537920375/'],
    price_note: 'One price from October 2026; ¥420 charge.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter, five kinds (for two)', '¥3,278', 'Sashimi', 'ask', 'no', 'October 2026.', 'sashimi'),
      it('', '', 'Grilled tongue', '', 'Charcoal grill', 'ask', 'no', 'July 2026.', 'yaki_tan'),
      it('', '', 'Charge (appetizer with sake)', '¥420', 'Charge', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '1677年創業の伏見の酒蔵・Yamamoto Honke と組み、神聖を揃えて鶏料理と炭火焼きを出す居酒屋 (食べログ、2026年の口コミ)・じゃこと昆布締めのまぐろのお通しに「神聖 Ho-o」のグラス (2026年7月)・タンの焼き物、rockfish の唐揚げ、あんかけのだし巻き、おでん、麩の天ぷら (2026年7月)・刺身5種盛り2人前3,278円 (2026年8月・10月)、鶏皮餃子 (2026年8月)',
    neighborhood: '綾小路富小路、四条の南',
    gf_detail: '要確認。炭火焼き、刺身、おでん、だし巻きのほか、揚げ物、麩の天ぷら、鶏皮餃子もある (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、タン、鶏料理、出汁のおでん (2026年の口コミ)。',
    notes: '[酒蔵の居酒屋・綾小路富小路、神聖を揃えて] 伏見のYamamoto Honke と組んだ、築100年を超える町家の72席の居酒屋。神聖の全銘柄、お通しにお酒のグラス、炭火のタン、おでん、だし巻き、刺身を、オープンキッチンの長いカウンターや2階で。2026年7月に改装オープン。量やサービスには賛否。チャージ420円。',
  });
}

// ================================================================ 祇園おばんざいおりべ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031862/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://sites.google.com/view/oribe7889/';
  const H = day(['16:00', '00:00']);
  put({
    id: 'kyoto_gion_obanzai_oribe', name: '祇園おばんざいおりべ 祇園店 (Gion Obanzai Oribe)', category: 'OMNI',
    lat: 35.002959, lng: 135.772949, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, oden and dashimaki, but also croquettes and yakitori (2023–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based oden and obanzai, yakitori, grilled tripe (2023–25 reviews).',
    hours_raw: 'Daily 16:00–0:00 (last food order 23:30); closed irregularly (Tabelog). Reservations accepted; takes late guests (Tabelog; September 2025). Cards, e-money and QR (Tabelog). 19 seats: a counter of 7, tables and a raised area; shoes off (Tabelog; June 2023). Smoking allowed (Tabelog; September 2025). Second floor up a staircase at the end of an alley next to the Granbell Hotel, behind Minami-za, 6 min from Gion-Shijo (Tabelog; June 2023; February 2025). Opened 12 April 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamato-oji, behind Minami-za — Gion-Shijo',
    cuisine: 'About ten handmade obanzai a day with seasonal Kyoto vegetables (Tabelog) · a starter plate of three or five obanzai (September 2023; February 2025) · oden all year, even in July (July 2024; December 2023) · dashimaki (December 2023 and 2024); homemade croquettes (August 2025) · yakitori (September 2023); grilled tripe (September 2025) · a wide sake list; hot shochu (December 2023 and 2024)',
    website: OF, gmaps: gm('祇園おばんざいおりべ'), menu_url: TB,
    notes: '[Obanzai and oden · Gion, up a stair behind Minami-za] A small, homely second-floor counter at the end of an alley near Minami-za, serving about ten daily obanzai from Kyoto vegetables, oden all year round, dashimaki, homemade croquettes and yakitori with a good sake list — open to midnight and happy to take late arrivals. Smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an obanzai izakaya opened in April 2016, aiming to be a "second home" in Kyoto, with about ten handmade obanzai a day from seasonal ingredients and Kyoto vegetables.',
      philosophy: 'To be a "second home" in Kyoto (Tabelog).', specialty: 'Obanzai; oden.',
      anecdotes: [
        { text: 'A December 2023 diner drank the oden broth to the last drop.', source: R + 'B475595944/' },
        { text: 'A September 2025 concert-goer booked for 21:30 because it takes late guests and allows smoking, and had grilled tripe with shochu soda.', source: R + 'B513121397/' },
        { text: 'A July 2025 lunch visitor found the room empty and quiet, near the ZENBI museum.', source: R + 'B510190554/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、東山区大和大路通四条下ル1大和町23-1 花七軒 2F、祇園四条から徒歩6分 (グランベルホテル横の路地)、毎日16:00〜24:00 (L.O. 料理23:30)、不定休、予約可、カード・電子マネー・QR 可、19席 (カウンター7、テーブル、小上がり)、喫煙可、2016年4月12日オープン、京野菜と旬の食材の手作りおばんざい約10種、京都の「第二の我が家」に。口コミ (2023年5月〜2025年12月、英語): 南座の裏の細い路地、階段を上がって靴を脱ぐ、おばんざい3種か5種、一年中おでん、だし巻き、自家製コロッケ、焼鳥、ホルモン焼き、日本酒、遅い時間も受け入れる。',
      confidence: 'medium', sources: [TB, OF, R + 'B465999162/', R + 'B466324181/', R + 'B472232065/', R + 'B472825437/', R + 'B475595944/', R + 'B490017364/', R + 'B498127736/', R + 'B510190554/', R + 'B512432615/', R + 'B513121397/', R + 'B514209657/', R + 'B520438180/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Look for the alley by the Granbell Hotel and climb the stairs; shoes off; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下ル1大和町23-1 花七軒 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.002905, 135.772949), moved 6 m north off kyoto_teppo_gion (1.9 m away); cross-checked: GSI 京都府京都市東山区大和町23番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B472232065/', R + 'B514209657/'],
    price_note: 'No item prices found in the sources.', last_checked: TODAY, items: [
      it('', '', 'Obanzai plate (three or five kinds)', '', 'Obanzai', 'ask', 'no', 'September 2023; February 2025.', 'obanzai'),
      it('', '', 'Assorted oden', '', 'Oden', 'ask', 'no', 'December 2024.', 'oden'),
      it('', '', 'Homemade croquettes', '', 'À la carte', 'no', 'ask', 'August 2025.', 'croquette'),
    ] }, {
    cuisine: '京野菜と旬の食材の手作りおばんざいが毎日約10種 (食べログ)・お通しはおばんざい3種か5種の盛り合わせ (2023年9月、2025年2月)・一年中おでん、7月にも (2024年7月、2023年12月)・だし巻き (2023年・2024年12月)、自家製コロッケ (2025年8月)・焼鳥 (2023年9月)、ホルモン焼き (2025年9月)・日本酒が豊富、焼酎のお湯割り (2023年・2024年12月)',
    neighborhood: '大和大路、南座の裏。祇園四条',
    gf_detail: '要確認。おばんざい、おでん、だし巻きのほか、コロッケや焼鳥もある (2023〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁のおでんとおばんざい、焼鳥、ホルモン焼き (2023〜2025年の口コミ)。',
    notes: '[おばんざいとおでん・祇園、南座の裏の階段の上] 南座近くの路地の奥、階段を上がった家庭的な2階のカウンター。京野菜の日替わりおばんざい約10種、一年中のおでん、だし巻き、自家製コロッケ、焼鳥を日本酒と。深夜0時まで、遅い時間も歓迎。喫煙可。',
  });
}

// ================================================================ Japanese SAKE BAR 日本酒バー 祇園本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043454/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '23:00']);
  put({
    id: 'kyoto_japanese_sake_bar_gion', name: 'Japanese SAKE BAR 日本酒バー 祇園本店', category: 'OMNI',
    lat: 35.00419, lng: 135.772926, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sake with roast beef and small plates (Tabelog; 2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature dish is Goto-beef roast beef (Tabelog; June 2026).',
    hours_raw: 'Mon–Wed and Fri–Sun 14:00–23:00; closed Thursday (Tabelog). Reservations accepted (Tabelog). Cards incl. UnionPay; e-money; QR incl. PayPay (Tabelog). 16 seats with a counter, lit in blue (Tabelog; June 2026). Non-smoking (Tabelog). KONA Building 2F, 2–3 min from Gion-Shijo (Tabelog; April 2026). Opened 25 April 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo — Gion-Shijo',
    cuisine: 'Rare sakes from across Japan paired with freshly carved roast beef of Goto beef, a little-distributed wagyu from Nagasaki\'s Goto Islands, chosen by a Goto-born chef with some 40 years in Kyoto meat kaiseki (Tabelog; June 2026) · daytime drinking from 14:00 (June 2026)',
    website: null, gmaps: gm('Japanese SAKE BAR 日本酒バー 祇園本店'), menu_url: TB,
    notes: '[Sake bar · Gion, rare sake and Goto-beef roast beef] A small blue-lit second-floor bar near Gion-Shijo pouring rare sakes from around Japan with roast beef of Goto beef — a seldom-seen wagyu from Nagasaki — chosen by a Goto-born chef after decades in Kyoto meat kaiseki. Opens at 14:00 for daytime drinking; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), from the Goto Islands, about 40 years in Kyoto meat kaiseki (Tabelog)'], origin: 'Goto Islands, Nagasaki (Tabelog)',
      background: 'Per Tabelog: a sake bar opened in April 2025 pairing roast beef of Goto beef with sake; the beef is chosen by a chef from the Goto Islands who has worked in a Kyoto meat-kaiseki restaurant for about 40 years.',
      philosophy: null, specialty: 'Goto-beef roast beef with sake.',
      anecdotes: [
        { text: 'An April 2026 sake enthusiast found rare and unusual bottles two minutes from Gion-Shijo station.', source: R + 'B525985339/' },
        { text: 'A June 2026 visitor came for daytime drinks in the soft blue light.', source: R + 'B531266828/' },
        { text: 'A June 2026 visitor described the Goto beef as a "phantom wagyu" because so little reaches the market.', source: R + 'B530104489/' },
      ],
      japanese_sources_summary: '食べログ: 日本酒バー、東山区廿一軒町233 KONA ビル 2F、京阪祇園四条駅から徒歩3分、月火水金土日14:00〜23:00、木曜休み、予約可、カード・電子マネー・QR 可、16席、禁煙、2025年4月25日オープン、長崎県五島列島の希少な和牛「五島牛」のローストビーフと日本酒、京都の肉割烹で約40年の五島出身の料理人が選ぶ。口コミ (2026年4月〜6月、英語): 全国の珍しい日本酒、青い照明、昼飲み。',
      confidence: 'low', sources: [TB, R + 'B525985339/', R + 'B530104489/', R + 'B531266828/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask the bar for rare sakes; good for afternoon drinks. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区廿一軒町233 KONAビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; three reviews dated April–June 2026.' },
    pin_source: `Tabelog ${TB} (35.004190, 135.772926); cross-checked: GSI 京都府京都市東山区廿一軒町233番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices found in the sources.', last_checked: TODAY, items: [
      it('', '', 'Goto-beef roast beef', '', 'Food', 'ask', 'no', 'Tabelog; June 2026.', 'roast_beef'),
      it('', '', 'Rare sakes from around Japan', '', 'Sake', 'ask', 'ask', 'April 2026.', 'sake'),
    ] }, {
    cuisine: '全国の珍しい日本酒に、長崎・五島列島の流通の少ない和牛「五島牛」の切りたてのローストビーフ。京都の肉割烹で約40年の五島出身の料理人が選ぶ (食べログ、2026年6月)・14時からの昼飲み (2026年6月)',
    neighborhood: '祇園、四条の南。祇園四条駅',
    gf_detail: '要確認。日本酒とローストビーフ、小皿 (食べログ、2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。看板は五島牛のローストビーフ (食べログ、2026年6月)。',
    notes: '[日本酒バー・祇園、珍しい酒と五島牛のローストビーフ] 祇園四条駅近くの青い照明の小さな2階のバー。全国の珍しい日本酒を、長崎の希少な五島牛のローストビーフと。選ぶのは京都の肉割烹で長年腕をふるった五島出身の料理人。14時から昼飲みも、木曜休み。',
  });
}

// ================================================================ てるの屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017612/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '04:00']);
  put({
    id: 'kyoto_teru_no_ya_kiyamachi', name: 'てるの屋 (Teru no Ya)', category: 'OMNI',
    lat: 35.006747, lng: 135.770178, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled yakitori, salt or sauce, and rice bowls (2011–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori shop (2011–26 reviews).',
    hours_raw: 'Mon and Wed–Sun 18:00–4:00 (last order food 3:00, drinks 3:30); closed Tuesday; hours may change (Tabelog). Cards (JCB, AMEX) and PayPay (Tabelog). 15 seats: a counter of 5 and tables (Tabelog). Smoking allowed (Tabelog; January and October 2025). Tucked at the back of the ground floor of the Kyoto Royal Building on Nishikiyamachi, hard to spot (Tabelog; 2011–20 reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi, south of Sanjo',
    cuisine: 'Charcoal-grilled yakitori served until the small hours (2011–26 reviews) · yakitori by the skewer (February 2011; March 2026) · seseri rice bowl (March 2011); soboro rice to finish (September 2026) · tako-wasabi and other small dishes (June 2024) · ice-cold beer in frosted mugs; imo shochu with hot water (2011; March 2026)',
    website: null, gmaps: gm('てるの屋 木屋町 焼鳥'), menu_url: TB,
    notes: '[Yakitori · Nishikiyamachi, charcoal skewers until 4 am] A small, well-worn yakitori counter hidden at the back of a Kiyamachi building, grilling over charcoal until the early hours: skewers one at a time, tako-wasabi, a seseri bowl or soboro rice to finish, and frosted beer mugs. Reviewed as a late-night standby since 2011. Smoking allowed; closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a yakitori shop on Nishikiyamachi open until 4:00. Reviews from 2011 onward describe a late-night yakitori counter at the back of the Kyoto Royal Building.',
      philosophy: null, specialty: 'Late-night charcoal yakitori.',
      anecdotes: [
        { text: 'A June 2020 visitor wandering Kiyamachi after 1 am, when most places had closed, found it still open.', source: R + 'B427732734/' },
        { text: 'A June 2024 regular was given a free tako-wasabi while the food was delayed on a busy night.', source: R + 'B481322703/' },
        { text: 'A January 2025 New Year\'s Day visitor liked the yakitori but found the room cluttered and smoky.', source: R + 'B498491542/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥、中京区西木屋町南車屋町288 京都ロイヤルビル 1F、三条駅から約330m、月水木金土日18:00〜翌4:00 (L.O. 料理3:00、ドリンク3:30)、火曜休み、カード (JCB、AMEX)・PayPay 可、15席 (カウンター5、テーブル)、喫煙可。口コミ (2011年2月〜2026年9月、英語): ビルの奥で見つけにくい、朝まで開いている焼鳥、炭火、1本から、せせり丼、そぼろご飯、たこわさ、霜のついたジョッキの冷たいビール、芋焼酎のお湯割り、混雑時に料理が遅れることも。',
      confidence: 'medium', sources: [TB, R + 'B112662258/', R + 'B116225705/', R + 'B118347178/', R + 'B427732734/', R + 'B476145465/', R + 'B481322703/', R + 'B498491542/', R + 'B514721036/', R + 'B517774029/', R + 'B522270812/', R + 'B535770898/', R + 'B71921056/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Look for it at the back of the building\'s ground floor; order skewers one at a time; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西木屋町南車屋町288 京都ロイヤルビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006747, 135.770178); cross-checked: GSI 京都府京都市中京区南車屋町288番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522270812/'],
    price_note: 'No item prices found in the sources.', last_checked: TODAY, items: [
      it('', '', 'Yakitori (by the skewer)', '', 'Yakitori', 'ask', 'no', 'March 2026.', 'yakitori'),
      it('', '', 'Soboro rice', '', 'Rice', 'ask', 'no', 'September 2026.', 'soboro'),
      it('', '', 'Tako-wasabi', '', 'Small plates', 'ask', 'no', 'June 2024.', 'takowasa'),
    ] }, {
    cuisine: '深夜まで炭火で焼く焼鳥 (2011〜2026年の口コミ)・焼鳥は1本から (2011年2月、2026年3月)・せせり丼 (2011年3月)、締めにそぼろご飯 (2026年9月)・たこわさなどの小皿 (2024年6月)・霜のついたジョッキの冷たいビール、芋焼酎のお湯割り (2011年、2026年3月)',
    neighborhood: '西木屋町、三条の南',
    gf_detail: '要確認。炭火焼きの焼鳥 (塩かたれ) と丼 (2011〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏の焼鳥の店 (2011〜2026年の口コミ)。',
    notes: '[焼鳥・西木屋町、炭火で朝4時まで] 木屋町のビルの1階奥にひっそりある小さな焼鳥のカウンター。深夜まで炭火で焼く串を1本から、たこわさ、締めのせせり丼やそぼろご飯、霜のついたジョッキのビール。10年以上続く深夜の定番。喫煙可、火曜休み。',
  });
}

save();
