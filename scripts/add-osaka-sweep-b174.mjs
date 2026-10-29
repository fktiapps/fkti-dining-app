// Osaka sweep (2-mile circle around Dotonbori), batch 174 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 炭火焼鳥と鶏肴keshiki. (10-seat yakitori counter, 30+ cuts, open to 5 am; Higashi-Shinsaibashi)
//   + 福太郎 なんばダイニングメゾン店 (Fukutaro okonomiyaki and negiyaki, Takashimaya 8F counter; Namba)
//   + 炭火串焼き 日向屋 (charcoal chicken and pork skewers, GROOVE Shinsaibashi East 1F)
//   + 嗜酒 (SHU SHU: sake bar with seasonal small dishes, GROOVE Shinsaibashi East 4F)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 174);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 炭火焼鳥と鶏肴keshiki.
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113690/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '05:00']);
  put({
    id: 'osaka_keshiki_yakitori_higashishinsaibashi', name: '炭火焼鳥と鶏肴keshiki. (Sumibi Yakitori to Toriate keshiki.)', category: 'OMNI',
    lat: 34.673077, lng: 135.503449, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; skewers come with house seasonings such as white wine sauce, escargot butter and black truffle oil (Tabelog listing), and tare is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken specialist; vegetable skewers exist but bastes are not described.',
    hours_raw: 'Mon, Tue, Fri–Sun 18:00–05:00 (last order 04:00); closed Wednesday and Thursday (Tabelog). Phone reservations from Japanese mobile numbers only (Tabelog). Some items depend on supply (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). Smoking allowed (Tabelog). Busy around 19:00, so book (October 2025). Opened 14 September 2019 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-14-19, Mikawa Bldg 1F — 3 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Charcoal yakitori at a 10-seat counter · over 30 kinds of skewer, including rare cuts, from Tanba chicken, Tokushima young chicken and Daisen Jidori · house seasonings: white wine sauce, escargot butter, black truffle oil · negima; tsukune; omakase set · vegetable skewers · chicken sashimi and assorted plates · garlic edamame · duck tataki · egg-drop soup with thin noodles to finish · premium shochu and sake',
    website: null, gmaps: gm('炭火焼鳥と鶏肴keshiki. 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · a 10-seat charcoal yakitori counter open to 5 am, Higashi-Shinsaibashi] A small counter yakitori bar near Shinsaibashi Station, open from 18:00 until 5 am, so it works for dinner or a 1 am second stop. More than 30 skewer cuts, many rare, come from Tanba chicken, Tokushima young chicken and Daisen Jidori, each grilled over charcoal, and some get unusual house finishes such as escargot butter or black truffle oil. The omakase is good value; add vegetable skewers, the garlic edamame and a comforting egg soup with thin noodles to finish. One diner found the duck tataki weaker than the rest. Reservations by Japanese mobile number only. Closed Wednesdays and Thursdays; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 September 2019 (Tabelog).', background: 'Yakitori counter with a staff-maintained Tabelog listing (Tabelog; 2025–2026 reviews).', philosophy: 'Fresh chicken from Tanba, Tokushima and Daisen (Tabelog listing).', specialty: 'Yakitori with rare cuts and house seasonings.',
      anecdotes: [
        { text: '"…you can enjoy a variety of dishes with the omakase option at a low price… The garlic-edamame was a hidden gem! To finish off, I had a comforting egg soup with nyumen noodles." — October 2025.', source: R + 'B514984919/' },
        { text: '"I visited around 1:00 AM as my second stop, and the yakitori was fantastic… The duck tataki was a bit disappointing, but everything else was excellent." — October 2025.', source: R + 'B517481644/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 炭火焼鳥と鶏肴keshiki.、大阪市中央区東心斎橋1-14-19 三河ビル 1F、心斎橋駅・長堀橋駅から徒歩3分、月・火・金〜日18:00〜翌5:00 (L.O. 4:00)、水・木休み、2019年9月14日開店、カウンター10席、予約は日本の携帯番号のみ、仕入れで出せない品もある、カード・PayPay可、電子マネー不可、喫煙可、丹波の鶏・徳島の若鶏・大山の Daisen Jidoriの希少部位を含む30種以上の焼鳥、白ワインソース・エスカルゴバター・黒トリュフオイルの味つけ、焼酎と日本酒。口コミ(2025年10月〜2026年8月): おまかせがお得、野菜の串、にんにく edamame、しめの卵の nyumen、negima、tsukune、炭の香り、鴨の tataki は今ひとつという声、19時ごろは混むので予約を、深夜1時の2軒目にも。',
      confidence: 'medium', sources: [TB, R + 'B514984919/', R + 'B517481644/', R + 'B522144135/', R + 'B530067972/', R + 'B530102793/', R + 'B534423893/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone reservations need a Japanese mobile number (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-14-19 三河ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目14番19号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514984919/', R + 'B530102793/'],
    price_note: 'No dish prices in the reviews; about ¥4,000–6,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Omakase yakitori', '', 'Yakitori', 'ask', 'no', 'October 2025.', 'omakase'),
      it('', '', 'Negima; tsukune', '', 'Yakitori', 'ask', 'no', 'May 2026.', 'negima'),
      it('', '', 'Garlic edamame', '', 'Sides', 'ask', 'ask', 'October 2025.', 'edamame'),
      it('', '', 'Egg soup with thin noodles', '', 'Sides', 'no', 'no', 'October 2025.', 'nyumen'),
    ] }, {
    cuisine: 'カウンター10席の炭火焼鳥・丹波の鶏、徳島の若鶏、大山の Daisen Jidoriの希少部位を含む30種以上の串・白ワインソース、エスカルゴバター、黒トリュフオイルの味つけ・negima、tsukune、おまかせ・野菜の串・鶏の sashimi と盛り合わせ・にんにく edamame・鴨の tataki・しめに卵の nyumen・プレミアム焼酎と日本酒',
    neighborhood: '東心斎橋1-14-19 三河ビル 1F。心斎橋駅・長堀橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。白ワインソース、エスカルゴバター、黒トリュフオイルなどの味つけがあり (食べログ)、たれの説明なし。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の店。野菜の串はあるが、たれの説明なし。',
    notes: '[焼鳥・東心斎橋、朝5時まで開く10席の炭火焼鳥] 心斎橋駅近くの小さなカウンターの焼鳥で、18時から朝5時まで、夕食にも深夜1時の2軒目にも。30種以上の串は希少部位も多く、丹波の鶏、徳島の若鶏、大山の Daisen Jidoriを炭火で一本ずつ焼き、エスカルゴバターや黒トリュフオイルなど珍しい味つけも。おまかせがお得で、野菜の串、にんにく edamame、しめのやさしい卵の nyumen も。鴨の tataki は今ひとつという声も。予約は日本の携帯番号のみ。水・木休み、喫煙可。',
  });
}

// ================================================================ 福太郎 なんばダイニングメゾン店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27046834/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://2951.jp/';
  put({
    id: 'osaka_fukutaro_namba_dining_maison', name: '福太郎 なんばダイニングメゾン店 (Fukutarou Nanba dainingu mezon ten)', category: 'OMNI',
    lat: 34.664591, lng: 135.501764, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: okonomiyaki and negiyaki batter, yakisoba and sauce; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef tendon and seafood okonomiyaki with egg.',
    hours_raw: 'Daily 11:00–22:00 (last order 21:00); on weekdays last lunch order 14:30 and reopening at 17:00 (Tabelog). Closes when Takashimaya closes (Tabelog). No reservations; orders are taken while you queue (September 2026). Cards accepted; no e-money or QR (Tabelog). Non-smoking. Takeout (Tabelog). Free parking at the Takashimaya-affiliated car park with ¥3,000 spent (Tabelog).',
    hours: { 0: day(['11:00', '14:30'], ['17:00', '22:00']), 1: day(['11:00', '14:30'], ['17:00', '22:00']), 2: day(['11:00', '14:30'], ['17:00', '22:00']), 3: day(['11:00', '14:30'], ['17:00', '22:00']), 4: day(['11:00', '14:30'], ['17:00', '22:00']), 5: day(['11:00', '22:00']), 6: day(['11:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-18, Namba Dining Maison 8F in Takashimaya Osaka — by Namba Stn',
    cuisine: 'Osaka okonomiyaki and negiyaki cooked for you on the teppan at a 15-seat counter (a branch of Fukutaro) · negiyaki with beef tendon · mixed okonomiyaki; buta-tama · seafood okonomiyaki with shrimp, squid and scallop · squid yakisoba · mixed grill · kimchi, side dishes and salads · beer',
    website: OWN, gmaps: gm('福太郎 なんばダイニングメゾン店'), menu_url: TB + 'dtlmenu/',
    notes: "[Okonomiyaki · Fukutaro's department-store counter, Takashimaya 8F, Namba] The Takashimaya branch of Fukutaro, an okonomiyaki house whose main shop is nearby, on the eighth-floor restaurant level: a 15-seat counter where the cooks make each okonomiyaki on the teppan in front of you. The batter is fluffy enough to melt, the sauce measured; get the negiyaki with seasoned beef tendon, a mixed okonomiyaki or a buta-tama with a runny egg, and maybe squid yakisoba. Diners use it to dodge the queue at the main shop, though there's often a short line here too (orders are taken while you wait), and it takes time to cook. Takeout is popular. Weekdays it breaks between 14:30 and 17:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of Fukutaro, whose main shop is nearby (September–October 2026 reviews).', background: 'Okonomiyaki counter in Takashimaya Osaka (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Negiyaki with beef tendon; okonomiyaki.',
      anecdotes: [
        { text: '"I ordered the squid yakisoba, mixed grill, and negiyaki with tendon. The mixed grill was incredibly tender, and the seasoning on the tendon in the negiyaki was outstanding." — September 2026.', source: R + 'B535651881/' },
        { text: '"The perfect grilling on the surface, the juicy and tender batter, generous pieces of pork, and a runny egg combined with a deeply flavorful sauce made it irresistible." — October 2026, Buta-tama.', source: R + 'B537498863/' },
      ],
      japanese_sources_summary: '食べログ: 福太郎 なんばダイニングメゾン店、大阪市中央区難波5-1-18 なんばダイニングメゾン 8F (大阪高島屋)、毎日11:00〜22:00 (L.O. 21:00)、平日は14:30 L.O. で17:00再開、高島屋の休館日は休み、予約不可、カード可、電子マネー・QR不可、禁煙、カウンター15席、テイクアウト、3,000円以上で提携駐車場無料、公式サイトあり。口コミ(2026年9〜10月): 本店が混んでいるときにこちらへ、並んでいる間に注文を取る、目の前の鉄板で焼いてくれる、ふわふわでとろける生地、牛すじの negiyaki、ミックスのお好み焼き、buta-tama、海鮮のお好み焼き (海老、イカ、ホタテ)、イカの yakisoba、ミックス焼き、キムチ、サラダ、焼き上がりに時間がかかる、テイクアウトの人も多い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535639428/', R + 'B535651881/', R + 'B536280224/', R + 'B537498863/', R + 'B537917234/', R + 'B538112136/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order while queuing; counter seats only (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-18 なんばダイニングメゾン 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波五丁目1番18号 (go) 123m — Tabelog point kept (inside Takashimaya Osaka); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535651881/', R + 'B537498863/'],
    price_note: 'No dish prices in the reviews; about ¥1,000–3,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Negiyaki with beef tendon', '', 'Okonomiyaki', 'no', 'no', 'September–October 2026.', 'negiyaki'),
      it('', '', 'Buta-tama (pork okonomiyaki)', '', 'Okonomiyaki', 'no', 'no', 'October 2026.', 'butatama'),
      it('', '', 'Mixed okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'mix'),
      it('', '', 'Squid yakisoba', '', 'Teppan', 'no', 'no', 'September 2026.', 'yakisoba'),
    ] }, {
    cuisine: 'カウンター15席で目の前の鉄板で焼く大阪のお好み焼きとnegiyaki  (福太郎の店)・牛すじの negiyaki・ミックスのお好み焼き、buta-tama・海老、イカ、ホタテの海鮮お好み焼き・イカの yakisoba・ミックス焼き・キムチ、一品、サラダ・ビール',
    neighborhood: '難波5-1-18 なんばダイニングメゾン 8F (大阪高島屋)。なんば駅すぐ',
    gf_detail: '実質グルテンフリーではありません。お好み焼きとnegiyaki の生地、yakisoba、ソース。グルテンフリーの品の記載なし。',
    vegan_detail: 'ヴィーガンではありません。豚、牛すじ、海鮮、卵のお好み焼き。',
    notes: '[お好み焼き・なんば、大阪高島屋8階の福太郎のカウンター] 近くに本店があるお好み焼きの福太郎の高島屋の店で、8階のレストランフロアにある15席のカウンター。目の前の鉄板で一枚ずつ焼いてくれる。生地はとろけるほどふわふわで、ソースはちょうどいい量。牛すじの negiyaki、ミックス、半熟卵の buta-tama、イカの yakisoba を。本店の行列を避けてこちらに来る人も多いが、ここも短い行列があり (並んでいる間に注文を取る)、焼き上がりには時間がかかる。テイクアウトも人気。平日は14:30〜17:00が休憩。',
  });
}

// ================================================================ 炭火串焼き 日向屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121310/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sumibi_kushiyaki_hinataya', name: '炭火串焼き 日向屋 (Sumibi Kushiyaki Hinataya)', category: 'OMNI',
    lat: 34.67326, lng: 135.503353, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; skewers, offal dishes and kara-age come with seasonings that are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork skewers and offal.',
    hours_raw: 'Daily 16:00–24:00 (last order 23:30); irregular closures; may change, so check (Tabelog). Cards, e-money and PayPay accepted (Tabelog). Smoking allowed (Tabelog). Draft beer ¥500 including tax (May 2026). Opened 18 January 2021 (Tabelog).',
    hours: ALL(day(['16:00', '00:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-17-3, GROOVE Shinsaibashi East 1F — 3 min from Shinsaibashi Stn exit 6',
    cuisine: 'Charcoal chicken and pork skewers (20 seats: 8-seat counter and tables) · yakitori grilled one skewer at a time · grilled pork skewers and spicy offal (horumon) · soft-cartilage kara-age · doteyaki · gatsu (pork stomach) kimchi · sweet potato with honey mayo · draft beer ¥500; brim-full highballs',
    website: null, gmaps: gm('炭火串焼き 日向屋 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · a charcoal skewer bar for chicken and pork, Higashi-Shinsaibashi] A casual charcoal skewer bar on the ground floor of GROOVE Shinsaibashi East, open from 16:00 to midnight, with an 8-seat counter that suits solo drinkers since skewers can be ordered one at a time. Alongside juicy yakitori it grills pork skewers and a spicy offal, and the soft-cartilage kara-age and doteyaki are worth ordering; one diner loved the sweet potato with honey mayo. Seasoning runs strong and rich, made for drinking, with ¥500 draft beer and highballs poured to the brim. A chopstick lottery comes with handwritten notes. Service opinions split: two diners found staff cheerful, two found them curt or pushy.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 January 2021 (Tabelog).', background: 'Charcoal skewer bar (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Charcoal chicken and pork skewers.',
      anecdotes: [
        { text: '"The yakitori is grilled carefully, one skewer at a time, which is truly appreciated by solo diners… the best accompaniment is the kara-age of soft cartilage and the flavorful doteyaki." — April 2026.', source: R + 'B526704871/' },
        { text: '"I was very pleased to find that draft beer was JPY 500, tax included… All the staff were energetic and cheerful…" — May 2026.', source: R + 'B528988478/' },
      ],
      japanese_sources_summary: '食べログ: 炭火串焼き 日向屋、大阪市中央区東心斎橋1-17-3 GROOVE心斎橋East 1F、心斎橋駅6番出口から徒歩3分、毎日16:00〜24:00 (L.O. 23:30)、不定休、2021年1月18日開店、20席 (カウンター8とテーブル)、カード・電子マネー・PayPay可、喫煙可。口コミ(2026年4〜8月): 一本ずつ丁寧に焼く焼鳥、豚の串焼き、辛めのホルモン、軟骨の kara-age、doteyaki 、gatsu の kimchi、さつまいものはちみつマヨ、生ビール500円 (税込)、なみなみのハイボール、メッセージつきの箸のくじ、味は濃いめでお酒向き、スタッフが明るいという声と、無愛想・押しが強いという声。',
      confidence: 'medium', sources: [TB, R + 'B526704871/', R + 'B528988478/', R + 'B532967419/', R + 'B533044032/', R + 'B534695997/', R + 'B536135668/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order skewers one at a time; solo-friendly counter (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-3 GROOVE心斎橋East 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番3号 (go) 2m; offset 7 m east so it does not stack with Shumi Yakiniku Babaa (3F) and SHU SHU (4F) in the same building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528988478/', R + 'B526704871/'],
    price_note: 'Only the draft beer price appears in reviews (May 2026); about ¥2,000–4,000 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Yakitori, by the skewer', '', 'Skewers', 'ask', 'no', 'April–August 2026.', 'yakitori'),
      it('', '', 'Soft-cartilage kara-age', '', 'Dishes', 'no', 'no', 'April 2026.', 'nankotsu'),
      it('', '', 'Doteyaki', '', 'Dishes', 'ask', 'no', 'April 2026.', 'dote'),
      it('', '', 'Draft beer', '¥500', 'Drinks', '', '', 'May 2026.', 'beer'),
    ] }, {
    cuisine: '炭火で焼く鶏と豚の串 (20席: カウンター8とテーブル)・一本ずつ焼く焼鳥・豚の串焼きと辛めのホルモン・軟骨の kara-age・doteyaki ・gatsu の kimchi・さつまいものはちみつマヨ・生ビール500円、なみなみのハイボール',
    neighborhood: '東心斎橋1-17-3 GROOVE心斎橋East 1F。心斎橋駅6番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。串、ホルモン、kara-age の味つけの説明なし。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚の串とホルモン。',
    notes: '[焼鳥・東心斎橋、鶏と豚の炭火串焼き] GROOVE心斎橋East の1階にある気軽な炭火の串焼きで、16時から深夜0時まで。カウンター8席は一本から頼めるのでひとり飲みにも。ジューシーな焼鳥のほか豚の串や辛めのホルモンも焼き、軟骨の kara-age とdoteyaki はぜひ。さつまいものはちみつマヨが気に入ったという声も。味は濃いめでお酒向き、生ビールは500円、ハイボールはなみなみ。箸のくじには手書きのメッセージつき。接客は、明るいという声がふたり、無愛想・押しが強いという声がふたりと分かれる。',
  });
}

// ================================================================ 嗜酒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27119253/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '01:00']); const WE = day(['18:00', '03:30']);
  put({
    id: 'osaka_shu_shu_sake_bar_higashishinsaibashi', name: '嗜酒 (SHU SHU)', category: 'OMNI',
    lat: 34.673323, lng: 135.503276, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; dishes include croquettes, deep-fried curry bread and dumplings in a thickened sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: seasonal fish, chicken sashimi, eel and horse meat; nothing described as vegan.',
    hours_raw: 'Mon–Wed, Sun and holidays 18:00–01:00 (last order 23:00); Friday–Saturday 18:00–03:30 (last order 02:30); closed Thursday (Tabelog). Last-entry times are set (Tabelog). Appetizer ¥550 (Tabelog). Non-alcoholic drinks for only one person per group; two-hour limit when busy (Tabelog). Courses can be ordered when booking (March 2026). Cards, e-money and QR accepted (Tabelog). Non-smoking (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 4: WE, 5: WE, 6: WD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-3, GROOVE Shinsaibashi East 4F — 3 min from Shinsaibashi Stn exit 6',
    cuisine: 'Sake bar with creative seasonal small dishes (17 seats: 9 at the counter, two tables) · a rotating sake list, plus gin, shochu and whisky · Kagoshima chicken sashimi · sashimi of bluefin tuna and seared mackerel · beef and burdock taro dumplings in nameko sauce · spring cabbage and prosciutto croquettes · firefly squid dishes and clay-pot rice in spring · fried figs · eel; horse meat · house curry bread, deep-fried, also to take home · sake-lees soup · tomato chuhai',
    website: null, gmaps: gm('嗜酒 SHU SHU 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Sake bar · a wood-toned sake bar with creative small plates, Higashi-Shinsaibashi] A stylish fourth-floor sake bar in GROOVE Shinsaibashi East, warm wood inside, with a sake list that changes each visit, plus gin, shochu and whisky. The food is more than snacks: taro dumplings with beef and burdock in a nameko sauce, spring cabbage and prosciutto croquettes, Kagoshima chicken sashimi, fatty bluefin and seared mackerel, and in spring a run of firefly-squid dishes ending in clay-pot rice. The deep-fried house curry bread is a good take-home. Book a course for better value than ordering à la carte. Pretty sake cups and tableware. Rules: one non-alcoholic drinker per group, two-hour limit when busy. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Sake bar with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: 'Sake brands that change with each visit, with seasonal dishes to match (Tabelog listing).', specialty: 'Sake pairing; seasonal small dishes.',
      anecdotes: [
        { text: '"A standout dish was the \'Beef and Burdock Root Satoimo Dumplings.\' The gentle thickness of the nameko mushroom sauce enhanced the sweetness of the satoimo (taro)…" — February 2026.', source: R + 'B522795771/' },
        { text: '"…I took home a homemade curry bread as a souvenir. Apparently, [the shop takes] bread, fill[s] it with curry, and deep-fr[ies] it…" — July 2026.', source: R + 'B472461489/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 嗜酒、大阪市中央区東心斎橋1-17-3 GROOVE 心斎橋 East 4F、心斎橋駅6番出口から徒歩3分、月〜水・日・祝18:00〜翌1:00 (L.O. 23:00)、金・土18:00〜翌3:30 (L.O. 2:30)、木曜休み、最終入店の時間あり、お通し550円、ノンアルコールはグループで1名のみ、混雑時は2時間制、カード・電子マネー・QR可、禁煙、17席 (カウンター9、テーブル2)、毎回変わる日本酒、鹿児島の鶏の sashimi、季節の食材、木のぬくもりの店内。口コミ(2026年1〜7月): 創作の小皿、牛と牛蒡の里芋まんじゅうのnameko のあん、春キャベツと生ハムのコロッケ、ホタルイカの甘酢、干しホタルイカ、ホタルイカの土鍋ご飯、本マグロと炙り鯖の sashimi、いちじくのフライ、うなぎ、馬肉、揚げた自家製カレーパン (持ち帰りも)、kasujiru 、トマトチューハイ、ジン、器やおちょこがかわいい、予約時にコースを頼むとお得。',
      confidence: 'medium', sources: [TB, R + 'B472461489/', R + 'B522795771/', R + 'B524296479/', R + 'B527138541/', R + 'B529340853/', R + 'B532173261/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Group rules on soft drinks and time limits (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-3 GROOVE 心斎橋 East 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番3号 (go) 2m; offset 7 m north so it does not stack with Shumi Yakiniku Babaa (3F) and Hinataya (1F) in the same building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522795771/', R + 'B472461489/'],
    price_note: 'No dish prices in the reviews; about ¥6,000–8,000 per person (Tabelog, reviews) plus ¥550 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Beef and burdock taro dumplings in nameko sauce', '', 'Dishes', 'ask', 'no', 'February 2026.', 'dumplings'),
      it('', '', 'Spring cabbage and prosciutto croquettes', '', 'Dishes', 'no', 'no', 'February 2026.', 'croquette'),
      it('', '', 'House curry bread (deep-fried)', '', 'Dishes', 'no', 'ask', 'April–July 2026.', 'currypan'),
      it('', '', 'Kagoshima chicken sashimi', '', 'Dishes', 'ask', 'no', 'Tabelog listing.', 'torisashi'),
    ] }, {
    cuisine: '季節の創作小皿と日本酒のバー (17席: カウンター9、テーブル2)・毎回変わる日本酒、ジン、焼酎、ウイスキー・鹿児島の鶏の sashimi・本マグロと炙り鯖の sashimi・牛と牛蒡の里芋まんじゅうのnameko のあん・春キャベツと生ハムのコロッケ・春はホタルイカの料理と土鍋ご飯・いちじくのフライ・うなぎ、馬肉・揚げた自家製カレーパン (持ち帰りも)・kasujiru ・トマトチューハイ',
    neighborhood: '東心斎橋1-17-3 GROOVE 心斎橋 East 4F。心斎橋駅6番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コロッケ、揚げたカレーパン、あんかけのまんじゅうなども。',
    vegan_detail: '実質ヴィーガンではありません。季節の魚、鶏の sashimi、うなぎ、馬肉。ヴィーガンの記載なし。',
    notes: '[日本酒バー・東心斎橋、木のぬくもりの創作小皿の日本酒バー] GROOVE心斎橋East の4階にあるおしゃれな日本酒バーで、木のぬくもりの店内。日本酒は来るたびに変わり、ジン、焼酎、ウイスキーも。料理はつまみ以上で、牛と牛蒡の里芋まんじゅうのnameko のあん、春キャベツと生ハムのコロッケ、鹿児島の鶏の sashimi、脂ののった本マグロと炙り鯖、春はホタルイカの料理が続いて土鍋ご飯でしめ。揚げた自家製カレーパンは持ち帰りにも。予約時にコースを頼むとアラカルトよりお得。おちょこや器がかわいい。ノンアルコールはグループで1名のみ、混雑時は2時間制。木曜休み。',
  });
}

save();
