// Shared city-file IO that preserves each file's on-disk JSON formatting.
// kyoto.json and tokyo.json ship minified (they are the largest mobile payloads);
// the rest are pretty-printed at indent 1. Writing with the wrong style makes
// multi-MB diffs unreviewable and silently inflates what phones download.
import fs from 'node:fs';

export const CITIES = ['kyoto','tokyo','nara','kanazawa','hiroshima','nagoya','nagano','toba','himeji'];
const MINIFIED = new Set(['kyoto', 'tokyo']);

export const cityPath = city => `data/${city}.json`;
export const readCity = city => JSON.parse(fs.readFileSync(cityPath(city), 'utf8'));

export function writeCity(city, data) {
  const text = MINIFIED.has(city)
    ? JSON.stringify(data)
    : JSON.stringify(data, null, 1);
  fs.writeFileSync(cityPath(city), text);
}
