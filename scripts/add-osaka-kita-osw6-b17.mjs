// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 17.
//   + 鮨 暁 Sushi Akatsuki (sushi course with all-you-can-drink sake, women-run counter, Kitashinchi side of 堂島)
//   + 北新地 湯木 本店 Kitashinchi Yuki Honten (kaiseki by the grandson of the Kitcho founder)
//   + 酒とツマミ ちゅんま sake to tsumami chumma (duck-dashi oden izakaya from 3 pm, Doyama)
//   + 北新地鉄板 けん Kitashinchi Teppan Ken (teppanyaki and okonomiyaki bar to 1 am, Kitashinchi side of 堂島)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b16): first odd ids 27149921, 27061319,
//   27144705, 27103073. None is in data/osaka.json (grep by id, name and address, 2026-11-02); no 吉兆/Kitcho in data.
//   Chain check: Yuki runs four shops (本店, 新店, 肥後橋ゆきや。, 心斎橋店 on its official site), none in data and not a
//   fast-expanding chain, so the Honten is drafted (flagged in the report). Akatsuki, Chumma and Ken show no other shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 暁
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27149921/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_sushi_akatsuki_kitashinchi', name: '鮨 暁 (Sushi Akatsuki)', category: 'OMNI',
    lat: 34.696741, lng: 135.498419, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi with soy sauce, a red-miso soup and seasoned appetizers; the shop asks for allergies and dislikes when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish course.',
    hours_raw: 'Mon–Sat, holidays and days before holidays 17:00–23:00 (food last order 20:00, drinks 21:30); days after holidays 17:00–23:00 (last order 21:00); closed Sundays (Tabelog). Reservation only; tell the shop about allergies or dislikes when booking (Tabelog). All-you-can-drink 120 minutes, last order at 90 (Tabelog). Opened July 1, 2025 (Tabelog). Cards (VISA, Master, JCB, AMEX), PayPay; no e-money (Tabelog). 11 seats at an L-shaped counter in the basement; smoking allowed; birthday plates; takeout (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 第二京松ビル B1F — 5 min from Kitashinchi Stn',
    cuisine: 'Sushi of seasonal fish from across Japan on red-vinegar rice, as courses with all-you-can-drink; over 10 sakes and champagne; fugu shabu-shabu is popular (Tabelog) · courses (Tabelog, tax included): Akatsuki course of 24 items with beer, highball and sour ¥11,000; the same with 10 sakes ¥12,000; Akatsuki Premium of 27 items with fugu shabu-shabu, 12 pieces of sushi and sake ¥16,500 · each course: a sashimi platter, ten seasonal appetizers, nine pieces of sushi, chawanmushi, grilled skewers, red-miso soup and dessert (Tabelog) · several 2026 diners paid ¥11,000 with sake included (Kido, Nabeshima) · a February 2026 course: Kyoto buri tataki, a turnip and salmon broth, a toro-takuan roll, aji, hirame, saba, salmon, toro',
    website: null, gmaps: gm('鮨 暁 北新地 第二京松ビル'), menu_url: null,
    notes: "[Sushi · Kitashinchi, a sake-flowing counter run by women] An eleven-seat basement sushi counter in Kitashinchi, opened in July 2025, where a woman owner-chef and an all-women team serve a fixed course with all-you-can-drink for about ¥11,000, a rare price for the area. Ten seasonal appetizers and a sashimi plate come first, then nine pieces of red-vinegar sushi, chawanmushi, skewers and red-miso soup; the ¥16,500 premium adds fugu shabu-shabu. The sake list for the drinks plan runs to Kido and Nabeshima. Diners love the value, the warmth and the birthday songs; one regular found the menu unchanged after six months and the nigiri less careful, and others note bold seasoning. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), a woman (2026 reviews)', 'All-women staff (May 2026)'], origin: null, background: 'Shop text (Tabelog): opened July 1, 2025; sushi of fresh seafood and seasonal flavours; a counter course with all-you-can-drink for ¥11,000, rare in Kitashinchi; complimentary fugu shabu-shabu and a monthly-changing menu; rice chosen to suit sushi, seasoned with red vinegar; over 10 sakes and champagne; an L-shaped counter. Diners: "A sushi restaurant run by a female chef" (March 2026); "The chef was a woman, and all the staff were also women" (May 2026); the owner remembered a couple from a year earlier (September 2026).', philosophy: null, specialty: 'Akatsuki course with all-you-can-drink sake.',
      anecdotes: [
        { text: '"Despite being located in Kitashinchi, I was amazed to find a course with all-you-can-drink for just JPY 11,000!" — February 2026.', source: R + 'B522130612/' },
        { text: '"Entering a sushi restaurant can be intimidating, especially when the chef has a serious demeanor, but this place was filled with friendly women, creating a vibrant and welcoming atmosphere." — May 2026.', source: R + 'B528990103/' },
        { text: '"The quality of the nigiri has definitely declined. It feels less delicate than before." — October 2026, a return visit.', source: R + 'B522130612/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B522130612/', R + 'B524444670/', R + 'B527253050/', R + 'B528525112/', R + 'B528942081/', R + 'B528990103/', R + 'B530631276/', R + 'B530941548/', R + 'B531800707/', R + 'B536416042/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Fixed courses; a friendly, chatty counter (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to state food allergies and dislikes when booking (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-34 第二京松ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included); several 2026 diners paid ¥11,000 with sake included.', last_checked: TODAY, items: [
      it('', '', 'Akatsuki course, 24 items, all-you-can-drink beer, highball and sour', '¥11,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'akatsuki_course'),
      it('', '', 'Akatsuki course, 24 items, all-you-can-drink incl. 10 sakes', '¥12,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'akatsuki_sake'),
      it('', '', 'Akatsuki Premium course with fugu shabu-shabu, 27 items, all-you-can-drink incl. sake', '¥16,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'akatsuki_premium'),
    ] }, {
    cuisine: '全国の旬の魚の赤酢のシャリの鮨、飲み放題つきのコースで、日本酒10種以上とシャンパンも、ふぐしゃぶが人気 (食べログ)・コース (食べログ、税込): ビール、ハイボール、サワーの飲み放題つき24品の暁コース11,000円、日本酒10種つきで12,000円、ふぐしゃぶと鮨12貫の27品の暁プレミアムコース16,500円・どのコースも刺身の盛り合わせ、旬の前菜10種、鮨9貫、茶碗蒸し、串焼き、赤だし、デザート (食べログ)・2026年の口コミでは日本酒込みで11,000円という人が多い (Kido、Nabeshima)・2026年2月のコース: 京都のブリのたたき、かぶと鮭のだし、トロたく巻き、アジ、ヒラメ、サバ、サーモン、トロ',
    neighborhood: '堂島の北新地寄り、第二京松ビル 地下1階。北新地駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。醤油を使う鮨、赤だし、味つけした前菜。予約時にアレルギーや苦手なものを聞いてくれる (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。魚のコース。',
    notes: '[鮨・北新地、女性たちのカウンターで日本酒も飲み放題] 北新地の地下にある11席の鮨のカウンターで、2025年7月オープン。女性のオーナーシェフと女性だけのスタッフが、飲み放題つきで11,000円ほどのコースを出す、このあたりではめずらしい値段。旬の前菜10種と刺身から始まり、赤酢のシャリの鮨9貫、茶碗蒸し、串焼き、赤だし。16,500円のプレミアムはふぐしゃぶつき。飲み放題の日本酒には Kido や Nabeshima も。お得さと温かさ、誕生日の歌が好評で、半年ぶりの常連は献立が変わらず握りが雑になったと感じ、味が濃いめという声も。喫煙可。',
  });
}

// ================================================================ 北新地 湯木 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27061319/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://kitashinchiyuki.com/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'osaka_kitashinchi_yuki_honten', name: '北新地 湯木 本店 (Kitashinchi Yuki Honten)', category: 'OMNI',
    lat: 34.697158, lng: 135.49973, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; kaiseki with dashi, soy-based seasoning, tempura and nama-fu (wheat gluten). The official site says allergies and dislikes can be removed if you say so at booking or on the day.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and dashi kaiseki.',
    hours_raw: 'Mon–Sat 11:30–14:30 (last order 13:30) and 17:30–22:00 (last order 21:00); closed Sundays and holidays (Tabelog; official site). Courses only; lunch by reservation only (Tabelog). A service charge is taken (Tabelog, 頂戴しております). Opened November 21, 2011 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Seats: 20 on Tabelog (5 counter, 15 table); the official site lists 6 counter seats and three private rooms for 2–6; private rooms for up to 12 (Tabelog); tatami rooms are at the New shop (Tabelog). A designated smoking area (Tabelog); the official FAQ says smoking is possible in the private rooms. Children welcome with a reservation (Tabelog). Step-free access to a private room with a nearby toilet (September 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, ダーリンビル 1F — right outside Kitashinchi Stn exit 3',
    cuisine: 'Kaiseki in the tea-ceremony tradition of Kitcho, with seasonal ingredients from across Japan, fine tableware and private rooms (Tabelog; official site) · dinner courses (Tabelog, tax included): kaiseki Nishiki ¥22,000; special Takumi ¥33,000; kaiseki Homare ¥44,000 · dishes in reviews: Matsuba crab, clams steamed in tea custard, sashimi of buri, Oma toro, flounder and Hokkaido uni, kue hot pot, tempura of shrimp and fugu milt (January 2024); hamo, matsutake and wagyu (September 2024); chawanmushi and tai chazuke (2023–2024); nama-fu (December 2024); Akashi sea bream sashimi, red rice with chestnuts, grilled gurnard for a birthday (October 2025); sea bream with sesame sauce under Tanabata decorations (July 2026) · a wagyu sukiyaki lunch (December 2024) · sake from around Japan, wine, shochu (official site) · house mentaiko and dashi to take home (official site)',
    website: WEB, gmaps: gm('北新地 湯木 本店'), menu_url: null,
    notes: "[Kaiseki · Kitashinchi, Kitcho's legacy by the founder's grandson] A kaiseki restaurant by Kitashinchi Station, opened in 2011 by the grandson of Yuki Sadaichi, founder of the famous Japanese restaurant Kitcho, and carried on in that tea-ceremony style: seasonal dishes from across Japan on fine tableware, with private rooms for business dinners and celebrations. Dinner courses run ¥22,000–44,000 (lunch by reservation only); diners recall Matsuba crab, Oma tuna, kue hot pot, hamo with matsutake, and a sea-bream chazuke to finish. One diner who had dreamed of Senba Kitcho called it a legacy carried on; another found the staff slow to come by in a private room. The group also runs a New shop with more private rooms.",
    chef_bio: { chef_name: null, roles: ['Owner (surname 湯木 on the official site), grandson of Kitcho founder Yuki Sadaichi'], origin: 'Grandson of 湯木貞一 (Yuki Sadaichi), founder of 吉兆 (Kitcho) (official site; Tabelog).', background: 'Official site and Tabelog: the owner\'s grandfather Yuki Sadaichi founded the famous Japanese restaurant Kitcho; the owner opened the Honten in Kitashinchi to carry on the grandfather\'s kaiseki in the tea-ceremony line, with tableware, a refined space and hospitality, learning from the grandfather to keep tradition while trying new things. The company runs four shops: Honten, New shop, 肥後橋ゆきや。 and Shinsaibashi (official site). The official FAQ says the owner moves between the shops and greets guests where possible.', philosophy: 'Ichigo ichie; expressing the season is the heart of Japanese cuisine (official site; Tabelog).', specialty: 'Seasonal kaiseki.',
      anecdotes: [
        { text: '"although the name Senba Kitcho has disappeared, the legacy has been beautifully carried on" — February 2026.', source: R + 'B522462322/' },
        { text: '"The appetizers were served with a piece of paper featuring a poem from the Hyakunin Isshu, creating a refined atmosphere." — June 2025.', source: R + 'B509084085/' },
        { text: '"One guest had some difficulty walking, so being able to access the room without using stairs and having a nearby restroom was incredibly helpful." — September 2024.', source: R + 'B491792992/' },
      ],
      japanese_sources_summary: '公式サイト: 祖父の湯木貞一は老舗日本料理店「吉兆」の創業者。茶懐石の流れを汲んだ本格懐石、器、空間、おもてなしを大切にした祖父の想いを継ぐため、北新地に本店を開業。伝統を守りながら新しいことに挑戦する姿勢を祖父から学んだ。本店はカウンター6席と個室3部屋、昼11:30〜14:30 (L.O.13:30)、夜17:30〜22:00 (L.O.21:00)、日曜・祝日休み。苦手な食べ物やアレルギーは予約時か当日に言えば除ける。',
      confidence: 'medium', sources: [TB, WEB, R + 'B478159828/', R + 'B491792992/', R + 'B492148407/', R + 'B497344713/', R + 'B509084085/', R + 'B515743927/', R + 'B519041238/', R + 'B522462322/', R + 'B526699600/', R + 'B531337518/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site has English, Korean and Chinese pages; no evidence of English service in the reviews read.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Official FAQ: foods you dislike or are allergic to can be removed if you say so at booking or on the day.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-7-12 ダーリンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目7番12号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Dinner courses from the Tabelog listing (tax included); a service charge is added.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course Nishiki (dinner)', '¥22,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'nishiki'),
      it('', '', 'Special course Takumi (dinner)', '¥33,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'takumi'),
      it('', '', 'Kaiseki course Homare (dinner)', '¥44,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'homare'),
    ] }, {
    cuisine: '吉兆の茶懐石の流れを汲む懐石、全国の旬の食材、器、個室 (食べログ、公式サイト)・夜のコース (食べログ、税込): 懐石「錦」22,000円、特別料理「匠」33,000円、懐石「誉」44,000円・口コミの料理: 松葉ガニ、ハマグリの茶碗蒸し、ブリ、大間のトロ、ヒラメ、北海道のウニの刺身、クエ鍋、海老とふぐの白子の天ぷら (2024年1月)、鱧、松茸、和牛 (2024年9月)、茶碗蒸しと鯛茶漬け (2023〜2024年)、生麩 (2024年12月)、明石の鯛の刺身、栗の赤飯、ホウボウの焼き物で誕生日 (2025年10月)、七夕の飾りと鯛のごまだれ (2026年7月)・昼の黒毛和牛のすき焼き (2024年12月)・全国の日本酒、ワイン、焼酎 (公式サイト)・持ち帰りに店の明太子とだし (公式サイト)',
    neighborhood: '北新地、ダーリンビル 1階。北新地駅3番出口のすぐ前',
    gf_detail: '要確認。グルテンの情報なし。だし、醤油の味つけ、天ぷら、生麩 (小麦のグルテン) のある懐石。公式サイトによると、苦手な食べ物やアレルギーは予約時か当日に言えば除ける。',
    vegan_detail: 'ヴィーガンではありません。魚とだしの懐石。',
    notes: '[懐石・北新地、吉兆の創業者の孫の店] 北新地駅のそばにある懐石の店で、名店吉兆の創業者、湯木貞一の孫が2011年に開いた。茶懐石の流れを汲み、全国の旬の料理を名品の器で、接待やお祝いには個室も。夜のコースは22,000〜44,000円 (昼は予約のみ)。松葉ガニ、大間のマグロ、クエ鍋、鱧と松茸、締めの鯛茶漬けを覚えている人が多い。船場吉兆にあこがれていた人は伝統が見事に受け継がれていると書き、個室では店の人がなかなか来なかったという声も。もっと個室の多い新店もある。',
  });
}

// ================================================================ 酒とツマミ ちゅんま
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27144705/'; const R = TB + 'dtlrvwlst/';
  const WP = 'https://www.weblio.jp/content/%E3%81%A1%E3%82%85%E3%82%93%E3%81%BE';
  const H = day(['15:00', '01:00']);
  put({
    id: 'osaka_sake_to_tsumami_chumma', name: '酒とツマミ ちゅんま (sake to tsumami chumma)', category: 'MOM_AND_POP',
    lat: 34.702842, lng: 135.503613, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The duck-and-seafood oden includes chikuwa; the menu also has a duck cutlet, shrimp mayo in batter and other fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in a duck and seafood broth; meat dishes.',
    hours_raw: 'Daily 15:00–1:00; no fixed days off, but may close irregularly, e.g. at New Year; phone during hours, otherwise book online (Tabelog). Groups of 5 or more by phone (Tabelog). Seat charge with a small appetizer ¥385 (Tabelog). Opened October 3, 2024 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 20 seats, 25 standing; smoking allowed at all seats (Tabelog; September 2026). Operating company: Charmeir Co., Ltd. (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Doyama, Higashi-dori, 川村ビル 1F — 5 min from Higashi-Umeda Stn, 7 min from Umeda Stn',
    cuisine: 'Oden in a broth of duck and seafood, with homemade small plates and Japanese sake (Tabelog) · new charcoal-grilled dishes: chicken thigh, belly, Kyoto duck tail, rare chicken liver, and premium beef (Tabelog) · all-you-can-eat-and-drink with booking: oden and about 45 small plates ¥3,500 (entry 15:00–18:00, daily); premium with about 65 dishes ¥4,500 (Fri, Sat and days before holidays 15:00–18:00; Sun–Thu and holidays at lunch or dinner) (Tabelog) · September 2026 prices: duck cutlet ¥1,375, raw sirloin-cap chinjao rosu with egg yolk ¥1,298, shrimp mayo ¥1,089, Hakata-style dashimaki in a milky broth ¥638, six-piece oden ¥1,408, duck zosui in oden broth ¥1,078 · seared duck yukke, black-sesame spicy chicken, oyster gratin (October 2026) · dashi tomato chuhai topped with bonito flakes; sake such as Dassai, Kaze no Mori and Kido (October 2026)',
    website: 'https://chunma.owst.jp/', gmaps: gm('酒とツマミ ちゅんま 堂山町'), menu_url: null,
    notes: "[Oden · Umeda, Higashi-dori, duck-broth oden from 3 pm] A twenty-seat oden izakaya on the Higashi-dori side of Doyama, opened in 2024 by 中道大夢, once of the Osaka comedy trio Chumma, with a younger brother helping out. The draw is oden simmered in duck and seafood broth, finished with a duck zosui made from it; around it come a raw sirloin-cap chinjao rosu under egg yolk, a spiral-battered shrimp mayo, a dashimaki in a milky broth, and a medium-rare duck cutlet, with sakes like Dassai and Kido. Opening at 3 pm, it runs all-you-can-eat-and-drink deals from ¥3,500 in the early hours. Retro-chic and friendly; smoking at every seat; ¥385 seat charge.",
    chef_bio: { chef_name: '中道大夢 (stage name カラムーちゃんかなーち思て)', roles: ['Owner (Wikipedia)', 'Younger brother 中道大成 (なりちゃん) helps (Wikipedia)'], origin: 'Born July 10, 1994, from Kagoshima Prefecture (Wikipedia).', background: 'Japanese Wikipedia (via Weblio, version of 2026-10-29; the article is tagged as lacking sources): a former member of the comedy trio ちゅんま, formed in 2017 with younger brother なりちゃん (中道大成) and しゃっくー大佐; the trio reached the third round of M-1 Grand Prix 2019 and split in October 2020; both brothers later retired, and カラムーちゃん opened the izakaya 酒とツマミ ちゅんま in Doyama with なりちゃん helping. Tabelog: opened October 3, 2024; operating company Charmeir Co., Ltd.', philosophy: null, specialty: 'Duck-broth oden; oden-broth duck zosui.',
      anecdotes: [
        { text: '"This is a rare oden made with duck broth. It has a gentle flavor, but the ingredients are well-infused with taste" — September 2026.', source: R + 'B535378531/' },
        { text: '"The Hakata-style dashi omelet was a unique dish soaked in tonkotsu broth." — October 2026.', source: R + 'B536820299/' },
        { text: '"The atmosphere is a calming blend of retro and chic, and the staff are friendly." — October 2026.', source: R + 'B536820299/' },
      ],
      japanese_sources_summary: 'Wikipedia (Weblio 経由、出典不足の注記あり): ちゅんまは2017年結成のお笑いトリオ、2020年10月に解散。カラムーちゃんかなーち思て (本名 中道大夢、1994年7月10日生まれ、鹿児島県出身) が堂山町で居酒屋「酒とツマミ ちゅんま」を開業し、実弟のなりちゃん (中道大成) も手伝っている。',
      confidence: 'medium', sources: [TB, WP, R + 'B535314259/', R + 'B535378531/', R + 'B535533999/', R + 'B536820299/', R + 'B537118213/', R + 'B537344807/', R + 'B537920178/', R + 'B538225215/', R + 'B538415958/', R + 'B538516039/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual and friendly (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町2-12 川村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official booking site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町2番12号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535314259/'],
    price_note: 'Plans from the Tabelog listing (tax included); dishes from a September 2026 review; ¥385 seat charge.', last_checked: TODAY, items: [
      it('', '', 'Duck-broth oden, six pieces', '¥1,408', 'Oden', 'ask', 'no', 'September 2026 review.', 'oden_6'),
      it('', '', 'Duck zosui in oden broth', '¥1,078', 'Rice', 'ask', 'no', 'September 2026 review.', 'duck_zosui'),
      it('', '', 'Duck cutlet', '¥1,375', 'Dishes', 'no', 'no', 'September 2026 review.', 'duck_katsu'),
      it('', '', 'All-you-can-eat-and-drink, oden and about 45 small plates (entry 15:00–18:00)', '¥3,500', 'Plan', 'ask', 'no', 'Tabelog listing.', 'ayce_3500'),
    ] }, {
    cuisine: '鴨と魚介のだしのおでん、手作りの小皿と日本酒 (食べログ)・新しい炭火焼き: 鶏もも、鶏の腹身、京都の鴨のテール、レアの鶏レバー、上質な牛 (食べログ)・予約制の食べ飲み放題: おでんと小皿45品ほどで3,500円 (毎日15〜18時の入店)、65品ほどのプレミアム4,500円 (金・土・祝前日の15〜18時、日〜木と祝日は昼か夜) (食べログ)・2026年9月の値段: 鴨カツ1,375円、特選かぶりの生チンジャオロースに卵黄1,298円、エビマヨ1,089円、白いスープの博多風だし巻き638円、おでん6種盛り1,408円、おでんのだしの鴨雑炊1,078円・鴨の炙りユッケ、黒ごまのピリ辛チキン、牡蠣グラタン (2026年10月)・かつお節をのせただしトマトチューハイ、獺祭、風の森、Kido などの日本酒 (2026年10月)',
    neighborhood: '堂山、東通り、川村ビル 1階。東梅田駅から徒歩5分、梅田駅から7分',
    gf_detail: '要確認。グルテンの情報なし。鴨と魚介のおでんにはちくわも入り、鴨カツや衣をつけたエビマヨなどの揚げ物もある。',
    vegan_detail: 'ヴィーガンではありません。鴨と魚介のだしのおでんと肉料理。',
    notes: '[おでん・梅田東通り、15時からの鴨だしおでん] 堂山の東通り側にある20席のおでんの居酒屋で、2024年に大阪のお笑いトリオ「ちゅんま」の元メンバー、中道大夢が開き、弟も手伝っている。看板は鴨と魚介のだしで煮るおでんで、締めはそのだしの鴨雑炊。ほかに卵黄をのせた生のかぶりのチンジャオロース、らせん状の衣のエビマヨ、白いスープに浸っただし巻き、ミディアムレアの鴨カツ、獺祭や Kido などの日本酒。15時に開き、早い時間は3,500円からの食べ飲み放題がある。レトロでおしゃれ、気さくな店。全席喫煙可、席料385円。',
  });
}

// ================================================================ 北新地鉄板 けん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27103073/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '01:00']);
  put({
    id: 'osaka_kitashinchi_teppan_ken', name: '北新地鉄板 けん (Kitashinchi Teppan Ken)', category: 'OMNI',
    lat: 34.696523, lng: 135.497787, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: okonomiyaki, tonpei, yakisoba and curry bread are wheat-based, and much of the teppan menu uses butter soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Saga beef, Inunaki pork, seafood.',
    hours_raw: 'Mon–Fri 17:30–1:00 (last order 0:00); closed Saturdays, Sundays and holidays; open Saturdays in December (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats: 11–12 at the counter and one table for 4; private hire up to 20; smoking allowed, including paper cigarettes (Tabelog; 2025); third floor, stairs only (December 2025). Takeout; delivery mentioned by one diner (August 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 堂島リンデンビル 3F — 5 min from JR Kitashinchi Stn',
    cuisine: 'Teppanyaki from okonomiyaki to premium meat, with Saga beef, Inunaki pork and Bolivian rock salt (Tabelog) · omakase courses (Tabelog, tax included): ¥7,150 (5 items, seafood teppan and a Saga beef and Inunaki pork hamburg steak); ¥8,800 (6 items, up to Saga beef steak) · regulars\' favourites: hamburg steak with demi-glace, shrimp chili mayo, takeout keema curry bread (2024–2026) · Inunaki pork okonomiyaki grilled for 20 minutes, "all-star" okonomiyaki, modern-yaki, tonpei (2026) · garlic seseri ¥1,080 from the garlic menu, Inunaki pork kimchi, garlic yakisoba (February 2026) · mapo tofu with strong Sichuan pepper, mustard potato salad, keema curry sandwich (March 2026) · oysters and scallops in butter soy sauce, grilled small intestine, garlic steak, beef-tendon dashimaki, garlic pilaf to take away (2024–2026) · wine, sake and shochu (Tabelog)',
    website: null, gmaps: gm('北新地鉄板 けん 堂島リンデンビル'), menu_url: null,
    notes: "[Teppanyaki · Kitashinchi, a late teppan bar with okonomiyaki] A sixteen-seat teppan bar on a Kitashinchi third floor reached by stairs, open weekday evenings until 1 am, where the master cooks at speed in front of the counter and the women on the floor keep regulars smiling. The menu runs from Inunaki pork okonomiyaki, grilled slowly for twenty minutes, to Saga beef steak, with regulars' standbys of a fluffy hamburg steak, shrimp chili mayo, garlic dishes and a spicy keema curry bread to take home. Omakase courses are ¥7,150 and ¥8,800; à la carte plates are small, so it can add up. One regular notes the chef switches spatulas between dishes. Smoking, including cigarettes, is allowed.",
    chef_bio: { chef_name: null, roles: ['Master (unnamed) at the teppan', 'Floor staff, several women (2025–2026)'], origin: null, background: 'Shop text (Tabelog): teppanyaki in Kitashinchi, from local favourites like okonomiyaki to luxurious meat, with premium ingredients such as Saga beef, Inunaki pork and Bolivian rock salt. Diners: the master and several staff run it (November 2024); one cook handled everything at speed on a busy night (September 2026).', philosophy: null, specialty: 'Hamburg steak; Inunaki pork okonomiyaki; curry bread.',
      anecdotes: [
        { text: 'A regular on an eighth visit: the chef "changes the cooking spatula for each dish to prevent any cross-flavors" — July 2026.', source: R + 'B497237142/' },
        { text: '"Unlike typical okonomiyaki spots where you cook your own, here the teppan-yaki dishes are served once they are ready." — February 2026.', source: R + 'B522467824/' },
        { text: '"It\'s one of the few places left where you can smoke regular paper cigarettes." — October 2025.', source: R + 'B511312156/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B495316773/', R + 'B497237142/', R + 'B511312156/', R + 'B522467824/', R + 'B522670262/', R + 'B523760986/', R + 'B524997745/', R + 'B535024879/', R + 'B535206319/', R + 'B536175588/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter talk with the master; friendly staff (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0, positives: ['A regular says the chef changes the spatula for each dish to avoid mixing flavours (July 2026); not an allergy policy.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-8 堂島リンデンビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B522670262/'],
    price_note: 'Courses from the Tabelog listing (tax included); à la carte from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', "Chef's omakase course, 5 items (Saga beef and Inunaki pork hamburg steak)", '¥7,150', 'Course', 'no', 'no', 'Tabelog listing.', 'omakase_7150'),
      it('', '', "Chef's omakase course, 6 items (Saga beef steak)", '¥8,800', 'Course', 'no', 'no', 'Tabelog listing.', 'omakase_8800'),
      it('', '', 'Garlic seseri', '¥1,080', 'Teppan', 'ask', 'no', 'February 2026 review.', 'garlic_seseri'),
      it('', '', 'Inunaki pork okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'February 2026 review.', 'inunaki_okonomiyaki'),
    ] }, {
    cuisine: 'お好み焼きから上質な肉までの鉄板焼き、佐賀牛、Inunaki 豚、ボリビアの岩塩 (食べログ)・おまかせコース (食べログ、税込): 7,150円 (5品、魚介の鉄板焼きと佐賀牛と Inunaki 豚のハンバーグ)、8,800円 (6品、佐賀牛のステーキまで)・常連の定番: デミグラスのハンバーグ、エビチリマヨ、持ち帰りのキーマカレーパン (2024〜2026年)・20分焼く Inunaki 豚のお好み焼き、オールスターのお好み焼き、モダン焼き、とん平焼き (2026年)・にんにくメニューのにんにくせせり1,080円、Inunaki 豚のキムチ、にんにく焼きそば (2026年2月)・山椒の効いた麻婆豆腐、からしのポテトサラダ、キーマカレーのサンド (2026年3月)・牡蠣とホタテのバター醤油、小腸の焼き物、ガーリックステーキ、牛すじのだし巻き、持ち帰りのガーリックピラフ (2024〜2026年)・ワイン、日本酒、焼酎 (食べログ)',
    neighborhood: '堂島の北新地寄り、堂島リンデンビル 3階。JR北新地駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、とん平焼き、焼きそば、カレーパンは小麦が中心で、鉄板の料理の多くはバター醤油を使う。',
    vegan_detail: 'ヴィーガンではありません。佐賀牛、Inunaki 豚、魚介。',
    notes: '[鉄板焼き・北新地、お好み焼きもある遅くまでの鉄板バー] 北新地のビルの3階、階段で上がる16席の鉄板バーで、平日の夜だけ深夜1時まで。マスターがカウンターの前で手早く焼き、女性スタッフが常連をにこやかに迎える。メニューは20分かけて焼く Inunaki 豚のお好み焼きから佐賀牛のステーキまで、常連の定番はふわふわのハンバーグ、エビチリマヨ、にんにくの料理、持ち帰りのピリ辛のキーマカレーパン。おまかせコースは7,150円と8,800円、アラカルトは量が少なめで高くつくことも。料理ごとにヘラを替えているという常連の声も。紙たばこも含めて喫煙可。',
  });
}

save();
