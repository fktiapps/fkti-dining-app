// Ginza Station half-mile sweep (805 m), batch 32 — small independents found by filtering the Tabelog crawl cache for
// in-radius shops not yet in tokyo.json, then searching for named owners.
//   + 元酒屋 (yōshoku and Shichiken sake; owner 北原啓次, whose family brewery is 山梨銘醸 (七賢); reviewers describe it as run
//     by the brewery → OMNI)
//   + エルベ (beef-stew yōshoku behind the Kabukiza; owner not named → OMNI)
// Checked and not added: 千里軒 (Tabelog listing has no reviews, hours 17:00–05:00 — unverified); 蕎麦 流石 (has a sister
// shop, 流石Le蔵); 次男坊, 山形田 (no owner found yet); the Kemuri Yokocho tunnel (mostly chains; 登運とん, ふじ, 天米,
// 金陵, 爐端 already in).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 元酒屋
{
  const YP = 'https://www.pref.yamanashi.jp/tokyo/yamaaji/motosakaya.html';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13015006/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '13:15'], ['17:00', '22:00']);
  put({
    id: 'tokyo_motosakaya_ginza8', name: '元酒屋 (Motosakaya)', category: 'OMNI',
    lat: 35.669198, lng: 139.760472,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. A yōshoku kitchen: breaded chicken katsu, minced cutlet, shrimp cream croquettes, kushi-katsu and eggplant gratin, and chicken liver simmered in Worcestershire sauce. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: fried meat and seafood, ham, sausages, chicken liver, and a dry curry served with a soft-boiled egg.',
    hours_raw: 'Mon–Sat 11:30–13:15 and 17:00–22:00; closed Sundays, holidays and the third Saturday of each month (Tabelog). Cards (JCB, AMEX, Diners) and d Barai accepted.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, a 2F room just off Chūō-dōri — 4–5 min from Shimbashi Stn',
    cuisine: 'Retro yōshoku with Yamanashi\'s Shichiken sake (10+ labels) · chicken katsu and dry curry lunch', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('元酒屋 銀座8-5-24 西八ビル'), menu_url: null,
    notes: "[Yōshoku · Shichiken sake with fried food] A retro second-floor room in Ginza 8-chōme, toward Shimbashi, pairing yōshoku with sake from Shichiken, the Hokuto brewery of 山梨銘醸. The owner-cook, 北原啓次, comes from the brewing family, and some reviewers describe the shop as run by the brewery. It always stocks more than ten Shichiken sakes, and the owner's tip is the sparkling sake. Lunch is two fried items or the dry curry, with soup and rice. The curry is made with long-sautéed onions and beans and topped with a soft-boiled egg (¥1,200, August 2026), and the chicken katsu is a huge crisp cutlet (¥1,200, May 2026). In the evening diners pair the sake with sizzling eggplant gratin, kushi-katsu, thick-cut ham, spicy sausages, shrimp cream croquettes (¥950, August 2026) and chicken liver simmered in Worcestershire sauce. One table of 2026 regulars was surprised to pay only about ¥5,100 a head after a long night.",
    chef_bio: {
      chef_name: '北原啓次 (owner-cook)', roles: ['owner-cook'],
      origin: 'Owner\'s family brewery: 山梨銘醸 (七賢), Hokuto, Yamanashi',
      background: 'The Yamanashi prefectural Tokyo office lists the shop as a Shichiken collaboration run by 北原啓次, whose family home is the brewery; 2026 reviewers describe it as produced or run by the brewery.',
      philosophy: '「日本酒スパークリング人気です。」 — 北原啓次.',
      specialty: 'Chicken katsu; dry curry; Shichiken sake.',
      anecdotes: [
        { text: 'The owner opened up five minutes after the posted 11:30 for a waiting diner: "It\'s fine!" — May 2026.', source: R + 'B529384646/' },
        { text: '"The owner is from a brewery that produces Shichiken in Yamanashi Prefecture." — August 2026.', source: R + 'B370397467/' },
        { text: '"After quite a bit of drinking, when the bill came, it was surprisingly only JPY 5,100 per person." — 2026.', source: R + 'B530963919/' },
      ],
      japanese_sources_summary: '山梨県東京事務所(2026年5月更新): 元酒屋(もとさかや)、山梨の地酒「七賢」と洋食のコラボ、店主の実家は北杜市の蔵元・山梨銘醸(七賢)、七賢の日本酒を常時10種類以上、レトロな店で店主のふるまう洋食、北原啓次店主「日本酒スパークリング人気です」。食べログ: 銀座8-5-24 西八ビル2F、月〜土11:30〜13:15・17:00〜22:00、日祝・第3土曜休、25席。2026年の口コミ: ドライカレー1,200円(炒めた玉ねぎと豆、半熟卵)、チキンカツ1,200円、ランチは揚げ物2種かドライカレー、茄子のグラタン、串カツ、厚切りハム、ソーセージ、海老クリームコロッケ950円、鶏レバーのソース煮、七賢直営との記述。',
      confidence: 'medium', sources: [YP, TB, R + 'B370397467/', R + 'B510116789/', R + 'B529384646/', R + 'B529463133/', R + 'B529760194/', R + 'B530963919/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small second-floor room; quiet at lunch, lively with office groups at night.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Breaded chicken katsu, minced cutlet, cream croquettes and kushi-katsu.', source: R + 'B510116789/' }],
      soy_sauce_wheat: [{ text: 'Chicken liver simmered in Worcestershire sauce.', source: R + 'B530963919/' }],
      vegan_cross_contact: [{ text: 'Dry curry served with a soft-boiled egg.', source: R + 'B370397467/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-5-24 西八ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–August 2026; prefectural page updated May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目5番24号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B370397467/', R + 'B529384646/', R + 'B510116789/', R + 'B530963919/'],
    price_note: 'Prices from 2026 Tabelog reviews.', last_checked: TODAY, items: [
      it('ドライカレー', 'dorai karee', 'Dry curry with soft-boiled egg, soup and rice (lunch)', '¥1,200', 'Lunch', 'ask', 'no', '2026.', 'dry_curry'),
      it('チキンカツ', 'chikin katsu', 'Chicken katsu', '¥1,200', 'Lunch', 'no', 'no', '2026.', 'chicken_katsu'),
      it('海老クリームコロッケ', 'ebi kuriimu korokke', 'Shrimp cream croquettes', '¥950', 'Fried', 'no', 'no', '2026.', 'cream_croquette'),
      it('茄子のグラタン', 'nasu no guratan', 'Eggplant gratin', '', 'Evening', 'no', 'ask', '', 'eggplant_gratin'),
      it('鶏レバーのソース煮', 'tori rebaa no soosu ni', 'Chicken liver simmered in Worcestershire sauce', '', 'Evening', 'no', 'no', '', 'liver_sauce'),
      it('七賢 日本酒スパークリング', 'shichiken supaakuringu', 'Shichiken sparkling sake', '', 'Sake', 'gf', 'ask', '', 'shichiken_sparkling'),
    ] }, {
    cuisine: 'レトロな洋食と山梨の地酒「七賢」(常時10種以上)・チキンカツとドライカレーのランチ',
    neighborhood: '銀座八丁目、中央通りから一本入ったビルの2階。新橋駅から徒歩4〜5分',
    gf_detail: 'グルテンフリーではありません。洋食の店で、パン粉を付けたチキンカツ、メンチカツ、海老クリームコロッケ、串カツ、茄子のグラタン、ウスターソースで煮た鶏レバーなど。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。肉や魚介の揚げ物、ハム、ソーセージ、鶏レバー、半熟卵をのせたドライカレー。',
    notes: '[洋食・七賢と揚げ物] 銀座八丁目の新橋寄り、レトロなビル2階で、北杜市の蔵元・山梨銘醸の「七賢」と洋食を合わせる店。店主の北原啓次さんは蔵元の家の出で、口コミには七賢の直営とする声も。七賢は常時10種類以上、店主のおすすめは日本酒スパークリング。ランチは揚げ物2種かドライカレーにスープとご飯。じっくり炒めた玉ねぎと豆のドライカレーに半熟卵(2026年8月1,200円)、大きくサクサクのチキンカツ(2026年5月1,200円)。夜は熱々の茄子のグラタン、串カツ、厚切りハム、スパイシーなソーセージ、海老クリームコロッケ(2026年8月950円)、ウスターソースで煮た鶏レバーなどを日本酒と。2026年には、たっぷり飲んで1人約5,100円だったと驚く口コミも。',
  });
}

// ================================================================ エルベ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13007617/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '15:00'], ['17:30', '21:30']);
  put({
    id: 'tokyo_elbe_higashi_ginza', name: 'エルベ (Elbe)', category: 'OMNI',
    lat: 35.670545, lng: 139.769276,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The beef stew is simmered with Japanese sake instead of red wine and served in a clay pot; how it is thickened is not described, and it comes with bread. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: a beef and tongue stew house, with simmered hamburg steak. The lunch tofu salad (tofu, edamame, hijiki, carrot) is the plant-based side mentioned, and its dressing is not described.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:30–15:00 (L.O. 14:30) and 17:30–21:30 (L.O. 21:00); Sat dinner only at dinner prices; closed Wednesdays, Sundays and holidays (Tabelog). Cards and IC accepted.',
    hours: { 0: ld, 1: ld, 3: ld, 4: ld, 5: day(['17:30', '21:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, a back alley behind Magazine House and the Kabukiza — 1 min from Higashi-Ginza Stn',
    cuisine: 'Beef-stew yōshoku in a clay pot · stew made with Japanese sake instead of wine · wine snacks at night', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('エルベ 銀座3-13-17'), menu_url: null,
    notes: "[Yōshoku · the sake-braised beef stew] A narrow 26-seat yōshoku room in a back alley behind the Kabukiza, and a lunch spot for kabuki actors and kimono-clad theatregoers. The stew is the reason to come. Japanese sake goes in instead of red wine, giving a lighter, Japanese-leaning stew that suits rice served in a proper rice bowl. It comes bubbling in a clay pot, as beef, tongue or the 'Mix' of both. A small pot is generous with meat, lunch starts with a tofu salad of edamame, hijiki and carrot, and bread and cabbage come alongside. There is also a simmered hamburg steak, and in the evening a run of wine snacks such as cottage cheese, prosciutto, potato with grain mustard and a peach-and-cheese caprese. Staff suggest two or three small plates with the stew. Saturday is dinner only.",
    chef_bio: {
      chef_name: null, roles: [],
      origin: 'Back alley behind the Kabukiza; founding date not found in a source read',
      background: 'No source names the owner or chef.',
      philosophy: null, specialty: 'Beef stew; tongue stew; simmered hamburg steak.',
      anecdotes: [
        { text: '"Interestingly, it seems that they use Japanese sake instead of red wine in the beef stew." — August 2026.', source: R + 'B434779724/' },
        { text: '"It felt like a Japanese-style stew, which explains why ladies in kimonos gather here for lunch." — October 2026.', source: R + 'B536714763/' },
        { text: 'Staff told a first-timer that guests usually add two or three side dishes to the stew (October 2026).', source: R + 'B537797877/' },
      ],
      japanese_sources_summary: '食べログ: エルベ、銀座3-13-17 山田ビル1F、東銀座駅から徒歩1分・マガジンハウス裏、26席(カウンター6)、月火木金11:30〜15:00・17:30〜21:30、土は夜のみ、水日祝休、カード・IC可。2026年の口コミ: 赤ワインの代わりに日本酒を使ったビーフシチュー、土鍋、牛とタンの「ミックス」、小鍋でも肉たっぷり、ランチの豆腐サラダ(豆腐・枝豆・ひじき・人参)、煮込みハンバーグ、パンとキャベツ、夜はカッテージチーズ・生ハム・粒マスタードのポテト・桃とチーズのカプレーゼ、歌舞伎役者や着物の女性客。',
      confidence: 'low', sources: [TB, R + 'B434779724/', R + 'B535749019/', R + 'B536714763/', R + 'B537109982/', R + 'B537797877/', R + 'B535790874/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Narrow, nostalgic room; book for dinner (same-day Tabelog booking works). Saturdays dinner only.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Beef and tongue stews; simmered hamburg steak.', source: R + 'B537109982/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-13-17 山田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目13番17号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537109982/', R + 'B535749019/', R + 'B535790874/'],
    price_note: 'Dishes from 2026 Tabelog reviews; no prices captured.', last_checked: TODAY, items: [
      it('ビーフシチュー', 'biifu shichuu', 'Beef stew (sake instead of red wine), clay pot', '', 'Stew', 'ask', 'no', '', 'beef_stew'),
      it('ミックス(ビーフ・タン)', 'mikkusu', 'Mixed beef and tongue stew', '', 'Stew', 'ask', 'no', '', 'mix_stew'),
      it('煮込みハンバーグ', 'nikomi hanbaagu', 'Simmered hamburg steak', '', 'Mains', 'ask', 'no', '', 'nikomi_hamburg'),
      it('豆腐サラダ', 'toufu sarada', 'Tofu salad with edamame, hijiki and carrot (lunch)', '', 'Sides', 'ask', 'ask', '', 'tofu_salad'),
    ] }, {
    cuisine: '土鍋のビーフシチューの洋食・赤ワインの代わりに日本酒で煮込む・夜はワインのつまみも',
    neighborhood: '銀座三丁目、マガジンハウスと歌舞伎座の裏の路地。東銀座駅から徒歩1分',
    gf_detail: '要確認。ビーフシチューは赤ワインの代わりに日本酒で煮込み土鍋で出ますが、とろみの付け方は書かれておらず、パンが付きます。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。牛肉とタンのシチューの店で、煮込みハンバーグも。植物性の付け合わせとして挙がるのはランチの豆腐サラダ(豆腐・枝豆・ひじき・人参)で、ドレッシングは書かれていません。',
    notes: '[洋食・日本酒で煮込むビーフシチュー] 歌舞伎座裏の路地にある26席の細長い洋食店で、歌舞伎役者や着物姿の観劇客がランチに訪れます。目当てはシチューで、赤ワインの代わりに日本酒を使い、白いご飯に合う和風寄りのあっさりした味わい。ご飯はお茶碗で出ます。土鍋でぐつぐつと運ばれ、ビーフ、タン、両方の「ミックス」から選べます。小鍋でも肉はたっぷりで、ランチは豆腐・枝豆・ひじき・人参の豆腐サラダから始まり、パンとキャベツが添えられます。煮込みハンバーグもあり、夜はカッテージチーズ、生ハム、粒マスタードのポテト、桃とチーズのカプレーゼなどワインのつまみも。シチューに小皿を2〜3品合わせるのが定番だと店の人。土曜は夜のみ。',
  });
}

save();
