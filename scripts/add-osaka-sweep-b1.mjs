// Osaka sweep (2-mile circle around Dotonbori), batch 1 — ramen phase, nearest first (all OMNI).
//   + 金龍ラーメン 道頓堀店 (24-hour, the dragon sign; free kimchi, garlic, chives)
//   + どうとんぼり神座 道頓堀店 (light broth with napa cabbage; now a national chain)
//   + 金久右衛門 道頓堀店 (Osaka Black shoyu)
//   + らぁ麺 はやし田 道頓堀店 (Tokyo's Hayashida under the Glico sign; INGS franchise)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 1);

// ================================================================ 金龍ラーメン 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001495/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_kinryu_ramen_dotonbori', name: '金龍ラーメン 道頓堀店 (Kinryu Ramen Dotonbori)', category: 'OMNI',
    lat: 34.668679, lng: 135.503061, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a pork-bone broth with a secret tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and chicken-feet broth, chashu.',
    hours_raw: 'Open 24 hours, every day (Tabelog; may change). Number tag: collect your bowl when called.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-chōme, under the giant dragon on the canal side — 5 min from Namba Stn exit 14',
    cuisine: '24-hour Minami ramen under the giant dragon · pork-bone and chicken-feet tonkotsu · ramen or chashu ramen only (ramen ¥900) · free kimchi, garlic and garlic chives · tatami seating',
    website: null, gmaps: gm('金龍ラーメン 道頓堀店'), menu_url: null,
    notes: "[Ramen · the 24-hour bowl under Dotonbori's giant dragon] Minami's famous all-night ramen stand, known for the huge dragon sculpture over the shop. There are only two choices, ramen (¥900 in October 2026, after a ¥200 rise) or chashu ramen, in a tonkotsu the listing describes as rich, made from pork bones and chicken feet with a secret tare. Most 2026 diners found it surprisingly light, with medium-thin, slightly curly noodles. The fun is the free kimchi, garlic and garlic chives to load in. Take a number and carry your bowl from the counter to tatami or counter seats. Queues are mostly overseas visitors late at night but move fast. Opinions vary: a nostalgic finish to a night out for many, lukewarm and thin for one critic.",
    chef_bio: { chef_name: null, roles: [], origin: 'Dotonbori 1-chōme (opening date not given)', background: 'Multi-shop Minami brand (a reviewer notes the main shop is being rebuilt).', philosophy: null, specialty: 'Tonkotsu ramen with free kimchi and garlic chives.',
      anecdotes: [
        { text: '"The broth is pork bone-based but quite light. The noodles are thin, and the added garlic chives and kimchi gave it a nice spicy kick." — October 2026, ramen ¥900 after a night out.', source: R + 'B536661109/' },
        { text: '"I remember it being JPY 600 back in my twenties, but now it\'s JPY 900." — October 2026.', source: R + 'B537471187/' },
      ],
      japanese_sources_summary: '食べログ: 金龍ラーメン 道頓堀店、大阪市中央区道頓堀1-7-26、なんば駅14番出口徒歩5分、24時間営業、予約不可、カウンター・座敷、子ども可。店の紹介: 巨大な龍のオブジェで知られるミナミの24時間営業の名物店、豚骨と鶏ガラ(もみじ)を煮込んだ濃厚豚骨に秘伝のタレ、自家製のストレート麺、キムチ・にんにく・ニラ入れ放題。2026年の口コミ: インバウンド客が多い、中細のやや縮れ麺、醤油ベースの豚骨で塩気は控えめ・ぬるかったとの声、メニューはラーメンとチャーシューメンのみ、あっさりした豚骨、無料のキムチとニラが辛い、胡椒が合う、ラーメン900円(200円値上げ、20代の頃は600円)、本店は工事中、鶏と豚のブレンドで切れのある味、ラー油の香り、番号札で呼ばれて自分で運ぶ、回転が早い。',
      confidence: 'medium', sources: [TB, R + 'B536661109/', R + 'B537471187/', R + 'B536670125/', R + 'B409489189/', R + 'B538087137/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'unknown', tare: ['other'], aroma_oil: ['chili oil'], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'wavy', hydration: 'low', handmade: true, notes: 'House-made noodles (listing); diners describe them as medium-thin with a slight curl and lower water content (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'ラーメン (ramen) — ¥900 in October 2026; チャーシューメン also offered.',
      chashu: 'Two kinds, sliced and cubed, on the sweet side (one 2026 review).',
      notable_toppings: ['free kimchi', 'free garlic', 'free garlic chives', 'green onion', 'bean sprouts'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and chicken-feet broth.' },
      pantheon: 'Dotonbori after midnight: a light pork-bone bowl under the giant dragon, made your own with free kimchi, garlic and garlic chives, carried to the tatami on a number tag.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536661109/', '"The broth is pork bone-based but quite light"; another: "surprisingly light" (' + R + 'B536645572/); the listing itself calls it rich.'],
        oiliness: [R + 'B538087137/', '"Surprisingly light even after finishing my meal"; "lacks richness, it has a sharp finish" (' + R + 'B536670125/).'],
        clarity: [R + 'B536384620/', '"The broth was a light tonkotsu" — a pork-bone broth; no source says it is clear.'],
        tare_strength: [R + 'B536670125/', '"The seasoning is also sharp"; another found it "on the milder side in terms of saltiness" (' + R + 'B409489189/).'],
        noodle_firmness: [R + 'B409489189/', '"Medium-thin with a slight curl, cooked just right… a lower water content"; the listing calls them firm.'],
        aroma_punch: [R + 'B536645572/', '"The smell of tonkotsu broth was strong"; free kimchi and garlic chives add spice (' + R + 'B536384620/).'],
      },
      confidence: 'medium', sources: [R + 'B536661109/', R + 'B536645572/', R + 'B538087137/', R + 'B536670125/', R + 'B536384620/', R + 'B409489189/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Number tag; carry your own bowl.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0071 大阪府大阪市中央区道頓堀1-7-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番26号 (go) 1m; OSM 金龍ラーメン way/222964062 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536661109/', R + 'B537471187/'],
    price_note: 'Price from October 2026 reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('チャーシューメン', 'chāshūmen', 'Chashu ramen', '', 'Ramen', 'no', 'no', '', 'chashumen'),
    ] }, {
    cuisine: '巨大な龍の下のミナミの24時間ラーメン・豚骨ともみじの豚骨・メニューはラーメンとチャーシューメンだけ(ラーメン900円)・キムチ、にんにく、ニラは無料・座敷席',
    neighborhood: '道頓堀一丁目、川沿いの巨大な龍の下。なんば駅14番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。豚骨スープに秘伝のタレ、小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨ともみじのスープ、チャーシュー。',
    notes: '[ラーメン・道頓堀の巨大な龍の下の24時間の一杯] 店の上の巨大な龍のオブジェで知られる、ミナミの名物の24時間営業のラーメン店。メニューはラーメン(2026年10月は200円値上げ後の900円)とチャーシューメンの2つだけで、店の紹介によれば豚骨ともみじを煮込んだ濃厚豚骨に秘伝のタレ。ただ2026年の客の多くは意外とあっさりと感じ、麺は中細でやや縮れ。楽しみは無料のキムチ、にんにく、ニラをたっぷり入れること。番号札を受け取り、自分でカウンターから座敷やカウンター席へ運びます。深夜は海外からの客中心の行列ですが回転は早い。飲んだ後の懐かしい締めという声もあれば、ぬるく物足りないという辛口の声も。',
  });
}

// ================================================================ どうとんぼり神座 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001562/'; const R = TB + 'dtlrvwlst/';
  const d = day(['10:00', '08:00']);
  put({
    id: 'osaka_kamukura_dotonbori', name: 'どうとんぼり神座 道頓堀店 (Dotonbori Kamukura)', category: 'OMNI',
    lat: 34.668658, lng: 135.502974, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; the broth recipe is secret, and sides include kara-age and gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork slices and soft-boiled egg on the ramen; the secret broth is not described.',
    hours_raw: 'Daily 10:00–08:00 next morning (Tabelog). Order on the table tablet.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-chōme (1-7-25), next to Kinryū Ramen — 5 min from Namba Stn',
    cuisine: 'Dotonbori-born light ramen chain · secret broth with crunchy napa cabbage and fine-sliced pork · "delicious ramen" ¥850 · small chashu and soft-egg ramen ¥1,270 · seasonal hot-and-sour noodles · open 22 h',
    website: 'https://kamukura.co.jp/', gmaps: gm('どうとんぼり神座 道頓堀店'), menu_url: null,
    notes: "[Ramen · Kamukura's light cabbage ramen on its home street] The Dotonbori shop of Kamukura, now a nationwide chain that long-time fans still call a local treasure, with 71 seats and open from 10:00 to 08:00 the next morning. The signature \"delicious ramen\" (¥850 in October 2026) is a light, gently sweet, secret-recipe broth heaped with crunchy napa cabbage and thin-sliced pork. The most popular version adds small chashu and a soft-boiled egg (¥1,270); there's kara-age (¥430), gyoza and seasonal bowls such as a hot-and-sour soup with Zhenjiang vinegar and cilantro. Order on the table tablet. It's easy to eat and veg-heavy, though one diner found it too salty, and the noodles are soft, almost udon-like.",
    chef_bio: { chef_name: null, roles: [], origin: 'Dotonbori 1-chōme; a 2026 reviewer calls this the main branch', background: 'National chain (kamukura.co.jp).', philosophy: null, specialty: 'Light broth with napa cabbage.',
      anecdotes: [
        { text: '"Every time I visit, I ponder the mystery of the secret broth while enjoying the crisp napa cabbage and finely sliced pork that are its signature features." — September 2026, a fan since student days 35 years ago.', source: R + 'B537243574/' },
        { text: '"I ordered the Most Popular Small Chashu and Soft-Boiled Egg Ramen (JPY 1270) along with Kara-age (JPY 430) using the tablet at my table." — September 2026, a first visit to what the reviewer calls the main branch.', source: R + 'B535749498/' },
      ],
      japanese_sources_summary: '食べログ: どうとんぼり神座 道頓堀店、大阪市中央区道頓堀1-7-25、なんば駅徒歩5分、71席、毎日10:00〜翌8:00、予約不可、公式サイト kamukura.co.jp。2026年の口コミ: 独特のあっさりスープに白菜、セットは大盛りで満腹、塩気が強すぎたとの声、本店と呼んで訪問、小チャーシュー煮玉子ラーメン1,270円と唐揚げ430円をタブレットで、旨みと甘みのスープとシャキシャキの白菜、観光客で賑わう、店舗により副菜が違う、隣の金龍の行列の横で空いていた、おいしいラーメン850円とハイボール430円、全国チェーン、35年前の学生時代から、秘伝のスープ・白菜・薄切り豚肉、大阪では女性客が多い、うどんのような麺、季節の酸辣湯麺(鎮江香酢・パクチー・蒸し鶏)と餃子。',
      confidence: 'medium', sources: [TB, R + 'B537243574/', R + 'B535749498/', R + 'B536755192/', R + 'B538064585/', R + 'B535546968/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Soft noodles "with a texture similar to udon" (October 2026); another diner found them "nothing special".' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'おいしいラーメン (delicious ramen) — ¥850 in October 2026; 小チャーシュー煮玉子ラーメン ¥1,270 (September 2026).',
      chashu: 'Thin-sliced pork in the bowl; small chashu on the popular version.',
      notable_toppings: ['napa cabbage', 'thin-sliced pork', 'soft-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork slices; broth recipe secret.' },
      pantheon: 'Dotonbori\'s gentle bowl: a light, faintly sweet secret broth buried under crunchy napa cabbage and thin pork, served nearly round the clock and loved precisely for not being heavy.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 2, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B538064585/', '"The ramen is loaded with vegetables, and the broth is light and easy to drink"; "light, sweet flavor" (' + R + 'B536755192/).'],
        oiliness: [R + 'B535546968/', '"An easy-to-eat type of ramen without heaviness."'],
        clarity: [R + 'B538064585/', 'No source describes the broth\'s look; placed mid-scale from repeated "light and easy to drink" descriptions.'],
        tare_strength: [R + 'B535546968/', '"I found the saltiness of the broth to be quite strong"; others call it light and sweet (' + R + 'B536755192/).'],
        noodle_firmness: [R + 'B538064585/', '"The noodles have a texture similar to udon"; "The noodles were nothing special" (' + R + 'B536755192/).'],
        aroma_punch: [R + 'B538064585/', '"A healthy ramen with a gentle flavor."'],
      },
      confidence: 'medium', sources: [R + 'B538064585/', R + 'B536755192/', R + 'B535546968/', R + 'B537243574/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0071 大阪府大阪市中央区道頓堀1-7-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番25号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536755192/', R + 'B535749498/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('おいしいラーメン', '', '"Delicious ramen" with napa cabbage and pork', '¥850', 'Ramen', 'no', 'no', 'October 2026.', 'oishii_ramen'),
      it('小チャーシュー煮玉子ラーメン', '', 'Small chashu and soft-boiled egg ramen', '¥1,270', 'Ramen', 'no', 'no', 'September 2026.', 'chashu_egg'),
      it('唐揚げ', 'karaage', 'Kara-age', '¥430', 'Sides', 'no', 'no', 'September 2026.', 'karaage'),
    ] }, {
    cuisine: '道頓堀発のあっさりラーメンのチェーン・秘伝のスープにシャキシャキの白菜と薄切り豚・おいしいラーメン850円・小チャーシュー煮玉子ラーメン1,270円・季節の酸辣湯麺・22時間営業',
    neighborhood: '道頓堀一丁目(1-7-25)、金龍ラーメンの隣。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺。スープは秘伝で、唐揚げや餃子もあります。',
    vegan_detail: 'ヴィーガンではありません。ラーメンには豚肉と煮玉子。秘伝のスープの中身は書かれていません。',
    notes: '[ラーメン・地元の通りで神座の白菜ラーメン] 全国チェーンになった今も古くからのファンが地元の宝と呼ぶ神座の道頓堀店で、71席、朝10時から翌朝8時まで営業。看板の「おいしいラーメン」(2026年10月は850円)は、あっさりほんのり甘い秘伝のスープに、シャキシャキの白菜と薄切り豚肉がたっぷり。一番人気は小チャーシューと煮玉子をのせたもの(1,270円)で、唐揚げ(430円)、餃子、鎮江香酢とパクチーの酸辣湯麺のような季節の一杯も。注文は卓上のタブレットで。食べやすく野菜たっぷりですが、塩辛すぎたという声もあり、麺はやわらかくうどんのようです。',
  });
}

// ================================================================ 金久右衛門 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27062271/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:00', '08:00']); const ful = day(['00:00', '23:59']);
  put({
    id: 'osaka_kinkuemon_dotonbori', name: '金久右衛門 道頓堀店 (Kinkuemon Dotonbori)', category: 'OMNI',
    lat: 34.668564, lng: 135.503219, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in soy-sauce (shoyu) broths.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken stock with seafood, chashu.',
    hours_raw: 'Mon–Thu 11:00–08:00 next morning; Fri, Sat, Sun and holiday eves open 24 hours; closes early if sold out; open year-round (Tabelog). Ticket machine outside.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: ful, 5: ful, 6: ful }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-chōme (1-4-17), a little off the main strip next to Kinryū — 5 min from Namba Stn',
    cuisine: 'Osaka Black shoyu ramen · jet-black soy broth with chicken stock and seafood umami · King Shoyu and clear Kinjou Shoyu · thin or thick noodles · extra noodles · ¥1,000–1,200 · open through the night',
    website: 'http://king-emon-dotonbori.com/', gmaps: gm('金久右衛門 道頓堀店'), menu_url: null,
    notes: "[Ramen · Osaka Black, the jet-black shoyu, through the night] Since 2011 the Dotonbori branch of Kinkuemon, a shop famous for sharp shoyu ramen, set just off the main strip by the Kinryū queue. It has 41 seats over two floors and is open through the night (24 hours Friday to Sunday). The signature Osaka Black is a glossy jet-black soy broth with chicken stock and a seafood edge, buttery chicken-fat aroma and a faintly bitter soy finish. Choose thin noodles (most recommend them) or thick, topped with chashu, menma, green onion and a soft egg; extra noodles are extra. Also on the menu: Red Shoyu, King Shoyu, and Osaka Kinjou Shoyu, a clear chicken-and-light-soy broth that one 34-visit regular likes at 8 am. Buy a ticket at the machine outside; garlic on request. ¥1,000–1,200 a bowl; a few found it pricey for tourists or the service curt.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 December 2011 (Tabelog)', background: 'Branch of the Kinkuemon brand (king-emon-dotonbori.com).', philosophy: null, specialty: 'Osaka Black shoyu.',
      anecdotes: [
        { text: '"The aroma of the rich black soy sauce combined with seafood in the jet-black broth was absolutely delightful! The straight, chewy thin noodles soaked up the black soy sauce soup." — October 2026, Osaka Black ¥1,200 at 5 am.', source: R + 'B538071519/' },
        { text: '"The clear broth, made with chicken stock and light soy sauce, is perfect for a refreshing morning ramen." — September 2026, 34th visit, Kinjō Shoyu.', source: R + 'B427234572/' },
      ],
      japanese_sources_summary: '食べログ: 金久右衛門 道頓堀店、大阪市中央区道頓堀1-4-17、41席(1階カウンター23、地下カウンター6・テーブル12)、月〜木11:00〜翌8:00、金土日祝前日24時間営業、売り切れ次第終了、年中無休、2011年12月29日開店、公式サイト king-emon-dotonbori.com。2026年の口コミ(英語版): 34回目の朝ラーメンで「Osaka Kinjou Shoyu」(鶏ガラと薄口醤油の澄んだスープ、細麺、にんにく、ねぎ、メンマ、半熟の味玉)、「Osaka Black」の大盛りと豚丼は2,000円超で観光客向けに高いとの声、店前の券売機、「Osaka Black」味玉なし1,000円、艶のある黒、ほろ苦い醤油と鶏油のバターのような香り、細麺がおすすめ、替え玉あり、基本1,200円、スタッフの対応がそっけないとの声、「Red Shoyu」、「King Shoyu」、豚骨の香りを感じたとの声、魚介の旨みのある「Osaka Black」、金龍の隣の行列のない店、朝5時に「Osaka Black」1,200円・細麺かため。',
      confidence: 'medium', sources: [TB, R + 'B538071519/', R + 'B427234572/', R + 'B535979271/', R + 'B537592927/', R + 'B536118649/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Choice of thin (most recommended; straight and chewy) or thick noodles; firmness can be ordered (2026).' },
      regional_style: ['Osaka black shoyu'], sub_genre: ['ramen'],
      signature_bowl: 'Osaka Black — ¥1,000 without egg, ¥1,200 standard (September–October 2026).',
      chashu: 'Chashu with menma, green onion and a seasoned soft egg.',
      notable_toppings: ['seasoned egg', 'menma', 'green onion', 'garlic on request'],
      gf: { status: 'no', note: 'Wheat noodles; soy-sauce tare.' },
      vegan: { status: 'no', note: 'Chicken stock and seafood.' },
      pantheon: 'Minami\'s night-owl shoyu: a glossy jet-black soy broth with chicken stock and a seafood edge, buttery chicken fat, faintly bitter soy, and thin straight noodles that drink it all in.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537592927/', '"Rich flavor with seafood umami… the broth has a delightful balance of soy sauce and seafood flavors, providing a refreshing taste."'],
        oiliness: [R + 'B535979271/', '"The chicken fat has a rich buttery aroma."'],
        clarity: [R + 'B535979271/', '"A nice glossy black appearance" — a dark shoyu chintan; the Kinjou Shoyu is "the clear broth" (' + R + 'B427234572/).'],
        tare_strength: [R + 'B535979271/', '"The broth has a slightly bitter soy sauce flavor"; "a refreshing depth of soy sauce flavor and a hint of saltiness that was quite addictive" (' + R + 'B536118649/).'],
        noodle_firmness: [R + 'B538071519/', '"Thin noodles and a firm texture… The straight, chewy thin noodles."'],
        aroma_punch: [R + 'B538071519/', '"The aroma of the rich black soy sauce combined with seafood in the jet-black broth was absolutely delightful!"'],
      },
      confidence: 'medium', sources: [R + 'B538071519/', R + 'B535979271/', R + 'B537592927/', R + 'B536118649/', R + 'B427234572/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0071 大阪府大阪市中央区道頓堀1-4-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目4番17号 (go) 4m; OSM 金久右衛門 node/2326964146 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535979271/', R + 'B538071519/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('Osaka Black', '', 'Osaka Black shoyu ramen', '¥1,200', 'Ramen', 'no', 'no', 'October 2026; ¥1,000 without egg.', 'osaka_black'),
      it('Osaka Kinjou Shoyu', '', 'Osaka Kinjou Shoyu (clear chicken and light-soy broth)', '', 'Ramen', 'no', 'no', 'September 2026.', 'kin_shoyu'),
      it('King Shoyu', '', 'King Shoyu', '', 'Ramen', 'no', 'no', 'September 2026.', 'king_shoyu'),
      it('Red Shoyu', '', 'Red Shoyu', '', 'Ramen', 'no', 'no', 'September 2026.', 'aka_shoyu'),
    ] }, {
    cuisine: '「Osaka Black」の醤油ラーメン・鶏ガラと魚介の旨みの真っ黒な醤油スープ・「King Shoyu」と澄んだ「Osaka Kinjou Shoyu」・細麺か太麺・替え玉・1,000〜1,200円・夜通し営業',
    neighborhood: '道頓堀一丁目(1-4-17)、大通りから少し入った金龍の隣。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。醤油スープに小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと魚介、チャーシュー。',
    notes: '[ラーメン・夜通しの真っ黒な醤油「Osaka Black」] 切れのある醤油ラーメンで知られる金久右衛門の道頓堀店で、2011年から金龍の行列のすぐ横、大通りから少し入った場所に。二フロア41席で夜通し営業(金〜日は24時間)。看板の「Osaka Black」は、艶のある真っ黒な醤油スープに鶏ガラと魚介の旨み、バターのような鶏油の香りとほろ苦い醤油の後味。麺は細麺(おすすめが多い)か太麺で、チャーシュー、メンマ、ねぎ、味玉。替え玉は別料金。「Red Shoyu」、「King Shoyu」、34回通う常連が朝8時に好む、鶏ガラと薄口醤油の澄んだ「Osaka Kinjou Shoyu」も。店前の券売機で食券を買い、にんにくは頼めばもらえます。1杯1,000〜1,200円で、観光客向けに高い、接客がそっけないという声も。',
  });
}

// ================================================================ らぁ麺 はやし田 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27128015/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:00']);
  put({
    id: 'osaka_hayashida_dotonbori', name: 'らぁ麺 はやし田 道頓堀店 (Ramen Hayashida Dotonbori)', category: 'OMNI',
    lat: 34.668936, lng: 135.501168, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat-flour noodles in shoyu, paitan and tsukemen bowls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck and Daisen-chicken broth, chashu, egg.',
    hours_raw: 'Daily 11:00–23:00 (Tabelog; may change). Ticket machine at the entrance.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori Kankō Bldg B1F, right under the Glico sign by Ebisubashi — 3 min from Namba Stn',
    cuisine: 'Tokyo Shinjuku shoyu ramen brand under the Glico sign · duck and Daisen-chicken clear shoyu (¥900; special ¥1,200) · chicken paitan · tsukemen · seasonal yuzu cold ramen · TKG and oyakodon sides',
    website: 'https://www.ramenings.com/', gmaps: gm('らぁ麺 はやし田 道頓堀店'), menu_url: null,
    notes: "[Ramen · Tokyo's Hayashida right under the Glico sign] The first Kansai branch, opened in 2022, of Ramen Hayashida, a Shinjuku shop famous for queues and run by INGS Co. It's a 16-seat counter one floor below the Glico running man, southwest of Ebisubashi. The signature is a clear shoyu broth of duck and Daisen-dori chicken (¥900; the special with a \"Maximum Koitama\" egg ¥1,200) on firm, thin whole-wheat noodles, with pork-shoulder and chicken-breast chashu. There's also a creamy chicken paitan, a refined tsukemen (special ¥1,250), mazesoba with truffle-sauce egg, and summer yuzu cold ramen (¥950) with yuzu jelly. Add a TKG or oyakodon (¥350–400). Buy tickets at the entrance machine. Light and quick, with friendly staff: a handy fast lunch when Minami's big names are queuing.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 February 2022 (Tabelog); first Kansai branch of the Shinjuku shop (2026 reviews)', background: 'Brand of INGS Co., Ltd. (Shinjuku); franchise (July 2026 review).', philosophy: null, specialty: 'Duck and chicken shoyu.',
      anecdotes: [
        { text: '"\'ralamen hayashida\' is a brand of INGS Co., Ltd., headquartered in Shinjuku, Tokyo, and this is their first franchise location in the Kansai region… right under the towering 20-meter \'Dotonbori Glico Sign\'." — July 2026, shoyu ramen ¥900.', source: R + 'B531795242/' },
        { text: '"Special Shoyu Ramen (JPY 1,200)… firm, thin noodles made with whole wheat flour, topped with a rich flavored egg made from the premium \'Maximum Koitama\' brand, and tender chicken chashu." — October 2026.', source: R + 'B533810180/' },
      ],
      japanese_sources_summary: '食べログ: らぁ麺 はやし田 道頓堀店、大阪市中央区道頓堀1-10-1 道頓堀観光ビルB1F、16席(カウンター)、毎日11:00〜23:00、予約不可、2022年2月11日開店、公式サイト ramenings.com。2026年の口コミ: グリコ看板の下、夏限定の柚子香る冷やしらぁ麺950円(柚子ジュレ)、釜玉は終了、鴨と「Daisendori」の鶏のスープ、特製つけ麺1,250円・大盛り150円・赤玉の親子丼350円、澄んだスープ、株式会社INGS(新宿)のブランドで関西初のフランチャイズ、醤油らぁ麺900円(豚肩と鶏むねのチャーシュー、メンマ、ねぎ)、特製醤油1,200円(全粒粉の硬めの細麺、「Maximum Koitama」の味玉、鶏チャーシュー)、TKG、鶏白湯(ポタージュのよう)、券売機、冷やしらぁ麺と親子丼400円、レアチャーシュー、親切な店主、あっさり、昼の行列を避けて、まぜそばとトリュフソースの卵。',
      confidence: 'medium', sources: [TB, R + 'B531795242/', R + 'B533810180/', R + 'B514603698/', R + 'B534474065/', R + 'B536754775/'] },
    ramen: {
      broth_base: ['duck', 'chicken'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Firm, thin noodles made with whole-wheat flour (October 2026); the cold ramen uses flat medium-thick noodles.' },
      regional_style: ['Tokyo'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: '醤油らぁ麺 (shoyu ramen) — ¥900 (July 2026); 特製醤油らぁ麺 ¥1,200 (October 2026).',
      chashu: 'Pork shoulder and chicken breast; rare chashu on the cold ramen.',
      notable_toppings: ['Maximum Koitama seasoned egg', 'menma', 'green onion', 'mitsuba (cold ramen)', 'yuzu jelly (cold ramen)'],
      gf: { status: 'no', note: 'Whole-wheat noodles.' },
      vegan: { status: 'no', note: 'Duck and chicken broth.' },
      pantheon: 'A Shinjuku queue-shop under the Glico running man: clear duck and Daisen-chicken shoyu on firm thin whole-wheat noodles, served in minutes when the famous names next door are lined up.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536754775/', '"The ramen was light and easy to enjoy."'],
        oiliness: [R + 'B536754775/', '"Light and easy to enjoy" — no source mentions an oil layer.'],
        clarity: [R + 'B514603698/', '"The clear broth is incredibly appetizing."'],
        tare_strength: [R + 'B534474065/', '"The broth was rich with the flavors of duck and Daisendori chicken, making it delicious enough to drink on its own."'],
        noodle_firmness: [R + 'B533810180/', '"Firm, thin noodles made with whole wheat flour."'],
        aroma_punch: [R + 'B514603698/', '"I love the soup made with duck and Daisendori chicken"; the cold version adds yuzu (' + R + 'B534474065/).'],
      },
      confidence: 'medium', sources: [R + 'B536754775/', R + 'B514603698/', R + 'B534474065/', R + 'B533810180/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0071 大阪府大阪市中央区道頓堀1-10-1 道頓堀観光ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目10番1号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531795242/', R + 'B533810180/', R + 'B514603698/', R + 'B534474065/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('醤油らぁ麺', '', 'Shoyu ramen (duck and Daisendori chicken)', '¥900', 'Ramen', 'no', 'no', 'July 2026.', 'shoyu'),
      it('特製醤油らぁ麺', '', 'Special shoyu ramen', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_shoyu'),
      it('特製つけ麺', '', 'Special tsukemen', '¥1,250', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsukemen'),
      it('柚子香る冷やしらぁ麺', '', 'Yuzu cold ramen (summer)', '¥950', 'Seasonal', 'no', 'no', 'Summer 2026.', 'yuzu_cold'),
      it('親子丼', 'oyakodon', 'Oyakodon (red-yolk egg)', '¥350', 'Sides', 'ask', 'no', 'September 2026; ¥400 in another review.', 'oyakodon'),
    ] }, {
    cuisine: 'グリコ看板の下の新宿発の醤油ラーメン・鴨と「Daisendori」の鶏の澄んだ醤油(900円、特製1,200円)・鶏白湯・つけ麺・季節の柚子の冷やしらぁ麺・TKGや親子丼',
    neighborhood: '道頓堀観光ビルB1F、戎橋そばのグリコ看板の真下。なんば駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。醤油、白湯、つけ麺に全粒粉入りの小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。鴨と鶏のスープ、チャーシュー、卵。',
    notes: '[ラーメン・グリコ看板の真下の新宿の行列店はやし田] 新宿の行列店「らぁ麺 はやし田」(株式会社INGS)の関西初の店で2022年開店。戎橋の南西、グリコの走る男の看板の一つ下のフロアにある16席のカウンター。看板は鴨と「Daisendori」の鶏の澄んだ醤油スープ(900円、「Maximum Koitama」の味玉付きの特製は1,200円)で、全粒粉の硬めの細麺に豚肩と鶏むねのチャーシュー。ポタージュのような鶏白湯、上品なつけ麺(特製1,250円)、トリュフソースの卵のまぜそば、柚子ジュレの夏の冷やしらぁ麺(950円)も。TKGや親子丼(350〜400円)を添えて。入口の券売機で食券を。あっさりで提供が早く、スタッフも親切。ミナミの有名店が行列のときの手早い昼に便利です。',
  });
}

save();
