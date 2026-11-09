// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 96.
//   + Flammes (fireplace-counter bistro and café with Kyoto game and Omi beef, Nakagyo, opened April 2026)
//   + 酒場らいと Sakaba Light (izakaya for Kagoshima black Satsuma chicken and fish, Shijo toward Omiya, opened 2025)
//   - 栄山堂, MED, 京ばあむ 清水店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26019266 (skipped), 26044982,
//   26016710 (skipped), 26028440 (skipped), 26042762. Next in lane: 26000054 Lugol, 26028170 THE KITCHEN KANRA,
//   26028194 鉄板料理 花六.
//   queue-status.jsonl grepped for each brand (栄山堂, Flammes, MED, 京ばあむ/美十/おたべ, らいと): no earlier rulings.
//   Data check (current main, hidden included): neither Flammes nor 酒場らいと is in data/kyoto.json by Tabelog id, name or
//   address; 栄山堂 appears only as the building name in 麺処 まると’s address.
//   Same-name count: Flammes — one shop; invoice holder 新烏丸株式会社 (上京区); no other shop found — flagged. 酒場らいと —
//   Tabelog also lists “Karaoke Sakaba Light” and “SAKASALIGHT SANDWICHES”, not linked by any source; invoice holder
//   有限会社起福 (中京区) — drafted, flagged.
//   Retail ruling (Greg 2026-11-07/08) for 栄山堂: a soft-serve and walking-sweets stand on the Kiyomizu approach; no
//   historic family ownership, no seating beyond a “free space”, and a soy-milk vanilla soft-serve not described as vegan.
//   Large parent: 京ばあむ is a brand of 株式会社美十 (おたべ), with several Kyo Baum shops (Kiyomizu, Arashiyama, atelier
//   京ばあむ, the Kyoto Station shops) — press releases; Tabelog name search.
//   Service charges, checked against the Japanese original: Flammes 600円（アミューズ代として、税込み）— a ¥600 amuse
//   charge; none listed for 酒場らいと.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-96');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26019266', 'retail food shop (Greg 11-07 ruling): 栄山堂 is a soft-serve and walking-sweets stand on the Kiyomizu approach (from ¥500); no historic family ownership, no seating beyond a free space, and no GF or vegan options sourced (a soy-milk vanilla flavour is not described as vegan)');
skip('26016710', 'MED: no reviews dated 2025–2026; deli with no hours or details listed');
skip('26028440', '京ばあむ 清水店: large parent — 京ばあむ is a brand of 株式会社美十 (おたべ), with several Kyo Baum shops incl. Arashiyama, atelier 京ばあむ and the Kyoto Station shops (press releases; Tabelog name search, 2026-11-08)');

// ================================================================ Flammes
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044982/'; const R = TB + 'dtlrvwlst/';
  const HW = day(['13:30', '17:30'], ['18:00', '23:00']); const HS = day(['11:30', '17:30'], ['18:00', '23:00']);
  put({
    id: 'kyoto_flammes_honnojicho', name: 'Flammes', category: 'OMNI',
    lat: 35.007289, lng: 135.754537, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses and à la carte with pasta, game, Omi beef, cakes and crème brûlée; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: venison, wild boar, Omi beef, fish; the amuse uses bonito jelly (2026 reviews).',
    hours_raw: 'Wednesday–Saturday café 13:30–17:30 and dinner 18:00–23:00; Sunday lunch 11:30–15:00 (last orders 14:00), café 13:30–17:30 and dinner 18:00–23:00; closed Monday and Tuesday (Tabelog). Amuse charge ¥600 incl. tax (Tabelog, original 600円（アミューズ代として、税込み）). Cards (Tabelog). A counter with a fireplace in front of every seat, plus tables (May and August 2026). Opened 30 April 2026 (May 2026). A walk from the station (October 2026).',
    hours: { 2: HW, 3: HW, 4: HW, 5: HW, 6: HS }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nakagyo — a walk from Karasuma-Oike',
    cuisine: 'An adult café and bistro with Kyoto flavours, Omi beef and game, around a fireplace counter (May 2026) · amuse of Kyoto-vegetable mousse ¥600; three-kind appetizer platter ¥2,400; Rakuhoku wild-boar hachis parmentier ¥1,800; sea bream and grilled-nori cream tagliatelle ¥2,400; crème brûlée ¥1,200; non-alcoholic champagne ¥900 (May 2026) · autumn course with a choice of Kyoto venison or Omi beef (October 2026) · fish carpaccio with gold leaf; Ise Kakuya craft beer; sake and wine pairings (October 2026) · limited afternoon tea for the summer “sending-off fire” (August 2026) · café cake and beer in the afternoon (August 2026)',
    website: null, gmaps: gm('Flammes 京都'), menu_url: TB,
    notes: '[Bistro · Nakagyo, fireplace counter, opened 2026] A stylish new bistro-café where every counter seat faces a fireplace: Kyoto-vegetable amuse, game such as Kyoto venison and Rakuhoku wild boar, Omi beef, pasta and desserts, with craft beer, sake and wine; café hours and seasonal afternoon teas. ¥600 amuse charge. Closed Monday and Tuesday. Flagged: operator 新烏丸株式会社.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Opened on 30 April 2026 (May 2026 review). The receipt invoice number on Tabelog belongs to 新烏丸株式会社 (上京区). No other shop of the company was found.',
      philosophy: null, specialty: 'Kyoto game and Omi beef.',
      anecdotes: [
        { text: 'An October 2026 regular on a third solo visit paired a gold-leafed fish carpaccio with URAMOTO sake and Chardonnay.', source: R + 'B532254752/' },
        { text: 'An October 2026 diner chose Kyoto venison over Omi beef on the autumn course and urged others to do the same.', source: R + 'B538073937/' },
      ],
      japanese_sources_summary: '食べログ: Flammes、ビストロ・イタリアン・ジビエ料理、中京区本能寺町109、水〜土 カフェ 13:30〜17:30・ディナー 18:00〜23:00、日 ランチ 11:30〜15:00 (L.O. 14:00)・カフェ・ディナー、月・火曜定休、アミューズ代600円 (税込)、カード可。適格請求書: 新烏丸株式会社 (上京区)。口コミ (2026年、英語): 2026年4月30日オープン、京都の味と近江牛の大人のカフェ&ビストロ、全席の前に暖炉のあるカウンターとテーブル、京野菜のムースのアミューズ600円、前菜3種2,400円、洛北の猪のアッシ・パルマンティエ1,800円、鯛と焼き海苔のクリームのタリアテッレ2,400円、クレームブリュレ1,200円、ノンアルコールシャンパン900円、京鹿か近江牛を選べる秋のコース、金箔の鮮魚のカルパッチョ、Ise Kakuya のクラフトビール、日本酒とワインのペアリング、送り火の時期の限定アフタヌーンティー。',
      confidence: 'low', sources: [TB, R + 'B527292215/', R + 'B532254752/', R + 'B532902540/', R + 'B534317191/', R + 'B536444056/', R + 'B538073937/', R + 'B538360235/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Warm service; ¥600 amuse charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区本能寺町109',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened April 2026; reviews dated May to October 2026.' },
    pin_source: `Tabelog ${TB} (35.007289, 135.754537); cross-checked: GSI 京都府京都市中京区本能寺町109番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527292215/'],
    price_note: 'Prices from a May 2026 review; ¥600 amuse charge.', last_checked: TODAY, items: [
      it('', '', 'Kyoto-vegetable mousse (amuse)', '¥600', 'Amuse', 'ask', 'no', 'May 2026.', 'amuse'),
      it('', '', 'Assorted appetizers, three kinds', '¥2,400', 'Appetizers', 'ask', 'no', 'May 2026.', 'antipasti'),
      it('', '', 'Rakuhoku wild-boar hachis parmentier', '¥1,800', 'Mains', 'ask', 'no', 'May 2026.', 'parmentier'),
      it('', '', 'Sea bream and grilled-nori cream tagliatelle', '¥2,400', 'Pasta', 'no', 'no', 'May 2026.', 'tagliatelle'),
      it('', '', 'Crème brûlée', '¥1,200', 'Dessert', 'ask', 'no', 'May 2026.', 'creme_brulee'),
    ] }, {
    cuisine: '京都の味、近江牛、ジビエの大人のカフェ&ビストロ、暖炉のカウンター (2026年5月)・京野菜のムースのアミューズ600円、前菜3種2,400円、洛北の猪のアッシ・パルマンティエ1,800円、鯛と焼き海苔のクリームのタリアテッレ2,400円、クレームブリュレ1,200円、ノンアルコールシャンパン900円 (2026年5月)・京鹿か近江牛を選べる秋のコース (2026年10月)・金箔の鮮魚のカルパッチョ、Ise Kakuya のクラフトビール、日本酒とワインのペアリング (2026年10月)・送り火に合わせた限定アフタヌーンティー (2026年8月)・午後のカフェでケーキとビール (2026年8月)',
    neighborhood: '中京区本能寺町。烏丸御池から歩いて',
    gf_detail: '要確認。パスタ、ジビエ、近江牛、ケーキ、クレームブリュレのあるコースとアラカルト。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鹿、猪、近江牛、魚。アミューズに鰹のジュレ (2026年の口コミ)。',
    notes: '[ビストロ・本能寺町、暖炉のカウンター、2026年開店] すべてのカウンター席の前に暖炉がある、おしゃれな新しいビストロ・カフェ。京野菜のアミューズ、京鹿や洛北の猪などのジビエ、近江牛、パスタ、デザートを、クラフトビール、日本酒、ワインとともに。カフェタイムや季節のアフタヌーンティーも。アミューズ代600円。月・火曜定休。運営は新烏丸株式会社 (要確認)。',
  });
}

// ================================================================ 酒場らいと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26042762/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sakaba_light_shijo', name: '酒場らいと (Sakaba Light)', category: 'OMNI',
    lat: 35.003534, lng: 135.753704, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken sashimi with ponzu, fried wings, kara-age, mackerel sushi, fried fish cake; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black Satsuma chicken (raw and cooked), fish and seafood (Tabelog; 2026 reviews).',
    hours_raw: '17:00–24:00 daily (Tabelog). Cards (Tabelog). 42 seats: a counter and standing bar on the first floor, tables upstairs (Tabelog; March 2026). Non-smoking (Tabelog). Popular dishes sell out early in the evening; often fully booked (March and July 2026). Opened 29 April 2025 (Tabelog). 5 min on foot from Shijo and Omiya stations (Tabelog). Raw chicken (torisashi, liver sashimi) is on the menu.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-dori toward Omiya — 5 min from Shijo or Omiya station',
    cuisine: 'Black Satsuma chicken, fish and vegetables sent from Kagoshima, from cooks trained at Arashiyama Kichijo and Kyoto Ito (Tabelog’s English spelling) (Tabelog) · chicken “paccio” with house sesame-oil ponzu; sweet-spicy fried wings; Kagoshima shochu with soda (Tabelog) · white-liver sashimi ¥528; meat tofu with egg yolk ¥748; grilled mackerel sushi ¥495 a piece; shio-koji garlic kara-age ¥770; beer ¥605 (March and July 2026) · kibinago (March 2026) · Inca no Mezame potato fries; akaten; bamboo-charcoal highball (April 2026) · momo sashimi with momiji-oroshi ponzu; grilled baby corn with smoked soy (July 2026) · octopus-avocado kimchi ¥748; homemade Basque cheesecake ¥660 (July 2026) · oyakodon (October 2026)',
    website: null, gmaps: gm('酒場らいと 京都'), menu_url: TB,
    notes: '[Izakaya · Shijo toward Omiya, Kagoshima chicken] A bright, stylish two-floor izakaya on Shijo-dori: Kagoshima black Satsuma chicken served raw as sashimi and “paccio”, or as sweet-spicy fried wings, fish like kibinago and mackerel sushi, and playful plates with charcoal highballs and craft shochu. Counter and standing bar downstairs; book or come early. Flagged: operator 有限会社起福.',
    chef_bio: { chef_name: null, roles: ['Cooks (unnamed)'], origin: null,
      background: 'The shop says its cooks trained at Arashiyama Kichijo and Kyoto Ito (Tabelog’s English spelling) (Tabelog). The receipt invoice number belongs to 有限会社起福 (中京区); Tabelog also lists a “Karaoke Sakaba Light” and “SAKASALIGHT SANDWICHES”, which no source links to this shop.',
      philosophy: null, specialty: 'Black Satsuma chicken from Kagoshima.',
      anecdotes: [
        { text: 'An April 2026 business traveller slipped out of the hotel for a solo nightcap at the counter and tried the jet-black bamboo-charcoal highball.', source: R + 'B525903069/' },
      ],
      japanese_sources_summary: '食べログ: 酒場らいと、立ち飲み・鶏料理・海鮮、下京区石井筒町518、毎日 17:00〜24:00、2025年4月29日オープン、カード可、42席、1階はカウンターと立ち飲み・2階はテーブル、禁煙、鹿児島直送の黒さつま鶏・旬の魚・野菜、名物は自家製ごま油ポン酢の鶏のパッチョ、甘辛の手羽先唐揚げ、鹿児島限定の焼酎のソーダ割り、Arashiyama Kichijo や Kyoto Ito (食べログ英語版の表記) で修業した料理人。適格請求書: 有限会社起福 (中京区)。口コミ (2026年、英語): 白レバー刺し528円、卵黄の肉豆腐748円、焼き鯖寿司1貫495円、塩麹にんにくの唐揚げ770円、ビール605円、きびなご、インカのめざめのフライドポテト、akaten (赤いすり身の揚げ物)、竹炭ハイボール、もも刺しのもみじおろしポン酢、ヤングコーンの焼き、タコとアボカドのキムチ748円、自家製バスクチーズケーキ660円、親子丼、人気の品は早く売り切れる。',
      confidence: 'low', sources: [TB, R + 'B523926462/', R + 'B525377623/', R + 'B525903069/', R + 'B527240395/', R + 'B533099784/', R + 'B534404755/', R + 'B537653677/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter suits solo visits; raw chicken on the menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区石井筒町518',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March to October 2026.' },
    pin_source: `Tabelog ${TB} (35.003584, 135.753704), offset 5.5 m south because 焼肉ダイスケ (kyoto_yakiniku_daisuke) at the same street address sits 4.5 m from the Tabelog point; cross-checked: GSI 京都府京都市下京区石井筒町518番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523926462/', R + 'B534404755/'],
    price_note: 'Prices from March and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'White-liver sashimi (raw chicken liver)', '¥528', 'Chicken', 'ask', 'no', 'March 2026.', 'liver_sashi'),
      it('', '', 'Meat tofu with egg yolk', '¥748', 'Small plates', 'ask', 'no', 'March and July 2026.', 'nikudofu'),
      it('', '', 'Grilled mackerel sushi (per piece)', '¥495', 'Fish', 'ask', 'no', 'March and July 2026.', 'saba_sushi'),
      it('', '', 'Shio-koji garlic kara-age', '¥770', 'Chicken', 'no', 'no', 'March 2026.', 'karaage'),
      it('', '', 'Octopus and avocado kimchi', '¥748', 'Small plates', 'ask', 'no', 'July 2026.', 'tako_kimchi'),
    ] }, {
    cuisine: '鹿児島直送の黒さつま鶏、魚、野菜。Arashiyama Kichijo や Kyoto Ito (食べログ英語版の表記) で修業した料理人 (食べログ)・自家製ごま油ポン酢の鶏のパッチョ、甘辛の手羽先唐揚げ、鹿児島の焼酎のソーダ割り (食べログ)・白レバー刺し528円、卵黄の肉豆腐748円、焼き鯖寿司1貫495円、塩麹にんにくの唐揚げ770円、ビール605円 (2026年3・7月)・きびなご (2026年3月)・インカのめざめのフライドポテト、akaten (赤いすり身の揚げ物)、竹炭ハイボール (2026年4月)・もも刺しのもみじおろしポン酢、皮付きヤングコーンの燻製醤油焼き (2026年7月)・タコとアボカドのキムチ748円、自家製バスクチーズケーキ660円 (2026年7月)・親子丼 (2026年10月)',
    neighborhood: '四条通、大宮寄り。四条駅・大宮駅から徒歩5分',
    gf_detail: '要確認。鶏刺しのポン酢、手羽先の唐揚げ、唐揚げ、鯖寿司、akaten。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。黒さつま鶏 (生と加熱)、魚、海鮮 (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・四条油小路、鹿児島の鶏] 四条通の明るくおしゃれな2階建ての居酒屋。鹿児島の黒さつま鶏を刺身や「パッチョ」で、手羽先は甘辛く揚げて。きびなごや鯖寿司などの魚、遊び心のある皿に竹炭ハイボールやクラフト焼酎。1階はカウンターと立ち飲み。予約か早めの来店を。運営は有限会社起福 (要確認)。',
  });
}

save();
