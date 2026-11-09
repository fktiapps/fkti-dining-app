// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 99.
//   + YURURI (tropical-styled izakaya of farm-direct produce in a machiya on Kawaramachi north of Takeyamachi) — rest
//   + 613 (ロクイチサン) (one-woman café of French toast and brunch at Higashiyama-Nijo) — rest
//   - skip 26042446 Bakery Neru! (retail food shop, Greg 11-07 ruling)
//   - skip 26013652 ぎをん為治郎 清水坂店 (large parent: 本家西尾八ッ橋; earlier rulings 26027207, 26027430)
//   - skip 26038948 ととよし (thin)
//   + ユニオン (Showa-era kissaten on Muromachi since 1953; smoking allowed) — rest
//   - skip 26035864 京のあられ処 橘屋 烏丸二条店 (retail food shop, Greg 11-07 ruling)
//   - skip 26040772 樋口清栄門 (retail food shop, Greg 11-07 ruling)
//   + ふじ亭 (family-run Kyoto bento lunch spot near the Gosho, Takeyamachi-Tominokoji) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no THAN or WILL matches; 為治郎 ruled.
//   ととよし: a February 2023 reviewer calls it a new venture of the bar 酒と肴 柳野 (in data as kyoto_shuto_yanagino); skipped as
//   thin, not as a branch. Same-name counts (2026-11-08): one each among those drafted.
//   None of the drafted shops is in data/kyoto.json.
//   Charges (Tabelog, Japanese originals): YURURI 「夜のみ５００円（お通し代として）」; others none listed.
//   No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-99');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042446', 'retail food shop (Greg 11-07 ruling): Bakery Neru! is a takeaway bakery the size of three tatami mats, opened January 2025; no eat-in sourced (https://tabelog.com/en/kyoto/A2601/A260202/26042446/dtlrvwlst/B527172202/; https://tabelog.com/en/kyoto/A2601/A260202/26042446/).');
skip('26013652', 'large parent: ぎをん為治郎 清水坂店 is a café of the yatsuhashi maker 本家西尾八ッ橋 (same rulings as 26027207 and 26027430) (https://tabelog.com/en/kyoto/A2601/A260301/26013652/).');
skip('26038948', 'thin: ととよし has one 2025–26 Tabelog review with detail (November 2025); the others are a one-liner or blank — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260302/26038948/).');
skip('26035864', 'retail food shop (Greg 11-07 ruling): 京のあられ処 橘屋 烏丸二条店 is an arare (rice-cracker) shop, a branch of 橘屋 (arare-tachibanaya.jp); no eat-in sourced (https://tabelog.com/en/kyoto/A2601/A260202/26035864/).');
skip('26040772', 'retail food shop (Greg 11-07 ruling): 樋口清栄門 is a takeaway mitarashi-dango shop opened February 2024 by a sugar wholesaler; dango are boxed to go or eaten on the street; no founding date of the shop or GF/vegan claim sourced (https://seemon.jp/2024/01/24/001/; https://tabelog.com/en/kyoto/A2601/A260202/26040772/).');

// ================================================================ YURURI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025040/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:30', '23:00']);
  put({
    id: 'kyoto_yururi_kawaramachi', name: 'YURURI', category: 'OMNI',
    lat: 35.015972, lng: 135.768752, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried dishes, chicken nanban, dengaku and courses with soy-seasoned dishes (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, Tanba chicken, prawns, meat courses (2024–26 reviews).',
    hours_raw: 'Lunch 12:00–14:30 (food last order 14:00) and dinner 17:30–23:00 (food last order 22:15), daily (Tabelog). Lunch is by reservation only, for two or more, courses only (Tabelog). 「夜のみ５００円（お通し代として）」 — ¥500 per person at night, as the appetizer charge; the appetizer is a five-item platter (Tabelog; July 2026). Cards (VISA, Master); no e-money or QR (Tabelog). 40 seats with private rooms; well-spaced tables, wheelchair-friendly in a September 2024 review. A renovated machiya with a tropical, Hawaiian-style interior on the west side of Kawaramachi-dori north of Takeyamachi, near Jingu-Marutamachi (Tabelog; 2024 and July 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Takeyamachi — Marutamachi',
    cuisine: 'Creative izakaya of produce sourced direct, with a resort-style interior · five-item appetizer platter, five-kind sashimi, tofu salad, fried dishes, chilled sake (July 2026) · course meals with seafood from Goto in Nagasaki (June 2025), all-you-can-drink courses with two meat servings (January 2025) · salt-grilled Tanba chicken, dengaku, grilled prawn heads (2023–24 reviews)',
    website: null, gmaps: gm('YURURI 京都 河原町 竹屋町'), menu_url: TB,
    notes: '[Izakaya · Kawaramachi-Marutamachi] A friendly machiya izakaya on Kawaramachi near Marutamachi, decorated like a tropical resort: a lavish five-item appetizer platter (the ¥500 evening charge), five-kind sashimi, seafood sent direct from Goto in Nagasaki, fried dishes and courses with plenty of sake. Lunch is courses for two or more by reservation.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), described as friendly and warm (April 2026)'], origin: null,
      background: 'Per Tabelog and reviews: an izakaya opened 8 October 2014 in a renovated Kyoto machiya, sourcing seafood direct from Goto, Nagasaki (June 2025).',
      philosophy: null, specialty: 'Five-item appetizer platter; farm- and port-direct ingredients.',
      anecdotes: [
        { text: 'A July 2026 visitor escaping the Gion Matsuri crowds found the ¥500 appetizer a five-item platter lavish enough to drink on, then had five-kind sashimi and chilled sake poured to overflowing.', source: R + 'B533783739/' },
        { text: 'A June 2025 orchestra-section dinner noticed a certificate of thanks from Goto, Nagasaki, where the seafood comes from.', source: R + 'B507907660/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・バル、中京区河原町通竹屋町上ル大文字町239、毎日12:00〜14:30 (料理L.O.14:00)・17:30〜23:00 (料理L.O.22:15)、昼は2名以上の予約制でコースのみ、夜のみ500円 (お通し代として)、カード (VISA・Master) 可、電子マネー・QR 不可、40席、個室あり、2014年10月8日オープン。口コミ (2025年1月〜2026年7月、英語): 町家を改装、トロピカルでハワイ風の内装、5品の前菜の盛り合わせ、刺身5種、豆腐サラダ、揚げ物、冷酒、長崎・五島の産直の魚介、飲み放題のコース、気さくなシェフ。',
      confidence: 'medium', sources: [TB, R + 'B498728054/', R + 'B507907660/', R + 'B531255149/', R + 'B533783739/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch ahead (courses for two or more). Evening seating includes a ¥500 appetizer platter. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町通竹屋町上ル大文字町239',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.015972, 135.768752); GSI matched 大文字町239 in a different part of Nakagyo, 1.9 km away, so no usable cross-check — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533783739/'],
    price_note: 'No 2025–26 prices beyond the ¥500 evening appetizer; reviewers report ¥4,000–4,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Appetizer platter of five (evening charge)', '¥500', 'Evening', 'no', 'no', 'July 2026; the evening cover charge.', 'otoshi'),
      it('', '', 'Five-kind sashimi', '', 'Sashimi', 'ask', 'no', 'July 2026.', 'sashimi5'),
      it('', '', 'Tofu salad', '', 'Salads', 'ask', 'ask', 'July 2026.', 'tofu_salad'),
    ] }, {
    cuisine: 'リゾート風の内装の産直の食材の創作居酒屋・5品の前菜の盛り合わせ、刺身5種、豆腐サラダ、揚げ物、冷酒 (2026年7月)・長崎・五島の魚介のコース (2025年6月)、肉が2品出る飲み放題のコース (2025年1月)・丹波鶏の塩焼き、田楽、海老の頭の焼き物 (2023〜2024年の口コミ)',
    neighborhood: '河原町竹屋町。丸太町',
    gf_detail: 'グルテンフリーではない。揚げ物、チキン南蛮、田楽、醤油の料理のコース (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、丹波鶏、海老、肉のコース (2024〜2026年の口コミ)。',
    notes: '[居酒屋・河原町丸太町] 丸太町近く、河原町通のトロピカルなリゾート風の町家の居酒屋。夜のお通し500円は5品の盛り合わせ、刺身5種、長崎・五島から直送の魚介、揚げ物、コースと日本酒。昼は2名以上の予約制のコース。',
  });
}

// ================================================================ 613
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043724/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '16:00']);
  put({
    id: 'kyoto_613_cafe_higashiyama_nijo', name: '613 (ロクイチサン)', category: 'OMNI',
    lat: 35.01356, lng: 135.778227, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: French toast, pancakes, focaccia, scones and baked sweets (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French toast with whipped butter, bacon and sour cream, scones with cream, cheesecake (2025–26 reviews).',
    hours_raw: '10:00–16:00; closing days not fixed, posted in Instagram highlights; French-toast breakfast, daily brunch specials announced on Instagram, curry every Tuesday (Tabelog; October 2025). One drink per person (June 2026). Reservations only for the two-person tables, with a two-hour limit, shorter when busy (Tabelog); bookable via Instagram (January 2026). Cash only (Tabelog; September 2025). 7 seats: a counter and one table (Tabelog; October 2025). Run by its owner alone (October and November 2025). Second floor, with an orange sign, at the southwest corner of the Higashioji-Nijo crossing (September 2025, June 2026). Opened September 2025.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashioji-Nijo — Okazaki',
    cuisine: 'Small white café of French toast and brunch · French toast with banana, maple and whipped butter ¥1,500, pan-fried then oven-baked (September 2025) · French toast with bacon and sour cream ¥1,800, coffee chai ¥900 (June 2026) · scrambled eggs and bacon focaccia plate ¥1,700 (October 2025) · Tuesday curry (October 2025), weekend ramen (November 2025) · chocolate cheesecake, café au lait (December 2025), homemade scones with cream and ice cream (September 2026) · coffee ¥600',
    website: null, gmaps: gm('613 カフェ 東山二条'), menu_url: TB,
    notes: '[Café · Higashiyama-Nijo] A seven-seat white café upstairs at the Higashioji-Nijo crossing, opened in 2025 and run single-handed by its owner: French toast pan-fried then baked (a recipe honed while training at a hotel), focaccia plates, Tuesday curry, scones and cakes. Cash only; one drink each; check Instagram for open days.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who runs the café alone and trained in a hotel kitchen (September and November 2025)'], origin: null,
      background: 'Per reviews: began as a pop-up, opened on 16 September 2025; the name is the owner’s birthday, and the French toast recipe was developed while the owner was training at a hotel (September 2025).',
      philosophy: null, specialty: 'Oven-finished French toast.',
      anecdotes: [
        { text: 'A September 2025 visitor at the opening learned the café is named after the owner’s birthday, and that the French toast — pan-fried, then baked — was perfected during hotel training.', source: R + 'B514155195/' },
        { text: 'A May 2026 breakfast guest who booked ahead found the salad and fruit carefully cut into bite-sized pieces and the French toast fluffy and just sweet enough.', source: R + 'B527433544/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、左京区仁王門通新高倉東入北門前町478-4 amu 2F、10:00〜16:00、不定休 (インスタグラムで告知)、朝はフレンチトーストのモーニング、昼の日替わりはインスタグラムで、毎週火曜はカレー、予約は2人用テーブルのみで2時間制、カード・電子マネー・QR 不可、7席。口コミ (2025年9月〜2026年9月、英語): 2025年9月16日オープン、東山二条の交差点の2階、オレンジの看板、店主が一人で営む、店名は店主の誕生日、ホテルでの修業で磨いたフレンチトースト (焼いてからオーブン)、バナナとメープルとホイップバター1,500円、ベーコンとサワークリーム1,800円、コーヒーチャイ900円、フォカッチャのプレート1,700円、週末のラーメン、チョコのチーズケーキ、スコーン、ワンドリンク制、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B514155195/', R + 'B515006776/', R + 'B516173306/', R + 'B519668190/', R + 'B519850361/', R + 'B521427493/', R + 'B527433544/', R + 'B532620091/', R + 'B538173399/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a table via Instagram; bring cash; one drink each. Only seven seats, run by one person. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区仁王門通新高倉東入北門前町478-4 amu 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.013560, 135.778227); cross-checked: GSI 京都府京都市左京区北門前町478番地 (lot) 102m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514155195/', R + 'B515006776/', R + 'B532620091/'],
    price_note: 'Prices from September 2025 to June 2026.', last_checked: TODAY, items: [
      it('', '', 'French toast with banana, maple and whipped butter', '¥1,500', 'French toast', 'no', 'no', 'September 2025.', 'ft_banana'),
      it('', '', 'French toast with bacon and sour cream', '¥1,800', 'French toast', 'no', 'no', 'June 2026.', 'ft_bacon'),
      it('', '', 'Scrambled eggs, bacon and vegetable focaccia plate', '¥1,700', 'Plates', 'no', 'no', 'October 2025.', 'focaccia_plate'),
      it('', '', 'Coffee', '¥600', 'Drinks', 'ask', 'ask', 'September 2025.', 'coffee'),
    ] }, {
    cuisine: 'フレンチトーストとブランチの小さな白いカフェ・バナナ、メープル、ホイップバターのフレンチトースト1,500円、焼いてからオーブンで (2025年9月)・ベーコンとサワークリームのフレンチトースト1,800円、コーヒーチャイ900円 (2026年6月)・スクランブルエッグとベーコンのフォカッチャのプレート1,700円 (2025年10月)・火曜のカレー (2025年10月)、週末のラーメン (2025年11月)・チョコのチーズケーキ、カフェオレ (2025年12月)、クリームとアイスの自家製スコーン (2026年9月)・コーヒー600円',
    neighborhood: '東大路二条。岡崎',
    gf_detail: 'グルテンフリーではない。フレンチトースト、パンケーキ、フォカッチャ、スコーン、焼き菓子 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ホイップバター、ベーコンとサワークリームのフレンチトースト、クリーム付きのスコーン、チーズケーキ (2025〜2026年の口コミ)。',
    notes: '[カフェ・東山二条] 東大路二条の交差点の2階、2025年開店の7席の白いカフェ。店主が一人で営み、ホテルでの修業で磨いた焼いてからオーブンで仕上げるフレンチトースト、フォカッチャのプレート、火曜のカレー、スコーンやケーキ。現金のみ、ワンドリンク制、営業日はインスタグラムで確認を。',
  });
}

// ================================================================ ユニオン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000656/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '17:00']);
  put({
    id: 'kyoto_union_kissa_muromachi', name: 'ユニオン', category: 'OMNI',
    lat: 35.012789, lng: 135.758143, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: food is egg toast and egg sandwiches (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg toast on buttered bread, egg sandwiches, banana juice with milk (2025 reviews). Black coffee is the plant-based choice.',
    hours_raw: 'Mon–Fri 7:30–17:00; closed weekends and holidays (Tabelog). Smoking allowed throughout — every table has an ashtray (Tabelog; May and June 2025). No cards, e-money or QR — cash only (Tabelog). A long room of tables in a converted townhouse behind a teal front, on the east side of Muromachi between Oshikoji and Nijo, about six minutes from Marutamachi Station (May 2025). Open since 1953 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Muromachi, between Oshikoji and Nijo',
    cuisine: 'Kissaten since 1953 · egg toast — a thin omelette on buttered toast, cut in three (May and July 2025) · egg sandwich with mustard (June and July 2025) · blend coffee, iced coffee, banana juice (2025 reviews) · hot coffee with a pleasant acidity (October 2026)',
    website: null, gmaps: gm('ユニオン 喫茶 室町 京都'), menu_url: TB,
    notes: '[Kissaten · Muromachi] A weekday-only Showa-era coffee shop behind a teal front on Muromachi, open since 1953: dim light, an old TV, a fan, ashtrays on every table, and egg toast or a mustardy egg sandwich with coffee. Cash only; smoking throughout.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a kissaten opened 15 January 1953 in a converted Kyoto townhouse on Muromachi-dori (May 2025).',
      philosophy: null, specialty: 'Egg toast; egg sandwich.',
      anecdotes: [
        { text: 'A July 2025 regular has a favourite worn two-seat table, with the TV on and the fan turning, for an egg sandwich and iced coffee.', source: R + 'B486858664/' },
        { text: 'An October 2026 visitor, curious for years about a café open only on weekdays, finally came on a weekday afternoon and had the pick of the seats.', source: R + 'B536946199/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店、中京区室町通二条下ル蛸薬師町281、月〜金7:30〜17:00、土日・祝日休み、全席喫煙可、カード・電子マネー・QR 不可、1953年1月15日オープン。口コミ (2025年5月〜2026年10月、英語): 青緑色の外観、町家を改装、奥に続くテーブル席、各席に灰皿、テレビと扇風機、昭和の雰囲気、バターのトーストに薄焼き卵のたまごトースト、からしの効いたたまごサンド、ブレンド、アイスコーヒー、バナナジュース、丸太町駅から徒歩約6分。',
      confidence: 'medium', sources: [TB, R + 'B486858664/', R + 'B507352340/', R + 'B507876357/', R + 'B536946199/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash; smoking is allowed at every seat. Weekdays only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通二条下ル蛸薬師町281',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012789, 135.758143); cross-checked: GSI 京都府京都市中京区蛸薬師町281番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507352340/'],
    price_note: 'No 2025–26 prices quoted; reviewers report under ¥1,000 per person.', last_checked: TODAY, items: [
      it('', '', 'Egg toast', '', 'Food', 'no', 'no', 'May and July 2025.', 'egg_toast'),
      it('', '', 'Egg sandwich', '', 'Food', 'no', 'no', 'June and July 2025.', 'egg_sando'),
      it('', '', 'Blend coffee', '', 'Drinks', 'ask', 'ask', '2025–26 reviews.', 'coffee'),
    ] }, {
    cuisine: '1953年からの喫茶店・バターのトーストに薄焼き卵をのせて三つに切ったたまごトースト (2025年5月・7月)・からしの効いたたまごサンド (2025年6月・7月)・ブレンド、アイスコーヒー、バナナジュース (2025年の口コミ)・ほどよい酸味のホットコーヒー (2026年10月)',
    neighborhood: '室町、押小路と二条の間',
    gf_detail: 'グルテンフリーではない。食事はたまごトーストとたまごサンド (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターのトーストのたまごトースト、たまごサンド、牛乳入りのバナナジュース (2025年の口コミ)。植物性ならブラックコーヒー。',
    notes: '[喫茶店・室町] 室町通の青緑色の外観の、1953年から続く平日だけの昭和の喫茶店。薄暗い店内に古いテレビと扇風機、各席に灰皿、たまごトーストやからしの効いたたまごサンドとコーヒーを。現金のみ、全席喫煙可。',
  });
}

// ================================================================ ふじ亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004394/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00']);
  put({
    id: 'kyoto_fujitei_gosho_minami', name: 'ふじ亭', category: 'OMNI',
    lat: 35.01629, lng: 135.765444, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura sets, eel with soy-based sauce, soy-seasoned obanzai and dashi (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel, sashimi, hamo, chirimen, dashi throughout (2025–26 reviews).',
    hours_raw: 'Lunch only, Tue–Sun 11:30–14:00; closed Monday (Tabelog). Family-run; regulars fill it at noon (April and May 2025). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). A small room of three tables and three raised tatami seats, warmed by a stove in winter (2024 review, November 2025). On Takeyamachi-dori east of Tominokoji, south of the Imperial Palace near the courthouse (Tabelog; May 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-Tominokoji — Gosho Minami',
    cuisine: 'Family-run Kyoto lunch house · Kyoto bento of small, lightly seasoned obanzai with seasonal rice — burdock rice, bamboo-shoot rice (April and May 2025) · premium Kyoto bento ¥1,980 with sashimi on its own plate and a piece of eel, chirimen for the rice (May and November 2025) · eel lunch (May 2025) · hamo tojidon ¥1,760 (July 2026) · tempura set (2024 review)',
    website: null, gmaps: gm('ふじ亭 京都 竹屋町 富小路'), menu_url: TB,
    notes: '[Kyoto lunch · Gosho Minami] A small family-run lunch spot south of the Imperial Palace, full of locals at noon: Kyoto bento of many small, lightly seasoned dishes with seasonal rice, a ¥1,980 premium bento with sashimi and eel, eel lunches and hamo tojidon in summer. Lunch only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Family-run (April 2025)'], origin: null,
      background: 'Per Tabelog and reviews: a family-run Japanese restaurant south of the Imperial Palace serving lunch, popular with locals (April and May 2025).',
      philosophy: null, specialty: 'Kyoto bento; eel.',
      anecdotes: [
        { text: 'A November 2025 diner asked the difference between the regular and premium bento — the premium puts the sashimi on its own plate and adds a piece of eel — and chose it for ¥1,980.', source: R + 'B517060903/' },
        { text: 'An April 2025 traveller changed lunch plans on seeing women in kimono walk in, and found the Kyoto bento with burdock rice delicious and good value.', source: R + 'B504360760/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区竹屋町通富小路東入ル魚屋町439、火〜日11:30〜14:00、月曜休み、カード (JCB・AMEX・Diners) 可、電子マネー・QR 不可。口コミ (2025年4月〜2026年7月、英語・日本語): 家族経営、地元の常連、京弁当 (ごぼうご飯、たけのこご飯、薄味のおばんざい)、上の京弁当1,980円 (刺身は別皿、鰻一切れ、ちりめん)、鰻、鱧とじ丼1,760円 (2026年7月)、テーブル3と小上がり3、冬はストーブ、御所南、裁判所の近く。',
      confidence: 'medium', sources: [TB, R + 'B455240545/', R + 'B504360760/', R + 'B506758184/', R + 'B517060903/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Come at opening — lunch only and small. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通富小路東入ル魚屋町439',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.016290, 135.765444); cross-checked: GSI 京都府京都市中京区魚屋町439番地 (lot) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517060903/', R + 'B455240545/'],
    price_note: 'Prices from May and November 2025 and July 2026.', last_checked: TODAY, items: [
      it('', '', 'Premium Kyoto bento (sashimi, eel)', '¥1,980', 'Lunch', 'no', 'no', 'May and November 2025.', 'jo_bento'),
      it('', '', 'Kyoto bento', '', 'Lunch', 'no', 'no', 'April and May 2025.', 'kyo_bento'),
      it('', '', 'Hamo tojidon', '¥1,760', 'Lunch', 'no', 'no', 'July 2026.', 'hamo_tojidon'),
    ] }, {
    cuisine: '家族経営の京の昼の店・季節のご飯 (ごぼうご飯、たけのこご飯) と薄味の小さなおばんざいの京弁当 (2025年4月・5月)・刺身は別皿で鰻一切れ付き、ちりめんをかける上の京弁当1,980円 (2025年5月・11月)・鰻の昼 (2025年5月)・鱧とじ丼1,760円 (2026年7月)・天ぷらの定食 (2024年の口コミ)',
    neighborhood: '竹屋町富小路。御所南',
    gf_detail: 'グルテンフリーではない。天ぷらの定食、たれの鰻、醤油のおばんざい、出汁 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻、刺身、鱧、ちりめん、出汁 (2025〜2026年の口コミ)。',
    notes: '[京の昼・御所南] 御所の南の小さな家族経営の昼の店。昼は地元の常連でいっぱい。季節のご飯と薄味の小さなおばんざいの京弁当、刺身と鰻付きの1,980円の上の弁当、鰻、夏は鱧とじ丼。昼のみ、月曜休み。',
  });
}

save();
