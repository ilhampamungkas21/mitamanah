import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import News from "@/components/news"
import "../../styles/index.scss";

export const metadata: Metadata = {
  title: "Articles - MIT Amanah",
  description: "Read the latest articles and news from MIT Amanah school.",
  openGraph: {
    title: "Articles - MIT Amanah",
    description: "Read the latest articles and news from MIT Amanah school.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Articles - MIT Amanah",
    description: "Read the latest articles and news from MIT Amanah school.",
  },
}

export default async function ArticlesPage() {
  return (
    <Wrapper>
      <News />
    </Wrapper>
  )
}