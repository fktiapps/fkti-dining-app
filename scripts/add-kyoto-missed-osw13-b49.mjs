// Kyoto priority (kyoto-missed), worker osw13, batch 49 — lane: Tabelog id mod 6 = 0.
// Core: COCOLO KYOTO, お好み焼き 鉄板焼き まんまるの月. Notable: 寺町よしくら, 洛空 (The Westin Miyako Kyoto).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-49');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26004912', 'brand already in data: ラーメン 藤 五条店 is a same-concept branch of ラーメン藤, whose 京都本店 is kyr_ramen_fuji_kyoto_honten');

// ================================================================ COCOLO KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028930/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://cocolo-kyoto.jp/';
  const SHOP = 'https://cocolo-kyoto.jp/shop/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_cocolo_kyoto', name: 'COCOLO KYOTO (ココロ キョウト)', category: 'OMNI',
    lat: 35.008353, lng: 135.760996, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Granola usually contains oats and no gluten information is given; the black-shichimi nuts use an organic gluten-free tamari (official site), but other flavours are not labelled.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Organic nuts and granola, and soy-milk ice cream (January 2026), may suit; acai bowls come with fruit and granola, but no vegan labelling is given (official site; 2025–2026 reviews).',
    hours_raw: 'Official site: 11:00–19:00, closed Tuesday. Tabelog: daily 11:00–18:00; hours may change. The café stops serving at 17:00 (January 2026). Bookings taken (Tabelog). 16 seats; cards, no e-money or QR (Tabelog). No service charge listed on Tabelog. Second floor; samples offered (2025–2026 reviews). Two more shops in Tokyo (Yurakucho Marui, Ginza Melsa) (official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just south of Sanjo, upstairs — 297 m from Karasuma Oike Stn',
    cuisine: 'Kyoto’s first granola specialist (official site): organic granola and roasted nuts, acai bowls and ice cream upstairs · nut flavours made with famous Kyoto makers: Gion 原了郭 black shichimi (30 g ¥700, 65 g ¥1,290, August 2025), 九重味噌 white miso, 北尾 black-bean kinako, Uji organic matcha, yatsuhashi cinnamon, Ogawa Coffee, Nile Restaurant curry (official site; 2025–2026 reviews) · acai bowl with fruit and granola, nut topping; soy-sauce-and-shichimi ice cream, soy-milk and hazelnut ice cream (2025–2026 reviews) · cheaper broken nuts without a box (September 2025)',
    website: SITE, gmaps: gm('COCOLO KYOTO 三文字町'), menu_url: 'https://cocolokyoto.shop-pro.jp/',
    notes: '[Granola & nuts café · Karasuma-Oike, upstairs] Kyoto’s first granola specialist, up a flight of stairs: organic nuts roasted in Kyoto with black shichimi from 原了郭, white miso, matcha or yatsuhashi cinnamon — boxed for souvenirs, with tastings — and acai bowls or soy-sauce ice cream to eat in. The café closes before the shop. One August 2026 buyer found them good, practical gifts rather than incredible; a black-pepper lover wanted more heat. Closed Tuesday (official site).',
    chef_bio: { chef_name: null, roles: ['Nut roasters in its own Kyoto factory (official site); not named'], origin: null,
      background: 'Per the official site: the first granola specialist to open in Kyoto, treating granola as a health and beauty food with almost all-organic ingredients; nuts are roasted one by one by nut craftsmen in its factory in central Kyoto, adjusting for Kyoto’s seasons; flavours made with old Kyoto makers (原了郭 black shichimi, 九重味噌 white miso, 北尾 kinako, Uji matcha); shops in Kyoto and in Tokyo at Yurakucho Marui and Ginza Melsa.',
      philosophy: 'Official site: 「毎日食べてココロもカラダもHAPPYに」 — granola eaten daily to make heart and body happy.',
      specialty: 'Black-shichimi nuts; organic granola; acai bowls.',
      anecdotes: [
        { text: 'Arriving at 5:30 pm after the café had closed, a January 2026 visitor bought nuts instead and was given ice cream on the house.', source: R + 'B520493778/' },
        { text: '"To be honest, I wouldn\'t say they were \'incredibly delicious\' (sorry!), but they weren\'t excessively expensive either." — August 2026; long-keeping and light for souvenirs.', source: R + 'B533384826/' },
        { text: 'Someone who dislikes nuts kept buying the black-shichimi nuts as gifts, then tried them and became a fan (December 2025).', source: R + 'B518677682/' },
      ],
      japanese_sources_summary: '公式サイト (cocolo-kyoto.jp): COCOLO KYOTO、京都に初めて誕生したグラノーラ専門店、毎日食べてココロもカラダもHAPPYに、グラノーラは健康食品・美容食品、ほぼすべての素材がオーガニック、京都市中心部の工場でナッツ職人が一粒ずつ焼く、祇園原了郭の黒七味と丸又商店のオーガニックグルテンフリーたまり醤油、九重味噌の極上白味噌、北尾の京・丹波ぶどう黒豆きな粉、宇治の有機抹茶、八ツ橋のニッキ、店舗は京都本店 (東洞院通三条下ル三文字町201、11:00〜19:00、火曜休み)、有楽町マルイ店、銀座メルサ店。食べログ: カフェ・スイーツ、中京区東洞院通三条下ル三文字町201 2F、毎日11:00〜18:00、予約可、16席、カード可、電子マネー・QR不可。口コミ (2025年6月〜2026年8月、英語): アサイーボウル、ナッツのトッピング、祇園黒七味ナッツ30g 700円・65g 1,290円、白味噌、八ツ橋、Nile Restaurant のカレー、Ogawa Coffee のコーヒー味、きな粉、のり、箱なしの割れナッツ、醤油と七味のアイス、豆乳とヘーゼルナッツのアイス、試食、カフェは17時まで、親切なスタッフ、お土産向き、驚くほどではないという声。',
      confidence: 'medium', sources: [TB, SITE, SHOP, R + 'B509150590/', R + 'B510108678/', R + 'B510130465/', R + 'B512612039/', R + 'B514390080/', R + 'B518677682/', R + 'B520493778/', R + 'B524055153/', R + 'B533023222/', R + 'B533384826/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick boxes from the shelves and taste first; café orders at the counter upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下ル三文字町201 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008403, 135.760996) moved 6 m south to (35.008353, 135.760996): the Tabelog point was 3.1 m from kyoto_maison_de_frouge (三文字町201 1F, same building); now 6.9 m from it; cross-checked: GSI 京都府京都市中京区三文字町201番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512612039/'],
    price_note: 'Price from an August 2025 review.', last_checked: TODAY, items: [
      it('祇園黒七味ナッツ', '', 'Gion black-shichimi nuts, 30 g / 65 g', '¥700 / ¥1,290', 'Nuts', 'ask', 'ask', 'August 2025.', 'nuts'),
      it('', '', 'Acai bowl with fruit and granola', '', 'Café', 'ask', 'ask', 'Price not given.', 'acai'),
    ] }, {
    cuisine: '京都初のグラノーラ専門店 (公式サイト): オーガニックのグラノーラと焼きナッツ、2階でアサイーボウルやアイス・京都の老舗と組んだナッツ: 祇園原了郭の黒七味 (30g 700円、65g 1,290円、2025年8月)、九重味噌の白味噌、北尾の黒豆きな粉、宇治の有機抹茶、八ツ橋のニッキ、Ogawa Coffee のコーヒー、Nile Restaurant のカレー (公式サイト、2025〜2026年の口コミ)・フルーツとグラノーラのアサイーボウル、ナッツのトッピング、醤油と七味のアイス、豆乳とヘーゼルナッツのアイス (2025〜2026年の口コミ)・箱なしの割れナッツはお手頃 (2025年9月)',
    neighborhood: '三条のすぐ南、2階。烏丸御池駅から297m',
    gf_detail: '要確認。グラノーラには一般にオーツが入り、グルテンの情報はない。黒七味のナッツにはオーガニックのグルテンフリーのたまり醤油を使う (公式サイト) が、ほかの味は表示がない。',
    vegan_detail: '要確認。オーガニックのナッツとグラノーラ、豆乳のアイス (2026年1月) は合うかもしれないが、ヴィーガンの表示はない (公式サイト、2025〜2026年の口コミ)。',
    notes: '[グラノーラとナッツのカフェ・烏丸御池、2階] 階段を上った京都初のグラノーラ専門店。京都の工場で焼くオーガニックナッツを原了郭の黒七味、白味噌、抹茶、八ツ橋のニッキで味付けし、試食してお土産の箱で買える。店内ではアサイーボウルや醤油のアイスも。カフェは店より早く閉まる。2026年8月には驚くほどではないが実用的なお土産という声、黒七味はもっと辛くてもという声も。火曜休み (公式サイト)。',
  });
}

// ================================================================ お好み焼き 鉄板焼き まんまるの月
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26016828/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_manmaru_no_tsuki', name: 'お好み焼き 鉄板焼き まんまるの月 (Manmaru no Tsuki)', category: 'OMNI',
    lat: 35.004899, lng: 135.758877, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-batter okonomiyaki, negiyaki and yakisoba with sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the Kyoto-style okonomiyaki is rich with dashi and topped with bonito flakes (2026 reviews); Tabelog lists vegetarian options — ask.',
    hours_raw: 'Tabelog: daily 17:00–23:00 (L.O. 22:00); irregular closures. Bookings taken; a counter booking may be moved to the tatami room. 43 seats with a counter, sunken seating and semi-private rooms; private hire for 30–40; non-smoking with a smoking spot in front; children welcome; menus in English, Chinese and Korean; cards and PayPay (Tabelog). No service charge listed on Tabelog. Opened 1 December 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishiki-koji just west of Karasuma — 3 min walk from Shijo Stn and Hankyu Karasuma Stn',
    cuisine: 'Kyoto-style okonomiyaki and creative teppanyaki, plated on ceramics · okonomiyaki: mochi-cheese, wagyu, green-onion and seaweed, negiyaki, "Manbo-yaki" with mayonnaise and green onion (2026 reviews) · teppan dishes: assorted grilled vegetables, sautéed maitake and shimeji, avocado with blue cheese, shrimp and broccoli with spicy mayo, pork in Saikyo miso, omelette, seafood salad, salt yakisoba, potato salad (2026 reviews) · birthday dessert plates (June 2026) · draft Sapporo, shikuwasa chuhai, sake, wine (2026 reviews; Tabelog)',
    website: 'http://www.manmarunotuki.com/', gmaps: gm('まんまるの月 錦小路 烏丸'), menu_url: null,
    notes: '[Okonomiyaki & teppan · Shijo-Karasuma, Kyoto-style with a French twist] A stylish counter and sunken-seat room on Nishiki-koji where dashi-rich, fluffy Kyoto-style okonomiyaki shares the teppan with creative plates — avocado with blue cheese, grilled vegetables, Saikyo-miso pork — served on ceramics. Multilingual menus; staff warm and quick. Some found the yakisoba bland and the prices a little high for the taste (2026); you will leave smelling of sauce.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 1 December 2010 (Tabelog). Reviewers in 2026 describe a large teppan behind the counter, a sunken-seat area at the back for parties, regulars at the counter, Kyoto-style okonomiyaki and teppan dishes with French and Italian touches; an August 2026 diner found it via the Kansai TV programme "Yoi Don" featuring the mochi-cheese okonomiyaki.',
      philosophy: null,
      specialty: 'Kyoto-style okonomiyaki; creative teppan plates.',
      anecdotes: [
        { text: '"The only downside is that by the time you leave, you\'ll smell like okonomiyaki from the sauce." — May 2026.', source: R + 'B527702593/' },
        { text: '「味は全体的にまずまず。」 — November 2026, who still recommends it for a date, for the big teppan in front of you.', source: R + 'B538744077/' },
        { text: 'A June 2026 group celebrating a friend’s occasion had a message written on the dessert plate.', source: R + 'B530753231/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き 鉄板焼き まんまるの月、お好み焼き・鉄板焼き・ステーキ、中京区錦小路通烏丸西入占出山町312 KEY’Sビル1F、四条駅・阪急烏丸駅から徒歩3分、毎日17:00〜23:00 (L.O. 22:00)、不定休、予約可 (カウンター予約でも座敷になる場合あり)、43席、半個室、貸切30〜40名、禁煙 (店前に喫煙スペース)、子供可、英語・中国語・韓国語のメニュー、ベジタリアン対応、カード・PayPay 可、2010年12月1日オープン。口コミ (2026年4月〜11月、英語・日本語): 京風お好み焼き、だしが効いてふわふわ、もちチーズ (関西テレビ「よーいドン」で紹介)、和牛、ねぎと海苔、ねぎ焼き、まんぼ焼き、焼き野菜の盛り合わせ、きのこ炒め、アボカドのブルーチーズ焼き、海老とブロッコリーのピリ辛マヨ、豚の西京焼き、オムレツ、海鮮サラダ、塩焼きそば、ポテトサラダ、誕生日のデザートプレート、焼きそばは薄味という声、少し高め・味はまずまずという声、ソースの匂いが残る。',
      confidence: 'medium', sources: [TB, R + 'B525613932/', R + 'B527702593/', R + 'B530175482/', R + 'B530753231/', R + 'B532326511/', R + 'B533335690/', R + 'B533990532/', R + 'B535726951/', R + 'B536769656/', R + 'B538744077/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean with photos (Tabelog); counter seats watch the teppan.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通烏丸西入占出山町312 KEY’Sビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004899, 135.758877); cross-checked: GSI 京都府京都市中京区占出山町312番地 (lot) 17m; kyoto_urayama_kyoshoku 26 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices published; diners spent about ¥3,000–4,999 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Mochi-cheese okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'Price not given.', 'okonomiyaki'),
      it('', '', 'Assorted grilled vegetables', '', 'Teppan', 'ask', 'ask', 'Price not given.', 'vegetables'),
    ] }, {
    cuisine: '京風お好み焼きと創作鉄板焼きを器に盛って・お好み焼き: もちチーズ、和牛、ねぎと海苔、ねぎ焼き、マヨネーズとねぎの「まんぼ焼き」(2026年の口コミ)・鉄板料理: 焼き野菜の盛り合わせ、舞茸としめじの炒め、アボカドのブルーチーズ焼き、海老とブロッコリーのピリ辛マヨ、豚の西京味噌焼き、オムレツ、海鮮サラダ、塩焼きそば、ポテトサラダ (2026年の口コミ)・誕生日のデザートプレート (2026年6月)・サッポロ生ビール、シークワーサーのチューハイ、日本酒、ワイン (2026年の口コミ、食べログ)',
    neighborhood: '烏丸のすぐ西の錦小路。四条駅・阪急烏丸駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: 小麦の生地のお好み焼き、ねぎ焼き、ソースの焼きそば (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 京風お好み焼きはだしが効き、鰹節をのせる (2026年の口コミ)。食べログにはベジタリアン対応とあり — 要確認。',
    notes: '[お好み焼きと鉄板焼き・四条烏丸、京風にフレンチの一工夫] 錦小路のおしゃれなカウンターと掘りごたつの店。だしの効いたふわふわの京風お好み焼きと、アボカドのブルーチーズ焼き、焼き野菜、豚の西京焼きなど創作の鉄板料理を器に盛って出す。多言語のメニュー、スタッフは温かく手早い。焼きそばは薄味、味の割に少し高いという声も (2026年)。服にソースの匂いが残る。',
  });
}

// ================================================================ 寺町よしくら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26005368/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://teramachiyoshikura.com/';
  const H = day(['11:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_teramachi_yoshikura', name: '寺町よしくら (Teramachi Yoshikura)', category: 'MOM_AND_POP',
    lat: 35.028727, lng: 135.767665, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; lunch sets with tempura and dashi-simmered obanzai, Saikyo-miso grilled fish (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: obanzai simmered in dashi and fish or beef mains (2026 reviews; official site).',
    hours_raw: 'Official site: lunch 11:00–14:00 (L.O.), dinner 17:00–21:00 (L.O.); closed Tuesday. Tabelog: 11:00–14:30 (L.O. 14:00) and 17:00–22:00 (L.O. 21:00). Lunch is cash or PayPay only; cards at dinner (Tabelog). Bookings taken; lunch fills up, so book (October 2026). No service charge (Tabelog; Japanese original 「なし」). 20 seats: a counter of 10 and tatami rooms; non-smoking; children welcome but no nursing or changing facilities (Tabelog). Opened 13 November 2006 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-dori just south of Imadegawa, east of the Imperial Palace — 5 min walk from Demachiyanagi Stn',
    cuisine: 'Japanese cooking by a hotel-trained chef, famous for all-you-can-eat obanzai at lunch · every lunch set comes with 6–8 obanzai refilled on request (okara, hijiki, pumpkin, satoimo, ganmo, atsuage, red konnyaku, dried daikon) and rice refills: daily set ¥2,300, saba miso-grilled ¥2,400, sashimi gozen ¥4,200, Saikyo-grilled black cod or mackerel, sukiyaki rice bowl (2026 reviews); Shinshu-beef steak gozen, Kyoto-style sukiyaki box, eel box, Saikyo-yaki set limited to 20 (official site) · dinner: kaiseki, soy-milk hot pot, wild kue simmered in its own broth (official site) · rice from Miyama (official site)',
    website: SITE, gmaps: gm('寺町よしくら 真如堂前町'), menu_url: SITE + 'menu.html',
    notes: '[Japanese & obanzai · Teramachi-Imadegawa, refills on the house] A counter-and-tatami restaurant east of the Imperial Palace run by a chef trained in Okura and Royal hotel kitchens, beloved at lunch for set meals with unlimited obanzai and rice — okara, hijiki, pumpkin, simmered satoimo — beside sashimi, tempura or Saikyo-grilled fish, ¥2,300–4,200. Dinner is kaiseki and soy-milk hot pot. One diner found the seasoning on the sweet side; obanzai are now served by staff rather than self-serve. Lunch cash or PayPay. Closed Tuesday.',
    chef_bio: { chef_name: '谷口 寿幸 (owner-chef, per the official site; no reading in a source)', roles: ['Owner and chef (official site: 店主 / 料理人 谷口 寿幸)'], origin: null,
      background: 'Per the official site: trained in Japanese cooking at the Kobe Oriental Hotel from 1991 (Heisei 3) and in Kyoto cuisine at 京大和, then worked at the Rihga Royal Hotel Tokyo, Hotel Okura Tokyo and Hotel Okura Kyoto, often cooking at the state guesthouse and the Prime Minister’s residence; opened 寺町よしくら independently in 2006 (Heisei 18). The site also lists a sister shop, よしくら 北店, in Kita-ku, and sells Saikyo-marinated black cod and pickles online.',
      philosophy: 'Official site: to keep improving ingredients and menu and never forget the beginner’s mind, thanks to guests and staff.',
      specialty: 'All-you-can-eat obanzai lunch; Saikyo-miso grilled fish.',
      anecdotes: [
        { text: 'A September 2026 regular noticed the obanzai, once self-served from bowls on the counter, are now refilled by the staff on request.', source: R + 'B535559732/' },
        { text: '"Please feel free to ask for more anytime," a staff member told an October 2026 diner asking for refills.', source: R + 'B538221423/' },
        { text: 'A September 2026 visitor near the Futaba mochi shop found the obanzai and sukiyaki bowl on the sweet side — recommended for those who like sweet flavours.', source: R + 'B538528506/' },
      ],
      japanese_sources_summary: '公式サイト (teramachiyoshikura.com): 寺町よしくら、御所東の本格和食、旬の魚介と京野菜、数々の有名ホテルで経験を積んだ匠、ランチはお惣菜6〜7品が食べ放題 (信州牛のステーキ御膳、京風すき焼き重、鰻重、限定20食の西京焼定食など)、夜は限定会席、豆乳鍋、和歌山産天然クエのあら煮、日本酒・焼酎、京都美山のキヌヒカリ、店主・料理人 谷口 寿幸: 平成3年神戸オリエンタルホテルで日本料理の修業、京大和で京料理、リーガロイヤルホテル東京、ホテル・オークラ東京、ホテル・オークラ京都、迎賓館や総理公邸での調理、平成18年に独立、昼11:00〜14:00 (L.O.)、夜17:00〜21:00 (L.O.)、火曜休み、よしくら 北店、楽天の通販 (銀だら西京漬け、漬物)。食べログ: 日本料理・居酒屋・海鮮、上京区寺町通今出川下ル真如堂前町102、出町柳駅から徒歩5分、11:00〜14:30・17:00〜22:00、火曜休み、ランチは現金か PayPay のみ、サービス料なし、20席 (カウンター10、座敷10)、禁煙、子供可 (授乳室やおむつ替えの設備なし)、2006年11月13日オープン。口コミ (2026年8月〜11月、英語): おばんざい食べ放題 (おから、ひじき、南瓜、里芋、がんも、厚揚げ、赤こんにゃく、切り干し大根)、ご飯おかわり自由、日替わり2,300円、鯖の味噌焼き2,400円、お造り御膳4,200円、銀だらや鯖の西京焼き、すき焼き丼、以前はセルフで今はスタッフがよそう、甘めの味付けという声、ランチは予約がおすすめ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B533695497/', R + 'B535559732/', R + 'B537723386/', R + 'B537725175/', R + 'B537813902/', R + 'B538149113/', R + 'B538221423/', R + 'B538407141/', R + 'B538496200/', R + 'B538528506/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose a lunch set; staff refill obanzai on request; lunch cash or PayPay only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区寺町通今出川下ル真如堂前町102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.028727, 135.767665); cross-checked: GSI 京都府京都市上京区真如堂前町102番地 (lot) 7m; kyoto_epice_demachi (105) 14 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537723386/', R + 'B538407141/'],
    price_note: 'Lunch prices from October 2026 reviews; every lunch includes all-you-can-eat obanzai and rice.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set (with all-you-can-eat obanzai)', '¥2,300', 'Lunch', 'ask', 'no', 'October 2026.', 'teishoku'),
      it('', '', 'Saba miso-grilled lunch set', '¥2,400', 'Lunch', 'ask', 'no', 'October 2026.', 'teishoku'),
      it('', '', 'Sashimi gozen (with tempura)', '¥4,200', 'Lunch', 'ask', 'no', 'October 2026.', 'teishoku'),
    ] }, {
    cuisine: 'ホテル出身の料理人の和食で、昼のおばんざい食べ放題が名物・どの昼の膳にもおばんざい6〜8品 (おから、ひじき、南瓜、里芋、がんも、厚揚げ、赤こんにゃく、切り干し大根) のおかわりとご飯のおかわりがつく: 日替わり2,300円、鯖の味噌焼き2,400円、お造り御膳4,200円、銀だらや鯖の西京焼き、すき焼き丼 (2026年の口コミ)、信州牛のステーキ御膳、京風すき焼き重、鰻重、限定20食の西京焼 (公式サイト)・夜は会席、豆乳鍋、天然クエのあら煮 (公式サイト)・美山の米 (公式サイト)',
    neighborhood: '今出川のすぐ南の寺町通、御所の東。出町柳駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。昼の膳には天ぷら、だしで炊いたおばんざい、西京焼きの魚 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: だしで炊いたおばんざいと魚や牛の主菜 (2026年の口コミ、公式サイト)。',
    notes: '[和食とおばんざい・寺町今出川、おかわり自由] 御所の東、オークラやロイヤルのホテルで修業した料理人が営むカウンターと座敷の店。昼はおから、ひじき、南瓜、里芋の炊いたんなどのおばんざいとご飯がおかわり自由の膳が人気で、お造り、天ぷら、西京焼きと2,300〜4,200円。夜は会席や豆乳鍋。味付けが甘めという声、おばんざいは今はセルフでなくスタッフがよそう。昼は現金か PayPay。火曜休み。',
  });
}

// ================================================================ 洛空 (The Westin Miyako Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033184/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.miyakohotels.ne.jp/westinkyoto/restaurant/152992/index.html';
  const WD = day(['06:30', '21:00']); const WE = day(['06:30', '22:00']);
  put({
    id: 'kyoto_westin_miyako_raku', name: '洛空 (Raku, The Westin Miyako Kyoto)', category: 'OMNI',
    lat: 35.009123, lng: 135.788608, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask the staff: Tabelog says allergy information is available. The buffet mixes tempura, bread, pasta and noodles with sushi, roast beef and rice dishes (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: allergy information is available (Tabelog); salads, vegetables and rice are on the buffet, but most stations serve fish, meat or eggs (2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 6:30–21:00; Sat–Sun 6:30–22:00 — breakfast, lunch (a 90-minute course, September 2026), afternoon tea and dinner buffets. Service charge 15% (Tabelog; Japanese original 「15％」); an August 2026 breakfast guest paid ¥5,000 per adult and ¥2,500 per child (4–12) including tax and service. One child under school age eats free with each paying adult (August and October 2026). Bookings taken; dinner guests may enter about 10 minutes early (August 2026). 186 seats; a private room for 24 or more; non-smoking; wheelchair accessible; parking 2 hours free with ¥3,000 spent; cards, e-money and QR (Tabelog). Opened 27 November 2019 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Keage, in The Westin Miyako Kyoto — 2 min walk from Keage Stn',
    cuisine: 'All-day hotel buffet with live kitchens and a view · breakfast ¥5,000 adults, ¥2,500 children 4–12, tax and service included: onigiri and dashimaki made in front of you, omelettes, red miso soup, nyumen, obanzai, fresh orange juice, smoothies, breads, Kyoto pickles (August–October 2026) · lunch 90-minute buffet ¥6,200 (September 2026) · dinner: sushi made to order, freshly fried tempura, roast beef, noodles, pasta, unagi rice, curry, cheese, rice from 八代目儀兵衛, Cremia soft serve, mini cakes, Ogawa Coffee (2026 reviews) · afternoon tea set with free-flow drinks (Tabelog)',
    website: SITE, gmaps: gm('洛空 ウェスティン都ホテル京都'), menu_url: SITE,
    notes: '[Hotel buffet · Keage, The Westin Miyako Kyoto] The Westin Miyako’s all-day buffet room, with a window view of the Daimonji on the hill: breakfast of onigiri and dashimaki made in front of you, and at dinner sushi to order, fresh tempura and roast beef from live kitchens. Families love that a preschooler eats free with each adult; others found the menu barely changes with the seasons and lines at the sushi station long. 15% service. Open daily from 6:30.',
    chef_bio: { chef_name: null, roles: ['Hotel restaurant of The Westin Miyako Kyoto (official hotel site); chefs not named'], origin: null,
      background: 'The all-day buffet restaurant of The Westin Miyako Kyoto in Keage (hotel site; Tabelog). Opened 27 November 2019 (Tabelog). An October 2026 reviewer had stayed at the hotel almost every year since it was the Miyako Hotel.',
      philosophy: 'Tabelog: a buffet put together with care, in a spacious room with plenty of distance between tables.',
      specialty: 'Live-kitchen onigiri and dashimaki at breakfast; sushi and tempura at dinner.',
      anecdotes: [
        { text: '"The cost performance is great, and the food is delicious, but it’s a bit disappointing that the menu doesn’t change significantly with each season." — August 2026, a regular.', source: R + 'B478390103/' },
        { text: 'An August 2026 family ate dinner looking out at the Daimonji on the hill through the window.', source: R + 'B526207427/' },
        { text: 'On an October 2026 weekend about 80% of the guests were families with small children.', source: R + 'B537317818/' },
      ],
      japanese_sources_summary: '食べログ: 洛空、ビュッフェ・寿司・洋食、東山区粟田口華頂町1 (ウェスティン都ホテル京都)、蹴上駅から徒歩2分、京都駅八条口から無料シャトルバス、月〜金 6:30〜21:00、土日 6:30〜22:00、サービス料15%、予約可、186席、24名以上で個室、禁煙、車椅子可、3,000円以上で駐車2時間無料、アレルギー表示あり、デザートビュッフェ、アフタヌーンティー、2019年11月27日オープン。口コミ (2026年4月〜10月、英語): 朝食大人5,000円・子供 (4〜12歳) 2,500円 (税サ込)、目の前で握るおにぎりとだし巻き、オムレツ、赤だし、にゅうめん、おばんざい、搾りたてオレンジジュース、スムージー、パン、京漬物、昼は90分で6,200円、夜は握り寿司、揚げたて天ぷら、ローストビーフ、麺、パスタ、鰻ご飯、カレー、八代目儀兵衛の米、クレミア、小川珈琲、未就学児は大人1人につき1人無料、窓から右大文字、季節で内容があまり変わらない、寿司は行列という声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B478390103/', R + 'B526207427/', R + 'B534455572/', R + 'B534701018/', R + 'B534715079/', R + 'B534793319/', R + 'B535426175/', R + 'B536680136/', R + 'B537317818/', R + 'B537962500/'] },
    cultural_comfort: { level: 'english', note: 'International hotel buffet; point and serve yourself; live-kitchen staff cook to order.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区粟田口華頂町1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009123, 135.788608); cross-checked: GSI 京都府京都市東山区粟田口華頂町1番地 (lot) 103m (the hotel grounds); kyoto_dominique_bouchet_teppanyaki (same hotel) 81 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534793319/', R + 'B536680136/'],
    price_note: 'Prices from August–September 2026 reviews; breakfast includes tax and service.', last_checked: TODAY, items: [
      it('', '', 'Breakfast buffet, adult (13+)', '¥5,000', 'Breakfast', 'ask', 'ask', 'Tax and service included; children 4–12 ¥2,500.', 'buffet'),
      it('', '', 'Lunch buffet, 90 minutes', '¥6,200', 'Lunch', 'ask', 'ask', 'September 2026.', 'buffet'),
    ] }, {
    cuisine: 'ライブキッチンと眺めのある終日営業のホテルのビュッフェ・朝食は大人5,000円、4〜12歳2,500円 (税サ込): 目の前で握るおにぎりとだし巻き、オムレツ、赤だし、にゅうめん、おばんざい、搾りたてのオレンジジュース、スムージー、パン、京漬物 (2026年8〜10月)・昼は90分のビュッフェ6,200円 (2026年9月)・夜: 注文で握る寿司、揚げたての天ぷら、ローストビーフ、麺、パスタ、鰻ご飯、カレー、チーズ、八代目儀兵衛の米、クレミア、ミニケーキ、小川珈琲 (2026年の口コミ)・ドリンクがフリーフローのアフタヌーンティー (食べログ)',
    neighborhood: '蹴上、ウェスティン都ホテル京都の中。蹴上駅から徒歩2分',
    gf_detail: 'スタッフに確認を: 食べログにはアレルギー表示ありとある。ビュッフェには寿司、ローストビーフ、ご飯もののほか、天ぷら、パン、パスタ、麺もある (2026年の口コミ)。',
    vegan_detail: '要確認: アレルギー表示あり (食べログ)。サラダ、野菜、ご飯もあるが、ほとんどの料理は魚、肉、卵を使う (2026年の口コミ)。',
    notes: '[ホテルビュッフェ・蹴上、ウェスティン都ホテル京都] ウェスティン都ホテル京都の終日営業のビュッフェで、窓から大文字が見える。朝は目の前で握るおにぎりとだし巻き、夜はライブキッチンの握り寿司、揚げたて天ぷら、ローストビーフ。大人1人につき未就学児1人無料で家族連れに人気。一方、季節で内容があまり変わらない、寿司は行列という声も。サービス料15%。毎日6:30から。',
  });
}

save();
