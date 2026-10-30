// Osaka sweep (2-mile circle around Dotonbori), batch 216 — mom-phase clean-up: near-centre listings with 30+ reviews passed over earlier without a skip() mark.
//   + 宇治香園 大阪心斎橋店 Uji Koen (the only shop of a Kyoto tea maker founded in 1865; on Shinsaibashi-suji since 1946, tea room at the back)
//   + すし居酒屋 しんご Sushi Izakaya Shingo (sushi izakaya run single-handed by the owner, Koji; Higashi-Shinsaibashi)
//   - ガーメシフジワラ 27059713 — skipped: no reviews dated 2025–26 (newest visit November 2024)
//   + すし堤 Sushi Tsutsumi (7-seat omakase counter of a chef from Kumamoto; horse-meat nigiri; open to 2:00)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 216);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 宇治香園 大阪心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27004677/'; const R = TB + 'dtlrvwlst/';
  const SHOP = 'https://ujikoen.co.jp/company/shinsaibashi/', CO = 'https://ujikoen.co.jp/company/', HIST = 'https://ujikoen.co.jp/company/history/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'osaka_uji_koen_shinsaibashi', name: '宇治香園 大阪心斎橋店 (Uji Koen)', category: 'OMNI',
    lat: 34.672267, lng: 135.501421, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The soft serve comes in a cone and the tea room has served a roll cake; among the teas the shop sells is barley tea (mugicha), which is not gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The matcha soft serve, matcha latte and roll cake are not described, so assume dairy or egg unless told otherwise; brewed teas are served in the tea room, but nothing on how they are served (milk, sweets) is stated.',
    hours_raw: 'Shop daily 12:00–19:00; takeout (soft serve and drinks) 12:00–18:30; tea room Fri, Sat, Sun and holidays only, 14:00–17:00 (last order 16:30); closed over the New Year holidays (shop site and Tabelog). The shop site says the tea room was closed for renovation until 31 October 2026 and reopens on 1 November, with different hours on some November days (check the shop calendar). No reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC cards, WAON, QUICPay, PayPay, d Barai, Alipay, WeChat Pay, Merpay (Tabelog). 5 counter seats in the tea room; non-smoking (Tabelog); a bench for two by the takeout counter (December 2023 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 1-5-19, on the Shinsaibashi-suji shopping arcade — from Shinsaibashi Station (Midosuji Line) Exit 6, 3 min along the arcade towards Namba',
    cuisine: 'Japanese tea shop with a tea room at the back (5 seats) · takeout: rich matcha soft serve dusted with matcha powder (¥500 in August 2025, ¥400 in December 2023), a matcha-and-milk mix, matcha latte · tea room (Fri–Sun and holidays): gyokuro brewed at the seat with an hourglass timer and refills, hojicha, matcha ice cream, hojicha roll cake (reviews 2023–2025) · leaf tea, tea bags and gift boxes to take home: matcha, sencha, gyokuro, hojicha, genmaicha, Japanese black tea',
    website: SHOP, gmaps: gm('宇治香園 大阪心斎橋店'), menu_url: null,
    notes: "[Cafe · Shinsaibashi-suji, an 80-year-old tea shop with a hidden tea room] The Osaka shop of Uji Koen, a Kyoto tea maker founded in 1865, which opened on Shinsaibashi-suji in 1946, just after the war, and is today the company's only shop besides its head office and factory in Kyoto. Most people stop at the front for the rich matcha soft serve — deep green, slightly bitter, heaped with matcha powder that one diner warns will leave a green ring round your lips. Behind the noren is a quiet five-seat counter (Friday to Sunday and holidays, 14:00–17:00) where tea is brewed at your seat: one diner brewed gyokuro with lukewarm water and an hourglass timer, took refills and shared a hojicha roll cake. Two reviewers only learned later that it was there. The shelves hold matcha, sencha, gyokuro and hojicha in the white packaging that won an iF Design Award (2021) and a Good Design Award (2025).",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Uji Koen (株式会社 宇治香園) began as a tea peddler in Yamashiro, Kyoto, in 1865, exported tea to the United States through Kobe from about 1878, and opened the Shinsaibashi shop in 1946; the shop added its Japanese-tea tea room in 2003. The company marked its 160th year in 2025 (shop site, history page). Its company page lists only the Kyoto head office and factory and this Osaka Shinsaibashi shop.', philosophy: 'A Japanese tea specialist that first-timers can drop into, helping customers choose tea for every day or as a gift; tea brewed in a kyusu in a quiet room away from the bustle of Shinsaibashi-suji (shop site).', specialty: 'Rich matcha soft serve; gyokuro and hojicha in the tea room.',
      anecdotes: [
        { text: '"Although it faces Shinsaibashi, I didn\'t realize there was an eat-in area in the back, making it a hidden gem." — March 2025, second visit; the tea room had to be opened on request just after 14:00.', source: R + 'B489632351/' },
        { text: '"I poured lukewarm water over it and used the hourglass timer. It was incredibly sweet and fragrant gyokuro." — November 2023, gyokuro and a hojicha roll cake in the tea room.', source: R + 'B475123715/' },
        { text: '"While it tastes great, be careful as the powder tends to stick around your mouth. I ended up walking around Namba all day with green around my lips." — October 2025, matcha soft serve.', source: R + 'B518672896/' },
      ],
      japanese_sources_summary: '店のサイト: 宇治香園 大阪心斎橋店、昭和21年に心斎橋筋に日本茶専門店を構え、店の奥に喫茶、店舗12:00〜19:00、テイクアウト12:00〜18:30、喫茶は金・土・日・祝のみ14:00〜17:00 (L.O. 16:30)、休みは年末年始、喫茶は改修工事で10月31日まで休業し11月1日から再開、急須で淹れる日本茶の喫茶、テイクアウトのドリンクや抹茶ソフトクリーム、お茶の淹れ方教室「いちわん茶会」は休止中。会社情報: 株式会社 宇治香園、創業は慶應元年 (1865年)、京都本社・工場と大阪心斎橋店。あゆみ: 京都山城で茶の行商から始まり、明治11年ごろからアメリカ向けに輸出、昭和21年に大阪心斎橋店、平成15年に日本茶専門の喫茶、令和3年に iF デザインアワード、令和7年に創業百六十年とグッドデザイン賞。食べログ (店舗会員): 大阪市中央区心斎橋筋1-5-19、心斎橋駅6番出口から心斎橋筋をなんば方面に徒歩3分、予約不可、カード・電子マネー・QR可、カウンター5席、禁煙。口コミ (2021年10月〜2025年10月): 抹茶パウダーをたっぷりかけた濃い抹茶ソフト (2023年12月400円、2025年8月500円)、抹茶とミルクのミックス、抹茶ラテ、奥の喫茶で砂時計を使って淹れる玉露とおかわり、ほうじ茶、ほうじ茶のロールケーキ、抹茶アイス、ほうじ茶と玉露のティーバッグ、店頭にベンチ。',
      confidence: 'medium', sources: [TB, SHOP, CO, HIST, R + 'B475123715/', R + 'B475613117/', R + 'B475993389/', R + 'B489632351/', R + 'B502277270/', R + 'B513082490/', R + 'B518672896/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order soft serve at the front counter; tea room only Fri–Sun and holidays, 14:00–17:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-5-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current; reviews dated through October 2025; the shop site, read 2026-10-30, announces the tea room reopening on 1 November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目5番19号 (go) 7m. 酒場 音色 (osaka_sakaba_neiro_shinsaibashi, address_ja "大阪府大阪市中央区心斎橋筋1-5-19 しんぶら街 1F") shares the street address but sits about 20 m away on its own Tabelog point, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B513082490/', R + 'B475993389/', R + 'B475123715/', R + 'B489632351/', R + 'B502277270/'],
    price_note: 'Soft-serve prices from reviews dated December 2023 and August 2025; no tea-room menu prices found.', last_checked: TODAY, items: [
      it('', '', 'Rich matcha soft serve (takeout)', '¥500', 'Takeout', 'ask', 'ask', 'August 2025; ¥400 in December 2023. Served in a cone.', 'matcha_soft'),
      it('', '', 'Gyokuro (tea room, with refills)', '', 'Tea room', 'ask', 'ask', 'November 2023.', 'gyokuro'),
      it('', '', 'Hojicha (tea room)', '', 'Tea room', 'ask', 'ask', 'July 2024.', 'hojicha'),
      it('', '', 'Hojicha roll cake (tea room)', '', 'Tea room', 'no', 'ask', 'November 2023.', 'roll_cake'),
    ] }, {
    cuisine: '奥に喫茶のある日本茶専門店 (5席)・テイクアウト: 抹茶パウダーをかけた濃い抹茶ソフト (2025年8月500円、2023年12月400円)、抹茶とミルクのミックス、抹茶ラテ・喫茶 (金・土・日・祝): 席で砂時計を使って淹れる玉露とおかわり、ほうじ茶、抹茶アイス、ほうじ茶のロールケーキ (2023〜2025年の口コミ)・持ち帰りの茶葉、ティーバッグ、ギフト: 抹茶、煎茶、玉露、ほうじ茶、玄米茶、和紅茶',
    neighborhood: '心斎橋筋1-5-19、心斎橋筋商店街。心斎橋駅 (御堂筋線) 6番出口から心斎橋筋をなんば方面に徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ソフトクリームはコーンで、喫茶ではロールケーキも。店で売るお茶には麦茶もあり、これはグルテンフリーではありません。',
    vegan_detail: '要確認。抹茶ソフト、抹茶ラテ、ロールケーキの材料は書かれていないので、乳や卵が入っていると考えて確認を。喫茶で淹れるお茶の出し方 (ミルクやお菓子) もわかりません。',
    notes: '[カフェ・心斎橋筋、奥に隠れた喫茶のある80年の日本茶の店] 1865年創業の京都のお茶の会社、宇治香園の大阪の店。終戦直後の1946年に心斎橋筋に開き、今は京都の本社・工場のほかでは唯一の店。多くの人は店頭で濃い抹茶ソフトを買っていく。深い緑でほろ苦く、抹茶パウダーがたっぷりで、口のまわりが一日中緑になったという声も。のれんの奥には静かな5席のカウンター (金〜日・祝の14:00〜17:00) があり、席でお茶を淹れる。ぬるめのお湯と砂時計で玉露を淹れ、おかわりもして、ほうじ茶のロールケーキを分けたという声も。奥に喫茶があることにあとで気づいたという口コミも2件。棚には抹茶、煎茶、玉露、ほうじ茶が並び、白いパッケージは iF デザインアワード (2021年) とグッドデザイン賞 (2025年) を受賞。',
  });
}

// ================================================================ すし居酒屋 しんご
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27123072/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'osaka_sushi_izakaya_shingo_higashishinsaibashi', name: 'すし居酒屋 しんご (Sushi Izakaya Shingo)', category: 'MOM_AND_POP',
    lat: 34.671308, lng: 135.504448, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; sushi with soy sauce, a sweet soy sauce on some dishes, and fried dishes (mentaiko tempura, fried chicken, fried octopus) on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi, seafood and wagyu dishes, and chawanmushi.',
    hours_raw: 'Mon–Sat and holidays 17:30–23:30 (last order: food 23:00, drinks 23:15); closed Sunday; closing time may move with stock (Tabelog). Reservations accepted (Tabelog), also by Instagram DM to @sushi_shingo (2022 review); the one table is hard to get (April 2026 review) and a Friday in September 2025 was fully booked. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats: 8 at the counter and one table for 8; private hire possible; smoking allowed (Tabelog). The owner usually works alone, so food can take a while when full (2024–2025 reviews). Opened 22 June 2021 (a regular\'s June 2022 review marks the first anniversary that day).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-4-19, Tamayacho Galaxy Bldg No. 3, ground floor, at the entrance; small sign — 4 min (300 m) from Nagahoribashi Stn Exit 7',
    cuisine: 'Sushi izakaya (16 seats): nigiri and small rolls alongside izakaya dishes · examples with prices (December 2023): seafood bukkake sushi (a bite-size roll piled with chopped salmon, yellowtail, sea bream and tobiko) ¥1,280, shirako ponzu ¥900, wagyu yukhoe ¥1,380, raw shrimp ¥350, draft beer ¥550 · Japanese-style potato salad with tobiko and smoked daikon · mentaiko tempura · drinkable chawanmushi · wagyu sukiyaki roll dipped in egg · seafood yukhoe · nigiri such as butter eel, anago, seared scallop, tuna with uni, seared wagyu, toro-taku · an 8-dish course (sashimi platter, butter-soy scallops, grilled yellowtail collar, seared beef sushi with uni and ikura, nigiri, hosomaki, chawanmushi; September 2025) · winter "gout hot pot" of oysters, shirako and monkfish liver in yuzu miso, by reservation (February 2024) · sake',
    website: null, gmaps: gm('すし居酒屋 しんご 東心斎橋'), menu_url: null,
    notes: "[Sushi izakaya · Higashi-Shinsaibashi, a one-person counter with a fiercely loyal following] A small sushi izakaya with a small sign on the ground floor of a Galaxy building in the Higashi-Shinsaibashi back streets, opened in June 2021. Despite the name, the owner is Koji, not Shingo — a regular who has been more than 50 times had to learn that too. Koji is young, quiet ('a samurai vibe', April 2026), may seem unfriendly at first and turns out to be very kind, and usually cooks, makes the sushi and serves alone, so a full house means waits. The menu changes often: seafood bukkake sushi under a heap of chopped fish and tobiko, potato salad with tobiko and smoked daikon, mentaiko tempura, a wagyu sukiyaki roll dipped in egg, and in winter a reserved hot pot of oysters, shirako and monkfish liver that diners call the 'gout hot pot'. Book the one table early: on one Friday in September 2025 the place was full and many walk-ins were turned away.",
    chef_bio: { chef_name: 'Koji', roles: ['Owner-chef'], origin: null, background: 'Opened Sushi Izakaya Shingo on 22 June 2021 (first-anniversary review, June 2022). "Just to clarify, the owner is not Shingo-san, but Koji-san." (June 2022 review). Reviewers describe a young chef who runs the shop single-handed (August 2025; also October 2024, December 2024, February 2025).', philosophy: null, specialty: 'Sushi with izakaya dishes; seafood bukkake sushi; potato salad with tobiko.',
      anecdotes: [
        { text: '"I laughed when I first called Koji-san Shingo-san. Just to clarify, the owner is not Shingo-san, but Koji-san." — June 2022, on the first anniversary.', source: R + 'B442891563/' },
        { text: '"The head chef has a quiet demeanor that gives off a samurai vibe, which might be appealing!" — April 2026, omakase course at a business dinner.', source: R + 'B493475497/' },
        { text: '"The Seafood Bukkake Sushi was delightful. On top of a bite-sized sushi roll, there was a generous amount of chopped salmon, yellowtail, sea bream, and other seafood, all topped with a large serving of tobiko." — December 2023.', source: R + 'B485111507/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): すし居酒屋 しんご、居酒屋・寿司・海鮮、大阪市中央区東心斎橋2-4-19 玉屋町ギャラクシービル3号館 1F、長堀橋駅7番出口から徒歩4分 (300m)、月〜土・祝17:30〜23:30 (L.O. 料理23:00、ドリンク23:15)、日曜休み、在庫で閉店時間が変わることも、予約可、カード可、電子マネー・QR不可、16席 (カウンター8、8人のテーブル1)、貸切可、喫煙可、魚と日本酒にこだわり。口コミ (2022年1月〜2026年4月): 2021年6月22日オープン、店主は Koji さん (しんごさんではない)、インスタ @sushi_shingo のDMで予約、若い大将がひとりで切り盛り、最初は無愛想に見えるがいい人、侍のような静かな大将、看板が小さく見つけにくい、海鮮ぶっかけ寿司1280円、白子ポン酢900円、wagyu のユッケ1380円、生えび350円、生ビール550円 (2023年12月)、とびこと燻製の大根の入ったポテトサラダ、明太子の天ぷら、飲めるような茶碗蒸し、wagyu のすき焼き巻き、海鮮ユッケ、うなぎのバター焼き、穴子、ほたての炙り、うに乗せのまぐろ、トロたく、8品のコース (2025年9月)、冬は予約制の牡蠣・白子・あん肝の柚子味噌の鍋 (gout hot pot)、2025年9月の金曜は満席で断られる人も、テーブルは1つだけ。',
      confidence: 'medium', sources: [TB, R + 'B442891563/', R + 'B479702572/', R + 'B480046478/', R + 'B485111507/', R + 'B492984154/', R + 'B493475497/', R + 'B503910249/', R + 'B514128588/', R + 'B515174130/', R + 'B521069262/', R + 'B529035762/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead, especially for the one table; one person cooks and serves, so expect waits; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-4-19 玉屋町ギャラクシービル3号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目4番19号 (go) 12m. Same building as 鳥しん (osaka_tori_shin_higashi_shinsaibashi, address_ja "大阪府大阪市中央区東心斎橋2-4-19 玉屋町ギャラクシービル3号館 1F", about 9 m away) and かす中華そば かすうどん しばいけ (osaka_kasu_shibaike_higashishinsaibashi, address_ja "大阪府大阪市中央区東心斎橋2-4-19 玉屋町ギャラクシー3 B1F", about 11 m away), each on its own Tabelog point, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B485111507/', R + 'B514128588/', R + 'B480046478/', R + 'B503910249/'],
    price_note: 'Prices from a December 2023 review; reviewers say prices have risen since (November 2025).', last_checked: TODAY, items: [
      it('', '', 'Seafood bukkake sushi', '¥1,280', 'Sushi', 'ask', 'no', 'December 2023.', 'bukkake'),
      it('', '', 'Raw shrimp', '¥350', 'Sushi', 'ask', 'no', 'December 2023.', 'ebi'),
      it('', '', 'Shirako ponzu', '¥900', 'Dishes', 'ask', 'no', 'December 2023.', 'shirako'),
      it('', '', 'Wagyu yukhoe', '¥1,380', 'Dishes', 'ask', 'no', 'December 2023.', 'yukhoe'),
      it('', '', 'Japanese-style potato salad with tobiko', '', 'Dishes', 'ask', 'no', 'February–March 2025.', 'potesala'),
      it('', '', 'Mentaiko tempura', '', 'Fried', 'no', 'no', 'February and December 2025.', 'mentai_tempura'),
      it('', '', 'Course (8 dishes)', '', 'Course', 'ask', 'no', 'September 2025.', 'course'),
      it('', '', '"Gout hot pot" (oysters, shirako, monkfish liver in yuzu miso; winter, by reservation)', '', 'Hot pot', 'ask', 'no', 'February 2024.', 'nabe'),
    ] }, {
    cuisine: 'すし居酒屋 (16席): 握りや細巻きと居酒屋の料理・例と値段 (2023年12月): 海鮮ぶっかけ寿司 (ひと口の巻きずしに刻んだサーモン、ぶり、鯛、とびこ) 1280円、白子ポン酢900円、wagyu のユッケ1380円、生えび350円、生ビール550円・とびこと燻製の大根の入ったポテトサラダ・明太子の天ぷら・飲めるような茶碗蒸し・卵につける wagyu のすき焼き巻き・海鮮ユッケ・握り: うなぎのバター焼き、穴子、ほたての炙り、うに乗せのまぐろ、wagyu の炙り、トロたく・8品のコース (刺身の盛り合わせ、ほたてのバター醤油、ぶりのカマ焼き、うにといくらの牛の炙りずし、握り、細巻き、茶碗蒸し。2025年9月)・冬は予約制の牡蠣、白子、あん肝の柚子味噌の鍋 (gout hot pot、2024年2月)・日本酒',
    neighborhood: '東心斎橋2-4-19 玉屋町ギャラクシービル3号館 1F、入ってすぐ。看板は小さめ。長堀橋駅7番出口から徒歩4分 (300m)',
    gf_detail: '要確認。グルテンの情報なし。すしと醤油、甘い醤油をかける料理、揚げもの (明太子の天ぷら、からあげ、タコの唐揚げ) がある。',
    vegan_detail: 'ヴィーガンではありません。すし、刺身、魚介や wagyu の料理、茶碗蒸し。',
    notes: '[すし居酒屋・東心斎橋、ひとりで切り盛りするカウンターと熱心な常連] 東心斎橋の裏通り、ギャラクシービルの1階にある看板の小さなすし居酒屋で、2021年6月オープン。店の名前はしんごでも、店主は Koji さん。50回以上通う常連も最初はまちがえたという。若くて口数の少ない大将で (「侍のよう」、2026年4月)、最初は無愛想に見えるがとてもいい人。ふだんは料理もすしも接客もひとりなので、満席だと待つことも。メニューはよく変わる。刻んだ魚ととびこをどっさりのせた海鮮ぶっかけ寿司、とびこと燻製の大根の入ったポテトサラダ、明太子の天ぷら、卵につける wagyu のすき焼き巻き。冬には牡蠣、白子、あん肝の予約制の鍋があり、「gout hot pot」と呼ばれている。テーブルは1つだけなので早めに予約を。2025年9月のある金曜は満席で、予約なしの人が何組も断られていた。',
  });
}

// ================================================================ ガーメシフジワラ — no recent reviews
skip('27059713', 'ガーメシフジワラ (Gameshi Fujiwara): no reviews dated 2025–26. All 33 Tabelog reviews (review list pages 1–2, read 2026-10-30) are visits from 2011 to November 2024; the newest is "Visited on November, 2024" (B496352235). Pin not attempted (GSI matched only the ward per the brief).');

// ================================================================ すし堤
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132335/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'osaka_sushi_tsutsumi_higashishinsaibashi', name: 'すし堤 (Sushi Tsutsumi)', category: 'OMNI',
    lat: 34.671852, lng: 135.503972, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; an omakase of sushi with soy sauce (the horse-meat nigiri comes with a slightly sweet soy sauce), red miso soup, simmered dishes and low-temperature-fried ayu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase course of fish, shellfish and horse meat, with chawanmushi and tamago.',
    hours_raw: 'Daily 18:00–2:00; closing days not fixed (Tabelog). Reservations accepted; call to change or cancel; tell the shop ahead if bringing children (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 7 counter seats; private hire for up to 20; non-smoking (Tabelog). Opened 5 October 2022 (Tabelog). Omakase course ¥22,000 (August 2026 reviews), about two hours; à la carte also available (August 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-5-31, 月虎51番館 3F — 5 min on foot from Nagahoribashi Stn (Sakaisuji Line) or Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'Omakase sushi counter (7 seats) built on seafood from the chef\'s home prefecture, Kumamoto, and Amakusa · omakase ¥22,000 (August 2026): small dishes, sashimi, a seasonal simmered dish, a grilled dish, 6–8 nigiri, rolls, chawanmushi, soup and dessert · examples (2024–2026): chilled chawanmushi with king crab or Kumamoto red eggplant, ayu confit, monkfish liver with Nara-zuke, three kinds of gari (napa cabbage, lotus root, ginger), Amakusa sea bream, marinated tuna, toro (including three-year-aged toro), kohada, aori squid with sea urchin, kuruma shrimp, horse-meat nigiri with a slightly sweet soy sauce, simmered anago, red miso soup, a pudding-like tamago · sake chosen by the chef, who holds a sake diploma',
    website: null, gmaps: gm('すし堤 東心斎橋'), menu_url: null,
    notes: "[Sushi · Higashi-Shinsaibashi, a late-night Kumamoto omakase counter] A seven-seat hinoki counter on the third floor of a Higashi-Shinsaibashi building, calm and Japanese in a way the outside gives no hint of, open from 18:00 to 2:00 — one diner sneaked out after putting the kids to bed. The chef, from Kumamoto, builds the ¥22,000 omakase on fish from Kumamoto and Amakusa: chilled chawanmushi, ayu confit, monkfish liver with Nara-zuke, three kinds of house gari, then nigiri from Amakusa sea bream to aori squid crowned with sea urchin. The signature is horse-meat nigiri from Kumamoto with a slightly sweet soy sauce, which brought one reviewer to tears. The chef holds a sake diploma and pairs sake with the courses; one August 2026 review says the chef trained at a Michelin three-star restaurant. In June 2024 the chef was working solo and still kept a good pace.",
    chef_bio: { chef_name: null, roles: ['Owner-chef'], origin: 'Kumamoto(2024–2026 reviews)', background: 'Opened 5 October 2022 (Tabelog). From Kumamoto; craftsmanship "honed through traditional Japanese cuisine" (July 2026 review); one August 2026 review: "Run by a chef from a Michelin three-star restaurant" (the restaurant is not named). Holds a sake diploma (July and August 2026 reviews). Working solo at a June 2024 visit.', philosophy: 'Omakase built on seasonal fish and other ingredients from Kumamoto and Amakusa(Tabelog headline; 2026 reviews).', specialty: 'Horse-meat nigiri; three kinds of gari; monkfish liver with Nara-zuke.',
      anecdotes: [
        { text: '"The chef, hailing from Kumamoto, confidently serves this horse meat sushi. With each bite, the umami and sweetness overflowed, making it an exquisite piece." — August 2026, omakase, second visit.', source: R + 'B487523991/' },
        { text: '"I tried the three-year-aged toro (fatty tuna) for the first time, and it was exciting. However, I think it might be a matter of personal preference." — August 2026.', source: R + 'B533370110/' },
        { text: '"The chef was friendly, creating a relaxed atmosphere at the counter, making it easy to enjoy the meal without feeling too tense." — August 2026, omakase.', source: R + 'B535598994/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): すし堤、寿司・海鮮・居酒屋、Kumamoto の食材を使ったすし、大阪市中央区東心斎橋2-5-31 月虎51番館 3F、長堀橋駅 (堺筋線) から徒歩5分・心斎橋駅 (御堂筋線) から徒歩5分、毎日18:00〜2:00、定休日不定、予約可 (変更・キャンセルは電話で)、子供連れは事前に連絡、カード可、電子マネー・QR不可、カウンター7席、貸切20人まで、禁煙、オープン日2022年10月5日。口コミ (2024年6月〜2026年10月): Kumamoto 出身の大将がKumamoto とAmakusa の魚を中心に使うおまかせ、22000円 (2026年8月)、約2時間、アラカルトもあり、ひのきのカウンターと土壁、冷たい茶碗蒸し (タラバガニ、Kumamoto の赤なす)、鮎のコンフィ、あん肝と奈良漬、白菜・れんこん・しょうがの3種のガリ、Amakusa の鯛、漬けまぐろ、トロ、3年熟成のトロ、こはだ、アオリイカとうに、車えび、少し甘い醤油の馬刺しの握り、穴子、赤だし、プリンのような玉子、日本酒のディプロマを持つ大将が選ぶ日本酒、ミシュラン三つ星の店出身という声、2024年6月は大将ひとり、深夜まですしが食べられる。',
      confidence: 'medium', sources: [TB, R + 'B487523991/', R + 'B531439755/', R + 'B533370110/', R + 'B534489750/', R + 'B535048730/', R + 'B535598994/', R + 'B536249864/', R + 'B537254315/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (7 seats); omakase about two hours; open until 2:00.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-31 月虎51番館 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番31号 (go) 5m. 日本酒BAR 四季 (osaka_sake_bar_shiki_higashishinsaibashi, address_ja "大阪府大阪市中央区東心斎橋2-5-30 オックス周防町ビル 2F") is in the next building, about 7 m away on its own Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534489750/', R + 'B535048730/', R + 'B487523991/'],
    price_note: 'Course price from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥22,000', 'Course', 'ask', 'no', 'August 2026; about two hours.', 'omakase'),
      it('', '', 'Horse-meat nigiri (in the course)', '', 'Course', 'ask', 'no', 'June 2024 to August 2026; slightly sweet soy sauce.', 'basashi_nigiri'),
      it('', '', 'Monkfish liver with Nara-zuke (in the course)', '', 'Course', 'ask', 'no', 'June 2024 and August 2026.', 'ankimo'),
    ] }, {
    cuisine: 'Kumamoto 出身の大将がKumamoto とAmakusa の魚介を中心に握るおまかせのすしのカウンター (7席)・おまかせ22000円 (2026年8月): 小皿、刺身、季節の煮物、焼きもの、握り6〜8貫、巻きもの、茶碗蒸し、汁、デザート・例 (2024〜2026年): タラバガニやKumamoto の赤なすの冷たい茶碗蒸し、鮎のコンフィ、あん肝と奈良漬、3種のガリ (白菜、れんこん、しょうが)、Amakusa の鯛、漬けまぐろ、トロ (3年熟成のトロも)、こはだ、アオリイカとうに、車えび、少し甘い醤油の馬刺しの握り、煮穴子、赤だし、プリンのような玉子・日本酒のディプロマを持つ大将が選ぶ日本酒',
    neighborhood: '東心斎橋2-5-31 月虎51番館 3F。長堀橋駅 (堺筋線)、心斎橋駅 (御堂筋線) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。醤油を使うおまかせのすし (馬刺しの握りは少し甘い醤油)、赤だし、煮物、低温で揚げた鮎がある。',
    vegan_detail: 'ヴィーガンではありません。魚介と馬肉のおまかせのコースで、茶碗蒸しと玉子も。',
    notes: '[すし・東心斎橋、深夜まで開いているKumamoto のおまかせカウンター] 東心斎橋のビルの3階にある、ひのきのカウンター7席の店。外からは想像できない落ち着いた和の空間で、18時から深夜2時まで。子供を寝かせてからこっそり来たという人も。Kumamoto 出身の大将が、Kumamoto とAmakusa の魚で22000円のおまかせを組み立てる。冷たい茶碗蒸し、鮎のコンフィ、あん肝と奈良漬、自家製の3種のガリ、そしてAmakusa の鯛から、うにをのせたアオリイカまでの握り。名物は少し甘い醤油で食べるKumamoto の馬刺しの握りで、涙が出るほどおいしかったという声も。大将は日本酒のディプロマを持ち、料理に合わせて日本酒を選ぶ。2026年8月の口コミには、ミシュラン三つ星の店出身の大将という声も。2024年6月には大将ひとりで、それでもテンポよく出していたという。',
  });
}

save();
