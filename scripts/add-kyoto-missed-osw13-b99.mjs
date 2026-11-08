// Kyoto priority (kyoto-missed), worker osw13, batch 99 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 祇園 うを多, The Cellar KYOTO, 柳家本店, 炭火鶏焼 白久.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-99');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26013936', 'chain: マールブランシュ 大丸京都店 — マールブランシュ already ruled a chain (osw8-41: six shops in our crawls)');
skip('26045148', 'too thin to verify: 祇園 燈裏 has no Tabelog reviews');
skip('26030466', 'large parent: 蝶矢 is the umeshu-experience shop run by CHOYA shops, an in-house venture of the umeshu maker チョーヤ梅酒 (choya.co.jp news: 京都六角店, 京都三条店 and 鎌倉店) — a sub-brand of a large maker, as with 土井志ば漬本舗');
skip('26040948', 'chain: 餃子のかっちゃん 京都三条店 — 餃子のかっちゃん already ruled a chain (osw8-52)');
skip('26045538', 'chain: かにじぇんぬ 祇園 is the sixth かにじぇんぬ (Ginza, Azabu-Juban, Sapporo, Osaka, Kanazawa) of the QRAUD group, which runs 20+ restaurants (QRAUD press release, opening 16 October 2026)');

// ================================================================ 祇園 うを多
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000250/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_gion_uwota_roast_beef', name: 'ローストビーフとフレンチのお店 祇園 うを多 (Gion Uwota)', category: 'OMNI',
    lat: 35.002552, lng: 135.776009, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: French courses with sauces, grilled rice balls in tea and pastry desserts (2016–2026 reviews); the shop asks to be told of allergies in advance (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: roast Kuroge Wagyu, foie gras and eel courses (2023–2025 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun and holidays 11:30–15:00 and 18:00–22:00; closed Wednesday and the third Tuesday, plus irregular days. Reservations taken; tell the shop of allergies in advance. Service charge 10% at dinner only, no cover — Tabelog, Japanese original 「ディナータイムのみサービス料10％、チャージ料なし」. 40 seats with private rooms for 2–20 over two floors. Non-smoking (ashtray at the entrance at dinner). Cards; no e-money or QR. A February 2023 reviewer warns the phone is often unanswered after 20:00. A renovated townhouse in Gion-machi Minamigawa, a short walk from Hanamikoji.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion-machi Minamigawa near Hanamikoji — 10 min walk from Gion-Shijo',
    cuisine: 'A Kyoto-style French restaurant in a renovated Gion townhouse, built around Kuroge Wagyu roast beef (Tabelog; 2016–2026 reviews) · Dinner Course C: six seasonal courses with Kuroge Wagyu roast beef ¥15,000 — eel appetizer, foie gras with truffle (December 2025) · foie gras; roast beef as the main; little grilled rice balls in tea to finish; glazed desserts (April 2024) · lunch courses (2016; March 2026) · Wedgwood tableware (May 2024)',
    website: null, gmaps: gm('祇園 うを多 ローストビーフ'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto French & roast beef · Gion Minamigawa, a townhouse dining room] A renovated Gion machiya serving Kyoto-tinged French courses that peak with tender Kuroge Wagyu roast beef — foie gras with truffle, chazuke rice balls to finish — about ¥15,000 at dinner, cheaper at lunch, with private rooms upstairs. 10% service at dinner. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers since 2016 describe a friendly owner and staff in a Gion townhouse turned French restaurant, renovated again before December 2025, with roast beef as the signature and good value for Gion. Criticism: a reservation mix-up and an unanswered phone after 8 pm (February 2023).',
      philosophy: null,
      specialty: 'Kuroge Wagyu roast beef; Kyoto French courses.',
      anecdotes: [
        { text: 'April 2024: "The foie gras was the best I\'ve ever had in my life… The little grilled rice balls served with tea over them as a finale were cute and delightful."', source: R + 'B491287554/' },
        { text: 'March 2026: "Each dish was visually stunning… The staff were all very kind, skillfully gauging the right timing for service."', source: R + 'B527527384/' },
      ],
      japanese_sources_summary: '食べログ: ローストビーフとフレンチのお店 祇園 うを多、フレンチ・ヨーロッパ料理・日本料理、東山区祇園町南側570-170、京阪祇園四条駅から徒歩10分、月・火・木〜日・祝 11:30〜15:00・18:00〜22:00、水曜と第3火曜休み、不定休あり、予約可 (アレルギーは事前に)、原文で「ディナータイムのみサービス料10％、チャージ料なし」、40席、個室 (2〜20名)、禁煙 (夜は入口に灰皿)、カード可、電子マネー・QR不可、法人会員。口コミ (2016年11月〜2026年3月、英語): 町家を改装したフレンチ、黒毛和牛のローストビーフ、ディナーコースC (6品) 15,000円 (うなぎの前菜、フォアグラとトリュフ)、締めの焼きおにぎりの茶漬け、デザート、昼のコース、ウェッジウッドの器、気さくな店主、夜8時以降は電話がつながりにくい (2023年2月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B229101890', 'B286813836', 'B428957020', 'B454201253', 'B460791765', 'B466353527', 'B486176039', 'B491287554', 'B527527384'])) },
    cultural_comfort: { level: 'japanese', note: 'Private rooms; 10% service at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-170',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated December 2025 and March 2026.' },
    pin_source: `Tabelog ${TB} (35.002552, 135.776009); GSI resolves only the parent lot 京都府京都市東山区祇園町南側570番地, about 216m away — marked approximate; nearest pin kyoto_gion_kida 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B428957020/'],
    price_note: 'Dinner course price from a December 2025 review; 10% service at dinner.', last_checked: TODAY, items: [
      it('', '', 'Dinner Course C (six dishes, Kuroge Wagyu roast beef)', '¥15,000', 'Course', 'no', 'no', 'December 2025.', 'dinner_course'),
      it('', '', 'Lunch course', null, 'Course', 'no', 'no', 'March 2026.', 'lunch_course'),
    ] }, {
    cuisine: '黒毛和牛のローストビーフが主役の、祇園の町家を改装した京風フレンチ (食べログ、2016〜2026年の口コミ)・ディナーコースC: 季節の6品と黒毛和牛のローストビーフ15,000円、うなぎの前菜、フォアグラとトリュフ (2025年12月)・フォアグラ、メインのローストビーフ、締めの焼きおにぎりの茶漬け、つやのあるデザート (2024年4月)・昼のコース (2016年、2026年3月)・ウェッジウッドの器 (2024年5月)',
    neighborhood: '花見小路近くの祇園町南側。祇園四条から徒歩10分',
    gf_detail: 'グルテンフリーではない: ソースのフレンチのコース、茶漬けの焼きおにぎり、菓子のデザート (2016〜2026年の口コミ)。アレルギーは事前に伝えるよう案内あり (食べログ)。',
    vegan_detail: 'ヴィーガン不可: 黒毛和牛のローストビーフ、フォアグラ、うなぎのコース (2023〜2025年の口コミ)。',
    notes: '[京風フレンチとローストビーフ・祇園町南側、町家のダイニング] 祇園の町家を改装した京風フレンチで、主役はやわらかな黒毛和牛のローストビーフ。トリュフのフォアグラ、締めのお茶漬けの焼きおにぎりなど、夜は15,000円ほど、昼は手頃。2階に個室。夜はサービス料10%。水曜休み。',
  });
}

// ================================================================ The Cellar KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026494/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'kyoto_the_cellar_kyoto', name: 'The Cellar KYOTO', category: 'OMNI',
    lat: 35.009401, lng: 135.769416, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: French-style courses with sauces and a seasoned-rice finish (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood carpaccio, salmon and beef steak in the courses (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 17:30–22:30 (last entry 20:30; food last order 20:30, drinks 22:00); irregular closures. Reservation only — ring the intercom on the 2nd floor; a hidden door behind a bookshelf leads to the rooms (2024; 2026). No service charge — Tabelog, Japanese original 「なし」; no private-room fee with a course. 24 seats in fully private rooms (couple booths, sofa booths, tables) for up to 6; larger groups by phone. Cards, e-money and QR. 2nd floor of エアポートビル, just north-east of Kawaramachi-Sanjo. A bar area as well (October 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Sanjo north-east, 2nd floor — 3 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A secret-door restaurant and wine bar of private rooms serving French-style courses with Japanese ingredients (2022–2026 reviews) · six-course dinner ¥7,000 including tax and service (September 2024) · course examples: peach salad, sea bream and octopus carpaccio, sautéed salmon, beef steak, seasoned rice and fruit dessert, with wine pairings (September 2026) · homemade sauces and carefully chosen vegetables; sashimi (September 2022); seafood rice to finish (December 2023) · birthday plates with a photo on request (October 2025)',
    website: null, gmaps: gm('The Cellar KYOTO 河原町三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Hidden private-room dining · Kawaramachi-Sanjo, a bookshelf door] Ring the intercom, push a bookshelf aside and you are in a wine-cellar warren of private booths: French-style courses with Japanese ingredients (about ¥7,000 for six dishes in 2024) and wine pairings. Popular for dates and birthdays. Reservation only.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from 2022 to 2026 describe a hidden restaurant entered by intercom and a secret passage, with fully private rooms styled like a wine cellar, French presentation of Japanese ingredients and well-timed service — "It felt almost like there was a camera watching me!" (September 2022). Tabelog lists it as a corporate member; no operator is named.',
      philosophy: null,
      specialty: 'Private-room courses; wine pairing.',
      anecdotes: [
        { text: 'February 2026: "Once inside, I was amazed to see bookshelves lined up, and when one of them moved aside, it revealed a passageway."', source: R + 'B532573424/' },
        { text: 'September 2024: "We enjoyed 6 dishes for JPY 7,000, tax and service included."', source: R + 'B486261468/' },
      ],
      japanese_sources_summary: '食べログ: The Cellar KYOTO、レストラン・ワインバー、中京区河原町三条上ル1筋目東入ル恵比須町534-9 エアポートビル 2F、地下鉄京都市役所前駅から徒歩3分、毎日 17:30〜22:30 (最終入店20:30、料理 L.O. 20:30、ドリンク L.O. 22:00)、不定休、予約制、原文でサービス料「なし」、24席 (完全個室、カップル・ソファ・テーブル)、コースなら個室料なし、カード・電子マネー・QR可、法人会員。口コミ (2022年8月〜2026年9月、英語): インターホンで入り本棚の隠し扉から個室へ、ワインセラーのような個室、和の食材をフレンチの見せ方で、6品7,000円 (税・サービス込み、2024年9月)、桃のサラダ、鯛とたこのカルパッチョ、サーモンのソテー、牛ステーキ、炊き込みご飯、フルーツのデザート、ワインのペアリング、自家製ソース、刺身、海鮮ご飯、誕生日のプレートと写真、バーの利用も。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B455968244', 'B475701465', 'B486261468', 'B486688775', 'B496412436', 'B501325877', 'B501337789', 'B511341411', 'B512918981', 'B515683532', 'B532573424', 'B534978739'])) },
    cultural_comfort: { level: 'japanese', note: 'Reservation only; intercom entry; private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条上ル1筋目東入ル恵比須町534-9 エアポートビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009401, 135.769416); cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 28m; nearest pin kyoto_goichi_panino 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486261468/'],
    price_note: 'Course price from a September 2024 review (tax and service included).', last_checked: TODAY, items: [
      it('', '', 'Six-course dinner', '¥7,000', 'Course', 'no', 'no', 'September 2024.', 'dinner_course'),
      it('', '', 'Wine pairing', null, 'Drink', 'ask', 'ask', 'September 2026.', 'wine_pairing'),
    ] }, {
    cuisine: '個室だけの隠し扉のレストランとワインバーで、和の食材をフレンチ風のコースで (2022〜2026年の口コミ)・6品のディナー7,000円 (税・サービス込み、2024年9月)・コースの例: 桃のサラダ、鯛とたこのカルパッチョ、サーモンのソテー、牛ステーキ、炊き込みご飯、フルーツのデザートとワインのペアリング (2026年9月)・自家製のソースとこだわりの野菜、刺身 (2022年9月)、締めの海鮮ご飯 (2023年12月)・頼めば誕生日のプレートと写真 (2025年10月)',
    neighborhood: '河原町三条の北東、2階。京都市役所前から徒歩3分',
    gf_detail: 'グルテンフリーではない: ソースを使うフレンチ風のコースと炊き込みご飯の締め (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚介のカルパッチョ、サーモン、牛ステーキのコース (2025〜2026年の口コミ)。',
    notes: '[隠れ家の個室ダイニング・河原町三条、本棚の扉] インターホンを押し、本棚を動かすとワインセラーのような個室が並ぶ。和の食材のフレンチ風のコース (2024年は6品で約7,000円) とワインのペアリング。デートや誕生日に人気。予約制。',
  });
}

// ================================================================ 柳家本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002302/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.gojoryoin.gr.jp/yanagiya/';
  const H = day(['11:30', '13:30'], ['16:30', '21:30']);
  put({
    id: 'kyoto_yanagiya_honten_sanjo', name: '柳家本店 (Yanagiya Honten)', category: 'OMNI',
    lat: 35.008533, lng: 135.765043, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy for sushi and sashimi, fugu and hamo tempura, ponzu hotpots (2014–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, fugu, hamo and eel (2014–2025 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 11:30–13:30 and 16:30–21:30; closed Wednesday; hours may change. Reservations taken — needed for fugu and hamo courses (2019; December 2025). Counter in a long narrow "eel-bed" room and tatami seating; take-away bento. Cards. English menu (June 2020). On the corner of Sanjo-dori and Tominokoji. Founded 1926, third generation (November 2015 review).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori at Tominokoji — 7 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A sushi and Kyoto-seafood restaurant on Sanjo-dori since 1926, known in season for wild fugu and hamo courses (2014–2025 reviews) · winter: wild-fugu full course with grilled shirako, shirako tempura and hirezake (December 2025) · summer: hamo courses for Gion Matsuri; hamo dim sum lunch with pickled hamo roe and fried hamo bones (2020–2022); eel course with mackerel sushi (July 2019) · lunch sets at about ¥1,500 — sushi, tekka-don, kaisen-don, sashimi (2015); kaisen-don (2024) · take-away hamo katsu-ju bento ¥1,000 (June 2020); dashimaki praised (2016)',
    website: SITE, gmaps: gm('柳家本店 三条富小路'), menu_url: null,
    notes: '[Sushi & Kyoto seafood · Sanjo-dori at Tominokoji, since 1926] A third-generation sushi house in a long Kyoto "eel-bed" room on Sanjo-dori, with cheap lunch sets and, by reservation, wild-fugu feasts in winter and hamo courses in summer. Reviews of the everyday sushi are mixed. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'A November 2015 reviewer gives the founding as 1926, with the third generation in charge; in May 2016 "the restaurant is run by a young couple". In December 2025 "the chef personally provided attentive service at our table, handling the grilling and hot pot" for a wild-fugu course, and company year-end parties are held here. Criticism: a poor sushi lunch with sweet rice and slow service (May 2014), and no background music (December 2025).',
      philosophy: null,
      specialty: 'Wild fugu; hamo courses.',
      anecdotes: [
        { text: 'December 2025: "This restaurant that serves natural fugu truly stands out. I savored each dish, from grilled soft roe to soft roe tempura, and enjoyed the Hirezake until the very end."', source: R + 'B519753931/' },
        { text: 'July 2022: "In Kyoto, it\'s said that people have a tradition of eating conger eel during the Gion Matsuri festival… We thoroughly enjoyed a leisurely conger eel full-course meal."', source: R + 'B451637087/' },
      ],
      japanese_sources_summary: '食べログ: 柳家本店、日本料理・魚介料理・寿司、中京区三条通富小路角中之町23、京都市役所前から432m、月・火・木〜日 11:30〜13:30・16:30〜21:30、水曜休み、時間は変わることがある、カード可、カウンター・座敷、テイクアウト。口コミ (2014年5月〜2025年12月、英語): 1926年創業、三代目 (2015年11月)、若い夫婦が営む (2016年5月)、うなぎの寝床の店、天然ふぐのコース (焼き白子、白子の天ぷら、ひれ酒、2025年12月)、祇園祭のころの鱧のコース、鱧の点心ランチ、鱧の子の酢漬け、鱧の骨の唐揚げ、うなぎのコースとさば寿司 (2019年7月)、昼は約1,500円の寿司・鉄火丼・海鮮丼・刺身、持ち帰りの鱧カツ重弁当1,000円 (2020年6月)、だし巻き、寿司の昼は物足りない (2014年5月)、BGMがない (2025年12月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B111763644', 'B115538914', 'B199398887', 'B417928218', 'B427748858', 'B429216402', 'B451637087', 'B492110039', 'B519753931'])) },
    cultural_comfort: { level: 'english', note: 'English menu; book ahead for fugu and hamo courses.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通富小路角中之町23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated July 2025, December 2025 and July 2026.' },
    pin_source: `Tabelog ${TB} (35.008533, 135.765043); cross-checked: GSI 京都府京都市中京区中之町23番地 (lot) 16m; nearest pin kyoto_ushinohone_anaza 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B115538914/', R + 'B427748858/'],
    price_note: 'Only older prices in the sources (2015; 2020).', last_checked: TODAY, items: [
      it('', '', 'Lunch set (sushi, tekka-don, kaisen-don or sashimi)', '¥1,500', 'Lunch', 'no', 'no', 'November 2015.', 'lunch_set'),
      it('', '', 'Hamo katsu-ju bento (take-away)', '¥1,000', 'Bento', 'no', 'no', 'June 2020.', 'hamo_bento'),
      it('', '', 'Wild fugu course (winter)', null, 'Course', 'no', 'no', 'December 2025.', 'fugu_course'),
    ] }, {
    cuisine: '1926年から三条通にある寿司と京の魚の店で、旬には天然ふぐや鱧のコース (2014〜2025年の口コミ)・冬: 焼き白子、白子の天ぷら、ひれ酒の天然ふぐのコース (2025年12月)・夏: 祇園祭のころの鱧のコース、鱧の子の酢漬けや骨の唐揚げの付く昼の鱧の点心 (2020〜2022年)、さば寿司の締めのうなぎのコース (2019年7月)・約1,500円の昼の寿司、鉄火丼、海鮮丼、刺身 (2015年)、海鮮丼 (2024年)・持ち帰りの鱧カツ重弁当1,000円 (2020年6月)、評判のだし巻き (2016年)',
    neighborhood: '三条通富小路の角。京都市役所前から徒歩7分',
    gf_detail: 'グルテンフリーではない: 寿司や刺身の醤油、ふぐや鱧の天ぷら、ポン酢の鍋 (2014〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 寿司、ふぐ、鱧、うなぎ (2014〜2025年の口コミ)。',
    notes: '[寿司と京の魚・三条富小路、1926年から] 三条通の細長いうなぎの寝床の三代目の寿司屋。手頃な昼のセットと、予約すれば冬は天然ふぐ、夏は鱧のコース。普段の寿司の評価は分かれる。水曜休み。',
  });
}

// ================================================================ 炭火鶏焼 白久
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037060/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_sumibi_toriyaki_haku', name: '炭火鶏焼 白久 (Haku)', category: 'OMNI',
    lat: 35.009404, lng: 135.769795, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: salted chicken grilled yourself may suit, but karaage, fried cartilage, nyumen and tare do not (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a grill-your-own chicken izakaya (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 18:00–24:00; closing days not fixed. A January 2026 reviewer says it closes at 3 am — check. Reservations taken (seat type by phone; groups of 4+ by phone); 2-hour limit when busy. 22 seats: tables and a tatami area with children\'s toys (October 2026); private room for 10–15; whole-shop hire 20–25. Non-smoking. Cards; no e-money or QR. Up steep stairs to the 2nd floor, Ebisu-cho north of Kawaramachi-Sanjo.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Sanjo north, 2nd floor — 2 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A chicken izakaya where you grill branded chicken yourself over a shichirin (2025–2026 reviews) · assorted platters of 5 or 10 cuts — thigh, breast, skin, cartilage, hen — with wasabi salt and egg-yolk sauce (July 2025; October 2026) · chicken sashimi and liver sashimi; chicken yukhoe (2025–2026) · thigh karaage; fried cartilage; homemade potato salad with soft egg; yuba with ponzu (2025–2026) · shiso tsukune with egg sauce over rice; tamago-kake-gohan and chicken-broth nyumen to finish (May and October 2026)',
    website: null, gmaps: gm('炭火鶏焼 白久 河原町三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Grill-your-own chicken · north of Kawaramachi-Sanjo, shichirin yakitori] A cosy second-floor chicken izakaya where you grill the cuts yourself over charcoal — platters of five or ten — with fresh liver sashimi, karaage and TKG to finish; a tatami corner with toys suits families. Some found it pricey or short of stock. Open nightly.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog lists it as a corporate member. Reviewers in 2025–2026 praise very fresh branded chicken and pleasant staff; criticism: items out of stock (March 2026), a lukewarm, over-peppered nyumen (May 2026), chicken sashimi with "no texture at all" and value that "isn\'t that great" — just over ¥10,000 for a 10-skewer platter, four highballs and two dishes (May 2026), and slow drinks for a group of seven (May 2026).',
      philosophy: null,
      specialty: 'Self-grilled chicken platters; liver sashimi.',
      anecdotes: [
        { text: 'November 2025: "You can grill the chicken yourself on a charcoal grill, just like yakiniku! The freshness is outstanding, and the liver sashimi is especially amazing."', source: R + 'B516797241/' },
        { text: 'October 2026: "The restaurant also has a tatami area with children\'s toys, making it a family-friendly spot."', source: R + 'B537576375/' },
      ],
      japanese_sources_summary: '食べログ: 炭火鶏焼 白久、居酒屋・鶏料理、中京区河原町三条上る恵比須町534-13 2F、地下鉄京都市役所前駅から徒歩約2分、毎日 18:00〜24:00、不定休、予約可 (席の指定や4名以上は電話)、混雑時は2時間制、22席 (テーブル10、座敷12)、個室 (10〜15名)、貸切20〜25名、禁煙、カード可、電子マネー・QR不可、法人会員。口コミ (2025年7月〜2026年10月、英語): 七輪で自分で焼く鶏、5種・10種の盛り合わせ (もも、むね、皮、なんこつ、親鶏)、わさび塩と卵黄のたれ、鶏刺し、レバ刺し、鶏ユッケ、もも唐揚げ、なんこつの唐揚げ、半熟卵のポテサラ、湯葉ポン酢、しそつくね、締めの卵かけご飯と鶏だしのにゅうめん、子供のおもちゃのある座敷、朝3時までとの声 (2026年1月)、品切れが多い (2026年3月)、にゅうめんがぬるい (2026年5月)、コスパはいまひとつとの声 (2026年5月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B510116154', 'B513567973', 'B516002542', 'B516797241', 'B521889247', 'B522162989', 'B524463884', 'B525039644', 'B527250961', 'B528639174', 'B531107412', 'B537576375'])) },
    cultural_comfort: { level: 'japanese', note: 'Grill-it-yourself; steep stairs; family tatami corner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条上る恵比須町534-13 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009404, 135.769795); cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 11m; nearest pin mp_tetsunabe_gyoza_to_osake 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528639174/'],
    price_note: 'A May 2026 meal: 10-cut platter, four highballs and two dishes came to just over ¥10,000.', last_checked: TODAY, items: [
      it('', '', 'Assorted chicken platter (10 kinds)', null, 'Grill', 'ask', 'no', 'October 2025; May 2026.', 'chicken_platter'),
      it('', '', 'Liver sashimi', null, 'Sashimi', 'ask', 'no', 'November 2025.', 'liver_sashimi'),
      it('', '', 'Tamago-kake-gohan (finish)', null, 'Rice', 'ask', 'no', 'October 2026.', 'tkg'),
    ] }, {
    cuisine: '銘柄鶏を七輪で自分で焼く鶏の居酒屋 (2025〜2026年の口コミ)・5種か10種の盛り合わせ、もも、むね、皮、なんこつ、親鶏、わさび塩と卵黄のたれ (2025年7月、2026年10月)・鶏刺し、レバ刺し、鶏ユッケ (2025〜2026年)・もも唐揚げ、なんこつの唐揚げ、半熟卵の自家製ポテサラ、湯葉ポン酢 (2025〜2026年)・卵のたれをご飯にかけるしそつくね、締めの卵かけご飯と鶏だしのにゅうめん (2026年5月・10月)',
    neighborhood: '河原町三条の北、2階。京都市役所前から徒歩2分',
    gf_detail: '要確認: 塩で自分で焼く鶏は合うかもしれないが、唐揚げ、なんこつの唐揚げ、にゅうめん、たれは不可 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 自分で焼く鶏の居酒屋 (2025〜2026年の口コミ)。',
    notes: '[自分で焼く鶏・河原町三条の北、七輪の焼き鳥] 2階の居心地のよい鶏の居酒屋で、5種か10種の盛り合わせを七輪で自分で焼く。新鮮なレバ刺し、唐揚げ、締めの卵かけご飯。おもちゃのある座敷は家族連れにも。高め、品切れが多いという声も。毎晩営業。',
  });
}

save();
