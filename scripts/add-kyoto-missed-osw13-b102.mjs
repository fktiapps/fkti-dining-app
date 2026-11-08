// Kyoto priority (kyoto-missed), worker osw13, batch 102 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: standsix, 祇園 石屋, 花美ばし, 京都のチーズ屋さん プチシャレ.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-102');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26025660', 'chain: プロント 四条烏丸店 by JEUGIA — a franchise of the national PRONTO chain (200+ shops; Tabelog links pronto.co.jp); the franchisee does not change the chain ruling (integrator, 2026-11-07)');
skip('26041812', 'large parent: クラウドネスト・ルーフトップバー is the rooftop bar of ヒルトン京都 (kyoto.hiltonjapan.co.jp/restaurants/cloud-nest) — a hotel restaurant of an international hotel group, as with KIHARU');
skip('26026212', 'chain: 鳥せゑ 蛸薬師店 (株式会社鳥せゑ, NTA T9130001013087) — 鳥せい/鳥せゑ already ruled a chain with eleven Kyoto shops (osw9-68, as for 26028812)');
skip('26041134', 'chain: 京都祇園とんかつ わだ福 is one of six とんかつ わだ福 shops (覚王山, 大須, 八事, HAERA栄, 四間道 in Nagoya, and Gion) run by 株式会社DADA of Komaki, Aichi (t-wadafuku.com)');

// ================================================================ standsix
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027664/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '19:00']); const E = day(['11:00', '19:00']);
  put({
    id: 'kyoto_standsix_gion', name: 'standsix', category: 'OMNI',
    lat: 35.004438, lng: 135.776751, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a drinks stand — coffee, homemade organic ginger and lemon syrups, matcha lemonade, spiced milk tea, beer and wine (Tabelog; 2020–2025 reviews). The only food mentioned is cookies (August 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: syrup drinks, coffee, beer and wine (Tabelog; reviews); a latte and spiced milk tea contain milk (2022, 2024). Cookies were not described.',
    hours_raw: 'Tabelog: Mon–Fri 12:00–19:00; Sat, Sun and holidays 11:00–19:00; closed only over New Year. No reservations. No credit cards (Tabelog). 7 seats: counter, a few tables and an open terrace; smoking allowed on the terrace. Pets welcome; take-out. Free Wi-Fi and charging plugs (Tabelog). A small stand with a DJ booth in an alley by Gion Duck Noodle, a 2-min walk from Yasaka Shrine (Tabelog; December 2025 review). Opened 9 July 2016. Accessories by the London brand design6 and BUNCH stone jewelry for sale.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion-machi Kitagawa by Yasaka Shrine — 5 min walk from Gion-Shijo',
    cuisine: 'A tiny stand café and bar off Shijo-dori near Yasaka Shrine, open from midday for coffee or a drink (Tabelog; 2017–2026 reviews) · drinks with homemade organic ginger and lemon syrups (Tabelog) · hot coffee in a big mug ¥600 (December 2025) · beer with lemon syrup (December 2020) · matcha lemonade (August 2021) · spiced milk tea with cinnamon (December 2024) · white wine (December 2025) · vodka shots (April 2023) · a "6"-shaped cookie (August 2026)',
    website: null, gmaps: gm('standsix 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Stand café & bar · Gion by Yasaka Shrine, an alley terrace] A seven-seat stand with a DJ booth and a small terrace in a Gion alley: coffee, homemade ginger and lemon syrup drinks, matcha lemonade, beer and wine from midday, mostly under ¥1,000. English-speaking staff. Smoking on the terrace; cash only. Open daily except New Year.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 9 July 2016 (Tabelog). Reviewers describe friendly staff — a woman working alone who spoke fluent English (December 2025), and a staff member who set out a heater and blankets on the winter terrace (December 2022). A December 2022 reviewer notes it appeared on a comedy duo\'s YouTube channel and sits in an alley comedians pass.',
      philosophy: null,
      specialty: 'Homemade ginger and lemon syrup drinks; coffee; daytime drinks.',
      anecdotes: [
        { text: 'December 2025: "The female staff member was working solo, moving quickly and speaking fluent English—very impressive! The coffee was served in a generous mug, and I felt that JPY 600 was a great price."', source: R + 'B519647109/' },
        { text: 'August 2026: "The stylish interior and the open terrace seating are simply amazing! At first, I thought it was all about looks, but both the drinks and cookies were genuinely delicious."', source: R + 'B537816922/' },
      ],
      japanese_sources_summary: '食べログ: standsix、カフェ・バー、東山区祇園北側329 GION KOTOビル1F、八坂神社から徒歩2分・祇園四条駅から徒歩5分、月〜金12:00〜19:00、土・日・祝11:00〜19:00、年末年始のみ休み、予約不可、カード不可、7席、テラス席は喫煙可、ペット可、テイクアウト可、Wi-Fiと電源あり、2016年7月9日オープン、自家製のオーガニックのしょうがシロップとレモンシロップのドリンク、ロンドンのブランドdesign6のアクセサリーとBUNCHの天然石のアクセサリーを販売。口コミ (2017年11月〜2026年8月、英語): ホットコーヒー600円 (2025年12月)、レモンシロップのビール、抹茶レモネード、シナモンのスパイスミルクティー、白ワイン、「6」の形のクッキー、DJブース、英語が堪能な女性スタッフ (2025年12月)、冬のテラスにヒーターと毛布 (2022年12月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B310143975', 'B433689418', 'B440177540', 'B443587994', 'B464645658', 'B465821370', 'B498361658', 'B519122288', 'B519647109', 'B537816922'])) },
    cultural_comfort: { level: 'english_friendly', note: 'Staff spoke fluent English (December 2025). Cash only; smoking on the terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園北側329 GION KOTOビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025 and August 2026.' },
    pin_source: `Tabelog ${TB} (35.004438, 135.776751); GSI lot 京都府京都市東山区祇園町北側329番地 about 34m away; nearest pin kyr_gion_duck_noodles 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519647109/'],
    price_note: 'Coffee price from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Hot coffee', '¥600', 'Drink', 'ask', 'ask', 'December 2025.', 'hot_coffee'),
      it('', '', 'Matcha lemonade', null, 'Drink', 'ask', 'ask', 'August 2021.', 'matcha_lemonade'),
      it('', '', 'Beer with lemon syrup', null, 'Drink', 'no', 'ask', 'December 2020.', 'lemon_beer'),
      it('', '', 'Spiced milk tea', null, 'Drink', 'ask', 'no', 'December 2024.', 'spiced_milk_tea'),
    ] }, {
    cuisine: '八坂神社近く、四条通の路地にある小さなスタンドのカフェ・バー。昼からコーヒーや一杯 (食べログ、2017〜2026年の口コミ)・自家製のオーガニックのしょうがシロップとレモンシロップのドリンク (食べログ)・大きなマグのホットコーヒー600円 (2025年12月)・レモンシロップのビール (2020年12月)・抹茶レモネード (2021年8月)・シナモンのスパイスミルクティー (2024年12月)・白ワイン (2025年12月)・ウォッカのショット (2023年4月)・「6」の形のクッキー (2026年8月)',
    neighborhood: '八坂神社そばの祇園町北側。祇園四条から徒歩5分',
    gf_detail: '要確認: コーヒー、自家製のオーガニックのしょうが・レモンシロップ、抹茶レモネード、スパイスミルクティー、ビール、ワインのスタンド (食べログ、2020〜2025年の口コミ)。食べ物はクッキーの記載のみ (2026年8月)。',
    vegan_detail: '要確認: シロップのドリンク、コーヒー、ビール、ワイン (食べログ、口コミ)。ラテとスパイスミルクティーは牛乳入り (2022年・2024年)。クッキーの説明はなし。',
    notes: '[スタンドのカフェ&バー・八坂神社そばの祇園、路地のテラス] DJブースと小さなテラスのある7席のスタンド。コーヒー、自家製しょうが・レモンシロップのドリンク、抹茶レモネード、ビールやワインを昼から、ほぼ1,000円以下。英語のできるスタッフ。テラスは喫煙可、現金のみ。年末年始以外は毎日営業。',
  });
}

// ================================================================ 祇園 石屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027616/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_gion_ishiya_yakiniku', name: '祇園 石屋 (Gion Ishiya)', category: 'OMNI',
    lat: 35.003229, lng: 135.776953, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakiniku with marinades, Kyoto-beef Wagyu katsu, bibim naengmyeon cold noodles and stone-grilled bibimbap (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant built on Kyoto beef; oxtail gukbap, Wagyu sukiyaki with egg (2022–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sun and holidays 11:30–14:00 and 17:00–23:00; closed Monday. Reservations taken. Cards, IC cards and PayPay. 35 seats: a counter on the 1st floor, tables on the 2nd with a view of Yasaka Shrine (2024–2026 reviews); private hire for 20–50. Designated smoking area; all seats non-smoking at lunch. Children welcome, with children\'s tableware. Meat for sale by the register (February 2026). Opposite the main gate of Yasaka Shrine, just south of the Shijo-dori corner (Tabelog). Opened 23 June 2016. One of three 石屋 yakiniku shops with 出町本店 and 太秦店 (regee.com).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion-machi Minamigawa opposite Yasaka Shrine — 5 min walk from Gion-Shijo',
    cuisine: 'Kyoto-beef yakiniku across from the main gate of Yasaka Shrine, with Korean dishes and a lunch menu (Tabelog; 2022–2026 reviews) · lunch yakiniku rice bowl with salad and miso soup; Kyoto-beef Wagyu katsu (May 2024) · lunch from about ¥3,000 (July 2026) · course with all-you-can-drink ¥8,000 (February 2024) · outside skirt, samgyeopsal, heart (April 2025) · negi-tan shio; Wagyu sukiyaki; bibim naengmyeon (July 2026) · stone-grilled cheese bibimbap; stone-grilled garlic rice (April 2026) · oxtail gukbap (January 2022)',
    website: 'http://regee.com/free/gionishiya', gmaps: gm('祇園 石屋 焼肉'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · opposite Yasaka Shrine, a second-floor view] A yakiniku house facing the gate of Yasaka Shrine — ask for the 2nd floor to look over it — grilling Kyoto beef, with Korean sides like stone-pot bibimbap and cold noodles. Lunch bowls and beef katsu from about ¥2,000–3,000; dinner around ¥8,000. Pricey for the area, some say. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 23 June 2016 (Tabelog), a Gion branch of the 石屋 yakiniku shops (出町本店 and 太秦店; regee.com). Reviewers describe a focus on Kyoto beef, attentive staff, many overseas guests and a full house of locals on a New Year Saturday (January 2025). Criticism: prices that seem aimed at tourists (March 2026), somewhat disorganized service (April 2026), and lunch on the pricier side (July 2026).',
      philosophy: null,
      specialty: 'Kyoto-beef yakiniku; Wagyu katsu at lunch.',
      anecdotes: [
        { text: 'February 2024: "Considering the price, I expected not to receive high-quality meat, but I was pleasantly surprised to be served beautifully marbled cuts."', source: R + 'B479514274/' },
        { text: 'March 2026: "The meat was delicious, but I felt the prices were a bit high, possibly catering to tourists due to the location."', source: R + 'B524453224/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 石屋、焼肉・日本料理・居酒屋、東山区祇園町南側539、京阪祇園四条駅から八坂神社方面へ徒歩5分、突き当たりを南へ曲がってすぐ、火〜日・祝11:30〜14:00・17:00〜23:00、月曜休み、予約可、カード・交通系IC・PayPay可、35席、貸切20〜50名、分煙 (ランチは全席禁煙)、子連れ可、2016年6月23日オープン。公式サイト (regee.com): 焼肉石屋 出町店本店・太秦店・祇園石屋。口コミ (2022年1月〜2026年9月、英語): 京都牛中心の焼肉、2階から八坂神社が見える、ランチの焼肉丼、京都牛の和牛カツ、飲み放題付きコース8,000円 (2024年2月)、ねぎタン塩、和牛すき焼き、ビビン冷麺、石焼チーズビビンバ、石焼ガーリックライス、テールクッパ、ランチは3,000円前後からとやや高め (2026年7月)、観光地価格との声 (2026年3月)、サービスが少し不慣れとの声 (2026年4月)。',
      confidence: 'medium', sources: [TB, 'http://regee.com/free/gionishiya'].concat(rv(R, ['B444649036', 'B479514274', 'B484622845', 'B492154496', 'B499112638', 'B502312696', 'B520853340', 'B524453224', 'B525065325', 'B525640153', 'B532008627', 'B535876647'])) },
    cultural_comfort: { level: 'some_english', note: 'Many overseas guests and staff (2024–2026 reviews); children welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側539',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April, July and September 2026.' },
    pin_source: `Tabelog ${TB} (35.003229, 135.776953); GSI lot 京都府京都市東山区祇園町南側539番地 about 36m away; nearest pin kyoto_kameya_kiyonaga 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479514274/', R + 'B532008627/'],
    price_note: 'Course price from a February 2024 review; lunch level from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Yakiniku course with all-you-can-drink', '¥8,000', 'Course', 'no', 'no', 'February 2024.', 'yakiniku_course'),
      it('', '', 'Yakiniku rice bowl (lunch, with salad and miso soup)', null, 'Lunch', 'no', 'no', 'May 2024; February 2026.', 'yakiniku_don'),
      it('', '', 'Kyoto-beef Wagyu katsu (lunch)', null, 'Lunch', 'no', 'no', 'May 2024; March 2025.', 'wagyu_katsu'),
      it('', '', 'Stone-grilled cheese bibimbap', null, 'Rice', 'no', 'no', 'April 2026.', 'cheese_bibimbap'),
      it('', '', 'Bibim naengmyeon (spicy cold noodles)', null, 'Noodles', 'no', 'no', 'July 2026.', 'bibim_naengmyeon'),
    ] }, {
    cuisine: '八坂神社の正門前、京都牛の焼肉と韓国料理、ランチあり (食べログ、2022〜2026年の口コミ)・ランチの焼肉丼 (サラダ・味噌汁付き)、京都牛の和牛カツ (2024年5月)・ランチは3,000円前後から (2026年7月)・飲み放題付きコース8,000円 (2024年2月)・外ハラミ、サムギョプサル、ハツ (2025年4月)・ねぎタン塩、和牛すき焼き、ビビン冷麺 (2026年7月)・石焼チーズビビンバ、石焼ガーリックライス (2026年4月)・テールクッパ (2022年1月)',
    neighborhood: '八坂神社の向かいの祇園町南側。祇園四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: たれの焼肉、京都牛の和牛カツ、ビビン冷麺、石焼ビビンバ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 京都牛中心の焼肉店。テールクッパ、卵の和牛すき焼き (2022〜2026年の口コミ)。',
    notes: '[焼肉・八坂神社の向かい、2階からの眺め] 八坂神社の正門前の焼肉店。2階からは神社が見える。京都牛の焼肉に、石焼ビビンバや冷麺など韓国の料理も。ランチの丼や牛カツは2,000〜3,000円ほど、夜は8,000円前後。場所柄やや高めとの声も。月曜休み。',
  });
}

// ================================================================ 花美ばし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027946/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_hanamibashi_kiyamachi', name: '花美ばし (Hanami Bashi)', category: 'OMNI',
    lat: 35.009923, lng: 135.770861, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Japanese courses with tempura, abalone and fugu fried in a rice-cracker coating, saikyo-miso grilled mackerel and simmered dishes (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood courses — sashimi, abalone, crab, fugu zosui — with some beef (2016–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 17:30–24:00; closed Sunday; hours and closed days may change, so check before visiting. Reservations taken. An October 2026 reviewer writes that first-time guests are not usually accepted and that the reviewer got in with a companion who had been before. Cards (JCB, AMEX, Diners). A private room for 4 (2nd floor, February 2025). On Kiyamachi near Sanjo, with an entrance that is hard to find (2016 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi just north of Sanjo — 158m from Sanjo',
    cuisine: 'A small Kiyamachi Japanese restaurant serving seafood-led courses and rare sake at the counter, reportedly moved from Shichihonmatsu Marutamachi (2016 review) (Tabelog; 2016–2026 reviews) · January 2026 course: New Year appetizers with kazunoko and simmered abalone; sashimi of sea bream, chu-toro and horse mackerel; steamed turnip; saikyo-miso grilled mackerel; abalone and fugu fried with arare; kobako crab with vinegar; grilled fillet; fugu zosui with milt; shiranui citrus · tempura, white fish and squid with seaweed salt (January 2023) · cheese marinated in moromi (March 2017) · a wide sake list (December 2025)',
    website: 'https://ameblo.jp/hanamibashi/', gmaps: gm('花美ばし 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Japanese courses · Kiyamachi near Sanjo, a regulars\' counter] A hidden Kiyamachi counter where a sociable owner pours rare sake and the chef sends out seafood courses — sashimi, abalone, winter fugu and kobako crab — at about ¥15,000–25,000. First-timers are usually turned away (October 2026 review), so go with a regular. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Head chef (unnamed)'], origin: null,
      background: 'A September 2016 reviewer writes that the restaurant moved from Shichihonmatsu Marutamachi and specializes in seafood from Ise Bay ("I heard"), and that the owner welcomed guests while the head chef saw them off; an October 2016 reviewer mentions the owner and his wife. Later reviewers describe a friendly, straightforward owner who brings the counter of regulars together (December 2025). Criticism: a February 2025 business diner found the course ordinary and the private room lacking a place for coats.',
      philosophy: null,
      specialty: 'Seafood courses; Japanese sake.',
      anecdotes: [
        { text: 'December 2025: "The counter is filled with regular customers, but the friendly and straightforward owner connects everyone… just watching the owner from the counter is like enjoying a theatrical performance."', source: R + 'B518984541/' },
        { text: 'October 2026: "Although they usually don\'t accept first-time customers, I was allowed in this time because my companion had been here before."', source: R + 'B536835076/' },
      ],
      japanese_sources_summary: '食べログ: 花美ばし、日本料理、中京区上大阪町524-1、三条から158m、月〜土17:30〜24:00、日曜休み、営業時間・定休日は変更の可能性あり、予約可、カード可 (JCB・AMEX・Diners)、4名の個室、魚にこだわり、ブログ ameblo.jp/hanamibashi。口コミ (2016年9月〜2026年10月、英語): 木屋町の入口のわかりにくい店、Shichihonmatsu Marutamachiから移転したとの話、伊勢湾の魚介と聞いた (2016年9月)、店主と奥さん (2016年10月)、もろみ漬けのチーズ (2017年3月)、塩で食べる天ぷら (2023年1月)、2026年1月のコース (数の子と煮あわびの前菜、鯛・中トロ・あじの刺身、かぶの蒸し物、さばの西京焼き、あわびとふぐのあられ揚げ、こうばこがにの酢の物、ヒレ焼き、白子入りのふぐ雑炊、しらぬい)、日本酒の品ぞろえ、常連をつなぐ気さくな店主 (2025年12月)、一見さんは通常受けないとの記載 (2026年10月)、平凡なコースとの声 (2025年2月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B219085095', 'B223923954', 'B258341496', 'B426167845', 'B459791167', 'B502230419', 'B518984541', 'B522267041', 'B536835076'])) },
    cultural_comfort: { level: 'japanese', note: 'Regulars\' counter; first-time guests usually not accepted (October 2026 review) — go with someone who has been.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上大阪町524-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025, January 2026 and October 2026.' },
    pin_source: `Tabelog ${TB} (35.009923, 135.770861); GSI lot 京都府京都市中京区上大阪町524番地 about 15m away; nearest pin kyoto_caamm_bar 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522267041/'],
    price_note: 'No item prices; reviewers spent ¥10,000–29,999 a head (2016–2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal Japanese course (seafood; fugu zosui in winter)', null, 'Course', 'no', 'no', 'January 2026.', 'omakase_course'),
      it('', '', 'Cheese marinated in moromi', null, 'Small dish', 'ask', 'no', 'March 2017.', 'moromi_cheese'),
    ] }, {
    cuisine: '木屋町の小さな日本料理店。魚介中心のコースとカウンターで珍しい日本酒、Shichihonmatsu Marutamachiから移転したとの話 (2016年の口コミ) (食べログ、2016〜2026年の口コミ)・2026年1月のコース: 数の子や煮あわびの正月の前菜、鯛・中トロ・あじの刺身、かぶの蒸し物、さばの西京焼き、あわびとふぐのあられ揚げ、こうばこがにの酢の物、ヒレ焼き、白子入りのふぐ雑炊、しらぬい・海藻の塩で食べる天ぷら、白身魚、いか (2023年1月)・もろみ漬けのチーズ (2017年3月)・豊富な日本酒 (2025年12月)',
    neighborhood: '三条のすぐ北の木屋町。三条から158m',
    gf_detail: 'グルテンフリーではない: 天ぷら、あわびとふぐのあられ揚げ、さばの西京焼き、煮物のコース (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、あわび、かに、ふぐ雑炊など魚介のコース、牛肉も少し (2016〜2026年の口コミ)。',
    notes: '[日本料理のコース・三条近くの木屋町、常連のカウンター] 木屋町の隠れたカウンター。気さくな店主が珍しい日本酒を注ぎ、料理人が刺身、あわび、冬のふぐやこうばこがになど魚介のコースを出す。15,000〜25,000円ほど。一見さんは通常断られるとの口コミ (2026年10月) があり、常連と一緒に。日曜休み。',
  });
}

// ================================================================ 京都のチーズ屋さん プチシャレ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032830/'; const R = TB + 'dtlrvwlst/';
  const W = day(['15:00', '22:00']); const E = day(['12:00', '22:00']);
  put({
    id: 'kyoto_petit_chalet_cheese', name: '京都のチーズ屋さん プチシャレ (Kyoto no Cheese Yasan Petit Chale)', category: 'OMNI',
    lat: 34.996957, lng: 135.770092, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cheese dishes include carbonara, Gorgonzola penne, lasagna, baked cheese curry, loco moco and a cheese baguette (2023–2024 reviews). Cheese by weight and the cheesecake were not described as gluten-free — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a cheese shop — cheese, cheesecake with meringue, cheese dishes with minced meat (2023–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Thu, Fri 15:00–22:00; Sat, Sun and holidays 12:00–22:00; closed Tuesday and Wednesday; cheese and cake for sale daily 12:00–22:00 (Tabelog); check social media for changes. Reservations taken; a 2024 reviewer suggests calling ahead at busy times. Cards accepted. 12 seats: about 4 at the counter and tatami rooms in a renovated townhouse where shoes come off (2023–2025 reviews). Non-smoking. Sommelier on staff; take-out. On the way from Kiyomizu-Gojo to Rokuharamitsu-ji, 3 min walk from Kiyomizu-Gojo. Opened 4 August 2019.',
    hours: { 0: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo, on the way from Kiyomizu-Gojo to Rokuharamitsu-ji — 3 min walk from Kiyomizu-Gojo',
    cuisine: 'A cheese shop and wine bar in a renovated townhouse: cheese cut to order, cheesecake sold by weight, cheese dishes and wine, run by cheese specialists and sommeliers (Tabelog; 2023–2026 reviews) · baked cheese curry with seven cheeses ¥1,430 (May 2023) · cheesecake by the gram, topped with a panda meringue (2024–2026) · Saint-André, Roquefort, pecorino carbonara, Gorgonzola penne, loco moco, cheese platter, chestnut cheesecake, two-cheese baguette (October 2024; about ¥5,000 with drinks) · lasagna (January 2024) · wines by the glass from France, Chile and Spain; grape juice in a wine glass (2025)',
    website: 'https://www.petitchalet-kyoto.com', gmaps: gm('京都のチーズ屋さん プチシャレ'), menu_url: TB + 'dtlmenu/',
    notes: '[Cheese shop & wine bar · Gojo near Kiyomizu-Gojo, a townhouse with tatami rooms] A cheese specialist in an old Kyoto townhouse: buy cheese or rich cheesecake by the gram, or sit on tatami for baked cheese curry, pasta and a cheese plate with wine. Pandas everywhere — even on the cake. About ¥2,000 for cake, ¥5,000 with wine. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Cheese professionals and sommeliers on staff'], origin: null,
      background: 'Opened 4 August 2019 (Tabelog). A February 2024 reviewer writes that three staff hold a specialist cheese qualification, one of them also a pastry chef, alongside qualified sommeliers. Reviewers describe an owner who loves pandas (panda meringues and decorations), homemade side dishes, and a friendly counter of regulars (2024–2025).',
      philosophy: null,
      specialty: 'Cheesecake by weight; cheese dishes; cheese and wine pairing.',
      anecdotes: [
        { text: 'February 2024: "Not only do they sell cheese by weight, but they also offer cheesecakes by weight. You can point out how much you want, whether it\'s in grams or by gesturing."', source: R + 'B480713308/' },
        { text: 'May 2023: "I was impressed by the baked cheese curry for JPY 1430 at the cheese shop… a delightful blend of seven types of cheese."', source: R + 'B465028766/' },
      ],
      japanese_sources_summary: '食べログ: 京都のチーズ屋さん プチシャレ、ワインバー・ケーキ・サンドイッチ、東山区新宮川町通五条上ル山田町494、京阪清水五条駅から徒歩約3分、月・木・金15:00〜22:00、土・日・祝12:00〜22:00、火・水曜休み、物販は毎日12:00〜22:00、予約可、カード可、12席、座敷あり、禁煙、ソムリエあり、テイクアウト可、2019年8月4日オープン。口コミ (2023年5月〜2026年4月、英語): 7種のチーズの焼きチーズカレー1,430円 (2023年5月)、量り売りのチーズケーキとパンダのメレンゲ、チーズの資格を持つスタッフ3人 (うち1人はパティシエ) とソムリエ (2024年2月)、サンタンドレ、ロックフォール、ペコリーノのカルボナーラ、ゴルゴンゾーラのペンネ、ロコモコ、栗のチーズケーキ (2024年10月)、ラザニア、町家を改装した座敷、パンダ好きの店主、グラスワイン、ぶどうジュース。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B465028766', 'B477894912', 'B480713308', 'B485434822', 'B494352351', 'B502627004', 'B507369916', 'B509741965', 'B511438901', 'B525696259', 'B527935753', 'B532488980'])) },
    cultural_comfort: { level: 'japanese', note: 'Shoes off for the tatami rooms; counter with regulars.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新宮川町通五条上ル山田町494',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated January and April 2026.' },
    pin_source: `Tabelog ${TB} (34.996957, 135.770092); GSI lot 京都府京都市東山区山田町494番地 about 17m away; nearest pin kyoto_kocha_club_gojo 64m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B465028766/', R + 'B494352351/'],
    price_note: 'Curry price from a May 2023 review; cheesecake priced by weight.', last_checked: TODAY, items: [
      it('', '', 'Baked cheese curry (seven cheeses)', '¥1,430', 'Food', 'no', 'no', 'May 2023.', 'cheese_curry'),
      it('', '', 'Cheesecake, by weight', null, 'Sweets', 'ask', 'no', '2024–2026.', 'cheesecake'),
      it('', '', 'Cheese platter / cheese by weight', null, 'Cheese', 'ask', 'no', 'October 2024; April 2026.', 'cheese_platter'),
      it('', '', 'Pecorino Romano carbonara', null, 'Pasta', 'no', 'no', 'October 2024.', 'carbonara'),
    ] }, {
    cuisine: '町家を改装したチーズ屋とワインバー。チーズの切り売り、量り売りのチーズケーキ、チーズ料理とワイン。チーズの専門資格を持つスタッフとソムリエ (食べログ、2023〜2026年の口コミ)・7種のチーズの焼きチーズカレー1,430円 (2023年5月)・グラム単位のチーズケーキ、パンダのメレンゲのせ (2024〜2026年)・サンタンドレ、ロックフォール、ペコリーノのカルボナーラ、ゴルゴンゾーラのペンネ、ロコモコ、チーズの盛り合わせ、栗のチーズケーキ、2種のチーズのバゲット (2024年10月、飲み物込み5,000円ほど)・ラザニア (2024年1月)・フランス、チリ、スペインのグラスワイン、ワイングラスのぶどうジュース (2025年)',
    neighborhood: '五条、清水五条からRokuharamitsu-jiへ向かう道。清水五条から徒歩3分',
    gf_detail: 'グルテンフリーではない: カルボナーラ、ゴルゴンゾーラのペンネ、ラザニア、焼きチーズカレー、ロコモコ、チーズのバゲット (2023〜2024年の口コミ)。チーズの量り売りとチーズケーキはグルテンフリーの記載なし、要確認。',
    vegan_detail: 'ヴィーガン不可: チーズ専門店。チーズ、メレンゲのチーズケーキ、ひき肉入りのチーズ料理 (2023〜2026年の口コミ)。',
    notes: '[チーズ屋&ワインバー・清水五条近くの五条、座敷のある町家] 古い町家のチーズ専門店。チーズや濃厚なチーズケーキをグラム単位で買うことも、座敷で焼きチーズカレーやパスタ、チーズの盛り合わせとワインを楽しむことも。ケーキにまでパンダ。ケーキなら2,000円ほど、ワインと一緒なら5,000円ほど。火・水曜休み。',
  });
}

save();
