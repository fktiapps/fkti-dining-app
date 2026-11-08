// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 74.
//   + 近野 Konno (eight-seat Japanese counter with wine, Yamatooji-Matsubara; rest)
//   + SAUNA (sauna-themed izakaya, sister of OFURO, Kawaramachi-Sanjo; rest)
//   + 修 Nao (late-night sushi counter, Gion Shinbashi; rest)
//   + 文久 Bunkyu (dark storehouse bar down a Kawaramachi-Sanjo alley; rest)
//   Rest list (mod 6 = 1) after batch 73, nearest-first; these four are the next four in order, so no skips this batch.
//   Brand check: queue-status.jsonl grepped for 近野, SAUNA / OFURO, 修 / Nao, 文久 — the only hit is OFURO (26037379, done as
//   kyoto_ofuro_sanjo, osw8-16), whose record names SAUNA as its sister; a pair of distinct concepts, drafted. None of the four
//   is in data/kyoto.json (main 178c2820, hidden records included) by name or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-74');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 近野 Konno
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043013/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kyoto-konno.com/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_konno_yumiyacho', name: '近野 (Konno)', category: 'OMNI',
    lat: 34.998233177877765, lng: 135.7721695602854, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A Kyoto omakase with dashi, soy and nagaimo somen; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, crab, eel, chicken and beef courses (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 18:00–23:00; closed Monday (Tabelog). Reservations accepted, same-day by enquiry; a booking is cancelled if no contact 30 minutes after the time (Tabelog). A seven-dish lunch has been served (December 2025). Service charge 5%, 10% after 21:00 (Tabelog original サービス料5％・21時以降は10％). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Eight counter seats; private hire (Tabelog). Non-smoking; please avoid strong perfume (Tabelog). Children by arrangement (Tabelog). Seasonal hot-pot sets to take home, ordered via the website or Instagram (Tabelog). 7–8 min walk from Kiyomizu-Gojo or Gion-Shijo Stn (Tabelog). Opened 24 April 2025 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamatooji-Matsubara, near Miyagawa-cho',
    cuisine: 'Classical Kyoto cuisine at an eight-seat counter, paired with about ten wines by the glass, sake from Kyoto and Yamagata and magnum champagne by the glass (Tabelog) · omakase from a chef trained at the Gion restaurant Hassun: nagaimo somen, hassun, hamo and other sashimi; in winter chawanmushi and koppe crab; in spring a sansho course of sea urchin, firefly squid, abalone, clam soup, eel and chicken shabu-shabu in sansho broth; a beef main; a choice of fresh fruit to finish (October 2025–August 2026) · about ¥15,000–40,000 (2025–2026 reviews)',
    website: WEB, gmaps: gm('近野 京都 弓矢町'), menu_url: null,
    notes: '[Kyoto cuisine with wine · Yamatooji-Matsubara, 8 seats] A quiet eight-seat counter, opened in 2025 near Miyagawa-cho, where a chef trained at Gion\'s Hassun cooks classical Kyoto dishes to go with wine — some ten by the glass and champagne from magnums — and the owner, once a Gion Kobu geiko, hosts. Service charge rises from 5% to 10% after 9 p.m. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Owner (former geiko, unnamed)'], origin: null,
      background: 'Per Tabelog: a quiet Japanese restaurant of eight counter seats opened 24 April 2025, with wines, Kyoto and Yamagata sake and magnum champagne by the glass chosen by a sommelier owner, and hospitality from the owner, once a geiko in Gion Kobu. Reviewers in October 2025 and August 2026 say the chef trained at Hassun in Gion; an April 2026 reviewer says the chef holds a sommelier certificate.',
      philosophy: 'Classical Japanese food paired with wine (Tabelog).', specialty: 'Kyoto omakase with wine.',
      anecdotes: [
        { text: 'A December 2025 solo lunch guest started with a warming chawanmushi instead of cold starters, then koppe crab peeled for the guest, with champagne from a magnum.', source: R + 'B518519661/' },
        { text: 'An April 2026 private party had a spring course built on flower sansho — eel, chicken shabu-shabu in sansho broth — after sea urchin, firefly squid and abalone.', source: R + 'B521423949/' },
        { text: 'An August 2026 diner found the cooking traditional and dashi-led, ingredients allowed to speak, at a comfortable distance from the chef.', source: R + 'B533167986/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区大和大路通松原下る弓矢町38、清水五条駅・祇園四条駅から徒歩7〜8分、火〜日 18:00〜23:00、月曜休み、予約可 (当日も相談可、30分連絡なしはキャンセル扱い)、サービス料5% (21時以降は10%)、カード可、電子マネー・QR 不可、カウンター8席、貸切可、禁煙、香水など強い香りは控えて、子どもは相談、季節の鍋セットの販売 (公式サイト・Instagram)、2025年4月24日開店、宮川町と祇園の近くの静かな日本料理店、ソムリエの店主が選ぶグラスワイン約10種、京都と山形の日本酒、マグナムのグラスシャンパン、祇園甲部の元芸妓の店主のもてなし。口コミ (2025年9月〜2026年8月、英語): 料理人は祇園の Hassun で修業 (2025年10月、2026年8月)、料理人はソムリエの資格も (2026年4月)、7品の昼 (2025年12月)、茶碗蒸し、こっぺ蟹、選べる果物のデザート、山椒の春のコース (雲丹、ほたるいか、鮑、蛤の椀、鰻、山椒のだしの鶏しゃぶ)、長芋そうめん、八寸、鱧の造り、牛肉の主菜。',
      confidence: 'medium', sources: [TB, WEB, R + 'B515404347/', R + 'B515757026/', R + 'B518519661/', R + 'B521423949/', R + 'B533167986/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter of eight; no strong perfume; service 5%, 10% after 21:00; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通松原下る弓矢町38',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998233, 135.772170); cross-checked: GSI 京都府京都市東山区弓矢町38番地 (lot) 31 m; nearest existing record 24.0 m (kyoto_toutou_to_yumiyacho, 35); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the service charge is priced (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '', 'Courses', 'ask', 'no', '2025–2026 reviews.', 'omakase'),
      it('', '', 'Service charge (10% after 21:00)', '5%', 'Charge', 'ask', 'no', 'Tabelog.', 'service'),
    ] }, {
    cuisine: 'カウンター8席の古典的な京料理に、グラスワイン約10種、京都と山形の日本酒、マグナムのグラスシャンパン (食べログ)・祇園の Hassun で修業した料理人のおまかせ: 長芋そうめん、八寸、鱧などの造り、冬は茶碗蒸しとこっぺ蟹、春は雲丹、ほたるいか、鮑、蛤の椀、鰻、山椒のだしの鶏しゃぶの山椒のコース、牛肉の主菜、最後は選べる果物 (2025年10月〜2026年8月)・15,000〜40,000円ほど (2025〜2026年の口コミ)',
    neighborhood: '大和大路松原、宮川町のそば',
    gf_detail: '要確認。だし、醤油、長芋そうめんなどの京料理のおまかせ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、蟹、鰻、鶏、牛肉のコース (2025〜2026年の口コミ)。',
    notes: '[京料理とワイン・大和大路松原、8席] 2025年に宮川町の近くに開いた静かなカウンター8席の店。祇園の Hassun で修業した料理人がワインに合う古典的な京料理を作り、グラスで約10種のワインやマグナムのシャンパン、もてなすのは祇園甲部の元芸妓の店主。サービス料は21時以降5%から10%に。月曜休み。',
  });
}

// ================================================================ SAUNA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039479/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']);
  put({
    id: 'kyoto_sauna_izakaya_sanjo', name: 'SAUNA', category: 'OMNI',
    lat: 35.009355, lng: 135.769416, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: pasta, terrine and cheesecake on the menu (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu bolognese, salmon cream pasta and liver pudding (2025–2026 reviews).',
    hours_raw: 'Monday and Wednesday–Friday 17:00–23:00; Saturday 15:00–23:00; Sunday 15:00–22:00; closed Tuesday; hours may change (Tabelog). Reservations accepted and advised — often full (Tabelog; February 2026). Cards, e-money and QR (Tabelog). Counter seats downstairs and more on upper floors, three levels in all; private hire (Tabelog; February 2026). Non-smoking (Tabelog). Weak phone signal inside (January 2026). Just north of Kawaramachi-Sanjo; about 190 m from Kyoto Shiyakusho-mae Stn (Tabelog; October 2026). Opened 19 May 2023 (Tabelog).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: day(['15:00', '23:00']), 6: day(['15:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Sanjo, north side',
    cuisine: 'Sauna- and bathhouse-themed izakaya of wine-friendly small plates, sister of OFURO (2025–2026 reviews) · assorted appetisers, potato salad, shiitake marinade, taro and sansho terrine, "adult" liver pudding, mushroom mousse, wagyu bolognese, salmon and mushroom cream pasta, a meat main, iced cheesecake (November 2025–March 2026) · wine, highballs, green-tea highball, house cocktails such as sake with Calpis (2025–2026 reviews) · about ¥3,000–5,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('SAUNA 居酒屋 京都 三条'), menu_url: null,
    notes: '[Izakaya · Kawaramachi-Sanjo, sauna-themed] A playful three-floor izakaya dressed as a sauna — wood panelling, sauna hats, lockers — from the team behind OFURO: pretty, wine-friendly plates like liver pudding, taro-and-sansho terrine and wagyu bolognese, with house cocktails. Friendly staff; book ahead. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Staff'], origin: null,
      background: 'Per reviewers: the sister restaurant of OFURO (kyoto_ofuro_sanjo), sharing some staff, styled like a sauna and public bath though there is no actual sauna, on three floors with counter seating (November 2025–October 2026). Opened 19 May 2023 (Tabelog).',
      philosophy: null, specialty: 'Liver pudding; iced cheesecake.',
      anecdotes: [
        { text: 'A February 2026 OFURO regular finally tried the iced cheesecake — crunchy half-frozen, creamy as it warms — and found some of the same friendly staff.', source: R + 'B523599537/' },
        { text: 'A January 2026 diner at the counter loved a sake-and-Calpis cocktail but got no phone signal for two hours — fine for a digital detox.', source: R + 'B520788389/' },
        { text: 'A November 2025 visitor, after a massage, enjoyed the sauna hats and locker-style decor of a sauna without the sauna.', source: R + 'B517605852/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区恵比須町534-33、京都市役所前駅から185m、月・水〜金 17:00〜23:00、土 15:00〜23:00、日 15:00〜22:00、火曜休み、予約可、カード・電子マネー・QR 可、貸切可、禁煙、2023年5月19日開店。口コミ (2025年11月〜2026年10月、英語): OFURO の姉妹店 (スタッフも一部共通)、サウナや銭湯をイメージした木の内装、サウナハットやロッカー、3階建てでカウンター中心、前菜の盛り合わせ、ポテトサラダ、椎茸のマリネ、里芋と山椒のテリーヌ、大人のレバープリン、きのこのムース、和牛のボロネーゼ、鮭ときのこのクリームパスタ、アイスチーズケーキ、ワイン、ハイボール、緑茶ハイ、日本酒のカルピス割り、予約がおすすめ、店内は電波が弱い (2026年1月)、5品と2杯で4,000円ほど (2025年12月)。',
      confidence: 'medium', sources: [TB, R + 'B517221404/', R + 'B517605852/', R + 'B519288160/', R + 'B520110820/', R + 'B520788389/', R + 'B522978155/', R + 'B523599537/', R + 'B524943670/', R + 'B528133848/', R + 'B537071619/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; weak phone signal; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町534-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009400, 135.769416) moved 5.0 m south to (35.009355, 135.769416): the Tabelog point is 0.2 m from kyoto_the_cellar_kyoto (恵比須町534-9), now 5.2 m; GSI 京都府京都市中京区恵比須町534番地 (lot) 29 m from the Tabelog point — the 534 block holds many sub-lots; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519288160/'],
    price_note: 'No item prices in the sources; five dishes and two drinks came to about ¥4,000 (December 2025).', last_checked: TODAY, items: [
      it('', '', 'Adult liver pudding', '', 'Small plates', 'ask', 'no', 'December 2025.', 'liver'),
      it('', '', 'Wagyu bolognese', '', 'Pasta', 'no', 'no', 'January 2026.', 'bolognese'),
      it('', '', 'Iced cheesecake', '', 'Dessert', 'no', 'no', 'February 2026.', 'cheesecake'),
    ] }, {
    cuisine: 'OFURO の姉妹店で、サウナと銭湯がテーマのワインに合う小皿の居酒屋 (2025〜2026年の口コミ)・前菜の盛り合わせ、ポテトサラダ、椎茸のマリネ、里芋と山椒のテリーヌ、大人のレバープリン、きのこのムース、和牛のボロネーゼ、鮭ときのこのクリームパスタ、肉の主菜、アイスチーズケーキ (2025年11月〜2026年3月)・ワイン、ハイボール、緑茶ハイ、日本酒のカルピス割りなどのオリジナルカクテル (2025〜2026年の口コミ)・3,000〜5,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '河原町三条の北',
    gf_detail: 'グルテンフリー不可。パスタ、テリーヌ、チーズケーキ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛のボロネーゼ、鮭のクリームパスタ、レバープリン (2025〜2026年の口コミ)。',
    notes: '[居酒屋・河原町三条、サウナがテーマ] 木の内装、サウナハット、ロッカーとサウナに見立てた3階建ての遊び心ある居酒屋で、OFURO の姉妹店。レバープリン、里芋と山椒のテリーヌ、和牛のボロネーゼなどワインに合う見た目もきれいな小皿とオリジナルカクテル。スタッフは気さく、予約がおすすめ。火曜休み。',
  });
}

// ================================================================ 修 Nao
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005567/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '26:00']);
  put({
    id: 'kyoto_sushi_nao_gion', name: '修 (Nao)', category: 'OMNI',
    lat: 35.005769401639114, lng: 135.7755786130078, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edo-style sushi with soy and simmered clam; no gluten information (2008–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter (2008–2026 reviews).',
    hours_raw: 'Monday–Saturday 18:00–2:00; closed Sunday and holiday Mondays; hours may change (Tabelog). Cards (JCB, AMEX, Diners) (Tabelog). About six to eight counter seats and a small table at the back; no photos (2008–2011 reviews). Gion Shinbashi, a short walk east of Hanamikoji (2008–2011 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shinbashi, east of Hanamikoji',
    cuisine: 'Edo-style sushi counter, ordered piece by piece rather than a set course, with the day\'s fish displayed in a wooden box (2008–2011 reviews) · flounder, chu-toro, swordfish, small-eye bream, simmered clam, natto rolls; champagne and sake (2008–2019 reviews) · about ¥15,000–40,000 (Tabelog; 2019–2026 reviews)',
    website: null, gmaps: gm('修 祇園 寿司 橋本町'), menu_url: null,
    notes: '[Sushi · Gion Shinbashi, late] A tiny, long-running Gion sushi counter open until 2 a.m., where you order from the day\'s fish laid out in a wooden box — flounder, chu-toro, swordfish — rather than a fixed course. Regulars rave about the fish and the rice-to-topping balance; others found the service curt. No photos. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed)', 'Staff'], origin: null,
      background: 'Per reviewers: a small Edo-style sushi counter just east of Hanamikoji in Gion Shinbashi, reviewed since 2008, run in 2008 by the chef with one woman assisting; known for buying fine fish (2008–2019 reviews).',
      philosophy: null, specialty: 'Nigiri from the day\'s fish.',
      anecdotes: [
        { text: 'An October 2008 visitor praised the choice of fish — flounder, chu-toro and swordfish — over a glass of Cristal, and noted there was no set course.', source: R + 'B118115960/' },
        { text: 'An April 2019 regular called the rice-to-fish balance perfect and the fish unmatched anywhere else.', source: R + 'B397617999/' },
        { text: 'A February 2020 guest found the service unpleasant and would not return.', source: R + 'B424480630/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、東山区橋本町403、三条京阪から415m、月〜土 18:00〜翌2:00、日曜休み、祝日の月曜休み、カード (JCB・AMEX・Diners) 可。口コミ (2008年1月〜2026年6月、英語): 祇園新橋の花見小路の少し東、カウンター6〜8席と奥に小さなテーブル、写真は控えるよう頼まれる (2011年)、その日の魚を木箱に並べる、コースでなく好みで、平目、中とろ、かじき、煮蛤、納豆巻き、シャンパン、店主と女性一人 (2008年)、魚とシャリの釣り合いがよい (2019年4月)、接客が不快だったとの声 (2020年2月)、高いが価値ある握り (2026年6月)。',
      confidence: 'low', sources: [TB, R + 'B111165545/', R + 'B116992225/', R + 'B117557003/', R + 'B118115960/', R + 'B397617999/', R + 'B424480630/', R + 'B502171491/', R + 'B530599963/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter of regulars; no photos; cards (JCB, AMEX, Diners).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区橋本町403',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews in January 2025 and June 2026.' },
    pin_source: `Tabelog ${TB} (35.005769, 135.775579); cross-checked: GSI 京都府京都市東山区橋本町403番地 (lot) 24 m; nearest existing record 17.0 m (kyoto_nonki_tei_gion); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B118115960/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Nigiri, by the piece', '', 'Sushi', 'ask', 'no', '2008–2026 reviews.', 'nigiri'),
    ] }, {
    cuisine: 'コースでなく一貫ずつ頼む江戸前の寿司のカウンター、その日の魚を木箱に並べる (2008〜2011年の口コミ)・平目、中とろ、かじき、煮蛤、納豆巻き、シャンパンや日本酒 (2008〜2019年の口コミ)・15,000〜40,000円ほど (食べログ、2019〜2026年の口コミ)',
    neighborhood: '祇園新橋、花見小路の東',
    gf_detail: '要確認。醤油や煮蛤の江戸前寿司。グルテンの情報はない (2008〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司のカウンター (2008〜2026年の口コミ)。',
    notes: '[寿司・祇園新橋、深夜まで] 深夜2時まで開く祇園の小さな老舗の寿司のカウンター。木箱に並んだその日の魚、平目、中とろ、かじきなどから選んで握ってもらう。常連は魚とシャリの釣り合いを絶賛、接客が冷たいと感じた客も。写真は控えて。日曜休み。',
  });
}

// ================================================================ 文久 Bunkyu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001583/'; const R = TB + 'dtlrvwlst/';
  const H = day(['20:00', '24:00']);
  put({
    id: 'kyoto_bar_bunkyu', name: '文久 (Bunkyu)', category: 'OMNI',
    lat: 35.009409, lng: 135.769731, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'A cocktail and whisky bar with no food described; spirits like whisky are generally gluten-free — ask about beer and mixers (2013–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Drinks only — cocktails of seasonal fruit and Scotch (2015–2018 reviews).',
    hours_raw: 'Tuesday, Friday and Saturday 20:00–24:00; closed other days; hours may change (Tabelog). No reservations (Tabelog). No cards (Tabelog). About seven to nine seats around one large wooden table; private hire up to 20 (Tabelog; 2015 reviews). Smoking allowed (Tabelog). Very dark inside (2013–2025 reviews). At the end of a narrow alley off the street north of Kawaramachi-Sanjo, behind a noren reading "bar Bunkyu" (2013–2025 reviews).',
    hours: { 1: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Sanjo, alley storehouse',
    cuisine: 'Hidden bar in an old storehouse: cocktails of seasonal fruit and world spirits made to suit each guest, Scotch whisky (2015–2018 reviews) · about ¥1,000–4,000 (Tabelog; 2013–2025 reviews)',
    website: null, gmaps: gm('bar 文久 河原町三条'), menu_url: null,
    notes: '[Bar · Kawaramachi-Sanjo alley, Tue/Fri/Sat] A near-dark bar inside an old storehouse at the end of a narrow alley: one big rounded wooden table, a bartender mixing cocktails from seasonal fruit to suit you, and Scotch. Look for the "bar Bunkyu" noren. Open three nights a week from 8 p.m.; cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Bartender (unnamed)'], origin: null,
      background: 'Per reviewers: a bar in a storehouse a December 2013 reviewer dates to the first year of the Bunkyu era, once used by a flower shop; a February 2018 reviewer says it is produced by the Kyoto florist Hanamasa, with a bartender, Nao, who makes cocktails from seasonal fruit and world spirits. A March 2015 guest saw foreign guests looked after in fluent English.',
      philosophy: null, specialty: 'Seasonal-fruit cocktails.',
      anecdotes: [
        { text: 'An August 2025 traveller, emboldened by a few drinks, followed a noren reading only "bar Bunkyu" down a narrow alley to a small door.', source: R + 'B512859326/' },
        { text: 'A March 2015 guest found it so dark the eyes needed time to adjust to the rounded wooden table, and was seen to the door after two Scotches.', source: R + 'B87493848/' },
        { text: 'An October 2019 reviewer liked the dark, small room and reasonable drinks but felt the bartender chooses customers.', source: R + 'B420457359/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区恵比須町534、地下鉄市役所前駅・京阪三条駅から徒歩5〜10分、火・金・土 20:00〜24:00、ほかは休み、予約不可、カード不可、7席、20名まで貸切可、喫煙可。口コミ (2013年12月〜2025年8月、英語): 河原町三条の上の路地の奥の蔵のバー、「bar Bunkyu」の暖簾だけが目印、とても暗い、大きな丸い木のテーブル、文久元年の蔵で以前は花屋だったとの声 (2013年12月)、京都の花屋 Hanamasa のプロデュース、バーテンダーの Nao が季節の果物で好みのカクテルを作る (2018年2月)、スコッチ、英語で海外の客に対応 (2015年3月)、客を選ぶとの声 (2019年10月)。',
      confidence: 'low', sources: [TB, R + 'B112206559/', R + 'B145087851/', R + 'B420457359/', R + 'B462765466/', R + 'B512859326/', R + 'B87493848/', R + 'B99000358/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; very dark; smoking allowed; English spoken (2015).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町534',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review August 2025.' },
    pin_source: `Tabelog ${TB} (35.009409, 135.769786) moved 5.0 m west to (35.009409, 135.769731): the Tabelog point is 1.0 m from kyoto_sumibi_toriyaki_haku (恵比須町534-13), now 5.9 m; GSI 京都府京都市中京区恵比須町534番地 (lot) 10 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B462765466/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fruit cocktail', '', 'Drinks', 'ask', 'ask', 'February 2018.', 'cocktail'),
    ] }, {
    cuisine: '古い蔵の隠れ家バー: 季節の果物と世界の酒で好みに合わせるカクテル、スコッチ (2015〜2018年の口コミ)・1,000〜4,000円ほど (食べログ、2013〜2025年の口コミ)',
    neighborhood: '河原町三条、路地の蔵',
    gf_detail: '料理の記述のないカクテルとウイスキーのバー。ウイスキーなどの蒸留酒は一般にグルテンを含まないが、ビールや割り材は確認を (2013〜2025年の口コミ)。',
    vegan_detail: '飲み物のみ。季節の果物のカクテルとスコッチ (2015〜2018年の口コミ)。',
    notes: '[バー・河原町三条の路地、火金土] 細い路地の奥の古い蔵の、ほとんど真っ暗なバー。大きな丸い木のテーブルひとつ、好みに合わせて季節の果物でカクテルを作るバーテンダー、スコッチ。「bar Bunkyu」の暖簾が目印。週3日、夜8時から。現金のみ、喫煙可。',
  });
}

save();
