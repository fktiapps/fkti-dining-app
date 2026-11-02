// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 15.
//   + 森乃園 Morinoen (tea shop selling one hojicha soft serve; Tabelog Ice cream 100 2026)
//   + とり鈴 Tori Suzu (charcoal yakitori izakaya since 2006, sake and course plans)
//   + 洋食 小春軒 Yoshoku Koharuken (yoshoku since 1912, the egg-less katsudon; Tabelog Yoshoku 100 2020, 2022)
//   + on your side (wine bistro with weekly lunch sets; since 2021)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02): the first four,
//   166, 167, 167 and 177 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address (2-4-9, 2-9-10, 1-7-9, 2-10-11). tokyo_toriyu_formerly_torisuzu
//   (鳥祐, formerly 鳥鈴) is a different shop in Shibuya (35.656, 139.705).
//   Chain check: all four are single shops in the sources.
//   on your side: the Tabelog invoice number (T1010001257422) is a corporate registration, so no owner name comes from it.
//   Omitted under the brief's abuse line: one July 2025 on your side reviewer's remark on a staff member's looks.
//   Morinoen's website (morinoen.com) answered HTTP 429 twice on 2026-11-02; not used.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 森乃園
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13041947/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://morinoen.com/';
  const H = day(['10:00', '19:00']);
  put({
    id: 'tokyo_morinoen_ningyocho', name: '森乃園 (Morinoen)', category: 'OMNI',
    lat: 35.685368, lng: 139.783642, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soft serve comes in a cup or a cone, and the monaka shells are wafer; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: milk soft serve.',
    hours_raw: 'Daily 10:00–19:00 (1F tea sales and soft serve); closed only over the New Year (Tabelog). The upstairs sweet shop closed on 1 December 2024 (Tabelog). Soft serve is sold from a counter at the side of the shop, with outdoor benches for about eight as the eat-in space (October 2026). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, nanaco, WAON, iD and PayPay (Tabelog). No reservations.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-4-9, a tea shop opposite Yanagiya (October 2026) — 30 seconds from Ningyocho Stn exit A1 (Hibiya Line), 2 min from exit A3',
    cuisine: 'A tea shop\'s one soft serve: hojicha, from tea the shop roasts itself (October 2026), in a cup or cone ¥600 (September–October 2026) · with a monaka ¥800 — dog- or bear-shaped wafers filled with hojicha bean paste (October 2026) · an October 2026 diner had a matcha soft serve · loose tea and freshly brewed hojicha (October 2026)',
    website: SITE, gmaps: gm('森乃園 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Sweets · Ningyocho, the hojicha soft serve from a tea shop] A Ningyocho tea shop whose single soft serve, flavoured with its own roasted hojicha, made Tabelog's Ice cream 100 for 2026 (it was a Japanese-sweets 100 pick in 2023). The flavour is deep and toasty, with the sweetness kept low, and the portion is generous: ¥600 in a cup or cone, or ¥800 with a little dog- or bear-shaped monaka filled with hojicha bean paste. Order at the side counter and eat on the benches outside; the upstairs sweet shop closed in 2024. One October 2026 diner noticed a drain smell at the benches and ate while walking instead. Open daily.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A tea shop selling tea on the ground floor; its upstairs sweet shop closed on 1 December 2024 (Tabelog). Selected for Tabelog Japanese-sweets TOKYO 100 in 2023 and Ice cream and gelato 100 in 2026 (Tabelog). An October 2026 diner credits the flavour to fresh milk and self-roasted hojicha.',
      philosophy: null, specialty: 'Hojicha soft serve.',
      anecdotes: [
        { text: '"Upon entering from the front, I was told, \'Ice cream? You need to go to the side for that!\'" — October 2026.', source: R + 'B538023511/' },
        { text: '"The sweetness is kept to a minimum, allowing the hojicha flavor to shine through" — October 2026.', source: R + 'B537817691/' },
        { text: '"I accidentally dropped some on my white jeans, and it didn’t come out completely" — October 2026.', source: R + 'B537643573/' },
      ],
      japanese_sources_summary: '食べログ: 森乃園、ソフトクリーム、アイス・ジェラート百名店2026、和菓子・甘味処 TOKYO 百名店2023、日本橋人形町2-4-9、人形町駅A1出口から徒歩30秒、毎日10:00〜19:00 (1階のお茶の販売とソフトクリーム)、年末年始のみ休み、2階の甘味処は2024年12月1日に閉店、カード・電子マネー・PayPay可、ホームページ morinoen.com。口コミ(2026年9月〜10月): ほうじ茶ソフトクリーム600円、最中付き800円、カップかコーン、店の横の窓口で買う、外のベンチで食べられる、自家焙煎のほうじ茶、甘さ控えめ、量が多い、抹茶のソフトクリームという声も、ベンチのあたりで下水のにおいがしたという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B536237177/', R + 'B536596617/', R + 'B537047259/', R + 'B537643573/', R + 'B537817691/', R + 'B538023511/', R + 'B538145527/', R + 'B538260881/', R + 'B538332880/', R + 'B538340176/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One item; point and pay at the side counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-4-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685368, 139.783642); cross-checked: GSI 東京都中央区日本橋人形町二丁目4番9号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537643573/', R + 'B538145527/'],
    price_note: 'Prices from September–October 2026 reviews, tax included (the Tabelog menu lists ¥450, January 2025).', last_checked: TODAY, items: [
      it('ほうじ茶ソフトクリーム', 'hōjicha sofuto kurīmu', 'Hojicha soft serve (cup or cone)', '¥600', 'Soft serve', 'ask', 'no', 'September–October 2026.', 'hojicha_soft'),
      it('', '', 'Hojicha soft serve with monaka', '¥800', 'Soft serve', 'no', 'no', 'October 2026.', 'monaka'),
    ] }, {
    cuisine: 'お茶屋さんのソフトクリームはひとつ: 自家焙煎のほうじ茶 (2026年10月)、カップかコーンで600円 (2026年9月〜10月)・最中付き800円、ほうじ茶あんを入れた犬やくまの形の最中 (2026年10月)・2026年10月には抹茶のソフトクリームを食べたという声も・茶葉と淹れたてのほうじ茶 (2026年10月)',
    neighborhood: '日本橋人形町2-4-9、Yanagiya の向かいのお茶屋 (2026年10月)。人形町駅A1出口 (日比谷線) から徒歩30秒、A3出口から徒歩2分',
    gf_detail: '要確認。ソフトクリームはカップかコーンで、最中の皮もある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 牛乳のソフトクリーム。',
    notes: '[甘味・人形町、お茶屋さんのほうじ茶ソフトクリーム] 人形町のお茶屋で、自家焙煎のほうじ茶のソフトクリームひとつで2026年の食べログ アイス・ジェラート百名店に選ばれた (2023年には和菓子・甘味処の百名店)。味は深く香ばしく、甘さは控えめで量はたっぷり。カップかコーンで600円、ほうじ茶あんを入れた犬やくまの形の小さな最中付きは800円。店の横の窓口で頼み、外のベンチで食べる。2階の甘味処は2024年に閉店した。2026年10月にはベンチのあたりで下水のにおいがして、歩きながら食べたという声も。毎日営業。',
  });
}

// ================================================================ とり鈴
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13033186/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']); const SAT = day(['17:00', '22:00']);
  put({
    id: 'tokyo_tori_suzu_ningyocho', name: 'とり鈴 (Tori Suzu)', category: 'OMNI',
    lat: 35.685895, lng: 139.783973, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Most skewers are salt-seasoned (September 2026), but the liver comes with sauce (September 2025), and kara-age, satsuma-age and soba are on the menu; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori izakaya; vegetable skewers (shiitake, shishito, green onion) are on the menu.',
    hours_raw: 'Tue–Fri 17:00–23:00 (food last order 22:00, drinks 22:20); Sat and holidays 17:00–22:00 (last order 21:30); the day before a holiday 17:00–23:00; closed Mon and Sun — open on Mondays in December; from July to September opens at 17:30 (Tabelog). Reservations accepted. Table charge ¥440 (Tabelog). Cards, transport IC, iD, QUICPay, PayPay and d Barai (Tabelog). 20 seats: 9 downstairs, 11 upstairs; private rooms for 2–10 (Tabelog). Smoking area for heated tobacco only (Tabelog). Opened 3 March 2006 (Tabelog). Popular cuts can sell out by 20:00 (March 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-9-10 — 1 min from Ningyocho Stn exit A1, 5 min from Suitengumae Stn',
    cuisine: 'Charcoal yakitori of red-feathered chicken, mostly salt-seasoned, with an izakaya menu and sake (Tabelog; 2025–26 reviews) · skewers (Tabelog menu, November 2025): chicken with raw soy sauce ¥330, chicken ¥297, negima ¥297, liver ¥275, tsukune ¥297, gizzard, heart and skin ¥242, wing ¥352, neck and tail ¥275, tender with ume or wasabi ¥297, grilled egg ¥253 · grilled chicken with salt and sesame oil ¥715; chicken skin with ponzu ¥418; Satsuma chicken tataki ¥825; kara-age ¥748; freshly made yuba tofu ¥715; thick omelette ¥660 · to finish: Tori Suzu soba ¥605, Amami chicken rice ¥715, grilled rice ball ¥253 · courses: Standard ¥4,730 (6 dishes); all-you-can-drink plans ¥7,480 and ¥9,680 with Kyoto Benishidori chicken (Tabelog) · eel skewer as an add-on (December 2024, February 2025)',
    website: TB, gmaps: gm('とり鈴 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Ningyocho, a 20-year charcoal yakitori house with sake] A two-storey yakitori izakaya a minute from Ningyocho station, open since 2006, grilling red-feathered chicken over charcoal, mostly with salt. The grilled liver is the dish to order: rare inside with sauce (September 2025), or with salt and sesame oil as a half portion for solo diners, as one fifteen-year regular has it (September 2026). The rare chicken breast with wasabi also wins praise. Beyond the skewers there are sashimi, yuba tofu made that morning, and soba or Amami chicken rice to finish, with an unusual sake and shochu list. Upstairs has semi-private rooms, and all-you-can-drink courses make it a group favourite. Some diners found the rooms dim and in need of cleaning (December 2025, June 2026), and popular cuts can run out by 20:00. ¥440 table charge.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 3 March 2006 (Tabelog); the shop text celebrates 20 years of charcoal-grilled red-feathered chicken by skilled artisans (Tabelog). A diner has been coming for about 15 years (September 2026).',
      philosophy: null, specialty: 'Grilled liver; chicken with salt and sesame oil.',
      anecdotes: [
        { text: '"The liver was cooked to a perfect rare in the center, pairing excellently with the sauce—simply exquisite." — September 2025.', source: R + 'B513527934/' },
        { text: '"I always ask for a half portion, which is great for solo diners." — September 2026, on the grilled liver.', source: R + 'B7167056/' },
        { text: '"In reality, it feels a bit dark and somewhat dirty." — December 2025.', source: R + 'B519226530/' },
      ],
      japanese_sources_summary: '食べログ: とり鈴、焼き鳥、鶏料理、焼酎バー、日本橋人形町2-9-10、人形町駅A1出口から徒歩1分、火〜金17:00〜23:00、土・祝17:00〜22:00、祝前日17:00〜23:00、月・日休み (12月は月曜も営業、7〜9月は17:30から)、予約可、チャージ440円、カード・電子マネー・PayPay・d払い可、20席 (1階9、2階11)、個室、加熱式たばこのみの喫煙所、2006年3月3日オープン、炭火で焼く赤鶏、20周年、スタンダードコース4,730円、飲み放題付き7,480円と9,680円。口コミ(2024年9月〜2026年9月): 塩が中心の焼き鳥、レバーの塩ごま油焼き、ハーフも可、朝作った湯葉豆腐、刺身、うなぎ串の追加、日本酒と焼酎が多い、2階に半個室、店内が暗く清潔感に欠けるという声、人気の部位は20時に売り切れることも。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B492608755/', R + 'B498022446/', R + 'B500706564/', R + 'B513527934/', R + 'B514669698/', R + 'B519226530/', R + 'B524863631/', R + 'B529066663/', R + 'B530168210/', R + 'B7167056/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Long menu; courses bookable online via Tabelog; ¥440 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-9-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated 2025-11-17); reviews to September 2026.' },
    pin_source: `Tabelog ${TB} (35.685895, 139.783973); cross-checked: GSI 東京都中央区日本橋人形町二丁目9番10号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [TB + 'dtlmenu/', TB],
    price_note: 'Tabelog menu, tax included, last updated 2025-11-17; courses from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Grilled chicken liver', '¥275', 'Charcoal grilled', 'ask', 'no', 'Tabelog menu, 2025.', 'reba'),
      it('', '', 'Tsukune', '¥297', 'Charcoal grilled', 'ask', 'no', 'Tabelog menu, 2025.', 'tsukune'),
      it('', '', 'Chicken with raw soy sauce', '¥330', 'Charcoal grilled', 'no', 'no', 'Tabelog menu, 2025.', 'kijoyu'),
      it('', '', 'Grilled chicken with salt and sesame oil', '¥715', 'Recommended', 'ask', 'no', 'Tabelog menu, 2025.', 'shio_goma'),
      it('', '', 'Standard course (6 dishes)', '¥4,730', 'Courses', 'ask', 'no', 'Tabelog.', 'course_std'),
      it('', '', 'All-you-can-drink course', '¥7,480', 'Courses', 'ask', 'no', 'Tabelog; ¥9,680 with Kyoto Benishidori.', 'course_nomi'),
    ] }, {
    cuisine: '塩が中心の赤鶏の炭火焼き鳥、居酒屋のつまみと日本酒 (食べログ、2025〜26年の口コミ)・串 (食べログのメニュー、2025年11月): 生醤油焼き330円、かしわ297円、ねぎま297円、レバー275円、つくね297円、砂肝・ハツ・皮242円、手羽352円、せせり・ぼんじり275円、ささみの梅・わさび297円、焼き玉子253円・鶏の塩ごま油焼き715円、鶏皮ポン酢418円、さつま鶏のたたき825円、唐揚げ748円、今朝作った湯葉豆腐715円、厚焼き玉子660円・締め: とり鈴そば605円、Amami の鶏飯715円、焼きおにぎり253円・コース: スタンダード4,730円 (6品)、飲み放題付き7,480円と Kyoto Benishidori の9,680円 (食べログ)・追加でうなぎ串 (2024年12月、2025年2月)',
    neighborhood: '日本橋人形町2-9-10。人形町駅A1出口から徒歩1分、水天宮前駅から徒歩5分',
    gf_detail: '要確認。串は塩が中心 (2026年9月) だが、レバーはタレ (2025年9月)。唐揚げ、さつま揚げ、そばもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 鶏の焼き鳥の居酒屋。野菜の串 (椎茸、ししとう、ねぎ) もある。',
    notes: '[焼き鳥・人形町、日本酒の揃う20年の炭火焼き鳥] 人形町駅から1分の2階建ての焼き鳥居酒屋。2006年から赤鶏を炭火で、主に塩で焼く。頼むべきはレバーで、中がレアのタレ (2025年9月) か、15年通う客のように塩とごま油でひとり用のハーフに (2026年9月)。レアに焼いたささみのわさびも好評。串のほかに刺身、その朝作った湯葉豆腐、締めのそばや Amami の鶏飯、珍しい日本酒と焼酎がそろう。2階には半個室があり、飲み放題のコースで団体にも人気。店内が暗く掃除が行き届いていないという声も (2025年12月、2026年6月)。人気の部位は20時に売り切れることも。チャージ440円。',
  });
}

// ================================================================ 洋食 小春軒
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13003031/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:00', '13:30'], ['17:00', '20:00']); const SAT = day(['11:00', '13:30']);
  put({
    id: 'tokyo_yoshoku_koharuken_ningyocho', name: '洋食 小春軒 (Yoshoku Koharuken)', category: 'OMNI',
    lat: 35.684836, lng: 139.782697, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded cutlets and fries, demi-glace sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef, seafood and egg dishes fried in lard (September 2026).',
    hours_raw: 'Mon–Fri 11:00–13:30 and 17:00–20:00, evening hours not fixed; Sat 11:00–13:30; closed Sundays and holidays (Tabelog). No reservations; queues of up to about 20 at lunch (September 2026). No cards or QR; transport IC and nanaco accepted (Tabelog). 18 seats: four tables for four and a counter (Tabelog). No smoking during the day; smoking allowed at night (Tabelog). Founded in 1912 (2026 reviews).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-7-9, on Amazake Yokocho — 1 min from Ningyocho Stn exit A2 (Hibiya Line), 3 min from Suitengumae Stn',
    cuisine: 'Old Tokyo yoshoku (2026 reviews) · the katsudon ¥1,500 (October 2026): bite-sized pork cutlets over rice under diced potato, carrot, onion and green pepper simmered in a house demi-glace sauce, topped with a fried egg, with clam miso soup · special assorted fry platter ¥1,800 (August 2026) — shrimp fry, croquette, kushikatsu, scallop, fish fry, butter-grilled swordfish or squid; assorted fry set with shrimp fry ¥1,400 (October 2026) · hamburg steak with a fried egg and demi-glace, with rice ¥1,300 (September 2026) · swordfish grilled in butter (June 2026) · shijimi or clam miso soup +¥100 · butter-baked oysters in winter (Tabelog menu, 2009)',
    website: TB, gmaps: gm('洋食 小春軒 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Yoshoku · Ningyocho, the 1912 house of the egg-less katsudon] A yoshoku counter on Amazake Yokocho founded in 1912 by Tanemaru Kojima, who trained at Seiyoken in Tsukiji and cooked for the statesman Yamagata Aritomo (September, October 2026 reviews). Its famous katsudon is like no other: bite-sized pork cutlets buried under diced potato, carrot, onion and green pepper stewed in demi-glace, with a fried egg on top to break into the sauce (¥1,500). The fry platters, heavy on plump shrimp, and a hamburg steak under a runny egg are the other draws. The owner, the proprietress and the successor run the room warmly (October 2026). Queues build by noon, so arrive at 11:00. One September 2026 diner found cleaning supplies left in the dining room. No cards, but IC cards work; weekday evenings vary.",
    chef_bio: { chef_name: null, roles: ['The owner, the proprietress and the successor ("The hospitality from the proprietress, the owner, and the successor was exceptional", October 2026 review)'], origin: null,
      background: 'Per 2026 reviews: founded in 1912 (Meiji 45); the first owner, Tanemaru Kojima, trained at Seiyoken in Tsukiji, was a personal chef to Yamagata Aritomo and cooked at Chinzanso; the special katsudon was developed by the first owner (September, October 2026). Selected for Tabelog Yoshoku 100 in 2020 and 2022 (Tabelog).',
      philosophy: null, specialty: 'Katsudon with demi-glace vegetables and a fried egg.',
      anecdotes: [
        { text: '"The first owner, Mr. Tanemaru Kojima, was a personal chef to the third and ninth Prime Minister of Japan, Yamagata Aritomo" — September 2026.', source: R + 'B219434856/' },
        { text: '"When I arrived before opening, there wasn\'t much of a line, but by the time I left, nearly 20 people were waiting." — September 2026.', source: R + 'B536378181/' },
        { text: '"However, cleaning supplies were visible in the dining area, which detracted from the overall ambiance." — September 2026.', source: R + 'B535623734/' },
      ],
      japanese_sources_summary: '食べログ: 洋食 小春軒、洋食、カツ丼、コロッケ、洋食百名店2020・2022、日本橋人形町1-7-9、人形町駅A2出口から徒歩1分、月〜金11:00〜13:30、17:00〜20:00 (夜は不定)、土11:00〜13:30、日祝休み、予約不可、カード・QR不可、交通系IC・nanaco可、18席、昼は禁煙・夜は喫煙可。口コミ(2014年3月〜2026年10月): 1912年創業、初代 Tanemaru Kojima は Tsukiji の Seiyoken で修業し Yamagata Aritomo の料理番、カツ丼1,500円 (一口カツにデミグラスで煮た野菜と目玉焼き、しじみ汁)、特製の盛り合わせ1,800円、ハンバーグ1,300円、カジキのバター焼き、女将と店主と跡継ぎのもてなし、開店前から行列、掃除道具が見えていたという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B219434856/', R + 'B353295764/', R + 'B475643035/', R + 'B530512266/', R + 'B534733486/', R + 'B535623734/', R + 'B536314458/', R + 'B536378181/', R + 'B536684621/', R + 'B537095817/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at lunch; IC cards but no credit cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-7-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB} (35.684836, 139.782697); cross-checked: GSI 東京都中央区日本橋人形町一丁目7番9号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536684621/', R + 'B534733486/', R + 'B530512266/', R + 'B535623734/'],
    price_note: 'Prices from June–October 2026 reviews (the Tabelog menu dates from 2009).', last_checked: TODAY, items: [
      it('', '', 'Katsudon (with clam miso soup)', '¥1,500', 'Rice', 'no', 'no', 'October 2026.', 'katsudon'),
      it('', '', 'Special assorted fry platter', '¥1,800', 'Set meals', 'no', 'no', 'August 2026.', 'tokusei_mori'),
      it('', '', 'Assorted fry set with shrimp fry', '¥1,400', 'Set meals', 'no', 'no', 'October 2026.', 'mori_ebi'),
      it('', '', 'Hamburg steak with rice', '¥1,300', 'Set meals', 'no', 'no', 'September 2026.', 'hamburg'),
      it('', '', 'Shijimi clam miso soup', '+¥100', 'Sides', 'ask', 'no', 'June, September 2026.', 'shijimi'),
    ] }, {
    cuisine: '昔ながらの東京の洋食 (2026年の口コミ)・カツ丼1,500円 (2026年10月): ご飯に一口カツ、その上にじゃがいも、にんじん、玉ねぎ、ピーマンを自家製のデミグラスソースで煮て、目玉焼きをのせる。しじみ汁付き・特製の盛り合わせ1,800円 (2026年8月): エビフライ、コロッケ、串カツ、ホタテ、魚のフライ、カジキかイカのバター焼き。エビフライ入りの盛り合わせ定食1,400円 (2026年10月)・目玉焼きとデミグラスのハンバーグ、ライス付き1,300円 (2026年9月)・カジキのバター焼き (2026年6月)・しじみ汁+100円・冬はカキのバター焼き (食べログのメニュー、2009年)',
    neighborhood: '日本橋人形町1-7-9、Amazake Yokocho。人形町駅A2出口 (日比谷線) から徒歩1分、水天宮前駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: 衣のカツやフライ、デミグラスソース。',
    vegan_detail: 'ヴィーガンではない: 豚肉、牛肉、魚介、卵の料理で、揚げ油はラード (2026年9月)。',
    notes: '[洋食・人形町、1912年創業の卵でとじないカツ丼] Amazake Yokocho の洋食店で、1912年に Tanemaru Kojima が創業した。初代は Tsukiji の Seiyoken で修業し、Yamagata Aritomo の料理番を務めたという (2026年9月、10月の口コミ)。名物のカツ丼はほかにない形で、一口カツの上にデミグラスで煮たじゃがいも、にんじん、玉ねぎ、ピーマンをたっぷりのせ、目玉焼きを崩して食べる (1,500円)。大きなエビの入ったフライの盛り合わせや、半熟の目玉焼きをのせたハンバーグも人気。店主と女将と跡継ぎの温かいもてなし (2026年10月)。昼は行列ができるので11時に。2026年9月には客席に掃除道具が置かれていたという声も。カード不可だが交通系ICは使える。平日の夜は不定。',
  });
}

// ================================================================ on your side
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13265851/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['18:00', '22:00']); const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_on_your_side_ningyocho', name: 'on your side', category: 'OMNI',
    lat: 35.685631, lng: 139.783982, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch sets come with bread and often pasta; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-, fish- and cheese-led bistro.',
    hours_raw: 'Mon 18:00–22:00 (no lunch on Mondays); Tue–Sat and the days before and after a holiday 11:30–15:00 (last order 14:30) and 18:00–22:00 (food last order 21:00, drinks 21:30); closed Sundays and holidays (Tabelog). Reservations accepted; private hire by phone (Tabelog). Dinner charge ¥500 (Tabelog). Cards, transport IC, iD, QUICPay and PayPay (Tabelog). 16 seats, non-smoking (Tabelog). Opened 30 November 2021 (Tabelog). Busy at weekday lunch (2024–25 reviews).',
    hours: { 0: MON, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-11 2F — 1 min from Ningyocho Stn exit A1 (Hibiya Line), 3 min from exit A3, 4 min from Suitengumae Stn exit 8',
    cuisine: 'Wine bistro cooking across French, Italian and Spanish dishes, with glass wines and over 30 bottles (Tabelog; February 2026) · lunch sets ¥1,500 / ¥1,800 / ¥2,000, changing weekly — appetiser, pasta, fish or meat, with salad, bread and coffee or tea; lunch courses ¥3,000 and ¥4,000 (Tabelog) · dinner courses ¥6,500 / ¥8,000 / ¥9,000; party plans ¥6,000 and ¥7,000 (Tabelog) · dishes in 2025–26: mackerel with onion diable sauce, sea bream with américaine sauce, seafood and komatsuna garlic pasta, raw mushroom and tomato salad, prosciutto, pâté, tripe, oyster gratin, Basque cheesecake, soft serve · lunch stamp card: five stamps for a house dessert (July 2025)',
    website: TB, gmaps: gm('on your side 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Bistro · Ningyocho, a wine bistro with a busy weekday lunch] A small second-floor wine bistro a minute from Ningyocho station, open since 2021, cooking a mix of French, Italian and Spanish dishes with a long glass-wine list. Lunch is the local favourite: weekly-changing sets from ¥1,500 of pasta, fish or meat with a colourful salad, bread and coffee, and a stamp card that earns a house dessert. Dinner runs to à la carte plates like pâté, tripe, oyster gratin and sea bream in américaine sauce, or courses from ¥6,500. Most diners praise the food and calm white room; one April 2026 lunch guest found the salad bland, the poêlé soggy and the iced coffee brought with the meal. At dinner a drink order is expected, plus a ¥500 charge.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 30 November 2021 (Tabelog). A February 2026 diner describes the menu as the chef\'s favourite dishes from Italian, French and Spanish cooking. The Tabelog invoice registration is a corporate number, so no owner name is recorded.',
      philosophy: null, specialty: 'Weekly lunch sets; pâté and tripe with wine.',
      anecdotes: [
        { text: '"When you visit, you receive a stamp, and after collecting five, you can enjoy a handmade dessert from the restaurant." — July 2025.', source: R + 'B502925863/' },
        { text: '"I was truly impressed by the \'Fresh Mushroom and Tomato Salad.\' I never knew raw mushrooms could be so fragrant and delicious!" — November 2025.', source: R + 'B517992012/' },
        { text: '"Just a note: since it’s a restaurant specializing in Western cuisine and wine, ordering alcohol is a must." — February 2026.', source: R + 'B537192044/' },
      ],
      japanese_sources_summary: '食べログ: on your side、ビストロ、肉料理、ワインバー、日本橋人形町2-10-11 2F、人形町駅A1出口から徒歩1分、月曜18:00〜22:00、火〜土と祝前日・祝翌日11:30〜15:00、18:00〜22:00、日祝休み、月曜の昼は休み、予約可、夜はチャージ500円、カード・電子マネー・PayPay可、16席、禁煙、2021年11月30日オープン、ランチセット1,500円・1,800円・2,000円、ランチコース3,000円・4,000円、ディナーコース6,500円・8,000円・9,000円、グラスワインとボトル30種以上。口コミ(2023年11月〜2026年8月): 週替わりのランチ、サラダ、パン、パスタ、魚と肉、スタンプカードでデザート、パテ、トリッパ、カキのグラタン、夜はお酒の注文が必要、サラダが薄味・ポワレが湿っていた・アイスコーヒーが食事と一緒に出たという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B444190877/', R + 'B502925863/', R + 'B517992012/', R + 'B520799866/', R + 'B521638804/', R + 'B522837991/', R + 'B526954893/', R + 'B535283497/', R + 'B537192044/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Solo diners welcome at the counter; order a drink at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-10-11 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (October–November 2026 closing days posted); reviews to August 2026.' },
    pin_source: `Tabelog ${TB} (35.685631, 139.783982); cross-checked: GSI 東京都中央区日本橋人形町二丁目10番11号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Set and course prices from the Tabelog shop text, 2026.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (weekly)', '¥1,500', 'Lunch', 'ask', 'no', 'Tabelog; also ¥1,800 and ¥2,000.', 'lunch_set'),
      it('', '', 'Lunch course', '¥3,000', 'Lunch', 'ask', 'no', 'Tabelog; also ¥4,000.', 'lunch_course'),
      it('', '', 'Dinner course', '¥6,500', 'Dinner', 'ask', 'no', 'Tabelog; also ¥8,000 and ¥9,000.', 'dinner_course'),
    ] }, {
    cuisine: 'フランス、イタリア、スペインの料理をそろえるワインビストロ、グラスワインとボトル30種以上 (食べログ、2026年2月)・ランチセット1,500円・1,800円・2,000円、週替わり、前菜、パスタ、魚か肉にサラダ、パン、コーヒーか紅茶、ランチコース3,000円・4,000円 (食べログ)・ディナーコース6,500円・8,000円・9,000円、パーティープラン6,000円・7,000円 (食べログ)・2025〜26年の料理: サバの玉ねぎのディアブルソース、鯛のアメリケーヌソース、魚介と小松菜のガーリックパスタ、生のきのことトマトのサラダ、生ハム、パテ、トリッパ、カキのグラタン、バスクチーズケーキ、ソフトクリーム・ランチのスタンプカード: 5つでお店のデザート (2025年7月)',
    neighborhood: '日本橋人形町2-10-11 2F。人形町駅A1出口 (日比谷線) から徒歩1分、A3出口から徒歩3分、水天宮前駅8番出口から徒歩4分',
    gf_detail: '要確認。ランチセットにはパンが付き、パスタも多い。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 肉、魚、チーズが中心のビストロ。',
    notes: '[ビストロ・人形町、平日の昼がにぎわうワインビストロ] 人形町駅から1分、2階にある小さなワインビストロで、2021年から。フランス、イタリア、スペインの料理を合わせ、グラスワインが豊富。地元に人気なのは昼で、1,500円からの週替わりのセットはパスタ、魚か肉に彩りのよいサラダ、パン、コーヒー付き。スタンプカードで手作りのデザートももらえる。夜はパテ、トリッパ、カキのグラタン、鯛のアメリケーヌソースなどのアラカルトか、6,500円からのコース。料理と白い落ち着いた店内を褒める声が多いが、2026年4月の昼にはサラダが薄味、ポワレが湿っていた、アイスコーヒーが食事と一緒に出たという声も。夜は飲み物の注文が前提で、チャージ500円。',
  });
}

save();
