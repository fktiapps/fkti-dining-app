// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 64.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - マッチョバー — too thin to verify (one 2025–26 review, a short one)
//   + バー ラッケンブース BAR Luckenbooth (Pontocho whisky bar, about 700 bottles; since 2013)
//   + 居酒屋アニル 京都河原町木屋町 Izakaya Aniru (Nepalese and Newar izakaya on a 6th floor above Kiyamachi; since 2023)
//   - ささりんどう — a hotel: the only dining is the guests' breakfast (June 2025 review)
//   - 木屋町酒場 魚ます — closed (Tabelog marks it permanently closed)
//   - 大王チーズ 10円パン 京都店 — chain (株式会社 B.N: six shops by 2023 in Tokyo, Osaka and Okinawa, plus Kyoto)
//   + Bruno (sausage dining: homemade sausages, charcuterie and German food; since 2012)
//   - 笑座 — too thin to verify (one 2025–26 review; no address lot, no detail beyond two skewers)
//   - 秘密結社ショッカー — no 2025–26 review
//   + 鉄板焼DINING YANAGI Teppanyaki Dining Yanagi (teppanyaki of Kumamoto 延寿牛 in a converted machiya; since 2024)
//   Same-name counts first (data and queue-status.jsonl): none for any brand; "Macho" in Osaka data is a burger
//   name, unrelated. No earlier rulings. None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: Luckenbooth 「Charge¥300」; YANAGI
//   「アラカルトの場合、お通し代を頂戴致します。」 (an otoshi charge for à la carte, not a service fee);
//   マッチョバー 「入場料500円」 (skipped); アニル and Bruno have no section.
//   Pins (checked against main): all four ≥ 6 m from every other record; no offsets.
//   Ramen: YANAGI ends some meals with an "original ramen" (September 2025) — a teppanyaki shop, no ramen block.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-64');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026025', 'too thin to verify: one 2025–26 review (March 2026), a few lines about the muscled staff; entrance fee 500 yen (Tabelog 「入場料500円」)');
skip('26022119', 'a hotel, not a restaurant: the only dining is the breakfast included for guests (June 2025 review)');
skip('26033141', 'closed: Tabelog marks 木屋町酒場 魚ます permanently closed');
skip('26039183', 'chain: 大王チーズ 10円パン (株式会社 B.N) — six shops by 2023 (Shibuya, Harajuku, Shin-Okubo, two in Dotonbori, Okinawa), plus this Kyoto shop');
skip('26001407', 'too thin to verify: one 2025–26 review (March 2026) naming two skewers; the address has no lot number');
skip('26000429', 'no 2025–26 review');

// ================================================================ バー ラッケンブース
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022377/'; const R = TB + 'dtlrvwlst/';
  const D = day(['19:00', '28:00']);
  put({
    id: 'kyoto_bar_luckenbooth', name: 'バー ラッケンブース (BAR Luckenbooth)', category: 'OMNI',
    lat: 35.007112, lng: 135.770972, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A whisky bar with little food beyond smoked nuts (November 2025 review).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Whisky and gin; food is limited to snacks such as smoked nuts (November 2025 review).',
    hours_raw: 'Tue–Sun 19:00–04:00; closed Mondays (Tabelog). Bookings taken (Tabelog). Cover charge ¥300 (Tabelog Japanese original 「Charge¥300」). Cards, e-money and QR accepted (Tabelog). 10 seats; smoking allowed (Tabelog; November 2025 review). Down a small alley in Pontocho, 5 min from Keihan Sanjo (Tabelog; April 2023 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, south of Sanjo — 5 min from Sanjo Stn',
    cuisine: 'Whisky bar of single malts, many rare: about 700 bottles (September 2022); Kilchoman, a Secret Highland 2010 13-year, Setouchi, a 1998 26-year Islay sherry cask at 56.2%, Talisker Wild Blue, several thousand yen a shot for the rarest (November 2025); Laphroaig cask strength and a BBR Ben Nevis 1997 (October 2025); a Kyoto "Ramune Gin" (February 2026); smoked nuts (2025–26 reviews)',
    website: 'https://barluckenbooth.com/', gmaps: gm('BAR Luckenbooth 先斗町'), menu_url: null,
    notes: '[Whisky bar · Pontocho] A ten-seat wooden bar down a Pontocho alley, every shelf and the counter lined with single malts — hundreds of bottles, many rare. Late hours; smoking allowed. About ¥3,000–4,000, more for the rare bottles.',
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed)'], origin: null,
      background: 'Opened 9 June 2013 (Tabelog). The master spoke of about 700 bottles (September 2022 review). The owner is a whisky enthusiast who posts new arrivals on social media (November 2025 and February 2026 reviews).',
      philosophy: 'Single malts for everyone from beginners to connoisseurs (Tabelog).',
      specialty: 'Rare single-malt whisky.',
      anecdotes: [
        { text: 'A November 2025 visitor who had followed the new arrivals online for a long time tried five rare whiskies; the owner recommended drinking them straight rather than as highballs.', source: R + 'B517697811/' },
        { text: 'A February 2026 visitor came after dinner in Pontocho and was steered by the master to a Kyoto-made gin that tasted like Ramune soda.', source: R + 'B522369474/' },
        { text: 'An October 2025 visitor picked a BBR Ben Nevis 1997 and a Laphroaig cask strength while trading whisky trivia.', source: R + 'B515701877/' },
      ],
      japanese_sources_summary: '食べログ: BAR Luckenbooth、バー、中京区先斗町通三条下ル材木町187-2、京阪三条駅から徒歩5分、火〜日 19:00〜翌4:00、月曜休み、予約可、チャージ300円、カード・電子マネー・QR 可、10席、喫煙可、2013年6月9日オープン、シングルモルトの品揃え (紹介文、英訳)。口コミ (2018〜2026年、英語): 約700本 (2022年9月)、Kilchoman、Setouchi、Talisker Wild Blue など希少なボトル、ストレートを勧める店主 (2025年11月)、BBR Ben Nevis 1997 (2025年10月)、京都の Ramune Gin (2026年2月)、つまみはスモークナッツ程度、喫煙可。',
      confidence: 'medium', sources: [TB, 'https://barluckenbooth.com/', R + 'B360599112/', R + 'B448037936/', R + 'B453948083/', R + 'B459685488/', R + 'B464644314/', R + 'B515701877/', R + 'B517697811/', R + 'B522369474/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter bar; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル材木町187-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026; own website live.' },
    pin_source: `Tabelog ${TB} (35.007112, 135.770972); cross-checked: GSI 京都府京都市中京区材木町187番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B517697811/'],
    price_note: 'Cover charge from Tabelog; rare whiskies "several thousand yen a shot" (November 2025 review).', last_checked: TODAY, items: [
      it('', '', 'Cover charge', '¥300', 'Charge', 'ask', 'ask', 'Tabelog.', 'charge'),
      it('', '', 'Rare single malt (a shot)', '', 'Whisky', 'ask', 'ask', 'November 2025 review: several thousand yen each.', 'rare_malt'),
      it('', '', 'Smoked nuts', '', 'Snacks', 'ask', 'ask', 'November 2025 review.', 'smoked_nuts'),
    ] }, {
    cuisine: 'シングルモルト中心のウイスキーバー、希少なボトルも多い: 約700本 (2022年9月)、Kilchoman、Secret Highland の2010年13年、Setouchi、Islay の1998年26年シェリー樽56.2%、Talisker Wild Blue、希少なものは1杯数千円 (2025年11月)、Laphroaig のカスクストレングスと BBR Ben Nevis 1997 (2025年10月)、京都の Ramune Gin (2026年2月)、スモークナッツ (2025〜26年の口コミ)',
    neighborhood: '先斗町、三条の南。三条駅から徒歩5分',
    gf_detail: '要確認。ウイスキーバーで、食べ物はスモークナッツ程度 (2025年11月の口コミ)。',
    vegan_detail: '要確認。ウイスキーとジン。食べ物はスモークナッツなどのつまみのみ (2025年11月の口コミ)。',
    notes: '[ウイスキーバー・先斗町] 先斗町の路地の木のぬくもりある10席のバー。棚もカウンターもシングルモルトで埋まり、数百本の中に希少なボトルも多い。深夜まで、喫煙可。3,000〜4,000円ほど、希少なボトルはそれ以上。',
  });
}

// ================================================================ 居酒屋アニル 京都河原町木屋町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040383/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '28:00']);
  put({
    id: 'kyoto_izakaya_aniru_kiyamachi', name: '居酒屋アニル 京都河原町木屋町 (Izakaya Aniru)', category: 'OMNI',
    lat: 35.007206, lng: 135.770704, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curries come with rice as well as naan, but naan, momo and fried dishes are wheat (2024–25 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: the restaurant says it offers many 100% vegan dishes without egg, dairy or meat, some with soy meat (Tabelog, restaurant-provided); a Nepalese-style vegan yakisoba (December 2025 review). Ask about shared fryers and ghee.',
    hours_raw: 'Daily 17:00–04:00 (L.O. 03:30); closed 1 January 2026 (Tabelog). Lunch sets were served in February 2024 (review). Bookings taken; online bookings require one drink and one dish each; private hire possible outside opening hours (Tabelog). Cards, e-money and QR accepted (Tabelog). 100 seats, private rooms; smoking area (Tabelog). Lists vegan, vegetarian and halal options; English menu and English-speaking staff (Tabelog). 6th floor, small lift at the back of the building, about 6 min from Kawaramachi or Sanjo (Tabelog; February 2024 and December 2025 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, south of Sanjo — 6 min from Kawaramachi or Sanjo Stn',
    cuisine: 'Nepalese and Newar izakaya: chatamari, spinach-and-cheese momo, roksi spirit (March 2024), papad, fried gizzards, a Newar platter (September 2024), butter chicken and egg keema curry with naan (February 2024), chicken curry ¥1,155, naan ¥460, Nepalese-style vegan yakisoba ¥1,100, Aniru salad ¥840 (December 2025); a ¥2,480 all-you-can-eat course of ten dishes (December 2025) and all-you-can-drink plans (2024–26 reviews)',
    website: null, gmaps: gm('居酒屋アニル 京都河原町木屋町'), menu_url: null,
    notes: '[Nepalese izakaya · Kiyamachi] A big 6th-floor izakaya above Kiyamachi decorated with Newar carvings, with views toward the Kamo River: Newar dishes such as chatamari and momo, curries and naan, vegan and halal options, and cheap all-you-can-eat and drink courses until 4 am. About ¥2,000–3,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 10 November 2023 (Tabelog). A Nepalese member of staff greeted a March 2024 diner; the entrance sculpture and walls follow Newar architecture and carving (March 2024 review). The owner speaks good Japanese (September 2024 review).',
      philosophy: null,
      specialty: 'Newar dishes and Nepalese curries.',
      anecdotes: [
        { text: 'A March 2024 diner found the Newar carvings at the 6th-floor entrance reminiscent of Patan and Bhaktapur, and tried spinach-and-cheese momo and a mixed chatamari.', source: R + 'B482417857/' },
        { text: 'A September 2024 company dinner booked a three-hour all-you-can-drink course and recommended the east-side seats for the night view of the Kamo River.', source: R + 'B492519218/' },
        { text: 'A December 2025 diner watched two large banquets served with ease in the packed room.', source: R + 'B518428138/' },
        { text: 'On a Sunday night in August 2025 a staff member waited outside to guide guests to the hard-to-find entrance.', source: R + 'B513427151/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋アニル 京都河原町木屋町、ネパール料理・居酒屋・野菜料理、中京区三条下る材木町186 とりたねビル6F、阪急京都河原町駅1A出口・京阪三条駅6番出口から徒歩約6分、毎日 17:00〜翌4:00 (L.O. 3:30)、2026年1月1日休み、予約可 (ネット予約は1人1ドリンク1フード)、カード・電子マネー・QR 可、100席、個室、喫煙所あり、ヴィーガン・ベジタリアン・ハラールのメニュー、英語メニューと英語対応、2023年11月10日オープン。店の説明 (英訳): 卵・乳製品・肉を使わない100%ヴィーガンの料理が多く、大豆ミートも。口コミ (2024〜2026年、英語): chatamari、ほうれん草とチーズの momo、roksi、ネワールの盛り合わせ、チキンカレー1,155円、ナン460円、ヴィーガン焼きそば1,100円、2,480円の食べ放題コース、鴨川の夜景。',
      confidence: 'medium', sources: [TB, R + 'B479093259/', R + 'B482417857/', R + 'B492519218/', R + 'B503745118/', R + 'B513427151/', R + 'B518428138/', R + 'B519097532/', R + 'B527592040/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); many overseas guests (September 2024 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条下る材木町186 とりたねビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (1 January 2026 closure noted); reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.007206, 135.770704); cross-checked: GSI 京都府京都市中京区材木町186番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518428138/', R + 'B519097532/', R + 'B482417857/'],
    price_note: 'Prices from December 2025 reviews, except the momo and chatamari (March 2024).', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat course (ten dishes)', '¥2,480', 'Courses', 'ask', 'ask', 'December 2025 review.', 'aye_course'),
      it('', '', 'Chicken curry', '¥1,155', 'Curry', 'ask', 'no', 'December 2025 review.', 'chicken_curry'),
      it('', '', 'Naan', '¥460', 'Curry', 'no', 'ask', 'December 2025 review.', 'naan'),
      it('', '', 'Nepalese-style vegan yakisoba', '¥1,100', 'Noodles', 'no', 'ask', 'December 2025 review.', 'vegan_yakisoba'),
      it('', '', 'Aniru salad', '¥840', 'Salads', 'ask', 'ask', 'December 2025 review.', 'aniru_salad'),
      it('', '', 'Spinach and cheese momo', '¥1,210', 'Newar', 'no', 'no', 'March 2024 review.', 'momo'),
      it('', '', 'Mixed chatamari', '¥935', 'Newar', 'ask', 'no', 'March 2024 review.', 'chatamari'),
    ] }, {
    cuisine: 'ネパールとネワールの料理の居酒屋: chatamari、ほうれん草とチーズの momo、roksi (2024年3月)、papad、砂肝の揚げ物、ネワールの盛り合わせ (2024年9月)、バターチキンと卵のキーマカレーにナン (2024年2月)、チキンカレー1,155円、ナン460円、ネパール風のヴィーガン焼きそば1,100円、Aniru salad 840円 (2025年12月)、10品の2,480円食べ放題コース (2025年12月) と飲み放題 (2024〜26年の口コミ)',
    neighborhood: '木屋町、三条の南。河原町駅・三条駅から徒歩6分',
    gf_detail: '要確認。カレーはご飯でも食べられるが、ナン、momo、揚げ物は小麦 (2024〜25年の口コミ)。',
    vegan_detail: 'ヴィーガンの選択肢あり: 卵・乳製品・肉を使わない100%ヴィーガンの料理が多く、大豆ミートも使う (食べログの店の説明)。ネパール風のヴィーガン焼きそば (2025年12月の口コミ)。揚げ油やギーは要確認。',
    notes: '[ネパール居酒屋・木屋町] 木屋町のビル6階、ネワールの彫刻で飾られた大きな居酒屋で鴨川方面の眺めも。chatamari や momo などのネワール料理、カレーとナン、ヴィーガンやハラールの料理、安い食べ放題・飲み放題を朝4時まで。2,000〜3,000円ほど。',
  });
}

// ================================================================ Bruno
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26021597/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_bruno_sausage_dining', name: 'Bruno (Sausage Dining Bruno)', category: 'OMNI',
    lat: 35.006323, lng: 135.765321, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sausages, ham and smoked meats may suit, but fillers and binders are unknown, and pizza, pasta, flammkuchen and pretzel are wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sausage and charcuterie restaurant (Tabelog; 2025–26 reviews).',
    hours_raw: 'Mon, Tue, Wed, Fri, Sat 17:00–23:00 (food L.O. 22:00, drinks 22:30); Sun 16:00–22:00 (food L.O. 21:00, drinks 21:30); closed Thursdays (Tabelog). Bookings taken (Tabelog). Cards, e-money and QR accepted (Tabelog). 24 seats; heated-tobacco area only; English menu (Tabelog). On Takoyakushi, 5 min from Kawaramachi or Karasuma (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: day(['16:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takoyakushi, between Kawaramachi and Karasuma — 5 min from either',
    cuisine: 'Homemade sausages, smoked meats and German food: pork, chicken and duck sausages (April 2025), Kujo green-onion sausage (July 2025), Weißwurst, Berlin currywurst, goulash with Kyoto vegetables, Kartoffelsalat, cucumber salad (August 2025), bratwurst, Obazda with pretzel, Grünkohl (January 2026), house ham, lamb hot pot, flammkuchen (2025), spicy sausage and a smoked-meat appetizer (June 2026), pizza and pasta (September 2026); charcuterie; Paulaner, Schneider Weisse and other German beers, wine (2025–26 reviews)',
    website: null, gmaps: gm('ソーセージダイニング Bruno 京都'), menu_url: null,
    notes: '[Sausages & German · Takoyakushi] A small, cosy dining bar making its own sausages and smoked meats with techniques learned in Germany — Weißwurst, currywurst, bratwurst, charcuterie — with German beers, plus pizza and pasta. About ¥3,000–6,000.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 16 December 2012 (Tabelog). Homemade sausages and smoked dishes use techniques learned in Germany (Tabelog). The owner makes the bratwurst (January 2026 review). Run by two people (September 2026 review).',
      philosophy: null,
      specialty: 'Homemade sausages and charcuterie.',
      anecdotes: [
        { text: 'A diner who had lived in Germany for six years (January 2026) rated the owner\'s bratwurst a match for a German butcher\'s, and found the food lighter and less salty than in Germany; about ¥10,000 for two.', source: R + 'B520532560/' },
        { text: 'When the merguez a diner had come for was off the menu in April 2025, the master offered a spiced lamb patty instead.', source: R + 'B505227505/' },
        { text: 'A June 2026 diner found the spicy sausage really hot and the owner warm, with a great smile.', source: R + 'B529882990/' },
        { text: 'A September 2026 diner noted the slow service of a two-person team but found the pizza and pasta worth the wait.', source: R + 'B536203658/' },
      ],
      japanese_sources_summary: '食べログ: Bruno、イタリアン・バル・ドイツ料理、中京区蛸薬師通油屋町146、阪急河原町駅・烏丸駅から徒歩5分、月・火・水・金・土 17:00〜23:00 (L.O. 料理22:00・ドリンク22:30)、日 16:00〜22:00、木曜休み、予約可、カード・電子マネー・QR 可、24席、加熱式たばこのみ喫煙可、英語メニュー、2012年12月16日オープン、ドイツで学んだ技術の自家製ソーセージと燻製、シャルキュトリー (紹介文、英訳)。ぐるなび: ソーセージダイニング Bruno。口コミ (2025〜2026年、英語): 豚・鶏・鴨のソーセージ、Kujo ねぎのソーセージ、Weißwurst、Currywurst、店主が作るBratwurst、Grünkohl、自家製ハム、ピザとパスタ、二人で営業。',
      confidence: 'medium', sources: [TB, 'https://r.gnavi.co.jp/k2u5a00b0000/', R + 'B505201986/', R + 'B505227505/', R + 'B507811752/', R + 'B510297219/', R + 'B512553423/', R + 'B520532560/', R + 'B521976878/', R + 'B529882990/', R + 'B536203658/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通油屋町146',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006323, 135.765321); cross-checked: GSI 京都府京都市中京区油屋町146番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512553423/', R + 'B520532560/'],
    price_note: 'No item prices found; reviews give ¥3,000–6,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Homemade bratwurst', '', 'Sausages', 'ask', 'no', 'January 2026 review.', 'bratwurst'),
      it('', '', 'Weißwurst', '', 'Sausages', 'ask', 'no', 'August 2025 review.', 'weisswurst'),
      it('', '', 'Berlin currywurst', '', 'Sausages', 'ask', 'no', 'August 2025 review.', 'currywurst'),
      it('', '', 'Flammkuchen', '', 'Plates', 'no', 'no', '2025 review.', 'flammkuchen'),
    ] }, {
    cuisine: '自家製ソーセージ、燻製、ドイツ料理: 豚・鶏・鴨のソーセージ (2025年4月)、Kujo ねぎのソーセージ (2025年7月)、Weißwurst、Berlin の Currywurst、京都の野菜のグーラッシュ、Kartoffelsalat、きゅうりのサラダ (2025年8月)、Bratwurst、Obazda とプレッツェル、Grünkohl (2026年1月)、自家製ハム、ラム肉の鍋、Flammkuchen (2025年)、辛いソーセージと燻製の前菜 (2026年6月)、ピザとパスタ (2026年9月)、シャルキュトリー、Paulaner や Schneider Weisse などのドイツビール、ワイン (2025〜26年の口コミ)',
    neighborhood: '蛸薬師通、河原町と烏丸の間。どちらからも徒歩5分',
    gf_detail: '要確認。ソーセージ、ハム、燻製は合う可能性があるが、つなぎは不明。ピザ、パスタ、Flammkuchen、プレッツェルは小麦 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ソーセージとシャルキュトリーの店 (食べログ、2025〜26年の口コミ)。',
    notes: '[ソーセージとドイツ料理・蛸薬師] ドイツで学んだ技術でソーセージや燻製を手作りする小さなダイニングバー。Weißwurst、Currywurst、Bratwurst、シャルキュトリーにドイツビール、ピザやパスタも。3,000〜6,000円ほど。',
  });
}

// ================================================================ 鉄板焼DINING YANAGI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041715/'; const R = TB + 'dtlrvwlst/';
  const TI = 'https://tabiiro.jp/gourmet/s/316463-kyoto-yanagi/';
  const L = day(['12:00', '13:30'], ['17:00', '22:30']); const N = day(['17:00', '22:30']);
  put({
    id: 'kyoto_teppanyaki_dining_yanagi', name: '鉄板焼DINING YANAGI (Teppanyaki Dining Yanagi)', category: 'OMNI',
    lat: 35.00265, lng: 135.764038, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steak and grilled seafood may suit, but sauces (demi-glace), the beef cutlet, curry and ramen are not (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a vegan menu, with vegetables from contracted Kyoto farmers (restaurant-provided); no review describes a vegan dish.',
    hours_raw: 'Mon, Wed, Fri 12:00–13:30 (L.O. 13:00) and 17:00–22:30; Tue, Thu, holidays 17:00–22:30; Sat 17:30–22:30; L.O. 22:00; closed Sundays and the day after a holiday (Tabelog). Tabiiro (undated) gives lunch 11:30–14:00 and dinner 17:30–23:00. Bookings taken (Tabelog). Otoshi charge for à la carte (Tabelog Japanese original 「アラカルトの場合、お通し代を頂戴致します。」). Cards and e-money; no QR (Tabelog). 12 counter seats; non-smoking; children welcome; English menu (Tabelog). 5 min from Karasuma (Tabelog).',
    hours: { 0: L, 1: N, 2: L, 3: N, 4: L, 5: day(['17:30', '22:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, south-east — 5 min from Karasuma Stn',
    cuisine: 'Teppanyaki with a Kyoto-Chinese touch: steak of 延寿牛, a Kumamoto red-wagyu raised by 原田畜産 (Tabiiro); sirloin steak, yukhoe (October 2026), Ise lobster and abalone, beef cutlet with demi-glace, an original ramen to finish (September 2025), seasonal vegetables and seafood; weekday lunch of beef curry or beef stew (April 2025) (2025–26 reviews)',
    website: null, gmaps: gm('鉄板焼DINING YANAGI 京都'), menu_url: null,
    notes: '[Teppanyaki · Shijo-Karasuma] A 12-seat teppanyaki counter in a renovated machiya, grilling Kumamoto red wagyu, lobster and abalone with Kyoto-Chinese touches and an original ramen to finish. Lunch of beef curry or stew three days a week. Dinner about ¥7,000–15,000.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Opened 8 August 2024 (Tabelog). The cook trained at a Chinese restaurant in Kyoto and blends "Kyoto Chinese" into teppanyaki (Tabiiro). A September 2025 diner found the chef and staff handsome and refreshing.',
      philosophy: 'Draws out the natural flavour of each ingredient (Tabiiro).',
      specialty: 'Kumamoto red-wagyu steak on the teppan.',
      anecdotes: [
        { text: 'An April 2025 lunch diner had the beef curry with a fried egg, with generous chunks of the restaurant\'s beef.', source: R + 'B505268676/' },
        { text: 'A September 2025 diner had Ise lobster, abalone and a beef cutlet with demi-glace, finishing with the original ramen.', source: R + 'B513379840/' },
        { text: 'In October 2026 the yukhoe was sold out; a diner who had expected the staff to be intimidating found the staff friendly, and praised the sirloin.', source: R + 'B537536802/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼DINING YANAGI、鉄板焼き・ステーキ・パスタ、下京区相之町143、烏丸駅から徒歩約5分、月・水・金 12:00〜13:30・17:00〜22:30、火・木・祝 17:00〜22:30、土 17:30〜22:30、日曜・祝日の翌日休み、予約可、アラカルトの場合お通し代、カード・電子マネー可、QR 不可、カウンター12席、禁煙、子ども可、英語メニュー、ベジタリアン対応、京都の契約農家の野菜、2024年8月8日オープン。たびいろ: 京都の中華料理店で修業した料理人、鉄板焼きに「京中華」、熊本県菊池市の原田畜産が肥育したあか牛「延寿牛」のステーキ、町家を改装した和モダンの空間、昼1,200〜3,000円・夜7,000〜15,000円、昼は11:30〜14:00、夜は17:30〜23:00 (日付不明)。口コミ (2025〜2026年、英語): 昼のビーフカレーかビーフシチュー、伊勢海老とアワビ、ビーフカツ、締めのラーメン、サーロイン、ユッケ。',
      confidence: 'medium', sources: [TB, TI, R + 'B505268676/', R + 'B508051803/', R + 'B513379840/', R + 'B515856797/', R + 'B537536802/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki; English menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区相之町143',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002650, 135.764038); cross-checked: GSI 京都府京都市下京区相之町143番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, TI, R + 'B505268676/'],
    price_note: 'No item prices found; Tabiiro budget lunch ¥1,200–3,000, dinner ¥7,000–15,000; Tabelog average ¥6,000–7,999.', last_checked: TODAY, items: [
      it('', '', 'Steak of 延寿牛 (Kumamoto red wagyu)', '', 'Teppanyaki', 'ask', 'no', 'Tabiiro; October 2026 review (sirloin).', 'enju_steak'),
      it('', '', 'Beef curry (lunch)', '', 'Lunch', 'no', 'no', 'April 2025 review; Mon, Wed, Fri.', 'beef_curry'),
      it('', '', 'Original ramen (to finish)', '', 'To finish', 'no', 'no', 'September 2025 review.', 'ramen'),
    ] }, {
    cuisine: '京中華の要素を取り入れた鉄板焼き: 熊本の原田畜産が肥育したあか牛「延寿牛」のステーキ (たびいろ)、サーロイン、ユッケ (2026年10月)、伊勢海老とアワビ、デミグラスのビーフカツ、締めのオリジナルラーメン (2025年9月)、季節の野菜と魚介、平日の昼はビーフカレーかビーフシチュー (2025年4月) (2025〜26年の口コミ)',
    neighborhood: '四条烏丸の南東。烏丸駅から徒歩5分',
    gf_detail: '要確認。ステーキや魚介の鉄板焼きは合う可能性があるが、デミグラス、ビーフカツ、カレー、ラーメンは不可 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアン対応とヴィーガンメニュー、京都の契約農家の野菜の記載 (店の情報)。ヴィーガン料理を書いた口コミはない。',
    notes: '[鉄板焼き・四条烏丸] 町家を改装した12席の鉄板焼きカウンター。熊本のあか牛、伊勢海老、アワビを京中華の工夫とともに焼き、締めはオリジナルのラーメン。週3日の昼はビーフカレーかシチュー。夜は7,000〜15,000円ほど。',
  });
}

save();
