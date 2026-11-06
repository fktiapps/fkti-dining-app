// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 15.
//   + しぐれ茶屋 侘助 Shigure Chaya Wabisuke (small Kyoto-cuisine counter on Shirakawa in Gion; yagenbori group)
//   + SUMI (coin-operated natural-wine stand and coffee on Kiyamachi at Matsubara; sister of the soba shop suba; since 2023)
//   + なな治 nanaharu (couple-run izakaya of kushiage and duck hot pot on Ebisugawa; moved from Kiyamachi in 2024)
//   + 鮨 森学 Sushi Mori Gaku (eight-seat sushi counter on Kiyamachi at Nijo, straw-grilled bonito; since 2024)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26001338, 26039756);
//   the first two from `next notable 200` (26041766, 26041124). None is in data/kyoto.json: grep by name (侘助/Wabisuke,
//   SUMI, なな治/nanaharu, 森学/Mori Gaku) and address (元吉町70, 美濃屋町182, 俵屋町299, 東生洲町489) found none.
//   Same-name count (Greg's Samboa ruling): no second shop found for any of the four. しぐれ茶屋 侘助 belongs to the yagenbori
//   group, whose site lists six Kyoto shops under six different names (花見小路やげんぼり, 出逢ひ茶屋おせん, しぐれ茶屋侘助,
//   祇をん う桶や う, 花遊小路 江戸川, 御二九と八さい はちべー; the last is kyoto_oniku_to_yasai_hachibe) — a local group of
//   differently named shops, drafted per the coordinator's 五十家 ruling. SUMI is a sister of the soba shop suba (not in data)
//   and a yakitori shop, per a July 2026 review — a small group.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ しぐれ茶屋 侘助
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001338/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yagenbori.co.jp/shop/wabisuke/'; const GROUP = 'https://www.yagenbori.co.jp/shop/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_shigure_chaya_wabisuke', name: 'しぐれ茶屋 侘助 (Shigure Chaya Wabisuke)', category: 'OMNI',
    lat: 35.005553, lng: 135.773501, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto cuisine with dashi, saikyo-miso grills and simmered dishes; the menu also has tempura, kakiage and a horse-mackerel fry, which are not gluten-free (official site; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal fish, dashi-based dishes, chicken, beef and duck (official site).',
    hours_raw: '17:00–23:00 (L.O. 22:00); closed Tuesday; seasonal breaks in summer and winter announced on the site (official site; Tabelog). Reservations accepted (Tabelog). An otoshi charge of ¥1,000 per person (Tabelog). Cards: VISA, Master, JCB, AMEX, Diners, UnionPay; no e-money or QR (Tabelog). 13 seats: 8 at the counter and one table for 4; private hire up to 20 (Tabelog; official site). Non-smoking (Tabelog). No seating for children (Tabelog). On the Shirakawa stone lane in Gion near Tatsumi Shrine, 4–5 min from Gion-Shijo Stn (official site; Tabelog; December 2024).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shirakawa in Gion, near Tatsumi Shrine — 4 min from Keihan Gion-Shijo Stn',
    cuisine: 'Small Kyoto-cuisine counter of seasonal fish and Kyoto vegetables (official site) · omakase of nine courses ¥11,000 — sakizuke, soup, sashimi, lidded dish, grill, plate, a small dish, fried dish, rice (official site) · à la carte: autumn salmon saikyo-yaki, Kyoto turnip steamed ¥1,500, saba heshiko ¥1,200, funazushi ¥2,200, whale bacon ¥2,000, karasumi ¥1,800, duck loin ¥1,800 (official site) · seasonal list: dashimaki, homemade karasumi, wakatake-ni, sea bream roe with butterbur, Kyoto jidori grilled with salt, tempura, saba-zushi, jako rice (official site; March 2026) · takeaway saba-zushi and braised pork (official site) · Kyoto sake (official site)',
    website: SITE, gmaps: gm('しぐれ茶屋 侘助 祇園'), menu_url: SITE,
    notes: '[Kyoto cuisine · Gion Shirakawa, a counter by the stone lane] A tiny counter hidden on the Shirakawa stone lane in Gion, with eight seats in front of the cooks and one table. The nine-course omakase is ¥11,000, or order à la carte from the seasonal list: rolled omelette, karasumi with daikon, salt-grilled Kyoto chicken, saba-zushi to finish, and old-Kyoto drinking snacks such as funazushi and whale bacon. The head chef, named 筒井 on the official site, trained within the yagenbori group. ¥1,000 otoshi; closed Tuesday.',
    chef_bio: { chef_name: '筒井 (head chef; reading not given)', roles: ['Head chef 筒井, promoted after training at yagenbori (official site)', 'Operated by the yagenbori group'], origin: null,
      background: 'The official site says the head chef, 筒井, was chosen to lead Wabisuke after training at yagenbori, and that the kitchen blends Kyoto tradition with new arrangements. A March 2026 reviewer first came about 35 years ago, when an elderly woman ran it alone; it later joined the yagenbori group, and the chef has changed on each visit since. A February 2026 reviewer says the present head chef has led the kitchen for a few years.',
      philosophy: 'To bring out the character of fish from around Kyoto and Kyoto vegetables in Kyoto cuisine that shows the four seasons (official site).', specialty: 'Seasonal omakase; karasumi with daikon; saba-zushi.',
      anecdotes: [
        { text: 'A March 2026 regular of some 35 years noticed the large platters of obanzai once laid along the counter were gone, and was told the change came with COVID-19.', source: R + 'B70710104/' },
        { text: 'A February 2026 family bonded with the young head chef over baseball at a packed counter.', source: R + 'B523513786/' },
        { text: 'A 2019 regular who loves teppai mentioned it ahead of time, and the kitchen made it.', source: R + 'B342344050/' },
      ],
      japanese_sources_summary: '公式サイト (やげんぼりグループ): しぐれ茶屋侘助、東山区祇園白川通縄手東入ル、祇園・白川沿いのカウンター中心の小さな店、京都近郊の鮮魚と京野菜の京料理、やげんぼりで修行の後に料理長に抜擢された筒井料理長、おまかせコース9品11,000円、単品 (秋鮭西京焼き、京蕪蒸し1,500円、鯖へしこ、鮒ずし、くじらベーコン、からすみ、合鴨ロース)、季節のおすすめ (京出汁巻き、自家製からすみ、若竹煮、京地どり塩焼き、天ぷら、鯖ずし、じゃこごはん)、お持ち帰りの鯖寿司と角煮、17:00〜23:00 (L.O.22:00)、火曜休み、カウンター8席とテーブル1卓。グループの店は花見小路やげんぼり、出逢ひ茶屋おせん、しぐれ茶屋侘助、祇をん う桶や う、花遊小路 江戸川、御二九と八さい はちべー。食べログ: 13席、突き出し1,000円、カード可、禁煙、子ども用の席なし。口コミ (2019〜2026年、英語): 約35年前は年配の女性が一人で営んでいた、その後やげんぼりグループに、料理長は数年ごとに替わる、白川沿い、辰巳神社の近く。',
      confidence: 'medium', sources: [TB, SITE, GROUP, R + 'B342344050/', R + 'B463078440/', R + 'B472217531/', R + 'B497735205/', R + 'B498438291/', R + 'B499609283/', R + 'B509011043/', R + 'B523513786/', R + 'B537815665/', R + 'B70710104/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥1,000 otoshi; small counter, book ahead; no seats for children.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路東入ル元吉町70',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notices through February 2026); Tabelog reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.005553, 135.773501); cross-checked: GSI 京都府京都市東山区元吉町70番地 (lot) 11m — the full Tabelog form parsed only to the ward, so the town and lot were queried alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site menu, read 2026-11-05; the course changes with what is bought.', last_checked: TODAY, items: [
      it('おまかせコース（9品）', '', 'Omakase course, nine dishes', '¥11,000', 'Courses', 'ask', 'no', 'Official site.', 'omakase_9'),
      it('京蕪蒸し', '', 'Steamed Kyoto turnip', '¥1,500', 'Seasonal', 'ask', 'no', 'Official site.', 'kabura_mushi'),
      it('鯖へしこ', '', 'Saba heshiko (fermented mackerel)', '¥1,200', 'With drinks', 'ask', 'no', 'Official site.', 'saba_heshiko'),
      it('鮒ずし', '', 'Funazushi', '¥2,200', 'With drinks', 'ask', 'no', 'Official site.', 'funazushi'),
      it('くじらベーコン', '', 'Whale bacon', '¥2,000', 'With drinks', 'ask', 'no', 'Official site.', 'kujira_bacon'),
      it('からすみ', '', 'Karasumi', '¥1,800', 'With drinks', 'ask', 'no', 'Official site.', 'karasumi'),
      it('合鴨ロース', '', 'Duck loin', '¥1,800', 'With drinks', 'ask', 'no', 'Official site.', 'aigamo_rosu'),
    ] }, {
    cuisine: '京都近郊の鮮魚と京野菜の小さな京料理のカウンター (公式サイト)・おまかせコース9品11,000円、先付、椀物、お造り、蓋物、焼物、皿物、一品、揚物、ご飯 (公式サイト)・単品: 秋鮭西京焼き、京蕪蒸し1,500円、鯖へしこ1,200円、鮒ずし2,200円、くじらベーコン2,000円、からすみ1,800円、合鴨ロース1,800円 (公式サイト)・季節のおすすめ: 京出汁巻き、自家製からすみ、若竹煮、鯛の子と蕗、京地どり塩焼き、天ぷら、鯖ずし、じゃこごはん (公式サイト、2026年3月)・お持ち帰りの鯖寿司と豚角煮 (公式サイト)・京都の地酒 (公式サイト)',
    neighborhood: '祇園の白川沿い、辰巳神社の近く。京阪祇園四条駅から徒歩4分',
    gf_detail: '要確認。出汁、西京焼き、炊いたものなどの京料理。天ぷら、かき揚げ、鯵フライもあり、これらはグルテンフリーではない (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。季節の魚、出汁の料理、鶏、牛、鴨 (公式サイト)。',
    notes: '[京料理・祇園白川、石畳の小さなカウンター] 祇園白川の石畳にひっそり隠れた、カウンター8席とテーブル1卓の小さな店。おまかせ9品は11,000円。季節の単品から、出汁巻き、からすみ大根、京地どりの塩焼き、〆の鯖ずし、鮒ずしやくじらベーコンなど京の酒肴も。やげんぼりで修行した筒井料理長が腕をふるう。突き出し1,000円、火曜休み。',
  });
}

// ================================================================ SUMI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039756/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '23:00']);
  put({
    id: 'kyoto_sumi_kiyamachi_matsubara', name: 'SUMI', category: 'OMNI',
    lat: 34.998964, lng: 135.768494, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Natural wine, coffee and beer with cheese, salami and canelé; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Wine and black coffee; the snacks are cheese, salami and canelé (2025–2026 reviews).',
    hours_raw: '10:00–23:00 daily; closing days may vary (Tabelog). No reservations (Tabelog). Cash-on system: a machine turns a ¥1,000 note into two coins; one coin pours 50, 40 or 25 ml of wine from the self-serve server, depending on the wine (Tabelog; May 2026). Other drinks and snacks ordered from staff (May 2026). Cards: JCB; e-money and PayPay (Tabelog). 4 seats: two tables for two and a standing table, plus a few seats outside (Tabelog; September 2025). Bottle shop upstairs (Tabelog). Non-smoking (Tabelog). On Kiyamachi just north of Matsubara, next to the soba shop suba, 6 min from Keihan Kiyomizu-Gojo (Tabelog; 2025–2026 reviews). Opened 6 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi just north of Matsubara, next to suba — 6 min from Keihan Kiyomizu-Gojo Stn',
    cuisine: 'Open-fronted natural-wine stand with self-serve wine machines: orange, white, red and rosé from Japan, Spain, France and elsewhere, about ¥500 a pour (2025–2026 reviews) · iced Americano ¥550, chai, small bottle of beer ¥600, sparkling wine (2025–2026 reviews) · cheese platter, salami and ham, canelé (May–August 2026) · bottles for sale upstairs (Tabelog)',
    website: null, gmaps: gm('SUMI 木屋町 松原 ワイン'), menu_url: null,
    notes: '[Wine stand · Kiyamachi-Matsubara, natural wine by the coin] A small open-fronted stand on Kiyamachi where you feed ¥1,000 into a machine, get two coins, and pour your own natural wine from the servers — orange, Japanese, Spanish, French — about ¥500 a pour, from 10 a.m. to 11 p.m. Coffee, chai, beer, cheese, salami and canelé come from the counter, and bottles are sold upstairs. A sister of the soba shop next door, suba, so it works well before or after. Mostly standing; one November 2025 visitor found the system unexplained.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed); same group as the soba shop suba and a yakitori shop (July 2026 review)'], origin: null,
      background: 'Tabelog gives the opening as 6 July 2023. A July 2026 reviewer learned from the staff that it belongs to the same group as suba next door and a yakitori shop; a May 2026 reviewer calls suba the sister restaurant.',
      philosophy: null, specialty: 'Self-pour natural wine by the coin.',
      anecdotes: [
        { text: 'A May 2026 visitor who had read about ¥500 wine expected to order from staff, then found the machine: a ¥1,000 note, two coins, and the wine pours itself into the glass.', source: R + 'B528134987/' },
        { text: 'A November 2025 traveller started a Kyoto trip at 10:30 a.m. here and worked through twelve wines.', source: R + 'B529042266/' },
        { text: 'A November 2025 visitor found nobody explained the system and the staff chatting with someone inside; a neighbouring customer showed how it worked.', source: R + 'B518157479/' },
      ],
      japanese_sources_summary: '食べログ: SUMI、ワインバー・コーヒースタンド、下京区木屋町通松原上ル美濃屋町182-10、清水五条駅から320m、毎日 10:00〜23:00、不定休、予約不可、キャッシュオン (ワインサーバー専用メダル2枚1,000円、50mlにつき1枚)、カード (JCB)、電子マネー、PayPay、4席 (2人掛けテーブル2、立ち飲みテーブル1)、禁煙、2階はボトルワインの販売、2023年7月6日オープン。口コミ (2025〜2026年、英語): ナチュールワインのセルフサーバー、オレンジ、日本、スペイン、フランスのワイン、アイスアメリカーノ550円、チャイ、小瓶ビール600円、チーズ、サラミ、カヌレ、隣のそば店 suba の姉妹店。',
      confidence: 'medium', sources: [TB, R + 'B505670550/', R + 'B513567696/', R + 'B518157479/', R + 'B528134987/', R + 'B529042265/', R + 'B529042266/', R + 'B529042272/', R + 'B531934459/', R + 'B535172218/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve by coin, so little talking needed; reviewers mention many visitors from abroad (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通松原上ル美濃屋町182-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998964, 135.768494); cross-checked: GSI 京都府京都市下京区美濃屋町182番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B528134987/', R + 'B513567696/', R + 'B531934459/'],
    price_note: 'Coin price from Tabelog; other prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wine coins, two for ¥1,000 (one coin per 50, 40 or 25 ml pour)', '¥1,000', 'Wine', '', '', 'Tabelog; May 2026.', 'wine_coins'),
      it('', '', 'Iced Americano', '¥550', 'Coffee', '', '', 'September 2025.', 'iced_americano'),
      it('', '', 'Beer, small bottle', '¥600', 'Drinks', '', '', 'July 2026.', 'beer_small'),
    ] }, {
    cuisine: 'セルフサーバーで注ぐナチュールワインのスタンド: オレンジ、白、赤、ロゼ、日本、スペイン、フランスなど、1杯約500円 (2025〜2026年の口コミ)・アイスアメリカーノ550円、チャイ、小瓶ビール600円、スパークリングワイン (2025〜2026年の口コミ)・チーズの盛り合わせ、サラミとハム、カヌレ (2026年5〜8月)・2階でボトルワインを販売 (食べログ)',
    neighborhood: '松原のすぐ北の木屋町、suba の隣。京阪清水五条駅から徒歩6分',
    gf_detail: '要確認。ナチュールワイン、コーヒー、ビールに、チーズ、サラミ、カヌレ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ワインとブラックコーヒー。つまみはチーズ、サラミ、カヌレ (2025〜2026年の口コミ)。',
    notes: '[ワインスタンド・木屋町松原、メダルで注ぐナチュール] 木屋町の開け放した小さなスタンド。機械に1,000円札を入れてメダル2枚、サーバーから自分でナチュールワインを注ぐ。オレンジ、日本、スペイン、フランスなど1杯約500円、朝10時から夜11時まで。コーヒー、チャイ、ビール、チーズ、サラミ、カヌレはカウンターで、2階ではボトルも買える。隣のそば店 suba の姉妹店で、食事の前後に寄りやすい。ほぼ立ち飲み。2025年11月には仕組みの説明がなかったという声も。',
  });
}

// ================================================================ なな治
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041766/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_nanaharu_ebisugawa', name: 'なな治 (nanaharu)', category: 'OMNI',
    lat: 35.014801, lng: 135.764738, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, simmered octopus and a duck hot pot alongside the signature kushiage and tempura, which are not gluten-free; dashi and miso seasonings throughout (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, duck, pork, dashi-based dishes (2026 reviews).',
    hours_raw: '18:00–22:30; closed Wednesday and one irregular day a month (Tabelog). Reservations by phone (online on some days); seating limited to 2 hours 30 minutes; reservations dropped after 30 minutes’ delay without a call (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 19 seats with a counter (Tabelog). Non-smoking (Tabelog). Children of school age welcome (Tabelog). On Ebisugawa west of Tominokoji, 8 min from Karasuma-Marutamachi or Shiyakusho-mae Stn (Tabelog). Opened here 7 September 2024 after moving from Kiyamachi (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ebisugawa-dori west of Tominokoji — 8 min from Karasuma-Marutamachi Stn',
    cuisine: 'Couple-run izakaya with Japanese cooking and inventive kushiage (2026 reviews) · nanakushi, seven assorted kushiage ¥2,100, including angel shrimp (April 2026) · duck and Kujo green-onion hot pot, finished as zosui (March–October 2026) · bonito shio-tataki ¥1,650, nama-fu with walnut miso ¥990, sashimi of local fish, tender simmered octopus, sake-steamed guchi, herb-grilled pork loin, fried sesame tofu, young-sweetfish nanban (2026 reviews) · chirimen-sansho fried rice to finish (May–October 2026) · sake on the blackboard, Sapporo draft ¥730, ume soda ¥890 (April–July 2026)',
    website: null, gmaps: gm('なな治 nanaharu 京都 夷川'), menu_url: null,
    notes: '[Izakaya · Ebisugawa, kushiage and duck hot pot by a couple] A warm, counter-led izakaya run by a couple, which moved in 2024 from Kiyamachi to a quiet stretch of Ebisugawa. Regulars come for the nanakushi — seven creative kushiage (¥2,100) — and the duck and Kujo green-onion hot pot finished as zosui, with sashimi of local fish, bonito shio-tataki and a chirimen-sansho fried rice to close. A good blackboard of sake. Cash only; book by phone; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) and the chef’s wife, who run it as a couple'], origin: null,
      background: 'Reviewers knew it first on Kiyamachi; it moved to Ebisugawa, and Tabelog gives the opening here as 7 September 2024. Several 2026 reviews describe it as run by a couple.',
      philosophy: null, specialty: 'Nanakushi kushiage; duck and Kujo green-onion hot pot.',
      anecdotes: [
        { text: 'An April 2026 pair, not knowing when a concert would end, called at the last minute and were offered a table for two at 7:30 — and skipped the merchandise stand to make it.', source: R + 'B526540443/' },
        { text: 'A May 2026 diner arrived just before opening and watched the chef hang out the noren, glad to see the chef’s wife as lively as ever.', source: R + 'B529219372/' },
        { text: 'An August 2026 visitor returning after five years found the cooking unchanged while so many places were raising prices or cutting corners.', source: R + 'B534541867/' },
      ],
      japanese_sources_summary: '食べログ: なな治 (nanaharu)、居酒屋、中京区夷川通富小路西入俵屋町299 1F、烏丸丸太町駅・京都市役所前駅から徒歩8分、18:00〜22:30、水曜と月1回不定休、予約は電話 (ネット予約の日もある)、2時間30分制、カード・電子マネー・QR不可、19席、禁煙、2024年9月7日オープン。口コミ (2026年、英語): 木屋町から移転、夫婦で営む、七串 (串揚げ7本) 2,100円、鴨と Kujo ねぎの鍋と雑炊、鰹の塩たたき1,650円、生麩のくるみ味噌和え990円、地魚の造り、たこのやわらか煮、ぐじの酒蒸し、ちりめん山椒のチャーハン、黒板の日本酒。',
      confidence: 'medium', sources: [TB, R + 'B517183903/', R + 'B524024952/', R + 'B524526022/', R + 'B525817625/', R + 'B526540443/', R + 'B526626447/', R + 'B529219372/', R + 'B531288384/', R + 'B534541867/', R + 'B537340876/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; book by phone; 2 h 30 min seating.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区夷川通富小路西入俵屋町299 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014801, 135.764738); cross-checked: GSI 京都府京都市中京区俵屋町299番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525817625/', R + 'B531288384/'],
    price_note: 'No menu read; prices from April and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nanakushi, seven assorted kushiage', '¥2,100', 'Kushiage', 'no', 'no', 'April 2026.', 'nanakushi'),
      it('', '', 'Bonito shio-tataki', '¥1,650', 'Fish', 'ask', 'no', 'April 2026.', 'katsuo_shio_tataki'),
      it('', '', 'Nama-fu with walnut miso', '¥990', 'Small dishes', 'no', 'ask', 'April 2026; fu is wheat gluten.', 'namafu_kurumi_miso'),
      it('', '', 'Sapporo draft beer', '¥730', 'Drinks', '', '', 'July 2026.', 'draft_beer'),
      it('', '', 'Ume soda', '¥890', 'Drinks', '', '', 'April 2026.', 'ume_soda'),
    ] }, {
    cuisine: '夫婦で営む、和食と工夫を凝らした串揚げの居酒屋 (2026年の口コミ)・七串、串揚げ7本2,100円、エンジェルシュリンプも (2026年4月)・鴨と Kujo ねぎの鍋、〆は雑炊 (2026年3〜10月)・鰹の塩たたき1,650円、生麩のくるみ味噌和え990円、地魚の造り、たこのやわらか煮、ぐじの酒蒸し、豚ロースのハーブ焼き、胡麻豆腐の揚げ出し、小鮎の南蛮漬け (2026年の口コミ)・〆のちりめん山椒チャーハン (2026年5〜10月)・黒板の日本酒、サッポロ生ビール730円、梅ソーダ890円 (2026年4〜7月)',
    neighborhood: '富小路の西の夷川通。烏丸丸太町駅から徒歩8分',
    gf_detail: '要確認。造り、たこのやわらか煮、鴨鍋のほか、名物の串揚げと天ぷらはグルテンフリーではない。出汁や味噌の味付けが多い (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鴨、豚、出汁の料理 (2026年の口コミ)。',
    notes: '[居酒屋・夷川、夫婦で営む串揚げと鴨鍋] 夫婦で営む、カウンター中心のあたたかな居酒屋。2024年に木屋町から夷川通の静かな一角へ移転した。常連の目当ては工夫を凝らした串揚げ7本の七串 (2,100円) と、〆を雑炊にする鴨と Kujo ねぎの鍋。地魚の造り、鰹の塩たたき、最後にちりめん山椒のチャーハンも。黒板の日本酒も充実。現金のみ、予約は電話で、水曜休み。',
  });
}

// ================================================================ 鮨 森学
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041124/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://nextinnovationhp.wixsite.com/website-13';
  const H = day(['12:00', '14:00'], ['18:00', '22:30']);
  put({
    id: 'kyoto_sushi_mori_gaku', name: '鮨 森学 (Sushi Mori Gaku)', category: 'OMNI',
    lat: 35.012339, lng: 135.770895, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase of sushi and small dishes with soy-based seasonings, anago and eel with sauce, and wagyu shabu-shabu; allergies can be raised when booking (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase of fish and seafood, with wagyu (2026 reviews).',
    hours_raw: 'Reservations only. Lunch 12:00–14:00; dinner in two seatings that start together, 18:00–20:00 and 20:30–22:30; closed Wednesday (official site; Tabelog). Tell the shop about dislikes, allergies or celebrations when booking (Tabelog). A service charge is added (Tabelog). Cards, e-money and QR accepted (Tabelog). 8 counter seats (Tabelog). BYO drinks allowed (Tabelog). Non-smoking (Tabelog). Children and babies welcome, no baby chairs (Tabelog). Set back inside a building on Kiyamachi south of Nijo, 3 min from Kyoto Shiyakusho-mae Stn (Tabelog; July 2026). Opened 2 June 2024 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Nijo — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Omakase sushi counter with straw and charcoal theatre: fish from Maizuru in Kyoto and elsewhere in Japan (official site) · dinner is the chef’s course only, about 17 dishes (May 2026) · bonito grilled over flaming straw with the lights dimmed, served with shiso, ginger and salt; mackerel skin seared with hot charcoal for a roll (July 2026) · squid with charcoal salt or black salt and citrus, flounder, toro with mustard, anago sushi in a bamboo steamer, abalone with sea urchin, chawanmushi with gold leaf, yuba with salmon roe (July–October 2026) · wagyu shabu-shabu and other meat dishes between the sushi (June–July 2026) · white miso soup and sorbet to close (June 2026)',
    website: SITE, gmaps: gm('鮨 森学 木屋町'), menu_url: null,
    notes: '[Sushi · Kiyamachi-Nijo, straw-flamed bonito at an eight-seat counter] Down a passage off Kiyamachi, a dark, bar-like counter of eight seats where the owner, with more than thirty years in Japanese cooking, serves omakase from Maizuru fish and beyond. The show is the straw grill: lights down, flames up, bonito seared in front of you; mackerel skin is pressed with live charcoal. About seventeen dishes at dinner, in two seatings that start together; lunch at noon. Reservations only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed on the official site; an August 2026 review thanks “Master Inoue”)'], origin: null,
      background: 'The official site says the owner has more than thirty years of experience across Japanese cuisine, and describes the room as a calm, bar-like hideaway. Tabelog gives the opening as 2 June 2024.',
      philosophy: 'Seasonal fish chosen from Maizuru and across Japan, served as omakase at the counter (official site); a May 2026 reviewer noted the focus on origin and season.', specialty: 'Straw-grilled bonito; charcoal-seared mackerel roll.',
      anecdotes: [
        { text: 'At a July 2026 lunch the room went dark as the straw caught fire and the bonito was seared inches away — a first for the diner, who already loved katsuo tataki.', source: R + 'B532256066/' },
        { text: 'A September 2026 diner said it engaged smell and hearing as well as taste, with the scent of straw and the sizzle of charcoal, and a friend from Singapore planned to recommend it.', source: R + 'B535889982/' },
        { text: 'A June 2026 lunch guest found nothing memorable and was distracted by a server’s constant chatter with other guests.', source: R + 'B530875637/' },
      ],
      japanese_sources_summary: '公式サイト: 鮨森学、中京区木屋町通二条下る東生洲町489番地、京都舞鶴と全国から厳選した旬のネタ、おまかせコースでカウンターの鮨と一品料理、落ち着いたBARの雰囲気、日本料理全般で30年以上の経験を持つ店主、予約制、昼12:00〜14:00、夜1部18:00〜20:00、2部20:30〜22:30 (一斉スタート)、水曜休み、カード可。食べログ: 8席、サービス料あり、電子マネー・QR可、持ち込み可、禁煙、子ども可、2024年6月2日オープン。口コミ (2025〜2026年、英語): 夜は約17品のおまかせ、藁焼きの鰹、炭で炙る鯖、炭塩のいか、蒸籠の穴子、和牛のしゃぶしゃぶ、店主の Inoue さん。',
      confidence: 'medium', sources: [TB, SITE, R + 'B493226121/', R + 'B524895602/', R + 'B528116350/', R + 'B528783404/', R + 'B529720672/', R + 'B530875637/', R + 'B531654608/', R + 'B532256066/', R + 'B534510932/', R + 'B535889982/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservations only, set start times; service charge added; children welcome; guests from abroad common (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通二条下る東生洲町489',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012339, 135.770895); cross-checked: GSI 京都府京都市中京区東生洲町489番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B528783404/'],
    price_note: 'No published prices; Tabelog gives average spend ¥20,000–29,999 at dinner and ¥10,000–14,999 at lunch.', last_checked: TODAY, items: [
      it('', '', 'Dinner omakase, about 17 dishes (price not published)', '', 'Courses', 'ask', 'no', 'May 2026.', 'dinner_omakase'),
      it('', '', 'Lunch omakase (price not published)', '', 'Courses', 'ask', 'no', 'June–July 2026.', 'lunch_omakase'),
    ] }, {
    cuisine: '藁と炭の演出が楽しいおまかせの鮨カウンター: 京都舞鶴と全国から選んだ魚 (公式サイト)・夜は料理長のおまかせのみ、約17品 (2026年5月)・照明を落として燃え上がる藁で焼く鰹を大葉、生姜、塩で、熱した炭を押し当てた鯖の皮の巻物 (2026年7月)・炭塩や黒塩と柑橘のいか、ひらめ、からしをのせたトロ、蒸籠の穴子の鮨、鮑と雲丹、金箔の茶碗蒸し、湯葉といくら (2026年7〜10月)・鮨の合間に和牛のしゃぶしゃぶなど肉料理 (2026年6〜7月)・〆に白味噌の味噌汁とソルベ (2026年6月)',
    neighborhood: '二条の南の木屋町。京都市役所前駅から徒歩3分',
    gf_detail: '要確認。鮨と一品のおまかせで、醤油の味付け、タレの穴子やうなぎ、和牛のしゃぶしゃぶ。アレルギーは予約時に相談できる (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚介の鮨のおまかせと和牛 (2026年の口コミ)。',
    notes: '[鮨・木屋町二条、8席のカウンターで藁焼きの鰹] 木屋町から奥へ入った、BARのような落ち着いた8席のカウンター。日本料理30年以上の店主が、舞鶴をはじめ全国の魚でおまかせを握る。見どころは藁焼き。照明を落とし、炎を上げて目の前で鰹を焼き、鯖の皮には熱した炭を押し当てる。夜は約17品で、2部制の一斉スタート、昼は12時から。完全予約制、水曜休み。',
  });
}

save();
