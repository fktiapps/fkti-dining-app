// Osaka sweep (2-mile circle around Dotonbori), batch 91 — ramen phase (all OMNI).
//   + 無鉄砲 大阪店 (ultra-thick tonkotsu; Tabelog Ramen WEST 100 2019–21, OSAKA 100 2023–25; Imamiya Ebisu)
//   + らーめん久遠 (Tabelog Ramen OSAKA 100 2024–25; clear yuzu shio, hand-pulled noodles; Senba Center Bldg 3 B2F)
//   + 本町製麺所 中華そば工房 (clear shoyu with Sichuan pepper, flat or round house noodles; Senba Center Bldg 2 B2F)
//   + 中華そば ふじい 芦原橋本店 (main shop of the Fujii back-fat shoyu; the Namba branch is already in data)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 91);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 無鉄砲 大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27005006/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.muteppou.com/';
  const D = day(['11:00', '15:00'], ['17:30', '22:30']);
  put({
    id: 'osaka_muteppou_osaka_ebisuhoncho', name: '無鉄砲 大阪店 (Muteppou Osaka)', category: 'OMNI',
    lat: 34.654608, lng: 135.500226, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; garlic soy on the table.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: thick pork-bone broth, chashu, spare ribs.',
    hours_raw: 'Tue–Sun 11:00–15:00 and 17:30–22:30; closed Mondays (open on holidays); hours may change (Tabelog). Ticket machine; tell staff your noodle firmness, richness and green onions. Cash only: no cards, e-money or QR (Tabelog). Avoid street parking; coin parking nearby (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisuhoncho 1-5-21, 1F — 2 min from Imamiya-Ebisu Stn, 2 min from Daikokucho Stn exit 4',
    cuisine: 'Tabelog Ramen WEST 100 (2019–2021) and OSAKA 100 (2023–2025) · ultra-thick, slightly gritty tonkotsu, like a pork-bone stew · tonkotsu ramen with extra fat, chashu ramen · choose noodle firmness, broth richness and green onions · thin curly noodles · thick spare ribs · rice · table: garlic soy, pickled ginger, spicy takana · 15 counter seats, 8 at tables',
    website: OWN, gmaps: gm('無鉄砲 大阪店'), menu_url: null,
    notes: "[Ramen · Osaka's famously thick tonkotsu by Imamiya-Ebisu] A pilgrimage bowl for tonkotsu lovers near Imamiya-Ebisu, open since 2005 and on Tabelog's ramen 100 lists most years since 2019. The broth is extraordinarily thick, slightly gritty and concentrated, like a pork-bone stew, yet not overly salty; it clings to thin curly noodles. Buy a ticket, then tell staff your noodle firmness, broth richness and green-onion amount. One regular always orders the chashu ramen, loaded with tender chashu, and recommends the thick spare ribs; get rice too. Change it up with garlic soy, pickled ginger and spicy takana from the table. Opinions in October 2026 were mixed: most still rave, but one long-time fan found the soup lukewarm and changed, and another found the noodles soft. There can be a line at opening. Cash only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 June 2005 (Tabelog)', background: 'Tonkotsu ramen shop (official site muteppou.com); Tabelog Ramen WEST 100 2019–2021, OSAKA 100 2023–2025.', philosophy: null, specialty: 'Ultra-thick tonkotsu ramen.',
      anecdotes: [
        { text: '"The broth is incredibly thick! Despite its richness, it\'s not overly salty, and the umami of the pork bone is concentrated, giving it a flavor reminiscent of a pork bone stew." — October 2026.', source: R + 'B537951333/' },
        { text: '"The tonkotsu broth here is truly on another level. The thick, slightly gritty soup is delicious." — September 2026, chashu ramen.', source: R + 'B521327617/' },
      ],
      japanese_sources_summary: '公式 muteppou.com。食べログ: 無鉄砲 大阪店、大阪市浪速区戎本町1-5-21 米田ビル1F、今宮戎駅から徒歩2分、大国町駅4番出口から徒歩2分、火〜日11:00〜15:00・17:30〜22:30、月曜定休(祝日は営業)、カード・電子マネー・QR不可、23席(カウンター15、テーブル8)、禁煙、路上駐車禁止、2005年6月7日開店、食べログ ラーメン WEST 百名店2019・2020・2021、OSAKA 百名店2023・2024・2025。口コミ(2026年5〜10月): 豚骨チャーシュー麺とスペアリブ、厚くジューシー、ざらっとした濃いスープ、柔らかいチャーシュー、やや崩れる麺、開店前に並ぶ、背脂増し、麺の硬さ・濃さ・ねぎを伝える、細い縮れ麺、卓上のにんにく醤油・紅しょうが・辛子高菜、味が濃い、麺が柔らかく感じたという声、ぬるくて味が変わったという声、豚骨シチューのような旨味の凝縮、塩辛くない。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537951333/', R + 'B521327617/', R + 'B537607442/', R + 'B537756374/', R + 'B537856848/', R + 'B537519969/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Thin curly noodles; firmness to order (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chashu ramen, firmness, richness and green onions to order (2026).',
      chashu: 'Tender, melt-in-your-mouth chashu; spare ribs on the side (July, October 2026).',
      notable_toppings: ['green onion (to order)', 'spare ribs', 'spicy takana (table)', 'garlic soy (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Osaka\'s benchmark ultra-thick tonkotsu: a gritty, stew-like pork-bone broth on thin curly noodles.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537951333/', '"The broth is incredibly thick!"'],
        oiliness: [R + 'B537607442/', 'Extra fat ordered; "the color, fat, and thickness are absolutely perfect" — placed high.'],
        clarity: [R + 'B521327617/', '"The thick, slightly gritty soup."'],
        tare_strength: [R + 'B537951333/', '"Despite its richness, it\'s not overly salty" — mid-scale.'],
        noodle_firmness: [R + 'B537756374/', 'Noodles "soft" to one diner at normal firmness — mid-scale.'],
        aroma_punch: [R + 'B521327617/', '"A deep, meaty flavor, delivering quite a punch" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537951333/', R + 'B521327617/', R + 'B537607442/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff ask your preferences; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区戎本町1-5-21 米田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区戎本町一丁目5番21号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521327617/', R + 'B537607442/'],
    price_note: 'No prices found; reviewers spent ¥1,000–2,000.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'Extra fat available; October 2026.', 'tonkotsu'),
      it('', '', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'chashumen'),
      it('', '', 'Spare ribs', '', 'Sides', 'no', 'no', 'October 2026.', 'spareribs'),
    ] }, {
    cuisine: '食べログ ラーメン WEST 百名店(2019〜2021)、OSAKA 百名店(2023〜2025)・豚骨シチューのような、ざらっとした超濃厚豚骨・背脂増しの豚骨ラーメン、チャーシュー麺・麺の硬さ、濃さ、ねぎの量を選べる・細い縮れ麺・厚いスペアリブ・ご飯・卓上ににんにく醤油、紅しょうが、辛子高菜・カウンター15席、テーブル8席',
    neighborhood: '浪速区戎本町1-5-21 1F。今宮戎駅から徒歩2分、大国町駅4番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、卓上のにんにく醤油。',
    vegan_detail: 'ヴィーガンではありません。濃厚な豚骨スープ、チャーシュー、スペアリブ。',
    notes: '[ラーメン・今宮戎、大阪屈指の超濃厚豚骨] 今宮戎近くの豚骨好きの聖地で、2005年開店、2019年以降ほぼ毎年食べログのラーメン百名店に。スープは驚くほど濃く、ざらっとして凝縮され豚骨シチューのよう、それでいて塩辛くなく、細い縮れ麺によく絡む。食券を買ったら、麺の硬さ、スープの濃さ、ねぎの量をスタッフに。常連はたっぷり柔らかいチャーシューのチャーシュー麺に厚いスペアリブを推す、ご飯も一緒に。卓上のにんにく醤油、紅しょうが、辛子高菜で味変を。2026年10月の口コミは賛否があり、多くは絶賛だが、長年のファンはスープがぬるく味が変わったと感じ、麺が柔らかいという声も。開店時は並ぶことも。現金のみ、月曜定休。',
  });
}

// ================================================================ らーめん久遠
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27115366/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://note.com/ramenkuon/n/n5bdab7d01753';
  const WD = day(['11:00', '15:00']);
  put({
    id: 'osaka_ramen_kuon_senba', name: 'らーめん久遠 (Ramen Kuon)', category: 'OMNI',
    lat: 34.681939, lng: 135.506799, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork chashu; broth not described as plant-based.',
    hours_raw: 'Mon–Fri 11:00–15:00; Sat 11:00–14:30; holidays 11:00–14:00; closed Sundays; until the soup runs out; irregular holidays with the building (Tabelog, staff-maintained). Temporary closures on Instagram. Ticket machine outside; one bowl per person; photos of food only; keep quiet inside. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '14:30']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Senba Chuo 1-4-3, Senba Center Bldg No. 3 B2F — by Sakaisuji-Hommachi Stn exits 6 and 7, at the foot of the escalator',
    cuisine: 'Tabelog Ramen OSAKA 100 (2024, 2025) · clear shio ramen with a subtle yuzu aroma · special shio soba ¥1,680 · seasoned-egg shio ¥1,370 · house-made hand-pulled, aged high-hydration thin noodles, boiled briefly · chashu of chicken breast, chicken thigh and pork belly · aosa seaweed · yuzu ochazuke with shredded chashu to finish in the leftover broth · 8 counter seats',
    website: OWN, gmaps: gm('らーめん久遠 船場センタービル'), menu_url: null,
    notes: "[Ramen · a Tabelog 100 clear shio in the Senba Center Building basement] An eight-seat counter at the bottom of the escalator in Senba Center Building No. 3, directly connected to Sakaisuji-Hommachi, open since 2020 and on Tabelog's Ramen OSAKA 100 in 2024 and 2025. The shio ramen is the reason to come: a shimmering clear broth with a subtle yuzu aroma, light but deep, with house-made hand-pulled, aged high-hydration thin noodles that keep a firm, wheaty bite despite a very short boil. The special (¥1,680) carries chicken breast, chicken thigh and pork belly chashu and aosa seaweed; the seasoned-egg shio is ¥1,370. Save some broth for the yuzu ochazuke with shredded chashu. House rules: one bowl each, photos of food only, quiet please. Lunch only, until the soup runs out; check Instagram before going.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 January 2020 (Tabelog)', background: 'Ramen counter (Tabelog, staff-maintained); Tabelog Ramen OSAKA 100 2024 and 2025; guide on note.com.', philosophy: null, specialty: 'Shio ramen; hand-pulled high-hydration noodles.',
      anecdotes: [
        { text: '"The carefully crafted homemade, hand-pulled, high-hydration noodles were placed in the boiling machine. I was surprised by how short the boiling time was… they had the perfect firmness and an irresistible wheat flavor." — October 2026, special shio soba ¥1,680.', source: R + 'B497121543/' },
        { text: '"The broth had a subtle yuzu aroma and was very flavorful. Both types of chashu had their own distinct tastes. The ochazuke was even more infused with yuzu than the ramen." — October 2026.', source: R + 'B537513593/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): らーめん久遠、大阪市中央区船場中央1-4-3 船場センタービル3号館 B2F、堺筋本町駅6・7番出口すぐ(中北改札)、本町駅10番出口から地下で約10分、月〜金11:00〜15:00、土11:00〜14:30、祝11:00〜14:00、日曜定休、スープがなくなり次第終了、施設に準じて不定休、臨時休業はInstagram、カード・電子マネー・QR不可、8席、2020年1月21日開店、食べログ ラーメン OSAKA 百名店2024・2025、お願い: 1人1杯、撮影はラーメンとサイドのみ、店内外では静かに、店内で通話しない。口コミ(2026年10月): 特製塩そば1,680円、きれいな店内と外観、自家製の手揉み熟成多加水麺、茹で時間が短い、ちょうどよい硬さと小麦の香り、あっさりしたスープ、残りのスープでご飯もの、味玉塩らーめん1,370円、塩らーめんと茶漬け、柚子の香り、2種のチャーシュー、茶漬けは柚子がさらに効き細切りのチャーシュー、休みのことが多い、外の券売機、12:50に6人待ち、細麺と澄んだスープ、鶏胸・鶏モモ・豚バラのチャーシュー、あおさ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B497121543/', R + 'B537513593/', R + 'B537481447/', R + 'B537508412/', R + 'B537793606/', R + 'B538139576/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: null, hydration: 'high', handmade: true, notes: 'House-made hand-pulled, aged high-hydration thin noodles, very short boil (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Special shio soba, ¥1,680 (October 2026).',
      chashu: 'Chicken breast, chicken thigh and pork belly (October 2026).',
      notable_toppings: ['aosa seaweed', 'seasoned egg', 'yuzu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat chashu.' },
      pantheon: 'Senba\'s Tabelog 100 shio: a clear yuzu-scented broth on hand-pulled high-hydration noodles, then ochazuke.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537481447/', '"A refreshing ramen with a light broth that was not too heavy" — placed low.'],
        oiliness: [R + 'B537481447/', '"Not too heavy" — placed low.'],
        clarity: [R + 'B538139576/', '"The thin noodles paired perfectly with the clear broth."'],
        tare_strength: [R + 'B537513593/', '"Very flavorful" broth — mid-scale.'],
        noodle_firmness: [R + 'B497121543/', '"They had the perfect firmness."'],
        aroma_punch: [R + 'B537513593/', '"A subtle yuzu aroma" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B497121543/', R + 'B537513593/', R + 'B538139576/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; quiet-please house rules; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区船場中央1-4-3 船場センタービル3号館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区船場中央一丁目4番3号 (go) 54m — long building, Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B497121543/', R + 'B537508412/', R + 'B537513593/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special shio soba', '¥1,680', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_shio'),
      it('', '', 'Seasoned-egg shio ramen', '¥1,370', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_shio'),
      it('', '', 'Yuzu ochazuke with shredded chashu', '', 'Rice', 'no', 'no', 'October 2026.', 'chazuke'),
    ] }, {
    cuisine: '食べログ ラーメン OSAKA 百名店(2024、2025)・ほのかに柚子が香る澄んだ塩らーめん・特製塩そば1,680円・味玉塩らーめん1,370円・自家製の手揉み熟成多加水細麺、茹で時間は短い・鶏胸、鶏モモ、豚バラのチャーシュー・あおさ・締めは残りのスープで細切りチャーシューの柚子茶漬け・カウンター8席',
    neighborhood: '中央区船場中央1-4-3 船場センタービル3号館 B2F。堺筋本町駅6・7番出口すぐ、エスカレーターを下りたところ',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚のチャーシュー。スープが植物性という情報はありません。',
    notes: '[ラーメン・船場センタービル地下、百名店の澄んだ塩] 堺筋本町駅直結の船場センタービル3号館、エスカレーターを下りたところにあるカウンター8席の店で、2020年開店、食べログのラーメン OSAKA 百名店に2024、2025年と選出。目当ては塩らーめんで、きらめく澄んだスープにほのかな柚子の香り、軽いが深い。自家製の手揉み熟成多加水の細麺は茹で時間が短いのに硬さがちょうどよく小麦が香る。特製(1,680円)は鶏胸、鶏モモ、豚バラのチャーシューとあおさ、味玉塩は1,370円。スープを残して細切りチャーシューの柚子茶漬けで締めを。店のルール: 1人1杯、撮影は料理のみ、店内では静かに。昼のみ、スープがなくなり次第終了、行く前にInstagramを確認して。',
  });
}

// ================================================================ 本町製麺所 中華そば工房
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27120491/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '19:00']);
  put({
    id: 'osaka_honmachi_seimensho_chuka_soba_kobo', name: '本町製麺所 中華そば工房 (Honmachi Seimensho Chuka Soba Kobo)', category: 'OMNI',
    lat: 34.681728, lng: 135.508127, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork chashu; meat-based broth not ruled out.',
    hours_raw: 'Mon–Sat 11:00–19:00; closed Sundays and holidays; hours may change; often closes early when the noodles run out (Tabelog; October 2026). Ticket machine at the entrance. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Senba Chuo 1-3-2, Senba Center Bldg No. 2 B2F — right by the Sakaisuji-Hommachi Stn ticket gates',
    cuisine: 'Chuka soba ¥1,050: clear shoyu with a citrus aroma and a gentle hint of Sichuan pepper · Chuka Soba Prime with extra chashu and seasoned egg · choose flat or round house-made noodles · dry (shiru-nashi) chuka soba with egg and sudachi · chilled kiwi ramen ¥1,300 (October 2026) with chicken and grilled pork chashu and almonds · rare chashu, long crunchy menma · black pepper and Sichuan pepper to add · self-serve rooibos tea · 9 counter seats, 14 at tables',
    website: null, gmaps: gm('本町製麺所 中華そば工房 船場センタービル'), menu_url: null,
    notes: "[Ramen · a house-noodle clear shoyu with a Sichuan-pepper lift in Senba] The chuka soba workshop of Honmachi Seimensho, now in the basement of Senba Center Building No. 2 right by the Sakaisuji-Hommachi gates, open since 2020 and often crowded at lunch. The chuka soba (¥1,050) is a clear shoyu with a citrus aroma and an elegant hint of Sichuan pepper, clean and deep, with no harsh heat; the Prime adds rare chashu and a seasoned egg. You choose flat or round house-made noodles, both chewy and wheaty. The dry chuka soba with egg and sudachi is the rich option, and in early October there was a chilled kiwi ramen (¥1,300). Self-serve rooibos tea. It often closes early when the noodles sell out, so go before late afternoon. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 November 2020 (Tabelog); relocated to Senba Center Bldg No. 2.', background: 'Ramen shop of Honmachi Seimensho (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chuka soba with choice of house noodles.',
      anecdotes: [
        { text: '"The clear broth has a fragrant soy sauce aroma with a hint of something unique… It\'s infused with Sichuan pepper. There\'s no unpleasant spiciness; it\'s elegantly balanced. You can choose between flat or round noodles." — October 2026, Chuka Soba Prime.', source: R + 'B537121663/' },
        { text: '"The well-chilled broth was light and delicious, and the flat, medium-thick noodles were smooth and tasty. Toppings included kiwi, a seasoned egg, three slices of… chicken breast chashu, grilled… pork chashu, mitsuba." — October 2026, chilled kiwi ramen ¥1,300.', source: R + 'B528394562/' },
      ],
      japanese_sources_summary: '食べログ: 本町製麺所 中華そば工房、大阪市中央区船場中央1-3-2 船場センタービル2号館 B2F(移転)、堺筋本町駅の改札を出てすぐ、月〜土11:00〜19:00、日祝休み、カード・電子マネー・QR不可、23席(カウンター9、テーブル14)、禁煙、2020年11月26日開店。口コミ(2026年9〜10月): 冷やしキウイラーメン1,300円、冷たいルイボスティー、あっさりした冷たいスープ、平打ちの中太麺、キウイ、味玉、鶏胸チャーシュー、炙った豚チャーシュー、三つ葉、アーモンド、中華そばプライム(チャーシュー増しと味玉)、丸麺を選択、無添加のすっきりした味、深い旨味、ジューシーなチャーシュー、平日13時半は待ちなし、澄んだスープに醤油の香りと山椒、平麺か丸麺を選べる、レアチャーシュー、長いメンマ、柑橘の香り、自家製のもちもち麺、黒胡椒と山椒で味変、中華そば1,050円、醤油はやや強め、麺切れで閉店の貼り紙をよく見る、入口の券売機、汁なし中華そばは卵を混ぜる、すだち。',
      confidence: 'medium', sources: [TB, R + 'B537121663/', R + 'B528394562/', R + 'B537102562/', R + 'B537451264/', R + 'B537922917/', R + 'B538115323/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: true, notes: 'House-made; flat or round to choose, chewy and wheaty (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Chuka soba, ¥1,050; Chuka Soba Prime with extra chashu and egg (October 2026).',
      chashu: 'Rare, tender chashu (October 2026).',
      notable_toppings: ['long menma', 'seasoned egg', 'green onion', 'Sichuan pepper'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Meat chashu.' },
      pantheon: 'Senba\'s house-noodle shoyu: a clear, citrusy broth with Sichuan pepper and your pick of flat or round noodles.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537102562/', '"A clean taste… with a deep umami flavor" — placed low.'],
        oiliness: [R + 'B537102562/', '"A clean taste" — placed low.'],
        clarity: [R + 'B537121663/', '"The clear broth."'],
        tare_strength: [R + 'B537922917/', '"The broth felt slightly stronger in soy sauce" — placed high.'],
        noodle_firmness: [R + 'B538115323/', 'Round noodles "chewy and smooth" — placed high.'],
        aroma_punch: [R + 'B537451264/', '"Captivated by the vibrant citrus aroma" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537121663/', R + 'B537102562/', R + 'B537922917/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff ask your noodle choice; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区船場中央1-3-2 船場センタービル2号館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current, with relocation notice; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区船場中央一丁目3番2号 (go) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537922917/', R + 'B528394562/', R + 'B537121663/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba', '¥1,050', 'Ramen', 'no', 'no', 'Flat or round noodles; October 2026.', 'chuka_soba'),
      it('', '', 'Chuka Soba Prime', '', 'Ramen', 'no', 'no', 'Extra chashu and egg; October 2026.', 'prime'),
      it('', '', 'Dry chuka soba', '', 'Mazesoba', 'no', 'no', 'Egg and sudachi; October 2026.', 'shirunashi'),
      it('', '', 'Chilled kiwi ramen', '¥1,300', 'Limited', 'no', 'no', 'October 2026.', 'kiwi'),
    ] }, {
    cuisine: '中華そば1,050円: 柑橘が香り山椒がほのかに効く澄んだ醤油・チャーシュー増しと味玉の中華そばプライム・自家製麺は平麺か丸麺を選べる・卵とすだちの汁なし中華そば・冷やしキウイラーメン1,300円(2026年10月)、鶏と炙り豚のチャーシューとアーモンド・レアチャーシュー、長くシャキシャキのメンマ・黒胡椒と山椒で味変・ルイボスティーはセルフ・カウンター9席、テーブル14席',
    neighborhood: '中央区船場中央1-3-2 船場センタービル2号館 B2F。堺筋本町駅の改札を出てすぐ',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚のチャーシュー、肉のスープの可能性も。',
    notes: '[ラーメン・船場、自家製麺の山椒香る澄んだ醤油] 本町製麺所の中華そば工房で、今は堺筋本町の改札すぐの船場センタービル2号館地下に移転、2020年開店、昼は混むことが多い。中華そば(1,050円)は柑橘が香り、山椒がほのかに上品に効く澄んだ醤油で、すっきりと深く、嫌な辛さはない。プライムはレアチャーシューと味玉を追加。自家製麺は平麺か丸麺を選べ、どちらももちもちで小麦が香る。卵とすだちの汁なし中華そばは濃厚派に、10月初めには冷やしキウイラーメン(1,300円)も。ルイボスティーはセルフ。麺がなくなると早く閉まることが多いので、夕方前に。現金のみ、日曜定休。',
  });
}

// ================================================================ 中華そば ふじい 芦原橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27058258/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.ra-men.co/';
  const D = day(['11:00', '23:59']), LATE = day(['11:00', '01:30']);
  put({
    id: 'osaka_chuka_soba_fujii_ashiharabashi', name: '中華そば ふじい 芦原橋本店 (Chuka Soba Fujii Ashiharabashi)', category: 'OMNI',
    lat: 34.660742, lng: 135.488331, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; fried rice, kara-age and gyoza sides.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone and seafood broth, pork back fat, chashu.',
    hours_raw: 'Mon–Wed and Sun 11:00–24:00 (L.O. 23:30); Fri, Sat and days before holidays 11:00–01:30 (L.O. 01:00); closed Thursdays; may stop seating early when busy (Tabelog, staff-maintained). Take a number from the in-shop queue machine; you can track the wait on your phone; no reservations. PayPay and au PAY accepted; no cards or e-money (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: LATE, 5: LATE, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shiokusa 3-9-19, on Amidaike-suji — 1 min from JR Ashiharabashi Stn',
    cuisine: 'Classic back-fat chuka soba: clear chicken-bone shoyu with seafood and a hint of shiitake, medium-thin straight noodles · choose firmness, richness (normal or light) and back fat; extra green onion free · lunch set ¥1,100: chuka soba, half fried rice, two kara-age · chashu ramen with half fried rice about ¥1,500 · nira soba with egg yolk · Showa set with fried rice and gyoza · kara-age set with free rice refills · touch-panel ordering · 26 seats',
    website: OWN, gmaps: gm('中華そば ふじい 芦原橋本店'), menu_url: null,
    notes: "[Ramen · the original Fujii back-fat chuka soba by Ashiharabashi] The main shop of Chuka Soba Fujii, a minute from JR Ashiharabashi, open since 2011 and busy all day; the Namba branch is also in this guide. The chuka soba is a nostalgic clear shoyu of chicken bones with seafood and a hint of shiitake, deepened by back fat and paired with medium-thin straight noodles; set the firmness, richness and back fat, and extra green onion is free. The soy is on the strong side and the normal broth is rich, so one diner would go light next time. Sets are the draw: the ¥1,100 lunch set adds half fried rice and two crisp kara-age, and there's a nira soba buried in garlic chives with an egg yolk. Take a number from the machine inside and wait by phone; on a Sunday afternoon one diner was 20 groups back. Open until midnight, 01:30 on weekends; closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 June 2011 (Tabelog)', background: 'Main shop of Chuka Soba Fujii (official site ra-men.co; Tabelog, staff-maintained).', philosophy: null, specialty: 'Back-fat chuka soba; ramen sets.',
      anecdotes: [
        { text: '"The clear soy sauce broth was rich with the umami of chicken bones, complemented by seafood flavors and the depth of back fat, creating a nostalgic yet satisfying taste. It paired perfectly with the medium-thin straight noodles." — October 2026, lunch set.', source: R + 'B537697667/' },
        { text: '"I could choose the firmness of the noodles, the richness of the broth (normal or light), and the amount of back fat… Taking a sip of the broth, I could taste the soy sauce along with a hint of shiitake mushrooms." — October 2026.', source: R + 'B537654474/' },
      ],
      japanese_sources_summary: '公式 ra-men.co。食べログ(店舗会員): 中華そば ふじい 芦原橋本店、大阪市浪速区塩草3-9-19、JR芦原橋駅から阿弥陀池筋沿いに徒歩1分、月火水日11:00〜24:00(L.O.23:30)、金土祝前日11:00〜翌1:30(L.O.1:00)、木曜定休、当日は店頭の順番待ちシステムで整理券、スマホで待ち時間を確認、電話やメールで通知、ネットや電話の予約不可、混雑時はラストオーダー前に受付終了も、PayPay・au PAY可、カード・電子マネー不可、26席、2011年6月15日開店。口コミ(2026年10月): 半チャーハンとチャーシュー麺のセット1,500円ほど、昔ながらの中華そば、背脂・チャーシュー・ねぎ、醤油がやや強い、日曜13:40に20組待ち、店内の発券機、スマホで順番待ち、麺の硬さ・スープの濃さ(普通かあっさり)・背脂の量を選べる、ねぎ大盛り無料、椎茸の香り、濃いめ、ランチセット(半チャーハンと唐揚げ2個)、鶏ガラの澄んだ醤油に魚介と背脂、中細ストレート麺、ニラそば、卵黄、昭和定食(チャーハン、餃子)、駐車場が狭い、タッチパネルで注文、唐揚げ定食はご飯おかわり自由、11:45に5組待ち、ランチ1,100円。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537697667/', R + 'B537654474/', R + 'B537220900/', R + 'B537860580/', R + 'B538007803/', R + 'B538176971/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles; firmness to order (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chuka soba lunch set with half fried rice and kara-age, ¥1,100 (October 2026).',
      chashu: 'Traditional chashu; chashu ramen available (October 2026).',
      notable_toppings: ['pork back fat', 'free extra green onion', 'garlic chives (nira soba)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth, back fat.' },
      pantheon: 'The Fujii mothership: nostalgic back-fat shoyu by Ashiharabashi, best as a set with fried rice and kara-age.',
      profile: { richness: 4, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B538007803/', '"The Chuka Soba had a quite rich broth" — placed high.'],
        oiliness: [R + 'B537697667/', '"The depth of back fat" — mid-scale.'],
        clarity: [R + 'B537697667/', '"The clear soy sauce broth" under back fat — mid-scale.'],
        tare_strength: [R + 'B537220900/', '"The soy sauce was a bit on the stronger side" — placed high.'],
        noodle_firmness: [R + 'B538007803/', 'Firm option felt too firm; normal recommended — mid-scale.'],
        aroma_punch: [R + 'B537654474/', '"A hint of shiitake mushrooms" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537697667/', R + 'B538007803/', R + 'B537220900/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ordering and phone-based queue; friendly staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区塩草3-9-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区塩草三丁目9番19号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538176971/', R + 'B537220900/', R + 'B537860580/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: chuka soba, half fried rice, two kara-age', '¥1,100', 'Sets', 'no', 'no', 'October 2026.', 'lunch_set'),
      it('', '', 'Chashu ramen and half fried rice set', '~¥1,500', 'Sets', 'no', 'no', 'October 2026.', 'chashu_set'),
      it('', '', 'Nira soba', '', 'Ramen', 'no', 'no', 'With egg yolk; October 2026.', 'nira_soba'),
      it('', '', 'Showa set (fried rice, gyoza)', '', 'Sets', 'no', 'no', 'October 2026.', 'showa_teishoku'),
      it('', '', 'Kara-age set (free rice refills)', '', 'Sets', 'no', 'no', 'October 2026.', 'karaage_teishoku'),
    ] }, {
    cuisine: '昔ながらの背脂中華そば: 鶏ガラの澄んだ醤油に魚介とほのかな椎茸、中細ストレート麺・麺の硬さ、濃さ(普通かあっさり)、背脂を選べ、ねぎ増しは無料・ランチセット1,100円: 中華そば、半チャーハン、唐揚げ2個・チャーシュー麺と半チャーハンのセット1,500円ほど・卵黄のニラそば・チャーハンと餃子の昭和定食・ご飯おかわり自由の唐揚げ定食・タッチパネルで注文・26席',
    neighborhood: '浪速区塩草3-9-19、阿弥陀池筋沿い。JR芦原橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、チャーハン、唐揚げ、餃子。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと魚介のスープ、豚の背脂、チャーシュー。',
    notes: '[ラーメン・芦原橋、元祖ふじいの背脂中華そば] JR芦原橋から1分の中華そば ふじいの本店で、2011年開店、一日中混む。なんば店もこのガイドに掲載。中華そばは鶏ガラに魚介とほのかな椎茸の懐かしい澄んだ醤油に背脂のコク、中細ストレート麺。硬さ、濃さ、背脂を選べ、ねぎ増しは無料。醤油は強めで普通でも濃いので、次はあっさりにという声も。魅力はセットで、1,100円のランチセットは半チャーハンとカリッとした唐揚げ2個付き、ニラたっぷりで卵黄をのせたニラそばも。店内の機械で整理券を取り、スマホで待つ。日曜午後は20組待ちだったという声も。24時まで、週末は深夜1時半まで、木曜定休。',
  });
}

save();
