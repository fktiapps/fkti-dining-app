// Osaka sweep (2-mile circle around Dotonbori), batch 16 — ramen phase, nearest first (all OMNI).
//   + ラーメン河縁 (24 h tonkotsu in the old Daikichi Ramen spot, Sōemonchō; free kimchi)
//   + 金龍ラーメン 戎橋店 (Kinryu by Ebisubashi: two-item menu, free rice, kimchi, chives, garlic)
//   + こうてい麺 大ちゃん (light chicken shio ramen in a Shinsaibashi back alley, 18:00–6:00)
//   + どうとんぼり神座 戎橋店 (67-seat Kamukura by NGK; touch-panel ordering)
// Skipped: 牛門 大阪 心斎橋店 27154211 and 帆のるぐらんで心斎橋 27145915 (0 reviews each).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 16);

skip('27154211', 'Tabelog listing with 0 reviews; nothing to describe.');
skip('27145915', 'Tabelog listing with 0 reviews; nothing to describe.');
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ ラーメン河縁
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27153687/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_kawaen_soemoncho', name: 'ラーメン河縁 (Ramen Kawaen)', category: 'OMNI',
    lat: 34.669275, lng: 135.504672, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu.',
    hours_raw: 'Open 24 hours (Tabelog). Ticket machine. Cards, e-money and QR accepted (Tabelog). Free kimchi with every order (2026 reviews).',
    hours: ALL(day(['00:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sōemonchō 3-5, where Daikichi Ramen used to be — 3 min from Nippombashi Stn',
    cuisine: 'Tonkotsu ramen ¥980 with three chashu and half an egg · special ramen ~¥1,000 · spicy Sichuan tonkotsu · miso · tsukemen · negi ramen ¥1,080 · ramen and kara-age set ¥1,400 · gyoza ¥450, fried rice ¥600 · free kimchi · 24 h',
    website: null, gmaps: gm('ラーメン河縁 宗右衛門町'), menu_url: null,
    notes: "[Ramen · a new 24-hour tonkotsu in Sōemonchō] Opened in December 2025 in the old Daikichi Ramen spot in Sōemonchō, with a bright sign that is welcome at 4:30 am. The tonkotsu ramen (¥980, April 2026) comes with three slices of chashu and half an egg over thin noodles, rich but not heavy. The special ramen adds wood ear and bean sprouts, and a spicy Sichuan version builds slowly. There's also a miso version that tastes like miso tonkotsu, and a glossy, medium-thin tsukemen whose dip one diner wanted richer. Free kimchi arrives as soon as you order, and stirring it into the bowl is the move. Sides are cheap and good: fluffy chashu fried rice (¥600), gyoza (¥450), kara-age sets. Buy a ticket at the machine.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 December 2025 (Tabelog), in the former Daikichi Ramen premises (July 2026 review)', background: 'No source names the operator.', philosophy: null, specialty: 'Tonkotsu ramen; free kimchi.',
      anecdotes: [
        { text: '"After placing my order, I was pleasantly surprised to receive complimentary kimchi right away." — July 2026, tsukemen.', source: R + 'B531387194/' },
        { text: '"The Sichuan ramen has a pork bone base with a spicy kick that\'s both creamy and gradually builds up in heat… the special ramen, which had a mild yet refreshing pork bone flavor." — September 2026, 4:30 am.', source: R + 'B536212024/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン河縁、大阪市中央区宗右衛門町3-5、24時間営業、禁煙、カード・電子マネー・QR決済可、2025年12月6日開店。2026年の口コミ(4〜9月): 豚骨ラーメン980円(チャーシュー3枚と半熟玉子)、替玉無料(期間限定)、日本橋駅近く、テーブルとカウンター、味噌ラーメンは豚骨の味噌版、券売機、セットメニュー、旧大吉ラーメンの場所、注文するとキムチが無料、つけ麺(中細ストレート麺、つけ汁はもう少し濃くてもという声)、特製ラーメンと唐揚げのセット1,400円、ねぎラーメン1,080円、焼き餃子450円、炒飯600円、チャーシュー丼600円、濃厚だが重くない、ねぎたっぷり、朝4時半、四川ラーメン(辛くてクリーミー)、特製ラーメン約1,000円(味玉、チャーシュー、もやし、きくらげ)、チャーシュー入りのふわふわ炒飯。',
      confidence: 'medium', sources: [TB, R + 'B531387194/', R + 'B536212024/', R + 'B526421178/', R + 'B535201267/', R + 'B528919193/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles in the ramen; medium-thin straight in the tsukemen (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Tonkotsu ramen ¥980 with three chashu and half an egg (April 2026).',
      chashu: 'Three slices, tender (2026).',
      notable_toppings: ['free kimchi', 'half egg', 'wood ear (special)', 'bean sprouts (special)', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu.' },
      pantheon: 'Sōemonchō\'s round-the-clock tonkotsu in the old Daikichi spot: rich-not-heavy pork bone with free kimchi to stir in.',
      profile: { richness: 3, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535201267/', '"The rich tonkotsu broth was flavorful without being too heavy!"'],
        oiliness: [R + 'B536212024/', '"A mild yet refreshing pork bone flavor" (special) — placed low (inferred).'],
        clarity: [R + 'B535201267/', 'Tonkotsu broth — opaque (inferred).'],
        tare_strength: [R + 'B535201267/', 'Seasoning not described — mid-scale (inferred).'],
        noodle_firmness: [R + 'B531387194/', 'Noodles easy to slurp; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B536212024/', 'The Sichuan version "gradually builds up in heat"; free kimchi changes the flavour (' + R + 'B535201267/).'],
      },
      confidence: 'low', sources: [R + 'B535201267/', R + 'B536212024/', R + 'B531387194/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; open all night.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町3-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町3番5号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535201267/', R + 'B526421178/'],
    price_note: 'Prices from April and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen (three chashu, half egg)', '¥980', 'Ramen', 'no', 'no', 'April 2026.', 'tonkotsu'),
      it('', '', 'Negi ramen', '¥1,080', 'Ramen', 'no', 'no', 'September 2026.', 'negi'),
      it('', '', 'Special ramen and kara-age set', '¥1,400', 'Sets', 'no', 'no', 'September 2026.', 'special_set'),
      it('', '', 'Sichuan ramen (spicy tonkotsu)', '', 'Ramen', 'no', 'no', 'September 2026.', 'sichuan'),
      it('', '', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'July–September 2026.', 'tsukemen'),
      it('替玉', 'kaedama', 'Extra noodles (free, limited time)', '', 'Extras', 'no', 'no', 'April 2026.', 'kaedama'),
      it('', '', 'Grilled gyoza', '¥450', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
      it('', '', 'Fried rice', '¥600', 'Rice', 'no', 'no', 'September 2026.', 'chahan'),
    ] }, {
    cuisine: '豚骨ラーメン980円(チャーシュー3枚と半熟玉子)・特製ラーメン約1,000円・辛い四川豚骨・味噌・つけ麺・ねぎラーメン1,080円・ラーメンと唐揚げのセット1,400円・餃子450円、炒飯600円・キムチ無料・24時間',
    neighborhood: '宗右衛門町3-5、旧大吉ラーメンの場所。日本橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・宗右衛門町の新しい24時間の豚骨] 2025年12月、宗右衛門町の旧大吉ラーメンの場所に開店し、朝4時半でも明るい看板がありがたい店。豚骨ラーメン(2026年4月で980円)はチャーシュー3枚と半熟玉子が細麺にのり、濃厚でも重くありません。特製はきくらげともやし入り、辛い四川はじわじわ辛さが増します。豚骨の味噌版のような味噌や、つけ汁をもう少し濃くしてほしいという声もある艶のある中細麺のつけ麺も。注文するとすぐ無料のキムチが出てくるので、丼に入れるのがおすすめ。サイドも安くおいしく、チャーシュー入りのふわふわ炒飯(600円)、餃子(450円)、唐揚げのセット。券売機で食券を。',
  });
}

// ================================================================ 金龍ラーメン 戎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27050945/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kinryu_ramen_ebisubashi', name: '金龍ラーメン 戎橋店 (Kinryu Ramen Ebisubashi)', category: 'OMNI',
    lat: 34.666432, lng: 135.501838, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Daily 9:00–22:00 (Tabelog). Ticket machine, then a number tag. Cash only; smoking allowed (Tabelog).',
    hours: ALL(day(['09:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 3-3, just off the Ebisubashi-suji shopping street — 3 min from Namba Stn',
    cuisine: 'Kinryu\'s two-item menu: ramen ¥900 or chashu ramen · gentle, cloudy pork-bone broth · straight medium-thin noodles · unlimited free rice, kimchi, spicy garlic chives and chopped garlic · tatami-covered chairs · table seating',
    website: null, gmaps: gm('金龍ラーメン 戎橋店'), menu_url: null,
    notes: "[Ramen · Kinryu off Ebisubashi-suji, with free rice] The Ebisubashi branch of the dragon-sign chain, just off the shopping street. The menu is just ramen (¥900 in October 2026, ¥800 in 2025) or chashu ramen. Buy a ticket, swap it for a number tag, and help yourself at the self-service counter: unlimited white rice, kimchi, spicy garlic chives and chopped garlic. The broth is a gentle, cloudy pork bone that goes down easily after drinking, over straight medium-thin noodles with three thin slices of chashu. It becomes \"your style\" once loaded with garlic. The tatami-covered chairs are a Kinryu signature. Some find the rice soft. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ebisubashi branch (Tabelog listing name)', background: 'Kinryu Ramen chain.', philosophy: null, specialty: 'Light tonkotsu with free kimchi, chives, garlic and rice.',
      anecdotes: [
        { text: '"It\'s a pork bone broth, but on the lighter side—\'gentle pork bone\'. Despite being cloudy, it\'s not heavy at all. It goes down smoothly even after drinking." — October 2026, chashu ramen.', source: R + 'B524281939/' },
        { text: '"Ramen JPY 900… Unlimited free white rice! Unlimited free garlic chive kimchi! Unlimited free napa cabbage kimchi!" — October 2026.', source: R + 'B515817750/' },
      ],
      japanese_sources_summary: '食べログ: 金龍ラーメン 戎橋店、大阪市中央区難波3-3、毎日9:00〜22:00、カード・電子マネー・QR決済不可、喫煙可。口コミ(2025年10月〜2026年10月): ラーメン900円(2025年は800円)、チャーシューたっぷり、白ご飯・ニラキムチ・白菜キムチ食べ放題、麺かため、畳の生地の椅子、券売機はラーメンとチャーシューメンの2つだけ、にんにく(刻み)・キムチ・辛いニラ・ご飯の4つが無料、やさしい豚骨、濁っているが重くない、中細ストレート麺、薄切りのチャーシュー、食券を番号札に替える、阪神優勝セールで700円の日も、テーブル席のみ、ご飯がやわらかめとの声、チャーシュー3枚、セルフの水。',
      confidence: 'medium', sources: [TB, R + 'B524281939/', R + 'B515817750/', R + 'B536848571/', R + 'B536830626/', R + 'B537506086/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Straight, medium-thin noodles; firm on request (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ramen ¥900; chashu ramen (October 2026).',
      chashu: 'Thin slices with moderate fat; three on the plain ramen (October 2026).',
      notable_toppings: ['free kimchi', 'free spicy garlic chives', 'free chopped garlic', 'free rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Kinryu by Ebisubashi: a gentle, cloudy pork bone made your own with free garlic, chives, kimchi and rice.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B524281939/', '"On the lighter side—\'gentle pork bone\'."'],
        oiliness: [R + 'B524281939/', '"Despite being cloudy, it\'s not heavy at all."'],
        clarity: [R + 'B524281939/', '"Despite being cloudy" — not clear.'],
        tare_strength: [R + 'B536830626/', '"It had a strong punch" — mid-scale.'],
        noodle_firmness: [R + 'B515817750/', 'Firm noodles can be requested (October 2025).'],
        aroma_punch: [R + 'B524281939/', '"Adding a generous amount of garlic made the ramen suddenly \'my style\'!"'],
      },
      confidence: 'medium', sources: [R + 'B524281939/', R + 'B515817750/', R + 'B536830626/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket and number tag; self-service toppings and water; cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目3番 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515817750/', R + 'B524281939/'],
    price_note: 'Price from an October 2026 review (¥800 in 2025).', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('チャーシューメン', 'chāshū-men', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'chashumen'),
      it('', '', 'Free rice, kimchi, garlic chives and garlic', '', 'Free', 'ask', 'ask', 'October 2026.', 'free_toppings'),
    ] }, {
    cuisine: '金龍の2品だけのメニュー: ラーメン900円かチャーシューメン・やさしく濁った豚骨・中細ストレート麺・ご飯、キムチ、辛いニラ、刻みにんにくが無料で食べ放題・畳の生地の椅子・テーブル席',
    neighborhood: '難波3-3、戎橋筋商店街からすぐ。なんば駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・戎橋筋の金龍、ご飯無料] 商店街からすぐの、龍の看板の金龍の戎橋店。メニューはラーメン(2026年10月で900円、2025年は800円)とチャーシューメンだけ。食券を買って番号札に替え、セルフのカウンターで白ご飯、キムチ、辛いニラ、刻みにんにくを好きなだけ。スープはやさしく濁った豚骨で飲んだ後でもするする入り、中細ストレート麺に薄切りのチャーシューが3枚。にんにくをたっぷり入れると「自分好み」に。畳の生地の椅子は金龍らしさ。ご飯がやわらかめという声も。現金のみ。',
  });
}

// ================================================================ こうてい麺 大ちゃん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27010405/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '06:00']);
  put({
    id: 'osaka_kotei_men_daichan_shinsaibashi', name: 'こうてい麺 大ちゃん (Kotei Men Daichan)', category: 'OMNI',
    lat: 34.671615, lng: 135.502205, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone broth, chashu.',
    hours_raw: 'Mon–Sat 18:00–6:00, until sold out; closed Sundays (Tabelog). Tabelog lists AMEX, but a September 2026 reviewer says cash only. Smoking allowed (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: [] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-1-3, down a back alley in the Shinsaibashi drinking district',
    cuisine: 'Light, clear chicken-bone shio ramen · butter and seasoned-egg toppings · slightly curly medium-thick noodles · mizuna and green onion · shoyu ramen · chashu don with an eel-sauce-like sweetness · cabbage-sweet gyoza · counter, open to 6 am',
    website: null, gmaps: gm('こうてい麺 大ちゃん 心斎橋'), menu_url: null,
    notes: "[Ramen · a back-alley shio counter in Shinsaibashi, to 6 am] A long-running counter shop down an alley in Shinsaibashi's drinking district (one diner returned after 20 years), open from 6 pm until 6 am or sell-out. The order is the shio ramen: a light, clear chicken-bone broth with a gentle salt tare, slightly curly medium-thick noodles, mizuna and green onion. Melted butter or a seasoned egg rounds it out. The chashu don is sweet like eel sauce, a nice contrast, and the gyoza are sweet with cabbage. Opinions vary: some find it plain, and one reviewer thought the shoyu lacked character despite the media stickers. There is also a Daichan in Namba. Smoking allowed. Cash may be needed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashi back alley (Tabelog)', background: 'A reviewer notes "a Daichan in Namba and another in Shinsaibashi" (October 2025); no source names the owner.', philosophy: null, specialty: 'Chicken shio ramen.',
      anecdotes: [
        { text: '"The broth seems to be made from chicken bones, combined with a gentle salt tare, resulting in a light and clear soup. The noodles are slightly curly and medium-thick… Adding the melted butter enhances the richness." — April 2026, first visit in about 20 years.', source: R + 'B525913706/' },
        { text: '"The \'Chashu Don\' is richly flavored with a sweetness and depth reminiscent of eel sauce. The contrast with the light Sio Ramen is intriguing." — October 2025.', source: R + 'B514430547/' },
      ],
      japanese_sources_summary: '食べログ: こうてい麺 大ちゃん、大阪市中央区心斎橋筋2-1-3、カウンターのみ、月〜土18:00〜翌6:00(売り切れ次第終了)、日曜定休、喫煙可、カード可(AMEX)と記載。口コミ(2025年9月〜2026年9月): 塩ラーメンは普通という声、心斎橋の隠れた人気店、深夜の締めに、あっさり澄んだ塩、チャーシュー丼は鰻のたれのような甘さ、キャベツの甘みの餃子、路地にあり見つけにくい、なんばと心斎橋に大ちゃん、20年ぶり、鶏ガラとやさしい塩だれ、やや縮れた中太麺、バター、味玉、水菜とねぎ、醤油ラーメンは個性がないという声、メディアのステッカー、現金のみとの声(2026年9月)。',
      confidence: 'medium', sources: [TB, R + 'B525913706/', R + 'B514430547/', R + 'B515188571/', R + 'B535597209/', R + 'B534815397/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'curly', hydration: null, handmade: false, notes: 'Slightly curly, medium-thick noodles (April 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shio ramen, with butter and seasoned egg (April 2026).',
      chashu: 'Meaty, with a nice chew (April 2026); two thin slices on the shoyu (September 2026).',
      notable_toppings: ['butter', 'seasoned egg', 'mizuna', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-bone broth.' },
      pantheon: 'Shinsaibashi\'s back-alley night shift: a clear, gentle chicken shio on curly noodles, butter melting in, until 6 am.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B514430547/', '"A very light and clear broth… It has no heaviness at all."'],
        oiliness: [R + 'B525913706/', 'Light broth; butter adds richness on request — placed low.'],
        clarity: [R + 'B525913706/', '"A light and clear soup."'],
        tare_strength: [R + 'B525913706/', '"A gentle salt tare."'],
        noodle_firmness: [R + 'B525913706/', 'Slightly curly medium-thick noodles; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B514286511/', '"The flavor was quite average" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B525913706/', R + 'B514430547/', R + 'B514286511/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter in an alley; smoking allowed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-1-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目1番3号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525913706/', R + 'B514430547/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen', '', 'Ramen', 'no', 'no', '2025–2026.', 'shio'),
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu'),
      it('', '', 'Chashu don', '', 'Rice', 'no', 'no', 'October 2025.', 'chashu_don'),
      it('', '', 'Grilled gyoza', '', 'Sides', 'no', 'no', 'October 2025.', 'gyoza'),
    ] }, {
    cuisine: 'あっさり澄んだ鶏ガラの塩ラーメン・バターや味玉のトッピング・やや縮れた中太麺・水菜とねぎ・醤油ラーメン・鰻のたれのような甘さのチャーシュー丼・キャベツの甘みの餃子・カウンター、朝6時まで',
    neighborhood: '心斎橋筋2-1-3、心斎橋の飲み屋街の路地',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラのスープ、チャーシュー。',
    notes: '[ラーメン・心斎橋の路地裏の塩、朝6時まで] 心斎橋の飲み屋街の路地にある長く続くカウンターの店(20年ぶりに訪れた客も)で、夕方6時から朝6時か売り切れまで。頼むなら塩ラーメンで、鶏ガラにやさしい塩だれのあっさり澄んだスープ、やや縮れた中太麺、水菜とねぎ。溶かしたバターや味玉でまろやかに。チャーシュー丼は鰻のたれのような甘さで良い対比になり、餃子はキャベツの甘み。評価は分かれ、普通だという声や、メディアのステッカーのわりに醤油は個性がないという声も。なんばにも大ちゃんがあります。喫煙可。現金が必要なことも。',
  });
}

// ================================================================ どうとんぼり神座 戎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27143120/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['09:00', '23:30']), we = day(['00:00', '01:00'], ['09:00', '23:30']);
  put({
    id: 'osaka_kamukura_ebisubashi', name: 'どうとんぼり神座 戎橋店 (Dotonbori Kamukura Ebisubashi)', category: 'OMNI',
    lat: 34.66634, lng: 135.501503, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; kara-age, fried rice, gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, chashu; the vegetable ramen uses the house broth.',
    hours_raw: 'Mon–Fri 9:00–23:30; Sat–Sun 0:00–1:00 and 9:00–23:30 (Tabelog). Touch-panel ordering, automatic payment machine; cards, e-money and QR accepted. App points give free toppings (October 2026).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-2-30, at the corner of the shopping street near NGK',
    cuisine: 'Kamukura\'s light, napa-cabbage "oishii ramen" · vegetable ramen · seasonal hot-and-sour ramen with cilantro · cold ramen with yuzu (summer) · fried rice and kara-age sets · gyoza and big beers · 67 seats',
    website: 'https://kamukura.co.jp/', gmaps: gm('どうとんぼり神座 戎橋店'), menu_url: null,
    notes: "[Ramen · a big Kamukura by NGK] A 67-seat Kamukura on a corner of the Namba shopping street near NGK, since 2024, run on touch panels and an automatic payment machine. The bowl is the chain's light, slightly sweet broth with plenty of napa cabbage, easy to eat yet, one diner said, deep and complex. Seasonal specials appear: a hot-and-sour ramen with cilantro (October 2026) and, in summer, a cold ramen that is better with yuzu. The fried rice and kara-age set is a guilty pleasure, and beer comes big. Points on the app earn free toppings. One summer visitor found the first-floor counter a little smelly.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 June 2024 (Tabelog)', background: 'Kamukura chain (kamukura.co.jp).', philosophy: null, specialty: 'Napa-cabbage ramen.',
      anecdotes: [
        { text: '"As always, the ramen was filled with plenty of napa cabbage, making it light and easy to eat… I tried the fried rice and kara-age set for the first time, and it was a guilty pleasure." — September 2026.', source: R + 'B536027869/' },
        { text: '"At this location, you place your order using a touch panel inside and pay at an automatic payment machine… They have an app that allows you to earn points with each visit, and you can get free toppings." — October 2026.', source: R + 'B493564391/' },
      ],
      japanese_sources_summary: '食べログ: どうとんぼり神座 戎橋店、大阪市中央区難波3-2-30、67席、月〜金9:00〜23:30、土日0:00〜1:00・9:00〜23:30、禁煙、カード・電子マネー・QR決済可、2024年6月28日開店、公式 kamukura.co.jp。2026年の口コミ: 商店街の角、タッチパネルで注文、自動精算機、餃子とビールのセット、特大ビール、アプリのポイントで無料トッピング、冷やしラーメンに柚子のトッピング、1階カウンターのにおいと汚れた扇風機という声(8月)、白菜たっぷりのあっさり、炒飯と唐揚げのセット、30年ぶり、野菜たっぷりのラーメン、NGKの近く、軽いのに深い味、期間限定の酸辣湯麺とパクチー、おいしいラーメン、半熟玉子2つ、アプリのクーポン。',
      confidence: 'medium', sources: [TB, R + 'B536027869/', R + 'B493564391/', R + 'B536696796/', R + 'B537818444/', R + 'B534527054/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Delicious ramen" with napa cabbage (2026).',
      chashu: 'Chashu (not described in detail).',
      notable_toppings: ['napa cabbage', 'soft-boiled egg', 'cilantro (hot-and-sour special)', 'yuzu (cold ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'House broth with pork.' },
      pantheon: 'The touch-panel Kamukura by NGK: the light, cabbage-sweet Osaka soup, with seasonal hot-and-sour and yuzu-cold variants.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536027869/', '"Filled with plenty of napa cabbage, making it light and easy to eat."'],
        oiliness: [R + 'B536696796/', '"It feels light yet has a deep and complex flavor."'],
        clarity: [R + 'B536696796/', 'Not described as clear or cloudy — mid-scale (inferred).'],
        tare_strength: [R + 'B536407260/', '"The flavor of the broth was to my liking" — placed low-mid (inferred).'],
        noodle_firmness: [R + 'B536696796/', 'Noodles not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B536027869/', 'Light, cabbage-forward bowl — placed low.'],
      },
      confidence: 'low', sources: [R + 'B536027869/', R + 'B536696796/', R + 'B536407260/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'Touch-panel ordering and automatic payment.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番30号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536027869/', R + 'B537818444/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', '"Delicious ramen" with napa cabbage', '', 'Ramen', 'no', 'no', '2026.', 'oishii'),
      it('', '', 'Hot-and-sour soup ramen (limited)', '', 'Seasonal', 'no', 'no', 'October 2026.', 'sanratan'),
      it('', '', 'Cold ramen (summer; yuzu topping recommended)', '', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi'),
      it('', '', 'Fried rice and kara-age set', '', 'Sets', 'no', 'no', 'September 2026.', 'set'),
    ] }, {
    cuisine: '神座のあっさりした白菜たっぷりの「おいしいラーメン」・野菜ラーメン・期間限定の酸辣湯麺とパクチー・夏の冷やしラーメンと柚子・炒飯と唐揚げのセット・餃子と特大ビール・67席',
    neighborhood: '難波3-2-30、NGK近くの商店街の角',
    gf_detail: 'グルテンフリーではありません。小麦の麺、唐揚げ、炒飯、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、チャーシュー。野菜ラーメンも店のスープです。',
    notes: '[ラーメン・NGK近くの大きな神座] 2024年からNGK近くの商店街の角にある67席の神座で、注文はタッチパネル、支払いは自動精算機。一杯はチェーンおなじみの白菜たっぷりのあっさりほんのり甘いスープで、食べやすいのに深く複雑な味だという客も。期間限定も登場し、パクチー入りの酸辣湯麺(2026年10月)や、夏は柚子をのせるとおいしい冷やしラーメン。炒飯と唐揚げのセットはちょっとした贅沢で、ビールは特大。アプリのポイントで無料トッピングも。夏に1階カウンターが少しにおったという客も。',
  });
}

save();
