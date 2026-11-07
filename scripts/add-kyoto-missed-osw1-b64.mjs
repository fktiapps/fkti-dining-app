// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 64.
//   + 梨吉 Rikichi (one-person kappo counter in a Gion back street; reservation only)
//   + タコハイ 錦市場店 Taco High, Nishiki Market (standing takoyaki and highball stall)
//   + ラ・カリー La Curry (one-woman spice-curry counter on Kawaramachi, 3F)
//   + 割烹 日吉野 Kappou Hiyoshino (long-standing kappo near Kawaramachi-Sanjo)
//   - 祇園 串禄, 力餅食堂 (大和大路): skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26036204 (skipped), 26001416,
//   26043854, 26033150, 26011412 (skipped), 26005640.
//   queue-status.jsonl grepped for each brand (串禄, 梨吉, タコハイ, ラ・カリー, 力餅, 日吉野): no earlier rulings.
//   None of the four drafted is in data/kyoto.json by name or address (祇園末吉町95, 十文字町456, 清水町297-1, 大黒町67-1).
//   Same-name count (same brand or operator only): one shop each in our crawl and Tabelog's name search (タコハイ: other
//   “Tako to Highball” shops are a different name; no link found). Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: none listed for any of the four.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (日吉野 March 2025).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-64');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26036204', '祇園 串禄: no reviews in 2025–26 — the latest Tabelog reviews are from June 2022');
skip('26011412', '力餅食堂 (大和大路新門前): too thin to verify — two short reviews since 2025 with little beyond curry udon and chuka soba; one of the independent 力餅 lineage shops (力餅食堂 柿仲 is in data)');

// ================================================================ 梨吉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001416/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_rikichi_gion', name: '梨吉 (Rikichi)', category: 'OMNI',
    lat: 35.004864, lng: 135.773997, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo courses — nama-fu, yuba, saikyo-grilled fish, chawanmushi, sashimi, white-miso soup, simmered dishes; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses with fish, clams and dashi (2026 reviews).',
    hours_raw: 'Hours are not listed on Tabelog; closed Sundays and holidays (Tabelog). Lunch and dinner courses by reservation only (July 2025; March and July 2026). Cash only — no cards, e-money or QR (Tabelog). 16 seats: a counter and a small tatami room (Tabelog; July 2025). Water from a well on Mount Hiei (July 2025). In a back street of Gion Sueyoshi-cho, about 240 m from Gion-Shijo Station (Tabelog).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion Sueyoshi-cho back street — 240 m from Gion-Shijo',
    cuisine: 'Quiet kappo courses cooked by the owner alone (July 2025) · March 2026 lunch course: two nama-fu, rolled yuba, nanohana, saikyo-grilled sawara, wakame with green onion, lily root with ume, fried taro, broad beans; chawanmushi with Kuwana clams; washed shima-aji sashimi; white-miso soup with fresh yuba; simmered shima-aji; furofuki · summer course with chawanmushi of Kuwana clams and shima-aji sashimi (July 2026) · sake to match, with Mount Hiei well water as chaser (July 2025)',
    website: null, gmaps: gm('梨吉 祇園末吉町'), menu_url: null,
    notes: '[Kappo · Gion back street, one owner, reservation only] A quiet, reservation-only kappo counter and tatami room in a Gion back street, where the owner cooks every dish alone — nama-fu and yuba, Kuwana-clam chawanmushi, shima-aji, white-miso soup — with water from a Mount Hiei well. Cash only; closed Sundays and holidays.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'A July 2025 reviewer describes a kind owner working solo, preparing each dish with care; a July 2026 diner enjoyed the owner’s humble, friendly conversation.',
      philosophy: null, specialty: 'Seasonal kappo course.',
      anecdotes: [
        { text: 'A July 2025 guest, brought by a friend, alternated sake with the Mount Hiei well water.', source: R + 'B511217459/' },
        { text: 'A March 2026 lunch guest plans to come back for dinner after a ten-plus-dish spring course.', source: R + 'B525000514/' },
      ],
      japanese_sources_summary: '食べログ: 梨吉、日本料理、東山区祇園末吉町95、祇園四条駅から240m、営業時間の記載なし、日祝休み、現金のみ、16席、個室あり。口コミ (2025〜2026年、英語・日本語): 祇園の路地の予約制の店、店主がひとりで丁寧に作る、カウンターと小さな座敷、比叡山の井戸水、昼のコース (生麩2種、湯葉巻き、菜の花、鰆の西京焼き、わかめとねぎ、百合根の梅肉、揚げ里芋、そら豆、桑名の蛤の茶碗蒸し、縞鯵の洗い、生湯葉の白味噌椀、縞鯵の煮付け、ふろふき)、静かな場所、丁寧な料理。',
      confidence: 'medium', sources: [TB, R + 'B511217459/', R + 'B525000514/', R + 'B530426628/', R + 'B532566633/'] },
    cultural_comfort: { level: 'japanese', note: 'Reservation only; one person cooking; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園末吉町95',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004864, 135.773997); cross-checked: GSI 京都府京都市東山区末吉町95番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525000514/'],
    price_note: 'No prices read; reviewers spend ¥10,000–15,000 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (spring 2026)', '', 'Courses', 'ask', 'no', 'March 2026.', 'lunch_course'),
      it('', '', 'Chawanmushi with Kuwana clams', '', 'Courses', 'ask', 'no', 'March and July 2026.', 'chawanmushi'),
    ] }, {
    cuisine: '店主がひとりで作る静かな割烹のコース (2025年7月)・2026年3月の昼のコース: 生麩2種、湯葉巻き、菜の花、鰆の西京焼き、わかめとねぎ、百合根の梅肉、揚げ里芋、そら豆、桑名の蛤の茶碗蒸し、縞鯵の洗い、生湯葉の白味噌椀、縞鯵の煮付け、ふろふき・桑名の蛤の茶碗蒸しと縞鯵の刺身の夏のコース (2026年7月)・日本酒には比叡山の井戸水を和らぎ水に (2025年7月)',
    neighborhood: '祇園末吉町の路地。祇園四条から240m',
    gf_detail: '要確認。生麩、湯葉、西京焼き、茶碗蒸し、刺身、白味噌椀、煮物の割烹のコース。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、蛤、出汁のコース (2026年の口コミ)。',
    notes: '[割烹・祇園の路地、店主ひとり、予約制] 祇園の路地にある予約制の静かな割烹のカウンターと座敷。店主がひとりで生麩や湯葉、蛤の茶碗蒸し、縞鯵、白味噌椀までを作り、比叡山の井戸水も。現金のみ、日祝休み。',
  });
}

// ================================================================ タコハイ 錦市場店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043854/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_taco_high_nishiki', name: 'タコハイ 錦市場店 (Taco High, Nishiki Market)', category: 'OMNI',
    lat: 35.005107, lng: 135.763862, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki in a wheat batter (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki with bonito dashi; pork miso soup (2025–2026 reviews).',
    hours_raw: 'Hours are not listed on Tabelog; reviewers visited from midday to late afternoon (2025–2026). A standing takoyaki stall with a small standing area (March and July 2026). Cards and QR payments (Tabelog). In Nishiki Market, about 5 min from Karasuma Station (Tabelog; March 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market — 5 min from Karasuma',
    cuisine: 'A standing takoyaki and highball stall in Nishiki Market (2025–2026) · takoyaki piled with Kujo green onion and bonito dashi, 8 for ¥750 (December 2025) or 4 for ¥550 (March 2026) · momiji-oroshi takoyaki (July 2026) · pork miso soup (February 2026) · the house “Taco High” highball; draft beer ¥200, Ramune ¥300 (June 2026)',
    website: null, gmaps: gm('タコハイ 錦市場店'), menu_url: null,
    notes: '[Takoyaki stand · Nishiki Market, Kujo onion and ¥200 beer] A standing takoyaki stall in Nishiki Market selling fluffy, creamy takoyaki buried under Kujo green onion with bonito dashi (4 for ¥550, 8 for ¥750), pork miso soup, and a highball or a ¥200 draft beer — a cheap stop on a market walk.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe cheerful, friendly staff (February 2026) and a stall that stays affordable amid pricier Nishiki stands (December 2025).',
      philosophy: null, specialty: 'Kujo-onion takoyaki.',
      anecdotes: [
        { text: 'A February 2026 regular asked after the sold-out pork miso soup and was looked after kindly by a staff member named Daisuke.', source: R + 'B522852847/' },
        { text: 'A June 2026 bar-hopper could not resist a ¥200 draft beer on spotting the sign.', source: R + 'B530019544/' },
      ],
      japanese_sources_summary: '食べログ: タコハイ 錦市場店、たこ焼き、中京区十文字町456 楽水舎ビル1F、烏丸駅から369m、営業時間の記載なし、カード・QR決済可。口コミ (2025〜2026年、英語): 錦市場の立ち飲みのたこ焼き、九条ねぎと鰹出汁のたこ焼き8個750円・4個550円、もみじおろし、豚汁、タコハイ、生ビール200円、ラムネ300円、ふわとろの生地、明るい店員。',
      confidence: 'medium', sources: [TB, R + 'B518490574/', R + 'B519261140/', R + 'B522766326/', R + 'B522852847/', R + 'B529689205/', R + 'B530019544/', R + 'B531350050/', R + 'B531766323/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing stall in a busy market.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区十文字町456 楽水舎ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005107, 135.763862); cross-checked: GSI 京都府京都市中京区十文字町456番地 (lot) 66m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519261140/', R + 'B529689205/', R + 'B530019544/'],
    price_note: 'Prices from December 2025 – June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kujo-onion takoyaki with bonito dashi (8)', '¥750', 'Takoyaki', 'no', 'no', 'December 2025.', 'negi_tako8'),
      it('', '', 'Kujo-onion takoyaki with bonito dashi (4)', '¥550', 'Takoyaki', 'no', 'no', 'March 2026.', 'negi_tako4'),
      it('', '', 'Draft beer', '¥200', 'Drinks', 'no', '', 'June 2026.', 'beer'),
    ] }, {
    cuisine: '錦市場の立ち飲みのたこ焼きとハイボールの店 (2025〜2026年)・九条ねぎと鰹出汁のたこ焼き、8個750円 (2025年12月)、4個550円 (2026年3月)・もみじおろしのたこ焼き (2026年7月)・豚汁 (2026年2月)・名物のタコハイ。生ビール200円、ラムネ300円 (2026年6月)',
    neighborhood: '錦市場。烏丸から徒歩5分',
    gf_detail: 'グルテンフリーではない。小麦の生地のたこ焼き (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。蛸と鰹出汁のたこ焼き、豚汁 (2025〜2026年の口コミ)。',
    notes: '[たこ焼き・錦市場、九条ねぎと200円のビール] 錦市場の立ち飲みのたこ焼き屋。ふわとろのたこ焼きに九条ねぎと鰹出汁をたっぷり (4個550円、8個750円)、豚汁、ハイボールや200円の生ビールで、市場歩きの手頃なひと休みに。',
  });
}

// ================================================================ ラ・カリー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033150/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30']);
  put({
    id: 'kyoto_la_curry_kawaramachi', name: 'ラ・カリー (La Curry)', category: 'OMNI',
    lat: 34.999116, lng: 135.768117, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries on rice with side dishes and a fried egg; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-tendon keema, shrimp bisque, chicken tikka masala and pork vindaloo (2025–2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30; closed Wednesday (Tabelog); some evening hours announced on Instagram (November 2025). No reservations (Tabelog). Cash only (Tabelog; November 2025). 8 counter seats, bar-like (March 2026). Run by the owner alone — allow time (November 2025). On the 3rd floor of the Suehiro Building on Kawaramachi north of Matsubara, across from Yakiniku Aje (Tabelog; November 2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi north of Matsubara — 3F, 10 min from Gion-Shijo',
    cuisine: 'A small spice-curry bar with three regular curries and a daily special, served singly or as combinations (2025–2026) · beef-tendon keema, shrimp bisque curry, chicken tikka masala; pork vindaloo or mushroom-chicken curry with abalone stock as specials (2025–2026) · two-curry combination ¥1,500 (November 2025) with side dishes and a fried egg (October 2026) · gentle, Japanese-leaning spicing that builds (August 2025)',
    website: null, gmaps: gm('ラ・カリー 河原町 カレー'), menu_url: null,
    notes: '[Spice curry · Kawaramachi 3F, a one-woman counter] An eight-seat curry bar up three flights on Kawaramachi, where the owner alone serves beef-tendon keema, shrimp bisque and chicken tikka masala as combination plates (two curries ¥1,500) with sides and a fried egg. Lunch only most days; cash only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers describe a friendly, kind owner who runs the counter alone and remembers regulars (May and November 2025), making it comfortable for solo diners.',
      philosophy: null, specialty: 'Two-curry combination.',
      anecdotes: [
        { text: 'A November 2025 regular came for the first time at night, having spotted evening hours on Instagram, and was remembered by the owner.', source: R + 'B451117130/' },
        { text: 'A March 2026 couple returned to the place where the two first discovered combination spice curry.', source: R + 'B524716974/' },
      ],
      japanese_sources_summary: '食べログ: ラ・カリー、カレー・インドカレー、下京区河原町通松原上ル清水町297-1 すえひろビル3F、清水五条駅から341m、昼11:30〜14:30、水曜定休、予約不可、現金のみ。口コミ (2025〜2026年、英語): 定番3種と日替わりのスパイスカレー、牛すじキーマ、海老のビスク、チキンティッカマサラ、ポークビンダルー、鮑の出汁のきのこチキンカレー、2種の合いがけ1,500円、副菜と目玉焼き、カウンター8席、店主がひとりで営む、夜の営業はインスタグラムで告知、焼肉 Aje の向かい。',
      confidence: 'medium', sources: [TB, R + 'B451117130/', R + 'B510508523/', R + 'B512292144/', R + 'B516952406/', R + 'B517182370/', R + 'B524716974/', R + 'B532425963/', R + 'B535878471/', R + 'B536983142/', R + 'B537336271/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; one person cooking; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区河原町通松原上ル清水町297-1 すえひろビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999116, 135.768117); cross-checked: GSI 京都府京都市下京区清水町297番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B451117130/'],
    price_note: 'Price from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Two-curry combination plate', '¥1,500', 'Curry', 'ask', 'no', 'November 2025.', 'combo'),
      it('', '', 'Beef-tendon keema curry', '', 'Curry', 'ask', 'no', '2025–2026.', 'keema'),
      it('', '', 'Shrimp bisque curry', '', 'Curry', 'ask', 'no', '2026.', 'bisque'),
    ] }, {
    cuisine: '定番3種と日替わりのカレーを単品か合いがけで出す小さなスパイスカレーのバー (2025〜2026年)・牛すじキーマ、海老のビスクカレー、チキンティッカマサラ。日替わりにポークビンダルーや鮑の出汁のきのこチキンカレー (2025〜2026年)・2種の合いがけ1,500円 (2025年11月)、副菜と目玉焼き付き (2026年10月)・後から辛さが来る、和を感じるやさしいスパイス (2025年8月)',
    neighborhood: '松原の北の河原町。3階、祇園四条から徒歩10分',
    gf_detail: '要確認。ご飯にスパイスカレー、副菜、目玉焼き。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛すじキーマ、海老のビスク、チキンティッカマサラ、ポークビンダルー (2025〜2026年の口コミ)。',
    notes: '[スパイスカレー・河原町の3階、店主ひとりのカウンター] 河原町のビルの3階、8席のカレーのバー。店主がひとりで牛すじキーマ、海老のビスク、チキンティッカマサラを合いがけ (2種1,500円) に副菜と目玉焼きで出す。ほぼ昼のみ、現金のみ、水曜定休。',
  });
}

// ================================================================ 割烹 日吉野
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005640/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '22:00']);
  put({
    id: 'kyoto_kappou_hiyoshino', name: '割烹 日吉野 (Kappou Hiyoshino)', category: 'OMNI',
    lat: 35.007884, lng: 135.769849, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo à la carte — sashimi, grilled ayu and guji, hamo, shellfish, nigiri, zosui; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappo (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 16:00–22:00; closed Sunday; hours may change (Tabelog). Cards (JCB, AMEX, Diners); no e-money (Tabelog). Counter seating; often full with regulars (March 2026). No prices on the menu (March 2026). A March 2025 reviewer, brought by a friend, says long-time customers come by introduction. On Kawaramachi south of Sanjo in Daikoku-cho, near Pontocho, about 260 m from Sanjo Station (Tabelog; March 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi south of Sanjo, near Pontocho',
    cuisine: 'A long-established counter kappo of seasonal fish, loved by regulars (2025–2026) · spring firefly squid and shellfish; seared bonito (March 2026) · assorted sashimi, grilled ayu, junsai (June 2025) · wild ayu and hamo, as sashimi or grilled, in summer (July 2026) · winter: oysters, shirako with ponzu, shrimp with ginkgo, flounder nigiri with sansho, sea bream sashimi, ebi-imo, yokowa tataki, kobako crab, grilled guji and its crisp bones, guji zosui (December 2025)',
    website: null, gmaps: gm('割烹 日吉野 河原町三条'), menu_url: null,
    notes: '[Kappo · Kawaramachi-Sanjo near Pontocho, a regulars’ counter] A long-standing counter kappo just south of Sanjo, full of regulars, cooking seasonal fish without prices on the menu — wild ayu and hamo in summer, guji, kobako crab and guji zosui in winter, firefly squid in spring. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a long-established kappo loved by locals and regulars (March 2025, March 2026); a July 2026 regular thanks the chef, the owner and the staff for the cooking every summer.',
      philosophy: null, specialty: 'Wild ayu; guji.',
      anecdotes: [
        { text: 'A July 2026 regular comes every summer for wild ayu and hamo, both as sashimi and grilled.', source: R + 'B531640712/' },
        { text: 'A December 2025 pair worked through a beer and four bottles of sake over guji, crab and zosui.', source: R + 'B518693621/' },
      ],
      japanese_sources_summary: '食べログ: 割烹 日吉野、日本料理、中京区河原町三条下ル大黒町67-1 大黒町ビル1F、三条駅から264m、月〜土 16:00〜22:00、日曜定休、カード可 (JCB・AMEX・Diners)。口コミ (2025〜2026年、英語): 地元の常連に愛される老舗のカウンター割烹、値札のないお品書き、春のほたるいかと貝、鰹のたたき、刺身の盛り合わせ、鮎の塩焼き、じゅんさい、夏の天然鮎と鱧、冬の牡蠣、白子ポン酢、海老と銀杏、平目の握り、鯛の刺身、海老芋、よこわのたたき、香箱蟹、ぐじの焼き物と骨せんべい、ぐじの雑炊、紹介で来る常連が多いという声 (2025年3月)。',
      confidence: 'medium', sources: [TB, R + 'B266943495/', R + 'B505058385/', R + 'B509259439/', R + 'B518693621/', R + 'B531640712/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars’ counter; no prices on the menu; a reviewer says customers come by introduction.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条下ル大黒町67-1 大黒町ビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.007884, 135.769849); GSI resolves 大黒町67 to a different 大黒町 in Nakagyo, but OSM Nominatim reverse-geocodes the Tabelog point to 大黒町 on 南大黒橋通, matching the address (河原町三条下ル) and Tabelog’s 264 m from Sanjo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518693621/', R + 'B531640712/'],
    price_note: 'No prices on the menu; reviewers spend ¥6,000–20,000.', last_checked: TODAY, items: [
      it('', '', 'Grilled wild ayu (summer)', '', 'Grill', 'ask', 'no', 'July 2026.', 'ayu'),
      it('', '', 'Grilled guji and guji zosui (winter)', '', 'Grill', 'ask', 'no', 'December 2025.', 'guji'),
    ] }, {
    cuisine: '常連に愛される季節の魚の老舗のカウンター割烹 (2025〜2026年)・春のほたるいかと貝、鰹のたたき (2026年3月)・刺身の盛り合わせ、鮎の塩焼き、じゅんさい (2025年6月)・夏は天然鮎と鱧を刺身や焼き物で (2026年7月)・冬: 牡蠣、白子ポン酢、海老と銀杏、山椒の平目の握り、鯛の刺身、海老芋、よこわのたたき、香箱蟹、ぐじの焼き物と骨、ぐじの雑炊 (2025年12月)',
    neighborhood: '三条の南の河原町、先斗町の近く',
    gf_detail: '要確認。刺身、鮎やぐじの焼き物、鱧、貝、握り、雑炊の割烹の一品。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚中心の割烹 (2025〜2026年の口コミ)。',
    notes: '[割烹・河原町三条の先斗町近く、常連のカウンター] 三条のすぐ南の常連でにぎわう老舗のカウンター割烹。値札のないお品書きで季節の魚を出す。夏は天然鮎と鱧、冬はぐじや香箱蟹、ぐじの雑炊、春はほたるいか。日曜定休。',
  });
}

save();
