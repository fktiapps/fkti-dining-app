// Kyoto priority (kyoto-missed), worker osw13, batch 77 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: BALMIL, ほへと, 焼肉リン 御幸町店, 先斗町 鍋いし屋.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-77');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003076', 'chain: キリンシティ 新京極店 — the Kirin City beer-restaurant chain (since 1983) with KIRIN CITY / KIRIN CITY PLUS shops in Ginza, Yokohama Bayquarter, Yokohama Isetan, Nagoya, Ariake and Kyoto (Gurunavi and other listings); this one is run under licence by スター食堂株式会社 (star-kyoto.co.jp shop list); 5+ same-name (Greg ruling 2026-11-05)');
skip('26020272', 'chain: 京都 炭火串焼つじや 四条御幸町店 — eleven つじや shops in the Kyoto crawl alone (京都駅前, 京都駅八条口, 京都駅北, 梅小路北, 七条, 鶏匠つじや 本店 and more); 5+ same-name (Greg ruling 2026-11-05)');
skip('26045094', 'large parent: 地鶏坊主 京都本店 河原町 is run by 有限会社坊\'s of Nagoya, about 100 shops across ten formats including franchises (bou-zu.com); large parent → chain (Greg ruling 2026-11-05)');
skip('26013378', 'too thin to verify: 錦・高倉屋 is a Nishiki Market pickle shop whose latest Tabelog review dates from December 2023, with no 2025–26 review to confirm the current shop');

// ================================================================ BALMIL
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043036/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://balmil2023.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_balmil_kiyamachi', name: 'BALMIL', category: 'OMNI',
    lat: 35.004866, lng: 135.77074, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tacos made with a soy-sauce-based sauce (Tabelog; September 2026); tortilla type not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Mexican set menus and tacos with meat (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–23:00 (last food order 22:00). Reservations taken. No service charge — Tabelog, Japanese original 「なし」 (the English page says 10% is added). 18 seats: a 10-seat counter and two barrel tables for 4. Non-smoking until 21:00, smoking allowed after (Tabelog). English picture menu; the master speaks fluent English (June 2026). Cards and QR (PayPay and others); no e-money. 2F of the Yoshiki Building on Kiyamachi north of Shijo. Opened 23 March 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Shijo — 3 min walk from Hankyu Kawaramachi',
    cuisine: 'A Mexican-food and cocktail bar with a pirate-tavern feel (Tabelog; 2025–2026 reviews) · tacos with a soy-sauce-based sauce for Japanese tastes; the "BALMIL set" of recommended dishes (Tabelog; October 2025) · over 300 cocktails, alcoholic and not, made to your mood; rare liqueurs (September 2026); beer',
    website: SITE, gmaps: gm('BALMIL 木屋町 ヨシキビル'), menu_url: SITE,
    notes: '[Mexican bar · Kiyamachi, tacos and 300 cocktails] A small second-floor Mexican bar off Kiyamachi with barrel tables and a long counter: soy-sauce-tinged tacos and a set menu, and a calm, English-speaking master who mixes from over 300 cocktails, including rarities. Friendly to solo diners. Smoking only after 21:00. Open nightly.',
    chef_bio: { chef_name: null, roles: ['Master, not named in a source'], origin: null,
      background: 'Opened 23 March 2023 (Tabelog). Per its Tabelog text, the aim is to share Mexican food with tacos adapted to Japanese tastes, with an adult bar counter and barrel tables evoking a pirate tavern. Reviewers in 2025–2026 describe a calm, reassuring master who speaks fluent English, friendly staff, and a guest seen off from the second floor and met again at the ground floor (October 2025).',
      philosophy: null,
      specialty: 'Soy-sauce tacos; cocktails to order.',
      anecdotes: [
        { text: 'October 2025: "I was surprised to be seen off at the second floor elevator, only to find someone waiting for me on the first floor! Haha."', source: R + 'B515330385/' },
        { text: 'September 2026: "I was thrilled to find a liqueur from Godiva that\'s already discontinued!"', source: R + 'B535666617/' },
      ],
      japanese_sources_summary: '食べログ: BALMIL、メキシコ料理・タコス・バル、中京区木屋町通四条上る鍋屋町214 ヨシキビル 2F、京阪祇園四条駅から徒歩5分、阪急河原町駅から徒歩3分、毎日 17:00〜23:00 (料理 L.O. 22:00)、予約可、原文でサービス料「なし」、18席 (カウンター10、4名のテーブル2)、21時までは禁煙・以降は喫煙可、英語の写真メニュー、カード・QR可、電子マネー不可、2023年3月23日オープン、醤油ベースの日本人向けのタコス、おすすめをまとめたセット、ノンアルを含む300種以上のカクテル、樽のテーブルで海賊の酒場の雰囲気。口コミ (2024年1月〜2026年9月、英語): 料理とショットバーを一度に、日本人好みの料理と新鮮な野菜、好みに合わせたカクテル、BALMILセットとビール、2階と1階で見送り、英語が堪能で落ち着いたマスター、終売のゴディバのリキュール、醤油ベースのタコス。',
      confidence: 'low', sources: [SITE, TB, R + 'B509557072/', R + 'B511245238/', R + 'B515330385/', R + 'B530476207/', R + 'B535666617/', R + 'B535759451/'] },
    cultural_comfort: { level: 'english', note: 'English picture menu; the master speaks fluent English.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通四条上る鍋屋町214 ヨシキビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026; official site.' },
    pin_source: `Tabelog ${TB} (35.004866, 135.770685); cross-checked: GSI 京都府京都市中京区鍋屋町214番地 (lot) 17m; offset about 5 m east because kyoto_mixologybar_smooth sits 4.4 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices in the sources; Tabelog\'s budget is ¥3,000–3,999.', last_checked: TODAY, items: [
      it('', '', 'Soy-sauce-based tacos', null, 'Tacos', 'no', 'no', 'Tabelog; September 2026.', 'tacos'),
      it('', '', 'BALMIL set (recommended dishes)', null, 'Set', 'no', 'no', 'Tabelog; October 2025.', 'set_menu'),
    ] }, {
    cuisine: '海賊の酒場のような雰囲気のメキシコ料理とカクテルのバー (食べログ、2025〜2026年の口コミ)・日本人好みの醤油ベースのタコス、おすすめをまとめた「BALMILセット」(食べログ、2025年10月)・ノンアルを含む300種以上のカクテルをその日の気分で。珍しいリキュール (2026年9月)、ビール',
    neighborhood: '木屋町、四条の北。阪急河原町駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: 醤油ベースのたれのタコス (食べログ、2026年9月)。トルティーヤの種類は不明。',
    vegan_detail: 'ヴィーガン不可: 肉のタコスとメキシコ料理のセット (食べログ、2025〜2026年の口コミ)。',
    notes: '[メキシコ料理のバー・木屋町、タコスと300種のカクテル] 木屋町のビル2階の小さなメキシコ料理のバーで、樽のテーブルと長いカウンター。醤油の効いたタコスとセット、英語も話す落ち着いたマスターが300種以上から作るカクテルや珍しいお酒も。一人でも入りやすい。喫煙は21時以降のみ。毎日営業。',
  });
}

// ================================================================ ほへと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042586/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_hoheto_sukiyaki_kiyamachi', name: 'ほへと (Hoheto)', category: 'OMNI',
    lat: 35.004811, lng: 135.770817, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Kansai-style sukiyaki with zarame sugar and a soy-based dipping sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black-wagyu sukiyaki with egg (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–22:00 (last entry 20:00, last order 21:30); reservation only. 70 seats in private rooms for 2 to 30; groups over 50. Tabelog lists smoking as allowed. Cards (Visa, Master, JCB, AMEX), e-money and QR. No sign outside — hard to find (July 2026); 4F of the Sakizo Building, 1 min from Hankyu Kawaramachi exit 1A. Opened 10 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi / Shijo-Kawaramachi — 1 min walk from Hankyu Kawaramachi exit 1A',
    cuisine: 'An all-you-can-eat black-wagyu sukiyaki house, Kansai style (2026 reviews) · "Black wagyu sukiyaki all-you-can-eat course": unlimited wagyu, freshly cooked Koshihikari rice from a wooden tub, a vegetable platter and the day\'s dessert, ¥7,700, offered at ¥5,500 for a limited time through 2026 (April–September 2026) · staff cook the first slice with zarame sugar; then you cook your own (2026)',
    website: null, gmaps: gm('ほへと すき焼き 鍋屋町'), menu_url: null,
    notes: '[Sukiyaki · Kawaramachi, all-you-can-eat black wagyu] A hidden fourth-floor sukiyaki room by Hankyu Kawaramachi offering all-you-can-eat black wagyu, Kansai style with zarame sugar, with unlimited Koshihikari rice and vegetables, on a long-running ¥5,500 promotion (list ¥7,700). Private rooms; reservation only. One diner could hear the staff chatting loudly and found no sign outside (July 2026).',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 10 March 2025 (Tabelog). Reviewers in 2026 describe a calm, traditional-style room behind an unmarked entrance, staff who cook the first slice at the table, and a wagyu-heavy course that one diner found slowing as the fat built up (April 2026).',
      philosophy: null,
      specialty: 'All-you-can-eat black-wagyu sukiyaki.',
      anecdotes: [
        { text: 'July 2026: "the restaurant was hard to find as there were no signs. The staff was polite… but I could hear their loud conversations."', source: R + 'B532122585/' },
        { text: 'April 2026: "the richness of the fat can slow you down as you go along."', source: R + 'B526086352/' },
      ],
      japanese_sources_summary: '食べログ: ほへと、すき焼き、中京区鍋屋町215 サキゾービル 4F、京都河原町駅1A出口から徒歩1分、毎日 11:00〜22:00 (最終入店20:00、L.O. 21:30)、完全予約制、70席、個室 (2〜30名)、50名以上可、喫煙可、カード・電子マネー・QR可、2025年3月10日オープン。口コミ (2026年4〜10月、英語): 黒毛和牛すき焼き食べ放題コース7,700円が期間限定5,500円 (和牛、木桶の炊きたてコシヒカリ、野菜の盛り合わせ、本日のデザート)、関西風にザラメで最初の一枚を店員が焼く、看板がなく見つけにくいという声、店員の私語が大きいという声、脂で後半はペースが落ちるという声。',
      confidence: 'medium', sources: [TB, R + 'B526086352/', R + 'B526134506/', R + 'B526152411/', R + 'B526580652/', R + 'B526582509/', R + 'B527496664/', R + 'B532122585/', R + 'B535231887/', R + 'B535243334/', R + 'B535544198/', R + 'B537733128/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; private rooms; no sign outside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町215 サキゾービル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004811, 135.770817); cross-checked: GSI 京都府京都市中京区鍋屋町215番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526134506/', R + 'B535231887/'],
    price_note: 'Promotional price through 2026 reviews (list ¥7,700).', last_checked: TODAY, items: [
      it('', '', 'Black-wagyu sukiyaki all-you-can-eat course (rice, vegetables, dessert)', '¥5,500 (list ¥7,700)', 'Course', 'no', 'no', 'April–September 2026.', 'sukiyaki'),
    ] }, {
    cuisine: '関西風の黒毛和牛すき焼き食べ放題の店 (2026年の口コミ)・「黒毛和牛すき焼き食べ放題コース」は和牛、木桶の炊きたてコシヒカリ、野菜の盛り合わせ、本日のデザートで7,700円、2026年は期間限定で5,500円 (2026年4〜9月)・最初の一枚は店員がザラメで焼き、その後は自分で (2026年)',
    neighborhood: '木屋町・四条河原町。阪急河原町駅1A出口から徒歩1分',
    gf_detail: 'グルテンフリーではない: ザラメと醤油系のたれの関西風すき焼き (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵で食べる黒毛和牛のすき焼き (2026年の口コミ)。',
    notes: '[すき焼き・河原町、黒毛和牛の食べ放題] 阪急河原町駅すぐのビル4階の隠れたすき焼き店。ザラメで焼く関西風の黒毛和牛が食べ放題で、コシヒカリと野菜もおかわり自由。長く続く5,500円のキャンペーン (通常7,700円)。個室で完全予約制。店員の私語が大きく、看板もないという声も (2026年7月)。',
  });
}

// ================================================================ 黒毛和牛京焼肉 焼肉リン 御幸町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033292/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:30']), E = day(['16:00', '23:30']);
  put({
    id: 'kyoto_yakiniku_rin_gokomachi', name: '黒毛和牛京焼肉 焼肉リン 御幸町店 (Yakiniku Rin)', category: 'OMNI',
    lat: 35.004556, lng: 135.766421, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: marinated yakiniku and soy-based tare; meat sushi (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a black-wagyu yakiniku and offal house (Tabelog; reviews).',
    hours_raw: 'Tabelog and Gurunavi: Mon, Tue, Thu, Fri 17:00–23:30; Sat and Sun 16:00–23:30 (last order 23:00); closed Wednesday. Reservations taken; book early for the one private room for 6 upstairs (Gurunavi). 42 seats: tables, a 4-seat counter, tatami tables and the private room. Non-smoking until 21:00, then a designated smoking area. English menu and English-speaking staff; children and strollers welcome; birthday plates. Cards, transit IC, QR. In a townhouse on Gokomachi just north of Shijo, by Nishiki Market. Opened 20 December 2019 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi, by Nishiki Market — 3 min walk from Hankyu Kawaramachi exit 9',
    cuisine: 'A townhouse yakiniku of whole-cow-bought black wagyu (2023–2026 reviews) · tongue, kalbi, outside skirt, premium tripe — four slices a portion (2023–2024) · meat sashimi; meat sushi; courses with sashimi and salad (2024) · horumon (offal), cut large (July 2026) · reasonably priced for the Nishiki area (February 2025)',
    website: null, gmaps: gm('焼肉リン 御幸町店'), menu_url: null,
    notes: '[Yakiniku · Gokomachi near Nishiki, whole-cow black wagyu] A calm townhouse yakiniku a block from Nishiki Market buying black wagyu by the whole cow: tongue, skirt, offal and meat sushi, with tatami tables and a private room. Reviews swing: one found the meat sweet and fresh (May 2026), another found four-slice portions poor value and the self-ordering cold (July 2023). Smoking after 21:00. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 20 December 2019 (Tabelog). Reviewers from 2023 to 2026 describe a clean townhouse with a mix of locals and international guests, attentive staff, tablet self-ordering, whole-cow purchasing of black wagyu (May 2026) and prices not inflated for tourists (February 2025).',
      philosophy: null,
      specialty: 'Black-wagyu yakiniku; horumon.',
      anecdotes: [
        { text: 'July 2023: "each portion only comes with 4 cuts. The cost-performance is very poor… It\'s a self-ordering system with no customer service."', source: R + 'B469128738/' },
        { text: 'February 2025: "this place offers reasonable prices that are not inflated for tourists… I think they could be a bit more business-minded."', source: R + 'B517130275/' },
        { text: 'May 2026: "They buy the entire cow of carefully selected Kuroge Wagyu."', source: R + 'B528227278/' },
      ],
      japanese_sources_summary: '食べログ: 黒毛和牛京焼肉 焼肉リン 御幸町店、焼肉・ホルモン・居酒屋、中京区御幸町通四条上る大日町414-1、阪急京都河原町駅9番出口から徒歩3分、月火木金 17:00〜23:30・土日 16:00〜23:30、水曜休み、予約可、42席 (テーブル16、カウンター4、座敷16、個室6)、21時までは禁煙・以降は喫煙所、英語メニュー・英語を話すスタッフ、子供・ベビーカー可、誕生日のプレート、カード・交通系IC・QR可、2019年12月20日オープン。ぐるなび: 河原町駅徒歩2分、錦市場すぐ、町家、2階に6名までの完全個室1室。口コミ (2020年1月〜2026年10月、英語): タン、カルビ、ハラミ、上ミノ、1皿4切れ、肉刺し、肉寿司、コース、大きめのホルモン、黒毛和牛の一頭買い、観光地価格でない、地元と海外の客、1皿4切れで割高・セルフオーダーで接客がないという声、ご飯が少ないという声。',
      confidence: 'low', sources: [TB, 'https://r.gnavi.co.jp/kdj4600/', R + 'B469128738/', R + 'B481793769/', R + 'B498462160/', R + 'B517130275/', R + 'B528227278/', R + 'B531589489/', R + 'B537346755/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通四条上る大日町414-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004556, 135.766421); cross-checked: GSI 京都府京都市中京区大日町414番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B469128738/'],
    price_note: 'No prices in the sources; Tabelog\'s budget is ¥4,000–4,999.', last_checked: TODAY, items: [
      it('', '', 'Black-wagyu tongue, kalbi, outside skirt (4 slices a portion)', null, 'Meat', 'no', 'no', 'July 2023.', 'yakiniku'),
    ] }, {
    cuisine: '黒毛和牛を一頭買いする町家の焼肉店 (2023〜2026年の口コミ)・タン、カルビ、ハラミ、上ミノ。1皿4切れ (2023〜2024年)・肉刺し、肉寿司、刺身やサラダのコース (2024年)・大きめに切ったホルモン (2026年7月)・錦の近くで手頃な値段 (2025年2月)',
    neighborhood: '御幸町、錦市場そば。阪急河原町駅9番出口から徒歩3分',
    gf_detail: 'グルテンフリーではない: 味付けの焼肉と醤油系のたれ、肉寿司 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 黒毛和牛の焼肉とホルモンの店 (食べログ、口コミ)。',
    notes: '[焼肉・錦の近くの御幸町、一頭買いの黒毛和牛] 錦市場の1本隣の落ち着いた町家の焼肉店で、黒毛和牛を一頭買い。タン、ハラミ、ホルモン、肉寿司を座敷や個室で。評価は分かれ、甘くて新鮮という声 (2026年5月) と、1皿4切れで割高・セルフオーダーで冷たいという声 (2023年7月)。21時以降は喫煙可。水曜休み。',
  });
}

// ================================================================ 先斗町 鍋いし屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044440/'; const R = TB + 'dtlrvwlst/';
  const D = ['17:00', '22:30']; const WD = day(D), WE = day(['11:30', '14:30'], D);
  put({
    id: 'kyoto_pontocho_nabe_ishiya', name: '先斗町 鍋いし屋 (Pontocho Nabe Ishiya)', category: 'OMNI',
    lat: 35.005104, lng: 135.771123, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sukiyaki with a yakiniku sauce, sugar and dipping sauce (March 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, pork and duck sukiyaki and shabu-shabu (March 2026).',
    hours_raw: 'Tabelog: Mon, Tue, Thu 17:00–22:30; Fri, Sat, Sun and holidays also 11:30–14:30 at lunch (last orders 14:00 and 22:00); closed Wednesday. Reservations taken. 16 seats at the counter and tables; private room up to 20. Non-smoking. English picture menu; children, babies and strollers welcome; BYO allowed. Cards (incl. UnionPay), e-money, QR. Up a back alley off Pontocho (the 24th alley), 2F, in the same alley as 先斗町 鮨いし屋. Opened 5 February 2026 (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WE, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, the 24th alley — 5 min walk from Gion-Shijo and Kawaramachi',
    cuisine: 'A new (February 2026) wagyu sukiyaki and shabu-shabu counter from the いし屋 group (March 2026 review) · Kyoto brand beef (ribeye, lean, sirloin), Kyotanba pork, Kobe beef and Kyoto duck, as sukiyaki or shabu-shabu, à la carte or in courses (March 2026) · limited lunch: Kyoto beef shoulder-brisket sukiyaki or shabu-shabu set ¥1,980 (March 2026) · first slice cooked with the group\'s yakiniku sauce, then Kansai-style with zarame sugar (March, April 2026)',
    website: null, gmaps: gm('先斗町 鍋いし屋'), menu_url: null,
    notes: '[Sukiyaki · Pontocho alley, a new いし屋 counter] A small second-floor counter down a Pontocho back alley, opened February 2026 by the group behind Gion いし屋 and the neighbouring 鮨いし屋: Kyoto beef, Kyotanba pork, Kobe beef or Kyoto duck as sukiyaki or shabu-shabu, with a ¥1,980 limited lunch set at weekends. Friendly to solo diners. Only two reviews so far (March, April 2026). Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; part of the いし屋 group (March 2026 review)'], origin: null,
      background: 'Opened 5 February 2026 (Tabelog). A March 2026 reviewer calls it the newest shop of the Ishiya group, known for Gion Ishiya, Sushi Ishiya and Yakiniku Ishiya in Kyoto; 先斗町 鮨いし屋 is already in this app (kyoto_pontocho_sushi_ishiya, same alley). An April 2026 solo diner found the master and staff very friendly.',
      philosophy: null,
      specialty: 'Wagyu sukiyaki; shabu-shabu.',
      anecdotes: [
        { text: 'April 2026: "I visited on a Saturday by myself, craving Kansai-style sukiyaki with zarame sugar… The master and staff were very friendly, making it easy for me to enjoy my meal alone."', source: R + 'B525965212/' },
      ],
      japanese_sources_summary: '食べログ: 先斗町 鍋いし屋、鍋・すき焼き・居酒屋、中京区鍋屋町210 先斗町24番街路地奥 2F、祇園四条駅・阪急河原町駅から徒歩5分、月火木 17:00〜22:30・金土日祝 11:30〜14:30・17:00〜22:30 (L.O. 14:00・22:00)、水曜休み、予約可、16席 (カウンター、テーブル)、20名までの個室、禁煙、英語の写真メニュー、子供・赤ちゃん・ベビーカー可、持ち込み可、カード・電子マネー・QR可、2026年2月5日オープン。口コミ (2026年3・4月、英語): 祇園いし屋、鮨いし屋、焼肉いし屋などのいし屋グループの新店、和牛すき焼きとしゃぶしゃぶ、京の肉 (リブロース、赤身、サーロイン)、京丹波ポーク、神戸牛、京鴨、昼は数量限定の京の肉の肩ブリスケのすき焼き・しゃぶしゃぶ定食1,980円、最初の一枚は焼肉いし屋のたれ、ザラメの関西風、マスターとスタッフが親切。',
      confidence: 'low', sources: [TB, R + 'B523926876/', R + 'B525965212/'] },
    cultural_comfort: { level: 'english', note: 'English picture menu; new shop with few reviews.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町210 先斗町24番街路地奥 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened February 2026) with reviews from March and April 2026.' },
    pin_source: `Tabelog ${TB} (35.005072, 135.771084); cross-checked: GSI 京都府京都市中京区鍋屋町210番地 (lot) 26m; offset about 5 m north-east because kyoto_mamehachi_pontocho sits 4.9 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523926876/'],
    price_note: 'Price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch: Kyoto beef shoulder-brisket sukiyaki or shabu-shabu set (limited)', '¥1,980', 'Lunch', 'no', 'no', 'March 2026; weekends and holidays.', 'sukiyaki'),
    ] }, {
    cuisine: 'いし屋グループの2026年2月開店の和牛すき焼きとしゃぶしゃぶのカウンター (2026年3月の口コミ)・京の肉 (リブロース、赤身、サーロイン)、京丹波ポーク、神戸牛、京鴨をすき焼きかしゃぶしゃぶで、単品やコースで (2026年3月)・昼は数量限定の京の肉の肩ブリスケのすき焼き・しゃぶしゃぶ定食1,980円 (2026年3月)・最初の一枚はグループの焼肉のたれで、その後はザラメの関西風 (2026年3・4月)',
    neighborhood: '先斗町24番路地。祇園四条駅・河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 焼肉のたれ、砂糖、割下で食べるすき焼き (2026年3月)。',
    vegan_detail: 'ヴィーガン不可: 和牛、豚、鴨のすき焼きとしゃぶしゃぶ (2026年3月)。',
    notes: '[すき焼き・先斗町の路地、いし屋の新しいカウンター] 先斗町の路地奥のビル2階の小さなカウンターで、祇園いし屋や隣の鮨いし屋のグループが2026年2月に開店。京の肉、京丹波ポーク、神戸牛、京鴨をすき焼きやしゃぶしゃぶで、週末の昼は1,980円の限定の定食。一人でも入りやすい。口コミはまだ2件 (2026年3・4月)。水曜休み。',
  });
}

save();
