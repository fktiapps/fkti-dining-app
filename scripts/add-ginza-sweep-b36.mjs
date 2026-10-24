// Ginza Station half-mile sweep (805 m), batch 36 — small independent soba shops (Tabelog crawl candidates).
//   + 山形田 (Yamagata-style soba; owner is a woman from Yamagata per a 2026 review, unnamed → OMNI)
//   + 銀蕎麦 國定 (soba-izakaya in a basement alley; a woman owner makes the soba daily, unnamed → OMNI)
// Skipped: おにわか (Tabelog hours garbled, e.g. 18:34–00:14; lunch days unclear).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 山形田
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13111033/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '14:30'], ['17:00', '22:00']), we = day(['11:00', '14:00']);
  put({
    id: 'tokyo_ginza_yamagatada', name: '山形田 (Yamagatada)', category: 'OMNI',
    lat: 35.671851, lng: 139.76757,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice. Thick, rustic Yamagata soba in a soy-seasoned chicken broth, with tempura (wheat batter); the soba\'s buckwheat-to-wheat ratio is not published.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: the signature is chilled jidori-chicken soba in chicken broth; the wild-vegetable soba is also served in a broth whose stock is not described.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 17:00–22:00; Sat and Sun 11:00–14:00; closed irregularly (Tabelog). Last lunch seating is before 14:30. Cards (JCB, AMEX) accepted; reviewers paid cash.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme behind Matsuya, APA Ginza Chūō Bldg B1F — 3 min from Ginza or Higashi-Ginza Stn',
    cuisine: 'Yamagata soba · chilled Zaō jidori-chicken soba · ¥200 tempura and Yamagata sake', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('山形田 銀座3-8-15 アパ銀座中央ビル'), menu_url: null,
    notes: "[Soba · Yamagata in a Ginza basement] A pink sign behind Matsuya leads down to a cosy, slightly worn basement room hung with celebrity autographs, serving the food of Yamagata. The owner, a woman from Yamagata, chats with guests, according to an October 2026 diner. The soba is thick, chewy country-style soba. The signature is Zaō chilled jidori soba, cold soba in rich chicken broth topped with firm, crunchy local chicken: ¥1,000, or ¥1,100 in one review, with ¥200 extra for a large. Wild-vegetable soba comes heaped with sansai sent from Yamagata, and tempura or kakiage cost just ¥200, a Ginza rarity. In the evening it serves Yamagata sake, simmered herring (¥820) and beer (¥780 a medium bottle). Lunch queues form at noon.",
    chef_bio: {
      chef_name: null, roles: [],
      origin: 'Ginza 3-chōme basement; founding date not found in a source read',
      background: 'A 2026 reviewer describes the owner as a woman from Yamagata; no source names her.',
      philosophy: null, specialty: 'Zaō chilled jidori soba; wild-vegetable soba.',
      anecdotes: [
        { text: '"The owner, a lovely lady from Yamagata, greets you with a friendly smile, making conversation enjoyable." — October 2026.', source: R + 'B537687058/' },
        { text: '"I was surprised by the tempura, priced at an unbelievable JPY 200. Can you believe such a price in Ginza?" — October 2026.', source: R + 'B537687058/' },
        { text: '"Zao Chilled Jidori Soba / Large Size JPY 1,000 + JPY 200, Tempura JPY 200" — a six-visit regular, October 2026.', source: R + 'B487867766/' },
      ],
      japanese_sources_summary: '食べログ: 山形田、銀座3-8-15 アパ銀座中央ビルB1F、30席、平日11:00〜14:30・17:00〜22:00、土日11:00〜14:00、不定休、カードはJCB・AMEX。2026年10月の口コミ: 蔵王冷やし地鶏そば1,000円(大盛+200円)、天ぷら200円、山菜そば、かき揚げ、身欠きにしん煮820円、瓶ビール780円、山形出身の女性店主、有名人のサイン、昼は行列、太く田舎風の山形そば。',
      confidence: 'medium', sources: [TB, R + 'B487867766/', R + 'B537687058/', R + 'B537404192/', R + 'B537065517/', R + 'B537273537/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual basement room; seat yourself when quiet. Come early at lunch — the last seating is before 14:30.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [{ text: 'Tempura and kakiage served as soba toppings.', source: R + 'B537687058/' }],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Signature soba in chicken broth with jidori chicken.', source: R + 'B487867766/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-8-15 アパ銀座中央ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; six reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目8番15号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B487867766/', R + 'B537404192/', R + 'B537687058/'],
    price_note: 'Prices from October 2026 Tabelog reviews.', last_checked: TODAY, items: [
      it('蔵王冷やし地鶏そば', 'zaou hiyashi jidori soba', 'Zaō chilled jidori-chicken soba', '¥1,000', 'Soba', 'no', 'no', '2026; large +¥200.', 'jidori_soba'),
      it('山菜そば', 'sansai soba', 'Wild-vegetable soba', '', 'Soba', 'no', 'ask', '', 'sansai_soba'),
      it('天ぷら', 'tenpura', 'Tempura topping', '¥200', 'Toppings', 'no', 'ask', '2026.', 'tempura'),
      it('身欠きにしん煮', 'migaki nishin ni', 'Simmered herring', '¥820', 'Small plates', 'ask', 'no', '2026.', 'nishin'),
      it('瓶ビール(中瓶)', 'bin biiru', 'Kirin beer, medium bottle', '¥780', 'Drinks', 'no', 'ask', '2026.', 'beer'),
    ] }, {
    cuisine: '山形そば・蔵王冷やし地鶏そば・200円の天ぷらと山形の地酒',
    neighborhood: '銀座三丁目、松屋の裏のアパ銀座中央ビルB1F。銀座駅・東銀座駅から徒歩3分',
    gf_detail: '実際上グルテンフリーではありません。醤油味の鶏出汁で食べる太い田舎風の山形そばと、小麦の衣の天ぷら。そばの割合は公表されていません。',
    vegan_detail: 'ヴィーガンではありません。名物は鶏出汁の冷やし地鶏そば。山菜そばも出汁は書かれていません。',
    notes: '[そば・銀座の地下の山形] 松屋の裏のピンクの看板から地下へ下りると、有名人のサインが並ぶ少し年季の入った居心地のよい店で、山形の味を出します。2026年10月の口コミによれば店主は山形出身の女性で、客との会話も楽しいそう。そばは太くコシのある田舎そば。名物の蔵王冷やし地鶏そばは、濃い鶏出汁の冷たいそばに歯応えのある地鶏をのせたもので1,000円(口コミにより1,100円、大盛+200円)。山形から届く山菜をたっぷりのせた山菜そば、天ぷらやかき揚げはわずか200円と銀座では珍しい値段。夜は山形の地酒、身欠きにしん煮(820円)、中瓶ビール(780円)も。昼は正午に行列ができます。',
  });
}

// ================================================================ 銀蕎麦 國定
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13023942/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_ginsoba_kunisada', name: '銀蕎麦 國定 (Gin Soba Kunisada)', category: 'OMNI',
    lat: 35.671416, lng: 139.761423,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice. Handmade soba of unpublished buckwheat ratio with soy-based dipping sauce, a limited ramen, and sake-pairing small plates. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: duck soba and duck hot pot, steak, dashimaki tamago sets; no plant-only dish is described.',
    hours_raw: 'Mon–Thu 11:30–14:00 and 17:00–22:00; Fri 17:00–22:00; Sat breakfast 8:00–11:00; closed Sundays and holidays (Tabelog). No cards; e-money and d Barai accepted. ¥600 appetiser charge at dinner. Smoking allowed at tables.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: day(['17:00', '22:00']), 5: day(['08:00', '11:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme back alley, Hanatsubaki Bldg B1F — 5 min from Ginza Stn C3',
    cuisine: 'Soba-izakaya with daily handmade soba · sake list · Saturday breakfast (dogs welcome)', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('銀蕎麦 國定 銀座6-4-16 花椿ビル'), menu_url: null,
    notes: "[Soba · the hidden basement soba-izakaya] A 20-seat soba and sake house down a basement passage off a Ginza 6-chōme alley, easy to walk past. The owner, a woman soba-maker, makes the soba by hand each day and pours her recommended sake for regulars. Lunch runs from seiro soba with wasabi rice to a tamagoyaki set with a small soba, and a ramen limited to 20 a day (¥1,200 in 2026). The soba-yu comes in a Nambu iron pot. Saturday mornings bring a dashimaki-tamago breakfast, and dogs are welcome. At night it is a salaryman soba-izakaya: duck soba, duck hot pot, steak and a long sake list. Smoking is allowed at the tables, a sore point for non-smokers in 2026 reviews. Dinner runs about ¥8,000–10,000 with a ¥600 appetiser charge. Lunch is about ¥1,000–2,000.",
    chef_bio: {
      chef_name: null, roles: [],
      origin: 'Ginza 6-chōme basement; founding date not found in a source read',
      background: '2026 reviewers describe a woman owner who makes the soba daily; no source names her.',
      philosophy: null, specialty: 'Handmade seiro soba; duck soba; sake.',
      anecdotes: [
        { text: '"You can enjoy handmade soba made daily by a female soba chef … The soba-yu is served in a Nambu iron pot." — August 2026.', source: R + 'B534021604/' },
        { text: '"The soba shop offers a limited 20 servings of ramen for JPY 1200!" — August 2026.', source: R + 'B534662707/' },
        { text: '"It\'s a rare place where smokers can enjoy their cigarettes at the table." — August 2026.', source: R + 'B501862613/' },
      ],
      japanese_sources_summary: '食べログ: 銀蕎麦 國定、銀座6-4-16 花椿ビルB1F、20席、月〜木11:30〜14:00・17:00〜22:00、金は夜のみ、土8:00〜11:00、日祝休、カード不可・電子マネーとd払い可、お通し600円、夜8,000〜9,999円・昼1,000〜1,999円。2026年の口コミ: 女性の蕎麦職人の手打ち、南部鉄器の蕎麦湯、せいろとわさびご飯、玉子焼き御膳、限定20食のラーメン1,200円、鴨せいろ、鴨鍋、ステーキ、朝の出汁巻き定食(犬連れ可)、日本酒が豊富、席で喫煙可。',
      confidence: 'low', sources: [TB, R + 'B534021604/', R + 'B534662707/', R + 'B501862613/', R + 'B537746590/', R + 'B537443236/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden basement; smoking allowed at tables; ¥600 appetiser charge at night; no credit cards.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Duck soba, duck hot pot and steak.', source: R + 'B537746590/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-16 花椿ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番16号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534021604/', R + 'B534662707/', R + 'B537746590/'],
    price_note: 'Ramen price from an August 2026 review; others without prices.', last_checked: TODAY, items: [
      it('せいろ・わさびご飯', 'seiro to wasabi gohan', 'Seiro soba with wasabi rice (lunch)', '', 'Lunch', 'no', 'ask', '', 'seiro_wasabi'),
      it('玉子焼き御膳', 'tamagoyaki gozen', 'Tamagoyaki set with small soba (lunch)', '', 'Lunch', 'no', 'no', '', 'tamagoyaki_set'),
      it('限定ラーメン', 'gentei raamen', 'Limited ramen (20 a day)', '¥1,200', 'Lunch', 'no', 'ask', '2026.', 'ramen'),
      it('鴨せいろ', 'kamo seiro', 'Duck soba', '', 'Soba', 'no', 'no', '', 'kamo_seiro'),
      it('鴨鍋', 'kamo nabe', 'Duck hot pot (dinner)', '', 'Dinner', 'no', 'no', '', 'kamo_nabe'),
      it('出汁巻き定食', 'dashimaki teishoku', 'Dashimaki-tamago breakfast set (Saturday)', '', 'Breakfast', 'ask', 'no', '', 'dashimaki_set'),
    ] }, {
    cuisine: '毎日手打ちの蕎麦居酒屋・日本酒・土曜の朝ごはん(犬連れ可)',
    neighborhood: '銀座六丁目の裏路地、花椿ビルB1F。銀座駅C3出口から徒歩5分',
    gf_detail: '実際上グルテンフリーではありません。そば粉の割合が公表されていない手打ち蕎麦と醤油ベースのつゆ、限定ラーメン、酒の肴。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。鴨せいろ、鴨鍋、ステーキ、出汁巻きの定食など。植物性のみの料理は書かれていません。',
    notes: '[そば・隠れた地下の蕎麦居酒屋] 銀座六丁目の路地から地下通路を入った、見落としそうな20席の蕎麦と酒の店。女性の店主が毎日蕎麦を手打ちし、常連にはおすすめの日本酒を注ぎます。ランチはせいろとわさびご飯、小さな蕎麦付きの玉子焼き御膳、1日20食限定のラーメン(2026年1,200円)など。蕎麦湯は南部鉄器で。土曜の朝は出汁巻きの朝ごはんで、犬連れも歓迎。夜は会社員でにぎわう蕎麦居酒屋で、鴨せいろ、鴨鍋、ステーキ、豊富な日本酒。席での喫煙が可能で、2026年の口コミでは非喫煙者に不評。夜は8,000〜10,000円ほどでお通し600円、昼は1,000〜2,000円ほど。',
  });
}

save();
