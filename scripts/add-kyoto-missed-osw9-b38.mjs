// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 38.
//   + ラーメン いち喜 Ramen Ichiki (shoyu ramen at the foot of Gojozaka; since 2021) — no ramen block         [core]
//   + 二寧坂ふたば Ninenzaka Futaba (couple-run soba house on Ninenzaka; nishin soba)                        [core]
//   + ワンタンメンの満月 京都拉麺小路店 Wantanmen no Mangetsu (Sakata wonton ramen in Kyoto Ramen Koji) — no block [notable]
//   + 吉象咖哩 Yoshizo Curry (¥390 curry counter at Avanti, Kyoto Stn Hachijo exit; since 2018)            [notable]
//   Same-name counts first (same brand or operator): いち喜 1 (麺屋一基 in data is a different shop); 二寧坂ふたば 1
//   — no source ties it to 出町ふたば or 七条ふたば (different trades: mochi and sweets shops); 満月 — the official site
//   lists 酒田本店, 三鷹店 and 京都店, none in data (阿闍梨餅の満月 in data is unrelated), a small group, this one
//   drafted; 吉象咖哩 1.
//   Taken in queue order on 2026-11-06: core 26036327, 26000597; notable 26041415, 26031515. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: none of the four has a section.
//   Ramen: neither いち喜 nor 満月 gets a ramen block — the sources do not cover all six dimensions.
//   Pins: 満月's lot is the whole Kyoto Station building, so loc_precise false (12.5 m from kyr_nakamura_shoten_kyoto_ra
//   in the same Ramen Koji).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-38');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ラーメン いち喜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036327/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_ramen_ichiki_gojozaka', name: 'ラーメン いち喜 (Ramen Ichiki)', category: 'OMNI',
    lat: 34.994629, lng: 135.776451, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles in soy-based broth (2024–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu, egg and meat or shellfish broths (2024–25 reviews).',
    hours_raw: '11:00–19:00 daily; hours may change (Tabelog). No bookings; buy a ticket at the vending machine first (Tabelog; October 2024 review). Tabelog lists no cards, e-money or QR, but an April 2026 diner found payment options besides cash. 20 seats: 8 at the counter, 12 at tables; non-smoking; children and strollers welcome (Tabelog). Kara-age is sold at the shop front (October 2024 review). A few minutes past the lights from the Gojozaka bus stop, toward Kiyomizu-dera and Otani Honbyo (Tabelog; 2024–25 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Foot of Gojozaka, toward Kiyomizu-dera',
    cuisine: 'Shoyu ramen in a café-like room: the special Ichiki shoyu with chashu, seasoned egg, thick menma and white and Kujo green onions ¥1,200 (December 2025); plain shoyu with egg and chashu; shoyu chashu ramen; chilled duck ramen in summer (August 2024); pork rice bowl; kara-age (2024–26 reviews)',
    website: null, gmaps: gm('ラーメン いち喜 五条坂'), menu_url: null,
    notes: "[Ramen · foot of Gojozaka near Kiyomizu] A clean, stylish ramen shop on the way up to Kiyomizu-dera, playing jazz: gentle shoyu ramen with chashu, egg and Kujo green onion, about ¥1,000–1,200 — reasonable for the tourist zone, reviewers say. Ticket machine; open daily 11:00–19:00.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 4 October 2021 (Tabelog).',
      philosophy: null, specialty: 'Shoyu ramen.',
      anecdotes: [
        { text: 'A December 2025 diner was grateful for honest prices in a tourist area: ¥1,200 for the fully topped special shoyu.', source: R + 'B519132750/' },
        { text: 'An April 2026 visitor expected instant-ramen flavour and found it "neither exceptional nor disappointing".', source: R + 'B525685601/' },
        { text: 'An August 2024 diner found the broth lukewarm, the noodles overcooked and the lunch staff slow to seat people.', source: R + 'B490100825/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン いち喜、ラーメン、東山区遊行前町559-7、市バス五条坂から信号を渡ってすぐ、11:00〜19:00、予約不可、カード・電子マネー・QR 不可、20席 (カウンター8・テーブル12)、禁煙、子供・ベビーカー可、テイクアウト可、2021年10月4日オープン。口コミ (2023年12月〜2026年4月、英語): 券売機、特製いち喜醤油1,200円 (チャーシュー、味玉、太いメンマ、白ねぎと Kujo ねぎ)、醤油ラーメン、冷やし鴨ラーメン、豚丼、店頭の唐揚げ、カフェのようなきれいな店内、現金以外も使えたという声、ぬるくて麺がのびていたという声。',
      confidence: 'medium', sources: [TB, R + 'B484122992/', R + 'B490096650/', R + 'B490100825/', R + 'B493452624/', R + 'B498478025/', R + 'B519132750/', R + 'B521045981/', R + 'B525685601/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区遊行前町559-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (34.994629, 135.776451); cross-checked: GSI 京都府京都市東山区遊行前町559番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519132750/'],
    price_note: 'No menu read; one price from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Special Ichiki shoyu ramen', '¥1,200', 'Ramen', 'no', 'no', 'December 2025 review.', 'tokusei_shoyu'),
    ] }, {
    cuisine: 'カフェのような店内で醤油ラーメン: 特製いち喜醤油はチャーシュー、味玉、太いメンマ、白ねぎと Kujo ねぎで1,200円 (2025年12月)。味玉とチャーシューの付く醤油ラーメン、醤油チャーシュー麺、夏の冷やし鴨ラーメン (2024年8月)、豚丼、唐揚げ (2024〜26年の口コミ)',
    neighborhood: '清水寺へ向かう五条坂の下',
    gf_detail: 'グルテンフリー不可。醤油のスープに小麦のラーメン (2024〜25年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チャーシュー、卵、肉や貝のスープ (2024〜25年の口コミ)。',
    notes: '[ラーメン・清水近くの五条坂の下] 清水寺への上り口にある、ジャズの流れるきれいでおしゃれなラーメン店。チャーシュー、卵、Kujo ねぎのやさしい醤油ラーメンで千〜1,200円ほど、観光地にしては良心的との声。券売機。毎日11〜19時。',
  });
}

// ================================================================ 二寧坂ふたば
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000597/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_ninenzaka_futaba', name: '二寧坂ふたば (Ninenzaka Futaba)', category: 'OMNI',
    lat: 34.998271, lng: 135.781015, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a March 2025 diner found the soba more wheat than buckwheat; tempura and soy-based broths (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, herring, chicken and duck (2025 reviews).',
    hours_raw: '10:00–17:00; closed Thursday; hours may change (Tabelog). Cash only (February 2025 review). English menu (February 2025 review). 20 seats in two tatami rooms and at two tables; non-smoking; children welcome (Tabelog; November 2024 review). On Ninenzaka, the stepped lane below Kiyomizu-dera; about 1 km from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ninenzaka lane below Kiyomizu-dera',
    cuisine: 'Soba and simple Kyoto set meals: nishin soba with sweet-simmered herring (2025), the nishin soba set with jako rice, matcha soba (¥950 in 2022), tempura soba, chicken soba with Kujo green onion, niboshi soba, duck nanban soba, oyako-don; listed as a soba and Japanese-sweets café (Tabelog; 2022–25 reviews)',
    website: null, gmaps: gm('二寧坂ふたば'), menu_url: null,
    notes: "[Soba · Ninenzaka below Kiyomizu] A small, old-fashioned soba house on the busy Ninenzaka lane, run by a couple, with tatami rooms: soft-noodled nishin soba, matcha soba and chicken soba with Kujo green onion, about ¥1,000–2,000. English menu; cash only; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed)'], origin: null,
      background: 'A February 2025 diner describes a small soba shop "run by a lovely couple"; a November 2024 diner found the owner very polite and kind.',
      philosophy: null, specialty: 'Nishin soba; matcha soba.',
      anecdotes: [
        { text: 'A January 2025 visitor called it a classic, uncommercial room in the tourist bustle — "like a cultural heritage" — for its herring soba.', source: R + 'B499935290/' },
        { text: 'A March 2025 diner found the soba more wheat than buckwheat, its flavour faint, though the broth was gentle.', source: R + 'B503582194/' },
        { text: 'A February 2025 diner noted the English menu for foreign tourists and soft noodles with tender Kujo green onion.', source: R + 'B501272855/' },
      ],
      japanese_sources_summary: '食べログ: 二寧坂ふたば、そば・甘味処、東山区桝屋町351、祇園四条駅から1,013m、10:00〜17:00、木曜休み、20席、座敷、禁煙、子供可。口コミ (2022年7月〜2025年3月、英語): 夫婦で営む小さなそば屋、英語メニュー、現金のみ、座敷2部屋とテーブル2卓、にしんそば、にしんそば定食とじゃこご飯、茶そば950円 (2022年)、天ぷらそば、Kujo ねぎの鶏そば、煮干しそば、鴨南蛮、親子丼、そばは小麦が多いという声、店主が丁寧で親切。',
      confidence: 'low', sources: [TB, R + 'B455792680/', R + 'B458168370/', R + 'B496431690/', R + 'B499935290/', R + 'B501272855/', R + 'B503582194/'] },
    cultural_comfort: { level: 'english', note: 'English menu (February 2025 review); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区桝屋町351',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest reviews dated March 2025.' },
    pin_source: `Tabelog ${TB} (34.998271, 135.781015); cross-checked: GSI 京都府京都市東山区桝屋町351番地 (lot) 61m; 22.3 m from kyoto_kasagiya_ninenzaka; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499935290/'],
    price_note: 'No current prices read.', last_checked: TODAY, items: [
      it('にしんそば', 'nishin soba', 'Nishin soba (herring soba)', '', 'Soba', 'no', 'no', '2025 reviews.', 'nishin_soba'),
      it('', '', 'Chicken soba with Kujo green onion', '', 'Soba', 'no', 'no', 'February 2025 review.', 'tori_soba'),
    ] }, {
    cuisine: 'そばと素朴な京都の定食: 甘く炊いたにしんのにしんそば (2025年)、じゃこご飯の付くにしんそば定食、茶そば (2022年は950円)、天ぷらそば、Kujo ねぎの鶏そば、煮干しそば、鴨南蛮そば、親子丼。そばと甘味の店 (食べログ、2022〜25年の口コミ)',
    neighborhood: '清水寺の下の二寧坂',
    gf_detail: 'グルテンフリー不可。2025年3月の客はそばが蕎麦粉より小麦が多いと感じた。天ぷらや醤油の出汁も (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁、にしん、鶏、鴨 (2025年の口コミ)。',
    notes: '[そば・清水の下の二寧坂] 賑やかな二寧坂の、夫婦で営む昔ながらの小さなそば屋。座敷もある。やわらかなそばのにしんそば、茶そば、Kujo ねぎの鶏そばで千〜2千円ほど。英語メニュー。現金のみ。木曜休み。',
  });
}

// ================================================================ ワンタンメンの満月 京都拉麺小路店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041415/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sakata-mangetsu.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_wantanmen_mangetsu_ramen_koji', name: 'ワンタンメンの満月 京都拉麺小路店 (Wantanmen no Mangetsu Kyoto Ramen Koji)', category: 'OMNI',
    lat: 34.985666, lng: 135.758042, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles and wonton wrappers in soy broth (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi (dried sardine) broth, chashu and pork wontons (2026 reviews).',
    hours_raw: '11:00–22:00 (last food order 21:30), daily; hours may change (Tabelog). No bookings; queues at peak, quieter than its neighbours at other times (Tabelog; 2026 reviews). Cards, e-money and QR (Tabelog). Non-smoking. In Kyoto Ramen Koji, the ramen street on the 10th floor of the Kyoto Station building (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Ramen Koji, Kyoto Station building 10F',
    cuisine: 'Sakata (Yamagata) wonton ramen: a clear niboshi-and-soy broth with curly noodles and very thin, silky wontons — shoyu wantanmen with a soft-boiled egg ¥1,180 (September 2026), shoyu chashu ramen ¥1,290 (October 2026); gyoza, fried rice (2026 reviews)',
    website: SITE, gmaps: gm('ワンタンメンの満月 京都拉麺小路'), menu_url: TB + 'dtlmenu/',
    notes: "[Sakata wonton ramen · Kyoto Station Ramen Koji] The Kyoto outpost of a Sakata, Yamagata ramen house founded in 1960: a light niboshi-soy broth with gossamer-thin wontons, about ¥1,200. Opinions split — fans love the delicacy, some find it lukewarm or thin. Open daily 11:00–22:00 on the station's 10th floor.",
    chef_bio: { chef_name: null, roles: ['Operator: Mangetsu of Sakata (no person named)'], origin: null,
      background: 'Per the official site: founded in 1960 in Sakata, Yamagata; shops in Sakata (main), 三鷹 and Kyoto. The Kyoto shop opened 19 June 2024 (Tabelog). A sign inside calls it the best local ramen in Japan (October 2026 review).',
      philosophy: 'A flavour loved by the community, kept and developed (official site).',
      specialty: 'Wantanmen (wonton ramen).',
      anecdotes: [
        { text: 'A September 2026 theatre-goer off the Nozomi found the clear niboshi broth soothing and the wontons "ultra-thin, fluffy" as promised.', source: R + 'B535997413/' },
        { text: 'An October 2026 visitor who had eaten it in Sakata the year before found the broth "absolutely terrible" and the chashu dry; only the noodles and wontons passed.', source: R + 'B536825355/' },
        { text: 'Another October 2026 diner found it lukewarm, wondered whether it was pitched at foreign visitors, and preferred the gyoza and beer.', source: R + 'B537356689/' },
      ],
      japanese_sources_summary: '公式サイト: ラーメン・ワンタンメンの満月、山形県酒田市、1960年創業、酒田本店・三鷹店・京都店。食べログ: ワンタンメンの満月 京都拉麺小路店、ラーメン、下京区東塩小路町901 京都駅ビル 10F 京都拉麺小路、11:00〜22:00 (L.O. 21:30)、予約不可、カード・電子マネー・QR 可、禁煙、2024年6月19日オープン。口コミ (2026年9〜10月、英語): 煮干しの澄んだ醤油スープ、極薄のワンタン、縮れ麺、味玉ワンタンメン1,180円、醤油チャーシュー麺1,290円、餃子、チャーハン、日本一のご当地ラーメンという掲示、スープがひどいという声やぬるいという声、ほかの店より空いている時も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B535997413/', R + 'B536679578/', R + 'B536825355/', R + 'B536888260/', R + 'B537074347/', R + 'B537356689/', R + 'B537853367/', R + 'B537861884/', R + 'B537891875/', R + 'B538309177/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station ramen street; quick counter service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路町901 京都駅ビル 10F 京都拉麺小路',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985666, 135.758042); the address lot is the whole Kyoto Station building, so loc_precise false; 12.5 m from kyr_nakamura_shoten_kyoto_ra (same Ramen Koji); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535997413/', R + 'B537891875/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu wantanmen with soft-boiled egg', '¥1,180', 'Ramen', 'no', 'no', 'September 2026 review.', 'ajitama_wantanmen'),
      it('', '', 'Shoyu chashu ramen', '¥1,290', 'Ramen', 'no', 'no', 'October 2026 review.', 'chashumen'),
    ] }, {
    cuisine: '酒田 (山形) のワンタンメン: 煮干しと醤油の澄んだスープに縮れ麺、とても薄くなめらかなワンタン。味玉ワンタンメン1,180円 (2026年9月)、醤油チャーシュー麺1,290円 (2026年10月)、餃子、チャーハン (2026年の口コミ)',
    neighborhood: '京都駅ビル10階の京都拉麺小路',
    gf_detail: 'グルテンフリー不可。醤油スープに小麦の麺とワンタンの皮 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。煮干しのスープ、チャーシュー、豚肉のワンタン (2026年の口コミ)。',
    notes: '[酒田のワンタンメン・京都駅の拉麺小路] 1960年創業の山形・酒田のラーメン店の京都店。煮干しと醤油のあっさりしたスープに、薄く透けるワンタン、1,200円ほど。繊細さを好む人と、ぬるい・物足りないという人に評価は分かれる。駅ビル10階で毎日11〜22時。',
  });
}

// ================================================================ 吉象咖哩
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26031515/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_yoshizo_curry', name: '吉象咖哩 (Yoshizo Curry)', category: 'OMNI',
    lat: 34.983366, lng: 135.760020, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Japanese curry roux with breaded cutlets and fried toppings (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cutlet, kara-age and egg toppings; the sauce is not described as plant-based (2025–26 reviews).',
    hours_raw: 'Mon–Sat 11:00–15:00 and 17:00–20:00, until sold out; closed Sunday (Tabelog). No bookings; queues of up to a dozen at lunch, and curry can run out mid-afternoon (2026 reviews). Order and pay at once — exact change helps; AMEX and QR payments per Tabelog. Counter seats only; non-smoking (Tabelog). On the ground floor of Kyoto Avanti, entered from the street, 1 min from the Hachijo exit of Kyoto Station (Tabelog; October 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Avanti, Kyoto Station Hachijo exit',
    cuisine: 'Cheap, fruity-then-spicy Japanese curry on a generous mound of rice: plain curry ¥390, kara-age curry ¥530 (September 2026), pork cutlet curry ¥550 with the cutlet fried to order, raw egg +¥50, cheese and large rice (pork cutlet curry with both ¥750, October 2026), shrimp fry topping; also a tomato curry (2025–26 reviews)',
    website: null, gmaps: gm('吉象咖哩 京都アバンティ'), menu_url: null,
    notes: "[Curry counter · Kyoto Station Hachijo exit] A tiny counter at Avanti serving some of Kyoto's cheapest curry — ¥390 plain, ¥550 with a freshly fried pork cutlet — sweet at first, then properly spicy, with plenty of rice. Expect a lunchtime queue; it can sell out. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 3 September 2018 (Tabelog). An October 2026 reviewer says the Japanese owner previously ran a curry restaurant in Shanghai.',
      philosophy: null, specialty: 'Pork cutlet curry.',
      anecdotes: [
        { text: 'A September 2026 first-timer waited about 30 minutes in an unshaded queue of twelve for a ¥550 katsu curry with raw egg.', source: R + 'B535539653/' },
        { text: 'An October 2026 visitor ninth in line saw the curry run out just after ordering; later arrivals were turned away.', source: R + 'B537265886/' },
        { text: 'A regular since 2022 came back in September 2026 for kara-age and egg on top.', source: R + 'B471881269/' },
      ],
      japanese_sources_summary: '食べログ: 吉象咖哩、カレー、南区東九条西山王町31 京都アバンティ 1F、京都駅八条口から徒歩1分、月〜土 11:00〜15:00・17:00〜20:00、日曜休み、売り切れ次第終了、予約不可、カード (AMEX)・QR 可、カウンター席、禁煙、2018年9月3日オープン。口コミ (2025年4月〜2026年10月、英語): カレー390円、唐揚げカレー530円、カツカレー550円 (注文後に揚げる)、生卵 +50円、チーズと大盛りのカツカレー750円、海老フライのトッピング、トマトカレー、甘さの後に辛さ、ご飯が多い、注文と同時に支払い、昼は行列で売り切れも、上海でカレー店を営んでいた日本人の店主。',
      confidence: 'medium', sources: [TB, R + 'B471881269/', R + 'B490782234/', R + 'B535539653/', R + 'B536433153/', R + 'B536449145/', R + 'B537052046/', R + 'B537265886/', R + 'B537781130/', R + 'B537822073/', R + 'B538606619/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter; bring small change.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条西山王町31 京都アバンティ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.983366, 135.760020); cross-checked: GSI 京都府京都市南区東九条西山王町31番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536433153/', R + 'B537052046/', R + 'B537781130/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Curry', '¥390', 'Curry', 'no', 'no', '2026 reviews.', 'curry'),
      it('', '', 'Kara-age curry', '¥530', 'Curry', 'no', 'no', 'September 2026 review.', 'karaage_curry'),
      it('', '', 'Pork cutlet curry', '¥550', 'Curry', 'no', 'no', 'September–October 2026 reviews.', 'katsu_curry'),
    ] }, {
    cuisine: 'たっぷりのご飯に、はじめ果物の甘さ、後から辛さの来る安い日本のカレー: カレー390円、唐揚げカレー530円 (2026年9月)、注文後に揚げるカツカレー550円、生卵 +50円、チーズや大盛り (両方でカツカレー750円、2026年10月)、海老フライのトッピング、トマトカレーも (2025〜26年の口コミ)',
    neighborhood: '京都駅八条口の京都アバンティ',
    gf_detail: 'グルテンフリー不可。日本のカレールウにパン粉のカツや揚げ物のトッピング (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。カツ、唐揚げ、卵のトッピング。ルウが植物性という記載はない (2025〜26年の口コミ)。',
    notes: '[カレーのカウンター・京都駅八条口] アバンティの小さなカウンターで、京都屈指の安さのカレー。プレーン390円、揚げたてのカツで550円。はじめ甘く、後からしっかり辛く、ご飯も多い。昼は行列で売り切れも。日曜休み。',
  });
}

save();
