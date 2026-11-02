// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 1.
//   + リュミエール lumière (vegetable-led French courses, Tabelog French WEST 100; Higashi-Shinsaibashi, since 2006)
//   + サロン・ド・テ・アルション 法善寺本店 Salon de Thé Alcyon (French tea salon and patisserie near Hozenji, since 1986)
//   + ダンケ 心斎橋 Danke Shinsaibashi (butter-blend coffee kissaten open to 23:30, Tabelog Kissaten 100)
//   + 焼鳥 サイヒ Yakitori Saihi (7-seat omakase yakitori counter run by one owner; Minami-Senba back alley)
//   Chain check. lumière is the head shop (本店) of the Lumière Group (k-coeur.com: "現在10店舗（直営７店舗、監修3店舗）"),
//   whose other outlets are differently named bistros, a bakery and tea salons (Bistrot KARATO, Pain KARATO, DAMMANN
//   lumière); there is one lumière. Alcyon: Tabelog remarks "Just a 1-minute walk to Crêperie Alcyon" — a sister concept
//   already in data (osaka_creperie_alcyon_namba); both belong to 株式会社かめいあんじゅ (KameiAnjou Inc.), whose site
//   lists one Salon de Thé among bistros, patisseries and a bakery; this salon is the original (opened 2 Nov 1986).
//   Danke: two shops found under the name (this one and "Butter Blend Coffee アメ横ダンケ" in Ueno, per a coffee-labo.co.jp
//   ranking table); not a fast-growing chain. Saihi: one Tabelog listing, TableCheck page for the same shop, no branches.
//   None is in data/osaka.json (grep by name and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ リュミエール
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27009418/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://k-coeur.com/'; const CHEF = SITE + 'chef/'; const REST = SITE + 'restaurant/';
  const JUNSEI = 'https://ykarato.com/';
  const H = day(['12:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_lumiere_higashishinsaibashi', name: 'リュミエール (lumière)', category: 'OMNI',
    lat: 34.674711, lng: 135.5025, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The shop\'s Tabelog page says 99% of its dishes use no butter, cream, flour or sugar, and the official site says the same of its sauces, so most plates may be free of wheat flour, but nothing is called gluten-free, and courses include bread (Karato bread), pâté en croûte, a lotus-root galette, financiers and other small sweets (2026 reviews). Ask which dishes can be swapped.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables lead every plate, but the courses are built around fish and meat, the opening soup is a vegetable and chicken consommé (July 2026), and no vegan course is listed.',
    hours_raw: 'Tue–Sun lunch 12:00–15:00 (last order 13:00), dinner 18:00–21:00 (last order 19:00); closed Monday, or the next day when Monday is a holiday (Tabelog; official site). Courses only. Reservations online (Tabelog says phone lines may be closed; book online). Service charge 10% (Tabelog; official site). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 39 seats at tables plus one private room for up to 8 (room fee ¥4,000 in one place on the listing, ¥4,400 in another); non-smoking; wheelchair accessible (Tabelog). Children welcome, with a kids\' menu; children under elementary-school age are seated in the private room (Tabelog). Opened 20 December 2006 (Tabelog; official site: 2006).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-19-15, Unagidani Block 3F — 3 min from Shinsaibashi Stn exit 2 (Midosuji Line)',
    cuisine: '"Vegetable gourmet" French courses with 99% of dishes made without butter, cream, flour or sugar, seasoned mainly with salt and pepper (official site; Tabelog) · lunch 8 dishes ¥8,800; dinner A 9 dishes ¥13,200, B 10 dishes ¥17,600, special 10 dishes ¥22,000; plus 10% service (official site, tax included, read October 2026); Tabelog also lists a 9-dish lunch at ¥11,000 · main-course choice with supplements, e.g. Kagoshima black pork loin, domestic beef fillet, Australian lamb rack +¥1,100, Landes pigeon +¥1,650, Yamagata wagyu fillet +¥2,200 (July 2026) · signatures: a soup of 20 vegetables finished at the table, the "Crystal Amusement Park" of six bite-sized starters in glassware, foie gras with lotus-root galette, fish sent direct from the source and slow-cooked, a "small vegetable dessert" of komatsuna, celery, burdock and daikon, Karato bread with tomato paste (February 2026) · over 200 wines chosen by a senior sommelier, sake pairings, vegetable cocktails and non-alcoholic drinks',
    website: REST, gmaps: gm('リュミエール 東心斎橋'), menu_url: REST,
    notes: "[French · Higashi-Shinsaibashi, vegetable-led haute cuisine from a long-running chef] The head restaurant of chef Yasushi Karato, who opened it in 2006 around one idea, which the chef calls vegetable gourmet: French cooking in which vegetables carry the flavour and 99% of the dishes do without butter, cream, flour and sugar. The group's site says it topped the Zagat Survey in its first year and has held a Michelin star 12 years running since the guide was first published, and in October 2026 the chef was made a Chevalier of France's Mérite agricole. Courses open with a soup of 20 vegetables poured at the table, then the house \"Crystal Amusement Park\", six small starters in glass, before fish, a meat you choose (supplements for lamb, pigeon or wagyu), a dessert made from garden vegetables and a fruit dessert. Diners in 2026 called it art on a plate and came from as far as Nagoya; one found the bill about double the ¥8,800 lunch once supplements and drinks were added. A calm, spacious third-floor room with a private room, popular for birthdays and three-generation family meals. Book online; closed Mondays.",
    chef_bio: { chef_name: 'Yasushi Karato (唐渡 泰)', roles: ['Owner-chef (Tabelog: "Owner Chef: Mr. Yasushi Karato"; official site)', 'Head of the Lumière Group (official site)'], origin: null,
      background: 'Per the official chef page: trained at many well-known restaurants and hotels, then opened lumière in Shinsaibashi in 2006; top ranking in the Zagat Survey in its first year; a star in every Michelin Guide since it was first published, 12 years running (as the site puts it); runs the restaurant business, produces other food ventures and imports the French tea house Dammann Frères; heads the Lumière Group, now 10 shops (7 run directly, 3 supervised); a planning member of 文化芸術観光ネットワーク大阪 and a board member of クラブ・デュ・タスキドール (as written; no romaji given); author of the book 野菜の美食. On 14 October 2026 the site announced the chef had been made a Chevalier of the Ordre du Mérite agricole. The chef of Junsei in the same building (osaka_junsei_higashishinsaibashi, address_ja "東心斎橋1-19-15 UNAGIDANI BLOCK 1F.2F") trained under Karato at lumière from 2017 (Junsei official site).',
      philosophy: '"Beautiful to the eye, surprising to the tongue, kind to the body" — a feast three generations can share; recipes are never fixed and keep being upgraded (official site).', specialty: 'Vegetable-led French courses; the Crystal Amusement Park starters; vegetable desserts.',
      anecdotes: [
        { text: '"I came all the way from Nagoya because I wanted to try it. This restaurant has fundamentally changed my perception of French cuisine." — May 2026, ¥17,400 course.', source: R + 'B527277816/' },
        { text: '"I made a reservation for the lunch course priced at JPY 8,800 (tax included). However, the final bill was about double that amount." — July 2026.', source: R + 'B227479447/' },
        { text: '"I also appreciated being able to choose the color of the Laguiole knife." — August 2026, group booking in the private room.', source: R + 'B533030711/' },
      ],
      japanese_sources_summary: '公式サイト (k-coeur.com): リュミエール本店、2006年心斎橋にオープンしたリュミエールグループの本店、開業1年目にザガットサーベイでトップランキング、シェフ唐渡泰、テーマは「野菜の美食」、ソースにワイン・バター・クリーム・小麦粉・砂糖を99％使用しない、ミシュランガイド発刊以来12年連続で星、リュミエールグループ代表として10店舗 (直営7、監修3)、ダマンフレールの輸入、著書「野菜の美食」、2026年10月に農事功労章シュヴァリエを受章、ランチ8皿8,800円、ディナーA 9皿13,200円、B 10皿17,600円、特別コース22,000円 (税込、別途サービス料10%)、シニアソムリエ、日本酒や野菜のカクテル、デザートのスペシャリテ「野菜のデザート」、完全個室、親子孫3世代で楽しめるレストラン、東心斎橋1-19-15 UNAGIDANI BLOCK 3F。食べログ (店舗会員): フレンチ WEST 百名店 2021・2023・2025、火〜日 12:00〜15:00 (L.O.13:00)、18:00〜21:00 (L.O.19:00)、月曜休み (祝日の場合は翌日)、サービス料10%、カード可、39席、個室あり、車椅子可、子ども可 (未就学児は個室)、ワイン200種類以上、2006年12月20日オープン。口コミ(2026年2月〜10月): 20種類の野菜のスープ、クリスタル遊園地、フォアグラ、Karato bread、小松菜・セロリ・牛蒡・大根の野菜のデザート、メインは追加料金で選べる、ランチ8,800円が追加とドリンクで約2倍に、Nagoya から来た人も、誕生日や家族の記念日に。',
      confidence: 'medium', sources: [TB, SITE, CHEF, REST, JUNSEI, R + 'B227479447/', R + 'B405708716/', R + 'B474394369/', R + 'B522771106/', R + 'B523060759/', R + 'B527028278/', R + 'B527277816/', R + 'B529584072/', R + 'B531705985/', R + 'B533030711/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses booked online; staff explain each dish (July 2026); the main course is chosen from a short list.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-15 UNAGIDANI BLOCK 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (news into October 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.674648, 135.502500); same building as Albalonga (osaka_albalonga_higashishinsaibashi, address_ja "東心斎橋1-19-15 Unagidani Block 2F", pinned 1 m from this Tabelog point) and Junsei (osaka_junsei_higashishinsaibashi, offset ~7 m south), so this pin is offset ~7 m north to keep the three apart; GSI 大阪府大阪市中央区東心斎橋一丁目19番15号 (go) 12m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [REST, TB, R + 'B227479447/'],
    price_note: 'Course prices from the official site (tax included, plus 10% service; read October 2026); main-course supplements from a July 2026 review.', last_checked: TODAY, items: [
      it('ランチメニュー 8皿', '', 'Lunch course, 8 dishes', '¥8,800', 'Course', 'ask', 'ask', 'Official site; Tabelog.', 'lunch_course'),
      it('', '', 'Lunch course C, 9 dishes', '¥11,000', 'Course', 'ask', 'ask', 'Tabelog ("most popular").', 'lunch_course_c'),
      it('ディナーメニューA 9皿', '', 'Dinner course A, 9 dishes', '¥13,200', 'Course', 'ask', 'ask', 'Official site.', 'dinner_a'),
      it('ディナーメニューB 10皿', '', 'Dinner course B, 10 dishes', '¥17,600', 'Course', 'ask', 'ask', 'Official site; Tabelog.', 'dinner_b'),
      it('特別コース 10皿', '', 'Special course, 10 dishes', '¥22,000', 'Course', 'ask', 'ask', 'Official site.', 'special_course'),
      it('', '', 'Main-course supplement: Yamagata wagyu fillet', '+¥2,200', 'Course', 'ask', 'no', 'July 2026; lamb +¥1,100, pigeon +¥1,650.', 'wagyu_supplement'),
    ] }, {
    cuisine: '「野菜の美食」のフレンチのコース。料理の99%でバター、生クリーム、小麦粉、砂糖を使わず、おもに塩とこしょうで仕上げる (公式サイト、食べログ)・ランチ8皿8,800円、ディナーA 9皿13,200円、B 10皿17,600円、特別コース10皿22,000円、別途サービス料10% (公式サイト、税込み、2026年10月に確認)。食べログには9皿のランチ11,000円も・メインは追加料金で選べる。例: Kagoshima の黒豚ロース、国産牛フィレ、Australia の仔羊 +1,100円、Landes のピジョン +1,650円、Yamagata の和牛フィレ +2,200円 (2026年7月)・名物: テーブルで仕上げる20種類の野菜のスープ、ガラスの器に6種類の一口前菜をのせた「クリスタル遊園地」、フォアグラと蓮根のガレット、産地直送の魚の低温調理、小松菜・セロリ・牛蒡・大根の「小さな野菜のデザート」、トマトのペーストを添えた自家製パン (Karato bread) (2026年2月)・シニアソムリエが選ぶ200種類以上のワイン、日本酒のペアリング、野菜のカクテル、ノンアルコールも',
    neighborhood: '東心斎橋1-19-15 UNAGIDANI BLOCK 3F。地下鉄御堂筋線心斎橋駅2番出口から徒歩3分',
    gf_detail: '予約時に要確認。店の食べログのページでは料理の99%でバター、生クリーム、小麦粉、砂糖を使わないとし、公式サイトはソースについて同じことを書いているので、小麦粉を使わない皿が多いかもしれないが、グルテンフリーの説明はなく、コースにはパン (Karato bread)、パテ・アン・クルート、蓮根のガレット、フィナンシェなどの小菓子も (2026年の口コミ)。差し替えできる皿を確認して。',
    vegan_detail: '要確認。どの皿も野菜が主役だが、コースは魚と肉が中心で、最初のスープは野菜と鶏のコンソメ (2026年7月)。ヴィーガンのコースは載っていない。',
    notes: '[フレンチ・東心斎橋、長く続くシェフの野菜が主役の美食] 唐渡泰シェフが2006年に開いたリュミエールグループの本店。テーマは「野菜の美食」で、野菜が味を組み立て、料理の99%でバター、生クリーム、小麦粉、砂糖を使わないフランス料理。グループのサイトによれば開業1年目にザガットサーベイでトップランキング、ミシュランガイドの発刊以来12年連続で星を獲得し、2026年10月にはシェフがフランスの農事功労章シュヴァリエを受章した。コースはテーブルで注ぐ20種類の野菜のスープ、ガラスの器に6つの小さな前菜をのせた名物「クリスタル遊園地」に始まり、魚、選べる肉 (仔羊、ピジョン、和牛は追加料金)、畑の野菜で作るデザート、果物のデザートと続く。2026年の口コミでは皿の上のアートとの声や、Nagoya から来たという人も。8,800円のランチが追加料金と飲み物で約2倍になったという声もある。3階の落ち着いた広い店内に個室もあり、誕生日や3世代の家族の食事に人気。予約はネットで、月曜休み。',
  });
}

// ================================================================ サロン・ド・テ・アルション 法善寺本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001538/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.anjou.co.jp/salon/'; const F2 = SITE + 'f2/'; const F1 = SITE + 'f1/'; const CO = 'https://www.anjou.co.jp/';
  const W = day(['11:30', '20:00']); const E = day(['11:00', '20:00']);
  put({
    id: 'osaka_salon_de_the_alcyon_hozenji', name: 'サロン・ド・テ・アルション 法善寺本店 (Salon de Thé Alcyon)', category: 'OMNI',
    lat: 34.668074, lng: 135.501947, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The teas themselves are plain leaf blends, but every cake on the shop\'s own list names wheat, milk and egg as allergens, and the lunches are wheat-heavy (croissant sandwich, penne gratin, cheese pie, bread with the sets). The crème brûlée is not described either way.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Straight and flavoured teas, rooibos and herbal infusions may suit (served in a pot; milk tea is separate); every cake lists milk and egg, and the lunches use meat, ham, cheese and cream.',
    hours_raw: 'Tue–Fri (and the days before and after a holiday) 11:30–20:00; Sat, Sun and holidays 11:00–20:00; last food order 19:00; closed Monday, open when Monday is a holiday (Tabelog). The official site lists closing days as irregular and gave Mondays 5, 19 and 26 October 2026 off. The 2F salon closes at 17:00 (last order 15:30) on tea-party event days (Tabelog; official site). 1F boutique for takeaway cakes, baked goods and tea; 2F salon of 36 seats, up steep stairs (official site; October 2026 review). Salon bookings only for meals or sets (Tabelog; official site); a September 2026 diner waited 28 minutes at noon on a Saturday. Pay at the register upstairs (April 2025 review). Cards (VISA, Master, JCB, AMEX, Diners, Discover per the official site); no e-money or QR (Tabelog). Non-smoking; children welcome (Tabelog). A takeaway bag costs ¥50 (October 2026 review). Opened 2 November 1986 (Tabelog; the official site marks its 40th anniversary on 2 November 2026).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-6-20, by Hozenji, behind a red door — 3 min from Namba Walk exits B-12 or B-14 (Namba Stn, Kintetsu Osaka-Namba Stn); Crêperie Alcyon is a minute away',
    cuisine: 'French-style salon de thé: tea in a pot with plated desserts, cakes and light French-leaning meals (prices from the official site, tax included, read October 2026) · plated desserts made to order, with tea: Puits d\'amour (caramelised chiboust with apple in spiced red wine, autumn) ¥2,500; the 40th-anniversary Mont Blanc (the original recipe: browned meringue, cream, chestnut cream) ¥2,700; caramelised salted-caramel castella with vanilla ice cream ¥1,800 · Alcyon Blue crème brûlée ¥1,250; savarin flambéed with rum ¥1,250; tea scones, two with French strawberry jam and cream, ¥900 · petit afternoon tea ¥2,980 (with cake) or ¥3,280 (with plated dessert); seasonal Halloween afternoon tea ¥5,000/¥5,300 · one-plate lunch until 14:00 (soup, ham Caesar salad, croissant sandwich, octopus and broccoli marinade, penne gratin, cheese pie, cake and drink) ¥2,500/¥2,830; Alcyon set A, chicken cacciatore ¥1,980/¥2,310; set B, beef cheek in red wine or hamburg with demi-glace ¥2,310/¥2,640 · flavoured teas ¥860, e.g. the house Alcyon Blue (lavender, strawberry, rhubarb, cornflower petals); single-estate Assam, Darjeeling, Uva, Kandy, Dimbula, Nilgiri ¥840; rooibos and herbal teas · tea cocktails from 17:00, ¥950 · boutique cakes such as Mont Blanc, strawberry shortcake, Pistachio Mania, Naruto kintoki sweet-potato tart ¥680, pumpkin Basque cheesecake ¥600; takeaway iced tea ¥700',
    website: SITE, gmaps: gm('サロン・ド・テ・アルション 法善寺'), menu_url: F2,
    notes: "[Tea salon · Namba, a 40-year-old French salon de thé by Hozenji] Behind a red door a few steps from Hozenji Yokocho, a cake and tea shop downstairs and, up steep stairs, an antique-furnished salon where tea comes in a pot. Opened in 1986, it turns 40 on 2 November 2026; a 2026 reviewer calls it a pioneer of the salon de thé in Kansai, and the crêpe shop Crêperie Alcyon nearby grew out of it. Order a plated dessert made to order (the original Mont Blanc of crisp browned meringue and chestnut cream, a puits d'amour, a salted-caramel castella with hot caramel poured at the table), a cake from the case, or a set lunch with soup, a main, dessert and drink from about ¥2,000. The teas are naturally scented blends; the house Alcyon Blue of lavender, strawberry and rhubarb is the favourite. On Tabelog's Sweets WEST 100 list in 2020, 2022, 2023 and 2026. Busy at weekends (a 28-minute wait at noon on a Saturday in September 2026); an October 2026 diner found about 80% of an evening crowd were overseas visitors. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Run by 株式会社かめいあんじゅ (KameiAnjou Inc., per the site\'s copyright line), which also runs Crêperie Alcyon (osaka_creperie_alcyon_namba), Bistro da Anjou, patisseries and a bakery (company site). The cakes come each morning from the group\'s Atelier Alcyon pastry kitchen, and the site credits the plated desserts to an Alcyon patissier who won an award from the Ministry of Agriculture\'s secretariat (農林水産省大臣官房長賞). Teas are blends from the Paris tea house George Cannon, naturally scented (official site; an October 2026 review). Opened 2 November 1986 (Tabelog); 40th-anniversary events with old recipes revived, July–November 2026 (official site). Selected for Tabelog Sweets WEST "Tabelog 100" in 2020, 2022, 2023 and 2026.',
      philosophy: 'For people in France a salon de thé is a place to drop into any time, to rest and talk over tea; enjoy teas and desserts found only here (official site).', specialty: 'Plated desserts made to order; the original Mont Blanc; Alcyon Blue tea.',
      anecdotes: [
        { text: '"As a pioneer of authentic salon de thé culture in Kansai, Alcyon has garnered overwhelming support for nearly 40 years." — October 2026, Alcyon set and one-plate lunch.', source: R + 'B537315897/' },
        { text: '"It was a weekday evening, and the restaurant was almost full, with about 80% of the customers being international visitors." — October 2026.', source: R + 'B538040229/' },
        { text: '"If it becomes too strong, you can switch to milk tea, and they might even offer hot water for a refill." — October 2026, Mont Blanc and tea.', source: R + 'B536831407/' },
      ],
      japanese_sources_summary: '公式サイト (anjou.co.jp): サロン・ド・テ アルション法善寺本店、1F/boutique と 2F/salon (36席、全席禁煙)、難波1-6-20、なんばウォークB-12またはB-14出口から徒歩3分、平日11:30〜20:00、土日祝11:00〜20:00、2Fは19:00 L.O.、不定休、席の予約は食事の利用のみ、カード可、2026年11月2日に40周年、昔のレシピを再現したケーキやデセールを7月〜11月に、農林水産省大臣官房長賞を受賞したパティシエ考案のできたてデセール (ピュイダムール2,500円、40thこだわりモンブラン2,700円、塩キャラメルカステラ1,800円、いずれも紅茶付き)、アルションブルーのクレームブリュレ1,250円、サヴァラン1,250円、スコーン2個900円、プティアフタヌーンティーセット2,980円〜、ワンプレートランチ2,500円〜 (〜14:00)、アルションセットA 1,980円〜、B 2,310円〜、フレーバーティー860円、ノンフレーバーティー840円、夜だけのティーカクテル950円、ケーキはアトリエ・アルションから毎朝届く、特定原材料: 小麦、乳、卵、紅茶は「ジョルジュ・キャノン」の天然香料のブレンド。運営は株式会社かめいあんじゅ。食べログ: スイーツ WEST 百名店 2020・2022・2023・2026、月曜休み (祝日は営業)、36席、1986年11月2日オープン、クレープリー・アルションまで徒歩1分。口コミ(2026年9月〜10月): 和栗のモンブラン、苺のショートケーキ、Vin Fig のティーソーダ、土曜の昼に28分待ち、急な階段の先のアンティークな空間、アルションセット1,980円、ワンプレートランチ2,500円、紅茶はポットで、夜は海外の客が約8割、持ち帰りの紙袋50円。',
      confidence: 'medium', sources: [TB, SITE, F2, F1, CO, R + 'B536263637/', R + 'B536707741/', R + 'B536831407/', R + 'B536999459/', R + 'B537280561/', R + 'B537315897/', R + 'B537695713/', R + 'B538040229/', R + 'B538076546/', R + 'B142100959/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site has an English page; many overseas visitors (October 2026); choose cakes from the case or the salon menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-6-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 notices) and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目6番20号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [F2, F1],
    price_note: 'Prices from the official site (tax included; read October 2026). Dessert prices include tea.', last_checked: TODAY, items: [
      it('40thこだわりモンブラン', '', '40th-anniversary Mont Blanc plated dessert, with tea', '¥2,700', 'Desserts', 'ask', 'no', 'Official site; meringue, cream, chestnut cream.', 'mont_blanc_dessert'),
      it('ピュイダムール', '', 'Puits d\'amour plated dessert, with tea (autumn)', '¥2,500', 'Desserts', 'ask', 'no', 'Official site.', 'puits_damour'),
      it('塩キャラメルカステラ', '', 'Salted-caramel castella with vanilla ice cream, with tea', '¥1,800', 'Desserts', 'no', 'no', 'Official site.', 'castella_dessert'),
      it('”アルションブルー”のクレームブリュレ', '', 'Alcyon Blue crème brûlée', '¥1,250', 'Desserts', 'ask', 'no', 'Official site.', 'creme_brulee'),
      it('ワンプレートランチ', '', 'One-plate lunch with cake and drink (until 14:00)', '¥2,500', 'Lunch', 'no', 'no', 'Official site; ¥2,830 with a plated dessert.', 'one_plate_lunch'),
      it('アルションセットA', '', 'Alcyon set A: chicken cacciatore, bread, soup, cake, drink', '¥1,980', 'Lunch', 'no', 'no', 'Official site.', 'set_a'),
      it('アルションブルー', '', 'Alcyon Blue flavoured tea (pot)', '¥860', 'Tea', 'ask', 'ask', 'Official site.', 'alcyon_blue'),
    ] }, {
    cuisine: 'フランス風のサロン・ド・テ。ポットの紅茶とできたてのデセール、ケーキ、フレンチ風の軽食 (値段は公式サイト、税込み、2026年10月に確認)・紅茶付きのできたてデセール: ピュイダムール (キャラメリゼしたシブーストに林檎の赤ワインスパイスコンポート、秋) 2,500円、40thこだわりモンブラン (元祖のレシピ: 焼き色のついたメレンゲ、生クリーム、マロンクリーム) 2,700円、パリッとキャラメリゼした塩キャラメルカステラとバニラアイス1,800円・アルションブルーのクレームブリュレ1,250円、ラム酒でフランベするサヴァラン1,250円、紅茶のスコーン2個 (フランス産の苺ジャムと生クリーム付き) 900円・プティアフタヌーンティーセット2,980円 (ケーキ付き) または3,280円 (デセール付き)、季節のハロウィンアフタヌーンティー5,000円・5,300円・14:00までのワンプレートランチ (スープ、生ハムのシーザーサラダ、クロワッサンサンド、蛸とブロッコリーのマリネ、ペンネグラタン、チーズパイ、ケーキとドリンク) 2,500円・2,830円、アルションセットA 鶏のカチャトーラ1,980円・2,310円、B 牛ほほ肉の赤ワイン煮込みか手ごねハンバーグのデミグラスソース2,310円・2,640円・フレーバーティー860円、たとえば看板のアルションブルー (ラベンダー、苺、ルバーブ、矢車草の花びら)、アッサム、ダージリン、ウバ、キャンディ、ディンブラ、ニルギリ840円、ルイボスやハーブティーも・17時からのティーカクテル950円・1階のケーキ: モンブラン、苺のショートケーキ、ピスタチオマニア、鳴門金時のタルト680円、パンプキンバスクチーズケーキ600円、テイクアウトのアイスティー700円',
    neighborhood: '難波1-6-20、法善寺のそば、赤い扉。なんばウォークB-12またはB-14出口から徒歩3分 (地下鉄なんば駅、近鉄大阪難波駅)。クレープリー・アルションまで1分',
    gf_detail: '要確認。紅茶そのものは茶葉のブレンドだが、店の一覧のケーキはすべて特定原材料に小麦、乳、卵とあり、ランチも小麦が多い (クロワッサンサンド、ペンネグラタン、チーズパイ、セットのパン)。クレームブリュレについては説明がない。',
    vegan_detail: '要確認。ストレートやフレーバーの紅茶、ルイボス、ハーブティーは合うかもしれない (ポットで、ミルクティーは別)。ケーキはすべて乳と卵、ランチには肉、生ハム、チーズ、生クリーム。',
    notes: '[ティーサロン・難波、法善寺そばの40年続くフランスのサロン・ド・テ] 法善寺横丁から数歩の赤い扉の奥、1階はケーキと紅茶の店、急な階段を上がるとアンティークの家具のサロンで、紅茶はポットで出てくる。1986年の開業で、2026年11月2日に40周年。2026年の口コミでは関西のサロン・ド・テの草分けと書かれ、近くのクレープリー・アルションもここから生まれた姉妹店。注文を受けてから仕上げるデセール (カリッと焼いたメレンゲとマロンクリームの元祖のモンブラン、ピュイダムール、席で温かいキャラメルをかける塩キャラメルカステラ)、ショーケースのケーキ、スープとメインとデザートとドリンクのセットランチ (2,000円前後から) から選べる。紅茶は天然の香りのブレンドで、ラベンダー、苺、ルバーブのアルションブルーが一番人気。食べログ スイーツ WEST 百名店 2020・2022・2023・2026。週末は混み (2026年9月の土曜の昼に28分待ち)、2026年10月の口コミでは夜の客の約8割が海外からだったという。月曜休み。',
  });
}

// ================================================================ ダンケ 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27053278/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/dankeshinsaibashi/'; const MATOME = 'https://tabelog.com/matome/32625/';
  const H = day(['11:30', '23:30']);
  put({
    id: 'osaka_danke_shinsaibashi', name: 'ダンケ 心斎橋 (Danke Shinsaibashi)', category: 'OMNI',
    lat: 34.674633, lng: 135.501937, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plain coffee and tea are the safe ground; the food is cakes (chiffon, cheesecake with a cookie base, chocolate cake), toast and sandwiches, all wheat-based as described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The house blends are all based on the butter-blend beans (the owner, per a September 2026 review), so the coffee itself contains butter; iced tea, Indian leaf tea and avocado juice are the likelier options.',
    hours_raw: 'Daily 11:30–23:30 (last order 23:00) since 1 November 2021; closed only on New Year\'s Day (Tabelog; September 2026 review). No reservations; cash only (Tabelog; 2026 reviews). 35 seats: 6 at the counter, 29 at tables (Tabelog). The front counter area is non-smoking; a back area of tables allows electronic cigarettes only (September 2026 reviews). Second floor, up a spiral staircase (September 2026 review). Children welcome; takeaway available (Tabelog). Opened 1 November 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 1-2-22, 2F, in a side street — 1–2 min from Shinsaibashi Stn (south exit 10), 7 min from Nagahoribashi Stn',
    cuisine: 'Kissaten built around Butter Blend Coffee: beans infused with butter during roasting, paper-dripped one cup at a time, sold under the line "coffee that makes milk unnecessary" (2026 reviews) · Butter Blend Coffee ¥700 (September 2026); stronger versions Strong and Schwarz use two to three times the beans (owner, September 2026) · iced coffee, Wiener coffee, café au lait · iced tea ¥750; tea from leaves imported directly from India (October 2026) · chiffon cake with cream ¥950 (September 2026); cheesecake and coffee set ¥1,400 (September–October 2026); a rich cheesecake from the Ashiya cake shop feu; chocolate cake · pork shabu-shabu sandwich; fig and strained-yogurt toast (September 2026) · avocado juice · feu cookies and coffee beans for sale',
    website: IG, gmaps: gm('ダンケ 心斎橋'), menu_url: null,
    notes: "[Kissaten · Shinsaibashi, late-night butter-blend coffee upstairs] Up a spiral stair to a dim, wood-filled second floor a minute from Shinsaibashi station, a retro coffee house open until 23:30 every day but New Year's Day. The draw is Butter Blend Coffee: the beans take on butter as they roast, then each cup is paper-dripped to order, and the sign promises coffee that needs no milk. Diners find it smooth and mellow rather than buttery (one noticed a faint milky finish); ask for Strong or Schwarz if you want more beans in the cup. The counter is a single slab of Yoshino cedar said to be 200 years old, and the shelves hold Wedgwood and Okura cups; a September 2026 diner got to choose the cup. Pair it with a fluffy chiffon cake, a cheesecake from feu in Ashiya, or a sandwich. One of Tabelog's 100 kissaten (2022, 2026). The back tables allow e-cigarettes. Cash only, no bookings.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "the calm and kind owner" behind the counter, September 2026 review)'], origin: null,
      background: 'Opened 1 November 2010 (Tabelog). A September 2026 reviewer calls Danke "a popular café established in 1977"; Tabelog\'s opening date for this shop is 2010, and the earlier date is not explained. Per a September 2026 diner, the owner explained that the house blends differ only in the amount of beans, all based on the Butter Blend. Selected for Tabelog Kissaten "Tabelog 100" in 2022 and 2026. A Tabelog matome article (July 2026) describes the butter-blend method and a retro room behind a heavy wooden door.',
      philosophy: null, specialty: 'Butter Blend Coffee, paper-dripped per cup; chiffon cake.',
      anecdotes: [
        { text: '"The counter features a single slab of Yoshino cedar that is 200 years old, and the shelves are adorned with Wedgwood and Okura porcelain cups." — October 2026.', source: R + 'B86706504/' },
        { text: '"When I asked the calm and kind owner about the differences, [the owner] explained that the variations were in the amount of beans used—two to three times more, but all were based on the Butter Blend." — September 2026.', source: R + 'B535710024/' },
        { text: '"I visited around 22:30 on a Tuesday. There were about 10 customers inside." — September 2026.', source: R + 'B535624361/' },
      ],
      japanese_sources_summary: '食べログ: ダンケ 心斎橋、喫茶店・カフェ・洋菓子、心斎橋筋1-2-22 2F、11:30〜23:30 (L.O.23:00、2021年11月1日から)、休みは元日のみ、予約不可、カード・電子マネー・QR不可、35席 (カウンター6、テーブル29)、カウンター席は禁煙、子ども可、テイクアウト可、2010年11月1日オープン、喫茶店 百名店 2022・2026。食べログまとめ (2026年7月): 心斎橋駅から徒歩2分の鰻谷東通沿いのビル2階、重厚な木製扉、焙煎時にバターを豆に染み込ませる独特のブレンド法のバターブレンドコーヒー、注文を受けてから丁寧に淹れる、ケーキセットが人気、支払いは現金のみ。口コミ(2026年9月〜10月): バターブレンドコーヒー700円、Strong と Schwarz は豆が2〜3倍、ペーパードリップで1杯ずつ、樹齢200年の Yoshino の杉の一枚板のカウンター、Wedgwood と Okura のカップ、好きなカップを選べる、シフォンケーキ950円、チーズケーキのセット1,400円、Ashiya の feu のチーズケーキ、豚しゃぶのサンドイッチ、いちじくと水切りヨーグルトのトースト、奥は電子タバコの席、夜遅くまで営業、海外の客も多い。',
      confidence: 'medium', sources: [TB, MATOME, R + 'B536233564/', R + 'B536564735/', R + 'B536686261/', R + 'B536788985/', R + 'B536847714/', R + 'B537054915/', R + 'B537357232/', R + 'B537475331/', R + 'B538053814/', R + 'B86706504/', R + 'B536250840/', R + 'B535624361/', R + 'B535710024/', R + 'B535753591/', R + 'B536032266/', R + 'B536209208/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; many overseas visitors (October 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-2-22 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目2番22号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536250840/', R + 'B537475331/', R + 'B535753591/'],
    price_note: 'Prices from September–October 2026 reviews (tax included); no menu posted online.', last_checked: TODAY, items: [
      it('バターブレンドコーヒー', '', 'Butter Blend Coffee', '¥700', 'Coffee', 'ask', 'no', 'September 2026; beans infused with butter in roasting.', 'butter_blend'),
      it('', '', 'Iced tea', '¥750', 'Drinks', 'ask', 'ask', 'September 2026.', 'iced_tea'),
      it('', '', 'Chiffon cake with cream', '¥950', 'Cakes', 'no', 'no', 'September 2026.', 'chiffon'),
      it('', '', 'Cheesecake and Butter Blend Coffee set', '¥1,400', 'Cakes', 'no', 'no', 'September–October 2026; cookie base.', 'cheesecake_set'),
      it('', '', 'Pork shabu-shabu sandwich', '', 'Food', 'no', 'no', 'September 2026.', 'pork_sandwich'),
    ] }, {
    cuisine: 'バターブレンドコーヒーの喫茶店。焙煎のときに豆にバターを染み込ませ、ペーパードリップで1杯ずつ。看板は「ミルクのいらないコーヒー」(2026年の口コミ)・バターブレンドコーヒー700円 (2026年9月)。Strong と Schwarz は豆が2〜3倍 (店主、2026年9月)・アイスコーヒー、ウインナーコーヒー、カフェオレ・アイスティー750円、India から直輸入の茶葉の紅茶 (2026年10月)・生クリームを添えたシフォンケーキ950円 (2026年9月)、チーズケーキとコーヒーのセット1,400円 (2026年9〜10月)、Ashiya のケーキ店 feu の濃厚なチーズケーキ、チョコレートケーキ・豚しゃぶのサンドイッチ、いちじくと水切りヨーグルトのトースト (2026年9月)・アボカドジュース・feu のクッキーとコーヒー豆の販売',
    neighborhood: '心斎橋筋1-2-22 2F、路地のビル。心斎橋駅南10番出口から徒歩1〜2分、長堀橋駅から徒歩7分',
    gf_detail: '要確認。安心なのはコーヒーと紅茶そのもの。食べ物はケーキ (シフォン、クッキー生地のチーズケーキ、チョコレートケーキ)、トースト、サンドイッチで、どれも小麦を使う。',
    vegan_detail: '要確認。ここのブレンドはどれもバターブレンドの豆が基本 (2026年9月の口コミで店主の説明) なので、コーヒーそのものにバターが入る。アイスティー、India の紅茶、アボカドジュースのほうが合いそう。',
    notes: '[喫茶店・心斎橋、夜遅くまで飲めるバターブレンドコーヒーの2階の店] 心斎橋駅から1分、らせん階段を上がった2階の、照明を落とした木の内装のレトロな喫茶店。元日以外は毎日23:30まで開いている。名物はバターブレンドコーヒーで、焙煎のときに豆にバターを染み込ませ、注文ごとにペーパードリップで1杯ずつ入れる。看板には「ミルクのいらないコーヒー」。バターの味は強くなく、なめらかでまろやかという声が多く、あとにほのかにミルクのような余韻を感じたという人も。豆を多くしたいなら Strong か Schwarz を。カウンターは樹齢200年という Yoshino の杉の一枚板で、棚には Wedgwood や Okura のカップが並び、2026年9月にはカップを選べたという人も。ふわふわのシフォンケーキ、Ashiya の feu のチーズケーキ、サンドイッチと一緒に。食べログ 喫茶店 百名店 2022・2026。奥のテーブルは電子タバコ可。現金のみ、予約不可。',
  });
}

// ================================================================ 焼鳥 サイヒ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126994/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/en/yakitori-saihi';
  const H = day(['19:00', '21:30']);
  put({
    id: 'osaka_yakitori_saihi_minamisenba', name: '焼鳥 サイヒ (Yakitori Saihi)', category: 'OMNI',
    lat: 34.67736, lng: 135.498459, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Many skewers are salted, but some come with tare (a heart with tare, July 2026), the chawanmushi and seasoned rice are made with dashi and seasoning, and the set course leaves little room to choose; ask what can be done with salt only.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken omakase course, with dashi in the chawanmushi; the vegetable skewers (tomato, shiitake, young corn) come within it.',
    hours_raw: 'Mon–Sat, one seating at 19:00 (Tabelog lists 19:00–21:30); the course runs about 2.5–3 hours (TableCheck; September 2026 reviews); closed Sunday (Tabelog). Reservation only, course only, through TableCheck (Tabelog; July and September 2026 reviews); a September 2026 diner booked about a month ahead. 7 counter seats; whole-shop hire for six or more (September 2026 review). Smart-casual dress code (Tabelog). English menu available (Tabelog). Cards (VISA, Master, JCB); no e-money or QR (Tabelog). Non-smoking. Opened 13 December 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-10-22, at the back of the Senba back alley (a renovated old house), easy to walk past — 8 min from Shinsaibashi Stn',
    cuisine: 'One omakase yakitori course a night, changing monthly, with extra skewers after (TableCheck: omakase ¥12,000 tax included, read October 2026; diners report ¥10,000–19,999 with drinks) · three kinds of chicken: Satsuma Gokkei (さつま極鶏) 大摩桜, Ehime chicken, Yamato chicken, plus Himekko jidori (2026 reviews) · examples (May–September 2026): thigh tataki seared over straw and charcoal; breast with vinegared vegetables; skin-on neck (皮付きせせり); negima; chawanmushi of a double chicken soup; liver pâté; pickles and grated daikon to reset the palate; bonjiri, gizzard, heart, wing wrapped round neck meat; chicken tender with plum; tsukune with salt; vegetable skewers such as tomato, shiitake, zucchini and young corn; breast with Shine Muscat and white miso · extra skewers: furisode, cartilage with mayonnaise, wings · to finish, clay-pot rice (eel in July, fresh ginger in September), chicken soup, and a dessert such as pudding, white peach or sweet-potato vanilla ice cream · sake and wine (no champagne or sparkling, per a July 2026 diner), shochu',
    website: TC, gmaps: gm('焼鳥 サイヒ 南船場'), menu_url: null,
    notes: "[Yakitori · Minami-Senba, a one-owner omakase counter at the end of an alley] Seven seats at the back of the Senba back alley, in a renovated old house you may walk past more than once, where one woman owner grills, cooks and serves alone, which diners note is rare for yakitori. One seating a night at 19:00, and a course of about 20 plates that runs two and a half to three hours: straw-and-charcoal thigh tataki, skin-on neck, liver pâté, a chawanmushi of double chicken soup, then skewers of three kinds of chicken and seasonal vegetables, pickles to reset, extra skewers if you still have room, and clay-pot rice to finish (eel in July, ginger in September; one diner ate four bowls). The course changes monthly. Diners call the grilling precise and the flavours gentle; one regular says it gets better every visit. A September 2026 diner notes the name is the character 花 (flower) taken apart. On Tabelog's Yakitori WEST 100 list in 2024 and 2025. Book about a month ahead on TableCheck; smart casual; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner and grill master (unnamed; a woman who runs the shop alone, per September 2026 reviews)'], origin: null,
      background: 'Opened 13 December 2021 (Tabelog). September 2026 reviews: "The female owner manages everything by herself"; "The owner runs the restaurant solo and provides attentive service with great care." A July 2026 diner: "The owner knows the size, grilling technique, and salt level of every yakitori." Selected for Tabelog Yakitori WEST "Tabelog 100" in 2024 and 2025.',
      philosophy: null, specialty: 'Straw-and-charcoal chicken tataki; skin-on neck; clay-pot rice.',
      anecdotes: [
        { text: '"Not only was the yakitori delicious, but the clay pot rice to finish off the meal was also amazing! Before I knew it, I had eaten four servings!" — May 2026, first visit.', source: R + 'B528709638/' },
        { text: '"Every time I visit, the food gets better." — September 2026, a third visit.', source: R + 'B470441061/' },
        { text: '"The character for \'flower\' is broken down into \'Saihi.\'" — September 2026.', source: R + 'B536621996/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥 サイヒ、焼き鳥、南船場4-10-22、心斎橋駅から徒歩8分、月〜土 19:00〜21:30 の一斉スタート、日曜休み、完全予約制のコースのみ、カウンター7席、貸切可、禁煙、英語メニュー、ドレスコードはスマートカジュアル、カード可 (VISA、Master、JCB)、2021年12月13日オープン、焼き鳥 WEST 百名店 2024・2025。TableCheck: おまかせコース12,000円 (税込)、料理は2時間半から3時間。口コミ(2026年5月〜9月): 女性の店主がひとりで切り盛り、船場の裏路地の奥の古民家、さつま極鶏 大摩桜の皮付きせせり、藁と炭で焼くもものたたき、地鶏と鰹出汁の茶碗蒸し、レバーパテ、つくねは塩、ささみに梅、追加の串 (ふりそで、軟骨とマヨネーズ)、締めの土鍋ご飯 (7月は鰻、9月は新生姜)、コースは毎月変わる、予約は1か月ほど先、6名以上で貸切、お土産も。',
      confidence: 'medium', sources: [TB, TC, R + 'B470441061/', R + 'B528709638/', R + 'B530576183/', R + 'B530993806/', R + 'B531078623/', R + 'B532774555/', R + 'B535511010/', R + 'B535537972/', R + 'B535768998/', R + 'B536621996/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); one set course booked online through TableCheck; the owner serves alone, so the pace is slow (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-10-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and TableCheck booking page; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.677404, 135.498459); same alley and address as だし処 船場山本 (osaka_dashidokoro_semba_yamamoto, address_ja "南船場4-10-22", pinned 4 m from this Tabelog point) and 鮨とよたか (osaka_sushi_toyotaka_minamisenba, address_ja "南船場4-10-22 船場裏路地 1F"), so this pin is offset ~5 m south to keep them apart; GSI 大阪府大阪市中央区南船場四丁目10番22号 (go) 30m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TC, R + 'B532774555/', R + 'B535511010/'],
    price_note: 'Course price from TableCheck (tax included; read October 2026); dishes from July–September 2026 reviews; the course changes monthly.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase yakitori course', '¥12,000', 'Course', 'ask', 'no', 'TableCheck.', 'omakase'),
      it('', '', 'Thigh tataki seared over straw and charcoal (in course)', '', 'Course', 'ask', 'no', 'July–September 2026.', 'thigh_tataki'),
      it('皮付きせせり', '', 'Skin-on neck skewer (in course)', '', 'Skewers', 'ask', 'no', 'July–September 2026.', 'seseri'),
      it('', '', 'Tsukune with salt (in course)', '', 'Skewers', 'ask', 'no', 'July–September 2026.', 'tsukune'),
      it('', '', 'Extra skewer: cartilage with mayonnaise', '', 'Skewers', 'ask', 'no', 'July 2026.', 'cartilage'),
      it('', '', 'Clay-pot rice (eel in July, ginger in September)', '', 'Course', 'ask', 'no', 'July–September 2026.', 'donabe_rice'),
    ] }, {
    cuisine: '一晩ひとつのおまかせの焼鳥コースで毎月変わり、あとから追加の串も (TableCheck: おまかせコース12,000円 税込、2026年10月に確認。口コミでは飲み物込みで10,000〜19,999円)・3種類の鶏: さつま極鶏 大摩桜、Ehime の鶏、Yamato の鶏、ほかに Himekko の地鶏も (2026年の口コミ)・例 (2026年5〜9月): 藁と炭で焼くもものたたき、むね肉と野菜の酢の物、皮付きせせり、ねぎま、鶏のダブルスープの茶碗蒸し、レバーパテ、口直しの漬物と大根おろし、ぼんじり、砂肝、ハツ、首肉を巻いた手羽、ささみに梅、塩のつくね、トマト、椎茸、ズッキーニ、ヤングコーンなどの野菜の串、むね肉とシャインマスカットの白味噌・追加の串: ふりそで、軟骨とマヨネーズ、手羽・締めは土鍋ご飯 (7月は鰻、9月は新生姜)、鶏のスープ、プリン、白桃、さつまいものバニラアイスなどのデザート・日本酒とワイン (2026年7月の口コミではシャンパンやスパークリングはなし)、焼酎',
    neighborhood: '南船場4-10-22、船場の裏路地の奥の古民家、通り過ぎやすい。心斎橋駅から徒歩8分',
    gf_detail: '予約時に要確認。グルテンの情報なし。塩の串が多いが、タレの串もあり (2026年7月のハツ)、茶碗蒸しや炊き込みご飯は出汁と調味料を使い、決まったコースなので選べる幅は小さい。塩だけでできるものを確認して。',
    vegan_detail: 'ヴィーガンではありません。鶏のおまかせコースで、茶碗蒸しには出汁。野菜の串 (トマト、椎茸、ヤングコーン) もコースの中。',
    notes: '[焼鳥・南船場、路地の奥で店主がひとりで営むおまかせのカウンター] 船場の裏路地の奥、何度か通り過ぎてしまいそうな古民家に7席のカウンター。女性の店主がひとりで焼き、料理し、もてなす焼鳥の店は珍しいという声が多い。19時の一斉スタートで、およそ20皿のコースは2時間半から3時間。藁と炭で焼くもものたたき、皮付きせせり、レバーパテ、鶏のダブルスープの茶碗蒸し、3種類の鶏と季節の野菜の串、口直しの漬物、余裕があれば追加の串、締めの土鍋ご飯 (7月は鰻、9月は生姜。4杯食べた人も)。コースは毎月変わる。焼きが的確で味はやさしいという声が多く、来るたびにおいしくなると話す常連も。2026年9月の口コミによれば、店名は「花」という字を分解したもの。食べログ 焼き鳥 WEST 百名店 2024・2025。予約は TableCheck で1か月ほど先に。スマートカジュアル、日曜休み。',
  });
}

save();
