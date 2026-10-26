// Osaka sweep (2-mile circle around Dotonbori), batch 25 — ramen phase, nearest first (all OMNI).
//   + 別邸 たけ井 なんばラーメン一座店 (Kyoto-origin rich chicken-pork tsukemen; EDION ramen floor)
//   + 一夢庵 麵 (late-night tonkotsu shoyu, 22:00–7:30, one-person counter)
//   + 四川食房 福龍 (Tabelog Chinese WEST 100 2021; tantanmen and scallop fried rice — filed 'other', no ramen block)
//   + ぎゅっこ志 なんばラーメン一座店 (beef-bone white soup and niboshi; free kaedama to 9 pm)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 25);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 別邸 たけ井 なんばラーメン一座店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27111499/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_bettei_takei_edion_namba', name: '別邸 たけ井 なんばラーメン一座店 (Bettei Takei)', category: 'OMNI',
    lat: 34.665528, lng: 135.501917, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-pork-and-seafood broth, chashu.',
    hours_raw: 'Daily 11:00–21:30 (L.O. 21:00), irregular closures; open through the afternoon (Tabelog). QR payments only, no cards (Tabelog). The dip can be reheated on request.',
    hours: ALL(day(['11:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-2-18, EDION Namba Honten 9F (Namba Ramen Ichiza)',
    cuisine: 'Rich chicken-and-pork-bone tsukemen with seafood (small 330 g ¥1,220, regular ¥1,200–1,280, large 450 g) · ajitama special ¥1,540 · light chicken-pork tsukemen · rich chuka soba ¥1,150 · thick chewy noodles · dip reheated on request · fried rice ¥500 · chicken-and-pork rice ¥450 · spicy topping ¥150',
    website: 'http://menya-takei.com', gmaps: gm('別邸 たけ井 なんばラーメン一座'), menu_url: null,
    notes: "[Tsukemen · Kyoto-born rich tsukemen on EDION's ramen floor] A branch of Menya Takei, a tsukemen shop with its main branch in Kyoto, on EDION Namba's 9th-floor ramen street, and one regular's favourite there. The rich chicken-and-pork-bone dip, blended with seafood, is thick without being too salty or greasy. It clings to slightly firm, flat, thick and chewy noodles: even the small is 330 g, and the large is 450 g. Staff will reheat the dip. Rich tsukemen runs about ¥1,200–1,280, and the special with ajitama was ¥1,540 in October 2026. There's also a rich chuka soba (¥1,150) and a spicy topping (¥150). One diner likened it to a Kansai take on Noroshi. Another found it just normally good for the price, and a regular felt the noodles had softened lately. Open all afternoon.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 June 2019 (Tabelog)', background: 'Menya Takei (menya-takei.com); a September 2026 reviewer notes the main branch is in Kyoto.', philosophy: null, specialty: 'Rich chicken-pork tsukemen.',
      anecdotes: [
        { text: '"The broth was a thick and flavorful seafood and pork bone mix, paired with slightly firm, flat, thick noodles… The soup was rich without being overly salty or greasy, which is quite rare to find." — October 2026, rich chuka soba ¥1,150.', source: R + 'B474388756/' },
        { text: '"Rich Chicken and Pork Bone Tsukemen (Small) JPY 1220… Even so, the noodles are a decent 330g… I appreciated that the dipping sauce can be reheated." — October 2026.', source: R + 'B537699647/' },
      ],
      japanese_sources_summary: '食べログ: 別邸 たけ井 なんばラーメン一座店、大阪市中央区難波3-2-18 エディオンなんば本店9F、毎日11:00〜21:30(L.O.21:00)、不定休、カード・電子マネー不可、QR決済可、禁煙、2019年6月7日開店、公式 menya-takei.com。2024〜2026年の口コミ: 濃厚中華そば1,150円と炒飯500円(魚介豚骨の濃いスープ、やや硬めの平打ち太麺、塩辛くも脂っこくもない)、濃厚味玉中華そば1,240円と辛味トッピング150円×2、鶏豚ライス450円、ラーメン一座で一番好き、通し営業、あっさり鶏豚骨つけ麺1,280円は麺のコシが弱かった、京都が本店、濃厚鶏豚骨つけ麺1,200円、味玉濃厚鶏豚骨つけ麺1,540円は普通においしいという声、特製、つけ汁の温め直し、大盛り450g、9階は明るく空いている、関西版の「Noroshi」のよう、小330g1,220円、太くもちもちの麺。',
      confidence: 'medium', sources: [TB, R + 'B474388756/', R + 'B537699647/', R + 'B536564993/', R + 'B537001801/', R + 'B537514753/'] },
    ramen: {
      broth_base: ['chicken', 'tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: false, notes: 'Slightly firm, flat, thick and chewy noodles; small 330 g, large 450 g (October 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Rich chicken-and-pork-bone tsukemen ¥1,200–1,280; ajitama special ¥1,540 (2026).',
      chashu: 'Several kinds of chashu on the special ("all delicious", October 2026).',
      notable_toppings: ['menma', 'seasoned egg', 'spicy topping'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-pork-seafood dip.' },
      pantheon: 'Kyoto\'s Menya Takei on EDION\'s ramen floor: a dense chicken-pork-seafood dip clinging to flat, thick noodles by the hundreds of grams.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536564993/', '"The broth is thick and rich, allowing you to savor the deep flavors of the meat."'],
        oiliness: [R + 'B474388756/', '"Rich without being overly salty or greasy."'],
        clarity: [R + 'B536564993/', 'Thick, rich dip — opaque.'],
        tare_strength: [R + 'B474388756/', '"Without being overly salty" — mid-scale.'],
        noodle_firmness: [R + 'B474388756/', '"Slightly firm, flat, thick noodles"; one found them "not firm enough" lately (' + R + 'B529351058/).'],
        aroma_punch: [R + 'B537699647/', '"A blend of pork bone and seafood flavors" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536564993/', R + 'B474388756/', R + 'B537699647/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ramen-floor shop; QR payment.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-18 エディオンなんば本店 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番18号 (go) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B474388756/', R + 'B537699647/', R + 'B537001801/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rich chicken-and-pork-bone tsukemen (small, 330 g)', '¥1,220', 'Tsukemen', 'no', 'no', 'October 2026.', 'noko_tsukemen_s'),
      it('', '', 'Ajitama rich chicken-and-pork-bone tsukemen', '¥1,540', 'Tsukemen', 'no', 'no', 'October 2026.', 'ajitama_tsukemen'),
      it('', '', 'Light chicken-and-pork-bone tsukemen', '¥1,280', 'Tsukemen', 'no', 'no', 'September 2026.', 'assari_tsukemen'),
      it('', '', 'Rich chuka soba', '¥1,150', 'Ramen', 'no', 'no', 'October 2026.', 'noko_chuka'),
      it('', '', 'Fried rice', '¥500', 'Rice', 'no', 'no', 'October 2026.', 'chahan'),
      it('', '', 'Spicy topping', '¥150', 'Toppings', 'ask', 'ask', 'August 2026.', 'karami'),
    ] }, {
    cuisine: '魚介の入った濃厚鶏豚骨のつけ麺(小330g1,220円、並1,200〜1,280円、大450g)・味玉特製1,540円・あっさり鶏豚骨つけ麺・濃厚中華そば1,150円・太くもちもちの麺・つけ汁は温め直し可・炒飯500円・鶏豚ライス450円・辛味トッピング150円',
    neighborhood: '難波3-2-18 エディオンなんば本店9F(なんばラーメン一座)',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、炒飯。',
    vegan_detail: 'ヴィーガンではありません。鶏豚骨と魚介のスープ、チャーシュー。',
    notes: '[つけ麺・エディオンのラーメン街の京都発の濃厚つけ麺] 京都に本店があるつけ麺店の支店で、エディオンなんば9階のラーメン街にあり、ここで一番好きという常連も。魚介を合わせた濃厚な鶏豚骨のつけ汁は濃いのに塩辛くも脂っこくもなく、やや硬めの平打ちの太くもちもちの麺によく絡みます。小でも330g、大は450g。つけ汁は温め直してもらえます。濃厚つけ麺は1,200〜1,280円ほどで、味玉の特製は2026年10月で1,540円。濃厚中華そば(1,150円)や辛味トッピング(150円)も。「Noroshi」の関西版のようという客も、値段のわりに普通という客も、最近は麺のコシが弱くなったという常連も。午後も通しで営業。',
  });
}

// ================================================================ 一夢庵 麵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126691/'; const R = TB + 'dtlrvwlst/';
  const d = day(['22:00', '07:30']);
  put({
    id: 'osaka_ichimuan_men_higashishinsaibashi', name: '一夢庵 麵 (Ichimu An Men)', category: 'OMNI',
    lat: 34.67106, lng: 135.505127, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu.',
    hours_raw: 'Mon–Sat 22:00–7:30; closed Sundays (Tabelog). No credit cards (Tabelog). A one-person counter of about eight seats (2026).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: [] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-3-32, Sun Plaza 123 Juraku Bldg 1F',
    cuisine: 'Rich tonkotsu shoyu with Kyoto aged soy sauce ¥1,300 · medium-thick straight noodles · crispy-edged chashu, soft egg, wood ear, green onion · sweet-savoury-spicy mazesoba · tsukemen · fried rice (large only) · chashu rice bowl · 10 pm–7:30 am',
    website: null, gmaps: gm('一夢庵 麵 東心斎橋'), menu_url: null,
    notes: "[Ramen · late-night tonkotsu shoyu in Higashi-Shinsaibashi] A small counter of about eight seats, run by one person and open from 10 pm to 7:30 am. The rich tonkotsu shoyu (¥1,300, October 2026) bursts with flavour yet finishes clean. A reviewer credits a Kyoto aged soy sauce for bringing out the pork's sweetness. It comes with medium-thick straight noodles, wood ear, a creamy soft egg and an outstanding chashu with crispy edges. The sweet-savoury-spicy mazesoba and the tsukemen have their fans too. The fried rice comes only in a large size. Service can be curt, and it is pricey for ramen, but there are few bowls this good at 5 am.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 November 2021 (Tabelog)', background: 'A one-person late-night shop (April 2026 review); no source names the operator.', philosophy: null, specialty: 'Tonkotsu shoyu.',
      anecdotes: [
        { text: '"The rich tonkotsu soy sauce broth bursts with flavor the moment it hits your mouth, yet surprisingly leaves a clean aftertaste. The aroma of Kyoto Okko aged soy sauce enhances the sweetness of the pork bone." — January 2026.', source: R + 'B520380780/' },
        { text: '"The chashu was outstanding—crispy and just the right amount of fat, which would go well with white rice." — March 2026.', source: R + 'B525194320/' },
      ],
      japanese_sources_summary: '食べログ: 一夢庵 麵、大阪市中央区東心斎橋2-3-32 サンプラザ123寿楽ビル1F、06-6484-3923、月〜土22:00〜翌7:30、日曜定休、カード不可、2021年11月26日開店。2026年の口コミ(1〜10月): 深夜のラーメン、濃厚な豚骨醤油で後味はすっきり、京都の熟成醤油「Okko」で豚骨の甘み、しっとりしたチャーシュー・半熟玉子・ねぎ、きくらげ、カリッとしたチャーシュー、つけ麺もおすすめ、スープを飲み干したくなる、1人営業で接客がそっけない、片手で提供、炒飯は大のみ、チャーシュー丼、甘辛旨まぜそば、もちもちの麺、濃厚豚骨醤油ラーメン1,300円は高め、中太ストレート麺、カウンター約8席、朝7時半まで。',
      confidence: 'medium', sources: [TB, R + 'B520380780/', R + 'B525194320/', R + 'B537662933/', R + 'B525802908/', R + 'B528113957/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Rich tonkotsu shoyu ramen ¥1,300 (October 2026).',
      chashu: 'Crispy-edged, just-fatty-enough chashu (March 2026).',
      notable_toppings: ['wood ear', 'soft-boiled egg', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu.' },
      pantheon: 'Higashi-Shinsaibashi\'s one-person night counter: a rich tonkotsu shoyu with a clean finish and crisp-edged chashu, until 7:30 am.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537662933/', '"The deep flavor of the pork bone broth combined with the richness of the soy sauce."'],
        oiliness: [R + 'B520380780/', '"Even late at night, it\'s not too heavy."'],
        clarity: [R + 'B525194320/', 'Rich tonkotsu — opaque.'],
        tare_strength: [R + 'B520380780/', '"Bursts with flavor the moment it hits your mouth, yet surprisingly leaves a clean aftertaste."'],
        noodle_firmness: [R + 'B537662933/', 'Medium-thick straight noodles; firmness not described — mid-scale.'],
        aroma_punch: [R + 'B520380780/', '"The aroma of Kyoto Okko aged soy sauce enhances the sweetness of the pork bone."'],
      },
      confidence: 'medium', sources: [R + 'B537662933/', R + 'B520380780/', R + 'B525194320/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person counter; service can be curt.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-3-32 サンプラザ123寿楽ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目3番32号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537662933/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Rich tonkotsu shoyu ramen', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'tonkotsu_shoyu'),
      it('', '', 'Sweet-savoury-spicy mazesoba', '', 'Mazesoba', 'no', 'no', 'May 2026.', 'mazesoba'),
      it('', '', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'March 2026.', 'tsukemen'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'April 2026.', 'chashu_don'),
    ] }, {
    cuisine: '京都の熟成醤油の濃厚な豚骨醤油1,300円・中太ストレート麺・カリッとしたチャーシュー、半熟玉子、きくらげ、ねぎ・甘辛旨まぜそば・つけ麺・炒飯(大のみ)・チャーシュー丼・夜10時〜朝7時半',
    neighborhood: '東心斎橋2-3-32 サンプラザ123寿楽ビル1F',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・東心斎橋の深夜の豚骨醤油] 1人で切り盛りする8席ほどの小さなカウンターで、夜10時から朝7時半まで。濃厚な豚骨醤油(1,300円、2026年10月)は口に入れた瞬間に味が広がるのに後味はすっきり。京都の熟成醤油が豚骨の甘みを引き立てるという客も。中太ストレート麺に、きくらげ、とろっとした半熟玉子、端がカリッとした絶品のチャーシュー。甘辛旨まぜそばやつけ麺にもファンがいます。炒飯は大しかありません。接客はそっけないこともあり、ラーメンとしては高めですが、朝5時にこれほどの一杯は貴重です。',
  });
}

// ================================================================ 四川食房 福龍
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27000372/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'http://www.tantanmen.com/';
  const d = day(['18:00', '22:00']);
  put({
    id: 'osaka_sichuan_shokubo_fukuryu', name: '四川食房 福龍 (Sichuan Shokubo Fukuryu)', category: 'OMNI',
    lat: 34.669842, lng: 135.505971, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, gyoza, soy-based Sichuan sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork in the tantanmen and mapo tofu, seafood fried rice.',
    hours_raw: 'Daily 18:00–22:00 (L.O. 21:30) (Tabelog). Sister restaurant of Baltika 03 (Tabelog). Cards, e-money and PayPay accepted. Always busy; tables fill first, counter often free.',
    hours: ALL(d), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sōemonchō 1-5, Kōsei Bldg 1F — between Nagahoribashi and Nippombashi',
    cuisine: 'Tabelog Chinese WEST 100 (2021) · tantanmen (soup and dry), mild and refined · scallop fried rice ¥1,000 (shrimp, crab or vegetable too; half portions with any dish) · mapo tofu · seafood stir-fry with shrimp and squid ¥1,800 · gyoza ¥500 · yurinchi · green-onion ramen · 20 seats',
    website: OWN, gmaps: gm('四川食房 福龍 宗右衛門町'), menu_url: null,
    notes: "[Chinese · Sōemonchō's refined Sichuan kitchen] A 20-seat Sichuan restaurant with a long counter and tables at the back, named to Tabelog's Chinese WEST \"100\" in 2021 and run by a small team. One reviewer describes the chef as a disciple of Chen Kenmin. The tantanmen, in soup or dry, is the most popular dish, refined and milder than expected, so ask for it spicier. The scallop fried rice (¥1,000), seen on TV, is moist yet fluffy, and fried rice comes with shrimp, crab or vegetables too, in half portions alongside any dish. The salt seafood stir-fry of shrimp and squid (¥1,800) impressed one diner. Gyoza, yurinchi and a gentle green-onion ramen to finish are also on offer. Dinner only, 6 to 10 pm, and always full.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sōemonchō 1-chōme (Tabelog); sister restaurant of Baltika 03', background: 'Tantanmen specialist (tantanmen.com); a March 2026 reviewer describes the chef as a disciple of Chen Kenmin, and another describes a team of three running it (March 2026).', philosophy: null, specialty: 'Tantanmen; scallop fried rice.',
      anecdotes: [
        { text: '"As expected, the Dan Dan Noodles, which are the restaurant\'s most popular dish, were the best!… The flavor of the noodles was refined and mild." — March 2026.', source: R + 'B525388114/' },
        { text: '"The scallop fried rice was moist yet fluffy… the final bowl of green onion ramen after drinking was gentle and made for a perfect ending." — January 2026.', source: R + 'B522482641/' },
      ],
      japanese_sources_summary: '食べログ: 四川食房 福龍、大阪市中央区宗右衛門町1-5 幸成ビル1F、20席(カウンター11、テーブル10)、毎日18:00〜22:00(L.O.21:30)、禁煙、カード・電子マネー・PayPay可、食べログ 中国料理 WEST 百名店 2021、公式 tantanmen.com、バルチカ03の姉妹店。2025〜2026年の口コミ: ラストオーダー直前でも快く迎えてくれた、テレビで見たホタテ炒飯1,000円、テーブルは予約で満席でカウンターに、油淋鶏、締めのねぎラーメン、赤星750円・焼き餃子500円・海鮮(えびといか)塩炒め1,800円、3人で営業、いつも満席、Chen Kenminの弟子の店(Uber Eats)、担々麺が一番人気でマイルド、麻婆豆腐、汁なし担々麺、ホタテ炒飯は少し塩辛い、海老炒飯、一品にミニ麻婆ご飯や半炒飯(ホタテ・えび・かに・野菜)を追加できる。',
      confidence: 'medium', sources: [TB, OWN, R + 'B525388114/', R + 'B522482641/', R + 'B524350039/', R + 'B526463540/', R + 'B531023663/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff; busy — counter seats come free faster than tables.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町1-5 幸成ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated December 2025–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町1番5号 (go) 8m; OSM node/6349557885 「四川食房 福龍」 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524350039/', R + 'B520249100/'],
    price_note: 'Prices from December 2025–March 2026 reviews.', last_checked: TODAY, items: [
      it('担々麺', 'tantanmen', 'Tantanmen', '', 'Noodles', 'no', 'no', 'March 2026.', 'tantanmen'),
      it('', '', 'Dry tantanmen', '', 'Noodles', 'no', 'no', 'April 2026.', 'shirunashi'),
      it('', '', 'Scallop fried rice', '¥1,000', 'Rice', 'no', 'no', 'December 2025–March 2026.', 'hotate_chahan'),
      it('', '', 'Seafood stir-fry (shrimp and squid, salt)', '¥1,800', 'Mains', 'ask', 'no', 'March 2026.', 'kaisen'),
      it('', '', 'Grilled gyoza', '¥500', 'Sides', 'no', 'no', 'March 2026.', 'gyoza'),
      it('麻婆豆腐', 'mābō dōfu', 'Mapo tofu', '', 'Mains', 'no', 'no', 'March 2026.', 'mapo'),
    ] }, {
    cuisine: '食べログ 中国料理 WEST 百名店2021・上品でマイルドな担々麺(汁あり、汁なし)・ホタテ炒飯1,000円(えび、かに、野菜も、どの品にも半炒飯を追加可)・麻婆豆腐・えびといかの海鮮塩炒め1,800円・餃子500円・油淋鶏・ねぎラーメン・20席',
    neighborhood: '宗右衛門町1-5 幸成ビル1F、長堀橋と日本橋の間',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、醤油ベースの四川のたれ。',
    vegan_detail: 'ヴィーガンではありません。担々麺や麻婆豆腐に豚肉、海鮮の炒飯。',
    notes: '[中華・宗右衛門町の上品な四川料理] 長いカウンターと奥のテーブルの20席の四川料理店で、食べログ 中国料理 WEST 百名店2021に選ばれ、少人数で営業。シェフはChen Kenminの弟子だという客も。一番人気の担々麺は汁ありも汁なしも上品で、思ったよりマイルドなので辛めに頼んでも。テレビでも紹介されたホタテ炒飯(1,000円)はしっとりなのにふんわりで、炒飯はえび、かに、野菜もあり、どの品にも半分の量で追加できます。えびといかの海鮮塩炒め(1,800円)に感動した客も。餃子、油淋鶏、締めのやさしいねぎラーメンも。夜6時から10時だけの営業で、いつも満席です。',
  });
}

// ================================================================ ぎゅっこ志 なんばラーメン一座店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27153750/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_gyukkoshi_edion_namba', name: 'ぎゅっこ志 なんばラーメン一座店 (Gyukkoshi)', category: 'OMNI',
    lat: 34.665311, lng: 135.501696, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; beef-bone curry.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth, roast beef, niboshi.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30) (Tabelog). QR payments only, no cards. Free extra noodles until 21:00 (limited-time offer, August–October 2026).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-2-18, EDION Namba Honten 9F (Namba Ramen Ichiza)',
    cuisine: 'Beef-bone ramen: creamy beef-bone white soup (special ¥1,000) and a clear beef-bone shoyu · golden niboshi beef-bone ramen ¥1,080 · roast-beef chashu · pea shoots, baby corn, red cabbage sprouts · black beef-bone curry with rice · summer chilled wagyu gozen ¥1,480 · free kaedama to 9 pm · 10 seats',
    website: 'https://namba-ramen-ichiza.com/', gmaps: gm('ぎゅっこ志 なんばラーメン一座'), menu_url: null,
    notes: "[Ramen · beef-bone ramen on EDION's ramen floor] A 10-seat beef-bone ramen shop on EDION Namba's 9th-floor ramen street, since December 2025, with a minotaur on display. The special beef-bone white soup (¥1,000, October 2026) is cloudy, creamy and robustly beefy without heaviness. It comes over slightly flat noodles with roast beef, pea shoots, baby corn and red cabbage sprouts. Regulars also rave about the clear beef broth, with noodles of just the right thickness and firmness. The golden niboshi version (¥1,080) layers sardine over beef. A black beef-bone curry comes with excellent white rice. Until 9 pm, extra noodles are free; one diner went five rounds. A voluble owner runs the kitchen.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 December 2025 (Tabelog)', background: 'A shop on the Namba Ramen Ichiza floor (namba-ramen-ichiza.com); no source names the operator.', philosophy: null, specialty: 'Beef-bone ramen.',
      anecdotes: [
        { text: '"Taking a sip of the cloudy broth, I immediately tasted the robust flavor of beef! It has a unique richness that sets it apart from pork or chicken broth—creamy yet not too heavy." — October 2026, special beef-bone white soup ¥1,000.', source: R + 'B536712261/' },
        { text: '"The noodles were slightly firm, which I personally enjoyed. I ordered extra noodles five times, and they happily accommodated me with a smile!" — August 2026.', source: R + 'B534613795/' },
      ],
      japanese_sources_summary: '食べログ: ぎゅっこ志 なんばラーメン一座店、大阪市中央区難波3-2-18 エディオンなんば本店9F、10席、毎日11:00〜22:00(L.O.21:30)、カード・電子マネー不可、QR決済可、禁煙(9階に喫煙室)、2025年12月24日開店、サイト namba-ramen-ichiza.com。2026年の口コミ(7〜10月): 黄金煮干し香る1,080円と味玉200円(メニューでは250円)、牛骨スープに煮干し、細ストレート麺、全体にやや薄め、ローストビーフのチャーシュー、夏限定の冷やし和牛御膳1,480円、澄んだスープにはまった、麺の太さと硬さがちょうどいい、21時まで替玉無料、黒牛骨カレーとご飯、牛骨白湯に味玉と大ライスで1,550円、ミノタウロスの飾り、店主の元気な声、特製濃厚牛骨白湯1,000円、濁ったスープで牛の旨み、クリーミーで重すぎない、やや平打ちの麺、豆苗・ヤングコーン・紫キャベツのスプラウト。',
      confidence: 'medium', sources: [TB, R + 'B536712261/', R + 'B534613795/', R + 'B519804503/', R + 'B531702180/', R + 'B535569992/'] },
    ramen: {
      broth_base: ['beef'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'flat', hydration: null, handmade: false, notes: 'Slightly flat noodles (white soup, October 2026); thin straight in the niboshi bowl; slightly firm; free kaedama to 9 pm.' },
      regional_style: [], sub_genre: ['ramen', 'niboshi'],
      signature_bowl: 'Special rich beef-bone white soup ¥1,000 (October 2026).',
      chashu: 'Roast beef as chashu (October 2026).',
      notable_toppings: ['roast beef', 'pea shoots', 'baby corn', 'red cabbage sprouts'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone broth.' },
      pantheon: 'The minotaur shop on EDION\'s ramen floor: a creamy, robustly beefy white soup or a clear beef shoyu, with roast-beef chashu and free refills till nine.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536712261/', '"The robust flavor of beef… creamy yet not too heavy."'],
        oiliness: [R + 'B536712261/', '"Creamy yet not too heavy" — placed low-mid.'],
        clarity: [R + 'B536712261/', '"The cloudy broth" (white soup); a clear version also exists (' + R + 'B531702180/).'],
        tare_strength: [R + 'B519804503/', 'Niboshi version "a bit on the lighter side"; tare settles to the bottom (' + R + 'B535569992/) — mid-scale.'],
        noodle_firmness: [R + 'B534613795/', '"The noodles were slightly firm."'],
        aroma_punch: [R + 'B519804503/', '"The rich flavor of the sardines really stood out in the beef bone broth."'],
      },
      confidence: 'medium', sources: [R + 'B536712261/', R + 'B534613795/', R + 'B519804503/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; refill notice on the wall (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-18 エディオンなんば本店 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番18号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536712261/', R + 'B519804503/', R + 'B535569992/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special rich beef-bone white soup ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'gyu_paitan'),
      it('', '', 'Golden niboshi beef-bone ramen', '¥1,080', 'Ramen', 'no', 'no', 'October 2026.', 'niboshi'),
      it('', '', 'Black beef-bone curry with rice', '', 'Rice', 'no', 'no', 'August 2026.', 'curry'),
      it('', '', 'Summer chilled wagyu gozen', '¥1,480', 'Seasonal', 'no', 'no', 'July 2026.', 'hiyashi_wagyu'),
      it('', '', 'Seasoned egg', '¥200', 'Toppings', 'gf', 'no', 'October 2026 (¥250 on the inside menu).', 'ajitama'),
    ] }, {
    cuisine: '牛骨ラーメン: クリーミーな牛骨白湯(特製1,000円)と澄んだ牛骨醤油・黄金煮干しの牛骨ラーメン1,080円・ローストビーフのチャーシュー・豆苗、ヤングコーン、紫キャベツのスプラウト・黒牛骨カレーとご飯・夏の冷やし和牛御膳1,480円・21時まで替玉無料・10席',
    neighborhood: '難波3-2-18 エディオンなんば本店9F(なんばラーメン一座)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、牛骨カレー。',
    vegan_detail: 'ヴィーガンではありません。牛骨スープ、ローストビーフ、煮干し。',
    notes: '[ラーメン・エディオンのラーメン街の牛骨ラーメン] エディオンなんば9階のラーメン街にある10席の牛骨ラーメンの店で、2025年12月から。ミノタウロスの飾りが目印。特製の牛骨白湯(1,000円、2026年10月)は濁ったクリーミーなスープで、重くないのに牛の旨みがしっかり。やや平打ちの麺にローストビーフ、豆苗、ヤングコーン、紫キャベツのスプラウト。太さも硬さもちょうどいい麺の澄んだ牛のスープに夢中という常連も。黄金煮干し(1,080円)は牛に煮干しを重ねた一杯。黒牛骨カレーはおいしい白ご飯と一緒に。21時までは替玉無料で、5回おかわりした客も。厨房には元気な店主。',
  });
}

save();
