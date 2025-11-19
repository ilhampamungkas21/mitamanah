import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import "../../styles/index.scss";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "MIT Amanah | Home - School in Sragen, Jawa Tengah",
  description: "Welcome to MIT Amanah. Explore our school, read latest articles, and view our photo gallery.",
}

export default async function HomePage() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
