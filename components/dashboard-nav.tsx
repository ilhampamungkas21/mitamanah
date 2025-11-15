"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Images, LayoutDashboard, Sparkles } from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Hero Section", href: "/dashboard/hero", icon: Sparkles },
  { label: "Articles", href: "/dashboard/articles", icon: FileText },
  { label: "Galleries", href: "/dashboard/galleries", icon: Images },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-card border-r border-border p-4 hidden md:flex flex-col sticky top-0 h-screen">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-3 font-bold text-lg mb-8 p-2 rounded-lg hover:bg-muted transition-colors"
      >
        <Image src="/assets/img/logo/logo.webp" width={60} height={60} alt="Logo MIT Amanah"/>
        <span>MIT Amanah</span>
      </Link>

      {/* Navigation Items */}
      <div className="space-y-2 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                isActive ? "bg-primary text-primary-foreground shadow-md" : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">MIT Amanah Admin</p>
      </div>
    </nav>
  )
}
