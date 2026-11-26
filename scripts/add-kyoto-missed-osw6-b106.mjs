// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 106.
//   + KITCHENカンパネラ (KITCHEN Campanella: spice-curry café in a former barbershop on Nishinotoin near Higashi Hongan-ji; sister shop of 出町カラビンカ; since 2023) — rest
//   + 粉もん居酒屋 まんまるい (Mamma Louis: okonomiyaki, yakisoba and teppan izakaya by Kyoto University Hospital; since 2002) — rest
//   + 炭火焼ソーセージ酒場Salumeria (homemade charcoal-grilled sausages, Italian/French small plates and wine in Demizu-cho; since 2015) — rest
//   + CHERIE MAISON DU PARFAIT (reservation-only seasonal dessert parfaits in a Takeyamachi machiya, from confectioner 小林かなえ; since 2023) — rest
//   - ロイヤルホスト 堀川五条店 (26017060), すき家 鳥丸丸太町店 (26022160), すき家 烏丸七条店 (26021230): skipped — national chains.
//   Rest tier, nearest-first from `next rest 2000` (core and notable have nothing left in this lane). Fetched by this worker
//   with fetchshop.mjs (Tabelog /en/, 3 s between requests).
//   Dedupe (2026-11-26): none of the four is in data/kyoto.json (name, Tabelog id, address) or in another worker's pending
//   script (osw1-b107, osw13-b135, osw2-b96, osw9-b101).
//   Chain / group checks: KITCHENカンパネラ is a sister shop of 出町カラビンカ (Leaf KYOTO: 「出町柳の人気カレー店［出町カラビンカ］の
//   姉妹店」), in data as kyoto_demachi_karabinka; a two-shop local group with different names, drafted as a sister concept and
//   flagged (both serve a black curry of black sesame and beef tendon). CHERIE MAISON DU PARFAIT is one of three Kyoto CHÉRIE
//   shops of 小林かなえ (official site: シェリーメゾンドビスキュイ, シェリーカフェ, シェリーメゾンドパフェ); its biscuit shop is in data as
//   kyoto_cherie_maison_du_biscuit (hidden: retail); a small local group, drafted and flagged. まんまるい and Salumeria are single
//   shops (official site; Tabelog; Instagram).
//   Romaji: KITCHEN Campanella from the shop's Instagram handle @campanella1098 (display name KITCHENカンパネラ) and Leaf KYOTO's
//   reading キッチンカンパネラ. Mamma Louis from the shop's own domain mammalouis.com and site header "mamma louis". Salumeria and
//   CHERIE MAISON DU PARFAIT are written in Latin letters by the shops (Instagram @salumeria2015; official site). Tabelog's
//   machine romaji "Sumibiyaki Sausage Sakaba" is not used. 小林かなえ = Kanae Kobayashi from the official profile page
//   ("小林かなえ Kanae KOBAYASHI").
//   No halal claims; no owner deaths; no posting bans (the CHÉRIE site's 「無断掲載は著作権の侵害」 line is a copyright footer).
//   Remarks about other diners left out (single reviews only).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-106');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ KITCHENカンパネラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039590/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://leafkyoto.net/store/230810-kyoto-campanella', IG = 'https://www.instagram.com/campanella1098/';
  const L = day(['11:30', '17:00']);
  put({
    id: 'kyoto_kitchen_campanella', name: 'KITCHENカンパネラ (KITCHEN Campanella)', category: 'OMNI',
    lat: 34.992564, lng: 135.755104, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. The katsu is breaded and the black curry noodles are wheat noodles (2024–26 reviews); how the curries themselves are made is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the regular curries (black sesame and beef tendon, katsu, masala keema) and most of the kimagure curries reviewers describe contain meat or fish — chicken, pork, minced meat, anchovy chicken — and the curry noodles taste of Japanese dashi (2023–26 reviews). No vegan claim.',
    hours_raw: 'Tabelog: Tuesday 18:00–20:30; Wednesday to Friday 11:30–17:00; closed Monday, Saturday and Sunday; hours and closing days may change — check the shop’s Instagram (@campanella1098). Leaf KYOTO (2023) gave 11:30–17:00 with irregular closing days, and a February 2024 regular went to an evening session from 17:00 to 20:00. Reviewers have also visited on Sundays (December 2023 to July 2024) and on Monday 23 March 2026, so the days have moved over time. No reservations; cards and QR accepted, no e-money; non-smoking; no parking — coin parking right in front, ¥200 per 30 minutes (Tabelog; January 2026). 6 counter seats and 4 tables for two, with two staff (March 2026). Opened 3 June 2023 (Tabelog; Leaf KYOTO). About 8 minutes from Gojo Station on the subway (Leaf KYOTO).',
    hours: { 1: day(['18:00', '20:30']), 2: L, 3: L, 4: L }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin near Higashi Hongan-ji — 8 min from Gojo Stn',
    cuisine: 'Spice curry café, sister shop of 出町カラビンカ (Leaf KYOTO) · black curry of black sesame and beef tendon with a mini salad ¥1,000 (Leaf KYOTO, 2023), spicy yet rich, sweet at first from black sesame paste and, the staff suggested, honey (July and August 2025) · spice katsu curry, S size ¥1,500 (July 2025); masala keema curry ¥1,300 (June 2026) · sizes S, M and L from August 2024; the S came with 150 g of rice in a July 2025 review and with just over 200 g in an August 2026 one · a “kimagure” curry that changes every half month (July 2025): spicy pork (January 2024), cardamom chicken and green curry (February 2024), red curry and anchovy chicken (March 2024), ume butter chicken (April 2024), mustard chicken (May 2024), sake-lees chicken (July 2024), pork kimchi (August 2024, August 2025), chicken korma (June 2025), massaman (August 2025) · toppings: tonkatsu (January 2024), soft-boiled egg (October 2024), spice egg (July 2026) · black curry noodles in a curry with the umami of Japanese dashi (October 2024) · plates come with shibazuke, onions, carrots, edamame, lotus root and fried onions (2025–26) · evening black curry, spicier, with alcohol (February 2024) · wasanbon pudding (Leaf KYOTO, 2023) with black syrup (June 2025); Lion Coffee, vanilla and macadamia flavoured (2023–25)',
    website: IG, gmaps: gm('KITCHENカンパネラ 京都 下京区西洞院町479'), menu_url: null,
    notes: '[Curry · Nishinotoin near Higashi Hongan-ji] A small retro curry café in a renovated former barbershop, sister shop of 出町カラビンカ: a black curry of black sesame and beef tendon that starts sweet and turns spicy (about ¥1,000–1,500), a “kimagure” curry that changes every half month, katsu and spice-egg toppings, wasanbon pudding. Sizes S to L. Weekday lunch; Tuesday evening. No reservations.',
    chef_bio: { chef_name: null, roles: ['Sister shop of 出町カラビンカ (Leaf KYOTO)'], origin: null,
      background: 'Leaf KYOTO (2023) reported the opening on 3 June 2023 as a sister shop of the popular Demachiyanagi curry shop 出町カラビンカ (kyoto_demachi_karabinka), in a renovated former barbershop with a retro feel; a December 2023 reviewer also noticed that the old barbershop had become a curry restaurant. Reviewers describe a simple retro room facing Nishinotoin-dori (August 2025), a bright café-like space with piano jazz (March 2026), two staff who looked very busy at Obon (August 2026), excellent service (July 2026), and a golden fork and spoon (August 2026).',
      philosophy: null, specialty: 'Black curry of black sesame and beef tendon; half-monthly “kimagure” curry.',
      anecdotes: [
        { text: 'A regular who first came in December 2023 while waiting for a coin laundry had made fifteen visits by August 2025, nearly always ending with a Lion Coffee.', source: R + 'B476426585/' },
        { text: 'A July 2025 diner asked at the register why the curry tasted sweet and was told it might be the honey and the black sesame.', source: R + 'B510103636/' },
        { text: 'A March 2026 diner had once been turned away because the curry was sold out, and came back for a “revenge visit”.', source: R + 'B524923598/' },
        { text: 'At Obon in August 2026 a diner waited about 20 minutes behind six groups, then about 15 more for the curry.', source: R + 'B533565010/' },
      ],
      japanese_sources_summary: 'Leaf KYOTO (2023年): 東本願寺近くにできた［KITCHEN カンパネラ］(キッチンカンパネラ) は出町柳の人気カレー店［出町カラビンカ］の姉妹店、元理髪店をリノベーション、レトロな雰囲気、黒ごまと牛すじのカレー1000円 (ミニサラダ付き)、デザートには特製和三盆プリン、2023年6月3日オープン、下京区西洞院町479、地下鉄五条駅から徒歩8分、11:30〜17:00、不定休、全席禁煙、駐車場なし、Instagram @campanella1098。食べログ: KITCHENカンパネラ、カフェ・カレー、火曜18:00〜20:30、水〜金11:30〜17:00、月・土・日休み、予約不可、カード・QR可。口コミ (2023年12月〜2026年8月、英語): 半月ごとに替わる Kimagure カレー、S・M・Lのサイズ、スパイスカツカレー、マサラキーマカレー、黒カレーの麺、Lion Coffee、カウンター6席と2人掛けのテーブル4卓。',
      confidence: 'medium', sources: [TB, LEAF, IG, R + 'B476426585/', R + 'B510103636/', R + 'B511263140/', R + 'B517808036/', R + 'B521199010/', R + 'B524923598/', R + 'B531019626/', R + 'B531641743/', R + 'B532929324/', R + 'B533565010/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found; Tabelog warns phone service may be Japanese only. Order at the table; sizes S, M, L.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西洞院町479',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; Instagram account @campanella1098 (63 posts); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.992564, 135.755104); GSI finds only the town (西洞院町, 51 m away); nearest pin kyr_ginjo_ramen_kubota at 41 m; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [LEAF, R + 'B510103636/', R + 'B531019626/'],
    price_note: 'No published menu; Leaf KYOTO (2023) and review prices (2025–26).', last_checked: TODAY, items: [
      it('黒ごまと牛すじのカレー', '', 'Black sesame and beef tendon curry, with mini salad', '¥1,000', 'Curry', 'ask', 'no', 'Leaf KYOTO, 2023.', 'black_curry'),
      it('', '', 'Spice katsu curry (S)', '¥1,500', 'Curry', 'no', 'no', 'July 2025; S came with 150 g of rice.', 'katsu_curry'),
      it('', '', 'Masala keema curry', '¥1,300', 'Curry', 'ask', 'no', 'June 2026.', 'keema'),
    ] }, {
    cuisine: 'スパイスカレーのカフェ。出町カラビンカの姉妹店 (Leaf KYOTO)・黒ごまと牛すじのカレー、ミニサラダ付き1000円 (Leaf KYOTO、2023年)。スパイシーでコクがあり、最初は黒ごまペーストの甘み、店の人によれば蜂蜜も (2025年7月・8月)・スパイスカツカレーのSサイズ1,500円 (2025年7月)、マサラキーマカレー1,300円 (2026年6月)・2024年8月からS・M・Lのサイズ。Sのご飯は2025年7月の口コミでは150g、2026年8月の口コミでは200gと少し・半月ごとに替わる Kimagure カレー (2025年7月): 辛い豚肉のカレー (2024年1月)、カルダモンチキンとグリーンカレー (2024年2月)、レッドカレーとアンチョビチキン (2024年3月)、梅バターチキン (2024年4月)、マスタードチキン (2024年5月)、酒粕チキン (2024年7月)、豚キムチカレー (2024年8月、2025年8月)、チキンコルマ (2025年6月)、マッサマンカレー (2025年8月)・トッピング: とんかつ (2024年1月)、半熟卵 (2024年10月)、スパイス卵 (2026年7月)・和風だしの旨みが立つ黒カレーの麺 (2024年10月)・柴漬け、玉ねぎ、人参、枝豆、れんこん、フライドオニオンを添えて (2025〜2026年)・夜は辛めの黒カレーとお酒 (2024年2月)・特製和三盆プリン (Leaf KYOTO、2023年) に黒蜜 (2025年6月)、バニラとマカダミアの香りの Lion Coffee (2023〜2025年)',
    neighborhood: '西洞院通、東本願寺の近く。地下鉄五条駅から徒歩8分',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。カツは衣付き、黒カレーの麺は小麦の麺 (2024〜2026年の口コミ)。カレーそのものの作り方は記載なし。',
    vegan_detail: 'ヴィーガン不可。定番のカレー (黒ごまと牛すじ、カツ、マサラキーマ) と、口コミに出てくる Kimagure カレーの多くには鶏肉、豚肉、ひき肉、アンチョビチキンなど肉や魚が入り、カレーの麺は和風だしの味 (2023〜2026年の口コミ)。ヴィーガンの記載なし。',
    notes: '[カレー・西洞院、東本願寺の近く] 元理髪店をリノベーションしたレトロな小さなカレーのカフェ。出町カラビンカの姉妹店。最初は甘く、あとから辛さが来る黒ごまと牛すじのカレー (1,000〜1,500円ほど)、半月ごとに替わる Kimagure カレー、カツやスパイス卵のトッピング、和三盆プリン。サイズはSからL。平日の昼と火曜の夜。予約不可。',
  });
}

// ================================================================ 粉もん居酒屋 まんまるい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26007280/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://www.mammalouis.com/', ABOUT = HP + 'about-us', FOOD = HP + 'food', LUNCH = HP + 'lunch', BLOG = 'https://ameblo.jp/mamma-louis/';
  const H = day(['11:00', '14:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_mamma_louis', name: '粉もん居酒屋 まんまるい (Mamma Louis)', category: 'OMNI',
    lat: 35.017909, lng: 135.776727, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a konamon (flour-food) izakaya — okonomiyaki, yakisoba, yaki udon and chijimi are wheat-based, and there is no gluten-free claim (official site; Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: the shop’s Tabelog page lists vegetarian options, but there is no vegan claim; the menu is mostly meat and seafood, and the tororo kombu udon is in a double dashi of bonito and kombu (official site). Tofu steak and yudofu are on the menu, ingredients not stated.',
    hours_raw: 'Lunch 11:00–14:00 (last order 13:30), izakaya time 17:30–23:00 (last order 22:30); closed Monday, open when Monday is a public holiday (official site; Tabelog the same). Lunch sets are weekdays only; weekend and holiday lunch is the regular menu (official site). Reservations taken, by phone or e-mail; parties up to 22 by reservation, catering by reservation; take-out and delivery (official site). A cancellation fee applies to special orders such as hamo or buri shabu once the ingredients are bought (Tabelog). 18 seats: 11 at the counter, 7–10 at tables; private hire up to 20 (Tabelog). Cards (Visa, Mastercard, JCB, Diners) and PayPay; no service or cover charge (Tabelog; official site). Smoking: a designated area for heated tobacco only (Tabelog); an October 2022 reviewer smelled cigarettes on entering and saw ashtrays. Pets welcome (official site); a February 2025 reviewer calls it dog-friendly. Children welcome, kids’ menu; English menu (Tabelog). Coin parking with 14 spaces within a 10-second walk (official site). Opened 8 January 2002 (Tabelog). South of Kyoto University Hospital, by the bakery Quatre Saisons (official site); 2 minutes from the Kumano Jinja-mae city bus stop, 7 minutes from Exit 4 of Jingu-Marutamachi Station (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shogoin by Kyoto University Hospital — near Kumano Shrine',
    cuisine: 'Konamon izakaya: okonomiyaki, yakisoba, yaki udon and chijimi, with teppan-yaki and obanzai of seasonal meat, fish and vegetables (official site) · official menu, tax included (read 2026-11-26): okonomiyaki from ¥880 (pork, chicken) — modan ¥1,230 (“No. 1”), modon (with udon) ¥1,230, negi-suji ¥1,400, okonomi-burg ¥1,230, curry cheese ¥1,030, Kujo-negi negiyaki ¥1,030, cheese tofu, mochi cheese, mochi kimchi ¥930 · yakisoba from ¥880 (garlic, natto, ume-shiso, kimchi, miso), golden yakisoba with soft egg ¥1,050, omusoba ¥1,050, sobameshi ¥1,050, abekku (soba and udon together) ¥1,700 · teppan-yaki ¥480–980: tonpei-yaki, chicken chashu, yam steak, beef cubes, tofu steak, corn butter · house chijimi ¥880 each (negi natto, shiso ume, hot chili, corn curry, negi kimchi) · rice dishes from ¥880 (omurice ¥980, loco moco ¥1,280, teppan pork-belly fried rice ¥1,480) · udon ¥780–980, including tororo kombu udon in bonito and kombu dashi · small hot pots: yudofu ¥800, chige, chicken soup curry, pork and napa cabbage ¥1,500 · daily specials on the kitchen board · weekday lunch: niko-niko set of any two dishes ¥1,500, shareable by two; lunch sets ¥880–1,480 with three small dishes and miso soup; add rice, miso soup and three small dishes to any dish for ¥300 (official site) · reviewers paid ¥500 for a one-coin lunch of kimchi udon, rice and lotus-root salad (December 2024) and ¥720 for pork yakisoba plus ¥80 for egg and ¥220 for the rice-soup-sides set (March 2025) · oyster okonomiyaki ¥1,050 (October 2022) · yam steak and beef tongue (May 2025)',
    website: HP, gmaps: gm('粉もん居酒屋 まんまるい 京都 聖護院川原町25-17'), menu_url: FOOD,
    notes: '[Okonomiyaki · Shogoin, by Kyoto University Hospital] A red-lantern konamon izakaya at a quiet corner below Kyoto University Hospital, open since 2002 under the motto “your home kitchen”: dozens of okonomiyaki and yakisoba (most ¥880–1,400), teppan-yaki, chijimi and small hot pots, cooked for you at the counter. Weekday lunch sets; open to 23:00; take-out and delivery; pets welcome. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['owner (the site links “まんまるい店主のブログ”, the owner’s blog)'], origin: null,
      background: 'Opened 8 January 2002 (Tabelog). The shop’s own text: since opening it has run on the concept of “your home kitchen”, and many of its signature dishes were created from customer requests, giving a konamon paradise of options (Tabelog; official site). A January 2023 reviewer describes a woman chef cooking every order carefully, so it can take a little while; a July 2024 reviewer found the staff a bit cool, as befits an old-style shop, and lunch busy with local workers. Reviewers mention students (September 2024) and locals (February 2025, May 2026).',
      philosophy: 'Your home kitchen; a part of your life, a partner for a while (Tabelog shop text).',
      specialty: 'Okonomiyaki and yakisoba in dozens of variations; teppan-yaki; house chijimi.',
      anecdotes: [
        { text: 'An August 2024 visitor brought a friend from Hokkaido who wanted Kansai okonomiyaki, ordered the shiso-and-cheese one, and enjoyed a highball at lunch.', source: R + 'B489995580/' },
        { text: 'A December 2024 diner tried the one-coin lunch of kimchi udon, wondered what it would be, and was surprised that udon topped with kimchi worked so well, with rice and a lotus-root salad for ¥500.', source: R + 'B497558216/' },
        { text: 'An October 2022 diner found the oyster okonomiyaki raw inside — flour, pork and oysters — left the pork, and said there would be no return visit.', source: R + 'B449937782/' },
      ],
      japanese_sources_summary: '公式サイト: 粉もん居酒屋まんまるい (mamma louis)、お好み焼き・焼きそば・焼きうどん・創作酒肴焼き (チヂミ) などの粉もんと、旬の食材の鉄板焼き・おばんざい、ランチタイム11:00〜14:00 (LO13:30)、居酒屋タイム17:30〜23:00 (LO22:30)、定休日は月曜日 (祝日月曜は営業)、出前・お持ち帰り可、宴会は最大22名・要予約、ケータリング可、PayPay・クレジットカード可、ペット可、徒歩10秒以内にコインパーキング14台、京大病院南・熊野寮前キャトルセゾン (パン屋) 上ル、左京区聖護院川原町25-17。メニュー (税込): お好み焼き880円〜 (モダン1230円、ねぎすじ焼き1400円)、焼きそば880円〜、鉄板焼き480〜980円、チヂミ各880円、ごはん類880円〜、めん類780円〜、お鍋800〜1500円、平日ランチのにこにこセットはよりどり2品で1500円、ランチセット880〜1480円。食べログ: 粉もん居酒屋 まんまるい、2002年1月8日オープン、18席、加熱式たばこ専用の喫煙所、英語メニュー、ベジタリアン対応、開業当初より「your home kitchen」がコンセプト。口コミ (2021年5月〜2026年5月、英語): 京大病院近くの路地、地元の人や学生に人気、女性の料理人がていねいに焼くので少し時間がかかる、ワンコインランチ、犬連れ可、2022年10月の口コミでは牡蠣のお好み焼きが生だったという苦情。',
      confidence: 'medium', sources: [TB, HP, ABOUT, FOOD, LUNCH, BLOG, R + 'B449937782/', R + 'B460018054/', R + 'B488673573/', R + 'B489995580/', R + 'B490650124/', R + 'B497558216/', R + 'B501091851/', R + 'B504073430/', R + 'B506079174/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); the official site is in Japanese apart from its headings, and Tabelog warns phone service may be Japanese only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院川原町25-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current menu and hours; Tabelog listing (official information, corporate member); reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.017909, 135.776727); GSI puts lot 25 of 聖護院川原町 about 85 m west-northwest (35.018211, 135.775879); the official site places the shop just north of the bakery Quatre Saisons corner, and the Tabelog point is 38 m north of kyoto_quatre_saison_bakery (hidden) and 35 m from kyoto_kuma_no_wine_house; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD, LUNCH],
    price_note: 'Official site menus, tax included (read 2026-11-26); lower prices in 2024–25 reviews (pork yakisoba ¥720 in March 2025).', last_checked: TODAY, items: [
      it('モダン', '', 'Modan okonomiyaki (with yakisoba)', '¥1,230', 'Okonomiyaki', 'no', 'no', 'The site calls it the No. 1 classic.', 'modan'),
      it('ねぎすじ焼き', '', 'Negi-suji yaki (green onion and beef tendon)', '¥1,400', 'Okonomiyaki', 'no', 'no', '', 'negisuji'),
      it('ぶた', '', 'Pork okonomiyaki', '¥880', 'Okonomiyaki', 'no', 'no', '', 'buta'),
      it('ねぎ焼き', '', 'Negiyaki with Kujo green onions', '¥1,030', 'Okonomiyaki', 'no', 'no', '', 'negiyaki'),
      it('黄金焼きそば', '', 'Golden yakisoba with soft egg', '¥1,050', 'Yakisoba', 'no', 'no', '', 'ogon_yakisoba'),
      it('山芋ステーキ', '', 'Yam steak', '¥880', 'Teppan-yaki', 'ask', 'ask', '', 'yam_steak'),
      it('とろろ昆布うどん', '', 'Tororo kombu udon', '¥780', 'Noodles', 'no', 'no', 'Bonito and kombu dashi.', 'tororo_udon'),
      it('にこにこセット', '', 'Niko-niko set: any two dishes (weekday lunch)', '¥1,500', 'Lunch', 'no', 'no', 'Shareable by two.', 'nikoniko'),
    ] }, {
    cuisine: '粉もん居酒屋。お好み焼き、焼きそば、焼きうどん、チヂミに、旬の肉・魚・野菜の鉄板焼きとおばんざい (公式サイト)・公式メニュー (税込、2026年11月26日閲覧): お好み焼きは880円から (ぶた、チキン)。モダン1230円 (定番人気No.1)、もどん (うどんのモダン) 1230円、ねぎすじ焼き1400円、お好みバーグ1230円、カレーチーズ1030円、九条ネギのねぎ焼き1030円、チーズ豆腐・もちチーズ・もちキムチ930円・焼きそばは880円から (ガーリック、納豆、梅しそ、キムチ、味噌)、ふんわり玉子乗せの黄金焼きそば1050円、オムそば1050円、そばめし1050円、そばとうどんの相乗りのアベック1700円・鉄板焼き480〜980円: とんぺい焼き、鶏チャーシュー、山芋ステーキ、コロコロステーキ、豆腐ステーキ、コーンバター・当店オリジナルのチヂミ各880円 (ねぎ納豆焼き、しそ梅、ホットチリ、コーンカレー、ねぎキムチ)・ごはん類は880円から (オムライス980円、ロコモコ丼1280円、豚バラ鉄板チャーハン1480円)・めん類780〜980円。とろろ昆布うどんは、かつおと昆布のWだし・小鍋: 湯豆腐800円、ちげ鍋、チキンスープカレー鍋、白菜と豚の重ね鍋1500円・日替わりの一品は厨房内のメニューボードに・平日ランチ: よりどり2品で1500円のにこにこセット (1セット2人までシェア可)、小鉢3品と味噌汁付きのランチセット880〜1480円、単品に＋300円でライス・味噌汁・小鉢3品 (公式サイト)・口コミでは、キムチうどんにご飯とれんこんのサラダのワンコインランチ500円 (2024年12月)、ぶた焼きそば720円に玉子80円、ライス・小鉢3品・味噌汁のセット220円 (2025年3月)・牡蠣のお好み焼き1,050円 (2022年10月)・山芋ステーキと牛タン (2025年5月)',
    neighborhood: '聖護院、京大病院の南。熊野神社の近く',
    gf_detail: 'グルテンフリー不可。粉もん居酒屋で、お好み焼き、焼きそば、焼きうどん、チヂミは小麦が中心。グルテンフリーの記載なし (公式サイト、食べログ)。',
    vegan_detail: 'ヴィーガン — 要確認。食べログの店のページにはベジタリアン対応ありとあるが、ヴィーガンの記載はない。メニューは肉や魚介が中心で、とろろ昆布うどんはかつおと昆布のWだし (公式サイト)。豆腐ステーキや湯豆腐もあるが、材料は記載なし。',
    notes: '[お好み焼き・聖護院、京大病院の近く] 京大病院の下の静かな角、赤ちょうちんが目印の粉もん居酒屋。2002年から「your home kitchen」がコンセプト。お好み焼きと焼きそばは数十種類 (多くは880〜1,400円)、鉄板焼き、チヂミ、小鍋。カウンターで焼いて出してくれる。平日はランチセット。夜は23時まで。持ち帰り・出前可、ペット可。月曜休み。',
  });
}

// ================================================================ 炭火焼ソーセージ酒場Salumeria
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025334/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/salumeria2015/';
  put({
    id: 'kyoto_salumeria_demizu', name: '炭火焼ソーセージ酒場Salumeria', category: 'OMNI',
    lat: 35.01935, lng: 135.76949, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Bread comes first, and the menu has spaghetti and pâté en croûte (2024–26 reviews); the sausages are made without additives or chemical seasonings (shop’s Tabelog text), but binders and casings are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: no vegan claim. The menu is built on homemade sausages, ham, bacon, pâté and meat dishes; reviewers also had salads, French fries, potatoes and peperoncino spaghetti, ingredients not stated (2023–26 reviews).',
    hours_raw: 'Hours not published on Tabelog: the shop points to its Instagram (@salumeria2015). Dinner service in reviews (a Friday night busy around 20:00, June 2026). Reservations taken; a booking is cancelled if you are more than 30 minutes late without calling (Tabelog). A party of four was seated without a booking in January 2026. Cash only (Tabelog; January 2026). A ¥1,000 seating charge is waived if you order two drinks (June 2026 review). 28 seats: 8 at the counter, 20 at tables; private hire possible; non-smoking; free Wi-Fi; no parking (Tabelog). Opened 15 March 2015 (Tabelog). 5 minutes from Exit 3 of Jingu-Marutamachi Station (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Demizu-cho north of Kawaramachi-Marutamachi — 5 min from Jingu-Marutamachi Stn',
    cuisine: 'Homemade sausages grilled over charcoal, with small plates, appetizers, pasta, meat dishes and desserts inspired by Italian and French cooking (shop’s Tabelog text) · every sausage made in house, from grinding the meat to stuffing the casings, without additives or chemical seasonings (shop’s Tabelog text) · charcoal-grilled sausage 240 g ¥2,600; with a white wine and a draft beer ¥4,610 (June 2024); sausage with potatoes (July 2026) · sausages take about 30 minutes, so order them first (October 2023, June 2024) · house ham and bacon, yellowtail among the appetizers (June 2026) · pâté and beef ragù pasta (December 2024); a thick pâté en croûte (January 2026) · seared bonito with grilled-eggplant tartare and shiso-myoga salsa verde, peperoncino and amatriciana spaghetti (July 2026) · salad with figs and large portions of French fries for two or three (October 2023) · natural wine (December 2024); soft drinks in large mugs (January 2026) · reviewers spend about ¥5,000–6,000 (Tabelog average; September 2025, June 2026)',
    website: IG, gmaps: gm('炭火焼ソーセージ酒場Salumeria 京都 上京区出水町258'), menu_url: null,
    notes: '[Italian · Demizu-cho, sausage tavern] A stylish, dimly lit tavern north of Kawaramachi-Marutamachi where every sausage is made in house and grilled over charcoal (240 g about ¥2,600 in 2024), with pâté en croûte, house ham, seasonal small plates, pasta and natural wine. Order the sausages first — they take about 30 minutes. About ¥5,000–6,000 a head. Cash only; hours on Instagram.',
    chef_bio: { chef_name: null, roles: ['owner'], origin: null,
      background: 'Opened 15 March 2015 (Tabelog). The shop’s own text: all sausages are homemade, from grinding the meat to stuffing the casings, made without additives or chemical seasonings, alongside dishes inspired by Italian and French cuisine but not limited to them, changing with the season (Tabelog). A January 2026 reviewer saw the owner running everything alone, pleasant and with no compromise in quality; a July 2026 reviewer found the staff bright and cheerful. The room is stylish and spacious but quite dark (June 2024), chic (January 2026), with carefully chosen cutlery (July 2026).',
      philosophy: 'Truly delicious sausages without additives or chemical seasonings; dishes delicious for the season (shop’s Tabelog text).',
      specialty: 'Homemade charcoal-grilled sausages; pâté en croûte.',
      anecdotes: [
        { text: 'A June 2024 solo diner waited nearly 30 minutes for the sausage with one glass of white wine, then had the place alone for the whole hour.', source: R + 'B487345533/' },
        { text: 'An August 2024 visitor waited about an hour, beers in hand, and still praised the sausages and salads.', source: R + 'B405153679/' },
        { text: 'On the first night of a January 2026 trip, a party of four was seated without a reservation and found the pâté en croûte thick in a way rarely seen in Tokyo.', source: R + 'B520506603/' },
      ],
      japanese_sources_summary: 'Instagram (@salumeria2015、表示名 京都|イタリア料理|炭火焼ソーセージ酒場Salumeria)。食べログ: 炭火焼ソーセージ酒場Salumeria、イタリアン・居酒屋・ビストロ、上京区出水町258、神宮丸太町駅3番出口から徒歩5分、営業時間はInstagramで、予約可 (連絡なしで30分過ぎるとキャンセル扱い)、カード・電子マネー・QR不可、28席 (カウンター8、テーブル20)、禁煙、2015年3月15日オープン。店の紹介: ソーセージは肉を挽くところから腸詰めまですべて自家製、食品添加物や化学調味料を使わない、イタリアンとフレンチをベースにした小皿、前菜、パスタ、肉料理、デザート。口コミ (2023年10月〜2026年7月、英語): 炭火焼ソーセージ240g 2,600円、焼き上がりまで30分ほど、自家製のハムとベーコン、パテ・アン・クルート、ナチュラルワイン、店主がひとりで切り盛り (2026年1月)、ドリンク2杯で席料1,000円が無料 (2026年6月)、現金のみ。',
      confidence: 'medium', sources: [TB, IG, R + 'B405153679/', R + 'B474936167/', R + 'B487345533/', R + 'B498565002/', R + 'B513058613/', R + 'B520506603/', R + 'B528404633/', R + 'B529907389/', R + 'B531228035/', R + 'B536460681/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found; Tabelog warns phone service may be Japanese only. Cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区出水町258',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; Instagram account @salumeria2015 (587 posts); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.019350, 135.769490); GSI lot 258 of 出水町 is 16 m east (35.019356, 135.769669); nearest pins kyoto_totoya_kyoto_honten (出水町252) 23 m and kyoto_vulcan_kojinguchi 30 m; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487345533/', R + 'B536460681/'],
    price_note: 'Review prices only (June 2024, June 2026); no published menu.', last_checked: TODAY, items: [
      it('', '', 'Charcoal-grilled homemade sausage (240 g)', '¥2,600', 'Sausages', 'ask', 'no', 'June 2024; takes about 30 minutes.', 'sausage240'),
    ] }, {
    cuisine: '炭火で焼く自家製ソーセージに、イタリアンとフレンチをベースにした小皿、前菜、パスタ、肉料理、デザート (食べログの店の紹介)・ソーセージは肉を挽くところから腸詰めまですべて自家製、食品添加物や化学調味料は使わない (食べログの店の紹介)・炭火焼ソーセージ240g 2,600円、白ワインと生ビールと合わせて4,610円 (2024年6月)、じゃがいも添えのソーセージ (2026年7月)・ソーセージの焼き上がりには30分ほどかかるので最初に注文を (2023年10月、2024年6月)・自家製のハムとベーコン、前菜にぶりも (2026年6月)・パテと牛肉のラグーのパスタ (2024年12月)、厚いパテ・アン・クルート (2026年1月)・焼き茄子のタルタルと紫蘇と茗荷のサルサヴェルデを添えた鰹のたたき、ペペロンチーノとアマトリチャーナのスパゲッティ (2026年7月)・いちじくのサラダ、2〜3人で分けられる量のフライドポテト (2023年10月)・ナチュラルワイン (2024年12月)、ソフトドリンクは大きなマグで (2026年1月)・予算は5,000〜6,000円ほど (食べログの平均、2025年9月、2026年6月)',
    neighborhood: '河原町丸太町の北、出水町。神宮丸太町駅から徒歩5分',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。最初にパンが出て、スパゲッティやパテ・アン・クルートもある (2024〜2026年の口コミ)。ソーセージは食品添加物や化学調味料を使わない (食べログの店の紹介) が、つなぎや腸の説明はない。',
    vegan_detail: 'ヴィーガン — 要確認。ヴィーガンの記載なし。自家製ソーセージ、ハム、ベーコン、パテ、肉料理が中心。サラダ、フライドポテト、じゃがいも、ペペロンチーノもあるが、材料は記載なし (2023〜2026年の口コミ)。',
    notes: '[イタリアン・出水町、ソーセージの酒場] 河原町丸太町の北、薄暗くおしゃれな酒場。ソーセージはすべて自家製で炭火焼き (2024年に240gで2,600円ほど)。パテ・アン・クルート、自家製ハム、季節の小皿、パスタ、ナチュラルワイン。ソーセージは焼き上がりまで30分ほどなので最初に注文を。予算は5,000〜6,000円ほど。現金のみ。営業時間はInstagramで。',
  });
}

// ================================================================ CHERIE MAISON DU PARFAIT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039962/'; const R = TB + 'dtlrvwlst/';
  const HP = 'http://www.kanaekobayashi.com/', PF = HP + 'Parfait.html', PROF = HP + 'Kanae.html';
  const TC = 'https://www.tablecheck.com/ja/shops/cheriekyoto/reserve';
  put({
    id: 'kyoto_cherie_maison_du_parfait', name: 'CHERIE MAISON DU PARFAIT', category: 'OMNI',
    lat: 35.016297, lng: 135.757432, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Parfaits are built with streusel, meringue and biscuit parts and come with croissants, madeleines or financiers (official site; 2025–26 reviews); the kakigori is not described for gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the parfaits use house gelato, panna cotta, Chantilly cream and cream cheese, and the morning set comes with a butter croissant (official site; TableCheck; 2026 reviews). No vegan claim.',
    hours_raw: 'Reservation only, online through TableCheck (official site; Tabelog); pay in advance by card when booking — fully cashless, and any extras are charged to that card (TableCheck). Time slots of 10:00, 13:00 and 15:30 (January 2026 review); the 10:00 slot is a simultaneous start for 8 counter seats, other times are not (TableCheck notice, Christmas 2026). At least one item per person; stays up to 60 minutes; no children of elementary-school age or younger (TableCheck; Tabelog: 12 and over). Cancellation: 100% the day before or the day, 50% two days before (TableCheck). Phone 080-9742-2812, 11:00–17:00 on open days only (TableCheck). Christmas dessert-parfait sessions at 10:00 on 12, 13, 19 and 20 December 2026 (TableCheck notice). Open days are not published. No parking or bicycle space (TableCheck). In a machiya on Takeyamachi-dori, Aioi-cho 281 (official site: 竹屋町通り衣棚東入る; TableCheck: 竹屋町通室町西入). Opened 1 September 2023 after a pre-opening on 26 August (Tabelog). 5 minutes from Karasuma Marutamachi (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-dori machiya — 5 min from Karasuma Marutamachi',
    cuisine: 'Seasonal dessert parfaits made in front of you by a pastry chef (official site; 2025–26 reviews) · official: a morning parfait with croissants baked in the shop’s oven every morning, house gelato and house granola; seasonal dessert parfaits of about ten parts — house gelato and sorbet, seasonal fruit, jelly, panna cotta; every menu comes with an original tea pairing (official site) · seasonal dessert parfaits and dessert kakigori made only when the fruit is at its best (TableCheck) · cherry parfait morning session: cold-pressed orange juice, a freshly baked croissant, then a parfait of American cherries with griottine-cherry sorbet, vanilla gelato, lychee jelly, cherries poached in red wine, rare cheese of French cream cheese, meringue and streusel, and a pear-and-lavender tea (June 2026) · chocolate session with a welcome cold tea, then warm tea and fresh chocolate madeleines (January 2026); strawberry morning parfait (February 2026); peach parfait with a fresh financier, ¥4,400 (July 2026) · Shine Muscat parfait and Mont Blanc kakigori with chestnuts and jasmine-tea syrup, ¥3,500 each before tax, each with a flavoured tea (October 2026); fig kakigori with cream cheese (September 2026) · reviewers spend ¥3,000–5,000 (2025–26)',
    website: PF, gmaps: gm('CHERIE MAISON DU PARFAIT 京都 中京区相生町281'), menu_url: TC,
    notes: '[Sweets · Takeyamachi, parfait counter] A white, reservation-only parfait shop in a machiya near Karasuma Marutamachi, from Paris-trained confectioner 小林かなえ (Kanae Kobayashi): at an eight-seat counter a pastry chef builds seasonal parfaits of about ten parts — house gelato, sorbet, fruit, jelly — explaining each, with a paired tea and a fresh-baked croissant or madeleine. About ¥3,500–4,400. Book and prepay on TableCheck; cashless.',
    chef_bio: { chef_name: '小林かなえ (Kanae Kobayashi)', roles: ['Confectionery researcher behind the CHÉRIE shops (official site)'], origin: 'Kyoto (official profile: 地元京都)',
      background: 'Per the official profile: drawn to French pastry while working part-time at Le Cordon Bleu Kyoto as a student, worked three years at a Kyoto pastry shop, did a short internship at the patisserie 「グロス」 in Alsace at 20, and at 23 went to Paris alone; graduated from the Ecole Ritz Escoffier, trained six months at the Hôtel Ritz and then at Arpège, Lucas Carton, Taillevent and the Hôtel de Crillon. Back in Kyoto in 1997 Kobayashi opened the small pastry school 「ラ・プテイ・シェリー」, published a first book in 1998 and about fifteen since, opened a macaron patisserie in the school’s tenth year and closed it five years later after marriage and childbirth while keeping the classes, moved the atelier to Goshominami in 2014, and appears on NHK きょうの料理. CHERIE MAISON DU BISCUIT opened in March 2019 (kyoto_cherie_maison_du_biscuit) and CHERIE MAISON DU PARFAIT in September 2023, with a top Italian gelato machine for fresh house gelato and sorbet. The CHÉRIE shops also include シェリーカフェ (official site). Reviewers describe a white interior, stylish tableware and lovely staff uniforms (July 2026), a lively all-female staff (July 2026), and a pastry chef explaining every part (October 2025, June 2026).',
      philosophy: 'Fresh-made seasonal dessert parfaits finished in front of the guest; every menu paired with an original tea (official site).',
      specialty: 'Seasonal dessert parfaits; dessert kakigori.',
      anecdotes: [
        { text: 'An October 2026 diner finished a tour of all three CHÉRIE KYOTO shops here.', source: R + 'B537138212/' },
        { text: 'A July 2026 diner and partner waited over 30 minutes while eight parfaits were made at once, were told to hurry when asking to take photos, and found ¥4,400 a bit pricey.', source: R + 'B533526412/' },
        { text: 'A September 2026 diner found the fig kakigori bland, the cream cheese frozen hard and the tea not hot enough for the price.', source: R + 'B538125533/' },
        { text: 'A February 2026 guest found the strawberry morning parfait more like a work of art than a parfait, but worried about getting another booking.', source: R + 'B539267686/' },
      ],
      japanese_sources_summary: '公式サイト: シェリーメゾンドパフェ、毎朝店内のオーブンで焼き上げる焼きたてクロワッサンと自家製ジェラート＆自家製グラノーラ、季節のフルーツでお作りするCHÉRIEの朝パフェ、自家製ジェラートとソルベ、季節のフルーツやジュレ、パンナコッタなど10種類ものパーツの季節のデセールパフェ、すべてのメニューにオリジナルティーのペアリング、完全予約制、竹屋町通り衣棚東入る相生町281 (竹屋町通りの町家)。プロフィール: 小林かなえ Kanae KOBAYASHI、23歳で単身パリへお菓子留学、エコール・リッツ・エスコフィエ卒業、ホテル・リッツ、アルページュ、ルカ・キャルトン、タイユヴァン、オテル・ド・クリヨンで修業、1997年に京都でお菓子教室「ラ・プテイ・シェリー」を開校、著書15冊、NHKきょうの料理、2019年3月 CHERIE MAISON DU BISCUIT、2023年9月 CHERIE MAISON DU PARFAIT オープン (イタリア製最高級ジェラードマシン)。TableCheck: 事前予約制、予約時に事前決済の完全キャッシュレス、1人1品以上、滞在は最大60分、小学生以下は利用不可、10時の枠はカウンター8席で一斉スタート、2026年12月のクリスマスのデセールパフェ会。食べログ: 中京区相生町281、2023年9月1日オープン (8月26日プレオープン)、完全予約制。口コミ (2025年10月〜2026年10月、英語): パティシエが目の前で一品ずつ説明しながら作るパフェ、季節のパフェとかき氷は税抜3,500円 (2026年10月)、桃のパフェとフィナンシェで4,400円 (2026年7月)、待ち時間が長い、写真を急かされたという苦情 (2026年7月)。',
      confidence: 'medium', sources: [TB, HP, PF, PROF, TC, R + 'B514872141/', R + 'B523272011/', R + 'B529871525/', R + 'B533160201/', R + 'B533526412/', R + 'B537138212/', R + 'B538125533/', R + 'B539267686/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only through TableCheck, which has an English interface; the official site is in Japanese. Prepay by card; no walk-ins when full.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区相生町281',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (shop page, CHÉRIE shop list); TableCheck booking page with a Christmas 2026 notice; Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016297, 135.757432); GSI lot 281 of 相生町 is 16 m east (35.016293, 135.757614); kyoto_shoku_kobo_hirosaki (相生町282) is 13 m away; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533526412/', R + 'B537138212/'],
    price_note: 'Review prices only (July and October 2026); prepaid on TableCheck.', last_checked: TODAY, items: [
      it('', '', 'Seasonal dessert parfait with tea (e.g. Shine Muscat)', '¥3,500 + tax', 'Parfait', 'ask', 'no', 'October 2026.', 'parfait'),
      it('', '', 'Seasonal dessert kakigori with tea (e.g. Mont Blanc)', '¥3,500 + tax', 'Kakigori', 'ask', 'no', 'October 2026.', 'kakigori'),
      it('', '', 'Seasonal parfait course with fresh-baked financier (peach)', '¥4,400', 'Parfait', 'no', 'no', 'July 2026.', 'parfait_course'),
    ] }, {
    cuisine: 'パティシエが目の前で作る季節のデセールパフェ (公式サイト、2025〜2026年の口コミ)・公式: 毎朝店内のオーブンで焼き上げる焼きたてクロワッサンと自家製ジェラート、自家製グラノーラの朝パフェ。自家製ジェラートとソルベ、季節のフルーツやジュレ、パンナコッタなど10種類ものパーツの季節のデセールパフェ。すべてのメニューにオリジナルティーのペアリング (公式サイト)・旬の果物が最も美味しい季節だけに作る季節限定のデセールパフェとデセールかき氷 (TableCheck)・さくらんぼのパフェの朝の会: コールドプレスのオレンジジュース、焼きたてのクロワッサン、アメリカンチェリーに Griottine のさくらんぼのソルベ、バニラのジェラート、ライチのジュレ、赤ワインで煮たさくらんぼ、フランスのクリームチーズのレアチーズ、メレンゲとシュトロイゼルのパフェ、洋梨とラベンダーのお茶 (2026年6月)・冷たいウエルカムティーに始まり、温かいお茶と焼きたてのチョコレートのマドレーヌで終わるチョコレートの会 (2026年1月)。苺の朝パフェ (2026年2月)。桃のパフェと焼きたてのフィナンシェで4,400円 (2026年7月)・シャインマスカットのパフェと、栗とジャスミンティーのシロップのモンブランのかき氷は各税抜3,500円、それぞれフレーバーティー付き (2026年10月)。いちじくとクリームチーズのかき氷 (2026年9月)・口コミの予算は3,000〜5,000円 (2025〜2026年)',
    neighborhood: '竹屋町通の町家。烏丸丸太町から徒歩5分',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。パフェにはシュトロイゼル、メレンゲ、ビスキュイのパーツが入り、クロワッサン、マドレーヌ、フィナンシェが付く (公式サイト、2025〜2026年の口コミ)。かき氷のグルテンの説明はない。',
    vegan_detail: 'ヴィーガン不可。パフェには自家製ジェラート、パンナコッタ、シャンティ、クリームチーズを使い、朝の会にはバターのクロワッサンが付く (公式サイト、TableCheck、2026年の口コミ)。ヴィーガンの記載なし。',
    notes: '[スイーツ・竹屋町、パフェのカウンター] 烏丸丸太町近くの町家にある白い完全予約制のパフェ店。パリで修業した菓子研究家の小林かなえの店。カウンター8席の前でパティシエが一品ずつ説明しながら、自家製ジェラートやソルベ、果物、ジュレなど10種類ほどのパーツで季節のパフェを作る。ペアリングのお茶と焼きたてのクロワッサンやマドレーヌ付き。3,500〜4,400円ほど。TableCheckで予約・事前決済、キャッシュレス。',
  });
}

// ================================================================ skips
skip('26017060', 'chain: ロイヤルホスト 堀川五条店 is a Royal Host branch — national family-restaurant chain (Tabelog’s name search lists Royal Host shops from New Chitose Airport to Naha Airport, per the osw1-52 skip of 26040518); a second Kyoto branch, 京都髙島屋S.C.店 (26040518), is in this crawl.');
skip('26022160', 'chain: すき家 鳥丸丸太町店 is a branch of the national gyudon chain すき家; this crawl alone lists seven Kyoto branches (北白川 26020584, 百万遍 26018882, 烏丸七条 26021230, 四条堀川 26024831, 四条木屋町 26005493, 河原町三条 26022764, 鳥丸丸太町 26022160).');
skip('26021230', 'chain: すき家 烏丸七条店 is a branch of the national gyudon chain すき家; seven Kyoto branches in this crawl (see the skip of 26022160).');

save();
