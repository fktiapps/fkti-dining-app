// Osaka sweep (2-mile circle around Dotonbori), batch 56 — mom phase (≤20 seats), nearest first.
//   + 味鳥 (yakitori counter by Hozenji since 1958, second and third generations → mom_and_pop; filed 'yakitori')
//   + 夫婦善哉 (the Hozenji zenzai shop of Oda Sakunosuke's story; GF and vegan 'ask' — filed 'sweets')
//   + 法善寺横丁 天ぷら天山 (8-seat tempura counter, opened July 2025 — filed 'other')
//   + 炭焼鳥miya (one-owner late-night yakitori off Shinsaibashi-suji → mom_and_pop; existence 'probable')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 56);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 味鳥
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27022257/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.yakitori-midori.info';
  const D = day(['17:00', '22:30']);
  put({
    id: 'osaka_yakitori_midori_hozenji', name: '味鳥 (Yakitori Midori)', category: 'OMNI',
    lat: 34.667746, lng: 135.501937, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the house tare is soy sauce and sake (July 2026); courses only for first-timers. Ask about salt-grilled skewers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken course; sashimi.',
    hours_raw: 'Mon–Sat 17:00–22:30 (L.O. 22:00); closed Sunday and holidays; may close early when sold out, and temporary closures happen (Tabelog). First-time guests must order a course (Matsu, Take or Ume) and can add à la carte after (Tabelog; September 2026). Reservations recommended; deposits and cancellation fees for groups of 5+. Smoking allowed with your neighbors\' consent (Tabelog). Cards accepted; no e-money.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-5-21 — 30 seconds from Mizukake Fudo in Hozenji Yokocho',
    cuisine: 'Yakitori since 1958 over Kishu binchotan · Ise Akadori, shamo and Tajima chicken (Tabelog) · tare of soy sauce and sake, no added sweetness · courses Matsu, Take and Ume for first-timers (one at ¥6,000, September 2026) · negima, chicken breast with shiso and ume, house "Midori-yaki", chicken skin, "tulip" wings, asparagus and burdock rolls, stuffed shiitake, meaty cartilage · onsen egg, yamakake, chicken sashimi · junmai daiginjo sake · 12 seats at an L-shaped counter',
    website: OWN, gmaps: gm('味鳥 法善寺'), menu_url: null,
    notes: "[Yakitori · a 1958 yakitori counter by Hozenji] A 12-seat L-shaped counter a few steps from Mizukake Fudo in Hozenji Yokocho, grilling yakitori since 1958. The second- and third-generation owners now run it together and keep the old flavors. Chicken from Ise Akadori, shamo and Tajima birds goes over Kishu binchotan. The tare is just soy sauce and sake, rich and smooth with no extra sweetness, and diners say it lets the chicken speak. First-timers must take a course (Matsu, Take or Ume; one group paid ¥6,000 a head for a course in September 2026) and can order à la carte afterward. Expect negima, chicken breast with shiso and ume, the house Midori-yaki, chicken skin, \"tulip\" wings and stuffed shiitake, with onsen egg and yamakake on the side. Check sake prices, which add up fast. One September diner found the meat tough and the hygiene off-putting. Book ahead; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Established 1958 (Tabelog)', background: 'Run jointly by the second- and third-generation owners (July 2026 review); official site yakitori-midori.info.', philosophy: 'Traditional flavors; a simple tare of soy sauce and sake (July 2026 review).', specialty: 'Binchotan yakitori courses.',
      anecdotes: [
        { text: '"The sauce is a simple blend of soy sauce and sake… It has a deep richness and smoothness, without any unnecessary sweetness, and the flavor when combined with the chicken fat is exceptional." — July 2026.', source: R + 'B532032881/' },
        { text: '"This restaurant only accepts course orders from new customers… There are three types of courses: Matsu, Take, and Ume." — September 2026, Take course.', source: R + 'B535215293/' },
      ],
      japanese_sources_summary: '公式 yakitori-midori.info。食べログ: 味鳥、大阪市中央区難波1-5-21、法善寺横丁の水掛不動さんから徒歩30秒、月〜土17:00〜22:30(L.O.22:00)、日・祝休み、売り切れ次第早じまいあり、予約可(初めての方はコースのみ、コース後に単品追加可、5名以上は前金とキャンセル料)、カード可、電子マネー不可、喫煙可(両隣の客の同意を)、12席(カウンターのみ)、1958年創業、Ise Akadoriや軍鶏など朝引きの銘柄鶏と地鶏、紀州備長炭で焼く但馬鶏と軍鶏、秘伝のたれ。口コミ(2026年7〜9月): 創業68年、二代目と三代目で営む、たれは醤油と酒だけで余計な甘さがない、日本酒は値段を確認しないと高くなる、L字のカウンター、松・竹・梅のコース、刺身も串もおいしい、竹コース、串を笑顔で説明してくれる、ねぎま、ささみの梅しそ、Midori焼き、アスパラ巻き、ごぼう巻き、皮、チューリップ、しいたけの肉詰め、肉が硬く衛生面が気になったという声、温泉卵と山かけ、銀杏、たれが強すぎない、6,000円のコース、軟骨、純米大吟醸。',
      confidence: 'medium', sources: [TB, OWN, R + 'B532032881/', R + 'B535215293/', R + 'B532811202/', R + 'B533511345/', R + 'B536397953/', R + 'B536517464/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course-only for first-timers; small counter.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-5-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目5番21号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535215293/', R + 'B536517464/', R + 'B536397953/'],
    price_note: 'Course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course (one of Matsu, Take, Ume)', '¥6,000', 'Courses', 'no', 'no', 'September 2026.', 'course6000'),
      it('', '', 'Take course', '', 'Courses', 'no', 'no', 'August–September 2026.', 'take'),
      it('', '', 'Matsu course', '', 'Courses', 'no', 'no', 'July 2026.', 'matsu'),
      it('', '', 'Ume course', '', 'Courses', 'no', 'no', 'August 2026.', 'ume'),
      it('', '', 'Negima', '', 'Skewers', 'ask', 'no', 'September 2026.', 'negima'),
      it('', '', 'Chicken breast with shiso and ume', '', 'Skewers', 'ask', 'no', 'September 2026.', 'sasami'),
      it('', '', 'Chicken skin', '', 'Skewers', 'ask', 'no', 'September 2026.', 'kawa'),
      it('', '', 'Onsen egg', '', 'Small plates', 'ask', 'no', 'September 2026.', 'onsen_tamago'),
    ] }, {
    cuisine: '1958年からの紀州備長炭の焼き鳥・Ise Akadori、軍鶏、但馬鶏(食べログ)・醤油と酒だけで甘さを足さないたれ・初めての方は松・竹・梅のコース(6,000円のコースも、2026年9月)・ねぎま、ささみの梅しそ、Midori焼き、皮、チューリップ、アスパラ巻きとごぼう巻き、しいたけの肉詰め、身の多い軟骨・温泉卵、山かけ、鶏刺し・純米大吟醸・L字のカウンター12席',
    neighborhood: '難波1-5-21。法善寺横丁の水掛不動さんから徒歩30秒',
    gf_detail: '実際にはグルテンフリーではありません。たれは醤油と酒(2026年7月)、初めての方はコースのみ。塩焼きの串を相談して。',
    vegan_detail: 'ヴィーガンではありません。鶏のコース、刺身。',
    notes: '[焼き鳥・法善寺そばの1958年創業の焼き鳥カウンター] 法善寺横丁の水掛不動さんから数歩、L字のカウンター12席で1958年から焼き鳥を焼く店。今は二代目と三代目が一緒に切り盛りし、昔ながらの味を守っています。Ise Akadori、軍鶏、但馬鶏を紀州備長炭で。たれは醤油と酒だけで、コクがありなめらか、余計な甘さがなく、鶏の味が生きるという声。初めての人はコース(松・竹・梅、2026年9月に6,000円のコースを頼んだグループも)が必須で、その後は単品も頼めます。ねぎま、ささみの梅しそ、名物のMidori焼き、皮、チューリップ、しいたけの肉詰めなどに、温泉卵や山かけも。日本酒は値段を確認しないとすぐ高くなります。9月には肉が硬く衛生面が気になったという人も。予約がおすすめで、日曜定休。',
  });
}

// ================================================================ 夫婦善哉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015375/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://sato-res.com/meotozenzai/';
  put({
    id: 'osaka_meoto_zenzai_hozenji', name: '夫婦善哉 (Meoto Zenzai)', category: 'OMNI',
    lat: 34.667874, lng: 135.502421, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Zenzai is red beans with a rice-cake dumpling, but no source lists the ingredients; the salt kombu served alongside is usually soy-seasoned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Red-bean zenzai contains no obvious animal products, but no source lists the ingredients.',
    hours_raw: 'Daily 10:00–22:00; hours may change (Tabelog). No reservations. One order per guest; sharing a serving is not allowed (September 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['10:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-2-10, Hozenji MEOUTO Bldg 1F — beside Mizukake Fudo, Hozenji Yokocho',
    cuisine: 'Zenzai (sweet red-bean soup) since 1883 · Meoto Zenzai ¥820: one serving split into two small bowls, Tanba Dainagon azuki with a few whole beans, a rice-cake dumpling, salt kombu and green tea · chilled zenzai in summer · matcha-azuki kakigori · Meoto Zenzai goods · 18 seats at 5 tables',
    website: OWN, gmaps: gm('夫婦善哉 法善寺'), menu_url: null,
    notes: "[Japanese sweets · the zenzai shop of Oda Sakunosuke's story, by Hozenji] The zenzai shop beside Mizukake Fudo in Hozenji Yokocho, dating to 1883 and made famous by Oda Sakunosuke's novel \"Meoto Zenzai\". The signature (¥820, September 2026) arrives as one serving split into two small bowls, a nod to a married couple, and ordering it as a couple is said to bring luck. Don't share: it's one order per guest. The zenzai is made with Tanba Dainagon azuki, gently sweet and a little thick, with a few whole beans and a soft rice-cake dumpling. Salt kombu and green tea cut the sweetness, and staff refill the tea. In summer there's a chilled zenzai, plus matcha-azuki kakigori. Today it's run by the Wasyoku Sato group and open 10 am to 10 pm, handy for dessert after takoyaki. There's a shelf of Meoto Zenzai souvenirs.",
    chef_bio: { chef_name: null, roles: [], origin: 'Established 1883 (October 2026 review)', background: 'Linked to Oda Sakunosuke\'s novel "Meoto Zenzai" (September–October 2026 reviews); part of the Wasyoku Sato group (September 2026 review; official page on sato-res.com).', philosophy: 'One serving in two bowls, for a harmonious couple (October 2026 review).', specialty: 'Meoto Zenzai.',
      anecdotes: [
        { text: '"The specialty here is served in two bowls, representing a harmonious couple, and it is said that ordering it as a couple brings good fortune (however, sharing one serving between two people is considered bad luck)." — October 2026.', source: R + 'B537222042/' },
        { text: '"The zenzai made with Tanba Dainagon red beans has a subtle sweetness, allowing the flavor of the beans to shine through, with a few whole beans remaining." — September 2026, Meoto Zenzai ¥820.', source: R + 'B536567120/' },
      ],
      japanese_sources_summary: '公式 sato-res.com/meotozenzai。食べログ: 夫婦善哉、大阪市中央区難波1-2-10 法善寺MEOUTOビル、なんば駅から徒歩7分、毎日10:00〜22:00、予約不可、カード・電子マネー・QR可、18席(1階テーブル5卓)、禁煙。口コミ(2026年9〜10月): 冷やしぜんざい、1人前が2つのお椀、1人1つの注文で分け合いは不可、やさしい甘さ、Oda Sakunosukeの「夫婦善哉」、お茶のおかわり、グッズ、食べログ3.58、Wasyoku Satoのグループ、ぜんざいとかき氷、夫婦善哉820円、塩昆布、Tanba Dainagon小豆、粒が残る、求肥は一つ、たこ焼きやお好み焼きの後の口直しに、昔ながらの雰囲気、子どもと分けたという声、餅、抹茶あずきのかき氷、1883年創業、水掛不動のすぐ横、夫婦円満を表す2つのお椀でカップルで頼むと縁起がいい(1人前を2人で分けるのは縁起が悪い)、関西のぜんざいとおしるこの違い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537222042/', R + 'B536567120/', R + 'B536231818/', R + 'B536566059/', R + 'B536568576/', R + 'B536660813/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One order per person; a famous stop in Hozenji Yokocho.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-2-10 法善寺MEOUTOビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM 夫婦善哉 node/2312836108 10m; GSI 大阪府大阪市中央区難波一丁目2番10号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536567120/', R + 'B536231818/', R + 'B536660813/'],
    price_note: 'Price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Meoto Zenzai (two bowls, one serving)', '¥820', 'Zenzai', 'ask', 'ask', 'September 2026.', 'meoto'),
      it('', '', 'Chilled zenzai', '', 'Zenzai', 'ask', 'ask', 'September 2026.', 'hiyashi'),
      it('', '', 'Matcha-azuki kakigori', '', 'Kakigori', 'ask', 'ask', 'October 2026.', 'kakigori'),
    ] }, {
    cuisine: '1883年からのぜんざい・夫婦善哉820円: 1人前を2つの小さなお椀に、粒の残るTanba Dainagon小豆、餅、塩昆布と緑茶・夏は冷やしぜんざい・抹茶あずきのかき氷・夫婦善哉のグッズ・テーブル5卓で18席',
    neighborhood: '難波1-2-10 法善寺MEOUTOビル1F。法善寺横丁の水掛不動のすぐ横',
    gf_detail: '要確認。ぜんざいは小豆と餅ですが、材料を示す情報はありません。添えの塩昆布は醤油で味付けされていることが多いです。',
    vegan_detail: '要確認。小豆のぜんざいに目立った動物性の食材はありませんが、材料を示す情報はありません。',
    notes: '[甘味・法善寺のOda Sakunosukeの小説ゆかりのぜんざい] 法善寺横丁の水掛不動のすぐ横にあるぜんざいの店で、1883年創業、Oda Sakunosukeの小説「夫婦善哉」で知られます。名物(820円、2026年9月)は1人前を2つの小さなお椀に分けたもので、夫婦円満を表し、カップルで頼むと縁起がいいとか。分け合いは不可で、1人1つ注文を。Tanba Dainagon小豆のぜんざいはやさしい甘さで少しとろみがあり、粒が残り、やわらかい餅入り。塩昆布と緑茶で口直しを、お茶はおかわりも。夏は冷やしぜんざい、抹茶あずきのかき氷も。今はWasyoku Satoのグループが運営し、朝10時から夜10時まで開いているので、たこ焼きの後のデザートにも。夫婦善哉のおみやげも並びます。',
  });
}

// ================================================================ 法善寺横丁 天ぷら天山
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27150602/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://tempura-tenzan.com/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_tempura_tenzan_hozenji', name: '法善寺横丁 天ぷら天山 (Hozenji Yokocho Tempura Tenzan)', category: 'OMNI',
    lat: 34.668118, lng: 135.50261, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat tempura batter; tentsuyu dipping sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood tempura, sashimi; batter and dipping sauce not described.',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 17:00–23:00 (L.O. food 21:00, drinks 22:30); closed Wednesday (Tabelog). Same-day reservations accepted. No service or cover charge. Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-1-17, Hozenji Yokocho — about 5 min from Namba Stn',
    cuisine: 'Tempura counter, opened July 2025 · ¥12,000 seasonal course: three appetizers, three sashimi, ten tempura (shrimp, tuna, crab, scallop, milt, sweet potato, nagaimo, pumpkin, turnip, persimmon), noodles, rice and dessert · kiwi tempura · matcha salt, yuzu salt and tentsuyu with grated daikon · à la carte available · sake bar AWA upstairs · 8 counter seats',
    website: OWN, gmaps: gm('天ぷら天山 法善寺横丁'), menu_url: null,
    notes: "[Tempura · an 8-seat tempura counter in Hozenji Yokocho] A bright, clean eight-seat tempura counter on the cobbled lanes of Hozenji Yokocho, open since July 2025. Each piece is fried in front of you and served at once: a crisp, light batter that isn't greasy, with the seafood and vegetables tasting of themselves. The ¥12,000 course (November 2025 and January 2026) runs from three appetizers and three sashimi through ten tempura, such as shrimp, crab, large scallop, milt, sweet potato and persimmon, then noodles, rice and dessert. There are surprises, like kiwi tempura. Dip in matcha salt, yuzu salt or tentsuyu with grated daikon, and the staff will suggest which. You can also order à la carte. The chef is cheerful and chatty. Upstairs, the shop's sake bar AWA pours a wide range of sake and whisky for after. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 July 2025 (Tabelog)', background: 'Seasonal tempura counter with a sake bar, AWA, on the second floor (March 2026 reviews); official site tempura-tenzan.com.', philosophy: 'Fresh seasonal ingredients fried with careful temperature control (Tabelog).', specialty: 'Tempura course.',
      anecdotes: [
        { text: '"The batter was crispy, while the inside remained fluffy, resulting in a light dish without any greasiness. With a variety of dipping options including matcha salt, yuzu salt, and a broth with grated Japanese radish." — January 2026, ¥12,000 course.', source: R + 'B521365559/' },
        { text: '"And I was surprised by the tempura made with kiwi… Moreover, this restaurant actually has a Japanese sake bar called AWA on the second floor." — March 2026.', source: R + 'B524354877/' },
      ],
      japanese_sources_summary: '公式 tempura-tenzan.com。食べログ: 法善寺横丁 天ぷら天山、大阪市中央区難波1-1-17、なんば駅から徒歩5分、月・火・木〜日・祝17:00〜23:00(L.O.料理21:00・ドリンク22:30)、水曜休み、当日予約可、サービス料・チャージなし、カード・電子マネー・QR可、8席(カウンターのみ)、禁煙、2025年7月18日開店、旬の食材を温度管理して揚げる高級天ぷら専門店。口コミ(2025年11月〜2026年10月): 12,000円のコース(先付3種、お造り3種、天ぷら10種: 海老・鮪・蟹・帆立・白子・さつまいも・長芋・かぼちゃ・蕪・柿、麺、ご飯)、目の前で一つずつ揚げる、甘海老と大きな帆立、サクッと軽く油っぽくない衣、抹茶塩・柚子塩・大根おろしの天つゆ、おすすめを教えてくれる、キウイの天ぷら、2階に日本酒バーAWA(日本酒とウイスキー)、接待や特別な日に、石畳の法善寺横丁の隠れ家、明るく清潔な店内、アラカルトも可、気さくな料理人。',
      confidence: 'medium', sources: [TB, OWN, R + 'B521365559/', R + 'B524354877/', R + 'B517457238/', R + 'B524943218/', R + 'B528087133/', R + 'B537042925/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter dining; same-day reservations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番17号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517457238/', R + 'B521365559/'],
    price_note: 'Course price from November 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal tempura course', '¥12,000', 'Courses', 'no', 'no', 'November 2025; January 2026.', 'course'),
      it('', '', 'Kiwi tempura', '', 'Tempura', 'no', 'no', 'March 2026.', 'kiwi'),
      it('', '', 'À la carte tempura', '', 'Tempura', 'no', 'no', 'October 2026.', 'alacarte'),
    ] }, {
    cuisine: '2025年7月開店の天ぷらのカウンター・12,000円の旬のコース: 先付3種、お造り3種、天ぷら10種(海老、鮪、蟹、帆立、白子、さつまいも、長芋、かぼちゃ、蕪、柿)、麺、ご飯、甘味・キウイの天ぷら・抹茶塩、柚子塩、大根おろしの天つゆ・アラカルトも可・2階に日本酒バーAWA・カウンター8席',
    neighborhood: '難波1-1-17、法善寺横丁。なんば駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。小麦の天ぷらの衣、天つゆ。',
    vegan_detail: 'ヴィーガンではありません。魚介の天ぷら、お造り。衣や天つゆの中身は不明。',
    notes: '[天ぷら・法善寺横丁の8席の天ぷらカウンター] 法善寺横丁の石畳にある明るく清潔なカウンター8席の天ぷら店で、2025年7月開店。目の前で一つずつ揚げてすぐに出され、衣はサクッと軽く油っぽくなく、魚介も野菜も素材の味がします。12,000円のコース(2025年11月・2026年1月)は先付3種とお造り3種から、海老、蟹、大きな帆立、白子、さつまいも、柿など天ぷら10種、そして麺、ご飯、甘味へ。キウイの天ぷらのような驚きも。抹茶塩、柚子塩、大根おろしの天つゆで、どれがいいかはスタッフが教えてくれます。アラカルトも可。料理人は明るく気さく。2階には店の日本酒バーAWAがあり、日本酒とウイスキーで食後の一杯を。水曜定休。',
  });
}

// ================================================================ 炭焼鳥miya
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27061564/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '06:00']), S = day(['18:00', '23:59']);
  put({
    id: 'osaka_sumiyaki_tori_miya', name: '炭焼鳥miya (Sumiyaki Tori miya)', category: 'OMNI',
    lat: 34.6703, lng: 135.501791, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: fried chicken, baguette sandwich and soy-based dishes; yakitori is mainly salt-seasoned, so ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout; chicken broth with the rice balls.',
    hours_raw: 'Mon–Sat, holidays and days around them 18:00–6:00 am (L.O. 5:30); Sun 18:00–24:00 (L.O. 23:30) (Tabelog). Mostly run single-handed by the owner, so reserve, especially for 4 or more (2024–2025 reviews); one-person reservations accepted. Smoking allowed (Tabelog). Cards, e-money and QR accepted.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-3-32, 1F — just east of the Shinsaibashi-suji arcade, about 5 min from Namba Stn exit 14',
    cuisine: 'Charcoal yakitori, mostly salt-seasoned · chicken sashimi, seared chicken and avocado yukke · salt tsukune · house fried chicken thigh · beef skirt steak · whiteboard specials · grilled rice balls with house chicken broth · all-you-can-drink courses (¥2,750 with three dishes, April 2025; ¥4,950 with skewers and sashimi, March 2025) · smokers welcome · 16 seats',
    website: null, gmaps: gm('炭焼鳥miya 心斎橋'), menu_url: null,
    notes: "[Yakitori · a one-owner, all-night yakitori bar off Shinsaibashi-suji] A long, narrow yakitori bar just east of the Shinsaibashi-suji arcade, open from 6 pm until 6 am most nights, mostly run single-handed by a friendly owner. Skewers are mainly salt-grilled over charcoal, and one diner ordered extra chicken skin. Chicken sashimi, seared chicken and avocado yukke are popular. A whiteboard lists daily extras, from octopus to garlic shrimp, and grilled rice balls in house chicken broth close the night. The all-you-can-drink courses are good value (¥2,750 with three dishes in April 2025, ¥4,950 with skewers and sashimi in March 2025). Reserve ahead, since one person runs the room; solo bookings are fine. It's a smoking bar full of regulars keeping bottles, and you can't see in from the street. One January 2026 visitor found it average. The newest review is from January 2026, so check before going.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashi-suji 2-chōme (Tabelog)', background: 'The owner usually runs the bar alone (November 2024 and March 2025 reviews).', philosophy: 'Fresh chicken at reasonable prices (Tabelog).', specialty: 'Salt yakitori; chicken sashimi.',
      anecdotes: [
        { text: '"The yakitori is primarily seasoned with salt, and the chicken sashimi, seared chicken, and yukke are delicious too… grilled rice balls served with a homemade chicken broth that wraps everything up perfectly." — November 2024.', source: R + 'B496202284/' },
        { text: '"The course includes yakitori, chicken sashimi, and a special ponzu sauce with hinokawa (young chicken), along with two side dishes and grilled rice balls to finish, all for JPY 4950 with all-you-can-drink included." — March 2025.', source: R + 'B503421429/' },
      ],
      japanese_sources_summary: '食べログ: 炭焼鳥miya、大阪市中央区心斎橋筋2-3-32 登美弥ビル1F、地下鉄なんば駅14番出口から徒歩5分、月〜土・祝18:00〜翌6:00(L.O.5:30)、日18:00〜24:00(L.O.23:30)、予約可、カード・電子マネー・QR可、喫煙可、16席(カウンター10、テーブル6)、塩焼き、塩つくね、130gの炭火焼きの名物。口コミ(2024年11月〜2026年1月): カウンター中心でテーブル1つ、4人以上は予約を、店主がほぼひとりで営む、塩の焼き鳥、鶏刺し、たたき、ユッケ、ホワイトボードの日替わり(タコ、ブルスケッタ、牛タン、エリンギのバター焼き、ガーリックシュリンプ)、自家製鶏スープの焼きおにぎり、飲み放題付きコース4,950円(焼き鳥、鶏刺し、ひね鶏のポン酢、小鉢2品、焼きおにぎり)、1人でも予約可、皮が絶品、飲み放題と3品のコース2,750円(おばんざい、おすすめ串3本)、店主との会話が楽しい、細長い店内、常連がボトルで飲む、値上がりを感じたという声、宴会4,000円(おばんざい3種、鶏刺し、串5種かハラミステーキ、自家製唐揚げ、チキンアボカドのバゲットサンド、焼きおにぎり)、喫煙可、外から中が見えない、普通だったという声。',
      confidence: 'low', sources: [TB, R + 'B496202284/', R + 'B503421429/', R + 'B505745638/', R + 'B514751102/', R + 'B519239431/', R + 'B521680264/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bar full of regulars; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-32 登美弥ビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Staff-maintained Tabelog listing with current hours; newest review January 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番32号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505745638/', R + 'B503421429/', R + 'B519239431/'],
    price_note: 'Course prices from March 2025–December 2025 reviews; one diner felt prices had risen (September 2025).', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink course with three dishes', '¥2,750', 'Courses', 'no', 'no', 'April 2025.', 'nomihodai3'),
      it('', '', 'All-you-can-drink course (skewers, sashimi, grilled rice balls)', '¥4,950', 'Courses', 'no', 'no', 'March 2025.', 'nomihodai'),
      it('', '', 'Party course', '¥4,000', 'Courses', 'no', 'no', 'December 2025.', 'enkai'),
      it('', '', 'Chicken skin skewer', '', 'Skewers', 'ask', 'no', 'March 2025.', 'kawa'),
      it('', '', 'Chicken sashimi', '', 'Small plates', 'ask', 'no', 'November 2024.', 'torisashi'),
      it('', '', 'Grilled rice balls with chicken broth', '', 'Rice', 'no', 'no', 'November 2024.', 'yakionigiri'),
    ] }, {
    cuisine: '塩が中心の炭火焼き鳥・鶏刺し、たたき、アボカドのユッケ・塩つくね・自家製の鶏もも唐揚げ・牛ハラミステーキ・ホワイトボードの日替わり・自家製鶏スープの焼きおにぎり・飲み放題付きコース(3品で2,750円、2025年4月/串と鶏刺し付き4,950円、2025年3月)・喫煙可・16席',
    neighborhood: '心斎橋筋2-3-32 登美弥ビル1F。心斎橋筋商店街のすぐ東、なんば駅14番出口から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。唐揚げ、バゲットサンド、醤油の料理。焼き鳥は塩が中心なので相談を。',
    vegan_detail: 'ヴィーガンではありません。鶏料理が中心、焼きおにぎりに鶏スープ。',
    notes: '[焼き鳥・心斎橋筋そばの店主ひとりの朝までの焼き鳥] 心斎橋筋商店街のすぐ東にある細長い焼き鳥の店で、ほとんどの日は夕方6時から朝6時まで、気さくな店主がほぼひとりで切り盛り。串は炭火の塩焼きが中心で、皮を追加で頼んだという人も。鶏刺し、たたき、アボカドのユッケも人気。ホワイトボードにはタコからガーリックシュリンプまで日替わりが並び、締めは自家製鶏スープの焼きおにぎり。飲み放題付きのコースはお得で、3品で2,750円(2025年4月)、串と鶏刺し付きで4,950円(2025年3月)。ひとりで回しているので予約を、1人でも予約できます。喫煙可で、ボトルを入れた常連が多く、外から中は見えません。2026年1月には普通だったという声も。最新の口コミは2026年1月なので、行く前に確認を。',
  });
}

save();
