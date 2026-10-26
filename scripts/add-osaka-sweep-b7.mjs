// Osaka sweep (2-mile circle around Dotonbori), batch 7 — ramen phase, nearest first (all OMNI).
//   + 中華そばふじい なんば店 (Shōwa-style shoyu chuka soba with back fat; long queues, closed Tuesdays)
//   + 麺と旨みの神隠し (tonkotsu and back-fat shoyu in the Namba Hips basement; cashless)
//   + 花丸軒 難波・法善寺店 (24 h pork-bone shoyu, free kimchi)
//   + 無限ラーメン 千日前店 (beef-bone and chicken paitan)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 7);

// ================================================================ 中華そばふじい なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27072346/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'http://www.ra-men.co/';
  const n = day(['11:00', '23:30']), late = day(['11:00', '03:00']);
  put({
    id: 'osaka_chuka_soba_fujii_namba', name: '中華そばふじい なんば店 (Chuka Soba Fujii Namba)', category: 'OMNI',
    lat: 34.667559, lng: 135.502339, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-sauce broth; fried rice and kara-age sets.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork back fat, chashu.',
    hours_raw: 'Mon, Wed, Thu, Sun and holidays 11:00–23:30 (L.O. 23:00); Fri, Sat and nights before holidays 11:00–3:00 (L.O. 2:30); closed Tuesdays (Tabelog; the official site also gives Tuesday as the closing day). No reservations: take a number from the queue system at the shop and get a call, text or LINE alert when your turn nears. It may stop taking customers before last order when busy.',
    hours: { 0: n, 1: [], 2: n, 3: n, 4: late, 5: late, 6: n }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-3-14, just south of Dotonbori',
    cuisine: 'Shōwa-style shoyu chuka soba with adjustable back fat · nira (garlic-chive) soba since July 2026 · fried rice · ramen, kara-age and fried rice set ¥1,100 · free egg · garlic powder and vinegar on the counter · queue-ticket system',
    website: OWN, gmaps: gm('中華そばふじい なんば店'), menu_url: null,
    notes: "[Ramen · the Shōwa-style chuka soba with the long queue] The Namba shop of Fujii, a small chain selling \"nostalgic Shōwa flavour\" chuka soba from Tokyo to Osaka. A sharp, easy-drinking shoyu broth comes with back fat you can scale down, and one diner was reminded of Onomichi ramen. Watch the fried rice being made at the counter: fluffy, and one regular's favourite anywhere. The ramen, kara-age and fried rice set is a generous ¥1,100 (October 2026). Nira soba piled with garlic chives arrived on 1 July 2026, served with a perforated ladle to catch them. Add garlic powder or vinegar halfway. Queues are the catch: 40 minutes to an hour and a half in October 2026, once 45 groups ahead on a Saturday. Take a number at the shop and wander until your phone pings. Closed Tuesdays; open to 3 am on Fridays and Saturdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 April 2013 (Tabelog)', background: 'Chuka Soba Fujii (ra-men.co) lists shops in Shinbashi and Shin-Nakano in Tokyo and Ashiharabashi, Namba and Noda-Hanshin in Osaka.', philosophy: '「昔懐かし昭和の味」 — nostalgic Shōwa-era flavour (official site).', specialty: 'Shoyu chuka soba; fried rice.',
      anecdotes: [
        { text: '"I decided to try the newly released Nira Soba, available from July 1, 2026. I chose the regular broth, very firm noodles, and added an egg (free of charge)… The ladle had holes in it, allowing me to enjoy all the nira." — October 2026, after a one-hour wait.', source: R + 'B506564418/' },
        { text: '"I went on a Saturday at 11:30 AM and saw there were 45 groups ahead of me with a 120-minute wait… I ordered my ramen with less back fat, so it wasn\'t too heavy." — October 2026; called after about 50 minutes.', source: R + 'B537536400/' },
      ],
      japanese_sources_summary: '食べログ: 中華そばふじい なんば店、大阪市中央区難波1-3-14、06-6282-7301、22席、月水木日祝11:00〜23:30(L.O.23:00)、金土祝前日11:00〜翌3:00(L.O.2:30)、火曜定休、予約不可(当日店頭の順番待ちシステム、電話かメールで呼び出し)、混雑時は早じまいあり、カード・QR決済可、禁煙、2013年4月11日開店。公式(ra-men.co): 「昔懐かし昭和の味」、新橋店・新中野店(東京)、芦原橋店・なんば店(火曜定休)・野田阪神店(大阪)。2025〜2026年の口コミ: 順番待ちで1時間後にショートメール、券売機、2026年7月1日からのニラそば、穴あきのレンゲ、玉子無料、麺かため、ガーリックパウダー、炒飯が最高、カウンターで調理が見える、ねぎ多め、酢、1時間半待ちの祝日、ラーメン・唐揚げ・炒飯のセット1,100円、尾道ラーメンのような醤油のキレ、土曜11:30で45組待ち・LINE連携で約50分、背脂少なめであっさり、80分待ち、普通という声、店員に無視されたとの声、雨の夕方は1組待ち。',
      confidence: 'medium', sources: [TB, OWN, R + 'B506564418/', R + 'B537199011/', R + 'B537536400/', R + 'B537703903/', R + 'B538070436/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['lard_seabura'], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Firmness can be chosen ("very firm", October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'chuka soba'],
      signature_bowl: '中華そば (chuka soba); ramen, kara-age and fried rice set ¥1,100 (October 2026); nira soba from 1 July 2026.',
      chashu: 'Chashu (not described in detail).',
      notable_toppings: ['pork back fat (adjustable)', 'green onion (extra on request)', 'garlic chives (nira soba)', 'free egg', 'garlic powder', 'vinegar'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Back fat; chashu.' },
      pantheon: 'Namba\'s queue-ticket chuka soba: a sharp, easy Shōwa-style shoyu under adjustable back fat, best with the counter-cooked fried rice.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537703903/', '"A soy sauce-based Chuka Soba that was easy to eat."'],
        oiliness: [R + 'B537536400/', 'Back fat can be reduced: "I ordered my ramen with less back fat, so it wasn\'t too heavy."'],
        clarity: [R + 'B537199011/', '"Reminded me of Onomichi ramen" — not described as clear or cloudy; mid-scale (inferred).'],
        tare_strength: [R + 'B538070436/', '"The soy sauce flavor was sharp"; "a nice kick of soy sauce" (' + R + 'B537199011/).'],
        noodle_firmness: [R + 'B506564418/', 'Firmness is chosen ("very firm noodles").'],
        aroma_punch: [R + 'B506564418/', 'Garlic powder added at the counter ("I added a generous amount of garlic powder"); mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537703903/', R + 'B537536400/', R + 'B538070436/', R + 'B537199011/', R + 'B506564418/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue-ticket system with phone/LINE alerts; ticket machine inside.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-3-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目3番14号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537199011/', R + 'B506564418/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('中華そば', 'chūka soba', 'Chuka soba (shoyu ramen with back fat)', '', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('ニラそば', 'nira soba', 'Garlic-chive soba (from 1 July 2026)', '', 'Ramen', 'no', 'no', 'October 2026.', 'nira_soba'),
      it('', '', 'Ramen, kara-age and fried rice set', '¥1,100', 'Sets', 'no', 'no', 'October 2026.', 'set'),
      it('炒飯', 'chāhan', 'Fried rice', '', 'Rice', 'no', 'no', 'May 2025, October 2026.', 'chahan'),
    ] }, {
    cuisine: '背脂を調整できる昭和の醤油の中華そば・2026年7月からのニラそば・炒飯・ラーメン、唐揚げ、炒飯のセット1,100円・玉子無料・カウンターのガーリックパウダーと酢・順番待ちシステム',
    neighborhood: '難波1-3-14、道頓堀のすぐ南',
    gf_detail: 'グルテンフリーではありません。醤油スープに小麦の麺。炒飯や唐揚げのセットも。',
    vegan_detail: 'ヴィーガンではありません。豚の背脂、チャーシュー。',
    notes: '[ラーメン・行列のできる昭和の中華そば] 東京から大阪まで「昔懐かし昭和の味」の中華そばを出すふじいのなんば店。キレのある飲みやすい醤油スープに背脂(少なめにもできます)で、尾道ラーメンを思い出したという客も。カウンターで作る炒飯はふっくらで、一番好きという常連も。ラーメン、唐揚げ、炒飯のセットは1,100円とお得(2026年10月)。2026年7月1日からは、ニラたっぷりのニラそばと、ニラをすくう穴あきのレンゲ。途中でガーリックパウダーや酢を。難点は行列で、2026年10月は40分から1時間半、土曜に45組待ちの日も。店頭で番号を取り、スマホの通知まで散歩を。火曜定休、金土は朝3時まで。',
  });
}

// ================================================================ 麺と旨みの神隠し
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146400/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_men_to_umami_no_kamikakushi', name: '麺と旨みの神隠し (Men to Umami no Kamikakushi)', category: 'OMNI',
    lat: 34.667599, lng: 135.500668, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso and shoyu seasonings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, back fat, chashu.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–22:00 (Tabelog; check before visiting). Cashless: 2026 reviewers paid by card or PayPay and saw cash refused, although Tabelog lists cards as not accepted. Drinks are alcohol only (July 2026). No restroom nearby (July 2026).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-8-16, Namba Hips B1F, in the underground passage beside a pachinko parlour — handy for Nankai Namba and OCAT',
    cuisine: 'Tonkotsu and back-fat shoyu ramen · miso tonkotsu ¥1,550 · back-fat shoyu ¥1,350 · one big slab of chashu · large noodles +¥150 · tsukimi chashu rice bowl ¥500 · counter only, one cook · cashless',
    website: null, gmaps: gm('麺と旨みの神隠し'), menu_url: null,
    notes: "[Ramen · a basement counter by Nankai Namba] A small counter along a basement corridor of the Namba Hips building, next to a pachinko parlour, since December 2024. It is usually run by one person, so expect to wait while earlier orders go out. Two lines: a tonkotsu with one big slab of tender chashu, looking thick but drinking easily, and a back-fat shoyu with black pepper that is lighter than it looks. The umami miso tonkotsu (¥1,550 in May 2026) gets an accent from marinated onions, and the back-fat shoyu was ¥1,350. Add a tsukimi chashu rice bowl (¥500). The thin noodles run soft, which may divide people, and one diner tasted oden in the broth. It's cashless (card or PayPay), the only drinks are alcohol, and there's no restroom nearby. Often quiet, with no queue (September 2026).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 December 2024 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Tonkotsu and back-fat shoyu ramen.',
      anecdotes: [
        { text: '"Kamin Umami Miso Tonkotsu Ramen JPY 1550… the acidity of the marinated onions adds a great accent to the rich soup!… Kagayaki Back Fat Shoyu Ramen JPY 1350." — May 2026.', source: R + 'B528996470/' },
        { text: '"It\'s a small place with only a counter along the corridor, and since it\'s run by a single staff member, I had to wait a bit after being seated." — August 2026; paid by PayPay.', source: R + 'B534306241/' },
      ],
      japanese_sources_summary: '食べログ: 麺と旨みの神隠し、大阪市中央区難波1-8-16 ナンバヒップス B1F、毎日11:00〜15:00・17:00〜22:00、予約不可、カード・電子マネー・QR決済不可と記載、禁煙、2024年12月28日開店。2026年の口コミ: 完全キャッシュレス(カードとPayPayのみ、現金で払えなかった客も)、OCATと南海の乗り換えに、豚骨ラーメンにやわらかいチャーシュー、おしゃれなカウンター、旨み味噌豚骨1,550円(酢漬け玉ねぎの酸味)、背脂醤油1,350円(黒胡椒、見た目より軽い)、麺がやわらかめで好みが分かれる、大盛150円、特製だれの月見チャーシュー丼500円、大根やこんにゃくのおでんのような味、飲み物はお酒のみ、パチンコ店の前、スタッフ1人で愛想がないとの声と親切という声、近くにトイレなし、廊下沿いのカウンター、大きなチャーシュー1枚、細麺、メンマ・豚・ねぎ。',
      confidence: 'medium', sources: [TB, R + 'B528996470/', R + 'B534306241/', R + 'B532421945/', R + 'B535192759/', R + 'B535761193/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu', 'miso'], aroma_oil: ['lard_seabura'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, straight noodles; "softer than I expected" (May 2026); "resistant to getting soggy" (September 2026). Large +¥150.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Umami miso tonkotsu ramen ¥1,550; back-fat shoyu ramen ¥1,350 (May 2026).',
      chashu: 'One large slab ("quite substantial", August 2026).',
      notable_toppings: ['marinated onion (miso tonkotsu)', 'black pepper (shoyu)', 'menma', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu; back fat.' },
      pantheon: 'The one-cook basement counter by Nankai Namba: a tonkotsu that looks heavy and drinks easy, or a back-fat shoyu lifted with black pepper.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 2, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B528996470/', '"A creamy and rich flavor, yet it\'s not too heavy"; "looked thick at first glance, but it was actually quite manageable" (' + R + 'B534306241/).'],
        oiliness: [R + 'B528996470/', 'Back-fat shoyu: "much lighter than it looks"; extra fat can be ordered (' + R + 'B535192759/).'],
        clarity: [R + 'B528996470/', 'Creamy tonkotsu and a back-fat shoyu — no clear broth described; placed low (inferred).'],
        tare_strength: [R + 'B532421945/', '"The soup had a flavor reminiscent of oden ingredients" — strongly seasoned for this diner; mid-scale.'],
        noodle_firmness: [R + 'B528996470/', '"The noodles to be softer than I expected, which might divide opinions!"'],
        aroma_punch: [R + 'B528996470/', '"The black pepper adds a nice touch"; marinated onion acidity in the miso version.'],
      },
      confidence: 'medium', sources: [R + 'B528996470/', R + 'B534306241/', R + 'B532421945/', R + 'B535192759/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; cashless; one person cooking and serving.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-8-16 ナンバヒップス B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目8番16号 (go) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528996470/'],
    price_note: 'Prices from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Umami miso tonkotsu ramen', '¥1,550', 'Ramen', 'no', 'no', 'May 2026.', 'miso_tonkotsu'),
      it('', '', 'Back-fat shoyu ramen', '¥1,350', 'Ramen', 'no', 'no', 'May 2026.', 'seabura_shoyu'),
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'tonkotsu'),
      it('大盛', 'ōmori', 'Large noodles', '¥150', 'Extras', 'no', 'no', 'May 2026.', 'omori'),
      it('', '', 'Tsukimi chashu rice bowl with special sauce', '¥500', 'Rice', 'no', 'no', 'May 2026.', 'chashu_don'),
    ] }, {
    cuisine: '豚骨と背脂醤油のラーメン・味噌豚骨1,550円・背脂醤油1,350円・大きなチャーシュー1枚・大盛150円・月見チャーシュー丼500円・カウンターのみで1人営業・キャッシュレス',
    neighborhood: '難波1-8-16 ナンバヒップスB1F、パチンコ店横の地下通路。南海なんばやOCATから便利',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌や醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、背脂、チャーシュー。',
    notes: '[ラーメン・南海なんばそばの地下のカウンター] 2024年12月から、ナンバヒップスの地下通路沿い、パチンコ店の隣にある小さなカウンター。たいてい1人で切り盛りしているので、前の客の料理が出るまで待つことも。豚骨は大きなやわらかいチャーシューが1枚で、見た目は濃いのに飲みやすく、背脂醤油は黒胡椒が効いて見た目より軽め。旨み味噌豚骨(2026年5月で1,550円)は酢漬けの玉ねぎがアクセントで、背脂醤油は1,350円。月見チャーシュー丼(500円)も。細麺はやわらかめで好みが分かれそうで、おでんのような味がしたという客も。キャッシュレス(カードかPayPay)、飲み物はお酒のみ、近くにトイレはありません。2026年9月は空いていて待ちなし。',
  });
}

// ================================================================ 花丸軒 難波・法善寺店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002618/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://arakawa-fs.jp/shop/%E8%8A%B1%E4%B8%B8%E8%BB%92-%E9%9B%A3%E6%B3%A2%E3%83%BB%E6%B3%95%E5%96%84%E5%AF%BA%E5%BA%97/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_hanamaruken_namba_hozenji', name: '花丸軒 難波・法善寺店 (Hanamaruken Namba Hozenji)', category: 'OMNI',
    lat: 34.667914, lng: 135.503067, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a pork-bone soy broth; champon, gyoza, fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, pork toppings, naruto fish cake.',
    hours_raw: 'Open 24 hours, every day (official page: 24時間営業・年中無休; Tabelog lists a year-end closure). Ticket machine taking various payment methods (August 2026). Restroom up narrow stairs on the 2nd floor.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-2-1, on the shopping street by Hōzenji — 5 min from Namba or Nippombashi Stn',
    cuisine: 'Pork-bone shoyu ramen · signature "torokotsu" ramen with two big pieces of pork · free kimchi · garlic tonkotsu (new 2026) · champon · fried rice · gyoza · 24 h, 17 seats',
    website: OWN, gmaps: gm('花丸軒 難波・法善寺店'), menu_url: null,
    notes: "[Ramen · Minami's 24-hour pork-bone shoyu with free kimchi] A 17-seat, mostly counter shop on the shopping street by Hōzenji, open 24 hours and run by Arakawa Food Service. For years it was a late-night ritual for locals (one did \"the sauna at Amza, then Hanamaruken\"). The base is a pork-bone soy broth, rich but not heavy, with medium-thin noodles. The signature torokotsu ramen comes with two big pieces of tender pork, nori, menma, naruto and green onion. Free kimchi on the counter cuts the richness. Newer additions include garlic tonkotsu ramen (April 2026) and champon, and the fried rice has a following. Regulars say the old queues have eased, the crowd is now largely overseas visitors, and the regular bowl tastes lighter than before. The restroom is up narrow stairs.",
    chef_bio: { chef_name: null, roles: [], origin: 'Namba-Hōzenji branch (official page)', background: 'Hanamaruken shop of 株式会社アラカワフードサービス (Arakawa Food Service), which runs ramen shops and franchises and a meat wholesale business (arakawa-fs.jp).', philosophy: '「こだわりの独自レシピで作るラーメンを24時間・年中無休でご提供」 (official page).', specialty: 'Torokotsu ramen; fried rice; gyoza.',
      anecdotes: [
        { text: '"My personal go-to was the golden route of \'Amza for the sauna, then Hanamaru Ken for ramen.\'… I think the free kimchi is a signature touch of Hanamaru Ken." — August 2026.', source: R + 'B534347729/' },
        { text: '"It used to have long lines, but recently it feels much calmer… The regular ramen was lighter and had a more balanced flavor than before." — September 2026.', source: R + 'B536398058/' },
      ],
      japanese_sources_summary: '公式(アラカワフードサービス): 花丸軒 難波・法善寺店、〒542-0076 大阪市中央区難波1-2-1、06-6213-0131、24時間営業・年中無休、地下鉄なんば駅・近鉄/阪神大阪なんば駅・日本橋駅から徒歩5分、17席(カウンター15・テーブル2)、完全禁煙、カード・電子マネー可、こだわりの独自レシピのラーメン、チャーハンや餃子も人気。食べログ: 年末年始休みと記載。2026年の口コミ: 何年も通う24時間の店、2階のトイレは階段が狭い、いろいろな支払いに対応した券売機、インバウンド客が多い、新しいにんにく豚骨ラーメン(4月)、豚骨醤油ベース、濃厚だが重くない、中細麺、とろけるチャーシュー、アムザのサウナの後の花丸軒、とろ骨ラーメン(大きな豚肉が2つ)、海苔・メンマ・なると・ねぎ、無料のキムチ、白ご飯、行列が減った、ちゃんぽん、前よりあっさり、熱々ではない、チャーハン。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534347729/', R + 'B536398058/', R + 'B532442534/', R + 'B526344859/', R + 'B536650791/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Medium-thin noodles (July 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'とろ骨ラーメン (torokotsu ramen) with two big pieces of pork (August 2026).',
      chashu: 'Tender chashu with "a melt-in-your-mouth texture" (July 2026); big torokotsu pieces on the signature bowl.',
      notable_toppings: ['torokotsu pork', 'nori', 'menma', 'naruto', 'green onion', 'free kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Minami\'s all-night pork-bone shoyu: rich without weight, two big pieces of torokotsu pork, and free kimchi to cut through it.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B532442534/', '"The rich flavor of the tonkotsu broth was satisfying without being too heavy"; "rich and creamy" (' + R + 'B536650791/).'],
        oiliness: [R + 'B532442534/', '"Smooth and easy to drink" — not described as oily; mid-scale (inferred).'],
        clarity: [R + 'B536650791/', '"Rich and creamy" tonkotsu — opaque, though a soy base (' + R + 'B526344859/).'],
        tare_strength: [R + 'B526344859/', '"The main ramen is a pork bone soy sauce base"; lighter than before (' + R + 'B536398058/).'],
        noodle_firmness: [R + 'B532442534/', 'Medium-thin noodles; no firmness described — mid-scale (inferred).'],
        aroma_punch: [R + 'B536398058/', 'The regular bowl is "lighter and had a more balanced flavor than before"; a garlic tonkotsu version exists (' + R + 'B526344859/).'],
      },
      confidence: 'medium', sources: [R + 'B532442534/', R + 'B534347729/', R + 'B536398058/', R + 'B526344859/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; many overseas customers.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0076 大阪府大阪市中央区難波1-2-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official page and Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目2番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534347729/', R + 'B526344859/'],
    price_note: 'No prices captured; dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen (pork-bone shoyu)', '', 'Ramen', 'no', 'no', 'August 2026.', 'ramen'),
      it('とろ骨ラーメン', '', 'Torokotsu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'torokotsu'),
      it('', '', 'Garlic tonkotsu ramen', '', 'Ramen', 'no', 'no', 'New, April 2026.', 'garlic_tonkotsu'),
      it('ちゃんぽん', 'chanpon', 'Champon', '', 'Noodles', 'no', 'no', 'September 2026.', 'champon'),
      it('炒飯', 'chāhan', 'Fried rice', '', 'Rice', 'no', 'no', 'September 2026.', 'chahan'),
    ] }, {
    cuisine: '豚骨醤油ラーメン・大きな豚肉が2つのとろ骨ラーメン・無料のキムチ・にんにく豚骨(2026年の新作)・ちゃんぽん・炒飯・餃子・24時間、17席',
    neighborhood: '難波1-2-1、法善寺そばの商店街。なんば駅・日本橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。豚骨醤油スープに小麦の麺。ちゃんぽん、餃子、炒飯も。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、豚肉、なると。',
    notes: '[ラーメン・ミナミの24時間の豚骨醤油と無料キムチ] 法善寺そばの商店街にある、ほぼカウンターの17席の店で、24時間営業、アラカワフードサービスの運営。長年、地元の夜の定番で(「アムザのサウナの後は花丸軒」という客も)。豚骨醤油のスープは濃厚でも重くなく、中細麺。看板のとろ骨ラーメンには大きなやわらかい豚肉が2つに、海苔、メンマ、なると、ねぎ。カウンターの無料キムチで口直しを。2026年4月のにんにく豚骨ラーメンやちゃんぽんも加わり、炒飯にもファンがいます。昔の行列は落ち着き、今は海外からの客が多く、普通のラーメンは前よりあっさりしたという常連も。トイレは狭い階段の上です。',
  });
}

// ================================================================ 無限ラーメン 千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27137776/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:00']);
  put({
    id: 'osaka_mugen_ramen_sennichimae', name: '無限ラーメン 千日前店 (Mugen Ramen Sennichimae)', category: 'OMNI',
    lat: 34.667831, lng: 135.503129, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce kaeshi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone and chicken broth, back fat, chashu.',
    hours_raw: 'Daily 11:00–22:00 (Tabelog; check before visiting). Cards (VISA) and electronic payments accepted, per Tabelog and a September 2026 review.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-2-2, on the Sennichimae side by Hōzenji',
    cuisine: 'Creamy, frothy beef-bone and chicken paitan with shoyu kaeshi and back fat · thin straight noodles · two kinds of chashu · tonkotsu ramen · limited bowls over ¥2,000 · strip-loin rice bowl sets · mala chili condiment',
    website: null, gmaps: gm('無限ラーメン 千日前店'), menu_url: null,
    notes: "[Ramen · beef-bone white soup on Sennichimae] A ramen shop since 2023 on the Sennichimae side of Hōzenji, full of overseas visitors even on weekdays. The draw is a frothy beef-bone and chicken white soup: rich and creamy but easy to finish, built on chicken carcass and beef knuckle with a soy kaeshi and back-fat finish over thin straight noodles. It comes with two chashu, one charred and one tender, plus a runny seasoned egg, menma and green onion. There's also a lighter tonkotsu and a mala-style chili condiment on the table. Prices are high: a limited bowl topped ¥2,000 in September 2026, and the strip-loin rice bowl in the set ran salty. One diner flagged cleanliness. Cards and electronic payment accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 August 2023 (Tabelog)', background: 'Sennichimae branch (Tabelog listing name); no source names the operator.', philosophy: null, specialty: 'Beef-bone paitan ramen.',
      anecdotes: [
        { text: '"The broth was covered in fine bubbles, conveying its richness even at first glance. The chashu (braised pork) came in two varieties: one with a beautifully charred surface and another that was tender and moist." — October 2026.', source: R + 'B537207590/' },
        { text: '"The limited-edition ramen surprisingly costs over JPY 2000. The beef bone broth was incredibly delicious, and I found myself drinking it all." — September 2026.', source: R + 'B535301655/' },
      ],
      japanese_sources_summary: '食べログ: 無限ラーメン 千日前店、大阪市中央区難波1-2-2、毎日11:00〜22:00、カード可(VISA)、2023年8月12日開店。2026年の口コミ(9〜10月): 外国人客が多く値段が高め、限定ラーメンは2,000円超、牛骨スープがおいしい、セットのロース丼はしょっぱめ、平日でも海外の客ばかり、サイドメニューが豊富、電子決済可、牛骨白湯の濃厚でクリーミーなスープ、食べやすい、清潔さが気になるとの声、豚骨ラーメンは味が強すぎない、麺はやや硬め、麻辣風の辛い調味料、泡立ったクリーミーなスープ、炙りとしっとりの2種のチャーシュー、半熟の味玉、ねぎ、メンマ、醤油のかえし、鶏ガラと牛ゲンコツ、背脂の香味油、細いストレート麺。',
      confidence: 'medium', sources: [TB, R + 'B537207590/', R + 'B535301655/', R + 'B535468142/', R + 'B537621556/', R + 'B535719038/', R + 'B535394883/'] },
    ramen: {
      broth_base: ['beef', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['lard_seabura'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles (October 2026); "a bit on the firmer side" in the tonkotsu (September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Beef-bone paitan ramen (September–October 2026).',
      chashu: 'Two kinds: one charred, one tender and moist (October 2026).',
      notable_toppings: ['seasoned egg', 'menma', 'green onion', 'mala chili condiment'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone and chicken broth.' },
      pantheon: 'Sennichimae\'s frothy beef-bone white soup: chicken carcass and beef knuckle whipped creamy under back fat, with charred and tender chashu side by side.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535468142/', '"The rich flavor of the beef bone and the creamy white broth… Despite its richness, it was easy to eat."'],
        oiliness: [R + 'B537621556/', 'Finishing oil: pork back fat; not described as greasy — mid-scale (inferred).'],
        clarity: [R + 'B537207590/', '"Frothy, creamy soup… covered in fine bubbles" — opaque paitan.'],
        tare_strength: [R + 'B537621556/', 'Kaeshi: soy sauce; one diner found it "raising my blood pressure" (' + R + 'B535301655/).'],
        noodle_firmness: [R + 'B535719038/', '"The noodles were a bit on the firmer side, which I liked" (tonkotsu).'],
        aroma_punch: [R + 'B535719038/', 'A mala-flavoured spicy condiment on the table; no strong aroma described — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535468142/', R + 'B537207590/', R + 'B537621556/', R + 'B535719038/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly overseas customers; electronic payment accepted.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-2-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目2番2号 (go) 0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535301655/'],
    price_note: 'Only an "over ¥2,000" figure for a limited bowl (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Beef-bone paitan ramen', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'gyu_paitan'),
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'tonkotsu'),
      it('', '', 'Limited-edition ramen', '', 'Ramen', 'no', 'no', 'Over ¥2,000, September 2026.', 'limited'),
      it('', '', 'Strip-loin rice bowl (set)', '', 'Rice', 'no', 'no', 'September 2026.', 'loin_don'),
    ] }, {
    cuisine: '醤油のかえしと背脂の、泡立ったクリーミーな牛骨と鶏の白湯・細いストレート麺・2種のチャーシュー・豚骨ラーメン・2,000円超の限定・ロース丼のセット・麻辣風の辛い調味料',
    neighborhood: '難波1-2-2、法善寺そばの千日前側',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のかえし。',
    vegan_detail: 'ヴィーガンではありません。牛骨と鶏のスープ、背脂、チャーシュー。',
    notes: '[ラーメン・千日前の牛骨白湯] 2023年から法善寺の千日前側にあるラーメン店で、平日も海外からの客でいっぱい。名物は泡立った牛骨と鶏の白湯で、濃厚でクリーミーなのに飲み干せる一杯。鶏ガラと牛ゲンコツに醤油のかえし、背脂の香味油、細いストレート麺。チャーシューは炙りとしっとりの2種で、半熟の味玉、メンマ、ねぎ。あっさりめの豚骨や、卓上の麻辣風の辛い調味料も。値段は高めで、2026年9月の限定は2,000円超、セットのロース丼はしょっぱめだったという声。清潔さが気になったという客も。カードと電子決済可。',
  });
}

save();
