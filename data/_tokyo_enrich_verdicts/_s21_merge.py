import json, glob, os, sys, io

base = os.path.dirname(os.path.abspath(__file__))
shard = json.load(io.open(os.path.join(base, '..', '_tokyo_enrich_shards', 's21.json'), encoding='utf-8'))
order = [r['id'] for r in shard]

parts = {}
for p in sorted(glob.glob(os.path.join(base, '_s21_r*.json'))):
    d = json.load(io.open(p, encoding='utf-8'))
    if isinstance(d, list):
        for r in d:
            parts[r['id']] = r
    else:
        parts[d['id']] = d

out = [parts[i] for i in order if i in parts]
missing = [i for i in order if i not in parts]
final = len(sys.argv) > 1 and sys.argv[1] == 'final'
name = 's21.json' if final else '_s21_part.json'
if final and missing:
    print('REFUSING final write, missing:', missing)
    sys.exit(1)
with io.open(os.path.join(base, name), 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print('wrote', name, len(out), 'records; missing', missing)
