// Osaka sweep (2-mile circle around Dotonbori), batch 73 — ramen phase (all OMNI).
//   + 鶏Soba 座銀 にぼし店 (creamy chicken soba with fried burdock, Tabelog Ramen 100 2019–2024)
//   + つじ田 心斎橋店 (Tokyo tsukemen chain's Shinsaibashi branch, opened 2024)
//   + 無限ラーメン 心斎橋店 (second Mugen beef-bone paitan shop, opened 2024)
//   + のりお 南船場店 (late-night abura soba and ramen counter, opened 2011)
//   - skip 27119176 Ramen Butayama Minamisenba (temporarily closed on Tabelog)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 73);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27119176', 'Ramen Butayama Minamisenba: Tabelog listing marked Temporarily Closed');

// ================================================================ 鶏Soba 座銀 にぼし店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27086371/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://silver-grape.com/';
  put({
    id: 'osaka_tori_soba_zagin_niboshi', name: '鶏Soba 座銀 にぼし店 (Tori Soba Zagin Niboshi)', category: 'OMNI',
    lat: 34.67767, lng: 135.50113, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; fried burdock topping.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, pork and chicken chashu.',
    hours_raw: 'Daily 10:00–22:00; closed 30 December–3 January (Tabelog). Ticket machine (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['10:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 3-9-6 — 5 min north of Shinsaibashi Stn',
    cuisine: 'Creamy chicken soba · Tori Soba shoyu ¥1,000 and shio · spicy Tori Soba ¥1,100 · potage-like chicken broth · fried burdock root · moist chicken and chewy pork chashu · thin curly noodles · summer chilled jidori soba with flat noodles · limited Jiro-style bowl · rice · 15 seats',
    website: OWN, gmaps: gm('鶏Soba 座銀 にぼし店'), menu_url: null,
    notes: "[Ramen · a Ramen 100 chicken-soba shop north of Shinsaibashi] A Tori Soba Zagin branch open since 2015, picked for Tabelog's Ramen 100 every year from 2019 to 2024, with a quietly upscale feel for a ramen shop. The tori soba is a creamy chicken broth that one diner likened to a rich potage, intense yet smooth. Thin curly noodles, two chashu (moist chicken and chewy pork) and crunchy fried burdock root complete it. Choose shoyu (¥1,000) or shio, or the spicy version (¥1,100), which ran hotter than one fan of spice expected. Summer brought a chilled jidori soba with flat noodles and plenty of chicken chashu, and there has been a limited Jiro-style bowl. Expect a line: 20 to 40 minutes at peak times. Open 10:00 to 22:00 daily. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 July 2015 (Tabelog)', background: 'Tori Soba Zagin branch; operator site silver-grape.com (Tabelog). Tabelog Ramen WEST 100 2019–2022 and Ramen OSAKA 100 2023–2024.', philosophy: null, specialty: 'Tori Soba, creamy chicken.',
      anecdotes: [
        { text: '"The creamy broth had a delightful texture, and the chicken stock tasted like a rich potage—intense yet smooth… The fried burdock root added a nice crunch." — October 2026, tori soba.', source: R + 'B537361802/' },
        { text: '"Both the soup and the bowl were nicely chilled… The flat noodles were well-chilled in cold water, and rather than being chewy, they had a delightful, mochi-like texture." — October 2026, chilled jidori soba.', source: R + 'B508994999/' },
      ],
      japanese_sources_summary: '運営サイト silver-grape.com。食べログ: 鶏Soba 座銀 にぼし店、大阪市中央区南船場3-9-6、心斎橋駅1番出口から北へ、毎日10:00〜22:00、12月30日〜1月3日休み、カード・電子マネー・QR不可、15席(カウンター7、テーブル2)、禁煙、2015年7月6日開店、食べログ ラーメン WEST 百名店2019〜2022、ラーメン OSAKA 百名店2023・2024。口コミ(2026年4〜10月): 夏限定のつけそば、鶏Soba塩、鶏Soba醤油1,000円、券売機、濃い醤油の鶏スープ、細ちぢれ麺、豚と鶏むねのチャーシュー、揚げごぼう、深い丼、辛い鶏Soba1,100円、上品な雰囲気、限定の二郎系、冷やし地鶏そばとご飯、平打ち麺、日曜19時半に6人待ち、ポタージュのような濃厚でなめらかな鶏スープ、しっとりした鶏とかみごたえのある豚の2種のチャーシュー。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537361802/', R + 'B508994999/', R + 'B482525888/', R + 'B505458026/', R + 'B537261138/', R + 'B453906063/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Thin curly noodles in the tori soba; flat noodles in the summer chilled soba (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Tori Soba shoyu, ¥1,000; spicy Tori Soba, ¥1,100 (September–October 2026).',
      chashu: 'Moist chicken and chewy pork (October 2026).',
      notable_toppings: ['fried burdock root', 'two chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Shinsaibashi\'s Ramen 100 chicken soba: a potage-thick chicken broth with crisp fried burdock.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537361802/', '"Tasted like a rich potage—intense yet smooth."'],
        oiliness: [R + 'B508994999/', '"While it felt oily, it was surprisingly light" (chilled bowl) — mid-scale.'],
        clarity: [R + 'B537361802/', 'Creamy, potage-like broth — placed low.'],
        tare_strength: [R + 'B482525888/', '"A rich soy sauce-flavored chicken broth" — mid-scale.'],
        noodle_firmness: [R + 'B537361802/', '"The noodles were slippery and had a great mouthfeel" — mid-scale.'],
        aroma_punch: [R + 'B505458026/', '"The flavor is refined" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537361802/', R + 'B482525888/', R + 'B508994999/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter and two tables.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-9-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目9番6号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B482525888/', R + 'B505458026/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tori Soba shoyu', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'tori_soba_shoyu'),
      it('', '', 'Tori Soba shio', '', 'Ramen', 'no', 'no', 'October 2026.', 'tori_soba_shio'),
      it('', '', 'Spicy Tori Soba', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'kara_tori_soba'),
      it('', '', 'Chilled jidori soba', '', 'Limited', 'no', 'no', 'Summer; October 2026.', 'hiyashi_jidori'),
      it('', '', 'Rice', '', 'Rice', 'no', 'vegan', 'October 2026.', 'rice'),
    ] }, {
    cuisine: 'クリーミーな鶏Soba・鶏Soba醤油1,000円と塩・辛い鶏Soba1,100円・ポタージュのような鶏スープ・揚げごぼう・しっとりした鶏とかみごたえのある豚のチャーシュー・細ちぢれ麺・夏は平打ち麺の冷やし地鶏そば・限定の二郎系・ご飯・15席',
    neighborhood: '中央区南船場3-9-6。心斎橋駅から北へ徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、揚げごぼう。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、豚と鶏のチャーシュー。',
    notes: '[ラーメン・心斎橋の北の百名店の鶏Soba] 2015年開店の鶏Soba 座銀の店で、2019年から2024年まで毎年食べログのラーメン百名店に選出、ラーメン店としては落ち着いた上品な雰囲気。鶏Sobaはクリーミーな鶏スープで、濃厚なポタージュのよう、濃いのになめらかと評した人も。細ちぢれ麺に、しっとりした鶏とかみごたえのある豚の2種のチャーシュー、さくさくの揚げごぼう。醤油(1,000円)か塩、または辛い鶏Soba(1,100円)を。辛いもの好きでも想像より辛かったという声。夏は平打ち麺で鶏チャーシューたっぷりの冷やし地鶏そば、限定の二郎系も。ピーク時は20〜40分待ち。毎日10:00〜22:00。現金のみ。',
  });
}

// ================================================================ つじ田 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27144447/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://tsukemen-tsujita.com/shop/?id=0010031';
  const WD = day(['11:00', '23:59']), WE = day(['10:00', '22:00']);
  put({
    id: 'osaka_tsujita_shinsaibashi', name: 'つじ田 心斎橋店 (Tsujita Shinsaibashi)', category: 'OMNI',
    lat: 34.677665, lng: 135.501342, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based dipping sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-and-seafood dipping sauce, chashu.',
    hours_raw: 'Mon–Fri 11:00–24:00; Sat, Sun and holidays 10:00–22:00 (Tabelog). Ticket machine (2024–2026 reviews). Transit IC cards accepted; no credit cards or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamisenba 3-9-5, Senba Shinsaibashi shopping street — 5 min from Shinsaibashi Stn',
    cuisine: 'Tokyo rich tsukemen · rich tsukemen, regular and large · rich flavored-egg tsukemen ¥1,210 · thick seafood-and-pork dipping sauce · sudachi to squeeze on the noodles · black shichimi · soup to finish · chashu and soft-boiled egg · 16 counter seats',
    website: OWN, gmaps: gm('つじ田 心斎橋店'), menu_url: null,
    notes: "[Ramen · Tokyo's Tsujita tsukemen on Senba Shinsaibashi street] The Shinsaibashi branch of Kanda's Tsujita, the Tokyo tsukemen chain, opened in October 2024 on the Senba Shinsaibashi shopping street. The rich tsukemen pairs noodles with a great texture with a thick dipping sauce of seafood and pork. Squeeze the sudachi over the noodles to freshen it and add black shichimi, then finish with soup to thin what's left. The rich flavored-egg tsukemen was ¥1,210 in September 2026. One diner called it a reliable classic rather than anything new. Lines were long after opening and mostly overseas visitors on one Sunday; now there are days with no wait. Buy a ticket at the machine. Open until midnight on weekdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 October 2024 (Tabelog)', background: 'Branch of the Tsujita tsukemen chain from Kanda, Tokyo (October 2026 review); official site tsukemen-tsujita.com.', philosophy: null, specialty: 'Rich tsukemen.',
      anecdotes: [
        { text: '"The dipping sauce was wonderfully rich, with a classic flavor that highlighted the umami of seafood… When I squeezed some sudachi (a type of citrus) into it, it added a refreshing touch." — September 2026, large rich tsukemen.', source: R + 'B536935050/' },
        { text: '"Tsujita was the place that sparked my love for Tsukemen 15 years ago." — October 2026, a longtime Tsujita fan.', source: R + 'B537515700/' },
      ],
      japanese_sources_summary: '公式 tsukemen-tsujita.com。食べログ: つじ田 心斎橋店、大阪市中央区南船場3-9-5、心斎橋駅北8番階段から徒歩5分、月〜金11:00〜24:00、土日祝10:00〜22:00、交通系IC可、カード・QR不可、カウンター16席、禁煙、2024年10月6日開店。口コミ(2024年11月〜2026年10月): 船場心斎橋商店街の人気つけ麺店、開店当初より入りやすい日も、チャーシューと半熟卵、券売機、濃厚味玉つけ麺1,210円、日曜13時半に行列、外国人観光客が多い、魚介と肉のつけ汁、すだちを麺に、濃厚つけ麺の大盛り、魚介の旨み、王道で安定、神田つけ麺つじ田、黒七味、スープ割り、淡路町店の思い出。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536935050/', R + 'B537515700/', R + 'B535571471/', R + 'B514482634/', R + 'B537374075/', R + 'B495808987/'] },
    ramen: {
      broth_base: ['gyokai', 'pork'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: '"A great texture" and paired well with the thick dipping sauce (September 2026).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Rich flavored-egg tsukemen, ¥1,210 (September 2026); rich tsukemen (October 2026).',
      chashu: 'Chashu with soft-boiled egg (September 2026).',
      notable_toppings: ['sudachi', 'black shichimi', 'soft-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-and-seafood dipping sauce.' },
      pantheon: 'Shinsaibashi\'s outpost of Kanda Tsujita: thick seafood-pork tsukemen brightened with sudachi.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536935050/', '"The dipping sauce was wonderfully rich."'],
        oiliness: [R + 'B535571471/', '"A perfect blend of seafood and meat flavors, making it easy to enjoy" — mid-scale.'],
        clarity: [R + 'B536935050/', '"The thick dipping sauce" — placed low.'],
        tare_strength: [R + 'B536935050/', '"A classic flavor that highlighted the umami of seafood" in a rich sauce — placed high.'],
        noodle_firmness: [R + 'B535571471/', '"They had a great texture and were delicious" (tsukemen noodles) — mid-scale.'],
        aroma_punch: [R + 'B537374075/', '"Adding the black shichimi spice really enhanced the flavor" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536935050/', R + 'B535571471/', R + 'B537374075/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; many overseas visitors (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-9-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目9番5号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514482634/', R + 'B536935050/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rich tsukemen', '', 'Tsukemen', 'no', 'no', 'Regular or large; September–October 2026.', 'noko_tsukemen'),
      it('', '', 'Rich flavored-egg tsukemen', '¥1,210', 'Tsukemen', 'no', 'no', 'September 2026.', 'noko_ajitama_tsukemen'),
    ] }, {
    cuisine: '東京の濃厚つけ麺・濃厚つけ麺、並と大盛り・濃厚味玉つけ麺1,210円・魚介と豚の濃いつけ汁・麺に搾るすだち・黒七味・スープ割り・チャーシューと半熟卵・カウンター16席',
    neighborhood: '中央区南船場3-9-5、船場心斎橋商店街。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのつけ汁。',
    vegan_detail: 'ヴィーガンではありません。豚と魚介のつけ汁、チャーシュー。',
    notes: '[ラーメン・船場心斎橋商店街の東京つじ田のつけ麺] 東京・神田のつけ麺チェーン、つじ田の心斎橋店で、2024年10月に船場心斎橋商店街に開店。濃厚つけ麺は、食感のよい麺に魚介と豚の濃いつけ汁。すだちを麺に搾ってさっぱりさせ、黒七味を足し、最後はスープ割りで。濃厚味玉つけ麺は2026年9月に1,210円。新しさより王道の安定感と評した人も。開店当初は長い行列で、ある日曜は外国人観光客が中心、今は待たずに入れる日も。食券は券売機で。平日は深夜0時まで。',
  });
}

// ================================================================ 無限ラーメン 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27144594/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mugen_ramen_shinsaibashi', name: '無限ラーメン 心斎橋店 (Mugen Ramen Shinsaibashi)', category: 'OMNI',
    lat: 34.677512, lng: 135.501571, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; seasoned chashu rice bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth, chashu, beef topping.',
    hours_raw: 'Hours not listed on Tabelog. Reviews describe a weekday noon visit, a visit right after opening, and a 22:00 visit (August–October 2026). No cards, e-money or QR (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 3-7-24 — 5 min from Shinsaibashi Stn',
    cuisine: 'Beef-bone white soup ramen ¥1,050, rich option · creamy, frothy broth · thin noodles, firm · seasoned egg ¥130 · two chashu · top bowl with marbled strip loin · kiwi ramen on the menu · melt-in-your-mouth chashu rice bowl, small, in a ¥1,450 set',
    website: null, gmaps: gm('無限ラーメン 心斎橋店'), menu_url: null,
    notes: "[Ramen · Mugen's beef-bone white soup north of Shinsaibashi] The Shinsaibashi branch of Mugen Ramen, open since September 2024, five minutes from the station. The beef-bone white soup ramen (¥1,050, October 2026) is creamy and bubbly, with a rich, slightly sweet broth that drinks easier than it looks, and a rich option. Thin, firm noodles reminded one diner of Hakata ramen. Add a seasoned egg (¥130) or pair it with a small melt-in-your-mouth chashu rice bowl. One of the two chashu was a little gamey for one diner, and another got only one slice. The priciest bowl carries marbled strip loin like roast beef, and there's even a kiwi ramen. Toppings may differ from other branches. Lines can be long. No cards. See also Mugen Ramen Sennichimae.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 September 2024 (Tabelog)', background: 'Branch of Mugen Ramen; a diner who had tried other branches noted toppings vary by shop (October 2026).', philosophy: null, specialty: 'Beef-bone white soup ramen.',
      anecdotes: [
        { text: '"I started with the broth, which had a rich flavor with a strong essence of beef bone… Although it looked quite thick, it was surprisingly easy to drink." — September 2026, beef-bone white soup ramen, rich.', source: R + 'B536867017/' },
        { text: '"I chose the most expensive ramen. I think it was marbled strip loin? It felt like roast beef, rich yet easy to eat." — August 2026.', source: R + 'B534892213/' },
      ],
      japanese_sources_summary: '食べログ: 無限ラーメン 心斎橋店、大阪市中央区南船場3-7-24、心斎橋から287m、営業時間の記載なし、カード・電子マネー・QR不可、2024年9月15日開店。口コミ(2026年8〜10月): 一番高いラーメン、霜降りのロースでローストビーフのよう、開店直後は静か、普段は行列、泡立つスープ、濃厚だがくどくない、2種のチャーシューの一方に少し臭み、22時ごろ客多め、牛骨白湯ラーメン1,050円、濃厚を選択、キウイラーメン、牛骨の濃い風味、見た目より飲みやすい、牛骨白湯ラーメンと味玉130円、平日昼に8割の入り、博多ラーメンを思わせるクリーミーなスープと細麺、やや甘み、チャーシューは1枚、とろけるチャーシュー丼(小)とのセット1,450円、店舗でトッピングが違う。',
      confidence: 'medium', sources: [TB, R + 'B536867017/', R + 'B534892213/', R + 'B535276529/', R + 'B537328777/', R + 'B537387601/'] },
    ramen: {
      broth_base: ['beef'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin, Hakata-like noodles with a firm bite (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Beef-bone white soup ramen, ¥1,050 (September–October 2026).',
      chashu: 'Two kinds; one slightly gamey to one diner (September 2026); one thin slice in another bowl (October 2026).',
      notable_toppings: ['seasoned egg', 'marbled strip loin (top bowl)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone broth.' },
      pantheon: 'Mugen\'s Shinsaibashi branch: a frothy beef-bone white soup over thin, firm noodles.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536867017/', '"A rich flavor with a strong essence of beef bone."'],
        oiliness: [R + 'B535276529/', '"Rich but not overwhelming" — mid-scale.'],
        clarity: [R + 'B535276529/', '"The ramen had a bubbly texture" — placed low.'],
        tare_strength: [R + 'B537328777/', '"A rich flavor with a hint of sweetness" — mid-scale.'],
        noodle_firmness: [R + 'B537328777/', '"A nice bite and a firm texture."'],
        aroma_punch: [R + 'B536867017/', '"A strong essence of beef bone" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536867017/', R + 'B537328777/', R + 'B535276529/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-7-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; five reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目7番24号 (go) 10m; OSM ニューペイブ心斎橋 node/14067605540 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537328777/', R + 'B537387601/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef-bone white soup ramen', '¥1,050', 'Ramen', 'no', 'no', 'Rich option; October 2026.', 'gyukotsu_paitan'),
      it('', '', 'Seasoned egg', '¥130', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Beef-bone ramen + small melt-in-your-mouth chashu rice bowl', '¥1,450', 'Sets', 'no', 'no', 'October 2026.', 'chashu_don_set'),
      it('', '', 'Kiwi ramen', '', 'Ramen', 'no', 'no', 'On the menu; September 2026.', 'kiwi_ramen'),
    ] }, {
    cuisine: '牛骨白湯ラーメン1,050円、濃厚も選べる・クリーミーで泡立つスープ・硬めの細麺・味玉130円・2種のチャーシュー・霜降りロースの最上位の一杯・キウイラーメンも・とろけるチャーシュー丼(小)のセット1,450円',
    neighborhood: '中央区南船場3-7-24。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味付けしたチャーシュー丼。',
    vegan_detail: 'ヴィーガンではありません。牛骨のスープ、チャーシュー、牛肉のトッピング。',
    notes: '[ラーメン・心斎橋の北の無限の牛骨白湯] 無限ラーメンの心斎橋店で、2024年9月開店、駅から徒歩5分。牛骨白湯ラーメン(1,050円、2026年10月)はクリーミーで泡立つ、濃厚でやや甘いスープで、見た目より飲みやすく、濃厚も選べる。硬めの細麺に博多ラーメンを思い出した人も。味玉(130円)を足すか、とろけるチャーシュー丼(小)と組み合わせて。2種のチャーシューの一方に少し臭みを感じた人、チャーシューが1枚だけだった人も。一番高い一杯はローストビーフのような霜降りロースのせ、キウイラーメンまである。トッピングは店舗で違うことも。行列ができることも。カード不可。千日前店もあります。',
  });
}

// ================================================================ のりお 南船場店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27058597/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://menya-norio.com/';
  const D = day(['11:00', '23:59']);
  put({
    id: 'osaka_norio_minamisenba', name: 'のりお 南船場店 (Norio Minamisenba)', category: 'OMNI',
    lat: 34.676893, lng: 135.506133, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu; niboshi (fish) in some dishes.',
    hours_raw: 'Mon–Sat 11:00–24:00, until sold out; closed Sundays and holidays; hours may change (Tabelog). Ticket machine (April 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Minamisenba 2-2-8 — 2 min from Nagahoribashi Stn',
    cuisine: 'Abura soba and ramen · mazesoba · spicy oil noodles · niboshi dishes · green onion chashu rice bowl · lemon water · counter only, 15 seats',
    website: OWN, gmaps: gm('のりお 南船場店'), menu_url: null,
    notes: "[Ramen · a late-night abura soba counter near Nagahoribashi] A 15-seat counter two minutes from Nagahoribashi, open since 2011 and serving until midnight, which makes it a stop after a night out. The draw is abura soba (mazesoba), with ramen and niboshi dishes too. The spicy oil noodles impressed one diner with heat balanced by umami and a sauce that clings to the noodles. The chashu has fans, best with a green onion chashu rice bowl. Water comes with lemon slices. The staff changed about a year before April 2026, and a long-time customer found the flavor milder since and the new staff attentive. Not everyone is won over: one September visitor found the oil soba mediocre. Buy a ticket at the machine. Closed Sundays and holidays. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 June 2011 (Tabelog)', background: 'Abura soba and ramen counter; official site menya-norio.com (Tabelog). Staff changed about a year before an April 2026 review.', philosophy: null, specialty: 'Abura soba.',
      anecdotes: [
        { text: '"True to its name, it has a solid spicy kick, but it\'s not just heat; the balance with the umami is exquisite. The sauce clings well to the noodles." — June 2026, spicy oil noodles.', source: R + 'B529752083/' },
        { text: '"I\'ve been coming here for a long time, and although the staff changed about a year ago, the experience remains great… The new staff is very attentive." — April 2026.', source: R + 'B530685505/' },
      ],
      japanese_sources_summary: '公式 menya-norio.com。食べログ: のりお 南船場店、大阪市中央区南船場2-2-8、長堀橋駅から徒歩2分、月〜土11:00〜24:00、日祝休み、売り切れ次第終了、営業時間は変わることも、カード・電子マネー・QR不可、カウンター15席、禁煙、2011年6月29日開店。口コミ(2026年4〜10月): 遅くまで営業、すぐ満席、混ぜそばから煮干しまで、辛い油そばは辛さと旨みのバランス、たれが麺に絡む、カウンターで一人でも、油そばとねぎチャーシュー丼、チャーシュー目当て、ねぎが乾き気味、店員が約1年前に替わった、以前より味がマイルド、券売機、レモン水、麺は6〜7分、油そばは平凡でほかの店が閉まっていたので来たという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B529752083/', R + 'B530685505/', R + 'B530266269/', R + 'B524185708/', R + 'B534912333/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'unknown',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Noodles take 6–7 minutes to cook (April 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Abura soba; spicy oil noodles (June 2026).',
      chashu: 'Chashu with fans; also in a green onion chashu rice bowl (June 2026).',
      notable_toppings: ['chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu.' },
      pantheon: 'Nagahoribashi\'s late-night abura soba counter, open until midnight.',
      profile: { richness: 3, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B529752083/', '"The balance with the umami is exquisite" — mid-scale.'],
        oiliness: [R + 'B530266269/', 'Oil soba, sauce-dressed noodles — placed high.'],
        clarity: [R + 'B529752083/', 'Soupless, sauce-coated noodles — placed low.'],
        tare_strength: [R + 'B529752083/', '"The sauce clings well to the noodles" — placed high.'],
        noodle_firmness: [R + 'B530685505/', 'Noodles "take about 6 to 7 minutes to cook" — mid-scale.'],
        aroma_punch: [R + 'B529752083/', '"It has a solid spicy kick" (spicy oil noodles) — placed high.'],
      },
      confidence: 'low', sources: [R + 'B529752083/', R + 'B530266269/', R + 'B530685505/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter seats; welcoming for solo diners (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-2-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目2番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529752083/', R + 'B530266269/'],
    price_note: 'No prices in recent reviews.', last_checked: TODAY, items: [
      it('', '', 'Abura soba (oil soba)', '', 'Mazesoba', 'no', 'no', 'June–September 2026.', 'abura_soba'),
      it('', '', 'Spicy oil noodles', '', 'Mazesoba', 'no', 'no', 'June 2026.', 'kara_abura'),
      it('', '', 'Green onion chashu rice bowl', '', 'Rice', 'no', 'no', 'June 2026.', 'negi_chashu_don'),
    ] }, {
    cuisine: '油そばとラーメン・混ぜそば・辛い油そば・煮干しの品も・ねぎチャーシュー丼・レモン水・カウンターのみ15席',
    neighborhood: '中央区南船場2-2-8。長堀橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、一部の品に煮干し(魚)。',
    notes: '[ラーメン・長堀橋近くの深夜の油そば] 長堀橋駅から2分のカウンター15席の店で、2011年開店、深夜0時まで営業なので飲んだ後の締めにも。看板は油そば(混ぜそば)で、ラーメンや煮干しの品も。辛い油そばは辛さと旨みのバランスがよく、たれが麺によく絡むと評した人も。チャーシューにはファンがいて、ねぎチャーシュー丼と一緒に。水にはレモンスライス。2026年4月の約1年前に店員が替わり、長年の客は味がマイルドになり、新しい店員は気が利くと。合わない人も。9月の客は油そばを平凡と評した。食券は券売機で。日祝休み。現金のみ。',
  });
}

save();
