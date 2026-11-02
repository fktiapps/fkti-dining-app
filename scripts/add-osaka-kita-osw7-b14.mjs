// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 14.
//   + たこ焼 十八番 西中島本店 Takoyaki Juhachiban (the 1990 main shop by Minamikata; tenkasu-packed takoyaki in four flavours)
//   + らーめん ぴ! Ramen Pi! (chicken-paitan ramen with French touches and a cheese-risotto finish; renamed per 2026 reviews)
//   + 寿司割烹 ふじい Sushi Kappou Fujii (8-seat reservation-only sushi kappo, one ¥25,000 omakase at 18:00)
//   + たこ焼き 夢屋 Takoyaki Yumeya (tiny takoyaki shop by Higashi-Yodogawa Station)
//   - left open 27002354 麺匠 はなみち 東三国店 for the integrator: four Hanamichi shops in the crawl (新大阪, 十三, 市岡, 東三国), none
//     in data; batch 6 skipped 新大阪店 as a chain before the 2026-11-02 line (2–4 same-concept shops = small group).
//   - skipped 27153688 炉端とカツラ｡ ＠西中島: same-concept branch of 炉端とカツラ｡ @日本橋, already in data.
//   Lane check: every id above is even. Taken in queue order (nearest first) after the skip and the open question.
//   Chain check:
//   - Juhachiban: a September 2026 review says the 1990 shop "has since expanded to multiple locations, including Dotonbori and
//     Universal Studios Japan"; web search 2026-11-02 found the Dotonbori shop (Time Out, SONS-DOHTONBORI; 4travel says it closed)
//     and a Universal CityWalk shop. Three same-concept shops at most = small group, kept. None is in data.
//   - Sushi Kappou Fujii is unrelated to Chuka Soba Fujii (osaka_chuka_soba_fujii_*): different name, concept and owner evidence.
//   - Ramen Pi! and Takoyaki Yumeya name no other shop.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Ramen block: Ramen Pi! is not described on all six dimensions (no oiliness, no aroma), and the menu changed in 2026, so none.
//   open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27153688', 'same-concept branch of a brand already in data: 炉端とカツラ｡ (@日本橋 shop in data); a second branch is skipped however small the group');

// ================================================================ たこ焼 十八番 西中島本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27001878/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '22:00']);
  put({
    id: 'osaka_takoyaki_juhachiban_nishinakajima', name: 'たこ焼 十八番 西中島本店 (Takoyaki Juhachiban Nishinakajima Honten)', category: 'OMNI',
    lat: 34.725873, lng: 135.499308, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat batter packed with tenkasu (tempura scraps).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus and small shrimp in a batter made with dashi and milk.',
    hours_raw: 'Daily 12:00–22:00, last order 21:30; takeout still sold after last order; hours may change (Tabelog). No reservations; cash or PayPay only (Tabelog). 18 seats: 8 at the counter and two tables for four; smoking allowed (Tabelog). Opened 26 November 1990 (Tabelog). Takeout in microwave-safe boxes (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-17-17 — about 20 m from Hankyu Minamikata Stn, 2 min from Nishinakajima-Minamigata Stn (Tabelog), across from the Minamikata north-east gate (September 2026)',
    cuisine: 'Takoyaki only (July 2026) · batter made with dashi and milk, creamy inside; each ball holds octopus, pickled ginger, small shrimp and plenty of tenkasu, so the outside is crisp (September 2026) · flavours: sauce, salt, tendashi (dipping broth) and ponzu; sauce mayo and green-onion mayo (2025–2026) · "Ohashiko" assortments: three kinds, 12 pieces, ¥950; four kinds, 16 pieces, ¥1,270 (September 2026) · bonito flakes, aonori, sauce and mayonnaise free on the table (2025–2026) · beer and highballs (2026); sake, shochu, wine and cocktails (Tabelog); Coke ¥250 (September 2026)',
    website: null, gmaps: gm('たこ焼 十八番 西中島本店'), menu_url: null,
    notes: "[Takoyaki · Nishinakajima, tenkasu-packed takoyaki since 1990] The 1990 main shop of Juhachiban, right by the Hankyu Minamikata gate: takoyaki at the front window and a small room behind with counter, two tables and drinks. The balls are full of tenkasu, so they come out crisp outside and creamy inside, with octopus, pickled ginger and small shrimp in a batter of dashi and milk (September 2026). Try the \"Ohashiko\" assortment: salt, sauce and tendashi or ponzu, 12 pieces for ¥950, or all four flavours for ¥1,270 (September 2026). Bonito flakes, aonori and mayonnaise are free on the table. A favourite late stop for locals after a drink. Cash or PayPay only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 26 November 1990 (Tabelog). A September 2026 diner writes that the shop "was established with the desire to create a takoyaki shop where girls can casually drop by" under the motto "One Ball, One Soul". Another September 2026 diner was shown in by an older woman grilling takoyaki at the front, and writes that the brand has since opened other shops, including Dotonbori and Universal Studios Japan.', philosophy: '"One Ball, One Soul" (motto, as quoted by a September 2026 diner).', specialty: 'Ohashiko assortment; tenkasu-packed takoyaki.',
      anecdotes: [
        { text: '"The takoyaki batter is blended with dashi and milk, making it creamy." — September 2026, Ohashiko three kinds for JPY 950 with ponzu.', source: R + 'B535642543/' },
        { text: '"The takoyaki from the long-established Takoyaki Juhachiban is delicious even when reheated the next day." — September 2026, an after-party regular.', source: R + 'B467186307/' },
        { text: '"The takoyaki here had a unique flavor that you can\'t find in Kanto, and it was the most delicious I\'ve ever had in my life." — August 2026.', source: R + 'B535853000/' },
      ],
      japanese_sources_summary: '食べログ: たこ焼 十八番 西中島本店、たこ焼き、大阪市淀川区西中島3-17-17、南方駅から21m、毎日12:00〜22:00 (L.O. 21:30、L.O. 後もテイクアウト可)、予約不可、現金か PayPay のみ、18席 (カウンター8、4人テーブル2)、喫煙可、1990年11月26日オープン、電子レンジ可の容器で持ち帰り。口コミ (2025年1月〜2026年9月): たこ焼きだけ、生地はだしと牛乳でクリーミー、タコ、紅しょうが、小エビ、天かすたっぷりで外はカリッ、ソース、塩、tendashi、ポン酢、ソースマヨ、ねぎマヨ、「Ohashiko」は3種12個950円、4種16個1,270円、かつお節、青のり、ソース、マヨネーズは卓上で自由、ビール、ハイボール、コーラ250円、道頓堀や Universal Studios Japan にも店がある、飲んだあとに寄る常連も。',
      confidence: 'medium', sources: [TB, R + 'B467186307/', R + 'B499058077/', R + 'B500664236/', R + 'B532254215/', R + 'B533244565/', R + 'B535642543/', R + 'B535853000/', R + 'B536592891/', R + 'B537202404/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the front, sit inside if there is room; cash or PayPay only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-17-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目17番17号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536592891/', R + 'B537202404/', R + 'B535642543/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ohashiko, three kinds (12 pieces)', '¥950', 'Takoyaki', 'no', 'no', 'September 2026; salt, sauce, and tendashi or ponzu.', 'ohashiko_3'),
      it('', '', 'Ohashiko, four kinds (16 pieces)', '¥1,270', 'Takoyaki', 'no', 'no', 'September 2026; salt, ponzu, tendashi and sauce.', 'ohashiko_4'),
      it('', '', 'Takoyaki, green-onion mayo', '', 'Takoyaki', 'no', 'no', 'August 2026.', 'negi_mayo'),
      it('', '', 'Coca-Cola', '¥250', 'Drinks', 'ask', 'ask', 'September 2026.', 'cola'),
    ] }, {
    cuisine: 'たこ焼きだけ (2026年7月)・生地はだしと牛乳で、中はクリーミー。タコ、紅しょうが、小エビ、天かすたっぷりで外はカリッ (2026年9月)・味: ソース、塩、tendashi、ポン酢。ソースマヨ、ねぎマヨ (2025〜2026年)・「Ohashiko」: 3種12個950円、4種16個1,270円 (2026年9月)・かつお節、青のり、ソース、マヨネーズは卓上で自由に (2025〜2026年)・ビールとハイボール (2026年)。日本酒、焼酎、ワイン、カクテル (食べログ)。コーラ250円 (2026年9月)',
    neighborhood: '西中島3-17-17。阪急 南方駅から約20m、西中島南方駅から徒歩2分 (食べログ)。南方駅の北東改札を出てすぐ (2026年9月)',
    gf_detail: 'グルテンフリーではありません。小麦の生地に天かすがたっぷり。',
    vegan_detail: 'ヴィーガンではありません。だしと牛乳の生地にタコと小エビ。',
    notes: '[たこ焼き・西中島、1990年からの天かすたっぷりのたこ焼き] 1990年にできた十八番の本店で、阪急 南方駅の改札のすぐそば。店先でたこ焼きを焼き、奥にカウンターとテーブル2つの小さな席があって、お酒も飲める。天かすがたっぷり入っているので、外はカリッと、中はクリーミー。タコ、紅しょうが、小エビを、だしと牛乳の生地で (2026年9月)。おすすめは「Ohashiko」: 塩、ソース、tendashiかポン酢の3種12個で950円、4種ぜんぶで1,270円 (2026年9月)。かつお節、青のり、マヨネーズは卓上で自由に。地元の人が飲んだあとに寄る店。現金か PayPay のみ。喫煙可。',
  });
}

// ================================================================ らーめん ぴ!
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27118672/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:30'], ['17:30', '01:00']);
  put({
    id: 'osaka_ramen_pi_nishinakajima', name: 'らーめん ぴ! (Ramen Pi!)', category: 'OMNI',
    lat: 34.725868, lng: 135.499465, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan broth, some with shellfish, chashu and egg.',
    hours_raw: 'Mon–Thu 11:30–15:30 and 17:30–01:00; Fri 11:30–15:30 and 17:30–02:00; Sat 11:30–02:00; Sun and holidays 11:30–21:00; open all year; hours may change (Tabelog). No reservations (Tabelog). Tabelog lists no cards, e-money or QR, but an October 2026 diner found cashless payment at the ticket machine. 8 counter seats; non-smoking; children welcome (Tabelog). No alcohol (October 2026). Opened 8 August 2020 (Tabelog). Reviewers from September 2026 say the shop now goes by "French Chicken Noodles", with a new menu.',
    hours: { 0: W, 1: W, 2: W, 3: day(['11:30', '15:30'], ['17:30', '02:00']), 4: day(['11:30', '02:00']), 5: day(['11:30', '21:00']), 6: day(['11:30', '21:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-16-6, ground floor of 三勝ビル — by the Hankyu Minamikata east gate (Tabelog); same building as osaka_negiyaki_okonomiyaki_kazu_nishinakajima',
    cuisine: 'Chicken-paitan ramen with French touches (2026) · Tabelog shop text: "Jidori White", a rich soup of Tamba Kurodori chicken with a vegetable purée; "Jidori Gold" (salt) and "Jidori Black" (soy); tsukemen; chashu don · from September 2026 reviewers report a new name and menu built on chicken paitan: "Classic" chicken paitan with egg and chashu ¥1,300; "Maree", chicken paitan with shellfish broth, ¥1,350; special topping ¥450 (September–October 2026) · basil sauce, mustard and lemon on the rim of the bowl (2026) · rare chashu (2026) · finish with the cheese risotto set ¥550, raclette melted with a torch (September 2026); small rice ¥150 · Pi! White ¥1,050 and tsukemen still ordered in October 2026 · noodle size small, regular or large at the ticket machine (October 2026)',
    website: null, gmaps: gm('らーめん ぴ! 西中島'), menu_url: null,
    notes: "[Ramen · Nishinakajima, chicken paitan with a French accent] An 8-seat counter by the Hankyu Minamikata gate that serves a rich chicken paitan dressed like a French plate, with basil sauce, mustard and lemon around the rim and rare chashu on top (2026). Finish the broth as a cheese risotto, raclette melted with a torch, for ¥550 (September 2026). In 2026 it changed its name and menu: reviewers now call it \"French Chicken Noodles\", with the \"Classic\" chicken paitan at ¥1,300 and \"Maree\", chicken paitan with shellfish broth, at ¥1,350 (September–October 2026). One regular missed the old clear salt and soy bowls (October 2026). Open past midnight Monday to Saturday; ticket machine; no alcohol.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Tabelog shop text: a stylish ramen shop right in front of the Hankyu Minamikata gate, with a rich soup of Tamba Kurodori chicken; opened 8 August 2020 (Tabelog). From September 2026, several reviewers report a new name, "French Chicken Noodles", and a revamped menu; the Tabelog listing still reads Ramen Pi!. Reviewers praise the friendly staff (2023–2026).', philosophy: null, specialty: 'Chicken-paitan "Classic"; cheese risotto finish.',
      anecdotes: [
        { text: '"The broth has a unique flavor, combining the essence of chicken paitan with a hint of potato, which is quite delightful." — September 2026, the Classic for JPY 1,300.', source: R + 'B536349794/' },
        { text: '"It was so delicious that I wanted to drink every last drop." — October 2026, the Maree for JPY 1,350.', source: R + 'B537187103/' },
        { text: '"The raclette cheese enhances the guilty pleasure, and it goes incredibly well with the broth." — September 2026, the cheese risotto set.', source: R + 'B537105697/' },
      ],
      japanese_sources_summary: '食べログ: らーめん ぴ!、ラーメン・つけ麺、大阪市淀川区西中島3-16-6 三勝ビル 1F、阪急 南方駅の東改札すぐ、月〜木11:30〜15:30、17:30〜翌1:00、金11:30〜15:30、17:30〜翌2:00、土11:30〜翌2:00、日・祝11:30〜21:00、無休、予約不可、カウンター8席、禁煙、子ども可、2020年8月8日オープン、店の紹介に「Jidori White」(Tamba Kurodori の濃厚スープに野菜のピューレ)、「Jidori Gold」(塩)、「Jidori Black」(醤油)、つけ麺、チャーシュー丼。口コミ (2023年10月〜2026年10月): 2026年9月から店名が「French Chicken Noodles」に変わり、メニューも鶏白湯中心に、「Classic」1,300円、貝だしの鶏白湯「Maree」1,350円、特製トッピング450円、ふちにバジルソース、マスタード、レモン、レアチャーシュー、チーズリゾットのセット550円 (ラクレットをバーナーで)、小ライス150円、2026年10月にも Pi! White 1,050円とつけ麺、券売機でキャッシュレス可、お酒はない、前の塩や醤油が好きだった常連は残念がる。',
      confidence: 'medium', sources: [TB, R + 'B473353043/', R + 'B500471074/', R + 'B515700294/', R + 'B522261854/', R + 'B536349794/', R + 'B537105697/', R + 'B537187103/', R + 'B537528408/', R + 'B537809235/', R + 'B538419678/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine with cashless payment; choose noodle size and toppings. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-16-6 三勝ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026 (operating under a new name per reviewers).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目16番6号 (go) 15m; same building (3-16-6) as osaka_negiyaki_okonomiyaki_kazu_nishinakajima, about 9 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536349794/', R + 'B537809235/', R + 'B538419678/'],
    price_note: 'Prices from September–October 2026 reviews; the menu changed in 2026.', last_checked: TODAY, items: [
      it('', '', 'Classic (chicken paitan ramen)', '¥1,300', 'Ramen', 'no', 'no', 'September 2026.', 'classic'),
      it('', '', 'Maree (chicken paitan with shellfish broth)', '¥1,350', 'Ramen', 'no', 'no', 'September–October 2026.', 'maree'),
      it('', '', 'Pi! White', '¥1,050', 'Ramen', 'no', 'no', 'October 2026.', 'pi_white'),
      it('', '', 'Cheese risotto set', '¥550', 'Rice', 'ask', 'no', 'September 2026; raclette.', 'cheese_risotto'),
    ] }, {
    cuisine: 'フランス料理のような鶏白湯ラーメン (2026年)・食べログの店の紹介: 「Jidori White」は Tamba Kurodori の濃厚スープに野菜のピューレ、「Jidori Gold」(塩)、「Jidori Black」(醤油)、つけ麺、チャーシュー丼・2026年9月から店名とメニューが変わったという口コミ: 鶏白湯に卵とチャーシューの「Classic」1,300円、貝だしの鶏白湯「Maree」1,350円、特製トッピング450円 (2026年9〜10月)・丼のふちにバジルソース、マスタード、レモン (2026年)・レアチャーシュー (2026年)・しめはチーズリゾットのセット550円、ラクレットをバーナーで溶かす (2026年9月)。小ライス150円・2026年10月にも Pi! White 1,050円とつけ麺・麺の量は券売機で小、並、大から (2026年10月)',
    neighborhood: '西中島3-16-6、三勝ビルの1階。阪急 南方駅の東改札のすぐそば (食べログ)',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯のスープ (貝だしも)、チャーシュー、卵。',
    notes: '[ラーメン・西中島、フランス風の鶏白湯] 阪急 南方駅の改札そばのカウンター8席の店。濃厚な鶏白湯を、フランス料理の皿のように、ふちにバジルソース、マスタード、レモン、上にレアチャーシューで出す (2026年)。残ったスープは、ラクレットをバーナーで溶かすチーズリゾットにできて550円 (2026年9月)。2026年に店名とメニューが変わり、口コミでは「French Chicken Noodles」。鶏白湯の「Classic」1,300円、貝だしの鶏白湯「Maree」1,350円 (2026年9〜10月)。前の澄んだ塩と醤油が恋しいという常連も (2026年10月)。月曜から土曜は深夜まで。券売機。お酒はない。',
  });
}

// ================================================================ 寿司割烹 ふじい
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27137456/'; const R = TB + 'dtlrvwlst/';
  const E = day(['17:00', '23:00']);
  put({
    id: 'osaka_sushi_kappou_fujii_nishinakajima', name: '寿司割烹 ふじい (Sushi Kappou Fujii)', category: 'OMNI',
    lat: 34.726222, lng: 135.501303, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi comes with soy sauce, a different one for each topping (September 2026). The shop says it may decline bookings from guests with extensive allergies, for safety (Tabelog). Mention allergies when you book.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a single seafood omakase.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 17:00–23:00; closed Wednesday, Sunday and holidays; hours may change (Tabelog). Reservation only: one ¥25,000 omakase course, all guests start together at 18:00; late arrivals may miss dishes; book or cancel by 22:00 the day before (Tabelog). Cash and cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 counter seats (Tabelog house rules; September 2026); non-smoking; no children; no strong perfume; no phone calls inside; photos of food fine but not of other guests or staff; no very revealing clothes (Tabelog). Opened 20 June 2023; reservation-only course format since mid-2026 (Tabelog; September 2026).',
    hours: { 0: E, 1: E, 3: E, 4: E, 5: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-3-9, ground floor — 3 min from Nishinakajima-Minamigata Stn and Hankyu Minamikata Stn (Tabelog)',
    cuisine: 'Sushi kappo: one omakase course, ¥25,000, starting at 18:00 (Tabelog; September 2026) · starters: hairy crab, ikura and tuna in a crab shell, with sudachi (September 2026); nodoguro soup made without soy sauce (September 2026) · uni tasting of three or four kinds, e.g. Hokkaido and Rishiri murasaki uni and Ehime red uni (September 2026) · nigiri: yellowtail, akagai, kohada marinated four days, eel wrapped in Lake Hamana aonori, shima-aji from Amakusa, toro, sanma, simmered clam from Kujukuri, marinated yellowfin, nodoguro, anago (September 2026) · rice served warm, at body temperature or slightly cool to suit each topping, and a different soy sauce for each (September 2026) · between pieces: grilled akagai, mozuku, grilled managatsuo and mehikari, abalone steamed six hours with liver sauce (September 2026) · wasabi from Shizuoka (September 2026) · finish: toro-taku rice bowl (September 2026) · drinks: draft beer ¥800, Taketsuru highball ¥900, chuhai and shochu from ¥700, sake from ¥800 (September 2026)',
    website: null, gmaps: gm('寿司割烹 ふじい 西中島'), menu_url: null,
    notes: "[Sushi · Nishinakajima, 8-seat omakase at a single 18:00 start] A bright, calm sushi kappo near Minamikata that since mid-2026 serves one ¥25,000 omakase to eight guests at the counter, all starting together at 18:00 (Tabelog; September 2026). Expect hairy crab and ikura to open, a nodoguro soup, a tasting of several kinds of uni, and nigiri from four-day kohada to anago, with abalone steamed six hours and charcoal-grilled fish between pieces, ending on a toro-taku bowl (September 2026). The chef serves the rice at three temperatures and uses a different soy sauce for each topping, and talks guests through every fish (September–October 2026). Book by the day before and arrive on time; no children, no strong perfume. Closed Wednesday and Sunday.",
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed)'], origin: null, background: 'No shop description on Tabelog beyond house rules; opened 20 June 2023 (Tabelog). Since mid-2026 the shop runs as an 8-seat counter, reservation only, with a single course starting at 18:00 (September 2026 reviews; Tabelog). Reviewers describe the chef as friendly and talkative, explaining each ingredient, with deep knowledge of fish (September–October 2026).', philosophy: 'Rice temperature and soy sauce matched to each topping (September 2026).', specialty: 'Uni tasting; abalone steamed six hours with liver sauce.',
      anecdotes: [
        { text: '"They categorize the rice temperature into three ranges: warm, body temperature, and slightly cold, adjusting it according to the topping." — September 2026, the JPY 25,000 omakase.', source: R + 'B536172265/' },
        { text: '"One standout was the abalone, which was steamed in a vacuum for six hours." — September 2026.', source: R + 'B536255570/' },
        { text: '"The charcoal-grilled mehikari was especially surprising, with an incredibly fluffy texture that changed my previous impressions." — September 2026.', source: R + 'B537365652/' },
      ],
      japanese_sources_summary: '食べログ: 寿司割烹 ふじい、寿司・海鮮・和食、大阪市淀川区西中島3-3-9 1F、西中島南方駅と南方駅から徒歩3分、月・火・木・金・土17:00〜23:00、水・日・祝休み、完全予約制、コースは25,000円の一つだけ、18:00にいっせいにスタート、遅れると出せない料理もある、予約とキャンセルは前日22:00まで、現金とカード、カウンター8席、禁煙、子ども不可、強い香水はひかえて、アレルギーが多い場合は予約を断ることもある、店内で電話はしない、ほかの客やスタッフを写さない、露出の多い服はひかえて、2023年6月20日オープン。口コミ (2026年9〜10月): 毛ガニ、いくら、マグロの前菜、のどぐろのスープ、ウニの食べくらべ (Hokkaido、Rishiri、Ehime など)、ブリ、赤貝、4日漬けたコハダ、Lake Hamana の青のりで巻いたうなぎ、Amakusa のシマアジ、トロ、さんま、Kujukuri の煮た貝、漬けのキハダ、のどぐろ、穴子、シャリは温かい、人肌、少し冷たいの3つの温度で、醤油もネタごとに変える、6時間蒸したアワビの肝ソース、炭火のメヒカリ、しめはトロたく丼、生ビール800円、Taketsuru のハイボール900円、日本酒800円から、大将は気さくで魚にくわしい。',
      confidence: 'medium', sources: [TB, R + 'B536172265/', R + 'B536255570/', R + 'B536306824/', R + 'B536443259/', R + 'B536596089/', R + 'B536638972/', R + 'B537365652/', R + 'B538090399/', R + 'B538107597/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only, one course, fixed 18:00 start; house rules on perfume, children, phones and photos. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-3-9 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目3番9号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536172265/', R + 'B536306824/'],
    price_note: 'Course price from Tabelog; drink prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥25,000', 'Course', 'ask', 'no', 'Tabelog; September 2026.', 'omakase'),
      it('', '', 'Draft beer', '¥800', 'Drinks', 'no', 'ask', 'September 2026.', 'draft_beer'),
      it('', '', 'Taketsuru highball', '¥900', 'Drinks', 'ask', 'ask', 'September 2026.', 'highball'),
      it('', '', 'Sake', 'from ¥800', 'Drinks', 'ask', 'ask', 'September 2026.', 'sake'),
    ] }, {
    cuisine: '寿司割烹: おまかせのコース一つ、25,000円、18:00スタート (食べログ。2026年9月)・前菜: カニの甲羅に毛ガニ、いくら、マグロ、すだちを添えて (2026年9月)。醤油を使わないのどぐろのスープ (2026年9月)・ウニの食べくらべ3〜4種、たとえば Hokkaido と Rishiri のムラサキウニ、Ehime の赤ウニ (2026年9月)・にぎり: ブリ、赤貝、4日漬けたコハダ、Lake Hamana の青のりで巻いたうなぎ、Amakusa のシマアジ、トロ、さんま、Kujukuri の煮た貝、漬けのキハダ、のどぐろ、穴子 (2026年9月)・シャリはネタに合わせて温かい、人肌、少し冷たいの3つの温度で、醤油もネタごとに変える (2026年9月)・にぎりの合間に: 焼いた赤貝、もずく、焼いたマナガツオとメヒカリ、6時間蒸したアワビの肝ソース (2026年9月)・わさびは Shizuoka のもの (2026年9月)・しめ: トロたく丼 (2026年9月)・飲み物: 生ビール800円、Taketsuru のハイボール900円、酎ハイと焼酎700円から、日本酒800円から (2026年9月)',
    neighborhood: '西中島3-3-9、1階。西中島南方駅と阪急 南方駅から徒歩3分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。寿司は醤油で、ネタごとにちがう醤油を使う (2026年9月)。アレルギーが多い場合は、安全のため予約を断ることもあると店は書いている (食べログ)。予約のときに伝えてください。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせのコースだけ。',
    notes: '[寿司・西中島、18:00いっせいスタートの8席のおまかせ] 南方駅の近くの明るく落ち着いた寿司割烹で、2026年の夏からは25,000円のおまかせのコース一つだけを、カウンター8席で18:00にいっせいにスタート (食べログ。2026年9月)。毛ガニといくらの前菜、のどぐろのスープ、何種類かのウニの食べくらべ、4日漬けたコハダから穴子までのにぎり、合間に6時間蒸したアワビや炭火の焼き魚、しめはトロたく丼 (2026年9月)。シャリを3つの温度で出し、ネタごとに醤油を変え、魚を一つずつ説明してくれる (2026年9〜10月)。前日までに予約して時間どおりに。子どもと強い香水は不可。水曜と日曜休み。',
  });
}

// ================================================================ たこ焼き 夢屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27120728/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_takoyaki_yumeya_higashiyodogawa', name: 'たこ焼き 夢屋 (Takoyaki Yumeya)', category: 'OMNI',
    lat: 34.739131, lng: 135.504549, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat batter full of tenkasu (tempura scraps).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki; kara-age and yangnyeom chicken also on the menu.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 11:00–14:00 and 17:00–23:00; Sun 11:00–17:00; closed Wednesday; hours may change (Tabelog). No reservations; no cards or e-money, QR payments accepted (Tabelog). 8 seats, 7 at the counter; smoking allowed; private hire for up to 20 (Tabelog). One drink per person to eat in at lunch; eating in costs about ¥200 more than takeaway (April 2026). Eat-in had already closed at 14:10 on a holiday in January 2026. Freshly made, so expect a wait of about 15 minutes (April 2025). Opened 19 October 2020 (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: day(['11:00', '17:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '東淀川区西淡路1-14-30 — about 60 m from JR Higashi-Yodogawa Stn (Tabelog), across the crossing from the east exit (November 2025), one stop from Shin-Osaka',
    cuisine: 'Takoyaki: 6, 9 or 12 pieces, with sauce, soy sauce, ponzu or salt; salt mayo recommended (April 2025) · lots of tenkasu inside, crisp outside and creamy inside; large balls with small pieces of octopus (2025–2026) · prices: 6 pieces ¥500 (May 2025; March 2026); 9 pieces with sauce ¥750 (January 2026); 9 pieces with salt ¥850, green-onion topping ¥50 (April 2025) · soy-sauce mayo with green onion (May 2026) · mayonnaise added free (2025–2026) · small kara-age (November 2025); yangnyeom chicken (May 2025) · "senbero" set of takoyaki and two drinks; oolong tea ¥250 (April 2025)',
    website: null, gmaps: gm('たこ焼き 夢屋 西淡路'), menu_url: null,
    notes: "[Takoyaki · Higashi-Yodogawa, crunchy tenkasu takoyaki one stop from Shin-Osaka] A tiny takeout window with a few counter seats behind it, a minute from Higashi-Yodogawa Station, decorated half American, half Osaka, with Yoshimoto comedy on the TV (April 2025). The takoyaki are big and rough-surfaced, so full of tenkasu that they come out crunchy outside and creamy inside; the octopus pieces are small (2025–2026). Six cost ¥500 (March 2026). Locals favour salt mayo or soy-sauce mayo with green onion. Each batch is made to order, so allow about 15 minutes; eating in at lunch needs one drink each. Closed Wednesday; open to 23:00 most evenings.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 19 October 2020 (Tabelog). Reviewers find it through YouTube recommendations (November 2025; January 2026) and praise the friendly staff (May 2026).', philosophy: null, specialty: 'Salt-mayo takoyaki.',
      anecdotes: [
        { text: '"After a brief wait, I was informed, \'It will take a little time,\' and the sounds of sizzling from the unseen counter heightened my anticipation." — April 2025, 9 salt takoyaki for JPY 850.', source: R + 'B505522943/' },
        { text: '"While Kansai-style takoyaki is often thought of as fluffy, these were crispy on the outside, then fluffy, and finally creamy on the inside." — March 2026, 6 pieces for JPY 500.', source: R + 'B525364801/' },
        { text: '"The soy sauce mayo with green onion topping was so delicious that I felt like I was enjoying a completely different dish rather than just takoyaki." — May 2026.', source: R + 'B527501080/' },
      ],
      japanese_sources_summary: '食べログ: たこ焼き 夢屋、たこ焼き、大阪市東淀川区西淡路1-14-30、東淀川駅から59m、月・火・木・金・土11:00〜14:00、17:00〜23:00、日11:00〜17:00、水休み、予約不可、カードと電子マネー不可、QR 可、8席 (カウンター7)、喫煙可、貸切20人まで、2020年10月19日オープン。口コミ (2025年4月〜2026年8月): 東淀川駅の東口から横断歩道をわたってすぐ、アメリカと大阪がまじった店内で Yoshimoto Shinkigeki がテレビに、6個、9個、12個、ソース、醤油、ポン酢、塩、おすすめは塩マヨ、6個500円、ソース9個750円、塩9個850円、ねぎ50円、醤油マヨねぎ、マヨネーズは無料、天かすたっぷりで外はカリッ、中はとろり、大きめでタコは小さめ、小さいから揚げ、yangnyeom chicken、senbero セット、ウーロン茶250円、焼き上がりまで約15分、昼のイートインはワンドリンク制、イートインは持ち帰りより約200円高い、スタッフが親切。',
      confidence: 'medium', sources: [TB, R + 'B505522943/', R + 'B507302460/', R + 'B515710439/', R + 'B516565060/', R + 'B520755930/', R + 'B525364801/', R + 'B527217906/', R + 'B527501080/', R + 'B534185844/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the takeout window; one drink each to eat in at lunch; QR payment or cash. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区西淡路1-14-30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区西淡路一丁目14番30号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505522943/', R + 'B520755930/', R + 'B525364801/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, 6 pieces', '¥500', 'Takoyaki', 'no', 'no', 'March 2026.', 'tako_6'),
      it('', '', 'Takoyaki with sauce, 9 pieces', '¥750', 'Takoyaki', 'no', 'no', 'January 2026.', 'tako_9_sauce'),
      it('', '', 'Takoyaki with salt, 9 pieces', '¥850', 'Takoyaki', 'no', 'no', 'April 2025.', 'tako_9_salt'),
      it('', '', 'Green-onion topping', '¥50', 'Takoyaki', 'ask', 'ask', 'April 2025.', 'negi'),
    ] }, {
    cuisine: 'たこ焼き: 6個、9個、12個。ソース、醤油、ポン酢、塩。おすすめは塩マヨ (2025年4月)・天かすがたっぷりで、外はカリッ、中はとろり。大きめでタコは小さめ (2025〜2026年)・値段: 6個500円 (2025年5月。2026年3月)。ソース9個750円 (2026年1月)。塩9個850円、ねぎ50円 (2025年4月)・醤油マヨねぎ (2026年5月)・マヨネーズは無料 (2025〜2026年)・小さいから揚げ (2025年11月)。yangnyeom chicken (2025年5月)・たこ焼きと2杯のsenbero セット。ウーロン茶250円 (2025年4月)',
    neighborhood: '東淀川区西淡路1-14-30。JR 東淀川駅から約60m (食べログ)。東口を出て横断歩道をわたってすぐ (2025年11月)。新大阪から一駅',
    gf_detail: 'グルテンフリーではありません。天かすがたっぷりの小麦の生地。',
    vegan_detail: 'ヴィーガンではありません。タコのたこ焼き。から揚げとyangnyeom chickenもある。',
    notes: '[たこ焼き・東淀川、新大阪から一駅のザクザク天かすたこ焼き] 東淀川駅から1分の小さな店で、持ち帰りの窓口の奥に数席のカウンター。店内はアメリカと大阪がまじった雰囲気で、テレビには Yoshimoto Shinkigeki (2025年4月)。たこ焼きは大きくてごつごつ、天かすがたっぷりで外はザクッ、中はとろり。タコは小さめ (2025〜2026年)。6個500円 (2026年3月)。地元の人のおすすめは塩マヨか、醤油マヨねぎ。注文してから焼くので約15分みておく。昼に店内で食べるならワンドリンク制。水曜休み。たいていの日は23:00まで。',
  });
}

save();
