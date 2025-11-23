import type React from "react"
import type { Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) {
    redirect("/auth/login")
  }

  return (
     <div className="flex min-h-screen bg-background">
      <DashboardNav />
      <div className="flex-1 flex flex-col">
        <DashboardHeader user={user} />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
        <Analytics/>
      </div>
    </div>
  )
}
