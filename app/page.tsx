import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import HomeThree from "@/components/homes/home-3"
import "../styles/index.scss";

export const metadata: Metadata = {
  title: "MIT Amanah | Home - School in Sragen, Jawa Tengah",
  description: "Welcome to MIT Amanah. Explore our school, read latest articles, and view our photo gallery.",
  keywords: [
    "MIT Amanah",
    "Madrasah Ibtidaiyah Terpadu",
    "Sekolah Islam Sragen",
    "Kebonromo",
    "Ngrampal",
    "Tahfidz",
    "Pendidikan Islam",
    "Sekolah Dasar Islam",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "MIT Amanah | Home - School in Sragen, Jawa Tengah",
    description: "Welcome to MIT Amanah. Explore our school, read latest articles, and view our photo gallery.",
    url: "https://mitamanah.com/",
    images: [{ url: "/favicon.ico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIT Amanah | Home - School in Sragen, Jawa Tengah",
    description: "Welcome to MIT Amanah. Explore our school, read latest articles, and view our photo gallery.",
    images: ["/favicon.ico"],
  },
}

export default async function HomePage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MIT Amanah",
    url: "https://mitamanah.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mitamanah.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIT Amanah",
    url: "https://mitamanah.com/",
    logo: "https://mitamanah.com/favicon.ico",
  }

  return (
    <Wrapper>
      <HomeThree />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </Wrapper>
  )
}
