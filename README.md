# LLM & Agent Top-K

[![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)
[![Data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-lightgrey.svg)](data/LICENSE)

GitHub 全站 star 排名前 K（当前 K = 2000）的仓库里，所有与 **LLM / Agent** 相关的开源项目：两级分类、中文摘要，排名和 star 每周自动更新，新进榜的项目自动发现。

*A curated, auto-updated map of the LLM / Agent projects among GitHub's top-K most-starred repositories.*

- **看板**：`site/`，部署到 GitHub Pages 后在线访问。支持分类 / 组织 / 语言筛选，另有数据分析视图
- **清单**：[PROJECTS.md](PROJECTS.md)，按分类整理，GitHub 上直接浏览
- **数据**：[site/data/topk.json](site/data/topk.json)，完整数据，可直接下载

## 收录范围

范围由**排名**决定（Top-K），而不是作者的口味；是否相关由人工逐个判断，客观数据全部由脚本从 GitHub 拉取。

- **收录**：核心功能与 LLM / Agent 直接相关的项目——模型、训练与推理、Agent 框架与产品、编码 Agent 及周边、技能 / 插件、RAG 与数据工具、以 LLM 为核心的垂类应用，以及相关教程与资源合集
- **不收录**：纯图像 / 语音 / 视频生成、通用机器学习 / 视觉研究代码、通用基础设施、只是顺带接了点 AI 功能的软件；拿不准的不收
- **官方 / 社区**：仓库所在的 GitHub 组织就是该公司本身才算「官方」；学术实验室、社区组织、已移交社区维护的项目一律算「社区」

分类体系（9 个大类、43 个小类，含每类的边界定义）见 [data/taxonomy.json](data/taxonomy.json)。

## 目录结构

```
data/
├── taxonomy.json      分类体系                      人工维护
├── projects.json      已收录项目：分类、官方/社区、摘要  人工维护
├── excluded.json      已审核、判定不相关的仓库          人工审核，脚本写入
├── ranking.json       Top-K 排名快照                 scripts/rank.py 生成
└── candidates.json    新进榜、待审核的仓库             scripts/candidates.py 生成
scripts/               数据流水线，仅依赖 Python 3.9+ 标准库
site/                  静态看板（纯 HTML / CSS / JS，无构建步骤）
PROJECTS.md            分类清单，build.py 生成
```

`projects.json` 每项：`category`（小类 key）、`official`、`officialOrg`、`summary`（基于 README 撰写的中文摘要）、`added`（收录日期，缺省时自动填写）。star、创建时间、语言、名次等由 `build.py` 补全，不手写。

## 更新数据

由维护者定期手动更新：

```bash
export GH_TOKEN=...                            # 不勾选任何权限的 token 即可
python3 scripts/candidates.py                  # 列出待审核仓库（详情在 data/candidates.json）
# 相关的：在 data/projects.json 里加一条
python3 scripts/candidates.py --exclude-rest   # 其余标记为不收录，以后不再出现
python3 scripts/build.py                       # 校验并重新生成站点数据和 PROJECTS.md
```

扩大范围：`python3 scripts/rank.py --k 3000`，然后同样审核。只改了分类或摘要、不想联网：`build.py --offline`。

## 本地预览与部署

```bash
python3 -m http.server -d site 8000            # 看板需要静态服务器，双击打开 HTML 读不到数据
```

部署：仓库 Settings → Pages → Source 选「GitHub Actions」，之后 `site/` 有改动推送到 main 时，`deploy-pages.yml` 自动发布。

## 关于贡献

本项目由维护者个人维护，**不接受 Pull Request**（会直接关闭）。欢迎通过 issue 反馈问题或提出建议，但不保证回复和采纳。你也可以在遵守下方许可证的前提下自由 fork，按自己的口径维护一份。

## 许可证

代码 [MIT](LICENSE)；数据（`data/`、`PROJECTS.md`、`site/data/`）[CC BY 4.0](data/LICENSE)，使用请注明来源。
