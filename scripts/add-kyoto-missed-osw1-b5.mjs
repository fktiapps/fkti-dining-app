// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 5.
//   + Bar 凛ト Bar Rinto (basement bar on Pontocho with a Kamo River window; open to 2:00)
//   + 和彩たか Wasai Taka (fish izakaya on Kiyamachi; buri shabu and white-shrimp kara-age; open to 1:00)
//   + SPICE GATE (spice shop and spice-curry café on Teramachi, from 7:30; Curry WEST Tabelog 100 2024, 2026)
//   + 京都 ネーゼ Kyoto Neze (couple-run Italian at Sanjo Kiyamachi since 2007; Italian WEST Tabelog 100 2021, 2023, 2025)
//   - Bini (26017022): skipped — closed indefinitely per the official site.
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26025518, 26027330)
//   and from `next notable 200` (26017022 skipped, then 26037542, 26005142). None is in data/kyoto.json: grep by name
//   (凛ト/Rinto, 和彩たか/Wasai Taka, SPICE GATE, ネーゼ/Neze/Nese) and address (柏屋町173, 鍋屋町209, 恵美須之町546,
//   三条木屋町上ル) found none.
//   Nearest existing pins: kyoto_tanzen_pontocho 21 m from Rinto; kyoto_diane_kawaramachi_kiyamachi 24 m from Wasai Taka;
//   kyoto_bar_rocking_chair 65 m from SPICE GATE; kyoto_honke_gepaikeya_naomasa 43 m from Neze. None within 3 m.
//   Group checks: SPICE GATE's site lists one sister shop, INDIA GATE (biryani), in data as kyoto_india_gate_biryani
//   (address_ja 京都府京都市中京区天神山町271, matching the site's INDIA GATE address) — a different format, so drafted.
//   Bar Rinto is a sister bar of "Nostalgia" per a July 2026 review; no Nostalgia record in data/kyoto.json.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26017022', 'Bini: closed indefinitely — the official site (restaurant-bini.com, read 2026-11-05) says 「現在、Biniは無期限のお休みをいただいております」, signed 中本敬介・理恵子');

// ================================================================ Bar 凛ト
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025518/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'kyoto_bar_rinto_pontocho', name: 'Bar 凛ト (Bar Rinto)', category: 'OMNI',
    lat: 35.004247, lng: 135.771154, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar with some snacks; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks-first bar; no information on the snacks (2025–2026 reviews).',
    hours_raw: '17:00–2:00 every day; closed only on 1 January (Tabelog). Reservations taken; busy lately, so booking is advised, though walk-ins happen (Tabelog; March 2025). 20 seats: a 9-seat counter facing the river window, tables and a private room for 6; smoking allowed (Tabelog), and a non-smoker found the basement smoky (April 2025). Cards and QR payments (Tabelog). Cocktails about ¥1,600 (June 2026). Basement of a Pontocho building: look for the white noren and lantern, then take the stairs down (March 2025). 1 min from Gion-Shijo or Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, just north of Shijo — 1 min from Gion-Shijo Stn',
    cuisine: 'Authentic bar with a long counter and a window onto the Kamo River (2025–2026 reviews) · "Nise Denki Bran", a brandy drink from the novels of Tomihiko Morimi (March, June, July 2026) · original cocktails, some with the bar\'s own tea liqueur, e.g. the "Gion" (2025–2026 reviews) · classics: rye whiskey and soda, gin and tonic with a choice of gin, Orange Blossom, XYZ, fresh strawberry cocktail, cocktails made to your taste · a Kyoto gin ("Kino Mi" in a March 2025 review), Laphroaig and other whisky, cigars · snacks · cocktails about ¥1,600 (June 2026)',
    website: null, gmaps: gm('Bar 凛ト 先斗町'), menu_url: null,
    notes: '[Bar · Pontocho, a basement counter with a Kamo River view] Under a white noren on Pontocho, stairs lead down to a long counter whose back bar faces a window onto the Kamo River — snow, cherry blossoms and, in the distance, the lights of Minami-za, depending on the night. The bar is known for "Nise Denki Bran", the fake brandy drink from Tomihiko Morimi\'s Kyoto novels; there are original cocktails with a house tea liqueur, the classics, whisky and cigars. Cocktails about ¥1,600. Open nightly 17:00–2:00, which makes it a late stop when Pontocho closes. Smoking allowed. A March 2025 visitor found the bartender fluent in English.',
    chef_bio: { chef_name: null, roles: ['Master and bartenders (unnamed in the sources)'], origin: null,
      background: 'A July 2026 reviewer learned that it is a sister bar of a bar called Nostalgia.',
      philosophy: null, specialty: 'Nise Denki Bran; original cocktails with tea liqueur.',
      anecdotes: [
        { text: 'On a night of heavy snow in February 2026, a regular watched couples building snowmen on the Kamo riverbank from the counter, over a rye and soda and a gin and tonic.', source: R + 'B202673974/' },
        { text: '"While there seemed to be many inbound customers, the bartender was fluent in English and very pleasant" — March 2025.', source: R + 'B503133559/' },
        { text: 'An April 2026 group came after dinner during cherry-blossom season and saw the blossoms along the Kamo River and, in the distance, the lights of Minami-za.', source: R + 'B525677638/' },
        { text: 'An April 2025 non-smoker found the basement smoke overwhelming, while noting the authentic atmosphere suits smokers.', source: R + 'B505860396/' },
      ],
      japanese_sources_summary: '食べログ: Bar 凛ト、バー、中京区先斗町四条上ル柏屋町173-2 B1F、祇園四条駅4番出口・河原町駅1A出口から徒歩1分、毎日17:00〜2:00、1月1日のみ休み、予約可、20席 (カウンター9)、個室 (6人)、喫煙可、カード・QR 可、無料 Wi-Fi、景色・夜景。口コミ (2025〜2026年、英語): 先斗町の白い暖簾と提灯、階段を下りる、鴨川の見える窓とカウンター、Tomihiko Morimi の小説に出てくる「Nise Denki Bran」、自家製のお茶のリキュールのカクテル、カクテル約1,600円、英語が流暢なバーテンダー、Nostalgia の姉妹店。',
      confidence: 'medium', sources: [TB, R + 'B202673974/', R + 'B499539645/', R + 'B503133559/', R + 'B505860396/', R + 'B513153067/', R + 'B525677638/', R + 'B525999251/', R + 'B526107443/', R + 'B529911819/', R + 'B532361984/'] },
    cultural_comfort: { level: 'english', note: 'A bartender fluent in English (March 2025); cards and QR payments; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区先斗町四条上ル柏屋町173-2 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004247, 135.771154); GSI matches only the town 京都府京都市中京区柏屋町 (town centroid 15m away), not the lot, so the pin rests on the Tabelog point; nearest other record kyoto_tanzen_pontocho is 21 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529911819/'],
    price_note: 'No menu read; one June 2026 review gives cocktails at about ¥1,600.', last_checked: TODAY, items: [
      it('', '', 'Nise Denki Bran (the fake Denki Bran of Tomihiko Morimi\'s novels)', '', 'Drinks', '', '', '2026 reviews.', 'nise_denki_bran'),
      it('', '', 'Cocktail', '¥1,600', 'Drinks', '', '', 'June 2026, approximate.', 'cocktail'),
    ] }, {
    cuisine: '鴨川を望む窓と長いカウンターのオーセンティックバー (2025〜2026年の口コミ)・Tomihiko Morimi の小説に出てくるブランデーの酒「Nise Denki Bran」(2026年3・6・7月)・自家製のお茶のリキュールを使うものなどのオリジナルカクテル、たとえば「Gion」(2025〜2026年の口コミ)・クラシック: ライウイスキーのソーダ割り、ジンを選べるジントニック、オレンジブロッサム、XYZ、生のいちごのカクテル、好みに合わせたカクテル・京都のジン (2025年3月の口コミでは「Kino Mi」)、Laphroaig などのウイスキー、葉巻・おつまみ・カクテルは約1,600円 (2026年6月)',
    neighborhood: '四条のすぐ北の先斗町。祇園四条駅から徒歩1分',
    gf_detail: '要確認。カクテルとウイスキーのバーで、おつまみも少し。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。飲み物が主役のバーで、おつまみの情報はない (2025〜2026年の口コミ)。',
    notes: '[バー・先斗町、鴨川を望む地下のカウンター] 先斗町の白い暖簾をくぐって階段を下りると、長いカウンターのバックバーの向こうに鴨川を望む窓。夜によって雪、桜、遠くに Minami-za の灯り。名物は Tomihiko Morimi の京都の小説に出てくる「Nise Denki Bran」で、自家製のお茶のリキュールのオリジナルカクテル、クラシック、ウイスキー、葉巻もある。カクテルは約1,600円。毎晩17時〜2時なので、先斗町の店が閉まったあとにも寄れる。喫煙可。2025年3月には英語が流暢なバーテンダーがいた。',
  });
}

// ================================================================ 和彩たか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027330/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '01:00']);
  put({
    id: 'kyoto_wasai_taka_kiyamachi', name: '和彩たか (Wasai Taka)', category: 'OMNI',
    lat: 35.005159, lng: 135.770658, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish izakaya cooking with sashimi and soy sauce, kara-age, tempura, croquettes and udon; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; the buri shabu, sashimi and most small dishes are fish or meat, and yuba tofu comes in a dashi sauce (2024–2026 reviews).',
    hours_raw: '16:00–1:00 (last order 0:30); closed Tuesday, but open on a Tuesday before a public holiday (Tabelog). Reservations taken, including Tabelog course bookings (January 2026). An appetizer (otoshi) is served and charged; it changes each time (Tabelog). 18 seats, counter and tables; smoking allowed (Tabelog). Cards, IC cards, iD, QUICPay and PayPay accepted (Tabelog). On the Takase River side of Kiyamachi, 3 min from Hankyu Kawaramachi Stn (Tabelog; September 2024).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi by the Takase River, north of Shijo — 3 min from Hankyu Kawaramachi Stn',
    cuisine: 'Fish izakaya with a wide sake and shochu list (Tabelog; 2025 reviews) · white-shrimp kara-age, the regulars\' must-order · sashimi of the day, e.g. bluefin tuna, sea bream, swordfish, red and white shrimp, kawahagi · buri shabu-shabu, finished with Himi udon · course with buri shabu ¥5,000, all-you-can-drink +¥2,000 (January 2026) · Quick Drink Set of house appetizers (August 2024, January 2025) · hamo carpaccio in summer, yuba tofu with sauce, nama-fu dengaku, kombu-cured fish, sanma namerou, crab cream croquette with crab-miso sauce, fried oysters, sukiyaki, rice with raw egg and grilled mentaiko · a regular from Kanazawa comes for Hokuriku fish such as yellowtail and sweet shrimp (October 2025)',
    website: null, gmaps: gm('和彩たか 京都 木屋町'), menu_url: null,
    notes: '[Izakaya · Kiyamachi, buri shabu and white shrimp until 1 a.m.] A fish izakaya on the Takase River side of Kiyamachi with a handsome frontage, a counter for solo drinkers and a good sake and shochu list. Regulars never skip the white-shrimp kara-age; the other star is buri shabu-shabu, finished with Himi udon, and the ¥5,000 buri shabu course (all-you-can-drink +¥2,000, January 2026) is good value. The day\'s sashimi, hamo carpaccio in summer and yuba tofu round it out. One February 2025 diner found the menu narrow and portions small. Open 16:00–1:00, closed Tuesday; an otoshi is charged; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Tabelog lists an invoice number for the operator but no name. A regular has eaten here six times between March and August 2025.',
      philosophy: null, specialty: 'White-shrimp kara-age; buri shabu-shabu.',
      anecdotes: [
        { text: '"The fried white shrimp was consistently good, so I ordered a second helping." — May 2025.', source: R + 'B493237372/' },
        { text: 'A November 2024 first-timer on the buri shabu course with all-you-can-drink asked whether a bone cracker could be made, and was given one on the house.', source: R + 'B495266092/' },
        { text: 'A February 2025 diner liked the crab cream croquette but found the menu limited, the portions small, and the reserved counter seat changed to a table.', source: R + 'B502628664/' },
        { text: '"As I am from Kanazawa, this is a place I often visit when I want to enjoy sashimi." — October 2025.', source: R + 'B516612158/' },
      ],
      japanese_sources_summary: '食べログ: 和彩たか、居酒屋・海鮮・日本料理、中京区鍋屋町209-3 木屋町岡本ビル 1F、阪急河原町駅から徒歩3分、16:00〜1:00 (L.O. 0:30)、火曜休み (祝前日の火曜は営業)、予約可、付き出しあり (内容は都度変更)、18席、喫煙可、カード・電子マネー・PayPay 可、日本酒・焼酎にこだわり、魚にこだわり、飲み放題あり。口コミ (2024〜2026年、英語): 白えびの唐揚げ、ぶりしゃぶ、Himi うどん、ぶりしゃぶのコース5,000円と飲み放題2,000円 (2026年1月)、ちょい飲みセット、鱧のカルパッチョ、湯葉豆腐、生麩田楽、かにクリームコロッケ、メニューが少なく量が少ないという声。',
      confidence: 'medium', sources: [TB, R + 'B491302482/', R + 'B492569082/', R + 'B493237372/', R + 'B495266092/', R + 'B496026284/', R + 'B499488791/', R + 'B502628664/', R + 'B514480533/', R + 'B516612158/', R + 'B520208951/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats suit solo diners; an otoshi is charged; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町209-3 木屋町岡本ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.005159, 135.770658); cross-checked: GSI 京都府京都市中京区鍋屋町209番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520208951/'],
    price_note: 'No menu read; course price from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Buri shabu course (appetizers, sashimi, grill, buri shabu, fried dish, vinegared dish, Himi udon, dessert)', '¥5,000', 'Courses', 'ask', 'no', 'January 2026; all-you-can-drink +¥2,000.', 'buri_shabu_course'),
      it('', '', 'White-shrimp kara-age', '', 'À la carte', 'ask', 'no', '2025 reviews.', 'shiro_ebi_karaage'),
    ] }, {
    cuisine: '日本酒と焼酎の豊富な魚の居酒屋 (食べログ、2025年の口コミ)・常連が必ず頼む白えびの唐揚げ・本日の刺身、たとえば本鮪、鯛、カジキ、赤えびと白えび、カワハギ・Himi うどんで締めるぶりしゃぶ・ぶりしゃぶのコース5,000円、飲み放題+2,000円 (2026年1月)・自家製の前菜のちょい飲みセット (2024年8月、2025年1月)・夏の鱧のカルパッチョ、たれの湯葉豆腐、生麩田楽、魚の昆布締め、さんまのなめろう、かに味噌ソースのかにクリームコロッケ、カキフライ、すき焼き、焼き明太子の卵かけご飯・Kanazawa 出身の常連はぶりや甘えびなど Hokuriku の魚を目当てに来る (2025年10月)',
    neighborhood: '高瀬川沿いの木屋町、四条の北。阪急河原町駅から徒歩3分',
    gf_detail: '要確認。刺身と醤油、唐揚げ、天ぷら、コロッケ、うどんなどの魚の居酒屋料理。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚の居酒屋で、ぶりしゃぶ、刺身、小皿の多くは魚か肉、湯葉豆腐も出汁のたれ (2024〜2026年の口コミ)。',
    notes: '[居酒屋・木屋町、深夜1時までのぶりしゃぶと白えび] 木屋町の高瀬川側、外観の美しい魚の居酒屋。カウンターは一人飲みにも向き、日本酒と焼酎がそろう。常連が欠かさないのは白えびの唐揚げ、もうひとつの主役は Himi うどんで締めるぶりしゃぶで、5,000円のぶりしゃぶコース (飲み放題+2,000円、2026年1月) はお得。本日の刺身、夏の鱧のカルパッチョ、湯葉豆腐も。2025年2月にはメニューが少なく量も少なめという声も。16時〜1時、火曜休み、付き出しあり、喫煙可。',
  });
}

// ================================================================ SPICE GATE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037542/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://spicegate.jp/'; const ABOUT = SITE + 'about/'; const ACCESS = SITE + 'access/';
  const H = day(['07:30', '11:00'], ['11:30', '21:00']); const HT = day(['07:30', '11:00'], ['11:30', '15:00']);
  put({
    id: 'kyoto_spice_gate_teramachi', name: 'SPICE GATE', category: 'OMNI',
    lat: 35.000698, lng: 135.767038, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries on basmati or long-grain rice, but the monthly specials often add katsu (pork or salmon) and the menu includes hayashi rice; no gluten information (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The reviewed curries are meat or fish (mutton, katsu, salmon) and one special uses dashi; no vegan curry is named (2026 reviews).',
    hours_raw: 'Breakfast 7:30–11:00 (last order); lunch to dinner 11:30–21:00 (last order); Thursday 11:30–15:00 only after breakfast; no regular closing day; spices can be bought at any time (official site). Tabelog adds that curry is served through the café hours and that hours may change, announced on Instagram. No reservations (Tabelog). 22 seats (8 counter, 14 table); non-smoking; cards, IC cards and QR payments (Tabelog). Second floor, up a white spiral staircase (October 2026), on Teramachi south of Bukkoji; 5 min from Kawaramachi Stn; no bicycle parking (Tabelog). Opened 12 May 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: HT, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-dori south of Bukkoji — 5 min walk from Kawaramachi Stn',
    cuisine: 'Spice shop and curry café: spice curries on basmati rice, chai, spice sweets and drinks; make your own garam masala in the shop (official site) · breakfast of a choice of three curries with side dishes, from 7:30 (official site; October 2026) · regular curries ¥1,300–1,500, large katsu curry about ¥1,800 (September 2026) · monthly specials: dashi curry katsu don ¥1,680 (September 2026), salmon rare-katsu curry large ¥1,980, with tomato curry, white curry, dill butter and salmon roe (October–November 2026) · bone-in mutton curry ¥1,580 (November 2026) · hayashi rice, small ¥1,430 (October 2026) · craft cola ¥500, lemongrass sour (2026 reviews)',
    website: SITE, gmaps: gm('SPICE GATE 京都 寺町'), menu_url: null,
    notes: '[Curry · Teramachi, a spice shop that serves curry from breakfast] Up a white spiral staircase on Teramachi, a "curry & spice select shop": shelves of spices to smell and buy (you can blend your own garam masala) and a counter serving spice curry on basmati rice from 7:30 in the morning. Regular curries run ¥1,300–1,500, with a monthly special such as a salmon rare-katsu curry (¥1,980 large) or a dashi curry katsu don; finish with a craft cola or a lemongrass sour. Most reviewers find the spicing aromatic rather than hot (the bone-in mutton curry has more kick). Listed on the same website as the biryani shop INDIA GATE. Open every day; Thursday until 15:00.',
    chef_bio: { chef_name: null, roles: ['Run alongside INDIA GATE (official site); no staff named'], origin: null,
      background: 'Per the official site: SPICE GATE grew from the wish to make spices feel closer to everyday life — a little spice added to Japanese food, home cooking or tea — with organic and unusual spices; it aims to be "the Village Vanguard of spices". The site lists it with INDIA GATE (biryani and curry, Tenjinyama-cho). Tabelog Curry WEST "Tabelog 100" 2024 and 2026.',
      philosophy: 'Per the official site: to suggest easy, everyday ways to use and buy spices.',
      specialty: 'Spice curry on basmati rice; monthly special curries.',
      anecdotes: [
        { text: 'A September 2026 visitor found the September dashi curry katsu don, topped with a mildly spicy sweet-vinegar sauce, a combination never met before and delicious to the last bite.', source: R + 'B536349523/' },
        { text: 'An October 2026 diner noted that the large size comes with 230 g of rice mixing basmati and Japonica, and judged the value modest.', source: R + 'B537491610/' },
        { text: 'An October 2026 breakfast visitor chose from three curries served with Thai rice and several side dishes.', source: R + 'B537452245/' },
      ],
      japanese_sources_summary: '公式サイト (spicegate.jp): SPICE GATE (スパイスゲート)、「スパイスをもっと身近に感じてほしい」、朝7:30からバスマティライスのスパイスカレー、チャイ、スパイスのスイーツやお酒、自分だけのガラムマサラ作り、スパイス界のビレッジバンガード、朝定食7:30〜11:00 (L.O)、ランチ〜ディナー11:30〜21:00 (L.O)、木曜のみ11:30〜15:00、定休日なし、下京区寺町通仏光寺下る恵美須之町546番地1 しきさい寺町ビル2F、INDIA GATE (ビリヤニ・カレー、中京区天神山町271)。食べログ: カレー・カフェ・アジア・エスニック、予約不可、22席、禁煙、カード・電子マネー・QR 可、2022年5月12日オープン、カレー WEST 百名店 2024・2026。口コミ (2026年9〜11月、英語): カレー1,300〜1,500円、出汁カレーかつ丼1,680円、サーモンのレアかつカレー大盛り1,980円、骨付きマトンカレー1,580円、ハヤシライス1,430円、クラフトコーラ500円、レモングラスサワー、白いらせん階段。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, ACCESS, R + 'B536349523/', R + 'B537047443/', R + 'B537452245/', R + 'B537491610/', R + 'B537873864/', R + 'B537919986/', R + 'B538107378/', R + 'B538482272/', R + 'B538644070/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; cards and QR payments.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町通仏光寺下る恵美須之町546番地1 しきさい寺町ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news to August 2026) and Tabelog listing; reviews dated through November 2026; Curry WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.000698, 135.767038); cross-checked: GSI 京都府京都市下京区恵美須之町546番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536349523/', R + 'B537491610/', R + 'B537873864/', R + 'B538482272/'],
    price_note: 'No menu read; prices from September–November 2026 reviews; specials change monthly.', last_checked: TODAY, items: [
      it('骨をしゃぶる為のマトンカレー', '', 'Bone-in mutton curry', '¥1,580', 'Curry', 'ask', 'no', 'November 2026.', 'mutton_curry'),
      it('', '', 'Salmon rare-katsu curry, large', '¥1,980', 'Curry', 'no', 'no', 'October 2026 special.', 'salmon_katsu_curry'),
      it('', '', 'Dashi curry katsu don', '¥1,680', 'Curry', 'no', 'no', 'September 2026 special.', 'dashi_curry_katsudon'),
      it('', '', 'Hayashi rice, small', '¥1,430', 'Curry', 'ask', 'no', 'October 2026.', 'hayashi_rice'),
      it('', '', 'Craft cola (set drink)', '¥500', 'Drinks', '', '', 'October 2026.', 'craft_cola'),
    ] }, {
    cuisine: 'スパイスの店とカレーのカフェ: バスマティライスのスパイスカレー、チャイ、スパイスのスイーツとお酒、店で自分だけのガラムマサラ作り (公式サイト)・7時半からの朝ごはんは3種のカレーから選び、副菜付き (公式サイト、2026年10月)・カレーは1,300〜1,500円、大盛りのカツカレーは約1,800円 (2026年9月)・月替わり: 出汁カレーかつ丼1,680円 (2026年9月)、トマトカレー、白いカレー、ディルバター、いくらのサーモンのレアかつカレー大盛り1,980円 (2026年10〜11月)・骨付きマトンカレー1,580円 (2026年11月)・ハヤシライス小1,430円 (2026年10月)・クラフトコーラ500円、レモングラスサワー (2026年の口コミ)',
    neighborhood: '仏光寺の南の寺町通。河原町駅から徒歩5分',
    gf_detail: '要確認。バスマティなど長粒米のスパイスカレーだが、月替わりはかつ (豚やサーモン) をのせることが多く、ハヤシライスもある。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。口コミのカレーは肉か魚 (マトン、かつ、サーモン) で、出汁を使う月替わりもある。ヴィーガンのカレーの名は出てこない (2026年の口コミ)。',
    notes: '[カレー・寺町、朝からカレーのスパイスの店] 寺町通の白いらせん階段を上がった「カレーとスパイスのセレクトショップ」。香りを確かめて買えるスパイスの棚 (ガラムマサラも自分で調合できる) と、朝7時半からバスマティライスのスパイスカレーを出すカウンター。カレーは1,300〜1,500円、月替わりにサーモンのレアかつカレー (大盛り1,980円) や出汁カレーかつ丼など。締めはクラフトコーラかレモングラスサワーで。辛さより香りのカレーという声が多い (骨付きマトンカレーは辛め)。ビリヤニの INDIA GATE と同じサイトに載る店。毎日営業、木曜は15時まで。',
  });
}

// ================================================================ 京都 ネーゼ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26005142/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_neze_sanjo_kiyamachi', name: '京都 ネーゼ (Kyoto Neze)', category: 'MOM_AND_POP',
    lat: 35.009049, lng: 135.770579, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta is the heart of the menu (carbonara, capellini, bolognese), with baguette, gratin and croquette-style dishes; grilled pork, prosciutto and smoked chicken are also served; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most dishes use egg, cheese, ham, seafood or meat (the signature carbonara uses five egg yolks); seasonal vegetable pasta appears, but no vegan dish is named (2024–2026 reviews).',
    hours_raw: '18:00–23:00, Monday to Saturday; closed Sunday and irregularly (Tabelog). Reservations taken, same day possible (Tabelog; March 2026). Mostly à la carte; an omakase course with a reservation by the day before — ¥6,000 in one Tabelog note, "from ¥8,800" in another (Tabelog; July 2026). 16 seats (8 counter, 8 table); non-smoking; cards accepted (Tabelog). Third floor, the third building north of Sanjo on Kiyamachi; 3 min from Keihan Sanjo Stn (Tabelog; September 2026). Opened 20 August 2007 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi just north of Sanjo — 3 min walk from Keihan Sanjo Stn',
    cuisine: 'Couple-run Italian with a daily-changing menu, mostly à la carte (Tabelog; 2026 reviews) · carbonara with Yamada Farm eggs, five yolks and no cream, the signature · cold capellini with sea urchin sauce and soil-grown green onions · prosciutto you slice yourself on the shop\'s machine · lightly smoked Omi chicken offal, served on a perforated dish over cherry chips · ayu spring rolls from the teppan, mushroom gratin, oysters in season · Fuji "phantom" pork, grilled · pastas such as Neapolitan, bolognese, shirasu, white asparagus, dashi peperoncino · baguette from Akane BAKERY in Nishijin · tiramisu, crème brûlée, gelato · Italian wine (2024–2026 reviews)',
    website: null, gmaps: gm('京都 ネーゼ 三条木屋町'), menu_url: null,
    notes: '[Italian · Sanjo Kiyamachi, a couple\'s third-floor trattoria] A sixteen-seat Italian on the third floor, three buildings up Kiyamachi from Sanjo, run since 2007 by chef Hiroshi Mori and the chef’s wife. The menu changes almost daily and is mostly à la carte: the must-order is the carbonara made with five Yamada Farm egg yolks and no cream; the cold sea-urchin capellini and the prosciutto you slice yourself on an Italian machine come close behind. Sit at the counter to talk with the chef. Around ¥8,000–15,000 a head with wine. Open 18:00–23:00, closed Sunday.',
    chef_bio: { chef_name: 'Hiroshi Mori (romaji from Tabelog\'s introduction; the kanji is not in a source)', roles: ['Chef (Tabelog: "Chef Hiroshi Mori ... runs this restaurant")', 'Runs the shop with the chef\'s wife (September 2026 review: "the owner\'s wife"; February and March 2026 reviews: run by a couple)'], origin: null,
      background: 'Per Tabelog\'s introduction: chef Hiroshi Mori previously worked at Santa Maria Novella Tisaneria; the menu changes almost daily, so tell the shop what you would like when booking. Tabelog gives the opening as 20 August 2007. Tabelog Italian WEST "Tabelog 100" 2021, 2023 and 2025. The chef keeps a blog on Ameba (Tabelog).',
      philosophy: null, specialty: 'Yamada Farm egg carbonara; sea-urchin capellini; self-sliced prosciutto.',
      anecdotes: [
        { text: 'A February 2026 visitor who came for the carbonara was invited to slice prosciutto on the machine before the meal — a first, and "thin and fluffy".', source: R + 'B524590563/' },
        { text: 'A July 2026 diner at the counter learned from the chef that the green onions on the sea-urchin capellini come from one of the few Aichi farms still growing them in soil.', source: R + 'B532516436/' },
        { text: 'Two older first-timers in September 2026 found the owner curious about how the pair had found the place, and the owner’s wife recommended the wine.', source: R + 'B535563654/' },
        { text: '"It\'s a go-to spot when I want to drink a little more or enjoy a delicious pasta dish to wrap up the night." — May 2026.', source: R + 'B460774323/' },
      ],
      japanese_sources_summary: '食べログ: 京都 ネーゼ、イタリアン、中京区三条木屋町上ル三軒目 三条木屋町ビルⅡ 3F、京阪三条駅から徒歩3分、月〜土 18:00〜23:00、日曜・不定休、予約可、16席 (カウンター8、テーブル8)、禁煙、カード可、2007年8月20日オープン、メインはアラカルト、前日までの予約でコース (6,000円、別の欄では8,800円から)、シェフのブログ (アメブロ)、イタリアン WEST 百名店 2021・2023・2025。店の紹介 (英訳): Santa Maria Novella Tisaneria にいたシェフ Hiroshi Mori、メニューはほぼ毎日替わる、鶏の内臓の燻製、生ハムを自分で切れる。口コミ (2024〜2026年、英語): 夫婦で営む、Yamada Farm の卵黄5個のカルボナーラ、ウニの冷製カッペリーニ、Akane BAKERY のバゲット。',
      confidence: 'medium', sources: [TB, R + 'B460774323/', R + 'B524260537/', R + 'B524590563/', R + 'B526670648/', R + 'B532516436/', R + 'B533248636/', R + 'B533318598/', R + 'B534691161/', R + 'B535563654/', R + 'B537339554/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats face the chef; book ahead, same day often possible.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区三条木屋町上ル三軒目 三条木屋町ビルⅡ 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Italian WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.009049, 135.770579); the address (三条木屋町上ル三軒目) has no town or lot, and GSI matches only the ward, so the pin rests on the Tabelog point, consistent with "158 meters from Sanjo" and "the third building north of Sanjo on Kiyamachi"; nearest other record kyoto_honke_gepaikeya_naomasa is 43 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu read; the omakase course is listed at ¥6,000 in one Tabelog note and "from ¥8,800" in another; reviewers spent about ¥8,000–15,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Omakase course (book by the day before)', '¥8,800', 'Courses', 'ask', 'ask', 'Tabelog: "from ¥8,800"; another Tabelog note says ¥6,000.', 'omakase'),
      it('', '', 'Carbonara with Yamada Farm eggs', '', 'Pasta', 'no', 'no', '2026 reviews.', 'carbonara'),
      it('', '', 'Cold capellini with sea urchin sauce', '', 'Pasta', 'no', 'no', '2026 reviews.', 'uni_capellini'),
    ] }, {
    cuisine: '夫婦で営むイタリアン。メニューはほぼ毎日替わり、主にアラカルト (食べログ、2026年の口コミ)・看板は Yamada Farm の卵の卵黄5個、生クリームなしのカルボナーラ・ウニのソースと土耕栽培のねぎの冷製カッペリーニ・店の機械で自分で切る生ハム・穴のあいた器で桜チップの香りをまとわせたOmi の鶏の内臓の軽い燻製・鉄板の鮎の春巻き、きのこのグラタン、季節の牡蠣・Fuji Phantom Pork のグリル・ナポリタン風、ボロネーゼ、しらす、ホワイトアスパラガス、出汁のペペロンチーノなどのパスタ・Nishijin の Akane BAKERY のバゲット・ティラミス、クレームブリュレ、ジェラート・イタリアワイン (2024〜2026年の口コミ)',
    neighborhood: '三条のすぐ北の木屋町。京阪三条駅から徒歩3分',
    gf_detail: '要確認。メニューの中心はパスタ (カルボナーラ、カッペリーニ、ボロネーゼ) で、バゲットやグラタンも。豚のグリル、生ハム、鶏の燻製もある。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ほとんどの料理に卵、チーズ、ハム、魚介、肉を使う (看板のカルボナーラは卵黄5個)。季節の野菜のパスタもあるが、ヴィーガンの料理名は出てこない (2024〜2026年の口コミ)。',
    notes: '[イタリアン・三条木屋町、夫婦で営む3階のトラットリア] 三条から木屋町を3軒上がったビルの3階、16席のイタリアン。2007年からシェフの Hiroshi Mori と奥さんが営む。メニューはほぼ毎日替わり、主にアラカルト。必ず頼みたいのは Yamada Farm の卵黄5個で生クリームを使わないカルボナーラ、続いてウニの冷製カッペリーニと、イタリアの機械で自分で切る生ハム。シェフと話すならカウンターへ。ワインを入れて一人8,000〜15,000円ほど。18時〜23時、日曜休み。',
  });
}

save();
