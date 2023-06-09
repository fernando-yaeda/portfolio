"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { NavItem } from "@/types"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { ModeToggle } from "./mode-toggle"

interface NavbarProps {
  items?: NavItem[]
}

export function Navbar({ items }: NavbarProps) {
  const segment = useSelectedLayoutSegment()

  return (
    <div className="container flex justify-between">
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="hidden items-center space-x-2 sm:flex">
          <Icons.logo />
          <span className="hidden font-bold sm:inline-block">f.yaeda</span>
        </Link>
        {items?.length && (
          <nav className="hidden gap-6 md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
      <ModeToggle />
    </div>
  )
}
