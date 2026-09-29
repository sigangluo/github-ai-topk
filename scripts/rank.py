#!/usr/bin/env python3
"""
抓取 GitHub 全站按 star 数排名的前 K 个仓库，写入 data/ranking.json。

    python3 scripts/rank.py            # K 沿用 ranking.json 里上次的值（首次默认 2000）
    python3 scripts/rank.py --k 3000   # 扩大范围

GitHub 搜索 API 单个查询最多返回 1000 条结果，所以按 star 数区间分片：
从高往低，每次二分查找一个下界 lo，使 stars:lo..hi 的结果数刚好不超过 1000，
整段拉完后令 hi = lo - 1 继续，直到凑够 K 个。K=2000 大约需要 3 分钟
（搜索 API 限速 30 次/分钟）。
"""
import argparse
import datetime

from common import GitHub, RANKING_PATH, load_json, log, save_json

WINDOW_LIMIT = 1000  # 搜索 API 单个查询能翻到的结果上限
DEFAULT_K = 2000


def star_query(lo, hi):
    return f"stars:{lo}..{hi}"


def count(gh, lo, hi):
    return gh.search_repos(star_query(lo, hi), per_page=1)["total_count"]


def lowest_bound(gh, hi):
    """二分找最小的 lo，使 stars:lo..hi 的仓库数 <= WINDOW_LIMIT。"""
    lo_ok, lo_bad = hi, 0  # lo_ok 满足条件；lo_bad 不满足（或是哨兵 0）
    # 先指数下探，避免从 1 开始二分浪费请求
    probe = hi
    while probe > 1:
        probe = max(1, probe * 2 // 3)
        if count(gh, probe, hi) <= WINDOW_LIMIT:
            lo_ok = probe
        else:
            lo_bad = probe
            break
    if lo_bad == 0:
        return lo_ok
    while lo_ok - lo_bad > 1:
        mid = (lo_ok + lo_bad) // 2
        if count(gh, mid, hi) <= WINDOW_LIMIT:
            lo_ok = mid
        else:
            lo_bad = mid
    return lo_ok


def fetch_window(gh, lo, hi):
    items = []
    for page in range(1, WINDOW_LIMIT // 100 + 1):
        result = gh.search_repos(star_query(lo, hi), page=page)
        batch = result.get("items", [])
        items.extend(batch)
        if len(batch) < 100:
            break
    return items


def fetch_top(gh, k):
    top = gh.search_repos("stars:>1", per_page=1)["items"][0]["stargazers_count"]
    hi, seen = top, {}
    while len(seen) < k and hi >= 1:
        lo = lowest_bound(gh, hi)
        log(f"区间 stars:{lo}..{hi} ...")
        for it in fetch_window(gh, lo, hi):
            seen[it["full_name"]] = it["stargazers_count"]
        log(f"  已收集 {len(seen)} 个")
        hi = lo - 1
    ordered = sorted(seen.items(), key=lambda kv: (-kv[1], kv[0].lower()))[:k]
    return [{"rank": i + 1, "name": n, "stars": s} for i, (n, s) in enumerate(ordered)]


def main():
    prev = load_json(RANKING_PATH, {})
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--k", type=int, default=prev.get("k", DEFAULT_K), help="抓取前 K 名")
    args = parser.parse_args()

    repos = fetch_top(GitHub(), args.k)
    if len(repos) < args.k:
        log(f"警告：只拿到 {len(repos)} 个，少于 K={args.k}")

    prev_names = {r["name"] for r in prev.get("repos", [])}
    cur_names = {r["name"] for r in repos}
    save_json(RANKING_PATH, {
        "k": args.k,
        "fetched_at": datetime.date.today().isoformat(),
        "source": "GitHub search API, sort=stars desc, 按 star 区间分片突破单查询 1000 条上限",
        "cutoff_stars": repos[-1]["stars"] if repos else None,
        "repos": repos,
    })
    if prev_names:
        log(f"新进入 Top{args.k}：{len(cur_names - prev_names)} 个；掉出：{len(prev_names - cur_names)} 个")
    log(f"已写入 {RANKING_PATH}（第 {len(repos)} 名 {repos[-1]['stars']} stars）")


if __name__ == "__main__":
    main()
