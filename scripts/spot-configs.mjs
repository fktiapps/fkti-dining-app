// Tight-radius "spot sweep" city configs. r = radius in km from each center.
// Multi-center cities (toba) union their circles. Used by gen-spot-workflow.mjs + build-spot.mjs.
export const CONFIGS = {
  tokyo: {
    label: 'Tokyo', subtitle: '浅草・渋谷・水道橋・新宿 · ベジ・グルテンフリー',
    // Four 1-mile-diameter circles (≈0.8 km radius) per Greg. Union of the four.
    centers: [
      { name: 'Sensōji (Asakusa)', area: '浅草寺 浅草 東京', lat: 35.7148, lng: 139.7967, r: 0.8 },
      { name: 'Shibuya Scramble', area: '渋谷スクランブル交差点 渋谷 東京', lat: 35.6595, lng: 139.7005, r: 0.8 },
      { name: 'Suidōbashi Station', area: '水道橋駅 神保町 千代田区 東京', lat: 35.7017, lng: 139.7539, r: 0.8 },
      { name: 'Shinjuku Station', area: '新宿駅 新宿 東京', lat: 35.6896, lng: 139.7006, r: 0.8 },
    ],
    specialties: [
      '浅草 ラーメン 名店 食べログ', '渋谷 ラーメン 名店 食べログ', '新宿 ラーメン 名店 食べログ', '神保町 水道橋 ラーメン 食べログ',
      'つけ麺 まぜそば 東京 名店 食べログ', 'ヴィーガン ラーメン 東京 食べログ', 'グルテンフリー ラーメン 米粉麺 東京',
      '渋谷 ヴィーガン グルテンフリー カフェ 食べログ', '新宿 ヴィーガン グルテンフリー 食べログ', '浅草 ヴィーガン 精進料理 グルテンフリー 食べログ',
      '浅草 老舗 食堂 天ぷら 蕎麦 名物 食べログ',
    ],
    comfort: 'A Tokyo spot near Asakusa/Shibuya/Suidōbashi/Shinjuku; a little Japanese or pointing helps.',
  },
  // Per-circle Tokyo configs — run as 4 PARALLEL workflows so each gets its own
  // concurrency budget (the cap is per-workflow = min(16, cores-2); this box has 4 cores
  // → 2/workflow, so 4 workflows ≈ 8 concurrent I/O-bound agents). Harvest all four into
  // data/_tokyo_disc.json, then build-tokyo-merge.mjs filters against the tokyo union config.
  tokyo_asakusa: {
    label: 'Tokyo · Asakusa', subtitle: '浅草寺 · ベジ・グルテンフリー',
    centers: [{ name: 'Sensōji (Asakusa)', area: '浅草寺 浅草 東京', lat: 35.7148, lng: 139.7967, r: 0.8 }],
    specialties: ['浅草 ラーメン 名店 食べログ', '浅草 ヴィーガン 精進料理 グルテンフリー 食べログ', '浅草 老舗 天ぷら 蕎麦 どぜう 名物 食べログ'],
    comfort: 'A spot near Sensōji in Asakusa; a little Japanese or pointing helps.',
  },
  tokyo_shibuya: {
    label: 'Tokyo · Shibuya', subtitle: '渋谷スクランブル · ベジ・グルテンフリー',
    centers: [{ name: 'Shibuya Scramble', area: '渋谷スクランブル交差点 渋谷 東京', lat: 35.6595, lng: 139.7005, r: 0.8 }],
    specialties: ['渋谷 ラーメン 名店 食べログ', '渋谷 ヴィーガン グルテンフリー カフェ 食べログ', 'つけ麺 まぜそば 渋谷 食べログ'],
    comfort: 'A spot near Shibuya Scramble; a little Japanese or pointing helps.',
  },
  tokyo_suidobashi: {
    label: 'Tokyo · Suidōbashi', subtitle: '水道橋・神保町 · ベジ・グルテンフリー',
    centers: [{ name: 'Suidōbashi Station', area: '水道橋駅 神保町 千代田区 東京', lat: 35.7017, lng: 139.7539, r: 0.8 }],
    specialties: ['神保町 水道橋 ラーメン 食べログ', '神保町 水道橋 ヴィーガン グルテンフリー カフェ 食べログ', 'つけ麺 神保町 カレー 名店 食べログ'],
    comfort: 'A spot near Suidōbashi / Jimbocho; a little Japanese or pointing helps.',
  },
  tokyo_shinjuku: {
    label: 'Tokyo · Shinjuku', subtitle: '新宿駅 · ベジ・グルテンフリー',
    centers: [{ name: 'Shinjuku Station', area: '新宿駅 新宿 東京', lat: 35.6896, lng: 139.7006, r: 0.8 }],
    specialties: ['新宿 ラーメン 名店 食べログ', '新宿 ヴィーガン グルテンフリー 食べログ', 'つけ麺 まぜそば 新宿 名店 食べログ'],
    comfort: 'A spot near Shinjuku Station; a little Japanese or pointing helps.',
  },
  nagano: {
    label: 'Nagano', subtitle: '善光寺 · ベジ・グルテンフリー',
    centers: [{ name: 'Zenkō-ji', area: '善光寺 長野', lat: 36.6614, lng: 138.1872, r: 1.61 }],
    specialties: ['信州そば', '戸隠そば', 'おやき', '精進料理 善光寺', '甘味処 長野'],
    comfort: 'A local spot near Zenkō-ji; a little Japanese or pointing helps.',
  },
  // A 500 m circle around Nagano Station (~2 km south of Zenkō-ji, outside the nagano circle).
  // Discovered separately, then MERGED into data/nagano.json (dedupe against the existing 104).
  nagano_station: {
    label: 'Nagano · Station', subtitle: '長野駅 · ベジ・グルテンフリー',
    centers: [{ name: 'Nagano Station', area: '長野駅 長野', lat: 36.6432, lng: 138.1889, r: 0.5 }],
    specialties: ['信州そば 長野駅', 'ラーメン 長野駅 名店', 'おやき 長野', 'ヴィーガン グルテンフリー 長野駅', '長野駅 居酒屋 郷土料理', '長野駅 定食 食堂'],
    comfort: 'A spot around Nagano Station; a little Japanese or pointing helps.',
  },
  nagoya: {
    label: 'Nagoya', subtitle: '名古屋城 · ベジ・グルテンフリー',
    centers: [{ name: 'Nagoya Castle', area: '名古屋城 周辺 名古屋', lat: 35.1856, lng: 136.8997, r: 1.61 }],
    specialties: ['味噌カツ', 'ひつまぶし', '手羽先', 'きしめん', 'あんかけスパ', 'ヴィーガン 名古屋'],
    comfort: 'A Nagoya spot near the castle; a little Japanese or pointing helps.',
  },
  toba: {
    label: 'Toba & Ise', subtitle: '鳥羽駅 + おかげ横丁 · ベジ・グルテンフリー',
    centers: [
      { name: 'Toba Station', area: '鳥羽駅 鳥羽', lat: 34.4814, lng: 136.8434, r: 0.8 },
      { name: 'Okage Yokochō', area: 'おかげ横丁 おはらい町 伊勢神宮 内宮', lat: 34.4554, lng: 136.7253, r: 0.85 },
    ],
    specialties: ['伊勢うどん', '手こね寿司', '海鮮 鳥羽', '赤福 甘味', 'おかげ横丁 食べ歩き'],
    comfort: 'A Toba/Ise spot; a little Japanese or pointing helps.',
  },
  toba_station: {
    label: 'Toba Station (A/B test)', subtitle: '鳥羽駅',
    centers: [{ name: 'Toba Station', area: '鳥羽駅 鳥羽', lat: 34.4814, lng: 136.8434, r: 0.8 }],
    specialties: ['伊勢うどん', '手こね寿司', '海鮮 鳥羽'],
    comfort: 'A Toba spot near the station.',
  },
  himeji: {
    label: 'Himeji', subtitle: '姫路城〜姫路駅 · ベジ・グルテンフリー',
    centers: [{ name: 'Himeji Castle ↔ Station', area: '姫路城 姫路駅 大手前通り 姫路', lat: 34.8331, lng: 134.6921, r: 1.15 }],
    specialties: ['姫路おでん', '穴子 あなご 姫路', '姫路 名物', '蕎麦 うどん 姫路'],
    comfort: 'A Himeji spot between the castle and station; a little Japanese or pointing helps.',
  },
};

export function bbox(cfg) {
  const lats = [], lngs = [];
  for (const c of cfg.centers) {
    const dLat = c.r / 111, dLng = c.r / (111 * Math.cos(c.lat * Math.PI / 180));
    lats.push(c.lat - dLat, c.lat + dLat); lngs.push(c.lng - dLng, c.lng + dLng);
  }
  return { latMin: Math.min(...lats), latMax: Math.max(...lats), lngMin: Math.min(...lngs), lngMax: Math.max(...lngs) };
}
