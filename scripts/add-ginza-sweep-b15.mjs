// Ginza Station half-mile sweep (805 m), batch 15 — hidden placeholders researched in place. Researched 2026-10-24.
//   ~ tokyo3_near_s    銀座 長寿庵 (soba since 1935; 3rd-generation owner Amano; MOM_AND_POP)
//   ~ tokyo3_ginza_57  銀座 しのはら (owner-chef Shinohara Takemasa; Michelin 2★, Tabelog Gold; MOM_AND_POP)
//   ~ tokyo3_ginza_49  天ぷら 阿部 銀座本店 (tempura; chef with 30 years at Nadaman; Bib Gourmand)
// Deferred: わんぱく (no Tabelog listing found), 銀座 玉ゐ, 高橋屋, 小十, 中村藤吉, すし鮮, 築地玉寿司 本店, 竹葉亭.
// Sources: Tabelog /en/ listings (restaurant-provided highlights) + dated 2025–2026 reviews. The gorp.jp shop sites are
// gnavi-hosted and block scripted fetches — not circumvented. Pins: the placeholders' existing Tabelog + GSI + shop-site checks.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座 長寿庵
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130202/13007705/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '15:00'], ['17:30', '21:30']);
  put({
    id: 'tokyo3_near_s', name: '銀座 長寿庵 (Ginza Chōjuan)', category: 'MOM_AND_POP',
    lat: 35.672637, lng: 139.77085,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. No source says the soba is 100% buckwheat, and soba is commonly made with some wheat. The dipping sauce is a sweet Tokyo-style tsuyu, normally soy-based. The menu also has tempura, katsudon and curry nanban. Ask whether any juwari (100% buckwheat) soba and wheat-free tsuyu are available.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. The specialities are duck: duck seiro and duck nanban, which the shop is said to have originated. Soba tsuyu is normally made with bonito dashi, and no source describes this shop\'s. Hijiki, eggplant and pickles appear as side dishes, but no vegan dish is described.',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:30) and 17:30–21:30 (L.O. 21:00); closed Saturdays, Sundays and holidays (Tabelog). Cards accepted. Evening appetiser charge ¥310.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, a narrow lane off Shōwa-dōri toward Takarachō — 3 min from Ginza-itchōme or Shintomichō',
    cuisine: 'Soba since 1935 · duck seiro and duck nanban · soba courses with sake', cuisine_type: 'udon_soba',
    website: 'https://ge8t100.gorp.jp/', gmaps: gm('銀座 長寿庵 銀座1-21-15'), menu_url: null,
    notes: "[Mom & Pop · soba since 1935] A soba house in a back lane of Ginza 1-chōme, opened on 29 April 1935 (Tabelog) and now run by the third generation, Mr Amano. Diners know it as the birthplace of duck soba: kamo seiro (cold soba with a hot duck dip) and duck nanban, which nearly every table orders. In 2026 the large duck seiro was ¥1,600, served with thin, firm soba, plenty of duck and a lightly sweet Tokyo-style dip. One reviewer reports the soba is hand-made from buckwheat grown on the shop's own Hokkaidō farm and stone-ground. Also on the menu: grated-daikon soba with nameko, curry nanban with pork, katsudon, and an evening of soba-shop snacks (itawasa, sashimi, eggplant) with sake; a ¥9,000 course with drinks is available upstairs. Fifty-six table seats over two floors.",
    chef_bio: {
      chef_name: 'Mr. Amano (third-generation owner; kanji and given name not in sources)', roles: ['owner (3rd generation)'],
      origin: 'Opened 29 April 1935 (Tabelog); Ginza 1-21-15',
      background: 'A 2026 diner names the current owner as Mr. Amano, the third generation. The same diner writes that the 長寿庵 name traces to an Edo-period soba house in today\'s Yaesu 2-chōme from which many Kantō soba shops descend; that is the diner\'s account.',
      philosophy: null,
      specialty: 'Kamo seiro and duck nanban; hand-made soba; soba-shop snacks with sake.',
      anecdotes: [
        { text: '"The current owner, Mr. Amano, is the third generation… hand-made soba made from buckwheat grown on their own farm in Hokkaido, ground using a stone mill."', source: R + 'B536939261/' },
        { text: '"This place is known as the origin of duck nanban, so I ordered that. Almost everyone around me seemed to be ordering the same dish." — October 2026.', source: R + 'B537716402/' },
        { text: 'A July 2026 regular: "When it comes to soba in this area, I often rely on this place" — duck soba with extra noodles, ¥1,600, in about seven minutes.', source: R + 'B531462235/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 長寿庵、銀座1-21-15、開店1935年4月29日、月〜金11:00〜15:00・17:30〜21:30、土日祝休、56席(1階20・2階36、全テーブル)、お通し310円、カード可。2026年の口コミ: 三代目店主・Amanoさん(口コミ)、鴨南蛮・鴨せいろ発祥の店とされる、北海道の自家農園のそばを石臼挽きの手打ち(口コミ)、鴨せいろ大盛1,600円、おろしそば(なめこ)、カレー南蛮、カツ丼、飲み放題付きコース9,000円。',
      confidence: 'medium', sources: [TB, R + 'B536939261/', R + 'B537716402/', R + 'B531462235/', R + 'B532589023/', R + 'B537080771/'],
    },
    cultural_comfort: { level: 'japanese', note: 'A traditional soba house with table seating on two floors and a private room upstairs; Japanese menu. Weekdays only.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Tempura and katsudon on the menu alongside the soba.', source: R + 'B537080771/' }],
      soy_sauce_wheat: [{ text: 'A characteristically Tokyo-style dipping sauce with a subtle sweetness.', source: R + 'B531462235/' }],
      vegan_cross_contact: [{ text: 'Duck seiro and duck nanban are the signature dishes.', source: R + 'B534054172/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-21-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: shop site address 東京都中央区銀座一丁目21番15号 6m; GSI 6m (2026-09-28 pass)`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531462235/', R + 'B534054172/', R + 'B531055911/', R + 'B536939261/', R + 'B537080771/'],
    price_note: 'No menu read. Dishes and prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('元祖鴨せいろ', 'ganso kamo seiro', 'Original duck seiro (cold soba, hot duck dip), large', '¥1,600', 'Soba', 'no', 'no', 'July–August 2026.', 'kamo_seiro'),
      it('鴨南蛮', 'kamo nanban', 'Duck nanban (hot duck soba)', '', 'Soba', 'no', 'no', '', 'kamo_nanban'),
      it('おろしそば', 'oroshi soba', 'Cold soba with grated daikon and nameko', '', 'Soba', 'no', 'ask', 'Tsuyu not described.', 'oroshi_soba'),
      it('カレー南蛮', 'karee nanban', 'Curry nanban soba (pork, onion)', '', 'Soba', 'no', 'no', '', 'curry_nanban'),
      it('カツ丼', 'katsudon', 'Katsudon', '', 'Rice', 'no', 'no', '', 'katsudon'),
      it('板わさ', 'itawasa', 'Itawasa (kamaboko with wasabi)', '', 'Snacks', 'ask', 'no', '', 'itawasa'),
      it('', '', 'Soba course with all-you-can-drink', '¥9,000', 'Course', 'no', 'no', 'October 2026; upstairs.', 'soba_course'),
    ] }, {
    cuisine: '1935年創業のそば・鴨せいろと鴨南蛮・酒と楽しむそば屋のコース',
    neighborhood: '銀座一丁目、昭和通りから宝町方面へ入った細い路地。銀座一丁目駅・新富町駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。そばが十割(そば粉100%)という情報はなく、そばは小麦を含むことが多いです。つゆは甘めの東京風で、通常は醤油ベース。天ぷら、カツ丼、カレー南蛮もあります。十割そばや小麦不使用のつゆがあるか確認してください。',
    vegan_detail: '要確認。名物は鴨せいろと、この店が発祥とされる鴨南蛮。そばつゆは通常鰹出汁で作られますが、この店のつゆの記述はありません。ひじき、茄子、漬物などの小鉢はありますが、ヴィーガン料理の記述はありません。',
    notes: '[個人店・1935年創業のそば] 銀座一丁目の路地裏にあるそば屋で、1935年4月29日開店(食べログ)、現在は三代目店主(口コミではAmanoさん)が営みます。鴨せいろや鴨南蛮の発祥の店として知られ、ほとんどの客が鴨を頼みます。2026年は鴨せいろ大盛1,600円で、細くコシのあるそばに鴨がたっぷり、ほんのり甘い東京風のつゆ。口コミには、北海道の自家農園のそばを石臼で挽いた手打ちとあります。なめこの入ったおろしそば、豚のカレー南蛮、カツ丼、夜は板わさ・刺身・茄子などのそば前と日本酒も。2階では飲み放題付き9,000円のコースも。1・2階で56のテーブル席。',
  });
}

// ================================================================ 銀座 しのはら
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13200949/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']), l = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo3_ginza_57', name: '銀座 しのはら (Ginza Shinohara)', category: 'MOM_AND_POP',
    lat: 35.672974, lng: 139.767871,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: "Ask well in advance. It is a single omakase course, and a regular's notes from many visits list fu (wheat gluten) again and again: red miso soup with fu, Shōnai fu, Daitokuji fu, and fried fu with miso. A Japanese course also leans on soy sauce and miso throughout. No source says whether the kitchen adapts the course for gluten, so say so when you book.",
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask in advance. The course centres on seafood and meat (sea urchin, crab, abalone, sea bream, duck breast, Hida beef) and Japanese dashi. No source mentions a vegetarian or vegan course.',
    hours_raw: 'Dinner Mon–Sat in two seatings, 17:00 and 20:30; lunch Tue, Thu and Sat from 12:00 in three seatings; closed Sundays (Tabelog). Omakase only. Cards accepted. Service charge added.',
    hours: { 0: d, 1: l, 2: d, 3: l, 4: d, 5: l }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme, basement of a back-street building marked by a small lantern — near Ginza-itchōme Stn',
    cuisine: 'Kaiseki-style Japanese omakase rooted in Shiga · famed hassun platter · Michelin two stars', cuisine_type: 'kaiseki',
    website: null, gmaps: gm('銀座 しのはら 銀座2-8-17'), menu_url: null,
    notes: "[Mom & Pop · Japanese omakase, Michelin ★★] Owner-chef Takemasa Shinohara trained at Kyoto restaurants including Sangencha and opened his own Shinohara in his hometown of Kōnan, Shiga, in his twenties. When it had become a destination, he left it behind and started again in Ginza in October 2016. A small lantern leads down to a calm room around an L-shaped counter of white wood, thirteen seats, with tableware down to old Baccarat. One omakase course (¥35,000 including tax in 2026, with seasonal extras such as crab or charcoal-grilled beef rice), changing monthly. Its signature is the hassun, a lavish platter of the season themed to the calendar, such as the Double Ninth in September. Michelin two stars, and The Tabelog Award Gold every year from 2017 to 2026. In October 2026 it marked ten years in Ginza and twenty since the first Shinohara, and many of his former cooks now run fully booked restaurants of their own. Book months ahead.",
    chef_bio: {
      chef_name: '篠原武将 (Takemasa Shinohara)', roles: ['owner-chef'],
      origin: 'Shinohara, Kōnan (Shiga), about 2006; Ginza Shinohara opened 6 October 2016',
      background: 'Trained at distinguished Kyoto restaurants including Sangencha (Tabelog profile; a 2026 diner romanises it Yamagencha); opened his first restaurant in his hometown, Kōnan, Shiga, in his twenties, and moved it to Ginza in 2016.',
      philosophy: 'Seasonal Japanese cuisine centred on Shiga ingredients, changing every month; presentation "as beautiful as a painting" (restaurant profile).',
      specialty: 'Hassun; Shiga ingredients; seasonal crab and matsutake; charcoal-grilled beef rice.',
      anecdotes: [
        { text: '"This October marks the 10th anniversary since they moved from my hometown of Shiga to Ginza, and it has been 20 years since the original \'Shinohara.\' Many of Takemasa Shinohara\'s disciples have now opened their own restaurants." — a diner on their 45th visit.', source: R + 'B334806143/' },
        { text: 'The September 2026 hassun was themed on the Double Ninth (chrysanthemum) festival.', source: R + 'B513138562/' },
        { text: 'A first-timer in October 2026 booked their next visit, four months out, before leaving.', source: R + 'B537430035/' },
      ],
      japanese_sources_summary: '食べログ(店舗提供の紹介文): 滋賀の名店「しのはら」が銀座へ、店主・篠原武将氏、2016年10月に「銀座 しのはら」として再出発、L字の白木カウンター、オールドバカラなどの器、おまかせコースのみ、七宝盛り、滋賀の食材の八寸、毎月替わり、京都の名店(Sangencha)などで修業。The Tabelog Award Gold 2017〜2026。13席、ディナー17:00・20:30の二部制、ランチは火木土12:00、日休、おまかせ35,000円(税込)、サービス料別。2026年の口コミ: ミシュラン二つ星、開店10周年・しのはら創業20年、弟子の多くが独立、重陽の八寸、タラバガニ、松茸、麩の料理多数。',
      confidence: 'high', sources: [TB, R + 'B334806143/', R + 'B537470987/', R + 'B513138562/', R + 'B378249494/', R + 'B537430035/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Reservation-only counter of thirteen; one course; very hard to book. Service charge added; cards accepted.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Course dishes include red miso soup with fu (wheat gluten), Shōnai fu, Daitokuji fu, and fried fu with miso.', source: R + 'B334806143/' }],
      soy_sauce_wheat: [{ text: 'Miso-based dishes (red miso soup, spicy vinegar miso, fu dengaku) recur through the course.', source: R + 'B334806143/' }],
      vegan_cross_contact: [{ text: 'Sea urchin, crab, sea bream roe, duck breast and Hida beef within the course.', source: R + 'B334806143/' }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-8-17 ハビウル銀座2 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog Award 2026 Gold; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (geo 35.672974,139.767871 matches the placeholder pin); ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB, R + 'B537430035/', R + 'B334806143/'],
    price_note: 'One omakase course at ¥35,000 including tax (Tabelog remarks), plus seasonal supplements; service charge extra.', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Omakase course (changes monthly)', '¥35,000', 'Course', 'ask', 'ask', 'Includes fu and miso dishes; tell them about allergies when booking.', 'omakase'),
      it('八寸', 'hassun', 'Hassun (seasonal platter, part of the course)', '', 'Course', 'ask', 'no', '', 'hassun'),
      it('', '', 'Seasonal supplements (e.g. king crab, charcoal-grilled beef rice to take home)', '', 'Supplements', 'ask', 'no', 'October 2026.', 'supplements'),
    ] }, {
    cuisine: '滋賀にルーツを持つ日本料理のおまかせ・名物の八寸・ミシュラン二つ星',
    neighborhood: '銀座二丁目、小さな灯籠が目印の路地裏のビル地下。銀座一丁目駅近く',
    gf_detail: '早めに相談してください。おまかせ1コースのみで、常連の訪問記録には麩(小麦グルテン)の料理が何度も出てきます(麩の赤だし、庄内麩、大徳寺麩、麩の味噌揚げなど)。日本料理なので醤油や味噌も多く使われます。グルテンに合わせてコースを変えてくれるかはどの情報源にもないので、予約時に伝えてください。',
    vegan_detail: '事前に相談してください。コースは雲丹・蟹・鮑・鯛・鴨・飛騨牛など魚介と肉、和の出汁が中心で、ベジタリアンやヴィーガンのコースの記述はありません。',
    notes: '[個人店・日本料理のおまかせ・ミシュラン二つ星] 店主の篠原武将さんは京都の名店(Sangencha)などで修業し、20代で故郷の滋賀・湖南市に「しのはら」を開業。全国から食通が訪れる店になったのち、そのすべてを置いて2016年10月に銀座で再出発しました。小さな灯籠を目印に地下へ降りると、白木のL字カウンター13席の静かな空間で、器はオールドバカラまで。料理はおまかせ1コース(2026年で税込35,000円、蟹や炭火焼の牛ご飯などの季節の追加あり)で毎月替わり、看板は重陽など暦をテーマにした華やかな八寸。ミシュラン二つ星、食べログアワードGoldを2017〜2026年連続受賞。2026年10月で銀座10年・しのはら創業20年を迎え、弟子の多くが予約困難店を営んでいます。予約は数か月先まで。',
  });
}

// ================================================================ 天ぷら 阿部 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13092132/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:00'], ['17:00', '21:00']), we = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'tokyo3_ginza_49', name: '天ぷら 阿部 銀座本店 (Tempura Abe, Ginza main shop)', category: 'OMNI',
    lat: 35.672109, lng: 139.764547,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Tempura batter is wheat flour, and the tendon sauce is soy-based. No gluten-free option is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. Vegetables such as eggplant, maitake, young corn and broccoli come in every set, but they are fried at the same counter as shrimp and fish; whether the oil is shared is not described. Tempura batter often contains egg, and the dipping sauce is normally bonito-based; no source describes this shop\'s batter or sauce.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–21:00; Sat, Sun & holidays 11:30–15:00 and 17:00–21:00; closed only 31 Dec–1 Jan (Tabelog). Cards and QR accepted. Dinner appetiser charge ¥1,100 per person.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Subaru Bldg B1F — 1 min from Ginza Stn exit A10',
    cuisine: 'Counter tempura · tendon and kakiage-don lunches · dinner courses', cuisine_type: 'tempura',
    website: 'https://tempura-abe-ginza.gorp.jp/', gmaps: gm('天ぷら 阿部 銀座本店 スバルビル'), menu_url: null,
    notes: "[Tempura · Bib Gourmand] A basement tempura counter a minute from Ginza Station, opened in April 2009. The restaurant says its chef spent thirty years at Nadaman, and pitches the counter at first-timers to counter tempura. Diners call it Michelin Bib Gourmand and a Tabelog top-100 tempura shop. Lunch is the draw: a shrimp tendon from about ¥1,000–1,500, a weekday-only kakiage-don piled high enough that overseas visitors photograph it, and a ¥3,300 tempura set of two large prawns, two fish, four vegetables and a tendon or ten-cha to finish. Dinner courses run from about ¥8,000, with a ¥1,100 appetiser charge. Thirteen counter seats and one table. The room is full of overseas guests, and staff are courteous with them.",
    chef_bio: {
      chef_name: 'Mr. Abe (阿部 — given name not in sources)', roles: ['tempura chef (Tabelog: 30 years at Nadaman)'],
      origin: 'Ginza 4-chōme; opened 10 April 2009 (Tabelog)',
      background: 'The restaurant\'s Tabelog highlight credits a tempura chef with thirty years at Nadaman. A diner mentions being greeted by "Mr. Abe". The 本店 (main shop) name suggests other branches; none are documented here.',
      philosophy: 'A counter that welcomes beginners to tempura (restaurant highlight).',
      specialty: 'Kakiage-don; large-shrimp tendon; tempura sets and courses.',
      anecdotes: [
        { text: '"Mr. Abe greeted me with great enthusiasm!… I totally understand why they would want to take pictures when such a huge kakiage rice bowl arrives!"', source: R + 'B455270653/' },
        { text: 'October 2026: ¥3,300 tempura set with young corn, maitake, sweetfish and whitebait, finished with a tendon or ten-cha.', source: R + 'B537058783/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら 阿部 銀座本店、銀座4-3-7 スバルビルB1F、2009年4月10日オープン、17席(カウンター13・テーブル4)、平日11:30〜14:00・17:00〜21:00、土日祝11:30〜15:00・17:00〜21:00、休みは大晦日と元日のみ、夜はお通し1,100円、店舗紹介「なだ万で30年の経験を持つ天ぷら職人」、平日限定かき揚げ丼。2026年の口コミ: ミシュラン・ビブグルマン、天ぷら百名店、天ぷらセット3,300円、海老天丼1,000〜1,500円、夜8,000円のコース。',
      confidence: 'medium', sources: [TB, R + 'B455270653/', R + 'B536576422/', R + 'B537058783/', R + 'B537732642/', R + 'B536986904/'],
    },
    cultural_comfort: { level: 'english', note: 'Many overseas guests; staff described as courteous to foreign customers. Counter seating; reservations taken.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Wheat-batter tempura; vegetables and seafood cooked at the same counter.', source: R + 'B537732642/' }],
      soy_sauce_wheat: [{ text: 'Tendon sauce "sweet but not overly so".', source: R + 'B353421206/' }],
      vegan_cross_contact: [{ text: 'Vegetables served alongside shrimp, whiting and conger eel in the same set.', source: R + 'B537732642/' }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-3-7 スバルビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: shop site address 東京都中央区銀座四丁目3番7号 2m; GSI 2m (2026-09-28 pass)`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537058783/', R + 'B537732642/', R + 'B537680433/', R + 'B536986904/', R + 'B536576422/'],
    price_note: 'No menu read. Prices from September–October 2026 reviews (the ¥1,500 tendon was quoted before tax).', last_checked: TODAY, items: [
      it('天ぷらセット', 'tenpura setto', 'Tempura set (2 large prawns, 2 fish, 4 vegetables, tendon or ten-cha)', '¥3,300', 'Lunch', 'no', 'no', 'October 2026.', 'tempura_set'),
      it('海老天丼', 'ebi tendon', 'Shrimp tendon', '¥1,000', 'Lunch', 'no', 'no', 'September 2026; ¥1,500 before tax for the deluxe.', 'ebi_tendon'),
      it('かき揚げ丼', 'kakiage don', 'Kakiage-don (weekday lunch)', '', 'Lunch', 'no', 'no', '', 'kakiage_don'),
      it('', '', 'Dinner tempura course', '¥8,000', 'Dinner', 'no', 'no', 'October 2026.', 'dinner_course'),
      it('', '', 'Extra tempura: conger eel, scallop, sea urchin', '', 'À la carte', 'no', 'no', '', 'extra_tempura'),
    ] }, {
    cuisine: 'カウンター天ぷら・天丼とかき揚げ丼のランチ・夜のコース',
    neighborhood: '銀座四丁目、スバルビルB1F。銀座駅A10出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。天ぷらの衣は小麦粉、天丼のタレは醤油ベースです。グルテンフリーの選択肢はありません。',
    vegan_detail: '要確認。どのセットにも茄子・舞茸・ヤングコーン・ブロッコリーなどの野菜が入りますが、海老や魚と同じカウンターで揚げます(油を分けているかは不明)。衣に卵を使うことが多く、天つゆは通常鰹出汁ですが、この店の衣やつゆの記述はありません。',
    notes: '[天ぷら・ビブグルマン] 銀座駅から1分の地下にある天ぷらのカウンターで、2009年4月開業。店によれば天ぷら職人は「なだ万」で30年の経験があり、カウンター天ぷらが初めての人も歓迎しています。口コミではミシュランのビブグルマン、食べログ天ぷら百名店とされます。人気はランチで、海老天丼(1,000〜1,500円ほど)、海外の客が写真を撮るほど山盛りの平日限定かき揚げ丼、大海老2本・魚2種・野菜4種に天丼か天茶で締める3,300円の天ぷらセット。夜はおよそ8,000円からのコースで、お通し1,100円。カウンター13席とテーブル1卓。海外からの客が多く、接客も丁寧と評判です。',
  });
}

save();
