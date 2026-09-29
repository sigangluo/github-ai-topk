#!/usr/bin/env python3
"""
校验收录清单，拉取每个项目的实时数据，生成站点数据和 Markdown 清单。

    python3 scripts/build.py            # 从 GitHub 拉取 star / 创建时间 / 最近推送 / 语言
    python3 scripts/build.py --offline  # 不联网，沿用上次的实时数据（只改了分类、摘要时用）

输入：data/taxonomy.json、data/projects.json、data/excluded.json、data/ranking.json
输出：site/data/topk.json（看板读取）、PROJECTS.md（GitHub 上直接浏览的清单）

projects.json 里人工维护的字段（category / official / officialOrg / summary）脚本只读不改；
唯一例外是 added（收录日期）：缺省时自动填成今天，用来在看板上标记「新收录」。
"""
import argparse
import datetime
import json
import re
import sys

from common import (PROJECTS_MD_PATH, PROJECTS_PATH, SITE_DATA_PATH, TAXONOMY_PATH, GitHub,
                    load_excluded, load_json, load_projects, load_ranking, log, save_json)

SITE_NAME = "LLM & Agent Top-K"
NEW_DAYS = 30        # 收录后多少天内算「新收录」
BATCH = 50           # 每个 GraphQL 请求查询的仓库数
REQUIRED = ("category", "official", "officialOrg", "summary")

REPO_FIELDS = """
  nameWithOwner stargazerCount createdAt pushedAt isArchived
  languages(first: 2, orderBy: {field: SIZE, direction: DESC}) { nodes { name } }
"""


def validate(projects, taxonomy, excluded):
    subs = {s["key"] for major in taxonomy for s in major["subs"]}
    errors = []
    for name, p in projects.items():
        if not re.fullmatch(r"[\w.-]+/[\w.-]+", name):
            errors.append(f"{name}: key 必须是 owner/repo 格式")
        missing = [k for k in REQUIRED if k not in p]
        if missing:
            errors.append(f"{name}: 缺少字段 {missing}")
            continue
        if p["category"] not in subs:
            errors.append(f"{name}: category「{p['category']}」不在 data/taxonomy.json 里")
        if not p["summary"].strip():
            errors.append(f"{name}: summary 为空")
        if p["official"] and not p["officialOrg"]:
            errors.append(f"{name}: official=true 时必须填 officialOrg")
        if name in excluded:
            errors.append(f"{name}: 同时出现在 projects.json 和 excluded.json")
    if errors:
        log("data/projects.json 校验失败：\n  " + "\n  ".join(errors))
        sys.exit(1)


def fetch_live(names):
    gh = GitHub()
    live, renamed, missing = {}, [], []
    for i in range(0, len(names), BATCH):
        chunk = names[i:i + BATCH]
        parts = []
        for j, name in enumerate(chunk):
            owner, repo = name.split("/", 1)
            parts.append(f"r{j}: repository(owner: {json.dumps(owner)}, name: {json.dumps(repo)}) {{ ...F }}")
        query = "query {\n" + "\n".join(parts) + "\n}\nfragment F on Repository {" + REPO_FIELDS + "}"
        data = gh.graphql(query)["data"]
        for j, name in enumerate(chunk):
            r = data.get(f"r{j}")
            if not r:
                missing.append(name)
                continue
            if r["nameWithOwner"].lower() != name.lower():
                renamed.append((name, r["nameWithOwner"]))
            langs = [n["name"] for n in r["languages"]["nodes"]]
            live[name] = {
                "stars": r["stargazerCount"],
                "created": r["createdAt"][:10],
                "pushed": r["pushedAt"][:10],
                "stack": " / ".join(langs) if langs else "Markdown",
                "archived": r["isArchived"],
            }
        log(f"  已拉取 {min(i + BATCH, len(names))}/{len(names)}")
    return live, renamed, missing


def rank_of(name, stars, ranking):
    """精确名次来自排名快照；快照里没有的（改名或已掉出 Top-K）按 star 数插值估算。"""
    exact = ranking["_by_name"].get(name)
    if exact:
        return exact, False
    return sum(1 for s in ranking["_stars"] if s > stars) + 1, True


def fmt_stars(n):
    return f"{n / 1000:.1f}k".replace(".0k", "k") if n >= 1000 else str(n)


def github_slug(text):
    s = re.sub(r"[^\w\- ]", "", text.strip().lower())
    return s.replace(" ", "-")


def projects_markdown(site):
    k = site["ranking"]["k"]
    by_cat = {}
    for p in site["projects"]:
        by_cat.setdefault(p["category"], []).append(p)
    out = [
        f"# {SITE_NAME} 项目清单",
        "",
        f"> 本文件由 `scripts/build.py` 自动生成，请勿手动修改。",
        f"> GitHub 全站 star 排名前 {k} 的仓库中，与 LLM / Agent 相关的 **{len(site['projects'])}** 个项目，"
        f"按「大类 / 小类」整理。排名快照 {site['ranking']['fetched_at']}，star 数更新于 {site['generated_at']}。",
        "",
        "## 目录",
        "",
    ]
    for major in site["taxonomy"]:
        n = sum(len(by_cat.get(s["key"], [])) for s in major["subs"])
        out.append(f"- [{major['label']}](#{github_slug(major['label'])})（{n}）")
        for s in major["subs"]:
            out.append(f"  - [{s['label']}](#{github_slug(s['label'])})（{len(by_cat.get(s['key'], []))}）")
    for major in site["taxonomy"]:
        out += ["", f"## {major['label']}", "", major["def"]]
        for s in major["subs"]:
            items = by_cat.get(s["key"], [])
            out += ["", f"### {s['label']}", "", f"{s['def']} · {len(items)} 个", "",
                    "| 项目 | Stars | 全站排名 | 出品 | 简介 |", "|---|---:|---:|---|---|"]
            for p in items:
                rank = f"{k}+" if p["rank"] > k else ("≈" if p["rank_estimated"] else "") + f"#{p['rank']}"
                who = f"官方 · {p['officialOrg']}" if p["official"] else "社区"
                summary = p["summary"].replace("|", "\\|").replace("\n", " ")
                flags = " 🗄️已归档" if p["archived"] else ""
                out.append(f"| [{p['name']}](https://github.com/{p['name']}){flags} | {fmt_stars(p['stars'])} | "
                           f"{rank} | {who} | {summary} |")
    return "\n".join(out) + "\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--offline", action="store_true", help="不联网，沿用 site/data/topk.json 里上次的实时数据")
    args = parser.parse_args()

    taxonomy = load_json(TAXONOMY_PATH)
    projects = load_projects()
    ranking = load_ranking()
    validate(projects, taxonomy, load_excluded())

    today = datetime.date.today().isoformat()
    filled = [n for n, p in projects.items() if not p.get("added")]
    for n in filled:
        projects[n]["added"] = today
    if filled:
        save_json(PROJECTS_PATH, projects)
        log(f"为 {len(filled)} 个新项目填写了收录日期 {today}")

    names = sorted(projects, key=str.lower)
    if args.offline:
        prev = {p["name"]: p for p in (load_json(SITE_DATA_PATH, {}) or {}).get("projects", [])}
        lacking = [n for n in names if n not in prev]
        if lacking:
            log(f"--offline 模式下这些项目没有历史数据，请去掉 --offline 联网运行：{lacking}")
            sys.exit(1)
        live = {n: {k: prev[n][k] for k in ("stars", "created", "pushed", "stack", "archived")} for n in names}
        generated_at = (load_json(SITE_DATA_PATH) or {}).get("generated_at", today)
    else:
        log(f"从 GitHub 拉取 {len(names)} 个项目的实时数据 ...")
        live, renamed, missing = fetch_live(names)
        for old, new in renamed:
            log(f"  提示：{old} 已改名为 {new}，建议把 projects.json 里的 key 改成新名字")
        if missing:
            log(f"  这些仓库拉取失败（可能已删除或设为私有），本次跳过：{missing}")
        generated_at = today

    ranking["_by_name"] = {r["name"]: r["rank"] for r in ranking["repos"]}
    ranking["_stars"] = [r["stars"] for r in ranking["repos"]]
    first_import = min(p["added"] for p in projects.values())

    out = []
    for name in names:
        if name not in live:
            continue
        p, l = projects[name], live[name]
        rank, estimated = rank_of(name, l["stars"], ranking)
        added_days = (datetime.date.fromisoformat(generated_at) - datetime.date.fromisoformat(p["added"])).days
        out.append({
            "name": name, "category": p["category"], "official": p["official"], "officialOrg": p["officialOrg"],
            "summary": p["summary"], **l, "rank": rank, "rank_estimated": estimated, "added": p["added"],
            "is_new": p["added"] > first_import and added_days <= NEW_DAYS,
        })
    out.sort(key=lambda p: -p["stars"])

    site = {
        "name": SITE_NAME,
        "generated_at": generated_at,
        "ranking": {k: ranking[k] for k in ("k", "fetched_at", "cutoff_stars")},
        "taxonomy": taxonomy,
        "projects": out,
    }
    save_json(SITE_DATA_PATH, site)
    with open(PROJECTS_MD_PATH, "w", encoding="utf-8") as f:
        f.write(projects_markdown(site))
    log(f"完成：{len(out)} 个项目 → {SITE_DATA_PATH}、{PROJECTS_MD_PATH}")


if __name__ == "__main__":
    main()
