# AI Top-K 项目清单

> 本文件由 `scripts/build.py` 自动生成，请勿手动修改。
> GitHub 全站 star 排名前 2000 的仓库中，与 AI（机器学习、深度学习、LLM、Agent）相关的 **599** 个项目，按「大类 / 小类」整理。排名快照 2026-09-30，star 数更新于 2026-09-30。
> English version: [PROJECTS.md](PROJECTS.md)

## 目录

- [模型与任务](#模型与任务)（93）
  - [大语言与多模态模型](#大语言与多模态模型)（15）
  - [预训练模型与经典 NLP](#预训练模型与经典-nlp)（9）
  - [计算机视觉](#计算机视觉)（18）
  - [语音识别](#语音识别)（6）
  - [语音合成、声音转换与音频处理](#语音合成声音转换与音频处理)（20）
  - [图像与视频生成](#图像与视频生成)（12）
  - [图像增强与换脸](#图像增强与换脸)（10）
  - [强化学习与具身智能](#强化学习与具身智能)（3）
- [训练、推理与工具链](#训练推理与工具链)（71）
  - [框架与数值基础库](#框架与数值基础库)（19）
  - [训练与微调](#训练与微调)（9）
  - [推理服务与加速](#推理服务与加速)（5）
  - [本地推理](#本地推理)（13）
  - [API 网关与中转](#api-网关与中转)（14）
  - [观测、评测与 Prompt 管理](#观测评测与-prompt-管理)（5）
  - [标注、可视化与 Demo 工具](#标注可视化与-demo-工具)（6）
- [数据与检索](#数据与检索)（43）
  - [RAG 与知识库](#rag-与知识库)（16）
  - [向量数据库](#向量数据库)（5）
  - [网页抓取](#网页抓取)（6）
  - [文档解析与 OCR](#文档解析与-ocr)（13）
  - [数据分析 / Text-to-SQL](#数据分析--text-to-sql)（3）
- [Agent 基础组件](#agent-基础组件)（39）
  - [记忆与上下文](#记忆与上下文)（13）
  - [Token 压缩](#token-压缩)（5）
  - [浏览器自动化](#浏览器自动化)（11）
  - [MCP 与工具接入](#mcp-与工具接入)（8）
  - [沙箱与运行时](#沙箱与运行时)（2）
- [Agent 开发框架与平台](#agent-开发框架与平台)（41）
  - [代码框架 / SDK](#代码框架--sdk)（21）
  - [低代码 / 工作流平台](#低代码--工作流平台)（11）
  - [协议与格式规范](#协议与格式规范)（6）
  - [多智能体仿真](#多智能体仿真)（3）
- [Agent 应用](#agent-应用)（44）
  - [个人 AI 助理](#个人-ai-助理)（15）
  - [通用 / 研究型 Agent](#通用--研究型-agent)（10）
  - [GUI 操控 Agent](#gui-操控-agent)（5）
  - [聊天客户端](#聊天客户端)（14）
- [编码 Agent 生态](#编码-agent-生态)（63）
  - [编码 Agent](#编码-agent)（27）
  - [多 Agent 工作台](#多-agent-工作台)（14）
  - [客户端与配置增强](#客户端与配置增强)（12）
  - [代码理解与评审](#代码理解与评审)（10）
- [Agent 技能与方法论](#agent-技能与方法论)（58）
  - [开发方法论](#开发方法论)（10）
  - [工程实践技能](#工程实践技能)（8）
  - [设计与内容技能](#设计与内容技能)（13）
  - [行业与知识工作技能](#行业与知识工作技能)（13）
  - [技能库与插件市场](#技能库与插件市场)（14）
- [AI 垂类应用](#ai-垂类应用)（43）
  - [金融与交易](#金融与交易)（10）
  - [内容与设计创作](#内容与设计创作)（16）
  - [安全与渗透测试](#安全与渗透测试)（3）
  - [搜索、情报与舆情](#搜索情报与舆情)（4）
  - [知识管理与学习](#知识管理与学习)（7）
  - [求职](#求职)（3）
- [学习资源](#学习资源)（104）
  - [LLM 原理与训练教程](#llm-原理与训练教程)（18）
  - [Agent 与应用开发教程](#agent-与应用开发教程)（18）
  - [深度学习教程与论文精读](#深度学习教程与论文精读)（15）
  - [机器学习与数据科学教程](#机器学习与数据科学教程)（20）
  - [Prompt 与系统提示词](#prompt-与系统提示词)（11）
  - [Awesome 合集](#awesome-合集)（22）

## 模型与任务

按模态和任务组织的模型与算法及其开源实现：大语言与多模态模型、视觉、语音、图像与视频生成、经典 NLP、强化学习

### 大语言与多模态模型

开源权重的基座 / 推理 / 代码 / 多模态大语言模型，含 GPT-2、Llama 这类早期模型 · 15 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) | 104.5k | #120 | 官方 · DeepSeek | DeepSeek 官方发布的 6710 亿参数 MoE 大语言模型（每 token 激活 370 亿参数），采用多头潜在注意力（MLA）和 DeepSeekMoE 架构实现高效训练推理。 |
| [deepseek-ai/DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) | 91.9k | #154 | 官方 · DeepSeek | DeepSeek 官方发布的第一代推理模型，DeepSeek-R1-Zero 完全通过大规模强化学习（无需先做监督微调）训练出强大推理能力，R1 在此基础上加入冷启动数据以解决重复生成、语言混杂等问题。 |
| [meta-llama/llama](https://github.com/meta-llama/llama) | 59.6k | #379 | 官方 · Meta | Meta 早期的 Llama 模型推理代码仓库。Llama 3.1 起相关仓库已合并到 Llama Stack 与新仓库，本仓库标注为弃用。 |
| [xai-org/grok-1](https://github.com/xai-org/grok-1) | 52.2k | #469 | 官方 · xAI | xAI 官方开源的 Grok-1 模型权重发布，314B 参数的 MoE 模型，提供用于加载和运行该模型的 JAX 示例代码。 |
| [zai-org/ChatGLM-6B](https://github.com/zai-org/ChatGLM-6B) | 40.9k | #702 | 官方 · Zhipu AI | 智谱 AI（原清华 KEG 实验室）开源的双语对话大模型，62 亿参数，消费级显卡可本地部署，是国内最早一批开源可商用对话大模型之一。 |
| [LAION-AI/Open-Assistant](https://github.com/LAION-AI/Open-Assistant) | 37.4k | #832 | 社区 | LAION 发起的开源聊天助手项目，目标是让所有人都能用上高质量对话式大模型，项目已于 2023 年完结，产出的 oasst2 数据集仍在 HuggingFace 开放。 |
| [meta-llama/llama3](https://github.com/meta-llama/llama3) 🗄️已归档 | 29.2k | #1299 | 官方 · Meta | Meta 官方发布的 Llama 3 开源大模型，README 已标注弃用，后续功能迁移至 llama-models/llama-toolchain 等新仓库组成的 Llama Stack。 |
| [QwenLM/Qwen3](https://github.com/QwenLM/Qwen3) | 27.7k | #1424 | 官方 · Alibaba | 阿里云 Qwen 团队官方发布的 Qwen3 系列大模型，提供从快速上手、推理到 SGLang/vLLM/TGI 大规模部署、量化的完整文档。 |
| [OpenBMB/MiniCPM-V](https://github.com/OpenBMB/MiniCPM-V) | 26.5k | #1524 | 社区 | 面向手机等端侧设备的高效多模态大模型系列 MiniCPM-V/MiniCPM-o，支持图像视频理解及流式音视频实时交互，OpenBMB 开源社区出品。 |
| [Vision-CAIR/MiniGPT-4](https://github.com/Vision-CAIR/MiniGPT-4) | 25.6k | #1609 | 社区 | MiniGPT-4 与 MiniGPT-v2 的开源代码，把视觉编码器接到大语言模型上，实现图文对话和多种视觉语言任务。 |
| [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) | 25k | #1663 | 社区 | LLaVA（大型语言与视觉助手）：通过视觉指令微调让大语言模型具备图像理解与对话能力的开源多模态模型与训练代码。 |
| [openai/gpt-2](https://github.com/openai/gpt-2) 🗄️已归档 | 25k | #1667 | 官方 · OpenAI | GPT-2 论文《语言模型是无监督的多任务学习者》的代码与模型。仓库已归档，仅作留存。 |
| [deepseek-ai/DeepSeek-Coder](https://github.com/deepseek-ai/DeepSeek-Coder) | 24.3k | #1748 | 官方 · DeepSeek | DeepSeek 官方发布的代码大模型系列，从零训练 2T token（87% 代码+13% 自然语言），1B 到 33B 多种尺寸，支持项目级代码补全和填空。 |
| [deepseek-ai/DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR) | 23.9k | #1777 | 官方 · DeepSeek | DeepSeek 官方发布的“上下文光学压缩”模型，探索用视觉编码器压缩长文本上下文，已被上游 vLLM 官方支持。 |
| [microsoft/unilm](https://github.com/microsoft/unilm) | 22.2k | #1992 | 官方 · Microsoft | Microsoft Research 大规模自监督预训练研究代码库，涵盖 BitNet、RetNet、LongNet 等基础架构研究和 Kosmos 系列多模态基座模型。 |

### 预训练模型与经典 NLP

BERT 一类的预训练模型、序列建模工具包、传统 NLP 库，以及时序、金融等其他基础模型 · 9 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [fighting41love/funNLP](https://github.com/fighting41love/funNLP) | 83.6k | #189 | 社区 | 中文 NLP 资源合集：敏感词与情感词表、实体与信息抽取工具、人名与缩写词库、预训练模型与开源 NLP 项目的索引。 |
| [google-research/bert](https://github.com/google-research/bert) 🗄️已归档 | 40k | #728 | 官方 · Google | Google 发布的 BERT 官方 TensorFlow 代码与预训练模型，开启了「预训练加微调」的 NLP 范式。仓库已归档，不再更新。 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | 39.7k | #745 | 社区 | 面向金融市场 K 线的开源基础模型，在来自全球多个交易所的数据上预训练，可用于预测等下游任务。 |
| [hankcs/HanLP](https://github.com/hankcs/HanLP) | 36.5k | #873 | 社区 | 多语种自然语言处理工具包，基于 PyTorch 与 TensorFlow 2，提供分词、词性标注、依存句法、命名实体识别等十余种联合任务。 |
| [fxsjy/jieba](https://github.com/fxsjy/jieba) | 35.2k | #928 | 社区 | 广泛使用的中文分词 Python 组件，提供精确、全、搜索引擎和 paddle 四种分词模式，并支持自定义词典与关键词提取。 |
| [google-research/timesfm](https://github.com/google-research/timesfm) | 34k | #985 | 官方 · Google | Google Research 的时间序列基础模型，采用纯解码器结构预训练，用于零样本时序预测。 |
| [explosion/spaCy](https://github.com/explosion/spaCy) | 33.9k | #990 | 官方 · Explosion | 面向生产环境的工业级 NLP 库，提供分词、词性标注、命名实体识别、依存分析和可训练的预训练流水线。 |
| [facebookresearch/fairseq](https://github.com/facebookresearch/fairseq) 🗄️已归档 | 32.2k | #1081 | 官方 · Meta | Meta AI 的序列建模工具包，用于训练翻译、摘要、语言建模等文本生成模型，曾是 RoBERTa、wav2vec 等模型的官方实现。仓库已归档。 |
| [facebookresearch/fastText](https://github.com/facebookresearch/fastText) 🗄️已归档 | 26.5k | #1520 | 官方 · Meta | Meta 的高效词向量学习与文本分类库，训练速度快，提供多语种预训练词向量。仓库已归档。 |

### 计算机视觉

目标检测、分割、人脸与姿态、视觉基础模型与 3D 视觉；OCR 引擎归入「文档解析与 OCR」 · 18 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [opencv/opencv](https://github.com/opencv/opencv) | 91k | #162 | 社区 | 开源计算机视觉库，涵盖图像处理、特征检测、相机标定、目标跟踪与深度学习模型推理，C++ 实现并提供 Python 等语言绑定。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 62.1k | #347 | 官方 · Ultralytics | Ultralytics 的 YOLO 系列模型库，覆盖目标检测、实例分割、姿态估计、分类与跟踪，提供训练、验证、导出与部署的统一接口。 |
| [ultralytics/yolov5](https://github.com/ultralytics/yolov5) | 58.1k | #393 | 官方 · Ultralytics | 基于 PyTorch 的 YOLOv5 目标检测、实例分割与分类实现，以易用、快速和丰富的导出格式著称，是 YOLO 生态中最广泛使用的版本之一。 |
| [ageitgey/face_recognition](https://github.com/ageitgey/face_recognition) | 56.8k | #408 | 社区 | 基于 dlib 的 Python 人脸识别库，一行代码即可完成人脸检测、特征点定位和身份比对，并附带命令行工具。 |
| [facebookresearch/segment-anything](https://github.com/facebookresearch/segment-anything) | 55k | #427 | 官方 · Meta | Meta 的 Segment Anything 模型（SAM）推理代码与权重，可通过点、框等提示对任意图像分割出物体掩码；作者已发布视频版 SAM 2。 |
| [roboflow/supervision](https://github.com/roboflow/supervision) | 51.1k | #481 | 官方 · Roboflow | 可复用的计算机视觉工具库，提供检测结果的统一数据结构、标注绘制、跟踪、区域计数与数据集处理，可对接多种检测模型。 |
| [huggingface/pytorch-image-models](https://github.com/huggingface/pytorch-image-models) | 37.2k | #846 | 官方 · Hugging Face | timm：最大的 PyTorch 图像骨干网络与预训练权重集合，附训练、验证与推理脚本。 |
| [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe) | 37.1k | #849 | 官方 · Google | Google 的跨平台端侧机器学习方案，提供手部、人脸、姿态等实时感知的现成管线，也支持自定义模型与端侧生成式 AI。 |
| [facebookresearch/detectron2](https://github.com/facebookresearch/detectron2) | 34.7k | #943 | 官方 · Meta | Meta AI 基于 PyTorch 的目标检测与分割平台，是 Detectron 的重写版，提供 Mask R-CNN 等大量算法和模型库。 |
| [CMU-Perceptual-Computing-Lab/openpose](https://github.com/CMU-Perceptual-Computing-Lab/openpose) | 34.5k | #956 | 社区 | 首个可实时检测多人身体、手部、面部和脚部关键点的开源库，提供 C++ 与 Python 接口。 |
| [openai/CLIP](https://github.com/openai/CLIP) | 34.4k | #960 | 官方 · OpenAI | OpenAI 的图文对比预训练模型，把图像和文本映射到同一空间，可零样本地判断图像与文本描述的相关度，是多模态模型的重要基础。 |
| [open-mmlab/mmdetection](https://github.com/open-mmlab/mmdetection) | 33k | #1049 | 社区 | OpenMMLab 的目标检测工具箱与基准，模块化设计，包含大量检测与实例分割算法及模型库。 |
| [deepinsight/insightface](https://github.com/deepinsight/insightface) | 29.9k | #1234 | 社区 | 2D 与 3D 人脸分析项目，提供人脸检测、识别、对齐和属性分析的算法、模型与 Python 库。 |
| [facebookresearch/Detectron](https://github.com/facebookresearch/Detectron) 🗄️已归档 | 26.4k | #1533 | 官方 · Meta | Meta AI 早期的目标检测研究平台，实现了 Mask R-CNN 等算法，已被 PyTorch 版 Detectron2 取代并弃用。 |
| [matterport/Mask_RCNN](https://github.com/matterport/Mask_RCNN) | 25.6k | #1616 | 官方 · Matterport | 基于 Keras 与 TensorFlow 的 Mask R-CNN 实现，可对图像中的每个实例输出边界框与分割掩码。 |
| [lucidrains/vit-pytorch](https://github.com/lucidrains/vit-pytorch) | 25.5k | #1623 | 社区 | Vision Transformer 及其大量变体（Simple ViT、NaViT、DeepViT、CaiT 等）的简洁 PyTorch 实现。 |
| [graphdeco-inria/gaussian-splatting](https://github.com/graphdeco-inria/gaussian-splatting) | 24k | #1767 | 社区 | 《3D Gaussian Splatting 实时辐射场渲染》的官方实现，可从多视角图像重建场景并实时渲染新视角。 |
| [serengil/deepface](https://github.com/serengil/deepface) | 23.5k | #1832 | 社区 | 轻量的 Python 人脸识别与属性分析框架，封装多种主流人脸模型，可分析年龄、性别、情绪等属性。 |

### 语音识别

语音转文字模型、推理加速与听写工具（Whisper 系、DeepSpeech 一类） · 6 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [openai/whisper](https://github.com/openai/whisper) | 109.8k | #109 | 官方 · OpenAI | OpenAI 基于大规模弱监督训练的通用语音识别模型，支持多语种转写、语音翻译和语种识别，提供多种尺寸的开源权重与 Python 推理代码。 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 54k | #442 | 社区 | Whisper 语音识别模型的纯 C/C++ 移植，无外部依赖，针对 Apple Silicon 与 CPU 做了量化和加速，适合端侧离线转写。 |
| [cjpais/Handy](https://github.com/cjpais/Handy) | 32.5k | #1070 | 社区 | 完全离线运行的开源跨平台语音转文字桌面应用，按下快捷键说话即可把文字输入到任意应用，基于 Tauri 构建。 |
| [mozilla/DeepSpeech](https://github.com/mozilla/DeepSpeech) 🗄️已归档 | 26.8k | #1504 | 官方 · Mozilla | Mozilla 基于百度 Deep Speech 论文的端侧离线语音转文字引擎。项目已停止维护。 |
| [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | 25.6k | #1605 | 官方 · SYSTRAN | 用 CTranslate2 重新实现的 Whisper，在相同精度下推理更快、显存更省，支持量化。 |
| [m-bain/whisperX](https://github.com/m-bain/whisperX) | 24.3k | #1745 | 社区 | 在 Whisper 基础上增加词级时间戳与说话人分离的语音识别方案，并通过批处理加速转写。 |

### 语音合成、声音转换与音频处理

文字转语音、声音克隆与变声、音频分离，以及音频 / 音乐生成 · 20 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [RVC-Boss/GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) | 62.3k | #345 | 社区 | 少样本语音克隆与文字转语音 WebUI，几秒到一分钟的参考音频即可零样本或微调出目标音色，含数据切分、标注与训练工具。 |
| [CorentinJ/Real-Time-Voice-Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning) | 60.2k | #373 | 社区 | SV2TTS 的开源实现：用几秒参考音频克隆声音并实时合成任意文本，由说话人编码器、合成器和声码器三部分组成，源自作者的硕士论文。 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 56k | #415 | 社区 | 本地运行的开源 AI 语音工作室，覆盖声音克隆、语音合成和全局听写，并提供 API，可让 Agent 用自定义声音说话。 |
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | 54.5k | #434 | 官方 · Microsoft | 微软的开源前沿语音 AI 系列，包含长文本多说话人语音合成和流式语音识别模型，支持自定义热词与多语种。 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 49.8k | #507 | 社区 | 完全本地运行的 ElevenLabs 开源替代，覆盖声音克隆、声音设计、视频配音、听写转写和有声书制作，宣称支持 600 多种语言。 |
| [coqui-ai/TTS](https://github.com/coqui-ai/TTS) | 46.1k | #582 | 官方 · Coqui | 面向研究与生产的文字转语音深度学习工具包，提供预训练多语种模型、XTTS 声音克隆与流式合成，以及训练和微调脚本。 |
| [2noise/ChatTTS](https://github.com/2noise/ChatTTS) | 39.9k | #738 | 社区 | 面向日常对话场景的生成式语音模型，支持中英文、笑声与停顿等韵律控制；开源版本主要是算法与示例代码。 |
| [suno-ai/bark](https://github.com/suno-ai/bark) | 39.3k | #761 | 官方 · Suno | Suno 的文本提示生成式音频模型，可合成多语种语音，并能生成笑声、叹气等非语言声音和简单音乐。 |
| [RVC-Project/Retrieval-based-Voice-Conversion-WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) | 38.6k | #783 | 社区 | 基于检索的语音音色转换框架，用不到十分钟的语音数据即可训练变声模型，带完整的 WebUI 训练与推理流程。 |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | 38.2k | #800 | 社区 | OpenBMB 的无分词器语音合成模型，支持多语种合成、根据文字描述设计音色和高保真声音克隆。 |
| [myshell-ai/OpenVoice](https://github.com/myshell-ai/OpenVoice) | 37.7k | #816 | 官方 · MyShell | MIT 与 MyShell 发布的即时声音克隆模型，可精确复制参考音色并控制情感、口音与节奏，支持跨语种合成。 |
| [babysor/MockingBird](https://github.com/babysor/MockingBird) | 36.9k | #863 | 社区 | 以中文为主的实时声音克隆项目，几秒参考音频即可合成任意文本。作者已表示不再积极更新。 |
| [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | 32.9k | #1055 | 官方 · Fish Audio | 开源的高质量文字转语音系统，支持多语种和零样本声音克隆。代码和权重使用 Fish Audio Research License 发布。 |
| [deezer/spleeter](https://github.com/deezer/spleeter) | 28.5k | #1362 | 官方 · Deezer | Deezer 的音源分离库，附预训练模型，可把歌曲拆分成人声、伴奏、鼓、贝斯等分轨，提供命令行和 Python 接口。 |
| [svc-develop-team/so-vits-svc](https://github.com/svc-develop-team/so-vits-svc) 🗄️已归档 | 28.1k | #1399 | 社区 | 基于 SoftVC 与 VITS 的歌声转换项目，可把歌声换成目标音色。仓库已进入归档状态。 |
| [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | 26.6k | #1511 | 官方 · Resemble AI | Resemble AI 的开源文字转语音模型系列，最新版本支持多语种合成与零样本声音克隆。 |
| [Anjok07/ultimatevocalremovergui](https://github.com/Anjok07/ultimatevocalremovergui) | 26.4k | #1529 | 社区 | 基于深度神经网络的人声分离桌面工具，用训练好的音源分离模型去除音频里的人声或伴奏。 |
| [index-tts/index-tts](https://github.com/index-tts/index-tts) | 24.2k | #1756 | 社区 | 工业级的可控零样本文字转语音系统，仅需一段参考音频即可克隆音色，并可控制时长与情感。 |
| [QwenAudio/CosyVoice](https://github.com/QwenAudio/CosyVoice) | 23.8k | #1793 | 社区 | 多语种语音生成大模型，提供推理、训练与部署全流程，支持零样本克隆和流式合成。 |
| [facebookresearch/audiocraft](https://github.com/facebookresearch/audiocraft) | 23.7k | #1815 | 官方 · Meta | Meta 的音频生成深度学习库，包含 MusicGen、AudioGen 等音乐与音效生成模型的推理和训练代码。 |

### 图像与视频生成

扩散模型与生成对抗网络、文生图 / 文生视频模型，以及承载它们的 WebUI 与节点工作流 · 12 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) | 165.2k | #51 | 社区 | 基于 Gradio 的 Stable Diffusion 网页界面，提供文生图、图生图、局部重绘、放大、LoRA 与大量社区扩展，是本地跑扩散模型最常用的前端之一。 |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | 135.6k | #76 | 官方 · Comfy Org | 模块化的扩散模型图形界面与后端，用节点图串联采样、控制、放大等步骤，支持图像、视频和音频生成的可复用工作流。 |
| [CompVis/stable-diffusion](https://github.com/CompVis/stable-diffusion) | 73.5k | #259 | 社区 | Stable Diffusion 的原始研究代码，即基于潜空间扩散模型的文生图模型，由 CompVis 与 Stability AI、Runway 合作完成。 |
| [lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) | 53.2k | #453 | 社区 | 以 Midjourney 式体验为目标的离线开源文生图软件，内置提示词优化与参数预设，减少手动调参。 |
| [XingangPan/DragGAN](https://github.com/XingangPan/DragGAN) | 35.7k | #904 | 社区 | SIGGRAPH 2023 论文 DragGAN 的官方代码，允许在生成图像上拖动控制点来交互式编辑物体姿态和形状。 |
| [huggingface/diffusers](https://github.com/huggingface/diffusers) | 34.6k | #949 | 官方 · Hugging Face | Hugging Face 的扩散模型库，提供预训练管线、可替换的噪声调度器和模型组件，覆盖图像、视频与音频生成，并支持训练与微调。 |
| [lllyasviel/ControlNet](https://github.com/lllyasviel/ControlNet) | 34.1k | #976 | 社区 | 为文生图扩散模型增加边缘、深度、姿态等条件控制的神经网络结构，让生成结果可以按参考结构约束。 |
| [hpcaitech/Open-Sora](https://github.com/hpcaitech/Open-Sora) | 29.9k | #1235 | 官方 · HPC-AI Tech | 开源视频生成项目，目标是以较低成本高效生成高质量视频，开放模型、工具和训练细节。 |
| [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) | 28.3k | #1375 | 官方 · Invoke | 面向创作者的 Stable Diffusion 系创作引擎，提供带画布的 Web 界面、节点工作流和多种模型支持。 |
| [Stability-AI/generative-models](https://github.com/Stability-AI/generative-models) | 27.3k | #1456 | 官方 · Stability AI | Stability AI 的生成模型仓库，包含 SDXL、Stable Video Diffusion 及 SV4D 等图像、视频与 4D 生成模型的官方代码。 |
| [black-forest-labs/flux](https://github.com/black-forest-labs/flux) | 26k | #1567 | 官方 · Black Forest Labs | Black Forest Labs 的 FLUX.1 官方推理仓库，提供开放权重的图像生成与编辑模型的最小推理代码。 |
| [junyanz/pytorch-CycleGAN-and-pix2pix](https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix) | 25.3k | #1646 | 社区 | CycleGAN 与 pix2pix 的 PyTorch 官方实现，用于成对与非成对的图像到图像转换。 |

### 图像增强与换脸

超分辨率、人脸修复、去背景、擦除补全、换脸与深度伪造等面向已有图像 / 视频的处理 · 10 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | 96.9k | #137 | 社区 | 只需一张人脸图片即可对摄像头画面或视频实时换脸的工具，面向直播与视频创作，README 中附有使用免责声明。 |
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | 57.6k | #400 | 社区 | 基于深度学习识别并替换图片与视频中人脸的开源软件，带图形界面，包含提取、训练与转换的完整流程。 |
| [upscayl/upscayl](https://github.com/upscayl/upscayl) | 50k | #499 | 社区 | 跨平台的 AI 图像放大桌面软件，基于 Real-ESRGAN 等超分模型，支持批量处理和自定义模型。 |
| [TencentARC/GFPGAN](https://github.com/TencentARC/GFPGAN) | 37.7k | #821 | 官方 · Tencent | 腾讯 ARC 实验室的真实场景人脸修复算法，利用预训练人脸生成先验恢复老照片和低质量人像。 |
| [xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) | 36.9k | #860 | 社区 | 面向真实场景的通用图像与视频超分修复算法，提供针对动漫图像和动漫视频的专用小模型。 |
| [iperov/DeepFaceLive](https://github.com/iperov/DeepFaceLive) 🗄️已归档 | 31k | #1165 | 社区 | 面向直播和视频通话的实时换脸软件，用预训练的 DFM 人脸模型替换摄像头或视频里的人脸。仓库已归档。 |
| [facefusion/facefusion](https://github.com/facefusion/facefusion) | 30.1k | #1215 | 社区 | 开源的人脸处理平台，提供图片和视频的换脸、口型同步、人脸增强等功能，可通过界面或命令行使用。 |
| [nagadomi/waifu2x](https://github.com/nagadomi/waifu2x) | 28.2k | #1383 | 社区 | 用深度卷积网络对动漫风格图像做超分辨率与降噪，同时也支持照片，提供在线演示与命令行实现。 |
| [danielgatis/rembg](https://github.com/danielgatis/rembg) | 24.9k | #1675 | 社区 | 去除图像背景的工具，可作为命令行、Python 库、HTTP 服务或 Docker 容器使用。 |
| [Sanster/IOPaint](https://github.com/Sanster/IOPaint) 🗄️已归档 | 23.3k | #1857 | 社区 | 基于 SOTA 模型的图像修复工具，可擦除不需要的物体、瑕疵和文字，并支持外延与替换。仓库已归档。 |

### 强化学习与具身智能

强化学习环境与算法、机器人学习和具身智能仿真 · 3 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [openai/gym](https://github.com/openai/gym) 🗄️已归档 | 37.2k | #842 | 官方 · OpenAI | 经典的强化学习环境接口与基准集合。维护团队已将后续开发转到 Gymnasium，Gym 不再更新，仓库已归档。 |
| [Genesis-Embodied-AI/genesis-world](https://github.com/Genesis-Embodied-AI/genesis-world) | 30k | #1223 | 社区 | 面向通用机器人与具身智能学习的仿真平台，集成统一的多物理引擎、照片级渲染器和跨平台编译器。 |
| [huggingface/lerobot](https://github.com/huggingface/lerobot) | 27.9k | #1412 | 官方 · Hugging Face | Hugging Face 的机器人学习库，用 PyTorch 提供真实机器人可用的模型、数据集与工具，降低端到端学习的门槛。 |

## 训练、推理与工具链

模型开发与运行所需的框架、训练、部署、接入、评测和配套工具，LLM 与传统 ML 通用

### 框架与数值基础库

深度学习 / 机器学习框架、自动微分、分布式计算与端侧推理框架，以及 NumPy、pandas 这类基础数据库（PyTorch、TensorFlow、JAX、scikit-learn、XGBoost 一类） · 19 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 200.6k | #29 | 官方 · Google | Google 开源的端到端机器学习平台，提供 Python / C++ 的张量计算、自动微分、模型训练与部署工具链，覆盖服务器、移动端与浏览器。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 103.5k | #121 | 社区 | 以动态计算图和 GPU 加速著称的深度学习框架，提供类 NumPy 的张量运算与基于磁带的自动微分，是当前研究界与工业界最主流的训练框架。 |
| [tensorflow/models](https://github.com/tensorflow/models) | 77.7k | #220 | 官方 · Google | TensorFlow Model Garden：官方与研究社区维护的最新模型实现和建模方案，展示 TensorFlow 2 的最佳实践，覆盖视觉、NLP、推荐等任务。 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | 67.4k | #293 | 社区 | Python 传统机器学习库，基于 NumPy 与 SciPy，提供分类、回归、聚类、降维、模型选择和预处理的统一接口。 |
| [keras-team/keras](https://github.com/keras-team/keras) | 64.3k | #323 | 社区 | 面向人的深度学习框架，Keras 3 是多后端实现，可在 JAX、TensorFlow、PyTorch 上运行同一份模型代码。 |
| [pandas-dev/pandas](https://github.com/pandas-dev/pandas) | 49.9k | #502 | 社区 | Python 的数据分析与处理库，提供 DataFrame 等结构和丰富的清洗、聚合、时间序列工具。 |
| [ray-project/ray](https://github.com/ray-project/ray) | 44k | #630 | 社区 | 面向 AI 的分布式计算引擎，核心是通用分布式运行时，并配有数据处理、训练、调参、强化学习和模型服务等库。 |
| [jax-ml/jax](https://github.com/jax-ml/jax) | 36.4k | #879 | 社区 | 可组合的 Python + NumPy 程序变换库，提供自动微分、向量化和即时编译，可在 GPU / TPU 上高性能运行，是许多大模型训练栈的基础。 |
| [BVLC/caffe](https://github.com/BVLC/caffe) | 34.6k | #950 | 社区 | 伯克利 AI 研究组与社区开发的 C++ 深度学习框架，以表达力、速度和模块化为目标，曾是早期计算机视觉研究的主流框架。 |
| [tinygrad/tinygrad](https://github.com/tinygrad/tinygrad) | 33.7k | #1007 | 官方 · tiny corp | 介于 PyTorch 与 micrograd 之间的极简深度学习栈，包含带自动微分的张量库、算子融合编译器和多种硬件后端。 |
| [numpy/numpy](https://github.com/numpy/numpy) | 32.9k | #1056 | 社区 | Python 科学计算的基础库，提供 N 维数组、广播、线性代数与随机数等，是几乎所有机器学习库的底层依赖。 |
| [Lightning-AI/pytorch-lightning](https://github.com/Lightning-AI/pytorch-lightning) | 31.4k | #1143 | 官方 · Lightning AI | 在 PyTorch 之上的训练框架，把研究代码与工程样板分离，支持多 GPU / 多节点扩展而几乎不改代码。 |
| [dmlc/xgboost](https://github.com/dmlc/xgboost) | 28.8k | #1333 | 社区 | 高效、灵活、可移植的分布式梯度提升库（GBDT），提供 Python、R、JVM 等接口，是表格数据建模的常用工具。 |
| [ml-explore/mlx](https://github.com/ml-explore/mlx) | 28.6k | #1350 | 官方 · Apple | Apple 机器学习研究团队的数组框架，面向 Apple Silicon，采用统一内存和惰性计算，提供类 NumPy 与 PyTorch 的 API。 |
| [fastai/fastai](https://github.com/fastai/fastai) | 28.2k | #1387 | 社区 | 基于 PyTorch 的高层深度学习库，用分层 API 让常见任务几行代码即可完成，同时保留底层可定制性，与配套课程和书紧密结合。 |
| [pjreddie/darknet](https://github.com/pjreddie/darknet) | 26.5k | #1521 | 社区 | 用 C 和 CUDA 编写的神经网络框架，是早期 YOLO 目标检测模型的原始实现所在。 |
| [PaddlePaddle/Paddle](https://github.com/PaddlePaddle/Paddle) | 24.1k | #1761 | 官方 · Baidu | 百度飞桨：国内首个自主研发的深度学习平台，提供动静态图、分布式训练和部署工具链。 |
| [pyg-team/pytorch_geometric](https://github.com/pyg-team/pytorch_geometric) | 24.1k | #1763 | 社区 | 基于 PyTorch 的图神经网络库，提供图数据结构、大量 GNN 层与模型以及大规模图训练支持。 |
| [Tencent/ncnn](https://github.com/Tencent/ncnn) | 23.9k | #1784 | 官方 · Tencent | 腾讯的高性能神经网络推理框架，面向移动端、嵌入式与桌面，无第三方运行时依赖，支持 CPU 与 Vulkan GPU。 |

### 训练与微调

预训练、微调、强化学习后训练与模型改造 · 9 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 166.8k | #50 | 官方 · Hugging Face | Hugging Face 官方出品，定位为“模型定义框架”：把文本、视觉、音频、多模态的前沿模型定义统一沉淀在一处，让同一个模型定义能被 Axolotl/DeepSpeed 等训练框架和 vLLM/SGLang/llama.cpp 等推理引擎直接复用，Hub 上已有 100 万+ 基于它的模型 checkpoint。 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 77.1k | #223 | 社区 | 从微调框架发展成的本地桌面 App，可在本地运行和训练 LLM/扩散模型，支持 GGUF、MLX 等多种格式。 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 75.2k | #241 | 社区 | 统一、高效的 100+ 大语言模型与视觉语言模型微调框架（ACL 2024 论文），支持 LoRA/QLoRA/RLHF 等主流微调技术，被 Amazon、NVIDIA、阿里云等在生产中使用。 |
| [deepspeedai/DeepSpeed](https://github.com/deepspeedai/DeepSpeed) | 43.2k | #647 | 社区 | 深度学习分布式训练与推理优化库，以 ZeRO 显存优化技术闻名，支持千亿/万亿参数模型的高效训练，被 LinkedIn 等用于生产级大模型蒸馏训练。 |
| [hpcaitech/ColossalAI](https://github.com/hpcaitech/ColossalAI) | 41.4k | #687 | 社区 | 让大模型训练更便宜更快更易用的分布式训练系统，支持数据/流水线/张量并行等多种并行策略，提供一键云端 GPU 训练环境。 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 32.6k | #1066 | 社区 | 全自动移除语言模型“安全对齐”审查的工具，基于方向性消融技术加 Optuna 参数优化，无需重新训练即可解除大多数稠密/MoE 模型的拒答行为。 |
| [tatsu-lab/stanford_alpaca](https://github.com/tatsu-lab/stanford_alpaca) | 30.2k | #1204 | 社区 | 斯坦福 Alpaca 项目：包含 5.2 万条指令跟随数据、生成这些数据的方法，以及基于 LLaMA 微调指令模型的训练代码。 |
| [huggingface/open-r1](https://github.com/huggingface/open-r1) | 26.5k | #1525 | 官方 · Hugging Face | Hugging Face 官方发起的 DeepSeek-R1 完全开放复现项目，提供 SFT/GRPO 训练脚本、模型评测和从 R1 蒸馏合成数据的完整工具链。 |
| [verl-project/verl](https://github.com/verl-project/verl) | 23.7k | #1807 | 社区 | 字节跳动 Seed 团队发起、现由社区维护的强化学习后训练框架，实现 HybridFlow 论文方案，支持 GRPO/PPO 等算法并与 vLLM/SGLang/Megatron 等推理训练框架无缝集成。 |

### 推理服务与加速

高吞吐推理服务引擎与底层注意力加速 · 5 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 93k | #152 | 社区 | 源自 UC Berkeley Sky Computing Lab 的高吞吐、内存高效 LLM 推理与服务引擎，核心技术是 PagedAttention 和连续批处理，已发展成有 2000+ 贡献者的开源项目，是本地/自建 LLM 服务最常用的推理后端之一。 |
| [lm-sys/FastChat](https://github.com/lm-sys/FastChat) | 39.6k | #753 | 社区 | LMSYS 出品的大模型训练/服务/评测开放平台，驱动着 Chatbot Arena（lmarena.ai）积累了超百万人类对战投票，也是 Vicuna 模型的发布仓库。 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 36.7k | #867 | 社区 | 高性能 LLM/多模态模型推理服务框架，Day-0 支持 DeepSeek-V4/Kimi K3 等最新开源模型，在 NVIDIA GB300 等新硬件上做推理性能优化。 |
| [modular/modular](https://github.com/modular/modular) | 29.9k | #1231 | 官方 · Modular | Modular 平台的开源部分，包含 MAX 推理与服务框架和 Mojo 语言，目标是统一 AI 开发与部署。 |
| [Dao-AILab/flash-attention](https://github.com/Dao-AILab/flash-attention) | 25k | #1664 | 社区 | 被广泛采用的高效精确注意力机制实现 FlashAttention / FlashAttention-2/3，是几乎所有现代 LLM 训练和推理框架依赖的底层加速库。 |

### 本地推理

在个人电脑 / 端侧设备上跑模型的引擎与工具 · 13 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 181.9k | #43 | 社区 | 本地运行大模型的命令行工具，一条命令即可下载并跑起 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等主流开源模型，并能直接接入 Claude Code、OpenClaw、OpenCode、Codex、Copilot 等编码 Agent。 |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | 130k | #81 | 社区 | 用纯 C/C++ 实现的大模型推理引擎，基于自研的 ggml 张量库，几乎不依赖第三方库即可在 CPU/GPU/Apple Silicon 等各种硬件上跑量化后的 LLM，是本地部署生态里被最多上层工具（如 Ollama、LM Studio）复用的底层推理内核之一。 |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | 49.3k | #515 | 社区 | 开源本地 AI 引擎，用一套 OpenAI/Anthropic/ElevenLabs 兼容 API 统一跑 LLM、视觉、语音、图像、视频等任意模态模型，按需拉取 llama.cpp/vLLM/whisper.cpp 等后端，内置支持工具调用、RAG、MCP 和技能的自主 Agent。 |
| [exo-explore/exo](https://github.com/exo-explore/exo) | 47.7k | #548 | 社区 | 把多台设备连成一个 AI 集群本地跑大模型的工具，支持 Thunderbolt RDMA 直连降低设备间延迟、自动设备发现与拓扑感知的模型自动切分，兼容 OpenAI/Claude/Ollama API。 |
| [microsoft/BitNet](https://github.com/microsoft/BitNet) | 40.4k | #719 | 官方 · Microsoft | Microsoft 官方出品的 1-bit LLM 官方推理框架（bitnet.cpp），支持 CPU/GPU 上高效跑三值量化模型，并发布配套的 1-bit 嵌入模型与 ASR 推理引擎。 |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | 38.6k | #787 | 社区 | 用纯 C 编写、零依赖的推理引擎，通过把专家权重从存储流式载入，让消费级硬件也能运行数百亿至数万亿参数的 MoE 模型。 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 37.4k | #833 | 社区 | 命令行硬件适配工具，检测你的 CPU/内存/GPU/显存配置，推荐能在本机流畅跑的开源 LLM 及量化方案，并可把实测 token/s 提交回项目共享给其他人参考。 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | 35.2k | #926 | 社区 | 极致显存优化的大模型推理库，通过分层流式加载让 70B 模型在 4GB 显卡上跑起来，支持 Kimi K3（2.8T 参数）、DeepSeek-V3 等超大模型的单卡推理与训练。 |
| [mozilla-ai/llamafile](https://github.com/mozilla-ai/llamafile) | 26.1k | #1559 | 官方 · Mozilla | Mozilla 官方项目，把 llama.cpp 和 Cosmopolitan Libc 结合成单文件可执行程序，跨平台免安装本地运行开源 LLM，配套 whisperfile 语音转文字工具。 |
| [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) | 24.8k | #1688 | 官方 · Google | Google AI Edge 的端侧生成式 AI 展示应用，可在手机上本地运行开源模型并体验各类端侧 ML / GenAI 场景。 |
| [mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) | 23.2k | #1868 | 社区 | 通用 LLM 部署引擎，通过机器学习编译技术让模型能跑在 AMD/NVIDIA/Apple/Intel 各类 GPU 乃至浏览器 WebGPU 和手机端，提供 OpenAI 兼容 API。 |
| [antirez/ds4](https://github.com/antirez/ds4) | 22.8k | #1915 | 社区 | Redis 作者 antirez 打造的 DeepSeek V4/GLM 5.x 等模型本地推理引擎 DwarfStar，主打 Metal/CUDA/ROCm 消费级硬件上运行超大模型，代码库自带专用 GGUF 生成工具。 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22.4k | #1976 | 社区 | 为 Apple Silicon 优化的 LLM 推理服务器，支持连续批处理和 SSD 分层 KV 缓存，从 macOS 菜单栏直接管理，让本地大模型服务实际可用于编码等生产场景。 |

### API 网关与中转

统一多家模型 API、路由转发、订阅中转 · 14 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 71.6k | #272 | 社区 | 免费的 AI 网关，一个接口聚合 359 家提供商、1200+ 模型（含 150+ 免费），自动配额感知和故障转移，兼容 Claude Code、Codex、Cursor 等主流编码 Agent。 |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 66.7k | #298 | 社区 | 社区维护的多提供商 LLM 聚合项目，把各类可访问的免费模型和接口聚合成统一的 OpenAI 兼容 REST API，附带本地 GUI 和 Python/JS 客户端。 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59.9k | #376 | 社区 | 统一 100+ LLM 提供商调用格式的 AI 网关，Rust 核心 + Python SDK，可作为库直接调用，也能部署成团队共用的代理服务，附带成本追踪、护栏和负载均衡。 |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | 56.3k | #413 | 社区 | 聚合 56 个合规免费/付费/订阅/本地模型提供商、覆盖 11 款编码 Agent 的统一模型目录和多协议客户端接入方案，每月可用 13 亿+免费 token。 |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 53.6k | #447 | 社区 | 把 Antigravity、ChatGPT Codex、Claude Code、Grok Build 等多种编码 Agent CLI 包装成 OpenAI/Gemini/Claude/Codex 兼容的 API 服务，可通过 API 方式复用这些 CLI 自带的免费模型额度。 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | 49.1k | #519 | 社区 | 自托管 AI 网关，把 OpenAI、Anthropic、Gemini、Azure、Bedrock、DeepSeek、通义千问等上游模型统一转换成 OpenAI/Claude/Gemini 兼容格式，用于团队级模型分发、路由和用量成本管理。 |
| [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) | 43.4k | #642 | 社区 | 免费大模型 API 中转服务，支持 GPT/DeepSeek/Claude/Gemini 等主流模型统一走 OpenAI 协议调用，免费额度每周 5 万点、每天 100 次，仅限个人非商业用途。 |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 43.1k | #648 | 社区 | 开源 AI API 中转/订阅分发平台，让 Claude、OpenAI、Gemini、Grok 等订阅可被多人拼车共享分摊成本，原生工具无缝接入，官方声明可能违反上游服务条款，风险自担。 |
| [musistudio/claude-code-router](https://github.com/musistudio/claude-code-router) | 37.5k | #829 | 社区 | 本地控制面板，把 Claude Code、Codex、Grok CLI、Kimi CLI 等编码 Agent 与任意模型供应商连接起来，统一路由、故障转移、扩展能力并观测每一次请求。 |
| [songquanpeng/one-api](https://github.com/songquanpeng/one-api) | 37.1k | #854 | 社区 | LLM API 统一管理与分发系统，支持 OpenAI/Azure/Claude/Gemini/DeepSeek/文心一言/通义千问等主流模型，单可执行文件、Docker 一键部署，用于 key 管理和二次分发。 |
| [lbjlaq/Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager) | 31.8k | #1107 | 社区 | Antigravity 账号管理与协议中转工具，一键切换多账号、把 Web Session 转成标准 API 接口，用 Tauri v2 + React 构建。 |
| [decolua/9router](https://github.com/decolua/9router) | 30.1k | #1214 | 社区 | 免费 AI 路由与 token 节省工具，把 Claude Code、Cursor、Codex 等编码工具接到 40+ 免费/低价模型供应商，自动故障转移并压缩工具输出节省 20-40% token。 |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | 29.7k | #1252 | 社区 | 聚合 34 个免费 LLM 供应商、635 个免费模型端点的网关，统一走一个 OpenAI 兼容 /v1 接口，智能路由加自动故障转移，仅限个人实验使用。 |
| [acheong08/ChatGPT](https://github.com/acheong08/ChatGPT) 🗄️已归档 | 27.9k | #1411 | 社区 | 逆向工程的 ChatGPT 接口库（revChatGPT），可用于搭建聊天机器人等。仓库已归档。 |

### 观测、评测与 Prompt 管理

LLM 应用的链路追踪、评测、红队与 Prompt 优化 · 5 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer) | 36k | #896 | 社区 | AI 提示词优化工具，支持网页、桌面、Chrome 插件、Docker 四种形态，把手写/模板/本地导入的提示词进行优化、测试、评估并沉淀为可复用资产。 |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | 35.2k | #927 | 社区 | 开源 LLM 应用可观测性与评测平台，追踪、评估、改进 AI 应用的一站式工具，可分钟级自托管，被 ClickHouse 收购后持续商业化运营。 |
| [mlflow/mlflow](https://github.com/mlflow/mlflow) | 28.2k | #1392 | 社区 | 面向 Agent、LLM 和 ML 模型的开源 AI 工程平台，提供调试追踪、评测、监控、Prompt 管理和 AI 网关，月下载量超 6000 万。 |
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | 25.6k | #1612 | 社区 | LLM 评测与红队测试 CLI/库，比较 GPT/Claude/Gemini/DeepSeek 等模型表现，支持声明式配置和 CI/CD 集成，README 提到项目已加入 OpenAI 但保持开源 MIT 协议独立运营。 |
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22.3k | #1980 | 社区 | Comet 出品的开源 LLM 可观测性与评测平台，覆盖 Agent 追踪、LLM 评测、Prompt 管理和生产监控，Apache-2.0 协议可完全自托管。 |

### 标注、可视化与 Demo 工具

数据标注、模型可视化与可解释性、机器学习 Demo 界面等围绕模型开发的工具 · 6 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [gradio-app/gradio](https://github.com/gradio-app/gradio) | 43.6k | #637 | 社区 | 用几行 Python 为机器学习模型、API 或任意函数构建可分享的 Web 演示界面，可部署到 Hugging Face Spaces。 |
| [lutzroeder/netron](https://github.com/lutzroeder/netron) | 33.5k | #1018 | 社区 | 神经网络、深度学习与机器学习模型的可视化查看器，支持 ONNX、TensorFlow Lite、PyTorch、Keras 等多种格式。 |
| [HumanSignal/label-studio](https://github.com/HumanSignal/label-studio) | 28.4k | #1369 | 官方 · HumanSignal | 多类型数据标注工具，可标注图像、文本、音频、视频和时间序列，并能接入模型做预标注和主动学习。 |
| [shap/shap](https://github.com/shap/shap) | 25.8k | #1592 | 社区 | 基于博弈论 Shapley 值的模型可解释性方法，可对任意机器学习模型的输出给出各特征的贡献。 |
| [HumanSignal/labelImg](https://github.com/HumanSignal/labelImg) 🗄️已归档 | 25.1k | #1662 | 官方 · HumanSignal | 经典的图像标注桌面工具，用于给目标检测数据集画框并导出 Pascal VOC、YOLO 格式；现已并入 Label Studio，仓库已归档。 |
| [HarisIqbal88/PlotNeuralNet](https://github.com/HarisIqbal88/PlotNeuralNet) | 25k | #1669 | 社区 | 用 LaTeX 绘制神经网络结构图的代码，方便放进论文和报告。 |

## 数据与检索

把外部数据变成 AI 可用的输入：抓取、解析、检索

### RAG 与知识库

检索增强生成引擎、文档问答与企业知识库 · 16 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 91.5k | #155 | 社区 | 融合 RAG 与 Agent 能力的检索增强生成引擎，为 LLM 构建更优质的上下文层。 |
| [pathwaycom/pathway](https://github.com/pathwaycom/pathway) | 62.2k | #346 | 社区 | 支持流处理、实时分析、LLM 管道和 RAG 的 Python ETL 框架，同一套代码可在本地开发、CI/CD 测试和生产环境的批处理/流式场景间无缝切换。 |
| [pathwaycom/llm-app](https://github.com/pathwaycom/llm-app) | 58.9k | #386 | 社区 | 开箱即用的 RAG/AI 管道/企业搜索云模板集合，与 Sharepoint、Google Drive、S3、Kafka、PostgreSQL 等实时数据源保持同步，Docker 友好。 |
| [zylon-ai/private-gpt](https://github.com/zylon-ai/private-gpt) | 57.6k | #401 | 官方 · Zylon | PrivateGPT：把本地模型变成生产级 AI 应用的 API 层，提供 RAG、技能与工具等能力，强调数据不出本机。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 52.4k | #462 | 社区 | 文档处理与 RAG 框架，当前重心已转向文档解析与信息抽取（配套商业化产品 LlamaParse），并推出免费开源的极速文本解析器 LiteParse 等衍生项目。 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 39.9k | #734 | 社区 | 简单快速的检索增强生成系统（EMNLP2025），支持多种文本分块策略、角色化 LLM 配置，并已合并多模态解析能力（MinerU/Docling），可对接 OpenSearch 等存储后端。 |
| [The-Vibe-Company/quivr](https://github.com/The-Vibe-Company/quivr) | 39.6k | #751 | 社区 | 带主见的 RAG 组件，几行代码即可给产品接入检索增强生成能力，支持任意 LLM（GPT4/Groq/Llama）和任意向量库（PGVector/Faiss），配套 Megaparse 文件解析。 |
| [chatchat-space/Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) | 38.7k | #782 | 社区 | 基于 LangChain 与 ChatGLM/Qwen/Llama 等模型实现的本地知识库 RAG 与 Agent 应用，支持离线私有部署，可用 Xinference/Ollama 等框架接入开源模型。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 37.9k | #812 | 社区 | 无向量数据库的推理式 RAG，把文档索引成层级树结构，让 LLM 像人类专家一样逐层“推理检索”而非单纯语义相似度匹配，专为长篇专业文档设计。 |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | 36.2k | #887 | 官方 · Microsoft | Microsoft 官方出品的模块化图谱式检索增强生成系统，通过构建知识图谱提升复杂问答场景下的检索质量。 |
| [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | 32.3k | #1076 | 社区 | 开源 AI 聊天平台，作为团队和 AI Agent 的统一知识/上下文层，连接 50+ 应用索引企业知识，支持自托管部署、网页搜索、沙箱和技能扩展。 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | 31.4k | #1139 | 官方 · Tencent | 腾讯官方出品的开源 LLM 知识平台，把原始文档变成可查询的 RAG、自主推理 Agent 和自维护 Wiki 三合一系统，支持从 ClawHub/SkillHub 安装技能扩展 Agent 工具箱。 |
| [tobi/qmd](https://github.com/tobi/qmd) | 30.1k | #1210 | 社区 | 面向个人文档、知识库和会议记录的本地搜索引擎，结合 BM25、向量检索与 LLM 重排序，全部经 node-llama-cpp 在本机运行。 |
| [Cinnamon/kotaemon](https://github.com/Cinnamon/kotaemon) | 25.8k | #1590 | 社区 | 开源 RAG 文档问答工具，面向终端用户和开发者双重需求设计，提供干净可定制的聊天界面和可扩展的 RAG 管道。 |
| [HKUDS/RAG-Anything](https://github.com/HKUDS/RAG-Anything) | 23.5k | #1836 | 社区 | 港大数据智能实验室出品的一体化多模态 RAG 框架，与同实验室的 LightRAG 深度集成。 |
| [PromtEngineer/localGPT](https://github.com/PromtEngineer/localGPT) | 22.2k | #1995 | 社区 | 完全本地运行的私有文档问答平台，混合稠密向量检索和全文检索，配合重排序、智能路由和上下文剪枝，数据完全不出本机。 |

### 向量数据库

向量存储与相似度检索 · 5 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 46.3k | #578 | 社区 | 云原生高性能向量数据库，专为大规模向量近似最近邻检索设计，是 RAG 系统中最常用的开源向量库之一。 |
| [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | 41k | #700 | 官方 · Meta | Meta AI 研究院出品的稠密向量高效相似度检索与聚类库，支持 CPU/GPU、十亿级向量规模，是众多 RAG/向量检索系统底层依赖的基础库。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 34.9k | #940 | 社区 | Rust 编写的高性能向量数据库与搜索引擎，支持混合检索、多租户过滤，并提供官方 Agent Skills 让编码 Agent 直接做量化/分片等向量检索工程决策。 |
| [chroma-core/chroma](https://github.com/chroma-core/chroma) | 29.4k | #1282 | 社区 | 开源 AI 数据基础设施，专注检索/向量数据库，核心 API 仅 4 个函数即可上手，也提供托管的 Chroma Cloud 服务。 |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | 23.2k | #1869 | 社区 | 给 Postgres 添加向量相似度检索能力的开源扩展，是最广泛使用的“数据库自带向量检索”方案之一。 |

### 网页抓取

把网页 / 社媒内容抓成 LLM 可读的 Markdown / JSON · 6 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 186.9k | #39 | 社区 | 面向 Agent 的网页抓取 API，能搜索、抓取并与网页交互，把内容转成干净的 Markdown 或结构化 JSON；号称覆盖 96% 的网页（含 JS 重度渲染页面）、P95 延迟 3.4 秒，自动处理代理轮换、限流和反爬，也提供开源自建和托管两种形态。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 86.3k | #180 | 社区 | 给 AI Agent“装上互联网能力”的工具，一个 CLI 即可读取和搜索 Twitter、Reddit、YouTube、GitHub、B 站、小红书等平台内容，零 API 费用。 |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 84.6k | #186 | 社区 | 自适应网页抓取框架，解析器能随网站改版自动重新定位元素，内置反封锁抓取器可绕过 Cloudflare 等反爬机制，支持并发爬取与自动代理轮换。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 84.5k | #187 | 社区 | 面向 LLM 和 AI Agent 的开源网页爬虫，把任意网站转成干净的 LLM-ready Markdown，供 RAG、Agent 和数据管道使用，可自建也可用托管版 Crawl4AI Cloud。 |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 31.4k | #1138 | 社区 | 用 LLM 加图逻辑构建抓取流水线的 Python 网页爬虫库，说出想要提取的信息，库会自动处理网页/本地文档（XML/HTML/JSON/Markdown）解析。 |
| [BuilderIO/gpt-crawler](https://github.com/BuilderIO/gpt-crawler) | 22.4k | #1972 | 社区 | 抓取网站生成知识文件用于创建自定义 GPT 的工具，输入一个或多个 URL 即可产出可直接上传给 OpenAI 自定义 GPT 的知识库文件。 |

### 文档解析与 OCR

PDF / Office 等文件转 Markdown、结构化信息抽取；含 OCR 引擎 · 13 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 187.7k | #36 | 官方 · Microsoft | Microsoft 官方出品的轻量 Python 工具，把 PDF、PPT、Word、Excel、图片（含 OCR）、音频等各类文件转换成 Markdown，专为 LLM 和文本分析流水线设计，优先保留标题、列表、表格、链接等文档结构而非追求给人看的高保真排版。 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 90.5k | #166 | 官方 · Baidu | 百度飞桨的 OCR 与文档 AI 工具集，把 PDF 和图片转成面向 LLM 的结构化数据（JSON / Markdown），支持 100 多种语言。 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 80.9k | #206 | 社区 | 把 PDF、Office 文档等复杂文件转成 LLM-ready 的 Markdown/JSON，支持版面分析、OCR、公式表格识别，专为 Agentic 工作流的文档解析设计。 |
| [tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract) | 76.8k | #229 | 社区 | 经典开源 OCR 引擎，最早由 HP 开发后由 Google 长期维护，基于 LSTM 识别百余种语言，提供命令行与 libtesseract 库。 |
| [docling-project/docling](https://github.com/docling-project/docling) | 68.2k | #290 | 社区 | 把 PDF、DOCX、PPTX、图片、音频等多种文档格式解析成统一表示，为生成式 AI 生态提供无缝对接的文档预处理能力，支持版面理解、表格结构识别等高级 PDF 解析。 |
| [hiroi-sora/Umi-OCR](https://github.com/hiroi-sora/Umi-OCR) | 47.6k | #552 | 社区 | 免费离线的 OCR 桌面软件，支持截图识别、批量图片与 PDF 识别、排除水印和页眉页脚，并提供命令行与 HTTP 接口。 |
| [datalab-to/marker](https://github.com/datalab-to/marker) | 40.1k | #723 | 官方 · Datalab | 把 PDF、图片、Office 与 EPUB 等文档快速转成 Markdown、JSON 和 HTML，保留表格、公式与版面，可选用 LLM 提升准确度。 |
| [google/langextract](https://github.com/google/langextract) | 38.9k | #770 | 官方 · Google | Google 官方 Python 库，用 LLM 从非结构化文本中抽取结构化信息并做精确的原文溯源和交互式可视化，支持 Gemini 和本地 Ollama 模型。 |
| [naptha/tesseract.js](https://github.com/naptha/tesseract.js) | 38.7k | #778 | 社区 | Tesseract OCR 的纯 JavaScript / WebAssembly 版本，可在浏览器和 Node.js 中识别 100 多种语言。 |
| [JaidedAI/EasyOCR](https://github.com/JaidedAI/EasyOCR) | 30k | #1217 | 社区 | 开箱即用的 Python OCR 库，支持 80 多种语言和多种文字，基于深度学习的检测与识别模型。 |
| [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | 29.4k | #1277 | 社区 | 面向 AI 数据提取的 PDF 解析器，输出带边界框的 Markdown、JSON 与 HTML，并支持 PDF 无障碍自动化处理。 |
| [baidu/Unlimited-OCR](https://github.com/baidu/Unlimited-OCR) | 26.5k | #1518 | 官方 · Baidu | 百度的文档解析模型，主打一次性完成长文档的整体解析，并支持基于 ms-swift 的训练。 |
| [firecrawl/anydoc](https://github.com/firecrawl/anydoc) | 22.3k | #1984 | 官方 · Firecrawl | Firecrawl 官方出品的 Rust 文档转换库，把 Word/PPT/Excel/PDF 等格式秒级转成干净的 Markdown，提供 Node.js/Python/WASM 多语言绑定，是 Firecrawl Parse 服务的底层引擎。 |

### 数据分析 / Text-to-SQL

用自然语言查询数据库与表格 · 3 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) | 28.3k | #1377 | 社区 | 跨平台本地优先数据库客户端和 SQL 工作台，支持 40+ 数据库，可接入自己的 AI 模型用自然语言生成、解释和优化 SQL。 |
| [sinaptik-ai/pandas-ai](https://github.com/sinaptik-ai/pandas-ai) | 23.8k | #1794 | 社区 | 用自然语言对话分析数据的 Python 库，让非技术用户也能用自然语言查询 SQL/CSV/数据湖，底层用 LLM 和 RAG 驱动。 |
| [vanna-ai/vanna](https://github.com/vanna-ai/vanna) 🗄️已归档 | 23.8k | #1795 | 社区 | Text-to-SQL 对话式数据库问答工具，2.0 版本加入用户感知的行级安全权限、流式响应和企业级安全特性，可嵌入网页组件调用。 |

## Agent 基础组件

给 Agent 补上记忆、手脚和运行环境的组件

### 记忆与上下文

跨会话持久记忆、知识图谱记忆、上下文数据库 · 13 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 95k | #145 | 社区 | 为 Claude Code、OpenClaw、Codex、Gemini、Hermes 等各类 Agent 提供跨会话持久记忆的压缩系统，自动捕获会话内容、用 AI 压缩后在未来会话中注入相关上下文。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 66.4k | #303 | 社区 | 为 AI Agent 提供的记忆层基础设施，即插即用地让上下文跨会话持久化，新版记忆算法在 LoCoMo、LongMemEval 等基准上大幅提升准确率和延迟表现。 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 59.4k | #383 | 社区 | 号称“评测最充分的开源 AI 记忆系统”，本地优先、逐字存储、后端可插拔，在 LongMemEval 基准上做到 96.6% 召回且零 API 调用成本。 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | 43.5k | #640 | 社区 | 面向学习型 Agent 的记忆系统，聚焦让 Agent 从经验中持续进步而非只是复述对话历史，在 LongMemEval 等基准上取得业界领先的长期记忆准确率。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 39k | #768 | 官方 · ByteDance | 字节跳动火山引擎开源的 AI Agent 上下文数据库，把知识、记忆、技能统一组织成可浏览、可编辑的 viking:// 虚拟文件系统，替代“黑盒”式向量记忆。 |
| [getzep/graphiti](https://github.com/getzep/graphiti) | 31.3k | #1145 | 社区 | 面向 AI Agent 的实时时序知识图谱框架，持续追踪事实随时间的变化并保留数据溯源，比传统 RAG 更适合处理不断演变的真实世界数据。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 31.2k | #1150 | 社区 | 开源 AI 记忆平台，把文档、代码、对话转成自托管知识图谱供 Agent 检索复用，可用免费小模型在 CPU 上本地跑，无需 API Key。 |
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | 31k | #1164 | 社区 | AI 记忆与上下文引擎，在 LongMemEval、LoCoMo、ConvoMem 三大权威基准上排名第一，95% 召回率、99.4% 上下文压缩率，可完全本地运行。 |
| [garrytan/gbrain](https://github.com/garrytan/gbrain) | 30.4k | #1192 | 社区 | 给已在使用的 Agent 一份自己可控的记忆：保存带来源的明确事实，支持更正与撤回，并在多个 Agent 间共享。 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 29k | #1312 | 社区 | 面向编码 Agent 的持久化记忆工具，基于置信度评分、生命周期管理和知识图谱混合检索，支持 Claude Code、Copilot、Cursor 等主流工具。 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 27.6k | #1429 | 官方 · Tencent | 腾讯云官方出品的团队级 Agent 记忆中枢，把对话、文档、代码沉淀成四类可复用记忆资产（对话记忆/技能/LLM-Wiki/代码图谱），跨 Agent 和框架共享治理。 |
| [gastownhall/beads](https://github.com/gastownhall/beads) | 27.5k | #1432 | 社区 | 基于 Dolt 构建的分布式图结构 Issue 追踪器，给编码 Agent 提供持久化结构化记忆，替代容易丢上下文的 Markdown 计划文件，支持长周期任务跨机器同步。 |
| [letta-ai/letta](https://github.com/letta-ai/letta) | 25k | #1671 | 社区 | 有状态 Agent 平台（原 MemGPT），提供能持续学习和自我改进的高级记忆能力，agent harness 和交互终端已迁移至 letta-ai/letta-code 子项目。 |

### Token 压缩

在内容进入上下文前做压缩 / 过滤，降低 token 消耗 · 5 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 108.5k | #114 | 社区 | 让编码 Agent“说话像穴居人”一样精简的病毒式技能+代理工具，通过压缩输出减少约 65% 的 token 消耗，曾登上 GitHub Trending 和 Hacker News 第一名。 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 82.1k | #199 | 社区 | 单一 Rust 二进制的 CLI 代理，在命令输出进入 LLM 上下文前先做过滤压缩，可为常见开发命令节省 60-90% 的 token 消耗。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 74.2k | #251 | 社区 | 在工具输出、日志、文件和 RAG 分片进入 LLM 上下文之前先做压缩，编码 Agent 场景节省约 20% token、JSON 场景节省 60-95%，压缩全部在本机完成，不上传任何内容。 |
| [toon-format/toon](https://github.com/toon-format/toon) | 25.4k | #1629 | 社区 | 面向 LLM Prompt 的紧凑序列化格式 TOON（Token-Oriented Object Notation），结合 YAML 缩进结构和 CSV 表格式，比 JSON 更省 token 且保持结构清晰，提供 TS SDK 和 CLI。 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 24.3k | #1742 | 社区 | AI 编码 Agent 上下文窗口优化工具，通过 MCP+Hook 沙箱化工具输出（节省 98% 空间）、持久化会话记忆并跨 17 个平台统一路由。 |

### 浏览器自动化

给 Agent 用的浏览器、无头浏览器与浏览器操控 SDK · 11 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 116.8k | #99 | 社区 | 让 LLM Agent 像人一样操作浏览器完成任务（订日期、过验证码、订票等），提供开源的 Python/TypeScript 库、CLI、以及按浏览器小时计费（$0.02/小时）的云端浏览器服务，还有内置反爬和验证码解决能力的托管 Agent API。 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 52.8k | #459 | 官方 · Google Chrome | Chrome DevTools 团队官方出品的 MCP server，让编码 Agent（Antigravity/Claude/Cursor/Copilot 等）能控制和检查真实 Chrome 浏览器，获得性能分析、深度调试等能力。 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | 43.4k | #643 | 官方 · Vercel | Vercel 官方出品的 AI Agent 浏览器自动化 CLI，Rust 原生实现，可下载独立 Chrome for Testing 运行，也能复用已装的 Chrome/Playwright/Puppeteer。 |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | 37.7k | #817 | 官方 · Microsoft | 微软的 Playwright MCP 服务器，通过页面可访问性快照让 LLM 以结构化方式操作网页，无需依赖截图。 |
| [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | 35.7k | #912 | 社区 | 从零用 Zig 写的专为 AI Agent 和自动化设计的无头浏览器，非 Chromium/WebKit 分支，内存占用降到 Chromium 的 1/16、速度快 9 倍。 |
| [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | 31.8k | #1108 | 社区 | 源码级修改指纹的隐身版 Chromium，可无缝替换 Playwright/Puppeteer，用于让 AI Agent 浏览器自动化绕过反爬/反机器人检测（Cloudflare Turnstile 等）。 |
| [feder-cr/invisible_playwright_mcp](https://github.com/feder-cr/invisible_playwright_mcp) | 31.7k | #1123 | 社区 | 不被反爬虫和验证码检测到的 Playwright MCP 服务器，让 AI Agent 用隐身版 Firefox 浏览网页、做自动化抓取和调研。 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 29.7k | #1250 | 社区 | 把任意网站变成命令行接口，并借助已登录的 Chrome 会话让 AI Agent 以确定性的方式操作网站。 |
| [h4ckf0r0day/obscura](https://github.com/h4ckf0r0day/obscura) | 28.2k | #1393 | 社区 | 用 Rust 从零实现的无头浏览器，专为 AI Agent 自动化和网页抓取设计，不依赖 Chromium，内存和启动速度大幅优于 headless Chrome 且内置反检测。 |
| [browserbase/stagehand](https://github.com/browserbase/stagehand) | 25.5k | #1627 | 社区 | 浏览器 Agent SDK，像人类一样使用浏览器提取数据并与网站交互，登录状态可持久化保存，观测操作返回真实选择器避免凭据泄露给模型。 |
| [Skyvern-AI/skyvern](https://github.com/Skyvern-AI/skyvern) | 23.1k | #1881 | 社区 | 用 LLM 和计算机视觉自动化浏览器工作流，Playwright 兼容 SDK 加无代码工作流构建器，受 BabyAGI/AutoGPT 任务驱动设计启发，用多 Agent 协同理解和操作网站。 |

### MCP 与工具接入

MCP 服务器、工具集成平台、面向 Agent 的 CLI · 8 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 90.7k | #164 | 官方 · MCP | Model Context Protocol 官方参考实现仓库，由 MCP 指导委员会维护，收录用于演示 MCP 特性和 SDK 用法的少量参考服务器，完整的社区服务器列表见官方 MCP Registry。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 51.1k | #482 | 社区 | 让“所有软件都能被 Agent 原生使用”的工具，配套 CLI-Hub 让你浏览、安装和管理社区构建的各类命令行工具，弥合 AI Agent 与现有软件生态之间的鸿沟。 |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | 33.3k | #1032 | 官方 · GitHub | GitHub 官方 MCP 服务器，让 AI Agent 直接读写仓库代码、管理 Issue/PR、分析 CI/CD 构建、查看安全告警，支持远程托管和本地两种接入方式。 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 31.4k | #1142 | 社区 | 首个专为 AI Agent 设计的 Office 套件命令行工具，无需安装 Office 即可读写 Word/Excel/PowerPoint，内置 HTML/PNG 渲染引擎让 Agent“看到”文档效果并纠错。 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 31.2k | #1154 | 社区 | 统一的 Google Workspace 命令行工具（Drive/Gmail/Calendar/Sheets 等），从 Google Discovery Service 动态生成命令并内置 40+ Agent 技能，README 明确声明非 Google 官方产品。 |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | 30.4k | #1194 | 社区 | 给 AI Agent 提供 1000+ 预授权工具箱的平台，含按用户会话管理、鉴权、触发器和沙箱，支持 OpenAI Agents、Claude Agent SDK、LangChain 等主流框架的适配器。 |
| [ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) | 29.7k | #1248 | 社区 | 社区插件，让任意 LLM 通过 MCP 控制 Blender 3D 做建模、场景搭建和操作，非 Blender 官方出品。 |
| [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | 23k | #1888 | 社区 | 给 Claude Desktop/Code/Windsurf/Cursor 提供 n8n 节点文档和操作能力的 MCP 服务器，覆盖 2864 个 n8n 节点，帮助 AI 助手直接生成可用的工作流。 |

### 沙箱与运行时

隔离执行 AI 生成代码 / Agent 的安全环境 · 2 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [daytonaio/daytona](https://github.com/daytonaio/daytona) | 71.7k | #271 | 社区 | 为运行 AI 生成代码提供安全弹性基础设施的沙箱平台；仓库自 2026 年 6 月起已停止维护，核心开发转向私有代码库，但依然可自由使用与二次开发。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 22.6k | #1935 | 官方 · NVIDIA | NVIDIA 官方出品的沙箱化 Agent 运行参考栈，在 NVIDIA OpenShell 里更安全地运行 OpenClaw、Hermes、LangChain Deep Agents 等主流 Agent，提供托管推理和网络策略控制。 |

## Agent 开发框架与平台

自己动手搭 Agent / LLM 应用用的框架、平台和协议

### 代码框架 / SDK

用代码构建 Agent 与 LLM 应用的框架和 SDK · 21 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147.3k | #63 | 社区 | 定位为“Agent 工程平台”的框架，把可互操作的组件和第三方集成串联起来简化 LLM 应用开发；更高层的 Deep Agents 包提供规划、子 Agent、文件系统等内置能力，配套的 LangGraph 用于构建可控的 Agent 工作流编排。 |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 70.7k | #277 | 社区 | 给 GPT 分配产品经理、架构师、工程师等不同角色协作完成软件开发任务的多智能体框架，衍生商业产品 MGX 曾登上 Product Hunt 当日/当周第一。 |
| [microsoft/autogen](https://github.com/microsoft/autogen) | 61.2k | #360 | 官方 · Microsoft | 已进入维护模式的多智能体应用编程框架，官方建议新用户转向其后续产品 Microsoft Agent Framework，现由社区继续维护。 |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 59.2k | #385 | 社区 | 编排“角色扮演”自主 Agent 的多智能体框架，提供 Crews（自主协作）和 Flows（事件驱动精确控制）两套抽象，号称超 10 万开发者通过其社区课程认证。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 42.5k | #661 | 社区 | LangChain 官方出品的低层级 Agent 编排框架，专注构建长时运行、有状态的 Agent，支持持久化执行、人类介入、长短期记忆和 LangSmith 可视化调试。 |
| [agno-agi/agno](https://github.com/agno-agi/agno) | 42.4k | #664 | 社区 | 构建、运行、管理 Agent 平台的框架与运行时（AgentOS），提供 SDK 搭建 Agent、REST API 服务化部署、Web UI 管理，帮助团队拥有自己的 Agent 技术栈。 |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 38.4k | #794 | 社区 | 斯坦福 NLP 实验室出品的框架，主张“编程而非提示”语言模型——用可组合的模块和优化器代替手写 prompt 字符串来构建和调优 LLM 应用。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 37.6k | #824 | 社区 | Agent 原生应用的前端技术栈，为 React/Angular/Vue/React Native 及 Slack/Teams 提供生成式 UI、共享状态和人机协同工作流，AG-UI 协议的提出方。 |
| [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | 34.4k | #959 | 社区 | ChatDev 2.0，通过 LLM 驱动的多智能体协作模拟一个虚拟软件公司（CEO/CTO/程序员/测试等角色）来完成软件开发全流程。 |
| [chenfei-wu/TaskMatrix](https://github.com/chenfei-wu/TaskMatrix) | 34k | #987 | 社区 | TaskMatrix（Visual ChatGPT）：把 ChatGPT 与一系列视觉基础模型连接起来，使对话中可以收发图像并做绘图与编辑。 |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | 32.6k | #1065 | 社区 | 生产级易用的 Agent 框架 2.0，强调发挥模型自身推理和工具使用能力而非用死板提示词强行编排，支持团队流水线、模型路由等能力。 |
| [openai/openai-python](https://github.com/openai/openai-python) | 31.7k | #1121 | 官方 · OpenAI | OpenAI API 的官方 Python 库，提供对 REST API 的封装、完整类型定义以及同步与异步客户端。 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 29.9k | #1233 | 社区 | LangChain 官方出品的“开箱即用” Agent Harness，基于 LangGraph 构建，内置子 Agent、可插拔文件系统、上下文管理、人类介入和技能加载，模型无关。 |
| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | 29.8k | #1243 | 官方 · OpenAI | OpenAI 官方出品的轻量级多智能体工作流框架，供应商无关，支持 OpenAI Responses/Chat Completions 及 100+ 其他 LLM，内置 Agent、沙箱 Agent 和实时 Agent 三类核心概念。 |
| [huggingface/smolagents](https://github.com/huggingface/smolagents) | 29.6k | #1264 | 官方 · Hugging Face | Hugging Face 官方出品的极简 Agent 库，核心逻辑约 1000 行代码，主打“用代码而非 JSON 写行动”的 CodeAgent，支持沙箱执行和 Hub 分享。 |
| [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) | 28.6k | #1347 | 官方 · Microsoft | Microsoft 官方出品的 LLM 应用集成 SDK，README 已提示项目演进为 Microsoft Agent Framework（企业级多 Agent 编排继任者），官方建议新用户迁移。 |
| [mastra-ai/mastra](https://github.com/mastra-ai/mastra) | 28.4k | #1364 | 社区 | 现代 TypeScript 全栈 AI 应用与 Agent 框架，内置模型路由（40+ 供应商）、Agent、图式工作流引擎和人类介入能力，YC 背景团队出品。 |
| [vercel/ai](https://github.com/vercel/ai) | 27.1k | #1477 | 官方 · Vercel | Vercel 官方出品的 TypeScript AI 工具包（AI SDK），面向 Next.js/React/Svelte/Vue 等框架提供统一的多模型 Provider 架构，构建 AI 应用和 Agent。 |
| [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 26.6k | #1509 | 社区 | 开源 AI 编排框架，用模块化管道构建具备检索、路由、记忆和生成能力的 Agent 工作流，面向可扩展的生产级 RAG 和对话系统。 |
| [microsoft/JARVIS](https://github.com/microsoft/JARVIS) | 25.4k | #1635 | 官方 · Microsoft | Microsoft 早期研究项目 JARVIS/HuggingGPT，探索用 LLM 连接和调度 HuggingFace 模型社区完成复杂任务，附带 TaskBench、EasyTool 等后续研究成果。 |
| [micro/go-micro](https://github.com/micro/go-micro) | 23.1k | #1883 | 社区 | 老牌 Go 微服务框架转型而来的 Agent Harness，用服务发现/RPC/消息把 Agent 和自己写的 Go 服务连接起来，micro CLI 可对话式生成并调用新服务。 |

### 低代码 / 工作流平台

可视化编排 Agent、RAG 与自动化流程的平台 · 11 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | 206.4k | #27 | 社区 | Fair-code 协议的工作流自动化平台，原本是通用集成工具，现在把 AI 原生能力做进核心：可视化画布加自定义代码搭建多步 Agent 工作流，接入 OpenAI/Anthropic/Google 等任意模型且不锁定供应商，自带 1500+ 集成和 9000+ 模板。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187.6k | #37 | 社区 | 开源 AI Agent 平台，用自然语言描述目标或在可视化编排器里逐步搭建，即可构建、部署、按需/定时/触发运行完整工作流；提供 AutoPilot、Agent 监控台、Marketplace 现成模板和可视化 Builder 四类入口。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 157.6k | #54 | 社区 | 开源 LLM 应用开发平台，把 Agentic 工作流、RAG 管道、模型管理和可观测性（集成 Opik/Langfuse/Arize）整合进一个协作工作区，支持云端、VPC、自托管三种部署方式，帮助团队从原型直接走到生产。 |
| [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | 155.4k | #56 | 社区 | 可视化搭建和部署 AI Agent 工作流的平台，内置 API 和 MCP server，任何流程都能变成可被其他应用调用的工具；支持多 Agent 编排、LangSmith/LangFuse 可观测性，也提供开箱即用的 Langflow Desktop 桌面版。 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) 🗄️已归档 | 55.5k | #421 | 社区 | 可视化搭建 AI Agent 的低代码平台，项目已归档（development 停止），此前基于 LangChain 生态提供拖拽式 Agent/RAG/Chatbot 构建能力。 |
| [labring/FastGPT](https://github.com/labring/FastGPT) | 29.8k | #1244 | 社区 | 基于 LLM 的知识库 Agent 构建平台，提供开箱即用的数据处理、RAG 检索和可视化工作流编排，支持云端和自托管部署，中国团队 labring 出品。 |
| [simstudioai/sim](https://github.com/simstudioai/sim) | 29.8k | #1245 | 社区 | 协作式工作空间，用于构建、部署和监控 AI Agent 与工作流，号称被 10 万+开发者使用。 |
| [Budibase/budibase](https://github.com/Budibase/budibase) | 28.3k | #1374 | 社区 | 开源运营平台，用 AI Agent、应用和自动化流程替代人工搭建内部工具，模型无关，员工可直接向 Agent 提请求自动处理。 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 24.8k | #1689 | 社区 | 开源 Zapier 替代品，AI Agent、约 400 个 MCP 服务器和工作流自动化的一体化平台，贡献的 Pieces 自动成为可在 Claude Desktop/Cursor 使用的 MCP 工具。 |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | 24.4k | #1730 | 社区 | 开源 AI + 无代码平台，AI 在生产级基础设施和所见即所得界面之上工作而非从零生成，用于快速搭建 CRM/ERP 等业务系统。 |
| [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) | 22.9k | #1903 | 社区 | 开源企业级智能体构建平台，整合 RAG 检索、工作流编排和 MCP 工具调用能力，广泛用于智能客服、企业知识库等场景，模型无关。 |

### 协议与格式规范

MCP、A2A、AGENTS.md、SKILL.md 等开放协议、规范及其官方 SDK · 6 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | 28.2k | #1396 | 官方 · Google | Google Labs 出品的 DESIGN.md 格式规范，用 YAML 设计令牌加 Markdown 说明给编码 Agent 传递持久化的品牌视觉系统理解，配套 lint 工具校验对比度等规则。 |
| [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | 27.9k | #1409 | 社区 | Prefect 出品的 Python MCP 应用框架，用普通 Python 函数声明工具即可自动生成 schema、校验和文档，已并入官方 MCP Python SDK 1.0，日均下载百万次。 |
| [a2aproject/A2A](https://github.com/a2aproject/A2A) | 26k | #1569 | 社区 | Linux Foundation 托管的 Agent2Agent（A2A）开放协议，用于让不同厂商、互不透明的 Agent 应用之间互相通信和协作。 |
| [agentskills/agentskills](https://github.com/agentskills/agentskills) | 25.8k | #1589 | 社区 | Agent Skills 开放标准的规范与文档仓库，定义了 SKILL.md 格式和技能的渐进式加载（发现→激活）机制，是 agentskills.io 标准的官方源。 |
| [agentsmd/agents.md](https://github.com/agentsmd/agents.md) | 24.7k | #1701 | 社区 | AGENTS.md 开放格式规范，相当于“写给 Agent 看的 README”，用统一位置给编码 Agent 提供项目上下文和操作指令的行业约定标准。 |
| [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 24.4k | #1726 | 官方 · MCP | Model Context Protocol 官方 Python SDK，用于构建 MCP 服务器和客户端，v2 大版本重构以支持最新协议规范。 |

### 多智能体仿真

让大量 Agent / 模型互动来模拟社会、推演趋势或群体决策 · 3 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | 75.4k | #240 | 社区 | 基于多智能体技术的通用群体智能预测引擎，从新闻、政策草案、金融信号等真实世界种子信息构建高保真平行数字世界，让大量具备独立人格和长期记忆的智能体自由互动演化，用于推演未来趋势。 |
| [karpathy/llm-council](https://github.com/karpathy/llm-council) | 25.1k | #1660 | 社区 | Karpathy 周末 vibe coding 出的小工具，把提问同时发给多个 LLM（GPT/Gemini/Claude/Grok），让它们互相匿名评审打分，再由“主席模型”汇总成最终答案。 |
| [joonspk-research/generative_agents](https://github.com/joonspk-research/generative_agents) | 22.2k | #1999 | 社区 | 斯坦福/Google 经典研究论文《Generative Agents》配套代码，25 个具备记忆和社交行为的生成式 Agent 在虚拟小镇“The Ville”里自主生活互动的模拟环境。 |

## Agent 应用

开箱即用、直接拿来用的 Agent / 聊天产品

### 个人 AI 助理

常驻运行在自己机器上、通过 IM 等多渠道触达的个人 Agent · 15 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 390.8k | #6 | 社区 | 开源个人 AI 助理网关，跑在自己的电脑/服务器上，通过 Discord、iMessage、Slack、Teams、Telegram、WhatsApp 等 20+ 渠道聊天触达；模型与执行后端（Claude、Codex、本地模型）都是可替换插件，状态、记忆和密钥全部留在本地硬件，由独立的 OpenClaw 基金会（501c3）主导，无付费层、无托管服务。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 250.2k | #19 | 社区 | Nous Research 出品的自我进化 Agent，内置学习闭环：从使用经验中生成技能、在使用中持续改进、主动沉淀知识并检索自己的历史对话；可跑在 5 美元 VPS、GPU 集群或按量计费的 serverless 上，支持 Telegram/Discord/Slack/WhatsApp/Signal/CLI 多入口，模型可在 Nous Portal、OpenRouter、OpenAI 等之间自由切换。 |
| [odysseus-dev/odysseus](https://github.com/odysseus-dev/odysseus) | 87.7k | #178 | 社区 | 自托管的个人 AI 工作台，一个 Docker Compose 即可部署，集成聊天、Agent、研究、文档、邮件、笔记、日历等场景与本地模型工作流。 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 49.9k | #503 | 社区 | 自托管的“你的AI伴侣”项目，目标是复刻 Neuro-sama 式虚拟角色，支持实时语音聊天、玩 Minecraft/Factorio，跨 Web/macOS/Windows。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48.7k | #528 | 社区 | 超轻量、可自托管的 Python 个人 AI Agent 框架，内置 WebUI、终端和聊天应用（Telegram/Discord/微信/飞书等）三种入口，核心代码精简易读，集成长期记忆、MCP、多模型路由、多 Agent 委派、定时自动化和 OpenAI 兼容 API。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47.2k | #557 | 社区 | 开源超级 AI 助理与 Agent Harness，能主动规划任务、操控电脑与外部服务、创建并运行技能、积累长期记忆，支持多 Agent 团队协作，可 7x24 小时跑在个人电脑或服务器上并接入主流 IM 平台。 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 41.3k | #690 | 社区 | 开源一体化 Agent 聊天机器人平台，对接 QQ/微信/Discord/Telegram/Slack 等主流 IM，集成 LLM 对话、Agent、MCP、技能、知识库和 Agent 沙箱，号称是 openclaw 的替代品。 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 40.2k | #722 | 社区 | Rust 内核的开源 Agent Harness，号称最快最省的个人 AI 方案，可插拔任意 LLM/记忆/搜索引擎，桌面应用主打隐私本地优先，上线一周内连续 9 天登上 GitHub Trending。 |
| [mindsdb/mindshub](https://github.com/mindsdb/mindshub) | 39.8k | #744 | 社区 | 开源 Agent 工作空间（原 Minds），可自由选择模型和供应商完成知识工作与软件开发，提供桌面/Web 客户端和统一推理 API，避免被单一模型生态锁定。 |
| [khoj-ai/khoj](https://github.com/khoj-ai/khoj) | 37.5k | #828 | 社区 | 自托管的个人 AI 第二大脑，可对接任意本地或在线 LLM，从网络和本地文档中检索答案、创建自定义知识 Agent、定时自动化深度研究，支持浏览器/Obsidian/Emacs/手机/WhatsApp 多入口。 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 35.4k | #919 | 社区 | 个人 AI 助理，易于本地或云端部署，三层记忆架构（工作上下文/完整历史/自进化知识库）、内置沙箱与工具/文件安全防护，支持多 Agent 并行与跨系统通信协议 ACP。 |
| [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32.9k | #1054 | 社区 | 用 Rust 编写、编译成单一二进制的个人 Agent 运行时，对接 Anthropic/OpenAI/Ollama 等 20 多个模型提供商，通过 Discord、Telegram、Matrix、邮件、语音、Webhook 等 30+ 渠道接入，工具能力覆盖 shell、浏览器、HTTP、硬件和自定义 MCP server，全部运行在用户自己的机器上。 |
| [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 30.9k | #1169 | 社区 | 定位为 OpenClaw 的轻量替代品，每个 Agent 运行在独立容器里做操作系统级隔离；作者认为 OpenClaw 代码量太大（近 50 万行、70+ 依赖）难以审计，NanoClaw 用一个进程加几个文件实现同等核心功能，并为 Slack 场景提供“一个 Agent 一个 Slack App”的开箱配置。 |
| [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) | 30.3k | #1198 | 社区 | 基于 MCP 的聊天机器人，运行在 ESP32 硬件上，为低成本设备提供语音交互式 AI 助手。 |
| [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 30k | #1218 | 社区 | 硬件厂商 Sipeed 用 Go 从零打造的超轻量个人 AI 助理，10 美元硬件、10MB 内存即可运行，比 OpenClaw 省 99% 内存，非任何项目的 fork。 |

### 通用 / 研究型 Agent

给一个目标即可自主规划执行的通用 Agent（Manus 类、深度研究类） · 10 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 240.8k | #21 | 官方 · DeepSeek | DeepSeek 官方开源的 Agent Harness（dsh），采用“一切皆插件”架构，底层基于 Cordis 框架构建；目前处于开发者预览阶段，API 会有破坏性变更，可通过 npx 直接启动带 Web UI 的本地服务。 |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 97k | #135 | 社区 | Andrej Karpathy 的实验性项目：让 AI Agent 在单张 GPU 上自动运行 nanochat 模型训练相关的研究工作，以虚构口吻记录“AI 自主搞科研”的过程。 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 83.3k | #192 | 官方 · ByteDance | 字节跳动开源的长时程 SuperAgent Harness，通过沙箱、记忆、工具、技能、子 Agent 和消息网关的组合，编排能处理数分钟到数小时任务的研究/编码/创作型 Agent。 |
| [FoundationAgents/OpenManus](https://github.com/FoundationAgents/OpenManus) | 58.4k | #390 | 社区 | MetaGPT 团队在 3 小时内搭建的开源版 Manus 复刻项目，无需邀请码即可体验类似 Manus 的通用 Agent 能力，仍在持续迭代中。 |
| [reworkd/AgentGPT](https://github.com/reworkd/AgentGPT) 🗄️已归档 | 36.3k | #885 | 社区 | 早期知名的浏览器端自主 Agent 项目，输入一个目标即可配置、部署自主 AI Agent，自动拆解任务、执行并从结果中学习。 |
| [stanford-oval/storm](https://github.com/stanford-oval/storm) | 31.5k | #1132 | 社区 | 斯坦福出品的 LLM 知识策展系统，输入一个主题即可自动研究并生成带引用的完整报告，EMNLP/NAACL 论文成果，已集成 litellm 支持多模型。 |
| [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) | 29.8k | #1238 | 社区 | 自主深度研究 Agent，支持任意 LLM 供应商，对任意主题做规划、检索、自我校验后生成带引用的详细研究报告，受 Plan-and-Solve 和 RAG 论文启发。 |
| [Fosowl/agenticSeek](https://github.com/Fosowl/agenticSeek) | 27.4k | #1448 | 社区 | 完全本地运行的 Manus AI 替代品，语音交互的自主 Agent，能自主浏览网页、写代码、规划任务，只需电费成本、零 API 费用。 |
| [different-ai/openwork](https://github.com/different-ai/openwork) | 23.8k | #1797 | 社区 | 开源的 Claude Cowork/Codex 替代品，基于 OpenCode 构建的跨平台桌面应用，AI Agent 直接操作本机文件，支持任意模型供应商和团队共享技能/MCP。 |
| [yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi) | 22.4k | #1979 | 社区 | 2023 年 3 月首创任务规划式自主 Agent 概念的里程碑项目，原始版本已归档，当前仓库是实验性的自构建 Agent 框架，作者声明非生产可用。 |

### GUI 操控 Agent

看屏幕、点界面，操作电脑 / 手机 / 网页的 Agent · 5 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | 39.2k | #763 | 官方 · ByteDance | 字节跳动开源的多模态 AI Agent 技术栈，包含 Agent TARS（通用多模态 Agent CLI/Web UI）与 UI-TARS-desktop（基于 UI-TARS 模型的桌面 GUI Agent），支持浏览器与电脑操作。 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 29.3k | #1295 | 官方 · Alibaba | 阿里巴巴官方出品的网页内嵌 GUI Agent，一段 JavaScript 就能让任意网页拥有自己的 AI Agent，基于文本 DOM 操作而非截图，可接入任意（含本地部署）LLM。 |
| [trycua/cua](https://github.com/trycua/cua) | 27.5k | #1439 | 官方 · Cua | 让 AI Agent 使用电脑的开源基础设施，包含桌面自动化驱动、隔离云桌面、本地 macOS 虚拟机与 computer-use 评测基准。 |
| [zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) | 26.3k | #1535 | 官方 · Zhipu AI | 智谱 AI 官方开源的手机端智能助理框架 AutoGLM，用多模态视觉语言模型理解屏幕内容、规划并执行 ADB 自动化操作完成用户自然语言指定的任务。 |
| [microsoft/OmniParser](https://github.com/microsoft/OmniParser) | 25.5k | #1628 | 官方 · Microsoft | Microsoft 官方出品的纯视觉 GUI Agent 屏幕解析工具，把界面截图解析成结构化元素，显著提升 GPT-4V 等模型定位和操作界面的准确率，配套 OmniTool 可控制 Windows 11 虚拟机。 |

### 聊天客户端

对接各家模型 API 或本地模型的聊天界面与桌面端 · 14 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 153.6k | #57 | 社区 | 可自托管、可完全离线运行的 AI 交互界面，同时支持 Ollama 和 OpenAI 兼容 API，能接入 LMStudio、GroqCloud、Mistral、OpenRouter 等任意提供商，通过 pip/uv/Docker/Kubernetes 都能一键部署。 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88.8k | #176 | 社区 | 零配置的跨平台 AI 聊天客户端，无需自备 API key 即可对话 GPT、Claude、Gemini、DeepSeek 等 100+ 模型，覆盖 Web/iOS/macOS/Android/Linux/Windows。 |
| [nomic-ai/gpt4all](https://github.com/nomic-ai/gpt4all) | 77.4k | #221 | 社区 | 在普通桌面/笔记本电脑上私有运行大语言模型的应用，不需要 API 调用或 GPU，下载即可使用，可商用。 |
| [binary-husky/gpt_academic](https://github.com/binary-husky/gpt_academic) | 71.4k | #274 | 社区 | 为 GPT/GLM 等大语言模型提供的实用化学术交互界面，针对论文阅读润色写作做了专门优化，支持自定义函数插件、多模型并行问询，并可接入通义千问、文心一言、Claude 等国内外模型。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 66.6k | #299 | 社区 | 本地优先的一体化 AI 应用，可对接自己的文档聊天、用 AI Agent 自动化复杂工作流，多用户、高度可配置，桌面端（Mac/Windows/Linux）和移动端均已开源。 |
| [lencx/ChatGPT](https://github.com/lencx/ChatGPT) | 54.6k | #433 | 社区 | 非官方的 ChatGPT 桌面客户端（Mac/Windows/Linux），基于 Tauri 打包；作者后续在其继任项目 Noi 中延续了 AI 桌面包装应用的思路。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 52.3k | #467 | 社区 | 支持多个 LLM 提供商的桌面 AI 生产力工作室，集智能聊天、自主 Agent 和 300+ 预设助手于一体，可接入 OpenAI/Gemini/Anthropic 云服务，也支持 Ollama/LM Studio 本地模型。 |
| [oobabooga/textgen](https://github.com/oobabooga/textgen) | 47.7k | #546 | 社区 | 本地大模型开源桌面应用，支持文本/视觉/工具调用，兼容 OpenAI/Anthropic API，100% 本地运行保护隐私。 |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 45.2k | #601 | 社区 | 增强版 ChatGPT 开源替代品，集成 Agents、MCP、Skills 及 DeepSeek/Anthropic/OpenAI/Azure/Gemini 等几乎所有主流模型接口，支持多用户鉴权、Artifacts、Code Interpreter 等企业级功能。 |
| [janhq/jan](https://github.com/janhq/jan) | 44.7k | #611 | 社区 | Jan 是可完全离线运行的开源 ChatGPT 替代品，可下载并运行本地大模型，也能接入云端模型 API。 |
| [chatboxai/chatbox](https://github.com/chatboxai/chatbox) | 41.9k | #673 | 社区 | 跨平台桌面/移动 AI 客户端，统一对接 ChatGPT、Claude、Gemini、DeepSeek 等模型，支持 Windows/Mac/Linux/iOS/Android。 |
| [SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern) | 34k | #988 | 社区 | 面向重度玩家的本地 LLM 前端，统一对接 KoboldAI/NovelAI/OpenAI/Claude 等几乎所有文本生成后端，支持视觉小说模式、图像生成、TTS、World Info 角色设定和海量第三方扩展。 |
| [mckaywrigley/chatbot-ui](https://github.com/mckaywrigley/chatbot-ui) | 33.4k | #1030 | 社区 | 早期知名的开源 ChatGPT 界面替代品，支持任意模型的 AI 聊天客户端。 |
| [Chanzhaoyu/chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web) 🗄️已归档 | 31.4k | #1140 | 社区 | 用 Express 与 Vue 3 搭建的 ChatGPT 演示网页，可接入 OpenAI API。仓库已归档。 |

## 编码 Agent 生态

编码 Agent 本体，以及围绕 Claude Code / Codex 等的周边工具

### 编码 Agent

终端 / IDE 里读代码、改代码、跑命令的 Agent 本体 · 27 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 211.1k | #25 | 社区 | 开源编码 Agent，提供跨平台命令行界面和处于 Beta 阶段的桌面应用，支持 npm/brew/scoop/choco/pacman/nix 等多种方式安装，覆盖 20+ 语言的本地化文档。 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 148.7k | #60 | 官方 · Anthropic | Anthropic 官方出品的终端 Agentic 编码工具，理解代码库上下文、执行常规任务、解释复杂代码、处理 git 工作流，全部通过自然语言完成；也可在 IDE 中使用，或在 GitHub 里 @claude 触发。 |
| [openai/codex](https://github.com/openai/codex) | 127.4k | #84 | 官方 · OpenAI | OpenAI 官方出品的轻量终端编码 Agent，可作为 CLI、IDE 插件（VS Code/Cursor/Windsurf）或桌面 App 使用，也有对应的云端版本 Codex Web。 |
| [earendil-works/pi](https://github.com/earendil-works/pi) | 110.7k | #107 | 社区 | Pi Agent Harness 项目主页，包含自扩展的交互式编码 Agent CLI、带工具调用与状态管理的 Agent 运行时，以及统一多家模型（OpenAI/Anthropic/Google）的 LLM API 层。 |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 107.2k | #115 | 官方 · Google | Google 官方开源终端 AI Agent，把 Gemini 模型能力直接带进终端，个人账号免费额度 60 次/分钟，支持 Google 搜索、文件操作、Shell 命令和 MCP 扩展。 |
| [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | 79.9k | #211 | 社区 | 把截图、设计稿和屏幕录制转成 HTML / Tailwind、React、Vue 等前端代码的 AI 工具，提供自托管版本和官方托管产品。 |
| [cline/cline](https://github.com/cline/cline) | 69.6k | #280 | 社区 | 开源编码 Agent，可作为 VS Code/JetBrains IDE 插件、桌面应用、终端 CLI 或自建 SDK 使用，每一步工具调用都支持人工审核确认。 |
| [openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter) | 68.5k | #286 | 社区 | 面向 Kimi K3、GLM 5.3 等开放模型的编码 Agent，用 Rust 重新实现了官方推荐的 Kimi Code Harness，提供类 Codex 的交互体验。 |
| [AntonOsika/gpt-engineer](https://github.com/AntonOsika/gpt-engineer) 🗄️已归档 | 55.1k | #425 | 社区 | 早期的代码生成实验平台，用自然语言描述软件需求、让 AI 编写并执行代码，是后来商业化产品 Lovable 的前身。 |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | 54.8k | #430 | 社区 | 原生开源 AI Agent（桌面应用+CLI+API），不局限于代码建议，可用于研究、写作、自动化、数据分析等任意任务，兼容 15+ 模型提供商，支持用已有的 Claude/ChatGPT/Gemini 订阅通过 ACP 协议调用。 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 49.3k | #516 | 社区 | 在终端里跟 AI 结对编程的开源工具，支持 Claude/GPT/Gemini 等主流模型，能理解并编辑本地 Git 仓库中的多文件代码，是最早一批命令行编码 Agent 之一。 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 41k | #695 | 社区 | Rust 编写的开源终端编码 Agent，可读取项目、编辑文件、执行命令并用本地或托管模型校验结果，支持把大任务拆给不同角色/模型的多个 Agent 协作。 |
| [continuedev/continue](https://github.com/continuedev/continue) | 36.1k | #894 | 社区 | 开源编码 Agent，可接入 IDE 或终端，支持自定义模型和规则，帮助开发者在保留控制权的前提下把 AI 编码能力集成进现有工作流。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35.7k | #908 | 社区 | 面向终端的 DeepSeek 原生编码 Agent，围绕 prefix-cache 稳定性设计、可长时间挂机运行，单一 Go 二进制，支持终端/桌面/浏览器/编辑器（ACP）四种接入方式。 |
| [TabbyML/tabby](https://github.com/TabbyML/tabby) | 33.9k | #994 | 社区 | 自托管 AI 编码助手，GitHub Copilot 的开源本地替代品，自包含无需数据库/云服务，支持消费级 GPU，正在孵化 Agent 私测版 Pochi。 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 33.8k | #998 | 社区 | Stencil Labs 出品、fork 自 Pi 的编码 Agent，深度集成 IDE 能力，支持 60+ 模型供应商、31 种内置工具、14 种 LSP 操作，核心用 Rust 实现。 |
| [Pythagora-io/gpt-pilot](https://github.com/Pythagora-io/gpt-pilot) | 33.7k | #1008 | 社区 | 早期知名的“AI 全自动开发者”项目，能从需求描述自主写代码；⚠️ 仓库 2025-08~2026-06 期间曾被植入窃取凭据的供应链蠕虫恶意代码，已于 2026-06-11 清除，若在此期间克隆并运行过需立即轮换凭据。 |
| [Twigpine/openclaude](https://github.com/Twigpine/openclaude) | 33.6k | #1015 | 社区 | 开源编码 Agent 命令行工具，一套终端工作流对接 OpenAI 兼容 API、Gemini、GitHub Models、Ollama 等云端与本地模型，支持工具、MCP 与斜杠命令。 |
| [cursor/cursor](https://github.com/cursor/cursor) | 33.3k | #1035 | 官方 · Cursor | AI 编码编辑器 Cursor 的公开仓库，主要用于反馈问题与功能建议，并不包含产品源码。 |
| [voideditor/void](https://github.com/voideditor/void) 🗄️已归档 | 28.8k | #1335 | 社区 | 开源 VS Code 分支 AI 编辑器，对标 Cursor，项目已于近期宣布弃用停止维护，但仍开源可作为二次开发 VS Code 分支的参考。 |
| [firecrawl/open-lovable](https://github.com/firecrawl/open-lovable) | 28.6k | #1345 | 官方 · Firecrawl | Firecrawl 团队出品的示例应用，几秒内把任意网站克隆重建成现代 React 应用，演示 Firecrawl 抓取能力与 LLM 结合的效果。 |
| [charmbracelet/crush](https://github.com/charmbracelet/crush) | 28.4k | #1368 | 社区 | Charm 团队出品的终端编码 Agent，支持任意 LLM（OpenAI/Anthropic 兼容 API）、多会话上下文保留、LSP 增强和 MCP 扩展，覆盖几乎所有终端平台。 |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 28.2k | #1382 | 官方 · Alibaba | 阿里云 Qwen 团队官方出品的开源终端编码 Agent，内置 Auto-Memory、Auto-Skills、子 Agent 团队，支持 OpenAI/Anthropic/Gemini/Qwen 多协议和本地模型。 |
| [Kilo-Org/kilocode](https://github.com/Kilo-Org/kilocode) | 27.5k | #1443 | 社区 | 一体化敏捷工程平台的开源编码 Agent，覆盖 VS Code、JetBrains 和 CLI 三种形态，号称最流行的开源编码 Agent 之一。 |
| [xai-org/grok-build](https://github.com/xai-org/grok-build) | 27.2k | #1470 | 官方 · xAI | xAI（SpaceXAI）官方出品的终端编码 Agent Grok Build，全屏 TUI 界面，支持鼠标交互、Headless CI 场景和编辑器内嵌（ACP 协议），代码定期从内部 monorepo 同步。 |
| [RooCodeInc/Roo-Code](https://github.com/RooCodeInc/Roo-Code) 🗄️已归档 | 24.3k | #1747 | 社区 | VS Code 编辑器内的“ AI 开发团队”插件，提供代码/架构/问答/调试等多种模式，可按团队工作流定制自定义模式。 |
| [claude-code-best/claude-code](https://github.com/claude-code-best/claude-code) | 22.8k | #1920 | 社区 | 社区对 Claude Code 的非官方复原与工程化改造项目，兼容原有配置，并加入更多功能和对国内模型的适配。 |

### 多 Agent 工作台

同时调度多个编码 Agent，按任务 / 看板 / 工作流协作 · 14 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 95k | #144 | 社区 | 开源的 AI Agent 团队编排应用，Node.js 服务端 + React 界面，让你像管理公司一样给一群 AI Agent 分配目标、追踪工作和成本——“如果 OpenClaw 是员工，Paperclip 就是公司”。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 89.6k | #173 | 社区 | 自托管的开发者控制台“Agent Canvas”，统一调度 OpenHands、Claude Code、Codex、Gemini 等任意 ACP 兼容 Agent，跨本地、远程和云端后端运行，可自动化生成报告并发布到 Slack 等日常研发任务。 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 82.9k | #195 | 社区 | 定位为“首席 Agent 运营官”的平台，把你的一组 Agent 组织成 7×24 小时运转的团队，负责招募、排期和汇报，让你不用一直在线也能管理整个 AI 团队。 |
| [stablyai/orca](https://github.com/stablyai/orca) | 82.1k | #200 | 社区 | 面向“并行 Agent 舰队”的 ADE（Agent 开发环境），可同时运行 Codex、Claude Code、OpenCode、Pi 等多个编码 Agent，各自独立 worktree，桌面端和移动端均可监控与远程操作。 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 73.6k | #256 | 社区 | 面向 Claude Code 和 Codex 的 Agent 元 Harness，在其执行层之上加装 100+ 专业化子 Agent、协同蜂群、自学习记忆和跨机器联邦通信等企业级能力。 |
| [multica-ai/multica](https://github.com/multica-ai/multica) | 51.7k | #475 | 社区 | 让人类和 AI 编码 Agent 像同一个团队协作的开源看板式工作区，Agent 领取任务、汇报进度、遇阻上报、提交评审，可自托管、兼容已有的各类 Agent CLI。 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39.5k | #757 | 社区 | 面向团队的 Claude Code 多智能体编排工具，零学习曲线上手并行执行任务，同系列还有面向 Codex 的 oh-my-codex。 |
| [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | 33.4k | #1022 | 社区 | 面向 OpenAI Codex CLI 的工作流增强层，加钩子、Agent 团队、HUD 等能力，与同作者的 oh-my-claudecode 同源。 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 33.2k | #1036 | 社区 | 开源 24/7 Cowork 应用，统一管理 OpenClaw、Hermes、Claude Code、Codex、OpenCode 等 20+ 命令行 Agent，可自定义并组队多个助理协同工作。 |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28.2k | #1385 | 社区 | 面向编码 Agent 的看板任务管理工具，为 Claude Code、Codex、Gemini CLI 等 10+ 编码 Agent 分配独立工作区、审查 diff 并一键开 PR；项目已宣布即将停止维护（sunsetting）。 |
| [eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master) | 28.1k | #1398 | 社区 | 面向 AI 驱动开发的任务管理系统，可接入 Cursor、Lovable、Windsurf、Roo 等任意 AI 编程工具，通过 MCP 提供任务拆解和跟踪。 |
| [openai/symphony](https://github.com/openai/symphony) | 27.5k | #1440 | 官方 · OpenAI | OpenAI 官方实验性项目，把项目工作转成隔离的自主实现任务流，团队从“监督编码 Agent”转向“管理待完成工作”，附带 Elixir 参考实现。 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 24k | #1773 | 社区 | T3 Code：控制本机各类编码 Agent 的界面，提供移动端、网页端与桌面端，可接管 Claude Code、Codex、Cursor 等已配置的订阅。 |
| [coleam00/Archon](https://github.com/coleam00/Archon) | 23.6k | #1823 | 社区 | 面向 AI 编码的工作流引擎，把开发流程（规划/实现/校验/评审/建 PR）定义成 YAML 工作流反复稳定执行，类比“AI 编码界的 GitHub Actions”。 |

### 客户端与配置增强

给现有编码 Agent 加 GUI、终端、HUD、移动端、配置模板、供应商切换 · 12 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 139.1k | #73 | 社区 | 跨平台桌面一体化管理工具，一键切换 Claude Code、Codex、Gemini CLI、Grok Build、OpenCode、OpenClaw、Hermes Agent 等编码 Agent 的 API 供应商，并统一管理 MCP、Skills 和 Prompt 配置，免去手改 JSON/TOML/YAML。 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 69.7k | #279 | 社区 | 个人side project 性质的 Agent 增强工具，输入特定关键词即可触发多模型协作和图工程能力，附带更强的记忆系统。 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | 41.6k | #684 | 社区 | 编码 Agent 的运行时终端复用器，Rust 编写，让 Claude Code/Codex/Cursor/OpenCode 等会话在断开 SSH 或关闭客户端后继续在后台服务器运行，可跨机器统一管理多个 Agent 面板并标记工作/阻塞/空闲状态。 |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | 33.7k | #1004 | 官方 · OpenAI | OpenAI 官方出品的 Claude Code 插件，让你在 Claude Code 里直接调用 Codex 做代码评审或委派任务，提供 /codex:review 等命令，需要 ChatGPT 订阅或 OpenAI API Key。 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | 32.2k | #1082 | 社区 | Claude Code 配置与监控 CLI 工具（aitmpl.com），提供大量现成的 Agent/命令/Hook/MCP 配置模板，一键安装。 |
| [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus) | 31.7k | #1122 | 社区 | 面向 OpenAI Codex / ChatGPT 桌面应用的外部启动器和管理工具，提供供应商切换、协议转换、会话管理和界面增强，不修改官方应用本体。 |
| [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop) | 29.6k | #1263 | 社区 | 为 DeepSeek Harness (DSH) 插件生态打造的桌面客户端，把本地 Web UI、Host 服务和插件系统集成进原生应用，独立社区项目，与深度求索官方无隶属关系。 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 28.2k | #1381 | 社区 | Claude Code 插件，在状态栏实时显示上下文占用、活跃工具、运行中的子 Agent 和待办进度。 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 27.5k | #1435 | 社区 | 基于 Ghostty 的 macOS 终端，为 AI 编码 Agent 设计的垂直标签页和通知提醒，方便多任务并行管理多个 Agent 会话。 |
| [slopus/happy](https://github.com/slopus/happy) | 24k | #1775 | 社区 | Claude Code 和 Codex 的移动端/网页客户端，支持端到端加密和实时语音，随时随地远程操作命令行编码 Agent。 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | 22.4k | #1970 | 社区 | Claude Code 可视化 GUI 桌面应用，用 Tauri 构建，支持创建自定义 Agent、管理会话、运行安全的后台 Agent 和 MCP 服务器，独立开发者项目非 Anthropic 官方。 |
| [wavetermdev/waveterm](https://github.com/wavetermdev/waveterm) | 22.4k | #1975 | 社区 | 开源 AI 集成终端，内置能读取终端输出、分析组件并执行文件操作的上下文感知 AI 助手，支持多模型和持久化 SSH 会话。 |

### 代码理解与评审

代码知识图谱、代码库打包、最新文档注入、自动代码评审 · 10 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 122.7k | #90 | 社区 | 给编码 Agent 用的 /graphify 技能，把整个代码库连同文档、SQL schema、配置、PDF 一起解析成可查询的知识图谱；代码部分用 tree-sitter 做纯本地确定性 AST 解析、不接 LLM 也不用向量库，每条边都标注是“直接抽取”还是“推断得出”。 |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | 84.8k | #183 | 社区 | Claude Code 插件，用多 Agent 流水线把代码库、知识库或文档解析成可探索、可提问的交互式知识图谱，帮助新人快速理解 20 万行级代码库。 |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | 72.5k | #266 | 社区 | 预索引的代码知识图谱，随代码变动自动同步，为 Claude Code、Cursor、Codex 等编码 Agent 提供语义级代码理解，减少 token 消耗和工具调用次数，完全本地运行。 |
| [upstash/context7](https://github.com/upstash/context7) | 62.6k | #343 | 社区 | 为 LLM 和 AI 代码编辑器提供最新版本代码文档的平台，把最新、版本对应的文档和代码示例直接注入提示词，避免模型因训练数据过时而产生幻觉 API。 |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | 47.7k | #550 | 社区 | 零服务器的代码智能引擎，把整个代码库索引成知识图谱（依赖、调用链、执行流），通过 MCP 工具暴露给 AI Agent，让 Cursor、Claude Code、Codex 等在编辑前先看到完整架构视图。 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 45.5k | #592 | 社区 | 高性能代码智能 MCP 服务器，用 tree-sitter AST 解析把代码库变成持久知识图谱，毫秒级索引、亚毫秒级查询，号称比逐文件探索节省 99% token、单一静态二进制零依赖。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 42.8k | #655 | 官方 · Alibaba | 阿里巴巴内部代码评审助手的开源版，混合确定性规则引擎+LLM Agent，能读取完整文件、搜索代码库定位上下文，产出精确到行级的深度评审意见，内置 NPE/线程安全/XSS/SQL 注入等多语言规则集。 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | 31.9k | #1105 | 社区 | 本地优先的代码知识图谱，用 Tree-sitter 构建结构化代码地图并增量更新，通过 MCP 给 AI 编码工具提供精确的评审上下文，减少重复读取大段代码。 |
| [oraios/serena](https://github.com/oraios/serena) | 29.9k | #1230 | 社区 | 强大的编码 MCP 工具箱，提供符号级语义代码检索、编辑和重构能力（近似 IDE），通过 MCP 接入任意客户端/LLM，让 Agent 在大型代码库里更快更可靠。 |
| [yamadashy/repomix](https://github.com/yamadashy/repomix) | 28.6k | #1349 | 社区 | 把整个代码仓库打包成单一 AI 友好文件的工具，方便把代码库喂给 Claude、ChatGPT、DeepSeek、Gemini 等任意 LLM 分析。 |

## Agent 技能与方法论

装进现有 Agent 的 Skills / 插件 / 工作流规范

### 开发方法论

规范驱动开发、多角色流程等成体系的 Agent 工作方法 · 10 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 293.3k | #12 | 社区 | 面向编码 Agent 的完整软件开发方法论，由一组可组合的技能加初始指令构成，强制走“需求澄清→计划→TDD→子 Agent 驱动开发”的流程，支持 Claude Code、Cursor、Codex、Gemini CLI 等十几种工具。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 270k | #16 | 社区 | 面向 Claude Code、Codex、OpenCode、Cursor 等工具的 Agent Harness 性能优化系统，打包了技能、直觉记忆、安全防护和研究优先的开发流程；仓库本身 MIT 免费，同时有收费的 ECC Pro 托管版和 GitHub App。 |
| [github/spec-kit](https://github.com/github/spec-kit) | 139.5k | #70 | 官方 · GitHub | GitHub 官方出品的规范驱动开发（SDD）工具包，给编码 Agent 提供结构化流程、可复用模板和留痕产出，覆盖建新功能、修 bug、评估想法三类独立场景，可自由组合或替换成自己的流程。 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | 134.6k | #77 | 社区 | Y Combinator 总裁 Garry Tan 公开的个人 Claude Code 配置，包含 23 个分饰 CEO、设计师、工程经理、发布经理、文档工程师、QA 等角色的定制工具，用于说明一个人如何靠 AI Agent 做到团队级产出。 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 70.8k | #276 | 社区 | 面向 AI 编码助手的规范驱动开发（SDD）工具，理念是“流动而非僵化、迭代而非瀑布”，既支持从零开始的新项目也支持存量代码库。 |
| [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) 🗄️已归档 | 64.4k | #322 | 社区 | 面向 Claude Code 的轻量元提示、上下文工程与规格驱动开发体系。仓库已不再是主开发地，项目迁到 open-gsd/gsd-core 继续。 |
| [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | 53.7k | #446 | 社区 | 敏捷 AI 驱动开发方法论（Agile AI Driven Development），覆盖从想法到可工作软件的全流程决策、上下文传递和架构设计，可端到端使用也可把简报/规范/架构接入现有交付流程。 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | 25.3k | #1640 | 社区 | 官方“复合工程”插件，36 个技能围绕“头脑风暴→计划→构建→评审→沉淀经验”循环组织，支持 14 种 Agent 宿主。 |
| [SuperClaude-Org/SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework) | 23.9k | #1782 | 社区 | 把 Claude Code 变成结构化开发平台的配置框架，30 条斜杠命令、20 个专业 Agent 角色、7 种行为模式和 8 个 MCP 集成，同系列还有 SuperGemini/SuperQwen。 |
| [2025Emma/vibe-coding-cn](https://github.com/2025Emma/vibe-coding-cn) | 23k | #1890 | 社区 | Vibe Coding 中文指南：与 AI 结对编程、把想法落地成产品的工作流、环境配置与实践汇总。 |

### 工程实践技能

编码习惯、规划、输出风格、安全审计等通用工程技能 · 8 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [mattpocock/skills](https://github.com/mattpocock/skills) | 272.6k | #15 | 社区 | 作者本人日常工程实践中实际使用的 Agent 技能合集，刻意做得小、易改、可组合、不绑定具体模型；可作为 Claude Code 插件整体订阅，也可以用 skills.sh 把可编辑的技能文件拷进项目自行魔改。 |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | 216k | #23 | 社区 | 把 Andrej Karpathy 关于 LLM 编码毛病的一条推文（乱假设不澄清、过度设计、动不必要的代码/注释）提炼成四条原则，做成单个 CLAUDE.md 文件，直接合并进项目即可改善 Claude Code 的行为。 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 148.7k | #59 | 社区 | 一个让编码 Agent“少写代码”的技能：在真实 Claude Code 会话（FastAPI+React 仓库）上实测，平均减少约 54% 代码量、约 20% 花费和 27% 耗时，在 Agent 容易过度设计的场景（如日期选择器）最高减少 94%，同时保留必要的安全防护。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 100.1k | #128 | 社区 | 面向 AI 编码 Agent 的生产级工程技能合集，把资深工程师在需求定义、方案设计、编码、测试、评审到上线全流程中的最佳实践打包成可复用技能。 |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | 52.3k | #466 | 社区 | 让编码 Agent 别“绕圈子藏答案”的技能，强制输出先给结论、步骤编号，去掉“希望这对你有帮助”之类的废话。 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 35.5k | #916 | 社区 | 网站克隆模板：给 AI 编码 Agent 一个网址，让它一键重建成 Next.js 应用，配合 Claude Code 等使用。 |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 27.2k | #1469 | 社区 | 面向 AI 编码 Agent 的持久化文件规划技能，把任务计划写在磁盘上的 Markdown 文件，即使上下文清空/崩溃/压缩也能恢复进度，支持 60+ Agent 的 Agent Skills 标准。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | 23.3k | #1850 | 官方 · Cloudflare | Cloudflare 官方出品的安全审计编码 Agent 技能，六阶段流程（侦察→覆盖式搜寻→候选验证→结构化输出→独立复核→中立报告）孵化自 Cloudflare 自研的漏洞发现系统。 |

### 设计与内容技能

UI 审美、图表、PPT、动效、配图、文案去 AI 味 · 13 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 131.9k | #79 | 社区 | 为编码 Agent 提供 UI/UX 设计智能的技能，v2.0 核心功能是“设计系统生成器”：输入项目需求，AI 推理引擎几秒内生成一套完整、定制化的设计系统，兼容 Claude Code、Cursor、Codex、Copilot 等多个平台。 |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 118.9k | #96 | 社区 | 知名品牌与开发者网站设计系统的 DESIGN.md 合集，复制到项目里即可让 AI Agent 生成风格一致的页面。 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 91.4k | #156 | 社区 | 给 AI 编码 Agent“审美”的技能，防止生成千篇一律的模板化前端设计，定位为“反套路前端框架”。 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 74.9k | #244 | 社区 | 给 Agent 用的架构图技能，把想法一键转成可交互、可验证的架构图/流程图/时序图，输出自包含的动效 HTML，支持导出。 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 72.8k | #264 | 社区 | 给 AI 编码 Agent 用的前端设计规范技能，含 1 个技能、24 个命令和 61 条确定性检测规则，防止所有模型都做出“千篇一律 SaaS 模板风”的界面。 |
| [blader/humanizer](https://github.com/blader/humanizer) | 53k | #455 | 社区 | 去除 AI 生成文本“机器味”的 Agent 技能，基于维基百科编辑用来识别 AI 生成内容的《Signs of AI writing》准则构建，适用于 Claude Code、Codex 等支持技能的 Agent。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 42.8k | #654 | 社区 | 面向 Claude Code、Codex、Pi 的编辑级图表设计技能，纯 HTML+SVG 自包含输出，不用 Mermaid 默认丑图样式，支持架构图、流程图、时序图等十余种版式并可重绘已有的 draw.io/Mermaid 图。 |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | 42.3k | #667 | 社区 | 面向设计师和工程师的动效/交互设计技能包，由 Vercel/Linear 背景的作者基于多年审美经验总结，帮 Agent 避免动效“没品味”的常见错误。 |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 30k | #1224 | 社区 | 编码 Agent 技能，用“展示而非描述”的方式生成 HTML 网页演示文稿，支持从 PowerPoint 转换，内置反 AI 套路的视觉风格库，打包成 Claude Code 插件。 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | 29.3k | #1290 | 社区 | Together AI 出品的“反 AI 套路”设计技能，21 种视觉主题加 57 项防雷同检测，让 Claude Code/Cursor/Codex 生成的界面不再是千篇一律的 AI 风格。 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 27.1k | #1474 | 社区 | 适配 Claude Code/Codex 的网页 PPT 生成技能，内置“电子杂志”和“瑞士国际主义”两套视觉系统，单文件 HTML 横向翻页演示文稿并支持配图和演讲者模式。 |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | 26.2k | #1547 | 社区 | 宝玉分享的日常效率技能合集，含公众号封面图生成、文章配图、Markdown 转微信推文等 20+ 技能，可按需单独安装。 |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 24.6k | #1714 | 社区 | HTML 原生设计技能，一句话在 Claude Code 等 Agent 里产出高保真原型、动画、可编辑 PPT 和信息图，内置 20 种设计哲学和 60 种风格库防止千篇一律。 |

### 行业与知识工作技能

科研、营销、产品、安全、人物蒸馏等领域技能包 · 13 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 63.2k | #334 | 社区 | 跨 Reddit、X、YouTube、Hacker News、Polymarket 等平台调研任意话题并生成有依据摘要的 Agent 技能，按点赞数、真实资金等信号而非编辑好恶排序。 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 52k | #470 | 社区 | 面向技术型营销人和创业者的 Agent 技能合集，涵盖转化率优化、文案、SEO、数据分析和增长工程，适配 Claude Code、Codex、Cursor 等支持 Agent Skills 规范的工具。 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 50k | #501 | 社区 | 面向 Claude Code 的学术科研技能包，覆盖从研究、写作、审阅、修订到定稿的全流程，强调人类始终掌握关键决策、AI 只负责查文献/核对格式等体力活；内置多阶段完整性校验，防止捏造引用和方法论造假。 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 49k | #523 | 社区 | 为 Obsidian 打造的 Agent Skills 包，教 Claude Code、Codex、OpenCode 等支持技能规范的 Agent 使用 Obsidian CLI 及 Markdown/Bases/JSON Canvas 等开放格式读写笔记库。 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 47.2k | #556 | 社区 | 把任意 AI Agent 变成“AI 科学家”的技能库，165 个经过验证的科研技能加 100+ 科学数据库，覆盖生物、化学、医学、药物发现，兼容 Cursor/Claude Code/Codex 等主流 Agent 及开放 Agent Skills 标准。 |
| [Yuan1z0825/nature-skills](https://github.com/Yuan1z0825/nature-skills) | 45.4k | #595 | 社区 | 面向 Nature 期刊论文写作规范与科研绘图的技能包，含论文润色和图表生成核心功能，号称启发了 Google DeepMind 的 Science Skills。 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | 39k | #769 | 社区 | 面向逆向工程/授权渗透测试/安全研究的技能路由包，AI 根据任务自动路由到对应方法论、按需自举工具链并积累经验库，支持 Claude Code、Kiro、Cursor、Cline 等客户端。 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 33.6k | #1013 | 社区 | 面向 AI Agent 的网络安全技能库，818 个技能覆盖 34 个安全领域，映射 MITRE ATT&CK/NIST CSF 等 6 大框架，社区项目，与 Anthropic 官方无关联，仅限授权测试使用。 |
| [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 33.4k | #1024 | 社区 | 把任意人物的思维方式（心智模型、决策启发式、表达风格）蒸馏成可复用 Agent 技能，输入一个名字自动完成调研、提炼、验证全流程，兼容 50+ Agent 运行时。 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | 26.7k | #1505 | 社区 | 产品经理技能市场，69 个技能加 42 条工作流串联发现、策略、执行、上线到增长全流程，把 Teresa Torres、Marty Cagan 等经典 PM 方法论嵌入 Claude Code 日常工作流。 |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | 25.9k | #1579 | 官方 · Anthropic | Anthropic 官方开源的 Claude Cowork 知识工作者插件合集，11 个插件覆盖生产力、销售、客户支持、产品管理等职能，每个插件打包对应角色的技能、连接器和子 Agent。 |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | 25.6k | #1617 | 社区 | 把单个 Claude Code 会话变成完整游戏开发工作室的技能包，49 个分角色 Agent 加 74 项工作流技能，模拟真实工作室的导演/部门负责人/专家层级结构。 |
| [titanwings/distilly](https://github.com/titanwings/distilly) | 25.2k | #1652 | 社区 | 把一个人的经验、判断力、表达风格蒸馏成可复用“人物画像”供 Agent/Bot 调用的技能（原名 Colleague Skill），面向同事、家人、公众人物等多种“人”的建模。 |

### 技能库与插件市场

官方技能库、插件目录、技能合集清单与技能管理工具 · 14 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | 179.1k | #46 | 官方 · Anthropic | Anthropic 官方的 Agent Skills 参考实现仓库，Skills 是 Claude 动态加载的一组指令、脚本和资源文件夹，用于在特定任务上教会 Claude 可复用的做法，涵盖品牌文档生成、企业专属数据分析工作流、个人任务自动化等场景。 |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | 155.4k | #55 | 社区 | 源自一个 Reddit 帖子、持续迭代打磨的“人格化”专家 Agent 角色合集，每个角色有独立性格、工作流程和交付标准，可安装进 Claude Code、Cursor、Codex、Gemini 等工具；也有配套的跨平台桌面 App 一键浏览安装。 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 76k | #237 | 社区 | 收录 1000+ 生产可用 Claude Skills 和插件的精选列表，覆盖 Claude.ai、Claude Code 及 Codex、Cursor、Gemini CLI 等其他编码 Agent 的实际使用场景。 |
| [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 52.9k | #458 | 社区 | 从 OpenClaw 官方技能注册中心（ClawHub）筛选、分类整理的 5000+ 社区技能合集，方便按类目发现和安装 OpenClaw 技能。 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | 47.1k | #558 | 社区 | 本地优先的技能发现与管理控制台（AAS Core），收录 2400+ 可安装 SKILL.md，提供 CLI、本地 MCP、目录浏览和 Workbench，帮助 Codex/Claude 在真正改动前先检索、圈定并预览要用的技能集。 |
| [wshobson/agents](https://github.com/wshobson/agents) | 40.1k | #725 | 社区 | 面向 Claude Code、Codex、Cursor、OpenCode、GitHub Copilot、Antigravity、Pi 等多种 Harness 的插件市场，94 个插件、202 个子 Agent、184 个技能、105 个命令，一份 Markdown 源生成各 Harness 原生格式。 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37.2k | #843 | 官方 · Anthropic | Anthropic 官方维护的 Claude Code 插件目录，收录内部插件与经审核的第三方插件，用 /plugin install 一键安装。 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 35.1k | #932 | 社区 | 精选（非 AI 批量生成）的官方团队 Agent Skills 合集，收录 Claude、VoltAgent、Supabase、Stripe、Google Gemini 等团队发布的真实技能，兼容 Claude Code/Codex/Cursor/Gemini CLI 等。 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 33.1k | #1039 | 社区 | 把任意技术书籍 PDF 或文档合集转换成统一的 Claude Code 技能，供随时查阅和使用，官方测算比直接把书塞进上下文节省 24-51 倍 token。 |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | 32.8k | #1058 | 官方 · Vercel | Vercel 官方出品的开放 Agent Skills 生态 CLI（npx skills），支持从 GitHub/GitLab/Azure Repos 等来源安装技能，兼容 75+ 种 Agent。 |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 31.8k | #1116 | 官方 · Vercel | Vercel 官方 Agent Skills 合集，包含 Vercel 项目成本/性能审计、React/Next.js 性能规范、Web 设计规范等技能，遵循开放 Agent Skills 格式。 |
| [openai/skills](https://github.com/openai/skills) | 27.8k | #1414 | 官方 · OpenAI | OpenAI 官方 Codex 技能目录，收录可被 Codex 发现和调用的技能包；仓库已标注弃用，新技能/插件示例迁移至 openai/plugins。 |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 27k | #1487 | 社区 | 380+ Claude Code 技能/插件合集，覆盖工程、市场、产品、合规、C 级高管顾问、学术研究等多个方向，兼容 13 种编码工具。 |
| [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | 25.4k | #1631 | 社区 | 161+ 个 Claude Code 专用子 Agent 合集，覆盖 10 大类开发任务，明确不接受纯广告推广类 PR，保持供应商中立。 |

## AI 垂类应用

面向具体行业 / 场景的 AI 应用

### 金融与交易

选股、投研、量化交易 · 10 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 109.3k | #111 | 社区 | 多智能体 LLM 金融交易框架，多个专业化 Agent 协作完成选股、回测和交易决策，持续跟进最新模型与数据源。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65.8k | #311 | 社区 | LLM 驱动的多市场（A股/港股/美股/日股/韩股/台股）股票智能分析系统，聚合行情与实时新闻生成决策看板，支持零成本定时运行并推送到企业微信/飞书/Telegram 等渠道。 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 63.8k | #325 | 社区 | 用多个 AI 角色协作做交易决策的对冲基金概念验证项目，仅用于教育与研究，不执行真实交易。 |
| [microsoft/qlib](https://github.com/microsoft/qlib) | 49.1k | #522 | 官方 · Microsoft | 微软的面向 AI 的量化投资平台，涵盖数据处理、模型训练、回测与组合管理，并加入基于 LLM 的自主演化研发 Agent。 |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | 38.3k | #797 | 官方 · Anthropic | Anthropic 官方面向投行、股票研究、私募、财富管理等金融场景的参考 Agent、技能与数据连接器合集，可作 Claude Cowork 插件或通过 Managed Agents API 部署，所有产出均需人工签字确认。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 34.4k | #961 | 社区 | 个人交易 Agent，一条命令即可为 Agent 装备完整的量化交易能力，支持回测、多 Agent 协作和 MCP 接入。 |
| [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | 32.1k | #1094 | 社区 | 对标彭博终端的开源金融分析应用，提供市场行情、投资研究、多智能体 AI 研究桌面等功能，核心开源免费、企业版收费。 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 32.1k | #1095 | 社区 | 基于多智能体 LLM 的中文 A 股研究辅助系统，多个分析师角色辩论式协作完成个股研究、自然语言选股和模拟交易，仅供学习不构成投资建议。 |
| [virattt/dexter](https://github.com/virattt/dexter) | 27.6k | #1427 | 社区 | 自主金融深度研究 Agent，具备任务规划、自我反思和实时行情能力，定位类似“面向金融研究的 Claude Code”，仅限教育娱乐用途不构成投资建议。 |
| [HKUDS/AI-Trader](https://github.com/HKUDS/AI-Trader) | 22.6k | #1929 | 社区 | 港大数据智能实验室出品的“Agent 原生交易平台”，任意 AI Agent 均可注册加入实盘/实验交易，用同一套实时行情评分体系排行榜比拼交易能力。 |

### 内容与设计创作

视频、PPT、设计稿、社媒内容的生成与分发 · 16 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 127.3k | #85 | 社区 | 输入一个主题或关键词，自动生成视频脚本、匹配素材、生成字幕和背景音乐并合成高清短视频的一站式工具，支持接入 Kimi K3、DeepSeek 等大模型驱动文案与素材选择。 |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 98.9k | #131 | 社区 | 开源的 Claude Design 替代品，本地优先桌面应用，把编码 Agent（Claude Code/Codex/Cursor/DeepSeek Harness 等 20+ CLI）变成设计引擎，可直接产出原型、着陆页、幻灯片等真实文件。 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 62k | #350 | 社区 | 号称全球首个开源“agentic 视频制作系统”，包含 12 条生产流水线、100+ 工具和 700+ 技能/生产知识文件，把 AI 编码助手变成完整的视频制作工作室。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 57.1k | #404 | 社区 | 把文档或主题自动转成原生 PowerPoint 演示文稿的 AI 工具，支持原生形状、转场动画、数据图表、基于演讲者备注的语音旁白，以及自定义 pptx 模板。 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 54.4k | #436 | 社区 | 把 HTML、CSS、媒体和可寻址动画渲染成确定性 MP4 视频的开源框架，可通过 CLI 本地使用、作为 AI 编码 Agent 的技能调用，或作为托管创作工作流背后的渲染内核。 |
| [gitroomhq/postiz-app](https://github.com/gitroomhq/postiz-app) | 36.5k | #871 | 社区 | 开源社媒排期与自动化工具，可通过 ChatGPT/Claude/Claude Code/Codex/Cursor 等 AI Agent 直接驱动发布，提供 Node SDK 和 n8n/Make.com 集成。 |
| [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) | 36.1k | #893 | 社区 | 把 AI 与 draw.io 结合的 Next.js 网页应用，通过对话创建、修改和优化图表。 |
| [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | 32k | #1098 | 社区 | 自动化线上变现流程的应用，包含自动生成并上传短视频、Twitter 机器人、联盟营销等模块。 |
| [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | 29.4k | #1276 | 社区 | AI 视频平台的开源替代，接入 400 多个模型生成图像与视频，宣称无内容限制。 |
| [ATH-MaaS/Pixelle-Video](https://github.com/ATH-MaaS/Pixelle-Video) | 28.5k | #1357 | 社区 | AI 全自动短视频引擎：输入主题即可自动撰写文案、生成配图或视频、合成配音并加背景音乐。 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | 27.8k | #1417 | 社区 | browser-use 团队出品的视频剪辑 Agent 技能，用 Claude Code 处理原始素材：去除口癖卡顿、自动调色、加字幕、生成动效转场并自我评估渲染效果。 |
| [onlook-dev/onlook](https://github.com/onlook-dev/onlook) | 26.8k | #1497 | 官方 · Onlook | 面向设计师的 AI 优先设计工具，直接在代码库之上可视化设计和编辑前端界面。 |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 26.6k | #1517 | 社区 | 面向“一人公司”的 AI 内容营销 Agent 平台，用自动化 Agent 帮创作者在抖音、小红书、YouTube 等十余个主流平台构建、分发并变现内容。 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24.4k | #1737 | 社区 | 开源本地优先 3D 建筑编辑器，浏览器或 CLI 运行，通过 MCP 连接 AI Agent 协作完成建筑/室内设计的参数化建模。 |
| [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) | 23.1k | #1879 | 社区 | 隐私优先应用，剥离自己拥有内容上的多厂商 AI 水印/溯源标记（含 SynthID、C2PA 等），提供 Agent 技能和独立 HTTP 服务两种形态。 |
| [wandb/openui](https://github.com/wandb/openui) | 22.6k | #1941 | 官方 · Weights & Biases | Weights & Biases 出品的生成式 UI 工具，用自然语言描述界面，实时渲染，并可转换成 React 等前端框架的代码。 |

### 安全与渗透测试

自主渗透测试与漏洞验证 · 3 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [usestrix/strix](https://github.com/usestrix/strix) | 65.7k | #312 | 社区 | 开源 AI 渗透测试工具，自主 AI“黑客”像真实攻击者一样动态运行代码、发现漏洞并通过实际 PoC 验证，可无缝集成进 GitHub Actions/CI-CD 在 PR 阶段自动扫描。 |
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | 48.5k | #533 | 社区 | 自主 AI 渗透测试 Agent，分析源码、定位攻击路径并执行真实漏洞利用来验证漏洞（无利用不出报告），支持 CI/CD 集成、SARIF 输出和 BYOK。 |
| [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | 25.1k | #1655 | 社区 | 全自主 AI Agent 渗透测试系统，多 Agent 协作完成复杂安全测试任务，支持 Ollama/OpenAI/Anthropic 等多种模型供应商接入。 |

### 搜索、情报与舆情

AI 搜索引擎、新闻热点与舆情监控 · 4 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87.6k | #179 | 社区 | 实时全球情报仪表盘，AI 驱动的新闻聚合、地缘政治监控与基础设施追踪，提供统一的态势感知界面，内置 3D 地球与 WebGL 平面地图双引擎。 |
| [sansan0/TrendRadar](https://github.com/sansan0/TrendRadar) | 62.6k | #341 | 社区 | AI 驱动的舆情与热点监控工具，聚合多平台热榜和 RSS 订阅、支持关键词精准筛选，AI 智能筛选新闻、翻译并生成简报直推手机，可接入 MCP 架构做自然语言分析。 |
| [666ghj/BettaFish](https://github.com/666ghj/BettaFish) | 42.3k | #666 | 社区 | 从零实现的多智能体舆情分析系统“微舆”，AI 爬虫集群 7x24 小时覆盖国内外 30+ 社媒，5 类专业 Agent 加“论坛”辩论机制协同分析海量评论，预测舆情走向辅助决策。 |
| [ItzCrazyKns/Vane](https://github.com/ItzCrazyKns/Vane) | 36.9k | #861 | 社区 | 隐私优先、完全自托管的 AI 问答搜索引擎（原 Perplexica），支持本地 Ollama 与 OpenAI/Claude/Gemini/Groq 等云端模型，基于 SearxNG 聚合多搜索引擎并标注信息来源。 |

### 知识管理与学习

笔记、NotebookLM 类工具、AI 辅导、论文翻译、会议纪要 · 7 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46.6k | #568 | 社区 | 隐私优先、自托管的知识工作空间，让人类与 AI Agent 协作完成从想法到洞察的知识管理，支持 MCP，Docker/K8s 部署。 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | 40.6k | #713 | 社区 | 终身个性化辅导 Agent，多语言界面，支持工作区知识库、图文材料上传、任务看板与对话恢复，围绕 LightRAG 构建教育场景的深度检索能力。 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | 39.6k | #747 | 社区 | 开源版 Notebook LM，私有、多模型、可 100% 本地部署，支持 18+ 模型供应商、PDF/音视频/网页等多模态内容整理、AI 播客生成和全文向量搜索。 |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | 39.6k | #748 | 社区 | 清华大学出品的开放多智能体互动课堂，一键生成沉浸式多智能体学习体验，v1.0 新增 Agent Workbench，可从上传的资料自主规划课程、逐页构建并持续修订。 |
| [PDFMathTranslate/PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate) | 37.3k | #838 | 社区 | 保留排版的科学 PDF 双语翻译工具（EMNLP 2025 Demo），支持公式、图表、目录、批注完整保留，提供 CLI/GUI/MCP/Docker/Zotero 多种接入方式，对接 Google/DeepL/Ollama/OpenAI 等翻译服务。 |
| [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | 31.3k | #1147 | 社区 | 隐私优先的 AI 会议助手，基于 Rust 用 Parakeet/Whisper 做本地实时转录、说话人分离，再用 Ollama 生成会议纪要，100% 本地处理。 |
| [nextai-translator/nextai-translator](https://github.com/nextai-translator/nextai-translator) | 25k | #1670 | 社区 | 基于 ChatGPT API 的划词翻译浏览器插件与跨平台桌面应用，不止翻译，还支持润色、总结等。因商标问题由原名改名。 |

### 求职

职位筛选、简历优化与投递追踪 · 3 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 73.1k | #263 | 社区 | 开源 AI 求职工具，本地运行在编码 CLI 里，扫描招聘网站并把职位评为 A-H 结构化报告、打分排序，还能定制简历、追踪投递进度；作者用它投了 740 份、面试 12 次、拿到 offer 后开源。 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 44.6k | #616 | 社区 | 基于 Claude Code 搭建的个人求职自动化框架，自动评估职位、定制简历、写求职信、准备面试，作者用它拿到了 20 个面试和 1 份录用。 |
| [srbhr/Resume-Matcher](https://github.com/srbhr/Resume-Matcher) | 28.5k | #1355 | 社区 | AI 简历优化工具，支持 100+ 本地/云端 LLM，上传简历和职位描述后生成针对性改进建议、求职信和面试准备。 |

## 学习资源

LLM、Agent、机器学习与深度学习的教程、图书、Prompt 与 Awesome 合集

### LLM 原理与训练教程

从零实现 / 训练大模型的课程、图书与路线图 · 18 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 120.8k | #93 | 官方 · Microsoft | Microsoft 官方出品的生成式 AI 入门课程，21 节课覆盖从基础概念到实际构建的完整路径，配套代码示例和多语言翻译（含简繁中文）。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 105.8k | #116 | 社区 | 配套图书《Build a Large Language Model (From Scratch)》的官方代码仓库，手把手教你从零用 PyTorch 实现、预训练并微调一个类 GPT 的 LLM。 |
| [mlabonne/llm-course](https://github.com/mlabonne/llm-course) | 83.2k | #193 | 社区 | 系统学习大语言模型的课程，分 LLM 基础、LLM 科学家（训练最好的模型）、LLM 工程师（构建部署 LLM 应用）三部分，配套路线图和 Colab notebook。 |
| [karpathy/nanoGPT](https://github.com/karpathy/nanoGPT) | 63.5k | #329 | 社区 | Karpathy 编写的最小化 GPT 训练与微调仓库，用几百行 PyTorch 复现 GPT-2 规模模型的训练。作者已说明该仓库过时，推荐改用 nanochat。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 62.9k | #338 | 社区 | 从零开始、仅需几块钱成本和 2 小时训练时间即可训练出约 6400 万参数的超小语言模型 MiniMind，开源了预训练、SFT、LoRA、RLHF、蒸馏等大模型全流程的极简 PyTorch 实现，兼具复现项目与教程性质。 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 62k | #348 | 社区 | 面向 AI 工程的系统性课程，523 节课覆盖深度学习、LLM、Agent、计算机视觉等主题，多语言翻译版本由机器翻译自动生成并提交到仓库。 |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | 58.4k | #391 | 社区 | Andrej Karpathy 出品的最简 LLM 训练 Harness，单 GPU 节点即可跑通分词、预训练、微调、评估、推理全流程，用约 100 美元、8×H100 跑 2 小时即可训练出堪比 2019 年耗资 4.3 万美元的 GPT-2 级别模型。 |
| [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 55.5k | #420 | 社区 | 上海交通大学《自然语言处理前沿技术》《人工智能安全技术》课程拓展而来的公益性大模型编程实践教程系列，覆盖数学推理、GUI Agent、大模型对齐等主题。 |
| [karpathy/LLM101n](https://github.com/karpathy/LLM101n) 🗄️已归档 | 37.5k | #830 | 社区 | Andrej Karpathy 发起的教学项目，计划从零手把手（Python/C/CUDA）教你搭建一个类 ChatGPT 的故事生成 LLM，目前该课程仍在由 Eureka Labs 开发中，仓库处于归档状态。 |
| [datawhalechina/happy-llm](https://github.com/datawhalechina/happy-llm) | 34.1k | #975 | 社区 | Datawhale 出品的系统性 LLM 教程，从 NLP 基础一路讲到手搭 LLaMA2、预训练/SFT/LoRA 微调全流程，直到 Agentic RL（GRPO/Search-R1/ReTool）。 |
| [datawhalechina/self-llm](https://github.com/datawhalechina/self-llm) | 32.4k | #1074 | 社区 | 《开源大模型食用指南》，面向中文初学者的 Linux 环境快速部署/微调开源大模型教程，覆盖 LLaMA、ChatGLM、InternLM 等主流模型的环境配置、部署和高效微调全流程。 |
| [karpathy/llm.c](https://github.com/karpathy/llm.c) | 31.1k | #1159 | 社区 | Karpathy 用纯 C / CUDA 实现的 LLM 训练代码，不依赖 PyTorch 和 Python，重点是复现 GPT-2 与 GPT-3 系列的预训练，并附有对应的 PyTorch 参考实现。 |
| [aishwaryanr/awesome-generative-ai-guide](https://github.com/aishwaryanr/awesome-generative-ai-guide) | 29.6k | #1259 | 社区 | 生成式 AI 一站式资源仓库，按“使用 AI / 构建 AI / 理解研究 / 面试准备”四条路径组织课程、论文、面试题和笔记本。 |
| [HandsOnLLM/Hands-On-Large-Language-Models](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models) | 29.4k | #1283 | 社区 | O'Reilly 书籍《Hands-On Large Language Models》官方配套代码仓库，近 300 张自制配图讲解 LLM 实用工具和概念。 |
| [harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book) | 28.7k | #1337 | 社区 | 哈佛大学 CS249r 课程教材《机器学习系统》，涵盖基础到 Agentic AI、物理 AI 等前沿内容，多语言翻译开放阅读。 |
| [liguodongiot/llm-action](https://github.com/liguodongiot/llm-action) | 25.1k | #1656 | 社区 | 大模型技术原理与实战经验分享项目，系统覆盖 LLM 训练、推理、压缩、评测、Prompt 工程和 LLMOps 全链路知识与教程。 |
| [karpathy/minGPT](https://github.com/karpathy/minGPT) | 24.9k | #1678 | 社区 | Karpathy 对 OpenAI GPT 的极简 PyTorch 重实现，涵盖训练与推理，强调小巧、清晰、便于教学。 |
| [karpathy/nn-zero-to-hero](https://github.com/karpathy/nn-zero-to-hero) | 24.6k | #1710 | 社区 | Karpathy 经典神经网络系列教程，从零手写反向传播（micrograd）到语言模型（makemore），配套 YouTube 视频和 Jupyter Notebook 代码。 |

### Agent 与应用开发教程

Agent、RAG、Prompt 工程、Claude Code 的教程与官方 Cookbook · 18 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 81.4k | #203 | 社区 | Datawhale 社区出品的《从零开始构建智能体》系统教程，从智能体核心原理出发，带你亲手构建真正 AI 原生（而非流程驱动）的多智能体应用。 |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78.7k | #217 | 社区 | 系统性的提示工程指南，收录关于 Prompt Engineering、Context Engineering、RAG 和 AI Agent 的教程、论文与 notebook 资源。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 77.8k | #219 | 社区 | 从零实现一个类 Claude Code 的极简 Agent Harness 的教学项目，核心理念是“Agency 来自模型训练本身，Harness 只是让模型能实际工作的载体”。 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 76.3k | #233 | 官方 · OpenAI | OpenAI 官方示例与指南集合，提供使用 OpenAI API 完成常见任务的可复用代码示例，覆盖 Python 为主但概念可迁移到任何语言。 |
| [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | 76.2k | #235 | 官方 · Microsoft | Microsoft 官方 AI Agent 入门课程，18 节课教你从零开始构建 AI Agent，涵盖 AutoGen、Semantic Kernel、Foundry 等微软自家框架。 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 66.8k | #297 | 社区 | 从“vibe coding”到“agentic engineering”的 Claude Code 最佳实践合集，系统梳理子 Agent、自定义命令等概念的最佳实践与对应实现示例。 |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | 53.1k | #454 | 官方 · Anthropic | Anthropic 官方 Claude 使用范例合集，提供可直接复制进项目的代码片段，帮助开发者上手用 Claude API 构建应用。 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 51.9k | #473 | 社区 | 《深入理解 AI Agent：设计原理与工程实践》开源图书主仓库，围绕“Agent = LLM + 上下文 + 工具”这一核心公式，用十章内容从原理讲到工程实战，提供正文、配图与配套代码。 |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | 41.7k | #680 | 社区 | 图解版 Claude Code 学习指南，用 Mermaid 图和可直接复制的模板教你从基础命令到编排 Agent、Hook、技能和 MCP 服务器的完整用法。 |
| [anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) | 38.4k | #796 | 官方 · Anthropic | Anthropic 官方交互式提示工程教程，9 章配练习，教你从基础提示结构到复杂场景（法律、客服等）系统掌握 Claude 提示技巧。 |
| [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | 38.1k | #805 | 社区 | 面向 AI 工程的教程集合，包含 LLM、RAG 与真实 Agent 应用的实战示例，以 Jupyter Notebook 为主。 |
| [huggingface/agents-course](https://github.com/huggingface/agents-course) | 33.1k | #1041 | 官方 · Hugging Face | Hugging Face 官方 Agent 课程，4 个单元从 Agent/LLM 基础讲到函数调用微调，免费开放注册学习。 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 29.6k | #1262 | 社区 | 42+ 个可运行 Notebook 教程，系统讲解从基础到前沿的 RAG 技术实现原理和代码，社区驱动的教学项目。 |
| [humanlayer/12-factor-agents](https://github.com/humanlayer/12-factor-agents) | 26.5k | #1523 | 社区 | 仿照 12-Factor App 理念总结的 12 条构建可靠 LLM 应用原则，作者结合大量生产级 Agent 实践经验写成，被广泛引用的方法论文档。 |
| [datawhalechina/llm-cookbook](https://github.com/datawhalechina/llm-cookbook) | 24.8k | #1695 | 社区 | Datawhale 出品的面向开发者 LLM 入门教程，翻译复现吴恩达与 OpenAI 合作的大模型系列课程，覆盖 Prompt 工程、LangChain 应用开发到生成式 AI 评估。 |
| [NirDiamant/GenAI_Agents](https://github.com/NirDiamant/GenAI_Agents) | 24.4k | #1728 | 社区 | 50+ 篇教程和实现，从简单对话机器人到复杂多智能体系统，系统讲解生成式 AI Agent 技术的构建方法。 |
| [github/copilot-docs](https://github.com/github/copilot-docs) 🗄️已归档 | 23.2k | #1870 | 官方 · GitHub | GitHub Copilot 技术预览期间使用的文档仓库；Copilot 正式发布后文档已迁移，本仓库仅作留存。 |
| [anthropics/courses](https://github.com/anthropics/courses) 🗄️已归档 | 22.9k | #1907 | 官方 · Anthropic | Anthropic 官方教育课程合集，含 API 基础、Prompt 工程交互教程、真实场景提示、Prompt 评测和工具调用共 5 门课程，建议按顺序学习。 |

### 深度学习教程与论文精读

深度学习的课程、图书、代码教程、论文复现与精读 · 15 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [d2l-ai/d2l-zh](https://github.com/d2l-ai/d2l-zh) | 81.3k | #205 | 社区 | 《动手学深度学习》中文版：交互式教材，把概念、数学推导与可运行代码放在同一处，被多所高校用作教材。 |
| [labmlai/annotated_deep_learning_paper_implementations](https://github.com/labmlai/annotated_deep_learning_paper_implementations) | 67.5k | #292 | 社区 | 60 多篇深度学习论文的 PyTorch 简洁实现，附并排的逐行讲解，涵盖 Transformer、扩散模型、强化学习等。 |
| [scutan90/DeepLearning-500-questions](https://github.com/scutan90/DeepLearning-500-questions) | 57.6k | #398 | 社区 | 《深度学习 500 问》：以问答形式梳理概率、线性代数、机器学习、深度学习与计算机视觉等常见问题，也是同名出版物的开源版。 |
| [aymericdamien/TensorFlow-Examples](https://github.com/aymericdamien/TensorFlow-Examples) | 43.7k | #635 | 社区 | 面向初学者的 TensorFlow 教程与示例，同时提供 Notebook 与源码，支持 TF v1 和 v2。 |
| [floodsung/Deep-Learning-Papers-Reading-Roadmap](https://github.com/floodsung/Deep-Learning-Papers-Reading-Roadmap) | 39.6k | #752 | 社区 | 给深度学习新人的论文阅读路线图，按主题与难度排列经典论文并附链接。 |
| [exacity/deeplearningbook-chinese](https://github.com/exacity/deeplearningbook-chinese) | 37.7k | #822 | 社区 | 《Deep Learning》（花书）的中文翻译，由社区协作翻译与校对，以 LaTeX 维护。 |
| [mli/paper-reading](https://github.com/mli/paper-reading) | 33.9k | #992 | 社区 | 李沐的深度学习论文精读视频与笔记清单，逐段讲解经典与新论文，包括 Llama 3.1、Sora 等。 |
| [yunjey/pytorch-tutorial](https://github.com/yunjey/pytorch-tutorial) | 32.5k | #1068 | 社区 | 面向深度学习研究者的 PyTorch 教程，多数模型只用 30 行左右代码实现，从基础到 GAN、图像描述等。 |
| [google-research/tuning_playbook](https://github.com/google-research/tuning_playbook) | 30.3k | #1196 | 官方 · Google | Google Research 的深度学习调参手册，系统讲解如何选择模型结构、批大小、学习率等以最大化模型性能。 |
| [d2l-ai/d2l-en](https://github.com/d2l-ai/d2l-en) | 29.7k | #1247 | 社区 | Dive into Deep Learning 英文版：交互式深度学习教材，提供多框架代码、数学推导与讨论区，被数百所大学采用。 |
| [WZMIAOMIAO/deep-learning-for-image-processing](https://github.com/WZMIAOMIAO/deep-learning-for-image-processing) | 26.4k | #1530 | 社区 | 面向图像处理的深度学习教程，讲解分类与目标检测等网络的结构与创新点，并分别给出 PyTorch 和 TensorFlow 的搭建与训练代码，配套视频。 |
| [fastai/fastbook](https://github.com/fastai/fastbook) | 25.4k | #1638 | 社区 | fast.ai 的书籍，以 Jupyter Notebook 形式发布，介绍深度学习、fastai 与 PyTorch，有多种语言翻译。 |
| [pytorch/examples](https://github.com/pytorch/examples) | 24.1k | #1766 | 社区 | PyTorch 官方示例集合，涵盖视觉、文本、强化学习等任务，力求短小、依赖少、质量高。 |
| [AccumulateMore/CV](https://github.com/AccumulateMore/CV) | 23.9k | #1788 | 社区 | 中文深度学习笔记合集，整理了 PyTorch、李沐动手学深度学习、吴恩达深度学习等视频课程的笔记，并涉及 CV、NLP、大模型与 Agent。 |
| [spmallick/learnopencv](https://github.com/spmallick/learnopencv) | 23.2k | #1872 | 社区 | LearnOpenCV 博客的配套代码，包含计算机视觉、深度学习与 AI 论文的 C++ 和 Python 示例。 |

### 机器学习与数据科学教程

传统机器学习、数据科学与 AI 通识的课程、图书、笔记和学习路线 · 20 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | 91.2k | #160 | 官方 · Microsoft | 微软的 12 周、26 课时经典机器学习课程，带 52 个测验，以 scikit-learn 为主，支持多语言。 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 69.3k | #282 | 官方 · Microsoft | 微软的 12 周、24 课时人工智能入门课程，涵盖符号 AI、神经网络、计算机视觉与 NLP 等。 |
| [Avik-Jain/100-Days-Of-ML-Code](https://github.com/Avik-Jain/100-Days-Of-ML-Code) | 51.8k | #474 | 社区 | 按 Siraj Raval 提出的「机器学习百日编程」整理的每日学习记录，含数据预处理、线性回归等主题的信息图与代码。 |
| [jakevdp/PythonDataScienceHandbook](https://github.com/jakevdp/PythonDataScienceHandbook) | 50k | #498 | 社区 | 《Python 数据科学手册》全文的 Jupyter Notebook，讲解 IPython、NumPy、pandas、Matplotlib 与 scikit-learn。 |
| [GokuMohandas/Made-With-ML](https://github.com/GokuMohandas/Made-With-ML) | 49.7k | #509 | 社区 | 教你设计、开发、部署并迭代生产级机器学习应用的课程，涵盖 MLOps、测试与流水线。 |
| [apachecn/ailearning](https://github.com/apachecn/ailearning) | 42.6k | #658 | 社区 | AiLearning：数据分析、机器学习实战、线性代数、PyTorch、NLTK 与 TF2 的中文学习路线与教程。 |
| [fengdu78/Coursera-ML-AndrewNg-Notes](https://github.com/fengdu78/Coursera-ML-AndrewNg-Notes) | 37.9k | #811 | 社区 | 斯坦福（吴恩达）机器学习课程的中文个人笔记，可在线阅读。 |
| [microsoft/Data-Science-For-Beginners](https://github.com/microsoft/Data-Science-For-Beginners) | 37.4k | #831 | 官方 · Microsoft | 微软的 10 周、20 课时数据科学入门课程，每课含课前课后测验。 |
| [eriklindernoren/ML-From-Scratch](https://github.com/eriklindernoren/ML-From-Scratch) | 32.9k | #1051 | 社区 | 用纯 NumPy 从零实现基础机器学习模型与算法的教学项目，强调可读性而非性能。 |
| [AMAI-GmbH/AI-Expert-Roadmap](https://github.com/AMAI-GmbH/AI-Expert-Roadmap) | 31.3k | #1148 | 社区 | 成为 AI 专家的路线图，用一组图表展示各方向应学的技术与工具。 |
| [ageron/handson-ml2](https://github.com/ageron/handson-ml2) | 30k | #1226 | 社区 | 《Hands-On Machine Learning》第二版的配套 Notebook。第三版已发布，本仓库已过时。 |
| [donnemartin/data-science-ipython-notebooks](https://github.com/donnemartin/data-science-ipython-notebooks) | 29.4k | #1288 | 社区 | 数据科学 Python Notebook 合集，涵盖 TensorFlow、Keras、scikit-learn、pandas、Matplotlib、Spark 等。 |
| [ZuzooVn/machine-learning-for-software-engineers](https://github.com/ZuzooVn/machine-learning-for-software-engineers) | 28.9k | #1330 | 社区 | 给软件工程师的机器学习自学计划，按每日任务自上而下安排学习内容，参照 Coding Interview University。 |
| [CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers](https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers) | 28.2k | #1390 | 社区 | 《黑客的贝叶斯方法》：用 Python 与 PyMC 以代码优先的方式介绍贝叶斯推断与概率编程。 |
| [datasciencemasters/go](https://github.com/datasciencemasters/go) | 26.3k | #1541 | 社区 | 开源的数据科学硕士课程，汇总了数据科学各方向的免费课程与阅读材料。 |
| [datawhalechina/pumpkin-book](https://github.com/datawhalechina/pumpkin-book) | 26.1k | #1560 | 社区 | 南瓜书：对周志华《机器学习》（西瓜书）中较难公式的解析与推导补充。 |
| [ageron/handson-ml](https://github.com/ageron/handson-ml) | 25.6k | #1608 | 社区 | 《Hands-On Machine Learning》第一版的配套 Notebook。第三版已发布，本仓库已弃用。 |
| [wesm/pydata-book](https://github.com/wesm/pydata-book) | 25k | #1672 | 社区 | 《Python for Data Analysis》第 3 版的配套材料与 IPython Notebook，作者是 pandas 创建者 Wes McKinney。 |
| [trekhleb/homemade-machine-learning](https://github.com/trekhleb/homemade-machine-learning) | 24.8k | #1687 | 社区 | 常见机器学习算法的 Python 示例，含从零实现与可交互的 Jupyter Notebook 演示。 |
| [MLEveryday/100-Days-Of-ML-Code](https://github.com/MLEveryday/100-Days-Of-ML-Code) | 22.2k | #1991 | 社区 | 100-Days-Of-ML-Code 的中文版，提供机器学习学习路线、讲解与练习，已更新到现代 scikit-learn 与 Keras 3 用法。 |

### Prompt 与系统提示词

Prompt 库与各家 AI 产品的系统提示词合集 · 11 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [f/prompts.chat](https://github.com/f/prompts.chat) | 171.7k | #49 | 社区 | 前身是 Awesome ChatGPT Prompts，现已发展成最大的开源 AI Prompt 库网站，收录的提示词同时适配 ChatGPT、Claude、Gemini、Llama、Mistral 等主流模型，支持自行部署到公司内网使用。 |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | 144k | #64 | 社区 | 收集 Cursor、Claude Code、Devin、v0、Windsurf、Replit、Lovable、Perplexity 等几十款主流 AI 产品泄露/提取出的完整系统提示词和内部工具定义，用于研究这些产品的真实 Prompt 工程做法，也提醒创业公司注意系统提示词泄露风险。 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 68.7k | #285 | 社区 | 持续更新的主流 AI 产品系统提示词泄露合集，覆盖 Anthropic Claude 系列、OpenAI ChatGPT/Codex、Google Gemini、xAI Grok 等，曾被《华盛顿邮报》引用制作互动报道。 |
| [PlexPt/awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) | 62.9k | #340 | 社区 | ChatGPT 中文调教指南，按学术论文、创意写作等场景整理提示词使用方法，帮助中文用户更好地引导大模型输出。 |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | 50.8k | #485 | 社区 | 汇总 ChatGPT、Claude、Gemini、Grok、Perplexity、Cursor 等主流 AI 系统的完整泄露系统提示词、准则与工具定义，主张“AI 系统透明化”。 |
| [danielmiessler/Fabric](https://github.com/danielmiessler/Fabric) | 44.1k | #623 | 社区 | 用 AI 增强人类能力的开源框架，把众包收集的“模式”（Prompt 任务单元）按真实场景分类整理，命令行即可调用，解决 AI 能力多但难整合进日常工作流的问题。 |
| [Leey21/awesome-ai-research-writing](https://github.com/Leey21/awesome-ai-research-writing) | 34.5k | #955 | 社区 | 面向学术论文写作的提示词与 Agent 技能模板库，用于润色、改写等环节。 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | 33.8k | #1002 | 社区 | GPT Image 2 / 2.5 的提示词与案例库，含 500 多个案例和 20 多套可复用模板与技能。 |
| [linexjlin/GPTs](https://github.com/linexjlin/GPTs) | 32k | #1096 | 社区 | 收集泄露的各类自定义 GPTs 系统提示词合集，涵盖角色扮演、翻译、学习辅导等数十种场景。 |
| [JushBJJ/Mr.-Ranedeer-AI-Tutor](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor) | 29.6k | #1267 | 社区 | 早期知名的 GPT-4 个性化 AI 家教 Prompt，可按用户需求定制学习深度和风格，项目现已停止维护（标注 DISCONTINUED）。 |
| [PicoTrex/Awesome-Nano-Banana-images](https://github.com/PicoTrex/Awesome-Nano-Banana-images) | 23.8k | #1792 | 社区 | Nano Banana 系列图像模型的案例与提示词合集，展示在多种任务场景下的生成与编辑效果。 |

### Awesome 合集

LLM、Agent、ML / DL / CV / NLP 方向的项目与资源精选清单（技能类清单归入「技能库与插件市场」） · 22 个

| 项目 | Stars | 全站排名 | 出品 | 简介 |
|---|---:|---:|---|---|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 140.3k | #68 | 社区 | 100 多个开源 AI Agent、Agent 技能和 RAG 应用的合集，全部端到端跑通、Apache-2.0 协议，覆盖保险理赔、诈骗调查、旅行规划等具体场景，可以直接 clone 跑起来或当作 Claude Code 技能一键安装。 |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | 95.7k | #140 | 社区 | MCP（Model Context Protocol）服务器的集合列表，收录各类可供 Agent 调用的 MCP server 实现。 |
| [josephmisiti/awesome-machine-learning](https://github.com/josephmisiti/awesome-machine-learning) | 74.5k | #248 | 社区 | 按编程语言分类的机器学习框架、库与软件精选清单。 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 54.8k | #429 | 社区 | 精选的 Claude Code 资源合集，收录顶级技能、Agent、状态栏、开发者工具和插件，强调代码质量、安全性和原创性。 |
| [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) | 40.9k | #704 | 社区 | Cursor AI 编辑器项目规则（.cursor/rules）配置文件合集，按前端框架、后端、移动端、测试、安全等分类，帮助 Cursor 按项目定制行为。 |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | 39.5k | #754 | 官方 · GitHub | GitHub 官方维护的 Copilot 定制资源合集，收录社区贡献的自定义 Agent、指令、技能、Hook 和插件，配套可搜索的网站和面向 Agent 的 llms.txt。 |
| [deepseek-ai/awesome-deepseek-integration](https://github.com/deepseek-ai/awesome-deepseek-integration) | 39.3k | #760 | 官方 · DeepSeek | DeepSeek 官方维护的第三方集成合集，收录把 DeepSeek API 接入各类主流软件（IM 插件、浏览器扩展、IDE 插件等）的方案列表。 |
| [ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects) | 38.2k | #801 | 社区 | 按行业整理的 AI Agent 用例与项目合集，附框架说明与实现链接。 |
| [ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code](https://github.com/ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code) | 37k | #855 | 社区 | 500 多个带代码的 AI、机器学习、深度学习、计算机视觉与 NLP 项目清单。 |
| [hesamsheikh/awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases) | 31.7k | #1126 | 社区 | 社区收集的 OpenClaw 真实使用案例合集，覆盖社媒摘要、账号分析、自动化发帖等场景，提醒引用的第三方技能/插件未经审计需自行评估安全性。 |
| [eugeneyan/applied-ml](https://github.com/eugeneyan/applied-ml) | 30.5k | #1190 | 社区 | 收集各公司分享的数据科学与机器学习生产实践的论文、文章与博客。 |
| [e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) | 30.2k | #1205 | 社区 | AI 自主 Agent 项目合集，区分开源项目与闭源产品/公司两部分，由 E2B（Code Interpreter 服务商）维护。 |
| [academic/awesome-datascience](https://github.com/academic/awesome-datascience) | 30.1k | #1212 | 社区 | 数据科学学习与实践资源清单，含学习路线、工具、数据集与课程。 |
| [ChristosChristofidis/awesome-deep-learning](https://github.com/ChristosChristofidis/awesome-deep-learning) | 29k | #1318 | 社区 | 深度学习教程、项目与社区的精选清单，含图书、课程、论文、框架与数据集。 |
| [Hannibal046/Awesome-LLM](https://github.com/Hannibal046/Awesome-LLM) | 27.4k | #1445 | 社区 | 大语言模型精选资源合集，收录里程碑论文、训练框架、推理工具、课程教程和公开可用的模型/API，持续更新热门趋势项目。 |
| [terryum/awesome-deep-learning-papers](https://github.com/terryum/awesome-deep-learning-papers) | 26.2k | #1551 | 社区 | 被引用最多的深度学习论文清单，作者已因论文数量激增而停止维护。 |
| [enescingoz/awesome-n8n-templates](https://github.com/enescingoz/awesome-n8n-templates) | 25.7k | #1602 | 社区 | 280+ 免费 n8n 自动化工作流模板合集，覆盖 Gmail、Telegram、AI Agent、RAG 聊天机器人等场景，持续更新的最大开源 n8n 模板集合。 |
| [lukasmasuch/best-of-ml-python](https://github.com/lukasmasuch/best-of-ml-python) | 23.8k | #1790 | 社区 | 按排名整理的优秀 Python 机器学习库清单，每周自动更新。 |
| [jbhuang0604/awesome-computer-vision](https://github.com/jbhuang0604/awesome-computer-vision) | 23.6k | #1824 | 社区 | 计算机视觉资源的精选清单，含课程、图书、数据集、软件与论文。 |
| [sebastianruder/NLP-progress](https://github.com/sebastianruder/NLP-progress) | 23k | #1897 | 社区 | 追踪各 NLP 任务最新进展与基准结果的仓库，按任务和语言分类。 |
| [amusi/CVPR2026-Papers-with-Code](https://github.com/amusi/CVPR2026-Papers-with-Code) | 22.9k | #1906 | 社区 | CVPR 2026 论文与对应开源代码的合集。 |
| [AiHubCN/Awesome-Chinese-LLM](https://github.com/AiHubCN/Awesome-Chinese-LLM) | 22.8k | #1919 | 社区 | 整理中文开源大语言模型的资源合集，以中小规模、可私有化部署、训练成本较低的模型为主，涵盖底座模型、垂直微调应用和数据集教程，已收录 100+ 资源。 |
