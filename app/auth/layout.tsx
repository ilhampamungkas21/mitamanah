import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
