// Osaka sweep (2-mile circle around Dotonbori), batch 210 — mom-and-pop phase (≤20 seats, 30+ reviews), end of the phase.
//   + 中華料理 とんとん Chinese Ryori Tonton (TV-featured local Chinese with curry champon, one cook; Edobori)
//   - つじ田 肥後橋店 27141300: Tsujita chain branch (Tsujita Shinsaibashi already in data)
//   - 極食堂 西成山王店 27114272: Ramen Goku group shop (Ramen Goku Honten already in data; operator lists 4 shops)
//   - やまなか製麺所 天満橋店 27079293: same operator as Yamanaka Seimensho Honmachi (already in data; both listings link one site)
//   Ramen block: とんとん gets one. Its Tabelog genres are Chinese, Ramen, and 12 of the 15 reviews read ordered a noodle
//   soup (curry champon above all, also champon, Yumen, tanmen, Tianjin noodles, ramen); the bowl is the draw, as at
//   若水 (osaka_wakamizu_minamihorie, also a machi-chuka filed as ramen), unlike 香港 in b208 whose draw was the pork kara-age.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 210);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中華料理 とんとん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27013449/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['17:30', '21:00']); const S = day(['11:30', '14:00']);
  put({
    id: 'osaka_chuka_tonton_edobori', name: '中華料理 とんとん (Chinese Ryori Tonton)', category: 'OMNI',
    lat: 34.688381, lng: 135.494854, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the menu runs on wheat noodles (curry champon, champon, tanmen), gyoza and soy-seasoned set meals; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, pork in the noodle soups, meat-filled gyoza, sweet and sour pork and chicken dishes.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 17:30–21:00; Sat 11:30–14:00; closed Sunday and holidays; hours may change (Tabelog). Gyoza only in the evening (February and March 2026 reviews). Reservations accepted by phone; can be booked for private use (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 15 seats (Tabelog): 3 at the counter, three tables of 4 and one of 2 (February 2026 review). Smoking allowed, with ashtrays on the tables (Tabelog; June and August 2026 reviews). Busy at lunch; quieter just before the 21:00 close (2026 reviews). The website on the listing no longer resolves (checked ' + TODAY + ').',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Edobori 1-21-5, 1F — 5 min walk from Higobashi Stn (Yotsubashi Line), 338 m',
    cuisine: 'Local Chinese (machi-chuka), 15 seats · curry champon: chicken broth with soy sauce and a blended spicy curry powder, thin straight noodles, bean sprouts, garlic chives, cabbage, carrot, onion and pork — set with rice or a small fried rice ¥950 (March 2026) · champon · Yumen with a small fried rice ¥950 (June 2026) · tanmen with bean sprouts and cabbage · Tianjin noodles set with fried rice ¥1,050 (March 2026) · ramen and fried rice set · daily set (a vegetable soba with mini fried rice, December 2025) · sweet and sour pork set meal · moist, lightly seasoned fried rice ("yakimeshi") · gyoza (evenings only), house-made and full of vegetables, with a peppery filling · Tianjin rice · eight-treasure stir-fry · chicken simmered in a savoury sauce · bottled beer',
    website: null, gmaps: gm('中華料理 とんとん 江戸堀'), menu_url: null,
    notes: "[Ramen · Edobori, a TV-famous machi-chuka and its curry champon] A homely local Chinese restaurant five minutes from Higobashi Station, with a short counter and four tables, featured on TV by Kendo Kobayashi as a local Chinese spot; several March–April 2026 diners came after seeing it on TV. Almost everyone orders a noodle soup, and above all the curry champon: chicken broth and soy sauce with a blended spicy curry powder, on thin straight noodles rather than the usual thick champon noodles, loaded with bean sprouts, cabbage and garlic chives. One diner found it addictive, another rather mild and reached for the chili oil. It comes as a ¥950 set with a small, moist fried rice (March 2026), good dipped in the curry soup. One regular always orders the light, comforting Yumen; another liked the tanmen packed with bean sprouts and cabbage. In the evening there is gyoza, house-made, full of vegetables and peppery, which one diner says made the visit worthwhile. One diner saw the owner apparently cooking everything alone in the lunch rush. Cash only, and smoking is allowed at the tables.",
    chef_bio: { chef_name: null, roles: ['Owner-cook'], origin: null, background: 'Local Chinese restaurant; the owner cooks everything alone at lunch (June 2026 review). Featured on TV by Kendo Kobayashi as a local Chinese restaurant (August 2026 review); a March 2026 diner came the day after a TV feature (March 2026 review).', philosophy: null, specialty: 'Curry champon with a small fried rice; evening gyoza.',
      anecdotes: [
        { text: '"The rich flavor of the chicken broth combined with soy sauce and a uniquely blended spicy curry powder created a wonderful balance of taste… The noodles are thin and straight." — March 2026, curry champon set ¥950.', source: R + 'B523815052/' },
        { text: '"The owner seemed to be cooking everything… which must be quite challenging during the busy lunch hours." — June 2026, Yumen and small fried rice ¥950.', source: R + 'B529327348/' },
        { text: '"The crispy edges were perfectly fragrant, and the skin had a nice crunch while still being pleasantly chewy… just being able to try this gyoza made the visit worthwhile." — August 2026, gyoza and bottled beer near closing.', source: R + 'B533427995/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理 とんとん、大阪市西区江戸堀1-21-5 江戸堀コーポ 1F、四つ橋線肥後橋駅から徒歩5分 (338m)、月〜金11:30〜15:00・17:30〜21:00、土11:30〜14:00、日曜・祝日休み、予約可、貸切可、カード・電子マネー・QR不可、15席、喫煙可、ジャンルは中華料理とラーメン。口コミ(2025年4月〜2026年9月): 店主がひとりで調理、Kendo Kobayashi がテレビで町中華として紹介、テレビの翌日に来たという客、カウンター3席とテーブル4人×3・2人×1、各テーブルに灰皿、カレーチャンポンと焼飯(小)のサービスセット950円、鶏ガラと醤油にブレンドしたスパイシーなカレー粉のスープ、もやし・にら・キャベツ・にんじん・玉ねぎ・豚肉、麺は細いストレート、焼飯はしっとりあっさり、Yumen と小さい焼飯950円、天津麺と焼飯のセット1050円、ちゃんぽん、Tanmen、ラーメンと焼飯のセット、日替わりセット、酢豚の定食、gyoza は夜だけで自家製、野菜たっぷりでコショウの効いたあん、天津飯、八宝菜、鶏肉の煮込み、瓶ビール、昼は混む、閉店前は空いている。',
      confidence: 'medium', sources: [TB, R + 'B504524793/', R + 'B523179405/', R + 'B523815052/', R + 'B523951906/', R + 'B525406134/', R + 'B526243881/', R + 'B529327348/', R + 'B533427995/', R + 'B534490640/', R + 'B534793231/', R + 'B535159917/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'unknown', tare: ['shoyu', 'other'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, straight noodles in the curry champon, chosen over thick champon noodles (March 2026); thin noodles in the tanmen too (September 2026). House-made not stated.' },
      regional_style: [], sub_genre: ['other'],
      signature_bowl: 'Curry champon, set with rice or a small fried rice ¥950 (March 2026).',
      chashu: 'No chashu described; pork among the vegetables in the curry champon (March 2026).',
      notable_toppings: ['bean sprouts', 'cabbage', 'garlic chives', 'carrot', 'onion', 'pork'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth; pork.' },
      pantheon: "Higobashi's TV-famous machi-chuka: a mild chicken-and-soy curry champon on thin straight noodles, with a small moist fried rice for ¥950.",
      profile: { richness: 2, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B526243881/', '"The flavor was rather mild overall" (April 2026); champon "has a light seasoning" (' + R + 'B523179405/) — placed low-mid.'],
        oiliness: [R + 'B535159917/', '"Light yet rich in flavor" (Yumen, September 2026); oil not described — placed low-mid (inferred).'],
        clarity: [R + 'B504524793/', 'Curry champon: "the thick broth kept it hot until the very end" (April 2025) — placed low.'],
        tare_strength: [R + 'B523815052/', 'Chicken broth "combined with soy sauce" (March 2026); "light and delicious, with a salty flavor" (' + R + 'B504524793/, December 2025) — mid-scale.'],
        noodle_firmness: [R + 'B523815052/', '"The noodles are thin and straight" (March 2026); firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B523815052/', '"A uniquely blended spicy curry powder" (March 2026), but "wasn\'t too spicy" (' + R + 'B523638957/) — mid-scale.'],
      },
      confidence: 'medium', sources: [TB, R + 'B504524793/', R + 'B523179405/', R + 'B523638957/', R + 'B523815052/', R + 'B526243881/', R + 'B534490640/', R + 'B535159917/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; smoking allowed; gyoza only in the evening (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-21-5 江戸堀コーポ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目21番5号 (go) 5m; OSM name match とんとん node/5625565422 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523815052/', R + 'B523586797/', R + 'B529327348/'],
    price_note: 'Prices from March and June 2026 reviews.', last_checked: TODAY, items: [
      it('カレーチャンポン', '', 'Curry champon set (with rice or small fried rice)', '¥950', 'Service sets', 'no', 'no', 'March 2026.', 'curry_champon'),
      it('', '', 'Yumen and small fried rice set', '¥950', 'Service sets', 'no', 'no', 'June 2026.', 'yumen'),
      it('', '', 'Tianjin noodles set with fried rice', '¥1,050', 'Service sets', 'no', 'no', 'March 2026.', 'tenshinmen'),
      it('', '', 'Tanmen', '', 'Noodles', 'no', 'no', 'September 2026.', 'tanmen'),
      it('', '', 'Champon', '', 'Noodles', 'no', 'no', 'February–March 2026.', 'champon'),
      it('', '', 'Gyoza (evenings only)', '', 'À la carte', 'no', 'no', 'February–September 2026.', 'gyoza'),
      it('', '', 'Sweet and sour pork set meal', '', 'Set meals', 'ask', 'no', 'April 2026.', 'subuta'),
    ] }, {
    cuisine: '町中華 (15席)・カレーチャンポン: 鶏ガラと醤油にブレンドしたスパイシーなカレー粉のスープ、細いストレート麺、もやし、にら、キャベツ、にんじん、玉ねぎ、豚肉。ご飯か焼飯(小)とのセットで950円 (2026年3月)・ちゃんぽん・Yumen と小さい焼飯950円 (2026年6月)・もやしとキャベツの Tanmen・天津麺と焼飯のセット1050円 (2026年3月)・ラーメンと焼飯のセット・日替わりセット (野菜のそばと小さい焼飯、2025年12月)・酢豚の定食・しっとりあっさりの焼飯・gyoza (夜だけ)、自家製で野菜たっぷり、コショウの効いたあん・天津飯・八宝菜・鶏肉の煮込み・瓶ビール',
    neighborhood: '江戸堀1-21-5 1F。四つ橋線肥後橋駅から徒歩5分 (338m)',
    gf_detail: 'グルテンフリーではありません。カレーチャンポン、ちゃんぽん、Tanmen などの小麦の麺、gyoza、醤油で味つけした定食が中心。グルテンの情報なし。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラのスープ、麺に豚肉、肉のあんの gyoza、酢豚、鶏肉の料理。',
    notes: '[ラーメン・江戸堀、テレビで話題の町中華のカレーチャンポン] 肥後橋駅から徒歩5分、短いカウンターとテーブル4つのアットホームな町中華。Kendo Kobayashi がテレビで町中華として紹介し、2026年3〜4月にはテレビで見て来たという客が何人も。ほとんどの人が麺を頼み、いちばん人気はカレーチャンポン。鶏ガラと醤油にブレンドしたスパイシーなカレー粉のスープで、ちゃんぽんによくある太麺ではなく細いストレート麺。もやし、キャベツ、にらがたっぷり。やみつきになるという声もあれば、あっさりしすぎでラー油を足したという声も。小さいしっとりした焼飯とのセットで950円 (2026年3月)。焼飯をカレーのスープにつけてもおいしい。いつもやさしい味の Yumen を頼むという常連や、もやしとキャベツたっぷりの Tanmen を気に入った人も。夜は gyoza があり、自家製で野菜たっぷり、コショウが効いていて、これだけでも来た甲斐があったという声。昼のピークに店主がひとりで全部作っていたという声も。現金のみで、テーブルでたばこが吸える。',
  });
}

skip('27141300', 'つじ田 肥後橋店 (TSUJITA Higobashi ten): branch of the Tsujita tsukemen chain from Kanda, Tokyo — already in data as osaka_tsujita_shinsaibashi (chef_bio.background: "Branch of the Tsujita tsukemen chain from Kanda, Tokyo (October 2026 review); official site tsukemen-tsujita.com."); this listing is a Tabelog corporate-member (staff-maintained) page; chain');
skip('27114272', '極食堂 西成山王店 (Goku Shokudo Nishinari sannou ten, formerly 麺匠丸極): Ramen Goku group shop — the operator site ramen-goku.osaka (read 2026-10-30) lists 極食堂 西成山王店 at this address and says "4店舗の最新情報はSNSで配信中"; a March 2025 review (B503098331) calls it "a sister establishment of the well-known ramen shop, Ramen Goku"; らーめん 極 本店 is already in data as osaka_ramen_goku_honten (chef_bio.background: "Tonkotsu ramen shop, main store (Tabelog; 2026 reviews)."); newest review April 2025; chain');
skip('27079293', 'やまなか製麺所 天満橋店 (Yamanaka Seimensho Tenmabashi ten): branch of the same operator as 山中製麺所 本町店, already in data as osaka_yamanaka_seimensho_honmachi — both Tabelog listings link the one website yamanakaseimenjyo.jimdo.com (Honmachi opened 2011.10.3, Tenmabashi 2014.6.4, per each listing); branch of a shop already recorded');
save();
