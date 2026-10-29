// REVERSED 2026-10-29: the personal-details rule this applied was never Greg's (see docs/osaka-sweep.md).
// Every field it changed was restored from the pre-cleanup commit. Do not re-run.
// Privacy cleanup for Osaka records (2026-10-27): remove age, gender, origin,
// family-relation and past-workplace details taken from reviews, per the
// sweep's personal-details rule. Applies to data/osaka.json and data/osaka.ja.json,
// (The original batch scripts are historical and are not re-run.)
import fs from 'node:fs';
import path from 'node:path';

// [record id, pattern (string or RegExp), replacement]
const FIXES = [
  // 小洞天 — married-couple history, "younger team"
  ['osaka_shodoten_sennichimae', ' It was long run by a married couple; the owner now trains a younger team.', ''],
  ['osaka_shodoten_sennichimae', /Run by a husband-and-wife team before the pandemic, then by the owner with newly trained young staff \(January 2025 and September 2026 reviews\); /, ''],
  ['osaka_shodoten_sennichimae', '長く夫婦で営んできた店で、今は店主が若いスタッフを育てています。', ''],
  // Shinsekai Paprika — "women-run"
  ['osaka_shinsekai_paprika_shokudo', 'A small, women-run vegan kitchen', 'A small vegan kitchen'],
  ['osaka_shinsekai_paprika_shokudo', 'an FMGF reviewer describes it as women-run (April 2026). ', ''],
  ['osaka_shinsekai_paprika_shokudo', '女性が営む小さなヴィーガンの店', '小さなヴィーガンの店'],
  ['osaka_shinsekai_paprika_shokudo', '女性が営む店、', ''],
  // Mezze Horie — chef's country of origin
  ['osaka_mezze_horie', 'The cooking is by a chef from Turkey, who is friendly and fluent in Japanese, per reviewers.', 'The owner-chef is friendly and fluent in Japanese, per reviewers.'],
  ['osaka_mezze_horie', 'Mediterranean cuisine "crafted by a chef from Turkey"', 'Mediterranean cuisine'],
  ['osaka_mezze_horie', '料理はトルコ出身のシェフで、口コミによると気さくで日本語が上手。', 'オーナーシェフは気さくで日本語が上手という口コミ。'],
  ['osaka_mezze_horie', 'トルコ出身のシェフの地中海料理、', '地中海料理、'],
  // 若水 — customers' gender
  ['osaka_wakamizu_minamihorie', 'cheap and fast, mostly men at lunch.', 'cheap and fast.'],
  ['osaka_wakamizu_minamihorie', '安くて早く、昼は男性客が中心。', '安くて早い。'],
  // 金麦 北堀江 — staff age
  ['osaka_kin_mugi_kitahorie', 'and a younger crew took over;', 'and a new crew took over;'],
  ['osaka_kin_mugi_kitahorie', 'notes a younger staff now runs the counter', 'notes new staff now run the counter'],
  ['osaka_kin_mugi_kitahorie', '若いスタッフに代わって', 'スタッフが替わり'],
  ['osaka_kin_mugi_kitahorie', '以前の店主はいなくなり若いスタッフに、', 'スタッフが替わった、'],
  // 法善寺 鮨 さかた — team age
  ['osaka_hozenji_sushi_sakata', 'Edomae sushi omakase by a young team', 'Edomae sushi omakase'],
  ['osaka_hozenji_sushi_sakata', 'a young Edomae counter in Hozenji Yokocho', 'a new Edomae counter in Hozenji Yokocho'],
  ['osaka_hozenji_sushi_sakata', ' A very young team runs it.', ''],
  ['osaka_hozenji_sushi_sakata', 'A young Edomae team; ', 'Edomae counter; '],
  ['osaka_hozenji_sushi_sakata', '若いチームの江戸前鮨のおまかせ', '江戸前鮨のおまかせ'],
  ['osaka_hozenji_sushi_sakata', '法善寺横丁の若い江戸前のカウンター', '法善寺横丁の新しい江戸前のカウンター'],
  ['osaka_hozenji_sushi_sakata', 'とても若いチームが切り盛り。', ''],
  // まんまる食堂 — "couple"
  ['osaka_manmaru_shokudo', 'A friendly couple runs it, and the atmosphere is homey.', 'Two friendly people run it, and the atmosphere is homey.'],
  ['osaka_manmaru_shokudo', /Run by a couple, according to an April 2026 review; /, 'Run by two people, according to an April 2026 review; '],
  ['osaka_manmaru_shokudo', /The lovely couple running the place creates such a great atmosphere, making/, 'The lovely atmosphere makes'],
  ['osaka_manmaru_shokudo', '気さくな夫婦が切り盛りし', '気さくな2人が切り盛りし'],
  // Hard Romanticker — customers' gender
  ['osaka_hard_romanticker_namba', ' Reviewers note many women among the crowd, unusual for a tachinomi.', ''],
  ['osaka_hard_romanticker_namba', '立ち飲みには珍しく女性客が多いという声。', ''],
  // Teppanyaki Zin — head chef's past workplaces
  ['osaka_teppanyaki_zin_namba', / The head chef came up through luxury hotels \(reviewers name the St\. Regis Osaka and the Ritz\), and the cooking shows it\./, ''],
  ['osaka_teppanyaki_zin_namba', 'Head chef trained in hotel kitchens, previously at the St. Regis Osaka and the Ritz (July 2026 reviews).', 'Teppanyaki counter overlooking Dotonbori (Tabelog).'],
  ['osaka_teppanyaki_zin_namba', ' I learned that the head chef trained at a hotel.', ''],
  ['osaka_teppanyaki_zin_namba', /料理長は高級ホテル出身[^。]*。/, ''],
  ['osaka_teppanyaki_zin_namba', 'ホテルで修業した料理長、', ''],
  ['osaka_teppanyaki_zin_namba', 'St. Regis OsakaとRitz出身のシェフ、', ''],
  // 那須家 — owner's training
  ['osaka_iekei_nasuya_nipponbashi', ' by an owner who trained in the Kanto region; one reviewer says at Men Master Takenaka in Tokyo.', '.'],
  ['osaka_iekei_nasuya_nipponbashi', /Owner trained in the Kanto region \(September 2026 review\); one reviewer names Men Master Takenaka in Tokyo \(August 2026\)\. /, ''],
  ['osaka_iekei_nasuya_nipponbashi', /関東で修業した店主が(2026年夏に開店)。[^。]*Men Master Takenaka[^。]*。/, '$1。'],
  ['osaka_iekei_nasuya_nipponbashi', '都内のMen Master Takenakaで修業した店主という声、', ''],
  // 老四川 — chef's and staff's origin
  ['osaka_lao_sichuan_shimanouchi', 'Sichuan beef noodles from a Sichuan-born chef · ', 'Sichuan beef noodles · '],
  ['osaka_lao_sichuan_shimanouchi', 'run by a chef from Sichuan, where most customers and staff are Chinese', 'where most customers are Chinese'],
  ['osaka_lao_sichuan_shimanouchi', 'Run by a chef from Sichuan (March 2026 review).', 'Sichuan beef-noodle shop (March 2026 review).'],
  ['osaka_lao_sichuan_shimanouchi', 'almost all the customers were Chinese, the staff were also from China, and the ticket machine', 'almost all the customers were Chinese… and the ticket machine'],
  ['osaka_lao_sichuan_shimanouchi', '四川出身の料理人の四川の牛肉麺', '四川の牛肉麺'],
  ['osaka_lao_sichuan_shimanouchi', '四川出身の料理人が営み、客もスタッフも中国の人が中心', '客は中国の人が中心'],
  ['osaka_lao_sichuan_shimanouchi', '四川出身の料理人の店、', ''],
  ['osaka_lao_sichuan_shimanouchi', '客のほとんどが中国人でスタッフも中国出身', '客のほとんどが中国人'],
  // 楊國福 — staff origin
  ['osaka_yang_guo_fu_malatang_shinsaibashi', 'Staff are largely from overseas, so Japanese may be limited.', 'Japanese may be limited.'],
  ['osaka_yang_guo_fu_malatang_shinsaibashi', 'スタッフは海外出身が多く、日本語は通じにくいこともあります。', '日本語は通じにくいこともあります。'],
  // 鮨朗 — chef's age and name
  ['osaka_sushi_rou_higashishinsaibashi', 'Creative sushi omakase from a young chef', 'Creative sushi omakase from one chef'],
  ['osaka_sushi_rou_higashishinsaibashi', 'run by a young chef who handles everything alone; the name takes a character from the chef\'s own.', 'run by one chef who handles everything alone.'],
  ['osaka_sushi_rou_higashishinsaibashi', 'A young chef working the counter alone; the shop name takes one character from the chef\'s name (September 2026 reviews).', 'One chef working the counter alone (September 2026 reviews).'],
  ['osaka_sushi_rou_higashishinsaibashi', / The name 'Sushi Rou' is derived from the chef's name, taking one character from it\./, ''],
  ['osaka_sushi_rou_higashishinsaibashi', '若い大将の創作寿司', 'ひとりで握る創作寿司'],
  ['osaka_sushi_rou_higashishinsaibashi', /若い大将がひとりで切り盛り。店名は大将の名前から一文字。/, 'ひとりで切り盛り。'],
  // Ramen KURUMU — owner's training
  ['osaka_ramen_kurumu_kitahorie', /The owner trained at Yakumo, Tokyo's famous wonton-noodle shop, and the name means "cloud" in Korean[^.]*\./, 'The name means "cloud" in Korean.'],
  ['osaka_ramen_kurumu_kitahorie', 'Owner trained at the Tokyo wonton-noodle shop Yakumo; "KURUMU" means cloud in Korean, inspired by Yakumo (October 2026 review).', '"KURUMU" means cloud in Korean (October 2026 review).'],
  ['osaka_ramen_kurumu_kitahorie', '店主は東京の有名なワンタン麺の店Yakumoで修業し、店名はそれにちなんだ韓国語で「雲」の意味。', '店名は韓国語で「雲」の意味。'],
  ['osaka_ramen_kurumu_kitahorie', '東京の有名なワンタン麺店で修業した店主、店名は雲の意味', '店名は雲の意味'],
  // 8ppy — customers' age and gender
  ['osaka_8ppy_mala_tang_namba_parks', 'packed with young women on one visit', 'and packed on one visit'],
  ['osaka_8ppy_mala_tang_namba_parks', '若い女性で満席だった日も', '満席だった日も'],
  // かわちりば — customers' gender
  ['osaka_kawachiriba_minamisenba', 'A calm room with many women dining.', 'A calm room.'],
  ['osaka_kawachiriba_minamisenba', '落ち着いた店内で女性客も多い。', '落ち着いた店内。'],
  // 魚肴 しま田 — chef's past workplace
  ['osaka_sakana_shimada', / The chef came from Asai, a well-known Osaka restaurant, and one diner felt a similar vibe\./, ''],
  ['osaka_sakana_shimada', 'Chef previously worked at Asai, a well-known Osaka restaurant (June 2026 review). ', ''],
  ['osaka_sakana_shimada', /大将は大阪の名店Asaiの出身で、雰囲気が似ていると感じた人も。/, ''],
  ['osaka_sakana_shimada', 'Asai出身の大将、', ''],
  // ずんどう屋 / 宇の竹 — crowd age
  ['osaka_zundoya_namba_ebisubashi', 'Popular with a younger crowd after drinks.', 'Popular after drinks.'],
  ['osaka_zundoya_namba_ebisubashi', '飲んだ後の若い客に人気です。', '飲んだ後の客に人気です。'],
  ['osaka_zundoya_namba_ebisubashi', '夜10時でも若い客で賑わう', '夜10時でも賑わう'],
  ['osaka_kasu_udon_unotake', 'and young crowds fill it by 10 pm', 'and it fills by 10 pm'],
  ['osaka_kasu_udon_unotake', '夜10時には若い客で満席に', '夜10時には満席に'],
  // Reviewers' companions in quotes
  ['osaka_oko_takoyaki_higashishinsaibashi', 'cheap, plentiful and "greatest meal my coeliac daughter has had since being in Japan" (July 2026)', 'cheap, plentiful and, for one July 2026 family, the best meal of the trip'],
  ['osaka_teppan_jinja_dotonbori', '… the young American guys absolutely loved the strip loin steak…', '…'],
  ['osaka_okonomiyaki_sanpei_shinsaibashi', ' My friend from Tokyo was surprised by the low prices.', ''],
];

const ROOT = process.cwd();
const hits = new Map(FIXES.map((_, i) => [i, 0]));
const apply = (id, s) => {
  FIXES.forEach(([fid, pat, rep], i) => {
    if (fid !== id) return;
    const before = s;
    s = typeof pat === 'string' ? s.split(pat).join(rep) : s.replace(new RegExp(pat.source, pat.flags.includes('g') ? pat.flags : pat.flags + 'g'), rep);
    if (s !== before) hits.set(i, hits.get(i) + 1);
  });
  return s;
};
const walk = (id, v) => {
  if (typeof v === 'string') return apply(id, v);
  if (Array.isArray(v)) return v.map(x => walk(id, x));
  if (v && typeof v === 'object') { for (const k of Object.keys(v)) v[k] = walk(id, v[k]); return v; }
  return v;
};

const enPath = path.join(ROOT, 'data/osaka.json'), jaPath = path.join(ROOT, 'data/osaka.ja.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8')), ja = JSON.parse(fs.readFileSync(jaPath, 'utf8'));
const ids = [...new Set(FIXES.map(f => f[0]))];
for (const id of ids) {
  const p = en.places.find(x => x.id === id);
  if (!p) { console.error('missing EN record', id); process.exit(1); }
  walk(id, p);
  if (ja[id]) walk(id, ja[id]);
}
const missed = FIXES.filter((_, i) => hits.get(i) === 0);
if (missed.length) { console.error('Unmatched patterns:'); missed.forEach(m => console.error(' ', m[0], '|', String(m[1]).slice(0, 90))); process.exit(1); }
fs.writeFileSync(enPath, JSON.stringify(en));
fs.writeFileSync(jaPath, JSON.stringify(ja, null, 1));
console.log(`fixed ${ids.length} records, ${FIXES.length} patterns`);
