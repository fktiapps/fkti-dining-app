// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 12.
//   + 鮨 やすみつ Sushi Yasumitsu (14-seat omakase in a Sanei-cho lane; second-generation chef Yasuhide Watanuki; Bronze 2026)
//   + 塩つけ麺 灯花 Shio Tsukemen Toka (12-seat salt tsukemen; ramen block)
//   + TIPHARETH COFFEE ROASTERY (roastery café on Shinjuku-dōri, since 2023)
//   + トラノコ TORANOKO (10-seat roaster café known for its firm egg pudding, since 2017)
//   Chain check. Toka: run by 株式会社グッドヌードルイノベーション, whose other brand 鯛塩そば灯花 has several shops (a new one
//   opened October 2026); 塩つけ麺 灯花 is a different concept, and no 灯花 shop is in data — drafted as a sister concept per
//   Greg's 2026-11-02 ruling. Yasumitsu, Tiphareth and Toranoko: one listing each. No skips.
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 やすみつ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13212833/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '20:00'], ['20:30', '23:00']);
  put({
    id: 'tokyo_sushi_yasumitsu_yotsuya', name: '鮨 やすみつ (Sushi Yasumitsu)', category: 'MOM_AND_POP',
    lat: 35.688123, lng: 139.725283, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. An omakase of sushi and small dishes with soy-based seasonings, a matsutake clear soup and a matcha ice-cream monaka to finish; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish, shellfish and crab omakase.',
    hours_raw: 'Mon–Sat two seatings, 17:30–20:00 (last drinks 19:30) and 20:30–23:00 (last drinks 22:30); also open on the last Sunday of the month, closing the Monday after; closed Sunday and holidays (Tabelog). Reservation only, by phone 10:00–15:00; change or cancel at least two days ahead (Tabelog). Hard to book; regulars rebook a year ahead (December 2025, September 2026). Cash only: card payment is suspended (Tabelog). 14 seats: 8 at the counter and a private room for 6; non-smoking (Tabelog). About ¥30,000–40,000 a head with sake; omakase ¥34,100 in October 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya Sanei-cho 5-2, in a quiet lane of houses too narrow for cars — 6 min from Yotsuya or Yotsuya-sanchome Stn',
    cuisine: 'Omakase alternating small dishes and nigiri on red-vinegar rice, built around sea urchin in summer and crab in winter (2025–26 reviews; Tabelog) · e.g. an opening fatty sardine nigiri, a tasting of three sea urchins (Rishiri and Nemuro purple, red, Karatsu), flounder with karasumi, kue-dai and madai side by side, Ishikawa gasu and sweet shrimp, hairy crab, steamed abalone, ankimo roll, sea-grape roll, swordfish with ume and shiso, Nagano matsutake in a clear soup or grilled, Kobako crab in December, a matcha ice-cream monaka (2025–26 reviews) · omakase ¥34,100 (October 2026); seasonal sake, shochu and wine',
    website: null, gmaps: gm('鮨 やすみつ 四谷三栄町'), menu_url: null,
    notes: "[Sushi · Yotsuya, a second-generation counter in a residential lane] Down a lane of houses too narrow for cars, a 14-seat sushi shop that Yasuhide Watanuki took over from the chef's father, whose neighbourhood sushi bar was Kouraku Sushi, and turned into a hard-to-book omakase (Tabelog Bronze 2026). The chef fishes, travels to markets and producers, and builds the year around sea urchin in summer and crab in winter: a tasting of three uni, kobako crab in December, and in autumn 2026 Nagano matsutake in a clear soup between nigiri on red-vinegar rice. Diners praise the chef's warmth as much as the fish. Two seatings a night, cash only, booked by phone; expect about ¥35,000 a head.",
    chef_bio: { chef_name: 'Yasuhide Watanuki', roles: ['Head chef, second generation (reviews: "Chef Yasuhide Watanuki"; "the second generation to take over the family business, originally known as Kouraku Sushi")'], origin: 'Second generation of a neighbourhood sushi shop formerly called Kouraku Sushi (October 2026 reviews).',
      background: 'Per an October 2026 review: "The head chef, Mr. Watanuki, is the second generation to take over the family business, originally known as Kouraku Sushi"; [the chef] "visits various fish markets", travels to taste sushi and meet producers. Another October 2026 diner: "Originally, this restaurant was run by the chef\'s father." Tabelog: "The chef regularly goes fishing to find the best seasonal fish"; signature sea urchin. Tabelog Award Bronze 2026; Sushi TOKYO "Tabelog 100" 2022, 2025. No source gives the chef\'s name in kanji.',
      philosophy: 'Honouring the family shop while pursuing the chef\'s own sushi (October 2026 review).', specialty: 'Sea urchin tasting; seasonal crab.',
      anecdotes: [
        { text: '"In summer, it\'s a sea urchin tasting, and in winter, it\'s crab, but what do they serve in autumn?" — September 2026, a 26th visit.', source: R + 'B299612589/' },
        { text: '"Nestled in the middle of a residential area filled with single-family homes, you have to walk down narrow streets where cars cannot pass to reach the restaurant." — September 2026.', source: R + 'B502050345/' },
        { text: '"I was surprised when the first dish served was the Kōbako crab… But this was just the prologue." — December 2025.', source: R + 'B520198899/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 やすみつ、寿司・魚介・かに、四谷三栄町5-2、四ツ谷駅・四谷三丁目駅から徒歩6分、月〜土17:30〜20:00・20:30〜23:00の2部制、月末の日曜は営業し翌月曜休み、日曜・祝日休み、完全予約制 (電話は10:00〜15:00)、変更・キャンセルは2日前まで、クレジットカード決済は停止中、14席 (カウンター8、個室6)、禁煙、食べログアワード Bronze 2026、寿司 TOKYO 百名店2022・2025、店主は自ら釣りに行く、名物はうに。口コミ(2025年12月〜2026年10月): 二代目の Watanuki 大将、元は Kouraku Sushi、つまみと握りを交互に、赤酢のシャリ、夏はうにの食べ比べ、冬は蟹、Nagano の松茸、おまかせ34,100円、1人3〜4万円。',
      confidence: 'medium', sources: [TB, R + 'B299612589/', R + 'B469176055/', R + 'B502050345/', R + 'B514102048/', R + 'B520198899/', R + 'B534903339/', R + 'B536068801/', R + 'B536380571/', R + 'B536624893/', R + 'B536731111/', R + 'B536821000/', R + 'B537706567/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase only; book by phone 10:00–15:00; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷三栄町5-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Bronze 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688123, 139.725283); cross-checked: GSI 東京都新宿区四谷三栄町5番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B469176055/'],
    price_note: 'Omakase price from an October 2026 review; no published menu.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥34,100', 'Course', 'ask', 'no', 'October 2026 review.', 'omakase'),
    ] }, {
    cuisine: '赤酢のシャリの握りとつまみを交互に出すおまかせ。夏はうに、冬は蟹が軸 (2025〜26年の口コミ、食べログ)・たとえば最初に脂ののったいわしの握り、3種のうにの食べ比べ (Rishiri と Nemuro のむらさき、赤うに、Karatsu)、平目のからすみのせ、kue-dai と真鯛の食べ比べ、Ishikawa の gasu えびと甘えび、毛蟹、蒸しあわび、あん肝の巻物、海ぶどうの巻物、梅しそのかじき、Nagano の松茸のお吸い物や焼き物、12月は Kobako 蟹、最後に抹茶アイスの最中 (2025〜26年の口コミ)・おまかせ34,100円 (2026年10月)。季節の日本酒、焼酎、ワイン',
    neighborhood: '四谷三栄町5-2、車の入れない住宅街の静かな路地。四ツ谷駅・四谷三丁目駅から徒歩6分',
    gf_detail: '予約時に要確認。醤油ベースの味付けの鮨とつまみのおまかせで、松茸のお吸い物、抹茶アイスの最中で締める。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。魚、貝、蟹のおまかせ。',
    notes: '[鮨・四谷、住宅街の路地の二代目のカウンター] 車の入れない住宅街の路地の先、Watanuki 大将が父の町の寿司屋 Kouraku Sushi を継ぎ、予約の取れないおまかせに変えた14席の鮨屋 (食べログ Bronze 2026)。大将は自ら釣りをし、市場や産地を訪ね、夏はうに、冬は蟹を軸に一年を組み立てる: 3種のうにの食べ比べ、12月の Kobako 蟹、2026年秋には赤酢のシャリの握りの合間に Nagano の松茸のお吸い物。客は魚と同じくらい大将の温かさを褒める。夜は2部制、現金のみ、予約は電話で。1人3万5千円ほど。',
  });
}

// ================================================================ 塩つけ麺 灯花
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13238489/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://ramen-toka.com/sio_toka/'; const CO = 'https://ramen-toka.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'tokyo_shio_tsukemen_toka_yotsuya', name: '塩つけ麺 灯花 (Shio Tsukemen Toka)', category: 'OMNI',
    lat: 35.68733, lng: 139.724709, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in salt, soy or seafood dipping broths; boiled gyoza on the side. The listing says allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and seafood broths, chashu.',
    hours_raw: 'Daily 11:00–22:00, open year-round (official shop page); Tabelog gives 11:00–23:00. Ticket machine at the entrance (2026 reviews). Reservations possible, one noodle dish per person (Tabelog). 12 seats, mostly a counter of 10; non-smoking; children welcome (Tabelog; August 2026). No cards; Suica and other e-money, PayPay (Tabelog). Opened 28 August 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-11, 龍文堂ビル 1F, on Shinjuku-dōri — 5 min from Yotsuya-sanchome Stn, 6–7 min from Yotsuya Stn; TIPHARETH Coffee is a few doors away',
    cuisine: 'Salt tsukemen with a clear golden chicken-and-seafood dipping broth, yuzu pepper on the bowl\'s rim, and kombu soba-yu to thin it; "oimeshi" rice dropped into the last of the broth (Tabelog; official site; 2026 reviews) · shio tsukemen ¥990 (August 2026), special versions with seasoned egg and grilled chashu; soy-sauce tsukemen with wasabi; rich seafood tsukemen; tanrei chicken shio soba; a "classic chuka soba" in soy sauce with thin straight noodles (official site; 2026 reviews) · boiled gyoza, a snack platter; bottled beer, lemon sour, highball (official site)',
    website: SITE, gmaps: gm('塩つけ麺 灯花 四谷'), menu_url: SITE,
    notes: "[Ramen · Yotsuya, a light salt tsukemen on Shinjuku-dōri] A 12-seat counter shop from the company behind the 鯛塩そば灯花 shops, devoted to salt tsukemen: chewy straight noodles beside a clear golden dipping broth of chicken and seafood, with yuzu pepper on the rim, kombu soba-yu to stretch the broth, and a spoonful of rice to drop in at the end. For a heavier bowl there is a rich seafood tsukemen, plus a soy version and a nostalgic soy chuka soba. Diners in 2026 found the shio broth light but full of umami and the grilled chashu excellent; one thought the soy tsukemen just okay. Buy a ticket at the door; open every day until 22:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 August 2019 (Tabelog).',
      background: 'Run by 株式会社グッドヌードルイノベーション, 四谷4-7 (official site), which also runs the 鯛塩そば灯花 brand (a new shop opened in Chofu on 15 October 2026, per its news page). No source names the cooks; an August 2026 diner noticed only women in the kitchen that day. Tabelog lists allergy information as available.',
      philosophy: null, specialty: 'Shio tsukemen; oimeshi.',
      anecdotes: [
        { text: '"The dish was refreshingly light yet packed with umami… After finishing the noodles, I added kombu soba-yu (noodle water) to the broth to enjoy it even more." — August 2026, shio tsukemen with flavoured egg.', source: R + 'B534072228/' },
        { text: '「鶏ベースの塩かな？透明な黄金色のスープは見た目より濃厚。」 — August 2026, a Sunday.', source: R + 'B534648522/' },
        { text: '"I tried the soy sauce tsukemen, but it was just okay… I should have gone for the shio tsukemen instead." — October 2026.', source: R + 'B536676515/' },
      ],
      japanese_sources_summary: '公式サイト (ramen-toka.com): 塩つけ麺 灯花、四谷2-11 龍文堂ビル1F、11:00〜22:00、年中無休、12席、淡麗鶏塩そば、塩つけ麺、濃厚魚介つけ麺、水ギョウザ、昆布そば湯割り、追い飯茶漬け、運営は株式会社グッドヌードルイノベーション、鯛塩そば灯花も展開 (2026年10月に調布店オープン)。食べログ: 塩つけ麺は鶏と魚介の繊細な香りと特製塩だれのキレ、柚子胡椒、醤油つけ麺はわさび、11:00〜23:00、12席、禁煙、カード不可、電子マネー・PayPay 可、アレルギー表示あり、2019年8月28日オープン。口コミ(2026年8月〜10月): 塩つけ麺990円、透明な黄金色のスープは見た目より濃厚、もちもちのストレート麺、炙りチャーシュー、昆布そば湯、追い飯、券売機、醤油つけ麺は普通だったという声。',
      confidence: 'medium', sources: [SITE, CO, TB, R + 'B529042105/', R + 'B533826982/', R + 'B534072228/', R + 'B534648522/', R + 'B534722145/', R + 'B535283794/', R + 'B536676515/', R + 'B537720588/', R + 'B538207872/', R + 'B538209219/', R + 'B538319273/', R + 'B538441292/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: 'straight', hydration: null, handmade: null, notes: 'Chewy straight noodles for the shio tsukemen (August and October 2026); one diner called them slightly thick and smooth, another medium-thin and flat with the rich seafood tsukemen (August 2026).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Shio tsukemen ¥990 (August 2026), finished with kombu soba-yu and oimeshi rice.',
      chashu: 'Grilled, meaty chashu (September–October 2026).',
      notable_toppings: ['grilled chashu', 'seasoned egg (special)', 'menma with yuzu peel', 'shredded nori', 'yuzu pepper'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth; chashu.' },
      pantheon: 'Shinjuku-dōri\'s clear salt tsukemen: golden chicken-and-seafood broth sharpened with yuzu pepper, stretched with kombu soba-yu, finished with rice.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534072228/', '"The dish was refreshingly light yet packed with umami" (August 2026); "The broth was light and refreshing" (' + R + 'B538319273/, October 2026).'],
        oiliness: [R + 'B538319273/', '"A clear golden color, with oil droplets and chopped green onions floating on top" (October 2026) — some oil on a light broth, placed low.'],
        clarity: [R + 'B538319273/', '"The dipping sauce… was a clear golden color" (October 2026); 「透明な黄金色のスープ」 (' + R + 'B534648522/, August 2026).'],
        tare_strength: [R + 'B534722145/', '"Despite being labeled as \'salt,\' the soup is surprisingly robust" (August 2026) — mid-scale.'],
        noodle_firmness: [R + 'B538319273/', '"The noodles were chewy and satisfying" (October 2026); 「もちもちのストレート」 (' + R + 'B534648522/) — mid-scale.'],
        aroma_punch: [TB, 'Tabelog: "Salt dipping noodles feature a delicate aroma of chicken and seafood" — placed low.'],
      },
      confidence: 'medium', sources: [TB, R + 'B534072228/', R + 'B534648522/', R + 'B534722145/', R + 'B538319273/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door; a card explains how to eat the tsukemen (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷2-11 龍文堂ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official shop page and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687330, 139.724709); cross-checked: GSI 東京都新宿区四谷二丁目11番地 (lot) 31m. TIPHARETH Coffee Roastery (tokyo_tiphareth_coffee_yotsuya, address_ja "東京都新宿区四谷2-11-18 磯合ビル 1F") is 7 m away in a different building, so each keeps its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B534722145/'],
    price_note: 'Menu names from the official shop page (no prices shown); price from an August 2026 review.', last_checked: TODAY, items: [
      it('塩つけ麺', '', 'Shio tsukemen', '¥990', 'Tsukemen', 'no', 'no', 'Official site; August 2026 review.', 'shio_tsukemen'),
      it('濃厚魚介つけ麺', '', 'Rich seafood tsukemen', '', 'Tsukemen', 'no', 'no', 'Official site.', 'noko_gyokai'),
      it('淡麗鶏塩そば', '', 'Light chicken shio soba', '', 'Ramen', 'no', 'no', 'Official site.', 'tori_shio_soba'),
      it('水ギョウザ', '', 'Boiled gyoza', '', 'Sides', 'no', 'no', 'Official site.', 'sui_gyoza'),
    ] }, {
    cuisine: '鶏と魚介の透き通った黄金色のつけ汁の塩つけ麺。器の縁に柚子胡椒、昆布そば湯で割り、残ったスープに「追い飯」(食べログ、公式サイト、2026年の口コミ)・塩つけ麺990円 (2026年8月)、味玉と炙りチャーシューの特製も。わさびを添える醤油つけ麺、濃厚魚介つけ麺、淡麗鶏塩そば、細いストレート麺の醤油の「昔ながらの中華そば」(公式サイト、2026年の口コミ)・水ギョウザ、おつまみ盛合せ。瓶ビール、レモンサワー、ハイボール (公式サイト)',
    neighborhood: '四谷2-11 龍文堂ビル1F、新宿通り沿い。四谷三丁目駅から徒歩5分、四ツ谷駅から6〜7分。数軒先に TIPHARETH Coffee',
    gf_detail: 'グルテンフリーではない。塩、醤油、魚介のつけ汁に小麦の麺、サイドに水ギョウザ。食べログにはアレルギー表示ありとある。',
    vegan_detail: 'ヴィーガンではない。鶏と魚介のスープ、チャーシュー。',
    notes: '[ラーメン・四谷、新宿通りの淡麗な塩つけ麺] 鯛塩そば灯花の会社が営む、塩つけ麺の12席のカウンターの店。もちもちのストレート麺に、鶏と魚介の透き通った黄金色のつけ汁。縁には柚子胡椒、昆布そば湯で割り、最後はご飯を落として。重めが好みなら濃厚魚介つけ麺、醤油のつけ麺や懐かしい醤油の中華そばもある。2026年の客は塩のスープを軽いのにうまみが濃いと書き、炙りチャーシューも好評。醤油つけ麺は普通だったという人も。入口で食券を買う。毎日22時まで。',
  });
}

// ================================================================ TIPHARETH COFFEE ROASTERY
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13289863/'; const R = TB + 'dtlrvwlst/'; const SHOP = 'https://tipharethshp.base.shop';
  const W = day(['08:30', '19:00']); const S = day(['08:30', '17:00']);
  put({
    id: 'tokyo_tiphareth_coffee_yotsuya', name: 'TIPHARETH COFFEE ROASTERY', category: 'OMNI',
    lat: 35.687344, lng: 139.724632, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee is the focus; the food is sandwiches, coffee pudding, coffee jelly and other desserts, not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black hand-drip and cold-brew coffee are plant-only; lattes, pudding, cream-cheese sandwiches and ice cream are dairy, and no plant milk is mentioned.',
    hours_raw: 'Mon–Fri 8:30–19:00; Sat and holidays 8:30–17:00; closed Sunday (Tabelog), though one diner visited on a Sunday at 12:30 (June 2026). 20 seats: five tables for two on the ground floor and a counter of 6 in a loft upstairs; non-smoking (Tabelog). Cards (VISA, Master, JCB), Suica and QR (Tabelog). Takeaway; online shop for beans (Tabelog). Opened 1 October 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-11-18, 磯合ビル 1F, on Shinjuku-dōri — 6 min from JR Yotsuya Stn, 7 min from Yotsuya-sanchome; Shio Tsukemen Toka is a few doors away',
    cuisine: 'Roastery café with the roaster at the door (2026 reviews) · hand-drip coffee from about four beans a day (dark, medium, light and decaf; a Geisha at times), e.g. Mandheling, mild blend; cold brew; lattes; affogato with two scoops of vanilla; coffee roughly ¥600–1,000 (2026 reviews) · coffee pudding, coffee jelly with ice cream and cream, espresso-nut and cream-cheese sandwich and other breakfast sandwiches from 8:30; complimentary nuts to taste (2026 reviews)',
    website: SHOP, gmaps: gm('TIPHARETH COFFEE ROASTERY 四谷'), menu_url: null,
    notes: "[Café · Yotsuya, a roastery café with a loft] A minimalist, mid-century-style café on Shinjuku-dōri whose roaster by the door scents the street from 8:30 in the morning. Pick a hand-drip coffee from the day's beans, dark to light (with decaf and sometimes a Geisha), or a cold brew, and pair it with the coffee pudding or coffee jelly with ice cream; there are breakfast sandwiches such as espresso nuts with cream cheese. The tall ground floor has a handful of tables, and a narrow loft upstairs has counter seats with a view. 2026 diners call it calm and friendly; one found the tables close together and took away instead, and a regular noticed prices have risen since opening.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2023 (Tabelog).',
      background: 'No source names the owner or roaster. Tabelog lists an online bean shop (tipharethshp.base.shop).',
      philosophy: null, specialty: 'Hand-drip coffee; coffee pudding.',
      anecdotes: [
        { text: '"You can choose from hand-dripped coffee options: dark roast, medium roast, and light roast. They even offer specialty Geisha coffee." — March 2026, early morning.', source: R + 'B524281704/' },
        { text: '"Surprisingly, the affogato is cheaper than the iced coffee and comes with two scoops of vanilla." — June 2026.', source: R + 'B529538604/' },
        { text: '"Although the ceiling was high, the seating was quite close together… so I decided to take out my order." — September 2026.', source: R + 'B535783601/' },
      ],
      japanese_sources_summary: '食べログ: TIPHARETH COFFEE ROASTERY、カフェ、四谷2-11-18 磯合ビル1F、JR四ツ谷駅から徒歩6分、月〜金8:30〜19:00、土・祝8:30〜17:00、日曜休み、20席 (1階は2人がけ5卓、2階はカウンター6)、禁煙、カード・Suica・QR 可、テイクアウト、オンラインショップ、2023年10月1日オープン。口コミ(2026年2月〜9月): 入口の焙煎機、ハンドドリップは深煎り・中煎り・浅煎り・デカフェ、ゲイシャも、水出しコーヒー、アフォガート、コーヒープリン、コーヒーゼリー、エスプレッソナッツとクリームチーズのサンド、試食のナッツ、2階のロフト、席が近いという声。',
      confidence: 'medium', sources: [TB, SHOP, R + 'B522049297/', R + 'B524281704/', R + 'B525476381/', R + 'B526519500/', R + 'B529510136/', R + 'B529538604/', R + 'B531096744/', R + 'B531279209/', R + 'B531585471/', R + 'B532399333/', R + 'B534891235/', R + 'B535783601/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; staff explain the day\'s beans.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷2-11-18 磯合ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.687344, 139.724632); cross-checked: GSI 東京都新宿区四谷二丁目11番地 (lot) 24m. Shio Tsukemen Toka (tokyo_shio_tsukemen_toka_yotsuya, address_ja "東京都新宿区四谷2-11 龍文堂ビル 1F") is 7 m away in a different building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532399333/'],
    price_note: 'Price range from a July 2026 review; no published menu read.', last_checked: TODAY, items: [
      it('', '', 'Hand-drip coffee of the day', '¥600–1,000', 'Coffee', '', '', 'July 2026 review.', 'hand_drip'),
      it('', '', 'Coffee pudding', '', 'Sweets', 'ask', 'no', 'April and July 2026 reviews.', 'coffee_pudding'),
    ] }, {
    cuisine: '入口に焙煎機のあるロースタリーカフェ (2026年の口コミ)・その日の4種ほどの豆から選ぶハンドドリップ (深煎り、中煎り、浅煎り、デカフェ。ゲイシャのことも)、たとえばマンデリン、マイルドブレンド。水出しコーヒー、ラテ、バニラ2スクープのアフォガート。コーヒーは600〜1,000円ほど (2026年の口コミ)・コーヒープリン、アイスとクリームのコーヒーゼリー、エスプレッソナッツとクリームチーズのサンドなど8時半からの朝食のサンドイッチ。試食のナッツ (2026年の口コミ)',
    neighborhood: '四谷2-11-18 磯合ビル1F、新宿通り沿い。JR四ツ谷駅から徒歩6分、四谷三丁目駅から7分。数軒先に塩つけ麺 灯花',
    gf_detail: '要確認。主役はコーヒーで、食べ物はサンドイッチ、コーヒープリン、コーヒーゼリーなどのデザート。グルテンについての説明はない。',
    vegan_detail: '要確認。ブラックのハンドドリップや水出しは植物性だけだが、ラテ、プリン、クリームチーズのサンド、アイスは乳製品で、植物性ミルクの話は出てこない。',
    notes: '[カフェ・四谷、ロフトのあるロースタリーカフェ] 新宿通りのミッドセンチュリー風のミニマルなカフェで、入口の焙煎機が朝8時半から通りまで香る。その日の豆から深煎りから浅煎り (デカフェや、ときにゲイシャも) のハンドドリップか水出しを選び、コーヒープリンやアイスのせのコーヒーゼリーと。エスプレッソナッツとクリームチーズなどの朝のサンドイッチも。天井の高い1階にテーブルがいくつか、上の細いロフトに眺めのいいカウンター席。2026年の客は落ち着いて親切と書く一方、席が近くて持ち帰りにした人や、開店時より値上がりしたと気づいた常連も。',
  });
}

// ================================================================ トラノコ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13221607/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://toranokocoffee.com/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'tokyo_toranoko_coffee_yotsuya', name: 'トラノコ (TORANOKO)', category: 'OMNI',
    lat: 35.688211, lng: 139.725066, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature egg pudding is a firm, old-style custard and may contain no flour, but nothing is labelled; Basque cheesecake and other bakes are also sold.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, hot or iced, is plant-only; the desserts are egg and dairy and no plant milk is mentioned.',
    hours_raw: 'Daily 10:30–18:00; closing days not fixed (Tabelog). Weekday reservations; at weekends and holidays only when you are first on the waiting list (Tabelog). One drink per person, 90-minute limit (Tabelog). Order and pick up at the counter (September 2026). 10 seats: a counter of 6 and two tables for two; non-smoking; strollers welcome (Tabelog; October 2026). Cards, e-money and QR (Tabelog). Takeaway coffee, beans and drip bags (Tabelog; 2026 reviews). Opened 22 October 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanei-cho 6-14, 寿ビル 1F, down a side street — 7 min from Yotsuya-sanchome Stn, 10 min from Yotsuya Stn',
    cuisine: 'Coffee roaster café: beans roasted in a large direct-fire roaster in the shop, sacks of green beans on show (2026 reviews) · hand-drip coffee chosen by sniffing several beans to suit the taste you describe, e.g. Indonesian Mandheling, Laos, a "Proadmir" from Indonesia; coffee of the day hot ¥590, iced café latte ¥730; Toranoko Blend beans 200 g ¥1,980 (2025–26 reviews) · the "Tamago Tappurin" egg pudding, firm, old-fashioned and not too sweet; Basque cheesecake, cheesecake (2026 reviews)',
    website: SITE, gmaps: gm('トラノコ 三栄町 コーヒー'), menu_url: null,
    notes: "[Café · Yotsuya, a roaster café and its firm pudding] A small coffee shop down a side street near Yotsuya-sanchome, filled with the smell of beans from the big direct-fire roaster inside and sacks of green coffee by the counter. Tell the cheerful owner whether you like acidity or bitterness and several beans are set out for you to sniff before your hand-drip cup is brewed; iced café latte and the coffee of the day are the regulars' standbys. The thing to eat is the egg pudding, firm and old-fashioned, rich in egg and not too sweet, or a Basque cheesecake. Ten seats, regulars chatting at the counter, a 90-minute limit, and beans to take home.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 October 2017 (Tabelog).',
      background: 'No source names the owner. Reviews describe "the kind service from the owner" (August 2026), an owner with "a surprisingly youthful vibe" (September 2026), "the owner had a cheerful smile… a detailed explanation from the owner" (October 2026), and staff who set out several beans to smell when you name a flavour (March 2026). An October 2026 reviewer tags it "Top 100 Cafes 2026".',
      philosophy: null, specialty: 'Hand-drip coffee; Tamago Tappurin pudding.',
      anecdotes: [
        { text: '"When you express your preference for flavors like acidity or bitterness, the staff presents several types of beans right in front of you. Being able to choose while smelling the aromas is an irresistible experience for coffee lovers." — March 2026.', source: R + 'B509402048/' },
        { text: '"The pudding was the classic firm type, reminiscent of the old days. There were also a few books on the counter." — September 2026.', source: R + 'B535821652/' },
        { text: '"I ordered today\'s hot coffee (JPY 590) and 200g of Toranoko Blend coffee beans (JPY 1980)." — October 2026, an 11th visit.', source: R + 'B507682233/' },
      ],
      japanese_sources_summary: '食べログ: トラノコ (TORANOKO)、カフェ・プリン、三栄町6-14 寿ビル1F、四谷三丁目駅から徒歩7分、四ツ谷駅10分、毎日10:30〜18:00、不定休、予約は平日のみ (土日祝は順番待ちの先頭のときだけ)、ワンドリンク制で90分、10席 (カウンター6、2人がけ2卓)、禁煙、カード・電子マネー・QR 可、テイクアウト、2017年10月22日オープン。口コミ(2025年1月〜2026年10月): 店内の直火式の大きな焙煎機、生豆の麻袋、好みを伝えると豆の香りをかいで選べる、本日のホットコーヒー590円、アイスカフェラテ730円、トラノコブレンド200g 1,980円、固めで甘さ控えめの「たまごたっぷりん」、バスクチーズケーキ、明るい店主、カウンターに常連。',
      confidence: 'medium', sources: [TB, SITE, R + 'B507682233/', R + 'B509402048/', R + 'B533894242/', R + 'B534314294/', R + 'B534345463/', R + 'B535266572/', R + 'B535370486/', R + 'B535627252/', R + 'B535821652/', R + 'B536321668/', R + 'B537163776/', R + 'B537809714/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter and pick up; the owner explains the beans.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区三栄町6-14 寿ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688211, 139.725066); cross-checked: GSI 東京都新宿区四谷三栄町6番14号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B507682233/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Coffee of the day (hot)', '¥590', 'Coffee', '', '', 'October 2026 review.', 'todays_coffee'),
      it('', '', 'Iced café latte', '¥730', 'Coffee', '', 'no', 'October 2026 review.', 'iced_latte'),
      it('', '', 'Tamago Tappurin egg pudding', '', 'Sweets', 'ask', 'no', '2026 reviews.', 'pudding'),
      it('', '', 'Toranoko Blend beans, 200 g', '¥1,980', 'Beans', '', '', 'October 2026 review.', 'blend_beans'),
    ] }, {
    cuisine: '店内の大きな直火式の焙煎機で焼く豆のロースターカフェ。生豆の麻袋が並ぶ (2026年の口コミ)・ハンドドリップは好みを伝えると数種の豆の香りをかいで選べる。たとえば Indonesia のマンデリン、Laos、Indonesia の Proadmir。本日のコーヒーのホット590円、アイスカフェラテ730円、トラノコブレンドの豆200g 1,980円 (2025〜26年の口コミ)・固めで昔ながら、甘さ控えめの「たまごたっぷりん」、バスクチーズケーキ、チーズケーキ (2026年の口コミ)',
    neighborhood: '三栄町6-14 寿ビル1F、脇道を少し入ったところ。四谷三丁目駅から徒歩7分、四ツ谷駅から10分',
    gf_detail: '要確認。名物の卵のプリンは固めの昔ながらのカスタードで小麦粉は使わないかもしれないが表示はない。バスクチーズケーキなどの焼き菓子も。',
    vegan_detail: '要確認。ブラックコーヒーはホットもアイスも植物性だけだが、デザートは卵と乳製品で、植物性ミルクの話は出てこない。',
    notes: '[カフェ・四谷、ロースターカフェと固めのプリン] 四谷三丁目近くの脇道にある小さなコーヒー店。店内の大きな直火式の焙煎機の香りと、カウンター脇の生豆の麻袋。酸味が好きか苦みが好きかを伝えると、明るい店主が豆を数種並べて香りをかがせてくれ、それからハンドドリップを淹れる。アイスカフェラテや本日のコーヒーが常連の定番。食べるなら固めで昔ながらの、卵が濃く甘さ控えめのプリン、またはバスクチーズケーキ。10席で、カウンターでは常連がおしゃべり。90分制、豆の持ち帰りも。',
  });
}

save();
