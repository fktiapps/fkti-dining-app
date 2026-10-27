// Osaka sweep (2-mile circle around Dotonbori), batch 81 — ramen phase (all OMNI).
//   + らーめん 聖剛 大阪南船場 (sea-bream shio, miso and beef-bone shoyu, opened 2021)
//   + にんにくらーめん 天洋 新町店 (garlic tonkotsu and miso by Nishi-Ohashi, opened 2021)
//   + 日夏屋 (tonkotsu with free rice, extra noodles and kimchi, opened 2025; next door to Mugen Nambanaka)
//   + 河童ラーメン本舗 なんばパークスサウス店 (third Kappa record; ULTRA-rich bowl exclusive to this branch)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 81);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ らーめん 聖剛 大阪南船場
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27125398/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '23:59']);
  put({
    id: 'osaka_ramen_seigo_minamisenba', name: 'らーめん 聖剛 大阪南船場 (Ramen Seigo Osaka Minamisenba)', category: 'OMNI',
    lat: 34.677404, lng: 135.505947, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Hokkaido wheat noodles; miso and shoyu tare; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood stock with grilled sea bream; beef-bone broth; chashu.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 18:00–24:00, until sold out; closed Sundays and holidays (Tabelog). Ticket machine (September 2025). QR accepted; no cards or e-money (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamisenba 2-2-28, Junkei Bldg 1F — 3 min from Nagahoribashi Stn exit B2',
    cuisine: 'Sea-bream shio ramen ¥1,000, the signature: iriko, kombu and aji stock, grilled sea bream instead of chashu · miso ramen · beef-bone shoyu ramen with chashu, egg, green onion and menma · Hokkaido-wheat medium-thin straight noodles · garlic and pepper on the table · rice bowls and kara-age · white-wood counter, 11 seats, plus a table for 5',
    website: null, gmaps: gm('らーめん 聖剛 南船場'), menu_url: null,
    notes: "[Ramen · sea-bream shio by Nagahoribashi] A clean, white-wood counter near Nagahoribashi, open since 2021 and serving until midnight. The signature sea-bream shio ramen (¥1,000) is a delicate seafood stock of iriko, kombu and aji, topped with grilled sea bream in place of chashu, over Hokkaido-wheat noodles. To one diner it was refined and deep; to another, too mild, with a strong fish note and little punch. A miso ramen rivals the big miso chains, and a beef-bone shoyu is sweet and light yet deep. Rice bowls and kara-age round out a long ticket-machine menu. Late-night drinkers stop in after a night out. Closed Sundays and holidays; it can sell out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 September 2021 (Tabelog)', background: 'Ramen shop (Tabelog, staff-maintained).', philosophy: null, specialty: 'Sea-bream shio ramen.',
      anecdotes: [
        { text: '"The broth is a delicate seafood stock carefully extracted from selected ingredients such as iriko (dried sardines), kombu kelp, and aji (horse mackerel)… The noodles are made from specially selected Hokkaido wheat." — August 2025, sea-bream shio ramen ¥1,000.', source: R + 'B516315221/' },
        { text: '"The idea of using sea bream instead of chashu was interesting and creative, but it wasn\'t seasoned or salted, and the fish flavor was a bit too strong for my personal taste." — January 2026.', source: R + 'B520986659/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): らーめん 聖剛 大阪南船場、大阪市中央区南船場2-2-28 順慶ビル 1F、長堀橋駅B2出口から徒歩3分、心斎橋駅から徒歩5分、月〜土11:00〜15:00・18:00〜23:59、日祝休み、売り切れ次第終了、QR可、カード・電子マネー不可、16席(カウンター11、5人テーブル1)、2021年9月25日開店。口コミ(2025年6月〜2026年1月): 周年記念で500円、鯛塩ラーメン、濃厚でやさしいスープ、もちもちでなめらかな麺、看板の鯛塩ラーメン1,000円、いりこ・昆布・鯵の魚介だし、Hokkaidoの小麦の麺、焼いた鯛の香り、白木のカウンター、女性一人でも入りやすい、いろいろなラーメン、サイドメニュー、味噌ラーメン、券売機、飲んだ後に、1,000円以下、鯛の香りはほのか、塩気は控えめであっさり、パンチがない、チャーシューの代わりに鯛、牛骨醤油ラーメン、甘みとコク、中細ストレート麺、味玉・ねぎ・メンマ、卓上のにんにくと胡椒。',
      confidence: 'medium', sources: [TB, R + 'B516315221/', R + 'B520986659/', R + 'B508514674/', R + 'B517081680/', R + 'B520977637/', R + 'B521108168/'] },
    ramen: {
      broth_base: ['gyokai', 'niboshi'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Hokkaido-wheat noodles, chewy and smooth (2025); medium-thin straight in the beef-bone shoyu (January 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Sea-bream shio ramen, ¥1,000 (August 2025).',
      chashu: 'Grilled sea bream in place of chashu on the shio; chashu on the beef-bone shoyu (2025–2026).',
      notable_toppings: ['grilled sea bream', 'seasoned egg', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood stock.' },
      pantheon: 'Minamisenba\'s sea-bream shio: an iriko-kombu-aji stock crowned with grilled tai.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B516315221/', '"The rich umami and depth of the seafood"; "extremely light" to another — placed low.'],
        oiliness: [R + 'B520986659/', '"There was some oil in it, but it didn\'t have much punch" — placed low.'],
        clarity: [R + 'B516315221/', '"A delicate seafood stock" — placed high.'],
        tare_strength: [R + 'B520986659/', '"The saltiness was quite mild."'],
        noodle_firmness: [R + 'B508514674/', '"The noodles were wonderfully chewy and smooth" — mid-scale.'],
        aroma_punch: [R + 'B520986659/', '"The broth had a faint aroma of sea bream."'],
      },
      confidence: 'medium', sources: [R + 'B516315221/', R + 'B520986659/', R + 'B508514674/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter suits solo diners (August 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-2-28 順慶ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained) with current hours; newest reviews January 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目2番28号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516315221/', R + 'B521108168/'],
    price_note: 'One price from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Sea-bream shio ramen', '¥1,000', 'Ramen', 'no', 'no', 'August 2025.', 'tai_shio'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'September 2025.', 'miso'),
      it('', '', 'Beef-bone shoyu ramen', '', 'Ramen', 'no', 'no', 'January 2026.', 'gyukotsu_shoyu'),
    ] }, {
    cuisine: '看板の鯛塩ラーメン1,000円: いりこ・昆布・鯵のだし、チャーシューの代わりに焼いた鯛・味噌ラーメン・チャーシュー、卵、ねぎ、メンマの牛骨醤油ラーメン・Hokkaidoの小麦の中細ストレート麺・卓上ににんにくと胡椒・丼と唐揚げ・白木のカウンター11席と5人テーブル',
    neighborhood: '中央区南船場2-2-28 順慶ビル 1F。長堀橋駅B2出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。Hokkaidoの小麦の麺、味噌と醤油のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。焼いた鯛をのせた魚介だし、牛骨スープ、チャーシュー。',
    notes: '[ラーメン・長堀橋近くの鯛塩] 長堀橋近くの清潔な白木のカウンターの店で、2021年開店、深夜0時まで営業。看板の鯛塩ラーメン(1,000円)は、いりこ、昆布、鯵の繊細な魚介だしに、チャーシューの代わりに焼いた鯛をのせ、Hokkaidoの小麦の麺で。上品で奥深いという人もいれば、穏やかすぎて魚の風味が強く、パンチに欠けるという人も。味噌ラーメンは有名な味噌のチェーンに負けない味で、牛骨醤油は甘みがあって軽いのに奥深い。丼や唐揚げなど券売機のメニューは豊富。飲んだ後に寄る人も。日祝休み、売り切れることも。',
  });
}

// ================================================================ にんにくらーめん 天洋 新町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27122915/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_ninniku_ramen_tenyo_shinmachi', name: 'にんにくらーめん 天洋 新町店 (Ninniku Ramen Tenyo Shinmachi)', category: 'OMNI',
    lat: 34.676115, lng: 135.493877, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso and soy seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu, egg.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 17:00–23:00; closed Sunday; hours may change (Tabelog). QR (PayPay, Alipay) accepted; no cards or e-money (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-29-8 — 1 min from Nishi-Ohashi Stn exit 2',
    cuisine: 'Garlic ramen on a tonkotsu base · ramen ¥900 · miso ninniku ramen · garlic miso chashu ramen · spicy miso K ramen ¥1,100 · Kyoto Kujo negi ramen · garlic to order: none, less, or extra on a side plate · curly noodles · boldly seasoned chashu · boiled egg · rice, takana and kimchi · set meals · 10 counter seats, 12 table seats',
    website: null, gmaps: gm('にんにくらーめん 天洋 新町店'), menu_url: null,
    notes: "[Ramen · garlic tonkotsu and miso by Nishi-Ohashi] A spacious, clean garlic-ramen shop a minute from Nishi-Ohashi, open since 2021. The base is tonkotsu loaded with chopped garlic over curly noodles, with boldly seasoned chashu good enough to eat with rice; the plain ramen is ¥900. Most reviewers order miso: smooth and mild enough for miso skeptics, also in a garlic miso chashu bowl piled with chashu and a boiled egg, and a spicy miso K ramen (¥1,100). There's also a Kyoto Kujo negi ramen. Garlic can be skipped, reduced, or doubled with an extra side plate. Without it, one diner found the miso merely average. The takana with fresh rice is a quiet star. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 April 2021 (Tabelog)', background: 'Garlic ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Garlic miso ramen.',
      anecdotes: [
        { text: '"The broth is based on pork bone and is loaded with garlic, paired with curly noodles. The chashu (braised pork) is seasoned with a bold flavor that makes it quite addictive." — August 2026, miso ninniku ramen.', source: R + 'B533452222/' },
        { text: '"When I requested extra garlic, it was served both in the ramen and on a separate plate, which was a delightful surprise." — October 2026, garlic miso chashu ramen.', source: R + 'B536890001/' },
      ],
      japanese_sources_summary: '食べログ: にんにくらーめん 天洋 新町店、大阪市西区新町1-29-8、西大橋駅2番出口から徒歩1分、月〜土11:00〜15:00・17:00〜23:00、日曜休み、QR(PayPay、Alipay)可、カード・電子マネー不可、22席(カウンター10、テーブル12)、禁煙、2021年4月22日開店。口コミ(2026年6〜10月): 辛味噌Kラーメン1,100円、にんにく入り、いつもは味噌ラーメン、にんにく抜きの味噌は普通、炊きたてご飯と名物の高菜、キムチ、店内は広くて清潔、味噌にんにくラーメン、豚骨ベース、ちぢれ麺、濃い味のチャーシュー、定食も、Kyoto Kujo Negiラーメン、にんにく少なめ、にんにく味噌チャーシュー麺、にんにく増しは別皿でも、ねぎ増しは有料、ゆで卵、まろやかな味噌、濃厚な豚骨、900円、スープを飲み干して。',
      confidence: 'medium', sources: [TB, R + 'B533452222/', R + 'B536890001/', R + 'B441171942/', R + 'B533121549/', R + 'B535086492/', R + 'B537266398/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: 'wavy', hydration: null, handmade: false, notes: 'Curly noodles (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Miso ninniku ramen; garlic miso chashu ramen (August–October 2026).',
      chashu: 'Boldly seasoned; plenty on the chashu ramen (August–October 2026).',
      notable_toppings: ['chopped garlic', 'boiled egg', 'takana (side)', 'Kujo negi (one bowl)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Nishi-Ohashi\'s garlic house: mild miso on tonkotsu, with garlic by the plate if you want it.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B537266398/', '"The rich and flavorful tonkotsu broth is simply the best!"'],
        oiliness: [R + 'B536890001/', '"The miso to be smooth and mild" — mid-scale.'],
        clarity: [R + 'B533452222/', 'Pork-bone base — placed low.'],
        tare_strength: [R + 'B536890001/', '"Smooth and mild" miso — mid-scale.'],
        noodle_firmness: [R + 'B533452222/', 'Curly noodles, not described further — mid-scale.'],
        aroma_punch: [R + 'B533452222/', '"Loaded with garlic."'],
      },
      confidence: 'medium', sources: [R + 'B533452222/', R + 'B536890001/', R + 'B537266398/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; garlic amount to order.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-29-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目29番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B441171942/', R + 'B537266398/'],
    price_note: 'Prices from June and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Miso ninniku ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'miso_ninniku'),
      it('', '', 'Garlic miso chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'miso_chashu'),
      it('', '', 'Spicy miso K ramen', '¥1,100', 'Ramen', 'no', 'no', 'June 2026.', 'kara_miso_k'),
      it('', '', 'Kyoto Kujo negi ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'kujo_negi'),
    ] }, {
    cuisine: '豚骨ベースのにんにくラーメン・ラーメン900円・味噌にんにくラーメン・にんにく味噌チャーシュー麺・辛味噌Kラーメン1,100円・Kyoto Kujo Negiラーメン・にんにくは抜き、少なめ、別皿で増しも・ちぢれ麺・濃い味のチャーシュー・ゆで卵・ご飯、高菜、キムチ・定食・カウンター10席、テーブル12席',
    neighborhood: '西区新町1-29-8。西大橋駅2番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌と醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープ、チャーシュー、卵。',
    notes: '[ラーメン・西大橋のにんにく豚骨と味噌] 西大橋駅から1分の広くて清潔なにんにくラーメンの店で、2021年開店。刻みにんにくたっぷりの豚骨ベースにちぢれ麺、ご飯が進む濃い味のチャーシュー、ラーメンは900円。口コミでは味噌を頼む人が多く、味噌が苦手でも食べられるまろやかさ。チャーシューとゆで卵たっぷりのにんにく味噌チャーシュー麺、辛味噌Kラーメン(1,100円)も。Kyoto Kujo Negiラーメンもある。にんにくは抜き、少なめ、別皿での増しも可。にんにく抜きの味噌は普通だったという声も。炊きたてご飯と高菜が隠れた主役。日曜定休。',
  });
}

// ================================================================ 日夏屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27150000/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_hinatsuya_nambanaka', name: '日夏屋 (Hinatsuya)', category: 'OMNI',
    lat: 34.659812, lng: 135.498437, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried rice and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu, eggs.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). Ticket machine (September 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 3-16-11, next door to Mugen Ramen — about 7 min from Daikokucho Stn',
    cuisine: 'Tonkotsu ramen ¥850 · creamy white pork broth over thin straight noodles · seared fatty chashu, soft-boiled egg, green onion and nori · quail eggs · vegetable ramen ¥1,000, piled with cabbage · free rice, one free extra noodles, free kimchi and onion · doubanjiang, garlic and pepper on the table · fried rice · kara-age set',
    website: null, gmaps: gm('日夏屋 難波中'), menu_url: null,
    notes: "[Ramen · a tonkotsu shop with free rice, next door to Mugen] A tonkotsu ramen shop opened in June 2025, easy to miss beside Mugen Ramen but preferred by at least one diner. The tonkotsu (¥850) is a creamy, slightly frothy white broth, sweet with pork, over thin straight noodles. Seared fatty chashu, a soft-boiled egg, green onion and a sheet of nori top it; one bowl had five quail eggs. Some find it on the light, mild side and a little salty. The value is the draw: rice, one extra noodles, kimchi and onions come free, so wrap rice in soup-soaked nori or add doubanjiang. The vegetable ramen (¥1,000) is heaped with cabbage. Fried rice and a kara-age set too. Cash only; open until 23:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 June 2025 (Tabelog)', background: 'Tonkotsu ramen shop (2025–2026 reviews).', philosophy: null, specialty: 'Tonkotsu ramen.',
      anecdotes: [
        { text: '"In a deep black bowl, the creamy, slightly frothy white broth contrasts beautifully with the perfectly straight, thin noodles. Topped with a large piece of well-seared fatty chashu, a beautifully glistening soft-boiled egg…" — October 2026.', source: R + 'B526454604/' },
        { text: '"The tonkotsu ramen was JPY 850, and with a free rice and one free extra noodle option, plus unlimited kimchi, the cost performance is excellent." — October 2026.', source: R + 'B537637420/' },
      ],
      japanese_sources_summary: '食べログ: 日夏屋、大阪市浪速区難波中3-16-11、大国町から426m、毎日11:00〜23:00、カード・電子マネー・QR不可、2025年6月14日開店。口コミ(2025年6月〜2026年10月): 野菜ラーメン1,000円、キャベツ中心の野菜たっぷり、替え玉かご飯の無料サービス、券売機、あっさりした豚骨と細麺、無料のご飯、黒い丼、クリーミーで少し泡立つ白いスープ、細ストレート麺、炙った脂の多いチャーシュー、半熟卵、ねぎ、海苔、ご飯とキムチ無料、スープに浸した海苔でご飯を巻く、うずらの卵5個、玉ねぎとキムチと替え玉1回とご飯が無料、豆板醤・にんにく・胡椒、隣の無限ラーメンより好み、豚骨ラーメン850円、濃さは軽め、塩気あり、チャーハン、唐揚げ定食、深夜まで営業、海外のスタッフと客が多い、丁寧な接客、脂っこくなく塩気も控えめ。',
      confidence: 'medium', sources: [TB, R + 'B526454604/', R + 'B537637420/', R + 'B508885299/', R + 'B534355031/', R + 'B536412859/', R + 'B537086296/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles; firmness to order for the extra noodles (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Tonkotsu ramen, ¥850 (September–October 2026).',
      chashu: 'Large, well-seared fatty chashu (October 2026).',
      notable_toppings: ['soft-boiled egg', 'nori', 'quail eggs', 'free kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Nambanaka\'s value tonkotsu: a creamy white bowl with free rice, kimchi and a free extra noodles.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536412859/', '"The richness was on the lighter side"; creamy to another — mid-scale.'],
        oiliness: [R + 'B537637420/', '"Not overly fatty" — placed low.'],
        clarity: [R + 'B526454604/', '"Creamy, slightly frothy white broth" — placed low.'],
        tare_strength: [R + 'B536412859/', '"The saltiness was noticeable"; "mild" to another — mid-scale.'],
        noodle_firmness: [R + 'B536412859/', '"The perfect firmness from the start" — mid-scale.'],
        aroma_punch: [R + 'B537637420/', '"It feels a bit less indulgent!" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B526454604/', R + 'B536412859/', R + 'B537637420/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; mostly overseas staff and diners (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-16-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目16番11号 (go) 12m; next to 無限ラーメン 難波中3-16-7; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536412859/', R + 'B508885299/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen', '¥850', 'Ramen', 'no', 'no', 'Free rice, extra noodles and kimchi; October 2026.', 'tonkotsu'),
      it('', '', 'Vegetable ramen', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'yasai'),
      it('', '', 'Fried rice', '', 'Sides', 'no', 'no', 'September 2026.', 'chahan'),
      it('', '', 'Kara-age set', '', 'Sets', 'no', 'no', 'August 2026.', 'karaage_set'),
    ] }, {
    cuisine: '豚骨ラーメン850円・細ストレート麺にクリーミーな白い豚骨スープ・炙った脂の多いチャーシュー、半熟卵、ねぎ、海苔・うずらの卵・キャベツたっぷりの野菜ラーメン1,000円・ご飯、替え玉1回、キムチと玉ねぎは無料・卓上に豆板醤、にんにく、胡椒・チャーハン・唐揚げ定食',
    neighborhood: '浪速区難波中3-16-11、無限ラーメンの隣。大国町駅から徒歩7分ほど',
    gf_detail: 'グルテンフリーではありません。小麦の麺、チャーハンと唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープ、チャーシュー、卵。',
    notes: '[ラーメン・無限ラーメンの隣の無料ご飯付きの豚骨] 2025年6月開店の豚骨ラーメンの店で、隣の無限ラーメンに隠れて見落としがちだが、こちらが好みという人も。豚骨ラーメン(850円)はクリーミーで少し泡立つ白いスープに豚の甘み、細ストレート麺。炙った脂の多いチャーシュー、半熟卵、ねぎ、海苔がのり、うずらの卵5個がのった一杯も。濃さは軽めで穏やか、少し塩気が強いという声も。お得さが魅力で、ご飯、替え玉1回、キムチ、玉ねぎが無料。スープに浸した海苔でご飯を巻いたり、豆板醤を足したり。野菜ラーメン(1,000円)はキャベツが山盛り。チャーハンと唐揚げ定食も。現金のみ、23時まで。',
  });
}

// ================================================================ 河童ラーメン本舗 なんばパークスサウス店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27137108/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://kappa-hompo.co.jp/';
  put({
    id: 'osaka_kappa_ramen_honpo_namba_parks_south', name: '河童ラーメン本舗 なんばパークスサウス店 (Kappa Ramen Honpo Namba Parks South)', category: 'OMNI',
    lat: 34.659694, lng: 135.501875, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; kara-age and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth with back fat, chashu.',
    hours_raw: 'Daily 10:00–24:00 (Tabelog). Mobile ordering (June 2026). E-money and QR accepted; no cards (Tabelog). EPARK queueing (July 2026).',
    hours: ALL(day(['10:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 2-11-18, Parks South Square 2F — 5 min from Nankai Namba Stn',
    cuisine: 'Kappa tonkotsu shoyu · Kappa ramen, light or rich · ULTRA-rich Kappa ramen, only at this branch · Aka Kappa, mildly spicy · vegetable ramen in white or spicy red · medium-thick curly noodles; free extra noodles coupon, thin and firm, firmness to order · free kimchi, fresh garlic and fried garlic · half fried-rice set · kara-age set · 13 counter seats, 36 table seats',
    website: OWN, gmaps: gm('河童ラーメン本舗 なんばパークスサウス店'), menu_url: null,
    notes: "[Ramen · Kappa's Namba Parks South branch, with an ULTRA-rich bowl] The Namba Parks South branch of Kappa Ramen Honpo, open since 2023 in a bright, roomy space. The exclusive here is the ULTRA rich: a thick, fatty tonkotsu that clings to medium-thick curly noodles. The regular Kappa ramen comes light or rich, the Aka Kappa adds a gentle chili kick to the tonkotsu shoyu, and the vegetable ramen comes white and sweet or spicy red with chili oil. Every bowl earns a free extra-noodles coupon, thin and firm, with firmness to order. Kimchi, fresh garlic and fried garlic are free. Pair it with a half fried-rice or kara-age set. Order on your phone; lines can form at peak times. Open 10:00 to midnight. See also Kappa Sennichimae and Amemura.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2023 (Tabelog)', background: 'Branch of Kappa Ramen Honpo; official site kappa-hompo.co.jp (Tabelog, staff-maintained).', philosophy: null, specialty: 'Kappa tonkotsu shoyu; ULTRA rich (branch-only).',
      anecdotes: [
        { text: '"This location offers the exclusive ULTRA Rich! A rich and flavorful tonkotsu broth with plenty of fat! The soup has a slightly thick consistency! The medium-thick curly noodles cling perfectly to the broth!" — May 2026.', source: R + 'B486490331/' },
        { text: '"I ordered the Aka Kappa Ramen with a seasoned egg… It had a nice spicy kick without being too hot, and it paired perfectly with the tonkotsu soy sauce." — June 2026.', source: R + 'B530341818/' },
      ],
      japanese_sources_summary: '公式 kappa-hompo.co.jp。食べログ(店舗会員): 河童ラーメン本舗 なんばパークスサウス店、大阪市浪速区難波中2-11-18 パークスサウススクエア 2F、南海なんば駅中央口・南口から約5分、毎日10:00〜24:00、電子マネー・QR可、カード不可、49席(カウンター13、テーブル36)、禁煙、2023年7月1日開店。口コミ(2026年5〜10月): この店限定のULTRA濃厚、脂たっぷりの豚骨、ややとろみ、中太ちぢれ麺、無料のキムチ、替え玉1回無料(細麺で硬め)、半チャンセット、赤河童ラーメンと味玉、モバイルオーダー、豚骨醤油にほどよい辛さ、明るく清潔、EPARK、基本の河童ラーメンこってり、硬めの替え玉、山田電機とくら寿司の近く、無料のキムチ・生にんにく・フライドガーリック、あっさり、野菜ラーメン、白の野菜ラーメン、唐揚げ定食、甘みのある濃厚スープ、赤の野菜ラーメンに特製ラー油。',
      confidence: 'medium', sources: [TB, OWN, R + 'B486490331/', R + 'B530341818/', R + 'B531186249/', R + 'B531760436/', R + 'B532775892/', R + 'B537701802/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thick curly noodles; extra noodles thin and firm (May 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'ULTRA-rich Kappa ramen, branch-only (May 2026); Kappa ramen light or rich.',
      chashu: null,
      notable_toppings: ['free kimchi', 'fresh garlic', 'fried garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Namba Parks\' Kappa: the branch-only ULTRA-rich tonkotsu, with a free extra noodles on every bowl.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B486490331/', '"A rich and flavorful tonkotsu broth with plenty of fat!" (ULTRA)'],
        oiliness: [R + 'B486490331/', '"With plenty of fat" — placed high.'],
        clarity: [R + 'B486490331/', '"A slightly thick consistency" — placed low.'],
        tare_strength: [R + 'B537701802/', '"The rich and sweet broth" — mid-scale.'],
        noodle_firmness: [R + 'B486490331/', 'Extra noodles "thin and firm"; main noodles curly — mid-scale.'],
        aroma_punch: [R + 'B530341818/', '"A nice spicy kick without being too hot" (Aka Kappa) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B486490331/', R + 'B530341818/', R + 'B537701802/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Mobile ordering; appeals to locals and overseas visitors (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-11-18 パークスサウススクエア 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目11番18号 (go) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486490331/', R + 'B537701802/'],
    price_note: 'No prices captured; reviewers spent ¥1,000–1,999.', last_checked: TODAY, items: [
      it('', '', 'ULTRA-rich Kappa ramen', '', 'Ramen', 'no', 'no', 'Branch-only; May 2026.', 'ultra'),
      it('', '', 'Kappa ramen (light or rich)', '', 'Ramen', 'no', 'no', 'July 2026.', 'kappa'),
      it('', '', 'Aka Kappa ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'aka_kappa'),
      it('', '', 'Vegetable ramen (white or red)', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'yasai'),
      it('', '', 'Half fried-rice set', '', 'Sets', 'no', 'no', 'May–July 2026.', 'han_chan'),
    ] }, {
    cuisine: '河童の豚骨醤油・河童ラーメン、あっさりかこってり・この店限定のULTRA濃厚・ほどよく辛い赤河童・白か赤(辛口)の野菜ラーメン・中太ちぢれ麺、替え玉1回無料(細麺で硬さを選べる)・キムチ、生にんにく、フライドガーリック無料・半チャンセット・唐揚げ定食・カウンター13席、テーブル36席',
    neighborhood: '浪速区難波中2-11-18 パークスサウススクエア 2F。南海なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、唐揚げとチャーハン。',
    vegan_detail: 'ヴィーガンではありません。背脂入りの豚骨スープ、チャーシュー。',
    notes: '[ラーメン・河童のなんばパークスサウス店、限定のULTRA濃厚] 河童ラーメン本舗のなんばパークスサウス店で、2023年開店、明るく広い店内。この店限定はULTRA濃厚で、脂たっぷりのとろみのある豚骨が中太ちぢれ麺によく絡む。基本の河童ラーメンはあっさりかこってり、赤河童は豚骨醤油にほどよい辛さ、野菜ラーメンは甘みのある白か、ラー油の効いた赤。どの一杯にも細麺で硬さを選べる替え玉の無料券が付く。キムチ、生にんにく、フライドガーリックは無料。半チャンや唐揚げのセットと一緒に。注文はスマホで、混む時間は行列も。10時から深夜0時まで。千日前店と米国村店もあります。',
  });
}

save();
