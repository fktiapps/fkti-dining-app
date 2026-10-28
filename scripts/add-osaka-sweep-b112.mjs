// Osaka sweep (2-mile circle around Dotonbori), batch 112 — ramen phase (all OMNI).
//   + 鶏か鶏以外か (whipped chicken paitan with rare and roast chashu; summer chilled bowls; by Taisho Stn)
//   + らーめん ときまる (bonito-kombu-pork triple-soup shoyu with burdock, whole-wheat noodles; Uehommachi)
//   + 麺や 誠風軒 (shrimp-bushi chuka men and shrimp shio abura soba, morning ramen Fri–Sun; Awaza)
//   + らーめん砦 大阪京町堀店 (clam paitan ramen with "dunk rice"; Kyomachibori)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 112);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鶏か鶏以外か
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27144391/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '15:00']; const F = day(L, ['18:00', '23:00']);
  put({
    id: 'osaka_tori_katori_i_ga_ika_taisho', name: '鶏か鶏以外か (Tori Katori I ga Ika)', category: 'OMNI',
    lat: 34.665349, lng: 135.478806, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shio and shoyu tare; tempura on the summer chilled bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; pork chashu; mentaiko with rice.',
    hours_raw: 'Mon and Thu–Sun 11:00–15:00 (L.O. 14:45) and 18:00–23:00 (L.O. 22:30); Tue 11:00–15:00; closed Wed (Tabelog). Ticket machine. Line of about six at 20:00 one August evening; limited bowls can sell out at lunch (2026 reviews). PayPay accepted; no cards or e-money (Tabelog). LINE coupons.',
    hours: { 0: F, 1: day(L), 3: F, 4: F, 5: F, 6: F }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sangenya-higashi 1-17-20, Akizuki-kan Bldg 1F (Taisho-ku) — 117 m from Taisho Stn',
    cuisine: 'Whipped chicken paitan · chicken paitan ramen, shio or shoyu; with extra meat ¥1,200: creamy, frothy chicken soup, thin straight noodles, rare pork-shoulder chashu and roast or grilled pork belly, green onion, kaiware · spicy paitan; "Uma Kara" ramen · extra noodles ¥150 · mini rice ¥100, comes with free takana and spicy mentaiko · rare chashu rice bowl with egg yolk ¥400 · pork-belly chashu rice bowl ¥450 · soft-bone tsukune ¥200 · summer: chilled sea bream and clam shio ramen with tempura ¥1,300, chilled shoyu with grated yam ¥1,000 · anniversary ramen each September · 7 counter seats',
    website: null, gmaps: gm('鶏か鶏以外か 大正'), menu_url: null,
    notes: "[Ramen · whipped chicken paitan by Taisho Station] A bright, clean seven-seat counter a block from Taisho Station, open since September 2024 and serving the chicken paitan that one diner hadn't found anywhere else in Taisho. The soup is whipped until frothy and creamy but not too heavy, on thin straight noodles, with two chashu: rare pork shoulder and a roasted or grilled pork belly. Choose shio, shoyu (the soy comes through strongly) or a spicy version; one diner found the extra noodles salty. Order rice (¥100) and you get takana and spicy mentaiko free, or go for the rare chashu bowl with egg yolk. In summer there are chilled bowls such as a sea bream and clam shio with tempura, which can sell out at lunch; one August evening there was a line of six. Closed Wednesdays; Tuesday is lunch only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 September 2024 (Tabelog)', background: 'Chicken paitan ramen counter (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Whipped chicken paitan.',
      anecdotes: [
        { text: '"The whipped chicken paitan broth is truly delicious. The chashu comes in two varieties: rare pork shoulder chashu and chestnut pork roast." — January 2026, rich chicken paitan shio.', source: R + 'B501314870/' },
        { text: '"The cold shio ramen featured medium-thick straight noodles topped with tempura, two slices of rare chashu, white onions, green onions, seaweed, and a citrus fruit, all in a light and delicious broth." — August 2026, chilled sea bream and clam shio ramen ¥1,300.', source: R + 'B533638376/' },
      ],
      japanese_sources_summary: '食べログ: 鶏か鶏以外か、大阪市大正区三軒家東1-17-20 秋月館ビル 1F、大正から117m、月・木〜日 11:00〜15:00(L.O. 14:45)・18:00〜23:00(L.O. 22:30)、火 11:00〜15:00、水休み、カード・電子マネー不可、PayPay可、カウンター7席、2024年9月17日開店。口コミ(2024年12月〜2026年10月): 毎年の周年記念ラーメン、炊き込みご飯、鶏白湯と中華そばの2種、LINE登録でクーポン、塩ラーメン、レアチャーシューを含む2種のチャーシュー、かいわれ、クリーミーな鶏スープ、細麺、明るく清潔、大正で初めての鶏白湯という声、夏の冷やし(鯛と蛤の冷やし塩、とろろの冷やし醤油)、昼の冷やしは売り切れ、辛い鶏白湯、泡立てた鶏白湯、豚肩のレアチャーシューともう一種の焼豚、味玉、まぜそば(限定)、肉増し鶏白湯1,200円、ミニご飯100円、替え玉150円、ご飯に高菜と辛子明太子が無料、豚バラの焼きチャーシュー、替え玉が塩辛いという声、8月の夜8時前に6人待ち、冷やし塩1,300円に天ぷら、冷やし醤油とろろ1,000円、軟骨つくね200円、レアチャーシュー丼400円(卵黄)、豚バラチャーシュー丼450円、醤油は醤油感が強い、旨辛ラーメンは塩気が強めという声。',
      confidence: 'medium', sources: [TB, R + 'B498213078/', R + 'B501314870/', R + 'B533638376/', R + 'B535506071/', R + 'B537225325/', R + 'B537564978/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles; medium-thick straight in the summer chilled shio (2026).' },
      regional_style: [], sub_genre: ['tori_paitan'],
      signature_bowl: 'Chicken paitan ramen, shio or shoyu; ¥1,200 with extra meat (October 2026).',
      chashu: 'Rare pork-shoulder chashu and roast or grilled pork belly (2026).',
      notable_toppings: ['kaiware', 'rare chashu', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles; tare.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Taisho\'s whipped chicken paitan with two chashu, and a rice bowl that comes with free mentaiko.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537564978/', '"The creamy and rich chicken broth" — placed high.'],
        oiliness: [R + 'B537225325/', '"Not overly rich at all" after drinks — mid-scale.'],
        clarity: [R + 'B501314870/', '"The whipped chicken paitan broth" — bottom of scale.'],
        tare_strength: [R + 'B535506071/', '"Creamy, yet the soy sauce flavor was strong"; "saltiness was a bit strong" (B537225325) — placed high.'],
        noodle_firmness: [R + 'B533638376/', '"Not too hard and not too soft" — mid-scale.'],
        aroma_punch: [R + 'B533638376/', '"The creamy broth didn\'t have much umami flavor" to one diner — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B501314870/', R + 'B533638376/', R + 'B535506071/', R + 'B537225325/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; LINE coupons (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市大正区三軒家東1-17-20 秋月館ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市大正区三軒家東一丁目17番20号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533638376/'],
    price_note: 'Prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen with extra meat', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'paitan_niku'),
      it('', '', 'Chicken paitan shio ramen', '', 'Ramen', 'no', 'no', 'January 2026.', 'paitan_shio'),
      it('', '', 'Chicken paitan shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'paitan_shoyu'),
      it('', '', 'Extra noodles', '¥150', 'Extra noodles', 'no', 'no', 'October 2026.', 'kaedama'),
      it('', '', 'Mini rice (with free takana and mentaiko)', '¥100', 'Rice', 'no', 'no', 'October 2026.', 'mini_rice'),
      it('', '', 'Rare chashu rice bowl', '¥400', 'Rice', 'no', 'no', 'August 2026.', 'rare_don'),
      it('', '', 'Pork-belly chashu rice bowl', '¥450', 'Rice', 'no', 'no', 'August 2026.', 'bara_don'),
      it('', '', 'Soft-bone tsukune', '¥200', 'Sides', 'no', 'no', 'August 2026.', 'tsukune'),
      it('', '', 'Chilled sea bream and clam shio ramen (summer)', '¥1,300', 'Limited', 'no', 'no', 'August 2026.', 'hiyashi_shio'),
    ] }, {
    cuisine: '泡立てた鶏白湯・鶏白湯ラーメン、塩か醤油、肉増し1,200円: 泡立ったクリーミーな鶏スープ、細いストレート麺、豚肩のレアチャーシューと焼いた豚バラ、ねぎ、かいわれ・辛い鶏白湯、旨辛ラーメン・替え玉150円・ミニご飯100円に高菜と辛子明太子が無料・卵黄のレアチャーシュー丼400円・豚バラチャーシュー丼450円・軟骨つくね200円・夏は天ぷら付きの鯛と蛤の冷やし塩1,300円、とろろの冷やし醤油1,000円・毎年9月の周年記念ラーメン・カウンター7席',
    neighborhood: '大正区三軒家東1-17-20 秋月館ビル 1F。大正駅から117m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、塩と醤油のたれ、夏の冷やしの天ぷら。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、豚のチャーシュー、ご飯に付く明太子。',
    notes: '[ラーメン・大正駅近く、泡立てた鶏白湯] 大正駅から1ブロック、明るく清潔なカウンター7席の店で、2024年9月開店、大正ではほかにない鶏白湯という声。スープは泡立てて泡のようにクリーミーだが重すぎず、細いストレート麺に、豚肩のレアと焼いた豚バラの2種のチャーシュー。塩、醤油(醤油感が強い)、辛いのから選べる。替え玉が塩辛かったという人も。ご飯(100円)を頼むと高菜と辛子明太子が無料、卵黄のレアチャーシュー丼も。夏は天ぷら付きの鯛と蛤の冷やし塩などの冷やしがあり、昼に売り切れることも。8月のある夜は6人待ち。水曜休み、火曜は昼のみ。',
  });
}

// ================================================================ らーめん ときまる
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27095481/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://tokimaru.com/';
  const D = day(['11:00', '14:30'], ['19:00', '23:00']);
  put({
    id: 'osaka_ramen_tokimaru_uehommachi', name: 'らーめん ときまる (Ramen Tokimaru)', category: 'OMNI',
    lat: 34.666188, lng: 135.524381, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles; shoyu and miso tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito and pork-bone broth; chashu.',
    hours_raw: 'Mon–Sat 11:00–14:30 and 19:00–23:00; closed Sun; public holidays lunch only; closes when the soup sells out (Tabelog). Reservations possible by phone (Tabelog). Tabelog lists no cards or e-money; a 2023 diner paid with PayPay. LINE stamp card.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Obase-cho 13-4, Tennoji Bldg 1F, on Sennichimae-dori — 6 min from Kintetsu Osaka-Uehommachi or Tsuruhashi Stn',
    cuisine: 'Triple-soup shoyu with burdock · Tokimaru shoyu ramen ¥780: bonito, kombu and pork-bone soup with soy, flat medium-thick whole-wheat noodles, pork-belly and loin chashu, cabbage, bean sprouts, simmered burdock, green onion · extra vegetables · tonkotsu shoyu with a spicy kick · niboshi "nibotton" · tsukemen, 100 g ¥900: pork-bone and bonito dip · miso and spicy miso kimchi ramen · summer neba-neba chilled noodles with okra, yam and kimchi · gyoza · 7 counter seats',
    website: OWN, gmaps: gm('らーめん ときまる 上本町'), menu_url: null,
    notes: "[Ramen · bonito-kombu-pork shoyu with burdock, near Uehommachi] A seven-seat counter on Sennichimae-dori between Uehommachi and Tsuruhashi, open since 2016 with late hours after 19:00. The Tokimaru shoyu ramen (¥780) is a triple soup of bonito, kombu and pork bone with a gentle soy, on flat, medium-thick whole-wheat noodles, topped with cabbage, bean sprouts and the house signature: tender simmered burdock, which makes it taste distinctly Japanese. Add extra vegetables for a fuller bowl. The tsukemen (¥900 for 100 g) and a spicy tonkotsu shoyu draw mixed reviews, and one diner found the niboshi version too salty. In summer there's a sticky, spicy neba-neba chilled noodle with okra, yam and kimchi. Closes when the soup runs out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 December 2016 (Tabelog)', background: 'Ramen counter (Tabelog; official site tokimaru.com).', philosophy: null, specialty: 'Shoyu ramen with burdock.',
      anecdotes: [
        { text: '"The noodles are flat, medium-thick, and made from whole wheat flour. The broth is a rich triple soup combining bonito, kombu kelp, and pork bones, seasoned with soy sauce… the standout ingredient is definitely the burdock root!" — October 2025, Tokimaru shoyu ramen ¥780.', source: R + 'B482532761/' },
        { text: '"The rich pork bone broth was infused with seafood flavors, particularly strong notes of bonito… An unusual topping of burdock root was included, but it didn\'t leave a strong impression." — January 2026, tsukemen 100 g ¥900.', source: R + 'B520940003/' },
      ],
      japanese_sources_summary: '食べログ: らーめん ときまる、大阪市天王寺区小橋町13-4 天王寺ビル 1F、近鉄大阪上本町駅・地下鉄鶴橋駅から徒歩6分、月〜土 11:00〜14:30・19:00〜23:00、日休み、祝日は昼のみ、スープがなくなり次第終了、予約可、カード・電子マネー不可、カウンター7席、2016年12月11日開店、公式 tokimaru.com。口コミ(2023年5月〜2026年7月): 周年記念で醤油らーめん半額、LINEのスタンプカード、野菜増し、餃子、あっさり醤油、ごぼう・キャベツ・もやし・ねぎ、PayPayで支払い(2023年)、千日前通り沿い、ときまるの醤油らーめん780円、全粒粉の平打ち中太麺、鰹・昆布・豚骨のトリプルスープ、豚バラとロースのチャーシュー、柔らかく煮たごぼう、夏限定のオクラ、長芋、キムチ、豆腐の夏の冷やし麺、きのこの味噌らーめん、辛味噌キムチらーめん、nibotton、煮干しが強く塩辛いという声、つけ麺100g 900円、鰹の強い豚骨魚介、豚骨醤油はピリ辛、つけ麺1.5玉。',
      confidence: 'medium', sources: [TB, OWN, R + 'B465171938/', R + 'B482532761/', R + 'B518631069/', R + 'B520940003/', R + 'B532612059/', R + 'B532671973/'] },
    ramen: {
      broth_base: ['gyokai', 'tonkotsu'], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: 'flat', hydration: null, handmade: false, notes: 'Flat medium-thick whole-wheat noodles (2025–2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Tokimaru shoyu ramen, ¥780 (October 2025).',
      chashu: 'Pork-belly and loin chashu (2024–2025); "incredibly tender" (July 2026).',
      notable_toppings: ['simmered burdock', 'cabbage', 'bean sprouts', 'extra vegetables'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Bonito and pork broth.' },
      pantheon: 'Uehommachi\'s bonito-kombu-pork shoyu with simmered burdock on whole-wheat noodles.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B482532761/', '"A rich triple soup" — mid-scale.'],
        oiliness: [R + 'B465171938/', '"The broth has a gentle flavor" (light shoyu, 2023) — placed low.'],
        clarity: [R + 'B482532761/', 'No diner remark on clarity — mid-scale.'],
        tare_strength: [R + 'B465171938/', '"Gentle flavor" in the shoyu; the niboshi "quite salty" (B518631069) — mid-scale.'],
        noodle_firmness: [R + 'B520940003/', '"Chewy and smooth… a bit of a bite" — mid-scale.'],
        aroma_punch: [R + 'B520940003/', '"Particularly strong notes of bonito" (tsukemen) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B482532761/', R + 'B520940003/', R + 'B465171938/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; LINE stamp card (2024).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区小橋町13-4 天王寺ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest reviews July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区小橋町13番4号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B482532761/', R + 'B520940003/'],
    price_note: 'Prices from October 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tokimaru shoyu ramen', '¥780', 'Ramen', 'no', 'no', 'October 2025.', 'shoyu'),
      it('', '', 'Extra vegetables', '', 'Toppings', 'no', 'no', 'October 2025.', 'yasai'),
      it('', '', 'Tonkotsu shoyu ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'tonkotsu_shoyu'),
      it('', '', 'Tsukemen, 100 g', '¥900', 'Tsukemen', 'no', 'no', 'January 2026.', 'tsukemen'),
      it('', '', 'Spicy miso kimchi ramen', '', 'Ramen', 'no', 'no', 'November 2024.', 'kara_miso'),
      it('', '', 'Neba-neba chilled noodles (summer)', '', 'Limited', 'no', 'no', 'August 2025.', 'nebaneba'),
      it('', '', 'Gyoza (5)', '', 'Sides', 'no', 'no', 'May 2024.', 'gyoza'),
    ] }, {
    cuisine: 'ごぼう入りのトリプルスープの醤油・ときまるの醤油らーめん780円: 鰹、昆布、豚骨のスープに醤油、全粒粉の平打ち中太麺、豚バラとロースのチャーシュー、キャベツ、もやし、煮たごぼう、ねぎ・野菜増し・ピリ辛の豚骨醤油・煮干しの「nibotton」・つけ麺100g 900円: 豚骨と鰹のつけ汁・味噌と辛味噌キムチらーめん・夏はオクラ、長芋、キムチの冷やし麺・餃子・カウンター7席',
    neighborhood: '天王寺区小橋町13-4 天王寺ビル 1F、千日前通り沿い。近鉄大阪上本町駅・鶴橋駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。全粒粉の麺、醤油と味噌のたれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。鰹と豚骨のスープ、チャーシュー。',
    notes: '[ラーメン・上本町近く、ごぼう入りの鰹・昆布・豚骨の醤油] 上本町と鶴橋の間、千日前通り沿いのカウンター7席の店で、2016年開店、夜は19時から遅くまで。ときまるの醤油らーめん(780円)は鰹、昆布、豚骨のトリプルスープにやさしい醤油、全粒粉の平打ち中太麺に、キャベツ、もやし、そして店の名物の柔らかく煮たごぼうで、和の味わいに。野菜増しでボリュームを。つけ麺(100gで900円)とピリ辛の豚骨醤油は評価が分かれ、煮干しのものは塩辛すぎたという声も。夏はオクラ、長芋、キムチの冷やし麺。スープがなくなり次第終了。',
  });
}

// ================================================================ 麺や 誠風軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27156055/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '15:00'], ['18:00', '23:00']); const FS = day(['08:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_menya_seifuuken_awaza', name: '麺や 誠風軒 (Menya Seifuuken)', category: 'OMNI',
    lat: 34.68327, lng: 135.486281, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat and flat wheat noodles; soy and shio tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, squid and chicken bushi; niboshi; chashu.',
    hours_raw: 'Mon–Thu and Sat 10:00–15:00 (L.O. 14:30) and 18:00–23:00 (L.O. 22:30); Sun 10:00–15:00; Fri–Sun from 08:00 for morning ramen; closed public holidays (Tabelog). Cash-only ticket machine with a change machine; self-service water and paper aprons (October 2026). No cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: FS, 5: FS, 6: day(['08:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Utsubo-honmachi 3-10-21 — 2 min from Awaza Stn',
    cuisine: '"Neo-chuka" shrimp and fish ramen · Moto-Aji chuka men: light yet rich, slightly sweet shoyu, curly whole-wheat noodles, simple chashu · 新味 海老節中華麺 (Shin-Aji ebi-bushi chuka men) ¥1,000: salt broth with homemade shrimp, squid and chicken bushi and a red shrimp oil, flat twisted noodles, chashu, white and green onion · Shin-Aji uo-bushi chuka men with niboshi oil · 味玉海老塩油そば (ajitama ebi shio abura soba); special ebi shio mazesoba ¥1,300 · limited shrimp curry mazesoba with cubed rare chashu · niboshi vinegar, mala takuan and lemon on the table · 8 seats',
    website: null, gmaps: gm('麺や 誠風軒 阿波座'), menu_url: null,
    notes: "[Ramen · shrimp-bushi chuka men and shrimp abura soba by Awaza, with morning ramen] A clean, calm eight-seat shop two minutes from Awaza, opened in April 2026 and described by one diner as the next brand from Ramen Kasumi, with morning ramen from 8:00 on Friday to Sunday. Start with the Moto-Aji chuka men, a light but rich, slightly sweet shoyu on curly whole-wheat noodles, or go straight to the Shin-Aji ebi-bushi chuka men (¥1,000): a salt broth of house-made shrimp, squid and chicken bushi that blooms when you stir in the red shrimp oil, over chewy flat twisted noodles. The ebi shio abura soba is the other favorite. Use the table's niboshi vinegar and spicy mala takuan to change it up midway. Cash-only ticket machine; you may get a coupon for next time.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 April 2026 (Tabelog)', background: 'Ramen shop described by an October 2026 diner as "Kasumi\'s next brand" (Ramen Kasumi); Tabelog.', philosophy: 'Menu board: "a fragrant oil soup made with homemade shrimp bushi, squid, and chicken bushi… Seifuuken\'s neo-Chinese ramen" (September 2026 review).', specialty: 'Shrimp-bushi chuka men; ebi shio abura soba.',
      anecdotes: [
        { text: '"When tasting the salt-based broth alone, it had a perfect saltiness and rich umami… Then I mixed in the red liquid that resembled shrimp oil… The flavor and aroma of shrimp spread throughout the broth." — September 2026, Shin-Aji ebi-bushi chuka men ¥1,000.', source: R + 'B535830737/' },
        { text: '"The broth was light yet rich, offering a comforting and flavorful taste… The slightly sweet soy sauce flavor was well pronounced… The curly whole wheat noodles had a wonderful chewy and smooth texture." — September 2026, Moto-Aji chuka soba.', source: R + 'B536288149/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 誠風軒、大阪市西区靱本町3-10-21、阿波座駅から徒歩2分、月〜土 10:00〜15:00(L.O. 14:30)・18:00〜23:00(L.O. 22:30)、日 10:00〜15:00、祝休み、金〜日は8:00から、カード・電子マネー・QR不可、8席、2026年4月20日開店。口コミ(2026年9〜10月): Moto-Aji中華麺、新味 海老節中華麺1,000円、塩ベースに自家製の海老節・烏賊・鶏節の香味油、赤い海老油、チャーシュー、白ねぎ・青ねぎ、平打ちの縮れ麺、麻辣たくあん、煮干し酢、新味 Uo-bushi中華麺、海老塩油そば、優しい甘めの醤油、全粒粉の縮れ麺、七味、清潔で落ち着いた新店、サービス券、特製海老塩まぜそば1,300円、Uo-bushiの中華麺は煮干しオイルの香り、味玉海老塩油そば、現金のみの券売機と両替機、水と紙エプロンはセルフ、朝ラーも、限定の海老カレーまぜそばにレアチャーシューの角切り、「香澄の次のブランド」という声。',
      confidence: 'medium', sources: [TB, R + 'B535830737/', R + 'B536288149/', R + 'B536493283/', R + 'B537018647/', R + 'B537291152/', R + 'B537480000/'] },
    ramen: {
      broth_base: ['shellfish', 'gyokai', 'chicken'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: ['shrimp oil', 'niboshi oil'], richness: 'assari',
      noodles: { thickness: 'medium-thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Curly whole-wheat noodles in the Moto-Aji; flat twisted noodles in the shrimp bowls (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Shin-Aji ebi-bushi chuka men, ¥1,000 (September 2026).',
      chashu: 'Simple chashu; cubed rare chashu in the limited mazesoba (2026).',
      notable_toppings: ['shrimp oil', 'mala takuan', 'niboshi vinegar', 'lemon'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shrimp and fish bushi.' },
      pantheon: 'Awaza\'s shrimp-bushi chuka men and shrimp abura soba, with morning ramen at the weekend.',
      profile: { richness: 3, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536288149/', '"The broth was light yet rich" — mid-scale.'],
        oiliness: [R + 'B535830737/', 'Red shrimp oil stirred in — mid-scale.'],
        clarity: [R + 'B536288149/', '"A beautifully presented bowl with a gentle appearance"; light broth — placed high.'],
        tare_strength: [R + 'B535830737/', '"A perfect saltiness" — mid-scale.'],
        noodle_firmness: [R + 'B535830737/', '"A chewy texture that held their own against the strong umami" — placed high.'],
        aroma_punch: [R + 'B537291152/', '"The fragrant aroma of shrimp filled my nose" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B535830737/', R + 'B536288149/', R + 'B537291152/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash-only ticket machine with change machine; self-service water (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区靱本町3-10-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (opened April 2026); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区靱本町三丁目10番21号 (go) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535830737/', R + 'B536493283/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Moto-Aji chuka men', '', 'Ramen', 'no', 'no', 'September 2026.', 'moto_aji'),
      it('新味 海老節中華麺', '', 'Shin-Aji ebi-bushi chuka men', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'ebi_bushi'),
      it('', '', 'Shin-Aji uo-bushi chuka men', '', 'Ramen', 'no', 'no', 'October 2026.', 'uo_bushi'),
      it('味玉海老塩油そば', '', 'Ajitama ebi shio abura soba', '', 'Abura soba', 'no', 'no', 'October 2026.', 'ebi_abura'),
      it('', '', 'Special ebi shio mazesoba', '¥1,300', 'Abura soba', 'no', 'no', 'September 2026.', 'tokusei_maze'),
      it('', '', 'Shrimp curry mazesoba (limited)', '', 'Limited', 'no', 'no', 'October 2026.', 'curry_maze'),
    ] }, {
    cuisine: '「ネオ中華」の海老と魚の中華麺・Moto-Aji中華麺: 軽いのにコクのある甘めの醤油、全粒粉の縮れ麺、シンプルなチャーシュー・新味 海老節中華麺1,000円: 自家製の海老節、烏賊、鶏節の塩スープに赤い海老油、もちもちの平打ち縮れ麺、チャーシュー、白ねぎ・青ねぎ・煮干しオイルの新味 Uo-bushi中華麺・味玉海老塩油そば、特製海老塩まぜそば1,300円・限定の海老カレーまぜそば、角切りのレアチャーシュー・卓上に煮干し酢、麻辣たくあん、レモン・8席',
    neighborhood: '西区靱本町3-10-21。阿波座駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。全粒粉と小麦の平打ち麺、醤油と塩のたれ。',
    vegan_detail: 'ヴィーガンではありません。海老・烏賊・鶏の節、煮干し、チャーシュー。',
    notes: '[ラーメン・阿波座近く、海老節の中華麺と海老の油そば、週末は朝ラー] 阿波座から2分、清潔で落ち着いた8席の店で、2026年4月開店、「香澄の次のブランド」という声、金〜日は朝8時から朝ラーも。まずはMoto-Aji中華麺: 軽いのにコクのある甘めの醤油に全粒粉の縮れ麺。あるいはすぐに新味 海老節中華麺(1,000円)へ: 自家製の海老節、烏賊、鶏節の塩スープは、赤い海老油を混ぜると一気に海老が香り、もちもちの平打ち縮れ麺と。海老塩油そばももう一つの人気。途中で卓上の煮干し酢と辛い麻辣たくあんで味変を。現金のみの券売機、次回のサービス券をもらえることも。',
  });
}

// ================================================================ らーめん砦 大阪京町堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27098694/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_toride_kyomachibori', name: 'らーめん砦 大阪京町堀店 (Ramen Toride Osaka Kyomachibori)', category: 'OMNI',
    lat: 34.68781, lng: 135.495241, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam broth; chashu; clam rice bowl.',
    hours_raw: 'Daily 11:30–23:00 (L.O. 22:30); public holidays 11:30–22:00 (L.O. 21:45); closing days vary (Tabelog). Cards, IC cards, e-money and QR accepted (Tabelog). LINE coupons.',
    hours: ALL(day(['11:30', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyomachibori 1-10-10 — 5 min from Higobashi Stn exit 7',
    cuisine: 'Clam paitan ramen · Toride ramen: milky, creamy clam broth, thick yet clean, thin noodles, rare chashu, charred green onion, kaiware, shredded nori · Toride set ¥1,100 with "dunk rice" to finish risotto-style · clam rice bowl and seasoned-egg set · chilled clam ramen with thicker chashu · limited niboshi ramen with pork and chicken-breast chashu · 14 counter seats and a table for four',
    website: null, gmaps: gm('らーめん砦 京町堀'), menu_url: null,
    notes: "[Ramen · creamy clam paitan with dunk rice near Higobashi] A calm counter in Kyomachibori, open all day since 2017, whose Toride ramen is a milky clam paitan that one diner likened to clam chowder: thick and rich but with a clean, oceanic finish, on thin noodles with rare chashu and charred green onion. Get the Toride set (¥1,100) and tip the \"dunk rice\" into the last of the soup for a risotto-like finish, or pair the bowl with a clam rice bowl and a well-seasoned egg. A chilled version comes with thicker chashu, and a gentle limited niboshi ramen has appeared. Light enough that one diner found it went down easily even with no appetite. Open daily until 23:00; cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2017 (Tabelog)', background: 'Clam paitan ramen shop, Kyomachibori branch (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Clam paitan ramen.',
      anecdotes: [
        { text: '"The Toride Ramen features a creamy and rich clam-based broth. It\'s thick yet has a refreshing aftertaste, perfectly complementing the thin noodles." — July 2026, Toride set.', source: R + 'B532346879/' },
        { text: '"In a nutshell, it tastes like clam chowder, but it\'s impressive how it has been transformed into ramen… a delicious ramen that was light and easy to eat." — June 2025, clam paitan ramen.', source: R + 'B509129046/' },
      ],
      japanese_sources_summary: '食べログ: らーめん砦 大阪京町堀店、大阪市西区京町堀1-10-10、四つ橋線肥後橋駅7番出口から徒歩約5分、淀屋橋から約10分、毎日11:30〜23:00(L.O. 22:30)、祝 11:30〜22:00、不定休、カード・電子マネー・QR可、18席(カウンター14、4人席1)、2017年6月1日開店。口コミ(2025年6月〜2026年10月): 限定の煮干しラーメンはやさしい、チャーシューと鶏むねチャーシュー、メンマ、ねぎ、蛤の白湯ラーメン、食欲がなくても食べられる、クラムチャウダーのよう、軽く食べやすい、砦セット1,100円、LINEクーポンで替え玉、Dunk Riceでリゾット風に、渋谷の砦とは違う貝の白湯、貝の旨み、砦丼セット(砦らーめん、味玉、蛤の丼)、濃厚だが後味はさっぱり、細麺、落ち着いた店内、焦がしねぎの香り、冷やしはチャーシューが厚い、乳白色の貝スープ、レアチャーシュー、かいわれ、刻み海苔。',
      confidence: 'medium', sources: [TB, R + 'B509129046/', R + 'B526225254/', R + 'B528979954/', R + 'B532346879/', R + 'B535983056/', R + 'B537924619/'] },
    ramen: {
      broth_base: ['shellfish'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles (July 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Toride ramen, clam paitan; Toride set ¥1,100 (April 2026).',
      chashu: 'Moist rare chashu (October 2026); thicker in the chilled version.',
      notable_toppings: ['charred green onion', 'kaiware', 'shredded nori', 'dunk rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam broth.' },
      pantheon: 'Kyomachibori\'s clam-chowder-like clam paitan, finished with dunk rice.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B532346879/', '"A creamy and rich clam-based broth" — placed high.'],
        oiliness: [R + 'B535983056/', '"Rich but not too heavy" — placed low.'],
        clarity: [R + 'B537924619/', '"The milky white soup" — bottom of scale.'],
        tare_strength: [R + 'B535983056/', '"The flavor of the shellfish was well-balanced, not overpowering" — mid-scale.'],
        noodle_firmness: [R + 'B532346879/', 'Thin noodles; no remark on firmness — mid-scale.'],
        aroma_punch: [R + 'B537924619/', '"The subtle fresh scent of the ocean" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B532346879/', R + 'B535983056/', R + 'B537924619/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm counter; cards, IC and QR accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区京町堀1-10-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026; OSM node らーめん砦 2 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区京町堀一丁目10番10号 (go) 2m; OSM node/5638565222 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526225254/', R + 'B532346879/'],
    price_note: 'Set price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Toride ramen (clam paitan)', '', 'Ramen', 'no', 'no', 'July 2026.', 'toride'),
      it('', '', 'Toride set with dunk rice', '¥1,100', 'Sets', 'no', 'no', 'April 2026.', 'toride_set'),
      it('', '', 'Toride rice-bowl set (ramen, seasoned egg, clam rice bowl)', '', 'Sets', 'no', 'no', 'July 2026.', 'toride_don'),
      it('', '', 'Chilled clam ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'hiyashi'),
      it('', '', 'Niboshi ramen (limited)', '', 'Limited', 'no', 'no', 'April 2026.', 'niboshi'),
    ] }, {
    cuisine: '貝の白湯ラーメン・砦らーめん: 乳白色でクリーミーな貝のスープ、濃厚なのに後味すっきり、細麺、レアチャーシュー、焦がしねぎ、かいわれ、刻み海苔・Dunk Riceでリゾット風に締める砦セット1,100円・蛤の丼と味玉のセット・チャーシューが厚めの冷やし・豚と鶏むねのチャーシューの限定煮干しラーメン・カウンター14席と4人席',
    neighborhood: '西区京町堀1-10-10。肥後橋駅7番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、たれ。',
    vegan_detail: 'ヴィーガンではありません。貝のスープ、チャーシュー、蛤の丼。',
    notes: '[ラーメン・肥後橋近く、Dunk Riceで締めるクリーミーな貝の白湯] 京町堀の落ち着いたカウンターの店で、2017年から通し営業、砦らーめんはクラムチャウダーにたとえた人もいる乳白色の貝の白湯: 濃厚でとろりとしつつ海の香りのすっきりした後味、細麺にレアチャーシューと焦がしねぎ。砦セット(1,100円)を頼み、最後のスープに「Dunk Rice」を入れてリゾット風に。蛤の丼とよく味のしみた味玉と合わせるのも。冷やしはチャーシューが厚く、やさしい限定の煮干しラーメンが出たことも。食欲がない日でもするする入ったという声。毎日23時まで、カード、QR可。',
  });
}

save();
