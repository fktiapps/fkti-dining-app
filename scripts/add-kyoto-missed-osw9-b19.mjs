// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 19.
//   + 割烹たいら Kappou Taira (8-seat kappo in a machiya on Bukkoji-dori; chef once head chef at Gion Senka)  [core]
//   + 祇園 大季 Gion Daiki (Gion kappo with sushi, run by a chef back from Bangkok with a sushi-chef father) [core]
//   + K36 (rooftop bar and main bar of The Hotel Seiryu Kyoto Kiyomizu, facing Yasaka Pagoda)               [notable]
//   + To (creative izakaya by night and crostini breakfasts by morning; fudo's second shop)                  [notable]
//   - 焼野菜 五十家 26005043 skipped (a concept of the 五十家 restaurant group, 7–11 shops in Kyoto)
//   Same-name counts first: たいら 1; 大季 1; K36 1 — run by Stillfoods with Minoru Nishida of Bar K6 as butler;
//   kyoto_bar_k6 is in data, but K36 is a different concept under a different operator, so drafted; To 1 —
//   "The second store of ... 'fudo'" (Tabelog); fudo is in data (kyoto_fudo), To is a different concept
//   (creative izakaya and breakfast vs Italian) of a two-shop group, so drafted as a sister concept;
//   五十家 1 by that name, but see the skip.
//   Taken in queue order on 2026-11-05: core 26020349, 26030807; notable 26034089, 26005043 (skip), 26033783.
//   None of the four is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 大季 "サービス料１０パーセント"; K36
//   "サービス料10％に加え1,100円(税込)のチャージ料"; (五十家 "サービス料・チャージなし。").
//   Pins: Tabelog points; GSI lot matches 16–44 m; nearest records 22 m or more.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// un-skipped by integrator 2026-11-05 (五十家 is a local multi-concept group, as for 炭棲堂/イソイズム): skip('26005043', '焼野菜 五十家: a concept of the 五十家 restaurant group, a group large enough to count as a chain — a Tabelog review on this listing says the group runs 7 shops in Kyoto City, and a 2024 TV Tokyo programme listing describes 五十家コーポレーション as running 11 "vegetable dining" shops in Kyoto; reviews call it "a restaurant within the Isoya group" (November 2026). Note: kyoto_sumizumido_hachijo (炭棲堂) is in data and its background reads "a new concept from the izakaya group 五十家" — flagged for the integrator');

// ================================================================ 割烹たいら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020349/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_kappou_taira', name: '割烹たいら (Kappou Taira)', category: 'MOM_AND_POP',
    lat: 35.00131, lng: 135.763275, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kappo omakase with dashi soups, fu, sashimi with soy and ponzu; no gluten information (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led kappo on a fish broth (2023–26 reviews).',
    hours_raw: 'Tue–Sun 12:00–14:00 and 18:00–23:00; closed Monday (Tabelog). Bookings taken (Tabelog). Lunch omakase ¥6,600 (April 2023); a lunch course at ¥8,000 among several price levels (August 2026). 8 counter seats; private hire possible; non-smoking; JCB, AMEX and Diners (Tabelog). In a renovated machiya with a white noren and no sign, on Bukkoji-dori; about 6 min from Shijo Stn (Tabelog; June 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Bukkoji-dori between Karasuma and Kawaramachi — 6 min from Shijo Stn',
    cuisine: 'Kappo omakase at an eight-seat white-wood counter: sakizuke, soup, sashimi, small dishes, grilled, simmered and vinegared dishes, rice and dessert (June 2025) · in reviews: minced tuna with fu, cod and tofu with new onion, sashimi of amadai, bluefin tuna and yellowtail with salt, soy or ponzu, grilled amadai, young ayu, Biwa trout and wakasagi from Lake Biwa (2023–25 reviews) · a wide range of sake and wine; wine-pairing events (February 2024)',
    website: null, gmaps: gm('割烹たいら 京都 仏光寺'), menu_url: null,
    notes: "[Kappo · Bukkoji-dori near Shijo] An unsigned machiya with a white noren hides an eight-seat white-wood counter, where the chatty chef — once head chef at Gion's Senka, per a reviewer — cooks seasonal omakase and pours from a deep sake list. Lunch courses about ¥6,600–8,000; dinner around ¥10,000–15,000. Closed Monday.",
    chef_bio: { chef_name: 'Taira (surname, per a November 2023 review)', roles: ['Owner-chef'], origin: null,
      background: 'Per 2023–26 reviews: an owner-chef who keeps up a lively conversation with each guest at the counter; an August 2026 reviewer writes the owner was formerly head chef at the Gion restaurant "Senka". A September 2025 reviewer notes staff serving the dishes.',
      philosophy: null, specialty: 'Seasonal kappo omakase; sake.',
      anecdotes: [
        { text: 'With "the lively chatter of Chef Taira", a November 2023 lunch guest felt completely at ease.', source: R + 'B474943468/' },
        { text: 'A February 2024 wine-pairing event surprised a guest who had doubted wine with Japanese food.', source: R + 'B479800439/' },
        { text: 'A September 2025 diner\'s son, training as a chef, quietly watched the cooking from the counter.', source: R + 'B513952536/' },
      ],
      japanese_sources_summary: '食べログ: 割烹たいら、日本料理、下京区仏光寺通柳馬場西入ル東前町401、四条駅から徒歩約6分、火〜日 12:00〜14:00・18:00〜23:00、月曜休み、8席 (カウンター)、禁煙、カード (JCB・AMEX・Diners)。口コミ (2023年4月〜2026年8月、英語): 町家の白木のカウンター、看板のない白いのれん、昼のおまかせ6,600円、昼のコース8,000円、Chef Taira、祇園 Senka の元料理長、マグロのたたきと麩、甘鯛、ビワマス、ワカサギ、日本酒とワインのペアリングの会、魚の出汁。',
      confidence: 'medium', sources: [TB, R + 'B463750155/', R + 'B474943468/', R + 'B479012047/', R + 'B479800439/', R + 'B480410047/', R + 'B492904578/', R + 'B508147916/', R + 'B513952536/', R + 'B534674027/', R + 'B67447079/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; a talkative counter chef.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺通柳馬場西入ル東前町401',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.001310, 135.763275); cross-checked: GSI 京都府京都市下京区東前町401番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B463750155/', R + 'B67447079/'],
    price_note: 'No menu read; lunch prices from 2023 and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase', '¥6,600', 'Lunch', 'ask', 'no', 'April 2023 review; an ¥8,000 level in August 2026.', 'lunch_omakase'),
    ] }, {
    cuisine: '8席の白木のカウンターの割烹のおまかせ: 先付、椀物、造り、小鉢、焼き物、炊き合わせ、酢の物、ご飯、甘味 (2025年6月)・口コミの料理: マグロのたたきと麩、鱈と豆腐と新玉ねぎ、甘鯛と本鮪と鰤の造りを塩、醤油、ポン酢で、甘鯛の焼き物、稚鮎、琵琶湖のビワマスとワカサギ (2023〜25年の口コミ)・日本酒とワインが豊富で、ワインのペアリングの会も (2024年2月)',
    neighborhood: '柳馬場の西の仏光寺通。四条駅から徒歩6分',
    gf_detail: '予約時に要確認。出汁の椀物、麩、醤油やポン酢の造りの割烹のおまかせ。グルテンの情報はない (2023〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の出汁の、魚中心の割烹 (2023〜26年の口コミ)。',
    notes: '[割烹・四条近くの仏光寺通] 看板のない町家の白いのれんの奥に、8席の白木のカウンター。口コミによれば祇園 Senka の元料理長という話好きの店主が、旬のおまかせと豊富な日本酒でもてなす。昼のコースは6,600〜8,000円ほど、夜は1万〜1万5千円。月曜休み。',
  });
}

// ================================================================ 祇園 大季
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030807/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_gion_daiki', name: '祇園 大季 (Gion Daiki)', category: 'MOM_AND_POP',
    lat: 35.005434, lng: 135.774695, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kappo course with sushi, dashi, akadashi and fried dishes; no gluten information (Tabelog; 2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, crab, foie gras and wagyu courses (2024–26 reviews).',
    hours_raw: 'Mon–Sat 17:00–22:00; closed Sunday, but Sunday bookings for 6 or more by phone (Tabelog). Bookings by phone preferred; guests who cannot read Japanese must order the omakase course, not à la carte; cancellations two days ahead, the day before or on the day are charged 100%, and prepayments are not refunded (Tabelog). Service charge 10% — Tabelog\'s Japanese original: "サービス料１０パーセント". 12 seats (counter with shoes off) plus private rooms for 2–18; smoking allowed at the counter seats; wheelchair accessible; cards, e-money and QR (Tabelog). At the end of a narrow alley by the Mame Roku Building, off Hanamikoji-Sueyoshi; 5 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo, off Hanamikoji-Sueyoshi — 5 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kappo with sushi: fish direct from Maizuru, mainly Kyoto vegetables, beef from a long-established Shichijo-Gozen butcher; an appetizer platter that changes daily and weekly (Tabelog) · "sushi × kappo" omakase ¥22,000 + service: appetizers, steamed dish, sashimi, simmered, grilled, sushi, dessert; all-you-can-drink +¥4,000 for 6 or more (Tabelog) · in reviews: foie gras chawanmushi, hairy-crab sashimi, nodoguro with fried lotus root and shrimp, grouper and matsutake, grilled conger eel, wagyu, saba sushi, akadashi; snow crab and kue hot pot in winter (2019–26 reviews)',
    website: null, gmaps: gm('祇園 大季 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Kappo & sushi · Gion off Hanamikoji] A hidden house at the end of a Gion alley, where an owner-chef who ran a Japanese restaurant in Bangkok for 15 years cooks Kyoto kappo alongside a father who is a sushi chef: Maizuru fish, foie gras chawanmushi, crab and kue hot pot in winter. Omakase ¥22,000 + 10%. Counter seats allow smoking. Closed Sunday.",
    chef_bio: { chef_name: 'Masayuki Tomimura (romaji, per an October 2024 review)', roles: ['Owner-chef', 'Father: sushi chef with 50 years\' experience (Tabelog)'], origin: 'Kyoto Prefecture, born 1975 (Tabelog).',
      background: 'Per the operator on Tabelog: born in 1975 in Kyoto Prefecture and drawn to cooking by watching a father who was a sushi chef; trained at Yoshitora in Kyoto, Kappo Kamitome in Kitashinchi and Kōmei ARIAKE in Tokyo, then ran the Japanese restaurant "Dai no Ki" in Bangkok as owner for 15 years; opened Gion Daiki in May 2018 (Tabelog: 28 May 2018) and runs it with the father, a sushi chef of 50 years. An October 2024 reviewer names the owner as Masayuki Tomimura, "Tomi". 2025–26 reviews mention a head chef, a hostess and staff.',
      philosophy: 'Per the operator: new ideas while keeping the flavours of Kyoto.',
      specialty: 'Foie gras chawanmushi; sushi within the kappo course.',
      anecdotes: [
        { text: 'A family has made Gion Daiki its year-end tradition — snow crab and kue hot pot in December 2019.', source: R + 'B370941682/' },
        { text: 'A November 2024 guest noted a private room where smoking is allowed, with good ventilation.', source: R + 'B496319397/' },
        { text: 'A June 2026 diner celebrated a 60th birthday here and thanked "the owner and the hostess".', source: R + 'B529591995/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 祇園 大季、日本料理・寿司・鍋、東山区清本町374-4、祇園四条駅から徒歩5分、Mame Roku Building から細い路地の奥、月〜土 17:00〜22:00、日曜休み (6名以上は電話で予約可)、日本語が読めない海外の客はおまかせコースのみ、2日前からのキャンセルは100%、サービス料１０パーセント、12席、個室2〜18名、カウンターは喫煙可、2018年5月28日オープン、1975年京都府生まれ、寿司職人の父、Yoshitora、Kappo Kamitome、Kōmei ARIAKE で修業、バンコクで Dai no Ki を15年経営、父と営む、Maizuru 港直送の魚、Shichijo Gozen の老舗の肉、寿司×割烹おまかせ22,000円 (+サービス料)。口コミ (2019年12月〜2026年10月、英語): フォアグラの茶碗蒸し、毛蟹、のどぐろ、クエ鍋、Masayuki Tomimura。',
      confidence: 'medium', sources: [TB, R + 'B370941682/', R + 'B493341930/', R + 'B494031458/', R + 'B496049869/', R + 'B496319397/', R + 'B497435460/', R + 'B513265952/', R + 'B529591995/', R + 'B535338899/', R + 'B538729349/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; guests who cannot read Japanese order the omakase (Tabelog); 100% cancellation charge from two days ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町374-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005434, 135.774695); cross-checked: GSI 京都府京都市東山区清本町374番地 (lot) 16m; 22 m from kyoto_gion_shizuka; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from Tabelog, tax included, 10% service extra (read 2026-11-05).', last_checked: TODAY, items: [
      it('', '', 'Sushi × kappo omakase course (9 items)', '¥22,000', 'Courses', 'ask', 'no', 'Plus 10% service; all-you-can-drink +¥4,000 for 6 or more.', 'omakase'),
    ] }, {
    cuisine: '寿司のある京都の割烹: Maizuru 直送の魚、京野菜中心の野菜、Shichijo Gozen の老舗の肉。日替わり、週替わりの前菜の盛り合わせ (食べログ)・寿司×割烹のおまかせ22,000円+サービス料: 前菜、蒸し物、造り、炊き合わせ、焼き物、寿司、甘味。6名以上は飲み放題+4,000円 (食べログ)・口コミの料理: フォアグラの茶碗蒸し、毛蟹の造り、のどぐろと蓮根と海老の揚げ物、クエと松茸、穴子の焼き物、和牛、鯖寿司、赤だし。冬はズワイガニとクエ鍋 (2019〜26年の口コミ)',
    neighborhood: '四条の北の祇園、花見小路末吉から入った路地。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。寿司、出汁、赤だし、揚げ物を含む割烹のコース。グルテンの情報はない (食べログ、2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、蟹、フォアグラ、和牛のコース (2024〜26年の口コミ)。',
    notes: '[割烹と寿司・花見小路近くの祇園] 祇園の路地の奥の隠れ家で、バンコクで15年和食店を営んだ店主が、寿司職人の父と京の割烹を出す。Maizuru の魚、フォアグラの茶碗蒸し、冬は蟹とクエ鍋。おまかせ22,000円+10%。カウンター席は喫煙可。日曜休み。',
  });
}

// ================================================================ K36
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034089/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://stillfoods.com/k36/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_k36', name: 'K36', category: 'OMNI',
    lat: 34.997661, lng: 135.779553, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar with bar food such as truffle fries and onion rings; no gluten information (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mainly drinks; the food menu is not described in the sources beyond fried snacks (2026 reviews).',
    hours_raw: 'The Bar (indoor) 15:00–24:00 (last order 23:00); Rooftop 15:00–24:00 (food last order 23:00, drinks 23:30) for 16 September–30 November 2026; open all year; the rooftop closes in bad weather (official site; Tabelog). Seat-only bookings are not taken — booking is by plan, with a ¥25,000-per-person minimum for reserved seats; walk-ins may wait (Tabelog; November 2026: about an hour). Service charge 10% plus a ¥1,100 charge per person — Tabelog\'s Japanese original: "サービス料10％に加え1,100円(税込)のチャージ料". Adults only in The Bar; the rooftop admits under-20s with an adult until 17:00, and from 17:00 no one of elementary-school age or younger, 13–19 only with an adult (official site). Smart casual in The Bar — no shorts, T-shirts or sandals (official site). 108 seats (rooftop 72, bar 36); wheelchair accessible; smoking space at the rooftop entrance; cards and IC cards (Tabelog). On the 4th floor of The Hotel Seiryu Kyoto Kiyomizu, the former Kiyomizu Elementary School; 5 min from the Kiyomizu-michi bus stop (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyomizu, by Yasaka Pagoda — 5 min from the Kiyomizu-michi bus stop',
    cuisine: 'Rooftop bar and main bar open to hotel guests and visitors, with a 360-degree view over Kyoto and Hokan-ji\'s Yasaka Pagoda (official site) · cocktails, whisky, wine and champagne; signature "K36 Gin and Tonic" with the tonic bottle upturned in the glass ¥1,650, "Sex on the Rooftop" (August 2026); caipirinha, mojito, old fashioned (Tabelog) · bar food: truffle fries, onion rings (November 2026)',
    website: SITE, gmaps: gm('K36 The Bar & Rooftop 京都'), menu_url: SITE,
    notes: "[Rooftop bar · Kiyomizu, facing Yasaka Pagoda] The rooftop and bar of The Hotel Seiryu, a former elementary school, open to non-guests: cocktails with the Yasaka Pagoda lit up right in front of you and the city beyond. Come at sunset; expect to queue without a plan booking. ¥1,100 charge + 10% service; cocktails from about ¥1,650. Smart casual. Open daily to midnight.",
    chef_bio: { chef_name: '西田 稔 (Minoru Nishida)', roles: ['Butler (head of the bar), per the official site'], origin: null,
      background: 'Per the official site: run by Stillfoods inc.; the bar invited 西田 稔, who runs the Kyoto bars Bar K6, Cave de K and Bar Keller, as its butler — a Champagne Officier, Krug ambassador, "knight of grappa" and whisky-contest judge. Opened 22 March 2020 (Tabelog). The main bar was converted from a classroom of the former Kiyomizu Elementary School (Tabelog; August 2026).',
      philosophy: null, specialty: 'K36 gin and tonic; sunset view.',
      anecdotes: [
        { text: 'A K6 regular in October 2026 followed Nishida-san here and calls K36 a pioneer among Kansai rooftop bars.', source: R + 'B537992443/' },
        { text: 'Without a booking, a November 2026 visitor waited about an hour to get in.', source: R + 'B538657138/' },
        { text: 'By 11 pm on a 15 °C October 2026 night, the rooftop was almost empty and the best tables free.', source: R + 'B537600130/' },
      ],
      japanese_sources_summary: '公式サイト (stillfoods.com/k36): K36 | The Bar & Rooftop、ザ・ホテル青龍 京都清水の宿泊者もビジターも利用できるルーフトップバー＆レストラン・メインバー、360度のパノラマビュー、法観寺・八坂の塔の眺望、The Bar 15:00〜24:00 (23:00 L.O.)、Rooftop 15:00〜24:00 (Food 23:00 L.O.、Drink 23:30 L.O.、2026年9月16日〜11月30日)、荒天時は Rooftop 閉鎖、The Bar は終日未成年不可、スマートカジュアル、バトラー 西田稔 (Bar K6、Cave de K、Bar Keller)、Stillfoods inc.。食べログ (店舗会員): ダイニングバー・バー、東山区清水2-204-2 4F、席のみの予約不可、席の予約は1人25,000円以上、サービス料10％に加え1,100円のチャージ料、108席 (ルーフトップ72、バー36)、2020年3月22日オープン。口コミ (2026年7〜11月、英語): K36 ジントニック1,650円、八坂の塔の夜景、旧清水小学校、予約なしで約1時間待ち。',
      confidence: 'medium', sources: [TB, SITE, R + 'B433618644/', R + 'B466552776/', R + 'B534124578/', R + 'B534438491/', R + 'B534478977/', R + 'B535121770/', R + 'B537600130/', R + 'B537992443/', R + 'B538183916/', R + 'B538657138/'] },
    cultural_comfort: { level: 'english', note: 'Hotel bar used to visitors; smart casual; ¥1,100 charge + 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水2-204-2 The Hotel Seiryu Kyoto Kiyomizu 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (rooftop hours notice for September–November 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.997661, 135.779553); cross-checked: GSI 京都府京都市東山区清水二丁目204番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534478977/', TB],
    price_note: 'No price list read; cocktail price from an August 2026 review; charges from Tabelog\'s Japanese original.', last_checked: TODAY, items: [
      it('', '', 'K36 Gin and Tonic', '¥1,650', 'Cocktails', '', '', 'August 2026 review.', 'k36_gin_tonic'),
      it('', '', 'Table charge per person', '¥1,100', 'Charges', '', '', 'Plus 10% service.', 'charge'),
    ] }, {
    cuisine: '宿泊者もビジターも使えるルーフトップバーとメインバー。京都の街と法観寺・八坂の塔を望む360度の眺め (公式サイト)・カクテル、ウイスキー、ワイン、シャンパーニュ。トニックの瓶をグラスに逆さに差す名物の K36 ジントニック1,650円、Sex on the Rooftop (2026年8月)。カイピリーニャ、モヒート、オールドファッションド (食べログ)・バーフード: トリュフのフライドポテト、オニオンリング (2026年11月)',
    neighborhood: '八坂の塔のそば、清水。Kiyomizu-michi バス停から徒歩5分',
    gf_detail: '要確認。フライドポテトやオニオンリングなどのバーフードのあるカクテルバー。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。主に酒で、料理は揚げ物のつまみ以外は資料に記載がない (2026年の口コミ)。',
    notes: '[ルーフトップバー・清水、八坂の塔の目の前] 元小学校のザ・ホテル青龍のルーフトップとバーで、宿泊者以外も利用できる。ライトアップされた八坂の塔とその先の街並みを眺めながらカクテルを。夕暮れ時がおすすめ。プラン予約なしだと待つことも。チャージ1,100円+サービス料10%、カクテルは1,650円ほどから。スマートカジュアル。無休、24時まで。',
  });
}

// ================================================================ To
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033783/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.fudokyoto.com/to/';
  const M = ['08:00', '12:30'];
  put({
    id: 'kyoto_to_oike', name: 'To', category: 'OMNI',
    lat: 35.011766, lng: 135.761801, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Brioche crostini at breakfast; yatsuhashi, monaka, gyoza and fried dishes at night; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: duck liver pâté, prosciutto, eggs, cheese, pork and fish dishes (Tabelog; 2026 reviews).',
    hours_raw: 'Breakfast 8:00–12:30 daily; dinner Mon, Wed, Thu, Sun 17:00–23:00 and Fri–Sat 17:00–24:00; no dinner on Tuesday, except Tuesday holidays (Tabelog). Bookings online, also for one person; breakfast starts together at the booked time with an explanation of the ingredients first, so dishes take about 30 minutes; walk-ins turned away when full (2026 reviews). 12 seats: an 8-seat single-plank counter around an island kitchen and two tables; Tabelog lists halal options; non-smoking; cards (Tabelog). 3 min from Karasuma-Oike Stn exit 1 (Tabelog).',
    hours: { 0: day(M, ['17:00', '23:00']), 1: day(M), 2: day(M, ['17:00', '23:00']), 3: day(M, ['17:00', '23:00']), 4: day(M, ['17:00', '24:00']), 5: day(M, ['17:00', '24:00']), 6: day(M, ['17:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oike-dori near Karasuma — 3 min from Karasuma-Oike Stn',
    cuisine: 'Creative izakaya with Italian touches at night: "Hachi To. Bashi" — Kyoto duck liver pâté between grilled yatsuhashi, pork kakuni in Marsala, duck gyoza, fruit shira-ae, salsiccia mapo tofu, natto-mousse rice; red, white, rosé and natural wines and small-brewery sake (Tabelog) · 2026 reviews: fried hamo with manganji-pepper salsa, mozzarella dumplings, fried potatoes, monaka; small plates around ¥4,000–5,000 a head · morning: brioche crostini sets with soup, drink and dessert — caramelised fig, prosciutto and sesame mascarpone, or ham and soft-boiled egg; bomboloni (2026 reviews)',
    website: SITE, gmaps: gm('To 京都 御池 高田町'), menu_url: SITE,
    notes: "[Creative izakaya & breakfast · Oike near Karasuma] The second shop of the popular Italian fudo: a 12-seat counter around an open kitchen serving playful small plates — duck pâté in yatsuhashi, Marsala pork belly — with natural wine at night, and booked-ahead crostini breakfasts from 8 am. Dinner about ¥4,000–6,000. Always busy: book.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 14 January 2020 (Tabelog) as "the second store of Karasuma Oike\'s popular Italian Cuisine restaurant \'fudo\'" (Tabelog); fudo is in our data as kyoto_fudo. Per the operator: a relaxed space like a friend\'s house, built around an island kitchen and a single-plank counter.',
      philosophy: null, specialty: 'Hachi To. Bashi; crostini breakfast.',
      anecdotes: [
        { text: 'An 8 am September 2026 breakfast was full of overseas guests, many from Korea, and began with an explanation of the ingredients to everyone at once.', source: R + 'B536302242/' },
        { text: 'An October 2026 visitor found the slow, careful explanation lovely but noticed a later arrival being seated first.', source: R + 'B537321809/' },
        { text: 'A September 2026 fan of fudo came here for the same yatsuhashi starter.', source: R + 'B536260975/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): To、居酒屋・創作料理、中京区御池高田町500 ポポラーレ御池 1F、烏丸御池駅1番出口から徒歩3分、月水木日 8:00〜12:30・17:00〜23:00、火 8:00〜12:30、金土 8:00〜12:30・17:00〜24:00 (祝日の火曜は営業)、12席 (一枚板のカウンター8、テーブル)、ハラール対応あり、2020年1月14日オープン、烏丸御池の人気イタリアン fudo の2号店、京都の鴨レバーのパテを焼き八ッ橋で挟んだ前菜、マルサラ酒の豚の角煮、鴨肉の餃子、果物の白和え、サルシッチャの麻婆豆腐、納豆ムースのご飯、自然派ワイン、小さな蔵の日本酒。口コミ (2026年8〜10月、英語): ブリオッシュのクロスティーニの朝食、無花果と生ハム、半熟卵とハム、鱧のフライ、最中、要予約。',
      confidence: 'medium', sources: [TB, SITE, R + 'B521894989/', R + 'B536260975/', R + 'B536302242/', R + 'B536321773/', R + 'B536631015/', R + 'B536994500/', R + 'B537321809/', R + 'B537795986/', R + 'B538278448/', R + 'B538478178/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online (also for one); breakfast starts together at the booked time.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御池高田町500 ポポラーレ御池 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011766, 135.761801); cross-checked: GSI 京都府京都市中京区高田町500番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No priced menu read; dishes from Tabelog\'s shop text and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Hachi To. Bashi" — duck liver pâté in grilled yatsuhashi', '', 'Small plates', 'no', 'no', 'Tabelog.', 'hachi_to_bashi'),
      it('', '', 'Pork kakuni in Marsala', '', 'Small plates', 'ask', 'no', 'Tabelog.', 'marsala_kakuni'),
      it('', '', 'Morning set: crostini, soup, drink', '', 'Breakfast', 'no', 'no', '2026 reviews.', 'morning_set'),
    ] }, {
    cuisine: '夜はイタリアンの要素のある創作居酒屋: 京都の鴨レバーのパテを焼き八ッ橋で挟んだ「Hachi To. Bashi」、マルサラ酒の豚の角煮、鴨肉入りの餃子、果物の白和え、サルシッチャの麻婆豆腐、納豆ムースのご飯。赤、白、ロゼ、自然派ワインと小さな蔵の日本酒 (食べログ)・2026年の口コミ: 鱧のフライと万願寺唐辛子のサルサ、モッツァレラの餃子、フライドポテト、最中。小皿で1人4千〜5千円ほど・朝: ブリオッシュのクロスティーニにスープ、ドリンク、デザートのセット。キャラメリゼした無花果と生ハムと胡麻のマスカルポーネ、ハムと半熟卵。ボンボローニ (2026年の口コミ)',
    neighborhood: '烏丸近くの御池通。烏丸御池駅から徒歩3分',
    gf_detail: '要確認。朝はブリオッシュのクロスティーニ、夜は八ッ橋、最中、餃子、揚げ物。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。鴨レバーのパテ、生ハム、卵、チーズ、豚や魚の料理 (食べログ、2026年の口コミ)。',
    notes: '[創作居酒屋と朝ごはん・烏丸近くの御池] 人気イタリアン fudo の2号店。オープンキッチンを囲む12席のカウンターで、夜は鴨のパテを八ッ橋で挟んだ前菜やマルサラ酒の角煮など遊び心のある小皿と自然派ワイン、朝8時からは予約制のクロスティーニの朝食。夜は4千〜6千円ほど。いつも満席なので予約を。',
  });
}

save();
