// Ginza Station half-mile sweep (805 m), batch 103 — landmarks plus one ramen shop (all OMNI).
//   + 伊太そば (Ita Soba: tonkotsu "Italian ramen" in Shiodome Yokochō; ramen profile)
//   + ビヤホールライオン 銀座七丁目店 (Japan's oldest beer hall, 1934; registered cultural property)
//   + 東京會舘 銀座スカイラウンジ (Tokyo Kaikan's former revolving lounge, Kōtsū Kaikan 15F)
//   + 日比谷松本楼 (Hibiya Park yōshoku: 1F grill and terrace; the 3F Bois de Boulogne is its own record)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openSweep(TODAY);

// ================================================================ 伊太そば
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13319162/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:00', '14:30'], ['17:00', '22:00']); const we = day(['11:00', '17:00']);
  put({
    id: 'tokyo_ita_soba_caretta_shiodome', name: '伊太そば (Ita Soba)', category: 'OMNI',
    lat: 35.664886, lng: 139.762492,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles, pizza at night.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu (pork-bone) broth with egg yolk, cheese, prosciutto and chashu.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 17:00–22:00; Sat, Sun and holidays 11:00–17:00 (Tabelog). Evenings run as "Ita Bar" with pizza and sake. Mobile/QR ordering; cash not accepted (May 2026 review).',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Caretta Shiodome B2F, Shiodome Yokochō food hall — 1 min from Shiodome Stn, 6 min from Shimbashi',
    cuisine: 'Tonkotsu "Italian ramen" · signature tonkotsu carbonara ramen (egg yolk, cheese, black pepper, prosciutto) · tonkotsu Genovese · seasonal fruit cold noodles · lunch sets ¥1,350 · finish with rice as risotto · pizza bar at night', cuisine_type: 'ramen',
    website: 'https://www.favy.jp/shops/279698', gmaps: gm('伊太そば カレッタ汐留'), menu_url: null,
    notes: "[Ramen · tonkotsu carbonara ramen in the Shiodome Yokochō food hall] Originally an Italian restaurant in Narashino, Chiba, reinvented as a ramen shop in a TV revival project led by Shinobu Sakagami of Gindaco, it moved into Caretta Shiodome's Shiodome Yokochō food hall in February 2026. You sit anywhere in the hall and order by phone. The signature tonkotsu carbonara ramen is a creamy pork-bone broth thickened with egg yolk, cheese and black pepper, clinging to thin, slightly firm noodles like pasta. It's topped with prosciutto, and fans add rice to finish it risotto-style. There's also a basil-scented tonkotsu Genovese, a plain tonkotsu ramen, cold ramen, and seasonal fruit cold noodles made with Asakusa Kaikarō noodles (Shine Muscat, then Nagano Purple grapes). Lunch sets are ¥1,350; the special has three slices of chashu and triple cheese. At night it becomes \"Ita Bar\", serving pizza, meat and sake.",
    chef_bio: { chef_name: null, roles: [], origin: 'Relocated to Caretta Shiodome in February 2026 from Narashino, Chiba (June–July 2026 reviews); Tabelog opening 20 February 2026', background: 'Italian restaurant turned ramen shop in a revival project by Shinobu Sakagami (Gindaco) (June 2026 review).', philosophy: null, specialty: 'Tonkotsu carbonara ramen.',
      anecdotes: [
        { text: '"The base is a creamy tonkotsu broth, enhanced with egg yolk, cheese, and black pepper, creating a rich and flavorful taste reminiscent of carbonara… The slightly thick broth clings to the noodles, allowing for a pasta-like ramen experience." — June 2026, ¥1,350 lunch set.', source: R + 'B532511685/' },
        { text: '"The extremely thin noodles from Asakusa Kaikarou, combined with arugula and balsamic vinegar, harmonized beautifully with the sweetness and freshness of the Nagano Purple grape jelly and the saltiness of the prosciutto." — September 2026.', source: R + 'B534384352/' },
      ],
      japanese_sources_summary: '食べログ: 伊太そば、港区東新橋1-8-2 カレッタ汐留B2F(汐留横丁)、汐留駅徒歩1分、平日11:00〜14:30・17:00〜22:00、土日祝11:00〜17:00、席数250(フードコート)、予約可、2026年2月20日開店、favy.jp。2026年の口コミ: 千葉・習志野のイタリアンがSakagami氏(銀だこ)のテレビの再生企画でラーメン店に、2026年2月にカレッタ汐留へ移転、豚骨カルボナーララーメン(クリーミーな豚骨に卵黄・チーズ・黒胡椒、生ハム、細めでやや硬めの麺、ご飯でリゾット風に)、ランチセット1,350円、特製はチャーシュー3枚とチーズ3倍、豚骨ジェノベーゼ(バジル香る豚骨)、豚骨ラーメンは上品、冷やし中華、浅草開化楼の極細麺のシャインマスカットやナガノパープルの冷製、ポルチーニのまぜそば約1,300円、夜は「イタバル」でピザや日本酒、席はどこでも、モバイル注文、現金不可。',
      confidence: 'medium', sources: [TB, R + 'B532511685/', R + 'B526256152/', R + 'B527105704/', R + 'B527831875/', R + 'B534384352/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['other'], aroma_oil: ['other'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, slightly firm noodles likened to capellini (2026); the cold fruit noodles use very thin Asakusa Kaikarō noodles.' },
      regional_style: [], sub_genre: ['ramen', 'other'],
      signature_bowl: '豚骨カルボナーララーメン (tonkotsu carbonara ramen) — ¥1,100 in May 2026; ¥1,350 as a lunch set in June 2026.',
      chashu: 'Pork chashu; the special carries three slices.',
      notable_toppings: ['prosciutto', 'egg yolk', 'cheese', 'black pepper', 'pea shoots'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth with egg yolk and cheese.' },
      pantheon: 'A food-hall bowl that is half carbonara: creamy tonkotsu thickened with egg yolk, cheese and black pepper, thin capellini-like noodles under prosciutto, and rice to turn the last of it into risotto.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B532511685/', 'Creamy tonkotsu broth enhanced with egg yolk, cheese and black pepper — "a rich and flavorful taste"; another diner: "The broth was rich" (' + R + 'B527831875/).'],
        oiliness: [R + 'B532511685/', 'No source mentions oil directly; placed mid-scale from the creamy, slightly thick broth emulsified with egg yolk and cheese.'],
        clarity: [R + 'B532511685/', '"A creamy tonkotsu broth… The slightly thick broth clings to the noodles" — an opaque paitan.'],
        tare_strength: [R + 'B526815729/', '"Just the right amount of saltiness and a delightful combination of tonkotsu and cheese."'],
        noodle_firmness: [R + 'B526256152/', '"The slightly firm noodles resembled capellini"; another: "the noodles were thin" (' + R + 'B527831875/).'],
        aroma_punch: [R + 'B527105704/', '"A refined aroma reminiscent of Italian pasta"; the Genovese is a "fragrant basil-infused tonkotsu" (' + R + 'B526256152/).'],
      },
      confidence: 'medium', sources: [R + 'B532511685/', R + 'B526815729/', R + 'B526256152/', R + 'B527105704/', R + 'B527831875/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by phone (QR); cashless.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_approx: 'block', address_ja: '〒105-7090 東京都港区東新橋1-8-2 カレッタ汐留 B2F 汐留横丁',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都港区東新橋一丁目8番 (lot) 42m. Tabelog gives the same point as another Shiodome Yokochō stall (肉とパスタと酒) — both are inside one food hall — so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532511685/', R + 'B527831875/', R + 'B537048421/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('豚骨カルボナーララーメン', '', 'Tonkotsu carbonara ramen', '¥1,100', 'Ramen', 'no', 'no', 'May 2026.', 'carbonara'),
      it('豚骨カルボナーラ ランチセット', '', 'Tonkotsu carbonara lunch set', '¥1,350', 'Lunch', 'no', 'no', 'June 2026.', 'carbonara_set'),
      it('豚骨ジェノベーゼ ランチセット', '', 'Tonkotsu Genovese lunch set', '¥1,350', 'Lunch', 'no', 'no', '2026.', 'genovese_set'),
      it('ポルチーニのカルボナーラまぜそば', '', 'Porcini carbonara mazesoba', '¥1,300', 'Ramen', 'no', 'no', 'About, October 2026.', 'porcini_maze'),
    ] }, {
    cuisine: '豚骨の「イタリアンラーメン」・看板の豚骨カルボナーラ(卵黄、チーズ、黒胡椒、生ハム)・豚骨ジェノベーゼ・季節の果物の冷製麺・ランチセット1,350円・締めはご飯でリゾット・夜はピザのバル',
    neighborhood: 'カレッタ汐留B2F、汐留横丁のフードホール。汐留駅から徒歩1分、新橋から徒歩6分',
    gf_detail: 'グルテンフリーではありません。小麦のラーメンの麺、夜はピザ。',
    vegan_detail: 'ヴィーガンではありません。卵黄、チーズ、生ハム、チャーシューの入る豚骨スープ。',
    notes: '[ラーメン・汐留横丁のフードホールで豚骨カルボナーラ] もとは千葉・習志野のイタリアンで、銀だこのSakagami氏によるテレビの再生企画でラーメン店に生まれ変わり、2026年2月にカレッタ汐留の汐留横丁へ。ホールの好きな席に座り、スマホで注文します。看板の豚骨カルボナーララーメンは、クリーミーな豚骨スープを卵黄・チーズ・黒胡椒でとろりとさせ、細くやや硬めの麺にパスタのように絡みます。生ハムがのり、最後はご飯を入れてリゾット風にするのがファンの流儀。バジルの香る豚骨ジェノベーゼ、普通の豚骨ラーメン、冷やしラーメン、浅草開化楼の麺を使う季節の果物の冷製麺(シャインマスカット、次いでナガノパープル)も。ランチセットは1,350円、特製はチャーシュー3枚にチーズ3倍。夜は「イタバル」になり、ピザや肉料理、日本酒を出します。',
  });
}

// ================================================================ ビヤホールライオン 銀座七丁目店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13060180/'; const R = TB + 'dtlrvwlst/';
  const early = day(['11:30', '22:00']); const late = day(['11:30', '22:30']);
  put({
    id: 'tokyo_beer_hall_lion_ginza7', name: 'ビヤホールライオン 銀座七丁目店 (Beer Hall Lion Ginza 7-chome)', category: 'OMNI',
    lat: 35.669211, lng: 139.763168,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a beer hall (draft beer is brewed from barley) serving currywurst, fish and chips, fried oysters and roast beef with gravy.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: roast beef, currywurst, fish and chips, fried oysters.',
    hours_raw: 'Sun–Thu 11:30–22:00 (L.O. 21:30); Fri, Sat and holiday eves 11:30–22:30 (L.O. 22:00); open year-round; 10% surcharge 31 Dec–3 Jan (Tabelog). No service charge. No reservations on 1F (course bookings via the 2F restaurant).',
    hours: { 0: early, 1: early, 2: early, 3: early, 4: late, 5: late, 6: early }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Lion Bldg 1F, Ginza 7-chōme on Chūō-dōri — 3 min from Ginza Stn',
    cuisine: 'Japan’s oldest surviving beer hall (1934) · Art Deco hall with a barley-harvest glass mosaic · Sapporo Black Label in big mugs · Ginza roast beef (from 13:30 weekdays, 12:30 weekends) · currywurst, fish and chips', cuisine_type: 'other',
    website: 'https://www.ginzalion.jp/shop/brand/lion/shop1.html', gmaps: gm('ビヤホールライオン 銀座七丁目店'), menu_url: null,
    notes: "[Beer hall · Japan's oldest beer hall, 1934] Opened in 1934, designed by Eizo Sugawara and spared in the war, this is Japan's oldest surviving beer hall and a registered tangible cultural property: a \"drinkable\" landmark. Inside the heavy arches and scratch-tile façade is an Art Deco hall with barley-shaped green mosaic columns and a great glass mosaic of the barley harvest over the counter. Drink Black Label by the mug (the mega mug equals three glasses) with the signature currywurst, fish and chips, fried oysters, or the infrared-roasted Ginza roast beef with gravy, carved from 13:30 on weekdays and 12:30 at weekends. Expect queues on Friday evenings and many overseas visitors; prices have risen. The 2F beer restaurant serves dishes such as omu-hayashi and takes course bookings.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 April 1934 (Tabelog)', background: 'Ginza Lion beer hall (ginzalion.jp); registered tangible cultural property, designed by Eizo Sugawara (October 2026 review).', philosophy: null, specialty: 'Draft beer; Ginza roast beef.',
      anecdotes: [
        { text: '"Welcome to Beer Hall Lion, established in 1934 (Showa 9). Designed by Eizo Sugawara, this remarkable building is recognized as Japan\'s oldest beer hall and is designated as a registered tangible cultural property." — October 2026.', source: R + 'B479339615/' },
        { text: '"I ordered the signature dish, \'Ginza Roast Beef,\' which is first served at 13:30 on weekdays and 12:30 on weekends and public holidays." — October 2026.', source: R + 'B537841946/' },
      ],
      japanese_sources_summary: '食べログ: ビヤホールライオン 銀座七丁目店、銀座7-9-20 銀座ライオンビル1F、銀座駅徒歩3分、日〜木11:30〜22:00、金土祝前日11:30〜22:30、年中無休、12/31〜1/3は年末年始料金10%、サービス料なし、予約不可(飲み放題コースは2階「ビヤレストラン銀座ライオン 銀座七丁目」へ)、1934年4月8日開店、公式サイト ginzalion.jp。2026年10月の口コミ: 登録有形文化財で「飲める」観光名所、黒ラベルの特大ジョッキ(グラス3杯分)、名物カリーヴルスト、1934年(昭和9年)創業、Eizo Sugawara設計、戦災を免れた日本最古のビヤホール、重厚なアーチとスクラッチタイル、アール・デコの空間、大麦の収穫を描くガラスモザイク画、麦の形の緑のモザイクの柱、値上がり、2階のビヤレストランでオムハヤシ、赤外線ロースターで焼く「銀座ローストビーフ」は平日13:30・土日祝12:30から、金曜18時半に約20人の行列、フィッシュ&チップス、カキフライ、海外からの客が多い、タイル床の喫煙所。',
      confidence: 'high', sources: [TB, R + 'B479339615/', R + 'B537841946/', R + 'B463380988/', R + 'B537917107/', R + 'B537738694/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No 1F reservations; queues on Friday evenings.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-9-20 銀座ライオンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目9番20号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537841946/', R + 'B537917107/'],
    price_note: 'No prices captured; ¥2,000–8,000 in reviews.', last_checked: TODAY, items: [
      it('銀座ローストビーフ', '', 'Ginza roast beef with gravy (from 13:30 weekdays, 12:30 weekends)', '', 'Signature', 'ask', 'no', 'October 2026.', 'roast_beef'),
      it('カリーヴルスト', '', 'Currywurst', '', 'Snacks', 'ask', 'no', 'October 2026.', 'currywurst'),
      it('フィッシュ&チップス', '', 'Fish and chips', '', 'Snacks', 'no', 'no', 'October 2026.', 'fish_chips'),
      it('黒ラベル 特大ジョッキ', '', 'Sapporo Black Label, mega mug', '', 'Beer', 'no', 'vegan', 'October 2026.', 'black_label'),
    ] }, {
    cuisine: '現存する日本最古のビヤホール(1934年)・大麦の収穫のガラスモザイクのアール・デコの空間・ジョッキの黒ラベル・銀座ローストビーフ(平日13:30・土日12:30から)・カリーヴルスト、フィッシュ&チップス',
    neighborhood: '銀座ライオンビル1F、中央通りの銀座七丁目。銀座駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。生ビールは大麦から造られ、カリーヴルスト、フィッシュ&チップス、カキフライ、グレイビーのローストビーフを出すビヤホールです。',
    vegan_detail: 'ヴィーガンではありません。ローストビーフ、カリーヴルスト、フィッシュ&チップス、カキフライ。',
    notes: '[ビヤホール・1934年からの日本最古のビヤホール] 1934年開業、Eizo Sugawara設計で戦災を免れた、現存する日本最古のビヤホールで登録有形文化財、いわば「飲める」名所です。重厚なアーチとスクラッチタイルの外観の奥は、麦の形の緑のモザイクの柱と、カウンターの上に大麦の収穫を描いた大きなガラスモザイクのあるアール・デコの空間。黒ラベルをジョッキで(特大はグラス3杯分)、名物のカリーヴルスト、フィッシュ&チップス、カキフライ、赤外線ロースターで焼くグレイビーの銀座ローストビーフ(平日13:30、土日12:30から切り分け)とともに。金曜の夜は行列ができ、海外からの客も多く、値段は上がっています。2階のビヤレストランではオムハヤシなども出し、コースの予約も受けます。',
  });
}

// ================================================================ 東京會舘 銀座スカイラウンジ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13000137/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '21:30']);
  put({
    id: 'tokyo_tokyo_kaikan_ginza_sky_lounge', name: '東京會舘 銀座スカイラウンジ (Tokyo Kaikan Ginza Sky Lounge)', category: 'OMNI',
    lat: 35.674976, lng: 139.764425,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classic French courses: double consommé with seafood broth, sole meunière, white-wine-sauce dab and unlimited bread; butter sauces and flour dredging are standard in these dishes but not described here, and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: consommé, sole meunière, butter sauces, marron chantilly.',
    hours_raw: 'Daily 11:30–21:30 (L.O. lunch 14:00, tea 16:30, dinner 20:00); closed at New Year (Tabelog). 15% service charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo Kōtsū Kaikan 15F (lift to 14F, then stairs), facing Yūrakuchō Stn',
    cuisine: 'Tokyo Kaikan French with a city view · "Tokyo Kaikan and Me" course ¥6,600 · traditional double consommé · sole meunière · marron chantilly · former revolving lounge, every seat by the window', cuisine_type: 'french',
    website: 'https://www.kaikan.co.jp/branch/skylounge/', gmaps: gm('東京會舘 銀座スカイラウンジ 東京交通会館'), menu_url: null,
    notes: "[French · Tokyo Kaikan's lounge over Yūrakuchō Station] Tokyo Kaikan's 118-seat restaurant on the 15th floor of the Tokyo Kōtsū Kaikan, right in front of Yūrakuchō Station. It was once famous for revolving; it no longer turns, but every seat faces the windows over Ginza. Take the lift to 14F and the stairs up. It serves Tokyo Kaikan's traditional French in modern form: the \"Tokyo Kaikan and Me\" course (¥6,600) runs a quiche amuse, the house double consommé (much praised), and sole meunière, a classic since opening. Other dishes include a dab with white-wine butter sauce and the famous marron chantilly, with unlimited bread. Opinions split: some love it for celebrations; one diner felt you pay for the view. 15% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of Tokyo Kaikan (Tabelog listing)', background: 'Tokyo Kaikan (kaikan.co.jp).', philosophy: null, specialty: 'Double consommé; sole meunière; marron chantilly.',
      anecdotes: [
        { text: '"This lounge was once famous for its rotating feature, but it has since stopped spinning… The double consomme surprised me with its depth of aroma and flavor from the very first sip." — October 2026, "Tokyo Kaikan and Me" course.', source: R + 'B537709612/' },
        { text: '"Honestly, it feels like you\'re just paying for the location… The main branch in Marunouchi might be a bit tastier." — October 2026.', source: R + 'B537433639/' },
      ],
      japanese_sources_summary: '食べログ: 東京會舘 銀座スカイラウンジ、千代田区有楽町2-10-1 東京交通会館15F、有楽町駅前、118席(カウンター6、半個室)、毎日11:30〜21:30(L.O. 昼14:00・ティー16:30・夜20:00)、年末年始休、サービス料15%、公式サイト kaikan.co.jp。店の紹介: 歴史と伝統の東京會舘のフランス料理を現代風に、街の眺め。2026年10月の口コミ: かつての回転レストラン(今は回らない)、14階までエレベーターで15階へは階段、「東京會舘と私」コース6,600円(キッシュなど3種のアミューズ、伝統のダブルコンソメ、舌平目のムニエル)、カレイの白ワインソース、マロンシャンテリー、パンのおかわり自由、全席が窓向き、場所代という厳しい声、誕生日に、二人で約18,000円。',
      confidence: 'medium', sources: [TB, R + 'B537709612/', R + 'B537101930/', R + 'B537433639/', R + 'B537133782/', R + 'B537764931/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lift to 14F, stairs to 15F.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-10-1 東京交通会館 15F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目10番 (lot) 7m; OSM 東京交通会館 way/149371750 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537101930/', R + 'B537433639/'],
    price_note: 'Course price from October 2026 reviews; plus 15% service.', last_checked: TODAY, items: [
      it('東京會舘と私コース', '', '"Tokyo Kaikan and Me" course: amuse, double consommé, sole meunière, …', '¥6,600', 'Courses', 'no', 'no', 'October 2026.', 'kaikan_course'),
      it('ダブルコンソメ', '', 'Traditional double consommé', '', 'Soup', 'ask', 'no', '', 'consomme'),
      it('舌平目のムニエル', '', 'Sole meunière', '', 'Fish', 'no', 'no', '', 'sole_meuniere'),
      it('マロンシャンテリー', '', 'Marron chantilly', '', 'Dessert', 'ask', 'no', 'October 2026.', 'marron_chantilly'),
    ] }, {
    cuisine: '眺めのよい東京會舘のフレンチ・「東京會舘と私」コース6,600円・伝統のダブルコンソメ・舌平目のムニエル・マロンシャンテリー・かつての回転ラウンジ、全席窓向き',
    neighborhood: '東京交通会館15F(14階までエレベーター、そこから階段)、有楽町駅前',
    gf_detail: '要確認。ダブルコンソメ、舌平目のムニエル、白ワインソースのカレイ、おかわり自由のパンの古典的なフレンチのコース。バターソースや粉をはたく調理はこうした料理では一般的ですが、ここでの作り方は書かれておらず、グルテンフリーの対応の記載もありません。',
    vegan_detail: 'ヴィーガンではありません。コンソメ、舌平目のムニエル、バターソース、マロンシャンテリー。',
    notes: '[フレンチ・有楽町駅を見下ろす東京會舘のラウンジ] 有楽町駅前の東京交通会館15階にある東京會舘の118席の店。かつては回転することで知られ、今は回りませんが、全席が銀座を見下ろす窓に向いています。14階までエレベーター、そこから階段で。東京會舘の伝統のフランス料理を現代風に出し、「東京會舘と私」コース(6,600円)はキッシュなどのアミューズ、評判の伝統のダブルコンソメ、開業以来の定番の舌平目のムニエル。白ワインのバターソースのカレイや有名なマロンシャンテリーも、パンはおかわり自由。お祝いに最適という声がある一方、眺めの代金だという厳しい声も。サービス料15%。',
  });
}

// ================================================================ 日比谷松本楼
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13002152/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '21:00']);
  put({
    id: 'tokyo_hibiya_matsumotoro', name: '日比谷松本楼 (Hibiya Matsumoto-ro)', category: 'OMNI',
    lat: 35.673645, lng: 139.755864,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the 1F grill serves curry (European-style roux), omurice, hamburg, fried shrimp, crab cream croquettes and cakes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omurice, hamburg, seafood, curry.',
    hours_raw: '1F Western grill and garden terrace: daily 11:00–21:00 (L.O. 20:00); closed at New Year (Tabelog). The 3F French restaurant Bois de Boulogne keeps its own hours (listed separately). 1F dinner bookings only; only the terrace open-deck table can be booked by day.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside Hibiya Park (Hibiya-kōen 1-2) — 2 min from Hibiya Stn exit A14',
    cuisine: 'Historic Hibiya Park yōshoku · 1F grill and garden terrace · Showa-style sweet European curry · omurice with your choice of sauce · shrimp and scallop omurice in tomato sauce ¥1,850 · cake sets · weekend queues', cuisine_type: 'yoshoku',
    website: 'http://www.matsumotoro.co.jp/', gmaps: gm('日比谷松本楼 日比谷公園'), menu_url: null,
    notes: "[Yōshoku · the restaurant inside Hibiya Park] A long-established Western-food restaurant set in Hibiya Park; this record covers the ground-floor grill and the garden terrace (the third-floor French dining room, Bois de Boulogne, is listed separately). The signature curry is a sweet, fruity, European-style Showa curry. Omurice comes with a choice of sauce and a side such as hamburg, fried shrimp or crab cream croquette. A shrimp and scallop omurice in tomato sauce was ¥1,850; a poulet, cake and coffee set ¥2,800, with seasonal fruit cakes shown at the table. The outdoor terrace is the joy of a fine day (paid special seats exist), and staff seated a party of 12 together. Expect a 30-minute wait at weekends or during park events; only the terrace open-deck table can be booked. Party plans with free-flow are about ¥8,500.",
    chef_bio: { chef_name: null, roles: [], origin: 'Long-established Hibiya Park restaurant (October 2026 reviews; founding year not given)', background: 'Matsumoto-ro (matsumotoro.co.jp).', philosophy: null, specialty: 'Showa-style curry; omurice.',
      anecdotes: [
        { text: '"The signature curry is a sweet, European-style curry reminiscent of the Showa era. The sweetness from fruits stands out more than the spiciness." — October 2026, party plan.', source: R + 'B537888799/' },
        { text: '"Omelette Rice with Shrimp and Scallops in Tomato Sauce JPY 1,850. I visited around noon on Saturday and had to wait about 30 minutes." — October 2026.', source: R + 'B537643904/' },
      ],
      japanese_sources_summary: '食べログ: 日比谷松本楼、千代田区日比谷公園1-2、日比谷駅A14出口・霞ケ関駅B2出口徒歩2分、120席、1階 洋食グリル&ガーデンテラス11:00〜21:00(L.O. 20:00)、3階 フランス料理ボア・ド・ブローニュ(昼11:00〜16:00・夜17:00〜22:00)、年末年始休、サービス料10%(3階のみ)、夜の予約は1階のみ、公式サイト matsumotoro.co.jp。2026年10月の口コミ: 3階のプリフィクス(セップ茸のブランマンジェ、かぼちゃとりんごのポタージュ、オマールのアメリケーヌ)、ウェッジウッドの廃盤の皿、予約できるのはテラスのオープンデッキ1卓のみ、公園のイベントで30分待ち、有料の特別席、屋外席が心地よい、海老と帆立のトマトソースのオムライス1,850円、飲み放題の宴会プラン8,500円、昭和の甘い欧風カレー、プーレとケーキとコーヒーのセット2,800円、オムライスのソースとハンバーグ・エビフライ・かにクリームコロッケを選べる、12人を同じ席に。',
      confidence: 'medium', sources: [TB, R + 'B537888799/', R + 'B537643904/', R + 'B538002375/', R + 'B537093939/', R + 'B537347576/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in for most seats; weekend queues.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0012 東京都千代田区日比谷公園1-2 松本楼 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM 日比谷 松本楼 node/469818509 17m (GSI resolves only the park lot, 188m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537643904/', R + 'B538002375/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('海老と帆立のトマトソースオムライス', '', 'Shrimp and scallop omurice in tomato sauce', '¥1,850', 'Mains', 'ask', 'no', 'October 2026.', 'seafood_omurice'),
      it('プーレとケーキとコーヒーのセット', '', 'Poulet, cake and coffee set', '¥2,800', 'Sets', 'no', 'no', 'October 2026.', 'poulet_set'),
      it('欧風カレー', '', 'Sweet European-style curry', '', 'Mains', 'no', 'no', 'October 2026.', 'curry'),
    ] }, {
    cuisine: '日比谷公園の老舗洋食・1階のグリルとガーデンテラス・昭和の甘い欧風カレー・ソースを選べるオムライス・海老と帆立のトマトソースオムライス1,850円・ケーキのセット・週末は行列',
    neighborhood: '日比谷公園内(日比谷公園1-2)。日比谷駅A14出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。1階のグリルはカレー(欧風のルウ)、オムライス、ハンバーグ、エビフライ、かにクリームコロッケ、ケーキ。',
    vegan_detail: 'ヴィーガンではありません。オムライス、ハンバーグ、魚介、カレー。',
    notes: '[洋食・日比谷公園の中のレストラン] 日比谷公園の中にある老舗の洋食店で、この記録は1階のグリルとガーデンテラス(3階のフランス料理ボア・ド・ブローニュは別に掲載)。名物のカレーは果物の甘みが立つ昭和の欧風カレー。オムライスはソースを選べ、ハンバーグ、エビフライ、かにクリームコロッケなどを添えて。海老と帆立のトマトソースのオムライスは1,850円、プーレとケーキとコーヒーのセットは2,800円で、季節のフルーツケーキを席で見せてくれます。晴れた日は屋外テラスが格別(有料の特別席も)、12人を同じ席にまとめてくれた例も。週末や公園のイベントの日は30分ほど待ち、予約できるのはテラスのオープンデッキ1卓のみ。飲み放題の宴会プランは約8,500円。',
  });
}

save();
