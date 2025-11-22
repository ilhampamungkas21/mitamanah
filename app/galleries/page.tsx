import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import "../../styles/index.scss";
import Gallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "Kegiatan - MIT Amanah",
  description: "Read the latest articles and news from MIT Amanah school.",
  openGraph: {
    title: "Kegiatan - MIT Amanah",
    description: "Read the latest articles and news from MIT Amanah school.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kegiatan - MIT Amanah",
    description: "Read the latest articles and news from MIT Amanah school.",
  },
}

export default async function ArticlesPage() {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  )
}