// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2, batch 99.
//   NOT a nearest-first batch: it resolves eight shops held for Greg's rulings of 2026-11-26 (hotel groups = any
//   multi-hotel group; on-site eating = venue; growth plans don't count). Shops fetched from Tabelog /en/ with 3 s
//   between requests (the two sweets shops re-fetched with 12 reviews each).
//   Skip: 京料理 濱登久 ハートンホテル京都店 (26002905) and パティオ (26003157) — Hearton Hotel's own venues: both
//     Tabelog listings carry the invoice number T6120001042445 = 関西観光開発株式会社 (NTA register), the company that
//     runs the Hearton Hotel chain (value-press release, 2014: 4 hotels in Osaka, 1 in Kyoto, 1 in Tokyo); hearton.co.jp
//     lists both under ハートンホテル京都 (1F, 2F).
//   Skip: 横浜天下鳥 四条新町店 (26016261) — 5+ same-brand shops: Tabelog /en/ listings for 大船店, 千葉中央店 and 草津駅前店
//     (open, no closure badge) and Hot Pepper's ミューザ川崎店, plus this shop (Greg 11-05 same-name rule).
//   + 京都ことこと 烏丸御池店 (26030313) — obanzai buffet at Tokyu Stay Kyoto Sanjo-Karasuma. Earlier skipped as a
//     chain-hotel venue (osw2-95); now drafted as a tenant brand: a 2020 DIME article lists a 京都 ことこと obanzai buffet
//     on the 11th floor of The CUBE at Kyoto Station, i.e. the brand runs outside the hotel. Flagged.
//   + 完全個室×京居酒屋 京甚兵衛 (26031679, invoice 株式会社レイズ, Nagoya) and 京を味わう個室空間 うぐいす 京都駅前店
//     (26028830) — private-room izakaya by Kyoto Station; no source gives either operator's shop count. Flagged.
//   + クリーム フェスト 京都駅前店 (Cream Fest; romaji from the shop's own domain cream-fest.com) — soft-serve shop with
//     about four eat-in seats (reviews); one of 4 Cream Fest shops (cream-fest.com/shops/) → small group, flagged.
//     Earlier skipped as retail (osw6-108); drafted under Greg's 11-26 on-site-eating ruling.
//   + 京都チーズケーキ博物館 (26044228) — cheesecake shop with an eat-in second floor (July, November 2026 reviews); earlier
//     skipped as retail (osw6-108). Kanji/kana only: Tabelog's "Hakubutsukan" is machine romaji.
//   None of the drafted shops is in data/kyoto.json (main, hidden records included): grep by Tabelog id, name, address.
//   Pins: Tabelog /en/ point for each shop; not pin-checked by the worker (integrator pin-checks).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-99');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002905', 'large parent: Hearton Hotel group (Greg 11-26: any multi-hotel group) — 京料理 濱登久 is on 2F of ハートンホテル京都 (Tabelog; hearton.co.jp lists it under the hotel); its Tabelog invoice number T6120001042445 is 関西観光開発株式会社 (NTA register), which runs the Hearton chain (value-press release 2014-06-25: 4 hotels in Osaka, 1 in Kyoto, 1 in Tokyo)');
skip('26003157', 'large parent: Hearton Hotel group (Greg 11-26: any multi-hotel group) — カフェ＆レストラン パティオ is on 1F of ハートンホテル京都 (Tabelog; hearton.co.jp); invoice T6120001042445 = 関西観光開発株式会社 (NTA register), operator of the Hearton chain (value-press release 2014-06-25)');
skip('26016261', 'chain: 5+ same-brand shops (Greg 11-05 same-name rule) — besides 四条新町店, Tabelog /en/ lists 横浜天下鳥 大船店 (14005465), 千葉中央店 (12001407) and 草津駅前店 (25000213), all without a closure badge, and Hot Pepper lists 横浜天下鳥 ミューザ川崎店 (strJ000016422); a 2022 reviewer calls it a restaurant from Kanto. This shop\'s invoice holder is 有限会社てんしん at the shop address (NTA register)');

// ================================================================ 京都ことこと 烏丸御池店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030313/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://r.gnavi.co.jp/k170066/'; const DIME = 'https://dime.jp/genre/879524/'; const CL = 'https://www.cocolocala.jp/hotels/17883';
  const H = day(['11:30', '15:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_kotokoto_karasuma_oike', name: '京都ことこと 烏丸御池店', category: 'OMNI',
    lat: 35.00925153706116, lng: 135.75886267924423, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The lunch sets come with an all-you-can-eat obanzai buffet of home-style Kyoto dishes, with mains such as simmered mackerel, agedashi tofu, tempura and croquettes (2026 reviews); soy sauce and batter are usual wheat sources, and no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the mains include grilled fish, simmered mackerel, meat tofu and Tanba beef (2026 reviews), and obanzai are usually seasoned with dashi. Tofu dishes such as yudofu and sesame tofu are on the buffet or the menu, but no vegan information is published.',
    hours_raw: 'Daily: lunch 11:30–15:00 (food L.O. 14:30), dinner 17:00–21:30 (food L.O. 21:00), holidays included (Tabelog; Gurunavi gives the same hours and no regular closing day). Breakfast is served to guests of Tokyu Stay Kyoto Sanjo-Karasuma who apply for a breakfast voucher (Tabelog); the hotel listing on cocolocala gives a paid breakfast buffet at this restaurant daily 06:30–09:30, about ¥2,750 (undated). Reservations taken (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR payments (Tabelog). 72 seats at tables and sofas; no private rooms; private hire possible (Tabelog); Gurunavi offers the second floor for 9 to 24 people. Non-smoking; no parking; wheelchair accessible (Tabelog). About 2 minutes from exit 6 of subway Karasuma Oike station, on Ryogaemachi-dori (Tabelog). Opened 27 November 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Oike',
    cuisine: 'Obanzai (Kyoto home-style dishes) with a buffet (Tabelog; reviews) · lunch: a set main with all-you-can-eat obanzai and rice — grilled redfish with yuzu marinade and dashimaki with Kujo green onions (July 2026), yuba rice bowl with a thick sauce and risotto croquettes, yudofu on the buffet (August 2026), yuba and sesame tofu mains, ¥2,200 (September 2026), simmered mackerel and agedashi tofu (October 2026), meat tofu and tempura set (November 2026) · dinner: a set of obanzai, sashimi, kakiage, shrimp and yuba tempura, Tanba beef teppanyaki, chicken and egg zosui and cake (July 2026); the ¥4,500 course with sashimi, meat and tempura (September 2026)',
    website: null, gmaps: gm('京都ことこと 烏丸御池店'), menu_url: null,
    notes: '[Obanzai · Karasuma Oike, buffet lunch in a townhouse-style room] A large obanzai restaurant on Ryogaemachi-dori, in the building of Tokyu Stay Kyoto Sanjo-Karasuma: at lunch every set main (grilled fish, simmered mackerel, yuba bowls, tempura) comes with an all-you-can-eat buffet of Kyoto home-style side dishes and rice; dinner is set courses. High ceiling, sofa seats; busy on festival and holiday days.',
    chef_bio: { chef_name: null, roles: ['Restaurant (no chef named)'], origin: null,
      background: 'Tabelog lists the restaurant as a hotel restaurant whose breakfast is served to Tokyu Stay Kyoto Sanjo-Karasuma guests with a voucher; Gurunavi says it is next to a lodging facility and describes a calm townhouse-style space with a focus on local produce. A July 2026 diner thought it seemed to be run by the hotel in the same complex and found the high-ceilinged townhouse-style room had a chain-restaurant feel; an October 2026 diner found it in a magazine at the hotel where the reviewer was staying. A June 2020 DIME article lists a 京都 ことこと obanzai buffet on the 11th floor of The CUBE in the Kyoto Station building, all-you-can-eat until 16:00, with the same focus on local produce. Criticism: a July 2026 diner found the obanzai selection smaller than hoped; in September 2026, on a Silver Week holiday crowded with overseas and Japanese visitors, a diner found the buffet more than half empty for lack of staff and ¥2,200 too much; a November 2026 diner found few kinds of obanzai, quickly gone.',
      philosophy: 'Local produce for local tables (地産地消), in a calm townhouse-style space (Gurunavi).',
      specialty: 'All-you-can-eat obanzai buffet with the lunch sets.',
      anecdotes: [
        { text: 'A July 2026 diner booked a table for one, came in right at 11:30 after watching the Yamaboko float procession on a 38-degree day, and found a beer with the buffet lunch just right.', source: R + 'B532668611/' },
        { text: 'A July 2026 diner, turned away from packed restaurants on a festival Sunday evening after watching the floats being set up, found a table here by chance.', source: R + 'B532405680/' },
        { text: 'A July 2026 diner found the dinner set of sashimi, large kakiage, tempura, Tanba beef and zosui more than enough even for seniors to finish.', source: R + 'B531880758/' },
      ],
      japanese_sources_summary: '食べログ (英語版): 京都ことこと 烏丸御池店、郷土料理・ビュッフェ・鍋、予約可、毎日11:30〜15:00 (L.O.14:30)、17:00〜21:30 (L.O.21:00)、カード・電子マネー・QR決済可、72席 (テーブル、ソファ)、個室なし、貸切可、全席禁煙、駐車場なし、車椅子可、朝食あり、ホテルのレストラン、東急ステイ京都三条烏丸の宿泊客は朝食券で朝食、地下鉄烏丸御池駅6番出口から徒歩2分、京都府京都市中京区両替町通姉小路下ル柿本町392、オープン日2017年11月27日。ぐるなび: 地産地消、町屋の落ち着いた空間、宿泊施設と隣接、ランチはおばんざい食べ放題のビュッフェ、2階は9名から24名の貸切。DIME (2020年6月): 京都駅ビル The CUBE 11階のおばんざいビュッフェ 京都 ことこと、16時まで食べ放題。口コミ (2026年、英語): 天井が高い町家風、チェーン店のよう、同じ建物のホテルが営んでいるらしい (2026年7月)。ビュッフェの料理が半分以上なくなっていた、2,200円は高い (2026年9月)。4,500円のコース (2026年9月)。おばんざいの種類が少ない (2026年7月、11月)。',
      confidence: 'low', sources: [TB, GN, DIME, CL, R + 'B531880758/', R + 'B532405680/', R + 'B532668611/', R + 'B533486892/', R + 'B535947106/', R + 'B536845227/', R + 'B537200587/', R + 'B539861654/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or English-speaking staff mentioned; a buffet makes choosing easy. A September 2026 diner found it crowded with overseas and Japanese visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町通姉小路下ル柿本町392',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (no closure badge) with reviews dated July–November 2026; Gurunavi listing; no shop website.' },
    pin_source: `Tabelog ${TB} (35.009252, 135.758863); no pin in data within 15 m; not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535947106/', R + 'B537200587/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: a main (yuba, sesame tofu) with the all-you-can-eat obanzai buffet and rice', '¥2,200', 'Lunch', 'ask', 'no', 'September 2026 review.', 'lunch_buffet_set'),
      it('', '', 'Dinner course: sashimi, meat, tempura', '¥4,500', 'Course', 'ask', 'no', 'September 2026 review.', 'course_4500'),
    ] }, {
    cuisine: 'ビュッフェのあるおばんざいの店 (食べログ、口コミ)・ランチ: メインにおばんざいとご飯の食べ放題付き、赤魚の柚子の焼き物と Kujo のねぎのだし巻き (2026年7月)、湯葉のあんかけ丼とリゾットのコロッケ、ビュッフェに湯豆腐 (2026年8月)、湯葉と胡麻豆腐のメイン2,200円 (2026年9月)、鯖の煮付けと揚げ出し豆腐 (2026年10月)、肉豆腐と天ぷらの定食 (2026年11月)・夜: おばんざい、刺身、かき揚げ、海老と湯葉の天ぷら、Tanba beef の鉄板焼き、鶏と卵の雑炊、ケーキのセット (2026年7月)、刺身、肉、天ぷらの4,500円のコース (2026年9月)',
    neighborhood: '柿本町',
    gf_detail: '要確認。ランチの定食にはおばんざいのビュッフェが付き、メインは鯖の煮付け、揚げ出し豆腐、天ぷら、コロッケなど (2026年の口コミ)。醤油や衣は小麦を含むことが多く、グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。メインに焼き魚、鯖の煮付け、肉豆腐、Tanba beef (2026年の口コミ)、おばんざいはふつうだしで味付けする。湯豆腐や胡麻豆腐もあるが、ヴィーガンの情報は公開されていない。',
    notes: '[おばんざい・柿本町、町家風の店でビュッフェのランチ] 両替町通、東急ステイ京都三条烏丸の建物にある大きなおばんざいの店。ランチは焼き魚、鯖の煮付け、湯葉の丼、天ぷらなどの定食に、京都の家庭のおかずとご飯の食べ放題のビュッフェが付く。夜はセットとコース。天井が高く、ソファ席もある。祭りや連休の日は混む。',
  });
}

// ================================================================ 完全個室×京居酒屋 京甚兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26031679/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://r.gnavi.co.jp/kday601/';
  const A = day(['17:00', '24:00']), F = day(['17:00', '01:00']), S = day(['16:00', '01:00']), U = day(['16:00', '24:00']);
  put({
    id: 'kyoto_private_room_izakaya_higashishiokoji_557', name: '完全個室×京居酒屋 京甚兵衛', category: 'OMNI',
    lat: 34.98743613707584, lng: 135.76145007902207, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses run from sashimi and duck to tempura-style dishes, crab cream croquettes, grilled nama-fu and duck-broth somen (2025–26 reviews); wheat is in several dishes and soy sauce is usual, and no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya of sashimi, duck shabu-shabu, grilled duck and seafood, with clams steamed in sake as the starter (2025–26 reviews). No vegan information is published.',
    hours_raw: 'Monday–Thursday 17:00–24:00; Friday and the day before a holiday 17:00–01:00; Saturday 16:00–01:00; Sunday and holidays 16:00–24:00; open year-round; hours may vary by day (Tabelog). Reservations taken; at busy times a 2-hour limit (Tabelog). Cover charge (otoshi) ¥418 tax included; from 26 December to 3 January a year-end surcharge of 10% (¥500 more on courses) (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), iD, QUICPay and PayPay (Tabelog). 110 seats, all in private rooms for 2 to over 30, up to 50 in one room; sunken and tatami seating (Tabelog); a June 2026 diner noted old tatami in the room, and a November 2026 group found the seating a little cramped. Smoking allowed per Tabelog (check with the restaurant). No parking (Tabelog). On the 4th floor of YU-AI kyoto station, a minute from JR Kyoto Station, north-east of the Shiokoji-Higashinotoin crossing (Tabelog); across Shiokoji-dori from the station, just before the Dormy Inn (June 2026 review). Opened 1 December 2018 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: F, 5: S, 6: U }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station',
    cuisine: 'Private-room izakaya of Kyoto dishes, seafood and shabu-shabu (Tabelog; Gurunavi: skewered shabu-shabu and Kyoto dishes with local sake) · agedashi tofu, pickles (October 2025) · a hot-pot course (November 2025) · grilled nama-fu (December 2025) · duck ham, Kamo eggplant with minced meat (February 2026) · clams steamed in sake as the starter, fresh fish (April 2026) · duck and yuba salad, dashimaki (June 2026) · the ¥5,500 course with all-you-can-drink: toro-taku with ikura, salmon and sea bream sashimi, duck Caesar salad, grilled duck breast, salt-grilled mackerel, crab cream croquette with demi-glace, duck-broth somen, matcha warabi mochi (June 2026) · duck shabu-shabu finished as rice porridge, matcha beer (September 2026) · dashimaki topped with ikura, skewers (October 2026)',
    website: null, gmaps: gm('京甚兵衛 京都駅 東塩小路町557-1'), menu_url: null,
    notes: '[Izakaya · Kyoto Station, all private rooms] A whole floor of private rooms a minute from Kyoto Station, from two-seat rooms to one for 50: Kyoto-style izakaya dishes, sashimi and duck — duck shabu-shabu, grilled duck, Kamo eggplant, grilled nama-fu — with all-you-can-drink courses from about ¥5,500. Built for groups; open until midnight or 01:00.',
    chef_bio: { chef_name: null, roles: ['Restaurant (no chef named)'], origin: null,
      background: 'The Tabelog listing gives the invoice holder as 株式会社レイズ, a company registered in Nagoya (NTA register); no source found gives the operator’s other restaurants. Reviewers describe a spacious floor of private rooms reached by elevator (November 2025), lively, with dishes served quickly and a wide menu suited to large groups (February 2026), prompt all-you-can-drink service (November 2026), and more seafood than expected for a Kyoto-cuisine izakaya (October 2026). Criticism: a November 2025 diner wanted more in the hot-pot course and noticed a smell in the restaurant; a February 2026 diner found the taste just okay and the duck ham a little salty but the Kamo eggplant the best dish; a June 2026 diner found the tatami old; a November 2026 group found the seating cramped.',
      philosophy: null,
      specialty: 'Duck dishes and shabu-shabu in private rooms.',
      anecdotes: [
        { text: 'A February 2026 diner, set on eating duck in Kyoto on the last day of a long weekend with no plans fixed, found this place in a hurry and spent about ¥3,000 a head on plenty of food and drink.', source: R + 'B523216006/' },
        { text: 'A September 2026 diner used the broth left from the duck shabu-shabu for a rice porridge with noodles at the end and called it the best flavour of the night.', source: R + 'B536097464/' },
        { text: 'A November 2026 diner hosted a networking dinner for ten with business partners and, with younger members in the group, got the boss’s permission to order a few extra dishes.', source: R + 'B538821219/' },
      ],
      japanese_sources_summary: '食べログ (英語版): 完全個室×京居酒屋 京甚兵衛、居酒屋・日本料理・しゃぶしゃぶ、予約可、混雑時は2時間制、月〜木17:00〜24:00、金・祝日の前日17:00〜翌1:00、土16:00〜翌1:00、日・祝日16:00〜24:00、年中無休、お通し418円 (税込)、12月26日から1月3日は年末料金+10% (コースは+500円)、カード・iD・QUICPay・PayPay可、110席、全席完全個室 (2名から50名)、喫煙可、駐車場なし、京都府京都市下京区東塩小路町557-1 YU-AI kyoto station 4F、JR京都駅から徒歩1分、オープン日2018年12月1日、インボイス登録 株式会社レイズ。ぐるなび: 串しゃぶしゃぶと京料理、京都の地酒。口コミ (2025〜2026年、英語): 生麩の焼き物、Kamo なす、鴨しゃぶ、鴨のロースト、5,500円の飲み放題付きコース (2026年6月)、いくらをのせただし巻き、畳が古い、席が少し窮屈。',
      confidence: 'low', sources: [TB, GN, R + 'B516338265/', R + 'B517862711/', R + 'B518667171/', R + 'B523216006/', R + 'B526026714/', R + 'B529356755/', R + 'B530256344/', R + 'B536097464/', R + 'B536855693/', R + 'B536861405/', R + 'B538821219/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or English-speaking staff mentioned; phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町557-1 YU-AI kyoto station 4F',
    existence: { status: 'probable', checked: TODAY, note: 'Official Tabelog listing (no closure badge) with reviews dated October 2025–November 2026; Gurunavi listing; no shop website.' },
    pin_source: `Tabelog ${TB} (34.987436, 135.761450); no pin in data within 15 m; not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B530256344/'],
    price_note: 'Course price from a June 2026 review; cover charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink: toro-taku with ikura, sashimi, duck Caesar salad, grilled duck, salt-grilled mackerel, crab cream croquette, duck-broth somen, matcha warabi mochi', '¥5,500', 'Course', 'no', 'no', 'June 2026 review.', 'course_5500'),
      it('お通し', '', 'Cover charge (otoshi)', '¥418', 'Other', 'ask', 'ask', 'Tabelog, tax included; +10% from 26 December to 3 January.', 'otoshi'),
    ] }, {
    cuisine: '京都の料理、魚介、しゃぶしゃぶの個室居酒屋 (食べログ、ぐるなび: 串しゃぶしゃぶと京料理、京都の地酒)・揚げ出し豆腐、漬物 (2025年10月)・鍋のコース (2025年11月)・生麩の焼き物 (2025年12月)・鴨ハム、Kamo なすのそぼろのせ (2026年2月)・お通しのあさりの酒蒸し、新鮮な魚 (2026年4月)・鴨と湯葉のサラダ、だし巻き (2026年6月)・飲み放題付き5,500円のコース: いくらのせトロたく、サーモンと鯛の刺身、鴨のシーザーサラダ、鴨ロースの焼き物、とろさばの塩焼き、蟹クリームコロッケのデミグラス、鴨だしのそうめん、抹茶わらび餅 (2026年6月)・鴨しゃぶ、締めは雑炊、抹茶ビール (2026年9月)・いくらをのせただし巻き、串もの (2026年10月)',
    neighborhood: '東塩小路町',
    gf_detail: '要確認。コースは刺身や鴨のほか、蟹クリームコロッケ、生麩の焼き物、鴨だしのそうめんなど (2025〜2026年の口コミ)。小麦を使う料理が多く、醤油もふつう使われ、グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。刺身、鴨しゃぶ、鴨の焼き物、魚介の居酒屋で、お通しはあさりの酒蒸し (2025〜2026年の口コミ)。ヴィーガンの情報は公開されていない。',
    notes: '[居酒屋・東塩小路町、全席個室] 京都駅から徒歩1分、ワンフロアがすべて個室の居酒屋で、2名の部屋から50名の部屋まで。京風の居酒屋料理、刺身、鴨しゃぶ、鴨の焼き物、Kamo なす、生麩の焼き物などと、約5,500円からの飲み放題付きのコース。大人数向け、夜12時か1時まで。',
  });
}

// ================================================================ 京を味わう個室空間 うぐいす 京都駅前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028830/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '24:00']), E = day(['16:00', '24:00']);
  put({
    id: 'kyoto_uguisu_kyoto_ekimae', name: '京を味わう個室空間 うぐいす 京都駅前店', category: 'OMNI',
    lat: 34.987429037075664, lng: 135.7608631790224, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The courses include tempura, meat sushi, steamed pork rolls and hot-pot noodles (2026 reviews); wheat is in several dishes and soy sauce is usual, and no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses are built on duck, pork-wrapped steamed vegetables, meat sushi, conger eel and clams (2026 reviews). Yuba sashimi and Manganji pepper tempura appear, but no vegan information is published.',
    hours_raw: 'Monday–Friday 17:00–24:00; Saturday, Sunday and holidays 16:00–24:00; open year-round (Tabelog). Reservations taken; at busy times a 2-hour limit (Tabelog); a May 2026 diner whose party member was late was told of the time limit, and the manager adjusted the booking. Cover charge (otoshi) ¥418 tax included; from 26 December to 3 January a year-end surcharge of 10% (¥500 more on courses) (Tabelog). Cards (VISA, Master), iD, QUICPay and PayPay (Tabelog). 40 seats, parties up to 24; private rooms for 2 to 30, sunken and tatami seating (Tabelog). Orders by QR code (April 2026 review). Smoking allowed per Tabelog (check with the restaurant). No parking (Tabelog). ONビル 1F, a minute from exit A5 of Kyoto Station (Tabelog); near the APA Hotel (February 2026 review); across Shiokoji-dori from the station, east of Kyoto Tower (June 2026 review). Opened 1 May 2017 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station',
    cuisine: 'Private-room izakaya of Kyoto-style dishes (Tabelog; reviews) · the signature steamed pork-wrapped vegetables in a bamboo steamer (February, May, July, October 2026) · yuba sashimi, seasonal vegetable tempura, duck (January 2026) · meat sushi of five kinds, tempura (February 2026) · the Kyoto Obanzai course with all-you-can-drink ¥5,500, yuba salad (February 2026) · obanzai, grilled squid fins (February 2026) · five kinds of steamed dishes, grilled edamame, Manganji pepper tempura, clams steamed in sake (April 2026) · dashimaki, seared duck, Kyoto sake tasting (May 2026) · the ¥4,500 course with all-you-can-drink, tax included: edamame, Caesar salad, duck breast, steamed pork-wrapped vegetables, hot-pot noodles, conger eel tempura, matcha warabi mochi (June 2026) · meat sushi with ikura and egg yolk (October 2026)',
    website: null, gmaps: gm('京を味わう個室空間 うぐいす 京都駅前店'), menu_url: null,
    notes: '[Izakaya · Kyoto Station, private rooms and steamed dishes] A private-room izakaya a minute from Kyoto Station, known for bamboo-steamer dishes of pork-wrapped vegetables, with yuba sashimi, tempura, duck and meat sushi; all-you-can-drink courses about ¥4,500–5,500. Rooms for 2 to 30; 2-hour limit when busy.',
    chef_bio: { chef_name: null, roles: ['Restaurant (no chef named)'], origin: null,
      background: 'No source found names the operator. Reviewers praise the staff and atmosphere (February 2026), polite service and food served quickly (May 2026), and a manager who adjusted a booking for a late party member (May 2026); a February 2026 group of about 15 was offered space for an after-party after a 20-minute wait. Criticism: a February 2026 diner found the food somewhat lacking for the good price and location; an April 2026 diner found the service rushed under the 2-hour limit; a June 2026 diner found the course portions small and missed a rice dish; a May 2026 diner found the place a little hard to find.',
      philosophy: null,
      specialty: 'Bamboo-steamed pork-wrapped vegetables; yuba sashimi.',
      anecdotes: [
        { text: 'An April 2026 diner on a diet ordered five steamed dishes, yuba, grilled edamame, Manganji pepper tempura and clams steamed in sake, and found that eating out need not mean giving up the diet.', source: R + 'B532695466/' },
        { text: 'A February 2026 group looking for an after-party venue for about 15 people was told the restaurant could fit the group and waited about 20 minutes to go in.', source: R + 'B522923173/' },
      ],
      japanese_sources_summary: '食べログ (英語版): 京を味わう個室空間 うぐいす 京都駅前店、居酒屋・日本料理・創作料理、予約可、混雑時は2時間制、月〜金17:00〜24:00、土・日・祝日16:00〜24:00、年中無休、お通し418円 (税込)、12月26日から1月3日は年末料金+10% (コースは+500円)、カード (VISA、Master)・iD・QUICPay・PayPay可、40席、個室 (2名から30名)、喫煙可、駐車場なし、京都府京都市下京区東塩小路町544-2 ONビル 1F、京都駅A5出口から徒歩1分、オープン日2017年5月1日。口コミ (2026年、英語): 豚肉で巻いた野菜のせいろ蒸し、湯葉の刺身、天ぷら、鴨、肉寿司、飲み放題付き5,500円の京のおばんざいのコース (2026年2月)、QRコードで注文 (2026年4月)、飲み放題付き税込4,500円のコース、ご飯ものがない (2026年6月)。',
      confidence: 'low', sources: [TB, R + 'B521103987/', R + 'B522105685/', R + 'B522280306/', R + 'B522923173/', R + 'B526662996/', R + 'B528395322/', R + 'B528817937/', R + 'B529262581/', R + 'B532308319/', R + 'B532695466/', R + 'B536862084/', R + 'B536866080/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or English-speaking staff mentioned; orders by QR code (April 2026); phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町544-2 ONビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (no closure badge) with reviews dated January–October 2026; Gurunavi listing; no shop website.' },
    pin_source: `Tabelog ${TB} (34.987429, 135.760863); no pin in data within 15 m; not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B522280306/', R + 'B529262581/'],
    price_note: 'Course prices from February and June 2026 reviews; cover charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink: edamame, Caesar salad, duck breast, steamed pork-wrapped vegetables, hot-pot noodles, conger eel tempura, matcha warabi mochi', '¥4,500', 'Course', 'no', 'no', 'June 2026 review, tax included.', 'course_4500'),
      it('', '', 'Kyoto Obanzai course with all-you-can-drink', '¥5,500', 'Course', 'ask', 'no', 'February 2026 review.', 'obanzai_course'),
      it('お通し', '', 'Cover charge (otoshi)', '¥418', 'Other', 'ask', 'ask', 'Tabelog, tax included; +10% from 26 December to 3 January.', 'otoshi'),
    ] }, {
    cuisine: '京風の料理の個室居酒屋 (食べログ、口コミ)・名物の豚肉で巻いた野菜のせいろ蒸し (2026年2月、5月、7月、10月)・湯葉の刺身、季節の野菜の天ぷら、鴨 (2026年1月)・肉寿司5種、天ぷら (2026年2月)・飲み放題付きの京のおばんざいのコース5,500円、湯葉のサラダ (2026年2月)・おばんざい、イカのエンペラ焼き (2026年2月)・蒸し料理5種、焼き枝豆、Manganji とうがらしの天ぷら、あさりの酒蒸し (2026年4月)・だし巻き、鴨のたたき、京都の地酒の飲み比べ (2026年5月)・飲み放題付き税込4,500円のコース: 枝豆、シーザーサラダ、鴨ロース、豚巻き野菜の蒸し物、鍋の麺、conger eel の天ぷら、抹茶わらび餅 (2026年6月)・いくらと卵黄をのせた肉寿司 (2026年10月)',
    neighborhood: '東塩小路町',
    gf_detail: '要確認。コースには天ぷら、肉寿司、豚巻きの蒸し物、鍋の麺などが入る (2026年の口コミ)。小麦を使う料理が多く、醤油もふつう使われ、グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。コースは鴨、豚巻き野菜の蒸し物、肉寿司、conger eel、あさりが中心 (2026年の口コミ)。湯葉の刺身やManganji とうがらしの天ぷらもあるが、ヴィーガンの情報は公開されていない。',
    notes: '[居酒屋・東塩小路町、個室と蒸し料理] 京都駅から徒歩1分の個室居酒屋。名物は豚肉で巻いた野菜のせいろ蒸しで、湯葉の刺身、天ぷら、鴨、肉寿司も。飲み放題付きのコースは約4,500〜5,500円。個室は2名から30名、混雑時は2時間制。',
  });
}

// ================================================================ クリーム フェスト 京都駅前店 (Cream Fest)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26037730/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://cream-fest.com/'; const SHOPS = SITE + 'shops/';
  const A = day(['12:00', '22:00']), B = day(['12:00', '23:00']);
  put({
    id: 'kyoto_cream_fest_kyoto_ekimae', name: 'クリーム フェスト 京都駅前店 (Cream Fest)', category: 'OMNI',
    lat: 34.98840343788055, lng: 135.76131708019372, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soft serve with toppings such as cornflakes, caramel popcorn, shiratama, Mont Blanc paste and tiramisu (2025–26 reviews); several toppings contain wheat, and no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soft serve is a dairy ice cream praised for its rich milk flavour (2025–26 reviews). No vegan information is published.',
    hours_raw: 'Sunday–Thursday and holidays 12:00–22:00; Friday, Saturday and the day before a holiday 12:00–23:00; closed irregularly (official site, cream-fest.com/shops/). Tabelog gives daily 12:00–22:00, closed irregularly. No reservations (Tabelog). Cards accepted; no e-money or QR payments (Tabelog). About four seats for eating in (June 2025 and February 2026 reviews), four counter stools (June 2026), stools rather than chairs, not for a long stay (January 2026); many take it away. Often one staff member working alone, with queues, many of them overseas visitors, even around 21:30 (June 2025; February, May and September 2026 reviews). On Higashinotoin-dori south of Shichijo, next to the Alua Hotel and across from the APA Hotel (September 2026 review). Opened 1 June 2022 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station',
    cuisine: 'Soft-serve sundaes, parfaits and shakes (Tabelog; reviews) · tiramisu ¥700 (September 2025) · Mont Blanc parfait, R size, ¥800 (September 2025) · caramel banana with cornflakes (October 2025) · caramel popcorn, S size, ¥680 (January 2026) · caramel banana with shiratama (February 2026) · chocolate parfait, banana shake (June 2026) · black sugar matcha shiratama, S ¥670; Mont Blanc parfait, S ¥700 (June 2026) · chocolate banana sundae, R size (September 2026)',
    website: SITE, gmaps: gm('クリームフェスト 京都駅前店'), menu_url: null,
    notes: '[Soft serve · Kyoto Station, open late] A small soft-serve shop a few minutes from Kyoto Station, open until 22:00 (23:00 at weekends): rich milk soft serve built into sundaes and parfaits with caramel popcorn, matcha and shiratama, Mont Blanc or banana, about ¥700. Four stools for eating in; queues of visitors at night. One of four Cream Fest shops (Osaka, Kyoto, Nagoya, Tokyo).',
    chef_bio: { chef_name: null, roles: ['Shop (no owner named)'], origin: null,
      background: 'Cream Fest’s official site lists four shops: the Suminoe main shop in Osaka, this Kyoto Station shop, Kakuozan in Nagoya and Kameido in Tokyo; its operating-company link points to Team GSE, a business consultancy. Reviewers describe a clean white interior with flamingo and beach artwork (October 2025), a cute interior (June 2026), and a staff member who reshaped a soft serve several times to get it right (November 2026). Criticism: in September 2025 a tiramisu sundae looked quite different from the menu photo and felt too expensive at ¥700, and another diner found the Mont Blanc parfait ordinary; a June 2026 diner missed hand wipes and water; a September 2026 diner waited about ten minutes and found the sundae smaller and lighter than expected.',
      philosophy: null,
      specialty: 'Soft-serve sundaes and parfaits.',
      anecdotes: [
        { text: 'A February 2026 regular stops by after drinks or before a Kyoto Sanga match and usually takes the caramel banana in S size with shiratama.', source: R + 'B523823305/' },
        { text: 'A July 2026 diner staying in the hotel next door says a travelling friend was so hooked that the friend ate it three days running.', source: R + 'B531996615/' },
      ],
      japanese_sources_summary: '公式サイト (cream-fest.com): クリームフェスト京都駅前店、京都府京都市下京区東洞院通七条下る塩小路町522、日〜木 (祝日) 12:00〜22:00、金・土・祝日前12:00〜23:00、不定休。店舗は住之江本店、京都駅前店、名古屋覚王山店、亀戸店の4店。食べログ (英語版): ソフトクリーム・カフェ、予約不可、毎日12:00〜22:00、不定休、カード可、電子マネー・QR不可、オープン日2022年6月1日。口コミ (2025〜2026年、英語): イートインは約4席 (2025年6月、2026年2月)、カウンター4席 (2026年6月)、ティラミス700円、モンブランパフェR800円 (2025年9月)、キャラメルポップコーン680円 (2026年1月)、黒糖抹茶白玉S670円、モンブランパフェS700円 (2026年6月)、外国人客が多く、夜も行列 (2026年2月、5月)。',
      confidence: 'low', sources: [SHOPS, TB, R + 'B510385798/', R + 'B513206366/', R + 'B514058904/', R + 'B515591814/', R + 'B521129996/', R + 'B523823305/', R + 'B527907399/', R + 'B529779904/', R + 'B529985792/', R + 'B531996615/', R + 'B536099192/', R + 'B538560934/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or English-speaking staff mentioned; reviewers note many overseas customers in the queue (February and May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院七条下る塩小路町522',
    existence: { status: 'confirmed', checked: TODAY, note: 'Listed on the official shop page (cream-fest.com/shops/); Tabelog listing (no closure badge) with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.988403, 135.761317); nearest pin in data about 7 m (ご馳家, kyoto_gochiya_shiokoji); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513206366/', R + 'B514058904/', R + 'B521129996/', R + 'B529985792/'],
    price_note: 'Prices from reviews, dated by visit (September 2025 – June 2026).', last_checked: TODAY, items: [
      it('', '', 'Caramel popcorn soft serve (S)', '¥680', 'Sweets', 'ask', 'no', 'January 2026 review.', 'caramel_popcorn'),
      it('', '', 'Black sugar matcha shiratama (S)', '¥670', 'Sweets', 'ask', 'no', 'June 2026 review.', 'kuromitsu_matcha_shiratama'),
      it('', '', 'Mont Blanc parfait (S)', '¥700', 'Sweets', 'ask', 'no', 'June 2026 review; R size ¥800 in September 2025.', 'mont_blanc_parfait'),
      it('', '', 'Tiramisu soft serve', '¥700', 'Sweets', 'no', 'no', 'September 2025 review.', 'tiramisu'),
    ] }, {
    cuisine: 'ソフトクリームのサンデー、パフェ、シェイク (食べログ、口コミ)・ティラミス700円 (2025年9月)・モンブランパフェR800円 (2025年9月)・コーンフレーク入りのキャラメルバナナ (2025年10月)・キャラメルポップコーンS680円 (2026年1月)・キャラメルバナナに白玉 (2026年2月)・チョコのパフェ、バナナシェイク (2026年6月)・黒糖抹茶白玉S670円、モンブランパフェS700円 (2026年6月)・チョコバナナサンデーR (2026年9月)',
    neighborhood: '塩小路町',
    gf_detail: '要確認。ソフトクリームにコーンフレーク、キャラメルポップコーン、白玉、モンブラン、ティラミスなどをのせる (2025〜2026年の口コミ)。小麦を含むトッピングもあり、グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。ミルクの味が濃い乳製品のソフトクリーム (2025〜2026年の口コミ)。ヴィーガンの情報は公開されていない。',
    notes: '[ソフトクリーム・塩小路町、夜遅くまで] 京都駅から数分の小さなソフトクリームの店で、夜10時 (週末は11時) まで。ミルクの濃いソフトクリームに、キャラメルポップコーン、抹茶と白玉、モンブラン、バナナなどをのせたサンデーやパフェが約700円。イートインはスツール4席ほど、夜は訪日客の行列も。大阪、京都、名古屋、東京に4店あるクリームフェストの一つ。',
  });
}

// ================================================================ 京都チーズケーキ博物館
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26044228/'; const R = TB + 'dtlrvwlst/';
  const OLD = 'https://tabelog.com/en/kyoto/A2601/A260203/26038509/';
  const FRI = day(['13:00', '17:00']), WE = day(['12:00', '17:00']);
  put({
    id: 'kyoto_cheesecake_museum_shichijo', name: '京都チーズケーキ博物館', category: 'OMNI',
    lat: 34.99009608787811, lng: 135.7570188202138, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cheesecakes in many styles — terrines, Basque, New York, soufflé — and cheese canelés (2025–26 reviews); canelés and some cheesecakes are usually made with flour, and no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every item is a cheesecake or a cheese canelé (2025–26 reviews). No vegan information is published.',
    hours_raw: 'Friday 13:00–17:00; Saturday and Sunday 12:00–17:00; closed Monday–Thursday; hours and closing days may change (Tabelog). A January 2026 review gave 12:00–17:00, closed Tuesday and Wednesday. Tabelog says reservations are available; a January 2026 diner was told no reservations except for online orders, but called the day before to check stock. Cashless only (January and March 2026 reviews); Tabelog lists cards and QR payments. Mostly take-out: a January 2026 review gave no seating, take-away only, but July and November 2026 diners ate in on the second floor (mismatched furniture, cakes on plates, drinks in disposable cups, no restroom, July 2026). Ordering by writing quantities on a paper slip (January 2026). In a renovated Showa-era row house on a narrow alley north of the Shinmachi-Shichijo crossing, across from Sumire Coffee; no sign on Shinmachi-dori (January and November 2026 reviews). Opened here 21 December 2025 (Tabelog); the earlier shop at Nishinokyo near Nijo station (opened October 2022) is marked moved on Tabelog.',
    hours: { 4: FRI, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: null, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shichijo-Shinmachi',
    cuisine: 'Cheesecake shop with an eat-in second floor (Tabelog; reviews) · plain terrine, blue cheese Basque (December 2025) · plain terrine ¥669, Camembert with pistachio and strawberry layered cheesecake ¥880, pistachio Basque ¥637, strawberry Basque ¥650, chilled cheesecake canelé cocoa NY ¥700 (January 2026) · Gorgonzola Piccante and fig Basque (January 2026) · cheese canelé with nuts ¥650, with strawberry ¥680, blue cheese Basque ¥777, rum raisin terrine ¥720 (February 2026) · blue cheese and Mont d’Or, white chocolate strawberry NY (March 2026) · raisin terrine, pistachio, sakura, blue cheese with fig, canelés (March 2026) · soufflé ¥637, plain terrine ¥669, cacao NY ¥700, white chocolate strawberry NY ¥650 (May 2026) · cheesecakes with hot coffee, eaten in (July 2026)',
    website: null, gmaps: gm('京都チーズケーキ博物館 辰巳町'), menu_url: null,
    notes: '[Cheesecake · Shichijo-Shinmachi, alley shop with an upstairs room] A cheesecake specialist in a renovated row house down a narrow alley near Kyoto Station, open Friday to Sunday afternoons: terrines, Basque and New York cheesecakes in combinations such as blue cheese with fig or Camembert with pistachio, and cheese canelés, about ¥640–880 each. Mostly take-out, with a plain eat-in room upstairs; cashless.',
    chef_bio: { chef_name: null, roles: ['Shop (no owner named)'], origin: null,
      background: 'Reviewers give the shop’s history: it began in a hidden alley near Nijo, later turned into a parfait shop and expanded to the Kanto region before coming back (December 2025 review); originally at Nijo, it moved to Tokyo and returned to Kyoto, apparently its first physical store (January 2026 review). The earlier Nijo listing (Nishinokyo, opened 10 October 2022) is marked moved on Tabelog. A January 2026 diner says the raclette stretchy cheesecake was featured on the TV programme "Matsuko’s Unknown World" and that the online shop sells items up to a ¥16,200 artisan cheesecake. The display is laid out like a dry landscape garden (January 2026). Criticism: a May 2026 diner found the cakes small for the price; a July 2026 diner liked the cheesecakes but found the upstairs room lacking — mismatched furniture, disposable cups, hard-to-use wooden forks, no restroom.',
      philosophy: null,
      specialty: 'Cheese terrines and Basque cheesecakes; cheese canelés.',
      anecdotes: [
        { text: 'A March 2026 diner took about 15 minutes to choose among the many combinations before settling on the blue cheese cake and a cheese canelé.', source: R + 'B524793307/' },
        { text: 'A July 2026 diner, a raisin lover, made a lunch of cheesecakes upstairs and suggests bringing your own fork.', source: R + 'B531110131/' },
        { text: 'A November 2026 diner recommends the plain terrine with red wine.', source: R + 'B538963807/' },
      ],
      japanese_sources_summary: '食べログ (英語版): 京都チーズケーキ博物館、ケーキ、予約可、金13:00〜17:00、土・日12:00〜17:00、月〜木定休、カード・QR決済可、京都府京都市下京区新町通り七条上る辰巳町749-1、オープン日2025年12月21日。旧店舗 (食べログ): 京都府京都市中京区西ノ京永本町16-3、オープン日2022年10月10日、移転。口コミ (2025〜2026年、英語): Nijo の路地から始まり、パフェの店になり Kanto にも進出、その後戻った (2025年12月)。12:00〜17:00、火・水定休、席なし、持ち帰りのみ、Matsuko\'s Unknown World で紹介 (2026年1月)。キャッシュレスのみ (2026年1月、3月)。2階でイートイン、家具がちぐはぐ、トイレなし (2026年7月)。プレーンのテリーヌ669円、ピスタチオのバスク637円、ブルーチーズのバスク777円など。',
      confidence: 'low', sources: [TB, OLD, R + 'B520012501/', R + 'B520962303/', R + 'B521438792/', R + 'B522172151/', R + 'B522894544/', R + 'B524793307/', R + 'B525223308/', R + 'B528877335/', R + 'B531110131/', R + 'B538963807/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or English-speaking staff mentioned; orders are written on a paper slip (January 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新町通り七条上る辰巳町749-1',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (no closure badge), opened December 2025, with reviews dated through November 2026; no shop website found.' },
    pin_source: `Tabelog ${TB} (34.990096, 135.757019); no pin in data within 15 m; not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520962303/', R + 'B522172151/', R + 'B528877335/'],
    price_note: 'Prices from January, February and May 2026 reviews, tax included where stated.', last_checked: TODAY, items: [
      it('', '', 'Plain terrine', '¥669', 'Cheesecake', 'ask', 'no', 'January and May 2026 reviews.', 'plain_terrine'),
      it('', '', 'Pistachio Basque cheesecake', '¥637', 'Cheesecake', 'ask', 'no', 'January 2026 review.', 'pistachio_basque'),
      it('', '', 'Blue cheese Basque cheesecake', '¥777', 'Cheesecake', 'ask', 'no', 'February 2026 review.', 'blue_cheese_basque'),
      it('', '', 'Camembert, pistachio and strawberry layered cheesecake', '¥880', 'Cheesecake', 'ask', 'no', 'January 2026 review.', 'camembert_layered'),
      it('', '', 'Cheese canelé with nuts', '¥650', 'Cheesecake', 'no', 'no', 'February 2026 review.', 'cheese_canele_nuts'),
    ] }, {
    cuisine: '2階でイートインもできるチーズケーキの店 (食べログ、口コミ)・プレーンのテリーヌ、ブルーチーズのバスク (2025年12月)・プレーンのテリーヌ669円、カマンベールとピスタチオと苺の層のチーズケーキ880円、ピスタチオのバスク637円、苺のバスク650円、Chilled Cheesecake Canelé Cocoa NY 700円 (2026年1月)・Gorgonzola Piccante といちじくのバスク (2026年1月)・ナッツのチーズカヌレ650円、苺のチーズカヌレ680円、ブルーチーズのバスク777円、ラムレーズンのテリーヌ720円 (2026年2月)・ブルーチーズと Mont d’Or、ホワイトチョコと苺のNY (2026年3月)・レーズンのテリーヌ、ピスタチオ、桜、ブルーチーズといちじく、カヌレ (2026年3月)・スフレ637円、プレーンのテリーヌ669円、カカオのNY700円、ホワイトチョコと苺のNY650円 (2026年5月)・2階でチーズケーキとホットコーヒー (2026年7月)',
    neighborhood: '辰巳町',
    gf_detail: '要確認。テリーヌ、バスク、NY、スフレなど様々なチーズケーキとチーズのカヌレ (2025〜2026年の口コミ)。カヌレや一部のチーズケーキはふつう小麦粉を使い、グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。すべてチーズケーキかチーズのカヌレ (2025〜2026年の口コミ)。ヴィーガンの情報は公開されていない。',
    notes: '[チーズケーキ・辰巳町、路地の店と2階の部屋] 京都駅近く、細い路地の改装した長屋にあるチーズケーキの専門店で、金〜日の午後だけ開く。テリーヌ、バスク、NYのチーズケーキを、ブルーチーズといちじく、カマンベールとピスタチオなどの組み合わせで、チーズのカヌレも、1個約640〜880円。ほぼ持ち帰りで、2階に簡素なイートインの部屋。キャッシュレスのみ。',
  });
}

save();
