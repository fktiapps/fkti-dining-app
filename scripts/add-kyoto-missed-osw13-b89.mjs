// Kyoto priority (kyoto-missed), worker osw13, batch 89 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: Sundays Coffee, おうちごはん 中島家, 先斗町 焼鳥 鶏原, 水餃子 しゃんたん.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-89');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042472', 'chain: 祇園茶屋たばねのし 新京極店 is one of the たばねのし wagashi-crepe shops run by 株式会社SHUNRI, which recruits franchise operators and lists 浅草茶屋, 原宿店, 金沢ひがし茶屋街, 薩摩茶屋 and others (tabanenoshi.com, fetched 7 November 2026)');
skip('26031636', 'too thin to verify: おとなり栩栩膳 has no review after April 2020');
skip('26000706', 'too thin to verify: セントジェームスクラブ 先斗町店 has no review after November 2024, and the listing gives only hours, seats and payment');
skip('26003274', 'chain: スターバックス・コーヒー 京都新京極店 is a Starbucks branch');
skip('26036304', 'too thin to verify: 祇園 鮨よし has no review after November 2024');
skip('26025600', 'not a public restaurant: the Tabelog entry for サウナ&カプセルホテル ルーマプラザ is the dining area inside the sauna/capsule-hotel bathing facility (reviews 2025–2026: "a dining area within a bathing facility"), for facility users — same footing as guests-only inns (Greg ruling 2026-11-05)');
skip('26000694', 'too thin to verify: 先斗町 禊川 has no review after November 2024 in the Tabelog crawl');

// ================================================================ Sundays Coffee
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26044224/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_sundays_coffee_nishiki', name: 'Sundays Coffee', category: 'OMNI',
    lat: 35.005248, lng: 135.764298, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: coffee and hojicha may suit; kaya toast, croissant and cheesecake do not (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: black filter coffee may suit; ask about plant milk for lattes (2025–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sun 08:00–18:00; closed Monday; hours may change. No reservations. Cashless — cards and QR only, no cash (August 2026 review; Tabelog lists cards, e-money and QR). Few seats, benches only, no tables (August 2026). Non-smoking. In an 80-year-old renovated machiya down a narrow alley near Nishiki Market — easy to miss (December 2025; April and May 2026). Open about a year as of August 2026.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Alley near Nishiki Market — about 400 m from Karasuma',
    cuisine: 'A specialty coffee bar in a renovated alley machiya, open from 8 am (2025–2026 reviews) · espresso drinks, cold brew and hand-drip coffee, with beans you choose — e.g. a FURUTA filter with an apricot aroma (December 2025; August 2026); coffee from ¥700 (April 2026) · Singaporean kaya toast (December 2025; May 2026) · rare cheesecake, a flat croissant, a few cakes and breads; hojicha (February and September 2026)',
    website: null, gmaps: gm('Sundays Coffee 京都 錦'), menu_url: null,
    notes: '[Specialty coffee · alley by Nishiki Market, kaya toast from 8 am] A quiet coffee bar in an 80-year-old machiya tucked down an alley off Nishiki: hand-drip or espresso from beans you pick with the barista, Singaporean kaya toast and a few cakes. Benches only, card or QR only, from about ¥700 a cup. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from December 2025 to October 2026 describe a café opened about a year before (August 2026) in a renovated 80-year-old townhouse, named for the wish to drink coffee "as if it were a holiday" (December 2025), with art by Shiga artists on the walls and friendly staff who help choose beans. One April 2026 reviewer found prices "a bit on the higher side" for the location.',
      philosophy: 'Coffee as if every day were a Sunday (December 2025 review).',
      specialty: 'Hand-drip coffee from chosen beans; kaya toast.',
      anecdotes: [
        { text: 'August 2026: "What\'s fun here is that you can choose your own coffee beans! If you\'re unsure which to pick, you can ask for advice, and you can even select the beans for your latte."', source: R + 'B533346892/' },
        { text: 'May 2026: "It was a bit tricky to find as it was tucked away behind the building, but I\'m glad I made it!"', source: R + 'B528747322/' },
      ],
      japanese_sources_summary: '食べログ: Sundays Coffee、カフェ、中京区十文字町455-5、烏丸から412m、火〜日 8:00〜18:00、月曜休み、時間は変わることがある、予約不可、禁煙、カード・電子マネー・QR可。口コミ (2025年12月〜2026年10月、英語): 錦市場近くの路地、築80年の町家を改装、エスプレッソ、コールドブリュー、ハンドドリップ、豆を選べる (FURUTA など)、コーヒーは700円から、カヤトースト、レアチーズケーキ、平たいクロワッサン、ほうじ茶、現金不可でカードとQR (2026年8月)、ベンチ席のみ、滋賀の作家の作品、開店から約1年 (2026年8月)、場所の割にやや高め (2026年4月)。',
      confidence: 'medium', sources: [TB].concat(['B519291449', 'B523004882', 'B526901640', 'B527278518', 'B528747322', 'B533346892', 'B533681026', 'B534556902', 'B536992435', 'B537045955', 'B537265404', 'B538434094'].map(b => R + b + '/')) },
    cultural_comfort: { level: 'english', note: 'Many overseas guests; cashless; staff help choose beans.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区十文字町455-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005248, 135.764298); cross-checked: GSI 京都府京都市中京区十文字町455番地 (lot) 39m; nearest pin kyoto_ajisai_notoyo_nishiki 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526901640/'],
    price_note: 'Coffee from ¥700 (April 2026); other prices not given.', last_checked: TODAY, items: [
      it('', '', 'Hand-drip coffee (beans of your choice)', '¥700+', 'Coffee', 'ask', 'ask', 'April and August 2026.', 'filter_coffee'),
      it('', '', 'Kaya toast', null, 'Food', 'no', 'no', 'December 2025; May 2026.', 'kaya_toast'),
      it('', '', 'Café latte', null, 'Coffee', 'ask', 'no', '2026 reviews.', 'latte'),
    ] }, {
    cuisine: '路地の町家を改装した、朝8時からのスペシャルティコーヒーの店 (2025〜2026年の口コミ)・エスプレッソ、コールドブリュー、ハンドドリップ、豆は選べる。アプリコットの香りの FURUTA など (2025年12月、2026年8月)、コーヒーは700円から (2026年4月)・シンガポールのカヤトースト (2025年12月、2026年5月)・レアチーズケーキ、平たいクロワッサン、ケーキやパン数種、ほうじ茶 (2026年2月・9月)',
    neighborhood: '錦市場近くの路地。烏丸から約400m',
    gf_detail: '要確認: コーヒーやほうじ茶は合うかもしれないが、カヤトースト、クロワッサン、チーズケーキは不可 (2025〜2026年の口コミ)。',
    vegan_detail: '要確認: ブラックのドリップコーヒーは合うかもしれない。ラテの植物性ミルクは確認を (2025〜2026年の口コミ)。',
    notes: '[スペシャルティコーヒー・錦市場近くの路地、朝8時からのカヤトースト] 錦の路地奥、築80年の町家の静かなコーヒースタンド。豆を相談して選ぶハンドドリップやエスプレッソ、シンガポールのカヤトースト、ケーキ少し。ベンチ席のみ、カードかQRのみ、1杯700円ほどから。月曜休み。',
  });
}

// ================================================================ おうちごはん 中島家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26022558/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_ouchi_gohan_nakashimaya', name: 'おうちごはん 中島家 (Ouchi Gohan Nakashima Ya)', category: 'OMNI',
    lat: 35.001231, lng: 135.764438, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, fries, menchi-katsu, fried horse mackerel and soy-simmered obanzai (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito dashi is served to start and finish, and most obanzai use it (May and September 2026).',
    hours_raw: 'Tabelog: daily 17:00–23:30 (food last order 22:30, drinks 23:00); closing days not fixed. Reservations taken; often near full (September 2026). Appetizer fee ¥440 including tax — Tabelog, Japanese original 「お通し代：税込440円」. 36 seats: 8 at the counter and 28 at sunken-kotatsu tables over two floors (a semi-private room for 10–12 downstairs); steep stairs to the 2nd floor (April 2026). Non-smoking; free Wi-Fi. Cards, e-money and QR (incl. Alipay, WeChat Pay). A renovated townhouse on Bukkoji-higashi-machi between Karasuma and Kawaramachi. A second shop has opened at Sanjo-Kiyamachi (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Bukkoji-higashi-machi between Karasuma and Kawaramachi — 8–10 min walk from Shijo, Karasuma or Kawaramachi',
    cuisine: 'An obanzai izakaya in an old townhouse (2026 reviews) · a cup of Makurazaki bonito dashi to start, and dashi with tororo kombu to finish (May and September 2026) · obanzai sets of three or five, e.g. simmered eggplant, potato, okra, konnyaku noodles with green chilli, kinpira, taro; half portions (May–October 2026) · corn tempura, a seasonal speciality (May and July 2026); fried fruit tomatoes; fig tempura; nama-fu dengaku; unohana; okara (2026) · Takahara pork shabu yukhoe; house potato salad (April 2026) · fried horse mackerel and mackerel, menchi-katsu, taro karaage; meat-stuffed eggplant (May and October 2026) · Manganji-pepper sour; sake (August–September 2026); rice balls for children, or made on request (August and October 2026)',
    website: null, gmaps: gm('おうちごはん 中島家 仏光寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Obanzai izakaya · Bukkoji between Shijo and Kawaramachi, Kyoto home cooking] A busy townhouse izakaya with sunken-kotatsu tables, starting and ending with a cup of bonito dashi and serving plates of Kyoto obanzai — try the corn tempura in season — with good sake and a Manganji-pepper sour. ¥440 appetizer charge. Some find it average or a little salty. Open nightly.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers in 2026 describe young, energetic staff, a friendly owner who chats while cooking and made rice balls off the menu ("They\'re not on the menu, but I can make them for you", August 2026), and a growing share of overseas guests; a second shop has opened at Sanjo-Kiyamachi (April 2026). Criticism: sashimi with "a slight fishy smell" (May 2026), food "average" next to the setting (May 2026), slightly salty simmered dishes (September 2026) and prices "a bit on the higher side" (September 2026).',
      philosophy: null,
      specialty: 'Kyoto obanzai; corn tempura.',
      anecdotes: [
        { text: 'August 2026: on the last night of Obon, a guest asked for rice balls; "He replied, \'They\'re not on the menu, but I can make them for you\'".', source: R + 'B533896321/' },
        { text: 'September 2026: "To start, we were served a small cup of dashi (broth)… At the end, we were treated to a warm bowl of this dashi as a soup."', source: R + 'B536575221/' },
      ],
      japanese_sources_summary: '食べログ: おうちごはん 中島家、居酒屋・日本料理、下京区仏光寺東町115、地下鉄四条駅・阪急烏丸駅から徒歩10分、阪急河原町駅から徒歩8分、毎日 17:00〜23:30 (料理 L.O. 22:30、ドリンク L.O. 23:00)、不定休、予約可、原文で「お通し代：税込440円」、36席 (カウンター8、掘りごたつ28、1階に10〜12名の半個室)、禁煙、Wi-Fi、カード・電子マネー・QR可、法人会員。口コミ (2026年4月〜10月、英語): 町家のおばんざい居酒屋、最初と最後に枕崎のかつおだし、とろろ昆布のだし、おばんざい3種・5種盛り、ハーフサイズ、とうもろこしの天ぷら、フルーツトマトの揚げ物、いちじくの天ぷら、生麩田楽、卯の花、おから、豚のしゃぶユッケ、ポテサラ、アジフライ、さばの揚げ物、メンチカツ、里芋の唐揚げ、なすの肉詰め、万願寺とうがらしのサワー、日本酒、子供用のおにぎり、三条木屋町に2号店、2階への急な階段、刺身の生臭さ (2026年5月)、少し塩辛い (2026年9月)、やや高め (2026年9月)。',
      confidence: 'medium', sources: [TB].concat(['B526162552', 'B528228126', 'B528821442', 'B529465832', 'B532594394', 'B533896321', 'B536372132', 'B536539574', 'B536543373', 'B536575221', 'B536998497', 'B537577088'].map(b => R + b + '/')) },
    cultural_comfort: { level: 'japanese', note: 'Sunken-kotatsu seating; steep stairs; children welcome (rice balls for kids).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺東町115',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001231, 135.764438); cross-checked: GSI 京都府京都市下京区仏光寺東町115番地 (lot) 9m; nearest pin kyoto_yasai_to_sakana_en 104m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537577088/'],
    price_note: 'No item prices in the sources; reviewers spent about ¥2,000–8,000 a head; ¥440 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Obanzai set (three or five kinds)', null, 'Obanzai', 'ask', 'no', '2026 reviews.', 'obanzai_set'),
      it('', '', 'Corn tempura (seasonal)', null, 'Fried', 'no', 'no', 'May and July 2026.', 'corn_tempura'),
      it('', '', 'Manganji-pepper sour', null, 'Drink', 'ask', 'ask', 'August 2026.', 'manganji_sour'),
    ] }, {
    cuisine: '古い町家のおばんざい居酒屋 (2026年の口コミ)・最初に枕崎のかつおだしを一杯、締めはとろろ昆布のだし (2026年5月・9月)・おばんざい3種か5種の盛り合わせ、なすの煮物、じゃがいも、オクラ、青唐辛子のこんにゃく麺、きんぴら、里芋など、ハーフサイズも (2026年5〜10月)・旬の名物とうもろこしの天ぷら (2026年5月・7月)、フルーツトマトの揚げ物、いちじくの天ぷら、生麩田楽、卯の花、おから (2026年)・豚のしゃぶユッケ、自家製ポテサラ (2026年4月)・アジやさばの揚げ物、メンチカツ、里芋の唐揚げ、なすの肉詰め (2026年5月・10月)・万願寺とうがらしのサワー、日本酒 (2026年8〜9月)、子供用や頼めばおにぎりも (2026年8月・10月)',
    neighborhood: '烏丸と河原町の間の仏光寺東町。四条・烏丸・河原町から徒歩8〜10分',
    gf_detail: 'グルテンフリーではない: 天ぷら、フライドポテト、メンチカツ、アジフライ、醤油で炊いたおばんざい (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 最初と最後にかつおだしが出され、おばんざいの多くにも使う (2026年5月・9月)。',
    notes: '[おばんざい居酒屋・四条と河原町の間の仏光寺、京の家庭の味] 掘りごたつのある町家のにぎやかな居酒屋。最初と最後にかつおだしが一杯、京のおばんざいの皿、旬にはとうもろこしの天ぷらを。日本酒と万願寺とうがらしのサワーも。お通し440円。普通、少し塩辛いという声も。毎晩営業。',
  });
}

// ================================================================ 先斗町 焼鳥 鶏原
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031504/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_pontocho_yakitori_torihara', name: '先斗町 焼鳥 鶏原 (Pontocho Yakitori Torihara)', category: 'OMNI',
    lat: 35.007597, lng: 135.770969, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: skewers come with salt water, tare and koji soy sauce — the salt-water dip may suit; atsuage and stewed offal not checked (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori counter; grilled vegetables are on the menu but not described as vegan (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Wed–Sun 17:00–23:00 (last order 22:00); closed Tuesday, plus every other Monday or Wednesday; closing time varies some days. Reservations recommended — few walk-in seats (2022; 2025–2026). Appetizer ¥500 a person, included in courses — Tabelog, Japanese original 「お通し500円/人（コースご利用の場合は料金に含まれてます）」. 14 seats: 10 at the counter, 4 at a table. Non-smoking; wheelchair access. Smartphone/QR ordering (2023; February and September 2026). Cards, e-money and QR (PayPay and others). West side of Pontocho about 30 m south of the Kaburenjo.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, just south of the Kaburenjo — 3 min walk from Keihan Sanjo',
    cuisine: 'A 14-seat Pontocho yakitori counter where skewers arrive on a small charcoal grill in front of you to stay hot (2022–2026 reviews) · three dips: salt water, tare and koji soy sauce (2022; November 2025; September 2026) · skewers: breast, thigh, neck, negima, tsukune — order it tsukimi with a soft egg (November 2025; September 2026) · grilled vegetables and seafood; tomato skewers (November 2025) · seasonal obanzai appetizers, e.g. lotus root with bacon, burdock salad, taro (November 2025; February 2026); dashimaki; atsuage; stewed offal (2023–2026) · Japanese sake and shochu; courses with all-you-can-drink (Tabelog; March 2026)',
    website: null, gmaps: gm('先斗町 焼鳥 鶏原'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakitori · Pontocho by the Kaburenjo, skewers kept hot on your own grill] A small, bright counter in Pontocho where skewers come to a mini charcoal grill in front of you, with salt-water, tare and koji-soy dips, obanzai starters and good sake. Book ahead. Some 2026 regulars found the skewers smaller and pricier than before. ¥500 appetizer. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers from 2022 to 2026 praise juicy chicken, the homemade salt, tare and koji soy sauce, jazz and a calm room; two staff work the room in February 2026, while an April 2026 regular saw "the owner was busy managing everything alone" during cherry-blossom season. Criticism: ordering drinks by phone even at the counter (April 2023), skewers "on the smaller side and a bit dry" with Pontocho prices (March 2026), and smaller, changed yakitori and a more tourist-oriented menu (April 2026).',
      philosophy: null,
      specialty: 'Yakitori with three house dips.',
      anecdotes: [
        { text: 'November 2022: "The dishes are first grilled in the kitchen but instead of being served on a plate, they are placed on a grill in front of you, allowing you to enjoy them hot and fresh."', source: R + 'B500570724/' },
        { text: 'September 2026: "The charcoal grill was indeed hot, but if you eat too slowly, the food might overcook."', source: R + 'B534953499/' },
      ],
      japanese_sources_summary: '食べログ: 先斗町 焼鳥 鶏原、焼き鳥・居酒屋、中京区先斗町通三条下ル材木町182-2、先斗町歌舞練場の約30m南の西側、京阪三条駅から徒歩3分、月・水〜日 17:00〜23:00 (L.O. 22:00)、火曜休み、隔週で月曜か水曜も休み、予約可、原文で「お通し500円/人（コースご利用の場合は料金に含まれてます）」、14席 (カウンター10、テーブル4)、禁煙、車椅子可、カード・電子マネー・QR可、飲み放題付きコース、法人会員。口コミ (2022年4月〜2026年9月、英語): 目の前の小さな炭火の焼き台に串を置く、塩水・たれ・麹醤油の3種、むね、もも、せせり、ねぎま、つくね (月見)、野菜や魚介の焼き物、トマト、季節のおばんざいのお通し、だし巻き、厚揚げ、もつ煮、日本酒、スマホで注文、予約がおすすめ、串が小さく少し乾いていた (2026年3月)、以前より小さく味も変わった (2026年4月)。',
      confidence: 'medium', sources: [TB].concat(['B448296737', 'B452565984', 'B464276633', 'B477580348', 'B495591161', 'B500058314', 'B500570724', 'B516528397', 'B522536841', 'B525275592', 'B525484769', 'B534953499'].map(b => R + b + '/')) },
    cultural_comfort: { level: 'japanese', note: 'Phone/QR ordering at the counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル材木町182-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007597, 135.770969); cross-checked: GSI 京都府京都市中京区材木町182番地 (lot) 18m; nearest pin kyoto_eau_de_vie_pontocho 6.2m (no offset needed); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516528397/', R + 'B534953499/'],
    price_note: 'No item prices in the sources; reviewers spent about ¥3,000–8,000 a head; ¥500 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Tsukune, tsukimi style (with soft egg)', null, 'Yakitori', 'no', 'no', 'November 2025.', 'tsukune'),
      it('', '', 'Negima', null, 'Yakitori', 'ask', 'no', 'November 2025; September 2026.', 'negima'),
      it('', '', 'Course with all-you-can-drink', null, 'Course', 'no', 'no', 'Tabelog; March 2026.', 'course_nomihodai'),
    ] }, {
    cuisine: '先斗町の14席の焼き鳥のカウンターで、串は目の前の小さな炭火の焼き台へ (2022〜2026年の口コミ)・塩水、たれ、麹醤油の3種のたれ (2022年、2025年11月、2026年9月)・むね、もも、せせり、ねぎま、月見で頼めるつくね (2025年11月、2026年9月)・野菜や魚介の焼き物、トマトの串 (2025年11月)・季節のおばんざいのお通し、れんこんのベーコン炒め、ごぼうサラダ、里芋 (2025年11月、2026年2月)、だし巻き、厚揚げ、もつ煮 (2023〜2026年)・日本酒と焼酎、飲み放題付きのコース (食べログ、2026年3月)',
    neighborhood: '先斗町、歌舞練場のすぐ南。京阪三条駅から徒歩3分',
    gf_detail: '要確認: 串には塩水、たれ、麹醤油。塩水は合うかもしれない。厚揚げやもつ煮は未確認 (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏の焼き鳥のカウンター。野菜の焼き物もあるがヴィーガンとは書かれていない (2025〜2026年の口コミ)。',
    notes: '[焼き鳥・先斗町歌舞練場そば、目の前の焼き台で温かく] 先斗町の明るい小さなカウンターで、串は目の前の小さな炭火の焼き台へ。塩水、たれ、麹醤油の3種で、おばんざいのお通しと日本酒も。要予約。2026年には串が小さく高くなったという常連の声も。お通し500円。火曜休み。',
  });
}

// ================================================================ 水餃子 しゃんたん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033358/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_suigyoza_shantan_pontocho', name: '水餃子 しゃんたん (Suigyoza Shantan)', category: 'OMNI',
    lat: 35.007602, lng: 135.771096, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-skin boiled dumplings and ramen to finish (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork and shrimp dumplings, pork and oyster shabu-shabu (2022–2025 reviews).',
    hours_raw: 'Tabelog: daily 18:00–24:00; irregular closures posted on Instagram — it may close on nights without bookings, so reserve. Tell the shop in advance if bringing children; one drink per person. Seat charge ¥550 including the appetizer — Tabelog, Japanese original 「お席料（お通し代含む）550円」. 18 seats: about 6 at the counter and tables (one room for 8). Non-smoking. Cards (overseas-issued cards may not work) and PayPay; no e-money. 2nd floor up steep stairs, Pontocho below Sanjo. Opened 16 November 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho below Sanjo, 2nd floor — 5 min walk from Keihan Sanjo',
    cuisine: 'A small Pontocho bar for homemade boiled dumplings (suigyoza), ordered in pairs and cooked in a pot at your table (2022–2026 reviews) · suigyoza two for ¥290; pork shabu-shabu two or three slices ¥290 (December 2022); counted with tokens, and a free drink after 20 dumplings (2022; May 2026) · shrimp dumplings; several flavours (2023; August 2026) · century egg; oyster shabu-shabu; salad with perilla (2022) · oden with tomato-flavoured daikon and oysters (April 2025) · ramen to finish (2024; 2025) · Shaoxing wine; flowering jasmine tea (2022; November 2025) · an Okinawan appetizer (August 2026)',
    website: null, gmaps: gm('水餃子 しゃんたん 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: '[Boiled dumplings · Pontocho, wanko-soba-style suigyoza] A cosy second-floor bar run single-handed by its owner, where boiled dumplings come two at a time to a pot on your table — keep going, and a drink is free after 20 — with pork or oyster shabu-shabu, tomato oden and ramen to finish. ¥550 seat charge. Book ahead; irregular closures.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 16 November 2019 (Tabelog). Reviewers from 2022 to 2026 say it "was run by one woman" (May 2022) — "the female owner manages everything on her own" (April 2025) — with dumplings said to be based on home cooking (May 2022). They praise her warmth and timing; one August 2025 reviewer notes she "placed the hot dumplings on a plate at a distance and added more at just the right moment". Drinks such as beer are "slightly higher" in price (August 2025).',
      philosophy: null,
      specialty: 'Suigyoza boiled dumplings.',
      anecdotes: [
        { text: 'May 2022: "The dining style is self-serve hot water at the table, where you count with tokens and every 10 tokens turn into a marble… I even heard of someone who ate as many as 80!"', source: R + 'B449553675/' },
        { text: 'March 2026: "Despite running the place alone, the attention to detail and care provided were truly impressive."', source: R + 'B524085611/' },
      ],
      japanese_sources_summary: '食べログ: 水餃子 しゃんたん、餃子、中京区先斗町三条下ル二丁目若松町137-3 2F、京阪三条駅から徒歩5分、毎日 18:00〜24:00、不定休 (Instagram で確認、予約がない日は閉めることも)、予約可、子連れは事前に連絡、ワンドリンク制、原文で「お席料（お通し代含む）550円」、18席、個室 (8名)、禁煙、カード (海外発行は使えないことも)・PayPay可、電子マネー不可、2019年11月16日オープン。口コミ (2022年5月〜2026年8月、英語): 女性の店主がひとりで営む、2個ずつ頼む水餃子 (2個290円)、豚しゃぶ (2〜3枚290円)、卓上の鍋、札で数える、20個でドリンク1杯無料 (2026年5月)、海老餃子、ピータン、牡蠣しゃぶ、大葉のサラダ、トマト味の大根や牡蠣のおでん、締めのラーメン、紹興酒、花の開くジャスミン茶、沖縄料理のお通し (2026年8月)、ビールなどはやや高め (2025年8月)。',
      confidence: 'medium', sources: [TB].concat(['B449553675', 'B460466343', 'B462891556', 'B494911193', 'B504325920', 'B512928658', 'B517774247', 'B522999875', 'B524085611', 'B527140438', 'B528862582', 'B535044571'].map(b => R + b + '/')) },
    cultural_comfort: { level: 'japanese', note: 'One-woman bar; steep stairs; overseas cards may fail; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下ル二丁目若松町137-3 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007584, 135.771096), offset 2m north because kyoto_pontocho_robin (若松町137-4) sat 5.2m from the Tabelog point — now 6.8m from it; cross-checked: GSI 京都府京都市中京区若松町137番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B460466343/'],
    price_note: 'Prices from a December 2022 review; ¥550 seat charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Suigyoza (two pieces)', '¥290', 'Dumplings', 'no', 'no', 'December 2022.', 'suigyoza'),
      it('', '', 'Pork shabu-shabu (two or three slices)', '¥290', 'Shabu-shabu', 'ask', 'no', 'December 2022.', 'pork_shabu'),
      it('', '', 'Ramen (to finish)', null, 'Noodles', 'no', 'no', '2024; April 2025.', 'ramen'),
    ] }, {
    cuisine: '先斗町の小さなバーで、自家製の水餃子を2個ずつ頼み、卓上の鍋で (2022〜2026年の口コミ)・水餃子2個290円、豚しゃぶ2〜3枚290円 (2022年12月)。札で数え、20個でドリンク1杯無料 (2022年、2026年5月)・海老餃子、いろいろな味 (2023年、2026年8月)・ピータン、牡蠣しゃぶ、大葉のサラダ (2022年)・トマト味の大根や牡蠣のおでん (2025年4月)・締めのラーメン (2024年、2025年)・紹興酒、花の開くジャスミン茶 (2022年、2025年11月)・沖縄料理のお通し (2026年8月)',
    neighborhood: '先斗町三条下ル、2階。京阪三条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦の皮の水餃子と締めのラーメン (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚や海老の餃子、豚と牡蠣のしゃぶしゃぶ (2022〜2025年の口コミ)。',
    notes: '[水餃子・先斗町、わんこそば式の水餃子] 店主がひとりで営む2階の居心地のよいバー。水餃子を2個ずつ卓上の鍋へ、20個食べればドリンク1杯無料。豚や牡蠣のしゃぶしゃぶ、トマト味のおでん、締めはラーメン。お席料550円。要予約、不定休。',
  });
}

save();
