// Osaka sweep (2-mile circle around Dotonbori), batch 198 — name-revisit queue 6/6 (Greg 2026-10-30: redo the shops
// passed over because the name sounded like a person's), nearest-first.
//   + スンドゥブ食堂 駿 Sundubu Shokudo Toshi (sundubu with homemade tofu and wagyu-bone broth, open 11:00–23:30; Shinmachi)
//   + かっちゃんラーメン Kacchan Ramen (Showa-style chuka soba with free fried rice, opened August 2026; ramen block)
//   + 大衆食堂スタンド そのだ Taishu Shokudo Stand Sonoda (the original Sonoda: lunch set meals, day drinking, chashu egg;
//     Tabelog Izakaya 100 2021; filed as izakaya without a ramen block — the Chinese soba is one dish among dozens,
//     ordered mostly as the finish)
//   + 﨑ちゃんラーメン Sakichan Ramen (wagyu beef-tendon chuka soba at lunch in a yakiniku shop; ramen block)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 198);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ スンドゥブ食堂 駿
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27150969/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:30']);
  put({
    id: 'osaka_sundubu_shokudo_toshi_shinmachi', name: 'スンドゥブ食堂 駿 (Sundubu Shokudo Toshi)', category: 'OMNI',
    lat: 34.677743, lng: 135.493589, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the sundubu is seasoned with a homemade chili paste (tategi) whose ingredients are not published, the rice can be swapped for ramen, and chijimi and jeon are wheat-batter pancakes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the sundubu broth is made with wagyu beef bones and tail, and the stew carries clams.',
    hours_raw: 'Daily 11:00–23:30 (last order 23:00, takeout last order 23:00) (Tabelog); open straight through the afternoon (July and September 2026 reviews). Lunch: sundubu set with rice (large free) and side dishes; dinner: Korean dishes à la carte, rice and banchan are not included at dinner (September 2026 review). Reservations accepted, online (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 17 seats: 9 at the counter, 8 at tables; non-smoking; children and strollers welcome; takeout; menu with photos (Tabelog). Lunch fills with office workers; arrive at opening to sit easily (July 2026 reviews). Opened 16 September 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-33-15, Apple Bldg 1F (Nishi-ku), on Naniwa-suji — 2 min from Nishi-Ohashi Stn exit 2, 5 min from Yotsubashi Stn',
    cuisine: 'Sundubu (Korean soft-tofu stew) restaurant and Korean izakaya (17 seats) · tofu made in the shop every morning, broth of wagyu beef bones and tail, homemade tategi chili paste · eight kinds of sundubu, spice level 0 and up, over 20 toppings · lunch set: sundubu with rice (large free; or swap for ramen or glass noodles), raw egg, Korean seaweed and kimchi and namul, ¥1,000 plain, ¥1,550 horumon with clams · dinner: beef and horumon sundubu ¥1,450, Kirishima black pork sundubu ¥1,550, toppings such as natto and okra ¥100, kimchi chijimi ¥1,210, chive jeon, mozzarella jeon, sukiyaki-style bulgogi, kimbap, stone-grilled cheese bibimbap, wagyu yukhoe, soy-marinated and spicy-marinated shrimp (ganjang saeu, yangnyeom saeu), bossam, shaved ice · Korean soju, makgeolli, highballs, draft beer ¥550',
    website: null, gmaps: gm('スンドゥブ食堂 駿 新町'), menu_url: null,
    notes: "[Korean · Shinmachi, sundubu from 11 am to 11:30 pm] A clean, modern 17-seat room on Naniwa-suji, two minutes from Nishi-Ohashi Station, that opened in September 2025 as the second shop of a sundubu restaurant whose first is in Yuzato. The tofu is made in the shop every morning and the broth is wagyu bone and tail with a homemade tategi chili paste; diners call it rich and deep, with clams and a hint of sweetness under the heat. Pick one of eight sundubu (the horumon version is the favourite), a spice level from 0 up, and toppings. At lunch it comes with rice, a raw egg, Korean seaweed and kimchi and namul for about ¥1,000, and the room fills with office workers. Evenings turn into a Korean izakaya: soy- and spice-marinated shrimp that drew a 'What is this? So delicious!' from one table, wagyu yukhoe, chijimi, bulgogi, and makgeolli. The name is read Toshi, not Shun, as one diner learned. It stays open between lunch and dinner, a plus for one regular.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Sundubu restaurant that opened on 16 September 2025 (Tabelog); the second shop of a sundubu restaurant whose main branch is in Yuzato, with a third recently opened in Kutarou-cho (September 2026 review).', philosophy: 'Authentic Korean flavours in a relaxed, casual room for solo diners or groups; set meals at lunch, Korean dishes such as bossam and chijimi at dinner (Tabelog, shop-provided).', specialty: 'Sundubu with homemade tofu, wagyu-bone broth and homemade tategi.',
      anecdotes: [
        { text: '"Homemade tofu made fresh every morning / Black-haired Wagyu beef bone tail soup / Homemade tategi miso. These three elements combined create a broth that is rich in flavor, possibly the best sundubu I\'ve ever had!" — October 2025, horumon sundubu lunch set.', source: R + 'B514746787/' },
        { text: '"The moment we took a bite of the kanjang saeu and yangnyeom saeu that arrived first, we all exclaimed, \'What is this? So delicious!!\'" — September 2026, a group dinner.', source: R + 'B535648675/' },
      ],
      japanese_sources_summary: '食べログ: スンドゥブ食堂 駿、大阪市西区新町1-33-15 アップルビル 1F、西大橋駅2番出口から徒歩2分、四ツ橋駅から徒歩5分、毎日11:00〜23:30 (L.O. 23:00、テイクアウトのL.O.も23:00)、予約可 (ネット予約)、カード (VISA、Master、JCB、AMEX、Diners、銀聯)・PayPay可、電子マネー不可、17席 (カウンター9、テーブル8)、禁煙、子供・ベビーカー可、テイクアウト、写真つきメニュー、オープン日2025年9月16日。店の紹介: 気軽に本場の韓国の味、選べるスンドゥブ8種、ランチは定食が中心、夜は bossam やチヂミなどの韓国料理、テイクアウトも、韓国焼酎、マッコリ、ハイボール。口コミ(2025年10月〜2026年9月): 毎朝作る自家製豆腐、黒毛和牛の骨とテールのスープ、自家製の tategi、辛さは0から8段階、トッピング20種以上、ランチはご飯 (大盛り無料、ラーメンか春雨に変更可) と生卵、韓国のり、キムチとナムルつきで1000円、ホルモンとあさりで1550円、夜は牛肉とホルモンのスンドゥブ1450円、Kirishima の黒豚のスンドゥブ1550円、納豆・オクラのトッピング100円、キムチチヂミ1210円、ニラのチヂミ、モッツァレラのチヂミ、すき焼き風プルコギ、キンパ、石焼きチーズビビンバ、和牛ユッケ、ganjang saeu と yangnyeom saeu、かき氷、生ビール550円、卓上の酢で味を変える、昼は会社員でいっぱい、昼から夜まで通しで営業、スタンプカード、本店は Yuzato でここは2号店、Kutarou-cho に3号店、店名は「しゅん」ではなく「とし」と読む。',
      confidence: 'medium', sources: [TB, R + 'B514746787/', R + 'B531712101/', R + 'B531777991/', R + 'B532605155/', R + 'B535648675/', R + 'B535759555/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu with photos; choose a spice level (0 and up) when ordering (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-33-15 アップルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目33番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514746787/', R + 'B531777991/', R + 'B535759555/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sundubu lunch set, plain (rice, egg, seaweed, kimchi and namul)', '¥1,000', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_plain'),
      it('', '', 'Horumon sundubu lunch set (beef intestines and clams)', '¥1,550', 'Lunch', 'ask', 'no', 'July 2026.', 'lunch_horumon'),
      it('', '', 'Beef and horumon sundubu', '¥1,450', 'Sundubu', 'ask', 'no', 'September 2026, dinner.', 'gyu_horumon'),
      it('', '', 'Kirishima black pork sundubu', '¥1,550', 'Sundubu', 'ask', 'no', 'September 2026, dinner.', 'kurobuta'),
      it('', '', 'Toppings (natto, okra and others)', '¥100', 'Toppings', '', '', 'September 2026.', 'topping'),
      it('', '', 'Kimchi chijimi', '¥1,210', 'Korean dishes', 'no', 'ask', 'September 2026.', 'chijimi'),
    ] }, {
    cuisine: 'スンドゥブの店で韓国の居酒屋 (17席)・毎朝店で作る豆腐、黒毛和牛の骨とテールのスープ、自家製の tategi・スンドゥブは8種、辛さは0から、トッピング20種以上・ランチ: スンドゥブにご飯 (大盛り無料。ラーメンか春雨にも変更可)、生卵、韓国のり、キムチとナムル、プレーン1000円、ホルモンとあさり1550円・夜: 牛とホルモンのスンドゥブ1450円、Kirishima の黒豚のスンドゥブ1550円、納豆やオクラのトッピング100円、キムチチヂミ1210円、ニラのチヂミ、モッツァレラのチヂミ、すき焼き風プルコギ、キンパ、石焼きチーズビビンバ、和牛ユッケ、ganjang saeu と yangnyeom saeu、bossam、かき氷・韓国焼酎、マッコリ、ハイボール、生ビール550円',
    neighborhood: '西区新町1-33-15 アップルビル 1F、なにわ筋沿い。西大橋駅2番出口から徒歩2分、四ツ橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。スンドゥブは材料が公開されていない自家製の tategi で味つけし、ご飯をラーメンに変えることもでき、チヂミは小麦の生地。',
    vegan_detail: 'ヴィーガンではありません。スンドゥブのスープは黒毛和牛の骨とテールで、あさりも入る。',
    notes: '[韓国料理・新町、朝11時から夜11時半までスンドゥブ] 西大橋駅から徒歩2分、なにわ筋沿いの清潔でモダンな17席の店。2025年9月に、本店が Yuzato にあるスンドゥブの店の2号店として開店。豆腐は毎朝店で作り、スープは黒毛和牛の骨とテールに自家製の tategi。辛さの奥にあさりとほのかな甘みがある、濃くて深い味という声。8種のスンドゥブ (人気はホルモン) から選び、辛さは0から、トッピングも。ランチはご飯、生卵、韓国のり、キムチとナムルがついて1000円ほどで、会社員でいっぱいになる。夜は韓国の居酒屋になり、「何これ、おいしい」と声が上がった海老の ganjang saeu と yangnyeom saeu、和牛ユッケ、チヂミ、プルコギにマッコリ。店名は「しゅん」ではなく「とし」と読むと知った人も。昼と夜の間も閉めないのがうれしいという常連の声も。',
  });
}

// ================================================================ かっちゃんラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27158385/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://allwin2002.com/'; const NEWS = 'https://allwin2002.com/news/detail/12';
  const H = day(['11:00', '00:30']);
  put({
    id: 'osaka_kacchan_ramen_kitakyuhojimachi', name: 'かっちゃんラーメン (Kacchan Ramen)', category: 'OMNI',
    lat: 34.680256, lng: 135.506178, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles, soy-based tare, and gyoza and fried sides.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone broth with chicken oil and a hint of shellfish; chashu; egg in the fried rice.',
    hours_raw: 'Daily 11:00–00:30 (last order 24:00) (Tabelog). Evening side dishes from 16:00 (October 2026 review). No reservations (Tabelog). Cash only: no cards, e-money or QR (Tabelog); order and pay at the ticket machine, cash only (August 2026 review). 24 seats; non-smoking (Tabelog). Opened 12 August 2026 (Tabelog; operator news). Run by ALL WIN Co., Ltd., an Osaka company that also operates CoCo Ichibanya and Ramen Daisensou franchises; Kacchan Ramen is its own brand and its only shop on the operator\'s store list (allwin2002.com, October 2026). A diner says the site was earlier a ramen shop of the same company (October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kita-Kyuhojimachi 2-1-2 — 2 min from Sakaisuji-Hommachi Stn exit 10',
    cuisine: 'Showa-style chuka soba shop (24 seats), shoyu, shio and miso · clear, light chicken-bone broth with chicken oil and a hint of shellfish, house-made thin straight noodles · chuka soba ¥980, shio ramen ¥980, miso ramen, garlic ramen · flavored egg ¥120, extra chashu, extra noodles · every ramen comes with a free mini fried rice; all-you-can-eat fried rice +¥380 · gyoza with a handmade filling, kara-age, kimchi · from 16:00: fried horse mackerel, menchi katsu, thick ham cutlet, cream croquettes, croquettes, red sausages, liver and garlic stir-fry · on the table: spicy miso, garlic vinegar, fried-rice sauce, chili oil, gyoza sauce, ramen pepper',
    website: WEB, gmaps: gm('かっちゃんラーメン 堺筋本町'), menu_url: null,
    notes: "[Ramen · Sakaisuji-Hommachi, chuka soba and free fried rice until 12:30 am] A lively 24-seat shop two minutes from Sakaisuji-Hommachi Station that opened in August 2026 with one hook: every bowl comes with a free mini fried rice, and ¥380 more makes it all-you-can-eat. The operator, an Osaka company that also runs CoCo Ichibanya and Ramen Daisensou franchises, set out to make the town chuka soba of a Showa childhood: house-made noodles and a clear, light broth in shoyu, shio or miso. Diners describe chicken-bone stock with chicken oil, a hint of shellfish and a slightly sweet soy, with thin straight noodles; one called it Tokyo-style with an Osaka twist. The fried rice has drawn YouTubers: refills come out in about two minutes, and diners report going back four or five times, but one late-night diner found it bland and the garlic ramen not hot. After 4 pm a list of Showa diner sides appears, from horse-mackerel fry to red sausages. Cash only at the ticket machine; open daily until 12:30 am.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Chuka soba shop that opened on 12 August 2026 (Tabelog; operator news). Operated by ALL WIN Co., Ltd., an Osaka company whose businesses include its own restaurant brands, CoCo Ichibanya and ramen franchises, and fitness studios; Kacchan Ramen is listed as its only shop of that name (allwin2002.com, October 2026).', philosophy: 'The classic over the trend: a Showa town chuka soba built on shoyu, shio and miso, remade for today with house-made noodles focused on wheat flavour and a clear, light broth; gyoza made from the filling up; fast, tasty and filling (operator news, 12 August 2026).', specialty: 'Chuka soba with free fried rice.',
      anecdotes: [
        { text: '"The clear broth had a slightly brown tint, with a delightful sweetness and umami from shellfish, balanced with a decent saltiness. The generous amount of chicken fat added richness, making it delicious!" — October 2026, chuka soba ¥980.', source: R + 'B536837240/' },
        { text: '"Thanks to a free coupon I received from my last visit and the all-you-can-eat fried rice, I only paid an incredible JPY 380! I went back for fried rice 5 times!" — August 2026, second visit.', source: R + 'B534366988/' },
      ],
      japanese_sources_summary: '食べログ: かっちゃんラーメン、大阪市中央区北久宝寺町2-1-2、堺筋本町駅10番出口から徒歩2分、毎日11:00〜24:30 (L.O. 24:00)、予約不可、カード・電子マネー・QR不可、24席、禁煙、オープン日2026年8月12日。運営会社 (株式会社ALL WIN) のお知らせ: 「堺筋本町　かっちゃんラーメン」2026年8月12日グランドオープン、時代に逆らい流行より王道を選んだ、醤油・塩・味噌を柱にした中華そばの店、子どものころの町の中華そば屋、昭和の中華そば、自家製麺は小麦の風味と喉ごしにこだわり、スープは澄んだあっさり仕立て、餃子は餡から手作り、焼きめしはこだわりの卵で、はやい・うまい・腹いっぱい。店舗一覧にはほかにCoCo壱番屋、ラーメン大戦争など。口コミ(2026年8月〜10月): 中華そば980円、塩ラーメン980円、味玉120円、みそラーメン、にんにくラーメン、ラーメンには小さいチャーハンが無料、380円でチャーハン食べ放題、おかわりは2分ほど、4〜5杯食べた人も、鶏ガラと鶏油、ほのかに貝、九州の甘めの醤油、細いストレート麺、チャーシューは薄くて小さいがやわらかいという声と、脂のある厚みという声、16時からの夜のおかず (アジフライ、メンチカツ、厚切りハムカツ、クリームコロッケ、コロッケ、赤いソーセージ、レバーとにんにくを炒めたもの)、唐揚げ、単品キムチ、にんにくの効いた餃子、券売機で現金のみ、卓上に辛味噌・にんにく酢・チャーハンのたれ・ラー油・餃子のたれ・ラーメンこしょう、YouTuberが撮影に、チャーハンは味が薄くにんにくラーメンは熱くなかったという厳しい声も、以前も同じ会社のラーメン店だったという声。',
      confidence: 'medium', sources: [TB, WEB, NEWS, R + 'B534366988/', R + 'B536826628/', R + 'B536837240/', R + 'B537040590/', R + 'B537725686/', R + 'B538231565/'] },
    ramen: {
      broth_base: ['chicken', 'shellfish'], broth_texture: 'chintan', tare: ['shoyu', 'shio', 'miso'], aroma_oil: ['chicken oil'], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: 'low', handmade: true, notes: 'House-made noodles focused on wheat flavour (operator news); thin, straight and low in water, chewy but quick to soften (October 2026 reviews).' },
      regional_style: [], sub_genre: ['chuka soba'],
      signature_bowl: 'Chuka soba ¥980 with a free mini fried rice (October 2026).',
      chashu: 'Thin, small and tender per one October 2026 diner; another found it thick with some fat (October 2026).',
      notable_toppings: ['chashu', 'flavored egg (¥120)', 'extra chashu', 'extra noodles'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and shellfish broth; chashu.' },
      pantheon: 'Sakaisuji-Hommachi\'s late-night Showa chuka soba: a clear chicken and shellfish shoyu with house-made thin noodles, and fried rice free with every bowl.',
      profile: { richness: 2, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B538074690/', '"The ramen had a light flavor with a hint of shellfish broth" (October 2026); operator: 澄んだあっさり仕立て (' + NEWS + ').'],
        oiliness: [R + 'B536837240/', '"The generous amount of chicken fat added richness"; "slightly oily" (' + R + 'B536826628/) — mid-scale.'],
        clarity: [R + 'B536837240/', '"The clear broth had a slightly brown tint" (October 2026).'],
        tare_strength: [R + 'B536837240/', '"Balanced with a decent saltiness"; a "subtly sweet Kyushu soy sauce flavor" (' + R + 'B537040590/) — mid-scale.'],
        noodle_firmness: [R + 'B537040590/', '"The noodles have a nice chewy texture" but "tend to get soggy relatively quickly" (October 2026) — mid-scale.'],
        aroma_punch: [R + 'B537725686/', '"A simple yet very appealing flavor" (October 2026) — placed low.'],
      },
      confidence: 'medium', sources: [TB, NEWS, R + 'B536826628/', R + 'B536837240/', R + 'B537040590/', R + 'B538074690/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine, cash only; one diner found the machine confusing (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区北久宝寺町2-1-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; operator news of the 12 August 2026 opening; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区北久宝寺町二丁目1番2号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536826628/', R + 'B536837240/', R + 'B538231565/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (with free mini fried rice)', '¥980', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('', '', 'Shio ramen (with free mini fried rice)', '¥980', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'miso'),
      it('にんにくラーメン', '', 'Garlic ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'garlic'),
      it('', '', 'All-you-can-eat fried rice (with a ramen)', '¥380', 'Sides', 'ask', 'no', 'August–October 2026.', 'chahan_free'),
      it('', '', 'Flavored egg', '¥120', 'Toppings', '', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
    ] }, {
    cuisine: '昭和の中華そばの店 (24席)、醤油・塩・味噌・澄んだあっさりの鶏ガラのスープに鶏油とほのかに貝、自家製の細いストレート麺・中華そば980円、塩ラーメン980円、みそラーメン、にんにくラーメン・味玉120円、チャーシュー増し、替え玉・ラーメンには小さいチャーハンが無料、380円でチャーハン食べ放題・餡から手作りの餃子、唐揚げ、キムチ・16時から: アジフライ、メンチカツ、厚切りハムカツ、クリームコロッケ、コロッケ、赤いソーセージ、レバーとにんにくの炒め物・卓上に辛味噌、にんにく酢、チャーハンのたれ、ラー油、餃子のたれ、ラーメンこしょう',
    neighborhood: '中央区北久宝寺町2-1-2。堺筋本町駅10番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ、餃子や揚げ物。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラのスープに鶏油とほのかに貝、チャーシュー、チャーハンに卵。',
    notes: '[ラーメン・堺筋本町、深夜0時半まで中華そばと無料のチャーハン] 堺筋本町駅から徒歩2分、24席の活気ある店で、2026年8月に開店。売りは、どの一杯にも小さいチャーハンが無料でつき、380円足せば食べ放題になること。CoCo壱番屋やラーメン大戦争のフランチャイズも運営する大阪の会社が目指したのは、子どものころの昭和の町の中華そば。自家製麺と、醤油・塩・味噌の澄んだあっさりのスープ。鶏ガラに鶏油、ほのかな貝、少し甘い醤油に細いストレート麺という声で、東京風に大阪のひねりという人も。チャーハン目当てに YouTuber も撮影に来た。おかわりは2分ほどで出てきて、4〜5杯食べたという声もあるが、深夜に来た人はチャーハンの味が薄く、にんにくラーメンは熱くなかったという。16時を過ぎると、アジフライから赤いソーセージまで昭和の食堂のおかずが並ぶ。券売機で現金のみ、毎日深夜0時半まで。',
  });
}

// ================================================================ 大衆食堂スタンド そのだ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27091926/'; const R = TB + 'dtlrvwlst/';
  const TO = 'https://www.timeout.jp/osaka/ja/レストラン/taishushokudo-stand-sonoda-tanimachi';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_stand_sonoda_tanimachi', name: '大衆食堂スタンド そのだ (Taishu Shokudo Stand Sonoda)', category: 'OMNI',
    lat: 34.673475, lng: 135.517814, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; much of the menu is fried in batter or crumbs (menchi katsu, kara-age, yurinchi, croquettes) or wheat noodles, and the chashu egg and meat tofu are soy-seasoned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-centred diner menu (chashu, menchi katsu, meat tofu, fried chicken); the Chinese soba broth is seafood-based.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30); hours may change (Tabelog). Set meals at lunch with free rice, miso soup and pickles refills, and the full menu all day, so drinking starts at 11:00 (August and October 2026 reviews). No reservations (Tabelog). Cash only: no cards, e-money or QR (Tabelog). Smoking allowed, except 11:00–14:00 non-smoking (Tabelog). Self-service water (August 2026 review). Despite "Stand" in the name, there are chairs (October 2026 review). Tabelog Izakaya 100 in 2021. Opened 11 May 2016 (Tabelog). The original Sonoda: the brand has since opened in Tokyo and Fukuoka, and the main shop is this one on the Karahori shopping street (Time Out Osaka, December 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tanimachi 6-3-7, at the end of the Karahori shopping street — 4 min from Tanimachi 6-chome Stn',
    cuisine: 'Showa-retro public diner and day-drinking izakaya · lunch set meals about ¥1,000 with free rice refills: chashu egg, mapo tofu (Sichuan-hot), yurinchi, yakisoba · signature chashu egg (tender chashu under a fried egg, with cabbage and mayonnaise) ¥726, Kagoshima premium chashu egg · menchi katsu with aurora sauce ¥550 · meat tofu ¥748 · anchovy and boiled-egg potato salad ¥528 · beef skirt tataki ¥759 · chicken nanban, kara-age, croquettes, spicy fries with an aurora-sauce dip, edamame peperoncino · celery pickled in nam pla, celery and bean-sprout namul, garland chrysanthemum namul, menma · Chinese soba ¥990 (seafood soy broth, flat noodles, chashu and clams), usually the finish · Kohaku Ebisu draft ¥528, Baisu sour, sudachi sour, Pattaya sour, lemon sour ¥528, highball ¥528, sake and wine',
    website: null, gmaps: gm('大衆食堂スタンド そのだ 谷町六丁目'), menu_url: null,
    notes: "[Izakaya · Tanimachi 6-chome, the original Sonoda: chashu egg and drinks from 11 am] A lively Showa-retro diner at the end of the Karahori shopping street that opened in 2016, made Tabelog's Izakaya 100 in 2021 and has since spawned branches in Tokyo and Fukuoka. By day office workers pack in for ¥1,000 set meals with free rice refills; at any hour others settle in with a Kohaku Ebisu or a Baisu sour. The dish everyone orders is the chashu egg, tender chashu under a fried egg; then the menchi katsu under aurora sauce, meat tofu, nam-pla-pickled celery and chicken nanban. Many finish with the Chinese soba, a seafood-based shoyu with flat noodles, chashu and clams, which one diner called a bowl you wouldn't expect from a tavern. One diner thinks the site was once a butcher's. Cash only, no bookings, and smoking is allowed after 2 pm. A returning diner found the service slipping on a quiet September 2026 afternoon.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Public diner and izakaya that opened on 11 May 2016 (Tabelog); Tabelog Izakaya 100 in 2021 (Tabelog). The main shop of the Sonoda brand, which has expanded to Tokyo and Fukuoka (Time Out Osaka, December 2024). A diner understands it to be a sister shop of Taifuu Hanten nearby, which also serves the chashu egg (September 2026 review).', philosophy: null, specialty: 'Chashu egg; menchi katsu; meat tofu; Chinese soba.',
      anecdotes: [
        { text: '"The Chinese Soba had a rich broth with a robust flavor, making it quite delicious. The noodles had a nice chewy texture and elasticity. It was a bowl of high quality that you wouldn\'t expect from a popular tavern." — October 2026, Chinese soba ¥990.', source: R + 'B537234837/' },
        { text: '"This time, I ordered the Chinese-style ramen for the first time, and the light broth was easy to drink and delicious. The signature chashu egg was still impressively generous in portion." — October 2026, a return visit.', source: R + 'B532357926/' },
      ],
      japanese_sources_summary: '食べログ: 大衆食堂スタンド そのだ、大阪市中央区谷町6-3-7、谷町六丁目駅から徒歩4分、毎日11:00〜23:00 (L.O. 22:30)、予約不可、カード・電子マネー・QR不可、喫煙可 (11:00〜14:00は禁煙)、食べログ 居酒屋 百名店 2021、オープン日2016年5月11日。Time Out (2024年12月): 今では東京や福岡に進出した人気店だが、本店は大阪・谷町の空堀商店街、名物のチャーシューエッグ定食880円、チャーシューエッグは単品でも、中華そば968円、ナポリタン858円、ラム串180円、肉豆腐715円、メンチカツ418円。口コミ(2024年12月〜2026年10月): 昼は定食1000円ほどでご飯 (と味噌汁、漬物) はおかわり自由、麻婆豆腐 (四川式で辛い)、油淋鶏、焼きそば、名物メンチカツ550円、チャーシューエッグ726円、鹿児島県産プレミアチャーシューエッグ、名物肉豆腐748円、アンチョビと煮卵のポテトサラダ528円、牛ハラミのたたき759円、チキン南蛮、唐揚げ、コロッケ、スパイシーなポテト、枝豆のペペロンチーノ、セロリのナンプラー漬け、セロリともやしのナムル、春菊のナムル、メンマ、中華そば990円 (魚介の醤油スープに平打ち麺、チャーシューとあさり、締めに頼む人が多い)、Kohaku Ebisu の生528円、Baisu のサワー、すだちサワー、新しい Pattaya のサワー、レモンサワー528円、ハイボール528円、昼から会社員でいっぱい、昼飲みの人も、元は肉屋だったという声、店員の対応が悪かったという声 (2026年9月)、近くの Taifuu Hanten の姉妹店らしいという声。',
      confidence: 'medium', sources: [TB, TO, R + 'B526239460/', R + 'B532357926/', R + 'B534748270/', R + 'B537054289/', R + 'B537234837/', R + 'B519786042/', R + 'B454868779/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only, no reservations; smoking allowed after 14:00 (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区谷町6-3-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区谷町六丁目3番7号 (go) 5m; OSM node/5468680721 「そのだ」 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537234837/', R + 'B534748270/', R + 'B519786042/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('名物メンチカツ', '', 'Signature menchi katsu', '¥550', 'Dishes', 'no', 'no', 'October 2026.', 'menchi'),
      it('', '', 'Chashu egg', '¥726', 'Dishes', 'ask', 'no', 'October 2026.', 'chashu_egg'),
      it('名物肉豆腐', '', 'Signature meat tofu', '¥748', 'Dishes', 'ask', 'no', 'October 2026.', 'niku_dofu'),
      it('', '', 'Anchovy and boiled-egg potato salad', '¥528', 'Dishes', 'ask', 'no', 'October 2026.', 'potesara'),
      it('', '', 'Beef skirt tataki', '¥759', 'Dishes', 'ask', 'no', 'October 2026.', 'harami'),
      it('', '', 'Chinese soba', '¥990', 'Noodles', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('', '', 'Mapo tofu set meal (rice refills free)', '¥1,000', 'Lunch set meals', 'ask', 'no', 'August 2026.', 'mapo_set'),
    ] }, {
    cuisine: '昭和レトロな大衆食堂で昼飲みの居酒屋・昼は1000円ほどの定食でご飯はおかわり自由: チャーシューエッグ、麻婆豆腐 (四川式で辛い)、油淋鶏、焼きそば・名物のチャーシューエッグ (やわらかいチャーシューに目玉焼き、キャベツとマヨネーズ) 726円、鹿児島県産プレミアチャーシューエッグ・オーロラソースのメンチカツ550円・肉豆腐748円・アンチョビと煮卵のポテトサラダ528円・牛ハラミのたたき759円・チキン南蛮、唐揚げ、コロッケ、オーロラソースのディップのスパイシーなポテト、枝豆のペペロンチーノ・セロリのナンプラー漬け、セロリともやしのナムル、春菊のナムル、メンマ・中華そば990円 (魚介の醤油スープに平打ち麺、チャーシューとあさり)、締めに頼む人が多い・Kohaku Ebisu の生528円、Baisu のサワー、すだちサワー、Pattaya のサワー、レモンサワー528円、ハイボール528円、日本酒、ワイン',
    neighborhood: '中央区谷町6-3-7、空堀商店街の端。谷町六丁目駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。メンチカツ、唐揚げ、油淋鶏、コロッケなど衣の揚げ物や小麦の麺が多く、チャーシューエッグや肉豆腐は醤油の味つけ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、メンチカツ、肉豆腐、鶏の揚げ物など肉が中心の食堂で、中華そばのスープは魚介。',
    notes: '[居酒屋・谷町六丁目、元祖そのだ、朝11時からチャーシューエッグとお酒] 空堀商店街の端にある、にぎやかな昭和レトロの大衆食堂。2016年に開店し、2021年に食べログ 居酒屋 百名店に選ばれ、今では東京や福岡にも店がある。昼は会社員がご飯おかわり自由の1000円の定食に詰めかけ、時間を問わず Kohaku Ebisu や Baisu のサワーで腰を落ち着ける人も。みんなが頼むのは、やわらかいチャーシューに目玉焼きをのせたチャーシューエッグ。それからオーロラソースのメンチカツ、肉豆腐、セロリのナンプラー漬け、チキン南蛮。締めに頼む人が多いのは中華そばで、魚介の醤油スープに平打ち麺、チャーシューとあさり。大衆酒場とは思えない質の一杯という声も。元は肉屋だったと考える人も。現金のみ、予約不可、14時からは喫煙可。2026年9月には、空いている午後なのに対応が悪かったという再訪した人の声も。',
  });
}

// ================================================================ 﨑ちゃんラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27144541/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/sakichan.ramen/'; const IGY = 'https://www.instagram.com/yakiniku.kazuchan/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'osaka_sakichan_ramen_minamihonmachi', name: '﨑ちゃんラーメン (Sakichan Ramen)', category: 'OMNI',
    lat: 34.682949, lng: 135.508393, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-based broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu beef tendon and a seafood-based broth (beef-bone broth for the WHITE).',
    hours_raw: 'Mon–Sat 11:00–15:00 (last order 14:30); closed Sunday and public holidays; hours may change (Tabelog). Lunch only: the ramen is served by day inside the yakiniku and horumon restaurant 和ちゃん (Instagram @yakiniku.kazuchan), which is a yakiniku restaurant at night (2025 reviews; Instagram). No reservations (Tabelog). Cards and PayPay; no e-money (Tabelog). Non-smoking; children welcome (Tabelog). Full around 12:30 on a September 2025 visit. Opened 9 September 2024 (Tabelog; Instagram profile). The newest Tabelog review is from September 2025, so check Instagram @sakichan.ramen before going.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamihonmachi 1-5-1, 1F — 193 m from Sakaisuji-Hommachi Stn',
    cuisine: 'Lunchtime wagyu beef-tendon chuka soba in a yakiniku restaurant · three bowls: BLACK (soy-based), WHITE (beef-bone broth), RED (spicy, with Korean chili) · beef tendon BLACK ¥780 · Mashi Mashi BLACK (extra tendon and green onion) ¥1,100 · toppings: A5 wagyu beef tendon, menma, green onion, onion, egg yolk · beef tendon bokkake rice ¥350 · rice set with kimchi · limited chilled lemon ramen and chilled mazesoba (August 2025)',
    website: IG, gmaps: gm('﨑ちゃんラーメン 南本町'), menu_url: null,
    notes: "[Ramen · Minamihonmachi, a yakiniku shop's lunchtime beef-tendon chuka soba] By night a yakiniku and horumon restaurant in the Minamihonmachi office district; at lunch, since September 2024, a ramen counter that puts the yakiniku kitchen's A5 wagyu beef tendon on chuka soba. There are three bowls: the dark, soy-based BLACK, the beef-bone WHITE and the chili-red RED. One diner expected beef and found seafood first: the BLACK is a sweet, seafood-scented shoyu that looks heavier than it tastes, with slow-simmered tendon, chopped onion and green onion, and an egg yolk to stir in. The RED is sweet and spicy with plenty of Korean chili. Noodles are medium and chewy. The plain BLACK was ¥780 in 2025; the Mashi Mashi with extra tendon and green onion ¥1,100, and a ¥350 bowl of tendon bokkake rice finishes the job. The newest review is from September 2025, so check the shop's Instagram first.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Lunch-only ramen that opened on 9 September 2024 (Tabelog) inside the yakiniku and horumon restaurant 和ちゃん, which serves yakiniku at night (Instagram @yakiniku.kazuchan; 2025 reviews). A diner credits the bowls to the yakiniku chef (May 2025 review).', philosophy: 'Ramen built on the same wagyu the yakiniku uses; the sign promises the ultimate ramen made with Japanese wagyu beef tendon (April 2025 reviews).', specialty: 'Wagyu beef-tendon chuka soba, BLACK, WHITE and RED.',
      anecdotes: [
        { text: '"The broth was a deep-colored soy sauce, with a sweet seafood aroma that balanced the flavors. I initially imagined it would be beef-based, but the seafood flavor was more prominent." — September 2025, beef tendon BLACK ¥780.', source: R + 'B534895117/' },
        { text: '"The beef tendon was generously sized, thoroughly simmered, and surprisingly tender. The sweetness of the fat melded with the umami of the meat." — April 2025, beef tendon chuka soba RED.', source: R + 'B509299603/' },
      ],
      japanese_sources_summary: '食べログ: 﨑ちゃんラーメン、大阪市中央区南本町1-5-1 安平ビル 1F、堺筋本町駅から193m、月〜土11:00〜15:00 (L.O. 14:30)、日曜・祝日休み、予約不可、カード・PayPay可、電子マネー不可、禁煙、子供可、オープン日2024年9月9日。インスタ (@sakichan.ramen): 﨑ちゃんラーメン、9/9堺筋本町にOPEN。焼肉の店のインスタ (@yakiniku.kazuchan): 焼肉ホルモン 和ちゃん/堺筋本町。口コミ(2025年4月〜9月): 夜は焼肉、昼はラーメン、A5の和牛の牛すじ、BLACK (醤油ベース)、WHITE (牛骨のスープ)、RED (韓国唐辛子で辛い)、牛すじ BLACK 780円、マシマシ BLACK 1100円 (牛すじとねぎ増し)、牛すじのぼっかけご飯350円、キムチつきのご飯セット、限定の冷やしレモンラーメンと冷やしまぜそば、メンマ、ねぎ、玉ねぎ、卵黄、魚介の醤油の甘い香り、見た目ほど重くない、麺は中太でもちもち (ストレート、平打ち、少し縮れなど声はさまざま)、12時半ごろ満席、いちばん新しい口コミは2025年9月。',
      confidence: 'low', sources: [TB, IG, IGY, R + 'B505962174/', R + 'B507861042/', R + 'B509299603/', R + 'B511260374/', R + 'B512094503/', R + 'B534895117/'] },
    ramen: {
      broth_base: ['gyokai', 'beef'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium to medium-thick and chewy; diners variously call them straight, flat or slightly curled, and one found them a little thinner than medium (2025 reviews).' },
      regional_style: [], sub_genre: ['chuka soba'],
      signature_bowl: 'Beef tendon chuka soba BLACK, ¥780 (September 2025).',
      chashu: 'No chashu: slow-simmered A5 wagyu beef tendon (2025 reviews).',
      notable_toppings: ['wagyu beef tendon', 'egg yolk', 'onion', 'green onion', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef tendon; seafood broth.' },
      pantheon: 'Minamihonmachi\'s yakiniku-kitchen ramen: sweet seafood shoyu under A5 wagyu beef tendon, raw onion and egg yolk, at lunch only.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B505962174/', '"The broth, while looking rich, is not overly heavy" (May 2025) — mid-scale.'],
        oiliness: [R + 'B509299603/', '"The sweetness of the fat melded with the umami of the meat" (April 2025, RED) — no oil noted beyond the tendon fat; mid-scale.'],
        clarity: [R + 'B534895117/', '"The broth was a deep-colored soy sauce" (September 2025) — placed low.'],
        tare_strength: [R + 'B512094503/', '"The soy-based broth didn\'t taste as rich as it looked" (August 2025) — mid-scale.'],
        noodle_firmness: [R + 'B534895117/', '"They had a chewy texture" (September 2025); "a delightful chewy texture" (' + R + 'B512094503/).'],
        aroma_punch: [R + 'B534895117/', '"A sweet seafood aroma that balanced the flavors" — mid-scale.'],
      },
      confidence: 'low', sources: [TB, R + 'B505962174/', R + 'B509299603/', R + 'B511260374/', R + 'B512094503/', R + 'B534895117/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch only, Monday to Saturday; check Instagram before going (2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町1-5-1 安平ビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current; most recent review September 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町一丁目5番1号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505962174/', R + 'B511260374/', R + 'B534895117/'],
    price_note: 'Prices from May–September 2025 reviews; none newer.', last_checked: TODAY, items: [
      it('', '', 'Beef tendon chuka soba BLACK (soy-based)', '¥780', 'Ramen', 'no', 'no', 'May and September 2025.', 'black'),
      it('', '', 'Mashi Mashi BLACK (extra beef tendon and green onion)', '¥1,100', 'Ramen', 'no', 'no', 'August 2025.', 'mashimashi'),
      it('', '', 'Beef tendon chuka soba WHITE (beef-bone broth)', '', 'Ramen', 'no', 'no', 'August 2025.', 'white'),
      it('', '', 'Beef tendon chuka soba RED (spicy)', '', 'Ramen', 'no', 'no', 'April and August 2025.', 'red'),
      it('', '', 'Beef tendon bokkake rice', '¥350', 'Sides', 'ask', 'no', 'August 2025.', 'bokkake'),
    ] }, {
    cuisine: '焼肉の店の昼の和牛の牛すじ中華そば・3種: BLACK (醤油ベース)、WHITE (牛骨のスープ)、RED (韓国唐辛子で辛い)・牛すじ BLACK 780円・マシマシ BLACK (牛すじとねぎ増し) 1100円・トッピング: A5の和牛の牛すじ、メンマ、ねぎ、玉ねぎ、卵黄・牛すじのぼっかけご飯350円・キムチつきのご飯セット・限定の冷やしレモンラーメンと冷やしまぜそば (2025年8月)',
    neighborhood: '中央区南本町1-5-1 安平ビル 1F。堺筋本町駅から193m',
    gf_detail: 'グルテンフリーではありません。醤油ベースのスープに小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。和牛の牛すじと魚介ベースのスープ (WHITE は牛骨のスープ)。',
    notes: '[ラーメン・南本町、焼肉の店の昼の牛すじ中華そば] 南本町のオフィス街で、夜は焼肉とホルモンの店。昼は2024年9月からラーメンの店になり、焼肉の厨房のA5の和牛の牛すじを中華そばにのせる。一杯は3種で、色の濃い醤油ベースの BLACK、牛骨の WHITE、唐辛子で赤い RED。牛の味を想像して食べると、まず魚介が来るという声。BLACK は甘い魚介の香りの醤油で、見た目ほど重くなく、じっくり煮た牛すじ、刻んだ玉ねぎとねぎ、混ぜて食べる卵黄。RED は韓国唐辛子たっぷりの甘辛。麺は中太でもちもち。2025年はふつうの BLACK が780円、牛すじとねぎ増しのマシマシが1100円で、350円の牛すじのぼっかけご飯で締めくくる。いちばん新しい口コミは2025年9月なので、先に店のインスタで確認を。',
  });
}

save();
