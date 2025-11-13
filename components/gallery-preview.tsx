import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ImageIcon } from "lucide-react"
import type { Gallery } from "@/lib/types"

export function GalleryPreview({ galleries }: { galleries: Gallery[] }) {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Photo Gallery</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Moments at MIT Amanah</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our vibrant school community through photos and memories of events, achievements, and daily campus
            life.
          </p>
        </div>

        {galleries.length === 0 ? (
          <Card className="bg-card border-border">
            <CardContent className="pt-12 pb-12 text-center">
              <p className="text-muted-foreground text-lg">No galleries yet. Check back soon!</p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {galleries.map((gallery) => (
                <Link key={gallery.id} href={`/galleries/${gallery.id}`}>
                  <Card className="h-full hover:shadow-lg hover:border-accent/50 transition-all duration-300 cursor-pointer overflow-hidden group bg-card border-border">
                    <div className="relative overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 h-56 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
                      <div className="text-center relative z-10 px-4 group-hover:scale-105 transition-transform duration-300">
                        <div className="bg-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <ImageIcon className="text-accent" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{gallery.title}</h3>
                        {gallery.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{gallery.description}</p>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center text-accent font-semibold group-hover:gap-2 transition-all">
                        View Gallery
                        <ArrowRight size={18} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Link href="/galleries">
                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                  View All Galleries
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
