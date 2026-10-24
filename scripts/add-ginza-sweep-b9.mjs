// Ginza Station half-mile sweep (805 m), batch 9 — ramen. Researched 2026-10-24.
//   + はるちゃんラーメン 新橋 (the original; solo owner "Haru-chan"; brand has a Ginza 2nd shop → OMNI)
//   + 麺屋ひょっとこ 交通会館店 (sister shop of 甘味おかめ, run by 石塚恒産) · 孫鈴舎 (松富士食品 / Rokurinsha group)
//   + 大島ラーメン 銀座店 (late-night Shōwa shop; operator not established)
// Deferred: 味の中華 羽衣 and 中国料理 小花 — large Chinese restaurants that appear in the ramen list only for tantanmen.
// Sources: san-tatsu (2022), Retty (2026), shop.mtfj.co.jp, kotsukaikan.co.jp, Tabelog /en/ listings + dated 2026
// reviews. Pins: Tabelog geo + GSI (+ OSM). Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const MID = [null, 'Not described in any source read; scored at the midpoint.'];

// ================================================================ はるちゃんラーメン (新橋)
{
  const ST = 'https://san-tatsu.jp/articles/203561/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13262391/'; const R = TB + 'dtlrvwlst/';
  const a = day(['10:00', '18:00']);
  put({
    id: 'tokyo_haruchan_ramen_shimbashi', name: 'はるちゃんラーメン 新橋 (Haru-chan Ramen, Shimbashi)', category: 'OMNI',
    lat: 35.666222, lng: 139.759547,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The chuka soba uses flat wheat noodles made for the shop by Daruma Seimen, the chashu is braised in the house soy-sauce tare, and every bowl is topped with fu, which is wheat gluten. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The owner builds the salt soup from the pork stock left from making the chashu, with niboshi (dried sardines) and aromatic vegetables. Each bowl carries two cuts of pork chashu.',
    hours_raw: 'Tue–Sat 10:00–18:00; closed Sundays and Mondays (Tabelog). Cashless only: cards, IC and QR; cash is not accepted. Ticket machine.',
    hours: { 1: a, 2: a, 3: a, 4: a, 5: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1 ground floor — 1–2 min from Shimbashi Stn toward Ginza',
    cuisine: 'Salt chuka soba · pork-and-niboshi soup · flat Daruma Seimen noodles · two-cut chashu', cuisine_type: 'ramen',
    website: null, gmaps: gm('はるちゃんラーメン 新橋駅前ビル1号館'), menu_url: null,
    notes: "[Ramen · the Haru-chan original] The first shop of はるちゃんラーメン: six counter seats on the ground floor of the old Shimbashi Ekimae Building, opened in August 2021 by a woman who goes by Haru-chan and had worked in ramen shops for about twenty years. In 2022 she ran it single-handed in a kitchen barely big enough to turn round in, styled like 'Haru-chan's kitchen at home' in warm wood. She calls it chuka soba, not ramen, because chuka soba sounds warmer. The soup is a light salt base: the pork stock from braising the chashu, with niboshi and aromatic vegetables. It is filled to the brim so it stays hot to the end. Flat Daruma Seimen noodles, two cuts of chashu (shoulder and belly) sliced only to order, and pastel fu on top for colour. 2026 diners describe it as a Michelin Bib Gourmand shop, with a queue around noon. The brand opened a second shop in Ginza 3-chōme in 2024.",
    chef_bio: {
      chef_name: 'はるちゃん (Haru-chan — the only name given in any source)', roles: ['owner-chef', 'founder of はるちゃんラーメン (Ginza 2nd shop 2024)'],
      origin: 'Shimbashi Ekimae Bldg No. 1, 1F; opened August 2021 (Tabelog: 23 August 2021)',
      background: 'About twenty years working in ramen shops before opening her own counter in Shimbashi, which she ran alone (2022).',
      philosophy: '「お客様には肩肘張らずに、少しいいものを召し上がっていただきたい」; chuka soba rather than ramen because it 「なんとなく温かい響き」.',
      specialty: 'Salt chuka soba, filled to the brim, with two-cut chashu sliced to order and fu on top.',
      anecdotes: [
        { text: '「切り置きはせず、必ずオーダーが入ってから必要な分のチャーシューを切ります。少し手間ですけど、切りたてのほうがおいしいので」', source: ST },
        { text: '「チャーシューは60gで麺は180gあるので、平均的に見ると多めだと思います。スープを並々にするのは、最後までアツアツを食べて欲しいから」', source: ST },
        { text: '「６席とはいえ、1人で店をやっているのでけっこう大変です（笑）。でもラーメン店で働いて20年くらいなので慣れていますよ」', source: ST },
        { text: 'The girl on the sign is drawn from the "ha" of Haru-chan — 「デザイナーさんが作ってくれたんですよ〜」.', source: ST },
        { text: 'October 2026: at 4 p.m. on a weekday every seat was full and the wait was ten minutes; special chuka soba ¥1,500.', source: R + 'B537896455/' },
      ],
      japanese_sources_summary: 'さんたつ(2022.10.18): はるちゃんラーメン、新橋駅前ビル1号館1階、2021年8月オープン、カウンター6席、女性店主はるちゃんがひとりで切り盛り(ラーメン店で働いて20年くらい)。中華そば890円(当時)・もり中華(休止中)。スープはチャーシューを仕込むときの豚のだしに煮干し・香味野菜を加えた塩ベース。だるま製麺所のオリジナル中太麺(やや平たい)180g、豚ウデ・バラのチャーシュー60g、注文ごとに切る。お麩。食べログ: 火〜土10:00〜18:00、日月休、6席、現金不可。2026年10月: 中華そば大1,100円、特製中華そば1,500円、ミシュラン・ビブグルマン(口コミ)。',
      confidence: 'high', sources: [ST, TB, R + 'B537849871/', R + 'B537896455/', R + 'B537903313/', R + 'B537928255/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Six counter seats with bag hooks under the counter; ticket machine; cashless only (no cash). Short queues at noon; overseas visitors are common.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Original medium-thick, slightly flat noodles made by だるま製麺所; fu (wheat gluten) on every bowl.', source: ST }],
      soy_sauce_wheat: [{ text: 'Chashu (pork shoulder and belly) marinated in the original soy-sauce tare.', source: ST }],
      vegan_cross_contact: [{ text: 'Soup made from the pork stock from the chashu, with niboshi and aromatic vegetables.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['pork', 'gyokai', 'vegetable'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: ['lard'], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Original medium-thick, slightly flat noodles from だるま製麺所, 180 g; chewy and slightly firm (2026).' },
      regional_style: ['Tokyo'], sub_genre: ['chuka soba'],
      signature_bowl: '中華そば (salt chuka soba) — ¥1,100 for a large in October 2026; 特製 ¥1,500.',
      chashu: 'Pork shoulder and belly braised in soy tare, about 60 g, sliced only to order.',
      notable_toppings: ['pastel fu', 'menma', 'nori', 'negi', 'seasoned egg (Harutama)'],
      gf: { status: 'no', note: 'Wheat noodles and fu.' },
      vegan: { status: 'no', note: 'Pork and niboshi soup.' },
      pantheon: "A one-woman Shimbashi counter that called its bowl chuka soba because it sounds warmer: a brimming, gentle salt soup of pork and niboshi, flat Daruma noodles, chashu cut the moment you order, and a scatter of pastel fu.",
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [ST, '「あっさりしながらまろやかさもあるやさしい味わい」.'],
        oiliness: [R + 'B537849871/', 'Clear broth enhanced with salt and lard, aromatic and rich yet refreshing.'],
        clarity: [R + 'B537547533/', 'The broth was clear; another diner: a clear salt broth (' + R + 'B537858955/).'],
        tare_strength: [R + 'B537410768/', 'Incredibly delicious, though it is a bit salty; "a broth with a strong salt flavor" (' + R + 'B537834764/).'],
        noodle_firmness: [R + 'B537903313/', 'The thick, flat noodles were slightly firm, reminiscent of Okinawa soba.'],
        aroma_punch: [ST, '「お吸い物みたいに塩味だけどふんわり醤油が香るようなあっさりスープ」.'],
      },
      confidence: 'high', sources: [ST, R + 'B537849871/', R + 'B537547533/', R + 'B537410768/', R + 'B537903313/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目20番 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537928255/', R + 'B537896455/', R + 'B537834764/'],
    price_note: 'No published menu. Prices from October 2026 Tabelog reviews; the 2022 feature listed chuka soba at ¥890.', last_checked: TODAY, items: [
      it('中華そば', 'chuuka soba', 'Chuka soba (salt; pork and niboshi)', '¥1,100', 'Ramen', 'no', 'no', 'Large, October 2026.', 'chuka_soba'),
      it('特製中華そば', 'tokusei chuuka soba', 'Special chuka soba (extra chashu, egg, nori)', '¥1,500', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_chuka_soba'),
      it('もり中華', 'mori chuuka', 'Mori chuka (dipping style)', '', 'Ramen', 'no', 'no', 'Paused in 2022; current status unknown.', 'mori_chuka'),
      it('はるたま', 'harutama', 'Harutama (seasoned egg)', '', 'Toppings', 'ask', 'no', 'October 2026.', 'harutama'),
      it('チャーシュー増し', 'chaashuu mashi', 'Extra chashu', '', 'Toppings', 'no', 'no', 'Soy-sauce tare.', 'extra_chashu'),
    ] }, {
    cuisine: '塩の中華そば・豚と煮干しのスープ・だるま製麺の平打ち麺・2種のチャーシュー',
    neighborhood: '新橋二丁目、新橋駅前ビル1号館1階。新橋駅から銀座方面へ徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。中華そばはだるま製麺が作る小麦の平打ち麺で、チャーシューは自家製の醤油ダレで煮込み、どの一杯にも小麦グルテンの麩がのります。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。塩スープは、チャーシューを仕込むときに出る豚のだしに煮干しと香味野菜を加えたもの(店主談)。どの一杯にも2種の豚チャーシューがのります。',
    notes: '[ラーメン・はるちゃんの本店] はるちゃんラーメンの1号店。古い新橋駅前ビルの1階にあるカウンター6席の店で、ラーメン店で20年ほど働いた女性店主「はるちゃん」が2021年8月に開きました。2022年の取材時は、やっと動けるほどの厨房でひとりで切り盛りしていました。内装は木目と暖色の照明で「料理好きのはるちゃんち」のイメージ。「ラーメン」より「中華そば」のほうが温かい響きだからと中華そばと呼びます。スープはチャーシューの豚のだしに煮干し・香味野菜を加えたあっさりした塩ベースで、最後まで熱々なよう丼になみなみと注ぎます。だるま製麺の平打ち麺、注文ごとに切るウデとバラの2種のチャーシュー、彩りのお麩。2026年の口コミではミシュランのビブグルマン店とされ、昼は行列ができます。2024年には銀座三丁目に2号店を開いています。',
  });
}

// ================================================================ 麺屋ひょっとこ 交通会館店
{
  const OWN = 'https://www.kotsukaikan.co.jp/food_shopping/food_tea/100/'; const RT = 'https://retty.me/restaurant/100000018958/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13046637/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '20:00']);
  put({
    id: 'tokyo_menya_hyottoko', name: '麺屋ひょっとこ 交通会館店 (Menya Hyottoko, Kōtsū Kaikan)', category: 'OMNI',
    lat: 35.67516, lng: 139.764343,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. All four bowls are thin wheat noodles in a chicken and Japanese-dashi soup. The tare is not described. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is chicken bones with bonito flakes and kombu, and the bowls carry pork chashu (three large slices on the chashu versions).',
    hours_raw: 'Mon–Fri 11:00–20:00; Sat 11:00–19:00 (Tabelog); closed Sundays (when Monday is a holiday it opens Sunday and closes Monday — Kōtsū Kaikan). Cash only; ticket machine.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:00', '19:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, Tokyo Kōtsū Kaikan B1F (Yokotcho alley) — 3 min from Yūrakuchō Stn Kyōbashi exit',
    cuisine: 'Wafu (Japanese-dashi) shio ramen · yuzu ramen · chameshi', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('麺屋ひょっとこ 東京交通会館'), menu_url: null,
    notes: "[Ramen · yuzu wafu shio] A seven-seat counter in the basement of the Tokyo Kōtsū Kaikan by Yūrakuchō Station, on the narrow 'Yokotcho' passage. It opened in 2005 as the sister shop of the long-running sweets house 甘味おかめ in the same building, and the company that runs Okame, Ishizuka Kōsan, runs it too. The menu is four bowls: wafu ramen and wafu chashu-men, each also made with yuzu. The soup is a pale-gold clear stock of chicken bones with bonito and kombu, very light. The yuzu versions get freshly grated yuzu in the centre to stir in, with mitsuba, mizuna, menma and negi. Thin noodles, three large smoky slices of chashu on the chashu bowls, and Okame's chameshi (tea-flavoured rice) on the side. Bowls arrive in about three minutes, and the queue moves fast; buy your ticket from the machine before joining it. It was ¥780 for wafu ramen in May 2026.",
    chef_bio: {
      chef_name: null, roles: ['ramen shop of 石塚恒産 (also runs 甘味おかめ)'],
      origin: 'Tokyo Kōtsū Kaikan B1F; opened 2005',
      background: "Opened in 2005 as the sister shop of 甘味おかめ, a sweets house of more than seventy years in the same building; both are run by the company 石塚恒産. A Ginza branch opened in 2018 appears to have closed (Retty, 2026).",
      philosophy: null,
      specialty: 'Wafu yuzu shio ramen on a chicken, bonito and kombu stock; chameshi.',
      anecdotes: [
        { text: '「創業は2005年だそうで既に20年超。運営は『石塚恒産』という企業で同じ交通会館に入る甘味処『おかめ』も運営している」 — Retty, May 2026.', source: RT },
        { text: 'An October 2026 diner waited 20 minutes behind eight people for seven seats — and learned that you buy the ticket before you queue.', source: R + 'B537857097/' },
        { text: '"While waiting, the refreshing aroma of yuzu filled the air" — the yuzu chashu bowl arrived in about three minutes.', source: R + 'B537558516/' },
      ],
      japanese_sources_summary: 'Retty(2026年): 麺屋ひょっとこ、東京交通会館B1F「横っちょ横丁」、創業2005年、運営は石塚恒産(甘味処「おかめ」も運営)、7席。メニューは和風柳麺780円・和風焼豚麺1,000円・和風柚子柳麺・和風柚子焼豚麺1,100円、大盛250円、茶飯。鶏ガラベースに鰹節・昆布の和風出汁、薄黄金色の透き通ったスープ、中細〜極細のストレート麺、大判チャーシュー3枚、水菜・メンマ・ネギ・煮卵・三つ葉、生柚子のすりおろし。交通会館: 11:00〜20:00、日曜定休。食べログ: 土〜19:00、現金のみ。',
      confidence: 'medium', sources: [RT, OWN, TB, R + 'B537558516/', R + 'B537924892/', R + 'B537853548/', R + 'B537857097/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a ticket at the machine first, then queue. Seven tight counter seats; very fast service; cash only. Children of school age welcome (Tabelog).' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Thin straight wheat noodles in every bowl.', source: R + 'B537558516/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Clear broth of chicken bones with bonito flakes and kombu.', source: R + 'B537558516/' }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin to very thin straight noodles, soft and supple.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '和風柚子焼豚麺 (wafu yuzu chashu-men) — ¥1,100 in October 2026; 和風柚子柳麺 ¥880.',
      chashu: 'Three large, smoky, slightly sweet slices on the chashu bowls; one 2026 diner called it thick and melting.',
      notable_toppings: ['freshly grated yuzu', 'mitsuba', 'mizuna', 'menma', 'negi', 'half egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and bonito stock.' },
      pantheon: 'A sweet-shop spin-off that became a Yūrakuchō queue: pale-gold chicken and bonito dashi, thin noodles, and a mound of fresh-grated yuzu to stir in — served in three minutes flat.',
      profile: { richness: 1, oiliness: 1, clarity: 5, tare_strength: 2, noodle_firmness: 2, aroma_punch: 3 },
      profile_basis: {
        richness: [RT, '「かなりのあっさり具合」; an October 2026 diner found it "quite bland" as a ramen soup (' + R + 'B537857097/).'],
        oiliness: [R + 'B537924892/', 'Incredibly light yet satisfying.'],
        clarity: [RT, '「薄黄金色に透き通ったスープ」.'],
        tare_strength: [R + 'B537853548/', 'A refreshing, elegant flavor.'],
        noodle_firmness: [RT, '「麺はしなやかで柔らかな極細麺」; 「パツパツでもなく柔過ぎもせず」.'],
        aroma_punch: [R + 'B537558516/', 'The freshly grated yuzu… adds a refreshing aroma and a tangy acidity when mixed in.'],
      },
      confidence: 'medium', sources: [RT, R + 'B537558516/', R + 'B537924892/', R + 'B537853548/', R + 'B537857097/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-10-1 東京交通会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Kōtsū Kaikan shop page live; Tabelog reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目10番 (lot) 23m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [RT, R + 'B537558516/', R + 'B537853548/', R + 'B537552846/'],
    price_note: 'The four bowls are the full noodle menu per Retty (May 2026, with its prices); the yuzu prices are from October 2026 Tabelog reviews.', last_checked: TODAY, items: [
      it('和風柳麺', 'wafuu raamen', 'Wafu ramen (chicken and Japanese dashi, salt)', '¥780', 'Ramen', 'no', 'no', 'May 2026.', 'wafu_ramen'),
      it('和風焼豚麺', 'wafuu yakibuta men', 'Wafu chashu-men', '¥1,000', 'Ramen', 'no', 'no', 'May 2026. Large +¥250.', 'wafu_chashumen'),
      it('和風柚子柳麺', 'wafuu yuzu raamen', 'Wafu yuzu ramen', '¥880', 'Ramen', 'no', 'no', 'October 2026.', 'yuzu_ramen'),
      it('和風柚子焼豚麺', 'wafuu yuzu yakibuta men', 'Wafu yuzu chashu-men', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'yuzu_chashumen'),
      it('茶飯', 'chameshi', 'Chameshi (tea-flavoured rice), with pickles', '', 'Rice', 'ask', 'ask', 'Shared with 甘味おかめ.', 'chameshi'),
    ] }, {
    cuisine: '和風出汁の塩ラーメン・柚子ラーメン・茶飯',
    neighborhood: '有楽町二丁目、東京交通会館B1F「横っちょ横丁」。有楽町駅京橋口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。4種類の麺はどれも鶏と和風出汁のスープに小麦の細麺です。タレの中身は書かれていません。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。スープは鶏ガラに鰹節と昆布を合わせたもので、豚チャーシューがのります(焼豚麺は大判3枚)。',
    notes: '[ラーメン・柚子の和風塩] 有楽町駅前、東京交通会館地下の細い「横っちょ横丁」にあるカウンター7席の店。2005年に、同じ館内の老舗甘味処「甘味おかめ」の姉妹店として開業し、運営もおかめと同じ石塚恒産です。メニューは和風柳麺と和風焼豚麺、それぞれの柚子版の4種類だけ。スープは鶏ガラに鰹節・昆布を合わせた薄黄金色の透き通った清湯で、とてもあっさり。柚子版は中央にすりおろした生柚子がのり、三つ葉・水菜・メンマ・ネギが添えられます。細麺に、焼豚麺はスモーキーな大判チャーシュー3枚。サイドはおかめの茶飯。着丼は3分ほどで回転も速いですが、食券を買ってから並ぶ方式です。2026年5月の和風柳麺は780円。',
  });
}

// ================================================================ 孫鈴舎
{
  const OWN = 'https://shop.mtfj.co.jp/stores/109';
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130201/13243959/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['07:00', '22:00']), we = day(['11:00', '15:00']);
  put({
    id: 'tokyo_mago_rinsha', name: '孫鈴舎 (Mago Rinsha)', category: 'OMNI',
    lat: 35.678297, lng: 139.765524,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The menu is wheat noodles: thick tsukemen noodles, thin noodles for the morning ramen, and cold sesame noodles. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A 2026 diner describes the dipping soup as built on meat flavours, and the morning ramen carries niboshi (dried sardine) and chashu scraps. Chashu tsukemen, a chashu rice bowl and chicken-oil rice are on the menu.',
    hours_raw: 'Mon–Fri 07:00–22:00 (morning ramen 07:00–10:30); Sat, Sun & holidays 11:00–15:00 (shop site). Cash, cards, IC and QR accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marunouchi 1-chōme, under the Kajibashi railway arches by the Hato Bus terminal — 2 min from Tokyo Stn Marunouchi South exit',
    cuisine: 'Rokurinsha-group tsukemen · ¥600 morning ramen · spicy and mala tsukemen', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('孫鈴舎 東京都千代田区丸の内1-10-9'), menu_url: null,
    notes: "[Tsukemen · Rokurinsha group] A 16-seat counter under the railway arches near the Hato Bus terminal at Tokyo Station, opened in January 2020 by 松富士食品, the company behind Rokurinsha and Sharin. On weekdays it opens at 7 a.m. with a ¥600 morning ramen (to 10:30): thin straight noodles, lots of ginger, a lighter broth with gentle niboshi and chashu scraps, and extra noodles instead of a large size. From late morning it is tsukemen: thick, chewy noodles served cold, a dipping soup one 2026 diner found meat-led rather than seafood-led, grated garlic to add, and portions so big that a 'large' surprised two reviewers. Spicy and chilled mala tsukemen, cold sesame noodles, chicken-oil rice and egg on rice are on the menu. Buy a ticket inside, wait, and collect your bowl when your number is called.",
    chef_bio: {
      chef_name: null, roles: ['tsukemen brand of 松富士食品 (Rokurinsha, Sharin, Junk Garage, Tonari)'],
      origin: 'Opened 31 January 2020 (Tabelog); under the Kajibashi arches No. 7',
      background: 'Run by 松富士食品, whose brands include 六厘舎, 舎鈴, ジャンクガレッジ and タンメン トナリ.',
      philosophy: null,
      specialty: 'Tsukemen with very large portions; ¥600 morning ramen; spicy and mala tsukemen.',
      anecdotes: [
        { text: 'September 2026: "Compared to Rokurinsha, the niboshi (dried sardine) flavor is milder and the broth has a lighter consistency" — ¥600 morning ramen with ginger and chashu scraps.', source: R + 'B535175765/' },
        { text: 'A first-time diner ordered a large tsukemen for ¥990 and got what they called a mega size: "This is reverse fraud!"', source: R + 'B535739493/' },
        { text: 'An October 2026 diner found the dip "focuses solely on meat flavors without the usual seafood base, making it different from other Rokurinsha locations."', source: R + 'B537731862/' },
      ],
      japanese_sources_summary: '松富士食品公式: 孫鈴舎、千代田区丸の内1-10-9 鍛冶橋高架下No7、月〜金7:00〜22:00(朝7:00〜10:30)、土日祝11:00〜15:00、16席、現金・クレジット・交通系IC・QR。食べログ: 2020年1月31日オープン。2026年の口コミ: 朝ラーメン600円(細麺・生姜・チャーシュー端)、つけ麺大990円、特製つけ麺大盛1,090円、冷やし麻辣、ごまだれ冷やし、鶏油ご飯、番号で呼ばれて受け取り。',
      confidence: 'medium', sources: [OWN, TB, R + 'B510822211/', R + 'B535175765/', R + 'B535739493/', R + 'B537731862/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine inside; collect your order when your number is called, food-court style. Counter only; all payment types accepted.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Thick tsukemen noodles at lunch; thin straight noodles for the morning ramen.', source: R + 'B510822211/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Morning ramen with niboshi and chashu scraps.', source: R + 'B535175765/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: [], broth_texture: null, tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy tsukemen noodles served cold; thin straight noodles for the morning ramen.' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'つけ麺 (tsukemen) — large ¥990 in September 2026; special tsukemen ¥1,090.',
      chashu: 'Chashu tsukemen and a chashu rice bowl; the morning ramen uses chashu scraps.',
      notable_toppings: ['grated garlic', 'seasoned egg', 'nori', 'green onion', 'ginger (morning ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat-based dip.' },
      pantheon: "A Rokurinsha-group sibling under the Tokyo Station arches: thick cold noodles in alarming quantities, a meaty dip to load with garlic, and a ¥600 ginger-and-niboshi breakfast bowl from 7 a.m.",
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535702373/', 'The dipping sauce was packed with flavor.'],
        oiliness: MID,
        clarity: MID,
        tare_strength: [R + 'B536704750/', 'The spicy tsukemen was not only spicy but also packed with flavor.'],
        noodle_firmness: [R + 'B537731862/', 'The noodles were chewy and tasty, but they were served ice-cold.'],
        aroma_punch: [R + 'B535702373/', 'Adding grated garlic really intensified my appetite.'],
      },
      confidence: 'low', sources: [R + 'B535702373/', R + 'B535175765/', R + 'B536704750/', R + 'B537731862/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0005 東京都千代田区丸の内1-10-9 鍛冶橋高架下No.7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator store page live; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区丸の内一丁目10番9号 (go) 9m; OSM node 9756668632 「孫鈴舎」 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510822211/', R + 'B436871697/', R + 'B535739493/', R + 'B536540148/', R + 'B535702373/'],
    price_note: 'No menu read. Dishes and prices come from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('つけ麺', 'tsukemen', 'Tsukemen (large)', '¥990', 'Ramen', 'no', 'no', 'September 2026.', 'tsukemen'),
      it('特製つけ麺', 'tokusei tsukemen', 'Special tsukemen (large)', '¥1,090', 'Ramen', 'no', 'no', 'September 2026.', 'tokusei_tsukemen'),
      it('辛つけ麺', 'kara tsukemen', 'Spicy tsukemen', '', 'Ramen', 'no', 'no', '', 'spicy_tsukemen'),
      it('冷やし麻辣', 'hiyashi maara', 'Chilled spicy mala noodles', '¥1,090', 'Ramen', 'no', 'ask', 'Summer 2026.', 'chilled_mala'),
      it('ごまだれ冷やし', 'gomadare hiyashi', 'Large cold noodles with sesame sauce', '¥990', 'Ramen', 'no', 'ask', 'September 2026.', 'sesame_cold_noodles'),
      it('朝ラーメン', 'asa raamen', 'Morning ramen (07:00–10:30, weekdays)', '¥600', 'Ramen', 'no', 'no', 'Extra noodles ¥100. October 2026.', 'morning_ramen'),
      it('鶏油ご飯', 'chiiyu gohan', 'Chicken-oil rice', '', 'Rice', 'ask', 'no', '', 'chicken_oil_rice'),
      it('チャーシュー丼', 'chaashuu don', 'Chashu rice bowl', '', 'Rice', 'no', 'no', '', 'chashu_don'),
    ] }, {
    cuisine: '六厘舎グループのつけ麺・朝ラーメン600円・辛つけ麺・麻辣',
    neighborhood: '丸の内一丁目、はとバス乗り場そばの鍛冶橋高架下。東京駅丸の内南口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。メニューは小麦の麺で、つけ麺は太麺、朝ラーメンは細麺、ごまだれの冷やしもあります。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。2026年の口コミでは、つけ汁は動物系の旨味が中心とされ、朝ラーメンには煮干しとチャーシューの端がのります。チャーシューつけ麺、チャーシュー丼、鶏油ご飯もあります。',
    notes: '[つけ麺・六厘舎グループ] 東京駅のはとバス乗り場そば、高架下にあるカウンター16席の店で、六厘舎や舎鈴の松富士食品が2020年1月に開きました。平日は朝7時から10時半まで600円の朝ラーメン(細ストレート麺、生姜たっぷり、煮干しは穏やかで軽めのスープ、チャーシューの端)を出し、大盛りの代わりに替え玉。昼からはつけ麺で、冷たく締めたもちもちの太麺に、魚介より動物系が前に出たつけ汁(2026年の口コミ)、おろしにんにくを足して。量が多く、「大」に驚いた口コミが二つあります。辛つけ麺や冷やし麻辣、ごまだれ冷やし、鶏油ご飯、卵かけご飯も。店内で食券を買い、番号で呼ばれたら受け取る方式です。',
  });
}

// ================================================================ 大島ラーメン 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13040765/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '03:30']);
  put({
    id: 'tokyo_oshima_ramen_ginza', name: '大島ラーメン 銀座店 (Ōshima Ramen, Ginza)', category: 'OMNI',
    lat: 35.668018, lng: 139.762383,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Wheat-noodle ramen (miso, shoyu, wonton), gyoza and fried rice. No gluten-free option is mentioned. Doubanjiang is on the table.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The miso ramen comes with chashu and egg, wonton noodles and a "super chashu" ramen are on the menu, and gyoza are the house speciality. No source describes a meat-free soup.',
    hours_raw: 'Mon–Fri 11:00–03:30 (next day); Sat 11:00–21:00; closed Sundays and holidays (Tabelog). Tabelog lists cards and PayPay; a September 2026 diner reported cash only, so carry cash.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, near Shimbashi — 4 min from Shimbashi Stn',
    cuisine: 'Shōwa-retro late-night ramen · miso ramen with "oni" spicy miso · gyoza with grated daikon', cuisine_type: 'ramen',
    website: null, gmaps: gm('大島ラーメン 銀座店 東京都中央区銀座8-10-16'), menu_url: null,
    notes: "[Ramen · late night, Shōwa retro] A long-running counter in Ginza 8-chōme with an open kitchen, where Ginza drinkers end the night: weekdays it is open until 3:30 a.m. A diner returning after twenty years in 2026 found the room unchanged. Regulars order the miso ramen: medium-thick straight noodles, bean sprouts, corn, menma, chashu and egg, made punchier with the 'oni' spicy miso. Others come for the Oshima gyoza, eaten with grated daikon and hot mustard, and fried rice, which is also sold to take away. Lunch sets were about ¥1,000–1,100 in 2026, with a complimentary dish of boiled bean sprouts. Tabelog links it to apraise.co.jp, whose Oshima page is gone, so the operator is not established.",
    chef_bio: {
      chef_name: null, roles: ['operator not established'],
      origin: 'Ginza 8-10-16; opening year not found',
      background: "No source names the owner or operator. Tabelog's website field points to apraise.co.jp/oshima/, which returned 404 on 2026-10-24; that company now describes itself as a payroll-advance business.",
      philosophy: null,
      specialty: 'Miso ramen with oni spicy miso; Oshima gyoza with grated daikon and mustard; fried rice.',
      anecdotes: [
        { text: 'A 21st visit in October 2026: shoyu wonton noodles with egg, half fried rice and gyoza — "I still think Miso Ramen is my favorite."', source: R + 'B75120279/' },
        { text: '"As you gradually dissolve the Oni into the broth, it adds depth and richness."', source: R + 'B535294191/' },
        { text: '"After 20 Years… The interior seemed to have remained unchanged over the years," and the price was still about ¥1,000.', source: R + 'B537341763/' },
      ],
      japanese_sources_summary: '食べログ: 大島ラーメン 銀座店、銀座8-10-16、月〜金11:00〜翌3:30、土11:00〜21:00、日祝休、17席カウンター、テイクアウト可。2026年の口コミ: 味噌ラーメン(もやし・コーン・メンマ・チャーシュー・ゆで卵、中太ストレート麺)、「鬼」(辛味噌)、大根おろしとからしの餃子、半炒飯、昼の味噌ラーメン餃子セット1,100円、味噌ラーメン半炒飯セット1,000円、お通しのもやし。支払いは食べログではカード・PayPay可、9月の口コミでは現金のみ。',
      confidence: 'low', sources: [TB, R + 'B75120279/', R + 'B535294191/', R + 'B537341763/', R + 'B519483722/', R + 'B536641981/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Counter around an open kitchen; brisk service that one 2026 diner found curt. Payment information conflicts — bring cash. Children welcome (Tabelog).' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Medium-thick straight wheat noodles; gyoza and fried rice from the same counter kitchen.', source: R + 'B537341763/' }],
      soy_sauce_wheat: [{ text: 'Shoyu ramen and shoyu wonton noodles; doubanjiang on the table.', source: R + 'B75120279/' }],
      vegan_cross_contact: [{ text: 'Miso ramen topped with chashu and boiled egg.', source: R + 'B537341763/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: [], broth_texture: null, tare: ['miso', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '味噌ラーメン (miso ramen) with 鬼 spicy miso; lunch set with gyoza ¥1,100 (2026).',
      chashu: 'Well-marinated, tender chashu; a "super chashu" ramen is offered.',
      notable_toppings: ['bean sprouts', 'corn', 'menma', 'boiled egg', '"oni" spicy miso'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu and egg on the miso ramen.' },
      pantheon: 'Where Ginza 8-chōme goes after the last drink: a salty Shōwa miso ramen with corn and bean sprouts, a spoon of oni chilli miso to stir in, and gyoza with grated daikon, until half past three.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535294191/', 'Traditional Tokyo ramen made with a blend of several types of dashi; the oni "adds depth and richness."'],
        oiliness: MID,
        clarity: MID,
        tare_strength: [R + 'B536171220/', 'The ramen had a strong miso flavor; "slightly on the salty side" (' + R + 'B537341763/).'],
        noodle_firmness: [R + 'B537341763/', 'The noodles were medium-thick and straight, cooked to perfection.'],
        aroma_punch: [R + 'B535294191/', 'The moderate spiciness of the oni spicy miso.'],
      },
      confidence: 'low', sources: [R + 'B535294191/', R + 'B536171220/', R + 'B537341763/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-10-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目10番16号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519483722/', R + 'B536171220/', R + 'B75120279/', R + 'B510708049/', R + 'B536082257/'],
    price_note: 'No menu read. Dishes come from 2026 reviews, with the two lunch-set prices.', last_checked: TODAY, items: [
      it('味噌ラーメン', 'miso raamen', 'Miso ramen (bean sprouts, corn, menma, chashu, egg)', '', 'Ramen', 'no', 'no', 'Add 鬼 spicy miso.', 'miso_ramen'),
      it('醤油ラーメン', 'shouyu raamen', 'Shoyu ramen', '', 'Ramen', 'no', 'no', '', 'shoyu_ramen'),
      it('醤油ワンタン麺', 'shouyu wantan men', 'Shoyu wonton noodles', '', 'Ramen', 'no', 'no', '', 'wonton_noodles'),
      it('スーパーチャーシュー麺', 'suupaa chaashuu men', 'Super chashu ramen', '', 'Ramen', 'no', 'no', '', 'super_chashu_ramen'),
      it('', '', 'Hantan ramen', '', 'Ramen', 'no', 'ask', 'Named in a September 2026 review.', 'hantan_ramen'),
      it('味噌ラーメン餃子セット', 'miso raamen gyouza setto', 'Miso ramen and gyoza set (lunch)', '¥1,100', 'Set', 'no', 'no', 'September 2026.', 'miso_gyoza_set'),
      it('味噌ラーメン半炒飯セット', 'miso raamen han chaahan setto', 'Miso ramen and half fried rice set (lunch)', '¥1,000', 'Set', 'no', 'no', 'September 2026.', 'miso_half_fried_rice_set'),
      it('大島餃子', 'ooshima gyouza', 'Oshima gyoza with grated daikon and mustard', '', 'Sides', 'no', 'no', '', 'oshima_gyoza'),
      it('炒飯', 'chaahan', 'Fried rice (also to take away)', '', 'Rice', 'ask', 'ask', '', 'fried_rice'),
    ] }, {
    cuisine: '昭和レトロの深夜ラーメン・「鬼」辛味噌の味噌ラーメン・大根おろしの餃子',
    neighborhood: '銀座八丁目、新橋寄り。新橋駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。小麦麺のラーメン(味噌・醤油・ワンタン)、餃子、炒飯。グルテンフリーの選択肢はありません。卓上に豆板醤があります。',
    vegan_detail: 'ヴィーガンではありません。味噌ラーメンにはチャーシューと卵がのり、ワンタン麺やスーパーチャーシュー麺もあり、名物は餃子です。動物性不使用のスープはどの情報源にもありません。',
    notes: '[ラーメン・深夜・昭和レトロ] 銀座八丁目のオープンキッチンを囲むカウンターの老舗で、平日は深夜3時半まで開いていて、銀座で飲んだ人の締めの店です。2026年に20年ぶりに訪れた客は、店内が変わっていないと書いています。常連の定番は味噌ラーメンで、中太ストレート麺にもやし・コーン・メンマ・チャーシュー・卵、辛味噌の「鬼」で味を足します。大根おろしとからしで食べる大島餃子や、持ち帰りもできる炒飯目当ての客も。2026年の昼のセットは1,000〜1,100円で、お通しにゆでもやしが出ます。食べログはapraise.co.jpにリンクしていますが大島のページは消えており、運営者は確認できていません。',
  });
}

save();
