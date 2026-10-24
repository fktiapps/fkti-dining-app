// Ginza Station half-mile sweep (805 m), batch 28 — mom-and-pop discovery under the Yūrakuchō–Shimbashi tracks and in
// Hibiya's back alleys (san-tatsu 2024 features, re-mined from the cached area scan).
//   + お食事 いわさき (1920 oden stall → teishoku; 3rd-gen owner 岩崎博茂 since 1959, wife 君榮 and their daughters → MOM_AND_POP)
//   + もつ焼き ふじ (tunnel under the tracks; 3rd gen 五十嵐義幸 from 1991, 4th gen the son 貴洋 → MOM_AND_POP)
//   + 有楽町 天米 (1952 tempura; 2nd gen 川口成一, 3rd gen the third son 敬紀, okami 安子 → MOM_AND_POP)
// Not added: 銀座スイス (Tabelog lists a 本店 plus a 八重洲 branch → OMNI, later batch); 田村町 木村屋本店 (812 m, out);
// 築地さらしなの里 (947 m) and 幸軒 (913 m), out.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ お食事 いわさき
{
  const ST = 'https://san-tatsu.jp/articles/337876/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13051139/'; const R = TB + 'dtlrvwlst/';
  const l = day(['11:00', '14:00']);
  put({
    id: 'tokyo_oshokuji_iwasaki_yurakucho', name: 'お食事 いわさき (Oshokuji Iwasaki)', category: 'MOM_AND_POP',
    lat: 35.673564, lng: 139.760841,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. A fry-and-set-meal shop: the cutlets are dipped in a batter of egg, water and wheat flour, coated in breadcrumbs and fried in lard, and the katsudon is simmered in a sweet-savoury warishita.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Lard-fried pork and chicken cutlets, egg-bound katsudon, salt-grilled and miso-simmered mackerel; no plant-only set is described.',
    hours_raw: 'Mon–Fri 11:00–14:00 (lunch only); closed Saturdays, Sundays and holidays. Sets sell out and rice can run out by about 13:30. Cash only.',
    hours: { 0: l, 1: l, 2: l, 3: l, 4: l }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 1-chōme, a back alley by the tracks — 1–2 min from Hibiya Stn A4/A5',
    cuisine: 'Teishoku canteen since 1920 · lard-fried katsudon on a bed of nori · daily set ¥800', cuisine_type: 'shokudo',
    website: null, gmaps: gm('お食事 いわさき 有楽町1-6-9'), menu_url: null,
    notes: "[Mom & Pop · the 1920 canteen by the tracks] Opened in 1920 as a 24-hour oden stall under the Yūrakuchō tracks, it added a second shop in 1932 where The Peninsula Tokyo now stands, and settled in this alley in 1947, serving teishoku alongside oden, chameshi and even sushi. 岩崎博茂, born in 1942, became the third-generation owner in 1959, at 17, when the father collapsed: \"I only do it because I had to.\" The wife, 君榮, already worked here and is two years older; they married at 20 and 22, and in practice 君榮 ran the shop. With their daughters, the four of them handle the lunch rush in 12–15 seats. The signature katsudon is pork in an egg-and-flour batter and breadcrumbs, fried in lard, simmered in a 'trade secret' warishita with onion and egg and served in a square box over a layer of nori. Regulars order it as a 'wakare', with the cutlet and rice served separately. In autumn 2026 the katsudon set is ¥1,000 and the daily set ¥800, with chicken katsu, tonkatsu and mackerel; popular sets sell out after 13:00.",
    chef_bio: {
      chef_name: '岩崎博茂 (owner — 3rd generation) and 岩崎君榮 (wife)', roles: ['owner-cook (3rd generation)', 'co-owner, front of house'],
      origin: 'Oden stall under the tracks, 1920; at this address since 1947',
      background: '岩崎博茂 was born in 1942 and took over at 17 in 1959 after the father fell ill; runs the shop with wife 君榮 and their daughters (san-tatsu, 2024).',
      philosophy: '「いまでも仕事をイヤだと思ったことない」 — 君榮.',
      specialty: 'Katsudon set; tonkatsu; daily set.',
      anecdotes: [
        { text: '「親父がぶっ倒れたから仕方なくやってんだよ」 — 岩崎博茂, on becoming the owner at 17.', source: ST },
        { text: '君榮 wrote on a Tanabata strip: 「夫婦でずっとお仕事を続けられますように」', source: ST },
        { text: '"Both my father and mother are doing well, and the delicious set meal menu is as appealing as ever." — a long-time regular, August 2026.', source: R + 'B495932432/' },
      ],
      japanese_sources_summary: 'さんたつ(2024.9.6): お食事 いわさき、大正9年(1920)有楽町ガード下で24時間営業のおでん屋として創業、昭和7年に現ザ・ペニンシュラ東京の場所に2号店、1947年に現在地、3代目店主・岩崎博茂さん(1942年生まれ、1959年に17歳で継承)、妻・君榮さん、娘さんたちと4人、15席ほど、ランチのみ、日替り定食750円・とんかつ定食1100円・さば塩定食900円・かつ丼セット950円、バッター液(卵・水・小麦粉)とパン粉、ラードで揚げる、割下は企業秘密、海苔を敷いた四角い器、裏メニュー「ワカレ」、キャッシュ・オンリー、11:00〜14:00、土日祝休。食べログ: 12席、カード・電子マネー・QR不可。2026年の口コミ: かつ丼セット1,000円、日替り800円(生姜焼き)、チキンカツ、13:35にご飯終了、ごま塩。',
      confidence: 'high', sources: [ST, TB, R + 'B495932432/', R + 'B537722392/', R + 'B359812695/', R + 'B535198039/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Tiny Shōwa canteen; lunch only, cash only. Come before 13:00 — popular sets and rice run out.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Cutlets dipped in batter of egg, water and wheat flour, breaded and fried in lard.', source: ST }],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Frying fat is lard.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-6-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目6番9号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537722392/', R + 'B359812695/'],
    price_note: 'Katsudon set and daily set from October 2026 reviews; other prices from the September 2024 san-tatsu feature.', last_checked: TODAY, items: [
      it('かつ丼セット', 'katsudon setto', 'Katsudon set with miso soup and pickles', '¥1,000', 'Set meals', 'no', 'no', '2026; ¥950 in 2024.', 'katsudon_set'),
      it('日替り定食', 'higawari teishoku', 'Daily set meal', '¥800', 'Set meals', '', '', '2026; ¥750 in 2024.', 'daily_set'),
      it('とんかつ定食', 'tonkatsu teishoku', 'Tonkatsu set', '¥1,100', 'Set meals', 'no', 'no', '2024.', 'tonkatsu_set'),
      it('さば塩定食', 'saba shio teishoku', 'Salt-grilled mackerel set', '¥900', 'Set meals', 'ask', 'no', '2024.', 'saba_shio'),
      it('チキンカツ定食', 'chikin katsu teishoku', 'Chicken katsu set', '', 'Set meals', 'no', 'no', '', 'chicken_katsu'),
    ] }, {
    cuisine: '1920年創業の定食屋・ラードで揚げ海苔を敷いたかつ丼・日替り定食800円',
    neighborhood: '有楽町一丁目、高架沿いの路地。日比谷駅A4・A5出口から徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。揚げ物と定食の店で、カツは卵・水・小麦粉のバッター液とパン粉をつけてラードで揚げ、かつ丼は甘辛い割下で煮ます。',
    vegan_detail: 'ヴィーガンではありません。ラードで揚げる豚・鶏のカツ、卵とじのかつ丼、さばの塩焼き・味噌煮。植物性のみの定食はありません。',
    notes: '[個人店・高架沿いの1920年創業の食堂] 大正9年に有楽町のガード下で24時間営業のおでん屋として創業し、昭和7年には今のザ・ペニンシュラ東京の場所に2号店、1947年からこの路地で、おでんや茶飯、寿司まで出しながら定食屋を営んできました。1942年生まれの岩崎博茂さんが3代目を継いだのは1959年、17歳のとき。「親父がぶっ倒れたから仕方なくやってんだよ」と笑います。当時から店で働いていた2歳上の君榮さんと20歳と22歳で結婚し、実質的に店を切り盛りしてきたのは姉さん女房の君榮さんだったそう。今は娘さんたちと4人で、12〜15席の店のランチを回します。名物のかつ丼は、卵と小麦粉のバッター液とパン粉をつけてラードで揚げたカツを「企業秘密」の割下と玉ねぎ、卵でとじ、海苔を敷いた四角い器に盛るスタイル。常連はカツ煮とご飯を別盛りにした裏メニュー「ワカレ」を頼みます。2026年秋はかつ丼セット1,000円、日替り定食800円で、チキンカツ、とんかつ、さばも。人気の定食は13時過ぎに売り切れます。',
  });
}

// ================================================================ もつ焼き ふじ
{
  const ST = 'https://san-tatsu.jp/articles/337883/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13055199/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '23:00']);
  put({
    id: 'tokyo_motsuyaki_fuji_yurakucho', name: 'もつ焼き ふじ (Motsuyaki Fuji)', category: 'MOM_AND_POP',
    lat: 35.673087, lng: 139.760823,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Skewers come salt-grilled or with a tare of soy sauce, sugar and sake (soy sauce is usually brewed with wheat), all over the same charcoal grill. The offal stew is simmered in two kinds of miso, whose ingredients are not given.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A pork-offal shop: charcoal-grilled motsu skewers and a miso stew of offal only, plus chicken tsukune and oden.',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat 16:00–22:00; closed Sundays and holidays (Tabelog). Tables set up in the tunnel from just before 17:00. No cards or e-money; QR payment accepted. Order from your phone.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['16:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yūrakuchō 2-chōme, inside the pedestrian tunnel under the JR tracks toward Shimbashi — 4–5 min from Yūrakuchō Stn',
    cuisine: 'Charcoal motsuyaki since the 1950s · never-frozen domestic pork offal · miso motsu-nikomi', cuisine_type: 'izakaya',
    website: null, gmaps: gm('もつ焼き ふじ 有楽町 高架下'), menu_url: null,
    notes: "[Mom & Pop · the tunnel motsuyaki] A half-open-air offal grill built into the wall of a tunnel under the JR tracks, with trains rumbling overhead and no front door. The previous owner told the story like this: around 1953 the space was a politician's election office, then the politician's mistress opened a rice-ball stand, and the second generation made it a motsuyaki shop. 五十嵐義幸 began helping in 1974, at 19, after a day job, kept two jobs for decades, and became the third owner in 1991. Around the change to Reiwa the business passed to the fourth generation, the son 貴洋, a former carpenter, but the father still mans the grill. Never-frozen domestic pork offal is prepped in-house from midday. The kashira uses pork skirt rather than cheek, the shiro is boiled long enough to be tender, and the tare is just soy sauce, sugar and sake, topped up as it is used. The motsu-nikomi is offal only, stewed in two misos (¥400 in 2024). Skewers were ¥180 each and draft beer ¥580 in 2024, poured by 貴洋, an Asahi-certified dispenser. In 2026 diners also praise the oden, potato salad and tsukune, and say it can sell out early. Orders are placed by phone, and on some nights the crowd is mostly overseas visitors.",
    chef_bio: {
      chef_name: '五十嵐貴洋 (4th generation) and 五十嵐義幸 (3rd generation, at the grill)', roles: ['owner (4th generation)', 'grill (3rd generation, father)'],
      origin: 'Space opened around 1953 (election office, then a rice-ball stand); motsuyaki from the 2nd generation; Igarashi family since 1991',
      background: '義幸 started part-time in 1974 and took over in 1991; the son 貴洋, a carpenter until 20, now runs the business (san-tatsu, 2024).',
      philosophy: '「時代と共に薄れていくモノはたくさんあるけど、ここは昔と全然変わらない風景が魅力ですよね」 — 義幸.',
      specialty: 'Shiro and kashira skewers; miso motsu-nikomi.',
      anecdotes: [
        { text: '「その質問、いちばん困る（笑）。うーん、熟練の技!? 感覚的なのでうまく言えないです」 — 義幸, asked the secret of grilling.', source: ST },
        { text: '「斜め前にある『天麩羅 天米（てんよね）』さんも家族みたいなもんですね」 — 貴洋.', source: ST },
        { text: '"The motsu-nikomi features tender shiro cooked in a rich white miso broth." — October 2026.', source: R + 'B537699703/' },
      ],
      japanese_sources_summary: 'さんたつ(2024.9.9): もつ焼き ふじ、JR有楽町駅から新橋方面へ徒歩4分の高架下トンネル内、1953年ごろ議員の選挙事務所→お妾さんのおにぎり屋→2代目からもつ焼き、3代目店主・五十嵐義幸さん(1974年19歳でバイト、1991年に継承)、4代目で息子の貴洋さん(元大工)、一度も冷凍しない国産豚もつ、カシラは豚ハラミ、シロは下茹で、タレは醤油・砂糖・酒のみで注ぎ足し、もつ煮込みはもつだけを2種の味噌で400円、もつ焼き各180円、生ビール580円、アサヒ「うまい樽生」認定、外国人客の増加、17:00すぎ〜22:00、日祝休。食べログ: 月〜金17:00〜23:00・土16:00〜22:00、30席、カード・電子マネー不可・QR可。2026年の口コミ: スマホのモバイルオーダー、おでん、ポテトサラダ、つくね、早く行かないと売り切れ。',
      confidence: 'high', sources: [ST, TB, R + 'B537699703/', R + 'B536636738/', R + 'B537717608/', R + 'B537768743/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Open-air seats in the tunnel; order from your phone; many overseas visitors. Hot in summer, cold in winter — there is no air-conditioning.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [],
      soy_sauce_wheat: [{ text: 'Skewer tare is soy sauce, sugar and sake only.', source: ST }],
      vegan_cross_contact: [{ text: 'Pork offal skewers and offal-only miso stew.', source: ST }],
      staff_allergy_handling: [], positives: [{ text: 'Salt-grilled kashira, tongue and heart are offered alongside tare skewers.', source: ST }], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-1-10 JR高架下トンネル内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目1番 (lot) 40m; across the tunnel from 天米 (OSM node 6303530989); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B536636738/', R + 'B537699703/'],
    price_note: 'Prices from the September 2024 san-tatsu feature.', last_checked: TODAY, items: [
      it('もつ焼き(シロ・レバー タレ)', 'motsuyaki', 'Shiro or liver skewer, tare', '¥180', 'Skewers', 'no', 'no', '2024.', 'motsu_tare'),
      it('もつ焼き(カシラ・タン・ハツ 塩)', 'motsuyaki', 'Kashira, tongue or heart skewer, salt', '¥180', 'Skewers', 'ask', 'no', '2024.', 'motsu_shio'),
      it('もつ煮込み', 'motsu nikomi', 'Offal stewed in two misos', '¥400', 'Small plates', 'ask', 'no', '2024.', 'motsu_nikomi'),
      it('つくね', 'tsukune', 'Chicken tsukune', '', 'Skewers', 'ask', 'no', '', 'tsukune'),
      it('おでん', 'oden', 'Oden', '', 'Small plates', 'ask', 'no', '', 'oden'),
      it('ポテトサラダ', 'poteto sarada', 'Potato salad', '', 'Small plates', 'ask', 'ask', '', 'potato_salad'),
      it('生ビール', 'nama biiru', 'Draft beer (Asahi)', '¥580', 'Drinks', 'no', 'ask', '2024.', 'draft_beer'),
    ] }, {
    cuisine: '1950年代からの炭火もつ焼き・一度も冷凍しない国産豚もつ・味噌のもつ煮込み',
    neighborhood: '有楽町二丁目、JR高架下の新橋方面へ抜けるトンネル内。有楽町駅から徒歩4〜5分',
    gf_detail: '要確認。串は塩焼きと、醤油・砂糖・酒のタレ(醤油は一般に小麦を使って醸造)があり、同じ炭火の焼き台。もつ煮込みは2種の味噌で煮込みますが、味噌の原材料は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。豚もつの店で、炭火のもつ焼きともつだけの味噌煮込み、鶏のつくね、おでん。',
    notes: '[個人店・トンネルのもつ焼き] JR高架下のトンネルの壁に埋め込まれたような半屋台のもつ焼き店で、頭上を電車が走り、入口にドアはありません。先代から聞いた話では、1953年ごろ議員の選挙事務所として始まり、その議員のお妾さんがおにぎり屋を開き、2代目からもつ焼き店に。五十嵐義幸さんは1974年、19歳で会社勤めの傍らアルバイトを始め、Wワークを続けて1991年に3代目を継ぎました。令和への改元の頃、元大工で4代目の息子・貴洋さんに代を譲った今も焼き台に立ちます。一度も冷凍しない国産豚もつを昼から店で仕込み、カシラは頬肉でなく豚ハラミ、シロはじっくり下茹でして柔らかく、タレは醤油・砂糖・酒だけを注ぎ足し。もつ煮込みはもつだけを2種の味噌で(2024年で400円)。2024年はもつ焼き各180円、生ビール580円で、アサヒの「うまい樽生」認定を受けた貴洋さんが注ぎます。2026年の口コミではおでん、ポテトサラダ、つくねも好評で、早く行かないと売り切れることも。注文はスマホから、客席の多くが外国人という夜もあります。',
  });
}

// ================================================================ 有楽町 天米
{
  const ST = 'https://san-tatsu.jp/articles/343284/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13015267/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:00'], ['17:00', '21:30']);
  put({
    id: 'tokyo_yurakucho_tenyone', name: '有楽町 天米 (Yūrakuchō Ten Yone)', category: 'MOM_AND_POP',
    lat: 35.672962, lng: 139.760908,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Edo-style tempura in batter, fried in sesame oil; for the tendon each piece is dipped in a decades-old don-tsuyu (sauce), so the batter is soft rather than crisp.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described. Every bowl and set described includes seafood (prawn, whiting, squid kakiage, sashimi), and the vegetable tempura is served alongside it.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–21:30 (L.O. 21:00); closed Saturdays, Sundays and holidays (Tabelog). The tempura-and-sashimi service set is Tue, Thu and Fri lunch only, limited. Cash only.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, under the JR tracks toward Shimbashi, across the tunnel from Motsuyaki Fuji — 5 min from Yūrakuchō Stn',
    cuisine: 'Edo-style tempura since 1952 · sauce-soaked "shittori" tendon · Toyosu fish at night', cuisine_type: 'tempura',
    website: null, gmaps: gm('有楽町 天米 有楽町2-1-10'), menu_url: null,
    notes: "[Mom & Pop · the soft-batter tendon under the tracks] Opened in 1952 by a cook who had trained at the grand tempura house 天米 in Kanda Sudachō and was allowed to use its name. He died soon after, and the okami's cousin, 川口成一, was adopted into the family to become the second generation, and after more than fifty years still fries the tempura. 安子, a nurse until marrying in, has been okami for over fifty years and raised three sons. The third son, 敬紀, joined at 29 after ten years in Japanese restaurants and now leads as third generation. Seafood is fried in sesame oil. For the tendon, each piece is passed through a don-tsuyu that has been topped up since opening, so the batter turns soft and moist rather than crisp. Bowls come with a lid to keep them warm, and the rice is cooked a little firm in a two-shō pot. Lunch tendon was ¥1,200 in 2024 with a side dish, miso soup and pickles. In 2026 the limited tempura-and-sashimi set (Tue, Thu and Fri lunch) is ¥1,400, with sashimi from Toyosu, and at night tendon is ¥1,800 and kakiage-don ¥2,100. There is also omakase with sashimi and simmered fish. There are six counter seats, tables and a sunken kotatsu table for six, and a painting by Kumagai Morikazu on the wall.",
    chef_bio: {
      chef_name: '川口敬紀 (3rd generation) with 川口成一 (2nd generation) and okami 安子', roles: ['owner (3rd generation)', 'tempura (2nd generation)', 'okami'],
      origin: 'Opened 1952 by a cook trained at 天米 in Kanda Sudachō',
      background: '成一, the okami\'s cousin, was adopted in to succeed the founder; 敬紀, the third son, joined at 29 after ten years in Japanese restaurants (san-tatsu, 2024).',
      philosophy: '「新鮮な魚介をごま油で揚げた天ぷらを"江戸前"と呼んでいます」 — 敬紀.',
      specialty: 'Tendon with soft, sauce-soaked batter; kakiage.',
      anecdotes: [
        { text: '「ここにお嫁に来たら、ずっと店に立つようになって。主人にだまされたんですよ」 — okami 安子, formerly a nurse.', source: ST },
        { text: 'A few years ago, work to reinforce the viaduct spared the shop a major rebuild: 「お客さんには『今の雰囲気じゃなくなっちゃうと落ち着かない』って言われてたんで、本当によかったです」', source: ST },
        { text: '"Currently, the third-generation owner oversees the restaurant, while the second-generation father is responsible for frying the tempura." — October 2026.', source: R + 'B536577602/' },
      ],
      japanese_sources_summary: 'さんたつ(2024.10.7): 有楽町 天米、1952年創業の江戸前天ぷら、初代は神田須田町の「天米」で修業しのれん分け、ほどなく初代が亡くなり女将のいとこ川口成一さんが養子で2代目、三男の敬紀さんが3代目(29歳で入店)、母・安子さん(元看護師、女将50年以上、鹿児島出身)、ごま油、天ぷらを丼つゆにくぐらせるしっとり衣、注ぎ足しの丼つゆ、蓋付きの丼、2升釜、毎朝豊洲で仕入れ、天丼(かき揚げ・エビ・キス・野菜)1200円、小鉢・みそ汁・お新香付き、サービス定食は火木金のみ、カウンター6席・掘りごたつ、熊谷守一の絵、11:30〜14:00・17:00〜21:00LO、土日休。食べログ: 26席、カード・電子マネー・QR不可。2026年の口コミ: 天ぷらと刺身のサービス定食1,400円、夜の天丼1,800円・かき揚げ丼2,100円、おまかせ、2代目の父が揚げ3代目が中心。',
      confidence: 'high', sources: [ST, TB, R + 'B536577602/', R + 'B497700992/', R + 'B517484933/', R + 'B535809420/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Calm, family-run room under the tracks; cash only. Counter seats look onto the fryer.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Tempura in batter fried in sesame oil; for tendon each piece is dipped in don-tsuyu.', source: ST }],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Bowls combine seafood tempura (prawn, whiting, squid and small-shrimp kakiage) with one vegetable.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-1-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM node 6303530989 「天米」 14m; GSI 有楽町二丁目1番 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B536577602/', R + 'B497700992/'],
    price_note: 'Lunch tendon from the October 2024 san-tatsu feature; service set and evening bowls from 2026 reviews.', last_checked: TODAY, items: [
      it('天丼(ランチ)', 'tendon', 'Tendon: kakiage, prawn, whiting and one vegetable, with side dish, miso soup and pickles', '¥1,200', 'Rice bowls', 'no', 'no', 'Lunch, 2024.', 'tendon_lunch'),
      it('サービス定食(天ぷらと刺身)', 'saabisu teishoku', 'Tempura and sashimi set (Tue, Thu, Fri lunch, limited)', '¥1,400', 'Set meals', 'no', 'no', '2026.', 'service_set'),
      it('天丼(夜)', 'tendon', 'Tendon (evening)', '¥1,800', 'Rice bowls', 'no', 'no', '2026.', 'tendon_dinner'),
      it('かき揚げ丼', 'kakiage don', 'Kakiage bowl (squid and small shrimp)', '¥2,100', 'Rice bowls', 'no', 'no', 'Evening, 2026.', 'kakiage_don'),
      it('天茶漬け', 'ten chazuke', 'Tempura chazuke', '', 'Rice bowls', 'no', 'no', 'Lunch.', 'ten_chazuke'),
      it('おまかせ', 'omakase', 'Omakase: sashimi, simmered fish, tempura', '', 'Courses', 'no', 'no', 'Evening.', 'omakase'),
    ] }, {
    cuisine: '1952年創業の江戸前天ぷら・丼つゆがしみたしっとり衣の天丼・夜は豊洲の魚も',
    neighborhood: '有楽町二丁目、新橋方面へ続くJR高架下、トンネルを挟んでもつ焼き ふじの向かい。有楽町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣をつけてごま油で揚げる江戸前天ぷらで、天丼は一つずつ注ぎ足しの丼つゆにくぐらせるため、衣はしっとりしています。',
    vegan_detail: '記述上はヴィーガンではありません。紹介されている丼や定食はどれも魚介(エビ・キス・イカのかき揚げ・刺身)を含み、野菜の天ぷらはそれと一緒に出されます。',
    notes: '[個人店・ガード下のしっとり天丼] 1952年、神田須田町にあった高級天ぷら店「天米」で修業した職人がのれん分けで開店。ほどなく初代が亡くなり、女将のいとこ・川口成一さんが養子となって2代目に。職人歴50年以上の成一さんは今も天ぷらを揚げます。元看護師で嫁いでから50年以上女将を務め、3人の息子を育てた安子さん。三男の敬紀さんが日本料理店で10年経験を積んで29歳で入店し、今は3代目として店の中心に。新鮮な魚介をごま油で揚げ、天丼は創業以来注ぎ足してきた丼つゆに一つずつくぐらせるので、衣はサクサクではなくしっとり。丼は冷めにくいよう蓋付きで、ご飯は2升釜でやや固めに炊きます。2024年のランチ天丼は1,200円(小鉢・みそ汁・お新香付き)。2026年は火木金ランチ限定の天ぷらと刺身のサービス定食が1,400円(刺身は豊洲から)、夜は天丼1,800円・かき揚げ丼2,100円、刺身や煮魚が出るおまかせも。カウンター6席にテーブルと6人掛けの掘りごたつ、壁には熊谷守一の絵。',
  });
}

save();
