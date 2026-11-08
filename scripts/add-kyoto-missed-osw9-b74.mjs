// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 74.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 鮨 岩田 Sushi Iwata (eight-seat sushi counter, à la carte or omakase; since 2023)
//   - BAR MERRY 木屋町店 — too thin to verify (one 2025–26 review)
//   - タリーズコーヒー 京都三条通り店 — chain (Tully's Coffee)
//   + TRONG SUOT (northern Vietnamese food on Hanamikoji, run by a couple)
//   - かに道楽 京都本店 — chain (かに道楽)
//   - chalp — no reviews
//   + VEGGIE ISO TERRACE (vegetable deli sets and terrace barbecue on Daimaru Kyoto 8F; since 2023)
//   - THE CITY BAKERY 大丸京都店 — chain (as ruled for 26037887, osw9-71)
//   + シュウマイ酒場ピクニック Shumai Sakaba Picnic (handmade shumai, spice dishes and natural wine near Shijo-Karasuma)
//   Same-name counts first (data and queue-status.jsonl): CITY BAKERY ruled in osw9-71 (followed); none for 岩田, MERRY,
//   タリーズ, TRONG SUOT, かに道楽, chalp, ISO TERRACE, ピクニック. None drafted is in data/kyoto.json by name or address
//   (hidden records included).
//   Groups: VEGGIE ISO TERRACE is "part of the Gojuro group" per an August 2026 review; no further group detail found.
//   Service charges checked against Tabelog's Japanese original: ピクニック 「お通し代500円頂戴しております」; 岩田, TRONG SUOT
//   and ISO TERRACE have no section.
//   Pins (checked against main, hidden records included): TRONG SUOT's Tabelog point is 4.3 m from kyoto_kana_nobuko_gion →
//   moved 2 m south-west (6.3 m clearance). VEGGIE ISO TERRACE's point is 0.1 m from kyoto_la_risotteria_daimaru (same
//   Daimaru 8F) and GSI matched only the town (立売西町) → approximate, moved 6 m south-east (6.1 m clearance). Others ≥ 17 m.
//   JA text uses 祝日, never a bare 祝 (coordinator, osw9-74).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-74');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042267', 'too thin to verify: one 2025–26 review (January 2026); a karaoke, darts and all-you-can-drink bar');
skip('26027483', 'chain: タリーズコーヒー (Tully\'s Coffee)');
skip('26011709', 'chain: かに道楽');
skip('26041967', 'no reviews');
skip('26037401', 'chain: THE CITY BAKERY — as ruled for 26037887 (osw9-71)');

// ================================================================ 鮨 岩田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040677/'; const R = TB + 'dtlrvwlst/';
  const D = day(['15:00', '21:00']);
  put({
    id: 'kyoto_sushi_iwata', name: '鮨 岩田 (Sushi Iwata)', category: 'OMNI',
    lat: 35.00798, lng: 135.765069, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and nigiri, but soy sauce, simmered and marinated toppings and eel sauce are likely wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi, oysters, monkfish liver, chawanmushi (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun, holidays and the days around them 15:00–21:00; closed Wednesdays and Thursdays (Tabelog). Cards, e-money and QR (Tabelog). 8 seats (Tabelog). On the ground floor of 京都シャラガム, about 10 min from Karasuma, Kawaramachi or Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 0: D, 1: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Central Kyoto, Sanjo–Tominokoji area — 10 min from Karasuma or Kawaramachi Stn',
    cuisine: 'Edomae-style sushi, à la carte or omakase: an omakase of three dishes ¥4,400 (May 2025); assorted sashimi, baby eel, ayu with plum, squid with its innards, oysters with miso butter, dried kinmedai, chawanmushi, ankimo with ponzu (March 2025); a regular\'s routine of three sashimi and four nigiri — aji, dried flatfish, octopus, kombu-cured sea bream, shirasu, noresore (March–May 2026); simmered scallops, marinated tuna, freshly made eel, whale (September 2026)',
    website: null, gmaps: gm('鮨 岩田 京都'), menu_url: null,
    notes: '[Sushi · central Kyoto] An eight-seat sushi counter open from mid-afternoon, where you can order piece by piece or take an omakase — sashimi, simmered and cured toppings, eel made to order — with a calm chef and a warm owner. About ¥8,000–15,000.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Opened 19 December 2023 (Tabelog). A calm chef and a friendly owner, with many overseas guests (March 2025 review). Lets guests choose freely rather than only an omakase (September 2026 review).',
      philosophy: null,
      specialty: 'À la carte sushi and seasonal sashimi.',
      anecdotes: [
        { text: 'A regular of seven visits (May 2026) always starts with three sashimi; that day\'s standout was a fatty Donchicchi horse mackerel, then four nigiri.', source: R + 'B509871122/' },
        { text: 'A March 2025 diner paired oysters with miso butter with white wine, then went back to sake for the nigiri, among well-mannered overseas guests.', source: R + 'B502414335/' },
        { text: 'A September 2026 diner at opening time praised being able to choose freely, especially whale and simmered scallops.', source: R + 'B536170570/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 岩田、寿司、中京区朝倉町534 京都シャラガム1F、烏丸駅・河原町駅・京都市役所前駅から徒歩10分、月・火・金・土・日・祝日・祝日の前日・祝日の翌日 15:00〜21:00、水・木曜休み、カード・電子マネー・QR 可、8席、2023年12月19日オープン。口コミ (2025〜2026年、英語): おまかせ3品4,400円、お造りの盛り合わせ、稚鮎、鮎の梅、いかのわた、牡蠣の味噌バター、金目鯛の干物、茶碗蒸し、あん肝のポン酢、お造り3種とにぎり4貫 (アジ、ヒラメの干物、たこ、鯛の昆布締め、しらす、noresore)、煮帆立、まぐろの漬け、作りたての穴子、くじら、穏やかな料理人と店主、海外の客。',
      confidence: 'medium', sources: [TB, R + 'B502414335/', R + 'B509871122/', R + 'B510755677/', R + 'B511119826/', R + 'B536007449/', R + 'B536170570/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; many overseas guests (March 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区朝倉町534 京都シャラガム 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007980, 135.765069); cross-checked: GSI 京都府京都市中京区朝倉町534番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510755677/'],
    price_note: 'Omakase price from a May 2025 review; reviews give ¥8,000–15,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase, three dishes', '¥4,400', 'Omakase', 'ask', 'no', 'May 2025 review.', 'omakase3'),
      it('', '', 'Three-kind sashimi', '', 'Sashimi', 'ask', 'no', 'March–May 2026 reviews.', 'sashimi3'),
      it('', '', 'Simmered scallop nigiri', '', 'Nigiri', 'ask', 'no', 'September 2026 reviews.', 'nihotate'),
    ] }, {
    cuisine: 'アラカルトかおまかせの寿司: おまかせ3品4,400円 (2025年5月)、お造りの盛り合わせ、稚鮎、鮎の梅、いかのわた、牡蠣の味噌バター、金目鯛の干物、茶碗蒸し、あん肝のポン酢 (2025年3月)、常連のお造り3種とにぎり4貫 — アジ、ヒラメの干物、たこ、鯛の昆布締め、しらす、noresore (2026年3〜5月)、煮帆立、まぐろの漬け、作りたての穴子、くじら (2026年9月)',
    neighborhood: '京都の中心部、三条・富小路のあたり。烏丸駅・河原町駅から徒歩10分',
    gf_detail: '要確認。お造りとにぎりだが、醤油、煮たり漬けたりしたネタ、穴子のたれは小麦を含む可能性が高い (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、お造り、牡蠣、あん肝、茶碗蒸し (2025〜26年の口コミ)。',
    notes: '[寿司・京都中心部] 午後から開く8席の寿司カウンター。1貫ずつ頼んでもおまかせでも — お造り、煮たり締めたりしたネタ、注文ごとに作る穴子 — 穏やかな料理人と温かい店主。8,000〜15,000円ほど。',
  });
}

// ================================================================ TRONG SUOT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043275/'; const R = TB + 'dtlrvwlst/';
  const D = day(['13:00', '21:00']);
  put({
    id: 'kyoto_trong_suot_gion', name: 'TRONG SUOT', category: 'OMNI',
    lat: 35.004916, lng: 135.775367, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice noodles and rice-paper rolls, but sauces and fried tofu are unknown (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mam tom shrimp paste, frog, duck, pho (2025 review).',
    hours_raw: 'Tue–Sun, holidays and the days around them 13:00–21:00 (L.O. 20:30); closed Mondays (Tabelog). Orders by QR code at the table (June 2025 review). Cards and PayPay; no e-money (Tabelog). 20 seats on the 2nd floor up a narrow staircase; a 3rd-floor karaoke VIP room for 5 or more (Tabelog; June 2025 review). On Hanamikoji north of Shijo, 5 min from Gion-Shijo (Tabelog; June 2025 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Hanamikoji north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Vietnamese leaning to Hanoi and the north: bun dau mam tom ¥1,199 with fermented shrimp paste, frog and duck dishes, pho (June 2025); fresh spring rolls with an authentic sauce (January 2026)',
    website: null, gmaps: gm('TRONG SUOT 京都 祇園'), menu_url: null,
    notes: '[Vietnamese · Gion] A plain second-floor room up a narrow Hanamikoji staircase, run by a couple and serving northern Vietnamese food — bun dau mam tom, frog and duck as well as pho and spring rolls — with a karaoke room upstairs. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: ['Owners (a couple, unnamed)'], origin: null,
      background: 'Run by a couple (January 2026 review). A menu with a strong Hanoi influence (June 2025 review).',
      philosophy: null,
      specialty: 'Bun dau mam tom.',
      anecdotes: [
        { text: 'A June 2025 diner who climbed the narrow stairs ordered bun dau mam tom by QR code and warned to use only a little of the strong shrimp paste — it grows addictive.', source: R + 'B509201909/' },
        { text: 'A January 2026 diner on a second stop managed only the fresh spring rolls and planned to come first next time.', source: R + 'B520586854/' },
      ],
      japanese_sources_summary: '食べログ: TRONG SUOT、ベトナム料理、東山区清本町354 祇園アシストビル、祇園四条駅から徒歩5分、火〜日・祝日・祝日の前日・祝日の翌日 13:00〜21:00 (L.O. 20:30)、月曜休み、カード・PayPay 可、電子マネー不可、20席。口コミ (2025〜2026年、英語): 花見小路のビル2階、狭い階段、3階にカラオケの VIP ルーム (5名以上)、テーブルの QR コードで注文、ハノイなど北部の料理、mam tom の bun dau 1,199円、カエルや鴨の料理、フォー、生春巻き、店を営む夫婦。',
      confidence: 'low', sources: [TB, R + 'B509201909/', R + 'B520586854/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering (June 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区清本町354 祇園アシストビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated June 2025 and January 2026.' },
    pin_source: `Tabelog ${TB} (35.004929, 135.775383), 4.3 m from kyoto_kana_nobuko_gion — moved 2 m south-west to (35.004916, 135.775367), 6.3 m clearance; cross-checked: GSI 京都府京都市東山区清本町354番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509201909/'],
    price_note: 'Price from a June 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Bun dau mam tom', '¥1,199', 'Noodles', 'ask', 'no', 'June 2025 review.', 'bun_dau'),
      it('', '', 'Fresh spring rolls', '', 'Starters', 'ask', 'ask', 'January 2026 review.', 'goi_cuon'),
    ] }, {
    cuisine: 'ハノイなど北部寄りのベトナム料理: 発酵した海老のペーストの bun dau mam tom 1,199円、カエルや鴨の料理、フォー (2025年6月)、本場の味のたれの生春巻き (2026年1月)',
    neighborhood: '祇園、四条の北の花見小路。祇園四条駅から徒歩5分',
    gf_detail: '要確認。米の麺やライスペーパーの春巻きだが、たれや揚げ豆腐の中身は不明 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。mam tom の海老のペースト、カエル、鴨、フォー (2025年の口コミ)。',
    notes: '[ベトナム料理・祇園] 花見小路の狭い階段を上がったビル2階の簡素な店。夫婦が営み、bun dau mam tom、カエルや鴨の料理、フォー、生春巻きなど北部のベトナム料理。上の階にカラオケの部屋。1,000〜2,000円ほど。',
  });
}

// ================================================================ VEGGIE ISO TERRACE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040113/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.daimaru.co.jp/kyoto/restaurant_floor_open/iso_terrace.html';
  const D = day(['11:00', '23:00']);
  put({
    id: 'kyoto_veggie_iso_terrace_daimaru', name: 'VEGGIE ISO TERRACE', category: 'OMNI',
    lat: 35.003882, lng: 135.762198, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A salad bar and many vegetable delis, but also cutlets, cottage pie, pasta salad and bread (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An all-you-can-eat vegetable salad bar and vegetable delis, but dressings and most mains contain meat, fish, egg or dairy (2026 reviews).',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). Lunch seating limited to 60 minutes; bookings advised, otherwise a waiting list at the door (July–October 2026 reviews). Cards, e-money and QR (Tabelog). Indoor seats and a terrace; barbecue on the terrace in the evening (April 2025 review). On the 8th-floor restaurant terrace of Daimaru Kyoto, by Karasuma Stn (Tabelog; Daimaru site).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Daimaru Kyoto 8F, Shijo-Karasuma — 2 min from Karasuma Stn',
    cuisine: 'Vegetable-led lunch sets: choose four or six delis from a showcase (ten by advance booking), with or without a main — eel, hamburg steak with cheese, fish — plus an all-you-can-eat salad bar, soup, rice or brown rice, and a drink bar; ¥2,100–2,150 with a main, some mains +¥250, brown rice +¥50 (July–September 2026); delis such as chicken mayo, lemon minced cutlet, cottage pie, Spanish omelette, bang bang chicken (2026); hands-free barbecue courses on the terrace (April 2025)',
    website: WEB, gmaps: gm('VEGGIE ISO TERRACE 大丸京都店'), menu_url: null,
    notes: '[Vegetable delis · Daimaru Kyoto 8F] A busy department-store terrace restaurant where you pick vegetable-heavy delis from a showcase, add a main if you like, and help yourself to a salad bar and drinks; barbecue on the terrace at night. Lunch about ¥2,000–2,500; expect a queue.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 29 September 2023 on the Daimaru Kyoto restaurant floor (Tabelog; Daimaru site). "Part of the Gojuro group" according to an August 2026 review.',
      philosophy: 'Lots of vegetables (2026 reviews).',
      specialty: 'Deli sets with a salad bar.',
      anecdotes: [
        { text: 'A September 2026 Saturday diner waited about an hour, shopping in Daimaru, and found the hamburg steak sold out.', source: R + 'B535835718/' },
        { text: 'A July 2026 diner booked the only slot left, at 11 am, and found the 60-minute limit too short for the salad bar.', source: R + 'B532776541/' },
        { text: 'An October 2026 diner after an Imperial Palace exhibition liked the vegetables but found the salad bar limited for the price.', source: R + 'B537249710/' },
      ],
      japanese_sources_summary: '食べログ: VEGGIE ISO TERRACE、ダイニングバー、下京区四条通高倉西入立売西町79 大丸京都店8F、烏丸駅から179m、毎日 11:00〜23:00 (変更の可能性あり)、カード・電子マネー・QR 可、2023年9月29日オープン、公式は大丸京都店のページ。口コミ (2025〜2026年、英語): ショーケースから4品か6品 (10品は予約) のデリを選び、メインを付けるかどうか選ぶ、野菜のサラダバー・スープ・ご飯 (玄米可)・ドリンクバー、メイン付き2,100〜2,150円、一部のメインは+250円、玄米+50円、昼は60分制、予約がおすすめ、テラスのバーベキュー (2025年4月)、Gojuro group の店 (2026年8月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B492926414/', R + 'B532702599/', R + 'B532776541/', R + 'B532865432/', R + 'B533380806/', R + 'B533821436/', R + 'B535835718/', R + 'B535839810/', R + 'B536363474/', R + 'B537249710/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point-and-pick showcase; waiting list at the door.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条通高倉西入立売西町79 大丸京都店 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and Daimaru floor page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003920, 135.762151), 0.1 m from kyoto_la_risotteria_daimaru (same Daimaru 8F); GSI matched only the town (立売西町), so approximate — moved 6 m south-east to (35.003882, 135.762198), 6.1 m clearance; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532865432/', R + 'B533821436/', R + 'B532702599/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Four delis with a main, salad bar and drink bar', '¥2,100–2,150', 'Lunch sets', 'ask', 'ask', 'August 2026 reviews.', 'deli4_main'),
      it('', '', 'Hamburg steak main (supplement)', '+¥250', 'Lunch sets', 'ask', 'no', 'August 2026 review.', 'hamburg'),
      it('', '', 'Brown rice (supplement)', '+¥50', 'Lunch sets', 'ask', 'ask', 'July 2026 review.', 'genmai'),
    ] }, {
    cuisine: '野菜中心のランチのセット: ショーケースから4品か6品 (10品は予約) のデリを選び、メインあり・なしを選ぶ — 鰻、チーズのハンバーグ、魚 — 野菜のサラダバー、スープ、ご飯か玄米、ドリンクバー付き。メイン付き2,100〜2,150円、一部のメインは+250円、玄米+50円 (2026年7〜9月)、チキンマヨ、レモンのメンチカツ、コテージパイ、スパニッシュオムレツ、バンバンジーなどのデリ (2026年)、テラスの手ぶらバーベキュー (2025年4月)',
    neighborhood: '大丸京都店8F、四条烏丸。烏丸駅から徒歩2分',
    gf_detail: '要確認。サラダバーや野菜のデリが多いが、カツ、コテージパイ、パスタサラダ、パンもある (2026年の口コミ)。',
    vegan_detail: '要確認。野菜のサラダバーと野菜のデリがあるが、ドレッシングやほとんどのメインに肉・魚・卵・乳製品を含む (2026年の口コミ)。',
    notes: '[野菜のデリ・大丸京都店8F] 百貨店の屋上テラスのにぎやかな店。ショーケースから野菜たっぷりのデリを選び、メインを付けてもよく、サラダバーと飲み物はセルフ。夜はテラスでバーベキュー。昼は2,000〜2,500円ほど、行列あり。',
  });
}

// ================================================================ シュウマイ酒場ピクニック
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040905/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_shumai_sakaba_picnic', name: 'シュウマイ酒場ピクニック (Shumai Sakaba Picnic)', category: 'OMNI',
    lat: 35.002634, lng: 135.76218, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: shumai wrappers are wheat, and there are baguettes and fried dishes (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken and lamb shumai, chicken rillettes, fried chicken (2025 reviews; Tabelog).',
    hours_raw: 'Tue–Sun, holidays and the days around them 17:00–22:00 (food L.O. 21:00, drinks 21:30); closed Mondays (Tabelog). Otoshi charge ¥500 (Tabelog Japanese original 「お通し代500円頂戴しております」). Cards and PayPay; no e-money (Tabelog). 15 seats, counter and tables (Tabelog; May 2025 review). On Ayanokoji near Shijo-Karasuma, 5 min from Karasuma or Shijo (Tabelog; January 2025 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ayanokoji, Shijo-Karasuma — 5 min from Karasuma Stn',
    cuisine: 'Handmade shumai, spice dishes and natural wine: shumai of pork, chicken and lamb, steamed or fried (Tabelog; May 2025) — Kyoto pork with homemade XO sauce, two for ¥580 (April 2025), New Zealand lamb grilled (January 2025); spiced grilled lamb, fermented vegetables, Hirai beef steak (Tabelog); chicken rillettes with cheese baguette, spicy or plain fried chicken ¥780 (April 2025), spiced fried burdock (May 2025)',
    website: null, gmaps: gm('シュウマイ酒場ピクニック 京都'), menu_url: null,
    notes: '[Shumai & natural wine · Shijo-Karasuma] A small, bright pink-and-green bistro-izakaya on Ayanokoji making three kinds of juicy shumai — pork, chicken, lamb — with spice dishes and natural wines; good for one. About ¥2,000–4,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Formerly a bistro on the same site, with a vivid red-and-green interior (January 2025 review); bright pink wallpaper (Tabelog).',
      philosophy: 'Handmade shumai with spices and natural wine (Tabelog).',
      specialty: 'Three-meat handmade shumai.',
      anecdotes: [
        { text: 'A January 2025 diner compared the wrappers of gyoza and shumai over steamed pork and grilled lamb shumai.', source: R + 'B501279002/' },
        { text: 'An April 2025 diner found the Kyoto pork shumai with house XO sauce good without soy sauce.', source: R + 'B505299442/' },
        { text: 'A May 2025 passer-by, drawn in by the sign, had steamed pork shumai and spiced fried burdock.', source: R + 'B506657495/' },
      ],
      japanese_sources_summary: '食べログ: シュウマイ酒場ピクニック、居酒屋・飲茶・ビストロ、下京区神明町233-3 木原ビル1F、阪急烏丸駅・地下鉄四条駅から徒歩5分、火〜日・祝日・祝日の前日・祝日の翌日 17:00〜22:00 (料理 L.O. 21:00、ドリンク L.O. 21:30)、月曜休み、お通し代500円、カード・PayPay 可、電子マネー不可、15席、豚・鶏・ラムの3種の手作りシュウマイ、スパイスの料理、発酵野菜、Hirai beef のステーキ、厳選の自然派ワイン、ピンクの壁紙 (紹介文、英訳)。口コミ (2025年、英語): 京都の豚のシュウマイと自家製 XO 醤2個580円、ニュージーランドのラム、鶏のリエットとチーズのバゲット、唐揚げ780円、スパイスのごぼうの揚げ物、元はビストロ。',
      confidence: 'medium', sources: [TB, R + 'B501279002/', R + 'B505299442/', R + 'B506657495/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bistro-izakaya; solo-friendly (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区神明町233-3 木原ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2025.' },
    pin_source: `Tabelog ${TB} (35.002634, 135.762180); cross-checked: GSI 京都府京都市下京区神明町233番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505299442/', TB],
    price_note: 'Prices from an April 2025 review; otoshi from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Kyoto pork shumai with XO sauce (2)', '¥580', 'Shumai', 'no', 'no', 'April 2025 review.', 'pork_shumai'),
      it('', '', 'Fried chicken (spicy or plain)', '¥780', 'Plates', 'no', 'no', 'April 2025 review.', 'karaage'),
      it('', '', 'Otoshi (per person)', '¥500', 'Charge', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '手作りのシュウマイ、スパイスの料理、自然派ワイン: 豚・鶏・ラムのシュウマイを蒸しか揚げで (食べログ、2025年5月) — 京都の豚と自家製 XO 醤の2個580円 (2025年4月)、ニュージーランドのラムの焼き (2025年1月)、スパイスのラムのグリル、発酵野菜、Hirai beef のステーキ (食べログ)、鶏のリエットとチーズのバゲット、辛口かプレーンの唐揚げ780円 (2025年4月)、スパイスのごぼうの揚げ物 (2025年5月)',
    neighborhood: '綾小路、四条烏丸。烏丸駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。シュウマイの皮は小麦で、バゲットや揚げ物もある (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚・鶏・ラムのシュウマイ、鶏のリエット、唐揚げ (2025年の口コミ、食べログ)。',
    notes: '[シュウマイと自然派ワイン・四条烏丸] 綾小路の小さなピンクと緑のビストロ居酒屋。豚・鶏・ラムの3種のジューシーなシュウマイに、スパイスの料理と自然派ワイン。一人でも。2,000〜4,000円ほど。',
  });
}

save();
