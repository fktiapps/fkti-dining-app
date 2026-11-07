// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 59.
//   + ニューすしセンター 木屋町 New Sushi Center Kiyamachi (fishmonger-run sushi izakaya on Kiyamachi, opened August 2025; rest)
//   + 京都ラーメンたかばし 四条河原町店 Kyoto Ramen Takabashi (Kyoto shoyu ramen, opened May 2026; rest)
//   + 和牛 綿あめすき焼き しゃぶしゃぶ ステーキ 都和 祇園四条店 Towa (cotton-candy Omi beef sukiyaki, opened July 2026; rest)
//   + KAMEE COFFEE KYOTO 高辻店 (two-floor Okinawa-flavoured cafe on Takatsuji; rest)
//   Rest list (mod 6 = 1) after batch 58, nearest-first — skipped:
//   - 本格焼肉チファジャ 四条河原町店 26006761: chain — four in our crawls (Sanjo-Kawaramachi honten, Kyoto Ekimae, Karasuma-
//     Bukkoji, Shijo-Kawaramachi) plus Minami-Kusatsu and Kofu-Yumura in search results.
//   - CoCo.314 26045695: thin — one review.
//   Same-name check for the picks, same brand or operator only: ニューすしセンター — two in our crawls (木屋町, 京都ポルタ);
//   searches show a Shinsaibashi PARCO shop and a September 2026 reviewer mentions Umeda — at least four, drafted with a
//   doubt. たかばし — two in our crawls (四条河原町, BiVi二条); an October 2026 reviewer calls it one of a few branches of a
//   famous shop — drafted with a doubt. 都和 — one. KAMEE — kamee-coffee.co.jp (opened 2026-11-07) says three shops (本店,
//   西洞院店, 高辻店) — small, drafted. None is in data/kyoto.json (main 51b786a0) by name or address (下樵木町192-5,
//   山崎町252-1 河原町竹本ビル B1F, 富永町146 GEN SAKIZO祇園縄手ビル 101, 恵美須之町520-6).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-59');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26006761/', 'chain: 本格焼肉チファジャ, six shops in Kyoto, Shiga and Yamanashi');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26045695/', 'thin: one review');

skip('26043289', 'chain: ニューすしセンター — seven shops in Kyoto and Osaka (osw1-38 skipped 京都ポルタ on the same count) — integrator 2026-11-07');

skip('26045101', 'chain: 京都ラーメンたかばし — the official site lists ten たかばし shops (osw2-52 skipped BiVi二条店 on the same count) — integrator 2026-11-07');

// ================================================================ 都和 祇園四条店 Towa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045059/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:30'], ['17:00', '22:30']);
  put({
    id: 'kyoto_towa_wataame_sukiyaki_gion', name: '和牛 綿あめすき焼き しゃぶしゃぶ ステーキ 都和 祇園四条店 (Towa Gion Shijo)', category: 'OMNI',
    lat: 35.004207710380065, lng: 135.7731237763591, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: sukiyaki sauce poured over cotton candy, shigure-ni, meat sushi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an A5 wagyu sukiyaki, shabu-shabu and steak restaurant; pork can replace beef on request (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 11:30–15:30 (last order 14:00) and 17:00–22:30 (last order 21:00) (Tabelog). Reservations accepted; one course per person; 90-minute limit when busy (except the special course); pork offered instead of beef on request, except for the steak course (Tabelog). No charge (Tabelog original チャージ料なし). Cards and PayPay; no e-money (Tabelog). 16 seats (Tabelog). 1 min walk from Gion-Shijo Stn, on Nawate south of Shijo (Tabelog). Opened 7 July 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Nawate south of Shijo — 1 min walk from Gion-Shijo Stn',
    cuisine: 'Showy wagyu sukiyaki and shabu-shabu: a big ball of cotton candy on the pot melts as the sauce is poured, with a dry-ice flourish (2026 reviews) · courses of A5 certified Omi beef with five meat appetizers (seared meat sushi, seared yukhoe, seared meat sashimi, shigure-ni, beef tendon with ponzu): sukiyaki or shabu-shabu 150 g ¥9,900, 200 g ¥11,440; a special sukiyaki set with meat sushi ¥9,130 (September–October 2026) · Hachidaime Gihei rice and Ranou eggs (September 2026) · about ¥8,000–15,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('都和 祇園四条店 綿あめすき焼き'), menu_url: null,
    notes: '[Sukiyaki · Gion, Nawate south of Shijo] A small new wagyu restaurant built for the camera: a cloud of cotton candy melts into the sukiyaki or shabu-shabu pot as the sauce goes on, over A5 certified Omi beef, after five seared-meat appetizers — courses about ¥9,900. Pork on request. One course each; 90 minutes when busy. Lunch and dinner daily.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a sukiyaki, shabu-shabu and sushi restaurant of 16 seats opened 7 July 2026 near Gion-Shijo. Reviewers in September–October 2026 describe A5 certified Omi beef from female cattle (some mention Kobe beef too), cotton-candy sukiyaki and dry-ice presentation.',
      philosophy: null, specialty: 'Cotton-candy sukiyaki with Omi beef.',
      anecdotes: [
        { text: 'A September 2026 diner on the ¥9,900 shabu-shabu course paired the meat with Hachidaime Gihei rice and Ranou eggs.', source: R + 'B536480252/' },
        { text: 'An October 2026 visitor found the sauce poured over the cotton candy neither too sweet nor too salty.', source: R + 'B537706812/' },
        { text: 'An October 2026 lunch guest noted the course in 150 g (¥9,900) and 200 g (¥11,440) sizes.', source: R + 'B537828954/' },
      ],
      japanese_sources_summary: '食べログ: すき焼き・しゃぶしゃぶ・寿司、東山区富永町146 GEN SAKIZO祇園縄手ビル 101、祇園四条駅から徒歩1分、毎日 11:30〜15:30 (L.O.14:00)、17:00〜22:30 (L.O.21:00)、予約可、1人1コース、混雑時は90分制 (特別コースを除く)、牛肉が食べられない場合は豚肉に変更可 (ステーキコースを除く)、チャージ料なし、カード・PayPay 可、電子マネー不可、16席、2026年7月7日開店。口コミ (2026年9月〜10月、英語): 綿あめにたれをかけて溶かすすき焼き・しゃぶしゃぶ、ドライアイスの演出、A5等級認定の近江牛の雌牛、前菜5種 (炙り肉寿司、炙りユッケ、炙り肉刺し、しぐれ煮、牛すじポン酢)、150g 9,900円・200g 11,440円、肉寿司付きの特選すき焼き9,130円、Hachidaime Gihei の米、Ranou の卵。',
      confidence: 'medium', sources: [TB, R + 'B535516672/', R + 'B536071250/', R + 'B536119561/', R + 'B536197755/', R + 'B536480252/', R + 'B537290425/', R + 'B537303589/', R + 'B537706812/', R + 'B537828954/', R + 'B538699436/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course only, one each; pork option; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町146 ＧＥＮ ＳＡＫＩＺＯ祇園縄手ビル 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened July 2026; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004208, 135.773124); cross-checked: GSI 京都府京都市東山区富永町146番地 (lot) 53 m; nearest Kyoto record 12.3 m away; checked against main 51b786a0; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537828954/', R + 'B536197755/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'A5 Omi beef sukiyaki or shabu-shabu course, 150 g', '¥9,900', 'Courses', 'no', 'no', 'October 2026.', 'course_150'),
      it('', '', 'Same course, 200 g', '¥11,440', 'Courses', 'no', 'no', 'October 2026.', 'course_200'),
      it('', '', 'Special sukiyaki set with meat sushi', '¥9,130', 'Courses', 'no', 'no', 'September 2026.', 'special'),
    ] }, {
    cuisine: '鍋の上の大きな綿あめにたれをかけて溶かす、ドライアイスの演出つきの派手な和牛のすき焼きとしゃぶしゃぶ (2026年の口コミ)・A5等級認定の近江牛に前菜5種 (炙り肉寿司、炙りユッケ、炙り肉刺し、しぐれ煮、牛すじポン酢) のコース: すき焼きかしゃぶしゃぶ 150g 9,900円・200g 11,440円、肉寿司付きの特選すき焼き9,130円 (2026年9〜10月)・Hachidaime Gihei の米と Ranou の卵 (2026年9月)・8,000〜15,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '祇園、四条の南の縄手通。祇園四条駅から徒歩1分',
    gf_detail: 'グルテンフリー不可。綿あめにかけるすき焼きのたれ、しぐれ煮、肉寿司 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。A5和牛のすき焼き・しゃぶしゃぶ・ステーキの店。頼めば牛肉を豚肉に変更できる (食べログ、2026年の口コミ)。',
    notes: '[すき焼き・祇園の縄手通] 写真映えを意識した小さな新しい和牛の店。たれをかけると綿あめが溶けて鍋に落ちるすき焼きやしゃぶしゃぶを、A5認定の近江牛で、炙りの肉の前菜5種のあとに。コースは9,900円ほど。豚肉にも変更可。1人1コース、混雑時は90分。昼も夜も毎日。',
  });
}

// ================================================================ KAMEE COFFEE KYOTO 高辻店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037793/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kamee-coffee.co.jp/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_kamee_coffee_takatsuji', name: 'KAMEE COFFEE KYOTO 高辻店 (Takatsuji)', category: 'OMNI',
    lat: 35.000154897875056, lng: 135.76748281030808, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: muffins, cheesecake, toast, sata andagi, sandwiches and fried foods (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee and fruit smoothies; dairy and egg in most bakes; no ingredient information (2025–2026 reviews).',
    hours_raw: 'Daily 9:00–18:00; irregular closing days; hours may change (Tabelog). No reservations (Tabelog). Order and pay on the 1F, then sit on either floor (September 2025; July 2026). Cards, e-money and QR; non-smoking (Tabelog). Counter and sofa seats, free Wi-Fi and power outlets; vintage clothing for sale (Tabelog; 2025–2026 reviews). On Takatsuji, about 15 min walk from Kawaramachi or Kiyomizu-Gojo Stn; bicycle parking on the east side (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji between Kawaramachi and Karasuma',
    cuisine: 'Spacious two-floor cafe with an Okinawan touch, one of three KAMEE COFFEE shops in Kyoto (official site; 2025–2026 reviews) · café latte, blend coffee, fruit smoothies, iced milk ¥540 (2025–2026 reviews) · sata andagi (2 for ¥90), kame sablé ¥280, muffins, carrot cake, Oreo cheesecake; sandwiches and fried snacks (2025–2026 reviews) · breakfast set with toast, fried egg, sausage, hash browns, salad and yogurt ¥1,050 (July 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('KAMEE COFFEE 高辻店'), menu_url: null,
    notes: '[Cafe · Takatsuji, two airy floors] A bright, roomy cafe with a laid-back Okinawan streak: order downstairs, then take a sofa or window seat upstairs with a latte, sata andagi or carrot cake — or the ¥1,050 breakfast set. Power outlets and Wi-Fi make it a good work stop. Vintage clothes for sale on site.',
    chef_bio: { chef_name: null, roles: ['Cafe staff (unnamed)'], origin: null,
      background: 'Per the official site: KAMEE COFFEE has three shops in Kyoto — the main shop on Kamikawaramachi, Nishinotoin and Takatsuji — plus vintage clothing stores. Reviewers in 2025–2026 describe Okinawan sweets such as sata andagi and a spacious, work-friendly space.',
      philosophy: null, specialty: 'Sata andagi; café latte.',
      anecdotes: [
        { text: 'A September 2025 visitor, back after finding it under construction, ordered downstairs and had a hot latte brought up to the second floor.', source: R + 'B515085042/' },
        { text: 'A July 2026 guest took the ¥1,050 breakfast set — "a place to take your time, like a turtle".', source: R + 'B532511586/' },
        { text: 'A July 2026 visitor watched the city from the window with a kame sablé and two sata andagi for ¥90.', source: R + 'B537073610/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、下京区恵美須之町520-6、京都河原町駅・清水五条駅から徒歩15分、毎日 9:00〜18:00、不定休、営業時間は変わることあり、予約不可、カード・電子マネー・QR 可、禁煙、カウンター・ソファ、無料 Wi-Fi、自転車置き場は東側、公式サイト kamee-coffee.co.jp (京都に3店舗: 本店・西洞院店・高辻店)。口コミ (2025年9月〜2026年7月、英語): 2フロアの広い店内、1階で注文と支払い、電源あり、古着の販売、カフェラテ、ブレンド、フルーツスムージー、アイスミルク540円、サーターアンダギー2個90円、kame sablé 280円、マフィン、キャロットケーキ、オレオチーズケーキ、サンドイッチ、揚げ物、モーニングセット1,050円 (トースト、目玉焼き、ソーセージ、ハッシュポテト、サラダ、ヨーグルト)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B515085042/', R + 'B518779073/', R + 'B520215566/', R + 'B522809012/', R + 'B524162462/', R + 'B527159460/', R + 'B532511586/', R + 'B533342506/', R + 'B533765081/', R + 'B537073610/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter; Wi-Fi and outlets; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区恵美須之町520-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.000155, 135.767483); cross-checked: GSI 京都府京都市下京区恵美須之町520番地 (lot) 76 m; nearest Kyoto record 54.7 m away; checked against main 51b786a0; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532511586/', R + 'B537073610/'],
    price_note: 'Prices from July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Breakfast set', '¥1,050', 'Breakfast', 'no', 'no', 'July 2026.', 'morning'),
      it('', '', 'Sata andagi (2 pieces)', '¥90', 'Sweets', 'no', 'ask', 'July 2026.', 'andagi'),
      it('', '', 'Iced milk', '¥540', 'Drinks', 'gf', 'no', 'July 2026.', 'ice_milk'),
    ] }, {
    cuisine: '沖縄の風味のある2フロアの広いカフェ、京都に3店舗の KAMEE COFFEE のひとつ (公式サイト、2025〜2026年の口コミ)・カフェラテ、ブレンド、フルーツスムージー、アイスミルク540円 (2025〜2026年の口コミ)・サーターアンダギー2個90円、kame sablé 280円、マフィン、キャロットケーキ、オレオチーズケーキ、サンドイッチ、揚げ物 (2025〜2026年の口コミ)・トースト、目玉焼き、ソーセージ、ハッシュポテト、サラダ、ヨーグルトのモーニングセット1,050円 (2026年7月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '河原町と烏丸の間の高辻通',
    gf_detail: 'グルテンフリー不可。マフィン、チーズケーキ、トースト、サーターアンダギー、サンドイッチ、揚げ物 (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。コーヒーやフルーツスムージー。焼き菓子の多くは乳と卵入り。材料の情報はない (2025〜2026年の口コミ)。',
    notes: '[カフェ・高辻通、明るい2フロア] 沖縄の空気感のある明るく広いカフェ。1階で注文し、2階のソファや窓際でラテ、サーターアンダギー、キャロットケーキ、1,050円のモーニングを。電源と Wi-Fi があり作業にも。店内で古着も販売。',
  });
}

save();
