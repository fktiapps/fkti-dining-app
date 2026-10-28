// Osaka sweep (2-mile circle around Dotonbori), batch 114 — ramen phase (all OMNI).
//   + 麺LABO 唯奏 (chicken ramen light or rich, tamago-kake mazesoba, hand-kneaded noodles; QR ordering; Awaza)
//   + 一轍 (niboshi and katsuobushi pork-bone ramen since 2010; Kyomachibori by Nishisenba Park)
//   + ここだけ (Jiro-style ramen with beef tendon instead of chashu, "Negi Fire"; by Taisho Stn)
//   + 好麺 たまらん (lighter Jiro-style ramen with crisp vegetables since 2015; Taisho)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 114);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺LABO 唯奏
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27131555/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_men_labo_yuisou_awaza', name: '麺LABO 唯奏 (Men LABO Yuisou)', category: 'OMNI',
    lat: 34.683268, lng: 135.485405, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare; mazesoba sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork broth; seafood in the mazesoba sauce; egg yolks; chashu.',
    hours_raw: 'Daily 11:00–14:30 and 17:00–21:30 (food L.O. 20:30); closing days vary (Tabelog). Order and pay by QR code on your phone (sign-in with Apple or LINE); cash also possible (September 2026). Self-service water. Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '14:30'], ['17:00', '21:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Enokojima 1-6-2 — 220 m from Awaza Stn',
    cuisine: 'Chicken ramen, light or rich, and mazesoba · light chicken ramen ¥900: light but full-flavored, generous thin-sliced chashu · rich chicken and pork ramen ¥950 (¥1,150 with green-onion rice): chicken-led, rich yet clean and silky, not greasy · choose thin straight or medium-thick curly hand-kneaded noodles · tamago-kake mazesoba ¥800: flat medium-thick firm noodles, two egg yolks, seafood-flavored sauce · rich chicken-and-pork tsukemen with hand-kneaded noodles · seasonal sea bream bowls · green-onion or meat rice',
    website: null, gmaps: gm('麺LABO 唯奏 阿波座'), menu_url: null,
    notes: "[Ramen · light or rich chicken ramen and two-yolk mazesoba by Awaza] A small, clean ramen shop two minutes north of Awaza, open since 2022, where you order and pay on your phone by QR code. The light chicken ramen (¥900) is clear and full-flavored under generous thin-sliced chashu; the rich chicken and pork (¥950) is chicken-led, silky and not greasy despite the name, and you choose thin straight noodles or medium-thick curly hand-kneaded ones. For something different, the tamago-kake mazesoba (¥800) tosses firm flat noodles with two egg yolks and a seafood-flavored sauce. Mix it well. There's also a rich tsukemen on the hand-kneaded noodles, and sea bream bowls come and go. One diner found the phone ordering a hassle when the room was empty.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 2022 (Tabelog)', background: 'Ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chicken ramen; tamago-kake mazesoba.',
      anecdotes: [
        { text: '"Despite being rich, the broth was not overly greasy; it had a clear, silky texture that I really enjoyed!" — August 2026, rich chicken and pork ramen ¥950.', source: R + 'B534686897/' },
        { text: '"The flat, medium-thick noodles came with two egg yolks, and the sauce was quite rich, allowing me to enjoy the seafood flavor." — September 2026, tamago-kake mazesoba ¥800.', source: R + 'B533009987/' },
      ],
      japanese_sources_summary: '食べログ: 麺LABO 唯奏、大阪市西区江之子島1-6-2、阿波座から220m、毎日11:00〜14:30・17:00〜21:30(L.O. 20:30)、不定休、予約可、カード・電子マネー・QR可、2022年9月1日開店。口コミ(2026年8〜10月): モバイルオーダー、玉子かけまぜそば800円、卵黄2個、魚介の効いた濃いたれ、平打ちの中太麺、固めの茹で、水はセルフ、限定の鯛の冷やし、西郵便局の北、近くにうどんの店、小さく清潔な店内、QRで注文と会計、濃厚鶏豚ラーメン950円、細麺か中太の縮れ麺、脂っこくなく澄んだなめらかなスープ、薄切りの豚、ねぎご飯付きで1,150円、AppleかLINEでログイン、現金も可、過去の限定(鶏塩、冷やし鯛塩そば、鯛出汁の塩・醤油、昆布水の冷やし、松阪牛脂の麺)、あっさり鶏ラーメン900円、たっぷりの薄切りチャーシュー、豚はチャーシューで感じ、スープは鶏が主、ストレート麺か手もみ麺、濃厚つけ麺に味玉、手もみ麺。',
      confidence: 'medium', sources: [TB, R + 'B533009987/', R + 'B534686897/', R + 'B534781566/', R + 'B535789972/', R + 'B537123891/', R + 'B537399022/'] },
    ramen: {
      broth_base: ['chicken', 'pork'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Choice of thin straight or medium-thick curly hand-kneaded (temomi) noodles; flat firm noodles in the mazesoba (2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'mazesoba_aburasoba', 'tsukemen'],
      signature_bowl: 'Rich chicken and pork ramen ¥950; light chicken ramen ¥900 (2026).',
      chashu: 'Generous thin-sliced chashu, moist (September–October 2026).',
      notable_toppings: ['egg yolks (mazesoba)', 'green onion', 'green-onion rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and pork broth.' },
      pantheon: 'Awaza\'s phone-ordered chicken ramen, light or rich, with a two-yolk tamago-kake mazesoba.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534781566/', '"Although it\'s labeled as rich, it\'s actually quite refreshing" — mid-scale.'],
        oiliness: [R + 'B534686897/', '"Not overly greasy" — placed low.'],
        clarity: [R + 'B534686897/', '"A clear, silky texture" in the rich bowl — mid-scale.'],
        tare_strength: [R + 'B535789972/', '"Light yet packed with flavor" — mid-scale.'],
        noodle_firmness: [R + 'B533009987/', '"The firm, well-cooked noodles" — placed high.'],
        aroma_punch: [R + 'B537123891/', '"A strong animal flavor" on the menu, chicken-led — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534686897/', R + 'B534781566/', R + 'B533009987/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone QR ordering needs a LINE or Apple sign-in (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江之子島1-6-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江之子島一丁目6番2号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533009987/', R + 'B534686897/', R + 'B535789972/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Light chicken ramen', '¥900', 'Ramen', 'no', 'no', 'September 2026.', 'assari_tori'),
      it('', '', 'Rich chicken and pork ramen', '¥950', 'Ramen', 'no', 'no', 'August 2026.', 'nouko_toriton'),
      it('', '', 'Rich chicken and pork ramen + green-onion rice', '¥1,150', 'Sets', 'no', 'no', 'September 2026.', 'negi_set'),
      it('', '', 'Tamago-kake mazesoba', '¥800', 'Mazesoba', 'no', 'no', 'September 2026.', 'tkm'),
      it('', '', 'Rich tsukemen', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsukemen'),
    ] }, {
    cuisine: 'あっさりと濃厚の鶏ラーメン、まぜそば・あっさり鶏ラーメン900円: 軽いのに味わい深い、たっぷりの薄切りチャーシュー・濃厚鶏豚ラーメン950円(ねぎご飯付き1,150円): 鶏が主、濃厚なのに澄んでなめらか、脂っこくない・細いストレート麺か中太の縮れた手もみ麺を選べる・玉子かけまぜそば800円: 平打ちの中太で固めの麺、卵黄2個、魚介の効いたたれ・手もみ麺の濃厚鶏豚つけ麺・季節の鯛の一杯・ねぎご飯や肉ご飯',
    neighborhood: '西区江之子島1-6-2。阿波座駅から220m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれ、まぜそばのたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚のスープ、まぜそばのたれの魚介、卵黄、チャーシュー。',
    notes: '[ラーメン・阿波座近く、あっさりと濃厚の鶏ラーメンと卵黄2個のまぜそば] 阿波座から北へ2分、小さく清潔なラーメン店で、2022年開店、注文と会計はスマートフォンのQRコードで。あっさり鶏ラーメン(900円)は澄んで味わい深く、薄切りチャーシューがたっぷり。濃厚鶏豚(950円)は名前ほど重くなく鶏が主でなめらか、脂っこくない。麺は細いストレートか中太の縮れた手もみ麺から。ひと味違うのは玉子かけまぜそば(800円): 固めの平打ち麺に卵黄2個と魚介の効いたたれ、よく混ぜて。手もみ麺の濃厚つけ麺もあり、鯛の一杯が期間限定で登場。空いているときもスマホ注文なのが面倒だったという声も。',
  });
}

// ================================================================ 一轍
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27051272/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:30']); const LD = day(['11:30', '14:30'], ['18:00', '21:30']);
  put({
    id: 'osaka_ittetsu_kyomachibori', name: '一轍 (Ittetsu)', category: 'OMNI',
    lat: 34.687277, lng: 135.49415, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and shio tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi, katsuobushi and sea bream with pork bone; chashu.',
    hours_raw: 'Mon and Wed 11:30–14:30; Tue, Thu and Fri 11:30–14:30 and 18:00–21:30; closed Sat, Sun and public holidays; until sold out (Tabelog). Dinner hours may vary (June 2026). Order on a tablet; the bill comes with the food and you pay at a machine at the back (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: L, 1: LD, 2: L, 3: LD, 4: LD }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kyomachibori 1-12-23, facing Nishisenba Park, down a small alley — 7 min from Honmachi Stn exit 28',
    cuisine: 'Four broths on pork bone · niboshi ramen ¥900, the most popular: niboshi and pork-bone shoyu, rich but balanced, medium-thin noodles, nori, menma, white negi, kaiware, two chashu, half a soft-boiled egg · seafood ramen with katsuobushi and pork-bone shoyu, rich and creamy (the owner\'s recommendation) · sea bream soba with sea bream and pork-bone shio · plum seafood shio ramen with free wasabi · chuka soba · chili-heaped ramen ¥950 · egg +¥50 · mentaiko rice · 14 counter seats',
    website: null, gmaps: gm('一轍 京町堀'), menu_url: null,
    notes: "[Ramen · niboshi and katsuobushi pork-bone ramen facing Nishisenba Park since 2010] A counter of 14 stylish seats down a small alley in front of Nishisenba Park, near Utsubo Park, running since 2010. Four broths share a pork-bone base: the most popular niboshi ramen (¥900), rich but balanced, with two chashu, half an egg, nori, menma and kaiware included; a rich, creamy katsuobushi seafood ramen that the owner recommends to first-timers; a sea bream shio soba; and a plain chuka soba. One diner of ten years usually orders the plum seafood shio with a free dab of wasabi. A chili-heaped version is milder than it looks. Order on a tablet, pay at the machine at the back. Weekday lunch, dinner on Tuesday, Thursday and Friday, until sold out. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 July 2010 (Tabelog)', background: 'Ramen counter (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Niboshi ramen; seafood ramen.',
      anecdotes: [
        { text: '"The broth for niboshi ramen is made with niboshi (dried sardines) and pork bone soy sauce, the seafood ramen features katsuobushi (dried bonito) and pork bone soy sauce, the sea bream soba uses sea bream and pork bone salt." — August 2025.', source: R + 'B511356535/' },
        { text: '"I usually order the \'Plum Seafood Sio Ramen\' with a complimentary topping of wasabi. The consistent deliciousness never gets old." — March 2026, about ten years of visits.', source: R + 'B526280531/' },
      ],
      japanese_sources_summary: '食べログ: 一轍、大阪市西区京町堀1-12-23、本町駅28番出口から西へ徒歩7分、西船場公園、肥後橋から476m、月・水 11:30〜14:30、火・木・金 11:30〜14:30・18:00〜21:30、土日祝休み、売り切れ次第終了、カード・電子マネー・QR不可、カウンター14席、2010年7月12日開店。口コミ(2025年2月〜2026年10月): 唐辛子たっぷりのラーメン950円、半熟卵50円、辛さは控えめ、煮干しラーメン、メンマ、煮干しラーメン(煮干しと豚骨の醤油)、魚介ラーメン(鰹節と豚骨の醤油)、鯛そば(鯛と豚骨の塩)、中華そば、人気1位の煮干し、中細麺、海苔・メンマ・白ねぎ・かいわれ・チャーシュー2枚・半熟卵半分で900円、魚介ラーメンは濃厚でクリーミー、梅魚介塩ラーメンに無料のわさび、10年通う人、雨で傘を貸してくれた、2010年創業、店主のおすすめは魚介ラーメン醤油、西船場公園の前、小路を入る、カウンターのみ、おしゃれな椅子、タッチパネル注文、夜の営業時間は確認を、伝票は料理と一緒に、奥の精算機で支払い、煮干しラーメン大盛りと明太子ご飯、上品で甘め。',
      confidence: 'medium', sources: [TB, R + 'B492272442/', R + 'B511356535/', R + 'B519058922/', R + 'B526280531/', R + 'B530957163/', R + 'B536923140/'] },
    ramen: {
      broth_base: ['niboshi', 'gyokai', 'pork'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: null, hydration: null, handmade: false, notes: 'Medium-thin noodles (August 2025).' },
      regional_style: [], sub_genre: ['niboshi', 'ramen'],
      signature_bowl: 'Niboshi ramen, ¥900 (June 2026).',
      chashu: 'Two slices, tender (2025–2026).',
      notable_toppings: ['kaiware', 'white negi', 'half soft-boiled egg', 'wasabi (plum shio)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Fish and pork-bone broth.' },
      pantheon: 'Kyomachibori\'s 2010 park-side counter of four pork-bone broths, led by a balanced niboshi.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B511356535/', '"The niboshi pork bone broth is rich" — placed high.'],
        oiliness: [R + 'B511356535/', '"A perfect balance of fat" — mid-scale.'],
        clarity: [R + 'B519058922/', 'Seafood ramen "rich and creamy" — placed low.'],
        tare_strength: [R + 'B536923140/', '"More refined and sweeter than I had imagined" — mid-scale.'],
        noodle_firmness: [R + 'B511356535/', '"Medium-thin" noodles; no remark on firmness — mid-scale.'],
        aroma_punch: [R + 'B530957163/', '"A delightful niboshi taste that was well-balanced and not overwhelming" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B511356535/', R + 'B519058922/', R + 'B530957163/', R + 'B536923140/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; pay at a machine (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区京町堀1-12-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026; OSM node 一轍 1 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区京町堀一丁目12番23号 (go) 4m; OSM node/5636172021 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B492272442/', R + 'B511356535/', R + 'B530957163/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('煮干しラーメン', '', 'Niboshi ramen', '¥900', 'Ramen', 'no', 'no', 'June 2026.', 'niboshi'),
      it('', '', 'Seafood ramen (shoyu)', '', 'Ramen', 'no', 'no', 'December 2025.', 'gyokai'),
      it('', '', 'Sea bream soba (shio)', '', 'Ramen', 'no', 'no', 'August 2025.', 'tai'),
      it('', '', 'Plum seafood shio ramen', '', 'Ramen', 'no', 'no', 'March 2026.', 'ume_shio'),
      it('', '', 'Chili-topped ramen', '¥950', 'Ramen', 'no', 'no', 'August 2025.', 'karai'),
      it('', '', 'Soft-boiled egg', '+¥50', 'Toppings', 'no', 'no', 'August 2025.', 'egg'),
      it('', '', 'Mentaiko rice', '', 'Rice', 'no', 'no', 'October 2026.', 'mentai'),
    ] }, {
    cuisine: '豚骨を土台にした4つのスープ・人気1位の煮干しラーメン900円: 煮干しと豚骨の醤油、濃厚だがバランスがいい、中細麺、海苔、メンマ、白ねぎ、かいわれ、チャーシュー2枚、半熟卵半分・鰹節と豚骨の醤油の魚介ラーメン、濃厚でクリーミー(店主のおすすめ)・鯛と豚骨の塩の鯛そば・無料のわさびを添える梅魚介塩ラーメン・中華そば・唐辛子山盛りのラーメン950円・卵+50円・明太子ご飯・カウンター14席',
    neighborhood: '西区京町堀1-12-23、西船場公園の前、小路を入る。本町駅28番出口から徒歩7分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と塩のたれ。',
    vegan_detail: 'ヴィーガンではありません。煮干し、鰹節、鯛に豚骨、チャーシュー。',
    notes: '[ラーメン・西船場公園の前、2010年からの煮干しと鰹節の豚骨ラーメン] 靱公園近く、西船場公園の前の小路を入ったところにあるおしゃれな椅子のカウンター14席の店で、2010年から。4つのスープは豚骨が土台: 人気1位の煮干しラーメン(900円)は濃厚だがバランスがよく、チャーシュー2枚、半熟卵半分、海苔、メンマ、かいわれ込み。店主が初めての人にすすめるのは濃厚でクリーミーな鰹節の魚介ラーメン、ほかに鯛の塩そばとシンプルな中華そば。10年通う人はたいてい無料のわさびを添えた梅魚介塩を。唐辛子山盛りのものは見た目ほど辛くない。注文はタブレット、支払いは奥の精算機。平日の昼と火・木・金の夜、売り切れ次第終了。現金のみ。',
  });
}

// ================================================================ ここだけ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27144517/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['17:00', '23:30']); const WE = day(['11:30', '15:00'], ['16:00', '23:30']);
  put({
    id: 'osaka_kokodake_taisho', name: 'ここだけ (kokodake)', category: 'OMNI',
    lat: 34.664993, lng: 135.478552, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy tare; ramen tare on the table.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu-shoyu broth; beef tendon; back fat.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–23:30; Sat, Sun and public holidays 11:30–15:00 and 16:00–23:30 (L.O. 23:00); closed the day after a public holiday; hours may change (Tabelog). Call your vegetables, garlic and back fat when the bowl is ready. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sangenya-higashi 1-18-2 (Taisho-ku) — 151 m from Taisho Stn, south side',
    cuisine: 'Jiro-style ramen with beef tendon · beef tendon ramen ¥1,000 (200 g): light tonkotsu-shoyu, thick chewy or smooth high-hydration noodles, sweet-savory soy-simmered beef tendon on bean sprouts and cabbage, back fat · vegetables, garlic and fat to order · extra beef tendon ¥450 · spicy garlic chives ¥300 · "Negi Fire": scallions flash-fried by pouring hot onion oil at the table · soupless version, "Red" spicy change · set with mini curry · table: pepper, ramen tare, kombu-niboshi vinegar, chili oil, pickled ginger',
    website: null, gmaps: gm('ここだけ 大正'), menu_url: null,
    notes: "[Ramen · Jiro-style ramen with beef tendon instead of pork, by Taisho Station] A Jiro-style shop a minute south of Taisho Station, opened in September 2024 in a former ramen shop, with a Kansai twist: instead of slabs of pork, the beef tendon ramen (¥1,000) comes topped with sweet-savory simmered beef tendon whose collagen melts into a light tonkotsu-shoyu. Call your vegetables, garlic and back fat as usual; it's lighter and easier than most Jiro bowls, so beginners do fine. The show-off topping is Negi Fire, scallions flash-fried tableside with hot onion oil, and you can film it. Spicy garlic chives (¥300) pack a real kick. Change it up midway with the table's pickled ginger or kombu-niboshi vinegar. There's a set with mini curry, and late hours most nights. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 September 2024 (Tabelog)', background: 'Jiro-style ramen shop (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Beef tendon ramen.',
      anecdotes: [
        { text: '"The broth is a light tonkotsu soy sauce, paired with thick, chewy noodles… The table condiments included pepper, ramen tare, kombu kelp and niboshi vinegar, chili oil, and pickled ginger." — October 2026, beef tendon noodles ¥1,000.', source: R + 'B493052144/' },
        { text: '"The visual impact was impressive, but surprisingly, the taste was much lighter than it looked. However, the umami was rich, and the collagen from the beef tendon melted into the broth." — August 2026, with Negi Fire.', source: R + 'B534346103/' },
      ],
      japanese_sources_summary: '食べログ: ここだけ、大阪市大正区三軒家東1-18-2、大正から151m、月〜金 11:30〜14:00・17:00〜23:30、土日祝 11:30〜15:00・16:00〜23:30(L.O. 23:00)、祝日の翌日休み、カード・電子マネー・QR不可、2024年9月24日開店。口コミ(2024年10月〜2026年10月): 牛すじ麺1,000円、野菜・にんにく増し、辛いニラ300円、牛すじ増し450円、G系の牛すじ、軽い豚骨醤油、太いもちもちの麺、卓上に胡椒・ラーメンのたれ・昆布と煮干しの酢・ラー油・紅しょうが、汁なし300g、レッドに変更、ネギファイヤー(熱い玉ねぎ油を注いで炎の演出、動画撮影可)、見た目より軽い、牛すじのコラーゲン、大正駅すぐ、二郎系、チャーシューの代わりに牛すじ、関西風、ラーメン麺泥棒の跡地、200gで1,000円、野菜・にんにく・背脂をコール、ミニカレーのセット、甘辛い醤油の牛すじと背脂、多加水でつるつるもちもちの麺、マイルドなスープ、紅しょうがで味変、二郎系初心者にも。',
      confidence: 'medium', sources: [TB, R + 'B493052144/', R + 'B534346103/', R + 'B534462018/', R + 'B535101905/', R + 'B536137129/', R + 'B536241308/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'thick', shape: null, hydration: 'high', handmade: false, notes: 'Thick chewy noodles; smooth high-hydration to one diner; wide flat in the soupless (2024–2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei', 'ramen'],
      signature_bowl: 'Beef tendon ramen, 200 g, ¥1,000 (September–October 2026).',
      chashu: 'None: sweet-savory simmered beef tendon in its place (2026).',
      notable_toppings: ['beef tendon', 'Negi Fire', 'spicy garlic chives', 'back fat', 'pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth; beef tendon.' },
      pantheon: 'Taisho\'s Kansai-twist Jiro bowl: beef tendon instead of pork, and scallions set alight at the table.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B534346103/', '"Much lighter than it looked. However, the umami was rich" — mid-scale.'],
        oiliness: [R + 'B536241308/', 'Back fat over the vegetables; "the broth had a mild flavor" — mid-scale.'],
        clarity: [R + 'B493052144/', '"A light tonkotsu soy sauce" — placed low.'],
        tare_strength: [R + 'B536241308/', '"Adding a bit of the table sauce made it just right" — mid-scale.'],
        noodle_firmness: [R + 'B493052144/', '"Thick, chewy noodles" — placed high.'],
        aroma_punch: [R + 'B493052144/', 'Spicy garlic chives with "a strong kick of spice"; garlic to order — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B493052144/', R + 'B534346103/', R + 'B536241308/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Jiro-style call for toppings; filming the Negi Fire allowed (2024).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市大正区三軒家東1-18-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市大正区三軒家東一丁目18番2号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B493052144/', R + 'B536137129/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef tendon ramen (200 g)', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'gyusuji'),
      it('', '', 'Extra beef tendon', '+¥450', 'Toppings', 'no', 'no', 'October 2026.', 'suji_mashi'),
      it('', '', 'Spicy garlic chives', '+¥300', 'Toppings', 'no', 'no', 'October 2026.', 'kara_nira'),
      it('', '', 'Negi Fire', '', 'Toppings', 'no', 'no', 'August 2026.', 'negi_fire'),
      it('', '', 'Soupless beef tendon noodles', '', 'Mazesoba', 'no', 'no', 'October 2024.', 'shirunashi'),
      it('', '', 'Set with mini curry', '', 'Sets', 'no', 'no', 'September 2026.', 'curry_set'),
    ] }, {
    cuisine: '牛すじの二郎系ラーメン・牛すじラーメン1,000円(200g): 軽い豚骨醤油、太くもちもち、またはつるつるの多加水麺、もやしとキャベツの上に甘辛い醤油の牛すじ、背脂・野菜、にんにく、脂はコールで・牛すじ増し450円・辛いニラ300円・「Negi Fire」: 卓上で熱い玉ねぎ油を注いでねぎを揚げる・汁なし、辛い「Red」・ミニカレーのセット・卓上に胡椒、ラーメンのたれ、昆布と煮干しの酢、ラー油、紅しょうが',
    neighborhood: '大正区三軒家東1-18-2。大正駅南側から151m',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ、卓上のラーメンのたれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨醤油のスープ、牛すじ、背脂。',
    notes: '[ラーメン・大正駅近く、チャーシューの代わりに牛すじの二郎系] 大正駅から南へ1分、2024年9月に元ラーメン店の跡に開いた二郎系の店で、関西らしいひねり: 豚の塊の代わりに、牛すじラーメン(1,000円)には甘辛く煮た牛すじがのり、そのコラーゲンが軽い豚骨醤油に溶ける。野菜、にんにく、背脂はいつものようにコールで。多くの二郎系より軽く食べやすいので初心者でも大丈夫。見せ場のトッピングは「Negi Fire」で、卓上で熱い玉ねぎ油を注いでねぎを揚げる、撮影も可。辛いニラ(300円)はしっかり辛い。途中で卓上の紅しょうがや昆布と煮干しの酢で味変を。ミニカレーのセットもあり、ほぼ毎晩遅くまで。現金のみ。',
  });
}

// ================================================================ 好麺 たまらん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27085993/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['18:30', '23:00']);
  put({
    id: 'osaka_konomen_tamaran_taisho', name: '好麺 たまらん (Konomen Tamaran)', category: 'OMNI',
    lat: 34.666627, lng: 135.477846, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy and miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth; back fat; chashu.',
    hours_raw: 'Tue–Sun 11:30–14:00 and 18:30–23:00; closed Mon (Tabelog). One diner found it opened at 12:00 (October 2026). Cash only: no cards (Tabelog). Large noodles free; whether extra vegetables are free or ¥120 differs between the sign and the ticket machine (2025–2026).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sangenya-nishi 1-4-20 (Taisho-ku) — 233 m from Taisho Stn',
    cuisine: 'Lighter Jiro-style ramen · ramen ¥990: gentle, light broth for the style, thick easy-to-eat noodles, crisp quickly blanched vegetables, chashu, back fat piled on top if you ask · free large noodles; extra vegetables (free or ¥120) · garlic and back fat to order · spicy miso · Taiwanese mazesoba · tsukemen · 9 counter seats',
    website: null, gmaps: gm('好麺 たまらん 大正'), menu_url: null,
    notes: "[Ramen · a lighter Jiro-style ramen with crisp vegetables in Taisho] A small counter near Taisho Station, open since 2015, serving Jiro-style ramen that is gentler than the genre: the broth is light enough to finish, the thick noodles are easy to eat, and the vegetables are blanched for seconds so they stay crisp. The ramen (¥990) comes with free large noodles; call garlic and back fat as you like, and the back fat really gets piled on. One regular wished the garlic and chashu were bolder. Spicy miso is a good variation, and there are Taiwanese mazesoba and tsukemen. Staff are kind and attentive. One diner found it opened at noon, not 11:30. Cash only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 June 2015 (Tabelog)', background: 'Jiro-style ramen counter (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Jiro-style ramen.',
      anecdotes: [
        { text: '"The broth was surprisingly light and gentle for a Jiro-style ramen. I was able to finish it quite easily." — October 2026.', source: R + 'B537211292/' },
        { text: '"The vegetables are pre-packaged, quickly boiled for just a few seconds before serving… the noodles are not overly chewy but rather thick and easy to eat." — October 2026.', source: R + 'B538021791/' },
      ],
      japanese_sources_summary: '食べログ: 好麺 たまらん、大阪市大正区三軒家西1-4-20、大正から233m、火〜日 11:30〜14:00・18:30〜23:00、月休み、カード不可、9席、2015年6月16日開店。口コミ(2024年4月〜2026年10月): 麺かため、にんにく・野菜増し、にんにくがやや弱い、チャーシューは普通、二郎系、辛味噌、シャキシャキの野菜、終盤やや脂っこい、野菜増しあり、大盛り無料、ラーメン990円、野菜増し無料、あっさりなのにおいしい、店主が親切、台湾まぜそば、全部のせ、夜二郎、にんにく必須、二郎感が控えめ、スタッフが丁寧、900円台から、一定量までトッピング無料、二郎系にしては軽くやさしいスープ、看板は野菜大盛り無料だが券売機に野菜増し120円、11時半のはずが12時開店だったという声、背脂の山、数秒だけ茹でる野菜、太く食べやすい麺、カウンター約6席。',
      confidence: 'medium', sources: [TB, R + 'B484067860/', R + 'B527860627/', R + 'B536088566/', R + 'B536389763/', R + 'B537211292/', R + 'B538021791/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, easy-to-eat noodles; firmness to order; large free (2025–2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei', 'mazesoba_aburasoba', 'tsukemen'],
      signature_bowl: 'Ramen, ¥990 (May–September 2026).',
      chashu: 'Chashu, a typical amount (July 2026).',
      notable_toppings: ['crisp vegetables', 'back fat', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth; back fat.' },
      pantheon: 'Taisho\'s gentler Jiro bowl since 2015: crisp seconds-blanched vegetables and a broth you can finish.',
      profile: { richness: 3, oiliness: 4, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537211292/', '"Surprisingly light and gentle for a Jiro-style ramen" — mid-scale.'],
        oiliness: [R + 'B538021791/', '"…pile on the back fat as a finishing touch" — placed high.'],
        clarity: [R + 'B536088566/', 'Jiro-style pork broth — placed low.'],
        tare_strength: [R + 'B536088566/', '"The broth isn\'t overwhelmingly strong" — mid-scale.'],
        noodle_firmness: [R + 'B538021791/', '"Not overly chewy but rather thick and easy to eat" — mid-scale.'],
        aroma_punch: [R + 'B484067860/', '"The garlic flavor in the broth wasn\'t very strong" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537211292/', R + 'B538021791/', R + 'B484067860/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; kind, attentive staff (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市大正区三軒家西1-4-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市大正区三軒家西一丁目4番20号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527860627/', R + 'B536088566/', R + 'B537211292/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥990', 'Ramen', 'no', 'no', 'September 2026.', 'ramen'),
      it('', '', 'Extra vegetables', '¥0–120', 'Toppings', 'ask', 'ask', 'October 2026; sign and machine differ.', 'yasai'),
      it('', '', 'Spicy miso ramen', '', 'Ramen', 'no', 'no', 'June 2025.', 'kara_miso'),
      it('', '', 'Taiwanese mazesoba', '', 'Mazesoba', 'no', 'no', 'May 2026.', 'taiwan'),
    ] }, {
    cuisine: '軽めの二郎系ラーメン・ラーメン990円: 二郎系にしてはやさしく軽いスープ、太く食べやすい麺、数秒だけ茹でたシャキシャキの野菜、チャーシュー、頼めば山盛りの背脂・大盛り無料、野菜増し(無料か120円)・にんにくと背脂はお好みで・辛味噌・台湾まぜそば・つけ麺・カウンター9席',
    neighborhood: '大正区三軒家西1-4-20。大正駅から233m',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油と味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、チャーシュー。',
    notes: '[ラーメン・大正、シャキシャキ野菜の軽めの二郎系] 大正駅近くの小さなカウンターの店で、2015年開店、二郎系にしてはやさしい一杯: 飲み干せるほど軽いスープ、太く食べやすい麺、数秒だけ茹でてシャキシャキの野菜。ラーメン(990円)は大盛り無料、にんにくと背脂はお好みで、背脂は本当に山のように盛ってくれる。にんにくとチャーシューがもっと強くてもという常連の声も。辛味噌もおすすめで、台湾まぜそばとつけ麺も。スタッフは親切で丁寧。11時半の予定が12時に開いたという声。現金のみ、月曜休み。',
  });
}

save();
