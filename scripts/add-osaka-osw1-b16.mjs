// Osaka sweep (2-mile circle around Dotonbori), REST phase; worker osw1 (lane: Tabelog id mod 4 = 0), batch 16.
//   + たこやき王子 難波道頓堀店 Takoyaki Ouji (takoyaki in many flavours and kushikatsu, upstairs on Dotonbori)
//   + 万菓堂 心斎橋店 Manka Do (mitarashi mochi pie and mitarashi mochi to go, Shinsaibashi-suji by Ebisubashi)
//   + 黒毛和牛焼肉善 難波心斎橋店 ZEN (all-you-can-eat black wagyu yakiniku, shabu-shabu and sukiyaki in private rooms, 2023)
//   + 縁 En (Shanghai-style Chinese in a retro basement opposite the Shochikuza, 2025)
//   - skip(): 鳥貴族 道頓堀店, Happy's Cafe, カラオケ804 心斎橋Balinese, 京都利休の生わらび餅 道頓堀店, しゃぶしゃぶ温野菜 道頓堀店,
//     GiGOのたい焼き 大阪道頓堀本店 (reasons in each skip()).
//   Lane: `queue.mjs osaka next rest 600`, mod-4 = 0, in order: 27026844 skip, 27138184 skip, 27099548 +, 27157996 六美麻辣湯
//   道頓堀店 left undecided (opened June 2026; a 六美 malatang also trades in Fukushima per a web article, shop count unknown),
//   27049412 skip, 27134452 skip, 27009456 skip, 27093548 +, 27137596 +, 27155820 skip, 27146844 +.
//   Chain check for the four kept:
//   - たこやき王子: two shops in shops.jsonl (this and 京都木屋町 26027105). Not in data.
//   - 万菓堂: one shop in shops.jsonl; web search found only this shop.
//   - 黒毛和牛焼肉善: three Namba shops in shops.jsonl (難波千日前 27096564, 難波心斎橋, 難波道頓堀 27128125); gnavi lists the
//     Namba-Shinsaibashi and なんば shops. Kept as a small group; none in data.
//   - 縁: one shop; not the same as 創作中華 縁 (osaka_sosaku_chuka_enishi, address_ja "東心斎橋1-18-2 山本ビル B1F").
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27026844', 'Chain: 鳥貴族 has 37 shops in shops.jsonl alone (Osaka, Kyoto and more).');
skip('27138184', 'No reviews in 2025–26: the only two Tabelog reviews are dated September and November 2023; existence and basics cannot be sourced for a full record.');
skip('27049412', 'Karaoke venue with no Tabelog reviews; nothing to source a dining record from.');
skip('27134452', 'No reviews in 2025–26 (two reviews, December 2022 and February 2023); also a chain (京都利休の生わらび餅, kyoto-rikyu.jp, with a second Osaka shop 南船場店 27130834).');
skip('27009456', 'Chain: しゃぶしゃぶ温野菜 has eight shops in shops.jsonl alone (道頓堀, 千日前, 心斎橋, Kyoto, Tokyo …).');
skip('27155820', 'Too thin for a full record: three Tabelog reviews; a takeaway taiyaki stand of the GiGO arcade brand (gigo.co.jp).');

// ================================================================ たこやき王子 難波道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27099548/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_takoyaki_ouji_dotonbori', name: 'たこやき王子 難波道頓堀店 (Takoyaki Ouji)', category: 'OMNI',
    lat: 34.668834, lng: 135.501732, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki is wheat batter and kushikatsu is battered and fried.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: takoyaki is made with octopus and dashi.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30); open year-round (Tabelog). Reservations accepted; no seat charge (Tabelog). Cards, e-money and QR payments (Tabelog). 80 seats with counter and sofas; designated smoking area without partition (Tabelog). Children welcome (Tabelog). Walk-ins usually seated at once even when Dotonbori is packed (February–March 2026), though a queue formed by 1 p.m. on an October 2025 Sunday.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-6-15, コムラードドウトンビル 3F, mid-Dotonbori — 5 min from Namba Stn',
    cuisine: 'Takoyaki izakaya with kushikatsu and okonomiyaki (Tabelog) · takoyaki in many toppings: sauce, green onion and mayo ¥484, sauce, green onion and mentaiko mayo ¥539, salt, green onion and mayo ¥484, ponzu, green onion and mayo ¥484; a dashi flavour (October 2025–March 2026) · kushikatsu such as shrimp, lotus root, quail egg and banana, with sauce on the table; dote-yaki ¥451 (October 2025–July 2026) · bottled beer ¥792; drinks around ¥500; no all-you-can-drink (October 2025; February 2026)',
    website: 'http://takoyakioji.jacklist.jp/', gmaps: gm('たこやき王子 難波道頓堀店'), menu_url: null,
    notes: "[Takoyaki · Dotonbori, a sit-down takoyaki bar up the stairs] A big, casual takoyaki izakaya on the third floor of a building in the middle of Dotonbori, where you can sit down for takoyaki when the street stands are mobbed. Order several kinds: sauce with green onion and mayo, salt or ponzu with green onion (all ¥484 in October 2025), or mentaiko mayo (¥539), plus kushikatsu from shrimp and quail egg to a banana skewer, and dote-yaki. It is cheap for food, less so for drinks (about ¥500 each, February 2026). Opinions run from delicious to average. Often easy to walk into, with a younger and international crowd. Smoking area without partition.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: izakaya, kushiage and okonomiyaki in the middle of Dotonbori, 80 seats, open 11:00–23:00 year-round; a sister shop in Kyoto Kiyamachi (shops.jsonl).', philosophy: null, specialty: 'Takoyaki in several flavours; kushikatsu.',
      anecdotes: [
        { text: '"This was my first time trying takoyaki with salt, and it was packed with umami flavor—so delicious!" — October 2025.', source: R + 'B515346166/' },
        { text: '"While the Dotonbori bridge (near Glico) was extremely crowded, I was able to enter this place without waiting." — February 2026.', source: R + 'B523617500/' },
        { text: '"I jokingly tried a banana skewer, and surprisingly, it was quite good!" — March 2026.', source: R + 'B524924802/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): たこやき王子 難波道頓堀店、居酒屋・串揚げ・お好み焼き、大阪市中央区道頓堀1-6-15 コムラードドウトンビル 3F、なんば駅から徒歩5分、毎日11:00〜23:00 (L.O.22:30)、年中無休、予約可、サービス料なし、カード・電子マネー・QR 可、80席、分煙 (仕切りなし)、子ども可。口コミ(2025年10月〜2026年7月): ソースねぎマヨ484円、ソースねぎ明太マヨ539円、塩ねぎマヨ484円、ポン酢ねぎマヨ484円、だしの味、どて焼き451円、瓶ビール792円、えび・れんこん・うずら・バナナの串カツ、飲み物は500円ほどで飲み放題なし、道頓堀が混んでいてもすぐ入れた日が多い、日曜の昼には行列も、若い客と海外の客が多い、味はふつうという声も。',
      confidence: 'medium', sources: [TB, R + 'B508434147/', R + 'B514957123/', R + 'B515346166/', R + 'B520072746/', R + 'B520600274/', R + 'B523617500/', R + 'B524686721/', R + 'B524924802/', R + 'B524935886/', R + 'B525398281/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests (July 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区道頓堀1-6-15 コムラードドウトンビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番15号 (go) 11m. Same building as ぼてぢゅう 本店 (osaka_botejyu_honten_dotonbori, address_ja "大阪府大阪市中央区道頓堀1-6-15 Comradeドウトンビル 2F"), pinned 4 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515346166/'],
    price_note: 'Prices from an October 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, sauce, green onion and mayo', '¥484', 'Takoyaki', 'no', 'no', 'October 2025 review.', 'takoyaki_sauce_negi'),
      it('', '', 'Takoyaki, salt, green onion and mayo', '¥484', 'Takoyaki', 'no', 'no', 'October 2025 review.', 'takoyaki_shio_negi'),
      it('', '', 'Takoyaki, sauce, green onion and mentaiko mayo', '¥539', 'Takoyaki', 'no', 'no', 'October 2025 review.', 'takoyaki_mentai'),
      it('', '', 'Dote-yaki', '¥451', 'Dishes', 'ask', 'no', 'October 2025 review.', 'dote_yaki'),
    ] }, {
    cuisine: '串カツやお好み焼きもあるたこ焼きの居酒屋 (食べログ)・たこ焼きはいろいろな味: ソースねぎマヨ484円、ソースねぎ明太マヨ539円、塩ねぎマヨ484円、ポン酢ねぎマヨ484円、だしの味も (2025年10月〜2026年3月)・えび、れんこん、うずら、バナナなどの串カツ、ソースはテーブルに。どて焼き451円 (2025年10月〜2026年7月)・瓶ビール792円、飲み物は500円ほどで飲み放題はない (2025年10月、2026年2月)',
    neighborhood: '道頓堀1-6-15、コムラードドウトンビル3階、道頓堀のまん中。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。たこ焼きは小麦の生地、串カツは衣の揚げ物。',
    vegan_detail: 'ヴィーガンではありません。たこ焼きにはたことだしを使う。',
    notes: '[たこ焼き・道頓堀、階段の上の座って食べるたこ焼きの店] 道頓堀のまん中のビルの3階にある、広くカジュアルなたこ焼きの居酒屋で、通りの屋台が混んでいるときも座ってたこ焼きを食べられる。何種類か頼むのがおすすめで、ソースねぎマヨ、塩やポン酢のねぎマヨ (2025年10月はどれも484円)、明太マヨ (539円)。えびやうずらからバナナまでの串カツ、どて焼きも。料理は安く、飲み物は1杯500円ほど (2026年2月)。おいしいという声もふつうという声も。すぐ入れることが多く、若い客や海外の客が多い。仕切りのない喫煙席あり。',
  });
}

// ================================================================ 万菓堂 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27093548/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '22:00']);
  put({
    id: 'osaka_mankado_shinsaibashi', name: '万菓堂 心斎橋店 (Manka Do)', category: 'OMNI',
    lat: 34.669536, lng: 135.501398, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the best-seller is a wheat pastry pie, and mitarashi sauce is soy-sauce based.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The pie is pastry around mochi, mitarashi sauce and red bean paste; ask about butter in the pastry.',
    hours_raw: 'Daily 10:00–22:00; hours may change (Tabelog). No reservations (Tabelog). Cards and QR payments; no e-money (Tabelog). Takeaway shop: there are benches inside but eating in is not allowed (April 2026). Pies are warmed for you (December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-3-19, at the Ebisubashi end of the shopping arcade near the Glico sign — about 5 min from Namba Stn',
    cuisine: 'Japanese sweets and souvenir shop known for mitarashi mochi (2025–2026 reviews) · mitarashi mochi pie: crisp pastry around mochi filled with mitarashi sauce and red bean paste, warmed on request, ¥300 (July 2025), ¥320 (January 2026), about ¥350–380 (April 2026) · mitarashi mochi, which keeps three days (October 2026)',
    website: null, gmaps: gm('万菓堂 心斎橋店'), menu_url: null,
    notes: "[Sweets · Shinsaibashi-suji, mitarashi mochi pie to go] A long-established sweets and souvenir counter at the Ebisubashi end of the Shinsaibashi-suji arcade, a few steps from the Glico sign, where the thing to buy is the mitarashi mochi pie: flaky pastry around chewy mochi, sweet-soy mitarashi sauce and red bean paste, handed over warm. It cost ¥300 in July 2025 and about ¥350–380 by April 2026. Eat it walking (no eating inside, and it crumbles), or warm it briefly in a microwave or toaster later. The plain mitarashi mochi is good too but keeps only three days. One reviewer found the mitarashi flavour slow to arrive behind the pastry and bean paste. Open daily 10 a.m. to 10 p.m.",
    chef_bio: { chef_name: null, roles: ['Shop staff (unnamed)'], origin: null, background: 'Tabelog: Japanese traditional sweets shop on Shinsaibashi-suji, open 10:00–22:00 daily, takeaway. Reviews (2025–2026) call it a long-established confectioner specialising in mitarashi mochi.', philosophy: null, specialty: 'Mitarashi mochi pie; mitarashi mochi.',
      anecdotes: [
        { text: '"The pie is filled with mochi, so it takes a while to get to the Mitarashi flavor." — July 2025, ¥300.', source: R + 'B512828081/' },
        { text: '"Inside, there\'s sweet red bean paste, and the pie itself is crispy and absolutely delicious!" — December 2025; the pie is handed over warm.', source: R + 'B519081520/' },
        { text: '"Although there are benches inside the store, eating there is prohibited, so I opted for a walk while enjoying my food." — April 2026.', source: R + 'B526551541/' },
      ],
      japanese_sources_summary: '食べログ: 万菓堂 心斎橋店、和菓子、大阪市中央区心斎橋筋2-3-19、毎日10:00〜22:00、予約不可、カード・QR 可、電子マネー不可。口コミ(2025年7月〜2026年10月): みたらしの餅のパイ (サクサクのパイに餅、みたらしのたれ、あんこ、温めてくれる) 300円 (2025年7月)、320円 (2026年1月)、350〜380円ほど (2026年4月)、グリコの看板の裏の老舗、心斎橋筋の商店街の端、店内にベンチはあるが店内での飲食は不可、みたらし餅は日持ち3日、電子レンジやトースターで温めるとよい、みたらしの味にたどりつくまでが長いという声。',
      confidence: 'medium', sources: [TB, R + 'B510414036/', R + 'B512828081/', R + 'B519031536/', R + 'B519081520/', R + 'B520236914/', R + 'B523435717/', R + 'B525934946/', R + 'B526551541/', R + 'B536291578/', R + 'B537005612/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway counter; point and pay. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番19号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512828081/', R + 'B520236914/', R + 'B525934946/'],
    price_note: 'Three dated prices for the same pie, July 2025 to April 2026.', last_checked: TODAY, items: [
      it('', '', 'Mitarashi mochi pie', '¥320', 'Sweets', 'no', 'ask', 'January 2026 review; ¥300 in July 2025, about ¥350–380 in April 2026.', 'mitarashi_pie'),
      it('', '', 'Mitarashi mochi', '', 'Sweets', 'no', 'ask', 'October 2026 review.', 'mitarashi_mochi'),
    ] }, {
    cuisine: 'みたらし餅で知られる和菓子とおみやげの店 (2025〜2026年の口コミ)・みたらしの餅のパイ: サクサクのパイに餅とみたらしのたれとあんこ、頼めば温めてくれる、300円 (2025年7月)、320円 (2026年1月)、350〜380円ほど (2026年4月)・日持ち3日のみたらし餅 (2026年10月)',
    neighborhood: '心斎橋筋2-3-19、グリコの看板近くの商店街の戎橋側の端。なんば駅から5分ほど',
    gf_detail: 'グルテンフリーではありません。一番人気は小麦のパイで、みたらしのたれは醤油ベース。',
    vegan_detail: '要確認。ヴィーガンの情報なし。パイは餅、みたらしのたれ、あんこを包んだもので、生地のバターは確認を。',
    notes: '[和菓子・心斎橋筋、持ち帰りのみたらし餅のパイ] 心斎橋筋の商店街の戎橋側の端、グリコの看板のすぐ近くの老舗の和菓子とおみやげの店で、買うべきはみたらしの餅のパイ。サクサクのパイに、もちもちの餅、甘辛いみたらしのたれ、あんこが入り、温めて渡してくれる。2025年7月は300円、2026年4月には350〜380円ほど。店内では食べられないので歩きながら (崩れやすい)、あとで電子レンジやトースターで少し温めても。みたらし餅もおいしいが日持ちは3日。パイと餡のあとでやっとみたらしの味が来るという声も。毎日朝10時から夜10時まで。',
  });
}

// ================================================================ 黒毛和牛焼肉善 難波心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27137596/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '01:00']); const WE = day(['11:30', '01:00']);
  put({
    id: 'osaka_yakiniku_zen_namba_shinsaibashi', name: '黒毛和牛焼肉善 難波心斎橋店 (ZEN Nanba Shinsaibashi)', category: 'OMNI',
    lat: 34.669549, lng: 135.501689, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakiniku sauces, sukiyaki warishita and shabu-shabu dips are usually soy-based; one diner chose it to avoid flour-based food (September 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: all-you-can-eat black wagyu.',
    hours_raw: 'Mon–Fri 17:00–1:00; Sat, Sun and holidays 11:30–1:00; last order 24:00 (Tabelog). Reservations accepted, also on the day (Tabelog; July 2025). Starter ¥330 when ordering à la carte only (Tabelog). Cards, e-money and QR payments (Tabelog). 90 seats, all in private rooms; non-smoking; children welcome, kids menu; wheelchair accessible (Tabelog). English menu (Tabelog). Orders by mobile (September 2025). Opened 1 September 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-3-15, 戎橋Northビル 3F, by Ebisubashi — 3 min from Namba Stn',
    cuisine: 'All-you-can-eat A4-grade-or-better black wagyu bought whole, as yakiniku, shabu-shabu or sukiyaki, in private rooms (Tabelog) · courses from ¥4,180 (yakiniku "Manpuku", premium shabu-shabu, sukiyaki) with all-you-can-drink from +¥1,650; children 3–6 ¥550, primary pupils ¥2,035 (Tabelog) · sukiyaki special course ¥5,830 (August 2025); yakiniku with drinks ¥5,500 (December 2025) · courses include salad, kimchi and dessert; rice size chosen once, no refills (August 2025); beef tongue in some courses (October 2025); outside skirt sliced and as steak (October 2026)',
    website: null, gmaps: gm('黒毛和牛焼肉善 難波心斎橋店'), menu_url: null,
    notes: "[Yakiniku · Ebisubashi, all-you-can-eat wagyu in private rooms] An all-you-can-eat black wagyu restaurant on the third floor by Ebisubashi, three minutes from Namba Station, where every table is a private room and you choose yakiniku, shabu-shabu or sukiyaki. Courses start at ¥4,180 (all-you-can-drink from ¥1,650 more), with salad, kimchi and dessert. Reviews are mixed. An October 2026 diner loved the outside skirt and the shabu-shabu and praised the English-speaking manager. Others since 2025 reported missed or wrong orders, no rice refills, and meat some found heavy or average. One March 2026 diner found that a coupon for ¥500 drinks meant ¥500 off. Busy with travellers; open to 1 a.m.",
    chef_bio: { chef_name: null, roles: ['Manager and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: the Shinsaibashi branch of Kuroge Wagyu Zen; A4-or-better black wagyu bought whole; all-you-can-eat yakiniku, sukiyaki and shabu-shabu from ¥3,800; private table rooms for up to 50; opened 1 September 2023. Two other Namba shops in shops.jsonl (難波千日前, 難波道頓堀).', philosophy: null, specialty: 'All-you-can-eat black wagyu yakiniku, shabu-shabu and sukiyaki.',
      anecdotes: [
        { text: '"The manager and the waiter were kind, the service was excellent" — October 2026; both spoke fluent English.', source: R + 'B536631397/' },
        { text: '"I thought there might be a chance for a refill, but it turns out refills are not allowed!" — August 2025, on rice.', source: R + 'B512116183/' },
        { text: '"On a certain reservation site, the coupon clearly stated \'All you can drink alcohol for JPY 500,\'" — March 2026; the shop treated it as ¥500 off.', source: R + 'B523678403/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 黒毛和牛焼肉善 難波心斎橋店、焼肉・しゃぶしゃぶ・すき焼き、大阪市中央区心斎橋筋2-3-15 戎橋Northビル 3F、なんば駅から徒歩3分、月〜金17:00〜翌1:00、土日祝11:30〜翌1:00 (L.O.24:00)、予約可、単品のみ付き出し330円、カード・電子マネー・QR 可、90席 (全席個室)、禁煙、子ども可、英語のメニュー、2023年9月1日オープン。店の紹介 (英訳): A4ランク以上の黒毛和牛を一頭買い、焼肉・すき焼き・しゃぶしゃぶの食べ放題、コースは4,180円から、飲み放題は1,650円から、子ども550円と2,035円。口コミ(2025年7月〜2026年10月): すき焼きのコース5,830円、飲み放題つき焼肉5,500円、サラダ、キムチ、デザート、ご飯はおかわり不可、牛タン、外ハラミ、スマホで注文、注文が通っていなかった・違う飲み物が来たという声、肉が重い・ふつうという声、クーポンの「飲み放題500円」が500円引きの意味だったという声、英語の上手な店長とスタッフをほめる声、旅行客が多い。',
      confidence: 'medium', sources: [TB, R + 'B510844754/', R + 'B511752250/', R + 'B512116183/', R + 'B513247711/', R + 'B513697444/', R + 'B516538521/', R + 'B518529864/', R + 'B523678403/', R + 'B525289218/', R + 'B536631397/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); English-speaking manager and staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-15 戎橋Northビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B511752250/'],
    price_note: 'Course prices from the Tabelog listing (2026) and an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat black wagyu yakiniku course', '¥4,180', 'Courses', 'ask', 'no', 'Tabelog listing.', 'yakiniku_tabehodai'),
      it('', '', 'All-you-can-eat premium shabu-shabu course', '¥4,180', 'Courses', 'ask', 'no', 'Tabelog listing.', 'shabu_tabehodai'),
      it('', '', 'All-you-can-eat sukiyaki special course', '¥5,830', 'Courses', 'ask', 'no', 'August 2025 review.', 'sukiyaki_tabehodai'),
    ] }, {
    cuisine: '一頭買いの A4ランク以上の黒毛和牛の食べ放題で、焼肉、しゃぶしゃぶ、すき焼きを個室で (食べログ)・コースは4,180円から (焼肉の「満腹」、プレミアムしゃぶしゃぶ、すき焼き)、飲み放題は1,650円から追加。子どもは3〜6歳550円、小学生2,035円 (食べログ)・すき焼きのスペシャルコース5,830円 (2025年8月)。飲み放題つきの焼肉5,500円 (2025年12月)・コースにはサラダ、キムチ、デザート。ご飯は最初に量を選び、おかわりはできない (2025年8月)。牛タンの入るコース (2025年10月)。外ハラミのスライスとステーキ (2026年10月)',
    neighborhood: '心斎橋筋2-3-15、戎橋Northビル3階、戎橋のそば。なんば駅から3分',
    gf_detail: '要確認。グルテンの情報なし。焼肉のたれ、すき焼きの割り下、しゃぶしゃぶのたれは一般に醤油ベース。粉ものを避けたくて選んだという人も (2025年9月)。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の食べ放題。',
    notes: '[焼肉・戎橋、個室で和牛の食べ放題] なんば駅から3分、戎橋のそばのビルの3階の黒毛和牛の食べ放題の店で、全席が個室。焼肉、しゃぶしゃぶ、すき焼きから選べる。コースは4,180円から (飲み放題は1,650円から追加) で、サラダ、キムチ、デザートつき。口コミは分かれる。2026年10月の客は外ハラミとしゃぶしゃぶを気に入り、英語の上手な店長をほめた。2025年以降、注文の漏れや間違い、ご飯のおかわり不可、肉が重い・ふつうという声も。2026年3月には「飲み放題500円」のクーポンが500円引きの意味だったという人も。旅行客が多く、深夜1時まで。',
  });
}

// ================================================================ 縁
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146844/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:30', '23:30']);
  put({
    id: 'osaka_en_chinese_dotonbori', name: '縁 (En)', category: 'OMNI',
    lat: 34.668859, lng: 135.50092, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chinese sauces usually contain soy sauce; dumplings, noodles and fried dishes are on the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Stir-fried bok choy and a soy-meat appetizer appear in reviews; most dishes contain meat or seafood.',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 15:30–23:30 (last order 23:00); closed Wednesday (Tabelog). Lunch 11:00–14:00 by reservation made the day before (last order 13:30) (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR payments including Alipay and WeChat Pay (Tabelog). 54 seats at four round tables and a semi-private room for 6; non-smoking; BYO drinks allowed (Tabelog). English and Chinese menus with photos; English- and Chinese-speaking staff (Tabelog). Opened 13 January 2025 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-10-5, 白亜ビル B1F, opposite the Osaka Shochikuza — 2 min from Namba Stn exit 14',
    cuisine: 'Shanghai-style Chinese cooking adjusted for Japanese tastes, over 200 dishes at mostly ¥1,000–1,200 (Tabelog; 2025 reviews) · courses ¥3,500 (appetizers, meat dishes, seasonal vegetables, fried rice) and ¥5,000 with Peking duck (Tabelog; May 2026) · Peking duck with the meat made into kara-age, sweet and sour pork, Yangzhou fried rice, takana ramen, boiled dumplings, hot and sour soup, shrimp with mayonnaise, beef with green peppers, mapo tofu, stir-fried bok choy, sea cucumber, Shanghai yakisoba (2025–2026 reviews) · lunch sets, three choices (March 2025)',
    website: null, gmaps: gm('縁 道頓堀 中華'), menu_url: null,
    notes: "[Chinese · Dotonbori, Shanghai cooking in a retro basement] A Chinese restaurant down the stairs of a building opposite the Shochikuza theatre, so unlike a typical Chinese place, with its bar-like door and old-Shanghai, Showa-retro room, that first-timers wonder whether this is the right spot. A small team (two chefs from northeast China and a server in July 2025) cooks Shanghai-style dishes adjusted for Japanese tastes; the room was once a French restaurant. The ¥5,000 course centres on Peking duck, with the leftover meat fried as kara-age; the ¥3,500 course is the value pick. À la carte runs to mapo tofu, sweet and sour pork and stir-fried bok choy. Round tables suit groups. Closed Wednesdays; lunch only by booking the day before.",
    chef_bio: { chef_name: null, roles: ['Two chefs from northeast China and a server (July 2025 review); the owner greets guests (November 2025)'], origin: 'Northeast China (the chefs, per a July 2025 review)', background: 'Shop-maintained Tabelog listing: authentic Shanghai cuisine at reasonable prices, over 200 dishes tuned to Japanese tastes, dishes ¥1,000–1,200, set meals and courses at lunch, round tables and private rooms, a modern-jazz room with a hint of Shanghai; opened 13 January 2025. A July 2026 review: the space used to be a French restaurant, taken over by the new owner a year and a half earlier.', philosophy: null, specialty: 'Peking duck course; Shanghai dishes.',
      anecdotes: [
        { text: '"Later, I learned that the restaurant is run by a team of three: two chefs from Northeast China and one server." — July 2025.', source: R + 'B510168590/' },
        { text: '"After enjoying the Peking duck, I had the meat made into kara-age, which was the best dish for me." — July 2026.', source: R + 'B531771369/' },
        { text: '"This restaurant is located underground and doesn\'t look like a typical Chinese restaurant, which made me a bit nervous as I entered" — February 2026.', source: R + 'B523857767/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 縁、中華料理、大阪市中央区道頓堀1-10-5 白亜ビル B1F、なんば駅14番出口から200m・徒歩2分、月火木〜日・祝15:30〜23:30 (L.O.23:00)、水曜定休、ランチは前日までの予約で11:00〜14:00、予約可、カード・電子マネー・QR (Alipay、WeChat Pay も) 可、54席 (円卓4つと半個室)、禁煙、持ち込み可、英語・中国語のメニューとスタッフ、2025年1月13日オープン。店の紹介 (英訳): 本格的な上海料理を手ごろに、200品以上を日本人の好みに合わせて、1品1,000〜1,200円、コース3,500円と北京ダックの5,000円。口コミ(2025年3月〜2026年7月): 松竹座の向かいの地下、バーのような入口、上海の租界や昭和レトロのような店内、中国東北部出身の料理人2人と給仕1人、北京ダックの残りの肉を唐揚げに、酢豚、揚州チャーハン、高菜ラーメン、水餃子、酸辣湯、えびマヨ、牛肉とピーマンの炒めもの、麻婆豆腐、青梗菜の炒めもの、なまこ、焼きそば、以前はフランス料理の店だった。',
      confidence: 'medium', sources: [TB, R + 'B502603972/', R + 'B507279763/', R + 'B510168590/', R + 'B516796079/', R + 'B517053371/', R + 'B517604772/', R + 'B523857767/', R + 'B528777791/', R + 'B531771369/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus with photos, English- and Chinese-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-10-5 白亜ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目10番5号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B510168590/', R + 'B528777791/'],
    price_note: 'Course prices from the Tabelog listing and July 2025 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chef’s course (appetizers to fried rice)', '¥3,500', 'Courses', 'ask', 'no', 'Tabelog; July 2025 review.', 'course_3500'),
      it('', '', 'Peking duck course', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog; May 2026 review.', 'peking_duck_course'),
      it('', '', 'Stir-fried bok choy', '', 'Dishes', 'ask', 'ask', 'February 2026 review.', 'chingensai'),
    ] }, {
    cuisine: '日本人の好みに合わせた上海料理、200品以上で1品はほぼ1,000〜1,200円 (食べログ、2025年の口コミ)・コースは3,500円 (前菜、肉料理、季節の野菜、チャーハン) と北京ダックの5,000円 (食べログ、2026年5月)・北京ダックと残りの肉の唐揚げ、酢豚、揚州チャーハン、高菜ラーメン、水餃子、酸辣湯、えびマヨ、牛肉とピーマンの炒めもの、麻婆豆腐、青梗菜の炒めもの、なまこ、上海の焼きそば (2025〜2026年の口コミ)・3種から選ぶランチのセット (2025年3月)',
    neighborhood: '道頓堀1-10-5、白亜ビル地下1階、大阪松竹座の向かい。なんば駅14番出口から2分',
    gf_detail: '要確認。グルテンの情報なし。中華のたれには一般に醤油を使い、餃子、麺、揚げ物もある。',
    vegan_detail: '要確認。ヴィーガンの情報なし。口コミには青梗菜の炒めものや大豆ミートの前菜があるが、多くの料理は肉か魚介を使う。',
    notes: '[中華・道頓堀、レトロな地下の上海料理] 松竹座の向かいのビルの階段を下りた中華の店で、バーのような扉と古い上海や昭和レトロのような店内は中華料理店らしくなく、初めての人は入っていいのか迷うほど。2025年7月は中国東北部出身の料理人2人と給仕1人の小さなチームで、日本人の好みに合わせた上海の料理を作る。以前はフランス料理の店だった場所。5,000円のコースは北京ダックが主役で、残りの肉は唐揚げに。お得なのは3,500円のコース。単品は麻婆豆腐、酢豚、青梗菜の炒めものなど。円卓はグループ向き。水曜休み。ランチは前日までの予約のみ。',
  });
}

save();
