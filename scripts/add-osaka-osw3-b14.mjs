// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 14.
//   + さかなのじんべえ なんば店 (Sakana no Jinbee: seafood izakaya on Sennichimae with fish from the group's own wholesaler)
//   + SAKE NERD (glass-walled third-floor sake bar and creative izakaya by Namba Hatch; Kawachi duck)
//   + オオサカチャオメン 難波千日前 (Chinese tavern behind NGK; crisp "chaomen" noodles and shumai)
//   + 楽洛亭 本店 (Rakuraku Tei Honten: 70-year-old yakiniku by Nankai Namba; secret sauce, outside skirt)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 13):
//   27111658, 27124682, 27144566, 27004130 (last two digits 58, 82, 66, 30: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Chain check (Greg's rulings, 2026-11-02). Sakana no Jinbee: the only Sakana no Jinbee; its operator also runs other
//   "Jinbee" formats (oden-and-soba, standing bar, gyoza) and Allegro pizzerias, none in data — sister concepts, kept and
//   flagged. Rakuraku Tei: the main shop, with one Nipponbashi branch (Gnavi), not in data. SAKE NERD and Oosaka Chaomen:
//   no other shops found.
//   open_late: true only when closing after 22:00.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ さかなのじんべえ なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27111658/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'osaka_sakana_no_jinbee_namba', name: 'さかなのじんべえ なんば店 (Sakana no Jinbee Nanba Ten)', category: 'OMNI',
    lat: 34.66646, lng: 135.504328, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is where to start; the grilled squid with sauce, kushikatsu, gratin, chicken nanban, spaghetti and the pizza from next door are wheat- or soy-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya.',
    hours_raw: 'Mon–Fri 15:00–23:00; Sat, Sun and holidays 12:00–23:00 (last orders food 22:00, drinks 22:30); irregular closures (Tabelog). A ¥1,000 "senbero" of three drinks and a small dish, weekdays only (July–August 2026). Reservations; a ¥5,000 course of eight dishes with 90-minute all-you-can-drink (Tabelog); a regular finds à la carte better value (May 2026). Order by smartphone (July 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and PayPay (Tabelog). 100 seats: a counter of 20 on the first floor, tables on the second, tatami rooms for groups on the third; non-smoking; takeaway (Tabelog). Phone charging (August 2026). Opened 21 June 2019 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 2-6-6, on the Sennichimae shopping street — 2 min from Kintetsu Nippombashi Stn, 3 min from Nippombashi Stn',
    cuisine: 'Seafood izakaya with fish delivered direct from the group\'s own wholesaler, Uoya Ebizo (Tabelog) · sashimi platters, plump and fresh, five kinds (2026) · the signature grilled squid (ikayaki) under mayonnaise, a sweet-spicy sauce and green onions (August–October 2026) · kushikatsu with a light, crisp batter (September–October 2026); dashimaki; seafood gratin; chicken nanban; crab salad spaghetti (2026) · Neapolitan pizza such as Margherita, ordered in from the sister pizzeria Allegro next door (Tabelog; 2026) · a ¥1,000 senbero of three drinks and a small dish on weekdays; highballs, sake and shochu (2026; Tabelog) · a ¥5,000 eight-dish course with 90-minute all-you-can-drink (Tabelog)',
    website: null, gmaps: gm('さかなのじんべえ なんば店'), menu_url: null,
    notes: "[Izakaya · Sennichimae, fresh fish with pizza from next door] A three-floor seafood izakaya on the Sennichimae shopping street, counter downstairs, tables and tatami above, with fish sent straight from its group's own wholesaler. Order the sashimi platter and the house grilled squid under mayo and sweet-spicy sauce, then kushikatsu, seafood gratin or dashimaki, and, unusually, a Neapolitan pizza delivered from the sister pizzeria Allegro next door. Weekdays bring a ¥1,000 deal of three drinks and a small dish from 15:00; weekends it opens at noon. Regulars in 2026 call the fish fresh and well priced; others found the service curt, the upper floors short-staffed, or pairs steered to the counter without being asked.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: fish delivered direct from the group\'s own wholesale fish shop, Uoya Ebizo; pizza and pasta from the sister restaurant Allegro next door; opened 21 June 2019. A regular calls it part of "the Jinbee series" (April 2026). One September 2026 diner found the owner quiet but the room bright and lively.',
      philosophy: null, specialty: 'Sashimi; grilled squid; kushikatsu.',
      anecdotes: [
        { text: '"The signature grilled squid is generously topped with mayonnaise, making a big impact!" — August 2026, with a Margherita from Allegro.', source: R + 'B533039584/' },
        { text: '"For just 1,000 yen, you get 3 drinks plus a dish, which is an amazing deal!" — August 2026, a daytime drink.', source: R + 'B533220010/' },
        { text: '"I couldn\'t find the senbero menu, so I asked about it, and received a somewhat curt response: \'It says only on weekdays.\'" — July 2026, a hot day after Kuromon Market.', source: R + 'B531734816/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): さかなのじんべえ なんば店、居酒屋・海鮮、千日前2-6-6、Kintetsu Nippombashi 駅から徒歩2分、Nippombashi 駅から徒歩3分、月〜金 15:00〜23:00、土日祝 12:00〜23:00 (L.O.料理22:00・ドリンク22:30)、不定休、予約可、90分飲み放題つきの8品のコース5,000円、カード・電子マネー・PayPay可、100席 (カウンター20)、1階はカウンター、2階はテーブル、3階は座敷、禁煙、テイクアウト、2019年6月21日オープン、自社の卸 Uoya Ebizo から直送の鮮魚、いか焼き、串カツ、隣の姉妹店 Allegro のナポリピッツァとパスタ。口コミ(2026年4月〜10月): 刺身の5種盛り、マヨと甘辛いタレのいか焼き、串カツ、海鮮グラタン、だし巻き、チキン南蛮、カニサラダのスパゲッティ、平日のせんべろ1,000円 (3杯と1品)、スマホで注文、新鮮で手頃という声、接客がそっけない、席の案内に不満という声も。',
      confidence: 'medium', sources: [TB, R + 'B482760954/', R + 'B526240544/', R + 'B531734816/', R + 'B532677424/', R + 'B533039584/', R + 'B533220010/', R + 'B533402591/', R + 'B533584397/', R + 'B535719174/', R + 'B536212918/', R + 'B536904075/', R + 'B537758566/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The shop welcomes international guests (Tabelog); smartphone ordering (July 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-6-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目6番6号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B533220010/'],
    price_note: 'Only the course and the senbero price are published or reported (Tabelog; August 2026).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi (five kinds)', '', 'Sashimi', 'ask', 'no', 'October 2026.', 'sashimi'),
      it('', 'Ikayaki', 'Grilled squid with mayonnaise and sweet-spicy sauce', '', 'Signatures', 'no', 'no', 'August–October 2026.', 'ikayaki'),
      it('', '', 'Kushikatsu', '', 'Fried', 'no', 'no', 'September–October 2026.', 'kushikatsu'),
      it('', '', 'Senbero: three drinks and a small dish (weekdays)', '¥1,000', 'Drinks', 'ask', 'no', 'August 2026.', 'senbero'),
      it('', '', 'Course of eight dishes with 90-minute all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'Tabelog.', 'course'),
    ] }, {
    cuisine: 'グループの卸 Uoya Ebizo から直送の魚の海鮮居酒屋 (食べログ)・ぷりぷりで新鮮な刺身の5種盛り (2026年)・看板のいか焼きはマヨネーズと甘辛いタレ、青ねぎ (2026年8〜10月)・衣が軽くさくさくの串カツ (2026年9〜10月)、だし巻き、海鮮グラタン、チキン南蛮、カニサラダのスパゲッティ (2026年)・隣の姉妹店 Allegro から届くマルゲリータなどのナポリピッツァ (食べログ、2026年)・平日は3杯と小皿1品で1,000円のせんべろ、ハイボール、日本酒、焼酎 (2026年、食べログ)・90分飲み放題つきの8品のコース5,000円 (食べログ)',
    neighborhood: '千日前2-6-6、千日前の商店街。Kintetsu Nippombashi 駅から徒歩2分、Nippombashi 駅から3分',
    gf_detail: '要確認。グルテンの情報なし。刺身から確認を。タレのいか焼き、串カツ、グラタン、チキン南蛮、スパゲッティ、隣から届くピッツァは小麦や醤油を使う。',
    vegan_detail: 'ヴィーガンではありません。海鮮居酒屋。',
    notes: '[居酒屋・千日前、新鮮な魚と隣から届くピッツァ] 千日前の商店街にある3フロアの海鮮居酒屋で、1階はカウンター、上はテーブルと座敷。魚はグループの卸から直送。頼むなら刺身の盛り合わせと、マヨと甘辛いタレの看板のいか焼き、それに串カツ、海鮮グラタン、だし巻き。珍しいのは隣の姉妹店 Allegro から届くナポリピッツァ。平日は15時から3杯と小皿で1,000円、週末は昼12時から。2026年の口コミでは常連が魚の新鮮さと値段をほめる一方、接客がそっけない、上の階の人手が足りない、2人連れが聞かれずにカウンターへ案内されたという声も。',
  });
}

// ================================================================ SAKE NERD
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27124682/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']); const WE = day(['15:00', '24:00']);
  put({
    id: 'osaka_sake_nerd_saiwaicho', name: 'SAKE NERD', category: 'OMNI',
    lat: 34.668295, lng: 135.494386, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Duck tataki, sashimi and grilled peppers are where to start; the ham cutlet, fried chicken neck, miso and soy-based sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, pork, fish and shrimp dishes; a few vegetable plates such as grilled manganji peppers (May 2026).',
    hours_raw: 'Mon–Fri and the days before and after a holiday 17:00–24:00; Sat, Sun and holidays 15:00–24:00 (last orders food 23:00, drinks 23:30); irregular closures, posted on Instagram (Tabelog). A two-hour limit at busy weekend times; online booking may show full when seats remain, so phone (Tabelog). A ¥450 appetizer charge (June 2026). Courses of five dishes ¥3,100 or seven ¥4,000, each with a glass of sake (Tabelog). Celebration cakes may be brought in (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay and QR (Tabelog). 29 seats: a counter of 17 and a large table of 11; private hire from about 25; non-smoking; free Wi-Fi; English and Simplified Chinese menus, a digital menu (Tabelog). Third floor, no elevator (May 2026); one restroom (July 2026). Opened 1 July 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Saiwaicho 1-2-8, 82minatomachi 3F (Naniwa-ku), west side of Namba Hatch, across from Tominaga Hospital — near JR Namba',
    cuisine: 'Creative izakaya plates for sake, with seasonal fish and vegetables from the central wholesale market and Kawachi duck from Matsubara (Tabelog) · Kawachi duck roast tataki ¥1,450; shrimp miso mayo ¥850; pork-belly chashu with a soft-boiled egg ¥1,100 (June 2026); raw duck with figs and prosciutto (September 2026); strawberry salad with duck (May 2026) · crispy potato salad with new burdock and truffle; yellowtail sashimi with homemade sesame-miso sauce; cream cheese with fuki-no-to miso; rare salmon with shiba-zuke tartar; charcoal-grilled manganji peppers; grilled sea-urchin rice ball to finish (May 2026) · fried chicken neck; sweet potato with brown-sugar butter (July 2026); thick ham cutlet (August 2026) · sake from around Japan, chosen yourself from the fridge and poured by the staff with soft water on the side (May 2026); shochu, wine, craft beer and fruit liqueurs (Tabelog)',
    website: null, gmaps: gm('SAKE NERD 幸町'), menu_url: null,
    notes: "[Izakaya · Namba Hatch, a glass-walled sake bar with Kawachi duck] Up the stairs to the third floor by Namba Hatch, a glass-walled room with a long counter, popular with couples, where you pick your sake from the fridge and the staff pour it with soft water on the side. The food is creative and made for drinking: Kawachi duck roast tataki, truffle potato salad, shrimp miso mayo, pork-belly chashu with a soft egg and a grilled sea-urchin rice ball to finish. Diners in 2026 love the food and the mood; several find it pricey, one found the owner a little intimidating, and there is one restroom and no elevator. Open evenings to midnight, from 15:00 at weekends.",
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: creative dishes made to pair with drink, using seasonal fish and vegetables from the central wholesale market and Kawachi duck from Matsubara; sake, shochu and fruit liqueurs from across Japan; a room walled in floor-to-ceiling glass; opened 1 July 2021.',
      philosophy: 'Creative dishes crafted to pair with drinks, enjoyed with good friends (Tabelog).', specialty: 'Kawachi duck roast tataki; truffle potato salad; sake.',
      anecdotes: [
        { text: '"I came here for the Japanese sake, and you can choose from the fridge yourself. Just hand it to the staff, and they\'ll pour it into your glass." — May 2026, finishing with a grilled sea-urchin rice ball.', source: R + 'B527369457/' },
        { text: '"I never expected that raw duck meat would pair so well with figs and prosciutto! It was surprisingly delicious!" — September 2026.', source: R + 'B536512613/' },
        { text: '"While the prices for food and drinks are somewhat on the higher side, I wouldn\'t say it\'s the best value for money, but everything I\'ve tried has been delicious!" — September 2026, a second visit.', source: R + 'B532666487/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): SAKE NERD (サケナード)、居酒屋・創作料理・日本酒バー、浪速区幸町1-2-8 82minatomachi 3F、JR Namba 駅から215m、Namba Hatch の西側、平日・祝前日・祝後日 17:00〜24:00、土日祝 15:00〜24:00 (L.O.料理23:00・ドリンク23:30)、不定休 (Instagram で告知)、週末の混雑時は2時間制、5品と日本酒1杯のコース3,100円、7品と1杯のコース4,000円、カード・電子マネー・QR可、29席 (カウンター17、大テーブル11)、禁煙、無料Wi-Fi、英語・中国語 (簡体字) メニュー、2021年7月1日オープン、中央卸売市場の旬の魚と野菜、松原の河内鴨、全国の日本酒・焼酎・果実酒、全面ガラス張りの空間。口コミ(2026年4月〜10月): 河内鴨のローストたたき1,450円、エビ味噌マヨ850円、豚バラチャーシューと半熟卵1,100円、お通し450円、トリュフのポテトサラダ、ウニの焼きおにぎり、日本酒は冷蔵庫から自分で選ぶ、水を添える、3階でエレベーターなし、値段は高めという声。',
      confidence: 'medium', sources: [TB, R + 'B468553145/', R + 'B525997859/', R + 'B527369457/', R + 'B527885051/', R + 'B528454897/', R + 'B529072791/', R + 'B529614075/', R + 'B531536892/', R + 'B532666487/', R + 'B533899668/', R + 'B534657170/', R + 'B536512613/'] },
    cultural_comfort: { level: 'english', note: 'English and Simplified Chinese menus and a digital menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区幸町1-2-8 82minatomachi 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区幸町一丁目2番8号 (go) 10m; same building as osaka_micasadeco_cafe_namba (2.7 m apart), so set 5 m south of it; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529614075/', TB],
    price_note: 'Prices from a June 2026 review (as reported) and the Tabelog courses (read November 2026).', last_checked: TODAY, items: [
      it('', '', 'Kawachi duck roast tataki', '¥1,450', 'Duck', 'ask', 'no', 'June 2026.', 'duck_tataki'),
      it('', '', 'Shrimp miso mayo', '¥850', 'Seafood', 'ask', 'no', 'June 2026.', 'shrimp_mayo'),
      it('', '', 'Pork-belly chashu with soft-boiled egg', '¥1,100', 'Meat', 'ask', 'no', 'June 2026.', 'chashu'),
      it('', '', 'Five popular dishes and a glass of sake', '¥3,100', 'Courses', 'ask', 'no', 'Tabelog.', 'course5'),
      it('', '', 'Seven popular dishes and a glass of sake', '¥4,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course7'),
    ] }, {
    cuisine: '中央卸売市場の旬の魚と野菜、松原の河内鴨を使う、お酒に合う創作の一品 (食べログ)・河内鴨のローストたたき1,450円、エビ味噌マヨ850円、豚バラチャーシューと半熟卵1,100円 (2026年6月)、生の鴨といちじくと生ハム (2026年9月)、いちごのサラダと鴨 (2026年5月)・新ごぼうとトリュフのさくさくポテトサラダ、自家製ごま味噌だれのぶりの刺身、ふきのとう味噌のクリームチーズ、柴漬けタルタルのレアサーモン、万願寺とうがらしの炭火焼き、締めのウニの焼きおにぎり (2026年5月)・せせりの唐揚げ、黒糖バターのさつまいも (2026年7月)、厚切りのハムカツ (2026年8月)・全国の日本酒は冷蔵庫から自分で選び、スタッフが注いで水を添える (2026年5月)。焼酎、ワイン、クラフトビール、果実酒 (食べログ)',
    neighborhood: '浪速区幸町1-2-8 82minatomachi 3F、Namba Hatch の西側。JR Namba 駅の近く',
    gf_detail: '要確認。グルテンの情報なし。鴨のたたき、刺身、とうがらしの焼き物から確認を。ハムカツ、せせりの唐揚げ、味噌や醤油のタレは中身が書かれていない。',
    vegan_detail: 'ヴィーガンではありません。鴨、豚、魚、エビの料理で、野菜は万願寺とうがらしの焼き物など少し (2026年5月)。',
    notes: '[居酒屋・Namba Hatch、ガラス張りの日本酒バーと河内鴨] Namba Hatch のそば、階段で3階に上がった先のガラス張りの店で、長いカウンターはカップルに人気。日本酒は冷蔵庫から自分で選び、スタッフが水を添えて注ぐ。料理はお酒に合う創作で、河内鴨のローストたたき、トリュフのポテトサラダ、エビ味噌マヨ、半熟卵の豚バラチャーシュー、締めにウニの焼きおにぎり。2026年の口コミでは料理と雰囲気が好評で、値段が高めという声がいくつか、店主が少し怖いという声も。トイレは1つ、エレベーターなし。夜は12時まで、週末は15時から。',
  });
}

// ================================================================ オオサカチャオメン 難波千日前
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144566/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '23:00']); const B = day(['12:00', '23:00']);
  put({
    id: 'osaka_oosaka_chaomen_sennichimae', name: 'オオサカチャオメン 難波千日前 (oosaka chaomen Nanba sennichimae)', category: 'OMNI',
    lat: 34.664825, lng: 135.504092, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The chaomen noodles, shumai, xiaolongbao and dumplings are wheat-based; steamed chicken with ginger-scallion sauce and steamed cabbage with shrimp sauce are where to ask, as the sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese dishes of pork, chicken and seafood; even the steamed cabbage comes with a shrimp sauce (September 2026).',
    hours_raw: 'Mon–Thu and the days before and after a holiday 17:00–23:00; Fri, Sat, Sun and holidays 12:00–23:00 (last food order 22:30) (Tabelog). Reservations; courses with two-hour all-you-can-drink ¥4,500 (nine dishes) or ¥5,000 (eleven, reduced from ¥6,000), or food-only ¥3,500; shumai refills ¥100 on courses (Tabelog). A complimentary seaweed appetizer, refillable (August 2026). Order by smartphone (August 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 60 seats over three floors with a counter; whole floors for 10–30 or more; private hire for 20–50; non-smoking (Tabelog; 2026). Opened 7 December 2024 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 3-12, right behind Namba Grand Kagetsu (NGK) — 3 min from Namba Stn (Nankai)',
    cuisine: 'Chinese tavern of dim sum, steamed dishes and drinks (Tabelog) · the signature chaomen: very thin noodles steamed, then pan-fried crisp on one side over a generous thick filling, served with the staff\'s advice on how to eat it (August–September 2026) · juicy meat shumai, xiaolongbao, shrimp dumplings, a three-kind dim sum assortment (Tabelog; 2026) · steamed spare ribs with black bean sauce; steamed chicken with scallion-ginger sauce; homemade mapo tofu; Shaoxing-wine chicken; century egg and potato salad with shrimp chips; crisp fried chicken thigh (Tabelog) · steamed cabbage with homemade shrimp sauce; whelk in pepper sauce; tuna kimchi; tom yum vermicelli; stir-fried seaweed; pickled mustard greens (August–September 2026) · original sours made to pair with food, Shaoxing wine, tea highballs (Tabelog)',
    website: null, gmaps: gm('オオサカチャオメン 難波千日前'), menu_url: null,
    notes: "[Chinese · Sennichimae, crisp chaomen behind NGK] A lively three-floor Chinese tavern opened in late 2024 right behind Namba Grand Kagetsu, made for drinking. The dish in the name is chaomen, a nest of very thin noodles steamed and fried crisp on one side over a thick, savory filling; the staff show you how to eat it. Add juicy shumai, xiaolongbao, steamed chicken with ginger sauce or steamed cabbage with homemade shrimp sauce, plus original sours; a refillable seaweed appetizer comes first. Courses with two hours of drinks start at ¥4,500. Diners in 2026 were almost all delighted, several singling out warm, attentive service. Lunch from noon Friday to Sunday; evenings otherwise.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a Chinese bar whose specialties are chaomen and shumai, with dim sum, steamed dishes and homemade mapo tofu; three floors that can be booked whole; weekend lunch for daytime drinking; opened 7 December 2024. A September 2026 diner calls it Taiwanese. An August 2026 diner praises staff who offered a last order and handled overseas guests in fluent English.',
      philosophy: null, specialty: 'Chaomen; shumai; steamed dishes.',
      anecdotes: [
        { text: '"The extremely thin noodles are steamed and pan-fried on one side until crispy, with a generous filling of ingredients underneath." — August 2026, with xiaolongbao.', source: R + 'B533445149/' },
        { text: '"Holding back my urge to mix it all up, I followed their instructions, and it turned out to be crispy on the outside and chewy on the inside" — September 2026.', source: R + 'B536781500/' },
        { text: '"The third staff member, who joined midway, was great at handling foreign customers with a smile and fluent English." — August 2026, a solo all-you-can-drink evening.', source: R + 'B533623290/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): オオサカチャオメン 難波千日前、居酒屋・飲茶・中華料理、名物はチャオメンと焼売、難波千日前3-12、Nankai Namba 駅から徒歩3分、NGK の裏、月〜木・祝前日・祝後日 17:00〜23:00、金土日祝 12:00〜23:00 (L.O.料理22:30)、予約可、2時間飲み放題つきのコース4,500円 (9品)・5,000円 (11品)、料理のみ3,500円、コースは焼売のおかわり100円、カード・PayPay可、60席、3フロア、貸切20〜50名、禁煙、2024年12月7日オープン、点心、蒸し料理、自家製の麻婆豆腐、料理に合うオリジナルサワー。口コミ(2026年8月〜9月): 細い麺を蒸して片面をかりっと焼いたチャオメン、焼売、小籠包、蒸し鶏のしょうがソース、自家製エビソースの蒸しキャベツ、ツブ貝の胡椒ソース、マグロキムチ、無料のわかめのお通し (おかわり可)、スマホで注文、接客がよいという声。',
      confidence: 'medium', sources: [TB, R + 'B533445149/', R + 'B533512539/', R + 'B533623290/', R + 'B533737623/', R + 'B533848102/', R + 'B534412973/', R + 'B534597236/', R + 'B535005408/', R + 'B536239961/', R + 'B536470733/', R + 'B536781500/', R + 'B537319337/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A staff member handled overseas guests in fluent English (August 2026); smartphone ordering. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前3-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前3番12号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (read November 2026), tax included; no à la carte prices found.', last_checked: TODAY, items: [
      it('', 'Chao Men', 'Chaomen (crisp thin noodles over a thick filling)', '', 'Signatures', 'no', 'no', '2026 reviews.', 'chaomen'),
      it('', '', 'Meat shumai', '', 'Dim sum', 'no', 'no', '2026 reviews.', 'shumai'),
      it('', '', 'Course, nine dishes with two-hour all-you-can-drink', '¥4,500', 'Courses', 'no', 'no', 'Tabelog.', 'course9'),
      it('', '', 'Course, eleven dishes with two-hour all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'Tabelog; reduced from ¥6,000.', 'course11'),
      it('', '', 'Course, nine dishes, food only', '¥3,500', 'Courses', 'no', 'no', 'Tabelog.', 'course_food'),
    ] }, {
    cuisine: '点心、蒸し料理とお酒の中華酒場 (食べログ)・名物のチャオメンは、細い麺を蒸して片面をかりっと焼き、下にとろみのある具がたっぷり。スタッフが食べ方を教えてくれる (2026年8〜9月)・肉汁たっぷりの焼売、小籠包、エビ餃子、点心3種盛り (食べログ、2026年)・スペアリブの豆鼓蒸し、蒸し鶏のねぎしょうがソース、自家製の麻婆豆腐、紹興酒風味の鶏、ピータンと卵のポテトサラダとエビせん、鶏ももの唐揚げ (食べログ)・自家製エビソースの蒸しキャベツ、ツブ貝の胡椒ソース、マグロキムチ、トムヤムの春雨、わかめ炒め、からし菜の漬物 (2026年8〜9月)・料理に合うオリジナルサワー、紹興酒、お茶のハイボール (食べログ)',
    neighborhood: '難波千日前3-12、Namba Grand Kagetsu (NGK) のすぐ裏。Nankai Namba 駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。チャオメンの麺、焼売、小籠包、餃子は小麦。蒸し鶏のしょうがソースやエビソースの蒸しキャベツから確認を。ソースの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、魚介の中華で、蒸しキャベツにもエビのソース (2026年9月)。',
    notes: '[中華・千日前、NGK の裏のかりかりチャオメン] 2024年末に Namba Grand Kagetsu のすぐ裏にできた、3フロアのにぎやかな中華酒場。店名の料理チャオメンは、細い麺を蒸して片面をかりっと焼き、とろみのある具にのせたもので、スタッフが食べ方を教えてくれる。肉汁たっぷりの焼売、小籠包、しょうがソースの蒸し鶏、自家製エビソースの蒸しキャベツ、オリジナルサワーも。最初におかわりできるわかめのお通し。2時間飲み放題のコースは4,500円から。2026年の口コミはほぼ絶賛で、温かく気の利く接客をほめる声が多い。金〜日は昼12時から、ほかは夜。',
  });
}

// ================================================================ 楽洛亭 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27004130/'; const R = TB + 'dtlrvwlst/'; const NB = 'https://r.gnavi.co.jp/n11u50f70000/';
  const H = day(['11:00', '22:30']);
  put({
    id: 'osaka_rakurakutei_honten_namba', name: '楽洛亭 本店 (Rakuraku Tei Honten)', category: 'OMNI',
    lat: 34.665054, lng: 135.500006, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The meat is marinated in the house sauce (October 2026), which is not described; salted tongue and unmarinated cuts are where to ask. Chijimi and cold noodles are wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant.',
    hours_raw: 'Daily 11:00–22:30 (last order 22:00); closed 30 December–2 January (Tabelog). Reservations: online bookings 11:00–13:45 on weekdays are for à la carte only, set lunches by phone; the second floor seats 30–40 for parties; two hours when busy (Tabelog). Lunch sets come with one free rice refill (August and October 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 68 seats: a counter on the first floor, tables on the second, where children must sit (Tabelog; August 2026). Designated smoking area (Tabelog); ashtrays on the tables and a smoky room (August 2026). Charcoal grills at each table; the hoods struggle, so clothes take on the smell (October 2026). English and Simplified Chinese menus with photos; takeaway (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-4-6, across from Marui and in front of Takashimaya — exits 9 and 10 of Namba Stn (Midosuji Line), 1 min from Nankai Namba Stn',
    cuisine: 'Yakiniku over table charcoal, built around a house "secret sauce", fresh and additive-free, with fresh wagyu and horumon prepared by hand (Tabelog) · the sauce, heavy with chopped green onion, spiced with sansho, and also used to marinate the meat (September–October 2026) · outside skirt, the house favorite (2024–2026); salted tongue; kalbi; loin; tsurami; mino; beef intestine; Angus beef with garlic and salt; three kinds of special wagyu (2026) · six-cut assorted platter, 300 g (October 2026) · Volume Lunch A, 160 g of belly and outside skirt with salad or kimchi and bean sprouts, rice and soup, ¥1,430; Volume Lunch B, 220 g including outside skirt and premium mino, ¥2,200 (October 2026) · bean-sprout namul, kimchi, yukhoe, gukbap, chijimi, cold noodles, pig\'s trotters (2026) · draft beer; a medium bottle ¥605 (October 2026)',
    website: null, gmaps: gm('楽洛亭 本店 難波'), menu_url: null,
    notes: "[Yakiniku · Namba, a 70-year-old charcoal yakiniku] A long-running yakiniku by Nankai Namba, across from Marui, with a Showa-style counter downstairs where people grill alone over charcoal and tables upstairs. Everything turns on the house sauce, thick with green onion and sansho; regulars come for the outside skirt, and the Volume Lunches (¥1,430 for 160 g, ¥2,200 for 220 g) come with a rice refill. Expect smoke: ashtrays on the tables and clothes that smell of grilled meat. Diners in 2026 praise the sauce and the lunch value; others found the marinade too strong, the cold noodles weak, or the meat dear for its quality. Open daily from 11:00.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a yakiniku restaurant in business for over 70 years, built on its secret sauce, made fresh without additives, with fresh wagyu and horumon prepared in-house by skilled staff. An October 2026 diner puts its history at 60–70 years and describes a first-floor counter in the style of a Showa tavern. A Nipponbashi branch is listed on Gnavi.',
      philosophy: 'The secret sauce comes first, made fresh and additive-free to bring out the meat (Tabelog).', specialty: 'Outside skirt with the house sauce.',
      anecdotes: [
        { text: '"This restaurant is known for its unique sauce, which is packed with chopped green onions." — September 2026, a third visit, outside skirt.', source: R + 'B111145565/' },
        { text: '"for those who do drink during lunch, the staff amusingly asks, \'When would you like your rice?\'—a service reminiscent of a ryokan." — October 2026, Volume Lunch B ¥2,200.', source: R + 'B537769229/' },
        { text: '"the pricing seemed a bit steep compared to the quality and satisfaction of the meat itself." — October 2026, the six-cut platter.', source: R + 'B537968500/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 楽洛亭 本店 (ラクラクテイ)、焼肉、難波4-4-6、Midosuji Line Namba 駅9・10番出口、毎日11:00〜22:30 (L.O.22:00)、12月30日〜1月2日休み、予約可 (平日11:00〜13:45のネット予約は単品のみ、定食は電話で)、2階は30〜40名で貸切可、混雑時は2時間制、カード可、電子マネー・QR不可、68席、カウンター、子ども連れは2階のみ、分煙、英語・中国語 (簡体字) の写真つきメニュー、テイクアウト、創業70年以上、無添加の生ダレの秘伝のタレ、新鮮な和牛とホルモンを手仕込み。口コミ(2026年8月〜10月): ねぎたっぷりのタレ、山椒、外ハラミ、塩タン、ボリュームランチA 160g 1,430円、ボリュームランチB 220g 2,200円、ご飯のおかわり1回、6種盛り300g、七輪の炭火、煙が多く服ににおいがつく、卓上に灰皿、Marui の向かい、味付けが濃い、冷麺がいまひとつ、肉の質のわりに高いという声も。',
      confidence: 'medium', sources: [TB, NB, R + 'B111145565/', R + 'B501001122/', R + 'B532916788/', R + 'B533551517/', R + 'B534797448/', R + 'B535253893/', R + 'B536895233/', R + 'B537044907/', R + 'B537769229/', R + 'B537968500/', R + 'B538173609/', R + 'B538335009/'] },
    cultural_comfort: { level: 'english', note: 'English and Simplified Chinese menus with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-4-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目4番6号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534797448/', R + 'B537769229/', R + 'B536895233/'],
    price_note: 'Prices from August–October 2026 reviews (as reported); no menu online.', last_checked: TODAY, items: [
      it('', '', 'Volume Lunch A (160 g, belly and outside skirt)', '¥1,430', 'Lunch', 'ask', 'no', 'August and October 2026.', 'lunch_a'),
      it('', '', 'Volume Lunch B (220 g)', '¥2,200', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_b'),
      it('', '', 'Outside skirt', '', 'Beef', 'ask', 'no', '2024–2026.', 'harami'),
      it('', '', 'Six-cut assorted platter (300 g)', '', 'Beef', 'ask', 'no', 'October 2026.', 'platter'),
      it('', '', 'Beer, medium bottle', '¥605', 'Drinks', 'no', 'ask', 'October 2026.', 'beer'),
    ] }, {
    cuisine: '卓上の炭火で焼く焼肉で、無添加の生ダレの秘伝のタレと、新鮮な和牛とホルモンの手仕込みが軸 (食べログ)・タレは刻みねぎたっぷりで山椒が効き、肉の下味にも使う (2026年9〜10月)・常連の定番の外ハラミ (2024〜2026年)、塩タン、カルビ、ロース、ツラミ、ミノ、牛の腸、ニンニクと塩のアンガス牛、特選和牛3種 (2026年)・6種盛り300g (2026年10月)・ボリュームランチAは豚バラと外ハラミ160gにサラダかキムチともやし、ご飯とスープで1,430円。ボリュームランチBは外ハラミや上ミノなど220gで2,200円 (2026年10月)・もやしのナムル、キムチ、ユッケ、クッパ、チヂミ、冷麺、豚足 (2026年)・生ビール、中瓶605円 (2026年10月)',
    neighborhood: '難波4-4-6、Marui の向かいで Takashimaya の前。Namba 駅 (Midosuji Line) 9・10番出口、Nankai Namba 駅から1分',
    gf_detail: '要確認。グルテンの情報なし。肉は店のタレで下味をつける (2026年10月) が、タレの中身は書かれていない。塩タンや下味のない部位から確認を。チヂミと冷麺は小麦。',
    vegan_detail: 'ヴィーガンではありません。焼肉店。',
    notes: '[焼肉・難波、70年続く炭火焼肉] Nankai Namba のそば、Marui の向かいの老舗の焼肉店。1階は昭和の酒場のようなカウンターで1人で炭火を囲む客も多く、2階はテーブル。主役は刻みねぎと山椒の効いた店のタレで、常連の目当ては外ハラミ。お得なボリュームランチ (160gで1,430円、220gで2,200円) はご飯のおかわりつき。煙が多く、卓上に灰皿、服に焼肉のにおいがつく。2026年の口コミではタレと昼の安さが好評で、下味が濃い、冷麺がいまひとつ、肉の質のわりに高いという声も。毎日11時から。',
  });
}

save();
