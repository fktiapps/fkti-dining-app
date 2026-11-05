// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 4.
//   + BISTRO NAMI (one-chef Kyoto-vegetable bistro by Kawaramachi Stn; core list)
//   + 先斗町 藤わら Pontocho Fujiwara (red-vinegar sushi counter in a Pontocho–Kiyamachi alley, since 2019; core list)
//   + ステーキハウス新吾 Steak House Shingo (Shinmonzen teppan steakhouse, Steak WEST 100 2024–25; notable list)
//   + ジュメルニジュウク Jumelles 29 (Ayanokoji neo-bistro of meat and wine, Bistro 100 2021; notable list)
//   Picked 2026-11-05 after batch 3 was integrated: the first two lane-1 ids in `queue.mjs kyoto-missed next core 200`
//   (26037217, 26032207) and in `next notable 200` (26006053, 26018401). None is in data/kyoto.json: grep by name
//   (NAMI/ナミ, 藤わら/Fujiwara, 新吾/Shingo, ジュメル/Jumelles) and address (大日町403, 樵木町204, 西之町232, 塩屋町81)
//   found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ BISTRO NAMI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037217/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '15:00'], ['17:00', '23:00']); const WE = day(['12:00', '15:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_bistro_nami', name: 'BISTRO NAMI', category: 'OMNI',
    lat: 35.004938, lng: 135.766404, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include bread (refilled freely at lunch), pâté, gratin, a small curry before dessert, cake and pasta; allergies should be told when booking (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the shop stresses Kyoto vegetables (vegetable terrine, salads, potages), but courses centre on meat and fish and no vegan dish is named (Tabelog; 2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday and Friday 12:00–15:00 (last order 14:00) and 17:00–23:00; Saturday, Sunday and holidays 12:00–15:30 (last order 14:30) and 17:00–23:00; dinner last entry 22:00; closed Wednesday and one irregular day a month (Tabelog). 23–25 December 2026: Christmas course only (Tabelog). Reservations accepted; tell the shop about allergies in advance; cancellation fees of 50% the day before and 100% on the day (Tabelog). At dinner, a cover charge for guests not taking a course (Tabelog). 21 seats: a counter on the ground floor and well-spaced tables upstairs (Tabelog; June 2026). Tabelog lists cards (VISA, Master, JCB, AMEX) and PayPay, but an April 2026 reviewer was told cash only. Children welcome, with a kids’ menu (Tabelog). Look for the large noren; 1 min walk from Kawaramachi Stn (Hankyu) (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Just south of Nishiki Market street — 1 min walk from Kawaramachi Stn',
    cuisine: 'Casual French home cooking with Kyoto vegetables, meat and fresh fish (Tabelog shop text) · lunch: a light course ¥2,200 with salad, corn potage, baguette, fish of the day and coffee (July 2026); a seven-dish course with a warm amuse-bouche, potage, appetiser platter, sea bass or pork shoulder, a choice of two curries (beef tendon, or cardamom with clams) and dessert (May 2026); a ¥3,500 lunch with gratin and steak (June 2026) · dinner course ¥5,200 (Tabelog shop text); à la carte vegetable terrine, roast duck, pâté, miso-marinated cheese bruschetta (2026 reviews) · winter and Christmas courses ¥11,000 with lobster thermidor and a pie-wrapped main (Tabelog) · wines by the glass, seasonal fruit cocktails, all-you-can-drink plans (Tabelog shop text)',
    website: null, gmaps: gm('BISTRO NAMI 京都 御幸町'), menu_url: TB,
    notes: "[Bistro · Kawaramachi, Kyoto vegetables at the counter] A small two-floor bistro a minute from Kawaramachi Station, behind a large noren, where one chef cooks French home food with Kyoto vegetables: a warm amuse-bouche, potage, a vegetable terrine, fish or meat, then — unusually — a little curry before dessert. Lunch courses from ¥2,200 with bread refills; dinner course ¥5,200. Sit at the counter to talk with the chef, or upstairs at roomier tables. Most 2026 reviewers liked it; one April 2026 diner found the kitchen visible from the counter dirty. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), who cooks alone (2026 reviews)'], origin: null,
      background: 'Per the Tabelog shop text: casual French cooking with Kyoto vegetables and fresh meat and fish, wines by the glass, seasonal fruit cocktails, and dessert plates with messages for celebrations. Reviewers in 2026 describe one chef running the kitchen, chatting with counter guests and seeing them off at the door, with a young staff member at the counter (April 2026).',
      philosophy: null, specialty: 'Lunch courses ending with curry; vegetable terrine.',
      anecdotes: [
        { text: '"Since there is only one chef in the kitchen, it seemed a bit challenging when multiple orders came in at once." The same diner found the chef friendly and talkative — June 2026.', source: R + 'B533188639/' },
        { text: '"I forgot to take a photo, but I was surprised by the curry served before dessert. It was incredibly delicious." — May 2026.', source: R + 'B529801870/' },
        { text: 'An April 2026 reviewer found the taste and value reasonable, but "the kitchen visible from the counter was in terrible condition", the coffee weak, and was told the shop took cash only.', source: R + 'B526373449/' },
        { text: '"The chef kindly saw us off to the door, which was a nice touch." — May 2026.', source: R + 'B528259095/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ビストロ・フレンチ・肉料理、中京区御幸町通錦小路下る大日町403、阪急河原町駅から徒歩1分、月・火・木・金 12:00〜15:00 (L.O. 14:00)・17:00〜23:00、土日祝 12:00〜15:30 (L.O. 14:30)・17:00〜23:00、水曜と月1回不定休、2026年12月23〜25日はクリスマスコースのみ、予約可 (アレルギーは事前に連絡、キャンセル料あり)、夜はコース以外はチャージ料、21席、カード・PayPay 可、禁煙、子供可・キッズメニュー、ベジタリアンメニューあり、京野菜と肉と鮮魚のカジュアルなフレンチ、ディナーコース5,200円、クリスマスコース11,000円 (オマール海老のテルミドール)。口コミ (2026年4〜7月、英語): シェフ1人の厨房、デザート前のカレー、パンのおかわり、ランチ2,200円・3,500円、1階はカウンター、2階はテーブル、厨房が汚いとの声、現金のみと言われた。',
      confidence: 'medium', sources: [TB, R + 'B526373449/', R + 'B526890592/', R + 'B526919844/', R + 'B528259095/', R + 'B528743266/', R + 'B529801870/', R + 'B530152815/', R + 'B531965336/', R + 'B532569447/', R + 'B533188639/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead and mention allergies; counter seats face the chef; payment method unclear (cards on Tabelog, cash only per one review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通錦小路下る大日町403',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained, with December 2026 courses); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004938, 135.766404); cross-checked: GSI 京都府京都市中京区大日町403番地 (lot) 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B532569447/', R + 'B533188639/'],
    price_note: 'Course prices from the Tabelog shop text and July/June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Light lunch course (salad, potage, baguette, fish of the day, coffee)', '¥2,200', 'Lunch course', 'no', 'no', 'July 2026.', 'light_lunch'),
      it('', '', 'Lunch course with gratin and steak', '¥3,500', 'Lunch course', 'no', 'no', 'June 2026.', 'lunch_3500'),
      it('', '', 'Dinner course', '¥5,200', 'Dinner course', 'ask', 'ask', 'Tabelog shop text.', 'dinner_course'),
      it('', '', 'Winter special course (6 dishes, lobster thermidor)', '¥11,000', 'Dinner course', 'ask', 'no', 'Tabelog, winter 2026.', 'winter_course'),
    ] }, {
    cuisine: '京野菜と肉、鮮魚のカジュアルなフランスの家庭料理 (食べログの店舗紹介)・ランチ: サラダ、とうもろこしのポタージュ、バゲット、本日の魚、コーヒーの軽いコース2,200円 (2026年7月)、温かいアミューズ、ポタージュ、前菜の盛り合わせ、スズキか豚肩ロース、2種から選ぶカレー (牛すじ、またはあさりのカルダモン)、デザートの7品のコース (2026年5月)、グラタンとステーキの3,500円のランチ (2026年6月)・ディナーコース5,200円 (食べログの店舗紹介)、アラカルトの野菜のテリーヌ、鴨のロースト、パテ、チーズの味噌漬けのブルスケッタ (2026年の口コミ)・冬とクリスマスのコース11,000円、オマール海老のテルミドールとパイ包み (食べログ)・グラスワイン、季節のフルーツカクテル、飲み放題プラン (食べログの店舗紹介)',
    neighborhood: '錦小路のすぐ南の御幸町通。河原町駅から徒歩1分',
    gf_detail: '要確認。コースにはパン (ランチはおかわり自由)、パテ、グラタン、デザート前の小さなカレー、ケーキ、パスタ。アレルギーは予約時に伝える (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、京野菜 (野菜のテリーヌ、サラダ、ポタージュ) を売りにしているが、コースは肉と魚が中心で、ヴィーガンの料理は書かれていない (食べログ、2026年の口コミ)。',
    notes: '[ビストロ・河原町、カウンターで京野菜] 河原町駅から1分、大きな暖簾の2階建ての小さなビストロ。シェフが一人で、京野菜を使ったフランスの家庭料理を作る。温かいアミューズ、ポタージュ、野菜のテリーヌ、魚か肉、そして珍しくデザート前に少しのカレー。ランチのコースは2,200円から、パンはおかわり自由。ディナーコースは5,200円。カウンターでシェフと話すか、2階のゆったりしたテーブルへ。2026年の口コミの多くは好評だが、4月の客はカウンターから見える厨房が汚いと書いている。水曜休み。',
  });
}

// ================================================================ 先斗町 藤わら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032207/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '23:30']);
  put({
    id: 'kyoto_pontocho_fujiwara', name: '先斗町 藤わら (Pontocho Fujiwara)', category: 'OMNI',
    lat: 35.005573, lng: 135.770906, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase sushi and small dishes: nigiri with a lightly sweet soy sauce or salt, simmered clam and anago with sauce, sake-lees and miso grilled fish; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fish and shellfish sushi with dashi soups (2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order food 14:00, drinks 14:30); dinner 18:00–23:30 (last order 23:00); open every day, closed irregularly (Tabelog). Reservations; same-day cancellation is charged 100% (Tabelog). Courses: limited lunch special sushi course ¥16,500 (15 items, 2–7 people) and special omakase ¥24,200 (Tabelog, tax included); a September 2025 diner booked a ¥22,000 course. 10% service charge (Tabelog). No cards, e-money or QR (Tabelog). No perfume, please; children only with the adult course (Tabelog). 15 seats: 7 at a white-wood counter and 8 at tables, plus a private room for 5–8; wheelchair accessible (Tabelog; March 2026). In the alley joining Pontocho and Kiyamachi; 5 min walk from Kawaramachi, 8 min from Gion-Shijo (Tabelog; 2025–2026 reviews). Opened 11 April 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Alley between Pontocho and Kiyamachi north of Shijo — 5 min walk from Kawaramachi Stn',
    cuisine: 'Omakase sushi with small dishes: rice of Ryuu no Hitomi cooked in a clay pot and seasoned with a blend of three red vinegars; wild bluefin tuna (Tabelog shop text) · a February 2026 dinner: cod milt with urui, sashimi, Shogoin turnip soup, sawara grilled with sake lees and karasumi, monkfish liver with narazuke, then otoro with salt, chutoro, akami, hirame, aji, sayori with yuzu, simmered clam and nodoguro in nori · a September 2025 course: mozuku, sashimi, hamo and matsutake, homemade karasumi, rock oyster, then nigiri to simmered anago · sake such as Jizaemon, white wine (2026 reviews)',
    website: null, gmaps: gm('先斗町 藤わら 京都'), menu_url: TB,
    notes: "[Sushi · Pontocho, red-vinegar sushi in a back alley] A quiet sushi counter of white wood down the alley joining Pontocho and Kiyamachi, open since 2019, where the rice — Ryuu no Hitomi cooked in a clay pot — is seasoned with three red vinegars blended to sit back behind the fish. Omakase courses run through small seasonal dishes, sashimi and soup to nigiri: lunch ¥16,500, the special omakase ¥24,200, plus 10% service; cash only. Reviewers praise the friendly, humorous chef and the sake list; one March 2026 diner found the sushi too sweet. No perfume.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources)'], origin: null,
      background: 'Per the shop’s Tabelog text: a blend of three red vinegars and Ryuu no Hitomi rice cooked in a clay pot; attention to tempo, portion and aftertaste as well as flavour; a calm atmosphere and a gentle distance for those new to counter sushi. Opened 11 April 2019 (Tabelog). Reviewers in 2025–2026 describe a friendly, humorous chef who asks about appetite through the meal.',
      philosophy: 'Per the Tabelog shop text: red-vinegar rice that harmonises with the toppings without overpowering them, and a meal enjoyed comfortably to the end.',
      specialty: 'Red-vinegar nigiri; bluefin tuna.',
      anecdotes: [
        { text: '"The chef was attentive and asked about my appetite throughout the meal" — June 2025.', source: R + 'B509248248/' },
        { text: 'A February 2026 diner remembered otoro served with salt, sayori with salt and yuzu, and grilled nodoguro wrapped in nori, and a chef who was "friendly and humorous".', source: R + 'B522368248/' },
        { text: '"The chef was friendly and attentive, but perhaps due to visiting on a Sunday, the quality of the ingredients wasn\'t great. The sushi felt a bit too sweet, and the red vinegar rice itself was disappointing." — March 2026.', source: R + 'B525541270/' },
        { text: '"When I come to Kyoto, I usually choose from three sushi places, and lately, I find myself at Fujiwara more often." — July 2026.', source: R + 'B425930628/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 寿司、中京区木屋町通四条上る二丁目下樵木町204-7、河原町から徒歩5分、祇園四条から8分、12:00〜15:00 (L.O. 料理14:00・ドリンク14:30)・18:00〜23:30 (L.O. 23:00)、不定休、予約可 (当日キャンセルは100%)、限定ランチ特選寿司コース16,500円 (15品)、特選おまかせ24,200円、サービス料10%、カード・電子マネー・QR 不可、15席 (カウンター7、テーブル8)、個室あり、車椅子可、香水は控える、子供は大人と同じコースのみ、2019年4月11日オープン、店舗紹介: 3種の赤酢を合わせ、Ryuu no Hitomi を土鍋で炊くシャリ、天然本まぐろ、日本酒。口コミ (2025年6月〜2026年10月、英語): 先斗町と木屋町を結ぶ路地、白木のカウンター、おまかせのつまみと握り、気さくなご主人、赤酢のシャリが甘すぎたとの声 (2026年3月)。',
      confidence: 'medium', sources: [TB, R + 'B425930628/', R + 'B486781624/', R + 'B503777369/', R + 'B509248248/', R + 'B509732020/', R + 'B522225274/', R + 'B522368248/', R + 'B525541270/', R + 'B529363376/', R + 'B538017303/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; omakase only; cash only; no perfume.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通四条上る二丁目下樵木町204-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005573, 135.770906); cross-checked: GSI 京都府京都市中京区下樵木町204番地 (lot) 17 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Tabelog course prices (tax included); 10% service charge on top.', last_checked: TODAY, items: [
      it('', '', 'Limited lunch special sushi course (15 items)', '¥16,500', 'Course', 'ask', 'no', '2–7 people.', 'lunch_special'),
      it('', '', 'Special omakase seasonal sushi course', '¥24,200', 'Course', 'ask', 'no', '1–7 people.', 'special_omakase'),
    ] }, {
    cuisine: 'つまみと握りのおまかせ: Ryuu no Hitomi を土鍋で炊き、3種の赤酢を合わせたシャリ、天然本まぐろ (食べログの店舗紹介)・2026年2月の夜: たらの白子とうるい、刺身、Shogoin のかぶの椀、さわらの酒粕とからすみ焼き、あん肝と奈良漬け、塩の大トロ、中トロ、赤身、ひらめ、あじ、柚子のさより、煮はまぐり、海苔で巻いたのどぐろ・2025年9月のコース: もずく、刺身、鱧と松茸、自家製からすみ、岩牡蠣、握りは煮穴子まで・日本酒 (Jizaemon など)、白ワイン (2026年の口コミ)',
    neighborhood: '四条の北、先斗町と木屋町を結ぶ路地。河原町駅から徒歩5分',
    gf_detail: '要確認。おまかせの寿司とつまみ: 甘めの醤油か塩の握り、たれの煮はまぐりと穴子、酒粕と味噌の焼き魚。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と貝の握りと出汁の椀のおまかせ (2025〜2026年の口コミ)。',
    notes: '[寿司・先斗町、路地の赤酢の寿司] 先斗町と木屋町を結ぶ路地の、白木のカウンターの静かな寿司屋。2019年から。土鍋で炊いた Ryuu no Hitomi に3種の赤酢を合わせ、ネタを引き立てるシャリにしている。おまかせは季節のつまみ、刺身、椀から握りへ: 昼16,500円、特選おまかせ24,200円、サービス料10%、現金のみ。口コミでは気さくでユーモアのある大将と日本酒が好評、2026年3月の客は寿司が甘すぎたと書いている。香水は控えて。',
  });
}

// ================================================================ ステーキハウス新吾
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006053/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_steak_house_shingo', name: 'ステーキハウス新吾 (Steak House Shingo)', category: 'OMNI',
    lat: 35.006096, lng: 135.774491, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan steak with a soy-butter sauce, mustard and garlic chips; garlic rice fried with soy sauce; soups, salad with French dressing and fried onions; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef steakhouse; courses start with prosciutto and wagyu tataki and end with ice cream (2026 reviews).',
    hours_raw: '11:30–13:00 and 17:00–22:00, every day (Tabelog). Reservations recommended; a seat may be found if one is free (October 2026). 10% service charge (Tabelog). Cards (VISA, Master, JCB); no e-money or QR (Tabelog). 15 seats at the counter, plus private rooms; non-smoking (Tabelog; October 2026). Takeaway available (Tabelog). Down a narrow alley off Shinmonzen-dori in Gion; check the map first (2026 reviews); 3 min walk from Sanjo Keihan Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmonzen-dori in north Gion — 3 min walk from Sanjo Keihan Stn',
    cuisine: 'Long-running teppan steakhouse: aged kuroge wagyu grilled at the counter (Tabelog shop text) · Omi beef, A4 (July 2026) or A4–A5 depending on supply (October 2026) · lunch steak gozen ¥8,000: salad, onion soup, black-wagyu steak, rice, fruit (October 2026) · omakase course ¥18,000: three appetisers (prosciutto, shrimp, wagyu tataki), potage, steamed vegetables, wagyu tenderloin or sirloin, pickles, garlic rice, vanilla ice cream with kinako and kuromitsu (August 2026) · chateaubriand with soy-butter sauce (September 2026) · steaks by weight, 120–300 g (2026 reviews) · wine (Tabelog)',
    website: null, gmaps: gm('ステーキハウス新吾 京都 新門前'), menu_url: null,
    notes: "[Steak · Gion Shinmonzen, a teppan counter down an alley] A retro teppan steakhouse with brick walls and glassware, down a narrow alley off Shinmonzen-dori, where aged wagyu — Omi beef, A4 or A5 as supply allows — is grilled rare at the counter and served with soy-butter sauce, mustard and garlic chips, then garlic rice. Lunch steak gozen ¥8,000; dinner omakase ¥18,000, plus 10% service. A July 2026 reviewer gives the method as 48 years old; regulars in March and April 2026 noted a change of owner and younger staff. Book ahead.",
    chef_bio: { chef_name: null, roles: ['Owner and grill cooks (unnamed in the sources)'], origin: null,
      background: 'Per the Tabelog shop text: a long-established Gion restaurant that keeps its traditions, with skills honed over many years at a quiet counter and carefully aged kuroge wagyu. A July 2026 reviewer writes of a cooking method passed down for 48 years. A March 2026 regular thought the management was changing, and an April 2026 regular found the owner had changed and the staff younger. A September 2026 reviewer calls it a place loved by the late Hiroki Matsukata; a May 2026 reviewer describes it as a restaurant where geisha accompany guests. Tabelog Steak・Teppanyaki "Tabelog 100" 2022, WEST 2024, 2025.',
      philosophy: 'Per the Tabelog shop text: no flashy presentation; each dish shows the ingredients and the craft.',
      specialty: 'Omi beef tenderloin steak; garlic rice.',
      anecdotes: [
        { text: '"I was surprised to find that the owner has changed, and there seems to be a younger staff, giving the place a slightly different atmosphere." — April 2026.', source: R + 'B365695759/' },
        { text: '"I ordered 150g, but on days when the fat content is high, 120g would be enough, and on days with less fat, 150g is perfect." — May 2026.', source: R + 'B517832158/' },
        { text: 'A July 2026 reviewer describes A4 Omi beef from non-pregnant female cattle, cooked rare by "a traditional cooking method that has been passed down for 48 years".', source: R + 'B532873673/' },
        { text: 'An October 2026 diner asked about the grade and was told it varies with supply, A4 to A5.', source: R + 'B538137540/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ステーキ、東山区新門前通大和大路東入西之町232-6、京阪三条駅から徒歩3分、毎日11:30〜13:00・17:00〜22:00、予約可、サービス料10%、カード可 (VISA、Master、JCB)、電子マネー・QR 不可、15席、個室あり、禁煙、テイクアウト、ステーキ・鉄板焼き百名店 2022、WEST 2024・2025、店舗紹介: 祇園の老舗、熟成させた黒毛和牛、鉄板焼き。口コミ (2026年3〜10月、英語): 近江牛 (A4、仕入れによりA4〜A5)、ランチのステーキ御膳8,000円、おまかせコース18,000円、ガーリックライス、醤油バターのソース、オーナーが代わった (2026年4月)、Hiroki Matsukata が愛した店 (2026年9月)、細い路地。',
      confidence: 'medium', sources: [TB, R + 'B365695759/', R + 'B517832158/', R + 'B527351268/', R + 'B532873673/', R + 'B533493819/', R + 'B534863532/', R + 'B538137540/', R + 'B538509555/', R + 'B62690251/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; choose the cut and weight; 10% service; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新門前通大和大路東入西之町232-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026; ownership changed in 2026 per reviews.' },
    pin_source: `Tabelog ${TB} (35.006096, 135.774491); cross-checked: GSI 京都府京都市東山区西之町232番地 (lot) 68 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538137540/', R + 'B533493819/'],
    price_note: 'No menu read; prices from August and October 2026 reviews; 10% service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch steak gozen (salad, soup, black-wagyu steak, rice, fruit)', '¥8,000', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_steak_gozen'),
      it('', '', 'Omakase course (appetisers, soup, vegetables, wagyu steak, garlic rice, dessert)', '¥18,000', 'Dinner course', 'ask', 'no', 'August 2026.', 'omakase_course'),
      it('', '', 'Garlic rice', '', 'Rice', 'ask', 'no', 'Fried with soy sauce.', 'garlic_rice'),
    ] }, {
    cuisine: '老舗の鉄板焼きステーキハウス: 熟成させた黒毛和牛をカウンターで焼く (食べログの店舗紹介)・近江牛、A4 (2026年7月) または仕入れによりA4〜A5 (2026年10月)・ランチのステーキ御膳8,000円: サラダ、オニオンスープ、黒毛和牛のステーキ、ご飯、果物 (2026年10月)・おまかせコース18,000円: 前菜3種 (生ハム、海老、和牛のたたき)、ポタージュ、温野菜、和牛のヒレかサーロイン、漬物、ガーリックライス、きな粉と黒蜜のバニラアイス (2026年8月)・醤油バターのソースのシャトーブリアン (2026年9月)・ステーキは120〜300gで (2026年の口コミ)・ワイン (食べログ)',
    neighborhood: '祇園の北、新門前通。京阪三条駅から徒歩3分',
    gf_detail: '要確認。鉄板のステーキに醤油バターのソース、辛子、ガーリックチップ。ガーリックライスは醤油で炒める。スープ、フレンチドレッシングとフライドオニオンのサラダ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉のステーキハウスで、コースは生ハムと和牛のたたきに始まり、アイスで終わる (2026年の口コミ)。',
    notes: '[ステーキ・祇園新門前、路地の鉄板カウンター] 新門前通から細い路地を入る、レンガの壁とガラス器のレトロな鉄板焼きのステーキハウス。熟成させた和牛 (近江牛、仕入れによりA4かA5) をカウンターでレアに焼き、醤油バターのソース、辛子、ガーリックチップで。締めはガーリックライス。ランチのステーキ御膳8,000円、夜のおまかせ18,000円、サービス料10%。2026年7月の口コミは48年受け継ぐ焼き方と書き、3月と4月の常連はオーナーが代わりスタッフが若くなったと書いている。予約がおすすめ。',
  });
}

// ================================================================ ジュメルニジュウク Jumelles 29
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26018401/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.jumelles29.jp/'; const ABOUT = SITE + 'about/'; const MENU = SITE + 'menu/'; const DRINK = SITE + 'drink/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_jumelles_29', name: 'ジュメルニジュウク (Jumelles 29)', category: 'OMNI',
    lat: 35.002358, lng: 135.765525, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. About 60 dishes, including pasta, gnocchi, quiche, fritters, gratin, bread and cakes alongside grilled meats and carpaccios; portions and dishes can be adjusted on request, but no gluten information is given (official menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: a meat-focused bistro (the "29" in the name means meat); the few vegetable plates are pickles, marinated olives and a bagna cauda (official menu).',
    hours_raw: '17:00–23:00 (last order food 22:30, drinks 23:00) (Tabelog; official site). The official site says closed Tuesday; Tabelog lists every day with irregular closures. Reservations through the shop’s app or Tabelog (official site; September 2026); booking advised (October 2026). Warm dishes can take about 30 minutes; order early (official menu). ¥500 a person for the appetiser and service (official menu; Tabelog). 24 seats with a counter and sofas, in a townhouse; non-smoking; private hire from 17 people (Tabelog; official site). Cards (VISA, Master, JCB, AMEX, Diners), QUICPay and PayPay (Tabelog). Coin parking opposite (Tabelog). 4 min walk from Kawaramachi Stn, 5 min from Karasuma Stn (Tabelog). Opened 12 July 2011 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji at Fuyacho, between Karasuma and Kawaramachi — 4 min walk from Kawaramachi Stn',
    cuisine: 'Neo-bistro of French cooking with a focus on meat — "29" reads as niku, meat — and about 60 dishes, all available in half portions (official site) · 尾崎牛 beef from Miyazaki, raised long with little stress; the shop met it at a nearby restaurant, then visited the farm: grilled with Bordeaux sauce ¥2,500 per 100 g, tartare ¥1,750, bresaola ¥1,580 (official site and menu) · duck breast smoked over vine cuttings ¥2,550, veal tongue in red wine, Ezo venison fillet, bear shoulder, lamb rump with couscous, wagyu heart, veal kidney, tripe, black-pork belly in beer (official menu) · smoked mackerel with potato salad ¥980, sea urchin pudding with garlic toast ¥1,350, chickpea-and-cheese fritters ¥770, foie gras terrine, homemade karasumi pastas, cacio e pepe ¥1,650, wagyu Bolognese with gnocchi ¥2,100, truffle risotto (official menu) · hazelnut crème brûlée, baba au rhum, gâteau chocolat ¥750–800 (official menu) · glass wines from ¥550, mostly French, new bottles about monthly; Tabelog cites about 200 wines (official site; Tabelog) · banquet course with 1.5-hour free drinks ¥7,000 (Tabelog)',
    website: SITE, gmaps: gm('Jumelles29 ジュメル29 京都'), menu_url: MENU,
    notes: "[Bistro · Ayanokoji, meat and wine in a townhouse] A neo-bistro in a townhouse just off the main streets between Karasuma and Kawaramachi — the \"29\" is niku, meat — with a counter, sofas and some 60 dishes that can all be ordered as halves: smoked mackerel on potato salad, sea urchin pudding with garlic toast, vine-smoked duck, 尾崎牛 beef from Miyazaki, game such as Ezo venison, then a hazelnut crème brûlée. Glass wines from ¥550, mostly French. ¥500 a head cover; most reviewers paid ¥3,000–10,000. Open 17:00–23:00; the site gives Tuesday as closed. Tabelog Bistro 100 2021.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), trained at hotels in Japan and restaurants in France (Tabelog shop text)'], origin: null,
      background: 'Per the Tabelog shop text: authentic French cooking at fair prices by a chef who trained at renowned hotels in Japan and top restaurants in France, with a focus on meat. Per the official site: the shop first tasted 尾崎牛 at a nearby restaurant, wanted to know more, visited the farm and fell for the beef and its farmer; a counter was built to watch guests react; the wine list, chosen with a sommelier, describes each wine’s region, grape and character; the aim is hospitality that makes guests want to return. Opened 12 July 2011 (Tabelog). Tabelog Bistro "Tabelog 100" 2021.',
      philosophy: 'Per the official site: for a cook, "delicious" is a given; the aim is for guests to want to come back.',
      specialty: 'Smoked mackerel and potato salad; vine-smoked duck breast; 尾崎牛 grill.',
      anecdotes: [
        { text: '"I was particularly surprised by the spare ribs, which were unlike any I had tasted at other restaurants" — September 2026.', source: R + 'B535828883/' },
        { text: '"The rabbit meat dishes have a unique flavor that may not appeal to everyone, so I recommend trying other dishes first if you\'re a first-time visitor." — September 2026.', source: R + 'B536904302/' },
        { text: '"This place is incredibly delicious! However, it is on the pricier side. … It was disappointing when someone tried to take my plate away even though I still had rice left on it." — October 2026.', source: R + 'B467820215/' },
        { text: '"I made a reservation through Tabelog and received a complimentary dish!" — September 2026.', source: R + 'B536421253/' },
      ],
      japanese_sources_summary: '公式サイト (jumelles29.jp): 京都・河原町のフレンチ・ネオビストロ、下京区綾小路通麩屋町下ル塩屋町81-1、17:00〜23:00、火曜日定休、メニューは約60種、ハーフポーション可、店名の「29」は肉への思いから、尾崎牛 (近所の店で出会い、牧場を訪ねた)、カウンター席、ソムリエと選んだワインリスト、ひと月ごとに新しいワイン、貸し切りは17名から、アプリで予約、メニュー: ひよこ豆ペーストとチーズのフリット770円、葡萄の木で燻した鴨胸肉のロティ2,550円、尾崎牛のグリエ100g 2,500円、真さばマリネのスモークとポテトサラダ980円、濃厚なウニのプリンとガーリックトースト1,350円、カチョエペペ1,650円、黒毛和牛ボロネーゼとじゃがいものニョッキ2,100円、ヘーゼルナッツのクレームブリュレ750円、温かい料理は30分ほどかかることも、お突出し代・サービス料1人500円、グラスワイン550円から。食べログ: ビストロ・イタリアン・肉料理、毎日17:00〜23:00、不定休、24席、カード・QUICPay・PayPay 可、禁煙、2011年7月12日オープン、ビストロ百名店 2021、ワイン約200種、飲み放題付き宴会コース7,000円。口コミ (2026年8〜10月、英語): 生ハム、さばのポテトサラダ、スペアリブ、ウニのプリン、キッシュ、うさぎ、値段は高め、皿を早く下げられそうになった。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, DRINK, R + 'B467820215/', R + 'B516394500/', R + 'B524194778/', R + 'B534247512/', R + 'B535828883/', R + 'B536064094/', R + 'B536421253/', R + 'B536904302/', R + 'B538103797/', R + 'B538317190/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; à la carte with half portions; ¥500 cover; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区麩屋町綾小路通下ル塩屋町81-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (©2026) and Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002358, 135.765525); cross-checked: GSI 京都府京都市下京区塩屋町81番地 (lot) 28 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu (undated; tax included). ¥500 a person cover.', last_checked: TODAY, items: [
      it('真さばマリネのスモークとポテトサラダ', '', 'Smoked marinated mackerel with potato salad', '¥980', 'Starters', 'ask', 'no', 'House favourite.', 'mackerel_potato_salad'),
      it('濃厚なウニのプリンとガーリックトースト', '', 'Rich sea urchin pudding with garlic toast', '¥1,350', 'Starters', 'no', 'no', '', 'uni_pudding'),
      it('ひよこ豆ペーストとチーズのフリット', '', 'Chickpea-paste and cheese fritters', '¥770', 'Starters', 'no', 'no', '', 'chickpea_fritters'),
      it('葡萄の木で燻した鴨胸肉のロティ スパイスソース', '', 'Duck breast smoked over vine cuttings, spice sauce', '¥2,550', 'Mains', 'ask', 'no', '', 'vine_smoked_duck'),
      it('尾崎牛のグリエ ボルドレーズソース', '', 'Grilled 尾崎牛 beef, Bordelaise sauce (per 100 g)', '¥2,500', 'Mains', 'ask', 'no', '', 'ozaki_beef_grill'),
      it('カチョエペペ', '', 'Cacio e pepe spaghetti', '¥1,650', 'Pasta', 'no', 'no', '', 'cacio_e_pepe'),
      it('黒毛和牛ボロネーゼとじゃがいものニョッキ', '', 'Wagyu Bolognese with potato gnocchi', '¥2,100', 'Pasta', 'no', 'no', '', 'wagyu_bolognese_gnocchi'),
      it('ヘーゼルナッツのクレームブリュレ', '', 'Hazelnut crème brûlée', '¥750', 'Desserts', 'ask', 'no', '', 'hazelnut_creme_brulee'),
    ] }, {
    cuisine: '肉料理に力を入れたフレンチのネオビストロ。「29」は肉。料理は約60種で、どれもハーフポーションにできる (公式サイト)・宮崎の尾崎牛 (ストレスの少ない環境で長く育てる、近所の店で出会い牧場を訪ねて惚れ込んだ): ボルドレーズソースのグリエ100g 2,500円、タルタル1,750円、ブレザオラ1,580円 (公式サイト・メニュー)・葡萄の木で燻した鴨胸肉のロティ2,550円、仔牛タンの赤ワイン煮込み、蝦夷鹿のフィレ、ヒグマの肩ロース、仔羊ランプのクスクス添え、和牛ハツ、仔牛のロニョン、トリッパ、黒豚バラのビール煮込み (公式メニュー)・真さばマリネのスモークとポテトサラダ980円、濃厚なウニのプリンとガーリックトースト1,350円、ひよこ豆ペーストとチーズのフリット770円、フォアグラのテリーヌ、自家製からすみのパスタ、カチョエペペ1,650円、黒毛和牛ボロネーゼとじゃがいものニョッキ2,100円、トリュフのリゾット (公式メニュー)・ヘーゼルナッツのクレームブリュレ、ババ オ ラム、ガトーショコラ750〜800円 (公式メニュー)・グラスワイン550円から、フランス中心、ひと月ごとに新しいワイン。食べログではワイン約200種 (公式サイト、食べログ)・1.5時間の飲み放題付き宴会コース7,000円 (食べログ)',
    neighborhood: '烏丸と河原町の間、綾小路麩屋町。河原町駅から徒歩4分',
    gf_detail: '要確認。料理は約60種で、パスタ、ニョッキ、キッシュ、フリット、グラタン、パン、ケーキもあれば、肉のグリルやカルパッチョもある。料理や量の調整は相談できるが、グルテンの情報はない (公式メニュー、2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。肉料理中心のビストロ (店名の「29」は肉)。野菜の皿はピクルス、オリーブのマリネ、バーニャカウダくらい (公式メニュー)。',
    notes: '[ビストロ・綾小路、町家で肉とワイン] 烏丸と河原町の間、大通りから少し入った町家のネオビストロ。「29」は肉のこと。カウンターとソファ席で、約60種の料理はどれもハーフにできる: さばのスモークのポテトサラダ、ウニのプリンとガーリックトースト、葡萄の木で燻した鴨、宮崎の尾崎牛、蝦夷鹿などのジビエ、締めにヘーゼルナッツのクレームブリュレ。グラスワインは550円から、フランス中心。1人500円のお通し・サービス料、口コミでは3,000〜10,000円ほど。17時〜23時、公式サイトでは火曜休み。食べログビストロ百名店 2021。',
  });
}

save();
