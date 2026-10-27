// Osaka sweep (2-mile circle around Dotonbori), batch 51 — ramen phase, nearest first (all OMNI).
//   + 頂賢麺 (one-person tsukemen and tonkotsu shop by Nippombashi, open to 2 am → mom_and_pop)
//   + 鯛塩そば 灯花 なんばダイニングメゾン店 (Uwajima sea-bream shio ramen in Namba Takashimaya's restaurant floor)
//   + RAMEN えびの女神 (spiny-lobster shrimp ramen finished as a torched cheese risotto)
//   + 麺と無限の可能性 日本橋本店 (late-night chicken paitan, mazesoba and chilled black-sesame tantanmen)
// Skip: 麺と出汁 城守家 27157594 (one review).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 51);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27157594', 'Men to Dashi Kimoriya: one Tabelog review; not enough to verify');

// ================================================================ 頂賢麺
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27100231/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_choken_men_nipponbashi', name: '頂賢麺 (Choken Men)', category: 'OMNI',
    lat: 34.667299, lng: 135.507777, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (whole-grain thick for tsukemen, thin for tonkotsu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and seafood broth, chashu.',
    hours_raw: 'Daily 11:00–2:00 am; no fixed holiday (currently open year-round) (Tabelog). Ticket machine outside; it took cash only, with change inside (October 2025), though Tabelog lists QR payment; no cards or e-money. No reservations.',
    hours: ALL(day(['11:00', '02:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nippombashi 1-7-4 — about 1 min from Nippombashi Stn exit 7',
    cuisine: 'Special rich seafood tsukemen ¥1,200 (October 2025) with chewy whole-grain thick noodles, pork-bone and seafood dip, big nori and chunky braised pork · large portion at the same price · tonkotsu ramen with thin noodles, firmness to order · black tonkotsu ramen · chashu-mayo rice bowl · extra rice ¥100 · counter and tables',
    website: null, gmaps: gm('頂賢麺 日本橋'), menu_url: null,
    notes: "[Tsukemen · a one-person tsukemen and tonkotsu shop by Nippombashi, open to 2 am] A small shop a minute from Nippombashi exit 7, open since 2017 and run single-handed by a quiet, humble owner. It stays open until 2 am; one pair stopped in after a play. The draw is the special rich seafood tsukemen (¥1,200, October 2025): a pork-bone and seafood dip with chewy, almost soba-like whole-grain thick noodles, a large sheet of nori and thick-cut tender pork. A large portion costs the same; say so when you hand over your ticket. The dip can cool fast against the cold noodles. There's also a tonkotsu ramen with thin, firm noodles, milder than its pork flavor suggests, a black tonkotsu and a chashu-mayo rice bowl. Buy a ticket from the machine outside, and bring cash.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 August 2017 (Tabelog)', background: 'Run by one owner working alone (December 2024 and August 2026 reviews).', philosophy: null, specialty: 'Rich seafood tsukemen with whole-grain noodles.',
      anecdotes: [
        { text: '"The dipping sauce was a rich broth made of pork bones and seafood, paired with chewy whole grain thick noodles that were very satisfying." — December 2024, special rich seafood tsukemen, large at no extra charge.', source: R + 'B498232586/' },
        { text: '"I visited around 1 AM. There were no other customers, and the quiet owner was the only one in the shop." — August 2026, tonkotsu ramen with extra-firm noodles.', source: R + 'B534708242/' },
      ],
      japanese_sources_summary: '食べログ: 頂賢麺、大阪市中央区日本橋1-7-4、日本橋駅から155m、毎日11:00〜翌2:00、不定休(現在は年中無休)、予約不可、カード・電子マネー不可、QR可、カウンター席、2017年8月21日開店。口コミ(2024年12月〜2026年8月): 店外の券売機で特製濃厚魚介つけ麺、店主がひとりで切り盛り、麺の量は券を渡すときに聞かれ大盛りも同じ値段、豚骨と魚介の濃厚なつけ汁に全粒粉の極太麺、謙虚な店主、大きな海苔、ご飯のおかわり100円、チャーシューは厚切りでやわらかい、観劇の後に、特製濃厚魚介つけ麺1,200円(税込)、そばのような太麺、冷たい麺でつけ汁が冷める、券売機は現金のみ(釣り銭は店内)、黒豚骨ラーメンとチャーシューマヨ丼、深夜1時に店主ひとり、豚骨ラーメンはバリカタの細麺で意外とマイルド。',
      confidence: 'medium', sources: [TB, R + 'B498232586/', R + 'B534708242/', R + 'B515880794/', R + 'B509971320/', R + 'B505154552/', R + 'B534449011/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Whole-grain thick noodles for the tsukemen (December 2024, July 2025); thin firm noodles for the tonkotsu ramen (August 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Special rich seafood tsukemen, ¥1,200 (October 2025).',
      chashu: 'Chunky braised pork, tender (July 2025).',
      notable_toppings: ['large nori', 'braised pork'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and seafood broth.' },
      pantheon: 'Nippombashi\'s late-night tsukemen: a rich pork-and-seafood dip with soba-like whole-grain noodles from a one-person shop.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B498232586/', '"A rich broth made of pork bones and seafood."'],
        oiliness: [R + 'B505154552/', '"The seafood broth was rich" — no comment on oil; mid-scale.'],
        clarity: [R + 'B498232586/', 'A rich pork-bone and seafood dip — opaque.'],
        tare_strength: [R + 'B515880794/', '"A rich and flavorful seafood broth" — mid-scale.'],
        noodle_firmness: [R + 'B498232586/', '"Chewy whole grain thick noodles."'],
        aroma_punch: [R + 'B515880794/', 'Rich seafood broth; no comment on aroma — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B498232586/', R + 'B515880794/', R + 'B509971320/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; cash.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-7-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目7番4号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515880794/', R + 'B505154552/', R + 'B534449011/'],
    price_note: 'Prices from October 2025 and April 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special rich seafood tsukemen', '¥1,200', 'Tsukemen', 'no', 'no', 'October 2025; large at the same price (December 2024).', 'tokusei_tsuke'),
      it('', '', 'Rich seafood tsukemen', '', 'Tsukemen', 'no', 'no', 'April and July 2025.', 'tsuke'),
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'tonkotsu'),
      it('', '', 'Black tonkotsu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'kuro_tonkotsu'),
      it('', '', 'Chashu-mayo rice bowl', '', 'Rice', 'no', 'no', 'August 2026.', 'chashu_mayo'),
      it('', '', 'Second helping of rice', '¥100', 'Rice', 'ask', 'ask', 'April 2025.', 'rice'),
    ] }, {
    cuisine: '特製濃厚魚介つけ麺1,200円(2025年10月)、コシのある全粒粉の極太麺、豚骨と魚介のつけ汁、大きな海苔と厚切りのチャーシュー・大盛りも同じ値段・細麺で硬さを選べる豚骨ラーメン・黒豚骨ラーメン・チャーシューマヨ丼・ご飯のおかわり100円・カウンターとテーブル',
    neighborhood: '日本橋1-7-4。日本橋駅7番出口から徒歩約1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺(つけ麺は全粒粉の極太麺、豚骨は細麺)。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介のスープ、チャーシュー。',
    notes: '[つけ麺・日本橋駅すぐの、深夜2時まで開くひとりの店のつけ麺と豚骨] 日本橋駅7番出口から1分の小さな店で、2017年開店、物静かで謙虚な店主がひとりで切り盛り。深夜2時まで開いていて、観劇の後に寄ったという人も。目当ては特製濃厚魚介つけ麺(1,200円、2025年10月)で、豚骨と魚介のつけ汁に、そばのようなコシのある全粒粉の極太麺、大きな海苔、厚切りのやわらかいチャーシュー。大盛りも同じ値段なので、券を渡すときに伝えて。冷たい麺でつけ汁が冷めやすいという声も。豚骨の香りのわりにマイルドな細麺の豚骨ラーメン、黒豚骨、チャーシューマヨ丼も。店外の券売機で食券を買うので現金を。',
  });
}

// ================================================================ 鯛塩そば 灯花 なんばダイニングメゾン店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27153501/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ramen-toka.com/';
  put({
    id: 'osaka_tai_shio_soba_toka_namba', name: '鯛塩そば 灯花 なんばダイニングメゾン店 (Tai Shio Soba Toka Namba Dining Maison)', category: 'OMNI',
    lat: 34.663654, lng: 135.502381, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; wheat-gluten (fu) garnish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea-bream broth, chashu, sea-bream rice.',
    hours_raw: 'Daily 11:00–22:00 (Tabelog). Tablet ordering (October 2026). Waits ran from none to about 10 minutes (September–October 2026). No reservations. Cards, e-money and QR accepted. Kids menu (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Dining Maison 8F (Namba 5-1-18, Takashimaya) — about 1 min from Nankai Namba Stn',
    cuisine: 'Tai shio soba from a 100% sea-bream dashi of Uwajima sea bream · clear golden broth, thin noodles, grilled chashu, flower-shaped fu and yuzu · ajitama tai shio soba · sesame sea-bream chazuke finished with dashi · tai shio soba with sea-bream rice ¥1,392 · salmon and ikura ochazuke · chuka soba · limited black-wagyu ramen · kids menu · 56 seats',
    website: OWN, gmaps: gm('鯛塩そば 灯花 なんばダイニングメゾン'), menu_url: null,
    notes: "[Ramen · Uwajima sea-bream shio ramen on Takashimaya's restaurant floor] A calm, modern Japanese-style ramen shop on the eighth-floor restaurant level of Namba Takashimaya, open since December 2025 and popular with families and couples. The broth is all sea-bream dashi from Uwajima sea bream: clear, golden and gentle, over thin noodles with grilled chashu, a flower-shaped piece of fu and yuzu. The move is a set: finish with sesame sea-bream chazuke, rice under sea bream and sesame sauce, loosened with dashi, or take the sea-bream rice (¥1,392 with the ramen, October 2026). One diner found the sea-bream flavor too faint and the noodles clumped near closing. Others call it elegant and delicate, if a bit pricey. Order on the tablet. Children are welcome, with a kids menu.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 December 2025 (Tabelog)', background: 'Tai Shio Soba Toka, a sea-bream shio ramen brand with "multiple awards" (Tabelog); official site ramen-toka.com.', philosophy: '100% sea-bream dashi from fresh Uwajima sea bream (Tabelog).', specialty: 'Tai shio soba; sesame sea-bream chazuke.',
      anecdotes: [
        { text: '"The broth was a gentle, clear sea bream stock, and the grilled chashu was delicious. The thin noodles were plentiful." — October 2026, via tablet.', source: R + 'B537221292/' },
        { text: '"The transparent, golden broth was elegant, but the expected flavor and essence of the sea bream was rather subdued." — September 2026, just before closing.', source: R + 'B536454103/' },
      ],
      japanese_sources_summary: '公式 ramen-toka.com。食べログ: 鯛塩そば 灯花 なんばダイニングメゾン店、大阪市中央区難波5-1-18 なんばダイニングメゾン8F、南海なんば駅南館1階東口から徒歩約1分、毎日11:00〜22:00、予約不可、カード・電子マネー・QR可、56席、禁煙、子ども歓迎・キッズメニューあり、2025年12月11日開店、宇和島の鮮魚の鯛を使った鯛だし100%、特製胡麻鯛茶漬け、受賞歴多数の鯛塩らーめん専門店。口コミ(2026年9〜10月): 高島屋の中、家族連れやカップルが多く10分ほどで入店、味玉鯛塩そばと胡麻鯛茶漬けのセット、締めは少なめのご飯にだし、上品で繊細、和モダンで高級感のある店内、透明な黄金色のスープだが鯛の風味は控えめという声、閉店間際で細麺がほぐれていなかった、花の形の麩と柚子、タブレットで注文、澄んだやさしい鯛だし、炙りチャーシュー、細麺、特製中華そば、鮭といくらのお茶漬け、値段はやや高め、鯛塩そばと鯛めしで1,392円、周年記念の黒毛和牛らーめん。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537221292/', R + 'B536454103/', R + 'B536024818/', R + 'B537467377/', R + 'B537785402/', R + 'B537882002/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Tai shio soba (sea-bream shio ramen).',
      chashu: 'Grilled chashu (October 2026).',
      notable_toppings: ['flower-shaped fu', 'yuzu', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Sea-bream broth.' },
      pantheon: 'Namba Takashimaya\'s sea-bream shio: a clear, golden Uwajima tai dashi with a sesame tai-chazuke finish.',
      profile: { richness: 2, oiliness: 1, clarity: 5, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537221292/', '"A gentle, clear sea bream stock."'],
        oiliness: [R + 'B537467377/', '"Elegant and delicate" — placed low.'],
        clarity: [R + 'B536454103/', '"The transparent, golden broth."'],
        tare_strength: [R + 'B537785402/', '"The flavor was a light saltiness."'],
        noodle_firmness: [R + 'B537221292/', 'Thin noodles; no comment on firmness — mid-scale.'],
        aroma_punch: [R + 'B536454103/', '"The flavor and essence of the sea bream was rather subdued" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B537221292/', R + 'B536454103/', R + 'B537785402/', R + 'B537467377/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; department-store restaurant floor.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-18 なんばダイニングメゾン 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番18号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537785402/', R + 'B536024818/', R + 'B537467377/'],
    price_note: 'One set price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tai shio soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'tai_shio'),
      it('', '', 'Ajitama tai shio soba', '', 'Ramen', 'no', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Tai shio soba with sea-bream rice', '¥1,392', 'Sets', 'no', 'no', 'October 2026.', 'taimeshi_set'),
      it('', '', 'Sesame sea-bream chazuke (set)', '', 'Rice', 'ask', 'no', 'Tabelog; September 2026.', 'goma_tai'),
      it('', '', 'Salmon and ikura ochazuke', '', 'Rice', 'ask', 'no', 'October 2026.', 'sake_ikura'),
      it('', '', 'Special chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
    ] }, {
    cuisine: '宇和島の鯛の鯛だし100%の鯛塩そば・透明な黄金色のスープ、細麺、炙りチャーシュー、花の形の麩と柚子・味玉鯛塩そば・だしをかける胡麻鯛茶漬け・鯛塩そばと鯛めし1,392円・鮭といくらのお茶漬け・中華そば・限定の黒毛和牛らーめん・キッズメニュー・56席',
    neighborhood: 'なんばダイニングメゾン8F(難波5-1-18、高島屋)。南海なんば駅から徒歩約1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、麩。',
    vegan_detail: 'ヴィーガンではありません。鯛のスープ、チャーシュー、鯛めし。',
    notes: '[ラーメン・高島屋のレストラン街の宇和島の鯛塩そば] なんば高島屋8階のレストラン街にある、落ち着いた和モダンのラーメン店で、2025年12月開店、家族連れやカップルに人気。スープは宇和島の鯛の鯛だし100%で、透明な黄金色のやさしい味わい。細麺に炙りチャーシュー、花の形の麩、柚子。おすすめはセットで、鯛と胡麻だれをのせたご飯にだしをかける胡麻鯛茶漬けで締めるか、鯛めし(ラーメンと合わせて1,392円、2026年10月)を。鯛の風味が控えめで、閉店間際は麺がほぐれていなかったという人も。上品で繊細、ただ少し高めという声も。注文はタブレットで。子ども連れ歓迎で、キッズメニューもあります。',
  });
}

// ================================================================ RAMEN えびの女神
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27142746/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_ramen_ebinomegami', name: 'RAMEN えびの女神 (RAMEN ebinomegami)', category: 'OMNI',
    lat: 34.665618, lng: 135.496451, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu or miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: spiny-lobster broth, egg, cheese.',
    hours_raw: 'Mon–Wed and Fri–Sun 11:00–15:00 and 18:00–22:00; closed Thursday; hours may change (Tabelog). Ticket machine (August 2026). No reservations. Cards, e-money and PayPay accepted.',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Motomachi 1-3-12, Naniwa — near JR Namba Stn',
    cuisine: 'Shrimp ramen from a 100% spiny-lobster broth, thick and creamy · Megami Set ¥2,000 with shrimp shoyu or shrimp miso, a free extra serving of noodles, and rice and cheese to torch into a risotto in the leftover broth · rice small, medium or large · Kiwami Set ¥5,500 · abalone topping · wood ear, bok choy, soft-boiled egg, white onion · lobster powder, chili oil and lemon on the table · about 10 counter seats and one table',
    website: null, gmaps: gm('RAMEN えびの女神 元町'), menu_url: null,
    notes: "[Ramen · spiny-lobster ramen that ends as a cheese risotto] A small shrimp-ramen specialist near JR Namba, open since 2024, with an Ise-lobster sign out front and a sleek interior. The broth is 100% spiny lobster: milky, thick and creamy, coating medium-thick noodles, with wood ear, bok choy, white onion and a soft-boiled egg. The real show comes after. The Megami Set (¥2,000, shoyu or miso) includes a free extra serving of noodles, then rice and cheese go into the leftover broth, and you torch the cheese at the table into a risotto. Add the lobster powder, chili oil or a squeeze of lemon. One diner said the ramen felt like a starter for the risotto. Prices are high for ramen: ¥3,000 with abalone, and a ¥5,500 Kiwami Set. Buy a ticket at the machine. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 June 2024 (Tabelog)', background: 'Shrimp-ramen specialist; one reviewer heard it may be the priciest ramen in western Japan (August 2026).', philosophy: 'A broth of 100% spiny lobster (March 2026 review).', specialty: 'Spiny-lobster ramen with a torched-cheese risotto finish.',
      anecdotes: [
        { text: '"After finishing the noodles (and I appreciated that an extra serving of noodles is free), you can add rice and cheese to the remaining broth. You can even use the gas burner on the table to toast the cheese yourself." — April 2026, Megami Set (Ise lobster miso).', source: R + 'B526250857/' },
        { text: '"The rich broth made from 100% spiny lobster has a unique flavor that can be quite addictive." — March 2026, shrimp miso ramen with abalone, ¥3,000.', source: R + 'B529139935/' },
      ],
      japanese_sources_summary: '食べログ: RAMEN えびの女神、大阪市浪速区元町1-3-12、JR難波駅から148m、月〜水・金〜日11:00〜15:00・18:00〜22:00、木曜休み、予約不可、カード・電子マネー・PayPay可、禁煙、2024年6月12日開店。口コミ(2026年3〜10月): 伊勢海老の看板とおしゃれな店内、女神セット(伊勢海老味噌)、濃厚でクリーミーなスープ、味玉・きくらげ・細切りの玉ねぎ、替え玉無料、残ったスープにご飯とチーズを入れて卓上のバーナーで炙ってリゾットに、伊勢海老パウダーとラー油、ご飯は小・中・大、極みセット5,500円、海老味噌ラーメンに鮑のトッピングで3,000円、伊勢海老100%のスープ、値段は高めだが店員は親切、券売機で女神セット2,000円(海老味噌か海老醤油)、カウンター約10席とテーブル1つ、乳白色のスープ、中太麺、チンゲン菜、締めにレモン、西日本で一番高いラーメンという噂、ラーメンはリゾットの前菜のよう。',
      confidence: 'medium', sources: [TB, R + 'B526250857/', R + 'B529139935/', R + 'B533335703/', R + 'B535166668/', R + 'B536444352/', R + 'B537592955/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'paitan', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick noodles (August 2026); free extra serving.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Megami Set, ¥2,000: shrimp shoyu or shrimp miso ramen with a torched-cheese risotto finish (August 2026).',
      chashu: null,
      notable_toppings: ['wood ear', 'bok choy', 'soft-boiled egg', 'shredded white onion', 'abalone (extra)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Spiny-lobster broth.' },
      pantheon: 'Namba\'s spiny-lobster bowl: a thick, creamy 100% lobster broth that finishes as a torched-cheese risotto.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 2, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B537592955/', '"A rich and concentrated broth made from spiny lobster."'],
        oiliness: [R + 'B526250857/', '"A thick, creamy broth" — no comment on oil; mid-scale.'],
        clarity: [R + 'B533335703/', '"A milky white broth that looks like a creamy soup."'],
        tare_strength: [R + 'B533335703/', '"It didn\'t taste very soy-sauce-like" — placed low.'],
        noodle_firmness: [R + 'B533335703/', '"The noodles are medium-thick" — mid-scale.'],
        aroma_punch: [R + 'B533335703/', '"Rich with a strong shrimp aroma."'],
      },
      confidence: 'medium', sources: [R + 'B526250857/', R + 'B533335703/', R + 'B537592955/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; table-top torch for the risotto.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区元町1-3-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区元町一丁目3番12号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533335703/', R + 'B526250857/', R + 'B529139935/'],
    price_note: 'Prices from March–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Megami Set (shrimp shoyu or shrimp miso, with risotto)', '¥2,000', 'Sets', 'no', 'no', 'August 2026; extra noodles free.', 'megami'),
      it('', '', 'Kiwami Set', '¥5,500', 'Sets', 'no', 'no', 'April 2026.', 'kiwami'),
      it('', '', 'Shrimp miso ramen with abalone', '¥3,000', 'Ramen', 'no', 'no', 'March 2026; total with the topping.', 'awabi'),
    ] }, {
    cuisine: '伊勢海老100%の濃厚でクリーミーな海老ラーメン・女神セット2,000円(海老醤油か海老味噌、替え玉無料、残ったスープにご飯とチーズを入れて炙るリゾット)・ご飯は小・中・大・極みセット5,500円・鮑のトッピング・きくらげ、チンゲン菜、味玉、細切りの玉ねぎ・卓上に伊勢海老パウダー、ラー油、レモン・カウンター約10席とテーブル1つ',
    neighborhood: '浪速区元町1-3-12。JR難波駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油や味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。伊勢海老のスープ、卵、チーズ。',
    notes: '[ラーメン・最後はチーズリゾットになる伊勢海老のラーメン] JR難波駅近くの小さな海老ラーメン専門店で、2024年開店、伊勢海老の看板とおしゃれな店内。スープは伊勢海老100%で、乳白色の濃厚でクリーミーな味わいが中太麺によく絡み、きくらげ、チンゲン菜、細切りの玉ねぎ、味玉がのります。本番はその後。女神セット(2,000円、醤油か味噌)は替え玉無料で、残ったスープにご飯とチーズを入れ、卓上のバーナーでチーズを炙ってリゾットに。伊勢海老パウダー、ラー油、レモンで味変も。ラーメンはリゾットの前菜のようだったという人も。ラーメンとしては高く、鮑のせで3,000円、極みセットは5,500円。食券は券売機で。木曜定休。',
  });
}

// ================================================================ 麺と無限の可能性 日本橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27135543/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '23:59']), E = day(['11:00', '01:00']);
  put({
    id: 'osaka_men_to_mugen_no_kanosei_nipponbashi', name: '麺と無限の可能性 日本橋本店 (Men to Mugen no Kanosei Nipponbashi)', category: 'OMNI',
    lat: 34.667319, lng: 135.507934, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried chicken.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, chashu, egg yolk, cheese.',
    hours_raw: 'Mon–Thu 11:00–24:00; Fri–Sun 11:00–1:00 am (L.O. 23:30); some days open until 5:00 am (see the shop\'s Instagram); closed irregularly; may close for typhoons (Tabelog). Orders taken verbally (November 2025). No reservations. Cards, e-money and PayPay accepted.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: E, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nippombashi 1-9-13, 1F — by Nippombashi Stn exit 7',
    cuisine: 'Late-night ramen with a wide menu · chicken paitan with thin noodles, on the mild side · mazesoba ¥1,320 with thick flat noodles, egg yolk, onion chips and plenty of chashu · "chicken fromage" cheese ramen · chicken dan dan noodles (spice adjustable) · chilled black-sesame tantanmen · kara-age set meal · yakitori · 26 seats',
    website: null, gmaps: gm('麺と無限の可能性 日本橋本店'), menu_url: null,
    notes: "[Ramen · late-night chicken paitan, mazesoba and cheese ramen by Nippombashi] A casual, stylish ramen shop by Nippombashi exit 7, open since 2023 until midnight or later and popular with overseas guests. The menu runs well past one bowl. The chicken paitan has thin noodles and is milder than most. The mazesoba (¥1,320, July 2026) coats thick flat noodles in oil and sweet soy with egg yolk, onion chips and plenty of chashu, junky and satisfying. The \"chicken fromage\" is a rich cheese ramen that eats almost like pasta. There's a chilled black-sesame tantanmen (July 2026), and the chicken dan dan noodles are mild unless you ask for more heat. There are kara-age set meals and yakitori too. Food can take 10–15 minutes at busy times. On some nights it stays open until 5 am; check the shop's Instagram.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 April 2023 (Tabelog)', background: 'Men to Mugen no Kanosei main shop (honten) in Nippombashi (Tabelog).', philosophy: null, specialty: 'Chicken paitan; mazesoba; cheese ramen.',
      anecdotes: [
        { text: '"This dish features thick noodles topped with egg yolk, onion chips, green onions, diced onions, and plenty of chashu… a deliciously indulgent and junky flavor." — July 2026, mazesoba ¥1,320.', source: R + 'B531806733/' },
        { text: '"Many places serve chicken paitan that is quite salty, but here it\'s on the milder side." — September 2026, late night.', source: R + 'B536296221/' },
      ],
      japanese_sources_summary: '食べログ: 麺と無限の可能性 日本橋本店、大阪市中央区日本橋1-9-13 アメニティビル1F、日本橋駅7番出口、月〜木11:00〜24:00、金・土・日11:00〜翌1:00(L.O.23:30)、日によっては朝5時まで(Instagramで告知)、台風で臨時休業あり、不定休、予約不可、カード・電子マネー・PayPay可、26席、禁煙(外に喫煙所)、2023年4月10日開店。口コミ(2025年11月〜2026年9月): 平打ち麺に油と甘い醤油のまぜそば、チーズのラーメン「チキンフロマージュ」は口頭で注文、15分ほど待つ、パスタのようなハイブリッドな味、まぜそば1,320円(極太麺、卵黄、オニオンチップ、ねぎ、玉ねぎ、たっぷりのチャーシュー)、ジャンキー、黒胡麻の冷やし担々麺、焼き鳥も、海外の客が多くラーメン以外のメニューも豊富、昼は提供に時間がかかる、うどんのような麺という声、鶏担々麺は辛さ控えめで調整可、深夜も営業、鶏白湯ラーメンは細麺でマイルド、唐揚げ定食。',
      confidence: 'medium', sources: [TB, R + 'B531806733/', R + 'B536296221/', R + 'B517952239/', R + 'B534498466/', R + 'B534578871/', R + 'B536188078/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Thin noodles for the chicken paitan (September 2026); thick flat noodles for the mazesoba (June–July 2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'mazesoba_aburasoba', 'tantanmen'],
      signature_bowl: 'Chicken paitan ramen; mazesoba ¥1,320 (July 2026).',
      chashu: 'Plenty of chashu on the mazesoba (July 2026).',
      notable_toppings: ['egg yolk', 'onion chips', 'cheese'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Nippombashi\'s late-night menu shop: a mild chicken paitan, a junky thick-noodle mazesoba and a cheese ramen that eats like pasta.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536296221/', '"On the milder side" for a chicken paitan — mid-scale.'],
        oiliness: [R + 'B517952239/', '"The oil and sweet soy sauce coated the flat noodles" (mazesoba) — mid-scale.'],
        clarity: [R + 'B536296221/', 'Chicken paitan — opaque.'],
        tare_strength: [R + 'B536296221/', '"Many places serve chicken paitan that is quite salty, but here it\'s on the milder side" — placed low.'],
        noodle_firmness: [R + 'B536296221/', 'Thin noodles; no comment on firmness — mid-scale.'],
        aroma_punch: [R + 'B536296221/', 'Mild chicken paitan; no comment on aroma — placed low.'],
      },
      confidence: 'low', sources: [R + 'B536296221/', R + 'B517952239/', R + 'B531806733/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; wide menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-9-13 アメニティビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目9番13号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531806733/', R + 'B536296221/', R + 'B534498466/', R + 'B536188078/'],
    price_note: 'One price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'tori_paitan'),
      it('', '', 'Mazesoba', '¥1,320', 'Mazesoba', 'no', 'no', 'July 2026.', 'mazesoba'),
      it('', '', 'Chicken fromage (cheese ramen)', '', 'Ramen', 'no', 'no', 'November 2025.', 'fromage'),
      it('', '', 'Chicken dan dan noodles', '', 'Ramen', 'no', 'no', 'September 2026; spice adjustable.', 'tantan'),
      it('', '', 'Chilled black-sesame tantanmen', '', 'Ramen', 'no', 'no', 'July 2026.', 'hiyashi_tantan'),
      it('', '', 'Kara-age set meal', '', 'Sets', 'no', 'no', 'September 2026.', 'karaage'),
      it('', '', 'Yakitori', '', 'Sides', 'ask', 'no', 'July 2026.', 'yakitori'),
    ] }, {
    cuisine: 'メニューの多い深夜営業のラーメン・細麺でマイルドな鶏白湯・まぜそば1,320円(極太の平打ち麺、卵黄、オニオンチップ、たっぷりのチャーシュー)・チーズのラーメン「チキンフロマージュ」・辛さを調整できる鶏担々麺・黒胡麻の冷やし担々麺・唐揚げ定食・焼き鳥・26席',
    neighborhood: '日本橋1-9-13 アメニティビル1F。日本橋駅7番出口すぐ',
    gf_detail: 'グルテンフリーではありません。小麦の麺、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、チャーシュー、卵黄、チーズ。',
    notes: '[ラーメン・日本橋の深夜の鶏白湯、まぜそば、チーズラーメン] 日本橋駅7番出口すぐの、カジュアルでおしゃれなラーメン店で、2023年開店、深夜0時以降まで営業し海外の客にも人気。メニューはラーメン1杯にとどまりません。鶏白湯は細麺で、ほかの店よりマイルド。まぜそば(1,320円、2026年7月)は極太の平打ち麺に油と甘い醤油、卵黄、オニオンチップ、たっぷりのチャーシューで、ジャンキーで満足感あり。「チキンフロマージュ」は濃厚なチーズのラーメンで、パスタに近い味わい。黒胡麻の冷やし担々麺(2026年7月)もあり、鶏担々麺は辛さ控えめで、頼めば辛くしてくれます。唐揚げ定食や焼き鳥も。混む時間は提供に10〜15分ほど。日によっては朝5時まで営業するので、店のInstagramで確認を。',
  });
}

save();
