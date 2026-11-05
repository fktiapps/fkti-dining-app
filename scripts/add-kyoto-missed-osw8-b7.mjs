// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 7.
//   + Stars'n Cacio Kyoto (Italian from breakfast to dinner, terrace for dogs, near Kawaramachi; core list)
//   + 祇園みかく Gion Mikaku (Shirakawa teppan steak and sukiyaki house since 1929, third generation; core list)
//   + トラットリア レオーネ Trattoria Leone (Tuscan trattoria by Shijo Karasuma since 2007; notable list)
//   + The Churrasco 京都河原町 (all-you-can-eat churrasco on the 6th floor of Don Quijote; notable list)
//   Picked 2026-11-05 after batch 6 was integrated. `queue.mjs kyoto-missed next core 200`: Stars'n Cacio 26034775 and
//   祇園みかく 26000569 (the first two lane-1 ids). `next notable 200`: 京の焼肉処 弘 三条木屋町店 26000947 skipped (chain);
//   トラットリア レオーネ 26005705; The Churrasco 京都河原町 26042695. None of the four is in data/kyoto.json: grep by name
//   (Cacio, みかく/Mikaku, レオーネ/Leone, Churrasco/シュラスコ) and address (伊勢屋町362, 常盤町165/車道, 繁昌町295,
//   塩屋町321) found none. Gion Mikaku's sister 北新地みかく (Osaka) is not in data/osaka.json.
//   Chain check: The Churrasco's operator site (will-food.com, 株式会社WILL) renders only by script, so the number of
//   The Churrasco shops could not be read; only this one appears in our Tabelog crawls — flagged for the integrator.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000947', '京の焼肉処 弘 三条木屋町店: branch of 京の焼肉処 弘, whose official site (yakiniku-hiro.com, read 2026-11-05) lists eight 京の焼肉処 弘 shops — 千本三条本店, 三条木屋町店, 京都駅前店, 八条口店, 京都タワーサンド店, 西院店, 四条木屋町店, 山科駅前店 — plus 京やきにく 弘 and 弘商店 shops; a chain (none in data).');

// ================================================================ Stars'n Cacio Kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034775/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://starsncacio.com/';
  const H = day(['09:00', '11:00'], ['11:30', '17:00'], ['17:30', '22:30']);
  put({
    id: 'kyoto_stars_n_cacio', name: "Stars'n Cacio Kyoto", category: 'OMNI',
    lat: 35.006300, lng: 135.766462, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta (fresh spinach noodles, ravioli with chestnut-flour dough), pancakes, toast and tiramisu sit beside risotto, salads and grilled meat; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the shop grows its own herbs, but no vegan dish is named; many dishes use cheese, cream, yogurt or eggs (Tabelog; 2026 reviews).',
    hours_raw: 'Every day: breakfast 9:00–11:00 (last order 10:30), lunch 11:30–17:00 with only part of the à la carte menu from 14:00, dinner 17:30–22:30 (last food order 21:00, drinks 22:30) (Tabelog). Reservations accepted; children under 10 at lunch only (Tabelog). Dogs welcome on the terrace only, kept on the floor (Tabelog; 2026 reviews). 10% service charge; holiday lunches cost more (Tabelog; September 2026). 56 seats: 28 at tables, 8 at the counter, 20 on the terrace; non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), no e-money or QR (Tabelog). Many staff are from abroad and serve in English and Japanese (September and October 2026). About 5 min walk from Kawaramachi Stn (Hankyu) (Tabelog). Opened 1 September 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shijo Kawaramachi, in a townhouse — 5 min walk from Kawaramachi Stn',
    cuisine: 'Italian cooking with Kyoto seasonal ingredients, from breakfast to dinner (official site): a chef with executive-chef experience at well-known hotels, herbs from the shop’s own garden, no additives (Tabelog shop text) · breakfast course ¥3,850: granola yogurt, tomato salad or juice, fluffy pancakes, coffee; avocado toast (September–October 2026) · lunch: an August–September set of stuzzichini, gazpacho, handmade ravioli of Kyoto chicken and Taggiasca olives in chestnut-flour pasta, tiramisu and coffee; a ¥6,500 holiday lunch course with a choice of three pastas and fish or beef (August–September 2026) · dinner: spinach tagliatelle with cream, tomato and sea urchin pasta, cheese risotto, duck breast; white truffle dishes promised for October (September 2026) · aperitivi, signature cocktails, a chosen wine list (official site)',
    website: SITE, gmaps: gm("Stars'n Cacio Kyoto"), menu_url: SITE,
    notes: "[Italian · Kawaramachi, la dolce vita from breakfast] A warm, wood-and-greenery Italian restaurant in a townhouse near Kawaramachi that feels, reviewers say, like being abroad: breakfast of pancakes and granola from 9:00 (¥3,850), lunch courses and handmade ravioli, then dinner of pasta, cheese risotto and duck, with cocktails and Italian wines. Much of the staff is from abroad and speaks English, the owner's dog wanders the room, and dogs are welcome on the terrace. A 10% service charge; no children under 10 at dinner. One September 2026 diner with a table booking was first shown to the terrace.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (September 2026 review), unnamed'], origin: null,
      background: 'Per the Tabelog shop text: authentic Italian cooking by a chef who was executive chef at renowned hotels, using fresh ingredients from selected regions and herbs from the shop’s own garden, without additives. Per the official site: Italian food with Japan’s finest seasonal ingredients, aperitivos, cocktails and wine, for Kyoto residents and visitors from Japan and abroad, "in the spirit of la dolce vita". Opened 1 September 2020 (Tabelog). A September 2026 regular heard from the owner-chef about white truffle dishes coming the next month; another reviewer saw the owner’s dog roaming the restaurant.',
      philosophy: 'Per the official site: a destination where excellent food, culture, music, art and fashion converge, "our own definition of luxury".',
      specialty: 'Breakfast pancakes; handmade pasta and ravioli.',
      anecdotes: [
        { text: '"Many of the staff members are foreigners, but they are also fluent in Japanese. The owner\'s dog roams around the restaurant, adding to the comforting ambiance." — September 2026.', source: R + 'B538402900/' },
        { text: '"The pancakes were crispy and fragrant on the outside, while being soft and fluffy on the inside." — September 2026.', source: R + 'B536709342/' },
        { text: 'A September 2026 diner with a table booking was led to a dim terrace and told only the terrace was available; a table was opened on request. The holiday lunch came to nearly ¥10,000 with the surcharge.', source: R + 'B536157863/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ステーキ・パスタ、中京区伊勢屋町362、阪急河原町駅から徒歩約5分、毎日 9:00〜11:00 (L.O. 10:30)・11:30〜17:00 (14〜17時は一部のアラカルトのみ)・17:30〜22:30 (L.O. 料理21:00・ドリンク22:30)、予約可、10歳未満はランチのみ、犬はテラス席のみ、サービス料10%、56席 (テラス20、カウンター8、テーブル28)、禁煙、カード可、電子マネー・QR 不可、ベジタリアンメニューあり、2020年9月1日オープン、店舗紹介: ホテルの総料理長を務めたシェフ、自家菜園のハーブ、無添加。公式サイト (英語): 京都の旬の食材とイタリア料理、アペリティーヴォ、カクテル、ワイン、朝食、la dolce vita。口コミ (2026年8〜10月、英語): 朝食コース3,850円、パンケーキ、グラノーラ、手打ちのラビオリ、ほうれん草のパスタ、ウニのトマトパスタ、チーズのリゾット、鴨胸肉、英語で接客する海外のスタッフ、オーナーの犬、テラス席。',
      confidence: 'medium', sources: [TB, SITE, R + 'B531392908/', R + 'B535033067/', R + 'B536069135/', R + 'B536093342/', R + 'B536157863/', R + 'B536374940/', R + 'B536709342/', R + 'B537241288/', R + 'B538402900/', R + 'B538682554/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff and an English website; 10% service; dogs on the terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区伊勢屋町362',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006300, 135.766462); cross-checked: GSI 京都府京都市中京区伊勢屋町362番地 (lot) 41 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537241288/', R + 'B536374940/'],
    price_note: 'No menu prices read on the site; prices from September–October 2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Breakfast course (yogurt, tomato salad, pancakes, coffee)', '¥3,850', 'Breakfast', 'no', 'no', 'October 2026.', 'breakfast_course'),
      it('', '', 'Holiday lunch course (appetiser, pasta, fish or beef, sweets)', '¥6,500', 'Lunch', 'no', 'no', 'September 2026; one drink required.', 'lunch_course'),
      it('', '', 'Handmade ravioli (Kyoto chicken, Taggiasca olives, chestnut-flour pasta)', '', 'Pasta', 'no', 'no', 'August 2026.', 'ravioli'),
      it('', '', 'Cheese risotto', '', 'Risotto', 'ask', 'no', 'September 2026.', 'cheese_risotto'),
    ] }, {
    cuisine: '京都の旬の食材のイタリア料理を朝から夜まで (公式サイト): ホテルの総料理長を務めたシェフ、自家菜園のハーブ、無添加 (食べログの店舗紹介)・朝食コース3,850円: グラノーラとヨーグルト、トマトのサラダかジュース、ふわふわのパンケーキ、コーヒー。アボカドトースト (2026年9〜10月)・昼: 8〜9月のセットはスッツィキーニ、ガスパチョ、栗粉の生地で京都の鶏とタジャスカオリーブを包んだ手打ちのラビオリ、ティラミス、コーヒー。連休のランチコース6,500円 (パスタ3種から、魚か牛肉) (2026年8〜9月)・夜: クリームのほうれん草のタリアテッレ、ウニのトマトパスタ、チーズのリゾット、鴨胸肉。10月は白トリュフの料理の予定 (2026年9月)・アペリティーヴォ、オリジナルカクテル、選んだワイン (公式サイト)',
    neighborhood: '四条河原町近くの町家。河原町駅から徒歩5分',
    gf_detail: '要確認。パスタ (ほうれん草の生麺、栗粉の生地のラビオリ)、パンケーキ、トースト、ティラミスのほか、リゾット、サラダ、焼いた肉。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、自家菜園のハーブを使うが、ヴィーガンの料理は書かれていない。チーズ、クリーム、ヨーグルト、卵を使う料理が多い (食べログ、2026年の口コミ)。',
    notes: '[イタリアン・河原町、朝からのドルチェ・ヴィータ] 河原町近くの町家の、木と緑のあたたかいイタリアン。口コミでは外国にいるようと評判。朝9時からパンケーキとグラノーラの朝食 (3,850円)、昼はコースや手打ちのラビオリ、夜はパスタ、チーズのリゾット、鴨にカクテルとイタリアのワイン。海外出身のスタッフが多く英語が通じ、オーナーの犬が店内を歩き、テラスは犬連れ可。サービス料10%、夜は10歳未満不可。2026年9月、テーブルを予約した客が最初テラスに案内されたとの口コミも。',
  });
}

// ================================================================ 祇園みかく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000569/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mikaku.co.jp/'; const MENU = SITE + 'menu/'; const ABOUT = SITE + 'about/';
  const H = day(['12:00', '14:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_gion_mikaku', name: '祇園みかく (Gion Mikaku)', category: 'MOM_AND_POP',
    lat: 35.005139, lng: 135.772653, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan steak, grilled shabu-shabu and teppan sukiyaki, finished with garlic rice or Mikaku beef curry; sukiyaki and curry usually involve soy sauce or roux, and no gluten information is given (official menu; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef house; even the lunch comes with beef shigure on the rice and a beef-bone soup (official menu).',
    hours_raw: 'Lunch 12:00–14:00 (last order 13:30), dinner 18:00–23:00 (last order 22:00); closed Monday; booking required for both (official site). Tabelog adds that dinner should be booked a day or two ahead. Formal dress: no sandals or patterned shirts in summer; school-age children only, no infants (Tabelog). 16 counter seats upstairs around the teppan, plus a private room for up to 7 (official site; Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). On Nawate by the Shirakawa, north of Shijo; reached by lift; 5 min walk from Gion-Shijo Stn (official site; Tabelog; December 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nawate by the Shirakawa, north of Shijo — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Teppanyaki beef house of female cattle only, bought whole as calves raised in Sanda, Hyogo, aged and boned in-house (official site); Tabelog’s shop text says young female Tajima cattle · Mikaku three-way course ¥30,000: 8 plates with 150 g of beef as grilled shabu-shabu (round), steak (fillet) and teppan sukiyaki (loin), garlic rice or Mikaku beef curry, ice cream (official menu) · Mikaku beef steak course: round 150 g ¥26,500, fillet 150 g ¥38,500, loin 200 g ¥40,000 (official menu) · lunch steak with soup, grilled vegetables, rice with beef shigure and beef-bone soup: 100 g ¥5,000 to 250 g ¥9,500 (official menu) · beer, whisky, sake, chosen wines (official menu)',
    website: SITE, gmaps: gm('祇園みかく 京都'), menu_url: MENU,
    notes: "[Teppan steak · Gion Shirakawa, a beef house since 1929] A third-generation beef house on the Shirakawa, where the cooks grill only female wagyu — bought whole, aged and boned in-house — on the teppan in front of a 16-seat counter, with big windows onto weeping cherries in spring and greenery in summer. Steak, grilled shabu-shabu and teppan sukiyaki come together in the ¥30,000 three-way course; the lunch steak starts at ¥5,000 for 100 g. The house began teppan steak after the war at the request of occupation officers. Formal dress; book ahead; closed Monday.",
    chef_bio: { chef_name: '三田兼司 (third generation)', roles: ['Third-generation owner (official site)'], origin: null,
      background: 'Per the official site: founded in 1929 (Showa 4) — Tabelog’s shop text gives 1927 — as a gyūnabe house that grew on the founder 三田進太郎’s "太牢油焼"; teppan steak began after the war at the request of occupation officers; the founder, the second generation 三田昌治 and the third generation 三田兼司 have served only the best cuts of female cattle; calves registered by nose print and raised in Sanda, Hyogo, are bought whole and aged and boned in the shop; the centenary falls in 2029. A sister shop, 北新地みかく, is in Osaka (official site; a June 2026 reviewer also mentions it).',
      philosophy: 'Per the official site: choose the finest beef, cut it with the best technique and cook it to the best doneness, unchanged since the founder.',
      specialty: 'Three-way course of steak, grilled shabu-shabu and teppan sukiyaki.',
      anecdotes: [
        { text: 'A June 2026 group at the counter called it an honour to have a steak grilled by the chef, and admired the greenery through the large windows.', source: R + 'B530955977/' },
        { text: '"At the counter seats, the view through the window resembles a beautiful painting." Two lunches of 200 g and 150 g with dessert and coffee came to about ¥16,000. — December 2025.', source: R + 'B518551263/' },
        { text: 'An October 2024 visitor took the nine-dish tasting course (¥28,000) of sukiyaki, shabu-shabu and teppan steak, finishing with garlic rice and beef curry.', source: R + 'B494240819/' },
      ],
      japanese_sources_summary: '公式サイト (mikaku.co.jp): 1929年 (昭和4年) 創業、雌牛の太牢のみ、創業者・三田進太郎、二代目・三田昌治、三代目・三田兼司、牛鍋から始まり「太牢油焼」、戦後に占領軍将校の求めで鉄板焼ステーキ、兵庫県三田市で育った子牛を一頭買いし店内で熟成・脱骨、2029年に百周年、東山区常盤町165番地 (祇園縄手四条上ル車道)、カウンター16席、12:00〜14:00 (L.O. 13:30)・18:00〜23:00 (L.O. 22:00)、予約必須、月曜定休、みかく三種焼コース30,000円、みかく牛ステーキコース (もも150g 26,500円、フィレ150g 38,500円、ロース200g 40,000円)、ランチのみかく牛鉄板ステーキ100g 5,000円〜250g 9,500円、北新地みかく。食べログ: ステーキ・すき焼き、1927年からの老舗、Tajima の若い雌牛 (店舗紹介)、夜は1〜2日前までに予約、ドレスコード、小学生以上、乳幼児不可、カード可。口コミ (2025年12月〜2026年6月、英語): 窓からの白川の眺め、シェフが目の前で焼く、ランチ2人で約16,000円。',
      confidence: 'medium', sources: [TB, SITE, MENU, ABOUT, R + 'B494240819/', R + 'B518551263/', R + 'B530955977/', R + 'B508480803/', R + 'B472376726/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (Tabelog or TableCheck); English page on the official site; formal dress; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町165 (大和大路通四条上ル車道)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (September 2026 notices) and Tabelog listing; reviews dated December 2025 and June 2026.' },
    pin_source: `Tabelog ${TB} (35.005139, 135.772653); cross-checked: GSI 京都府京都市東山区常盤町165番地 (lot, from the official site's address) 1 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu (tax included).', last_checked: TODAY, items: [
      it('みかく三種焼コース', '', 'Mikaku three-way course (8 plates, 150 g beef)', '¥30,000', 'Dinner course', 'ask', 'no', 'Grilled shabu-shabu, fillet steak, teppan sukiyaki.', 'sanshu_course'),
      it('みかく牛ステーキコース (フィレ肉 150g)', '', 'Mikaku beef steak course, fillet 150 g', '¥38,500', 'Dinner course', 'ask', 'no', '', 'fillet_course'),
      it('みかく牛ステーキコース (もも肉 150g)', '', 'Mikaku beef steak course, round 150 g', '¥26,500', 'Dinner course', 'ask', 'no', '', 'round_course'),
      it('みかく牛鉄板ステーキランチ 100g', '', 'Mikaku beef teppan steak lunch, 100 g', '¥5,000', 'Lunch', 'ask', 'no', '150 g ¥6,500; 200 g ¥8,000; 250 g ¥9,500.', 'steak_lunch'),
    ] }, {
    cuisine: '雌牛だけの鉄板焼の牛肉の店。兵庫県三田市で育った子牛を一頭買いし、店内で熟成・脱骨 (公式サイト)。食べログの店舗紹介では Tajima の若い雌牛・みかく三種焼コース30,000円: 8皿、お肉150gで焼きしゃぶしゃぶ (もも)、ステーキ (フィレ)、鉄板すき焼 (ロース)、ガーリックライスかみかくビーフカレー、アイス (公式メニュー)・みかく牛ステーキコース: もも150g 26,500円、フィレ150g 38,500円、ロース200g 40,000円 (公式メニュー)・ランチのステーキにスープ、焼き野菜、牛しぐれのご飯、牛骨の吸い物: 100g 5,000円から250g 9,500円 (公式メニュー)・ビール、ウイスキー、日本酒、選んだワイン (公式メニュー)',
    neighborhood: '四条の北、白川沿いの縄手。祇園四条駅から徒歩5分',
    gf_detail: '要確認。鉄板のステーキ、焼きしゃぶしゃぶ、鉄板すき焼に、締めはガーリックライスかみかくビーフカレー。すき焼やカレーはふつう醤油やルウを使い、グルテンの情報はない (公式メニュー、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉の店で、ランチのご飯にも牛しぐれ、汁は牛骨の吸い物 (公式メニュー)。',
    notes: '[鉄板ステーキ・祇園白川、1929年からの牛肉の店] 白川沿いの三代続く牛肉の店。一頭買いして店内で熟成・脱骨した雌牛の和牛だけを、16席のカウンターの前の鉄板で焼く。大きな窓の外は春はしだれ桜、夏は緑。ステーキ、焼きしゃぶしゃぶ、鉄板すき焼をそろえた三種焼コースは30,000円、ランチのステーキは100gで5,000円から。戦後、占領軍の将校の求めで鉄板焼ステーキを始めた。服装はフォーマルに。予約制、月曜休み。',
  });
}

// ================================================================ トラットリア レオーネ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005705/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_trattoria_leone', name: 'トラットリア レオーネ (Trattoria Leone)', category: 'OMNI',
    lat: 35.000332, lng: 135.757164, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tuscan trattoria: pasta (dried and homemade), lasagna, crostini, arancini and breaded vegetables in the appetiser platter, bread with meals; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable aglio e olio and basil pasta appear as daily pastas, but the appetiser platters mix in tuna, liver, omelette and cheese; no vegan dish is named (2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30 (last order 14:00), dinner 18:00–22:00 (last order 21:00); closed Wednesday and the third Tuesday of the month (Tabelog). Book by phone: Tabelog takes one online booking (up to two people) a day and none for Friday to Sunday; lunch booking advised (Tabelog; July 2026). No children below elementary school age (Tabelog). 16 table seats; non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), iD, QUICPay, PayPay and au PAY (Tabelog). English menu; sommelier; takeaway (Tabelog). Ground floor of 京都1号館ビル on Takatsuji west of Muromachi; 5–10 min walk from Shijo or Karasuma stations (Tabelog). Opened 11 November 2007 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji-dori west of Muromachi, south of Shijo Karasuma — 5–10 min walk from Shijo Stn',
    cuisine: 'Authentic Tuscan cooking in a small trattoria (Tabelog shop text) · lunch, four set options from salad and pasta to appetisers, pasta, main and dessert: salad and the day’s spaghetti ¥1,300 (September 2026); a generous appetiser platter of frittata, bean stew, fritters, crostini with chicken-liver pâté and a small lasagna (July–October 2026) · pastas: spicy spaghetti carrettiera, homemade pappardelle or tagliatelle with Tuscan wagyu ragù ¥2,000, basil pasta, mushroom-cream ravioli with sage butter (2026 reviews) · arista (herbed roast pork loin), beef braciole rifatte ¥3,400, tagliata (2026 reviews) · chicken-liver crostini ¥1,000, pecorino arancini ¥800, mushroom and Parmigiano salad ¥1,500, tiramisu (July 2026) · Tuscan wines, bottles from about ¥3,000 (July 2026)',
    website: null, gmaps: gm('トラットリア レオーネ 京都 高辻'), menu_url: null,
    notes: "[Italian · Shijo Karasuma, a small Tuscan trattoria] A 16-seat trattoria south of Shijo Karasuma, open since 2007, with maps and drawings on the walls and cooking straight from Tuscany: an appetiser platter so large it is nearly a meal, spicy carrettiera, homemade pappardelle with wagyu ragù, herb-roasted arista and chicken-liver crostini, with Tuscan wines from about ¥3,000 a bottle. Lunch from ¥1,300 is a bargain and fills up — book by phone. Service is quiet and minimal: reviewers in June and October 2026 found it brusque and unexplained. Closed Wednesday and the third Tuesday. Tabelog Italian WEST 100 2021.",
    chef_bio: { chef_name: null, roles: ['Chef and a server (unnamed in the sources)'], origin: null,
      background: 'Per the Tabelog shop text: a cozy little Italian restaurant of authentic Tuscan cuisine. Opened 11 November 2007 (Tabelog). Tabelog Italian WEST "Tabelog 100" 2021. Regulars in 2026 praise the value and the portions; two 2026 reviewers describe a quiet server who explains little.',
      philosophy: null, specialty: 'Tuscan appetiser platter; carrettiera; wagyu ragù pappardelle; arista.',
      anecdotes: [
        { text: '"The appetizer portion is incredible... I mean, is this really just an appetizer? It\'s so much food." — July 2026.', source: R + 'B531548339/' },
        { text: 'A June 2026 diner found the service brusque, the beef tagliata tough and the card payment handled out of sight with no breakdown, though the pastas had a Tuscan flavour.', source: R + 'B530246160/' },
        { text: '"At TRATTORIA LEONE, everything I’ve tried has been delicious and there are no misses, all at reasonable prices." — July 2026.', source: R + 'B531503996/' },
        { text: '"The quiet server... quite innovative." There was no explanation of the daily pasta or dessert. — October 2026.', source: R + 'B536864782/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): イタリアン・パスタ・ダイニングバー、下京区高辻通室町西入ル繁昌町295-1 京都1号館ビル1F、四条駅・烏丸駅から徒歩5〜10分、12:00〜14:30 (L.O. 14:00)・18:00〜22:00 (L.O. 21:00)、水曜と第3火曜休み、ネット予約は1日1組2名まで (金〜日は不可)、電話予約がおすすめ、未就学児不可、16席、禁煙、カード・iD・QUICPay・PayPay・au PAY 可、英語メニュー、ソムリエ、テイクアウト、2007年11月11日オープン、イタリアン WEST 百名店 2021、店舗紹介: 本格トスカーナ料理の小さなイタリアン。口コミ (2026年6〜10月、英語): ボリュームのある前菜の盛り合わせ、カレッティエラ、和牛ラグーのパッパルデッレ2,000円、アリスタ、鶏レバーのクロスティーニ1,000円、ランチ1,300円から、無口な接客、説明がない、カードの会計への不満 (2026年6月)。',
      confidence: 'medium', sources: [TB, R + 'B519638194/', R + 'B524361205/', R + 'B530246160/', R + 'B531503996/', R + 'B531540854/', R + 'B531548339/', R + 'B531936893/', R + 'B536144841/', R + 'B536480297/', R + 'B536864782/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; book by phone; little explanation from the server; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通室町西入ル繁昌町295-1 京都1号館ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.000332, 135.757164); cross-checked: GSI 京都府京都市下京区繁昌町295番地 (lot) 29 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531503996/', R + 'B536480297/'],
    price_note: 'No menu read; prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: salad and spaghetti of the day', '¥1,300', 'Lunch', 'no', 'ask', 'September 2026.', 'lunch_pasta'),
      it('', '', 'Homemade pappardelle with Tuscan wagyu ragù', '¥2,000', 'Pasta', 'no', 'no', 'July 2026.', 'ragu_pappardelle'),
      it('', '', 'Chicken-liver pâté crostini', '¥1,000', 'Antipasti', 'no', 'no', 'July 2026.', 'liver_crostini'),
      it('', '', 'Pecorino arancini', '¥800', 'Antipasti', 'no', 'no', 'July 2026.', 'arancini'),
      it('', '', 'Beef braciole rifatte', '¥3,400', 'Mains', 'ask', 'no', 'July 2026.', 'braciole'),
    ] }, {
    cuisine: '小さなトラットリアの本格トスカーナ料理 (食べログの店舗紹介)・ランチはサラダとパスタから前菜、パスタ、メイン、デザートまでの4種: サラダと本日のスパゲッティ1,300円 (2026年9月)、フリッタータ、豆の煮込み、フリット、鶏レバーのクロスティーニ、小さなラザニアのたっぷりの前菜盛り合わせ (2026年7〜10月)・パスタ: 辛いカレッティエラ、自家製パッパルデッレかタリアテッレのトスカーナ風和牛ラグー2,000円、バジルのパスタ、きのこクリームとセージバターのラビオリ (2026年の口コミ)・アリスタ (ハーブの豚ロースのロースト)、牛肉のブラチョーレ リファッテ3,400円、タリアータ (2026年の口コミ)・鶏レバーのクロスティーニ1,000円、ペコリーノのアランチーニ800円、きのことパルミジャーノのサラダ1,500円、ティラミス (2026年7月)・トスカーナのワイン、ボトルは3,000円台から (2026年7月)',
    neighborhood: '四条烏丸の南、室町の西の高辻通。四条駅から徒歩5〜10分',
    gf_detail: '要確認。トスカーナのトラットリアで、パスタ (乾麺と自家製)、ラザニア、クロスティーニ、アランチーニ、パン粉の野菜が前菜盛り合わせに入り、パンも付く。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。野菜のアーリオ・オーリオやバジルのパスタが日替わりで出るが、前菜盛り合わせにはツナ、レバー、オムレツ、チーズも入る。ヴィーガンの料理は書かれていない (2026年の口コミ)。',
    notes: '[イタリアン・四条烏丸、小さなトスカーナのトラットリア] 四条烏丸の南、2007年からの16席のトラットリア。壁には地図や絵、料理はトスカーナそのもの: ほぼ一食分の前菜盛り合わせ、辛いカレッティエラ、和牛ラグーの自家製パッパルデッレ、ハーブのアリスタ、鶏レバーのクロスティーニ、トスカーナのワインはボトル3,000円ほどから。1,300円からのランチはお得で混むので電話で予約を。接客は静かで最小限で、2026年6月と10月の客は無愛想で説明がないと書いている。水曜と第3火曜休み。食べログイタリアン WEST 百名店 2021。',
  });
}

// ================================================================ The Churrasco 京都河原町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042695/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '23:30']); const SAT = day(['12:00', '23:00']); const SUN = day(['12:00', '23:30']);
  put({
    id: 'kyoto_the_churrasco_kawaramachi', name: 'The Churrasco 京都河原町 (The Churrasco Kyoto Kawaramachi)', category: 'OMNI',
    lat: 35.005776, lng: 135.769072, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled meats carved at the table with sauces, alongside a buffet of bread, curry, pizza, pasta and fried dishes; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an all-you-can-eat meat restaurant; grilled vegetables, pineapple and the salad bar are sides (Tabelog; 2026 reviews).',
    hours_raw: 'Monday to Friday 16:00–23:30; Saturday 12:00–23:00; Sunday and holidays 12:00–23:30; last food order 22:30, drinks 23:00 (Tabelog). Two-hour sittings (food last order at 70 or 90 minutes, depending on the course); one drink per person unless you take free drinks (Tabelog). Reservations accepted, same-day welcome (Tabelog). From 12 to 31 December courses cost ¥500 more; a reviewer paid ¥500 extra on a Sunday (Tabelog; October 2026). 100 seats; non-smoking; wheelchair accessible; children welcome, with child prices (Tabelog; October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay, Alipay, WeChat Pay; no service or table charge (Tabelog). Menus in English, traditional Chinese and Korean (Tabelog). 6th floor of Don Quijote Shijo Kawaramachi; 2 min walk from Kyoto-Kawaramachi Stn (Tabelog). Tabelog gives the opening as 1 May 2025; the shop text says May 2023.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SAT, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-dori south of Takoyakushi, 6th floor — 2 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'All-you-can-eat Brazilian churrasco: skewers of beef, pork, chicken and sausage roasted with rock salt and carved at the table, plus grilled vegetables, grilled pineapple, pão de queijo, a salad bar, curry and rice (Tabelog shop text; 2026 reviews) · courses (2 hours): premium, 18 churrasco types and Italian dishes ¥4,990; standard, 16 types ¥3,990 (Tabelog); a reviewer paid ¥4,490 for the standard course at a holiday lunch, plus ¥660 for soft drinks (October 2026) · Italian all-you-can-eat with free drinks ¥3,500: 8 pizzas, 6 pastas, fritti, mussels, zeppole (Tabelog; November 2026) · children: elementary ¥2,500, preschool ¥500 (October 2026) · birthday dessert plate ¥500 (Tabelog)',
    website: 'https://will-food.com/', gmaps: gm('The Churrasco 京都河原町'), menu_url: TB,
    notes: "[Churrasco · Kawaramachi, all-you-can-eat Brazilian grill] A big, 100-seat churrasco room on the 6th floor of the Don Quijote at Shijo Kawaramachi, with night views over the city: staff — one reviewer mentions a Brazilian chef — carve skewers of beef, garlic chicken and sausage at the table, with grilled pineapple, cheese bread, a salad bar and a well-liked curry. Two-hour courses run ¥3,990–4,990 (more on Sundays and in late December); there is also an Italian buffet with free drinks for ¥3,500. Good for groups and families. One October 2026 regular found the beef tough and the carving clumsy. Tabelog Asian/Ethnic WEST 100 2026.",
    chef_bio: { chef_name: null, roles: ['Staff who carve at the table; a Brazilian chef per one review (October 2026)'], origin: null,
      background: 'Per the Tabelog shop text: one of the few churrasco restaurants in Kyoto, with all-you-can-eat and all-you-can-drink courses, wagyu skewers grilled and carved in front of you, and a night view; projector and microphone hire for groups. The operator’s website is will-food.com (株式会社WILL). Tabelog gives the opening date as 1 May 2025, while its shop text says "Opened in May 2023". Tabelog Asian/Ethnic WEST "Tabelog 100" 2026.',
      philosophy: null, specialty: 'Churrasco skewers carved at the table; grilled pineapple.',
      anecdotes: [
        { text: '"This restaurant offers authentic churrasco prepared by a Brazilian chef" — October 2026.', source: R + 'B537225335/' },
        { text: 'An October 2026 repeat visitor liked the pineapple, mushrooms and chicken but found the beef tough and thick or thin by turns as staff struggled to carve it, and was struck on the neck by a skewer while meat was being sliced.', source: R + 'B508587609/' },
        { text: '"In the last 10 minutes of the all-you-can-eat period, I could also order additional servings of my favorite churrasco" — October 2026; the same reviewer noted sauces left in open containers on the table.', source: R + 'B537629696/' },
        { text: '"And when you come here, you absolutely must try the... self-service homemade curry!" — October 2026.', source: R + 'B537890419/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): シュラスコ・イタリアン・ビュッフェ、中京区河原町通蛸薬師下る塩屋町321 ドン・キホーテ四条河原町店6F、京都河原町駅から徒歩2分、月〜金 16:00〜23:30、土 12:00〜23:00、日祝 12:00〜23:30 (L.O. 料理22:30・ドリンク23:00)、予約可 (当日も可)、1人1ドリンクか飲み放題、2時間制、プレミアム食べ放題4,990円、スタンダード3,990円、イタリアン食べ飲み放題3,500円、12月12〜31日は500円増し、100席、禁煙、車椅子可、子供可、カード・PayPay・Alipay・WeChat Pay 可、サービス料・チャージなし、英語・繁体字・韓国語メニュー、2025年5月1日オープン (店舗紹介は2023年5月)、アジア・エスニック WEST 百名店 2026、運営サイト will-food.com。口コミ (2026年10〜11月、英語): ブラジル人のシェフ、パイナップル、ポン・デ・ケージョ、カレー、サラダバー、日曜は500円増し、子供料金、肉が硬く切り方が下手との声、串が首に当たった、タレの容器が開いたまま。',
      confidence: 'medium', sources: [TB, R + 'B506179203/', R + 'B508587609/', R + 'B537225335/', R + 'B537245577/', R + 'B537529237/', R + 'B537629696/', R + 'B537890419/', R + 'B538269356/', R + 'B538276631/', R + 'B538639858/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean; meat brought to the table; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通蛸薬師下る塩屋町321 ドン・キホーテ四条河原町店 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through November 2026. Chain status unverified (operator site renders only by script).' },
    pin_source: `Tabelog ${TB} (35.005776, 135.769072); cross-checked: GSI 京都府京都市中京区塩屋町321番地 (lot) 53 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537629696/'],
    price_note: 'Tabelog course prices (tax included; ¥500 more 12–31 December); a holiday price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Premium all-you-can-eat, 18 churrasco types and Italian dishes (2 hours)', '¥4,990', 'Courses', 'ask', 'no', '', 'premium_course'),
      it('', '', 'Standard all-you-can-eat, 16 churrasco types (2 hours)', '¥3,990', 'Courses', 'ask', 'no', '¥4,490 at a holiday lunch (October 2026).', 'standard_course'),
      it('', '', 'Italian all-you-can-eat with free drinks (2 hours)', '¥3,500', 'Courses', 'no', 'no', '', 'italian_course'),
    ] }, {
    cuisine: '食べ放題のブラジルのシュラスコ: 岩塩で焼いた牛、豚、鶏、ソーセージの串を席で切り分ける。焼き野菜、焼きパイナップル、ポン・デ・ケージョ、サラダバー、カレー、ご飯も (食べログの店舗紹介、2026年の口コミ)・コース (2時間): プレミアム、シュラスコ18種とイタリアン4,990円、スタンダード、16種3,990円 (食べログ)。祝日のランチでスタンダードが4,490円、ソフトドリンク660円 (2026年10月)・イタリアンの食べ飲み放題3,500円: ピザ8種、パスタ6種、フリット、ムール貝、ゼッポレ (食べログ、2026年11月)・子供: 小学生2,500円、未就学児500円 (2026年10月)・誕生日のデザートプレート500円 (食べログ)',
    neighborhood: '蛸薬師の南の河原町通、ビルの6階。京都河原町駅から徒歩2分',
    gf_detail: '要確認。席で切り分ける焼いた肉とソースに、パン、カレー、ピザ、パスタ、揚げ物のビュッフェ。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉の食べ放題の店で、焼き野菜、パイナップル、サラダバーは付け合わせ (食べログ、2026年の口コミ)。',
    notes: '[シュラスコ・河原町、食べ放題のブラジルの串焼き] 四条河原町のドン・キホーテ6階、夜景の見える100席の大きなシュラスコの店。スタッフ (口コミにはブラジル人のシェフとも) が牛、ガーリックチキン、ソーセージの串を席で切り分け、焼きパイナップル、チーズパン、サラダバー、評判のカレーも。2時間のコースは3,990〜4,990円 (日曜と12月下旬は割増)、飲み放題付きのイタリアンのビュッフェは3,500円。グループや家族向き。2026年10月の常連は牛肉が硬く切り方が下手だったと書いている。食べログアジア・エスニック WEST 百名店 2026。',
  });
}

save();
