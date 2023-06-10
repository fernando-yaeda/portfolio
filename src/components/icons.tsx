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
import { DiNodejsSmall, DiReact } from "react-icons/di"
import {
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export type Icon = LucideIcon

export const Icons = {
  logo: Code2,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  sun: Sun,
  moon: Moon,
  laptop: Laptop,
}

export type TechIcon = ReactIcon

export const TechIcons = {
  typescript: SiTypescript,
  next: SiNextdotjs,
  nest: SiNestjs,
  react: DiReact,
  node: DiNodejsSmall,
  tailwind: SiTailwindcss,
}
