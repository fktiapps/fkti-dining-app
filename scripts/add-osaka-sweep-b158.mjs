// Osaka sweep (2-mile circle around Dotonbori), batch 158 — ramen phase.
//   + 麺人 (old-style chicken shoyu "Horie Ramen", light broth, good chashu; Minami-Horie)
//   + がんばれ ホウライ (cozy chicken-paitan ramen and Chinese sides with drinks; Minami-Horie)
//   + 周記 蘭州牛肉面 難波本店 (hand-pulled Lanzhou beef noodles, eight noodle widths, lamb skewers; Namba-naka) — cuisine 'other', no ramen block, as for osaka_gyuu_isshi_lanzhou
//   Skipped 甘蘭牛肉麺 日本橋本店 27118244: Tabelog shows it temporarily closed.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 158);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27118244', 'Tabelog listing marked temporarily closed (checked 2026-10-29); revisit later.');

// ================================================================ 麺人
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27073994/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '14:45'], ['17:30', '23:50']); const SUN = day(['11:30', '14:45'], ['17:30', '22:45']);
  put({
    id: 'osaka_men_chu_minamihorie', name: '麺人 (Men Chu)', category: 'OMNI',
    lat: 34.671805, lng: 135.488589, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth; chashu.',
    hours_raw: 'Tue–Sat 11:30–14:45 and 17:30–23:50; Sun 11:30–14:45 and 17:30–22:45; closed Mon (Tabelog). Cash only; the ticket machine takes ¥1,000 notes (October 2025). Smoking allowed (Tabelog).',
    hours: { 1: A, 2: A, 3: A, 4: A, 5: A, 6: SUN }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Minami-Horie 3-9-21 — 5 min from Sakuragawa or Nishi-Nagahori Stn',
    cuisine: 'Old-style chicken shoyu ramen · Horie Ramen ¥930 (large +¥150) · chicken shoyu ramen ¥770 with chashu, menma, bean sprouts and white negi · small fried rice ¥420 · white-negi topping · 14 seats: 6 at the counter, two tables',
    website: null, gmaps: gm('麺人'), menu_url: null,
    notes: "[Ramen · an old-style chicken shoyu shop, Minami-Horie] A quiet neighborhood ramen shop in western Minami-Horie with warm, attentive staff. The bowls are light and old-fashioned: a chicken shoyu broth that tastes mild at first and deepens as the tare at the bottom mixes in, medium-thin straight noodles, and tender, well-marinated chashu and good menma, which even diners who found the soup lacking praise. The Horie Ramen (¥930) is the house bowl, and a small fried rice (¥420) makes a cheap set. Reviews are split on the broth, so come for something gentle. Open late; closed Mondays. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Chicken shoyu ramen.',
      anecdotes: [
        { text: '"At first sip, the broth seemed a bit light, but as I continued eating, the flavor intensified. This was likely due to the tare that had settled at the bottom of the bowl mixing in." — July 2026, chicken shoyu ramen ¥770.', source: R + 'B532483879/' },
        { text: '"The chashu was tender and well-marinated, making it delicious." — September 2026, Horie Ramen.', source: R + 'B536499476/' },
      ],
      japanese_sources_summary: '食べログ: 麺人、大阪市西区南堀江3-9-21、桜川駅・西長堀駅から5分、火〜土 11:30〜14:45・17:30〜23:50、日 11:30〜14:45・17:30〜22:45、月曜休み、カード不可、喫煙可、14席 (カウンター6、4名テーブル2)。口コミ(2025年10月〜2026年9月): 昔ながらのあっさりした鶏の醤油ラーメン、堀江ラーメン930円 (大盛り+150円)、鶏醤油ラーメン770円 (チャーシュー、メンマ、もやし、白ねぎ)、小チャーハン420円、白ねぎのトッピング、券売機は千円札、中細のストレート麺、底のたれで後半に味が濃くなる、チャーシューとメンマは好評、スープは物足りないという声も、あたたかい接客。',
      confidence: 'medium', sources: [TB, R + 'B515423252/', R + 'B518269950/', R + 'B532483879/', R + 'B533667239/', R + 'B534181592/', R + 'B536499476/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles; large +¥150 (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Horie Ramen, ¥930 (October 2025).',
      chashu: 'Tender, well-marinated chashu, singled out even by diners who found the soup light (2025–2026).',
      notable_toppings: ['menma', 'bean sprouts', 'white negi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Minami-Horie\'s gentle old-style chicken shoyu, carried by its chashu.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 1 },
      profile_basis: {
        richness: [R + 'B518269950/', '"The flavor was simple and light, reminiscent of traditional tastes" — low.'],
        oiliness: [R + 'B533667239/', '"a very gentle flavor" — low.'],
        clarity: [R + 'B532483879/', 'A chicken-based shoyu "a bit light" at first — placed high.'],
        tare_strength: [R + 'B532483879/', '"the flavor intensified… due to the tare that had settled at the bottom" — mid-scale.'],
        noodle_firmness: [R + 'B532483879/', '"the noodles were medium-thin and straight" — mid-scale (no firmness stated).'],
        aroma_punch: [R + 'B532483879/', '"I didn\'t quite get the rich flavor and aroma of the chicken" — bottom of scale.'],
      },
      confidence: 'medium', sources: [R + 'B532483879/', R + 'B518269950/', R + 'B536499476/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; warm staff (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江3-9-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江三丁目9番21号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515423252/', R + 'B532483879/'],
    price_note: 'Prices from October 2025 and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Horie Ramen', '¥930', 'Ramen', 'no', 'no', 'October 2025; large +¥150.', 'horie'),
      it('', '', 'Chicken shoyu ramen', '¥770', 'Ramen', 'no', 'no', 'July 2026.', 'shoyu'),
      it('', '', 'Small fried rice', '¥420', 'Sides', 'ask', 'no', 'July 2026.', 'chahan'),
    ] }, {
    cuisine: '昔ながらの鶏の醤油ラーメン・堀江ラーメン930円 (大盛り+150円)・チャーシュー、メンマ、もやし、白ねぎの鶏醤油ラーメン770円・小チャーハン420円・白ねぎのトッピング・14席: カウンター6席、テーブル2卓',
    neighborhood: '西区南堀江3-9-21。桜川駅・西長堀駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、チャーシュー。',
    notes: '[ラーメン・南堀江、昔ながらの鶏の醤油ラーメン] 南堀江の西寄りにある静かな町のラーメン店で、店の人はあたたかくていねい。一杯は軽く昔風で、鶏の醤油スープは最初はおだやか、底のたれが混ざるにつれて深くなり、中細のストレート麺に、やわらかくよく味のしみたチャーシューとおいしいメンマ。スープが物足りないという人もチャーシューとメンマはほめる。看板は堀江ラーメン (930円)、小チャーハン (420円) をつけても手ごろ。スープの評価は分かれるので、やさしい一杯を求めて。夜遅くまで、月曜休み。現金のみ。',
  });
}

// ================================================================ がんばれ ホウライ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27113754/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['17:00', '21:00']); const D = day(['17:00', '23:59']);
  put({
    id: 'osaka_ganbare_hourai_minamihorie', name: 'がんばれ ホウライ (Ganbare Hourai)', category: 'OMNI',
    lat: 34.671996, lng: 135.49043, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan broth; chashu.',
    hours_raw: 'Tabelog lists Mon 17:00–21:00 and Tue–Sun 17:00–24:00 with irregular closings, but 2026 reviews describe lunch visits and all-day service — check before going. No cards; QR accepted (Tabelog). Ashtrays on the counter and tables; smoking allowed (April 2026).',
    hours: { 0: MON, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Horie 2-11-20, facing Takadaibashi Park — near Sakuragawa Stn',
    cuisine: 'Chicken paitan ramen and Chinese sides · shio or shoyu chicken paitan with a seasoned egg as standard; half size ¥800 · thick homemade chashu, chopped onion and fried garlic · menma topping ¥200 · dan dan noodles; Taiwanese mazesoba · small fried rice ¥350; gyoza; Chama Mayo Don · plenty of drinks and small dishes',
    website: null, gmaps: gm('がんばれ ホウライ'), menu_url: null,
    notes: "[Ramen · a cozy chicken-paitan ramen and Chinese-food spot, Minami-Horie] A café-like ramen and Chinese-food shop facing Takadaibashi Park; one diner has ordered takeout from it for years. The chicken paitan comes in shio or shoyu, rich but not heavy, with a seasoned egg included at no charge, thick melt-in-the-mouth chashu, chopped onion and fried garlic. Pair a half bowl (¥800) with the fluffy small fried rice (¥350) for a cheap loop of rice, soup and chashu. There are also dan dan noodles, Taiwanese mazesoba, gyoza and a long drinks list. Smoking allowed. Hours vary; check before going.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ramen and Chinese restaurant (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Chicken paitan ramen; fried rice.',
      anecdotes: [
        { text: '"The creamy richness of the paitan broth perfectly complements the savory aroma of the soy sauce. It\'s rich yet not too heavy…" — June 2026, half Shoyu Paitan Ramen ¥800.', source: R + 'B530246664/' },
        { text: '"What\'s interesting is that this place includes a flavored egg as a default, rather than as a paid option." — January 2026, salt chicken paitan ramen.', source: R + 'B520822281/' },
      ],
      japanese_sources_summary: '食べログ: がんばれ ホウライ、大阪市西区南堀江2-11-20、桜川駅から409m、月 17:00〜21:00、火〜日 17:00〜24:00、不定休、カード・電子マネー不可、QR可、喫煙スペースあり。口コミ(2025年10月〜2026年7月): 高台橋公園の前、カフェのような店内、昼も通しで営業という声、塩か醤油の鶏白湯ラーメン (味玉が最初からつく)、半分のサイズ800円、厚く自家製のチャーシュー、刻み玉ねぎとフライドガーリック、メンマのトッピング200円、担々麺、台湾まぜそば、小チャーハン350円、餃子、Chama Mayo Don、お酒と一品料理が多い、カウンターとテーブルに灰皿、持ち帰りも。',
      confidence: 'medium', sources: [TB, R + 'B520309678/', R + 'B520822281/', R + 'B524493249/', R + 'B527032451/', R + 'B530246664/', R + 'B530344800/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles, firm; large and half sizes (2025–2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'tantanmen', 'mazesoba_aburasoba'],
      signature_bowl: 'Shio or shoyu chicken paitan with seasoned egg (2026).',
      chashu: 'Thick homemade chashu, melt-in-the-mouth (June 2026).',
      notable_toppings: ['seasoned egg', 'chopped onion', 'fried garlic', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Minami-Horie\'s parkside chicken paitan, egg included, best with the small fried rice.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B520309678/', '"a bit lighter compared to other chicken paitan, but I could still really taste the rich flavor of the chicken" — mid-scale.'],
        oiliness: [R + 'B520822281/', '"The broth is light but not weak" — low.'],
        clarity: [R + 'B530246664/', '"The creamy richness of the paitan broth" — placed low.'],
        tare_strength: [R + 'B524493249/', '"a perfect balance of sweetness and saltiness" — mid-scale.'],
        noodle_firmness: [R + 'B524493249/', '"the noodles were firm and satisfying!" — placed high.'],
        aroma_punch: [R + 'B530246664/', '"The chopped onions and fried garlic add a wonderful touch" — low-mid.'],
      },
      confidence: 'medium', sources: [R + 'B530246664/', R + 'B520822281/', R + 'B524493249/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Café-like room; smoking allowed (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江2-11-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江二丁目11番20号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530246664/'],
    price_note: 'Prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Shoyu chicken paitan ramen, half size', '¥800', 'Ramen', 'no', 'no', 'June 2026; egg included.', 'shoyu_half'),
      it('', '', 'Shio chicken paitan ramen', '', 'Ramen', 'no', 'no', 'January 2026.', 'shio'),
      it('', '', 'Small fried rice', '¥350', 'Sides', 'ask', 'no', 'June 2026.', 'chahan'),
      it('', '', 'Menma topping', '¥200', 'Toppings', 'ask', 'ask', 'June 2026.', 'menma'),
    ] }, {
    cuisine: '鶏白湯ラーメンと中華の一品・塩か醤油の鶏白湯、味玉は最初からつく、半分のサイズ800円・厚い自家製チャーシュー、刻み玉ねぎ、フライドガーリック・メンマのトッピング200円・担々麺、台湾まぜそば・小チャーハン350円、餃子、Chama Mayo Don・お酒と一品料理がたくさん',
    neighborhood: '西区南堀江2-11-20、高台橋公園の前。桜川駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯のスープ、チャーシュー。',
    notes: '[ラーメン・南堀江、公園前の居心地のいい鶏白湯と中華の店] 高台橋公園の前にある、カフェのようなラーメンと中華の店で、何年も持ち帰りで利用しているという声も。鶏白湯は塩か醤油で、濃いのに重くなく、味玉が最初からつき、とろける厚いチャーシュー、刻み玉ねぎとフライドガーリック。半分のサイズ (800円) にふわふわの小チャーハン (350円) を合わせれば、ご飯とスープとチャーシューの往復が安く楽しめる。担々麺、台湾まぜそば、餃子、お酒も豊富。喫煙可。営業時間は変わるので事前に確認を。',
  });
}

// ================================================================ 周記 蘭州牛肉面 難波本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27104331/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_shuki_lanzhou_namba', name: '周記 蘭州牛肉面 難波本店 (Shuki Ranshu Gyuniku Men Namba honten)', category: 'OMNI',
    lat: 34.659792, lng: 135.498269, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hand-pulled wheat noodles; fried buns; soy-based stir-fries.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth; lamb and beef dishes.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:40) and 17:00–22:00 (last order 21:30); open year-round (Tabelog). No cards or e-money (Tabelog); QR-code ordering (May 2026). Smoking seats 28, non-smoking 14 (Tabelog). Reopened in a former bakery in April 2018 (May 2018 review).',
    hours: ALL(day(['11:00', '15:00'], ['17:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-naka 3-16-12, at the Motomachi 3-chome crossing — 4 min from Daikokucho Stn exit 1; 8 min from Nankai Namba',
    cuisine: 'Lanzhou beef noodles and Chinese dishes · hand-pulled Lanzhou beef noodles in a spiced beef-bone broth with chili oil and cilantro; eight noodle widths from thin to broad; egg topping · Set A ¥1,200 with small dishes (e.g. tofu, shredded egg, potato salad) · sour and spicy vermicelli · lamb skewers (from two) · lamb stir-fried with cumin set ¥980; beef with green peppers set · sliced fried buns; japchae; shiratama dango · 42 seats',
    website: null, gmaps: gm('周記 蘭州牛肉面 難波本店'), menu_url: null,
    notes: "[Lanzhou noodles · hand-pulled Lanzhou beef noodles and lamb skewers, Namba-naka] A big, no-frills Chinese noodle house between Namba and Daikokucho. The draw is hand-pulled Lanzhou beef noodles in a light, spiced beef-bone broth finished with chili oil and cilantro, with your pick of eight noodle widths, chewy almost like udon at the wide end; Set A (¥1,200) adds small side dishes. Add cumin-spiced lamb skewers, or try the sour-and-spicy vermicelli and a cheap lamb-with-cumin set. Splash in the table vinegar halfway. Open every day. Ask for the non-smoking section.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened in April 2018 in a former bakery (May 2018 review).', background: 'Lanzhou noodle and Chinese restaurant (Tabelog; 2018–2026 reviews).', philosophy: null, specialty: 'Hand-pulled Lanzhou beef noodles.',
      anecdotes: [
        { text: '"The noodles are hand-pulled, offering a delightful chewy texture. The broth is made by simmering beef bones, spices, and herbs…" — May 2026.', source: R + 'B533702435/' },
        { text: '"There were eight different noodle thicknesses to choose from, and I went with the thin noodles." — March 2026, Set A ¥1,200.', source: R + 'B525839219/' },
      ],
      japanese_sources_summary: '食べログ: 周記 蘭州牛肉面 難波本店、大阪市浪速区難波中3-16-12、大国町駅1番出口から徒歩4分、南海なんば駅5番出口から8分、毎日11:00〜15:00 (L.O. 14:40)・17:00〜22:00 (L.O. 21:30)、年中無休、カード・電子マネー不可、42席 (喫煙28、禁煙14)。口コミ(2018年5月〜2026年6月): 元町3丁目の交差点、2018年4月にパン屋の跡に開店、手延べの蘭州牛肉麺 (牛骨とスパイスのスープ、ラー油、パクチー)、麺の太さは8種、卵のトッピング、A セット1,200円 (豆腐、錦糸卵、ポテトサラダなどの小皿)、酸っぱくて辛い春雨、羊の串焼き (2本から)、羊肉のクミン炒め定食980円、牛肉とピーマンの炒め定食、揚げパン、チャプチェ、shiratama an dango、QR で注文、酢を足すとおいしいという声。',
      confidence: 'medium', sources: [TB, R + 'B349310871/', R + 'B520100853/', R + 'B521665424/', R + 'B525839219/', R + 'B529422435/', R + 'B533702435/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; pick your noodle width (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-16-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目16番12号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525839219/', R + 'B349310871/'],
    price_note: 'Prices from April 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lanzhou beef noodles, Set A with small dishes', '¥1,200', 'Noodles', 'no', 'no', 'March 2026.', 'set_a'),
      it('', '', 'Sour and spicy vermicelli', '', 'Noodles', 'ask', 'no', 'May 2026.', 'vermicelli'),
      it('', '', 'Lamb skewers (from two)', '', 'Skewers', 'ask', 'no', 'January–May 2026.', 'lamb'),
      it('', '', 'Lamb stir-fried with cumin set', '¥980', 'Sets', 'ask', 'no', 'April 2025.', 'cumin'),
    ] }, {
    cuisine: '蘭州牛肉麺と中華・牛骨とスパイスのスープにラー油とパクチーの手延べの蘭州牛肉麺、麺は細麺から幅広まで8種、卵のトッピング・小皿 (豆腐、錦糸卵、ポテトサラダなど) つきの A セット1,200円・酸っぱくて辛い春雨・羊の串焼き (2本から)・羊肉のクミン炒め定食980円、牛肉とピーマンの炒め定食・揚げパン、チャプチェ、shiratama an dango・42席',
    neighborhood: '浪速区難波中3-16-12、元町3丁目の交差点。大国町駅1番出口から徒歩4分、南海なんばから8分',
    gf_detail: 'グルテンフリーではありません。小麦の手延べ麺、揚げパン、醤油の炒め物。',
    vegan_detail: 'ヴィーガンではありません。牛骨のスープ、羊肉と牛肉の料理。',
    notes: '[蘭州牛肉麺・難波中、手延べの蘭州牛肉麺と羊の串焼き] なんばと大国町のあいだにある、飾り気のない大きな中華の麺の店。目当ては手延べの蘭州牛肉麺で、スパイスの効いた軽い牛骨のスープにラー油とパクチー、麺は8種の太さから選べ、幅広はうどんのようなもちもち感。A セット (1,200円) なら小皿もつく。クミンの効いた羊の串焼きを足したり、酸っぱくて辛い春雨や手ごろな羊肉のクミン炒め定食も。途中で卓上の酢を足して。年中無休。禁煙席を頼んで。',
  });
}

save();
