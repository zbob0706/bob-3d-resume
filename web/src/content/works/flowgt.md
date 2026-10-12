---
title: FlowGT · AI 求职匹配平台
year: 2026
role: 主要开发（3–5 人团队）
tags: [Cloudflare Workers, D1, LLM, SaaS]
link: https://flowgt.co.nz
---

> 已上线的 serverless AI 求职平台：帮求职者分析岗位 JD、管理投递，并每天推送个性化岗位。

## 我负责的部分

- 平台主体开发：35 个 API 端点、35 张数据表、26 个版本化迁移
- LLM 岗位 JD 分析：JSON Schema 约束输出、失败重试、哈希结果缓存
- AI 成本控制：推理前计配额、熔断、失败自动退款、分档日限额
- 每日个性化岗位推送：幂等 ingest API + 注意夏令时的定时 worker
- CV 以 AES-256-GCM 加密存储；386 条回归断言，每次 push 在 CI 运行（约 20 秒）

## 状态

已上线（flowgt.co.nz），无付费会员。
