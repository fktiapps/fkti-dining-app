// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 29.
//   + Japanese Noodle 一寸法師 Issunboushi (ramen counter below Kiyomizu-dera, open from 8:00, vegan ramen on the menu)
//   + さかな 波波 Sakana Naminami (natural-fish counter on Fuyacho south of Nijo, since 2003)
//   + 二條 葵月 Nijo Kizuki (one-man sushi and small-dish counter on Nijo-dori; no perfume, no children under 13)
//   + 旬菜 咲や Shunsai Sakuya (couple-run seasonal Japanese counter near Imadegawa-Omiya, Nishijin)
//   - 京御菓子司 亀屋博永 (26018858) and アングレディアン 京都 (26034158): skipped (reasons below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26037206, 26000180; from `next notable 200`:
//   26024174, 26018858 (skipped), 26034158 (skipped), 26015300. None is in data/kyoto.json by name (一寸法師/Issunboushi,
//   波波/Naminami, 葵月/Kizuki, 咲や/Sakuya) or address (清水4-148-6, 尾張町231, 晴明町659, 元北小路町176).
//   Same-name count (same brand or operator only): no second shop found for any of the four (Tabelog; web search for
//   一寸法師 and 波波). Service charges: none appears on any of the four Tabelog listings.
//   Greg's 2026-11-05 rulings applied: no foreign-booking restriction is stated by any of the four; 葵月's perfume and
//   under-13 rules are quoted in the shop’s own words.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-29');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// un-skipped by integrator 2026-11-05 (takeaway-only shops are listed, as eze bleu, Kame Hironaga, Marie France): skip('26018858', '京御菓子司 亀屋博永: a wagashi maker selling to take away (Tabelog lists take-out and no seats; reviews describe buying warabi mochi and sweets as souvenirs to take home) — not a restaurant');
// un-skipped by integrator 2026-11-05 (takeaway-only shops are listed, as eze bleu, Kame Hironaga, Marie France): skip('26034158', 'アングレディアン 京都: a take-out patisserie (Tabelog category Cake, service Take-out, no seat count; every review opened describes buying cakes, none eating in) — not a restaurant');

// ================================================================ Japanese Noodle 一寸法師
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037206/'; const R = TB + 'dtlrvwlst/';
  const SJ = 'https://savorjapan.com/0031530607/menus';
  const LONG = day(['08:00', '20:30']);
  put({
    id: 'kyoto_issunboushi_kiyomizu', name: 'Japanese Noodle 一寸法師 (Japanese Noodle Issunboushi)', category: 'OMNI',
    lat: 34.997628, lng: 135.777982, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every bowl is wheat noodles, the vegan ramen included; the shoyu broths use soy sauce (Savor Japan menu; 2025–2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a KYOTO VEGAN NOODLE (¥1,500) and a morning vegan ramen (¥800), described on the Savor Japan menu as made without animal or seafood stock, with white miso, rice malt and soy milk; a September 2026 diner had the soy-milk vegan ramen with tomato and olive oil. Tabelog lists vegan and vegetarian options. All other bowls use chicken, seafood or shellfish broths and meat toppings. In June 2025 a reviewer saw a vegan ramen remade after ground meat had been added to it by mistake — say clearly that you need the vegan bowl.',
    hours_raw: 'Mon, Thu–Sun and the day before a holiday 8:00–20:30 (food L.O. 20:00); Tue, holidays and the day after a holiday 8:00–18:30 (L.O. 18:00); Wed 8:00–18:00 (L.O. 18:00). Breakfast menu until 10:30, then the full menu until the day’s 100 bowls sell out — the shop closes when the noodles run out. Open year-round (Tabelog; the shop’s own note on the same page gives breakfast from 7:00 to 11:00, which disagrees). No reservations (Tabelog). Cards, e-money and QR codes accepted (Tabelog); orders by tablet at the seat in January 2026, by ticket machine in July 2025. 10 counter seats, L-shaped; office and restroom upstairs (Tabelog; August 2025). Non-smoking (Tabelog). English, Traditional and Simplified Chinese and Korean menus with photos; children welcome, kids’ menu, strollers OK (Tabelog). Waits of about 40 min on a Sunday afternoon (March 2026). A tips box sits by the ticket machine (June 2025). 2 min from Kiyomizu-michi bus stop, 5 min from Kiyomizu-dera’s Niomon Gate (Tabelog). Opened 26 February 2022 (Tabelog).',
    hours: { 0: LONG, 1: day(['08:00', '18:30']), 2: day(['08:00', '18:00']), 3: LONG, 4: LONG, 5: LONG, 6: LONG }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Below Kiyomizu-dera, off Kiyomizu-zaka near the Hokanji five-story pagoda — 2 min from Kiyomizu-michi bus stop',
    cuisine: 'Ramen, with a breakfast menu from 8:00 (Tabelog) · shoyu “Issunboushi ramen” ¥900 with seasoned egg ¥300 and rice ¥300, a light shellfish shoyu (March 2026) · ¥500 plain morning ramen on a shellfish broth (August 2026) · “Mochi Mochi Enmusubi” morning ramen with mochi and egg, with a takikomi-gohan set; the shoyu broth moved from clam to chicken and seafood (January 2026) · salt, shoyu and white-miso bowls, shrimp and seared scallop bowls ¥2,000, a snow-crab white-miso bowl ¥3,400, a tomato and grilled-cheese ramen ¥1,500, a Wagyu sirloin ramen ¥7,000 limited to ten a day, chashu rice bowls, a children’s ramen set ¥600 (Savor Japan menu, undated) · KYOTO VEGAN NOODLE ¥1,500 and a morning vegan ramen ¥800 (Savor Japan menu) · special meat ramen ¥1,300 with sweet beef, shirataki and tomato (June 2025)',
    website: null, gmaps: gm('Japanese Noodle 一寸法師 京都 清水'), menu_url: SJ,
    notes: '[Ramen · below Kiyomizu-dera, breakfast bowls from 8:00] A ten-seat counter on the walk down from Kiyomizu-dera, open from 8:00 with a morning menu (a ¥500 bowl, a vegan bowl, porridge) and then ramen until the day’s 100 bowls are gone. Light shellfish and chicken-seafood shoyu and salt broths, a vegan soy-milk ramen, and showpiece bowls up to a ¥7,000 Wagyu sirloin. Most diners are overseas visitors; multilingual menus. Reviews split: fans of the clean broth, critics of the prices (one 2025 reviewer called the ¥7,000 bowl an overcharge aimed at foreigners), slow turnover and a drop in quality noted in October 2026.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Manager (unnamed)'], origin: null,
      background: 'A June 2025 reviewer saw “the male owner” training a new staff member at the counter. A March 2025 reviewer described the team as two Brazilian staff who “seem to be working hard but are not adequately trained” and “one unfriendly Japanese chef”; a January 2026 reviewer wrote that “most of the staff are also from abroad”. An August 2025 family wished more staff besides the manager spoke English.',
      philosophy: null, specialty: 'Light shellfish and chicken-seafood shoyu ramen; morning ramen; a vegan soy-milk ramen.',
      anecdotes: [
        { text: 'A January 2026 regular, on a twelfth visit, came for the morning ramen and noted the broth had changed from clam to chicken and seafood.', source: R + 'B446699787/' },
        { text: 'A June 2025 visitor found a tips box by the ticket machine and glasses of foreign banknotes on the tables, and arrived to find only the morning menu served until 10:30.', source: R + 'B509025273/' },
        { text: 'An October 2026 repeat visitor found the quality much lower than six months earlier and the prices sharply higher.', source: R + 'B529530246/' },
      ],
      japanese_sources_summary: '食べログ: Japanese Noodle 一寸法師、ラーメン・中華料理・餃子、東山区清水4-148-6、清水道バス停から徒歩2分、清水寺仁王門から徒歩5分。月・木〜日・祝前日 8:00〜20:30、火・祝日・祝後日 8:00〜18:30、水 8:00〜18:00、朝食は10:30まで、その後は100食で売り切れ次第終了、年中無休、予約不可、カード・電子マネー・QR決済可、カウンター10席、禁煙、英語・繁体字・簡体字・韓国語メニュー、ヴィーガン・ベジタリアン対応、子ども可、2022年2月26日オープン。口コミ (2025〜2026年、英語): あっさりした貝の醤油ラーメン、朝の500円ラーメン、豆乳のヴィーガンラーメン、チップ箱、値段が高いとの声、2026年10月には味が落ちたとの声、2025年6月にはヴィーガンラーメンにひき肉を入れて作り直す場面。',
      confidence: 'medium', sources: [TB, SJ, R + 'B446699787/', R + 'B503948734/', R + 'B509025273/', R + 'B509523513/', R + 'B511880583/', R + 'B524761218/', R + 'B526957674/', R + 'B529530246/', R + 'B533813034/', R + 'B536704807/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos and tablet ordering (Tabelog; January 2026); the manager speaks English, other staff less so (August 2025). Mostly overseas visitors.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'A June 2025 reviewer watched a vegan ramen being remade after ground meat had been added to it; the vegan bowls are cooked at the same counter as the meat and seafood bowls.', source: R + 'B509025273/', verified: TODAY }],
      staff_allergy_handling: [],
      positives: [{ text: 'Dedicated vegan ramen (KYOTO VEGAN NOODLE, morning vegan ramen) made without animal or seafood stock, per the Savor Japan menu.', source: SJ, verified: TODAY }],
      confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水4-148-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.997628, 135.777982); cross-checked: GSI 京都府京都市東山区清水四丁目148番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SJ, R + 'B524761218/', R + 'B533813034/'],
    price_note: 'Savor Japan menu (undated) and 2025–2026 reviews; the March 2026 review prices the egg at ¥300 against ¥200 on Savor Japan, so expect higher prices.', last_checked: TODAY, items: [
      it('', '', 'Issunboushi ramen (shoyu)', '¥900', 'Ramen', 'no', 'no', 'March 2026.', 'shoyu_ramen'),
      it('', '', 'Salt ramen', '¥900', 'Ramen', 'no', 'no', 'Savor Japan.', 'shio_ramen'),
      it('', '', 'Morning ramen (8:00–10:30)', '¥500', 'Breakfast', 'no', 'no', 'August 2026; shellfish broth.', 'morning_ramen'),
      it('', '', 'Morning vegan ramen', '¥800', 'Breakfast', 'no', 'vegan', 'Savor Japan; wheat noodles.', 'vegan_ramen_morning'),
      it('', '', 'KYOTO VEGAN NOODLE', '¥1,500', 'Ramen', 'no', 'vegan', 'Savor Japan; white miso, rice malt, soy milk; wheat noodles.', 'vegan_ramen'),
      it('', '', 'Shrimp and seared scallop ramen', '¥2,000', 'Ramen', 'no', 'no', 'Savor Japan.', 'scallop_ramen'),
      it('', '', 'Snow-crab white-miso ramen', '¥3,400', 'Ramen', 'no', 'no', 'Savor Japan.', 'crab_miso_ramen'),
      it('', '', 'Wagyu sirloin ramen (10 a day)', '¥7,000', 'Ramen', 'no', 'no', 'Savor Japan.', 'wagyu_ramen'),
      it('', '', 'Seasoned egg', '¥300', 'Toppings', 'ask', 'no', 'March 2026; seasoning not described.', 'ajitama'),
      it('', '', 'Children’s ramen set (6 and under)', '¥600', 'Kids', 'no', 'no', 'Savor Japan.', 'kids_ramen'),
    ] }, {
    cuisine: 'ラーメン。朝8時から朝食メニュー (食べログ)・醤油の「Issunboushi ramen」900円、味玉300円、ライス300円、あっさりした貝の醤油 (2026年3月)・貝の出汁の朝の500円ラーメン (2026年8月)・餅と玉子の朝ラーメン「Mochi Mochi Enmusubi」と炊き込みご飯のセット。醤油のスープは貝から鶏と魚介に (2026年1月)・塩、醤油、白味噌のラーメン、海老と炙り帆立 2,000円、ずわい蟹の白味噌 3,400円、トマトと焼きチーズのラーメン 1,500円、1日10杯の和牛サーロインのラーメン 7,000円、チャーシュー丼、子どものラーメンセット 600円 (Savor Japan のメニュー、日付なし)・KYOTO VEGAN NOODLE 1,500円、朝のヴィーガンラーメン 800円 (Savor Japan)・甘い牛肉、しらたき、トマトの特製肉ラーメン 1,300円 (2025年6月)',
    neighborhood: '清水寺の下、清水坂の近く。清水道バス停から徒歩2分',
    gf_detail: 'グルテンフリーではない。ヴィーガンのものも含めて麺はすべて小麦。醤油のスープは醤油を使う (Savor Japan のメニュー、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンの選択肢あり。KYOTO VEGAN NOODLE (1,500円) と朝のヴィーガンラーメン (800円) は、Savor Japan のメニューでは動物や魚介の出汁を使わず白味噌、米麹、豆乳で作るとされる。2026年9月の口コミでは豆乳のヴィーガンラーメンにトマトとオリーブオイル。食べログにもヴィーガン・ベジタリアン対応とある。ほかは鶏、魚介、貝のスープと肉のトッピング。2025年6月の口コミでは、ひき肉を誤って入れたヴィーガンラーメンを作り直す場面があった。ヴィーガンであることをはっきり伝えること。',
    notes: '[ラーメン・清水寺の下、朝8時から] 清水寺からの下り道にあるカウンター10席。朝8時から朝食メニュー (500円のラーメン、ヴィーガン、お粥) があり、その後は1日100杯がなくなるまで。あっさりした貝や鶏と魚介の醤油と塩、豆乳のヴィーガンラーメン、7,000円の和牛サーロインまで。客の多くは海外からの観光客で、多言語メニューあり。口コミは賛否が分かれる。澄んだスープを好む声の一方、値段 (2025年には7,000円の一杯を外国人向けの高値と書く口コミも)、回転の遅さ、2026年10月の味の低下を挙げる声も。',
  });
}

// ================================================================ さかな 波波
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000180/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_sakana_naminami', name: 'さかな 波波 (Sakana Naminami)', category: 'OMNI',
    lat: 35.012758, lng: 135.765619, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Natural-fish courses and à la carte — sashimi with soy sauce, grilled and fried fish, tempura, agedashi tofu, seasoned rice; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish restaurant; dobin-mushi and dashi dishes (2024–2026 reviews).',
    hours_raw: '17:00–22:30, Tuesday–Sunday; closed Monday (Tabelog). Reservations accepted (Tabelog). Cards: VISA, Master, JCB, AMEX, Diners; no e-money or QR (Tabelog). 18 seats (Tabelog); a February 2025 reviewer saw only counter seating. Non-smoking (Tabelog). A reviewer (April 2024) calls it an adult space and asks families with children to stay away. On Fuyacho south of Nijo, 350 m from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 11 April 2003 (Tabelog); two reviewers (June 2024, February 2025) think it was recently renovated.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho south of Nijo, west of Kyoto City Hall — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Natural (wild-caught) fish, prepared in front of the counter (2017–2026 reviews) · a ¥15,000 course of ten dishes (November 2025) · the house’s top course: a hassun of ten small dishes, rock oysters, a five-kind sashimi platter, hamo sashimi with plum sauce, grilled and fried dishes, agedashi tofu (July 2026) · dobin-mushi, oysters, swordtip squid sashimi with ginger soy, tempura, seasoned rice (September 2026) · à la carte: assorted sashimi ¥8,800, dashimaki ¥1,500, with dishes over ¥5,000 and ¥10,000 (June 2024) · an okara appetizer (February 2025) · sake ¥1,500, beer ¥880, white wine (2024–2026)',
    website: null, gmaps: gm('さかな 波波 京都 麩屋町'), menu_url: null,
    notes: '[Fish · Fuyacho-Nijo, wild fish since 2003] A natural-fish restaurant on a quiet stretch of Fuyacho, open since 2003, where the fish is cut and cooked in front of the counter. Go for a course — ten dishes for ¥15,000, or the top course with a ten-item hassun, rock oysters, five kinds of sashimi and hamo sashimi in summer — or order à la carte, though a 2024 diner found that very expensive (¥8,800 for the sashimi platter). Reviewers like the friendly chef; one asks families with children to stay away.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'A July 2017 reviewer described “the friendly surf-loving chef” who “specializes in natural seafood dishes”; an August 2024 reviewer called the head chef “friendly and approachable”, and a November 2025 guest enjoyed the conversation at the counter.',
      philosophy: 'All-natural fish (April 2024 review).', specialty: 'Natural-fish courses; hamo sashimi in summer.',
      anecdotes: [
        { text: 'Three July 2026 reviewers on business dinners each rated the hamo sashimi the best ever eaten; the staff told one that it runs until about October, best in September.', source: R + 'B532388127/' },
        { text: 'A June 2024 diner found the prices well above those in older photos: sashimi platter ¥8,800, dashimaki ¥1,500.', source: R + 'B487375468/' },
      ],
      japanese_sources_summary: '食べログ: さかな 波波、魚介料理、中京区麩屋町二条下ル尾張町231、京都市役所前駅から347m、火〜日 17:00〜22:30、月曜定休、予約可、カード可 (VISA、Master、JCB、AMEX、Diners)、電子マネー・QR決済不可、18席、禁煙、2003年4月11日オープン。口コミ (2017〜2026年、英語): 天然の魚、サーフィン好きの気さくな料理人、10品15,000円のコース、10品の八寸、岩牡蠣、刺身5種、鱧の造りと梅のたれ、土瓶蒸し、天ぷら、炊き込みご飯、2024年6月には刺身盛合せ8,800円、だし巻き1,500円で高いとの声、子連れは遠慮してほしいとの声。',
      confidence: 'medium', sources: [TB, R + 'B60447293/', R + 'B483890024/', R + 'B487375468/', R + 'B490210113/', R + 'B501662090/', R + 'B517450391/', R + 'B531855462/', R + 'B532388127/', R + 'B532664044/', R + 'B536258640/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu listed; counter dining with a chef reviewers find friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町二条下ル尾張町231',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012758, 135.765619); cross-checked: GSI 京都府京都市中京区尾張町231番地 (lot) 27m; 37m from kyoto_oryori_maeshiro (尾張町234), no offset needed; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487375468/', R + 'B517450391/'],
    price_note: 'No menu read; prices from June 2024 and November 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course (ten dishes)', '¥15,000', 'Courses', 'ask', 'no', 'November 2025.', 'course'),
      it('', '', 'Assorted sashimi', '¥8,800', 'À la carte', 'ask', 'no', 'June 2024.', 'sashimi_moriawase'),
      it('', '', 'Dashimaki', '¥1,500', 'À la carte', 'ask', 'no', 'June 2024.', 'dashimaki'),
      it('', '', 'Hamo sashimi (summer, to about October)', '', 'Seasonal', 'ask', 'no', 'July 2026; plum sauce.', 'hamo_sashimi'),
    ] }, {
    cuisine: '天然の魚を、カウンターの前でさばいて料理 (2017〜2026年の口コミ)・10品15,000円のコース (2025年11月)・店の一番上のコース: 10品の八寸、岩牡蠣、刺身5種の盛合せ、鱧の造りと梅のたれ、焼き物と揚げ物、揚げ出し豆腐 (2026年7月)・土瓶蒸し、牡蠣、剣先いかの刺身を生姜醤油で、天ぷら、炊き込みご飯 (2026年9月)・一品: 刺身盛合せ8,800円、だし巻き1,500円、5,000円や10,000円を超える品も (2024年6月)・おからのお通し (2025年2月)・日本酒1,500円、ビール880円、白ワイン (2024〜2026年)',
    neighborhood: '京都市役所の西、二条の南の麩屋町。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。天然の魚のコースと一品。醤油で食べる刺身、焼き魚、揚げ物、天ぷら、揚げ出し豆腐、炊き込みご飯。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚の店。土瓶蒸しや出汁の料理 (2024〜2026年の口コミ)。',
    notes: '[魚・麩屋町二条、2003年から天然魚] 麩屋町の静かな通りで2003年から続く天然魚の店。魚はカウンターの前でさばいて料理する。コース (10品15,000円、または10品の八寸、岩牡蠣、刺身5種、夏の鱧の造りが並ぶ一番上のコース) か一品で。ただし2024年の口コミでは一品は刺身盛合せ8,800円と高いとの声。気さくな料理人を好む声が多い。子連れは遠慮してほしいという口コミも。',
  });
}

// ================================================================ 二條 葵月
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024174/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_nijo_kizuki', name: '二條 葵月 (Nijo Kizuki)', category: 'MOM_AND_POP',
    lat: 35.013591, lng: 135.764472, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi courses with small dishes; nigiri often seasoned with salt, sauces such as seaweed soy and vinegar miso, Saikyo-miso grilled fish, miso soup; no gluten information (Tabelog shop text; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses only, of fish and sushi, with fish-bone miso soup (2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30 (last seating 13:30), dinner 17:00–22:00 (last seating 21:00), Monday–Saturday; closed Sunday (Tabelog). Reservation only; same-day bookings have worked (May and June 2026). The shop’s rules (Tabelog): “We do not allow visitors wearing perfume or other items with strong smells. In this case, a cancellation fee will also be charged.” Arriving more than 15 minutes late counts as a cancellation. “In order for you to enjoy your meal in a relaxed manner, we do not allow children under the age of 13 to enter our restaurant.” Cards: VISA, Master, AMEX; no e-money or QR (Tabelog). 10 seats: 6 at the counter, 4 at a table (Tabelog); a January 2026 regular counted eight at the counter. Private hire up to 20 (Tabelog). Non-smoking, ashtray outside; wheelchair users can sit at a table (Tabelog). On Nijo-dori east of Yanagibaba, 7 min from Kyoto Shiyakusho-mae and Karasuma Oike Stns (Tabelog). Opened 26 July 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori east of Yanagibaba — 7 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Sushi with Japanese small dishes, courses only (Tabelog; June 2026) · the owner buys at the market and seasons much of it with salt; signature uni ice with sesame tofu, scented with Saikyo miso (Tabelog shop text) · sushi lunch course ¥3,300: inari sushi, fruit with tofu dressing, vinegar-miso dish, sashimi with seaweed soy and mustard, grilled wild hamachi, ten nigiri, miso soup and soba tea (October 2026) · ¥8,800 course: appetizers, corn soup, flounder with lemon and charcoal salt, Saikyo-miso mackerel, ten nigiri, miso soup, dessert (May 2026) · ¥19,800 and longer courses ending in twelve nigiri, abalone with sea urchin, braised shark fin (March and December 2025) · New Year osechi dishes and white-miso zoni (January 2026) · shari of rice vinegar and red vinegar, small and lightly sweet (December 2025; August 2026) · sake tasting sets, many from Omachi rice and the owner’s home prefecture, Yamaguchi (Tabelog; 2026 reviews)',
    website: 'http://nijyou-kizuki.com', gmaps: gm('二條 葵月 京都'), menu_url: null,
    notes: '[Sushi · Nijo-dori, a one-man counter, no perfume] A glass-fronted, café-like room on Nijo-dori, easy to walk past but for the lantern, where the owner works the counter alone: seasonal small dishes, then ten or twelve slim nigiri on small red-vinegar shari, with sake tasting sets. Lunch from ¥3,300, dinner courses from ¥8,800. Reservation only; no perfume or strong scents (a cancellation fee applies) and no children under 13. Some find the service reserved.',
    chef_bio: { chef_name: 'Morimoto', roles: ['Owner-chef, working alone'], origin: 'Yamaguchi (Tabelog shop text: “sake from the owner’s hometown, Yamaguchi”)',
      background: 'A January 2026 regular names the master as Mr. Morimoto and writes that the family runs a ryotei. Reviewers describe a one-man counter: “Although it was a one-person operation, the speed of food and drink service was good” (June 2026); the owner was alone on an early May 2026 evening and talked at length with the only guest. A February 2026 reviewer, echoing others, found the service “a bit cold … more welcoming to regular customers”; an August 2026 lunch guest noted little conversation but smooth service.',
      philosophy: 'Ingredients chosen by the owner at the market, carefully prepared and often seasoned with salt (Tabelog shop text).', specialty: 'Sushi courses with creative small dishes; uni ice with sesame tofu; sake tastings.',
      anecdotes: [
        { text: 'On an early May 2026 evening with no other guests, the owner shared stories with the one diner, and the sake cups had each sake’s name written underneath; the owner seemed especially fond of Omachi-rice sake.', source: R + 'B529139464/' },
        { text: 'A January 2026 regular booked the same day and time as the year before for the New Year dishes and white-miso zoni.', source: R + 'B237626232/' },
      ],
      japanese_sources_summary: '食べログ: 二條 葵月、寿司・創作料理・日本料理、中京区二条通柳馬場東入ル晴明町659 ヴァインオークFINE 1F、京都市役所前駅・烏丸御池駅から徒歩7分、月〜土 昼12:00〜14:30 (最終入店13:30)、夜17:00〜22:00 (最終入店21:00)、日曜定休、完全予約制、香水など強い香りの方は入店不可 (キャンセル料あり)、15分以上の遅れはキャンセル扱い、13歳未満は入店不可、カード可 (VISA、Master、AMEX)、10席 (カウンター6、テーブル4)、貸切20名まで、禁煙、2014年7月26日オープン。店の紹介: 店主が市場で選ぶ魚を塩で仕上げることが多い、ウニのアイスと胡麻豆腐、店主の故郷 Yamaguchi の日本酒。口コミ (2025〜2026年、英語): 店主 Morimoto、実家は料亭、ひとりで営む、昼のコース3,300円、夜8,800円、米酢と赤酢のシャリ、日本酒の飲み比べ、接客はやや冷たいとの声。',
      confidence: 'medium', sources: [TB, R + 'B237626232/', R + 'B486185337/', R + 'B521770615/', R + 'B529139464/', R + 'B529683131/', R + 'B530931346/', R + 'B532959201/', R + 'B533717901/', R + 'B536702876/', R + 'B537613472/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No foreign-booking restriction stated; reviewers note many international guests (October 2026). Strict house rules: no perfume or strong scents (cancellation fee), no children under 13, 15 minutes late counts as a cancellation (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区二条通柳馬場東入ル晴明町659 ヴァインオークFINE 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013591, 135.764472); cross-checked: GSI 京都府京都市中京区晴明町659番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536702876/', R + 'B529139464/', R + 'B486185337/'],
    price_note: 'No menu read; course prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sushi lunch course (ten nigiri)', '¥3,300', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_course'),
      it('', '', 'Sushi course (ten nigiri)', '¥8,800', 'Courses', 'ask', 'no', 'May and July 2026.', 'course_8800'),
      it('', '', 'Full course (twelve nigiri)', '¥19,800', 'Courses', 'ask', 'no', 'March 2025.', 'course_19800'),
      it('', '', 'Sake tasting set', '', 'Drinks', '', '', '2026 reviews; price not given.', 'sake_flight'),
    ] }, {
    cuisine: '寿司と和の小品、コースのみ (食べログ、2026年6月)・店主が市場で選び、塩で仕上げることが多い。看板はウニのアイスと胡麻豆腐、西京味噌の香り (食べログの店の紹介)・昼の寿司コース3,300円: いなり寿司、果物の白和え、酢味噌の一品、海苔醤油と辛子の刺身、天然はまちの焼き物、握り10貫、味噌汁とそば茶 (2026年10月)・8,800円のコース: 先付、とうもろこしのスープ、ひらめのレモンと炭の塩、鯖の西京焼き、握り10貫、味噌汁、甘味 (2026年5月)・19,800円などのコース: 握り12貫、鮑のウニのせ、ふかひれの煮込み (2025年3月、12月)・正月のおせちと白味噌の雑煮 (2026年1月)・米酢と赤酢の小さめでほんのり甘いシャリ (2025年12月、2026年8月)・日本酒の飲み比べ、Omachi 米の酒や店主の故郷 Yamaguchi の酒 (食べログ、2026年の口コミ)',
    neighborhood: '柳馬場の東の二条通。京都市役所前駅から徒歩7分',
    gf_detail: '要確認。和の小品と寿司のコース。握りは塩で仕上げることが多く、海苔醤油や酢味噌、西京焼き、味噌汁も。グルテンの情報はない (食べログの店の紹介、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚と寿司のコースのみ。味噌汁は魚のあらの出汁 (2025〜2026年の口コミ)。',
    notes: '[寿司・二条通、店主ひとりのカウンター、香水不可] 提灯がなければ通り過ぎてしまいそうな、ガラス張りのカフェのような店。店主がひとりでカウンターに立ち、季節の小品のあと、小さめの赤酢のシャリの細身の握りを10〜12貫、日本酒の飲み比べと。昼は3,300円から、夜は8,800円から。完全予約制。香水など強い香りは不可 (キャンセル料あり)、13歳未満は入店不可。接客は控えめとの声も。',
  });
}

// ================================================================ 旬菜 咲や
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26015300/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_shunsai_sakuya', name: '旬菜 咲や (Shunsai Sakuya)', category: 'OMNI',
    lat: 35.030046, lng: 135.747221, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal small dishes, sashimi, charcoal-grilled fish, tempura and fried dishes, ankake, nigiri with clam dashi, nyumen; no gluten information (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based seasonal cooking of fish and shellfish (2022–2026 reviews).',
    hours_raw: '18:00–22:00, Tuesday–Sunday; closed Monday (Tabelog). Reservations accepted; booked out on a November 2022 evening, when à la carte guests were still fitted in (Tabelog; November 2022). No credit cards; e-money accepted; no QR (Tabelog). 19 seats: 11 at the counter and two tatami tables for 8 (Tabelog). Half portions available, useful for solo diners (April 2025). 5 min from Imadegawa-Omiya and Imadegawa-Jofukuji bus stops (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishijin, near Imadegawa-Omiya — 5 min from Imadegawa-Omiya bus stop',
    cuisine: 'Seasonal Japanese cooking, omakase course or à la carte (2022–2026 reviews) · a ¥6,000 omakase of nine dishes on seasonal vegetables and fish; sea-bream dashi, young sweetfish, firefly squid, asari and aosa nyumen (April 2025) · obanzai small dishes at ¥500 (December 2023) · persimmon shira-ae with sour cream, atsuage with yuba ankake, charcoal-grilled mullet gizzard and Lake Biwa honmoroko, milt tempura, five-piece omakase nigiri with clam dashi (December 2023) · sakura-masu tartare, sashimi, sea urchin and botan-shrimp nigiri, firefly squid and tara-no-me tempura, braised veal tongue, Handa noodles with asari (May 2025) · water eggplant, sesame salad (May 2025) · about ten sakes, mostly from Kansai, including Saku (2023–2025)',
    website: null, gmaps: gm('旬菜 咲や 京都 上京区'), menu_url: null,
    notes: '[Seasonal Japanese · Nishijin, a couple’s counter] A cosy counter-and-tatami room near Imadegawa-Omiya, between izakaya and formal kappo, run by the chef and the chef’s wife. Take the ¥6,000 nine-dish omakase or order à la carte — generous ¥500 obanzai, charcoal-grilled river fish, seasonal tempura, nigiri — with about ten Kansai sakes. Half portions make it easy alone. No credit cards (e-money OK).',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) and the chef’s wife, who run it as a couple'], origin: null,
      background: 'Reviewers describe the chef cooking with the chef’s wife serving: the chef and the chef’s wife “were attentive and thoughtful” (December 2023); “the owner’s wife kindly took our coats and served us warm tea” (March 2024); “it seems that now the husband and wife are running the place together” (February 2026). In November 2022 a reviewer saw the chef alone in the kitchen with one service staff member.',
      philosophy: null, specialty: 'Seasonal omakase and à la carte; obanzai; charcoal-grilled fish.',
      anecdotes: [
        { text: 'On a fully booked November 2022 night, two à la carte guests felt the chef balanced the à la carte orders with the course guests’ without pushing the pair to the back of the line.', source: R + 'B457538087/' },
        { text: 'A December 2023 diner ordered one serving of nigiri and the companion was given an extra bowl of the clam dashi free.', source: R + 'B475730900/' },
      ],
      japanese_sources_summary: '食べログ: 旬菜 咲や、日本料理、上京区元北小路町176、今出川大宮・今出川浄福寺バス停から徒歩5分、火〜日 18:00〜22:00、月曜定休、予約可、カード不可、電子マネー可、19席 (カウンター11、座敷テーブル2卓8席)。口コミ (2022〜2026年、英語): 夫婦で営む、6,000円9品のおまかせ、500円のおばんざい、柿の白和えにサワークリーム、ぼらの砂肝やホンモロコの炭火焼き、白子の天ぷら、蛤の出汁と握り、あさりとあおさのにゅうめん、関西の日本酒10種ほど、半量の注文も可。',
      confidence: 'medium', sources: [TB, R + 'B448606161/', R + 'B457538087/', R + 'B475730900/', R + 'B477131348/', R + 'B482294738/', R + 'B504290469/', R + 'B504989055/', R + 'B506123209/', R + 'B506446671/', R + 'B523325948/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu listed; à la carte from the day’s list; a warm couple-run counter.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区元北小路町176',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.030046, 135.747221); cross-checked: GSI 京都府京都市上京区元北小路町176番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504989055/', R + 'B477131348/'],
    price_note: 'No menu read; prices from December 2023 and April 2025 reviews; a March 2024 reviewer notes a recent price rise.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (nine dishes)', '¥6,000', 'Courses', 'ask', 'no', 'April 2025.', 'omakase'),
      it('', '', 'Obanzai small dish', '¥500', 'À la carte', 'ask', 'ask', 'December 2023.', 'obanzai'),
      it('', '', 'Omakase nigiri (five pieces) with clam dashi', '', 'À la carte', 'ask', 'no', 'December 2023.', 'nigiri'),
    ] }, {
    cuisine: '季節の和食。おまかせのコースか一品 (2022〜2026年の口コミ)・季節の野菜と魚の9品6,000円のおまかせ。鯛の出汁、稚鮎、ほたるいか、あさりとあおさのにゅうめん (2025年4月)・500円のおばんざい (2023年12月)・柿の白和えにサワークリーム、厚揚げと湯葉のあんかけ、ぼらの砂肝と琵琶湖のホンモロコの炭火焼き、白子の天ぷら、蛤の出汁と握り5貫のおまかせ (2023年12月)・桜鱒のタルタル、刺身、ウニとぼたん海老の握り、ほたるいかとたらの芽の天ぷら、仔牛タンの煮込み、あさりの Handa の麺 (2025年5月)・水なす、胡麻のサラダ (2025年5月)・関西を中心に日本酒10種ほど、Saku も (2023〜2025年)',
    neighborhood: '西陣、今出川大宮の近く。今出川大宮バス停から徒歩5分',
    gf_detail: '要確認。季節の小鉢、刺身、焼き魚、天ぷらや揚げ物、あんかけ、蛤の出汁と握り、にゅうめん。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁と魚、貝の季節の料理 (2022〜2026年の口コミ)。',
    notes: '[和食・西陣、夫婦のカウンター] 今出川大宮近くの、居酒屋ほど気軽ではなく割烹ほど堅苦しくもない、カウンターと座敷の店。料理人と奥さんの夫婦で営む。9品6,000円のおまかせか、たっぷりの500円のおばんざい、川魚の炭火焼き、季節の天ぷら、握りなどを一品で、関西の日本酒10種ほどと。半量で頼めるのでひとりでも。クレジットカード不可 (電子マネー可)。',
  });
}

save();
