// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 25.
//   + 喫茶 マドラグ Kissa Madrague (kissaten in the old 喫茶セブン, keeper of the Corona egg sandwich; since 2011)
//   + マリベル 京都本店 MarieBelle Kyoto (New York chocolatier's Kyoto shop and Cacao Bar; since 2012)
//   + 赤垣屋 Akagakiya (old izakaya by the Kamo River at Kawabata Nijo; founded 1934 per a review)
//   + ZEN CAFE (Kagizen Yoshifusa's café in a Gion alley; since 2012)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 24).
//   None is in data/kyoto.json: grep by name (マドラグ/Madrague, マリベル/MarieBelle, 赤垣屋/Akagaki, ZEN CAFE) and
//   address (上松屋町706, 槌屋町83, 孫橋町9, 祇園町南側570-210) found none. Nearest neighbour is 51 m (MarieBelle);
//   none within 3 m (check-stacked-pins run before hand-off). Tabelog URLs copied from each listing.txt line 1.
//   Group check (working line): MarieBelle has 4 shops on its own site (New York SoHo, Kyoto honten, MarieBelle the
//   Lounge in Daimaru Shinsaibashi, and マリベル渋谷 opened 28 Oct 2026) — a small group, so drafted. ZEN CAFE is a
//   Kagizen sister café (a different format from kyoto_kagizen_yoshifusa_shijo), so drafted separately.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 喫茶 マドラグ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26019438/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://madrague.info/index.html'; const STORY = 'http://madrague.info/bunka.html';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_kissa_madrague', name: '喫茶 マドラグ (Kissa Madrague)', category: 'OMNI',
    lat: 35.012301, lng: 135.755626, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the menu is toast, sandwiches, spaghetti and curry; the famous egg sandwich comes on thick bread with demi-glace and mustard (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Food centres on eggs, ham, meat sauce and cheese, and the omelette is made with dashi; juices, tea and black coffee suit (official menu; 2026 reviews).',
    hours_raw: '8:00–18:00 every day; last food order 17:00, drinks 17:30; closes early when food runs out; closed irregularly, with notices on Facebook (official site). Seats can be booked at the shop or by phone for 8:00 or 9:30 (morning) or 12:00 (lunch) (official site); lunch seats rotate hourly and walk-ins are possible, but booking is safer (Tabelog). Breakfast until 11:00 (October 2026). Only the Corona sandwich is sold to take away, ordered by phone two days ahead (official site). 18 seats; non-smoking (Tabelog). Cash only (Tabelog). 9 min walk from Karasuma Oike Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'West of Karasuma, north of Oike — 9 min walk from Karasuma Oike Stn',
    cuisine: 'Retro kissaten that carries on two closed Kyoto shops: the coffee house Kissa Seven (the building) and the western-style restaurant Corona (its egg sandwich) (official site) · Corona egg sandwich: a thick, hot dashi omelette on bread spread with demi-glace and mustard, ¥1,180 · Set A breakfast with two pieces of it, salad, prosciutto, soup, yogurt and a drink ¥1,800 (November 2026) · thick toast, pizza toast, iron-plate Napolitan ¥1,100, pork curry rice ¥990, carbonara · blend coffee ¥600, Monte Carlo (Vienna-style coffee) ¥600, banana juice, cream soda; beer, highball, whisky, Calvados (official menu)',
    website: SITE, gmaps: gm('喫茶マドラグ 京都'), menu_url: SITE,
    notes: "[Kissaten · Karasuma Oike, the Corona egg sandwich] A retro coffee house in a building that was Kissa Seven for about 50 years from 1963; after its master died in 2011, the son looked for someone to keep the shop going, and Madrague opened that September. About a year later the free paper 音読 asked the shop to carry on the famous egg sandwich of Corona, a western-style restaurant that had just closed, and Corona's master came to teach it in person. The result is a fist-sized, hot, dashi-soft omelette on bread with demi-glace and mustard (¥1,180) — cut it in half to eat. Breakfast sets until 11:00; book a seat for 8:00, 9:30 or 12:00. Open daily 8:00–18:00 (irregular closures); cash only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed on the official site), who opened the shop with the owner’s wife'], origin: null,
      background: 'Per the official site: before opening, the owner managed a café tied to the revival of Kyoto townhouses and old shopping streets and wanted to get back to hands-on work; while looking for a property with the owner’s wife, the couple met the son of the master of Kissa Seven (in business from 1963 for about 50 years; the master died in 2011) and opened Kissa Madrague there in September 2011. The name is that of Brigitte Bardot’s villa in Saint-Tropez; the owner’s wife loved the actress. The owner once worked part-time at Francois, near Corona, and often ate Corona’s egg sandwich on breaks. The site also describes a team, 京都喫茶文化遺産, formed to take over and keep old neighbourhood kissaten. Tabelog Kissaten "Tabelog 100" 2021, 2022, 2026.',
      philosophy: 'Per the official site: to keep "the long-running neighbourhood kissaten with tradition", not a retro-styled café, and hand it on to the next generation.',
      specialty: 'Corona egg sandwich; Set A breakfast.',
      anecdotes: [
        { text: 'Per the official site: after customers said the old Corona sandwich had been softer or bigger, the owner reworked the bread, eggs, seasoning, cooking time and heat, the hand pressure when sandwiching and the cut, keeping the basics.', source: STORY },
        { text: '"The egg sandwich is so big that I couldn’t fit it in my mouth in one bite, so I had to cut it in half with a knife." — October 2026.', source: R + 'B537206939/' },
        { text: '"It seems there used to be long lines, but now you can easily make a reservation by phone." — October 2026.', source: R + 'B538413634/' },
      ],
      japanese_sources_summary: '公式サイト (madrague.info): 喫茶 la madrague、8:00〜18:00 (ラストオーダー 食事17:00・ドリンク17:30)、食材がなくなり次第終了、予約は店頭または電話で 8:00・9:30 (モーニング)・12:00 (ランチ)、不定休、コロナサンドのみテイクアウト可 (2日前までに電話予約)、メニュー: コロナの玉子サンドイッチ1,180円、鉄板ナポリタン1,100円、トロトロポークカレーライス990円、ブレンドコーヒー600円、モンテカルロ600円など。開店のいきさつ: 店名はブリジットバルドーの南フランスのサン-トロペの別荘の名、以前は昭和38年から約50年続いた喫茶セブン、2011年にマスターが他界、息子さんとの縁で同年9月に開店、約1年後にフリーペーパー「音読」から閉店した洋食店コロナの玉子サンドイッチを継いでほしいとの話、喫茶フランソアでのアルバイト時代、コロナのマスターから直接レクチャー、京都喫茶文化遺産チーム。食べログ: 喫茶店・サンドイッチ・洋食、中京区上松屋町706-5、毎日8:00〜18:00、予約可、18席、カード・電子マネー・QR 不可、禁煙、2011年9月1日オープン、喫茶店百名店 2021・2022・2026。口コミ (2026年10〜11月、英語): Aセット1,800円、コロナの玉子サンド、モンテカルロ、予約で入店。',
      confidence: 'medium', sources: [TB, SITE, STORY, R + 'B528592329/', R + 'B537011833/', R + 'B537206939/', R + 'B537284216/', R + 'B537298651/', R + 'B537533319/', R + 'B537645038/', R + 'B538035981/', R + 'B538413634/', R + 'B538416247/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a slot by phone or at the door; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上松屋町706-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026; Kissaten Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.012301, 135.755626); cross-checked: GSI 京都府京都市中京区上松屋町706番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B538416247/'],
    price_note: 'Official site menu (undated); Set A price from a November 2026 review. An October 2026 review paid ¥600 for a takeaway Corona sandwich.', last_checked: TODAY, items: [
      it('コロナの玉子サンドイッチ', '', 'Corona egg sandwich', '¥1,180', 'Toast & sandwiches', 'no', 'no', 'Demi-glace and mustard; dashi omelette.', 'corona_egg_sandwich'),
      it('Aセット', '', 'Set A breakfast (egg sandwich ×2, salad, prosciutto, soup, yogurt, drink)', '¥1,800', 'Breakfast', 'no', 'no', 'November 2026; until 11:00.', 'set_a'),
      it('鉄板ナポリタン ケチャップ味', '', 'Iron-plate Napolitan spaghetti', '¥1,100', 'Spaghetti', 'no', 'no', '', 'teppan_napolitan'),
      it('トロトロポークカレーライス（サラダ付き）', '', 'Slow-cooked pork curry rice with salad', '¥990', 'Rice', 'ask', 'no', '', 'pork_curry'),
      it('ブレンドコーヒー', '', 'Blend coffee (hot/iced)', '¥600', 'Drinks', '', '', '', 'blend_coffee'),
      it('モンテカルロ', '', 'Monte Carlo (coffee with cream)', '¥600', 'Drinks', '', '', '', 'monte_carlo'),
    ] }, {
    cuisine: '閉店した京都の2軒を受け継ぐ喫茶: 建物は喫茶セブン、玉子サンドは洋食店コロナ (公式サイト)・コロナの玉子サンドイッチ: デミグラスとマスタードを塗ったパンに熱々の厚いだし巻き、1,180円・モーニングのAセット (玉子サンド2切れ、サラダ、生ハム、スープ、ヨーグルト、ドリンク) 1,800円 (2026年11月)・厚切りトースト、ピザトースト、鉄板ナポリタン1,100円、トロトロポークカレーライス990円、カルボナーラ・ブレンドコーヒー600円、モンテカルロ (ウィンナーコーヒー) 600円、バナナジュース、クリームソーダ・ビール、ハイボール、ウィスキー、カルヴァドス (公式メニュー)',
    neighborhood: '烏丸の西、御池の北。烏丸御池駅から徒歩9分',
    gf_detail: '実際にはグルテンフリーではない。トースト、サンドイッチ、スパゲティ、カレーが中心で、名物の玉子サンドは厚いパンにデミグラスとマスタード (公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。料理は卵、ハム、ミートソース、チーズが中心で、玉子はだし巻き。ジュース、紅茶、ブラックのコーヒーは合う (公式メニュー、2026年の口コミ)。',
    notes: '[喫茶・烏丸御池、コロナの玉子サンド] 昭和38年から約50年続いた喫茶セブンの建物の喫茶。2011年にマスターが亡くなり、店を残してくれる人を探していた息子さんとの縁で、同年9月にマドラグとして開店。約1年後、フリーペーパー「音読」から、閉店したばかりの洋食店コロナの名物の玉子サンドを継いでほしいと頼まれ、コロナのマスターが直接教えに来た。今の形は、デミグラスとマスタードのパンに、こぶし大の熱々でふわふわのだし巻き (1,180円)。半分に切って食べるとよい。モーニングは11時まで、席は8時・9時半・12時で予約できる。毎日8時〜18時 (不定休)、現金のみ。',
  });
}

// ================================================================ マリベル 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26019937/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.mariebelle.jp/'; const STORES = SITE + 'our_stores/'; const BAR = SITE + 'cacao_bar/'; const ABOUT = SITE + 'about/';
  const SHIBUYA = SITE + 'kyoto_news/2026/10/07/864/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_mariebelle_honten', name: 'マリベル 京都本店 (MarieBelle Kyoto)', category: 'OMNI',
    lat: 35.008314, lng: 135.763897, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The shop sells chocolates (art ganache, Carré de Chocolat) alongside cookies and sablés; the café adds crepes, cheesecake, quiche and gelato; no ingredient list is published (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many chocolates and the gelato, crepes and cakes use milk, cream or eggs; a 70% dark chocolate is sold but its ingredients are not published (2026 reviews).',
    hours_raw: 'Shop 11:00–19:00; Cacao Bar (café) 11:00–19:00, last order 18:00; takeaway 11:00–19:00; closed Tuesday; holiday calendar on the official site (official site). Tabelog instead lists Tuesday 11:00–18:00, but the official site and an October 2026 review both give Tuesday as closed. Café seats cannot be booked: sign in at the entrance and wait in turn; one order per person (official site; October 2026). The upstairs room can be hired for meetings (official site). 20 seats; non-smoking; cards and QR payments (Tabelog). In an alley entrance on Yanagibaba-dori south of Sanjo; 6 min from Karasuma Oike Stn, 5 min from Hankyu Karasuma Stn (official site; Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanagibaba-dori south of Sanjo — 6 min from Karasuma Oike Stn',
    cuisine: 'Kyoto main shop of the New York chocolatier MarieBelle, in a townhouse with an antique-furnished café, the Cacao Bar (official site; 2026 reviews) · art ganache printed with artists’ designs, sold in the blue box (two pieces ¥1,900); Carré de Chocolat squares (8 pieces ¥2,500); sablés and cookies · café: hot chocolate, chocolate crepe ¥1,430, gelato two flavours ¥1,430, autumn chestnut-and-kadaif chocolate crepe ¥2,500, New York cheesecake, quiche, seasonal tasting set (2026 reviews)',
    website: SITE, gmaps: gm('マリベル 京都本店'), menu_url: BAR,
    notes: "[Chocolate & café · Sanjo, New York chocolates in a Kyoto townhouse] The Kyoto main shop of MarieBelle, the chocolatier born in New York's SoHo, reached through a narrow alley off Yanagibaba-dori: an antique-furnished townhouse where the art ganache — each piece printed with an artist's design — comes in the brand's blue boxes, and the Cacao Bar serves hot chocolate, crepes, gelato and cheesecake on sofas. Two ganache pieces ¥1,900; café sweets from about ¥1,430. No café bookings; sign in at the door. 11:00–19:00, closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Brand of chocolatier Maribel Lieberman (New York); no Kyoto staff are named'], origin: null,
      background: 'Per the official site: MarieBelle was born in New York’s SoHo (484 Broome St.); the Japanese company MarieBelle Japan runs the Kyoto honten, MarieBelle the Lounge in Daimaru Shinsaibashi (Osaka) and, from 28 October 2026, マリベル渋谷 in Shibuya Scramble Square; cacao is chosen from producing countries, mainly beans grown with support for farms in Honduras, the homeland of Maribel Lieberman; the designs are all paintings made by artists. The Kyoto honten opened on 24 April 2012 (Tabelog) and marked its 14th anniversary in April 2026 (official site). Tabelog Sweets "Tabelog 100" 2018 and Sweets WEST 2018–2020, 2022.',
      philosophy: 'Per the official site (in English): "Life is all about the pleasure and happiness we find in food, art and beauty" — Maribel Lieberman, Chocolatier.',
      specialty: 'Art ganache; Carré de Chocolat; hot chocolate.',
      anecdotes: [
        { text: '"The service was top-notch, and even though I only bought a small amount, I was treated with great care" — September 2026.', source: R + 'B538038189/' },
        { text: '"The entrance is tucked away in a narrow alley, typical of Kyoto." — November 2026.', source: R + 'B538507801/' },
        { text: '"In the fall, you can savor the Chestnut Kadaif Chocolate Crepe." — September 2026.', source: R + 'B537015663/' },
      ],
      japanese_sources_summary: '公式サイト (mariebelle.jp): ニューヨーク・SoHo 生まれのチョコレートブランド、京都本店 (中京区槌屋町83番地)、SHOP 11:00〜19:00、Cacao Bar 11:00〜19:00 (L.O 18:00)、火曜定休、カフェの席は予約不可で入り口で受付、2階は貸し切り可、大阪・大丸心斎橋の MarieBelle the Lounge、2026年10月28日マリベル渋谷オープン、祖国ホンデュラスの農園を支援したカカオ豆、デザインはすべてアーティストの絵画、京都本店14周年 (2026年4月)、運営は MarieBelle Japan。食べログ: チョコレート・ジェラート・カフェ、20席、予約不可、カード・QR 可、2012年4月24日オープン、スイーツ百名店 2018、スイーツ WEST 百名店 2018〜2020・2022。口コミ (2026年9〜11月、英語): アートガナッシュ、Carré de Chocolat、ホットチョコレート、チョコレートクレープ、ジェラート、栗のクレープ、細い路地の入口。',
      confidence: 'medium', sources: [TB, SITE, STORES, BAR, ABOUT, SHIBUYA, R + 'B536041744/', R + 'B536412693/', R + 'B536662164/', R + 'B537015663/', R + 'B537304616/', R + 'B537465536/', R + 'B537590593/', R + 'B538038189/', R + 'B538048542/', R + 'B538507801/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shop counter downstairs; sign in at the entrance for the café; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場三条下ル槌屋町83番地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 news) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008314, 135.763897); cross-checked: GSI 京都府京都市中京区槌屋町83番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538048542/', R + 'B537304616/', R + 'B538038189/', R + 'B538507801/'],
    price_note: 'Café menu on the official site is an image; prices from September–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Art ganache, two pieces in the blue box', '¥1,900', 'Chocolates', 'ask', 'ask', 'September 2026.', 'art_ganache_2'),
      it('', '', 'Carré de Chocolat, 8 pieces', '¥2,500', 'Chocolates', 'ask', 'ask', 'November 2026.', 'carre_8'),
      it('', '', 'Chocolate crepe', '¥1,430', 'Café', 'no', 'no', 'October 2026.', 'chocolate_crepe'),
      it('', '', 'Assorted gelato, two flavours', '¥1,430', 'Café', 'ask', 'no', 'October 2026.', 'gelato_2'),
      it('', '', 'Chestnut kadaif chocolate crepe (autumn)', '¥2,500', 'Café', 'no', 'no', 'October 2026.', 'chestnut_crepe'),
    ] }, {
    cuisine: 'ニューヨークのショコラティエ MarieBelle の京都本店。アンティークのカフェ Cacao Bar のある町家 (公式サイト、2026年の口コミ)・アーティストの絵をのせたアートガナッシュ、ブルーの箱 (2粒1,900円)・Carré de Chocolat (8枚2,500円)・サブレやクッキー・カフェ: ホットチョコレート、チョコレートクレープ1,430円、ジェラート2種1,430円、秋の栗とカダイフのチョコレートクレープ2,500円、ニューヨークチーズケーキ、キッシュ、季節の盛り合わせ (2026年の口コミ)',
    neighborhood: '三条の南の柳馬場通。烏丸御池駅から徒歩6分',
    gf_detail: '要確認。チョコレート (アートガナッシュ、Carré de Chocolat) のほかクッキーやサブレ、カフェにはクレープ、チーズケーキ、キッシュ、ジェラート。原材料の一覧は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。多くのチョコレート、ジェラート、クレープ、ケーキに乳、クリーム、卵を使う。カカオ70%のダークチョコレートもあるが原材料は公開されていない (2026年の口コミ)。',
    notes: '[チョコレートとカフェ・三条、町家のニューヨークのチョコレート] ニューヨーク・SoHo 生まれのショコラティエ MarieBelle の京都本店。柳馬場通の細い路地を入った町家で、アーティストの絵をのせたアートガナッシュがブルーの箱に並び、アンティークの Cacao Bar ではソファでホットチョコレート、クレープ、ジェラート、チーズケーキ。ガナッシュ2粒1,900円、カフェのスイーツは1,430円ほどから。カフェは予約不可で入り口で受付。11時〜19時、火曜休み。',
  });
}

// ================================================================ 赤垣屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001072/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_akagakiya', name: '赤垣屋 (Akagakiya)', category: 'OMNI',
    lat: 35.012853, lng: 135.772551, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A traditional izakaya: duck with a soy-based sauce, oden in broth (with fish cakes), tempura and sashimi with soy sauce; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in broth, duck, fish and yakitori make up most of the menu (2026 reviews).',
    hours_raw: '17:00–23:00 (last order 22:30), Monday to Saturday; closed Sunday and on Mondays that are public holidays (Tabelog). A queue forms from about 16:30; the owner hangs the noren at 17:00 and the first round is seated in arrival order (October–November 2026). Table seats can be booked, for 17:00 or 19:00 starts; the 11 counter seats are walk-in only (Tabelog; November 2026); same-day booking is hard (September 2026). Two-hour limit (October 2026). Menu without prices; bills around ¥4,000–6,000 a head (2026 reviews). 41 seats (11 counter, 30 on tatami); smoking allowed; cash only (Tabelog). 5 min walk from Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawabata Nijo by the Kamo River — 5 min walk from Sanjo Stn',
    cuisine: 'One of Kyoto’s oldest izakaya, founded in 1934 and on this site since 1949 (an October 2026 review) · duck loin roast with a sweet soy-based sauce and mustard (ordered by almost every table) · shime saba with onion and herbs · kumiage yuba with plum-wasabi · Kyoto-style oden: octopus (order early), rolled cabbage, daikon, egg, atsuage · simmered small taro with yuzu · grilled eel with wasabi soy or ponzu · sesame tofu, tempura, yakitori · hot sake, shochu, beer (2026 reviews)',
    website: null, gmaps: gm('赤垣屋 京都 川端二条'), menu_url: null,
    notes: "[Izakaya · Kawabata Nijo, a 1930s tavern by the Kamo River] An old izakaya beside the Kamo River, with lantern light, a counter worn smooth and darkened beams; a reviewer gives its founding as 1934 and the move here as 1949. The line forms from 16:30 and the owner hangs the noren at 17:00. Almost every table orders the duck roast; the shime saba, kumiage yuba and Kyoto-style oden (the octopus takes time — order it early) are the other classics. The menu shows no prices, yet bills run around ¥4,000–6,000. Book a table for 17:00 or 19:00; the 11 counter seats are first come. Cash only; smoking allowed; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Per an October 2026 review: founded in 1934 (Showa 9) and moved to the present site in 1949 (Showa 24), once a tavern for students and day labourers; reviews disagree on whether the present owner is the third or fourth generation (October 2026). Tabelog Izakaya "Tabelog 100" 2021, 2022 and Izakaya WEST 2024, 2025.',
      philosophy: null, specialty: 'Duck roast; shime saba; oden.',
      anecdotes: [
        { text: '"Soon, the quiet owner appears and hangs the noren (curtain)." — October 2026.', source: R + 'B538230990/' },
        { text: 'An October 2026 reviewer noted a tension created by the owner and the staff that some first-time visitors might find intimidating, while calling it part of the shop’s long-held traditions.', source: R + 'B538230990/' },
        { text: '"When I went to the restroom, they quickly offered me slippers. Such thoughtful service!" — November 2026.', source: R + 'B538493280/' },
        { text: '"The oden was served with an old wooden ladle that looked like it had been used for ages" — September 2026.', source: R + 'B537582539/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、左京区孫橋町9、三条駅から徒歩5分、月〜土 17:00〜23:00 (L.O. 22:30)、日曜と祝日の月曜休み、予約可 (カウンターは予約不可)、41席 (カウンター11、小上がり30)、個室2、喫煙可、カード・電子マネー・QR 不可、居酒屋百名店 2021・2022、居酒屋 WEST 百名店 2024・2025。口コミ (2026年9〜11月、英語): 1934年創業、1949年に現在地へ、鴨ロース、しめ鯖、汲み上げ湯葉、おでん (たこ、ロールキャベツ)、里芋の煮物、うなぎ、値段のないお品書き、開店前の行列、主人が暖簾を掛ける、テーブルは17時と19時の予約。',
      confidence: 'medium', sources: [TB, R + 'B454828265/', R + 'B536774193/', R + 'B537206790/', R + 'B537308321/', R + 'B537506817/', R + 'B537527697/', R + 'B537582539/', R + 'B537946761/', R + 'B538230990/', R + 'B538493280/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue before 17:00 for the counter; order drinks first, then food; no prices on the menu; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区孫橋町9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Izakaya WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.012853, 135.772551); cross-checked: GSI 京都府京都市左京区孫橋町9番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537527697/', R + 'B538493280/', R + 'B537206790/'],
    price_note: 'The menu shows no prices; reviewers paid about ¥4,000–6,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Duck loin roast', '', 'Izakaya', 'ask', 'no', 'Soy-based sauce, mustard.', 'kamo_roast'),
      it('', '', 'Shime saba (cured mackerel)', '', 'Izakaya', 'ask', 'no', '', 'shime_saba'),
      it('', '', 'Kumiage yuba', '', 'Izakaya', 'ask', 'ask', 'With plum-wasabi.', 'kumiage_yuba'),
      it('', '', 'Oden (octopus, rolled cabbage, daikon, egg)', '', 'Izakaya', 'ask', 'no', 'Order the octopus early.', 'oden'),
      it('', '', 'Grilled eel (wasabi soy or ponzu)', '', 'Izakaya', 'ask', 'no', '', 'grilled_eel'),
    ] }, {
    cuisine: '京都でも古い居酒屋の一軒。1934年創業、1949年から現在地 (2026年10月の口コミ)・甘めの醤油のたれと辛子の鴨ロース (ほぼ全員が注文)・玉ねぎと薬味のしめ鯖・梅わさびの汲み上げ湯葉・京風のおでん: たこ (早めに注文)、ロールキャベツ、大根、卵、厚揚げ・柚子の里芋の煮物・わさび醤油かポン酢のうなぎ・胡麻豆腐、天ぷら、焼き鳥・燗酒、焼酎、ビール (2026年の口コミ)',
    neighborhood: '鴨川沿いの川端二条。三条駅から徒歩5分',
    gf_detail: '要確認。昔ながらの居酒屋で、醤油のたれの鴨、出汁のおでん (練り物入り)、天ぷら、醤油で食べる刺身。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のおでん、鴨、魚、焼き鳥が中心 (2026年の口コミ)。',
    notes: '[居酒屋・川端二条、鴨川沿いの昭和の酒場] 鴨川沿いの古い居酒屋。電球の灯り、使い込まれたカウンター、黒ずんだ梁。口コミによれば1934年創業、1949年に現在地へ。16時半ごろから行列ができ、17時に主人が暖簾を掛ける。ほぼどの席も鴨ロースを頼み、しめ鯖、汲み上げ湯葉、京風のおでん (たこは時間がかかるので早めに) も定番。お品書きに値段はないが、1人4,000〜6,000円ほど。テーブルは17時か19時で予約、カウンター11席は先着順。現金のみ、喫煙可、日曜休み。',
  });
}

// ================================================================ ZEN CAFE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021305/'; const R = TB + 'dtlrvwlst/';
  const KZ = 'https://www.kagizen.co.jp/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_zen_cafe_kagizen', name: 'ZEN CAFE (Kagizen Yoshifusa)', category: 'OMNI',
    lat: 35.003051, lng: 135.773572, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kuzumochi and kuzukiri are made from kudzu starch, and the seasonal wagashi vary; the fruit sandwiches use bread; no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kudzu sweets, zenzai and seasonal wagashi are based on starch, beans, sugar and chestnut, but no ingredient list is published; the fruit sandwiches use cream (2026 reviews).',
    hours_raw: '11:00–18:00, Tuesday to Sunday; closed Monday (Tabelog). No reservations (Tabelog): take a number at the ticket machine; a queue can form before 11:00 and at busy times (September–October 2026). The fruit sandwiches can sell out by about 11:45 (September 2026). Payment is asked for 30 minutes before closing (October 2026). 16 seats (10 at tables, 6 at the counter); non-smoking; cards and QR payments (Tabelog). In a Gion back street opposite the ZENBI museum; 158 m from Gion-Shijo Stn (Tabelog; 2026 reviews). Opened 8 November 2012 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion back street south of Shijo, opposite the ZENBI museum — 158 m from Gion-Shijo Stn',
    cuisine: 'Café of the old wagashi house Kagizen Yoshifusa (Tabelog; 2026 reviews): Kagizen’s wagashi with tea, coffee, fresh juices and sparkling water · kuzumochi ¥1,200 (also as a set with a drink) · kuzukiri with black syrup ¥1,200 · zenzai ¥1,200 · seasonal jo-namagashi ¥1,000, e.g. chestnut kinton in autumn, with sencha or green tea · seasonal fruit sandwiches (chestnut, fig) · persimmon juice in autumn (2026 reviews)',
    website: KZ, gmaps: gm('ZEN CAFE 祇園'), menu_url: null,
    notes: "[Wagashi café · Gion, Kagizen's quiet café] The café that the old Gion wagashi house Kagizen Yoshifusa opened in 2012 down a back street opposite its ZENBI museum: dim, modern and calm, with a counter and a sofa. Order kuzumochi (¥1,200), the shop's kuzukiri with black syrup, or the seasonal jo-namagashi — chestnut kinton in autumn — with sencha, or come early for the fruit sandwiches, which can be gone before noon. Take a number at the machine; no bookings. One October 2026 visitor found the prices high for Gion and was asked to pay 30 minutes before closing. 11:00–18:00, closed Monday.",
    chef_bio: { chef_name: null, roles: ['Café of Kagizen Yoshifusa; no person is named in the sources'], origin: null,
      background: 'Per the Kagizen official site (read for batch 15): the company also runs ZEN CAFE and the ZENBI art museum. Per a 2026 review, a café opened in 2012 by Kagizen Yoshifusa, in business since the Kyōhō era, with modern ceramics by contemporary artists; opened 8 November 2012 (Tabelog). Tabelog Cafe "Tabelog 100" 2021, 2022, Cafe WEST 2025 and Sweets WEST 2019, 2020.',
      philosophy: null, specialty: 'Kuzumochi; seasonal jo-namagashi; fruit sandwiches.',
      anecdotes: [
        { text: '"The kuzumochi was so delicious that I could eat it on its own" — February 2026.', source: R + 'B522089255/' },
        { text: '"Be careful, as the fruit sandwiches seemed to sell out by 11:45." — September 2026.', source: R + 'B536034290/' },
        { text: 'An October 2026 visitor called the prices "Gion pricing" and objected to being asked to pay 30 minutes before closing, which felt rushed.', source: R + 'B537313572/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・甘味処・和菓子、東山区祇園町南側570-210、祇園四条駅から158m、火〜日 11:00〜18:00、月曜休み、予約不可、16席 (テーブル10、カウンター6)、禁煙、カード・QR 可、2012年11月8日オープン、お茶、コーヒー、フレッシュジュース、炭酸水と和菓子、カフェ百名店 2021・2022、カフェ WEST 百名店 2025、スイーツ WEST 百名店 2019・2020。鍵善良房公式サイト (第15バッチで確認): ZEN CAFE と ZENBI も運営。口コミ (2026年2〜10月、英語): くずもち1,200円、くずきり1,200円、ぜんざい1,200円、上生菓子1,000円、栗きんとん、フルーツサンド (11時45分ごろ売り切れ)、柿のジュース、発券機、閉店30分前の会計、ZENBI の向かい。',
      confidence: 'medium', sources: [TB, KZ, R + 'B441513304/', R + 'B510031643/', R + 'B522089255/', R + 'B535742358/', R + 'B536034290/', R + 'B537313572/', R + 'B537363208/', R + 'B538390911/', R + 'B64521234/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take a number at the machine by the door; staff explain the menu; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-210',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.003051, 135.773572); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 73m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522089255/', R + 'B535742358/'],
    price_note: 'No price list read; prices from February–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kuzumochi', '¥1,200', 'Wagashi', 'ask', 'ask', 'October 2026.', 'kuzumochi'),
      it('', '', 'Kuzukiri with black syrup', '¥1,200', 'Wagashi', 'ask', 'ask', 'September 2026.', 'kuzukiri'),
      it('', '', 'Zenzai', '¥1,200', 'Wagashi', 'ask', 'ask', 'February 2026.', 'zenzai'),
      it('', '', 'Seasonal jo-namagashi', '¥1,000', 'Wagashi', 'ask', 'ask', 'October 2026.', 'jo_namagashi'),
    ] }, {
    cuisine: '老舗の和菓子屋、鍵善良房のカフェ (食べログ、2026年の口コミ): 鍵善の和菓子にお茶、コーヒー、フレッシュジュース、炭酸水・くずもち1,200円 (ドリンクとのセットも)・黒蜜のくずきり1,200円・ぜんざい1,200円・季節の上生菓子1,000円、秋は栗きんとんなど、煎茶か緑茶と・季節のフルーツサンド (栗、いちじく)・秋の柿のジュース (2026年の口コミ)',
    neighborhood: '四条の南の祇園の路地、ZENBI の向かい。祇園四条駅から158m',
    gf_detail: '要確認。くずもちとくずきりは葛粉で作り、季節の和菓子はいろいろ。フルーツサンドはパンを使う。原材料の一覧は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。葛の甘味、ぜんざい、季節の和菓子はでんぷん、豆、砂糖、栗が中心だが、原材料の一覧は公開されていない。フルーツサンドはクリームを使う (2026年の口コミ)。',
    notes: '[甘味カフェ・祇園、鍵善の静かなカフェ] 祇園の老舗の和菓子屋、鍵善良房が2012年に開いたカフェ。路地を入った ZENBI の向かいにあり、薄暗くモダンで静か、カウンターとソファ席。くずもち (1,200円)、黒蜜のくずきり、秋は栗きんとんなどの季節の上生菓子を煎茶と。フルーツサンドは昼前に売り切れることも。入口の発券機で番号を取り、予約は不可。2026年10月の客は祇園らしい高めの値段と、閉店30分前の会計を指摘している。11時〜18時、月曜休み。',
  });
}

save();
