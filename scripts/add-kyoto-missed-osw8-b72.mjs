// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 72.
//   + classlobe (parfait café in a Takakura-Bukkoji machiya; rest)
//   + 久味 Hisami (late-night udon izakaya off Hanamikoji; rest)
//   + Caffè Terrace ISOLA (seasonal sweets "gozen" on Daimaru Kyoto's 8F roof terrace; rest)
//   + 滔々と、 Toutou to, (Showa kissa carrying on Kissa Suzuki, Yumiya-cho; rest)
//   Rest list (mod 6 = 1) after batch 71, nearest-first — skipped:
//   - 笹屋伊織 大丸京都店 26017993: chain — twelve or more 笹屋伊織 shops (same call as 26001464).
//   - 甘多 26025613: no review dated 2025–26 (latest July 2024).
//   - ガラムとマサラ 大丸京都店 26044147: take-away counter in the Daimaru Kyoto B1F food hall (bread), not a restaurant.
//   - M Stand 三条鴨川店 26043649: chain — M Stand (same call as 26043917, osw9-54).
//   - 神戸開花亭 大丸京都店 26030359: take-away counter in the Daimaru Kyoto B1F food hall, branch of a Kobe brand; not a restaurant.
//   - 居酒屋それゆけ！鶏ヤロー！ 京都三条店 26044243: chain (same call as 26043210).
//   Brand check: queue-status.jsonl grepped for classlobe / world tea labo, 久味, ISOLA, 滔々 — no entries. ISOLA is the
//   sister of TEA LOUNGE ISOLA at Shijo-Karasuma (March 2026 reviews) — small, drafted; neither is in data. None of the four is
//   in data/kyoto.json (main 6b938b1c, hidden records included) by name or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-72');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26017993/', 'chain: 笹屋伊織 — a Tabelog name search lists twelve or more Sasaya Iori shops; same call as 26001464');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26025613/', 'no review dated 2025–26: the newest Tabelog review is from July 2024');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26044147/', 'non-restaurant: a bread take-away counter in the Daimaru Kyoto B1F food hall');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26043649/', 'chain: M Stand — same call as 26043917 (osw9-54)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26030359/', 'non-restaurant: a take-away counter in the Daimaru Kyoto B1F food hall (食品売場), branch of the Kobe brand 神戸開花亭');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26044243/', 'chain: それゆけ！鶏ヤロー！ — same call as 26043210');

// ================================================================ classlobe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037547/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://classlobebyworldtealabo.com/';
  const H = day(['13:00', '17:45']);
  put({
    id: 'kyoto_classlobe', name: 'classlobe', category: 'OMNI',
    lat: 35.00140154787268, lng: 135.76251873032413, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: parfaits are layered with cookies, cake and crumble (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: parfaits of cream, milk ice cream and chocolate (2026 reviews).',
    hours_raw: 'Monday and Thursday–Sunday 13:00–17:45; Tuesday 13:00–17:00; closed Wednesday; hours may change (Tabelog). Reservations accepted (Tabelog; August 2026). Cards, e-money and QR (Tabelog). Non-smoking; children welcome; sofa seats and an open terrace (Tabelog). Two floors of a renovated machiya with a small garden; take-away drinks (2026 reviews). Takakura-Bukkoji, about 300 m from Shijo Stn (Tabelog; August 2026). Opened 29 April 2022 (Tabelog).',
    hours: { 0: H, 1: day(['13:00', '17:00']), 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura-Bukkoji, near Shijo-Karasuma',
    cuisine: 'Parfait and tea café by world tea labo in a townhouse (official site; 2026 reviews) · seasonal parfaits: strawberry ¥2,400, haskap from Hokkaido with house crumble, orange and kumquat, mini parfaits such as chocolate ¥1,500 or domestic strawberry with house chocolate ¥1,600 (June–September 2026) · drinks with a parfait from ¥300 (Earl Grey, iced coffee), milk tea, café au lait, a summer berry-and-mango soda (July–September 2026) · about ¥1,500–3,000 (Tabelog)',
    website: WEB, gmaps: gm('classlobe 京都'), menu_url: null,
    notes: '[Parfait café · Takakura-Bukkoji machiya] A calm two-storey townhouse café with a small garden, building tall seasonal parfaits — strawberry, Hokkaido haskap, orange and kumquat — layer by layer with jelly, crumble and milk ice cream, or a smaller mini parfait with tea. Afternoons only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the official site: CLASS LOBE by world tea labo, a café in Shimogyo-ku. Per Tabelog: opened 29 April 2022 in a renovated townhouse.',
      philosophy: null, specialty: 'Seasonal parfaits.',
      anecdotes: [
        { text: 'An August 2026 solo diner in middle age had the haskap parfait with iced coffee in the townhouse with its small garden, admiring the layers from tart fruit down to strawberry jelly.', source: R + 'B534175893/' },
        { text: 'An August 2026 pair, already full, shared mini parfaits while a staff member explained each texture and ice cream.', source: R + 'B534065015/' },
        { text: 'A September 2026 guest found the haskap parfait sold out and the one ordered photogenic but ordinary in taste.', source: R + 'B535750289/' },
      ],
      japanese_sources_summary: '公式サイト: CLASS LOBE (クラスローブ) by world tea labo、京都市下京区のカフェ。食べログ: カフェ・ジェラート・アイスクリーム、下京区西前町367-4、四条駅から303m、月・木〜日 13:00〜17:45、火 13:00〜17:00、水曜休み、予約可、カード・電子マネー・QR 可、禁煙、子ども可、ソファ席・テラス、2022年4月29日開店。口コミ (2026年6月〜9月、英語): 町家を改装した2階建てのカフェと小さな庭、季節のパフェ (いちご2,400円、北海道のハスカップと自家製クランブル、オレンジと金柑、チョコのミニパフェ1,500円、国産いちごと自家製チョコのミニパフェ1,600円)、パフェとセットの飲み物300円、ミルクティー、カフェオレ、夏のベリーとマンゴーのソーダ、ハスカップが売り切れで味は普通だったとの声 (2026年9月)、テイクアウトもできる。',
      confidence: 'medium', sources: [TB, WEB, R + 'B529287155/', R + 'B529523517/', R + 'B533016426/', R + 'B533023445/', R + 'B533140007/', R + 'B534065015/', R + 'B534175893/', R + 'B534797588/', R + 'B535750289/', R + 'B536060722/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead at weekends; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西前町367-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001402, 135.762519); cross-checked: GSI 京都府京都市下京区西前町367番地 (lot) 34 m; nearest existing record 30.3 m (kyoto_feliz_maruto); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533140007/', R + 'B534797588/'],
    price_note: 'Prices from July and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Strawberry parfait', '¥2,400', 'Parfaits', 'no', 'no', 'August 2026.', 'strawberry'),
      it('', '', 'Chocolate mini parfait', '¥1,500', 'Parfaits', 'no', 'no', 'August 2026.', 'mini_choco'),
      it('', '', 'Domestic strawberry and house chocolate mini parfait', '¥1,600', 'Parfaits', 'no', 'no', 'July 2026; drink set +¥300.', 'mini_strawberry'),
    ] }, {
    cuisine: 'world tea labo の町家のパフェとお茶のカフェ (公式サイト、2026年の口コミ)・季節のパフェ: いちご2,400円、北海道のハスカップと自家製クランブル、オレンジと金柑、チョコのミニパフェ1,500円、国産いちごと自家製チョコのミニパフェ1,600円 (2026年6〜9月)・パフェとセットの飲み物300円から (アールグレイ、アイスコーヒー)、ミルクティー、カフェオレ、夏のベリーとマンゴーのソーダ (2026年7〜9月)・1,500〜3,000円ほど (食べログ)',
    neighborhood: '高倉仏光寺、四条烏丸のそば',
    gf_detail: 'グルテンフリー不可。パフェにクッキー、ケーキ、クランブルが入る (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリーム、ミルクアイス、チョコレートのパフェ (2026年の口コミ)。',
    notes: '[パフェのカフェ・高倉仏光寺の町家] 小さな庭のある静かな2階建ての町家カフェ。いちご、北海道のハスカップ、オレンジと金柑など季節のパフェを、ゼリー、クランブル、ミルクアイスと層に重ねて。小さめのミニパフェとお茶も。午後のみ、水曜休み。',
  });
}

// ================================================================ 久味 Hisami
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030587/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '26:00']);
  put({
    id: 'kyoto_hisami_gion', name: '久味 (Hisami)', category: 'OMNI',
    lat: 35.00521136, lng: 135.775408, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: udon and soba, tempura, fried shrimp and katsudon (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, herring, fish, beef and offal (2024–2026 reviews).',
    hours_raw: 'Monday–Saturday 18:00–2:00 (last order 1:30); closed Sunday, plus irregular days; hours may change (Tabelog). Busiest around 19:00; easier after 21:00 (March 2026). Reservations accepted (Tabelog; April 2026). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). 13 seats: 7 at the counter, 6 at tables (Tabelog). Smoking allowed (Tabelog). Seven Building 1F, a little north of Shijo off Hanamikoji (Tabelog; December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, just north of Shijo off Hanamikoji',
    cuisine: 'Late-night izakaya with udon and soba to finish (Tabelog; 2024–2026 reviews) · a long menu of small plates: obanzai, sashimi, mentaiko with shirataki, sweet-and-spicy squid, octopus or corn tempura, fried shrimp, grilled outside skirt, fried tripe, fresh oysters, the "Yamamoto steak" served like an ajillo (2024–2026 reviews) · to finish: nabeyaki udon, chicken nanban udon, special nishin soba and nishin don, meat soba, katsudon (2024–2026 reviews) · sake and shochu (Tabelog) · about ¥3,000–8,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('久味 祇園'), menu_url: null,
    notes: '[Udon izakaya · Gion, till 2 a.m.] A small, friendly Gion counter where the night crowd ends up: a long list of small plates — sashimi, fried shrimp, mentaiko shirataki, grilled skirt — then nabeyaki udon or herring soba to finish. Packed early in the evening; easier after 9 p.m. Closed Sunday; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a 13-seat izakaya on the Hanamikoji side of Gion open until 2:00, known for its udon and a wide menu from obanzai to finishing noodles and rice bowls, with many regulars (2024–2026 reviews).',
      philosophy: null, specialty: 'Nabeyaki udon; nishin soba.',
      anecdotes: [
        { text: 'A January 2026 regular insists on the nabeyaki udon and the tarako shirataki on the side; the place is always packed.', source: R + 'B520889822/' },
        { text: 'An August 2026 party of four with guests from Tokyo shared sashimi, grilled skirt, fried shrimp and oysters, then chicken nanban udon.', source: R + 'B527316324/' },
        { text: 'A September 2025 visitor was sent here after drinks by a bar hostess and found everything tasty, especially the udon.', source: R + 'B515857529/' },
      ],
      japanese_sources_summary: '食べログ: うどん・居酒屋、東山区清本町378 セブンビル 1F、祇園四条から372m、月〜土 18:00〜翌2:00 (L.O.1:30)、日曜休み、不定休、予約可、カード (JCB・AMEX・Diners) 可、電子マネー・QR 不可、13席 (カウンター7、テーブル6)、喫煙可、日本酒・焼酎。口コミ (2024年3月〜2026年8月、英語): 花見小路の四条の少し北、おばんざい、刺身、明太子の糸こん、いかの甘辛、たこや、とうもろこしの天ぷら、海老フライ、ハラミ、揚げたホルモン、生牡蠣、アヒージョ風の「Yamamoto Steak」、締めの鍋焼きうどん、鶏南蛮うどん、特製にしんそば、にしん丼、肉そば、かつ丼、店主と料理人のもてなし (2026年4月)、19時は混み21時ごろから空く (2026年3月)、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B482623736/', R + 'B488976889/', R + 'B493388704/', R + 'B496979373/', R + 'B515857529/', R + 'B520889822/', R + 'B522546117/', R + 'B525473192/', R + 'B527316324/', R + 'B529552901/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small late-night counter; cards (JCB, AMEX, Diners); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町378 セブンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005211, 135.775463) moved 5.0 m west to (35.005211, 135.775408): the Tabelog point is 1.8 m from kyoto_shinya_shokudo_kochan_gion in the same building (清本町378 セブンビル 1F), now 6.6 m; GSI 京都府京都市東山区清本町378番地 (lot) 10 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520889822/', R + 'B488976889/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Nabeyaki udon', '', 'Udon', 'no', 'no', 'January 2026.', 'nabeyaki'),
      it('', '', 'Special nishin soba', '', 'Soba', 'no', 'no', 'July 2024.', 'nishin'),
      it('', '', 'Tarako shirataki', '', 'Small plates', 'ask', 'no', 'January 2026.', 'tarako'),
    ] }, {
    cuisine: '締めにうどんやそばのある深夜の居酒屋 (食べログ、2024〜2026年の口コミ)・品数の多い小皿: おばんざい、刺身、明太子の糸こん、いかの甘辛、たこやとうもろこしの天ぷら、海老フライ、ハラミ焼き、揚げたホルモン、生牡蠣、アヒージョ風の「Yamamoto Steak」(2024〜2026年の口コミ)・締めは鍋焼きうどん、鶏南蛮うどん、特製にしんそばとにしん丼、肉そば、かつ丼 (2024〜2026年の口コミ)・日本酒と焼酎 (食べログ)・3,000〜8,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '祇園、花見小路の四条のすぐ北',
    gf_detail: 'グルテンフリー不可。うどんとそば、天ぷら、海老フライ、かつ丼 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし、にしん、魚、牛肉、ホルモン (2024〜2026年の口コミ)。',
    notes: '[うどんの居酒屋・祇園、深夜2時まで] 夜の祇園の客が最後に流れつく、小さく気さくなカウンター。刺身、海老フライ、明太子の糸こん、ハラミ焼きなど品数の多い小皿のあと、鍋焼きうどんやにしんそばで締め。早い時間は満席、21時以降が入りやすい。日曜休み、喫煙可。',
  });
}

// ================================================================ Caffè Terrace ISOLA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044711/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '17:30']);
  put({
    id: 'kyoto_caffe_terrace_isola_daimaru', name: 'Caffè Terrace ISOLA', category: 'OMNI',
    lat: 35.004346, lng: 135.76203032, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the gozen sets are mostly cakes, cookies, crêpes, roll cake and mille-feuille (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: panna cotta, cheesecake, ice cream and cream sweets (2026 reviews).',
    hours_raw: 'Daily 13:00–17:30; closed when Daimaru Kyoto is closed (Tabelog). No reservations; a queue forms before 13:00 (Tabelog; June 2026). The seasonal gozen is limited and can sell out, with a restock around 15:00 (April 2026). Cards, e-money and QR (Tabelog). 26 seats indoors plus the rooftop terrace; wheelchair accessible; children welcome (Tabelog; 2026 reviews). Spend ¥2,000 or more and borrow a picnic set for the roof garden free (March 2026). Drinks come in paper cups even to eat in (March 2026). 8F of Daimaru Kyoto, by the roof garden; reached underground from Hankyu Karasuma and Shijo Stns (Tabelog). Opened 19 March 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'varies',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daimaru Kyoto 8F, Shijo-Karasuma',
    cuisine: 'Seasonal fruit sweets and espresso by the roof garden, sister to TEA LOUNGE ISOLA (2026 reviews) · "colour gozen" boxes of about ten small sweets with a drink: strawberry ¥2,000 (March), matcha (June), peach (July), fig and Shine Muscat, matcha and sencha ¥2,500 (October) (2026 reviews) · strawberry parfait with Tango strawberries and Basque cheesecake; summer kakigori such as matcha and peach (March–July 2026) · espresso, selected teas and hojicha (2026 reviews) · about ¥2,000–3,000 (Tabelog)',
    website: null, gmaps: gm('Caffè Terrace ISOLA 大丸京都店'), menu_url: null,
    notes: '[Sweets café · Daimaru Kyoto 8F, roof terrace] A bright café beside Daimaru\'s roof garden from the team behind TEA LOUNGE ISOLA: seasonal "colour gozen" boxes of ten tiny sweets — strawberry, peach, matcha — with tea or espresso, plus parfaits and summer kakigori, indoors or out on the terrace. Opens 13:00; queue early, the gozen sells out.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: the sister café of the popular TEA LOUNGE ISOLA at Shijo-Karasuma, opened on the 8th floor of Daimaru Kyoto in March 2026 (Tabelog: 19 March 2026), next to the rooftop garden.',
      philosophy: null, specialty: 'Seasonal colour gozen.',
      anecdotes: [
        { text: 'An April 2026 visitor found the strawberry gozen sold out just before 14:00; the staff kept one from the 15:00 restock for the guest to come back for.', source: R + 'B527752762/' },
        { text: 'A March 2026 guest borrowed the free picnic set, offered on spends over ¥2,000, to eat a strawberry parfait out on the roof terrace.', source: R + 'B525311109/' },
        { text: 'A March 2026 diner liked the prices but not the paper cups for eat-in, nor the ageing roof building around the terrace.', source: R + 'B525776975/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、下京区四条通高倉西入立売西町79 大丸京都店 8F、阪急烏丸駅・地下鉄四条駅から地下でつながる、毎日 13:00〜17:30、大丸京都店の休みに準ずる、予約不可、カード・電子マネー・QR 可、26席、テラス、車椅子可、子ども可、2026年3月19日開店。口コミ (2026年3月〜10月、英語): 四条烏丸の TEA LOUNGE ISOLA の姉妹店、屋上庭園の隣、季節の「Colour Gozen」(小さな菓子約10種と飲み物): いちご2,000円 (3月)、抹茶 (6月)、桃 (7月)、無花果とシャインマスカット、抹茶と煎茶2,500円 (10月)、丹後のいちごのパフェ、夏のかき氷、エスプレッソとお茶、2,000円以上でピクニックセットを無料で貸し出し (2026年3月)、御膳は数量限定で15時に追加 (2026年4月)、13時前から行列 (2026年6月)、店内でも紙コップ (2026年3月)。',
      confidence: 'medium', sources: [TB, R + 'B524675946/', R + 'B525311109/', R + 'B525776975/', R + 'B526882814/', R + 'B527752762/', R + 'B530050124/', R + 'B531664052/', R + 'B531800575/', R + 'B537230456/', R + 'B537337753/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; queue before 13:00; wheelchair accessible; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通高倉西入立売西町79 大丸京都店 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened March 2026; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004301, 135.762030) moved 5.0 m north to (35.004346, 135.762030): the Tabelog point is 0.0 m from kyoto_yoshimura_daimaru_bettei (also Daimaru Kyoto 8F), now 5.0 m; GSI matches only the town 立売西町 (71 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524675946/', R + 'B537230456/'],
    price_note: 'Prices from March and October 2026 reviews, with a drink.', last_checked: TODAY, items: [
      it('', '', 'Strawberry colour gozen with a drink', '¥2,000', 'Sweets', 'no', 'no', 'March 2026; seasonal.', 'gozen_strawberry'),
      it('', '', 'Matcha and sencha colour gozen with a drink', '¥2,500', 'Sweets', 'no', 'no', 'October 2026; seasonal.', 'gozen_matcha'),
    ] }, {
    cuisine: 'TEA LOUNGE ISOLA の姉妹店で、屋上庭園のそばの季節の果物の菓子とエスプレッソ (2026年の口コミ)・小さな菓子約10種と飲み物の「Colour Gozen」: いちご2,000円 (3月)、抹茶 (6月)、桃 (7月)、無花果とシャインマスカット、抹茶と煎茶2,500円 (10月) (2026年の口コミ)・丹後のいちごとバスクチーズケーキのパフェ、夏の抹茶や桃のかき氷 (2026年3〜7月)・エスプレッソ、厳選のお茶、ほうじ茶 (2026年の口コミ)・2,000〜3,000円ほど (食べログ)',
    neighborhood: '大丸京都店 8階、四条烏丸',
    gf_detail: 'グルテンフリー不可。御膳はケーキ、クッキー、クレープ、ロールケーキ、ミルフィーユが中心 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。パンナコッタ、チーズケーキ、アイス、クリームの菓子 (2026年の口コミ)。',
    notes: '[甘味のカフェ・大丸京都店8階、屋上テラス] TEA LOUNGE ISOLA の姉妹店で、大丸の屋上庭園の隣の明るいカフェ。いちご、桃、抹茶など季節の小さな菓子10種を箱に詰めた「Colour Gozen」をお茶やエスプレッソで、パフェや夏のかき氷も、店内でもテラスでも。13時開店、御膳は売り切れるので早めに。',
  });
}

// ================================================================ 滔々と、 Toutou to,
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040391/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_toutou_to_yumiyacho', name: '滔々と、 (Toutou to,)', category: 'OMNI',
    lat: 34.99835764222593, lng: 135.77195387664918, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: toast, egg sandwiches, French toast and set meals with fried dishes (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg sandwiches, pudding, omurice and butter toast (2024–2026 reviews).',
    hours_raw: 'Monday, Thursday–Sunday and holidays 8:00–18:00; closed Tuesday and Wednesday, but open on Wednesdays of odd-numbered weeks; hours may change (Tabelog). No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog; June 2025). Counter and table seats (Tabelog). Smoking allowed (Tabelog). Hot water and a damp towel on arrival (November 2024). Yamatooji south of Matsubara near Miyagawa-cho, down narrow lanes; about 400 m from Kiyomizu-Gojo Stn (Tabelog; 2024–2025 reviews). Opened 12 October 2023 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'varies',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yamatooji-Matsubara, near Miyagawa-cho',
    cuisine: 'Showa-era kissa keeping the furniture, recipes and mood of the old Kissa Suzuki (2024–2026 reviews) · morning sets from 8:00, egg sandwich with coffee, butter or cheese toast; the whole menu from opening (April–December 2024) · monthly set meals such as spring rolls and karaage ¥990, pudding omurice (May–June 2024) · firm "adult" pudding ¥480 with bitter caramel, DIY popcorn ¥420, banana juice, cream soda, seasonal French toast (2025–2026 reviews) · under about ¥1,000 (Tabelog)',
    website: null, gmaps: gm('滔々と 弓矢町'), menu_url: null,
    notes: '[Kissa · Yamatooji-Matsubara, from 8 a.m., cash only] A Showa kissa that kept the tables, sofas and till of the beloved Kissa Suzuki, which closed after 53 years: morning toast and coffee from 8, a chunky egg sandwich, a monthly set lunch and a firm pudding with bitter caramel. Hot water and a towel when you sit. Closed Tuesday and most Wednesdays; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per reviewers: opened (Tabelog: 12 October 2023) by a new owner who took over Kissa Suzuki, a local coffee shop of 53 years, keeping its tables, chairs, till and sofas (April 2024) and, per a June 2024 reviewer, its recipes and atmosphere.',
      philosophy: 'Carrying on the recipes and mood of the old Kissa Suzuki (June 2024).', specialty: 'Pudding; egg sandwich.',
      anecdotes: [
        { text: 'A November 2024 visitor overheard locals discussing a small rise in breakfast prices, and was warmed by hot water rather than cold on a chilly morning.', source: R + 'B496596260/' },
        { text: 'An October 2026 guest copied another table and ordered the DIY popcorn, taking the leftovers home, with a firm adult pudding.', source: R + 'B538030509/' },
        { text: 'An April 2024 visitor loved the egg sandwich but found the service curt when asking for toast without butter.', source: R + 'B483204918/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店、東山区大和大路通り松原下る弓矢町35、清水五条から394m、月・木〜日・祝 8:00〜18:00、火・水休み (奇数週の水曜は営業)、予約不可、カード・電子マネー・QR 不可、カウンター席、喫煙可、2023年10月12日開店。口コミ (2024年4月〜2026年10月、英語): 53年続いたKissa Suzukiを新しい店主が引き継ぎ、テーブル、椅子、レジ、ソファもそのまま、レシピと雰囲気も受け継ぐ (2024年6月)、朝8時からモーニング、たまごサンド、バタートースト、チーズトースト、月替わりの定食 (春巻きと唐揚げ990円)、プリンオムライス、固めの大人のプリン480円、DIY ポップコーン420円、バナナジュース、クリームソーダ、季節のフレンチトースト、最初にお湯とおしぼり (2024年11月)、現金のみ (2025年6月)、バターなしを断られ接客が冷たかったとの声 (2024年4月)。',
      confidence: 'medium', sources: [TB, R + 'B483204918/', R + 'B484384483/', R + 'B484828242/', R + 'B486486619/', R + 'B496596260/', R + 'B507986547/', R + 'B519664064/', R + 'B519872379/', R + 'B531283949/', R + 'B538030509/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; local regulars; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通り松原下る弓矢町35',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998358, 135.771954); cross-checked: GSI 京都府京都市東山区弓矢町35番地 (lot) 1 m; nearest existing record 30.8 m (kyoto_yakisoba_oyaji); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538030509/', R + 'B484828242/'],
    price_note: 'Prices from May 2024 and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Adult pudding', '¥480', 'Sweets', 'ask', 'no', 'October 2026.', 'pudding'),
      it('', '', 'DIY popcorn', '¥420', 'Snacks', 'ask', 'ask', 'October 2026.', 'popcorn'),
      it('', '', 'Monthly set meal', '¥990', 'Meals', 'no', 'no', 'May 2024.', 'set'),
    ] }, {
    cuisine: '閉店したKissa Suzukiの家具、レシピ、雰囲気を受け継ぐ昭和の喫茶 (2024〜2026年の口コミ)・朝8時からのモーニング、たまごサンドとコーヒー、バタートーストやチーズトースト、開店からどのメニューも注文できる (2024年4〜12月)・春巻きと唐揚げなどの月替わり定食990円、プリンオムライス (2024年5〜6月)・苦めのカラメルの固い「大人のプリン」480円、DIY ポップコーン420円、バナナジュース、クリームソーダ、季節のフレンチトースト (2025〜2026年の口コミ)・1,000円未満ほど (食べログ)',
    neighborhood: '大和大路松原、宮川町のそば',
    gf_detail: 'グルテンフリー不可。トースト、たまごサンド、フレンチトースト、揚げ物の定食 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。たまごサンド、プリン、オムライス、バタートースト (2024〜2026年の口コミ)。',
    notes: '[喫茶・大和大路松原、朝8時から、現金のみ] 53年続いて閉店したKissa Suzukiのテーブル、ソファ、レジを受け継いだ昭和の喫茶。8時からトーストとコーヒーのモーニング、具だくさんのたまごサンド、月替わりの定食、苦いカラメルの固いプリン。席に着くとお湯とおしぼり。火曜とほとんどの水曜は休み、喫煙可。',
  });
}

save();
