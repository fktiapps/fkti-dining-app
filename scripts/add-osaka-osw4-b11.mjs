// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 11.
//   + 裏なんばサカナエビス 難波千日前 Ura Nanba Sakana Ebisu (sushi izakaya, sister concept of Sushi Ebisu)
//   + Tsuchi (brunch café with specialty coffee in Hotel Royal Classic Osaka)
//   + 和フレンチバル村塾 Wa French Baru Sonjuku (Kyoto-meets-French bar near Yotsubashi, open until 3 a.m.)
//   + テーブル36 Table 36 (buffet and steak restaurant on the 36th floor of Swissotel Nankai Osaka)
//   Chain check (Greg's ruling 2026-11-02: sister concepts are not chains): Sakana Ebisu is the izakaya sister of the
//   sushi shops Sushi Ebisu in Tokyo and Kobe (Tabelog shop text), no Ebisu shop in data. Tsuchi one shop. Wa French Baru
//   Sonjuku is a different concept from イタリアン チャイナバル村塾 in data (osaka_sonjuku_namba); its own other shop,
//   屋根裏 別邸 in Umeda (27042985), is not in data. Table 36 is the hotel's restaurant. None of the four is in
//   data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 裏なんばサカナエビス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27126671/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '23:30']), WE = day(['12:00', '23:30']);
  put({
    id: 'osaka_ura_namba_sakana_ebisu', name: '裏なんばサカナエビス 難波千日前 (Ura Nanba Sakana Ebisu)', category: 'OMNI',
    lat: 34.663463, lng: 135.50338, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Nigiri with red-vinegar rice and sashimi with soy and ponzu, plus fried shrimp, tempura, natto rolls and shumai; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and sushi izakaya; the miso soup is aosa seaweed in a fish stock.',
    hours_raw: 'Mon–Fri and the day before a holiday 16:00–23:30; Sat, Sun and holidays 12:00–23:30; last food order 23:00 (Tabelog). Reservations accepted; two-hour limit when busy; walk-ins at 18:30 on a Saturday were told to wait until about 20:00 (Tabelog; July 2026). Happy hour early in the evening (2026 reviews). Appetiser ¥399 (August 2026). Cards (VISA, Master) and PayPay (Tabelog). 35 seats with counter, sofas and a terrace; e-cigarettes only (Tabelog). The entrance is easy to miss (September 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 14-17, 川西第1ビル 1F, in Ura-Namba — 3 min from Namba Stn',
    cuisine: 'Casual sushi izakaya, sister of Sushi Ebisu in Ebisu (Tokyo) and Sannomiya (Kobe): Edomae nigiri on red-vinegar rice from ¥99, dishes from about ¥299, sake from ¥399 a half-go (Tabelog shop text) · August 2026 prices: sashimi Ebisu platter of five ¥1,319, Ebisu potato salad ¥549, sweet shrimp fried with nori salt ¥549, "Shrimp and Crab Battle" (the signature, served on a crab shell) ¥989, "drinkable salmon" ¥439, sea-bream chiri with momiji-oroshi ¥439, sweet-shrimp quartet ¥439, aosa red-miso soup ¥329, matcha ice cream ¥439 · also yukke with sea urchin and salmon roe, horse-meat yukke, spear squid with sesame wasabi, sesame kanpachi, saba-taku, engawa with ponzu, conger-eel tempura, butter eel, fried mentaiko-natto roll, shrimp mayo, raw oysters, sake-steamed clams, mentaiko and shirasu noodles (2026) · welcome-party course with two hours of drinks ¥5,000 (Tabelog)',
    website: null, gmaps: gm('裏なんばサカナエビス 難波千日前'), menu_url: null,
    notes: '[Sushi izakaya · Ura-Namba, cheap nigiri and seafood plates] A lively sushi izakaya in Ura-Namba, the bar-and-small-plates sister of the Sushi Ebisu sushi shops in Tokyo and Kobe, with red-vinegar nigiri from ¥99 and long lists of seafood dishes under ¥1,000. Order the five-kind sashimi platter, the "Shrimp and Crab Battle" served on a crab shell, the sesame wasabi squid and a few nigiri, with sake from ¥399 a half-go. It fills up: come at the 16:00 opening (12:00 at weekends) for happy hour, or book. Expect ¥3,000–6,000 a head in 2026.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop text: the popular sister restaurant of Sushi Ebisu in Ebisu, Tokyo and Sannomiya, Kobe, opened in Ura-Namba; Edomae nigiri made with red vinegar in the Edo-period way, from ¥99; sake from ¥399 a half-go. Search results date the opening to January 2022 (not opened).', philosophy: null, specialty: 'Red-vinegar nigiri; "Shrimp and Crab Battle".',
      anecdotes: [
        { text: '"I overheard that guests without reservations arriving after us were told they would have to wait until around 8 PM." — July 2026, a Saturday at 6:30 PM.', source: R + 'B532788541/' },
        { text: '"Under the crab shell in the shrimp and crab battle, I found yuzu pepper rolls" — September 2026, a first visit.', source: R + 'B535502722/' },
        { text: '"The entrance was a bit hard to find, and we walked past it a couple of steps..." — September 2026, a daytime drink.', source: R + 'B535032908/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 裏なんばサカナエビス 難波千日前、居酒屋・寿司・魚介、大阪市中央区難波千日前14-17 川西第1ビル 1F、なんば駅から徒歩3分、月〜金・祝前日16:00〜23:30、土・日・祝12:00〜23:30 (料理 L.O. 23:00)、予約可、混雑時は2時間制、カード (VISA・Master)・PayPay 可、35席、電子タバコのみ可、Tokyo の Ebisu と Kobe の Sannomiya の Sushi Ebisuの姉妹店、赤酢の江戸前握りが99円から、日本酒は半合399円から、名物「Shrimp and Crab Battle」、飲み放題つきの宴会コース5,000円。口コミ(2026年7月〜10月): お通し399円、刺身5種盛り1,319円、ポテトサラダ549円、甘えびの海苔塩揚げ549円、Shrimp and Crab Battle989円、鯛ちり439円、あおさの赤だし329円、ウニといくらのユッケ、馬肉ユッケ、ヤリイカのごまわさび、ごまカンパチ、生牡蠣、あさりの酒蒸し、ハッピーアワー、土曜の夜は予約なしだと20時まで待ちも、入口がわかりにくい。',
      confidence: 'medium', sources: [TB, R + 'B531969473/', R + 'B532667682/', R + 'B532788541/', R + 'B533524820/', R + 'B533682985/', R + 'B533966290/', R + 'B535020986/', R + 'B535032908/', R + 'B535101431/', R + 'B535158423/', R + 'B535502722/', R + 'B535775724/', R + 'B536151436/', R + 'B536488371/', R + 'B538373352/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A long à la carte list of small seafood plates; book or come at opening (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-17 川西第1ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番17号 (go) 6m. Nearest records are next door at 14-18: イタリアン チャイナバル村塾 (osaka_sonjuku_namba) 13 m and 食堂ペスカ (osaka_shokudo_pesca_namba) 17 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533682985/', TB],
    price_note: 'Prices from an August 2026 review; nigiri from ¥99 and the party course from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', '"Shrimp and Crab Battle" (served on a crab shell)', '¥989', 'Signature', 'ask', 'no', 'August 2026 review.', 'ebikani_gassen'),
      it('', '', 'Sashimi Ebisu platter, five kinds', '¥1,319', 'Sashimi', 'ask', 'no', 'August 2026 review.', 'sashimi_platter'),
      it('', '', 'Red-vinegar nigiri', 'from ¥99', 'Sushi', 'ask', 'no', 'Tabelog shop text.', 'nigiri'),
      it('', '', 'Sweet shrimp fried with nori salt', '¥549', 'Fried', 'no', 'no', 'August 2026 review.', 'amaebi_karaage'),
      it('', '', 'Aosa red-miso soup', '¥329', 'Soup', 'ask', 'no', 'August 2026 review.', 'aosa_akadashi'),
    ] }, {
    cuisine: 'Sushi Ebisu (Tokyo の Ebisu、Kobe の Sannomiya) の姉妹店のカジュアルな寿司居酒屋: 赤酢の江戸前握りが99円から、料理は299円ほどから、日本酒は半合399円から (食べログの店の紹介)・2026年8月の値段: 刺身5種の盛り合わせ1,319円、ポテトサラダ549円、甘えびの海苔塩揚げ549円、名物「Shrimp and Crab Battle」(カニの甲羅にのせて) 989円、「飲むサーモン」439円、もみじおろしの鯛ちり439円、甘えび4種439円、あおさの赤だし329円、抹茶アイス439円・ほかにウニといくらのユッケ、馬肉ユッケ、ヤリイカのごまわさび、ごまカンパチ、saba-taku、えんがわのポン酢、アナゴの天ぷら、バターうなぎ、明太納豆巻きの揚げ、エビマヨ、生牡蠣、あさりの酒蒸し、明太子としらすの麺 (2026年)・2時間飲み放題つきの宴会コース5,000円 (食べログ)',
    neighborhood: '難波千日前14-17 川西第1ビル 1階、Ura-Namba。なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。赤酢の握りと醤油やポン酢の刺身に、エビの揚げ物、天ぷら、納豆巻き、焼売も。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介と寿司の居酒屋で、味噌汁は魚のだしのあおさの赤だし。',
    notes: '[寿司居酒屋・Ura-Namba、安い握りと魚の小皿] Ura-Namba のにぎやかな寿司居酒屋で、東京と神戸の寿司店 Sushi Ebisuの、つまみと飲みの姉妹店。赤酢の握りが99円から、1,000円以下の魚料理がずらり。刺身5種盛り、カニの甲羅で出てくる「Shrimp and Crab Battle」、ヤリイカのごまわさび、握りを何貫か、日本酒は半合399円から。混むので16時の開店 (週末は12時) のハッピーアワーを狙うか予約を。2026年はひとり3,000〜6,000円ほど。',
  });
}

// ================================================================ Tsuchi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27115131/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'osaka_tsuchi_namba', name: 'Tsuchi', category: 'OMNI',
    lat: 34.665941, lng: 135.500093, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is French toast, open sandwiches, mille-feuille and parfaits, with brunch plates of vegetables and chicken in sauce served with bread; the acai bowl and smoothies are the items without obvious wheat, but nothing is stated about them.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. There is soy milk for lattes (August 2026) and an acai bowl and fruit smoothies; the French toast, parfaits and plates use dairy, eggs or chicken.',
    hours_raw: 'Daily 9:00–17:00, last order food 16:00, drinks 16:30; closed irregularly (Tabelog). Reservations accepted for tables; a booking needs one food item and one drink per person, no seat-only or drinks-only bookings; nine or more by phone (Tabelog). 90-minute limit (August 2026). Order and pay by QR code at the table; cash also accepted (September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, iD, QUICPay and PayPay (Tabelog). 36 seats inside and 30 on a terrace; non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 4-3-3, Hotel Royal Classic Osaka 1F, high-ceilinged — 1 min from Osaka-Namba Stn, near Namba Stn exit 13',
    cuisine: '"Farm to table" café in the Australian café style: brunch plates loaded with vegetables, homemade French toast, seasonal sweets and specialty coffee, all day (Tabelog shop text) · brunch plate of chicken with mushroom and tapenade cream sauce, sunflower seeds, spinach potage and bread (October 2026) · avocado open sandwich · French toast with half a peach (August 2026), fig French toast, salmon French toast (October 2026) · seasonal fairs: peach parfait and peach smoothie (August 2026), fig and hojicha parfait, fig mille-feuille, fig fruit soda (September–October 2026) · acai bowl, affogato · café latte, soy latte, hot chocolate with optional cream',
    website: null, gmaps: gm('Tsuchi ホテルロイヤルクラシック大阪'), menu_url: null,
    notes: '[Café · Namba, brunch in a hotel] A high-ceilinged brunch café on the ground floor of Hotel Royal Classic Osaka, beside Osaka-Namba Station, built on the Australian café model: specialty coffee, vegetable-heavy brunch plates and homemade French toast, served all day. The seasonal fruit is the draw: peaches in summer and figs in autumn 2026, in parfaits, French toast, mille-feuille and sodas. Order by QR code; a booking needs a food and a drink each, and stays are 90 minutes. Expect ¥2,000–3,000 a head; reserve at weekend lunch.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop text: "Bringing you a farm to table lifestyle from Tsuchi"; the new Tsuchi embraces Australian café culture, with high-quality coffee and meals in a comfortable space, brunch plates and sweets all day. An October 2026 regular notes the menu is gradually expanding and a pasta set has gone.', philosophy: '"Farm to table" (Tabelog shop text).', specialty: 'Seasonal fruit French toast and parfaits; vegetable brunch plates.',
      anecdotes: [
        { text: '"The seasonal mille-feuille always uses delicious fruits, and the figs were perfectly ripe and incredibly tasty." — October 2026.', source: R + 'B537451602/' },
        { text: '"It\'s a prepay system, so I ordered and paid through a QR code while seated." — September 2026, the fig fair.', source: R + 'B536511395/' },
        { text: '"for online reservations, it was mandatory to order both a drink and a dessert per person." — September 2026.', source: R + 'B536678545/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Tsuchi、カフェ・スイーツ・コーヒースタンド、大阪市中央区難波4-3-3 ホテルロイヤルクラシック大阪 1F、大阪難波駅から徒歩1分、毎日9:00〜17:00 (L.O. 料理16:00、ドリンク16:30)、不定休、予約可 (テーブル席のみ、1人1フード1ドリンク、席のみやドリンクのみは不可、9名以上は電話)、カード・交通系IC・iD・QUICPay・PayPay 可、36席とテラス30席、禁煙、Farm to Table、オーストラリアのカフェ文化、スペシャルティコーヒー、野菜たっぷりのブランチプレート、自家製のフレンチトースト、季節のスイーツ。口コミ(2026年8月〜10月): きのことタプナードのクリームソースの鶏のプレート、アボカドのオープンサンド、桃のフレンチトースト、いちじくとサーモンのフレンチトースト、桃のパフェとスムージー、いちじくとほうじ茶のパフェ、いちじくのミルフィーユ、アサイーボウル、アフォガート、豆乳ラテ、QR コードで注文と会計、90分制、海外の客も多い。',
      confidence: 'medium', sources: [TB, R + 'B533671768/', R + 'B533715868/', R + 'B534449262/', R + 'B535045666/', R + 'B535424020/', R + 'B535428367/', R + 'B536142234/', R + 'B536511395/', R + 'B536678545/', R + 'B536814005/', R + 'B537203665/', R + 'B537323961/', R + 'B537451602/', R + 'B537590701/', R + 'B537754289/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay by QR code; many overseas visitors (October 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-3-3 ホテルロイヤルクラシック大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目3番3号 (go) 2m. No other record in data within 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537590701/', R + 'B533671768/'],
    price_note: 'No prices seen in the sources read; items from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Brunch plate: chicken with mushroom and tapenade cream sauce, vegetables, soup, bread', '', 'Brunch', 'ask', 'no', 'October 2026 reviews.', 'brunch_plate'),
      it('', '', 'Seasonal French toast (peach, fig)', '', 'Sweets', 'no', 'no', 'August–October 2026 reviews.', 'french_toast'),
      it('', '', 'Seasonal parfait (peach; fig and hojicha)', '', 'Sweets', 'ask', 'no', 'August–October 2026 reviews.', 'parfait'),
      it('', '', 'Acai bowl', '', 'Sweets', 'ask', 'ask', 'September 2026 review.', 'acai_bowl'),
    ] }, {
    cuisine: 'オーストラリアのカフェスタイルの Farm to Table のカフェ: 野菜たっぷりのブランチプレート、自家製のフレンチトースト、季節のスイーツ、スペシャルティコーヒーを一日中 (食べログの店の紹介)・きのことタプナードのクリームソースの鶏、ひまわりの種、ほうれん草のポタージュ、パンのブランチプレート (2026年10月)・アボカドのオープンサンド・桃半分のフレンチトースト (2026年8月)、いちじくのフレンチトースト、サーモンのフレンチトースト (2026年10月)・季節のフェア: 桃のパフェと桃のスムージー (2026年8月)、いちじくとほうじ茶のパフェ、いちじくのミルフィーユ、いちじくのフルーツソーダ (2026年9〜10月)・アサイーボウル、アフォガート・カフェラテ、豆乳ラテ、クリームを選べるホットチョコレート',
    neighborhood: '難波4-3-3 ホテルロイヤルクラシック大阪 1階、天井の高い店。大阪難波駅から徒歩1分、なんば駅13番出口のそば',
    gf_detail: '要確認。グルテンの情報なし。フレンチトースト、オープンサンド、ミルフィーユ、パフェに、パンつきの野菜と鶏のブランチプレート。アサイーボウルやスムージーは小麦が目立たないが、説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ラテには豆乳もあり (2026年8月)、アサイーボウルや果物のスムージーもあるが、フレンチトースト、パフェ、プレートは乳製品、卵、鶏を使う。',
    notes: '[カフェ・なんば、ホテルのブランチ] 大阪難波駅のそば、ホテルロイヤルクラシック大阪の1階にある天井の高いブランチカフェで、オーストラリアのカフェにならって、スペシャルティコーヒー、野菜たっぷりのブランチプレート、自家製のフレンチトーストを一日中。目当ては季節の果物で、2026年は夏は桃、秋はいちじくを、パフェ、フレンチトースト、ミルフィーユ、ソーダで。注文は QR コード、予約には1人1フード1ドリンクが必要で、滞在は90分。ひとり2,000〜3,000円ほど。週末の昼は予約を。',
  });
}

// ================================================================ 和フレンチバル村塾
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27084271/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '03:00']);
  put({
    id: 'osaka_wa_french_baru_sonjuku_shinmachi', name: '和フレンチバル村塾 (Wa French Baru Sonjuku)', category: 'OMNI',
    lat: 34.676403, lng: 135.496811, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Dishes such as beef sirloin in puff pastry, pizza, penne, quiche and baguette sit beside dashi omelette, skewers and foie gras; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-led menu of beef, pork, foie gras and seafood, with a dashi omelette; bagna cauda vegetables are the main plant dish mentioned.',
    hours_raw: 'Daily 17:30–3:00, last order 2:30; open through Golden Week and Obon; lunch suspended; open all year, New Year to be confirmed (Tabelog). Reservations accepted, advisable as it is often busy; seat type not guaranteed (Tabelog; September 2026). Cards (VISA, Master, JCB, AMEX, Diners), e-money, PayPay and Rakuten Pay (Tabelog). 37 seats: 13 at the counter, 24 at tables; heated tobacco only indoors until 23:00, smoking on the terrace (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-7-5, YOTSUBASHI GTC BLDG 1F — 2 min from Yotsubashi Stn, 4 min from Shinsaibashi Stn',
    cuisine: 'Kyoto cuisine and French by a chef formerly of a long-established Kyoto hotel, in a room designed like a late-Edo townhouse (Tabelog shop text) · June 2026 prices: eight assorted appetisers ¥1,590, beef sirloin wrapped in puff pastry ¥990, beef sirloin skewer ¥390, sea-urchin cream rice ¥1,390 · Kyoto-style dashi omelette, chicken and egg gâteau, quiche and pâté with baguette, shrimp and avocado tartare with monaka, foie gras, pork sauté, keema curry, penne arrabbiata, prosciutto (2026) · course with two hours of drinks ¥4,980: dashi omelette, appetisers, chicken gâteau, bagna cauda, pizza, Australian pork loin with persillade, penne arrabbiata, cheese risotto (October 2026) · rosé sparkling wine by the glass for a single coin (August 2026); reasonably priced wines',
    website: null, gmaps: gm('和フレンチバル村塾 四ツ橋'), menu_url: null,
    notes: '[French-Japanese bar · Shinmachi, until 3 a.m.] A late-night bistro bar by Yotsubashi Station where a chef from a long-established Kyoto hotel mixes Kyoto and French cooking, in a room styled like a late-Edo townhouse. Order the beef sirloin wrapped in puff pastry (¥990 in June 2026) that regulars insist on, the dashi omelette, foie gras and an eight-item appetiser plate, with an inexpensive glass of wine. Open every night until 3 a.m.; a ¥4,980 course with drinks suits groups. A sister of イタリアン チャイナバル村塾 in Namba, different concept.',
    chef_bio: { chef_name: null, roles: ['Chef formerly of a long-established Kyoto hotel, unnamed (Tabelog shop text)', 'A cheerful owner, unnamed (July 2026 review)'], origin: null, background: 'Per the Tabelog shop text: authentic Kyoto cuisine and French dishes by a former chef of a long-established Kyoto hotel; the interior was designed by the makers of the TV show "Gekiteki Before After", inspired by the machiya of the late Edo period, and the name nods to the "Matsushita Village School" and its pupils (Tabelog shop text). A July 2026 regular was glad to see the cheerful owner again.', philosophy: null, specialty: 'Beef sirloin in puff pastry; dashi omelette; foie gras.',
      anecdotes: [
        { text: '"Definitely Order the Sirloin Wrapped in Pastry, a Strong Ally for Late-Night Dining." — July 2026.', source: R + 'B532571468/' },
        { text: '"I was so happy to see the cheerful owner again!" — July 2026, red wine, prosciutto and penne arrabbiata.', source: R + 'B532097099/' },
        { text: '"It\'s great that I could enjoy a glass of rosé sparkling wine for just one coin." — August 2026.', source: R + 'B534296052/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 和フレンチバル村塾、バル・イタリアン・フレンチ、大阪市西区新町1-7-5 YOTSUBASHI GTC BLDG1F、四ツ橋駅から徒歩2分、心斎橋駅から徒歩4分、毎日17:30〜翌3:00 (L.O. 2:30)、GW・お盆も休まず、ランチは休止中、年中無休 (年末年始は要確認)、予約可、カード・電子マネー・PayPay・楽天ペイ可、37席 (カウンター13、テーブル24)、23時までは加熱式たばこのみ、テラスは喫煙可、京都の老舗ホテル出身の料理人の京料理とフレンチ、幕末の町家をイメージした店内。口コミ(2026年6月〜10月): 前菜8種盛り1,590円、牛サーロインのパイ包み990円、牛サーロインの串390円、ウニのクリームご飯1,390円、京風だし巻き、鶏と卵のガトー、キッシュとパテとバゲット、エビとアボカドのタルタルとモナカ、フォアグラ、ポークソテー、キーマカレー、ペンネアラビアータ、生ハム、2時間飲み放題つきのコース4,980円、ワンコインのロゼのスパークリング、明るいオーナー、いつも混んでいるので予約を。',
      confidence: 'medium', sources: [TB, R + 'B501006559/', R + 'B530006080/', R + 'B532097099/', R + 'B532571468/', R + 'B533084774/', R + 'B533925131/', R + 'B534296052/', R + 'B534813214/', R + 'B535530469/', R + 'B536387779/', R + 'B536744199/', R + 'B536828231/', R + 'B536919231/', R + 'B538043189/', R + 'B90586540/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte or a drinks course; open late (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-7-5 YOTSUBASHI GTC BLDG 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.676444, 135.496807); same building as Teppan & Grill R (osaka_teppan_grill_r_shinmachi, address_ja "新町1-7-5 Yotsubashi GTCビル 2F"), pinned 3 m from this Tabelog point, so this pin uses the GSI point 大阪府大阪市西区新町一丁目7番5号 (go), 5 m away and about 6 m from R; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530006080/', R + 'B536744199/'],
    price_note: 'Prices from June and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef sirloin wrapped in puff pastry', '¥990', 'Meat', 'no', 'no', 'June 2026 review.', 'sirloin_pie'),
      it('', '', 'Eight assorted appetisers', '¥1,590', 'Appetisers', 'ask', 'no', 'June 2026 review.', 'appetiser_8'),
      it('', '', 'Sea-urchin cream rice', '¥1,390', 'Rice', 'ask', 'no', 'June 2026 review.', 'uni_cream_rice'),
      it('', '', 'Beef sirloin skewer', '¥390', 'Meat', 'ask', 'no', 'June 2026 review.', 'sirloin_skewer'),
      it('', '', 'Course with two hours of drinks', '¥4,980', 'Course', 'no', 'no', 'October 2026 review.', 'course_4980'),
    ] }, {
    cuisine: '京都の老舗ホテル出身の料理人の京料理とフレンチ、幕末の町家をイメージした店内 (食べログの店の紹介)・2026年6月の値段: 前菜8種盛り1,590円、牛サーロインのパイ包み990円、牛サーロインの串390円、ウニのクリームご飯1,390円・京風だし巻き、鶏と卵のガトー、キッシュとパテとバゲット、エビとアボカドのタルタルとモナカ、フォアグラ、ポークソテー、キーマカレー、ペンネアラビアータ、生ハム (2026年)・2時間飲み放題つきのコース4,980円: だし巻き、前菜、鶏のガトー、バーニャカウダ、ピザ、オーストラリア産豚ロースのペルシヤードソース、ペンネアラビアータ、チーズリゾット (2026年10月)・ワンコインのロゼのスパークリング (2026年8月)、手頃なワイン',
    neighborhood: '新町1-7-5 YOTSUBASHI GTC BLDG 1階。四ツ橋駅から徒歩2分、心斎橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。牛サーロインのパイ包み、ピザ、ペンネ、キッシュ、バゲットと、だし巻き、串、フォアグラが並ぶ。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。牛、豚、フォアグラ、魚介が中心で、だし巻きもある。植物性の料理はバーニャカウダくらい。',
    notes: '[和フレンチのバル・新町、深夜3時まで] 四ツ橋駅そばの深夜までのビストロバルで、京都の老舗ホテル出身の料理人が京料理とフレンチを合わせる。店内は幕末の町家風。常連が推す牛サーロインのパイ包み (2026年6月は990円)、だし巻き、フォアグラ、前菜8種盛りを、手頃なグラスワインと。毎晩深夜3時まで。グループには飲み放題つき4,980円のコースも。なんばのイタリアン チャイナバル村塾の姉妹店だが別のコンセプト。',
  });
}

// ================================================================ テーブル36
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002603/'; const R = TB + 'dtlrvwlst/';
  const B = ['06:30', '10:30'];
  const MT = day(B, ['11:30', '15:00'], ['18:00', '23:30']), FR = day(B, ['11:30', '15:00'], ['18:00', '24:30']);
  const SA = day(B, ['11:00', '15:30'], ['18:00', '24:30']), SU = day(B, ['11:00', '15:30'], ['18:00', '23:30']);
  put({
    id: 'osaka_table_36_swissotel', name: 'テーブル36 (Table 36)', category: 'OMNI',
    lat: 34.664273, lng: 135.501211, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking; the listing says allergy information is available. The buffet has carved meats, salads and around 30 desserts alongside pizza, risotto, gratin and curries; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The buffet includes seasonal vegetable salads and fruit, but most dishes are built on meat, seafood or dairy.',
    hours_raw: 'Breakfast daily 6:30–10:30 (last order 10:00); lunch Mon–Fri 11:30–15:00 (last order 14:30), Sat, Sun and holidays 11:00–15:30 (last order 15:00); dinner 18:00–23:30 (last order 22:45), on Fri and Sat until 24:30 (last order 23:45) (Tabelog). Reservations accepted online 24 hours a day (Tabelog). Live music on Friday, Saturday and Sunday (Tabelog; July 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) (Tabelog). 150 seats, window seats over the city, a private room for 8–12; non-smoking; wheelchair accessible; hotel parking free for 2 hours with ¥6,000 spent (Tabelog). Reach it via the 6F hotel lobby (August 2026).',
    hours: { 0: MT, 1: MT, 2: MT, 3: MT, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 5-1-60, Swissotel Nankai Osaka 36F, 147 m up — directly above Nankai Namba Stn',
    cuisine: 'Buffets and steak with a view from 147 m (Tabelog shop text) · weekday lunch: international buffet ¥5,900, autumn 2026 with porcini risotto, sweet-potato and chestnut gratin, Filipino pork adobo, Thai green chicken curry, live-kitchen meat (lamb top sirloin on weekdays, wagyu ribeye at weekends and holidays) and chestnut, sweet-potato and pumpkin desserts (Tabelog) · around 30 sweets: egg tarts, canelés, chocolate fondue, blueberry muffins (2026) · roast beef carved in front of you (August 2026) · breakfast buffet of Japanese, Western, Chinese, Middle Eastern and Mexican dishes, e.g. cilantro, salsa, century egg, hummus, plenty of fruit (July–September 2026) · dinner: American-style à la carte, premium wagyu and tomahawk steaks, seafood, beef tartare (Tabelog; August 2026) · free-flow drinks ¥4,400 (August 2026)',
    website: null, gmaps: gm('テーブル36 スイスホテル南海大阪'), menu_url: null,
    notes: '[Buffet and steak · Namba, 36 floors up] The restaurant of Swissotel Nankai Osaka on the 36th floor, straight above Nankai Namba Station, known for its lunch buffet and the view over the city from 147 m. The weekday buffet (¥5,900 in autumn 2026) runs from international dishes and a live kitchen of carved meats to some 30 desserts that diners return to again and again; breakfast and steak dinners with live music at weekends are the other draws. Book a window table; take the lift to the 6F lobby, then on to 36F. One October 2026 diner found the floor short of staff.',
    chef_bio: { chef_name: null, roles: ['Swissotel Nankai Osaka; chef unnamed'], origin: null, background: 'Per the Tabelog shop text: a lunch buffet and dinner with views from 147 m above ground, directly connected to Namba Station, an open kitchen, American-style à la carte and premium steaks at dinner, live performances on Friday to Sunday. A July 2026 breakfast diner notes the hotel belongs to the Accor group.', philosophy: null, specialty: 'Lunch buffet with live kitchen and desserts; wagyu and tomahawk steaks.',
      anecdotes: [
        { text: '"I ended up ordering the egg tart, canelé, and chocolate fondue three times!" — July 2026, a window seat at lunch.', source: R + 'B531707311/' },
        { text: '"I wasn\'t sure how to get to the 36th floor, so I first went to the lobby on the 6th floor and then took the elevator to the 36th floor." — August 2026, the lunch buffet.', source: R + 'B533613649/' },
        { text: '"They offer a variety of distinctive ingredients such as cilantro, salsa, century egg, and hummus." — July 2026, breakfast at 6:30.', source: R + 'B532579924/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): テーブル36、イタリアン・ダイニングバー・洋菓子、大阪市中央区難波5-1-60 スイスホテル南海大阪 36F、南海なんば駅直結、地上147mの眺め、朝食6:30〜10:30、ランチ平日11:30〜15:00・土日祝11:00〜15:30、ディナー18:00〜23:30 (金・土は24:30まで)、ネット予約は24時間、カード可、150席、8〜12名の個室、禁煙、車いす可、駐車場 (6,000円で2時間無料)、オープンキッチン、平日のインターナショナルランチビュッフェ5,900円 (2026年秋はポルチーニのリゾット、さつまいもと栗のグラタン、フィリピンのポークアドボ、タイのグリーンカレー、平日はラムのランプ、週末はリブロース、栗・さつまいも・かぼちゃのデザート)、約30種のスイーツ、夜はアメリカンなアラカルトと和牛やトマホークのステーキ、金・土・日はライブ、アレルギー表示あり。口コミ(2026年7月〜10月): 窓からの眺め、エッグタルト、カヌレ、チョコレートフォンデュ、ブルーベリーマフィン、目の前で切るローストビーフ、朝食にパクチー、サルサ、ピータン、フムス、果物、フリーフロー4,400円、6階のロビーからエレベーター、スタッフが足りないと感じた口コミも。',
      confidence: 'medium', sources: [TB, R + 'B510954286/', R + 'B531707311/', R + 'B532572691/', R + 'B532579924/', R + 'B532964754/', R + 'B533613649/', R + 'B534453556/', R + 'B534789231/', R + 'B535069966/', R + 'B536108225/', R + 'B536672271/', R + 'B537919856/', R + 'B538264699/', R + 'B538285341/', R + 'B538356956/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A buffet where you serve yourself, in an international hotel with many overseas guests (July 2026). No English menu evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "Allergy information available".'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-60 スイスホテル南海大阪 36F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing (autumn 2026 buffet); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番60号 (go) 72m (the lot is the whole Namba Skyo and Swissotel block). 象印食堂 大阪本店 (osaka_zojirushi_shokudo_namba, 難波5-1-60 なんばスカイオ 6F) in the same block is pinned 45 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B532964754/'],
    price_note: 'Weekday lunch buffet price from the Tabelog listing (autumn 2026, tax included); free-flow drinks from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Weekday international lunch buffet (autumn 2026)', '¥5,900', 'Buffet', 'ask', 'ask', 'Tabelog listing; 1 September–30 November 2026.', 'lunch_buffet'),
      it('', '', 'Free-flow drinks with lunch', '¥4,400', 'Drinks', 'ask', 'ask', 'August 2026 review.', 'free_flow'),
      it('', '', 'Premium wagyu or tomahawk steak (dinner)', '', 'Dinner', 'ask', 'no', 'Tabelog shop text.', 'steak'),
    ] }, {
    cuisine: '地上147mの眺めのビュッフェとステーキ (食べログの店の紹介)・平日ランチ: インターナショナルビュッフェ5,900円、2026年秋はポルチーニのリゾット、さつまいもと栗のグラタン、フィリピンのポークアドボ、タイのグリーンカレー、ライブキッチンの肉 (平日はラムのランプ、土日祝は和牛のリブロース)、栗、さつまいも、かぼちゃのデザート (食べログ)・約30種のスイーツ: エッグタルト、カヌレ、チョコレートフォンデュ、ブルーベリーマフィン (2026年)・目の前で切り分けるローストビーフ (2026年8月)・朝食ビュッフェは和洋中に中東やメキシコの料理、たとえばパクチー、サルサ、ピータン、フムス、果物たっぷり (2026年7〜9月)・夜: アメリカンなアラカルト、和牛やトマホークのステーキ、魚介、牛のタルタル (食べログ、2026年8月)・フリーフロー4,400円 (2026年8月)',
    neighborhood: '難波5-1-60 スイスホテル南海大阪 36階、地上147m。南海なんば駅の真上',
    gf_detail: '予約時に要確認。食べログではアレルギー表示ありとしている。ビュッフェは切り分ける肉、サラダ、約30種のデザートに、ピザ、リゾット、グラタン、カレーも。グルテンフリーの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ビュッフェには季節の野菜のサラダや果物もあるが、ほとんどは肉、魚介、乳製品の料理。',
    notes: '[ビュッフェとステーキ・なんば、36階] 南海なんば駅の真上、スイスホテル南海大阪の36階のレストランで、ランチビュッフェと地上147mからの街の眺めで知られる。平日のビュッフェ (2026年秋は5,900円) は、各国の料理、肉を切り分けるライブキッチンから、何度も取りに行きたくなる約30種のデザートまで。朝食と、週末にライブのあるステーキのディナーも人気。窓際の席を予約し、6階のロビーで乗り換えて36階へ。2026年10月にはスタッフが足りないと感じた人も。',
  });
}

save();
