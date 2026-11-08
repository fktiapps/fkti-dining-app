// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 74.
//   + 祇園 寿苑 Gion Juen (A5 Omi-beef sukiyaki, shabu-shabu and steamed seiro by Yasaka Shrine; opened March 2026)
//   + キャラメルママ Caramel Mama (Yumi Matsutoya-themed bar on Kawaramachi-Sanjo, open to 3 am)
//   + さきの音 Sakino Ne (creative lunch-and-drinks spot on a 4th floor by Kawaramachi-Sanjo, run by a couple)
//   - Bar祇園, けずりひや 京都祇園, Wafla 京都店, かき小屋フィーバー 三条木屋町店, Dining Kitchen & Bar ChiChi: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26021444 (skipped), 26026268 (skipped),
//   26044472, 26038754 (skipped), 26001578, 26044862, 26026478 (skipped), 26020274 (skipped).
//   queue-status.jsonl grepped for each brand (Bar祇園, けずりひや, 寿苑, Wafla, キャラメルママ, さきの音, フィーバー, ChiChi): no
//   earlier rulings.
//   Data check: none of the three drafted is in data/kyoto.json by name or address. キャラメルママ (3F) and さきの音 (4F) share
//   エリゼビル (恵比須町534-6) with ぱなり (2F, kyoto_panari_kawaramachi_sanjo); イスタンブール・サライ is next door.
//   Same-name count (same brand or operator only): 寿苑 — invoice holder 株式会社ネクスト, registered in the same building
//   (NTA register); Tabelog’s 寿苑 name matches are unrelated yakiniku and Chinese shops elsewhere; one shop. キャラメルママ,
//   さきの音 — one shop each. Large-parent list checked.
//   Service charges: none listed on Tabelog for any of the three.
//   Other-diner remarks (Greg 2026-11-06): a single April 2026 寿苑 remark about foreign guests left out.
//   Halal: no operator in this batch claims halal. 寿苑 lists a vegetarian set (not vegan).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-74');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26021444', 'Bar祇園: too thin to verify — two short reviews from January and February 2025 and an old site page; no food described');
skip('26026268', 'けずりひや 京都祇園: too thin to verify — one 2025 review (February 2025); the shop’s own site was last updated in 2021');
skip('26038754', 'Wafla 京都店: not a place to eat — a take-away sweets counter (Tabelog lists it as take-away)');
skip('26026478', 'かき小屋フィーバー 三条木屋町店: chain — Tabelog’s name search lists かき小屋フィーバー shops in Kyobashi, Tenma, Nara, Kusatsu, Himeji and Nagoya (two) besides this one');
skip('26020274', 'Dining Kitchen & Bar ChiChi: no reviews dated 2025–2026 (latest June 2023)');

// ================================================================ 祇園 寿苑
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044472/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://wagyu-juen.com/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_juen', name: '祇園 寿苑 (Gion Juen)', category: 'OMNI',
    lat: 35.003983, lng: 135.776194, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sukiyaki in a Kanto-style warishita, shabu-shabu with ponzu or sesame sauce, steamed seiro with ponzu or salt, xiaolongbao and shumai, udon; no gluten information (own site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetarian set (¥4,000) and steamed Kyoto vegetables (¥1,500) are listed, but whether the broths and sauces are free of animal products is not said (own site).',
    hours_raw: '11:00–15:00 (L.O. 14:30) and 17:00–21:00; closed Monday (own site). Tabelog lists Tuesday–Sunday and holidays 11:00–15:00 and 17:00–22:00 (L.O. 21:00). Same-day and walk-in welcome (own site). Staff can cook the sukiyaki if asked when booking (September 2026). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog; own site). 48 seats at tables with private rooms (Tabelog); the room was redone into mostly semi-private rooms (September 2026). Non-smoking; smoking area in the building (Tabelog). Wheelchair accessible (Tabelog). On the 2nd floor of ギオンファーストビル on the street to Yasaka Shrine, 5 min from Keihan Gion-Shijo (Tabelog; August 2026). Opened 1 March 2026 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, on the street to Yasaka Shrine — 5 min from Keihan Gion-Shijo',
    cuisine: 'A5 Omi beef from a Shiga farm as sukiyaki, shabu-shabu and steamed seiro (own site; 2026 reviews) · sukiyaki or shabu-shabu sets ¥4,980; courses from ¥6,600 to ¥11,000 (Sai, Miyabi, Kiwami) (own site) · A5 Omi chuck-eye sukiyaki 100 g ¥5,500, from one person at lunch (2026 reviews) · simmered hamburg steak with demi-glace and cheese ¥2,200; steamed pork set ¥2,400–2,500 with rice and soup (April–August 2026) · Kyoto-vegetable seiro ¥1,500; shumai and xiaolongbao ¥700; clams steamed in sake ¥1,300; Ise-ebi and seafood seiro course ¥6,000 (own site) · Omi-beef nigiri and rolls; Wagyu bento and sushi set ¥2,980 (own site) · vegetarian set ¥4,000 (own site)',
    website: SITE, gmaps: gm('祇園 寿苑'), menu_url: SITE,
    notes: '[Sukiyaki and shabu-shabu · Gion by Yasaka Shrine, A5 Omi beef] A calm second-floor Wagyu restaurant on the street to Yasaka Shrine, serving A5 Omi beef from a Shiga farm as sukiyaki (from one person at lunch), shabu-shabu or steamed seiro, plus a big hamburg steak and a vegetarian set. Sets from ¥4,980, courses ¥6,600–11,000. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Run by 株式会社ネクスト, registered in the same building (NTA register). The shop’s site describes a Wagyu specialist in Gion. Reviewers say the Omi beef comes direct from a farm in Shiga (April–August 2026) and that the staff cooked the sukiyaki for a group that asked in advance (September 2026).',
      philosophy: null, specialty: 'A5 Omi-beef sukiyaki.',
      anecdotes: [
        { text: 'A group of four men in the 70s age bracket, unsure how to cook sukiyaki, asked when booking for staff to cook it, and a staff member did (September 2026).', source: R + 'B535463316/' },
        { text: 'A September 2026 return visitor found the room redone into mostly semi-private rooms, and finished the shabu-shabu course with three tuna nigiri.', source: R + 'B535989503/' },
      ],
      japanese_sources_summary: '公式サイト: 京都・祇園・和牛専門店「寿苑 JUEN」、11:00〜15:00 (LO14:30)、17:00〜21:00、月曜定休、当日予約・予約なしも可、71席、個室8〜24名、現金・カード・QR・電子マネー可、しゃぶしゃぶセット・すき焼きセット各4,980円、ベジタリアン4,000円、彩・雅・極のすき焼き/しゃぶしゃぶコース6,600〜11,000円、伊勢海老と海鮮せいろ蒸しコース6,000円、肉せいろ蒸し2,980円、京野菜せいろ蒸し1,500円、焼売・小籠包各700円、蛤酒蒸し1,300円、A5近江牛サーロイン100g 7,000円、和牛弁当・寿司御膳各2,980円、うどん200円。食べログ: すき焼き・しゃぶしゃぶ、東山区祇園町北側281-1-1 ギオンファーストビル 2F 202B、京阪祇園四条駅から徒歩5分、48席、禁煙、車椅子可、2026年3月1日オープン、適格請求書 T6010601044694 (株式会社ネクスト)。口コミ (2026年、英語): 滋賀の牧場直送のA5近江牛、肩ロースのすき焼き100g 5,500円、昼は一人前から、煮込みハンバーグ2,200円、豚のせいろ蒸し、関東風の割下、頼めばスタッフが調理、半個室中心に改装、シャブシャブコース11,000円とまぐろの握り。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6010601044694', R + 'B525593884/', R + 'B526057739/', R + 'B526693113/', R + 'B526920117/', R + 'B529309459/', R + 'B529417387/', R + 'B530113509/', R + 'B533465313/', R + 'B535463316/', R + 'B535989503/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-ins welcome; staff will cook the sukiyaki if asked when booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側281-1-1 ギオンファーストビル 2F 202B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003983, 135.776254), offset about 5.5 m west to (35.003983, 135.776194) because 和牛一乃音 (kyoto_wagyu_ichinone), B1F of the same building, sits within 4 m; cross-checked: GSI 京都府京都市東山区祇園町北側281番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the shop’s site and 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('すき焼きセット', 'sukiyaki setto', 'Sukiyaki set', '¥4,980', 'Sets', 'ask', 'no', 'Own site.', 'sukiset'),
      it('しゃぶしゃぶセット', 'shabushabu setto', 'Shabu-shabu set', '¥4,980', 'Sets', 'ask', 'no', 'Own site.', 'shabuset'),
      it('ベジタリアン', 'bejitarian', 'Vegetarian set', '¥4,000', 'Sets', 'ask', 'ask', 'Own site; vegetarian, not stated vegan.', 'veg'),
      it('京野菜せいろ蒸し', 'kyoyasai seiro mushi', 'Steamed Kyoto vegetables', '¥1,500', 'À la carte', 'ask', 'ask', 'Own site.', 'kyoyasai'),
      it('', '', 'A5 Omi chuck-eye sukiyaki, 100 g', '¥5,500', 'Sukiyaki', 'ask', 'no', 'April–August 2026.', 'omi100'),
      it('', '', 'Simmered hamburg steak with rice and soup', '¥2,200', 'Lunch', 'no', 'no', 'April and June 2026.', 'hamburg'),
    ] }, {
    cuisine: '滋賀の牧場のA5近江牛をすき焼き、しゃぶしゃぶ、せいろ蒸しで (公式サイト、2026年の口コミ)・すき焼きかしゃぶしゃぶのセット4,980円、彩・雅・極のコース6,600〜11,000円 (公式サイト)・A5近江牛の肩ロースのすき焼き100g 5,500円、昼は一人前から (2026年の口コミ)・デミグラスとチーズの煮込みハンバーグ2,200円、豚のせいろ蒸しのセット2,400〜2,500円、ご飯と汁付き (2026年4〜8月)・京野菜せいろ蒸し1,500円、焼売・小籠包各700円、蛤の酒蒸し1,300円、伊勢海老と海鮮のせいろ蒸しコース6,000円 (公式サイト)・近江牛の握りと巻き寿司、和牛弁当と寿司御膳各2,980円 (公式サイト)・ベジタリアン4,000円 (公式サイト)',
    neighborhood: '八坂神社へ続く通りの祇園。京阪祇園四条から徒歩5分',
    gf_detail: '要確認。関東風の割下のすき焼き、ポン酢かごまだれのしゃぶしゃぶ、ポン酢か塩のせいろ蒸し、小籠包と焼売、うどん。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。ベジタリアン (4,000円) と京野菜のせいろ蒸し (1,500円) があるが、だしやたれに動物性のものを使わないかは書かれていない (公式サイト)。',
    notes: '[すき焼きとしゃぶしゃぶ・八坂神社近くの祇園、A5近江牛] 八坂神社へ続く通りのビル2階の落ち着いた和牛の店。滋賀の牧場のA5近江牛をすき焼き (昼は一人前から)、しゃぶしゃぶ、せいろ蒸しで。大きなハンバーグとベジタリアンのセットも。セット4,980円から、コース6,600〜11,000円。月曜定休。',
  });
}

// ================================================================ キャラメルママ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001578/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_caramel_mama_bar', name: 'キャラメルママ (Caramel Mama)', category: 'OMNI',
    lat: 35.009613, lng: 135.769345, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bar of cocktails and spirits with light snacks; no food menu or gluten information found (Tabelog; 2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks, with complimentary peanuts; no food menu found (September 2025).',
    hours_raw: '18:00–03:00 daily (Tabelog). Cash only: no cards, e-money or QR (Tabelog). About 30–40 seats at a counter and tables (Tabelog; September 2025). Smoking allowed (Tabelog). On the 3rd floor of エリゼビル north of Kawaramachi-Sanjo, behind a bright red door, 2 min from Kyoto Shiyakusho-mae (Tabelog; September 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi north of Sanjo, 3F — 2 min from subway Kyoto Shiyakusho-mae',
    cuisine: 'A bar devoted to Yumi Matsutoya: Matsutoya songs on the sound system and cocktails named after the songs (February 2025, October 2026) · spirits, shochu, sodas and cocktails, made to order off-menu too; complimentary peanuts (September 2025) · reasonable bar prices (February 2025)',
    website: null, gmaps: gm('キャラメルママ 京都 河原町'), menu_url: TB + 'dtlmenu/',
    notes: '[Bar · Kawaramachi-Sanjo, a Yuming bar] A bar on the 3rd floor near Kawaramachi-Sanjo where Yumi Matsutoya’s hits play all night, the walls are covered in Matsutoya memorabilia and the cocktails take Matsutoya song titles — reviewers say the singer endorses the bar and drops by on Kansai tours. Fair prices; cash only; smoking allowed; open till 3 am.',
    chef_bio: { chef_name: null, roles: ['Owner and bartenders (unnamed)'], origin: null,
      background: 'Reviewers describe two male staff behind the counter and an owner who chooses the songs from CDs (September 2025). Reviewers write that the bar is endorsed or produced by Yumi Matsutoya and that the singer sometimes visits on Kansai tours (February and September 2025, October 2026).',
      philosophy: null, specialty: 'Cocktails named after Yumi Matsutoya songs.',
      anecdotes: [
        { text: 'A September 2025 visitor who inherited a love of Matsutoya’s music from a father who played the best-of album in the car opened the bright red door alone and was handed peanuts and a sepia-toned memo book.', source: R + 'B513225937/' },
        { text: 'An October 2026 fan notes it is close to the station for the last train — and if you miss it, maybe that is your DESTINY.', source: R + 'B536848220/' },
      ],
      japanese_sources_summary: '食べログ: キャラメルママ、バー、中京区河原町三条上ル二筋目東入ル恵比須町534-6 エリゼビル 3F、京都市役所前から166m、毎日 18:00〜翌3:00、カード・電子マネー・QR不可、40席、喫煙可。口コミ (2025〜2026年、英語): 松任谷由実の曲が流れるバー、曲名のカクテル、グッズとポスター、本人公認・プロデュースとの声、関西ツアーの際に立ち寄ることも、男性スタッフ2人、店主がCDで選曲、サービスのピーナッツ、手頃な値段、赤い扉。',
      confidence: 'medium', sources: [TB, R + 'B502148440/', R + 'B513225937/', R + 'B536848220/'] },
    cultural_comfort: { level: 'japanese', note: 'A Japanese fan bar; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条上ル二筋目東入ル恵比須町534-6 エリゼビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009563, 135.769345), offset about 5.5 m north to (35.009613, 135.769345) because ぱなり (kyoto_panari_kawaramachi_sanjo), 2F of the same building, sits within 5 m; cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502148440/', R + 'B513225937/'],
    price_note: 'No menu prices found; reviewers spend ¥2,000–2,999.', last_checked: TODAY, items: [
      it('', '', 'Cocktails named after Yumi Matsutoya songs', '', 'Cocktails', '', '', 'February 2025; October 2026.', 'cocktails'),
    ] }, {
    cuisine: '松任谷由実のバー。曲が流れ、曲名のカクテル (2025年2月、2026年10月)・スピリッツ、焼酎、ソーダ割り、カクテル、メニューになくても作ってくれる。サービスのピーナッツ (2025年9月)・バーとしては手頃な値段 (2025年2月)',
    neighborhood: '三条の北の河原町、3階。地下鉄京都市役所前から徒歩2分',
    gf_detail: '要確認。カクテルとスピリッツのバーで軽いつまみ。フードメニューやグルテンの情報は見つからない (食べログ、2025年の口コミ)。',
    vegan_detail: '要確認。飲み物とサービスのピーナッツ。フードメニューは見つからない (2025年9月)。',
    notes: '[バー・河原町三条、ユーミンのバー] 河原町三条近くのビル3階のバー。松任谷由実のヒット曲が夜通し流れ、壁はグッズでいっぱい、カクテルは曲名。本人公認で関西ツアーの際に立ち寄るとの声。手頃な値段、現金のみ、喫煙可、深夜3時まで。',
  });
}

// ================================================================ さきの音
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044862/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '16:00']);
  put({
    id: 'kyoto_sakino_ne', name: 'さきの音 (Sakino Ne)', category: 'OMNI',
    lat: 35.009622, lng: 135.769437, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Set lunches, rice bowls and fried rice, gyoza with soy-sauce koji, shrimp tempura, a tororo gratin; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan dishes are described; the menu is fish, meat and egg dishes (2026 reviews).',
    hours_raw: '11:30–16:00 daily (L.O. food 15:00, drinks 15:30); closed on irregular days (Tabelog). Reservations accepted (July 2026). Cards and QR (Tabelog). 15 seats: 7 at the counter and 2 semi-private rooms (Tabelog; August 2026). Smoking room inside, no smoking at the seats (Tabelog). On the 4th floor of エリゼビル north of Kawaramachi-Sanjo, 5 min from Keihan Sanjo (Tabelog). Opened 28 April 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi north of Sanjo, 4F — 5 min from Keihan Sanjo',
    cuisine: 'A daytime “creative dining” spot for lunch with or without drinks (August 2026) · daily lunch such as miso-braised mackerel ¥1,000 (August 2026) · rice bowls and fried rice (July 2026) · gyoza with a hint of Sichuan pepper and homemade soy-sauce koji; a creamy tororo gratin; shrimp tempura with homemade lemon tartare (August 2026)',
    website: null, gmaps: gm('さきの音 河原町'), menu_url: TB + 'dtlmenu/',
    notes: '[Creative dining · Kawaramachi-Sanjo, lunch and day drinking] A 15-seat daytime spot on the 4th floor of a nightlife building, run by a couple, serving set lunches like miso-braised mackerel (¥1,000), rice bowls and fried rice, and à la carte with drinks from noon — Sichuan-pepper gyoza, tororo gratin, shrimp tempura. Open 11:30–16:00.',
    chef_bio: { chef_name: '大谷 翔吾 (reading not sourced)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T1810649976201 is registered to an individual, 大谷 翔吾 (NTA register). A July 2026 reviewer writes that the restaurant is run by a couple, with the wife doing the cooking.',
      philosophy: null, specialty: 'Set lunches; gyoza with soy-sauce koji.',
      anecdotes: [
        { text: 'An August 2026 visitor who found it on Instagram was delighted to drink à la carte from lunchtime.', source: R + 'B532929074/' },
      ],
      japanese_sources_summary: '食べログ: さきの音、居酒屋・創作料理・日本料理、中京区姉小路通り河原町東入る恵比須534-6 エリゼビル 4F、京阪三条駅から徒歩5分、毎日 11:30〜16:00 (L.O.料理15:00、飲物15:30)、不定休、カード・QR可、15席 (カウンター7、個室2)、喫煙室あり、2026年4月28日オープン、適格請求書 T1810649976201 (大谷 翔吾)。口コミ (2026年、英語): 夫婦で営み、奥さんが料理、日替わりランチ (鯖の味噌煮) 1,000円、丼と炒飯、山椒のきいた餃子と自家製醤油麹、とろろグラタン、自家製レモンタルタルの海老天、昼から飲める。',
      confidence: 'low', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1810649976201', R + 'B530841329/', R + 'B532929074/', R + 'B533337485/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter and two rooms; open daytime only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区恵比須町534-6 エリゼビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July and August 2026.' },
    pin_source: `Tabelog ${TB} (35.009572, 135.769437), offset about 5.5 m north to (35.009622, 135.769437) because イスタンブール・サライ (kyoto_istanbul_saray) sits within 4 m; cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Lunch price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch (e.g. miso-braised mackerel)', '¥1,000', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch'),
      it('', '', 'Gyoza with soy-sauce koji', '', 'À la carte', 'no', 'no', 'August 2026.', 'gyoza'),
      it('', '', 'Shrimp tempura with lemon tartare', '', 'À la carte', 'no', 'no', 'August 2026.', 'ebiten'),
    ] }, {
    cuisine: '昼に飲んでも飲まなくても楽しめる創作ダイニング (2026年8月)・鯖の味噌煮などの日替わりランチ1,000円 (2026年8月)・丼と炒飯 (2026年7月)・山椒のきいた餃子と自家製醤油麹、クリーミーなとろろグラタン、自家製レモンタルタルの海老天 (2026年8月)',
    neighborhood: '三条の北の河原町、4階。京阪三条から徒歩5分',
    gf_detail: '要確認。定食、丼と炒飯、醤油麹の餃子、海老天、とろろグラタン。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの品は書かれておらず、魚、肉、卵の料理 (2026年の口コミ)。',
    notes: '[創作ダイニング・河原町三条、昼飲み] 夜の店が多いビル4階の15席の昼の店。夫婦で営み、鯖の味噌煮などの定食 (1,000円)、丼や炒飯、昼から一品と酒も: 山椒の餃子、とろろグラタン、海老天。11:30〜16:00。',
  });
}

save();
