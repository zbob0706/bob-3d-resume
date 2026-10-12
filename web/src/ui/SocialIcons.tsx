import type { SVGProps } from 'react'

// 简化的单色平台图标（currentColor），契合深色画面。
// 如需官方多彩 logo，替换对应 path 即可。

export function DouyinIcon(props: SVGProps<SVGSVGElement>) {
  // 音符 + 旗 —— 抖音的标志性符号
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 3h3a5 5 0 0 0 4.6 4.98V11A8 8 0 0 1 16 9.6V15a6 6 0 1 1-6-6c.34 0 .67.03 1 .08v3.12A3 3 0 1 0 13 15V3z" />
    </svg>
  )
}

export function BilibiliIcon(props: SVGProps<SVGSVGElement>) {
  // 电视机 + 两根天线
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 3l3 3M17 3l-3 3" />
      <rect x="3" y="6" width="18" height="13" rx="3.5" />
      <path d="M9 11v2M15 11v2" />
    </svg>
  )
}

export function XiaohongshuIcon(props: SVGProps<SVGSVGElement>) {
  // 圆角方块 + 爱心
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16.2c-2.1-1.5-4-3-4-5.1A2.1 2.1 0 0 1 12 9.9a2.1 2.1 0 0 1 4 1.2c0 2.1-1.9 3.6-4 5.1z" fill="currentColor" />
    </svg>
  )
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  // GitHub Octocat 剪影（简化）
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1 2.13 2.13 0 0 0 2.91.83 2.14 2.14 0 0 1 .64-1.33c-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03a3.6 3.6 0 0 1 .1 2.65c.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 1.11 1.11 0 0 1 .32 1.27V21c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  )
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21H9z" />
    </svg>
  )
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  )
}

export const SOCIAL_ICONS = {
  douyin: DouyinIcon,
  bilibili: BilibiliIcon,
  xiaohongshu: XiaohongshuIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
}
