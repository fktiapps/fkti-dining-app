# -*- coding: utf-8 -*-
"""Dump dated result snippets from a saved Yahoo Japan SERP."""
import re, sys, json, datetime

h = open(sys.argv[1], encoding="utf-8", errors="replace").read()
pat = re.compile(r'"bylinedate":(\d+),"description":"((?:[^"\\]|\\.)*)"')
for m in pat.finditer(h):
    d = datetime.datetime.utcfromtimestamp(int(m.group(1))).strftime("%Y-%m-%d")
    try:
        t = json.loads('"' + m.group(2) + '"')
    except Exception:
        t = m.group(2)
    t = re.sub(r"<[^>]+>", "", t)
    print(d, "|", t[:260])
print("---- undated ----")
pat2 = re.compile(r'"description":"((?:[^"\\]|\\.)*)"')
seen = set()
for m in pat2.finditer(h):
    try:
        t = json.loads('"' + m.group(1) + '"')
    except Exception:
        continue
    t = re.sub(r"<[^>]+>", "", t)
    if len(t) < 25 or t in seen:
        continue
    seen.add(t)
    print("-", t[:260])
