// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 31.
//   + 寺町コロンボ colombo (Teramachi Nijo café-trattoria famous for tarako spaghetti; core list)
//   + node (all-day café, dining and bar of the node hotel, Nishinotoin Shijo; core list)
//   + Etto (eight-seat omakase Italian in a townhouse west of the Prefectural Office; notable list)
//   + ラニオン Lannion (couple-run French bistro by Jingu Marutamachi since 2005; notable list)
//   Picked 2026-11-06 after batch 30. `queue.mjs kyoto-missed next core 200`, mod 6 = 1: 26041687, 26023087, 26026909 were
//   skipped in batch 30; 寺町コロンボ 26025253, node 26033017. `next notable 200`: Etto 26041705, ラニオン 26003179.
//   Same-name check, same brand or operator only: one 寺町コロンボ, one node (Knode and noden. are unrelated names), one
//   Etto, one ラニオン. node is the node hotel's own restaurant (hotel own brand, drafted per the brief). None of the four
//   is in data/kyoto.json: grep by name and address (要法寺前町709, 蟷螂山町461, 大黒屋町47, キャピタルヴィラ丸太町) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-31');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 寺町コロンボ colombo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025253/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://colombo-kyoto.com';
  const H = day(['12:00', '16:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_teramachi_colombo', name: '寺町コロンボ (colombo)', category: 'OMNI',
    lat: 35.014480, lng: 135.767159, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the signature is a wheat spaghetti, served with bread or focaccia (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tarako (cod roe) spaghetti with butter or cream, chicken curry, Spanish omelette and desserts (2026 reviews).',
    hours_raw: 'Lunch and café 12:00–16:00 (food last order 15:00); dinner 18:00–21:00 (food last order 20:00); closed Wednesday (Tabelog). Reservations accepted, but not for café-only visits (Tabelog); lines at opening and full quickly at weekend lunch, so book (June–September 2026). 20 seats: 8 at the counter and 12 at tables; private hire up to 20; non-smoking; wheelchair accessible (Tabelog). Children welcome, with a kids menu, kids chairs and picture books (Tabelog; August 2026). Cards and transit IC/iD/QUICPay; no QR (Tabelog). Teramachi Nijo; 6 min walk from Kyoto Shiyakusho-mae Stn (Tabelog; September 2026). Opened 25 September 2019 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi Nijo — 6 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Café and trattoria with vegetable-filled set meals and à la carte (Tabelog) · tarako spaghetti set ¥1,600: cod roe spaghetti with green and red shiso and a hint of lemon, with salad, soup (e.g. butternut squash), a Spanish omelette and focaccia; large size +¥300 (July–September 2026) · spice chicken curry set (August 2026) · dinner à la carte: caprese, prosciutto with peaches, scallop Genovese, tomato-mozzarella pasta, acqua pazza, tagliata (July 2026) · tiramisu and other desserts, soft-serve, baked goods to take away; bottled tarako sauce for sale (2026 reviews) · lunch ¥1,000–2,000, dinner about ¥6,000–8,000 (Tabelog)',
    website: WEB, gmaps: gm('寺町コロンボ 京都'), menu_url: null,
    notes: '[Café-trattoria · Teramachi Nijo, tarako spaghetti] A bright, family-friendly café-trattoria on Teramachi known for its tarako spaghetti set: creamy cod roe pasta under green and red shiso, with salad, soup, Spanish omelette and focaccia, ¥1,600. The owner pours out the stories of a November 2025 visit by the TV show "Sekkaku Gourmet". Desserts and takeaway sweets by day, a short Italian à la carte by night. Book for weekend lunch. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who also handles the dinner service alone on some nights (July 2026)'], origin: null,
      background: 'Per Tabelog: opened 25 September 2019, offering set meals full of vegetables and à la carte; registered as an official listing by the shop. Reviewers in 2026 say the restaurant was featured in Banana Man\'s "Sekkaku Gourmet" (broadcast 9 November 2025), where Himura of Banana Man ate the tarako spaghetti set; a signed photo hangs inside (July–September 2026).',
      philosophy: null, specialty: 'Tarako spaghetti.',
      anecdotes: [
        { text: 'Himura of the comedy duo Banana Man ate the tarako spaghetti set on "Sekkaku Gourmet" (aired 9 November 2025); a July 2026 fan who came for the same set was offered a photo with Himura\'s signed picture by the owner.', source: R + 'B532540380/' },
        { text: 'A July 2026 dinner guest noted that the dishes came at a good pace "even with just one person handling it".', source: R + 'B531477678/' },
        { text: 'A November 2026 regular, hooked since a first visit a year before after seeing the show, was tempted by the daily special but chose the tarako spaghetti again.', source: R + 'B538699496/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・イタリアン・パスタ、中京区要法寺前町709-2、京都市役所前駅から徒歩6分、12:00〜16:00 (ランチ・カフェ、料理L.O.15:00)、18:00〜21:00 (ディナー、料理L.O.20:00)、水曜定休、予約可 (カフェのみの予約は不可)、20席 (カウンター8、テーブル12)、貸切20名まで、禁煙、車椅子可、子ども連れ歓迎 (キッズメニュー)、カード・交通系IC・iD・QUICPay 可、QR 不可、2019年9月25日オープン、野菜たっぷりの定食とアラカルト。口コミ (2026年6月〜11月、英語): 寺町二条、たらこスパゲティ定食1,600円 (大葉と赤じそ、レモン、サラダ、スープ、スパニッシュオムレツ、フォカッチャ)、大盛り+300円、スパイスチキンカレー、ディナーのアラカルト (カプレーゼ、生ハムと桃、ホタテのジェノベーゼ、アクアパッツァ、タリアータ)、ティラミス、ソフトクリーム、焼き菓子、たらこソースの販売、絵本、週末は予約がおすすめ、「Sekkaku Gourmet」(2025年11月9日放送) で Banana Man の Himura が食べた、サイン入りの写真。',
      confidence: 'medium', sources: [TB, WEB, R + 'B530813933/', R + 'B531103333/', R + 'B531477678/', R + 'B532540380/', R + 'B532935667/', R + 'B533779807/', R + 'B534196119/', R + 'B535955923/', R + 'B536622243/', R + 'B538699496/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on Tabelog for weekend lunch; set meals on a tray; kids welcome; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区要法寺前町709-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.014480, 135.767159); cross-checked: GSI 京都府京都市中京区要法寺前町709番地 (lot) 21 m; kyoto_suehiro_teramachi is 10 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536622243/', R + 'B531103333/'],
    price_note: 'Prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tarako spaghetti set (salad, soup, Spanish omelette, focaccia)', '¥1,600', 'Lunch', 'no', 'no', 'September 2026.', 'tarako_set'),
      it('', '', 'Large portion', '+¥300', 'Lunch', 'no', 'no', 'July 2026.', 'large'),
      it('', '', 'Spice chicken curry set', '', 'Lunch', 'ask', 'no', 'August 2026.', 'curry_set'),
    ] }, {
    cuisine: '野菜たっぷりの定食とアラカルトのカフェ・トラットリア (食べログ)・たらこスパゲティ定食1,600円: 大葉と赤じそ、ほのかにレモンのクリーミーなたらこスパゲティに、サラダ、スープ (例: バターナッツかぼちゃ)、スパニッシュオムレツ、フォカッチャ、大盛り+300円 (2026年7〜9月)・スパイスチキンカレーの定食 (2026年8月)・夜のアラカルト: カプレーゼ、生ハムと桃、ホタテのジェノベーゼ、トマトとモッツァレラのパスタ、アクアパッツァ、タリアータ (2026年7月)・ティラミスなどのデザート、ソフトクリーム、持ち帰りの焼き菓子、たらこソースの販売 (2026年の口コミ)・昼1,000〜2,000円、夜6,000〜8,000円ほど (食べログ)',
    neighborhood: '寺町二条。京都市役所前駅から徒歩6分',
    gf_detail: 'グルテンフリー不可。名物は小麦のスパゲティで、パンやフォカッチャが付く (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターやクリームのたらこスパゲティ、チキンカレー、スパニッシュオムレツ、デザート (2026年の口コミ)。',
    notes: '[カフェ・トラットリア・寺町二条、たらこスパゲティ] 寺町通の明るく子ども連れにもやさしいカフェ・トラットリア。名物はたらこスパゲティ定食で、大葉と赤じそをのせたクリーミーなたらこのパスタに、サラダ、スープ、スパニッシュオムレツ、フォカッチャが付いて1,600円。2025年11月のテレビ番組「Sekkaku Gourmet」の収録の話を店主が語ってくれる。昼はデザートと持ち帰りの菓子、夜はイタリアンのアラカルト。週末の昼は予約を。水曜休み。',
  });
}

// ================================================================ node
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033017/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://nodehotel.com';
  const H = day(['07:30', '23:00']);
  put({
    id: 'kyoto_node_hotel_restaurant', name: 'node (node hotel)', category: 'OMNI',
    lat: 35.004741, lng: 135.754995, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog notes allergy information is available; the menu has pasta, bread and cakes alongside carpaccio, roast beef and steak (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a focus on vegetables, but the dishes reviewers name use Omi beef, fish, anchovy or dairy (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 7:30–23:00 (food last order 22:00); breakfast 7:30–10:00 by reservation, lunch 11:30–15:00, café 15:00–17:00, dinner and bar 17:00–23:00; closed on irregular days (Tabelog). No cover charge (Tabelog original チャージ料なし). Reservations accepted (Tabelog). 37 seats with counter and sofas; non-smoking, with a smoking room; wheelchair accessible; free Wi-Fi; private hire for over 50 (Tabelog). Cards and PayPay; no e-money (Tabelog). On the ground floor of the node hotel, entered past the lobby; Nishinotoin north of Shijo; 6 min walk from Karasuma or Shijo stations (Tabelog; March and July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishinotoin north of Shijo, node hotel 1F — 6 min walk from Shijo Stn',
    cuisine: 'Café, dining and bar of the node hotel, themed "Art Close to You", with farm-to-table dishes from Kyoto ingredients (January 2026) · lunch from ¥2,000 with salad and soup: roast beef bowl, seasonal pasta, fish of the day, hamburg steak; set drink +¥300 (February–October 2026) · dinner: fish carpaccio with anchovy vinaigrette ¥1,960, Omi beef roast beef salad ¥2,200, Omi beef Bolognese ¥2,200, Omi beef sirloin cap steak ¥4,180 (January 2026) · cakes, tarts and fondant chocolate at café time; sake, shochu, wine and cocktails (Tabelog; 2026 reviews) · about ¥1,000–4,000 (Tabelog)',
    website: WEB, gmaps: gm('node hotel restaurant 京都 西洞院'), menu_url: null,
    notes: '[Hotel café-bar · Nishinotoin Shijo, art all around] The all-day lounge of the node hotel, hung with large modern paintings and set to jazz: weekday-friendly lunches from ¥2,000 (hamburg steak, pasta, fish of the day, roast-beef bowl, with salad and soup), cakes in the afternoon, and Omi beef, carpaccio and cocktails at night. Most praise the food; one June 2026 guest found the fish tired, and one regular finds the staff a little cool. Open daily to 23:00.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen (chef unnamed) and staff'], origin: null,
      background: 'Per Tabelog: the café, bar and Italian dining of the node hotel, offering art and food in an extraordinary space, with breakfast, lunch, café and dinner; registered as an official listing by the operator. A January 2026 reviewer describes the hotel concept "Art Close to You" and a farm-to-table menu of seasonal Kyoto ingredients, with fish chosen daily by the chef.',
      philosophy: 'Farm to table with seasonal Kyoto ingredients (January 2026 review).', specialty: 'Omi beef dishes; pasta lunch.',
      anecdotes: [
        { text: 'A March 2026 regular was unsure at first because the hotel lobby is right at the entrance, but went in on the strength of the sign outside and has been coming back often since.', source: R + 'B527192978/' },
        { text: 'An October 2026 couple, chatting under the art over hamburg steak and pasta, found the chef and staff so friendly that the visit ran longer than planned.', source: R + 'B537568918/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・バー・イタリアン、中京区西洞院四条上ル蟷螂山町461、阪急烏丸駅・地下鉄四条駅から徒歩6分、毎日 7:30〜23:00 (料理L.O.22:00)、朝食7:30〜10:00 (要予約)、ランチ11:30〜15:00、カフェ15:00〜17:00、ディナー&バー17:00〜23:00、不定休、チャージ料なし、予約可、37席、禁煙 (喫煙室あり)、車椅子可、Wi-Fi、カード・PayPay 可、ホテルのレストラン、野菜にこだわる、アレルギー表示あり、ベジタリアン対応のメニューあり、アートと料理の非日常の空間。口コミ (2026年1月〜10月、英語): ホテルの1階、「Art Close to You」のコンセプト、京都の旬の食材のファーム・トゥ・テーブル、鮮魚のカルパッチョ1,960円、近江牛のローストビーフサラダ2,200円、近江牛のボロネーゼ2,200円、近江牛のステーキ4,180円、ランチ2,000円から (ローストビーフ丼、季節のパスタ、魚料理、ハンバーグ)、ドリンク+300円、ケーキ、タルト、フォンダンショコラ、ジャズ、大きな現代アート、魚がいまひとつとの声 (2026年6月)、スタッフはややクール。',
      confidence: 'medium', sources: [TB, WEB, R + 'B465030049/', R + 'B521265372/', R + 'B522936855/', R + 'B524011029/', R + 'B524460205/', R + 'B527192978/', R + 'B532183559/', R + 'B532950688/', R + 'B535156197/', R + 'B537568918/'] },
    cultural_comfort: { level: 'english', note: 'Hotel lounge; walk in past the lobby; book breakfast; cards and PayPay.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists allergy information available and vegetarian options (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西洞院四条上ル蟷螂山町461',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004741, 135.754995); cross-checked: GSI 京都府京都市中京区蟷螂山町461番地 (lot) 44 m; kyoto_sou_nishihorin is 31 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521265372/', R + 'B524011029/'],
    price_note: 'Prices from January and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fresh fish carpaccio, anchovy vinaigrette', '¥1,960', 'Dinner', 'ask', 'no', 'January 2026.', 'carpaccio'),
      it('', '', 'Omi beef Bolognese', '¥2,200', 'Dinner', 'no', 'no', 'January 2026.', 'omi_bolognese'),
      it('', '', 'Omi beef sirloin cap steak', '¥4,180', 'Dinner', 'ask', 'no', 'January 2026.', 'omi_steak'),
      it('', '', 'Hamburg steak lunch (salad, soup)', '¥2,000', 'Lunch', 'ask', 'no', 'March 2026; set drink +¥300.', 'hamburg_lunch'),
    ] }, {
    cuisine: '「Art Close to You」をコンセプトにした node hotel のカフェ・ダイニング・バー、京都の食材のファーム・トゥ・テーブル (2026年1月)・ランチは2,000円から、サラダとスープ付き: ローストビーフ丼、季節のパスタ、本日の魚、ハンバーグ、セットドリンク+300円 (2026年2〜10月)・夜: 鮮魚のカルパッチョ アンチョビのヴィネグレット1,960円、近江牛のローストビーフサラダ2,200円、近江牛のボロネーゼ2,200円、近江牛のステーキ4,180円 (2026年1月)・カフェタイムのケーキ、タルト、フォンダンショコラ、日本酒、焼酎、ワイン、カクテル (食べログ、2026年の口コミ)・1,000〜4,000円ほど (食べログ)',
    neighborhood: '四条の北の西洞院通、node hotel の1階。四条駅から徒歩6分',
    gf_detail: '要確認。食べログにアレルギー表示ありとある。パスタ、パン、ケーキのほか、カルパッチョ、ローストビーフ、ステーキ (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアン対応と野菜へのこだわりの記載があるが、口コミにある料理は近江牛、魚、アンチョビ、乳製品を使う (食べログ、2026年の口コミ)。',
    notes: '[ホテルのカフェ・バー・西洞院四条、アートに囲まれて] node hotel の終日営業のラウンジ。大きな現代アートが飾られ、ジャズが流れる。ランチは2,000円から (ハンバーグ、パスタ、本日の魚、ローストビーフ丼、サラダとスープ付き)、午後はケーキ、夜は近江牛、カルパッチョ、カクテル。料理をほめる声が多いが、2026年6月の客は魚に鮮度を欠いたと書き、常連の一人はスタッフがややクールと感じている。毎日23時まで。',
  });
}

// ================================================================ Etto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041705/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['18:00', '22:30']); const SU = day(['11:30', '14:30'], ['18:30', '21:30']);
  put({
    id: 'kyoto_etto_italian', name: 'Etto', category: 'OMNI',
    lat: 35.021520, lng: 135.753746, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the restaurant states it offers no gluten-free menu (Tabelog); the course includes two pastas, bread and grissini (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the restaurant states it offers no vegan or vegetarian menu (Tabelog); a set course of fish, foie gras and wagyu (2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday–Saturday and holidays 18:00–22:30 (one 18:00 or 18:30 simultaneous start); Sunday lunch 11:30–14:30 and dinner from 18:30; closed Wednesday and twice a month on irregular days (Tabelog; 2026 reviews). Reservation only; no vegan, vegetarian or gluten-free menus (Tabelog). A 10% service charge (Tabelog original サービス料10％), on top of the ¥13,200 omakase course, tax included (October 2026). 8 counter seats with an open kitchen; private use possible; non-smoking; bicycle parking on request (Tabelog). Cards; no e-money or QR (Tabelog). Down a long stone path in a quiet residential lane west of the Kyoto Prefectural Office; 10–15 min walk from Marutamachi Stn (Tabelog; October 2026). Opened 22 August 2024 (Tabelog).',
    hours: { 0: WK, 1: WK, 3: WK, 4: WK, 5: WK, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of the Kyoto Prefectural Office, a townhouse down a stone path — 10–15 min walk from Marutamachi Stn',
    cuisine: 'Innovative Italian omakase at an eight-seat counter, Japanese ingredients through Italian technique (2026 reviews) · one course, ¥13,200 at lunch or dinner, changing every two months; wine pairing to ¥24,800 in total (August–October 2026) · e.g. fried ginkgo-and-pistachio gnocchi with house karasumi; sweet shrimp with Genovese and finger lime; foie-gras ice cream with plum and hozuki in a tart; peanut sformato with anago; beef-cheek squid-ink grissini with autumn truffle; bagna cauda poured as a soup over autumn vegetables (September–October 2026) · two pastas, e.g. cold whole-wheat bavettini with Rishiri uni and Senshu eggplant, egg tagliatelle with chestnuts or a ragù; charcoal-grilled akou with new-ginger risotto; Nagano sirloin cap (September–October 2026) · about 350 wines, mostly Italian (October 2026) · ¥15,000–20,000 with drinks (Tabelog)',
    website: null, gmaps: gm('Etto イタリアン 京都 上京区'), menu_url: null,
    notes: '[Italian omakase · west of the Prefectural Office, hidden townhouse counter] Down a long stone path to a renovated townhouse with a small garden: eight seats at a flat counter where two cooks handle all the cooking and service for one Italian omakase of Kyoto and Japanese produce — ginkgo gnocchi with karasumi, bagna cauda poured as soup, two pastas, charcoal-grilled fish and wagyu — for ¥13,200 plus 10% service. Reviewers in 2026 say it is listed in the Michelin Guide. No vegan, vegetarian or gluten-free menus. Reservation only; closed Wednesday.',
    chef_bio: { chef_name: 'Seiya Tatsumi', roles: ['Chef (named by a September 2026 reviewer)', 'Second cook and server'], origin: null,
      background: 'Per Tabelog: opened 22 August 2024, a reservation-only eight-seat counter. A September 2026 reviewer names the chef as Seiya Tatsumi, who trained for many years at the Italian restaurant RADICE; reviewers in 2026 say the restaurant is listed in the Michelin Guide Kyoto-Osaka for a second year, and that the name means "small" in Italian (October 2026).',
      philosophy: 'Japanese ingredients transformed with Italian technique (August 2026 review).', specialty: 'Omakase with two pastas; bagna cauda soup.',
      anecdotes: [
        { text: 'An October 2026 guest wrote that two good-looking men handle all the cooking and service, and that the pairing of a Shiraz appassimento with the smoked sirloin cap was the high point.', source: R + 'B538229852/' },
        { text: 'A September 2026 diner was shown the bread both before and after baking, then served it fresh from the oven mid-course.', source: R + 'B536180256/' },
        { text: 'Toward the end of the course the staff checked how full each guest was so portions could be adjusted, and tea sweets could be taken home — October 2026.', source: R + 'B538083134/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・イノベーティブ、上京区大黒屋町47、地下鉄丸太町駅から徒歩10分、月・火・木〜土・祝 18:00〜22:30、日 11:30〜14:30・18:30〜21:30、水曜と月2回の不定休、完全予約制、ヴィーガン・ベジタリアン・グルテンフリーのメニューはない、サービス料10%、8席、個室あり、貸切可、禁煙、自転車置き場、カード可、電子マネー・QR 不可、2024年8月22日オープン。口コミ (2026年8月〜10月、英語): 京都府庁の西の住宅街、長い石畳の先の町家、庭、8席のカウンター、おまかせのコース13,200円 (昼も夜も)、2か月ごとに替わる、ワインペアリング込み24,800円、銀杏とピスタチオのニョッキに自家製のからすみ、甘海老、ほおずきとフォアグラのアイス、穴子と落花生のスフォルマート、トリュフ、バーニャカウダのスープ、2種のパスタ (利尻の雲丹と泉州の茄子の冷製、栗のタリアテッレ)、あこうの炭火焼き、長野の牛、ワイン約350本、シェフは Seiya Tatsumi (RADICE で長く修業)、ミシュランガイドに掲載との声。',
      confidence: 'medium', sources: [TB, R + 'B533660142/', R + 'B533769071/', R + 'B534408129/', R + 'B536180256/', R + 'B536244611/', R + 'B536358911/', R + 'B537025697/', R + 'B538044154/', R + 'B538083134/', R + 'B538229852/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; one simultaneous-start course; dishes explained; 10% service; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区大黒屋町47',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.021520, 135.753746); cross-checked: GSI 京都府京都市上京区大黒屋町47番地 (lot) 42 m; kyoto_kameya_hironaga is 50 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536358911/', R + 'B538229852/'],
    price_note: 'Course price from 2026 reviews; tax included, plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (lunch or dinner)', '¥13,200', 'Course', 'no', 'no', 'Plus 10% service.', 'omakase'),
      it('', '', 'Omakase course with wine pairing', '¥24,800', 'Course', 'no', 'no', 'September 2026 total.', 'omakase_pairing'),
    ] }, {
    cuisine: '8席のカウンターのイノベーティブなイタリアンのおまかせ、日本の食材をイタリアの技法で (2026年の口コミ)・コースは昼も夜も13,200円の一つ、2か月ごとに替わる、ワインペアリング込みで24,800円 (2026年8〜10月)・例: 銀杏とピスタチオのニョッキの揚げ物に自家製のからすみ、甘海老のジェノベーゼとフィンガーライム、ほおずきとプラムとフォアグラのアイスのタルト、落花生のスフォルマートと穴子、牛ほほ肉とイカ墨のグリッシーニに秋トリュフ、秋野菜にスープ仕立てのバーニャカウダ (2026年9〜10月)・パスタは2種、例: 利尻の雲丹と泉州の茄子の全粒粉の冷製バヴェッティーニ、栗のタリアテッレやラグー、あこうの炭火焼きと新生姜のリゾット、長野の牛 (2026年9〜10月)・ワインは約350本、イタリア中心 (2026年10月)・飲み物込み15,000〜20,000円ほど (食べログ)',
    neighborhood: '京都府庁の西、石畳の奥の町家。丸太町駅から徒歩10〜15分',
    gf_detail: 'グルテンフリー不可。グルテンフリーのメニューはないと店が明記 (食べログ)。コースに2種のパスタ、パン、グリッシーニ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ヴィーガン・ベジタリアンのメニューはないと店が明記 (食べログ)。魚、フォアグラ、和牛のコース (2026年の口コミ)。',
    notes: '[イタリアンのおまかせ・府庁の西、隠れ家の町家カウンター] 長い石畳の先、小さな庭のある改装した町家。フラットなカウンター8席で、二人の男性が調理も接客もこなし、京都と日本の食材のイタリアンのおまかせを出す。からすみをのせた銀杏のニョッキ、スープ仕立てのバーニャカウダ、2種のパスタ、炭火の魚と和牛で13,200円、別にサービス料10%。2026年の口コミはミシュランガイド掲載と書いている。ヴィーガン・ベジタリアン・グルテンフリーのメニューはない。完全予約制、水曜休み。',
  });
}

// ================================================================ ラニオン Lannion
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26003179/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://lannion.gourmet.coocan.jp/';
  const H = day(['11:30', '15:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_lannion_marutamachi', name: 'ラニオン (Lannion)', category: 'OMNI',
    lat: 35.017410, lng: 135.773327, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses of terrine, soup, fish and meat with homemade bread, choux and pastry desserts; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses of fish, pork, beef and chicken with butter and cream desserts (2023–2026 reviews).',
    hours_raw: 'Tuesday, Wednesday, Saturday and Sunday: lunch 11:30–15:00 (last order 13:30), dinner 18:00–21:30 (last order 19:30); closed Monday, Thursday and Friday; hours may change (Tabelog). Dinner by reservation; no children below elementary school age (Tabelog remarks). 20 seats; private hire up to 20; non-smoking (Tabelog). Cards: AMEX listed; no e-money or QR (Tabelog). 1F of Capital Villa Marutamachi, east of Kawabata Marutamachi on the south side; 2 min walk from Jingu-Marutamachi Stn (Tabelog; March 2025). Opened 4 November 2005 (Tabelog).',
    hours: { 1: H, 2: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata Marutamachi, east side — 2 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Classic French courses at good value in a cosy, picture-hung room with white tablecloths (2023–2026 reviews) · lunch courses such as Déjeuner B ¥4,500 with fish, meat, dessert, homemade bread and coffee (June 2023) · Gruyère choux amuse-bouche, Kyoto chicken terrine, Kagoshima yokowa mi-cuit with a seasonal salad, vegetable soups, pan-fried rockfish or sea bass, herb-crusted Aichi pork tenderloin with braised cheek, steak (2025–2026 reviews) · desserts: apple mille-feuille, crème caramel with caramel ice cream, strawberry and lime, meringues with coffee (2025–2026 reviews) · lunch ¥3,000–4,000, dinner ¥8,000–10,000 (Tabelog)',
    website: WEB, gmaps: gm('ラニオン Lannion 京都 川端丸太町'), menu_url: null,
    notes: '[French · Kawabata Marutamachi, couple-run since 2005] A cosy French restaurant near the Kamo River, run by a warm owner couple since 2005: white tablecloths, paintings, and generous, light classic courses — a Gruyère choux to start, terrine, vegetable soup, fish from Awaji or Aomori, Aichi pork two ways, crème caramel — with homemade bread and fairly priced wine. Lunch is the bargain and fills with regulars. Dinner by reservation; no young children. Open Tuesday, Wednesday and weekends.',
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed), who welcome guests (July 2026)'], origin: null,
      background: 'Per Tabelog: opened 4 November 2005; dinner by reservation, no children below elementary age. Reviewers say the name comes from a town in Brittany (June 2023), that the owner couple greet guests warmly (July 2026), and that the restaurant is often visited by Kyoto University professors, including Nobel laureates (June 2026).',
      philosophy: null, specialty: 'Lunch course; Aichi pork two ways.',
      anecdotes: [
        { text: 'Asked in June 2023 about speaking fluent French, the owner laughed and said no.', source: R + 'B467088530/' },
        { text: 'A June 2026 reviewer calls it a place often visited by Kyoto University professors, including Nobel Prize winners.', source: R + 'B529605744/' },
        { text: 'A March 2026 party of four had the dishes chosen in advance by a guest who once worked with the owner\'s wife.', source: R + 'B523764133/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ、左京区川端丸太町東入 キャピタルヴィラ丸太町 1F、京阪神宮丸太町駅から徒歩2分、火・水・土・日 11:30〜15:00 (L.O.13:30)・18:00〜21:30 (L.O.19:30)、月・木・金定休、予約可 (ディナーは要予約)、未就学児不可、20席、貸切20名まで、禁煙、カード可 (AMEX)、電子マネー・QR 不可、2005年11月4日オープン。口コミ (2023年6月〜2026年10月、英語): 店名はブルターニュの町の名、白いクロス、絵の飾られた温かい店内、ランチのコース (Déjeuner B 4,500円)、グリュイエールのシュー、京都の若鶏のテリーヌ、鹿児島の Yokowa のミキュイ、野菜のスープ、淡路や青森の魚のポワレ、愛知の豚のロースと頬肉、ステーキ、りんごのミルフィーユ、クレームキャラメルとキャラメルのアイス、メレンゲ、自家製パン、手頃なワイン、オーナー夫妻の温かい迎え、京大の教授やノーベル賞受賞者も訪れるとの声。',
      confidence: 'medium', sources: [TB, WEB, R + 'B287568813/', R + 'B467088530/', R + 'B480614535/', R + 'B482940159/', R + 'B502673211/', R + 'B505897643/', R + 'B510068759/', R + 'B523764133/', R + 'B529605744/', R + 'B532556377/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book dinner ahead; no young children; set courses; AMEX listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区川端丸太町東入 キャピタルヴィラ丸太町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017410, 135.773327); the address has no lot number and GSI matches only 左京区, so loc_precise false; nearest Kyoto record 69 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B467088530/'],
    price_note: 'One lunch price from a June 2023 review; check current prices.', last_checked: TODAY, items: [
      it('', '', 'Déjeuner B (fish, meat, dessert, bread, coffee)', '¥4,500', 'Lunch', 'ask', 'no', 'June 2023, tax included.', 'dejeuner_b'),
    ] }, {
    cuisine: '白いクロスと絵の飾られた温かい店で、手頃な正統派のフランス料理のコース (2023〜2026年の口コミ)・ランチのコース、例: 魚、肉、デザート、自家製パン、コーヒーの Déjeuner B 4,500円 (2023年6月)・グリュイエールのシューのアミューズ、京都の若鶏のテリーヌ、鹿児島の Yokowa のミキュイとサラダ、野菜のスープ、白身魚のポワレ、ハーブをまとった愛知の豚のロースと煮込んだ頬肉、ステーキ (2025〜2026年の口コミ)・デザート: りんごのミルフィーユ、クレームキャラメルとキャラメルのアイス、苺とライム、コーヒーとメレンゲ (2025〜2026年の口コミ)・昼3,000〜4,000円、夜8,000〜10,000円 (食べログ)',
    neighborhood: '川端丸太町の東。神宮丸太町駅から徒歩2分',
    gf_detail: '要確認。テリーヌ、スープ、魚、肉のコースに、自家製パン、シュー、パイのデザート。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、豚、牛、鶏のフランス料理のコースに、バターやクリームのデザート (2023〜2026年の口コミ)。',
    notes: '[フレンチ・川端丸太町、2005年から夫婦の店] 鴨川近くの温かいフランス料理店。2005年からオーナー夫妻が迎える。白いクロスと絵、たっぷりで軽やかな正統派のコース: はじめにグリュイエールのシュー、テリーヌ、野菜のスープ、淡路や青森の魚、愛知の豚の2種の仕立て、クレームキャラメル。自家製パンと手頃なワイン。ランチがお得で常連でにぎわう。ディナーは要予約、未就学児不可。火・水・土・日の営業。',
  });
}

save();
