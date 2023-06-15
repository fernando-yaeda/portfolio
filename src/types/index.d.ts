import { Icon } from "@/components/icons"

export type SiteConfig = {
  name: string
  description: string
  links: {
    github: string
    linkedin: string
    mailTo: string
  }
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MarketingConfig = {
  navbar: NavItem[]
}

type Project = {
  title: string
  description: string
  techStack: string[]
  imageUrl?: string
  detailsId?: string[]
}

type ProjectDetails = {
  title: string
  paragraph: string
  imageUrl: string
  desktop: boolean
  background?: string
}
