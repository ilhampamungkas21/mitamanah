import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import HomeThree from "@/components/homes/home-3"
import "../styles/index.scss";

export const metadata: Metadata = {
  title: "MIT Amanah | Home - School in Sragen, Jawa Tengah",
  description: "Welcome to MIT Amanah. Explore our school, read latest articles, and view our photo gallery.",
}

export default async function HomePage() {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  )
}
