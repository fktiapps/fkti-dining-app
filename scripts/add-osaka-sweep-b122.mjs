// Osaka sweep (2-mile circle around Dotonbori), batch 122 — mom / small-shop phase (all OMNI).
//   + 鮨 Shizuku 心斎橋 (creative sushi course, Tabelog Award Bronze 2025–2026; Higashi-Shinsaibashi)
//   + 魚重 (marinated-tuna tekka-don specialist from ¥900, run by two people; Nishi-Shinsaibashi) — mom_and_pop
//   + 元祖アイスドッグ (soft serve in a hot fried bun, an Amemura snack; by Triangle Park)
//   + むかいの 五八 (¥3,500 chicken course grilled on a teppan in front of you; one-person counter, 3F) — mom_and_pop
//   + 活たこ・創作料理 さるのこしかけ (live-octopus izakaya: sashimi, shabu-shabu, takoyaki, octopus rice; 7F)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 122);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 Shizuku 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27093524/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://sushi-shizuku.com';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_sushi_shizuku_shinsaibashi', name: '鮨 Shizuku 心斎橋 (Sushi Shizuku Shinsaibashi)', category: 'OMNI',
    lat: 34.67182, lng: 135.505657, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house sauces and soy-based seasonings on each piece; ebi-mayo.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish and sea urchin throughout; chawanmushi.',
    hours_raw: 'Mon, Tue, Thu–Sun 18:00–23:00 in two seatings, 18:00–20:30 and 21:00–23:00; closed Wed (Tabelog). Reservation needed and hard to get; one diner booked a year ahead (September 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-1-27, Suomachi Wings 1F, on Suomachi-dori (Europe-dori) — 3 min from Nagahoribashi',
    cuisine: 'Creative sushi course · course ¥22,000 (September 2026) · each piece with its own house sauce and condiments, and hidden knife work · grilled kuruma shrimp with eggplant, bell pepper and karasumi · flounder · sea bream with yuzu · aori squid scored fine and topped with sea urchin · Beni Haruka sweet potato chawanmushi · charcoal-grilled mackerel with condiments and ume · bonito in shuto · sardine · tuna (chutoro, marinated akami) · Kanazawa saba sushi · anago in nori · add-ons: toro-taku roll, "adult" ebi-mayo, sea urchin hand roll (¥10,000) · spend ¥20,000–40,000 · 6 counter seats, one table for four',
    website: OWN, gmaps: gm('鮨 Shizuku 心斎橋'), menu_url: null,
    notes: "[Sushi · creative sushi with a sauce for every piece, Higashi-Shinsaibashi] A ten-seat sushi room on Suomachi-dori, open since 2016, a Tabelog Award Bronze winner in 2025 and 2026 and so hard to book that one diner waited a year. It breaks from Edomae: each piece comes with its own house sauce or condiments and hidden knife work, like aori squid scored so finely it turns fluffy, topped with sea urchin. The ¥22,000 course might open with grilled kuruma shrimp under karasumi, run through flounder, yuzu-scented sea bream and a sweet potato chawanmushi, then grilled mackerel with ume and condiments, tuna and anago. Save room for the add-ons: a toro-taku roll and an \"adult\" ebi-mayo one diner calls a must, though one diner found the ¥10,000 uni hand roll and the overall bill steep, and the extras not offered clearly. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 July 2016 (Tabelog)', background: 'Creative sushi restaurant; Tabelog Award Bronze 2025 and 2026; Tabelog Sushi WEST 100, 2021, 2022 and 2025 (Tabelog; official site sushi-shizuku.com).', philosophy: 'Original sauces and condiments matched to each ingredient, with hidden knife techniques (September 2026 review).', specialty: 'Creative sushi course.',
      anecdotes: [
        { text: '"This restaurant offers a unique take on sushi that differs from traditional Edomae style… original sauces and condiments tailored to each ingredient, incorporating various hidden knife techniques." — September 2026.', source: R + 'B283684264/' },
        { text: '"The intricate knife work was visually impressive, and once in my mouth, it was so fluffy that it hardly felt like squid." — October 2026, aori ika.', source: R + 'B537415373/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 Shizuku 心斎橋、大阪市中央区東心斎橋2-1-27 周防町ウィングス 1F、長堀橋から周防町通り(ヨーロッパ通り)を西へ3分、月・火・木〜日 18:00〜23:00(1部18:00〜20:30、2部21:00〜23:00)、水休み、カード可、電子マネー・QR不可、10席(カウンター6、4人席1)、2016年7月27日開店、公式 sushi-shizuku.com、The Tabelog Award 2025・2026 Bronze、食べログ 寿司 WEST 百名店 2021・2022・2025。口コミ(2026年9〜10月): 江戸前とは違う創作寿司、ネタごとの自家製のたれと薬味、隠し包丁、茄子とピーマンと甘海老、平目、真鯛、雲丹をのせたアオリイカ、紅はるかの茶碗蒸し、炭火焼きの鯖、鰹の酒盗漬け、赤むつ、中トロ、赤身、鰯、穴子の海苔巻き、新寒天のゼリー、予約が取りにくい、1年待ち、太刀魚の塩焼き、ハタ、鯛と空芯菜の鍋、金沢の鯖寿司、トロたく巻き、梨、熊本天草の車海老の焼き物にからすみ、柚子の鯛、コース22,000円、雲丹の手巻き10,000円で合計40,000円は高いという声、カウンター6席、トロたくと「大人の海老マヨ」、追加の案内が不十分だったという声。',
      confidence: 'high', sources: [TB, OWN, R + 'B283684264/', R + 'B487135114/', R + 'B528448661/', R + 'B536082203/', R + 'B536749699/', R + 'B537415373/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase in two seatings; reserve well ahead (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-1-27 周防町ウィングス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (Tabelog Award 2026 Bronze); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番27号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536082203/', R + 'B536749699/'],
    price_note: 'Course price from a September 2026 review; spend ¥20,000–40,000.', last_checked: TODAY, items: [
      it('', '', 'Sushi course', '¥22,000', 'Course', 'no', 'no', 'September 2026.', 'course'),
      it('', '', 'Sea urchin hand roll (add-on)', '¥10,000', 'Add-ons', 'no', 'no', 'September 2026.', 'uni_temaki'),
      it('', '', 'Toro-taku roll (add-on)', '', 'Add-ons', 'no', 'no', 'October 2026.', 'torotaku'),
      it('', '', '"Adult" ebi-mayo (add-on)', '', 'Add-ons', 'no', 'no', 'October 2026.', 'ebimayo'),
    ] }, {
    cuisine: '創作寿司のコース・コース22,000円(2026年9月)・一貫ごとに自家製のたれや薬味、隠し包丁・茄子、ピーマン、からすみの車海老の焼き物・平目・柚子の真鯛・細かく包丁を入れ雲丹をのせたアオリイカ・紅はるかの茶碗蒸し・薬味と梅の炭火焼き鯖・鰹の酒盗漬け・鰯・中トロ、漬けの赤身・金沢の鯖寿司・穴子の海苔巻き・追加: トロたく巻き、「大人の海老マヨ」、雲丹の手巻き(10,000円)・一人20,000〜40,000円・カウンター6席、4人席1卓',
    neighborhood: '中央区東心斎橋2-1-27 周防町ウィングス 1F、周防町通り(ヨーロッパ通り)沿い。長堀橋から3分',
    gf_detail: 'グルテンフリーではありません。一貫ごとの自家製のたれや醤油ベースの味付け、海老マヨ。',
    vegan_detail: 'ヴィーガンではありません。全体に魚、貝、雲丹、茶碗蒸し。',
    notes: '[寿司・東心斎橋、一貫ごとにたれを変える創作寿司] 周防町通りの10席の鮨店で、2016年開店、The Tabelog Award 2025・2026 Bronze、1年待ったという声もあるほど予約が取りにくい。江戸前とは別の道: 一貫ごとに自家製のたれや薬味と隠し包丁、たとえばふわふわになるほど細かく包丁を入れ雲丹をのせたアオリイカ。22,000円のコースは、からすみをのせた車海老の焼き物から平目、柚子香る鯛、さつまいもの茶碗蒸し、梅と薬味の焼き鯖、鮪、穴子へ。追加のトロたく巻きと、ぜひという声のある「大人の海老マヨ」も。ただ10,000円の雲丹の手巻きや会計は高く、追加の案内も不十分だったという声も。水曜休み。',
  });
}

// ================================================================ 魚重
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27009601/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '20:00']);
  put({
    id: 'osaka_uoshige_nishi_shinsaibashi', name: '魚重 (Uoshige)', category: 'OMNI',
    lat: 34.672977, lng: 135.499524, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tuna marinated in a soy-based sauce; red miso soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna is the dish; quail egg yolk; miso soup.',
    hours_raw: 'Tue–Sat 11:30–20:00; closed Mon, Sun and public holidays; closes when sold out; hours may change (Tabelog). Full from opening, but turnover is quick, usually seated within 15 minutes (April 2026). Run by two people (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-4-17, Shigetani Bldg 1F, at the back of the building — 3 min from Shinsaibashi Stn exit 7',
    cuisine: 'Tekka-don (marinated tuna rice bowl) specialist · 7 slices ¥900; large rice ¥1,000 · 10 slices ¥1,100; large rice ¥1,200 · lean tuna marinated in a sesame-scented soy sauce over warm rice and shredded nori, quail egg yolk and wasabi in the middle · Thursday and Friday: chutoro tekka-don · every bowl with red miso soup (wakame) and pickles (shibazuke, napa cabbage) · 6 seats at a wooden counter',
    website: null, gmaps: gm('魚重 西心斎橋'), menu_url: null,
    notes: "[Rice bowl · ten slices of marinated tuna for ¥1,100 in Nishi-Shinsaibashi] A six-seat wooden counter tucked at the back of a building near Shinsaibashi, run by two people and serving essentially one thing: tekka-don. Ten slices of lean tuna, marinated in a sesame-scented soy sauce, are fanned over warm rice and shredded nori with a quail egg yolk and wasabi in the middle, ¥1,100 with red miso soup and pickles; seven slices are ¥900. On Thursday and Friday it switches to a melting chutoro version. One diner has come for 27 years. The sauce comes already on and runs a little strong for one diner, and the rice is soft. It fills at opening but turns over fast, and it closes when the tuna runs out, so go early. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tekka-don specialist run by two people (October 2026 review; Tabelog).', philosophy: null, specialty: 'Tekka-don.',
      anecdotes: [
        { text: '"On top of warm rice is a generous amount of shredded nori. On top of that, 10 slices of marinated red meat tuna are lavishly arranged. In the center, there\'s a quail egg yolk and wasabi." — August 2026, 10 slices ¥1,100; a 27-year customer.', source: R + 'B112987726/' },
        { text: '"A limited-time medium fatty tuna rice bowl available only on Thursdays and Fridays. It features ten luxurious slices of medium fatty tuna… The sesame-flavored soy sauce enhances the overall richness." — May 2026.', source: R + 'B527523878/' },
      ],
      japanese_sources_summary: '食べログ: 魚重、大阪市中央区西心斎橋1-4-17 シゲタニビル 1F、心斎橋から250m、火〜土 11:30〜20:00、月・日・祝休み(2019年11月から祝日休み)、カード・電子マネー・QR不可、カウンター6席。口コミ(2026年4〜10月): 鉄火丼の専門店、7枚900円、7枚ご飯大盛り1,000円、10枚1,100円、10枚ご飯大盛り1,200円、27年通う人、ビルの奥、心斎橋駅7番出口から徒歩3分、木のカウンター、赤だし(わかめ)、香の物(しば漬け、白菜の浅漬け)、温かいご飯に刻み海苔、漬けの赤身10枚、うずらの卵黄とわさび、秘伝のたれ、胡麻の香り、木・金は中トロの鉄火丼、開店から満席でも回転が早く15分ほどで入れる、たれがかかった状態で出てくる、たれが濃く塩辛めという声、ご飯は柔らかめ、清潔、感じのいい接客、二人で営業、なくなり次第終了なので早めに。',
      confidence: 'medium', sources: [TB, R + 'B112987726/', R + 'B526081010/', R + 'B526253310/', R + 'B527523878/', R + 'B531589866/', R + 'B536666039/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-item menu; order by number of slices (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-4-17 シゲタニビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目4番17号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [R + 'B112987726/'],
    price_note: 'Prices from an August 2026 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'Tekka-don, 7 slices', '¥900', 'Tekka-don', 'no', 'no', 'August 2026; with miso soup and pickles.', 'tekka7'),
      it('', '', 'Tekka-don, 7 slices, large rice', '¥1,000', 'Tekka-don', 'no', 'no', 'August 2026.', 'tekka7l'),
      it('', '', 'Tekka-don, 10 slices', '¥1,100', 'Tekka-don', 'no', 'no', 'August 2026.', 'tekka10'),
      it('', '', 'Tekka-don, 10 slices, large rice', '¥1,200', 'Tekka-don', 'no', 'no', 'August 2026.', 'tekka10l'),
      it('', '', 'Chutoro tekka-don (Thu and Fri)', '', 'Tekka-don', 'no', 'no', 'May 2026.', 'chutoro'),
    ] }, {
    cuisine: '鉄火丼の専門店・7枚900円、ご飯大盛り1,000円・10枚1,100円、ご飯大盛り1,200円・胡麻香る醤油だれに漬けた赤身を温かいご飯と刻み海苔の上に、中央にうずらの卵黄とわさび・木・金は中トロの鉄火丼・どれも赤だし(わかめ)と香の物(しば漬け、白菜)付き・木のカウンター6席',
    neighborhood: '中央区西心斎橋1-4-17 シゲタニビル 1F、ビルの奥。心斎橋駅7番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。醤油ベースのたれに漬けた鮪、赤だし。',
    vegan_detail: 'ヴィーガンではありません。鮪が主役、うずらの卵黄、味噌汁。',
    notes: '[丼・西心斎橋、漬け鮪10枚で1,100円の鉄火丼] 心斎橋近く、ビルの奥にひっそりある木のカウンター6席の店で、二人で営み、出すのはほぼ鉄火丼だけ。胡麻香る醤油だれに漬けた赤身10枚を温かいご飯と刻み海苔の上に並べ、中央にうずらの卵黄とわさび、赤だしと香の物付きで1,100円、7枚なら900円。木・金はとろける中トロ版に。27年通う人も。たれは最初からかかっていてやや濃いという声、ご飯は柔らかめ。開店から満席でも回転は早く、鮪がなくなり次第終わるので早めに。現金のみ。',
  });
}

// ================================================================ 元祖アイスドッグ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27041016/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://ice-dog.net/';
  put({
    id: 'osaka_ganso_ice_dog_amemura', name: '元祖アイスドッグ (Ganso Ice Dog)', category: 'OMNI',
    lat: 34.672305, lng: 135.498081, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the soft serve is served inside a fried wheat bun.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dairy soft serve.',
    hours_raw: 'Daily 11:00–21:00; closing days vary (Tabelog). A short line can form (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '21:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-7-11, next to Triangle Park (Amemura) — 5 min from Shinsaibashi Stn',
    cuisine: 'Ice Dog: cold soft serve stuffed into a hot, freshly fried bun, crisp and fluffy, fried in cottonseed oil · rich Hokkaido soft serve; vanilla, chocolate or mixed · soft serve on its own (a mixed cone ¥700) · eat it fast before it melts',
    website: OWN, gmaps: gm('元祖アイスドッグ アメ村'), menu_url: null,
    notes: "[Sweets · the original Ice Dog by Triangle Park in Amemura] A small snack shop next to Amemura's Triangle Park, selling the neighborhood's signature street sweet, the Ice Dog: a bun fried to order, crisp outside and fluffy inside, split and stuffed with cold, rich soft serve. The hot-and-cold contrast is the point; eat it quickly before the ice cream melts. Choose vanilla, chocolate or mixed. Opinions vary from \"incredibly delicious\" to just average, and one diner found ¥700 for a mixed soft serve steep, but it's a fun, cheap Amemura stop and easy to eat walking. Open 11:00 to 21:00. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ice Dog stand in Amerikamura (official site ice-dog.net; Tabelog).', philosophy: null, specialty: 'Ice Dog.',
      anecdotes: [
        { text: '"It features cold ice cream stuffed in a warm, freshly fried bun, creating an interesting combination of hot and cold. It\'s perfect for eating on the go." — August 2026.', source: R + 'B533876661/' },
        { text: '"The bread was crispy and fluffy, and the soft serve had a gentle sweetness that paired perfectly with it." — October 2026.', source: R + 'B537085807/' },
      ],
      japanese_sources_summary: '公式 ice-dog.net。食べログ: 元祖アイスドッグ、大阪市中央区西心斎橋1-7-11、心斎橋駅から徒歩5分、四ツ橋から274m、毎日11:00〜21:00、不定休、カード・電子マネー・QR不可、16席。口コミ(2026年5〜10月): 北海道の濃厚なソフトクリームと揚げたての甘いパン、溶ける前に急いで、綿実油、アメ村の名物、温と冷の組み合わせ、食べ歩き向き、普通だったという声、チョコのミックス、ミックスソフト700円は高いという声、カリッとふわふわのパン、やさしい甘さのソフト、三角公園の隣、行列に並ぶ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B528225707/', R + 'B533876661/', R + 'B536076779/', R + 'B536871503/', R + 'B537085807/', R + 'B537623563/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Street snack to go; cash only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-7-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目7番11号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536871503/'],
    price_note: 'Only the mixed soft serve price was reported (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Ice Dog (vanilla, chocolate or mixed)', '', 'Sweets', 'no', 'no', 'October 2026.', 'ice_dog'),
      it('', '', 'Soft serve, mixed', '¥700', 'Sweets', 'no', 'no', 'September 2026.', 'soft'),
    ] }, {
    cuisine: 'アイスドッグ: 揚げたての熱いパンに冷たいソフトクリーム、外はカリッと中はふわふわ、綿実油で揚げる・北海道の濃厚なソフト、バニラ、チョコ、ミックス・ソフトクリーム単品(ミックス700円)・溶ける前に急いで',
    neighborhood: '中央区西心斎橋1-7-11、三角公園の隣(アメ村)。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ソフトクリームを小麦の揚げパンに挟んでいます。',
    vegan_detail: 'ヴィーガンではありません。乳製品のソフトクリーム。',
    notes: '[スイーツ・アメ村の三角公園の隣、元祖アイスドッグ] アメ村の三角公園の隣の小さな店で、この界隈の名物の食べ歩きスイーツ、アイスドッグを売る: 注文ごとに揚げた外はカリッと中はふわふわのパンを割り、冷たく濃厚なソフトクリームを詰めたもの。熱さと冷たさの対比が醍醐味で、ソフトが溶ける前に急いで。バニラ、チョコ、ミックスから。「すごくおいしい」から「普通」まで評価は分かれ、ミックスソフト700円は高いという声も。それでもアメ村の手軽で楽しい寄り道、歩きながら食べやすい。11時〜21時。現金のみ。',
  });
}

// ================================================================ むかいの 五八
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27120613/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mukaino_gohachi', name: 'むかいの 五八 (Mukaino Gohachi)', category: 'OMNI',
    lat: 34.6727, lng: 135.504467, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare on the chicken; sauce-soaked grilled rice balls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken course; tsukune with quail egg and cheese.',
    hours_raw: 'From 18:00; closing days vary; hours may change (Tabelog). Reservation only, same-day bookings accepted; seat-only bookings not accepted (Tabelog). Course ¥3,500, drinks ¥400–700 (Tabelog). Often run by one person, so drinks can be slow when full (July 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-6-23, Shimizucho Kaikan 3F (left out of the elevator) — 4 min from Nagahoribashi Stn',
    cuisine: 'Chicken course grilled on a teppan in front of you · yakitori course ¥3,500: appetizers, chicken cuts grilled on an iron plate at your place and served with three sauces and salt, tsukune with cheese and quail egg, finished with crisp grilled rice balls soaked in sauce · potato salad and other à-la-carte additions · drinks ¥400–700 · total about ¥4,000–6,000 · 12 counter seats',
    website: null, gmaps: gm('むかいの 五八 東心斎橋'), menu_url: null,
    notes: "[Yakitori · ¥3,500 chicken course grilled on a teppan in front of you, Higashi-Shinsaibashi] A quiet twelve-seat counter on the third floor of a Higashi-Shinsaibashi building, open since 2020, where chicken is grilled not over charcoal but on an iron plate at your place, then served with three sauces and salt. There's one ¥3,500 course: appetizers, assorted chicken cuts, a tsukune with cheese and quail egg, and a finale of grilled rice balls, crisp outside and soaked in sauce, which diners single out. Add a potato salad, and drinks run ¥400–700, so the night comes to about ¥4,000–6,000. The cook often works alone, so on a full night drinks can be slow and one diner found the cook too busy to talk. Reservation only, same day is fine. Cash only. The sign is easy to miss.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2020 (Tabelog)', background: 'Chicken restaurant, often run by one person (July 2026 review; Tabelog).', philosophy: null, specialty: 'Teppan-grilled chicken course; grilled rice balls.',
      anecdotes: [
        { text: '"Mukaino Gohachi is a place where the chef grills yakitori right in front of you using an iron grill… The yakitori is delicious, but the crispy grilled rice balls soaked in flavor for the finish are truly exceptional." — September 2026.', source: R + 'B536328027/' },
        { text: '"All the chicken dishes were great, but my personal favorites were the tsukune (meatballs) topped with cheese and quail eggs, as well as the grilled rice balls." — May 2026.', source: R + 'B527902038/' },
      ],
      japanese_sources_summary: '食べログ: むかいの 五八、大阪市中央区東心斎橋1-6-23 清水町会館 3F、長堀橋駅から徒歩4分、18:00〜、不定休、完全予約制(当日予約可、席のみの予約不可)、焼き鳥コース3,500円、ドリンク400〜700円、カード・電子マネー・QR不可、カウンター12席、2020年10月1日開店。口コミ(2026年4〜9月): ビルの静かな一角の隠れ家、素材を生かしたシンプルな味付け、店主が話しやすい、チーズとうずらのつくね、焼きおにぎり、看板が見にくい、エレベーターを降りて左、コースのみ、食べるペースを見て焼く、ポテトサラダ、ドリンクが手頃、グループごとに鉄板で焼く、満席の日は一人で営業で飲み物が遅い、量が多い、向かいのビルに五八、鉄板で焼く焼き鳥、3種のたれと塩、一人約4,000円、2名から(未確認という声)。',
      confidence: 'medium', sources: [TB, R + 'B527254306/', R + 'B527902038/', R + 'B528427970/', R + 'B532678151/', R + 'B534008418/', R + 'B536328027/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course only; reservation needed (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-6-23 清水町会館 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.672639, 135.504467); same building as Ramen Shosuke Shinsaibashi (osaka_menya_shosuke_shinsaibashi, 1F), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目6番23号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536328027/'],
    price_note: 'Course and drink prices from Tabelog.', last_checked: TODAY, items: [
      it('焼き鳥コース', '', 'Yakitori course', '¥3,500', 'Course', 'no', 'no', 'Tabelog.', 'course'),
      it('', '', 'Potato salad', '', 'À la carte', 'ask', 'ask', 'May 2026.', 'potesara'),
      it('', '', 'Drinks', '¥400–700', 'Drinks', 'ask', 'ask', 'Tabelog.', 'drinks'),
    ] }, {
    cuisine: '目の前の鉄板で焼く鶏のコース・焼き鳥コース3,500円: 前菜、席の前の鉄板で焼く鶏の各部位を3種のたれと塩で、チーズとうずらのつくね、締めはたれに浸したカリカリの焼きおにぎり・ポテトサラダなどの一品も・ドリンク400〜700円・一人約4,000〜6,000円・カウンター12席',
    neighborhood: '中央区東心斎橋1-6-23 清水町会館 3F(エレベーターを降りて左)。長堀橋駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。鶏のたれ、たれに浸した焼きおにぎり。',
    vegan_detail: 'ヴィーガンではありません。鶏のコース、うずらとチーズのつくね。',
    notes: '[焼き鳥・東心斎橋、目の前の鉄板で焼く3,500円の鶏のコース] 東心斎橋のビル3階の静かなカウンター12席の店で、2020年開店、鶏は炭火を使わず席の前の鉄板で焼き、3種のたれと塩で出す。コースは3,500円のひとつ: 前菜、鶏の各部位、チーズとうずらのつくね、そして外はカリッとたれのしみた焼きおにぎりで締め、これを挙げる声が多い。ポテトサラダを足しても、ドリンクは400〜700円なので一人約4,000〜6,000円。料理人一人のことが多く、満席の夜は飲み物が遅く、忙しくて話せなかったという声も。完全予約制、当日でも可。現金のみ。看板は見落としやすい。',
  });
}

// ================================================================ 活たこ・創作料理 さるのこしかけ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27120671/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://iketako.jp/';
  put({
    id: 'osaka_iketako_sarunokoshikake', name: '活たこ・創作料理 さるのこしかけ (Iketako Creative Sarunokoshikake)', category: 'OMNI',
    lat: 34.673341, lng: 135.502683, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki and Akashiyaki batter; dashi and soy seasonings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus in nearly every dish; dashi; oden.',
    hours_raw: 'Daily 17:00–24:00 (Tabelog); closed Mondays in September 2026. Takeaway of leftovers, ¥100 packaging (February 2026). Cards, IC cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['17:00', '23:59'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-27, Nippo New Columbus Bldg 7F — 2 min from Shinsaibashi Stn exit 5 or 6',
    cuisine: 'Live-octopus izakaya, mainly Akashi octopus · octopus sashimi · octopus shabu-shabu, thin slices swished in broth · grilled octopus · takoyaki and Akashiyaki made with live octopus · octopus kimchi · octopus yukhoe · octopus rice · octopus dashi chazuke · oden as an appetizer · whole-octopus course: choose dishes from about eight of the day\'s octopus preparations · other creative izakaya plates · 10 counter seats, 10 at tables',
    website: OWN, gmaps: gm('さるのこしかけ 東心斎橋'), menu_url: null,
    notes: "[Izakaya · live octopus a dozen ways, on a 7th floor by Shinsaibashi] A calm, hidden izakaya on the seventh floor of a building two minutes from Shinsaibashi, open since 2020 and devoted to live octopus, mainly from Akashi. It's rare to find octopus treated this many ways: firm, sweet sashimi; octopus shabu-shabu, sliced thin and swished briefly in broth (the dish to try); grilled octopus; octopus kimchi and yukhoe; and takoyaki and Akashiyaki made with live octopus, which have a different texture from the usual. Finish with the octopus rice or an octopus-dashi chazuke. A whole-octopus course lets you choose from the day's preparations, and portions are generous enough that leftovers can be packed to go. Service is warm. Open until midnight. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 October 2020 (Tabelog)', background: 'Live-octopus izakaya (official site iketako.jp; Tabelog).', philosophy: 'Mainly Akashi octopus (October 2026 review).', specialty: 'Octopus dishes; octopus shabu-shabu.',
      anecdotes: [
        { text: '"My recommendation is the octopus shabu-shabu! Fresh octopus sliced thinly is quickly dipped in a flavorful broth… The octopus rice to finish off the meal is also exquisite!" — September 2026.', source: R + 'B536181036/' },
        { text: '"The takoyaki, made with live octopus, provided a unique texture that was different from what I usually experience." — July 2026.', source: R + 'B534333291/' },
      ],
      japanese_sources_summary: '公式 iketako.jp。食べログ: 活たこ・創作料理 さるのこしかけ、大阪市中央区東心斎橋1-17-27 日宝ニューコロンブスビル 7F、御堂筋線心斎橋駅5・6番出口から徒歩2分、毎日17:00〜24:00、2026年9月は月曜休み、カード・交通系IC・電子マネー・QR可、20席(カウンター10、テーブル10)、2020年10月31日開店。口コミ(2025年3月〜2026年10月): 落ち着いた店内、丁寧な接客、美しい盛り付け、たこめし、おでんの大根、たこ丸ごとのコース、その日のたこを見せてくれて8品から選ぶ、量が多く持ち帰り(パック代100円)、たこキムチ、たこユッケ、たこ刺し、たこ出汁茶漬け、お通しのおでん、活たこのたこ焼き、焼き、しゃぶしゃぶ、明石焼き、明石のたこが中心、コースもアラカルトも、カウンター席、ビルの7階の隠れ家。',
      confidence: 'medium', sources: [TB, OWN, R + 'B502632267/', R + 'B522907426/', R + 'B523149476/', R + 'B534333291/', R + 'B536181036/', R + 'B538084765/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Warm service; cards and QR accepted (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-27 日宝ニューコロンブスビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番27号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523149476/', R + 'B538084765/'],
    price_note: 'Item prices not reported; spend about ¥3,000–8,000 (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Octopus shabu-shabu', '', 'Octopus', 'no', 'no', 'October 2026.', 'tako_shabu'),
      it('', '', 'Octopus sashimi', '', 'Octopus', 'no', 'no', 'February 2026.', 'tako_sashi'),
      it('', '', 'Live-octopus takoyaki', '', 'Octopus', 'no', 'no', 'July 2026.', 'takoyaki'),
      it('', '', 'Akashiyaki', '', 'Octopus', 'no', 'no', 'October 2026.', 'akashiyaki'),
      it('', '', 'Octopus rice', '', 'Rice', 'no', 'no', 'September 2026.', 'takomeshi'),
      it('', '', 'Whole-octopus course', '', 'Course', 'no', 'no', 'February 2026.', 'course'),
    ] }, {
    cuisine: '活たこの居酒屋、明石のたこが中心・たこ刺し・薄切りをさっとくぐらせるたこしゃぶ・焼きだこ・活たこのたこ焼きと明石焼き・たこキムチ・たこユッケ・たこめし・たこ出汁茶漬け・お通しにおでん・たこ丸ごとのコース: その日のたこ料理約8品から選ぶ・ほかに創作の居酒屋料理・カウンター10席、テーブル10席',
    neighborhood: '中央区東心斎橋1-17-27 日宝ニューコロンブスビル 7F。心斎橋駅5・6番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。たこ焼きと明石焼きの生地、出汁と醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。ほぼすべての料理にたこ、出汁、おでん。',
    notes: '[居酒屋・心斎橋近く、ビル7階の活たこ料理] 心斎橋から2分、ビル7階の落ち着いた隠れ家の居酒屋で、2020年開店、明石を中心とした活たこ専門。たこをこれほど多彩に味わえる店は珍しい: 歯ごたえがあり甘いたこ刺し、薄切りをさっと出汁にくぐらせるたこしゃぶ(いちばんのおすすめ)、焼きだこ、たこキムチとユッケ、そして活たこで作るいつもと違う食感のたこ焼きと明石焼き。締めはたこめしかたこ出汁茶漬けで。たこ丸ごとのコースではその日の料理から選べ、量が多いので残りは持ち帰りにも。接客は温かい。深夜0時まで。カード、QR可。',
  });
}

save();
