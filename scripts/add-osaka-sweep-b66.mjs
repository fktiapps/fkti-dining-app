// Osaka sweep (2-mile circle around Dotonbori), batch 66 — ramen phase (all OMNI).
//   + 麺家あくた川直系 麺家よし川 (iekei from the Akutagawa line near Shinsaibashi)
//   + Ramen KURUMU (8 am wonton-noodle shoyu, black and white, soup until it runs out)
//   + 超豚骨 濃度8 (late-night thin-noodle tonkotsu with a marked order sheet)
//   + 麺や輝 長堀橋店 (seafood-tonkotsu tsukemen and limited bowls)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 66);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺家あくた川直系 麺家よし川
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27134792/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://menya-yoshikawa.com/';
  put({
    id: 'osaka_menya_yoshikawa_minamisenba', name: '麺家あくた川直系 麺家よし川 (Menya Akutagawa Chokkei Menya Yoshikawa)', category: 'OMNI',
    lat: 34.675801, lng: 135.502058, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chicken fat, chashu.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–23:00; open year-round, with closures posted on social media (Tabelog). Ticket machine; noodle firmness, richness and oil to order (October 2026). Lunch lines from office workers. Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['17:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 3-5-27, Alpha Shinsaibashi 1F — 2 min from Shinsaibashi Stn',
    cuisine: 'Iekei ramen in the Akutagawa line (Shin-Nakano Musashiya family) · Yoshikawa ramen: rich pork-bone shoyu with chicken-fat aroma, medium-thick noodles, smoked chashu · "Gyoton!!" seafood-tonkotsu · firmness, richness and oil to order · rice ¥100 with free refills · chashu rice-bowl sets · doubanjiang and garlic on the counter · 20 counter seats',
    website: OWN, gmaps: gm('麺家よし川 心斎橋'), menu_url: null,
    notes: "[Ramen · Akutagawa-line iekei near Shinsaibashi] A 20-seat counter two minutes from Shinsaibashi, open since 2023 and serving iekei ramen from the Akutagawa line of the Musashiya family. The Yoshikawa ramen is a rich pork-bone shoyu with chicken-fat aroma, deeper than it is heavy, over medium-thick noodles with smoked chashu; set firmness, richness and oil when you hand over the ticket. The Gyoton!! balances seafood umami with pork sweetness. Rice is ¥100 with free refills, so pour broth over it and add the table's doubanjiang and garlic. Reviewers call it a solid, classic bowl rather than a standout, and one found it a bit salty. Office workers line up at lunch. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 March 2023 (Tabelog)', background: 'Direct lineage of Menya Akutagawa, in the Shin-Nakano Musashiya family tree (Tabelog name; October 2026 review); official site menya-yoshikawa.com.', philosophy: null, specialty: 'Yoshikawa ramen; Gyoton!!.',
      anecdotes: [
        { text: '"The rich flavor of the pork bone broth combined with a deep soy sauce base is quite satisfying, yet it remains relatively mild and easy to drink. The aroma of chicken fat enhances the experience." — October 2026.', source: R + 'B537870067/' },
        { text: '"The chashu was perfectly smoked, giving it an incredible aroma. Pouring the soup over the rice was absolutely delicious." — October 2026.', source: R + 'B537297888/' },
      ],
      japanese_sources_summary: '公式 menya-yoshikawa.com。食べログ: 麺家あくた川直系 麺家よし川、大阪市中央区南船場3-5-27 アルファ心斎橋1F、心斎橋駅から徒歩2分、毎日11:00〜15:00・17:00〜23:00、年中無休(休みはSNSで)、カード・電子マネー・QR不可、20席(カウンター)、禁煙、2023年3月9日開店。口コミ(2026年10月): よし川ラーメン並、硬め・普通・普通、甘みのある濃厚なスープ、中太麺、脂の多いチャーシュー2枚、塩気が強めという声、現金のみ、券売機、昼は会社員で行列、外国人客も、ぎょ豚!!、ライス100円でおかわり自由、魚介の旨みと豚の甘み、燻製の香るチャーシュー、豆板醤とにんにく、マイルドで食べやすい家系、新中野武蔵家の系譜、鶏油の香り。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537870067/', R + 'B537297888/', R + 'B537262853/', R + 'B537372983/', R + 'B537421242/', R + 'B537859100/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick, smooth; firmness to order (October 2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Yoshikawa ramen (October 2026).',
      chashu: 'Smoked, fatty slices (October 2026).',
      notable_toppings: ['smoked chashu', 'doubanjiang (counter)', 'garlic (counter)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Minamisenba\'s Musashiya-line iekei: a rich but drinkable pork-bone shoyu with smoked chashu and ¥100 rice.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537262853/', '"The broth is rich with a hint of sweetness."'],
        oiliness: [R + 'B537297888/', '"Mild and very easy to eat" versus greasy iekei — mid-scale.'],
        clarity: [R + 'B537870067/', 'Pork-bone broth — opaque.'],
        tare_strength: [R + 'B537262853/', '"The broth has a strong flavor… a bit less saltiness."'],
        noodle_firmness: [R + 'B537372983/', '"The medium-thick noodles were smooth" — mid-scale.'],
        aroma_punch: [R + 'B537870067/', '"The aroma of chicken fat" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537262853/', R + 'B537297888/', R + 'B537870067/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; customization asked at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-5-27 アルファ心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目5番27号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537372983/', R + 'B537262853/'],
    price_note: 'Only the rice price captured (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Yoshikawa ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'yoshikawa'),
      it('', '', 'Gyoton!! (seafood tonkotsu)', '', 'Ramen', 'no', 'no', 'October 2026.', 'gyoton'),
      it('', '', 'Rice (free refills)', '¥100', 'Rice', 'ask', 'vegan', 'October 2026.', 'rice'),
      it('', '', 'Ramen and chashu rice-bowl set', '', 'Sets', 'no', 'no', 'October 2026.', 'set'),
    ] }, {
    cuisine: 'あくた川の系譜の家系ラーメン(新中野武蔵家の系統)・よし川ラーメン: 鶏油の香る濃厚な豚骨醤油、中太麺、燻製チャーシュー・魚介豚骨の「ぎょ豚!!」・硬さ、濃さ、油を選べる・ライス100円でおかわり自由・チャーシュー丼のセット・卓上に豆板醤とにんにく・カウンター20席',
    neighborhood: '南船場3-5-27 アルファ心斎橋1F。心斎橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、鶏油、チャーシュー。',
    notes: '[ラーメン・心斎橋近くのあくた川系の家系] 心斎橋駅から2分のカウンター20席の店で、2023年開店、武蔵家の系譜のあくた川の流れをくむ家系ラーメン。よし川ラーメンは鶏油の香る濃厚な豚骨醤油で、重すぎず深みがあり、中太麺に燻製のチャーシュー。硬さ、濃さ、油は食券を渡すときに。「ぎょ豚!!」は魚介の旨みと豚の甘みのバランス。ライスは100円でおかわり自由なので、スープをかけ、卓上の豆板醤とにんにくを足して。突出した個性より、しっかりした王道の一杯という声が多く、少し塩辛いという人も。昼は会社員で行列。現金のみ。',
  });
}

// ================================================================ Ramen KURUMU
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27138637/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_kurumu_kitahorie', name: 'Ramen KURUMU', category: 'OMNI',
    lat: 34.674157, lng: 135.495521, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles and wonton wrappers; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: jidori chicken broth, pork and shrimp wontons, chashu.',
    hours_raw: 'Daily 8:00–15:00, until the soup runs out; closed irregularly — check Instagram or Google Maps (Tabelog). Ticket machine at the entrance. Lines of a few people most mornings, about 10–20 minutes (September–October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['08:00', '15:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-9-11, 1F — 3 min from Yotsubashi Stn exit 4',
    cuisine: 'Morning wonton-noodle ramen · black (jidori chicken broth with dark soy) or white (shio with yuzu) · pork and shrimp wonton noodles ¥1,200 · ajitama shio (white) ¥1,100 · ajitama ¥100 · medium-thin straight noodles · thin, wide chashu · springy shrimp wontons and juicy pork wontons · chili oil and black pepper on the counter · 11 counter seats',
    website: null, gmaps: gm('Ramen KURUMU 北堀江'), menu_url: null,
    notes: "[Ramen · morning wonton noodles in Kitahorie] An 11-seat counter in Kitahorie, three minutes from Yotsubashi, open since October 2023 from 8 am until the soup runs out, so noon visitors sometimes find it closed. The owner trained at Yakumo, Tokyo's famous wonton-noodle shop, and the name means \"cloud\" in Korean as a nod to it. Choose black, a clear 100% jidori chicken broth with dark soy, or white, a shio with a light yuzu lift. The draw is the wontons: springy shrimp ones and juicy pork ones in big, slippery wrappers; the pork and shrimp wonton noodles are ¥1,200 (September–October 2026). Medium-thin noodles and thin, wide chashu complete it. One reviewer found the table pepper unnecessary. Expect a short line most mornings. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 October 2023 (Tabelog)', background: 'Owner trained at the Tokyo wonton-noodle shop Yakumo; "KURUMU" means cloud in Korean, inspired by Yakumo (October 2026 review).', philosophy: null, specialty: 'Pork and shrimp wonton noodles.',
      anecdotes: [
        { text: '"The clear umami from the chicken broth flows in smoothly… The signature wontons are exquisite! The larger, chewy skins slide down easily." — September 2026, meat and shrimp wonton noodles [black] ¥1,200.', source: R + 'B536357915/' },
        { text: '"The black version combines 100% jidori chicken clear broth with soy sauce." — October 2026.', source: R + 'B536587454/' },
      ],
      japanese_sources_summary: '食べログ: Ramen KURUMU、大阪市西区北堀江1-9-11 1F、四ツ橋駅4番出口から徒歩3分、毎日8:00〜15:00(スープがなくなり次第終了、Instagramで告知)、不定休、カード・電子マネー・QR不可、11席(カウンター)、禁煙、2023年10月6日開店。口コミ(2026年5〜10月): 週末朝8時に行列で約20分、肉と海老のワンタン麺(黒)1,200円、味玉100円、動物系のスープと香味油に醤油、中細麺、ねぎ、メンマ、海苔、薄切りチャーシュー、海老ワンタンにラー油、肉ワンタンに黒胡椒、黒の肉ワンタン2個、あっさりでもおいしい、ストレート麺、正午に入れたが帰りには5人待ち、黒と白の2種の醤油、幅広のチャーシュー、胡椒は不要という声、味玉塩らーめん(白)1,100円、柚子、少し油っぽい、平打ちかもしれない麺、東京の有名なワンタン麺店で修業した店主、店名は雲の意味、券売機、カウンター11席、黒は地鶏100%の清湯と醤油、訪日客も多い、あっさりめという声。',
      confidence: 'medium', sources: [TB, R + 'B536357915/', R + 'B536587454/', R + 'B472564195/', R + 'B488497725/', R + 'B536418495/', R + 'B536799861/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight, chewy noodles (May–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Pork and shrimp wonton noodles [black], ¥1,200 (September–October 2026).',
      chashu: 'Thin, wide slices (September 2026).',
      notable_toppings: ['shrimp wontons', 'pork wontons', 'ajitama', 'yuzu (white)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Kitahorie\'s 8 am wonton noodles: a clear jidori shoyu with springy shrimp and juicy pork wontons.',
      profile: { richness: 2, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536587454/', '"Overall, the ramen is on the lighter side."'],
        oiliness: [R + 'B472564195/', '"Rich animal broth and fragrant oil"; white "a bit oily" (B536418495) — mid-scale.'],
        clarity: [R + 'B536587454/', '"100% jidori chicken clear broth."'],
        tare_strength: [R + 'B472564195/', '"A robust soy sauce" (black) — mid-scale.'],
        noodle_firmness: [R + 'B472564195/', '"Medium-thin and have a nice chewy texture" — mid-scale.'],
        aroma_punch: [R + 'B536418495/', '"The yuzu added a refreshing touch without being overpowering" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B536357915/', R + 'B536587454/', R + 'B472564195/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; many overseas guests (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-9-11 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目9番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536357915/', R + 'B536418495/', R + 'B472564195/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork and shrimp wonton noodles (black or white)', '¥1,200', 'Ramen', 'no', 'no', 'September–October 2026.', 'wonton'),
      it('', '', 'Ajitama shio ramen (white)', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'shiro'),
      it('', '', 'Ajitama', '¥100', 'Toppings', 'ask', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '朝のワンタン麺・黒(地鶏の清湯に濃い醤油)か白(柚子の塩)・肉と海老のワンタン麺1,200円・味玉塩らーめん(白)1,100円・味玉100円・中細ストレート麺・幅広の薄切りチャーシュー・ぷりぷりの海老ワンタンとジューシーな肉ワンタン・卓上にラー油と黒胡椒・カウンター11席',
    neighborhood: '西区北堀江1-9-11 1F。四ツ橋駅4番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺とワンタンの皮、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。地鶏のスープ、豚肉と海老のワンタン、チャーシュー。',
    notes: '[ラーメン・北堀江の朝のワンタン麺] 四ツ橋駅から3分、北堀江にあるカウンター11席の店で、2023年10月開店、朝8時からスープがなくなるまでの営業なので、昼に行くと閉まっていることも。店主は東京の有名なワンタン麺の店Yakumoで修業し、店名はそれにちなんだ韓国語で「雲」の意味。黒は地鶏100%の澄んだスープに濃い醤油、白は柚子がほのかに香る塩。主役はワンタンで、ぷりぷりの海老とジューシーな肉が、つるりとした大きな皮に包まれています。肉と海老のワンタン麺は1,200円(2026年9〜10月)。中細麺と幅広の薄切りチャーシュー。卓上の胡椒は不要だったという声も。朝はたいてい少し並びます。現金のみ。',
  });
}

// ================================================================ 超豚骨 濃度8
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27075464/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_cho_tonkotsu_noudohachi', name: '超豚骨 濃度8 (Cho Tonkotsu Noudohachi)', category: 'OMNI',
    lat: 34.667143, lng: 135.51028, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare and spicy miso not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, back fat, chashu.',
    hours_raw: 'Daily 11:30–1:00 am (L.O. 0:30), extended from 15 December 2025 (Tabelog). Buy a ticket, then mark firmness, green onion, back fat, garlic and spicy miso on a sheet (September–October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:30', '01:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kozu 2-7-3, 1F — 2 min from Nippombashi Stn exit 7',
    cuisine: 'Tonkotsu ramen ("concentration 8") · creamy yet lighter-than-it-looks pork-bone broth · thin straight noodles, or thicker wavy on another bowl · order sheet for firmness, green onion, back fat, garlic and spicy miso · all-toppings ramen · limited "concentration 27" · W soup · rice to finish in the broth · 11 counter seats',
    website: null, gmaps: gm('超豚骨 濃度8 高津'), menu_url: null,
    notes: "[Ramen · late-night tonkotsu with a marked order sheet, near Nippombashi] An 11-seat tonkotsu counter two minutes from Nippombashi exit 7, open since 2013 and now serving until 1 am. Despite the name (\"concentration 8\") and the looks, the pork-bone broth is creamy but lighter and easier than you'd expect; one diner braved the limited \"concentration 27\" and found it only a little richer. After buying a ticket you mark a sheet for noodle firmness, green onion, back fat, garlic and spicy miso. Thin straight noodles are the default, with a thicker wavy option on another bowl. The all-toppings ramen adds chashu and a good seasoned egg, and you can finish with rice in the broth. A regular calls it reliably solid. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 October 2013 (Tabelog)', background: 'Tonkotsu ramen counter in Kozu (Tabelog).', philosophy: null, specialty: 'Tonkotsu ramen.',
      anecdotes: [
        { text: '"When placing my order, I could choose the firmness of the noodles, the amount of green onions, the amount of back fat, the amount of garlic, and the amount of spicy miso, all by marking options on a form… The tonkotsu broth was surprisingly light and creamy, despite its appearance." — October 2026, all-toppings ramen.', source: R + 'B537971156/' },
        { text: '"My companion ordered the default Noudohachi 8, while I went for the limited Noudohachi 27… it turned out to be just a little richer than the 8." — September 2026.', source: R + 'B535891798/' },
      ],
      japanese_sources_summary: '食べログ: 超豚骨 濃度8、大阪市中央区高津2-7-3 バーリービル1F、日本橋駅7番出口から徒歩2分、毎日11:30〜翌1:00(L.O.0:30、2025年12月15日から延長)、カード・電子マネー・QR不可、11席(カウンター)、禁煙、2013年10月11日開店。口コミ(2026年9〜10月): 食券に記入して渡す、硬さ・にんにく・辛さ、締めのご飯、細ストレート麺とやや太い縮れ麺の2種、遅くまで営業、外国人のひとり客も、濃度8と限定の濃度27、27でも少し濃い程度、ライブの帰りに、それほど濃くない、全部のせと替えスープ(Wスープ)、食べやすい、麺の硬さ・ねぎ・背脂・にんにく・辛味噌を記入、見た目より軽くクリーミー、細麺、チャーシューと味玉、よく通う、安定した味。',
      confidence: 'medium', sources: [TB, R + 'B537971156/', R + 'B535891798/', R + 'B535873059/', R + 'B537249876/', R + 'B537733555/', R + 'B538131021/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles; a thicker wavy noodle on another bowl (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Cho Tonkotsu Noudohachi (concentration 8) ramen (October 2026).',
      chashu: 'Praised on the all-toppings bowl (October 2026).',
      notable_toppings: ['back fat (to order)', 'garlic', 'spicy miso', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Kozu\'s 1 am tonkotsu: a creamy pork-bone broth you tune on a marked sheet, lighter than its name.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537971156/', '"Surprisingly light and creamy, despite its appearance" — mid-scale.'],
        oiliness: [R + 'B537733555/', '"It wasn\'t overly rich" — mid-scale.'],
        clarity: [R + 'B537971156/', 'Creamy tonkotsu — opaque.'],
        tare_strength: [R + 'B538131021/', '"Solid quality" — mid-scale.'],
        noodle_firmness: [R + 'B535873059/', 'Firmness to order — mid-scale.'],
        aroma_punch: [R + 'B537971156/', 'Garlic and spicy miso to order — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537971156/', R + 'B537733555/', R + 'B535891798/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine plus a marked order sheet.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高津2-7-3 バーリービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高津二丁目7番3号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537971156/', R + 'B537733555/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Cho Tonkotsu Noudohachi ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'noudo8'),
      it('', '', 'All-toppings ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'zenbu'),
      it('', '', 'Noudo 27 (limited)', '', 'Limited', 'no', 'no', 'September 2026.', 'noudo27'),
      it('', '', 'Rice to finish', '', 'Rice', 'ask', 'vegan', 'September 2026.', 'rice'),
    ] }, {
    cuisine: '豚骨ラーメン(濃度8)・クリーミーでも見た目より軽い豚骨スープ・細ストレート麺、別の一杯にはやや太い縮れ麺・硬さ、ねぎ、背脂、にんにく、辛味噌を記入する注文票・全部のせ・限定の濃度27・Wスープ・締めにご飯・カウンター11席',
    neighborhood: '高津2-7-3 バーリービル1F。日本橋駅7番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれや辛味噌の中身は不明。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、背脂、チャーシュー。',
    notes: '[ラーメン・日本橋近くの深夜1時までの記入式の豚骨] 日本橋駅7番出口から2分のカウンター11席の豚骨ラーメンの店で、2013年開店、今は深夜1時まで営業。「濃度8」という名前と見た目に反して、豚骨スープはクリーミーながら意外と軽く食べやすく、限定の「濃度27」に挑んだ人も少し濃い程度だったそう。食券を買ったら、麺の硬さ、ねぎ、背脂、にんにく、辛味噌を用紙に記入。基本は細ストレート麺で、別の一杯にはやや太い縮れ麺も。全部のせはチャーシューとおいしい味玉付きで、最後はご飯をスープに入れて。安定した味という常連も。現金のみ。',
  });
}

// ================================================================ 麺や輝 長堀橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27058822/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.terufood.com/';
  const W = day(['11:00', '14:30'], ['18:30', '22:00']), S = day(['11:30', '14:00'], ['18:30', '22:00']);
  put({
    id: 'osaka_menya_teru_nagahoribashi', name: '麺や輝 長堀橋店 (Menya Teru Nagahoribashi)', category: 'OMNI',
    lat: 34.67583, lng: 135.504488, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; seafood-tonkotsu dip.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork bones and seafood in the broth, chashu.',
    hours_raw: 'Mon–Fri 11:00–14:30 (L.O. 14:20) and 18:30–22:00 (L.O. 21:50); Sat 11:30–14:00 and 18:30–22:00; closed Sunday and holidays; hours may change, and one diner found it closed at listed times three times (Tabelog; June 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 2-5-20 — 2 min from Nagahoribashi Stn (Crysta Nagahori exit 2B)',
    cuisine: 'Seafood-tonkotsu tsukemen and ramen · tsukemen ¥1,050, ajitama tsukemen ¥1,150 (June 2026) · thick, dark dip of pork bones and vegetables simmered down with seafood and kombu, no additives · chashu tsukemen (large) · onsen-tamago special ramen with medium-thin firm noodles and a niboshi-forward fish tonkotsu · limited bowls: rich niboshi tsukemen, spicy tsukemen, chilled curry ramen, mackerel ramen · 12 counter seats',
    website: OWN, gmaps: gm('麺や輝 長堀橋'), menu_url: null,
    notes: "[Tsukemen · seafood-tonkotsu tsukemen by Nagahoribashi] A 12-seat counter two minutes from Nagahoribashi, a branch (since 2011) of a group known for seafood tonkotsu, with its head office in Higashiyodogawa. The broth simmers pork bones and vegetables until they dissolve, then adds seafood and kombu, for a dark, thick, additive-free dip with a gentle flavor. Tsukemen is ¥1,050, or ¥1,150 with a seasoned egg (June 2026), and one repeat visitor loves the chashu and noodles in the large chashu tsukemen. The onsen-tamago special ramen has a niboshi-forward fish tonkotsu, easy to drink, on medium-thin firm noodles. Limited bowls rotate: rich niboshi or spicy tsukemen, a standout chilled curry ramen, a mackerel ramen. One diner wanted the dip hotter and the noodles chewier. The listed hours aren't always kept, so check first. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 July 2011 (Tabelog)', background: 'Nagahoribashi branch of Menya Teru; head office in Sugawara, Higashiyodogawa (Tabelog); official site terufood.com.', philosophy: 'Additive-free broth of pork bones, vegetables, seafood and kombu (June 2026 review).', specialty: 'Seafood-tonkotsu tsukemen.',
      anecdotes: [
        { text: '"The broth is made by simmering pork bones and vegetables until they dissolve, then adding seafood and kombu, resulting in a dark, thick soup where everything blends together." — June 2026, ajitama tsukemen ¥1,150.', source: R + 'B529776076/' },
        { text: '"The broth was a fish-based tonkotsu with a strong niboshi flavor… It definitely wasn\'t overly intense with the niboshi, making it easy to drink. The noodles were medium-thin and slightly firm." — July 2026, onsen-tamago special ramen.', source: R + 'B531699567/' },
      ],
      japanese_sources_summary: '公式 terufood.com。食べログ: 麺や輝 長堀橋店、大阪市中央区南船場2-5-20、長堀橋駅クリスタ長堀2B出口から徒歩2分、月〜金11:00〜14:30(L.O.14:20)・18:30〜22:00(L.O.21:50)、土11:30〜14:00・18:30〜22:00、日・祝休み、カード・電子マネー・QR不可、12席(カウンター)、2011年7月7日開店、本店は東淀川区菅原。口コミ(2026年5〜10月): チャーシューつけ麺大、限定のB辛つけ麺、濃厚煮干しつけ麺、魚介豚骨で有名な店の支店、味玉つけ麺1,150円、豚骨と野菜を溶けるまで煮込み魚介と昆布を合わせた濃いスープ、無添加でやさしい味、もう少し熱いほうがいいという声、つけ麺1,050円、味玉がサービス、店主が感じがいい、限定の鯖のラーメンは売り切れ、温玉特製ラーメン、煮干しの効いた魚介豚骨、中細でやや硬めの麺、冷やしカレーラーメンが絶品、営業時間どおりに開いていないことがあった、濃厚な魚介スープ、硬めの麺、ひとりでも入りやすい。',
      confidence: 'medium', sources: [TB, OWN, R + 'B529776076/', R + 'B531699567/', R + 'B504159867/', R + 'B530604941/', R + 'B532323701/', R + 'B537594884/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai', 'vegetable'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick noodles for tsukemen; medium-thin, slightly firm for the ramen (June–July 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen', 'niboshi'],
      signature_bowl: 'Ajitama tsukemen, ¥1,150 (June 2026).',
      chashu: 'Loved on the chashu tsukemen (August 2026).',
      notable_toppings: ['ajitama', 'onsen tamago', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and seafood broth.' },
      pantheon: 'Nagahoribashi\'s seafood tonkotsu: a dark, dissolved pork-and-vegetable dip with seafood and kombu, no additives.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B529776076/', '"A dark, thick soup where everything blends together."'],
        oiliness: [R + 'B537594884/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B529776076/', 'A dark, thick soup — opaque.'],
        tare_strength: [R + 'B529776076/', '"The flavor is gentle" — mid-scale.'],
        noodle_firmness: [R + 'B537594884/', '"The noodles are firm"; "didn\'t feel much of a chewiness" (B529776076) — mid-scale.'],
        aroma_punch: [R + 'B531699567/', '"A strong niboshi flavor."'],
      },
      confidence: 'medium', sources: [R + 'B529776076/', R + 'B531699567/', R + 'B537594884/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; easy for solo diners (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-5-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目5番20号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529776076/', R + 'B530604941/'],
    price_note: 'Prices from June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen', '¥1,050', 'Tsukemen', 'no', 'no', 'June 2026.', 'tsuke'),
      it('', '', 'Ajitama tsukemen', '¥1,150', 'Tsukemen', 'no', 'no', 'June 2026.', 'ajitama_tsuke'),
      it('', '', 'Chashu tsukemen (large)', '', 'Tsukemen', 'no', 'no', 'August 2026.', 'chashu_tsuke'),
      it('', '', 'Onsen-tamago special ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'ontama'),
      it('', '', 'Chilled curry ramen (limited)', '', 'Limited', 'no', 'no', 'June 2026.', 'curry'),
    ] }, {
    cuisine: '魚介豚骨のつけ麺とラーメン・つけ麺1,050円、味玉つけ麺1,150円(2026年6月)・豚骨と野菜を溶けるまで煮込み魚介と昆布を合わせた無添加の濃いつけ汁・チャーシューつけ麺(大)・中細でやや硬めの麺、煮干しの効いた魚介豚骨の温玉特製ラーメン・限定(濃厚煮干しつけ麺、辛つけ麺、冷やしカレーラーメン、鯖のラーメン)・カウンター12席',
    neighborhood: '南船場2-5-20。長堀橋駅(クリスタ長堀2B出口)から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の極太麺、魚介豚骨のつけ汁。',
    vegan_detail: 'ヴィーガンではありません。スープに豚骨と魚介、チャーシュー。',
    notes: '[つけ麺・長堀橋近くの魚介豚骨つけ麺] 長堀橋駅から2分のカウンター12席の店で、魚介豚骨で知られる麺や輝の支店(2011年から)、本店は東淀川区。スープは豚骨と野菜を溶けるまで煮込み、魚介と昆布を合わせた、濃く無添加でやさしい味わい。つけ麺は1,050円、味玉付きで1,150円(2026年6月)、大盛りのチャーシューつけ麺はチャーシューと麺が好きという人も。温玉特製ラーメンは煮干しの効いた飲みやすい魚介豚骨で、中細のやや硬めの麺。限定も入れ替わり、濃厚煮干しや辛いつけ麺、評判の冷やしカレーラーメン、鯖のラーメンなど。つけ汁がもっと熱く、麺にもっとコシがほしいという声も。営業時間どおりに開いていないこともあるので確認を。現金のみ。',
  });
}

save();
