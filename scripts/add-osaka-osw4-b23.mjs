// Osaka sweep (2-mile circle around Dotonbori), core phase backlog, lane id mod 4 = 3; worker osw4, batch 23.
//   + やき鳥 ササキ Yakitori Sasaki (Daisen jidori yakitori by Namba Stn exit 12)
//   + L&L Bar&Restaurant (Israeli-run bar of hummus, lamb and shisha, open 8:00–5:00, near Amerikamura)
//   + 炭焼キッチン Tenten Sumiyaki Kitchen Tenten (binchotan yakitori and daytime drinking, Shinsaibashi-suji)
//   + 鉄板焼 みなみ Teppanyaki Minami (teppanyaki over a Japanese garden, Swissotel Nankai Osaka 10F)
//   Chain check: ササキ, L&L, Tenten — one shop found each (search results). みなみ is the Swissotel's own teppanyaki
//   room (ikyu), like テーブル36 and エンプレスルーム already in data. None of the four is in data/osaka.json (grep by
//   name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ やき鳥 ササキ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27046795/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:30']);
  put({
    id: 'osaka_yakitori_sasaki_namba', name: 'やき鳥 ササキ (Yakitori Sasaki)', category: 'OMNI',
    lat: 34.666268, lng: 135.499769, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with tare or salt; seseri with ponzu, tsukune with egg yolk and grilled rice balls are on the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a July 2026 reviewer mentions vegetable dishes, but the house is a chicken specialist and nothing is described as vegan.',
    hours_raw: 'Mon–Sat and holidays 17:00–00:30, last order food 23:30, drinks 24:00; closed Sundays (Tabelog). Reservations accepted, a must at weekends (May 2026, October 2025); groups of 10+ by phone (Tabelog). Appetiser ¥360 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, iD and QUICPay; no QR payment (Tabelog). 38 seats (10 counter, 28 table), a 2nd floor for groups; non-smoking (Tabelog). QR ordering (November 2025, July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-2-7, behind the former Shin-Kabukiza — right by Namba Stn exit 12',
    cuisine: 'Yakitori and chicken dishes of Daisen jidori sent direct from Tottori — skewers, tataki and sashimi — with regional sake, shochu and cocktails; open kitchen and counter (Tabelog shop text) · omakase 10 skewers ¥1,918 (5 tare, 5 salt), mega draft beer ¥1,260 (November 2025) · seseri with ponzu and lots of green onion (October 2025, May 2026) · kimo, negima, bonjiri, bacon-wrapped soft-boiled egg, grilled rice ball, sweet potato with butter (April 2026) · tsukune with egg yolk, ume cucumber, chicken skin (May 2026) · dashimaki, vegetable salad, cartilage (November 2025) · sake such as Kikuhime ginjo and Gohon (November 2025) · skewers from just over ¥100 (September 2025)',
    website: null, gmaps: gm('やき鳥 ササキ 難波'), menu_url: null,
    notes: '[Yakitori · Namba, Daisen chicken by exit 12] A wood-toned yakitori counter of more than twenty years right by Namba Station exit 12, reopened with a renovated second floor in 2018. Order the omakase ten skewers (¥1,918, half tare, half salt), the seseri ponzu and the tsukune with egg yolk, with sake from a good regional list. Busy every night: book, especially at weekends. Closed Sundays.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): a yakitori shop of over 20 years that reopened in May 2018 after renovating the 2nd floor; Daisen jidori chicken sent direct from Tottori.', philosophy: null, specialty: 'Daisen jidori yakitori.',
      anecdotes: [
        { text: '"By before 10 PM, I noticed some salarymen coming in alone after work." — February 2026, a fourth visit.', source: R + 'B479767729/' },
        { text: '"I went on a Saturday, but it was fully booked. Reservations are a must on weekends!" — May 2026.', source: R + 'B530059588/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): やき鳥 ササキ、焼き鳥・鶏料理・居酒屋、大阪市中央区難波4-2-7、なんば駅12番出口すぐ、月〜土・祝17:00〜翌0:30 (料理 L.O. 23:30、ドリンク L.O. 24:00)、日曜休み、予約可 (10名以上は電話)、お通し360円、カード・電子マネー可、QR 決済不可、38席 (カウンター10、テーブル28)、2階は貸切可、禁煙、ベジタリアン対応の表示。創業20年以上、2018年5月に2階を改装してリニューアル、Tottori から直送の Daisen の地鶏の焼き鳥、たたき、刺身、地酒。口コミ(2025年9月〜2026年9月): おまかせ10本1,918円 (タレ5本、塩5本)、メガ生ビール1,260円、ねぎたっぷりのせせりポン酢、肝、ねぎま、ぼんじり、ベーコン巻きの半熟卵、焼きおにぎり、さつまいものバター、卵黄つくね、梅きゅう、鶏皮、だし巻き、軟骨、Kikuhime の吟醸、QR コードで注文、週末は予約必須、1本100円ちょっとから。',
      confidence: 'medium', sources: [TB, R + 'B449055304/', R + 'B479767729/', R + 'B513596170/', R + 'B514814133/', R + 'B516297269/', R + 'B516562932/', R + 'B517187100/', R + 'B517233754/', R + 'B517302369/', R + 'B521545938/', R + 'B524544710/', R + 'B526660450/', R + 'B530059588/', R + 'B534326830/', R + 'B536034593/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering on your phone; counter seats suit solo diners (2025–2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-2-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目2番7号 (go) 6m. Nearest records: みなみの十忠八九 (4-2-6) 11 m, 焼鳥と釜飯 なかもと 18 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516562932/', TB],
    price_note: 'Prices from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase 10 skewers (5 tare, 5 salt)', '¥1,918', 'Yakitori', 'ask', 'no', 'November 2025 review.', 'omakase_10'),
      it('', '', 'Seseri with ponzu and green onion', '', 'Small plates', 'ask', 'no', 'October 2025 and May 2026 reviews.', 'seseri_ponzu'),
      it('', '', 'Tsukune with egg yolk', '', 'Yakitori', 'ask', 'no', 'May 2026 review.', 'tsukimi_tsukune'),
      it('', '', 'Mega draft beer', '¥1,260', 'Drinks', 'no', 'ask', 'November 2025 review.', 'mega_beer'),
    ] }, {
    cuisine: 'Tottori から直送の Daisen の地鶏の焼き鳥と鶏料理 (串、たたき、刺身)、地酒、焼酎、カクテル。オープンキッチンとカウンター (食べログの店の紹介)・おまかせ10本1,918円 (タレ5本、塩5本)、メガ生ビール1,260円 (2025年11月)・ねぎたっぷりのせせりポン酢 (2025年10月、2026年5月)・肝、ねぎま、ぼんじり、ベーコン巻きの半熟卵、焼きおにぎり、さつまいものバター (2026年4月)・卵黄つくね、梅きゅう、鶏皮 (2026年5月)・だし巻き、野菜サラダ、軟骨 (2025年11月)・Kikuhime の吟醸などの日本酒 (2025年11月)・1本100円ちょっとから (2025年9月)',
    neighborhood: '難波4-2-7、旧 Shin-Kabukiza の裏。なんば駅12番出口すぐ',
    gf_detail: '要確認。グルテンの情報なし。串はタレか塩で、せせりポン酢、卵黄つくね、焼きおにぎりもある。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあり、2026年7月の口コミには野菜の料理もあるとあるが、鶏の専門店でヴィーガンの説明はない。',
    notes: '[焼き鳥・なんば、12番出口すぐの Daisen の地鶏] なんば駅12番出口すぐ、20年以上続く木の温もりの焼き鳥屋で、2018年に2階を改装した。おまかせ10本 (1,918円、タレと塩が半々)、せせりポン酢、卵黄つくねを、充実した地酒と。毎晩にぎわうので予約を、特に週末は。日曜休み。',
  });
}

// ================================================================ L&L Bar&Restaurant
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27013659/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '05:00']);
  put({
    id: 'osaka_l_and_l_bar_nishishinsaibashi', name: 'L&L Bar&Restaurant', category: 'OMNI',
    lat: 34.66945, lng: 135.497219, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Hummus comes with pita (December 2022); the menu has homemade-dough pizza, chicken schnitzel and pasta alongside lamb and spare ribs.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a vegetarian set (October 2024); hummus is chickpeas, tahini, olive oil and lemon (December 2022). Nothing is described as vegan.',
    hours_raw: 'Daily 08:00–05:00; open year-round (Tabelog). Breakfast served (Tabelog; August 2026); lunch sets until 17:00 (December 2017). Reservations accepted (Tabelog). No cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR payment; no e-money (Tabelog). 95 seats with counter, tables, sofas and a terrace, plus a basement club space for 20–40 with DJ gear (Tabelog; December 2022); smoking allowed (Tabelog); shisha served. Reviews are sparse and spread over 2017–2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-16-13, 宝泉ビル 1F, edge of Amerikamura, opposite a 100-yen Lawson — 5 min from Namba Stn (Yotsubashi Line)',
    cuisine: 'Bar and restaurant run by a foreign owner, with Israeli dishes, pizza and shisha (December 2022): hummus with pita ¥880 before tax, lamb by an Israeli chef, homemade-dough pizza, salami with 150 minutes of drinks (December 2022) · Israeli lunch plate, vegetarian set (2023–2024) · chicken schnitzel (January 2023), lamb chops served rare (September 2022), spare ribs (January 2025), jerk chicken (October 2024) · shisha, e.g. café au lait and mint (October 2024); half price on Fri–Sun 17:00–20:00 in 2022 · breakfast with fluffy bread (August 2026) · cheesecake (October 2026) · ¥500 curry lunch (December 2017)',
    website: null, gmaps: gm('L&L Bar&Restaurant 西心斎橋'), menu_url: null,
    notes: '[Bar and Israeli food · Amerikamura edge, shisha nearly round the clock] A dim, art-hung bar and restaurant open from 8:00 to 5:00, mixing locals, travellers and expats over shisha, cocktails and Israeli plates. Try the hummus with pita, the lamb and the spare ribs; it serves breakfast in the morning and is liveliest late. Smoking and shisha inside. Reviews are thin and spread over many years, so check the current menu.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per reviews: produced by a foreign owner, with new art on the walls each month and a basement club space (December 2022); lamb cooked by an Israeli chef (December 2022). Culture Trip describes it as a backpacker-style meeting place of locals, foreigners and expats (search result).', philosophy: null, specialty: 'Israeli plates; shisha.',
      anecdotes: [
        { text: '"Before COVID, the place was crowded with foreigners and had a club-like atmosphere. However, when I visited after a long time, it was very empty." — September 2022.', source: R + 'B455034596/' },
        { text: '"There were no customers during breakfast, but I have the impression that it\'s always lively in the evening." — August 2026, about 9:00 AM.', source: R + 'B533428942/' },
        { text: '"My first experience with Israeli cuisine in my life! It was even more delicious than I imagined!" — June 2024.', source: R + 'B487670377/' },
      ],
      japanese_sources_summary: '食べログ: L&L Bar&Restaurant、ダイニングバー・ヨーロッパ料理・パスタ、大阪市中央区西心斎橋2-16-13 宝泉ビル 1F、なんば駅 (四つ橋線) から徒歩5分、100 Yen Lawson の前、毎日8:00〜翌5:00、年中無休、予約可、チャージなし、カード・QR 決済可、電子マネー不可、95席、地下の貸切スペース (20〜40名)、喫煙可、朝食あり、ベジタリアン対応の表示。口コミ(2017年〜2026年): 外国人のオーナー、イスラエル料理、フムスとピタ880円 (税抜)、イスラエル人シェフのラム、手作り生地のピザ、ベジタリアンセット、チキンシュニッツェル、レアのラムチョップ、スペアリブ、ジャークチキン、シーシャ、朝食のパン、チーズケーキ、500円のカレーランチ (2017年)、コロナ前は外国人客でにぎわっていたという声。',
      confidence: 'low', sources: [TB, 'https://theculturetrip.com/asia/japan/articles/the-10-best-restaurants-in-amerikamura', R + 'B257818383/', R + 'B426043468/', R + 'B454849190/', R + 'B455034596/', R + 'B455194364/', R + 'B458441974/', R + 'B466652795/', R + 'B487670377/', R + 'B490723556/', R + 'B500637421/', R + 'B505399388/', R + 'B519223543/', R + 'B526215103/', R + 'B533428942/', R + 'B537233697/'] },
    cultural_comfort: { level: 'english', note: 'Foreign-owned, with a mixed local and expat crowd (2022; Culture Trip). Smoking and shisha inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-16-13 宝泉ビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing open; recent reviews are few (breakfast in August 2026, a cheesecake in October 2026).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目16番13号 (go) 20m. No record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B458441974/', TB],
    price_note: 'The only price is from a December 2022 review, before tax.', last_checked: TODAY, items: [
      it('', '', 'Hummus with pita', '¥880 + tax', 'Israeli', 'no', 'ask', 'December 2022 review.', 'hummus'),
      it('', '', 'Lamb (by an Israeli chef)', '', 'Mains', 'ask', 'no', '2022 reviews.', 'lamb'),
      it('', '', 'Homemade-dough pizza', '', 'Pizza', 'no', 'ask', 'December 2022 review.', 'pizza'),
      it('', '', 'Shisha', '', 'Shisha', '', '', '2022–2024 reviews.', 'shisha'),
    ] }, {
    cuisine: '外国人のオーナーのバー兼レストランで、イスラエル料理、ピザ、シーシャ (2022年12月): ピタつきのフムス880円 (税抜)、イスラエル人のシェフのラム、手作り生地のピザ、150分飲み放題つきのサラミ食べ放題 (2022年12月)・イスラエルのランチプレート、ベジタリアンセット (2023〜2024年)・チキンシュニッツェル (2023年1月)、レアで出るラムチョップ (2022年9月)、スペアリブ (2025年1月)、ジャークチキン (2024年10月)・カフェオレとミントなどのシーシャ (2024年10月)、2022年は金〜日の17〜20時に半額・ふわふわのパンの朝食 (2026年8月)・チーズケーキ (2026年10月)・500円のカレーランチ (2017年12月)',
    neighborhood: '西心斎橋2-16-13 宝泉ビル 1F、アメ村の端、100 Yen Lawson の前。なんば駅 (四つ橋線) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。フムスはピタつき (2022年12月)。手作り生地のピザ、チキンシュニッツェル、パスタに、ラムやスペアリブもある。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあり、ベジタリアンセットもある (2024年10月)。フムスはひよこ豆、タヒニ、オリーブオイル、レモン (2022年12月)。ヴィーガンの説明はない。',
    notes: '[バーとイスラエル料理・アメ村の端、ほぼ一日中シーシャ] 朝8時から翌5時まで開いている、アートの飾られた薄暗いバー兼レストランで、地元の人、旅行者、在住の外国人がシーシャ、カクテル、イスラエル料理を楽しむ。ピタつきのフムス、ラム、スペアリブを。朝は朝食も出し、にぎわうのは夜遅く。店内は喫煙とシーシャ可。口コミは少なく年がばらばらなので、今のメニューは確認を。',
  });
}

// ================================================================ 炭焼キッチン Tenten
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27060251/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['14:00', '24:00']), WE = day(['12:00', '24:00']);
  put({
    id: 'osaka_sumiyaki_kitchen_tenten_shinsaibashi', name: '炭焼キッチン Tenten (Sumiyaki Kitchen Tenten)', category: 'OMNI',
    lat: 34.673302, lng: 135.502318, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with tare or salt; the menu has chicken ajillo, fried burdock, fried wings, an appetiser of Napolitan pasta and grilled rice balls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori izakaya with chicken sashimi.',
    hours_raw: 'Mon–Fri 14:00–24:00; Sat, Sun and holidays 12:00–24:00; last order 23:30; closed irregularly (Tabelog). Daytime drinking welcome (Tabelog). Reservations accepted; the shop phones to confirm online bookings; note allergies and dislikes in the booking (Tabelog). Appetiser and service charge ¥440, not for course orders (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, iD, QUICPay and PayPay (Tabelog). 32 seats: counter, tables, sunken-kotatsu private rooms for 8–12 and semi-private tables; smoking allowed at all tables (Tabelog; December 2024). Mobile ordering (August 2025).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 1-4-3, トダビル 1F — 3 min from Shinsaibashi Stn exits 5/6',
    cuisine: 'Charcoal yakitori of fresh chicken skewered by hand and grilled over Tosa binchotan; signature tsukimi tsukune dipped in egg yolk; sake from around Japan (Tabelog shop text) · Daisen chicken from Tottori, processed that morning (March 2025; October 2026) · courses with 120 minutes of drinks from ¥3,500; casual banquet course ¥4,000 (¥3,500 with coupon): three appetisers, yakitori, fried wings, grilled rice balls (Tabelog) · October 2026 prices: liver sashimi ¥781, charcoal-grilled chicken ajillo ¥1,243, five-skewer assortment ¥1,265, tsukimi tsukune (2) ¥572 · sashimi of breast, liver and heart ¥1,200 (February 2026) · fried burdock, fried wings (April 2025) · "tsukidashi Napolitan" appetiser (August 2025)',
    website: null, gmaps: gm('炭焼キッチン Tenten 心斎橋'), menu_url: null,
    notes: '[Yakitori · Shinsaibashi-suji, daytime drinking over binchotan] A yakitori izakaya off Shinsaibashi-suji that opens at 14:00 on weekdays and noon at weekends, grilling Daisen chicken over Tosa binchotan. Order the five-skewer set, the tsukimi tsukune in egg yolk and, if you eat raw chicken, the breast-liver-heart sashimi. Smoking is allowed at every table. Reviews are mixed: some rate it highly, others found the course average (December 2024).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): fresh chicken skewered one by one and grilled over Tosa binchotan; invoice-registered. Reviewers name Daisen chicken from Tottori, processed that morning (March 2025, October 2026). Gurunavi lists Oyama chicken, Nagasaki Hojuton pork and Genmai Kuroushi beef (search result).', philosophy: null, specialty: 'Tsukimi tsukune; Daisen chicken yakitori.',
      anecdotes: [
        { text: '"I was looking for a place where smoking was allowed and I could enjoy a leisurely drink during the day, and I found this spot." — December 2025, lunch before a concert.', source: R + 'B519177453/' },
        { text: '"The course menu was quite standard, and the taste was just average ... Since smoking is allowed at all tables, it might be a good option for gatherings with many smokers." — December 2024.', source: R + 'B498589337/' },
        { text: '"When I asked the staff, ... kindly prepared a hot Oolong for me!" — August 2025.', source: R + 'B511729222/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭焼キッチン Tenten、焼き鳥・鍋・居酒屋、大阪市中央区心斎橋筋1丁目4-3 トダビル 1F、心斎橋駅5・6番出口から徒歩3分、月〜金14:00〜24:00、土日祝12:00〜24:00 (L.O. 23:30)、不定休、昼飲み歓迎、予約可 (ネット予約は確認の電話あり、アレルギーや苦手なものは備考に)、お通しとサービス料440円 (コースは対象外)、カード・電子マネー・PayPay 可、32席、掘りごたつの個室 (8〜12名)、半個室、喫煙可。Tosa の備長炭で焼く手刺しの焼き鳥、名物の月見つくね、全国の地酒、120分飲み放題つきのコース3,500円から。口コミ(2024年10月〜2026年10月): Tottori の Daisen の朝引きの鶏、レバ刺し781円、鶏の炭火アヒージョ1,243円、焼き鳥の5本の盛り合わせ1,265円、月見つくね2本572円、ささみ・レバー・ハツの刺身盛り1,200円、ごぼうの唐揚げ、手羽の唐揚げ、お通しのナポリタン、全席喫煙可、コースはふつうという声も。',
      confidence: 'medium', sources: [TB, 'https://r.gnavi.co.jp/kak3500/', R + 'B112565270/', R + 'B494010287/', R + 'B498589337/', R + 'B499912332/', R + 'B503466072/', R + 'B505750242/', R + 'B511729222/', R + 'B516709966/', R + 'B519058918/', R + 'B519177453/', R + 'B521215774/', R + 'B522555618/', R + 'B536990116/', R + 'B537790256/', R + 'B538313436/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mobile ordering (August 2025); smoking at all tables. No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The shop asks guests to note allergies and dislikes when booking (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1丁目4-3 トダビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目4番3号 (go) 3m. No record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B112565270/', R + 'B522555618/', TB],
    price_note: 'Prices from February and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukimi tsukune with egg yolk, 2 skewers', '¥572', 'Signature', 'ask', 'no', 'October 2026 review.', 'tsukimi_tsukune'),
      it('', '', 'Assorted yakitori, 5 skewers', '¥1,265', 'Yakitori', 'ask', 'no', 'October 2026 review.', 'yakitori_5'),
      it('', '', 'Charcoal-grilled chicken ajillo', '¥1,243', 'Small plates', 'ask', 'no', 'October 2026 review.', 'chicken_ajillo'),
      it('', '', 'Chicken sashimi: breast, liver, heart', '¥1,200', 'Raw', 'ask', 'no', 'February 2026 review.', 'torisashi'),
      it('', '', 'Casual banquet course with 120 minutes of drinks', '¥4,000', 'Course', 'ask', 'no', 'Tabelog listing; ¥3,500 with coupon.', 'casual_course'),
    ] }, {
    cuisine: '新鮮な鶏を一本ずつ手で刺し、Tosa の備長炭で焼く炭火の焼き鳥。名物は卵黄につける月見つくね。全国の地酒 (食べログの店の紹介)・Tottori の Daisen の朝引きの鶏 (2025年3月、2026年10月)・120分飲み放題つきのコースは3,500円から、カジュアル宴会コース4,000円 (クーポンで3,500円): 前菜3種、焼き鳥、手羽の唐揚げ、焼きおにぎり (食べログ)・2026年10月の値段: レバ刺し781円、鶏の炭火アヒージョ1,243円、焼き鳥の5本の盛り合わせ1,265円、月見つくね2本572円・ささみ、レバー、ハツの刺身盛り1,200円 (2026年2月)・ごぼうの唐揚げ、手羽の唐揚げ (2025年4月)・お通しの「ナポリタン」(2025年8月)',
    neighborhood: '心斎橋筋1丁目4-3 トダビル 1F。心斎橋駅5・6番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。串はタレか塩で、鶏のアヒージョ、ごぼうの唐揚げ、手羽の唐揚げ、お通しのナポリタン、焼きおにぎりがある。',
    vegan_detail: 'ヴィーガンではありません。鶏の焼き鳥の居酒屋で、鶏刺しもある。',
    notes: '[焼き鳥・心斎橋筋、昼から備長炭で] 心斎橋筋の近く、平日は14時、週末は昼12時から開いている焼き鳥の居酒屋で、Daisen の鶏を Tosa の備長炭で焼く。5本の盛り合わせ、卵黄の月見つくね、生の鶏が平気ならささみ・レバー・ハツの刺身を。全席喫煙可。口コミは高く評価する声と、コースはふつうという声がある (2024年12月)。',
  });
}

// ================================================================ 鉄板焼 みなみ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002607/'; const R = TB + 'dtlrvwlst/';
  const MT = day(['11:30', '15:00'], ['17:30', '21:00']), FR = day(['11:30', '15:00'], ['17:30', '21:30']);
  const SA = day(['11:00', '15:00'], ['17:30', '21:30']), SU = day(['11:00', '15:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_teppanyaki_minami_swissotel', name: '鉄板焼 みなみ (Teppanyaki Minami)', category: 'OMNI',
    lat: 34.6641, lng: 135.50118, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses are grilled seafood, wagyu with three salts, garlic rice with miso soup, and dessert; a June 2025 diner\'s allergy-related ingredient changes were accommodated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and seafood teppanyaki; courses end with miso soup.',
    hours_raw: 'Mon–Thu 11:30–15:00 and 17:30–21:00; Fri and the day before holidays 11:30–15:00 and 17:30–21:30; Sat 11:00–15:00 and 17:30–21:30; Sun and holidays 11:00–15:00 and 17:30–21:00 (Tabelog). Reservations accepted; walk-ins on the day possible (June 2026); seats held for two hours from the booking time, 100% fee for same-day cancellation (ikyu, search result). Listed prices include a 13% service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, PayPay, au PAY, Alipay and WeChat Pay (Tabelog). 35 counter seats around teppan plates, partitioned sections for groups (November 2025); non-smoking; wheelchair accessible; hotel parking with free hours for diners (Tabelog). Staff and chefs speak English and Chinese (June 2025).',
    hours: { 0: MT, 1: MT, 2: MT, 3: MT, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-60, Swissotel Nankai Osaka 10F, above Nankai Namba Stn (escalator from the 3F gates)',
    cuisine: 'Hotel teppanyaki at counters over a Japanese garden: top kuroge wagyu, fresh seafood and seasonal vegetables, with kaiseki-style starters (Tabelog shop text) · Chef course ¥21,000: Senshu-vegetable salad with salmon carpaccio, live Ezo abalone, shrimp and squid, sorbet, kuroge wagyu tenderloin and strip loin, three Senshu vegetables, garlic rice with miso soup and pickles, flambéed fruit with cheesecake (April 2026) · weekday teppanyaki lunch with 80 g Japanese F1 strip loin (July 2025); deluxe lunch ¥9,000 (February 2024) · tenderloin and strip loin cooked rare, Hokkaido scallops (lobster swapped for shrimp that month), a rich soup (October 2026) · three kinds of salt with the meat (October 2024) · house wine, e.g. McPherson Three Vineyards Shiraz (October 2025)',
    website: null, gmaps: gm('鉄板焼 みなみ スイスホテル南海大阪'), menu_url: null,
    notes: '[Teppanyaki · Namba, hotel counter over a garden] The Swissotel Nankai Osaka\'s teppanyaki room on the 10th floor, straight up from Nankai Namba Station, where chefs grill kuroge wagyu, abalone and Senshu vegetables at counters facing a Japanese garden. Lunch is the way in (a weekday 80 g F1 sirloin set); the April 2026 chef course was ¥21,000, service included. English and Chinese spoken. Reviews from 2024–2025 note largely overseas staff and some uneven service.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing: the teppanyaki restaurant on the 10th floor of Swissotel Nankai Osaka (formerly Nankai South Tower Hotel, per a long-time diner). Vegetables come from Senshu (April 2026). A June 2025 reviewer notes multicultural chefs and staff who speak English and Chinese.', philosophy: null, specialty: 'Kuroge wagyu and abalone on the teppan.',
      anecdotes: [
        { text: '"I have allergies, so I requested some ingredient changes." — June 2025, the premium course.', source: R + 'B508476571/' },
        { text: '"The late last order time and the ability to accommodate walk-ins on the day are very helpful." — June 2026, a weekday lunch.', source: R + 'B530054630/' },
        { text: '"Most of the staff are foreigners, making it feel like a different world where Japanese is not understood. The food is average and not worth the price." — October 2024.', source: R + 'B524141168/' },
      ],
      japanese_sources_summary: '食べログ: みなみ、鉄板焼き・魚介、大阪市中央区難波5-1-60 スイスホテル南海大阪 10F、南海なんば駅直結 (3階改札から専用エスカレーター)、月〜木11:30〜15:00、17:30〜21:00、金・祝前日11:30〜15:00、17:30〜21:30、土11:00〜15:00、17:30〜21:30、日・祝11:00〜15:00、17:30〜21:00、予約可、表示価格はサービス料13%込み、カード・電子マネー・QR 決済可、35席 (カウンターのみ)、禁煙、車いす可、ホテルの駐車場。日本庭園を望むカウンターで最高級の黒毛和牛、鮮魚、季節の野菜、懐石風の前菜。一休: 予約時間から2時間制、当日キャンセルは100%。口コミ(2024年2月〜2026年10月): シェフコース21,000円 (Senshu の野菜のサラダとサーモンのカルパッチョ、活けの Ezo あわび、えびといか、黒毛和牛のヒレとロース、ガーリックライス、フランベの果物とチーズケーキ)、平日の Japanese F1 ロース80gのランチ、塩3種、ホタテ、スープ、アレルギーで食材を替えてくれた、当日でも入れる、英語と中国語を話すスタッフ、スタッフの多くが外国人で日本語が通じにくいという声 (2024年10月)。',
      confidence: 'medium', sources: [TB, 'https://restaurant.ikyu.com/100956/plan12833310', R + 'B479629288/', R + 'B493316904/', R + 'B493698268/', R + 'B503856152/', R + 'B508476571/', R + 'B510481035/', R + 'B510983988/', R + 'B514148484/', R + 'B515108253/', R + 'B517816623/', R + 'B522012831/', R + 'B524141168/', R + 'B525866851/', R + 'B530054630/', R + 'B537768581/'] },
    cultural_comfort: { level: 'english', note: 'Chefs and staff speak English and Chinese (June 2025); set courses.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Ingredient changes for allergies made on a course (review, June 2025).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-60 スイスホテル南海大阪 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and ikyu plans; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} 34.664158,135.501162 sits 3 m from エンプレスルーム (osaka_empress_room_swissotel, same hotel 10F); pin offset to 34.6641,135.50118, about 10 m from エンプレスルーム and 19 m from テーブル36 (36F). GSI 大阪府大阪市中央区難波五丁目1番60号 (go) is the building centroid, 85 m north; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B493316904/', TB],
    price_note: 'Chef course price from an April 2026 review, service included.', last_checked: TODAY, items: [
      it('', '', 'Chef course (salad, abalone, seafood, wagyu tenderloin and strip loin, garlic rice, dessert)', '¥21,000', 'Course', 'ask', 'no', 'April 2026 review.', 'chef_course'),
      it('', '', 'Weekday teppanyaki lunch, 80 g Japanese F1 strip loin', '', 'Lunch', 'ask', 'no', 'July 2025 review.', 'f1_lunch'),
      it('', '', 'Hokkaido scallops (course option)', '', 'Seafood', 'ask', 'no', 'October 2026 review.', 'hotate'),
    ] }, {
    cuisine: '日本庭園を望むカウンターのホテルの鉄板焼き: 最高級の黒毛和牛、鮮魚、季節の野菜に懐石風の前菜 (食べログの店の紹介)・シェフコース21,000円: Senshu の野菜とサーモンのカルパッチョのサラダ、活けの Ezo あわび、えびといか、ソルベ、黒毛和牛のヒレとロース、Senshu の野菜3種、ガーリックライスとみそ汁と漬物、季節の果物のフランベとチーズケーキ (2026年4月)・平日の Japanese F1 のロース80gの鉄板焼きランチ (2025年7月)、デラックスランチ9,000円 (2024年2月)・レアで焼くヒレとロース、Hokkaido のホタテ (その月はロブスターの代わりにえび)、濃厚なスープ (2026年10月)・肉には塩3種 (2024年10月)・ハウスワインの McPherson Three Vineyards Shiraz など (2025年10月)',
    neighborhood: '難波5-1-60 スイスホテル南海大阪 10F、南海なんば駅直結 (3階改札からエスカレーター)',
    gf_detail: '要確認。グルテンの情報なし。コースは魚介の鉄板焼き、塩3種で食べる和牛、ガーリックライスとみそ汁、デザート。2025年6月にはアレルギーに合わせて食材を替えてくれた。',
    vegan_detail: 'ヴィーガンではありません。和牛と魚介の鉄板焼きで、コースの締めにみそ汁。',
    notes: '[鉄板焼き・なんば、庭を望むホテルのカウンター] 南海なんば駅から直結、スイスホテル南海大阪10階の鉄板焼きで、日本庭園に面したカウンターで黒毛和牛、あわび、Senshu の野菜を目の前で焼く。入りやすいのは昼 (平日の F1 ロース80g)、2026年4月のシェフコースはサービス料込み21,000円。英語と中国語が通じる。2024〜2025年の口コミにはスタッフの多くが外国人、接客にむらがあるという声も。',
  });
}

save();
