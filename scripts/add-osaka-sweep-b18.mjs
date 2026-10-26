// Osaka sweep (2-mile circle around Dotonbori), batch 18 — ramen phase, nearest first (all OMNI).
//   + らーめん あじどの (Kansai-tuned Yokohama iekei on Sennichimae-dōri, to 5 am)
//   + 進辛正麺 (dry and soy-milk tantanmen, 20:00–6:00, 3F bar-like room)
//   + らーめん まぜそば あらし 東心斎橋店 (Nagoya-origin mazesoba; relocated 1 Oct 2026)
//   + どうとんぼり神座 心斎橋店 (50-seat Kamukura, nearly round the clock)
// Skipped: 27155357 and 27155760 (1 review each); 真鯛らーめん まるき 27097242 (newest review Nov 2024).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 18);

skip('27155357', 'One review only; too thin to describe.');
skip('27155760', 'One review only; too thin to describe.');
skip('27097242', 'Newest of the fetched reviews is November 2024 (owner changed January 2024); current operation unverified.');
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ らーめん あじどの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27059468/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '05:00']), we = day(['12:00', '05:00']);
  put({
    id: 'osaka_ramen_ajidono_sennichimae', name: 'らーめん あじどの (Ramen Ajidono)', category: 'OMNI',
    lat: 34.667321, lng: 135.504454, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles in a tonkotsu-shoyu broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Mon–Fri 17:00–5:00; Sat, Sun and holidays 12:00–5:00; L.O. 4:40 (Tabelog). Ticket machine outside. QR payments, no cards (Tabelog). Smoking allowed; ask for an ashtray at lunch (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-4-10, on Sennichimae-dōri in Namba',
    cuisine: 'Yokohama iekei leaning to Kansai taste · rich tonkotsu shoyu · very thick, curly noodles · choose firmness, richness and oil · nori and spinach · ramen ¥950, ajitama ramen ¥1,000 · table doubanjiang, garlic, sesame, vinegar · 9-seat counter, to 5 am',
    website: null, gmaps: gm('らーめん あじどの 千日前'), menu_url: null,
    notes: "[Ramen · Kansai-tuned iekei on Sennichimae-dōri] A 9-seat counter on Sennichimae-dōri, since 2011, serving a Yokohama iekei deliberately bent toward Osaka tastes. The rich tonkotsu-shoyu broth is salty yet smooth, and the very thick, curly noodles chew well. Order the firmness, richness and oil as you like. It comes with sturdy black nori and spinach, and a kick from the doubanjiang, garlic, sesame and vinegar on the counter. The ramen was ¥950 and the ajitama ramen ¥1,000 in 2026. Some say the broth and noodle portions run small. Weekdays it opens only for dinner, but it runs until 5 am. Buy a ticket at the small machine outside.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 August 2011 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Kansai-style iekei ramen.',
      anecdotes: [
        { text: '"This is a variant of the Yokohama-style ramen that intentionally leans towards the Kansai flavor. The rich tonkotsu soy sauce broth is complemented by thick, curly noodles that have a great chew." — September 2026, ajitama ramen ¥1,000.', source: R + 'B458411254/' },
        { text: '"I ordered the regular ramen for JPY 950, specifying a richer flavor, firmer noodles, and extra toppings… I found it to be salty yet smooth." — February 2026.', source: R + 'B523403573/' },
      ],
      japanese_sources_summary: '食べログ: らーめん あじどの、大阪市中央区千日前1-4-10、9席、月〜金17:00〜翌5:00、土日祝12:00〜翌5:00、L.O.4:40、カード・電子マネー不可、QR決済可、喫煙可(昼は頼めば灰皿)、2011年8月8日開店、食券制。口コミ(2022年12月〜2026年9月): 味玉ラーメン1,000円(麺かため・あっさり・麺少なめ)、関西寄りの横浜家系、濃厚な豚骨醤油、極太のちぢれ麺、店外の小さな券売機、ねぎラーメン、キレのある醤油、スープと麺の量が少なめ、ラーメン950円(濃いめ・かため・増し)、しょっぱいがなめらか、黒い海苔、卓上の豆板醤・酢・ごま・にんにく・胡椒・漬物、海苔とほうれん草、ややちぢれた麺、ビール。',
      confidence: 'medium', sources: [TB, R + 'B458411254/', R + 'B523403573/', R + 'B523872597/', R + 'B522958062/', R + 'B514759039/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: false, notes: 'Very thick, curly noodles; firmness chosen (2022–2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Ramen ¥950; ajitama ramen ¥1,000 (2026).',
      chashu: 'Chashu (not described in detail).',
      notable_toppings: ['nori', 'spinach', 'table doubanjiang', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Sennichimae-dōri\'s Osaka-tuned iekei: salty-smooth tonkotsu shoyu on very thick curly noodles, spinach and nori, open to 5 am.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B458411254/', '"The rich tonkotsu soy sauce broth."'],
        oiliness: [R + 'B458411254/', '"They pair perfectly with the rich and oily broth" (December 2022); oil level can be chosen.'],
        clarity: [R + 'B523872597/', 'Rich tonkotsu shoyu — opaque.'],
        tare_strength: [R + 'B522958062/', '"Showcasing a sharp soy sauce taste"; "salty yet smooth" (' + R + 'B523403573/).'],
        noodle_firmness: [R + 'B458411254/', '"Thick, curly noodles that have a great chew."'],
        aroma_punch: [R + 'B523403573/', 'Spicy doubanjiang and garlic on the counter — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B458411254/', R + 'B523403573/', R + 'B522958062/', R + 'B523872597/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; order firmness/richness/oil.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-4-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目4番10号 (go) 12m; OSM node/2312842173 「あじどの」 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B458411254/', R + 'B523403573/'],
    price_note: 'Prices from February and September 2026 reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Ramen (iekei)', '¥950', 'Ramen', 'no', 'no', 'February 2026.', 'ramen'),
      it('', '', 'Ajitama ramen', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Negi (green onion) ramen', '', 'Ramen', 'no', 'no', 'October 2025.', 'negi'),
    ] }, {
    cuisine: '関西寄りの横浜家系・濃厚な豚骨醤油・極太のちぢれ麺・硬さ、濃さ、油を選べる・海苔とほうれん草・ラーメン950円、味玉ラーメン1,000円・卓上の豆板醤、にんにく、ごま、酢・カウンター9席、朝5時まで',
    neighborhood: '千日前1-4-10、なんばの千日前通り沿い',
    gf_detail: 'グルテンフリーではありません。豚骨醤油スープに小麦の太麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・千日前通りの関西寄りの家系] 2011年から千日前通り沿いにある9席のカウンターで、横浜家系をあえて大阪の味に寄せた一杯。濃厚な豚骨醤油はしょっぱいのになめらかで、極太のちぢれ麺はしっかりした噛みごたえ。硬さ、濃さ、油はお好みで。しっかりした黒い海苔とほうれん草がのり、カウンターの豆板醤、にんにく、ごま、酢で味を変えて。2026年はラーメン950円、味玉ラーメン1,000円。スープと麺の量が少なめという声も。平日は夜だけですが朝5時まで。店外の小さな券売機で食券を。',
  });
}

// ================================================================ 進辛正麺
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27149178/'; const R = TB + 'dtlrvwlst/';
  const d = day(['20:00', '06:00']);
  put({
    id: 'osaka_shinshin_seimen_higashishinsaibashi', name: '進辛正麺 (Shinshin Seimen)', category: 'OMNI',
    lat: 34.671523, lng: 135.50307, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; dumplings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat miso topping, dumplings; soy-milk tantanmen is not described as plant-based.',
    hours_raw: 'Mon–Sat 20:00–6:00 (food L.O. 5:30); closed Sundays and holidays (Tabelog). No sign outside, 3F (September 2025). Cards, e-money and QR accepted. Designated smoking area (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: [] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-8-5, Nippo New Grand Bldg 3F — 5–6 min from Shinsaibashi Stn exit 5 or Nagahoribashi Stn',
    cuisine: 'Dry (soupless) tantanmen with chili oil and Sichuan pepper ¥1,100 · creamy soy-milk soup tantanmen ¥1,100, chili oil optional · niboshi vinegar and sansho to adjust · grilled xiaolongbao-style "gyo-bao" ¥700 · meat-miso mayo rice ¥450 · bar-like room, 8 pm–6 am',
    website: null, gmaps: gm('進辛正麺 東心斎橋'), menu_url: null,
    notes: "[Ramen · late-night tantanmen in a Higashi-Shinsaibashi bar room] A dim, bar-like 12-seat room on the 3rd floor of a building with no street sign, open 8 pm to 6 am. It specialises in tantanmen. The dry version, the original style, coats the noodles in a nutty sesame sauce with chili oil and numbing Sichuan pepper (¥1,100, 2025); adjust it with sansho and niboshi vinegar. The soy-milk soup version is creamy and gentle, with chili oil optional, for those who don't like heat. On the side: \"gyo-bao\", grilled dumplings that burst like xiaolongbao (4 for ¥700), and a meat-miso mayo rice bowl (¥450). One reviewer heard it is a popular tantanmen shop from the north of the city opening a southern branch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 April 2025 (Tabelog)', background: 'A September 2025 reviewer heard it is "a popular Dan Dan noodle shop from the north" opening in Minami; no source names it.', philosophy: null, specialty: 'Dry tantanmen.',
      anecdotes: [
        { text: '"The dry dan dan noodles are coated in a rich sauce with chili oil and Sichuan pepper, allowing for flavor variations with sansho and niboshi vinegar." — August 2025.', source: R + 'B512703220/' },
        { text: '"Soupy Soy Milk Dan Dan Noodles with Chili Oil - JPY 1100; Grilled Xiao Long Bao (4 pieces) - JPY 700… Meat Miso Mayo Rice Bowl - JPY 450." — August 2025.', source: R + 'B513419730/' },
      ],
      japanese_sources_summary: '食べログ: 進辛正麺、大阪市中央区東心斎橋2-8-5 日宝ニューグランドビル3F、12席(カウンター7、4人テーブル1)、月〜土20:00〜翌6:00(料理L.O.5:30)、日祝定休、分煙、カード・電子マネー・QR決済可、2025年4月25日開店。口コミ(2025年8〜9月): 汁なし担々麺、ラー油と花椒の特製だれ、肉味噌マヨ丼、バーのような薄暗い店内、山椒と煮干し酢で味変、焼き餃子、豆乳担々麺(マイルド)、焼き小籠包のような餃包(4個700円)、汁あり豆乳担々麺1,100円、汁なし担々麺1,100円、肉味噌マヨ丼450円、看板がなく見つけにくい、北の人気担々麺店が南に。',
      confidence: 'medium', sources: [TB, R + 'B512703220/', R + 'B513419730/', R + 'B513277438/', R + 'B512590524/', R + 'B514441562/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other'], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['tantanmen', 'shirunashi tantanmen'],
      signature_bowl: 'Dry tantanmen with chili oil ¥1,100; soy-milk soup tantanmen ¥1,100 (August 2025).',
      chashu: null,
      notable_toppings: ['meat miso', 'chili oil', 'Sichuan pepper', 'sansho', 'niboshi vinegar'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat miso.' },
      pantheon: 'Higashi-Shinsaibashi\'s 3rd-floor night owl: soupless tantanmen in nutty sesame, chili oil and Sichuan pepper, or a gentle soy-milk bowl.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B513277438/', '"The nutty sesame flavor combined with a perfect level of spiciness."'],
        oiliness: [R + 'B512703220/', 'Sauce "with chili oil" — placed high.'],
        clarity: [R + 'B513277438/', 'Soupless sesame sauce / creamy soy-milk soup — opaque.'],
        tare_strength: [R + 'B512703220/', '"Coated in a rich sauce."'],
        noodle_firmness: [R + 'B513277438/', '"The noodles and sauce blended beautifully" — firmness not described; mid-scale.'],
        aroma_punch: [R + 'B512590524/', '"The spiciness of chili oil and the numbing sensation of Sichuan pepper."'],
      },
      confidence: 'medium', sources: [R + 'B513277438/', R + 'B512703220/', R + 'B512590524/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Unsigned 3rd-floor room; late night only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-5 日宝ニューグランドビル 3F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current, but the fetched reviews date from August–September 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番5号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B513419730/'],
    price_note: 'Prices from an August 2025 review; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Dry tantanmen with chili oil', '¥1,100', 'Noodles', 'no', 'no', 'August 2025.', 'dry_tantan'),
      it('', '', 'Soy-milk soup tantanmen', '¥1,100', 'Noodles', 'no', 'no', 'August 2025.', 'soymilk_tantan'),
      it('', '', 'Grilled "gyo-bao" dumplings (4)', '¥700', 'Sides', 'no', 'no', 'August 2025.', 'gyobao'),
      it('', '', 'Meat-miso mayo rice bowl', '¥450', 'Rice', 'no', 'no', 'August 2025.', 'nikumiso_don'),
    ] }, {
    cuisine: 'ラー油と花椒の汁なし担々麺1,100円・クリーミーな豆乳の汁あり担々麺1,100円(ラー油は選べる)・煮干し酢と山椒で味変・焼き小籠包のような餃包700円・肉味噌マヨ丼450円・バーのような店、夜8時〜朝6時',
    neighborhood: '東心斎橋2-8-5 日宝ニューグランドビル3F。心斎橋駅5番出口・長堀橋駅から徒歩5〜6分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子。',
    vegan_detail: 'ヴィーガンではありません。肉味噌、餃子。豆乳担々麺も植物性とは書かれていません。',
    notes: '[ラーメン・東心斎橋のバーのような深夜の担々麺] 看板のないビルの3階にある、薄暗いバーのような12席の店で、夜8時から朝6時まで。担々麺が専門。汁なし(本来のスタイル)は香ばしいごまのたれにラー油としびれる花椒が麺に絡み(1,100円、2025年)、山椒や煮干し酢で味を変えて。豆乳の汁ありはクリーミーでやさしく、ラー油は選べるので辛いのが苦手な人にも。サイドは小籠包のようにはじける焼いた「餃包」(4個700円)と肉味噌マヨ丼(450円)。北の人気担々麺店が南に出したと聞いたという客も。',
  });
}

// ================================================================ らーめん まぜそば あらし 東心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27159733/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mazesoba_arashi_higashishinsaibashi', name: 'らーめん まぜそば あらし 東心斎橋店 (Ramen Mazesoba Arashi)', category: 'OMNI',
    lat: 34.671191, lng: 135.503438, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made whole-wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu, egg yolk, fish powder, shrimp-and-scallop oil.',
    hours_raw: 'Opened here 1 October 2026 after moving about 200 m west within Higashi-Shinsaibashi. Tabelog lists 12:00–7:00 (L.O. 6:30), while an October 2026 review gives 12:00–19:00 (L.O. 18:30), open daily. Payment conflict too: Tabelog lists cards and QR, but two October reviewers found it cash only. Order by QR code at the table.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-5-16 — near Nagahoribashi Stn',
    cuisine: 'Signature mazesoba ¥1,200 (shrimp-and-scallop chicken-oil salt sauce, egg yolk, cubed chashu, fish powder, nori) · Taiwan mazesoba, curry Taiwan, salt Taiwan ¥1,200 · thick wavy whole-wheat noodles from 100 g to 400 g · kombu vinegar and shichimi · 2 floors',
    website: null, gmaps: gm('らーめん まぜそば あらし 東心斎橋店'), menu_url: null,
    notes: "[Ramen · Nagoya-style mazesoba in Higashi-Shinsaibashi] Arashi's mazesoba shop reopened on 1 October 2026 about 200 m west of its old spot, now on two floors. Reviewers who knew it in Nagoya were glad to find it. The signature mazesoba (¥1,200 for 200 g, a 100 g small for ¥1,000) dresses thick, wavy, house-made whole-wheat noodles in a light salt sauce of chicken oil infused with dried shrimp and scallop. On top go an egg yolk, cubed roast chashu, mizuna, green onion, fish powder and nori, with a punch of garlic and chili. Taiwan mazesoba comes in curry and salt versions too. Mix from the bottom, then add kombu vinegar or shichimi. Ordering is by QR code. In the first weeks, staff were still finding their feet and payment was cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Relocated within Higashi-Shinsaibashi, opening 1 October 2026 (Tabelog; reviews)', background: 'Instagram @n.arashi0803 (October 2026 review); two reviewers knew "Menya Arashi" from Nagoya. Noodles made in-house with whole-wheat flour under the supervision of Hayashi Seimenjo (October 2026 review).', philosophy: null, specialty: 'Mazesoba and Taiwan mazesoba.',
      anecdotes: [
        { text: '"The sauce, made with chicken oil infused with shrimp and scallops, combined with salt, clings well to the whole wheat noodles, creating a rich flavor enhanced by the creaminess of the egg yolk." — October 2026, small 100 g ¥1,000.', source: R + 'B536589890/' },
        { text: '"I used to frequently visit \'Menya Arashi\' when I lived in Nagoya, so I was nostalgic to find it had reopened in Higashi-Shinsaibashi… it turned out they only accepted cash." — October 2026.', source: R + 'B537048662/' },
      ],
      japanese_sources_summary: '食べログ: らーめん まぜそば あらし 東心斎橋店、大阪市中央区東心斎橋2-5-16、毎日12:00〜翌7:00(L.O.6:30)と記載、禁煙、カード・QR決済可と記載、2026年10月1日開店。2026年10月の口コミ: 東心斎橋で約180〜200m西に移転、看板まぜそば小100g(油+塩だれ1,000円)、200g1,200円、4.25mmの太い平打ちちぢれ麺、角煮チャーシュー・ねぎ・水菜・卵黄・魚粉・刻み海苔、海老とホタテの香りの鶏油と塩、Hayashi Seimenjo監修の全粒粉の自家製麺、台湾まぜそば・カレー台湾・塩台湾各1,200円、トッピング(角切りチャーシュー400円、味玉150円、卵黄100円など)、大300g+100円・特400g+200円・小100g−200円、名古屋のMenya Arashi、QRコードで注文、開店直後で手際が悪い、2階席、営業時間12:00〜19:00(L.O.18:30)という記載、現金のみ、卓上の七味と昆布酢、Instagram @n.arashi0803。',
      confidence: 'medium', sources: [TB, R + 'B536589890/', R + 'B536671829/', R + 'B537048662/', R + 'B536824986/', R + 'B536897401/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shio'], aroma_oil: ['chicken oil'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: true, notes: 'Thick, flat-wavy 4.25 mm whole-wheat noodles made in-house (October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Signature mazesoba ¥1,200 (200 g); Taiwan mazesoba ¥1,200 (October 2026).',
      chashu: 'Cubed, roasted braised-pork chashu (October 2026).',
      notable_toppings: ['egg yolk', 'fish powder', 'shredded nori', 'mizuna', 'green onion', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu, egg, fish powder.' },
      pantheon: 'Nagoya\'s mazesoba lands in Higashi-Shinsaibashi: thick whole-wheat noodles in a shrimp-and-scallop chicken-oil salt sauce, egg yolk and fish powder, mixed hard.',
      profile: { richness: 4, oiliness: 4, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536589890/', '"A rich flavor enhanced by the creaminess of the egg yolk."'],
        oiliness: [R + 'B536589890/', 'A sauce "made with chicken oil infused with shrimp and scallops".'],
        clarity: [R + 'B536671829/', 'Soupless mazesoba — clarity does not apply; neutral mid-scale (inferred).'],
        tare_strength: [R + 'B536671829/', '"A low-viscosity salt sauce… well-balanced saltiness."'],
        noodle_firmness: [R + 'B536671829/', '"Providing a chewy texture with just the right amount of firmness."'],
        aroma_punch: [R + 'B536671829/', '"A punchy garlic flavor"; fish powder and nori give "a punch right from the first bite" (' + R + 'B536897401/).'],
      },
      confidence: 'medium', sources: [R + 'B536589890/', R + 'B536671829/', R + 'B536897401/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering at the table; cash payment (October 2026).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews from October 2026 (reopened 1 October 2026).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番16号 (go) 4m (OSM node 13375802569 "Arashi" 127m away is likely the pre-move site); ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [R + 'B536671829/'],
    price_note: 'Full price list from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Signature mazesoba (200 g)', '¥1,200', 'Mazesoba', 'no', 'no', 'October 2026; small 100 g −¥200, large 300 g +¥100, special 400 g +¥200.', 'signature'),
      it('', '', 'Taiwan mazesoba', '¥1,200', 'Mazesoba', 'no', 'no', 'October 2026.', 'taiwan'),
      it('', '', 'Curry Taiwan mazesoba', '¥1,200', 'Mazesoba', 'no', 'no', 'October 2026.', 'curry_taiwan'),
      it('', '', 'Salt Taiwan mazesoba', '¥1,200', 'Mazesoba', 'no', 'no', 'October 2026.', 'shio_taiwan'),
      it('', '', 'Cubed chashu topping', '¥400', 'Toppings', 'no', 'no', 'October 2026.', 'kaku_chashu'),
      it('', '', 'Seasoned egg', '¥150', 'Toppings', 'gf', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '看板まぜそば1,200円(海老とホタテの鶏油の塩だれ、卵黄、角切りチャーシュー、魚粉、海苔)・台湾まぜそば、カレー台湾、塩台湾1,200円・全粒粉の太い平打ちちぢれ麺100〜400g・昆布酢と七味・2フロア',
    neighborhood: '東心斎橋2-5-16、長堀橋駅近く',
    gf_detail: 'グルテンフリーではありません。全粒粉の自家製麺。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、卵黄、魚粉、海老とホタテの油。',
    notes: '[ラーメン・東心斎橋の名古屋発のまぜそば] あらしのまぜそばの店が2026年10月1日、もとの場所から約200m西に2フロアで再オープン。名古屋で通っていた客も懐かしがっています。看板まぜそば(200gで1,200円、小100gは1,000円)は、全粒粉の自家製の太い平打ちちぢれ麺に、干し海老とホタテの香りの鶏油の軽い塩だれ。卵黄、香ばしい角切りチャーシュー、水菜、ねぎ、魚粉、海苔をのせ、にんにくと唐辛子がガツン。台湾まぜそばはカレーや塩も。底からよく混ぜ、昆布酢や七味で味変を。注文はQRコード。開店直後はスタッフが不慣れで、支払いは現金のみでした。',
  });
}

// ================================================================ どうとんぼり神座 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001560/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kamukura_shinsaibashi', name: 'どうとんぼり神座 心斎橋店 (Dotonbori Kamukura Shinsaibashi)', category: 'OMNI',
    lat: 34.671888, lng: 135.500912, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, chashu.',
    hours_raw: 'Daily 0:00–6:30 and 10:00–24:00 (Tabelog). Ticket machine; cards and e-money accepted.',
    hours: ALL(day(['00:00', '06:30'], ['10:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-8-26, on the Shinsaibashi side of Minami',
    cuisine: 'Kamukura\'s light napa-cabbage "delicious ramen" · ajitama ramen ¥980 · summer cold ramen with yuzu juice · small chashu topping · 50 counter seats · open all but 6:30–10 am',
    website: 'https://kamukura.co.jp/', gmaps: gm('どうとんぼり神座 心斎橋店'), menu_url: null,
    notes: "[Ramen · a 50-seat Kamukura in Shinsaibashi] A long counter-only Kamukura on the Shinsaibashi side of Minami, open from 10 am to 6:30 am the next morning. It serves the chain's gentle, napa-cabbage-sweet broth that \"felt like a warm hug\" to one first-timer. The ajitama ramen was ¥980 in August 2026. Summer brings a cold version, slightly salty to stand up to the ice and served with yuzu juice to change the flavour, which regulars recommend on the hottest days. A dependable post-drinks stop, busy late at night.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashi branch (Tabelog listing name)', background: 'Kamukura chain (kamukura.co.jp).', philosophy: null, specialty: 'Napa-cabbage ramen.',
      anecdotes: [
        { text: '"The generous amount of napa cabbage was quite impressive. Taking a sip of the broth, I was greeted by the gentle sweetness of the cabbage." — August 2026, ajitama ramen ¥980.', source: R + 'B534963919/' },
        { text: '"When chilled, the animal fats solidify, but it felt like they handled it well… It also comes with yuzu juice, which is perfect for changing up the flavor." — August 2026, cold ramen.', source: R + 'B534278450/' },
      ],
      japanese_sources_summary: '食べログ: どうとんぼり神座 心斎橋店、大阪市中央区心斎橋筋2-8-26、50席(カウンターのみ)、毎日0:00〜6:30・10:00〜24:00、禁煙、カード・電子マネー可(交通系IC、楽天Edy、iD)、食券制、公式 kamukura.co.jp。2026年の口コミ(7〜9月): 冷やしおいしいラーメン(少ししょっぱいが氷で薄まらないため)、小チャーシュー、野菜たっぷり、15年ぶり、味付け玉子ラーメン980円、白菜の甘み、あっさりで温かい、冷やしは脂が固まらないよう工夫、柚子果汁付き、深夜でもほぼ満席。',
      confidence: 'medium', sources: [TB, R + 'B534963919/', R + 'B534278450/', R + 'B489329636/', R + 'B533223819/', R + 'B535242536/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ajitama ramen ¥980 (August 2026); summer cold ramen with yuzu juice.',
      chashu: 'Small chashu topping (July 2026).',
      notable_toppings: ['napa cabbage', 'seasoned egg', 'yuzu juice (cold ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'House broth with pork.' },
      pantheon: 'The all-but-dawn Kamukura in Shinsaibashi: a warm-hug cabbage broth, or the summer cold bowl brightened with yuzu.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534963919/', '"The light broth paired well with the noodles."'],
        oiliness: [R + 'B534963919/', 'Light broth — placed low (inferred).'],
        clarity: [R + 'B534963919/', 'Not described as clear or cloudy — mid-scale (inferred).'],
        tare_strength: [R + 'B489329636/', 'Cold version: "the broth might be a bit salty."'],
        noodle_firmness: [R + 'B533223819/', 'Noodles not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B534963919/', '"The gentle sweetness of the cabbage" — placed low.'],
      },
      confidence: 'low', sources: [R + 'B534963919/', R + 'B489329636/', R + 'B533223819/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-8-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目8番26号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534963919/', R + 'B534278450/'],
    price_note: 'One price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Delicious ramen" with napa cabbage', '', 'Ramen', 'no', 'no', 'July–August 2026.', 'oishii'),
      it('', '', 'Ajitama ramen', '¥980', 'Ramen', 'no', 'no', 'August 2026.', 'ajitama'),
      it('', '', 'Cold "delicious ramen" with yuzu juice (summer)', '', 'Seasonal', 'no', 'no', 'July–August 2026.', 'hiyashi'),
    ] }, {
    cuisine: '神座のあっさりした白菜の「おいしいラーメン」・味付け玉子ラーメン980円・夏の柚子果汁付き冷やしラーメン・小チャーシュー・カウンター50席・朝6時半〜10時以外は営業',
    neighborhood: '心斎橋筋2-8-26、ミナミの心斎橋側',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、チャーシュー。',
    notes: '[ラーメン・心斎橋の50席の神座] ミナミの心斎橋側にあるカウンターだけの長い神座で、朝10時から翌朝6時半まで。チェーンおなじみの白菜の甘みのやさしいスープで、初めての客には「温かいハグのよう」。味付け玉子ラーメンは2026年8月で980円。夏は氷で薄まらないよう少ししょっぱめの冷やしが登場し、柚子果汁で味を変えられ、暑い日には常連のおすすめ。深夜も混む、飲んだ後の頼れる一軒。',
  });
}

save();
