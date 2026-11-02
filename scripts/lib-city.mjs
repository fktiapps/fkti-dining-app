// Shared city-file IO that preserves each file's on-disk JSON formatting.
// kyoto.json and tokyo.json ship minified (they are the largest mobile payloads);
// the rest are pretty-printed at indent 1. Writing with the wrong style makes
// multi-MB diffs unreviewable and silently inflates what phones download.
import fs from 'node:fs';

export const CITIES = ['kyoto','tokyo','nara','kanazawa','hiroshima','nagoya','nagano','toba','himeji','osaka'];
const MINIFIED = new Set(['kyoto', 'tokyo', 'osaka']);

export const cityPath = city => `data/${city}.json`;
export const readCity = city => JSON.parse(fs.readFileSync(cityPath(city), 'utf8'));

export function writeCity(city, data) {
  const text = MINIFIED.has(city)
    ? JSON.stringify(data)
    : JSON.stringify(data, null, 1);
  // Windows sometimes holds the file for a moment after the previous write (errno UNKNOWN/EBUSY/EPERM;
  // twice failed an osaka sweep integration on 2026-11-02). Retry briefly instead of failing the batch.
  for (let i = 0; ; i++) {
    try { fs.writeFileSync(cityPath(city), text); return; }
    catch (e) {
      if (i >= 9 || !['UNKNOWN', 'EBUSY', 'EPERM'].includes(e.code)) throw e;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 300);
    }
  }
}
