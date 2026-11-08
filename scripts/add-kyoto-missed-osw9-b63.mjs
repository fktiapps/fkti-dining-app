// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 63.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + Saigon★Saigon 龍馬 (Vietnamese lunch sets and izakaya in a lantern-hung machiya; since June 2022)
//   + うつりぎ食堂 Utsurigi Shokudo (one-man Italian-and-Chinese counter in Gion with homemade fruit liqueurs; since 2017)
//   + 日知庵 Nitchi An (charcoal yakitori and sake izakaya off Kawaramachi; cash, smoking allowed)
//   - 玄品 京都四条 — chain (関門海's 玄品: 60+ shops in Japan)
//   - 大國屋 — no 2025–26 review (latest fetched review is older); the family's eel house 大國屋鰻兵衞 is already in data
//   + 宮川町 天匠 Miyagawacho Tensho (tempura counter by a former head chef of Tempura Yoshikawa; since May 2024)
//   - 寿し 祇園 松田屋 — no 2025–26 review (latest is November 2024)
//   Same-name counts first (data and queue-status.jsonl): none for うつりぎ, 日知庵, 天匠, 松田屋, 玄品; 龍馬 only in
//   unrelated records (Tokyo 鮨 龍馬; a Kyoto street name). "Tensho" in Osaka data is a sushi course name, unrelated.
//   No earlier rulings. None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: うつりぎ食堂 「なし」 (the English translation wrongly says
//   a fee may be added); Saigon, 日知庵 and 天匠 have no section (a February 2026 review says 天匠's lunch price
//   includes tax and service).
//   Pins (checked against main): all four ≥ 8 m from every other record; no offsets.
//   Ramen: うつりぎ食堂 lists Ramen among its categories, but it is an Italian/Chinese eatery with one clam ramen
//   on the menu and too little bowl detail — no ramen block.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-63');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042669', 'chain: 玄品 (ふぐ料理 玄品, run by 関門海) — 62 shops in Japan and 5 overseas (FY2024 securities report); 60 shops in a July 2026 press release');
skip('26013413', 'no 2025–26 review: the latest fetched review predates 2025; the family eel house 大國屋鰻兵衞 is already in data (mp_okuniya)');
skip('26005067', 'no 2025–26 review: the latest of the ten fetched reviews is from November 2024');

// ================================================================ Saigon★Saigon 龍馬
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037791/'; const R = TB + 'dtlrvwlst/';
  const MAC = 'https://macaro-ni.jp/112663?page=3';
  const D = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_saigon_saigon_ryoma', name: 'Saigon★Saigon 龍馬 (Saigon Saigon Ryoma)', category: 'OMNI',
    lat: 35.006827, lng: 135.766485, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-noodle pho and rice plates, but also fried spring rolls, shrimp wrapped in fried noodles and sauces of unknown make-up (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, beef and seafood pho, pork and shrimp dishes (2026 reviews).',
    hours_raw: 'Tue–Sun 11:30–15:00 (L.O. 14:30) and 17:00–23:00 (L.O. 22:00); closed Mondays — open on a Monday holiday and closed the next Tuesday instead (Tabelog). Bookings taken; private hire by phone (Tabelog). Cards and QR (PayPay, Alipay, WeChat Pay); no e-money (Tabelog). 47 seats over two floors; non-smoking; wheelchair accessible; children welcome (Tabelog). 6 min walk from Hankyu Kawaramachi (Tabelog), near Nishiki Market (May 2026 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nakagyo, near Nishiki Market — 6 min from Kawaramachi Stn',
    cuisine: 'Vietnamese lunch sets and a Vietnamese izakaya at night: the Saigon lunch of several small dishes (¥1,540, May 2026), seafood spicy pho lunch (¥1,260, May 2026), com am phu rice set (¥1,150, June 2026), chicken or beef pho (beef ¥935, July 2026) with lu rou fan or seafood rice; fresh, fried and steamed spring rolls, green papaya salad, Da Nang grilled squid, shrimp wrapped in fried Hong Kong noodles, water spinach with beef, cashew chicken, coconut pudding; Vietnamese beer, coriander-lemon highball, Dalat wine by the bottle (2026 reviews)',
    website: null, gmaps: gm('Saigon★Saigon 龍馬 京都'), menu_url: null,
    notes: '[Vietnamese · Nishiki] A machiya off Nishiki Market hung with Vietnamese lanterns, serving pho and multi-dish lunch sets by day and a Vietnamese izakaya menu at night. Lunch about ¥1,000–1,500; dinner about ¥4,000.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Opened 17 June 2022 (Tabelog). A converted Kyoto townhouse decorated with Vietnamese lanterns (October 2026 review; macaro-ni). An October 2026 diner understood the chef to be Vietnamese; a July 2026 diner described the staff as Vietnamese.',
      philosophy: null,
      specialty: 'Pho and Vietnamese lunch sets.',
      anecdotes: [
        { text: 'A June 2026 diner came for dinner after a morning at the Kyoto International Manga Museum and found every dish reasonably good but the seasoning short of sharp.', source: R + 'B530033062/' },
        { text: 'A diner who had booked a birthday lunch in August 2026 was seated at the counter despite the reservation.', source: R + 'B534417901/' },
        { text: 'A July 2026 diner stopped in at 7:13 pm for a second dinner of beef pho at ¥935.', source: R + 'B532683014/' },
        { text: 'An October 2026 diner ordered salt-seared bonito, Da Nang grilled squid and shrimp wrapped in fried Hong Kong noodles, and noted Dalat wine by the bottle at about ¥4,000.', source: R + 'B537732139/' },
      ],
      japanese_sources_summary: '食べログ: Saigon★Saigon 龍馬、ベトナム料理、中京区伊勢屋町345、阪急河原町駅から徒歩6分、火〜日 11:30〜15:00 (L.O. 14:30)・17:00〜23:00 (L.O. 22:00)、月曜休み (祝日の場合は営業し翌火曜休み)、予約可、カードと QR 決済可、電子マネー不可、47席 (1階19席、2階28席)、禁煙、車いす可、子ども可、2022年6月17日オープン。macaro-ni: 京都河原町駅から徒歩7分、2022年6月オープン、ベトナムと京都が融合した空間とランタン、定番の「Saigonランチ」は6種類から選べ、青パパイヤのサラダ、カインチュア、デザート付きで1,430円 (記事の日付不明)。口コミ (2026年5月〜10月、英語): Saigon lunch 1,540円、海鮮の辛いフォーのランチ 1,260円、Com Am Phu のセット 1,150円、牛肉のフォー 935円、生春巻き・揚げ春巻き・蒸し春巻き、Da Nang の焼きイカ、ベトナム人のスタッフ。',
      confidence: 'medium', sources: [TB, MAC, R + 'B528330889/', R + 'B528796812/', R + 'B529380485/', R + 'B530033062/', R + 'B532683014/', R + 'B534417901/', R + 'B534687832/', R + 'B535073566/', R + 'B535280794/', R + 'B537732139/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; Vietnamese staff (July 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区伊勢屋町345',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006827, 135.766485); cross-checked: GSI 京都府京都市中京区伊勢屋町345番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528796812/', R + 'B529380485/', R + 'B532683014/', MAC],
    price_note: 'Prices from May–July 2026 reviews; macaro-ni (undated) gives ¥1,430 for the Saigon lunch.', last_checked: TODAY, items: [
      it('', '', 'Saigon lunch (several small dishes)', '¥1,540', 'Lunch', 'ask', 'no', 'May 2026 review; ¥1,430 in an undated macaro-ni article.', 'saigon_lunch'),
      it('', '', 'Seafood spicy pho lunch', '¥1,260', 'Lunch', 'ask', 'no', 'May 2026 review.', 'seafood_pho_lunch'),
      it('', '', 'Com am phu set', '¥1,150', 'Lunch', 'ask', 'no', 'June 2026 review.', 'com_am_phu'),
      it('', '', 'Beef pho', '¥935', 'Pho', 'ask', 'no', 'July 2026 review.', 'beef_pho'),
      it('', '', 'Mega highball', '¥858', 'Drinks', 'ask', 'ask', 'May 2026 review.', 'mega_highball'),
    ] }, {
    cuisine: 'ベトナム料理のランチセットと夜のベトナム居酒屋: 小皿が並ぶ Saigon lunch (1,540円、2026年5月)、海鮮の辛いフォーのランチ (1,260円、2026年5月)、Com Am Phu のセット (1,150円、2026年6月)、鶏または牛肉のフォー (牛肉 935円、2026年7月) と魯肉飯か海鮮ご飯、生春巻き・揚げ春巻き・蒸し春巻き、青パパイヤのサラダ、Da Nang の焼きイカ、海老の揚げ麺巻き、空芯菜と牛肉の炒め物、鶏のカシューナッツ炒め、ココナッツプリン、ベトナムビール、パクチーとレモンのハイボール、Dalat のワインのボトル (2026年の口コミ)',
    neighborhood: '中京区、錦市場の近く。河原町駅から徒歩6分',
    gf_detail: '要確認。米麺のフォーやご飯ものがあるが、揚げ春巻き、揚げ麺で巻いた海老、中身が分からないたれもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏・牛・海鮮のフォー、豚肉や海老の料理 (2026年の口コミ)。',
    notes: '[ベトナム料理・錦] 錦市場の近く、ベトナムのランタンを吊るした町家。昼はフォーと品数の多いランチセット、夜はベトナム居酒屋。昼は1,000〜1,500円ほど、夜は4,000円ほど。',
  });
}

// ================================================================ うつりぎ食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030123/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '26:00']);
  put({
    id: 'kyoto_utsurigi_shokudo', name: 'うつりぎ食堂 (Utsurigi Shokudo)', category: 'MOM_AND_POP',
    lat: 35.005746, lng: 135.772769, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Much of the menu is wheat — handmade pasta, ramen, dandan noodles, dumplings — but there are meat, fish and vegetable plates too (2018–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-and-clam ramen, gizzard ajillo, roast beef, mapo tofu (2018–2025 reviews).',
    hours_raw: 'Tue–Sat 17:30–26:00, Sun 17:30–22:00; last order 30 min before closing; closed Mondays (Tabelog). Bookings taken; counter or table by availability; a two-hour limit may apply (Tabelog). Cards and Rakuten Pay; no e-money (Tabelog). No service charge (Tabelog Japanese original 「なし」). 9 seats; all non-smoking from January 2026 (Tabelog). 1 min from Gion-Shijo Stn exit 9 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: day(['17:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nawate, Gion — 1 min from Gion-Shijo Stn',
    cuisine: 'Italian and Chinese small plates with homemade fruit liqueurs: white dandan noodles (Tabelog), chicken-salt clam ramen with thin straight noodles (June 2025), handmade pasta, steamed chicken with cauliflower, roast beef, Southern French–style mussel soup, an omakase of meat and fish (2018–2021), water dumplings (November 2023), gizzard and green-onion ajillo, Sichuan mapo tofu and dandan noodles (October 2024); fruit liqueurs and syrups with or without alcohol — ume, sudachi, ginger, kiwi, hassaku (2018–2025 reviews)',
    website: null, gmaps: gm('うつりぎ食堂 祇園'), menu_url: null,
    notes: '[Italian & Chinese · Gion] A nine-seat counter-and-table eatery on Nawate run by one cook, mixing Italian and Chinese plates — white dandan noodles, clam ramen, ajillo, dumplings — with a shelf of homemade fruit liqueurs. Open to 2 am most nights. About ¥3,000–5,000.',
    chef_bio: { chef_name: 'Sugiyama (owner-chef)', roles: ['Owner-chef'], origin: null,
      background: 'Opened 15 December 2017 (Tabelog). The owner, named as Sugiyama on Tabelog, became a cook out of a love of good food (Tabelog). Trained in Japanese, Italian and Chinese cooking (December 2025 review) and runs the place alone (June 2025 review). The white dandan noodles have been on television several times (Tabelog); a June 2025 diner came after seeing the shop on a Kansai TV programme.',
      philosophy: 'Hopes guests will enjoy trying many different dishes (Tabelog).',
      specialty: 'White dandan noodles; homemade fruit liqueurs.',
      anecdotes: [
        { text: 'A June 2025 diner came after a night of bar-hopping for the chicken-salt clam ramen seen on TV: a clear broth with clams at the bottom and thin, straight, almost pasta-like noodles.', source: R + 'B509200425/' },
        { text: 'A regular on a June 2018 omakase dinner learned that the black pepper on the fried dishes came from a Gion spice shop, and went to buy some the next day.', source: R + 'B328143981/' },
        { text: 'An October 2024 diner rated the gizzard and green-onion ajillo the best dish and planned to come back for the Sichuan mapo tofu and dandan noodles.', source: R + 'B496830808/' },
        { text: 'A December 2025 diner found so many food and drink options it was hard to choose, including homemade fruit syrups served with or without alcohol.', source: R + 'B530780812/' },
      ],
      japanese_sources_summary: '食べログ: うつりぎ食堂、イタリアン・バル・ラーメン、東山区縄手通り三条下ル弁財天町12 祇園シャトービル 1A、祇園四条駅9番出口から徒歩1分、火〜土 17:30〜26:00、日 17:30〜22:00 (L.O. は閉店30分前)、月曜休み、予約可 (2時間制の場合あり)、カードと楽天ペイ可、サービス料「なし」、9席、2026年1月から全席禁煙、2017年12月15日オープン。店主 (Sugiyama) は中華とイタリアンを基にした料理を出し、白担々麺はテレビで何度も紹介 (食べログの紹介文、英訳)。口コミ (2018〜2025年、英語): 一人で切り盛り (2025年6月)、和食・イタリアン・中華で修業 (2025年12月)、鶏塩のあさりラーメン、自家製の果実酒、砂肝とねぎのアヒージョ、水餃子、麻婆豆腐。',
      confidence: 'medium', sources: [TB, R + 'B328143981/', R + 'B444836335/', R + 'B464842107/', R + 'B474089827/', R + 'B496830808/', R + 'B509200425/', R + 'B530780812/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter run by one cook; friendly owner (2023–2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区縄手通り三条下ル3弁財天町12 祇園シャトービル 1A',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (no-smoking change from January 2026); reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.005746, 135.772769); cross-checked: GSI 京都府京都市東山区弁財天町12番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B509200425/', R + 'B496830808/'],
    price_note: 'No item prices found; Tabelog average ¥4,000–4,999.', last_checked: TODAY, items: [
      it('', '', 'White dandan noodles', '', 'Noodles', 'no', 'no', 'Tabelog.', 'white_dandan'),
      it('', '', 'Chicken-salt clam ramen', '', 'Noodles', 'no', 'no', 'June 2025 review.', 'clam_ramen'),
      it('', '', 'Gizzard and green-onion ajillo', '', 'Plates', 'ask', 'no', 'October 2024 review.', 'gizzard_ajillo'),
      it('', '', 'Homemade fruit liqueur', '', 'Drinks', 'ask', 'ask', '2018–2025 reviews.', 'fruit_liqueur'),
    ] }, {
    cuisine: 'イタリアンと中華の小皿と自家製の果実酒: 白担々麺 (食べログ)、細いストレート麺の鶏塩あさりラーメン (2025年6月)、手打ちパスタ、蒸し鶏とカリフラワー、ローストビーフ、南仏風のムール貝のスープ、肉と魚のおまかせ (2018〜2021年)、水餃子 (2023年11月)、砂肝とねぎのアヒージョ、四川の麻婆豆腐と担々麺 (2024年10月)、梅・すだち・生姜・キウイ・八朔などの果実酒やシロップをアルコールありでもなしでも (2018〜2025年の口コミ)',
    neighborhood: '祇園、縄手通り。祇園四条駅から徒歩1分',
    gf_detail: '要確認。手打ちパスタ、ラーメン、担々麺、餃子など小麦が多いが、肉・魚・野菜の皿もある (2018〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏塩あさりラーメン、砂肝のアヒージョ、ローストビーフ、麻婆豆腐 (2018〜2025年の口コミ)。',
    notes: '[イタリアンと中華・祇園] 縄手通りの9席の店を店主が一人で切り盛り。白担々麺、あさりのラーメン、アヒージョ、水餃子などイタリアンと中華の料理に、自家製の果実酒がずらり。たいてい深夜2時まで。3,000〜5,000円ほど。',
  });
}

// ================================================================ 日知庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007161/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_nitchian_kawaramachi', name: '日知庵 (Nitchi An)', category: 'OMNI',
    lat: 35.007425, lng: 135.769405, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt yakitori is possible, but tare, izakaya side dishes and the set appetizer are unknown (2016–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken yakitori, seafood and grilled izakaya dishes (2016–2026 reviews).',
    hours_raw: 'Tue–Sun 17:00–23:00; closed Mondays; hours may change (Tabelog). Bookings taken (Tabelog). Cash only — no cards or e-money (Tabelog). 26 seats: 8 at the counter, three tables of four, 6 on tatami (Tabelog). Smoking allowed (Tabelog; April 2026 review). 5 min from Keihan Sanjo (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi–Kiyamachi, between Sanjo and Shijo — 5 min from Sanjo Stn',
    cuisine: 'Charcoal yakitori and a broad sake list: liver, tsukune, thigh, gizzard and chicken skin grilled one by one over charcoal; grilled squid skewers, asparagus, beef and chicken tataki, buttered oysters; seafood and grilled izakaya dishes; a set appetizer plate; sake by the half-go (90 cc), fruit chuhai, highballs (2016–2026 reviews)',
    website: null, gmaps: gm('日知庵 河原町 京都'), menu_url: null,
    notes: '[Yakitori & sake · Kawaramachi] A long-running, smoky little izakaya with a counter in front of the charcoal grill, local regulars, a wide sake list and izakaya dishes beyond the skewers. Cash only; smoking allowed. About ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: ['Owner'], origin: null,
      background: 'Reviewed on Tabelog since 2014. The master cooked alone on a busy December 2019 night (December 2019 review); an April 2025 diner calls the owner "Acchan". The owner chooses sake and daily specials for guests who ask (December 2016 review).',
      philosophy: null,
      specialty: 'Charcoal yakitori with sake.',
      anecdotes: [
        { text: 'On the July 2022 Gion Matsuri eve, with the streets packed, a diner got the end seat at the counter in front of the grill, had liver, tsukune, thigh and gizzard grilled one by one, drank Toyo Bijin junmai ginjo by the 90 cc half-go, and left early because of the smoke from the next table.', source: R + 'B452627311/' },
        { text: 'A December 2016 pair left the sake and the order to the owner — beef and chicken tataki, buttered oysters and a yakitori platter — and noted many solo regulars, including women dining alone.', source: R + 'B235070307/' },
        { text: 'On a third visit in April 2025, a diner chatted with the local regulars at the counter and found owner "Acchan" kind; the fruit chuhai tasted unlike any other.', source: R + 'B504461569/' },
        { text: 'An April 2026 diner advised ordering early because dishes take time, and warned non-smokers about the small, smoking room.', source: R + 'B532992152/' },
      ],
      japanese_sources_summary: '食べログ: 日知庵、串焼き・焼き鳥・居酒屋、中京区河原町六角あじびる北東入ル 河原町ビル1F、京阪三条駅から徒歩5分、火〜日 17:00〜23:00、月曜休み (変更の可能性あり)、予約可、カード・電子マネー不可、26席 (カウンター8、4人テーブル3、座敷6)、喫煙可、日本酒・焼酎にこだわり。口コミ (2014〜2026年、英語): 炭火で一本ずつ焼く焼き鳥、イカの串焼き、アスパラ、日本酒が豊富 (Toyo Bijin の純米吟醸を半合90cc で、2022年7月)、店主おまかせ (2016年12月)、一人で調理 (2019年12月)、店主 "Acchan" (2025年4月)、料理は時間がかかり喫煙可 (2026年4月)。',
      confidence: 'medium', sources: [TB, R + 'B235070307/', R + 'B417989848/', R + 'B424059666/', R + 'B452627311/', R + 'B504461569/', R + 'B515777978/', R + 'B532992152/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Regulars\' counter; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町六角あじびる北東入ル 河原町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026. The Tabelog website link (a-dos.ne.jp) did not load on ' + TODAY + '.' },
    pin_source: `Tabelog ${TB} (35.007425, 135.769405); address gives no town or lot number, so GSI could not check it — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B452627311/', R + 'B504461569/'],
    price_note: 'No item prices found; reviews give ¥2,000–5,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Yakitori (liver, tsukune, thigh, gizzard, skin)', '', 'Yakitori', 'ask', 'no', 'July 2022 and April 2025 reviews.', 'yakitori'),
      it('', '', 'Sake (half-go, 90 cc)', '', 'Drinks', 'ask', 'ask', 'July 2022 review.', 'sake'),
    ] }, {
    cuisine: '炭火の焼き鳥と豊富な日本酒: レバー、つくね、もも、砂肝、皮を炭火で一本ずつ、イカの串焼き、アスパラ、牛と鶏のたたき、牡蠣のバター焼き、魚介や焼き物の居酒屋料理、お通しの盛り合わせ、半合 (90cc) の日本酒、果実のチューハイ、ハイボール (2016〜2026年の口コミ)',
    neighborhood: '河原町・木屋町、三条と四条の間。三条駅から徒歩5分',
    gf_detail: '要確認。塩の焼き鳥はあるが、たれ、居酒屋料理、お通しの中身は不明 (2016〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥、魚介や焼き物の居酒屋料理 (2016〜2026年の口コミ)。',
    notes: '[焼き鳥と日本酒・河原町] 炭火の焼き台の前にカウンターがある、煙の多い小さな居酒屋。地元の常連、豊富な日本酒、串以外の居酒屋料理も。現金のみ、喫煙可。3,000〜5,000円ほど。',
  });
}

// ================================================================ 宮川町 天匠
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041553/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:30', '22:00']); const B = day(['18:00', '22:00']);
  put({
    id: 'kyoto_miyagawacho_tensho', name: '宮川町 天匠 (Miyagawacho Tensho)', category: 'OMNI',
    lat: 34.99992, lng: 135.77101, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura course in wheat batter, with a kakiage rice bowl or tendon to finish (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prawn, fish and eel tempura, sashimi and dashi (2025–26 reviews).',
    hours_raw: 'Dinner Mon, Wed, Fri and holidays 17:30–22:00; Tue, Thu, Sat 18:00–22:00; last entry 19:00; closed Sundays and two Mondays a month (Tabelog). Lunch Tue, Thu, Sat from 11:30, eight servings (February 2026 review). Reservation only; tell the restaurant about allergies in advance (Tabelog). Cards, e-money and QR accepted (Tabelog). 10 counter seats; non-smoking (Tabelog). 7 min from Gion-Shijo Stn, on the Miyagawa-suji (Tabelog; February 2026 review).',
    hours: { 0: A, 1: B, 2: A, 3: B, 4: A, 5: B }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyagawacho — 7 min from Gion-Shijo Stn',
    cuisine: 'Tempura courses fried in white soybean oil (Tabelog): dinner courses from ¥18,500 and a ¥4,950 lunch course including tax and service (February 2026); kuruma prawn, Kyoto bamboo shoot, cuttlefish with caviar, Akashi anago, sea bream shirako, sea bream with sea urchin, Naruto Kintoki sweet potato; sashimi and clear soup; tencha, tendon, kakiage rice bowl or curry-salt tempura to finish; hamo and an eel rice in summer (2025–26 reviews)',
    website: null, gmaps: gm('宮川町 天匠'), menu_url: null,
    notes: '[Tempura · Miyagawacho] A ten-seat tempura counter on the Miyagawa-suji, opened in 2024 by a chef from Tempura Yoshikawa: light, seasonal tempura courses with sashimi and soup, and a rare good-value lunch three days a week. Dinner about ¥20,000–30,000; lunch ¥4,950. Booking only.',
    chef_bio: { chef_name: 'Hasegawa', roles: ['Chef'], origin: null,
      background: 'Opened 29 May 2024 (Tabelog) by chef Hasegawa, who spent 21 years at Kyo-Tomikoji Tempura Yoshikawa, 18 of them as head chef (February 2026 review). A February 2026 diner had heard it was a Michelin Guide Selected restaurant for 2025.',
      philosophy: 'White soybean oil for a light batter; seafood and produce chosen by the owner (Tabelog).',
      specialty: 'Seasonal tempura course.',
      anecdotes: [
        { text: 'An April 2025 diner swapped the tendon for tencha served with dashi instead of green tea, and singled out the clear soup, the sea bream shirako and the sea bream with sea urchin.', source: R + 'B505144223/' },
        { text: 'In February 2026 a diner whose daughter had found the ¥4,950 lunch in a magazine found one chef at the counter, a university student serving, and fans of Miyagawacho geiko and maiko on the walls; no oil was left on the napkin.', source: R + 'B522514741/' },
        { text: 'On a second visit in July 2026 a diner chose the course with à la carte dishes and praised the large hamo and the eel rice to finish.', source: R + 'B531736788/' },
      ],
      japanese_sources_summary: '食べログ: 宮川町 天匠、天ぷら、東山区宮川筋4-300-5、祇園四条駅から徒歩約7分、月・水・金・祝 17:30〜22:00、火・木・土 18:00〜22:00、最終入店19:00、日曜休み、月2回月曜不定休、予約のみ (アレルギーは事前に)、カード・電子マネー・QR 可、カウンター10席、禁煙、2024年5月29日オープン、大豆油100%で揚げる (紹介文、英訳)。口コミ (2025年4月〜2026年7月、英語): 料理長 Hasegawa は Tempura Yoshikawa に21年 (うち料理長18年)、昼のコース 4,950円 (税・サ込み、火・木・土、8食)、夜は18,500円から、Akashi の穴子、Naruto Kintoki、天茶、カレー塩、夏の鱧とうなぎご飯。',
      confidence: 'medium', sources: [TB, R + 'B505144223/', R + 'B522514741/', R + 'B531736788/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter course; booking only; friendly chef (2025–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋4-300-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.999920, 135.771010); cross-checked: GSI 京都府京都市東山区宮川筋四丁目300番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522514741/', R + 'B505144223/'],
    price_note: 'Prices from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch tempura course (tax and service included)', '¥4,950', 'Courses', 'no', 'no', 'February 2026 review; Tue, Thu, Sat.', 'lunch_course'),
      it('', '', 'Dinner course', 'from ¥18,500', 'Courses', 'no', 'no', 'February 2026 review.', 'dinner_course'),
      it('', '', 'Beer', '¥900', 'Drinks', 'ask', 'ask', 'February 2026 review.', 'beer'),
    ] }, {
    cuisine: '大豆油で揚げる天ぷらのコース (食べログ): 夜は18,500円から、昼は税・サ込み4,950円 (2026年2月)。車海老、京都の筍、イカとキャビア、Akashi の穴子、鯛の白子、鯛と雲丹、Naruto Kintoki、お造りとお椀、締めは天茶・天丼・かき揚げ丼・カレー塩の天ぷら、夏は鱧とうなぎご飯 (2025〜26年の口コミ)',
    neighborhood: '宮川町。祇園四条駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。小麦の衣の天ぷらのコースで、締めはかき揚げ丼や天丼 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海老・魚・穴子の天ぷら、お造り、出汁 (2025〜26年の口コミ)。',
    notes: '[天ぷら・宮川町] 宮川筋の10席の天ぷらカウンター。Tempura Yoshikawa 出身の料理人が2024年に開いた店で、季節の軽い天ぷらにお造りとお椀、週3日のお得な昼のコースも。夜は2万〜3万円ほど、昼は4,950円。予約のみ。',
  });
}

save();
