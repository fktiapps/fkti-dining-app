// Osaka sweep (2-mile circle around Dotonbori), batch 100 — ramen phase (all OMNI).
//   + 麺屋 辰 (light seafood chicken paitan ramen and tsukemen, "tulip" wing set; Sakaisuji-Honmachi)
//   + 鶏そば 小箱 (clear chicken shoyu with yuzu, rotating limited bowls; Awaza)
//   + 中華麺食堂 亀吉 (ramen-and-fried-rice lunch counter, kuro-tama fried rice; Uchihonmachi)
//   + 武士道 (samurai-themed black shoyu ramen with back fat and garlic, tatami seating; Itachibori)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 100);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺屋 辰
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27060601/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '16:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_menya_tatsu_azuchimachi', name: '麺屋 辰 (Menya Tatsu)', category: 'OMNI',
    lat: 34.684496, lng: 135.509312, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried chicken sets.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and seafood broth, chashu, chicken.',
    hours_raw: '11:00–16:00 and 18:00–22:00; Sat 11:00–15:30; holidays 11:00–16:00; closing days not stated; hours may change (Tabelog). Order verbally. Cash only: no cards, e-money or QR (Tabelog). Lunch lines; hot inside in summer (July 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '15:30']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Azuchimachi 1-4-5 — 5 min from Sakaisuji-Hommachi Stn exit 12',
    cuisine: 'Chicken paitan seafood ramen ¥1,000: lighter than it looks, with a seafood aroma, medium-thick noodles, seared belly and chuck chashu, menma and egg included · chicken paitan seafood tsukemen ¥1,100 with thick noodles and grilled chashu · chicken paitan shoyu · summer chilled ramen ¥1,000 with chicken breast and pea shoots · "tulip" (chicken wing) set ¥1,000 with ramen-broth soup · kara-age set ¥1,000, small ramen +¥150 · small rice ¥100, soboro rice bowl · free pickled daikon with yuzu · 10 counter seats',
    website: null, gmaps: gm('麺屋 辰 安土町'), menu_url: null,
    notes: "[Ramen · light seafood chicken paitan and a fried-chicken set near Sakaisuji-Honmachi] A ten-seat counter near Sakaisuji-Honmachi, open since 2011, with a line most weekday lunchtimes. The house bowl is a chicken paitan seafood ramen (¥1,000) that looks rich but drinks surprisingly light, with a seafood aroma, medium-thick noodles, seared belly and chuck chashu, menma and egg included; the tsukemen (¥1,100) uses thick noodles that take a little longer. The off-script favorite is the \"tulip\" set (¥1,000), crisp, juicy chicken wings with a soup made from the ramen broth. Free yuzu-pickled daikon sits on the counter; rice is ¥100 now that free lunch rice has ended. It gets hot inside in summer. Cash only; check hours before a weekend visit.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 October 2011 (Tabelog)', background: 'Ramen counter (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Chicken paitan seafood ramen; tulip chicken set.',
      anecdotes: [
        { text: '"At first glance, it looked more like a rich ramen than a paitan, but when I took a sip, the broth was surprisingly light for a chicken paitan, yet it had a delightful seafood aroma! The medium-thick noodles had a nice bite." — September 2026, chicken paitan seafood ramen ¥1,000.', source: R + 'B535282171/' },
        { text: '"You might wonder why a ramen shop serves fried chicken… It\'s crispy on the outside and juicy on the inside, and the accompanying soup, made with ramen broth, is absolutely fantastic." — September 2026, tulip set ¥1,000.', source: R + 'B511620203/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 辰、大阪市中央区安土町1-4-5、堺筋本町駅12番出口から徒歩5分、11:00〜16:00・18:00〜22:00、土11:00〜15:30、祝11:00〜16:00、カード・電子マネー・QR不可、カウンター10席、禁煙、2011年10月11日開店。口コミ(2025年4月〜2026年10月): チューリップ定食1,000円、外はカリッと中はジューシー、ラーメンスープのスープ、魚介白湯ラーメンとそぼろ丼、濃厚だが魚介で軽い、値上げで1,000円超え、ランチの無料ご飯は終了、夏は店内が暑い、ランチは割れ卵とご飯が無料だった(2025年)、大根の柚子漬けは無料、鶏白湯ベースの魚介ラーメン、チャーシュー(バラとロース)と味玉、鶏白湯魚介ラーメン並1,000円、小ライス100円、見た目より軽い鶏白湯、魚介の香り、中太麺、バラと肩ロースの炙りチャーシュー、昼は行列、鶏白湯魚介つけ麺並1,100円、太麺で時間がかかる、厚い炙りチャーシュー、メンマとゆで卵付き、唐揚げ定食1,000円(+150円で小ラーメン)、冷やしラーメン1,000円、口頭注文、豆苗・味玉・ねぎ・鶏胸・海苔、鶏白湯醤油ラーメン。',
      confidence: 'medium', sources: [TB, R + 'B535282171/', R + 'B511620203/', R + 'B515418688/', R + 'B535339813/', R + 'B535594578/', R + 'B538160312/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: null, hydration: null, handmade: false, notes: 'Medium-thick in the ramen; thick in the tsukemen; thin in the chilled ramen (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'tsukemen'],
      signature_bowl: 'Chicken paitan seafood ramen, ¥1,000 (September 2026).',
      chashu: 'Seared pork belly and chuck chashu (September 2026).',
      notable_toppings: ['menma', 'egg', 'yuzu-pickled daikon (counter)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth.' },
      pantheon: 'Sakaisuji-Honmachi\'s light seafood paitan, with a chicken-wing set that steals the show.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535282171/', '"Surprisingly light for a chicken paitan" — mid-scale.'],
        oiliness: [R + 'B535339813/', '"Easy to eat without being too heavy" — placed low.'],
        clarity: [R + 'B535282171/', 'Paitan that "looked more like a rich ramen" — placed low.'],
        tare_strength: [R + 'B538160312/', '"The soy sauce balanced everything perfectly" — mid-scale.'],
        noodle_firmness: [R + 'B535282171/', '"The medium-thick noodles had a nice bite" — mid-scale.'],
        aroma_punch: [R + 'B535282171/', '"A delightful seafood aroma" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535282171/', R + 'B535339813/', R + 'B538160312/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally at the counter; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区安土町1-4-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区安土町一丁目4番5号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535282171/', R + 'B535339813/', R + 'B511620203/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan seafood ramen', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'paitan'),
      it('', '', 'Chicken paitan seafood tsukemen', '¥1,100', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsukemen'),
      it('', '', 'Tulip (chicken wing) set', '¥1,000', 'Sets', 'no', 'no', 'September 2026.', 'tulip'),
      it('', '', 'Kara-age set', '¥1,000', 'Sets', 'no', 'no', 'Small ramen +¥150; September 2026.', 'karaage'),
      it('', '', 'Small rice', '¥100', 'Rice', 'no', 'no', 'September 2026.', 'rice'),
    ] }, {
    cuisine: '鶏白湯魚介ラーメン1,000円: 見た目より軽く魚介が香る、中太麺、炙ったバラと肩ロースのチャーシュー、メンマと卵付き・太麺と炙りチャーシューの鶏白湯魚介つけ麺1,100円・鶏白湯醤油・夏は鶏胸と豆苗の冷やしラーメン1,000円・ラーメンスープ付きのチューリップ(手羽)定食1,000円・唐揚げ定食1,000円、小ラーメン+150円・小ライス100円、そぼろ丼・無料の大根の柚子漬け・カウンター10席',
    neighborhood: '中央区安土町1-4-5。堺筋本町駅12番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、唐揚げの定食。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯と魚介のスープ、チャーシュー、鶏肉。',
    notes: '[ラーメン・堺筋本町近く、軽やかな魚介鶏白湯と手羽の定食] 堺筋本町近くのカウンター10席の店で、2011年開店、平日の昼はたいてい行列。看板は鶏白湯魚介ラーメン(1,000円)で、見た目は濃厚でも飲むと意外に軽く魚介が香り、中太麺に炙ったバラと肩ロースのチャーシュー、メンマと卵まで付く。つけ麺(1,100円)は太麺で少し時間がかかる。意外な人気はチューリップ定食(1,000円)で、カリッとジューシーな手羽にラーメンスープで作ったスープ付き。カウンターには無料の大根の柚子漬け、昼の無料ご飯は終わりライスは100円に。夏は店内が暑い。現金のみ、週末は営業時間を確認して。',
  });
}

// ================================================================ 鶏そば 小箱
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27092848/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['18:00', '23:00']), SA = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_tori_soba_kobako_nishihonmachi', name: '鶏そば 小箱 (Tori Soba Kobako)', category: 'OMNI',
    lat: 34.681761, lng: 135.488784, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare. The chilled noodles use some tapioca flour but are still wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone broth, chicken oil, chashu.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 18:00–23:00; Sat and holidays 11:30–15:00 and 17:00–21:00; Sun 11:30–15:00; irregular holidays (Tabelog, staff-maintained). Ticket machine. Cards (VISA, Master), e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: day(['11:30', '15:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishihonmachi 3-1-7 (Nishi-ku) — 1 min from Awaza Stn',
    cuisine: 'Tori soba: clear chicken-bone shoyu with chicken oil and yuzu peel, medium-thin straight noodles, three kinds of chashu (thigh, breast and rare pork) · light tori soba ¥750 (limited-time price), with seasoned egg ¥900 · tori paitan soba · large +¥150 · rotating limited bowls: Kochi-style jyanmen ¥1,100 with garlic chives, horumon and egg; chilled tantanmen ¥1,000; "Kobako-ppo" chilled kombu-style noodles with wasabi ¥1,000; chashu mazesoba · mini green-onion salt chashu rice ¥150 at lunch · 7 counter seats',
    website: null, gmaps: gm('鶏そば 小箱 阿波座'), menu_url: null,
    notes: "[Ramen · clear chicken shoyu and rotating specials by Awaza] A seven-seat counter a minute from Awaza, open since 2016. The tori soba is a clear chicken-bone shoyu, subtly sweet with a clean, sharp edge and a lift of yuzu peel, on medium-thin straight noodles with three kinds of chashu (¥750 at a limited-time price; ¥900 with a runny seasoned egg). There's also a tori paitan. What keeps one regular coming back nine times is the rotating limited menu: a Kochi-style jyanmen with garlic chives, horumon and egg, a chilled tantanmen, the \"Kobako-ppo\" chilled kombu-style noodles with wasabi, a chashu mazesoba. Add the ¥150 green-onion salt chashu rice at lunch. Service is attentive. Open to 23:00 on weekdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 June 2016 (Tabelog)', background: 'Chicken ramen counter (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Clear chicken shoyu; limited bowls.',
      anecdotes: [
        { text: '"The clear broth made from chicken bones and soy sauce has a deep flavor, and the addition of yuzu peel adds a refreshing aroma… The medium-thin noodles have a nice bite and pair well with the two types of chashu—thigh and breast meat." — September 2026, tori soba with seasoned egg ¥900.', source: R + 'B536773018/' },
        { text: '"The soup is a soy-based chicken broth with a low viscosity, featuring garlic chives, Horumon, and beaten eggs… This style is inspired by the authentic version from Kochi." — October 2026, limited jyanmen ¥1,100.', source: R + 'B474699062/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 鶏そば 小箱、大阪市西区西本町3-1-7、阿波座駅から徒歩1分、月〜金11:30〜15:00・18:00〜23:00、土祝11:30〜15:00・17:00〜21:00、日11:30〜15:00、不定休、カード(VISA、Master)・電子マネー・QR可、7席、2016年6月22日開店。口コミ(2026年9〜10月): 9回目、限定のジャン麺1,100円(辛さ増し100円、ライス100円、味玉150円)、粘度の低い醤油ベースの鶏スープにニラ・ホルモン・溶き卵、やや太いもちもち麺、高知の本場風、限定チャーシューまぜそば、冷やし担々麺1,000円、小箱っぽ1,000円、2杯OK、玉ねぎ・ねぎ・鶏胸・モモチャーシュー・肉味噌・ラー油、レアチャーシュー・モモチャーシュー2枚・味玉・おろし生姜・わさび、昆布の旨味、タピオカ粉入りの冷たい細ストレート麺、鶏そば味玉900円、昼限定のミニねぎ塩チャーシューご飯150円、鶏油の効いた醤油、次は鶏白湯そば、カウンターのみ、券売機、鶏ガラと醤油の澄んだスープ、柚子皮、中細麺、モモと胸のチャーシュー、丁寧な接客、あっさり鶏そば(醤油)750円、平日20時は待ちなし、ほんのり甘い鶏清湯醤油、チャーシュー3種、期間限定価格、大盛り+150円、スーパーホテル阿波座の近く。',
      confidence: 'medium', sources: [TB, R + 'B536773018/', R + 'B474699062/', R + 'B531720849/', R + 'B536384617/', R + 'B537806874/', R + 'B538105848/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles; thin straight chilled noodles with tapioca flour (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Tori soba (clear chicken shoyu), ¥750–900 (September–October 2026).',
      chashu: 'Three kinds: chicken thigh, chicken breast and rare pork (September–October 2026).',
      notable_toppings: ['yuzu peel', 'seasoned egg', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Awaza\'s clear chicken shoyu with yuzu, and a limited menu worth returning for.',
      profile: { richness: 2, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B538105848/', '"The light soy sauce broth made from chicken bones" — placed low.'],
        oiliness: [R + 'B536384617/', '"A rich soy sauce flavor enhanced by chicken oil" — mid-scale.'],
        clarity: [R + 'B536773018/', '"The clear broth made from chicken bones and soy sauce."'],
        tare_strength: [R + 'B537806874/', '"A nice sharpness and a great balance" — mid-scale.'],
        noodle_firmness: [R + 'B536773018/', '"The medium-thin noodles have a nice bite" — mid-scale.'],
        aroma_punch: [R + 'B536773018/', '"Yuzu peel adds a refreshing aroma" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536773018/', R + 'B537806874/', R + 'B536384617/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; attentive service (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区西本町3-1-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区西本町三丁目1番7号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537806874/', R + 'B536773018/', R + 'B474699062/'],
    price_note: 'Prices from September–October 2026 reviews; ¥750 was a limited-time price.', last_checked: TODAY, items: [
      it('', '', 'Light tori soba (shoyu)', '¥750', 'Ramen', 'no', 'no', 'Limited-time price; October 2026.', 'tori_soba'),
      it('', '', 'Tori soba with seasoned egg', '¥900', 'Ramen', 'no', 'no', 'September 2026.', 'tori_soba_ajitama'),
      it('', '', 'Limited jyanmen (Kochi style)', '¥1,100', 'Limited', 'no', 'no', 'October 2026.', 'jyanmen'),
      it('', '', 'Chilled tantanmen', '¥1,000', 'Limited', 'no', 'no', 'September 2026.', 'hiyashi_tantan'),
      it('', '', 'Mini green-onion salt chashu rice (lunch)', '¥150', 'Rice', 'no', 'no', 'September 2026.', 'negishio_don'),
    ] }, {
    cuisine: '鶏そば: 鶏油と柚子皮の澄んだ鶏ガラ醤油、中細ストレート麺、モモ・胸・豚レアの3種のチャーシュー・あっさり鶏そば750円(期間限定価格)、味玉付き900円・鶏白湯そば・大盛り+150円・入れ替わる限定: ニラ・ホルモン・卵の高知風ジャン麺1,100円、冷やし担々麺1,000円、わさびを添えた冷たい「小箱っぽ」1,000円、チャーシューまぜそば・昼はミニねぎ塩チャーシューご飯150円・カウンター7席',
    neighborhood: '西区西本町3-1-7。阿波座駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。冷たい麺はタピオカ粉入りだが小麦が主体。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラのスープ、鶏油、チャーシュー。',
    notes: '[ラーメン・阿波座、澄んだ鶏醤油と入れ替わる限定麺] 阿波座から1分のカウンター7席の店で、2016年開店。鶏そばは鶏ガラの澄んだ醤油で、ほんのり甘くキレがあり、柚子皮が香る。中細ストレート麺に3種のチャーシュー(期間限定で750円、とろりとした味玉付きは900円)。鶏白湯もある。9回通う常連のお目当ては入れ替わる限定メニューで、ニラ・ホルモン・卵の高知風ジャン麺、冷やし担々麺、わさびを添えた冷たい「小箱っぽ」、チャーシューまぜそばなど。昼は150円のねぎ塩チャーシューご飯を。接客は丁寧。平日は23時まで。',
  });
}

// ================================================================ 中華麺食堂 亀吉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27060730/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00']);
  put({
    id: 'osaka_chuka_men_shokudo_kameyoshi_uchihonmachi', name: '中華麺食堂 亀吉 (Chuka Men Shokudo Kameyoshi)', category: 'OMNI',
    lat: 34.682961, lng: 135.512296, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-seasoned fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood broths, chashu, lard in the fried rice.',
    hours_raw: 'Tue–Sat 11:30–15:00; closed Sundays, Mondays and holidays; temporary closures happen; hours may change (Tabelog). An expanded menu, including kuro-tama fried rice, from 13:00 (September 2026). Cash only: no cards, e-money or QR (Tabelog). Return your dishes to the counter.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uchihonmachi 2-3-8, 1F — 7 min from Tanimachi 4-chome Stn',
    cuisine: 'Ramen and fried rice lunch counter · half-and-half set of ramen and fried rice, ¥1,400 with large fried rice · kote shiro (rich, soy) ramen · shio scallop ramen · dan dan noodles with a side of rice · spicy miso ramen with vegetables and minced meat · kuro-tama fried rice with dark soy and chashu (after 13:00) · omelette fried rice ¥1,100 · seafood mixed fried rice ¥1,300, nearly 500 g · 8 counter seats',
    website: null, gmaps: gm('中華麺食堂 亀吉 内本町'), menu_url: null,
    notes: "[Ramen · a ramen-and-fried-rice lunch counter near Tanimachi 4-chome] An eight-seat lunch-only counter in Uchihonmachi, open since 2011, where the fried rice draws as big a line as the noodles. The classic order is the half-and-half set (¥1,400 with a large fried rice), picking a ramen: the rich kote shiro shoyu one regular always orders, a shio scallop, a spicy miso full of vegetables and minced meat, or dan dan noodles with a subtle Sichuan-pepper note that come with a side of rice. From 13:00 the menu expands to the kuro-tama fried rice, dark-soy and packed with chashu, worth a 20-minute wait to fans. The omelette and seafood fried rices are huge. It's smoky from the woks, and one diner found the service brusque. Lunch Tuesday to Saturday only; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 October 2011 (Tabelog)', background: 'Ramen and fried rice shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Half ramen and fried rice sets; kuro-tama fried rice.',
      anecdotes: [
        { text: '"The Dan Dan Noodles had a hint of Sichuan pepper aroma, but it didn\'t overpower the ramen… To my astonishment, the Dan Dan Noodles came with a default side of… a bowl of white rice!" — September 2026.', source: R + 'B532331171/' },
        { text: '"The fragrant fried rice with dark soy sauce was packed with generous chunks of chashu, making it incredibly satisfying." — September 2026, kuro-tama fried rice, after 13:00.', source: R + 'B537954478/' },
      ],
      japanese_sources_summary: '食べログ: 中華麺食堂 亀吉、大阪市中央区内本町2-3-8 ダイアパレスビル 1F、谷町四丁目駅から徒歩7分、堺筋本町駅から徒歩8分、火〜土11:30〜15:00、日月祝休み、カード・電子マネー・QR不可、カウンター8席、禁煙、2011年10月21日開店。口コミ(2025年10月〜2026年10月): 夏メニュー、こて白(醤油)ラーメン、ラーメンとチャーハンのハーフ&ハーフ、ラーメンもチャーハンも種類が多い、黒玉チャーハン、いつも行列、臨時休業あり、チャーハン大のハーフセット1,400円、塩ほたて、チャーハンが先に出る、食器を返すよう言われたという声、担々麺は花椒がほのかに香る、ひき肉たっぷり、白ご飯付き、辛味噌ラーメンと半チャーハン、オムチャーハン1,100円、ラードが多め、海鮮五目チャーハン1,300円で500g近い、店内は鍋の白い煙、13時以降はメニューが増える、黒玉チャーハンで20分待ち、濃い口醤油と大きなチャーシュー。',
      confidence: 'medium', sources: [TB, R + 'B532331171/', R + 'B537954478/', R + 'B500703504/', R + 'B529409907/', R + 'B535323717/', R + 'B537133049/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu', 'shio', 'miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Noodle details not given in 2026 reviews.' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Half-and-half set of ramen and fried rice, ¥1,400 with large fried rice (September 2026).',
      chashu: 'Chashu chunks in the kuro-tama fried rice (September 2026).',
      notable_toppings: ['minced meat (dan dan)', 'vegetables (spicy miso)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat-based broths.' },
      pantheon: 'Uchihonmachi\'s lunch counter where the half-ramen, half-fried-rice set is the point.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B500703504/', '"I really love this rich style" (kote shiro) — placed high.'],
        oiliness: [R + 'B535323717/', 'Fried rice "a bit more lard than I prefer" — mid-scale.'],
        clarity: [R + 'B500703504/', 'Rich kote shiro shoyu — placed low.'],
        tare_strength: [R + 'B532331171/', 'Spicy miso "a rich broth" — placed high.'],
        noodle_firmness: [R + 'B532331171/', 'No firmness noted — mid-scale default.'],
        aroma_punch: [R + 'B532331171/', '"A hint of Sichuan pepper aroma" (dan dan) — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B500703504/', R + 'B532331171/', R + 'B535323717/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Return dishes to the counter; cash only; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区内本町2-3-8 ダイアパレスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区内本町二丁目3番8号 (go) 44m — Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529409907/', R + 'B535323717/', R + 'B537133049/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Half ramen and large fried rice set', '¥1,400', 'Sets', 'no', 'no', 'September 2026.', 'half_half'),
      it('', '', 'Kote shiro (soy) ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'kote_shiro'),
      it('', '', 'Dan dan noodles with rice', '', 'Ramen', 'no', 'no', 'September 2026.', 'tantan'),
      it('', '', 'Kuro-tama fried rice (after 13:00)', '', 'Fried rice', 'no', 'no', 'September 2026.', 'kurotama'),
      it('', '', 'Omelette fried rice', '¥1,100', 'Fried rice', 'no', 'no', 'September 2026.', 'omu_chahan'),
      it('', '', 'Seafood mixed fried rice', '¥1,300', 'Fried rice', 'no', 'no', 'October 2026.', 'kaisen_chahan'),
    ] }, {
    cuisine: 'ラーメンとチャーハンの昼のカウンター・ラーメンとチャーハンのハーフ&ハーフ、チャーハン大で1,400円・こて白(醤油)ラーメン・塩ほたてラーメン・白ご飯付きの担々麺・野菜とひき肉の辛味噌ラーメン・濃い口醤油とチャーシューの黒玉チャーハン(13時以降)・オムチャーハン1,100円・500g近い海鮮五目チャーハン1,300円・カウンター8席',
    neighborhood: '中央区内本町2-3-8 1F。谷町四丁目駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油で味付けしたチャーハン。',
    vegan_detail: 'ヴィーガンではありません。肉や魚介のスープ、チャーシュー、チャーハンのラード。',
    notes: '[ラーメン・谷町四丁目近く、ラーメンとチャーハンの昼のカウンター] 内本町にある昼だけのカウンター8席の店で、2011年開店、麺と同じくらいチャーハン目当ての行列ができる。定番はハーフ&ハーフ(チャーハン大で1,400円)で、ラーメンを選ぶ: 常連がいつも頼む濃厚なこて白醤油、塩ほたて、野菜とひき肉たっぷりの辛味噌、花椒がほのかに香り白ご飯の付く担々麺。13時以降はメニューが増え、濃い口醤油にチャーシューたっぷりの黒玉チャーハンが登場、ファンは20分待っても食べる。オムチャーハンや海鮮チャーハンは大盛り。鍋の煙がこもり、接客がそっけないと感じた人も。火〜土の昼のみ、現金のみ。',
  });
}

// ================================================================ 武士道
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27041650/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.bushido.gr.jp/';
  const D = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'osaka_menya_bushido_itachibori', name: '武士道 (Menya Bushido)', category: 'OMNI',
    lat: 34.679469, lng: 135.487462, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; black soy tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, back fat, meat; Iberico pork gyoza.',
    hours_raw: 'Tue–Sun 11:30–14:30 and 17:30–22:00; closed Mondays and 31 December–4 January (Tabelog, staff-maintained). One ticket machine; shoes off at the entrance. Weekly LINE coupons (October 2026). Cash only (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Itachibori 4-6-20, 1F (Nishi-ku) — 5 min from Awaza Stn exit 4',
    cuisine: 'Samurai-themed ramen house · black shoyu ramen ¥830–990: punchy dark soy, sweeter than it looks, with back fat, minced garlic, stir-fried bean sprouts, cabbage and pork · free extra garlic and back fat; switch to thick curly noodles free; up to 200 g free, Bushido size 300 g +¥280 · staff-meal black shoyu ¥880 · seafood black shoyu tsukemen with spice levels to "shogun" · miso ramen · abura soba · limited spicy ramen · night-only Iberico Bellota tsukemen and gyoza · kids\' ramen ¥350 · Samurai ramen, 1.4 kg · tatami and sunken seating, 32 seats',
    website: OWN, gmaps: gm('武士道 立売堀 ラーメン'), menu_url: null,
    notes: "[Ramen · samurai-themed black shoyu with garlic and back fat by Awaza] A playful Sengoku-period-themed ramen house near Awaza, open since 2009: you take off your shoes and sit on tatami among samurai decorations, and staff send you off with \"have a safe journey.\" The draw is the black shoyu ramen (¥830–990), which looks inky but tastes sweet-savory, loaded with back fat and minced garlic, stir-fried bean sprouts, cabbage and pork; add garlic and fat free, switch to thick curly noodles free, and size up to 200 g at no charge. There's a seafood black shoyu tsukemen with spice levels named for samurai and shogun, a miso, an abura soba, and a 1.4 kg Samurai ramen challenge. Evenings add Iberico Bellota tsukemen and gyoza. Register on LINE for weekly coupons. One ticket machine; cash only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 June 2009 (Tabelog)', background: 'Samurai-themed ramen shop (official site bushido.gr.jp; Tabelog, staff-maintained).', philosophy: null, specialty: 'Black shoyu ramen.',
      anecdotes: [
        { text: '"The broth was a punchy black shoyu, rich with plenty of back fat and minced garlic, topped with stir-fried vegetables and meat. The noodles were thick, round, and had a delightful chewy texture." — August 2026, black shoyu ramen ¥830.', source: R + 'B457960123/' },
        { text: '"It looks very dark, but surprisingly, it\'s not overwhelmingly rich. The soy sauce broth has a hint of sweetness, enhanced by the back fat and garlic, creating a very balanced flavor." — October 2026.', source: R + 'B537814153/' },
      ],
      japanese_sources_summary: '公式 bushido.gr.jp。食べログ(店舗会員): 武士道、大阪市西区立売堀4-6-20 立売堀ビル 1F、阿波座駅4番出口から徒歩5分、火〜日11:30〜14:30・17:30〜22:00、月曜定休、12月31日〜1月4日休み、カード不可、32席(カウンター4、テーブル28)、座敷・掘りごたつ、禁煙、2009年6月23日開店、夜限定で最高級イベリコ豚ベジョータのつけ麺と餃子、数量限定の辛いラーメン、濃厚魚介ラーメン、お子様ラーメン350円、総重量1.4kgの侍ラーメン。口コミ(2024年2月〜2026年10月): 近所でたまに食べたくなる、辛いラーメン、LINE登録で定期的なサービス、戦国時代のテーマ、味噌ラーメン、極太縮れ麺に変更、黒醤油ラーメン830円、武士道サイズ(300g)280円、肉大盛り380円、にんにく増しと背脂増しは無料、背脂とにんにくたっぷりのパンチのある黒醤油、炒めた野菜と肉、太い丸麺、魚介黒醤油つけ麺の辛さ増し、辛さ4は侍、5は将軍、帰りに元気な見送り、油そば、300gまで無料という声、靴を脱いで座敷へ、侍の衣装、黒醤油ラーメン味玉付き990円、150gから200gまで無料、見た目より甘くにんにくが効く、まかない黒醤油ラーメン880円、LINEのクーポンは毎週火曜、券売機は1台、胡椒コール、もやしとキャベツ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B457960123/', R + 'B537814153/', R + 'B421133877/', R + 'B530036661/', R + 'B530206594/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Thick round noodles, or thick curly at no charge (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Black shoyu ramen, ¥830–990 (2026).',
      chashu: 'Stir-fried pork with the vegetables; extra meat +¥380 (August 2026).',
      notable_toppings: ['back fat', 'minced garlic', 'bean sprouts', 'cabbage'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth and back fat.' },
      pantheon: 'Awaza\'s samurai ramen house: inky black shoyu, back fat and garlic, eaten on tatami.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B457960123/', '"A punchy black shoyu, rich with plenty of back fat" — placed high.'],
        oiliness: [R + 'B457960123/', '"Plenty of back fat" — placed high.'],
        clarity: [R + 'B537814153/', '"It looks very dark" — placed low.'],
        tare_strength: [R + 'B530206594/', '"Surprisingly sweet and the garlic hits you hard" — placed high.'],
        noodle_firmness: [R + 'B457960123/', '"Thick, round, and had a delightful chewy texture."'],
        aroma_punch: [R + 'B530206594/', '"The garlic hits you hard" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B457960123/', R + 'B537814153/', R + 'B530206594/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; one ticket machine, so decide before queuing; loud, cheerful staff calls (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区立売堀4-6-20 立売堀ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区立売堀四丁目6番20号 (go) 7m; OSM 武士道 node/6961523585 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B457960123/', R + 'B530206594/', TB],
    price_note: 'Prices from June–August 2026 reviews and the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Black shoyu ramen', '¥830', 'Ramen', 'no', 'no', '¥990 with seasoned egg; 2026.', 'kuro_shoyu'),
      it('', '', 'Staff-meal black shoyu ramen', '¥880', 'Ramen', 'no', 'no', 'June 2026.', 'makanai'),
      it('', '', 'Seafood black shoyu tsukemen', '', 'Tsukemen', 'no', 'no', 'Spice levels; 2024.', 'tsukemen'),
      it('', '', 'Bushido size (300 g)', '+¥280', 'Toppings', 'no', 'no', 'August 2026.', 'bushido_size'),
      it('', '', 'Kids\' ramen', '¥350', 'Ramen', 'no', 'no', 'Tabelog listing.', 'kids'),
    ] }, {
    cuisine: '侍がテーマのラーメン屋・黒醤油ラーメン830〜990円: 見た目より甘いパンチのある黒醤油、背脂、刻みにんにく、炒めたもやし、キャベツ、豚肉・にんにく増しと背脂増しは無料、極太縮れ麺への変更も無料、200gまで無料、武士道サイズ300gは+280円・まかない黒醤油880円・辛さを「将軍」まで選べる魚介黒醤油つけ麺・味噌ラーメン・油そば・数量限定の辛いラーメン・夜限定のイベリコ豚ベジョータのつけ麺と餃子・お子様ラーメン350円・1.4kgの侍ラーメン・座敷と掘りごたつ、32席',
    neighborhood: '西区立売堀4-6-20 1F。阿波座駅4番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、黒醤油のたれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、肉、イベリコ豚の餃子。',
    notes: '[ラーメン・阿波座、侍の店の背脂にんにく黒醤油] 阿波座近くの戦国時代がテーマの遊び心ある店で、2009年開店。靴を脱いで侍の飾りに囲まれた座敷に上がり、帰りは元気に送り出される。看板の黒醤油ラーメン(830〜990円)は真っ黒な見た目に反して甘じょっぱく、背脂と刻みにんにく、炒めたもやし、キャベツ、豚肉がたっぷり。にんにくと背脂の増しは無料、極太縮れ麺への変更も無料、200gまでは追加料金なし。侍や将軍と名の付く辛さの魚介黒醤油つけ麺、味噌、油そば、1.4kgの侍ラーメンへの挑戦も。夜はイベリコ豚ベジョータのつけ麺と餃子。LINE登録で毎週クーポン。券売機は1台、現金のみ、月曜定休。',
  });
}

save();
