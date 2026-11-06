// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 32.
//   + ビア小町 BEER Komachi (craft beer bar with Japanese-style dishes, Furukawa-cho shopping street, Higashiyama)
//   + ザ ハウス オブ キ ノ ビ The House of KI NO BI (the Kyoto Distillery's gin bar in a machiya, Kawaramachi Nijo)
//   + 麓寿庵 Rokujuan (café in a registered cultural-property residence, flower warabi mochi; dinner omakase, Rokkaku Shinmachi)
//   + 酒肴屋 じじばば Sakenoateya Jijibaba (one-person counter izakaya in the Rido alley, Karasuma Shichijo)
//   - skip 26027566 炭火ステーキ坂井 京都三条 (sub-brand of the 焼肉屋さかい chain)
//   Same-name counts first, per brand or operator (2026-11-06): ビア小町 — one. The House of KI NO BI — one; a bar run by
//   the Kyoto Distillery (reviews July 2026, April 2026), not a restaurant brand. 麓寿庵 — one. じじばば — one.
//   炭火ステーキ坂井 — its official site sits under yakiniku.jp, the site of 焼肉屋さかい, whose shop list shows about 50
//   shops nationwide: a sub-brand of a large parent, skipped.
//   Taken on 2026-11-06: `next core 200` (lane) gave ビア小町 26024620, 炭火ステーキ坂井 26027566 (skip) and The House of
//   KI NO BI 26033938; `next notable 200` (lane) gave 麓寿庵 26038624 and じじばば 26004778. None is in data/kyoto.json:
//   grep by name and address (八軒町444, 清水町358 — shared with kyoto_bistro_yanagihara, a different shop — 西六角町101,
//   東境町180 リド飲食街) found none.
//   Service charges per Tabelog's Japanese original: ビア小町 「サービス・チャージ料なし」; The House of KI NO BI
//   「チャージ料無し」; 麓寿庵 and じじばば none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-32');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027566', 'sub-brand of a large parent: 炭火ステーキ坂井 京都三条’s official site (http://www.yakiniku.jp/steak_sakai/) sits on yakiniku.jp, the site of the yakiniku chain 焼肉屋さかい, whose shop list (https://www.yakiniku.jp/sakai/shop/) shows about 50 shops.');

// ================================================================ ビア小町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024620/'; const R = TB + 'dtlrvwlst/';
  const JW = 'https://jw-webmagazine.com/tips/beer-komachi-kyoto/';
  put({
    id: 'kyoto_beer_komachi', name: 'ビア小町 (BEER Komachi)', category: 'OMNI',
    lat: 35.009019, lng: 135.778996, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a craft beer bar whose food includes gyoza, karaage, chicken tempura, spring rolls and pizza (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi, sausages, lamb spring rolls, sashimi (2024–26 reviews). No vegan information.',
    hours_raw: 'Mon, Wed–Fri 17:00–23:00, Sat–Sun 15:00–23:00, closed Tuesday, per a JW Web Magazine guide (published February 2017, updated August 2025); Tabelog lists no hours and the shop has changed hands (April 2025 and January 2026 reviews), so check before going. Reservations accepted, and advised for groups and for low-table seats (Tabelog; July 2024). No service charge (Tabelog, Japanese text: 「サービス・チャージ料なし」). Cards (VISA, Master, AMEX) and QR, no e-money (Tabelog). 20 seats: about 4 at the counter, the rest at tables (Tabelog; February 2026). Non-smoking (Tabelog). In the Furukawa-cho shopping street, 1 min from Higashiyama Stn exit 2 (Tabelog).',
    hours: { 0: day(['17:00', '23:00']), 2: day(['17:00', '23:00']), 3: day(['17:00', '23:00']), 4: day(['17:00', '23:00']), 5: day(['15:00', '23:00']), 6: day(['15:00', '23:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Furukawa-cho shopping street — 1 min from Higashiyama Stn',
    cuisine: 'About 8 taps of Japanese craft beer — Kyoto Brewing and others, half pints ¥890, a tasting set of several beers (April 2025; February 2026) · Japanese-style food to match: gyoza, karaage (July 2024), chicken tempura with dashi and matcha salt (March 2025), oden with red konnyaku (April 2025), lamb and cheddar spring rolls ¥780 (April 2025), a pizza on fried tofu, assorted sausages (June 2025), sashimi and cream cheese (April 2026) · soft drinks for non-drinkers (April 2026)',
    website: null, gmaps: gm('BEER Komachi 古川町'), menu_url: TB + 'dtlmenu/',
    notes: '[Craft beer · Furukawa-cho arcade by Higashiyama Stn, beer with Japanese plates] A lantern-lit bar in the old Furukawa-cho arcade with about eight taps of Japanese craft beer and food reviewers rate as highly as the beer — gyoza, chicken tempura with matcha salt, a fried-tofu pizza, oden. Now run by the former cook, often alone. Plenty of overseas visitors and regulars. Hours come from a 2025 guide, not the shop; check before going.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who took over when the previous owner retired (January 2026)'], origin: null,
      background: 'A January 2026 regular of more than ten years says the previous owner retired and the long-time cook took over; an April 2025 review heard that the owner of the former Shokudo Yasukichi in Kitakujo had taken over. A February 2026 group found the owner running the place alone.',
      philosophy: null, specialty: 'Japanese craft beer on tap; dishes that pair with it.',
      anecdotes: [
        { text: 'A January 2026 regular of over ten years credits the cook with dishes that taste magical using only ordinary supermarket seasonings.', source: R + 'B521453352/' },
        { text: 'An April 2026 first-timer, in town for a concert, was lent a plastic umbrella by the owner when it rained.', source: R + 'B532307714/' },
        { text: 'A May 2025 regular noted beer prices up by about a quarter since the last visit.', source: R + 'B204239075/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・ビアバー、東山区八軒町444 古川町商店街、東山駅2番出口から徒歩1分、営業時間の記載なし、予約可、サービス・チャージ料なし、カード (VISA・Master・AMEX)・QR 可、20席、禁煙。JW Web Magazine (2017年2月掲載、2025年8月更新): 平日17:00〜23:00、土日15:00〜23:00、火曜休み。口コミ (2024年7月〜2026年4月、英語): 国産クラフトビール約8タップ、ハーフパイント890円、飲み比べ、餃子、唐揚げ、鶏の天ぷらと抹茶塩、赤こんにゃくのおでん、ラムとチェダーの春巻き780円、油揚げのピザ、ソーセージ、前の店主が引退し料理人が後を継いだ (2026年1月)、店主が一人で営む (2026年2月)、外国人の客が多い。',
      confidence: 'medium', sources: [TB, JW, R + 'B204239075/', R + 'B489041951/', R + 'B503087848/', R + 'B504696544/', R + 'B505824562/', R + 'B506216769/', R + 'B508995765/', R + 'B521021166/', R + 'B521453352/', R + 'B526084909/', R + 'B532307714/', R + 'B534236388/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the day’s taps at the counter; many overseas visitors and regulars (2025–26 reviews). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区八軒町444 古川町商店街',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.009019, 135.778996); cross-checked: GSI 京都府京都市東山区八軒町444番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505824562/'],
    price_note: 'Prices from an April 2025 review; beer prices rose later (May 2025).', last_checked: TODAY, items: [
      it('', '', 'Craft beer, half pint', '¥890', 'Beer', 'no', 'ask', 'About 8 taps (April 2025).', 'half_pint'),
      it('', '', 'Lamb and cheddar spring rolls', '¥780', 'Food', 'no', 'no', 'April 2025.', 'lamb_spring_rolls'),
      it('', '', 'Gyoza', '', 'Food', 'no', 'no', '2024–26 reviews.', 'gyoza'),
      it('', '', 'Oden', '', 'Food', 'ask', 'no', 'April 2025; January 2026.', 'oden'),
    ] }, {
    cuisine: '国産クラフトビール約8タップ (Kyoto Brewing ほか、ハーフパイント890円、数種の飲み比べ) (2025年4月、2026年2月)・ビールに合う和の料理: 餃子、唐揚げ (2024年7月)、出汁と抹茶塩の鶏の天ぷら (2025年3月)、赤こんにゃく入りのおでん (2025年4月)、ラムとチェダーチーズの春巻き780円 (2025年4月)、油揚げのピザ、ソーセージの盛り合わせ (2025年6月)、刺身とクリームチーズ (2026年4月)・飲まない人にはソフトドリンクも (2026年4月)',
    neighborhood: '古川町商店街。東山駅から徒歩1分',
    gf_detail: 'グルテンフリーではない。クラフトビールのバーで、料理も餃子、唐揚げ、鶏の天ぷら、春巻き、ピザ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のおでん、ソーセージ、ラムの春巻き、刺身 (2024〜2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[クラフトビール・東山駅の古川町商店街、ビールに和の料理] 古川町商店街の提灯の灯るバー。国産クラフトビールが約8タップ、料理はビールバー以上 (餃子、抹茶塩の鶏の天ぷら、油揚げのピザ、おでん)。今は以前からの料理人が継ぎ、一人で営むことも。外国人の客も常連も多い。営業時間は店の公表ではなく2025年のガイドによるので、行く前に確認を。',
  });
}

// ================================================================ The House of KI NO BI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033938/'; const R = TB + 'dtlrvwlst/';
  const A = day(['15:00', '21:00']); const B = day(['15:00', '22:00']);
  put({
    id: 'kyoto_house_of_kinobi', name: 'ザ ハウス オブ キ ノ ビ (The House of KI NO BI)', category: 'OMNI',
    lat: 35.01371, lng: 135.768806, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A gin bar with light snacks — smoked nuts, black soybean sweets, saba sushi (2026 reviews); Tabelog says allergy information is available.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; one cocktail uses gin infused with duck fat (January 2026).',
    hours_raw: 'Wed, Thu, Sun 15:00–21:00 (last order 20:30); Fri, Sat 15:00–22:00 (last order 21:30); closed Monday and Tuesday (Tabelog). A January 2026 reviewer noted opening from 14:00. Reservations accepted (Tabelog). No cover charge (Tabelog, Japanese text: 「チャージ料無し」). Cards and e-money, no QR (Tabelog). Counter, sofa seats and a standing area in a renovated machiya; private hire up to 50 (Tabelog; October 2025). Non-smoking; English menu (Tabelog). On Kawaramachi north of Nijo; 5 min from Kyoto Shiyakusho-mae Stn exit 16 (Tabelog). Opened 1 June 2020 (Tabelog).',
    hours: { 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi north of Nijo — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'The Kyoto Distillery’s own bar for its KI NO BI craft gin (July 2026) · tasting set of three 15 ml pours ¥1,800 (April 2026), six-gin flights (October 2025, September 2026), a special set of Edition G, Edition K and Ki no Tama (November 2026) · KI NO BI matcha tonic ¥1,800, Edition K ¥1,000, Distiller’s Dream Vol.5 ¥700 (August 2026); gin and tonic, gin soda, martini (July 2026); a seasonal cocktail with plum notes (May 2026); a cocktail with duck-fat-washed gin, nutmeg and saffron (January 2026) · smoked nuts ¥700 (August 2026), black soybean sweets (April 2026), saba sushi (September 2026) · bottles and tasting glasses for sale (2025–26 reviews)',
    website: 'https://kyotodistillery.jp/hoknb/', gmaps: gm('The House of KI NO BI 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Gin bar · Kawaramachi Nijo, the KI NO BI distillery’s machiya] The Kyoto Distillery’s own bar in a renovated townhouse, with stills on display: taste three KI NO BI gins for ¥1,800, or try a matcha tonic, the bourbon-scented Edition K or a martini that brings out the yuzu and sansho. Bartenders explain each gin and will suggest drinks. No cover charge; bottles to take home. Many overseas guests. 15:00 until 21:00 or 22:00; closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: the bar run directly by the Kyoto Distillery, maker of KI NO BI gin, opened 1 June 2020 in a renovated machiya, with distilling equipment on display (July 2026), a tasting counter, sofas and a standing area.',
      philosophy: null, specialty: 'KI NO BI gin tastings; matcha tonic.',
      anecdotes: [
        { text: 'An April 2026 visitor with almost no gin knowledge got thorough explanations and a three-gin tasting at ¥1,800.', source: R + 'B527065849/' },
        { text: 'An August 2026 visitor wanted mixed drinks rather than the straight tasting pours, and had the champagne-cask Edition G with soda instead.', source: R + 'B534653350/' },
        { text: 'An August 2026 visitor was surprised there was no cover charge, and stayed for three drinks.', source: R + 'B534672117/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区河原町通二条上ル清水町358、京都市役所前駅16番出口から徒歩5分、水木日15:00〜21:00 (L.O. 20:30)、金土15:00〜22:00 (L.O. 21:30)、月火休み、予約可、チャージ料無し、カード・電子マネー可、貸切50名まで、禁煙、英語メニュー、ベジタリアンメニューあり、アレルギー表示あり、2020年6月1日オープン。口コミ (2025年10月〜2026年11月、英語): Kyoto Distillery の直営、町家の改装、KI NO BI の3種飲み比べ1,800円、抹茶トニック1,800円、Edition K 1,000円、鴨の脂を移したジンのカクテル、燻製ナッツ、黒豆の菓子、鯖寿司、外国人の客が多い、丁寧な説明。',
      confidence: 'medium', sources: [TB, R + 'B515015671/', R + 'B519381118/', R + 'B522625820/', R + 'B526930561/', R + 'B527065849/', R + 'B527652593/', R + 'B528519223/', R + 'B531463997/', R + 'B534653350/', R + 'B534672117/', R + 'B536596719/', R + 'B538464610/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); many overseas guests and bartenders who explain each gin (2026 reviews). No cover charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通二条上ル清水町358',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026. The official page blocked the fetch (Cloudflare) on 2026-11-06.' },
    pin_source: `Tabelog ${TB} (35.013710, 135.768806); cross-checked: GSI 京都府京都市中京区清水町358番地 (lot) 5m; kyoto_bistro_yanagihara shares the lot, 7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527065849/', R + 'B534672117/'],
    price_note: 'Prices from April and August 2026 reviews; no cover charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'KI NO BI tasting set (3 × 15 ml)', '¥1,800', 'Gin', 'ask', 'ask', 'April 2026.', 'tasting_set'),
      it('', '', 'KI NO BI matcha tonic', '¥1,800', 'Cocktails', 'ask', 'ask', 'August 2026.', 'matcha_tonic'),
      it('', '', 'Edition K', '¥1,000', 'Gin', 'ask', 'ask', 'August 2026.', 'edition_k'),
      it('', '', 'Smoked mixed nuts', '¥700', 'Snacks', 'ask', 'ask', 'August 2026.', 'smoked_nuts'),
    ] }, {
    cuisine: 'クラフトジン KI NO BI の蒸溜所 (Kyoto Distillery) 直営のバー (2026年7月)・15mlの3種飲み比べ1,800円 (2026年4月)、6種の飲み比べ (2025年10月、2026年9月)、Edition G・Edition K・Ki no Tama の特別セット (2026年11月)・KI NO BI の抹茶トニック1,800円、Edition K 1,000円、Distiller’s Dream Vol.5 700円 (2026年8月)、ジントニック、ジンソーダ、マティーニ (2026年7月)、梅の香りの季節のカクテル (2026年5月)、鴨の脂を移したジンにナツメグとサフランのカクテル (2026年1月)・燻製ナッツ700円 (2026年8月)、黒豆の菓子 (2026年4月)、鯖寿司 (2026年9月)・ボトルやテイスティンググラスも買える (2025〜2026年の口コミ)',
    neighborhood: '二条の北の河原町通。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。ジンのバーで、つまみは燻製ナッツ、黒豆の菓子、鯖寿司など (2026年の口コミ)。食べログではアレルギー表示あり。',
    vegan_detail: '要確認。食べログではベジタリアンメニューあり。鴨の脂を移したジンのカクテルもある (2026年1月)。',
    notes: '[ジンのバー・河原町二条、KI NO BI の町家] Kyoto Distillery が営む、町家を改装したバー。蒸溜器も飾られ、KI NO BI の3種飲み比べ (1,800円)、抹茶トニック、バーボンの香りの Edition K、柚子や山椒が香るマティーニを。バーテンダーがジンを説明し、好みに合わせて薦めてくれる。チャージなし、ボトルも買える。外国人の客が多い。15時から21時か22時まで、月火休み。',
  });
}

// ================================================================ 麓寿庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038624/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://rokujuan.com';
  const L = day(['08:00', '21:30']); const S = day(['08:00', '20:00']);
  put({
    id: 'kyoto_rokujuan', name: '麓寿庵 (Rokujuan)', category: 'OMNI',
    lat: 35.007395, lng: 135.755794, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The hanawarabi is the shop’s own blend (official site), served with kinako and black syrup; duck rice porridge and a dinner course with sukiyaki and nigiri (official site). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The warabi mochi, kakigori and tea look plant-based, but no ingredient information; the porridge is cooked in duck broth (official site).',
    hours_raw: 'Café Mon, Thu–Sun and holidays 8:00–21:30, Tue–Wed 8:00–20:00, last order 19:00 (official site; Tabelog). Dinner omakase in two sittings, 17:00–19:00 and 19:30–21:30, not on Tuesday or Wednesday; reservation and advance payment required (official site; Tabelog). Café bookings via TableCheck, with an optional short tour of the house (September and October 2026). Cards (VISA, Master, AMEX), no e-money or QR (Tabelog). 30 seats, tatami; non-smoking; children and strollers welcome (Tabelog). Photos allowed, no flash (October 2026). On Rokkaku west of Shinmachi; 4 min from Shijo and Karasuma Stns (Tabelog). Opened 1 March 2023 (Tabelog).',
    hours: { 0: L, 1: S, 2: S, 3: L, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku west of Shinmachi — 4 min from Shijo Stn',
    cuisine: 'Café in the Kubo family residence, the former home of the painter 今尾景年, built 1914 and a registered tangible cultural property (official site) · hanawarabi, clear warabi mochi set with edible flowers, with house black syrup and domestic kinako (official site); with matcha ¥2,000 (October 2026) · seasonal kinmokusei warabi, late September to late November; sakura warabi in spring (official site) · matcha and hojicha kakigori with azuki, shiratama and black beans (official site) · duck rice porridge of Kishu duck cooked in its own broth (official site) · dinner: a seven-dish chef’s omakase of Kyoto vegetables and seasonal produce, with an original sukiyaki and nigiri finished in front of guests (official site, from March 2025)',
    website: OF, gmaps: gm('麓寿庵 京都 六角'), menu_url: OF,
    notes: '[Café and dinner omakase · Rokkaku Shinmachi, a painter’s Taisho house] A 1914 residence, home of the painter 今尾景年 and now a registered cultural property, turned café: clear "hanawarabi" studded with edible flowers (¥2,000 with matcha), kakigori and duck porridge, with garden views and a short tour of the house if you book. A seven-dish omakase with sukiyaki and nigiri runs at dinner, prepaid. From 8:00 daily.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), who finishes the dinner sukiyaki and nigiri in front of guests (official site)'], origin: null,
      background: 'Per the official site: the house is the Kubo family residence (旧今尾景年宅), a registered tangible cultural property built in 1914 (大正3年) by 今尾景年, a Shijo-school painter of the Meiji and Taisho eras, who spent the later years of life there. The dinner omakase began on 10 March 2025. Opened 1 March 2023 (Tabelog).',
      philosophy: null, specialty: 'Hanawarabi (flower warabi mochi).',
      anecdotes: [
        { text: 'An October 2026 visitor booked a day ahead, joined the optional mini tour of the house and found it the unexpected highlight.', source: R + 'B537017229/' },
        { text: 'An October 2026 visitor at 9:00 on a weekday noted that earlier bookings get the window seats over the garden.', source: R + 'B537348669/' },
        { text: 'An October 2026 visitor admired the Taisho-era glass and old garden stones on the tour while waiting for a seat.', source: R + 'B537747989/' },
      ],
      japanese_sources_summary: '公式サイト: 有形文化財 久保家住宅 (旧今尾景年宅)、大正3年築、四条派の日本画家 今尾景年が晩年を過ごした家、華わらび (エディブルフラワー、自家製黒蜜と国産きな粉)、金木犀の華わらび (9月末〜11月末)、桜わらび、抹茶とほうじ茶のかき氷、紀州鴨の鴨茶粥、夜は京野菜と季節の食材の全7品のおまかせ (すき焼きと握り寿司を料理長が目の前で、2025年3月から、予約制・先払い)、カフェ 月木金土日 8:00〜21:30・火水 8:00〜20:00 (L.O. 19:00)、ディナー17:00〜19:00・19:30〜21:30 (火水なし)。食べログ: 甘味処、中京区六角通新町西入西六角町101、30席、座敷、カード可、2023年3月1日オープン。口コミ (2026年9月〜11月、英語): TableCheck で予約、建物の案内、華わらびと抹茶2,000円、フラッシュ禁止。',
      confidence: 'medium', sources: [TB, OF, R + 'B536296035/', R + 'B536793813/', R + 'B536846517/', R + 'B536968143/', R + 'B537017229/', R + 'B537348669/', R + 'B537407331/', R + 'B537408779/', R + 'B537447198/', R + 'B537747989/', R + 'B537888085/', R + 'B538635276/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online through TableCheck; staff guide you round the house before seating (2026 reviews). Dinner is prepaid. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区六角通新町西入西六角町101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007395, 135.755794); cross-checked: GSI 京都府京都市中京区西六角町101番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OF, R + 'B537447198/'],
    price_note: 'One set price from an October 2026 review; menu items from the official site.', last_checked: TODAY, items: [
      it('', '', 'Hanawarabi with matcha', '¥2,000', 'Sweets', 'ask', 'ask', 'October 2026.', 'hanawarabi_matcha'),
      it('', '', 'Kinmokusei hanawarabi', '', 'Seasonal', 'ask', 'ask', 'Late September to late November (official site).', 'kinmokusei_warabi'),
      it('', '', 'Matcha kakigori', '', 'Seasonal', 'ask', 'ask', 'Official site.', 'matcha_kakigori'),
      it('', '', 'Duck rice porridge', '', 'Meals', 'ask', 'no', 'Cooked in duck broth (official site).', 'kamo_chagayu'),
      it('', '', 'Chef’s omakase (7 dishes)', '', 'Dinner', 'ask', 'no', 'Reservation and prepayment (official site).', 'omakase'),
    ] }, {
    cuisine: '有形文化財 久保家住宅 (旧今尾景年宅、大正3年築) のカフェ (公式サイト)・透明なわらび餅にエディブルフラワーを閉じ込めた華わらび、自家製の黒蜜と国産きな粉で (公式サイト)、抹茶付きで2,000円 (2026年10月)・季節の金木犀の華わらび (9月末〜11月末)、春は桜わらび (公式サイト)・抹茶とほうじ茶のかき氷、大納言小豆、白玉、黒豆 (公式サイト)・紀州鴨を鴨の出汁で炊いた鴨茶粥 (公式サイト)・夜は京野菜と季節の食材の全7品のおまかせ。オリジナルのすき焼きと握り寿司を料理長が目の前で仕上げる (公式サイト、2025年3月から)',
    neighborhood: '六角通、新町の西。四条駅から徒歩4分',
    gf_detail: '要確認。華わらびは独自の配合 (公式サイト) で、きな粉と黒蜜を添える。鴨茶粥や、すき焼きと握り寿司の入る夜のコースも (公式サイト)。グルテンの情報はない。',
    vegan_detail: '要確認。わらび餅、かき氷、お茶は植物性に見えるが原材料の情報はない。鴨茶粥は鴨の出汁で炊く (公式サイト)。',
    notes: '[カフェと夜のおまかせ・六角新町、画家の大正の家] 画家 今尾景年の住まいだった大正3年の家 (有形文化財) のカフェ。エディブルフラワーを閉じ込めた透明な華わらび (抹茶付き2,000円)、かき氷、鴨茶粥を庭を眺めながら。予約すると建物の案内も。夜は先払いで、すき焼きと握り寿司の入る7品のおまかせ。毎日8時から。',
  });
}

// ================================================================ 酒肴屋 じじばば
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26004778/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_sakenoateya_jijibaba', name: '酒肴屋 じじばば (Sakenoateya Jijibaba)', category: 'OMNI',
    lat: 34.989079, lng: 135.75873, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative small plates including mapo tofu with baguette, shrimp toast and tacos (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, sausages, offal, lamb and fish dishes; the set appetizer includes cheese tofu (2026 reviews).',
    hours_raw: '18:00–2:00; closed Sunday and holidays (Tabelog). No reservations (Tabelog). No cards or e-money; QR accepted (Tabelog). 11 counter seats, tight enough that passing behind is hard (Tabelog; May 2026). Smoking allowed (Tabelog). Run by one person, so service can be slow (November 2025; May 2026). An appetizer is served (May and October 2026). In the Rido dining alley, 100 m west of Karasuma Shichijo on the south side; 6 min from Kyoto Stn central exit (Tabelog). The restroom is old (November 2025, January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rido dining alley, Karasuma Shichijo — 6 min from Kyoto Stn',
    cuisine: 'Creative drinking food at an 11-seat counter (Tabelog) · prosciutto sliced from the block (January and May 2026) · kiwi caprese, kombu-cured sea bream, Jijibaba tacos (May 2026) · yam and cheese omelette, mapo tofu with baguette, homemade raisin butter (October 2026) · simmered offal, lamb tataki (January 2026), fried gizzards, avocado (April 2026), beef tendon horumon (July 2026), shrimp toast (May 2026) · lemon sour, wine, shochu such as Yasuda and Manzen (2026 reviews); Ebisu draft ¥550, Spanish sparkling ¥650 (January 2026)',
    website: null, gmaps: gm('酒肴屋 じじばば'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Rido alley by Kyoto Stn, one cook’s creative counter] A tiny counter in the Showa-era Rido dining alley where the owner, alone, slices prosciutto off the block and turns out kiwi caprese, mapo tofu with baguette, lamb tataki and homemade raisin butter, with good shochu and wine. Cramped, smoking allowed, and slow when full; one May 2026 diner found portions small for the price. Cash or QR. 18:00–2:00; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who runs the counter alone (2025–26 reviews)'], origin: null,
      background: 'Per Tabelog: an 11-seat counter izakaya in the Rido dining alley off Shichijo. Reviews from November 2025, February 2026 and May 2026 say the owner runs it alone.',
      philosophy: null, specialty: 'Prosciutto; creative small plates.',
      anecdotes: [
        { text: 'A January 2026 diner enjoyed watching the owner slice the block of prosciutto, which had a nutty, woody aroma.', source: R + 'B523352271/' },
        { text: 'A February 2026 diner, the only man among mostly women guests, never felt the one-person service was a drawback.', source: R + 'B523433780/' },
        { text: 'A May 2026 diner paid just under ¥8,000 for four dishes and drinks and thought the portions small and the menu short.', source: R + 'B529216581/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・創作料理・居酒屋、下京区七条通烏丸西入ル東境町180 リド飲食街内、京都駅中央口から徒歩6分、18:00〜翌2:00、日祝休み、予約不可、カード・電子マネー不可・QR 可、カウンター11席、喫煙可。口コミ (2025年11月〜2026年10月、英語): 店主が一人で営む、生ハムの塊、キウイのカプレーゼ、鯛の昆布締め、じじばばタコス、山芋とチーズのオムレツ、バゲット付きの麻婆豆腐、自家製レーズンバター、ホルモンの煮込み、ラムのたたき、砂肝の唐揚げ、焼酎、レモンサワー、量が少なめとの声、トイレが古い。',
      confidence: 'medium', sources: [TB, R + 'B499139400/', R + 'B504838574/', R + 'B506531183/', R + 'B519061769/', R + 'B520300712/', R + 'B523352271/', R + 'B523433780/', R + 'B525714468/', R + 'B526031456/', R + 'B527083521/', R + 'B529216581/', R + 'B532673401/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in and take a counter seat; one person cooks and serves; smoking allowed; pay cash or QR, no cards. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入ル東境町180 リド飲食街内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989079, 135.758730); cross-checked: GSI 京都府京都市下京区東境町180番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523352271/'],
    price_note: 'Drink prices from a January 2026 review; food prices not found.', last_checked: TODAY, items: [
      it('', '', 'Ebisu draft beer', '¥550', 'Drinks', 'no', 'ask', 'January 2026.', 'ebisu'),
      it('', '', 'Spanish sparkling wine', '¥650', 'Drinks', '', 'ask', 'January 2026.', 'cava'),
      it('', '', 'Prosciutto', '', 'Food', 'ask', 'no', 'Sliced from the block (January 2026).', 'prosciutto'),
      it('', '', 'Mapo tofu with baguette', '', 'Food', 'no', 'no', 'October 2026.', 'mapo_baguette'),
    ] }, {
    cuisine: 'カウンター11席の創作の酒の肴 (食べログ)・塊から切る生ハム (2026年1月・5月)・キウイのカプレーゼ、鯛の昆布締め、じじばばタコス (2026年5月)・山芋とチーズのオムレツ、バゲット付きの麻婆豆腐、自家製レーズンバター (2026年10月)・ホルモンの煮込み、ラムのたたき (2026年1月)、砂肝の揚げ物、アボカド (2026年4月)、牛すじのホルモン (2026年7月)、海老トースト (2026年5月)・レモンサワー、ワイン、Yasuda や Manzen などの焼酎 (2026年の口コミ)、エビスの生ビール550円、スペインのスパークリング650円 (2026年1月)',
    neighborhood: '烏丸七条のリド飲食街。京都駅から徒歩6分',
    gf_detail: '要確認。バゲット付きの麻婆豆腐、海老トースト、タコスなどの創作の小皿 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。生ハム、ソーセージ、ホルモン、ラム、魚の料理。お通しにはチーズ豆腐も (2026年の口コミ)。',
    notes: '[居酒屋・京都駅近くのリド飲食街、一人で営む創作のカウンター] 昭和のリド飲食街の小さなカウンター。店主が一人で生ハムを塊から切り、キウイのカプレーゼ、バゲット付きの麻婆豆腐、ラムのたたき、自家製レーズンバターを出す。焼酎とワインも。狭く、喫煙可で、混むと遅い。2026年5月には値段の割に量が少ないとの声も。現金か QR。18時〜翌2時、日曜休み。',
  });
}

save();
