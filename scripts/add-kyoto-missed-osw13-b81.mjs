// Kyoto priority (kyoto-missed), worker osw13, batch 81 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 出逢ひ茶屋 おせん, 松本酒場, 食酒処土筆, uru coffee.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-81');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005788', 'too thin to verify: Switch FORUM (Pontocho bar) has no Tabelog review after September 2022 and only sparse ones before; no 2025–26 source found');

// ================================================================ 出逢ひ茶屋 おせん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000688/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yagenbori.co.jp/shop/osen/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_deai_chaya_osen', name: '出逢ひ茶屋 おせん (Deai Chaya Osen)', category: 'OMNI',
    lat: 35.006285, lng: 135.770003, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: nama-fu and eggplant miso dengaku, tempura, white-miso grilled fish and soy-based obanzai (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, fish, conger eel and hamo (2024–2026 reviews).',
    hours_raw: 'Tabelog: 17:00–22:00 (last entry 21:00, last order 21:30, since 1 February 2025); closed Wednesday. Book — small and popular, though calling on the day can work (June 2025); some dishes sell out by 19:00 (February 2025). 25 seats with a counter and sunken seating. Non-smoking. Children welcome; take-away. Cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR. Down a lane west of Kiyamachi at Takoyakushi.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi–Takoyakushi — 6 min walk from Hankyu Kawaramachi',
    cuisine: 'Kyoto obanzai and seasonal plates with sake, from the やげんぼり group (official site; 2024–2026 reviews) · obanzai in courses or à la carte; white-miso grilled fish; nama-fu and eggplant miso dengaku; simmered anago; sawara (2025–2026) · seasonal: hamo and corn tempura in summer; matsutake in a clay pot and ebi-imo in autumn (2025–2026) · a sake tasting set (June 2026)',
    website: SITE, gmaps: gm('出逢ひ茶屋 おせん 木屋町'), menu_url: SITE,
    notes: '[Obanzai · Kiyamachi-Takoyakushi, Kyoto home cooking with sake] A small, popular obanzai house off Kiyamachi from the やげんぼり group: Kyoto-style small dishes, white-miso fish and nama-fu dengaku, hamo tempura in summer and matsutake in autumn, with a sake flight. Book; good dishes sell out early. Several diners find it a bit pricey (May 2026; March 2026). Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; one of six やげんぼり group shops (official site)'], origin: null,
      background: 'Per the group site, おせん is one of the やげんぼり group\'s six Kyoto shops — 花見小路やげんぼり, 出逢ひ茶屋おせん, しぐれ茶屋侘助, 祇をん う桶や う, 花遊小路 江戸川 and 御二九と八さい はちべー; 侘助, う桶や う and はちべー are already in this app. Reviewers in 2024–2026 describe a cosy room where solo diners chat with friendly counter staff, and one was sent here by a former Osen cook who had run another obanzai shop (February 2025).',
      philosophy: null,
      specialty: 'Obanzai; nama-fu dengaku.',
      anecdotes: [
        { text: 'June 2025: "Even if you think it\'s impossible to make a reservation here, it\'s often worth calling to check."', source: R + 'B484494716/' },
        { text: 'May 2026: "The prices are a bit on the higher side, but the flavors are guaranteed to impress."', source: R + 'B528876943/' },
        { text: 'February 2025: "by 7 PM, some of the recommended dishes had already run out."', source: R + 'B290792480/' },
      ],
      japanese_sources_summary: 'やげんぼりグループの公式サイト: 花見小路やげんぼり、出逢ひ茶屋おせん、しぐれ茶屋侘助、祇をん う桶や う、花遊小路 江戸川、御二九と八さい はちべーの6店。食べログ: 出逢ひ茶屋 おせん、日本料理、中京区木屋町通蛸薬師西入る、阪急河原町駅から徒歩6分、月火木 17:00〜22:00・金土日 17:00〜23:00 (2025年2月1日から22時閉店、最終入店21時、L.O. 21:30)、水曜休み、予約可、25席、カウンター・掘りごたつ、禁煙、子供可、持ち帰り、カード可、電子マネー・QR不可。口コミ (2024年11月〜2026年8月、英語): 京のおばんざい、白味噌の焼き魚、生麩となすの味噌田楽、穴子の煮物、鰆、夏は鱧ととうもろこしの天ぷら、秋は松茸の土瓶と海老芋、日本酒の飲み比べ、予約がおすすめ (当日電話も可)、19時には品切れも、一人でもカウンターで楽しめる、値段は少し高めという声。',
      confidence: 'medium', sources: [SITE, 'https://www.yagenbori.co.jp/', TB, R + 'B290792480/', R + 'B484494716/', R + 'B506319714/', R + 'B508717404/', R + 'B513568702/', R + 'B516376196/', R + 'B518468782/', R + 'B524847598/', R + 'B527825035/', R + 'B528277522/', R + 'B528876943/', R + 'B534496013/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and popular; book; solo-friendly counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通蛸薬師西入る',
    existence: { status: 'confirmed', checked: TODAY, note: 'Group site lists the shop; Tabelog reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006285, 135.770003); the address gives no town or lot, so GSI cannot cross-check it — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513568702/'],
    price_note: 'No prices in the sources; about ¥5,000–10,000 a head (2024–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Nama-fu miso dengaku', null, 'Obanzai', 'no', 'no', 'September 2025; May 2026.', 'namafu'),
      it('', '', 'White-miso grilled fish (saikyo-yaki)', null, 'Grilled', 'no', 'no', 'September 2025.', 'saikyoyaki'),
    ] }, {
    cuisine: 'やげんぼりグループの、日本酒と京のおばんざいと季節の料理 (公式サイト、2024〜2026年の口コミ)・コースや単品のおばんざい、白味噌の焼き魚、生麩となすの味噌田楽、穴子の煮物、鰆 (2025〜2026年)・夏は鱧ととうもろこしの天ぷら、秋は松茸の土瓶と海老芋 (2025〜2026年)・日本酒の飲み比べ (2026年6月)',
    neighborhood: '木屋町蛸薬師。阪急河原町駅から徒歩6分',
    gf_detail: 'グルテンフリーではない: 生麩やなすの味噌田楽、天ぷら、白味噌の焼き魚、醤油のおばんざい (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 出汁のおばんざい、魚、穴子、鱧 (2024〜2026年の口コミ)。',
    notes: '[おばんざい・木屋町蛸薬師、日本酒と京の家庭料理] 木屋町の路地にある、やげんぼりグループの小さな人気のおばんざいの店。京のおばんざい、白味噌の焼き魚、生麩田楽、夏は鱧の天ぷら、秋は松茸を日本酒の飲み比べとともに。予約を。人気の料理は早く売り切れる。少し高めという声も (2026年5月、3月)。水曜休み。',
  });
}

// ================================================================ 松本酒場
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26029896/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_matsumoto_sakaba_gion', name: '松本酒場 (Matsumoto Sakaba)', category: 'OMNI',
    lat: 35.003106, lng: 135.772443, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based grills and izakaya dishes (2022–2026 reviews); no allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: straw-grilled yellowtail, sashimi, yakitori, smoked cod roe (2022–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 17:30–24:00; closed Sunday. Book — often full, even on weekdays (2022–2024 reviews). Mostly counter seats, about two staff; food can be slow (July 2024). Smoking allowed (Tabelog). Cards (JCB, AMEX, Diners). At the end of a narrow alley behind Minamiza off Yamato-oji, hard to find. Opened 11 May 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Yamato-oji below Shijo — behind Minamiza, 4 min walk from Gion-Shijo',
    cuisine: 'A small alley izakaya of fish and grills, featured on TV for its straw-grilled yellowtail (2022–2026 reviews) · straw-grilled buri and salted buri tataki; sashimi; grilled fish; hamo during Gion Matsuri (2024–2026) · yakitori and chicken dishes; smoked tarako; asparagus served campfire-style; grilled vegetables; silky potato salad; edamame (2022–2026) · sake from Kyoto, Shiga and Nara; draught Heineken; highballs',
    website: null, gmaps: gm('松本酒場 祇園 大和町'), menu_url: null,
    notes: '[Izakaya · Gion behind Minamiza, straw-grilled yellowtail] A hidden counter izakaya at the end of an alley behind Minamiza: thick straw-seared yellowtail, sashimi and grilled fish, yakitori, smoked cod roe and a silky potato salad, with Kansai sake. Often full — book; service can be slow (July 2024). Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 11 May 2017 (Tabelog). Reviewers from 2022 to 2026 describe a casual, hideaway counter with about two staff grilling in front of guests, a travel-TV appearance featuring the grilled yellowtail (August 2024), and a crowd that books it out.',
      philosophy: null,
      specialty: 'Straw-grilled yellowtail.',
      anecdotes: [
        { text: 'July 2024: "It\'s delicious, but unfortunately, the time it takes to serve the dishes is disappointing."', source: R + 'B488857370/' },
        { text: 'March 2023: "It\'s best to have someone take you there for the first time since it\'s a bit tricky to find."', source: R + 'B466306147/' },
      ],
      japanese_sources_summary: '食べログ: 松本酒場、居酒屋、東山区大和大路通四条下ル大和町18-18、祇園四条駅から徒歩4分、月〜土 17:30〜24:00、日曜休み、予約可、カウンター、喫煙可、カード (JCB・AMEX・Diners) 可、2017年5月11日オープン。口コミ (2022年12月〜2026年10月、英語): 南座裏の路地の奥、見つけにくい、いつも満席で予約がおすすめ、ぶりの藁焼き、塩ぶりのたたき、刺身、焼き魚、祇園祭の鱧、焼鳥と鶏料理、たらこの燻製、キャンプファイヤー風のアスパラ、焼き野菜、なめらかなポテトサラダ、枝豆、京都・滋賀・奈良の日本酒、ハイネケンの生、旅番組で紹介、提供が遅いという声。',
      confidence: 'medium', sources: [TB, R + 'B458537623/', R + 'B466306147/', R + 'B486565009/', R + 'B488016037/', R + 'B488857370/', R + 'B489723457/', R + 'B498015352/', R + 'B504250508/', R + 'B505604929/', R + 'B533962500/', R + 'B537126397/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter; hard to find; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下ル大和町18-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003106, 135.772443); cross-checked: GSI 京都府京都市東山区大和町18番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486565009/'],
    price_note: 'No prices in the sources; about ¥4,000–8,000 a head (2024–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Straw-grilled yellowtail', null, 'Grill', 'ask', 'no', 'June 2024; March 2025.', 'warayaki'),
    ] }, {
    cuisine: '藁焼きのぶりがテレビで紹介された、魚と焼き物の小さな路地の居酒屋 (2022〜2026年の口コミ)・ぶりの藁焼きと塩ぶりのたたき、刺身、焼き魚、祇園祭の頃の鱧 (2024〜2026年)・焼鳥と鶏料理、たらこの燻製、キャンプファイヤー風のアスパラ、焼き野菜、なめらかなポテトサラダ、枝豆 (2022〜2026年)・京都・滋賀・奈良の日本酒、ハイネケンの生、ハイボール',
    neighborhood: '祇園、四条の南の大和大路。南座の裏、祇園四条から徒歩4分',
    gf_detail: 'グルテンフリーではない: 醤油系の焼き物や居酒屋料理 (2022〜2026年の口コミ)。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: ぶりの藁焼き、刺身、焼鳥、たらこの燻製 (2022〜2026年の口コミ)。',
    notes: '[居酒屋・祇園の南座裏、ぶりの藁焼き] 南座の裏の路地の奥にある隠れたカウンターの居酒屋。厚切りのぶりの藁焼き、刺身や焼き魚、焼鳥、たらこの燻製、なめらかなポテトサラダに関西の日本酒。いつも満席なので予約を。提供が遅いという声も (2024年7月)。喫煙可。日曜休み。',
  });
}

// ================================================================ 食酒処土筆
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26011230/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_shokushu_dokoro_tsukushi', name: '食酒処土筆 (Shokushu Dokoro Tsukushi)', category: 'OMNI',
    lat: 35.00632, lng: 135.769895, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: miso-simmered mackerel and soy-based obanzai (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: marinated mackerel, funazushi and Lake Biwa fish, dashi obanzai (2022–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Thu–Sun 17:00–22:00; closed Tuesday and Wednesday. Reservations taken; walk-ins seated when there is room (July 2025). Counter and tables full of regulars. Cash only: no cards, e-money or QR (Tabelog). Down a back alley east of Kawaramachi at Takoyakushi; you cannot see inside from the street (March 2025).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi–Takoyakushi back alley — 5 min walk from Hankyu Kawaramachi',
    cuisine: 'A Showa-feeling family obanzai bar for regulars, with a Lake Biwa streak (2020–2026 reviews) · today\'s obanzai, three or four to a plate; silky yuba; potato salad; marinated mackerel; rolled omelette; grilled ginkgo; mackerel in miso; burdock in vinegar (2020–2026) · "Biwako set" of Lake Biwa foods — moroko, funazushi, ebi-mame (2022–2025) · beer (Sapporo Lager Aka-boshi, Asahi, Kirin), sake such as Tamanohikari, Kikko and Daiseikyo, shochu',
    website: null, gmaps: gm('食酒処土筆 河原町 蛸薬師'), menu_url: null,
    notes: '[Obanzai bar · Kawaramachi-Takoyakushi alley, a family counter for regulars] A Showa-era family obanzai bar down an alley off Kawaramachi, run by a couple with the founder still at the counter: plates of three or four obanzai, yuba, cured mackerel, a Lake Biwa set of funazushi and moroko, and local sake, among chatty regulars who welcome newcomers. Cash only. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['A husband-and-wife team with the elderly founder (January 2025 review); not named'], origin: null,
      background: 'Reviewers from 2020 to 2026 describe a warm, Showa-era room full of regulars: in 2020 the owner was cooking alone; a September 2022 diner met the retired 85-year-old former owner; and a January 2025 diner found the husband-and-wife owners running it with the 91-year-old founder. A July 2025 visitor came after seeing it on a TV drinking programme.',
      philosophy: null,
      specialty: 'Obanzai; Lake Biwa set.',
      anecdotes: [
        { text: 'January 2025: "The husband and wife owners, along with the 91-year-old head chef, run the place together… The healthy obanzai (small side dishes) came as 4 rather than the expected 3."', source: R + 'B499879283/' },
        { text: 'September 2022: "The atmosphere of the restaurant is a perfect example of how customers create the vibe. While there are many regulars, newcomers are warmly welcomed as well."', source: R + 'B454583107/' },
      ],
      japanese_sources_summary: '食べログ: 食酒処土筆、日本料理、中京区蛸薬師河原町東、京都河原町駅から307m、月木金土日 17:00〜22:00、火・水休み、予約可、カード・電子マネー・QR不可。口コミ (2020年11月〜2026年8月、英語): 河原町の裏路地の昭和の家庭的なおばんざいの店、常連が多いが初めてでも歓迎、夫婦と91歳の先代 (2025年1月)、85歳の引退した先代 (2022年9月)、2020年は女将がひとりで料理、本日のおばんざい3〜4品、湯葉、ポテトサラダ、しめ鯖、だし巻、銀杏、鯖の味噌煮、ごぼうの酢の物、もろこ・鮒寿司・えび豆の琵琶湖セット、サッポロラガー赤星、玉乃光、Kikko、Daiseikyo などの日本酒、テレビの酒場番組で紹介。',
      confidence: 'medium', sources: [TB, R + 'B449068967/', R + 'B454583107/', R + 'B466339847/', R + 'B478137921/', R + 'B493328713/', R + 'B496260850/', R + 'B499879283/', R + 'B504179995/', R + 'B507195398/', R + 'B510582087/', R + 'B534249775/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars\' counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区蛸薬師河原町東',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006320, 135.769895); the address gives no town or lot, so GSI cannot cross-check it — marked approximate; 11m from 出逢ひ茶屋 おせん; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B449068967/', R + 'B504179995/'],
    price_note: 'No prices in the sources; about ¥2,000–4,000 a head (2022–2025 reviews).', last_checked: TODAY, items: [
      it('', '', 'Biwako set (moroko, funazushi, ebi-mame)', null, 'Small plates', 'ask', 'no', 'September 2024; March 2025.', 'obanzai'),
      it('', '', 'Today\'s obanzai platter', null, 'Small plates', 'no', 'no', 'January, March 2025.', 'obanzai'),
    ] }, {
    cuisine: '琵琶湖の味もある、常連の多い昭和の家庭的なおばんざいの酒場 (2020〜2026年の口コミ)・本日のおばんざいを3〜4品盛りで、湯葉、ポテトサラダ、しめ鯖、だし巻、焼き銀杏、鯖の味噌煮、ごぼうの酢の物 (2020〜2026年)・もろこ、鮒寿司、えび豆の「琵琶湖セット」(2022〜2025年)・ビール (サッポロラガー赤星、アサヒ、キリン)、玉乃光などの日本酒、焼酎',
    neighborhood: '河原町蛸薬師の裏路地。阪急河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 鯖の味噌煮や醤油のおばんざい (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: しめ鯖、鮒寿司と琵琶湖の魚、出汁のおばんざい (2022〜2026年の口コミ)。',
    notes: '[おばんざいの酒場・河原町蛸薬師の路地、常連の家庭的なカウンター] 河原町の路地にある昭和の家庭的なおばんざいの酒場で、夫婦と先代がカウンターに。3〜4品盛りのおばんざい、湯葉、しめ鯖、鮒寿司やもろこの琵琶湖セット、地酒を、初めての客も歓迎する常連たちと。現金のみ。火・水休み。',
  });
}

// ================================================================ uru coffee
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044176/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_uru_coffee_teramachi', name: 'uru coffee', category: 'OMNI',
    lat: 35.006014, lng: 135.766943, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: open sandwiches and cheesecake (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: black coffee is plant-based; lattes, cheesecake and sandwiches are not described for plant milk (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 10:00–20:00. No reservations. 6 seats plus stair seating, ground floor only; open-fronted with no door, so chilly at night (March 2026); no restroom (January 2026). Dogs welcome on a lead, water provided (May 2026). English menu; take-away; wheelchair accessible. No service charge — Tabelog, Japanese original 「なし」. Cards (JCB), e-money, QR. On Teramachi-Kyogoku arcade, opposite Niko and… Opened 10 December 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-Kyogoku arcade — 5 min walk from Hankyu Kawaramachi',
    cuisine: 'A small open-fronted coffee stand from the vintage clothing shop HYPE, on the Teramachi arcade (2025–2026 reviews) · light-roast coffee from ue., a specialty roaster in Shinmachi, Osaka: café latte ¥700, cappuccino, iced Americano (2025–2026) · open sandwiches, "half & half" ¥1,400; avocado sandwich ¥1,300 (2025–2026) · homemade cheesecake ¥700–800; matcha terrine; ginger ale ¥500 (2025–2026)',
    website: null, gmaps: gm('uru coffee 寺町京極'), menu_url: null,
    notes: '[Coffee stand · Teramachi-Kyogoku, a vintage shop\'s café] A stylish, open-fronted café on the Teramachi arcade, opened December 2025 by the vintage clothing shop HYPE: light-roast coffee from Osaka roaster ue., open sandwiches and a salted cheesecake, with dogs welcome. Only six seats and no restroom; some found it pricey and cramped (March 2026) or the Americano too acidic (July 2026).',
    chef_bio: { chef_name: null, roles: ['Not named in a source; run by the vintage clothing shop HYPE (December 2025 reviews)'], origin: null,
      background: 'Opened 10 December 2025 (Tabelog). December 2025 reviewers call it the café of the vintage clothing store HYPE, using beans from the Osaka specialty roaster ue.; others describe crimson tiles, an orange interior, a bonsai, a speaker blending arcade sounds and music, and a kind owner who brews well (March 2026).',
      philosophy: null,
      specialty: 'Café latte; open sandwiches.',
      anecdotes: [
        { text: 'March 2026: "the space inside is a bit cramped, and the prices are somewhat on the higher side."', source: R + 'B524341099/' },
        { text: 'May 2026: "I was pleasantly surprised to learn that I could let my dog down while keeping it on a leash inside. They even provided water for my dog."', source: R + 'B528619904/' },
      ],
      japanese_sources_summary: '食べログ: uru coffee、カフェ、中京区東側町501-10、阪急河原町駅から徒歩5分、毎日 10:00〜20:00、予約不可、6席、テラス、禁煙、英語メニュー、持ち帰り、車椅子可、原文でサービス料「なし」、カード (JCB)・電子マネー・QR可、2025年12月10日オープン。口コミ (2025年12月〜2026年8月、英語): 寺町京極商店街、古着屋HYPEのカフェ、大阪・新町のスペシャルティコーヒー店 ue. の浅煎り豆、カフェラテ700円、カプチーノ、アイスアメリカーノ、オープンサンドのハーフ&ハーフ1,400円、アボカドサンド1,300円、自家製チーズケーキ700〜800円、抹茶テリーヌ、ジンジャーエール500円、階段も席に、扉がなく夜は寒い、トイレなし、犬連れ可、狭く値段が高めという声、アメリカーノが酸っぱいという声。',
      confidence: 'medium', sources: [TB, R + 'B518689475/', R + 'B519116864/', R + 'B520049712/', R + 'B520375666/', R + 'B523473418/', R + 'B524341099/', R + 'B524442788/', R + 'B528619904/', R + 'B531386378/', R + 'B533821479/', R + 'B534478207/', R + 'B534885642/'] },
    cultural_comfort: { level: 'english', note: 'English menu; dog-friendly; no restroom.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東側町501-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened December 2025) with reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006014, 135.766943); cross-checked: GSI 京都府京都市中京区東側町501番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520049712/', R + 'B534478207/'],
    price_note: 'Prices from December 2025–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Café latte', '¥700', 'Coffee', 'ask', 'no', 'December 2025.', 'coffee'),
      it('', '', 'Open sandwich, half & half', '¥1,400', 'Food', 'no', 'no', 'December 2025.', 'sandwich'),
      it('', '', 'Homemade cheesecake', '¥700–800', 'Sweets', 'no', 'no', 'January, March 2026.', 'cheesecake'),
    ] }, {
    cuisine: '寺町の商店街にある、古着屋HYPEの小さな開放的なコーヒースタンド (2025〜2026年の口コミ)・大阪・新町のスペシャルティロースター ue. の浅煎り。カフェラテ700円、カプチーノ、アイスアメリカーノ (2025〜2026年)・オープンサンドの「ハーフ&ハーフ」1,400円、アボカドサンド1,300円 (2025〜2026年)・自家製チーズケーキ700〜800円、抹茶テリーヌ、ジンジャーエール500円 (2025〜2026年)',
    neighborhood: '寺町京極商店街。阪急河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: オープンサンドとチーズケーキ (2025〜2026年の口コミ)。',
    vegan_detail: '要確認: ブラックコーヒーは植物性。ラテ、チーズケーキ、サンドの植物性ミルクなどは書かれていない (2025〜2026年の口コミ)。',
    notes: '[コーヒースタンド・寺町京極、古着屋のカフェ] 2025年12月に古着屋HYPEが寺町の商店街に開いた、扉のないおしゃれなカフェ。大阪のロースター ue. の浅煎りコーヒー、オープンサンド、塩の効いたチーズケーキで、犬連れも可。席は6つだけでトイレなし。狭くて高めという声 (2026年3月) や、アメリカーノが酸っぱいという声 (2026年7月) も。',
  });
}

save();
