// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 23.
//   + 鮨 ラビス 大阪 ヤニック・アレノ Sushi L'Abysse Osaka Yannick Alléno (French-and-sushi counter, Four Seasons Hotel Osaka 37F)
//   + U.KAI (five-seat innovative counter, Tabelog Award Bronze 2025–2026, Kitashinchi)
//   + すし青木 Sushi Aoki (Showa-style neighbourhood sushi with a priced à la carte menu, Fukushima 6-chome)
//   + nitro (creative Italian with aged fish, five groups a day, Sonezaki)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b22): first odd ids 27145703, 27116521,
//   27025241, 27107373. None is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Chain check: L'Abysse also runs in Paris, Monte-Carlo and Dubai within the Yannick Alléno Group (web search); none is
//   in data and the Osaka shop is the only one in Japan, so it is drafted (flagged in the report). U.KAI belongs to the
//   group with IAKU (in data) and Sichuan MITSUBACHI (b18); it is the group's innovative counter, a sister concept. Sushi
//   Aoki (Fukushima, about 20 years) is unrelated to the Tokyo Aoki shops; nitro has a sister café in Fukushima (July 2026
//   review), a different format.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 ラビス 大阪 ヤニック・アレノ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27145703/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.fourseasons.com/jp/osaka/dining/restaurants/sushi-labysse-osaka-yannick-alleno/';
  const H = day(['11:30', '14:30'], ['17:30', '21:00']);
  put({
    id: 'osaka_sushi_labysse_four_seasons', name: '鮨 ラビス 大阪 ヤニック・アレノ (Sushi L\'Abysse Osaka Yannick Alléno)', category: 'OMNI',
    lat: 34.696124, lng: 135.493561, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Edomae sushi brushed with soy sauce, a consommé instead of miso soup, and French sauces and desserts.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and French seafood course.',
    hours_raw: 'Mon, Tue, Thu–Sun 11:30–14:30 (last seating 13:30) and 17:30–21:00 (last seating 20:00); closed Wednesdays (Tabelog). Opened October 25, 2024 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 20 seats: 14 at the counter and a private room for 6 (minimum spend ¥45,000 at lunch, ¥90,000 at dinner); non-smoking; children 6 and over can take the courses (Tabelog). Smart casual: no caps, T-shirts, shorts, tank tops or sandals, and no strong perfume (Tabelog). Paid parking shared with the condominium (July 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島 2-chome, Four Seasons Hotel Osaka 37F, with a city view — near Nishi-Umeda Stn and JR Osaka Stn',
    cuisine: 'French cuisine and Edomae sushi together: French dishes supervised by Yannick Alléno and sushi by head chef Itaru Yasuda, with over 30 years\' experience; sake chosen by head sommelier Makoto Kido; champagne and wine (Tabelog) · holiday omakase (Tabelog, tax included): Christmas and New Year lunch ¥35,000; Christmas dinner ¥55,000; New Year dinner ¥65,000, with caviar, black truffle and strawberries, opening with Alléno\'s "Émotion" and closing with a French dessert · reviews (2026): aji, grouper, akagai, botan shrimp, swordfish with sea urchin, nodoguro wrapped in sea urchin, otoro, akami with apple gari, a "consommé of earth and sea", burnt white-chocolate ice cream with papaya, soba and barley tea · lunch about ¥10,000–15,000 (Tabelog budget)',
    website: WEB, gmaps: gm('Sushi L\'Abysse Osaka Four Seasons'), menu_url: null,
    notes: "[Sushi · Nishi-Umeda, French sushi on the 37th floor] A twenty-seat counter on the 37th floor of the Four Seasons Hotel Osaka, opened in October 2024, where French appetizers and desserts devised under three-star chef Yannick Alléno frame Edomae sushi from head chef Itaru Yasuda, with apple-ginger gari and a consommé in place of miso soup. The view is the draw, and lunch costs about a third of dinner; holiday omakase run ¥35,000–65,000. Many guests are from overseas, and some nights a younger or non-Japanese chef serves. Diners love the fusion; one disliked a chef saucing nigiri by hand, others found the rice large or the counter tight. Smart casual; closed Wednesdays.",
    chef_bio: { chef_name: 'Itaru Yasuda (head sushi chef)', roles: ['Head sushi chef Itaru Yasuda (Tabelog)', 'Supervising chef Yannick Alléno (Tabelog)', 'Head sommelier Makoto Kido (Tabelog)'], origin: null, background: 'Shop text (Tabelog): a blend of French cuisine and Edomae sushi by French chef Yannick Alléno, holder of 18 Michelin stars, and chef Itaru Yasuda, with over 30 years of experience; sake chosen by head sommelier Makoto Kido; private dining rooms with city views. Opened October 25, 2024 in the Four Seasons Hotel Osaka. The Yannick Alléno Group also runs L\'Abysse in Paris, Monte-Carlo and Dubai (web search). Diners: some nights the head chef serves, other nights a younger or non-Japanese chef (2026).', philosophy: null, specialty: 'French-accented Edomae omakase.',
      anecdotes: [
        { text: '"The gari (pickled ginger) was a delightful mix of apple and ginger." — June 2026.', source: R + 'B530294351/' },
        { text: '"I was particularly impressed by the combination of the swordfish and sea urchin!" — May 2026.', source: R + 'B527553798/' },
        { text: '"The view from the 37th floor is stunning!" — October 2026.', source: R + 'B537113624/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B525377784/', R + 'B527553798/', R + 'B530294351/', R + 'B532557016/', R + 'B533006443/', R + 'B533591278/', R + 'B534851260/', R + 'B535728183/', R + 'B537113624/', R + 'B537877515/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A hotel restaurant whose guests are mostly from overseas (June and October 2026); no English menu is listed on Tabelog.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島2-4-32',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and Four Seasons page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島二丁目4番32号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Holiday omakase from the Tabelog listing (tax included); regular course prices were not in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Christmas and New Year omakase lunch', '¥35,000', 'Course', 'ask', 'no', 'Tabelog listing (holiday only).', 'holiday_lunch'),
      it('', '', 'Christmas omakase dinner', '¥55,000', 'Course', 'ask', 'no', 'Tabelog listing (holiday only).', 'xmas_dinner'),
      it('', '', 'New Year omakase dinner', '¥65,000', 'Course', 'ask', 'no', 'Tabelog listing (holiday only).', 'newyear_dinner'),
    ] }, {
    cuisine: 'フレンチと江戸前鮨を一緒に: Yannick Alléno が監修するフレンチと、30年以上の経験の料理長 Itaru Yasuda の鮨、ヘッドソムリエ Makoto Kido が選ぶ日本酒、シャンパンとワイン (食べログ)・季節限定のおまかせ (食べログ、税込): クリスマスと正月のランチ35,000円、クリスマスのディナー55,000円、正月のディナー65,000円、キャビア、黒トリュフ、いちご、Alléno の「Émotion」で始まりフレンチのデザートで締める・口コミ (2026年): アジ、ハタ、赤貝、ボタンエビ、カジキとウニ、ウニで巻いたのどぐろ、大トロ、りんごのガリと赤身、大地と海のコンソメ、焦がしホワイトチョコのアイスとパパイヤ、そば茶と麦茶・ランチは1万〜1万5千円ほど (食べログの予算)',
    neighborhood: '堂島2丁目、Four Seasons Hotel Osaka の37階、街を見渡せる。西梅田駅や JR大阪駅の近く',
    gf_detail: '要確認。グルテンの情報なし。醤油を塗る江戸前鮨、味噌汁の代わりのコンソメ、フレンチのソースとデザート。',
    vegan_detail: 'ヴィーガンではありません。鮨とフレンチの魚介のコース。',
    notes: '[鮨・西梅田、37階のフレンチの鮨] Four Seasons Hotel Osaka の37階にある20席のカウンターで、2024年10月オープン。三つ星シェフ Yannick Alléno の監修のフレンチの前菜とデザートが、料理長 Itaru Yasuda の江戸前鮨をはさみ、ガリはりんご入り、味噌汁の代わりにコンソメ。目当ては眺めで、ランチはディナーの3分の1ほど、季節のおまかせは35,000〜65,000円。客は海外からの人が多く、夜によっては若い料理人や外国人の料理人が握る。融合を絶賛する声が多い一方、握りに手で醤油を塗るのが気になった、シャリが大きい、カウンターが窮屈という声も。スマートカジュアル、水曜休み。',
  });
}

// ================================================================ U.KAI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27116521/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '23:00']), SA = day(['17:00', '22:00']);
  put({
    id: 'osaka_ukai_kitashinchi', name: 'U.KAI', category: 'OMNI',
    lat: 34.696756, lng: 135.500457, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Recent courses ended with yakisoba or Neapolitan pasta and included a katsu sandwich (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of wagyu, abalone, tuna and foie gras; a diner noted few non-meat options (May 2026).',
    hours_raw: 'Mon–Fri 18:00–23:00; Sat 17:00–22:00; closed Sundays and holidays; may close for the chef\'s circumstances (Tabelog). Reservation only (Tabelog). Table charge ¥1,100 per person (Tabelog). Opened March 10, 2020 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 5 counter seats; private hire for 4–5; non-smoking; smart casual (Tabelog). Unsigned entrance in the basement of a building between Kamidori and Hondori (2025–2026 reviews). Tabelog Award Bronze 2025 and 2026; Innovative 100 in 2025.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, ジロービル B1F, between Kamidori and Hondori — 5 min from Kitashinchi Stn',
    cuisine: 'Innovative cooking with sommelier-chosen wine and sake; from November 2026 a ten-dish course based on Japanese cuisine (Tabelog) · courses (Tabelog, tax included): Yukai course of 10 seasonal dishes ¥10,000 from November 2026; live Matsuba crab course ¥33,000 for private parties of 4–5 from November 10, 2026 · earlier courses (2026): bluefin tuna with karasumi, abalone in a light broth, chateaubriand or Yamagata beef steak, burrata with strawberries, prosciutto, shrimp in basil sauce, foie gras and truffle chestnut rice, a katsu sandwich, firefly-squid yakisoba or Neapolitan with Schauenessen sausages (as the diner wrote), pudding · about ¥40,000 a head with wine (October 2026)',
    website: null, gmaps: gm('U.KAI 北新地 ジロービル'), menu_url: null,
    notes: "[Innovative · Kitashinchi, a five-seat counter in flux] A five-seat counter behind an unsigned basement door in Kitashinchi, part of the group behind IAKU and Sichuan MITSUBACHI, with Tabelog Bronze awards for 2025 and 2026. The kitchen has changed hands more than once: diners in 2025–2026 met an owner-chef named Hattori, then a Chef Ueda, and from November 2026 the shop text announces a Japanese-based ten-dish course for ¥10,000 by Chef Kamegen under Hattori's supervision, plus a ¥33,000 Matsuba-crab course for private parties. Past highlights were Yamagata beef, abalone and tuna with karasumi; two May 2026 diners found a Neapolitan finish poor value. ¥1,100 table charge; reservation only.",
    chef_bio: { chef_name: null, roles: ['Chef Kamegen (from November 2026, Tabelog)', 'Supervisor and owner-chef Hattori (Tabelog; March 2025 review)', 'Chef Ueda (June 2026 review)', 'Sommelier (unnamed)'], origin: null, background: 'Shop text (Tabelog): from November 2026 U.KAI becomes "Yūkai" dining led by Chef Kamegen, trained at a renowned Japanese restaurant, with a ten-dish seasonal course under the supervision of Hattori Yūkai; wines and sake chosen by a sommelier. Opened March 10, 2020. Reviews: a first visit "since Chef Hattori Yuka took over as the owner-chef" (March 2025); "the first time since Chef Ueda took over" (June 2026); "the chef had changed" (May 2026). An August 2026 diner calls Sichuan MITSUBACHI the Chinese branch of U-KAI.', philosophy: null, specialty: 'Seasonal innovative course.',
      anecdotes: [
        { text: '"The abalone paired with a light and delicate broth was simply outstanding!" — April 2026.', source: R + 'B527034558/' },
        { text: '"I was surprised that the final dish was Neapolitan pasta at this price point." — May 2026.', source: R + 'B528098944/' },
        { text: '"The Yamagata beef steak is outstanding." — October 2026.', source: R + 'B538264600/' },
      ],
      japanese_sources_summary: null,
      confidence: 'low', sources: [TB, R + 'B514141266/', R + 'B514768544/', R + 'B514770096/', R + 'B527034558/', R + 'B528098944/', R + 'B528993031/', R + 'B529780763/', R + 'B530064371/', R + 'B532307626/', R + 'B538264600/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Five-seat counter; staff explain each dish (2025). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-1-40 ジロービル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing announcing a new course from November 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目1番40号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'The new courses from the Tabelog listing (tax included), from November 2026; ¥1,100 table charge.', last_checked: TODAY, items: [
      it('', '', 'Yukai course, 10 seasonal dishes (from November 2026)', '¥10,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'yukai_course'),
      it('', '', 'Live Matsuba crab course, 10 dishes, private parties of 4–5 (from November 10, 2026)', '¥33,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'crab_course'),
    ] }, {
    cuisine: 'ソムリエが選ぶワインと日本酒と合わせるイノベーティブ、2026年11月からは和食をもとにした10品のコース (食べログ)・コース (食べログ、税込): 2026年11月からの旬の10品の Yukai コース10,000円、2026年11月10日からの活き松葉ガニのコース33,000円 (4〜5人の貸切) ・以前のコース (2026年): 本マグロとからすみ、あっさりしただしのアワビ、シャトーブリアンや Yamagata 牛のステーキ、いちごとブッラータ、生ハム、エビのバジルソース、フォアグラとトリュフの栗ご飯、カツサンド、締めはホタルイカの焼きそばやSchauenessen のナポリタン、プリン・ワイン込みで1人4万円ほど (2026年10月)',
    neighborhood: '北新地、Kamidori と Hondori の間のジロービル 地下1階。北新地駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。最近のコースは焼きそばやナポリタンで締め、カツサンドも出た (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。和牛、アワビ、マグロ、フォアグラのコースで、肉以外の料理が少ないという声も (2026年5月)。',
    notes: '[イノベーティブ・北新地、変わり続ける5席のカウンター] 北新地のビルの地下、看板のない扉の奥にある5席のカウンターで、IAKU や四川料理 MITSUBACHI と同じグループの店。食べログアワードのブロンズを2025年と2026年に受賞。厨房は何度か代わっていて、2025〜2026年の口コミにはオーナーシェフの Hattori、次に Ueda シェフが登場し、2026年11月からは Hattori の監修で Kamegen シェフによる和食がもとの10品10,000円のコースと、貸切の松葉ガニのコース33,000円が始まると店の紹介にある。これまでは Yamagata 牛、アワビ、マグロとからすみが好評で、締めのナポリタンは値段に合わないという声が2026年5月に2件。テーブルチャージ1,100円、予約のみ。',
  });
}

// ================================================================ すし青木
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27025241/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']), FR = day(['17:30', '22:00']);
  put({
    id: 'osaka_sushi_aoki_fukushima', name: 'すし青木 (Sushi Aoki)', category: 'OMNI',
    lat: 34.701228, lng: 135.488114, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi with soy sauce, simmered whelk and sweet-sauced eel.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish sushi shop.',
    hours_raw: 'Tue, Wed, Thu, Sat 17:30–23:00; Fri 17:30–22:00; closed Mondays and Sundays; hours may change (Tabelog). Cards: AMEX only; no e-money or QR (Tabelog). 16 seats: 8 at the counter and two semi-private tables for 4; non-smoking (Tabelog). Walk-ins possible later in the evening (July 2026). Every dish and drink has a price on the menu (December 2025).',
    hours: { 1: H, 2: H, 3: H, 4: FR, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fukushima 6-chome, a quiet street about 10 min north of JR Fukushima Stn',
    cuisine: 'Showa-style neighbourhood sushi with a clearly priced à la carte menu; nigiri come two to a plate (2025–2026 reviews) · prices in reviews: oyster vinegar ¥660, marinated swordfish ¥660, kanpachi ¥330, tuna ¥440, aji ¥440, ikura ¥660, anago ¥660, akagai ¥660 (December 2025); salmon ¥330, kanpachi ¥550, negitoro roll ¥660 (July 2026) · assorted sashimi, ankimo, abalone, uzaku, grilled fugu, sazae, clams, simmered whelk, grilled mejika, whale, salad rolls, meharizushi (2025–2026) · seko crab in season (November 2024) · about ¥3,500–8,000 a head (2025–2026)',
    website: null, gmaps: gm('すし青木 福島6-20-6'), menu_url: null,
    notes: "[Sushi · Fukushima, a Showa-era neighbourhood counter] A sixteen-seat neighbourhood sushi shop a quiet ten minutes north of JR Fukushima, run for about twenty years by Mr. Aoki and loved by locals more than Instagram. The menu prices everything, nigiri come two to a plate, about ¥330–660 a pair, so a full evening of sashimi, oyster vinegar, grilled fugu, ankimo and nigiri runs about ¥6,000–8,000, or ¥3,500 for a light one. Regulars praise the balance of rice and fish and the steady service; there are semi-private tables at the back. AMEX is the only card; closed Sundays and Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (reviewers say "Mr. Aoki")'], origin: null, background: 'Reviews: "a long-standing establishment for about 20 years", rarely on social media (May 2026); "I had been looking forward to meeting Mr. Aoki" (March 2026); a Showa-era sushi restaurant (November 2025). The Tabelog listing is not shop-maintained.', philosophy: null, specialty: 'Seasonal nigiri; à la carte sashimi.',
      anecdotes: [
        { text: '"The menu features clear pricing for all dishes, sushi, and drinks, ensuring transparency." — December 2025.', source: R + 'B518965614/' },
        { text: '"Since the nigiri comes in pairs, if you go with two people, you can each have one piece." — May 2026.', source: R + 'B529828365/' },
        { text: '"I walked in around 9:00 PM without a reservation. Great value for the price." — July 2026.', source: R + 'B531374598/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B46183946/', R + 'B496520051/', R + 'B513783364/', R + 'B518965614/', R + 'B520014472/', R + 'B523192883/', R + 'B524551170/', R + 'B526832365/', R + 'B529828365/', R + 'B531374598/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Local regulars; a priced menu helps ordering (December 2025). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-20-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目20番6号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518965614/', R + 'B531374598/'],
    price_note: 'À la carte prices from December 2025 and July 2026 reviews; kanpachi was ¥330 in December 2025 and ¥550 in July 2026.', last_checked: TODAY, items: [
      it('', '', 'Tuna nigiri, 2 pieces', '¥440', 'Nigiri', 'ask', 'no', 'December 2025 review.', 'tuna'),
      it('', '', 'Kanpachi nigiri, 2 pieces', '¥550', 'Nigiri', 'ask', 'no', 'July 2026 review; ¥330 in December 2025.', 'kanpachi'),
      it('', '', 'Salmon nigiri, 2 pieces', '¥330', 'Nigiri', 'ask', 'no', 'July 2026 review.', 'salmon'),
      it('', '', 'Anago nigiri, 2 pieces', '¥660', 'Nigiri', 'ask', 'no', 'December 2025 review.', 'anago'),
      it('', '', 'Oyster vinegar', '¥660', 'Dishes', 'ask', 'no', 'December 2025 review.', 'kaki_su'),
    ] }, {
    cuisine: '値段のはっきりしたアラカルトのある昭和の町の鮨屋、握りは1皿2貫 (2025〜2026年の口コミ)・口コミの値段: 酢牡蠣660円、カジキの漬け660円、カンパチ330円、まぐろ440円、アジ440円、いくら660円、穴子660円、赤貝660円 (2025年12月)、サーモン330円、カンパチ550円、ねぎとろ巻き660円 (2026年7月)・刺身の盛り合わせ、あん肝、アワビ、うざく、焼きふぐ、サザエ、はまぐり、バイ貝の煮つけ、メジカの焼き物、くじら、サラダ巻き、めはり寿司 (2025〜2026年)・旬のセコガニ (2024年11月)・1人3,500〜8,000円ほど (2025〜2026年)',
    neighborhood: '福島6丁目、JR福島駅から北へ徒歩10分ほどの静かな通り',
    gf_detail: '要確認。グルテンの情報なし。醤油の鮨、バイ貝の煮つけ、甘いたれのうなぎ。',
    vegan_detail: 'ヴィーガンではありません。魚と貝の鮨屋。',
    notes: '[鮨・福島、昭和の町の鮨屋のカウンター] JR福島駅から北へ10分ほどの静かな通りにある16席の町の鮨屋で、Aoki さんが20年ほど営み、インスタよりも地元の人に愛される店。品書きにはすべて値段があり、握りは1皿2貫で330〜660円ほど、刺身、酢牡蠣、焼きふぐ、あん肝、握りまでしっかり食べて6,000〜8,000円ほど、軽くなら3,500円。シャリとネタのバランスと落ち着いた接客が常連に好評で、奥には半個室のテーブルも。カードは AMEX のみ、日・月曜休み。',
  });
}

// ================================================================ nitro
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27107373/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_nitro_sonezaki', name: 'nitro', category: 'OMNI',
    lat: 34.699511, lng: 135.503583, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include homemade focaccia, pasta such as squid-ink tagliolini, fritters and zeppole.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on aged fish, sea urchin and seafood.',
    hours_raw: 'Daily 11:00–15:00 (last entry 13:00) and 17:00–22:00 (last entry 20:00); closing days not fixed (Tabelog). Five groups a day (Tabelog). Bookings need a reachable phone number; no cancellations by fax or voicemail (Tabelog). Opened October 12, 2018 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 16 seats: 6 at the counter, a table for 4 and a private room for 6; non-smoking (Tabelog). Children welcome with a reservation, kids\' menu, strollers welcome (Tabelog). Service charge: Tabelog\'s Japanese field says 無し (none); its machine translation says a charge is added.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sonezaki, a standalone black-fronted building near Togano-cho — 10 min from Higashi-Umeda Stn',
    cuisine: 'Seasonal creative Italian with Japanese technique, built on aged fish; wine pairings and non-alcoholic cocktails (Tabelog) · courses (Tabelog, tax included): Mercato short lunch, 6 items ¥5,800; Mare full lunch, 8 items ¥7,800; nitro full dinner, 8 items ¥12,000; an Albatross course with full wine pairing (September 2026) · an August 2026 dinner: sea-urchin espuma and edamame zeppole, sweet-corn soup, striped-jack carpaccio with dill, apple, tomato and mustard sauce, cold cream squid-ink tagliolini with white-fish fritters, fish with zucchini sauce, coconut parfait with mascarpone, pineapple and coriander · rosemary oil by dropper for the bread; Genovese pasta (May–June 2026) · canelé made at a sister café in Fukushima (July 2026)',
    website: null, gmaps: gm('nitro 曽根崎 イタリアン'), menu_url: null,
    notes: "[Italian · Umeda, Sonezaki, aged-fish Italian behind a black facade] A sixteen-seat creative Italian behind a black facade a short walk from Higashi-Umeda, open since 2018 and taking only five groups a day, which makes its private room popular for lunches and celebrations. The kitchen ages fish Japanese-style and serves it in Italian courses: striped-jack carpaccio with an apple-dill sauce, a cold squid-ink tagliolini with fritters, sea-urchin espuma, bread with rosemary oil from a dropper. Lunch courses are ¥5,800 and ¥7,800, dinner ¥12,000; wine pairings and good cocktails. Children welcome with a booking.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Sommelier (Tabelog)'], origin: null, background: 'Shop text (Tabelog): a hidden space behind a black exterior; a creative blend of Japanese and Italian cuisine featuring aged fish and seasonal ingredients, served on carefully chosen tableware; wine pairings; lunch as well; five groups a day. Opened October 12, 2018. A July 2026 diner heard of a sister café in Fukushima where the canelé is made.', philosophy: 'Ageing fish to bring out umami, applying Japanese technique to Italian cooking (Tabelog).', specialty: 'Aged-fish courses.',
      anecdotes: [
        { text: '"It was my first time having a cold cream pasta, but the chill really enhanced the sauce, making it incredibly tasty." — August 2026.', source: R + 'B533952781/' },
        { text: '"I had a refreshing experience using a small dropper to apply fragrant rosemary oil on the bread for the first time." — June 2026.', source: R + 'B530096085/' },
        { text: '"The restaurant\'s specialty, dishes made with \'aged fish,\' were served, and my satisfaction level was through the roof" — September 2026.', source: R + 'B534858806/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B529082242/', R + 'B529124427/', R + 'B530096085/', R + 'B530140117/', R + 'B531565227/', R + 'B532298399/', R + 'B532793665/', R + 'B533952781/', R + 'B534858806/', R + 'B535050782/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Each dish explained in detail (June 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎1-6-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎一丁目6番10号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Mercato short lunch, 6 items', '¥5,800', 'Lunch', 'ask', 'no', 'Tabelog listing; September 2026 review.', 'mercato'),
      it('', '', 'Mare full lunch, 8 items', '¥7,800', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'mare'),
      it('', '', 'nitro full dinner, 8 items', '¥12,000', 'Dinner', 'ask', 'no', 'Tabelog listing.', 'nitro_dinner'),
    ] }, {
    cuisine: '熟成魚を軸にした和の技法の季節の創作イタリアン、ワインのペアリングとノンアルコールのカクテル (食べログ)・コース (食べログ、税込): 6品の Mercato のショートランチ5,800円、8品の Mare のフルランチ7,800円、8品の nitro のフルディナー12,000円、ワインのフルペアリングつきの Albatross コース (2026年9月)・2026年8月のディナー: ウニのエスプーマと枝豆のゼッポリーネ、とうもろこしのスープ、ディルとりんごとトマトとマスタードのソースのシマアジのカルパッチョ、白身魚のフリットをのせたイカ墨のタリオリーニの冷たいクリームパスタ、ズッキーニのソースの魚、マスカルポーネとパイナップルとパクチーのココナッツのパフェ・パンにスポイトでローズマリーのオイル、ジェノベーゼのパスタ (2026年5〜6月)・福島の姉妹店のカフェで作るカヌレ (2026年7月)',
    neighborhood: '曽根崎、兎我野町の近くの黒い外観の一軒家。東梅田駅から徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。コースには自家製のフォカッチャ、イカ墨のタリオリーニなどのパスタ、フリットやゼッポリーネがある。',
    vegan_detail: 'ヴィーガンではありません。熟成魚、ウニ、魚介が中心のコース。',
    notes: '[イタリアン・梅田曽根崎、黒い外観の熟成魚のイタリアン] 東梅田から少し歩いた黒い外観の一軒家にある16席の創作イタリアンで、2018年から。1日5組だけなので、個室はランチやお祝いに人気。和の技法で魚を熟成させてイタリアンのコースに: りんごとディルのソースのシマアジのカルパッチョ、フリットをのせた冷たいイカ墨のタリオリーニ、ウニのエスプーマ、スポイトでローズマリーのオイルをたらすパン。ランチは5,800円と7,800円、ディナーは12,000円、ワインのペアリングとカクテルも好評。予約すれば子どもも可。',
  });
}

save();
