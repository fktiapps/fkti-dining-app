// Osaka sweep (2-mile circle around Dotonbori), batch 41 — vegan/GF phase (all OMNI).
// Screened the rest of the vegan queue (~150 listing pages) for the shop's OWN diet text. Both picks have
// shop-maintained (Tabelog corporate-member) listings, which is why they are kept despite their review gaps.
//   + Gluten-Free Healthy Cafe SEREN Peche (shop: gluten-free, additive-free, no white sugar) — GF options, queued high
//   + HOME STYLE バル 1416 (shop: gluten-free okonomiyaki, ramen and pasta; vegan menu) — GF options
// Skipped: 27006924 "base" — the same Jamaican kitchen as osaka_republic_base_island_kitchen_kitahorie (北堀江1-16-27).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 41);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const NOTE = 'Sweep cap: no tier above "options" is written without human review; evidence queued in data/_underrated_queue.json.';

skip('27006924', 'Already recorded as osaka_republic_base_island_kitchen_kitahorie (same address 北堀江1-16-27, same Jamaican kitchen; FindMeGlutenFree seed); this is its Tabelog listing.');

// ================================================================ SEREN Peche
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27130690/'; const R = TB + 'dtlrvwlst/';
  const D = day(['07:30', '22:00']);
  put({
    id: 'osaka_seren_peche_minamisenba', name: 'Gluten-Free Healthy Cafe SEREN Peche 心斎橋店', category: 'GF',
    lat: 34.675802, lng: 135.505639, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'Shop text (Tabelog): "a health-conscious café that offers gluten-free, additive-free, and white sugar-free dishes", with rice-flour craft burgers at lunch. Reviewers describe gluten-free curry, brown-rice-flour chiffon cake and gluten-free cakes (2025–2026). No allergen sheet or cross-contact statement found.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. Oat-milk coffee, a Buddha bowl of rice and fermented vegetables, and quinoa rice are described, but nothing is labelled vegan; cheesecake is on the cake menu.',
    hours_raw: 'Mon and Wed–Sun 7:30–22:00 (L.O. 21:30); closed Tuesday; hours vary with events — check the Instagram calendar @cafe_seren.p (Tabelog; May 2025 review). Reservations taken. Cards (VISA, Master) only; no e-money or QR. Takeaway cakes.',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-4-20, Osaka Fukuya Bldg 1F — 3 min from Nagahoribashi Stn',
    cuisine: 'Gluten-free, additive-free, white-sugar-free café · rice-flour craft burgers (lunch) · gluten-free spice curry · Buddha bowl with fermented vegetables · quinoa rice · brown-rice-flour chiffon cake ¥700 · kinako chocolate cake, lemon cake, cheesecake · oat-milk coffee ¥650 · casual French-style dinner · 20 seats',
    website: 'https://www.instagram.com/cafe_seren.p/', gmaps: gm('SEREN Peche 心斎橋 グルテンフリー'), menu_url: null,
    notes: "[Café · gluten-free, additive-free café by Nagahoribashi] A calm, natural-materials café three minutes from Nagahoribashi, open from 7:30 am. Its own billing is gluten-free, additive-free and free of white sugar. Lunch runs to rice-flour craft burgers and a gluten-free curry whose spices win over doubters, plus a Buddha bowl of rice and fermented vegetables and quinoa-mixed rice. One reviewer credits the recipes to a physical therapist. The sweets are the draw: a light, moist brown-rice-flour chiffon (¥700), a kinako chocolate cake, lemon cake and cheesecake to take away, with oat-milk coffee (¥650). Evenings switch to a casual French-style dinner. Portions are modest. Closed Tuesdays; check Instagram, as event days change the hours.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 April 2022 (Tabelog)', background: 'A May 2025 reviewer says the recipes are designed by a physical therapist with health in mind. Instagram @cafe_seren.p.', philosophy: 'Gluten-free, additive-free and white-sugar-free dishes (shop text).', specialty: 'Gluten-free curry and rice-flour sweets.',
      anecdotes: [
        { text: 'Shop text: "Serenpesh is a health-conscious café that offers gluten-free, additive-free, and white sugar-free dishes. During lunch, enjoy craft burgers made with rice flour and nutritious sweets."', source: TB },
        { text: '"This gluten-free chiffon cake is made with brown rice flour. It has a light, fluffy texture… moist with a gentle flavor." — May 2025, ¥700.', source: R + 'B507977149/' },
      ],
      japanese_sources_summary: '食べログ: Gluten-Free Healthy Cafe SEREN Peche 心斎橋店、大阪市中央区南船場2-4-20 大阪福谷ビル1F、070-2424-3975、予約可、月・水〜日7:30〜22:00(L.O.21:30)、火曜休み、イベントで変更あり(インスタの営業カレンダー)、カード(VISA、Master)可、電子マネー・QR不可、20席、2022年4月3日開店。店の説明: グルテンフリー・無添加・白砂糖不使用の健康志向のカフェ、昼は米粉のクラフトバーガーと栄養のあるスイーツ、夜はカジュアルなフレンチ風のディナー。口コミ(2025年4月〜2026年2月): レモンケーキとチーズケーキを持ち帰り、グルテンフリーのカレー、理学療法士が考えたレシピという紹介、発酵野菜のブッダボウル、きな粉のチョコレートケーキ、玄米粉のシフォンケーキ700円、オーツミルクコーヒー650円、スパイスのバランスがいいカレー、キヌア入りのご飯、グルテンフリーのデザート。',
      confidence: 'medium', sources: [TB, R + 'B507977149/', R + 'B506917107/', R + 'B505810106/', R + 'B519004187/', R + 'B522772645/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Check Instagram for event-day hours.' },
    safety: { ...SAFETY0, confidence: 'medium',
      positives: [
        { text: 'Shop text (Tabelog): gluten-free, additive-free and white-sugar-free dishes; rice-flour burgers.', source: TB },
        { text: 'Reviews 2025–2026: gluten-free curry, brown-rice-flour chiffon, gluten-free cakes.', source: R + 'B507977149/' },
      ] },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-4-20 大阪福谷ビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; newest review February 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目4番20号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B507977149/'],
    price_note: 'Prices from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Brown-rice-flour chiffon cake', '¥700', 'Sweets', 'gf', 'ask', 'May 2025.', 'chiffon'),
      it('', '', 'Oat-milk coffee', '¥650', 'Drinks', 'gf', 'vegan', 'May 2025.', 'oat_coffee'),
      it('', '', 'Gluten-free curry', '', 'Lunch', 'gf', 'ask', 'May and December 2025.', 'curry'),
      it('', '', 'Rice-flour craft burger', '', 'Lunch', 'gf', 'ask', 'Shop text (Tabelog).', 'burger'),
      it('', '', 'Buddha bowl (rice, fermented vegetables)', '', 'Lunch', 'gf', 'ask', 'May 2025.', 'buddha'),
    ] }, {
    cuisine: 'グルテンフリー・無添加・白砂糖不使用のカフェ・米粉のクラフトバーガー(昼)・グルテンフリーのスパイスカレー・発酵野菜のブッダボウル・キヌアご飯・玄米粉のシフォンケーキ700円・きな粉のチョコケーキ、レモンケーキ、チーズケーキ・オーツミルクコーヒー650円・カジュアルなフレンチ風のディナー・20席',
    neighborhood: '南船場2-4-20 大阪福谷ビル1F。長堀橋駅から徒歩3分',
    gf_detail: '店の説明(食べログ)に「グルテンフリー・無添加・白砂糖不使用の料理を提供する健康志向のカフェ」、昼は米粉のクラフトバーガー。口コミではグルテンフリーのカレー、玄米粉のシフォンケーキ、グルテンフリーのケーキ(2025〜2026年)。アレルゲン表や混入についての記載は見つかりませんでした。',
    vegan_detail: '要確認。オーツミルクのコーヒー、ご飯と発酵野菜のブッダボウル、キヌアご飯がありますが、ヴィーガンの表示はなく、ケーキにはチーズケーキも。',
    notes: '[カフェ・長堀橋のグルテンフリーで無添加のカフェ] 長堀橋駅から3分、自然素材の落ち着いたカフェで、朝7時半から。店のうたい文句はグルテンフリー、無添加、白砂糖不使用。昼は米粉のクラフトバーガーや、スパイスで疑いを晴らすグルテンフリーのカレー、発酵野菜のブッダボウル、キヌア入りのご飯。レシピは理学療法士が考えたという口コミも。目当ては甘いもので、軽くしっとりした玄米粉のシフォン(700円)、きな粉のチョコレートケーキ、持ち帰りのレモンケーキやチーズケーキ、オーツミルクコーヒー(650円)。夜はカジュアルなフレンチ風のディナーに。量は控えめ。火曜定休で、イベントの日は時間が変わるのでインスタを確認。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [TB, R + 'B507977149/', R + 'B506917107/'],
    why: 'Shop text (Tabelog, corporate-member listing): gluten-free, additive-free and white-sugar-free café; rice-flour burgers. Reviews 2025–2026 describe gluten-free curry, brown-rice-flour chiffon and gluten-free cakes. No allergen sheet or cross-contact statement; newest review February 2026.',
  });
}

// ================================================================ HOME STYLE バル 1416
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099586/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '14:00'], ['18:00', '02:00']), E = day(['18:00', '02:00']);
  put({
    id: 'osaka_home_style_bar_1416', name: 'HOME STYLE バル 1416 (HOME STYLE Bar 1416)', category: 'OMNI',
    lat: 34.673916, lng: 135.504229, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'Shop text (Tabelog): "Enjoy gluten-free dishes at reasonable prices… we recommend our gluten-free okonomiyaki, ramen, and pasta." No review describes the gluten-free dishes, and kara-age, nanban and fried rice are also on the menu — ask which items are gluten-free and how they are cooked.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Tabelog\'s restaurant section says "Offering vegan menu", but no vegan dish is described. Oden broth and the set meals are not vegan-labelled.',
    hours_raw: 'Mon–Fri 12:00–14:00 (L.O. 13:30) and 18:00–2:00 (L.O. 1:30); Sat, Sun and holidays 18:00–2:00; open year-round (Tabelog). Reservations taken. Cards, e-money and QR accepted. All seats smoking-friendly (October 2025 review). All-you-can-drink ¥980 for an hour (August 2024).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-13-5, Marine Bldg 1F — 3 min from Nagahoribashi Stn',
    cuisine: 'Casual standing-bar-priced izakaya · gluten-free okonomiyaki, ramen and pasta (shop text) · oden · fried rice · kara-age and dashimaki lunch ¥800 · beef tetchan set ¥800 · roast beef · risotto · chicken nanban · owner-picked wines and seasonal sake · 21 seats',
    website: null, gmaps: gm('HOME STYLE バル 1416 東心斎橋'), menu_url: null,
    notes: "[Izakaya · a cheap late bar with gluten-free okonomiyaki, ramen and pasta] A casual, eclectic 21-seat bar south of Nagahoribashi, built on \"delicious and affordable\" at standing-bar prices and open until 2 am. Per the shop, health-minded diners can order gluten-free okonomiyaki, ramen and pasta; no review has described them yet, so ask how they're cooked. What reviewers do talk about is the oden, with radish, eggplant and egg soaked through, the fried rice (pour the oden broth over it), and ¥800 lunch sets of big, juicy kara-age with dashimaki or grilled beef tetchan, with free large rice. There are owner-chosen wines and seasonal sake. All seats were smoking-friendly in late 2025.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Shinsaibashi (Tabelog)', background: 'Concept "delicious and affordable" at standing-bar prices; wines chosen by the owner (shop text).', philosophy: 'Gluten-free okonomiyaki, ramen and pasta for health-conscious diners (shop text).', specialty: 'Oden; gluten-free okonomiyaki (shop text).',
      anecdotes: [
        { text: 'Shop text: "For health-conscious diners, we recommend our gluten-free okonomiyaki, ramen, and pasta."', source: TB },
        { text: '"The Japanese radish, eggplant, and egg were particularly amazing, with the broth fully infused… when I poured the oden broth over it to make a kind of ochazuke, I nearly fainted from the flavor." — December 2025.', source: R + 'B519762951/' },
      ],
      japanese_sources_summary: '食べログ: HOME STYLE バル 1416、大阪市中央区東心斎橋1-13-5 マリンビル1F、06-6281-0107、予約可、月〜金12:00〜14:00(L.O.13:30)・18:00〜翌2:00(L.O.1:30)、土日祝18:00〜翌2:00、年中無休、カード・電子マネー・QR決済可、21席。店の説明: 「おいしくて安い」立ち飲み価格、グルテンフリーの料理を手頃に、健康志向の方にはグルテンフリーのお好み焼き・ラーメン・パスタがおすすめ、店主が選んだワインと季節の日本酒、ヴィーガンメニューあり。口コミ(2023年4月〜2025年12月): 唐揚げと卵、昼に売り切れ、炒飯、ホルモン炒め、南蛮、1時間980円の飲み放題、唐揚げとだし巻きの定食800円(ご飯大盛り無料)、ローストビーフ、リゾット、枝豆、鶏料理とおでん、牛テッチャンと唐揚げの定食800円、全席喫煙可、おでん(大根、なす、卵)、炒飯におでんのだしをかけて。',
      confidence: 'low', sources: [TB, R + 'B519762951/', R + 'B514868762/', R + 'B500723859/', R + 'B510967371/', R + 'B490080386/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking-friendly bar (late 2025).' },
    safety: { ...SAFETY0, positives: [ { text: 'Shop text (Tabelog): gluten-free okonomiyaki, ramen and pasta offered.', source: TB } ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-5 マリンビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; newest review December 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番5号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B500723859/', R + 'B514868762/'],
    price_note: 'Lunch-set prices from February and October 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gluten-free okonomiyaki', '', 'Gluten-free', 'gf', 'ask', 'Shop text (Tabelog).', 'gf_okonomi'),
      it('', '', 'Gluten-free ramen', '', 'Gluten-free', 'gf', 'ask', 'Shop text (Tabelog).', 'gf_ramen'),
      it('', '', 'Gluten-free pasta', '', 'Gluten-free', 'gf', 'ask', 'Shop text (Tabelog).', 'gf_pasta'),
      it('おでん', 'oden', 'Oden', '', 'Izakaya', 'ask', 'no', 'December 2025.', 'oden'),
      it('', '', 'Kara-age and dashimaki lunch set', '¥800', 'Lunch', 'no', 'no', 'February 2025.', 'karaage_lunch'),
      it('', '', 'Beef tetchan and kara-age lunch set', '¥800', 'Lunch', 'no', 'no', 'October 2025.', 'tetchan_lunch'),
    ] }, {
    cuisine: '立ち飲み価格の気軽な居酒屋・グルテンフリーのお好み焼き、ラーメン、パスタ(店の説明)・おでん・炒飯・唐揚げとだし巻きのランチ800円・牛テッチャン定食800円・ローストビーフ・リゾット・チキン南蛮・店主が選ぶワインと季節の日本酒・21席',
    neighborhood: '東心斎橋1-13-5 マリンビル1F。長堀橋駅から徒歩3分',
    gf_detail: '店の説明(食べログ)に「グルテンフリーの料理を手頃に…グルテンフリーのお好み焼き、ラーメン、パスタがおすすめ」。口コミにグルテンフリーの料理の記述はなく、唐揚げ、南蛮、炒飯もあるので、どれがグルテンフリーか、どう調理するかを確認して。',
    vegan_detail: '食べログの店の欄に「ヴィーガンメニューあり」とありますが、ヴィーガンの料理の記述はありません。おでんのだしや定食はヴィーガンの表示なし。',
    notes: '[居酒屋・グルテンフリーのお好み焼き、ラーメン、パスタもある安い深夜のバル] 長堀橋の南にある21席の気軽でにぎやかなバルで、「おいしくて安い」立ち飲み価格、深夜2時まで。店によると健康志向の人向けにグルテンフリーのお好み焼き、ラーメン、パスタがあります。まだ口コミには出てこないので、調理法を確認して。口コミで話題なのは、大根、なす、卵によくしみたおでん、炒飯(おでんのだしをかけて)、大きくジューシーな唐揚げとだし巻き、または牛テッチャンの800円のランチ(ご飯大盛り無料)。店主が選んだワインと季節の日本酒も。2025年末は全席喫煙可でした。',
  });
}

save();
