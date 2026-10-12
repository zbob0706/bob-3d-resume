import { motion } from 'framer-motion'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/zbob0706' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/bobzhengnz' },
  { id: 'mail', label: 'Email', href: 'mailto:BoZheng.nz@gmail.com' },
]

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2006 – 2010',
        place: 'Zhejiang University of Science & Technology',
        role: 'B.Eng. in Electrical Engineering & Automation',
      },
      {
        period: '2012 – 2018',
        place: 'China Minsheng Bank · Beijing Pony Financial',
        role: 'Account Manager',
        points: [
          'Six years in banking and consumer finance',
          'Client relationships, account management and credit services',
        ],
      },
      {
        period: '2019 – 2022',
        place: 'Ningbo Yuanyuan E-commerce',
        role: 'Technical Lead',
        points: [
          'Led a team of 4 (company of 5); 500+ installment clients, 20,000+ transactions',
          'Data-driven geo-targeting cut ad costs 50% while doubling order volume',
          'Also served as Data Engineer & Mobile Platform Operations Specialist',
        ],
      },
      {
        period: '2023 – 2024',
        place: 'Lincoln University',
        role: 'Master of Applied Computing',
        points: [
          'Software & database development and GIS; A+ in specialised GIS courses',
          'Core: Advanced Software Engineering, Database Systems, Web Development, GIS',
          'Also: Technical Support Volunteer at TechMate (Mar – Sep 2024)',
        ],
      },
      {
        period: '2024 – Now',
        place: 'PB Tech · Christchurch',
        role: 'Service Technician',
        points: [
          '1,800+ service cases closed within SLA, zero complaints; 20–40 tickets a week',
          'Repairs, RMA and diagnostics — Employee of the Year 2025',
          'Initiated the Pudu in-store robot assistant: 500+ entry product knowledge base, 44 promo ads, 28 shelf points',
        ],
        groups: [
          {
            heading: 'Bob Zheng',
            sub: 'Christchurch, New Zealand',
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2006 – 2010',
        place: '浙江科技学院',
        role: '电气工程及其自动化 · 本科',
      },
      {
        period: '2012 – 2018',
        place: '民生银行 · 北京小马金融',
        role: '客户经理',
        points: ['6 年银行与消费金融经历', '客户关系、账户管理与信贷服务'],
      },
      {
        period: '2019 – 2022',
        place: '宁波源源电子商务',
        role: '技术负责人',
        points: [
          '带 4 人团队（全公司 5 人）；500+ 分期客户、20,000+ 笔交易',
          '按地区数据调整投放：广告成本降 50%，同时订单量翻倍',
          '兼数据工程师与移动平台运营',
        ],
      },
      {
        period: '2023 – 2024',
        place: '林肯大学',
        role: '应用计算硕士',
        points: [
          '软件与数据库开发、GIS 方向；GIS 课程 A+',
          '核心课程：高级软件工程、数据库系统、Web 开发、地理信息系统',
          '期间兼任 TechMate 技术支持志愿者（2024 年 3–9 月）',
        ],
      },
      {
        period: '2024 – 至今',
        place: 'PB Tech · 基督城',
        role: '服务技术员',
        points: [
          '1,800+ 服务案例按时结单、零投诉；每周处理 20–40 张工单',
          '售后维修 / RMA 与故障诊断——PB Tech 2025 年度员工',
          '主动发起 Pudu 门店机器人助手：500+ 条商品知识库、44 条促销广告、28 个货架点位',
        ],
        groups: [
          {
            heading: 'Bob Zheng',
            sub: 'Christchurch, New Zealand',
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading = group.link ? (
      <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
        {group.heading}
      </a>
    ) : (
      <span>{group.heading}</span>
    )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
