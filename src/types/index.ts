export interface Skill {
  lang: string
  url?: string
}

export interface Experience {
  place: string
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
  experiences: Experience[]
  socials: SocialLink[]
  avatar: SocialLink
  stackCards: { cards: StackCard[] }
  settings: {
    skillsPerPage: number
    stackCardsOffset: string
  }
}

export interface Project {
  id: number
  name: string
  fullName: string
  year: string
  desc: string
  tags: string[]
  url?: string
  img?: string
}