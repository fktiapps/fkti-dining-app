// Ginza sweep correction (2026-10-24): four record names carried katakana readings that were not taken from a source.
// Replace them with Tabelog's own Japanese alias (or drop the reading where Tabelog gives none).
import fs from 'fs';

const FIX = {
  tokyo_giovanni_ginza8: 'Giovanni',                                 // Tabelog gives no katakana reading
  tokyo_le_bonze_higashi_ginza: 'Le Bonze (ルボーズ)',                 // Tabelog alias ルボーズ
  tokyo_lazur_tunisian_higashi_ginza: 'LAZUR (ラジュール)',            // Tabelog alias ラジュール
  tokyo_m3_felice_higashi_ginza: 'M3 Felice (エムサン フェリーチェ)', // Tabelog alias エムサン フェリーチェ
};

const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
for (const [id, name] of Object.entries(FIX)) {
  const p = d.places.find(x => x.id === id);
  if (!p) { console.log(id + ': missing'); continue; }
  if (p.name === name) { console.log(id + ': already fixed'); continue; }
  console.log(`${id}: ${p.name} -> ${name}`);
  p.name = name;
}
fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
