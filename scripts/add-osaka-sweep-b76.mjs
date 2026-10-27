// Osaka sweep (2-mile circle around Dotonbori), batch 76 — ramen phase (all OMNI).
//   + 金麦 南船場店 (espuma chicken paitan, opened 2019 as Mugi x Tori; renamed Kinmugi September 2026)
//   + 小麦と生きる道 (rich chicken paitan and mazesoba near Nagahoribashi, opened 2020)
//   + 横濱家系ラーメン 神山 松屋町店 (Iekei with free large noodles and rice; owner seen working alone → mom_and_pop)
//   + 珉龍 長堀店 (machi-chuka: Kansai champon, yakisoba, set meals → other)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 76);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 金麦 南船場店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27111796/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://mugi-tori.com';
  put({
    id: 'osaka_kinmugi_minamisenba', name: '金麦 南船場店 (Kinmugi Minamisenba)', category: 'OMNI',
    lat: 34.677913, lng: 135.502511, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried chicken skin and fried broccoli.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan, pork and chicken chashu.',
    hours_raw: 'Daily 11:00–15:00 (L.O. 14:30) and 18:00–22:00 (L.O. 21:30), until noodles, soup and chashu sell out; limited bowls end when sold out (Tabelog). Cash-only ticket machine (September–October 2026).',
    hours: ALL(day(['11:00', '15:00'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 3-1-16, Nippo Lucky Bldg 1F — 6 min from Shinsaibashi Stn',
    cuisine: 'Espuma chicken paitan · special topping ramen ¥1,450, the most popular · domestic chicken simmered long and foamed to order · Menya Teigaku medium-thick straight noodles · low-temperature pork loin and chicken breast chashu · tsukemen · limited uni ramen and uni tsukemen · summer chilled corn soup noodles ¥1,400 with fried broccoli · soft-boiled egg ¥150 · rice ¥200 · crispy chicken skin · yodare-dori rice bowl · 12 counter seats, 4 table seats',
    website: OWN, gmaps: gm('金麦 南船場店'), menu_url: null,
    notes: "[Ramen · espuma chicken paitan in Minamisenba] A 16-seat chicken paitan shop open since 2019 as Mugi x Tori and renamed Kinmugi in September 2026, the name the group's other shops use. Domestic chicken is simmered for hours and foamed just before serving, and you can hear the frothing while you wait. The result is a creamy, bubbly broth over chewy medium-thick straight noodles from Kyoto's Menya Teigaku. The most popular special topping ramen (¥1,450) adds rare, tender pork-loin and chicken-breast chashu, egg and menma. Limited bowls rotate, such as an uni ramen with a delicate sea-urchin aroma, though one diner couldn't find the uni in the tsukemen. Summer brings chilled corn soup noodles (¥1,400); add rice to finish as risotto. There can be a line at noon. Cash-only ticket machine.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 June 2019 (Tabelog) as Mugi x Tori; renamed Kinmugi in September 2026 (September 2026 review)', background: 'Espuma chicken paitan shop; official site mugi-tori.com (Tabelog).', philosophy: null, specialty: 'Espuma chicken paitan.',
      anecdotes: [
        { text: '"Made from carefully selected domestic chicken, it is simmered for a long time and foamed just before serving, resulting in a very creamy texture." — September 2026, special topping ramen.', source: R + 'B535590547/' },
        { text: '"As I sipped the broth, the delicate aroma of sea urchin spread across my palate, and the noodles were smooth and easy to swallow." — October 2026, sea-urchin ramen.', source: R + 'B537017244/' },
      ],
      japanese_sources_summary: '公式 mugi-tori.com。食べログ(店舗会員): 金麦 南船場店、大阪市中央区南船場3-1-16 日宝ラッキービル 1F、心斎橋駅から徒歩6分、毎日11:00〜15:00(L.O.14:30)・18:00〜22:00(L.O.21:30)、麺・スープ・チャーシューがなくなり次第終了、限定は数量限定、カード・電子マネー・QR不可、16席(カウンター12、テーブル4)、2019年6月17日開店。口コミ(2026年9〜10月): エスプーマの鶏白湯、現金の券売機、紙エプロン、雨の平日昼に11人待ち、冷やしコーンスープ麺1,400円(9月15日まで)、半熟卵150円、ご飯200円、Teigakuの麺、揚げブロッコリー、ご飯でリゾット、2019年にMugi x Toriとして開店し2026年9月にKinmugiに改名、特製ラーメン1,450円が一番人気、国産鶏を長時間炊いて提供直前に泡立てる、中太ストレート麺、低温調理の豚ロースと鶏むねのチャーシュー、うにのつけ麺はうにを感じなかったという声、つけ麺・鶏皮・よだれ鶏丼、うに香るラーメン、2種のチャーシュー、カウンターの椅子が高い、若い店員がきびきび。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535590547/', R + 'B537017244/', R + 'B535232836/', R + 'B535753206/', R + 'B535824393/', R + 'B537142201/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Menya Teigaku medium-thick straight noodles, chewy (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'tsukemen'],
      signature_bowl: 'Special topping ramen, ¥1,450 (September–October 2026).',
      chashu: 'Low-temperature pork loin and chicken breast, rare and tender (September 2026).',
      notable_toppings: ['two chashu', 'egg', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken paitan.' },
      pantheon: 'Minamisenba\'s espuma chicken paitan: domestic chicken foamed to order over Teigaku noodles.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537142201/', '"The broth was rich and delicious."'],
        oiliness: [R + 'B537142201/', 'Chashu "light and tasty"; foamed broth — mid-scale.'],
        clarity: [R + 'B535590547/', 'Foamed, "very creamy" — placed low.'],
        tare_strength: [R + 'B537142201/', 'Drank "quite a bit" of the soup — mid-scale.'],
        noodle_firmness: [R + 'B535590547/', '"Chewy medium-thick straight noodles."'],
        aroma_punch: [R + 'B537017244/', '"The delicate aroma of sea urchin" (limited bowl) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535590547/', R + 'B537142201/', R + 'B537017244/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash-only ticket machine; some overseas customers (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-1-16 日宝ラッキービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目1番16号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535590547/', R + 'B535232836/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special topping ramen', '¥1,450', 'Ramen', 'no', 'no', 'Most popular; September 2026.', 'tokusei'),
      it('', '', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'September–October 2026.', 'tsukemen'),
      it('', '', 'Chilled corn soup noodles', '¥1,400', 'Limited', 'no', 'no', 'Summer, until 15 September (2026).', 'hiyashi_corn'),
      it('', '', 'Soft-boiled egg', '¥150', 'Toppings', 'no', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Rice', '¥200', 'Rice', 'no', 'vegan', 'September 2026.', 'rice'),
      it('', '', 'Yodare-dori rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'yodaredori_don'),
    ] }, {
    cuisine: 'エスプーマの鶏白湯・一番人気の特製ラーメン1,450円・国産鶏を長時間炊いて注文ごとに泡立てる・Menya Teigakuの中太ストレート麺・低温調理の豚ロースと鶏むねのチャーシュー・つけ麺・限定のうにのラーメンとつけ麺・夏は揚げブロッコリーの冷やしコーンスープ麺1,400円・半熟卵150円・ご飯200円・パリパリの鶏皮・よだれ鶏丼・カウンター12席、テーブル4席',
    neighborhood: '中央区南船場3-1-16 日宝ラッキービル 1F。心斎橋駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、揚げた鶏皮やブロッコリー。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、豚と鶏のチャーシュー。',
    notes: '[ラーメン・南船場のエスプーマ鶏白湯] 2019年にMugi x Toriとして開店し、2026年9月にグループのほかの店と同じKinmugiに改名した16席の鶏白湯の店。国産鶏を長時間炊き、提供直前に泡立てるので、待つ間に泡立てる音が聞こえる。クリーミーで泡立つスープに、京都のMenya Teigakuのもちもちした中太ストレート麺。一番人気の特製ラーメン(1,450円)には、レアで柔らかい豚ロースと鶏むねのチャーシュー、卵、メンマ。限定も入れ替わり、うにの香りが繊細なうにのラーメンなど。うにのつけ麺はうにを感じなかったという声も。夏は冷やしコーンスープ麺(1,400円)、ご飯を入れてリゾット風に締めて。昼は行列ができることも。食券は現金のみ。',
  });
}

// ================================================================ 小麦と生きる道
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27120458/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_komugi_to_ikiru_michi', name: '小麦と生きる道 (Komugi to Ikiru Michi)', category: 'OMNI',
    lat: 34.67743, lng: 135.505224, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; egg in the mazesoba.',
    hours_raw: 'Daily 11:00–15:00 and 17:30–21:00 (L.O. 20:45) (Tabelog). Cash-only ticket machine outside; buy first, then wait (October 2026). No cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['17:30', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 2-7-31 — 5 min from Nagahoribashi Stn',
    cuisine: 'Rich chicken paitan ramen · special ramen · seasoned egg · mazesoba with egg on homemade flat medium-thick noodles and coarse black pepper, free rice · extra-fat rice · kara-age · 6 counter seats, 6 table seats',
    website: null, gmaps: gm('小麦と生きる道 南船場'), menu_url: null,
    notes: "[Ramen · rich chicken paitan near Nagahoribashi] A 12-seat chicken paitan shop near Nagahoribashi, open since 2020, with lines even after lunch and a ten-minute wait at Saturday noon. Buy a ticket at the cash-only machine outside, then wait to be seated. The chicken paitan is rich, bold and piping hot, clinging to the noodles, and two diners drank nearly every drop. The special ramen with extra-fat rice came to ¥1,800. The mazesoba is the other draw: homemade flat medium-thick noodles tossed with the sauce and an egg, with coarse black pepper, and free rice to finish. Tabelog lists kara-age too. A sister shop runs elsewhere.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 December 2020 (Tabelog)', background: 'Chicken paitan and mazesoba shop (Tabelog, staff-maintained); a sister shop is open (Tabelog).', philosophy: null, specialty: 'Rich chicken paitan; mazesoba.',
      anecdotes: [
        { text: '"The chicken paitan soup had a rich and bold flavor that clung perfectly to the noodles, creating a wonderful balance." — October 2026.', source: R + 'B537577675/' },
        { text: '"The homemade flat, medium-thick noodles combined beautifully with the sauce and egg… The coarsely ground black pepper added a nice touch as well." — October 2026, mazesoba.', source: R + 'B538021902/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 小麦と生きる道、大阪市中央区南船場2-7-31、長堀橋駅から徒歩5分、毎日11:00〜15:00・17:30〜21:00(L.O.20:45)、カード・電子マネー・QR不可、12席(カウンター6、テーブル6)、禁煙、2020年12月1日開店、姉妹店あり。口コミ(2026年10月): 飲んだ後の締め、店外の券売機、満席なら外で待つ、外国人客も、鶏白湯、スープをほぼ飲み干した、特製ラーメンと背脂ご飯で1,800円、クリーミーな白いスープ、昼過ぎでも行列、濃厚で力強い鶏白湯が麺に絡む、祝日の開店直後、まぜそばに卵、自家製の平打ち中太麺、粗挽き黒胡椒、まぜそばにご飯無料、味玉、券売機は現金のみ、熱々で濃厚、土曜昼に10分待ち、どれもはずれなし。',
      confidence: 'medium', sources: [TB, R + 'B537577675/', R + 'B538021902/', R + 'B537519870/', R + 'B537532719/', R + 'B538088663/', R + 'B538166133/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: true, notes: 'Homemade flat, medium-thick noodles in the mazesoba (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'mazesoba_aburasoba'],
      signature_bowl: 'Chicken paitan ramen; special ramen (October 2026).',
      chashu: null,
      notable_toppings: ['seasoned egg', 'coarse black pepper (mazesoba)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken paitan.' },
      pantheon: 'Nagahoribashi\'s chicken paitan counter: a bold, clinging broth and a peppery egg mazesoba.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B538088663/', '"The broth was piping hot, rich, and absolutely delicious."'],
        oiliness: [R + 'B537532719/', '"A creamy white broth" — mid-scale.'],
        clarity: [R + 'B537532719/', 'Creamy white broth — placed low.'],
        tare_strength: [R + 'B537577675/', '"A rich and bold flavor" — placed high.'],
        noodle_firmness: [R + 'B537519870/', '"The noodles paired perfectly with the broth" — mid-scale.'],
        aroma_punch: [R + 'B538021902/', '"The coarsely ground black pepper added a nice touch" (mazesoba) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537577675/', R + 'B538088663/', R + 'B538021902/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash-only ticket machine outside; overseas customers seen (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-7-31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目7番31号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537532719/', R + 'B538021902/'],
    price_note: 'One combined price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'tori_paitan'),
      it('', '', 'Special ramen + extra-fat rice', '¥1,800', 'Sets', 'no', 'no', 'Combined; October 2026.', 'tokusei_set'),
      it('', '', 'Mazesoba', '', 'Mazesoba', 'no', 'no', 'Free rice; October 2026.', 'mazesoba'),
    ] }, {
    cuisine: '濃厚鶏白湯ラーメン・特製ラーメン・味玉・自家製の平打ち中太麺に卵と粗挽き黒胡椒のまぜそば、ご飯無料・背脂ご飯・唐揚げ・カウンター6席、テーブル6席',
    neighborhood: '中央区南船場2-7-31。長堀橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、まぜそばに卵。',
    notes: '[ラーメン・長堀橋近くの濃厚鶏白湯] 長堀橋近くの12席の鶏白湯の店で、2020年開店、昼過ぎでも行列ができ、土曜の昼は10分待ち。店外の現金のみの券売機で食券を買ってから、席が空くのを待つ。鶏白湯は濃厚で力強く熱々、麺によく絡み、スープをほぼ飲み干した人も。特製ラーメンと背脂ご飯で1,800円。もう一つの看板はまぜそばで、自家製の平打ち中太麺をたれと卵、粗挽き黒胡椒で和え、締めは無料のご飯で。唐揚げも。姉妹店もあります。',
  });
}

// ================================================================ 横濱家系ラーメン 神山 松屋町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27095424/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.shin-zan.jp/';
  const WD = day(['11:30', '15:30'], ['21:00', '03:00']), SA = day(['11:30', '15:00'], ['21:00', '03:00']), SU = day(['11:30', '14:30']);
  put({
    id: 'osaka_shinzan_matsuyamachi', name: '横濱家系ラーメン 神山 松屋町店 (Yokohama Iekei Ramen Shinzan Matsuyamachi)', category: 'OMNI',
    lat: 34.671096, lng: 135.51148, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; kara-age and gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu, quail egg.',
    hours_raw: 'Mon–Fri 11:30–15:30 and 21:00–3:00 am; Sat 11:30–15:00 and 21:00–3:00 am; Sun 11:30–14:30 (Tabelog). One diner found it often closed and saw lunch wind down an hour early (March 2026). Cards (VISA, Master, AMEX) and QR accepted (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi 2-15-4 — 7 min from Matsuyamachi Stn',
    cuisine: 'Yokohama iekei tonkotsu shoyu, also shio · medium noodles recommended, thin available · free large noodles, free rice and extra noodles · nori, spinach, quail egg · free kimchi and pickles · chashu ramen + mini kara-age rice bowl ¥1,600 · negi chashu rice bowl · kara-age set · gyoza · Chinese menu · 17 seats',
    website: OWN, gmaps: gm('横濱家系ラーメン 神山 松屋町店'), menu_url: null,
    notes: "[Ramen · late-night Iekei with free noodles and rice near Matsuyamachi] A 17-seat Iekei shop near Matsuyamachi, open since 2016, serving lunch and again from 21:00 to 3:00 am. The tonkotsu shoyu is creamy with a punch that still lets the pork through, topped with nori, spinach and quail egg; shio is an option. Medium noodles are the house choice. Large noodles, rice and extra noodles come free, as do kimchi and pickles, so a full meal ran in the ¥900s. One diner found it closer to Hakata tonkotsu. Ordering extra-rich made it far too salty for a newcomer. Sides include a negi chashu bowl, mini kara-age bowl and gyoza. The owner has been seen running it alone and comes across as friendly. Hours can slip, so check first.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 23 November 2016 (Tabelog)', background: 'Yokohama iekei ramen shop; official site shin-zan.jp (Tabelog). Owner seen working alone (June 2026 review).', philosophy: null, specialty: 'Iekei tonkotsu shoyu.',
      anecdotes: [
        { text: '"The ramen features a rich tonkotsu soy sauce broth that packs a punch while still allowing the pork flavor to shine through." — September 2026.', source: R + 'B536031354/' },
        { text: '"The medium noodles… paired beautifully with the broth. The large size was free of charge." — August 2026, shoyu ramen.', source: R + 'B533777000/' },
      ],
      japanese_sources_summary: '公式 shin-zan.jp。食べログ(店舗会員): 横濱家系ラーメン 神山 松屋町店、大阪市中央区瓦屋町2-15-4、松屋町駅から徒歩7分、月〜金11:30〜15:30・21:00〜翌3:00、土11:30〜15:00・21:00〜翌3:00、日11:30〜14:30、カード(VISA、Master、AMEX)・QR可、17席、喫煙可、車椅子可、Wi-Fi、2016年11月23日開店、中国語メニューあり。口コミ(2025年3月〜2026年9月): チャーシュー麺(塩)とミニ唐揚げ丼1,600円、細麺より中太麺、唐揚げ定食でご飯と麺の大盛り、ご飯と替え玉無料、無料のキムチ、海苔・ほうれん草・うずら、Hakata豚骨に近いという声、閉まっていることが多い、無料の漬物、大盛り無料、家系として標準の濃さ、閉店時間より早く片付け、全部濃いめにしたらとても塩辛かった、餃子は普通、オーナーが一人で切り盛り、醤油の中太麺、ねぎチャーシュー丼、900円台、キムチ食べ放題、パンチのある豚骨醤油、オーナーは気さく。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536031354/', R + 'B533777000/', R + 'B503229452/', R + 'B525951702/', R + 'B529711204/', R + 'B522672349/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium noodles recommended; thin available; large free (2025–2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Iekei tonkotsu shoyu ramen (August–September 2026).',
      chashu: 'Chashu ramen and negi chashu rice bowl (June–August 2026).',
      notable_toppings: ['nori', 'spinach', 'quail egg', 'free kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Matsuyamachi\'s late-night Iekei: creamy pork shoyu with free noodles, rice and kimchi.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533777000/', '"The creaminess typical of Iekei style was incredibly addictive."'],
        oiliness: [R + 'B525951702/', '"A standard richness for Iekei ramen" — mid-scale.'],
        clarity: [R + 'B533777000/', 'Creamy Iekei broth — placed low.'],
        tare_strength: [R + 'B536031354/', '"A rich tonkotsu soy sauce broth that packs a punch" — placed high.'],
        noodle_firmness: [R + 'B533777000/', 'Medium noodles "paired beautifully with the broth" — mid-scale.'],
        aroma_punch: [R + 'B536031354/', '"Allowing the pork flavor to shine through" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536031354/', R + 'B533777000/', R + 'B525951702/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Chinese menu available (Tabelog); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区瓦屋町2-15-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区瓦屋町二丁目15番4号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503229452/', R + 'B533777000/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Iekei ramen (shoyu or shio)', '', 'Ramen', 'no', 'no', 'Large noodles free; August 2026.', 'iekei'),
      it('', '', 'Chashu ramen (shio) + mini kara-age rice bowl', '¥1,600', 'Sets', 'no', 'no', 'June 2026.', 'chashu_karaage_set'),
      it('', '', 'Negi chashu rice bowl', '', 'Rice', 'no', 'no', 'August 2026.', 'negi_chashu_don'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'June 2026.', 'gyoza'),
    ] }, {
    cuisine: '横濱家系の豚骨醤油、塩も・おすすめは中太麺、細麺も・麺の大盛り、ご飯、替え玉が無料・海苔、ほうれん草、うずら・無料のキムチと漬物・チャーシュー麺とミニ唐揚げ丼1,600円・ねぎチャーシュー丼・唐揚げ定食・餃子・中国語メニュー・17席',
    neighborhood: '中央区瓦屋町2-15-4。松屋町駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、唐揚げと餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープ、チャーシュー、うずらの卵。',
    notes: '[ラーメン・松屋町近くの麺もご飯も無料の深夜の家系] 松屋町近くの17席の家系の店で、2016年開店、昼と、夜は21時から翌3時まで。豚骨醤油はクリーミーでパンチがありながら豚の旨みもしっかり、海苔、ほうれん草、うずらがのり、塩も選べる。店のおすすめは中太麺。麺の大盛り、ご飯、替え玉、キムチ、漬物が無料で、しっかり食べて900円台。Hakata豚骨に近いと感じた人も。初めてで全部濃いめにしたら塩辛すぎたという声。ねぎチャーシュー丼、ミニ唐揚げ丼、餃子も。オーナーが一人で切り盛りする姿も見られ、気さくな人柄。営業時間がずれることもあるので事前に確認を。',
  });
}

// ================================================================ 珉龍 長堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27043053/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_minryu_nagahori', name: '珉龍 長堀店 (Minryu Nagahori)', category: 'OMNI',
    lat: 34.675397, lng: 135.508391, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, gyoza, soy-seasoned kara-age, thickened sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, seafood and egg throughout.',
    hours_raw: 'Hours not listed on Tabelog. Reviews describe lunch, all-day service and a Sunday 3 pm visit (March–August 2026). PayPay accepted; no cards or e-money (Tabelog). Smoking allowed (Tabelog). No children, per one diner (July 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisenba 1-10-16 — near Nagahoribashi Stn',
    cuisine: 'Neighborhood Chinese · Kansai champon ¥858, a hot, thick ankake noodle soup with stir-fried vegetables, pork and seafood · champon and fried rice set ¥980 · yakisoba ¥770 · gyoza, seven pieces · soy-seasoned kara-age ¥880 · shoyu ramen · Tianjin rice · twice-cooked pork · shrimp chili and shrimp mayo · set meals in the ¥900s · takeout and delivery · drinks · 26 seats',
    website: null, gmaps: gm('珉龍 長堀店'), menu_url: null,
    notes: "[Chinese · a neighborhood Chinese diner near Nagahoribashi] A long-running neighborhood Chinese restaurant near Nagahoribashi, strong on takeout and delivery, with counter and tables in a dining room one diner found very clean. The pick is the Kansai-style champon (¥858): a scalding, thick ankake soup over thin noodles, piled with stir-fried vegetables, pork and seafood. Pair it with moist fried rice in a ¥980 set. The yakisoba (¥770) is simple and huge, the gyoza come seven to a plate, and the kara-age (¥880) is crisp and soy-seasoned. Set meals run in the ¥900s, served through the afternoon. Groups order widely: century egg, shrimp chili, twice-cooked pork, sesame balls. The shoyu ramen and Tianjin rice were plain to one diner. No children, per one diner. Smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Neighborhood Chinese restaurant; "around for ages" (May 2026 review).', philosophy: null, specialty: 'Kansai champon; set meals.',
      anecdotes: [
        { text: '"The champon from local Chinese restaurants in Osaka differs from Nagasaki champon… it features a soy sauce or salt-based soup topped with plenty of stir-fried vegetables and seafood, served as a hot and thick \'ankake\' ramen." — June 2026, champon ¥858.', source: R + 'B531764625/' },
        { text: '"The yakisoba was a simple yet hearty dish typical of local Chinese food, made without sauce, and it was delicious." — May 2026.', source: R + 'B527478791/' },
      ],
      japanese_sources_summary: '食べログ: 珉龍 長堀店、大阪市中央区南船場1-10-16-102、長堀橋駅から210m、営業時間の記載なし、PayPay可、カード・電子マネー不可、26席、喫煙可。口コミ(2026年3〜8月): 8人の宴会、ピータン、くらげ、唐揚げ、餃子、エビマヨ、エビチリ、回鍋肉、炒飯3種、焼きビーフン、ワンタンスープ、ごま団子、大学芋、料理は濃いめ、提供が速い、ちゃんぽんと炒飯のセット980円、関西風のあんかけのちゃんぽん、細麺、昔からある店、焼きそば770円、餃子7個、唐揚げ880円、量が多い、店内はきれい、通し営業、定食が多い、お酒も、出前が強い、ちゃんぽん858円、子ども不可という声、醤油ラーメンと天津飯のセットは普通、日曜15時に入店、900円台の定食。',
      confidence: 'low', sources: [TB, R + 'B531764625/', R + 'B527478791/', R + 'B525329500/', R + 'B524322716/', R + 'B532918263/', R + 'B535033227/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Neighborhood Chinese diner; regular local clientele.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-10-16-102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目10番16号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531764625/', R + 'B527478791/', R + 'B525329500/'],
    price_note: 'Prices from March–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Champon (Kansai style)', '¥858', 'Noodles', 'no', 'no', 'June 2026.', 'champon'),
      it('', '', 'Champon and fried rice set', '¥980', 'Sets', 'no', 'no', 'March 2026.', 'champon_set'),
      it('', '', 'Yakisoba', '¥770', 'Noodles', 'no', 'no', 'May 2026.', 'yakisoba'),
      it('', '', 'Chicken kara-age', '¥880', 'Mains', 'no', 'no', 'May 2026.', 'karaage'),
      it('', '', 'Gyoza (7 pieces)', '', 'Sides', 'no', 'no', 'May 2026.', 'gyoza'),
    ] }, {
    cuisine: '町の中華・関西風のちゃんぽん858円、野菜、豚肉、魚介を炒めた熱々のあんかけの麺・ちゃんぽんと炒飯のセット980円・焼きそば770円・餃子7個・醤油味の唐揚げ880円・醤油ラーメン・天津飯・回鍋肉・エビチリとエビマヨ・900円台の定食・持ち帰りと出前・お酒も・26席',
    neighborhood: '中央区南船場1-10-16。長堀橋駅近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、醤油味の唐揚げ、とろみのあるあん。',
    vegan_detail: 'ヴィーガンではありません。豚肉、魚介、卵が中心。',
    notes: '[中華・長堀橋近くの町の中華] 長堀橋近くの昔からある町の中華で、持ち帰りや出前に強く、カウンターとテーブルの店内はとてもきれいだったという声。おすすめは関西風のちゃんぽん(858円)で、熱々のとろみのあるあんかけスープに細麺、炒めた野菜、豚肉、魚介がたっぷり。しっとりした炒飯と組み合わせたセットは980円。焼きそば(770円)はシンプルで大盛り、餃子は7個、唐揚げ(880円)はカリッと醤油味。定食は900円台で、午後も通し営業。大人数ならピータン、エビチリ、回鍋肉、ごま団子なども。醤油ラーメンと天津飯は普通だったという声。子ども不可という声も。喫煙可。',
  });
}

save();
