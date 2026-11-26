// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 103.
//   + 富小路 RAKU (teppanyaki course restaurant in a machiya across from the Imperial Palace) — rest (fetched b102 round, decided here)
//   + いっこん (couple-run obanzai, oden and kushikatsu izakaya by Nijojo-mae, since 2003) — rest
//   + CHINA TONGUE (Hong Kong-style all-day Chinese by Hironori Sano, Marutamachi) — rest
//   + 料理・ワイン イバラキ (machiya wine dining across from the Imperial Palace; Chinese soba at lunch) — rest
//   Core and notable tiers have nothing left in this lane (2026-11-26); rest tier, nearest-first from `next rest 2000`.
//   No integrator prefetch: fetched by this worker with fetchshop.mjs (Tabelog /en/, 3 s between requests).
//   Chain checks (2026-11-26): web searches find no other branch of RAKU, いっこん, CHINA TONGUE or イバラキ. A March 2025
//   CHINA TONGUE reviewer mentions one sister restaurant (a small group, flagged in the report).
//   富小路 RAKU shares its lot number (桝屋町337) with 富小路 信 (kyoto_tominokoji_shin) but has its own phone number
//   (075-746-3800 vs 075-748-1243 on Tabelog), its own Tabelog listing and its own cuisine: drafted as its own shop.
//   None of the four is in data/kyoto.json (name, Tabelog id, address checked) or in another worker's pending script.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; no remarks about other diners kept
//   (one May 2025 CHINA TONGUE review is about how the owner spoke to other customers: criticism of the shop, kept).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-103');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 富小路 RAKU
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037118/'; const R = TB + 'dtlrvwlst/';
  const L = ['12:00', '13:30'], D = ['17:30', '21:00']; const H = day(L, D);
  put({
    id: 'kyoto_tominokoji_raku', name: '富小路 RAKU', category: 'OMNI',
    lat: 35.017298, lng: 135.765132, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Steak is served with salt, garlic chips, wasabi or soy sauce, but the courses also have hashed beef, Caesar salad and soups (2024–26 reviews). The restaurant adjusts courses to requests made in advance (October 2022, June 2024), so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on wagyu, roast beef, fish and shellfish (2022–26 reviews).',
    hours_raw: 'Lunch 12:00–13:30 and dinner 17:30–21:00; closed Wednesday (Tabelog). Reservations taken (Tabelog); reviewers booked the lunch course ahead (April 2025, January 2026). Cards (AMEX listed); non-smoking; private rooms and private hire; no parking (Tabelog). An L-shaped counter around the griddle on the second floor (December 2023, October 2025) and a private room on the first floor (October 2022; April 2025). Six people filled most of the counter (October 2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Across from the Imperial Palace — Marutamachi',
    cuisine: 'Teppanyaki courses in a renovated machiya · chef’s recommended lunch course, 7 dishes, ¥5,500: seared Spanish mackerel and roast black wagyu, potage, sautéed soft roe and oysters, Caesar salad with home-grown vegetables, black wagyu fillet from the griddle, hashed beef, dessert (January 2026) · dinner: striped jack with myoga, roast beef, chilled potage, sea urchin, pike conger, abalone and mushrooms from the griddle, Miyazaki beef tenderloin served blue rare, garlic rice with hayashi rice offered too (October 2025) · the steak comes in two rounds so it stays hot, with salt, garlic chips, wasabi and soy sauce (December 2023, May 2024, March 2025, January 2026) · grilled sweet sea bream with its scales crisp (October 2022, July 2024) · rice to finish chosen from garlic rice, omurice or hashed beef (October 2022) or hashed beef, tamago-kake gohan or garlic rice (May 2024) · seasonal desserts: poached peach (July 2024), chestnut crème brûlée (March 2025)',
    website: null, gmaps: gm('富小路 RAKU 鉄板焼 京都 桝屋町337'), menu_url: TB,
    notes: '[Teppanyaki · Marutamachi] A teppanyaki restaurant in a renovated machiya with a latticed front, across from the Kyoto Imperial Palace: wagyu fillet cooked at a second-floor counter and served in two rounds to stay hot, fish and Kyoto vegetables from the griddle, hashed beef or garlic rice to finish. Lunch course ¥5,500 (January 2026). Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews: a teppanyaki restaurant in a renovated traditional machiya (July 2024, January 2026) with kōshi latticework on the front, facing the Kyoto Imperial Palace next to the courthouse (October 2025). The chef cooks in front of the counter guests and tells stories that kept a July 2024 diner laughing; staff ask guests about preferences and timing (December 2023).',
      philosophy: null, specialty: 'Wagyu fillet from the griddle, served in two rounds; requests for favourite ingredients made in advance are worked into the course (June 2024).',
      anecdotes: [
        { text: 'A December 2022 diner celebrating a friend’s birthday was given a birthday plate and flowers; a March 2025 birthday diner was also given flowers.', source: R + 'B458698248/' },
        { text: 'An October 2025 party of three couples took almost the whole second-floor counter; at night the palace across the street could not be seen, so the reviewer planned to come back for lunch.', source: R + 'B516004818/' },
      ],
      japanese_sources_summary: '食べログ: 富小路 RAKU、鉄板焼・肉料理、中京区桝屋町337、丸太町駅から516m、ランチ 12:00〜13:30・ディナー 17:30〜21:00、水曜休み、予約可、カード (AMEX)、個室あり、貸切可、禁煙、駐車場なし。口コミ (2022年6月〜2026年1月、英語): 京都御所の向かい、裁判所の隣、格子の町家を改装、2階のL字カウンターで目の前で焼く、1階に個室、肉は温かいうちに2回に分けて出す、塩・ガーリックチップ・わさび・醤油で、シェフおまかせのランチコース7品5,500円 (2026年1月)、Miyazaki の牛ヒレ、甘鯛のうろこ焼き、締めはガーリックライス・オムライス・ハッシュドビーフなどから選ぶ、誕生日に花のサプライズ。',
      confidence: 'medium', sources: [TB, R + 'B455843414/', R + 'B458698248/', R + 'B484777285/', R + 'B487583992/', R + 'B491952027/', R + 'B502700502/', R + 'B503660393/', R + 'B504239065/', R + 'B516004818/', R + 'B520537699/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course meal at the counter or in a private room; cards accepted. Tabelog warns that phone service may be in Japanese only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区桝屋町337',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.017298, 135.765132); about 8 m from 富小路 信 (kyoto_tominokoji_shin, same lot number 桝屋町337); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520537699/', R + 'B516004818/', R + 'B484777285/'],
    price_note: 'Only the January 2026 lunch course price is quoted; dinner spend was ¥10,000–14,999 a head for July 2024 and October 2025 reviewers.', last_checked: TODAY, items: [
      it('', '', 'Chef’s recommended lunch course (7 dishes)', '¥5,500', 'Course', 'ask', 'no', 'January 2026; reserved ahead.', 'lunch_course'),
      it('', '', 'Black wagyu fillet teppanyaki', '', 'Course', 'ask', 'no', 'Served in two rounds; 2023–26.', 'wagyu_fillet'),
      it('', '', 'Hashed beef (rice to finish)', '', 'Course', 'no', 'no', '2024–26.', 'hashed_beef'),
      it('', '', 'Garlic rice (rice to finish)', '', 'Course', 'ask', 'no', '2022–25.', 'garlic_rice'),
    ] }, {
    cuisine: '町家を改装した鉄板焼のコース・シェフおすすめのランチコース7品5,500円: 鰆の炙りと黒毛和牛のロースト、ポタージュ、白子と牡蠣のソテー、自家栽培の野菜のシーザーサラダ、黒毛和牛ヒレの鉄板焼、ハッシュドビーフ、デザート (2026年1月)・夜: 縞鯵と茗荷、ローストビーフ、冷製ポタージュ、うに・鱧・鮑・きのこの鉄板焼、Miyazaki の牛ヒレをブルーレアで、ガーリックライスとハヤシライス (2025年10月)・ステーキは熱いうちに2回に分けて、塩・ガーリックチップ・わさび・醤油で (2023年12月、2024年5月、2025年3月、2026年1月)・うろこをパリッと焼いた甘鯛 (2022年10月、2024年7月)・締めはガーリックライス、オムライス、ハッシュドビーフから (2022年10月)、またはハッシュドビーフ、卵かけご飯、ガーリックライスから (2024年5月)・季節のデザート: 桃のコンポート (2024年7月)、栗のクレームブリュレ (2025年3月)',
    neighborhood: '京都御所の向かい。丸太町',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。ステーキは塩・ガーリックチップ・わさび・醤油で食べるが、コースにはハッシュドビーフ、シーザーサラダ、スープもある (2024〜2026年の口コミ)。事前に伝えた希望をコースに取り入れてくれる (2022年10月、2024年6月) ので、予約時に相談を。',
    vegan_detail: 'ヴィーガン不可。和牛、ローストビーフ、魚介が中心のコース (2022〜2026年の口コミ)。',
    notes: '[鉄板焼・丸太町] 京都御所の向かい、格子の町家を改装した鉄板焼。2階のカウンターで焼く和牛ヒレは熱いうちに2回に分けて、魚と京野菜の鉄板焼、締めはハッシュドビーフかガーリックライス。ランチコース5,500円 (2026年1月)。水曜休み。',
  });
}

// ================================================================ いっこん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26002846/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://www.hotpepper.jp/strJ003516528/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_ikkon_oike', name: 'いっこん', category: 'OMNI',
    lat: 35.011219, lng: 135.75399, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Kushikatsu is battered and fried (Hot Pepper; 2023–24 reviews); obanzai, oden and nikujaga are simmered dishes whose seasonings are not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-simmered vegetables (June 2023), nikujaga, oden, yakitori and tsukune. Tabelog’s official information ticks “vegetarian options”; ask what can be made.',
    hours_raw: 'Tue–Sun 17:00–24:00; closed Monday (Tabelog). Hot Pepper gives the same hours with last orders at 23:00 for food and 23:30 for drinks. Reservations taken (Tabelog); a March 2024 same-day booking was not ready on arrival, but a free table was found. Cards (VISA, Master, JCB) and QR (PayPay, d Barai, Rakuten Pay); no e-money (Tabelog). 25 seats: counter 8, three tables for 4, one private room for 6–8 (Tabelog; Hot Pepper gives 24 seats with a 6-seat counter); private hire for 20–50; smoking in the private room on request (Tabelog). English and Chinese menus with photos; children welcome, kids’ menu, strollers OK; wheelchair access (Tabelog official information). 1F of Royal Plaza, 2 minutes from Nijojo-mae Station. Opened 9 March 2003 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oike — near Nijojo-mae Station',
    cuisine: 'Home-style izakaya of obanzai, oden, yakitori and kushikatsu · “the world’s best nikujaga” ¥1,078, limited each day (Hot Pepper; praised in November and December 2023 and December 2025) · assorted seasonal obanzai ¥1,430, taro karaage ¥858, kushikatsu from ¥275 a stick, yakitori from ¥418 for two, original temari sushi ¥1,980 by advance order, course ¥4,500 (Hot Pepper, read 2026-11-26) · shiso rolls (November 2023, December 2025), tsukune and ginkgo nuts, chazuke to finish (December 2023) · dashimaki tamago (November 2024) · boiled vegetables in dashi, highball, Kurokirishima shochu on the rocks (June 2023) · sake and shochu are a speciality (Tabelog)',
    website: null, gmaps: gm('いっこん 京都 御池 ロイヤルプラザ'), menu_url: HP,
    notes: '[Izakaya · Oike] A cosy, couple-run izakaya by Nijojo-mae Station, open until midnight: seasonal obanzai, oden, kushikatsu, yakitori and a nikujaga the shop calls the world’s best. English menu; private room; children welcome. The shop says the owner’s fortune-telling is popular too. Closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened on 9 March 2003 (Tabelog). Run by a husband-and-wife couple (November and December 2023 reviews); a Hot Pepper reviewer describes a quiet, craftsmanlike husband cooking and a talkative okami explaining the dishes. A November 2024 reviewer praised the beautiful owner’s kind, attentive service. The shop’s own Tabelog text says the owner’s fortune-telling is popular, and that local obanzai can be ordered for shipping.',
      philosophy: null, specialty: 'Obanzai, oden and nikujaga.',
      anecdotes: [
        { text: 'A November 2023 diner thanked the chef and the okami for staying open late, to a soundtrack of 1980s pop.', source: R + 'B474805646/' },
        { text: 'A November 2023 reviewer said it felt like a grandmother’s home cooking, and noted the private room makes it easy with children.', source: R + 'B474929462/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): いっこん、和食・居酒屋、中京区御池小川西入ル ロイヤルプラザ御池 1F、二条城前駅から徒歩2分、火〜日 17:00〜24:00、月曜休み、予約可、25席 (カウンター8、テーブル4名×3、個室6〜8名×1)、貸切20〜50名、個室は希望で喫煙可、カード・QR可、電子マネー不可、英語・中国語メニュー、写真付きメニュー、子供可・お子様メニュー、車椅子可、日本酒・焼酎にこだわり、ベジタリアンメニューあり、オーナーの占いも人気、おばんざいの発送も受け付け、2003年3月9日オープン。ホットペッパー: いっこん 京都烏丸御池、御池通下古城町398ロイヤルプラザ1F、料理L.O. 23:00・ドリンクL.O. 23:30、24席、世界一の肉じゃが1,078円、おばんざい盛り合わせ1,430円、里芋の唐揚858円、串カツ1本275円〜、焼き鳥2本418円〜、事前予約のオリジナル手毬寿司1,980円、コース4,500円、寡黙な職人肌のご主人と饒舌なおかみさんという口コミ。口コミ (2023年6月〜2026年8月、英語): 夫婦で営む、おでん、肉じゃが、しそ巻き、だし巻き、串カツの油が重かったという声 (2023年11月)、当日予約の席が用意されていなかった (2024年3月)。',
      confidence: 'medium', sources: [TB, HP, R + 'B467727092/', R + 'B474805646/', R + 'B474929462/', R + 'B474959806/', R + 'B476011046/', R + 'B482279979/', R + 'B482644952/', R + 'B495077162/', R + 'B496642748/', R + 'B520055830/', R + 'B533313689/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English and Chinese menus with photos (Tabelog official information; Hot Pepper). No evidence of spoken English.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区御池小川西入ル ロイヤルプラザ御池 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with official (corporate-member) information; Hot Pepper page live; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.011269, 135.753990), moved about 6 m south: 御蕎麦 京吉美 (kyoto_osoba_kyoshimi_nijojo) is on the same floor of the same building (ロイヤルプラザ御池 1F, 下古城町398) 4.6 m away; not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [HP],
    price_note: 'Hot Pepper page prices, tax included (read 2026-11-26; the page gives no date).', last_checked: TODAY, items: [
      it('いっこん名物！世界一の肉じゃが', '', 'Nikujaga (“the world’s best”, house speciality)', '¥1,078', 'Dishes', 'ask', 'no', 'Limited number.', 'nikujaga'),
      it('おばんざい盛り合わせ', '', 'Assorted seasonal obanzai', '¥1,430', 'Dishes', 'ask', 'no', '', 'obanzai'),
      it('里芋の唐揚', '', 'Fried taro', '¥858', 'Dishes', 'ask', 'ask', '', 'taro_karaage'),
      it('串カツ', '', 'Kushikatsu', 'from ¥275', 'Skewers', 'no', 'no', 'Per stick.', 'kushikatsu'),
      it('焼き鳥', '', 'Yakitori (2 sticks)', 'from ¥418', 'Skewers', 'ask', 'no', '', 'yakitori'),
      it('オリジナル手毬寿司', '', 'Temari sushi', '¥1,980', 'Dishes', 'ask', 'no', 'Advance order only.', 'temari'),
      it('', '', 'Course', '¥4,500', 'Course', 'ask', 'no', 'Contents vary with what is in season.', 'course'),
    ] }, {
    cuisine: 'おばんざい、おでん、焼き鳥、串カツの家庭的な居酒屋・数量限定の「世界一の肉じゃが」1,078円 (ホットペッパー。2023年11月・12月、2025年12月の口コミでも好評)・おばんざい盛り合わせ1,430円、里芋の唐揚858円、串カツ1本275円〜、焼き鳥2本418円〜、事前予約のオリジナル手毬寿司1,980円、コース4,500円 (ホットペッパー、2026年11月26日閲覧)・しそ巻き (2023年11月、2025年12月)、つくねと銀杏、締めのお茶漬け (2023年12月)・だし巻き (2024年11月)・野菜のだし煮、ハイボール、Kurokirishima のロック (2023年6月)・日本酒と焼酎にこだわり (食べログ)',
    neighborhood: '御池。二条城前駅のそば',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。串カツは衣をつけて揚げる (ホットペッパー、2023〜2024年の口コミ)。おばんざい、おでん、肉じゃがの調味料は記載なし。',
    vegan_detail: 'ヴィーガン不可。野菜のだし煮 (2023年6月)、肉じゃが、おでん、焼き鳥、つくね。食べログの公式情報に「ベジタリアンメニューあり」。対応できる品は要確認。',
    notes: '[居酒屋・御池] 二条城前駅のそば、夫婦で営む深夜0時までの居心地のよい居酒屋。旬のおばんざい、おでん、串カツ、焼き鳥、店が「世界一」とうたう肉じゃが。英語メニュー、個室あり、子供可。オーナーの占いも人気と店が紹介。月曜休み。',
  });
}

// ================================================================ CHINA TONGUE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040112/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://www.leafkyoto.net/en/?p=133641';
  const B = ['08:00', '10:00'], BT = ['07:30', '11:00'], L = ['12:00', '15:00'], D = ['17:30', '21:00'];
  const H = day(B, L, D), HT = day(BT, L, D);
  put({
    id: 'kyoto_china_tongue', name: 'CHINA TONGUE', category: 'MOM_AND_POP',
    lat: 35.014998, lng: 135.757902, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Congee, rice noodles and Hainan chicken rice are on the menu, but sauces and broths are not described, and wonton noodles, dumplings and shumai are wheat (2024–25 sources).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef brisket in beef broth, shrimp wontons, char siu, mapo tofu with minced meat, chicken dishes (2024–25 sources). Stir-fried water spinach appears with squid (July 2025).',
    hours_raw: 'Tabelog: Mon and Wed–Sat 8:00–10:00, 12:00–15:00 and 17:30–21:00; Tue 7:30–11:00, 12:00–15:00 and 17:30–21:00; closed Sunday. Leaf Kyoto (May 2024) gave lunch 12:00–15:00 (last order 14:30), dinner 17:30–20:30 (last order) and irregular closing days. Reservations taken (Tabelog); a weekday 17:30 booking found the room empty (October 2025). A short queue before noon (May 2025); about 80% full at Saturday noon (April 2025). One person runs the room and kitchen, so order everything at once (October 2025); June and July 2025 reviewers also saw one person working alone, while a May 2025 reviewer saw a staff member besides the owner. Cards; no e-money or QR; non-smoking; private hire (Tabelog). 5 minutes’ walk from Marutamachi Station. Opened 30 August 2023 (Tabelog; Leaf Kyoto).',
    hours: { 0: H, 1: HT, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Marutamachi Station — Karasuma',
    cuisine: 'Hong Kong-style all-day Chinese dining (Leaf Kyoto, 2024) · Hong Kong congee with dried scallops ¥800, firefly squid topping ¥600, dim sum (boiled dumplings, shumai) and honey char siu (Leaf Kyoto, May 2024); congee simmered over seven hours (May 2025) · beef brisket rice noodle soup in beef broth ¥1,200 (March 2025), shrimp wonton and beef brisket noodle soup with thin noodles or rice noodles (April and May 2025), shrimp wonton noodles ¥1,000 (September 2025) · lunch sets ¥1,200 incl. bang bang chicken and cumin-fried chicken hearts with eggplant (June 2025); by November 2025 five sets at ¥1,500: dan dan noodles or mapo tofu with yodare chicken and rice, beef noodles with lu rou fan, wonton noodles with cold ginger chicken, Hainan chicken rice · dinner from a blackboard: roast beef in chili oil sauce, water spinach and spear squid, truffle shumai with morels, black pork mapo tofu, oyster fried noodles, XO fried rice, white wine by the glass (July 2025)',
    website: null, gmaps: gm('CHINA TONGUE 京都 中京区 鏡屋町51-1'), menu_url: TB,
    notes: '[Hong Kong Chinese · Marutamachi] A small Hong Kong-style all-day restaurant by Marutamachi Station, run by owner-chef Hironori Sano (often single-handed in 2025), formerly executive chef for a Hong Kong restaurant group: scallop congee, wonton and beef brisket noodles, lunch sets with mapo tofu or yodare chicken, a blackboard menu with wine at night. Closed Sunday.',
    chef_bio: { chef_name: 'Hironori Sano', roles: ['Owner-chef'], origin: null,
      background: 'Per Leaf Kyoto (May 2024): owner Hironori Sano was executive chef at a hotel in Cambodia, then executive chef for a restaurant group in Hong Kong for five years, and opened CHINA TONGUE on 30 August 2023. June, July and October 2025 reviewers saw one person cooking and serving alone; a May 2025 reviewer saw a staff member as well. A March 2025 reviewer came because of a sister restaurant (named Xiao Xiao in the translated review).',
      philosophy: null, specialty: 'Hong Kong congee with dried scallops, wonton and beef brisket noodles.',
      anecdotes: [
        { text: 'A July 2025 party of three, alone in the dim evening room, settled seven dishes with the owner by portion size; the owner recommended the oyster fried noodles and XO fried rice as drinking food.', source: R + 'B510648860/' },
        { text: 'A May 2025 reviewer heard the owner answer loudly and sharply when other diners asked for more time to order, and the water refill never came; April and May 2025 reviewers found the broth very salty, and an October 2025 one found the prices high and the staff intimidating.', source: R + 'B506523650/' },
        { text: 'A June 2025 diner called the bang bang chicken the best ever, so tender that the reviewer wondered if it was cooked through.', source: R + 'B508565123/' },
      ],
      japanese_sources_summary: '食べログ: CHINA TONGUE、中華料理、中京区鏡屋町51-1、地下鉄丸太町駅から徒歩5分、月曜・水曜〜土曜 8:00〜10:00・12:00〜15:00・17:30〜21:00、火曜 7:30〜11:00・12:00〜15:00・17:30〜21:00、日曜休み、予約可、カード可、電子マネー・QR不可、禁煙、貸切可、2023年8月30日オープン。Leaf Kyoto (2024年5月、英語版): CHINA TONGUE (チャイナ タン)、香港スタイルのオールデイダイニング、オーナーの Hironori Sano はカンボジアのホテルの総料理長、香港のレストラングループで5年総料理長、干し貝柱の香港粥800円、ほたるいかのトッピング600円、点心、蜜汁チャーシュー。口コミ (2025年3月〜11月、英語): 牛バラ肉の米麺1,200円、海老ワンタン麺1,000円、ランチ1,500円の5種、黒板の夜のメニュー、一人で営業、スープの塩気が強いという声、店主の対応への不満の声。',
      confidence: 'medium', sources: [TB, LEAF, R + 'B503750761/', R + 'B504361802/', R + 'B505522580/', R + 'B506523650/', R + 'B508026462/', R + 'B508565123/', R + 'B509291693/', R + 'B510648860/', R + 'B514164328/', R + 'B515179546/', R + 'B515848661/', R + 'B517113049/', R + 'B517683208/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table from a menu and a wall blackboard; cards accepted. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区鏡屋町51-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; Leaf Kyoto article (May 2024); reviews dated through November 2025.' },
    pin_source: `Tabelog ${TB} (35.014998, 135.757902); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LEAF, R + 'B503750761/', R + 'B514164328/', R + 'B517113049/'],
    price_note: 'Leaf Kyoto (May 2024) and 2025 review prices; the lunch sets changed during 2025.', last_checked: TODAY, items: [
      it('', '', 'Hong Kong congee with dried scallops', '¥800', 'Congee', 'ask', 'no', 'Leaf Kyoto, May 2024; firefly squid topping ¥600.', 'congee'),
      it('', '', 'Beef brisket rice noodle soup', '¥1,200', 'Noodles', 'ask', 'no', 'March 2025.', 'brisket_rice_noodles'),
      it('', '', 'Shrimp wonton noodles', '¥1,000', 'Noodles', 'no', 'no', 'September 2025.', 'wonton_noodles'),
      it('', '', 'Lunch set B: mapo tofu, yodare chicken, rice', '¥1,500', 'Lunch', 'ask', 'no', 'November 2025; five sets at the same price.', 'lunch_mapo'),
      it('', '', 'Lunch set E: Hainan chicken rice', '¥1,500', 'Lunch', 'ask', 'no', 'November 2025.', 'hainan_chicken'),
    ] }, {
    cuisine: '香港スタイルのオールデイダイニング (Leaf Kyoto、2024年)・干し貝柱の香港粥800円、ほたるいかのトッピング600円、点心 (水餃子、焼売)、蜜汁チャーシュー (Leaf Kyoto、2024年5月)。粥は7時間以上煮込む (2025年5月)・牛だしの牛バラ肉の米麺1,200円 (2025年3月)、細麺か米麺の海老ワンタンと牛バラ肉の麺 (2025年4月・5月)、海老ワンタン麺1,000円 (2025年9月)・ランチ1,200円: 棒棒鶏、鶏ハツとなすのクミン炒めなど (2025年6月)。2025年11月は5種とも1,500円: 担々麺か麻婆豆腐によだれ鶏とご飯、牛肉麺と魯肉飯、ワンタン麺と生姜の冷たい鶏、海南チキンライス・夜は黒板のメニュー: ローストビーフのラー油ソース、空心菜とやりいかの炒め、モリーユ茸のトリュフ焼売、黒豚の麻婆豆腐、牡蠣の焼きそば、XO醤のチャーハン、グラスの白ワイン (2025年7月)',
    neighborhood: '丸太町駅のそば。烏丸',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。粥、米麺、海南チキンライスもあるが、ソースやスープの記載はなく、ワンタン麺、餃子、焼売は小麦 (2024〜2025年の資料)。',
    vegan_detail: 'ヴィーガン不可。牛だしの牛バラ肉、海老ワンタン、チャーシュー、ひき肉の麻婆豆腐、鶏料理 (2024〜2025年の資料)。空心菜はいかと炒める (2025年7月)。',
    notes: '[香港中華・丸太町] 丸太町駅のそば、香港のレストラングループで総料理長を務めたオーナーシェフ Hironori Sano の (2025年の口コミでは一人で切り盛りすることが多い)、香港スタイルのオールデイダイニング。干し貝柱の粥、海老ワンタンと牛バラ肉の麺、麻婆豆腐やよだれ鶏のランチ、夜は黒板のメニューとワイン。日曜休み。',
  });
}

// ================================================================ 料理・ワイン イバラキ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034694/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ibarakikyoto.localinfo.jp/'; const MENU = SITE + 'pages/4141404/menu'; const PROF = SITE + 'pages/4141403/page_201707061749';
  const L = ['11:30', '14:30'], D = ['17:30', '23:00'];
  const WD = day(L, D), SAT = day(D);
  put({
    id: 'kyoto_ryori_wine_ibaraki', name: '料理・ワイン イバラキ', category: 'OMNI',
    lat: 35.017294, lng: 135.762154, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Lunch is wheat noodles (Chinese noodles with roasted bran, own site) and dumplings; dinner has carpaccio, confit, grilled lamb and tartare alongside pasta, fried shrimp and fried pike conger (2024–26 reviews). Seasonings are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, duck and pork in the noodle bowls, bonito flakes on top (2024–26 reviews); meat, fish and pâté at dinner. The tantanmen is made with white miso and soy milk (own site), but its broth and toppings are not stated.',
    hours_raw: 'Tabelog: Mon–Fri lunch 11:30–14:30 (last order 14:00) and dinner 17:30–23:00 (last order 22:00); Sat dinner only; closed Sunday. The shop’s site: lunch Monday to Friday only, closed weekends and public holidays, until 20 bowls sell out; dinner last order 22:00, close 23:00; closed Sunday plus irregular days. Reservations taken (Tabelog); few seats, so book (July 2026). 26 seats (Tabelog); the site says the ground floor has two counters with 7 seats in all and two tables for up to 7, and the second floor is for private hire only, 4 to 8 people; Tabelog says a private room needs 4 or more on a course of ¥5,000 or more. Cards and QR; no e-money; non-smoking (Tabelog). Opened 16 September 2020 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Marutamachi — across from the Imperial Palace',
    cuisine: 'French and Italian home cooking and old-style yoshoku with a Kyoto touch, with wine, in a machiya (own site); Chinese soba at weekday lunch · lunch (own site): chicken white soba ¥1,000, duck loin black soba ¥1,100, white miso and soy milk tantanmen ¥1,100, shrimp water dumplings ¥780, steamed chicken ¥980, rice ¥200, extra noodles ¥200; noodles of domestic wheat with roasted bran · the white bowl with chicken breast confit, “Mikawa white tamari” and “Thunder noodles”, set with three water dumplings, pickled mustard greens and rice +¥300 (October 2024); the black bowl ¥1,000 with three thick slices of duck, shiitake and bonito in the broth (February 2025); dan dan noodles and curry (January 2025); a July 2026 reviewer had thin noodles with chashu in a clear dashi broth · dinner à la carte from ¥500, glass of wine from ¥800, bottles from ¥5,500 (own site): horse meat and grilled eggplant tartare, pâté de campagne, Omi beef hamburg steak with demi-glace, firefly squid and kale, chicken thigh confit, omurice (May 2024) · fried shrimp ¥1,200 for three with tartar sauce, garlic butter clams (November 2025) · kinki carpaccio, potato salad ¥600, whelk with herb butter, Gorgonzola pasta (February 2026) · chilled peach soup, carrot râpée, fried pike conger, grilled lamb (July 2026) · sanma confit ¥1,600, steamed chicken with sansho sauce ¥900, fried pike conger ¥1,600, duck with orange sauce ¥2,800 (September 2026)',
    website: SITE, gmaps: gm('料理・ワイン イバラキ 京都 丸太町'), menu_url: MENU,
    notes: '[Wine dining · Marutamachi] A machiya on Marutamachi facing the Kyoto Imperial Palace: weekday lunch is Japanese-style Chinese soba in a clear bonito and shiitake broth (white, black or tantanmen, 20 bowls a day); evenings are French and Italian home cooking and yoshoku with wine, in large plates to share. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened on 16 September 2020 (Tabelog). The shop’s site describes French and Italian home cooking and old-style yoshoku with a Kyoto touch, for guests who want to enjoy the ingredients with wine, in a machiya across from the Imperial Palace. A May 2024 reviewer reports the owner-chef saying the aim is not a multicultural menu but deliciousness in every dish. One person was working the lunch service in February 2025.',
      philosophy: 'Simple dishes that let the ingredients speak, with wine (own site).', specialty: 'Lunch Chinese soba; fried pike conger and fried shrimp with tartar sauce; dishes for wine.',
      anecdotes: [
        { text: 'A February 2026 pair found a painting of a cat village on the wall, ate carpaccio, salads, whelk and Gorgonzola pasta and spent under ¥10,000 for two.', source: R + 'B494670856/' },
        { text: 'In September 2026 several wines on the list were out of stock, and the staff suggested alternatives in the same price range.', source: R + 'B536875126/' },
      ],
      japanese_sources_summary: '公式サイト: 料理・ワイン イバラキ、京都御所の向かい、丸太町に面する町家、フレンチ・イタリアンの家庭料理や昔ながらの洋食に京都のエッセンス、1階はカウンター計7席とテーブル2つ、2階は貸切限定4〜8名、ランチは月曜〜金曜 (土日・祝日休み) 11:30〜14:00 L.O.・14:30閉店、売り切れ次第終了、3種の中華蕎麦 (鶏の白蕎麦1,000円、鴨ロース黒蕎麦1,100円、白味噌豆乳坦々麺1,100円)、海老水餃子780円、蒸し鶏980円、白ごはん200円、替え玉200円、麺は国産の焙煎フスマ入りの中華麺、ディナー17:30〜22:00 L.O.・23:00閉店、アラカルト500円から、グラスワイン800円〜、ボトルワイン5,500円〜、日曜定休・不定休あり。食べログ: ダイニングバー・日本料理・フレンチ、中京区丸太町通高倉西入坂本町701、26席、個室は4名以上で5,000円以上のコース、2020年9月16日オープン。口コミ (2022年6月〜2026年9月、英語): 白と黒の中華そば、鴨ロース、かつお節としいたけのだし、鱧のフライ、海老フライ1,200円、馬肉のタルタル、パテ・ド・カンパーニュ、Omi の牛肉のハンバーグ、猫の村の絵。',
      confidence: 'medium', sources: [SITE, MENU, PROF, TB, R + 'B484369244/', R + 'B487766131/', R + 'B494670856/', R + 'B498806302/', R + 'B502496912/', R + 'B517252763/', R + 'B523232686/', R + 'B536875126/', R + 'B536879806/', R + 'B537740752/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the menu at counter or table; cards and QR accepted. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区丸太町通高倉西入坂本町701',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site (menu and profile pages live); Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.017294, 135.762154); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B517252763/', R + 'B536875126/'],
    price_note: 'Lunch and drink prices from the shop’s site (undated, read 2026-11-26); dinner prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('鶏の白蕎麦', '', 'Chicken white soba (Chinese soba)', '¥1,000', 'Lunch', 'no', 'no', 'Weekday lunch; own site.', 'white_soba'),
      it('鴨ロース黒蕎麦', '', 'Duck loin black soba (Chinese soba)', '¥1,100', 'Lunch', 'no', 'no', 'Weekday lunch; own site.', 'black_soba'),
      it('白味噌豆乳坦々麺', '', 'White miso and soy milk tantanmen', '¥1,100', 'Lunch', 'no', 'ask', 'Weekday lunch; own site.', 'tantanmen'),
      it('海老水餃子', '', 'Shrimp water dumplings', '¥780', 'Lunch', 'no', 'no', 'Own site.', 'shrimp_dumplings'),
      it('', '', 'Fried shrimp with tartar sauce (3)', '¥1,200', 'Dinner', 'no', 'no', 'November 2025.', 'fried_shrimp'),
      it('', '', 'Fried pike conger', '¥1,600', 'Dinner', 'no', 'no', 'September 2026.', 'fried_hamo'),
      it('', '', 'Duck with orange sauce', '¥2,800', 'Dinner', 'ask', 'no', 'September 2026.', 'duck_orange'),
      it('', '', 'Potato salad', '¥600', 'Dinner', 'ask', 'no', 'February 2026.', 'potato_salad'),
    ] }, {
    cuisine: '町家で京都のエッセンスを加えたフレンチ・イタリアンの家庭料理や昔ながらの洋食とワイン (公式サイト)。平日の昼は中華蕎麦・ランチ (公式サイト): 鶏の白蕎麦1,000円、鴨ロース黒蕎麦1,100円、白味噌豆乳坦々麺1,100円、海老水餃子780円、蒸し鶏980円、白ごはん200円、替え玉200円。麺は国産の焙煎フスマ入りの中華麺・白は鶏むね肉のコンフィ、「Mikawa white tamari」、「Thunder noodles」、水餃子3個と漬物とご飯のセットは300円増し (2024年10月)。黒は1,000円で厚切りの鴨3枚、しいたけとかつお節のだし (2025年2月)。担々麺とカレー (2025年1月)。2026年7月の口コミでは細麺とチャーシュー、澄んだだし・夜はアラカルト500円から、グラスワイン800円〜、ボトル5,500円〜 (公式サイト): 馬肉と焼きなすのタルタル、パテ・ド・カンパーニュ、Omi の牛肉のハンバーグ デミグラスソース、ほたるいかとケールのソテー、若鶏もものコンフィ、オムライス (2024年5月)・海老フライ3本1,200円とタルタルソース、あさりのガーリックバター (2025年11月)・キンキのカルパッチョ、ポテトサラダ600円、つぶ貝のハーブバター、ゴルゴンゾーラのパスタ (2026年2月)・冷たい桃のスープ、キャロットラペ、鱧のフライ、羊のグリル (2026年7月)・さんまのコンフィ1,600円、蒸し鶏の山椒ソース900円、鱧のフライ1,600円、鴨のオレンジソース2,800円 (2026年9月)',
    neighborhood: '丸太町。京都御所の向かい',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。昼は小麦の麺 (焙煎フスマ入りの中華麺、公式サイト) と水餃子。夜はカルパッチョ、コンフィ、羊のグリル、タルタルのほか、パスタ、海老フライ、鱧のフライも (2024〜2026年の口コミ)。調味料の記載なし。',
    vegan_detail: 'ヴィーガン不可。中華蕎麦に鶏、鴨、豚、かつお節 (2024〜2026年の口コミ)。夜は肉、魚、パテ。坦々麺は白味噌と豆乳 (公式サイト) だが、スープと具は記載なし。',
    notes: '[ワインと料理・丸太町] 京都御所に向かう丸太町通の町家。平日の昼はかつお節としいたけの澄んだだしの中華蕎麦 (白、黒、坦々麺。1日20杯)、夜はフレンチ・イタリアンの家庭料理や洋食をワインと、大皿で分け合って。日曜休み。',
  });
}

// ================================================================ skips (nearer than the drafts in this lane)
skip('26040040', 'no reviews: □□□ん家 (Tabelog name as crawled; izakaya, 二条西洞院町) had 0 Tabelog reviews at the 2026-11-02 crawl — nothing to verify (https://tabelog.com/en/kyoto/A2601/A260202/26040040/).');
skip('26031328', 'chain: 丸太町東洋亭 is one of the 東洋亭 shops (the 2026-11-06 Tabelog name search in skip 26004938 lists twelve in Kyoto and Osaka, Marutamachi among them; skips 26007378 and 26004540 list 丸太町 among six グリルキャピタル東洋亭 shops) (https://tabelog.com/en/kyoto/A2601/A260302/26031328/).');
skip('26021458', 'no reviews: だいや旅館 (ryokan) had 0 Tabelog reviews at the 2026-11-02 crawl; no eat-in for non-guests sourced (https://tabelog.com/en/kyoto/A2601/A260101/26021458/).');
skip('26002144', 'no 2025–26 review: soul sonic boogie D’ (bar) has three Tabelog reviews, visited October 2008, March 2021 and May 2023 (fetched 2026-11-26) (https://tabelog.com/en/kyoto/A2601/A260302/26002144/).');

save();
