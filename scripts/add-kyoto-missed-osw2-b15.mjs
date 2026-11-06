// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 15.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, lane ids in order):
//   + ぎをん鮨尚充 Gion Sushi Takamitsu (10-seat Edo-style omakase off Hanamikoji; Kyoto branch of Nakameguro’s Sushi Takamitsu, since 2025)
//   - ラー麺 ずんどう屋 京都三条店 (26024283) skipped: chain — 6 ずんどう屋 shops in the Tabelog crawl (京都三条店, 天神橋4丁目店,
//     宗右衛門町店, 心斎橋店, 難波えびす橋店, 道頓堀店).
//   - 餃々 三条木屋町店 (26003955) skipped: chain — 浪花ひとくち餃子 餃々 has "about 40 shops nationwide" (enjoytokyo.jp article on the
//     浜松町店); 3 in the Tabelog crawl (三条木屋町店, 天満店, 四条河原町店) and branches named in listings at 大阪駅前第3ビル, 阪急高槻,
//     銀座コリドー, 有楽町, 錦糸町, 浜松町.
//   + 竹きし Takekishi (kappo with kamameshi off Hanamikoji; since 1996)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + 呑喜屋むね Nonkiya Mune (12-seat fish-led counter in a Goshominami alley)
//   + よこちょう Yokocho (seafood izakaya at Kawabata-Nijo)
//   None is in data/kyoto.json: grep by id, name (尚充/Takamitsu, 竹きし/Takekishi, 呑喜屋/Nonkiya, よこちょう/Yokocho) and address
//   (祇園町南側570-239, 末吉町 高見ビル, 絹屋町127, 難波町210) found none.
//   Same-name counts (Samboa ruling): 尚充 — 2 (中目黒 and 祇園); 竹きし, 呑喜屋むね, よこちょう — one listing each in the Tabelog crawl.
//   Service charges checked against Tabelog’s Japanese original: 竹きし 「付き出し＋前菜 １６００円」 (a cover of starter and appetiser);
//   餃々 「チャージなし」; the others list none.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26024283', 'chain: 6 ずんどう屋 shops in the Tabelog crawl (京都三条店, 天神橋4丁目店, 宗右衛門町店, 心斎橋店, 難波えびす橋店, 道頓堀店)');
skip('26003955', 'chain: 浪花ひとくち餃子 餃々 has about 40 shops nationwide (enjoytokyo.jp/article/110394); 3 in the Tabelog crawl (三条木屋町店, 天満店, 四条河原町店)');

// ================================================================ ぎをん鮨尚充
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042535/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '20:30'], ['21:00', '23:30']);
  put({
    id: 'kyoto_gion_sushi_takamitsu', name: 'ぎをん鮨尚充 (Gion Sushi Takamitsu)', category: 'OMNI',
    lat: 35.002582, lng: 135.774921, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. An omakase of nigiri and small dishes seasoned with soy, sweet soy, ponzu or salt; the course includes somen, and no gluten information is published (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and seafood omakase (2025–26 reviews).',
    hours_raw: '12:00–15:00, 18:00–20:30 and 21:00–23:30 Monday to Saturday and holidays; closed Sunday (Tabelog). Reservation only, through OMAKASE, where the course fee is paid in advance; extras ordered on the day are paid by cash or card (Tabelog). 10 counter seats; non-smoking (Tabelog). Next to 祇園 徳山 on Hanamikoji (Tabelog); about 10 min from Gion-Shijo Stn. Most diners spend ¥30,000–50,000 (Tabelog; 2026 reviews). Opened 10 February 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanamikoji in Gion, south of Shijo — 10 min from Gion-Shijo Stn',
    cuisine: 'Edo-style sushi omakase, nigiri and small dishes served in a mixed order (2025–26 reviews) · shijimi clam soup to start · prize-winning Nagasaki oysters · tuna from the Yamako wholesaler (191–238 kg fish from Nachikatsuura), chutoro, otoro, a tuna steak, toro-taku with caviar · sea urchin tastings, sea urchin rice · white squid, kohada, white shrimp, Hokkaido kinki with yamawasabi, kinmedai from Choshi, ankimo and kanpyo roll, anago with salt · iburi-gakko with mascarpone · warm somen and tamagoyaki to finish (2025–26 reviews) · wine and sake; a tequila toast for the whole counter at the end (2026 reviews)',
    website: null, gmaps: gm('ぎをん鮨尚充 花見小路'), menu_url: TB,
    notes: "[Sushi · Gion, a Tokyo sushi-ya's party counter] The Kyoto branch of Nakameguro's Sushi Takamitsu, opened in February 2025 on Hanamikoji: a ten-seat counter where the young chef, Jun Kamekawa, serves an Edo-style omakase with small rice portions, tuna from the Yamako wholesaler, plenty of sea urchin and toro-taku with caviar, mixed in with dishes such as a tuna steak and iburi-gakko with mascarpone. It ends loud — music changes and the whole counter toasts with tequila; Louis Vuitton cases serve as sushi stands. Prepaid booking through OMAKASE; about ¥30,000–50,000. Closed Sunday.",
    chef_bio: { chef_name: 'Jun Kamekawa', roles: ['Chef (named in a September 2026 review, Instagram @sushi.jjj); an April 2026 reviewer says the chef runs the shop with a spouse'], origin: null,
      background: 'Per 2026 reviewers: the shop is a Kyoto branch (noren-wake) of the famous Nakameguro restaurant Sushi Takamitsu; chef Jun Kamekawa comes from Sushi Takamitsu (September 2026). Opened 10 February 2025 (Tabelog). Names written only in Latin letters in the sources, except a Japanese review that calls the parent shop 中目黒の名店.',
      philosophy: null,
      specialty: 'Sea urchin; Yamako tuna; toro-taku with caviar.',
      anecdotes: [
        { text: 'At the end of a March 2026 meal the music changed and everyone at the counter raised a glass of tequila.', source: R + 'B525182955/' },
        { text: 'A May 2026 diner noted two Louis Vuitton suitcases used as stands for the sushi.', source: R + 'B528822968/' },
        { text: 'A June 2026 diner found the closing tequila "festival" not really necessary, though the food was good.', source: R + 'B529468086/' },
        { text: 'A June 2026 diner liked the cat bonsai in the entrance garden and the light used to serve the closing tea.', source: R + 'B529516260/' },
      ],
      japanese_sources_summary: '食べログ: ぎをん鮨尚充、寿司、東山区祇園町南側570-239、花見小路通「祇園 徳山」の隣、祇園四条駅から徒歩10分、月〜土・祝 12:00〜15:00・18:00〜20:30・21:00〜23:30、日曜休み、完全予約制 (OMAKASE で予約、コース代は事前決済、当日の追加注文は現金・カード)、10席、禁煙、2025年2月10日オープン。口コミ (2026年4月、日本語): 中目黒の名店の暖簾分けで京都進出、しじみ汁、長崎県の牡蠣、白イカ、コハダ、白えび、バフン雲丹、金目鯛の塩焼きとやま山葵、マグロのステーキ、いぶりがっことマスカルポーネ、那智勝浦のマグロ、中トロ・大トロ、トロタクキャビア、白子、あん肝、温かい素麺、玉子焼き、最後は VIP 待遇の演出。英語の口コミ (2025年12月〜2026年10月): Jun Kamekawa シェフ、テキーラで乾杯、Louis Vuitton のケース。',
      confidence: 'medium', sources: [TB, R + 'B519699846/', R + 'B523351613/', R + 'B525182955/', R + 'B526431337/', R + 'B526559209/', R + 'B528822968/', R + 'B529468086/', R + 'B529516260/', R + 'B534776024/', R + 'B535676851/', R + 'B535728519/', R + 'B538076121/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Prepaid booking through OMAKASE; a loud tequila toast ends the meal.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-239',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002582, 135.774921); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 140m — a large lot block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No course price published; Tabelog budget ¥30,000–39,999, reviewers ¥30,000–59,999.', last_checked: TODAY, items: [
      it('', 'omakase', 'Sushi omakase (booked through OMAKASE)', '', 'Course', 'ask', 'no', 'Prepaid; about ¥30,000–50,000.', 'omakase'),
    ] }, {
    cuisine: '江戸前の寿司のおまかせ。握りと一品が順不同で出る (2025〜2026年の口コミ)・最初にしじみ汁・受賞歴のある長崎県の牡蠣・Yamako のマグロ (那智勝浦の191〜238kg)、中トロ、大トロ、マグロのステーキ、トロタクキャビア・雲丹の食べ比べ、雲丹ご飯・白イカ、コハダ、白えび、Hokkaido のキンキとやま山葵、Choshi の金目鯛、あん肝とかんぴょう巻き、塩の穴子・いぶりがっことマスカルポーネ・締めは温かい素麺と玉子焼き (2025〜2026年の口コミ)・ワインと日本酒、最後はカウンター全員でテキーラの乾杯 (2026年の口コミ)',
    neighborhood: '四条の南、祇園の花見小路。祇園四条駅から徒歩10分',
    gf_detail: '予約時に要確認。握りと一品のおまかせで、醤油、甘いたれ、ポン酢、塩で味をつける。素麺も出て、グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介のおまかせ (2025〜2026年の口コミ)。',
    notes: '[寿司・祇園、東京の鮨屋のにぎやかなカウンター] 中目黒の Sushi Takamitsu の京都店。2025年2月に花見小路で開店した10席のカウンターで、若い Jun Kamekawa シェフが江戸前のおまかせを握る。シャリは小さめ、Yamako のマグロ、たっぷりの雲丹、トロタクキャビアに、マグロのステーキやいぶりがっことマスカルポーネなどの一品が混ざる。最後は音楽が変わり、カウンター全員でテキーラの乾杯。寿司台には Louis Vuitton のケース。予約は OMAKASE で事前決済、3〜5万円ほど。日曜休み。',
  });
}

// ================================================================ 竹きし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000277/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://takekishi.com/'; const MENU = SITE + 'menu/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kappo_takekishi', name: '割烹 竹きし (Kappo Takekishi)', category: 'OMNI',
    lat: 35.005099, lng: 135.774929, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kappo cooking with dashi and soy, tempura, fried dishes and nama-fu, and about ten kinds of kamameshi; no gluten information is published (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish and meat kappo with dashi; vegetable dishes such as nasu dengaku or yuba with vegetables have no published ingredients (official menu).',
    hours_raw: 'Lunch 12:00–14:00 (booking required) and dinner 17:00–22:00, Monday to Saturday; closed Sunday and holidays (official site; Tabelog gives Sunday closed and notes closing days can change over long holidays). Cover of a starter and appetiser ¥1,600 at dinner (Tabelog’s Japanese original: 「付き出し＋前菜 １６００円」). 17 seats: a counter of 9 and two horigotatsu tatami rooms for 4 (official site); smoking allowed (Tabelog). Cards accepted (official site; Tabelog). Average spend: lunch ¥2,600–5,000, dinner ¥10,000–15,000 (official site). Leftover kamameshi can be wrapped as rice balls (May 2023). On the 1st floor of 高見ビル on Sueyoshicho west of Hanamikoji, near Shirakawa-minami-dori and Shinbashi-dori; 5 min from Gion-Shijo Stn (official site). Opened 9 September 1996 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sueyoshicho west of Hanamikoji, Gion — 5 min from Gion-Shijo Stn',
    cuisine: 'Unpretentious Kyoto kappo with Kyoto vegetables, nama-fu, yuba, Wakasa guji and fish sent from the Sea of Japan (official site) · kamameshi, about ten kinds: wild vegetables ¥1,600, taro and chirimen ¥1,600, chicken and mushroom ¥1,700, gomoku ¥1,800, seafood butter ¥1,800, paella-style ¥2,100, turban shell ¥2,000, ayu ¥2,000, sea bream ¥2,200 · kamameshi gozen ¥4,180, sashimi gozen ¥5,390 (before tax) · Takekishi kaiseki ¥7,480 (official menu) · à la carte: salt-grilled ayu, Kamo eggplant with prawn sauce, nodoguro, hamo, Wakasa guji, nasu and nama-fu dengaku, maru-nabe (soft-shelled turtle), yuba with vegetables, beef cutlet, tempura, shijimi soup ¥300 (official menu)',
    website: SITE, gmaps: gm('割烹 竹きし 末吉町'), menu_url: MENU,
    notes: "[Kappo · Gion, kamameshi in the old geisha quarter] A long-running kappo counter by Shirakawa-minami-dori in Gion, open since 1996 and loved by locals for being easy to drop into. The draw is kamameshi cooked to order in about ten kinds — chicken and mushroom, seafood butter, a paella-style pot, ayu or sea bream in season — after Kyoto dishes of guji, hamo, nama-fu and yuba. Lunch gozen from ¥4,180 (booking needed); dinner course ¥7,480 or à la carte, with a ¥1,600 starter cover. Smoking allowed. Closed Sunday and holidays.",
    chef_bio: { chef_name: null, roles: ['Head chef and owner, neither named (August 2025 review)'], origin: null,
      background: 'Per the official site: near the teahouses of Shirakawa-minami-dori and Shinbashi-dori in the heart of Gion, but with an unpretentious feel, loved by locals; kaiseki and many à la carte dishes with Kyoto vegetables, nama-fu, yuba, Wakasa guji and fish sent direct from the Sea of Japan, using the ingredients’ own flavour, good dashi and touches such as kinome; about ten kamameshi always available, many regulars coming for the kamameshi. Opened 9 September 1996 (Tabelog); a May 2023 reviewer notes more than 30 years in business.',
      philosophy: 'Per the official site: make the most of each ingredient with good dashi — "これぞ京都の味".',
      specialty: 'Kamameshi; Kyoto kappo dishes.',
      anecdotes: [
        { text: 'A January 2022 pair booked a ¥9,000 course and were served two different kamameshi chosen from about ten kinds.', source: R + 'B445475295/' },
        { text: 'A May 2023 diner was offered the unfinished kamameshi as rice balls to take home.', source: R + 'B474420152/' },
        { text: 'An October 2026 family came after a Shichi-Go-San visit, and the one-year-old granddaughter happily dug into the kamameshi.', source: R + 'B536976378/' },
      ],
      japanese_sources_summary: '公式サイト (takekishi.com): 割烹 竹きし、祇園で出会う正統派京料理の割烹、白川南通や新橋通のすぐ近く、気取りのない雰囲気で地元の人に愛される店、会席料理と一品料理、京野菜、生麩、湯葉、若狭ぐじ、日本海から直送の魚貝、名物の釜めし (鶏ときのこ、小芋とおじゃこ、海鮮バター、パエリヤ風、季節限定のカニ、カキ、アユなど常時10種類程)、釜めし御膳4,180円・お造り御膳5,390円 (税別)、竹きし会席7,480円、釜めし: 山菜1,600円、小芋とおじゃこ1,600円、鶏きのこ1,700円、五目1,800円、海鮮バター1,800円、パエリヤ風2,100円、さざえ2,000円、あゆ2,000円、たい2,200円、しじみ汁300円、東山区祇園花見小路末吉町西入ル 高見ビル1F、昼12:00〜14:00 (要予約)・夜17:00〜22:00、日・祝定休、17席 (カウンター9席、お座敷4名×2)、カード可、平均予算 昼2,600〜5,000円・夜10,000〜15,000円。食べログ: 日本料理、付き出し＋前菜1,600円、喫煙可、1996年9月9日オープン。口コミ (2017〜2026年、英語)。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B405526149/', R + 'B445475295/', R + 'B461752387/', R + 'B464986604/', R + 'B474420152/', R + 'B483783185/', R + 'B504648616/', R + 'B510955176/', R + 'B511826272/', R + 'B536976378/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch ahead; ¥1,600 starter cover at dinner; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園花見小路末吉町西入ル 高見ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005099, 135.774929); GSI matched only the town (京都府京都市東山区末吉町, 111m) — the address has no lot number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, MENU],
    price_note: 'Official site menu (gozen prices before tax; others as listed).', last_checked: TODAY, items: [
      it('鶏きのこ', 'kamameshi', 'Chicken and mushroom kamameshi', '¥1,700', 'Kamameshi', 'ask', 'no', '', 'kama_chicken'),
      it('海鮮バター', 'kamameshi', 'Seafood butter kamameshi', '¥1,800', 'Kamameshi', 'ask', 'no', '', 'kama_seafood'),
      it('釜めし御膳', '', 'Kamameshi gozen (lunch)', '¥4,180', 'Gozen', 'ask', 'no', 'Before tax.', 'kama_gozen'),
      it('竹きし会席', '', 'Takekishi kaiseki', '¥7,480', 'Course', 'ask', 'no', '', 'kaiseki'),
    ] }, {
    cuisine: '京野菜、生麩、湯葉、若狭ぐじ、日本海から直送の魚貝を使う気取りのない京料理の割烹 (公式サイト)・釜めしは約10種: 山菜1,600円、小芋とおじゃこ1,600円、鶏きのこ1,700円、五目1,800円、海鮮バター1,800円、パエリヤ風2,100円、さざえ2,000円、あゆ2,000円、たい2,200円・釜めし御膳4,180円、お造り御膳5,390円 (税別)・竹きし会席7,480円 (公式メニュー)・一品: 鮎の塩焼、加茂茄子海老あん掛け、のどぐろ、鱧、若狭ぐじ焼、茄子田楽、生麩田楽、丸鍋、湯葉と野菜の焚合せ、牛肉のカツレツ、天ぷら、しじみ汁300円 (公式メニュー)',
    neighborhood: '祇園、花見小路の西の末吉町。祇園四条駅から徒歩5分',
    gf_detail: '要確認。だしと醤油の京料理の割烹で、天ぷら、揚げ物、生麩、約10種の釜めしがある。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、肉の割烹料理でだしを使う。茄子田楽や湯葉と野菜の焚合せなど野菜の料理も原材料は公開されていない (公式メニュー)。',
    notes: '[割烹・祇園、花街の釜めし] 祇園の白川南通近くにある1996年からの割烹のカウンター。気軽に立ち寄れる店として地元の人に愛されている。名物は注文を受けて炊く約10種の釜めし: 鶏きのこ、海鮮バター、パエリヤ風、季節のあゆやたい。その前に、ぐじ、鱧、生麩、湯葉の京料理を。昼の御膳は4,180円から (要予約)、夜は7,480円の会席かアラカルトで、付き出し＋前菜1,600円。喫煙可。日・祝休み。',
  });
}

// ================================================================ 呑喜屋むね
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26016501/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_nonkiya_mune', name: '呑喜屋むね (Nonkiya Mune)', category: 'OMNI',
    lat: 35.015202, lng: 135.763452, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A long menu of sashimi, grilled fish, tempura, beef cutlet, croquettes, stir-fries and dobin-mushi; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led counter; vegetable plates such as stir-fried lettuce or grilled shiitake have no published ingredients (2026 reviews).',
    hours_raw: '17:30–22:00 Monday to Saturday; closed Sunday (Tabelog). Book ahead — a March 2026 caller was turned away at 18:00, and an October 2026 pair booked by phone two weeks ahead. 12 seats: a long counter facing a small courtyard and one table for four (Tabelog; June and October 2026); designated smoking area; JCB and AMEX cards, e-money and QR (Tabelog). A dobin-mushi or chawanmushi comes first as a starter (May–September 2026). Down an alley off Sakaimachi-dori north of Ebisugawa, near the Imperial Palace; about 5 min from Marutamachi Stn (Tabelog; 2026 reviews). Tabelog Diner "Tabelog 100" 2026; a May 2026 diner saw a Michelin sticker inside.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-dori south of the Imperial Palace — 5 min from Marutamachi Stn',
    cuisine: 'Fish-led small dishes at a counter (2026 reviews) · assorted sashimi ¥2,750 (March 2026): bluefin tuna, katsuo, fugu, seared kinmedai, squid, octopus, sea urchin; in August 2026 hamo, shima-aji, toro, amaebi, torigai · grilled kinki, natural hirame, first sanma · matsutake dobin-mushi as a starter · maitake and greens stew ¥660 · tempura, beef cutlet of rare strip loin, crab cream croquette, chicken-wing kara-age, butter-fried octopus and asparagus, stir-fried lettuce with oyster sauce, potato salad, kabuto-ni, tai-shabu with rice porridge, sea urchin rice ball · sake from Kyoto, Shiga, Osaka and Akita (Ugo no Tsuki ¥990)',
    website: null, gmaps: gm('呑喜屋むね 堺町'), menu_url: TB,
    notes: "[Izakaya · Goshominami, a fish-led counter run by owner and mother] A twelve-seat counter in a townhouse down an alley off Sakaimachi-dori, where the owner cooks and the owner's mother serves. Built on fish: a big sashimi platter (about ¥2,750 in March 2026), grilled kinki or the first sanma, a matsutake dobin-mushi as a starter, then a long list from tempura and rare beef cutlet to stir-fried lettuce. More a refined small restaurant than its name suggests; about ¥6,000–10,000. Book well ahead. Tabelog Diner 'Tabelog 100' 2026. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef, not named, working with the owner’s mother (August and October 2026 reviews)'], origin: null,
      background: 'Per an August 2026 reviewer: the owner entered cooking through a part-time restaurant job as a student and trained at a Japanese restaurant specialising in seafood before going independent, so the cooking is rooted in fish; the owner selects seasonal seafood personally. Reviewers in June, August and October 2026 describe a parent-and-child team — the owner and the owner’s mother, with a part-timer. A May 2026 diner saw a Michelin sticker inside. Tabelog Diner "Tabelog 100" 2026 (Tabelog).',
      philosophy: null,
      specialty: 'Sashimi platter; seasonal grilled fish; beef cutlet.',
      anecdotes: [
        { text: 'An April 2026 diner was guided by the owner through the menu and called the tai-shabu with its closing porridge the highlight.', source: R + 'B529184832/' },
        { text: 'A September 2026 visitor from Tokyo, served a dobin-mushi as the first dish, joked about being tested — "the baptism of Kyoto".', source: R + 'B536698962/' },
        { text: 'An October 2026 diner noted that all the guests that evening were Japanese or fluent in Japanese.', source: R + 'B536678908/' },
      ],
      japanese_sources_summary: '食べログ: 呑喜屋むね、食堂・居酒屋、中京区堺町通夷川上る絹屋町127-5、丸太町駅から386m、月〜土 17:30〜22:00、日曜休み、予約可、12席、分煙、カード (JCB・AMEX)・電子マネー・QR 可、食堂 百名店 2026。口コミ (2026年2〜10月、英語): 刺身の盛り合わせ2,750円、キンキ、天然ヒラメ、土瓶蒸し、天ぷら、牛カツ、カニクリームコロッケ、手羽先の唐揚げ、レタス炒め、鯛しゃぶ、雲丹のおにぎり、店主とお母さん、ミシュランのステッカー。',
      confidence: 'medium', sources: [TB, R + 'B523148331/', R + 'B523262215/', R + 'B524084089/', R + 'B528071377/', R + 'B528513746/', R + 'B529184832/', R + 'B530693643/', R + 'B534321850/', R + 'B535350063/', R + 'B536678908/', R + 'B536698962/', R + 'B538444280/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book well ahead; designated smoking area.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通夷川上る絹屋町127-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015202, 135.763452); cross-checked: GSI 京都府京都市中京区絹屋町127番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524084089/'],
    price_note: 'Prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi platter', '¥2,750', 'Fish', 'ask', 'no', 'March 2026.', 'sashimi'),
      it('', '', 'Maitake mushroom and greens stew', '¥660', 'Small dishes', 'ask', 'ask', 'March 2026.', 'maitake_stew'),
    ] }, {
    cuisine: 'カウンターで魚が中心の一品料理 (2026年の口コミ)・刺身の盛り合わせ2,750円 (2026年3月): 本鮪、鰹、ふぐ、金目鯛の炙り、イカ、タコ、雲丹。2026年8月は鱧、縞鯵、トロ、甘海老、鳥貝・キンキの焼き物、天然ヒラメ、初物の秋刀魚・前菜に松茸の土瓶蒸し・舞茸と青菜の炊いたん660円・天ぷら、レアのロースの牛カツ、カニクリームコロッケ、手羽先の唐揚げ、タコとアスパラのバター炒め、レタスのオイスターソース炒め、ポテトサラダ、兜煮、鯛しゃぶと雑炊、雲丹のおにぎり・Kyoto、Shiga、Osaka、Akita の日本酒 (Ugo no Tsuki 990円)',
    neighborhood: '御所の南の堺町通。丸太町駅から徒歩5分',
    gf_detail: '要確認。刺身、焼き魚、天ぷら、牛カツ、コロッケ、炒め物、土瓶蒸しなど品数が多い。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心のカウンター。レタス炒めや焼き椎茸など野菜の皿も原材料は公開されていない (2026年の口コミ)。',
    notes: '[居酒屋・御所南、店主とお母さんの魚のカウンター] 堺町通から入る路地の町家にある12席のカウンター。店主が料理を作り、店主のお母さんが接客する。魚が中心で、大きな刺身の盛り合わせ (2026年3月は2,750円ほど)、キンキや初物の秋刀魚の焼き物、前菜の松茸の土瓶蒸し、天ぷらからレアの牛カツ、レタス炒めまで品数が多い。店名の印象より上品な小料理屋で、予算は6,000〜10,000円ほど。予約は早めに。食べログ 食堂 百名店 2026。日曜休み。',
  });
}

// ================================================================ よこちょう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006085/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yokocho_kawabata_nijo', name: 'よこちょう (Yokocho)', category: 'OMNI',
    lat: 35.013555, lng: 135.773564, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, simmered and grilled fish, fried squid and horse mackerel, saba sushi and simmered chicken liver; no gluten information is published (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; vegetable plates such as grilled shiitake, manganji peppers or mozuku have no published ingredients (2026 reviews).',
    hours_raw: '17:00–22:00 Monday to Saturday; closed Sunday (Tabelog). 2-hour limit (Tabelog). Book by phone, and order the sashimi platter when booking — a July 2026 diner was told one platter per person is a booking condition; fully booked on Saturday nights (2026 reviews). 60 seats over two floors with a counter; the 1st-floor menu differs from upstairs (July 2026); first orders are written on paper from the whiteboard (August 2026); non-smoking; cash only — no cards, e-money or QR (Tabelog). On Nijo-dori east of Kawabata, near Heian Shrine; about 10 min from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nijo-dori east of Kawabata, near Heian Shrine — 10 min from Jingu-Marutamachi Stn',
    cuisine: 'Seafood izakaya with a whiteboard menu that changes with the catch (2026 reviews) · the assorted sashimi platter, about ¥2,500–3,000 a head (August 2026): flounder, boiled anago, abalone, squid, tuna, amaebi, karasumi, torigai, kombu-cured white fish; hamo in summer; katsuo on a separate plate · simmered whelk, grilled sanma, ayu and hatahata, fried squid legs, fried horse mackerel, braised fish · simmered chicken liver, potato salad, deep-fried tofu, mozuku, fried Kamo eggplant · tekka-maki, saba sushi by the piece · hairy crab ¥8,500 (November 2026), soft-shelled turtle zosui, dobin-mushi · a wide range of sake and shochu',
    website: null, gmaps: gm('よこちょう 二条川端 居酒屋'), menu_url: TB,
    notes: "[Izakaya · Kawabata-Nijo, the sashimi platter everyone books] A busy two-floor seafood izakaya on Nijo east of the Kamo, loved by locals and by students who come back years later. The thing to order — ask for it when booking — is the sashimi platter, nine kinds such as flounder, abalone, karasumi and kombu-cured white fish for about ¥2,500–3,000 a head; then simmered and grilled fish from the whiteboard, chicken liver, potato salad and saba sushi by the piece, with plenty of sake. Cash only, two-hour limit, book by phone. Tabelog izakaya WEST 'Tabelog 100' 2026. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner, not named, who chats with regulars and sees guests out (August 2026)'], origin: null,
      background: 'A long-loved local seafood izakaya; reviewers describe coming first as students, brought by a seminar professor, and returning for years (June 2026), and visitors from near and far (September 2026). Tabelog izakaya WEST "Tabelog 100" 2026 (Tabelog).',
      philosophy: null,
      specialty: 'Assorted sashimi platter; simmered and grilled fish.',
      anecdotes: [
        { text: 'A June 2026 regular first came as a university student, brought by a seminar professor, and stops by on every Kyoto visit since.', source: R + 'B517232367/' },
        { text: 'An August 2026 solo diner was handed paper and a pencil to write the first order from the whiteboard, and the owner saw the diner out with a chat.', source: R + 'B533306201/' },
        { text: 'Four friends in November 2026 shared a ¥8,500 hairy crab, carefully prepared for the table.', source: R + 'B538532434/' },
      ],
      japanese_sources_summary: '食べログ: よこちょう、居酒屋・魚介料理、左京区二条通川端東入ル難波町210、神宮丸太町駅から徒歩約10分、月〜土 17:00〜22:00、日曜休み、60席、禁煙、カード・電子マネー・QR 不可、2時間制、居酒屋 WEST 百名店 2026。口コミ (2023年9月〜2026年11月、英語): 刺身の盛り合わせ (予約時に注文、1人1皿が予約の条件という声)、ホワイトボードのメニュー、紙と鉛筆で注文、1階と2階でメニューが違う、鶏レバーの煮付け、ポテトサラダ、鯖寿司1貫から、毛蟹8,500円、すっぽん雑炊。',
      confidence: 'medium', sources: [TB, R + 'B500409574/', R + 'B517232367/', R + 'B530945032/', R + 'B532012524/', R + 'B532655271/', R + 'B533306201/', R + 'B534392244/', R + 'B535199408/', R + 'B535439866/', R + 'B537521049/', R + 'B538329400/', R + 'B538532434/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings; order the sashimi platter when booking; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区二条通川端東入ル難波町210',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013555, 135.773564); cross-checked: GSI 京都府京都市左京区難波町210番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534392244/', R + 'B538532434/'],
    price_note: 'Prices from August and November 2026 reviews; menu changes with supply.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi platter (per person)', '¥2,500', 'Fish', 'ask', 'no', 'About ¥2,500–3,000 a head (August 2026).', 'sashimi'),
      it('', '', 'Hairy crab', '¥8,500', 'Fish', 'ask', 'no', 'November 2026.', 'kegani'),
    ] }, {
    cuisine: '仕入れで変わるホワイトボードのメニューの魚介の居酒屋 (2026年の口コミ)・刺身の盛り合わせは1人2,500〜3,000円ほど (2026年8月): ヒラメ、煮穴子、アワビ、イカ、マグロ、甘海老、からすみ、鳥貝、昆布締めの白身。夏は鱧、鰹は別皿・バイ貝の煮付け、秋刀魚、鮎、ハタハタの焼き物、ゲソの唐揚げ、アジフライ、煮魚・鶏レバーの煮付け、ポテトサラダ、厚揚げ、もずく、賀茂茄子の揚げ物・鉄火巻き、1貫からの鯖寿司・毛蟹8,500円 (2026年11月)、すっぽん雑炊、土瓶蒸し・日本酒と焼酎が豊富',
    neighborhood: '平安神宮に近い、川端の東の二条通。神宮丸太町駅から徒歩10分',
    gf_detail: '要確認。刺身、煮魚と焼き魚、ゲソやアジの揚げ物、鯖寿司、鶏レバーの煮付け。グルテンの情報は公開されていない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の居酒屋。焼き椎茸、万願寺、もずくなど野菜の皿も原材料は公開されていない (2026年の口コミ)。',
    notes: '[居酒屋・川端二条、みんなが予約する刺身の盛り合わせ] 鴨川の東、二条通にある2階建てのにぎやかな魚介の居酒屋。地元の人に愛され、学生時代に来た人が何年も通い続ける。予約時に頼むべきは刺身の盛り合わせで、ヒラメ、アワビ、からすみ、昆布締めの白身など9種ほどで1人2,500〜3,000円ほど。そのあとはホワイトボードから煮魚や焼き魚、鶏レバー、ポテトサラダ、1貫からの鯖寿司を日本酒とたっぷり。現金のみ、2時間制、電話で予約。食べログ 居酒屋 WEST 百名店 2026。日曜休み。',
  });
}

save();
