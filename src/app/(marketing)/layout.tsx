import { marketingConfig } from "@/config/marketing"
import { Navbar } from "@/components/navbar"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container z-10 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <Navbar items={marketingConfig.navbar} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
