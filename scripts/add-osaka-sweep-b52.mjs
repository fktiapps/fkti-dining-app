// Osaka sweep (2-mile circle around Dotonbori), batch 52 — ramen phase, nearest first (all OMNI).
//   + だしと小麦の可能性 (Tabelog 3.65 kombu-water tsukemen with a shijimi dip, 10 seats, cash only)
//   + 煮干しらーめん 玉五郎 黒門本店 (GENKIFACTORY niboshi-tonkotsu ramen at Kuromon Market)
//   + 麺屋 7.5Hz 黒門市場店 (Takaida-style shoyu ramen, open 24 hours)
//   + 天地人らーめん 2号店 (light tonkotsu shoyu by Nankai Namba; separate from the Sennichimae record)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 52);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ だしと小麦の可能性
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27125763/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '14:30'], ['17:00', '22:00']), S = day(['11:00', '14:30'], ['17:00', '21:00']);
  put({
    id: 'osaka_dashi_to_komugi_no_kanousei', name: 'だしと小麦の可能性 (Dashi to Komugi no Kanousei)', category: 'OMNI',
    lat: 34.664714, lng: 135.505767, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tempura rice bowls; sandwiches.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shijimi-clam dip, prosciutto, shrimp and egg tempura.',
    hours_raw: 'Mon, Wed–Sat and holidays 11:00–14:30 and 17:00–22:00; Sun 11:00–14:30 and 17:00–21:00; closed Tuesday (Tabelog). Ticket machine (October 2026). No reservations. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nippombashi 2-5-8 — near Kuromon Market, about 4 min from Nippombashi Stn',
    cuisine: 'Rosanjin tsukemen ¥1,350 (large 300 g +¥150): noodles served in frothy Rausu kombu water, a hot shijimi-clam dip with a Western touch, tororo kombu, prosciutto and sudachi or lemon · rice-bowl set ¥1,700 · shio ramen · mini egg-tempura and small shrimp-tempura rice bowls · mix sandwich · 6 counter and 4 table seats',
    website: null, gmaps: gm('だしと小麦の可能性 日本橋'), menu_url: null,
    notes: "[Tsukemen · kombu-water tsukemen with a shijimi dip near Kuromon] A ten-seat shop near Kuromon Market, rated 3.65 on Tabelog, that grew out of a limited-time ramen at a katsu-sandwich shop in Kitashinchi. The signature is the Rosanjin tsukemen (¥1,350, October 2026; large 300 g for ¥150 more). The noodles arrive in frothy whipped kombu water made with Rausu kombu, so you taste them on their own first. Then dip them in a piping-hot shijimi-clam sauce with a faintly Western edge. A QR code at the table shows how to work through it: tororo kombu, then prosciutto with sudachi or lemon, and finally the leftover kombu water poured into the dip. There's also a light, well-balanced shio ramen. The tempura rice bowls are a hidden hit; one diner thought the egg-tempura bowl could stand as a dish on its own. Buy a ticket at the machine and bring cash. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 October 2021 (Tabelog)', background: 'Began as a limited-time ramen at a katsu-sandwich restaurant in Kitashinchi (October 2026 review).', philosophy: 'Dashi and wheat, as the name says (October 2026 review).', specialty: 'Rosanjin tsukemen in kombu water.',
      anecdotes: [
        { text: '"The noodles are made with rich, flavorful Rausu kombu. I first tried the noodles soaked in the frothy kombu water on its own. The aroma of kombu burst through my nose as I slurped it up." — October 2026, Rosanjin tsukemen, large ¥1,500.', source: R + 'B537026083/' },
        { text: '"This dipping sauce had a strong flavor of shijimi clam dashi, yet it also had a somewhat Western feel to it." — October 2026, Rosanjin tsukemen with a rice-bowl set, ¥1,700.', source: R + 'B537430664/' },
      ],
      japanese_sources_summary: '食べログ: だしと小麦の可能性、大阪市中央区日本橋2-5-8、近鉄日本橋駅・地下鉄日本橋駅から徒歩4分、月・水〜土・祝11:00〜14:30・17:00〜22:00、日11:00〜14:30・17:00〜21:00、火曜休み、予約不可、カード・電子マネー・QR不可、10席(カウンター6、テーブル4)、禁煙、2021年10月15日開店。2026年10月の口コミ: 泡立った昆布水の麺、和と洋が合わさった麺、Rosanjin TSUKEMEN 1,350円で大盛り(300g)は150円増し、卓上のQRコードで食べ方の案内、Rausu昆布の昆布水、なめらかで中太の平打ちストレート麺、塩気のあるつけ汁、とろろ昆布と生ハム、最後に昆布水をつけ汁に、券売機で丼セット1,700円、ミニ玉子天丼、小海老天丼、しじみのだしが強く洋風も感じるつけ汁、すだち、器へのこだわり、北新地のカツサンドの店の限定ラーメンから始まった人気店、ミックスサンド、黒門市場の近く、塩ラーメンもあり、塩ラーメンはあっさりしながら味わい深い。',
      confidence: 'medium', sources: [TB, R + 'B537026083/', R + 'B537430664/', R + 'B537743404/', R + 'B537781447/', R + 'B537971635/', R + 'B536993970/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'unknown', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'flat', hydration: null, handmade: false, notes: 'Smooth, medium-thick flat straight noodles served in kombu water (October 2026); one diner called them thin and udon-like.' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Rosanjin tsukemen, ¥1,350 (October 2026).',
      chashu: null,
      notable_toppings: ['kombu water', 'tororo kombu', 'prosciutto', 'sudachi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shijimi-clam dip; prosciutto.' },
      pantheon: 'Nippombashi\'s kombu-water tsukemen: noodles in frothy Rausu kombu water, dipped in a hot shijimi sauce with prosciutto on the side.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537430664/', '"The kombu dashi was rich" — mid-scale.'],
        oiliness: [R + 'B536993970/', '"A light flavor" — placed low.'],
        clarity: [R + 'B537026083/', 'No comment on the dip\'s clarity — mid-scale.'],
        tare_strength: [R + 'B537026083/', '"Dipped in the salty tsuke sauce"; "a strong flavor of shijimi clam dashi" (B537430664).'],
        noodle_firmness: [R + 'B537026083/', '"Smooth, medium-thick, flat, and straight" — mid-scale.'],
        aroma_punch: [R + 'B537026083/', '"The aroma of kombu burst through my nose."'],
      },
      confidence: 'medium', sources: [R + 'B537026083/', R + 'B537430664/', R + 'B536993970/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; a QR code at the table shows how to eat it.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-5-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM だしと小麦の可能性 node/11367761846 1m; GSI 大阪府大阪市中央区日本橋二丁目5番8号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537026083/', R + 'B537430664/', R + 'B537971635/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rosanjin tsukemen', '¥1,350', 'Tsukemen', 'no', 'no', 'October 2026; large (300 g) +¥150.', 'rosanjin'),
      it('', '', 'Rosanjin tsukemen with a mini rice-bowl set', '¥1,700', 'Sets', 'no', 'no', 'October 2026.', 'don_set'),
      it('', '', 'Shio ramen (set)', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Mini egg-tempura rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'tamaten'),
      it('', '', 'Small shrimp-tempura rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'koebi'),
      it('', '', 'Mix sandwich', '', 'Sides', 'no', 'no', 'October 2026.', 'mix_sando'),
    ] }, {
    cuisine: 'Rosanjin TSUKEMEN 1,350円(大盛り300gは150円増し): 泡立ったRausu昆布の昆布水に入った麺、洋風も感じる熱いしじみのつけ汁、とろろ昆布、生ハム、すだちかレモン・丼セット1,700円・塩ラーメン・ミニ玉子天丼と小海老天丼・ミックスサンド・カウンター6席とテーブル4席',
    neighborhood: '日本橋2-5-8。黒門市場の近く、日本橋駅から徒歩約4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、天丼、サンドイッチ。',
    vegan_detail: 'ヴィーガンではありません。しじみのつけ汁、生ハム、海老や玉子の天ぷら。',
    notes: '[つけ麺・黒門近くの昆布水としじみのつけ麺] 黒門市場の近くにある10席の店で、食べログ3.65。北新地のカツサンドの店の限定ラーメンから始まったそう。看板はRosanjin TSUKEMEN(1,350円、2026年10月、大盛り300gは150円増し)。麺はRausu昆布の泡立てた昆布水に入って届くので、まずは麺だけで。続いて熱々のしじみのつけ汁につけると、ほんのり洋風。卓上のQRコードで食べ方の案内があり、とろろ昆布、すだちかレモンを添えた生ハム、最後に残った昆布水をつけ汁に。あっさりしながら味わい深い塩ラーメンも。天丼は隠れた人気で、玉子天丼はそれだけで看板になるという人も。食券は券売機で、現金のみ。火曜定休。',
  });
}

// ================================================================ 煮干しらーめん 玉五郎 黒門本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27008220/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.genki-factory.com/';
  const D = day(['11:00', '21:30']);
  put({
    id: 'osaka_niboshi_ramen_tamagoro_kuromon', name: '煮干しらーめん 玉五郎 黒門本店 (Niboshi Ramen Tamagoro Kuromon)', category: 'OMNI',
    lat: 34.665289, lng: 135.506585, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and niboshi broth, chashu, egg.',
    hours_raw: 'Mon–Sat 11:00–21:30 (L.O. 21:00); closed Sunday (Tabelog). Lunch set until 15:00 (May 2026). Ticket machine at the entrance. No reservations. No cards or e-money; PayPay accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nippombashi 2-4-1, Kuromon Market — about 3 min from Nippombashi Stn exits 9–10',
    cuisine: 'Niboshi ramen: domestic niboshi and pork-bone broth with soy, medium-thick curly noodles, fish powder at the bottom · lunch set with tamago kake gohan ¥1,100 (to 15:00) · niboshi tsukemen · limited back-fat, shio and spicy niboshi ramen · chilled shoyu ramen ¥1,200 with broth ice (September 2026) · chashu, ajitama, menma, shiso, naruto · niboshi furikake on the counter · 12 counter seats',
    website: OWN, gmaps: gm('煮干しらーめん 玉五郎 黒門本店'), menu_url: null,
    notes: "[Ramen · niboshi-tonkotsu ramen in Kuromon Market] A 12-seat counter in Kuromon Market from GENKIFACTORY, a group based in Tenma known for blending niboshi with tonkotsu. One loyal diner has been coming for about 20 years, through a relocation. The niboshi ramen pairs a pork-bone broth with domestic dried sardines and soy: easy-going, with a gentle niboshi flavor, a good balance of oil and salt, and fish powder waiting at the bottom. Medium-thick curly noodles are springy, and the chashu is thick and tender. At lunch until 3 pm, the set adds tamago kake gohan with niboshi furikake for ¥1,100 (May 2026). Two regulars usually order the tsukemen. In September 2026 a chilled shoyu ramen with frozen-broth ice was ¥1,200, and limited back-fat, shio and spicy versions ran April–June 2026. A couple of reviewers found it merely average. Buy a ticket at the machine. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Kuromon main shop (honten) (Tabelog); relocated at some point (February 2026 review)', background: 'Part of GENKIFACTORY, based in Tenma, Osaka (September 2026 review); official site genki-factory.com.', philosophy: 'Broth made from scratch every morning (February 2026 review).', specialty: 'Niboshi-tonkotsu ramen; niboshi tsukemen.',
      anecdotes: [
        { text: '"A rich pork bone broth infused with seafood flavor from domestic niboshi (dried sardines) for a soy sauce taste. The broth had a nice balance of oil and salt, with a gentle niboshi flavor." — May 2026, lunch set ¥1,100.', source: R + 'B529030762/' },
        { text: '"I\'ve been coming here for about 20 years (though they have relocated)." — February 2026.', source: R + 'B535274032/' },
      ],
      japanese_sources_summary: '公式 genki-factory.com。食べログ: 煮干しらーめん 玉五郎 黒門本店、大阪市中央区日本橋2-4-1、地下鉄日本橋駅9・10番出口から徒歩3分、月〜土11:00〜21:30(L.O.21:00)、日曜休み、予約不可、カード・電子マネー不可、PayPay可、12席(カウンターのみ)、禁煙。口コミ(2026年2〜10月): 黒門市場の中、入口の券売機、20年ほど通っている(移転あり)、毎朝一からスープを作る、普段はつけ麺、チャーシューと味玉、昼のセット(煮干しらーめんと卵かけご飯1,100円、15時まで)、国産煮干しの魚介が効いた豚骨醤油、油と塩のバランス、やさしい煮干し、丼の底に魚粉、中太の縮れ麺、期間限定(背脂煮干し、塩煮干し、辛煮干し、煮干しつけ麺)、卓上に胡椒・七味・酢・卵かけご飯用の醤油・煮干しふりかけ、スタッフがひとりで手際よく、天満に本店があるGENKIFACTORYの店で煮干しと豚骨を合わせたスープ、醤油の冷やし並1,200円(スープの氷、チャーシュー、味玉、ねぎ、大葉、メンマ、なると、海苔)、普通だったという声も。',
      confidence: 'medium', sources: [TB, OWN, R + 'B529030762/', R + 'B535274032/', R + 'B536157604/', R + 'B533012981/', R + 'B536919465/', R + 'B537520000/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'curly', hydration: null, handmade: false, notes: 'Medium-thick curly noodles, chewy (May–June 2026).' },
      regional_style: [], sub_genre: ['niboshi', 'ramen', 'tsukemen'],
      signature_bowl: 'Niboshi ramen; lunch set with tamago kake gohan ¥1,100 (May 2026).',
      chashu: 'Thick and tender (May–June 2026).',
      notable_toppings: ['fish powder', 'ajitama', 'niboshi furikake'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and niboshi broth.' },
      pantheon: 'Kuromon\'s niboshi-tonkotsu: GENKIFACTORY\'s gentle sardine-and-pork shoyu with fish powder at the bottom of the bowl.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B533012981/', '"The broth is light yet rich" — mid-scale.'],
        oiliness: [R + 'B529030762/', '"A nice balance of oil and salt" — mid-scale.'],
        clarity: [R + 'B529030762/', 'A pork-bone broth with fish powder at the bottom — placed low.'],
        tare_strength: [R + 'B529030762/', '"A nice balance of oil and salt" — mid-scale.'],
        noodle_firmness: [R + 'B529030762/', '"Medium-thick, curly noodles that were perfectly chewy."'],
        aroma_punch: [R + 'B529030762/', '"A gentle niboshi flavor that made it easy to enjoy" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B529030762/', R + 'B533012981/', R + 'B535274032/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-4-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目4番1号 (go) 2m; OSM 黒門市場 黒門会 way/1152292657 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529030762/', R + 'B536157604/'],
    price_note: 'Prices from May and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Niboshi ramen', '', 'Ramen', 'no', 'no', 'May–June 2026.', 'niboshi'),
      it('', '', 'Lunch set: niboshi ramen + tamago kake gohan', '¥1,100', 'Sets', 'no', 'no', 'May 2026; until 15:00.', 'lunch_set'),
      it('', '', 'Niboshi tsukemen', '', 'Tsukemen', 'no', 'no', 'February and September 2026.', 'tsuke'),
      it('', '', 'Chilled shoyu ramen (regular)', '¥1,200', 'Seasonal', 'no', 'no', 'September 2026.', 'hiyashi'),
      it('', '', 'Back-fat niboshi ramen (limited)', '', 'Seasonal', 'no', 'no', 'April–June 2026.', 'seabura'),
    ] }, {
    cuisine: '煮干しらーめん: 国産煮干しと豚骨の醤油スープ、中太の縮れ麺、丼の底に魚粉・昼の卵かけご飯セット1,100円(15時まで)・煮干しつけ麺・期間限定の背脂、塩、辛の煮干しらーめん・スープの氷の醤油の冷やし1,200円(2026年9月)・チャーシュー、味玉、メンマ、大葉、なると・卓上に煮干しふりかけ・カウンター12席',
    neighborhood: '日本橋2-4-1、黒門市場。日本橋駅9・10番出口から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨と煮干しのスープ、チャーシュー、卵。',
    notes: '[ラーメン・黒門市場の煮干し豚骨] 黒門市場にあるカウンター12席の店で、煮干しと豚骨を合わせたスープで知られる天満のGENKIFACTORYの一軒。移転をはさんで20年ほど通っているという人も。煮干しらーめんは豚骨に国産煮干しと醤油を合わせた食べやすい味で、煮干しはやさしく、油と塩のバランスがよく、丼の底には魚粉。中太の縮れ麺はもちっとして、チャーシューは厚くやわらか。昼は15時まで、煮干しふりかけ付きの卵かけご飯のセットが1,100円(2026年5月)。普段はつけ麺という常連も2人。2026年9月はスープを凍らせた氷入りの醤油の冷やしが1,200円、4〜6月は背脂、塩、辛の限定も。普通だったという声も少し。食券は券売機で。日曜定休。',
  });
}

// ================================================================ 麺屋 7.5Hz 黒門市場店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132835/'; const R = TB + 'dtlrvwlst/';
  const D = day(['00:00', '23:59']);
  put({
    id: 'osaka_menya_75hz_kuromon', name: '麺屋 7.5Hz 黒門市場店 (Menya 7.5Hz Kuromon Ichiba)', category: 'OMNI',
    lat: 34.666309, lng: 135.507527, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu; broth not described as meat-free.',
    hours_raw: 'Open 24 hours; closed Thursday and the 2nd and 4th Wednesday of each month (Tabelog). One staff member on at a time (October 2026). A service charge may be added (Tabelog). No reservations. Cards, e-money and QR accepted.',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nippombashi 1-16-8 — by Kuromon Market, near Kintetsu Nippombashi Stn',
    cuisine: 'Takaida-style shoyu ramen ("chuka soba") ¥800 · large chashu ramen ¥1,100 · sharp, slightly tart soy broth · straight, low-hydration thick noodles · heaps of chopped green onion · chashu rice bowl · garlic spice, pepper and shichimi on the counter · 10 seats',
    website: null, gmaps: gm('麺屋 7.5Hz 黒門市場店'), menu_url: null,
    notes: "[Ramen · 24-hour Takaida-style shoyu ramen by Kuromon] A cramped ten-seat counter by Kuromon Market serving Takaida-style ramen around the clock; it's closed only Thursdays and the 2nd and 4th Wednesdays. Reviewers call the brand \"7.5Hz\" or \"Nanahan\". The bowl is a rich, sharp soy broth with more acidity than one visitor expected, thick straight noodles with low moisture, and chashu, best with an extra heap of chopped green onion. One reviewer who knows the original Takaida shop found the same chashu and noodles here, with a slightly milder broth. Chuka soba is ¥800 and a large chashu ramen ¥1,100 (September–October 2026). There's a garlic spice on the counter. People drop in after a night out, or for a morning bowl at 8 am. One person works the shop at a time, and a service charge may be added.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 February 2023 (Tabelog)', background: 'A Kuromon branch of the Takaida-style ramen shop Menya 7.5Hz (September 2026 reviews).', philosophy: null, specialty: 'Takaida-style shoyu ramen.',
      anecdotes: [
        { text: '"While the service differs from the Takai-da branch, the basic concept remains the same. The flavor of the chashu is identical, and the noodles taste the same as well. However, the broth seems slightly milder here." — September 2026.', source: R + 'B535777835/' },
        { text: '"The broth, which had a stronger acidity than I expected. The noodles were straight and had a low moisture content." — October 2026, late night, chuka soba with green onions.', source: R + 'B537738767/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 7.5Hz 黒門市場店、大阪市中央区日本橋1-16-8、近鉄日本橋駅から142m、24時間営業、木曜と第2・第4水曜休み、予約不可、サービス料がかかる場合あり、カード・電子マネー・QR可、10席(カウンター9)、禁煙、2023年2月12日開店。口コミ(2026年9〜10月): 黒門市場の週末朝8時の朝ラー、なんばでTakaida系のラーメン、7.5Hz(ナナハン)、本店とチャーシューと麺は同じでスープは少しマイルド、角切りのチャーシュー、卓上にガーリックスパイス・胡椒・七味、少し狭い、チャーシュー麺大1,100円、濃いスープと太麺、飲んだ後に、刻みねぎがたまらない、キレのある醤油、やや太い麺、中華そば並とねぎ、予想より酸味が強い、ストレートで低加水の麺、スタッフひとりでも手際がいい、チャーシュー丼、中華そば800円。',
      confidence: 'medium', sources: [TB, R + 'B535777835/', R + 'B537738767/', R + 'B536911058/', R + 'B536248458/', R + 'B537996215/', R + 'B538135533/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'straight', hydration: 'low', handmade: false, notes: 'Straight, low-moisture, thick noodles (September–October 2026).' },
      regional_style: [], sub_genre: ['chuka soba'],
      signature_bowl: 'Chuka soba, ¥800 (October 2026), with extra green onion.',
      chashu: 'Same chashu as the original shop, with cubed end pieces (September 2026).',
      notable_toppings: ['chopped green onion', 'chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu.' },
      pantheon: 'Kuromon\'s round-the-clock Takaida bowl: sharp, slightly tart shoyu with thick, low-hydration noodles and a heap of green onion.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 5, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536248458/', '"Amazed by the depth of the broth"; "slightly milder" than the original (B535777835) — mid-scale.'],
        oiliness: [R + 'B537738767/', 'No mention of oil; a sharp, acidic soy broth — placed low.'],
        clarity: [R + 'B536911058/', 'No comment on clarity — mid-scale.'],
        tare_strength: [R + 'B536911058/', '"The broth had a sharp soy sauce flavor"; worried a full bowl would leave a puffy face (B537738767).'],
        noodle_firmness: [R + 'B537738767/', '"Straight and had a low moisture content."'],
        aroma_punch: [R + 'B537738767/', '"A stronger acidity than I expected" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537738767/', R + 'B536911058/', R + 'B535777835/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; one staff member.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-16-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目16番8号 (go) 3m; OSM 黒門市場 北門会 way/1152292655 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538135533/', R + 'B536248458/', R + 'B537996215/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (regular)', '¥800', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
      it('', '', 'Chashu ramen (large)', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'chashu_men'),
      it('', '', 'Extra green onion', '', 'Toppings', 'ask', 'vegan', 'October 2026.', 'negi'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: 'Takaida系の醤油ラーメン(中華そば)800円・チャーシュー麺大1,100円・キレがありやや酸味のある醤油スープ・ストレートで低加水の太麺・たっぷりの刻みねぎ・チャーシュー丼・卓上にガーリックスパイス、胡椒、七味・10席',
    neighborhood: '日本橋1-16-8。黒門市場のそば、近鉄日本橋駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のスープ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー。スープの中身も不明。',
    notes: '[ラーメン・黒門の24時間のTakaida系醤油ラーメン] 黒門市場のそばにある10席の狭いカウンターで、Takaida系のラーメンを24時間。休みは木曜と第2・第4水曜だけ。「7.5Hz」「ナナハン」と呼ばれています。コクとキレのある醤油スープは予想より酸味が強いという声もあり、低加水のストレートの太麺とチャーシュー、刻みねぎを追加するのがおすすめ。Takaidaの店を知る人によると、チャーシューと麺は同じでスープは少しマイルド。中華そば800円、チャーシュー麺大1,100円(2026年9〜10月)。卓上にガーリックスパイス。飲んだ後や、朝8時の朝ラーにも。スタッフはひとりで、サービス料がかかる場合があります。',
  });
}

// ================================================================ 天地人らーめん 2号店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27110291/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tenchijin_ramen_2gouten', name: '天地人らーめん 2号店 (Tenchijin Ramen 2 Gouten)', category: 'OMNI',
    lat: 34.663491, lng: 135.500545, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare; sauced rice bowls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu, pork and eel bowls.',
    hours_raw: 'Tabelog lists only "from 11:00"; closing time and closed days not given, and hours may change. Touch-panel ticket machine at the entrance; noodle firmness asked when you hand over the ticket (September 2026). No reservations. Cards, e-money and QR accepted (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 1-18-12, Naniwa — beside Nankai Namba Stn',
    cuisine: 'Tonkotsu shoyu ramen that looks rich but eats light, medium-thick noodles, firmness to order · original-flavor ramen and pork-bowl set ¥1,280 · ajitama ramen under ¥1,000 · abura soba ¥1,000 with three chashu, white onion and sesame · spicy meat mazesoba · tsukemen, large free · pork bowl stir-fried to order · eel bowl · pickled ginger and yuzu pepper on the counter · 16 counter seats',
    website: null, gmaps: gm('天地人らーめん 2号店 難波'), menu_url: null,
    notes: "[Ramen · light tonkotsu shoyu beside Nankai Namba] A 16-seat counter right beside Nankai Namba Station, open since 2019 and good value. Every ramen here is pork-bone based, and though it looks rich and fatty it eats surprisingly light, with a depth of dashi and medium-thick noodles that soak it up. Generous crunchy green onions add to that. Say how firm you want the noodles when you hand over your ticket. Pickled ginger from the counter works well with the tonkotsu. The ramen-and-pork-bowl set is ¥1,280 (September 2026), and the pork is stir-fried after you order. There's also abura soba (¥1,000) with three slices of chashu, spicy meat mazesoba that can sell out, and tsukemen with a free large size. One diner found it a bit salty. Tabelog only says it opens at 11:00, so check closing times.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 March 2019 (Tabelog)', background: 'Second branch of Tenchijin Ramen (Tabelog).', philosophy: null, specialty: 'Light tonkotsu shoyu ramen; pork bowl.',
      anecdotes: [
        { text: '"At first glance, it looks like it would be rich and fatty, but surprisingly, it was light and easy to eat—delicious! The noodles were medium-thick and absorbed the broth well." — October 2026, second visit.', source: R + 'B475304386/' },
        { text: '"The broth was a bit lighter, but it had a rich tonkotsu flavor with a nice depth from the dashi… the combination of tonkotsu and ginger was fantastic." — September 2026, original-flavor ramen and pork-bowl set ¥1,280.', source: R + 'B536214591/' },
      ],
      japanese_sources_summary: '食べログ: 天地人らーめん 2号店、大阪市浪速区難波中1-18-12、なんば駅から116m、営業時間は「11:00〜」の記載のみ、予約不可、カード・電子マネー・QR可、16席(カウンターのみ)、禁煙、2019年3月22日開店。口コミ(2023年11月〜2026年10月): 南海なんば駅のすぐ横、味玉ラーメンが1,000円弱、クリーミーなのに意外とあっさりした豚骨、ねぎがたっぷりでシャキシャキ、昼のつけ麺は大盛り無料で柚子胡椒、豚骨醤油でコスパ上位、豚丼(券を買うと豚を炒め始める)、うなぎ丼も、入口のタッチパネルの券売機、元祖の味ラーメンと豚丼のセット1,280円、麺の硬さを聞かれる、少し軽めだが豚骨の旨みとだしの深み、卓上の紅しょうが、券売機の油そば1,000円(チャーシュー3枚、細切りの白い玉ねぎ、ごま、ラー油と酢)、辛肉まぜそばは売り切れ、豚骨ベースのラーメンが多い、中太麺、少し塩辛いという声。',
      confidence: 'medium', sources: [TB, R + 'B475304386/', R + 'B536214591/', R + 'B419486219/', R + 'B530159855/', R + 'B532116708/', R + 'B532986154/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick noodles, firmness to order (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba', 'tsukemen'],
      signature_bowl: 'Original-flavor tonkotsu shoyu ramen; set with a pork bowl ¥1,280 (September 2026).',
      chashu: 'Three slices on the abura soba (October 2026).',
      notable_toppings: ['green onion', 'ajitama', 'pickled ginger (counter)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Nankai Namba\'s light tonkotsu shoyu: creamy-looking, easy-drinking pork broth with crunchy green onion and a stir-fried pork bowl.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536214591/', '"A bit lighter, but it had a rich tonkotsu flavor" — mid-scale.'],
        oiliness: [R + 'B475304386/', '"Looks like it would be rich and fatty, but surprisingly, it was light" — placed low.'],
        clarity: [R + 'B475304386/', '"Creamy yet surprisingly light" (November 2023 visit) — opaque.'],
        tare_strength: [R + 'B536214591/', 'Tonkotsu with "a nice depth from the dashi"; one diner found it a bit salty — mid-scale.'],
        noodle_firmness: [R + 'B475304386/', '"Medium-thick and absorbed the broth well"; firmness to order — mid-scale.'],
        aroma_punch: [R + 'B475304386/', '"Light and easy to eat" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B475304386/', R + 'B536214591/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ticket machine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-18-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目18番12号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536214591/', R + 'B419486219/', R + 'B475304386/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Original-flavor ramen and pork-bowl set', '¥1,280', 'Sets', 'no', 'no', 'September 2026.', 'ganso_set'),
      it('', '', 'Ajitama ramen', '', 'Ramen', 'no', 'no', 'November 2023; just under ¥1,000.', 'ajitama'),
      it('', '', 'Abura soba', '¥1,000', 'Mazesoba', 'no', 'no', 'October 2026.', 'abura'),
      it('', '', 'Spicy meat mazesoba', '', 'Mazesoba', 'no', 'no', 'October 2026; can sell out.', 'karaniku'),
      it('', '', 'Tsukemen (large free)', '', 'Tsukemen', 'no', 'no', 'June 2026.', 'tsuke'),
      it('', '', 'Pork rice bowl', '', 'Rice', 'no', 'no', 'August 2026.', 'butadon'),
    ] }, {
    cuisine: '見た目は濃厚でも食べるとあっさりの豚骨醤油、中太麺で硬さを選べる・元祖の味ラーメンと豚丼のセット1,280円・味玉ラーメン1,000円弱・油そば1,000円(チャーシュー3枚、細切りの白い玉ねぎ、ごま)・辛肉まぜそば・大盛り無料のつけ麺・注文後に炒める豚丼・うなぎ丼・卓上に紅しょうがと柚子胡椒・カウンター16席',
    neighborhood: '浪速区難波中1-18-12。南海なんば駅のすぐ横',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、たれのかかった丼。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、豚丼やうなぎ丼。',
    notes: '[ラーメン・南海なんば駅横のあっさり豚骨醤油] 南海なんば駅のすぐ横にあるカウンター16席の店で、2019年開店、コスパのいい一軒。ラーメンはどれも豚骨ベースで、濃厚で脂っぽく見えて意外とあっさり、だしの深みがあり、中太麺がスープをよく吸います。シャキシャキのねぎもたっぷり。食券を渡すときに麺の硬さを伝えて。卓上の紅しょうがが豚骨によく合います。ラーメンと豚丼のセットは1,280円(2026年9月)で、豚は注文してから炒めます。チャーシュー3枚の油そば(1,000円)、売り切れることもある辛肉まぜそば、大盛り無料のつけ麺も。少し塩辛いという人も。食べログには11:00開店とだけあるので、閉店時間は確認を。',
  });
}

save();
