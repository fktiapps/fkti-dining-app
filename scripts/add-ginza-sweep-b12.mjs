// Ginza Station half-mile sweep (805 m), batch 12 — ramen (chains and groups). Researched 2026-10-24.
//   + 支那麺 はしご 本店 (dandanmen; Ginza 6 main shop since 2009, branches incl. Ningyōchō)
//   + ラーメン GINZA TON BOX 銀座本店 (pork chintan, tare by TOY BOX's owner; Roppongi branch)
//   + らーめん紫龍 東銀座店 · 長浜屋台やまちゃん 銀座店 (Fukuoka, founded 1986) · 銀座鴨そば 九代目けいすけ (Grand Cuisine)
// Deferred: 焼きあご塩らー麺たかはし (official site under maintenance). Out of radius: the Shimbashi san-tatsu leads
// (和市, 味方, ほりうち, 周郷 — 895–1,079 m).
// Sources: tonbox.jp, ramen-shiryu.jp, nagahama-yamachan.co.jp, grandcuisine.jp, Tabelog /en/ listings + dated 2026
// reviews. Pins: Tabelog geo + GSI + OSM. Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const MID = [null, 'Not described in any source read; scored at the midpoint.'];

// ================================================================ 支那麺 はしご 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13092185/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '05:00']), we = day(['11:00', '21:00']);
  put({
    id: 'tokyo_shinamen_hashigo_honten', name: '支那麺 はしご 本店 (Shina-men Hashigo, main shop)', category: 'OMNI',
    lat: 35.671621, lng: 139.761456,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The dandanmen are thin wheat noodles, the signature pāikō version adds a fried pork cutlet, and gyoza and fried spare ribs are on the menu. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The dandanmen comes topped with pork (a fried cutlet or thick-cut pork) in a sesame soup whose stock is not described; fried spare ribs and gyoza are the sides.',
    hours_raw: 'Mon–Fri 11:00–05:00 (next morning); Sat, Sun & holidays 11:00–21:00 (Tabelog). Cash only. Order at your seat.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ginza 6-chōme, toward the Corridor from Sukiyabashi — 3–4 min from Ginza Stn',
    cuisine: 'Dandanmen (tantanmen) with sesame and yuzu · pāikō (pork cutlet) dandanmen · open to 5 a.m. on weekdays', cuisine_type: 'ramen',
    website: null, gmaps: gm('支那麺 はしご 本店 銀座6-3-5'), menu_url: null,
    notes: "[Ramen · dandanmen, late night] The main shop of 支那麺 はしご, whose 'dandanmen' (its name for tantanmen) is a Ginza late-night institution: a 2026 diner remembers ending nights out at either Hashigo or the Nagahama stall Yamachan. Since August 2009 this Ginza 6-chōme counter has been the main shop, taking over from the old one in the Ginza Toshiba Building; the brand has more Ginza shops and one in Ningyōchō. The bowl is thin noodles in a nutty sesame soup with moderate heat, a lift of yuzu and a faint curry note. Regulars order pāikō dandanmen with a fried pork cutlet, about ¥1,200 in 2026, with rice to finish the soup, plus beer, fried spare ribs, gyoza and pickled mustard greens. Weekday lunch queues of twenty move fast. Order after you sit; cash only.",
    chef_bio: {
      chef_name: null, roles: ['main shop of the 支那麺 はしご group'],
      origin: 'This site became the main shop in August 2009 (Tabelog); opening date listed 1 June 2009',
      background: 'Tabelog says the former main shop in the Ginza Toshiba Building B1F (Ginza 5-2-1) was merged into this location in August 2009. Other はしご shops are in Ginza 8-chōme, Ginza 4-chōme and Ningyōchō. No source names the operator or founding year.',
      philosophy: null,
      specialty: 'Dandanmen; pāikō dandanmen; thick-pork dandanmen; fried spare ribs.',
      anecdotes: [
        { text: '"As soon as it arrived, the refreshing aroma of yuzu wafted up… followed by a subtle hint of curry that lingered pleasantly." — a regular\'s usual pāikō dandanmen, October 2026.', source: R + 'B537811666/' },
        { text: 'An 11th visit in October 2026: about twenty people in line at 12:30, seated in half an hour, then beer, fried spare ribs, gyoza and pickled mustard greens before the noodles.', source: R + 'B453363427/' },
        { text: 'A diner who usually eats at the Ningyōchō shop found the original looked the same but tasted different.', source: R + 'B24124904/' },
      ],
      japanese_sources_summary: '食べログ: 支那麺 はしご 本店、銀座6-3-5 第二ソワレ・ド・ビル1F、24席、平日11:00〜翌5:00、土日祝11:00〜21:00、現金のみ、2009年8月に銀座東芝ビルB1Fの本店をこちらに統合。2026年の口コミ: だんだんめん(担々麺)、排骨だんだんめん、ゴマ・柚子・カレーの香り、細麺、厚切り豚の担々麺1,200円、揚げスペアリブ・餃子・ザーサイ、着席後に注文。',
      confidence: 'medium', sources: [TB, R + 'B537811666/', R + 'B453363427/', R + 'B508031688/', R + 'B537614827/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at your seat; cash only. A bench outside for the queue, which turns over quickly.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Thin wheat noodles; fried pork cutlet (pāikō) and fried spare ribs.', source: R + 'B537811666/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Pork cutlet or thick pork on the dandanmen.', source: R + 'B508031688/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: [], broth_texture: null, tare: ['other'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles that "slide down easily".' },
      regional_style: [], sub_genre: ['tantanmen'],
      signature_bowl: '排骨だんだんめん (pāikō dandanmen, pork cutlet); thick-pork dandanmen ¥1,200 (October 2026).',
      chashu: 'Fried pork cutlet (pāikō) or thick-cut pork.',
      notable_toppings: ['fried pork cutlet', 'yuzu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork toppings.' },
      pantheon: "Ginza's 5 a.m. dandanmen: thin noodles in a nutty sesame soup with a breath of yuzu and a whisper of curry, a fried pork cutlet on top, and rice to drown in what's left.",
      profile: { richness: 3, oiliness: 3, clarity: 0, tare_strength: 3, noodle_firmness: 2, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537811666/', 'The rich, nutty flavor of sesame spread across my palate.'],
        oiliness: MID,
        clarity: [R + 'B537811666/', 'A sesame soup (opaque).'],
        tare_strength: [R + 'B537811666/', 'The moderate spiciness and depth of the broth clung perfectly to the noodles.'],
        noodle_firmness: [R + 'B508031688/', 'The thin noodles slide down easily.'],
        aroma_punch: [R + 'B508031688/', 'The aroma of sesame and yuzu makes for a luxurious bowl.'],
      },
      confidence: 'low', sources: [R + 'B537811666/', R + 'B508031688/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-3-5 第二ソワレ・ド・ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目3番5号 (go) 4m; OSM node 6292565693 「はしご銀座本店」 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537811666/', R + 'B508031688/', R + 'B453363427/'],
    price_note: 'No menu read. Dishes from October 2026 reviews; one price.', last_checked: TODAY, items: [
      it('だんだんめん', 'dandanmen', 'Dandanmen (house tantanmen)', '', 'Ramen', 'no', 'no', '', 'dandanmen'),
      it('排骨だんだんめん', 'paikou dandanmen', 'Pāikō dandanmen (fried pork cutlet)', '', 'Ramen', 'no', 'no', '', 'paikou_dandanmen'),
      it('', '', 'Thick-pork dandanmen', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'thick_pork_dandanmen'),
      it('', '', 'Fried spare ribs', '', 'Sides', 'no', 'no', '', 'fried_spare_ribs'),
      it('餃子', 'gyouza', 'Gyoza', '', 'Sides', 'no', 'no', '', 'gyoza'),
      it('ザーサイ', 'zaasai', 'Pickled mustard greens (zha cai)', '', 'Sides', 'ask', 'ask', '', 'zha_cai'),
      it('ライス', 'raisu', 'Rice', '', 'Rice', 'ask', 'ask', '', 'rice'),
    ] }, {
    cuisine: '担々麺(だんだんめん)・ゴマと柚子・排骨だんだんめん・平日は朝5時まで',
    neighborhood: '銀座六丁目、数寄屋橋からコリドー街方面。銀座駅から徒歩3〜4分',
    gf_detail: 'グルテンフリーではありません。だんだんめんは小麦の細麺で、看板の排骨は豚の揚げ物、餃子や揚げスペアリブもあります。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。だんだんめんには排骨や厚切りの豚がのり、ゴマのスープの出汁は書かれていません。サイドは揚げスペアリブと餃子です。',
    notes: '[ラーメン・担々麺・深夜] 担々麺を「だんだんめん」と呼ぶ支那麺 はしごの本店で、銀座の夜の締めの定番。2026年の口コミには、飲んだ後は「やまちゃんか、はしご」だったという声も。2009年8月に、銀座東芝ビル地下の旧本店をこの銀座六丁目の店に統合しました。銀座の他店や人形町にも店があります。細麺にコクのあるゴマのスープ、ほどよい辛さ、柚子の香りと、ほんのりカレーの風味。常連は排骨だんだんめん(2026年で1,200円前後)にライスを頼み、ビールと揚げスペアリブ、餃子、ザーサイも。平日昼の20人ほどの行列も回転は速め。着席後に注文、現金のみです。',
  });
}

// ================================================================ ラーメン GINZA TON BOX 銀座本店
{
  const OWN = 'https://tonbox.jp/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13314569/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '15:00'], ['17:00', '22:00']), b = day(['11:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_ginza_ton_box', name: 'ラーメン GINZA TON BOX 銀座本店 (Rāmen GINZA TON BOX)', category: 'OMNI',
    lat: 35.67159, lng: 139.761384,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Shoyu and shio ramen on wheat noodles; the shoyu bowls use a soy-sauce kaeshi. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is a clear pork stock ("pork, not chicken"), with back fat on the bowl and pork chashu (black pork on the anniversary special).',
    hours_raw: 'Sun–Thu & holidays 11:00–15:00 (L.O. 14:30) and 17:00–22:00 (L.O. 21:30); Fri, Sat & eves of holidays to 22:30 (L.O. 22:00) (Tabelog). Ticket machine.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: b, 5: b, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, between the Corridor and the old Dentsū-dōri — 3–4 min from Ginza Stn',
    cuisine: 'Pork chintan shoyu and shio ramen · kaeshi by the owner of TOY BOX', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('ラーメン GINZA TON BOX 銀座本店'), menu_url: OWN,
    notes: "[Ramen · pork chintan] A seven-seat counter opened October 2025 on the side street between the Corridor and old Dentsū-dōri that diners now call a ramen street. Its pitch: a clear soup built on pork rather than chicken, with a kaeshi (tare) by Yamagami, owner of the ramen shop TOY BOX. Shoyu and shio, each plain, with seasoned egg, special or chashu, ¥1,200–1,700. Diners describe plenty of back fat and oil that doesn't feel heavy, and a strong salt-and-soy balance. A second shop is in Roppongi. For its first anniversary on 10 October 2026 it served 100 bowls blending TON BOX's pork soup with TOY BOX's chicken.",
    chef_bio: {
      chef_name: null, roles: ['ramen brand; kaeshi by TOY BOX owner 山上 (Yamagami)'],
      origin: 'Ginza main shop opened 7 October 2025 (Tabelog); Roppongi branch',
      background: 'The brand site credits the kaeshi to 「トイ・ボックス山上店主」. Tabelog lists a qualified-invoice number registered to a company (T8180001112331). A 2026 diner names the owner in the kitchen on anniversary day as Yamamoto; this is not confirmed elsewhere.',
      philosophy: '「鶏ではなく豚の旨みたっぷりの清湯スープ」 — a clear soup full of pork, not chicken.',
      specialty: 'Pork chintan shoyu and shio ramen.',
      anecdotes: [
        { text: 'First anniversary, 10 October 2026: 100 lunch sets blending TON BOX\'s pork chintan with TOY BOX\'s chicken broth, pork fat and chicken fat together; over twenty people queued before opening.', source: R + 'B537118373/' },
        { text: '"The street between Corridor and the old Dentsu Street has seemingly become a ramen street attracting foreigners."', source: R + 'B537677032/' },
      ],
      japanese_sources_summary: '公式(tonbox.jp): 鶏ではなく豚の旨みたっぷりの清湯スープに、トイ・ボックス山上店主によるかえし(タレ)。醤油ラーメン1,200円・味玉1,400円・特製1,600円・チャーシュー1,700円、塩も同額。銀座本店・六本木店。銀座本店1周年記念の限定ラーメン(10月10日、100杯)。食べログ: 2025年10月7日オープン、7席、適格請求書T8180001112331。',
      confidence: 'medium', sources: [OWN, TB, R + 'B537118373/', R + 'B537584592/', R + 'B537452504/', R + 'B537677032/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a ticket and wait outside; seven counter seats; coat hangers provided. Many overseas visitors.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Wheat-noodle shoyu and shio ramen only.', source: OWN }],
      soy_sauce_wheat: [{ text: 'Shoyu ramen with a kaeshi (tare) by TOY BOX\'s owner.', source: OWN }],
      vegan_cross_contact: [{ text: 'Clear pork soup with back fat.', source: OWN }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['pork'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: ['lard'], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '特製醤油ラーメン (special shoyu ramen) — ¥1,600.',
      chashu: 'Pork chashu; black-pork chashu on the anniversary special.',
      notable_toppings: ['back fat', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork soup.' },
      pantheon: 'A pork-first clear shoyu: clear pork stock under a scatter of back fat, seasoned with a kaeshi from the man behind TOY BOX.',
      profile: { richness: 3, oiliness: 4, clarity: 4, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537452504/', 'It had a deep flavor and was very delicious.'],
        oiliness: [R + 'B537452504/', 'The broth was rich with back fat and a good amount of oil, but it didn\'t feel too heavy.'],
        clarity: [OWN, '「清湯スープ」.'],
        tare_strength: [R + 'B537584592/', 'The richness of the soy sauce and a strong saltiness balance it out.'],
        noodle_firmness: MID,
        aroma_punch: MID,
      },
      confidence: 'medium', sources: [OWN, R + 'B537452504/', R + 'B537584592/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-3-5 第一高橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Brand site news dated October 2026; Tabelog reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目3番5号 (go) 7m; neighbours はしご本店 in the same block; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [OWN],
    price_note: 'Full ramen menu and prices from the brand site.', last_checked: TODAY, items: [
      it('醤油ラーメン', 'shouyu raamen', 'Shoyu ramen', '¥1,200', 'Ramen', 'no', 'no', '', 'shoyu_ramen'),
      it('味玉醤油ラーメン', 'ajitama shouyu raamen', 'Seasoned-egg shoyu ramen', '¥1,400', 'Ramen', 'no', 'no', '', 'ajitama_shoyu_ramen'),
      it('特製醤油ラーメン', 'tokusei shouyu raamen', 'Special shoyu ramen', '¥1,600', 'Ramen', 'no', 'no', '', 'tokusei_shoyu_ramen'),
      it('チャーシュー醤油ラーメン', 'chaashuu shouyu raamen', 'Chashu shoyu ramen', '¥1,700', 'Ramen', 'no', 'no', '', 'chashu_shoyu_ramen'),
      it('塩ラーメン', 'shio raamen', 'Shio ramen', '¥1,200', 'Ramen', 'no', 'no', '', 'shio_ramen'),
      it('味玉塩ラーメン', 'ajitama shio raamen', 'Seasoned-egg shio ramen', '¥1,400', 'Ramen', 'no', 'no', '', 'ajitama_shio_ramen'),
      it('特製塩ラーメン', 'tokusei shio raamen', 'Special shio ramen', '¥1,600', 'Ramen', 'no', 'no', '', 'tokusei_shio_ramen'),
      it('チャーシュー塩ラーメン', 'chaashuu shio raamen', 'Chashu shio ramen', '¥1,700', 'Ramen', 'no', 'no', '', 'chashu_shio_ramen'),
    ] }, {
    cuisine: '豚の清湯の醤油・塩ラーメン・トイ・ボックス店主のかえし',
    neighborhood: '銀座六丁目、コリドー街と旧電通通りの間。銀座駅から徒歩3〜4分',
    gf_detail: 'グルテンフリーではありません。醤油・塩ラーメンは小麦の麺で、醤油は醤油のかえしを使います。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。スープは「鶏ではなく豚」の清湯で、背脂と豚チャーシューがのります(1周年限定は黒豚)。',
    notes: '[ラーメン・豚清湯] 2025年10月に開いたカウンター7席の店で、コリドー街と旧電通通りの間の、口コミで「ラーメン通り」と呼ばれる通りにあります。売りは鶏ではなく豚の旨みの清湯スープに、人気店トイ・ボックスの山上店主によるかえし。醤油と塩、それぞれ並・味玉・特製・チャーシューで1,200〜1,700円。背脂と油は多めでも重くなく、醤油のコクと塩気がしっかりという声。六本木にも店があります。2026年10月10日の1周年には、TON BOXの豚とトイ・ボックスの鶏を合わせた限定を100杯提供しました。',
  });
}

// ================================================================ らーめん紫龍 東銀座店
{
  const OWN = 'http://ramen-shiryu.jp/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13136682/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '23:45']), we = day(['11:00', '22:30']);
  put({
    id: 'tokyo_ramen_shiryu_higashiginza', name: 'らーめん紫龍 東銀座店 (Rāmen Shiryū, Higashi-Ginza)', category: 'OMNI',
    lat: 35.671559, lng: 139.768186,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The noodles are wheat, kneaded with the wheat bran. The gyoza come with soy-based or miso dipping sauces. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is pork knuckle (genkotsu) and chicken feet (momiji) boiled hard, with back fat and pork-belly or pork-loin chashu.',
    hours_raw: 'Mon–Fri 11:00–23:45 (L.O. 23:15); Sat, Sun & holidays 11:00–22:30 (L.O. 22:00); open year-round (Tabelog). IC and e-money accepted; no cards. Ticket machine.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 3-chōme, a low standalone building — 1 min from Higashi-Ginza Stn exit A8',
    cuisine: 'Customisable pork-and-chicken ramen (back fat, garlic, noodle width, chashu cut, 3 of 10 toppings) · gyoza', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('らーめん紫龍 東銀座店 銀座3-10-18'), menu_url: null,
    notes: "[Ramen · build your own] A single-storey ramen house near Ginza 3-chōme that says its ramen took ten years to perfect. The soup is pork knuckle and chicken feet boiled over a fierce flame; the noodles are kneaded with wheat bran for flavour and bounce. You choose back fat, garlic, noodle width (thin or medium-thick) and firmness, chashu (pork belly or loin), and three of ten toppings: seasoned egg, menma, nori, wood ear, white onion, green onion, spinach, spicy miso, meat sauce or extra vegetables (five with the 極 bowl, ¥1,100 in 2026). Free rice with lunch, draft beer, and gyoza with house soy or miso sauces. Some diners find it close to Jirō-style when loaded with garlic and fat.",
    chef_bio: {
      chef_name: null, roles: ['ramen shop (operator not named)'],
      origin: 'Ginza 3-10-18; opening year not found',
      background: 'The shop site describes the ramen as ten years in the making. No source names the owner or operator; the Tabelog name "東銀座店" suggests other shops but none are listed on the site.',
      philosophy: '「完成に十年費やした至極のラーメン！」',
      specialty: 'Customisable genkotsu-and-momiji ramen; gyoza with two house sauces.',
      anecdotes: [
        { text: '「背脂、にんにくの量、麺の太さ、硬さ、チャーシューの種類（豚バラ、豚ロース）… 厳選こだわりトッピング10種の中から3種」', source: OWN },
        { text: 'A September 2026 diner chose five toppings from ten with the ¥1,100 Goku Shiryū.', source: R + 'B445724364/' },
        { text: '"To my surprise, I was served Jiro-style ramen, so I wore a mask for work the next day."', source: R + 'B537945428/' },
      ],
      japanese_sources_summary: '公式(ramen-shiryu.jp): 完成に十年費やした至極のラーメン、ゲンコツともみじを超強火で炊き上げたスープ、小麦の殻を一緒に練りこんだ麺、背脂・にんにく・麺の太さ・硬さ・チャーシュー(豚バラ・豚ロース)を選択、トッピング10種から3種、餃子のたれ(旨辛醤油・こく深味噌)、東銀座駅A8出口徒歩1分。食べログ: 27席、平日11:00〜23:45、土日祝〜22:30、年中無休、電子マネー可。2026年の口コミ: 極紫龍1,100円(トッピング5種)、昼はライス無料、生ビール。',
      confidence: 'medium', sources: [OWN, TB, R + 'B445724364/', R + 'B537105925/', R + 'B510179888/', R + 'B537945428/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine, then a series of choices (fat, garlic, noodles, chashu, toppings) — the topping list helps. IC and e-money accepted.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Wheat noodles kneaded with the wheat bran (小麦の殻).', source: OWN }],
      soy_sauce_wheat: [{ text: 'Gyoza sauces: spicy soy and rich miso.', source: OWN }],
      vegan_cross_contact: [{ text: 'Genkotsu (pork knuckle) and momiji (chicken feet) soup; back fat.', source: OWN }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['pork', 'chicken'], broth_texture: null, tare: [], aroma_oil: ['lard'], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Thin or medium-thick to choose; kneaded with wheat bran; firmness to order.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '極紫龍 (Goku Shiryū, five toppings) — ¥1,100 (September 2026).',
      chashu: 'Pork belly or pork loin, by choice.',
      notable_toppings: ['back fat', 'garlic', 'wood ear', 'spicy miso', 'meat sauce', 'white onion', 'spinach'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and chicken soup.' },
      pantheon: 'A ten-years-in-the-making Higashi-Ginza bowl you assemble yourself: genkotsu-and-momiji soup boiled hard, bran-flecked noodles, and as much back fat and garlic as your next meeting allows.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B510179888/', 'The broth had a rich and flavorful taste.'],
        oiliness: [OWN, 'Back fat amount chosen per bowl.'],
        clarity: [OWN, 'Genkotsu and momiji 「超強火で炊き上げた」 — a hard-boiled stock.'],
        tare_strength: MID,
        noodle_firmness: [R + 'B537105925/', 'Medium-thick noodles were just the right texture and very satisfying.'],
        aroma_punch: [R + 'B537105925/', 'Extra back fat and garlic made it incredibly delicious (garlic is optional).'],
      },
      confidence: 'low', sources: [OWN, R + 'B510179888/', R + 'B537105925/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-10-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site live; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目10番18号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, R + 'B445724364/', R + 'B510179888/', R + 'B536275138/'],
    price_note: 'No menu read in full. One price from a September 2026 review.', last_checked: TODAY, items: [
      it('紫龍らーめん', 'shiryuu raamen', 'Shiryū ramen (3 toppings of 10)', '', 'Ramen', 'no', 'no', '', 'shiryu_ramen'),
      it('極紫龍', 'goku shiryuu', 'Goku Shiryū (5 toppings of 10)', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'goku_shiryu'),
      it('紫龍特製餃子', 'shiryuu tokusei gyouza', 'Shiryū gyoza (spicy-soy or miso sauce)', '', 'Sides', 'no', 'no', '', 'gyoza'),
      it('ライス', 'raisu', 'Rice (free at lunch)', '', 'Rice', 'ask', 'ask', '', 'rice'),
      it('生ビール', 'nama biiru', 'Draft beer', '', 'Drinks', 'no', 'ask', 'Beer is barley.', 'draft_beer'),
    ] }, {
    cuisine: 'カスタムできる豚骨・鶏のラーメン(背脂・にんにく・麺・チャーシュー・トッピング10種から3種)・餃子',
    neighborhood: '銀座三丁目、平屋のラーメン店。東銀座駅A8出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。麺は小麦の殻ごと練り込んだ小麦麺で、餃子のたれは旨辛醤油とこく深味噌です。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。スープはゲンコツともみじを超強火で炊き上げたもので、背脂、豚バラか豚ロースのチャーシューがのります。',
    notes: '[ラーメン・カスタム] 銀座三丁目近くの平屋のラーメン店で、完成に十年費やしたというラーメンが売り。スープはゲンコツともみじを超強火で炊き、麺は小麦の殻ごと練り込んで風味と弾力を出しています。背脂、にんにく、麺の太さ(細麺・中太)と硬さ、チャーシュー(豚バラ・豚ロース)を選び、味玉・メンマ・海苔・きくらげ・白髪ねぎ・青ねぎ・ほうれん草・辛味噌・肉味噌・野菜増しの10種からトッピング3種(極は5種、2026年で1,100円)。昼はライス無料、生ビールや、旨辛醤油・こく深味噌のたれで食べる餃子も。にんにくと背脂を足すと二郎系に近いという声もあります。',
  });
}

// ================================================================ 長浜屋台やまちゃん 銀座店
{
  const OWN = 'https://nagahama-yamachan.co.jp/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13004982/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '04:00']);
  put({
    id: 'tokyo_nagahama_yatai_yamachan_ginza', name: '長浜屋台やまちゃん 銀座店 (Nagahama Yatai Yamachan, Ginza)', category: 'OMNI',
    lat: 35.670431, lng: 139.768437,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Hakata-Nagahama tonkotsu ramen on thin wheat noodles, ordered by firmness. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A milky pork-bone (tonkotsu) soup with chashu; vinegared offal (su-motsu) and a chashu rice bowl are on the menu.',
    hours_raw: 'Tue–Sat 11:00–04:00 (next morning); closed Sundays and Mondays (Tabelog). IC and QR accepted; no cards. Ticket machine.',
    hours: { 1: a, 2: a, 3: a, 4: a, 5: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 3-chōme, Higashi-Ginza side — 2–3 min from Higashi-Ginza Stn',
    cuisine: 'Hakata Nagahama tonkotsu ramen from a 1986 Fukuoka yatai · noodles by firmness · su-motsu and draft beer', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('長浜屋台やまちゃん 銀座店'), menu_url: null,
    notes: "[Ramen · Hakata Nagahama] The Tokyo outpost of やまちゃん, a Fukuoka business founded in 1986 as a street stall (yatai) and now shops in Tenjin and Nakasu plus this one in Ginza. The company says it moved from stall to shop without losing the yatai style. In Tokyo the menu stays centred on ramen: a milky pork-bone soup that the company describes as rich but clean and free of smell, thin noodles ordered by firmness (hard, extra hard or soft), and extra noodles. Under a red lantern and noren, it is a classic end to a Higashi-Ginza night, open until 4 a.m.; a 2026 diner remembers ending nights at Yamachan or Hashigo. Hakata-mori with toppings ¥1,400; negi bokkoshi, spicy noodles, vinegared offal, draft beer, and a free small rice at lunch.",
    chef_bio: {
      chef_name: null, roles: ['Tokyo shop of 長浜屋台やまちゃん (Fukuoka)'],
      origin: 'Founded 1986 in Fukuoka as a Nagahama yatai',
      background: 'The company runs shops in Tenjin and Nakasu (Fukuoka) and Ginza (Tokyo).',
      philosophy: '「だれでも気軽に入店できる屋台の良さやスタイルを崩すことなく」 — keep the open feel of a yatai.',
      specialty: 'Nagahama ramen; Hakata-mori; su-motsu.',
      anecdotes: [
        { text: '「オープン当初より、材料の骨にこだわり、じっくり時間をかけ、コクがあるのにさっぱりと臭みのない豚骨スープを作っています」', source: OWN },
        { text: 'A colleague from Kyushu told one October 2026 diner that this is what authentic Kyushu tonkotsu ramen is like.', source: R + 'B537455383/' },
        { text: '"After a night of drinking in this area, it was customary to end the evening at either Yamachan or Hashigo" — back at 2:30 a.m. after five or six years.', source: R + 'B537480276/' },
      ],
      japanese_sources_summary: '公式(nagahama-yamachan.co.jp): やまちゃんの創業は1986年、屋台から店舗へ、福岡の天神・中洲の2店舗、東京は銀座店(銀座3-11-10 橋本ビル1F)でラーメン中心、コクがあるのにさっぱりと臭みのない豚骨スープ。食べログ: 火〜土11:00〜翌4:00、日月休、17席、交通系IC・QR可。2026年の口コミ: 長浜ラーメン、博多盛1,400円、ねぎぼっこしラーメン、辛麺、酢もつ、生ビール、麺の硬さ、昼は小ライス無料。',
      confidence: 'medium', sources: [OWN, TB, R + 'B537455383/', R + 'B537480276/', R + 'B537584956/', R + 'B87336841/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; say your noodle firmness (katamen, barikata, yawamen). IC and QR accepted; open late.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Thin wheat noodles ordered by firmness.', source: R + 'B537226878/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Pork-bone soup made from carefully chosen bones.', source: OWN }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['pork'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Hakata-style thin noodles; firmness to order; extra noodles available.' },
      regional_style: ['Hakata'], sub_genre: ['ramen'],
      signature_bowl: '長浜ラーメン (Nagahama ramen); 博多盛 ¥1,400 (October 2026).',
      chashu: 'Chashu; chashu rice bowl on the side.',
      notable_toppings: ['wood ear (kikurage)', 'soft-boiled egg', 'negi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: "A 1986 Nagahama street stall's Tokyo outpost: milky, clean tonkotsu, thin noodles called by firmness, vinegared offal and draft beer under the red lantern until 4 a.m.",
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 2, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537455383/', 'The flavor of the tonkotsu is rich while the broth is light and exquisite.'],
        oiliness: [R + 'B537226878/', 'The broth had a slightly oily impression, but it was within the normal range.'],
        clarity: [R + 'B537584956/', 'The milky white tonkotsu broth.'],
        tare_strength: [R + 'B537929352/', 'It lacked a strong punch and left a rather neutral impression.'],
        noodle_firmness: [R + 'B537226878/', 'I ordered the noodles firm, and they were just right.'],
        aroma_punch: [OWN, '「臭みのない豚骨スープ」.'],
      },
      confidence: 'medium', sources: [OWN, R + 'B537455383/', R + 'B537226878/', R + 'B537584956/', R + 'B537929352/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-10 橋本ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Company site lists the Ginza shop; Tabelog reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番10号 (go) 3m; OSM node 6296041592 「やまちゃん 銀座店」 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537584956/', R + 'B537226878/', R + 'B537929352/', R + 'B87336841/'],
    price_note: 'No menu read. Dishes from October 2026 reviews; one price.', last_checked: TODAY, items: [
      it('長浜ラーメン', 'nagahama raamen', 'Nagahama ramen (tonkotsu)', '', 'Ramen', 'no', 'no', 'Firmness to order.', 'nagahama_ramen'),
      it('博多盛', 'hakata mori', 'Hakata-mori (loaded tonkotsu ramen)', '¥1,400', 'Ramen', 'no', 'no', 'October 2026.', 'hakata_mori'),
      it('ねぎぼっこしラーメン', 'negi bokkoshi raamen', 'Negi bokkoshi ramen (heaped green onion)', '', 'Ramen', 'no', 'no', '', 'negi_ramen'),
      it('辛麺', 'karamen', 'Spicy noodles', '', 'Ramen', 'no', 'no', '', 'spicy_noodles'),
      it('替え玉', 'kaedama', 'Extra noodles', '', 'Ramen', 'no', 'ask', '', 'kaedama'),
      it('酢もつ', 'sumotsu', 'Vinegared offal', '', 'Sides', 'ask', 'no', '', 'sumotsu'),
      it('チャーシュー丼', 'chaashuu don', 'Chashu rice bowl', '', 'Rice', 'no', 'no', '', 'chashu_don'),
    ] }, {
    cuisine: '1986年創業の福岡・長浜屋台の豚骨ラーメン・麺の硬さを選べる・酢もつと生ビール',
    neighborhood: '銀座三丁目、東銀座側。東銀座駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。博多長浜の豚骨ラーメンで、小麦の細麺を硬さを選んで注文します。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。乳白色の豚骨スープにチャーシュー。酢もつやチャーシュー丼もあります。',
    notes: '[ラーメン・博多長浜] 1986年に福岡の屋台として創業し、現在は天神・中洲と銀座に店を持つやまちゃんの東京店。屋台の気軽さを崩さずに店舗にしたといいます。東京はラーメンが中心で、会社いわく「コクがあるのにさっぱりと臭みのない」乳白色の豚骨スープ、硬さを選べる細麺と替え玉。赤ちょうちんとのれんの店で、深夜4時まで開く東銀座の締めの定番。2026年の口コミには、飲んだ後は「やまちゃんか、はしご」だったという声も。博多盛1,400円、ねぎぼっこし、辛麺、酢もつ、生ビール、昼は小ライス無料。',
  });
}

// ================================================================ 銀座鴨そば 九代目けいすけ 銀座店
{
  const OWN = 'http://www.grandcuisine.jp/keisuke/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13171787/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '22:00']);
  put({
    id: 'tokyo_kamo_soba_kyudaime_keisuke', name: '銀座鴨そば 九代目けいすけ 銀座店 (Ginza Kamo Soba Kyūdaime Keisuke)', category: 'OMNI',
    lat: 35.669264, lng: 139.764708,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Duck ramen, tsukemen, wonton soba and duck-oil abura-soba, all on wheat noodles; wonton wrappers are wheat. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is a duck broth with duck chashu, and the abura-soba is dressed with duck oil and minced meat.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30) (Tabelog). Cards, e-money and QR accepted. Ticket machine.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, behind GINZA SIX — 3 min from Higashi-Ginza Stn',
    cuisine: 'Duck (kamo) soba and tsukemen · duck wonton · duck-oil abura-soba', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('九代目けいすけ 銀座店 銀座6-12-15'), menu_url: null,
    notes: "[Ramen · duck] A duck-ramen shop of the Keisuke brand, opened in August 2014 behind GINZA SIX. The brand belongs to Grand Cuisine, whose Keisuke shops date from 2005 and build 'ramen as cuisine' from Japanese and French technique, each brand on one theme (miso, shoyu, chicken paitan and more). Here the theme is duck: a deep duck broth, moist duck chashu, duck wontons, duck tsukemen, and 一番搾り duck-oil abura-soba (¥1,100, September 2026). Seasoned-egg kamo soba was ¥1,350 and all toppings ¥1,800 in 2026. About eight counter seats and two tables for four; diners describe a calm, Japanese-restaurant feel amid the ramen queues of the street.",
    chef_bio: {
      chef_name: null, roles: ['brand of 株式会社グランキュイジーヌ (Keisuke group)'],
      origin: 'Ginza shop opened 20 August 2014 (Tabelog); Keisuke brand since 2005',
      background: 'Grand Cuisine says its Keisuke brand opened in 2005 and fuses Japanese and French technique into "ramen as cuisine", with brands specialised by theme.',
      philosophy: '「ラーメン業界の老舗になること」「創造性と独自性の追求」 — the company\'s stated principles.',
      specialty: 'Kamo soba; duck wonton soba; duck-oil abura-soba.',
      anecdotes: [
        { text: '"The broth was rich with the deep flavor of duck, making it hard to resist drinking it all… The duck chashu was moist and tender."', source: R + 'B535346349/' },
        { text: '"This restaurant stands out with a certain elegance reminiscent of a traditional Japanese eatery" among the ramen lines behind GINZA SIX.', source: R + 'B536857479/' },
      ],
      japanese_sources_summary: 'グランキュイジーヌ公式: 2005年開業のけいすけブランド、和食とフレンチの技術を融合した「料理としてのラーメン」、味噌・醤油・鶏白湯・天丼などテーマ特化ブランド。食べログ: 銀座鴨そば 九代目けいすけ 銀座店、銀座6-12-15、2014年8月20日オープン、18席、毎日11:00〜22:00。2026年の口コミ: 鴨そば味玉1,350円、ワンタン400円、全部のせ1,800円、一番搾り鴨油そば1,100円、鴨ワンタンそば、つけ麺。',
      confidence: 'medium', sources: [OWN, TB, R + 'B535346349/', R + 'B537407890/', R + 'B534899653/', R + 'B536857479/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter and two tables for four; all payment types.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Wheat noodles and wonton.', source: R + 'B535346349/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Duck broth and duck chashu.', source: R + 'B535346349/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['duck'], broth_texture: null, tare: [], aroma_oil: ['duck oil'], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Chewy (abura-soba, 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'abura-soba'],
      signature_bowl: '鴨そば (kamo soba) — ¥1,350 with seasoned egg (October 2026).',
      chashu: 'Moist, tender duck chashu.',
      notable_toppings: ['duck wonton (+¥400)', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Duck broth.' },
      pantheon: 'The Keisuke group in duck mode: a deep, drinkable duck broth, tender duck chashu and silky duck wontons, served with a quiet Japanese-restaurant poise behind GINZA SIX.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535346349/', 'The broth was rich with the deep flavor of duck.'],
        oiliness: MID,
        clarity: MID,
        tare_strength: MID,
        noodle_firmness: [R + 'B534899653/', 'The noodles were chewy (abura-soba).'],
        aroma_punch: [R + 'B536857479/', 'The broth soba, which fully brings out the umami and aroma of the duck.'],
      },
      confidence: 'low', sources: [R + 'B535346349/', R + 'B534899653/', R + 'B536857479/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-12-15 いちご銀座612ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目12番15号 (go) 7m; OSM node 6303385785 「銀座鴨そば 九代目けいすけ 銀座店」 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537407890/', R + 'B534899653/', R + 'B534986520/', R + 'B535346349/'],
    price_note: 'No menu read. Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('鴨そば', 'kamo soba', 'Kamo soba (duck ramen)', '', 'Ramen', 'no', 'no', '', 'kamo_soba'),
      it('味玉鴨そば', 'ajitama kamo soba', 'Seasoned-egg kamo soba', '¥1,350', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_kamo_soba'),
      it('全部のせ', 'zenbu nose', 'All-toppings kamo soba', '¥1,800', 'Ramen', 'no', 'no', 'September 2026.', 'all_toppings'),
      it('鴨ワンタンそば', 'kamo wantan soba', 'Duck wonton soba', '', 'Ramen', 'no', 'no', '', 'duck_wonton_soba'),
      it('鴨つけ麺', 'kamo tsukemen', 'Duck tsukemen', '', 'Ramen', 'no', 'no', '', 'duck_tsukemen'),
      it('一番搾り鴨油そば', 'ichiban shibori kamo abura soba', 'Duck-oil abura-soba', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'duck_abura_soba'),
      it('ワンタン', 'wantan', 'Wonton topping', '¥400', 'Toppings', 'no', 'no', '', 'wonton'),
    ] }, {
    cuisine: '鴨そば・鴨つけ麺・鴨ワンタン・鴨油そば',
    neighborhood: '銀座六丁目、GINZA SIXの裏手。東銀座駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。鴨のラーメン、つけ麺、ワンタンそば、鴨油の油そばはすべて小麦麺で、ワンタンの皮も小麦です。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。スープは鴨出汁で鴨チャーシューがのり、油そばは鴨油と挽き肉で和えます。',
    notes: '[ラーメン・鴨] グランキュイジーヌの「けいすけ」ブランドの鴨そばの店で、2014年8月にGINZA SIXの裏手に開業。けいすけは2005年創業、和食とフレンチの技術を融合した「料理としてのラーメン」を掲げ、味噌・醤油・鶏白湯などテーマ別のブランドを展開しています。ここのテーマは鴨。深い鴨出汁、しっとりした鴨チャーシュー、鴨ワンタン、鴨つけ麺、一番搾り鴨油そば(2026年9月で1,100円)。味玉鴨そば1,350円、全部のせ1,800円(2026年)。カウンター8席ほどと4人掛け2卓で、ラーメンの行列が並ぶ通りの中で和食店のような落ち着きがあると評されています。',
  });
}

save();
