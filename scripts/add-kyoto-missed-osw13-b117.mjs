// Kyoto priority (kyoto-missed), worker osw13, batch 117 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: やすい直, enca, ペリフェリコ, 海鮮処 わたなべや. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-117');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26018610', 'chain: 志津屋 烏丸御池店 — a branch of the Kyoto bakery chain 志津屋 (21+ shops; same ruling as 志津屋 祇園店 osw1-22)');
skip('26036208', 'big-chain hotel (Greg 11-08 ruling): HIYORIチャプター京都トリビュートポートフォリオホテル is a Tribute Portfolio hotel, a Marriott International brand');
skip('26043378', 'retail food shop (Greg 11-07 ruling): 齋藤商店 is a deli with a takeout showcase and bento pick-ups plus a few café seats (July 2025, July 2026 reviews); Tabelog lists no hours or seats, only two reviews have text, no history or GF/vegan options sourced — flagged in case the café use should count');
skip('26039244', 'retail food shop (Greg 11-07 ruling): 王妃のおやつ 焼菓子店 is a take-away baked-goods shop (financiers, chiffon cakes, scones; open until sold out) — not a historic shop, and no GF or vegan options are sourced');
skip('26037096', 'big-chain hotel venue (Greg 11-08 ruling): CHAPTER THE GRILL is the restaurant inside チャプター京都 トリビュートポートフォリオホテル (Tabelog address), a Marriott International brand');
skip('26038638', 'big-chain hotel (Greg 11-08 ruling): ザ・ホテル青龍 京都清水 is a Prince Hotels property (its pages and booking line are on princehotels.co.jp; GM from 西武・プリンスホテルズワールドワイド)');

// ================================================================ やすい直
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024160/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_yasui_nao', name: 'やすい直 (Yasui Nao)', category: 'OMNI',
    lat: 35.00853, lng: 135.757798, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: chicken kara-age, corn tempura, salt udon, oyakodon and sauce-glazed skin and wings (2024–2025 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant — skewers, chicken sashimi, liver, wings, oyakodon, chicken soup (2018–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–23:00 (L.O. 22:00); closed Sunday, plus listed extra holidays — October 2026: 4, 11, 12, 18, 25; November 2026: 1, 8, 15, 22, 23, 29 (most Saturdays). Reservations taken; private hire on request. Starter charge 「無(付きだし500円(税抜))」 (no charge, but a ¥500 + tax otoshi starter; Tabelog Japanese original). 20 seats (6 counter, 14 table). Non-smoking. Cards and e-money; no QR codes. Raw chicken sashimi is served. On Sanjo-dori just west of Muromachi, 3 min from Karasuma Oike.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori west of Muromachi — 3 min from Karasuma Oike',
    cuisine: 'A small chicken restaurant — not just yakitori — named after its owner and open since about 2014, with a ¥1,800 sampler set and a much-praised oyakodon (Tabelog; 2016–2026 reviews) · recommended set ¥1,800: thigh skewer and wing, tsukune with raw egg yolk, chicken with grated daikon ("mizore"), kara-age (June 2025) · chicken sashimi platter (gizzard, liver, thigh); liver with sesame-oil sauce (September 2024) · crispy chicken skin with salt or sauce; curry-flavoured wings; small oyakodon ¥600 (March 2024) · chicken salt udon; chicken miso soup; mizutaki; liver with raisin butter; saikyo-marinated egg yolk; yuba salad; corn tempura (April–June 2025) · unusual drinks with descriptive notes; a smoky tea (July 2026)',
    website: null, gmaps: gm('やすい直 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Chicken izakaya · Sanjo-Muromachi, the owner\'s chicken kitchen] A tidy 20-seat chicken specialist near Karasuma Oike: start with the ¥1,800 set of skewers, tsukune and kara-age, add chicken sashimi or curry wings, and finish with what one diner called the best oyakodon he\'d had. ¥500 starter. About ¥3,000–6,000. Closed Sunday and many Saturdays — check.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'A March 2024 reviewer learned the shop is named after the owner; a June 2025 regular came to celebrate its 11th anniversary and describes a friendly owner who loves to chat. Reviewers praise his range across raw, grilled and simmered chicken dishes (December 2024).',
      philosophy: null,
      specialty: 'Chicken dishes; oyakodon.',
      anecdotes: [
        { text: 'June 2025: "I\'ve been visiting this place a few times a year since it opened, and today I came to celebrate their 11th anniversary!… For first-time visitors, the recommended set for JPY 1800 is a great deal."', source: R + 'B508534182/' },
        { text: 'March 2024: "Not flavored just with egg and tare sauce, but perfectly closed off with dashi and a delicate sauce… It\'s the best Oyakodon I\'ve ever had."', source: R + 'B480942904/' },
        { text: 'March 2024: "This chicken restaurant is located just a bit west of Karasuma Sanjo, and I later learned that it was named after the owner."', source: R + 'B480942904/' },
      ],
      japanese_sources_summary: '食べログ: やすい直、居酒屋・日本料理・鶏料理、中京区三条通室町西入衣棚町59-1 清水ビル1F、烏丸御池から徒歩3分、月〜土18:00〜23:00 (L.O.22:00)、日曜休み、ほかに店休日 (10月4・11・12・18・25日、11月1・8・15・22・23・29日)、予約可、チャージ「無(付きだし500円(税抜))」、20席 (カウンター6・テーブル14)、禁煙、カード・電子マネー可、こだわりの日本酒・焼酎。口コミ (2016年〜2026年7月、英語): 焼き鳥だけでなく鶏料理の店、店主の名が店名 (2024年3月)、開店11周年 (2025年6月)、おすすめセット1,800円 (もも串と手羽、卵黄のつくね、鶏のみぞれ、唐揚げ)、鶏刺し (砂肝・レバー・もも)、カレー味の手羽、小さな親子丼600円、鶏塩うどん、水炊き、レバーのレーズンバター、湯葉サラダ、とうもろこしの天ぷら、スモーキーなお茶 (2026年7月)、話好きな店主。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B349764743', 'B480942904', 'B491514656', 'B501970108', 'B506169989', 'B508534182', 'B530977406'])) },
    cultural_comfort: { level: 'friendly', note: 'Small counter; owner likes to chat; ¥500 starter.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通室町西入衣棚町59-1 清水ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with 2026 holiday dates; reviews dated 2025 and July 2026.' },
    pin_source: `Tabelog ${TB} (35.00853, 135.757798); GSI lot 京都府京都市中京区衣棚町59番地 about 25m away; nearest pin kyoto_ganesh_sanjo 5.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480942904/', R + 'B508534182/'],
    price_note: 'Prices from 2024–2025 reviews; ¥500 + tax starter.', last_checked: TODAY, items: [
      it('', '', 'Recommended chicken set (skewers, tsukune, mizore, kara-age)', '¥1,800', 'Set', 'no', 'no', 'June 2025.', 'osusume_set'),
      it('', '', 'Small oyakodon', '¥600', 'Rice', 'ask', 'no', 'March 2024.', 'oyakodon_small'),
      it('', '', 'Chicken sashimi platter', '', 'Sashimi', 'ask', 'no', 'September 2024; raw chicken.', 'torisashi'),
      it('', '', 'Curry-flavoured chicken wings', '', 'Grilled', 'ask', 'no', 'March 2024.', 'curry_tebasaki'),
      it('', '', 'Chicken salt udon', '', 'Noodles', 'no', 'no', 'June 2025.', 'tori_shio_udon'),
    ] }, {
    cuisine: '焼き鳥だけでなく鶏料理全般の小さな店。店主の名が店名で、2014年ごろから。1,800円のおすすめセットと評判の親子丼 (食べログ、2016〜2026年の口コミ)・おすすめセット1,800円: もも串と手羽、卵黄のつくね、鶏のみぞれ、唐揚げ (2025年6月)・鶏刺しの盛り合わせ (砂肝・レバー・もも)、ごま油だれのレバー (2024年9月)・塩かたれのパリパリ鶏皮、カレー味の手羽、小さな親子丼600円 (2024年3月)・鶏塩うどん、鶏のみそ汁、水炊き、レバーのレーズンバター、卵黄の西京漬け、湯葉サラダ、とうもろこしの天ぷら (2025年4〜6月)・説明書きの楽しい飲み物、スモーキーなお茶 (2026年7月)',
    neighborhood: '三条通、室町の西。烏丸御池から徒歩3分',
    gf_detail: 'グルテンフリーではない: 鶏の唐揚げ、とうもろこしの天ぷら、塩うどん、親子丼、たれの鶏皮や手羽 (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 鶏料理の店。串、鶏刺し、レバー、手羽、親子丼、鶏のスープ (2018〜2026年の口コミ)。',
    notes: '[鶏料理の居酒屋・三条室町、店主の鶏料理] 烏丸御池近くの20席のこぎれいな鶏料理の店。まず1,800円の串・つくね・唐揚げのセット、鶏刺しやカレー味の手羽を足し、締めは「今まででいちばん」との声もある親子丼。お通し500円。3,000〜6,000円ほど。日曜と多くの土曜が休み、確認を。',
  });
}

// ================================================================ enca
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035512/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_enca', name: 'enca', category: 'OMNI',
    lat: 35.013352, lng: 135.773048, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is mostly seafood, meat and vegetables grilled over wood ("asado"), plus omelettes and fried tofu (2022–2025 reviews); sauces and seasonings are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Wood-grilled vegetables are a strength — eggplant, leeks, ebi-imo, beets, spinach (2022–2025 reviews) — but no vegan information; much of the menu is fish and meat.',
    hours_raw: 'Tabelog lists no hours; irregular days are posted on Instagram (November 2025), and the wood-grill last order was around 20:00 in November 2022 — go early. Reservations via Instagram message recommended (6 counter seats plus standing for 2–3). Non-smoking. Cards and QR codes; no e-money. Glass wines (Spanish and natural) chosen to your taste. Service can be slow (November 2025). A counter bar in a machiya next to, and sharing a kitchen with, the referral-only restaurant "tha sakai".',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kawabata-Nijo — 460 m from Sanjo Keihan',
    cuisine: 'A six-seat wine bar attached to the referral-only "tha sakai", cooking seasonal fish, meat and vegetables over a wood fire in Basque "asado" style from the same kitchen, mostly under ¥2,000 a plate (Tabelog; 2022–2026 reviews) · 2022: Kamo eggplant ¥770; white squid ¥880; Amagi shamo chicken ¥1,100 or its offal ¥660; abalone ¥660; fue-dai fish ¥1,100; Manganji omelette ¥660; horse-mackerel and Inca-potato salad ¥660 · Akashi octopus, thick fried tofu, fatty herring, boiled peanuts, akaushi beef, polvorón (September 2022) · truffle omelette, ebi-imo, Shimonita leeks, spinach, bonito, akaushi (December 2025) · venison, squid, beets with ebi-imo, leeks, milt (November 2025) · Spanish and natural wines by the glass; homemade ginger ale',
    website: null, gmaps: gm('enca 京都 川端二条'), menu_url: null,
    notes: '[Wood-fire bar · Kawabata-Nijo, the casual side of a referral-only kitchen] Six counter seats in a machiya next to the invitation-only "tha sakai": the same wood-fired kitchen sends out simply grilled seasonal vegetables, fish and beef, most under ¥2,000, with natural and Spanish wines. About ¥3,000–8,000. Hours vary — check Instagram and book by DM. Slow when busy.',
    chef_bio: { chef_name: 'Tsuyoshi Sakai', roles: ['Chef of the adjoining tha sakai'], origin: null,
      background: 'A September 2022 reviewer writes that enca is the bar beside a fully referral-based restaurant run by Chef Tsuyoshi Sakai, known for wood-fired cooking at "bb9" in Kobe; later reviewers name the restaurant "tha sakai" and say the kitchen is shared (2024–2026). A May 2024 guest praises the hospitality of the chef\'s wife at the bar. One November 2023 diner felt it leaned toward regulars and some dishes were bland.',
      philosophy: 'Seasonal ingredients cooked simply over an open flame (November 2025 review).',
      specialty: 'Wood-fired "asado" of seafood, meat and vegetables.',
      anecdotes: [
        { text: 'September 2022: "This is a bar adjacent to a completely referral-based restaurant run by Chef Tsuyoshi Sakai, known for his famous wood-fired dishes at \'bb9\' in Kobe… the main dishes are all priced under JPY 2000."', source: R + 'B453707275/' },
        { text: 'May 2024: "This bar is located within tha sakai… The hospitality of Chef Sakai\'s wife was also wonderful."', source: R + 'B485504784/' },
        { text: 'November 2023: "Some ingredients felt a bit bland, and there were moments when the atmosphere seemed a bit exclusive for regular customers."', source: R + 'B475169525/' },
      ],
      japanese_sources_summary: '食べログ: enca、バー・スペイン料理、左京区大菊546-1、三条京阪から460m、営業時間の記載なし、予約可、6席 (立ち飲み2〜3名)、貸切20名まで、禁煙、カード・QR可、ワインにこだわる。口コミ (2022年3月〜2026年9月、英語): 紹介制のレストラン「tha sakai」に併設、厨房は共用、神戸「bb9」の薪焼きで知られるTsuyoshi Sakai氏の店 (2022年9月)、薪の「アサド」、メインはほぼ2,000円以下、Kamoなす770円・白いか880円・Amagi shamo 1,100円 (2022年)、トリュフのオムレツ・えびいも・あか牛 (2025年12月)、鹿・白子 (2025年11月)、薪焼きのL.O.は20時ごろ (2022年11月)、Instagramで営業日、提供が遅め、常連寄りの雰囲気との声 (2023年11月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B452707474', 'B453504458', 'B453673076', 'B453707275', 'B475169525', 'B485504784', 'B511289892', 'B518377054', 'B523545778', 'B535494662'])) },
    cultural_comfort: { level: 'friendly', note: 'Tiny counter; book by Instagram DM; hours on Instagram.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区大菊546-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; a regular logged visits through September 2026; reviews dated November–December 2025 and April 2026.' },
    pin_source: `Tabelog ${TB} (35.013352, 135.773048); GSI lot 京都府京都市左京区大菊町546番地 about 94m away; nearest pin kyoto_toriya_hitomi 8.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B452707474/', R + 'B453707275/', R + 'B518377054/'],
    price_note: 'Prices from 2022 reviews (tax incl.); current prices not given.', last_checked: TODAY, items: [
      it('', '', 'Asado (wood-grilled) Amagi shamo chicken', '¥1,100', 'Grilled', 'ask', 'no', 'September 2022.', 'asado_shamo'),
      it('', '', 'Asado white squid', '¥880', 'Grilled', 'ask', 'no', 'September 2022.', 'asado_shiroika'),
      it('', '', 'Asado Kamo eggplant', '¥770', 'Grilled', 'ask', 'ask', 'August and September 2022.', 'asado_kamonasu'),
      it('', '', 'Omelette (Manganji pepper; truffle)', '¥660', 'Egg', 'ask', 'no', '2022 and December 2025.', 'omelette'),
      it('', '', 'Asado akaushi beef', '', 'Grilled', 'ask', 'no', 'September 2022 and December 2025.', 'asado_akaushi'),
    ] }, {
    cuisine: '紹介制の「tha sakai」に併設の6席のワインバー。同じ厨房でバスク風の「アサド」として旬の魚、肉、野菜を薪で焼き、ほとんどが1皿2,000円以下 (食べログ、2022〜2026年の口コミ)・2022年: Kamoなす770円、白いか880円、Amagi shamo 1,100円とその内臓660円、あわび660円、fue-dai 1,100円、Manganjiのオムレツ660円、ひらあじとInca potatoのポテトサラダ660円・Akashiのたこ、厚揚げ、脂ののったにしん、ゆでピーナッツ、あか牛、ポルボロン (2022年9月)・トリュフのオムレツ、えびいも、Shimonitaねぎ、ほうれん草、かつお、あか牛 (2025年12月)・鹿、いか、ビーツとえびいも、ねぎ、白子 (2025年11月)・スペインと自然派のグラスワイン、自家製ジンジャーエール',
    neighborhood: '川端二条の近く。三条京阪から460m',
    gf_detail: '要確認: グルテンの情報はない。ほとんどが魚介、肉、野菜の薪焼き (「アサド」) で、ほかにオムレツや厚揚げ (2022〜2025年の口コミ)。たれや調味料の説明はない。',
    vegan_detail: '要確認: なす、ねぎ、えびいも、ビーツ、ほうれん草など薪焼きの野菜が得意 (2022〜2025年の口コミ) だが、ヴィーガンの情報はない。魚と肉が中心。',
    notes: '[薪焼きのバー・川端二条、紹介制の店の気軽な入口] 紹介制の「tha sakai」の隣の町家にあるカウンター6席。同じ薪の厨房から旬の野菜、魚、牛をシンプルに焼き、ほとんど2,000円以下で、自然派やスペインのワインとともに。3,000〜8,000円ほど。営業日はInstagramで確認し、DMで予約を。混むと遅め。',
  });
}

// ================================================================ ペリフェリコ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26034024/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'kyoto_periferico', name: 'ペリフェリコ (Periferico)', category: 'OMNI',
    lat: 35.013598, lng: 135.773027, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Paella, grilled Iberico pork, lamb and venison and Basque cheesecake sit alongside bread, ciabatta bocadillos, squid-ink rice croquettes and pâté-filled cream puffs (2020–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and says the kitchen is particular about vegetables (gazpacho, carrot rapé, salads in reviews), but there is no vegan information.',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 12:00–22:00 (L.O. 21:00); closed Wednesday. Lunch sets by day, café use welcome in the afternoon, bar in the evening. Reservations by phone (15:00–23:00) or email; walk-ins when there is room. No service or table charge (「サービス料・チャージ料なし」, Tabelog Japanese original). 12 seats: 6 at the counter, one 6-seat table; standing for 20 at private hire. Non-smoking (smoking area outside). Cards and PayPay. High chair available (June 2022). Just east of Kawabata-Nijo, 9 min from Keihan Sanjo exit 11.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just east of Kawabata-Nijo — 9 min from Keihan Sanjo',
    cuisine: 'A small Spanish bar run by one woman, open from noon: lunch plates, paella, tapas and Basque wines (Tabelog; 2020–2026 reviews) · lunch with a tapas platter (gazpacho, tortilla, bruschetta, freshly sliced ham), salad and bread: grilled fish ¥1,500, lamb ¥2,000, Iberico pork ¥2,500 (June 2022) · paella of the day, e.g. sweet shrimp — cooked from raw, so allow time (February 2023; May 2024) · Basque cheesecake served with salt and pepper (2020–2023) · bocadillo set with ham (April 2023); homemade-ciabatta sandwich and tomato soup (June 2025) · grilled venison (January 2025) · squid-ink rice croquettes; carrot rapé (March 2026) · pâté-filled mini cream puffs; young sweetfish; braised dishes; sangria (July 2026) · txakoli and Spanish wines; café lattes',
    website: null, gmaps: gm('ペリフェリコ 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Spanish bar · Kawabata-Nijo, a one-woman bar from noon] A 12-seat Spanish bar just east of Kawabata-Nijo, run single-handed by its owner: tapas plates and grilled Iberico at lunch, made-to-order paella, Basque cheesecake with salt and pepper, and txakoli or sangria into the evening. No cover charge. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; runs it alone)'], origin: null,
      background: 'Reviewers describe the restaurant as run by one woman who cooks, slices the ham and serves (June 2022; January 2025), with a warm, friendly manner (May 2023). It also hosts wine-event course dinners (May 2024).',
      philosophy: null,
      specialty: 'Paella; tapas; Basque cheesecake.',
      anecdotes: [
        { text: 'June 2022: "Only one beautiful lady was managing the place… Freshly shaved ham (it was amazing to see the lady slicing it, and it tasted incredible!)"', source: R + 'B450943386/' },
        { text: 'February 2023: "It takes a little while since they cook the rice from scratch, but the flavor is simply exquisite!"', source: R + 'B432784044/' },
        { text: 'July 2026: "The highlight was definitely the mini cream puffs filled with pâté—I could have eaten about ten of them!"', source: R + 'B532357214/' },
      ],
      japanese_sources_summary: '食べログ: ペリフェリコ、スペイン料理・ビストロ・バル、左京区新先斗町120-1、京阪三条11番出口から徒歩9分、月・火・木〜日12:00〜22:00 (L.O.21:00)、水曜休み、予約可 (電話15:00〜23:00、メール)、「サービス料・チャージ料なし」、12席 (カウンター6・テーブル1卓6)、禁煙 (屋外に喫煙所)、カード・PayPay可、野菜と魚にこだわる、ベジタリアンメニューあり。口コミ (2020年10月〜2026年7月、英語): 女性ひとりで営む、昼はタパスの盛り合わせ・サラダ・パン付きの焼き魚1,500円・ラム2,000円・イベリコ豚2,500円 (2022年6月)、生米から炊くパエリア、塩とこしょうを添えたバスクチーズケーキ、ボカディージョ、鹿肉のグリル、イカ墨のライスコロッケ、キャロットラペ、パテ入りの小さなシュー、稚鮎、サングリア (2026年7月)、チャコリ。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B432784044', 'B450943386', 'B465717922', 'B492632260', 'B498573795', 'B502627322', 'B508766565', 'B524458764', 'B532357214'])) },
    cultural_comfort: { level: 'friendly', note: 'One person cooks and serves; no cover charge; café use welcome.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists vegetarian options.'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区新先斗町120-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (35.013598, 135.773027); GSI lot 京都府京都市左京区新先斗町120番地 about 12m away; nearest pin kyoto_toriya_hitomi 24.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B450943386/', R + 'B432784044/', R + 'B524458764/'],
    price_note: 'Lunch prices from June 2022; current prices not given.', last_checked: TODAY, items: [
      it('', '', 'Lunch: grilled Iberico pork with tapas, salad and bread', '¥2,500', 'Lunch', 'ask', 'no', 'June 2022; grilled fish ¥1,500, lamb ¥2,000.', 'lunch_iberico'),
      it('', '', 'Paella of the day', '', 'Rice', 'ask', 'ask', 'February 2023 and May 2024.', 'paella'),
      it('', '', 'Basque cheesecake', '', 'Dessert', 'ask', 'no', '2020–2023; served with salt and pepper.', 'basque_cheesecake'),
      it('', '', 'Squid-ink rice croquettes', '', 'Tapas', 'no', 'no', 'March 2026.', 'squid_ink_croquette'),
      it('', '', 'Carrot rapé', '', 'Tapas', 'ask', 'ask', 'March 2026.', 'carrot_rape'),
    ] }, {
    cuisine: '女性ひとりで営む、昼から開くスペインのバル。昼のプレート、パエリア、タパス、バスクのワイン (食べログ、2020〜2026年の口コミ)・タパスの盛り合わせ (ガスパチョ、トルティージャ、ブルスケッタ、切りたての生ハム)、サラダ、パン付きの昼: 焼き魚1,500円、ラム2,000円、イベリコ豚2,500円 (2022年6月)・日替わりのパエリア、例えば甘えび。生米から炊くので時間がかかる (2023年2月、2024年5月)・塩とこしょうを添えたバスクチーズケーキ (2020〜2023年)・生ハムのボカディージョのセット (2023年4月)、自家製チャバタのサンドとトマトのスープ (2025年6月)・鹿肉のグリル (2025年1月)・イカ墨のライスコロッケ、キャロットラペ (2026年3月)・パテ入りの小さなシュー、稚鮎、煮込み、サングリア (2026年7月)・チャコリとスペインワイン、カフェラテ',
    neighborhood: '川端二条のすぐ東。京阪三条から徒歩9分',
    gf_detail: '要確認: グルテンの情報はない。パエリア、イベリコ豚・ラム・鹿のグリル、バスクチーズケーキのほか、パン、チャバタのボカディージョ、イカ墨のライスコロッケ、パテ入りのシューもある (2020〜2026年の口コミ)。',
    vegan_detail: '要確認: 食べログにベジタリアンメニューありとあり、野菜にこだわる (口コミにはガスパチョ、キャロットラペ、サラダ) が、ヴィーガンの情報はない。',
    notes: '[スペインバル・川端二条、昼から開くひとりの店] 川端二条のすぐ東、店主がひとりで切り盛りする12席のスペインバル。昼はタパスのプレートやイベリコ豚のグリル、注文してから炊くパエリア、塩とこしょうで味わうバスクチーズケーキ、夜までチャコリやサングリアを。チャージなし。水曜休み。',
  });
}

// ================================================================ 海鮮処 わたなべや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26021022/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '24:00']), E = day(['13:00', '24:00']);
  put({
    id: 'kyoto_kaisendokoro_watanabeya', name: '海鮮処 わたなべや (Kaisen-dokoro Watanabeya)', category: 'OMNI',
    lat: 35.012192, lng: 135.761338, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura (the starter, vegetables, chicken), shrimp kara-age, cream croquettes, nama-fu and simmered fish in soy sauce (2025–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya — sashimi, simmered fish, tuna bowls, yakitori; the starter is tempura of white fish (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri (and days before and after holidays) 11:30–24:00; Sat, Sun and holidays 13:00–24:00; last orders food 23:00, drinks 23:30; irregular closures. SMOKING IS ALLOWED AT EVERY SEAT — the listing asks non-smokers not to book. Starter charge 「お通し代330円」 (¥330, Tabelog Japanese original). Reservations taken; at busy times table bookings are limited to 2 hours and courses to 2.5 hours. 60 seats including sunken kotatsu tables and a counter; private hire for 20–50; sports on TV. Cards and QR codes (PayPay, d Barai, au PAY); no e-money. 1 min from Karasuma Oike Station.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma Oike — 1 min from the station',
    cuisine: 'A busy, red-lantern seafood izakaya by Karasuma Oike, open from lunch to midnight, with small, well-priced plates and a long sake list (Tabelog; 2022–2026 reviews) · lunch tuna and bluefin-tuna bowls about ¥1,000–1,500; tuna bowl with red miso soup ¥1,320 (September 2025) · sashimi platters, up to ten kinds for two including aged fish (September 2026) · simmered fish with taro, sansho to finish (March 2026) · nama-fu dengaku; Watanabeya salad, half portions possible; dashimaki (March 2026) · starter of white fish tempura with saikyo miso; vegetable tempura (May 2026) · small-shrimp kara-age; chicken skewers (April 2026); chicken tempura · cream croquettes; rice balls; sushi (September 2026)',
    website: null, gmaps: gm('海鮮処 わたなべや 烏丸御池'), menu_url: TB + 'dtlmenu/',
    notes: '[Seafood izakaya · Karasuma Oike, a smoky local favourite] A lively local izakaya a minute from Karasuma Oike: red lanterns, big shared tables, small plates of very fresh sashimi, simmered fish and tempura, plenty of sake, and tuna bowls at lunch. ¥330 starter. About ¥4,000–6,000 at night. Smoking at every seat. Open daily from lunch to midnight.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A May 2022 reviewer was sent here by the owner\'s mother, who runs a yakiniku restaurant nearby, and heard that the owner\'s son runs another izakaya nearby. Reviewers describe a room full of locals and salarymen, quick, lively service, and staff who see guests off at the door (2024–2026); one March 2026 diner found the male staff\'s service could improve, and a longtime regular notes prices have risen.',
      philosophy: null,
      specialty: 'Sashimi platters; simmered fish; tuna bowls at lunch.',
      anecdotes: [
        { text: 'September 2026: "We indulged in a sashimi platter for two featuring ten different types, and we even had fun guessing what each fish was with the help of the staff."', source: R + 'B536129406/' },
        { text: 'May 2026: "The appetizer is only tempura, but the white fish is tempura with Saikyo miso. Isn\'t that unusual?"', source: R + 'B528397805/' },
        { text: 'March 2026: "Please note that smoking is allowed inside, so those who are sensitive to smoke should be cautious."', source: R + 'B524657253/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮処 わたなべや、海鮮・居酒屋・日本料理、中京区左京町124、地下鉄烏丸御池駅から徒歩1分、月〜金・祝日の前日・祝日の翌日11:30〜24:00、土日・祝日13:00〜24:00 (L.O.料理23:00・飲み物23:30)、不定休、予約可 (混雑時はテーブル2時間・コース2時間半)、全席喫煙可 (禁煙席希望の人は予約を控えるよう案内)、お通し代330円、60席 (掘りごたつ・カウンター)、カード・QR可。口コミ (2022年5月〜2026年9月、英語): 地元客と会社員でにぎわう、昼はまぐろ丼・本まぐろ丼1,000〜1,500円 (赤だし付き1,320円)、10種の刺身の盛り合わせ、熟成魚、魚と里いもの煮付け、生麩田楽、わたなべやサラダ (ハーフ可)、だし巻き、お通しは白身魚の西京みその天ぷら、小えびの唐揚げ、焼き鳥、クリームコロッケ、おにぎり、寿司、豊富な日本酒、近くで店主の母が焼肉店・息子が居酒屋 (2022年5月)、男性スタッフの接客に不満の声 (2026年3月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B448707304', 'B513487081', 'B524353770', 'B524515990', 'B524657253', 'B526427464', 'B526637238', 'B528397805', 'B532156563', 'B536129406', 'B536404507'])) },
    cultural_comfort: { level: 'japanese', note: 'Smoking at every seat; ¥330 starter; time limits when busy.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区左京町124',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.012192, 135.761338); GSI lot 京都府京都市中京区左京町124番地 about 19m away; nearest pin kyoto_to_oike 63.4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513487081/', R + 'B524353770/', R + 'B536129406/'],
    price_note: 'Lunch prices from 2025–2026 reviews; ¥330 starter at night.', last_checked: TODAY, items: [
      it('', '', 'Tuna bowl with red miso soup (lunch)', '¥1,320', 'Rice', 'ask', 'no', 'September 2025; bowls about ¥1,000–1,500.', 'maguro_don'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', '2026 reviews; up to ten kinds for two.', 'sashimi_moriawase'),
      it('', '', 'Simmered fish with taro', '', 'Simmered', 'no', 'no', 'March 2026 and September 2026.', 'nitsuke'),
      it('', '', 'Nama-fu dengaku', '', 'Small dish', 'no', 'no', 'March 2026.', 'namafu_dengaku'),
      it('', '', 'Dashimaki', '', 'Egg', 'ask', 'no', 'March and April 2026.', 'dashimaki'),
    ] }, {
    cuisine: '烏丸御池近くのにぎやかな赤ちょうちんの海鮮居酒屋。昼から24時まで、手頃な小皿と豊富な日本酒 (食べログ、2022〜2026年の口コミ)・昼のまぐろ丼・本まぐろ丼1,000〜1,500円ほど、まぐろ丼と赤だし1,320円 (2025年9月)・刺身の盛り合わせ。2人前で10種、熟成魚も (2026年9月)・魚と里いもの煮付け、仕上げに山椒 (2026年3月)・生麩田楽、わたなべやサラダ (ハーフ可)、だし巻き (2026年3月)・お通しは白身魚の西京みその天ぷら、野菜の天ぷら (2026年5月)・小えびの唐揚げ、焼き鳥 (2026年4月)、鶏の天ぷら・クリームコロッケ、おにぎり、寿司 (2026年9月)',
    neighborhood: '烏丸御池。駅から徒歩1分',
    gf_detail: 'グルテンフリーではない: 天ぷら (お通し、野菜、鶏)、小えびの唐揚げ、クリームコロッケ、生麩、しょうゆの煮付け (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 海鮮居酒屋。刺身、煮魚、まぐろ丼、焼き鳥。お通しは白身魚の天ぷら (2025〜2026年の口コミ)。',
    notes: '[海鮮居酒屋・烏丸御池、たばこOKの地元の人気店] 烏丸御池駅から1分のにぎやかな地元の居酒屋。赤ちょうちん、大きな相席テーブル、新鮮な刺身や煮魚、天ぷらの小皿にたっぷりの日本酒、昼はまぐろ丼。お通し330円。夜は4,000〜6,000円ほど。全席喫煙可。毎日昼から24時まで。',
  });
}

save();
