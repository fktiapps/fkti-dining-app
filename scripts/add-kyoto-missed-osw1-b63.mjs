// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 63.
//   + 登希代 Tokiyo (obanzai counter on Nawate in Gion)
//   + すし･あぶり わさび Sushi Aburi Wasabi (sushi izakaya in Gion; 10% service charge for foreign guests)
//   + ワイン食堂UmiUsagi Wine Shokudo UmiUsagi (Italian wine bistro near Shijo-Yanaginobamba)
//   + 海鮮個室居酒屋 ひとさじ Hitosaji (seafood izakaya of private rooms; 株式会社レイズ, Nagoya)
//   - 大衆酒場 ひとめぼれ 京都木屋町店, 我瑠慕, Shisha Lounge 1 moku mock 木屋町, ボードゲームカフェ dicea: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26043356 (skipped), 26005226,
//   26004080, 26018870, 26017046 (skipped), 26038940, 26045678 (skipped), 26044430 (skipped).
//   queue-status.jsonl grepped for each brand (ひとめぼれ, 登希代, わさび, UmiUsagi, 我瑠慕, ひとさじ): one earlier ruling —
//   ひとめぼれ was ruled a chain in osw8-53.
//   None of the four drafted is in data/kyoto.json by name or address (元吉町42, 富永町108-1, 相之町137, 山崎町236-2).
//   Same-name count (same brand or operator only): one shop each in our crawl and in Tabelog's name search. ひとさじ: invoice
//   holder 株式会社レイズ (Nagoya, NTA register), size not established — drafted and flagged. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: わさび 外国のお客様は、サービス料10％を頂戴しております。;
//   UmiUsagi 350円（税抜）、(コースの場合サービス料・チャージ料なし）; none listed for 登希代 and ひとさじ.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (わさび June 2026,
//   ひとさじ March and June 2026).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-63');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043356', '大衆酒場 ひとめぼれ 京都木屋町店: chain — already ruled in osw8-53 (肉ト魚 大衆酒場 ひとめぼれ, nine shops in Aichi plus Osaka and Kyoto); Tabelog’s name search lists Meieki, Sannomiya, Ura-Namba, Kanayama, Gifu, Hamamatsu and Kyoto Kiyamachi shops');
skip('26017046', '我瑠慕: too thin to verify — one review since 2025 (March 2025) with no text; a bar with no menu details');
skip('26045678', 'Shisha Lounge 1 moku mock 木屋町: no reviews on Tabelog');
skip('26044430', 'ボードゲームカフェ dicea: no reviews on Tabelog');

// ================================================================ 登希代
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005226/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-tokiyo.com/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_tokiyo_gion', name: '登希代 (Tokiyo)', category: 'OMNI',
    lat: 35.006038, lng: 135.772939, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai of the day, teppan dishes, oden in winter and an egg-over-rice finish with sansho and chili oil; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many obanzai are vegetable dishes (yam, jellyfish-and-cucumber vinegar and others), but dashi is not described (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 17:00–22:00 (L.O. 21:30); closed Sundays and holidays (Tabelog). Reservations by phone, or online or a second number if the phone is not answered (Tabelog). Cards, e-money and QR payments (Tabelog). 29 seats with a counter and tables; a private room for 8 (Tabelog; October 2025). On Nawate north of Shinbashi in Gion, about 3–5 min from Gion-Shijo Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Nawate north of Shinbashi — 3–5 min from Gion-Shijo',
    cuisine: 'A long-loved obanzai house with 15–20 dishes laid out on the counter (Tabelog; 2025–2026) · three obanzai ¥1,100, six ¥1,980 (November 2025) — e.g. nagaimo, jellyfish and cucumber in vinegar · teppan dishes such as dashimaki with green onion (July 2025) · oden in winter (November 2025, October 2026) · the house egg over rice with fresh sansho and chili oil to finish (June and October 2026) · about ¥6,000 a head with drinks (October 2026)',
    website: SITE, gmaps: gm('登希代 祇園 縄手'), menu_url: SITE,
    notes: '[Obanzai · Gion on Nawate, a counter of home cooking] A nostalgic, signature-covered Gion izakaya where 15–20 obanzai line the counter — pick three for ¥1,100 or six for ¥1,980 — with teppan dashimaki, winter oden and an egg-over-rice finish with sansho and chili oil. Closed Sundays and holidays.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Reviewers describe a Gion restaurant cherished for years, its walls covered in signatures (August 2025), and a chef a regular feels is family (November 2025). One July 2026 reviewer found some obanzai seemed to be the previous day’s, served from storage.',
      philosophy: null, specialty: 'Obanzai; egg over rice.',
      anecdotes: [
        { text: 'A June 2026 visitor ordered six obanzai, then six more, and finished with the egg over rice.', source: R + 'B530003701/' },
        { text: 'A November 2025 regular came back in the rain at the end of the month for the first oden of the season.', source: R + 'B511327383/' },
      ],
      japanese_sources_summary: '食べログ: 登希代、日本料理・居酒屋、東山区縄手通新橋上ル元吉町42、祇園四条駅から徒歩3〜5分、月〜土 17:00〜22:00 (L.O.21:30)、日祝休み、電話がつながらなければネット予約か別番号、カード・電子マネー・QR決済可、29席、8名の個室、10種以上のおばんざい。口コミ (2025〜2026年、英語): カウンターに15〜20種のおばんざい、3種1,100円、6種1,980円、長芋、くらげと胡瓜の酢の物、鉄板のねぎ入りだし巻き、冬のおでん、山椒とラー油の卵かけご飯、飲んで6,000円ほど、壁一面のサイン、家族のような大将。',
      confidence: 'medium', sources: [SITE, TB, R + 'B443582159/', R + 'B509644117/', R + 'B511327383/', R + 'B511395373/', R + 'B516495906/', R + 'B516959988/', R + 'B522124315/', R + 'B530003701/', R + 'B532261371/', R + 'B537215551/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter obanzai; point and choose.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区縄手通新橋上ル元吉町42',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006038, 135.772939); cross-checked: GSI 京都府京都市東山区元吉町42番地 (lot) 76m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516495906/'],
    price_note: 'Prices from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Three obanzai', '¥1,100', 'Obanzai', 'ask', 'ask', 'November 2025.', 'obanzai3'),
      it('', '', 'Six obanzai', '¥1,980', 'Obanzai', 'ask', 'ask', 'November 2025.', 'obanzai6'),
      it('', '', 'Egg over rice with sansho and chili oil', '', 'Rice', 'ask', 'no', 'June and October 2026.', 'tamago_gohan'),
    ] }, {
    cuisine: 'カウンターに15〜20種のおばんざいが並ぶ長く愛される店 (食べログ、2025〜2026年)・おばんざい3種1,100円、6種1,980円 (2025年11月)。長芋、くらげと胡瓜の酢の物など・鉄板のねぎ入りだし巻きなど (2025年7月)・冬はおでん (2025年11月、2026年10月)・締めは実山椒とラー油の卵かけご飯 (2026年6月・10月)・飲んで1人6,000円ほど (2026年10月)',
    neighborhood: '祇園、新橋の北の縄手。祇園四条から徒歩3〜5分',
    gf_detail: '要確認。日替わりのおばんざい、鉄板料理、冬のおでん、山椒とラー油の卵かけご飯。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。長芋やくらげと胡瓜の酢の物など野菜のおばんざいも多いが、出汁については書かれていない (2025〜2026年の口コミ)。',
    notes: '[おばんざい・祇園の縄手、家庭料理のカウンター] サインで埋まる懐かしい雰囲気の祇園の店。カウンターに15〜20種のおばんざいが並び、3種1,100円か6種1,980円で選べる。鉄板のだし巻き、冬のおでん、締めは山椒とラー油の卵かけご飯。日祝休み。',
  });
}

// ================================================================ すし･あぶり わさび
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004080/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:30', '23:30']); const B = day(['17:30', '24:00']); const S = day(['17:30', '23:00']);
  put({
    id: 'kyoto_sushi_aburi_wasabi_gion', name: 'すし･あぶり わさび (Sushi Aburi Wasabi)', category: 'OMNI',
    lat: 35.004529, lng: 135.773846, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi, sashimi, aburi, grilled fish and crab tempura; soy sauce and tare not described (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood izakaya (Tabelog; reviews).',
    hours_raw: 'Monday–Thursday 17:30–23:30 (L.O. 22:30); Friday and Saturday 17:30–24:00; Sunday and holidays 17:30–23:00 (Tabelog). Reservations accepted, same day possible (Tabelog; October 2025). Service charge 10% for foreign guests (Tabelog, original 外国のお客様は、サービス料10％を頂戴しております。). Cards, PayPay and WeChat Pay; no e-money (Tabelog). 62 seats: 12 at the counter, round tables for 6, sunken-kotatsu private rooms for up to 10–12 (Tabelog; December 2025). Tablet ordering (March 2026). Many of the staff are from overseas and speak Japanese well (October 2025, March 2026). On Tominaga-cho in Gion, 5 min from Keihan Gion-Shijo or Hankyu Kawaramachi (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Tominaga-cho north of Shijo — 5 min from Gion-Shijo',
    cuisine: 'A casual sushi izakaya in Gion with fish delivered from Ise (Tabelog) · sushi and aburi, sashimi platters, grilled yellowtail collar (2025–2026) · ¥10,000 course with sashimi, crab, crab tempura and sushi (December 2025) · plenty of dishes beyond sushi; some to grill yourself (October 2025, April 2026) · free-flow drinks with courses (Tabelog)',
    website: null, gmaps: gm('すし あぶり わさび 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Sushi izakaya · Gion Tominaga-cho, Ise fish] A roomy sushi izakaya in Gion with a counter, round tables and sunken-kotatsu private rooms, serving sushi and aburi of Ise-delivered fish, sashimi, grilled collar and crab courses, ordered by tablet. Note: a 10% service charge applies to foreign guests. Open until midnight on weekends.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes fish delivered from an Ise fishing port. Reviewers describe friendly, attentive staff, many from overseas and fluent in Japanese (October 2025, March 2026).',
      philosophy: null, specialty: 'Sushi and aburi.',
      anecdotes: [
        { text: 'A December 2025 party of ten, including six visitors from abroad, filled a sunken-kotatsu room on the ¥10,000 crab-and-sushi course.', source: R + 'B518912408/' },
        { text: 'A March 2026 solo diner had a jacket taken and hung by one of four staff on the counter.', source: R + 'B524192417/' },
      ],
      japanese_sources_summary: '食べログ: すし･あぶり わさび、寿司・居酒屋・海鮮、東山区富永町108-1 タケトミビル1F、京阪祇園四条駅・阪急河原町駅から徒歩5分、月〜木 17:30〜23:30、金土 17:30〜24:00、日祝 17:30〜23:00、外国のお客様はサービス料10%、カード・QR決済可、62席 (カウンター12、6名の丸テーブル3、半個室6)、掘りごたつの個室、伊勢の漁港直送。口コミ (2025〜2026年、英語): 寿司と炙り、刺身の盛り合わせ、ぶりかまの塩焼き、刺身・蟹・蟹天ぷら・寿司の1万円のコース、自分で焼く料理、タブレットで注文、海外出身の店員が多く日本語が上手、当日予約も可。',
      confidence: 'medium', sources: [TB, R + 'B51255987/', R + 'B516170469/', R + 'B518886738/', R + 'B518912408/', R + 'B519500723/', R + 'B521588291/', R + 'B524192417/', R + 'B525935310/', R + 'B530465316/'] },
    cultural_comfort: { level: 'english', note: '10% service charge for foreign guests (Tabelog); staff from overseas.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町108-1 タケトミビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.004529, 135.773846); cross-checked: GSI 京都府京都市東山区富永町108番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B518912408/'],
    price_note: 'Course price from a December 2025 review; 10% service charge for foreign guests.', last_checked: TODAY, items: [
      it('', '', 'Course with sashimi, crab, crab tempura and sushi', '¥10,000', 'Courses', 'ask', 'no', 'December 2025.', 'course'),
      it('', '', 'Service charge (foreign guests)', '10%', 'Charges', '', '', 'Tabelog.', 'service'),
    ] }, {
    cuisine: '伊勢の漁港直送の魚の祇園の気軽な寿司居酒屋 (食べログ)・寿司と炙り、刺身の盛り合わせ、ぶりかまの塩焼き (2025〜2026年)・刺身、蟹、蟹の天ぷら、寿司の1万円のコース (2025年12月)・寿司以外の料理も多く、自分で焼く品も (2025年10月、2026年4月)・コースには飲み放題も (食べログ)',
    neighborhood: '祇園、四条の北の富永町。祇園四条から徒歩5分',
    gf_detail: '要確認。寿司、刺身、炙り、焼き魚、蟹の天ぷら。醤油やたれについては書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。寿司と海鮮の居酒屋 (食べログ、口コミ)。',
    notes: '[寿司居酒屋・祇園の富永町、伊勢の魚] カウンター、丸テーブル、掘りごたつの個室のある広い祇園の寿司居酒屋。伊勢直送の魚の寿司と炙り、刺身、かま焼き、蟹のコースをタブレットで注文。注意: 外国のお客様はサービス料10%。週末は24時まで。',
  });
}

// ================================================================ ワイン食堂UmiUsagi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26018870/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_wine_shokudo_umiusagi', name: 'ワイン食堂UmiUsagi (Wine Shokudo UmiUsagi)', category: 'OMNI',
    lat: 35.002746, lng: 135.763797, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian plates — ajillo with bread, pâté, pasta, risotto, sausages, meat; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salads and risotto appear, but dishes are not described as vegan (2025–2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 18:00–22:00 (L.O. 21:30); closed Tuesday (Tabelog). Same-day reservations accepted (Tabelog; January 2026). Charge ¥350 plus tax, none with a course (Tabelog, original 350円（税抜）、(コースの場合サービス料・チャージ料なし）). Cards, Edy and QR payments (Tabelog). 24 seats; parties up to 30 (Tabelog). A sign welcomes foreign guests (November 2025). On the ground floor of the ルシェル林ビル on Yanaginobamba south of Shijo, 5 min from Shijo or Karasuma stations (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanaginobamba south of Shijo — 5 min from Shijo-Karasuma',
    cuisine: 'A wood-lined Italian wine bistro of about 13 years, with Italian wines and meat dishes (Tabelog) · course with Tankaku Wagyu from Tohoku and Hokkaido (Tabelog) · Italian bottles around ¥5,000; few wines by the glass (January and December 2025) · salted-caramel walnuts as the appetizer (November 2025) · ajillo with chewy bread, pâté, pasta, risotto (January 2026) · sausages, salad and meat (March 2026)',
    website: null, gmaps: gm('ワイン食堂UmiUsagi'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian wine bistro · Yanaginobamba near Shijo, a back-alley gem] A warm, wood-lined Italian bistro of about thirteen years tucked south of Shijo, with Italian bottles around ¥5,000, ajillo, pâté, risotto and well-cooked meats, and a welcome sign for visitors. ¥350 charge à la carte; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes a hidden Italian restaurant of 13 years that values hospitality and seasonal ingredients at fair prices. Reviewers mention a handwritten name card on a same-day booking (January 2026) and staff who kept a solo diner company (November 2026).',
      philosophy: 'Hospitality and seasonal ingredients at reasonable prices (Tabelog).', specialty: 'Meat dishes with Italian wine.',
      anecdotes: [
        { text: 'A January 2026 first-timer found a handwritten name card waiting despite booking the same day.', source: R + 'B521092254/' },
        { text: 'A November 2026 solo diner spent two easy hours thanks to the chatty staff.', source: R + 'B538738252/' },
      ],
      japanese_sources_summary: '食べログ: ワイン食堂UmiUsagi、イタリアン・ワインバー・バル、下京区柳馬場四条下る相之町137 ルシェル林ビル1F、地下鉄四条駅・阪急烏丸駅から徒歩5分、月水〜日 18:00〜22:00 (L.O.21:30)、火曜定休、当日予約可、チャージ350円 (税抜、コースはなし)、カード・電子マネー・QR決済可、24席、13年続く路地のイタリアン、東北と北海道の短角和牛のコース、イタリアワイン。口コミ (2025〜2026年、英語): ボトルは5,000円前後、グラスは少なめ、塩キャラメルのくるみのお通し、アヒージョとパン、パテ、パスタ、リゾット、ソーセージ、サラダ、肉料理、外国のお客様歓迎の張り紙、手書きの名札。',
      confidence: 'medium', sources: [TB, R + 'B498672391/', R + 'B516601273/', R + 'B519857957/', R + 'B521092254/', R + 'B524799509/', R + 'B538738252/'] },
    cultural_comfort: { level: 'english', note: 'A sign welcomes foreign guests (November 2025); ¥350 charge à la carte.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区柳馬場四条下る相之町137 ルシェル林ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002746, 135.763797); cross-checked: GSI 京都府京都市下京区相之町137番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B498672391/'],
    price_note: 'Wine price from a January 2025 review; charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Italian wine by the bottle', 'about ¥5,000', 'Wine', '', '', 'January 2025.', 'bottle'),
      it('', '', 'Ajillo with bread', '', 'Small plates', 'no', 'ask', 'January 2026.', 'ajillo'),
      it('', '', 'Charge (à la carte only)', '¥350 + tax', 'Charges', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '木のぬくもりのある13年ほど続くイタリアンのワイン食堂。イタリアワインと肉料理 (食べログ)・東北と北海道の短角和牛のコース (食べログ)・イタリアワインのボトルは5,000円前後、グラスは少なめ (2025年1月・12月)・お通しは塩キャラメルのくるみ (2025年11月)・もちもちのパンを添えたアヒージョ、パテ、パスタ、リゾット (2026年1月)・ソーセージ、サラダ、肉料理 (2026年3月)',
    neighborhood: '四条の南の柳馬場。四条烏丸から徒歩5分',
    gf_detail: '要確認。パンを添えたアヒージョ、パテ、パスタ、リゾット、ソーセージ、肉料理のイタリアン。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。サラダやリゾットもあるが、ヴィーガンと書かれたものはない (2025〜2026年の口コミ)。',
    notes: '[イタリアンのワイン食堂・四条近くの柳馬場、路地の隠れ家] 四条の南に隠れた、木のぬくもりのある13年ほど続くイタリアン。5,000円前後のイタリアワインのボトル、アヒージョ、パテ、リゾット、肉料理を。外国のお客様歓迎の張り紙も。アラカルトはチャージ350円、火曜定休。',
  });
}

// ================================================================ 海鮮個室居酒屋 ひとさじ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038940/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '23:00']); const B = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kaisen_kosshitsu_hitosaji', name: '海鮮個室居酒屋 ひとさじ (Hitosaji)', category: 'OMNI',
    lat: 35.007674, lng: 135.770046, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood izakaya courses — sashimi, karaage, edamame and more; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya (Tabelog; reviews).',
    hours_raw: 'Sunday–Thursday and holidays 17:00–23:00 (L.O. food 22:15, drinks 22:30); Friday, Saturday and the eve of holidays 17:00–24:00 (Tabelog). Reservations accepted (Tabelog). Cards (Visa, Master, JCB, Diners); no e-money or QR (Tabelog). 180 seats, all in private rooms from 2 to over 30 guests (Tabelog; August 2026). Smoking reported (March 2025). Drinks ordered by QR code (August 2026). On the 3rd floor of the ルミエールド三条 building on Rokkaku, above Liquor Mountain, about 6 min from Keihan Sanjo exit 6 (Tabelog). Opened 1 March 2023 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi at Rokkaku — 3F, 6 min from Keihan Sanjo',
    cuisine: 'A seafood izakaya of private rooms for parties, with fish from the market (Tabelog) · free-flow courses from ¥2,200 (Tabelog) · ¥4,000 course with a three-kind sashimi platter (March 2025) · banquet course ¥4,000 with free refills of karaage and edamame (August 2026) · à la carte additions on the cheapest course (June 2026)',
    website: null, gmaps: gm('海鮮個室居酒屋 ひとさじ 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Kiyamachi 3F, private rooms for parties] A big third-floor seafood izakaya made up entirely of private rooms — from couples to 180 — with market fish and cheap free-flow courses from ¥2,200, including unlimited karaage and edamame on the ¥4,000 plan. Open until midnight at weekends.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T8130001060262 is registered to 株式会社レイズ of Nagoya (NTA register); how many restaurants it runs was not established. Tabelog’s shop text describes market-fresh seafood and private rooms for up to 180.',
      philosophy: null, specialty: 'Party courses in private rooms.',
      anecdotes: [
        { text: 'An August 2026 after-work diner was delighted by free refills of karaage and edamame on the ¥4,000 course.', source: R + 'B534504981/' },
        { text: 'A December 2025 year-end party waited 30 minutes for the first drink on a 1-hour-45 free-flow plan.', source: R + 'B518964225/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮個室居酒屋 ひとさじ、居酒屋・海鮮、中京区山崎町236-2 ルミエールド三条3F、京阪三条駅6番出口から徒歩6分、六角通のリカーマウンテンの上、日〜木・祝 17:00〜23:00、金土・祝前日 17:00〜24:00、カード可、180席、全席個室 (2名〜30名以上)、2023年3月1日オープン、市場直送の海鮮、飲み放題付きコース2,200円から、適格請求書 T8130001060262 (株式会社レイズ)。口コミ (2025〜2026年、英語): 刺身3種の4,000円のコース、唐揚げと枝豆のおかわり自由の宴会コース4,000円、QRコードで注文、喫煙あり。',
      confidence: 'low', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8130001060262', R + 'B503912151/', R + 'B518964225/', R + 'B530750137/', R + 'B534504981/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; party courses; smoking reported.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山崎町236-2 ルミエールド三条 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007674, 135.770046); cross-checked: GSI 京都府京都市中京区山崎町236番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B534504981/'],
    price_note: 'Course prices from Tabelog and an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course with free-flow drinks', 'from ¥2,200', 'Courses', 'ask', 'no', 'Tabelog.', 'course_min'),
      it('', '', 'Banquet course with free karaage and edamame refills', '¥4,000', 'Courses', 'no', 'no', 'August 2026.', 'banquet'),
    ] }, {
    cuisine: '市場直送の海鮮の、全席個室の宴会向けの居酒屋 (食べログ)・飲み放題付きのコースは2,200円から (食べログ)・刺身3種盛りの4,000円のコース (2025年3月)・唐揚げと枝豆がおかわり自由の宴会コース4,000円 (2026年8月)・一番安いコースに単品を追加も (2026年6月)',
    neighborhood: '六角の木屋町。3階、京阪三条から徒歩6分',
    gf_detail: '要確認。刺身、唐揚げ、枝豆などの海鮮居酒屋のコース。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。海鮮の居酒屋 (食べログ、口コミ)。',
    notes: '[居酒屋・木屋町の3階、宴会向けの個室] 2名から180名まで全席個室の3階の大きな海鮮居酒屋。市場の魚と、2,200円からの手頃な飲み放題コース。4,000円のプランは唐揚げと枝豆がおかわり自由。週末は24時まで。',
  });
}

save();
