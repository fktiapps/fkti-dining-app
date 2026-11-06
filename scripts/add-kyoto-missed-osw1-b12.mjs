// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 12.
//   + 百景 Hyakkei (late-night kissa above Tominokoji by Nishiki; open to 1:00; since 2019)
//   + りょうりや 御旅屋 Ryoriya Otaya (kappo by the Takase River, Toyama roots; Bib Gourmand per Tabelog; since 2011)
//   + 京都 いとおかし Kyoto Itookashi (machiya breakfast-and-lunch house of thick grilled salmon and pot rice; since 2025)
//   + KIZAHASHI (Kyoto cuisine restaurant of THE THOUSAND KYOTO hotel by Kyoto Station)
//   - とりの小路 やま岸 (26042618) and 肉料理かなえ (26031782): skipped (reasons below).
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26032862, 26018696);
//   from `next notable 200`, after the two skips: 26043440, 26031800. None is in data/kyoto.json: grep by name (百景/Hyakkei,
//   御旅屋/Otaya, いとおかし/Itookashi, KIZAHASHI) and address (西大文字町601, 天満町456, 永養寺町224, 東塩小路町570) found none.
//   Same-name count (Greg's Samboa ruling): 百景, 御旅屋 (one sister shop, Ryoriya Toki), いとおかし and KIZAHASHI each have
//   fewer than five same-name shops in the sources read.
//   Nearest existing pins: kyoto_saryo_yoshitsugu 16 m from Hyakkei (address_ja "…西大文字町603", a different lot);
//   kyoto_sushi_taizo 23 m from Otaya; kyr_gyoza_dokoro_takatsuji_s 143 m from Itookashi; kyr_honke_daiichi_asahi_hont 115 m
//   from KIZAHASHI. None within 3 m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042618', 'とりの小路 やま岸: a same-name chain (Greg, 2026-11-05: five or more same-name shops) whose group is already in data — the 京都やま岸 group site (https://tominokoji-yamagishi.com/, read 2026-11-05) lists 富小路やま岸, 呑小路やま岸, 二条やま岸, 祇園やま岸 and 富小路やま岸 麻布台ヒルズ, and kyoto_nominokoji_yamagishi also records 銀座 呑小路やま岸; with this shop that is seven やま岸 shops');
skip('26031782', '肉料理かなえ: moved — September 2026 reviews say the current shop (上樵木町500-5) stays open only until mid-October 2026 because of building issues, and that the new shop near Gosho-minami is planned for next spring; nothing open to list at this address now');

// ================================================================ 百景
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032862/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '01:00']);
  put({
    id: 'kyoto_hyakkei_tominokoji', name: '百景 (Hyakkei)', category: 'OMNI',
    lat: 35.004833, lng: 135.765065, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, tea, beer and two cakes, cheesecake and chocolate cake; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and tea suit; the cakes use dairy and egg (2026 reviews).',
    hours_raw: '14:00–1:00; closed Friday; hours may change (Tabelog). No reservations (Tabelog); often full in the evening, with a short wait or turned away (March–August 2026). 17 seats, counter and tables (Tabelog; March 2026). Smoking allowed at the tables — ashtrays on them — and often smoky (2026 reviews); Tabelog lists a heated-tobacco area. No cards; e-money and PayPay (Tabelog); one August 2026 diner paid cash. Second floor of 山下ビル on Tominokoji just south of Nishiki, behind a bar-like door; 5 min from Hankyu Kawaramachi Stn (Tabelog; March 2026). Opened 10 August 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominokoji just south of Nishiki Market — 5 min from Hankyu Kawaramachi Stn',
    cuisine: 'Night-time kissa: coffee, tea, cakes and beer in a dim room (2026 reviews) · Hyakkei blend ¥750 in three roasts — mild, medium, strong (the strong mixes three beans) · hot au lait ¥850, iced café latte, iced rooibos · cheesecake ¥600 (soft and rich, the favourite) and chocolate cake ¥600 · beer · beans named in reviews: the blend from Kissa Ashijima\'s roast, the au lait from Jikasei Coffee Garo (March 2026)',
    website: null, gmaps: gm('百景 京都 富小路'), menu_url: null,
    notes: '[Kissa · Nishiki, a coffee room open until 1 a.m.] Up a flight of stairs off Tominokoji by Nishiki Market and through a door that looks like a bar\'s, a dim room of concrete walls and yellow light that stays open until one in the morning — rare in Kyoto. Order the Hyakkei blend in mild, medium or strong (¥750) and the soft, rich cheesecake (¥600). It fills up from about nine at night, and smoking is allowed at the tables, so it can be hazy. Closed Friday.',
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 10 August 2019. A March 2026 reviewer thought the room might once have been a bar.',
      philosophy: null, specialty: 'Hyakkei blend in three roasts; cheesecake.',
      anecdotes: [
        { text: 'A March 2026 visitor at 22:00 on a holiday found it full but got in as others left.', source: R + 'B524514933/' },
        { text: 'An April 2026 reviewer asked what made the cheesecake so soft; the staff did not know.', source: R + 'B526738576/' },
        { text: 'A March 2026 visitor found the counter seats uncomfortable for a long stay and the medium roast sold out.', source: R + 'B525174580/' },
      ],
      japanese_sources_summary: '食べログ: 百景、喫茶店・カフェ、中京区富小路通錦小路下ル西大文字町601 山下ビル 2F、京都河原町駅から344m、14:00〜翌1:00、金曜休み、予約不可、17席、喫煙所 (加熱式たばこのみ)、カード不可、電子マネー・PayPay 可、2019年8月10日オープン。口コミ (2026年、英語): 夜遅くまで開いている喫茶、百景ブレンド750円 (マイルド・ミディアム・ストロング)、ホットオレ850円、チーズケーキ600円、チョコレートケーキ600円、ビール、テーブルで喫煙可、夜は満席が多い。',
      confidence: 'medium', sources: [TB, R + 'B524514933/', R + 'B525174580/', R + 'B525522556/', R + 'B526607823/', R + 'B526738576/', R + 'B528149870/', R + 'B528779299/', R + 'B529267052/', R + 'B533421296/', R + 'B533910269/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; smoking allowed at the tables; e-money and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通錦小路下ル西大文字町601 山下ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004833, 135.765065); cross-checked: GSI 京都府京都市中京区西大文字町601番地 (lot) 74m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524514933/', R + 'B529267052/'],
    price_note: 'No menu read; prices from March–April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hyakkei blend (mild, medium or strong)', '¥750', 'Coffee', '', '', 'March–April 2026.', 'hyakkei_blend'),
      it('', '', 'Hot au lait', '¥850', 'Coffee', '', 'no', 'March 2026.', 'hot_au_lait'),
      it('', '', 'Cheesecake', '¥600', 'Cakes', 'ask', 'no', 'March–April 2026.', 'cheesecake'),
      it('', '', 'Chocolate cake', '¥600', 'Cakes', 'ask', 'no', 'March–April 2026.', 'chocolate_cake'),
    ] }, {
    cuisine: '夜の喫茶: 薄暗い部屋でコーヒー、紅茶、ケーキ、ビール (2026年の口コミ)・百景ブレンド750円、マイルド、ミディアム、ストロングの3種の焙煎 (ストロングは3種の豆のブレンド)・ホットオレ850円、アイスカフェラテ、アイスルイボス・チーズケーキ600円 (やわらかく濃厚で人気) とチョコレートケーキ600円・ビール・口コミによれば、ブレンドは Kissa Ashijima の焙煎、オレは Jikasei Coffee Garo の豆 (2026年3月)',
    neighborhood: '錦市場のすぐ南の富小路。阪急河原町駅から徒歩5分',
    gf_detail: '要確認。コーヒー、紅茶、ビールと、チーズケーキとチョコレートケーキの2種。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのコーヒーや紅茶は合うが、ケーキは乳製品と卵を使う (2026年の口コミ)。',
    notes: '[喫茶・錦、深夜1時までのコーヒー] 錦市場近くの富小路から階段を上がり、バーのような扉を開けると、コンクリートの壁と黄色い灯りの薄暗い部屋。京都では珍しく深夜1時まで開いている。百景ブレンドはマイルド、ミディアム、ストロングから選べ (750円)、やわらかく濃厚なチーズケーキ (600円) と。夜9時ごろから満席になり、テーブルで喫煙できるので煙ることも。金曜休み。',
  });
}

// ================================================================ りょうりや 御旅屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26018696/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://otaya-kyoto.com/';
  const H = day(['17:00', '22:00']); const HW = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ryoriya_otaya', name: 'りょうりや 御旅屋 (Ryoriya Otaya)', category: 'OMNI',
    lat: 34.999944, lng: 135.768643, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kappo dishes with dashi, soy and miso seasonings and heshiko sauce; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on fish and dashi, with crab, hamo, sanma and sea bream (2025–2026 reviews).',
    hours_raw: 'Dinner 17:00–22:00, Tuesday–Sunday; lunch 12:00–14:00 on Saturday and Sunday only, booked by the day before; closed Monday and irregularly about twice a month (Tabelog). Reservations advised — easiest between 17:00 and 19:00 (Tabelog). An otoshi of ¥700; no service charge (Tabelog). 16 seats: counter, tables and private rooms for 2–6, some looking onto the Takase River (Tabelog; 2025–2026 reviews). Non-smoking, ashtray outside; cards accepted (Tabelog). By the Takase River south of Shijo, 8 min from Kawaramachi Stn, 7 min from Kiyomizu-Gojo Stn (Tabelog). Opened 25 August 2011 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: HW, 6: HW }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By the Takase River south of Shijo — 8 min from Kawaramachi Stn',
    cuisine: 'Kyoto kappo with Hokuriku threads — the owner\'s roots are in Toyama — beside the Takase River (Tabelog; November 2025) · omakase of eight dishes ¥8,800 (November 2025) or à la carte · a salad of 20 ingredients with jelly dressing; vegetables with heshiko sauce (November 2025) · autumn: a rare water plant and hairy crab in vinegar, hamo and matsutake pot, sanma grilled in a rich marinade with chestnut, taro and ginkgo, cod milt with ponzu, shrimp and anago steamed in domyoji, yuba and egg rice bowl (October 2025) · matsutake rice, crème brûlée, pear sorbet · sake from Kyoto and Toyama, e.g. Haneya, Kuzuryu (2025–2026 reviews)',
    website: SITE, gmaps: gm('りょうりや 御旅屋 京都'), menu_url: null,
    notes: '[Kappo · Takase River, Kyoto cooking with a Toyama accent] A quiet kappo south of Shijo whose counter and private rooms look out on the Takase River, opened in 2011 by an owner with roots in Toyama — the name recalls a rest-house of the Kaga lords. The eight-dish omakase (¥8,800 in November 2025) moves through the seasons: a 20-ingredient salad, vegetables with a heshiko sauce, hamo and matsutake in autumn, cod milt in winter, with sake from Kyoto and Toyama. Tabelog records eight straight years of a Bib Gourmand. Book ahead; dinner Tuesday–Sunday, lunch at weekends.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; roots in Toyama per a November 2025 review)'], origin: 'Toyama (November 2025 review).',
      background: 'Per a November 2025 review: opened on 25 August 2011; the name Otaya comes from a rest-house used by the Kaga lord for falconry and inspections, chosen for the owner\'s Toyama roots; the kitchen uses a traditional stove. Tabelog\'s introduction cites eight consecutive years of a Bib Gourmand and names a sister shop, Ryoriya Toki, opened on the Takase River at Takatsuji by Harada, who worked in Otaya\'s kitchen. The shop cleans the Takase River and releases fireflies each May (Tabelog).',
      philosophy: null, specialty: 'Seasonal omakase; heshiko-sauced vegetables.',
      anecdotes: [
        { text: 'A December 2025 diner noticed the owner explaining every dish carefully to guests from abroad, and found the bill surprisingly modest without alcohol.', source: R + 'B521157736/' },
        { text: 'An October 2025 regular on a fifth visit called a rare water plant with hairy crab — only four or five pieces from a stalk — the taste of the season.', source: R + 'B451908493/' },
      ],
      japanese_sources_summary: '食べログ: りょうりや 御旅屋、日本料理、下京区天満町456-2、阪急河原町駅から徒歩8分、京阪清水五条駅から徒歩7分、火〜日 17:00〜22:00、土日のみ昼12:00〜14:00 (前日までに予約)、月曜休み・月2回不定休、予約可 (17〜19時が比較的取りやすい)、突き出し700円、16席、個室 (2〜6人)、禁煙、カード可、2011年8月25日オープン、ビブグルマン8年連続、姉妹店 Ryoriya Toki (Takatsuji の高瀬川沿い、店主 Harada)、高瀬川の清掃と5月の蛍の放流。口コミ (2025〜2026年、英語): 店主は富山にゆかり、加賀藩の御旅屋に由来する店名、おまかせ8品8,800円、20種の野菜のサラダ、へしこのソース、鱧と松茸の鍋、さんま、白子ポン酢、湯葉と卵の丼、京都と富山の日本酒。',
      confidence: 'medium', sources: [TB, SITE, R + 'B451908493/', R + 'B515967104/', R + 'B516795141/', R + 'B517866341/', R + 'B521157736/', R + 'B522770969/', R + 'B524342564/', R + 'B526708950/', R + 'B535151395/', R + 'B536215836/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (easiest 17:00–19:00); the owner explains dishes to visitors; ¥700 otoshi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区天満町456-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.999944, 135.768643); cross-checked: GSI 京都府京都市下京区天満町456番地 (lot) 65m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516795141/', TB],
    price_note: 'No menu read; omakase price from a November 2025 review; otoshi from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Omakase, eight dishes', '¥8,800', 'Courses', 'ask', 'no', 'November 2025.', 'omakase_8'),
      it('', '', 'Otoshi', '¥700', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '高瀬川沿いの、北陸の味も重ねた京都の割烹。店主は富山にゆかり (食べログ、2025年11月)・おまかせ8品8,800円 (2025年11月) かアラカルト・20種の素材のサラダのジュレがけ、へしこのソースの野菜 (2025年11月)・秋: 珍しい水草と毛蟹の酢の物、鱧と松茸の鍋、栗、里芋、銀杏を添えたさんまの焼き物、白子ポン酢、海老と穴子の道明寺蒸し、湯葉と卵の丼 (2025年10月)・松茸ご飯、クレームブリュレ、梨のソルベ・京都と富山の日本酒、たとえば Haneya、Kuzuryu (2025〜2026年の口コミ)',
    neighborhood: '四条の南、高瀬川沿い。河原町駅から徒歩8分',
    gf_detail: '要確認。出汁、醤油、味噌、へしこのソースで仕立てる季節の割烹料理。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。コースは魚と出汁が中心で、蟹、鱧、さんま、鯛 (2025〜2026年の口コミ)。',
    notes: '[割烹・高瀬川、富山の香る京料理] 四条の南、カウンターと個室から高瀬川を望む静かな割烹。2011年に富山にゆかりのある店主が開き、店名は加賀藩の御旅屋に由来する。おまかせ8品 (2025年11月に8,800円) は季節で替わり、20種のサラダ、へしこのソースの野菜、秋は鱧と松茸、冬は白子、京都と富山の日本酒と。食べログによればビブグルマン8年連続。要予約、夜は火〜日、昼は週末のみ。',
  });
}

// ================================================================ 京都 いとおかし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043440/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '14:30']);
  put({
    id: 'kyoto_itookashi', name: '京都 いとおかし (Kyoto Itookashi)', category: 'OMNI',
    lat: 35.000037, lng: 135.75391, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled salted salmon with a choice of three seasonings, pot-cooked rice, clam soup and side dishes; the seasonings are not described for gluten (October 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set meals of grilled salmon, eel or sashimi with clam soup (October 2026 reviews).',
    hours_raw: '7:00–14:30, Monday–Saturday; closed Sunday; hours may change (Tabelog). Reservations only, through TableCheck; queues form before opening even with bookings; a 50-minute limit (Tabelog; October 2026). Breakfast at the counter; tables and an upstairs room for other slots (Tabelog; October 2026). A student set at the 7:00 slot ¥1,000 (October 2026). No service charge (Tabelog). Cards and PayPay (Tabelog). English menu (Tabelog). Smoking allowed per Tabelog. In a machiya on Takatsuji-dori east of Aburanokoji, about 10 min from Shijo Stn (Tabelog; October 2026). Opened 2 August 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji-dori east of Aburanokoji — 10 min from Shijo Stn',
    cuisine: 'Breakfast-and-lunch set-meal house built around a huge, thick fillet of grilled salted salmon, with three seasonings to choose (October 2026 reviews) · Kyoto grilled salmon set ¥2,500, with pot-cooked Kagoshima Natsuhonoka rice (free refills), clam soup, two side dishes and a dashi to pour over the last of the rice · student set at the 7:00 slot ¥1,000 (half a fillet and the collar) · sesame mackerel, amberjack sashimi, grilled eel, raw oysters, tamago kake gohan (October 2026 reviews)',
    website: null, gmaps: gm('京都 いとおかし 高辻'), menu_url: null,
    notes: '[Set meals · Takatsuji, the giant grilled salmon breakfast] A machiya with an old tiled kitchen where a fillet of salted salmon so thick it could feed three is grilled on display, then served with glossy pot-cooked rice (refills offered again and again), clam soup and sides — ¥2,500 in October 2026, finished with a pour of dashi. Students eat for ¥1,000 at the 7:00 slot. Bookings only, via TableCheck, and they go fast; even so there is a queue at opening and a 50-minute limit. Lively, kind staff; many visitors from abroad. Monday–Saturday 7:00–14:30.',
    chef_bio: { chef_name: null, roles: ['Operator not named in the sources'], origin: null,
      background: 'Tabelog gives the opening as 2 August 2025. October 2026 reviewers mention it being featured on TV and video sites.',
      philosophy: null, specialty: 'Thick grilled salted salmon with pot-cooked rice.',
      anecdotes: [
        { text: 'An October 2026 diner, a little hungover, chose the Kyoto grilled salmon (¥2,500) and found the fillet a battle to finish — enough, it seemed, for three.', source: R + 'B537455317/' },
        { text: 'An October 2026 student took the ¥1,000 student set at 7:00 — half a fillet plus the collar — and was impressed by the tea served first.', source: R + 'B536730421/' },
        { text: 'An October 2026 diner wished for more time than the 50-minute limit allowed.', source: R + 'B538326188/' },
      ],
      japanese_sources_summary: '食べログ: 京都 いとおかし、食堂、下京区高辻通油小路東入永養寺町224、大宮駅から605m、月〜土 7:00〜14:30、日曜休み、予約は TableCheck のみ、朝はカウンターのみ (テーブル席と2階席もある)、サービス料・チャージなし、カード・PayPay 可、英語メニュー、喫煙可、2025年8月2日オープン。口コミ (2026年10月、英語): 分厚い焼き鮭の定食 (味付けは3種から)、京都焼き鮭定食2,500円、Kagoshima の Natsuhonoka の土鍋ご飯 (おかわり自由)、しじみの汁、最後に出汁、7時の学生定食1,000円、ごま鯖、カンパチの刺身、うなぎ、生牡蠣、卵かけご飯、50分制、町家の昔のタイルの台所。',
      confidence: 'medium', sources: [TB, R + 'B536730421/', R + 'B536874592/', R + 'B536892920/', R + 'B537197932/', R + 'B537319396/', R + 'B537455317/', R + 'B538180885/', R + 'B538247879/', R + 'B538326188/', R + 'B538396794/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); book on TableCheck; 50-minute seating; many visitors from abroad.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通油小路東入永養寺町224',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (35.000037, 135.753910); cross-checked: GSI 京都府京都市下京区永養寺町224番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537455317/', R + 'B536730421/'],
    price_note: 'No menu read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyoto grilled salmon set (pot rice, clam soup, sides)', '¥2,500', 'Set meals', 'ask', 'no', 'October 2026.', 'yaki_shake_teishoku'),
      it('', '', 'Student set (7:00 slot)', '¥1,000', 'Set meals', 'ask', 'no', 'October 2026.', 'student_set'),
    ] }, {
    cuisine: '分厚く大きな塩鮭の焼き魚を中心にした朝と昼の定食の店。味付けは3種から (2026年10月の口コミ)・京都焼き鮭定食2,500円: Kagoshima の「Natsuhonoka」の土鍋ご飯 (おかわり自由)、しじみの汁、副菜2品、最後のご飯に出汁をかけて・7時の枠の学生定食1,000円 (半身とかま)・ごま鯖、カンパチの刺身、うなぎの焼き物、生牡蠣、卵かけご飯 (2026年10月の口コミ)',
    neighborhood: '油小路の東の高辻通。四条駅から徒歩10分',
    gf_detail: '要確認。3種の味付けから選ぶ塩鮭の焼き魚、土鍋ご飯、しじみの汁、副菜。味付けのグルテンについての情報はない (2026年10月の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼き鮭、うなぎ、刺身の定食にしじみの汁 (2026年10月の口コミ)。',
    notes: '[定食・高辻、巨大な焼き鮭の朝ごはん] 昔のタイルの台所が残る町家で、3人で分けられそうなほど分厚い塩鮭を目の前で焼き、つやつやの土鍋ご飯 (何度もおかわりをすすめてくれる)、しじみの汁、副菜と出す。2026年10月に2,500円、最後は出汁をかけて。学生は7時の枠なら1,000円。予約は TableCheck のみですぐ埋まり、それでも開店前に行列、50分制。明るく親切なスタッフ、海外からの客も多い。月〜土 7時〜14時半。',
  });
}

// ================================================================ KIZAHASHI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26031800/'; const R = TB + 'dtlrvwlst/';
  const B = day(['07:00', '10:00'], ['11:30', '14:30'], ['17:30', '20:00']);
  put({
    id: 'kyoto_kizahashi_thousand', name: 'KIZAHASHI', category: 'OMNI',
    lat: 34.986501, lng: 135.761272, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Kyoto courses with dashi, soy and miso (e.g. hoba-yaki with mushroom sauce); no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses use dashi and include fish or meat (2026 reviews).',
    hours_raw: 'Breakfast 7:00–10:00, lunch 11:30–14:30, dinner 17:30–20:00; closed Tuesday except holidays; hours may change — check the official site (Tabelog). Reservations taken; cancellations from two days before are charged 100% (Tabelog). 15% service charge on the pre-tax bill (Tabelog). 60 seats including a counter, sunken seats and private rooms for 2–12; parties up to 6 at a table; non-smoking, smoking room outside; wheelchair access (Tabelog). Cards, e-money and QR payments; hotel parking for 50 cars (¥800 per 30 min) (Tabelog). No dress code, though sandals may not be allowed (September 2026). Second floor of THE THOUSAND KYOTO, 2 min east of the JR Kyoto Stn central exit (underground exit 5) (Tabelog).',
    hours: { 0: B, 2: B, 3: B, 4: B, 5: B, 6: B }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'In front of Kyoto Station (THE THOUSAND KYOTO, 2F) — 2 min from the central exit',
    cuisine: 'Kyoto cuisine in a hotel: seasonal courses with Kyoto vegetables, at lunch and dinner, and breakfast (Tabelog; 2026 reviews) · dinner courses from ¥10,000, e.g. the autumn course "Kaze": appetizer, matsutake and autumn-salmon soup, two kinds of sashimi, hoba-yaki of kinmedai, swordfish, sweet potato and lotus root, mushroom sauce, mushroom rice with refills, dessert (September 2026) · drink pairing with a sommelier, ¥10,000 course with small pours of rare sake and wine (September 2026) · seasoned rice, refillable (2026 reviews)',
    website: null, gmaps: gm('KIZAHASHI THE THOUSAND KYOTO'), menu_url: null,
    notes: '[Kyoto cuisine · Kyoto Station, a hotel restaurant for seasonal courses] The Japanese restaurant on the second floor of THE THOUSAND KYOTO, a two-minute walk from the station, with a calm, spacious room, a counter and private rooms. Seasonal courses start at about ¥10,000 — in autumn 2026 a matsutake soup, hoba-yaki with kinmedai and a mushroom rice you can have refilled — with a sommelier pairing of rare sake and wine. Breakfast and lunch too. Reviewers call it refined and reliable for business meals and family occasions; one found it very much "hotel Japanese". 15% service; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Restaurant of THE THOUSAND KYOTO hotel (Tabelog address); chefs not named'], origin: null,
      background: 'Tabelog lists it as a hotel restaurant on the second floor of THE THOUSAND KYOTO, with a 15% service charge from 1 April 2025.',
      philosophy: null, specialty: 'Seasonal Kyoto courses; refillable seasoned rice.',
      anecdotes: [
        { text: 'A July 2026 diner chose it for a meeting between a partner and parents and found the service warm and elegant.', source: R + 'B532118903/' },
        { text: 'A September 2026 diner, worried about portions, took the smallest course (¥10,000) and was too full for a second helping of the mushroom rice.', source: R + 'B535401967/' },
        { text: 'A September 2026 reviewer described the food as authentic but very much the Japanese cuisine of a hotel.', source: R + 'B535264254/' },
      ],
      japanese_sources_summary: '食べログ: KIZAHASHI、日本料理、下京区東塩小路町570 THE THOUSAND KYOTO 2F、JR京都駅中央口から東へ徒歩約2分 (地下通路5番出口)、朝7:00〜10:00、昼11:30〜14:30、夜17:30〜20:00、火曜休み (祝日を除く)、予約可、2日前から100%のキャンセル料、サービス料15% (2025年4月1日から)、60席、個室 (2〜8人、最大12人)、禁煙 (店外に喫煙室)、車いす可、カード・電子マネー・QR 可、駐車場50台。口コミ (2026年7〜10月、英語): 季節のコース (秋のコース「Kaze」、松茸と秋鮭の椀、朴葉焼き、きのこご飯)、1万円のコース、ソムリエのペアリング、おかわりできる炊き込みご飯、サンダル不可のことも、ホテルの和食。',
      confidence: 'medium', sources: [TB, R + 'B451154133/', R + 'B531612748/', R + 'B532118903/', R + 'B532515255/', R + 'B535264254/', R + 'B535401967/', R + 'B535449136/', R + 'B537150566/', R + 'B538273993/', R + 'B538307148/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant by Kyoto Station; 15% service; sandals may not be allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町570 THE THOUSAND KYOTO 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.986501, 135.761272); cross-checked: GSI 京都府京都市下京区東塩小路町570番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535401967/', R + 'B538273993/'],
    price_note: 'No menu read; prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner course (smallest)', '¥10,000', 'Courses', 'ask', 'no', 'September 2026; 15% service extra.', 'course_10000'),
      it('', '', 'Drink pairing', '¥10,000', 'Drinks', '', '', 'September 2026.', 'pairing'),
    ] }, {
    cuisine: 'ホテルの京料理: 京野菜を使った季節のコースを昼と夜に、朝食も (食べログ、2026年の口コミ)・夜のコースは1万円から、たとえば秋のコース「Kaze」: 先付、松茸と秋鮭の椀、お造り2種、金目鯛、カジキ、さつまいも、蓮根の朴葉焼き、きのこのあん、おかわりできるきのこご飯、デザート (2026年9月)・ソムリエのペアリング、珍しい日本酒やワインを少量ずつの1万円のコース (2026年9月)・おかわりできる炊き込みご飯 (2026年の口コミ)',
    neighborhood: '京都駅前 (THE THOUSAND KYOTO 2階)。中央口から徒歩2分',
    gf_detail: '要確認。出汁、醤油、味噌の季節の京料理のコース (たとえば朴葉焼きのきのこのあん)。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。コースは出汁を使い、魚か肉が入る (2026年の口コミ)。',
    notes: '[京料理・京都駅、ホテルの季節のコース] 京都駅から2分の THE THOUSAND KYOTO の2階にある日本料理店。落ち着いた広い店内にカウンターと個室。季節のコースは約1万円からで、2026年秋は松茸の椀、金目鯛の朴葉焼き、おかわりできるきのこご飯。ソムリエが珍しい日本酒やワインを合わせてくれる。朝食と昼食も。上品で接待や家族の席に安心という声、いかにもホテルの和食という声も。サービス料15%、火曜休み。',
  });
}

save();
