import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"
import type { Article } from "@/lib/types"
import Image from 'next/image';

export function ArticlesPreview({ articles }: { articles: Article[] }) {
  return (
    <section id="articles" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Latest Updates</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stay informed with our latest news, updates, and inspiring stories from MIT Amanah.
          </p>
        </div>

        {articles.length === 0 ? (
          <Card className="bg-card border-border">
            <CardContent className="pt-12 pb-12 text-center">
              <p className="text-muted-foreground text-lg">No articles yet. Check back soon!</p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {articles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card border-border overflow-hidden group">
                    {/* Article Image */}
                    {article.image_url && (
                      <div className="relative overflow-hidden h-48 bg-muted">
                        <Image
                          src={article.image_url || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <CardHeader className="pb-3">
                      <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <CardDescription className="line-clamp-2 mb-4 text-base">{article.excerpt}</CardDescription>

                      {/* Article Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(article.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                        Read more
                        <ArrowRight size={18} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Link href="/articles">
                <Button size="lg" className="rounded-full">
                  View All Articles
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
