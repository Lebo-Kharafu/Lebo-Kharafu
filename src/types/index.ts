export interface Skill {
  lang: string
  url?: string
}

export interface SocialLink {
  icon: string
  alt: string
  url?: string
}

export interface StackCard {
  badge: string
  title: string
  description: string
  image?: string
}

export interface CardItem {
  id?: number | string
  image?: string
}

export interface PersonalInfo {
  name: string
  email: string
  emailDisplay: string
  rank: string
  role: string
  about: string
  experience: number
  projects: number
}

export interface PortfolioDetails {
  personal: PersonalInfo
  skills: Skill[]
  socials: SocialLink[]
  avatar: SocialLink
  stackCards: { cards: StackCard[] }
  settings: {
    skillsPerPage: number
    stackCardsOffset: string
  }
}