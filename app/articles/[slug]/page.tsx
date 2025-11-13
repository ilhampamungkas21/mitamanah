import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params // ← gunakan await di sini
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
  const { slug } = await params // ← ini juga perlu di-await
  const supabase = await createClient()

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!article) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/articles" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Articles
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>

          <div className="flex gap-4 text-muted-foreground mb-8 text-sm">
            <span>{article.author}</span>
            <span>•</span>
            <span>
              {new Date(article.created_at).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {article.image_url && (
            <Image
              src={article.image_url || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
              width={1200}
              height={600}
            />
          )}

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  headline: article.title,
                  description: article.seo_description || article.excerpt,
                  datePublished: article.created_at,
                  dateModified: article.updated_at,
                  author: {
                    "@type": "Organization",
                    name: article.author || "MIT Amanah",
                  },
                  image: article.image_url || undefined,
                  mainEntityOfPage: article.canonical_url || undefined,
                }),
              }}
            />
          </div>

          <div className="border-t border-border pt-8">
            <Link
              href="/articles"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View All Articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
