// Ginza Station half-mile sweep (805 m), batch 19 — mom-and-pop discovery: kissaten (+ one heritage yōshoku).
//   + カフェ・ド・ランブル (1948; founder Sekiguchi Ichirō d. 2018; now his nephew Hayashi Fujihiko → MOM_AND_POP)
//   + 樹の花 (1979; owner Narusawa Hiroko; John & Yoko on day 4 → MOM_AND_POP)
//   + 十一房珈琲店 (1978; owner Hasegawa Yoshikazu, a former regular who took it over → MOM_AND_POP)
//   + 銀座 みかわや (1887 grocer → French/yōshoku after the war under president Tonaka Toyoichirō; company → OMNI)
// Tabelog ids from the /en/ cafe lists (A130101, A130103). Sources: san-tatsu (2021, 2025), ginza-mikawaya.com
// history page, Tabelog /en/ listings + dated 2026 reviews. Pins: Tabelog geo + GSI + OSM.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ カフェ・ド・ランブル
{
  const ST = 'https://san-tatsu.jp/articles/109653/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13002564/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '20:00']);
  put({
    id: 'tokyo_cafe_de_lambre_ginza', name: 'カフェ・ド・ランブル (Café de l\'Ambre)', category: 'MOM_AND_POP',
    lat: 35.66793, lng: 139.762307,
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The shop serves only coffee — staff ask "We only serve coffee, is that alright?" — so there is no food to worry about. Plain black coffee contains no gluten. The Blanc et Noir adds sugar, a little caramel and evaporated milk; ask about any flavoured drink.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Coffee only. Black coffee (e.g. Café Noir) is plant-only; the signature Blanc et Noir is topped with evaporated milk, and milk is offered with other drinks.',
    hours_raw: 'Tue–Sat 11:00–20:00; Sun 11:00–18:00; closed Mondays (Tabelog). No cards; iD and PayPay accepted. Coffee only; non-smoking.',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: wk, 6: day(['11:00', '18:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, a back street near the 8-chōme crossing — 5 min from Shimbashi',
    cuisine: 'Coffee only since 1948 · aged "old coffee" · nel drip · Blanc et Noir (Queen of Amber)', cuisine_type: 'kissaten',
    website: null, gmaps: gm('カフェ・ド・ランブル 銀座8-10-15'), menu_url: null,
    notes: "[Mom & Pop · coffee only since 1948] A coffee-only shop that opened in Ginza in 1948, three years after the war, and for coffee people a place of pilgrimage. Founder Sekiguchi Ichirō, who pioneered 'old coffee' (green beans aged ten years or more before roasting), died in 2018 at 103. His nephew Hayashi Fujihiko, who was in and out of the shop as a child and working there before twenty, now runs it. The ice-box fridge and the balance scale with brass weights date from opening day and are still used to weigh every order. Hayashi pours from an enamel pot while moving the flannel dripper, into a small hammered-copper pan made by a regular. The signature is No. 7, Blanc et Noir, 'Queen of Amber': sweetened coffee chilled in a shaker, poured into a champagne glass and floated with evaporated milk (¥850 single in 2021); Café Noir blend ¥750. A cowbell rings as the door opens; in 2026 the small room fills with overseas visitors.",
    chef_bio: {
      chef_name: '林不二彦 (Hayashi Fujihiko, owner) — founder 関口一郎 (Sekiguchi Ichirō, died 2018 aged 103)', roles: ['owner (nephew of the founder)'],
      origin: 'Opened 1948 in Ginza; founder died 2018 aged 103',
      background: 'Hayashi is the nephew of founder Sekiguchi Ichirō, about fifty years his junior. He spent childhood summers at the shop, began working there before twenty, and took it over "a long time ago" as a natural course rather than out of passion.',
      philosophy: '「モタモタやっていたらおいしいものもおいしくないでしょう？ 同じ味でも手際良く出した方が、ね」 — be quick; slow service spoils good coffee.',
      specialty: 'Aged old coffee; Blanc et Noir (Queen of Amber); flannel-drip blends.',
      anecdotes: [
        { text: 'Asked why they still use the ice-box fridge and weight scale from 1948: 「壊れないから」 — "because they don\'t break."', source: ST },
        { text: 'The copper pan that catches the coffee was designed by a pot-maker who used to come in as a customer.', source: ST },
        { text: '"Upon entering, the staff asked, \'We only serve coffee, is that alright?\'" — October 2026.', source: R + 'B536896694/' },
      ],
      japanese_sources_summary: 'さんたつ(2021.6.25): カフェ・ド・ランブル、1948年創業、創業者・関口一郎さん(2018年に103歳で死去、オールドコーヒーを確立)、現店主・林不二彦さん(関口さんの甥、20歳前から店で働く)、開店当時からの氷で冷やす冷蔵庫と分銅のはかり、琺瑯のポットとネルドリッパー、銅の打ち出し鍋、ブラン・エ・ノワール(琥珀の女王)シングル850円、カフェ・ノワール750円、特注のグラインダー。食べログ: 銀座8-10-15、火〜土11:00〜20:00、日〜18:00、月休、カード不可・iD・PayPay可。',
      confidence: 'high', sources: [ST, TB, R + 'B536896694/', R + 'B536923236/', R + 'B537493043/', R + 'B537196238/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter-and-table room; coffee only, non-smoking; staff check you understand that at the door. No cards (iD and PayPay OK).' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Blanc et Noir is floated with evaporated milk (エバミルク).', source: ST }],
      staff_allergy_handling: [],
      positives: [{ text: 'A coffee-only shop — no food is served.', source: R + 'B536896694/' }],
      confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-10-15 SBM BLDG 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目10番15号 (go) 3m; OSM node 4367486089 「Cafe de l'ambre」 2m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [ST, R + 'B536923236/', R + 'B537099816/'],
    price_note: 'Prices from the June 2021 san-tatsu feature; expect increases.', last_checked: TODAY, items: [
      it('ブラン・エ・ノワール(琥珀の女王)', 'buran e nowaaru', 'No. 7 Blanc et Noir, "Queen of Amber" (chilled coffee, evaporated milk)', '¥850', 'Coffee', 'ask', 'no', 'Single size, 2021.', 'blanc_et_noir'),
      it('カフェ・ノワール', 'kafe nowaaru', 'Café Noir blend (medium-strong, black)', '¥750', 'Coffee', 'gf', 'vegan', '2021.', 'cafe_noir'),
      it('', '', 'Aged "old coffee" single origins', '', 'Coffee', 'gf', 'vegan', '', 'old_coffee'),
    ] }, {
    cuisine: '1948年創業の珈琲だけの店・オールドコーヒー・ネルドリップ・ブラン・エ・ノワール(琥珀の女王)',
    neighborhood: '銀座八丁目、銀座八丁目交差点近くの路地。新橋駅から徒歩5分',
    gf_detail: 'コーヒーだけの店で、入店時に「コーヒーだけですがよろしいですか」と確認されます。食べ物はありません。ブラックコーヒーにグルテンは含まれません。ブラン・エ・ノワールはグラニュー糖、わずかなカラメル、エバミルク入り。味付きの一杯は内容を確認してください。',
    vegan_detail: 'コーヒーのみ。ブラック(カフェ・ノワールなど)は植物性のみですが、名物のブラン・エ・ノワールはエバミルクを浮かべ、他の一杯にもミルクが付くことがあります。',
    notes: '[個人店・1948年から珈琲だけ] 終戦からわずか3年後の1948年に銀座で開いた「珈琲だけの店」で、コーヒー好きの聖地。生豆を10年以上熟成させてから焙煎するオールドコーヒーを確立した創業者・関口一郎さんは2018年に103歳で亡くなり、子供の頃から店に出入りし20歳前から働いてきた甥の林不二彦さんが継いでいます。開店当時からの氷で冷やす冷蔵庫と分銅のはかりは今も現役で、注文ごとに豆を量ります。林さんは琺瑯のポットを持ち、ネルのドリッパーの方を動かして淹れ、常連の鍋屋さんが考えた銅の打ち出し鍋で受けます。名物はNo.7「ブラン・エ・ノワール(琥珀の女王)」。シェーカーで冷やした加糖のコーヒーをシャンパングラスに注ぎ、エバミルクを浮かべた一杯(2021年でシングル850円)。カフェ・ノワールは750円。ドアを開けるとカウベルが鳴り、2026年は小さな店内が海外からの客で埋まります。',
  });
}

// ================================================================ 樹の花
{
  const ST = 'https://san-tatsu.jp/articles/109429/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13007646/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '18:30']);
  put({
    id: 'tokyo_kissa_kinohana_ginza', name: '樹の花 (Kinohana)', category: 'MOM_AND_POP',
    lat: 35.669762, lng: 139.768981,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The lunch curries come with naan or rice: choose rice, but the curry ingredients are not published. Cakes such as the cheesecake and lemon meringue tart normally contain wheat. Coffee is brewed fresh by hand.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. The bean and vegetable curry (yellow split peas) and the eggplant keema are spiced curries from a recipe left by a young Indian cook, but no source says whether they use ghee, dairy or meat stock; "keema" is usually minced meat. Black coffee is plant-only.',
    hours_raw: 'Mon, Tue, Wed, Fri, Sat 11:30–18:30 (L.O. 18:00); holidays 12:00–17:30; closed Thursdays and Sundays (Tabelog). No cards; e-money and QR accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 4: wk, 5: wk }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, 2F at the corner of Kobikichō-dōri and Matsuya-dōri behind Kabuki-za — 3 min from Higashi-Ginza',
    cuisine: 'Kissaten since 1979 · hand-drip coffee from a copper kettle · Indian-style curries · cheesecake', cuisine_type: 'kissaten',
    website: null, gmaps: gm('樹の花 銀座4-13-1 喫茶'), menu_url: null,
    notes: "[Mom & Pop · the John & Yoko kissaten] Up a narrow, steep stair at the corner behind the Kabuki-za, Narusawa Hiroko opened Kinohana in 1979. She had always wanted work of her own, helped at a friend's restaurant once her children were older, and then studied coffee and café management. On 4 August 1979, its fourth day, Yoko Ono walked in, then John Lennon. Their handwritten note still hangs on the wall, and Beatles fans visit as a pilgrimage. The name comes from a book on her shelf; she loves mountain walking. Beans are delivered from the roaster every other day, ground to order and hand-dripped from a copper kettle (her teacher's habit; this is the third kettle), and she tastes every cup before it goes out. About twenty years in, a young Indian man she met through friends left a curry recipe, and the curries now fill the lunch hour: bean and vegetable curry ¥1,100 and eggplant keema, with salad and coffee for about ¥650 more (2026). Her friend has made the cheesecake since opening. There is also a John Lennon set (¥1,150).",
    chef_bio: {
      chef_name: '成沢弘子 (Narusawa Hiroko, owner)', roles: ['owner-founder'],
      origin: 'Opened in summer 1979 (4 August was its fourth day); Ginza 4-13-1 2F',
      background: 'Long wanted work of her own; after her children grew up she helped at a friend\'s restaurant, then attended a school for coffee brewing and café management before opening.',
      philosophy: 'Fresh beans every other day, ground and hand-dripped to order; she tastes each cup before serving.',
      specialty: 'Original blends from a copper kettle; Indian-style curries; cheesecake.',
      anecdotes: [
        { text: '「ドアが開いたから、『いらっしゃいませ』と顔を向けたらオノ・ヨーコさんが最初に入っていらっしゃって、その後にジョン・レノンさん。本当にびっくり」 — 4 August 1979, the fourth day.', source: ST },
        { text: 'Once, exhausted after late-night prep, she jumped on the last train from Higashi-Ginza and found it going the wrong way.', source: ST },
        { text: 'The book designer Kikuchi Nobuyoshi used 『樹の花』 as the title of one of his books.', source: ST },
      ],
      japanese_sources_summary: 'さんたつ(2021.6.24): 樹の花、木挽町通りと松屋通りの角のビル2階、店主・成沢弘子さん、1979年開店、4日目の8月4日にジョン・レノンとオノ・ヨーコが来店(直筆の便箋)、店名は山歩きが好きな成沢さんの手元の本から、焙煎所から1日おきに豆、銅製のやかん(3代目)、オリジナルブレンド700円から、なすのキーマカレー&ナンorライス1,200円、インド人青年のレシピのカレー、創業当時から友人の作るチーズケーキ、装丁家菊地信義の著書名。食べログ: 月火水金土11:30〜18:30、祝12:00〜17:30、木日休。2026年の口コミ: 豆と野菜のカレー1,100円(+650円でサラダとコーヒー)、ジョン・レノンセット1,150円、レモンメレンゲタルトのセット1,470円。',
      confidence: 'high', sources: [ST, TB, R + 'B111677185/', R + 'B534506641/', R + 'B536178352/', R + 'B536651184/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A steep staircase to a small second-floor room with counter and tables; staff move you to a better seat when one frees up. Lunch fills up quickly.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Curries served with naan or rice.', source: ST }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Eggplant keema curry and bean curry from the same kitchen.', source: R + 'B534506641/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-13-1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目13番1号 (go) 3m; OSM node 14004327592 「樹の花」 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B111677185/', R + 'B536178352/', R + 'B536651184/'],
    price_note: 'Prices from the 2021 feature and August–September 2026 reviews, as marked.', last_checked: TODAY, items: [
      it('樹の花オリジナルブレンド', 'kinohana orijinaru burendo', 'Kinohana original blends (four kinds)', '¥700', 'Coffee', 'gf', 'vegan', 'From ¥700 (2021); black.', 'original_blend'),
      it('豆と野菜のカレー', 'mame to yasai no karee', 'Bean and vegetable curry (yellow split peas)', '¥1,100', 'Lunch', 'ask', 'ask', 'August 2026; +¥650 for salad and coffee.', 'bean_curry'),
      it('なすのキーマカレー', 'nasu no kiima karee', 'Eggplant keema curry with naan or rice', '¥1,200', 'Lunch', 'ask', 'ask', '2021 price.', 'eggplant_keema'),
      it('ジョン・レノンセット', 'jon renon setto', 'John Lennon set', '¥1,150', 'Sets', 'ask', 'ask', 'September 2026.', 'john_lennon_set'),
      it('チーズケーキセット', 'chiizu keeki setto', 'Cheesecake with blend or Darjeeling', '¥1,250', 'Sweets', 'no', 'no', '2021 price.', 'cheesecake_set'),
      it('レモンメレンゲタルトセット', 'remon merenge taruto setto', 'Lemon meringue tart with iced tea or coffee', '¥1,470', 'Sweets', 'no', 'no', 'September 2026.', 'lemon_tart_set'),
    ] }, {
    cuisine: '1979年開店の喫茶店・銅のやかんで淹れるハンドドリップ・インド風カレー・チーズケーキ',
    neighborhood: '銀座四丁目、歌舞伎座裏の木挽町通りと松屋通りの角のビル2F。東銀座駅から徒歩3分',
    gf_detail: '要確認。ランチのカレーはナンかライスを選べるのでライスに。ただしカレーの材料は公表されていません。チーズケーキやレモンメレンゲタルトは通常小麦を含みます。コーヒーはハンドドリップです。',
    vegan_detail: '要確認。豆と野菜のカレー(イエロースプリットピー)やなすのキーマカレーは、インド人青年が残したレシピのスパイスカレーですが、ギー・乳製品・肉の出汁を使うかは書かれていません(キーマは通常挽き肉)。ブラックコーヒーは植物性のみです。',
    notes: '[個人店・ジョンとヨーコの喫茶店] 歌舞伎座裏の角のビル、細く急な階段の上にある喫茶店で、成沢弘子さんが1979年に開きました。若い頃から自分の仕事を持ちたいと思い、子育てが落ち着いてから知人のレストランを手伝い、コーヒーと喫茶店経営の学校に通って開店。4日目の1979年8月4日、オノ・ヨーコさん、続いてジョン・レノンさんが来店し、2人の直筆の便箋は今も飾られてビートルズファンの聖地に。店名は山歩きが好きな成沢さんの手元にあった本から。豆は焙煎所から1日おきに届き、注文ごとに挽いて銅のやかん(先生ゆずり、今は3代目)でハンドドリップし、必ず味見してから出します。開店20年ほどで知り合ったインド人青年のレシピのカレーがランチの人気に。豆と野菜のカレー1,100円、なすのキーマ、+650円ほどでサラダとコーヒー(2026年)。チーズケーキは開店当時から友人の手作り。ジョン・レノンセット(1,150円)もあります。',
  });
}

// ================================================================ 十一房珈琲店
{
  const ST = 'https://san-tatsu.jp/collects/388364/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13007721/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '21:30']);
  put({
    id: 'tokyo_juichibo_coffee_ginza', name: '十一房珈琲店 (Jūichibō Coffee)', category: 'MOM_AND_POP',
    lat: 35.674895, lng: 139.765757,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Black coffee, roasted and brewed in house, contains no gluten. The cakes (chocolate cake, chiffon cake with dried fruit and nuts) normally contain wheat, and no ingredients are published.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Black coffee is plant-only; royal milk tea and the cakes contain dairy or egg as usually made. No vegan item is described.',
    hours_raw: 'Daily 11:00–21:30 (Tabelog). Cash only. No groups of four or more; a quiet room.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme, near the Yūrakubashi crossing — 2 min from Ginza-itchōme, 5 min from Yūrakuchō',
    cuisine: 'Kissaten since 1978 · house-roasted on a "buta-gama" roaster · nel drip, deep roasts and specialty', cuisine_type: 'kissaten',
    website: null, gmaps: gm('十一房珈琲店 銀座2-2-19'), menu_url: null,
    notes: "[Mom & Pop · nel-drip coffee since 1978] A grown-up coffee house near the Yūrakubashi crossing: a long single-plank counter, worn leather chairs, jazz, and no groups of four or more. It opened in 1978 in a basement on Yanagi-dōri and moved here about thirty years ago. Owner Hasegawa Yoshikazu began as a regular, went into coffee work, and took it over because he couldn't bear to see it disappear. He roasts everything on a classic 'buta-gama' roaster in the glass booth by the door, taking specialty beans deeper than most, and every cup is brewed through flannel; staff sew the filters themselves in quiet moments. Blends from ¥920 (2025), plus seasonal single origins, royal milk tea, chocolate cake and fruit-and-nut chiffon.",
    chef_bio: {
      chef_name: '長谷川能一 (Hasegawa Yoshikazu, owner)', roles: ['owner (took over the founding shop)'],
      origin: 'Founded 1978 (basement on Yanagi-dōri); at the present site about 30 years',
      background: 'A former regular who later worked in the coffee trade and took over Jūichibō to keep the old shop alive.',
      philosophy: '「珈琲店が変わらずにあるって大切ですよね」 — a coffee shop that stays the same matters.',
      specialty: 'Deep-roasted specialty and classic blends by nel drip.',
      anecdotes: [
        { text: '「スペシャルティを深めに焼いてネルで落とすって、あまりないでしょう？」', source: ST },
        { text: 'Staff were hand-sewing flannel filters in a quiet moment.', source: ST },
        { text: '"It\'s a place where you must maintain a quiet atmosphere, which is wonderful." — October 2026.', source: R + 'B537452684/' },
      ],
      japanese_sources_summary: 'さんたつ(2025.3.25): 十一房珈琲店、有楽橋交差点近く、1978年創業、当初は柳通りの地下、現在地に約30年、長い一枚板のカウンター、革張りの椅子、4人以上での来店不可、店主・長谷川能一さん(もとは常連、珈琲店の仕事を経て引き継ぐ)、「ブタ釜」で深めに焙煎、ネルドリップ、ブレンド920円〜、スタッフがネルを手縫い。食べログ: 銀座2-2-19、31席(カウンター10・テーブル21)、毎日11:00〜21:30、現金のみ。2026年の口コミ: イタリアンロースト920円、グアテマラ、ロイヤルミルクティー、チョコレートケーキ、ドライフルーツとナッツのシフォン。',
      confidence: 'high', sources: [ST, TB, R + 'B537783940/', R + 'B537452684/', R + 'B537914207/', R + 'B518590057/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A quiet room — keep voices low; no parties of four or more; cash only.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-2-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目2番19号 (go) 5m; OSM node 4757003424 「十一房咖啡店」 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537783940/', R + 'B537914207/', R + 'B537666271/'],
    price_note: 'Blend price from March 2025; others from October 2026 reviews.', last_checked: TODAY, items: [
      it('ブレンド', 'burendo', 'House blends (nel drip)', '¥920', 'Coffee', 'gf', 'vegan', 'From ¥920 (2025).', 'blend'),
      it('イタリアンロースト', 'itarian roosuto', 'Italian roast', '¥920', 'Coffee', 'gf', 'vegan', 'October 2026.', 'italian_roast'),
      it('', '', 'Seasonal single-origin specialty, deep-roasted', '', 'Coffee', 'gf', 'vegan', '', 'single_origin'),
      it('ロイヤルミルクティー', 'roiyaru miruku tii', 'Royal milk tea', '', 'Drinks', 'ask', 'no', '', 'royal_milk_tea'),
      it('チョコレートケーキ', 'chokoreeto keeki', 'Chocolate cake', '', 'Sweets', 'no', 'no', '', 'chocolate_cake'),
      it('シフォンケーキ', 'shifon keeki', 'Chiffon cake with dried fruit and nuts', '', 'Sweets', 'no', 'no', '', 'chiffon_cake'),
    ] }, {
    cuisine: '1978年創業の喫茶店・「ブタ釜」で自家焙煎・ネルドリップ・深煎りとスペシャルティ',
    neighborhood: '銀座二丁目、有楽橋交差点近く。銀座一丁目駅から徒歩2分、有楽町駅から5分',
    gf_detail: '要確認。自家焙煎・ネルドリップのブラックコーヒーにグルテンは含まれません。チョコレートケーキやドライフルーツとナッツのシフォンは通常小麦を含み、材料は公表されていません。',
    vegan_detail: 'ブラックコーヒーは植物性のみ。ロイヤルミルクティーやケーキは通常乳製品や卵を含みます。ヴィーガンの品の記述はありません。',
    notes: '[個人店・1978年からネルドリップ] 有楽橋交差点近くの大人の珈琲店。長い一枚板のカウンター、年季の入った革張りの椅子、ジャズ、4人以上での来店は不可。1978年に柳通りの地下で創業し、現在地に移って約30年。店主の長谷川能一さんはもとは常連で、珈琲店の仕事を経て、伝統ある十一房をなくしたくない一心で引き継ぎました。入口脇のガラス張りの焙煎室で通称「ブタ釜」の焙煎機を使い、スペシャルティも深めに焼いて、すべてネルで1杯ずつ。スタッフは空いた時間にネルを手縫いしています。ブレンドは920円から(2025年)、季節のシングルオリジン、ロイヤルミルクティー、チョコレートケーキ、ドライフルーツとナッツのシフォンも。',
  });
}

// ================================================================ 銀座 みかわや
{
  const OWN = 'http://www.ginza-mikawaya.com/'; const HIS = OWN + 'history.html';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002421/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '21:00']);
  put({
    id: 'tokyo_ginza_mikawaya', name: '銀座 みかわや (Ginza Mikawaya)', category: 'OMNI',
    lat: 35.671156, lng: 139.766114,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Classic yōshoku: the house gratin (butter rice under prawn cream sauce), crab cream croquettes, beef stew and hamburg, all normally built on wheat roux, breadcrumbs or demi-glace. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Seafood, beef and cream dishes throughout: gratin, crab croquette, tongue and beef stew, live sweet-shrimp tempura.',
    hours_raw: 'Daily 11:00–21:00 (L.O. 20:00); closed over New Year (Tabelog). Cards accepted. 10% service charge.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Ginza Mitsukoshi annex 1F — 2 min from Ginza Stn',
    cuisine: '"French you eat with chopsticks" since the post-war years · original gratin · crab croquette · tongue stew', cuisine_type: 'yoshoku',
    website: OWN, gmaps: gm('銀座 みかわや 銀座三越新館'), menu_url: OWN,
    notes: "[Yōshoku · Sally Weil's lineage] The shop's own history begins in September 1887, when Hosaka Yoshijirō, a descendant of a Mikawa family that served the Tokugawa, opened the Mikawaya grocery next to today's Wakō, drawn in Hiroshige IV's print of Ginza. His successor Hosaka Kōji led the Ginza street association. After the war the former president Tonaka Toyoichirō took over and reopened it as the French restaurant Mikawaya. He was one of a handful taught directly by Sally Weil, first head chef of Yokohama's Hotel New Grand. Its gratin descends from a dish Weil improvised for an unwell guest, butter rice under prawns in cream sauce, browned with cheese, the dish the rest of Japan came to call doria. The house still uses the opening recipes and serves 'French food eaten with chopsticks': pickles with rice dishes and green tea after the meal. Diners order crab cream croquettes, beef or tongue stew, hamburg, omurice, and courses from about ¥11,000; takeaway and mail order sell the croquettes and tongue stew.",
    chef_bio: {
      chef_name: null, roles: ['restaurant company (former president 渡仲豊一郎 Tonaka Toyoichirō reopened it post-war)'],
      origin: 'Grocery founded September 1887; reopened as a French restaurant after the war at the present site (Ginza Mitsukoshi annex)',
      background: 'Founder Hosaka Yoshijirō (三河屋食料品店, 1887); successor Hosaka Kōji; post-war, former president Tonaka Toyoichirō, a direct pupil of Sally Weil (Hotel New Grand). Tabelog lists a corporate invoice number (T8010001058013).',
      philosophy: '〝お箸で食べるフランス料理を〟 — French cooking eaten with chopsticks, with pickles and green tea.',
      specialty: 'Original gratin; crab cream croquette; tongue stew.',
      anecdotes: [
        { text: '「体調が良くないので、何かのど越しの良いものを」 — the request that, the shop says, led Weil to improvise butter rice with prawn cream sauce under cheese, the origin of its gratin.', source: HIS },
        { text: '創業時の姿は浮世絵師：四代広重の「銀座繁昌之図」の中にも描かれています.', source: HIS },
        { text: 'A September 2026 diner returned after four years for the white sauce, "exceptional", on the ¥11,000 course.', source: R + 'B450973064/' },
      ],
      japanese_sources_summary: '公式(ginza-mikawaya.com 歴史): 明治20年(1887)9月、保坂芳次郎が和光の隣に「三河屋食料品店」を開業(四代広重「銀座繁昌之図」)、後継者・保坂幸治は銀座通連合会会長、終戦後に元社長・渡仲豊一郎が受け継ぎ現在地に「フランス料理 みかわや」として再興、ホテルニューグランド初代料理長S.ワイルの直伝、グラタン(ドリアの原型)、創業当時のレシピ、お箸で食べるフランス料理、漬物と緑茶。食べログ: 銀座4-7-12 銀座三越新館1階、42席、毎日11:00〜21:00、サービス料10%。2026年の口コミ: 11,000円のコース、かにクリームコロッケ、ビーフシチュー、ハンバーグ、オムライス、活き甘海老の天ぷら。',
      confidence: 'high', sources: [HIS, OWN, TB, R + 'B450973064/', R + 'B536615566/', R + 'B537594446/', R + 'B537675787/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A classic, quiet dining room on the Mitsukoshi annex ground floor; chopsticks offered. Cards; 10% service charge; terrace seats allow pets.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Crab cream croquette and pre-ordered sweet-shrimp tempura.', source: R + 'B537950754/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Gratin of prawns in cream sauce over butter rice.', source: HIS }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-7-12 銀座三越新館1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目7番12号 (go) 43m (department-store block); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [HIS, R + 'B450973064/', R + 'B536615566/', R + 'B537675787/', R + 'B537950754/'],
    price_note: 'No prices on the shop site. Course price from a September 2026 review.', last_checked: TODAY, items: [
      it('グラタン', 'guratan', 'House gratin (butter rice, prawn cream sauce, cheese)', '', 'Mains', 'no', 'no', 'The shop\'s original recipe.', 'gratin'),
      it('かにクリームコロッケ', 'kani kuriimu korokke', 'Crab cream croquette', '', 'Mains', 'no', 'no', '', 'crab_croquette'),
      it('タンシチュー', 'tan shichuu', 'Tongue stew (also takeaway)', '', 'Mains', 'no', 'no', '', 'tongue_stew'),
      it('ビーフシチュー', 'biifu shichuu', 'Beef stew', '', 'Mains', 'no', 'no', '', 'beef_stew'),
      it('ハンバーグ', 'hanbaagu', 'Hamburg steak', '', 'Mains', 'no', 'no', '', 'hamburg'),
      it('', '', 'Dinner course', '¥11,000', 'Course', 'no', 'no', 'September 2026.', 'course'),
    ] }, {
    cuisine: '戦後から続く「お箸で食べるフランス料理」・元祖のグラタン・かにクリームコロッケ・タンシチュー',
    neighborhood: '銀座四丁目、銀座三越新館1階。銀座駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。伝統的な洋食で、名物のグラタン(バターライスに海老のクリーム煮)、かにクリームコロッケ、ビーフシチュー、ハンバーグなど、通常は小麦のルー・パン粉・デミグラスを使います。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。グラタン、かにコロッケ、タン・ビーフシチュー、活き甘海老の天ぷらと、魚介・牛肉・クリームの料理ばかりです。',
    notes: '[洋食・S.ワイルの系譜] 店の歴史によれば、明治20年(1887年)9月、徳川に仕えた三河出身の保坂一族の末裔・保坂芳次郎が今の和光の隣に「三河屋食料品店」を開業し、四代広重の「銀座繁昌之図」にも描かれました。後継者の保坂幸治は銀座通連合会会長も務めます。戦後、元社長の渡仲豊一郎が受け継ぎ、現在地に「フランス料理 みかわや」として再興。渡仲は横浜ホテルニューグランドの初代料理長S.ワイルから直接教えを受けた数名の一人です。グラタンは、ワイルが体調を崩した客のために即興で作った、バターライスに海老のクリーム煮をのせチーズで焼いた一皿が原型で、のちに全国で「ドリア」と呼ばれるように。創業当時のレシピを守り、ご飯ものには漬物、食後には緑茶を出す「お箸で食べるフランス料理」。かにクリームコロッケ、ビーフ・タンシチュー、ハンバーグ、オムライス、約11,000円のコースなど。コロッケやタンシチューは持ち帰り・通販もあります。',
  });
}

save();
