# -*- coding: utf-8 -*-
"""Extract result titles + missingTerms from a saved Yahoo Japan SERP."""
import re, sys, json

h = open(sys.argv[1], encoding="utf-8", errors="replace").read()
mt = set(re.findall(r'"missingTerms":\[(.*?)\]', h))
print("missingTerms:", mt)
seen = []
for m in re.finditer(r'"title":"((?:[^"\\]|\\.)*)"', h):
    t = m.group(1)
    try:
        t = json.loads('"' + t + '"')
    except Exception:
        pass
    t = re.sub(r"<[^>]+>", "", t)
    if "検索" in t or "Yahoo" in t:
        continue
    if t in seen:
        continue
    seen.append(t)
for t in seen[:35]:
    print("-", t[:100])
# local map module store names
for m in re.finditer(r'"storeList":\[(.*?)\]', h, re.S):
    for s in re.finditer(r'"name":"((?:[^"\\]|\\.)*)"', m.group(1)):
        try:
            print("STORE:", json.loads('"' + s.group(1) + '"'))
        except Exception:
            print("STORE:", s.group(1))
