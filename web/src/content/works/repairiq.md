---
title: RepairIQ · AI 维修诊断与报价工具
year: 2026
role: 独立设计与开发
tags: [Node.js, Express, SQLite, RAG, 多模型]
link: https://github.com/zbob0706/repair-diagnosis-tool
---

> 用户说不清设备坏在哪、拆机前也估不出维修价——RepairIQ 先从真实维修案例库检索相似案例，再让大模型给出带概率的诊断和报价。

## 怎么做

- 知识库：从 iFixit 与 Open Repair Data 采集清洗 10,434 条维修案例入 SQLite
- 诊断管线：检索到的案例进思维链提示词，模型返回结构化 JSON（故障概率、检查步骤、工具、注意事项）
- 模型适配层：统一接入通义千问 / OpenAI / Gemini，SSE 流式输出，失败自动降级重试
- 报价引擎：按故障概率对配件价与工时费加权，给出期望价与价格区间
- 商业化：五档套餐点数计费，含限流、配额、超档自动降级与失败退点

## 工程

75 项自动化测试、Docker 容器化、GitHub Actions 流水线。v1（Python + Claude API）已上线，v2 为 Node.js 重写版，开发中。
