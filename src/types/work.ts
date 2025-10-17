export type Work = {
  title: string
  desc: string
  url?: string
  stack: string[]
  role?: string
  metrics?: string[]
  problems?: string[]
  solutions?: string[]
  images?: string[]
  period?: string
  teamSize?: number
  // 추가 필드들
  tags?: string[]
  status?: string
  teamInfo?: string
  features?: string[]
  contribution?: string
  company?: string
  stackCategories?: {
    category: string
    technologies: string[]
  }[]
  troubleshooting?: {
    title: string
    problem: string
    solution: string
    reflection: string
  }[]
}
