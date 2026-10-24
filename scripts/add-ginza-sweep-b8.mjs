// Ginza Station half-mile sweep (805 m), batch 8 — ramen. Researched 2026-10-24.
//   + 麺処 銀笹 (owner Sasanuma Takahiro, ex-Japanese-cuisine chef; single shop) · 銀座 創龍 (Sōryū Co. / Nogata Hope)
//   + 銀座月や (Ginza offshoot of Hakata's 豚そば月や) · ちりちりラーメン 風鈴屋 (Ginza Nine stall; owners unnamed)
//   + どさん娘 新橋駅前ビル店 (owners unnamed) · 中華 三富 (1971; 2nd-generation owner Hirata Kōichi)
// Sources: san-tatsu (2022), nogata-hope.com (Sōryū menu pages), ginza6.tokyo + PR TIMES (Tsukiya), ginza9.com,
// Ramen Walker via Time Out, ASCII.jp (2024), Tabelog /en/ listings + dated 2026 reviews. Pins: Tabelog geo + GSI
// (+ OSM). Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const TBR = id => `https://tabelog.com/en/tokyo/A1301/${id}/`;
const MID = [null, 'Not described in any source read; scored at the midpoint.'];

// ================================================================ 麺処 銀笹
{
  const TB = TBR('A130103/13119563'); const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/206511/';
  const l = day(['11:15', '15:00']);
  put({
    id: 'tokyo_mendokoro_ginzasa', name: '麺処 銀笹 (Mendokoro Ginzasa)', category: 'MOM_AND_POP',
    lat: 35.666233, lng: 139.763431,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The ramen and tsukemen use wheat noodles, and one of the two tare is white soy sauce (shiro-shōyu), which is normally brewed mostly from wheat. No gluten-free option is mentioned in any source. The sea-bream rice is rice cooked with grilled sea bream, but it is meant to be finished with the ramen soup, and its seasoning is not published.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The owner makes the soup from chicken and pork stock combined with kombu and niboshi (dried sardine) dashi. The bowls carry pork-belly chashu and sea-bream fish balls, and the signature side is rice cooked with sea bream.',
    hours_raw: 'Mon–Sat 11:15–15:00; closed Sundays and holidays. Evening service is suspended for now because of staff shortages (Tabelog, October 2026). Cash only; ticket machine.',
    hours: { 0: l, 1: l, 2: l, 3: l, 4: l, 5: l }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, back alley near Shōwa-dōri and Kaigan-dōri — 6–8 min from Shimbashi, 6 min from Tsukijishijō',
    cuisine: 'Japanese-cuisine-style shio and white-shoyu ramen · sea-bream rice finished as chazuke', cuisine_type: 'ramen',
    website: null, gmaps: gm('麺処 銀笹 東京都中央区銀座8-15-2'), menu_url: null,
    notes: "[Mom & Pop · dashi ramen] A dark, quiet shop in a back alley between Ginza and Shimbashi, opened in 2010 by Sasanuma Takahiro after 18 years as a Japanese-cuisine chef. He worked at a Ginza restaurant known for sea-bream chazuke, and built his shop around the same idea: eat the ramen, eat some sea-bream rice plain, then pour the soup over the rest to make chazuke. The soup is chicken and pork stock, chilled overnight and stripped of fat, then joined with kombu and niboshi dashi; it is not a sea-bream broth, as many first-timers assume. Choose salt or white soy sauce. The bowl, modelled on a kaiseki soup course, carries pink sea-bream fish balls and pork-belly chashu torched to order. The spouted bowls were made by his pottery teacher in Hannō-yaki, so the soup pours neatly onto the rice. Listed in the Tabelog Ramen TOKYO 100 every year from 2017 to 2025. Queues form at the 11:15 opening.",
    chef_bio: {
      chef_name: '笹沼高広 (Sasanuma Takahiro)', roles: ['owner-chef'],
      origin: 'Ginza 8-chōme; opened 25 November 2010 (Tabelog)',
      background: 'Sasanuma spent 18 years as a Japanese-cuisine (nihon ryōri) chef, including at a Ginza restaurant where sea-bream chazuke was popular, before opening Ginzasa in 2010 as his first ramen shop.',
      philosophy: 'Ramen treated as the soup course (owan) of a kaiseki meal, paired with sea-bream rice.',
      specialty: 'Shio and white-shoyu ramen on a chicken-pork and kombu-niboshi double soup; sea-bream rice turned into chazuke with the soup.',
      anecdotes: [
        { text: '「うちは鯛飯を出していますが、ラーメンのスープも鯛ってわけではないんですよ。鯛出汁ラーメンだと思って来られるお客さまも多いんですがね（笑）」', source: ST },
        { text: '「懐石に出てくるお椀をイメージして、つみれを入れてみました。ラーメンを汁物に見立てて、鯛飯に合わせてお出ししている」 — on the sea-bream fish balls.', source: ST },
        { text: 'On moving from Japanese cuisine to ramen: 「ラーメンの場合は1年中、同じ食材を使ってコンスタントに同じ味を出さないとならないので、いまだに苦労するところはあります」', source: ST },
        { text: 'The spouted Hannō-yaki bowls were made for the opening by his pottery teacher; so many customers rested chopsticks in the spout that he wrote an instruction card for the bowl.', source: ST },
        { text: 'A regular logged a 28th visit in October 2026: large shio ramen, seasoned egg, two bowls of rice, and the soup poured over the rice.', source: R + 'B426814268/' },
      ],
      japanese_sources_summary: 'さんたつ(2022.11.02): 麺処 銀笹、店主・笹沼高広さん(日本料理の職人歴18年、鯛茶漬けが人気の銀座の店で勤務)、2010年開業。スープは鶏と豚を一晩寝かせて脂を取り、昆布・煮干しの出汁を加えたダブルスープ(鯛出汁ではない)。塩と白醤油、麺は細ストレート150g(当時)。豚バラチャーシューは注文ごとにバーナーで炙る。鯛のつみれ。鯛飯は頭ごと焼いた鯛を炊き込みほぐして戻す。器は陶芸教室の師匠作の飯能焼の片口。食べログ: 月〜土11:15〜15:00、夜は人手不足で休止中、日祝休、現金のみ、18席、ラーメン百名店2017〜2025。2026年10月: 銀笹ラーメン塩・白醤油 各1,100円、大盛+150円。',
      confidence: 'high', sources: [ST, TB, R + 'B488596352/', R + 'B537534729/', R + 'B537841231/', R + 'B537889330/', R + 'B537782560/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Ticket machine, which in October 2026 did not take ¥10,000 notes; cash only. Mostly tables plus a solo spot at the counter; children welcome. Expect a short queue at the 11:15 opening.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Wheat noodles for both ramen and tsukemen.', source: ST }],
      soy_sauce_wheat: [{ text: 'The two tare are salt and white soy sauce (白醤油).', source: ST }],
      vegan_cross_contact: [{ text: 'One double soup of chicken and pork stock with kombu and niboshi dashi.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'pork', 'gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: false, notes: 'The 2022 feature described thin straight noodles (150 g, large 225 g); October 2026 diners describe thin to medium-thin yellow curly noodles, so the noodle may have changed.' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: '銀笹ラーメン 塩 (Ginzasa ramen, salt) with half sea-bream rice — ¥1,100 for the ramen in October 2026.',
      chashu: 'Large rolled pork-belly chashu, torched with a burner to order; a thick-cut extra is available.',
      notable_toppings: ['pink sea-bream fish balls (tai tsumire)', 'shrimp shinjo (2026)', 'mizuna', 'thread chilli', 'white negi', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles; white soy sauce tare.' },
      vegan: { status: 'no', note: 'Chicken, pork and niboshi soup.' },
      pantheon: "A former kaiseki cook's ramen: a clear golden chicken-pork and kombu-niboshi soup served like a soup course, with sea-bream fish balls on top and sea-bream rice on the side to drown in what is left.",
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [ST, '「魚介系スープはあっさりした味わいながらもコク深い」; an October 2026 diner: "The broth was light and delicious" (' + R + 'B488596352/).'],
        oiliness: [ST, 'Stock chilled overnight and 「余分な脂をすべて取ってしまいます」; a 2026 diner found the aroma oil gave "a very mild texture" (' + R + 'B537889330/).'],
        clarity: [ST, '「透き通った黄金色のスープ」.'],
        tare_strength: [ST, '「キリッと塩の効いたスープ」; a 2026 diner: the saltiness "surprisingly revealing a strong presence" (' + R + 'B537889330/).'],
        noodle_firmness: [R + 'B537841231/', 'The slightly firm, medium-thin curly noodles.'],
        aroma_punch: [R + 'B537534729/', 'Greeted by the clear and rich aroma of the kombu, katsuobushi, and niboshi dashi; the chashu is torched to order.'],
      },
      confidence: 'high', sources: [ST, R + 'B488596352/', R + 'B537534729/', R + 'B537841231/', R + 'B537889330/'], last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-15-2 藤ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (evening service suspended); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目15番2号 (go) 33m; OSM node 6303025685 「麺処 銀笹」 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B488596352/', R + 'B537350084/', R + 'B537841231/', R + 'B426814268/'],
    price_note: 'No published menu. Ramen prices come from October 2026 reviews; the half sea-bream rice price is from July 2024.', last_checked: TODAY, items: [
      it('銀笹ラーメン 塩', 'ginzasa raamen shio', 'Ginzasa ramen, salt', '¥1,100', 'Ramen', 'no', 'no', 'October 2026. Large +¥150.', 'shio_ramen'),
      it('銀笹ラーメン 白醤油', 'ginzasa raamen shiro shouyu', 'Ginzasa ramen, white soy sauce', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'shiro_shoyu_ramen'),
      it('つけ麺', 'tsukemen', 'Tsukemen (salt or white soy sauce)', '', 'Ramen', 'no', 'no', 'In the 2022 feature.', 'tsukemen'),
      it('半鯛飯', 'han taimeshi', 'Half sea-bream rice (one bowl)', '¥250', 'Rice', 'ask', 'no', 'July 2024 price. Made to be finished with the ramen soup.', 'half_taimeshi'),
      it('鯛飯', 'taimeshi', 'Sea-bream rice (two bowls)', '', 'Rice', 'ask', 'no', '', 'taimeshi'),
      it('味玉', 'ajitama', 'Seasoned egg', '', 'Toppings', 'ask', 'no', '', 'ajitama'),
    ] }, {
    cuisine: '和食仕立ての塩・白醤油ラーメン・ラーメンのスープで食べる鯛飯茶漬け',
    neighborhood: '銀座八丁目、昭和通りと海岸通りの交差点近くの路地裏。新橋駅から徒歩6〜8分、築地市場駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。ラーメン・つけ麺は小麦の麺で、タレの一つは白醤油(通常は主に小麦から造られます)です。グルテンフリーの選択肢はどの情報源にもありません。鯛飯は焼いた鯛の炊き込みご飯ですが、ラーメンのスープをかけて食べるもので、味付けは公表されていません。',
    vegan_detail: 'ヴィーガンではありません。スープは鶏と豚の出汁に昆布・煮干しの出汁を合わせたもの(店主談)。豚バラチャーシューと鯛のつみれがのり、看板のサイドは鯛の炊き込みご飯です。',
    notes: '[個人店・出汁ラーメン] 銀座と新橋の間の路地裏にある、薄暗く静かな店。日本料理の職人を18年務めた笹沼高広さんが2010年に開きました。鯛茶漬けが人気の銀座の店で働いた経験から、ラーメンを食べ、鯛飯をそのまま食べ、残りにスープをかけて茶漬けにするスタイルを作りました。スープは鶏と豚の出汁を一晩寝かせて脂を取り、昆布・煮干しの出汁と合わせたもので、鯛出汁ではありません。味は塩か白醤油。懐石のお椀に見立てた一杯に、桜色の鯛のつみれと、注文ごとに炙る豚バラチャーシュー。片口の丼は店主の陶芸の師匠による飯能焼で、スープをご飯に注ぎやすくしてあります。食べログ ラーメン百名店に2017〜2025年連続選出。11:15の開店時には行列ができます。',
  });
}

// ================================================================ 銀座 創龍
{
  const OWN = 'https://www.nogata-hope.com/ginza_soryu/'; const M = n => `https://www.nogata-hope.com/menu/ginza_menu/${n}/`;
  const TB = TBR('A130101/13227823'); const R = TB + 'dtlrvwlst/';
  const late = day(['11:00', '03:00']);
  put({
    id: 'tokyo_ginza_soryu', name: '銀座 創龍 (Ginza Sōryū)', category: 'OMNI',
    lat: 35.671599, lng: 139.761664,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Every bowl is wheat noodles, including whole-wheat flat noodles for the tsukemen. The tare are soy-sauce based: Kikkogo shoyu, white soy sauce and shiro-tamari, or a shoyu tonkotsu. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The clear soups are chicken frames and feet with aromatic vegetables, some with flying-fish dashi. The tonkotsu bowls use pork head and bones, and even the tomato ramen is a chicken-salt soup. The white-shoyu tare includes ishiru fish sauce. Gyoza are the side dish.',
    hours_raw: 'Mon–Sat 11:00–03:00 (next day); Sun 11:00–23:00. Closed over New Year. Cards, e-money and PayPay accepted.',
    hours: { 0: late, 1: late, 2: late, 3: late, 4: late, 5: late, 6: day(['11:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 6-chōme, glass-fronted ground floor — 2 min from Ginza Stn exit C2',
    cuisine: 'Tokyo-style shoyu ramen with Kikkogo soy sauce · burnt-lard shoyu · tonkotsu shoyu · gyoza', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('銀座 創龍 東京都中央区銀座6-4-18'), menu_url: OWN,
    notes: "[Ramen · Tokyo shoyu, late night] The Ginza shop of 株式会社創龍, the company behind the Nogata Hope ramen shops (its first Nogata Hope opened in 1988). Opened in October 2018 as a step-up, glass-fronted room with high ceilings, sofa seats and a counter facing the kitchen. The focus is Tokyo: Kikkogo soy sauce from Kondō Jōzō, which the shop calls Tokyo's only soy-sauce brewery, and Edo-na greens. The signature 大江戸焦がし醤油 burns the house shoyu tare in lard, and the burnt lard seals the clear soup so it stays hot. Other bowls: a mellow white shoyu with shiro-tamari, ishiru and Izu Ōshima salt; a black shoyu with flying-fish dashi; Nogata Hope's original tonkotsu shoyu 元; the richer 濃 with fish dashi, garlic oil and spicy miso; and a tomato ramen. Open until 3 a.m. six nights a week, it fills with after-drinks crowds.",
    chef_bio: {
      chef_name: null, roles: ['ramen company (株式会社創龍 — Nogata Hope, Ginza Sōryū)'],
      origin: 'Ginza Sōryū opened 29 October 2018 (Tabelog); Nogata Hope founded 1988',
      background: 'Produced by Nogata Hope and run by 株式会社創龍 of Takadanobaba, which also operates the Nogata Hope shops and a kitchen car.',
      philosophy: '「東京ならではの味にフォーカス」 — ramen that tastes of Tokyo.',
      specialty: 'Burnt-lard Kikkogo shoyu ramen; white shoyu; Nogata Hope tonkotsu shoyu; several kinds of gyoza.',
      anecdotes: [
        { text: '「自家製の醤油ダレをラードで焦がし…清湯スープを焦がしラードで蓋をすることにより最後まで熱々で食べられる」 — the shop on its signature bowl.', source: M(669) },
        { text: 'On 濃: 「『元』が伝統的な東京醤油とんこつラーメンであれば『濃』は私たちがこれから先もラーメン屋として続いていくために生み出した新しいラーメンです」', source: M(664) },
        { text: 'An October 2026 diner, there after 10 p.m. on a weekday: the place was full, "many people come here as a second or third stop on their night out."', source: R + 'B537541527/' },
        { text: 'Another October 2026 diner liked the shiro ramen but found the gyoza tiny for ¥680.', source: R + 'B537016651/' },
      ],
      japanese_sources_summary: '公式(nogata-hope.com): 銀座創龍は「野方ホープ」がプロデュース、東京唯一の醤油蔵元・近藤醸造「キッコーゴ醤油」と江戸菜を使用。大江戸焦がし醤油1,180円(自家製醤油ダレをラードで焦がす)、大江戸白醤油1,100円(白醤油2種・白たまり・いしる・伊豆大島の深層海塩)、大江戸黒醤油1,100円(鶏ガラ・モミジ・香味野菜の清湯+飛魚だし)、元1,130円(豚頭・背ガラ・ゲンコツを約10時間)、濃1,180円(魚介だし・自家製マー油・辛みそ)、とまとラーメン1,200円(トマト+鶏塩)、白醤油つけ麺1,280円(全粒粉平打ち麺)。株式会社創龍(新宿区高田馬場)。食べログ: 月〜土11:00〜翌3:00、日11:00〜23:00、28席、カード・電子マネー・PayPay可、英語メニューあり、2018年10月29日オープン。',
      confidence: 'high', sources: [OWN, 'https://www.nogata-hope.com/about/', M(669), M(680), M(666), M(675), M(664), M(661), M(657), TB, R + 'B536917190/', R + 'B537541527/'],
    },
    cultural_comfort: { level: 'english', note: 'English menu available (Tabelog). Bright, spacious room with counter and sofa seats; cards and PayPay accepted; open late.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Tsukemen uses whole-wheat flat noodles (小麦香る全粒粉、平打ち麺).', source: M(657) }],
      soy_sauce_wheat: [{ text: 'White-shoyu tare of two white soy sauces, shiro-tamari and ishiru; signature bowls use Kikkogo shoyu.', source: M(680) }],
      vegan_cross_contact: [{ text: 'Tomato ramen is tomato blended with a chicken-salt soup.', source: M(661) }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'pork', 'vegetable', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['lard'], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Thin noodles with the burnt shoyu (2026 review); medium-thick curly with 濃; whole-wheat flat noodles for tsukemen and flat noodles for the tomato ramen (shop).' },
      regional_style: ['Tokyo shoyu'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: '大江戸焦がし醤油 (Ōedo burnt shoyu) — ¥1,180.',
      chashu: 'Several kinds: moist chicken chashu and thin-sliced pork; chuck-eye roll chashu on 濃 (2026 reviews).',
      notable_toppings: ['Edo-na greens', 'chicken chashu', 'tomato and cheese (tomato ramen)'],
      gf: { status: 'no', note: 'Wheat noodles; shoyu tare.' },
      vegan: { status: 'no', note: 'Chicken and pork soups.' },
      pantheon: 'Nogata Hope dressed up for Ginza: a Tokyo shoyu made with Kikkogo soy sauce from what the shop calls Tokyo\'s only brewery, burnt in lard so a smoky, bitter-sweet lid keeps the clear soup hot — served until 3 a.m.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [M(669), 'A clear soup (清湯) simmered for hours under burnt lard; the white shoyu is "light yet allows you to fully appreciate the rich flavors" (' + R + 'B537701383/).'],
        oiliness: [M(669), '「清湯スープを焦がしラードで蓋をする」.'],
        clarity: [M(669), 'A chintan base darkened by burnt shoyu tare.'],
        tare_strength: [M(669), '「自家製の醤油ダレをラードで焦がし、適度な苦みと甘み、香ばしさを演出」.'],
        noodle_firmness: [R + 'B537219278/', 'The noodles were cooked to the perfect firmness.'],
        aroma_punch: [R + 'B537218880/', 'The aroma of the broth was delightful; the shop calls it 「香り豊かなくせになる1杯」 (' + M(669) + ').'],
      },
      confidence: 'medium', sources: [M(669), M(680), R + 'B537219278/', R + 'B537218880/', R + 'B537701383/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-18 マキシドピアビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official menu pages live (©2026); Tabelog reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番18号 (go) 9m; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [OWN, M(669), M(680), M(666), M(675), M(664), M(661), M(657), R + 'B537016651/'],
    price_note: 'Ramen prices from the shop\'s own menu pages (tax included). The gyoza price is from an October 2026 review.', last_checked: TODAY, items: [
      it('大江戸焦がし醤油', 'oo-edo kogashi shouyu', 'Ōedo burnt shoyu ramen (shoyu tare burnt in lard)', '¥1,180', 'Ramen', 'no', 'no', '', 'kogashi_shoyu_ramen'),
      it('大江戸白醤油', 'oo-edo shiro shouyu', 'Ōedo white shoyu ramen', '¥1,100', 'Ramen', 'no', 'no', 'White soy sauce, shiro-tamari, ishiru fish sauce.', 'shiro_shoyu_ramen'),
      it('大江戸黒醤油', 'oo-edo kuro shouyu', 'Ōedo black shoyu ramen (with flying-fish dashi)', '¥1,100', 'Ramen', 'no', 'no', '', 'kuro_shoyu_ramen'),
      it('元 ―はじめ―', 'hajime', '"Hajime" — Nogata Hope tonkotsu shoyu', '¥1,130', 'Ramen', 'no', 'no', '', 'tonkotsu_shoyu_ramen'),
      it('濃 ―こく―', 'koku', '"Koku" — tonkotsu with fish dashi, garlic oil and spicy miso', '¥1,180', 'Ramen', 'no', 'no', '', 'koku_ramen'),
      it('とまとラーメン', 'tomato raamen', 'Tomato ramen (tomato and chicken-salt soup)', '¥1,200', 'Ramen', 'no', 'no', '', 'tomato_ramen'),
      it('白醤油つけ麺', 'shiro shouyu tsukemen', 'White-shoyu tsukemen (whole-wheat flat noodles in bonito-kombu dashi)', '¥1,280', 'Ramen', 'no', 'no', '', 'shiro_shoyu_tsukemen'),
      it('餃子', 'gyouza', 'Gyoza (thin-skinned)', '¥680', 'Sides', 'no', 'no', 'October 2026 review. Iron-plate, steamed and tomato gyoza are also offered.', 'gyoza'),
    ] }, {
    cuisine: 'キッコーゴ醤油の東京醤油ラーメン・焦がし醤油・醤油とんこつ・餃子',
    neighborhood: '銀座六丁目、ガラス張りの路面店。銀座駅C2出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。どの一杯も小麦の麺で、つけ麺は全粒粉の平打ち麺です。タレはキッコーゴ醤油、白醤油・白たまり、醤油とんこつと、すべて醤油系です。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。清湯は鶏ガラ・モミジ・香味野菜(一部は飛魚だし入り)、とんこつは豚頭・ゲンコツ、とまとラーメンも鶏塩スープです。白醤油ダレには魚醤のいしるが入ります。サイドは餃子です。',
    notes: '[ラーメン・東京醤油・深夜営業] 「野方ホープ」(1988年創業)を手がける株式会社創龍の銀座店で、2018年10月開業。天井が高く、ソファー席と厨房前のカウンターがあるガラス張りの店です。テーマは東京で、東京唯一の醤油蔵元を名乗る近藤醸造のキッコーゴ醤油と江戸菜を使います。看板の大江戸焦がし醤油は、自家製の醤油ダレをラードで焦がし、その焦がしラードで清湯スープに蓋をして最後まで熱々に。ほかに白醤油・白たまり・いしる・伊豆大島の塩のまろやかな白醤油、飛魚だしの黒醤油、野方ホープ伝統の醤油とんこつ「元」、魚介だし・マー油・辛みその「濃」、とまとラーメン。週6日は深夜3時まで営業し、飲んだ後の客でにぎわいます。',
  });
}

// ================================================================ 銀座月や
{
  const OWN = 'https://ginza6.tokyo/shops/153523/'; const PR = 'https://prtimes.jp/main/html/rd/p/000000022.000090173.html';
  const TB = TBR('A130101/13284308'); const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '16:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_ginza_tsukiya', name: '銀座月や (Ginza Tsukiya)', category: 'OMNI',
    lat: 35.669452, lng: 139.763769,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The ramen is thin wheat noodles in a pork-bone soup, and the set adds fried horse mackerel and shumai, which normally have wheat in the coating and wrapper. The tarako rice comes with a special spicy sauce whose ingredients are not published. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The signature is a clear pork-bone (tonkotsu) ramen with pork, and the rice dishes are built on cod roe (tarako). Fried horse mackerel and shumai fill out the set.',
    hours_raw: 'Daily 11:00–16:00 (L.O. 15:30) and 17:00–23:00 (L.O. 22:00). Cards and QR payments accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, GINZA SIX 6F restaurant floor — 3 min from Ginza Stn',
    cuisine: 'Clear (chintan) tonkotsu ramen from Hakata · Hakata tarako rice', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('銀座月や GINZA SIX 6F'), menu_url: null,
    notes: "[Ramen · clear tonkotsu] A Ginza-only spin-off of the Hakata shop 豚そば月や, opened on the sixth floor of GINZA SIX in April 2023. It rebuilt its Hakata pork soba from the ingredients up into a clear tonkotsu, light enough that diners finish the broth, with thin noodles ordered by firmness, from firm to extra firm. The bowl comes with a suggested order of add-ins: green onion, nori, chashu, a squeeze of kabosu, then pickled ginger. The other draw is Hakata tarako rice with a special spicy sauce; the cod roe comes from Yamato Violets of the Fukuya group, under a supply contract renewed in April 2026. There are dishes brought in from Fukuoka restaurants too, and a ¥3,300 Tsukiya set adds shumai, fried horse mackerel and tomato. Queues, many of them overseas visitors, form at lunch.",
    chef_bio: {
      chef_name: null, roles: ['Ginza offshoot of 豚そば月や (Hakata)'],
      origin: 'GINZA SIX 6F; opened 24 April 2023',
      background: 'A Ginza-only concept from the Hakata ramen shop 豚そば月や. The store manager is named Kōno (河埜) in a 2026 supplier press release.',
      philosophy: '「豚そば月や」の豚そばを食材から見直し、銀座でしか食べられないクリア豚骨ラーメン — rebuilding the Hakata pork soba from its ingredients.',
      specialty: 'Clear tonkotsu ramen; Hakata tarako rice with spicy sauce; Fukuoka specialities.',
      anecdotes: [
        { text: 'The supplier says Tsukiya buys more of its tarako than almost any other client, and that for many overseas visitors the tarako rice is their first taste of raw cod roe.', source: PR },
        { text: 'A September 2026 diner followed the recommended order (green onions → seaweed → chashu → kabosu → pickled ginger), had firm noodles, and still ordered extra noodles.', source: R + 'B535588965/' },
        { text: 'A repeat diner said the clear broth tastes "more like a high-quality, refined version of Sapporo Ichiban Shio Ramen" than a pork-bone soup.', source: R + 'B535949411/' },
      ],
      japanese_sources_summary: 'GINZA SIX公式: 銀座月や、「豚そば月や」の豚そばを食材から見直し、銀座でしか食べられないクリア豚骨ラーメン。月やオリジナルたらこの博多らしいご飯もの、福岡の名店から取り寄せたメニュー。PR TIMES(ヤマトバイオレッツ、2026年): 2023年4月GINZA SIX 6階オープン、博多たらこ飯(特製辛味ダレ付き)、OEM契約を2026年4月に継続更新、店舗責任者・河埜氏。食べログ: 毎日11:00〜16:00・17:00〜23:00、19席、カード・QR可。2026年の口コミ: クリア豚骨ラーメン、硬さ選択、替え玉、月やセット3,300円。',
      confidence: 'medium', sources: [OWN, PR, TB, R + 'B535588965/', R + 'B535949411/', R + 'B537834774/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Shopping-complex restaurant floor with many overseas visitors; cards and QR accepted. Expect a 20-minute queue at weekend lunch.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'The Tsukiya set includes fried horse mackerel and shumai alongside the ramen.', source: R + 'B535949411/' }],
      soy_sauce_wheat: [{ text: 'Shumai is served with a dashi-based light soy sauce.', source: R + 'B535949411/' }],
      vegan_cross_contact: [{ text: 'Clear pork-bone soup; tarako (cod roe) rice.', source: OWN }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['pork'], broth_texture: 'chintan', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles ordered by firmness (kata, barikata); extra noodles (kaedama) available.' },
      regional_style: ['Hakata'], sub_genre: ['ramen'],
      signature_bowl: 'クリア豚骨ラーメン (clear tonkotsu ramen) with Hakata tarako rice.',
      chashu: 'Thinly sliced pork with a good amount of fat, served on the side (2026 review).',
      notable_toppings: ['kabosu / sudachi', 'pickled ginger', 'green onion', 'nori'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: 'Hakata tonkotsu with the clouds taken out: a clear pork-bone soup you can drink to the bottom, thin noodles by firmness, a squeeze of kabosu — and a cod-roe rice bowl that steals the show.',
      profile: { richness: 2, oiliness: 1, clarity: 5, tare_strength: 2, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B535588965/', 'The broth is light yet packed with the rich flavor of pork bones.'],
        oiliness: [R + 'B535949411/', 'Its signature clear flavor, with no heaviness from the pork.'],
        clarity: [OWN, '「クリア豚骨ラーメン」.'],
        tare_strength: [R + 'B537834774/', 'A rather bland tonkotsu (October 2026).'],
        noodle_firmness: [R + 'B535588965/', 'I chose the "kata" (firm) noodles… thin and delicious; another diner ordered barikata (' + R + 'B537030168/).'],
        aroma_punch: [R + 'B535588965/', 'The kabosu had a lovely aroma; flavour comes from add-ins rather than the soup.'],
      },
      confidence: 'medium', sources: [OWN, R + 'B535588965/', R + 'B535949411/', R + 'B537834774/', R + 'B537030168/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-10-1 GINZA SIX 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'GINZA SIX shop page live; supplier press release April 2026; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目10番1号 (go) 38m (large building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, PR, R + 'B535588965/', R + 'B535949411/', R + 'B537834774/'],
    price_note: 'No menu read. Dishes and the set price come from 2026 reviews.', last_checked: TODAY, items: [
      it('クリア豚骨ラーメン', 'kuria tonkotsu raamen', 'Clear tonkotsu ramen', '', 'Ramen', 'no', 'no', 'Noodle firmness to order.', 'clear_tonkotsu_ramen'),
      it('替え玉', 'kaedama', 'Extra noodles', '', 'Ramen', 'no', 'ask', '', 'kaedama'),
      it('博多たらこ飯', 'hakata tarako meshi', 'Hakata tarako rice with special spicy sauce (small available)', '', 'Rice', 'ask', 'no', 'Sauce ingredients not published.', 'tarako_rice'),
      it('月やセット', 'tsukiya setto', 'Tsukiya set: ramen, tarako rice, shumai, fried horse mackerel, tomato', '¥3,300', 'Set', 'no', 'no', 'October 2026.', 'tsukiya_set'),
      it('焼売', 'shuumai', 'Shumai with dashi soy sauce', '', 'Sides', 'no', 'no', '', 'shumai'),
    ] }, {
    cuisine: '博多発のクリア豚骨ラーメン・博多たらこ飯',
    neighborhood: '銀座六丁目、GINZA SIX 6階レストランフロア。銀座駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。ラーメンは豚骨スープに小麦の細麺で、セットのアジフライや焼売は通常、衣や皮に小麦を含みます。たらこ飯に付く特製辛味ダレの材料は公表されていません。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。看板は豚のクリア豚骨ラーメンで、ご飯ものはたらこが中心。セットにはアジフライと焼売も入ります。',
    notes: '[ラーメン・クリア豚骨] 博多の「豚そば月や」が豚そばを食材から見直し、銀座でしか食べられないクリア豚骨ラーメンとして2023年4月にGINZA SIX 6階に開いた店です。スープを飲み干せる軽さで、細麺は硬さを選べます。薬味は、ねぎ→海苔→チャーシュー→かぼす→紅生姜の順がおすすめ。もう一つの看板は特製辛味ダレ付きの博多たらこ飯で、たらこはふくやグループのヤマトバイオレッツ製(2026年4月に契約更新)。福岡の名店から取り寄せた料理もあり、3,300円の月やセットには焼売・アジフライ・トマトが付きます。昼は海外からの客を含む行列ができます。',
  });
}

// ================================================================ ちりちりラーメン 風鈴屋
{
  const OWN = 'https://www.ginza9.com/shops/furinya.html';
  const RW = 'https://www.timeout.jp/tokyo/ja/レストラン/ちりちりラーメン風鈴屋';
  const TB = TBR('A130103/13038280'); const R = TB + 'dtlrvwlst/';
  const n = day(['18:00', '24:00']);
  put({
    id: 'tokyo_chirichiri_ramen_furinya', name: 'ちりちりラーメン 風鈴屋 (Chirichiri Ramen Fūrinya)', category: 'OMNI',
    lat: 35.668138, lng: 139.758978,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The house ramen is built on its own curly wheat noodles, and the menu adds shoyu ramen, jumbo gyoza, curry and curry udon. No gluten-free option is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'No source says what the soup is made from: the stall calls it a natural, home-made soup of carefully chosen ingredients. Most bowls come with chashu, and gyoza and offal stew are on the menu. A vegetable ramen exists, but whether its soup is meat-free is unknown. Ask before ordering.',
    hours_raw: 'Weekdays 18:00–24:00 (evenings only); closed Saturdays, Sundays and holidays (Ginza Nine). Cash only. Smoking allowed (Tabelog).',
    hours: { 0: n, 1: n, 2: n, 3: n, 4: n }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, Ginza Nine Bldg 1 ground floor under the expressway — 2–3 min from Shimbashi Stn',
    cuisine: 'Shōwa-style street-stall ramen · home-made curly noodles · shoyu, miso, shio · jumbo gyoza', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('ちりちりラーメン 風鈴屋 銀座ナイン1号館'), menu_url: OWN,
    notes: "[Ramen · Shōwa street stall] A night-only ramen counter in Ginza Nine, the arcade under the expressway on the Shimbashi edge of Ginza, with round stools and tables outside like a yatai. The name comes from its home-made chirichiri (crinkly) noodles, served in a light, home-made soup as shoyu, miso or shio. Spring onion is free and any bowl can be made a negi ramen, and coriander is free on request though not on the menu; Ramen Walker recommends shio piled with coriander and the house Thai-style chilli sauce. Five jumbo gyoza are ¥550, shoyu ramen ¥750 and canned beer ¥400 (2026). Half-curry sets and curry udon have their fans. Reviewers in 2026 describe an elderly couple running it, who handed one hot diner a cooling sheet; no source names them.",
    chef_bio: {
      chef_name: null, roles: ['owner-run night stall (owners not named in any source)'],
      origin: 'Ginza Nine 1, 1F; opening year not found',
      background: '2026 reviewers describe service from an elderly couple; no source gives their names or the opening date.',
      philosophy: '「味に自信あり！ 選び抜かれた素材をじっくり煮込んだスープに舌鼓」 — the stall\'s own listing.',
      specialty: 'Home-made chirichiri noodles; shoyu, miso and shio ramen; jumbo grilled gyoza; ramen with half curry.',
      anecdotes: [
        { text: 'Not on the menu, but coriander is a free topping on request; the recommended way is shio ramen heaped with coriander and the house Thai-style chilli sauce.', source: RW },
        { text: 'June 2026: "The service from the elderly couple was pleasantly neither cold nor overly warm," with a big pot of stock simmering behind the counter.', source: R + 'B529349743/' },
        { text: 'August 2026: sweating in the heat, a diner was handed a cooling sheet by the owner, and the chef asked at the end whether the gyoza were too big.', source: R + 'B533151113/' },
        { text: 'The Ginza Nine page offers a free upgrade to chashu-men to anyone who shows a printout of it before ordering.', source: OWN },
      ],
      japanese_sources_summary: '銀座ナイン公式: 風鈴屋、GINZA NINE 1号館1F、平日18:00〜24:00(夜のみ)、土日祝休。「選び抜かれた素材をじっくり煮込んだスープ」、ねぎはサービスで全てねぎラーメンに可。おすすめ: ラーメン(しょうゆ・みそ・しお)、ラーメン半カレー、海産ラーメン、ジャンボ焼餃子(5個入り)。ラーメンWalker(Time Out掲載): 自家製のちりちり麺、天然手作りスープ、頼めばパクチー無料、自家製タイ風チリソース。食べログ: 現金のみ、喫煙可。2026年の口コミ: 醤油ラーメン750円、ジャンボ焼餃子550円、缶ビール400円、わかめラーメン800円、年配のご夫婦が営む。',
      confidence: 'medium', sources: [OWN, RW, TB, R + 'B526759131/', R + 'B529349743/', R + 'B533151113/', R + 'B514169178/'],
    },
    cultural_comfort: { level: 'japanese', note: 'A tiny counter plus outdoor stools; cash only; smoking allowed. Salarymen after drinks and some overseas visitors. Japanese only, but the menu is short.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Home-made curly wheat noodles (自家製のちりちり麺).', source: RW }],
      soy_sauce_wheat: [{ text: 'Shoyu ramen is the classic order.', source: R + 'B526759131/' }],
      vegan_cross_contact: [{ text: 'Chashu, menma and wakame on the shoyu ramen; offal stew and gyoza on the menu.', source: R + 'B524917306/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: [], broth_texture: null, tare: ['shoyu', 'miso', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: true, notes: 'Home-made crinkly "chirichiri" noodles (Ramen Walker); described in 2026 as hand-kneaded, medium-thick and wavy.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'しょうゆラーメン (shoyu ramen) — ¥750 in 2026; or shio with free coriander and Thai chilli sauce.',
      chashu: 'Classic sliced chashu; chashu-men available.',
      notable_toppings: ['wakame', 'menma', 'free spring onion', 'free coriander on request', 'house Thai-style chilli sauce'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'ask', note: 'Soup ingredients not published.' },
      pantheon: 'A Shōwa yatai that never left: crinkly home-made noodles in a light shoyu soup, jumbo gyoza and canned beer on round stools under the expressway, weeknights until midnight.',
      profile: { richness: 2, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B524917306/', 'A refreshing texture that is light yet comforting, with a gentle, home-style taste; Ramen Walker: 「すっきりした喉越し」 (' + RW + ').'],
        oiliness: [R + 'B533151113/', 'The broth is soy sauce-based with a rich oil; another diner noticed "a slight greasiness" (' + R + 'B529349743/).'],
        clarity: MID,
        tare_strength: [R + 'B526759131/', 'The nostalgic aroma of soy sauce… complemented by a solid salty core.'],
        noodle_firmness: [R + 'B528430625/', 'The noodles were chewy and tasty.'],
        aroma_punch: [R + 'B526759131/', 'The nostalgic aroma of soy sauce; the soy base is "slightly lighter" (' + R + 'B505004495/).'],
      },
      confidence: 'medium', sources: [RW, R + 'B524917306/', R + 'B526759131/', R + 'B528430625/', R + 'B529349743/', R + 'B533151113/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-5 銀座ナイン1号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Ginza Nine shop page live; Tabelog reviews dated March–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目5番 (lot, long block under the expressway) 84m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OWN, R + 'B526759131/', R + 'B514169178/', R + 'B528430625/', R + 'B530814992/'],
    price_note: 'Recommended dishes from the Ginza Nine page; prices from 2025–2026 Tabelog reviews.', last_checked: TODAY, items: [
      it('しょうゆラーメン', 'shouyu raamen', 'Shoyu ramen', '¥750', 'Ramen', 'no', 'ask', '2026.', 'shoyu_ramen'),
      it('みそラーメン', 'miso raamen', 'Miso ramen', '', 'Ramen', 'no', 'ask', '', 'miso_ramen'),
      it('しおラーメン', 'shio raamen', 'Shio ramen (coriander free on request)', '', 'Ramen', 'no', 'ask', '', 'shio_ramen'),
      it('わかめラーメン しょうゆ', 'wakame raamen shouyu', 'Wakame ramen, shoyu', '¥800', 'Ramen', 'no', 'ask', 'September 2025.', 'wakame_ramen'),
      it('野菜ラーメン', 'yasai raamen', 'Vegetable ramen', '', 'Ramen', 'no', 'ask', 'Soup not described.', 'vegetable_ramen'),
      it('海産ラーメン', 'kaisan raamen', 'Seafood ramen', '', 'Ramen', 'no', 'no', '', 'seafood_ramen'),
      it('ラーメン 半カレー', 'raamen han karee', 'Ramen with half curry', '', 'Set', 'no', 'ask', '', 'ramen_half_curry'),
      it('カレーうどん', 'karee udon', 'Curry udon', '', 'Noodles', 'no', 'ask', '', 'curry_udon'),
      it('ジャンボ焼餃子(5個)', 'janbo yaki gyouza', 'Jumbo grilled gyoza (5)', '¥550', 'Sides', 'no', 'no', 'April 2026.', 'jumbo_gyoza'),
      it('もつ煮込み', 'motsu nikomi', 'Offal stew', '', 'Sides', 'ask', 'no', '', 'motsu_nikomi'),
      it('缶ビール', 'kan biiru', 'Canned beer (Asahi, Kirin, Sapporo)', '¥400', 'Drinks', 'no', 'ask', 'Beer is barley.', 'canned_beer'),
    ] }, {
    cuisine: '昭和の屋台風ラーメン・自家製ちりちり麺・しょうゆ・みそ・しお・ジャンボ餃子',
    neighborhood: '銀座八丁目、高速道路下の銀座ナイン1号館1F。新橋駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。看板は小麦の自家製ちりちり麺で、ほかにジャンボ餃子、カレー、カレーうどんがあります。グルテンフリーの選択肢はありません。',
    vegan_detail: 'スープの材料はどの情報源にも書かれていません(店は「選び抜かれた素材をじっくり煮込んだスープ」としています)。ほとんどの一杯にチャーシューがのり、餃子やもつ煮込みもあります。野菜ラーメンはありますが、スープが動物性不使用かは不明です。注文前に確認してください。',
    notes: '[ラーメン・昭和の屋台] 銀座の新橋寄り、高速道路下の銀座ナインにある夜だけのラーメン店。外に丸椅子とテーブルが並び、屋台のような雰囲気です。店名の「ちりちり」は自家製の縮れ麺のことで、すっきりした手作りスープでしょうゆ・みそ・しおが選べます。ねぎはサービスで全てねぎラーメンにでき、メニューにはないパクチーも頼めば無料。ラーメンWalkerのおすすめは、塩ラーメンにパクチーを山盛りにし自家製のタイ風チリソースをかける食べ方です。2026年はジャンボ焼餃子5個550円、醤油ラーメン750円、缶ビール400円。半カレーやカレーうどんにもファンがいます。2026年の口コミでは年配のご夫婦が営み、暑い日に客に冷却シートを渡したそうですが、名前はどの情報源にもありません。',
  });
}

// ================================================================ どさん娘 (新橋駅前ビル)
{
  const TB = TBR('A130103/13049853'); const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '13:30'], ['17:00', '21:00']);
  put({
    id: 'tokyo_dosanko_shimbashi_ekimae', name: 'どさん娘 新橋駅前ビル店 (Dosanko, Shimbashi Ekimae Bldg)', category: 'OMNI',
    lat: 35.666401, lng: 139.759561,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The menu is wheat-noodle ramen (shoyu, miso, tantanmen) with shumai and Chinese set meals. No gluten-free option is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'No source says what the soup is made from. The ramen comes with chashu or pork, and the sets add shumai; stir-fried pork liver with garlic chives is also on the menu. The miso ramen is topped with bean sprouts, menma and green onion, but its soup is undescribed. Ask before ordering.',
    hours_raw: 'Mon–Sat 11:30–13:30 and 17:00–21:00; closed Sundays (Tabelog). Cash or Rakuten Edy; no cards. Smoking allowed (Tabelog).',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1 B1F — 1 min from Shimbashi Stn, linked underground',
    cuisine: 'Shōwa-era ramen counter · miso and shoyu ramen · Chinese set meals', cuisine_type: 'ramen',
    website: null, gmaps: gm('どさん娘 新橋駅前ビル1号館'), menu_url: null,
    notes: "[Ramen · Shōwa counter] A ten-seat counter in the basement of Shimbashi Ekimae Building No. 1, one of the station-front buildings where Shimbashi salarymen eat fast. A 2026 reviewer recalls Dosanko and Dosan Musume as ramen chains seen everywhere in the Shōwa era, and rare now. 2026 diners order miso ramen heaped with bean sprouts, menma and green onion, or the shoyu ramen set with half rice and two shumai (¥1,000 in August 2026), plus tantanmen (¥850). One diner found the miso gentle, closer to a miso-and-shoyu blend. Reviewers describe an elderly couple running it; no source names them.",
    chef_bio: {
      chef_name: null, roles: ['owner-run counter (owners not named in any source)'],
      origin: 'Shimbashi Ekimae Bldg No. 1 B1F; opening year not found',
      background: '2026 reviewers describe an elderly couple running it. The shop carries the どさん娘 name, which a 2026 reviewer recalls as a Shōwa-era ramen chain; no source documents this shop\'s owner or how it relates to the brand today.',
      philosophy: null,
      specialty: 'Miso ramen; shoyu ramen set with half rice and shumai; tantanmen; liver and garlic-chive stir-fry.',
      anecdotes: [
        { text: '"Dosanko and Dosan Musume were once popular ramen chains seen everywhere during the Showa era, but these days, they have become quite rare" — September 2026.', source: R + 'B536379351/' },
        { text: 'July 2026: "It has a simple and rustic atmosphere, run by an elderly couple, which makes it feel very cozy."', source: R + 'B531671036/' },
        { text: 'August 2026: other customers ordered the moment they came through the noren; the reviewer was in and out in about ten minutes.', source: R + 'B536676044/' },
      ],
      japanese_sources_summary: '食べログ: どさん娘、新橋駅前ビル1号館B1F、月〜土11:30〜13:30・17:00〜21:00、日休、10席カウンターのみ、カード不可・楽天Edy可、喫煙可。2026年の口コミ: 年配のご夫婦が営む、味噌ラーメン(もやし・メンマ・ねぎ)、醤油ラーメン定食(半ライス・焼売2個)1,000円、担々麺850円、レバニラ炒め。',
      confidence: 'low', sources: [TB, R + 'B531671036/', R + 'B536379351/', R + 'B536676044/', R + 'B531468774/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Ten-seat counter, Japanese only, quick turnover at lunch. Cash or Rakuten Edy; smoking allowed per Tabelog.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Ramen, shumai and Chinese set meals from one small kitchen.', source: R + 'B536676044/' }],
      soy_sauce_wheat: [{ text: 'The miso ramen tasted "more like a blend of miso and soy sauce".', source: R + 'B531468774/' }],
      vegan_cross_contact: [{ text: 'Chashu ramen and pork-liver stir-fry on the menu.', source: R + 'B532755294/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: [], broth_texture: null, tare: ['miso', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Described only as chewy (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '味噌ラーメン (miso ramen); shoyu ramen set with half rice and two shumai ¥1,000 (August 2026).',
      chashu: 'Chashu ramen available.',
      notable_toppings: ['bean sprouts', 'menma', 'green onion', 'wakame'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'ask', note: 'Soup not described.' },
      pantheon: 'A survivor of the Shōwa ramen-chain era: a gentle miso under a pile of bean sprouts, with shumai and half rice, in a ten-seat basement counter by Shimbashi Station.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536379351/', 'A gentle, unpretentious flavor… free from excessive grease.'],
        oiliness: [R + 'B536379351/', 'Free from excessive grease.'],
        clarity: MID,
        tare_strength: [R + 'B531468774/', "The Miso Ramen didn't have a strong miso flavor."],
        noodle_firmness: [R + 'B536379351/', 'The chewy noodles paired perfectly with the nostalgic broth.'],
        aroma_punch: MID,
      },
      confidence: 'low', sources: [R + 'B536379351/', R + 'B531468774/', R + 'B532769736/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目20番 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536676044/', R + 'B531671036/', R + 'B535701671/', R + 'B531468774/'],
    price_note: 'No menu read. Dishes and two prices come from 2026 Tabelog reviews.', last_checked: TODAY, items: [
      it('味噌ラーメン', 'miso raamen', 'Miso ramen', '', 'Ramen', 'no', 'ask', '', 'miso_ramen'),
      it('醤油ラーメン定食', 'shouyu raamen teishoku', 'Shoyu ramen set (half rice, 2 shumai)', '¥1,000', 'Set', 'no', 'no', 'August 2026.', 'shoyu_ramen_set'),
      it('味噌ラーメンセット', 'miso raamen setto', 'Miso ramen set (half rice, 2 shumai)', '', 'Set', 'no', 'no', 'September 2026.', 'miso_ramen_set'),
      it('チャーシューメン', 'chaashuumen', 'Chashu ramen', '', 'Ramen', 'no', 'no', '', 'chashu_ramen'),
      it('担々麺', 'tantanmen', 'Tantanmen', '¥850', 'Ramen', 'no', 'ask', 'July 2026.', 'tantanmen'),
      it('レバニラ炒め', 'reba nira itame', 'Pork liver and garlic-chive stir-fry', '', 'Mains', 'ask', 'no', '', 'reba_nira'),
    ] }, {
    cuisine: '昭和のラーメン店・味噌・醤油・中華定食',
    neighborhood: '新橋二丁目、新橋駅前ビル1号館B1F。新橋駅から徒歩1分、地下通路で直結',
    gf_detail: 'グルテンフリーではありません。メニューは小麦麺のラーメン(醤油・味噌・担々麺)と焼売、中華の定食です。グルテンフリーの選択肢はありません。',
    vegan_detail: 'スープの材料はどの情報源にも書かれていません。ラーメンにはチャーシューや豚肉がのり、セットには焼売が付き、レバニラ炒めもあります。味噌ラーメンはもやし・メンマ・ねぎがたっぷりですが、スープは不明です。注文前に確認してください。',
    notes: '[ラーメン・昭和のカウンター] 新橋のサラリーマンがさっと食べる駅前ビルの一つ、新橋駅前ビル1号館の地下にあるカウンター10席の店。2026年の口コミは、「どさん子」「どさん娘」を昭和にどこでも見かけたラーメンチェーンで、今や珍しいと振り返っています。2026年の口コミでは、もやし・メンマ・ねぎたっぷりの味噌ラーメンや、半ライスと焼売2個付きの醤油ラーメン定食(2026年8月で1,000円)、担々麺(850円)が頼まれています。味噌は穏やかで、味噌と醤油を合わせたような味だったという口コミもあります。年配のご夫婦が営んでいると口コミにありますが、名前はどの情報源にもありません。',
  });
}

// ================================================================ 中華 三富
{
  const AS = 'https://ascii.jp/elem/000/004/228/4228627/';
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130201/13061676/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '15:00'], ['17:00', '21:30']);
  put({
    id: 'tokyo_chuka_santomi', name: '中華 三富 (Chūka Santomi)', category: 'MOM_AND_POP',
    lat: 35.678497, lng: 139.765603,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. More than twenty noodle dishes on wheat noodles made to order by a noodle maker, plus gyoza, fried rice, and stir-fries in sauce. No gluten-free option or allergen information is mentioned in any source.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'No source describes the soups or sauces. The best-known dishes are meat: stir-fried pork and vegetables, liver with garlic chives, and offal "stamina" ramen. Tanmen and chive-and-egg dishes are on a 60-item menu, but nothing is described as meat-free. Ask before ordering.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 17:00–21:30; closed Sundays (Tabelog). Cash only; pay at the register first for a plastic meal ticket. Smoking allowed (Tabelog).',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Marunouchi 1-chōme, under the brick railway arches by Tokyo Stn Marunouchi South exit — 6 min from Yūrakuchō',
    cuisine: 'Machi-chūka (neighbourhood Chinese) since 1971 · ramen, tanmen, miso ramen · meat-and-vegetable stir-fry · gyoza', cuisine_type: 'ramen',
    website: null, gmaps: gm('中華 三富 東京都千代田区丸の内1-10-12'), menu_url: null,
    notes: "[Mom & Pop · machi-chūka since 1971] A rare independent neighbourhood Chinese restaurant in Marunouchi, under the brick railway arches near Tokyo Station's south exit, where the yellow Hato buses line up. The owner's uncle opened it in 1971. Owner Hirata Kōichi worked here for about forty years and took over as the second generation around 2014. Chefs with twenty or thirty years in the kitchen still cook the founder's recipes, and the menu has barely changed. It runs to more than sixty dishes, more than twenty of them noodles. The owner's recommendations are the tanmen and the meat-and-vegetable stir-fry, the most popular dish, which becomes a set for ¥200 more. Regulars also come for liver with garlic chives, offal stamina ramen and miso ramen. Prices are low for Marunouchi: ramen was ¥800 in September 2026. You pay first for a coloured plastic meal ticket, and Marunouchi office workers queue even after lunch.",
    chef_bio: {
      chef_name: '平田浩一 (Hirata Kōichi, 2nd-generation owner)', roles: ['owner (2nd generation)'],
      origin: 'Opened 1971 (Shōwa 46) by the owner\'s uncle; Marunouchi 1-chōme',
      background: 'Hirata worked at Santomi for about forty years before succeeding his uncle, the founder, around 2014. Long-serving chefs keep the founder\'s recipes.',
      philosophy: 'Keep the founding menu and taste: the line-up has barely changed since 1971.',
      specialty: 'Meat-and-vegetable stir-fry; tanmen; liver and garlic chives; gyoza; more than twenty noodle dishes.',
      anecdotes: [
        { text: '「中華 三富」が開店したのは1971（昭和46）年。平田さんの叔父さんが始めたお店で、約40年ここで働いていた平田さんが10年ほど前にその跡を継いで2代目となった — ASCII.jp, October 2024.', source: AS },
        { text: '「20年、30年とここで腕を振るうベテランのシェフたちが先代のレシピを守り継いでいるので、味もほとんど変わっていません」', source: AS },
        { text: 'The writer was so surprised by Marunouchi prices of ¥750 ramen and ¥800 liver-and-chives that the headline asks 「ちゃんと儲かってますか？」 (are you actually making money?).', source: AS },
        { text: 'September 2026: "Even after lunch hours, salarymen from Marunouchi line up."', source: R + 'B535451427/' },
      ],
      japanese_sources_summary: 'ASCII.jp(2024年10月18日): 中華 三富(さんとみ)、東京駅すぐ、丸の内で珍しい個人店の町中華。1971(昭和46)年開店、店主・平田浩一さんの叔父が創業、約40年勤めた平田さんが10年ほど前に2代目に。ベテランシェフが先代のレシピを守る。60種類以上、麺類20種以上。ラーメン750円、レバニラ炒め800円、一番人気は肉野菜炒め800円(+200円で定食)、餃子500円・定食700円、タンメン950円、麺は製麺所に特注。食べログ: 月〜土11:00〜15:00・17:00〜21:30、日休、28席、現金のみ。2026年の口コミ: ラーメン800円・半チャーハン500円、麻婆豆腐定食1,050円、チャーハン850円、スタミナラーメン、前払いでプラスチックの食券。',
      confidence: 'high', sources: [AS, TB, R + 'B535451427/', R + 'B536290814/', R + 'B536705415/', R + 'B479004399/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Pay at the register as you enter for a plastic meal ticket; the full menu is posted beside the register. Cash only; counter plus large shared tables; portions are big.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Wheat noodles made to order by a noodle maker (麺は製麺所に特注したもの).', source: AS }],
      soy_sauce_wheat: [{ text: 'Gyoza served with vinegar, pepper, soy sauce and chilli oil at the table.', source: R + 'B536290814/' }],
      vegan_cross_contact: [{ text: 'Liver and garlic chives in a thick sweet-spicy sauce; offal stamina ramen.', source: R + 'B535657619/' }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: [], broth_texture: null, tare: ['shoyu', 'miso', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Made to order by a noodle maker (ASCII.jp); described in 2026 as chewy.' },
      regional_style: [], sub_genre: ['ramen', 'tanmen', 'machi-chuka'],
      signature_bowl: 'タンメン (tanmen) — ¥950 in 2024, the owner\'s noodle recommendation.',
      chashu: null,
      notable_toppings: ['stir-fried vegetables (tanmen)', 'offal and garlic chives (stamina ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'ask', note: 'Soups not described.' },
      pantheon: "Marunouchi's last-of-its-kind machi-chūka: the founder's 1971 recipes, a tanmen heaped with vegetables, and plastic meal tickets under the brick railway arches.",
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536705415/', 'The tanmen was loaded with vegetables and had a simple yet rich broth; the miso ramen is "rich" (' + R + 'B479004399/).'],
        oiliness: MID,
        clarity: MID,
        tare_strength: [R + 'B535451427/', 'The ramen offers a classic, unpretentious flavor.'],
        noodle_firmness: [R + 'B479004399/', 'The chewy noodles paired beautifully with the rich miso broth.'],
        aroma_punch: MID,
      },
      confidence: 'low', sources: [AS, R + 'B536705415/', R + 'B479004399/', R + 'B535451427/'], last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0005 東京都千代田区丸の内1-10-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区丸の内一丁目10番12号 (go) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [AS, R + 'B535451427/', R + 'B535211927/', R + 'B536290814/', R + 'B536705415/'],
    price_note: 'No menu read in full. Prices from ASCII.jp (October 2024) and September–October 2026 Tabelog reviews, as marked.', last_checked: TODAY, items: [
      it('ラーメン', 'raamen', 'Ramen', '¥800', 'Noodles', 'no', 'ask', 'September 2026 (¥750 in 2024).', 'ramen'),
      it('タンメン', 'tanmen', 'Tanmen (vegetable noodle soup)', '¥950', 'Noodles', 'no', 'ask', '2024; large +¥150.', 'tanmen'),
      it('味噌ラーメン', 'miso raamen', 'Miso ramen', '', 'Noodles', 'no', 'ask', '', 'miso_ramen'),
      it('スタミナラーメン', 'sutamina raamen', 'Stamina ramen (offal and garlic chives)', '', 'Noodles', 'no', 'no', '', 'stamina_ramen'),
      it('担担麺', 'tantanmen', 'Tantanmen', '', 'Noodles', 'no', 'ask', '', 'tantanmen'),
      it('肉野菜炒め', 'niku yasai itame', 'Stir-fried pork and vegetables (most popular)', '¥800', 'Mains', 'ask', 'no', 'Evening à la carte, 2024; +¥200 for a set. Lunch set ¥1,000.', 'niku_yasai_itame'),
      it('レバニラ炒め', 'reba nira itame', 'Liver and garlic-chive stir-fry', '¥800', 'Mains', 'ask', 'no', '2024.', 'reba_nira'),
      it('麻婆豆腐定食', 'maabo doufu teishoku', 'Mapo tofu set', '¥1,050', 'Set', 'ask', 'ask', 'September 2026.', 'mapo_tofu_set'),
      it('チャーハン', 'chaahan', 'Fried rice (half ¥500)', '¥850', 'Rice', 'ask', 'ask', 'September 2026.', 'fried_rice'),
      it('餃子', 'gyouza', 'Gyoza (6)', '¥500', 'Sides', 'no', 'no', 'Set ¥700 (2024).', 'gyoza'),
    ] }, {
    cuisine: '1971年創業の町中華・ラーメン・タンメン・味噌ラーメン・肉野菜炒め・餃子',
    neighborhood: '丸の内一丁目、東京駅丸の内南口そばの煉瓦アーチの高架下。有楽町駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。製麺所に特注した小麦の麺を使う20種以上の麺類に、餃子、チャーハン、タレで炒める料理。グルテンフリーの選択肢やアレルゲン情報はどの情報源にもありません。',
    vegan_detail: 'スープやタレの材料はどの情報源にも書かれていません。看板料理は肉野菜炒め、レバニラ炒め、ホルモン入りのスタミナラーメンなど肉料理です。60品以上のメニューにはタンメンやニラ玉もありますが、動物性不使用と書かれたものはありません。注文前に確認してください。',
    notes: '[個人店・1971年創業の町中華] 東京駅丸の内南口近く、はとバスの黄色いバスが並ぶそばの煉瓦アーチの高架下にある、丸の内では珍しい個人経営の町中華です。1971年に店主の叔父が創業し、約40年ここで働いた平田浩一さんが2014年ごろに2代目として継ぎました。20年、30年勤めるベテランのシェフたちが先代のレシピを守り、メニューもほとんど変わっていません。品数は60以上、麺類だけで20種以上。店主のおすすめはタンメンと、一番人気の肉野菜炒め(+200円で定食)。レバニラ、ホルモンのスタミナラーメン、味噌ラーメンも常連に人気です。丸の内としては安く、2026年9月のラーメンは800円。入口で先に払って色付きのプラスチック食券を受け取る方式で、昼過ぎでも丸の内の会社員が並びます。',
  });
}

save();
