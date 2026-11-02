// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 10.
//   + 麺処かいしん 六本木店 Mendokoro Kaishin (clam-and-seafood shio ramen by the crossing, open to 6:30–7 am)
//   + MEZZO (two-floor DJ bar and dining bar by the crossing, open to 5 am)
//   + 鮨割烹 六本木 亀甲 Kicko (sushi kaiseki by owner-chef 笠井 (Kasai); formerly an obanzai kaiseki, renewed 2023)
//   + 鮨 ししど Sushi Shishido (Edomae omakase until 5 am, opened August 2026; a karaoke bar late at night)
//   Skipped: 元祖油堂 六本木店 13303049 — Ganso Aburado chain; tokyo_ganso_aburado_miyamasuza and
//   osaka_ganso_aburado_crysta_nagahori already in data.
//   Chain check. Kaishin: one listing (a reviewer believes the shop was earlier named "Tsunagu"). MEZZO, Kicko, Shishido:
//   one listing each. None is in data/tokyo.json by name, Tabelog id or address. Sushi Shishido (3-8-2 WHARF) is 8 m from
//   Sushi Toki's offset pin (tokyo_sushi_toki_roppongi, 3-9-4) — different buildings. Tabelog URLs copied from each
//   listing.txt line 1. No placeholder hours: every time below is stated by a source.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13303049', '元祖油堂 六本木店: Ganso Aburado chain; tokyo_ganso_aburado_miyamasuza and osaka_ganso_aburado_crysta_nagahori already in data');

// ================================================================ 麺処かいしん 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13286685/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '06:30']); const F = day(['11:30', '07:00']); const S = day(['11:30', '04:30']);
  put({
    id: 'tokyo_mendokoro_kaishin_roppongi', name: '麺処かいしん 六本木店 (Mendokoro Kaishin Roppongi)', category: 'OMNI',
    lat: 35.663158, lng: 139.73297, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles ("I taste the flavor of wheat", October 2026); the menu also has a chicken shoyu ramen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam and seafood broth, pork and chicken chashu, egg.',
    hours_raw: 'Mon–Thu 11:30–06:30 (last order 06:00); Fri–Sat 11:30–07:00 (last order 06:30); Sun 11:30–04:30 (last order 04:00) (Tabelog). Card or QR payment means ordering on your phone at the counter and registering a card (October 2026). 19 seats: 11 at the counter and two tables for 4. Non-smoking. Cards and QR (PayPay, Alipay, WeChat Pay). Children welcome. Opened 28 June 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-11-7, 海上ビル 1F, right by Roppongi crossing — 30 seconds from Roppongi Stn exit 5 (Oedo line)',
    cuisine: 'Clam-and-seafood shio ramen (2026 reviews) · shio ramen with a slice of rare chashu ¥1,100 (September–October 2026); a fuller bowl with clam, chicken and yuzu-scented pork ¥1,300; the deluxe bowl with three chashu (rare pork shoulder, roast pork, chicken), seasoned egg and white truffle oil ¥2,200 (September 2026) · a large clam on top, ultra-thin straight noodles, onion; extra noodles with yuzu pepper · chicken shoyu ramen · chashu rice bowl ¥400 · white truffle oil topping',
    website: null, gmaps: gm('麺処かいしん 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Roppongi, clam shio ramen by the crossing until dawn] A 19-seat ramen shop right at Roppongi crossing that stays open from 11:30 am until 6:30 or 7 the next morning. The draw is a clear, gentle shio broth packed with the umami of clams and seafood, ultra-thin straight noodles, a big clam on top and a choice of chashu — from a ¥1,100 bowl to a ¥2,200 version with three kinds of chashu, egg and white truffle oil, an oil one diner found sharp enough to divide opinion. There is a chicken shoyu ramen too, which a returning diner found less special than the clam bowl. Reviewers in 2026 note friendly staff from overseas, slow service on a training night, and a mobile ordering step if you pay by card. A reviewer believes the shop was earlier called Tsunagu.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 28 June 2023 (Tabelog). An October 2026 reviewer believes the shop was earlier named "Tsunagu", with the same interior. Diners in September and October 2026 describe the staff as from overseas. No one is named in the sources read.',
      philosophy: null, specialty: 'Clam-and-seafood shio ramen.',
      anecdotes: [
        { text: '"Despite being a clear and refreshing salt soup, it had remarkable depth, and each sip left a luxurious aftertaste." — September 2026, the ¥2,200 deluxe bowl.', source: R + 'B536166661/' },
        { text: '"The white truffle oil had a strong acidity and made a bold statement, which might be a bit too intense for some, potentially dividing opinions." — October 2026.', source: R + 'B537123955/' },
        { text: '"I ordered the chicken-based shoyu ramen, which was delicious at the previous location… the \'Clam Shio\' had a rich flavor with a deep umami." — October 2026.', source: R + 'B537397478/' },
      ],
      japanese_sources_summary: '食べログ: 麺処かいしん 六本木店、港区六本木3-11-7 海上ビル1F、大江戸線六本木駅5番出口から30秒、六本木の交差点のすぐそば、月〜木11:30〜翌6:30 (L.O.6:00)、金土11:30〜翌7:00、日11:30〜翌4:30、19席 (カウンター11、4人テーブル2)、禁煙、カード・QR可、子ども可、2023年6月28日オープン。口コミ(2026年9月〜10月): 蛤と魚介の塩ラーメン、澄んだやさしいスープ、極細ストレート麺、大きな蛤、塩ラーメン1,100円、上1,300円、3種のチャーシューと味玉と白トリュフオイルの2,200円の一杯、チャーシュー丼400円、鶏の醤油ラーメンも、以前は Tsunagu という名前だったという声、海外出身のスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B536166661/', R + 'B536448524/', R + 'B536870604/', R + 'B536911230/', R + 'B536989929/', R + 'B537123955/', R + 'B537237919/', R + 'B537394909/', R + 'B537397478/', R + 'B537787817/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; card payment through a mobile order (October 2026).' },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: ['truffle'], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: null, notes: 'Ultra-thin straight noodles (October 2026); "slightly softer, but they have a nice chewiness" (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Clam-and-seafood shio ramen — ¥1,100 in October 2026; the deluxe bowl with three chashu, egg and white truffle oil ¥2,200 (September 2026).',
      chashu: 'Rare pork-shoulder chashu, roast pork with yuzu and chicken (September–October 2026).',
      notable_toppings: ['clam', 'seasoned egg', 'white truffle oil', 'onion', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam and seafood broth; pork and chicken chashu.' },
      pantheon: 'A clear clam-and-seafood shio broth with ultra-thin noodles and a whole clam, served by Roppongi crossing until dawn.',
      profile: { richness: 3, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 2, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536166661/', '"The rich umami flavor of clams and seafood broth… Despite being a clear and refreshing salt soup, it had remarkable depth" (September 2026); "The light broth is gentle yet packed with a rich flavor" (' + R + 'B537394909/).'],
        oiliness: [R + 'B537394909/', '"The light broth is gentle" and "this kind of clear soup" (October 2026); the only oil mentioned is the optional white truffle oil (' + R + 'B537123955/).'],
        clarity: [R + 'B537394909/', '"Thin noodles pair perfectly with this kind of clear soup" (October 2026); "a clear and refreshing salt soup" (' + R + 'B536166661/).'],
        tare_strength: [R + 'B537787817/', '"It has a rich saltiness and umami from the clams" (October 2026); another calls it "a perfectly balanced salty ramen" (' + R + 'B537123955/).'],
        noodle_firmness: [R + 'B537787817/', '"The noodles are slightly softer, but they have a nice chewiness" (October 2026).'],
        aroma_punch: [R + 'B537787817/', '"The aroma brings the sea to mind" (October 2026); the truffle oil "made a bold statement" (' + R + 'B537123955/).'],
      },
    },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-11-7 海上ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663158, 139.732970); GSI 東京都港区六本木三丁目11番 (lot) 7m; Sushi Sueyoshi (3-11-10) is 16 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537237919/', R + 'B537787817/', R + 'B536166661/', R + 'B536448524/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Clam shio ramen with rare chashu', '¥1,100', 'Ramen', 'no', 'no', 'September and October 2026 reviews.', 'shio_ramen'),
      it('', '', 'Clam shio ramen, fuller bowl (clam, chicken, yuzu pork, egg)', '¥1,300', 'Ramen', 'no', 'no', 'October 2026 review.', 'shio_ue'),
      it('', '', 'Deluxe clam shio ramen: three chashu, egg, white truffle oil', '¥2,200', 'Ramen', 'no', 'no', 'September 2026 review.', 'shio_deluxe'),
      it('', '', 'Chashu rice bowl', '¥400', 'Sides', 'no', 'no', 'September 2026 review.', 'chashu_don'),
    ] }, {
    cuisine: '蛤と魚介の塩ラーメン (2026年の口コミ)・レアチャーシュー1枚の塩ラーメン1,100円 (2026年9〜10月)、蛤、鶏、柚子の香りの豚の上1,300円、3種のチャーシュー (豚肩ロースのレア、焼豚、鶏) と味玉と白トリュフオイルの特上2,200円 (2026年9月)・大きな蛤、極細ストレート麺、玉ねぎ。替え玉に柚子胡椒も・鶏の醤油ラーメン・チャーシュー丼400円・白トリュフオイルのトッピング',
    neighborhood: '六本木3-11-7 海上ビル1F、六本木の交差点のすぐそば。六本木駅5番出口 (大江戸線) から30秒',
    gf_detail: 'グルテンフリー不可。小麦の麺 (「小麦の風味」、2026年10月)。鶏の醤油ラーメンもある。',
    vegan_detail: 'ヴィーガン不可。蛤と魚介のスープ、豚と鶏のチャーシュー、卵。',
    notes: '[ラーメン・六本木、明け方まで食べられる交差点の蛤の塩ラーメン] 六本木の交差点のすぐそば、昼11時半から翌朝6時半か7時まで開く19席のラーメン店。目当ては蛤と魚介のうまみたっぷりの澄んだやさしい塩スープで、極細ストレート麺、大きな蛤、選べるチャーシュー。1,100円の一杯から、3種のチャーシュー、味玉、白トリュフオイルの2,200円の一杯まで。トリュフオイルは好みが分かれるほど強いと書いた客も。鶏の醤油ラーメンもあるが、再訪した客は蛤の一杯のほうが特別だと感じた。2026年の口コミでは海外出身のスタッフが親切、研修中の夜は提供が遅め、カード払いはスマホでの注文が必要。以前は Tsunagu という店名だったという口コミも。',
  });
}

// ================================================================ MEZZO
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13211612/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '05:00']);
  put({
    id: 'tokyo_mezzo_roppongi', name: 'MEZZO', category: 'OMNI',
    lat: 35.662549, lng: 139.733236, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free; the food is bar dishes such as fried chicken, carbonara, pizza and rice croquettes (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dishes named are fried chicken, carbonara, a wagyu-and-egg-yolk rice bowl and pizza; no plant dish is described.',
    hours_raw: 'Mon–Sat and the day before a holiday 18:00–05:00; closed Sundays and public holidays (Tabelog). 1F: casual bar with a DJ, no entrance fee except on special days. 2F: lounge with sofas and private rooms; à la carte carries a table charge (Tabelog gives both "¥2,000 per table and up" and "¥5,000 per table"; an October 2025 group paid about ¥5,000), courses have no charge. Drinks ¥500 until 21:00 (September 2025); an all-you-can-drink for women at ¥1,000 (March 2026). 17 seats listed; up to 80 seated and 120 standing for hire. Non-smoking, with a separate smoking area; complimentary heated-tobacco devices were offered (October 2025). Children only with an exclusive booking. Cards, IC/e-money and QR. Opened 29 July 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 5-1-7, 六本木ストリートビル 1F–2F, a minute from Roppongi crossing towards Tokyo Tower — Roppongi Stn exit 3',
    cuisine: 'DJ bar and dining bar (Tabelog) · drinks: Heineken ¥700, lemon sour ¥700 (January 2025); ¥500 drinks until 21:00 (September 2025); cocktails and champagne · food: MEZZO fried chicken ¥500, carbonara ¥1,200, pizza, salad, rice croquettes, a truffle egg rice and a wagyu tamago-kake-gohan bowl with a red egg yolk and wasabi (2025–2026 reviews)',
    website: 'http://mezzo.tokyo/', gmaps: gm('MEZZO 六本木5-1-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Bar · Roppongi, a DJ bar with food until 5 am] A minute from Roppongi crossing, a two-floor bar: downstairs a casual bar with a DJ booth and a terrace, upstairs a marble-and-black lounge with sofas and private rooms for parties. It runs from 6 pm to 5 am, Monday to Saturday, filling up after 10 pm with a young, international crowd that sometimes dances. Drinks are cheap early (¥500 until 9 pm in September 2025) and there is a proper food menu — fried chicken, carbonara, pizza, rice croquettes and a photogenic wagyu tamago-kake-gohan. Upstairs à la carte carries a table charge; one July 2025 guest found the staff pushy about refills. Smoking room; children only for private hire.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 29 July 2017 (Tabelog). The Tabelog text describes a casual 1F bar and a 2F lounge of marble and black with private rooms; a July 2025 diner heard it used to be a one-coin bar. The official site returned an error on 2026-11-02.',
      philosophy: 'A refined adult night out a minute from Roppongi crossing (Tabelog shop text).', specialty: 'Late-night DJ bar; wagyu tamago-kake-gohan.',
      anecdotes: [
        { text: '"Suddenly around 10 or 11 PM, it got crowded and quickly filled up. The DJ\'s song selection really resonated with those of us in our 40s." — February 2025.', source: R + 'B500492740/' },
        { text: '"With drinks priced at just JPY 500 until 9:00 PM, it offers amazing value. The atmosphere was lively, with some foreign guests dancing to the music!" — September 2025.', source: R + 'B514062997/' },
        { text: '"The staff kept asking about drinks as soon as they ran out, which felt a bit pushy." — July 2025, carbonara ¥1,200.', source: R + 'B510407984/' },
      ],
      japanese_sources_summary: '食べログ: MEZZO、港区六本木5-1-7 六本木ストリートビル1F・2F、六本木の交差点から東京タワー方面へ徒歩1分、六本木駅3番出口、月〜土・祝前日18:00〜翌5:00、日祝休み、1Fは特別な日を除いてエントランスフィーなし、2Fはアラカルトで1テーブル2000円〜のチャージ (コースは不要)、17席、貸切は着席80名・立食120名、禁煙 (喫煙所あり)、貸切時以外は子ども不可、カード・電子マネー・QR可、2017年7月29日オープン、1Fはカジュアルなバー、2Fは大理石と黒の空間とソファ席と個室。口コミ(2025年1月〜2026年8月): DJ、22時ごろから混む、21時までドリンク500円、女性の飲み放題1,000円、ハイネケン700円、唐揚げ500円、カルボナーラ1,200円、ピザ、ライスコロッケ、和牛の卵かけご飯、ドリンクのすすめがしつこいという声。',
      confidence: 'medium', sources: [TB, R + 'B500492740/', R + 'B503197910/', R + 'B510407984/', R + 'B510994866/', R + 'B514062997/', R + 'B515791955/', R + 'B518143881/', R + 'B521214937/', R + 'B523980684/', R + 'B534322020/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'An international late-night crowd (March 2026); order at the bar.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木5-1-7 六本木ストリートビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026. The official site returned a 502 error on 2026-11-02.' },
    pin_source: `Tabelog ${TB} (35.662549, 139.733236); GSI 東京都港区六本木五丁目1番 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503197910/', R + 'B510407984/'],
    price_note: 'Prices from January and July 2025 reviews; 2F à la carte has a table charge.', last_checked: TODAY, items: [
      it('', '', 'MEZZO fried chicken', '¥500', 'Food', 'no', 'no', 'January 2025 review.', 'karaage'),
      it('', '', 'Carbonara', '¥1,200', 'Food', 'no', 'no', 'July 2025 review.', 'carbonara'),
      it('', '', 'Heineken / lemon sour', '¥700', 'Drinks', '', '', 'January 2025 review; ¥500 until 21:00 in September 2025.', 'drinks'),
    ] }, {
    cuisine: 'DJ のいるバーとダイニングバー (食べログ)・飲み物: ハイネケン700円、レモンサワー700円 (2025年1月)、21時まではドリンク500円 (2025年9月)、カクテルとシャンパン・料理: MEZZO の唐揚げ500円、カルボナーラ1,200円、ピザ、サラダ、ライスコロッケ、トリュフの卵かけご飯、赤い卵黄とわさびの和牛の卵かけご飯 (2025〜2026年の口コミ)',
    neighborhood: '六本木5-1-7 六本木ストリートビル1F・2F、六本木の交差点から東京タワー方面へ1分。六本木駅3番出口',
    gf_detail: '要確認。グルテンフリーの説明はない。料理は唐揚げ、カルボナーラ、ピザ、ライスコロッケなどのバーのメニュー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。名前が出ている料理は唐揚げ、カルボナーラ、和牛と卵黄の丼、ピザで、植物性の料理の説明はない。',
    notes: '[バー・六本木、朝5時まで食べて飲める DJ バー] 六本木の交差点から1分の2フロアのバー。1階は DJ ブースとテラスのあるカジュアルなバー、2階は大理石と黒の内装にソファと個室のあるラウンジで、パーティー向き。月〜土の夜6時から朝5時まで営業し、22時を過ぎると若く国際色豊かな客で埋まり、踊る人も。早い時間の飲み物は安く (2025年9月は21時まで500円)、料理もきちんとあり、唐揚げ、カルボナーラ、ピザ、ライスコロッケ、写真映えする和牛の卵かけご飯。2階のアラカルトはテーブルチャージがかかり、2025年7月の客はおかわりのすすめがしつこいと感じた。喫煙所あり、子どもは貸切時のみ。',
  });
}

// ================================================================ 鮨割烹 六本木 亀甲
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13263395/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kicko.jp/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'tokyo_kicko_roppongi', name: '鮨割烹 六本木 亀甲 (Kicko)', category: 'MOM_AND_POP',
    lat: 35.664722, lng: 139.732973, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free; the courses mix nigiri with dashi-based kaiseki dishes, Shaoxing-wine-marinated shrimp, tempura, fried cod roe and soy-based seasoning (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi kaiseki of fish, shellfish, crab and whale.',
    hours_raw: 'Mon–Sat and days around holidays 18:00–23:00 (last order 22:00); closed Sundays and holidays; also irregular closures (Tabelog). Reservation only; same-day bookings by phone only; same-day cancellations charged the full course. Prices include a 10% service charge; no cover. 8 seats: a hinoki counter of 4 and a private room for 4. Heated tobacco only in the private room. Cards; no e-money or QR. English menu; English- and Chinese-speaking staff. Children welcome; a children\'s menu from ¥5,000 by reservation (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-5-7, スタジオD 1F — 3 min from Roppongi Stn exit 6 (Hibiya line)',
    cuisine: 'Sushi kaiseki, renewed in summer 2023 from the obanzai kaiseki Kikkō (Tabelog shop text) · courses (Tabelog, tax and service included): "Kame" ¥15,730; "Kō" ¥21,780 with hairy crab in its shell; "Goku", built to your requests, from ¥27,830 (two days\' notice); the official site lists the Kame course at ¥13,000 (¥14,520 total) — starter, three obanzai, two sashimi, two nigiri (e.g. sumi-ika, madai), a seasonal grilled fish, chawanmushi, five nigiri (e.g. masunosuke, kohada, sea urchin, natural hon-maguro), kanpyo roll, miso soup, tamagoyaki · autumn 2025 Kō course: Okinawa mozuku with hairy crab, botan shrimp in Shaoxing wine, whale, Nagasaki suji-ara, Awaji sumi-ika, grilled tuna collar, fried cod soft roe, salt-crust-marinated tuna from Shiogama, Kumamoto kohada, Okinawa white-leg shrimp, hairy-crab chawanmushi with homemade karasumi, crab-and-uni risotto, chestnut ice cream · red-vinegar shari (October 2025) · sake from around Japan',
    website: SITE, gmaps: gm('鮨割烹 六本木 亀甲'), menu_url: SITE,
    notes: "[Sushi · Roppongi, a sushi kaiseki from an owner-chef with a past in China and Okinawa] A long-running Roppongi obanzai kaiseki turned sushi kaiseki in 2023 under owner-chef 笠井 (Kasai, as Tabelog writes it), with a hinoki counter of four and a private room for four. The chef, from Muroran per a 2025 diner, has cooked in China and Okinawa, and courses mix small kaiseki plates — botan shrimp in Shaoxing wine, a hairy-crab chawanmushi with homemade karasumi, oden in autumn, sometimes whale — with nigiri on lightly red-vinegared rice, ending in a crab-and-sea-urchin risotto. Courses run from about ¥15,000 to ¥28,000 including service. Diners in 2025–2026 found the chef gruff at first and warm once talking; one heard a newcomer scolded behind the scenes. English- and Chinese-speaking staff; heated tobacco only in the private room.",
    chef_bio: { chef_name: '笠井 (Kasai)', roles: ['Owner-chef (official site: "店主 笠井"; Tabelog: "Chef Kasai")'], origin: 'Muroran (an October 2025 diner, as told by the chef)',
      background: 'The official site signs its greeting "店主 笠井"; the Tabelog text credits "Chef Kasai", with a name made "in culinary cities both domestically and internationally", with the 2023 renewal of the obanzai kaiseki Kikkō into a sushi kaiseki. An October 2025 diner heard from the chef about the origin of the shop\'s name, work in China and Okinawa, fish sourcing, a love of sake and a hometown of Muroran.',
      philosophy: 'Seasonal ingredients chosen daily from fishing grounds and markets around Japan, served with heartfelt hospitality (official site).', specialty: 'Sushi kaiseki; hairy-crab chawanmushi; crab-and-uni risotto.',
      anecdotes: [
        { text: '"The head chef had a tough exterior, but… turned out to be a friendly and wonderful person once we started talking." — October 2025, Kō course ¥21,780.', source: R + 'B515486734/' },
        { text: '"The chawanmushi is generously made with hairy crab, topped with plenty of karasumi (dried mullet roe)!" — October 2025.', source: R + 'B515833977/' },
        { text: '"While we were in a private room, I could hear a staff member speaking harshly to a newcomer, which made me a bit concerned." — October 2025.', source: R + 'B516035859/' },
      ],
      japanese_sources_summary: '公式サイト (kicko.jp): 鮨割烹 六本木亀甲、日本全国の漁場や市場から厳選した旬の食材で真心込めたおもてなし、席数に限りがあるので予約を、店主 笠井。お品書き「亀コース」13,000円 (総額14,520円): 先付、おばんざい三種、刺身二種、先寿司二種 (墨烏賊、真鯛など)、季節の焼き肴、季節の茶碗蒸し、後寿司五種 (鱒の介、小肌、海胆、天然本鮪の赤身・中トロなど)、干瓢巻き、味噌汁、玉子焼き。食べログ (店舗会員): 港区六本木4-5-7 スタジオD 1F、月〜土18:00〜23:00 (L.O.22:00)、日祝休み、不定休、完全予約制、サービス料10%込み、8席 (カウンター4、個室1)、加熱式たばこは個室のみ、カード可、英語・中国語のスタッフ、子どもメニュー5,000円〜。おばんざい懐石から2023年夏に鮨懐石に、亀コース15,730円、甲コース21,780円、極コース27,830円〜。口コミ(2025年9月〜2026年5月): 毛蟹、紹興酒漬けの牡丹海老、鯨、赤酢のシャリ、毛蟹とからすみの茶碗蒸し、蟹と雲丹のリゾット、Muroran 出身で China と Okinawa で働いた大将。',
      confidence: 'medium', sources: [TB, SITE, R + 'B513310610/', R + 'B515486734/', R + 'B515833977/', R + 'B515896956/', R + 'B516035859/', R + 'B516215147/', R + 'B516215520/', R + 'B516371961/', R + 'B516488217/', R + 'B528036251/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English- and Chinese-speaking staff (Tabelog); the shop says it suits hosting overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-5-7 スタジオD 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.664722, 139.732973); GSI 東京都港区六本木四丁目5番 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, SITE],
    price_note: 'Course prices from Tabelog (tax and service included); the official site lists the Kame course at ¥13,000 (¥14,520 total).', last_checked: TODAY, items: [
      it('亀コース', '', 'Kame course (sushi kaiseki)', '¥15,730', 'Course', 'ask', 'no', 'Tabelog; ¥14,520 total on the official site.', 'kame'),
      it('', '', 'Kō course with hairy crab in its shell', '¥21,780', 'Course', 'ask', 'no', 'Tabelog.', 'ko'),
      it('', '', 'Goku course, built to your requests (2 days\' notice)', '¥27,830', 'Course', 'ask', 'no', 'Tabelog; from this price.', 'goku'),
    ] }, {
    cuisine: '鮨懐石。おばんざい懐石の亀甲が2023年夏に鮨懐石に (食べログの店の紹介)・コース (食べログ、税・サービス料込み): 亀15,730円、殻付きの毛蟹の甲21,780円、希望に合わせる極27,830円〜 (2日前までに)。公式サイトでは亀コース13,000円 (総額14,520円): 先付、おばんざい三種、刺身二種、先寿司二種 (墨烏賊、真鯛など)、季節の焼き肴、季節の茶碗蒸し、後寿司五種 (鱒の介、小肌、海胆、天然本鮪など)、干瓢巻き、味噌汁、玉子焼き・2025年秋の甲コース: Okinawa のもずくと毛蟹、紹興酒漬けの牡丹海老、鯨、Nagasaki のすじあら、Awaji の墨烏賊、鮪のかま焼き、白子の揚げ物、Shiogama の鮪の塩釜漬け、Kumamoto の小肌、Okinawa の Shiroashi 海老、自家製からすみの毛蟹の茶碗蒸し、蟹と雲丹のリゾット、栗のアイス・赤酢のシャリ (2025年10月)・全国の日本酒',
    neighborhood: '六本木4-5-7 スタジオD 1F。六本木駅6番出口 (日比谷線) から徒歩3分',
    gf_detail: '要確認。グルテンフリーの説明はない。コースは握りと出汁の懐石料理が交互で、紹興酒漬けの海老、天ぷら、白子の揚げ物、醤油の味付けも (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、蟹、鯨の鮨懐石。',
    notes: '[鮨・六本木、China と Okinawa で腕を磨いた店主の鮨懐石] 六本木で長く続いたおばんざい懐石が、2023年に店主の笠井 (食べログでは Kasai) のもとで鮨懐石になった。檜のカウンター4席と4人の個室。2025年の客によれば大将は Muroran 出身で、China や Okinawa でも働いた。コースは紹興酒漬けの牡丹海老、自家製からすみの毛蟹の茶碗蒸し、秋のおでん、ときには鯨などの懐石の小皿に、軽く赤酢を効かせたシャリの握りが交じり、締めは蟹と雲丹のリゾット。コースはサービス料込みで約15,000〜28,000円。2025〜2026年の客は、大将は最初はとっつきにくいが話すと温かいと書き、奥で新人が叱られる声が聞こえたという客も。英語と中国語を話すスタッフがいて、加熱式たばこは個室のみ。',
  });
}

// ================================================================ 鮨 ししど
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13324647/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '05:00']);
  put({
    id: 'tokyo_sushi_shishido_roppongi', name: '鮨 ししど (Sushi Shishido)', category: 'OMNI',
    lat: 35.663896, lng: 139.734395, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks for allergies and dislikes at reservation (Tabelog). Nothing is called gluten-free; the course includes marinated tuna, a meunière and fried lotus root (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi omakase.',
    hours_raw: 'Daily 18:00–05:00 (last order 04:00); closed 30 December–3 January (Tabelog). Late at night the counter also works as a karaoke bar (October 2026 reviews). A 10% seat charge on à la carte-only orders (Tabelog). Tell the shop about allergies when booking. 10 counter seats (up to 12). Non-smoking. Cards (incl. UnionPay), IC/e-money and QR. Children welcome. Opened 9 August 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-8-2, WHARF 104 — 4 min from Roppongi Stn (Oedo line), 6 min (Hibiya line)',
    cuisine: 'Edomae sushi omakase (Tabelog) · Sushi Shishido course, 16 items, ¥30,000; special course, 19 items, ¥50,000 (Tabelog, tax included) · autumn 2026 courses: matsutake and kue, sumi-ika, aji with sesame, chutoro, grilled swordfish, yuzu-marinated akami, sweet shrimp, katsuo tataki, a signature of salmon roe, sea urchin and caviar, Matsukawa flounder, scallop, seared sardine, white-fish meunière with Japanese salsa, fried lotus root with sea bream, otoro, sea urchin; an eel and matsutake clear soup, fish soup and dessert · Hokkaido natural bluefin tuna (October 2026) · about 20 sakes chosen by the chef (Tabelog)',
    website: null, gmaps: gm('鮨 ししど 六本木3-8-2'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, an Edomae omakase that runs until 5 am] A sleek black counter of ten, four minutes from Roppongi Station, that opened in August 2026 and serves an Edomae omakase from 6 pm to 5 am. The chef has 18 years of experience, including work in Taiwan and Malaysia (shop text), and a September 2026 diner says the chef has opened sushi shops overseas. The ¥30,000 course runs to about 16–18 plates mixing nigiri — chutoro, otoro, marinated akami, sweet shrimp, seared sardine — with cooked dishes such as grilled swordfish, a white-fish meunière with Japanese salsa and a showpiece of salmon roe, sea urchin and caviar; a ¥50,000 special course uses finer fish. Diners in 2026 praise a friendly chef and generous portions; late at night it doubles as a karaoke bar.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources read)'], origin: null,
      background: 'Per the Tabelog shop text: a chef with 18 years of experience in Edomae sushi who honed the craft in Taiwan and Malaysia. A September 2026 diner adds that the chef has launched sushi restaurants overseas. Opened 9 August 2026 (Tabelog).',
      philosophy: 'Seasonal ingredients prepared with precision, with attention to temperature and balance with the rice (Tabelog shop text).', specialty: 'Edomae omakase; salmon roe, sea urchin and caviar.',
      anecdotes: [
        { text: '"This chef has also launched sushi restaurants overseas, bringing a wealth of experience to each piece." — September 2026.', source: R + 'B536923349/' },
        { text: '"They are open until 5 AM, and I heard you can even enjoy karaoke late at night!" — October 2026, 18-dish course ¥30,000.', source: R + 'B537068917/' },
        { text: '"All the sushi was made with ingredients sourced from Hokkaido… Above all, the personality of the head chef was wonderful." — October 2026.', source: R + 'B537978688/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 ししど、港区六本木3-8-2 WHARF104号、大江戸線六本木駅から徒歩4分、日比谷線6分、毎日18:00〜翌5:00 (L.O.4:00)、12月30日〜1月3日休み、アラカルトのみは席料10%、アレルギーは予約時に、カウンター10席、禁煙、カード・電子マネー・QR可、子ども可、2026年8月9日オープン。店の紹介: 経験18年、Taiwan と Malaysia で腕を磨いた職人の江戸前鮨、店主が選ぶ日本酒20種。コース: 鮨ししどコース16品30,000円、特別コース19品50,000円。口コミ(2026年9月〜10月): 松茸とクエ、墨烏賊、中トロ、めかじきの焼き物、甘海老、いくら・雲丹・キャビアのスペシャリテ、白身魚のムニエル、大トロ、Hokkaido の天然本鮪、気さくな大将、深夜はカラオケも、海外でも鮨屋を立ち上げた職人という声。',
      confidence: 'medium', sources: [TB, R + 'B536537750/', R + 'B536585191/', R + 'B536923349/', R + 'B537008207/', R + 'B537009398/', R + 'B537032062/', R + 'B537068917/', R + 'B537463114/', R + 'B537978688/', R + 'B538038110/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at the counter; the shop says it suits entertaining international guests.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog: "If you have any food allergies or ingredients you are not comfortable with, please let us know when making your reservation."', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-8-2 WHARF104号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened August 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663896, 139.734395); GSI 東京都港区六本木三丁目8番 (lot) 42m; Sushi Toki (tokyo_sushi_toki_roppongi, 3-9-4, offset pin) is 8 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included; read November 2026).', last_checked: TODAY, items: [
      it('', '', 'Sushi Shishido omakase course, 16 items', '¥30,000', 'Course', 'ask', 'no', 'Tabelog.', 'shishido_course'),
      it('', '', 'Special omakase course, 19 items', '¥50,000', 'Course', 'ask', 'no', 'Tabelog.', 'special_course'),
    ] }, {
    cuisine: '江戸前鮨のおまかせ (食べログ)・鮨ししどコース16品30,000円、特別コース19品50,000円 (食べログ、税込み)・2026年秋のコース: 松茸とクエ、墨烏賊、胡麻の鯵、中トロ、めかじきの焼き物、柚子の香りの赤身の漬け、甘海老、鰹のたたき、いくら・雲丹・キャビアのスペシャリテ、Matsukawa の鰈、帆立、炙り鰯、和風サルサの白身魚のムニエル、鯛と蓮根の揚げ物、大トロ、雲丹。鰻と松茸のお吸い物、あら汁、デザート・Hokkaido の天然本鮪 (2026年10月)・大将が選ぶ日本酒約20種 (食べログ)',
    neighborhood: '六本木3-8-2 WHARF104号。六本木駅から徒歩4分 (大江戸線)、6分 (日比谷線)',
    gf_detail: '予約時に要確認。アレルギーや苦手な食材は予約時に伝えるよう店は求めている (食べログ)。グルテンフリーの説明はなく、コースには鮪の漬け、ムニエル、蓮根の揚げ物も (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。江戸前鮨のおまかせ。',
    notes: '[鮨・六本木、朝5時まで開く江戸前鮨のおまかせ] 六本木駅から4分、黒を基調にしたカウンター10席で、2026年8月に開店し、夜6時から朝5時まで江戸前鮨のおまかせを出す。店によれば大将は経験18年で Taiwan や Malaysia でも腕を磨き、2026年9月の客は海外で鮨屋を立ち上げた経験もあると書いた。30,000円のコースは16〜18皿ほどで、中トロ、大トロ、赤身の漬け、甘海老、炙り鰯などの握りに、めかじきの焼き物、和風サルサの白身魚のムニエル、いくら・雲丹・キャビアのスペシャリテなどの料理が交じる。50,000円の特別コースはさらに良い魚を使う。2026年の客は気さくな大将とたっぷりの量をほめ、深夜はカラオケのバーにもなる。',
  });
}

save();
