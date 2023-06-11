import {
  Code2,
  Github,
  Laptop,
  Linkedin,
  Mail,
  Moon,
  Sun,
  type Icon as LucideIcon,
} from "lucide-react"
import { IconType as ReactIcon } from "react-icons"
import {
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export type Icon = LucideIcon & ReactIcon

export const Icons = {
  logo: Code2,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  sun: Sun,
  moon: Moon,
  laptop: Laptop,
}

export const TechIcons = {
  typescript: SiTypescript,
  next: SiNextdotjs,
  nest: SiNestjs,
  react: SiReact,
  node: SiNodedotjs,
  tailwind: SiTailwindcss,
}

export function TechIconByStack({ stack }: { stack: string }) {
  switch (stack) {
    case "typescript":
      return TechIcons.typescript
    case "next":
      return TechIcons.next
    case "nest":
      return TechIcons.nest
    case "react":
      return TechIcons.react
    case "node":
      return TechIcons.node
    case "tailwind":
      return TechIcons.tailwind
  }
  return null
}
