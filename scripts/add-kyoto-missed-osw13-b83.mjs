// Kyoto priority (kyoto-missed), worker osw13, batch 83 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 京のかわば田, 北海道直送貝魚バル ざんぐり, ライチャスパイスカフェレストラン, もつ鍋・すき焼き いっしん.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-83');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京のかわば田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042226/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_kyo_no_kawabata_shijo', name: '京のかわば田 (Kyo no Kawabata)', category: 'OMNI',
    lat: 35.004768, lng: 135.772491, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, ponzu and sesame dipping sauces, sukiyaki sauce and saikyo-miso grilled fish (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu shabu-shabu and sukiyaki, sashimi and dashi-cooked kamameshi; the daily obanzai lunch is vegetable-led but not described as vegan (Tabelog; 2025 reviews).',
    hours_raw: 'Tabelog: daily 11:00–23:00 (last order 22:00); closing days may vary. A June 2025 review gives lunch 11:00–16:00 (last order) and dinner 17:00–22:00 (last order). Reservations taken; the few river-view counter seats go first (November 2025). 22 seats: a counter facing the Kamo River and sunken-kotatsu private rooms for 4–8; private hire up to 50. Tabelog says non-smoking; an August 2025 review says all seats allowed smoking — ask. Multilingual menu (English, Chinese, Korean); smartphone ordering (September 2026). Cards, transit IC, e-money and QR (PayPay and others). 5th floor of the 鴨東四条ビル on the east bank at Shijo; a reviewer warns not to confuse it with a similarly named building just south (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'East bank of the Kamo River at Shijo — 2–3 min walk from Gion-Shijo',
    cuisine: 'A Japanese izakaya on a 5th floor with a counter overlooking the Kamo River (Tabelog; 2025–2026 reviews) · Beef Shabu Gozen with Miyazaki Wagyu, ponzu and sesame sauce ¥4,000 (June and August 2025); Wagyu Sukiyaki Gozen ¥4,500 (November 2025) · kamameshi cooked at the table — sea bream, salmon and ikura, chicken and burdock, or clams — as a +¥500 upgrade to the set rice (2025) · daily Obanzai Gozen of seasonal Kyoto vegetables ¥1,980 at lunch (May 2025) · an 8-dish Kawabata course with three small dishes, three kinds of sashimi, saikyo-miso grilled Spanish mackerel and tempura (Tabelog) · cocktails, about 10 whiskies and sake (Tabelog; December 2025)',
    website: null, gmaps: gm('京のかわば田 鴨東四条ビル'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Kamo riverbank at Shijo, Wagyu shabu-shabu with a river view] A calm 5th-floor izakaya whose counter looks straight down on the Kamo River: Miyazaki Wagyu shabu-shabu or sukiyaki sets with kamameshi cooked at the table, and a daily obanzai lunch. Ask for a river seat when booking — one July 2026 diner at the inner counter saw no river. Open daily 11:00–23:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog lists it as a corporate member, but no source names the operator or says whether it has sister shops. Reviewers from April 2025 to September 2026 describe a calm, bar-like room with a traditional Japanese feel and subdued lighting, Miyazaki Wagyu shabu-shabu and sukiyaki sets, and a counter facing the river; one compares it with Pontocho, saying it lets you "quietly enjoy the river view from indoors" (November 2025).',
      philosophy: null,
      specialty: 'Wagyu shabu-shabu and sukiyaki sets; kamameshi.',
      anecdotes: [
        { text: 'August 2025: "In the evening, the setting sun created a backlight that made it difficult to take photos of the dishes, so they kindly closed the curtains just for the photo session."', source: R + 'B511496285/' },
        { text: 'April 2026: "The portion of rice was a bit small, but it might be just the right amount if you order some udon as a finishing touch."', source: R + 'B526432021/' },
        { text: 'September 2026: "The counter seats offer a view of the Kamo River, and while the reflections can be distracting at night, the lights from the riverside restaurants create a beautiful scene."', source: R + 'B536302326/' },
      ],
      japanese_sources_summary: '食べログ: 京のかわば田、居酒屋・しゃぶしゃぶ・すき焼き、東山区常盤町173-2 鴨東四条ビル 5F、京阪祇園四条駅から徒歩2〜3分、毎日 11:00〜23:00 (L.O. 22:00)、休みは不定、予約可、22席、個室 (4〜8名)、貸切可、禁煙、多言語メニュー、カード・交通系IC・電子マネー・QR可、法人会員、鴨川を望むカウンター、和牛しゃぶしゃぶと5種の釜飯、8品のコース (小鉢3種、刺身3種、鰆の西京焼き、天ぷら)、カクテルとウイスキー10種。口コミ (2025年4月〜2026年9月、英語): 宮崎県産和牛の牛しゃぶ御膳4,000円、和牛すき焼き御膳4,500円、釜飯への変更500円 (鯛、鮭いくら、鶏ごぼう、あさり)、おばんざい御膳1,980円、Daiyame 800円、落ち着いた和の空間、夜はガラスの映り込み、全席喫煙可との記述 (2025年8月)、内側のカウンターでは川が見えない (2026年7月)、ご飯が少なめ (2026年4月)。',
      confidence: 'medium', sources: [TB, R + 'B505354344/', R + 'B507073521/', R + 'B507402607/', R + 'B508279783/', R + 'B508293828/', R + 'B511496285/', R + 'B516512234/', R + 'B520776515/', R + 'B526432021/', R + 'B532235405/', R + 'B536302326/', R + 'B537926159/'] },
    cultural_comfort: { level: 'english', note: 'Multilingual menu (English, Chinese, Korean); smartphone ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町173-2 鴨東四条ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004768, 135.772491); cross-checked: GSI 京都府京都市東山区常盤町173番地 (lot) 14m; nearest pin kyoto_uzuraya_shijo 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B508279783/', R + 'B516512234/', R + 'B507402607/', R + 'B511496285/'],
    price_note: 'Prices from 2025 reviews; tax included where stated.', last_checked: TODAY, items: [
      it('', '', 'Beef Shabu Gozen (Miyazaki Wagyu)', '¥4,000', 'Set', 'no', 'no', 'June and August 2025.', 'shabu_shabu_set'),
      it('', '', 'Wagyu Sukiyaki Gozen', '¥4,500', 'Set', 'no', 'no', 'November 2025.', 'sukiyaki_set'),
      it('', '', 'Kamameshi upgrade (sea bream, salmon and ikura, chicken and burdock, or clams)', '+¥500', 'Rice', 'ask', 'no', '2025 reviews.', 'kamameshi'),
      it('', '', 'Obanzai Gozen (lunch)', '¥1,980', 'Lunch', 'ask', 'ask', 'May 2025; changes daily.', 'obanzai_set'),
      it('', '', 'Daiyame (shochu)', '¥800', 'Drink', 'ask', 'ask', 'August 2025.', 'shochu'),
    ] }, {
    cuisine: '鴨川を見下ろすカウンターのあるビル5階の和の居酒屋 (食べログ、2025〜2026年の口コミ)・宮崎県産和牛の牛しゃぶ御膳、ポン酢とごまだれで4,000円 (2025年6月・8月)、和牛すき焼き御膳4,500円 (2025年11月)・目の前で炊く釜飯 (鯛、鮭いくら、鶏ごぼう、あさり) はご飯から500円で変更 (2025年)・昼は京野菜のおばんざい御膳1,980円、日替わり (2025年5月)・小鉢3種、刺身3種、鰆の西京焼き、天ぷらなど8品のコース (食べログ)・カクテル、ウイスキー約10種、日本酒 (食べログ、2025年12月)',
    neighborhood: '四条の鴨川東岸。祇園四条から徒歩2〜3分',
    gf_detail: 'グルテンフリーではない: 天ぷら、ポン酢とごまだれ、すき焼きのたれ、西京焼き (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛のしゃぶしゃぶとすき焼き、刺身、だしで炊く釜飯。昼のおばんざいは野菜中心だがヴィーガンとは書かれていない (食べログ、2025年の口コミ)。',
    notes: '[居酒屋・四条の鴨川沿い、川を眺めて和牛しゃぶしゃぶ] カウンターから鴨川を真下に望む、ビル5階の落ち着いた居酒屋。宮崎県産和牛のしゃぶしゃぶやすき焼きの御膳に目の前で炊く釜飯、昼は日替わりのおばんざい。予約の際に川側の席を頼むとよい。内側のカウンターでは川が見えなかったという声も (2026年7月)。毎日11時〜23時。',
  });
}

// ================================================================ 北海道直送貝魚バル ざんぐり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036274/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const WE = day(['13:00', '16:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_zanguri_shitomi_kaikan', name: '北海道直送貝魚バル ざんぐり (Zanguri)', category: 'OMNI',
    lat: 35.004274, lng: 135.765043, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, cured squid and soy-seasoned delicacies; sashimi and grilled fish may be possible — ask (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Hokkaido seafood and game bar (Tabelog; reviews).',
    hours_raw: 'Tabelog: Mon–Fri 17:00–23:00 (last order 22:30); Sat, Sun and holidays 13:00–16:00 (last order 15:30) and 17:00–23:00 (last order 22:30); closed on the third Sunday and Monday of the month — the third Monday may open, so call. Reservations taken; seafood can run out with the weather. 500-yen appetizer charge — Tabelog, Japanese original 「突き出し（お通し）500円頂戴いたします」. 6 counter seats; non-smoking. Cards (incl. UnionPay), transit IC, QUICPay and QR (PayPay, Alipay, WeChat Pay and others). Ground floor of 四富会館, the Showa-era bar arcade on Shijo at Tomikoji.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shitomi Kaikan bar arcade, Shijo at Tomikoji — 5 min walk from Kyoto-Kawaramachi',
    cuisine: 'A six-seat counter in the Shitomi Kaikan arcade serving seafood and meat shipped from Hokkaido, cooked by a chef with French and Italian experience in Kitashinchi (Tabelog; 2023–2026 reviews) · raw hokke sashimi ¥1,200 and seiko crab ¥1,000 (October 2023); hatahata sashimi (2023); crab — seiko, koppe and kobako (November 2024) · cured squid from Hakodate; Shiretoko icefish ¥1,200; a three-item Hokkaido platter (herring, cod sashimi, salted sea squirt) ¥1,200 (February 2026) · Ezo deer steak with cassis sauce; squid and canola-flower tomato spaghetti (March 2026) · Hokkaido sake, wine and whisky (Tabelog)',
    website: null, gmaps: gm('ざんぐり 四富会館'), menu_url: null,
    notes: '[Hokkaido seafood bar · Shitomi Kaikan, six seats and a chatty chef] A six-seat counter in the retro Shitomi Kaikan bar arcade where a former French and Italian cook serves fish, crab and game shipped from Hokkaido — hokke sashimi, Ezo deer with cassis — with Hokkaido sake, and pasta off the menu if you ask. Pricier than its neighbours, and a ¥500 appetizer charge. Third Sunday and Monday closed.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Tabelog\'s own listing says the chef worked in French and Italian cooking in Kitashinchi (Osaka) and improvises with the day\'s Hokkaido catch. Reviewers call him the master; one heard he comes from a French background (February 2026), others an Italian one (February 2026), and several describe lively talk that draws the whole counter in. One September 2025 reviewer, however, left after an appetizer and a highball, saying no chance came to order and the owner never asked.',
      philosophy: null,
      specialty: 'Hokkaido seafood; hokke sashimi.',
      anecdotes: [
        { text: 'October 2023: "The friendly owner casually asked where I was from—am I a tourist? He has a great personality."', source: R + 'B472854037/' },
        { text: 'February 2026: "the master has an Italian background. So, if you ask nicely, he might whip up some pasta or Italian dishes that aren\'t on the menu."', source: R + 'B522980712/' },
        { text: 'December 2025: "The quiet master, the soft jazz playing in the background, and the sound of fish sizzling on the grill created a perfect ambiance." The same reviewer found sake and grilled fish dearer than elsewhere.', source: R + 'B519671791/' },
      ],
      japanese_sources_summary: '食べログ: 北海道直送貝魚バル ざんぐり、魚介料理・居酒屋、中京区四条通富小路上がる西大文字町615 四富会館 1F、月〜金 17:00〜23:00 (L.O. 22:30)、土日祝 13:00〜16:00 (L.O. 15:30)・17:00〜23:00 (L.O. 22:30)、毎月第3日曜・月曜休み (第3月曜は営業することもある)、予約可、天候で魚介がないことも、原文で「突き出し（お通し）500円頂戴いたします」、6席、禁煙、カード・交通系IC・QR可、北新地でフレンチとイタリアンを経験した料理人が北海道直送の魚介と肉を、エゾシカのカシスソース、豚のバルサミコソース。口コミ (2023年10月〜2026年11月、英語): ホッケの刺身1,200円、セイコガニ1,000円、ハタハタの刺身、カニ、函館のいかの塩辛、北海道の珍味1,200円、北海道の珍味3種盛り1,200円、エゾシカのステーキ、パスタ、北海道の地酒、気さくでよく話すマスター、値段はやや高め、注文の機会がなく帰った客も (2025年9月)。',
      confidence: 'medium', sources: [TB, R + 'B472854037/', R + 'B478986052/', R + 'B482199378/', R + 'B482335454/', R + 'B513884122/', R + 'B519671791/', R + 'B522296851/', R + 'B522563556/', R + 'B522980712/', R + 'B525373980/', R + 'B531084719/', R + 'B538813306/'] },
    cultural_comfort: { level: 'japanese', note: 'Six-seat counter; conversation with the chef is part of it.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区四条通富小路上がる西大文字町615 四富会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004274, 135.765043); cross-checked: GSI 京都府京都市中京区西大文字町615番地 (lot) 31m; Shitomi Kaikan neighbours kyoto_sumika_tomikoji 9m, ChIJl0DcvAcJAWARM1y3y1IqwEE 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B472854037/', R + 'B522296851/'],
    price_note: 'Prices from October 2023 and February 2026 reviews; the catch changes daily.', last_checked: TODAY, items: [
      it('', '', 'Raw hokke sashimi', '¥1,200', 'Sashimi', 'ask', 'no', 'October 2023.', 'hokke_sashimi'),
      it('', '', 'Seiko crab', '¥1,000', 'Seafood', 'ask', 'no', 'October 2023; seasonal.', 'seiko_crab'),
      it('', '', 'Shiretoko icefish', '¥1,200', 'Delicacies', 'ask', 'no', 'February 2026.', 'icefish'),
      it('', '', 'Hokkaido three-item platter (herring, cod sashimi, salted sea squirt)', '¥1,200', 'Delicacies', 'ask', 'no', 'February 2026.', 'delicacy_platter'),
      it('', '', 'Ezo deer steak with cassis sauce', null, 'Main', 'ask', 'no', 'March 2026.', 'venison_steak'),
    ] }, {
    cuisine: '四富会館の6席のカウンターで、北新地でフレンチとイタリアンを経験した料理人が北海道直送の魚介と肉を (食べログ、2023〜2026年の口コミ)・ホッケの刺身1,200円、セイコガニ1,000円 (2023年10月)、ハタハタの刺身 (2023年)、カニ (2024年11月)・函館のいかの塩辛、北海道の珍味3種盛り1,200円 (2026年2月)・エゾシカのステーキのカシスソース、パスタ (2026年3月)・北海道の日本酒、ワイン、ウイスキー (食べログ)',
    neighborhood: '四条富小路の四富会館。京都河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: パスタ、塩辛、醤油を使う珍味。刺身や焼き魚は相談できるかもしれない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 北海道の魚介とジビエの店 (食べログ、口コミ)。',
    notes: '[北海道の魚介バル・四富会館、6席と話好きのマスター] 昭和の飲み屋街、四富会館の6席のカウンター。フレンチとイタリアン出身の料理人が北海道直送の魚、カニ、ジビエを出す。ホッケの刺身、エゾシカのカシスソース、北海道の地酒、頼めばメニューにないパスタも。周りより値段は高め、お通し500円。第3日曜・月曜休み。',
  });
}

// ================================================================ ライチャスパイスカフェレストラン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26034588/'; const R = TB + 'dtlrvwlst/';
  const RETTY = 'https://retty.me/area/PRE26/ARE108/SUB10801/100001548921/';
  const UBER = 'https://www.ubereats.com/jp/store/%E3%83%A9%E3%82%A4%E3%83%81%E3%83%A3-%E3%82%B9%E3%83%8F%E3%82%A4%E3%82%B9-%E3%82%AB%E3%83%95%E3%82%A7%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3-raicha-spice-cafe-restaurant/qTon7WZ-SdGv-Nsg6MKD3w';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_raicha_spice_cafe_ayanokoji', name: 'ライチャスパイスカフェレストラン (Raicha Spice Cafe Restaurant)', category: 'OMNI',
    lat: 35.002433, lng: 135.76508, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: naan, cheese naan and curry udon contain wheat; rice and biryani exist, but no source says whether the curries are thickened with flour (Tabelog; 2021–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: a vegetable curry with carrots, green beans and eggplant (January 2026), but no source says whether ghee, butter or cream go in; the naan is generously buttered (May 2024).',
    hours_raw: 'Tabelog: Tue–Sun 11:00–15:00 (last order 14:45) and 17:00–22:00 (last order 21:45); closed Monday. No reservations. 32 seats: 8 at the counter, 16 at tables and 8 on the terrace; smoking allowed on the terrace only; pets allowed on the terrace. English menu; kids\' menu; children and strollers welcome; free Wi-Fi; take-away. Cash only per Tabelog (no cards, no e-money). On Ayanokoji west of Fuyacho, 2 min from Kawaramachi exit 11. Opened 15 July 2020 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ayanokoji at Fuyacho — 2 min walk from Kawaramachi exit 11',
    cuisine: 'A Nepalese-run curry café with a tandoor and a terrace (Tabelog; 2021–2026 reviews) · lunch set of chicken curry, naan, chicken tikka, salad and a drink ¥900 before tax; a beer instead of the drink +¥300 (June 2023) · chicken, butter chicken, white, cashew-nut, spinach-chicken and vegetable curries, with five spice levels (Tabelog; 2023–2026) · huge tandoor naan — leftovers can go home (June 2023) — and cheese naan; tandoori chicken (2024–2025) · mutton biryani; anko cheese naan (October 2026) · lassi, masala chai, Nepalese beer (Tabelog; May 2024)',
    website: null, gmaps: gm('ライチャスパイスカフェレストラン 綾小路'), menu_url: TB + 'dtlmenu/',
    notes: '[Nepalese curry · Ayanokoji near Kawaramachi, giant naan and a dog-friendly terrace] A bright Nepalese-run curry café a block from Kawaramachi: good-value lunch sets with chicken tikka, naan bigger than your plate from the tandoor, cheese naan, biryani and a vegetable curry, with five spice levels. Friendly staff are the most-praised thing here; some find the curries mild. Dogs welcome on the terrace. Cash only. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: 'Nepal (chef, per Tabelog)',
      background: 'Opened 15 July 2020 (Tabelog), with curry "made by a chef from Nepal" per its Tabelog highlights. Retty, Uber Eats and a Kyoto curry guide list it in Latin as "raicha Spice Cafe Restaurant"; Tabelog\'s English page renders the name "Righteous". Reviewers from 2021 to 2026 praise a Nepalese manager "fluent in Japanese" (May 2024), cheerful staff and tandoor-baked naan; a few found the curries milder than hoped (November 2022; September 2023).',
      philosophy: null,
      specialty: 'Tandoor naan; spice curries.',
      anecdotes: [
        { text: 'June 2023: "I was blown away by the size of the naan that came out of the tandoor right in front of me! It\'s huge! … And apparently, you can take home any leftovers."', source: R + 'B466431341/' },
        { text: 'September 2023: "I chose the butter chicken curry, but it wasn\'t quite what I expected; it was quite mild."', source: R + 'B471399392/' },
        { text: 'April 2025: "I visited this place at the end of my trip to Kyoto with my dog. The terrace seating is dog-friendly, so we enjoyed our meal outside."', source: R + 'B505706517/' },
      ],
      japanese_sources_summary: '食べログ: ライチャスパイスカフェレストラン、ネパール料理・インドカレー・カフェ、下京区綾小路通麩屋町西入塩屋町72 グランシャトレー 1F、河原町駅11番出口から徒歩2分、火〜日 11:00〜15:00 (L.O. 14:45)・17:00〜22:00 (L.O. 21:45)、月曜休み、予約不可、32席 (カウンター8、テーブル16、テラス8)、テラスのみ喫煙可、テラスはペット可、英語メニュー、キッズメニュー、子供・ベビーカー可、テイクアウト、カード・電子マネー不可、2020年7月15日オープン、ネパール出身のシェフのスパイスカレー、辛さは5段階、炭火で焼くナンとチキンティッカのセット。他の掲載 (Retty、Uber Eats): raicha Spice Cafe Restaurant。口コミ (2021年12月〜2026年10月、英語): ランチセット900円 (税抜)、ビールに変更300円、大きなナンは持ち帰り可、チーズナン、タンドリーチキン、ほうれん草チキンカレー、野菜カレー、マトンのビリヤニ、あんこチーズナン、ネパールのビール、日本語が上手なネパール人の店長、明るいスタッフ、カレーがマイルドすぎるとの声 (2022年、2023年)。',
      confidence: 'medium', sources: [TB, RETTY, UBER, R + 'B456851870/', R + 'B465012939/', R + 'B466431341/', R + 'B471399392/', R + 'B481249721/', R + 'B484443527/', R + 'B484520483/', R + 'B491661202/', R + 'B505706517/', R + 'B521556497/', R + 'B532195434/', R + 'B536857308/'] },
    cultural_comfort: { level: 'english', note: 'English menu; pets on the terrace; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通麩屋町西入塩屋町72 グランシャトレー 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002433, 135.765080); cross-checked: GSI 京都府京都市下京区塩屋町72番地 (lot) 14m; nearest pin kyoto_7t_plus_tea 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B466431341/', R + 'B484520483/'],
    price_note: 'Prices from June 2023 and May 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (chicken curry, naan, chicken tikka, salad, drink)', '¥900 + tax', 'Lunch', 'no', 'no', 'June 2023.', 'curry_lunch_set'),
      it('', '', 'Beer instead of the set drink', '+¥300 + tax', 'Drink', 'no', 'ask', 'June 2023.', 'beer'),
      it('', '', 'Spinach chicken curry (dinner set upgrade)', '+¥200', 'Curry', 'ask', 'no', 'May 2024.', 'spinach_curry'),
      it('', '', 'Vegetable curry', null, 'Curry', 'ask', 'ask', 'January 2026.', 'vegetable_curry'),
      it('', '', 'Mutton biryani', null, 'Rice', 'ask', 'no', 'October 2026.', 'biryani'),
    ] }, {
    cuisine: 'ネパール出身の料理人のカレーの店。タンドールとテラス席がある (食べログ、2021〜2026年の口コミ)・チキンカレー、ナン、チキンティッカ、サラダ、ドリンクのランチセット900円 (税抜)、ドリンクをビールにすると300円増し (2023年6月)・チキン、バターチキン、ホワイト、カシューナッツ、ほうれん草チキン、野菜のカレー、辛さは5段階 (食べログ、2023〜2026年)・タンドールで焼く大きなナン (残りは持ち帰り可、2023年6月)、チーズナン、タンドリーチキン (2024〜2025年)・マトンのビリヤニ、あんこチーズナン (2026年10月)・ラッシー、マサラチャイ、ネパールのビール (食べログ、2024年5月)',
    neighborhood: '綾小路麩屋町。河原町駅11番出口から徒歩2分',
    gf_detail: '要確認: ナン、チーズナン、カレーうどんは小麦。ライスやビリヤニもあるが、カレーに小麦粉を使うかは書かれていない (食べログ、2021〜2026年の口コミ)。',
    vegan_detail: '要確認: にんじん、いんげん、なすの野菜カレーがある (2026年1月) が、ギー、バター、クリームを使うかは書かれていない。ナンはバターたっぷり (2024年5月)。',
    notes: '[ネパールカレー・河原町近くの綾小路、大きなナンと犬も入れるテラス] 河原町から1本の明るいネパールカレーの店。チキンティッカ付きのお得なランチセット、タンドールで焼く皿からはみ出すナン、チーズナン、ビリヤニ、野菜カレー、辛さは5段階。いちばんほめられるのはスタッフの親切さ。カレーがマイルドという声も。テラスは犬可。現金のみ。月曜休み。',
  });
}

// ================================================================ もつ鍋・すき焼き いっしん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032386/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/motsusuki__issin/';
  const COURSE = 'https://tabelog.com/kyoto/A2601/A260301/26032386/party/220845195/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_isshin_motsunabe_kiyamachi', name: 'もつ鍋・すき焼き いっしん (Isshin)', category: 'OMNI',
    lat: 35.006639, lng: 135.770246, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-sauce and miso motsu-nabe broths, sukiyaki sauce, udon and champon noodles to finish, kushikatsu and tempura (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef offal hotpot, Wagyu sukiyaki and horse sashimi (Tabelog; reviews).',
    hours_raw: 'Tabelog: daily 17:00–24:00 (last order 23:30); closing days not fixed. Reservations taken. Table charge ¥330 a person — Tabelog, Japanese original 「テーブルチャージ330円/人」. A January 2026 reviewer reports prices 20% higher over the New Year holiday. 80 seats: 18 at the counter and 62 at tables, including a tatami area; private rooms for 10–20. Smoking allowed. QR-code ordering (January 2025). Cards and QR (PayPay, Rakuten Pay); no e-money. 2nd floor of 木屋町会館, west side of Kiyamachi one street below Takoyakushi. Opened 1 May 2019 (Tabelog). Some listings give the name as もつ鍋・地鶏工房 いっしん at the same address and phone number.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi below Takoyakushi — 5 min walk from Hankyu Kawaramachi or Keihan Sanjo',
    cuisine: 'A large Kiyamachi izakaya for beef-offal motsu-nabe and Wagyu sukiyaki (Tabelog; 2024–2026 reviews) · motsu-nabe in soy-sauce or miso broth with garlic and cabbage, then udon, champon noodles or rice porridge to finish (2024–2026) · Wagyu sukiyaki sets and courses (2025) · Kumamoto horse sashimi and, some days, off-menu horse liver (June and October 2025) · kushikatsu, vinegared dishes and tempura (December 2024–2025) · an omakase course with all-you-can-drink for 2 hours ¥5,000 (Tabelog course page)',
    website: IG, gmaps: gm('もつ鍋・すき焼き いっしん 木屋町会館'), menu_url: TB + 'dtlmenu/',
    notes: '[Motsu-nabe and sukiyaki · Kiyamachi, a busy second-floor hotpot izakaya] A big second-floor izakaya above Kiyamachi for beef-offal hotpot — soy-sauce or miso, with no off-smell, reviewers stress — Wagyu sukiyaki and Kumamoto horse sashimi, with udon or champon to finish. Busy, with smoking allowed; service can lag at peak times, and the music is loud for some. ¥330 table charge. Open nightly to midnight.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 1 May 2019 (Tabelog). No source names the operator or says whether it has sister shops; other listings show it at the same address under the name もつ鍋・地鶏工房 いっしん. Reviewers from 2024 to 2026 praise offal "without any unpleasant odor" (November 2024), a broth that is "not overly salty or heavy" (February 2025) and bright, quick staff (January 2025); criticism covers slow service in the year-end rush (December 2024), sukiyaki that was "somewhat average" (April 2025) and loud background music (February 2026).',
      philosophy: null,
      specialty: 'Beef-offal motsu-nabe; Wagyu sukiyaki.',
      anecdotes: [
        { text: 'November 2024: "I believe there were about 8 pieces of motsu even for two people, which was a perfect amount considering my age and a sensitive stomach."', source: R + 'B497186587/' },
        { text: 'October 2025: "I was shocked that I could eat the liver without any unpleasant smell" — of the horse sashimi.', source: R + 'B520521039/' },
        { text: 'February 2026: "I had sukiyaki, but it wasn\'t the grilled type, which surprised me a bit… However, the loud background music was a downside."', source: R + 'B522971760/' },
      ],
      japanese_sources_summary: '食べログ: もつ鍋・すき焼き いっしん、居酒屋・もつ鍋・すき焼き、中京区南車屋町287 木屋町会館 2F、阪急河原町駅・京阪三条駅から徒歩5分、木屋町蛸薬師一筋目西側、毎日 17:00〜24:00 (L.O. 23:30)、不定休、予約可、原文で「テーブルチャージ330円/人」、80席 (カウンター18、テーブル62)、座敷、個室 (10〜20名)、喫煙可、カード・QR可、電子マネー不可、2019年5月1日オープン、おまかせコースと2時間飲み放題5,000円。他の掲載: もつ鍋・地鶏工房 いっしん (同じ住所・電話)。口コミ (2024年3月〜2026年2月、英語): 醤油と味噌のもつ鍋、にんにく、キャベツ、締めのうどん・ちゃんぽん・雑炊、すき焼き、熊本の馬刺し、馬レバー、串カツ、天ぷら、QRで注文、明るいスタッフ、年末の混雑でサービスが不十分 (2024年12月)、すき焼きは普通 (2025年4月)、正月は2割増し (2026年1月)、BGMが大きい (2026年2月)。',
      confidence: 'medium', sources: [TB, COURSE, IG, R + 'B480912934/', R + 'B483273013/', R + 'B497186587/', R + 'B498777320/', R + 'B499979705/', R + 'B505938967/', R + 'B508561429/', R + 'B509786791/', R + 'B520027104/', R + 'B520521039/', R + 'B521692254/', R + 'B522971760/'] },
    cultural_comfort: { level: 'japanese', note: 'QR-code ordering; many overseas guests (January 2026); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区南車屋町287 木屋町会館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.006639, 135.770246); cross-checked: GSI 京都府京都市中京区南車屋町287番地 (lot) 14m; nearest pin ChIJLyNa5LcJAWARrcc-BOUsfc8 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [COURSE, R + 'B498777320/'],
    price_note: 'Course price from the Tabelog course page; a December 2024 meal for two with four drinks, the hotpot and four small dishes came to ¥14,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase course with 2-hour all-you-can-drink', '¥5,000', 'Course', 'no', 'no', 'Tabelog course page.', 'course_nomihodai'),
      it('', '', 'Motsu-nabe (soy sauce or miso)', null, 'Hotpot', 'no', 'no', '2024–2026 reviews.', 'motsunabe'),
      it('', '', 'Wagyu sukiyaki', null, 'Hotpot', 'no', 'no', '2025–2026 reviews.', 'sukiyaki'),
      it('', '', 'Horse sashimi (Kumamoto)', null, 'Sashimi', 'ask', 'no', 'June and October 2025.', 'basashi'),
    ] }, {
    cuisine: '木屋町の大きな居酒屋で、牛のもつ鍋と和牛のすき焼き (食べログ、2024〜2026年の口コミ)・醤油か味噌のもつ鍋、にんにくとキャベツ、締めはうどん、ちゃんぽん、雑炊 (2024〜2026年)・和牛すき焼きのセットとコース (2025年)・熊本の馬刺し、日によってメニューにない馬レバー (2025年6月・10月)・串カツ、酢の物、天ぷら (2024年12月〜2025年)・おまかせコースと2時間飲み放題で5,000円 (食べログのコース)',
    neighborhood: '木屋町蛸薬師下ル。阪急河原町駅・京阪三条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 醤油と味噌のもつ鍋、すき焼きのたれ、締めのうどんとちゃんぽん、串カツ、天ぷら (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛もつ鍋、和牛すき焼き、馬刺し (食べログ、口コミ)。',
    notes: '[もつ鍋とすき焼き・木屋町、にぎやかな2階の鍋の居酒屋] 木屋町の2階の大きな居酒屋で、臭みのない牛もつ鍋 (醤油か味噌)、和牛すき焼き、熊本の馬刺し、締めはうどんかちゃんぽん。混む時間はサービスが遅れることもあり、BGMが大きいという声も。喫煙可。テーブルチャージ330円。毎晩24時まで。',
  });
}

save();
