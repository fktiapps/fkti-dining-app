// Kyoto priority (kyoto-missed), worker osw13, batch 107 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: ダブリン, 灯 (AKARI), 肉亭 結, KappoBar 土井.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-107');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26016816', 'large parent: 全席個室 鮮や一夜 ラクエ四条烏丸店 belongs to DK Dining, the restaurant arm of 株式会社第一興商 (dkdining.com lists 28 shops; the 鮮や一夜 page lists Yaesu, Meieki 3-chome and this shop)');
skip('26041230', 'too thin to verify: うなぎtoアップルパイ 八坂1646 has four Tabelog reviews, two without text and one of them from 2024, giving no detail beyond eel rice balls and hitsumabushi');

// ================================================================ ダブリン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26016558/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '26:00']); const WE = day(['16:00', '25:00']);
  put({
    id: 'kyoto_dublin_irish_pub', name: 'ダブリン (Dublin)', category: 'OMNI',
    lat: 35.011304, lng: 135.769917, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an Irish pub menu of fish and chips, shepherd\'s pie, garlic toast, fried oysters, pasta and pizza (2025–2026 reviews); beers include Guinness and other barley beers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and chips, shepherd\'s pie, salami, smoked duck, steak. Edamame, nuts and a carrot salad were also ordered (2025–2026 reviews) — ask.',
    hours_raw: 'Tabelog: Mon–Sat 17:00–2:00 (food L.O. 23:00, drinks 24:00); Sun and holidays 16:00–1:00 (food L.O. 22:00, drinks 23:00); open all year; hours may change on the day. Happy hour until 19:00 with ¥200 off draft beer (2026 reviews). Reservations taken. Service charge: Tabelog\'s Japanese original reads 「なし」 (none), though its English page says one may be added — ask. 94 seats over two floors (counter and tables downstairs, 60 upstairs); parties up to 100. Smoking allowed. Cards, PayPay, Alipay. English and Korean menus and staff. Live music and sports on screens. By exit 2 of Kyoto Shiyakusho-mae, next to Hotel Okura Kyoto (2026 reviews). Opened 1 August 2010.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oike-dori at Kawaramachi, by Kyoto City Hall — at Kyoto Shiyakusho-mae exit 2',
    cuisine: 'A big Irish pub by Kyoto City Hall since 2010, half full of overseas guests, with Guinness, Irish whiskey and pub food (Tabelog; 2025–2026 reviews) · fish & chips small ¥780; shepherd\'s pie ¥1,200; Baileys milk ¥800 (July 2025) · Irish highball from ¥700 (October 2025) · Pilsner Urquell pint ¥1,400, ¥1,200 at happy hour (March 2026) · Ichijoji Brewery Destroy Angel IPA ¥1,350 (June 2026) · Guinness; Heineken 570ml · smoked duck, carrot salad, fried oysters, Margherita pizza (2026) · party plans with steak and fried oysters and all-you-can-drink (August 2025)',
    website: 'http://dublin.kyoto-pontocho.jp/index.html', gmaps: gm('Irish Pub Dublin 京都 御池'), menu_url: TB + 'dtlmenu/',
    notes: '[Irish pub · Oike by Kyoto City Hall, a two-floor pub] A roomy Irish pub right at the City Hall subway exit, open to 2 am: Guinness and Urquell on draft, Irish whiskey, fish and chips and shepherd\'s pie, with a 19:00 happy hour and a big mixed crowd of locals and travellers. About ¥2,000–4,000. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 1 August 2010 (Tabelog). Reviewers describe polite, friendly staff, a calm first floor and party groups upstairs, and about half the customers from overseas (2025–2026). Criticism: soggy fish batter and a pie without pastry (July 2025); noise from a large group (January 2026).',
      philosophy: null,
      specialty: 'Guinness and draft beers; fish and chips.',
      anecdotes: [
        { text: 'September 2025: "I enjoyed a Guinness while savoring some traditional fish and chips! I was delighted to find that it was very close to the authentic style."', source: R + 'B514043310/' },
        { text: 'October 2026: "From 6 to 7 PM, they have a happy hour with great prices on both beer and food. I sat at the counter and enjoyed a relaxing time watching the Japan Series."', source: R + 'B538057225/' },
      ],
      japanese_sources_summary: '食べログ: ダブリン、パブ・ビアホール・ビアバー、中京区御池通り河原町東入ル一之船入町537-23 ミレニアム御池ビル1F・2F、地下鉄東西線京都市役所前駅2番出口の前、月〜土17:00〜翌2:00 (料理L.O.23:00、ドリンクL.O.24:00)、日・祝日16:00〜翌1:00 (料理L.O.22:00、ドリンクL.O.23:00)、年中無休、予約可、サービス料の原文は「なし」、94席 (1階カウンター8・テーブル20、2階60)、100名までのパーティー、喫煙可、カード・PayPay・Alipay可、英語・韓国語のメニューとスタッフ、ライブ音楽、スポーツ観戦、2010年8月1日オープン。口コミ (2025年7月〜2026年10月、英語): フィッシュ&チップス小780円、シェパーズパイ1,200円、ベイリーズミルク800円、アイリッシュハイボール700円〜、ピルスナーウルケル1,400円 (ハッピーアワー1,200円)、IchijojiブリュワリーのIPA 1,350円、ギネス、19時までのハッピーアワー、客の半分ほどが海外の人、ホテルオークラ京都の隣、衣がしんなりとの声 (2025年7月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B510720942', 'B512460044', 'B514043310', 'B515207661', 'B521310419', 'B524835897', 'B527008703', 'B533209261', 'B535658610', 'B536332014', 'B537195821', 'B538057225'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English and Korean menus and staff (Tabelog); many overseas guests. Smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御池通り河原町東入ル一之船入町537-23 ミレニアム御池ビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August, September and October 2026.' },
    pin_source: `Tabelog ${TB} (35.011304, 135.769917); GSI resolves the large parent lot 京都府京都市中京区一之船入町537番地 about 138m away; nearest pin kyoto_atelier_pages 67m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510720942/', R + 'B524835897/'],
    price_note: 'Prices from July 2025 to June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fish & chips (small)', '¥780', 'Pub food', 'no', 'no', 'July 2025.', 'fish_and_chips'),
      it('', '', 'Shepherd\'s pie', '¥1,200', 'Pub food', 'no', 'no', 'July 2025.', 'shepherds_pie'),
      it('', '', 'Irish highball', 'from ¥700', 'Drink', 'ask', 'ask', 'October 2025.', 'irish_highball'),
      it('', '', 'Pilsner Urquell pint', '¥1,400', 'Drink', 'no', 'ask', 'March 2026.', 'urquell'),
    ] }, {
    cuisine: '2010年から市役所近くにある大きなアイリッシュパブ。客の半分ほどが海外の人で、ギネス、アイリッシュウイスキー、パブ料理 (食べログ、2025〜2026年の口コミ)・フィッシュ&チップス小780円、シェパーズパイ1,200円、ベイリーズミルク800円 (2025年7月)・アイリッシュハイボール700円〜 (2025年10月)・ピルスナーウルケル1,400円、ハッピーアワーは1,200円 (2026年3月)・IchijojiブリュワリーのDestroy Angel IPA 1,350円 (2026年6月)・ギネス、ハイネケン570ml・スモークダック、キャロットラペ、カキフライ、マルゲリータ (2026年)・ステーキとカキフライ、飲み放題のパーティープラン (2025年8月)',
    neighborhood: '京都市役所そばの御池河原町。京都市役所前2番出口の前',
    gf_detail: 'グルテンフリーではない: フィッシュ&チップス、シェパーズパイ、ガーリックトースト、カキフライ、パスタ、ピザのアイリッシュパブ (2025〜2026年の口コミ)。ビールはギネスなど麦のもの。',
    vegan_detail: 'ヴィーガン不可: フィッシュ&チップス、シェパーズパイ、サラミ、スモークダック、ステーキ。枝豆、ナッツ、キャロットラペの注文もあり (2025〜2026年の口コミ)、要確認。',
    notes: '[アイリッシュパブ・京都市役所そばの御池、2フロアのパブ] 市役所前の地下鉄出口すぐの広いアイリッシュパブで、深夜2時まで。ギネスやウルケルの生、アイリッシュウイスキー、フィッシュ&チップスやシェパーズパイ。19時までのハッピーアワー、地元の人と旅行者でにぎわう。2,000〜4,000円ほど。喫煙可。',
  });
}

// ================================================================ 灯 (AKARI)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26012964/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '23:00']);
  put({
    id: 'kyoto_akari_karasuma_plaza', name: '灯 (AKARI)', category: 'OMNI',
    lat: 35.006655, lng: 135.760114, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: party buffets and courses with kara-age, pasta and soba (2023–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: buffets with ham, kara-age and pork (August 2025). An April 2026 course leaned on vegetables — ask.',
    hours_raw: 'Tabelog: daily 14:00–23:00, by reservation only — confirm numbers at least three days ahead; hours can be adjusted by phone; closed on irregular days. Built for private hire: 10 seats for small groups on weekdays (by consultation), up to 100 seated or 120 standing for parties; a whole private floor. Service charge: Tabelog\'s Japanese original reads 「無し」 (none), though its English page says one is added — ask. Designated smoking area. Cards, IC, e-money and QR. Children welcome, with a kids\' menu. Projector, screen and microphones. At the back of B1F of カラスマプラザ21, east side of Karasuma south of Rokkaku; 3 min from Karasuma, Shijo or Karasuma-Oike stations.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-dori south of Rokkaku — 3 min walk from Karasuma or Shijo',
    cuisine: 'A basement party hall with a six-metre ceiling and chandelier, serving Japanese and Western courses with all-you-can-drink for groups (Tabelog; 2019–2026 reviews) · courses from ¥4,000 with drinks (Tabelog) · ¥5,000 course of about nine dishes with all-you-can-drink (September 2023) · buffet of ham, kara-age, pork and pasta (August 2025) · soba and sweet-potato rice to finish (November 2025) · a vegetable-led course with produce from Sakanotochuu (April 2026)',
    website: 'https://merry-and-marry.jp', gmaps: gm('灯 AKARI 烏丸 カラスマプラザ21'), menu_url: TB + 'dtlmenu/',
    notes: '[Party venue & dining bar · Karasuma south of Rokkaku, a chandeliered basement hall] A hidden basement hall near Shijo-Karasuma with a soaring ceiling, chandelier and screen, booked for wedding after-parties and work dos: buffets or courses with all-you-can-drink from about ¥4,000–5,000. Reservation only; small groups on weekdays by arrangement.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Tabelog presents it as a private-hire venue for receptions and parties. Reviewers describe friendly staff, a chef who cooked a small-group course alone (April 2026), and beer poured from the bottom of the glass (September 2023). Criticism: the buffet was crowded and chaotic at a large party (June 2026); it felt more like renting a space than dining out (August 2025).',
      philosophy: null,
      specialty: 'Party courses and buffets with all-you-can-drink.',
      anecdotes: [
        { text: 'September 2023: "The atmosphere is perfect for after-parties, like wedding receptions, and it features a projector and sound system. The high ceilings and beautiful chandeliers create a stunning space."', source: R + 'B472134800/' },
        { text: 'April 2026: "The chef was working solo, serving each dish in a timely manner, and everything went very smoothly—it was impressive."', source: R + 'B526801473/' },
      ],
      japanese_sources_summary: '食べログ: 灯 (AKARI)、ダイニングバー・居酒屋・日本料理、中京区烏丸通六角下ル東側 カラスマプラザ21 B1奥、烏丸御池駅・四条駅・阪急烏丸駅から徒歩3分、毎日14:00〜23:00、完全予約制 (人数は3日前までに確定)、時間は電話で相談可、不定休、平日は少人数も相談可、最大着席100名・立食120名、フロア貸切、サービス料の原文は「無し」、分煙、カード・交通系IC・電子マネー・QR可、子供可・キッズメニュー、プロジェクター・マイク、公式サイト merry-and-marry.jp、天井高6メートルとシャンデリア、飲み放題付きのコース4,000円〜。口コミ (2019年7月〜2026年6月、英語): 飲み放題付き5,000円のコース (約9品、2023年9月)、ハム・唐揚げ・豚肉・パスタのビュッフェ (2025年8月)、締めのそばとさつまいもご飯 (2025年11月)、野菜中心のコース (2026年4月)、二次会や送別会に、ビュッフェが混雑との声 (2026年6月)。',
      confidence: 'low', sources: [TB, 'https://merry-and-marry.jp'].concat(rv(R, ['B432027501', 'B472134800', 'B472892729', 'B482296667', 'B501062973', 'B511588112', 'B516473911', 'B526801473', 'B530515647'])) },
    cultural_comfort: { level: 'japanese', note: 'Reservation only; mostly group parties.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区烏丸通六角下ル東側 カラスマプラザ21 B1奥',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April and June 2026.' },
    pin_source: `Tabelog ${TB} (35.006655, 135.760114); the address is a street direction with a building name (烏丸通六角下ル東側 カラスマプラザ21), which GSI resolves only to the ward — marked approximate; nearest pin kyr_ramen_mugyu_vol_2_karasu 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B472134800/'],
    price_note: 'Course price from a September 2023 review; Tabelog lists courses from ¥4,000.', last_checked: TODAY, items: [
      it('', '', 'Party course with all-you-can-drink (about 9 dishes)', '¥5,000', 'Course', 'no', 'no', 'September 2023.', 'party_course'),
    ] }, {
    cuisine: '天井高6メートルとシャンデリアの地下のパーティー会場。団体向けに和洋のコースと飲み放題 (食べログ、2019〜2026年の口コミ)・飲み放題付きのコース4,000円〜 (食べログ)・約9品と飲み放題の5,000円のコース (2023年9月)・ハム、唐揚げ、豚肉、パスタのビュッフェ (2025年8月)・締めのそばとさつまいもご飯 (2025年11月)・Sakanotochuuの野菜を使った野菜中心のコース (2026年4月)',
    neighborhood: '六角の南の烏丸通。烏丸・四条から徒歩3分',
    gf_detail: 'グルテンフリーではない: 唐揚げ、パスタ、そばのパーティービュッフェとコース (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ハム、唐揚げ、豚肉のビュッフェ (2025年8月)。2026年4月のコースは野菜中心、要確認。',
    notes: '[パーティー会場&ダイニングバー・六角下ルの烏丸、シャンデリアの地下ホール] 四条烏丸近くの隠れた地下ホール。高い天井、シャンデリア、スクリーンで、結婚式の二次会や職場の宴会に。ビュッフェかコースに飲み放題で4,000〜5,000円ほど。完全予約制、平日は少人数も相談可。',
  });
}

// ================================================================ 肉亭 結
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037594/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_nikutei_yuhi', name: '肉亭 結 (Niku Tei Yuhi)', category: 'OMNI',
    lat: 35.011229, lng: 135.770681, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: meat kaiseki and yakiniku courses with menchi katsu, beef stew, curry and sauces (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu courses — Ozaki and Hirai beef, tongue, horumon, meat sushi (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun and holidays 12:00–14:00 (L.O. 13:30) and 17:00–22:30 (L.O. 22:00); closed Wednesday. Reservations taken. Cards and PayPay. 32 seats: a 1st-floor counter for meat kaiseki and 2nd-floor private rooms (four for 6, one for 8; sunken seating; shoes off) for yakiniku courses (2025 reviews). Non-smoking. Sommelier on staff. Children welcome (strollers left on the 1st floor). East of Hotel Okura Kyoto near Kiyamachi-Oike (August 2026 review); 2 min from Kyoto Shiyakusho-mae exit 2. Opened 2 August 2022. Operator 株式会社YSI (NTA invoice register).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi-Oike, east of Hotel Okura — 2 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A townhouse wagyu restaurant: meat kaiseki at the counter and yakiniku courses in private rooms upstairs, built on Ozaki and Kyoto Hirai beef (Tabelog; 2025–2026 reviews) · meat kaiseki with hassun, Hirai-beef shabu-shabu and Tsuyahime rice (May 2025) · "Tsumugi" course of brand wagyu (December 2025) · yakiniku course: namul, salad, negi-shio tongue, Ozaki beef cuts, horumon (March 2026) · course with all-you-can-drink (August 2026) · meat sushi, beef stew, curry to finish (February 2025) · Yamagata rice with sansho chirimen; menchi katsu',
    website: null, gmaps: gm('肉亭 結 京都 木屋町御池'), menu_url: TB + 'dtlmenu/',
    notes: '[Wagyu kaiseki & yakiniku · Kiyamachi-Oike near City Hall, a townhouse with private rooms] Ozaki and Kyoto Hirai beef served two ways: as meat kaiseki at a 1st-floor counter, or as yakiniku courses in shoes-off private rooms upstairs, with a sommelier and a rice course worth seconds. About ¥10,000–20,000. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Operator: 株式会社YSI (NTA invoice register)'], origin: null,
      background: 'Opened 2 August 2022 (Tabelog). Reviewers describe a refined, calm modern-Japanese interior, a chef who explains each dish at the counter, friendly staff who print guests\' names on the course menu and take photos, and birthday plates. Criticism: small portions (August 2026); the place is slightly off its map pin (June 2025).',
      philosophy: null,
      specialty: 'Ozaki and Hirai wagyu; meat kaiseki; yakiniku courses.',
      anecdotes: [
        { text: 'May 2025: "The counter offers a meat kaiseki experience, while the private rooms feature yakiniku. You can choose a course based on your purpose of visit."', source: R + 'B512530464/' },
        { text: 'February 2025: "The rice served at the end was absolutely delicious. It was made with Yamagata\'s premium rice… I ended up having six servings!"', source: R + 'B501395777/' },
      ],
      japanese_sources_summary: '食べログ: 肉亭 結、焼肉・日本料理・ステーキ、中京区上樵木町503-2、京阪三条駅12番出口から徒歩4分・地下鉄京都市役所前駅2番出口から徒歩約2分、月・火・木〜日・祝日12:00〜14:00 (L.O.13:30)・17:00〜22:30 (L.O.22:00)、水曜休み、予約可、カード・PayPay可、32席、個室 (6名×4、8名×1)、貸切20名まで、禁煙、ソムリエあり、子供可、2022年8月2日オープン。インボイス登録は株式会社YSI (国税庁)。口コミ (2025年2月〜2026年8月、英語): 1階カウンターで肉割烹、2階の個室 (靴を脱ぐ、掘りごたつ) で焼肉コース、Ozaki牛とHirai牛、八寸、Hirai牛のしゃぶしゃぶとTsuyahime、「Tsumugi」コース、ねぎ塩タン、ホルモン、肉寿司、ビーフシチュー、締めのカレー、Yamagataの米とちりめん山椒、メンチカツ、飲み放題付きコース、ホテルオークラ京都の東、量が少なめとの声 (2026年8月)。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8130001056574'].concat(rv(R, ['B501395777', 'B503548943', 'B507772422', 'B508348497', 'B511557558', 'B512530464', 'B515651824', 'B525197974', 'B533904737', 'B534570367', 'B537824533', 'B538750074'])) },
    cultural_comfort: { level: 'japanese', note: 'Shoes off for the upstairs private rooms; counter or private-room courses.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区上樵木町503-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March, July and August 2026.' },
    pin_source: `Tabelog ${TB} (35.011229, 135.770681); GSI resolves only the town 京都府京都市中京区上樵木町, about 55m away — marked approximate; a June 2025 reviewer notes the map pin is slightly off; nearest pin kyoto_togiya_kiyamachi_oike 62m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512530464/', R + 'B525197974/'],
    price_note: 'No item prices; reviewers spent ¥10,000–19,999 a head (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Meat kaiseki course (counter)', null, 'Course', 'no', 'no', 'May and October 2025.', 'niku_kaiseki'),
      it('', '', 'Yakiniku course (private room)', null, 'Course', 'no', 'no', 'March and August 2026.', 'yakiniku_course'),
      it('', '', '"Tsumugi" brand-wagyu course', null, 'Course', 'no', 'no', 'December 2025.', 'tsumugi_course'),
    ] }, {
    cuisine: '町家の和牛料理店。1階カウンターで肉割烹、2階の個室で焼肉のコース、Ozaki牛と京都のHirai牛 (食べログ、2025〜2026年の口コミ)・八寸、Hirai牛のしゃぶしゃぶとTsuyahimeの肉割烹 (2025年5月)・ブランド和牛の「Tsumugi」コース (2025年12月)・焼肉コース: ナムル、サラダ、ねぎ塩タン、Ozaki牛の各部位、ホルモン (2026年3月)・飲み放題付きコース (2026年8月)・肉寿司、ビーフシチュー、締めのカレー (2025年2月)・Yamagataの米とちりめん山椒、メンチカツ',
    neighborhood: 'ホテルオークラ京都の東。京都市役所前から徒歩2分',
    gf_detail: 'グルテンフリーではない: メンチカツ、ビーフシチュー、カレー、たれのある肉割烹と焼肉のコース (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: Ozaki牛とHirai牛、タン、ホルモン、肉寿司の和牛のコース (2025〜2026年の口コミ)。',
    notes: '[和牛の割烹と焼肉・市役所近くの木屋町御池、個室のある町家] Ozaki牛と京都のHirai牛を、1階カウンターの肉割烹か、2階の靴を脱ぐ個室の焼肉コースで。ソムリエもおり、締めのご飯はおかわりしたくなる。10,000〜20,000円ほど。水曜休み。',
  });
}

// ================================================================ KappoBar 土井
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26015874/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_kappobar_doi', name: 'KappoBar 土井 (Kappo Bar Doi)', category: 'OMNI',
    lat: 35.000526, lng: 135.777866, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kappo courses with tempura, okowa and dashi-simmered dishes (2017 review), and eel shabu-shabu in eel-bone broth (2018).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood-led kappo — sashimi, smoked mackerel, karasumi, duck, sea-urchin rice (2011–2018 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–23:00 (L.O. 21:30); closed Sunday and some irregular days — book before visiting. Lunch for groups of six or more by reservation. The chef cooks alone, so courses must be booked by the day before; same-day course cancellations are charged 100%. Service charge 5%, no cover — Tabelog, Japanese original 「サービス料５％ チャージ料なし」. Cards (VISA, Master). 27 seats: 16 tatami, 4 sunken, 7 counter; semi-private rooms; private hire up to 50. Non-smoking (ashtray outside). Children welcome; the tatami room is recommended for them. In the narrow alley beside the Lawson at Higashiyama Yasui, south of Yasaka Shrine (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama Yasui, south of Yasaka Shrine — 30 sec from the Higashiyama-Yasui bus stop',
    cuisine: 'A casual kappo in a former dance teacher\'s house by Higashiyama Yasui, with seasonal fish dishes and a well-chosen sake, natural-wine and single-malt list (Tabelog; 2010–2025 reviews) · regular course from ¥6,600 with the signature fresh-yuba rice; special reserved courses; daily à la carte including escargot (Tabelog) · hassun, sashimi, guji okowa, tempura, duck loin (February 2017) · eel shabu-shabu in eel-bone broth (December 2018) · seared anago; changja with cream cheese (February 2018) · smoked mackerel with fig, nure-karasumi, mizunasu with Parmigiano, hamo and shima-aji sashimi (July 2015) · sea-urchin rice (2011)',
    website: 'http://kappobardoi.com', gmaps: gm('KappoBar 土井 Higashiyama Yasui'), menu_url: TB + 'dtlmenu/',
    notes: '[Kappo · Higashiyama Yasui near Yasaka Shrine, a dance master\'s house down an alley] A relaxed kappo in a renovated dance-practice house — the old hinoki stage is still there — where the owner-chef cooks seasonal fish, yuba rice and eel shabu-shabu and pours good sake and natural wine. Courses from ¥6,600 plus 5% service. Book a day ahead; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (reviewers call him "Master Doi")'], origin: null,
      background: 'Tabelog says the house was a Japanese dance master\'s home, transformed by the American architect Jeffrey Moussas (romaji as given), and that the chef now prepares everything by himself. A 2010 reviewer calls it run by a lovely couple and a 2013 reviewer mentions the owner and his wife; 2011 reviewers note the hinoki stage once used for maiko and geiko practice and occasional maiko events (2011; 2017). Reviewers praise a knowledgeable, accommodating chef and well-matched sake and wine. Criticism: "not exactly cheap" (2013). The newest review is from February 2025.',
      philosophy: null,
      specialty: 'Seasonal fish kappo; fresh-yuba rice; sake and natural wine.',
      anecdotes: [
        { text: 'December 2018: "As winter is in full swing, I visited Master Doi\'s Kappo Bar Doi to try his recommended dish, \'Unagi Shabu\'."', source: R + 'B406759571/' },
        { text: 'January 2012: "Upon entering, to the left, there is a hinoki wood stage, which I\'ve been told was converted from the home of a dance teacher."', source: R + 'B116298132/' },
      ],
      japanese_sources_summary: '食べログ: KappoBar 土井、日本料理・居酒屋、東山区毘沙門町33-2、八坂神社の南のHigashiyama Yasui、ローソン横の細い路地、月〜土18:00〜23:00 (L.O.21:30)、日曜と不定休、6名以上の昼は予約で、料理人が一人で準備するためコースは前日までに予約、当日キャンセルは100%、原文で「サービス料５％ チャージ料なし」、カード (VISA・Master) 可、27席 (座敷16・掘りごたつ4・カウンター7)、半個室、貸切50名まで、禁煙 (屋外に灰皿)、子供可 (座敷がおすすめ)、公式サイト kappobardoi.com、日本舞踊の師匠の家をアメリカ人建築家Jeffrey Moussasが改装、通常コース6,600円〜 (名物の生湯葉ごはん付き)、日替わりの一品にエスカルゴも、自然派ワイン・季節の日本酒・シングルモルト。口コミ (2010年5月〜2025年2月、英語): 夫婦で営む店 (2010年)、店主と奥さん (2013年)、檜の舞台、舞妓のイベント、八寸、グジのおこわ蒸し、天ぷら、鴨ロース、うなぎしゃぶ (2018年12月)、穴子のたたき、鯖のスモークといちじく、ぬれからすみ、水なすのパルミジャーノ、鱧とシマアジ、うにご飯、安くはないとの声 (2013年)。',
      confidence: 'medium', sources: [TB, 'http://kappobardoi.com'].concat(rv(R, ['B81015559', 'B10619815', 'B117676037', 'B116298132', 'B94410269', 'B102883753', 'B234083888', 'B302828611', 'B406759571', 'B502065617'])) },
    cultural_comfort: { level: 'japanese', note: 'Book courses a day ahead; 5% service; tatami recommended with children.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区毘沙門町33-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (owner-entered booking rules) with a February 2025 review; most reviews predate 2019.' },
    pin_source: `Tabelog ${TB} (35.000526, 135.777866); GSI lot 京都府京都市東山区毘沙門町33番地 about 53m away; nearest pin kyoto_higashiyama_yaoi_honten 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B234083888/'],
    price_note: 'Course price from the Tabelog listing and a February 2017 review; 5% service.', last_checked: TODAY, items: [
      it('', '', 'Regular course (with fresh-yuba rice)', 'from ¥6,600', 'Course', 'no', 'no', 'Tabelog listing; February 2017.', 'regular_course'),
      it('', '', 'Eel shabu-shabu', null, 'Hot pot', 'no', 'no', 'December 2018.', 'unagi_shabu'),
    ] }, {
    cuisine: 'Higashiyama Yasuiの元日本舞踊の師匠の家を改装した気軽な割烹。季節の魚料理と、選び抜いた日本酒・自然派ワイン・シングルモルト (食べログ、2010〜2025年の口コミ)・名物の生湯葉ごはん付きの通常コース6,600円〜、予約限定の特別コース、エスカルゴもある日替わりの一品 (食べログ)・八寸、刺身、グジのおこわ蒸し、天ぷら、鴨ロース (2017年2月)・うなぎの骨のだしのうなぎしゃぶ (2018年12月)・穴子のたたき、チャンジャとクリームチーズ (2018年2月)・鯖のスモークといちじく、ぬれからすみ、水なすのパルミジャーノ、鱧とシマアジの刺身 (2015年7月)・うにご飯 (2011年)',
    neighborhood: '八坂神社の南のHigashiyama Yasui。Higashiyama Yasuiバス停から30秒',
    gf_detail: 'グルテンフリーではない: 天ぷら、おこわ、だしの煮物の割烹のコース (2017年の口コミ)、うなぎの骨のだしのうなぎしゃぶ (2018年)。',
    vegan_detail: 'ヴィーガン不可: 刺身、鯖のスモーク、からすみ、鴨、うにご飯など魚介中心の割烹 (2011〜2018年の口コミ)。',
    notes: '[割烹・八坂神社近くのHigashiyama Yasui、路地奥の舞の師匠の家] 檜の舞台が残る舞の稽古場を改装した気軽な割烹。店主の料理人が季節の魚、生湯葉ごはん、うなぎしゃぶを作り、日本酒や自然派ワインも。コースは6,600円からにサービス料5%。前日までに予約を、日曜休み。',
  });
}

save();
