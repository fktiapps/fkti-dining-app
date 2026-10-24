// Ginza Station half-mile sweep (805 m), batch 30 — two old izakaya along the Yūrakuchō tracks (san-tatsu, autumn 2024).
//   + 居酒屋 金陵本店 (1976; founder's daughter 武田理沙 has been okami since 2022, but 116 seats with a hired manager and a
//     large staff → OMNI; no branches found)
//   + 爐端本店 (old-house izakaya said to date from the early Taishō era; run since 2023 by manager モウさん and spouse; the owner
//     is not named → OMNI)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 居酒屋 金陵本店
{
  const ST = 'https://san-tatsu.jp/articles/343215/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13037180/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '22:45']);
  put({
    id: 'tokyo_izakaya_kinryo_honten_yurakucho', name: '居酒屋 金陵本店 (Izakaya Kinryō Honten)', category: 'OMNI',
    lat: 35.67301, lng: 139.761076,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice. The signature "oyaji no genkotsu" chicken is marinated in a tare of soy sauce, garlic and mirin; the grilled rice balls are seasoned with soy sauce; skewers come with salt or a secret tare; and there are karaage. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as a restaurant: chicken and pork skewers, horse-mackerel namerō, offal stew, and grilled rice balls mixed with bonito flakes. Ginkgo skewers, enoki butter and eggplant miso are on the menu, but their seasoning is not vegan-checked.',
    hours_raw: 'Mon–Fri and holidays 17:00–22:45; Sat 14:00–22:45 (food L.O. 21:45, drinks 22:05); closed Sundays (open when Monday is a holiday) and Mondays after holidays (Tabelog). Cards, IC and QR accepted. Smoking allowed.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['14:00', '22:45']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, under the tracks on the Ginza side — 3 min from Yūrakuchō Stn, 2 min from Hibiya Stn',
    cuisine: 'Shōwa-style izakaya since 1976 · Kagawa\'s Kinryō sake by name · charcoal yakitori and "oyaji no genkotsu" chicken', cuisine_type: 'izakaya',
    website: null, gmaps: gm('居酒屋 金陵本店 有楽町2-1-20'), menu_url: null,
    notes: "[Izakaya · Kagawa sake under the tracks] A two-floor izakaya under the Yūrakuchō viaduct, founded in 1976 by the father of today's okami, 武田理沙, who took over in 2022. The name comes from Kinryō, the sake of Kagawa's Nishino Kinryō brewery (founded 1789). When the brewery came to Tokyo, this was the first shop to stock it, and it still pours several Kinryō labels, unusual in the city: honjōzō from ¥500 a gō, and junmai ginjō 'Setouchi Olive' (¥500) and 濃藍 (¥880) by the glass (2024). The okami's pick is 'oyaji no genkotsu' (¥880), a boneless take on Kagawa's honetsuki-dori: mature-hen thigh from Kagawa, marinated in soy, garlic and mirin, crusted with black pepper and grilled. A veteran cook grills yakitori over charcoal (¥190 a skewer, salt or tare). There is also horse-mackerel namerō with house garlic miso (¥660), and grilled rice balls with bonito and soy (¥450 for two) to finish. The ground floor is packed elbow to elbow, with round stools and kabuki prints; upstairs is roomier, under an Itō Jakuchū rooster. The okami calls the staff the 'Kinryō Theatre' and holds a rakugo night on the first Saturday of even months. In 2026 a regular's order ran to motsu stew and cartilage karaage at ¥590 each and an eight-skewer platter for ¥1,430.",
    chef_bio: {
      chef_name: 'Okami 武田理沙 (2nd generation; founder\'s daughter)', roles: ['okami (since 2022)'],
      origin: 'Founded 1976 under the Yūrakuchō tracks',
      background: 'The founder is the okami\'s father; 116 seats, a store manager (榎さん, a "kami-awa" beer-pouring meister) and a veteran grill cook (san-tatsu, 2024; Tabelog).',
      philosophy: '「スタッフが楽しそうに働いているところじゃないと、お客さまだって楽しくないですよね」',
      specialty: 'Oyaji no genkotsu; charcoal yakitori; Kinryō sake.',
      anecdotes: [
        { text: '「西野金陵さんが東京に進出するのにあたって、東京での取り扱い1号店という意味で屋号を使わせていただいた、と聞いています」', source: ST },
        { text: 'The okami calls arriving for work 「楽屋入り」 ("entering the dressing room") and the evening 「金陵劇場の始まり」.', source: ST },
        { text: '"Located under the elevated tracks in Yurakucho, this long-established izakaya has been serving customers since 1976." — October 2026.', source: R + 'B537513596/' },
      ],
      japanese_sources_summary: 'さんたつ(2024.10.7): 居酒屋 金陵本店、1976年創業、有楽町ガード下、女将・武田理沙さん(2022年から、初代は父)、屋号は香川・西野金陵(1789年創業)の東京取扱い1号店から、清酒「金陵」数銘柄(辛口本醸造1合500円、瀬戸内オリーブ500円、濃藍880円)、親爺のげんこつ880円(香川の親鶏もも肉、醤油・ニンニク・みりんのタレ、黒胡椒)、とり串焼・ぶた串焼190円(塩かタレ)、銀杏串焼330円、あじなめろう660円(自家製ニンニク味噌)、焼きおにぎり2個450円(カツオ節と醤油)、約80品、役者絵、2階に伊藤若冲の鶏の絵、店長・榎さん、「金陵劇場」、偶数月第1土曜に寄席「ゆうらくご」。食べログ: 116席、月〜金17:00〜22:45・土14:00〜22:45、日休、カード・IC・QR可、喫煙可。2026年の口コミ: もつ煮込み・軟骨唐揚げ590円、串盛り8本1,430円。',
      confidence: 'high', sources: [ST, TB, R + 'B537513596/', R + 'B528698425/', R + 'B534167437/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Loud, crowded Shōwa izakaya, good for groups; book on Friday nights. Smoking is allowed inside and out.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [],
      soy_sauce_wheat: [{ text: 'Genkotsu chicken marinated in soy sauce, garlic and mirin; grilled rice balls seasoned with soy sauce.', source: ST }],
      vegan_cross_contact: [{ text: 'Grilled rice balls mixed with bonito flakes.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-1-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM node 4159973595 "Kinryo" 18m; GSI 有楽町二丁目1番 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537513596/'],
    price_note: 'Prices from the October 2024 san-tatsu feature; motsu stew, karaage and skewer platter from an October 2026 review.', last_checked: TODAY, items: [
      it('親爺のげんこつ', 'oyaji no genkotsu', 'Black-pepper grilled Kagawa hen thigh (soy-garlic tare)', '¥880', 'Grill', 'no', 'no', '', 'genkotsu'),
      it('とり串焼', 'tori kushiyaki', 'Chicken skewer (salt or tare), each', '¥190', 'Skewers', 'ask', 'no', '2024.', 'tori_kushi'),
      it('串焼盛り合わせ 8本', 'kushiyaki moriawase', 'Eight-skewer platter (salt)', '¥1,430', 'Skewers', 'ask', 'no', '2026.', 'kushi_platter'),
      it('銀杏串焼', 'ginnan kushiyaki', 'Ginkgo skewer', '¥330', 'Skewers', 'ask', 'ask', '2024.', 'ginnan'),
      it('あじなめろう', 'aji namerou', 'Horse-mackerel namerō with house garlic miso', '¥660', 'Small plates', 'ask', 'no', '2024.', 'namero'),
      it('名物もつ煮込み', 'motsu nikomi', 'Offal stew', '¥590', 'Small plates', 'ask', 'no', '2026.', 'motsu_nikomi'),
      it('焼きおにぎり(2個)', 'yaki onigiri', 'Grilled rice balls with bonito and soy (two)', '¥450', 'Rice', 'no', 'no', '2024.', 'yaki_onigiri'),
      it('金陵 辛口本醸造 1合', 'kinryou karakuchi honjouzou', 'Kinryō dry honjōzō, one gō (hot or cold)', '¥500', 'Sake', 'gf', 'ask', '2024.', 'kinryo_honjozo'),
    ] }, {
    cuisine: '1976年創業の昭和の居酒屋・香川の地酒「金陵」・炭火焼き鳥と親爺のげんこつ',
    neighborhood: '有楽町二丁目、銀座側のガード下。有楽町駅から徒歩3分、日比谷駅から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。名物の親爺のげんこつは醤油・ニンニク・みりんのタレに漬け、焼きおにぎりは醤油味、串は塩か秘伝のタレ、唐揚げも。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '店としてはヴィーガンではありません。鶏・豚の串焼、あじなめろう、もつ煮込み、カツオ節を混ぜた焼きおにぎり。銀杏串焼やえのきバター、なす味噌炒めもありますが、味付けは確認されていません。',
    notes: '[居酒屋・ガード下の香川の地酒] 有楽町の高架下にある2階建ての居酒屋で、1976年に今の女将・武田理沙さんの父が創業し、2022年に武田さんが継ぎました。屋号は香川・西野金陵(1789年創業)の清酒「金陵」から。西野金陵が東京に進出した際の取り扱い1号店で、今も都内では珍しく数銘柄をそろえます(2024年で辛口本醸造1合500円、純米吟醸「瀬戸内オリーブ」グラス500円・「濃藍」880円)。女将イチオシは香川の骨付鳥をアレンジした「親爺のげんこつ」(880円)で、香川の親鶏もも肉を醤油・ニンニク・みりんのタレに漬け、黒胡椒をたっぷり振って焼く骨なし版。ベテラン職人が炭火で焼く串焼は1本190円(塩かタレ)、自家製ニンニク味噌のあじなめろう660円、締めはカツオ節と醤油の焼きおにぎり(2個450円)。1階は肩を寄せ合う丸椅子と役者絵、2階はゆったりで伊藤若冲の鶏の絵。女将はスタッフを「金陵劇場」の一座と呼び、偶数月の第1土曜には寄席「ゆうらくご」も。2026年の口コミでは、もつ煮込み・軟骨唐揚げ各590円、串盛り8本1,430円。',
  });
}

// ================================================================ 爐端本店
{
  const ST = 'https://san-tatsu.jp/articles/337974/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13007922/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:30'], ['17:00', '23:30']), we = day(['17:00', '23:00']);
  put({
    id: 'tokyo_robata_honten_yurakucho', name: '爐端本店 (Robata Honten)', category: 'OMNI',
    lat: 35.673285, lng: 139.760756,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice. The signature nikutama-meshi is pork belly braised in soy sauce and Shaoxing wine; the lunch menu also has tonkatsu and ginger pork. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: braised pork belly with egg, ginger pork, yellowtail with daikon, duck with orange, scallops in cream. The lunch miso soup has wakame and fried tofu; its stock is not described.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 17:00–23:30 (L.O. 23:00); Sat, Sun and holidays 17:00–23:00 (Tabelog; one July 2026 diner had a Saturday lunch). Closed irregularly. Cards and IC accepted. Dinner reservations online were for courses (2026 review).',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yūrakuchō 1-chōme, an old house along the JR tracks toward Shimbashi — 2 min from Hibiya Stn, 3 min from Yūrakuchō Stn',
    cuisine: 'Old-house izakaya, said to date from the early Taishō era · nikutama-meshi lunch · home-style plates at night', cuisine_type: 'izakaya',
    website: null, gmaps: gm('爐端本店 有楽町1-3-8'), menu_url: null,
    notes: "[Izakaya · the old house by the tracks] A dark, timbered old house along the JR line that looks like a listed building among the offices. Inside are a former robatayaki counter, tables with sunken hearths that are no longer lit, and folk crafts, paintings and old tableware collected by the previous owner. 'It was founded in the early Taishō era, more than a century ago,' says manager モウさん, who came to Japan from Myanmar in 1992, has worked here since 2000, became manager in 2023 and now runs the shop as a couple. Lunch runs ¥900–1,100 (2026). The favourite is the original nikutama-meshi (¥950 in 2024, ¥1,000 in 2026): four pieces (in 2024) of pork belly braised in soy and Shaoxing wine with star anise around a whole boiled egg, with miso soup and salad. Ginger pork, tonkatsu and salt mackerel are also on the lunch menu. The big platters once lined up on the counter at night stopped with Covid. Now the menu runs to dishes such as duck with orange (¥1,100), pork belly with shishitō in tomato (¥980), yellowtail with daikon and creamy scallops (¥1,100 each). The upstairs has sunken-kotatsu seating.",
    chef_bio: {
      chef_name: 'Manager モウさん (with spouse)', roles: ['manager (since 2023)'],
      origin: 'Said to date from the early Taishō era',
      background: 'Came to Japan from Myanmar in 1992, worked in izakaya, joined in 2000 and became manager in 2023; cooks with techniques passed down from the previous owner (san-tatsu, 2024).',
      philosophy: null,
      specialty: 'Nikutama-meshi; braised pork belly.',
      anecdotes: [
        { text: '「豚バラ肉を醤油と紹興酒で煮込んで、八角で香りをつけています」 — モウさん on the nikutama-meshi.', source: ST },
        { text: 'Before Covid, large platters of food lined the counter at night and guests pointed at what they wanted.', source: ST },
        { text: '"For JPY 1000, it comes topped with a boiled egg and braised pork belly." — September 2026.', source: R + 'B535537172/' },
      ],
      japanese_sources_summary: 'さんたつ(2024.9.5): 爐端本店、有楽町駅から徒歩3分、JR高架沿いの古民家居酒屋、店長モウさん「創業が大正初期で1世紀以上の歴史」、1992年にミャンマーから来日、2000年から勤務、2023年に店長、夫婦で切り盛り、先代オーナー趣味の絵画・民芸品、もとは炉端焼きのカウンター、囲炉裏付きテーブル、肉玉めし950円(豚バラ角煮を醤油と紹興酒、八角、ゆで玉子、ミニサラダと味噌汁)、豚バラ生姜焼、コロナ禍以降大皿料理休止、鴨とオレンジ煮1100円、豚バラ肉とシシトウのトマト煮980円、ぶり大根1100円、ホタテクリーミー1100円。食べログ: 50席、平日11:30〜14:30・17:00〜23:30、土日祝17:00〜23:00、カード・IC可。2026年の口コミ: 元祖肉玉めし1,000円、ランチ900〜1,100円、2階に掘りごたつ、夜の予約はコースのみ。',
      confidence: 'medium', sources: [ST, TB, R + 'B535537172/', R + 'B534882159/', R + 'B531108952/', R + 'B534077390/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Dim, atmospheric old house; lunch is quick and cheap; many overseas visitors come for the building.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [],
      soy_sauce_wheat: [{ text: 'Pork belly braised in soy sauce and Shaoxing wine.', source: ST }],
      vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-3-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM node 2291366347 「爐端」 2m; GSI 有楽町一丁目3番8号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B535537172/', R + 'B534882159/'],
    price_note: 'Nikutama-meshi from September 2026 reviews; evening dishes from the September 2024 san-tatsu feature.', last_checked: TODAY, items: [
      it('元祖肉玉めし', 'ganso nikutama meshi', 'Braised pork belly and boiled egg on rice, with miso soup and salad (lunch)', '¥1,000', 'Lunch', 'no', 'no', '2026; ¥950 in 2024.', 'nikutama_meshi'),
      it('豚バラ生姜焼', 'butabara shougayaki', 'Pork-belly ginger stir-fry (lunch)', '', 'Lunch', 'ask', 'no', '', 'ginger_pork'),
      it('鴨とオレンジ煮', 'kamo to orenji ni', 'Duck simmered with orange', '¥1,100', 'Evening', 'ask', 'no', '2024.', 'duck_orange'),
      it('豚バラ肉とシシトウのトマト煮', 'butabara to shishitou no tomato ni', 'Pork belly and shishitō in tomato', '¥980', 'Evening', 'ask', 'no', '2024.', 'pork_tomato'),
      it('ぶり大根', 'buri daikon', 'Yellowtail simmered with daikon', '¥1,100', 'Evening', 'ask', 'no', '2024.', 'buri_daikon'),
      it('ホタテクリーミー', 'hotate kuriimii', 'Scallops in cream', '¥1,100', 'Evening', 'ask', 'no', '2024.', 'scallop_cream'),
      it('豚の角煮', 'buta no kakuni', 'Braised pork belly', '', 'Evening', 'no', 'no', '', 'kakuni'),
    ] }, {
    cuisine: '大正初期創業とされる古民家居酒屋・肉玉めしのランチ・夜は家庭的な一品料理',
    neighborhood: '有楽町一丁目、新橋方面へ続くJR高架沿いの古民家。日比谷駅から徒歩2分、有楽町駅から徒歩3分',
    gf_detail: '実際上グルテンフリーではありません。名物の肉玉めしは豚バラを醤油と紹興酒で煮込んだ角煮で、ランチにはとんかつや生姜焼も。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。豚の角煮とゆで玉子、生姜焼、ぶり大根、鴨のオレンジ煮、ホタテのクリーム。ランチの味噌汁はわかめと油揚げですが、出汁は書かれていません。',
    notes: '[居酒屋・高架沿いの古民家] オフィス街のJR高架沿いに建つ、文化財のような風格の古民家居酒屋。店内には元は炉端焼きだったカウンター、今は使っていない囲炉裏付きのテーブル、先代オーナーが集めた民芸品や絵画、年季の入った器。「創業が大正初期で1世紀以上の歴史があるんですよ」と話す店長のモウさんは、1992年にミャンマーから来日し、2000年からこの店で働き、2023年に店長となって今は夫婦で切り盛りしています。ランチは1,000円前後で、一番人気は元祖肉玉めし(2024年950円、2026年1,000円)。醤油と紹興酒で煮込み八角で香りを付けた豚バラの角煮4切れがゆで玉子を囲み、味噌汁とサラダ付き。生姜焼、とんかつ、塩さばなども。夜にカウンターへ並べていた大皿料理はコロナ禍以降休止し、今は鴨とオレンジ煮(1,100円)、豚バラ肉とシシトウのトマト煮(980円)、ぶり大根・ホタテクリーミー(各1,100円)などの創作料理に力を入れています。2階には掘りごたつ席も。',
  });
}

save();
