// Ginza Station half-mile sweep (805 m), batch 76 — all-genre phase.
//   + マルディ・グラ — MOM_AND_POP: chef 和知徹 (Tohru Wachi) opened "自身の店" in 2001 (gendai.media); single shop, 22 seats.
//   + ビストロ ヴォージュ (long-established bistro, relocated; owner not named → OMNI)
//   + 銀座 とよだ (Namiki-dōri kaiseki; separate from Kappō Toyoda in Nihonbashi → OMNI)
//   + 和牛焼肉 千 (opened 2026-08-29; owner also runs the dango shop Hiiragi → OMNI)
// Skipped: お好み焼き 衣 13212179 (last review 2018), otto 13280397 (bar; no food reviews).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ マルディ・グラ (M&P)
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13004991/'; const R = TB + 'dtlrvwlst/';
  const GD = 'https://gendai.media/articles/-/66147';
  const d = day(['18:00', '22:30']);
  put({
    id: 'tokyo_mardi_gras_ginza8', name: 'マルディ・グラ (Mardi Gras)', category: 'MOM_AND_POP',
    lat: 35.668612, lng: 139.760519,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Meat-centred bistro cooking (grilled lamb, duck, foie gras with toast, ham) plus fried Brussels sprouts and lagman noodles; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: lamb, duck, foie gras, ham; a coriander "herb bomb" salad is the main vegetable dish described.',
    hours_raw: 'Mon–Sat 18:00–22:30; closed Sundays; lunch dates announced on Instagram (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Nodaya Bldg B1F — near Shimbashi and Ginza Stns',
    cuisine: 'Chef Tohru Wachi’s meat-focused French bistro since 2001 · grilled lamb, duck, foie gras · coriander "herb bomb" salad, lagman · deep wine list', cuisine_type: 'french',
    website: null, gmaps: gm('マルディ・グラ 銀座8-6-19 野田屋ビル'), menu_url: null,
    notes: "[French bistro · Tohru Wachi's meat temple, since 2001] A 22-seat basement bistro that chef Tohru Wachi (和知徹) opened in 2001 as the chef’s own restaurant and still runs; 2026 marked its 25th anniversary. Wachi is known in Japan as a master of meat, and the cooking keeps it simple: grill or simmer the best ingredients and subtract the unnecessary. Signatures include a big joint of lamb grilled rosy and carved at the table, duck, pan-seared foie gras on toast (paired with aged Yquem for the anniversary), ham, and the coriander 'herb bomb' salad. Others are fried Brussels sprouts and the popular lagman lamb noodles. À la carte, casual and bookable a day ahead; solo diners welcome. Lunch only on dates posted on Instagram.",
    chef_bio: { chef_name: 'Tohru Wachi (和知徹), owner-chef', roles: ['owner-chef'], origin: 'Opened 2001 as the chef’s own restaurant (gendai.media); 25th anniversary in 2026 (review)', background: 'Opened Mardi Gras as the chef’s own shop in 2001 and is known as a specialist in meat cooking (gendai.media); travels to producers (Tabelog listing).', philosophy: '"We enhance the quality of the ingredients and subtract any unnecessary elements." (Tabelog listing)', specialty: 'Grilled lamb and duck.',
      anecdotes: [
        { text: '"What particularly impressed me was the lamb. It was grilled in a large chunk… When it was sliced, the inside revealed a beautiful rosy color." — September 2026.', source: R + 'B535342116/' },
        { text: '"Since the restaurant is celebrating its 25th anniversary, I paired a commemorative 6L D\'Yquem with the pan-seared foie gras." — September 2026.', source: R + 'B24567723/' },
        { text: '01年に自身の店「マルディ グラ」をオープン。— gendai.media', source: GD },
      ],
      japanese_sources_summary: '現代ビジネス(gendai.media): 和知徹シェフは01年に自身の店「マルディ グラ」をオープン、肉料理のスペシャリスト、人気メニューのラグマン、燻製黒胡椒のマグレ鴨。食べログ: マルディ・グラ、銀座8-6-19 野田屋ビルB1F、22席、月〜土18:00〜22:30、日休、ランチはInstagramで告知。店の紹介: 肉の名手、焼くか煮るだけのシンプルな調理、「素材の良さを引き出し、余計なものは引く」、産地にも足を運ぶ。2026年の口コミ: 25周年、パクチーのハーブボム、フォアグラのポワレとイケム、鴨、塊で焼いた仔羊(ロゼ)、ハム、芽キャベツのフリット、アラカルト、前日でも予約可、ワインリスト充実、一人でも。',
      confidence: 'high', sources: [GD, TB, R + 'B535342116/', R + 'B24567723/', R + 'B532342233/', R + 'B535034861/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual à la carte; solo diners welcome.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-6-19 野田屋ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026 (25th anniversary).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目6番19号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535342116/', R + 'B24567723/', GD],
    price_note: 'No prices captured; reviewers spend ¥8,000–20,000.', last_checked: TODAY, items: [
      it('パクチーのハーブボム', '', 'Coriander "herb bomb" salad', '', 'Starters', 'ask', 'ask', 'September 2026.', 'herb_bomb'),
      it('仔羊の塊焼き', '', 'Lamb grilled in a large joint, carved rosy', '', 'Mains', 'ask', 'no', 'September 2026.', 'lamb'),
      it('フォアグラのポワレ', '', 'Pan-seared foie gras with toast', '', 'Mains', 'no', 'no', 'September 2026.', 'foie_gras'),
      it('ラグマン', 'raguman', 'Lagman (lamb noodles)', '', 'Mains', 'no', 'no', 'gendai.media.', 'lagman'),
    ] }, {
    cuisine: '和知徹シェフの肉が主役のフレンチビストロ(2001年〜)・仔羊の塊焼き、鴨、フォアグラ・パクチーのハーブボム、ラグマン・ワイン充実',
    neighborhood: '銀座八丁目、野田屋ビルB1F。新橋駅・銀座駅の近く',
    gf_detail: '要確認。仔羊、鴨、トースト付きのフォアグラ、ハムなど肉中心のビストロ料理に、芽キャベツのフリットやラグマンも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。仔羊、鴨、フォアグラ、ハム。野菜料理として書かれているのは主にパクチーのハーブボムです。',
    notes: '[フレンチビストロ・和知徹の肉の殿堂、2001年から] 和知徹シェフが2001年に自身の店として開き、今も腕を振るう22席の地下のビストロで、2026年は25周年。肉焼きの名手として知られ、最良の素材を焼くか煮るだけ、余計なものは引くというシンプルな料理。名物は塊で焼いて席で切り分けるロゼ色の仔羊、鴨、トーストにのせたフォアグラのポワレ(25周年は熟成イケムと)、ハム、パクチーの「ハーブボム」。芽キャベツのフリットや人気のラグマン(羊の麺)も。アラカルトで気取らず、前日でも予約でき、一人でも歓迎。ランチはInstagramで告知する日のみ。',
  });
}

// ================================================================ ビストロ ヴォージュ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13015041/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '21:00']);
  put({
    id: 'tokyo_bistro_vosges_ginza5', name: 'ビストロ ヴォージュ (Bistro Vosges)', category: 'OMNI',
    lat: 35.671578, lng: 139.762951,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature foie gras salad comes on bread; risotto, carpaccio and steak are also on the menu. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: foie gras, mussels, tuna tartare, Wagyu steak.',
    hours_raw: 'Mon–Sat 18:00–21:00; closed Sundays (Tabelog). Service charge may apply.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Nishigo Bldg 7F — 3 min from Ginza Stn (relocated from Hanatsubaki Bldg)',
    cuisine: 'Long-running Ginza bistro · signature foie gras salad, cod and milt risotto, mussels, big pastas · about ¥3,000 a dish', cuisine_type: 'french',
    website: 'http://www.ac.auone-net.jp/~vosges/index.html', gmaps: gm('ビストロ ヴォージュ 銀座5-4-15'), menu_url: null,
    notes: "[French bistro · a long-running Ginza hideaway] A small, long-established bistro of about 20 seats, now on a seventh floor 3 minutes from Ginza Station after moving from the Hanatsubaki Building. The signature is a foie gras salad with a big slab of foie gras on bread over crisp greens. Diners also rave about the cod and milt risotto with garlic and lemon, the mussels, tuna and avocado tartare, carpaccio, tender Wagyu steak and a huge peperoncino (leftovers can go home). Dishes run about ¥3,000, so dinner with drinks is around ¥14,000. One diner found that steep for the room. Dinner only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Long-established (2026 review); relocated from Ginza 6-4-16 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Foie gras salad.',
      anecdotes: [
        { text: '"The signature foie gras salad features a large piece of foie gras served on bread!" — July 2026.', source: R + 'B531335246/' },
        { text: '"I forgot to mention how much I love the mussels… The fact that you can take leftovers home means they taste just as good the next day." — September 2026.', source: R + 'B536656866/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ ヴォージュ、銀座5-4-15 西五ビル7F(銀座6-4-16 花椿ビル2Fから移転)、銀座駅から徒歩3分、20席(カウンター4)、月〜土18:00〜21:00、日休、サービス料あり。口コミ: 老舗のビストロ、名物のフォアグラのサラダ(パンにのせた大きなフォアグラ)、鱈と白子のリゾット、ムール貝、マグロとアボカドのタルタル、カルパッチョ、和牛ステーキ、量の多いペペロンチーノ、持ち帰り可、1品約3,000円・1人約14,000円で高いとの声。',
      confidence: 'low', sources: [TB, R + 'B531335246/', R + 'B536656866/', R + 'B521132556/', R + 'B519403695/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small room; dinner only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-4-15 西五ビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July and September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目4番15号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531335246/', R + 'B519403695/'],
    price_note: 'About ¥3,000 a dish per a December 2025 review.', last_checked: TODAY, items: [
      it('フォアグラのサラダ', '', 'Foie gras salad on bread', '', 'Starters', 'no', 'no', 'Signature.', 'foie_salad'),
      it('鱈と白子のリゾット', '', 'Cod and milt risotto with garlic and lemon', '', 'Mains', 'ask', 'no', '', 'cod_risotto'),
      it('ムール貝', 'muuru gai', 'Mussels', '', 'Starters', 'ask', 'no', '', 'mussels'),
    ] }, {
    cuisine: '銀座の老舗ビストロ・名物のフォアグラのサラダ、鱈と白子のリゾット、ムール貝、大盛りのパスタ・1品約3,000円',
    neighborhood: '銀座五丁目、西五ビル7F(花椿ビルから移転)。銀座駅から徒歩3分',
    gf_detail: '要確認。名物のフォアグラのサラダはパンにのり、リゾット、カルパッチョ、ステーキも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、ムール貝、マグロのタルタル、和牛ステーキ。',
    notes: '[フレンチビストロ・銀座の老舗の隠れ家] 約20席の小さな老舗ビストロで、花椿ビルから銀座駅3分のビルの7階に移転。名物はパリッとした葉野菜の上に、パンにのせた大きなフォアグラを盛るフォアグラのサラダ。ニンニクとレモンの効いた鱈と白子のリゾット、ムール貝、マグロとアボカドのタルタル、カルパッチョ、柔らかな和牛ステーキ、山盛りのペペロンチーノ(持ち帰りも可)も絶賛されています。1品約3,000円で、飲んで1人14,000円ほど。店の雰囲気の割に高いと感じた客も。夜のみ。',
  });
}

// ================================================================ 銀座 とよだ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13009543/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:00'], ['17:00', '23:00']), we = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'tokyo_ginza_toyoda_kaiseki_ginza7', name: '銀座 とよだ (Ginza Toyoda)', category: 'OMNI',
    lat: 35.670132, lng: 139.761634,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kaiseki (clear soups, sashimi, grilled fish, rice); soy sauce and dashi are normal in kaiseki and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea urchin, abalone, sashimi, fish; dashi-based soups.',
    hours_raw: 'Tue–Fri 11:30–14:00 and 17:00–23:00; Sat, Sun and holidays 11:30–14:00 and 16:00–23:00; closed Mondays (Tabelog).',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme on Namiki-dōri, La Viale Ginza Bldg 2F — near Ginza Stn (not the Kappō Toyoda in Nihonbashi)',
    cuisine: 'Seasonal kaiseki on Namiki-dōri · omakase from about ¥18,000 · matsutake soup, chestnut rice in autumn', cuisine_type: 'kaiseki',
    website: 'https://www.ginza-toyoda.com/', gmaps: gm('銀座 とよだ ラヴィアーレ銀座ビル'), menu_url: null,
    notes: "[Kaiseki · Namiki-dōri classic] A 20-seat kaiseki restaurant on Namiki-dōri that a 2026 diner calls long-established and listed in the Michelin Guide for years. It is not the Kappō Toyoda in Nihonbashi. Courses follow the season. An August 2026 dinner opened with sea urchin, abalone and jelly, then sashimi on a lotus leaf. A September ¥18,000 omakase ran grilled beltfish with round eggplant and shungiku, young Tanba black beans with sweet shrimp, a matsutake, turnip and sea-bream clear soup, and tuna, squid and flounder. The cheapest October course still brought swordfish, Spanish mackerel, matsutake soup and chestnut rice. The white rice at the end gets special praise. Seasoning is refined but a touch salty.",
    chef_bio: { chef_name: null, roles: [], origin: 'Long-established (2026 review)', background: 'No source read in this batch names the owner.', philosophy: 'Fresh seasonal ingredients year-round (Tabelog listing).', specialty: 'Seasonal kaiseki; rice.',
      anecdotes: [
        { text: '"The meal started with sea urchin, abalone, and jelly… The sashimi served on a lotus leaf was visually stunning." — August 2026.', source: R + 'B533569959/' },
        { text: '"I enjoyed the omakase course for JPY 18,000… Matsutake mushroom, turnip, and sea bream clear soup." — September 2026.', source: R + 'B536667425/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 とよだ(ぎんざとよだ)、銀座7-5-4 ラヴィアーレ銀座ビル2F、並木通り、20席、火〜金11:30〜14:00・17:00〜23:00、土日祝11:30〜14:00・16:00〜23:00、月休、日本橋の「割烹とよだ」とは別店舗、公式サイト ginza-toyoda.com。2026年の口コミ: ミシュランに長年掲載の老舗、雲丹と鮑とジュレ、蓮の葉の刺身、おまかせ18,000円(太刀魚と丸茄子と春菊の焼き物、丹波の若い黒豆と甘海老、松茸と蕪と鯛のお椀、鮪・烏賊・平目)、最も手頃なコースでも太刀魚・鰆・松茸のお吸い物・栗ご飯、締めの白ご飯が絶品、上品だがやや塩気強め。',
      confidence: 'medium', sources: [TB, R + 'B533569959/', R + 'B536667425/', R + 'B537100584/', R + 'B534499309/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Kaiseki; book ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-5-4 ラヴィアーレ銀座ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目5番4号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536667425/', R + 'B537100584/'],
    price_note: 'Omakase price from a September 2026 review.', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Seasonal omakase kaiseki', '¥18,000', 'Courses', 'ask', 'no', 'September 2026.', 'omakase'),
    ] }, {
    cuisine: '並木通りの季節の会席・おまかせ約18,000円から・秋は松茸のお椀や栗ご飯',
    neighborhood: '銀座七丁目の並木通り、ラヴィアーレ銀座ビル2F。銀座駅の近く(日本橋の割烹とよだとは別)',
    gf_detail: '要確認。お椀、刺身、焼き魚、ご飯の季節の会席で、醤油やだしを使うのが普通です。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。雲丹、鮑、刺身、魚、だしのお椀。',
    notes: '[会席・並木通りの老舗] 並木通りにある20席の会席料理店で、2026年の客によれば長年ミシュランに掲載されてきた老舗。日本橋の「割烹とよだ」とは別のお店です。コースは季節に沿って。2026年8月の夜は雲丹と鮑とジュレに始まり、蓮の葉にのせた刺身。9月の18,000円のおまかせは、太刀魚と丸茄子と春菊の焼き物、丹波の若い黒豆と甘海老、松茸と蕪と鯛のお椀、鮪・烏賊・平目など。10月の最も手頃なコースでも太刀魚、鰆、松茸のお吸い物、栗ご飯が出たそう。締めの白ご飯が特に好評。味つけは上品ながらやや塩気強め。',
  });
}

// ================================================================ 和牛焼肉 千
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13326033/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:30', '23:59']);
  put({
    id: 'tokyo_wagyu_yakiniku_sen_ginza7', name: '和牛焼肉 千 (Wagyu Yakiniku Sen)', category: 'OMNI',
    lat: 35.668795, lng: 139.762199,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku courses with sauce-grilled cuts, yaki-suki and carpaccio; tare and sukiyaki sauce usually contain soy sauce, and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu yakiniku.',
    hours_raw: 'Mon–Sat 17:30–24:00 (food L.O. 23:00); closed Sundays (Tabelog). 10% service; private rooms +10%.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme, FUKUHARA GINZA B1F (same floor as 1864 Sushi Zen) — near Ginza Stn',
    cuisine: 'Wagyu yakiniku from Tajima-line heifers (Ōmi, Kobe) · black-tongue tasting · courses ¥9,900–22,000 · opened August 2026', cuisine_type: 'other',
    website: null, gmaps: gm('和牛焼肉 千 FUKUHARA GINZA'), menu_url: null,
    notes: "[Yakiniku · a new Wagyu counter in Ginza 7-chōme] A sleek, black-toned 22-seat yakiniku restaurant that opened on 29 August 2026 in the basement of FUKUHARA GINZA, with a counter and semi-private and private rooms. The name means 'thousand': it selects Tajima-line heifers such as Ōmi and Kobe beef. The ¥9,900 course features a three-part black-tongue tasting (lower, middle and upper tongue), Ōmi-beef carpaccio seared in front of you, sauce-grilled cuts and Tokyo-style grilled beef. The ¥22,000 premium course adds Ōmi and Kobe yaki-suki, truffle and caviar, with French and Chinese touches. The owner also runs Hiiragi, the Ginza dango shop. Polished service; 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 August 2026 (Tabelog)', background: 'The owner also runs the Ginza dango shop Hiiragi (2026 review), unnamed.', philosophy: 'Choosing the best beef from thousands of cattle (Tabelog listing).', specialty: 'Black-tongue tasting.',
      anecdotes: [
        { text: '"The main highlight was the tasting of three types of black tongue. Each part—lower tongue, middle tongue, and upper tongue—offers different textures and fat content." — October 2026.', source: R + 'B537307259/' },
        { text: '"I enjoyed the premium course featuring Omi Beef and Kobe Beef Yaki-suki for JPY 22,000." — September 2026.', source: R + 'B536028059/' },
      ],
      japanese_sources_summary: '食べログ: 和牛焼肉 千、銀座7-8-10 FUKUHARA GINZA B1F、22席(カウンター・半個室・個室)、月〜土17:30〜24:00、日休、サービス料10%・個室は別途10%、2026年8月29日開店。店の紹介: 何千頭から選ぶことが店名の由来、但馬系の未経産牝牛(近江牛、神戸牛)、黒タン、黒ハラミ。2026年の口コミ: 開店1週間後に訪問、9,900円のコース(黒タン3種の食べ比べ、目の前で焼く近江牛のカルパッチョ、タレ焼き、東京焼き)、22,000円のプレミアムコース(近江牛と神戸牛の焼きすき、トリュフ、キャビア、フレンチや中華の技法)、黒基調の内装、同じフロアに1864 鮨 善、オーナーはみたらし団子の「柊」も経営。',
      confidence: 'medium', sources: [TB, R + 'B537307259/', R + 'B536028059/', R + 'B537408756/', R + 'B535297227/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Semi-private seating; staff grill the signature cuts.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-8-10 FUKUHARA GINZA B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened 29 August 2026; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目8番10号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537307259/', R + 'B536028059/', R + 'B537408756/'],
    price_note: 'Course prices from September–October 2026 reviews; 10% service extra.', last_checked: TODAY, items: [
      it('黒タン食べ比べコース', '', 'Course with three-part black-tongue tasting, Ōmi carpaccio, sauce-grilled cuts', '¥9,900', 'Courses', 'ask', 'no', 'October 2026.', 'tongue_course'),
      it('近江牛と神戸牛の焼きすきのプレミアムコース', '', 'Premium course with Ōmi and Kobe beef yaki-suki, truffle and caviar', '¥22,000', 'Courses', 'ask', 'no', 'September 2026.', 'premium'),
    ] }, {
    cuisine: '但馬系の和牛(近江牛、神戸牛)の焼肉・黒タンの食べ比べ・コース9,900〜22,000円・2026年8月開店',
    neighborhood: '銀座七丁目、FUKUHARA GINZA B1F(1864 鮨 善と同じフロア)。銀座駅の近く',
    gf_detail: '要確認。タレ焼き、焼きすき、カルパッチョの焼肉のコースで、タレやすき焼きのたれには醤油が使われるのが普通です。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉です。',
    notes: '[焼肉・銀座七丁目の新しい和牛の店] 2026年8月29日、FUKUHARA GINZAの地下に開いた、黒を基調にしたスタイリッシュな22席の焼肉店で、カウンター、半個室、個室。店名「千」は何千頭から選ぶ意味で、近江牛や神戸牛など但馬系の未経産牝牛を厳選。9,900円のコースは黒タン3種(タン下・タン中・タン元)の食べ比べ、目の前で炙る近江牛のカルパッチョ、タレ焼き、東京焼きなど。22,000円のプレミアムコースは近江牛と神戸牛の焼きすき、トリュフやキャビアも使い、フレンチや中華の技法も。オーナーは銀座のみたらし団子の店「柊」も営んでいます。サービスは上質、サービス料10%。',
  });
}

save();
