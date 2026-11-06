// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 12.
//   + オードビー eau de vie (couple-run Pontocho yoshoku dining bar, about 35 years; core list)
//   + あおい Aoi (obanzai counter by Kiyamachi, since 2013; core list)
//   + 余志屋 Yoshiya (Pontocho kappo famous for kamameshi; notable list)
//   + 祇園おかだ Gion Okada (Gion kappo with a long à la carte menu; notable list)
//   Picked 2026-11-05 after batch 11. `queue.mjs kyoto-missed next core 200`: オードビー 26000689 and あおい 26023417 (first
//   two lane-1 ids). `next notable 200`: 二条 やま岸 26032831 (skipped, same-name group in data), 丹 26027731 (skipped, Wakuden
//   sub-brand), 余志屋 26000701, 祇園おかだ 26004733. Same-name check first: no other オードビー, あおい (an Osaka 喫茶あおい
//   only), 余志屋 or 祇園おかだ in our crawls. None of the four is in data/kyoto.json: grep by name and address (材木町183,
//   材木町181, 材木町188, 祇園町南側570-6) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032831', '二条 やま岸: one of the same-name やま岸 shops, a group already in data — kyoto_nominokoji_yamagishi chef_bio.background: "the group lists 富小路やま岸, 呑小路やま岸, 二条やま岸, 祇園やま岸, 焼肉やまちゃん … and 饗宴 in Kyoto, and 銀座 呑小路やま岸 and 富小路やま岸 麻布台ヒルズ in Tokyo"; our crawl also lists とりの小路 やま岸 26042618 — 5+ same-name shops (Greg, 2026-11-05).');
skip('26027731', '丹: Tabelog shop text — "A branch of the Japanese restaurant \'Wakuden,\' established in 1870"; a sub-brand of the Wakuden group, which is already in data (kyoto_muromachi_wakuden; its background lists the group\'s ryotei, soba and other restaurants and shops in Kyoto, Tokyo and Nagoya) — a sub-brand of a large parent counts as a chain (Greg, 2026-11-05).');

// ================================================================ オードビー eau de vie
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000689/'; const R = TB + 'dtlrvwlst/';
  const TU = day(['17:30', '24:00']); const WS = day(['12:00', '15:00'], ['17:30', '24:00']); const SU = day(['12:00', '15:00'], ['17:30', '25:00']);
  put({
    id: 'kyoto_eau_de_vie_pontocho', name: 'オードビー (eau de vie)', category: 'OMNI',
    lat: 35.007545, lng: 135.770994, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Western set lunches with quiche, bread, cream croquettes, hamburg steak with demi-glace and spring rolls; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Ratatouille and salads appear among the appetisers, but courses centre on meat, fish, egg quiche and cream sauces (2025–2026 reviews).',
    hours_raw: 'Tuesday 17:30–24:00; Wednesday to Saturday and holidays 12:00–15:00 and 17:30–24:00; Sunday 12:00–15:00 and 17:30–1:00; closed Monday (Tabelog). Lunch is a set course only (April 2026). Reservations accepted (Tabelog). A 3.25% fee for e-money payments (Tabelog). 24 seats: 8 at the counter, 12 at tables (Tabelog). Cards, e-money and QR (Tabelog). Third floor of 先斗町92ビル on the west side of Pontocho, south of Sanjo and the Kaburenjo; easy to walk past; 5 min walk from Sanjo Stn (Keihan) (Tabelog; 2026 reviews).',
    hours: { 1: TU, 2: WS, 3: WS, 4: WS, 5: WS, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo, 3rd floor — 5 min walk from Sanjo Stn',
    cuisine: 'Dining bar of home-style Western cooking, run by a couple for about 35 years (2025–2026 reviews) · lunch course about ¥1,890–3,000: three appetisers (Thai carpaccio, ratatouille, quiche), soup, salad, a main — hamburg steak with demi-glace, steak, chicken sauté, wagyu steak — rice or bread, dessert and coffee (2025–2026 reviews) · dinner of about ten dishes — appetisers, soup, quiche, spring rolls, bread, dessert — with beef tongue stew +¥500 (October 2026); herb-butter chicken, yuba-wrapped shrimp cream croquettes, herb-stuffed salmon (August 2026) · craft beer, wine, flavoured coffee (hazelnut, vanilla) (2025–2026 reviews)',
    website: null, gmaps: gm('オードビー 先斗町'), menu_url: null,
    notes: "[Yoshoku · Pontocho, a couple's Western kitchen upstairs] A bright third-floor dining bar on Pontocho, run by a husband and wife for some 35 years, that turns out careful Western home cooking: a lunch course under ¥2,000–3,000 with quiche, ratatouille, soup and a hamburg steak or wagyu, and a dinner of about ten small dishes with wine for well under ¥8,000. Open late as a bar. One October 2025 diner found the husband curt and unfriendly while the wife was charming. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['A married couple (unnamed in the sources)'], origin: null,
      background: 'Per reviews: "run by a husband and wife team" (May 2026), "a couple" (October 2025, October 2026); an October 2026 reviewer says it has been around for 35 years.',
      philosophy: null, specialty: 'Lunch course; quiche; hamburg steak.',
      anecdotes: [
        { text: '"At the end, we even had coffee included, all for around JPY 2000, which felt like a great deal." — February 2026.', source: R + 'B499357964/' },
        { text: 'An October 2025 lunch guest found the husband unfriendly — speaking sharply to the wife during the rush and not answering a thank-you — while the wife left a very good impression; the food was delicious.', source: R + 'B515239075/' },
        { text: '"It\'s easy to see why this restaurant has been around for 35 years, and I highly recommend it!" — October 2026.', source: R + 'B537436175/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・洋食・バー、中京区材木町183-1 先斗町三条下ル2番西側 先斗町92ビル3F、京阪三条駅から徒歩5分、火 17:30〜24:00、水〜土・祝 12:00〜15:00・17:30〜24:00、日 12:00〜15:00・17:30〜翌1:00、月曜休み、予約可、電子マネーは手数料3.25%、24席 (カウンター8、テーブル12)、カード・電子マネー・QR 可。口コミ (2025年8月〜2026年10月、英語): 夫婦で営む、約35年、昼のコース1,890〜3,000円 (前菜3種、キッシュ、ラタトゥイユ、スープ、サラダ、ハンバーグ、ステーキ、チキンソテー)、夜は約10品で牛タンシチュー+500円、湯葉巻き海老クリームコロッケ、クラフトビール、フレーバーコーヒー、夫の接客が無愛想との声 (2025年10月)。',
      confidence: 'medium', sources: [TB, R + 'B499357964/', R + 'B511185003/', R + 'B514401529/', R + 'B515239075/', R + 'B517833699/', R + 'B526489389/', R + 'B527994400/', R + 'B531233628/', R + 'B534092539/', R + 'B537436175/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Third floor — look for the building on Pontocho; set lunch; cards accepted (e-money surcharge).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区材木町183-1 先斗町三条下ル2番西側 先斗町92ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007545, 135.770994); cross-checked: GSI 京都府京都市中京区材木町183番地 (lot) 22 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517833699/', R + 'B531233628/'],
    price_note: 'No menu read; prices from November 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetisers, soup, salad, main, coffee)', '¥1,890', 'Lunch', 'no', 'ask', 'November 2025; mains vary.', 'lunch_course'),
      it('', '', 'Lunch course with wagyu steak and dessert', '¥3,000', 'Lunch', 'ask', 'no', 'July 2026.', 'wagyu_lunch'),
      it('', '', 'Beef tongue stew (dinner supplement)', '+¥500', 'Dinner', 'ask', 'no', 'October 2026.', 'tongue_stew'),
    ] }, {
    cuisine: '夫婦で約35年営む、家庭的な洋食のダイニングバー (2025〜2026年の口コミ)・昼のコース1,890〜3,000円ほど: 前菜3種 (タイ風カルパッチョ、ラタトゥイユ、キッシュ)、スープ、サラダ、メイン (デミグラスのハンバーグ、ステーキ、チキンソテー、和牛ステーキ)、ご飯かパン、デザート、コーヒー (2025〜2026年の口コミ)・夜は前菜、スープ、キッシュ、春巻き、パン、デザートなど約10品、牛タンシチューは+500円 (2026年10月)、ハーブバターのチキンソテー、湯葉巻きの海老クリームコロッケ、ハーブを詰めて焼いた鮭 (2026年8月)・クラフトビール、ワイン、フレーバーコーヒー (ヘーゼルナッツ、バニラ) (2025〜2026年の口コミ)',
    neighborhood: '三条の南の先斗町、ビルの3階。三条駅から徒歩5分',
    gf_detail: '要確認。キッシュ、パン、クリームコロッケ、デミグラスのハンバーグ、春巻きのある洋食のコース。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。前菜にラタトゥイユやサラダはあるが、コースは肉、魚、卵のキッシュ、クリームソースが中心 (2025〜2026年の口コミ)。',
    notes: '[洋食・先斗町、夫婦の3階の洋食] 先斗町の明るい3階のダイニングバー。夫婦で約35年営み、ていねいな家庭的な洋食を出す: 昼は2,000〜3,000円ほどのコースでキッシュ、ラタトゥイユ、スープ、ハンバーグか和牛、夜は約10品の小皿とワインで8,000円を大きく下回る。夜遅くまでバーとしても。2025年10月の客は夫の接客が無愛想で、妻は感じが良かったと書いている。月曜休み。',
  });
}

// ================================================================ あおい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023417/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_aoi_obanzai', name: 'あおい (Aoi)', category: 'OMNI',
    lat: 35.007718, lng: 135.770676, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai simmered in dashi and soy, fried dishes such as ebi-imo kara-age, croquette-style dishes, pasta and shrimp cream rice; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: obanzai and dishes with dashi, fish (sea bream, herring, sardines), pork, duck and shrimp (2025–2026 reviews).',
    hours_raw: '17:00–23:00; closed Monday and some Sundays (Tabelog). Book ahead — a week ahead for a Saturday, with sittings at 17:30 or 20:30 (January 2026); last bookings around 21:00 even on weekdays (June 2026). 11 seats: 6 at the counter, 1 table; non-smoking (Tabelog). Cards (JCB, AMEX, Diners) (Tabelog). Ground floor of ニュー京都ビル by Kiyamachi, north of Shijo (Tabelog; September 2025). Opened 24 January 2013 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi north of Shijo — near Kawaramachi and Sanjo stations',
    cuisine: 'Kyoto obanzai counter with the day’s dishes laid out in bowls and a longer menu (2025–2026 reviews) · shima-aji and yuba sashimi; ebi-imo kara-age; sea bream with turnip ¥980; herring with eggplant ¥880; shinoda roll ¥880; kamo eggplant simmered with grated daikon ¥1,080; shrimp tsukune with plum sauce ¥580; bacon and summer vegetable peperoncino ¥880 (September 2025–January 2026) · Manganji peppers with dried fish, duck meatballs in tomato sauce, butter potatoes, potato salad, shrimp cream rice to finish (March 2026) · Mibu greens, nama-fu, pork and nama-fu with green-onion salt, sawara and potato in miso butter, pumpkin and sweet potato (October 2026) · Kyoto sake (2026 reviews)',
    website: null, gmaps: gm('あおい 京都 木屋町 おばんざい'), menu_url: null,
    notes: "[Obanzai · Kiyamachi, a cheerful owner's counter] A tiny obanzai counter by Kiyamachi — six seats and one table — where a lively owner with a strong Kyoto accent and the staff serve the day's home cooking from bowls on the counter: shinoda rolls, fried ebi-imo, sea bream with turnip, yuba and shima-aji sashimi, and shrimp cream rice to finish. Dishes run ¥580–1,080 and come generous. Popular with solo diners and visitors from abroad, and featured in guidebooks and on TV — book ahead. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (a woman, unnamed) and staff'], origin: null,
      background: 'Opened 24 January 2013 (Tabelog). Reviewers in 2025–2026 describe a cheerful owner with a strong Kyoto dialect who recommends dishes and manages a busy room, many regulars and solo diners, international tourists, a guidebook feature and a TV crew filming in October 2026.',
      philosophy: null, specialty: 'Shinoda-maki; ebi-imo kara-age; yuba sashimi.',
      anecdotes: [
        { text: '"This time, there was a TV crew filming, and I nervously participated in an interview (laughs)." — October 2026.', source: R + 'B507073391/' },
        { text: 'A first-timer in August 2026 let the owner recommend dishes, ordered every suggestion, and found each one a hit — the yuba sashimi twice.', source: R + 'B534184911/' },
        { text: '"It\'s a popular spot frequented by many international tourists, making reservations a must." — September 2025.', source: R + 'B513497619/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、中京区材木町181-2 ニュー京都ビル1F、17:00〜23:00、月曜と一部の日曜休み、予約可、11席 (カウンター6、テーブル1)、禁煙、カード可 (JCB、AMEX、Diners)、2013年1月24日オープン。口コミ (2025年9月〜2026年10月、英語): 京都弁の明るい女将、カウンターに並ぶおばんざい、しまあじと湯葉のお造り、信田巻き、海老芋の唐揚げ、鯛かぶら980円、にしんなす880円、賀茂茄子のおろし煮1,080円、海老つくねの梅だれ580円、壬生菜、生麩、締めの海老クリームご飯、予約は17時半か20時半、海外の客も多い、テレビの取材 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B440005126/', R + 'B507073391/', R + 'B513473260/', R + 'B513497619/', R + 'B521994085/', R + 'B524313813/', R + 'B526460130/', R + 'B529878702/', R + 'B534184911/', R + 'B538470550/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask the owner to recommend; tiny counter; book ahead; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町181-2 ニュー京都ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007718, 135.770676); cross-checked: GSI 京都府京都市中京区材木町181番地 (lot) 15 m; kyoto_eau_de_vie_pontocho is 35 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513497619/', R + 'B521994085/'],
    price_note: 'No menu read; prices from September 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sea bream with turnip', '¥980', 'Obanzai', 'ask', 'no', 'January 2026.', 'tai_kabura'),
      it('', '', 'Herring with eggplant', '¥880', 'Obanzai', 'ask', 'no', 'January 2026.', 'nishin_nasu'),
      it('', '', 'Shinoda roll', '¥880', 'Obanzai', 'ask', 'ask', 'January 2026.', 'shinoda_maki'),
      it('', '', 'Kamo eggplant simmered with grated daikon', '¥1,080', 'Obanzai', 'ask', 'no', 'September 2025.', 'kamo_nasu'),
      it('', '', 'Shrimp tsukune with plum sauce', '¥580', 'Small dishes', 'ask', 'no', 'September 2025.', 'ebi_tsukune'),
    ] }, {
    cuisine: 'カウンターにその日のおばんざいが並び、品書きも豊富な京のおばんざいの店 (2025〜2026年の口コミ)・しまあじと湯葉のお造り、信田巻き、海老芋の唐揚げ、鯛かぶら980円、にしんなす880円、賀茂茄子のおろし煮1,080円、海老つくねの梅だれ580円、ベーコンと夏野菜のペペロンチーノ880円 (2025年9月〜2026年1月)・万願寺とうがらしとじゃこ、鴨団子のトマトソース、じゃがバター、ポテトサラダ、締めの海老クリームご飯 (2026年3月)・壬生菜、生麩、豚と生麩のねぎ塩炒め、さわらとじゃがいもの味噌バター、かぼちゃとさつまいもの甘辛煮 (2026年10月)・京都の日本酒 (2026年の口コミ)',
    neighborhood: '四条の北、木屋町。河原町駅と三条駅の近く',
    gf_detail: '要確認。だしと醤油のおばんざい、海老芋の唐揚げなどの揚げ物、パスタ、海老クリームご飯。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。だしのおばんざい、魚 (鯛、にしん、じゃこ)、豚、鴨、海老の料理 (2025〜2026年の口コミ)。',
    notes: '[おばんざい・木屋町、明るい女将のカウンター] 木屋町のカウンター6席とテーブル1卓の小さなおばんざいの店。京都弁の元気な女将とスタッフが、カウンターの鉢に並ぶその日の家庭料理を出す: 信田巻き、海老芋の唐揚げ、鯛かぶら、湯葉としまあじのお造り、締めに海老クリームご飯。1品580〜1,080円で量も多め。一人客や海外の客も多く、ガイドブックやテレビにも登場。予約を。月曜休み。',
  });
}

// ================================================================ 余志屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000701/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yoshiya_pontocho', name: '余志屋 (Yoshiya)', category: 'OMNI',
    lat: 35.006954, lng: 135.770962, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo à la carte with ankake, dengaku, fried guji, kara-age, fried shrimp and kamameshi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based ankake and kamameshi with chicken, oysters or anago; fish, eel and duck dishes (2025–2026 reviews).',
    hours_raw: '17:00–22:00; closed Monday (Tabelog). Reservations essential — "you cannot enter without a reservation" (Tabelog, October 2025); 20:00 is easier at weekends; reserve popular dishes such as fried guji with the table (December 2025; March 2026). Dress smart-casual — no flip-flops or gym clothes (Tabelog). Tabelog’s service-charge field reads なし (none) in the original. 28 seats: a 10-seat counter, a raised area for 4 and a tatami room upstairs for up to about 12 (Tabelog; September 2025). Cards (VISA, JCB, AMEX, Diners) (Tabelog). An old townhouse on Pontocho south of Sanjo; a second shop has opened across the street (Tabelog); 8 min from Kawaramachi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho south of Sanjo — 8 min walk from Kawaramachi Stn',
    cuisine: 'Pontocho kappo of à la carte Kyoto home dishes, famous for its iron-pot kamameshi (Tabelog; 2025–2026 reviews) · kamameshi of the season — oyster and peas, oyster and ginkgo, chicken, maitake and edamame, anago (2025–2026 reviews) · fried guji with crisp scales, Yawata-maki of eel and burdock, dashimaki and eel omelette, duck manjū, vegetable ankake, dengaku tofu, matsukasa-yaki, grilled shirako, sea urchin with fresh yuba, fried small taro, fried shrimp, firefly squid nuta, hamo tempura, a matsutake and hamo pot (2025–2026 reviews) · homemade dessert, brown-sugar sorbet (2025–2026 reviews) · bills ¥10,000–19,999 (Tabelog review bands)',
    website: null, gmaps: gm('余志屋 先斗町'), menu_url: null,
    notes: "[Kappo · Pontocho, kamameshi in an old townhouse] A long-loved Pontocho kappo in an old townhouse — counter downstairs, tatami room up — where you order Kyoto dishes à la carte: crisp-scaled fried guji, eel Yawata-maki, dashimaki, duck manjū, vegetable ankake, and the house's famous iron-pot kamameshi to finish (oyster in winter, anago in summer). Popular dishes sell out, so reserve them with the table, and book well ahead; 20:00 is easier at weekends. Smart casual. Closed Monday. A second shop has opened across the street.",
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog: very popular, no entry without a reservation (October 2025); a second shop has opened across the street; known for the kamameshi. Long-time regulars in 2025–2026 describe a historic building, a counter on the ground floor and a tatami room upstairs, and staff flexible with orders.',
      philosophy: null, specialty: 'Kamameshi; fried guji; Yawata-maki.',
      anecdotes: [
        { text: '"I made sure to reserve the fried guji fish and Yawata roll, which I absolutely wanted to try." — December 2025.', source: R + 'B498749703/' },
        { text: '"I recommend going at 8 PM on weekends, as it’s relatively easier to secure a reservation." — March 2026.', source: R + 'B503396530/' },
        { text: '"There was a little mix-up with the fried items not being ordered, but it was all in good fun. I appreciated how flexible they were" — May 2026.', source: R + 'B490746978/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・釜飯、中京区先斗町通三条下ル材木町188、河原町駅から8分、17:00〜22:00、月曜休み、予約可 (予約なしでは入れない、2025年10月)、ドレスコード、サービス料なし、28席 (カウンター10、小上がり4、2階に個室)、カード可 (VISA、JCB、AMEX、Diners)、向かいに2号店、釜飯が美味しい。口コミ (2025年9月〜2026年6月、英語): ぐじの唐揚げ、八幡巻き、だし巻き、鴨まんじゅう、野菜のあんかけ、田楽、白子焼き、ウニと生湯葉、小芋の唐揚げ、海老フライ、ほたるいかのぬた、鱧の天ぷら、松茸と鱧の小鍋、牡蠣や穴子の釜飯、黒糖のシャーベット、2階の座敷、週末は20時が取りやすい。',
      confidence: 'medium', sources: [TB, R + 'B252126585/', R + 'B271128417/', R + 'B490746978/', R + 'B498749703/', R + 'B503396530/', R + 'B504251365/', R + 'B512336628/', R + 'B517932486/', R + 'B527888113/', R + 'B534630136/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book well ahead, and reserve signature dishes with the table; smart casual; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル材木町188',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.006954, 135.770962); cross-checked: GSI 京都府京都市中京区材木町188番地 (lot) 19 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498749703/', R + 'B504251365/'],
    price_note: 'No menu prices read; bills ¥10,000–19,999 in 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kamameshi of the season', '', 'Rice', 'ask', 'no', '', 'kamameshi'),
      it('', '', 'Fried guji', '', 'Fried', 'no', 'no', 'Reserve ahead.', 'guji_karaage'),
      it('', '', 'Yawata-maki (eel and burdock)', '', 'Grilled', 'ask', 'no', 'Reserve ahead.', 'yawata_maki'),
      it('', '', 'Dashimaki', '', 'Small dishes', 'ask', 'no', '', 'dashimaki'),
    ] }, {
    cuisine: '名物の鉄釜の釜飯で知られる、京の家庭料理をアラカルトで出す先斗町の割烹 (食べログ、2025〜2026年の口コミ)・季節の釜飯: 牡蠣と豆、牡蠣と銀杏、鶏と舞茸と枝豆、穴子 (2025〜2026年の口コミ)・鱗がぱりっとしたぐじの唐揚げ、鰻とごぼうの八幡巻き、だし巻きと鰻の卵焼き、鴨まんじゅう、野菜のあんかけ、豆腐田楽、松笠焼き、白子焼き、ウニと生湯葉、小芋の唐揚げ、海老フライ、ほたるいかのぬた、鱧の天ぷら、松茸と鱧の小鍋 (2025〜2026年の口コミ)・自家製のデザート、黒糖のシャーベット (2025〜2026年の口コミ)・会計は1万〜2万円ほど (食べログの口コミ)',
    neighborhood: '三条の南の先斗町。河原町駅から徒歩8分',
    gf_detail: '要確認。あんかけ、田楽、ぐじの唐揚げ、唐揚げ、海老フライ、釜飯のアラカルトの割烹。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのあんかけ、鶏や牡蠣や穴子の釜飯、魚、鰻、鴨の料理 (2025〜2026年の口コミ)。',
    notes: '[割烹・先斗町、町家の釜飯] 1階にカウンター、2階に座敷のある古い町家の、長く愛される先斗町の割烹。京の料理をアラカルトで: 鱗がぱりっとしたぐじの唐揚げ、鰻の八幡巻き、だし巻き、鴨まんじゅう、野菜のあんかけ、締めは名物の鉄釜の釜飯 (冬は牡蠣、夏は穴子)。人気の料理は売り切れるので予約時に頼んでおき、早めの予約を。週末は20時が取りやすい。服装はスマートカジュアル。月曜休み。向かいに2号店ができた。',
  });
}

// ================================================================ 祇園おかだ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004733/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_gion_okada', name: '祇園おかだ (Gion Okada)', category: 'OMNI',
    lat: 35.002507, lng: 135.775453, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kappo à la carte or omakase: sashimi, vinegared and simmered dishes, fried fish and fugu, tempura, sushi and porridge; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred kappo of sashimi, crab, fugu, whale and dashi dishes (2025–2026 reviews).',
    hours_raw: '17:00–24:00, Monday to Saturday; closed Sunday and holidays (Tabelog). Reservations from two months ahead (Tabelog); same-day bookings sometimes possible (August 2025). Courses (omakase) or à la carte from a long menu (2025–2026 reviews). 5% service charge (Tabelog). 25 seats with a counter, tatami and a private room for 8 upstairs; non-smoking (Tabelog; June 2026). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). On Hanamikoji in Gion, south of Shijo (July 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanamikoji, Gion south of Shijo — near Gion-Shijo Stn',
    cuisine: 'Gion Kyoto-cuisine house that, unusually, offers a long à la carte menu as well as omakase courses (2025–2026 reviews) · e.g. sesame tofu, assorted sashimi, raw oysters, vinegared sweet shrimp, fried baby clams, steamed turnip, sake-steamed ayu, whale with mizuna, grilled fugu shirako, fried fugu, steamed anago sushi (December 2025); half a hairy crab, squid with vinegar, miso-marinated bonito (July–August 2025); nodoguro, hamo, corn tempura, dried fish (2025–2026 reviews) · mackerel sushi (ordered three times by an April 2026 diner) and chirimen to take home (December 2025) · omakase ending with rice porridge (February 2026) · bills ¥20,000–29,999 (Tabelog review bands)',
    website: null, gmaps: gm('祇園おかだ 京都'), menu_url: null,
    notes: "[Kappo · Gion Hanamikoji, Kyoto cuisine à la carte] A Gion Kyoto-cuisine house on Hanamikoji that lets you order from a menu longer than most izakaya's — hairy crab, fugu shirako, whale with mizuna, mackerel sushi, corn tempura — or take the omakase, finishing with rice porridge. Quality is high and so are prices (about ¥20,000–30,000), with 5% service. Book up to two months ahead. Some 2025–2026 diners found service slow on busy nights. Open until midnight; closed Sunday and holidays.",
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed in the sources)'], origin: null,
      background: 'Reviewers in 2025–2026 call it a famous Gion kaiseki house, mention a Michelin Guide listing (June 2026), praise the à la carte menu and the presentation, and note that service was slow at year-end (December 2025) and only average (February 2026).',
      philosophy: null, specialty: 'À la carte Kyoto cuisine; mackerel sushi.',
      anecdotes: [
        { text: 'A December 2025 regular, told the house was full three weeks ahead, was squeezed in until 18:30 after a Kabuki matinee, and took mackerel sushi home for a son minding the family dog.', source: R + 'B476168960/' },
        { text: '"It seems to have more choices than your average inexpensive izakaya, yet the quality of everything is high." — July 2025.', source: R + 'B512996576/' },
        { text: '"While I understand that delays are inevitable, the service was really slow... Waiting 20 minutes for the bill was tough." — December 2025.', source: R + 'B519750165/' },
        { text: '"The saba sushi was outstanding—I ended up ordering it three times!" — April 2026.', source: R + 'B527262723/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園町南側570-6、月〜土 17:00〜24:00、日・祝休み、予約可 (2か月前から)、サービス料5%、25席、個室 (8名)、禁煙、カード可。口コミ (2025年7月〜2026年7月、英語): 花見小路、アラカルトとおまかせ、毛蟹、いかの酢の物、鰹の味噌漬け、のどぐろ、鱧、胡麻豆腐、お造り、生牡蠣、甘海老の酢の物、ふぐの白子焼き、ふぐの唐揚げ、鯨の水菜、穴子の蒸し寿司、鯖寿司、ちりめんの持ち帰り、とうもろこしの天ぷら、締めの雑炊、年末は提供が遅かった、ミシュランガイド掲載との声、1人2万〜3万円。',
      confidence: 'medium', sources: [TB, R + 'B314638584/', R + 'B476168960/', R + 'B511936063/', R + 'B512996576/', R + 'B519750165/', R + 'B522009027/', R + 'B527262723/', R + 'B532372830/', R + 'B532428990/', R + 'B532792597/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; à la carte or omakase; 5% service; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002507, 135.775453); GSI matches 京都府京都市東山区祇園町南側570番地 (lot) 178 m away — the 570 lot spans a large Gion block, beyond the 150 m rule — so the pin rests on the Tabelog point (GSI only, no OSM); nearest record kyoto_ristorante_tvb at 9 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B476168960/', R + 'B512996576/'],
    price_note: 'No menu prices read; bills ¥20,000–29,999 in 2025–2026 reviews; 5% service.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '', 'Course', 'ask', 'no', '', 'omakase'),
      it('', '', 'Mackerel sushi', '', 'À la carte', 'ask', 'no', 'Takeaway too.', 'saba_zushi'),
      it('', '', 'Grilled fugu shirako (winter)', '', 'À la carte', 'ask', 'no', 'December 2025.', 'fugu_shirako'),
      it('', '', 'Hairy crab, half', '', 'À la carte', 'ask', 'no', 'August 2025.', 'kegani'),
    ] }, {
    cuisine: '珍しくおまかせのほかに長いアラカルトの品書きもある、祇園の京料理 (2025〜2026年の口コミ)・たとえば胡麻豆腐、お造りの盛り合わせ、生牡蠣、甘海老の酢の物、小さな貝の揚げ物、かぶら蒸し、鮎の酒蒸し、鯨と水菜、ふぐの白子焼き、ふぐの唐揚げ、穴子の蒸し寿司 (2025年12月)、毛蟹半身、いかの酢の物、鰹の味噌漬け (2025年7〜8月)、のどぐろ、鱧、とうもろこしの天ぷら、干物 (2025〜2026年の口コミ)・鯖寿司 (2026年4月の客は3回注文)、持ち帰りのちりめん (2025年12月)・おまかせの締めは雑炊 (2026年2月)・会計は2万〜3万円ほど (食べログの口コミ)',
    neighborhood: '四条の南、祇園の花見小路。祇園四条駅の近く',
    gf_detail: '要確認。アラカルトかおまかせの京料理: お造り、酢の物、煮物、魚やふぐの揚げ物、天ぷら、寿司、雑炊。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、蟹、ふぐ、鯨、だしの料理が中心の割烹 (2025〜2026年の口コミ)。',
    notes: '[割烹・祇園花見小路、アラカルトの京料理] 花見小路の祇園の京料理。居酒屋より多いほどの品書きから選べる: 毛蟹、ふぐの白子、鯨と水菜、鯖寿司、とうもろこしの天ぷら。おまかせなら締めは雑炊。質は高く値段も高め (2万〜3万円ほど)、サービス料5%。予約は2か月前から。2025〜2026年には忙しい夜は提供が遅いとの声も。深夜0時まで、日・祝休み。',
  });
}

save();
