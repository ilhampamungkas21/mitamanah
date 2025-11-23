import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import NewsDetails from "@/components/news-details"
import Wrapper from "@/layouts/Wrapper"

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params
  const supabase = await createClient()

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!article) {
    return { title: "Article Not Found" }
  }

  const metaTitle = article.seo_title || `${article.title} - MIT Amanah`
  const metaDescription = article.seo_description || article.excerpt
  const canonical = article.canonical_url || undefined
  const robotsObj = article.meta_robots
    ? { index: !article.meta_robots.includes("noindex"), follow: !article.meta_robots.includes("nofollow") }
    : undefined
  const keywords = article.seo_keywords
    ? article.seo_keywords.split(",").map((k: string) => k.trim()).filter(Boolean)
    : undefined

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    robots: robotsObj,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      publishedTime: article.created_at,
      url: canonical,
      images: article.image_url ? [{ url: article.image_url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: article.image_url ? [article.image_url] : undefined,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!article) {
    notFound()
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.seo_title || article.title,
    description: article.seo_description || article.excerpt,
    image: article.image_url ? [article.image_url] : undefined,
    datePublished: article.created_at,
    dateModified: article.updated_at,
    author: [{ "@type": "Person", name: article.author || "Admin" }],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mitamanah.com/articles/${article.slug}`,
    },
  }

  return (
    <Wrapper>
      <NewsDetails article={article}/>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </Wrapper>
  )
}
