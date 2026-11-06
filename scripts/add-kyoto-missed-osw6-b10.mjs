// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 10.
//   + ナプレ 京都祇園店 Napule Kyoto Gion (wood-fired Neapolitan pizza on Kawabata-dori; 4-shop group)
//   + 鮨 泰蔵 Sushi Taizo (8-seat sushi counter by the Takase River at Matsubara)
//   + 居酒屋 ニエフ Izakaya Niefu (14-seat seafood izakaya upstairs at Shijo Omiya; Izakaya WEST Tabelog 100 2026)
//   + 和栗専門 紗織 Waguri Senmon Saori (1 mm-strand chestnut Mont Blanc on Kiyamachi; Sweets WEST Tabelog 100 2026)
//   - skip 26038024 銀之塔 祇園店, 26023312 ザ・ロビーラウンジ and 26023294 ラ・ロカンダ (Ritz-Carlton Kyoto) — see below
//   Taken on 2026-11-05: `next core 200` gave ナプレ 26040184, 銀之塔 26038024 (skipped), 泰蔵 26023474;
//   `next notable 200` gave The Lobby Lounge 26023312 and La Locanda 26023294 (both skipped), ニエフ 26040022, 紗織 26033014.
//   None of the four is in data/kyoto.json: grep by name (ナプレ/Napule, 泰蔵/Taizo — only ギョーザ泰三, a different shop —,
//   ニエフ/Niefu, 紗織/Saori) and address (弁財天町4-4, 美濃屋町174, 壬生坊城町47, 和泉屋町170) found none. Neighbour:
//   kyoto_kawa_cafe (address_ja "京都府京都市下京区木屋町通松原上ル美濃屋町176-1") is 8 m from 泰蔵.
//   Group check: ナプレ's own Tabelog text names four shops — Minami Aoyama, Tokyo Midtown, Yokohama and Kyoto Gion (run
//   by 株式会社TERRAMIA) — none in data, so a small group: drafted.
//   Greg's 2026-11-05 rulings: no shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038024', 'same-concept branch of a brand already in data: per its own Tabelog text, 銀之塔 祇園店 is the only official licensee of the Higashi-Ginza stew house 銀之塔 (founded 1955), which is in data/tokyo.json as tokyo_gin_no_tou.');
skip('26023312', 'covered by an existing record / brand concept: ザ・ロビーラウンジ of The Ritz-Carlton, Kyoto — the hotel is already in data/kyoto.json as vm_the_ritz_carlton_kyoto, whose record covers its dining; "The Lobby Lounge" is a Ritz-Carlton brand concept. Flagged for the integrator to confirm.');
skip('26023294', 'covered by an existing record: ラ・ロカンダ is The Ritz-Carlton, Kyoto’s Italian restaurant, already described in vm_the_ritz_carlton_kyoto ("Its dining portfolio spans an Italian restaurant (La Locanda…"). Flagged for the integrator to confirm.');

// ================================================================ ナプレ 京都祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040184/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '22:30']);
  put({
    id: 'kyoto_napule_gion', name: 'ナプレ 京都祇園店 (Napule Kyoto Gion)', category: 'OMNI',
    lat: 35.005449, lng: 135.772488, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog’s feature list ticks gluten-free options, but no gluten-free dish is described; the menu is wheat pizza, pasta, gnocchi and fritto (Tabelog; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog’s feature list ticks vegan and vegetarian options, but no vegan dish is described; most pizzas carry mozzarella, ricotta or pork (Tabelog; 2025–26 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00), dinner 17:30–22:30 (last orders food 21:30, drinks 22:00); closed Wednesday (Tabelog). Seat-only reservations, 120 minutes (last order at 90), no seat requests (Tabelog); walk-ins welcomed when space allows (December 2025), a queue at night (October 2026). 10% service charge at dinner (from 2 June 2025, Tabelog). Tabelog also ticks halal options; not verified. 40 seats with counter and sofas; non-smoking; cards, IC cards, e-money and QR payments; free Wi-Fi (Tabelog). On Kawabata-dori north of Shijo, by the Kamo River; 3 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata-dori north of Shijo, by the Kamo River — 3 min from Gion-Shijo Stn',
    cuisine: 'Neapolitan pizzeria and trattoria with a Stefano Ferrara wood-fired oven from Naples, the fourth shop after Minami Aoyama, Tokyo Midtown and Yokohama (Tabelog, shop text) · pizzas: Margherita, Quattro Formaggi with honey, Chicory (bacon or pork-belly confit, cheese, spinach, onion; the reviewers’ favourite) (2025–26 reviews) · seasonal vegetable fritto, carpaccio, prosciutto and white-asparagus risotto, gnocchi with organic lemon cream, tagliatelle Bolognese, panna cotta · Italian wines; chef’s omakase course (Tabelog; 2025–26 reviews)',
    website: null, gmaps: gm('ナプレ 京都祇園店'), menu_url: TB + 'dtlmenu/',
    notes: "[Pizzeria · Gion, Neapolitan pizza by the Kamo River] The Kyoto branch of Tokyo's Napule, a bright, busy room on Kawabata-dori where pizzas come out of a wood-fired oven built in Naples. Reviewers single out the Chicory — cheese, spinach, onion and bacon — along with a classic Margherita and a honey-drizzled Quattro Formaggi, plus seasonal vegetable fritto and a good panna cotta. Lively and full of visitors from abroad; one May 2026 diner found it too busy to relax. Dinner adds 10% service. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Restaurant of the TERRAMIA group (no chef named)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): the fourth Napule after Minami Aoyama, Tokyo Midtown and Yokohama, baking Neapolitan pizza in a Stefano Ferrara wood-fired oven imported from Naples and using ingredients from Italian producers; Italians living in Japan are said to praise it. Run by a company (a corporate invoice registrant, Tabelog). Reviewers in 2026 note many visitors from Europe, America and elsewhere, and some foreign staff whose Japanese was limited (May 2026).',
      philosophy: null, specialty: 'Neapolitan pizza; seasonal fritto.',
      anecdotes: [
        { text: '"You, who are reading this review! Think only about eating the pizza called "Chicory" right now!" — December 2025.', source: R + 'B519194093/' },
        { text: 'A January 2026 diner who came for the decorated surprise plate seen on the official account received a plain plate instead and was disappointed.', source: R + 'B522576629/' },
        { text: 'A May 2026 diner found the room too crowded with foreign visitors to relax and was told some dishes would take a long time.', source: R + 'B529349083/' },
        { text: 'An October 2026 lunch for one came to just under ¥9,000 with four desserts and coffee to share; the diner wished lunch desserts and coffee were cheaper.', source: R + 'B508676365/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、東山区川端通四条上る弁財天町4-4 1F、祇園四条駅から徒歩3分、11:30〜14:30 (L.O. 14:00)・17:30〜22:30 (L.O. 料理21:30、ドリンク22:00)、水曜休み、席のみの予約 (120分制、L.O. は90分、席の指定不可)、ディナーのみサービス料10% (2025年6月2日〜)、40席、禁煙、カード・電子マネー・QR 可、ヴィーガン・ベジタリアン・グルテンフリー・ハラールの対応ありと掲載、南青山・東京ミッドタウン・横浜に続く4店目、ナポリから輸入した Stefano Ferrara の薪窯。口コミ (2025年12月〜2026年10月、英語): Chicory、マルゲリータ、クアトロ・フォルマッジと蜂蜜、季節の野菜のフリット、カルパッチョ、リゾット、レモンクリームのニョッキ、ボロネーゼ、パンナコッタ、海外の客が多い、サプライズプレートへの不満。',
      confidence: 'medium', sources: [TB, R + 'B482606633/', R + 'B508676365/', R + 'B518734906/', R + 'B519194093/', R + 'B521428793/', R + 'B521566508/', R + 'B522576629/', R + 'B526152306/', R + 'B526424900/', R + 'B529349083/', R + 'B529607372/', R + 'B538084586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many international guests and some non-Japanese staff (2026 reviews); cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区川端通四条上る弁財天町4-4 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop (maintenance closure 27–28 October noted); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005449, 135.772488); cross-checked: GSI 京都府京都市東山区弁財天町4番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B518734906/'],
    price_note: 'No price list read; dinner adds 10% service (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Pizza Chicory (bacon or pork belly, cheese, spinach, onion)', '', 'Pizza', 'no', 'no', 'December 2025–January 2026.', 'pizza_chicory'),
      it('', '', 'Pizza Margherita', '', 'Pizza', 'no', 'ask', '2025–26.', 'pizza_margherita'),
      it('', '', 'Quattro Formaggi with honey', '', 'Pizza', 'no', 'no', '2025–26.', 'quattro_formaggi'),
      it('', '', 'Seasonal vegetable fritto', '', 'Antipasti', 'no', 'ask', 'October 2026.', 'fritto'),
    ] }, {
    cuisine: 'ナポリから輸入した Stefano Ferrara の薪窯のナポリピッツァとトラットリア。南青山、東京ミッドタウン、横浜に続く4店目 (食べログの店の紹介)・ピッツァ: マルゲリータ、蜂蜜のクアトロ・フォルマッジ、Chicory (ベーコンや豚バラのコンフィ、チーズ、ほうれん草、玉ねぎ、口コミで一番人気) (2025〜2026年の口コミ)・季節の野菜のフリット、カルパッチョ、生ハムとホワイトアスパラガスのリゾット、有機レモンのクリームのニョッキ、タリアテッレのボロネーゼ、パンナコッタ・イタリアワイン、シェフのおまかせコース (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条の北の川端通、鴨川沿い。祇園四条駅から徒歩3分',
    gf_detail: '要確認。食べログの設備欄にはグルテンフリー対応とあるが、グルテンフリーの料理は書かれておらず、ピッツァ、パスタ、ニョッキ、フリットと小麦が中心 (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログの設備欄にはヴィーガン・ベジタリアン対応とあるが、ヴィーガンの料理は書かれておらず、多くのピッツァにモッツァレラ、リコッタ、豚肉 (食べログ、2025〜2026年の口コミ)。',
    notes: '[ピッツェリア・祇園、鴨川沿いのナポリピッツァ] 東京のナプレの京都店。川端通の明るくにぎやかな店で、ナポリ製の薪窯でピッツァを焼く。口コミで評判なのはチーズ、ほうれん草、玉ねぎ、ベーコンの Chicory、定番のマルゲリータ、蜂蜜をかけるクアトロ・フォルマッジ、季節の野菜のフリット、パンナコッタ。にぎやかで海外の客が多く、2026年5月の客は落ち着かなかったと書く。ディナーはサービス料10％。水曜休み。',
  });
}

// ================================================================ 鮨 泰蔵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023474/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '21:00']); const E = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_sushi_taizo', name: '鮨 泰蔵 (Sushi Taizo)', category: 'OMNI',
    lat: 34.999809, lng: 135.768836, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi courses with soy sauce, simmered octopus and chawanmushi; no gluten information (2016–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi and seafood courses (2016–25 reviews).',
    hours_raw: 'Dinner 18:00–21:00 (last order 20:30) Monday, Tuesday, Thursday, Friday; Saturday, Sunday and holidays also lunch 12:00–14:00; closed Wednesday (Tabelog). Reservations accepted; a 2023 diner was allowed to bring a baby after asking ahead. 8 counter seats, with a counter in a private room for 4 (Tabelog; January 2022). Non-smoking, with a smoking spot outside; cards (Tabelog). On the Takase River near Kiyamachi and Matsubara, 2 min from the Kawaramachi-Matsubara bus stop, about 10 min from Kyoto Kawaramachi Stn (Tabelog; 2022–25 reviews).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi near Matsubara, by the Takase River — 10 min from Kyoto Kawaramachi Stn',
    cuisine: 'Small Edomae sushi counter with seasonal fish, appetizers and unusual sakes (2016–25 reviews) · omakase ¥15,000 (June 2025); lunch courses about ¥6,000–7,000 (2022–23) · dishes have included hairy crab, firefly squid, simmered octopus, moroko and homemade karasumi, aji, squid, kohada, sea urchin, brown-sugar ice cream (March 2022) · New Year lunch with small osechi dishes (January 2022)',
    website: null, gmaps: gm('鮨 泰蔵 京都 木屋町'), menu_url: null,
    notes: "[Sushi · Kiyamachi-Matsubara, a quiet counter on the Takase] An 8-seat sushi counter on the Takase River near Matsubara, plus a little private room with its own counter. Earlier reviews describe a couple running it, a friendly, talkative chef, seasonal Edomae nigiri, homemade karasumi and a good list of unusual sakes; the omakase was ¥15,000 in 2025, with lunch courses on weekends. Book ahead. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Per reviews: run by a couple (April 2016), with a friendly head chef and lady of the house (November 2018); in business for over eight years by March 2022; a solo diner in June 2025 enjoyed talking with the friendly chef.',
      philosophy: null, specialty: 'Omakase Edomae sushi.',
      anecdotes: [
        { text: 'A July 2023 diner booked lunch with a 5-month-old baby after checking with the shop, and thanked staff and other guests for their understanding.', source: R + 'B444712991/' },
        { text: '"Since I was traveling alone, I enjoyed engaging conversations with the friendly chef" — June 2025.', source: R + 'B509296078/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、下京区美濃屋町174-1 プレゼンスビル 1F、河原町松原バス停から徒歩約2分、京都河原町駅から約10分、月火木金 18:00〜21:00 (L.O. 20:30)、土日祝 12:00〜14:00・18:00〜21:00、水曜休み、予約可、カウンター8席、個室カウンター4名、禁煙 (店外に喫煙所)、カード可。口コミ (2016〜2025年、英語): 夫婦で営む (2016年)、江戸前の寿司、おまかせ15,000円 (2025年6月)、昼のコース約6,000〜7,000円 (2022〜2023年)、毛蟹、ホタルイカ、蛸の煮物、もろこと自家製からすみ、高瀬川沿い、気さくな大将。',
      confidence: 'low', sources: [TB, R + 'B192228050/', R + 'B444712991/', R + 'B447138486/', R + 'B450687044/', R + 'B460514281/', R + 'B468514341/', R + 'B482796821/', R + 'B502806353/', R + 'B509296078/', R + 'B523385057/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; omakase at the counter; the chef chats with guests; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区美濃屋町174-1 プレゼンスビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing with current hours; newest reviews dated June 2025 and February 2026 (the latter without text).' },
    pin_source: `Tabelog ${TB} (34.999809, 135.768836); cross-checked: GSI 京都府京都市下京区美濃屋町174番地 (lot) 48m; 8 m from kyoto_kawa_cafe (美濃屋町176-1); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509296078/', R + 'B444712991/'],
    price_note: 'Prices from June 2025 and 2022–23 reviews; no current price list read.', last_checked: TODAY, items: [
      it('', '', 'Omakase', '¥15,000', 'Course', 'ask', 'no', 'June 2025.', 'omakase'),
      it('', '', 'Lunch course (weekends)', 'about ¥6,000–7,000', 'Course', 'ask', 'no', '2022–23.', 'lunch_course'),
    ] }, {
    cuisine: '季節の魚の江戸前の小さな寿司カウンター、前菜と珍しい日本酒 (2016〜2025年の口コミ)・おまかせ15,000円 (2025年6月)、昼のコース約6,000〜7,000円 (2022〜2023年)・毛蟹、ホタルイカ、蛸の煮物、もろこと自家製からすみ、あじ、いか、こはだ、雲丹、黒糖アイス (2022年3月)・正月の昼は小さなおせち (2022年1月)',
    neighborhood: '松原近くの木屋町、高瀬川沿い。京都河原町駅から徒歩10分',
    gf_detail: '要確認。醤油の江戸前寿司、蛸の煮物、茶碗蒸しのコース。グルテンの情報はない (2016〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司と魚介のコース (2016〜2025年の口コミ)。',
    notes: '[寿司・木屋町松原、高瀬川の静かなカウンター] 松原近くの高瀬川沿いにあるカウンター8席の寿司店。カウンター付きの小さな個室も。以前の口コミでは夫婦で営み、気さくな大将、季節の江戸前の握り、自家製からすみ、珍しい日本酒が評判。2025年はおまかせ15,000円、週末は昼のコースも。予約がおすすめ。水曜休み。',
  });
}

// ================================================================ 居酒屋 ニエフ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26040022/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_izakaya_niefu', name: '居酒屋 ニエフ (Izakaya Niefu)', category: 'OMNI',
    lat: 35.005914, lng: 135.746360, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried fish with homemade tartar, tempura, salt-fried chicken, simmered dishes and somen; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led izakaya with dashi-based dishes (2026 reviews).',
    hours_raw: '17:00–23:00 Tuesday–Saturday; closed Sunday, Monday and on some days in summer and winter (Tabelog). Reservations recommended, also via TableCheck (September 2026); walk-ins sometimes find counter seats late (September 2026). The chef cooks alone, so dishes can take time (July 2026). Portions sized for two, adjusted for three on request (May 2026). 14 seats at an L-shaped counter and two small tables, up a steep wooden staircase; another restaurant is on the ground floor (Tabelog; 2026 reviews). The air conditioning felt weak in July 2026. Non-smoking; cards, e-money and QR (Tabelog). A few minutes north of Shijo-Omiya Stn; the sign is easy to miss (2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North of Shijo-Omiya, 2nd floor — a few minutes from Shijo-Omiya Stn',
    cuisine: 'Seafood-led creative izakaya with Kyoto-style obanzai (2026 reviews) · salt-seared bonito, assorted sashimi (bonito, aji), mehikari, simmered whelk and other clams, mozuku in vinegar · fried aji or sawara with homemade tartar, young-ayu tempura, white-shrimp tempura · salt-fried chicken thighs, jidori neck and lotus root stir-fry · potato salad with nagaimo and smoked daikon, white sesame tofu with figs and grapes, komatsuna and mushroom ohitashi · sudachi somen, jako fried rice · sake; dishes around ¥1,500 each (September 2026)',
    website: null, gmaps: gm('居酒屋 ニエフ 四条大宮'), menu_url: null,
    notes: "[Izakaya · Shijo-Omiya, a 2nd-floor seafood counter] A 14-seat izakaya up a steep wooden staircase north of Shijo-Omiya — the name, reviewers work out, is '2F'. One chef cooks fresh seafood with care: salt-seared bonito, fried aji or sawara with homemade tartar, young-ayu tempura, simmered whelk, plus salt-fried chicken thighs and a smoked-daikon potato salad, with sake. Most dishes are about ¥1,500 and sized for two. Book ahead; dishes can be slow, and one October 2026 diner found the staff unfriendly. Tuesday–Saturday 17:00–23:00.",
    chef_bio: { chef_name: null, roles: ['Chef who runs the kitchen alone (unnamed in the sources)'], origin: null,
      background: 'A July 2026 reviewer notes that the chef runs the kitchen alone, so service takes time; reviewers in May and October 2026 take the name to mean "2F", as the shop is on the second floor above another restaurant. Tabelog Izakaya WEST "Tabelog 100" 2026.',
      philosophy: null, specialty: 'Salt-seared bonito; fried fish with homemade tartar; salt-fried chicken.',
      anecdotes: [
        { text: '"Since the chef is the only one running the kitchen, it takes quite a while for the dishes to be served, but the quality is definitely worth the wait." — July 2026.', source: R + 'B531968577/' },
        { text: 'An October 2026 repeat visitor found most dishes ordinary, the value poor and the staff unfriendly, apart from the mehikari.', source: R + 'B536667484/' },
        { text: '"Since we visited with three, they kindly adjusted our order from two servings to three." — May 2026.', source: R + 'B527985462/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区壬生坊城町47 2F、四条大宮駅から343m、火〜土 17:00〜23:00、日・月休み (夏と冬に不定休)、予約可、14席 (カウンターとテーブル)、禁煙、カード・電子マネー・QR 可、居酒屋 WEST 百名店 2026。口コミ (2026年3〜10月、英語): 2階の店で名前は「2F」から、料理人が一人で調理、かつおの塩たたき、刺身盛り合わせ、めひかり、つぶ貝の煮付け、自家製タルタルのあじフライと鰆フライ、稚鮎の天ぷら、鶏ももの塩唐揚げ、燻製大根と長芋のポテサラ、すだちそうめん、じゃこ炒飯、1品約1,500円、提供は遅め、無愛想だったという声。',
      confidence: 'medium', sources: [TB, R + 'B525253558/', R + 'B527387784/', R + 'B527985462/', R + 'B531968577/', R + 'B532181851/', R + 'B532452210/', R + 'B534532942/', R + 'B535725733/', R + 'B536077796/', R + 'B536205900/', R + 'B536667484/', R + 'B537669587/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (TableCheck); dishes come for two; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生坊城町47 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.005914, 135.746360); cross-checked: GSI 京都府京都市中京区壬生坊城町47番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536077796/'],
    price_note: 'Dishes around ¥1,500 each per a September 2026 review; no price list read.', last_checked: TODAY, items: [
      it('', '', 'Salt-seared bonito', 'about ¥1,500', 'Fish', 'ask', 'no', 'July–August 2026.', 'katsuo_shiotataki'),
      it('', '', 'Fried aji with homemade tartar', 'about ¥1,500', 'Fried', 'no', 'no', '2026.', 'aji_fry'),
      it('', '', 'Salt-fried chicken thighs', 'about ¥1,500', 'Fried', 'ask', 'no', '2026.', 'chicken_karaage'),
      it('', '', 'Potato salad with nagaimo and smoked daikon', 'about ¥1,500', 'Small dishes', 'ask', 'ask', '2026.', 'potato_salad'),
    ] }, {
    cuisine: '魚介中心の創作居酒屋、京風のおばんざいも (2026年の口コミ)・かつおの塩たたき、刺身盛り合わせ (かつお、あじ)、めひかり、つぶ貝などの貝の煮付け、もずく酢・自家製タルタルのあじや鰆のフライ、稚鮎の天ぷら、白海老の天ぷら・鶏ももの塩唐揚げ、地鶏のせせりと蓮根の塩炒め・長芋と燻製大根のポテトサラダ、無花果と葡萄の白胡麻豆腐、小松菜ときのこのおひたし・すだちそうめん、じゃこ炒飯・日本酒。1品約1,500円 (2026年9月)',
    neighborhood: '四条大宮の北、2階。四条大宮駅から数分',
    gf_detail: '要確認。自家製タルタルのフライ、天ぷら、塩唐揚げ、煮物、そうめん。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介中心の居酒屋で、出汁の料理 (2026年の口コミ)。',
    notes: '[居酒屋・四条大宮、2階の魚のカウンター] 四条大宮の北、急な木の階段を上がる14席の居酒屋。名前は「2F」から、と口コミは推測する。料理人が一人で新鮮な魚介を丁寧に料理する。かつおの塩たたき、自家製タルタルのあじや鰆のフライ、稚鮎の天ぷら、つぶ貝の煮付け、鶏ももの塩唐揚げ、燻製大根のポテサラを日本酒と。1品約1,500円で2人前の量。予約がおすすめ。提供は遅めで、2026年10月の客は無愛想だったと書く。火〜土 17時〜23時。',
  });
}

// ================================================================ 和栗専門 紗織
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033014/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_waguri_senmon_saori', name: '和栗専門 紗織 (Waguri Senmon Saori)', category: 'OMNI',
    lat: 35.000143, lng: 135.769169, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The Mont Blanc sits on a baked meringue base, but some versions include sponge cake, and tarts and pies are wheat-based; no ingredient lists are published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chestnut cream with fresh cream and meringue (egg white); fruit parfaits with cream and sorbet (2026 reviews).',
    hours_raw: '10:00–18:00 (last order 17:00) daily; closed irregularly (Tabelog). Numbered tickets are handed out from 9:00 (earlier if a queue forms); they set the order, not a time, and you are messaged when your turn comes; takeaway from 11:00 (Tabelog). Reservations online; by phone for one person or for 10 or more; tables are held for one hour and a booking lapses 15 minutes after the time (Tabelog). Some items sell out depending on the time (Tabelog). 34 seats (6 counter, 28 table) including a 2nd floor overlooking the river; non-smoking; cards, IC cards and PayPay (Tabelog; 2026 reviews). On Kiyamachi-dori north of Matsubara by the Takase River; 5 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-dori north of Matsubara, by the Takase River — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Japanese-chestnut specialist whose Mont Blanc is piped in 1 mm strands in front of you (Tabelog, shop text; 2026 reviews) · Kinshi Mont Blanc "Sa" with Kyotanba chestnuts only, limited to 40 a day, ¥3,080 (September–October 2026) · smaller Mont Blanc "Tsumugi" with a drink ¥1,800 (September 2026) · chestnut mochi ¥1,980 (September 2026) · seasonal fruit parfaits with Mont Blanc (shine muscat and Nagano Purple grapes, Arakawa peach), a chestnut tart and a whole chestnut pie (2026 reviews) · drinks such as cold-brewed sencha; a small cup of dashi as a palate cleanser (September 2026)',
    website: null, gmaps: gm('和栗専門 紗織 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Mont Blanc · Kiyamachi, chestnut threads 1 mm thin] A calm Japanese-chestnut café on Kiyamachi by the Takase River, opened in 2019, where a machine pipes chestnut paste into 1 mm threads at your table. The top Mont Blanc, 'Sa', uses only Kyotanba chestnuts (¥3,080, 40 a day); 'Tsumugi' is a smaller one with a drink (¥1,800), and seasonal parfaits pair the Mont Blanc with grapes or peaches. A sip of dashi resets the palate. Get a numbered ticket from 9:00 or book online. Open daily 10:00–18:00.",
    chef_bio: { chef_name: null, roles: ['Company-run shop (a corporate invoice registrant, Tabelog); no staff named'], origin: null,
      background: 'Per Tabelog (the shop’s own text): Mont Blanc with chestnut strands as thin as 1 mm, freshly made with carefully selected ingredients, plus seasonal fruit options. A September 2026 reviewer says it opened in October 2019. Tabelog Sweets WEST "Tabelog 100" 2026.',
      philosophy: 'Per Tabelog (the shop’s own text): "Delivering exquisite products filled with the producers’ passion to many people."',
      specialty: 'Kinshi Mont Blanc "Sa".',
      anecdotes: [
        { text: '"They squeeze chestnut cream right in front of you!" — September 2026.', source: R + 'B535929720/' },
        { text: 'An October 2026 diner felt that at over ¥3,000 the Mont Blanc ought to taste exceptional, while finding it quite delicious.', source: R + 'B538070595/' },
        { text: '"I felt there might be a bit too much meringue inside. I think it could use a bit more cream." — October 2026.', source: R + 'B536739185/' },
      ],
      japanese_sources_summary: '食べログ: スイーツ・カフェ・洋菓子、下京区木屋町通松原上る二丁目和泉屋町170-1、京都河原町駅から徒歩5分、毎日10:00〜18:00 (L.O. 17:00)、不定休、整理券は毎朝9:00から配布 (時間指定ではなく順番)、テイクアウトは11:00から、予約可 (1名・10名以上は電話、席は1時間、15分遅れでキャンセル扱い)、34席 (カウンター6、テーブル28)、禁煙、カード・交通系IC・PayPay 可、スイーツ WEST 百名店 2026、1mm の和栗のモンブラン。口コミ (2026年8〜11月、英語): 2019年10月開店、Kyotanba の栗だけの錦糸モンブラン「Sa」3,080円 (1日40食)、「Tsumugi」ドリンク付き1,800円、栗餅1,980円、季節の果物のパフェ、目の前で絞る、口直しの出汁、2階から川の眺め。',
      confidence: 'medium', sources: [TB, R + 'B517733609/', R + 'B535705296/', R + 'B535743682/', R + 'B535929720/', R + 'B536095340/', R + 'B536200439/', R + 'B536739185/', R + 'B538070595/', R + 'B538628512/', R + 'B538631257/', R + 'B538656073/', R + 'B538677101/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take a numbered ticket or book online; cards, IC and PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通松原上る二丁目和泉屋町170-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.000143, 135.769169); cross-checked: GSI 京都府京都市下京区和泉屋町170番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536095340/', R + 'B535929720/', R + 'B538070595/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kinshi Mont Blanc "Sa" (Kyotanba chestnuts; 40 a day)', '¥3,080', 'Mont Blanc', 'ask', 'no', 'September–October 2026.', 'mont_blanc_sa'),
      it('', '', 'Mont Blanc "Tsumugi" with a drink', '¥1,800', 'Mont Blanc', 'ask', 'no', 'September 2026.', 'mont_blanc_tsumugi'),
      it('', '', 'Chestnut mochi', '¥1,980', 'Sweets', 'ask', 'no', 'September 2026.', 'kuri_mochi'),
    ] }, {
    cuisine: '1mm の糸のように目の前で絞るモンブランの和栗専門店 (食べログの店の紹介、2026年の口コミ)・Kyotanba の栗だけを使う錦糸モンブラン「Sa」、1日40食、3,080円 (2026年9〜10月)・小さめのモンブラン「Tsumugi」ドリンク付き1,800円 (2026年9月)・栗餅1,980円 (2026年9月)・モンブランをのせた季節の果物のパフェ (シャインマスカットと Nagano Purple、Arakawa の桃)、栗のタルト、丸ごとの栗のパイ (2026年の口コミ)・水出し煎茶などの飲み物、口直しの小さな出汁 (2026年9月)',
    neighborhood: '松原の北の木屋町通、高瀬川沿い。京都河原町駅から徒歩5分',
    gf_detail: '要確認。モンブランは焼いたメレンゲの台だが、スポンジを使うものもあり、タルトやパイは小麦。原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。栗のクリームに生クリームとメレンゲ (卵白)、果物のパフェにもクリームとソルベ (2026年の口コミ)。',
    notes: '[モンブラン・木屋町、1mm の和栗の糸] 高瀬川沿いの木屋町にある、2019年開店の落ち着いた和栗のカフェ。機械で栗のペーストを1mm の糸にして目の前で絞る。一番のモンブラン「Sa」は Kyotanba の栗だけ (3,080円、1日40食)、「Tsumugi」はドリンク付きの小さめ (1,800円)、季節のパフェはぶどうや桃とモンブラン。口直しに出汁を一口。9時からの整理券かオンライン予約で。毎日10時〜18時。',
  });
}

save();
