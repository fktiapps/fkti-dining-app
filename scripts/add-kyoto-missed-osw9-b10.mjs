// Kyoto "what did we miss" pass (kyoto-missed) — lane osw9, batch 10: two legacy records REBUILT IN PLACE, plus two new
// lane shops (Tabelog id mod 6 = 5).
//   ~ ChIJq_Gt7mUJAWARdOvjkos8A7s  UNO RAMEN -Kyoto Station- (rebuilt from its own Tabelog 26044421, the operator's site
//     soymilkramen.com and the san-tatsu.jp release of 2025-11-21; every claim from the Gion shop's page 26038344 dropped)
//   ~ ChIJhZiMFa0JAWARRdJzAPWyQYI  Nishiki Market Alley by MOON and BACK (rebuilt from its own page on moonandbackkyoto.com,
//     the company page and TableCheck; every claim from MOON & BACK Ramen Bar Kyoto, Tabelog 26034184 at 高宮町585, dropped)
//   + 無双心 祇園店 Musou Shin Gion (vegetable-potage chicken-tonkotsu ramen near Kenninji; since 2014)       [core]
//   + あらた Arata (okonomiyaki and horumon teppan by Kyoto Station Hachijo exit; Okonomiyaki Tabelog 100)   [notable]
//   Group notes: UNO RAMEN lists four Kyoto shops (Gion, Sanjo, Kyoto Station, Umekoji); the Gion shop is already in data
//   (ChIJVc1NH3sJAWAR9SMlbODV9NQ). MOON and BACK (The Infinity Inc.) lists Ramen Bar Kyoto, Nishiki Market Alley, Kiyamachi
//   Alley, a sushi roll shop, Ramen Bar Kobe and a sushi omakase. Both rebuilt as the integrator asked; flagged in the report.
//   無双心: reviews mention a Kameoka shop and a Toronto shop; the shop site (washoku.com) returned 403. Ramen block left off:
//   the six profile dimensions cannot all be sourced.
//   Pins: UNO keeps its Tabelog point (6.5 m from kyoto_gozan_nozomi, another building); MOON and BACK keeps its pin, which
//   is exactly GSI's lot point for 西魚屋町600 (the BRISE building).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ UNO RAMEN -Kyoto Station- (rebuild in place)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26044421/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://soymilkramen.com/'; const SHOPS = SITE + 'shops.html'; const MENU = SITE + 'Food-Menu.html'; const FAQ = SITE + 'FAQ.html';
  const PR = 'https://san-tatsu.jp/pressrelease/482185/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'ChIJq_Gt7mUJAWARdOvjkos8A7s', name: 'UNO RAMEN -Kyoto Station-', category: 'VEGAN',
    lat: 34.985858, lng: 135.758736, cuisine_type: 'ramen',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Per the operator: every menu item is gluten-free, no wheat flour is used in the kitchen, and the rice-flour noodles come from its own gluten-free-only noodle factory (official FAQ and site). The shop sits inside the 京都拉麺小路 ramen food court among wheat-ramen shops; its own kitchen practice is as the operator states. Held at "options" pending human review.',
    vegan_status: 'full', vegan_label: 'Fully vegan', vegan_detail: 'Fully vegan per the operator: "すべてのメニューが植物性食材のみでつくる、100%ヴィーガンメニュー", with no animal ingredients brought into the kitchen (official FAQ and site). Toppings use vegan cheese and soy meat (January 2026).',
    hours_raw: '11:00–22:00 (last order 21:30), every day (official site; Tabelog). No reservations — walk in (official FAQ). Order by QR code on your phone (February–March 2026). Takeaway available for a container charge (official FAQ). Cash, cards, contactless, PayPay and some IC cards (official FAQ). Non-smoking; mainly counter and table seats (Tabelog; January 2026). Kyoto Station Building 10F, inside 京都拉麺小路; directly connected to Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station Building 10F, Kyoto Ramen Koji — directly connected to Kyoto Station',
    cuisine: 'Plant-based, gluten-free soy-milk ramen on rice-flour noodles, from the soy-milk pâtissière behind the Gion shop (official site; press release) · 豆乳ラーメン「花」 ¥2,310 at opening (press release) · 豆乳担々麺「月花」, the most popular tantanmen; 五葷抜き「雪月」 without the five pungent roots; 「雪月花」 for Jain diners; a soy-free version (official menu) · rice: seared-cheese sprouted brown rice, soy-meat niku-miso don; steamed dumplings; 松花堂弁当 station bento sold only here (official menu) · RAMEN CAKE ¥1,500 (press release)',
    website: SITE, gmaps: gm('UNO RAMEN Kyoto Station 京都拉麺小路'), menu_url: MENU,
    notes: "[Vegan, gluten-free ramen · Kyoto Station 10F] The Kyoto Station branch of UNO RAMEN, opened 21 December 2025 in the Kyoto Ramen Koji food court: soy-milk ramen and tantanmen on the brand's own rice-flour noodles, everything plant-based and gluten-free per the operator, with versions without the five pungent roots for Buddhist and Jain diners. The basic 'Hana' bowl was ¥2,310 at opening. Walk-in only; order on your phone. 11:00–22:00 daily.",
    chef_bio: { chef_name: '鵜野友紀子', roles: ['Representative director of 株式会社プラントベースドフード (press release); soy-milk pâtissière and brand founder (official site)'], origin: null,
      background: 'Per the press release (2025-11-21): UNO RAMEN -Kyoto Station- opened on 21 December 2025 on the Kyoto Station Building 10F in 京都拉麺小路, run by 株式会社プラントベースドフード (Higashiyama-ku); the brand began as ぎをん豆乳ら〜めん うのゆきこ in Gion. Per the official site: four Kyoto shops (Gion, Sanjo, Kyoto Station, Umekoji); a gluten-free-only noodle factory of its own; the soy variety 香醇 bred for soy milk since 2013; the idea began about 16 years ago with a cake made for a boy with 23 food allergies.',
      philosophy: 'Per the official site: "“食べられない”を、“一緒に食べる”へ" — from "cannot eat" to "eating together": no egg, dairy, meat, fish or wheat, built from plant ingredients alone.',
      specialty: 'Soy-milk ramen 「花」; tantanmen 「月花」.',
      anecdotes: [
        { text: 'A January 2026 visitor noted the Daimonji-shaped fried tofu on the "Hana" bowl and the ramen cake made with the founder’s pastry skills.', source: R + 'B521541991/' },
        { text: 'A February 2026 diner found the Gekka tasty but the steamed dumplings cold, no one greeting guests at the entrance, and the price (¥2,480) high; the pepper explanation was only in English.', source: R + 'B522671864/' },
        { text: 'A February 2026 reviewer thought ¥2,310 for the basic ramen too expensive and saw the shop empty while others had lines.', source: R + 'B523016547/' },
      ],
      japanese_sources_summary: 'プレスリリース (san-tatsu.jp、2025年11月21日): 「UNO RAMEN -Kyoto Station-」が2025年12月21日 (日) に京都駅ビル10階京都拉麺小路に新規オープン、京都祇園の「ぎをん豆乳ら〜めん うのゆきこ」のブランド、グルテンフリーかつ植物性100%のヴィーガンラーメン、調味料 (アミノ酸) 無添加のスープ、米粉と昆布の麺、【花】らーめん2,310円、RAMEN CAKE 1,500円 (税込)、株式会社プラントベースドフード 代表取締役 鵜野友紀子。公式サイト (soymilkramen.com): 京都駅店 11:00〜22:00 (L.O. 21:30)、予約は三条店のみ、全メニューがグルテンフリーで厨房では小麦粉を使用しない、自社のグルテンフリー専門製麺所、すべて100%ヴィーガン、ナッツフリー、テイクアウト可 (容器代別)、現金・カード・タッチ決済・PayPay・一部交通系IC、豆乳担々麺「月花」、五葷抜き「雪月」、ジャイナ教対応「雪月花」、京都駅限定の松花堂弁当。食べログ: ラーメン、下京区東塩小路町901 京都駅ビル 10F 京都拉麺小路、毎日 11:00〜22:00、予約不可、禁煙、2025年12月21日オープン。口コミ (2026年1〜3月、英語): 豆乳ラーメン「花」、月花2,480円、QR コード注文、値段が高いという声。',
      confidence: 'medium', sources: [TB, SITE, SHOPS, MENU, FAQ, PR, R + 'B521541991/', R + 'B522671864/', R + 'B523016547/', R + 'B525345223/'] },
    cultural_comfort: { level: 'english', note: 'Menus and explanations in English; order on your phone; walk-in only.' },
    safety: { ...SAFETY0, confidence: 'medium', positives: [
      { text: 'Operator FAQ: "すべてのメニューがグルテンフリーです。厨房では小麦粉を使用せず、麺もグルテンフリー専門の自社製麺所で製造しています。"', source: FAQ, verified: TODAY },
      { text: 'Operator FAQ: every menu item is 100% vegan, made only from plant ingredients; the site adds that no animal ingredients or gluten are brought into the kitchen.', source: FAQ, verified: TODAY },
    ], staff_allergy_handling: [
      { text: 'Operator FAQ: all items are gluten-free, plant-based and nut-free; for other allergies tell the staff before ordering — some cannot be accommodated.', source: FAQ, verified: TODAY },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町901 京都駅ビル 10F 京都拉麺小路',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own Tabelog listing 26044421 (opened 2025-12-21), operator site listing the Kyoto Station shop, and the san-tatsu.jp release of 2025-11-21; reviews dated January–March 2026. Rebuilt 2026-11-05 after the record was found to cite the Gion shop’s Tabelog page.' },
    pin_source: `Tabelog ${TB} (34.985858, 135.758736); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot, the station building) 75m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [PR, MENU, R + 'B522671864/'],
    price_note: 'Opening prices from the 2025-11-21 press release (tax included); Gekka price from a February 2026 review; the official menu page lists items without prices.', last_checked: TODAY, items: [
      it('豆乳ラーメン「花」', '', 'Soy-milk ramen "Hana"', '¥2,310', 'Ramen', 'gf', 'vegan', 'Price at opening (Dec 2025).', 'hana'),
      it('豆乳担々麺「月花」', '', 'Soy-milk tantanmen "Gekka"', '¥2,480', 'Ramen', 'gf', 'vegan', 'February 2026.', 'gekka'),
      it('五葷抜き豆乳ラーメン「雪月」', '', 'Soy-milk ramen without the five pungent roots', '', 'Ramen', 'gf', 'vegan', '', 'setsugetsu'),
      it('豆乳担々麺「雪月花」', '', 'Soy-milk tantanmen for Jain diners', '', 'Ramen', 'gf', 'vegan', '', 'setsugekka'),
      it('松花堂弁当', '', 'Shokado bento (Kyoto Station only)', '', 'Bento', 'gf', 'vegan', '', 'shokado_bento'),
      it('RAMEN CAKE', '', 'Ramen cake', '¥1,500', 'Sweets', 'gf', 'vegan', 'Price at opening.', 'ramen_cake'),
    ] }, {
    cuisine: '豆乳パティシエが生んだ、米粉麺の植物性・グルテンフリーの豆乳ら〜めん (公式サイト、プレスリリース)・豆乳ラーメン「花」 開店時2,310円 (プレスリリース)・いちばん人気の豆乳担々麺「月花」、五葷抜きの「雪月」、ジャイナ教対応の「雪月花」、大豆不使用の一杯も (公式メニュー)・炙りチーズのせ発芽玄米ご飯、ソイミートの肉味噌丼、蒸し餃子、京都駅限定の松花堂弁当 (公式メニュー)・RAMEN CAKE 1,500円 (プレスリリース)',
    neighborhood: '京都駅ビル10階、京都拉麺小路。京都駅直結',
    gf_detail: '運営者によれば全メニューがグルテンフリーで、厨房では小麦粉を使わず、米粉麺は自社のグルテンフリー専門製麺所で作る (公式 FAQ、公式サイト)。店は小麦のラーメン店が並ぶ京都拉麺小路の中にあり、厨房の運用は運営者の説明のとおり。人による確認まで「options」にとどめる。',
    vegan_detail: '運営者によれば完全ヴィーガン:「すべてのメニューが植物性食材のみでつくる、100%ヴィーガンメニュー」、厨房に動物性食材を持ち込まない (公式 FAQ、公式サイト)。トッピングはヴィーガンチーズとソイミート (2026年1月)。',
    notes: '[ヴィーガン・グルテンフリーのら〜めん・京都駅10階] UNO RAMEN の京都駅店で、2025年12月21日に京都拉麺小路に開店。自社の米粉麺の豆乳ら〜めんと担々麺で、運営者によればすべて植物性でグルテンフリー。仏教やジャイナ教の方向けの五葷抜きもある。基本の「花」は開店時2,310円。予約不可、注文はスマホで。毎日11時〜22時。',
  });
}

// ================================================================ Nishiki Market Alley by MOON and BACK (rebuild in place)
{
  const SITE = 'https://www.moonandbackkyoto.com/nishiki-market-alley-kyoto'; const ABOUT = 'https://www.moonandbackkyoto.com/aboutus';
  const TC = 'https://www.tablecheck.com/en/nishiki-market-alley';
  const H = day(['12:00', '23:00']);
  put({
    id: 'ChIJhZiMFa0JAWARRdJzAPWyQYI', name: 'Nishiki Market Alley by MOON and BACK', category: 'VEGAN',
    lat: 35.00515, lng: 135.762009, cuisine_type: 'ramen',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Some gluten-free options, per the operator: rice-flour noodles cooked in a separate, dedicated noodle boiler; every fried dish uses rice flour and potato starch, so the fryer oil carries no wheat; a fully gluten-free kaiseki course. But the tantan ramen tare uses regular soy sauce and is not gluten-free even with GF noodles, prep areas and some equipment are shared, and the shop says it is not a gluten-free restaurant — say you need gluten-free when ordering (official page; company page).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a vegan Japanese curry ramen (Nishiki only), a vegan kaiseki course, tofu paper hot pot and vegetable tempura from a vegetable-only fryer. Tell the staff whether you eat egg, dairy or seafood dashi; the shop is not a vegan restaurant and shares prep areas (official page; company page).',
    hours_raw: '12:00–23:00, open every day; ramen-making experience sessions at 9:00, 10:00 and 11:00 (about 60 minutes, booking required) (official page). Bookings on TableCheck; walk-ins welcome but may wait (official page). 80 seats incl. counter, tables, a karaoke private room and a Japanese-style room for about 25; groups of 10–70 (official page; TableCheck). Elevator and wheelchair access; baby chairs; takeaway (official page). Halal-friendly items with halal-certified chicken, but the restaurant is not halal-certified (official page). BRISE (ブリーズ) building 3F near the west entrance of Nishiki Market on the Karasuma side; 1 min from Hankyu Karasuma Stn, 3 min from Shijo Stn (official page).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'West end of Nishiki Market, Karasuma side (BRISE building 3F) — 1 min from Hankyu Karasuma Stn',
    cuisine: 'Ramen and Japanese dishes for mixed diets: wagyu, chicken, vegan, gluten-free and no-pork choices at one table (official page) · tableside-seared wagyu sukiyaki ramen ¥1,880 + tax (the signature); teriyaki chicken ramen ¥1,880; spicy tantan ramen ¥1,880 (GF noodles possible, soup not GF); vegan Japanese curry ramen ¥1,880 (Nishiki only); super big chicken leg ramen ¥2,680 · paper hot pots with rice: wagyu or seafood ¥3,880, tofu ¥3,280 · gluten-free karaage and vegan vegetable tempura ¥1,080 each · kaiseki courses, standard, vegan or all gluten-free: Silver ¥8,000 + tax, Gold ¥10,000 + tax · sushi, sashimi; Kyoto sake, Japanese whisky, a 3-litre beer tower (official page)',
    website: SITE, gmaps: gm('Nishiki Market Alley by MOON and BACK'), menu_url: SITE,
    notes: "[Ramen & Japanese for every diet · Nishiki Market west end] A big, family- and group-friendly third-floor restaurant by the Karasuma end of Nishiki Market, from the MOON and BACK ramen group: tableside-seared wagyu sukiyaki ramen, chicken ramen, a vegan curry ramen, paper hot pots, sushi and kaiseki — with rice-flour noodles from a separate boiler and an all-wheat-free fryer for gluten-free diners, though the kitchen is shared. Ramen about ¥1,880 + tax. 12:00–23:00 daily; ramen-making classes in the morning.",
    chef_bio: { chef_name: '福田竜也', roles: ['Owner-chef (company page); representative director of The Infinity Inc.'], origin: null,
      background: 'Per the company page: owner-chef 福田竜也 (Tatsuya Fukuda) began training in kappo cuisine at 16, then spent about seven years in Sydney, serving as head chef of a modern Japanese restaurant near the Sydney Opera House, and helped launch and produce restaurants in South Korea. The Infinity Inc. was founded in September 2019 (head office 高宮町585) and runs MOON and BACK Ramen Bar Kyoto, Nishiki Market Alley, Kiyamachi Alley, a sushi roll shop, MOON and BACK Ramen Bar Kobe and a sushi omakase. TableCheck describes this shop as an 80-seat restaurant near the entrance to Nishiki Market.',
      philosophy: 'Per the company page: "Food for Everyone – No One Left Behind" — places where guests with different dietary needs share one table.',
      specialty: 'Tableside-seared wagyu sukiyaki ramen; vegan curry ramen.',
      anecdotes: [
        { text: 'Per the official page, the shop once hosted a group of 67 guests with three tour managers, 70 in all.', source: SITE },
        { text: 'Per the official page, a claw-machine game inside keeps children entertained.', source: SITE },
      ],
      japanese_sources_summary: '公式ページ (moonandbackkyoto.com): Nishiki Market Alley by MOON and BACK (錦市場アレイ)、中京区西魚屋町600 ブリーズビル3F、12:00〜23:00、年中無休、ラーメン体験 9:00・10:00・11:00 (要予約)、80席、10〜70名の団体、炙り和牛すき焼きラーメン1,880円+税、照り焼きチキンラーメン、スパイシー担々麺 (グルテンフリー麺可だがスープは通常の醤油でグルテンフリーではない)、錦店限定ヴィーガンカレーラーメン、スーパービッグチキンレッグラーメン2,680円、紙鍋 (和牛・海鮮3,880円、豆腐3,280円)、懐石 (通常・ヴィーガン・オールグルテンフリー、シルバー8,000円・ゴールド10,000円+税)、揚げ物はすべて米粉と片栗粉の衣、野菜専用と肉・魚介専用のフライヤー、小麦麺と米粉麺は別の茹で麺機、ただしグルテンフリーやヴィーガンの専門店ではなく調理スペースは共用、ハラル認証の鶏肉を使うハラルフレンドリー (店はハラル認証なし)、TableCheck で予約、阪急烏丸駅から徒歩約1分。会社概要: The Infinity 株式会社、代表取締役社長 福田竜也、2019年9月設立、運営店舗6店。',
      confidence: 'medium', sources: [SITE, ABOUT, TC] },
    cultural_comfort: { level: 'english', note: 'English service; book on TableCheck; say "gluten-free" or which animal products you avoid when ordering.' },
    safety: { ...SAFETY0, confidence: 'medium', dedicated_fryer: true,
      gf_cross_contamination: [
        { text: 'Official page: wheat and rice-flour noodles are cooked in completely separate noodle boilers; all fried items use rice flour and potato starch, so there is no wheat cross-contact through fryer oil — but prep areas and some other equipment are shared, and the shop is not a gluten-free restaurant.', source: SITE, verified: TODAY },
      ],
      soy_sauce_wheat: [
        { text: 'Official page: the spicy tantan ramen tare uses regular soy sauce and cannot be swapped for gluten-free soy sauce, so that dish is not gluten-free even with GF noodles.', source: SITE, verified: TODAY },
      ],
      vegan_cross_contact: [
        { text: 'Official page: separate fryers for vegetables and for meat and seafood, so vegan fried food does not share oil with meat or seafood.', source: SITE, verified: TODAY },
      ],
      positives: [
        { text: 'Official page: an all gluten-free kaiseki course and a vegan kaiseki course are offered, alongside gluten-free karaage and vegan vegetable tempura.', source: SITE, verified: TODAY },
      ],
      staff_allergy_handling: [
        { text: 'Official page: guests with severe allergies must speak with staff before ordering; tell staff whether you eat egg, dairy or seafood dashi.', source: SITE, verified: TODAY },
      ] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西魚屋町600 ブリーズビル3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own page on the operator site (current menu) and TableCheck listing (bookable for November 2026). Rebuilt 2026-11-05 after the record was found to cite Tabelog 26034184, MOON and BACK Ramen Bar Kyoto at 高宮町585.' },
    pin_source: `GSI 京都府京都市中京区西魚屋町600番地 (lot; the BRISE building) — the existing pin (35.005150, 135.762009) equals the GSI lot point; address from the official page and TableCheck; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official page prices, tax extra (read 2026-11-05).', last_checked: TODAY, items: [
      it('炙り和牛すき焼きラーメン', '', 'Tableside-seared wagyu sukiyaki ramen', '¥1,880 + tax', 'Ramen', 'ask', 'no', 'GF noodles available.', 'wagyu_sukiyaki_ramen'),
      it('ヴィーガンカレーラーメン', '', 'Vegan Japanese curry ramen (Nishiki only)', '¥1,880 + tax', 'Ramen', 'ask', 'vegan', 'GF noodles available.', 'vegan_curry_ramen'),
      it('スパイシー担々麺', '', 'Spicy tantan ramen', '¥1,880 + tax', 'Ramen', 'no', 'no', 'Tare contains regular soy sauce.', 'tantan_ramen'),
      it('豆腐の紙鍋', '', 'Tofu paper hot pot with rice', '¥3,280 + tax', 'Paper hot pots', 'gf', 'vegan', '', 'tofu_kaminabe'),
      it('京都風ヴィーガン天ぷら盛り合わせ', '', 'Kyoto-style vegan tempura (vegetable-only fryer)', '¥1,080 + tax', 'Fried', 'gf', 'vegan', 'Rice flour and potato starch batter.', 'vegan_tempura'),
      it('グルテンフリー唐揚げ', '', 'Gluten-free karaage', '¥1,080 + tax', 'Fried', 'gf', 'no', '', 'gf_karaage'),
      it('懐石コース シルバー', '', 'Kaiseki course Silver (standard, vegan or all gluten-free)', '¥8,000 + tax', 'Courses', 'ask', 'ask', 'Ask ahead for the vegan or GF version.', 'kaiseki_silver'),
    ] }, {
    cuisine: '食の制限が違っても同じテーブルで楽しめるラーメンと日本料理: 和牛、チキン、ヴィーガン、グルテンフリー、ノーポーク (公式ページ)・目の前で炙る和牛すき焼きラーメン1,880円+税 (看板)、照り焼きチキンラーメン1,880円、スパイシー担々麺1,880円 (グルテンフリー麺可だがスープはグルテンフリーではない)、錦店限定ヴィーガンカレーラーメン1,880円、スーパービッグチキンレッグラーメン2,680円・ご飯付きの紙鍋: 和牛・海鮮3,880円、豆腐3,280円・グルテンフリー唐揚げとヴィーガン天ぷら各1,080円・懐石コース (通常・ヴィーガン・オールグルテンフリー): シルバー8,000円+税、ゴールド10,000円+税・寿司、刺身、京都の地酒、日本のウイスキー、3リットルのタワービール (公式ページ)',
    neighborhood: '錦市場の西の入口、烏丸通側 (ブリーズビル3階)。阪急烏丸駅から徒歩1分',
    gf_detail: '運営者によればグルテンフリーの選択肢あり: 米粉麺は専用の茹で麺機、揚げ物はすべて米粉と片栗粉の衣で揚げ油に小麦は入らない、オールグルテンフリーの懐石もある。ただし担々麺のかえしは通常の醤油でグルテンフリー麺にしてもグルテンフリーではなく、調理スペースや一部の器具は共用で、グルテンフリー専門店ではない。注文時にグルテンフリーと伝えること (公式ページ、会社概要)。',
    vegan_detail: 'ヴィーガンの選択肢あり: 錦店限定のヴィーガンカレーラーメン、ヴィーガン懐石、豆腐の紙鍋、野菜専用フライヤーの天ぷら。卵、乳製品、魚介出汁を食べられるかをスタッフに伝えること。ヴィーガン専門店ではなく調理スペースは共用 (公式ページ、会社概要)。',
    notes: '[どんな食事制限にも対応するラーメンと和食・錦市場の西] 錦市場の烏丸側の入口近く、ビルの3階にある家族連れや団体向けの大きな店で、MOON and BACK のラーメングループ。目の前で炙る和牛すき焼きラーメン、チキンラーメン、ヴィーガンカレーラーメン、紙鍋、寿司、懐石があり、グルテンフリーの人には別の茹で麺機の米粉麺と小麦を使わないフライヤー (ただし厨房は共用)。ラーメンは1,880円+税ほど。毎日12時〜23時、朝はラーメン作り体験も。',
  });
}

// ================================================================ 無双心 祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023979/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '24:00']);
  put({
    id: 'kyoto_musoushin_gion', name: '無双心 祇園店 (Musou Shin Gion)', category: 'OMNI',
    lat: 35.001617, lng: 135.773135, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles in a chicken-and-pork-bone soup; tsukemen and mazesoba also wheat (Tabelog; 2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is chicken and pork bone with vegetables, topped with chashu (Tabelog; 2026 reviews).',
    hours_raw: '11:30–24:00 (last order 23:30), every day (Tabelog). Order by ticket machine (September 2026). 15 seats: 11 at the counter and a table for four; non-smoking; no cards (Tabelog). On Yamato-oji south of Shijo, near Kenninji; 238 m from Gion-Shijo Stn (Tabelog; March 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Yamato-oji south of Shijo, near Kenninji — 238 m from Gion-Shijo Stn',
    cuisine: 'Kameoka "veggie potage" ramen: a rich chicken-and-pork-bone soup made with eight aromatic vegetables, on homemade flat noodles, with braised chashu (Tabelog) · Musou Shin ramen ¥1,200 (September 2026), tonkotsu ramen, black sesame ramen with black vinegar and seaweed, ajitama tsukemen · Maeda Kaisen mentaiko mazesoba; a spicy Thai-style bowl · chashu rice, karaage rice bowl (Tabelog; 2024–26 reviews)',
    website: 'http://www.washoku.com/zsr/musoshin/index_jp.html', gmaps: gm('無双心 祇園店'), menu_url: null,
    notes: "[Ramen · Gion, near Kenninji] A late-opening Gion branch of a Kameoka ramen shop, with a creamy chicken-and-pork-bone soup thickened with eight vegetables, homemade flat noodles and tender chashu (Musou Shin ramen ¥1,200); also black-sesame ramen, tsukemen and a mentaiko mazesoba. Busy with overseas visitors; reviewers born in Kyoto are mixed. Ticket machine; open 11:30 to midnight daily.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 2 July 2014 (Tabelog). Per the operator’s Tabelog text: Kameoka’s veggie-potage ramen brought to Gion. Reviews mention a Kameoka shop (September 2024) and a Toronto shop listed in the Michelin Guide, which the Gion shop advertises on a sign (August 2025, September 2026). The shop website listed on Tabelog returned 403 on 2026-11-05.',
      philosophy: null, specialty: 'Musou Shin ramen; black sesame ramen.',
      anecdotes: [
        { text: 'A Kyoto-born August 2025 diner noticed long lines of foreign customers at night and found the ramen "somewhat difficult to understand".', source: R + 'B511409766/' },
        { text: 'An April 2026 regular-of-old found prices up, the ¥10 extra-noodle option gone and the portion seemingly smaller.', source: R + 'B526042891/' },
        { text: 'A September 2024 reviewer found the broth lacking umami and the service poor.', source: R + 'B491826533/' },
      ],
      japanese_sources_summary: '食べログ: 無双心 祇園店、ラーメン・つけ麺・食堂、東山区大和大路四条下ル小松町558-2、祇園四条駅から238m、毎日 11:30〜24:00 (L.O. 23:30)、予約可、15席 (カウンター11、4人掛けテーブル1)、禁煙、カード不可、2014年7月2日オープン、亀岡の veggie pota ラーメン、香味野菜8種の鶏豚骨スープ、自家製平打ち麺、やわらかいチャーシュー、Maeda Kaisen の明太子のまぜそば、Thai-style の一杯。口コミ (2024年9月〜2026年9月、英語): 無双心ラーメン1,200円、黒ごまラーメン、味玉つけ麺、とんこつラーメン、券売機、海外からの客が多い、トロント店がミシュランガイド掲載、亀岡店。',
      confidence: 'low', sources: [TB, R + 'B491826533/', R + 'B494929443/', R + 'B502844886/', R + 'B504464704/', R + 'B505937230/', R + 'B511409766/', R + 'B526042891/', R + 'B535132394/', R + 'B535134871/', R + 'B536784841/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路四条下ル小松町558-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001617, 135.773135); cross-checked: GSI 京都府京都市東山区小松町558番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535132394/'],
    price_note: 'No menu read; the only price is from a September 2026 review.', last_checked: TODAY, items: [
      it('無双心ラーメン', '', 'Musou Shin ramen (veggie-potage chicken tonkotsu)', '¥1,200', 'Ramen', 'no', 'no', 'September 2026.', 'musoshin_ramen'),
      it('', '', 'Black sesame ramen', '', 'Ramen', 'no', 'no', '', 'black_sesame_ramen'),
      it('', '', 'Ajitama tsukemen', '', 'Tsukemen', 'no', 'no', '', 'ajitama_tsukemen'),
    ] }, {
    cuisine: '亀岡の veggie pota ラーメン: 香味野菜8種の濃厚な鶏豚骨スープに自家製平打ち麺、やわらかいチャーシュー (食べログ)・無双心ラーメン1,200円 (2026年9月)、とんこつラーメン、黒酢と海藻の黒ごまラーメン、味玉つけ麺・Maeda Kaisen の明太子のまぜそば、辛いタイ風の一杯・チャーシューご飯、唐揚げ丼 (食べログ、2024〜26年の口コミ)',
    neighborhood: '四条の南の大和大路、建仁寺の近く。祇園四条駅から238m',
    gf_detail: 'グルテンフリーではない。自家製の小麦の麺を鶏豚骨スープで。つけ麺とまぜそばも小麦 (食べログ、2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。スープは鶏と豚骨と野菜で、チャーシューがのる (食べログ、2026年の口コミ)。',
    notes: '[ラーメン・祇園、建仁寺の近く] 亀岡のラーメン店の祇園店で、遅くまで営業。野菜8種でとろみをつけた鶏豚骨のスープに自家製平打ち麺とやわらかいチャーシュー (無双心ラーメン1,200円)。黒ごまラーメン、つけ麺、明太子のまぜそばも。海外からの客が多く、京都生まれの口コミの評価は分かれる。券売機、毎日11時半〜0時。',
  });
}

// ================================================================ あらた
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26001641/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:45']);
  put({
    id: 'kyoto_arata_okonomiyaki', name: 'あらた (Arata)', category: 'OMNI',
    lat: 34.982061, lng: 135.75618, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter, yakisoba and udon, with sweet-spicy sauces (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is beef tendon, offal, pork and egg on the teppan (Tabelog; 2026 reviews).',
    hours_raw: '17:00–21:45, Monday to Saturday; closed Sunday (Tabelog). Bookings advised — full from opening even on weekdays; 90-minute seating (Tabelog; October 2026). Cash only (Tabelog; 2026 reviews). 50 seats incl. counter and tatami, with a busy second floor up the stairs; non-smoking (Tabelog; October 2026). 6 min from the Hachijo exit of JR Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishikujo, south of Kyoto Station Hachijo exit — 6 min walk',
    cuisine: 'Kyoto-style okonomiyaki and horumon teppanyaki (Tabelog) · Arata-yaki, the namesake: thin batter layered with soba, cabbage and bean sprouts, topped with agi (beef-jaw tendon) and Kujo green onion; agi-filled Arata okonomiyaki ¥900 (operator text, undated) · yakisoba with agi ¥1,510 and a homemade spicy sauce · horumon mix, gizzard, chicken neck, salt-grilled hoso and mino, "mambo-yaki", "danjiri-yaki" udon, garlic rice · "Bakudan" (Akadama port wine and soda) ¥420 (operator text; 2026 reviews)',
    website: 'http://aquadina.com/kyoto/spot/2529/', gmaps: gm('あらた お好み焼き 京都 西九条'), menu_url: null,
    notes: "[Okonomiyaki & horumon · south of Kyoto Station] A lively, Showa-feeling okonomiyaki house near the Hachijo exit, packed from its 17:00 opening: the famous Arata-yaki loaded with agi beef tendon and Kujo onion, salt-grilled offal, yakisoba with a fiery house sauce, and the sweet 'Bakudan' (port wine and soda) to drink. Book ahead; 90-minute tables; cash only. Okonomiyaki Tabelog 100 2018–2025. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; quoted in the operator’s Tabelog text)'], origin: null,
      background: 'Per the operator’s Tabelog text: a charming okonomiyaki shop with a wide range of horumon dishes; "agi" is the sinewy meat from the jaw, a different cut from the one in the yakisoba, per the owner. Tabelog Okonomiyaki "Tabelog 100" 2018, 2019, 2022–2025.',
      philosophy: null, specialty: 'Arata-yaki; agi yakisoba.',
      anecdotes: [
        { text: 'With a 17:00 booking, a party of five found the place already full at opening — October 2026.', source: R + 'B203861598/' },
        { text: 'Three adults without alcohol paid ¥17,100; the gizzard and chicken neck were over-peppered and the seats tight — September 2026.', source: R + 'B536428874/' },
        { text: 'An October 2026 reviewer counted American families among the guests.', source: R + 'B536214751/' },
      ],
      japanese_sources_summary: '食べログ: あらた、お好み焼き・鉄板焼き、南区西九条院町24-4、JR京都駅八条口から徒歩6分、月〜土 17:00〜21:45、日曜休み、予約可、50席、座敷、禁煙、カード・電子マネー・QR 不可、お好み焼き百名店 2018・2019・2022〜2025、ホルモン料理が豊富、agi 入りのあらたお好み焼き900円、agi 入り焼きそば1,510円、自家製の辛いソース、"Aka" の焼酎割り420円 (店舗紹介文)。口コミ (2026年9〜10月、英語): あらた焼き、ホルモンミックス、hoso の塩焼き、ミノ、Mambo-yaki、Danjiri-yaki、ガーリックライス、Bakudan、90分制、現金のみ、満席。',
      confidence: 'medium', sources: [TB, R + 'B203861598/', R + 'B509219424/', R + 'B536214751/', R + 'B536215656/', R + 'B536428874/', R + 'B536470203/', R + 'B536968905/', R + 'B536996257/', R + 'B537448020/', R + 'B537640295/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; 90-minute tables; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区西九条院町24-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Okonomiyaki Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (34.982061, 135.756180); cross-checked: GSI 京都府京都市南区西九条院町24番地 (lot) 129m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Prices from the operator’s Tabelog text (undated); reviewers paid about ¥4,000–8,000 a head in 2026.', last_checked: TODAY, items: [
      it('', '', 'Agi-filled Arata okonomiyaki', '¥900', 'Okonomiyaki', 'no', 'no', 'Operator text, undated.', 'arata_okonomiyaki'),
      it('', '', 'Yakisoba with agi', '¥1,510', 'Yakisoba', 'no', 'no', 'Operator text, undated.', 'agi_yakisoba'),
      it('', '', '"Aka" (red) port wine with shochu', '¥420', 'Drinks', '', '', 'Operator text, undated.', 'aka_shochu'),
    ] }, {
    cuisine: '京都風のお好み焼きとホルモンの鉄板焼き (食べログ)・店名のあらた焼き: 薄い生地にそば、キャベツ、もやしを重ね、agi (牛の顎のすじ肉) と九条ねぎ。agi 入りのあらたお好み焼き900円 (店舗紹介文、日付なし)・agi 入り焼きそば1,510円、自家製の辛いソース・ホルモンミックス、砂ずり、せせり、hoso とミノの塩焼き、Mambo-yaki、Danjiri-yaki (うどん)、ガーリックライス・Akadama ポートワインのソーダ割り Bakudan、"Aka" の焼酎割り420円 (店舗紹介文、2026年の口コミ)',
    neighborhood: '西九条、京都駅八条口の南。徒歩6分',
    gf_detail: 'グルテンフリーではない。お好み焼きの生地、焼きそば、うどんに甘辛いソース (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛すじ、ホルモン、豚肉、卵の鉄板料理 (食べログ、2026年の口コミ)。',
    notes: '[お好み焼きとホルモン・京都駅の南] 八条口近くのにぎやかで昭和の雰囲気のお好み焼き屋で、17時の開店から満席。agi (牛の顎のすじ肉) と九条ねぎたっぷりの名物あらた焼き、ホルモンの塩焼き、辛い自家製ソースの焼きそば、飲み物は甘い Bakudan (ポートワインのソーダ割り)。予約がおすすめ、90分制、現金のみ。お好み焼き百名店 2018〜2025。日曜休み。',
  });
}

save();
