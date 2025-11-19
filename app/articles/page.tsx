import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

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
  const supabase = await createClient()

  const { data: articles } = await supabase.from("articles").select("*").order("created_at", { ascending: false })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">All Articles</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Stay updated with the latest news and articles from MIT Amanah
          </p>

          {!articles || articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No articles yet.</p>
              <Link href="/" className="text-primary hover:underline">
                Return to home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  {article.image_url && (
                    <Image
                      src={article.image_url || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-semibold mb-2">
                      <Link href={`/articles/${article.slug}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{new Date(article.created_at).toLocaleDateString("id-ID")}</span>
                      <Link href={`/articles/${article.slug}`} className="text-primary hover:underline">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
