// Osaka sweep (2-mile circle around Dotonbori), REST phase; worker osw1 (lane: Tabelog id mod 4 = 0), batch 21.
//   + tres (candlelit Italian dining bar with private rooms and birthday plans, open to 5 a.m., Shinsaibashi-suji 2013)
//   + 焼 塩美屋 Yaki Shiomiya (sashimi and grills eaten with 40-odd natural salts, Dotonbori west, 20 years)
//   + パフェと酒と、、、金魚 Kingyo (night-parfait bar with a goldfish tank, Hozenji, 2024)
//   + どむす Domus (long-running basement okonomiyaki house on Dotonbori, said to date from 1980)
//   - skip(): SHOGUN BURGER 心斎橋店 (chain), 深夜喫茶 ヒのトリ (no 2025–26 reviews), 旬魚集人あかちょうちん (three reviews),
//     心斎橋sports bar BASE and ビートカフェミックス (no reviews), ぷれじでんと千房 南本店 (chain).
//   Lane: `queue.mjs osaka next rest 600`, mod-4 = 0, in order: 27157996 六美麻辣湯 and 27158476 よいもど (still undecided),
//   27075236 +, 27133604 skip, 27132648 skip, 27121932 skip, 27015872 +, 27140324 skip, 27068064 skip, 27146156 +,
//   27001440 skip, 27014220 +.
//   Chain check for the four kept: each is the only shop of its name in shops.jsonl (金魚: 福島金魚 and 発酵と燻製酒場 金魚 in
//   shops.jsonl share only the word; no link found in the sources). None is in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27133604', 'Chain: SHOGUN BURGER has Tokyo shops (Shinjuku main store, Shibuya, Ikebukuro), Kyoto (祇園四条 26042999, Teramachi), Kanazawa and Vietnam (weekly.ascii.jp; insideretail.asia; haveagood-holiday.com).');
skip('27132648', 'No reviews in 2025–26: the seven Tabelog reviews run from 2017 to August 2024.');
skip('27121932', 'Too thin for a full record: three Tabelog reviews.');
skip('27140324', 'Sports bar with no Tabelog reviews; nothing to source a dining record from.');
skip('27068064', 'No Tabelog reviews; nothing to source a dining record from.');
skip('27001440', 'Chain: 千房 has seven shops in shops.jsonl alone (千日前本店, 道頓堀支店, Kyoto and more).');

// ================================================================ tres
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27075236/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://3s-tres.com/';
  const MO = day(['17:00', '05:00']); const H = day(['12:00', '05:00']);
  put({
    id: 'osaka_tres_shinsaibashi', name: 'tres', category: 'OMNI',
    lat: 34.670287, lng: 135.500672, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include pasta, pizza, risotto, fried fish and cakes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu steak, ham and salami, cheese and seafood pasta.',
    hours_raw: 'Mon 17:00–5:00; Tue–Sun and holidays 12:00–5:00; last orders 4:00 food, 4:30 drinks; open year-round, opening at 17:00 on Mondays and the third Thursday; lunch may close at times (Tabelog). Reservations accepted (Tabelog). Cards and PayPay; no e-money (Tabelog). 100 seats: sofa booths for 12, couple seats, curtained semi-private rooms, one karaoke room and a VIP room for 20; designated smoking area; wheelchair accessible (Tabelog). Birthday plans with plate art, balloons, champagne towers and a "burn away" cake (Tabelog; May–August 2026). Opened 14 September 2013 (Tabelog).',
    hours: { 0: MO, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-6-14, アクロスビル 6F — 3 min from Shinsaibashi Stn exit 4-B, 5 min from Namba Stn exit 14',
    cuisine: 'Creative Italian with seasonal ingredients in candlelit private rooms (Tabelog) · "tres Italian Course" with two hours of drinks ¥5,000: seasonal vegetable appetizers, Caesar salad, wagyu sirloin-cap and top-sirloin steak; all-you-can-eat cheese (20 kinds) and ham and salami plans (Tabelog; December 2025, September 2026) · fried white fish, beef-tendon garlic pilaf, a rich risotto, carbonara, vongole bianco, prosciutto bruschetta, avocado salad, meat sushi (December 2025–June 2026) · birthday and celebration plans: message plates, champagne tower, a "burn away" cake that is set alight at the table (Tabelog; May–August 2026)',
    website: SITE, gmaps: gm('tres 心斎橋 イタリアン'), menu_url: null,
    notes: "[Italian · Shinsaibashi-suji, candlelit rooms for celebrations] A sixth-floor Italian dining bar of sofa booths and curtained rooms lit by candles, open until 5 a.m. and built for birthdays and parties. The ¥5,000 course with two hours of drinks brings appetizers, Caesar salad and a wagyu steak tasting; plans add free-flowing ham and salami or 20 cheeses. The celebration extras are the draw: message plates, a champagne tower, and a 'burn away' cake set alight at the table, though one August 2026 diner found the cream melted. Diners rate the risotto and carbonara; a few found portions small or items sold out, and one July 2026 booking lost its balloons until staff offered a champagne tower. Daytime light is less atmospheric than night.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: creative Italian with seasonal ingredients, candlelit private rooms, parties up to 30, wagyu steak, a "burn away" cake, all-you-can-eat cheese of 20 kinds; open into the early morning; opened 14 September 2013.', philosophy: null, specialty: 'Wagyu steak course; celebration plans.',
      anecdotes: [
        { text: '"We enjoyed a delicious Italian course meal in a private room, along with drinks that included a DVD presentation and fireworks." — May 2026, a birthday surprise.', source: R + 'B528535143/' },
        { text: '"The burning part was fine, but the heat melted the cream, making it impossible to see what was inside" — August 2026, the burn-away cake.', source: R + 'B533636151/' },
        { text: '"We had unlimited ham and salami, but I forgot to take pictures (cry)." — September 2026, the ¥5,000 course.', source: R + 'B535102792/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): tres、イタリアン・ダイニングバー・居酒屋、大阪市中央区心斎橋筋2-6-14 アクロスビル 6F、心斎橋駅4-B出口から徒歩3分、なんば駅14番出口から5分、月17:00〜翌5:00、火〜日・祝12:00〜翌5:00 (料理L.O.4:00、ドリンクL.O.4:30)、年中無休 (月曜と第3木曜は17時から)、予約可、カード・PayPay 可、電子マネー不可、100席 (12名のソファー席、カップル席、カーテンの半個室、カラオケの個室、20名の VIP 個室)、分煙、車いす可、2013年9月14日オープン。店の紹介 (英訳): 季節の素材の創作イタリアン、キャンドルの個室、和牛のステーキ、Burn Away ケーキ、チーズ20種の食べ放題、2時間飲み放題つきの tres イタリアンコース5,000円 (前菜、シーザーサラダ、和牛のイチボとランプのステーキ)。口コミ(2025年12月〜2026年9月): 白身魚のフライ、牛すじのガーリックピラフ、濃厚なリゾット、カルボナーラ、ボンゴレビアンコ、生ハムのブルスケッタ、アボカドのサラダ、肉寿司、生ハムとサラミの食べ放題、誕生日のプレート、シャンパンタワー、DVD と花火の演出、ケーキのクリームが溶けたという声、量が少ない・品切れという声、風船の飾りが漏れていたという声、昼は雰囲気がいまひとつ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B519663559/', R + 'B525493158/', R + 'B528155487/', R + 'B528535143/', R + 'B528757763/', R + 'B529446312/', R + 'B529660380/', R + 'B532270309/', R + 'B533636151/', R + 'B535102792/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course and party plans in private rooms; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋2-6-14 アクロスビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目6番14号 (go) 10m. Same building as 鯛之鯛 難波店 (osaka_tai_no_tai_namba, address_ja "大阪府大阪市中央区心斎橋筋2-6-14 アクロスビル B1F"), pinned 4 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B519663559/'],
    price_note: 'Course price from the Tabelog listing and December 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'tres Italian course with two hours of drinks', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog; December 2025 and September 2026 reviews.', 'tres_course'),
      it('', '', 'Burn-away cake', '', 'Desserts', 'no', 'no', 'Tabelog; August 2026 review.', 'burn_away_cake'),
      it('', '', 'Wagyu steak upgrade (instead of chicken)', '+¥1,100', 'Courses', 'ask', 'no', 'May 2026 review.', 'wagyu_upgrade'),
    ] }, {
    cuisine: 'キャンドルの灯る個室で、季節の素材の創作イタリアン (食べログ)・2時間飲み放題つきの「tres イタリアンコース」5,000円: 季節の野菜の前菜、シーザーサラダ、和牛のイチボとランプのステーキ。チーズ20種や生ハムとサラミの食べ放題のプランも (食べログ、2025年12月、2026年9月)・白身魚のフライ、牛すじのガーリックピラフ、濃厚なリゾット、カルボナーラ、ボンゴレビアンコ、生ハムのブルスケッタ、アボカドのサラダ、肉寿司 (2025年12月〜2026年6月)・誕生日やお祝いのプラン: メッセージのプレート、シャンパンタワー、テーブルで火をつける「burn away」ケーキ (食べログ、2026年5月〜8月)',
    neighborhood: '心斎橋筋2-6-14、アクロスビル6階。心斎橋駅4-B出口から3分、なんば駅14番出口から5分',
    gf_detail: '要確認。グルテンの情報なし。コースにはパスタ、ピザ、リゾット、魚のフライ、ケーキ。',
    vegan_detail: 'ヴィーガンではありません。和牛のステーキ、生ハムとサラミ、チーズ、魚介のパスタ。',
    notes: '[イタリアン・心斎橋筋、キャンドルの個室でお祝い] ビルの6階の、ソファー席とカーテンの部屋をキャンドルが照らすイタリアンのダイニングバーで、朝5時まで営業。誕生日や宴会向き。2時間飲み放題つき5,000円のコースは前菜、シーザーサラダ、和牛のステーキの食べ比べで、生ハムとサラミやチーズ20種の食べ放題のプランも。人気はお祝いの演出で、メッセージのプレート、シャンパンタワー、テーブルで火をつける「burn away」ケーキ (2026年8月にはクリームが溶けたという声)。リゾットとカルボナーラの評価が高く、量が少ない・品切れという声や、2026年7月には予約した風船の飾りが漏れていて、店がシャンパンタワーで埋め合わせたという話も。昼は夜ほど雰囲気がない。',
  });
}

// ================================================================ 焼 塩美屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015872/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']); const SU = day(['17:00', '23:00']);
  put({
    id: 'osaka_yaki_shiomiya_dotonbori', name: '焼 塩美屋 (Yaki Shiomiya)', category: 'OMNI',
    lat: 34.668242, lng: 135.499966, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The point is eating with salt rather than soy sauce, but tempura, kara-age and ochazuke are on the menu and soy sauce is offered too.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; even the cold tofu comes with whitebait.',
    hours_raw: 'Tue–Sat 17:00–24:00 (last orders 22:50 food, 23:15 drinks); Sun and holidays 17:00–23:00 (the same listing also says Sunday from 16:00); closed Monday; bento sales Tue–Thu 12:00–14:00 (Tabelog). Reservations accepted (Tabelog). No service or table charge (Tabelog). Cards and QR payments; no e-money (Tabelog). 25–27 seats: 6 at the counter, a tatami room and private rooms for 6–8 (Tabelog). Opened 11 May 2006; 20th anniversary in 2026 (Tabelog; September 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 2-2-7, 道頓堀ビル 1F — a minute from Namba Stn exit 25',
    cuisine: 'Izakaya where everything is eaten with salt: over 40 natural salts, with staff explaining which salt suits which dish, and seafood flown in daily from Matsuyama in Ehime (Tabelog; 2026 reviews) · sashimi with salt (squid, bonito, a three-kind selection), charcoal-seared salted buri tataki, meat with Andes rock salt, vegetables with olive salt (Tabelog; March–September 2026) · corn and avocado tempura, dashimaki, kara-age, potato salad, cold tofu with shirasu, octopus on rock salt, ochazuke (2026 reviews) · about ten regional sakes, all 180 ml pours ¥1,000 (January 2026); bottles at fair prices; all-you-can-drink with courses and à la carte (Tabelog; August 2026)',
    website: null, gmaps: gm('焼 塩美屋 道頓堀'), menu_url: null,
    notes: "[Izakaya · Dotonbori west, sashimi with salt] A small, 20-year-old izakaya a minute from Namba exit 25, whose whole idea is salt: more than 40 natural salts, and staff who tell you which of the four or so on your table goes with the sashimi, the meat or the vegetables. Fish comes daily from Matsuyama; try the squid and bonito sashimi with salt and the charcoal-seared salted buri, then corn or avocado tempura. Sake is good value (every 180 ml pour ¥1,000 in January 2026). Diners like the explanations; one August 2026 diner found the rock-salt octopus too salty, and a loud group spoiled another's evening. Bento at weekday lunch. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: over 40 natural salts with seasonal seafood, fresh fish flown in daily from Matsuyama, Ehime; sashimi with salt, meat with Andes rock salt, vegetables with olive salt; ten local sakes; opened 11 May 2006. A September 2026 review: the 20th anniversary year.', philosophy: '"Enhancing the umami of ingredients, enjoying with salt" (Tabelog).', specialty: 'Sashimi with salt; salted buri tataki.',
      anecdotes: [
        { text: '"Although the prices for glasses varied, all the 180ml servings were just JPY 1000. How is that possible??" — January 2026.', source: R + 'B520632011/' },
        { text: '"True to its name, this restaurant places great importance on salt." — September 2026.', source: R + 'B535297415/' },
        { text: '"I visited Yaki Shiomiya after more than 10 years!" — September 2026; the reviewer notes 2026 is the 20th anniversary.', source: R + 'B535328217/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼 塩美屋、居酒屋・日本酒バー・海鮮、大阪市中央区道頓堀2-2-7 道頓堀ビル 1F、なんば駅25番出口からすぐ、火〜土17:00〜24:00 (料理L.O.22:50)、日祝17:00〜23:00 (日曜は16時からという記載も)、月曜休み、火水木12:00〜14:00 は弁当の販売、予約可、サービス料・チャージなし、カード・QR 可、電子マネー不可、25〜27席 (カウンター6、座敷、6〜8名の個室)、2006年5月11日オープン。店の紹介 (英訳): 40種以上の天然の塩と季節の魚介、Ehime の Matsuyama から毎日空輸の鮮魚、塩で食べる刺身、Andes の岩塩の肉、オリーブの塩の野菜、炭火の塩ぶりのたたき、地酒10種。口コミ(2026年1月〜9月): 料理ごとに合う塩を説明、いかやかつおの刺身、刺身3種、とうもろこしとアボカドの天ぷら、だし巻き、唐揚げ、ポテトサラダ、しらすの冷奴、岩塩のたこ (しょっぱすぎたという声)、お茶漬け、日本酒は180mlがどれも1,000円、瓶も手ごろ、単品飲み放題、20周年、大声のグループで早く帰ったという声。',
      confidence: 'medium', sources: [TB, R + 'B503021770/', R + 'B520632011/', R + 'B523772233/', R + 'B524775785/', R + 'B527732175/', R + 'B527919168/', R + 'B533414459/', R + 'B534500833/', R + 'B535297415/', R + 'B535328217/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the salts at the table; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-2-7 道頓堀ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目2番7号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520632011/', TB],
    price_note: 'One dated price from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Regional sake, 180 ml', '¥1,000', 'Drinks', 'ask', 'ask', 'January 2026 review.', 'jizake_180'),
      it('', '', 'Charcoal-seared salted buri tataki', '', 'Grill', 'ask', 'no', 'Tabelog; September 2026.', 'shio_buri_tataki'),
      it('', '', 'Sashimi with salt (three kinds)', '', 'Sashimi', 'ask', 'no', 'March 2026 review.', 'shio_sashimi'),
    ] }, {
    cuisine: 'なんでも塩で食べる居酒屋: 40種以上の天然の塩をスタッフが料理ごとに説明し、魚介はEhime の Matsuyama から毎日空輸 (食べログ、2026年の口コミ)・塩で食べる刺身 (いか、かつお、3種盛り)、炭火で焼く塩ぶりのたたき、Andes の岩塩の肉、オリーブの塩の野菜 (食べログ、2026年3月〜9月)・とうもろこしとアボカドの天ぷら、だし巻き、唐揚げ、ポテトサラダ、しらすの冷奴、岩塩のたこ、お茶漬け (2026年の口コミ)・地酒は10種ほどで、180mlはどれも1,000円 (2026年1月)。瓶も手ごろ。コースと単品の飲み放題 (食べログ、2026年8月)',
    neighborhood: '道頓堀2-2-7、道頓堀ビル1階。なんば駅25番出口から1分',
    gf_detail: '要確認。グルテンの情報なし。醤油ではなく塩で食べるのが売りだが、天ぷら、唐揚げ、お茶漬けがあり、醤油も出る。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋で、冷奴にもしらすがのる。',
    notes: '[居酒屋・道頓堀の西、塩で食べる刺身] なんば駅25番出口から1分の、創業20年の小さな居酒屋で、テーマは塩。40種以上の天然の塩があり、テーブルの4種ほどのどれが刺身、肉、野菜に合うかスタッフが教えてくれる。魚はMatsuyama から毎日届き、いかやかつおの刺身を塩で、炭火の塩ぶりのたたき、とうもろこしやアボカドの天ぷらを。日本酒はお得で、2026年1月は180mlがどれも1,000円。説明が楽しいという声が多く、2026年8月には岩塩のたこがしょっぱすぎたという人や、大声のグループで台無しになったという人も。平日の昼は弁当。月曜休み。',
  });
}

// ================================================================ パフェと酒と、、、金魚
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146156/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '02:00']);
  put({
    id: 'osaka_parfait_sake_kingyo_hozenji', name: 'パフェと酒と、、、金魚 (Parfait to Sake to,,, Kingyo)', category: 'OMNI',
    lat: 34.667943, lng: 135.502924, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Parfaits usually include cookie, sponge or crumble layers; there is also an apple tarte tatin.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Parfaits are built on cream and ice cream.',
    hours_raw: 'Daily 14:00–2:00 (Tabelog). Reservations accepted (Tabelog; August 2026); walk-ins welcome, nearly full by 20:00–21:00 on a Friday (October 2026). Cards including UnionPay; no e-money or QR (Tabelog). 30 seats at a bar counter and tables; non-smoking (Tabelog). Down the stairs from a ground-floor entrance hung with goldfish lanterns (August–September 2026). Opened 18 December 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-2-2, 法善寺サンヨービル B1F, by Hozenji — 5 min from Namba Stn',
    cuisine: 'Night-parfait bar with a big goldfish tank at the counter: about six parfaits and a long cocktail list (2026 reviews) · cassis Mont Blanc parfait ¥2,400 before tax, with whisky and cassis (July–October 2026); melon and muscat bouquet parfait ¥2,400 (August 2026); cassis tea Mont Blanc, apple tarte tatin (August 2026) · cocktails, highballs and gin soda; hot lemon tea and coffee (August 2026)',
    website: null, gmaps: gm('パフェと酒と金魚 法善寺'), menu_url: null,
    notes: "[Parfait bar · Hozenji, night parfaits by a goldfish tank] A basement bar by Hozenji, down a stair hung with goldfish lanterns, where a big glowing fishbowl sits on the counter and the menu is parfaits and drinks until 2 a.m. The cassis Mont Blanc (¥2,400 before tax in 2026), touched with whisky and cassis, is the one everybody orders; the melon and muscat bouquet is the seasonal alternative. Cocktails are strong and good. It is a friendly spot for a sweet nightcap after dinner or a girls' night, with few guests at 6:30 p.m. but nearly full by 9 p.m. on an October 2026 Friday. Prices are on the high side, but you pay for presentation.",
    chef_bio: { chef_name: null, roles: ['Bar and pastry staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: sweets and bar in the Hozenji Sanyo Building basement, open 14:00–2:00, opened 18 December 2024. Reviews (2026) describe a night-parfait bar with about six parfaits, a large goldfish tank on the counter and goldfish lanterns on the stairs.', philosophy: null, specialty: 'Cassis Mont Blanc parfait.',
      anecdotes: [
        { text: '"As the name suggests, there’s a large fishbowl next to the counter, and the menu features a wide variety of parfaits and many types of alcohol." — August 2026.', source: R + 'B534551327/' },
        { text: '"the combination of whiskey and cassis in the parfait was delightful." — September 2026.', source: R + 'B535368851/' },
        { text: '"Prices for food and drinks are slightly on the higher side. The impression is that it’s a place to enjoy the atmosphere and presentation as well." — September 2026.', source: R + 'B535508043/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): パフェと酒と、、、金魚、スイーツ・バー、大阪市中央区難波1-2-2 法善寺サンヨービル B1F、なんば駅から徒歩5分、毎日14:00〜翌2:00、予約可、カード (銀聯も) 可、電子マネー・QR 不可、30席、禁煙、2024年12月18日オープン。口コミ(2026年7月〜10月): 夜パフェの店、入口は1階で地下へ、金魚のちょうちんの階段、カウンターの大きな金魚鉢、パフェは6種ほど、カシスのモンブラン2,400円 (税抜) はウイスキーとカシス入り、メロンとマスカットのブーケのパフェ2,400円、カシスティーのモンブラン、タルトタタン、カクテル、ハイボール、ジンソーダ、ホットレモンティー、金曜の夜は8〜9時にほぼ満席、値段は高め。',
      confidence: 'medium', sources: [TB, R + 'B531641501/', R + 'B534436479/', R + 'B534551327/', R + 'B534614938/', R + 'B534705803/', R + 'B535152265/', R + 'B535368851/', R + 'B535508043/', R + 'B538084360/', R + 'B538178436/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar counter and tables; some inbound guests (October 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区難波1-2-2 法善寺サンヨービル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目2番2号 (go) 17m. Same lot number as osaka_mugen_ramen_sennichimae (address_ja "大阪府大阪市中央区難波1-2-2"), pinned 23 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534614938/', R + 'B531641501/'],
    price_note: 'Prices from August–September 2026 reviews (before tax).', last_checked: TODAY, items: [
      it('', '', 'Cassis Mont Blanc parfait', '¥2,400', 'Parfaits', 'ask', 'ask', 'August–September 2026 reviews (before tax).', 'cassis_montblanc'),
      it('', '', 'Melon and muscat bouquet parfait', '¥2,400', 'Parfaits', 'ask', 'ask', 'August 2026 review.', 'melon_muscat_parfait'),
      it('', '', 'Apple tarte tatin', '', 'Sweets', 'no', 'ask', 'August 2026 review.', 'tarte_tatin'),
    ] }, {
    cuisine: 'カウンターに大きな金魚鉢のある夜パフェのバーで、パフェは6種ほどとたくさんのカクテル (2026年の口コミ)・ウイスキーとカシスの入ったカシスのモンブランのパフェ2,400円 (税抜、2026年7月〜10月)。メロンとマスカットのブーケのパフェ2,400円 (2026年8月)。カシスティーのモンブラン、りんごのタルトタタン (2026年8月)・カクテル、ハイボール、ジンソーダ、ホットレモンティー、コーヒー (2026年8月)',
    neighborhood: '難波1-2-2、法善寺サンヨービル地下1階、法善寺のそば。なんば駅から5分',
    gf_detail: '要確認。グルテンの情報なし。パフェにはクッキーやスポンジ、クランブルが入ることが多く、タルトタタンもある。',
    vegan_detail: '要確認。ヴィーガンの情報なし。パフェはクリームとアイスが中心。',
    notes: '[パフェとバー・法善寺、金魚鉢のそばの夜パフェ] 法善寺のそばの、金魚のちょうちんの階段を下りた地下のバーで、カウンターには光る大きな金魚鉢。メニューは深夜2時までのパフェとお酒。誰もが頼むのはウイスキーとカシスの入ったカシスのモンブラン (2026年は税抜2,400円) で、季節の替わりはメロンとマスカットのブーケ。カクテルは濃いめでおいしい。夕食のあとの甘い一杯や女子会に気軽な店で、2026年10月の金曜は夕方6時半は空いていて、夜9時ごろにはほぼ満席。値段は高めで、見た目の分もという声。',
  });
}

// ================================================================ どむす
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27014220/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'osaka_domus_dotonbori', name: 'どむす (Domus)', category: 'OMNI',
    lat: 34.668798, lng: 135.503454, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, negiyaki and yakisoba are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with egg, pork and seafood.',
    hours_raw: 'Mon, Wed–Sun 11:30–22:00 (last order 21:00); closed Tuesday unless a holiday (Tabelog). Reservations accepted, but not at weekends, on holidays, at Golden Week, Obon or New Year (Tabelog). No cards (Tabelog). 30 seats, a counter at the big teppan and tables (Tabelog; October 2026). Smoking allowed (Tabelog). At least one dish per person; waits of 20 minutes to an hour at busy times (October 2022, October 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-5-9, 久幸ビル B1, under a big 3D okonomiyaki sign — 5 min from Namba Stn exits 14 and 25',
    cuisine: 'Long-established okonomiyaki house, cooked by staff on the big teppan with mayonnaise self-served (2023–2026 reviews) · plain, mixed and seafood okonomiyaki, fluffy inside and crisp outside; pork, mochi and cheese okonomiyaki; negiyaki; roll yakisoba ¥1,230 (December 2023); yakisoba (2022–2026 reviews) · a sweet sauce (May 2025)',
    website: null, gmaps: gm('お好み焼き どむす 道頓堀'), menu_url: null,
    notes: "[Okonomiyaki · Dotonbori, a Showa basement under the 3D sign] An old okonomiyaki house down the stairs beneath a big 3D okonomiyaki sign on Dotonbori, said in a 2023 review to date from 1980, its walls hung with old photos of entertainers. Staff cook everything on the long teppan in front of you (the chopstick wrapper asks you to be patient), and the okonomiyaki comes out crisp outside and fluffy within; the plain one shows off the batter, and negiyaki and roll yakisoba are the other classics. Solo diners are comfortable at the counter. Busy times mean a 20-minute to hour-long wait, no weekend bookings and cash only. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Teppan cooks and floor staff (unnamed)'], origin: null, background: 'Tabelog: okonomiyaki on Dotonbori, B1 of the 久幸ビル, cash only, closed Tuesdays. Reviews: a long-established restaurant founded in 1980 (December 2023), a Showa-retro room with old photos of famous entertainers (February 2025), a large 3D okonomiyaki sign above the stairs (August 2024).', philosophy: '"It takes time, but please wait a moment" (on the chopstick wrapper, August 2024 review).', specialty: 'Okonomiyaki; negiyaki; roll yakisoba.',
      anecdotes: [
        { text: '"As the chopstick wrapper says, \'It takes time, but please wait a moment,\' the staff carefully grilled each dish on the large teppan at the counter." — August 2024.', source: R + 'B528641084/' },
        { text: '"It seems to be a long-established restaurant, having been founded 54 years ago in 1980." — December 2023.', source: R + 'B477047769/' },
        { text: '"The cooking was perfect, resulting in a fluffy and tender texture that made it incredibly delicious." — September 2026, a solo diner at the counter.', source: R + 'B535383470/' },
      ],
      japanese_sources_summary: '食べログ: どむす、お好み焼き、大阪市中央区道頓堀1-5-9 久幸ビル B1、なんば駅14・25番出口から徒歩5分、月水〜日11:30〜22:00 (L.O.21:00)、火曜休み (祝日は営業)、予約可 (土日祝、GW、お盆、年末年始は予約不可)、カード不可、30席、喫煙可。口コミ(2018年11月〜2026年10月): 1980年創業の老舗という記載 (2023年12月)、昭和レトロな店内に芸能人の古い写真、階段の上の大きな立体のお好み焼きの看板、店の人が大きな鉄板で焼き、マヨネーズはセルフ、プレーンのお好み焼き、ミックス、海鮮、豚もちチーズ焼き、ねぎ焼き、ロール焼きそば1,230円 (2023年12月)、焼きそば、ソースは甘め、1人1品の注文が必要、混む時間は20分〜1時間待ち、ひとりでもカウンターで食べやすい。',
      confidence: 'medium', sources: [TB, R + 'B455062814/', R + 'B459467667/', R + 'B477047769/', R + 'B501426874/', R + 'B507006969/', R + 'B528641084/', R + 'B535383470/', R + 'B537831276/', R + 'B538248298/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook at the counter; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区道頓堀1-5-9 久幸ビル B1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026. The listing still carries an old pandemic-era closure notice, but 2025–2026 reviews confirm it is open.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目5番9号 (go) 6m. Same lot number as osaka_bonkuraya_dotonbori (address_ja "大阪府大阪市中央区道頓堀1-5-9 2F"), pinned 9 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B477047769/'],
    price_note: 'One dated price from a December 2023 review.', last_checked: TODAY, items: [
      it('', '', 'Roll yakisoba', '¥1,230', 'Yakisoba', 'no', 'no', 'December 2023 review.', 'roll_yakisoba'),
      it('', '', 'Plain okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'October 2026 review.', 'plain_okonomiyaki'),
      it('', '', 'Negiyaki', '', 'Okonomiyaki', 'no', 'no', 'August 2024 and December 2023 reviews.', 'negiyaki'),
    ] }, {
    cuisine: '店の人が大きな鉄板で焼き、マヨネーズはセルフの老舗のお好み焼きの店 (2023〜2026年の口コミ)・外はカリッと中はふんわりのプレーン、ミックス、海鮮のお好み焼き。豚もちチーズ焼き、ねぎ焼き、ロール焼きそば1,230円 (2023年12月)、焼きそば (2022〜2026年の口コミ)・ソースは甘め (2025年5月)',
    neighborhood: '道頓堀1-5-9、久幸ビル地下1階、大きな立体のお好み焼きの看板の下。なんば駅14・25番出口から5分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、ねぎ焼き、焼きそばは小麦。',
    vegan_detail: 'ヴィーガンではありません。卵、豚、魚介のお好み焼き。',
    notes: '[お好み焼き・道頓堀、立体看板の下の昭和の地下] 道頓堀の大きな立体のお好み焼きの看板の下、階段を下りた老舗のお好み焼きの店で、2023年の口コミによると1980年創業。壁には芸能人の古い写真。店の人が目の前の長い鉄板ですべて焼き (箸袋には時間がかかることを断る言葉があるそう)、外はカリッと中はふんわり。生地を味わうならプレーンで、ねぎ焼きとロール焼きそばも定番。ひとりでもカウンターで気楽。混む時間は20分〜1時間待ち、週末は予約不可、現金のみ。火曜休み。',
  });
}

save();
