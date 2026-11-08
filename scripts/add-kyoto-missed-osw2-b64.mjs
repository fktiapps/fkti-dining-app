// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 64.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   + かっぱ寿司 Kappa Zushi (Pontocho Edomae sushi house for 40+ years, with a Kamo yuka; run by 黛 / suishin.co.jp, the group behind
//     先斗町すいしん 本店 — a different concept; not the national conveyor chain)
//   + いなほ Inaho (Hokkaido seafood and sake in a Gion alley; run single-handed by an owner from Sapporo)
//   - 京都南座 なだ万 とんかつ — large parent (なだ万)
//   - 竹長 — a dried-goods shop at Nishiki; thin as a place to eat
//   - 大衆酒泉テルマエ 京都四条河原町泉 — chain
//   + 海鮮 Kaisen (fish izakaya near Sanjo-Kawaramachi with about 50 sakes; since 2012)
//   + The Sakura (French eaten with chopsticks, next to Minami-za; opened 2026; run by Kyoto-based 株式会社ファーマフーズ)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings
//   on these four (黛's 先斗町すいしん 本店 is in data; Suishin's multi-city 酔心 was a different company).
//   Service charges: かっぱ寿司 ¥418 appetizer; いなほ ¥500–600 appetizer; 海鮮 none; The Sakura 10% (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; かっぱ寿司 ~2 m, いなほ ~1 m, 海鮮 ~5 m (off 燻吟 かず家, same building) and The Sakura ~9 m
//   (off 和牛ぱんが, same building 3F) offsets, each now 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-64');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042589', '京都南座 なだ万 とんかつ: a brand of a large parent — 株式会社なだ万 (Tokyo) runs some 30 restaurants in three countries plus 43 deli shops (company press release), including 京都南座 なだ万茶屋 and なだ万厨房 at JR Kyoto Isetan');
skip('26018751', '竹長: a dried-goods shop at Nishiki known for take-away fruit sandwiches; the only 2025–26 review (December 2025) is about a gift of wakame senbei. Thin as a place to eat; not drafted');
skip('26044215', '大衆酒泉テルマエ 京都四条河原町泉: a chain — a press release (Sendai opening, February 2026) gives 20 shops nationwide run by 株式会社BIRCH; our Osaka crawl also holds the 大阪駅前第2ビル shop');

// ================================================================ かっぱ寿司
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002011/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.suishin.co.jp/';
  const WD = day(['17:00', '23:00']), SU = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_kappa_zushi_pontocho', name: 'かっぱ寿司 (Kappa Zushi, Pontocho)', category: 'OMNI',
    lat: 35.005632, lng: 135.771241, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi ordered by the piece, sashimi, simmered and grilled fish, tempura; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and fish restaurant (Tabelog).',
    hours_raw: 'Monday–Saturday 17:00–23:00 (last order 22:30); Sunday and holidays also 12:00–15:00 (last order 14:30); open all year (Tabelog). Reservations taken. Cards and e-money accepted (Tabelog). ¥418 appetizer charge a person (Tabelog). 87 seats over two floors: counters where you watch the chefs, and sunken horigotatsu seating; non-smoking; a Kamo River noryo-yuka from May, with a course menu (Tabelog; June 2026). Many foreign guests (2026 reviews). Not related to the national conveyor-belt chain of the same name — run by the Kyoto company 黛 (Tabelog website link; suishin.co.jp). On Pontocho north of Shijo (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — on the Kamo River',
    cuisine: 'Edomae sushi in Pontocho for over 40 years, at reasonable prices (Tabelog) · sushi ordered one piece at a time — chutoro, eel, ikura, flounder, sweet shrimp, scallop, tekka maki (2026 reviews) · sashimi platters, kombu-cured and simmered sea bream, Saikyo-grilled mutsu, grilled ayu, bamboo-shoot tempura, fish-head soup (2026 reviews) · sushi courses on the summer yuka (June 2026) · spend about ¥2,000–8,000 a person (2026 reviews)',
    website: null, gmaps: gm('かっぱ寿司 先斗町'), menu_url: TB,
    notes: "[Sushi · Pontocho, an old-school Edomae house on the Kamo] A busy two-floor sushi house on Pontocho — not the conveyor chain — serving Edomae nigiri by the piece for over 40 years, at prices that are reasonable for the street. Watch the chefs from the counter, or book the summer yuka over the Kamo for a sushi course. Open daily; lunch on Sundays.",
    chef_bio: { chef_name: null, roles: ['Chefs not named'], origin: null,
      background: 'The shop says it has run a sushi restaurant in Pontocho for over 40 years, serving Edomae sushi from skilled chefs at fair prices (Tabelog). Its Tabelog website link is suishin.co.jp, the site of 黛 (Mayuzumi), a Kyoto company founded in Pontocho in 1969 that runs about 18 shops, mostly in Kyoto, including 先斗町すいしん.',
      philosophy: 'Orthodox dishes made better than anywhere, cooked in each shop by two to eight craftsmen (黛 company site).',
      specialty: 'Edomae nigiri by the piece.',
      anecdotes: [
        { text: 'A July 2026 party rained off the yuka was moved to a window seat over the river and allowed to switch from the course to a la carte.', source: R + 'B532726902/' },
        { text: 'A June 2026 diner had a yuka sushi course with views of Shijo Bridge and Minami-za, despite a swollen river.', source: R + 'B530739589/' },
        { text: 'A January 2026 returnee finished a long sushi run with a bowl of fish-head soup.', source: R + 'B521633337/' },
      ],
      japanese_sources_summary: '食べログ: かっぱ寿司、寿司・日本料理・海鮮、京都市中京区先斗町四条上ル松本町160 栞ビル1F、月〜土 17:00〜23:00 (L.O.22:30)、日祝 12:00〜15:00 (L.O.14:30)・17:00〜23:00、年中無休、予約可、カード・電子マネー可、お通し代1人税込418円、87席、禁煙、1階・2階にカウンターと掘りごたつ、5月から鴨川納涼床、先斗町で40年以上の寿司店、職人の江戸前寿司をお手頃に、ウェブサイトは suishin.co.jp (黛: 昭和44年に先斗町で創業、京都を中心に18店舗)。口コミ (2026年、英語): 1貫ずつ注文、中トロ、鰻、いくら、ひらめ、甘海老、帆立、鉄火巻、刺身盛り合わせ、鯛の昆布締めと煮付け、むつの西京焼き、鮎の塩焼き、筍の天ぷら、あら汁、床のコース、外国からの客が多い、1人2,000〜8,000円ほど。',
      confidence: 'low', sources: [TB, SITE, R + 'B521633337/', R + 'B524877282/', R + 'B526078717/', R + 'B526877494/', R + 'B527103251/', R + 'B528422644/', R + 'B529511754/', R + 'B530739589/', R + 'B532726902/', R + 'B533194011/', R + 'B534942279/'] },
    cultural_comfort: { level: 'english', note: 'Many foreign guests; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上ル松本町160 栞ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005627, 135.771224), offset ~2m to clear 先斗町 紫水 (8m); cross-checked: GSI 京都府京都市中京区松本町160番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B521633337/', R + 'B526877494/'],
    price_note: 'No published item prices; reviewers spent about ¥2,000–8,000 a person (2026).', last_checked: TODAY, items: [
      it('', '', 'Nigiri by the piece (chutoro, eel, ikura, flounder and more)', '', 'Sushi', 'ask', 'no', '', 'nigiri'),
      it('', '', 'Assorted sashimi', '', 'Dishes', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Fish-head soup', '', 'Dishes', 'ask', 'no', '', 'arajiru'),
    ] }, {
    cuisine: '先斗町で40年以上、手頃な江戸前寿司 (食べログ)・寿司は1貫ずつ注文: 中トロ、鰻、いくら、ひらめ、甘海老、帆立、鉄火巻 (2026年の口コミ)・刺身盛り合わせ、鯛の昆布締めと煮付け、むつの西京焼き、鮎の塩焼き、筍の天ぷら、あら汁 (2026年の口コミ)・夏は床で寿司のコース (2026年6月)・1人2,000〜8,000円ほど (2026年の口コミ)',
    neighborhood: '先斗町、四条の北。鴨川沿い',
    gf_detail: '要確認。1貫ずつの江戸前寿司、刺身、煮魚と焼き魚、天ぷら。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司と魚の店 (食べログ)。',
    notes: '[寿司・先斗町、鴨川の老舗江戸前] 先斗町のにぎやかな2階建ての寿司店。回転寿司チェーンとは別で、40年以上、通りにしては手頃な値段で江戸前の握りを1貫ずつ。カウンターで職人の手元を眺めるか、夏は鴨川の床で寿司のコースを。年中無休、日曜は昼も。',
  });
}

// ================================================================ いなほ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031657/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_inaho_gion', name: 'いなほ (Inaho)', category: 'OMNI',
    lat: 35.003037, lng: 135.772385, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hokkaido seafood — sashimi, crab, grilled fish, butter-sautéed clams — plus jingisukan and oden; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Hokkaido seafood and lamb (Tabelog).',
    hours_raw: '17:30–22:00 Monday–Saturday (last orders around 21:00); closed Sunday and over New Year (Tabelog; April 2024). Reservations taken. Cards accepted; no e-money (Tabelog). Appetizer charge ¥500–600 (Tabelog). 19 seats: 7 at the counter and a 12-seat tatami room; smoking allowed; no one under 20 (Tabelog). Choose from the day’s fish in the showcase; dishes beyond the menu on request (Tabelog). Down an alley off Yamato-oji south of Shijo, near Minami-za, 4 min from Gion-Shijo Stn (Tabelog; December 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Yamato-oji south of Shijo — 4 min from Gion-Shijo Stn',
    cuisine: 'Hokkaido seafood and sake in Gion, sourced direct by an owner from Sapporo (Tabelog; 2023–2025 reviews) · kinki and live surf-clam sashimi, king, hanasaki and hairy crab, herring and hokke in autumn, grilled herring with roe (2022–2025) · jingisukan lamb, kajika soup, salmon izushi, ikura and mentaiko rice (2023–2024) · grilled cod milt, butter-sautéed surf clams, baked crab shell with sake poured in (March 2026) · Hokkaido sakes, some rare (Tabelog) · roughly ¥10,000–12,000 a person (2021)',
    website: null, gmaps: gm('いなほ 祇園 大和町'), menu_url: TB,
    notes: "[Hokkaido seafood · Gion, a one-woman alley izakaya] A tiny 19-seat izakaya down an alley by Minami-za, run single-handed by an owner from Sapporo who brings in Hokkaido fish direct — kinki, surf clam, hairy and king crab, herring — plus jingisukan and Hokkaido sake. Pick from the showcase. Smoking allowed; over-20s only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (from Sapporo), not named'], origin: 'Sapporo, Hokkaido (reviews).',
      background: 'Reviewers (2023–2025) describe a small Gion izakaya run entirely by its owner, a woman from Sapporo, who sources seafood directly from Hokkaido; one saw it featured on Yomiuri TV.',
      philosophy: null,
      specialty: 'Hokkaido seafood and jingisukan.',
      anecdotes: [
        { text: 'An April 2025 guest was given seasoned-rice inari sushi to take home and ate it for breakfast.', source: R + 'B506783047/' },
        { text: 'A March 2026 regular, on a mother’s tip, had sake poured into the emptied baked crab shell to warm it.', source: R + 'B470769774/' },
        { text: 'A January 2025 diner came after the New Year show at Minami-za and a visit to Seimei Shrine.', source: R + 'B498723388/' },
      ],
      japanese_sources_summary: '食べログ: いなほ、海鮮・居酒屋・日本料理、京都市東山区大和町18-17、京阪祇園四条駅から徒歩4分、月〜土 17:30〜22:00、日曜定休、年末年始休み、予約可、カード可、電子マネー不可、お通し500〜600円、19席 (座敷12、カウンター7)、喫煙可、20歳未満入店不可、北海道直送の鮮魚とジンギスカン、ショーケースから本日のおすすめを選べる、北海道の地酒、インボイス T3810496895799。口コミ (2021〜2026年、英語): 札幌出身の店主がひとりで切り盛り、路地の奥、キンキと活ホッキ貝の刺身、タラバガニ・花咲ガニ・毛蟹、秋はニシンやホッケの刺身、子持ちニシン焼き、ジンギスカン、カジカ汁、鮭のいずし、いくらと明太子のご飯、白子焼き、ホッキのバター焼き、甲羅焼きに日本酒、いなり寿司のお土産、読売テレビで紹介、1人1万〜1万2千円ほど (2021年)。',
      confidence: 'low', sources: [TB, R + 'B452271563/', R + 'B463568870/', R + 'B470769774/', R + 'B474083242/', R + 'B476141178/', R + 'B483912760/', R + 'B487064786/', R + 'B497876142/', R + 'B498552821/', R + 'B498723388/', R + 'B506783047/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny counter; smoking allowed; over-20s only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区大和町18-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.003042, 135.772385), offset ~1m to clear 松本酒場 (9m); cross-checked: GSI 京都府京都市東山区大和町18番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B470769774/'],
    price_note: 'No published item prices; a 2021 review put dinner at about ¥10,000–12,000 a person.', last_checked: TODAY, items: [
      it('', '', 'Hokkaido sashimi platter (e.g. kinki, live surf clam)', '', 'Seafood', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Jingisukan (Hokkaido-style lamb)', '', 'Hokkaido', 'ask', 'no', '', 'jingisukan'),
      it('', '', 'Baked crab shell', '', 'Seafood', 'ask', 'no', '', 'kouraiyaki'),
    ] }, {
    cuisine: '札幌出身の店主が直送する北海道の魚介と地酒 (食べログ、2023〜2025年の口コミ)・キンキと活ホッキ貝の刺身、タラバガニ・花咲ガニ・毛蟹、秋はニシンやホッケ、子持ちニシンの焼き物 (2022〜2025年)・ジンギスカン、カジカ汁、鮭のいずし、いくらと明太子のご飯 (2023〜2024年)・白子焼き、ホッキのバター焼き、日本酒を注ぐ甲羅焼き (2026年3月)・北海道の地酒、珍しいものも (食べログ)・1人1万〜1万2千円ほど (2021年)',
    neighborhood: '祇園、大和大路の四条下ル。祇園四条駅から徒歩4分',
    gf_detail: '要確認。北海道の魚介 (刺身、蟹、焼き魚、ホッキのバター焼き)、ジンギスカン、おでん。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。北海道の魚介と羊肉 (食べログ)。',
    notes: '[北海道の魚介・祇園、店主ひとりの路地の居酒屋] 南座近くの路地の奥、19席の小さな居酒屋。札幌出身の店主がひとりで切り盛りし、北海道から直送のキンキ、ホッキ貝、毛蟹やタラバガニ、ニシンに、ジンギスカンと北海道の地酒。ショーケースから選んで。喫煙可、20歳以上のみ、日曜休み。',
  });
}

// ================================================================ 海鮮
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26021025/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://izakaya-kaisen.net';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_izakaya_kaisen_kawaramachi', name: '海鮮 (Kaisen)', category: 'OMNI',
    lat: 35.006494, lng: 135.76965, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, grilled and simmered fish, fried fish; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-only izakaya with few vegetable dishes (reviews).',
    hours_raw: '17:00–24:00 (food last order 23:00, drinks 23:30); closed Wednesday and some other days; may close early when ingredients run out (Tabelog). Reservations taken. Cash only — no cards, e-money or QR (Tabelog). No service, cover or seat charge (Tabelog). 22 seats at the counter and tables; smoking allowed (Tabelog; September 2025). Food can be slow when busy — the owner often cooks alone (Tabelog; January and February 2025). On the 2nd floor of the Nagayoshi Building, south of Sanjo on Kawaramachi, 5 min from Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, south of Sanjo — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Fish izakaya buying daily at Kyoto Central Wholesale Market, opened 2012 (Tabelog) · sashimi from ¥500; prized tuna; assorted sashimi "boat" ¥2,400–2,800 (Tabelog; October 2024, February 2025) · grilled collar, buri daikon, kombu-cured fish, fried monkfish; clam-packed asparagus rice to finish (2024–2026) · around 50 sakes — Jikon, Nabeshima, Hakurakusei, Juyondai and more — from ¥500; draft beer about ¥500–550; weekday all-you-can-drink sake ¥2,640 (Tabelog; 2024–2026)',
    website: SITE, gmaps: gm('海鮮 居酒屋 河原町 北車屋町'), menu_url: TB,
    notes: "[Fish izakaya · Kawaramachi near Sanjo, sashimi and sake] A no-frills second-floor fish bar buying daily at Kyoto's central market, with sashimi from ¥500, a big sashimi boat for under ¥3,000 and about 50 sakes from ¥500 — weekday all-you-can-drink sake too. The owner cooks, so it can be slow when full. Cash only; smoking allowed; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-cook not named'], origin: null,
      background: 'Opened in September 2012 (Tabelog). The shop says it goes to Kyoto Central Wholesale Market itself and keeps labour and décor costs low to put the money into fish (Tabelog). Reviewers (2025) describe the owner cooking alone with newly hired staff.',
      philosophy: 'Freshness and flavour first; you have to see the fish yourself, so it is bought direct at the market (Tabelog).',
      specialty: 'Sashimi platters and sake.',
      anecdotes: [
        { text: 'A February 2025 pair sat by the kitchen, where the busy owner still found time to recommend sakes.', source: R + 'B501286272/' },
        { text: 'A March 2024 first-timer came back the next week for the clam-filled asparagus rice.', source: R + 'B480413115/' },
        { text: 'An October 2026 diner found five kinds, shellfish included, on a great-value sashimi platter.', source: R + 'B536722487/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮、居酒屋・海鮮・日本酒バー、京都市中京区北車屋町276 永吉ビル2F、河原町駅から徒歩5分、17:00〜24:00 (L.O.フード23:00、ドリンク23:30)、水曜定休、臨時休業あり、材料がなくなり次第早じまいも、予約可、カード・電子マネー・QR不可、サービス料・突き出し料・席料なし、22席、喫煙可、2012年9月6日オープン、京都中央卸売市場で直接仕入れ、人件費と内装を抑えて魚に、刺身500円から、生ビール500円から、日本酒500円から、純米大吟醸や而今、鍋島、伯楽星など約50種。口コミ (2024〜2026年、英語): 舟盛り2,400〜2,800円、カマ焼き、ぶり大根、昆布締め、あんこうの唐揚げ、あさりたっぷりのアスパラご飯、十四代、平日のみ日本酒飲み放題2,640円、店主がひとりで調理、混むと料理が遅い。',
      confidence: 'low', sources: [TB, SITE, R + 'B480413115/', R + 'B482524480/', R + 'B495192427/', R + 'B499309957/', R + 'B501286272/', R + 'B501804515/', R + 'B515230738/', R + 'B522615987/', R + 'B534308807/', R + 'B535119549/', R + 'B536722487/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区北車屋町276 永吉ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006453, 135.769661), offset ~5m to clear 燻吟 かず家 (same building, 4m); cross-checked: GSI 京都府京都市中京区北車屋町276番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B501804515/', R + 'B535119549/'],
    price_note: 'Prices from Tabelog (shop text) and 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sashimi, per dish', '¥500', 'Fish', 'ask', 'no', 'From ¥500.', 'sashimi'),
      it('', '', 'Assorted sashimi boat', '¥2,800', 'Fish', 'ask', 'no', '¥2,400–2,800 (2024–2025).', 'funamori'),
      it('', '', 'All-you-can-drink sake (weekdays)', '¥2,640', 'Drink', 'ask', 'ask', 'October 2024.', 'sake_nomihodai'),
      it('', '', 'Draft beer', '¥550', 'Drink', 'no', 'ask', 'Before tax, August 2026.', 'beer'),
    ] }, {
    cuisine: '京都中央卸売市場で毎日仕入れる魚の居酒屋、2012年開業 (食べログ)・刺身500円から、自慢のまぐろ、刺身の舟盛り2,400〜2,800円 (食べログ、2024年10月、2025年2月)・カマ焼き、ぶり大根、昆布締め、あんこうの唐揚げ、締めはあさりたっぷりのアスパラご飯 (2024〜2026年)・而今、鍋島、伯楽星、十四代など約50種の日本酒は500円から、生ビール500〜550円ほど、平日の日本酒飲み放題2,640円 (食べログ、2024〜2026年)',
    neighborhood: '河原町、三条の南。京都河原町駅から徒歩5分',
    gf_detail: '要確認。刺身、焼き魚、煮魚、魚の揚げ物。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚ばかりの居酒屋で、野菜の料理は少ない (口コミ)。',
    notes: '[魚の居酒屋・河原町の三条下ル、刺身と日本酒] 京都の中央市場で毎日仕入れる、飾り気のない2階の魚の店。刺身は500円から、舟盛りは3,000円以下、日本酒は約50種で500円から、平日は日本酒の飲み放題も。店主が料理するので混むと遅め。現金のみ、喫煙可、水曜休み。',
  });
}

// ================================================================ The Sakura
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044371/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://thesakurakyoto.com/';
  const H = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_the_sakura_gion', name: 'The Sakura', category: 'OMNI',
    lat: 35.003585, lng: 135.772523, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses with Japanese seasonings such as miso and soy sauce, ending in a grilled rice-ball dashi chazuke; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish, wagyu, duck and shark fin (Tabelog; reviews).',
    hours_raw: 'Lunch 11:30–14:30 (food last order 13:00); dinner 17:30–21:30 (food last order 20:00); closed Wednesday (Tabelog). Reservations taken. Cards and e-money accepted (Tabelog). 10% service charge (Tabelog). 28 seats: counter by an open kitchen, tables, and private rooms with a view of Minami-za; non-smoking; skylights (Tabelog; 2026 reviews). Eaten with chopsticks throughout (Tabelog; 2026 reviews). On the 4th floor of the Shimaya Building on Shijo, next to Minami-za, a short walk from Gion-Shijo Stn (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo by Minami-za, Gion — near Gion-Shijo Stn',
    cuisine: 'French eaten with chopsticks, with Japanese touches, opened 2026 (Tabelog; reviews) · lunch "Kamogawa" course: smoked soft-boiled egg under a glass dome, bonito carpaccio, fish poêlé, charcoal-grilled wagyu top blade, grilled rice-ball dashi chazuke (June–July 2026) · dinner courses: 9 dishes with three paired wines ¥13,000; "Tsubomi" course of 10 dishes with Kyoto Hime beef fillet ¥17,500 (Tabelog); the "Sakura" course with shark fin, Ise lobster and fillet ¥33,000 (July 2026)',
    website: SITE, gmaps: gm('The Sakura 京都 祇園'), menu_url: SITE,
    notes: "[French · Gion by Minami-za, French with chopsticks] A new fourth-floor restaurant next to Minami-za serving French courses with Japanese seasonings, all eaten with chopsticks — charcoal-grilled wagyu from the open kitchen and a dashi chazuke to finish. Lunch courses; dinner from ¥13,000 with paired wine. Private rooms look onto Minami-za. 10% service; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Opened in 2026 (reviews from June 2026). Run by 株式会社ファーマフーズ of Nishikyo, Kyoto (National Tax Agency invoice register T5130001011549). The shop’s motto is "bringing French cuisine closer", with traditional techniques and a hint of Japanese flavour, eaten with chopsticks (Tabelog).',
      philosophy: 'Bring French cuisine closer: traditional French techniques with subtle Japanese flavours, eaten with chopsticks (Tabelog).',
      specialty: 'Charcoal-grilled wagyu; grilled rice-ball dashi chazuke to close the course.',
      anecdotes: [
        { text: 'A July 2026 lunch guest was surprised when hot dashi was poured over grilled rice balls at the table to end a French course.', source: R + 'B531850433/' },
        { text: 'A June 2026 diner lifted a glass dome to release cherry-wood smoke over a soft-boiled egg.', source: R + 'B530108466/' },
        { text: 'An October 2026 business dinner had a private room with a glimpse of Minami-za.', source: R + 'B538058808/' },
      ],
      japanese_sources_summary: '食べログ: The Sakura、フレンチ・洋食・創作料理、京都市東山区四条通大和大路西入中之町206 志満家ビル4F、昼11:30〜14:30 (L.O.料理13:00)、夜17:30〜21:30 (L.O.料理20:00)、水曜定休、予約可、カード・電子マネー可、サービス料10%、28席 (個室、カウンター、テーブル)、禁煙、お箸で食べるフレンチ、「フレンチをもっと身近に」、伝統の技法に和の風味、ワインと日本酒、ペアリングコース13,000円、スペシャルコース「つぼみ」 (京都姫牛のフィレなど10品) 17,500円、インボイス T5130001011549 (株式会社ファーマフーズ、京都市西京区)。口コミ (2026年、英語): 南座の隣、天窓、オープンキッチン、鴨川コースのランチ (桜チップで燻した半熟卵、鰹のカルパッチョ、魚のポワレ、和牛ミスジの炭火焼き、焼きおにぎりの出汁茶漬け)、フカヒレ、ロッシーニ、伊勢海老のスペシャルコース33,000円、個室から南座。',
      confidence: 'low', sources: [TB, SITE, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130001011549', R + 'B530059386/', R + 'B530092132/', R + 'B530108181/', R + 'B530108466/', R + 'B530384491/', R + 'B531405351/', R + 'B531850433/', R + 'B536836077/', R + 'B536890139/', R + 'B538058808/'] },
    cultural_comfort: { level: 'english', note: 'Cards accepted; chopsticks throughout; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区四条通大和大路西入中之町206 志満家ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog official listing; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB} (35.003648, 135.772589), offset ~9m to clear 和牛ぱんが 祇園四条店 (same building, 3F, 0.1m); cross-checked: GSI 京都府京都市東山区中之町206番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B530384491/'],
    price_note: 'Course prices from Tabelog set menus (regular prices, tax included; 10% service extra) and a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Dinner course, 9 dishes with three paired wines', '¥13,000', 'Dinner', 'ask', 'no', '', 'pairing'),
      it('', '', '"Tsubomi" course, 10 dishes (Kyoto Hime beef fillet)', '¥17,500', 'Dinner', 'ask', 'no', '', 'tsubomi'),
      it('', '', '"Sakura" course (shark fin, Ise lobster, fillet)', '¥33,000', 'Dinner', 'ask', 'no', 'Reservation only; July 2026.', 'sakura'),
      it('', '', 'Lunch "Kamogawa" course', '', 'Lunch', 'ask', 'no', '', 'kamogawa'),
    ] }, {
    cuisine: 'お箸で食べる和の風味のフレンチ、2026年開業 (食べログ、口コミ)・ランチの「鴨川コース」: ガラスの蓋で燻した半熟卵、鰹のカルパッチョ、魚のポワレ、和牛ミスジの炭火焼き、焼きおにぎりの出汁茶漬け (2026年6〜7月)・ディナー: ワイン3杯のペアリング付き9品13,000円、京都姫牛のフィレの「つぼみ」コース10品17,500円 (食べログ)、フカヒレ・伊勢海老・フィレの「さくら」コース33,000円 (2026年7月)',
    neighborhood: '四条の南座の隣、祇園。祇園四条駅の近く',
    gf_detail: '要確認。味噌や醤油を使うフレンチのコース、締めは焼きおにぎりの出汁茶漬け。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、和牛、鴨、フカヒレのコース (食べログ、口コミ)。',
    notes: '[フレンチ・祇園の南座隣、お箸のフレンチ] 南座の隣のビル4階にできた、和の調味料を使いお箸で食べるフレンチ。オープンキッチンで炭火焼きする和牛、締めは出汁茶漬け。ランチのコースあり、夜はワインのペアリング付きで13,000円から。個室から南座。サービス料10%、水曜休み。',
  });
}

save();
