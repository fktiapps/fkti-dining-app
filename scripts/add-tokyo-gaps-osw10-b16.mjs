// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 16.
// All four are in one building, 六番町4-11 (朝日六番町マンション) on Nittere-dōri up from Ichigaya Station.
//   + 豚基地 Buta Base (13-seat Jiro-style ramen opened June 2026; owner reportedly an ex-Yakult Swallows player, Otsuka)
//   + 丸十 Maruju (20-seat old-school yakiniku in the basement, run by a couple; regulars and introductions only)
//   + 灯火 Toka (15-seat Hinai-jidori yakitori with Japanese dishes, run by a couple; basement)
//   + とんかつ 河むら Tonkatsu Kawamura (19-seat tonkatsu of Hayashi SPF pork; 2 shops, Ichigaya and Azabudai Hills — a small group)
//   - 金市朗 市ヶ谷店 (13175166) skipped: Kinichiro is a chain — a Tabelog name search lists 7 Kinichiro shops (Sendai and Tokyo).
//   None is in data/tokyo.json (grep by name, Tabelog id and address).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
// One building: the four pins sit about 5 m apart around the Tabelog points (35.68892–35.68895, 139.73536–139.73541).
// GSI resolves 千代田区六番町4-11 to the lot (35.688583, 139.734894), about 57 m from the Tabelog points.
const BLDG = 'GSI 東京都千代田区六番町4番地 (lot) about 57 m from the Tabelog points';

skip('13175166', '金市朗 市ヶ谷店 — Kinichiro, a chain: a Tabelog name search lists 7 Kinichiro shops (Minamimachi-dori, Sendai Ekimae, Kokubuncho, Chuo 2-chome, Ichigaya and others); not researched.');

// ================================================================ 豚基地
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13322955/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['17:00', '22:00']); const SAT = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'tokyo_buta_base_ichigaya', name: '豚基地 (Buta Base)', category: 'MOM_AND_POP',
    lat: 35.688907, lng: 139.735413, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles in a pork-bone broth with tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, pork, pork fat.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:00–22:00 (last order 21:45); Sat 11:00–15:00 and 17:00–21:00 (last order 20:45); closed Sunday (Tabelog). No reservations (Tabelog); 5–6 people waiting at opening and around 12:30 (October 2026). Ticket machine; cards, e-money and QR accepted (Tabelog). 13 counter seats; non-smoking (Tabelog). Opened 11 June 2026 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SAT }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokubanchō 4-11, on Nittere-dōri up from Ichigaya Station, in the same building as Maruju, Toka and Tonkatsu Kawamura — a short walk from Ichigaya Stn',
    cuisine: 'Jiro-style ramen (2026 reviews) · ramen ¥1,100 with thick, chewy noodles in a rich pork-bone broth, 150 g on request or up to 300 g at no extra charge; toppings chosen at order: vegetables, garlic, fat; pork ramen with three slices of pork; quail egg (October 2026) · mazesoba with garlic mayonnaise (October 2026)',
    website: null, gmaps: gm('豚基地 市ヶ谷'), menu_url: null,
    notes: "[Ramen · Ichigaya, a friendly Jiro-style shop from an ex-ballplayer] A 13-seat counter that opened in June 2026, serving Jiro-style bowls — thick, chewy noodles under a pile of vegetables in a rich, creamy pork-bone broth — with service reviewers call surprisingly warm for the genre. Noodles go up to 300 g at the same ¥1,100, and you pick vegetables, garlic and fat; several diners found the base broth milder than classic Jiro and suggest extra fat or seasoning, and one found the chashu dry. The garlic-mayo mazesoba has fans. Reviewers say the owner is a former Yakult Swallows player; a line of five or six forms at noon. Closed Sundays.",
    chef_bio: { chef_name: 'Otsuka', roles: ['Owner (October 2026 review)'], origin: null,
      background: 'Reviewers: "It seems to be run by a former professional baseball player" (October 2026); "The owner, Mr. Otsuka, is a former player for the Yakult Swallows, and [the owner] was at the restaurant that day. Additionally, I heard that the signboard was written by Murakami from the White Sox" (October 2026, hearsay). Two reviewers mention rumours of a link to the Kashiwa Jiro-style shop "Ore no Ikiru Michi" (October 2026); no source confirms it. Only the name Otsuka is given; the kanji is not.',
      philosophy: null, specialty: 'Jiro-style ramen; garlic-mayo mazesoba.',
      anecdotes: [
        { text: '"The service here was surprisingly friendly, with smiles that you wouldn\'t expect from a Jiro-style restaurant, along with thoughtful table settings and a warm send-off." — October 2026.', source: R + 'B537459145/' },
        { text: '"The noodles can be increased to 200-300g without any extra charge, but I specially requested a smaller portion of 150g." — October 2026, ramen ¥1,100.', source: R + 'B537810119/' },
        { text: '"The chashu was disappointing. It was overcooked, lacking flavor, and dry. It\'s a shame because I really liked the broth." — October 2026.', source: R + 'B537542502/' },
      ],
      japanese_sources_summary: '食べログ: 豚基地、ラーメン、六番町4-11、市ケ谷駅から231m、月〜金11:00〜15:00・17:00〜22:00 (L.O.21:45)、土11:00〜15:00・17:00〜21:00 (L.O.20:45)、日曜休み、予約不可、カード・電子マネー・QR可、カウンター13席、禁煙、2026年6月11日オープン。口コミ(2026年9月〜10月): 二郎系、極太の麺、豚骨の濃厚なスープ、ラーメン1,100円、麺は150g〜300g (増量無料)、野菜・ニンニク・脂を選ぶ、うずらの卵、ニンニクマヨの mazesoba、店主は元 Yakult Swallows の選手という声、昼に5〜6人の行列。',
      confidence: 'medium', sources: [TB, R + 'B534896603/', R + 'B537459145/', R + 'B537542502/', R + 'B537810119/', R + 'B537817530/', R + 'B537921623/', R + 'B538165893/', R + 'B538309135/', R + 'B538414424/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: null, notes: 'Thick, chewy noodles (September–October 2026); 150–300 g at the same price (October 2026).' },
      regional_style: ['Jiro-kei (Tokyo)'], sub_genre: ['jiro_kei'],
      signature_bowl: 'Ramen ¥1,100 with a choice of vegetables, garlic and fat (October 2026).',
      chashu: 'Thick slices of pork, tender for some diners (September 2026) and overcooked and dry for another (October 2026).',
      notable_toppings: ['bean sprouts and cabbage pile (vegetables)', 'garlic', 'fat', 'quail egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth and pork.' },
      pantheon: 'A Jiro-style bowl near Ichigaya Station with a creamy pork-bone base that reviewers find milder and easier to drink than classic Jiro, adjustable with fat, garlic and seasoning.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537810119/', '"The broth was incredibly rich and creamy, with a strong flavor from the pork bone stock" (October 2026); "a rich broth that is packed with the essence of pork" (' + R + 'B534896603/, September 2026).'],
        oiliness: [R + 'B537810119/', '"The greasiness was moderate, resulting in a mild taste" (October 2026) — mid-scale; extra fat is an option.'],
        clarity: [R + 'B537810119/', '"Incredibly rich and creamy" (October 2026) — an opaque, emulsified pork-bone broth, placed low.'],
        tare_strength: [R + 'B537810119/', '"The balance with the tare (seasoning) was excellent… If you\'re looking for the bold punch typical of Jiro-style ramen, you might want to try adding more fat or seasoning" (October 2026) — mid-scale.'],
        noodle_firmness: [R + 'B534896603/', '"The thick noodles have an incredible chewy texture" (September 2026); "The chewy noodles paired perfectly with the rich soup" (' + R + 'B538414424/, October 2026).'],
        aroma_punch: [R + 'B537459145/', '"I opted for no garlic, and while the broth was quite easy to drink, it felt like it lacked a bit of punch" (October 2026) — mid-scale, raised by the optional garlic.'],
      },
      confidence: 'medium', sources: [TB, R + 'B534896603/', R + 'B537459145/', R + 'B537810119/', R + 'B538414424/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; one diner was glad not to have to call out the toppings (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都千代田区六番町4-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened June 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688921, 139.735371); ${BLDG}. Same building as Maruju, Toka and Tonkatsu Kawamura, so the four are block pins about 5 m apart: this one 5 m south of Kawamura's Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537810119/', R + 'B537921623/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ramen (noodles 150–300 g; vegetables, garlic, fat to choose)', '¥1,100', 'Ramen', 'no', 'no', 'October 2026 review.', 'ramen'),
      it('', '', 'Pork ramen (three slices of pork)', '', 'Ramen', 'no', 'no', 'October 2026 review; price not given.', 'buta_ramen'),
      it('', '', 'Mazesoba with garlic mayonnaise', '', 'Ramen', 'no', 'no', 'October 2026 review; price not given.', 'mazesoba'),
    ] }, {
    cuisine: '二郎系ラーメン (2026年の口コミ)・ラーメン1,100円は極太でもちもちの麺に濃厚な豚骨スープ。麺は150gにも、300gまで同じ値段でも。野菜、ニンニク、脂を選ぶ。豚3枚の豚ラーメン、うずらの卵 (2026年10月)・ニンニクマヨの mazesoba (2026年10月)',
    neighborhood: '六番町4-11、市ケ谷駅から日テレ通りを上ったところで、丸十、灯火、とんかつ河むらと同じ建物。市ケ谷駅からすぐ',
    gf_detail: 'グルテンフリーではない。小麦の極太麺、豚骨スープとたれ。',
    vegan_detail: 'ヴィーガンではない。豚骨スープ、豚肉、脂。',
    notes: '[ラーメン・市ヶ谷、元プロ野球選手の店という感じのよい二郎系] 2026年6月開店のカウンター13席。二郎系の一杯で、山盛りの野菜の下に極太でもちもちの麺、濃厚でクリーミーな豚骨スープ。二郎系にしては意外なほど笑顔の接客だという声も。麺は300gまで同じ1,100円、野菜、ニンニク、脂を選べる。スープは本家の二郎より穏やかで飲みやすく、脂や味を足すとよいという人が何人かいて、チャーシューがパサついていたという人も。ニンニクマヨの mazesoba にもファンがいる。店主は元 Yakult Swallows の選手だと口コミにある。昼には5〜6人が並ぶ。日曜休み。',
  });
}

// ================================================================ 丸十
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13066487/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_maruju_yakiniku_ichigaya', name: '丸十 (Maruju)', category: 'OMNI',
    lat: 35.688952, lng: 139.735358, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the house specialty is tare-marinated kalbi and loin, and the meal ends with cold noodles and soups.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku with beef soups.',
    hours_raw: 'Tabelog gives no hours. Reviewers: reservations needed by 18:00 and the shop closes at 21:00 (October 2026). Booking route: regulars and introductions only — no walk-ins, no new reservations; a first visit is with a regular, who explains the house rules (2026 reviews). Ice cream for dessert on Saturdays (August 2026). Gomtang soup not served in summer (June 2022). Cash only: no cards, e-money or QR (Tabelog). 20 seats, all tables; smoking allowed (Tabelog; October 2026). About ¥6,000–10,000 a head with drinks (2026 reviews).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Rokubanchō 4-11, 朝日六番町マンション B1F, on Nittere-dōri at the top of the hill from Ichigaya Station (Tabelog directions) — same building as Buta Base, Toka and Tonkatsu Kawamura',
    cuisine: 'Long-established yakiniku with Showa-era tare kalbi (2022–26 reviews) · a typical run: kimchi, liver, salted tongue, salted loin, outside skirt, flap meat, tare kalbi and loin, premium lean loin, tripe, chicken, then bibimbap, yukgaejang or egg soup, gomtang (not in summer), cold noodles; ice cream on Saturdays (2022–26 reviews) · heifer beef with light, sweet fat, cut and seasoned in house (2026 reviews) · beer, shochu, wine; rice from the start if you don\'t drink (Tabelog; 2022 review)',
    website: null, gmaps: gm('丸十 焼肉 六番町'), menu_url: null,
    notes: "[Yakiniku · Ichigaya, a regulars-only Showa yakiniku] A basement yakiniku that has kept the same crowd for decades — one regular counts 56 visits — and takes no new customers: you go with a regular, who briefs you on the house rules for ordering and even where to rest your chopsticks. What earns the loyalty is meat cut and seasoned in house: liver, salted tongue and loin, flap meat and Showa-style tare kalbi from heifers with light, sweet fat, then cold noodles or a beef soup. It is run by a couple, with the proprietress handling the whole dining room alone, briskly; reviewers call the proprietress \"quite a character\" and the value remarkable, under ¥10,000 with plenty to drink. Smoking allowed; cash only; book by 18:00.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (April 2026 review)'], origin: 'A long-established restaurant (May 2026 review).',
      background: 'No source names the owners. "It seems that the restaurant is run by a couple… there are certain manners to observe when entering and placing your order" (April 2026). "It was truly impressive to see just one person managing the entire dining area" (August 2026, a regular of 56 visits). An October 2026 first-timer describes a strong-willed proprietress managing the floor alone, "quite a character". "While it\'s not as strict as it used to be, there are still certain etiquette rules, like how to place your chopsticks" (October 2026). Many guests from the television industry on a Friday (October 2026).',
      philosophy: null, specialty: 'Tare kalbi; liver; salted tongue and loin; flap meat.',
      anecdotes: [
        { text: '"This charming restaurant, filled with the appeal of a bygone era, offers delicious tare kalbi that harks back to the Showa period, setting it apart from modern yakiniku places." — June 2022, a monthly visitor.', source: R + 'B451057635/' },
        { text: '"Since they don\'t accept new reservations, I highly recommend visiting this yakiniku restaurant if you get the opportunity!" — May 2026.', source: R + 'B528722505/' },
        { text: '"I drank a lot of alcohol and spent less than JPY 10,000… I can\'t believe such a place exists in Tokyo these days." — October 2026.', source: R + 'B536792485/' },
      ],
      japanese_sources_summary: '食べログ: 丸十、焼肉、六番町4-11 朝日六番町マンション B1F、JR市ケ谷駅から日テレ通りをまっすぐ、坂の上の信号を渡ったビルの地下、営業時間の記載なし、カード・電子マネー・QR不可、20席、喫煙可、焼酎・ワイン。口コミ(2022年〜2026年): 昭和の味のタレカルビ、レバー、塩タン、塩ロース、ハラミ、カルビ、冷麺、未経産牛の肉、常連とその紹介のみで新規の予約は受けない、注文や箸の置き方などの決まり、夫婦で営む店で女将がひとりで客席を回す、予約は18時まで、21時閉店、1人1万円以下。',
      confidence: 'medium', sources: [TB, R + 'B451057635/', R + 'B515401285/', R + 'B525324580/', R + 'B528469576/', R + 'B528722505/', R + 'B533833705/', R + 'B536792485/', R + 'B537029370/', R + 'B537985674/', R + 'B86662490/'] },
    cultural_comfort: { level: 'guide_only', note: 'Introductions only; go with a regular, who explains the ordering etiquette.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '東京都千代田区六番町4-11 朝日六番町マンション B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688932, 139.735364); ${BLDG}. Same building as Buta Base, Toka and Tonkatsu Kawamura, so the four are block pins about 5 m apart: this one 5 m west of Kawamura's Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B86662490/', R + 'B536792485/', R + 'B451057635/'],
    price_note: 'No prices published; reviewers spend about ¥6,000–10,000 a head with drinks.', last_checked: TODAY, items: [
      it('', '', 'Liver', '', 'Meat', 'ask', 'no', '2026 reviews.', 'liver'),
      it('', '', 'Salted tongue', '', 'Meat', 'ask', 'no', '2026 reviews.', 'shio_tan'),
      it('', '', 'Tare kalbi', '', 'Meat', 'no', 'no', '2022 and 2026 reviews.', 'tare_kalbi'),
      it('', '', 'Flap meat', '', 'Meat', 'ask', 'no', 'January and August 2026 reviews.', 'harami'),
      it('', '', 'Cold noodles', '', 'Finish', 'no', 'no', '2026 reviews.', 'reimen'),
    ] }, {
    cuisine: '昭和のタレカルビの老舗焼肉 (2022〜26年の口コミ)・よくある流れ: キムチ、レバー、塩タン、塩ロース、ハラミ、タレのカルビとロース、上赤身ロース、鶏、そしてビビンバやスープ (コムタンは夏はなし)、冷麺。土曜はアイスクリーム (2022〜26年の口コミ)・軽く甘い脂の未経産牛を店で切って味付けする (2026年の口コミ)・ビール、焼酎、ワイン。飲まない人は最初からご飯も (食べログ、2022年の口コミ)',
    neighborhood: '六番町4-11 朝日六番町マンション地下1階、市ケ谷駅から日テレ通りの坂を上りきったところ (食べログの道案内)。豚基地、灯火、とんかつ河むらと同じ建物',
    gf_detail: 'グルテンフリーではない。名物はタレに漬けたカルビとロースで、締めは冷麺やスープ。',
    vegan_detail: 'ヴィーガンではない。牛肉の焼肉と牛肉のスープ。',
    notes: '[焼肉・市ヶ谷、常連だけの昭和の焼肉] 何十年も同じ客が通う地下の焼肉店で、56回通ったという常連も。新しい客は受けず、常連と一緒に行き、注文の仕方から箸の置き方までの決まりを教わる。通い続ける理由は店で切って味付けする肉。レバー、塩タン、塩ロース、ハラミ、昭和のタレカルビ、軽く甘い脂の未経産牛。締めは冷麺か牛肉のスープ。夫婦で営み、女将がひとりで手際よく客席を回す。口コミでは名物の女将と、たっぷり飲んで1万円以下という安さが語られる。喫煙可、現金のみ、予約は18時まで。',
  });
}

// ================================================================ 灯火
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13279607/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'tokyo_toka_yakitori_ichigaya', name: '灯火 (Toka)', category: 'OMNI',
    lat: 35.688907, lng: 139.735358, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come salted or with condiments such as mustard and red yuzu pepper, but courses include dashi dishes, soy-pickled ginkgo, a chicken-soup ramen and green curry; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant whose cooking is built on bonito dashi (Tabelog).',
    hours_raw: 'Mon–Sat and holidays 17:30–23:30 (last order 22:30, last seating 22:00); closed Sunday and some other days, posted monthly; may close early when the yakitori sells out — call ahead (Tabelog). Seat availability posted daily on Instagram @touka.ichigaya (Tabelog). Reservations taken; same-day cancellations and late arrivals by phone (Tabelog). At least two drinks per person; no service charge (Tabelog). Cards accepted; no e-money or QR (Tabelog). 15 seats: 9 at the counter and a semi-private box for 4–6, served through a small window; hire up to 20; non-smoking (Tabelog). Some groups brought their own wine (June and September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokubanchō 4-11, 朝日六番町マンション B1F — the basement under Tonkatsu Kawamura, 3 min from Ichigaya Stn (Exits 3, 4), 4 min from Kōjimachi Stn',
    cuisine: 'Yakitori of Hinai jidori chicken grilled over charcoal, with Japanese dishes built on bonito dashi from a chef trained in both (Tabelog) · 8-skewer omakase course of 14 dishes ¥7,300; the fuller "Toka course"; à la carte skewers (September 2026; 2026 reviews) · e.g. sweet-potato purée, chicken sashimi wrapped in nori, kumquat with kombu-cured breast, shio tsukune, bonjiri, seseri, gizzard, white liver, negi-kawa, quail eggs three ways, vegetable skewers, salads such as watercress with bankan citrus or fig and arugula, liver pâté with cacao (2025–26 reviews) · to finish: Hinai jidori takikomi gohan, chicken-soup ramen, oyakodon, a green curry regulars rave about (Tabelog; 2026 reviews) · over 20 sakes, many from Tohoku, with handwritten notes; shochu, wine, craft gin (2025–26 reviews)',
    website: 'https://www.instagram.com/touka.ichigaya/', gmaps: gm('灯火 焼鳥 市ヶ谷'), menu_url: null,
    notes: "[Yakitori · Ichigaya, a couple's basement counter for Hinai chicken and sake] Down a Showa-looking stair under Tonkatsu Kawamura, a clean white-wood counter where Hinai jidori is grilled over charcoal — crisp skin, juicy meat, the salt judged just right — between small Japanese dishes from a chef trained in both kitchens. The 14-dish, eight-skewer course is ¥7,300, and regulars add à la carte skewers, a cacao-topped liver pâté and the green curry that one diner would come back for alone. Over twenty sakes, many from Tohoku, come with handwritten notes from the owner. Run by a friendly couple with a mostly local, often business crowd; book ahead, two drinks minimum, open to 23:30.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (September 2026 review)'], origin: null,
      background: 'No source names the chef or owner. Tabelog (shop text): hand-skewered yakitori and Japanese cuisine based on bonito dashi, by "a chef with experience in both yakitori and Japanese cuisine". Reviewers: "It is run by a friendly couple" (September 2026); "I also became a fan of the couple and the staff" (September 2026); "The chef in a neat happi coat and the owner in traditional attire and an apron" (September 2026); "The Japanese sake was carefully selected by the owner, focusing on options from the Tohoku region" (September 2026).',
      philosophy: null, specialty: 'Hinai jidori yakitori; shio tsukune; green curry.',
      anecdotes: [
        { text: '"The green curry was so good that it could easily be served at a curry restaurant for lunch! Haha. I will definitely come back just for this curry!!!" — April 2026.', source: R + 'B526282817/' },
        { text: '"I appreciated the thoughtful gesture of being able to take home the second serving of Hinai chicken and edamame rice as an onigiri." — June 2026.', source: R + 'B530383907/' },
        { text: '"The owner kindly explained (and wrote down) the various types of Japanese sake and other drinks." — January 2026.', source: R + 'B522290039/' },
      ],
      japanese_sources_summary: '食べログ (店舗の紹介): 灯火、焼き鳥・日本料理・鶏料理、六番町4-11 朝日六番町マンション B1F、市ケ谷駅から徒歩3分、麹町駅4分、月〜土・祝17:30〜23:30 (L.O.22:30、最終入店22:00)、日曜と不定休、焼き鳥が売り切れたら早仕舞い、空席はインスタグラム @touka.ichigaya で毎日更新、1人2杯以上のドリンク注文、サービス料なし、カード可、15席 (カウンター9席と半個室のボックス席)、禁煙、手打ちの串とかつお出汁の日本料理、Hinai jidori の塩つくねと炊き込みご飯。口コミ(2025年〜2026年): 夫婦で営む、8本のおまかせコース (14品) 7,300円、レバーのパテ、グリーンカレー、親子丼、鶏のスープのラーメン、東北の日本酒が20種以上、手書きの説明。',
      confidence: 'medium', sources: [TB, R + 'B459351782/', R + 'B519067335/', R + 'B519907244/', R + 'B522290039/', R + 'B524350738/', R + 'B526282817/', R + 'B530383907/', R + 'B530464799/', R + 'B531118140/', R + 'B535720223/', R + 'B536114912/', R + 'B537944693/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course or à la carte at the counter; the owner explains the sakes.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '東京都千代田区六番町4-11 朝日六番町マンション B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with October 2026 closing days; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.688930, 139.735381); ${BLDG}. Same building as Buta Base, Maruju and Tonkatsu Kawamura, so the four are block pins about 5 m apart: this one 5 m south of Maruju's pin; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535720223/'],
    price_note: 'Course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', '8-skewer omakase course (14 dishes)', '¥7,300', 'Course', 'ask', 'no', 'September 2026 review.', 'omakase_8'),
      it('', '', 'Shio tsukune (salted chicken meatball)', '', 'Skewers', 'ask', 'no', 'Tabelog; September 2026 review.', 'shio_tsukune'),
      it('', '', 'Green curry', '', 'Finish', 'ask', 'no', 'April 2026 review.', 'green_curry'),
      it('', '', 'Oyakodon', '', 'Finish', 'no', 'no', 'September 2026 review.', 'oyakodon'),
    ] }, {
    cuisine: '炭火で焼く Hinai jidori の焼き鳥と、かつお出汁の日本料理。焼き鳥と日本料理の両方を経験した料理人による (食べログ)・8本のおまかせコース (14品) 7,300円、品数の多い店名を冠したコース、串のアラカルト (2026年9月、2026年の口コミ)・料理の例: Beniharuka のピューレ、海苔で巻いた鶏刺し、きんかんと昆布じめの胸肉、塩つくね、ぼんじり、せせり、すなぎも、白レバー、negi-kawa、三種の味のうずらの卵、野菜の串、クレソンと bankan、いちじくとルッコラのサラダ、カカオをのせたレバーのパテ (2025〜26年の口コミ)・締め: Hinai jidori の炊き込みご飯、鶏のスープのラーメン、親子丼、常連が絶賛するグリーンカレー (食べログ、2026年の口コミ)・日本酒は20種以上で東北のものが多く、手書きの説明付き。焼酎、ワイン、クラフトジン (2025〜26年の口コミ)',
    neighborhood: '六番町4-11 朝日六番町マンション地下1階、とんかつ河むらの下。市ケ谷駅3・4番出口から徒歩3分、麹町駅から4分',
    gf_detail: '要確認。串は塩や、からし、赤柚子こしょうなどで食べるが、コースには出汁の料理、醤油漬けのぎんなん、鶏のスープのラーメン、グリーンカレーもあり、グルテンフリーの記述はない。',
    vegan_detail: 'ヴィーガンではない。かつお出汁を土台にした鶏料理の店 (食べログ)。',
    notes: '[焼き鳥・市ヶ谷、夫婦で営む地下の Hinai jidori と日本酒のカウンター] とんかつ河むらの下、昭和の雰囲気の階段を下りると白木のきれいなカウンター。Hinai jidori を炭火で焼き、皮はパリッと身はジューシーで塩加減もちょうどよい。焼き鳥と日本料理の両方を経験した料理人の小鉢が合間に出る。8本の串が入る14品のコースは7,300円で、常連は串のアラカルト、カカオをのせたレバーのパテ、これだけのためにまた来たいという人もいるグリーンカレーを足す。日本酒は20種以上で東北のものが多く、店主の手書きの説明付き。気さくな夫婦が営み、地元の客や仕事の客が多い。予約がおすすめ、ドリンクは2杯から、23:30まで。',
  });
}

// ================================================================ とんかつ 河むら
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13246991/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://shindining.jp/';
  const LD = day(['11:00', '14:30'], ['17:30', '21:00']); const L = day(['11:00', '14:30']);
  put({
    id: 'tokyo_tonkatsu_kawamura_ichigaya', name: 'とんかつ 河むら (Tonkatsu Kawamura)', category: 'OMNI',
    lat: 35.688952, lng: 139.735413, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, fried pork cutlets; katsu curry.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets and pork miso soup.',
    hours_raw: 'Mon–Sat and the days before and after holidays: lunch 11:00–14:30 (last order 14:00), dinner 17:30–21:00 (last order 20:30); Sundays and holidays lunch only (Tabelog). Dinner ends when ingredients sell out; lunch katsu sold out by 13:00 on an August 2026 Sunday (Tabelog; 2026 reviews). Reservations taken; held 15 minutes (Tabelog); waiting customers outside at an October 2026 lunch. Cards, e-money and QR accepted (Tabelog). 19 seats: 11 at the counter and two tables of 4; non-smoking; English menu; school-age children welcome (Tabelog). Opened 27 May 2020 (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokubanchō 4-11, 朝日六番町マンション 1F, on Nittere-dōri — 4 min from Ichigaya Stn (Exit 3), 3 min from Kōjimachi Stn (Exit 6)',
    cuisine: 'Tonkatsu of "Hayashi SPF" pork, with care over the cooking, salt, oil and sauce; small plates and drinks at night (Tabelog) · lunch: premium loin ¥1,950; 120 g fillet; chuck-eye loin set; mixed loin and fillet; fillet katsu curry ¥1,800; a limited katsu that sells out (2026 reviews) · set meals come with rice, a rich pork miso soup, cabbage (one refill, dressing on request) and free pickles; salt, sauce and wasabi soy sauce to dip (2026 reviews) · sake (Tabelog)',
    website: SITE, gmaps: gm('とんかつ河むら 市ヶ谷'), menu_url: null,
    notes: "[Tonkatsu · Ichigaya, a calm modern counter for Hayashi SPF pork] A modern Japanese tonkatsu room on Nittere-dōri, the original of a two-shop company that also runs a branch at Azabudai Hills. The pork is Hayashi SPF, fried with a light, crisp crust: loin with sweet fat, tender fillet, or both, eaten with salt, sauce or wasabi soy sauce; reviewers single out the rice and a hearty pork miso soup. Lunch sets run about ¥1,800–2,000; the limited katsu sells out early. Small gripes: cabbage refills limited to one, dressing only on request, room-temperature pickles. Book for lunch — lines form; dinner ends when the pork runs out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 May 2020 by SHIN Dining Co., Ltd.; a second shop at Azabudai Hills (company website).',
      background: 'Company website: SHIN Dining Co., Ltd. (株式会社SHIN Dining, representative director 岩松 智洋) runs "Tonkatsu Kawamura" in Ichigaya and at Azabudai Hills; founded in 2020, now in its sixth year; the Ichigaya shop serves the everyday business crowd, the Azabudai Hills shop international guests. No source names the chef. Tabelog (shop text): "Hayashi SPF" pork, with attention to cooking method, salt, oil and sauce.',
      philosophy: 'To serve a dish that lets you feel 『沁』 (SHIN) — not to attract with flashiness but with a quiet space (company website, translated).', specialty: 'Loin and fillet katsu of Hayashi SPF pork.',
      anecdotes: [
        { text: '"I ordered the \'Lunch Premium Loin\' (JPY 1950). The rich pork soup and the lightly pickled cabbage on the table added a unique touch to the meal… This is the best tonkatsu I\'ve had recently." — September 2026.', source: R + 'B529639520/' },
        { text: '"I enjoyed it with salt, sauce, and wasabi soy sauce, and I found that the wasabi soy sauce brought out the meat\'s flavor the best." — October 2026, mixed cutlet set.', source: R + 'B537814326/' },
        { text: '"I only got one refill of cabbage. I later found out that the dressing is served upon request, which was a downside for me." — October 2026.', source: R + 'B537814326/' },
      ],
      japanese_sources_summary: '会社の公式サイト: 株式会社SHIN Dining (代表取締役 岩松 智洋) が市ヶ谷と麻布台ヒルズの2店舗で「とんかつ河むら」を営む、2020年創業、6期目、市ヶ谷店はビジネスパーソンの日常に寄り添う料理。食べログ: とんかつ、六番町4-11 朝日六番町マンション 1F、市ケ谷駅3番出口から徒歩4分、麹町駅6番出口から3分、月〜土・祝前日・祝後日 11:00〜14:30 (L.O.14:00)・17:30〜21:00 (L.O.20:30)、日祝はランチのみ、夜は売り切れ次第終了、予約は15分過ぎで取り消し、カード・電子マネー・QR可、19席 (カウンター11席と4人掛け2卓)、禁煙、英語メニューあり、2020年5月27日オープン、「Hayashi SPF」の豚。口コミ(2026年): ランチの上ロース1,950円、ヒレかつカレー1,800円、豚汁、キャベツのおかわりは1回、漬物は食べ放題、塩・ソース・わさび醤油。',
      confidence: 'medium', sources: [TB, SITE, R + 'B529639520/', R + 'B534748937/', R + 'B535387833/', R + 'B535419219/', R + 'B535497930/', R + 'B536132094/', R + 'B536448251/', R + 'B536687424/', R + 'B537220522/', R + 'B537814326/', R + 'B537912438/', R + 'B538229805/'] },
    cultural_comfort: { level: 'english', note: 'English menu available (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都千代田区六番町4-11 朝日六番町マンション 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and company website (2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688952, 139.735413), kept as is; ${BLDG}. Same building as Buta Base, Maruju and Toka, which are block pins about 5 m south and west of this point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529639520/', R + 'B538229805/', R + 'B535419219/'],
    price_note: 'Lunch prices from September–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Lunch premium loin katsu set', '¥1,950', 'Lunch', 'no', 'no', 'September 2026 review.', 'jo_rosu'),
      it('', '', 'Lunch fillet katsu curry', '¥1,800', 'Lunch', 'no', 'no', 'October 2026 review.', 'hire_curry'),
      it('', '', 'Lunch fillet katsu, 120 g', '', 'Lunch', 'no', 'no', 'September 2026 review; price not given.', 'hire_120'),
      it('', '', 'Mixed loin and fillet katsu set', '', 'Set meals', 'no', 'no', 'August and October 2026 reviews; price not given.', 'mix'),
    ] }, {
    cuisine: '「Hayashi SPF」の豚のとんかつ。揚げ方、塩、油、ソースまで気を配る。夜は小皿料理とお酒も (食べログ)・ランチ: 上ロース1,950円、ヒレ120g、肩ロースの定食、ロースとヒレの盛り合わせ、ヒレかつカレー1,800円、早く売り切れる限定のかつ (2026年の口コミ)・定食はご飯、具だくさんの豚汁、キャベツ (おかわり1回、ドレッシングは頼めば)、食べ放題の漬物付き。塩、ソース、わさび醤油で (2026年の口コミ)・日本酒 (食べログ)',
    neighborhood: '六番町4-11 朝日六番町マンション1階、日テレ通り沿い。市ケ谷駅3番出口から徒歩4分、麹町駅6番出口から3分',
    gf_detail: 'グルテンフリーではない。衣をつけて揚げた豚かつ、かつカレー。',
    vegan_detail: 'ヴィーガンではない。豚かつと豚汁。',
    notes: '[とんかつ・市ヶ谷、Hayashi SPF の豚を味わう落ち着いたモダンなカウンター] 日テレ通りの和モダンなとんかつ店で、麻布台ヒルズにも店を持つ2店舗の会社の最初の店。豚は Hayashi SPF で、衣は軽くサクッと。脂の甘いロース、やわらかいヒレ、またはその両方を、塩、ソース、わさび醤油で。ご飯と具だくさんの豚汁をほめる声も多い。ランチの定食は1,800〜2,000円ほどで、限定のかつは早く売り切れる。小さな不満は、キャベツのおかわりが1回まで、ドレッシングは頼まないと出ない、漬物が常温なこと。昼は予約がおすすめで行列もでき、夜は豚がなくなり次第終了。',
  });
}

save();
