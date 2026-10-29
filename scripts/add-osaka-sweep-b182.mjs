// Osaka sweep (2-mile circle around Dotonbori), batch 182 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 鶏と牛のお店 火澄屋 (chicken-and-beef izakaya with set-meal lunches; Nagahoribashi dining building)
//   + リロ コーヒー ロースターズ (LiLo Coffee Roasters: ~20 specialty coffees, barista-matched; Nishi-Shinsaibashi)
//   + こ玄 (12-seat one-person Chinese counter, cheap small plates to 1 am; Higashi-Shinsaibashi) — mom
//   + 鳥焼酒場 暁 (chicken sashimi and off-the-skewer yakitori, private rooms; Higashi-Shinsaibashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 182);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鶏と牛のお店 火澄屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27088863/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '14:00'], ['17:30', '00:00']);
  put({
    id: 'osaka_kasumiya_nagahoribashi', name: '鶏と牛のお店 火澄屋 (Tori to Gyu no Omise Kasumiya)', category: 'OMNI',
    lat: 34.673442, lng: 135.505998, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; lunch is kara-age with tartar sauce or curry, and the izakaya menu is chicken and beef tongue.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and beef izakaya.',
    hours_raw: 'Mon–Fri 12:00–14:00 and 17:30–24:00; Saturday 17:30–24:00; closed Sunday and holidays (Tabelog). Phone may go unanswered 15:00–18:00 (Tabelog). Appetizer charge ¥500 at night (Tabelog). Cards, e-money and PayPay accepted (Tabelog). Smoking allowed; small tables (2026). The lunch menu has changed over time: curry-only in March 2025, set meals around ¥1,000 by 2026.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['17:30', '00:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-4-1, Oriental Higashi-Shinsaibashi Bldg 1F (107), at the back of a dining building just outside Nagahoribashi Stn exit 7',
    cuisine: 'Chicken and beef-tongue izakaya (20 seats; small semi-private rooms) · lunch set meals about ¥1,000: kara-age with tartar sauce; kara-age and offal; a fish set with several side dishes · Kasumiya curry from ¥600 with a free raw egg (2025) · dinner: chicken dishes, beef tongue and drinking snacks · sake, shochu, wine and cocktails',
    website: null, gmaps: gm('鶏と牛のお店 火澄屋'), menu_url: null,
    notes: "[Izakaya · a hidden chicken-and-beef izakaya with ¥1,000 lunches, Nagahoribashi] A small izakaya tucked at the very back of a dining building by Nagahoribashi Station, with a cozy, folk-tale feel and a semi-private nook. At lunch it serves set meals around ¥1,000: kara-age that one long-time diner says has improved (thinner coating, now with tartar sauce), a kara-age and offal set, and a well-seasoned fish set with plenty of sides; in 2025 it briefly ran a curry-only lunch from ¥600. At night it's chicken and beef tongue with drinks, and one diner happily stayed two hours. Tables are small and smoking is allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Chicken and beef izakaya with lunch service (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Kara-age lunch; chicken and beef tongue.',
      anecdotes: [
        { text: '"…the quality of the kara-age has improved… Now, it\'s served with tartar sauce, and the kara-age has a thinner skin, allowing the meat\'s texture to shine through." — June 2026, lunch ¥1,000.', source: R + 'B139092463/' },
        { text: '"There were plenty of side dishes that complemented the rice… The fish was well-seasoned and delicious!" — March 2026, lunch ¥1,000.', source: R + 'B524062432/' },
      ],
      japanese_sources_summary: '食べログ: 鶏と牛のお店 火澄屋、大阪市中央区東心斎橋1-4-1 オリエンタル東心斎橋ビル 1F (107)、長堀橋駅7番出口すぐの飲食ビル、月〜金12:00〜14:00・17:30〜24:00、土17:30〜24:00、日・祝休み、15:00〜18:00は電話に出られないことも、お通し500円、カード・電子マネー・PayPay可、喫煙可、20席、半個室あり、Instagram あり。口コミ(2023年10月〜2026年6月): ビルの奥の隠れた店、昔話のような雰囲気の半個室、昼は定食約1,000円 (タルタルの kara-age、kara-age とホルモン、副菜の多い魚の定食)、kara-age は衣が薄くなりよくなったという声、2025年3月はカレーのみ600円から (生卵無料)、夜は鶏と牛タンでお酒、テーブルが小さい、たばこの煙。',
      confidence: 'medium', sources: [TB, R + 'B139092463/', R + 'B411586064/', R + 'B473253141/', R + 'B516128699/', R + 'B524062432/', R + 'B530539416/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small izakaya; smoking allowed (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-4-1 オリエンタル東心斎橋ビル 1F (107)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目4番1号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B139092463/', R + 'B524062432/'],
    price_note: 'Lunch prices from March–June 2026 reviews; dinner about ¥3,000–4,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Kara-age set with tartar sauce (lunch)', '¥1,000', 'Lunch', 'no', 'no', 'June 2026.', 'karaage'),
      it('', '', 'Fish set meal (lunch)', '¥1,000', 'Lunch', 'ask', 'no', 'March 2026.', 'fish'),
      it('', '', 'Kasumiya curry (lunch, 2025)', 'from ¥600', 'Lunch', 'ask', 'no', 'March 2025.', 'curry'),
    ] }, {
    cuisine: '鶏と牛タンの居酒屋 (20席、小さな半個室)・昼の定食約1,000円: タルタルソースの kara-age、kara-age とホルモン、副菜の多い魚の定食・2025年は Kasumiya のカレー600円から、生卵無料・夜は鶏料理と牛タン、酒のつまみ・日本酒、焼酎、ワイン、カクテル',
    neighborhood: '東心斎橋1-4-1 オリエンタル東心斎橋ビル 1F (107)、長堀橋駅7番出口すぐの飲食ビルの奥',
    gf_detail: '要確認。グルテンの情報なし。昼はタルタルの kara-age かカレー、夜は鶏と牛タンの料理。',
    vegan_detail: 'ヴィーガンではありません。鶏と牛の居酒屋。',
    notes: '[居酒屋・長堀橋、1,000円の昼定食のある隠れた鶏と牛の店] 長堀橋駅すぐの飲食ビルのいちばん奥にある小さな居酒屋で、昔話のような雰囲気に半個室も。昼は1,000円ほどの定食で、衣が薄くなりタルタルソースがついてよくなったと長く通う人がいう kara-age、kara-age とホルモン、副菜の多い味のいい魚の定食。2025年は600円からのカレーだけの時期も。夜は鶏と牛タンでお酒を、2時間楽しんだという声も。テーブルは小さく、喫煙可。日曜休み。',
  });
}

// ================================================================ リロ コーヒー ロースターズ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27080775/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://coffee.liloinveve.com';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_lilo_coffee_roasters_shinsaibashi', name: 'リロ コーヒー ロースターズ (LiLo Coffee Roasters)', category: 'OMNI',
    lat: 34.674081, lng: 135.498043, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A coffee bar; food is not described in the reviews.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black specialty coffee is the core; milk options are not described.',
    hours_raw: 'Mon, Wed–Sun 11:00–23:00; Tuesday 11:00–20:00 (Tabelog). No reservations (Tabelog). No cards or e-money; QR payments accepted (Tabelog). Smoking on the terrace only (Tabelog). Lines on Saturday afternoons (June 2026). Beans, brewing gear and goods for sale (Tabelog). Opened 8 August 2014 (Tabelog).',
    hours: { 0: H, 1: day(['11:00', '20:00']), 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-10-28, Shinsaibashi M Bldg 1F — 3 min from Shinsaibashi Stn',
    cuisine: 'Specialty coffee bar with about 20 coffees from light to dark roast (18 seats, counter and terrace) · baristas match a coffee to your taste · Ethiopian with berry notes · light-roast Colombians, including one with Geisha, ¥1,700 · an infused coffee · café mocha · hot chai latte · beans, brewing equipment and LiLo goods',
    website: OWN, gmaps: gm('LiLo Coffee Roasters 心斎橋'), menu_url: null,
    notes: "[Coffee · a specialty coffee bar with about 20 beans, Shinsaibashi] A small, bright coffee bar near Shinsaibashi Station, industrial-meets-minimal, with a wall of colorful bean cards and about 20 single coffees from light to dark. Tell the barista what you like and you'll be steered to a coffee, with an explanation of the beans; one diner got a berry-ish Ethiopian, another a fruity light-roast Colombian with Geisha (¥1,700). Not every cup lands: one found an infused coffee disappointing. The hot chai latte has a loyal fan. Each cup comes with a little message card. Expect a line on Saturday afternoons; open until 11 pm most days. Takeout and beans to bring home.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 August 2014 (Tabelog).', background: 'Specialty coffee bar and roaster (Tabelog; 2026 reviews).', philosophy: '"With good friends and delicious coffee, life is bound to be more enjoyable" (Tabelog listing).', specialty: 'Barista-matched specialty coffee.',
      anecdotes: [
        { text: '"They asked about my flavor preferences and provided attentive service… I ordered a berry-flavored Ethiopian coffee…" — April 2026.', source: R + 'B527395431/' },
        { text: '"Lightly Roasted Colombian Coffee JPY 1700 — The price is surprising, but is this really coffee?! It\'s fruity!! It had Geisha in it…" — June 2026.', source: R + 'B530764572/' },
      ],
      japanese_sources_summary: '食べログ: リロ コーヒー ロースターズ、大阪市中央区西心斎橋1-10-28 心斎橋Mビル 1F、心斎橋駅から徒歩3分、月・水〜日11:00〜23:00、火11:00〜20:00、予約不可、カード・電子マネー不可、QR可、喫煙はテラスのみ、18席、テイクアウト、2014年8月8日開店、浅煎りから深煎りまで約20種のコーヒー、バリスタが好みに合わせて選ぶ、豆・器具・オリジナルグッズの販売、公式サイトあり。口コミ(2026年4〜8月): 豆の説明が丁寧、ベリーのようなエチオピア、ゲイシャ入りの浅煎りコロンビア1,700円、インフューズドのコーヒー (今ひとつという声)、カフェモカ、ホットのチャイラテ、カップにメッセージカード、カラフルな豆のカード、土曜の午後は行列。',
      confidence: 'medium', sources: [TB, OWN, R + 'B527167227/', R + 'B527395431/', R + 'B530764572/', R + 'B531259866/', R + 'B532822475/', R + 'B533437784/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Baristas explain the beans and match a coffee to your taste (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-28 心斎橋Mビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番28号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530764572/'],
    price_note: 'One price in the reviews (June 2026); most visits about ¥1,000 or less (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Light-roast Colombian (with Geisha)', '¥1,700', 'Coffee', '', '', 'June 2026.', 'colombia'),
      it('', '', 'Ethiopian (berry notes)', '', 'Coffee', '', '', 'April 2026.', 'ethiopia'),
      it('', '', 'Hot chai latte', '', 'Drinks', '', 'no', 'July 2026.', 'chai'),
      it('', '', 'Café mocha', '', 'Drinks', '', 'no', 'April 2026.', 'mocha'),
    ] }, {
    cuisine: '浅煎りから深煎りまで約20種のスペシャルティコーヒーの店 (18席、カウンターとテラス)・好みに合わせてバリスタが選ぶ・ベリーのようなエチオピア・ゲイシャ入りの浅煎りコロンビア1,700円・インフューズドのコーヒー・カフェモカ・ホットのチャイラテ・豆、器具、LiLo のグッズ',
    neighborhood: '西心斎橋1-10-28 心斎橋Mビル 1F。心斎橋駅から徒歩3分',
    gf_detail: '要確認。コーヒーの店で、食べ物の説明は口コミにない。',
    vegan_detail: '要確認。中心はブラックのスペシャルティコーヒーで、ミルクの選択肢の説明なし。',
    notes: '[コーヒー・心斎橋、約20種の豆のスペシャルティコーヒー] 心斎橋駅近くの小さく明るいコーヒーの店で、インダストリアルとミニマルを合わせた店内、カラフルな豆のカードの壁、浅煎りから深煎りまで約20種。好みを伝えると豆の説明とともに選んでくれ、ベリーのようなエチオピアや、ゲイシャ入りのフルーティーな浅煎りのコロンビア (1,700円) を勧められた人も。インフューズドのコーヒーは今ひとつという声も。ホットのチャイラテを気に入って毎回頼む人も。カップに小さなメッセージカードつき。土曜の午後は行列、ほとんどの日は夜11時まで。テイクアウトと豆の持ち帰りも。',
  });
}

// ================================================================ こ玄
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113753/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'osaka_kogen_chinese_higashishinsaibashi', name: 'こ玄 (Kogen)', category: 'OMNI',
    lat: 34.674338, lng: 135.504417, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; Chinese dishes with sauces, dumplings and noodles.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Stir-fried greens are on the menu; sauces and stocks are not described.',
    hours_raw: 'Mon–Sat 18:00–01:00; closed Sunday and holidays (Tabelog). The English listing mentions a 10% service charge, but the original Japanese line says none (Tabelog). Cards accepted; no e-money or QR (Tabelog). Smoking allowed; one diner noticed smoke with the kitchen fan off (September 2026). The shutter is often half down even when open (September 2026). Run by one person (April 2026). Opened 17 September 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-9-12, Daishin Bldg 1F, right by Crysta Nagahori Minami stairs 4 and 5 — 5 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Chinese small plates at a 12-seat counter, cooked by one person · mouthwatering chicken (yodare-dori) ¥450 · shrimp chili ¥790 + tax · seafood stir-fry with squid, scallops and shrimp ¥850 · boiled dumplings, 6 for ¥450 (weekly special) · sweet-and-sour chicken with lettuce ¥690 · dandan noodles · fried rice · black-vinegar sweet-and-sour pork · spicy squid and bok choy · stir-fried greens · green pepper and beef · mapo tofu (on the sweet side) · drinks around ¥500',
    website: null, gmaps: gm('こ玄 東心斎橋 中華'), menu_url: null,
    notes: "[Chinese · a one-person Chinese counter with cheap, generous plates to 1 am, Higashi-Shinsaibashi] A 12-seat Chinese counter near the Crysta Nagahori stairs, run by one person who cooks fast and well, open until 1 am. Prices are low and portions generous: spicy yodare-dori for ¥450, big-shrimp chili for ¥790, a seafood stir-fry loaded with squid, scallops and shrimp (¥850, the priciest dish), and almost-always-on boiled dumplings, six for ¥450. A weekly blackboard adds things like sweet-and-sour chicken with lettuce. One diner made eight visits. Two or three dishes fill one person, so it's better shared. The shutter often looks half-closed even when open, and the owner may smoke when it's quiet.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 17 September 2019 (Tabelog).', background: 'Chinese counter run by one person (April 2026 review).', philosophy: null, specialty: 'Cheap Chinese small plates; yodare-dori; boiled dumplings.',
      anecdotes: [
        { text: '"Spicy Chicken (Yodare-dori) - Despite being only JPY 450, the portion was generous… Shrimp Chili - The shrimp were large and the batter was crispy… only JPY 790 (excluding tax)." — September 2026, seventh visit.', source: R + 'B501709810/' },
        { text: '"It seems like there was only one person handling both cooking and serving, so it must have been quite busy… when the restaurant was crowded." — April 2026.', source: R + 'B526465181/' },
      ],
      japanese_sources_summary: '食べログ: こ玄、大阪市中央区東心斎橋1-9-12 大心ビル 1F、クリスタ長堀南4・5番階段すぐ、心斎橋駅・長堀橋駅から徒歩5分、月〜土18:00〜翌1:00、日・祝休み、サービス料・チャージは原文で「無し」、カード可、電子マネー・QR不可、喫煙可、12席、2019年9月17日開店。口コミ(2025年11月〜2026年9月): ひとりで営む店、手早い調理、yodare-dori 450円、エビチリ790円 (税抜)、イカ・ホタテ・海老の海鮮炒め850円、水 gyoza 6個450円 (週替わりだがほぼ毎回)、酢鶏のレタス添え690円、担々麺、チャーハン、黒酢の酢豚、イカと青梗菜の辛い炒め、青菜炒め、ピーマンと牛肉の炒め物、甘めの mapo tofu、ドリンク約500円、ひとりなら2〜3品、8回通った人も、シャッターはいつも半分閉まっている、客がいないとき店主がたばこを吸い換気扇も止まっていたという声。',
      confidence: 'medium', sources: [TB, R + 'B501709810/', R + 'B517308943/', R + 'B526465181/', R + 'B534622223/', R + 'B534951983/', R + 'B535245170/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; one cook; smoking allowed (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-9-12 大心ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目9番12号 (go) 5m; offset 7 m south of the Tabelog point to clear Sumibiyaki Torisei (7.9 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B501709810/'],
    price_note: 'Prices from a September 2026 review (some before tax).', last_checked: TODAY, items: [
      it('', '', 'Mouthwatering chicken (yodare-dori)', '¥450', 'Chinese', 'ask', 'no', 'September 2026.', 'yodare'),
      it('', '', 'Shrimp chili', '¥790 + tax', 'Chinese', 'ask', 'no', 'September 2026.', 'ebichili'),
      it('', '', 'Seafood stir-fry (squid, scallops, shrimp)', '¥850', 'Chinese', 'ask', 'no', 'September 2026.', 'seafood'),
      it('', '', 'Boiled dumplings (6)', '¥450', 'Chinese', 'no', 'no', 'September 2026.', 'suigyoza'),
      it('', '', 'Sweet-and-sour chicken with lettuce', '¥690', 'Chinese', 'ask', 'no', 'September 2026.', 'sutori'),
    ] }, {
    cuisine: 'ひとりで作る12席のカウンターの中華の小皿・yodare-dori 450円・エビチリ790円 (税抜)・イカ・ホタテ・海老の海鮮炒め850円・水 gyoza 6個450円 (週替わり)・レタス添えの甘酢の鶏690円・担々麺・チャーハン・黒酢の酢豚・イカと青梗菜の辛い炒め・青菜炒め・ピーマンと牛肉の炒め物・甘めの mapo tofu・ドリンク約500円',
    neighborhood: '東心斎橋1-9-12 大心ビル 1F、クリスタ長堀南の4・5番階段すぐ。心斎橋駅・長堀橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。たれのある中華料理、gyoza、麺。',
    vegan_detail: '要確認。青菜炒めはあるが、たれやスープの説明なし。',
    notes: '[中華・東心斎橋、深夜1時までのひとりで営む安くて量の多い中華] クリスタ長堀の階段近くにある12席の中華のカウンターで、ひとりで営み、調理は手早くおいしい。深夜1時まで。値段は安く量は多めで、辛い yodare-dori 450円、大きな海老のエビチリ790円、イカ・ホタテ・海老たっぷりの海鮮炒め (いちばん高くて850円)、ほぼいつもある水 gyoza は6個450円。週替わりの黒板には甘酢の鶏のレタス添えなども。8回通ったという声も。ひとりなら2〜3品でお腹いっぱいなので、分けて食べるのがおすすめ。営業中でもシャッターが半分閉まって見えることが多く、すいているときは店主がたばこを吸うことも。',
  });
}

// ================================================================ 鳥焼酒場 暁
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27139124/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:30']); const WE = day(['16:00', '23:30']);
  put({
    id: 'osaka_toriyaki_sakaba_akatsuki', name: '鳥焼酒場 暁 (Toriyaki Sakaba Akatsuki)', category: 'OMNI',
    lat: 34.674627, lng: 135.503691, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu includes tempura, kara-age, fried rice, udon and a house sauce on the tsukune.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and horse-meat izakaya.',
    hours_raw: 'Mon, Tue, Thu, Fri 17:00–23:30; Sat, Sun and holidays 16:00–23:30; last order 23:00; closed Wednesday (Tabelog; one September 2026 review says it opens at 18:00). Late arrivals over 15 minutes may be refused and charged a cancellation fee (Tabelog). Cards accepted; no e-money or QR (Tabelog). Smoking allowed (Tabelog). Private rooms and semi-private seats behind bamboo blinds; online booking (September 2026). Opened 5 September 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-12-19, Eight Bldg 1F, two blocks east of Shinsaibashi-suji — 5 min from Shinsaibashi Stn exit 2',
    cuisine: 'Chicken izakaya with private rooms (20 seats) · chicken sashimi assortment from Kagoshima chicken ¥1,980; chicken liver sashimi · horse sashimi assortment ¥2,180 · yakitori served off the skewer, assorted · aged grilled chicken thigh ¥1,280 · cheese tsukune with egg yolk · chicken neck and asparagus stir-fried with lemon · garlic-salt chicken thigh · chicken thigh and shiso tempura · kara-age ¥880; fried yam ¥680; fried octopus ¥780 · green-onion-salt beef tongue fried rice ¥980 · truffle egg-over-rice; grilled rice balls; udon with tororo kombu and plum · sake from Fukui and Mie, premium shochu; course plans',
    website: null, gmaps: gm('鳥焼酒場 暁 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Chicken izakaya · chicken sashimi and off-the-skewer yakitori in private rooms, Higashi-Shinsaibashi] A calm chicken izakaya two blocks east of Shinsaibashi-suji, with private rooms and bamboo-blind booths that suit groups. It serves chicken sashimi from Kagoshima chicken (¥1,980 for an assortment), horse sashimi, and yakitori grilled and served off the skewer, which means less smoke on your clothes. Highlights diners name: the cheese tsukune with egg yolk, lemony chicken neck and asparagus, an aged grilled thigh, and the green-onion-salt beef tongue fried rice the owner recommends (¥980). A truffle egg-over-rice and big grilled rice balls are other ways to finish. Good sake and shochu; courses for parties. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 5 September 2023 (Tabelog).', background: 'Chicken izakaya with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: 'Kagoshima chicken delivered the morning it is processed (Tabelog listing).', specialty: 'Chicken sashimi; off-the-skewer yakitori; cheese tsukune.',
      anecdotes: [
        { text: '"The yakitori is served in a style without skewers, so it doesn\'t leave smoke on your clothes, which is great!" — September 2026.', source: R + 'B535230839/' },
        { text: '"Chicken Sashimi Assortment ¥1,980… Horse Sashimi Assortment ¥2,180… Green Onion Salt Beef Tongue Fried Rice ¥980" — October 2026.', source: R + 'B536855330/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 鳥焼酒場 暁、大阪市中央区東心斎橋1-12-19 エイトビルヂング 1F、心斎橋駅2番出口から徒歩約5分、月・火・木・金17:00〜23:30、土日祝16:00〜23:30 (L.O. 23:00)、水曜休み、2023年9月5日開店、15分以上の遅れは入店を断り、キャンセル料あり、カード可、電子マネー・QR不可、喫煙可、20席、個室あり、鹿児島の朝引きの鶏の sashimi、串を外して出す焼鳥、福井や三重の日本酒、3Mのプレミアム焼酎、コース。口コミ(2026年9〜10月): 心斎橋筋の2本東、すだれで仕切った半個室、鶏の sashimi 盛り合わせ1,980円、レバーの sashimi、馬の sashimi 盛り合わせ2,180円、熟成もも焼き1,280円、kara-age 880円、山芋の揚げ物680円、タコの揚げ物780円、ねぎ塩牛タンのチャーハン980円 (店主のおすすめ)、卵黄のチーズ tsukune、鶏の首とアスパラのレモン炒め、ガーリック塩のもも炒め、もも肉と shiso の tempura、tororo 昆布と梅の udon、トリュフの TKG、大きな焼きおにぎり。',
      confidence: 'medium', sources: [TB, R + 'B528763013/', R + 'B535059032/', R + 'B535230839/', R + 'B535438800/', R + 'B535886675/', R + 'B536855330/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; online booking (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-12-19 エイトビルヂング 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目12番19号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536855330/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken sashimi assortment', '¥1,980', 'Raw', 'ask', 'no', 'October 2026.', 'torisashi'),
      it('', '', 'Horse sashimi assortment', '¥2,180', 'Raw', 'ask', 'no', 'October 2026.', 'basashi'),
      it('', '', 'Aged grilled chicken thigh', '¥1,280', 'Grill', 'ask', 'no', 'October 2026.', 'momo'),
      it('', '', 'Green-onion-salt beef tongue fried rice', '¥980', 'Rice', 'ask', 'no', 'September–October 2026.', 'chahan'),
      it('', '', 'Kara-age', '¥880', 'Fried', 'no', 'no', 'October 2026.', 'karaage'),
    ] }, {
    cuisine: '個室のある鶏の居酒屋 (20席)・鹿児島の鶏の sashimi 盛り合わせ1,980円、レバーの sashimi・馬の sashimi 盛り合わせ2,180円・串を外して出す焼鳥の盛り合わせ・熟成もも焼き1,280円・卵黄のチーズ tsukune・鶏の首とアスパラのレモン炒め・ガーリック塩のもも炒め・もも肉と shiso の tempura・kara-age 880円、揚げた山芋680円、タコの揚げ物780円・ねぎ塩牛タンのチャーハン980円・トリュフの TKG、焼きおにぎり、tororo 昆布と梅の udon・福井や三重の日本酒、プレミアム焼酎、コース',
    neighborhood: '東心斎橋1-12-19 エイトビルヂング 1F、心斎橋筋の2本東。心斎橋駅2番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。tempura、kara-age、チャーハン、udon、tsukune の自家製のたれも。',
    vegan_detail: 'ヴィーガンではありません。鶏と馬肉の居酒屋。',
    notes: '[鶏料理・東心斎橋、個室で食べる鶏の sashimi と串を外した焼鳥] 心斎橋筋の2本東にある落ち着いた鶏の居酒屋で、個室やすだれで仕切った席があり、グループ向き。鹿児島の鶏の sashimi (盛り合わせ1,980円)、馬の sashimi、焼いてから串を外して出す焼鳥で、服に煙がつきにくい。卵黄をからめるチーズ tsukune、レモンの効いた鶏の首とアスパラ、熟成もも焼き、店主のおすすめのねぎ塩牛タンのチャーハン (980円) を挙げる声。しめはトリュフの TKGや大きな焼きおにぎりも。日本酒と焼酎も充実、宴会のコースあり。水曜休み。',
  });
}

save();
