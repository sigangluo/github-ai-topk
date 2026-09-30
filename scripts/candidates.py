#!/usr/bin/env python3
"""
找出「在 Top-K 排名里，但既没收录、也没被排除过」的仓库，也就是需要人工审核的新项目。

    python3 scripts/candidates.py                  # 生成 data/candidates.json 并打印清单
    python3 scripts/candidates.py --exclude-rest   # 审核完成后：把剩下的候选全部记为「不收录」

审核流程：
    1. 看 data/candidates.json（ai_hint=true 的排在前面，附 README 开头方便判断）；
    2. 相关的项目：在 data/projects.json 里加一条（category / official / officialOrg / summary）；
    3. 剩下的无关项目：运行 --exclude-rest，写入两个项目共用的 ../excluded.json（不提交远程），以后不会再出现。
       这份清单两个榜共用：另一个榜也可能想收这些候选，所以要等两边都审核完再运行；
    4. 运行 python3 scripts/build.py 重新生成站点数据。
"""
import argparse
import base64
import re

from common import (CANDIDATES_PATH, GitHub, load_excluded, load_projects, load_ranking, load_sister,
                    log, save_excluded, save_json)

# 只用来排序、提示「可能相关」，不做自动判定
AI_HINT = re.compile(
    r"\b(llms?|gpt|ai|agents?|agentic|rag|mcp|claude|openai|anthropic|gemini|deepseek|qwen|llama|"
    r"chatbot|prompts?|copilot|transformers?|diffusion|embeddings?|inference|fine-?tun\w*|"
    r"machine learning|deep learning|neural|genai|generative|vector)\b",
    re.I,
)


def readme_excerpt(gh, name, limit=800):
    data = gh.rest(f"/repos/{name}/readme")
    if not data or "content" not in data:
        return ""
    text = base64.b64decode(data["content"]).decode("utf-8", "replace")
    text = re.sub(r"<[^>]+>", " ", text)                 # HTML 标签
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", text)    # 图片 / 徽章
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)  # 链接只留文字
    text = re.sub(r"\s+", " ", text).strip()
    return text[:limit]


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--exclude-rest", action="store_true", help="把当前所有未收录的候选记入 excluded.json")
    parser.add_argument("--no-details", action="store_true", help="不请求简介 / README（更快）")
    args = parser.parse_args()

    ranking = load_ranking()
    projects = load_projects()
    excluded = load_excluded()
    sister = load_sister()
    in_rank = {r["name"] for r in ranking["repos"]}
    gh = None if args.no_details else GitHub()

    # 已收录的项目改名后，会以新名字出现在排名里。先识别出来，避免被当成新候选误排除
    renamed = {}
    if gh:
        for old in (n for n in projects if n not in in_rank):
            meta = gh.rest(f"/repos/{old}")
            if meta and meta.get("full_name") and meta["full_name"] != old:
                renamed[meta["full_name"]] = old
    pending = [r for r in ranking["repos"]
               if r["name"] not in projects and r["name"] not in excluded and r["name"] not in renamed
               and r["name"].lower() not in sister]

    if args.exclude_rest:
        save_excluded(excluded | {r["name"] for r in pending})
        save_json(CANDIDATES_PATH, [])
        log(f"已把 {len(pending)} 个候选记为不收录")
        return

    candidates = []
    for r in pending:
        c = dict(r)
        if gh:
            meta = gh.rest(f"/repos/{r['name']}") or {}
            c.update({
                "description": meta.get("description") or "",
                "topics": meta.get("topics", []),
                "language": meta.get("language"),
                "created": (meta.get("created_at") or "")[:10],
                "archived": meta.get("archived", False),
                "readme": readme_excerpt(gh, r["name"]),
            })
        hay = " ".join([c["name"], c.get("description", ""), " ".join(c.get("topics", [])), c.get("readme", "")[:300]])
        c["ai_hint"] = bool(AI_HINT.search(hay.replace("-", " ").replace("_", " ")))
        candidates.append(c)
    candidates.sort(key=lambda c: (not c["ai_hint"], c["rank"]))
    save_json(CANDIDATES_PATH, candidates)

    dropped = sorted(n for n in projects if n not in in_rank and n not in renamed.values())

    print(f"Top{ranking['k']}（快照 {ranking['fetched_at']}）中待审核：{len(candidates)} 个，"
          f"其中疑似相关 {sum(c['ai_hint'] for c in candidates)} 个")
    for c in candidates:
        print(f"  {'*' if c['ai_hint'] else ' '} #{c['rank']:<5} {c['name']:45s} {c.get('description', '')[:70]}")
    if renamed:
        print("\n这些已收录项目改了名，请把 data/projects.json 里的 key 改成新名字：")
        for new, old in renamed.items():
            print(f"    {old}  →  {new}")
    if dropped:
        print(f"\n已收录但当前不在 Top{ranking['k']} 内的项目 {len(dropped)} 个（仍保留，页面上显示为 {ranking['k']}+）：")
        for n in dropped:
            print(f"    {n}")
    log(f"已写入 {CANDIDATES_PATH}")


if __name__ == "__main__":
    main()
