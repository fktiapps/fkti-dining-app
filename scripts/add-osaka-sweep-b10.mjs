// Osaka sweep (2-mile circle around Dotonbori), batch 10 — ramen phase, nearest first (all OMNI).
//   + 麺joyLife (shellfish-broth shoyu with house noodles, 20:00–8:00)
//   + しじみラーメン Shi43屋 (Lake Shinji shijimi ramen, 20:00–5:00; cash only)
//   + 湯火功夫 (Chinese malatang chain — Tabelog tags it ramen; filed as 'other', no ramen block)
//   + Gyokotsuya 道頓堀店 (Fukuoka sea-bream fish-bone ramen, no membership here; closed Tue)
// Skipped (handed to the vegan/GF phase): Vegan Friendly ramen 27158810.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 10);

skip('27158810', 'Tabelog listing with 0 reviews and no hours. Possibly the HappyCow "Vegan Friendly Ramen by Playpen Friends" (moved from Kitahorie), which could not be verified (HappyCow blocks fetches). Re-check in a vegan/GF batch from another source.');

// ================================================================ 麺joyLife
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27134697/'; const R = TB + 'dtlrvwlst/';
  const d = day(['20:00', '08:00']);
  put({
    id: 'osaka_men_joylife_higashishinsaibashi', name: '麺joyLife (Men joy Life)', category: 'OMNI',
    lat: 34.670841, lng: 135.502684, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made whole-wheat noodles; soy-sauce seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone and shellfish broth, chashu, egg.',
    hours_raw: 'Daily 20:00–8:00 next morning, open year-round; holiday-period hours are posted on its social media (Tabelog). Ticket machine inside on the left. Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-7-22, Nippo Silky Tower 1F No. 6, next to a busy club — 6 min from Shinsaibashi Stn',
    cuisine: 'Shellfish-broth shoyu ramen (oyster, asari and shijimi on chicken bones) · rich shoyu (chicken and bonito) · house-made whole-wheat noodles · rare pork-shoulder chashu · special ¥1,300 · seared rare chashu mayo rice bowl ¥400 · chilled shellfish noodles in summer · 8 pm–8 am',
    website: 'https://www.tiktok.com/@men_joylife', gmaps: gm('麺joyLife 東心斎橋'), menu_url: null,
    notes: "[Ramen · shellfish shoyu all night in Higashi-Shinsaibashi] A 10-seat, white-and-grey counter tucked into a building beside one of Minami's liveliest clubs, open from 8 pm to 8 am, since 2023. The star is a golden shellfish broth: oyster, asari and shijimi over chicken bones, with a mild soy sauce and chicken oil. It's gentle and gradually deepening, with a pleasant shellfish bitterness, over house-made medium-thin noodles of whole-wheat flour. The special (¥1,300, September 2026) adds rare pork-shoulder and belly chashu, a soft egg, mizuna, menma and red and white onion. There's also a rich shoyu on chicken and bonito with thin noodles, and a chilled shellfish ramen in summer. Pair it with the seared rare-chashu mayo rice bowl (¥400). One colleague group said to skip the sudachi rice. Buy a ticket at the machine inside.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 March 2023 (Tabelog)', background: 'Shop on TikTok as @men_joylife; Tabelog introduction: "Open until 8 AM with energy! A cup crafted with passion and extensive research!"', philosophy: null, specialty: 'Shellfish-broth ramen; house-made noodles.',
      anecdotes: [
        { text: '"The soup is a soy sauce base made from a blend of oyster, clam, and shijimi clam broth. It has a golden color, with the rich umami of shellfish and a pleasant bitterness… The noodles are homemade, straight, medium-thin, and made with whole wheat flour." — September 2026, special ¥1,300.', source: R + 'B536511521/' },
        { text: '"It\'s based on chicken bones and flavored with clams, shijimi, and oysters. The taste is gentle and gradually seeps in." — August 2026, around 9:30 pm on a Sunday, no wait.', source: R + 'B533395524/' },
      ],
      japanese_sources_summary: '食べログ: 麺joyLife、大阪市中央区東心斎橋2-7-22 日宝シルキータワー1F 6号、10席、毎日20:00〜翌8:00、年中無休(大型連休はSNSで告知)、禁煙、カード・電子マネー・QR決済可、2023年3月24日開店、TikTok @men_joylife。店の紹介: こだわりのスープと自家製麺、限定ラーメン。2024〜2026年の口コミ: カウンターのみ、濃口醤油(鶏ガラと鰹節、細ストレート麺、鶏油)、冷やし貝出汁(あさり・牡蠣・はまぐり、平打ち中細麺)、和風まぜそば(あさり・牡蠣・しじみの油)、貝出汁らーめん1,000円〜、炙りレアチャーシュー丼400円、券売機は店内左、鶏ガラにあさり・しじみ・牡蠣、やさしい味、自家製の中細ストレート麺、肩ロースのレアチャーシュー、水菜、メンマ、新玉ねぎ、白髪ねぎ、マヨチャーシュー丼、特製貝出汁1,300円(全粒粉の麺、豚バラチャーシュー、半熟玉子、紫玉ねぎ)、クラブの隣、すだちご飯はおすすめしないとの声、醤油と濃口醤油も。',
      confidence: 'medium', sources: [TB, R + 'B536511521/', R + 'B533395524/', R + 'B484465077/', R + 'B537500003/', R + 'B536968371/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: true, notes: 'House-made medium-thin straight noodles of whole-wheat flour, firm bite (September 2026); thin straight for the rich shoyu (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '貝出汁らーめん (shellfish-broth ramen) from ¥1,000; special ¥1,300 (August–September 2026).',
      chashu: 'Rare pork-shoulder chashu; pork belly on the special (September 2026).',
      notable_toppings: ['mizuna', 'menma', 'red onion', 'white onion', 'soft-boiled egg (special)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and shellfish broth.' },
      pantheon: 'Higashi-Shinsaibashi\'s 8-pm-to-8-am shellfish shoyu: oyster, asari and shijimi over chicken bones, gentle and golden, on house-cut whole-wheat noodles.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 2, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533395524/', '"The taste is gentle and gradually seeps in."'],
        oiliness: [R + 'B536511521/', '"The richness of the aromatic oil, creating a light yet flavorful experience."'],
        clarity: [R + 'B484465077/', 'Style: "Clear Broth"; "a golden color" (' + R + 'B536511521/).'],
        tare_strength: [R + 'B533395524/', '"The soy sauce seasoning is mild, harmonizing well with the broth."'],
        noodle_firmness: [R + 'B536511521/', '"Offering a firm bite and great texture."'],
        aroma_punch: [R + 'B536511521/', '"The rich umami of shellfish and a pleasant bitterness"; "a strong essence of shijimi" (' + R + 'B533395524/).'],
      },
      confidence: 'medium', sources: [R + 'B536511521/', R + 'B533395524/', R + 'B484465077/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-22 日宝シルキータワー 1F 6号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番22号 (go) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536511521/', R + 'B533395524/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('貝出汁らーめん', 'kai-dashi rāmen', 'Shellfish-broth ramen', '¥1,000', 'Ramen', 'no', 'no', 'From ¥1,000, August 2026.', 'kaidashi'),
      it('特製貝出汁らーめん', '', 'Special shellfish-broth ramen', '¥1,300', 'Ramen', 'no', 'no', 'September 2026.', 'tokusei_kaidashi'),
      it('', '', 'Rich shoyu ramen (chicken and bonito)', '', 'Ramen', 'no', 'no', 'August 2026.', 'koikuchi_shoyu'),
      it('', '', 'Chilled shellfish-broth ramen', '', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi_kai'),
      it('', '', 'Seared rare chashu mayo rice bowl', '¥400', 'Rice', 'no', 'no', 'August–September 2026.', 'mayo_chashu_don'),
    ] }, {
    cuisine: '貝出汁の醤油らーめん(鶏ガラに牡蠣、あさり、しじみ)・濃口醤油(鶏と鰹)・全粒粉の自家製麺・肩ロースのレアチャーシュー・特製1,300円・炙りレアチャーシューマヨ丼400円・夏は冷やし貝出汁・夜8時〜朝8時',
    neighborhood: '東心斎橋2-7-22 日宝シルキータワー1F 6号、にぎやかなクラブの隣。心斎橋駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。全粒粉の自家製麺、醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと貝のスープ、チャーシュー、卵。',
    notes: '[ラーメン・東心斎橋の夜通しの貝出汁醤油] ミナミでも特ににぎやかなクラブの隣のビルにある、白とグレーの10席のカウンターで、2023年から夜8時から朝8時まで。主役は金色の貝出汁で、鶏ガラに牡蠣、あさり、しじみ、やさしい醤油と鶏油。じんわり深まるやさしい味に貝の心地よい苦みがあり、全粒粉の自家製の中細麺に合わせます。特製(2026年9月で1,300円)には肩ロースとバラのレアチャーシュー、半熟玉子、水菜、メンマ、紫と白の玉ねぎ。鶏と鰹の濃口醤油は細麺で、夏は冷やしの貝出汁も。炙りレアチャーシューのマヨ丼(400円)を一緒に。すだちご飯はおすすめしないという同僚グループも。店内の券売機で食券を。',
  });
}

// ================================================================ しじみラーメン Shi43屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27073398/'; const R = TB + 'dtlrvwlst/';
  const n = day(['20:00', '05:00']), fs = day(['20:00', '05:30']);
  put({
    id: 'osaka_shijimi_ramen_shi43ya', name: 'しじみラーメン Shi43屋 (Shijimi Ramen Shi43ya)', category: 'OMNI',
    lat: 34.671026, lng: 135.502047, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shijimi-clam broth, butter, chashu.',
    hours_raw: 'Sun–Thu 20:00–5:00; Fri–Sat 20:00–5:30 (Tabelog). Cash only (no cards, e-money or QR, per Tabelog and an August 2026 review). Private hire on request.',
    hours: { 0: n, 1: n, 2: n, 3: n, 4: fs, 5: fs, 6: n }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-2-31, Geihinkan Bldg 2F — between Shinsaibashi and Dotonbori',
    cuisine: 'Shijimi-clam ramen with Yamato shijimi from Lake Shinji · shio, shoyu or miso · rich shijimi shio ¥1,200 (496 kcal, per the shop) · a little butter · chashu ¥200 · salt gyoza ¥400 · chilled shijimi noodles in summer · 8 pm–5 am · cash only',
    website: null, gmaps: gm('しじみラーメン Shi43屋'), menu_url: null,
    notes: "[Ramen · hangover-cure shijimi ramen after midnight] A 22-seat, second-floor late-nighter, since 2013, serving \"recovery ramen\" made with plenty of Yamato shijimi clams from Lake Shinji in Shimane. The broth is light yet deep (one diner compared its depth to tonkotsu), with a touch of butter for richness, in shio, shoyu or miso. The signature rich shijimi shio is ¥1,200, and the shop puts it at 496 kcal. Chashu is ¥200 extra and the salt gyoza ¥400. In summer, a clear chilled shijimi ramen with Morioka-style noodles, rare chashu, half an egg and rice crackers. The walls are covered in autographs: kabuki actors, Yoshimoto comedians, baseball players and Brian May of Queen. One diner found ¥1,200 for a plain bowl steep. Open 8 pm to 5 am, cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 June 2013 (Tabelog)', background: 'Tabelog introduction: the original "recovery ramen", made with Yamato shijimi from Lake Shinji, Shimane; no source names the owner.', philosophy: '"Revitalizing Your Body: The Original Recovery Ramen" (Tabelog introduction).', specialty: 'Shijimi-clam ramen.',
      anecdotes: [
        { text: '"Using Yamato shijimi from Lake Shinji in Shimane Prefecture, the broth has a depth similar to tonkotsu ramen, despite being a clam-based soup. The addition of a bit of butter enhances its richness." — July 2026.', source: R + 'B532565642/' },
        { text: '"The signature dish, \'Rich Shijimi Sio Ramen,\' is JPY 1,200. It\'s said to have an astonishingly low calorie count of 496 kcal… Chashu is JPY 200, and the gyoza with salt is JPY 400." — July 2026; the walls are lined with celebrity autographs.', source: R + 'B531576281/' },
      ],
      japanese_sources_summary: '食べログ: しじみラーメン Shi43屋、大阪市中央区心斎橋筋2-2-31 迎賓館ビル2F、22席、日〜木20:00〜5:00、金土20:00〜5:30、カード・電子マネー・QR決済不可、禁煙、2013年6月4日開店、貸切相談可。店の紹介: 元祖回復ラーメン「濃厚しじみラーメン」、島根県宍道湖産大和しじみ、塩・味噌・醤油。2026年の口コミ(4〜8月): 朝まで営業、味噌、チャーシュー丼、あっさりなのにしじみのうま味、飲んだ後に、しじみ塩ラーメン1,200円は高めとの声、芸能人のサインが壁一面(歌舞伎役者、QUEENのブライアン・メイ、吉本芸人、野球選手)、496kcal、チャーシュー200円、塩餃子400円、バターでコク、豚骨のような深み、冷麺(盛岡冷麺のような麺、レアチャーシュー2枚、しじみ、味玉半分、玉ねぎ、あられ)、現金払い。',
      confidence: 'medium', sources: [TB, R + 'B532565642/', R + 'B531576281/', R + 'B527535996/', R + 'B528474628/', R + 'B533669975/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu', 'miso'], aroma_oil: ['other'], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described for the hot ramen; Morioka-reimen-like noodles in the summer chilled bowl (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '濃厚しじみ塩ラーメン (rich shijimi shio ramen) ¥1,200 (July 2026).',
      chashu: 'Chashu ¥200 extra; rare chashu on the chilled bowl.',
      notable_toppings: ['shijimi clams', 'butter', 'rare chashu (chilled)', 'rice crackers (chilled)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam broth; butter.' },
      pantheon: 'Minami\'s after-hours "recovery ramen": a light but deep Lake Shinji shijimi broth with a touch of butter, served until 5 am under a wall of celebrity autographs.',
      profile: { richness: 2, oiliness: 1, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B527535996/', '"The broth is rich with the umami of shijimi clams, yet it\'s not heavy at all."'],
        oiliness: [R + 'B531576281/', '"It\'s low in fat, healthy"; a bit of butter added (' + R + 'B532565642/).'],
        clarity: [R + 'B533669975/', '"It featured a clear broth" (chilled version); clam broth.'],
        tare_strength: [R + 'B528474628/', '"The flavor was surprisingly rich in saltiness, enhanced by the shijimi clam broth."'],
        noodle_firmness: [R + 'B527535996/', '"The balance with the noodles is excellent"; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B527535996/', '"The delicate flavor of shijimi spreads pleasantly."'],
      },
      confidence: 'medium', sources: [R + 'B527535996/', R + 'B532565642/', R + 'B531576281/', R + 'B528474628/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night only; cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-31 迎賓館ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番31号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531576281/', R + 'B528474628/'],
    price_note: 'Prices from May and July 2026 reviews.', last_checked: TODAY, items: [
      it('濃厚しじみ塩ラーメン', '', 'Rich shijimi shio ramen', '¥1,200', 'Ramen', 'no', 'no', 'July 2026; 496 kcal per the shop.', 'shijimi_shio'),
      it('', '', 'Shijimi miso ramen', '', 'Ramen', 'no', 'no', 'April 2026.', 'shijimi_miso'),
      it('', '', 'Chashu (extra)', '¥200', 'Toppings', 'no', 'no', 'July 2026.', 'chashu'),
      it('', '', 'Gyoza with salt', '¥400', 'Sides', 'no', 'no', 'July 2026.', 'shio_gyoza'),
      it('', '', 'Chilled shijimi noodles', '', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'April 2026.', 'chashu_don'),
    ] }, {
    cuisine: '宍道湖産大和しじみのしじみラーメン・塩、醤油、味噌・濃厚しじみ塩1,200円(店によると496kcal)・少しのバター・チャーシュー200円・塩餃子400円・夏は冷やししじみ麺・夜8時〜朝5時・現金のみ',
    neighborhood: '心斎橋筋2-2-31 迎賓館ビル2F。心斎橋と道頓堀の間',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子。',
    vegan_detail: 'ヴィーガンではありません。しじみのスープ、バター、チャーシュー。',
    notes: '[ラーメン・深夜の二日酔い対策しじみラーメン] 2013年からのビル2階、22席の深夜営業の店で、島根県宍道湖産の大和しじみをたっぷり使った「回復ラーメン」を出しています。スープはあっさりなのに深く(豚骨のような深みという客も)、少しのバターでコクを足し、塩、醤油、味噌から。看板の濃厚しじみ塩は1,200円で、店によると496kcal。チャーシューは200円追加、塩餃子は400円。夏は透き通った冷やしのしじみラーメンで、盛岡冷麺のような麺、レアチャーシュー、味玉半分、あられ。壁は歌舞伎役者、吉本芸人、野球選手、QUEENのブライアン・メイなどのサインで埋まっています。具のない一杯で1,200円は高いという客も。夜8時から朝5時まで、現金のみ。',
  });
}

// ================================================================ 湯火功夫
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27114216/'; const R = TB + 'dtlrvwlst/';
  const n = day(['11:00', '22:00']), fs = day(['11:00', '23:00']);
  put({
    id: 'osaka_touka_koufu_malatang', name: '湯火功夫 (Touka Koufu Malatang)', category: 'OMNI',
    lat: 34.670388, lng: 135.503427, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. You pick your own ingredients, including vermicelli and other noodles, but the beef-bone broth is finished with a sesame-and-peanut sauce whose ingredients are not described. Fish balls, dumplings and many noodles contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature broth is simmered from beef bones for 8 hours (October 2026).',
    hours_raw: 'Sun–Thu and holidays 11:00–22:00 (L.O. 21:30); Fri–Sat 11:00–23:00 (L.O. 22:30); irregular closures (Tabelog). Fill a bowl from the chilled case, pay by weight (¥380 per 100 g, October 2026).',
    hours: { 0: n, 1: n, 2: n, 3: n, 4: fs, 5: fs, 6: n }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-6-19 — a short walk from Namba Stn; big red sign',
    cuisine: 'Chinese malatang chain · pick ingredients from a chilled case, ¥380 per 100 g · beef-bone broth simmered 8 hours with sesame and peanut · spice from none to hot · seafood, horumon, fish balls, xiaolongbao, many noodles · fried bread, sesame balls, chicken wings · sesame sauce and cilantro vinegar at the table',
    website: null, gmaps: gm('湯火功夫 東心斎橋'), menu_url: null,
    notes: "[Chinese · build-your-own malatang in Higashi-Shinsaibashi] A bright, recently renovated 38-seat branch of a malatang chain from China, popular with Chinese visitors and recognisable by its big red sign. Use tongs to fill a bowl from the chilled case: vegetables, meat, horumon, shrimp, octopus, fish balls, xiaolongbao, panda-shaped fish cakes, and noodles from vermicelli to beef-tendon noodles. It's weighed at ¥380 per 100 g (October 2026). The signature broth is beef bones simmered for 8 hours and finished with a fragrant sesame-and-peanut sauce, creamy enough that one diner had it with no spice at all. Others found level 2 plenty hot, with real numbing mala. Stir in sesame sauce or cilantro black vinegar at the table, and add fried bread for dunking, sesame balls or chicken wings.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 November 2019 (Tabelog)', background: 'Branch of a malatang chain with many locations in China (May and June 2026 reviews).', philosophy: null, specialty: 'Malatang with an 8-hour beef-bone broth.',
      anecdotes: [
        { text: '"The broth, made by simmering beef bones for 8 hours and finished with a special sauce of fragrant sesame and peanuts, was rich and creamy like a velvety soup." — October 2026, ¥380 per 100 g, "Not Spicy".', source: R + 'B537654222/' },
        { text: '"The spiciness and numbing sensation were quite authentic! It had more punch than other places." — March 2026.', source: R + 'B526717085/' },
      ],
      japanese_sources_summary: '食べログ: 湯火功夫、大阪市中央区東心斎橋2-6-19、06-6125-5283、38席(カウンター・テーブル)、日〜木・祝11:00〜22:00(L.O.21:30)、金土11:00〜23:00(L.O.22:30)、不定休、禁煙、カード・電子マネー可、2019年11月15日開店。2026年の口コミ(3〜10月): 中国人客が多い、本格的な辛さとしびれ、パクチーは煮込むとしおれる、中国に多くの店舗があるチェーン、具材とスープを選べる、カニカマ・春雨・パクチーがおすすめ、辛さを調整、野菜たっぷり、改装してきれい、エビやタコなど魚介が多い、麺の種類が多い、2辛で十分辛い、ごまだれやパクチー黒酢、手羽先・揚げパン・ごま団子、甘い中国茶、パンダの形の具、薬膳の風味、100gあたり380円、牛骨を8時間煮込みごまとピーナッツの特製だれで仕上げたスープ、辛くないでもおいしい。',
      confidence: 'medium', sources: [TB, R + 'B537654222/', R + 'B526717085/', R + 'B528263542/', R + 'B537279614/', R + 'B537523470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve ingredient case; pay by weight.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-6-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番19号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537654222/', R + 'B537279614/'],
    price_note: 'Priced by weight: ¥380 per 100 g (October 2026).', last_checked: TODAY, items: [
      it('麻辣湯', 'mārātan', 'Signature malatang, your choice of ingredients (per 100 g)', '¥380', 'Malatang', 'ask', 'no', 'October 2026; beef-bone broth.', 'malatang'),
      it('揚げパン', '', 'Fried bread', '', 'Sides', 'no', 'ask', 'October 2026.', 'youtiao'),
      it('ごま団子', '', 'Sesame balls', '', 'Sides', 'ask', 'ask', 'October 2026.', 'sesame_balls'),
      it('手羽先', '', 'Chicken wings', '', 'Sides', 'ask', 'no', 'October 2026.', 'wings'),
    ] }, {
    cuisine: '中国の麻辣湯チェーン・冷蔵ケースから具材を選び100gあたり380円・牛骨を8時間煮込みごまとピーナッツで仕上げたスープ・辛さなしから激辛まで・魚介、ホルモン、つみれ、小籠包、多彩な麺・揚げパン、ごま団子、手羽先・卓上のごまだれとパクチー黒酢',
    neighborhood: '東心斎橋2-6-19、なんば駅から少し歩いたところ。大きな赤い看板',
    gf_detail: '要確認。春雨などの麺も含め自分で具材を選べますが、牛骨スープを仕上げるごまとピーナッツのたれの中身は書かれていません。つみれ、点心、多くの麺は小麦を含みます。',
    vegan_detail: 'ヴィーガンではありません。看板のスープは牛骨を8時間煮込んだもの(2026年10月)。',
    notes: '[中華・東心斎橋の自分で選ぶ麻辣湯] 中国発の麻辣湯チェーンの、改装したばかりの明るい38席の店で、中国からの客に人気。大きな赤い看板が目印です。冷蔵ケースからトングで野菜、肉、ホルモン、エビ、タコ、つみれ、小籠包、パンダの形の練り物、春雨から牛すじ麺までの麺をボウルに入れ、100gあたり380円で量り売り(2026年10月)。看板のスープは牛骨を8時間煮込み、香ばしいごまとピーナッツの特製だれで仕上げたもので、辛さなしで味わった客もいるほどクリーミー。2辛でも十分辛く、本格的なしびれがあるという声も。卓上のごまだれやパクチー黒酢で味を変え、スープに浸す揚げパン、ごま団子、手羽先も。',
  });
}

// ================================================================ Gyokotsuya 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27157884/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '01:00']);
  put({
    id: 'osaka_gyokotsuya_dotonbori', name: 'Gyokotsuya 道頓堀店 (Gyokotsuya Dotonbori)', category: 'OMNI',
    lat: 34.669367, lng: 135.50412, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce grilled rice balls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea-bream fish-bone broth, sakura shrimp.',
    hours_raw: 'Mon and Wed–Sun 18:00–1:00 (L.O. 0:30); closed Tuesdays (Tabelog). Tabelog gives an opening date of 20 July 2026; an October 2026 reviewer says it opened on 12 September. No membership needed here (unlike the Fukuoka original). Cards and e-money accepted.',
    hours: { 0: d, 1: [], 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sōemonchō 4-10, Daikyō Bldg 2F (above a vintage-luxury shop; lift on the left) — 5 min from Nippombashi Stn',
    cuisine: 'Sea-bream fish-bone (gyokotsu) ramen and tsukemen · creamy white broth · fried sakura shrimp · spicy versions · tsukemen with mini rice and broth to finish risotto-style · ramen ¥1,450, spicy ¥1,550 · night-only medicinal hot pot and eel-liver skewers · modern Japanese room',
    website: null, gmaps: gm('Gyokotsuya 道頓堀店'), menu_url: null,
    notes: "[Ramen · Fukuoka's fish-bone ramen, no membership needed] The third shop of Gyokotsuya, famous in Fukuoka as a members-only ramen bar. Here, as in Ginza, anyone can walk in. Upstairs in a Sōemonchō building, a chic black room with vermilion lattice feels more kaiseki than ramen shop. The broth is a creamy white soup from sea-bream bones, under chewy noodles and crunchy fried sakura shrimp, part of the shop's pitch for a \"sixth flavour\". Fish-bone ramen and tsukemen are ¥1,450, and the spicy versions ¥1,550. Tsukemen comes with a mini rice and a flask of broth to turn the leftovers into risotto. At night there are a medicinal hot pot and grilled eel-liver skewers. Not everyone is sold: one diner found the broth watery and sparse for ¥1,450. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Dotonbori shop (Tabelog opening date 20 July 2026; a reviewer says 12 September 2026)', background: 'Third location of Gyokotsuya, a members-only ramen shop in Fukuoka; the Ginza and Dotonbori shops need no membership (October 2026 review).', philosophy: 'A "sixth flavor" beyond the five basic tastes (October 2026 review).', specialty: 'Sea-bream fish-bone ramen and tsukemen.',
      anecdotes: [
        { text: '"The broth is a blend of sea bream and creamy white soup, creating a rich flavor that spreads beautifully in your mouth… The topping of deep-fried sakura shrimp adds a strong shrimp flavor." — October 2026.', source: R + 'B537398452/' },
        { text: '"Is this really worth JPY 1450? There weren\'t many toppings, and the broth was quite watery." — October 2026.', source: R + 'B537469556/' },
      ],
      japanese_sources_summary: '食べログ: Gyokotsuya 道頓堀店、大阪市中央区宗右衛門町4-10 大京ビル2F、06-7777-6068、16席(テーブル12、カウンター4)、月水〜日・祝18:00〜翌1:00(L.O.0:30)、火曜定休、禁煙、カード・電子マネー可、開店日2026年7月20日。2026年10月の口コミ: 9月12日開店との記述、福岡の会員制ラーメン「Gyokotsuya」の3店舗目で銀座と道頓堀は会員不要、高級ブランドの店があるビルの2階、魚骨ラーメン・魚骨つけ麺・辛い魚骨ラーメン・辛い魚骨つけ麺、鍋やサイド、鯛と白湯の濃厚なスープ、もちもちの麺、揚げた桜えび、焼きおにぎり、スタッフは外国人、1,450円の価値があるかという声とスープが薄いという声、黒と朱の格子の和モダンな空間、「第六の味」、夜だけの薬膳鍋や肝焼き、辛い魚骨つけ麺1,550円、小ライスと出汁の徳利、日本橋駅から徒歩5分、残ったスープでリゾット風。',
      confidence: 'medium', sources: [TB, R + 'B537398452/', R + 'B537469556/', R + 'B537616154/', R + 'B537840390/', R + 'B537799153/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: '"A nice bite and a slightly chewy texture"; slightly thicker for tsukemen (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: '魚骨ラーメン (fish-bone ramen) ¥1,450; spicy fish-bone ramen ¥1,550 (October 2026).',
      chashu: null,
      notable_toppings: ['fried sakura shrimp', 'mini rice (tsukemen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Fish-bone broth.' },
      pantheon: 'Fukuoka\'s members-only fish-bone bowl, open to all in Sōemonchō: creamy sea-bream white soup with crunchy sakura shrimp, finished as risotto.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537398452/', '"A rich flavor that spreads beautifully"; one found it "quite watery" (' + R + 'B537469556/).'],
        oiliness: [R + 'B537799153/', '"Guilt-free ramen" — not described as oily; placed low (inferred).'],
        clarity: [R + 'B537398452/', '"Sea bream and creamy white soup"; another calls it "clear yet deep" (' + R + 'B537799153/) — placed low-mid.'],
        tare_strength: [R + 'B537840390/', '"The gentle sweetness from the sea bream broth, combined with the flavor of small shrimp."'],
        noodle_firmness: [R + 'B537398452/', '"The noodles have a nice bite and a slightly chewy texture."'],
        aroma_punch: [R + 'B537398452/', '"The topping of deep-fried sakura shrimp adds a strong shrimp flavor."'],
      },
      confidence: 'medium', sources: [R + 'B537398452/', R + 'B537799153/', R + 'B537840390/', R + 'B537469556/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff are largely from overseas and Japanese may be limited (October 2026).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町4-10 大京ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町4番10号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537840390/', R + 'B537616154/', R + 'B537469556/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('魚骨ラーメン', 'gyokotsu rāmen', 'Fish-bone ramen', '¥1,450', 'Ramen', 'no', 'no', 'October 2026.', 'gyokotsu_ramen'),
      it('辛い魚骨ラーメン', '', 'Spicy fish-bone ramen', '¥1,550', 'Ramen', 'no', 'no', 'October 2026.', 'spicy_ramen'),
      it('魚骨つけ麺', '', 'Fish-bone tsukemen with mini rice', '¥1,450', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('辛い魚骨つけ麺', '', 'Spicy fish-bone tsukemen with mini rice', '¥1,550', 'Tsukemen', 'no', 'no', 'October 2026.', 'spicy_tsukemen'),
      it('焼きおにぎり', 'yaki-onigiri', 'Grilled rice balls', '', 'Sides', 'no', 'no', 'October 2026.', 'yaki_onigiri'),
    ] }, {
    cuisine: '鯛の魚骨ラーメンとつけ麺・クリーミーな白湯・揚げた桜えび・辛い魚骨も・つけ麺は小ライスと出汁で締めはリゾット風・ラーメン1,450円、辛い魚骨1,550円・夜だけの薬膳鍋と肝焼き・和モダンの空間',
    neighborhood: '宗右衛門町4-10 大京ビル2F(ヴィンテージの高級ブランド店の上、エレベーターは左)。日本橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油の焼きおにぎり。',
    vegan_detail: 'ヴィーガンではありません。鯛の魚骨スープ、桜えび。',
    notes: '[ラーメン・会員不要の福岡の魚骨ラーメン] 福岡では会員制のラーメン店として知られるGyokotsuyaの3店舗目で、銀座と同じくここは誰でも入れます。宗右衛門町のビル2階、朱の格子の黒いシックな空間はラーメン店というより懐石のよう。スープは鯛の骨のクリーミーな白湯で、もちもちの麺にカリッと揚げた桜えび。「第六の味」をうたっています。魚骨ラーメンとつけ麺は1,450円、辛いものは1,550円。つけ麺には小ライスと出汁の徳利が付き、残りをリゾットに。夜は薬膳鍋や肝焼きも。スープが薄く具が少ないので1,450円の価値はないという客も。火曜定休。',
  });
}

save();
