// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 48.
//   + たこ焼 こはく Takoyaki Kohaku (additive-free takoyaki stand at Takano; core list)
//   + 喜らく Kiraku (ramen inside Toei Kyoto Studio Park — park admission needed; core list)
//   + M&Maison KYOTO (Japanese breakfast set restaurant by Gojo, a Kyoto take on NY's OKONOMI; notable list)
//   + すしてつ 先斗町店 Sushi Tetsu Pontocho (budget à la carte sushi over the Kamo River; notable list)
//   - 京家 きよみず 木屋町 26023213 (notable): branch of a brand already in data (京家 きよみず 祇をん新橋,
//     kyoto_kyoya_kiyomizu_gion_shinbashi); our crawls list four 京家 きよみず shops in Kyoto.
//   Picked 2026-11-06 after batch 47. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips (the core list is
//   now nearly exhausted): たこ焼 こはく 26036263, 喜らく 26007727. `next notable 200`: M&Maison KYOTO 26030947,
//   26023213 (skipped), すしてつ 先斗町店 26002981. Same-name check, same brand or operator only: こはく — one; 喜らく — one
//   (先斗町 きらく in data is a different, kana-named shabu-shabu shop); M&Maison — one; すしてつ — one in our crawls; a web
//   search ("すしてつ 京都 店舗一覧 からふね屋") found no shop list, and the Kyoto Prefecture page on からふね屋 (opened
//   2026-11-06) describes a printing and crafts company with no restaurant brands — so drafted, with the branch name noted
//   as a doubt. None of the four is in data/kyoto.json: grep by name and address (高野東開町11-1, 太秦東蜂ヶ岡町10,
//   橋詰町143, 石屋町133-1) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-48');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26023213/', 'branch of a brand already in data: 京家 きよみず (kyoto_kyoya_kiyomizu_gion_shinbashi); four 京家 きよみず shops in our crawls');

// ================================================================ たこ焼 こはく Takoyaki Kohaku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26036263/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://takoyaki-kohaku.com/';
  const H = day(['12:00', '20:00']);
  put({
    id: 'kyoto_takoyaki_kohaku_takano', name: 'たこ焼 こはく (Takoyaki Kohaku)', category: 'OMNI',
    lat: 35.040674, lng: 135.782252, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: takoyaki in a batter of domestic wheat (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki in a dashi batter, topped with bonito flakes (2024–2025 reviews).',
    hours_raw: 'Tuesday–Sunday 12:00–20:00; closed Monday (Tabelog). Reservations accepted (Tabelog). Cards (VISA, JCB), iD and QR incl. PayPay (Tabelog). 4 standing places at the counter; takeaway; non-smoking (Tabelog). Order inside, past a plastic curtain (November 2025). At the corner of Kitaoji and Higashioji by the Takano bus stop; about 6 min walk from Chayama Stn (Tabelog; November 2025). Sometimes runs a kitchen car at events (May 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takano, at Kitaoji and Higashioji — Takano bus stop',
    cuisine: 'Additive-free takoyaki of domestic wheat and a dashi-rich batter, fluffy and creamy inside with large octopus (2024–2025 reviews) · six for ¥700 in flavours such as sauce, Kyoto-style sesame sauce, negi-dashi soy sauce, salt and sesame oil, salsa and pesto; orders from three pieces (2024–2025 reviews) · about ¥1,000 (Tabelog)',
    website: WEB, gmaps: gm('たこ焼 こはく 高野'), menu_url: null,
    notes: '[Takoyaki · Takano, by Kitaoji-Higashioji] A stylish little stand making additive-free takoyaki with domestic wheat and a dashi-rich batter — fluffy and creamy, with big pieces of octopus — in flavours from classic sauce and Kyoto sesame to negi-dashi soy, salsa and pesto. Order as few as three. One August 2026 visitor found the balls seemingly pre-cooked, with a hard skin. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Per Tabelog: a takoyaki shop at Takano with a website at takoyaki-kohaku.com; registered as an official listing by the shop. Reviewers describe an owner who chooses ingredients carefully, additive-free takoyaki of domestic wheat (2024–2025), and a kitchen car at an organic market event (May 2025).',
      philosophy: 'Additive-free, carefully chosen ingredients (2024–2025 reviews).', specialty: 'Takoyaki with Kyoto sesame sauce.',
      anecdotes: [
        { text: 'In May 2025 the shop ran a kitchen car at an organic-store anniversary event, with about fifteen people queuing.', source: R + 'B507291419/' },
        { text: 'A July 2024 fan called it the best takoyaki ever and pleaded for a Tokyo branch.', source: R + 'B488905487/' },
        { text: 'An August 2026 visitor ordering salt and sesame oil found the balls seemingly pre-cooked, with a hard skin.', source: R + 'B534234076/' },
      ],
      japanese_sources_summary: '食べログ: たこ焼き、左京区高野東開町11-1、叡山電鉄茶山駅から徒歩約6分、市バス「高野」すぐ、火〜日 12:00〜20:00、月曜定休、予約可、カード (VISA・JCB)・iD・QR 可、立ち食い4名 (カウンター)、テイクアウト、禁煙。口コミ (2024年7月〜2026年8月、英語): 北大路と東大路の角、無添加、国産小麦、だしのきいた生地、ふわとろ、大きなたこ、6個700円、ソース、京風ごまだれ、ねぎだし醤油、塩とごま油、サルサ、ジェノベーゼ、3個から注文可、イベントのキッチンカー、作り置きで皮が硬かったとの声 (2026年8月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B453940117/', R + 'B488905487/', R + 'B493818052/', R + 'B498970466/', R + 'B502078113/', R + 'B507291419/', R + 'B507602547/', R + 'B516191892/', R + 'B530348415/', R + 'B534234076/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter or takeaway; cards, iD and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区高野東開町11-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.040674, 135.782252); cross-checked: GSI 京都府京都市左京区高野東開町11番地 (lot) 14 m; nearest Kyoto record 164 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493818052/', R + 'B502078113/'],
    price_note: 'Prices from October 2024 and February 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki with sauce (6)', '¥700', 'Takoyaki', 'no', 'no', 'October 2024.', 'tako_sauce'),
      it('', '', 'Takoyaki with Kyoto-style sesame sauce (6)', '¥700', 'Takoyaki', 'no', 'no', 'October 2024.', 'tako_goma'),
      it('', '', 'Takoyaki with negi-dashi soy sauce (6)', '¥700', 'Takoyaki', 'no', 'no', 'February 2025.', 'tako_negi'),
    ] }, {
    cuisine: '国産小麦とだしのきいた生地の無添加のたこ焼き、中はふわとろで大きなたこ (2024〜2025年の口コミ)・6個700円、ソース、京風ごまだれ、ねぎだし醤油、塩とごま油、サルサ、ジェノベーゼなど、3個から注文できる (2024〜2025年の口コミ)・1,000円ほど (食べログ)',
    neighborhood: '北大路と東大路の角の高野。市バス「高野」すぐ',
    gf_detail: 'グルテンフリー不可。国産小麦の生地のたこ焼き (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしの生地のたこのたこ焼きに、かつお節 (2024〜2025年の口コミ)。',
    notes: '[たこ焼き・高野、北大路東大路の角] 国産小麦とだしのきいた生地で無添加のたこ焼きを焼くおしゃれな小さな店。ふわとろで大きなたこ。ソースや京風ごまだれから、ねぎだし醤油、サルサ、ジェノベーゼまで。3個から頼める。2026年8月の客は作り置きで皮が硬いと感じた。月曜休み。',
  });
}

// ================================================================ 喜らく Kiraku (Toei Kyoto Studio Park)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007727/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_kiraku_toei_uzumasa', name: '喜らく (Kiraku, Toei Kyoto Studio Park)', category: 'OMNI',
    lat: 35.016725, lng: 135.708101, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat ramen and tsukemen, curry ramen, fried chicken (2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broths, chashu, shumai and meat-wrapped rice balls (2024–2025 reviews).',
    hours_raw: 'Inside Toei Kyoto Studio Park (Toei Uzumasa Eigamura) — park admission is needed, and re-entry is not allowed (Tabelog; February 2025). 9:00–17:00 from 1 March to 30 November, 9:30–16:00 from 1 December to 28 February; closed 24–31 December; hours may change (Tabelog). Reservations for groups only (Tabelog). Cards, e-money and QR (Tabelog). 52 seats; non-smoking; parking at the park (Tabelog). 5 min walk from Uzumasa-Koryuji Stn, 13 min from JR Uzumasa Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside Toei Kyoto Studio Park, Uzumasa — 5 min walk from Uzumasa-Koryuji Stn',
    cuisine: 'Ramen canteen inside the film-set theme park, cheaper than other park eateries (2024–2025 reviews) · Uzumasa curry ramen ¥900, said to be praised by celebrities; Mito-han ramen ¥880 with green onion, chives, pickled shallot, garlic and ginger to add; miso ramen ¥800; cold tsukemen (2024–2025 reviews) · sets: ramen and seiro soba, fried chicken set meal, a Chinese steamed set of noodles, shumai and chimaki; kids ramen set ¥800; meat-wrapped rice balls (2024–2025 reviews) · collaboration menus with events such as Evangelion and Mito Komon (2024–2025 reviews) · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('喜らく 東映太秦映画村'), menu_url: null,
    notes: '[Ramen · inside Toei Kyoto Studio Park, Uzumasa] A family-friendly ramen canteen inside the Edo-period film-set park — you need a park ticket to eat here, with no re-entry. Curry ramen, Mito Komon-themed ramen with garlic and ginger to stir in, cold tsukemen, kids sets and collaboration specials, at prices lower than the park\'s other restaurants. One guest found the miso broth watery. Daytime only.',
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a ramen and tsukemen restaurant inside Toei Uzumasa Eigamura, with seasonal hours. Reviewers describe one of several eateries in the park, cheaper than the rest, with collaboration menus tied to park events (2024–2025).',
      philosophy: null, specialty: 'Uzumasa curry ramen; Mito-han ramen.',
      anecdotes: [
        { text: 'A February 2025 family, finding other park restaurants priced at ¥1,500–2,000 a set and unable to leave and re-enter, settled here for an ¥800 miso ramen.', source: R + 'B501967173/' },
        { text: 'A February 2024 Setsubun visitor with family found the curry ramen mild enough for children.', source: R + 'B480987590/' },
        { text: 'A February 2024 guest found the outside menu display did not match the sets offered inside.', source: R + 'B480074695/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン・つけ麺、右京区太秦東蜂ヶ岡町10 東映太秦映画村内、JR太秦駅から徒歩13分、太秦広隆寺駅から徒歩5分、3月1日〜11月30日 9:00〜17:00、12月1日〜2月28日 9:30〜16:00、12月24日〜31日休み、団体のみ予約可、カード・電子マネー・QR 可、52席、禁煙、駐車場あり。口コミ (2024年2月〜2025年10月、英語): 映画村の中 (入村料が必要、再入場不可)、ほかの店より安い、太秦カレーラーメン900円、水戸藩ラーメン880円 (ねぎ、にら、らっきょう、にんにく、生姜)、味噌ラーメン800円、冷やしつけ麺、ラーメンとせいろのセット、唐揚げ定食、中華蒸し物の定食 (中華そば、焼売、ちまき)、お子様ラーメンセット800円、肉巻きおにぎり、エヴァンゲリオンや水戸黄門のコラボメニュー、味噌のスープが薄いとの声。',
      confidence: 'medium', sources: [TB, R + 'B480074695/', R + 'B480987590/', R + 'B490871116/', R + 'B495711365/', R + 'B497033683/', R + 'B501967173/', R + 'B502261496/', R + 'B510496217/', R + 'B513118049/', R + 'B515597461/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Inside a theme park — park ticket needed, no re-entry; picture menu outside; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市右京区太秦東蜂ヶ岡町10 東映太秦映画村内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review October 2025.' },
    pin_source: `Tabelog ${TB} (35.016725, 135.708101); cross-checked: GSI 京都府京都市右京区太秦東蜂岡町10番地 (lot, the park) 98 m; nearest Kyoto record 381 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480987590/', R + 'B501967173/'],
    price_note: 'Prices from February 2024 and February 2025 reviews; park admission extra.', last_checked: TODAY, items: [
      it('', '', 'Uzumasa curry ramen', '¥900', 'Ramen', 'no', 'no', 'February 2024.', 'curry_ramen'),
      it('', '', 'Mito-han ramen', '¥880', 'Ramen', 'no', 'no', 'February 2024.', 'mitohan_ramen'),
      it('', '', 'Miso ramen', '¥800', 'Ramen', 'no', 'no', 'February 2025.', 'miso_ramen'),
      it('', '', 'Kids ramen set', '¥800', 'Kids', 'no', 'no', 'February 2024.', 'kids_set'),
    ] }, {
    cuisine: '時代劇の映画村の中のラーメンの店、村内のほかの店より安い (2024〜2025年の口コミ)・有名人も褒めたという太秦カレーラーメン900円、ねぎ、にら、らっきょう、にんにく、生姜を加える水戸藩ラーメン880円、味噌ラーメン800円、冷やしつけ麺 (2024〜2025年の口コミ)・セット: ラーメンとせいろ、唐揚げ定食、中華そば・焼売・ちまきの中華蒸し物の定食、お子様ラーメンセット800円、肉巻きおにぎり (2024〜2025年の口コミ)・エヴァンゲリオンや水戸黄門などイベントのコラボメニュー (2024〜2025年の口コミ)・1,000円未満 (食べログ)',
    neighborhood: '太秦の東映太秦映画村の中。太秦広隆寺駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦のラーメンとつけ麺、カレーラーメン、唐揚げ (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉のスープ、チャーシュー、焼売、肉巻きおにぎり (2024〜2025年の口コミ)。',
    notes: '[ラーメン・太秦の東映太秦映画村の中] 江戸の時代劇の映画村の中の家族向けのラーメンの店。入村券が必要で再入場はできない。カレーラーメン、にんにくや生姜を加える水戸黄門にちなんだラーメン、冷やしつけ麺、お子様セット、コラボの限定メニューを、村内のほかの店より安く。味噌のスープが薄いと感じた客も。昼間のみ。',
  });
}

// ================================================================ M&Maison KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030947/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['08:00', '15:00']); const WE = day(['07:30', '15:00']);
  put({
    id: 'kyoto_m_and_maison_gojo', name: 'M&Maison KYOTO', category: 'OMNI',
    lat: 34.993672, lng: 135.761041, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese breakfast sets of grilled fish, small vegetable dishes, tamagoyaki, sesame tofu, miso soup and rice; side dishes are not explained in detail (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sets centre on grilled or raw fish, tamagoyaki and dashi-based miso soup (2026 reviews).',
    hours_raw: 'Monday–Friday 8:00–15:00; Saturday–Sunday 7:30–15:00; last order 14:30; irregular closing days (Tabelog). Reservations accepted, online; advised for holiday mornings (Tabelog; September 2026). English menu (Tabelog). Cards, e-money and QR (Tabelog). 22 seats: 6 at the counter and one table on the 1F, three tables on the 2F; non-smoking; coin parking next door (Tabelog). A tiled roof and a wooden sign with a fish mark on Rokujo-dori; 5 min walk from Gojo Stn, 10 from Kyoto Station (Tabelog; 2026 reviews).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokujo-dori by Gojo Stn — 10 min walk from Kyoto Station',
    cuisine: 'Breakfast and lunch sets of seasonal Kyoto food, born as a Kyoto version of the New York Japanese restaurant OKONOMI (Tabelog; November 2026) · ichiju sansai ¥1,870 and ichiju gosai ¥2,310: miso soup, grilled fish such as mackerel or horse mackerel (or sashimi), and small dishes like beet potato salad, sesame tofu and tamagoyaki (July–November 2026) · rice upgradable to corn rice or onigiri for a charge (July 2026) · about ¥2,000–3,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('M&Maison KYOTO 五条'), menu_url: null,
    notes: '[Japanese breakfast · Rokujo by Gojo Stn] A tiled-roof restaurant near Kyoto Station serving a ryokan-style Japanese breakfast from 7:30 at weekends: grilled fish with miso soup and three or five seasonal small dishes, and a praised corn rice. A reviewer calls it the New York eatery OKONOMI brought back to Kyoto; English menu. Some find it a little pricey or average; one found the miso soup lukewarm. Book for holidays.',
    chef_bio: { chef_name: null, roles: ['Kitchen at the open counter and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a breakfast set restaurant to experience the seasons of Kyoto; registered as an official listing by the operator. A November 2026 reviewer says it was born from bringing the New York Japanese eatery OKONOMI back to Kyoto; July 2026 reviewers note its popularity for breakfast.',
      philosophy: 'Experience the seasons of Kyoto at breakfast (Tabelog).', specialty: 'Ichiju gosai breakfast; corn rice.',
      anecdotes: [
        { text: 'A July 2026 guest wished the grilled corn rice were sold as onigiri, and likened the meal to a ryokan breakfast.', source: R + 'B533261314/' },
        { text: 'A September 2026 couple found the service attentive but the first miso soup lukewarm.', source: R + 'B535954202/' },
        { text: 'An October 2026 diner thought it aimed at inbound tourists, with no explanation of the side dishes and nothing especially Kyoto about it.', source: R + 'B538484573/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮・カフェ・イノベーティブ、下京区橋詰町143、地下鉄五条駅から徒歩5分、JR京都駅から徒歩10分、月〜金 8:00〜15:00、土日 7:30〜15:00、L.O.14:30、不定休、予約可、カード・電子マネー・QR 可、22席 (1階 カウンター6・テーブル1、2階 テーブル3)、禁煙、隣にコインパーキング、京都の四季を感じる朝食の定食の店。口コミ (2026年7月〜11月、英語): 六条通、瓦屋根と魚の印の木の看板、ニューヨークの和食店「OKONOMI」を京都に逆輸入、一汁三菜1,870円、一汁五菜2,310円、焼き魚 (鯖、鯵) かお造り、ビーツのポテトサラダ、胡麻豆腐、卵焼き、とうもろこしご飯、旅館のような朝食、外国人客も、ご飯はおにぎりやとうもろこしご飯に追加料金で変更可、価格はやや高め・味噌汁がぬるかった・小鉢の説明がない・味は普通との声、人気なので予約を。英語メニューあり (食べログ)。',
      confidence: 'medium', sources: [TB, R + 'B532550397/', R + 'B533261314/', R + 'B533459244/', R + 'B533497187/', R + 'B535488394/', R + 'B535954202/', R + 'B536531071/', R + 'B536749943/', R + 'B538484573/', R + 'B538581828/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); some overseas guests; book for holidays; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区橋詰町143',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (34.993672, 135.761041); cross-checked: GSI 京都府京都市下京区橋詰町143番地 (lot) 18 m; nearest Kyoto record 120 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533459244/', R + 'B538581828/'],
    price_note: 'Prices from July and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ichiju sansai (soup and three dishes)', '¥1,870', 'Breakfast', 'ask', 'no', 'July 2026.', 'ichiju_sansai'),
      it('', '', 'Ichiju gosai (soup and five dishes)', '¥2,310', 'Breakfast', 'ask', 'no', 'November 2026.', 'ichiju_gosai'),
    ] }, {
    cuisine: 'ニューヨークの和食店 OKONOMI を京都で、京都の季節の朝食と昼の定食 (食べログ、2026年11月)・一汁三菜1,870円、一汁五菜2,310円: 味噌汁、鯖や鯵などの焼き魚 (かお造り)、ビーツのポテトサラダ、胡麻豆腐、卵焼きなどの小鉢 (2026年7〜11月)・ご飯は追加料金でとうもろこしご飯やおにぎりにできる (2026年7月)・2,000〜3,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '五条駅近くの六条通。京都駅から徒歩10分',
    gf_detail: '要確認。焼き魚、野菜の小鉢、卵焼き、胡麻豆腐、味噌汁、ご飯の和の朝食。小鉢の詳しい説明はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き魚やお造り、卵焼き、だしの味噌汁が中心 (2026年の口コミ)。',
    notes: '[和の朝食・五条駅近くの六条] 京都駅近くの瓦屋根の店で、週末は7時半から旅館のような和の朝食。焼き魚と味噌汁に季節の小鉢を3品か5品、評判のとうもろこしご飯。口コミではニューヨークの OKONOMI を京都に逆輸入した店。英語メニューあり。やや高い、普通と感じる人もいて、味噌汁がぬるかった客も。休日は予約を。',
  });
}

// ================================================================ すしてつ 先斗町店 Sushi Tetsu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002981/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '24:00']); const WE = day(['12:00', '24:00']);
  put({
    id: 'kyoto_sushitetsu_pontocho', name: 'すしてつ 先斗町店 (Sushi Tetsu Pontocho)', category: 'OMNI',
    lat: 35.008233, lng: 135.771298, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte nigiri with soy; small cooked dishes such as kinpira and ganmodoki as otoshi; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi bar; natto and egg are on the nigiri list, but most items are fish and shellfish (2026 reviews).',
    hours_raw: 'Monday–Friday 17:00–24:00; Saturday, Sunday and holidays 12:00–24:00; last order 23:30; closed 31 December–1 January; hours can change with supply (Tabelog). Reservations only for tatami seating for 4 or more; otherwise write your name on the board and queue — a line of about 30 at 19:00 one September evening; a 60-minute last order (August 2026) or a 90-minute limit (October 2026). A seat fee of ¥324 (Tabelog original (御席料)324円); an appetizer (otoshi) is served (June and October 2026). Cards and QR; no e-money (Tabelog). 52 seats with counter, tables and tatami, some with a Kamo River view; non-smoking (Tabelog; September 2026). 1F of the Karafuneya Pontocho building, Pontocho south of Sanjo; 5 min walk from Sanjo Stn (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo, on the Kamo River — 5 min walk from Sanjo Stn',
    cuisine: 'Value à la carte sushi by the Kamo River, two pieces a plate (2026 reviews) · nigiri plates about ¥280 for two, with chutoro priced like the rest; wagyu sushi ¥500 for two (October 2026) · e.g. shime saba, akami, chutoro, akagai, engawa, tsubugai, uni, aji, kanpachi, scallop, white fish, gunkan, natto and egg (2026 reviews) · sashimi; an otoshi such as kinpira or aosa ganmodoki (June and October 2026) · about ¥3,000–3,999 (2026 reviews)',
    website: null, gmaps: gm('すしてつ 先斗町店'), menu_url: null,
    notes: '[Sushi · Pontocho on the Kamo River, queue and eat] A busy, cheerful sushi bar by the river where most nigiri — chutoro included — cost about ¥280 for two, plus wagyu sushi and fresh akagai; most reviewers spent ¥3,000–3,999. No bookings except tatami for four or more: write your name and wait, with time limits when busy. Table service can lag behind the counter. ¥324 seat fee. Open till midnight.',
    chef_bio: { chef_name: null, roles: ['Sushi chefs at the counter and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a sushi bar in the Karafuneya Pontocho building, with hours that change with supply. Reviewers in 2026 describe long queues, a mix of Japanese and overseas guests, a pleasant chef, and prices only a little above conveyor-belt sushi.',
      philosophy: null, specialty: 'Value nigiri; wagyu sushi.',
      anecdotes: [
        { text: 'A June 2026 diner noted that chutoro costs the same as natto and joked that this was unfair to the natto.', source: R + 'B531859502/' },
        { text: 'A September 2026 repeat visitor arrived 30 minutes before opening and was the seventh group in line.', source: R + 'B504722855/' },
        { text: 'At 19:00 in September 2026 there was a line of about thirty, half Japanese and half overseas visitors.', source: R + 'B535743915/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、中京区先斗町三条下ル石屋町133-1 からふね屋先斗町ビル 1F、京阪三条駅から徒歩5分、阪急河原町駅から徒歩10分、月〜金 17:00〜24:00、土日祝 12:00〜24:00、L.O.23:30、12月31日・1月1日休み、仕入れで営業時間が変わることあり、予約は座敷4名以上のみ、御席料324円、52席、禁煙、カード・QR 可、電子マネー不可。口コミ (2026年6月〜10月、英語): 鴨川沿い、名前を書いて順番待ち、開店前から行列、夜7時に約30人、60分または90分の制限、2貫で1皿、280円ほど、中トロもほかと同じ値段、和牛の寿司2貫500円、しめ鯖、赤身、赤貝、えんがわ、つぶ貝、雲丹、鯵、かんぱち、帆立、軍艦、納豆、玉子、お通し (きんぴら、あおさのがんもどき)、テーブルはカウンターより提供が遅いとの声。',
      confidence: 'medium', sources: [TB, R + 'B504722855/', R + 'B531859502/', R + 'B532059184/', R + 'B532192326/', R + 'B534661852/', R + 'B535551430/', R + 'B535551537/', R + 'B535743915/', R + 'B537268793/', R + 'B538173543/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Write your name and queue; time limits when busy; ¥324 seat fee; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区先斗町三条下ル石屋町133-1 からふね屋先斗町ビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008233, 135.771298); GSI matched only the town 石屋町, at a point about 1 km north, so loc_precise false; kyoto_pontocho_sushi_yoshino is 28 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537268793/'],
    price_note: 'Prices from an October 2026 review; plus a ¥324 seat fee.', last_checked: TODAY, items: [
      it('', '', 'Nigiri (two pieces a plate)', '¥280', 'Nigiri', 'ask', 'no', 'October 2026.', 'nigiri'),
      it('', '', 'Wagyu sushi (two pieces)', '¥500', 'Nigiri', 'ask', 'no', 'October 2026.', 'wagyu_sushi'),
    ] }, {
    cuisine: '鴨川沿いのお手頃なアラカルトのすし、1皿2貫 (2026年の口コミ)・握りは2貫で280円ほど、中トロもほかと同じ値段、和牛の寿司は2貫500円 (2026年10月)・例: しめ鯖、赤身、中トロ、赤貝、えんがわ、つぶ貝、雲丹、鯵、かんぱち、帆立、白身、軍艦、納豆、玉子 (2026年の口コミ)・刺身、きんぴらやあおさのがんもどきなどのお通し (2026年6月・10月)・3,000〜3,999円ほど (2026年の口コミ)',
    neighborhood: '三条の南の先斗町、鴨川沿い。三条駅から徒歩5分',
    gf_detail: '要確認。醤油で食べるアラカルトの握り、お通しにきんぴらやがんもどき。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。すしの店。納豆や玉子の握りもあるが、ほとんどが魚介 (2026年の口コミ)。',
    notes: '[すし・鴨川沿いの先斗町、並んで食べる] 川沿いのにぎやかな気取らないすしの店。中トロも含めほとんどの握りが2貫280円ほどで、和牛の寿司や新鮮な赤貝も。口コミでは1人3,000円台。予約は座敷4名以上のみで、ふだんは名前を書いて待ち、混むと時間制限あり。テーブル席はカウンターより提供が遅いことも。御席料324円。深夜0時まで。',
  });
}

save();
