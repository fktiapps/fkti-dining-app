// Osaka sweep (2-mile circle around Dotonbori), batch 47 — MOM phase (≤20 seats, any genre), nearest first.
//   + うどん・そば処 勝衛門 (late-night udon/soba stand in Soemoncho; corporate-member listing)
//   + やき亭ぼーの (charcoal yakitori and duck sashimi; one owner runs it → mom_and_pop)
//   + 法善寺 鮨 さかた (young Edomae sushi counter in Hozenji Yokocho, opened Oct 2025)
//   + 法善寺 山岡 (monthly-changing kappo omakase; the owner cooks nearly alone → mom_and_pop)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 47);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ うどん・そば処 勝衛門
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27133440/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '15:00'], ['18:00', '03:00']), L = day(['11:00', '15:00'], ['18:00', '06:00']);
  put({
    id: 'osaka_katsuemon_udon_soemoncho', name: 'うどん・そば処 勝衛門 (Udon Soba Dokoro Katsuemon)', category: 'OMNI',
    lat: 34.669317, lng: 135.502242, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon; soba (likely blended); soy dashi; tempura and katsu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth; katsudon; oden.',
    hours_raw: 'Mon, Tue, Thu, Sun 11:00–15:00 and 18:00–3:00; Fri–Sat 11:00–15:00 and 18:00–6:00; closed Wednesday (Tabelog). Ticket machine, with some items ordered verbally (March 2025).',
    hours: { 0: A, 1: A, 3: A, 4: L, 5: L, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Soemoncho 7-10 — beside the nightlife strip, about 300 m from Namba Stn',
    cuisine: 'Late-night udon and soba stand · Kansai-style dashi · kakiage udon (¥650 in 2025) · udon from about ¥500 · sea-urchin cream udon · katsudon · oden · 10 seats · open to 3 am (6 am Fri–Sat)',
    website: null, gmaps: gm('うどん・そば処 勝衛門 宗右衛門町'), menu_url: null,
    notes: "[Udon · late-night udon and soba in the Soemoncho bar district] A ten-seat udon and soba stand next to a club in Soemoncho, open at lunch and again from 6 pm until 3 am, or 6 am on Fridays and Saturdays. It's busy late with people from nearby bars and quiet earlier. Expect a gentle Kansai dashi, chewy udon and decent soba. A January 2026 diner also liked the katsudon, neither too sweet nor too salty. The menu is long, from kakiage udon to oden and a sea-urchin cream udon you can finish as risotto. Critics call it station-stand quality at nightlife prices, but it's quick, served in about a minute. Buy a ticket; some items are ordered verbally. Prices quoted here are from 2024–2025 reviews.",
    chef_bio: { chef_name: null, roles: [], origin: 'Soemoncho (Tabelog; shop-maintained listing)', background: 'Late-night udon and soba stand used by people from nearby bars (reviews).', philosophy: null, specialty: 'Udon and soba; katsudon.',
      anecdotes: [
        { text: '"The gentle dashi typical of the Kansai region ties everything together, and the katsudon has a well-balanced flavor that isn\'t overly sweet or salty… The udon has a nice chewiness, while the soba is flavorful." — January 2026.', source: R + 'B520763872/' },
        { text: '"I ordered the kakiage udon (JPY 650), and it was served quickly, in about a minute." — March 2025.', source: R + 'B503231779/' },
      ],
      japanese_sources_summary: '食べログ: うどん・そば処 勝衛門、大阪市中央区宗右衛門町7-10、06-6211-5670、予約不可、月・火・木・日11:00〜15:00・18:00〜翌3:00、金土11:00〜15:00・18:00〜翌6:00、水曜休み、10席。口コミ(2024年6月〜2026年2月): うどん500円から、うにクリームうどん1,200円(残りにご飯とチーズでリゾット)、ミナミの夜の街の深夜営業のうどん・そば、駅の立ち食い並みで値段は倍という声、深夜3時まで、手頃、明るいスタッフで1人でも入りやすい、おでんも、券売機だが口頭注文もある、かき揚げうどん650円で約1分で提供、近くの店の人が多い、関西のやさしいだし、うどん・そば・カツ丼、甘すぎず辛すぎないカツ丼、コシのあるうどん、クラブの隣で深夜は混むが早い時間は空いている。',
      confidence: 'low', sources: [TB, R + 'B520763872/', R + 'B503231779/', R + 'B522131812/', R + 'B492224507/', R + 'B486636578/', R + 'B488679688/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; some verbal orders.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町7-10',
    existence: { status: 'probable', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; newest review February 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町7番10号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503231779/', R + 'B486636578/'],
    price_note: 'Prices from 2024–2025 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Kakiage udon', '¥650', 'Udon', 'no', 'no', 'March 2025.', 'kakiage'),
      it('', '', 'Sea-urchin cream udon', '¥1,200', 'Udon', 'no', 'no', 'June 2024.', 'uni_cream'),
      it('', '', 'Soba', '', 'Soba', 'no', 'no', 'January 2026.', 'soba'),
      it('カツ丼', 'katsudon', 'Katsudon', '', 'Rice', 'no', 'no', 'January 2026.', 'katsudon'),
      it('おでん', 'oden', 'Oden', '', 'Sides', 'no', 'no', 'July 2024.', 'oden'),
    ] }, {
    cuisine: '深夜のうどん・そばの店・関西風のだし・かき揚げうどん(2025年は650円)・うどんは約500円から・うにクリームうどん・カツ丼・おでん・10席・深夜3時まで(金土は朝6時まで)',
    neighborhood: '宗右衛門町7-10。夜の街の一角、なんば駅から約300m',
    gf_detail: 'グルテンフリーではありません。小麦のうどん、そば(つなぎ入りの可能性)、醤油のだし、天ぷらやカツ。',
    vegan_detail: 'ヴィーガンではありません。だしのつゆ、カツ丼、おでん。',
    notes: '[うどん・宗右衛門町の深夜のうどんとそば] 宗右衛門町のクラブの隣にある10席のうどん・そばの店で、昼と、夕方6時から深夜3時(金・土は朝6時)まで。夜遅くは近くの店の人でにぎわい、早い時間は空いています。関西のやさしいだしに、コシのあるうどんと、ちゃんとしたそば。甘すぎず辛すぎないカツ丼が気に入ったという人も(2026年1月)。メニューは多く、かき揚げうどんからおでん、残りをリゾットにできるうにクリームうどんまで。駅の立ち食い並みの味で夜の値段という厳しい声もありますが、約1分で出てくる早さ。食券制で、口頭で頼む品も。値段は2024〜2025年の口コミのもの。',
  });
}

// ================================================================ やき亭ぼーの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27014856/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_yakitei_bono_shinsaibashisuji', name: 'やき亭ぼーの (Yaki Tei Bono)', category: 'OMNI',
    lat: 34.669916, lng: 135.502129, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tare-glazed skewers and sauces not described; ask for salt-grilled items.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, duck and pork; grilled vegetables exist but seasoning is not described.',
    hours_raw: 'Mon–Sat 18:00–23:00, until sold out; closed Sunday (open on a Sunday before a holiday) and about twice a month irregularly (Tabelog). Reservations recommended; chicken sashimi is limited — order it in advance (May 2025). No cards or e-money; QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-3-5, Nippo Fine Plaza Bldg 1F (north Dotonbori) — 5 min from Namba Stn exit 14',
    cuisine: 'Charcoal yakitori of Yamato chicken and Kawachi duck · duck sashimi (several cuts) · chicken sashimi (limited) · raw duck liver · negima and skin skewers · tamagoyaki · potato salad · grilled vegetables · courses ¥3,300 (sashimi and five skewers) to ¥5,500 · Japanese whisky and wine · 14 seats',
    website: null, gmaps: gm('やき亭ぼーの 心斎橋筋'), menu_url: null,
    notes: "[Yakitori · a one-owner charcoal yakitori hideaway north of Dotonbori] A 14-seat yakitori counter tucked into the ground floor of a mixed-use building north of Dotonbori, run by an owner who manages the room alone and still serves quickly. It grills Yamato chicken and Kawachi duck over charcoal. The duck sashimi in several cuts is the signature, and the chicken sashimi is limited, so order it ahead. Raw duck liver, negima and skin skewers, potato salad and an excellent tamagoyaki fill out the evening. Courses run from ¥3,300 (five duck sashimi and five skewers, October 2025) to ¥5,500 (January 2026). There's a good Japanese-whisky list and wine to pair. It closes when sold out, so book. Note that raw poultry is a core part of the menu. QR payment or cash.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'North Dotonbori, Shinsaibashi-suji 2-chōme (Tabelog)', background: 'The owner runs the shop single-handed (December 2025 review); kind service (May 2025 review).', philosophy: null, specialty: 'Charcoal yakitori; duck and chicken sashimi.',
      anecdotes: [
        { text: '"This hidden gem specializes in charcoal-grilled yakitori, primarily using Yamato chicken and duck meat… a course that included \'five types of duck sashimi\' and \'five types of yakitori.\' This came to JPY 3,300 per person." — October 2025.', source: R + 'B301130526/' },
        { text: '"The owner was managing everything alone, providing attentive service, and the dishes were delicious and served quickly." — December 2025.', source: R + 'B518250316/' },
      ],
      japanese_sources_summary: '食べログ: やき亭ぼーの、大阪市中央区心斎橋筋2-3-5 日宝ファインプラザビル1F、06-6211-5933、予約可、月〜土18:00〜23:00(売り切れ次第終了)、日曜休み(祝前日の日曜は営業)、不定休(月2回)、カード・電子マネー不可、QR可、14席(カウンター8、テーブル)。口コミ(2025〜2026年): 鴨の刺身が絶品で部位を食べ比べ、5,500円のコース、焼鳥、ポテサラ、焼き野菜、ハイボールは薄めだがジャパニーズウイスキーが豊富、道頓堀北の雑居ビル1階の隠れ家、大和鶏と鴨の炭火焼鳥、鴨刺し5種と焼鳥5種で3,300円、だし巻き、鶏レバー、河内鴨・大和鶏・山形豚、鴨レバーの生、鶏刺しは数量限定で事前予約、ワイン、店主が親切、店主が一人で切り盛り、ねぎまと皮、2026年8月も絶品という声、河内の鴨と串の焼鳥、新鮮な鶏刺し。',
      confidence: 'medium', sources: [TB, R + 'B301130526/', R + 'B518250316/', R + 'B116869470/', R + 'B503031696/', R + 'B507224211/', R + 'B527345479/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small one-owner counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-5 日宝ファインプラザビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番5号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B301130526/', R + 'B116869470/'],
    price_note: 'Course prices from October 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course: five duck sashimi and five yakitori', '¥3,300', 'Courses', 'no', 'no', 'October 2025.', 'course_3300'),
      it('', '', 'Course', '¥5,500', 'Courses', 'no', 'no', 'January 2026.', 'course_5500'),
      it('', '', 'Duck sashimi (assorted cuts)', '', 'Sashimi', 'ask', 'no', 'January 2026.', 'kamo_sashi'),
      it('', '', 'Chicken sashimi (limited; order ahead)', '', 'Sashimi', 'ask', 'no', 'May 2025.', 'tori_sashi'),
      it('', '', 'Tamagoyaki', '', 'Small plates', 'ask', 'no', 'October 2025.', 'tamagoyaki'),
    ] }, {
    cuisine: '大和鶏と河内鴨の炭火焼鳥・鴨刺し(部位の食べ比べ)・数量限定の鶏刺し・鴨レバーの生・ねぎまと皮・だし巻き・ポテサラ・焼き野菜・コース3,300円(鴨刺しと串5本)〜5,500円・ジャパニーズウイスキーとワイン・14席',
    neighborhood: '心斎橋筋2-3-5 日宝ファインプラザビル1F(道頓堀の北)。なんば駅14番出口から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。たれの串やたれの中身は不明。塩焼きを相談して。',
    vegan_detail: 'ヴィーガンではありません。鶏、鴨、豚。焼き野菜もありますが味付けは不明。',
    notes: '[焼鳥・道頓堀北の店主一人の炭火焼鳥の隠れ家] 道頓堀の北、雑居ビルの1階にひっそりある14席の焼鳥のカウンターで、店主が一人で切り盛りしながら手早く出してくれます。大和鶏と河内鴨を炭火で。看板は部位ごとの鴨刺しで、鶏刺しは数量限定なので事前に予約を。鴨レバーの生、ねぎまや皮、ポテサラ、絶品のだし巻きも。コースは3,300円(鴨刺し5種と串5本、2025年10月)から5,500円(2026年1月)。ジャパニーズウイスキーが充実し、ワインも合わせられます。売り切れで閉店なので予約を。生の鶏肉がメニューの中心なので注意。支払いはQRか現金。',
  });
}

// ================================================================ 法善寺 鮨 さかた
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27151937/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_hozenji_sushi_sakata', name: '法善寺 鮨 さかた (Hozenji Sushi Sakata)', category: 'OMNI',
    lat: 34.668235, lng: 135.502474, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-based nikiri and tsume (anago sauce); house-made items not described for wheat. Ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae fish omakase; the shop does not take guests who cannot eat raw food.',
    hours_raw: 'Daily 12:00–14:00 (L.O. 13:30) and 17:30–22:30 (L.O. 21:30) (Tabelog). Reservations recommended; no guests who cannot eat raw food; cancellation fees within 48 hours (Tabelog). Cards accepted; no e-money or QR.',
    hours: ALL(day(['12:00', '14:00'], ['17:30', '22:30'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-11, Hozenji Yokocho — about 5 min from Namba Walk exit B16',
    cuisine: 'Edomae sushi omakase by a young team · dinner omakase ¥14,300 · lunch course · aged sea bream, Aomori flounder, katsuobushi-marinated bonito, kasugo, unfrozen Kushimoto squid · anago with a sauce from its bones · large-grained, vinegar-forward rice · bafun uni · white-miso pudding · everything house-made · 10 counter seats',
    website: null, gmaps: gm('法善寺 鮨 さかた'), menu_url: null,
    notes: "[Sushi · a young Edomae counter in Hozenji Yokocho] A ten-seat sushi counter behind a soft green noren in Hozenji Yokocho, open since October 2025 and already packed with Japanese diners as well as visitors. A very young team runs it. Nothing is bought in ready-made: kanpyo, dashi and desserts are all house-made. The dinner omakase (¥14,300, August 2026) moves through aged sea bream, Aomori flounder, bonito marinated with katsuobushi, kasugo, and sweet squid sent unfrozen from Kushimoto, with anago brushed with a sauce from its own bones. The rice is large-grained, lightly pressed and punchy with vinegar, salt kept low. A white-miso pudding closes. There's a lunch course too. Book, and note the shop doesn't take guests who can't eat raw food.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2025 (Tabelog)', background: 'A young Edomae team; "no pre-made products", with kanpyo, dashi and desserts made in-house (August 2026 review).', philosophy: 'House-made everything; low salt (August 2026 reviews).', specialty: 'Edomae sushi omakase.',
      anecdotes: [
        { text: '"This restaurant prides itself on using no pre-made products; everything, from the kanpyo (dried gourd) to the dashi (broth) and desserts, is homemade." — August 2026.', source: R + 'B533335829/' },
        { text: '"It\'s been a while since I\'ve tasted sushi with such a strong vinegar flavor in the rice. The grains of rice are large and lightly pressed." — October 2026.', source: R + 'B536926933/' },
      ],
      japanese_sources_summary: '食べログ: 法善寺 鮨 さかた、大阪市中央区道頓堀1-7-11、050-5597-0299、予約可(生ものが食べられない方は不可、30分連絡がなければキャンセル扱い、キャンセル料あり)、毎日12:00〜14:00(L.O.13:30)・17:30〜22:30(L.O.21:30)、カード可、電子マネー・QR不可、10席(カウンターのみ)、2025年10月1日開店。2026年の口コミ(8〜10月): 法善寺横丁、薄緑ののれん、木のぬくもりのカウンター、和紙の照明、若い職人の江戸前のおまかせ、熟成の鯛、青森の平目、鰹節で漬けた鰹、春子、冷凍しない串本のイカ、骨から作るツメの穴子、既製品を使わず干瓢・だし・デザートまで手作り、おまかせ14,300円、満席、ランチのコース、日本人客が多い、塩分控えめ、白味噌のプリン、酢の強い大粒のシャリ、牡蠣、馬糞うにを追加、気さくな大将。',
      confidence: 'medium', sources: [TB, R + 'B533335829/', R + 'B536926933/', R + 'B533334393/', R + 'B533462627/', R + 'B534191406/', R + 'B519083401/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened October 2025; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533462627/', R + 'B534191406/'],
    price_note: 'Dinner omakase price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (dinner)', '¥14,300', 'Courses', 'no', 'no', 'August 2026.', 'omakase'),
      it('', '', 'Lunch course', '', 'Courses', 'no', 'no', 'August 2026.', 'lunch'),
      it('', '', 'Bafun uni (extra)', '', 'Additions', 'ask', 'no', 'October 2026.', 'uni'),
    ] }, {
    cuisine: '若いチームの江戸前鮨のおまかせ・夜のおまかせ14,300円・昼のコース・熟成の鯛、青森の平目、鰹節漬けの鰹、春子、冷凍しない串本のイカ・骨のツメの穴子・酢の効いた大粒のシャリ・馬糞うに・白味噌のプリン・すべて手作り・カウンター10席',
    neighborhood: '道頓堀1-7-11、法善寺横丁。なんばウォークB16出口から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油の煮切りやツメ、手作りの品の小麦は不明。予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。魚の江戸前のおまかせで、生ものが食べられない人は受け付けていません。',
    notes: '[鮨・法善寺横丁の若い江戸前のカウンター] 法善寺横丁の薄緑ののれんの奥、10席の鮨のカウンターで、2025年10月開店、もう観光客だけでなく日本人客でいっぱい。とても若いチームが切り盛り。既製品は使わず、干瓢、だし、デザートまで手作り。夜のおまかせ(14,300円、2026年8月)は、熟成の鯛、青森の平目、鰹節で漬けた鰹、春子、冷凍せずに届く串本の甘いイカ、骨から作るツメを塗った穴子と続きます。シャリは大粒でふんわり握られ、酢がしっかり、塩分は控えめ。締めは白味噌のプリン。昼のコースも。予約を。生ものが食べられない人は受け付けていません。',
  });
}

// ================================================================ 法善寺 山岡
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27075857/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']);
  put({
    id: 'osaka_hozenji_yamaoka', name: '法善寺 山岡 (Hozenji Yamaoka)', category: 'OMNI',
    lat: 34.668101, lng: 135.502348, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: an omakase with soy- and dashi-based seasoning; the chef adjusted dishes for one diner\'s fish allergy (June 2026), so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-meat kappo omakase.',
    hours_raw: 'Mon, Tue, Thu–Sun 17:30–23:00; closed Wednesday (Tabelog). Mostly reservations; omakase only; sake chosen by the chef (2025 review). Cards and PayPay accepted; service charge applies (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-1-14, at the entrance of Hozenji Yokocho — 2 min east of the Namba crossing',
    cuisine: 'Seasonal kappo omakase that changes every month · assorted starter platter · sashimi on large ice · grilled conger eel with plum · Yanagawa-style hot pot · about eight courses with dessert · sake by the chef · homemade fruit sour · onigiri to take home · about 10 counter seats',
    website: null, gmaps: gm('法善寺 山岡'), menu_url: null,
    notes: "[Kappo · a monthly-changing omakase counter at the Hozenji Yokocho entrance] A small kappo counter at the mouth of Hozenji Yokocho, where an owner-chef does nearly all the cooking and the omakase changes every month, so regulars come back each season. A June 2026 meal opened with an assorted platter featuring a rarely seen fish and tiny junsai, then sashimi on a block of ice, sweet swordfish and grilled conger eel with plum. The chef quietly adjusted one dish for a diner's bonito allergy. Earlier courses brought a Yanagawa-style hot pot; there are about eight courses with dessert. There's no drink list as such: the chef picks the sake, and the homemade fruit sour is good. Some guests leave with onigiri. Expect roughly ¥10,000–30,000 a head. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Hozenji Yokocho entrance (Tabelog)', background: 'The owner handles almost all the cooking (July 2025 review); the menu changes monthly (June 2026 review).', philosophy: null, specialty: 'Seasonal kappo omakase.',
      anecdotes: [
        { text: '"The menu changes every month… The sashimi was adjusted slightly for me due to my allergy to bonito. The swordfish was incredibly sweet, and the grilled conger eel was perfectly charred, complemented by delicious plum sauce." — June 2026.', source: R + 'B108722611/' },
        { text: '"I was particularly impressed by the large ice used on the platter for the sashimi." — August 2025.', source: R + 'B512594942/' },
      ],
      japanese_sources_summary: '食べログ: 法善寺 山岡、大阪市中央区難波1-1-14(法善寺横丁の入口)、050-5589-6219、予約可、月・火・木〜日17:30〜23:00、水曜休み、カード・PayPay可、電子マネー不可、サービス料あり、10席。口コミ(2024〜2026年): 毎月変わる献立、季節ごとに通いたい、盛り合わせ(珍しい魚、小さなじゅんさい)、鰹アレルギーに合わせて刺身を調整、甘いカジキ、梅肉の穴子の焼き物、柳川鍋、デザートまで8品ほど、おまかせのみ、飲み物は大将に日本酒を選んでもらう、店主がほぼ一人で調理、繊細な料理、大きな氷の上の刺身、自家製のフルーツサワー、お土産のおにぎり、値段は高め。',
      confidence: 'medium', sources: [TB, R + 'B108722611/', R + 'B512594942/', R + 'B509665879/', R + 'B504317622/', R + 'B538075982/', R + 'B491091635/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase counter; book ahead.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Adjusted a course for a diner\'s bonito allergy (June 2026 review).'] },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番14号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B108722611/'],
    price_note: 'Spend about ¥10,000–30,000 per person in 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Monthly omakase (about eight courses)', '', 'Courses', 'no', 'no', 'June 2026.', 'omakase'),
      it('', '', 'Homemade fruit sour', '', 'Drinks', 'ask', 'ask', 'May 2026.', 'fruit_sour'),
    ] }, {
    cuisine: '毎月変わる季節の割烹のおまかせ・盛り合わせ・大きな氷の上の刺身・梅肉の穴子の焼き物・柳川鍋・デザートまで8品ほど・日本酒は大将にお任せ・自家製フルーツサワー・お土産のおにぎり・カウンター10席ほど',
    neighborhood: '難波1-1-14、法善寺横丁の入口。難波の交差点から東へ徒歩2分',
    gf_detail: '実際にはグルテンフリーではありません。醤油とだしの味付けのおまかせ。鰹アレルギーに合わせて料理を調整した例もある(2026年6月)ので予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。魚と肉の割烹のおまかせ。',
    notes: '[割烹・法善寺横丁の入口の毎月変わるおまかせ] 法善寺横丁の入口にある小さな割烹のカウンターで、店主がほぼ一人で調理し、おまかせは毎月替わるので季節ごとに通う常連も。2026年6月は珍しい魚と小さなじゅんさいの盛り合わせに始まり、氷の塊にのせた刺身、甘いカジキ、梅肉の穴子の焼き物。鰹アレルギーの客には一品をさりげなく変えてくれました。以前は柳川鍋も出て、デザートまで8品ほど。飲み物の一覧はなく、日本酒は大将が選び、自家製のフルーツサワーもおいしい。お土産におにぎりをもらった人も。予算は1人10,000〜30,000円ほど。水曜定休。',
  });
}

save();
