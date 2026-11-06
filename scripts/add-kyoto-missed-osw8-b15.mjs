// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 15.
//   + 藤石 Fuji Ishi (50-year Gion kappo izakaya on a 5th floor; core list)
//   + 観山 Kanzan (counter kaiseki by an ex-Kitcho, ex-Hiiragiya chef, Takatsuji Takakura; core list)
//   + 志る幸 Shiruko (soup house since 1932, Rikyu bento; notable list)
//   + 京都肉割烹 みや田 Kyoto Niku Kappou Miyata (wagyu kappo courses in an 1890 townhouse; notable list)
//   Picked 2026-11-05 after batch 14. `queue.mjs kyoto-missed next core 200`: 藤石 26011795, リンツ 26028601 (skipped, chain),
//   PAUL 大丸京都店 26026651 (skipped, chain), 観山 26028193. `next notable 200`: 美濃吉本店 竹茂楼 26001001 (skipped, 9
//   same-name 美濃吉 shops), 志る幸 26000755, 京都肉割烹 みや田 26039467. Same-name check first: no other 藤石, 観山, 志る幸
//   or みや田 in our crawls. None of the four is in data/kyoto.json: grep by name and address (ギオンプラザ, 泉正寺町465,
//   真町100, 井筒町656) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028601', 'リンツ ショコラ ブティック＆カフェ 京都四条通り店: a branch of the Swiss chocolatier Lindt; our crawls alone hold 6 same-name リンツ ショコラ ブティック shops (13277017, 26028601, 26044343, 27105000, 27111170, 27145350) — 5+ same-name shops count as a chain (Greg, 2026-11-05).');
skip('26026651', 'PAUL 大丸京都店: a branch of the French bakery chain PAUL; our crawls alone hold 5 same-name PAUL shops (13004312, 26022816, 26026651, 26032246, 27114356) — 5+ same-name shops count as a chain (Greg, 2026-11-05).');
skip('26001001', '美濃吉本店 竹茂楼: head shop of the 美濃吉 group; our crawls hold 9 same-name 美濃吉 shops (26000869, 26001001, 26002738, 26003077, 26035035, 26035757, 27005624, 27045754, 27123514), including two more 竹茂楼 in hotels — 5+ same-name shops count as a chain (Greg, 2026-11-05).');

// ================================================================ 藤石
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26011795/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_fujiishi_gion', name: '藤石 (Fuji Ishi)', category: 'OMNI',
    lat: 35.004263, lng: 135.775580, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo izakaya dishes with ankake, tempura, grilled eel, duck and miso; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-focused kappo izakaya of sashimi, hamo, eel, sweetfish, duck, chicken and beef, with dashi dishes (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Monday to Saturday 17:00–23:00 (food last order 22:00); closed Sunday and holidays (Tabelog). Reservations accepted; call ahead to change or cancel; tables are released 30 minutes after the booked time (Tabelog); full on holidays, with walk-ins turned away (July 2025). An otoshi (お付き出し) of ¥770 per person (Tabelog original). The menu shows no prices (June, July and September 2025 reviews). 18 seats: 6 at the counter, 12 at tables; non-smoking (Tabelog). Cards and PayPay (Tabelog). 5th floor of the Showa-era Gion Plaza building, up a narrow alley north of Shijo off Hanamikoji; 5 min walk from Gion-Shijo Stn (Tabelog; April 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo, off Hanamikoji, 5th floor — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Gion kappo izakaya of seasonal fish and obanzai, with over 50 dishes on a daily menu and about 8 local sakes (Tabelog) · Kyoto duck aburi, grilled eel skewers, grilled sweetfish, hamo (Tabelog) · hamo and yuba (June 2025); beef tataki, sashimi, fish tempura (July 2025); grilled sanma, matsutake dobin-mushi (September 2025, September 2026); tempura, sashimi, steak, firefly-squid tempura with sweet miso (March 2026); ankake dishes (April 2026); grilled local chicken, salad (June 2026) · barley and sesame shochu (2026 reviews) · bills about ¥5,000–10,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('藤石 祇園 ギオンプラザビル'), menu_url: null,
    notes: '[Kappo izakaya · Gion off Hanamikoji, 50 years upstairs] A long-running Gion izakaya on the fifth floor of an old Showa building, reached by a narrow alley off Hanamikoji, serving seasonal fish and Kyoto home cooking from a daily list of fifty-plus dishes: hamo, duck aburi, grilled eel and sweetfish, dobin-mushi in autumn, with local sake. Prices are fair for Gion, but the menu shows none, which unsettled some visitors; one June 2025 guest was put off by the chef correcting staff in front of diners. A ¥770 otoshi. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) and staff'], origin: null,
      background: 'Per Tabelog: loved by locals in Gion for 50 years, with a menu written daily from the best ingredients of the day; the Instagram tag given is "#Fujiishi Honten". Reviewers in 2025–2026 describe a gentle owner (April 2025), a serious, sincere chef (September 2025) and well-trained, attentive staff (September 2026).',
      philosophy: 'Delicious seasonal dishes at reasonable prices (Tabelog).', specialty: 'Hamo; Kyoto duck aburi; grilled eel skewers.',
      anecdotes: [
        { text: '"Head north through a narrow alley that makes you wonder, \'Can I really go this way?\'" — April 2025.', source: R + 'B505909626/' },
        { text: 'A June 2025 visitor liked the hamo and yuba but felt pressure from the chef\'s corrections of staff in front of diners, and left soon after eating.', source: R + 'B508347391/' },
        { text: '"I found it a bit awkward that the menu didn\'t list prices, so I ended up asking each time." — September 2025.', source: R + 'B514615657/' },
        { text: 'A March 2026 guest who brought a pre-school child was warmly welcomed, and loved the firefly-squid tempura with sweet miso.', source: R + 'B524505131/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、東山区四条花見小路上1筋目東入 ギオンプラザビル5F、祇園四条駅から徒歩5分、月〜土 17:00〜23:00 (料理L.O.22:00)、日・祝休み、予約可 (変更・取消は電話で、30分の遅れで取消扱い)、お付き出し770円、18席 (カウンター6、テーブル12)、禁煙、カード・PayPay 可、祇園で50年地元に愛される、旬の魚とおばんざい、50品以上の日替わり、地酒約8種、京鴨のあぶり、鰻の串焼き、鮎、鱧。口コミ (2025年2月〜2026年9月、英語): 細い路地の奥の昭和のビル、鱧と湯葉、牛のたたき、さんま、松茸の土瓶蒸し、ほたるいかの天ぷら、品書きに値段がない、料理人がスタッフを客前で注意するのが気になったとの声 (2025年6月)、子連れも歓迎。',
      confidence: 'medium', sources: [TB, R + 'B487880086/', R + 'B505909626/', R + 'B508347391/', R + 'B508428358/', R + 'B514615657/', R + 'B524445305/', R + 'B524505131/', R + 'B528786608/', R + 'B530430466/', R + 'B536534294/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Fifth floor of an older building; no prices on the menu — ask; ¥770 otoshi; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区四条花見小路上1筋目東入 ギオンプラザビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004263, 135.775580); the address has no lot number and GSI matches only 京都府京都市東山区祇園町北側, so loc_precise false; kyoto_kansendo_gion is 9.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'The menu shows no prices (2025 reviews); only the ¥770 otoshi is listed (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Otoshi (table appetiser)', '¥770', 'Charge', 'ask', 'ask', 'Per person (Tabelog original お付き出し).', 'otoshi'),
      it('', '', 'Kyoto duck aburi', '', 'Signature', 'ask', 'no', 'Tabelog.', 'kamo_aburi'),
      it('', '', 'Grilled eel skewers', '', 'Signature', 'no', 'no', 'Tabelog.', 'unagi_kushi'),
      it('', '', 'Matsutake dobin-mushi', '', 'Seasonal', 'ask', 'no', 'Autumn.', 'dobin_mushi'),
    ] }, {
    cuisine: '旬の魚とおばんざいの祇園の割烹居酒屋、50品以上の日替わりの品書きと地酒約8種 (食べログ)・京鴨のあぶり、鰻の串焼き、鮎の塩焼き、鱧 (食べログ)・鱧と湯葉 (2025年6月)、牛のたたき、お造り、魚の天ぷら (2025年7月)、さんまの塩焼き、松茸の土瓶蒸し (2025年9月、2026年9月)、天ぷら、お造り、ステーキ、ほたるいかの天ぷらに甘い味噌 (2026年3月)、あんかけ (2026年4月)、地鶏の焼き物、サラダ (2026年6月)・麦焼酎、胡麻焼酎 (2026年の口コミ)・会計は5,000〜10,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条の北、花見小路を入ったビルの5階。祇園四条駅から徒歩5分',
    gf_detail: '要確認。あんかけ、天ぷら、鰻の串焼き、鴨、味噌を使う割烹居酒屋の料理。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、鱧、鰻、鮎、鴨、鶏、牛、だしの料理の魚中心の割烹居酒屋 (食べログ、2025〜2026年の口コミ)。',
    notes: '[割烹居酒屋・花見小路の路地、ビル5階で50年] 花見小路から細い路地を入った昭和のビルの5階にある、祇園で長く続く居酒屋。50品以上の日替わりの品書きで旬の魚と京の家庭料理を出す: 鱧、京鴨のあぶり、鰻や鮎の焼き物、秋は土瓶蒸し、地酒とともに。祇園にしては手頃だが品書きに値段がなく、戸惑う客もいる。2025年6月の客は料理人が客前でスタッフを注意するのが気になったと書いている。お付き出し770円。日曜休み。',
  });
}

// ================================================================ 観山
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26028193/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kanzan-kyoto.com/';
  const D = day(['18:00', '22:00']); const LD = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_kanzan_takatsuji', name: '観山 (Kanzan)', category: 'MOM_AND_POP',
    lat: 34.999915, lng: 135.762918, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask — and tell the shop in advance: allergies must be notified when booking and cannot be handled on the day (Tabelog). Kaiseki courses with dashi, soy-based sauces, fried dishes and mackerel sushi; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki courses of fish, eel, wagyu and dashi, though vegetables from a farm inside the Shugakuin Imperial Villa grounds are a focus (official site; 2023–2026 reviews).',
    hours_raw: 'Lunch Wednesday, Friday and Sunday 12:00–14:00 (last entry 12:00); dinner Tuesday to Sunday 18:00–22:00 (last entry 20:30); closed Monday (open on holidays), some irregular days and 26–31 December (official site; Tabelog). Reservation only, at least two days ahead — no same-day bookings; cancellation fees 100% on the day, 50% the day before, 30% two days before; allergies must be notified in advance (official site; Tabelog). Courses: lunch ¥11,000 and ¥15,000, dinner ¥22,000 and ¥26,000, tax included, plus a 10% service charge (official site; Tabelog original サービス料10%). 10 counter seats; non-smoking (Tabelog; official site). Cards (VISA, Master, JCB, AMEX, Diners) (official site; Tabelog). South side of Bukko-ji, Takatsuji-dori east of Takakura; 8 min walk from Karasuma or Shijo stations (official site; Tabelog). Opened 10 November 2016 (Tabelog; official site).',
    hours: { 1: D, 2: LD, 3: D, 4: LD, 5: D, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji Takakura, south of Bukko-ji — 8 min walk from Karasuma / Shijo stations',
    cuisine: 'Counter kaiseki by a chef with 16 years at Kyoto Arashiyama Kitcho and 8 at Hiiragiya ryokan, built on vegetables grown for the shop by a farm of 300 years\' standing inside the Shugakuin Imperial Villa (official site) · a monthly menu and hassun with a monthly theme, finishing with donabe rice — e.g. Shugakuin peas (official site; Tabelog; 2026 reviews) · the house plum sauce mixed with wasabi, served with sashimi and conger eel, a signature (2023–2026 reviews) · e.g. mackerel kizushi, fried crab shinjo, flounder, squid and tuna sashimi, namako oroshi-ae (February 2024); unagi simmered with sansho, fig, bonito with ponzu, Inca-no-mezame potatoes (October 2024); fried conger-eel bones, mackerel sushi in bamboo leaf, hojicha blancmange, kashiwa mochi (May 2026) · desserts homemade by the chef; mackerel sushi and the house seasonings to take away or ship (official site; May 2026) · antique Imari tableware (October 2024)',
    website: WEB, gmaps: gm('観山 京都 高辻高倉'), menu_url: null,
    notes: '[Kaiseki · Takatsuji Takakura, Kitcho-trained, Shugakuin vegetables] A ten-seat counter south of Bukko-ji where owner-chef 八木一真, after 16 years at Arashiyama Kitcho and 8 at Hiiragiya, cooks monthly kaiseki around vegetables grown for the shop at a 300-year-old farm inside the Shugakuin Imperial Villa. Sashimi with the house plum sauce and wasabi, a themed hassun, donabe rice and homemade sweets are the talk of reviews. Lunch ¥11,000–15,000 (Wed, Fri, Sun), dinner ¥22,000–26,000, plus 10% service. Book at least two days ahead; give notice of allergies then. Closed Monday.',
    chef_bio: { chef_name: '八木一真 (romaji not given in the sources)', roles: ['Owner-chef', 'Service staff'], origin: null,
      background: 'Per the official site: the owner, 八木一真, decided to become a cook as a student on discovering the joy of being told the food was delicious, trained for 16 years at Kyoto Arashiyama Kitcho and 8 years at Hiiragiya ryokan, and opened Kanzan; the shop marked its 10th anniversary on 10 November 2026. A July 2023 reviewer says the head chef comes from a family of pottery craftsmen. Reviewers describe the chef with a service staff member (January 2026) and the chef and the owner running the place together (May 2026). The official site carries a notice titled "ミシュランガイド京都・大阪2026" (April 2026).',
      philosophy: '"Particular about Kyoto vegetables — using vegetables raised in the land of the Shugakuin Imperial Villa, rich in water and soil" (official site).', specialty: 'Plum sauce with wasabi; monthly hassun; mackerel sushi.',
      anecdotes: [
        { text: '"I was told to mix wasabi into the plum sauce before tasting it. Skeptical, I tried it, and on the first bite... Wow!" — October 2025.', source: R + 'B515235328/' },
        { text: 'An August 2023 couple ended the evening chatting with the other guests and the chef, who shared tips on other Kyoto spots — and bought three bottles of the plum-wine soy sauce to take home.', source: R + 'B471612850/' },
        { text: 'The June 2026 hassun took the summer purification ring of reeds as its theme, which set the table talking.', source: R + 'B529609414/' },
      ],
      japanese_sources_summary: '公式サイト: 店主 八木一真、学生時代に料理の喜びを知り、京都嵐山吉兆で16年、柊家旅館で8年修行して観山を開業、修学院離宮の地で育った野菜 (300年の歴史ある農家)、2日前までの完全予約制、キャンセル料 当日100%・前日50%・2日前30%、昼は水・金・日 12:00〜14:00 (最終入店12:00) 11,000円・15,000円、夜 18:00〜22:00 (最終入店20:30) 22,000円・26,000円、税込・サービス料10%別、月曜定休 (祝日は営業)・不定休・12月26〜31日休業、カウンター10席、カード可、鯖寿司や合わせ調味料の持ち帰り・地方発送、2026年11月10日に10周年、お知らせ「ミシュランガイド京都・大阪2026」。食べログ: 日本料理・釜飯、下京区高辻通高倉泉正寺町465-2 たかくらビル1F、サービス料10%、アレルギーは事前に。口コミ (2023年3月〜2026年6月、英語): 梅だれにわさび、月替わりの八寸、土鍋ご飯、修学院の豆、自家製の甘味、伊万里の器、陶芸の家の出身。',
      confidence: 'high', sources: [WEB, TB, R + 'B297224423/', R + 'B442296017/', R + 'B467711021/', R + 'B468451574/', R + 'B471612850/', R + 'B491102808/', R + 'B515235328/', R + 'B521776489/', R + 'B529041834/', R + 'B529609414/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online at least two days ahead; notify allergies when booking; 10% service; cards accepted.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Allergies must be notified in advance; requests on the day cannot be accommodated (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通高倉東入ル泉正寺町465-2 たかくらビル 102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site updated October 2026; Tabelog reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (34.999915, 135.762918); cross-checked: GSI 京都府京都市下京区泉正寺町465番地 (lot) 9 m; mp_masuya is 86 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB],
    price_note: 'Course prices from the official site, tax included; 10% service extra.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥11,000', 'Lunch (Wed, Fri, Sun)', 'ask', 'no', '+10% service.', 'lunch_11000'),
      it('', '', 'Lunch course', '¥15,000', 'Lunch (Wed, Fri, Sun)', 'ask', 'no', '+10% service.', 'lunch_15000'),
      it('', '', 'Dinner course', '¥22,000', 'Dinner', 'ask', 'no', '+10% service.', 'dinner_22000'),
      it('', '', 'Dinner course', '¥26,000', 'Dinner', 'ask', 'no', '+10% service.', 'dinner_26000'),
    ] }, {
    cuisine: '京都嵐山吉兆で16年、柊家旅館で8年修行した店主のカウンター懐石。修学院離宮の中の300年続く農家が店のために育てる野菜が軸 (公式サイト)・月替わりの献立と、毎月テーマの変わる八寸、締めは土鍋ご飯 (例: 修学院の豆) (公式サイト、食べログ、2026年の口コミ)・名物はお造りや conger eel に合わせる自家製の梅だれとわさび (2023〜2026年の口コミ)・例: 鯖のきずし、蟹の揚げしんじょう、平目・いか・まぐろのお造り、なまこのおろし和え (2024年2月)、鰻の山椒煮、無花果、鰹のおろしポン酢、インカのめざめ (2024年10月)、conger eel の骨の揚げ物、笹で包んだ鯖寿司、ほうじ茶のブランマンジェ、柏餅 (2026年5月)・甘味は店主の手作り、鯖寿司や合わせ調味料の持ち帰り・地方発送も (公式サイト、2026年5月)・伊万里の古い器 (2024年10月)',
    neighborhood: '仏光寺の南、高辻高倉。烏丸駅・四条駅から徒歩8分',
    gf_detail: '要確認。アレルギーは予約時に伝える必要があり、当日は対応できない (食べログ)。だし、醤油系のたれ、揚げ物、鯖寿司のある懐石コース。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚、鰻、和牛、だしの懐石コース。ただし修学院離宮の地で育つ野菜が中心のひとつ (公式サイト、2023〜2026年の口コミ)。',
    notes: '[懐石・高辻高倉、吉兆仕込みと修学院の野菜] 仏光寺の南にあるカウンター10席の店。嵐山吉兆で16年、柊家で8年修行した店主 八木一真が、修学院離宮の中の300年続く農家で店のために育てられた野菜を軸に、月替わりの懐石を出す。お造りに自家製の梅だれとわさび、テーマのある八寸、土鍋ご飯、手作りの甘味が口コミで評判。昼11,000〜15,000円 (水・金・日)、夜22,000〜26,000円、サービス料10%別。2日前までに予約し、アレルギーはその時に伝える。月曜休み。',
  });
}

// ================================================================ 志る幸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000755/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://shirukou-kyoto.jp/';
  const H = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_shiruko_kawaramachi', name: '志る幸 (Shiruko)', category: 'OMNI',
    lat: 35.004233, lng: 135.770005, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Miso soups (white, red and clear) with a choice of fillings, and the Rikyu bento of grilled fish, chicken, miso-dressed vegetables, tofu and kayaku rice; no gluten information (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soups on dashi, and a bento with grilled salmon and chicken; a reviewer expecting a vegetarian meal found it was not (official site; 2026 reviews).',
    hours_raw: '11:30–15:00 (last entry 14:00) and 17:00–21:00 (last entry 20:00); closed Wednesday (open on holidays) and occasionally (Tabelog). The official site gives dinner last entry 19:00 and also closes Tuesday evening. Tabelog lists no reservations, but a reviewer booked by phone two days ahead (October 2026); kaiseki needs a reservation (official site). Queues form before holiday openings (September 2026). Cash only — no cards, e-money or QR (Tabelog). 29 seats: about 10 at the counter and a tatami room with 3 tables for 10–20; non-smoking (Tabelog). Low counter seats (August 2026). Takeaway (Tabelog). In a lane east of Kawaramachi just north of Shijo; 2 min walk from Kawaramachi Stn (Hankyu) (Tabelog; official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Lane east of Kawaramachi just north of Shijo — 2 min walk from Kawaramachi Stn',
    cuisine: 'Soup house founded in 1932: a cup of soup — white miso, red miso or clear — with over ten fillings to choose from, after the old custom of 汁講 where guests brought rice and the host served only soup (official site) · the Rikyu bento, a tea-style tenshin of five small dishes (e.g. grilled salmon, chicken, kogomi, cucumber with miso, yuzu-scented tofu), kayaku rice, white-miso soup and pickles, ¥3,300 in 2026 (official site; 2026 reviews) · soup fillings such as tofu, otoshi-imo (grated yam), sweet potato or sea bream for a supplement (2026 reviews) · à la carte from ¥550 and kaiseki by reservation (official site, older prices) · tai chirimen to take home (official site)',
    website: WEB, gmaps: gm('志る幸 京都 四条河原町'), menu_url: null,
    notes: '[Soup house · Kawaramachi, since 1932] A soup house down a lane off Kawaramachi, open since 1932, with a counter built like a Noh stage and seats styled on the railings of the Sanjo and Gojo bridges. The draw is the Rikyu bento (¥3,300): five small dishes, kayaku rice and a bowl of sweet white-miso soup — swap the tofu for grated yam or sweet potato. Light, gentle flavours; small portions. Cash only; queues before opening on holidays. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Head chef and cooks (unnamed)'], origin: null,
      background: 'Per the official site: founded in Showa 7 (1932); the name comes from 汁講, a frugal custom in which guests brought rice and the host provided only soup, said to descend from a Heian-period practice; the interior keeps the founder\'s touches — a counter modelled on a Noh stage and seats styled after the railings of the Sanjo and Gojo bridges. A September 2026 reviewer saw artisans and the head chef bustling about.',
      philosophy: '"The spirit of hospitality put into a single cup of soup" (official site).', specialty: 'Rikyu bento; white-miso soup.',
      anecdotes: [
        { text: '"The miso soup made with white miso was truly delicious; I even went searching for where to buy that miso afterward." — August 2026.', source: R + 'B533904096/' },
        { text: 'A September 2026 visitor arrived 20 minutes before a holiday opening to no queue — and found three groups waiting 15 minutes later.', source: R + 'B535957526/' },
        { text: '"When I looked up the Rikyu Bento on Tabelog, I imagined it would be more like a simple vegetarian meal, but it was completely different." — September 2026.', source: R + 'B536092895/' },
      ],
      japanese_sources_summary: '公式サイト: 志る幸 (しるこう)、昭和七年創業、「汁講」に由来、汁は白味噌・赤味噌・すましの三種、具は常時十種類以上、能舞台を模したカウンター、三条・五条大橋の欄干に見立てた席、名物の利久辨當 (茶事風の点心)、一品・汁物550円〜、懐石は要予約 (税・サービス料5%別)、お土産に鯛ちりめん、11:30〜15:00 (最終入店14:00)・17:00〜21:00 (最終入店19:00)、火曜の夜・水曜・不定休。食べログ: 日本料理・弁当、下京区西木屋町四条上ル真町100、河原町駅から徒歩2分、水曜休み、予約不可、現金のみ、29席、座敷 (10〜20名)、禁煙、テイクアウト。口コミ (2026年8月〜10月、英語): 利久弁当3,300円、白味噌汁、落とし芋やさつまいもに替えられる、かやくご飯、低いカウンター席、祝日は開店前から行列。',
      confidence: 'medium', sources: [WEB, WEB + 'reason.html', WEB + 'information.html', TB, R + 'B533248825/', R + 'B533904096/', R + 'B535509305/', R + 'B535911137/', R + 'B535927866/', R + 'B535937871/', R + 'B535957526/', R + 'B536092895/', R + 'B538391359/', R + 'B72962327/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order the Rikyu bento and choose the soup filling; cash only; low counter seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区西木屋町四条上ル真町100',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004233, 135.770005); GSI matches only the town 京都府京都市下京区真町, so loc_precise false; kyoto_ygrec is 22 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB + 'reason.html', R + 'B72962327/'],
    price_note: 'Rikyu bento ¥3,300 in 2026 reviews; the official site still shows older prices (bento ¥2,700, à la carte from ¥550).', last_checked: TODAY, items: [
      it('', '', 'Rikyu bento (5 dishes, kayaku rice, white-miso soup, pickles)', '¥3,300', 'Bento', 'ask', 'no', 'August–October 2026, tax included.', 'rikyu_bento'),
      it('', '', 'Soup (white miso, red miso or clear)', '', 'Soup', 'ask', 'no', 'Fillings to choose.', 'shiru'),
      it('', '', 'Kaiseki (reservation)', '', 'Kaiseki', 'ask', 'no', 'Official site: from ¥8,000 + tax and 5% service (older price).', 'kaiseki'),
    ] }, {
    cuisine: '昭和七年創業の汁の店: 白味噌、赤味噌、すましの汁に十種類以上の具から選ぶ。客が飯を持ち寄り会主が汁だけを設けた昔の「汁講」にちなむ (公式サイト)・名物の利久辨當は茶事風の点心: 小鉢5品 (焼き鮭、鶏、こごみ、胡瓜の味噌和え、柚子の香りの豆腐など)、かやくご飯、白味噌汁、香の物、2026年は3,300円 (公式サイト、2026年の口コミ)・汁の具は豆腐のほか、落とし芋、さつまいも、追加料金で鯛など (2026年の口コミ)・一品550円〜、懐石は要予約 (公式サイト、旧価格)・お土産に鯛ちりめん (公式サイト)',
    neighborhood: '四条のすぐ北、河原町の東の路地。河原町駅から徒歩2分',
    gf_detail: '要確認。白味噌・赤味噌・すましの汁と具、焼き魚、鶏、味噌和え、豆腐、かやくご飯の利久辨當。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしの汁と、焼き鮭や鶏の入る弁当。精進料理のようなものを想像していたら違ったという口コミも (公式サイト、2026年の口コミ)。',
    notes: '[汁の店・河原町、昭和七年創業] 河原町の路地にある昭和七年創業の汁の店。能舞台を模したカウンターと、三条・五条大橋の欄干に見立てた席がある。名物は利久辨當 (3,300円): 小鉢5品、かやくご飯、甘い白味噌汁。豆腐の具は落とし芋やさつまいもに替えられる。やさしい薄味で量は控えめ。現金のみ。祝日は開店前から行列。水曜休み。',
  });
}

// ================================================================ 京都肉割烹 みや田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039467/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_niku_kappo_miyata', name: '京都肉割烹 みや田 (Kyoto Niku Kappou Miyata)', category: 'OMNI',
    lat: 34.990263, lng: 135.756301, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu courses with ponzu, a tenderloin sandwich, beef tempura and spring rolls; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built entirely around Kyoto black wagyu (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 12:00–14:00 and 17:00–22:00, irregular closures (Tabelog). Courses only, no à la carte; bookings reserve a seat and the course is chosen on arrival; two-hour seating (Tabelog); premium anniversary courses are online-only (2026 reviews). 10% service charge (Tabelog original サービス料10%). 12 counter seats; private hire possible; non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX) (Tabelog). A machiya of 1890 at the end of a stone-paved alley off Kitakoji, 8–10 min walk from Kyoto Station (Tabelog; 2026 reviews). Opened 15 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitakoji off Shinmachi — 8 min walk from Kyoto Stn',
    cuisine: '"Niku kappo": Kyoto black wagyu served in kappo style at a counter (Tabelog) · courses ¥20,000 and ¥22,000 premium (2026 reviews) · e.g. seared wagyu with lotus-root sauce or ponzu jelly and figs, wagyu tataki, beef sashimi with swordtip squid, strip-loin rice bowl with pickled daikon, beef shabu-shabu soup, tenderloin sandwich, beef tempura or spring rolls, roast beef salad, Chateaubriand, sudachi sorbet (September–November 2026) · sake, shochu, wine (Tabelog) · birthday dessert plate on request (Tabelog)',
    website: null, gmaps: gm('京都肉割烹 みや田'), menu_url: null,
    notes: '[Wagyu kappo · near Kyoto Station, an 1890 townhouse] A twelve-seat counter in an 1890 Kyoto townhouse at the end of a quiet stone alley, eight minutes from Kyoto Station, that serves Kyoto black wagyu as a kappo course: seared with ponzu jelly, as tataki and sashimi, in a strip-loin rice bowl, a tenderloin sandwich, shabu-shabu soup and tempura. Courses about ¥20,000–22,000 plus 10% service; two-hour seatings. Open daily, lunch and dinner.',
    chef_bio: { chef_name: null, roles: ['Chefs at the counter (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 15 July 2023 in a Kyoto townhouse built in 1890 and remodelled, serving selected Kyoto beef in a style that highlights each cut ("meat kappo"); the invoice registration is a corporate number. Reviewers in 2026 describe watered garden stones at the entrance, high ceilings and cooking in front of the counter.',
      philosophy: 'Selected Kyoto beef served in a style that highlights the qualities of each cut (Tabelog).', specialty: 'Strip-loin and pickled-daikon rice bowl; tenderloin sandwich.',
      anecdotes: [
        { text: 'A mother and daughter in September 2026 were welcomed through a narrow alley where the garden had just been watered.', source: R + 'B535397892/' },
        { text: 'A September 2026 pair noted that the house took care not to seat guests too close together.', source: R + 'B535932582/' },
        { text: '"The sirloin course along with 2 to 3 drinks each came to just under JPY 40,000." — two guests, September 2026.', source: R + 'B535932582/' },
      ],
      japanese_sources_summary: '食べログ: 牛料理・ステーキ、下京区北小路通新町西入井筒町656、京都駅から徒歩8分、毎日 12:00〜14:00・17:00〜22:00、不定休、コースのみ (アラカルトなし)、予約は席のみで来店後にコースを選ぶ、2時間制、サービス料10%、12席 (カウンターのみ)、貸切可、禁煙、カード可、1890年築の京町家を改装、京都牛を肉割烹で、誕生日のデザートプレート、2023年7月15日オープン。口コミ (2026年9月〜11月、英語): コース20,000円・22,000円 (記念日のプレミアムはネット予約のみ)、和牛のあぶりとポン酢ジュレ、たたき、牛刺しとけんさきいか、ロースとたくあんのご飯、牛しゃぶのお椀、ヒレカツサンド、牛の天ぷらや春巻き、シャトーブリアン、すだちのシャーベット。',
      confidence: 'medium', sources: [TB, R + 'B500173161/', R + 'B535397892/', R + 'B535562719/', R + 'B535932582/', R + 'B536505173/', R + 'B536910133/', R + 'B537583071/', R + 'B537755639/', R + 'B538300776/', R + 'B538687926/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a seat, choose the course on arrival; two-hour seating; 10% service; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区北小路通新町西入井筒町656',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.990263, 135.756301); cross-checked: GSI 京都府京都市下京区井筒町656番地 (lot) 7 m; nearest Kyoto record over 50 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500173161/', R + 'B537583071/'],
    price_note: 'Course prices from October 2026 reviews; 10% service extra.', last_checked: TODAY, items: [
      it('', '', 'Niku kappo course', '¥20,000', 'Course', 'ask', 'no', 'October 2026.', 'course_20000'),
      it('', '', 'Niku kappo course, premium (online booking only)', '¥22,000', 'Course', 'ask', 'no', 'September–October 2026, tax included.', 'course_22000'),
      it('', '', 'Tenderloin sandwich', '', 'Course dish', 'no', 'no', 'Part of the course.', 'hire_sando'),
    ] }, {
    cuisine: '京都産の黒毛和牛をカウンターで割烹仕立てにする「肉割烹」 (食べログ)・コース20,000円、プレミアム22,000円 (2026年の口コミ)・例: 和牛のあぶりに蓮根のソースやポン酢のジュレと無花果、和牛のたたき、牛刺しとけんさきいか、ロースとたくあんのご飯、牛しゃぶのお椀、ヒレのサンド、牛の天ぷらや春巻き、ローストビーフのサラダ、シャトーブリアン、すだちのシャーベット (2026年9月〜11月)・日本酒、焼酎、ワイン (食べログ)・誕生日のデザートプレートも (食べログ)',
    neighborhood: '北小路通新町の西。京都駅から徒歩8分',
    gf_detail: '要確認。ポン酢、ヒレのサンド、牛の天ぷら、春巻きのある和牛のコース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。京都産の黒毛和牛だけのコース (食べログ、2026年の口コミ)。',
    notes: '[肉割烹・京都駅近く、明治の町家] 京都駅から徒歩8分、静かな石畳の路地の奥にある1890年築の町家のカウンター12席。京都産黒毛和牛を割烹のコースで出す: ポン酢ジュレのあぶり、たたきと牛刺し、ロースのご飯、ヒレのサンド、牛しゃぶのお椀、天ぷら。コースは2万〜2万2千円ほどでサービス料10%、2時間制。昼夜とも毎日営業。',
  });
}

save();
