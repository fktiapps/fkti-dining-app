// Osaka sweep (2-mile circle around Dotonbori), batch 54 — ramen phase, nearest first (all OMNI).
//   + 日本橋 さか一 (Tabelog 3.64 six-seat morning-ramen counter, shoyu plus SNS-limited seafood bowls → mom_and_pop)
//   + 家系ラーメン 那須家 (iekei by Kuromon, opened summer 2026)
//   + 麺屋 のスたOSAKA 難波千日前店 (Jiro-style "staff meal" ramen since 2011)
//   + 中華そば なんば楼 (clear tonkotsu chuka soba, chan-kei style, by Nankai Namba)
// Skip: 縁の道 27158120 (one review).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 54);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27158120', '縁の道: one Tabelog review; not enough to verify');

// ================================================================ 日本橋 さか一
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27131870/'; const R = TB + 'dtlrvwlst/';
  const W = day(['09:30', '14:00']), E = day(['07:00', '13:30']);
  put({
    id: 'osaka_nipponbashi_sakaichi', name: '日本橋 さか一 (Nipponbashi Sakaichi)', category: 'OMNI',
    lat: 34.670745, lng: 135.508088, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and seafood broth, pork and chicken chashu.',
    hours_raw: 'Mon, Wed and Fri 9:30–14:00; Sat, Sun and holidays 7:00–13:30 (continuous); closed Tuesday and Thursday (open on holidays), plus irregular closures announced on X and Instagram (Tabelog). Ticket machine inside; it does not take ¥5,000 or ¥10,000 notes (Tabelog). Cash only. No reservations.',
    hours: { 0: W, 2: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimanouchi 2-11-3 — about 5 min from Nippombashi or Nagahoribashi Stn exit 6',
    cuisine: 'Morning ramen · shoyu ramen from a chicken and seafood broth · Shoyu Special ¥1,600 with pork shoulder, pork belly, chicken thigh and chicken breast chashu · ajitama shoyu · whole-wheat flat medium-thick noodles from Menya Teikaku · rotating SNS-limited bowls: rich or light niboshi soba ¥1,200 (70% Himi niboshi), a niboshi-scallop shio with fresh aonori ¥1,400, crab-and-scallop shio ¥1,600, tachiuo kamatama tsukemen ¥1,600, XO mazesoba · finishing rice ¥100 · no table condiments · 6 counter seats',
    website: null, gmaps: gm('日本橋 さか一 島之内'), menu_url: null,
    notes: "[Ramen · a six-seat morning-ramen counter in Shimanouchi] A six-seat counter in Shimanouchi, rated 3.64 on Tabelog, open since 2022 and run by the owner with one helper. It opens at 7 am on weekends, and lines can form outside by 8. The regular menu is shoyu: a chicken and seafood broth that's easy to drink to the last drop, chewy flat whole-wheat noodles from Menya Teikaku, and in the Shoyu Special (¥1,600) four kinds of chashu, from low-temperature chicken breast to hanging-roasted pork belly. The fun is the rotating bowls announced on social media. Recent ones included a cement-gray niboshi soba from Himi sardines that is clean, with no bitterness, a clear niboshi-and-scallop shio, a thick crab-and-scallop shio, and a tachiuo tsukemen with a raw-egg kamatama dip. Finish with a ¥100 bowl of rice in the leftover soup. There are no table condiments. Cash only, and bring small notes for the machine. One first-timer singled out the owner's service. Check X or Instagram for closures.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 September 2022 (Tabelog)', background: 'Owner-run six-seat counter with one helper (October 2026 reviews); whole-wheat noodles from Menya Teikaku (September 2026 review).', philosophy: 'A rotating line of limited bowls announced on social media (October 2026 reviews).', specialty: 'Shoyu ramen; limited seafood and niboshi bowls.',
      anecdotes: [
        { text: '"The cement-colored soup has a gentle, clear niboshi taste without any off-flavors, perfectly balanced saltiness, and a refreshing aftertaste." — October 2026, limited rich niboshi soba ¥1,200.', source: R + 'B519593781/' },
        { text: '"The broth, made from chicken and seafood, was flavorful and easy to drink to the last drop. And there was a generous serving of various chashu: pork shoulder, pork belly, chicken thigh, and chicken breast." — September 2026, Shoyu Special ¥1,600.', source: R + 'B536536308/' },
      ],
      japanese_sources_summary: '食べログ: 日本橋 さか一、大阪市中央区島之内2-11-3、日本橋駅・長堀橋駅6番出口から徒歩5分、月・水・金9:30〜14:00、土・日・祝7:00〜13:30(通し)、火・木休み(祝日は営業)+不定休(XとInstagramで告知)、券売機は5千円札・1万円札不可、カード・電子マネー・QR不可、6席(カウンターのみ)、2022年9月20日開店、食べログ3.64。口コミ(2026年9〜10月): 週末の朝ラー、SNS限定(Tachiuoの白湯つけ麺(生卵を絡める麺)1,600円、蟹と帆立の塩1,600円と蟹味噌250円、濃厚煮干しそば1,200円、Himi煮干し7割、煮干しと帆立の塩に生青のり1,400円、XOまぜそば)、セメント色のスープ、えぐみのない煮干し、締めのご飯100円、メインは特製醤油、醤油特製1,600円、味玉醤油、醤油、Menya Teikakuの全粒粉の中太平打ち麺、豚肩、豚バラ、鶏もも、鶏むねのチャーシュー、低温調理の鶏むねと吊るし焼きの豚バラ、鶏と魚介のスープ、卓上調味料なし、店主とスタッフの2人、店主の接客がいいという声、朝8時に外に列。',
      confidence: 'medium', sources: [TB, R + 'B519593781/', R + 'B536536308/', R + 'B517045020/', R + 'B454324211/', R + 'B534654038/', R + 'B537897260/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Whole-wheat flat medium-thick noodles from Menya Teikaku (September 2026); medium-thick straight on the niboshi bowls (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi', 'tsukemen'],
      signature_bowl: 'Shoyu Special, ¥1,600 (September 2026); SNS-limited niboshi and seafood bowls.',
      chashu: 'Pork shoulder, pork belly, chicken thigh and low-temperature chicken breast (September–October 2026).',
      notable_toppings: ['four chashu', 'early red onion', 'fresh aonori (limited)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth.' },
      pantheon: 'Shimanouchi\'s morning counter: a clean chicken-and-seafood shoyu with four chashu, and a rotating cast of niboshi and seafood specials.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536536308/', '"Flavorful and easy to drink to the last drop" — mid-scale.'],
        oiliness: [R + 'B519593781/', '"Slightly low in oil" (limited seafood shio) — placed low.'],
        clarity: [R + 'B519593781/', '"A clear seafood broth… the transparent broth" (limited shio).'],
        tare_strength: [R + 'B519593781/', '"Perfectly balanced saltiness" — mid-scale.'],
        noodle_firmness: [R + 'B536536308/', '"The medium-thick, flat noodles were chewy."'],
        aroma_punch: [R + 'B534654038/', '"The broth was light and fragrant" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536536308/', R + 'B519593781/', R + 'B534654038/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash and small notes only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区島之内2-11-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained, with October 2026 schedule notes); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内二丁目11番3号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536536308/', R + 'B519593781/', R + 'B517045020/', R + 'B454324211/'],
    price_note: 'Prices from September–October 2026 reviews; limited bowls change often.', last_checked: TODAY, items: [
      it('', '', 'Shoyu Special', '¥1,600', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu_tokusei'),
      it('', '', 'Ajitama shoyu', '', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Rich niboshi soba (SNS limited)', '¥1,200', 'Limited', 'no', 'no', 'October 2026.', 'noko_niboshi'),
      it('', '', 'Crab-and-scallop shio (limited)', '¥1,600', 'Limited', 'no', 'no', 'September 2026; crab miso +¥250.', 'kani'),
      it('', '', 'Tachiuo kamatama tsukemen (limited)', '¥1,600', 'Limited', 'no', 'no', 'October 2026.', 'tachiuo'),
      it('', '', 'Finishing rice', '¥100', 'Rice', 'ask', 'ask', 'October 2026.', 'shime'),
    ] }, {
    cuisine: '朝ラー・鶏と魚介のスープの醤油ラーメン・豚肩、豚バラ、鶏もも、鶏むねのチャーシューの醤油特製1,600円・味玉醤油・Menya Teikakuの全粒粉の中太平打ち麺・入れ替わるSNS限定(Himi煮干し7割の濃厚・淡麗煮干しそば1,200円、生青のりの煮干しと帆立の塩1,400円、蟹と帆立の塩1,600円、Tachiuoの白湯つけ麺(生卵を絡める麺)1,600円、XOまぜそば)・締めのご飯100円・卓上調味料なし・カウンター6席',
    neighborhood: '島之内2-11-3。日本橋駅・長堀橋駅6番出口から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。全粒粉の小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚介のスープ、豚と鶏のチャーシュー。',
    notes: '[ラーメン・島之内の6席の朝ラーのカウンター] 島之内にあるカウンター6席の店で、食べログ3.64、2022年開店、店主とスタッフの2人で切り盛り。週末は朝7時から開き、8時には外に列ができることも。定番は醤油で、最後まで飲み干せる鶏と魚介のスープ、Menya Teikakuのもちっとした全粒粉の平打ち麺。醤油特製(1,600円)には低温調理の鶏むねから吊るし焼きの豚バラまで4種のチャーシュー。楽しみはSNSで告知される限定で、最近はHimi煮干しのえぐみのないセメント色の煮干しそば、澄んだ煮干しと帆立の塩、とろりとした蟹と帆立の塩、生卵を絡めた麺で食べるTachiuoのつけ麺など。締めは残ったスープに100円のご飯を。卓上調味料はありません。現金のみで、券売機用に小さいお札を。店主の接客がいいという初訪問の人も。休みはXやInstagramで確認を。',
  });
}

// ================================================================ 家系ラーメン 那須家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27153926/'; const R = TB + 'dtlrvwlst/';
  const M = day(['10:45', '15:00'], ['18:00', '21:30']), D = day(['10:45', '15:00'], ['18:00', '22:30']);
  put({
    id: 'osaka_iekei_nasuya_nipponbashi', name: '家系ラーメン 那須家 (NASUYA)', category: 'OMNI',
    lat: 34.665242, lng: 135.506723, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chicken oil, chashu.',
    hours_raw: 'Mon 10:45–15:00 and 18:00–21:30; Tue–Sun 10:45–15:00 and 18:00–22:30 (last orders 10 minutes before close); open year-round; hours may change (Tabelog). Ticket machine. No reservations. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: M, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nippombashi 2-3-18 — a quiet corner of Kuromon Market, about 3 min from Kintetsu Nippombashi exit 9',
    cuisine: 'Iekei ramen, opened summer 2026 · pork-bone shoyu broth with chicken oil, firmness, richness and oil to order · regular ¥900, large ¥1,100 · ajitama ¥150 · extra chashu ¥400 · spinach ¥200 · rice (small ¥100) · noodles from Suzuki Seimen · counter seats',
    website: null, gmaps: gm('家系ラーメン 那須家 日本橋'), menu_url: null,
    notes: "[Ramen · a new iekei shop by Kuromon] An iekei ramen counter in a quieter part of Kuromon Market, opened in summer 2026 by an owner who trained in the Kanto region; one reviewer says at Men Master Takenaka in Tokyo. The broth is made in-house and the noodles come from Suzuki Seimen. Reviewers split on the broth: one found it bold, salty and deeply colored, others say the salt is toned down so it's easier to drink than most iekei. Either way, set firmness, richness and chicken oil to taste. The noodles are firmer and more wheaty than usual, so one diner suggests ordering them softer. Prices are fair for the market: regular ¥900, large ¥1,100, with ajitama ¥150, extra chashu ¥400 and spinach ¥200 (September–October 2026). The moist, lightly roasted chashu stands out. Get rice and wrap it in nori. The owner works fast and keeps the energy up. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened summer 2026 (September 2026 review)', background: 'Owner trained in the Kanto region (September 2026 review); one reviewer names Men Master Takenaka in Tokyo (August 2026). Noodles from Suzuki Seimen; broth made in-house (August 2026 review).', philosophy: null, specialty: 'Iekei ramen.',
      anecdotes: [
        { text: '"The noodles have a stronger wheat flavor and a firmer texture compared to other Iekei ramen… The broth is gentle with a mild meaty flavor, and the soy sauce aroma and saltiness are also quite subtle." — August 2026.', source: R + 'B534476116/' },
        { text: '"In a market filled with tourist-priced restaurants, I was relieved to find reasonable prices here." — September 2026, ramen ¥900 + ajitama ¥150 + small rice ¥100.', source: R + 'B535034805/' },
      ],
      japanese_sources_summary: '食べログ: 家系ラーメン 那須家、大阪市中央区日本橋2-3-18、近鉄日本橋駅9番出口から徒歩約3分、月10:45〜15:00・18:00〜21:30、火〜日10:45〜15:00・18:00〜22:30(L.O.は10分前)、年中無休、予約不可、カード・電子マネー・QR不可、禁煙、カウンター席。口コミ(2026年8〜10月): 都内のMen Master Takenakaで修業した店主という声、Suzuki Seimenの麺、自家製スープ、小麦の風味が強く硬めの麺、やさしいスープで醤油も塩気も控えめ、関東で修業した店主が2026年夏に開店、券売機、ラーメン並900円・味玉150円・小ライス100円、観光地価格の市場で良心的、濃い色のスープ、少し脂と苦み、塩気がしっかり、チャーシュー2枚、しっとりで炙りの香り、短めのもちっとした中太麺、ほうれん草、大盛り1,100円・チャーシュー400円・ほうれん草200円、硬め・濃いめ・鶏油多め、元気な店主、ライス200円は高めという声、海苔でご飯を巻く、黒門市場の静かなエリア、清潔な店内、塩気を抑えて意外とあっさり。',
      confidence: 'medium', sources: [TB, R + 'B534476116/', R + 'B535034805/', R + 'B536724687/', R + 'B536911467/', R + 'B538063929/', R + 'B535519854/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Short, chewy medium-thick noodles from Suzuki Seimen, firmer and more wheaty than typical iekei (August–September 2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Ramen, regular ¥900 (September 2026).',
      chashu: 'Moist with a light roasted flavor; different cuts (September–October 2026).',
      notable_toppings: ['spinach', 'nori', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth; chicken oil.' },
      pantheon: 'Kuromon\'s new iekei: a house-made pork-bone shoyu with chicken oil and wheaty Suzuki Seimen noodles at market-friendly prices.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535034805/', '"Even with the normal settings, it\'s still quite rich."'],
        oiliness: [R + 'B535034805/', '"A smooth texture with a bit of fat" — mid-scale.'],
        clarity: [R + 'B538063929/', '"The rich, thick broth typical of Iekei style."'],
        tare_strength: [R + 'B538063929/', 'Saltiness "toned down a bit"; another found it "a bold soup" (B535034805) — mid-scale.'],
        noodle_firmness: [R + 'B534476116/', '"A stronger wheat flavor and a firmer texture compared to other Iekei ramen."'],
        aroma_punch: [R + 'B534476116/', '"The soy sauce aroma… quite subtle"; "a bitter note" (B535034805) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534476116/', R + 'B535034805/', R + 'B538063929/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; customization called out at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-3-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; opened summer 2026; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目3番18号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535034805/', R + 'B536724687/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen (regular)', '¥900', 'Ramen', 'no', 'no', 'September 2026.', 'nami'),
      it('', '', 'Ramen (large)', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'oomori'),
      it('', '', 'Ajitama', '¥150', 'Toppings', 'ask', 'no', 'September–October 2026.', 'ajitama'),
      it('', '', 'Extra chashu', '¥400', 'Toppings', 'ask', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Spinach', '¥200', 'Toppings', 'ask', 'ask', 'October 2026.', 'spinach'),
      it('', '', 'Small rice', '¥100', 'Rice', 'ask', 'ask', 'September 2026.', 'rice_s'),
    ] }, {
    cuisine: '2026年夏開店の家系ラーメン・鶏油の豚骨醤油、硬さ・濃さ・油を選べる・並900円、大盛り1,100円・味玉150円・チャーシュー増し400円・ほうれん草200円・ライス(小100円)・Suzuki Seimenの麺・カウンター席',
    neighborhood: '日本橋2-3-18。黒門市場の静かな一角、近鉄日本橋駅9番出口から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、鶏油、チャーシュー。',
    notes: '[ラーメン・黒門の新しい家系] 黒門市場の静かなエリアにある家系ラーメンのカウンターで、関東で修業した店主が2026年夏に開店。修業先は都内のMen Master Takenakaという口コミも。スープは自家製で、麺はSuzuki Seimen。スープの評価は分かれ、色が濃く塩気のしっかりした力強い味という人もいれば、塩気を抑えていて家系の中では飲みやすいという人も。いずれにしても硬さ、濃さ、鶏油はお好みで。麺はふつうの家系より硬めで小麦の風味が強いので、やわらかめを頼むのもいいという声。市場の中では値段も良心的で、並900円、大盛り1,100円、味玉150円、チャーシュー増し400円、ほうれん草200円(2026年9〜10月)。しっとりして炙りの香るチャーシューが光ります。ライスを頼んで海苔で巻いて。店主は手際よく元気。現金のみ。',
  });
}

// ================================================================ 麺屋 のスたOSAKA 難波千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27059770/'; const R = TB + 'dtlrvwlst/';
  const M = day(['11:00', '15:00'], ['18:00', '22:00']), D = day(['11:00', '22:00']);
  put({
    id: 'osaka_menya_nosuta_namba_sennichimae', name: '麺屋 のスたOSAKA 難波千日前店 (Menya Nosuta OSAKA Namba Sennichimae)', category: 'OMNI',
    lat: 34.663708, lng: 135.504019, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; shoyu, shio or miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, back fat, chashu.',
    hours_raw: 'Mon 11:00–15:00 and 18:00–22:00; Tue–Sun and holidays 11:00–22:00; occasional breaks or temporary closures posted on the shop\'s X account (Tabelog). Ticket machine. Lines of about ten at busy times (October 2026). No reservations. Cards, e-money and QR accepted; no cover charge.',
    hours: { 0: M, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambasennichimae 8-5 — a short walk from NGK, about 5 min from Nankai Namba Stn',
    cuisine: 'Jiro-style "staff meal" (makanai) ramen since 2011 · shoyu ¥950, shio ¥980, or miso · 400 g of thick noodles even in a regular · bean sprouts, back fat and thick chashu, garlic to order · ladies\' size · Asahi Ponzu ramen · daily-limited rich tsukemen with ponzu tang · green chili ¥120, ajitama ¥120 · vinegar and Tabasco on the counter · 18 counter seats',
    website: null, gmaps: gm('麺屋 のスた 難波千日前'), menu_url: null,
    notes: "[Ramen · Jiro-style staff-meal ramen near NGK] A Jiro-style shop a short walk from NGK, open since 2011, with 18 counter seats and a line of about ten at busy times. The menu is built on the \"staff meal\": a rich pork-bone broth in shoyu, shio or miso, 400 g of thick, chewy noodles even in a regular, a heap of bean sprouts, generous back fat and two thick slices of chashu. Garlic is your call; the vegetables and fat are fixed. The shoyu staff meal is ¥950 and the shio ¥980 (October 2026). There's a ladies' size, the oil can be halved, and there's a ponzu ramen made with Asahi Ponzu, and a daily-limited rich tsukemen with a ponzu tang. Fans add Tabasco or vinegar near the end to cut the richness. One longtime visitor was underwhelmed. Buy a ticket at the machine.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 August 2011 (Tabelog)', background: 'Jiro-style ramen shop (October 2026 review).', philosophy: null, specialty: 'Staff-meal (makanai) ramen.',
      anecdotes: [
        { text: '"Here, even the regular size comes with 400g of noodles, which is 2.5 times the amount you\'d find at a typical ramen shop… Despite the generous amount of back fat, it\'s surprisingly easy to eat." — October 2026, staff meal shoyu ¥950.', source: R + 'B537647248/' },
        { text: '"The dipping sauce has a salty flavor with a refreshing hint of ponzu acidity that goes down smoothly." — October 2026, daily-limited rich tsukemen.', source: R + 'B535408443/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 のスたOSAKA 難波千日前店、大阪市中央区難波千日前8-5、南海なんば駅から徒歩5分、月11:00〜15:00・18:00〜22:00、火〜日・祝11:00〜22:00、中休みや臨時休業は公式Xで告知、予約不可、食券制、カード・電子マネー・QR可、チャージなし、18席(カウンターのみ)、2011年8月24日開店。口コミ(2026年6〜10月): まかないの塩980円に青唐120円と味玉120円、豚骨ベースでキレのある塩気、もちもちの太麺、にんにくは選べるが野菜と脂は固定、醤油・塩・味噌から、もやしの山、厚くやわらかいチャーシュー、濃すぎたら酢で、アサヒポン酢のラーメン、日替わり限定の濃厚つけ麺(ポン酢の酸味、背脂とにんにく)、タバスコ、まかないLucy、約10人の行列、レディースサイズ、油半分、NGKのすぐ近く、二郎系、並でも麺400g、背脂たっぷりでも食べやすい、厚切りチャーシュー2枚、まかない醤油950円、期待ほどではないという声も。',
      confidence: 'medium', sources: [TB, R + 'B537647248/', R + 'B535408443/', R + 'B474609106/', R + 'B531115163/', R + 'B537580629/', R + 'B295457913/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu', 'shio', 'miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy noodles; 400 g in a regular (October 2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei', 'tsukemen'],
      signature_bowl: 'Staff meal (makanai) shoyu ramen, ¥950 (October 2026).',
      chashu: 'Two thick slices, tender (October 2026).',
      notable_toppings: ['bean sprouts', 'back fat', 'garlic', 'green chili'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth; back fat.' },
      pantheon: 'Sennichimae\'s Jiro-style staff meal: 400 g of thick noodles under sprouts, back fat and garlic, a short walk from NGK.',
      profile: { richness: 5, oiliness: 5, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B531115163/', '"The rich flavor of the broth spread across my palate… a bit too rich."'],
        oiliness: [R + 'B537647248/', '"Despite the generous amount of back fat."'],
        clarity: [R + 'B537647248/', 'A rich pork-bone broth under back fat — opaque.'],
        tare_strength: [R + 'B474609106/', '"A sharp saltiness that paired perfectly with the chewy, thick noodles."'],
        noodle_firmness: [R + 'B474609106/', '"Chewy, thick noodles."'],
        aroma_punch: [R + 'B535408443/', '"A punch of back fat and garlic that clings to the noodles."'],
      },
      confidence: 'medium', sources: [R + 'B537647248/', R + 'B474609106/', R + 'B531115163/', R + 'B535408443/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; garlic call at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前8-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前8番5号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537647248/', R + 'B474609106/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Staff meal shoyu ramen', '¥950', 'Ramen', 'no', 'no', 'October 2026; 400 g noodles.', 'makanai_shoyu'),
      it('', '', 'Staff meal shio ramen', '¥980', 'Ramen', 'no', 'no', 'October 2026.', 'makanai_shio'),
      it('', '', 'Asahi Ponzu ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'ponzu'),
      it('', '', 'Rich tsukemen (daily limited)', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsuke'),
      it('', '', 'Green chili', '¥120', 'Toppings', 'ask', 'vegan', 'October 2026.', 'aotou'),
      it('', '', 'Ajitama', '¥120', 'Toppings', 'ask', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '2011年からの二郎系「まかない」ラーメン・醤油950円、塩980円、味噌・並でも太麺400g・もやし、背脂、厚切りチャーシュー、にんにくはコールで・レディースサイズ・アサヒポン酢のラーメン・ポン酢の酸味の日替わり限定濃厚つけ麺・青唐120円、味玉120円・卓上に酢とタバスコ・カウンター18席',
    neighborhood: '難波千日前8-5。NGKから歩いてすぐ、南海なんば駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油・塩・味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、背脂、チャーシュー。',
    notes: '[ラーメン・NGK近くの二郎系まかないラーメン] NGKから歩いてすぐの二郎系の店で、2011年開店、カウンター18席、混む時間は10人ほどの行列。メニューの柱は「まかない」で、濃厚な豚骨スープを醤油、塩、味噌から選び、並でももちもちの太麺が400g、もやしの山、たっぷりの背脂、厚切りチャーシュー2枚。にんにくはお好みで、野菜と脂の量は固定。まかない醤油950円、塩980円(2026年10月)。レディースサイズや油半分の注文、アサヒポン酢を使ったポン酢ラーメン、ポン酢の酸味が効いた日替わり限定の濃厚つけ麺も。終盤にタバスコや酢で濃さを切るのが定番。期待ほどではなかったという古くからの客も。食券は券売機で。',
  });
}

// ================================================================ 中華そば なんば楼
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27149700/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_chuka_soba_nanba_ro', name: '中華そば なんば楼 (Chuka Soba Nanba Ro)', category: 'OMNI',
    lat: 34.663373, lng: 135.500625, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; seasoned tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu, back fat.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). Ticket machine (September 2026). No reservations. Cards, Suica-type IC cards, PayPay and au PAY accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 1-18-14, Naniwa — beside Nankai Namba Stn, bright yellow sign',
    cuisine: 'Clear tonkotsu chuka soba in a Tokyo "chan-kei" style · pork-bone clear soup noodles ¥1,000 · special ¥1,200 · chuka soba with rich back fat and rice ¥880 (from September 2026) · spicy umami soba ¥1,000, extra heat ¥500 · thin straight noodles, plenty of chashu, finely cut menma · snack plate of three toppings ¥500 · bottled beer ¥500 · free garlic and yuzu pepper, condiments with a how-to guide',
    website: null, gmaps: gm('中華そば なんば楼'), menu_url: null,
    notes: "[Ramen · clear tonkotsu chuka soba by Nankai Namba] A ramen shop under a bright yellow sign beside Nankai Namba Station, open since June 2025 and run, per one reviewer, by Yoshinoya Holdings. The specialty surprises people: tonkotsu that's transparent rather than cloudy, in the style of Tokyo's \"chan-kei\" chuka soba. It's light, with the pork's richness coming through without the heaviness, and plenty of thinly sliced chashu over smooth thin noodles. One diner found it strongly salty, another wanted more punch. Try it plain, then work through the condiments as the shop's guide suggests. The pork-bone clear soup noodles are ¥1,000 (September 2026). A menu revamp on 17 September 2026 added a back-fat chuka soba with rice for ¥880, and there's a spicy umami soba (¥1,000) with optional extra heat. Bottled beer and a ¥500 snack plate of toppings make it a quick drinking stop.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2025 (Tabelog)', background: 'Operated by Yoshinoya Holdings (June 2025 review).', philosophy: null, specialty: 'Clear tonkotsu chuka soba.',
      anecdotes: [
        { text: '"When it arrived, my first thought was, \'Is this really tonkotsu?\' The broth was surprisingly clear, unlike the typical thick, cloudy tonkotsu." — September 2026, chuka soba with extra pork fat.', source: R + 'B536332455/' },
        { text: '"I had heard that it\'s rare to find a \'chan\' style ramen in Namba… The broth was transparent and had a smooth, light flavor without any strong aftertaste." — September 2026.', source: R + 'B534893652/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば なんば楼、大阪市浪速区難波中1-18-14、なんば駅から111m、毎日11:00〜23:00、予約不可、カード・交通系IC・PayPay・au PAY可、2025年6月1日開店。口コミ(2025年6月〜2026年10月): 吉野家ホールディングスの運営、豚骨清湯が看板、煮干し白湯ラーメン900円、特製豚骨清湯1,200円、あっさりでもちもちの縮れ太麺(2025年7月)、2026年9月17日のメニュー改定で背脂の中華そばとご飯880円、つけ麺は終了、旨辛そば1,000円と辛さ5倍500円、ちゃん系の豚骨清湯、透明でなめらか、中細の平打ちストレート麺、チャーシュー6〜7枚、細いメンマ、Instagramのフォローで特典、にんにくや柚子胡椒の無料トッピング、豚骨清湯麺1,000円、瓶ビール500円、おつまみ盛り500円、塩気が強いという声、真っ黄色の看板、南海なんば駅から近い、卓上の調味料で味変、店のマニュアルどおりに味変。',
      confidence: 'medium', sources: [TB, R + 'B536332455/', R + 'B534893652/', R + 'B535613574/', R + 'B508271576/', R + 'B509800251/', R + 'B536913419/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'chintan', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin or medium-thin straight noodles, smooth (September 2026); curly thick noodles on the 2025 special.' },
      regional_style: ['Tokyo chuka soba ("chan-kei")'], sub_genre: ['chuka soba'],
      signature_bowl: 'Pork-bone clear soup noodles, ¥1,000 (September 2026).',
      chashu: 'Plenty of thin slices, 6–7 in a standard bowl (September 2026).',
      notable_toppings: ['finely cut menma', 'green onion', 'back fat (option)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Nankai Namba\'s clear tonkotsu: a transparent, chan-kei style pork broth under a pile of thin chashu.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536332455/', '"Light yet full of flavor, with the richness of the pork coming through without the heaviness."'],
        oiliness: [R + 'B536332455/', '"Delicious without being too heavy" — placed low.'],
        clarity: [R + 'B534893652/', '"The broth was transparent."'],
        tare_strength: [R + 'B535613574/', '"A strong salty flavor"; another wanted "a bit more punch" (B534893652) — mid-scale.'],
        noodle_firmness: [R + 'B536332455/', '"A nice chewy texture" — mid-scale.'],
        aroma_punch: [R + 'B534893652/', '"Without any strong aftertaste" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B536332455/', R + 'B534893652/', R + 'B535613574/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; condiment guide in the shop.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-18-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目18番14号 (go) 5m; two doors from Tenchijin Ramen 2; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535613574/', R + 'B508271576/', R + 'B509800251/'],
    price_note: 'Prices from August–September 2026 reviews; the menu changed on 17 September 2026.', last_checked: TODAY, items: [
      it('', '', 'Pork-bone clear soup noodles', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'seitan'),
      it('', '', 'Chuka soba with rich back fat + rice', '¥880', 'Sets', 'no', 'no', 'From 17 September 2026.', 'seabura_set'),
      it('', '', 'Spicy umami soba', '¥1,000', 'Ramen', 'no', 'no', 'August 2026; extra heat ×5 +¥500.', 'umakara'),
      it('', '', 'Snack plate (three toppings)', '¥500', 'Sides', 'ask', 'no', 'September 2026.', 'otsumami'),
      it('', '', 'Bottled beer', '¥500', 'Drinks', 'no', 'vegan', 'September 2026.', 'beer'),
    ] }, {
    cuisine: '東京の「ちゃん系」風の澄んだ豚骨の中華そば・豚骨清湯麺1,000円・特製1,200円・背脂の中華そばとご飯880円(2026年9月から)・旨辛そば1,000円、辛さ増し500円・細いストレート麺、たっぷりのチャーシュー、細いメンマ・トッピング3種のおつまみ盛り500円・瓶ビール500円・無料のにんにくと柚子胡椒、味変の案内付きの卓上調味料',
    neighborhood: '浪速区難波中1-18-14。南海なんば駅のすぐ横、真っ黄色の看板',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、背脂。',
    notes: '[ラーメン・南海なんば駅横の澄んだ豚骨の中華そば] 南海なんば駅のすぐ横、真っ黄色の看板のラーメン店で、2025年6月開店、口コミによると吉野家ホールディングスの運営。看板は意外にも濁らず透明な豚骨で、東京の「ちゃん系」中華そばのスタイル。あっさりしながら豚のコクが重たさなく伝わり、なめらかな細麺に薄切りのチャーシューがたっぷり。塩気が強いという人も、もう少しパンチがほしいという人も。まずはそのまま、それから店の案内どおりに卓上の調味料で味変を。豚骨清湯麺は1,000円(2026年9月)。2026年9月17日のメニュー改定で背脂の中華そばとご飯のセットが880円に、辛さを足せる旨辛そば(1,000円)も。瓶ビールと500円のおつまみ盛りで軽く一杯にも。',
  });
}

save();
