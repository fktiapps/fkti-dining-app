// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 12.
//   + 感情 Kanjou (duck roasted on a tamahagane plate and handmade soba; omakase only, Tabelog Award Bronze 2025 and 2026)
//   + 利尻昆布ラーメン くろおび Rishiri Kombu Ramen Kuroobi (additive-free Rishiri-kombu shio and shoyu ramen; moved here from Toranomon)
//   + スチーム Dim sum&Wine Steam (seasonal dim sum with sommelier-chosen wine, in a basement near Midtown)
//   + とり澤 六本木 Tori Sawa Roppongi (Daisen-chicken yakitori omakase with a stop system; Tabelog yakitori 100, 2025)
//   Chain check: none is in data/tokyo, osaka or kyoto by name, Tabelog id or address. Kuroobi: reviewers say the Toranomon
//   main shop merged into this Roppongi one (July 2025 visit, October 2026); one shop. Tori Sawa: reviewers mention a
//   Nakameguro shop and call this the second location; not expanding fast. Steam: one listing, no sister shop found.
//   Pins: Kanjou (3F) and Kuroobi (1F) share 六本木144ビル and Tabelog points 0 m apart, so Kuroobi is offset ~8 m
//   south-west (away from Goku, tokyo_wagyu_sukiyaki_goku_roppongi, 4-12-4). Steam (4-12-2) is 9 m from Goku in another
//   building. Tabelog URLs copied from each listing.txt line 1. No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 感情
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13267945/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'tokyo_kanjou_roppongi', name: '感情 (Kanjou)', category: 'OMNI',
    lat: 35.664488, lng: 139.731632, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an omakase-only course that has included tempura, fried duck in a soba crepe and duck hayashi (September 2026). The shop asks guests who cannot eat soba and duck, or who would need more than three items changed, not to book, and accepts no responsibility for allergic reactions (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a course built around duck, with duck broth and seafood.',
    hours_raw: 'Daily, two seatings: 17:00–19:30 and 20:00–22:30; doors open 10 minutes before (Tabelog). Reservation only, online through OMAKASE (Tabelog); the phone line is listed as closed. Hard to book: 2026 diners got in through cancellation notices. 10% service charge. 7 counter seats; whole-shop hire possible. Non-smoking. Cards only (VISA, Master, JCB, AMEX, Diners, UnionPay); no cash, e-money or QR. English-speaking staff. No strong perfume, cologne or fabric softener: a guest whose scent affects others may be asked to leave mid-course, charged as a same-day cancellation. No sign outside: look for "roppongi 144 building" over the entrance and go to the 3rd floor. Opened 22 November 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-12-5, 六本木144ビル 3F — 2 min from Roppongi Stn exit 7 (Oedo / Hibiya lines)',
    cuisine: 'An omakase course of seasonal dishes, soba handmade every morning, and duck from about 20 suppliers grilled on a tamahagane iron plate made by a swordsmith (Tabelog shop text) · the course runs soba → Japanese and Western dishes → duck → soba → a closing dish (September 2026) · in 2026: chilled sesame soba, chilled soba with matsutake; fried duck tenderloin in a soba crepe; duck yukke; duck consommé; Funka Bay hairy crab risotto; seared bonito with clam butter sauce; four styles of roast duck plus heart, thigh, tenderloin and tsukune; Shimabara long-eggplant tempura; 100% soba cold and a flat wood-ear soba warm; airy soba-yu; duck hayashi or a curry to finish; Taiwanese oolong-tea ice cream · small rice bowls with fish, meat and figs (October 2026) · wine from new to old vintages, sake, whisky and shochu; drink pairings · average ¥30,000–39,999 (Tabelog)',
    website: null, gmaps: gm('感情 六本木4-12-5'), menu_url: null,
    notes: "[Duck & soba · Roppongi, award-winning duck-and-soba omakase at a 7-seat counter] Behind an unsigned door on the third floor of a building by Roppongi crossing, seven counter seats and one omakase: soba made by hand each morning, then a run of Japanese and Western dishes, then duck from some twenty suppliers grilled on a tamahagane plate forged by a swordsmith — served as several different roasts plus heart, thigh, tenderloin and tsukune — and soba again to close. Diners in 2026 were struck that the duck tasted almost like beef, praised the airy soba-yu and the duck hayashi, and found the French touches in the dishes a highlight. Tabelog Award Bronze in 2025 and 2026. Very hard to book; reservations only online, cards only, 10% service, and no strong scents.",
    chef_bio: { chef_name: 'Seina Ogata (as written in the Tabelog shop text)', roles: ['Head chef from April 2026 (Tabelog shop text)'], origin: 'Kumamoto Prefecture',
      background: 'Per the Tabelog shop text: born in Kumamoto Prefecture in 1991; after culinary school, trained at restaurants including Madame Toki and Margot et Bouchère and others in Tokyo; head chef of Kanjou from April 2026. A September 2026 regular noticed the staff had all changed and felt the chef\'s French background in the dishes; another that month noted the head chef had changed. The interior is by Kyoto architect Tohru Kijima (Tabelog shop text).',
      philosophy: 'No flashy dishes or service — a comforting place (Tabelog shop text).', specialty: 'Duck grilled on a tamahagane plate; handmade 100% soba.',
      anecdotes: [
        { text: '"The duck meat didn’t taste like the duck I know; it was cooked in a way that made me think it was beef instead." — October 2026, first visit.', source: R + 'B537424830/' },
        { text: '"I added soba water to the remaining soba broth, and while many places serve a creamy soba yu, this one was different. It was incredibly airy!" — September 2026.', source: R + 'B463384731/' },
        { text: '"Additionally, the good rapport among the staff was evident, creating a pleasant atmosphere in the restaurant." — October 2026, with drink pairing.', source: R + 'B537302441/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 感情、港区六本木4-12-5 六本木144ビル3F、六本木駅7番出口から徒歩2分、毎日17:00〜19:30と20:00〜22:30の2部制、予約のみ (OMAKASE でのネット予約)、サービス料10%、7席 (カウンター)、禁煙、カードのみ (現金不可)、英語を話すスタッフ、香水や柔軟剤など強い香りは控えるよう求める、外に看板なし、2021年11月22日オープン、The Tabelog Award 2025・2026 Bronze、日本料理 TOKYO 百名店 2023・2025。店の紹介: 毎朝手打ちする蕎麦と、約20の仕入れ先の鴨を刀匠の玉鋼の鉄板で焼く「おまかせコース」、ワインに力を入れる。料理長 Seina Ogata (1991年 Kumamoto 生まれ、Madame Toki や Margot et Bouchère などで修業、2026年4月から料理長)。口コミ(2026年8月〜10月): 蕎麦、和洋の料理、鴨、蕎麦、締めの流れ、牛肉と思うほどの鴨、ふわふわの蕎麦湯、鴨のハヤシ、ペアリング、キャンセル待ちで予約。',
      confidence: 'medium', sources: [TB, R + 'B463384731/', R + 'B535664395/', R + 'B536264792/', R + 'B536312441/', R + 'B536333428/', R + 'B536612645/', R + 'B537302441/', R + 'B537424830/', R + 'B538208061/', R + 'B538477694/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (Tabelog); omakase only, booked online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-12-5 六本木144ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; chef from April 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664488, 139.731632); GSI 東京都港区六本木四丁目12番 (lot) 12m; Kuroobi (tokyo_rishiri_kombu_ramen_kuroobi_roppongi) is in the same building and is the one offset; Goku (4-12-4) is 15 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B463384731/'],
    price_note: 'No course price is published; Tabelog gives an average of ¥30,000–39,999 plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Omakase course: soba, seasonal dishes, duck grilled on a tamahagane plate', '', 'Course', 'no', 'no', 'Tabelog shop text; the only menu.', 'omakase'),
    ] }, {
    cuisine: '季節の料理、毎朝手打ちする蕎麦、刀匠の玉鋼の鉄板で焼く約20の仕入れ先の鴨のおまかせコース (食べログの店の紹介)・蕎麦→和洋の料理→鴨→蕎麦→締めの流れ (2026年9月)・2026年の料理: 冷たい胡麻の蕎麦、松茸の冷たい蕎麦、鴨ささみのフライの蕎麦クレープ巻き、鴨のユッケ、鴨のコンソメ、Funka Bay の毛蟹のリゾット、鰹のたたきと蛤のバターソース、4種の鴨のロースト、ハツ、もも、ささみ、つくね、Shimabara の長茄子の天ぷら、十割蕎麦の冷たいものと平打ちのきくらげの温かい蕎麦、ふわふわの蕎麦湯、締めの鴨のハヤシやカレー、台湾烏龍茶のアイス・魚、肉、無花果をのせた小さなご飯 (2026年10月)・新しいヴィンテージから古いものまでのワイン、日本酒、ウイスキー、焼酎、ペアリング・平均30,000〜39,999円 (食べログ)',
    neighborhood: '六本木4-12-5 六本木144ビル3F。六本木駅7番出口 (大江戸線・日比谷線) から徒歩2分',
    gf_detail: 'グルテンフリー不可。おまかせのみで、天ぷら、蕎麦クレープで巻いた鴨のフライ、鴨のハヤシも出た (2026年9月)。蕎麦と鴨を食べられない人や、変更が4品以上になる人は予約を控えるよう求め、アレルギー反応の責任は負わないとしている (食べログ)。',
    vegan_detail: 'ヴィーガン不可。鴨が中心のコースで、鴨の出汁や魚介も使う。',
    notes: '[鴨と蕎麦・六本木、7席のカウンターで受賞の鴨と蕎麦のおまかせ] 六本木の交差点近く、ビルの3階の看板のない扉の奥に、カウンター7席とおまかせ一本。毎朝手打ちする蕎麦に始まり、和洋の料理が続き、約20の仕入れ先の鴨を刀匠の玉鋼の鉄板で焼いて、いくつもの焼き方のロースト、ハツ、もも、ささみ、つくねで出し、最後にまた蕎麦。2026年の客は牛肉かと思うほどの鴨に驚き、ふわふわの蕎麦湯と鴨のハヤシを絶賛し、料理のフレンチの技を楽しんだ。The Tabelog Award 2025・2026 Bronze。予約はとても難しく、ネット予約のみ。カードのみ、サービス料10%、強い香りは厳禁。',
  });
}

// ================================================================ 利尻昆布ラーメン くろおび
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13311548/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '23:00']); const S = day(['11:00', '21:00']); const U = day(['11:00', '17:00']);
  put({
    id: 'tokyo_rishiri_kombu_ramen_kuroobi_roppongi', name: '利尻昆布ラーメン くろおび (Rishiri Kombu Ramen Kuroobi)', category: 'OMNI',
    lat: 35.664436, lng: 139.731571, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles and gyoza; shoyu ramen on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the kombu broth is balanced with animal-based ingredients (October 2026), and bowls come with pork chashu and shrimp wontons.',
    hours_raw: 'Mon–Fri 11:00–23:00 (last order 22:30); Sat and holidays 11:00–21:00 (last order 20:30); Sun 11:00–17:00 (last order 16:30); on the third Thursday of each month closed 15:00–17:00 (Tabelog). Ticket machine; some items, such as the kombu-water tsukemen, are ordered at the table and paid in cash (July 2026). 14 seats at the counter. Non-smoking. Cash only: no cards, e-money or QR (Tabelog). Allergy information available. Children welcome, with kids\' chairs; a May 2026 diner reports free meals for preschool children about twice a month. Takeout. Opened here 1 July 2025 (Tabelog), after the Toranomon main shop merged into the Roppongi shop (July 2025 visit).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S, 6: U }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-12-5, 六本木144ビル 1F — 2 min from Roppongi Stn exit 7 (Oedo / Hibiya lines)',
    cuisine: 'Ramen on a broth of additive-free Rishiri kombu (2026 reviews) · Kuroobi Ramen, shio ¥1,300 (October 2026), with belly and loin chashu, shrimp wontons, seasoned egg, menma, green onion and red chili threads; also as a shoyu bowl with a clear amber broth · shrimp wonton ramen; chashu ramen; kombu-water tsukemen with shiso; a winter-limited spicy bowl, "Kagutsuchi"; chilled ramen · shiso gyoza and a value set with gyoza · Ubushuna tea, also sold in the shop; beer and sake',
    website: null, gmaps: gm('利尻昆布ラーメン くろおび 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Roppongi, gentle Rishiri-kombu shio ramen, cash only] A bright, clean 14-seat counter near Midtown that moved here when its Toranomon main shop closed for rebuilding. The broth is built on additive-free Rishiri kombu: the signature Kuroobi Ramen (¥1,300 in shio) comes clear and gentle over thin straight noodles, with two kinds of chashu, shrimp wontons and a seasoned egg; the shoyu version is a darker amber. There is also a kombu-water tsukemen and a fiery winter special. Reviewers in 2026 drank every drop, though a couple wished the kombu came through more strongly; the hinoki chopsticks and house blend tea drew comment too. Cash only; open all day, shorter hours at weekends.",
    chef_bio: { chef_name: null, roles: [], origin: 'Formerly at Toranomon (main shop) and Roppongi; merged into this shop (July 2025 visit)',
      background: 'Opened here 1 July 2025 (Tabelog). A diner who had visited the old shops says the Toranomon main shop was rebuilt and merged into the Roppongi location (July 2025 visit). An October 2026 reviewer says the shop is run by a food critic, not named. Another heard that the shop wanted Rishiri kombu despite its cost (October 2026). No one is named in the sources read.',
      philosophy: null, specialty: 'Additive-free Rishiri-kombu ramen.',
      anecdotes: [
        { text: '"Instead of the usual tonkotsu, miso, or Jiro-style ramen, … maximizing the flavor of Rishiri kombu, resulting in a light yet umami-rich broth." — October 2026, shrimp wonton shio ramen.', source: R + 'B509819699/' },
        { text: '"The soup is clear and flavorful, showcasing the umami of Rishiri kombu, with a gentle taste that is delicious." — October 2026, Kuroobi Ramen (shio) ¥1,300.', source: R + 'B536841610/' },
        { text: '"While I could sense the refined flavor of the kombu, I felt that it lacked a bit of power, possibly due to the season." — October 2026, kombu-water tsukemen.', source: R + 'B537584936/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 利尻昆布ラーメン くろおび、港区六本木4-12-5 六本木144ビル1F、六本木駅7番出口から徒歩2分、月〜金11:00〜23:00 (L.O.22:30)、土祝11:00〜21:00、日11:00〜17:00、毎月第3木曜は15:00〜17:00休み、14席 (カウンター)、禁煙、カード・電子マネー・QR不可、アレルギー表示あり、子ども可、テイクアウト、2025年7月1日オープン。口コミ(2025年7月〜2026年10月): Toranomon の本店が建て替えで六本木店と統合、無添加の利尻昆布のスープ、くろおびラーメン (塩) 1,300円、バラとロースのチャーシュー、海老ワンタン、味玉、細いストレート麺、醤油の澄んだ琥珀色のスープ、昆布水つけ麺、冬限定の辛い「Kagutsuchi」、しその餃子、Ubushuna のお茶、檜の箸、未就学児は月2回ほど無料、昆布の味がもっと強ければという声。',
      confidence: 'medium', sources: [TB, R + 'B509819699/', R + 'B531386430/', R + 'B536605601/', R + 'B536841610/', R + 'B537242527/', R + 'B537307104/', R + 'B537492517/', R + 'B537584936/', R + 'B537986002/', R + 'B538309133/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: ['other'], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: null, notes: '"The noodles are thin and straight, with a smooth texture" (October 2026); the tsukemen noodles are long and smooth (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Kuroobi Ramen, shio — ¥1,300 in October 2026, with belly and loin chashu, shrimp wontons, seasoned egg, menma, green onion and red chili threads.',
      chashu: 'Two kinds, belly and loin: "The belly is juicy and tender, while the loin has a firm, meaty texture" (October 2026); thick chashu on the chashu ramen (October 2026).',
      notable_toppings: ['shrimp wonton', 'seasoned egg', 'menma', 'shredded green onion', 'red chili threads', 'shiso'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Kombu broth with animal-based ingredients; pork chashu, shrimp wontons.' },
      pantheon: 'A clear, additive-free Rishiri-kombu broth, balanced with animal-based stock, over thin straight noodles with two chashu and shrimp wontons.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B509819699/', '"a light yet umami-rich broth" (October 2026); "it had a very gentle flavor" (' + R + 'B537242527/, October 2026).'],
        oiliness: [R + 'B536605601/', 'Shoyu bowl: "The oil floating on the surface added just the right amount of richness… It wasn’t overly greasy" (October 2026).'],
        clarity: [R + 'B536841610/', '"The soup is clear and flavorful" (October 2026); "The broth was beautifully clear" (' + R + 'B537242527/, October 2026); "The clear amber broth" of the shoyu bowl (' + R + 'B536605601/).'],
        tare_strength: [R + 'B538309133/', '"The broth had a nice salty taste" (October 2026); shoyu: "the savory aroma of soy sauce came through without being too sharp" (' + R + 'B536605601/).'],
        noodle_firmness: [R + 'B537584936/', '"Personally, I found the noodles to be quite prominent" (October 2026); "a smooth texture… a generous portion" (' + R + 'B536841610/).'],
        aroma_punch: [R + 'B537242527/', '"It was a bit disappointing that the kombu flavor didn’t stand out more" (October 2026); "the refined flavor of the kombu… lacked a bit of power" (' + R + 'B537584936/).'],
      },
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine with a photo menu; some items ordered at the table, cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-12-5 六本木144ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664486, 139.731631), 0 m from Kanjou (tokyo_kanjou_roppongi, same building, 3F), so offset ~8 m south-west, away from Goku (4-12-4); GSI 東京都港区六本木四丁目12番 (lot) 12m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536841610/', R + 'B531386430/'],
    price_note: 'Only one price appears in the sources read (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Kuroobi Ramen, shio (belly and loin chashu, shrimp wontons, egg)', '¥1,300', 'Ramen', 'no', 'no', 'October 2026 review; also in shoyu.', 'kuroobi_ramen'),
      it('', '', 'Kombu-water tsukemen', '', 'Ramen', 'no', 'no', 'Ordered at the table (July and September 2026).', 'kombu_tsukemen'),
      it('', '', 'Shiso gyoza', '', 'Sides', 'no', 'no', 'July 2025 visit.', 'shiso_gyoza'),
    ] }, {
    cuisine: '無添加の利尻昆布のスープのラーメン (2026年の口コミ)・くろおびラーメン 塩1,300円 (2026年10月)。バラとロースのチャーシュー、海老ワンタン、味玉、メンマ、ねぎ、糸唐辛子。醤油は澄んだ琥珀色のスープ・海老ワンタンラーメン、チャーシューラーメン、しそを添えた昆布水つけ麺、冬限定の辛い「Kagutsuchi」、冷やしラーメン・しその餃子、餃子付きのお得なセット・店でも買える Ubushuna のお茶、ビールと日本酒',
    neighborhood: '六本木4-12-5 六本木144ビル1F。六本木駅7番出口 (大江戸線・日比谷線) から徒歩2分',
    gf_detail: 'グルテンフリー不可。小麦の麺と餃子。醤油ラーメンもある。',
    vegan_detail: 'ヴィーガン不可。昆布のスープに動物系の材料を合わせ (2026年10月)、豚のチャーシューや海老ワンタンものる。',
    notes: '[ラーメン・六本木、やさしい利尻昆布の塩ラーメン、現金のみ] Midtown のそば、明るく清潔なカウンター14席。Toranomon の本店が建て替えでこちらに移ってきた。スープは無添加の利尻昆布が土台で、看板のくろおびラーメン (塩1,300円) は澄んだやさしいスープに細いストレート麺、2種のチャーシュー、海老ワンタン、味玉。醤油は濃い琥珀色。昆布水つけ麺や冬限定の激辛の一杯も。2026年の客はスープを飲み干す一方、昆布がもっと立ってほしいという声も。檜の箸や店のブレンド茶に気づく客も多い。現金のみ。昼から通しで営業し、週末は短め。',
  });
}

// ================================================================ スチーム Dim sum&Wine
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13236374/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.steam-tokyo.jp/';
  const D = day(['18:00', '22:00']); const E = day(['12:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'tokyo_steam_dim_sum_wine_roppongi', name: 'スチーム Dim sum&Wine (Steam Dim sum & Wine)', category: 'OMNI',
    lat: 35.664627, lng: 139.731842, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a dim sum restaurant — dumplings, buns, spring rolls and dan dan noodles; dishes use oyster sauce and black bean sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan dishes are described; the dim sum and small steamed plates are pork, chicken and seafood.',
    hours_raw: 'Dinner Mon–Fri 18:00–22:00, Sat, Sun and holidays 18:00–21:00, two-hour limit; lunch Sat, Sun and holidays 12:00–15:00, courses only, booked by 21:00 the day before (walk-ins if seats are free) (Tabelog). May close early if there are no bookings, so call ahead (Tabelog). Bookings recommended — full on several 2026 visits. ¥880 table charge. 20 seats with a counter; private hire for up to 20. Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. School-age children welcome, no preschoolers; steep stairs, no strollers. Sommelier on staff.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-12-2, 佐々木ビル B1F, just outside Midtown — 3 min from Roppongi Stn (Hibiya / Oedo lines)',
    cuisine: 'Cantonese-style dim sum with seasonal ingredients and Japanese and Western techniques, paired with sommelier-chosen wines including natural wines (Tabelog shop text) · weekend lunch courses (Tabelog, tax included): nine steamed dim sum with Chinese tea ¥4,900; with a drink ¥5,500; special course with exclusive dim sum and seafood ¥7,500 · July 2026 special lunch ¥7,900: appetizers, steamed dim sum, shark-fin gyoza, Ezo abalone shumai, fried dim sum, yuba roll in oyster sauce, steamed seafood, noodles or rice (wagyu cold noodles +¥1,000), herbal almond jelly · à la carte: steamed spare ribs with black beans, yellow shumai, spring rolls, chive dumplings, dan dan noodles, steamed fish in superior broth, spicy chicken, shrimp chili, egg tart; an omakase of four seasonal dim sum such as seafood dumplings with sweet potato and black sesame, or chicken shumai in five-grain rice (October 2026) · wine, Shaoxing wine, shochu',
    website: SITE, gmaps: gm('スチーム Dim sum&Wine 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Dim sum · Roppongi, seasonal dim sum with wine in a basement by Midtown] Down a steep stair just outside Midtown, a 20-seat room where Cantonese-style dim sum is given seasonal Japanese twists — seafood dumplings with sweet potato and black sesame, chicken shumai rolled in five-grain rice — and paired with wines, many natural, chosen by the sommelier. A regular since 2020 calls it a favourite dim sum place in Tokyo, ordering the steamed spare ribs twice; others single out the yellow shumai, spring rolls and a tangy dan dan noodle to finish. A few 2026 diners found some dishes average. Dinner nightly with a ¥880 table charge; weekend lunch is set courses from ¥4,900. Book ahead.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The Tabelog shop text describes dim sum by skilled dim sum chefs, using Chinese, Japanese and Western techniques, and wines selected by a sommelier. A reviewer who has visited since 2020 notes that the floor manager is an excellent sommelier (December 2024 visit). No one is named in the sources read.',
      philosophy: 'Seasonal dim sum, carefully wrapped, to be eaten hot; wines chosen to support the dim sum (Tabelog shop text).', specialty: 'Steamed spare ribs; seasonal dim sum with wine.',
      anecdotes: [
        { text: '"Aside from dim sum, the Spicy Chicken, Steamed Spare Ribs, and Steamed Grouper in Broth are absolutely exquisite!" — August 2026, eighth visit.', source: R + 'B429250721/' },
        { text: '"These dim sums go beyond the usual dim sum offerings, allowing you to enjoy combinations of seasonal ingredients and unexpected flavors." — October 2026, à la carte.', source: R + 'B538326972/' },
        { text: '"They were the perfect size for a finale, with a strong tangy flavor and thin noodles that matched my taste perfectly." — June 2026, dan dan noodles.', source: R + 'B529997983/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): スチーム Dim sum&Wine、港区六本木4-12-2 佐々木ビルB1F、六本木駅から徒歩3分、月〜金18:00〜22:00、土日祝12:00〜15:00・18:00〜21:00、夜は2時間制、昼は土日祝のコースのみ (前日21時までに予約)、予約がないと早く閉めることもある、チャージ880円、20席、貸切20名まで、禁煙、カード可、小学生以上、急な階段のためベビーカー不可、ソムリエ。店の紹介: 季節の食材を使い、中国、和、洋の技法の点心、点心に合わせたワイン (自然派ワインも)。昼のコース: 点心9種と中国茶4,900円、1ドリンク付き5,500円、特別コース7,500円。口コミ(2020年〜2026年10月): 豚スペアリブの蒸し物、黄色の焼売、春巻き、ニラ饅頭、担々麺、蒸し魚、湯葉巻き、エッグタルト、季節の創作点心、満席が多く予約が必要、普通だったという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B429250721/', R + 'B529997983/', R + 'B530801768/', R + 'B532467184/', R + 'B534700146/', R + 'B535367761/', R + 'B535435142/', R + 'B535683283/', R + 'B536272901/', R + 'B538326972/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order à la carte or courses; sommelier pairs the wine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-12-2 佐々木ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with lunch courses and an official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664627, 139.731842); GSI 東京都港区六本木四丁目12番 (lot) 32m; Goku (tokyo_wagyu_sukiyaki_goku_roppongi, 4-12-4) is 9 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B532467184/'],
    price_note: 'Lunch course prices from Tabelog (tax included); ¥880 table charge at dinner.', last_checked: TODAY, items: [
      it('', '', 'Lunch: nine steamed dim sum with Chinese tea (6 items)', '¥4,900', 'Lunch course', 'no', 'no', 'Tabelog; weekends and holidays.', 'lunch_dimsum'),
      it('', '', 'Lunch: dim sum course with one drink', '¥5,500', 'Lunch course', 'no', 'no', 'Tabelog.', 'lunch_dimsum_drink'),
      it('', '', 'Lunch: special course of exclusive dim sum and seafood (8 items)', '¥7,500', 'Lunch course', 'no', 'no', 'Tabelog.', 'lunch_special'),
      it('', '', 'Steamed spare ribs with black beans', '', 'Dim sum', 'no', 'no', 'Tabelog shop text; 2026 reviews.', 'spare_ribs'),
    ] }, {
    cuisine: '季節の食材と和洋の技法を取り入れた広東風の点心に、ソムリエが選ぶワイン (自然派も) を合わせる (食べログの店の紹介)・週末の昼のコース (食べログ、税込み): 蒸し点心9種と中国茶4,900円、1ドリンク付き5,500円、限定の点心と魚介の特別コース7,500円・2026年7月の特別ランチ7,900円: 前菜、蒸し点心、ふかひれ餃子、Ezo の鮑の焼売、揚げ点心、湯葉巻きのオイスターソース、魚介の蒸し物、麺かご飯 (和牛の冷麺は+1,000円)、杏仁ゼリーのレモングラスシロップ・アラカルト: 豚スペアリブの豆鼓蒸し、黄色の焼売、春巻き、ニラ饅頭、担々麺、上湯の蒸し魚、辛い鶏、海老チリ、エッグタルト。季節の点心4種のおまかせ (さつまいもと黒胡麻の海鮮餃子、五穀米で包んだ鶏の焼売など、2026年10月)・ワイン、紹興酒、焼酎',
    neighborhood: '六本木4-12-2 佐々木ビルB1F、Midtown のすぐ外。六本木駅 (日比谷線・大江戸線) から徒歩3分',
    gf_detail: 'グルテンフリー不可。点心の店で、餃子、饅頭、春巻き、担々麺。オイスターソースや豆鼓のソースも使う (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ヴィーガンの料理の記載はなく、点心や小皿の蒸し物は豚、鶏、魚介。',
    notes: '[点心・六本木、Midtown そばの地下で季節の点心とワイン] Midtown のすぐ外、急な階段を下りた20席の店。広東風の点心に季節の和の工夫を加え (さつまいもと黒胡麻の海鮮餃子、五穀米で包んだ鶏の焼売など)、ソムリエが選ぶワイン (自然派も多い) と合わせる。2020年から通う客は東京でいちばん好きな点心の店と書き、豚スペアリブの蒸し物を必ずおかわりする。黄色の焼売、春巻き、締めの酸味のある担々麺を挙げる客も。2026年には普通だったという声も少し。夜は毎日でチャージ880円、週末の昼は4,900円からのコース。予約がおすすめ。',
  });
}

// ================================================================ とり澤 六本木
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13277047/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'tokyo_tori_sawa_roppongi', name: 'とり澤 六本木 (Tori Sawa Roppongi)', category: 'OMNI',
    lat: 35.664419, lng: 139.73411, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come salted or with tare, and grated daikon is served with soy sauce (October 2026); the closing dishes include chilled tantanmen and ramen. Nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori omakase, finishing with chicken soup or soboro rice.',
    hours_raw: 'Mon–Sat, two seatings: 17:30–20:00 (please arrive by about 18:00) and 20:30–23:00; closed Sundays and holidays (Tabelog). Omakase with a stop system — skewers keep coming until you say stop, and the bill depends on how much you eat (Tabelog); one diner found service cut off at closing time (September 2026). 11 counter seats; private hire for up to 20. Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. Only guests of middle-school age or older who can eat as much as an adult. Black door with no obvious sign (October 2026). Opened 26 September 2022 (Tabelog). Raw liver is offered at the start at your own risk (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-1-19, ARUGA19ビル 1F, on Roppongi-dori — 5 min from Roppongi Stn exit 6 (Hibiya line)',
    cuisine: 'Yakitori omakase of Daisen chicken grilled over Kishu binchotan, with seasonal vegetables (Tabelog shop text) · omakase course ¥12,000 (Tabelog; final bill depends on how much you eat); about ¥12,000 with all-you-can-drink (August 2026); about ¥15,000 with drinks (October 2026) · skewers in 2026: tsukune with cartilage, heart, aorta, chicken breast served almost raw, neck (seseri), gizzard, kashiwa (thigh), sori, shoulder, chōchin glazed with tare, liver, wings, yagen cartilage, quail egg, plus atsuage, eggplant, okra, lotus root, shiitake, broccoli; pickled cucumber and grated daikon refilled · raw liver offered at the start at your own risk · to finish: yaki-onigiri, soboro rice with egg yolk, tamago-kake-gohan, chilled tantanmen, ramen; chicken soup · sake, wine at fair prices (e.g. a Louis Latour Chablis about ¥7,000), beer under ¥1,000 (October 2026)',
    website: null, gmaps: gm('とり澤 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Roppongi, a Tabelog-100 yakitori omakase behind a black door] An all-black counter of eleven behind an unmarked black door on Roppongi-dori, where Daisen chicken is grilled over Kishu binchotan and handed over skewer by skewer until you say stop. Diners in 2026 praised the range of cuts — aorta, sori, chōchin with its bursting yolk, a nearly raw breast with wasabi — and the creamy raw liver offered at your own risk at the start, then soboro rice or chilled tantanmen to finish. The omakase is listed at ¥12,000; wine and sake are fairly priced for Roppongi, though one diner thought the cost performance poor and the stop system cut short at closing. Selected for the Tabelog yakitori 100 (East) in 2025. Two seatings, Monday to Saturday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Second location of Tori Sawa (October 2026 review); a Nakameguro shop is also mentioned (August 2026)',
      background: 'An October 2026 reviewer writes that Tori Sawa has its roots in the Tori Sawa founded by Akira Nakazawa and that Tomotaka Katsuragi opened this Roppongi shop in 2022; another October 2026 reviewer calls it a group restaurant of "Tori Shiki" and mentions other Tori Sawa branches. The Tabelog shop text describes Kishu binchotan, Daisen chicken and a chef\'s-choice stop system. Opened 26 September 2022 (Tabelog).',
      philosophy: 'Pursuing authenticity: skewers crisp outside and fluffy inside, a place guests want to return to (Tabelog shop text).', specialty: 'Daisen-chicken yakitori omakase; rare cuts such as aorta, sori and chōchin.',
      anecdotes: [
        { text: '"For the finishing dish, you can choose from four options: grilled rice balls, soboro rice, tamago kake gohan (rice with raw egg), and chilled tantanmen noodles." — August 2026.', source: R + 'B534043227/' },
        { text: '"At the start, I was asked if I wanted to try raw liver at my own risk. I decided to go for it, and it was incredibly fresh with no unpleasant odor." — October 2026.', source: R + 'B537555762/' },
        { text: '"Typically, the service continues until you signal to stop, but … cut off service when closing time arrived." — September 2026.', source: R + 'B536815365/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): とり澤 六本木、港区六本木4-1-19 ARUGA19ビル1F、日比谷線六本木駅6番出口から徒歩5分、月〜土17:30〜20:00 (18時ごろまでに入店) と20:30〜23:00の2部制、日祝休み、おまかせコース12,000円 (ストップ制、食べた分で金額が変わる)、11席 (カウンター)、貸切20名まで、禁煙、カード可、中学生以上で大人と同じ量を食べられる人のみ、2022年9月26日オープン、焼き鳥 EAST 百名店 2025。店の紹介: Kishu の備長炭、Daisen の鶏、季節の野菜、おまかせのストップ制、黒を基調としたカウンターのみの店内。口コミ(2026年8月〜10月): 生レバーは自己責任で、ほぼ生のささみ、大動脈、ソリ、ちょうちん、締めは焼きおにぎり、そぼろご飯、卵かけご飯、冷やし担々麺、ラーメン、ワインや日本酒が手頃、ストップ制なのに閉店時間で終わったという声、Tori Sawa の2店目という声。',
      confidence: 'medium', sources: [TB, R + 'B534043227/', R + 'B534748960/', R + 'B535032641/', R + 'B535296402/', R + 'B536815365/', R + 'B537063661/', R + 'B537106178/', R + 'B537555762/', R + 'B538216777/', R + 'B538280582/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase with a stop system — say when to stop.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-1-19 ARUGA19ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664419, 139.734110); GSI 東京都港区六本木四丁目1番 (lot) 121m, within 150 m; no record within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534748960/', R + 'B538280582/'],
    price_note: 'Course price from Tabelog (tax included); the stop system means the final bill varies.', last_checked: TODAY, items: [
      it('', '', 'Omakase yakitori course (stop system)', '¥12,000', 'Course', 'ask', 'no', 'Tabelog; the bill depends on how much you eat.', 'omakase'),
      it('', '', 'Soboro rice with egg yolk (to finish)', '', 'Finish', 'ask', 'no', 'September–October 2026 reviews.', 'soboro_don'),
      it('', '', 'Chilled tantanmen (to finish)', '', 'Finish', 'no', 'no', 'August 2026 review.', 'hiyashi_tantan'),
    ] }, {
    cuisine: 'Kishu の備長炭で焼く Daisen の鶏の焼き鳥のおまかせと季節の野菜 (食べログの店の紹介)・おまかせコース12,000円 (食べログ、食べた分で金額が変わる)、飲み放題付きで約12,000円 (2026年8月)、飲み物込みで約15,000円 (2026年10月)・2026年の串: 軟骨入りのつくね、ハツ、大動脈、ほぼ生のささみ、せせり、砂肝、かしわ、ソリ、肩、たれのちょうちん、レバー、手羽先、やげん、うずらの卵、厚揚げ、茄子、オクラ、蓮根、椎茸、ブロッコリー。胡瓜の漬物と大根おろしはおかわりあり・最初に自己責任で生レバー・締め: 焼きおにぎり、卵黄のそぼろご飯、卵かけご飯、冷やし担々麺、ラーメン。鶏のスープ・日本酒、手頃なワイン (Louis Latour の Chablis が約7,000円)、ビールは1,000円以下 (2026年10月)',
    neighborhood: '六本木4-1-19 ARUGA19ビル1F、Roppongi-dori 沿い。六本木駅6番出口 (日比谷線) から徒歩5分',
    gf_detail: '要確認。串は塩かたれで、大根おろしには醤油 (2026年10月)。締めには冷やし担々麺やラーメンも。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥のおまかせで、締めは鶏のスープやそぼろご飯。',
    notes: '[焼き鳥・六本木、黒い扉の奥の百名店の焼き鳥おまかせ] Roppongi-dori 沿いの目立たない黒い扉の奥、黒一色のカウンター11席。Daisen の鶏を Kishu の備長炭で焼き、ストップと言うまで一本ずつ出てくる。2026年の客は大動脈、ソリ、黄身がはじけるちょうちん、わさびで食べるほぼ生のささみなど部位の幅を絶賛し、最初に自己責任で出るとろりとした生レバーも評判。締めはそぼろご飯や冷やし担々麺。おまかせは12,000円で、ワインや日本酒は六本木にしては手頃。ただしコスパが悪い、ストップ制なのに閉店時間で打ち切られたという声も。焼き鳥 EAST 百名店 2025。月〜土の2部制。',
  });
}

save();
