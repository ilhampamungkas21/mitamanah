import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export const metadata: Metadata = {
  title: "MIT Amanah | School in Sragen, Jawa Tengah",
  description:
    "MIT Amanah is a modern school located in Kebonromo, Sragen, Jawa Tengah. Discover our educational programs, articles, and photo galleries.",
  keywords: "MIT Amanah, school, Sragen, Kebonromo, education, Jawa Tengah",
  authors: [{ name: "MIT Amanah" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mitamanah.com",
    siteName: "MIT Amanah",
    title: "MIT Amanah | School in Sragen",
    description: "Discover MIT Amanah school - your community of learning and growth in Sragen, Jawa Tengah",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIT Amanah School",
    description: "Educational excellence in Sragen, Jawa Tengah",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

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
