// 作品集数据（双语）。5 大板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '访问作品',
    detailPlaceholder: '你的作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'ai-products',
        no: '01',
        title: 'AI 产品',
        tagline: '独立开发 · 已上线 / 开发中',
        items: [
          {
            name: 'FlowGT · AI 求职匹配平台',
            meta: '已上线 flowgt.co.nz · 35 个 API 端点',
            tags: ['Cloudflare Workers', 'LLM', 'SaaS'],
            link: 'https://flowgt.co.nz',
            slug: 'flowgt',
          },
          {
            name: 'RepairIQ · AI 维修诊断与报价',
            meta: 'RAG · 10,434 条维修案例 · 75 项自动化测试',
            tags: ['Node.js', 'RAG', '多模型'],
            link: 'https://github.com/zbob0706/repair-diagnosis-tool',
            slug: 'repairiq',
          },
        ],
      },
      {
        id: 'robotics',
        no: '02',
        title: '机器人',
        tagline: 'PB Tech 门店实景运行',
        items: [
          {
            name: 'Pudu 门店机器人助手',
            meta: '500+ 条商品知识库 · 44 条促销广告 · 28 个货架点位',
            tags: ['Python', 'Pudu Cloud OpenAPI', '零售'],
            slug: 'pudu-robot',
          },
        ],
        footer: '机器人端下单 → 仓库拣货 → 收银台取货，一期已在 PB Tech Hornby 上线',
      },
      {
        id: 'tools',
        no: '03',
        title: '工具与站点',
        tagline: '自研提效工具',
        items: [
          {
            name: 'AI 简历编辑器 · Resume Studio',
            meta: '页内编辑 · 章节模板 · 一键导出 PDF',
            tags: ['AI 辅助', '简历'],
            slug: 'resume-studio',
          },
          {
            name: '个人网站',
            meta: '项目作品集 · GitHub Pages 部署',
            link: 'https://zbob0706.github.io/personal-website/',
            slug: 'personal-website',
          },
        ],
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Visit site',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'ai-products',
        no: '01',
        title: 'AI Products',
        tagline: 'Indie-built · live / in development',
        items: [
          {
            name: 'FlowGT · AI Job-Matching Platform',
            meta: 'Live at flowgt.co.nz · 35 API endpoints',
            tags: ['Cloudflare Workers', 'LLM', 'SaaS'],
            link: 'https://flowgt.co.nz',
            slug: 'flowgt',
          },
          {
            name: 'RepairIQ · AI Repair Diagnosis & Quoting',
            meta: 'RAG · 10,434 repair cases · 75 automated tests',
            tags: ['Node.js', 'RAG', 'Multi-model'],
            link: 'https://github.com/zbob0706/repair-diagnosis-tool',
            slug: 'repairiq',
          },
        ],
      },
      {
        id: 'robotics',
        no: '02',
        title: 'Robotics',
        tagline: 'Running live in a PB Tech store',
        items: [
          {
            name: 'Pudu In-Store Robot Assistant',
            meta: '500+ entry product knowledge base · 44 promo ads · 28 shelf points',
            tags: ['Python', 'Pudu Cloud OpenAPI', 'Retail'],
            slug: 'pudu-robot',
          },
        ],
        footer: 'Order on the robot → warehouse picking → counter pickup — phase one live at PB Tech Hornby',
      },
      {
        id: 'tools',
        no: '03',
        title: 'Tools & Sites',
        tagline: 'Self-built productivity tools',
        items: [
          {
            name: 'AI Resume Editor · Resume Studio',
            meta: 'In-page editing · section templates · one-click PDF export',
            tags: ['AI-assisted', 'Résumé'],
            slug: 'resume-studio',
          },
          {
            name: 'Personal Website',
            meta: 'Project portfolio · deployed on GitHub Pages',
            link: 'https://zbob0706.github.io/personal-website/',
            slug: 'personal-website',
          },
        ],
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
// 暂无封面图：缺图时 Works.tsx 自动用「大编号渐变」占位。
// 以后把图放进 public/works/covers/ 并在这里按板块 id 登记即可点亮。
export const SECTION_COVERS: Record<string, string> = {}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
