// Osaka sweep (2-mile circle around Dotonbori), batch 13 — ramen phase, nearest first (all OMNI).
//   + 鳳凰楼 (late-night Chinese restaurant; Tabelog tags ramen — filed 'other', no ramen block)
//   + ゑび真 (lobster "Omar ebi" ramen and tsukemen in Amemura; newest review Sept 2025 → probable)
//   + 天地人 千日前店 (Fukuchan-group tonkotsu with black garlic oil, 11:30–4:00)
//   + かすうどん うのたけ (kasu udon counter in Mitsudera Kaikan — filed udon_soba, no ramen block)
// Skipped (too thin): 27154212 (0 reviews), 27060051 (3, a bar), 27147959 (1), 27143417 (2).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 13);

skip('27154212', 'Tabelog listing with 0 reviews; nothing to describe.');
skip('27060051', 'A bar-café with 3 reviews; too thin to describe.');
skip('27147959', 'One review only; too thin to describe.');
skip('27143417', 'Two reviews only; too thin to describe.');
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ 鳳凰楼
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27068605/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '05:00']), su = day(['17:00', '03:00']);
  put({
    id: 'osaka_houou_rou_sennichimae', name: '鳳凰楼 (Houou Rou)', category: 'OMNI',
    lat: 34.667746, lng: 135.503976, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: Chinese stir-fries in soy-based sauces, gyoza, noodles. Ordering is hard in Japanese or English.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-and-seafood Chinese menu (spare ribs, liver, mapo tofu with meat).',
    hours_raw: 'Mon–Sat 17:00–5:00 (L.O. 4:30); Sun and holidays 17:00–3:00 (L.O. 2:30); closed the second and third Mondays (Tabelog). Reservations by phone. QR payments only, no cards; smoking allowed (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: wk, 6: su }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-8-6, Shins Sennichimae Bldg 1F, a back alley off the Aioibashi-suji shopping street',
    cuisine: 'Authentic, Chinese-run local Chinese · spicy pork spare ribs · garlicky stir-fried water spinach · big shrimp in chili sauce · gyoza · cheap set meals (mapo tofu, chive and liver) · seafood ramen ¥900, gomoku soba ¥800 · open to 5 am · smoking allowed',
    website: null, gmaps: gm('鳳凰楼 千日前'), menu_url: null,
    notes: "[Chinese · an all-night, Chinese-run kitchen off Sennichimae] A slightly run-down, 28-seat Chinese restaurant in a back alley off Aioibashi-suji, open from 5 pm to 5 am, where Chinese is spoken all round and the menu is hard to decipher. Regulars come back for the spicy pork spare ribs, garlicky stir-fried water spinach and big shrimp in chili sauce, with beer. Cheap evening set meals (mapo tofu, chive and liver) come with cabbage and pickled mustard greens. The salt-seasoned seafood ramen (¥900, December 2025) is loaded with cabbage, mushrooms, squid and pork. Spice is adjusted to order. Lots of takeout goes out to locals. Smoking allowed. Pay by QR, as cards aren't taken.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sennichimae 1-chōme', background: 'A Chinese-run local Chinese restaurant; Chinese-language menu and staff (2024–2026 reviews).', philosophy: null, specialty: 'Spare ribs; Chinese set meals.',
      anecdotes: [
        { text: '"Yes, the spare ribs are delicious as always. I wonder how they season them?… Reliable local Chinese food. However, communication in Japanese can be quite challenging." — April 2026.', source: R + 'B525749734/' },
        { text: '"The Seafood Ramen had a salt-based seasoning and was packed with ingredients like napa cabbage, greens, shimeji mushrooms, bamboo shoots, carrots… squid, imitation crab, and plenty of pork." — December 2025, ¥900.', source: R + 'B519131178/' },
      ],
      japanese_sources_summary: '食べログ: 鳳凰楼、大阪市中央区千日前1-8-6 シンズ千日前ビル1F、28席、月〜土17:00〜翌5:00(L.O.4:30)、日祝17:00〜翌3:00(L.O.2:30)、第2・第3月曜定休、予約は電話、カード・電子マネー不可、QR決済可、喫煙可、ジャンルは中華・餃子・刀削麺。口コミ(2023年12月〜2026年7月): 町中華、餃子、食べ放題3,500円(2023年12月)、中国人客が多い、ニラレバ定食、中国語のメニュー、出前が多い、辛さを調整、相合橋筋商店街の裏路地、海鮮ラーメン900円(塩)、五目汁そば800円、唐揚げ、スペアリブ、空芯菜炒め、大海老のチリソース、日本語が通じにくい、麻婆豆腐定食(キャベツとザーサイ)、ラー油と香酢。',
      confidence: 'medium', sources: [TB, R + 'B525749734/', R + 'B519131178/', R + 'B531769558/', R + 'B498806903/', R + 'B484606666/'] },
    cultural_comfort: { level: 'japanese', note: 'Chinese-speaking staff and a menu hard to decipher; Japanese communication is difficult (April 2026).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-8-6 シンズ千日前ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated December 2025–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目8番6号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519131178/', R + 'B525749734/'],
    price_note: 'Prices from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Seafood ramen (salt)', '¥900', 'Noodles', 'no', 'no', 'December 2025.', 'seafood_ramen'),
      it('五目汁そば', '', 'Gomoku soup noodles', '¥800', 'Noodles', 'no', 'no', 'December 2025.', 'gomoku'),
      it('', '', 'Pork spare ribs', '', 'Mains', 'no', 'no', 'April 2026.', 'spare_ribs'),
      it('空芯菜炒め', '', 'Stir-fried water spinach', '', 'Vegetables', 'ask', 'ask', 'April 2026.', 'kuushinsai'),
      it('麻婆豆腐定食', '', 'Mapo tofu set meal', '', 'Set meals', 'no', 'no', 'July 2026.', 'mapo_teishoku'),
      it('ニラレバ定食', '', 'Chive and liver stir-fry set meal', '', 'Set meals', 'no', 'no', 'May 2024.', 'nirareba'),
    ] }, {
    cuisine: '中国人が営む本格的な町中華・辛いスペアリブ・にんにくの効いた空芯菜炒め・大海老のチリソース・餃子・安い定食(麻婆豆腐、ニラレバ)・海鮮ラーメン900円、五目汁そば800円・朝5時まで・喫煙可',
    neighborhood: '千日前1-8-6 シンズ千日前ビル1F、相合橋筋商店街の裏路地',
    gf_detail: '実際にはグルテンフリーではありません。醤油ベースのたれの炒め物、餃子、麺。日本語や英語での注文も難しい店です。',
    vegan_detail: 'ヴィーガンではありません。肉や魚介の中華(スペアリブ、レバー、肉入りの麻婆豆腐)。',
    notes: '[中華・千日前裏の朝まで開いている中国人の店] 相合橋筋の裏路地にある、少し古びた28席の中華料理店で、夕方5時から朝5時まで。店内は中国語が飛び交い、メニューも読み解くのがひと苦労。常連のお目当ては辛いスペアリブ、にんにくの効いた空芯菜炒め、大海老のチリソースで、ビールと一緒に。夜の安い定食(麻婆豆腐、ニラレバ)にはキャベツとザーサイが付きます。塩味の海鮮ラーメン(900円、2025年12月)は白菜、きのこ、イカ、豚肉がたっぷり。辛さは注文時に調整してくれます。地元向けの出前も多い店。喫煙可。カードは使えずQR決済で。',
  });
}

// ================================================================ ゑび真
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136054/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ebi_shin_amemura', name: 'ゑび真 (Ebi Shin)', category: 'OMNI',
    lat: 34.670294, lng: 135.499128, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; tuna cutlet; crab miso soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: lobster broth, tuna dishes.',
    hours_raw: 'Mon 11:30–14:30; Tue–Thu 12:00–14:40 and 18:00–22:50; Fri–Sat 12:30–14:40 and 18:30–23:45; Sun 12:30–14:40 and 18:30–23:30 (Tabelog). Pay after the meal; QR payments, no cards (Tabelog).',
    hours: { 0: day(['11:30', '14:30']), 1: day(['12:00', '14:40'], ['18:00', '22:50']), 2: day(['12:00', '14:40'], ['18:00', '22:50']), 3: day(['12:00', '14:40'], ['18:00', '22:50']), 4: day(['12:30', '14:40'], ['18:30', '23:45']), 5: day(['12:30', '14:40'], ['18:30', '23:45']), 6: day(['12:30', '14:40'], ['18:30', '23:30']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-8-33, in Amerikamura',
    cuisine: 'Lobster ("Omar ebi") ramen and tsukemen · creamy shrimp broth · spice level 0–4 · thick curly noodles · burdock chips · whole-lobster topping ¥4,200 · bluefin tuna rice bowl with crab miso soup ¥1,550 · tuna cutlet set · JP/EN menu',
    website: null, gmaps: gm('ゑび真 西心斎橋'), menu_url: null,
    notes: "[Ramen · lobster ramen in Amerikamura] A lobster-broth ramen and tsukemen shop in Amemura, since 2023, with a Japanese and English menu and plenty of overseas diners. The broth is rich and creamy with concentrated lobster, which one diner likened to a tonkotsu, over thick, chewy, curly noodles with plenty of vegetables and burdock chips. Pick a spice level from 0 to 4. Basic bowls started around ¥1,000–1,100 in 2025, and the showpiece adds a whole lobster for ¥4,200. The other half of the menu is bluefin tuna: a rice bowl with crab miso soup (¥1,550) or a tuna cutlet set. You pay after eating. Some found the ramen broth less rich than the tsukemen dip. Recent reviews date from 2025, so check it is still open.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 April 2023 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Lobster ramen and tsukemen; bluefin tuna bowls.',
      anecdotes: [
        { text: '"The flavor was rich with lobster broth, reminiscent of a creamy tonkotsu ramen! It was packed with vegetables, and the topping of burdock chips paired perfectly with the lobster broth." — March 2025, spice level 0.5.', source: R + 'B503580514/' },
        { text: '"I ordered the \'Omaru Lobster Topping Tsukemen for JPY 4200\'… The dipping sauce had a nice shrimp flavor and was quite tasty, while the noodles were thick and chewy." — September 2025.', source: R + 'B513698271/' },
      ],
      japanese_sources_summary: '食べログ: ゑび真、大阪市中央区西心斎橋2-8-33、月11:30〜14:30、火〜木12:00〜14:40・18:00〜22:50、金土12:30〜14:40・18:30〜23:45、日12:30〜14:40・18:30〜23:30、カード・電子マネー不可、QR決済可、2023年4月12日開店。口コミ(2024年12月〜2025年10月): 濃厚オマール海老ラーメン、日英のメニュー、辛さ0.5、豚骨のようにクリーミー、野菜たっぷり、ごぼうチップ、オマール海老のトッピング4,200円、通常は1,100円から、まぐろ定食(かに味噌汁付き)1,550円、ちぢれ麺、1,600円は高め、つけ麺とまぐろ丼、券売機なしで後払い、ラーメンのスープはコクが足りないとの声、オマール海老つけ麺1,000円、辛さ0〜4、まぐろカツ定食、太いちぢれ麺。',
      confidence: 'medium', sources: [TB, R + 'B503580514/', R + 'B513698271/', R + 'B505056135/', R + 'B517450476/', R + 'B506050579/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: false, notes: 'Thick, curly, chewy noodles (2025).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'オマール海老ラーメン (lobster ramen) from ¥1,100; whole-lobster topping ¥4,200 (April 2025).',
      chashu: null,
      notable_toppings: ['whole lobster (option)', 'burdock chips', 'vegetables'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Lobster broth.' },
      pantheon: 'Amerikamura\'s lobster bowl: a creamy, concentrated Omar-ebi broth on thick curly noodles, with a whole lobster for the splurge.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B503580514/', '"Reminiscent of a creamy tonkotsu ramen"; some found the ramen broth "lacking in richness" (' + R + 'B513698271/).'],
        oiliness: [R + 'B517450476/', '"Rich yet comforting in flavor" — oil not described; mid-scale (inferred).'],
        clarity: [R + 'B503580514/', 'Creamy lobster broth — opaque.'],
        tare_strength: [R + 'B517450476/', '"The broth is packed with umami" — mid-scale (inferred).'],
        noodle_firmness: [R + 'B517450476/', '"They are thick, curly, and have a wonderful chewy texture."'],
        aroma_punch: [R + 'B517450476/', '"A fragrant and rich Omar shrimp broth"; spice level 0–4.'],
      },
      confidence: 'medium', sources: [R + 'B503580514/', R + 'B517450476/', R + 'B513698271/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'Japanese and English menu (March 2025).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-8-33',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current, but the newest reviews describe 2025 visits (up to September 2025).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目8番33号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505056135/', R + 'B513698271/', R + 'B517450476/'],
    price_note: 'Prices from 2025 reviews; may have changed.', last_checked: TODAY, items: [
      it('オマール海老ラーメン', '', 'Lobster ramen', '¥1,100', 'Ramen', 'no', 'no', 'From ¥1,100, April 2025.', 'lobster_ramen'),
      it('オマール海老つけ麺', '', 'Lobster tsukemen', '¥1,000', 'Tsukemen', 'no', 'no', 'August 2025.', 'lobster_tsukemen'),
      it('', '', 'Whole-lobster topping ramen or tsukemen', '¥4,200', 'Ramen', 'no', 'no', '2025.', 'whole_lobster'),
      it('', '', 'Bluefin tuna rice bowl with crab miso soup', '¥1,550', 'Rice', 'no', 'no', 'April 2025.', 'maguro_don'),
      it('', '', 'Tuna cutlet set meal', '', 'Set meals', 'no', 'no', 'August 2025.', 'maguro_katsu'),
    ] }, {
    cuisine: 'オマール海老のラーメンとつけ麺・クリーミーな海老のスープ・辛さ0〜4・太いちぢれ麺・ごぼうチップ・オマール海老丸ごとのトッピング4,200円・かに味噌汁付きの本まぐろ丼1,550円・まぐろカツ定食・日英のメニュー',
    neighborhood: '西心斎橋2-8-33、アメリカ村',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、まぐろカツ、かに味噌汁。',
    vegan_detail: 'ヴィーガンではありません。オマール海老のスープ、まぐろ料理。',
    notes: '[ラーメン・アメ村のオマール海老ラーメン] 2023年からアメ村にあるオマール海老のラーメンとつけ麺の店で、メニューは日英、海外からの客も多い。スープは海老を凝縮した濃厚でクリーミーな味で(豚骨のようという客も)、もちもちの太いちぢれ麺に野菜たっぷり、ごぼうチップ。辛さは0〜4から。2025年は1,000〜1,100円ほどからで、看板はオマール海老を丸ごとのせた4,200円の一杯。メニューの半分は本まぐろで、かに味噌汁付きの丼(1,550円)やまぐろカツ定食。支払いは食後。ラーメンのスープはつけ麺よりコクが弱いという声も。最近の口コミは2025年のものなので、営業を確認してから。',
  });
}

// ================================================================ 天地人 千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27093637/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tenchijin_sennichimae', name: '天地人 千日前店 (Tenchijin Sennichimae)', category: 'OMNI',
    lat: 34.668192, lng: 135.504333, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu, pork rice bowl.',
    hours_raw: 'Daily 11:30–4:00 (Tabelog); a March 2026 reviewer found it opening at 11:00. Ticket machine in front, cashless accepted (QR per Tabelog).',
    hours: ALL(day(['11:30', '04:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-6-14, on the Aioibashi-suji shopping street near WINS Dotonbori',
    cuisine: 'Tonkotsu ramen ("moto-aji") · ajitama ramen with black garlic oil · light meat soba ¥880 with grated daikon · abura-soba with three chashu, nori, chili oil and vinegar · spicy miso · pork rice bowl · 10-seat counter, open to 4 am',
    website: 'http://www.fukuchan.co.jp/tenchijin/index.html', gmaps: gm('天地人 千日前店'), menu_url: null,
    notes: "[Ramen · late-night tonkotsu on Aioibashi-suji] A 10-seat counter on the Aioibashi-suji shopping street, part of the Fukuchan group, open from lunch to 4 am and often run by a single cook. The standard is a straightforward tonkotsu (\"moto-aji\"). The ajitama ramen adds a slick of dark black garlic oil that gives the broth depth. For something lighter, the meat soba (¥880, July 2026) has a clear, refreshing broth with thin straight noodles, pork bits, onion and grated daikon. The abura-soba comes with three big slices of chashu, nori, and chili oil and vinegar at hand. There's also a spicy miso and a well-liked pork rice bowl. Buy a ticket out front.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 August 2016 (Tabelog)', background: 'Tenchijin, a Fukuchan-group ramen brand (fukuchan.co.jp).', philosophy: null, specialty: 'Tonkotsu ramen with black garlic oil.',
      anecdotes: [
        { text: '"The white tonkotsu broth was topped with dark black garlic oil, which really whetted my appetite… The black garlic oil was doing wonders, adding depth to the rich and somewhat monotonous tonkotsu flavor." — December 2025, ajitama ramen.', source: R + 'B518749135/' },
        { text: '"I ordered the Meat Soba for JPY 880 (tax included)… The broth was light and refreshing, paired with thin straight noodles, and there were bits of pork scattered throughout." — July 2026.', source: R + 'B532074584/' },
      ],
      japanese_sources_summary: '食べログ: 天地人 千日前店、大阪市中央区千日前1-6-14、カウンター10席、毎日11:30〜翌4:00、予約不可、カード・電子マネー不可、QR決済可、禁煙、2016年8月6日開店、公式 fukuchan.co.jp/tenchijin。2025〜2026年の口コミ: 深夜のラーメン、1人で4杯を手早く、種類が多い、辛い味噌、重くない、白い豚骨に黒いマー油、味玉ラーメン、豚丼、油そば(大きなチャーシュー3枚、刻みねぎ、焼き海苔、ラー油と酢)、11:30開店とあるが11時に開いていた、二日酔いに優しいスープ、ゴールデンウィークはインバウンド客、元味は標準的な豚骨、肉そば880円(あっさり、細ストレート麺、豚肉、乾燥ねぎ、玉ねぎ、大根おろし)、店前の券売機でキャッシュレス可、外国人スタッフ。',
      confidence: 'medium', sources: [TB, R + 'B518749135/', R + 'B532074584/', R + 'B524593930/', R + 'B529372120/', R + 'B525493526/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: ['other'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles in the meat soba (July 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: '元味 (moto-aji) tonkotsu; 味玉ラーメン with black garlic oil (December 2025); 肉そば ¥880 (July 2026).',
      chashu: 'Large chashu slices (three on the abura-soba, December 2025).',
      notable_toppings: ['black garlic oil (mayu)', 'seasoned egg', 'grated daikon (meat soba)', 'nori'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu.' },
      pantheon: 'Aioibashi-suji\'s small-hours tonkotsu: a plain white broth made deep with black garlic oil, or a clear meat soba with grated daikon for the morning after.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B512162263/', '"It wasn\'t too rich, and I found it relatively light and easy to eat."'],
        oiliness: [R + 'B518749135/', 'Dark black garlic oil on top — mid-scale.'],
        clarity: [R + 'B518749135/', '"The white tonkotsu broth" — opaque; the meat soba is "light and refreshing" (' + R + 'B532074584/).'],
        tare_strength: [R + 'B529372120/', '"A very standard tonkotsu ramen" — mid-scale (inferred).'],
        noodle_firmness: [R + 'B532074584/', 'Thin straight noodles; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B518749135/', '"The black garlic oil was doing wonders, adding depth."'],
      },
      confidence: 'medium', sources: [R + 'B518749135/', R + 'B532074584/', R + 'B512162263/', R + 'B529372120/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine in front; counter only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2025–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番14号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532074584/', R + 'B518749135/'],
    price_note: 'One price from a July 2026 review.', last_checked: TODAY, items: [
      it('元味ラーメン', '', 'Moto-aji tonkotsu ramen', '', 'Ramen', 'no', 'no', 'May 2026.', 'motoaji'),
      it('味玉ラーメン', '', 'Ajitama ramen with black garlic oil', '', 'Ramen', 'no', 'no', 'December 2025.', 'ajitama'),
      it('肉そば', 'niku soba', 'Meat soba (light broth, grated daikon)', '¥880', 'Ramen', 'no', 'no', 'July 2026.', 'niku_soba'),
      it('油そば', 'abura soba', 'Abura-soba with three chashu', '', 'Noodles', 'no', 'no', 'December 2025.', 'abura_soba'),
      it('豚丼', 'butadon', 'Pork rice bowl', '', 'Rice', 'no', 'no', 'December 2025.', 'butadon'),
    ] }, {
    cuisine: '豚骨ラーメン(元味)・黒いマー油の味玉ラーメン・大根おろしのあっさり肉そば880円・チャーシュー3枚、海苔、ラー油と酢の油そば・辛味噌・豚丼・10席のカウンター、朝4時まで',
    neighborhood: '千日前1-6-14、WINS道頓堀近くの相合橋筋商店街',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、豚丼。',
    notes: '[ラーメン・相合橋筋の深夜の豚骨] 相合橋筋商店街にある10席のカウンターで、ふくちゃんグループの店。昼から朝4時まで、1人で切り盛りしていることも多い。基本はまっすぐな豚骨(「元味」)。味玉ラーメンには黒いマー油がかかり、スープに深みが出ます。軽めなら肉そば(880円、2026年7月)で、透き通ったさっぱりしたスープに細ストレート麺、豚肉、玉ねぎ、大根おろし。油そばには大きなチャーシューが3枚、海苔、手元にラー油と酢。辛味噌や評判の豚丼も。店前の券売機で食券を。',
  });
}

// ================================================================ かすうどん うのたけ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27032243/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '01:00']);
  put({
    id: 'osaka_kasu_udon_unotake', name: 'かすうどん うのたけ (Kasu Udon Unotake)', category: 'OMNI',
    lat: 34.670503, lng: 135.499209, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon in a dashi-and-soy broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: abura-kasu (fried beef offal) is the point of the dish; dashi broth.',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 18:00–1:00; closed Wednesdays; closes when sold out (Tabelog). Cards accepted (Tabelog). The shop plans to move by June 2027 because of building renovation (August 2026 review).',
    hours: { 0: d, 1: d, 2: [], 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-9-5, Nippo Mitsudera Kaikan 2F (the pink-lit building) — Amerikamura',
    cuisine: 'Osaka kasu udon: clear dashi with crispy abura-kasu and green onion · plum and tororo-kombu kasu udon · spicy seasoning to stir in · 8-seat counter · 80s–90s hard rock · 6 pm–1 am',
    website: null, gmaps: gm('かすうどん うのたけ'), menu_url: null,
    notes: "[Udon · late-night kasu udon in Amerikamura] An 8-seat counter up a graffiti-covered corridor in Mitsudera Kaikan, the pink-lit building that is one of Amemura's deep-drinking landmarks. It serves Osaka's kasu udon: a clear, refreshing dashi enriched by crispy, fragrant abura-kasu (fried beef offal) and green onion, with firm udon. A spicy seasoning deepens as it melts in. Try the plum and tororo-kombu version. A regular of more than ten years says prices have risen to around ¥1,000, but the taste hasn't changed. It's a classic finish to a night out. The owner plays 80s and 90s hard rock (Guns N' Roses, Van Halen), and young crowds fill it by 10 pm. Closed Wednesdays. It plans to move by June 2027.",
    chef_bio: { chef_name: null, roles: [], origin: 'Mitsudera Kaikan 2F, Amerikamura', background: 'A kasu-udon counter; no source names the owner.', philosophy: null, specialty: 'Kasu udon.',
      anecdotes: [
        { text: '"I\'ve been coming here for over 10 years. While the prices have increased from a few hundred yen to the thousand-yen range, the taste remains unchanged, with the rich umami of the kasu and a clear, refreshing broth." — June 2026.', source: R + 'B445343271/' },
        { text: '"I had the plum kasu udon topped with kombu kelp… Due to building renovations, they are planning to relocate by June 2027." — August 2026.', source: R + 'B534702410/' },
      ],
      japanese_sources_summary: '食べログ: かすうどん うのたけ、大阪市中央区西心斎橋2-9-5 日宝三ツ寺会館2F、8席、月火木金土日祝18:00〜翌1:00、水曜定休、売り切れ次第終了、カード可、禁煙。2026年の口コミ(6〜10月): アメ村の雑居ビルの老舗のかすうどん、10年以上通う、値段は数百円から千円台に、かすのうま味と澄んださっぱりしたスープ、飲んだ後に、麺の硬さがいい、カリカリの油かすとねぎ、梅ととろろ昆布のかすうどん、ビル改装のため2027年6月までに移転予定、三ツ寺会館のピンクの看板、落書きの廊下、カウンター8席は若い客で満席、80〜90年代のハードロック(ガンズ・アンド・ローゼズ、ヴァン・ヘイレン)、奥が辛い、値上げ。',
      confidence: 'medium', sources: [TB, R + 'B445343271/', R + 'B534702410/', R + 'B535164086/', R + 'B532799142/', R + 'B537143681/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter; queue outside when full.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-9-5 日宝三ツ寺会館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026. Plans to relocate by June 2027 (August 2026 review).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目9番5号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B445343271/', R + 'B534702410/'],
    price_note: 'No exact prices captured; "the thousand-yen range" (June 2026).', last_checked: TODAY, items: [
      it('かすうどん', 'kasu udon', 'Kasu udon (abura-kasu and green onion)', '', 'Udon', 'no', 'no', 'June–October 2026.', 'kasu_udon'),
      it('', '', 'Plum and tororo-kombu kasu udon', '', 'Udon', 'no', 'no', 'August 2026.', 'ume_tororo'),
    ] }, {
    cuisine: '大阪のかすうどん: 澄んだだしにカリカリの油かすとねぎ・梅ととろろ昆布のかすうどん・溶かしていく辛い薬味・8席のカウンター・80〜90年代のハードロック・夜6時〜深夜1時',
    neighborhood: '西心斎橋2-9-5 日宝三ツ寺会館2F(ピンクに光るビル)。アメリカ村',
    gf_detail: 'グルテンフリーではありません。だしと醤油のスープに小麦のうどん。',
    vegan_detail: 'ヴィーガンではありません。主役は油かす(牛の腸を揚げたもの)で、だしのスープ。',
    notes: '[うどん・アメ村の深夜のかすうどん] アメ村の夜の名所、ピンクに光る三ツ寺会館の落書きだらけの廊下の先にある8席のカウンター。大阪のかすうどんの店で、澄んださっぱりしただしに、カリカリで香ばしい油かす(牛の腸を揚げたもの)とねぎ、コシのあるうどん。辛い薬味が溶けるにつれて味が深まります。梅ととろろ昆布のかすうどんもおすすめ。10年以上通う常連によると、値段は千円台になったものの味は変わらないとのこと。飲んだ後の定番の締め。店主が80〜90年代のハードロック(ガンズ・アンド・ローゼズ、ヴァン・ヘイレン)を流し、夜10時には若い客で満席に。水曜定休。2027年6月までに移転予定。',
  });
}

save();
