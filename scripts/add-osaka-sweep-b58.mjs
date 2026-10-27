// Osaka sweep (2-mile circle around Dotonbori), batch 58 — ramen phase (all OMNI).
//   + 塩そば 時空 OSAKA (Osaka branch of a Tokyo shio-soba shop, opened 2026, 8 seats)
//   + らーめん一八 日本橋店 (8-seat rich ramen and tsukemen, open to 5 am)
//   + 味噌物語 麺乃國＋ 難波千日前店 (Hokkaido and Kyushu miso ramen)
//   + くそオヤジ最後のひとふり なんば店 (clam and shijimi shoyu ramen, scallop TKM)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 58);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 塩そば 時空 OSAKA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27156059/'; const R = TB + 'dtlrvwlst/';
  const M = day(['10:30', '15:00'], ['18:00', '22:00']), W = day(['10:30', '15:00'], ['18:00', '21:30']), F = day(['10:30', '15:00'], ['18:00', '22:30']);
  put({
    id: 'osaka_shio_soba_jikuu_osaka', name: '塩そば 時空 OSAKA (Shio Soba Jikuu Osaka)', category: 'OMNI',
    lat: 34.67466, lng: 135.504607, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy in the weekend shoyu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth with seafood, chicken and pork chashu, tsukune.',
    hours_raw: 'Mon 10:30–15:00 and 18:00–22:00; Tue–Thu and Sun 10:30–15:00 and 18:00–21:30; Fri–Sat 10:30–15:00 and 18:00–22:30 (Tabelog). Ticket machine at the entrance. Lines form soon after opening (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: M, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-9-19, 1F — about 3 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Shio soba from the Osaka branch of a Tokyo shop · special shio soba ¥1,480: clear, light chicken broth with a hint of seafood, four chashu (low-temperature Daisendori chicken, pork belly, simmered and rare pork), chicken-cartilage tsukune with ginger or yuzu, kaiware, menma · ajitama ¥180 · weekend-only special ura shoyu soba ¥1,480 · thin square-cut noodles from Takai-do Seimen · chashu rice bowl set · 8 counter seats',
    website: null, gmaps: gm('塩そば 時空 OSAKA 東心斎橋'), menu_url: null,
    notes: "[Ramen · a Tokyo shio-soba shop's Osaka branch in Higashi-Shinsaibashi] An eight-seat counter in Higashi-Shinsaibashi, the Osaka branch of a Tokyo shio-soba shop that reviewers describe as a Tabelog 100 and Michelin-listed name, open since spring 2026. Lines form within minutes of opening. The special shio soba (¥1,480, May and October 2026) is a clear, light chicken broth with a hint of seafood, over thin square-cut noodles from Takai-do Seimen. It comes loaded with four chashu, from low-temperature Daisendori chicken to juicy pork belly, plus a chicken-cartilage tsukune scented with ginger or yuzu, kaiware and menma. One diner wanted more salt; another found the salt pronounced. On weekends there's a special ura shoyu soba at the same price. The set adds a chashu rice bowl heaped with meat. It's cramped when full, and one diner found service slow. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 April 2026 per Tabelog (one reviewer gives 5 May)', background: 'Osaka branch of a Tokyo shio-soba shop; reviewers call the Tokyo shop a Tabelog 100 and Michelin-listed (May and October 2026 reviews).', philosophy: null, specialty: 'Special shio soba with four chashu.',
      anecdotes: [
        { text: '"The broth was a light and delicious salt flavor with a hint of seafood aroma. The noodles were slightly firm and had a nice chewiness, perfectly complementing the clear salt broth." — May 2026, special shio soba ¥1,480.', source: R + 'B527764447/' },
        { text: '"I visited on Thursday at 6 PM when they opened. There was one customer ahead of me… within 10 minutes, there was a line forming." — October 2026.', source: R + 'B537448863/' },
      ],
      japanese_sources_summary: '食べログ: 塩そば 時空 OSAKA、大阪市中央区東心斎橋1-9-19 ミトオリアートビル1F、心斎橋駅・長堀橋駅から徒歩約3分、月10:30〜15:00・18:00〜22:00、火・水・木・日10:30〜15:00・18:00〜21:30、金・土10:30〜15:00・18:00〜22:30、カード・電子マネー・QR不可、8席、禁煙、2026年4月27日開店。口コミ(2026年5〜10月): 東京の有名店の大阪店、週末限定の特製裏醤油そば1,480円、魚介がほのかに香るあっさり醤油、Takai-do Seimenの細麺、軟骨入りの鶏つくね、4種のチャーシュー(低温調理の鶏、バラ、煮豚、低温調理の豚)、5月5日開店という声、東京の百名店の支店、特製塩そば1,480円、味玉180円、Daisendoriの低温チャーシュー、カイワレ、生姜の効いたつくね、カウンター8席、澄んだスープ、鶏の旨み、塩気は控えめという声、角断面の麺、柚子のつくね、チャーシュー丼のセット、券売機、混むと狭い、東京本店がミシュランに掲載、行列、塩気がしっかりという声、中太ストレートという声、ラジオが流れていた、提供が少し遅い。',
      confidence: 'medium', sources: [TB, R + 'B527764447/', R + 'B537448863/', R + 'B536791908/', R + 'B537179319/', R + 'B537223555/', R + 'B537505657/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, square-cut noodles from Takai-do Seimen, slightly firm (May–October 2026); one diner called them medium-thick.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Special shio soba, ¥1,480 (May and October 2026).',
      chashu: 'Four kinds: low-temperature Daisendori chicken, pork belly, simmered pork, rare pork (May–October 2026).',
      notable_toppings: ['chicken-cartilage tsukune', 'kaiware', 'menma', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Higashi-Shinsaibashi\'s Tokyo import: a clear chicken shio with a whisper of seafood and four kinds of chashu.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536791908/', '"Light yet packed with the rich flavor of chicken" — placed low.'],
        oiliness: [R + 'B536791908/', '"Smooth and easy to drink" — placed low.'],
        clarity: [R + 'B536791908/', '"Its clear broth."'],
        tare_strength: [R + 'B537179319/', '"The salt flavor is prominent"; another wanted more salt (B536791908) — mid-scale.'],
        noodle_firmness: [R + 'B527764447/', '"Slightly firm and had a nice chewiness."'],
        aroma_punch: [R + 'B527764447/', '"A hint of seafood aroma" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B527764447/', R + 'B536791908/', R + 'B537179319/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; small counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-9-19 ミトオリアートビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); opened spring 2026; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目9番19号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527764447/', R + 'B536791908/'],
    price_note: 'Prices from May and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special shio soba', '¥1,480', 'Ramen', 'no', 'no', 'May and October 2026.', 'tokusei_shio'),
      it('', '', 'Special ura shoyu soba (weekends)', '¥1,480', 'Ramen', 'no', 'no', 'October 2026.', 'ura_shoyu'),
      it('', '', 'Ajitama', '¥180', 'Toppings', 'ask', 'no', 'May 2026.', 'ajitama'),
      it('', '', 'Chashu rice bowl (set)', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '東京の店の大阪店の塩そば・特製塩そば1,480円: 魚介がほのかに香る澄んだあっさりの鶏スープ、4種のチャーシュー(低温調理のDaisendoriの鶏、豚バラ、煮豚、レアの豚)、生姜や柚子の香る鶏軟骨つくね、カイワレ、メンマ・味玉180円・週末限定の特製裏醤油そば1,480円・Takai-do Seimenの角断面の細麺・チャーシュー丼のセット・カウンター8席',
    neighborhood: '東心斎橋1-9-19 ミトオリアートビル1F。心斎橋駅・長堀橋駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、週末の醤油には醤油。',
    vegan_detail: 'ヴィーガンではありません。魚介を合わせた鶏のスープ、鶏と豚のチャーシュー、つくね。',
    notes: '[ラーメン・東心斎橋の東京の塩そばの大阪店] 東心斎橋にあるカウンター8席の店で、口コミでは百名店でミシュランにも載った東京の塩そばの店の大阪店とされ、2026年春に開店。開店して数分で行列ができます。特製塩そば(1,480円、2026年5月・10月)は、魚介がほのかに香る澄んだあっさりの鶏スープに、Takai-do Seimenの角断面の細麺。低温調理のDaisendoriの鶏からジューシーな豚バラまで4種のチャーシュー、生姜や柚子が香る鶏軟骨のつくね、カイワレ、メンマがのります。塩気がもう少し欲しいという人も、しっかりという人も。週末は同じ値段で特製裏醤油そば。セットにはチャーシューたっぷりの丼。満席だと狭く、提供が遅めだったという声も。現金のみ。',
  });
}

// ================================================================ らーめん一八 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27037020/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '05:00']);
  put({
    id: 'osaka_ramen_kazuya_nipponbashi', name: 'らーめん一八 日本橋店 (Ramen Kazuya Nipponbashi)', category: 'OMNI',
    lat: 34.664068, lng: 135.506223, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; rich broth not described for wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone and pork-bone broth, chashu, egg.',
    hours_raw: 'Mon and Wed–Sun 11:00–5:00 am; closed Tuesday; may also close over New Year or temporarily (Tabelog). Ticket machine. No cover charge. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nippombashi 2-8-15 — near Otaro Road, between Nippombashi and Namba',
    cuisine: 'Rich, thick ramen and tsukemen, open to 5 am · ramen ¥800, small ¥100 less, extra noodles ¥180 · tsukemen with thick noodles in a rich chicken-bone, pork-bone and vegetable dip, chashu, menma, ajitama and shredded green onion · spicy green-onion ramen · all-toppings ramen · vinegar, pepper and chili oil on the counter · 8 counter seats',
    website: null, gmaps: gm('らーめん一八 日本橋'), menu_url: null,
    notes: "[Ramen · rich late-night ramen near Otaro Road, open to 5 am] An old-school eight-seat counter near Otaro Road, open since 2009 and serving until 5 am, a favorite after a night out or a missed last train. The ramen is thick and rich, with noodles that soak it up and good chashu. It's ¥800 (April 2026), ¥100 less for a small, and ¥180 for a full extra serving of noodles. The tsukemen pairs thick noodles with a rich dip of chicken bones, pork bones and vegetables, plus chashu, menma, a seasoned egg and plenty of shredded green onion, good with a cold beer. The spicy green-onion ramen has a moderate kick. Vinegar, pepper and chili oil sit on the counter. Expect overseas visitors and a short queue late on weekdays. Buy a ticket at the machine; cash only. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 April 2009 (Tabelog)', background: 'Late-night ramen counter in Nippombashi (2025–2026 reviews).', philosophy: null, specialty: 'Rich ramen and tsukemen.',
      anecdotes: [
        { text: '"The dipping sauce was rich, made from chicken bones, pork bones, and vegetables. It had a deep flavor, enhanced by the aroma of green onions, making it impossible to stop dipping the thick noodles." — September 2026, tsukemen late at night.', source: R + 'B535831580/' },
        { text: '"Price: Ramen JPY 800, Extra Noodle JPY 180. Table Condiments: Vinegar, Pepper, Chili Oil." — April 2026, fifth visit.', source: R + 'B485744847/' },
      ],
      japanese_sources_summary: '食べログ: らーめん一八 日本橋店、大阪市中央区日本橋2-8-15、近鉄日本橋駅から311m、月・水〜日・祝11:00〜翌5:00、火曜休み(年末年始や臨時休業あり)、カード・電子マネー・QR不可、チャージなし、8席(カウンター)、2009年4月10日開店、食券制。口コミ(2025年9月〜2026年9月): 小ラーメンは100円引き、濃厚なスープを吸う麺、チャーシュー、ラーメン800円、替え玉180円、卓上に酢・胡椒・ラー油、平日夜10時に1組待ち、セルフの水、外国人観光客も多い、カウンター8〜9席、全部のせ、オタロードの近く、終電を逃して深夜2時に、濃厚でとろみのあるスープ、辛ねぎラーメン、つけ麺(極太麺、チャーシュー、メンマ、味玉、白髪ねぎ)、鶏ガラ・豚骨・野菜の濃厚なつけ汁、ビールに合う、昔ながらのラーメン店。',
      confidence: 'medium', sources: [TB, R + 'B535831580/', R + 'B485744847/', R + 'B324603442/', R + 'B528872303/', R + 'B531465145/', R + 'B532833076/'] },
    ramen: {
      broth_base: ['chicken', 'pork', 'vegetable'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick noodles for the tsukemen (September 2026); ramen noodles soak up the broth (May 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Ramen, ¥800 (April 2026); tsukemen.',
      chashu: 'Substantial chashu (May and September 2026).',
      notable_toppings: ['ajitama', 'shredded green onion', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-bone and pork-bone broth.' },
      pantheon: 'Nippombashi\'s 5 am bowl: a thick, rich chicken-and-pork broth at an eight-seat counter near Otaro Road.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B531465145/', '"The ramen broth was thick and rich, with a deep flavor."'],
        oiliness: [R + 'B535831580/', '"The fat from the chashu" — mid-scale.'],
        clarity: [R + 'B532833076/', '"The rich, thick broth" — opaque.'],
        tare_strength: [R + 'B532833076/', '"Packed with flavor" — mid-scale.'],
        noodle_firmness: [R + 'B324603442/', '"Noodles that perfectly absorbed the rich broth" — mid-scale.'],
        aroma_punch: [R + 'B535831580/', '"Enhanced by the aroma of green onions" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B531465145/', R + 'B535831580/', R + 'B532833076/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; self-service water.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-8-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目8番15号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B485744847/', R + 'B324603442/'],
    price_note: 'Prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥800', 'Ramen', 'no', 'no', 'April 2026.', 'ramen'),
      it('', '', 'Small ramen', '¥700', 'Ramen', 'no', 'no', 'May 2026; ¥100 less than regular.', 'sho'),
      it('', '', 'Extra noodles (kaedama)', '¥180', 'Options', 'no', 'no', 'April 2026.', 'kaedama'),
      it('', '', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsuke'),
      it('', '', 'Spicy green-onion ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'kara_negi'),
    ] }, {
    cuisine: '朝5時まで営業の濃厚でとろみのあるラーメンとつけ麺・ラーメン800円、小は100円引き、替え玉180円・極太麺に鶏ガラ・豚骨・野菜の濃厚なつけ汁、チャーシュー、メンマ、味玉、白髪ねぎのつけ麺・辛ねぎラーメン・全部のせ・卓上に酢、胡椒、ラー油・カウンター8席',
    neighborhood: '日本橋2-8-15。オタロードの近く、日本橋となんばの間',
    gf_detail: 'グルテンフリーではありません。小麦の麺、濃厚なスープの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと豚骨のスープ、チャーシュー、卵。',
    notes: '[ラーメン・オタロード近くの朝5時までの濃厚ラーメン] オタロードの近くにある昔ながらのカウンター8席の店で、2009年開店、朝5時まで営業し、飲んだ後や終電を逃した夜に頼れる一軒。ラーメンはとろみのある濃厚なスープで、麺がよく吸い、チャーシューもおいしい。800円(2026年4月)で、小は100円引き、替え玉は180円で一玉分。つけ麺は極太麺に鶏ガラ・豚骨・野菜の濃厚なつけ汁、チャーシュー、メンマ、味玉、たっぷりの白髪ねぎで、冷えたビールに合います。辛ねぎラーメンはほどよい辛さ。卓上に酢、胡椒、ラー油。海外の客も多く、平日の夜遅くは少し待つことも。食券は券売機で、現金のみ。火曜定休。',
  });
}

// ================================================================ 味噌物語 麺乃國＋ 難波千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27077653/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.kunimaru.net/';
  put({
    id: 'osaka_miso_monogatari_men_no_kuni_plus', name: '味噌物語 麺乃國＋ 難波千日前店 (Miso Monogatari Men no Kuni Plus Namba Sennichimae)', category: 'OMNI',
    lat: 34.663235, lng: 135.504861, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso tare usually contains wheat or barley.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: broth not described; egg on the ajitama bowl.',
    hours_raw: 'Daily 11:00–22:00 (Tabelog). No cards or e-money; QR accepted, including PayPay and Merpay (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambasennichimae 6-9 — about 4 min from Nankai Namba Stn',
    cuisine: 'Miso ramen from Hokkaido and Kyushu misos · Hokkaido 100-year miso vegetable ramen with stir-fried bean sprouts, onion, carrot, garlic chives and cabbage · Hokkaido 100-year miso ramen with egg ¥1,150 · Kyushu miso ¥1,030 · golden grilled miso (limited) · medium-thick noodles · rice ¥200 · 25 seats',
    website: OWN, gmaps: gm('味噌物語 麺乃國 難波千日前'), menu_url: null,
    notes: "[Ramen · Hokkaido and Kyushu miso ramen in Sennichimae] A miso-ramen specialist in Sennichimae, open since 2014, with fair prices for Namba. The menu runs on regional misos. The Hokkaido \"100-year miso\" vegetable ramen comes topped with crunchy stir-fried bean sprouts, onion, carrot, garlic chives and cabbage over a thick, roasted-tasting broth. The Hokkaido miso with egg is ¥1,150 and the Kyushu miso ¥1,030 (June and September 2026). A limited golden grilled miso had a striking aroma yet stayed easy to drink. Medium-thick, smooth noodles hold up well, and even a regular is filling. One returning diner found the room a little worn after ten years, but the bowl as good as ever. Open daily; PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 December 2014 (Tabelog)', background: 'Miso-ramen shop; official site kunimaru.net (Tabelog).', philosophy: null, specialty: 'Hokkaido 100-year miso vegetable ramen.',
      anecdotes: [
        { text: '"I had the Hokkaido 100-Year Miso Vegetable Ramen. It includes not just bean sprouts, but also onions, carrots, garlic chives, and cabbage." — June 2026.', source: R + 'B529742506/' },
        { text: '"The aroma of the grilled miso was impressive, and the broth was particularly delicious. It had a rich flavor while still being easy to drink." — June 2026, golden grilled miso ramen.', source: R + 'B530148381/' },
      ],
      japanese_sources_summary: '公式 kunimaru.net。食べログ: 味噌物語 麺乃國＋ 難波千日前店、大阪市中央区難波千日前6-9、南海なんば駅から283m、毎日11:00〜22:00、カード・電子マネー不可、QR可(PayPay・メルペイ)、25席、禁煙、2014年12月1日開店。口コミ(2026年3〜10月): 期間限定の黄金焼き味噌、九州味噌並1,030円、PayPayが使えた、北海道百年味噌の野菜ラーメン(もやし、玉ねぎ、人参、ニラ、キャベツ)、観光地価格の店が多い中で良心的、黄金焼き味噌は香ばしく飲みやすい、中太麺、味噌ラーメンが2〜3種、北海道百年味噌の味玉ラーメン1,150円、白ご飯200円、バターコーンがほしいという声、並でも十分な量、メニューが豊富、10年ぶりの訪問、店内は少し古くなった、シャキシャキの炒め野菜、香ばしくとろみのある味噌スープ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B529742506/', R + 'B530148381/', R + 'B496218121/', R + 'B530507250/', R + 'B533155509/', R + 'B537450456/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick, smooth and chewy (June–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Hokkaido 100-year miso vegetable ramen (June and October 2026).',
      chashu: null,
      notable_toppings: ['stir-fried vegetables', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles; miso tare.' },
      vegan: { status: 'no', note: 'Broth not described.' },
      pantheon: 'Sennichimae\'s miso shop: a roasted Hokkaido miso under a heap of crunchy stir-fried vegetables.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537450456/', '"A rich, roasted miso flavor that was thick and delicious."'],
        oiliness: [R + 'B530148381/', '"Rich… while still being easy to drink" — mid-scale.'],
        clarity: [R + 'B537450456/', 'A thick miso broth — opaque.'],
        tare_strength: [R + 'B530507250/', '"A rich miso flavor" — mid-scale.'],
        noodle_firmness: [R + 'B537450456/', '"Smooth and with a nice chew" — mid-scale.'],
        aroma_punch: [R + 'B530148381/', '"The aroma of the grilled miso was impressive."'],
      },
      confidence: 'medium', sources: [R + 'B537450456/', R + 'B530148381/', R + 'B530507250/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Large menu of miso styles.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前6-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前6番9号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530507250/', R + 'B496218121/', R + 'B529742506/'],
    price_note: 'Prices from June and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hokkaido 100-year miso vegetable ramen', '', 'Ramen', 'no', 'no', 'June and October 2026.', 'yasai'),
      it('', '', 'Hokkaido 100-year miso ramen with egg', '¥1,150', 'Ramen', 'no', 'no', 'June 2026.', 'ajitama'),
      it('', '', 'Kyushu miso ramen (regular)', '¥1,030', 'Ramen', 'no', 'no', 'September 2026.', 'kyushu'),
      it('', '', 'Golden grilled miso ramen (limited)', '', 'Limited', 'no', 'no', 'March and June 2026.', 'yakimiso'),
      it('', '', 'White rice', '¥200', 'Rice', 'ask', 'vegan', 'June 2026.', 'rice'),
    ] }, {
    cuisine: '北海道と九州の味噌の味噌ラーメン・もやし、玉ねぎ、人参、ニラ、キャベツの炒め野菜をのせた北海道百年味噌の野菜ラーメン・北海道百年味噌の味玉ラーメン1,150円・九州味噌1,030円・黄金焼き味噌(限定)・中太麺・ご飯200円・25席',
    neighborhood: '難波千日前6-9。南海なんば駅から徒歩約4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌だれには小麦や大麦が入ることが多いです。',
    vegan_detail: '実際にはヴィーガンではありません。スープの中身は不明、味玉の一杯には卵。',
    notes: '[ラーメン・千日前の北海道と九州の味噌ラーメン] 千日前にある味噌ラーメン専門店で、2014年開店、なんばでは良心的な値段。メニューは産地ごとの味噌が軸。北海道「百年味噌」の野菜ラーメンは、シャキシャキのもやし、玉ねぎ、人参、ニラ、キャベツの炒め野菜が、香ばしくとろみのあるスープにのります。北海道味噌の味玉は1,150円、九州味噌は1,030円(2026年6月・9月)。限定の黄金焼き味噌は香りが際立つのに飲みやすかったそう。中太のなめらかな麺はしっかりして、並でも満腹に。10年ぶりに来たら店内は少し古びたけれど味は変わらないという人も。年中無休、PayPay可。',
  });
}

// ================================================================ くそオヤジ最後のひとふり なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27127448/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.unchi-co.com/';
  const W = day(['11:00', '23:00']), F = day(['11:00', '23:30']);
  put({
    id: 'osaka_kuso_oyaji_saigo_no_hitofuri_namba', name: 'くそオヤジ最後のひとふり なんば店 (Kuso Oyaji Saigo no Hitofuri Namba)', category: 'OMNI',
    lat: 34.663081, lng: 135.504269, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-grain wheat noodles; shoyu broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam and shijimi broth, chashu, scallop.',
    hours_raw: 'Mon–Thu and Sun 11:00–23:00 (L.O. 22:30); Fri, Sat and days before holidays 11:00–23:30 (L.O. 23:00) (Tabelog). Table seating suits families (September 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-1-15, Naniwa — about 3 min from Nankai Namba Stn south exit',
    cuisine: 'Shellfish ramen · clam ramen in a shoyu broth, ringed with large slices of rare chashu, thick menma and shredded white negi · lighter shijimi ramen · summer cold clam ramen with myoga · scallop-scented "golden" TKM (egg-yolk noodles) with rice to finish · clam rice · whole-grain medium-thick straight noodles · 10 counter and 16 table seats',
    website: OWN, gmaps: gm('くそオヤジ最後のひとふり なんば店'), menu_url: null,
    notes: "[Ramen · clam and shijimi ramen south of Nankai Namba] A roomy shellfish-ramen shop three minutes from Nankai Namba's south exit, open since 2022, with tables that work for families. The clam ramen packs plenty of clams into a shoyu broth with deep shellfish umami, and big slices of rare chashu drape the rim, softening when dipped. Thick crunchy menma and shredded white negi keep it lively. The shijimi ramen is lighter, a good post-drinks bowl, and one regular always orders it. In summer there's a cold clam ramen with myoga (staff check you're fine with it). The \"golden\" TKM is egg-yolk-coated noodles scented with scallop broth, with rice to mop up the sauce. The noodles seem to be whole-grain, with a strong wheat flavor. One diner wanted a bigger portion, so consider a large. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 January 2022 (Tabelog)', background: 'Shellfish-ramen brand; official site unchi-co.com (Tabelog).', philosophy: 'A commitment to shellfish broth (October 2026 review).', specialty: 'Clam ramen; shijimi ramen.',
      anecdotes: [
        { text: '"I was captivated by the large slices of rare chashu covering the rim of the bowl and the generous amount of clams inside… the rich umami of the clams spread throughout my mouth, perfectly complemented by the depth of the soy sauce." — August 2026, clam ramen.', source: R + 'B533100412/' },
        { text: '"The shijimi (small clams) ramen is even lighter, making it a perfect choice after a night out. The noodles seemed to be whole grain, with a strong wheat flavor." — September 2026.', source: R + 'B535827033/' },
      ],
      japanese_sources_summary: '公式 unchi-co.com。食べログ: くそオヤジ最後のひとふり なんば店、大阪市浪速区難波中2-1-15、南海なんば駅南口から徒歩3分、月〜木・日11:00〜23:00(L.O.22:30)、金・土・祝前日11:00〜23:30(L.O.23:00)、カード・電子マネー・QR不可、26席(カウンター10、テーブル16)、禁煙、2022年1月8日開店。口コミ(2026年6〜10月): 貝のラーメン、丼のふちを覆う大きなレアチャーシュー、たっぷりの貝、貝の旨みと醤油の深み、中太ストレート麺、太いメンマ、白髪ねぎ、夏限定の冷やしで貝がたっぷり、ミョウガが大丈夫か確認してくれた、バランスのいい一杯、量はもう少し欲しい、家族で、テーブル席は子ども連れにも、しじみラーメンはさらにあっさりで飲んだ後に、全粒粉のような小麦の風味の麺、いつもしじみラーメン、貝めし、帆立香る黄金のTKM、締めのご飯。',
      confidence: 'medium', sources: [TB, OWN, R + 'B533100412/', R + 'B535827033/', R + 'B533956973/', R + 'B535079733/', R + 'B537555921/', R + 'B537661845/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight, whole-grain with a strong wheat flavor (August–September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Clam ramen (August–September 2026).',
      chashu: 'Large slices of rare chashu around the rim (August 2026).',
      notable_toppings: ['clams', 'thick menma', 'shredded white negi', 'myoga (cold ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam broth.' },
      pantheon: 'Namba\'s shellfish shop: a clam shoyu crowned with rare chashu, and a lighter shijimi for the end of the night.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535827033/', '"A mix of rich and light flavors" — mid-scale.'],
        oiliness: [R + 'B535827033/', '"A refreshing broth" — placed low.'],
        clarity: [R + 'B533100412/', 'No comment on clarity — mid-scale.'],
        tare_strength: [R + 'B533100412/', '"Perfectly complemented by the depth of the soy sauce" — mid-scale.'],
        noodle_firmness: [R + 'B533100412/', '"The medium-thick straight noodles clung well to the broth" — mid-scale.'],
        aroma_punch: [R + 'B535079733/', '"A rich clam flavor."'],
      },
      confidence: 'medium', sources: [R + 'B533100412/', R + 'B535827033/', R + 'B535079733/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Table seats; family-friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-1-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目1番15号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533100412/', R + 'B535827033/', R + 'B537661845/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Clam ramen', '', 'Ramen', 'no', 'no', 'August–September 2026.', 'clam'),
      it('', '', 'Shijimi ramen', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'shijimi'),
      it('', '', 'Cold clam ramen (summer)', '', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi'),
      it('', '', 'Scallop "golden" TKM with finishing rice', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'tkm'),
      it('', '', 'Clam rice', '', 'Rice', 'ask', 'no', 'October 2026.', 'kaimeshi'),
    ] }, {
    cuisine: '貝のラーメン・醤油スープの貝のラーメン、丼のふちに大きなレアチャーシュー、太いメンマ、白髪ねぎ・さらにあっさりのしじみラーメン・夏はミョウガ入りの冷やし・帆立香る黄金のTKM(卵黄を絡める麺)と締めのご飯・貝めし・全粒粉の中太ストレート麺・カウンター10席とテーブル16席',
    neighborhood: '浪速区難波中2-1-15。南海なんば駅南口から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。全粒粉の小麦の麺、醤油のスープ。',
    vegan_detail: 'ヴィーガンではありません。貝やしじみのスープ、チャーシュー、帆立。',
    notes: '[ラーメン・南海なんば南口の貝としじみのラーメン] 南海なんば駅南口から3分の広めの貝のラーメン店で、2022年開店、テーブル席もあり家族連れにも。貝のラーメンは醤油のスープに貝がたっぷり、貝の旨みが深く、丼のふちを覆う大きなレアチャーシューはスープに浸すとやわらかく。太くシャキッとしたメンマと白髪ねぎがアクセント。しじみラーメンはさらにあっさりで、飲んだ後にぴったり、いつもこれという常連も。夏はミョウガ入りの冷やしの貝ラーメン(ミョウガが大丈夫か確認してくれます)。「黄金」のTKMは卵黄を絡めた帆立香る麺で、残ったたれにご飯を。麺は全粒粉のようで小麦の香りが強め。量はやや少なめという声もあるので大盛りも検討を。現金のみ。',
  });
}

save();
