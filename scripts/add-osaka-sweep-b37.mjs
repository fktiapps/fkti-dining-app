// Osaka sweep (2-mile circle around Dotonbori), batch 37 — ramen phase, nearest first (all OMNI).
//   + 麺や 醤すけ 心斎橋店 (chicken-and-seafood shoyu, to 5 am; moved a short distance in 2025)
//   + 日本橋 古樹軒 (shark-fin Chinese in the Daimaru B2F food hall — filed 'other')
//   + バル DAKEジャナイ中華 心斎橋店 (creative Chinese bar — filed 'other')
//   + らーめん 天道 (light chicken paitan by Kintetsu Nippombashi, since 2014)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 37);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺や 醤すけ 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152457/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_shosuke_shinsaibashi', name: '麺や 醤すけ 心斎橋店 (Ramen Shosuke Shinsaibashi)', category: 'OMNI',
    lat: 34.672637, lng: 135.504467, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Hokkaido-wheat noodles; soy-sauce tare; gyoza, wontons.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and seafood broth, chashu, niboshi.',
    hours_raw: 'Daily 11:00–15:00 and 17:30–5:00 (Tabelog). Order by QR code / mobile order at the seat. Tabelog lists no cards, e-money or QR payment, and notes a service fee may be added. Return your dishes to the counter.',
    hours: ALL(day(['11:00', '15:00'], ['17:30', '05:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-6-23, Shimizucho Kaikan 1F — about 270 m from Nagahoribashi Stn',
    cuisine: 'Chicken-and-seafood shoyu ramen · shoyu ramen ¥900 · special shoyu ramen ¥1,400 with wontons, seasoned egg and chashu · shio niboshi ramen ¥900 · mazesoba · Hokkaido-wheat medium-thin straight noodles · chashu rice bowl, gyoza · draft beer ¥650 · 26 seats with sofas and a stand-up bar · open to 5 am',
    website: null, gmaps: gm('麺や 醤すけ 心斎橋'), menu_url: null,
    notes: "[Ramen · late-night chicken-and-seafood shoyu in Higashi-Shinsaibashi] A clean, modern ramen shop that moved a short way to this site in October 2025, open for lunch and again from 5:30 pm to 5 am. It's still busy at 1 am. The shoyu ramen (¥900) looks dark but tastes delicate: chicken umami layered with seafood, so neither dominates. It comes on medium-thin straight noodles of Hokkaido wheat with a firm, chewy bite. The special (¥1,400) adds wontons, a seasoned egg, chashu, enoki and naruto. A clear shio niboshi (¥900) and a junkier mazesoba round it out, with a chashu rice bowl and gyoza for after drinks. Order from your phone; the staff ask you to return your dishes to the counter.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened at this address 18 October 2025 (Tabelog), after moving a short distance (October 2026 review)', background: 'Ramen Shosuke.', philosophy: null, specialty: 'Chicken-and-seafood shoyu ramen.',
      anecdotes: [
        { text: '"At first glance, it looks like it might be overwhelmingly soy sauce-flavored, but surprisingly, the taste is quite delicate. The broth is based on chicken umami, layered with seafood flavors." — August 2026, shoyu ramen ¥900.', source: R + 'B534964595/' },
        { text: '"The noodles were made from Hokkaido wheat, offering a great flavor and a firm, chewy texture." — October 2026, special shoyu ramen ¥1,400.', source: R + 'B537464393/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 醤すけ 心斎橋店、大阪市中央区東心斎橋1-6-23 清水町会館1F、06-6125-5351、予約不可、毎日11:00〜15:00・17:30〜翌5:00、カード・電子マネー・QR不可と記載、サービス料がかかる場合あり、26席、禁煙、ソファ席・立ち飲み、2025年10月18日開店。2026年の口コミ(8〜10月): 深夜1時でもにぎわう、スマホのQRで注文、チャーシュー丼と餃子、醤油ラーメン900円(見た目は濃いが繊細、鶏のうま味に魚介、中細ストレート麺)、味玉、まぜそばはジャンクでおいしい、塩煮干しラーメン900円とサントリー生ビール650円(澄んだスープにチャーシュー、ねぎ、メンマ、なると)、少し移転、特製醤油ラーメン1,400円(北海道産小麦の麺、ワンタン、味玉、えのき)、食器はカウンターへ。',
      confidence: 'medium', sources: [TB, R + 'B534964595/', R + 'B537464393/', R + 'B536568282/', R + 'B536060912/', R + 'B534350147/', R + 'B535888551/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles of Hokkaido wheat, firm and chewy (August–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi', 'mazesoba_aburasoba'],
      signature_bowl: 'Shoyu ramen ¥900; special shoyu ramen ¥1,400 (August–October 2026).',
      chashu: 'Chashu; wontons on the special (October 2026).',
      notable_toppings: ['wontons', 'seasoned egg', 'menma', 'naruto', 'enoki', 'nori'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth.' },
      pantheon: 'Higashi-Shinsaibashi\'s 5 am shoyu: a dark-looking but delicate chicken-and-seafood broth on Hokkaido-wheat noodles.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537464393/', '"A rich and flavorful combination of chicken and seafood."'],
        oiliness: [R + 'B534964595/', '"The taste is quite delicate" — placed low-mid.'],
        clarity: [R + 'B534964595/', '"Deep soy sauce-colored broth" — dark but not cloudy; mid-scale (inferred).'],
        tare_strength: [R + 'B536060912/', '"The Shoyu Ramen had a stronger soy sauce taste"; another found it delicate (' + R + 'B534964595/) — mid-scale.'],
        noodle_firmness: [R + 'B537464393/', '"A firm, chewy texture."'],
        aroma_punch: [R + 'B534964595/', '"Neither flavor overpowers the other" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B534964595/', R + 'B537464393/', R + 'B536060912/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code on your phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-6-23 清水町会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目6番23号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534964595/', R + 'B537464393/', R + 'B536568282/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('醤油ラーメン', 'shōyu rāmen', 'Shoyu ramen', '¥900', 'Ramen', 'no', 'no', 'August 2026.', 'shoyu'),
      it('', '', 'Special shoyu ramen', '¥1,400', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Shio niboshi ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'shio_niboshi'),
      it('まぜそば', 'mazesoba', 'Mazesoba', '', 'Mazesoba', 'no', 'no', 'September 2026.', 'maze'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'August 2026.', 'chashu_don'),
      it('餃子', 'gyōza', 'Gyoza', '', 'Sides', 'no', 'no', 'August 2026.', 'gyoza'),
    ] }, {
    cuisine: '鶏と魚介の醤油ラーメン・醤油ラーメン900円・ワンタン、味玉、チャーシューの特製醤油ラーメン1,400円・塩煮干しラーメン900円・まぜそば・北海道産小麦の中細ストレート麺・チャーシュー丼、餃子・生ビール650円・ソファ席と立ち飲みもある26席・朝5時まで',
    neighborhood: '東心斎橋1-6-23 清水町会館1F。長堀橋駅から約270m',
    gf_detail: 'グルテンフリーではありません。北海道産小麦の麺、醤油だれ、餃子、ワンタン。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚介のスープ、チャーシュー、煮干し。',
    notes: '[ラーメン・東心斎橋の深夜の鶏と魚介の醤油] 2025年10月に少し移転してきた清潔でモダンなラーメン店で、昼と、夕方5時半から朝5時まで営業。深夜1時でもにぎわいます。醤油ラーメン(900円)は見た目は濃いのに味は繊細で、鶏のうま味に魚介が重なり、どちらも出過ぎません。麺は北海道産小麦の中細ストレートで、しっかりしたコシ。特製(1,400円)はワンタン、味玉、チャーシュー、えのき、なると付き。澄んだ塩煮干し(900円)とジャンクなまぜそばもあり、飲んだ後はチャーシュー丼や餃子も。注文はスマホから、食器はカウンターへ戻します。',
  });
}

// ================================================================ 日本橋 古樹軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113491/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kojuken_daimaru_shinsaibashi', name: '日本橋 古樹軒 (Nihombashi Kojuken)', category: 'OMNI',
    lat: 34.673321, lng: 135.500781, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy- and oyster-based Chinese braising sauces; ramen and dan dan noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shark fin, minced-meat mapo, chicken.',
    hours_raw: 'Daily 11:00–21:00 (L.O. 20:00), closed when Daimaru Shinsaibashi is (Tabelog). Self-service food-hall seating; pick up when your buzzer sounds. Cards and QR accepted; no e-money.',
    hours: ALL(day(['11:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daimaru Shinsaibashi B2F food hall (Shinsaibashi-suji 1-7-1)',
    cuisine: 'Shark-fin Chinese in a department-store food hall · shark-fin soup rice set ¥3,180 · whole braised shark-fin set with ramen ¥3,180 · mapo tofu set · Hirai-style dan dan noodles · tom yum kung set · spicy chicken side',
    website: null, gmaps: gm('日本橋 古樹軒 大丸心斎橋'), menu_url: null,
    notes: "[Chinese · shark fin in the Daimaru food hall] A stall of Nihombashi Kojuken, a well-known shark-fin restaurant, in the B2F food hall of Daimaru Shinsaibashi, often featured on Kansai TV. The No. 1 seller is the shark-fin soup rice set (¥3,180, July 2026): a large piece of hot shark fin with spicy chicken on the side. The whole braised shark-fin set can come with ramen instead of rice (¥3,180). The Hirai-style dan dan noodles are sesame-rich with real Sichuan numbing. The No. 2 seller is the mapo tofu set, hot from the start and finishing on Sichuan pepper. Seating is self-service and crowded with tourists at weekends. One long-time visitor finds nearly ¥3,000 too much for lunch now.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened in Daimaru 20 September 2019 (Tabelog)', background: 'Nihombashi Kojuken, described by reviewers as a renowned shark-fin restaurant; often on Kansai TV (May 2026 review).', philosophy: null, specialty: 'Shark-fin dishes.',
      anecdotes: [
        { text: '"I enjoyed the popular No. 1 dish, the Shark Fin Soup Rice Set for JPY 3,180. It was a luxurious lunch where I could savor the large, hot, and delicious shark fin." — July 2026.', source: R + 'B531429887/' },
        { text: '"I could really feel the numbing sensation from the Sichuan pepper and the spiciness… The meat sauce was also cleverly crafted." — August 2026, Hirai-style dan dan noodles.', source: R + 'B533243828/' },
      ],
      japanese_sources_summary: '食べログ: 日本橋 古樹軒、大阪市中央区心斎橋筋1-7-1 大丸心斎橋店B2F、050-3555-1132、予約不可、毎日11:00〜21:00(L.O.20:00)、大丸心斎橋店に準じて休み、カード・QR決済可、電子マネー不可、禁煙、車いす可、2019年9月20日開店。2026年の口コミ(5〜10月): 値上がりで昼に3,000円近い、人気No.1のフカヒレスープご飯セット3,180円と辣子鶏、人気No.2の麻婆豆腐セット(花椒のしびれ)、平井式担々麺(ごまが濃く花椒と辛さ)、関西のテレビでよく見る、フカヒレご飯セットとトムヤムクンのセット、セルフ式で週末は観光客で混雑、ブザーで受け取り、とびきりのフカヒレ姿煮セット(税込3,180円)をラーメンで。',
      confidence: 'medium', sources: [TB, R + 'B531429887/', R + 'B533243828/', R + 'B534177986/', R + 'B537579576/', R + 'B536864765/', R + 'B423098384/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service food hall with a pickup buzzer.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-7-1 大丸心斎橋店 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目7番1号 (go) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531429887/', R + 'B537579576/'],
    price_note: 'Prices from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shark-fin soup rice set', '¥3,180', 'Sets', 'no', 'no', 'July 2026.', 'fukahire_rice'),
      it('とびきりのフカヒレ姿煮セット', 'tobikiri no fukahire sugatani setto', 'Whole braised shark-fin set (with ramen or rice)', '¥3,180', 'Sets', 'no', 'no', 'October 2026.', 'sugatani'),
      it('麻婆豆腐', 'mābo dōfu', 'Mapo tofu set', '', 'Sets', 'no', 'no', 'July 2026.', 'mapo'),
      it('', '', 'Hirai-style dan dan noodles', '', 'Noodles', 'no', 'no', 'August 2026.', 'tantan'),
      it('', '', 'Tom yum kung set', '', 'Sets', 'no', 'no', 'May 2026.', 'tomyum'),
    ] }, {
    cuisine: '百貨店のフードホールのフカヒレ中華・フカヒレスープご飯セット3,180円・ラーメンも選べるとびきりのフカヒレ姿煮セット3,180円・麻婆豆腐セット・平井式担々麺・トムヤムクンのセット・辣子鶏',
    neighborhood: '大丸心斎橋店B2Fのフードホール(心斎橋筋1-7-1)',
    gf_detail: '実際にはグルテンフリーではありません。醤油やオイスターの中華の煮込みだれ、ラーメンと担々麺。',
    vegan_detail: 'ヴィーガンではありません。フカヒレ、ひき肉の麻婆、鶏。',
    notes: '[中華・大丸のフードホールのフカヒレ] 名店として知られるフカヒレの店、日本橋 古樹軒が大丸心斎橋店の地下2階フードホールに出す店で、関西のテレビでもよく紹介されます。人気No.1はフカヒレスープご飯セット(3,180円、2026年7月)で、熱々の大きなフカヒレに辣子鶏の小皿。とびきりのフカヒレ姿煮セットはご飯の代わりにラーメンも選べます(3,180円)。平井式担々麺はごまが濃く、本格的な花椒のしびれ。人気No.2の麻婆豆腐セットは最初から辛く、最後は花椒。席はセルフで週末は観光客で混みます。昼に3,000円近いのは高くなったという古くからの客も。',
  });
}

// ================================================================ バル DAKEジャナイ中華 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132605/'; const R = TB + 'dtlrvwlst/';
  const D = day(['16:00', '02:00']);
  put({
    id: 'osaka_bar_dake_janai_chuka_shinsaibashi', name: 'バル DAKEジャナイ中華 心斎橋店 (Bar DAKE Janai Chuka Shinsaibashi)', category: 'OMNI',
    lat: 34.673212, lng: 135.503457, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: shumai and gyoza wrappers, soy-based Chinese sauces, fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shumai, mapo tofu with meat, shrimp mayonnaise, kara-age.',
    hours_raw: 'Mon–Sat 16:00–2:00 (L.O. 1:00); closed Sunday and holidays (Tabelog). Reservations taken; courses by the day before; groups of 10+ by arrangement. Cards and QR (PayPay, d Barai, au PAY) accepted; no e-money. A May 2026 reviewer came looking for somewhere to smoke.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-14-21, Kawamura Bldg 1F — 2 min from Shinsaibashi Stn exit 6',
    cuisine: 'Creative Chinese bar · pick-your-own appetizers to share · freshly steamed shumai · mapo tofu · big-portion fried rice · gyoza · shrimp with mayonnaise · drinking snacks · 28 seats including a terrace · open to 2 am',
    website: null, gmaps: gm('バル DAKEジャナイ中華 心斎橋'), menu_url: null,
    notes: "[Chinese · creative Chinese bar in Higashi-Shinsaibashi] A casual Chinese bar near Shinsaibashi Station's exit 6 that puts a twist on the classics, open until 2 am. You choose your own appetizers to share around. The freshly steamed shumai is especially fluffy, and the fried rice comes in a generous heap; mapo tofu, gyoza and shrimp with mayonnaise round it out. Turnover is quick, so walk-ins usually work, though you can book and order courses a day ahead. The staff are friendly; one first-timer was called by first name. One May 2026 visitor came looking for a place to smoke.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 November 2022 (Tabelog)', background: 'A Chinese bar (バル) with a pick-your-own appetizer system (reviews).', philosophy: null, specialty: 'Shumai; fried rice.',
      anecdotes: [
        { text: '"The freshly steamed shumai was especially fluffy and tasty!" — February 2026.', source: R + 'B522439759/' },
        { text: '"It offers a wide variety of dishes that add a unique twist to classic Chinese cuisine, all beautifully presented and perfectly paired with drinks." — June 2026.', source: R + 'B529586144/' },
      ],
      japanese_sources_summary: '食べログ: バル DAKEジャナイ中華 心斎橋店、大阪市中央区東心斎橋1-14-21 川村ビル1F、050-5590-3436、予約可(コースは前日まで)、月〜土16:00〜翌2:00(L.O.1:00)、日・祝休み、カード・QR(PayPay、d払い、au PAY)可、電子マネー不可、28席(テラス含む)、2022年11月11日開店。2025〜2026年の口コミ: お通しを自分で選べる、回転が早く予約なしでも入りやすい、蒸したての焼売がふわふわ、麻婆豆腐、量の多い炒飯、餃子、エビマヨ、タバコが吸える店を探して、初対面でも下の名前で呼ぶ気さくなスタッフ、イベント、創作中華のバル、気軽な雰囲気、飲み歩きの最後でも軽い料理がおいしい。',
      confidence: 'medium', sources: [TB, R + 'B522439759/', R + 'B529586144/', R + 'B522796631/', R + 'B528513624/', R + 'B530740502/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly, chatty staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-14-21 川村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目14番21号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522439759/', R + 'B522796631/', R + 'B528513624/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('焼売', 'shūmai', 'Freshly steamed shumai', '', 'Dim sum', 'no', 'no', 'February 2026.', 'shumai'),
      it('麻婆豆腐', 'mābo dōfu', 'Mapo tofu', '', 'Chinese', 'no', 'no', 'February–May 2026.', 'mapo'),
      it('炒飯', 'chāhan', 'Fried rice', '', 'Rice', 'no', 'no', 'February–May 2026.', 'chahan'),
      it('餃子', 'gyōza', 'Gyoza', '', 'Dim sum', 'no', 'no', 'May 2026.', 'gyoza'),
      it('', '', 'Shrimp with mayonnaise', '', 'Chinese', 'no', 'no', 'May 2026.', 'ebimayo'),
    ] }, {
    cuisine: '創作中華のバル・自分で選んで取り分けるお通し・蒸したての焼売・麻婆豆腐・大盛りの炒飯・餃子・エビマヨ・つまみ・テラスを含む28席・深夜2時まで',
    neighborhood: '東心斎橋1-14-21 川村ビル1F。心斎橋駅6番出口から徒歩2分',
    gf_detail: '実際にはグルテンフリーではありません。焼売や餃子の皮、醤油ベースの中華のたれ、炒飯。',
    vegan_detail: 'ヴィーガンではありません。焼売、肉入りの麻婆豆腐、エビマヨ、唐揚げ。',
    notes: '[中華・東心斎橋の創作中華バル] 心斎橋駅6番出口の近く、定番をひとひねりした気軽な中華バルで、深夜2時まで。お通しは自分で選んでみんなで取り分けます。蒸したての焼売は特にふわふわ、炒飯はたっぷり、麻婆豆腐、餃子、エビマヨも。回転が早いので予約なしでも入りやすく、予約や前日までのコースも可。スタッフは気さくで、初対面の客を下の名前で呼んだことも。2026年5月にはタバコが吸える店を探して来た人も。',
  });
}

// ================================================================ らーめん 天道
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27080501/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '22:00']);
  put({
    id: 'osaka_ramen_tendo_nipponbashi', name: 'らーめん 天道 (Ramen Tendo)', category: 'OMNI',
    lat: 34.666264, lng: 135.50586, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; tsukemen noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan, seafood broth, chashu.',
    hours_raw: 'Tue–Sun 11:30–22:00; closed Monday (Tabelog). No cards or e-money; PayPay accepted (Tabelog). Free mustard at the counter; tsukemen noodles up to an extra 300 g at no charge (September 2026).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nippombashi 1-19-7 — 1 min from Nippombashi Stn exit 5',
    cuisine: 'Light, gentle chicken-paitan ramen · seafood chicken-paitan ramen · tsukemen with aonori, extra 300 g free · summer chicken-paitan chilled noodles, super large ¥1,080 · extra noodles · chashu rice and ajitama rice bowl · free mustard · 11 counter seats',
    website: null, gmaps: gm('らーめん 天道 日本橋'), menu_url: null,
    notes: "[Ramen · gentle chicken paitan by Nippombashi since 2014] An 11-seat counter a minute from Nippombashi Station's exit 5, serving chicken paitan since 2014. The broth is light and gentle on smooth thin noodles, with melt-soft chashu. One returning visitor stirs in the free mustard after an extra serving of noodles, just as they did as a student. There's a seafood chicken-paitan ramen, and a tsukemen finished with aonori with up to 300 g of extra noodles free. In summer, a chicken-paitan chilled-noodle bowl (super large ¥1,080) draws people back three days running. Those who like richer ramen may find it mild. PayPay accepted, no cards.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 July 2014 (Tabelog)', background: 'A chicken-paitan counter near Nippombashi Station (reviews).', philosophy: null, specialty: 'Chicken-paitan ramen.',
      anecdotes: [
        { text: '"The chicken paitan broth was light and gentle in flavor. The noodles were thin and smooth, going down perfectly. The chashu was melt-in-your-mouth tender." — September 2026.', source: R + 'B535635405/' },
        { text: '"The super large size is JPY 1,080! It\'s packed with ingredients… It\'s so delicious that there are customers who come back for three consecutive days!" — July 2026, chicken-paitan chilled noodles.', source: R + 'B531905241/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 天道、大阪市中央区日本橋1-19-7、050-3569-5080、予約不可、火〜日11:30〜22:00、月曜休み、カード・電子マネー不可、QR(PayPay)可、11席(カウンターのみ)、禁煙、2014年7月28日開店。2026年の口コミ(7〜9月): つけ麺、青のり、鶏白湯の冷やし中華(特盛1,080円、3日連続で来る客も)、魚介鶏白湯ラーメンと味玉丼(あっさりで細麺、深夜にも食べやすい)、鶏白湯ラーメン(やさしい味)、チャーシューご飯、替え玉、とろけるチャーシュー、つけ麺は麺300g増量無料、無料のからし、学生時代に通った懐かしい味。',
      confidence: 'medium', sources: [TB, R + 'B535635405/', R + 'B531905241/', R + 'B532654811/', R + 'B536077775/', R + 'B536326356/', R + 'B439089215/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin, smooth noodles (July–September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'tsukemen'],
      signature_bowl: 'Chicken-paitan ramen (September 2026).',
      chashu: 'Melt-soft chashu (September 2026).',
      notable_toppings: ['aonori (tsukemen)', 'mustard (free)', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Nippombashi\'s gentle chicken paitan since 2014: thin noodles, soft chashu, a dab of free mustard.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B535635405/', '"The chicken paitan broth was light and gentle in flavor."'],
        oiliness: [R + 'B532654811/', '"A light broth and thin noodles, making it very easy to eat."'],
        clarity: [R + 'B535635405/', 'Chicken paitan — cloudy but light (inferred).'],
        tare_strength: [R + 'B532654811/', '"Personally, I prefer richer flavors" — placed low.'],
        noodle_firmness: [R + 'B535635405/', '"Thin and smooth" — mid-scale.'],
        aroma_punch: [R + 'B536326356/', 'Mild until the free mustard is added — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B535635405/', R + 'B532654811/', R + 'B531905241/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; PayPay or cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-19-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目19番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531905241/', R + 'B535635405/'],
    price_note: 'Only the chilled-noodle price was captured (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Chicken-paitan ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'toripaitan'),
      it('', '', 'Seafood chicken-paitan ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'gyokai'),
      it('つけ麺', 'tsukemen', 'Tsukemen (aonori; extra 300 g free)', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsukemen'),
      it('', '', 'Chicken-paitan chilled noodles, super large (summer)', '¥1,080', 'Seasonal', 'no', 'no', 'July 2026.', 'hiyashi'),
      it('', '', 'Chashu rice', '', 'Rice', 'no', 'no', 'September 2026.', 'chashu_rice'),
    ] }, {
    cuisine: 'あっさりやさしい鶏白湯ラーメン・魚介鶏白湯ラーメン・青のりのつけ麺、300g増量無料・夏の鶏白湯冷やし中華、特盛1,080円・替え玉・チャーシューご飯と味玉丼・無料のからし・カウンター11席',
    neighborhood: '日本橋1-19-7。日本橋駅5番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、つけ麺の麺。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、魚介のスープ、チャーシュー。',
    notes: '[ラーメン・日本橋の2014年からのやさしい鶏白湯] 日本橋駅5番出口から1分、2014年から鶏白湯を出す11席のカウンター。スープはあっさりやさしく、なめらかな細麺にとろけるチャーシュー。学生時代のように替え玉の後に無料のからしを溶かすという再訪の人も。魚介鶏白湯ラーメンや、青のりで仕上げて麺300gまで増量無料のつけ麺も。夏は鶏白湯の冷やし中華(特盛1,080円)で、3日続けて来る客もいるそう。こってり好きには物足りないかも。PayPay可、カード不可。',
  });
}

save();
