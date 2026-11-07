// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 53.
//   + 大詔閣 四条店 Daisho Kaku (long-running yakiniku with water-tray roasters, Nishi-Kiyamachi; rest)
//   + かしわ 木屋町店 Kashiwa (grill-it-yourself chicken and pork, Kiyamachi; rest)
//   + 鉄板居酒屋 高瀬川 鉄板道場 Teppan Dojo (all-night teppan izakaya on the Takase River; rest)
//   + お茶漬けバァー 英楽 Ochazuke Bar Eiraku (late-night ochazuke bar on the Takase River; rest)
//   Rest list (mod 6 = 1) after batch 52, nearest-first — skipped:
//   - 肉ト魚 大衆酒場 ひとめぼれ 京都店 26040061: chain — Hot Pepper lists nine in Aichi plus Umeda; four in our crawls.
//   - スーパーホテル 京都・四条河原町 26021029: a business-hotel chain listing, not a restaurant.
//   Same-name check for the picks, same brand or operator only: 大詔閣 — one in our crawls; a December 2025 reviewer
//   mentions the main shop at Senbon-Nakadachiuri and a closed Sanjo shop — small, drafted. かしわ — 木屋町店 and
//   とり焼き 鶏料理 かしわ 祇園豆六小路 in our crawls, plus a Saiin listing on Tabelog; no common operator found — drafted.
//   鉄板道場 — one. 英楽 — one in our crawls; a September 2024 reviewer says a Sendai Kokubuncho shop opened — two, drafted.
//   None of the four is in data/kyoto.json by name or address (紙屋町368-1 西木屋町ビル 1F — 馬野郎 in data is a different
//   shop in the SAKIZ building at the same lot; 鍋屋町220-1; 紙屋町674-4; 紙屋町674-22).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-53');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26040061/', 'chain: 肉ト魚 大衆酒場 ひとめぼれ, nine shops in Aichi plus Osaka and Kyoto (Hot Pepper)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26021029/', 'not a restaurant: スーパーホテル business-hotel chain listing');

// ================================================================ 大詔閣 四条店 Daisho Kaku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021359/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '25:00']);
  put({
    id: 'kyoto_daishokaku_shijo', name: '大詔閣 四条店 (Daisho Kaku Shijo)', category: 'OMNI',
    lat: 35.00478021787303, lng: 135.77036222035278, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: house yangnyeom and miso sauces, marinated meats, bean-sprout soup (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant with raw beef dishes (2025–2026 reviews).',
    hours_raw: 'Wednesday–Monday 17:00–1:00 (last order 0:40); closed Tuesday (Tabelog). Reservations accepted, online too, and usually needed — often full, nearly full at 19:00 on a Saturday (Tabelog; December 2025 and September 2026). Cards, e-money and QR (Tabelog). 40 seats: 10 at the counter, tables for 4 and 6; non-smoking (Tabelog). Grill-it-yourself roasters with water underneath and flames at the sides (August 2026). Off a narrow alley in Nishi-Kiyamachi north of Shijo, next to a horse-meat restaurant; 3 min walk from Hankyu Kawaramachi Stn (Tabelog; July and October 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi north of Shijo — 3 min walk from Kawaramachi Stn',
    cuisine: 'Long-established yakiniku, a branch of a shop at Senbon-Nakadachiuri that a reviewer has visited for 48 years (December 2025) · grill-it-yourself cuts: premium tongue, special premium loin, harami, kalbi, cheek, liver, with the house yangnyeom and a recommended miso sauce (2025–2026 reviews) · raw dishes: omasum sashimi, beef tongue sashimi ¥1,530, yukhoe ¥1,530, a sashimi platter (December 2025–September 2026) · a mountain of salad; bean-sprout soup to finish (December 2025) · about ¥3,000–8,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('大詔閣 四条店'), menu_url: null,
    notes: '[Yakiniku · Nishi-Kiyamachi, open till 1 a.m.] A lively, good-value yakiniku off a Kiyamachi alley, grilled yourself over water-tray roasters that keep flames low and grease down: tongue, harami and loin with the house yangnyeom, plus omasum and tongue sashimi and yukhoe. One 48-year regular follows it from the Senbon main shop. One Tokyo visitor found the taste average but the price very low. Book ahead; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Young kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per a December 2025 review: the reviewer first went to the main branch at Senbon-Nakadachiuri 48 years earlier and moved to the Shijo branch after the Sanjo branch closed; every branch is described as clean, with young, energetic staff. Tabelog lists the Shijo shop as a 40-seat yakiniku open late.',
      philosophy: null, specialty: 'Omasum sashimi; house yangnyeom.',
      anecdotes: [
        { text: 'A December 2025 reviewer has eaten at Daisho Kaku for 48 years, starting at the Senbon main shop, and finishes with bean-sprout soup spiked with yangnyeom.', source: R + 'B519820693/' },
        { text: 'A February 2026 Tokyo visitor found the taste average, but two large beers and four cuts for about ¥3,000 remarkably cheap.', source: R + 'B522111266/' },
        { text: 'An August 2026 group of six liked how the water-tray roaster keeps flames low and the meat from turning greasy.', source: R + 'B534609516/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉、中京区西木屋町通四条上る紙屋町368-1 西木屋町ビル 1F、阪急河原町駅から徒歩3分、水〜月 17:00〜翌1:00 (L.O.0:40)、火曜休み、予約可、カード・電子マネー・QR 可、40席 (カウンター10、テーブル30)、禁煙。口コミ (2025年9月〜2026年10月、英語): Senbon-Nakadachiuri の本店に48年通う客 (三条店は閉店)、若く元気な店員、水を張ったロースター、タン、特上ロース、ハラミ、カルビ、ほほ肉、レバー、自家製ヤンニョム、おすすめの味噌だれ、センマイ刺し、タン刺し1,530円、ユッケ1,530円、刺身の盛り合わせ、山盛りのサラダ、もやしのスープ、いつも満席で予約がおすすめ、味は普通だが安いとの声 (2026年2月)。',
      confidence: 'medium', sources: [TB, R + 'B519820693/', R + 'B522111266/', R + 'B526374608/', R + 'B530565728/', R + 'B532066584/', R + 'B532813483/', R + 'B533731178/', R + 'B534609516/', R + 'B536274736/', R + 'B538741468/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Grill yourself; book ahead; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西木屋町通四条上る紙屋町368-1 西木屋町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004780, 135.770362); cross-checked: GSI 京都府京都市中京区紙屋町368番地 (lot) 28 m; kyoto_baniku_umayaro (same lot, next door) is 4.4 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534609516/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Beef tongue sashimi', '¥1,530', 'Raw', 'ask', 'no', 'August 2026.', 'tan_sashi'),
      it('', '', 'Yukhoe', '¥1,530', 'Raw', 'no', 'no', 'August 2026.', 'yukhoe'),
    ] }, {
    cuisine: 'Senbon-Nakadachiuri の店に48年通う客もいる老舗の焼肉の支店 (2025年12月)・自分で焼く: 上タン、特上ロース、ハラミ、カルビ、ほほ肉、レバーを自家製ヤンニョムやおすすめの味噌だれで (2025〜2026年の口コミ)・生の料理: センマイ刺し、タン刺し1,530円、ユッケ1,530円、刺身の盛り合わせ (2025年12月〜2026年9月)・山盛りのサラダ、締めにもやしのスープ (2025年12月)・3,000〜8,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条の北の西木屋町。河原町駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。自家製ヤンニョムや味噌だれ、味付けの肉、もやしのスープ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生の牛肉料理もある焼肉の店 (2025〜2026年の口コミ)。',
    notes: '[焼肉・西木屋町、深夜1時まで] 木屋町の路地を入ったにぎやかでお得な焼肉の店。炎と脂を抑える水を張ったロースターで自分で焼く。タン、ハラミ、ロースに自家製ヤンニョム、センマイ刺しやタン刺し、ユッケも。千本の本店から48年通う常連も。東京からの客は味は普通だが値段がとても安いと書く。予約がおすすめ、火曜休み。',
  });
}

// ================================================================ かしわ 木屋町店 Kashiwa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019145/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kashiwa_kiyamachi', name: 'かしわ 木屋町店 (Kashiwa Kiyamachi)', category: 'OMNI',
    lat: 35.00446726787333, lng: 135.7706813203494, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: red marinade sauce, garlic yakiniku-style sauce, soy and ponzu; chicken-skin crackers (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and pork grill (2025–2026 reviews).',
    hours_raw: 'Daily 17:00–24:00 (last order 23:30); 17:30 start on the day before a holiday (Tabelog). Reservations accepted; courses must be ordered for the whole party; 2-hour limit at weekends and busy times; bookings released after 15 minutes without notice (Tabelog). Appetizer charge ¥200 per person (Tabelog original お通し代：お一人様200円(税込)). Cards; no e-money or QR (Tabelog). 24 seats; smoking allowed (Tabelog; 2025 reviews). Seating that one reviewer found hard on the legs and back (September 2025). 1 min walk from Hankyu Kawaramachi Stn exit 5 (Tabelog). Opened 23 November 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Shijo, by Pontocho — 1 min walk from Kawaramachi Stn',
    cuisine: 'Grill-it-yourself chicken and pork from named farms — the shop calls it Kyoto-style toriyaki (Gurunavi; 2025–2026 reviews) · chicken tataki of thigh and breast, e.g. Satsuma Chiran ¥1,980; chicken sashimi platters (2025–2026 reviews) · cuts to grill: neck, thigh of Daisen, Omi black, Amakusa Daisuke and Mukashi chicken, heart, gizzard, liver, sekin, harami ¥600, red-sauce meat and horumon platter ¥1,600, chicken sausage ¥400 (August 2025–May 2026) · kimchi salad ¥680, chicken-skin crackers, grilled vegetables, rice ¥300 (2025–2026 reviews) · Sapporo Akaboshi ¥680, Kaku highball ¥620 (August 2025) · about ¥3,000–5,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('かしわ 木屋町店'), menu_url: null,
    notes: '[Chicken grill · Kiyamachi by Pontocho] A small, smoky shop where you grill your own skewers of named-farm chicken and pork — neck, thigh, sekin, horumon in red sauce — after a plate of chicken tataki or sashimi. Garlic powder and house salt on the side. Some found the service slow or muddled, with a wrong order and a 15-minute wait despite empty tables. Smoking allowed; till midnight.',
    chef_bio: { chef_name: null, roles: ['Owner-chef and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yakitori and chicken shop opened 23 November 2011 at Kiyamachi; Gurunavi lists it as 鶏豚専門店 かしわ 木屋町店 offering Kyoto-original toriyaki. A November 2025 visitor arrived on its 15th-anniversary special. A May 2026 reviewer praised the owner\'s service and the many rare cuts, as if a whole bird were butchered in the shop.',
      philosophy: null, specialty: 'Chicken tataki; grill-it-yourself neck and sekin.',
      anecdotes: [
        { text: 'An October 2025 walk-in ordered heart and harami, received gizzard instead (given free for the mix-up), and the thigh never arrived.', source: R + 'B515532698/' },
        { text: 'A January 2026 party waited about 15 minutes to be seated though tables were empty, and a couple ahead gave up and left.', source: R + 'B520084537/' },
        { text: 'A November 2025 visitor happened in on the 15th-anniversary special prices.', source: R + 'B518025411/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥・鶏料理、中京区鍋屋町220-1 1F、阪急京都河原町駅5番出口から徒歩1分、毎日 17:00〜24:00 (L.O.23:30)、祝前日 17:30〜、予約可、コースは人数分、週末と混雑時は2時間制、無連絡で15分過ぎると予約取り消し、お通し代1人200円 (税込)、カード可、電子マネー・QR 不可、24席、喫煙可、2011年11月23日開店。ぐるなび: 鶏豚専門店 かしわ 木屋町店、京都元祖の「とりやき」。口コミ (2025年8月〜2026年5月、英語): 自分で焼く、鶏のたたき (Satsuma Chiran1,980円)、鶏刺し、せせり、Daisen・Omi black・Amakusa Daisuke・Mukashi の鶏のもも、ハツ、砂肝、レバー、せきん、ハラミ600円、赤たれの肉とホルモンの盛り合わせ1,600円、鶏のソーセージ400円、キムチサラダ680円、鶏皮せんべい、ご飯300円、Sapporo Lager Akaboshi 680円、Kaku のハイボール620円、ガーリックパウダー、15周年、注文違いや出てこない料理があったとの声 (2025年10月)、空席があるのに15分待ったとの声 (2026年1月)、席が足腰につらいとの声 (2025年9月)。',
      confidence: 'medium', sources: [TB, 'https://r.gnavi.co.jp/77w5v2pb0000/', R + 'B512122852/', R + 'B512179596/', R + 'B514129217/', R + 'B515532698/', R + 'B518025411/', R + 'B520084537/', R + 'B520162745/', R + 'B524393843/', R + 'B525331152/', R + 'B527884412/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Grill yourself; smoking allowed; ¥200 appetizer charge; cards only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町220-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004467, 135.770681); cross-checked: GSI 京都府京都市中京区鍋屋町220番地 (lot) 18 m; nearest Kyoto record 14 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512179596/'],
    price_note: 'Prices from an August 2025 review; plus a ¥200 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Satsuma Chiran chicken tataki (thigh and breast)', '¥1,980', 'Tataki', 'ask', 'no', 'August 2025.', 'tataki'),
      it('', '', 'Harami', '¥600', 'Grill', 'ask', 'no', 'August 2025.', 'harami'),
      it('', '', 'Red-sauce meat and horumon platter', '¥1,600', 'Grill', 'no', 'no', 'August 2025.', 'aka_mori'),
      it('', '', 'Kimchi salad', '¥680', 'Sides', 'no', 'no', 'August 2025.', 'kimchi_salad'),
    ] }, {
    cuisine: '産地の名のある鶏と豚を自分で焼く、店のいう京都元祖の「とりやき」 (ぐるなび、2025〜2026年の口コミ)・ももとむねの鶏のたたき、例: Satsuma Chiran1,980円、鶏刺しの盛り合わせ (2025〜2026年の口コミ)・焼く部位: せせり、Daisen・Omi black・Amakusa Daisuke・Mukashi の鶏のもも、ハツ、砂肝、レバー、せきん、ハラミ600円、赤たれの肉とホルモンの盛り合わせ1,600円、鶏のソーセージ400円 (2025年8月〜2026年5月)・キムチサラダ680円、鶏皮せんべい、焼き野菜、ご飯300円 (2025〜2026年の口コミ)・Sapporo Lager Akaboshi 680円、Kaku のハイボール620円 (2025年8月)・3,000〜5,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条の北の木屋町、先斗町の近く。河原町駅から徒歩1分',
    gf_detail: 'グルテンフリー不可。赤たれ、ガーリックの焼肉風のたれ、醤油、ポン酢、鶏皮せんべい (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏と豚の焼き物の店 (2025〜2026年の口コミ)。',
    notes: '[鶏の焼き物・先斗町近くの木屋町] 鶏のたたきや鶏刺しのあと、産地の名のある鶏と豚 (せせり、もも、せきん、赤たれのホルモン) を自分で焼く小さな煙たい店。ガーリックパウダーと自家製の塩も。注文違い、空席があるのに15分待ったなど、対応が遅い・まごつくと感じた客も。喫煙可、深夜0時まで。',
  });
}

// ================================================================ 鉄板居酒屋 高瀬川 鉄板道場 Teppan Dojo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013511/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_teppan_dojo_takasegawa', name: '鉄板居酒屋 高瀬川 鉄板道場 (Teppan Izakaya Takasegawa Teppan Dojo)', category: 'OMNI',
    lat: 35.00473486787308, lng: 135.77044395035225, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: okonomiyaki, tonpei-yaki and yakisoba with sweet sauce, fried chicken (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, seafood and egg teppan dishes; grilled shiitake and shishito are the vegetable plates seen (2025–2026 reviews).',
    hours_raw: 'Tabelog lists 18:00–11:00 — overnight into the next morning — on Monday–Wednesday and Friday–Sunday; closed Thursday and the third Wednesday; hours may change (Tabelog). Reviewers describe it as open until morning (March 2025 and October 2026); one went in at 7:30 a.m. (March 2025). Reservations accepted (Tabelog). Cards (JCB, AMEX, Diners) and QR; no e-money (Tabelog). Counter and tables; smoking allowed (Tabelog; September 2026). Packed by 18:30 on a Saturday (March 2026). On the Takase River in Nishi-Kiyamachi (Tabelog; 2025–2026 reviews).',
    hours: {}, hours_status: 'varies',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi on the Takase River, north of Shijo',
    cuisine: 'Long-running teppan izakaya, open all night (2025–2026 reviews) · okonomiyaki such as buta-tama; tonpei-yaki with mustard; pork kimchi yakisoba ¥1,020; squid yakisoba ¥830 (2025–2026 reviews) · oyster steak, beef tongue steak, cheese egg, pon-kara, chicken breast sashimi, grilled shiitake and shishito (March 2025–March 2026) · highball ¥750, shochu soda ¥500, imo shochu, lemon sour (February–September 2026) · about ¥2,000–4,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('鉄板居酒屋 高瀬川 鉄板道場'), menu_url: null,
    notes: '[Teppan izakaya · Takase River, all night] A long-standing Kiyamachi teppan bar by the Takase River, where the night ends — or never does: okonomiyaki, tonpei-yaki, squid yakisoba and oyster steak sizzle on the griddle until the next morning, with the river murmuring outside. One February 2026 pair found the drinks a little pricey. Smoking allowed; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Teppan cooks and staff (unnamed)'], origin: null,
      background: 'Per reviews (2025–2026): a teppan izakaya that has long stood in Nishi-Kiyamachi on the Takase River, open until morning and a favourite last stop after a night out. Tabelog lists overnight hours of 18:00–11:00.',
      philosophy: null, specialty: 'Okonomiyaki; tonpei-yaki.',
      anecdotes: [
        { text: 'A March 2025 diner who heard it stayed open until 11 a.m. went in at 7:30 a.m. for chicken-breast sashimi and a large-oyster steak.', source: R + 'B502392985/' },
        { text: 'A March 2026 pair stayed almost four hours on a Saturday for under ¥5,000 each, the room full within 30 minutes of an 18:00 arrival.', source: R + 'B523929966/' },
        { text: 'A February 2026 second-stop pair spent ¥7,200 on snacks and drinks and thought the ¥750 highball a little pricey.', source: R + 'B522896345/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き・居酒屋、中京区紙屋町674-4、月〜水・金〜日 18:00〜翌11:00、木曜と第3水曜休み、営業時間は変わることあり、予約可、カード (JCB・AMEX・Diners)・QR 可、電子マネー不可、喫煙可。口コミ (2025年3月〜2026年10月、英語): 高瀬川沿い、西木屋町の老舗、朝まで営業、朝7時半に入った客も、豚玉、からし付きのとん平焼き、豚キムチ焼きそば1,020円、いか焼きそば830円、牡蠣のステーキ、牛タンステーキ、チーズエッグ、pon-kara、鶏むねの刺身、焼きしいたけ、ししとう、ハイボール750円、焼酎ソーダ500円、芋焼酎、レモンサワー、カウンターとテーブル、土曜18時半には満席、2人で7,200円はやや高いとの声 (2026年2月)。',
      confidence: 'medium', sources: [TB, R + 'B502392985/', R + 'B503635386/', R + 'B522896345/', R + 'B523929966/', R + 'B532565240/', R + 'B535528255/', R + 'B535546279/', R + 'B535573351/', R + 'B537765371/', R + 'B538154567/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night local bar; smoking allowed; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区紙屋町674-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004735, 135.770444); cross-checked: GSI 京都府京都市中京区紙屋町674番地 (lot) 36 m; nearest Kyoto record 13 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532565240/', R + 'B537765371/', R + 'B522896345/'],
    price_note: 'Prices from February–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork kimchi yakisoba', '¥1,020', 'Teppan', 'no', 'no', 'July 2026.', 'butakimchi_yakisoba'),
      it('', '', 'Squid yakisoba', '¥830', 'Teppan', 'no', 'no', 'October 2026.', 'ika_yakisoba'),
      it('', '', 'Highball', '¥750', 'Drinks', 'ask', 'ask', 'February 2026.', 'highball'),
    ] }, {
    cuisine: '朝まで開いている老舗の鉄板居酒屋 (2025〜2026年の口コミ)・豚玉などのお好み焼き、からし付きのとん平焼き、豚キムチ焼きそば1,020円、いか焼きそば830円 (2025〜2026年の口コミ)・牡蠣のステーキ、牛タンステーキ、チーズエッグ、pon-kara、鶏むねの刺身、焼きしいたけ、ししとう (2025年3月〜2026年3月)・ハイボール750円、焼酎ソーダ500円、芋焼酎、レモンサワー (2026年2〜9月)・2,000〜4,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条の北、高瀬川沿いの西木屋町',
    gf_detail: 'グルテンフリー不可。甘いソースのお好み焼き、とん平焼き、焼きそば、唐揚げ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、魚介、卵の鉄板料理。野菜は焼きしいたけやししとうを確認 (2025〜2026年の口コミ)。',
    notes: '[鉄板居酒屋・高瀬川、夜通し] 高瀬川沿いの木屋町の古くからの鉄板の店。夜の締めに、あるいは締めずに、お好み焼き、とん平焼き、いか焼きそば、牡蠣のステーキを翌朝まで。窓の外は川のせせらぎ。2026年2月の2人連れは飲み物がやや高いと感じた。喫煙可、木曜休み。',
  });
}

// ================================================================ お茶漬けバァー 英楽 Ochazuke Bar Eiraku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034565/'; const R = TB + 'dtlrvwlst/';
  const H = day(['20:00', '29:00']);
  put({
    id: 'kyoto_ochazuke_bar_eiraku', name: 'お茶漬けバァー 英楽 (Ochazuke Bar Eiraku)', category: 'OMNI',
    lat: 35.004948447872955, lng: 135.77044341035446, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Ochazuke with dashi over rice — ume, nozawana, salmon, uni, unagi — plus curry udon and karaage; no gluten information (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Ume and nozawana ochazuke look plant-based but are served with dashi of unknown make (2023–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 20:00–5:00; closed Monday; hours may change (Tabelog). In 2024 the 2F ran as a cafe, cafe chi-raku, 15:00–20:00 (September 2024). Reservations accepted (Tabelog). No cards or e-money; QR accepted (Tabelog). Counter downstairs; 8 seats upstairs, two at the window over the Takase River; smoking allowed (Tabelog; 2024–2025 reviews). Run by one person, so orders can take time (September 2024). Cross a small bridge over the Takase River, north of Shijo (Tabelog; February 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'varies',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takase River north of Shijo — over a little bridge',
    cuisine: 'Late-night bar for a bowl of ochazuke to end the night, by the Takase River (2023–2026 reviews) · ochazuke: ume, nozawana, salmon and uni, unagi; an ikura and salmon oyako bowl in dashi ¥900 (November 2023–May 2026) · curry udon, karaage, assorted pickles (November 2023) · highballs and drinks; café au lait with cream ¥650 at the former daytime cafe (2024) · about ¥1,000–3,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('お茶漬けバァー 英楽'), menu_url: null,
    notes: '[Ochazuke bar · Takase River, till 5 a.m.] A tiny bar over a bridge on the Takase River where the night ends with a soothing bowl of ochazuke — ume, nozawana, salmon and uni — or curry udon, served by a friendly owner in samue. A heron that the owner feeds often drops by at the window. One-person service, so be patient. Smoking allowed; cash or QR only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner, who runs the bar alone (unnamed)'], origin: null,
      background: 'Per reviews (2023–2026): an ochazuke bar on the Takase River run by one person, a friendly owner in samue; in 2024 the upstairs also ran as a daytime cafe. A September 2024 reviewer writes that an Ochazuke Bar Eiraku opened in Sendai\'s Kokubuncho, whose owner the Kyoto owner messaged during the visit.',
      philosophy: null, specialty: 'Ochazuke.',
      anecdotes: [
        { text: 'In August 2024 the owner explained that a heron which visits the window is a regular, fed fresh fish, and that several herons come one at a time.', source: R + 'B491144211/' },
        { text: 'A September 2024 visitor who had first found the Sendai Kokubuncho shop came to see the original, and the owner messaged the Sendai owner about the visit.', source: R + 'B492730295/' },
        { text: 'A May 2026 diner was unsure the salmon and uni ochazuke was outstanding, but was comforted by the riverside view and the friendly owner.', source: R + 'B529509313/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・バー・居酒屋、中京区高瀬川筋四条上る紙屋町674-22、火〜日 20:00〜翌5:00、月曜休み、営業時間は変わることあり、予約可、カード・電子マネー不可、QR 可、喫煙可。口コミ (2023年11月〜2026年5月、英語): 高瀬川沿い、小さな橋を渡る、昼はカフェ (2024年、2階で15:00〜20:00)、1人で営業、作務衣の店主、梅、野沢菜、鮭と雲丹、うなぎのお茶漬け、いくらと鮭の親子丼 (だし) 900円、カレーうどん、唐揚げ、漬物の盛り合わせ、ハイボール、クリームのカフェオレ650円、2階8席・窓際2席、店主が魚をあげる常連の鷺、Sendai Kokubuncho にも店ができたとの声 (2024年9月)、たばこの煙が気になったとの声 (2025年2月)。',
      confidence: 'medium', sources: [TB, R + 'B474226609/', R + 'B485960596/', R + 'B491144211/', R + 'B491604807/', R + 'B491604913/', R + 'B492730295/', R + 'B499285248/', R + 'B504815680/', R + 'B514585055/', R + 'B529509313/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person bar; smoking allowed; cash or QR only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区高瀬川筋四条上る紙屋町674-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004948, 135.770443); cross-checked: GSI 京都府京都市中京区紙屋町674番地 (lot) 56 m (same lot point as Teppan Dojo, 674-4); nearest Kyoto record 18 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485960596/'],
    price_note: 'Price from a May 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Oyakodon in dashi (ikura and salmon)', '¥900', 'Rice', 'ask', 'no', 'May 2024.', 'oyako'),
      it('', '', 'Ume ochazuke', '', 'Ochazuke', 'ask', 'ask', 'November 2023.', 'ume'),
    ] }, {
    cuisine: '高瀬川沿いの、夜の締めにお茶漬けを食べる深夜のバー (2023〜2026年の口コミ)・お茶漬け: 梅、野沢菜、鮭と雲丹、うなぎ、だしで食べるいくらと鮭の親子丼900円 (2023年11月〜2026年5月)・カレーうどん、唐揚げ、漬物の盛り合わせ (2023年11月)・ハイボールなどの飲み物、昼のカフェのクリームのカフェオレ650円 (2024年)・1,000〜3,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '四条の北の高瀬川沿い、小さな橋を渡る',
    gf_detail: '要確認。ご飯にだしをかけるお茶漬け (梅、野沢菜、鮭、雲丹、うなぎ)、カレーうどん、唐揚げ。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。梅や野沢菜のお茶漬けは植物性に見えるが、だしの材料はわからない (2023〜2026年の口コミ)。',
    notes: '[お茶漬けバー・高瀬川、朝5時まで] 高瀬川の小さな橋を渡った先の小さなバー。夜の締めに、作務衣の気さくな店主の出す梅、野沢菜、鮭と雲丹のお茶漬けやカレーうどんでほっとひと息。店主が魚をあげる鷺がよく窓辺にやってくる。1人で営業しているのでゆっくりと。喫煙可、現金かQRのみ、月曜休み。',
  });
}

save();
