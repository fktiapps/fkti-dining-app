// Kyoto priority (kyoto-missed), worker osw13, batch 79 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 京のじどり屋 晃, 一平茶屋, ステーキ みその 京都店, 酒処 文架.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-79');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京のじどり屋 晃
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026770/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_kyo_no_jidoriya_aki', name: '京のじどり屋 晃 (Kyo no Jidoriya Aki)', category: 'OMNI',
    lat: 35.005158, lng: 135.766431, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kara-age, tare yakitori, oyakodon and oden (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: jidori chicken and duck throughout (2026 reviews).',
    hours_raw: 'Tabelog: daily 12:00–14:30 (last order 14:00) and 17:00–23:00 (last orders food 22:00, drinks 22:30); closed one Thursday a month. Reservations taken; 30 minutes late counts as a cancellation. Charge ¥450 — Tabelog, Japanese original 「450円」. 25 seats: 7 at the counter and 4 at tables downstairs, 14 at tables upstairs up a steep staircase (April 2026). Non-smoking. School-age children welcome; call ahead for younger ones. Cards (Visa, Master, JCB, AMEX) and PayPay; no e-money. Beside Nishiki Market on Gokomachi.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi, by Nishiki Market — near Shijo-Kawaramachi',
    cuisine: 'A Kyoto jidori chicken izakaya by Nishiki Market, with lunch (2026 reviews) · lunch: chicken outside-skirt and Kujo-leek yakiniku set on a hot plate ¥1,600; oyakodon ¥1,400; rice in three sizes (March–August 2026) · evening: charcoal yakitori including outside skirt, negima, tsukune with sansho, skin; duck breast and shoulder; lotus root; signature kara-age; smoked dishes and potato salad; oden; rice balls (2026) · appetiser of cabbage with chicken miso (April 2026)',
    website: null, gmaps: gm('京のじどり屋 晃 錦'), menu_url: null,
    notes: '[Jidori chicken · Nishiki Market, yakitori and a hot-plate lunch] A small two-floor chicken izakaya right by Nishiki Market: charcoal yakitori, duck, tender kara-age and oden at night, and a sizzling chicken-and-Kujo-leek set or oyakodon at lunch — a real meal amid the market snacks. Two diners noticed an odour in some skewers (April 2026); the stairs are steep. ¥450 charge.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers in 2026 describe a cosy two-floor room with a young, attentive staff, many international guests, signed celebrity photos on the walls (August 2026), and grilling over charcoal in front of guests. One August 2026 reviewer calls it the "Nishiki branch", but no other branch was identified.',
      philosophy: null,
      specialty: 'Jidori yakitori; kara-age.',
      anecdotes: [
        { text: 'April 2026, a grill cook from Fukuoka: the negima "used chicken neck, but I was disappointed to find a strong odor from the first bite… the \'Duck Breast\' and \'Duck Shoulder\' were rich in flavor and very delicious."', source: R + 'B526944945/' },
        { text: 'March 2026: "Since Nishiki Market tends to have overpriced light snacks, I recommend this place if you want a proper meal."', source: R + 'B523573669/' },
        { text: 'April 2026: "the stairs were quite steep, so be careful with your footing… Some pieces of meat had a slight odor, but the duck yakitori was delicious!"', source: R + 'B526944397/' },
      ],
      japanese_sources_summary: '食べログ: 京のじどり屋 晃、居酒屋・焼鳥・串焼き、中京区御幸町通錦小路上ル船屋町398、四条河原町から徒歩すぐ、毎日 12:00〜14:30 (L.O. 14:00)・17:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、月1回木曜休み、予約可、30分過ぎでキャンセル、原文で「450円」、25席 (1階カウンター7・テーブル4、2階テーブル14)、禁煙、小学生以上可、カード・PayPay可、電子マネー不可。口コミ (2026年3〜10月、英語): 錦市場のそば、昼は鶏ハラミと九条ねぎの焼肉定食1,600円・親子丼1,400円・ご飯は大中小、夜は炭火の焼鳥 (ハラミ、ねぎま、山椒のつくね、皮)、鴨胸と鴨肩、れんこん、名物の唐揚げ、燻製とポテトサラダ、おでん、おにぎり、お通しのキャベツと鶏味噌、若いスタッフ、海外の客、有名人のサイン、階段が急、ねぎまに臭みという声が2件。',
      confidence: 'medium', sources: [TB, R + 'B493794903/', R + 'B523573669/', R + 'B526944397/', R + 'B526944945/', R + 'B528340661/', R + 'B531072822/', R + 'B531441476/', R + 'B533467921/', R + 'B533496092/', R + 'B533506787/', R + 'B536857374/', R + 'B538336525/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; ¥450 charge; steep stairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通錦小路上ル船屋町398',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005158, 135.766431); cross-checked: GSI 京都府京都市中京区船屋町398番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538336525/'],
    price_note: 'Lunch prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken outside-skirt and Kujo-leek yakiniku set (lunch)', '¥1,600', 'Lunch', 'no', 'no', 'March, July 2026.', 'chicken_set'),
      it('', '', 'Oyakodon (lunch)', '¥1,400', 'Lunch', 'no', 'no', 'July 2026.', 'oyakodon'),
    ] }, {
    cuisine: '錦市場のそばの京の地鶏の居酒屋。昼もある (2026年の口コミ)・昼は鉄板で出す鶏ハラミと九条ねぎの焼肉定食1,600円、親子丼1,400円、ご飯は大中小 (2026年3〜8月)・夜は炭火の焼鳥 (ハラミ、ねぎま、山椒のつくね、皮)、鴨の胸と肩、れんこん、名物の唐揚げ、燻製やポテトサラダ、おでん、おにぎり (2026年)・お通しはキャベツと鶏味噌 (2026年4月)',
    neighborhood: '御幸町、錦市場のそば。四条河原町の近く',
    gf_detail: 'グルテンフリーではない: 唐揚げ、タレの焼鳥、親子丼、おでん (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 地鶏と鴨が中心 (2026年の口コミ)。',
    notes: '[地鶏・錦市場、焼鳥と鉄板の昼ごはん] 錦市場のすぐそばの2階建ての小さな鶏の居酒屋。夜は炭火の焼鳥、鴨、柔らかい唐揚げ、おでん、昼はじゅうじゅう焼く鶏と九条ねぎの定食や親子丼で、市場の食べ歩きの合間にしっかり食事を。串に臭みがあったという声が2件 (2026年4月)、階段は急。チャージ450円。',
  });
}

// ================================================================ 一平茶屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000556/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.eonet.ne.jp/~ippeizyaya/';
  const H = day(['12:00', '21:00']);
  put({
    id: 'kyoto_ippei_chaya_miyagawacho', name: '一平茶屋 (Ippei Chaya)', category: 'OMNI',
    lat: 35.003007, lng: 135.772085, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kabura-mushi with a thickened dashi sauce, nama-fu, tempura and soy-seasoned dishes (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi throughout; sashimi, shrimp, eel and fish in the kabura-mushi (2025–2026 reviews).',
    hours_raw: 'Tabelog: 12:00–21:00 straight through; closed Thursday. Reservations taken; the premium kabura-mushi set must be booked the day before (February 2026). 10% service charge in the second-floor tatami room only — Tabelog, Japanese original 「サービス料2階席のみ10％」. 25 seats: two tables for 4 and two tatami seats for 2 downstairs, 15 upstairs. Non-smoking. Children and strollers welcome. Cash only: no cards, e-money or QR (Tabelog; March 2026). On Kawabata-dori just south of Minamiza, 3 min from Gion-Shijo Stn.',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawabata-dori south of Minamiza, Gion-Shijo — 3 min walk from Gion-Shijo Stn',
    cuisine: 'A long-standing Kyoto cooking house on Kawabata-dori, open here since 1928 (Tabelog) · signature kabura-mushi — grated turnip steamed over fish, shrimp and more under a thick dashi sauce with wasabi: set ¥5,500 with appetisers, hassun, sashimi, rice and pickles; premium set ¥7,700 (book a day ahead); omakase ¥11,000 (2026 reviews) · seasonal Kyoto: hamo and Kamo eggplant in summer, ebi-imo and Shogoin turnip in winter, yuba and nama-fu (Tabelog) · à la carte dashimaki, tempura, mackerel sushi, octopus stew (2025–2026 reviews)',
    website: SITE, gmaps: gm('一平茶屋 宮川筋'), menu_url: SITE,
    notes: '[Kyoto cooking · Gion-Shijo, kabura-mushi since 1928] A wood-lined old house on Kawabata-dori by Minamiza, serving Kyoto home-style kaiseki since 1928, best known for kabura-mushi — fluffy grated turnip over fish in thick dashi — in a ¥5,500 set with sashimi and hassun, open straight through from noon. Portions suit lighter eaters (March 2026). Cash only; 10% service upstairs. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Per its Tabelog text, a long-established restaurant on Kawabata-dori serving seasonal Kyoto cuisine at this spot since 1928, in a wood-warm interior. Reviewers in 2025–2026 describe a Showa-era house, an elegant owner and head waitress (October 2026), private rooms upstairs for families, and dishes made with care.',
      philosophy: null,
      specialty: 'Kabura-mushi.',
      anecdotes: [
        { text: 'March 2026: "The portion size was just right for women, but men might find it a bit lacking. Please note that payment is cash only!"', source: R + 'B523959337/' },
        { text: 'October 2026: "Many traditional restaurants can feel a bit intimidating… but this place was different. The owner, the head waitress, and the staff were all elegant and wonderful people."', source: R + 'B537727675/' },
        { text: 'February 2026: "I always order the \'Jou Kabura Mushi Set Meal\' (JPY 7700, reservation required one day in advance)."', source: R + 'B524819762/' },
      ],
      japanese_sources_summary: '食べログ: 一平茶屋、日本料理・天ぷら・魚介料理、東山区宮川筋1丁目219、京阪祇園四条駅から徒歩3分、12:00〜21:00、木曜休み、予約可、原文で「サービス料2階席のみ10％」、25席 (1階テーブル4名×2・座敷2名×2、2階15名)、禁煙、子供・ベビーカー可、カード・電子マネー・QR不可、川端通で1928年からこの地で営む京料理の老舗、夏は鱧と賀茂なす、冬は海老芋と聖護院かぶ、湯葉と生麩。口コミ (2025年12月〜2026年11月、英語): かぶら蒸し定食5,500円 (先付、八寸、お造り、ご飯、香の物)、上かぶら蒸し定食7,700円 (前日までに予約)、おまかせ11,000円、だし巻、天ぷら、鯖寿司、たこの煮物、南座の南、昭和の家、上品な店主と仲居頭、2階の個室、量は女性向けという声、現金のみ。',
      confidence: 'medium', sources: [SITE, TB, R + 'B519936415/', R + 'B520594057/', R + 'B520745673/', R + 'B522224137/', R + 'B522667385/', R + 'B523959337/', R + 'B524819762/', R + 'B530143874/', R + 'B530781908/', R + 'B535977879/', R + 'B537727675/', R + 'B538681254/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; 10% service upstairs; book the premium set a day ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋1丁目219',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003007, 135.772085); cross-checked: GSI 京都府京都市東山区宮川筋一丁目219番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530143874/', R + 'B524819762/', R + 'B520745673/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('かぶら蒸し定食', '', 'Kabura-mushi set (appetiser, hassun, sashimi, kabura-mushi, rice, pickles)', '¥5,500', 'Set', 'no', 'no', 'June 2026.', 'kaburamushi'),
      it('上かぶら蒸し定食', '', 'Premium kabura-mushi set (book a day ahead)', '¥7,700', 'Set', 'no', 'no', 'February 2026.', 'kaburamushi'),
      it('', '', 'Omakase', '¥11,000', 'Course', 'no', 'no', 'January 2026.', 'kaiseki_course'),
    ] }, {
    cuisine: '1928年からこの地で営む川端通の京料理の老舗 (食べログ)・名物のかぶら蒸しは、魚や海老の上におろしかぶを蒸してとろみの出汁とわさびで。先付、八寸、お造り、ご飯、香の物の定食5,500円、上かぶら蒸し定食7,700円 (前日までに予約)、おまかせ11,000円 (2026年の口コミ)・夏は鱧と賀茂なす、冬は海老芋と聖護院かぶ、湯葉と生麩 (食べログ)・単品にだし巻、天ぷら、鯖寿司、たこの煮物 (2025〜2026年の口コミ)',
    neighborhood: '川端通、南座の南、祇園四条。祇園四条駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: とろみの出汁のかぶら蒸し、生麩、天ぷら、醤油の料理 (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: どの料理にも出汁。お造り、海老、穴子、かぶら蒸しの魚 (2025〜2026年の口コミ)。',
    notes: '[京料理・祇園四条、1928年からのかぶら蒸し] 南座のそばの川端通にある木の温もりの古い家で、1928年から京の家庭的な会席を。名物はふわふわのおろしかぶを魚にのせてとろみの出汁で食べるかぶら蒸しで、お造りと八寸付きの定食5,500円、昼から通しで営業。量は控えめという声も (2026年3月)。現金のみ、2階はサービス料10%。木曜休み。',
  });
}

// ================================================================ ステーキ みその 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005296/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.misono.org/';
  const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_steak_misono_kawaramachi', name: 'ステーキ みその 京都店 (Steak Misono Kyoto)', category: 'OMNI',
    lat: 35.006125, lng: 135.769336, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: steaks are grilled with natural Ako salt on the teppan, but garlic chips, sauces, salads and set sides share the plate (official site; 2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu and Kobe beef steak, lobster and abalone (official site; reviews).',
    hours_raw: 'Tabelog: daily 11:30–14:30 (last order 13:30) and 17:00–22:00 (last order 21:00; arrive for dinner by 21:00); closed at New Year. Reservations a must (February 2025). Dinner only: 10% service and ¥700 table charge — Tabelog, Japanese original 「ディナータイムのみサービス料10％、テーブルチャージ700円」. Cancellation fees without notice: 30% of the meal plus tax if the menu was set, otherwise ¥3,300 a person. 35 seats, every one at a teppan; window seats over Kawaramachi. Designated smoking area. Children welcome. Tabelog lists halal options (no certification claim seen). Cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR. 5F of the Aoyama Kawaramachi Building. Menu fully renewed from May 2026 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi, north of Shijo — 5 min walk from Hankyu Kawaramachi',
    cuisine: 'The Kyoto branch of Misono, the Kobe steakhouse founded in 1945 that says it first served teppanyaki steak (official site) · A4 and A5 black wagyu including Kobe beef on a 2 cm iron plate, with Ako salt and garlic chips; live lobster and abalone from the tank (Tabelog; official site) · lunch: steak lunch set with salad, rice and miso soup about ¥2,500; "No" course ¥2,500 and "So" course ¥4,000 (October 2024); "Misono course"; ¥10,000 lunch course (April 2025) · dinner courses about ¥12,000 and up; lobster and Kobe beef course (2024) · sake from Kobe\'s Fukuju brewery (official site)',
    website: SITE, gmaps: gm('ステーキ みその 京都店 河原町'), menu_url: SITE,
    notes: '[Teppanyaki steak · Kawaramachi, the Kobe originators\' Kyoto branch] The Kyoto branch, five floors above Kawaramachi, of Kobe\'s Misono (1945), which claims the first teppanyaki steak: Kobe beef and A5 wagyu seared in front of you with garlic chips, lobster and abalone, and a good-value ¥2,500 steak lunch. A regular notes prices have risen (February 2026); one diner found the manager too talkative (August 2023). Dinner adds 10% service and ¥700 table charge.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; Kyoto branch of みその (official site)'], origin: null,
      background: 'Per the official site, みその was born in Kobe in 1945 and says it was the first in the world to serve teppanyaki steak; it now has its Kobe main shop, this Kyoto shop and a Shinjuku shop, grades its own A4 and A5 wagyu, and puts flavour ahead of performance. Reviewers from 2023 to 2026 describe chefs cooking at every seat, a retro, calm room with a city view, and long-time regulars.',
      philosophy: 'From the site: "パフォーマンスよりも、美味しさを最優先" (flavour first, before performance).',
      specialty: 'Kobe beef and wagyu teppanyaki steak.',
      anecdotes: [
        { text: 'August 2023: "The manager\'s performance was outstanding... I couldn\'t stop talking... but I realized that it\'s better for the staff to be good listeners rather than just good talkers."', source: R + 'B470635486/' },
        { text: 'February 2026, a regular: "I must admit that prices have increased compared to the past, which is understandable."', source: R + 'B504417849/' },
        { text: 'September 2025: "With a salad and a drink included, I think a JPY 2500 lunch in this location is quite a bargain."', source: R + 'B513611632/' },
      ],
      japanese_sources_summary: '公式サイト: 元祖 鉄板焼ステーキ みその、1945 (昭和20) 年から、鉄板焼ステーキを世界で初めて提供した老舗、神戸本店・京都店・新宿店、最高級の神戸ビーフと全国の黒毛和牛を独自に格付け (A4・A5)、パフォーマンスより美味しさを優先、神戸の酒蔵「福寿」の純米酒、京都店のメニューを2026年5月から全面リニューアル。食べログ: ステーキ みその 京都店、ステーキ・鉄板焼き、中京区河原町通蛸薬師下る奈良屋町300 青山河原町ビル 5F、毎日 11:30〜14:30 (L.O. 13:30)・17:00〜22:00 (L.O. 21:00)、年末年始休み、原文で「ディナータイムのみサービス料10％、テーブルチャージ700円」、無断キャンセルの料金、35席、全席に鉄板、喫煙所、ハラール対応の表示、カード可、電子マネー・QR不可、2cmの鉄板、赤穂の天然塩、活伊勢海老と鮑。口コミ (2023年3月〜2026年2月、英語): ステーキランチ (サラダ・ご飯・味噌汁)、2,500円の「No」と4,000円の「So」のコース、みそのコース、1万円のランチコース、夜は1万2千円ほどのコース、伊勢海老と神戸牛、ガーリックチップ、窓から河原町の眺め、店長の話が多いという声、値上がりしたという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B445283721/', R + 'B461599590/', R + 'B470635486/', R + 'B483205278/', R + 'B483436313/', R + 'B484182099/', R + 'B494030071/', R + 'B502014747/', R + 'B504417849/', R + 'B508992571/', R + 'B513611632/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests; dinner adds 10% service and ¥700 table charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通蛸薬師下る奈良屋町300 青山河原町ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (Kyoto menu renewed May 2026); Tabelog reviews through February 2026.' },
    pin_source: `Tabelog ${TB} (35.006125, 135.769336); cross-checked: GSI 京都府京都市中京区奈良屋町300番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494030071/', R + 'B513611632/'],
    price_note: 'Lunch prices from 2024–2025 reviews; the Kyoto menu was renewed in May 2026.', last_checked: TODAY, items: [
      it('', '', 'Steak lunch set (salad, rice, miso soup, drink)', '¥2,500', 'Lunch', 'ask', 'no', 'September 2025.', 'steak'),
      it('', '', '"So" lunch course', '¥4,000', 'Lunch', 'ask', 'no', 'October 2024.', 'teppanyaki'),
    ] }, {
    cuisine: '1945年創業で鉄板焼ステーキの元祖という神戸のみそのの京都店 (公式サイト)・神戸ビーフを含むA4・A5の黒毛和牛を2cmの鉄板で、赤穂の塩とガーリックチップで。生簀の伊勢海老と鮑 (食べログ、公式サイト)・昼はサラダ、ご飯、味噌汁付きのステーキランチ約2,500円、「No」コース2,500円と「So」コース4,000円 (2024年10月)、みそのコース、1万円のランチコース (2025年4月)・夜は1万2千円ほどからのコース、伊勢海老と神戸牛のコース (2024年)・神戸の酒蔵「福寿」の純米酒 (公式サイト)',
    neighborhood: '河原町、四条の北。阪急河原町駅から徒歩5分',
    gf_detail: '要確認: ステーキは鉄板で赤穂の天然塩で焼くが、ガーリックチップ、ソース、サラダ、付け合わせも同じ鉄板 (公式サイト、2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛と神戸牛のステーキ、伊勢海老、鮑 (公式サイト、口コミ)。',
    notes: '[鉄板焼ステーキ・河原町、元祖の京都店] 鉄板焼ステーキの元祖という神戸のみその (1945年) の京都店で、河原町のビル5階。神戸牛やA5和牛を目の前で焼いてガーリックチップで、伊勢海老や鮑も、昼は手頃な2,500円のステーキランチ。値上がりしたという常連の声 (2026年2月) や、店長の話が多いという声 (2023年8月) も。夜はサービス料10%とテーブルチャージ700円。',
  });
}

// ================================================================ 酒処 文架
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042856/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '22:00']);
  put({
    id: 'kyoto_sakedokoro_monka_pontocho', name: '酒処 文架 (Sakedokoro Monka)', category: 'OMNI',
    lat: 35.005544, lng: 135.771009, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: shumai, avocado fries, whole-wheat crackers, macaroni salad and soy-based dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled pork, chicken tofu, liver, sashimi, prairie-oyster egg (2026 reviews).',
    hours_raw: 'Tabelog: 14:00–22:00 (last order 21:00); closed Wednesday and irregular days — check Instagram. Reservations taken. 30 seats: a 10-person U-shaped standing counter downstairs and tables for 20 upstairs. Designated smoking area — e-cigarettes allowed, regular cigarettes not (March 2026). Cards and e-money; no QR. Down the 17th alley off Pontocho (south side), no sign on the street. Opened 31 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, 17th alley — 4 min walk from Gion-Shijo',
    cuisine: 'A literary-tavern-themed standing bar and izakaya opened in 2025, for afternoon drinking (2026 reviews) · homemade shumai ¥660; avocado fries ¥990; grilled pork platter ¥1,320; fig butter with whole-wheat crackers ¥660 (February–March 2026) · prairie oyster (soft egg with Worcestershire, ketchup, Tabasco) ¥330; Showa-style macaroni salad ¥550; chicken tofu; kitsune-yaki; liver; pickles; sea bream and lettuce nuta; shungiku namul; kanpachi (2026) · sake by the glass, hot sake, Sapporo Lager (2026)',
    website: null, gmaps: gm('酒処 文架 先斗町'), menu_url: null,
    notes: '[Standing bar · Pontocho alley, afternoon sake and shumai] A hidden two-floor tavern down a Pontocho alley, opened in 2025 and themed on taverns in literature: a U-shaped standing counter for cheap afternoon sake, homemade shumai and retro snacks like a prairie oyster, and a mid-century dining room upstairs overlooking Pontocho. Diners note a cool welcome (March 2026), a short drinks list (October 2026) and dishes selling out late. Opens 14:00; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 31 March 2025 (Tabelog). Reviewers in 2026 describe a townhouse-style space with no street sign, a standing counter run by a single person at a quiet time (March 2026), stylish mid-century tables and lighting upstairs, and a crowd of locals, women in small groups and couples.',
      philosophy: null,
      specialty: 'Homemade shumai; standing-bar snacks.',
      anecdotes: [
        { text: 'March 2026: "There was no greeting… the staff seemed a bit indifferent… The shumai, kitsune-yaki, Showa-style macaroni salad, and green pepper with tororo kombu were all delicious."', source: R + 'B525267986/' },
        { text: 'March 2026: two servings of sake, two bottles of beer, tuna sashimi, grilled kitsune and chicken tofu came to "just over JPY 2000 per person."', source: R + 'B523899944/' },
        { text: 'October 2026: "While the selection of drinks wasn\'t extensive, the food was delicious, and the Kanpachi (amberjack) was incredibly rich."', source: R + 'B537885263/' },
      ],
      japanese_sources_summary: '食べログ: 酒処 文架、居酒屋、中京区先斗町通四条上ル下樵木町204-9 17番路地南側、14:00〜22:00 (L.O. 21:00)、水曜と不定休 (Instagram で)、予約可、30席 (1階立ち飲みカウンター10、2階テーブル20)、喫煙所 (加熱式は可、紙巻きは不可)、カード・電子マネー可、QR不可、2025年3月31日オープン。口コミ (2026年2〜10月、英語): 文学の中の酒場がテーマ、看板のない路地奥、自家製しゅうまい660円、アボカドフライ990円、焼き豚の盛り合わせ1,320円、いちじくバターと全粒粉のクラッカー660円、プレーリーオイスター330円、昭和のマカロニサラダ550円、鶏豆腐、きつね焼き、レバー、漬物、鯛とレタスのぬた、春菊のナムル、カンパチ、日本酒と熱燗、サッポロラガー、U字の立ち飲みカウンター、2階のミッドセンチュリーの席、挨拶がなく素っ気ないという声、酒の種類は多くないという声、遅い時間は品切れ。',
      confidence: 'medium', sources: [TB, R + 'B522601601/', R + 'B523148173/', R + 'B523183283/', R + 'B523899944/', R + 'B524243605/', R + 'B524937361/', R + 'B524956775/', R + 'B525267986/', R + 'B527058988/', R + 'B530317445/', R + 'B536711602/', R + 'B537885263/'] },
    cultural_comfort: { level: 'japanese', note: 'Standing counter downstairs; no street sign.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル下樵木町204-9 17番路地南側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005544, 135.771009); cross-checked: GSI 京都府京都市中京区下樵木町204番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523183283/', R + 'B522601601/'],
    price_note: 'Prices from February–March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Homemade shumai', '¥660', 'Small plates', 'no', 'no', 'February 2026.', 'shumai'),
      it('', '', 'Avocado fries', '¥990', 'Small plates', 'no', 'ask', 'February 2026.', 'fries'),
      it('', '', 'Prairie oyster (soft egg, Worcestershire, ketchup, Tabasco)', '¥330', 'Small plates', 'ask', 'no', 'February 2026.', 'egg'),
    ] }, {
    cuisine: '文学の中の酒場がテーマの、2025年開店の昼飲みの立ち飲みと居酒屋 (2026年の口コミ)・自家製しゅうまい660円、アボカドフライ990円、焼き豚の盛り合わせ1,320円、いちじくバターと全粒粉のクラッカー660円 (2026年2〜3月)・プレーリーオイスター (半熟卵にウスター、ケチャップ、タバスコ) 330円、昭和のマカロニサラダ550円、鶏豆腐、きつね焼き、レバー、漬物、鯛とレタスのぬた、春菊のナムル、カンパチ (2026年)・グラスの日本酒、熱燗、サッポロラガー (2026年)',
    neighborhood: '先斗町17番路地。祇園四条から徒歩4分',
    gf_detail: 'グルテンフリーではない: しゅうまい、アボカドフライ、全粒粉のクラッカー、マカロニサラダ、醤油の料理 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 焼き豚、鶏豆腐、レバー、刺身、プレーリーオイスターの卵 (2026年の口コミ)。',
    notes: '[立ち飲み・先斗町の路地、昼からの日本酒としゅうまい] 先斗町の路地奥に2025年に開いた2階建ての隠れた酒場で、文学の中の酒場がテーマ。U字の立ち飲みカウンターで昼から安く日本酒、自家製しゅうまいやプレーリーオイスターのような昭和のつまみ、2階は先斗町を見下ろすミッドセンチュリーの席。挨拶がなく素っ気ないという声 (2026年3月)、酒の種類は多くないという声 (2026年10月)、遅いと品切れも。14時から、水曜休み。',
  });
}

save();
