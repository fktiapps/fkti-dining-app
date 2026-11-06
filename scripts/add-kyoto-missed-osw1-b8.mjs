// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 8.
//   + 焼き鳥 参 木屋町店 umaimonyaki sun Kiyamachi (yakitori and vegetable dishes in a Kiyamachi alley; lard rice)
//   + 先斗町薬膳カレー Pontocho Yakuzen Curry (one-man yakuzen curry counter and bar between Pontocho and Kiyamachi; since 2015)
//   + スイーツ カフェ キョウト ケイゾー Sweets Cafe KYOTO KEIZO (machiya café of the "10-minute" Mont Blanc; Cafe WEST Tabelog 100 2025)
//   + 美齢 Meirin (Cantonese-based Chinese in a Nishijin back alley; Chinese WEST Tabelog 100 2021, 2023, 2024, 2026)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26005922, 26025776)
//   and from `next notable 200` (26027246, 26005466). None is in data/kyoto.json: grep by name (参/sun, 薬膳カレー/Yakuzen,
//   ケイゾー/KEIZO, 美齢/Meirin) and address (下樵木町204, 下樵木町203, 御供町293, 寺今町511) found none; kyoto_mirei
//   (実伶) is a different shop.
//   Nearest existing pins: kyoto_pontocho_fujiwara 12.6 m from sun; kyoto_g_men_kiyamachi 12.9 m from Yakuzen Curry (sun and
//   Yakuzen Curry are 8.6 m apart); vm_premarche_gelateria_kyot 54 m from KEIZO; mp_sobaya_nikora_nicolas 388 m from Meirin.
//   Group checks: no branch list found for 参 (the listing is a 木屋町店; a search found no other branch). KEIZO is a small
//   group of different formats (this café, a bakery "KYOTO KEIZO BAKERY パンとパティシエ" per a 2020 Walkerplus article, and
//   another shop with tarts per a September 2026 review), none in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 焼き鳥 参 木屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005922/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_yakitori_san_kiyamachi', name: '焼き鳥 参 木屋町店 (umaimonyaki sun Kiyamachi Ten)', category: 'OMNI',
    lat: 35.005622, lng: 135.770781, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with tare or salt, fried chicken, lotus-root chijimi and an omelette with tartar sauce; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the shop is known for vegetable dishes (raw vegetables with spicy miso, eggplant dengaku), but no vegan dish is confirmed (Tabelog; 2024–2026 reviews).',
    hours_raw: '18:00–24:00 every day, last order 23:00; irregular closures (Tabelog). Reservations taken; birthday-cake requests by phone the day before (Tabelog); Friday evenings book up (September 2024). 30 seats over two floors: counter and tables downstairs, tatami, sunken-kotatsu and couple seats up a steep stair; the upstairs can be booked for 14–20 people (Tabelog; 2025–2026 reviews). Heated tobacco in a designated area (Tabelog). Cards accepted (Tabelog). Orders by QR code (August 2026). Menus in English, Chinese and Korean; English- and Korean-speaking staff (Tabelog). Down a narrow alley off Kiyamachi, 3 min from Hankyu Kawaramachi Stn (Tabelog; October 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'An alley off Kiyamachi north of Shijo — 3 min from Hankyu Kawaramachi Stn',
    cuisine: 'Yakitori over binchotan with locally sourced chicken, plus vegetables bought daily (October 2025) · 10-skewer assortment; skewers such as neck, gizzard, heart, tsukune, negima, shiso-wrapped neck and breast, quail eggs, shiitake (2024–2026 reviews) · "lard rice", the house signature (October 2025) · fried bonjiri, young-chicken kara-age, fried cartilage · avocado with house chili oil, eggplant dengaku, lotus-root chijimi, raw vegetables with spicy miso, broad beans, potato salad, kimchi, omelette with tartar sauce (2024–2026 reviews) · courses with all-you-can-drink (Tabelog)',
    website: null, gmaps: gm('焼き鳥 参 木屋町店'), menu_url: null,
    notes: '[Yakitori · Kiyamachi, binchotan skewers and lard rice down an alley] A two-storey yakitori house down a narrow alley off Kiyamachi: counter and tables below, tatami and sofa seats up a steep stair. The skewers are grilled over binchotan, the vegetables come in daily — raw ones with a spicy miso dip, eggplant dengaku, lotus-root chijimi — and the thing to finish with is the "lard rice". Order by QR code; English menus. Most reviews praise the skewers and the staff; an April 2024 visitor found the service cold and rushed. Open nightly 18:00–24:00.',
    chef_bio: { chef_name: null, roles: ['Operator not named (Tabelog lists an invoice number)'], origin: null,
      background: 'An October 2025 reviewer describes the yakitori as grilled over binchotan from fresh, locally sourced chicken, with vegetables sourced daily, and the "lard rice" as featured in a famous restaurant guide.',
      philosophy: null, specialty: 'Binchotan yakitori; lard rice; vegetable dishes.',
      anecdotes: [
        { text: 'An August 2022 solo diner found that skewers could only be ordered two of a kind.', source: R + 'B453065114/' },
        { text: 'An April 2024 visitor praised the food but found the service arrogant — told off over a bag, a towel thrust at the diner, a plate cleared the moment it was empty — and would not return.', source: R + 'B483139013/' },
        { text: 'A March 2026 diner liked dipping the side-dish vegetables in the spicy miso.', source: R + 'B525306462/' },
        { text: '"Be careful on the stairs to the second floor; they are quite steep." — August 2026.', source: R + 'B533333828/' },
      ],
      japanese_sources_summary: '食べログ: 焼き鳥 参 木屋町店 (umaimonyaki sun)、焼き鳥・もつ鍋・野菜料理、中京区木屋町通四条上る下樵木町204-3、阪急河原町駅から徒歩3分、毎日18:00〜24:00 (L.O. 23:00)、不定休、予約可、30席 (カウンター・テーブル・掘りごたつ・座敷)、2階は14〜20名で貸切可、加熱式たばこ専用の喫煙所、カード可、英語・中国語・韓国語メニュー、英語・韓国語のスタッフ、野菜にこだわり、ベジタリアンメニューあり、飲み放題コース。口コミ (2024〜2026年、英語): 備長炭、地元の鶏、毎日仕入れる野菜、名物のラードご飯、10本盛り、つくね、ぼんじり唐揚げ、アボカドの自家製ラー油、茄子田楽、蓮根チヂミ、QR 注文、急な階段。',
      confidence: 'medium', sources: [TB, R + 'B453065114/', R + 'B483139013/', R + 'B485304378/', R + 'B491550864/', R + 'B503924764/', R + 'B516414938/', R + 'B525306462/', R + 'B527845155/', R + 'B528635820/', R + 'B533333828/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); QR-code ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通四条上る下樵木町204-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005622, 135.770781); cross-checked: GSI 京都府京都市中京区下樵木町204番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485304378/', R + 'B516414938/'],
    price_note: 'No menu or prices read; dishes from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yakitori assortment, 10 skewers', '', 'Yakitori', 'ask', 'no', 'May and September 2024.', 'moriawase_10'),
      it('', '', 'Lard rice', '', 'Rice', 'ask', 'no', 'October 2025.', 'lard_rice'),
      it('', '', 'Avocado with house chili oil', '', 'Small plates', 'ask', 'ask', 'May 2024.', 'avocado_rayu'),
    ] }, {
    cuisine: '地元の鶏を備長炭で焼く焼き鳥と、毎日仕入れる野菜 (2025年10月)・10本盛り、せせり、砂肝、ハツ、つくね、ねぎま、しその巻いたせせりと胸、うずら、しいたけなどの串 (2024〜2026年の口コミ)・名物の「ラードご飯」(2025年10月)・ぼんじりの唐揚げ、若鶏の唐揚げ、軟骨の唐揚げ・アボカドの自家製ラー油、茄子田楽、蓮根のチヂミ、生野菜の辛味噌、そら豆、ポテトサラダ、キムチ、タルタル入りの卵焼き (2024〜2026年の口コミ)・飲み放題付きコース (食べログ)',
    neighborhood: '四条の北、木屋町から入る路地。阪急河原町駅から徒歩3分',
    gf_detail: '要確認。たれか塩の焼き鳥、唐揚げ、蓮根のチヂミ、タルタル入りの卵焼き。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログはベジタリアンメニューありとし、野菜料理 (生野菜の辛味噌、茄子田楽) で知られるが、ヴィーガンの料理は確認されていない (食べログ、2024〜2026年の口コミ)。',
    notes: '[焼き鳥・木屋町、路地の奥の備長炭の串とラードご飯] 木屋町から細い路地を入った2階建ての焼き鳥店。1階はカウンターとテーブル、急な階段の上に座敷とソファ席。串は備長炭で焼き、野菜は毎日仕入れる。生野菜の辛味噌、茄子田楽、蓮根のチヂミ、締めは「ラードご飯」。QR で注文、英語メニューあり。串とスタッフをほめる口コミが多いが、2024年4月には接客が冷たく急かされたという声も。毎晩18時〜24時。',
  });
}

// ================================================================ 先斗町薬膳カレー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025776/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '24:00']);
  put({
    id: 'kyoto_pontocho_yakuzen_curry', name: '先斗町薬膳カレー (Pontocho Yakuzen Curry)', category: 'OMNI',
    lat: 35.005695, lng: 135.77075, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A September 2022 review says the curry is thickened with rice flour, and a January 2023 review says the vegetable curry has no flour or oil, but there is no recent confirmation and the bar snacks are not described (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A January 2023 review describes the vegetable curry as made without oil, flour or animal products, and Tabelog lists vegetarian options; the other curries are beef, chicken or keema (Tabelog; 2022–2026 reviews).',
    hours_raw: '11:30–24:00; closed Tuesday and irregularly (Tabelog). Curry by day, a bar at night (April 2024). Reservations taken; takeaway; BYO allowed (Tabelog). 7 counter seats; smoking allowed except at lunch (Tabelog). No cards or e-money; PayPay accepted (Tabelog). No charge (Tabelog). The owner works alone, so food can take a while (February, April 2024). Poor mobile reception inside (April, September 2024). Tucked away between Pontocho and Kiyamachi (April 2023; September 2022). Opened 1 June 2015 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Pontocho and Kiyamachi, north of Shijo — 264 m from Gion-Shijo Stn',
    cuisine: 'Yakuzen (medicinal) curry with 38 spices, mild rather than hot (2022–2026 reviews) · yakuzen beef curry ¥800 (October 2026); beef, keema and vegetable curries from ¥700 (July 2025) · vegetable curry and chicken curry; chicken tikka with vegetables ¥1,000 (July 2025) · bar snacks: shrimp and avocado stir-fry, chicken tikka, apple bacon ¥500 (February 2024) · Nepalese iced tea, Kahlua milk, beer · the house spice salt, sold by the jar (July 2025)',
    website: null, gmaps: gm('先斗町薬膳カレー'), menu_url: null,
    notes: '[Curry · Pontocho, a one-man yakuzen curry bar] A seven-seat counter hidden in the lanes between Pontocho and Kiyamachi, where the owner, working alone, serves yakuzen curry by day and drinks by night until midnight. The curries — beef, keema, vegetable, chicken — are built on 38 spices, gently hot and cheap (¥700–800); the vegetable curry has been described as made without oil or flour. Bar snacks such as shrimp-and-avocado or chicken tikka round it out. Food can take a while when the owner is busy, and phone signal is weak. PayPay or cash; smoking allowed after lunch; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; reviews describe the owner running the shop alone)'], origin: null,
      background: 'Tabelog describes the shop as specialising in medicinal-food (yakuzen) curry and gives the opening as 1 June 2015. Reviews from 2022 and 2023 mention 38 spices, no additives and rice flour. The website listed on Tabelog (shaftjapan.com) did not load on 5 November 2026.',
      philosophy: null, specialty: 'Yakuzen beef and vegetable curry.',
      anecdotes: [
        { text: '"I doubted it could be this tasty without animal products." — the vegetable curry, January 2023.', source: R + 'B458971862/' },
        { text: 'A July 2025 diner, chatting with the owner about spices, was offered the shop\'s special spice salt and took a jar home.', source: R + 'B512318492/' },
        { text: 'An April 2024 visitor waited for the food because the owner was alone, and found the beef curry closer to a Japanese curry than a spice curry.', source: R + 'B484558165/' },
      ],
      japanese_sources_summary: '食べログ: 先斗町薬膳カレー、カレー・薬膳・バル、中京区下樵木町203-5 sakizo立誠校前ビル 1F、祇園四条駅から264m、11:30〜24:00、火曜休み (ほか不定休)、予約可、7席、喫煙可 (ランチのみ禁煙)、カード・電子マネー不可、PayPay 可、チャージなし、持ち込み可、テイクアウト可、野菜にこだわり、ベジタリアンメニューあり、2015年6月1日オープン、薬膳カレーの専門店。口コミ (2022〜2026年、英語): 38種のスパイス、無添加、米粉、油と小麦粉を使わない野菜カレー、薬膳ビーフカレー800円、700円からのカレー、チキンティッカ、海老とアボカドの炒め物、アップルベーコン500円、店主一人、電波が弱い、スパイス塩。',
      confidence: 'low', sources: [TB, R + 'B456899969/', R + 'B458971862/', R + 'B464490101/', R + 'B476380862/', R + 'B479651635/', R + 'B484558165/', R + 'B491785029/', R + 'B500060501/', R + 'B512318492/', R + 'B537234279/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seven counter seats; PayPay or cash; smoking allowed after lunch.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区下樵木町203-5 sakizo立誠校前ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005695, 135.770750); cross-checked: GSI 京都府京都市中京区下樵木町203番地 (lot) 6m; 8.6 m from kyoto_yakitori_san_kiyamachi; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537234279/', R + 'B512318492/', R + 'B479651635/'],
    price_note: 'No menu read; prices from February 2024 – October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yakuzen beef curry', '¥800', 'Curry', 'ask', 'no', 'October 2026.', 'yakuzen_beef'),
      it('', '', 'Vegetable curry', '¥700', 'Curry', 'ask', 'ask', 'From ¥700, July 2025.', 'yasai_curry'),
      it('', '', 'Vegetable and chicken tikka curry', '¥1,000', 'Curry', 'ask', 'no', 'July 2025.', 'tikka_curry'),
      it('', '', 'Apple bacon', '¥500', 'Bar snacks', 'ask', 'no', 'February 2024.', 'apple_bacon'),
    ] }, {
    cuisine: '38種のスパイスの薬膳カレー、辛さはおだやか (2022〜2026年の口コミ)・薬膳ビーフカレー800円 (2026年10月)、ビーフ、キーマ、野菜のカレーは700円から (2025年7月)・野菜カレーとチキンカレー、野菜とチキンティッカ1,000円 (2025年7月)・バルのつまみ: 海老とアボカドの炒め物、チキンティッカ、アップルベーコン500円 (2024年2月)・ネパールのアイスティー、カルーアミルク、ビール・店のスパイス塩、瓶で販売 (2025年7月)',
    neighborhood: '四条の北、先斗町と木屋町の間。祇園四条駅から264m',
    gf_detail: '要確認。2022年9月の口コミは米粉でとろみをつけるとし、2023年1月の口コミは野菜カレーに小麦粉と油を使わないとするが、最近の確認はなく、バルのつまみの情報もない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。2023年1月の口コミは野菜カレーを油、小麦粉、動物性食品なしと書き、食べログはベジタリアンメニューありとする。ほかのカレーはビーフ、チキン、キーマ (食べログ、2022〜2026年の口コミ)。',
    notes: '[カレー・先斗町、一人で営む薬膳カレーのバル] 先斗町と木屋町の間の路地に隠れた7席のカウンター。昼は薬膳カレー、夜は24時までお酒を、店主が一人で出す。カレーはビーフ、キーマ、野菜、チキンで、38種のスパイス、辛さはおだやか、700〜800円と安い。野菜カレーは油も小麦粉も使わないという口コミも。海老とアボカドやチキンティッカなどのつまみも。店主が忙しいと料理に時間がかかり、電波も弱い。PayPay か現金、昼以外は喫煙可、火曜休み。',
  });
}

// ================================================================ スイーツ カフェ キョウト ケイゾー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26027246/'; const R = TB + 'dtlrvwlst/';
  const WALKER = 'https://www.walkerplus.com/article/226198/';
  const H = day(['08:30', '17:30']);
  put({
    id: 'kyoto_sweets_cafe_keizo', name: 'スイーツ カフェ キョウト ケイゾー (Sweets Cafe KYOTO KEIZO)', category: 'OMNI',
    lat: 35.008626, lng: 135.749814, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The Mont Blanc is built on a low-temperature-baked meringue with cream and chestnut or matcha paste, but parfaits with sablé, cakes and lunch plates are also served; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the Mont Blanc and cakes use meringue (egg white) and Hokkaido cream; parfaits use ice cream (2026 reviews).',
    hours_raw: '8:30–17:30 every day; hours may change (Tabelog). No reservations (Tabelog); queues at weekends and in season — over 30 minutes in November 2026, two groups waiting on a September 2026 Sunday. Cards: AMEX only; QR payments accepted (Tabelog). Counter, sofa and garden seats; non-smoking, smoking area outside (Tabelog; October 2026). Children welcome, with picture books (Tabelog; October 2026). In the 三条会 shopping arcade, 6 min from Nijojo-mae Stn (Tabelog; August 2026). Opened 24 March 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo shopping arcade (三条会) near Nijo Castle — 6 min from Nijojo-mae Stn',
    cuisine: 'Patisserie café in a renovated machiya, known for its "10-minute" Mont Blanc, made to order on a meringue baked three hours at low temperature that softens after ten minutes (2026 reviews) · matcha Mont Blanc ¥1,680 (August 2026) · Japanese-chestnut Mont Blanc; seasonal chocolate Mont Blanc; drink sets ¥100 off (2026 reviews) · shortcake (seasonal), tower cake, fig parfait (September 2026) · lunch: gapao rice and chicken spice curry with multigrain rice, Napolitan of the day, spicy potatoes with crab (2026 reviews) · caramel or hazelnut latte ¥800, matcha latte, Aomori apple juice',
    website: null, gmaps: gm('Sweets Cafe KYOTO KEIZO 三条会'), menu_url: null,
    notes: '[Sweets café · Sanjo arcade, the 10-minute Mont Blanc] A machiya café in the 三条会 shopping arcade, a short walk from Nijo Castle, with counter, sofa and garden seats. Everyone comes for the Mont Blanc: piped to order over a meringue baked for three hours, with a "best within 10 minutes" promise because the crisp meringue softens as it sits (matcha version ¥1,680 in August 2026; Japanese chestnut and seasonal versions too). Lunch plates, parfaits and lattes too. Expect a queue at weekends — over 30 minutes in November 2026. Open daily 8:30–17:30; AMEX or QR payments.',
    chef_bio: { chef_name: null, roles: ['Patissier-owner (not named in the sources read)'], origin: null,
      background: 'Tabelog gives the opening as 24 March 2016. A March 2020 Walkerplus article reports that "KEIZO", known for its Mont Blanc with a 10-minute shelf life, opened a bakery, KYOTO KEIZO BAKERY パンとパティシエ (中京区聚楽廻南町1). A September 2026 reviewer mentions tarts from another KEIZO location. Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: null, specialty: 'Ten-minute Mont Blanc.',
      anecdotes: [
        { text: 'A regular on a seventh visit (October 2026) noted that prices have gone up but still rates the Mont Blanc above any other, and is surprised by the steady flow of tourists to a shop far from the station.', source: R + 'B484205044/' },
        { text: '"The freshly made matcha mont blanc is prepared one by one after the order is placed." — August 2026.', source: R + 'B534845305/' },
        { text: 'A September 2026 diner who came for the Napolitan of the day found it sold out and had gapao rice, chicken curry and a fig parfait instead.', source: R + 'B535926550/' },
        { text: 'A September 2026 Sunday visitor got the last seat and found the taste average.', source: R + 'B536469894/' },
      ],
      japanese_sources_summary: '食べログ: スイーツ カフェ キョウト ケイゾー (Sweets Cafe KYOTO KEIZO)、カフェ・ケーキ、中京区御供町293、二条城前駅から徒歩6分、毎日8:30〜17:30、予約不可、カード (AMEX)、QR 可、禁煙 (店外に喫煙所)、テラス、子ども歓迎、2016年3月24日オープン、カフェ WEST 百名店 2025。Walkerplus (2020年3月14日): 賞味期限10分のモンブランで知られる「KEIZO」がベーカリー KYOTO KEIZO BAKERY パンとパティシエ (中京区聚楽廻南町1) をオープン。口コミ (2026年、英語): 三条会商店街の町家、10分モンブラン (低温で3時間焼いたメレンゲ)、抹茶モンブラン1,680円、和栗のモンブラン、いちじくのパフェ、ガパオライス、30分以上の行列 (2026年11月)。',
      confidence: 'medium', sources: [TB, WALKER, R + 'B484205044/', R + 'B534845305/', R + 'B534964821/', R + 'B535249602/', R + 'B535436613/', R + 'B535926550/', R + 'B536469894/', R + 'B537422947/', R + 'B537456027/', R + 'B538667647/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; watch the Mont Blanc being made at the counter; AMEX or QR payments.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御供町293',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; the official site (kyoto-keizo.com) returned 403 on 5 November 2026.' },
    pin_source: `Tabelog ${TB} (35.008626, 135.749814); cross-checked: GSI 京都府京都市中京区御供町293番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534845305/'],
    price_note: 'No menu read; prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Matcha Mont Blanc ("10-minute")', '¥1,680', 'Mont Blanc', 'ask', 'no', 'August 2026.', 'matcha_montblanc'),
      it('', '', 'Caramel or hazelnut latte', '¥800', 'Drinks', '', 'ask', 'August 2026; ¥100 off in a set.', 'latte'),
    ] }, {
    cuisine: '改装した町家のパティスリーのカフェ。注文を受けてから、低温で3時間焼いたメレンゲにのせて作る「10分」のモンブランで知られる。10分たつとメレンゲがやわらかくなる (2026年の口コミ)・抹茶モンブラン1,680円 (2026年8月)・和栗のモンブラン、季節のチョコレートモンブラン、ドリンクセットは100円引き (2026年の口コミ)・季節のショートケーキ、タワーケーキ、いちじくのパフェ (2026年9月)・ランチ: 雑穀ご飯のガパオライスとチキンのスパイスカレー、日替わりのナポリタン、蟹入りのスパイシーポテト (2026年の口コミ)・キャラメルラテかヘーゼルナッツラテ800円、抹茶ラテ、青森のりんごジュース',
    neighborhood: '二条城の近く、三条会商店街。二条城前駅から徒歩6分',
    gf_detail: '要確認。モンブランは低温で焼いたメレンゲにクリームと栗か抹茶のペーストだが、サブレのパフェ、ケーキ、ランチもある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。モンブランやケーキはメレンゲ (卵白) と北海道の生クリーム、パフェはアイスを使う (2026年の口コミ)。',
    notes: '[スイーツカフェ・三条会商店街、10分モンブラン] 二条城から歩ける三条会商店街の町家カフェ。カウンター、ソファ、庭の席がある。目当てはモンブランで、3時間焼いたメレンゲに注文ごとに絞り、さくさくのメレンゲがやわらかくなるので「10分以内に」 (抹茶は2026年8月に1,680円、和栗や季節のものも)。ランチ、パフェ、ラテも。週末は行列、2026年11月は30分以上。毎日8時半〜17時半、AMEX か QR 決済。',
  });
}

// ================================================================ 美齢
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26005466/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_meirin_nishijin', name: '美齢 (Meirin)', category: 'OMNI',
    lat: 35.02878, lng: 135.749926, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cantonese-based dishes with soy, oyster and black-bean sauces, daikon cake and fried nama-fu, shumai and noodles; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The daily lunch includes vegetable dishes such as braised eggplant, but the soups use dried shrimp and most mains carry meat or seafood (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–14:00 and 17:30–21:00; closed Monday (open on public holidays) and irregularly (Tabelog). Lunch by reservation only, in two seatings at 11:30 and 13:00 (Tabelog); walk-ins were turned away when full (September, October 2026). Phone to book; same-day calls can work (September 2026). 20 seats: counter and tables downstairs, a tatami room for about 10–12 upstairs (Tabelog; September 2026). Cards accepted (Tabelog). Non-smoking; takeaway (Tabelog). Deep in a narrow residential alley in Nishijin, near Seimei Shrine; 2–3 min from the Imadegawa-Omiya or Horikawa-Imadegawa bus stops (Tabelog; August 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishijin back alley, south-west of Horikawa-Imadegawa — near Seimei Shrine',
    cuisine: 'Cantonese-based Chinese, gentle and not greasy (2026 reviews) · today\'s lunch ¥1,705: three appetizers, dried-shrimp and daikon soup, daikon cake and fried black-sesame nama-fu, a main such as young chicken with black-bean sauce, rice, dessert like soy-milk almond jelly (September 2026) · cold noodles with shrimp ¥1,320 (August 2026) · stone-grilled mapo tofu · today\'s shark-fin soup, e.g. crab and shark fin ¥1,485 (September 2026) · shrimp mayo, scallop cream stew, mentaiko and takana fried rice, shumai, bang bang chicken, cream-braised bok choy, beef with green peppers (2026 reviews)',
    website: null, gmaps: gm('美齢 京都 寺今町'), menu_url: null,
    notes: '[Chinese · Nishijin, a back-alley Cantonese kitchen] A small two-storey Chinese restaurant deep in a residential alley in Nishijin, near Seimei Shrine, run by a chef and the chef\'s wife. The draw is the daily lunch (¥1,705): three appetizers, a dried-shrimp soup, daikon cake, a main and dessert, in two booked seatings at 11:30 and 13:00. In the evening, order the stone-grilled mapo tofu (stir it, or the bottom chars bitter), shumai and the scallop cream stew. Cooking is light and not greasy. Book by phone — walk-ins are often turned away. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef and the chef’s wife (August 2026 review: the chef’s "gentle demeanor and warm smile" and the wife’s "attentive and heartfelt hospitality")'], origin: null,
      background: 'Tabelog Chinese WEST "Tabelog 100" 2021, 2023, 2024 and 2026. Reviewers describe the cooking as Cantonese-based (August, September 2026).',
      philosophy: null, specialty: 'Daily lunch set; stone-grilled mapo tofu; shumai.',
      anecdotes: [
        { text: 'An August 2026 diner was given cold tea in the restaurant\'s own stainless-steel cup and received a much bigger plate of cold noodles than expected.', source: R + 'B532899682/' },
        { text: 'A September 2026 diner found the stone-grilled mapo tofu went bitter where it burned onto the bowl unless stirred.', source: R + 'B536470531/' },
        { text: 'A November 2026 first-timer got only voicemail in the morning and a counter seat by calling again in the evening.', source: R + 'B538706327/' },
      ],
      japanese_sources_summary: '食べログ: 美齢、中華料理、上京区黒門通元誓願寺上ル寺今町511、市バス今出川大宮・堀川今出川から徒歩2〜3分、火〜日 11:30〜14:00・17:30〜21:00、月曜休み (祝日は営業)・不定休、ランチは11:30と13:00の二部制で要予約、20席 (1階テーブル・カウンター、2階座敷)、カード可、禁煙、テイクアウト可、中国料理 WEST 百名店 2021・2023・2024・2026。口コミ (2026年、英語): 広東料理ベース、本日のランチ1,705円 (前菜3種、干しえびと大根のスープ、大根餅と黒胡麻の生麩の揚げ物、若鶏の豆豉炒め、ご飯、豆乳杏仁)、冷やし麺1,320円、石焼麻婆豆腐、ふかひれスープ1,485円、焼売、帆立のクリーム煮、夫婦で営む、予約なしは断られることも。',
      confidence: 'medium', sources: [TB, R + 'B532899682/', R + 'B534079747/', R + 'B534258691/', R + 'B535712905/', R + 'B536008614/', R + 'B536297323/', R + 'B536470531/', R + 'B537336622/', R + 'B538442260/', R + 'B538706327/'] },
    cultural_comfort: { level: 'japanese', note: 'Phone booking only; lunch in two fixed seatings; no English evidence.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区黒門通元誓願寺上ル寺今町511',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Chinese WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.028780, 135.749926); cross-checked: GSI 京都府京都市上京区寺今町511番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535712905/', R + 'B536008614/', R + 'B532899682/'],
    price_note: 'No menu read; prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Today\'s lunch (appetizers, soup, fried dish, main, rice, dessert)', '¥1,705', 'Lunch', 'ask', 'no', 'September 2026.', 'todays_lunch'),
      it('', '', 'Cold noodles with shrimp', '¥1,320', 'Noodles', 'no', 'no', 'August 2026.', 'hiyashi_men'),
      it('', '', 'Today\'s shark-fin soup', '¥1,485', 'Soup', 'ask', 'no', 'September 2026.', 'fukahire_soup'),
    ] }, {
    cuisine: '広東料理をベースにした、やさしく脂っこくない中国料理 (2026年の口コミ)・本日のランチ1,705円: 前菜3種、干しえびと大根のスープ、大根餅と黒胡麻の生麩の揚げ物、若鶏の豆豉炒めなどのメイン、ご飯、豆乳杏仁などのデザート (2026年9月)・海老入りの冷やし麺1,320円 (2026年8月)・石焼麻婆豆腐・本日のふかひれスープ、たとえば蟹とふかひれ1,485円 (2026年9月)・エビマヨ、帆立のクリーム煮、明太子と高菜の炒飯、焼売、棒棒鶏、青梗菜のクリーム煮、チンジャオロース (2026年の口コミ)',
    neighborhood: '堀川今出川の南西、西陣の路地。晴明神社の近く',
    gf_detail: '要確認。醤油、オイスター、豆豉のたれの広東風の料理、大根餅と生麩の揚げ物、焼売、麺。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。日替わりランチには茄子の煮物などの野菜料理もあるが、スープは干しえびで、メインの多くは肉か魚介 (2026年の口コミ)。',
    notes: '[中華・西陣、路地の奥の広東料理] 晴明神社に近い西陣の住宅街の細い路地の奥、料理人とその奥さんが営む2階建ての小さな中国料理店。目当ては日替わりランチ (1,705円) で、前菜3種、干しえびのスープ、大根餅、メイン、デザート。11時半と13時の予約制。夜は石焼麻婆豆腐 (混ぜないと底が焦げて苦くなる)、焼売、帆立のクリーム煮を。味は軽く脂っこくない。電話で予約を、予約なしは断られることが多い。月曜休み。',
  });
}

save();
