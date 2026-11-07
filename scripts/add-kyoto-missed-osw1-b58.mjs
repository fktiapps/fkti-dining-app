// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 58.
//   + 京のおへそ Kyo no Oheso (white oden and saba sushi with Kyoto vegetables, off Nishiki Market)
//   + だるま 京都河原町店 Daruma, Kyoto Kawaramachi (all-you-can-eat sushi, kushikatsu and yakitori, 8F; 株式会社WILL)
//   + 7T+ Seven Tea Plus (tea stand and shop, over 70 teas; oat-milk lattes)
//   + インパルス Impulse (old smoking kissaten on Kawaramachi, siphon coffee)
//   - 漁港直送 漁師小屋 錦市場店, 居酒屋 まるや, メゾポタミアケバブハウス, 鮨酒我流 京都店, すしざんまい 京都河原町店,
//     辻利 京都祇園店, 地階稲吉: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26017136, 26038118 (skipped),
//   26015048 (skipped), 26030066 (skipped), 26044514 (skipped), 26030798 (skipped), 26041448, 26036306, 26001140,
//   26024402 (skipped), 26022608 (skipped).
//   None of the four drafted is in data/kyoto.json by name (おへそ/Oheso, だるま 京都河原町/Daruma, 7T+, インパルス/Impulse)
//   or address (船屋町386, 奈良屋町291 河原町DECK by COAST 8F, 塩屋町73-1, 奈良屋町292).
//   Same-name count (same brand or operator only): おへそ, 7T+, インパルス — one shop each. だるま 京都河原町店 — invoice holder
//   株式会社ＷＩＬＬ (Osaka, NTA register); its site (will-food.com) gives no shop list and its size is not established —
//   drafted and flagged; a July 2026 reviewer notes it is not related to 串かつだるま. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: おへそ お通し代400円（税込）※コースの場合お通しいただいて
//   おりません; none listed for the other three.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (おへそ March 2026,
//   7T+ January 2026, インパルス February 2026).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-58');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038118', '漁港直送 漁師小屋 錦市場店: too thin to verify — two short reviews since 2025 (February and October 2026); Tabelog also lists the same brand at Kyoto Avanti and Shinsekai, operator not established');
skip('26015048', '居酒屋 まるや: too thin to verify — one review since 2025 (February 2026, a single line); Hot Pepper lists a sister 居酒屋〇家 まるや四条木屋町店, operator not established');
skip('26030066', 'メゾポタミアケバブハウス: too thin to verify — a takeaway kebab stand with three short reviews (December 2025 – July 2026) and no prices or menu beyond kebab roll and kebab rice');
skip('26044514', '鮨酒我流 京都店: no reviews on Tabelog');
skip('26030798', 'すしざんまい 京都河原町店: national chain — Tabelog’s name search lists Sushi Zanmai shops at Tsukiji (honten), Nagoya Nishiki, Susukino, Yokohama, Yurakucho, Shimbashi, Tenjin, Kinshicho and more');
skip('26024402', '辻利 京都祇園店: chain — Tabelog’s name search lists Tsujiri shops at Kyoto Tower Sando, Alde Shin-Osaka, Kyoto Gion, Uji (honten) and the Tsujiri Chaho shops, among others');
skip('26022608', '地階稲吉: large parent — 稲吉 is on the brief’s large-parent list under セントラルホールディングス (Nagoya)');

// ================================================================ 京のおへそ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017136/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_kyo_no_oheso', name: '京のおへそ (Kyo no Oheso)', category: 'OMNI',
    lat: 35.00548, lng: 135.766442, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. White oden in chicken and bonito broth, saba sushi, sashimi, obanzai and tonjiru; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth is chicken stock with bonito dashi, and the menu is fish-led (Tabelog).',
    hours_raw: '17:00–23:00 daily (Tabelog). Reservations accepted; recommended, as seats fill (Tabelog; October 2025). Otoshi ¥400 including tax, not charged with a course (Tabelog, original お通し代400円（税込）※コースの場合お通しいただいておりません). Ordering by QR code (January and March 2026). Cards and PayPay (Tabelog). 50 seats with private rooms (Tabelog). Smoking outside only (Tabelog). Half portions for solo diners (August 2026). Just off Nishiki Market, about 5 min from Hankyu Kawaramachi; wheelchair-accessible enough for an October 2025 group (Tabelog; reviews). Opened 6 December 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi just off Nishiki Market — 5 min from Hankyu Kawaramachi',
    cuisine: 'An izakaya of Kyoto vegetables and local sake from Kyoto and Shiga (Tabelog; August 2026) · white oden of Kyoto vegetables in chicken and bonito broth, even in summer — lettuce and broccoli among the pieces (Tabelog; 2025–2026) · saba sushi with thick, fatty mackerel (Tabelog; January–June 2026) · generous sashimi platters; smoked daikon with blue cheese; tonjiru (2026) · quick-drink set until 20:00 with a drink, small appetizer, sashimi and one dish (September 2026) · Oheso course ¥6,000 with free-flow drinks, 8 dishes including homemade yuba and oden (August 2026)',
    website: null, gmaps: gm('京のおへそ 御幸町'), menu_url: TB + 'dtlmenu/',
    notes: '[Oden and saba sushi · off Nishiki Market, Kyoto vegetables] A friendly izakaya a step from Nishiki Market, known for white oden of Kyoto vegetables in a chicken-and-bonito broth and a hefty saba sushi, with big sashimi platters, local sake and a good-value quick-drink set before 20:00. ¥400 otoshi; QR ordering.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)', 'Owner (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes dishes made with Kyoto vegetables and signature saba sushi and white oden. Reviewers mention a knowledgeable owner (March 2026) and an attentive head chef (August 2026).',
      philosophy: null, specialty: 'White oden; saba sushi.',
      anecdotes: [
        { text: 'An October 2025 group with a wheelchair user, sheltering from the Nishiki crowds and rain, were drawn in by the welcoming staff.', source: R + 'B516478604/' },
        { text: 'A June 2026 drop-in without a booking took a counter seat for summer oden, sashimi and saba sushi.', source: R + 'B530950524/' },
      ],
      japanese_sources_summary: '食べログ: 京のおへそ、居酒屋・海鮮・おでん、中京区御幸町通蛸薬師下ル船屋町386、阪急河原町駅から徒歩5分ほど、毎日17:00〜23:00、お通し代400円 (税込、コースは不要)、カード・PayPay可、50席、個室あり、店外で喫煙、2010年12月6日オープン、京野菜の料理、名物の鯖寿司と鶏ガラと鰹出汁の白いおでん。口コミ (2025〜2026年、英語): 錦市場のすぐそば、QRコードで注文、白おでん (レタス、ブロッコリー)、鯖寿司、刺身の盛り合わせ、いぶりがっこのブルーチーズ、豚汁、20時までのちょい飲みセット、飲み放題付きのおへそコース6,000円 (自家製湯葉など8品)、京都と滋賀の地酒、ハーフサイズあり、物知りな店主、気の利く料理長。',
      confidence: 'medium', sources: [TB, R + 'B516478604/', R + 'B521623988/', R + 'B523982055/', R + 'B529887521/', R + 'B530140993/', R + 'B530950524/', R + 'B533989683/', R + 'B534695827/', R + 'B538163197/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; ¥400 otoshi; half portions available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通蛸薬師下ル船屋町386',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.00548, 135.766442); cross-checked: GSI 京都府京都市中京区船屋町386番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B533989683/'],
    price_note: 'Course price from an August 2026 review; otoshi from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'White oden of Kyoto vegetables', '', 'Oden', 'ask', 'no', 'Tabelog; chicken and bonito broth.', 'shiro_oden'),
      it('鯖寿司', 'saba-zushi', 'Saba sushi', '', 'Signature', 'ask', 'no', 'Tabelog.', 'saba_zushi'),
      it('', '', 'Oheso course with free-flow drinks (8 dishes)', '¥6,000', 'Courses', 'ask', 'no', 'August 2026.', 'course'),
      it('', '', 'Otoshi (not with courses)', '¥400', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '京野菜と京都・滋賀の地酒の居酒屋 (食べログ、2026年8月)・鶏ガラと鰹の白いスープの京野菜の白おでん。夏でもあり、レタスやブロッコリーも (食べログ、2025〜2026年)・脂ののった厚い鯖の鯖寿司 (食べログ、2026年1〜6月)・たっぷりの刺身の盛り合わせ、いぶりがっこのブルーチーズ、豚汁 (2026年)・20時までのちょい飲みセット: ドリンク、小鉢、刺身、選べる一品 (2026年9月)・自家製湯葉やおでんなど8品の飲み放題付きおへそコース6,000円 (2026年8月)',
    neighborhood: '錦市場すぐの御幸町。阪急河原町から徒歩5分',
    gf_detail: '要確認。鶏と鰹の出汁の白おでん、鯖寿司、刺身、おばんざい、豚汁。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。おでんの出汁は鶏ガラと鰹で、魚中心の献立 (食べログ)。',
    notes: '[おでんと鯖寿司・錦市場すぐ、京野菜] 錦市場から一歩の気さくな居酒屋。鶏と鰹の出汁の京野菜の白おでんと大ぶりの鯖寿司が名物で、たっぷりの刺身、地酒、20時までのお得なちょい飲みセットも。お通し400円、QRコードで注文。',
  });
}

// ================================================================ だるま 京都河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041448/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']); const WE = day(['16:00', '24:00']);
  put({
    id: 'kyoto_daruma_kawaramachi', name: 'だるま 京都河原町店 (Daruma, Kyoto Kawaramachi)', category: 'OMNI',
    lat: 35.006543, lng: 135.769482, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an all-you-can-eat izakaya built on kushikatsu, gyoza and sushi; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna sushi, yakitori, beef dishes and kushikatsu (2026 reviews).',
    hours_raw: 'Monday–Friday 17:00–24:00; Saturday, Sunday and holidays 16:00–24:00 (Tabelog). Reservations accepted, including online (Tabelog; September 2026). All-you-can-eat-and-drink courses from ¥2,480; the 2-hour course of about 270 items with chutoro sushi ¥5,480, or ¥4,980 when booked for the 17:00 slot (2026 reviews). QR ordering after the first dishes (September 2026). Cards, IC cards, iD, QUICPay and QR payments (Tabelog). 164 seats with about ten private rooms for up to 8 and a banquet hall; sunken kotatsu seating; window seats with a city view (Tabelog; September 2026). On the 8th floor of 河原町DECK by COAST, about 6 min from Hankyu Kawaramachi (Tabelog). Opened 1 July 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi north of Takoyakushi — 8F, 6 min from Hankyu Kawaramachi',
    cuisine: 'An all-you-can-eat-and-drink izakaya of sushi, kushikatsu, yakitori and gyoza — 30 kinds of sushi and over 200 menu items (Tabelog) · 2-hour course of about 270 items with hon-maguro chutoro sushi on red-vinegar rice, ¥5,480 (2026) · freshly fried kushikatsu; teppan gyoza with cheese, green-onion salt or kimchi; Imabari-style yakitori (2026) · domestic beef yukhoe and tataki, harami steak, roast beef; potato salad; chorogi salad (2026) · lighter courses from ¥2,480 (August 2026)',
    website: 'https://will-food.com/', gmaps: gm('だるま 京都河原町店'), menu_url: TB + 'dtlmenu/',
    notes: '[All-you-can-eat izakaya · Kawaramachi 8F, chutoro sushi and kushikatsu] A big eighth-floor izakaya with a city view and private rooms, running two-hour all-you-can-eat-and-drink courses of around 270 items — chutoro sushi, kushikatsu, teppan gyoza, yakitori and beef — for about ¥5,000, or from ¥2,480 for lighter plans. QR ordering.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T4120001183828 is registered to 株式会社ＷＩＬＬ of Osaka (NTA register), whose website gives no shop list. A July 2026 reviewer notes it is not related to the Kushikatsu Daruma chain.',
      philosophy: null, specialty: 'All-you-can-eat chutoro sushi.',
      anecdotes: [
        { text: 'A May 2026 diner booked the 17:00 slot and got the ¥5,480 course for ¥4,980.', source: R + 'B489821026/' },
        { text: 'A September 2026 first-timer, who had found it on Instagram, got a window seat over the city.', source: R + 'B536174364/' },
      ],
      japanese_sources_summary: '食べログ: だるま 京都河原町店、居酒屋・寿司・焼き鳥、中京区奈良屋町291 河原町DECK by COAST 8F、京都河原町駅から徒歩6分、月〜金 17:00〜24:00、土日祝 16:00〜24:00、予約可、カード・電子マネー・QR決済可、164席、個室約10室と宴会場、2024年7月1日オープン、寿司30種、串カツ、焼き鳥、餃子、200品以上の食べ飲み放題、適格請求書 T4120001183828 (株式会社ＷＩＬＬ)。口コミ (2026年、英語): 本鮪中トロ寿司を含む約270品の2時間食べ飲み放題5,480円 (17時の枠は4,980円)、2,480円からのコース、揚げたての串カツ、鉄板餃子 (チーズ、ねぎ塩、キムチ)、今治風焼き鳥、国産牛のユッケとたたき、ハラミ、ローストビーフ、ポテサラ、チョレギサラダ、QRコードで注文、掘りごたつ、窓際の席、串かつだるまとは別。',
      confidence: 'medium', sources: [TB, 'https://will-food.com/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4120001183828', R + 'B489821026/', R + 'B531276319/', R + 'B532606104/', R + 'B534036258/', R + 'B535082392/', R + 'B536174364/', R + 'B537716430/', R + 'B537870340/', R + 'B538257410/', R + 'B538263589/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Big all-you-can-eat izakaya; QR ordering; private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区奈良屋町291 河原町DECK by COAST 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006543, 135.769482); cross-checked: GSI 京都府京都市中京区奈良屋町291番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B489821026/', R + 'B535082392/', R + 'B538257410/'],
    price_note: 'Course prices from 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', '2-hour all-you-can-eat-and-drink course (~270 items, chutoro sushi)', '¥5,480', 'Courses', 'no', 'no', '2026; ¥4,980 for the 17:00 slot.', 'tabehodai'),
      it('', '', 'All-you-can-eat-and-drink course (lighter)', 'from ¥2,480', 'Courses', 'no', 'no', 'August 2026.', 'light_course'),
    ] }, {
    cuisine: '寿司、串カツ、焼き鳥、餃子の食べ飲み放題の居酒屋。寿司30種、200品以上 (食べログ)・赤酢のシャリの本鮪中トロ寿司を含む約270品の2時間コース5,480円 (2026年)・揚げたての串カツ、チーズ・ねぎ塩・キムチの鉄板餃子、今治風の焼き鳥 (2026年)・国産牛のユッケとたたき、ハラミステーキ、ローストビーフ、ポテトサラダ、チョレギサラダ (2026年)・2,480円からの軽いコース (2026年8月)',
    neighborhood: '蛸薬師の北の河原町。8階、阪急河原町から徒歩6分',
    gf_detail: 'グルテンフリーではない。串カツ、餃子、寿司が中心の食べ放題の居酒屋。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鮪の寿司、焼き鳥、牛肉、串カツ (2026年の口コミ)。',
    notes: '[食べ放題の居酒屋・河原町の8階、中トロ寿司と串カツ] 街を見下ろす8階の大きな居酒屋で個室も多い。中トロ寿司、串カツ、鉄板餃子、焼き鳥、牛肉など約270品の2時間食べ飲み放題が5,000円ほど、軽いプランは2,480円から。QRコードで注文。',
  });
}

// ================================================================ 7T+
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036306/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://7teaplus.com/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_7t_plus_tea', name: '7T+ (Seven Tea Plus)', category: 'OMNI',
    lat: 35.002558, lng: 135.765226, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teas, oat-milk lattes and tea gelato; straight teas contain no wheat, but nothing is labelled gluten-free (official site; 2025–2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: the lattes are made only with oat milk, sweetened with agave syrup if you like (May, June and August 2026), and the straight teas are plant-based; the tea gelato is not described.',
    hours_raw: '11:00–19:00 daily; hours may change (official site; Tabelog). No cards; e-money and QR payments (Tabelog). Tea leaves for sale with tasting before you buy; staff help you choose (2025–2026 reviews). Takeaway drinks (August 2026). On Ayanokoji east of Tominokoji, near Nishiki Market (Tabelog; May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ayanokoji-Tominokoji, south of Shijo — near Nishiki Market',
    cuisine: 'A tea stand and shop with over 70 teas, herbs and dried fruits sorted into seven groups by fermentation — green, white, yellow, oolong, black, red, plus herbal and flower teas (July 2026) · teas such as Kochi goishi-cha ¥980, Tottori roasted bancha ¥700, Mengding yellow bud, Taiwanese high-mountain oolong, Shizuoka benifuuki black tea, Asamiya okumidori matcha (official site) · matcha lattes with a choice of leaf — okumidori, tsuyuhikari, yabukita — made with fermented oat milk only (May–August 2026) · iced Japanese oolong (September 2026) · tea gelato such as Awa bancha and Tottori roasted bancha (June 2026)',
    website: SITE, gmaps: gm('7T+ 京都 塩屋町'), menu_url: SITE,
    notes: '[Tea stand · near Nishiki Market, 70 teas and oat-milk matcha] A lab-like tea shop where staff help you smell and taste your way through over seventy teas — Japanese, Chinese and Taiwanese — and make matcha lattes from your chosen leaf with oat milk only, plus tea gelato. Leaves to take home; no cards.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe knowledgeable, friendly staff who suggest teas and brew samples (March and November 2025, May 2026), and a shop laid out like a laboratory with petri dishes of tea leaves (November 2025, September 2026).',
      philosophy: null, specialty: 'Oat-milk matcha latte; tea tasting.',
      anecdotes: [
        { text: 'A November 2025 visitor came in for gelato, forgot about it among the dishes of tea leaves, and was matched to a tea with remarkable precision.', source: R + 'B530878113/' },
        { text: 'A March 2026 guest was struck by a grape-leaf tea from a winery among the world teas.', source: R + 'B525111149/' },
      ],
      japanese_sources_summary: '公式サイト: 7T＋ (セブンティープラス)、下京区塩屋町73-1、11:00〜19:00、茶葉の販売 (碁石茶980円、焙煎ばん茶700円、蒙頂黄芽、杉林渓高山烏龍茶、和紅茶べにふうき、朝宮おくみどりの抹茶など)、ジェラート。食べログ: カフェ、綾小路富小路東入、電子マネー・QR決済可、カード不可。口コミ (2025〜2026年、英語): 発酵度で7つに分けた70種以上の茶葉・ハーブ・ドライフルーツ、試飲して選べる、詳しく親切な店員、茶葉を選べる抹茶ラテはオーツミルクのみ (アガベシロップ)、和烏龍のアイスティー、阿波晩茶や焙煎ばん茶のジェラート、実験室のような店内。',
      confidence: 'medium', sources: [SITE, TB, R + 'B525111149/', R + 'B527417700/', R + 'B528820639/', R + 'B529263929/', R + 'B530255391/', R + 'B530878113/', R + 'B532904820/', R + 'B533810477/', R + 'B536055470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help you smell and taste teas before choosing; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路富小路東入塩屋町73-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002558, 135.765226); cross-checked: GSI 京都府京都市下京区塩屋町73番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B530255391/'],
    price_note: 'Leaf prices from the official site; drink prices not read.', last_checked: TODAY, items: [
      it('', '', 'Matcha latte with oat milk (choice of leaf)', '', 'Drinks', 'ask', 'vegan', '2026 reviews; agave syrup to sweeten.', 'oat_latte'),
      it('焙煎ばん茶', 'baisen bancha', 'Roasted bancha (Tottori), leaf', '¥700', 'Tea leaves', 'gf', 'vegan', 'Official site.', 'bancha'),
      it('碁石茶', 'goishi-cha', 'Goishi-cha (Kochi), leaf', '¥980', 'Tea leaves', 'gf', 'vegan', 'Official site.', 'goishicha'),
      it('', '', 'Tea gelato (e.g. Awa bancha)', '', 'Gelato', 'ask', 'ask', 'June 2026.', 'gelato'),
    ] }, {
    cuisine: '発酵度で7つに分けた70種以上の茶葉、ハーブ、ドライフルーツのティースタンドとお店 (2026年7月)・高知の碁石茶980円、鳥取の焙煎ばん茶700円、蒙頂黄芽、台湾の高山烏龍茶、静岡のべにふうきの和紅茶、朝宮のおくみどりの抹茶など (公式サイト)・おくみどり、つゆひかり、やぶきたから茶葉を選べる抹茶ラテは、発酵オーツミルクのみ (2026年5〜8月)・和烏龍のアイスティー (2026年9月)・阿波晩茶や鳥取の焙煎ばん茶のジェラート (2026年6月)',
    neighborhood: '四条の南の綾小路富小路。錦市場の近く',
    gf_detail: '要確認。お茶、オーツミルクのラテ、お茶のジェラート。ストレートのお茶に小麦は入らないが、グルテンフリーの表示はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンの選択肢あり。ラテはオーツミルクのみで、甘さはお好みでアガベシロップ (2026年5・6・8月)、ストレートのお茶も植物性。ジェラートの材料は書かれていない。',
    notes: '[ティースタンド・錦市場近く、70種のお茶とオーツミルクの抹茶] 実験室のような店で、店員と一緒に香りを嗅ぎ試飲しながら日本・中国・台湾の70種以上のお茶を選べる。好きな茶葉の抹茶ラテはオーツミルクのみで、お茶のジェラートも。茶葉の持ち帰りあり、カード不可。',
  });
}

// ================================================================ インパルス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001140/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '21:00']);
  put({
    id: 'kyoto_impulse_kissa', name: 'インパルス (Impulse)', category: 'OMNI',
    lat: 35.006704, lng: 135.768987, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Siphon coffee, café au lait, coffee float and ice cream; no food or gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black siphon coffee is plant-based; the lattes come topped with whipped cream (February and March 2026).',
    hours_raw: 'Monday–Wednesday and Friday–Sunday 9:00–21:00; closed Thursday; hours may change (Tabelog). Cash only — no cards, e-money or QR (Tabelog; February 2026). Smoking allowed at every seat — reviewers stress this (November 2025; February, March and August 2026). Menu set into the tables (August 2026). On Kawaramachi-dori north of Takoyakushi, about 10 min from Hankyu Kawaramachi or Keihan Sanjo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori north of Takoyakushi',
    cuisine: 'An old-style kissaten brewing every cup by siphon, with a long coffee list (February and August 2026) · strong blend; Guatemala; Java and other single origins (2025–2026) · café au lait ¥800 and café latte ¥750, both topped with whipped cream (February–March 2026) · coffee float about ¥950 (June 2026) · rich ice cream, possibly homemade (July 2025)',
    website: null, gmaps: gm('インパルス 河原町 喫茶'), menu_url: null,
    notes: '[Kissaten · Kawaramachi-dori, siphon coffee and smoking] A deep, retro coffee house on Kawaramachi with jazz playing and menus under the table glass, brewing each cup by siphon — blends, single origins, whipped-cream lattes and floats. One of the few cafés left where every seat allows smoking; cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a retro, jazz-filled coffee house with a deep room and a striking storefront and sign (August 2026), and note that it is one of the few remaining cafés where smoking is allowed throughout (2025–2026).',
      philosophy: null, specialty: 'Siphon coffee.',
      anecdotes: [
        { text: 'An August 2026 passer-by was drawn in by the lettering of the sign and ordered an unusual Java coffee.', source: R + 'B527129484/' },
        { text: 'A December 2025 pair stopped in after a Chinese lunch for an iced coffee and a Guatemala on an unseasonably warm day.', source: R + 'B519241622/' },
      ],
      japanese_sources_summary: '食べログ: インパルス、喫茶店・カフェ、中京区河原町通蛸薬師上ル奈良屋町292、京阪三条駅・阪急河原町駅から徒歩10分、月〜水・金〜日 9:00〜21:00、木曜定休、現金のみ。口コミ (2025〜2026年、英語): すべてサイフォンで淹れるコーヒー、ストロングブレンド、グアテマラ、ジャワ、ホイップをのせたカフェオレ800円とカフェラテ750円、コーヒーフロート950円ほど、濃いアイスクリーム、全席喫煙可、ジャズ、テーブルに埋め込んだメニュー、レトロな店内。',
      confidence: 'medium', sources: [TB, R + 'B511100298/', R + 'B517326063/', R + 'B519241622/', R + 'B521797530/', R + 'B522967548/', R + 'B524136700/', R + 'B524911551/', R + 'B527129484/', R + 'B529930896/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking at every seat; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通蛸薬師上ル奈良屋町292',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006704, 135.768987); cross-checked: GSI 京都府京都市中京区奈良屋町292番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522967548/', R + 'B524136700/', R + 'B529930896/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Siphon coffee (blend or single origin)', '', 'Coffee', 'gf', 'vegan', '2025–2026.', 'siphon'),
      it('', '', 'Café au lait (with whipped cream)', '¥800', 'Coffee', 'ask', 'no', 'February 2026.', 'cafe_au_lait'),
      it('', '', 'Café latte (with whipped cream)', '¥750', 'Coffee', 'ask', 'no', 'March 2026.', 'latte'),
      it('', '', 'Coffee float', 'about ¥950', 'Coffee', 'ask', 'no', 'June 2026.', 'float'),
    ] }, {
    cuisine: '一杯ずつサイフォンで淹れる昔ながらの喫茶店。コーヒーの種類が多い (2026年2月・8月)・ストロングブレンド、グアテマラ、ジャワなど (2025〜2026年)・ホイップをのせたカフェオレ800円とカフェラテ750円 (2026年2〜3月)・コーヒーフロート950円ほど (2026年6月)・濃いアイスクリーム、自家製か (2025年7月)',
    neighborhood: '蛸薬師の北の河原町通',
    gf_detail: '要確認。サイフォンのコーヒー、カフェオレ、コーヒーフロート、アイスクリーム。食べ物やグルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのサイフォンコーヒーは植物性。ラテにはホイップクリームがのる (2026年2月・3月)。',
    notes: '[喫茶店・河原町通、サイフォンと喫煙] ジャズが流れ、テーブルのガラスの下にメニューがある奥行きのあるレトロな喫茶店。一杯ずつサイフォンで淹れるブレンドやストレート、ホイップのラテ、フロート。今では珍しい全席喫煙可の店、現金のみ、木曜定休。',
  });
}

save();
