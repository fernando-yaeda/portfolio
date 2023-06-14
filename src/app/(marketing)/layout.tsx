import { marketingConfig } from "@/config/marketing"
import { Navbar } from "@/components/navbar"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-10 max-w-full bg-background">
        <div className="hidden h-20 items-center justify-between py-10 md:flex">
          <Navbar items={marketingConfig.navbar} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
