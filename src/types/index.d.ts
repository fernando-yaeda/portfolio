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
