// Osaka sweep (2-mile circle around Dotonbori), batch 35 — vegan/GF phase.
// Found by name-searching the crawl (shops.jsonl) for vegan shops, after the distance-ordered vegan queue ran to flag-only listings:
//   + MERCY Vegan Ramen Bakuromachi (all plant-based, no 五葷; GF rice-flour ramen per press release) — BOTH, GF queued high
//   + パプリカ食堂 Vegan (all-vegan organic restaurant since 2014, Shinmachi) — VEGAN
// Vim, Naki vegan sweets and Vegan Cafe Tsukineko were already recorded from FindMeGlutenFree seeds (b5, b11/b17) without
// Tabelog ids, so their Tabelog listings still looked open in the queue — marked done here instead of re-added.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 35);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
skip('27148276', 'Already recorded as osaka_vim_gf_vegan_okonomiyaki (batch 5, FindMeGlutenFree seed); this is its Tabelog listing.');
skip('27142111', 'Already recorded as osaka_naki_vegan_sweets (batch 5, FindMeGlutenFree seed); this is its Tabelog listing.');
skip('27144721', 'Already recorded as osaka_vegan_cafe_tsukineko (FindMeGlutenFree seed, FMGF reviews October 2026); this is its Tabelog listing.');
const NOTE = 'Sweep cap: no tier above "options" is written without human review; evidence queued in data/_underrated_queue.json.';

// ================================================================ MERCY Vegan Ramen Bakuromachi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27158361/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://prtimes.jp/main/html/rd/p/000000024.000174572.html';
  put({
    id: 'osaka_mercy_vegan_ramen_bakuromachi', name: 'MERCY Vegan Ramen Bakuromachi', category: 'BOTH',
    lat: 34.678096, lng: 135.50909, cuisine_type: 'ramen',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The operator calls it "a gluten-free ramen specialist free of animal ingredients" (press release, June 2026), and a September 2026 reviewer confirms the ramen is gluten-free, on Hokkaido rice-flour noodles. A brand press release for the Kyoto shop warns that some non-ramen items may contain wheat — ask about sides and bread.',
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: 'Press release (June 2026): 「提供するメニューはすべて植物性100％で五葷不使用」 — every item 100% plant-based, with none of the five pungent vegetables (garlic, onion and kin).',
    hours_raw: 'Tabelog: 12:00–23:00 (food L.O. 22:15), closed Wednesday. Press release (June 2026): 11:00–22:00 (kitchen closes 21:15), closed Wednesday. Reservations taken; no children\'s chairs. Cards, e-money and QR accepted.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bakuromachi 1-4-10, Bakuromachi Estate Bldg 1F — 6 min from Nagahoribashi Stn',
    cuisine: 'Vegan, gluten-free ramen with no five pungent vegetables · shio ramen ¥1,870 (kombu broth with lemon) · tomato ramen ¥1,980 · yakuzen soy-milk dan dan noodles ¥2,420 · sesame-vinegar cold noodles ¥2,200 (summer 2026) · extra noodles +¥660 · Hokkaido rice-flour noodles · organic lemonade, salt bread, desserts · 27 seats',
    website: PR, gmaps: gm('MERCY Vegan Ramen 博労町'), menu_url: null,
    notes: "[Ramen · vegan, gluten-free ramen in Bakuromachi] A spacious, clean ramen shop that opened on 29 January 2026, a new concept from MERCY Vegan Factory. Everything is plant-based and free of the five pungent vegetables, and the ramen is gluten-free. The noodles are medium-thick curly rice-flour noodles from Hokkaido, chewy and bouncy. The shio ramen (¥1,870) is a light, low-viscosity kombu broth with a touch of lemon. The yakuzen soy-milk dan dan noodles (¥2,420; ¥2,200 in July) come loaded with vegetables and warming herbs but only mildly spicy. Summer 2026 added a sesame-vinegar cold noodle (¥2,200). Prices are high for ramen, and one visitor switched to lemonade and salt bread. Outside the ramen, a sister shop's release warns that some items may contain wheat, so ask.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 January 2026 (September 2026 review)', background: 'A new concept from MERCY Vegan Factory in Kawarayamachi (September 2026 review); press releases via PR TIMES (June 2026).', philosophy: 'Plant-based food that is gentle on the body yet satisfying (press release).', specialty: 'Vegan, gluten-free ramen.',
      anecdotes: [
        { text: '"The noodles are medium-thick curly noodles made from gluten-free rice flour sourced from Hokkaido… The ramen is completely free of animal products, does not use five pungent vegetables, and is gluten-free." — September 2026, shio ramen ¥1,870.', source: R + 'B535120652/' },
        { text: '「提供するメニューはすべて植物性100％で五葷不使用」 (press release, 5 June 2026).', source: PR },
      ],
      japanese_sources_summary: 'PR TIMES(2026年6月5日): グルテンフリーかつ動物性原材料不使用のラーメン専門店、提供するメニューはすべて植物性100％で五葷不使用、新メニュー胡麻酢冷麺2,200円(動物性原料・五葷・小麦不使用)、大阪市中央区博労町1-4-10 博労町エステートビル1F、11:00〜22:00(21:15キッチンクローズ)、水曜定休。食べログ: 070-5638-4042、予約可、12:00〜23:00(料理L.O.22:15)、水曜休み、カード・電子マネー・QR決済可、27席、禁煙、子ども用椅子なし。2026年の口コミ(7〜9月): モンゴル領事館のあるビルの1階、広く清潔、薬膳豆乳担々麺2,200円→2,420円、米粉麺に野菜たっぷり、辛さは控えめ、1月29日開店、河原町のMERCY Vegan Factoryの新業態、トマトラーメン1,980円、塩ラーメン1,870円、替え玉660円、昆布のとろみの少ない塩スープにレモン、北海道産米粉の中太ちぢれ麺、卓上に胡椒と唐辛子、海外客向けの印象、オーガニックレモネードと塩パン、値段が高めという声。',
      confidence: 'medium', sources: [TB, PR, R + 'B535120652/', R + 'B532829007/', R + 'B536084183/'] },
    ramen: {
      broth_base: ['vegetable'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'curly', hydration: null, handmade: false, notes: 'Medium-thick curly gluten-free rice-flour noodles from Hokkaido, chewy and bouncy (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Shio ramen ¥1,870; yakuzen soy-milk dan dan noodles ¥2,420 (September 2026).',
      chashu: null,
      notable_toppings: ['vegetables', 'lemon', 'pepper and cayenne (table)'],
      gf: { status: 'options', note: 'Rice-flour ramen noodles; ask about sides.' },
      vegan: { status: 'full', note: 'All plant-based, no five pungent vegetables.' },
      pantheon: 'Bakuromachi\'s vegan, gluten-free ramen: a lemon-bright kombu shio on bouncy Hokkaido rice-flour noodles.',
      profile: { richness: 2, oiliness: 1, clarity: 4, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B535120652/', '"A smooth and light yet flavorful taste."'],
        oiliness: [R + 'B535120652/', '"A low-viscosity salt soup made from kombu" — placed low.'],
        clarity: [R + 'B535120652/', 'Low-viscosity kombu shio — placed high (inferred).'],
        tare_strength: [R + 'B535120652/', '"The well-rounded saltiness" — mid-scale.'],
        noodle_firmness: [R + 'B535120652/', '"A chewy and bouncy feel that provides just the right amount of firmness."'],
        aroma_punch: [R + 'B535120652/', 'No five pungent vegetables; a hint of lemon — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B535120652/', R + 'B532829007/', PR], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A reviewer notes it seems aimed mainly at international customers (September 2026).' },
    safety: { ...SAFETY0, confidence: 'medium',
      positives: [
        { text: 'Operator press release: gluten-free ramen specialist with no animal ingredients; all menu items plant-based and free of 五葷.', source: PR },
        { text: 'September 2026 review: ramen gluten-free, on Hokkaido rice-flour noodles.', source: R + 'B535120652/' },
      ] },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町1-4-10 博労町エステートビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened 29 January 2026; press release June 2026; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町一丁目4番10号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535120652/', PR],
    price_note: 'Prices from a September 2026 review and the June 2026 press release.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen', '¥1,870', 'Ramen', 'gf', 'vegan', 'September 2026.', 'shio'),
      it('', '', 'Tomato ramen', '¥1,980', 'Ramen', 'gf', 'vegan', 'September 2026.', 'tomato'),
      it('', '', 'Yakuzen soy-milk dan dan noodles', '¥2,420', 'Ramen', 'gf', 'vegan', 'September 2026 (¥2,200 in July 2026).', 'tantan'),
      it('胡麻酢冷麺', 'gomazu reimen', 'Sesame-vinegar cold noodles (summer)', '¥2,200', 'Seasonal', 'gf', 'vegan', 'Press release, June 2026: no animal ingredients, 五葷 or wheat.', 'gomazu'),
      it('', '', 'Extra noodles', '+¥660', 'Options', 'gf', 'vegan', 'September 2026.', 'kaedama'),
      it('', '', 'Salt bread', '', 'Sides', 'ask', 'vegan', 'September 2026.', 'shiopan'),
    ] }, {
    cuisine: '五葷不使用のヴィーガン・グルテンフリーのラーメン・塩ラーメン1,870円(昆布のスープにレモン)・トマトラーメン1,980円・薬膳豆乳担々麺2,420円・胡麻酢冷麺2,200円(2026年夏)・替え玉660円・北海道産の米粉麺・オーガニックレモネード、塩パン、デザート・27席',
    neighborhood: '博労町1-4-10 博労町エステートビル1F。長堀橋駅から徒歩6分',
    gf_detail: '運営会社は「グルテンフリーかつ動物性原材料不使用のラーメン専門店」とし(2026年6月のプレスリリース)、2026年9月の口コミでもラーメンはグルテンフリーで北海道産の米粉麺。京都の店のプレスリリースではラーメン以外の一部に小麦を含む場合があるとしているので、サイドやパンは確認を。',
    vegan_detail: 'プレスリリース(2026年6月)に「提供するメニューはすべて植物性100％で五葷不使用」。',
    notes: '[ラーメン・博労町のヴィーガンでグルテンフリーのラーメン] 2026年1月29日に開店した広く清潔なラーメン店で、MERCY Vegan Factoryの新業態。すべて植物性で五葷不使用、ラーメンはグルテンフリー。麺は北海道産米粉の中太ちぢれ麺で、もちもちと弾力があります。塩ラーメン(1,870円)は昆布のとろみの少ない軽いスープにレモンをほんのり。薬膳豆乳担々麺(2,420円、7月は2,200円)は野菜たっぷりで薬膳が体を温め、辛さは控えめ。2026年夏は胡麻酢冷麺(2,200円)も。ラーメンとしては値段が高く、レモネードと塩パンにした人も。ラーメン以外は姉妹店のリリースで小麦を含む場合があるとされているので確認を。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [PR, TB, R + 'B535120652/'],
    why: 'Operator press release (PR TIMES, 5 June 2026): 「グルテンフリーかつ動物性原材料不使用のラーメン専門店」; September 2026 first-hand review: gluten-free rice-flour noodles. Caveat: a brand release for the Kyoto Shijo-Kawaramachi shop says some non-ramen items may contain wheat — a high tier should be scoped to the ramen.',
  });
}

// ================================================================ パプリカ食堂 Vegan
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27077542/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:30', '21:30']);
  put({
    id: 'osaka_paprika_shokudo_vegan', name: 'パプリカ食堂 Vegan (Paprika Shokudo Vegan)', category: 'VEGAN',
    lat: 34.677291, lng: 135.496461, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The menu is vegan and organic, but no source covers wheat: the soy-meat kara-age coating, the house sauce and the hamburg binding are not described.',
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: 'An all-vegan organic restaurant (shop text: "Organic & Vegan food"; reviews 2025–2026). Soy-meat kara-age with organic soy-milk mayonnaise, vegan-cheese soy-meat hamburg, organic salad, low-sodium miso soup and pesticide-free brown rice.',
    hours_raw: 'Daily except Wednesday 11:30–15:00 (food L.O. 14:00, drinks 14:30) and 17:30–21:30 (L.O. 21:00); also closed on irregular days announced on Instagram (Tabelog). Reservations recommended; ordering by QR code (March 2026). Cards, e-money and QR accepted.',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-9-9, Alivio Shinmachi 1F (Nishi-ku) — 2 min from Yotsubashi Stn exit 2',
    cuisine: 'All-vegan organic set meals · soy-meat kara-age set (the most popular) with organic soy-milk mayo · soy-meat cheese hamburg with vegan cheese · organic salad, low-sodium miso soup, pesticide-free brown rice · organic wine and smoothies · terrace deck · retail shelf · 41 seats',
    website: 'https://www.instagram.com/paprika_vegan/', gmaps: gm('パプリカ食堂 Vegan 新町'), menu_url: null,
    notes: "[Vegan · all-vegan organic set meals near Yotsubashi] A long-running all-vegan organic restaurant, open since 2014, two minutes from Yotsubashi Station. It's natural and stylish inside, with a shaded terrace deck and a retail shelf by the door. The most popular order is the soy-meat kara-age set: fried in premium canola oil with a house Japanese-style sauce, organic soy-milk mayonnaise and organic sesame. It comes with an organic salad, low-sodium miso soup and pesticide-free brown rice. The soy-meat hamburg with vegan cheese is hearty enough to win over meat-eaters. The menu is wide, and a vegetarian visitor from Australia came back after ten years. Order by QR code at the table. It's popular, so book, especially for lunch. Gluten isn't addressed anywhere, so ask.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 February 2014 (Tabelog)', background: 'Tabelog corporate-member listing; organic vegetables, natural cooking, organic wine and smoothies (shop text).', philosophy: 'Organic & vegan food "with care and attention to safety and flavor" (shop text).', specialty: 'Soy-meat kara-age set.',
      anecdotes: [
        { text: '"The soy meat is deep-fried in premium canola oil and served with a homemade Japanese-style sauce and organic soy milk mayonnaise… a low-sodium miso soup, and a plate of pesticide-free brown rice." — December 2025.', source: R + 'B518803826/' },
        { text: '"It was surprisingly hearty for soy meat, and the combination with cheese was excellent." — June 2026, soy-meat cheese hamburg lunch plate.', source: R + 'B530924100/' },
      ],
      japanese_sources_summary: '食べログ: パプリカ食堂 Vegan、大阪市西区新町1-9-9 アリビオ新町1F、06-6599-9788、予約可、水曜と不定休(インスタで告知)以外11:30〜15:00(料理L.O.14:00、ドリンク14:30)・17:30〜21:30(L.O.21:00)、カード・電子マネー・QR決済可、41席(カウンター2、ホール25、デッキ14)、禁煙、2014年2月17日開店、インスタ @paprika_vegan、オーガニック野菜の自然食、オーガニックワインとスムージー。口コミ(2025年12月〜2026年8月): 人気なので予約、いちばん人気はソイミート唐揚げ定食(上質な菜種油で揚げ、自家製の和風だれとオーガニック豆乳マヨ、オーガニックごま)、オーガニックサラダ、減塩味噌汁、無農薬玄米、QRコードで注文、ヴィーガンチーズのハンバーグ、ソイミートのチーズハンバーグのランチプレート、店頭で物販、テラス席、ヴィーガンの友人と、オーストラリアのベジタリアンの友人と10年ぶり、海外客が多い。',
      confidence: 'medium', sources: [TB, R + 'B518803826/', R + 'B530924100/', R + 'B526897129/', R + 'B531470037/', R + 'B98496044/', R + 'B533361516/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas customers (May 2026); QR ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-9-9 アリビオ新町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated December 2025–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目9番9号 (go) 12m; OSM パプリカ食堂 Vegan node/5102657823 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518803826/', R + 'B530924100/'],
    price_note: 'No reliable prices captured.', last_checked: TODAY, items: [
      it('', '', 'Soy-meat kara-age set (salad, miso soup, brown rice)', '', 'Set meals', 'ask', 'vegan', 'December 2025–July 2026.', 'soy_karaage'),
      it('', '', 'Soy-meat cheese hamburg lunch plate (vegan cheese)', '', 'Set meals', 'ask', 'vegan', 'March–June 2026.', 'hamburg'),
      it('', '', 'Organic smoothie', '', 'Drinks', 'ask', 'vegan', 'Shop text (Tabelog).', 'smoothie'),
    ] }, {
    cuisine: 'すべてヴィーガンのオーガニックの定食・いちばん人気のソイミート唐揚げ定食(オーガニック豆乳マヨ)・ヴィーガンチーズのソイミートハンバーグ・オーガニックサラダ、減塩味噌汁、無農薬玄米・オーガニックワインとスムージー・テラスのデッキ・物販・41席',
    neighborhood: '西区新町1-9-9 アリビオ新町1F。四ツ橋駅2番出口から徒歩2分',
    gf_detail: '要確認。メニューはヴィーガンでオーガニックですが、ソイミート唐揚げの衣、和風だれ、ハンバーグのつなぎに小麦が入るかは書かれていません。',
    vegan_detail: 'すべてヴィーガンのオーガニックの店(店の説明「Organic & Vegan」、2025〜2026年の口コミ)。オーガニック豆乳マヨのソイミート唐揚げ、ヴィーガンチーズのソイミートハンバーグ、オーガニックサラダ、減塩味噌汁、無農薬玄米。',
    notes: '[ヴィーガン・四ツ橋のすべてヴィーガンのオーガニック定食] 2014年からある、すべてヴィーガンのオーガニックの店で、四ツ橋駅から2分。店内はナチュラルでおしゃれ、日陰のテラスのデッキと入口の物販の棚も。いちばん人気はソイミート唐揚げ定食で、上質な菜種油で揚げ、自家製の和風だれとオーガニック豆乳マヨ、オーガニックごま。オーガニックサラダ、減塩味噌汁、無農薬玄米付き。ヴィーガンチーズのソイミートハンバーグは肉好きも納得のボリューム。メニューは豊富で、オーストラリアのベジタリアンの友人と10年ぶりに来た人も。注文は席のQRコードから。人気なので特に昼は予約を。グルテンについてはどこにも書かれていないので確認を。',
  });
}

save();
