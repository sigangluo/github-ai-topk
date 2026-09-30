"""各脚本共用的路径、JSON 读写和 GitHub API 客户端。只依赖 Python 标准库（3.9+）。"""
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data")
TAXONOMY_PATH = os.path.join(DATA_DIR, "taxonomy.json")
PROJECTS_PATH = os.path.join(DATA_DIR, "projects.json")
RANKING_PATH = os.path.join(DATA_DIR, "ranking.json")
CANDIDATES_PATH = os.path.join(DATA_DIR, "candidates.json")
# 「不收录」清单由 github-fullstack-topk 与 github-ai-topk 共用，放在两个项目的上一级目录，不提交远程。
# 里面的仓库是两个榜都审核过并判定不收录的；用环境变量 EXCLUDED_PATH 可以改位置。
EXCLUDED_PATH = os.environ.get("EXCLUDED_PATH", os.path.join(os.path.dirname(ROOT), "excluded.json"))
SITE_DATA_PATH = os.path.join(ROOT, "site", "data", "topk.json")
PROJECTS_MD_PATH = os.path.join(ROOT, "PROJECTS.md")
PROJECTS_MD_ZH_PATH = os.path.join(ROOT, "PROJECTS.zh-CN.md")
# 姊妹项目（Full-Stack Top-K）的收录清单：两份列表互不重叠，已在那边收录的仓库这边不收。
# 优先读本地同级目录（可能有还没推送的改动），找不到再读 GitHub 上的线上数据。
SISTER_REPO = "sigangluo/github-fullstack-topk"
SISTER_PROJECTS_PATH = os.environ.get(
    "SISTER_PROJECTS_PATH",
    os.path.join(os.path.dirname(ROOT), "github-fullstack-topk", "data", "projects.json"))
SISTER_PROJECTS_URL = os.environ.get(
    "SISTER_PROJECTS_URL",
    f"https://raw.githubusercontent.com/{SISTER_REPO}/main/data/projects.json")


def log(msg):
    print(msg, file=sys.stderr, flush=True)


# ---------------------------------------------------------------- JSON

def load_json(path, default=None):
    if not os.path.isfile(path):
        return default
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def _dump(v):
    return json.dumps(v, ensure_ascii=False)


def save_json(path, value):
    """写 JSON：dict 按 key 排序、list 每个元素占一行，让 git diff 能逐项看清变化。"""
    os.makedirs(os.path.dirname(path), exist_ok=True)

    def render(v, indent):
        pad = " " * indent
        if isinstance(v, dict) and v and any(isinstance(x, (dict, list)) for x in v.values()):
            items = [f'{pad} {_dump(k)}: {render(x, indent + 1).lstrip()}' for k, x in v.items()]
            return pad + "{\n" + ",\n".join(items) + "\n" + pad + "}"
        if isinstance(v, list) and v:
            return pad + "[\n" + ",\n".join(pad + " " + _dump(x) for x in v) + "\n" + pad + "]"
        return pad + _dump(v)

    with open(path, "w", encoding="utf-8") as f:
        f.write(render(value, 0) + "\n")


def load_ranking():
    ranking = load_json(RANKING_PATH)
    if not ranking:
        log("没有找到 data/ranking.json，请先运行 python3 scripts/rank.py")
        sys.exit(1)
    return ranking


def load_projects():
    return load_json(PROJECTS_PATH, {})


def load_excluded():
    if not os.path.isfile(EXCLUDED_PATH):
        log(f"警告：找不到共用的不收录清单 {EXCLUDED_PATH}，本次当作空清单（所有未收录的仓库都会被列为候选）")
        return set()
    return set(load_json(EXCLUDED_PATH)["repos"])


_sister_cache = None


def load_sister():
    """姊妹列表已收录的仓库名（小写）。本地同级目录优先，其次线上数据；都拿不到时打印警告并返回空集合，
    此时「不与姊妹项目重叠」的校验不会生效。"""
    global _sister_cache
    if _sister_cache is not None:
        return _sister_cache
    data, source = None, None
    if os.path.isfile(SISTER_PROJECTS_PATH):
        data, source = load_json(SISTER_PROJECTS_PATH), SISTER_PROJECTS_PATH
    else:
        try:
            req = urllib.request.Request(SISTER_PROJECTS_URL, headers={"User-Agent": "github-ai-topk"})
            with urllib.request.urlopen(req, timeout=20) as resp:
                data, source = json.loads(resp.read().decode("utf-8")), SISTER_PROJECTS_URL
        except (urllib.error.URLError, TimeoutError, ValueError) as e:
            log(f"警告：读不到姊妹项目的收录清单（本地 {SISTER_PROJECTS_PATH} 不存在，线上 {SISTER_PROJECTS_URL} 失败：{e}），"
                "本次不会检查与 github-fullstack-topk 是否重叠")
    if data is None:
        _sister_cache = set()
    else:
        _sister_cache = {n.lower() for n in data}
        log(f"姊妹项目清单：{len(_sister_cache)} 个（来源 {source}）")
    return _sister_cache


def save_excluded(names):
    save_json(EXCLUDED_PATH, {
        "_note": "已被全栈榜（github-fullstack-topk）和 AI 榜（github-ai-topk）都审核过、判定不收录的仓库。本文件放在两个项目之外，只在本机使用，不提交远程；被任何一个榜收录的仓库不该出现在这里。",
        "repos": sorted(names, key=str.lower),
    })


# ---------------------------------------------------------------- GitHub API

API = "https://api.github.com"


def get_token():
    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    if not token:
        log("需要 GitHub token：export GH_TOKEN=...（不勾选任何权限的 fine-grained token 即可，只读公开数据）")
        sys.exit(1)
    return token


class GitHub:
    def __init__(self, token=None):
        self.token = token or get_token()

    def _request(self, url, body=None):
        headers = {
            "Authorization": f"Bearer {self.token}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "github-ai-topk",
        }
        data = None
        if body is not None:
            data = json.dumps(body).encode("utf-8")
            headers["Content-Type"] = "application/json"
        last_err = None
        for attempt in range(5):
            req = urllib.request.Request(url, data=data, headers=headers)
            try:
                with urllib.request.urlopen(req, timeout=30) as resp:
                    return json.loads(resp.read().decode("utf-8"))
            except urllib.error.HTTPError as e:
                if e.code == 404:
                    return None
                last_err = f"HTTP {e.code}: {e.read().decode('utf-8', 'replace')[:200]}"
                # 403/429 多半是限流：优先按 retry-after / reset 头等待，最多等 90 秒
                wait = 3 * (attempt + 1)
                if e.code in (403, 429):
                    retry_after = e.headers.get("Retry-After")
                    reset = e.headers.get("X-RateLimit-Reset")
                    if retry_after:
                        wait = int(retry_after) + 1
                    elif e.headers.get("X-RateLimit-Remaining") == "0" and reset:
                        wait = max(1, int(reset) - int(time.time()) + 1)
                    wait = min(wait, 90)
                log(f"  请求失败（{last_err[:80]}），{wait}s 后重试")
                time.sleep(wait)
            except (urllib.error.URLError, TimeoutError) as e:
                last_err = str(e)
                time.sleep(3 * (attempt + 1))
        raise RuntimeError(f"请求多次失败：{url}\n{last_err}")

    def rest(self, path, **params):
        qs = ("?" + urllib.parse.urlencode(params)) if params else ""
        return self._request(f"{API}{path}{qs}")

    def search_repos(self, q, page=1, per_page=100):
        # 搜索 API 限速 30 次/分钟，每次调用后固定停 2.2 秒
        result = self.rest("/search/repositories", q=q, sort="stars", order="desc",
                           per_page=per_page, page=page)
        time.sleep(2.2)
        return result

    def graphql(self, query, variables=None):
        result = self._request(f"{API}/graphql", {"query": query, "variables": variables or {}})
        if result.get("errors") and not result.get("data"):
            raise RuntimeError(f"GraphQL 错误：{result['errors']}")
        return result
